/**
 * 所有实体的父类，玩家和敌人都继承于此类
 * HF 命名空间 namespace
 */
var HF = {};

HF.Sex = cc.Enum({
    '男': 0,
    '女': 1
});


HF.Entity =cc.Class({
    extends: cc.Component,
    
    //实体的属性
    properties: {
        entityName : '无名',
        sex : '男',
        age : 18,
        hp : 100,
        mp : 0,
        power : 100,
        intelligence : 100,
        agility : 100,
        isLive : true,
    },

    //神经系统(赋予实体简单的思维，例如条件反射之类的)
    nervusSystem: function(){
        console.log('this is nervusSystem!');
    },

     //普通状态的函数： 包括前后方向的待机和跑动
     genState: function(faceDir){
        console.log('this is stand');
    },

    //移动的函数
    move: function(dir){
        console.log('this is move');
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
    }
});

// module.exports = HF.Entity; 