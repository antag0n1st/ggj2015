//(function(window,undefined){
    
    function Tent(){
        this.initialize();
    }    
    
    Tent.prototype = new Animation();
    Tent.prototype.animation_initialize = Tent.prototype.initialize;    
    Tent.prototype.initialize = function(){        
        
        var sprite_sheet = new SpriteSheet([{
                image: Images.tent_shadows_double,
                frames: {x: 2, y: 1},
                animations: {
                    glow: {start: 0, end: 1, loop: true, duration: 500}
                }
                , reg: {x: 0.5, y: 1, width: 1.0, height: 1.0}
            }]);

        this.animation_initialize(sprite_sheet);
        
        
    };
    
    Tent.prototype.on_added_to_parent = function(parent){
        Drawable.prototype.on_added_to_parent.call(this,parent);
        
    };
    
    Tent.prototype.on_remove_from_parent = function(parent){
        Drawable.prototype.on_remove_from_parent.call(this,parent);
        
    };
    
    Tent.prototype.draw = function(context){
        Animation.prototype.draw.call(this,context);
    };
    
    Tent.prototype.clear = function(context){
        
    };
    
//    window.Tent = Tent;
    
//}(window));