$(document).ready(function (){

        function afterDOMLoad(){
        $('#binaryText').html(plat.Model.getBinaryData());
        $('#forexText').html(plat.Model.getForexData());
        $('#clock').html(clock.Model.getData());
    }

    function addComponentToPage(state){
        if (state === 'openAccount') {
            $(function(){
                $("#clock").load("./components/clock/clock.html");
                $("#openAccount").load("./components/openAccount/openAccount.html");
            });
            $('head').append(
                '<link rel="stylesheet" href="./components/clock/clock.css" type="text/css" />,' +
                ' <link rel="stylesheet" href="./components/openAccount/openAccount.css" type="text/css" />');
        } else if (state === 'platform') {
            $(function(){
                $("#clock").load("./components/clock/clock.html");
                $("#platform").load("./components/platform/platform.html", function (){
                    afterDOMLoad();
                });
            });
            $('head').append(
                '<link rel="stylesheet" href="./components/clock/clock.css" type="text/css" />,' +
                ' <link rel="stylesheet" href="./components/platform/platform.css" type="text/css" />');
        }
    }

    function setScripts(componentsArray){
        componentsArray.forEach(function (item){
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = './components/'+ item +'/'+ item +'.js';

            $('head').append(script);
        });
    }

    var components = [],
        path = document.location.pathname;

    if (path === '/ciklum/platform.html') {
            components = ['common', 'clock', 'platform'];

            setScripts(components);

            var commonApp = new Common();

        if (commonApp.getState()) {
            var plat = new Platform(),
                clock = new Clock();

            addComponentToPage('platform');
        }


    } else if (path === '/ciklum/openAccount.html') {
        components = ['common', 'clock', 'openAccount'];

        setScripts(components);

        var commonApp = new Common();

        if (commonApp.getState()) {
            var openAc = new OpenAccount(),
                clock = new Clock();

            openAc.Controller.getUserData();

            addComponentToPage('openAccount');
        }

    } else if (path === '/ciklum/index.html') {
        components = ['clock', 'openAccount', 'platform'];

        setScripts(components);
    }

    if (clock) {
        setInterval(function (){
            $('#clock').html(clock.Model.getData());
        }, 1000);
    }

    function formSuccess(){
        $( "#submitBtn" ).removeClass( "hidden" );
    }

    $('#submitBtn').click(function (){
        openAc.Controller.submitForm();
    });
});