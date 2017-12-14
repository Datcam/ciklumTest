function AbstartController(state) {
    this.activateController = state;

    this.getActivate = function (){
        return this.activateController;
    }
}

function Controller() {

}

function AbstartModel() {
}

function Model(data) {
    this.model = data;

    this.setForexData = function (){
        this.model.forex = data.forex;
    };

    this.setBinaryData = function (){
        this.model.forex = data.binary;
    };

    this.getForexData = function (){
        return this.model.forex;
    };

    this.getBinaryData = function (){
        return this.model.binary;
    };
}

function AbstartView() {

}

function View() {

}

function Platform (){

    function activate(){
        console.log('ACTIVE');
    }
}

Controller.prototype = new AbstartController();
Model.prototype = new AbstartModel();
View.prototype = new AbstartView();

Platform.prototype = {
    constructor: Platform,
    Controller: new Controller(),
    Model: new Model({forex: 'Hello, I am forex part active', binary: 'Hello, I am binary part active'}),
    View: new View(),
};