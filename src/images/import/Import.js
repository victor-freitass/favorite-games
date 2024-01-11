import marioBox from '../mario-box.png';
import marioCoin from '../mario-icon.png';
import fight from '../gifs/fight.gif';

import crash_1 from '../crash_1.png';
import crash_2 from '../crash_2.png';
import crash_3 from '../crash_3.png';

import cs_1 from '../cs_1.png';
import cs_2 from '../cs_2.png';
import cs_3 from '../cs_3.png';
import cs_4 from '../cs_4.png';

import gta_1 from '../gta_1.png';
import gta_2 from '../gta_2.png';
import gta_3 from '../gta_3.png';
import gta_4 from '../gta_4.png';

import mario_1 from '../mario_1.png';
import mario_2 from '../mario_2.png';
import mario_3 from '../mario_3.png';
import mario_4 from '../mario_4.png';

import minecraft_1 from '../minecraft_1.png';
import minecraft_2 from '../minecraft_2.png';
import minecraft_3 from '../minecraft_3.png';
import minecraft_4 from '../minecraft_4.png';

import san_1 from '../san_1.png';
import san_2 from '../san_2.png';
import san_3 from '../san_3.png';

const csImgs = [ cs_1, cs_2, cs_3, cs_4 ];
const crashImgs = [ crash_1, crash_2, crash_3 ];
const gtaImgs = [ gta_1, gta_2, gta_3, gta_4];
const minecraftImgs = [ minecraft_1, minecraft_2, minecraft_3, minecraft_4 ];
const marioImgs = [ mario_1, mario_2, mario_3, mario_4 ];
const sanImgs = [ san_1, san_2, san_3 ];

function randonImg (name) {
    let images = [];

    if (name === 'cs') images = csImgs;
    if (name === 'crash') images = crashImgs;
    if (name === 'gta') images = gtaImgs;
    if (name === 'minecraft') images = minecraftImgs;
    if (name === 'mario') images = marioImgs;
    if (name === 'san') images = sanImgs;

    let randonIndex = Math.floor(
        Math.random () * images.length
    );
        
    return images[randonIndex];
}

export default randonImg;
export { marioBox, marioCoin, fight };