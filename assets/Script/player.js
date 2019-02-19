var State = cc.Enum({
    stand: -1,
    run: -1,
    moveLR: -1,
    jump: -1,
    jumpEnd: -1,
    squat: -1,
    squatend: -1,
    attack: -1,
    talk: -1,
    hurt: -1,
    death: -1,
});
/**
 * 玩家的实体类
 */

const Entity = require('entity');

cc.Class({
    extends: Entity,

    properties: {
        runSpeed: 100,
        jumpHight: 100,
        jumpTime: 0.2,
        SquatTime: 0.2,
        moveLRTime: 0.2,
        moveLRDis: 100,
        playerAnim:{
            default: null,
            type: cc.Node,
            tooltip: '添加player的动画节点',
        },

        //玩家状态
        _state: {
            default: State.stand,
            type: State,
            visible: false
        },

        state: {
            get: function () {
                return this._state;
            },
            set: function(value){
                if (value !== this._state) {
                    this._state = value;
                }
            },
            type: State
        },
    },

    // statics: {
    //     State: State
    // },
    //初始化玩家数据
    playerInit: function(){
        this.state = State.stand;
    },

    //状态改变的函数
    stateChange(value){
        let anim = this.getComponent(cc.Animation);
        if(value !== this.state){
            this.state = value;
        }else{
            cc.log('do not changeState')
            return false;
        }
    },


     //普通状态的函数： 包括前后方向的待机和跑动
     genState: function(faceDir){
        // if(!this.stateChange(State.stand)) return;
        console.log('this is genStand');
        let runAnim = this.playerAnim.getComponent(cc.Animation);
        switch(faceDir){
            case 'standFront':
                this.playerAnim.getComponent(cc.Animation).play('playerStandFront');
                break;
            case 'standBack':
                this.playerAnim.getComponent(cc.Animation).play('playerStandBack');
                break;
            case 'runFront':
                let animRunFront = runAnim.getAnimationState('playerRunFront');
                animRunFront.speed = this.runSpeed/100;
                animRunFront.play();
                break;
            case 'runBack':
                let animRunBack = runAnim.getAnimationState('playerRunBack');
                animRunBack.speed = this.runSpeed/100;
                animRunBack.play();
                break;
            default:
                console.log('???');
                break;
        }
    },

    //移动的函数
    move: function(dir){
        this.stateChange(State.run);
        let moveAnim =  this.playerAnim.getComponent(cc.Animation);
        switch(dir){
            
            case 'up':
                let animStateUp = moveAnim.getAnimationState('playerJump');
                let durationUp = animStateUp.duration;
                animStateUp.speed = durationUp/(this.jumpTime*2);
                if(!animStateUp.isPlaying){
                let jumpUp = cc.moveTo(this.jumpTime,cc.v2(this.node.x,this.node.y+this.jumpHight)).easing(cc.easeCubicActionOut());
                let jumpDown = cc.moveTo(this.jumpTime,cc.v2(this.node.x,this.node.y)).easing(cc.easeCubicActionIn());
                this.node.runAction(cc.sequence(jumpUp,jumpDown));
                 
                animStateUp.play();
                }
                break;
            case 'down':
                let animStateSquat = moveAnim.getAnimationState('playerSquat');
                let durationSquat = animStateSquat.duration;
                animStateSquat.speed = durationSquat/(this.SquatTime*2); 

                let squatDown = cc.scaleTo(this.SquatTime,1,0.5).easing(cc.easeCubicActionOut());
                let squatUp = cc.scaleTo(this.SquatTime,1,1).easing(cc.easeCubicActionIn());
                this.node.runAction(cc.sequence(squatDown,squatUp));
                
                animStateSquat.play();
                break;

            case 'left':
                let animStateMoveL = moveAnim.getAnimationState('playerMoveLR');
                let durationMoveL = animStateMoveL.duration;
                animStateMoveL.speed = durationMoveL/(this.moveLRTime);

                this.node.runAction(cc.moveTo(this.moveLRTime,cc.v2(this.node.x-this.moveLRDis,this.node.y)));
                
                animStateMoveL.play();
                break;
            case 'right':
                let animStateMoveR = moveAnim.getAnimationState('playerMoveLR');
                let durationMoveR = animStateMoveR.duration;
                animStateMoveR.speed = durationMoveR/(this.moveLRTime);

                this.node.runAction(cc.moveTo(this.moveLRTime,cc.v2(this.node.x+this.moveLRDis,this.node.y)));
                
                animStateMoveR.play();
                break;
        }
    },

    //攻击的函数 (传 目标位置的参数)
    attack: function(target){
        console.log('this is attack');
    },

    //技能的函数(传 技能名、目标位置的参数)
    skill: function(skillName,target){
        console.log('this is skill');
    },

    //说话的函数(传 台词、语气的参数)
    talk: function(word,tone){
        console.log('this is talk');
    },

    //死亡的函数(传死亡方式的参数)
    death: function(style){
        console.log('this is death');
    },


});