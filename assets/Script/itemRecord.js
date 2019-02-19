/**
 * 显示历史记录每条信息的类
 */
cc.Class({
    extends: cc.Component,

    properties: {
        itemDayNum: cc.Label,
        itemEnemy: cc.Label,
        itemResult: cc.Label
    },

    getTextColor: function(color){
        var tempWrite;
        var tempBlack;
        var tempCyan;
        var tempGreen;
        var tempPurple;
        var tempPink;
        var tempRed;
        var tempGray;
        var tempGolden;
        var tempOrange;
               
        switch (color){
            case 'write':
                if(!tempWrite){
                    tempWrite = new cc.color('#FFFFFF');
                }
                return tempWrite;
            case 'black':
                if(!tempBlack){
                    tempBlack = new cc.color('#000000');
                }
                return tempBlack;
            case 'cyan':
                if(!tempCyan){
                    tempCyan = new cc.color('#00F5FF');
                }
                return tempCyan;
            case 'green':
                if(!tempGreen){
                    tempGreen = new cc.color('#00FC8D');
                }
                return tempGreen;
            case 'purple':
                if(!tempPurple){
                    tempPurple = new cc.color('#800080');
                }
                return tempPurple;
            case 'pink':
                if(!tempPink){
                    tempPink = new cc.color('#FFA9BB');
                }
                return tempPink;
            case 'red':
                if(!tempRed){
                    tempRed = new cc.color('#FF0000');
                }
                return tempRed;
            case 'gray':
                if(!tempGray){
                    tempGray = new cc.color('#636363');
                }
                return tempGray;
            case 'golden':
                if(!tempGolden){
                    tempGolden = new cc.color('#FFD700');
                }
                return tempGolden;
            case 'orange':
                if(!tempOrange){
                    tempOrange = new cc.color('#FAB400');
                }
                return tempOrange;
            default:
                if(!tempBlack){
                    tempBlack = new cc.color('#000000');
                }
                return tempBlack;
        }
 
    },

    init: function(data){
        this.itemDayNum.node.color = this.getTextColor('cyan');
        this.itemDayNum.string = data.dayNum;

        switch(data.difficulty){
            case '简单':
                this.itemEnemy.node.color = this.getTextColor('write');
                break;
            case '一般':
                this.itemEnemy.node.color = this.getTextColor('green');
                break;
            case '困难':
                this.itemEnemy.node.color = this.getTextColor('purple');
                break;
            case '非常困难':
                this.itemEnemy.node.color = this.getTextColor('pink');
                break;
            default:
                this.itemEnemy.node.color = this.getTextColor('write');
                break;
        }
        this.itemEnemy.string = data.enemy;

        switch(data.result){
            case '胜利':
                this.itemResult.node.color = this.getTextColor('red');
                break;
            case '失败':
                this.itemResult.node.color = this.getTextColor('gray');
                break;
            case '结局1':
            case '结局2':
                this.itemResult.node.color = this.getTextColor('golden');
                break;
            case '结局3(真)':
                this.itemResult.node.color = this.getTextColor('orange');
                break;
            case '逃跑':
                this.itemResult.node.color = this.getTextColor('write');
                break;
            default:
                this.itemResult.node.color = this.getTextColor('write');
                break;
        }       
        this.itemResult.string = data.result;
    }
});
