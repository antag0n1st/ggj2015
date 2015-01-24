//(function(window,undefined){

function Tent(message, time_stay, is_right) {
    this.initialize(message, time_stay, is_right);
}

Tent.prototype = new Drawable();
Tent.prototype.drawable_initialize = Tent.prototype.initialize;
Tent.prototype.initialize = function (message, time_stay, is_right) {
    this.drawable_initialize();

    
};

Tent.prototype.show = function () {

    
};

Tent.prototype.on_added_to_parent = function (parent) {
    Drawable.prototype.on_added_to_parent.call(this, parent);

};

Tent.prototype.on_remove_from_parent = function (parent) {
    Drawable.prototype.on_remove_from_parent.call(this, parent);

};

Tent.prototype.draw = function (context) {

};

Tent.prototype.clear = function (context) {

};

//    window.Tent = Tent;

//}(window));