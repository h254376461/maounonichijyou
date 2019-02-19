//景物组
var jingwuG = cc.Class({
    name:'jingwuG',
    properties: {
        name:'',
        moveSpeed:0,
        prefab:cc.Prefab
    }
});

cc.Class({
    extends: cc.Component,

    properties:()=>({
        jingwuG: {
            default:[],
            type: jingwuG
        },
        game: {
            default: null,
            type: require('game'),
        },
    }),

    onLoad: function () { 
        //初始化景物组
        // this.eState = D.commonInfo.gameState.none;
        D.common.batchInitObjPool(this,this.jingwuG);
    },

    //开始动画
    startAction: function(num){      
        // this.eState = D.commonInfo.gameState.start;
        // cc.log(this.jingwuG)
        if(num == null){
            num = 1;
        }
        this.getNewJingwu(this.jingwuG[0],num);
    },
    //重新开始
    resumeAction: function(){
        this.enabled = true;
        // this.eState = D.commonInfo.gameState.start;
    },
    //暂停
    pauseAction: function(){
        this.enabled = false;
        // this.eState = D.commonInfo.gameState.pause;
        
    },
    //生成景物
    getNewJingwu: function(jingwuInfo,num) {
        var poolName = jingwuInfo.name + 'Pool';
        var newNode = D.common.genNewNode(this[poolName],jingwuInfo.prefab,this.node);
        var newV2 = this.getNewJingwuPositon(newNode);
        newNode.setPosition(newV2);
        newNode.getComponent('jingwu').init(num);
    },
    //景物固定生成的位置
    getNewJingwuPositon: function() {
        var randx = 0;
        var randy = 250;
        return cc.v2(randx,randy);
    },

    //回收节点
    removeJingwu: function(nodeinfo){
        //回收节点
        D.common.backObjPool(this,nodeinfo);
    },

    start(){
        this.startAction();
    }
}); 
