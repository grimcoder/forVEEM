/**
 * Created by taraskovtun on 7/8/17.
 */


exports.disco = function() {

    var i = 0;
    var interval = setInterval(()=>{
        if (i == 10) clearInterval(interval);
        document.body.setAttribute("name", "helloButton");
        document.body.innerText = i;
        i++;
    }, 1000);


    document.body.setAttribute("name", "helloButton");

}