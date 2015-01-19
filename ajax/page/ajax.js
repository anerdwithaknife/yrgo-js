function loadContent() {
    var xmlhttp = new XMLHttpRequest();

/*
    function statecallback() {
        console.log('Nu körs jag.'); 
    }
    xmlhttp.onreadystatechange = statecallback;
*/

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.status == 200 && xmlhttp.readyState == 4) {
            //var content = document.getElementById('content');
            content.innerHTML = xmlhttp.responseText;
        }
    }

    xmlhttp.open('GET', '/yrgo/ajax/page/content.php', true);
    xmlhttp.send();

    content.innerHTML = 'Laddar..';
}

var btn = document.getElementById('updatebutton');
btn.addEventListener('click', loadContent);
