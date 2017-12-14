function Common (){
    this.stateApp = true;

    this.setState = function (value){
        this.stateApp = value;
    }

    this.getState = function (){
        return this.stateApp;
    }
}

Common.prototype = {
    constructor: Common
};