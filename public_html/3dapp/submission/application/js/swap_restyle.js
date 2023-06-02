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
            document.getElementById('nav-logo-section').style.backgroundColor = 'rgb(56, 0, 118)';
            document.getElementById('nav').style.backgroundColor = 'rgb(62, 118, 0)';
            document.getElementById('footer').style.backgroundColor = 'rgb(0, 118, 115)';
            break;
        case 2:
            document.getElementById('nav-logo-section').style.backgroundColor = 'rgb(118, 56, 0)';
            document.getElementById('nav').style.backgroundColor = 'rgb(118, 115, 0)';
            document.getElementById('footer').style.backgroundColor = 'rgb(0, 118, 56)';
            break;
            
        case 3:
            document.getElementById('nav-logo-section').style.backgroundColor = 'rgb(118, 27, 0)';
            document.getElementById('nav').style.backgroundColor = 'rgb(118, 86, 0)';
            document.getElementById('footer').style.backgroundColor = 'rgb(92, 118, 0)';
            break;
        case 4:
            document.getElementById('nav-logo-section').style.backgroundColor = 'rgb(89, 0, 2)';
            document.getElementById('nav').style.backgroundColor = 'rgb(59, 0, 2)';
            document.getElementById('footer').style.backgroundColor = 'rgb(29, 0, 1)';
            break;
    }
}

function changeBack(){
    document.getElementById('nav-logo-section').style.backgroundColor = 'rgb(118, 0, 3)';
    document.getElementById('nav').style.backgroundColor = 'rgb(118, 0, 3)';
    document.getElementById('footer').style.backgroundColor = 'rgb(118, 0, 3)';
}
