//JS Doc
$(document).ready(function(){
    //AJAX request to get main text data
    $.getJSON('./model/data.json', function(jsonObj){
        //index
            //home page
            home = jsonObj.pageTextData[0];
            card1 = jsonObj.pageTextData[1];
            card2 = jsonObj.pageTextData[2];
            card3 = jsonObj.pageTextData[3];
            coke = jsonObj.pageTextData[4];
            sprite = jsonObj.pageTextData[5];
            pepper = jsonObj.pageTextData[6];

        //home page, main card text
        $('#title_home').html('<h2>' + home.title + '</h2>');
        $('#subTitle_home').html('<h2>' + home.subTitle + '</h2>');
        $('#description_home').html('<h4>' + home.description + '</h4>');
        
        //home page, gallery card 1 text
        $('#title_card1').html('<h2>' + card1.title + '</h2>');
        $('#subTitle_card1').html('<h2>' + card1.subTitle + '</h2>');
        $('#description_card1').html('<h4>' + card1.description + '</h4>');
        
        //home page, gallery card 2 text
        $('#title_card2').html('<h2>' + card2.title + '</h2>');
        $('#subTitle_card2').html('<h2>' + card2.subTitle + '</h2>');
        $('#description_card2').html('<h4>' + card2.description + '</h4>');
        
        //home page, gallery card 3 text
        $('#title_card3').html('<h2>' + card3.title + '</h2>');
        $('#subTitle_card3').html('<h2>' + card3.subTitle + '</h2>');
        $('#description_card3').html('<h4>' + card3.description + '</h4>');
        
        //coke X3D main text
        $('#modelTitle_coke').html('<h2>' + coke.modelTitle + '</h2>');
        $('#creationMethod_coke').html('<h4>' + coke.creationMethod + '</h4>');
        $('#title_coke').html('<h2>' + coke.title + '</h2>');
        $('#subTitle_coke').html('<p>' + coke.subTitle + '</p>');
        $('#description_coke').html('<h4>' + coke.description + '</h4>');
        
        //sprite X3D main text
        $('#modelTitle_sprite').html('<h2>' + sprite.modelTitle + '</h2>');
        $('#creationMethod_sprite').html('<h4>' + sprite.creationMethod + '</h4>');
        $('#title_sprite').html('<h2>' + sprite.title + '</h2>');
        $('#subTitle_sprite').html('<p>' + sprite.subTitle + '</p>');
        $('#description_sprite').html('<h4>' + sprite.description + '</h4>');
        
        //pepper X3D main text
        $('#modelTitle_pepper').html('<h2>' + pepper.modelTitle + '</h2>');
        $('#creationMethod_pepper').html('<h4>' + pepper.creationMethod + '</h4>');
        $('#title_pepper').html('<h2>' + pepper.title + '</h2>');
        $('#subTitle_pepper').html('<p>' + pepper.subTitle + '</p>');
        $('#description_pepper').html('<h4>' + pepper.description + '</h4>');
        
        //gallery text
        $('#galleryTitle').html('<h4>' + jsonObj.pageTextData[7].galleryTitle + '</h4>');
        $('#galleryDescription').html('<p>' + jsonObj.pageTextData[7].galleryDescription + '</p>');
        
        //interactivity text
        $('#CameraTitle').html('<h5>' + jsonObj.pageTextData[8].CameraTitle + '</h5>');
        $('#CameraSubtitles').html('<p>' + jsonObj.pageTextData[8].CameraSubtitles + '</p>');
    });
});
