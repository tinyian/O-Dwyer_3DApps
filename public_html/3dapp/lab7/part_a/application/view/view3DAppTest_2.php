<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Testy View 2</title>
    <style>
        h1 {
            color:pink;
            margin-left: 5px;
        }
        h2 {
            color:lightblue;
            margin: 5px;
        }
        p {
            color:green;
            margin-left: 5px;
        }
        .imgBox {
            padding: 0.25rem;
            margin-top: 5px;
            margin-bottom: 5px;
            border: 1px solid yellow;
            border-radius: 0.25rem;
            width: 300px;
        }
        .box {
            border: 1px solid rgba(10, 10, 10, 1.0);
            padding: 5px;
            float: left;
            margin: 50px;
            height: 360px;
        }
    </style>
</head>

<body>
    <h1>Second (Sexier) 3D App Test View</h1>
    <p>If you are seeing the image data below, then the basic MVC is WORKING girlie pop</p>
    <div class="box">
        <h2><?php echo $model_1 ?></h2>
        <img class="imgBox" src='assets/images/<?php echo $image_1?>.JPG'>
    </div>
    <div class="box">
        <h2><?php echo $model_2 ?></h2>
        <img class="imgBox" src='assets/images/<?php echo $image_2?>.JPG'>
    </div>
    <div class="box">
        <h2><?php echo $model_3 ?></h2>
        <img class="imgBox" src='assets/images/<?php echo $image_3?>.JPG'>
    </div>
    <div class="box">
        <h2><?php echo $model_4 ?></h2>
        <img class="imgBox" src='assets/images/<?php echo $image_4?>.JPG'>
    </div>
    <div class="box">
        <h2><?php echo $model_5 ?></h2>
        <img class="imgBox" src='assets/images/<?php echo $image_5?>.JPG'>
    </div>
    <div class="box">
        <h2><?php echo $model_6 ?></h2>
        <img class="imgBox" src='assets/images/<?php echo $image_6?>.JPG'>
    </div>
</body>
</html>
