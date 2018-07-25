import SoundAndre from '../assets/sound/andre.mp3';
import SoundJochen from '../assets/sound/jochen.mp3';
import SoundSebastian from '../assets/sound/sebastian.mp3';
import roles from './roles.js';

const users = [
    {
        name: "André",
        role: roles.ROLE_PLAYER,
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
        role: roles.ROLE_HOST
    },
];

export default users;