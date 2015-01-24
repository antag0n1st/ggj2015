//(function(window,undefined){

function NarativeScreen() {
    this.initialize();
}

NarativeScreen.prototype = new Screen();
NarativeScreen.prototype.screen_initialize = NarativeScreen.prototype.initialize;
NarativeScreen.prototype.initialize = function() {
    this.screen_initialize();


    var mt = new V();
    mt.setLength(90);
    mt.setAngle(Math.degrees_to_radians(45));
    this.add_label("An allience forged",new V(200,100) , mt);
    
    var that = this;
    
    var mt1 = new V();
    mt1.setLength(60);
    mt1.setAngle(Math.degrees_to_radians(180));
    setTimeout(function(){
        that.add_label("to fulfill the Destiny",new V(600,220) , mt1);
    },1000);
    
    var mt2 = new V();
    mt2.setLength(50);
    mt2.setAngle(Math.degrees_to_radians(-45));
    setTimeout(function(){
        that.add_label("of others",new V(550,300) , mt2, 1000);
    },2800);
    
    
    var mt3 = new V();
    mt3.setLength(0);
    setTimeout(function(){
        that.add_label("But its all fake!!!",new V(500,200) , mt3, 2000);
    },5000);
    
    var mt4 = new V();
    mt4.setLength(0);
    setTimeout(function(){
        var label1 = new Label();
        label1.set({text: "WHAT DO WE DO NOW?"});
        label1.set({text_color: "#FFFFFF"});
        label1.set({text_size: 50});
        label1.set({text_align: "center"});
        label1.set_position(Config.screen_width/2,Config.screen_height/2 - 30);
        that.add_child(label1);
    },7000);
    
    
    setTimeout(function(){
        game.navigator.add(new GameScreen(), Screen.ANIMATION_TYPE_FADEIN);
    },11000);
    
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
    label1.set({text_size: 34});
    label1.set_alpha(0);
    
    duration = duration ? duration : 2000;
  
    label1.set_position(position.x,position.y);
    this.add_child(label1);

    var mt = position.clone().add(move_to);
    
    var t = new TweenAlpha(label1, 1, null, 2000);
    t.run();
    
     var t3 = new TweenMoveTo(label1, mt, null, 4000);
     t3.run();
     

    setTimeout(function() {
        
        var t = new TweenAlpha(label1, 0, null, 1000);
        t.run();
        
    }, duration);

    

};


//    window.NarativeScreen = NarativeScreen;

//}(window));