// this file will run when you link/install the package and run roll-dice.

import minimist from 'minimist'

import { roll } from '/lib/roll.js'

const args = minimist(process.argv.slice(2))

const x = args.x || 6;
const y = args.y || 2;
const z = args.z || 1;

let output = roll(x, y, z);
console.log(JSON.stringify({"side": sides, "dice": dice, "roll": rolls, "output": output}));
 process.exit(0);
