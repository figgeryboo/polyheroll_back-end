DROP DATABASE IF EXISTS dice_manager;
CREATE DATABASE dice_manager;

\c dice_manager;

CREATE TABLE dice_set (
  id SERIAL PRIMARY KEY,
  character_name TEXT NOT NULL,
  campaign TEXT NOT NULL,
  complete_set BOOLEAN, 
  is_in_dice_jail BOOLEAN,
  character_level INTEGER CHECK (character_level >=1 AND character_level <=20),
  d20 INTEGER CHECK (d20 >= 1 AND d20 <= 6),
  dice_color_theme TEXT NOT NULL
);