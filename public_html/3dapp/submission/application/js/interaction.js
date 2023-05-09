//JS Interactivity
/* -- ANIMATION -- */

var spinning = false;

function spin()
{
    spinning = !spinning;
    document.getElementById('model__Timer').setAttribute('enabled', spinning.toString());
}

function stopRotation()
{
    spinning = false;
    document.getElementById('model__Timer').setAttribute('enabled', spinning.toString());
}

function animateModel()
{
    if(document.getElementById('coke_model__Timer').getAttribute('enabled')!= 'true')
        document.getElementById('coke_model__Timer').setAttribute('enabled', 'true');
    else
        document.getElementById('coke_model__Timer').setAttribute('enabled', 'false');
    
    if(document.getElementById('sprite_model__Timer').getAttribute('enabled')!= 'true')
        document.getElementById('sprite_model__Timer').setAttribute('enabled', 'true');
    else
        document.getElementById('sprite_model__Timer').setAttribute('enabled', 'false');
    
    if(document.getElementById('pepper_model__Timer').getAttribute('enabled')!= 'true')
        document.getElementById('pepper_model__Timer').setAttribute('enabled', 'true');
    else
        document.getElementById('pepper_model__Timer').setAttribute('enabled', 'false');
}

/* -- RENDER SETTINGS -- */

function wireframe()
{
    var e = document.getElementById('coke_model');
    e.runtime.togglePoints(true);
    e.runtime.togglePoints(true);
}

var lightOn = true;

function headLight()
{
    lightOn = !lightOn;
    document.getElementById('coke_model__LIGHT_Light_1').setAttribute('headlight', lightOn.toString());
    console.log(lightOn);
}

function omniLight()
{
    lightOn = !lightOn;
    document.getElementById('coke_model__LIGHT_Light_2').setAttribute('headlight', lightOn.toString());
    console.log(lightOn);
}

function targetLight()
{
    lightOn = !lightOn;
    document.getElementById('coke_model__LIGHT_Light_3').setAttribute('headlight', lightOn.toString());
    console.log(lightOn);
}

/* -- CAMERAS -- */

function cameraDefault()
{
    document.getElementById('coke_model__View_default').setAttribute('bind', 'true');
    document.getElementById('sprite_model__View_default').setAttribute('bind', 'true');
    document.getElementById('pepper_model__View_default').setAttribute('bind', 'true');
}

function cameraFront()
{
    document.getElementById('coke_model__View_front').setAttribute('bind', 'true');
    document.getElementById('sprite_model__View_front').setAttribute('bind', 'true');
    document.getElementById('pepper_model__View_front').setAttribute('bind', 'true');
}

function cameraBack()
{
    document.getElementById('coke_model__View_back').setAttribute('bind', 'true');
    document.getElementById('sprite_model__View_back').setAttribute('bind', 'true');
    document.getElementById('pepper_model__View_back').setAttribute('bind', 'true');
}

function cameraTop()
{
    document.getElementById('coke_model__View_top').setAttribute('bind', 'true');
    document.getElementById('sprite_model__View_top').setAttribute('bind', 'true');
    document.getElementById('pepper_model__View_top').setAttribute('bind', 'true');
}

function cameraBottom()
{
    document.getElementById('coke_model__View_bottom').setAttribute('bind', 'true');
    document.getElementById('sprite_model__View_bottom').setAttribute('bind', 'true');
    document.getElementById('pepper_model__View_bottom').setAttribute('bind', 'true');
}
