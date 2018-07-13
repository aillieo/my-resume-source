cc.Class({
    extends: cc.Component,

    properties: {
        labelYear: {
            default: null,
            type: cc.Label
        },

        labelCompany: {
            default: null,
            type: cc.Label
        },

        labelPosition: {
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
        
        this.labelYear.string = this.data.from.toString() + " - " + this.data.to.toString();
        this.labelCompany.string = this.data.company;
        this.labelPosition.string = this.data.position;
        this.labelDes.string = this.data.detail;
        var iconPath = "Sprites/icons/" + this.data.icon;
        var self = this;
        
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
        var height = this.labelDes.node.height + 240;
        this.node.height = Math.max(height,400);
    }

    // update (dt) {},
});
