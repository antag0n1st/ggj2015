//(function(window,undefined){

function LooseScreen() {
    this.initialize();
}

LooseScreen.prototype = new Screen();
LooseScreen.prototype.screen_initialize = LooseScreen.prototype.initialize;
LooseScreen.prototype.initialize = function () {
    this.screen_initialize();
    
    setTimeout(function(){
        game.navigator.go_back(Screen.ANIMATION_TYPE_FADEIN);
    },3000);    

};

LooseScreen.prototype.show = function () {
    Screen.prototype.show.call(this);

};

LooseScreen.prototype.hide = function () {
    Screen.prototype.hide.call(this);

};

LooseScreen.prototype.update = function () {
    Screen.prototype.update.call(this);

};

LooseScreen.prototype.on_added_to_parent = function (parent) {
    Drawable.prototype.on_added_to_parent.call(this, parent);

};

LooseScreen.prototype.on_remove_from_parent = function (parent) {
    Drawable.prototype.on_remove_from_parent.call(this, parent);

};

LooseScreen.prototype.draw = function (context) {
    var fs = context.fillStyle;
    context.fillStyle = "#000000";
    context.fillRect(0, 0, Config.screen_width, Config.screen_height);
    context.fillStyle = fs;
};

LooseScreen.prototype.clear = function (context) {

};

//    window.LooseScreen = LooseScreen;

//}(window));