//(function(window,undefined){

function Bubble(message) {
    this.initialize(message);
}

Bubble.prototype = new Drawable();
Bubble.prototype.drawable_initialize = Bubble.prototype.initialize;
Bubble.prototype.initialize = function (message) {
    this.drawable_initialize();

    this.message = message;

    this.c1 = new Sprite('white_circle');
    this.c1.set_scale(0.1);
    this.c1.set_anchor(0.5,0.5);
    this.add_child(this.c1);
    this.c1.set_alpha(0);
    this.c1.set_position(45, -50);

    this.c2 = new Sprite('white_circle');
    this.c2.set_scale(0.1);
    this.c2.set_anchor(0.5,0.5);
    this.add_child(this.c2);
    this.c2.set_alpha(0);
    this.c2.set_position(80, -70);

    this.c3 = new Sprite('white_circle');
    this.c3.set_scale(0.1);
    this.c3.set_anchor(0.5,0.5);
    this.add_child(this.c3);
    this.c3.set_alpha(0);
    this.c3.set_position(120, -100);

    this.bubble = new Sprite('dialog');
    this.bubble.set_position(260, -200);
    this.bubble.set_alpha(0);
    this.bubble.set_anchor(0.5,0.5);
    this.bubble.set_scale(0.2);
    this.add_child(this.bubble);


};

Bubble.prototype.show = function () {

    var that = this;

    var t = new TweenAlpha(that.c1, 1, null, 200);
    t.run();

    var t2 = new TweenScale(that.c1, 0.3, new Bezier(.28, .63, .49, 1.4), 200);
    t2.run();

    setTimeout(function () {
        var t = new TweenAlpha(that.c2, 1, null, 200);
        t.run();

        var t2 = new TweenScale(that.c2, 0.6, new Bezier(.28, .63, .49, 1.4), 200);
        t2.run();
    }, 100);

    setTimeout(function () {
        var t = new TweenAlpha(that.c3, 1, null, 200);
        t.run();

        var t2 = new TweenScale(that.c3, 0.9, new Bezier(.28, .63, .49, 1.4), 200);
        t2.run();
    }, 200);


    setTimeout(function () {
        var t = new TweenAlpha(that.bubble, 1, null, 200);
        t.run();

        var t2 = new TweenScale(that.bubble, 1, new Bezier(.28, .63, .49, 1.4), 200);
        t2.run();
    }, 300);

};

Bubble.prototype.on_added_to_parent = function (parent) {
    Drawable.prototype.on_added_to_parent.call(this, parent);

};

Bubble.prototype.on_remove_from_parent = function (parent) {
    Drawable.prototype.on_remove_from_parent.call(this, parent);

};

Bubble.prototype.draw = function (context) {

};

Bubble.prototype.clear = function (context) {

};

//    window.Bubble = Bubble;

//}(window));