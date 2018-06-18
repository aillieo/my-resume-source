var DataMgr = require("DataMgr");
cc.Class({
    extends: require("PageBase"),

    properties: {
        infoItemTemplate: {
            default: null,
            type: cc.Node
        },
        basicInfoRoot: {
            default: null,
            type: cc.Node
        },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    initWithData()
    {
        this.data = DataMgr.getInstance().getDataBasic();


        for (let i = 0; i < this.data.info.length; ++i) 
        {
            let itemObj = cc.instantiate(this.infoItemTemplate);
            itemObj.active = true;
            this.basicInfoRoot.addChild(itemObj);
            let item = itemObj.getChildByName("item");
            let info = itemObj.getChildByName("info");
            let itemData = this.data.info[i];
            item.getComponent('cc.Label').string = itemData.item;
            info.getComponent('cc.Label').string = itemData.info;
        }


        return this.data!= null;
    },

    onEnter()
    {
        cc.log("PageBasic onEnter");
        if(!this.data && !this.initWithData())
        {
            return;
        }
    },

    onExit()
    {
        cc.log("PageBasic onExit");
    }

    // update (dt) {},
});
