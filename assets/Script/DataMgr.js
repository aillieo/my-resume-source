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
        //this.loadData();
    },


    loadData(callback){
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
                if(null != callback)
                {
                    callback();
                }
            }
        });
    },

    getDataBasic(){
        if(this.data)
        {
            cc.log("data basic loaded");
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

    getDataExp(){
        if(this.data)
        {
            return this.data.experience;
        }
        else
        {
            cc.log("data not loaded");
            return null;
        }
    },


    getDataProj(){
        if(this.data)
        {
            return this.data.projects;
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


    getTextureByKey(key){

       if(this.data)
        {

            var str = this.data.images[key];
            var src = "data:image/png;base64," + str;
            var imgElement = new Image();

            imgElement.src = src;
            imgElement.width = 200;
            imgElement.height = 200;

            var texture2d = new cc.Texture2D();
            texture2d.initWithElement(imgElement);
            texture2d.handleLoadedTexture();

            return texture2d;

        }
        else
        {
            cc.log("data not loaded");
            return null;
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
