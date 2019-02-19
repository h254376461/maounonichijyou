/**
 * 所有实体的动画系统类
 */

cc.Class({
    extends: cc.Component,

    properties: {
        anim: cc.Animation,
        sprite: cc.Sprite,
    },

    onStandFront: function() {
        this.anim.play('entityStand');
        console.log('this is anim');
    },
    offStandFront: function() {
        this.anim.stop('entityStand');
    }
  
});
