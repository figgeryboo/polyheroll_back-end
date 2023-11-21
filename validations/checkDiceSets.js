const checkCharacterName = (req, res, next) => {
	if (req.body.character_name) {
	  next();
	} else {
	  res.status(400).json({ error: 'A character name is required' });
	}
  };
  
  const checkCampaign = (req, res, next) => {
	if (req.body.campaign) {
	  return next();
	} else {
	  res.status(400).json({ error: 'The name of the campaign is required' });
	}
  };
  
  const checkCompleteSet = (req, res, next) => {
	const completeSet = req.body.complete_set;
	if (typeof completeSet === 'boolean') {
	  next();
	} else {
	  res.status(400).json({ error: 'Complete dice set status must be type boolean' });
	}
  };
  
  const checkInDiceJail = (req, res, next) => {
	const inDiceJail = req.body.is_in_dice_jail;
	if (typeof inDiceJail === 'boolean') {
	  next();
	} else {
	  res.status(400).json({ error: 'Dice Jail status must be type boolean' });
	}
  };
  
  const checkCharacterLevel = (req, res, next) => {
	const characterLevel = req.body.character_level;
	if (Number.isInteger(characterLevel) && characterLevel >= 1 && characterLevel <= 20) {
	  next();
	} else {
	  res.status(400).json({ error: 'Character level must be an integer between 1 and 20' });
	}
  };
  
  const checkD20 = (req, res, next) => {
	const d20 = req.body.d20;
	if (Number.isInteger(d20) && d20 >= 1 && d20 <= 6) {
	  next();
	} else {
	  res.status(400).json({ error: 'Number of D20 in the set must be an integer between 1 and 6' });
	}
  };
  
  const checkDiceColorTheme = (req, res, next) => {
	if (req.body.dice_color_theme) {
	  return next();
	} else {
	  res.status(400).json({ error: 'Dice color theme is required' });
	}
  };
  
  module.exports = {
	checkCharacterName,
	checkCampaign,
	checkCompleteSet,
	checkInDiceJail,
	checkCharacterLevel,
	checkD20,
	checkDiceColorTheme,
  };
  