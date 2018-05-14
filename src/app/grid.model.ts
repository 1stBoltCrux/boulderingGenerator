import { Rock } from './rock.model';

export class Grid {

 board = [
   [new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0)],
   [null, null, null, new Rock(0, 0), null, null, new Rock(0, 0), null, null, null, null],
   [new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0)],
   [new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), null, null],
   [new Rock(0, 0), null, new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0)],
   [new Rock(0, 0), null, new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0)],
   [new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0)],
   [new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0)],
   [new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0)],
   [new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0)],
   [null, new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0)],
   [null, new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0)],
   [null, new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), null, new Rock(0, 0), new Rock(0, 0), new Rock(0, 0)],
   [new Rock(0, 0), null, new Rock(0, 0), new Rock(0, 0), null, new Rock(0, 0), null, new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0)],
   [null, new Rock(0, 0), null, null, null, null, new Rock(0, 0), null, new Rock(0, 0), null, null],
   [null, new Rock(0, 0), null, new Rock(0, 0), null, null, null, null, null, null, null],
   [null, null, null, null, null, null, new Rock(0, 0), null, null, new Rock(0, 0), null],
   [null, null, null, null, null, null, null, null, null, null, null]
 ]

  constructor(public name: string, public difficulty: string){}

 moveNum = 0;
}
