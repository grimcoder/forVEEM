/**
 * Created by taraskovtun on 7/8/17.
 */


exports.disco = function() {

    var i = 0;
    var interval = setInterval(()=>{
        if (i == 9) clearInterval(interval);

        document.body.setAttribute("style", "background-color: #" + (i * 10 - 1) + 'aaaa' );

        document.body.innerText = i;
        i++;
    }, 1000);


    document.body.setAttribute("name", "helloButton");

}