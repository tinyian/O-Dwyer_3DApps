//JS Gallery Generator
//XMLHttpRequest Obj for communicating with the web server
var xmlHttp = new XMLHttpRequest ();

//new gallery HTML code
var htmlCode = "";

//Temp server response while code is generated
var response;

$(document).ready(function() {
    //PHP path
    var send = "php/hook.php";
    
    //Connect to web server
    xmlHttp.open("GET", send, true);
    
    //Tell the server we're not sending anything
    xmlHttp.send(null);
    
    //Validate the response
    xmlHttp.onreadystatechange = function(){
        if(xmlHttp.readyState == 4){
            //alert(xmlHttp.responseText);
            response = xmlHttp.responseText.split("~");
            for (var i=0; i < response.length; i++){
                //gallery img html
                htmlCode += '<a href="' + 'assets/images/gallery_imgs' + response[i] + '">';
                htmlCode += '<img class="card-img-top img-thumbnail" src="assets/images/gallery_imgs' + response[i] + '"/>';
                htmlCode += '</a>';
            }
            document.getElementById('gallery_coke').innerHTML = htmlCode;
            document.getElementById('gallery_sprite').innerHTML = htmlCode;
            document.getElementById('gallery_pepper').innerHTML = htmlCode;
        }
    }
});
