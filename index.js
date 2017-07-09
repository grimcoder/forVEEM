/**
 * Created by taraskovtun on 7/8/17.
 */


exports.disco = function() {

    var i = 1;
    var interval = setInterval(()=>{
        if (i == 10) clearInterval(interval);

        document.body.setAttribute("style", "background-color: #" + (i * 10 - 1) + 'aaaa' );

        i++;
    }, 1000);


    document.body.setAttribute("name", "helloButton");

}