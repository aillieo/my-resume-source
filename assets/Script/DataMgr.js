// DataMgr.js 
//
// use this singleton
//var DataMgr = require("DataMgr");
//DataMgr.getInstance().somefunc();
//

var DataMgr = cc.Class({
    // 成员变量
    name : "DataMgr",
    data : null,

    ctor () {
        this.name = "DataMgr";
        this.loadData();
    },


    loadData(){
        var url = ('TextData/data');
        var self = this;
        cc.loader.loadRes( url, function( err, res)
        {
            if (err)
            {
                cc.log(err);
            }
            else
            {
                self.data = res;
            }
        });
    },

    getDataBasic(){
        if(this.data)
        {
            return this.data.basic;
        }
        else
        {
            cc.log("data not loaded");
            return null;
        }
    },

    getDataSkill(){
        if(this.data)
        {
            return this.data.skills;
        }
        else
        {
            cc.log("data not loaded");
            return null;
        }
    },

    getDataEdu(){
        if(this.data)
        {
            return this.data.education;
        }
        else
        {
            cc.log("data not loaded");
            return null;
        }
    },



    getDetailByKey(key){
        if(this.data)
        {
            return this.data.details[key];
        }
        else
        {
            cc.log("data not loaded");
            return null;
        }
    },


});

DataMgr._instance = null;
DataMgr.getInstance = function () {
    if(!DataMgr._instance){
        DataMgr._instance = new DataMgr();
    }
    return DataMgr._instance;
}

module.exports = DataMgr;
