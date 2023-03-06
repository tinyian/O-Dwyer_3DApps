<?php
//thumbnail images path
$directory = '../assets/images/gallery_imgs';

//file limiter
$allowed_extensions = array('jpg','jpeg','gif','png');

//separate the extension from each file
$file_parts = array();

//response msg
$response = "";

//open directory
$dir_handle = opendir($directory);

//iterate through all the files
while ($file = readdir($dir_handle)) {
    //hidden file check
    if (substr($file, 0, 1) != '.') {
        //split each name to extract the extension
        $file_components = explode('.', $file);
        //grab extension
        $extension = strtolower(array_pop($file_components));
        //validate image
        if (in_array($extension, $allowed_extensions)){
            //validation response
            $response .= '/'.$file.'~';
        }
    }
}
closedir($dir_handle);

//return response & remove the last ~
echo substr_replace($response,"",-1);
?>
