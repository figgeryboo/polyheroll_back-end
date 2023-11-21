const express = require('express');
const diceSet = express.Router();
const {
  getAllSets,
  getSet,
  createSet,
  deleteSet,
  updateSet,
} = require('../queries/dicesets');
const {
  checkCharacterName,
  checkCampaign,
  checkCompleteSet,
  checkInDiceJail,
  checkCharacterLevel,
  checkD20,
  checkDiceColorTheme,
} = require('../validations/checkDiceSets');

diceSet.get('/', async (req, res) => {
  try {
    const allSets = await getAllSets();
    res.status(200).json(allSets);
  } catch (error) {
    res.status(500).json({ error: 'Foundry Error' });
  }
});

diceSet.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const oneSet = await getSet(id);
    res.status(200).json(oneSet);
  } catch (error) {
    res.status(404).json({ error: 'Set not Found' });
  }
});

diceSet.post(
  '/',
  checkCharacterName,
  checkCampaign,
  checkCompleteSet,
  checkInDiceJail,
  checkCharacterLevel,
  checkD20,
  checkDiceColorTheme,
  async (req, res) => {
    try {
      const body = req.body;
      const createdSet = await createSet(body);
      res.status(200).json(createdSet);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
);

diceSet.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSet = await deleteSet(id);
    res.status(200).json(deletedSet);
  } catch (error) {
    res.status(404).json({ error: 'Set not Found' });
  }
});

diceSet.put(
  '/:id',
  checkCharacterName,
  checkCampaign,
  checkCompleteSet,
  checkInDiceJail,
  checkCharacterLevel,
  checkD20,
  checkDiceColorTheme,
  async (req, res) => {
    const { id } = req.params;
    try {
      const body = req.body;
      const updatedSet = await updateSet(id, body);
      res.status(200).json(updatedSet);
    } catch (error) {
      res.status(404).json({ error: 'Set not Found' });
    }
  }
);

module.exports = diceSet;
