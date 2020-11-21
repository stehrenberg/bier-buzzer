import SoundAndre from '../assets/sound/Andre2020.mp3';
import SoundSebastian from '../assets/sound/Sebastian2020.mp3';
import SoundJochen from '../assets/sound/FinishHimJochen.wav';
import roles from './roles.js';

const users = [
  {
    name: "André",
    role: roles.ROLE_PLAYER,
    soundFile: SoundAndre
  },
  {
    name: "Dominik",
    role: roles.ROLE_HOST,
    soundFile: SoundAndre
  },
  {
    name: "Jochen",
    role: roles.ROLE_PLAYER,
    soundFile: SoundJochen
  },
  {
    name: "Sebastian",
    role: roles.ROLE_PLAYER,
    soundFile: SoundSebastian
  }
];

export default users;
