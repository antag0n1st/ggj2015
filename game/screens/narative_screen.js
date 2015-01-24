//(function(window,undefined){

function NarativeScreen() {
    this.initialize();
}

NarativeScreen.prototype = new Screen();
NarativeScreen.prototype.screen_initialize = NarativeScreen.prototype.initialize;
NarativeScreen.prototype.initialize = function() {
    this.screen_initialize();


    var mt = new V();
    mt.setLength(0);
    mt.setAngle(Math.degrees_to_radians(0));
    this.add_label("Fortelling the future",new V(500,50) , mt, 6000);
    
    var that = this;
    
    var mt1 = new V();
    mt1.setLength(100);
    mt1.setAngle(Math.degrees_to_radians(10));
    setTimeout(function(){
        that.add_image("witch_intro",new V(350,130) , mt1, 0.6, 2, 0, null, 5000);
    },1000);
    
    
    setTimeout(function(){
        that.add_image("witch_ball1",new V(550,340) , mt1, 0.6, 1, 0.5, new V(0.5, 0.5), 5000);
    },1000);
    
    
    setTimeout(function(){
        that.add_image("witch_ball2",new V(550,340) , mt1, 0.6, 1, -0.5, new V(0.5, 0.5), 5000);
    },1000);
    
    setTimeout(function(){
        that.add_image("witch_ball3",new V(550,340) , mt1, 0.6, 1, null, new V(0.5, 0.5), 5000);
    },1000);
    
    var mt2 = new V();
    mt2.setLength(0);
    mt2.setAngle(Math.degrees_to_radians(90));
    setTimeout(function(){
        that.add_label("But when the magic ball",new V(500,150) , mt2, 5000);
    },7000);
    
    
    var mt3 = new V();
    mt3.setLength(30);
    mt3.setAngle(Math.degrees_to_radians(-90));
    setTimeout(function(){
        that.add_label("is gone",new V(650,250) , mt3, 4500);
    },7500);
    
    
    
    
//    
//    
//    setTimeout(function(){
//        game.navigator.add(new GameScreen(), Screen.ANIMATION_TYPE_FADEIN);
//    },11000);
    
};

NarativeScreen.prototype.show = function() {
    var that = this;

    Screen.prototype.show.call(this);



};

NarativeScreen.prototype.hide = function() {
    Screen.prototype.hide.call(this);

};

NarativeScreen.prototype.update = function() {
    Screen.prototype.update.call(this);

};

NarativeScreen.prototype.on_added_to_parent = function(parent) {
    Drawable.prototype.on_added_to_parent.call(this, parent);

};

NarativeScreen.prototype.on_remove_from_parent = function(parent) {
    Drawable.prototype.on_remove_from_parent.call(this, parent);

};

NarativeScreen.prototype.draw = function(context) {
    var fs = context.fillStyle;
    context.fillStyle = "#000000";
    context.fillRect(0, 0, Config.screen_width, Config.screen_height);
    context.fillStyle = fs;
};

NarativeScreen.prototype.clear = function(context) {

};

NarativeScreen.prototype.add_label = function(text, position, move_to, duration) {
    
    var label1 = new Label();
    label1.set({text: text});
    label1.set({text_color: "#FFFFFF"});
    label1.set({text_size: 50});
    label1.set_alpha(0);
    
    log(label1.text+" "+duration);
    duration = duration ? duration : 2000;
  
    label1.set_position(position.x,position.y);
    this.add_child(label1);

    var mt = position.clone().add(move_to);
    
    var t = new TweenAlpha(label1, 1, null, 3000);
    t.run();
    
    var t3 = new TweenMoveTo(label1, mt, null, duration);
    t3.run();
     

    setTimeout(function() {
        
        var t = new TweenAlpha(label1, 0, null, 1000);
        t.run();
        
    }, duration - 1000);

    

};


NarativeScreen.prototype.add_image = function(name, position, move_to, scale, z_index, rotate, anchor, duration) {
    
    var image = new Sprite(name);
    image.set_scale(scale);

    image.set_alpha(0);
    if(anchor)
        image.set_anchor(anchor.x, anchor.y);
    
    duration = duration ? duration : 2000;
    image.z_index=z_index;
  
    image.set_position(position.x,position.y);
    this.add_child(image);

    var mt = position.clone().add(move_to);
    
    log(image.image_name);
    var t = new TweenAlpha(image, 1, null, 4000);
    t.run();
    
    if(rotate!=0)
    {
        var t2 = new TweenRotate(image, rotate, null, duration);
        t2.run();
    }
    
    var t3 = new TweenMoveTo(image, mt, null, duration);
    t3.run();
     

    setTimeout(function() {
        
        var t = new TweenAlpha(image, 0, null, 1000);
        t.run();
        
    }, duration - 1000);

    

};


//    window.NarativeScreen = NarativeScreen;

//}(window));