/**
 * 菜单的控制中心
 */
cc.Class({
    extends: cc.Component,

    properties:{
        menuView:{
            default: null,
            type: cc.Node
        },

       aboutView: {
            default: null,
            type: cc.Node
       },

       
       selectLeftBtn: cc.Button,

       selectRightBtn: cc.Button,

       selectSprite:{
            default: [],
            type: cc.SpriteFrame,
            tooltip: '选择框不同状态的图片'
       }

    },
    
    //菜单脚本初始化
    initMenu: function(){
        cc.director.preloadScene('game');
        console.log('game is preload');
    },

    //开始游戏
    gameStart: function(){
        cc.director.loadScene('game',function(){
            console.log('game is loaded');
        });
    },

    //继续游戏
    gameCountinue: function(){
        cc.director.loadScene('game',function(){
            console.log('game is loaded');
        });
    },

    //关于  打开关于界面
    gameAboutOn: function(){
        this.aboutView.active = true;
        if(this.menuView){
        this.menuView.active = false;
        }
        console.log('aboutview is opened');
    }, 

     //关于  关闭关于界面
     gameAboutOff: function(){
        if(this.aboutView){
        this.aboutView.active = false;
        }
        this.menuView.active = true;
        console.log('aboutview is closed');
    }, 

    //selectLeft 打开作者自述，关闭历史界面
    selectLeftOn: function(){
            this.selectLeftBtn.normalSprite = this.selectSprite[0];
            this.selectRightBtn.normalSprite = this.selectSprite[3];
            this.aboutView.getChildByName("histroyView").active = false;
            this.aboutView.getChildByName("introduceView").active = true;
        console.log('left on');
    },

    //selectRight 打开历史界面，关闭作者自述
    selectRightOn: function(){
            this.selectRightBtn.normalSprite = this.selectSprite[2];
            this.selectLeftBtn.normalSprite = this.selectSprite[1];
            this.aboutView.getChildByName("introduceView").active = false;
            this.aboutView.getChildByName("histroyView").active = true;
        console.log('right on');
    },

    //退出游戏
    gameExit: function(){
        console.log('game is end');
        cc.director.end();
    }


});


// module.exports = initMenu;