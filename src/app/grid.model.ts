import { Rock } from './rock.model';

export class Grid {

  board = [
    [new Rock(0, 0, 'white'), new Rock(0, 0, 'yellow'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'white'), new Rock(0, 0, 'white'), new Rock(0, 0, 'yellow'), new Rock(0, 0, 'white'), new Rock(0, 0, 'yellow'), new Rock(0, 0, 'white'), new Rock(0, 0, 'lightblue'), new Rock(0, 0, 'yellow')],
    [null, null, null, new Rock(0, 0, 'white'), null, null, new Rock(0, 0, 'teal'), null, null, null, null],
    [new Rock(0, 0, 'yellow'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'yellow'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'yellow'), new Rock(0, 0, 'white'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'orange')],
    [new Rock(0, 0, 'white'), new Rock(0, 0, 'yellow'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'white'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'white'), new Rock(0, 0, 'darkblue'), null, null],
    [new Rock(0, 0, 'yellow'), null, new Rock(0, 0, 'white'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'white'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'darkblue')],
    [new Rock(0, 0, 'white'), null, new Rock(0, 0, 'yellow'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'yellow'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'yellow'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'white'), new Rock(0, 0, 'darkblue')],
    [new Rock(0, 0, 'white'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'yellow'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'white'), new Rock(0, 0, 'white'), new Rock(0, 0, 'yellow'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'yellow')],
    [new Rock(0, 0, 'teal'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'white'), new Rock(0, 0, 'white'), new Rock(0, 0, 'white'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'yellow'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'white'), new Rock(0, 0, 'darkblue')],
    [new Rock(0, 0, 'teal'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'white'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'yellow'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'white'), new Rock(0, 0, 'yellow'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'darkblue')],
    [new Rock(0, 0, 'yellow'), new Rock(0, 0, 'white'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'white'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'white')],
    [null, new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'white'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'white'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'orange')],
    [null, new Rock(0, 0, 'white'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'yellow'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'orange'), new Rock(0, 0, 'white'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'orange')],
    [null, new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'white'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'white'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'darkblue'), null, new Rock(0, 0, 'orange'), new Rock(0, 0, 'white'), new Rock(0, 0, 'teal')],
    [new Rock(0, 0, 'teal'), null, new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'yellow'), null, new Rock(0, 0, 'white'), null, new Rock(0, 0, 'yellow'), new Rock(0, 0, 'teal'), new Rock(0, 0, 'darkblue'), new Rock(0, 0, 'yellow')],
    [null, new Rock(0, 0, 'orange'), null, null, null, null, new Rock(0, 0, 'teal'), null, new Rock(0, 0, 'white'), null, null],
    [null, new Rock(0, 0, 'yellow'), null, new Rock(0, 0, 'orange'), null, null, null, null, null, null, null],
    [null, null, null, null, null, null, new Rock(0, 0, 'teal'), null, null, new Rock(0, 0, 'white'), null],
    [null, null, null, null, null, null, null, null, null, null, null]
  ];

 moveNum = 0;
 clickedArr = [];

}
