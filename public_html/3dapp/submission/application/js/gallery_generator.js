//JS Gallery Generator
//XMLHttpRequest Obj for communicating with the web server
var xmlHttp = new XMLHttpRequest ();

//new gallery HTML code
var htmlCode = "";

//Temp server response while code is generated
var response;

$(document).ready(function() {
    //PHP path
    var send = "application/view/hook.php";
    
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
                htmlCode += '<a href="' + 'application/assets/images/gallery_imgs' + response[i] + '">';
                htmlCode += '<img id="img_thumbnail" src="application/assets/images/gallery_imgs' + response[i] + '"/>';
                htmlCode += '</a>';
            }
            document.getElementById('gallery3D').innerHTML = htmlCode;
        }
    }
});
