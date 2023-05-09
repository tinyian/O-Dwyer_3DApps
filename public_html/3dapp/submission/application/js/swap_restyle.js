//JS Restyler

var counter = 0;

$(document).ready(function(){
    
    selectPage();
    
    function selectPage() {
        
        $("#home").show();
        $("#coke").show();
        
        $("#home_Btn").click(function(){
            $("#home").show();
            $("#interaction").hide();
        });
        
        $("#coke_Tab").click(function(){
            $("#coke3D").show();
            $("#cokeText").show();
            $("#sprite3D").hide();
            $("#spriteText").hide();
            $("#pepper3D").hide();
            $("#pepperText").hide();
        });
        $("#sprite_Tab").click(function(){
            $("#coke3D").hide();
            $("#cokeText").hide();
            $("#sprite3D").show();
            $("#spriteText").show();
            $("#pepper3D").hide();
            $("#pepperText").hide();
        });
        $("#pepper_Tab").click(function(){
            $("#coke3D").hide();
            $("#cokeText").hide();
            $("#sprite3D").hide();
            $("#spriteText").hide();
            $("#pepper3D").show();
            $("#pepperText").show();
        });
        
        $("#open_Int").click(function(){
            $("#interaction").show();
            $("#open_Int").hide();
            $("#close_Int").show();
            $("#camera_Tab").show();
            $("#render_Tab").hide();
        });
        $("#close_Int").click(function(){
            $("#interaction").hide();
            $("#open_Int").show();
            $("#close_Int").hide();
            $("#camera_Tab").hide();
            $("#render_Tab").hide();
        });
        
        $("#CameraTitle").click(function(){
            $("#camera_Tab").show();
            $("#render_Tab").hide();
        });
        
        $("#RenderTitle").click(function(){
            $("#camera_Tab").hide();
            $("#render_Tab").show();
        });
    }
});

function changeLook()
{
    counter += 1;
    switch (counter){
        case 1:
            document.getElementById('nav-logo-section').style.backgroundColor = 'ivory';
            document.getElementById('nav').style.backgroundColor = '#FF0000';
            document.getElementById('footer').style.backgroundColor = '#FF9900';
            break;
        case 2:
            document.getElementById('nav-logo-section').style.backgroundColor = 'darkgrey';
            document.getElementById('nav').style.backgroundColor = '#0000FF';
            document.getElementById('footer').style.backgroundColor = '#0099FF';
            break;
            
        case 3:
            document.getElementById('nav-logo-section').style.backgroundColor = 'coral';
            document.getElementById('nav').style.backgroundColor = 'darkcyan';
            document.getElementById('footer').style.backgroundColor = 'darksalmon';
            break;
        case 4:
            document.getElementById('nav-logo-section').style.backgroundColor = 'lightgrey';
            document.getElementById('nav').style.backgroundColor = 'chocolate';
            document.getElementById('footer').style.backgroundColor = 'dimgrey';
            break;
    }
}

function changeBack(){
    document.getElementById('nav-logo-section').style.backgroundColor = 'rgb(118, 0, 3)';
    document.getElementById('nav').style.backgroundColor = 'rgb(118, 0, 3)';
    document.getElementById('footer').style.backgroundColor = 'rgb(118, 0, 3)';
}
