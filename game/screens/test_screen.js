//(function(window,undefined){

function TestScreen() {
    this.initialize();
}

TestScreen.prototype = new Screen();
TestScreen.prototype.screen_initialize = TestScreen.prototype.initialize;
TestScreen.prototype.initialize = function () {
    this.screen_initialize();
    
    var that=this;
    
    var tent = new Tent();
    tent.set_position(600, 600);
    this.add_child(tent);
    tent.play('glow');
    
    var dialog1 = new Bubble(["What is my", "future?"], 2000, "goat_head", true);
    dialog1.set_position(100, -350);
    tent.add_child(dialog1);
    dialog1.show();
    
    setTimeout(function() {
        var dialog1 = new Bubble(["Your destiny is", "to die by piano", "crashing on your", "head"], 3000, "witch_head", false);
        dialog1.set_position(-140, -240);
        tent.add_child(dialog1);
        dialog1.show();
    }, 3000);
    
    
    setTimeout(function() {
        var dialog1 = new Bubble(["Let's create", "some destiny"], 2000, "witch_head", false);
        dialog1.set_position(-140, -240);
        tent.add_child(dialog1);
        dialog1.show();
    }, 10000);

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