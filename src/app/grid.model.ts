import { Rock } from './rock.model';

export class Grid {

  board = [
    [new Rock(0, 0, 'white'), new Rock(0, 0, 'yellow'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'white'), new Rock(0, 0, 'white'), new Rock(0, 0, 'yellow'), new Rock(0, 0, 'white'), new Rock(0, 0, 'yellow'), new Rock(0, 0, 'white'), new Rock(0, 0, 'lightblue'), new Rock(0, 0, 'yellow')],
    [null, null, null, new Rock(0, 0, 'white'), null, null, new Rock(0, 0, 'teal'), null, null, null, null],
    [new Rock(0, 0, 'yellow'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'yellow'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'yellow'), new Rock(0, 0, 'white'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'orange')],
    [new Rock(0, 0, 'white'), new Rock(0, 0, 'yellow'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'white'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'white'), new Rock(0, 0, 'darkblue'), null, null],
    [new Rock(0, 0, 'yellow'), null, new Rock(0, 0, 'white'), new Rock(0, 0, 'orange'), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0), new Rock(0, 0)],
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
