function AbstartController(state) {
    this.activateController = state;

    this.getActivate = function (){
        return this.activateController;
    }
}

function Controller() {
    this.getUserData = function (){
    }

    this.submitForm = function (){

        var name = $("#name").val(),
            email = $("#email").val(),
            password1 = $("#pwd1").val(),
            password2 = $("#pwd2").val();

        $.ajax({
            type: "POST",
            url: "newUser.php",
            data: "name=" + name +
            "&email=" + email +
            "&password1=" + password1 +
            "&password2=" + password2,

            success : function(text){
                if (text == "success"){
                    console.log('Saved');
                }
            }
        });
    }
}

function AbstartModel() {
}

function Model(data) {
    this.model = data;

    this.getBigData = function (){
        return this.model;
    };
}

function AbstartView() {

}

function View() {
    this.viewData = '';

    this.getView = function (){
        return this.viewData;
    }

    this.setView = function (data){
        this.viewData = data;
    }
}

function OpenAccount (){
    function activate(){

    }
}

Controller.prototype = new AbstartController();
Model.prototype = new AbstartModel();
View.prototype = new AbstartView();

OpenAccount.prototype = {
    constructor: OpenAccount,
    Controller: new Controller(),
    Model: new Model(),
    View: new View(),
};