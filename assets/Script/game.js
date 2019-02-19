const MIN_LENGTH = 50;

/**
 * 游戏界面的类
 */
cc.Class({
    extends: cc.Component,

    properties:()=>({
        dayNum: cc.Label,
        pauseBtn: cc.Button,
        bg: cc.Node,
        player: cc.Node,
        jingwuGroup: {
            default: null,
            type: require('jingwuGroup'),
        },
    }),

    //游戏初始化
    onLoad: function(){
        cc.director.preloadScene('menu');
        this.player.getComponent('player').playerInit();
        this.addEventHandler();
        this.player.getComponent('player').genState('runFront');  //初始状态：向前跑
    },

    //添加事件监听
    addEventHandler(){
        this.bg.on('touchstart',(event)=>{
            this.startPoint = event.getLocation();
        });

        this.bg.on('touchend',(event)=>{
            this.touchEnd(event);
        });
        this.bg.on('touchcancel',(event)=>{
            this.touchEnd(event);
        });
    },

    //触摸结束的事件
    touchEnd(event){
            this.endPoint = event.getLocation();

            let vec = cc.pSub(this.endPoint,this.startPoint);
            if(cc.pLength(vec) > MIN_LENGTH){
                if(Math.abs(vec.x) > Math.abs(vec.y)){
                //水平方向
                if(vec.x > 0){
                    this.moveRight();
                }else{
                    this.moveLeft();
                }
            }else{
                //竖直方向 
                if(vec.y > 0){
                    this.moveUp();
                }else{
                    this.moveDown();
                }
            }
        }
    },

    moveLeft(){
        this.player.getComponent('player').move('left');
        console.log('left');
    },
    moveRight(){
        this.player.getComponent('player').move('right');
        console.log('right');
    },
    moveUp(){
        this.player.getComponent('player').move('up');
        console.log('up');
    },
    moveDown(){
        this.player.getComponent('player').move('down');
        console.log('down')
    },

    
    //分数写到本地（ 当前分 最高分 历史记录）
    updateScore: function() {
    var currentDayNum = this.dayNum.string;
    var enemy = '最終BOSS';
    var result = '結局3(真)';
    var scoreData = {
        'dayNum':currentDayNum,
        'enemy': enemy,
        'result': result,
    };  
    if(!preData){
        preData = [];
        preData.unshift(scoreData);
        
    } else {
        preData = JSON.parse(preData);
    if (!(preData instanceof Array)){
            preData = [];    
        }
        preData.unshift(scoreData);
    }
},
    returnMenu(){
        cc.director.loadScene('menu',function(){
            console.log('menu is loaded');
        });
    }
});
