/**
 * 游戏的控制中心(控制整个游戏的运行)
 */


const Menu = require('menuCC');

cc.Class({
    extends: cc.Component,

    properties: {
        menu:Menu,
    },

    //初始化
    onLoad: function(){
        cc.game.addPersistRootNode(this.node);  //设置当前节点为常驻节点
        this.menu.initMenu();   //初始化menu.js
    },

    update: function(dt) {
 
    },


});
