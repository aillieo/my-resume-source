cc.Class({
    extends: cc.Component,

    properties: {
        labelYear: {
            default: null,
            type: cc.Label
        },

        labelUniversity: {
            default: null,
            type: cc.Label
        },

        labelMajor: {
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
        this.labelUniversity.string = this.data.university;
        this.labelMajor.string = this.data.major;
        this.labelDes.string = this.data.detail;
        var iconPath = "Sprites/icons/" + this.data.icon;
        var self = this;
        
        cc.loader.loadRes(iconPath, cc.SpriteFrame,
            function(err, texture){
                cc.log(self.icon);
                cc.log(texture);
                self.icon.spriteFrame = texture;
            });
            
            
    }

    // update (dt) {},
});
