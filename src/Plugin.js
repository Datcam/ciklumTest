import Clock from '../components/clock/clock.component';

$( document ).ready(function (){
    console.log('Document is ready');

    let clockUser = new Clock('Maksim');

    clockUser.sayHi()

});