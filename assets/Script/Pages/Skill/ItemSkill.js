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
        if(!data)
        {
            return;
        }
        this.data = data;
        this.labelTitle.string = this.data.item;
        this.labelDes.string = this.data.detail;
        var iconPath = "Sprites/icons/" + this.data.icon;
        var self = this;

        //self.icon.spriteFrame = new cc.SpriteFrame(iconPath);
        
        cc.loader.loadRes(iconPath, cc.SpriteFrame,
            function(err, texture){
                cc.log(self.icon);
                cc.log(texture);
                self.icon.spriteFrame = texture;
            });
            
        this.scheduleOnce(this.updateSize,0);   
    },

    updateSize()
    {
        var height = this.labelDes.node.height + 100;
        this.node.height = Math.max(height,220);
    }

    // update (dt) {},
});
