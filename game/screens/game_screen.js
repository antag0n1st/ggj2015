(function (window, undefined) {

    function GameScreen() {
        this.initialize();
    }

    GameScreen.prototype = new Screen();
    GameScreen.prototype.screen_initialize = GameScreen.prototype.initialize;

    GameScreen.prototype.initialize = function () {

        this.screen_initialize();
        //hello vlatko
    };

    GameScreen.prototype.on_note = function (note, sender, data) {
       
    };

    GameScreen.prototype.game_start = function () {
    
    };
    
    GameScreen.prototype.update = function (dt) {
      
    };

    GameScreen.prototype.show = function () {
        Screen.prototype.show.call(this);
    };

    GameScreen.prototype.hide = function () {
        Screen.prototype.hide.call(this);
    };

    GameScreen.prototype.on_resize = function () {
        
    };

    GameScreen.prototype.on_added_to_parent = function (parent) {

    };

    window.GameScreen = GameScreen;

}(window));