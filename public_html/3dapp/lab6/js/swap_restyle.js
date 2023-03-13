//JS Restyler

var counter = 0;

function swap(selected){
    <!-- Display nothing -->
    document.getElementById('home').style.display = 'none';
    document.getElementById('coke').style.display = 'none';
    document.getElementById('sprite').style.display = 'none';
    document.getElementById('pepper').style.display = 'none';
    
    <!-- Display selected div ID content -->
    document.getElementById(selected).style.display = 'block';
}

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
