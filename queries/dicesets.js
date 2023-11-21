const db = require('../db/dbConfig');

const getAllSets = async () => {
  try {
    const allSets = await db.any('SELECT * FROM dice_set');
    return allSets;
  } catch (error) {
    return error;
  }
};

const getSet = async (id) => {
  try {
    const oneSet = await db.one('SELECT * FROM dice_set WHERE id=$1', id);
    return oneSet;
  } catch (error) {
    return error;
  }
};

const createSet = async (set) => {
  try {
    const newSet = await db.one(
      'INSERT INTO dice_set (character_name, campaign, complete_set, is_in_dice_jail, character_level, d20, dice_color_theme) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [
        set.character_name,
        set.campaign,
        set.complete_set,
        set.is_in_dice_jail,
        set.character_level,
        set.d20,
        set.dice_color_theme,
      ]
    );
    return newSet;
  } catch (error) {
    return error;
  }
};

const deleteSet = async (id) => {
  try {
    const deletedSet = await db.one('DELETE FROM dice_set WHERE id=$1 RETURNING *', id);
    return deletedSet;
  } catch (error) {
    return error;
  }
};

const updateSet = async (id, set) => {
  try {
    const updatedSet = await db.one(
      'UPDATE dice_set SET character_name=$1, campaign=$2, complete_set=$3, is_in_dice_jail=$4, character_level=$5, d20=$6, dice_color_theme=$7 WHERE id=$8 RETURNING *',
      [
        set.character_name,
        set.campaign,
        set.complete_set,
        set.is_in_dice_jail,
        set.character_level,
        set.d20,
        set.dice_color_theme,
        id,
      ]
    );
    return updatedSet;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSets,
  getSet,
  createSet,
  deleteSet,
  updateSet,
};
