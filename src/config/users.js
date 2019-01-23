import SoundAndre from '../assets/sound/andre.mp3';
import SoundJochen from '../assets/sound/FinishHimJochen.wav';
import SoundSebastian from '../assets/sound/FinishHimSebastian.wav';
import SoundDominik from '../assets/sound/FinishHimDominik.wav';
import roles from './roles.js';

const users = [
    {
        name: "André",
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
    },
    {
        name: "Dominik",
        role: roles.ROLE_PLAYER,
        soundFile: SoundDominik
    },
];

export default users;
