/**
 * Created by taraskovtun on 7/8/17.
 */


exports.disco = function() {

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    }


    var i = 1;
    var used = {};

    var interval = setInterval(()=>{
        if (i == 10) clearInterval(interval);

        var r = getRandomIntInclusive(10, 99);
        var g = getRandomIntInclusive(10, 99);
        var b = getRandomIntInclusive(10, 99);

        var color = '#' + (r+g+b);

        if (used[color]) {
            i--;
            return;
        }

        used[color] = {};

        document.body.setAttribute("style", "background-color: " + color );

        i++;
    }, 1000);


    document.body.setAttribute("name", "helloButton");

}