Game.prototype.load_assets = function() {

    ////////////////////////////////////////////////////////////////////////
    //////////////////////   LOAD YOUR ASSETS HERE   ///////////////////////

    ContentManager.add_image('dialog', 'assets/images/dialog.png');
    ContentManager.add_image('white_circle', 'assets/images/white_circle.png');
    ContentManager.add_image('blood', 'assets/images/blood.png');
    
    ContentManager.add_spine_animation('dwarf');
    
    ContentManager.add_file('assets/levels/level_1.json',function(data){
        ContentManager.current_level_data = data;
    },function(){});
        
    ////////////////////////////////////////////////////////////////////////

};