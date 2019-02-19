var flag;

cc.Class({
    extends: cc.Component,

    properties: {       
        moveSpeed: {
            default:50,
            type:cc.Integer,
            tooltip: '景物的移动速度',
        },
    },

    onLoad() {
        this.jingwuGroup = this.node.parent.getComponent('jingwuGroup');
    },

    init: function(num){
        // var ranNum = Math.floor(Math.random()*4);   //取0-3的随机数
        this.flag = false;
        this.move(num);
    },
    
    move: function(num){
        let moveAnim =  this.getComponent(cc.Animation);
        var AnimName = 'jingwu'+num;
        // cc.log(AnimName);
        let animJingwu = moveAnim.getAnimationState(AnimName);
        animJingwu.speed = 0.3;
        animJingwu.play();
    },

    update(dt){
        if(this.node.y < 150 && !this.flag){
            // let ranNum = Math.floor(Math.random()*4)+1;   //取1-4的随机数
            let ranNum = 1;   //取1
            this.jingwuGroup.startAction(ranNum);
            this.flag = true;
        }
        if(this.node.y < -300 && this.flag){
            this.onFinished();
        }
    },

    //动画结束后 动画节点回收
    onFinished: function() { 
        this.jingwuGroup.removeJingwu(this.node);
    },
});

