import { Rock } from './rock.model';

export class Grid {

 board = [
   [new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock()],
   ['', '', '', new Rock(), '', '', new Rock(), '', '', '', ''],
   [new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock()],
   [new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), '', ''],
   [new Rock(), '', new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock()],
   [new Rock(), '', new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock()],
   [new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock()],
   [new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock()],
   [new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock()],
   [new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock()],
   ['', new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock()],
   ['', new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock()],
   ['', new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), new Rock(), '', new Rock(), new Rock(), new Rock()],
   [new Rock(), '', new Rock(), new Rock(), '', new Rock(), '', new Rock(), new Rock(), new Rock(), new Rock()],
   ['', new Rock(), '', '', '', '', new Rock(), '', new Rock(), '', ''],
   ['', new Rock(), '', new Rock(), '', '', '', '', '', '', ''],
   ['', '', '', '', '', '', new Rock(), '', '', new Rock(), ''],
   ['', '', '', '', '', '', '', '', '', '', '']
 ]
  constructor(public name: string, public difficulty: string){}

 moveNum = 0;
}
