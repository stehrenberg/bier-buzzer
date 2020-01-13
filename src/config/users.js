import SoundAndre from '../assets/sound/Andre2020.mp3';
import SoundSebastian from '../assets/sound/Sebastian2020.mp3';
import SoundGunnar from '../assets/sound/Gunnar2020.mp3';
import SoundChristian from '../assets/sound/Christian2020.mp3';
import roles from './roles.js';

const users = [
  {
    name: "André",
    role: roles.ROLE_PLAYER,
    soundFile: SoundAndre
  },
  {
    name: "Christian",
    role: roles.ROLE_PLAYER,
    soundFile: SoundChristian
  },
  {
    name: "Dom",
    role: roles.ROLE_HOST,
    soundFile: SoundAndre
  },
  {
    name: "Gunnar",
    role: roles.ROLE_PLAYER,
    soundFile: SoundGunnar
  },
  {
    name: "Sebastian",
    role: roles.ROLE_PLAYER,
    soundFile: SoundSebastian
  }
];

export default users;
