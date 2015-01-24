//(function(window,undefined){

function TestScreen() {
    this.initialize();
}

TestScreen.prototype = new Screen();
TestScreen.prototype.screen_initialize = TestScreen.prototype.initialize;
TestScreen.prototype.initialize = function () {
    this.screen_initialize();
    
    var tent = new Tent();
    tent.set_position(500, 400);
    this.add_child(tent);
    tent.play('glow');

};

TestScreen.prototype.show = function () {
    Screen.prototype.show.call(this);

};

TestScreen.prototype.hide = function () {
    Screen.prototype.hide.call(this);

};

TestScreen.prototype.update = function () {
    Screen.prototype.update.call(this);

};

TestScreen.prototype.on_added_to_parent = function (parent) {
    Drawable.prototype.on_added_to_parent.call(this, parent);

};

TestScreen.prototype.on_remove_from_parent = function (parent) {
    Drawable.prototype.on_remove_from_parent.call(this, parent);

};

TestScreen.prototype.draw = function (context) {
    var fs = context.fillStyle;
    context.fillStyle = "#000000";
    context.fillRect(0, 0, Config.screen_width, Config.screen_height);
    context.fillStyle = fs;
};

TestScreen.prototype.clear = function (context) {

};

//    window.TestScreen = TestScreen;

//}(window));