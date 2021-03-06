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
var PageBase = require("PageBase");

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },

        tabs : {
        	default: [], 
        	type: [cc.Toggle]
        },

        pages : {
        	default: [], 
        	type: [PageBase]
        },

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    	this.initToggleEvents();
    	this.onTabClick(null,0);

    },

    // update (dt) {},

    onTabClick(toggle, data) {
    	for(var i in this.pages)
    	{
    		//this.pages[i].node.active = (i == data);
            if(i == data)
            {
                if(!this.pages[i].node.active)
                {
                    this.pages[i].onEnter();
                    this.pages[i].node.active = true;
                }
            }
            else
            {
                if(this.pages[i].node.active)
                {
                    this.pages[i].node.active = false;   
                    this.pages[i].onExit();           
                }
            }
    	}
    },

    initToggleEvents() {
    	for(var i in this.tabs)
    	{
    		var checkEventHandler = new cc.Component.EventHandler();
			checkEventHandler.target = this.node;
			checkEventHandler.component = "TabsCtrl"
			checkEventHandler.handler = "onTabClick";
			checkEventHandler.customEventData = i;

			this.tabs[i].checkEvents.push(checkEventHandler);
    	}
    },






});
