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

    getName(){
        if(this.data)
        {
            return "DataMgr.getData " + this.data.basic.name;
        }
        else
        {
            cc.log("data not loaded");
        }
    }


});

DataMgr._instance = null;
DataMgr.getInstance = function () {
    if(!DataMgr._instance){
        DataMgr._instance = new DataMgr();
    }
    return DataMgr._instance;
}

module.exports = DataMgr;
