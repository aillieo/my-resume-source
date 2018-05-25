cc.Class({
    extends: cc.Component,

    properties: {
        label: {
            default: null,
            type: cc.Label
        },
        // defaults, set visually when attaching this script to the Canvas
        text: 'Hello, World!',
        time: 1
    },

    // use this for initialization
    onLoad: function () {
        this.label.string = this.text;
    },

    // called every frame
    update: function (dt) {
        this.time = this.time + 1;
        if(this.time == 100){
            this.time = 1;
        }
        this.label.string = 'Hello, World!  ' + this.time;
    },
});
