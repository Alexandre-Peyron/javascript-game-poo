class Rocket01 extends SpaceShip{

    /**
     * @constructor
     *
     * @param game Object Game - Parent object
     * @param rocketName String
     * @param keyboard Object Keyboard - Listener to use keyboard
     */
    constructor(game, rocketName, keyboard) {
        super(game, rocketName, keyboard);

        this.rocketName = 'Rocket01';
        this.speed = 0.2;
        this.rotationStep = 5;
    }

    /**
     * Render view
     */
    render() {
        if (this.el == null) {
            return;
        }

        super.render();
    }
}
