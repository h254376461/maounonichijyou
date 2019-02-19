
/**
 * 敌人的实体类
 */

const Entity = require('entity');

cc.Class({
    extends: Entity,

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

    onload: function(){

    }


});