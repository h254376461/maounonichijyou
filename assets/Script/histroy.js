/**
 * 这里是历史记录的类
 */
cc.Class({
    extends: cc.Component,

    properties: {
        itemPrefab: cc.Prefab,
        scrollContent: cc.Node,
    },

    onLoad: function () {
        // var infoData = JSON.parse(cc.sys.localStorage.getItem('dayNum'));
        
        // for (var i = 0; i < infoData.length; ++i) {
        for (var i = 0; i < 20; ++i) {
        
            var item = cc.instantiate(this.itemPrefab);
            
            // var data = infoData[i];
            
            this.scrollContent.addChild(item);
            
            item.getComponent('itemRecord').init({
                // dayNum: data.dayNum,
                // enemy: data.enemy,
                // result: data.result,
                dayNum: '999',
                enemy: '最終BOSS',
                difficulty: '非常困难',
                result: '结局3(真)'
                
            });
        }
    }
});
