/**
 * 备用实体父类
 * HF 命名空间 namespace
 */
var HF = {};

HF.Entity =cc.Class({
    ctor: function(){
        this.name = '无名';
        this.sex = ' ';
        this.age = 18;
        this.hp = 100;
        this.mp = 0;
        this.power = 100;
        this.intelligence = 100;
        this.agility = 100;
        this.isLive = true;
    },

    setName: function(newName){
        this.name = newName;
    },
    
    talk: function(){
        console.log('hello, I am '+ this.name);
    },
    move: function(){
        console.log(this.name + ' is move');
    }
});
 
module.exports = HF.Entity; 