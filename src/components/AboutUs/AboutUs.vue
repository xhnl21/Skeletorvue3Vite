<template>
  <div class="container">
    <section class="about-us">
      <div class="row">
        <div class="col">
          <div class="main-title">
            <h1>
              About Us
            </h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="left-side-image">
            <!-- <img class="bag-image" src="https://drapshop.com/script/main-content/Themes/main/public/img/we-are.svg"
              alt="we are here"> -->
            <!-- <GImage src="https://drapshop.com/script/main-content/Themes/main/public/img/we-are.svg"></GImage> -->
          </div>
        </div>
        <div class="col">
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col">
                  <div class="title">
                    <h1>Who are we?</h1>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="text-content">
                    <p>
                      We are a technological solution that quickly connects millions of customers who require delivery
                      service with their favorite restaurants through responsible and on-time drivers, working to
                      generate significant changes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col">
                  <div class="title">
                    <h1>What do we do?</h1>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="text-content">
                    <p>
                      We serve as a link between our partners and their final customers. Increasing orders as well as
                      the profits of those who trust us. While generating additional income by operating our own fleet
                      of drivers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="coverage-area">
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col">
              <div class="title">
                <h1>Coverage Area</h1>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="text-content">
                We are in more than 31 cities in Broward County. Then our coverage area will expand to the whole of
                Broward and Miami Dade counties. Later, we will reach the whole of Florida, and finally, we will cover
                the whole country. At that moment, we will start our global expansion.
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="right-side-image">
            <img class="coverage-image-img"
              src="https://drapshop.com/script/main-content/Themes/main/public/img/coverage-area.svg"
              alt="coverage image">
          </div>
        </div>
      </div>
    </section>
    <section class="delivery-process">
      <div class="row">
        <div class="col">
          <div class="delivery-process-map">
            <img class="delivery-process-img"
              src="https://drapshop.com/script/main-content/Themes/main/public/img/drapshop-process.svg"
              alt="delivery process">
          </div>
        </div>
      </div>
    </section>
    <section class="btn-return">
      <div class="row">
        <div class="col">
          <div class="return-btn">
            <router-link class="btn btn-default return" to="/">
              <button class="btn btn-lg btn-primary">Back to Home</button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import {GImage} from "../../components/Layouts/images/Image";
export default {
    name: "AboutUs",
    components: {
        // GImage
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .about-us{
    padding: auto;
    font-family: Libre Franklin;
    color: #000000;
    letter-spacing: 0.3px;
  }
  .about-us .main-title{
    padding: 5%;
  }
  .about-us .main-title h1{
    font-size: 40px;
    line-height: 45px;
  }
  .about-us .left-side-image{
    padding: 0 0 10% 0;
    position: relative;

  }
</style>