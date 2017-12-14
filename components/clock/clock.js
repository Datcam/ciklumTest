function AbstartController(state) {

}

function Controller() {

}

function AbstartModel() {

}

function Model() {
    this.setData = function (data){
        this.model = data;
    };

    this.getData = function (){
        return moment.utc().format('YYYY-MM-DD HH:mm:ss');
    };
}

function AbstartView() {

}

function View() {

}

function Clock (){
    var date = moment.utc().format('YYYY-MM-DD HH:mm:ss');
    this.Model.setData(date);
}

Controller.prototype = new AbstartController();
Model.prototype = new AbstartModel();
View.prototype = new AbstartView();

Clock.prototype = {
    constructor: Clock,
    Controller: new Controller(),
    Model: new Model(),
    View: new View(),
};