import SoundAndre from '../assets/sound/Andre2020.mp3';
import SoundGeraldine from '../assets/sound/Geraldine_Buzzer_nc.mp3';
import SoundSebastian from '../assets/sound/Sebastian2020.mp3';
import SoundJochen from '../assets/sound/FinishHimJochen.wav';
import SoundJochenR from '../assets/sound/JR_Buzzer_nc.mp3'
import SoundDom from '../assets/sound/Dompotato_Buzzer.mp3';
import SoundPaul from '../assets/sound/Paul_Quiz.mp3';
import SoundMichael from '../assets/sound/michael_quiz_fin.mp3';
import SoundRalf from '../assets/sound/ralf_quiz_fin.mp3';
import roles from './roles.js';

const users = [
  {
    name: "Moderator",
    role: roles.ROLE_HOST,
    soundFile: SoundSebastian
  },
  {
    name: "André",
    role: roles.ROLE_PLAYER,
    soundFile: SoundAndre
  },
  {
    name: "Dom",
    role: roles.ROLE_PLAYER,
    soundFile: SoundDom
  },
  {
    name: "Geraldine",
    role: roles.ROLE_PLAYER,
    soundFile: SoundGeraldine
  },
  {
    name: "Jochen G.",
    role: roles.ROLE_PLAYER,
    soundFile: SoundJochen
  },
  {
    name: "Jochen R.",
    role: roles.ROLE_PLAYER,
    soundFile: SoundJochenR
  },
  {
    name: "Sebastian",
    role: roles.ROLE_PLAYER,
    soundFile: SoundSebastian
  },
  {
    name: "Paul",
    role: roles.ROLE_PLAYER,
    soundFile: SoundPaul
  },
  {
    name: "Michael",
    role: roles.ROLE_PLAYER,
    soundFile: SoundMichael
  },
  {
    name: "Ralf",
    role: roles.ROLE_PLAYER,
    soundFile: SoundRalf
  }
];

export default users;
