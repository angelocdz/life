// sources
class Component {
    constructor() {
        console.log("INSIDE COMPONENT CONSTRUCTOR!")
    }
}

// class Game extends Component {
//     constructor() {
//         console.log("INSIDE GAME CONSTRUCTOR")
//     }
// }

class Game extends Component {
    constructor() {
        super();
        console.log("INSIDE GAME CONSTRUCTOR")
    }
}

// console
let chess = new Game();