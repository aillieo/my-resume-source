cc.Class({
    extends: cc.Component,

    properties: {
        labelTitle: {
            default: null,
            type: cc.Label
        },

        labelDes: {
            default: null,
            type: cc.Label
        },

        icon: {
            default: null,
            type: cc.Sprite
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    setData(data)
    {
        this.data = data;
        this.labelTitle.string = this.data.item;
        this.labelDes.string = this.data.detail;
        var iconPath = "Sprites/" + this.data.icon;
        var self = this;

        //self.icon.spriteFrame = new cc.SpriteFrame(iconPath);
        
        cc.loader.loadRes(iconPath, cc.SpriteFrame,
            function(err, texture){
                cc.log(self.icon);
                cc.log(texture);
                self.icon.spriteFrame = texture;
            });
            
    }

    // update (dt) {},
});
