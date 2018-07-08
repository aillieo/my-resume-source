// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var DataMgr = require("DataMgr");
cc.Class({
    extends: require("PageBase"),

    properties: {
        itemTemplate: {
            default: null,
            type: cc.Node
        },
        scrollView: {
            default: null,
            type: cc.ScrollView
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    initWithData()
    {
        this.data = DataMgr.getInstance().getDataExp();
        if(this.data == null)
        {
            return false;
        }

        if(!this.inited)
        {
            this.initScrollview();
            this.inited = true;
        }


        return true;
    },

    initScrollview()
    {
        this.itemRoot = this.scrollView.content;
        for (let i = 0; i < this.data.length; ++i) 
        {
            let itemObj = cc.instantiate(this.itemTemplate);
            itemObj.active = true;
            this.itemRoot.addChild(itemObj);
            let item = itemObj.getComponent('ItemExp');
            item.setData(this.data[i]);
        }
    },

    onEnter()
    {
        cc.log("PageExp onEnter");
        if(!this.data && !this.initWithData())
        {
            return;
        }
        cc.log("len = " + this.data.length);
    },

    onExit()
    {
        cc.log("PageExp onExit");
    }

    // update (dt) {},
});
