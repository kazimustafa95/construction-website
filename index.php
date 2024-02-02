<!doctype html>
<html class="no-js" lang="en">

<head>
  <?php include('container/links.php'); ?>
  <title>Home | Ledcor Holdings</title>
</head>
<body class="home">
  <?php include('container/preloader.php'); ?>
  <?php include('container/header.php'); ?>

  <div class="main-content">
    <div id="home">
      <section class="owl-carousel hero-slider hero-slider-v2" id="hero-slider-v2">
        <div class="single-slid">
          <div class="bg-img lazy" data-src="img/slider/Banner-1.jpg"></div>
          <div class="slider-overlay"></div>
          <div class="container">
            <div class="hero-text text-center">
              <h1>Welcome to <br>Ledcor Holdings!</h1>
              <h4>We are your ultimate gateway to craft your dream projects with ease.</h4>
              <div class="hero-btn-wrap">
              	<a href="contact.php" class="t-btn hero-btn">I want to discuss a project</a>
              </div>
            </div>
          </div>
        </div><!-- .single-slid -->
        <div class="single-slid">
          <div class="bg-img lazy" data-src="img/slider/Banner-2.jpg"></div>
          <div class="slider-overlay"></div>
          <div class="container">
            <div class="hero-text text-center">
              <h1>Craftsmanship You <br>Can Trust</h1>
              <h4 style="line-height:2;">Are you tired of projection completion delays and longer than expected timelines? <br>Then, it’s time to say good bye to all the slow-paced construction firms and contractors. </h4>
              <div class="hero-btn-wrap">
              	<a href="contact.php" class="t-btn hero-btn">I want to discuss a project</a>
              </div>
            </div>
          </div>
        </div><!-- .single-slid -->
        <div class="single-slid">
          <div class="bg-img lazy" data-src="img/slider/Banner-3.jpg"></div>
          <div class="slider-overlay"></div>
          <div class="container">
            <div class="hero-text text-center">
              <h1>Raising Ontario's Construction Standards</h1>
              <h4>We bring your vision to life with meticulous attention to detail. We ensure your dream projects surpass the highest standards of precision and reliability. Now, what are you waiting for?</h4>
              <div class="hero-btn-wrap">
              	<a href="contact.php" class="t-btn hero-btn">I want to discuss a project</a>
              </div>
            </div>
          </div>
        </div><!-- .single-slid -->
      </section>
    </div>

    <!-- Start Service Sectinn -->
    <?php include('container/serviceSection.php'); ?>
    <!-- End Service Sectinn -->

    <!-- Start Working process -->
    <?php  include('container/workingprocess.php'); ?>
    <!-- End Working process -->

    <!-- Sectors -->
    <?php  include('container/sectoer.php'); ?>
    <!-- Sectors -->


    <!-- Start Project Section -->
    <?php include('container/latestprojects.php'); ?>
    <!-- End Project Section -->

  
    <!-- Start Dilog Box -->
    <?php include('container/dilogbox.php'); ?>
    <!-- End Dilog Box -->

    <!-- Start Testimonial -->
    <?php include('container/testimonial.php'); ?>
    <!-- End Testimonial -->

    <hr>
    <!-- Start home-blog -->
    <?php include('container/homeblog.php'); ?>
    <!-- End home-blog -->

 
    <!-- Start Subscribe Section -->
    <?php include('container/newsletters.php'); ?>
    <!-- End Subscribe Section -->
    </div><!-- .main-content -->

  <!-- Start Footer Scetion -->
  <?php include('container/footersection.php'); ?>
  <!-- End Footer Scetion -->

  <!-- Scroll Up Button -->
  <span class='scrollup' id="scrollup"></span>

  <!-- Scripts -->
  <?php include('container/scripts.php'); ?>
</body>
</html>