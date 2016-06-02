(function(window) {
Symbol_1 = function() {
	this.initialize();
}
Symbol_1._SpriteSheet = new createjs.SpriteSheet({
    images: ["../Images/surferAbove1.png"], 
    frames: [[0,0,196,276,0,0,1.5]],
    animations: {
        SurfLeft:{
            frames: [0,1,2,3,4,5]
        }
    }
});
var Symbol_1_p = Symbol_1.prototype = new createjs.Sprite();
Symbol_1_p.Sprite_initialize = Symbol_1_p.initialize;
Symbol_1_p.initialize = function() {
	this.Sprite_initialize(Symbol_1._SpriteSheet);
	this.paused = false;
}
window.Symbol_1 = Symbol_1;
Symbol_2 = function() {
	this.initialize();
}
Symbol_2._SpriteSheet = new createjs.SpriteSheet({
    images: ["../Images/surferAbove1.png"], 
    frames: [[196,0,209,276,0,0,1.5]]});
var Symbol_2_p = Symbol_2.prototype = new createjs.Sprite();
Symbol_2_p.Sprite_initialize = Symbol_2_p.initialize;
Symbol_2_p.initialize = function() {
	this.Sprite_initialize(Symbol_2._SpriteSheet);
	this.paused = false;
}
window.Symbol_2 = Symbol_2;
Symbol_3 = function() {
	this.initialize();
}
Symbol_3._SpriteSheet = new createjs.SpriteSheet({images: ["../Images/surferAbove1.png"], frames: [[405,0,219,276,0,0,1.5]]});
var Symbol_3_p = Symbol_3.prototype = new createjs.Sprite();
Symbol_3_p.Sprite_initialize = Symbol_3_p.initialize;
Symbol_3_p.initialize = function() {
	this.Sprite_initialize(Symbol_3._SpriteSheet);
	this.paused = false;
}
window.Symbol_3 = Symbol_3;
Symbol_4 = function() {
	this.initialize();
}
Symbol_4._SpriteSheet = new createjs.SpriteSheet({images: ["../Images/surferAbove1.png"], frames: [[0,276,206,276,0,0,1.5]]});
var Symbol_4_p = Symbol_4.prototype = new createjs.Sprite();
Symbol_4_p.Sprite_initialize = Symbol_4_p.initialize;
Symbol_4_p.initialize = function() {
	this.Sprite_initialize(Symbol_4._SpriteSheet);
	this.paused = false;
}
window.Symbol_4 = Symbol_4;
Symbol_5 = function() {
	this.initialize();
}
Symbol_5._SpriteSheet = new createjs.SpriteSheet({images: ["../Images/surferAbove1.png"], frames: [[206,276,189,276,0,0,1.5]]});
var Symbol_5_p = Symbol_5.prototype = new createjs.Sprite();
Symbol_5_p.Sprite_initialize = Symbol_5_p.initialize;
Symbol_5_p.initialize = function() {
	this.Sprite_initialize(Symbol_5._SpriteSheet);
	this.paused = false;
}
window.Symbol_5 = Symbol_5;
Symbol_6 = function() {
	this.initialize();
}
Symbol_6._SpriteSheet = new createjs.SpriteSheet({images: ["../Images/surferAbove1.png"], frames: [[395,276,219,276,0,0,1.5]]});
var Symbol_6_p = Symbol_6.prototype = new createjs.Sprite();
Symbol_6_p.Sprite_initialize = Symbol_6_p.initialize;
Symbol_6_p.initialize = function() {
	this.Sprite_initialize(Symbol_6._SpriteSheet);
	this.paused = false;
}
window.Symbol_6 = Symbol_6;
}(window));

