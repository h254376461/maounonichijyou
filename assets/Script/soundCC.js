/**
 * 音乐的控制中心
 */
cc.Class({
    extends: cc.Component,

    properties: {
        soundSprite:{
            default: [],
            type: cc.SpriteFrame,
            tooltip: '声音开关不同状态的图片'
       }
    },

    onLoad: function(){
        cc.game.addPersistRootNode(this.node);
    },

    //音乐开
    // soundOn: function(){
    //     if(!this.getComponent(cc.Button).normalSprite == soundSprite[0]){
    //         this.getComponent(cc.Button).normalSprite == soundSprite[0]
    //     }
    // },
    // //音乐关
    // soundOff: function(){
    //     if(!this.getComponent(cc.Button).normalSprite == soundSprite[1]){
    //         this.getComponent(cc.Button).normalSprite == soundSprite[1]
    //     }
    // },

    //音乐开关
    soundSwitch: function(){
        if(this.getComponent(cc.Button).normalSprite == this.soundSprite[0]){
            this.getComponent(cc.Button).normalSprite = this.soundSprite[1]
        }else{
            this.getComponent(cc.Button).normalSprite = this.soundSprite[0]
        }
    }
});
