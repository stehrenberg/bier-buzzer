import SlbMusic from '../assets/sound/Korobeiniki.mp3'
import fdFail from '../assets/sound/fd-fail.mp3'
import fdCorrect from '../assets/sound/fd-textRichtig.mp3'
import fdPersons from '../assets/sound/fd-zahlRichtig.mp3'
import fdBuzzer from '../assets/sound/fd-buzzer.mp3'
import nail from '../assets/sound/nageln.mp3'

const sounds = [
    {
        name: 'slb-music',
        soundFile: SlbMusic
    },
    {
        name: 'fd-fail',
        soundFile: fdFail
    },
    {
        name: 'fd-correct',
        soundFile: fdCorrect
    },
    {
        name: 'fd-persons',
        soundFile: fdPersons
    },
    {
        name: 'fd-buzzer',
        soundFile: fdBuzzer
    },
    ,
    {
        name: 'nail',
        soundFile: nail
    }
]

export default sounds;