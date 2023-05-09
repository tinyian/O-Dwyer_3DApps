<!doctype html>
<html lang="en">
    <head>
        <title>3D App Submission</title>
        <!-- Required meta tags -->
        <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1"><link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet">
        <!-- Custom CSS -->
        <link rel="stylesheet" href="../submission/application/css/custom.css">
        <link rel='stylesheet' type='text/css' href="../submission/application/css/x3dom.css">
        <link rel="stylesheet" type="text/css" href="../submission/application/css/jquery.fancybox.css">
        <link rel="stylesheet" type="text/css" href="../submission/application/css/jquery.fancybox.min.css">
    </head>
    <body>
        <!-- Navigation -->
        <nav id="nav" data-toggled="false" data-transitionable="false">
          <div id="nav-logo-section" class="nav-section">
            <a id="home_Btn" href="#">
              <h1>CocaCola</h1>
              <p>FOR ALL</p>
            </a>
          </div>
          <div id="nav-mobile-section">
            <div id="nav-link-section" class="nav-section">
              <a href="https://github.com/tinyian/ODwyer_Web-Mobile3D/tree/main/public_html/3dapp/submission">OUR STORY</a>
              <a href="#" data-open-gallery>GALLERY</a>
                <dialog gallery-modal>
                    <!-- 3D Image Gallery -->
                    <div class="card-body">
                        <h4 class="card-title">3D Image Gallery</h4>
                        <div class="gallery" id="gallery3D"></div>
                        <p>All 3D images rendered in Maxon Cinema 4D.</p><br>
                    </div>
                    <button data-close-gallery>CLOSE</button>
                </dialog>
            </div>
            <div id="nav-social-section" class="nav-section">
              <a href="https://www.facebook.com/cocacolaGB">
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/cocacolagbi/">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="https://twitter.com/CocaCola_GB">
                <i class="fa-brands fa-twitter"></i>
              </a>
            </div>
            <div id="nav-contact-section" class="nav-section">
              <a href="#" data-open-contact>CONTACT</a>
              <dialog contact-modal>
                <form>
                    <h3>Join the family</h3>
                    <input type="text"></input>
                    <button type="submit">Submit</button>
                    <i data-close-contact class="fa-light fa-xmark-small"></i>
                </form>
              </dialog>
            </div>
          </div>
          <button id="nav-toggle-button" type="button" onclick="handleNavToggle()">
            <span>MENU</span>
            <i class="fa-solid fa-bars"></i>
          </button>
        </nav>

        <!-- SPA Main Contents -->
        <main id="home">
            <!-- Home Gallery -->
            <article data-index="0" data-status="active">
                <div class="article-image-section article-section"></div>
                <div id="article-description-section" class="article-description-section article-section">
                    <div id="subTitle_home"></div><br>
                    <div id="description_home"></div>
                </div>
                <div class="article-title-section article-section">
                    <div id="title_home"></div>
                </div>
                <div id="article-nav-section" class="article-nav-section article-section">
                    <button class="article-nav-button" type="button" onclick="handleLeftClick()">
                        <i class="fa-light fa-arrow-left-long"></i>
                    </button>
                    <button class="article-nav-button" type="button" onclick="handleRightClick()">
                        <i class="fa-light fa-arrow-right-long"></i>
                    </button>
                </div>
            </article>
            <article data-index="1" data-status="inactive">
                <div class="article-image-section article-section"></div>
                <div id="article-description-section" class="article-description-section article-section">
                    <div id="subTitle_card1"></div><br>
                    <div id="description_card1"></div><br>
                    <a class="source-link" href="https://www.coca-cola.co.uk/" target="_blank">VISIT COCA-COLA...</a>
                </div>
                <div class="article-title-section article-section">
                    <div id="title_card1"></div>
                </div>
                <div id="article-nav-section" class="article-nav-section article-section">
                    <button class="article-nav-button" type="button" onclick="handleLeftClick()">
                        <i class="fa-light fa-arrow-left-long"></i>
                    </button>
                    <button class="article-nav-button" type="button" onclick="handleRightClick()">
                        <i class="fa-light fa-arrow-right-long"></i>
                    </button>
                </div>
            </article>
            <article data-index="2" data-status="inactive"><div class="article-image-section article-section"></div>
                <div id="article-description-section" class="article-description-section article-section">
                    <div id="subTitle_card2"></div><br>
                    <div id="description_card2"></div><br>
                    <a class="source-link" href="https://www.sprite.com/" target="_blank">VISIT SPRITE...</a>
                </div>
                <div class="article-title-section article-section">
                    <div id="title_card2"></div>
                </div>
                <div id="article-nav-section" class="article-nav-section article-section">
                    <button class="article-nav-button" type="button" onclick="handleLeftClick()">
                        <i class="fa-light fa-arrow-left-long"></i>
                    </button>
                    <button class="article-nav-button" type="button" onclick="handleRightClick()">
                        <i class="fa-light fa-arrow-right-long"></i>
                    </button>
                </div>
            </article>
            <article data-index="3" data-status="inactive"><div class="article-image-section article-section"></div>
                <div id="article-description-section" class="article-description-section article-section">
                    <div id="subTitle_card3"></div><br>
                    <div id="description_card3"></div><br>
                    <a class="source-link" href="https://www.drpepper.com/s/" target="_blank">VISIT DR. PEPPER...</a>
                </div>
                <div class="article-title-section article-section">
                    <div id="title_card3"></div>
                </div>
                <div id="article-nav-section" class="article-nav-section article-section">
                    <button class="article-nav-button" type="button" onclick="handleLeftClick()">
                        <i class="fa-light fa-arrow-left-long"></i>
                    </button>
                    <button class="article-nav-button" type="button" onclick="handleRightClick()">
                        <i class="fa-light fa-arrow-right-long"></i>
                    </button>
                </div>
            </article>
        <!-- End of Home Gallery -->
        
        <!-- SPA 3D Models -->
            <article data-index="4" data-status="inactive">
                <div class="article-model-section article-section">
                    <div id="modelTabs">
                        <button id="coke_Tab">COKE</button>
                        <button id="sprite_Tab">SPRITE</button>
                        <button id="pepper_Tab">DR. PEPPER</button>
                    </div>
                    <!-- COCA-COLA -->
                    <div id="coke3D">
                        <x3d>
                          <scene>
                            <transform id="3Dviewer">
                              <inline nameSpaceName="coke_model" mapDEFToID="true" onclick="animateModel();" url="../submission/application/assets/x3d/coke.x3d"></inline>
                            </transform>
                          </scene>
                        </x3d>
                    </div>
                    <!-- SPRITE -->
                    <div id="sprite3D" style="display:none;">
                        <x3d>
                          <scene>
                            <transform id="3Dviewer">
                              <inline nameSpaceName="sprite_model" mapDEFToID="true" onclick="animateModel();" url="../submission/application/assets/x3d/sprite.x3d"></inline>
                            </transform>
                          </scene>
                        </x3d>
                    </div>
                    <!-- PEPPER -->
                    <div id="pepper3D" style="display:none;">
                        <x3d>
                            <scene>
                                <transform id="3Dviewer">
                                  <inline nameSpaceName="pepper_model" mapDEFToID="true" onclick="animateModel();" url="../submission/application/assets/x3d/pepper.x3d"></inline>
                                </transform>
                            </scene>
                        </x3d>
                    </div>
                </div>

                <div id="article-description-section" class="article-description-section article-section">
                    <div id="cokeText">
                        <div id="title_coke"></div>
                        <div id="subTitle_coke"></div>
                        <div id="description_coke"></div>
                    </div>
                    <div id="spriteText" style="display:none;">
                        <div id="title_sprite"></div>
                        <div id="subTitle_sprite"></div>
                        <div id="description_sprite"></div>
                    </div>
                    <div id="pepperText" style="display:none;">
                        <div id="title_pepper"></div>
                        <div id="subTitle_pepper"></div>
                        <div id="description_pepper"></div>
                    </div>
                </div>

                <!-- INTERACTIVITY PANEL -->
                <div class="article-title-section article-section">
                    <h2>INTERACTIVITY</h2>
                    <div id="interaction" style="display:none;">
                        <div>
                            <div id="intTabs">
                                <button id="CameraTitle">Cameras</button>
                                <button id="RenderTitle">Render Settings</button>
                            </div><br>
                            <div id="camera_Tab">
                                <div id="CameraSubtitles" class="card-text"></div>
                                <div id="btn-group">
                                    <a href="#" class="btn btn-danger btn-responsive camera-font" onClick="cameraDefault();">RESET</a>
                                    <a href="#" class="btn btn-secondary btn-responsive camera-font" onClick="cameraFront();">FRONT</a>
                                    <a href="#" class="btn btn-secondary btn-responsive camera-font" onClick="cameraBack();">BACK</a>
                                    <a href="#" class="btn btn-success btn-responsive camera-font" onClick="cameraTop();">TOP</a>
                                    <a href="#" class="btn btn-success btn-responsive camera-font" onClick="cameraBottom();">BOTTOM</a>
                                </div>
                            </div>
                            <div id="render_Tab">
                                <div id="RenderSubtitles" class="card-text"></div>
                                <div id="btn-group">
                                    <a href="#" class="btn btn-danger btn-responsive camera-font" onClick="headLight();">HEADLIGHT</a>
                                    <a href="#" class="btn btn-danger btn-responsive camera-font" onClick="omniLight();">OMNI</a>
                                    <a href="#" class="btn btn-danger btn-responsive camera-font" onClick="targetLight();">TARGET</a>
                                    <a href="#" class="btn btn-danger btn-responsive camera-font" onClick="wireframe();">WIREFRAME</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <i id="open_Int" class="fa-light fa-plus-large"></i>
                    <i id="close_Int" class="fa-light fa-xmark-large" style="display:none;"></i>
                </div>
                <!-- END OF SPA CONTENTS -->
                <div id="article-nav-section" class="article-nav-section article-section">
                    <button class="article-nav-button" type="button" onclick="handleLeftClick()">
                        <i class="fa-light fa-arrow-left-long"></i>
                    </button>
                    <button class="article-nav-button" type="button" onclick="handleRightClick()">
                        <i class="fa-light fa-arrow-right-long"></i>
                    </button>
                </div>
            </article>
        </main>
    <!-- Footer -->
    <nav id="footer" data-toggled="false" data-transitionable="false">
        <div id="footer-section">
            <p><span class="align-baseline"></span>&copy 2023 Mobile Web 3D Apps</p>
        </div>
        <div id="footer-section">
            <a href="javascript:changeLook()">Restyle</a>
            <a href="javascript:changeBack()">Reset</a>
        </div>
    </nav>
        
    <!-- JS -->
    <script src="../submission/application/js/jquery-3.6.3.js"></script>
    <script src="../submission/application/js/custom.js"></script>
    <script src="../submission/application/js/getJsonData.js"></script>
    <script type='text/javascript' src='../submission/application/js/x3dom.js'></script>
    <script type="text/javascript" src="../submission/application/js/swap_restyle.js"></script>
    <script type="text/javascript" src="../submission/application/js/gallery_generator.js"></script>
    <script type="text/javascript" src="../submission/application/js/interaction.js"></script>
    <script src="../submission/application/js/jquery.fancybox.min.js"></script>
    </body>
</html>

