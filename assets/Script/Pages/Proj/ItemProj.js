cc.Class({
    extends: cc.Component,

    properties: {
        labelYear: {
            default: null,
            type: cc.Label
        },

        labelName: {
            default: null,
            type: cc.Label
        },

        labelDes: {
            default: null,
            type: cc.Label
        },

        labelLink: {
            default: null,
            type: cc.Label
        },

        image: {
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
        this.labelName.string = this.data.name;
        this.labelLink.string = this.data.link;
        this.labelDes.string = this.data.detail;
        var imagePath = "Sprites/icons/" + this.data.image;
        var self = this;
        
        /*
        cc.loader.loadRes(iconPath, cc.SpriteFrame,
            function(err, texture){
                cc.log(self.icon);
                cc.log(texture);
                self.icon.spriteFrame = texture;
            });
        */    

        this.scheduleOnce(this.updateSize,0);   
            
    },

    updateSize()
    {
        var height = this.labelDes.node.height + 240;
        this.node.height = Math.max(height,400);
    }

    // update (dt) {},
});
