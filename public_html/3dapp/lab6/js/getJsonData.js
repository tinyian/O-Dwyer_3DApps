//JS Doc
$(document).ready(function(){
    //AJAX request to get main text data
    $.getJSON('./model/data.json', function(jsonObj){
        //index
        home = jsonObj.pageTextData[0];
        
        
        //home page text
        $('#title_home').html('<h2>' + home.title + '</h2>');
        $('#subTitle_home').html('<h3>' + home.subTitle + '</h3>');
        $('#description_home').html('<p>' + home.description + '</p>');
        
        //home page, left column text
        $('#title_left').html('<h2>' + jsonObj.pageTextData[1].title + '</h2>');
        $('#subTitle_left').html('<h3>' + jsonObj.pageTextData[1].subTitle + '</h3>');
        $('#description_left').html('<p>' + jsonObj.pageTextData[1].description + '</p>');
        
        //home page, center column text
        $('#title_centre').html('<h2>' + jsonObj.pageTextData[2].title + '</h2>');
        $('#subTitle_centre').html('<h3>' + jsonObj.pageTextData[2].subTitle + '</h3>');
        $('#description_centre').html('<p>' + jsonObj.pageTextData[2].description + '</p>');
        
        //home page, right column text
        $('#title_right').html('<h2>' + jsonObj.pageTextData[3].title + '</h2>');
        $('#subTitle_right').html('<h3>' + jsonObj.pageTextData[3].subTitle + '</h3>');
        $('#description_right').html('<p>' + jsonObj.pageTextData[3].description + '</p>');
        
        //coke X3D main text
        $('#modelTitle_coke').html('<h2>' + jsonObj.pageTextData[4].modelTitle + '</h2>');
        $('#creationMethod_coke').html('<p>' + jsonObj.pageTextData[4].creationMethod + '</p>');
        $('#title_coke').html('<h2>' + jsonObj.pageTextData[4].title + '</h2>');
        $('#subTitle_coke').html('<h3>' + jsonObj.pageTextData[4].subTitle + '</h3>');
        $('#description_coke').html('<p>' + jsonObj.pageTextData[4].description + '</p>');
        
        //sprite X3D main text
        $('#modelTitle_sprite').html('<h2>' + jsonObj.pageTextData[5].modelTitle + '</h2>');
        $('#creationMethod_sprite').html('<p>' + jsonObj.pageTextData[5].creationMethod + '</p>');
        $('#title_sprite').html('<h2>' + jsonObj.pageTextData[5].title + '</h2>');
        $('#subTitle_sprite').html('<h3>' + jsonObj.pageTextData[5].subTitle + '</h3>');
        $('#description_sprite').html('<p>' + jsonObj.pageTextData[5].description + '</p>');
        
        //pepper X3D main text
        $('#modelTitle_pepper').html('<h2>' + jsonObj.pageTextData[6].modelTitle + '</h2>');
        $('#creationMethod_pepper').html('<p>' + jsonObj.pageTextData[6].creationMethod + '</p>');
        $('#title_pepper').html('<h2>' + jsonObj.pageTextData[6].title + '</h2>');
        $('#subTitle_pepper').html('<h3>' + jsonObj.pageTextData[6].subTitle + '</h3>');
        $('#description_pepper').html('<p>' + jsonObj.pageTextData[6].description + '</p>');
        
        //gallery text
        $('#galleryTitle').html('<h4>' + jsonObj.pageTextData[7].galleryTitle + '</h4>');
        $('#galleryDescription').html('<p>' + jsonObj.pageTextData[7].galleryDescription + '</p>');
        
        //interactivity text
        $('#CameraTitle').html('<h5>' + jsonObj.pageTextData[8].CameraTitle + '</h5>');
        $('#CameraSubtitles').html('<p>' + jsonObj.pageTextData[8].CameraSubtitles + '</p>');
    });
});
