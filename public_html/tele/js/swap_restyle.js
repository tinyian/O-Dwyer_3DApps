//JS Restyler

var counter = 0;

$(document).ready(function(){
    
    selectPage();
    
    function selectPage() {
        
        $("#home").show();
        $("#coke").hide();
        $("#sprite").hide();
        $("#pepper").hide();
        
        $("#home_btn").click(function(){
            $("#home").show();
            $("#coke").hide();
            $("#sprite").hide();
            $("#pepper").hide();
        });
        
        $("#coke_btn").click(function(){
            $("#home").hide();
            $("#coke").show();
            $("#sprite").hide();
            $("#pepper").hide();
        });
        
        $("#sprite_btn").click(function(){
            $("#home").hide();
            $("#coke").hide();
            $("#sprite").show();
            $("#pepper").hide();
        });
        
        $("#pepper_btn").click(function(){
            $("#home").hide();
            $("#coke").hide();
            $("#sprite").hide();
            $("#pepper").show();
        });
    }
});

function changeLook()
{
    counter += 1;
    switch (counter){
        case 1:
            document.getElementById('body').style.backgroundColor = 'ivory';
            document.getElementById('header').style.backgroundColor = '#FF0000';
            document.getElementById('footer').style.backgroundColor = '#FF9900';
            break;
        case 2:
            document.getElementById('body').style.backgroundColor = 'darkgrey';
            document.getElementById('header').style.backgroundColor = '#0000FF';
            document.getElementById('footer').style.backgroundColor = '#0099FF';
            break;
            
        case 3:
            document.getElementById('body').style.backgroundColor = 'coral';
            document.getElementById('header').style.backgroundColor = 'darkcyan';
            document.getElementById('footer').style.backgroundColor = 'darksalmon';
            break;
        case 4:
            document.getElementById('body').style.backgroundColor = 'lightgrey';
            document.getElementById('header').style.backgroundColor = 'chocolate';
            document.getElementById('footer').style.backgroundColor = 'dimgrey';
            break;
    }
}

function changeBack(){
    document.getElementById('body').style.backgroundColor = '#FFFFFF';
    document.getElementById('header').style.backgroundColor = 'rgba(175,0,0,1)';
    document.getElementById('footer').style.backgroundColor = 'rgba(175,0,0,1)';
}
