(function (window, undefined) {

    function GameScreen() {
        this.initialize();
    }

    GameScreen.prototype = new Screen();
    GameScreen.prototype.screen_initialize = GameScreen.prototype.initialize;

    GameScreen.prototype.initialize = function () {

        this.screen_initialize();
        //hello vlatko , hello to you
        
        this.dialog1 = new Bubble(["hello world1", "hello world2", "hello world3", "hello world4"], 2000, true);
        this.dialog2 = new Bubble(["hello world1", "hello world2", "hello world3", "hello world4"], 2000, false);
        
        this.dialog1.set_position(600,300);
        this.dialog2.set_position(600,300);
        this.add_child(this.dialog1);
        this.add_child(this.dialog2);
        
        this.dialog1.show();
        this.dialog2.show();
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