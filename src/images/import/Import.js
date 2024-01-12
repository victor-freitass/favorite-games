import marioBox from '../mario-box.png';
import marioCoin from '../mario-icon.png';
import marioRunning from '../gifs/mario.gif';
import marioTwoFingers from '../marioTwoFingers.png';

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
import gta_5 from '../gta_5.png';

import mario_1 from '../mario_1.png';
import mario_2 from '../mario_2.png';
import mario_3 from '../mario_3.png';
import mario_4 from '../mario_4.png';
import mario_5 from '../mario_5.png';

import minecraft_1 from '../minecraft_1.png';
import minecraft_2 from '../minecraft_2.png';
import minecraft_3 from '../minecraft_3.png';
import minecraft_4 from '../minecraft_4.png';

import san_1 from '../san_1.png';
import san_2 from '../san_2.png';
import san_3 from '../san_3.png';

import gc_1 from '../gc_1.png';
import gc_2 from '../gc_2.png';
import gc_3 from '../gc_3.png';
import gc_4 from '../gc_4.png';
import gc_5 from '../gc_5.png';

import tkf_1 from '../tkf_1.png';
import tkf_2 from '../tkf_2.png';
import tkf_3 from '../tkf_3.png';
import tkf_4 from '../tkf_4.png';
import tkf_5 from '../tkf_5.png';

import btf_1 from '../btf_1.png';
import btf_2 from '../btf_2.png';
import btf_3 from '../btf_3.png';


function randonImg (name) {
    let images = [];

    if (name === 'cs') images = [ cs_1, cs_2, cs_3, cs_4 ];
    if (name === 'crash') images = [ crash_1, crash_2, crash_3 ];
    if (name === 'gta') images = [ gta_1, gta_2, gta_3, gta_4, gta_5];
    if (name === 'minecraft') images = [ minecraft_1, minecraft_2, minecraft_3, minecraft_4 ];
    if (name === 'mario') images = [ mario_1, mario_2, mario_3, mario_4, mario_5 ];
    if (name === 'san') images = [ san_1, san_2, san_3 ];
    if (name === 'gc') images = [ gc_1, gc_2, gc_3, gc_4, gc_5 ];
    if (name === 'tkf') images = [ tkf_1, tkf_2, tkf_3, tkf_4, tkf_5, ];
    if (name === 'btf') images = [ btf_1, btf_2, btf_3 ];

    let randonIndex = Math.floor(
        Math.random () * images.length
    );
        
    return images[randonIndex];
}

export default randonImg;
export { marioBox, marioCoin, marioRunning, marioTwoFingers };