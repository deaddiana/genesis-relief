<template>
  <main class="mt-5">
      <div class="container">
        <section class="main-content">
          <div class="row">
            <div class="col-md-12 gx-5 mb-4">
              <div class="slide-show">
                <img class="mySlides" src="../static/article1.jpg" style="width:100%" alt="group of volunteers in hardhats and construction vests">
                <!-- <img class="mySlides" src="../static/article2.jpg" style="width:100%" alt="two collegues looking at computers">
                <img class="mySlides" src="../static/article3.jpg" style="width:100%" alt="group of shelter tents in the desert">
                <img class="mySlides" src="../static/article4.jpg" style="width:100%" alt="two emergency standby personnel">
                <img class="mySlides" src="../static/article5.jpg" style="width:100%" alt="volunteers packing food boxes">
                <img class="mySlides" src="../static/article6.jpg" style="width:100%" alt="multiple empthy beds in an emergency shelter ">
                <img class="mySlides" src="../static/article7.jpg" style="width:100%" alt="firemen hosing down a fire with smoke everywhere">
                <img class="mySlides" src="../static/article8.jpg" style="width:100%" alt="fireman pointing at a disaster site">
                <img class="mySlides" src="../static/article9.jpg" style="width:100%" alt="woman under and umberlla after a disaster">
                <img class="mySlides" src="../static/article10.jpg" style="width:100%" alt="two paramedics taking a person on a stretcher">
                <img class="mySlides" src="../static/article11.jpg" style="width:100%" alt="powerful tsumani wave hitting the shore">
                <img class="mySlides" src="../static/article12.jpg" style="width:100%" alt="rescue helicopter carrying two people"> -->
              </div>
            </div>
          </div>

        </section>
        <div class="col-md-6 gx-5 mb-4">
          <h4><strong>Genesis Relief Mission Statement</strong></h4>
          <p class="text-muted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur
            eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum
            sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
          </p>
          <p><strong>What can you do to help?</strong></p>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod itaque voluptate
            nesciunt laborum incidunt. Officia, quam consectetur. Earum eligendi aliquam illum
            alias, unde optio accusantium soluta, iusto molestiae adipisci et?
          </p>
        </div>
      </div>


      <!--Section: Content-->
      <section class="text-center">
        <h4 class="mb-5"><strong>Recent News and Updates</strong></h4>

        <div class="row">
          <div class="col-lg-4 col-md-12 mb-4">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="../static/article5.jpg" alt="volunteers packing food boxes" class="img-fluid" />
                <a href="#!">
                  <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">Article 1</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel pariatur ratione, nemo rem quas cupiditate architecto quia eaque minus ipsum voluptatum repellendus officiis adipisci labore ad! Mollitia praesentium vel illum.
                </p>
                <a href="#!" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="../static/article12.jpg" alt="rescue helicopter carrying two people" class="img-fluid" />
                <a href="#!">
                  <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">Article 2</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel pariatur ratione, nemo rem quas cupiditate architecto quia eaque minus ipsum voluptatum repellendus officiis adipisci labore ad! Mollitia praesentium vel illum.
                </p>
                <a href="#!" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card">
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <img src="../static/article14.jpg" alt="volunteer loading boxes into a van" class="img-fluid" />
                <a href="#!">
                  <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                </a>
              </div>
              <div class="card-body">
                <h5 class="card-title">Article 3</h5>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel pariatur ratione, nemo rem quas cupiditate architecto quia eaque minus ipsum voluptatum repellendus officiis adipisci labore ad! Mollitia praesentium vel illum.
                </p>
                <a href="#!" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--Section: Content-->

      <hr class="my-5" />


    </main>
</template>


<script>
export default {
  name: 'HomePage',
  data () {
    return {
    show: true
    }
  }
}

// let myIndex = 0;
// carousel();
//
// function carousel() {
//   let i;
//   let x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}
//   x[myIndex-1].style.display = "block";
//   setTimeout(carousel, 3000); // Change image every 2 seconds
// }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 body {
   background-color: black;

 }


</style>
