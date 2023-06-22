<?php
require 'view/load.php';
require 'model/model.php';
require 'controller/controller.php';

// Get the requested page URI
$pageURI = $_SERVER['REQUEST_URI'];
$pageURI = substr($pageURI, strrpos($pageURI, 'index.php') + 10);

// Check if the page URI is empty
if (!$pageURI) {
    // Instantiate the controller with 'home' as the default page
    new Controller('home');
} else {
    // Instantiate the controller with the page URI
    new Controller($pageURI);
}
?>
