//(function(window,undefined){
    
    function NarativeScreen(){
        this.initialize();
    }    
    
    NarativeScreen.prototype = new Screen();
    NarativeScreen.prototype.screen_initialize = NarativeScreen.prototype.initialize;    
    NarativeScreen.prototype.initialize = function(){        
        this.screen_initialize();
        
    };
    
    NarativeScreen.prototype.show = function(){
        Screen.prototype.show.call(this);
        
    };
    
    NarativeScreen.prototype.hide = function(){
        Screen.prototype.hide.call(this);
        
    };
    
    NarativeScreen.prototype.update = function(){
        Screen.prototype.update.call(this);
        
    };
    
    NarativeScreen.prototype.on_added_to_parent = function(parent){
        Drawable.prototype.on_added_to_parent.call(this,parent);
        
    };
    
    NarativeScreen.prototype.on_remove_from_parent = function(parent){
        Drawable.prototype.on_remove_from_parent.call(this,parent);
        
    };
    
    NarativeScreen.prototype.draw = function(context){
        var fs = context.fillStyle;
        context.fillStyle = "#000000";
        context.fillRect(0,0,Config.screen_width,Config.screen_height);
        context.fillStyle = fs;
    };
    
    NarativeScreen.prototype.clear = function(context){
        
    };
    
//    window.NarativeScreen = NarativeScreen;
    
//}(window));