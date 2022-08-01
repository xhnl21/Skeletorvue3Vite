<template>
  <footer class="main-footer">
    <div class="container">
      <section class="footer-header">
        <div class="row">
          <div class="col">
            <div class="footer-logo d-flex justify-content-start">
              <img src="https://draplovers.com/script/main-content/Themes/main/public/img/footer/logo.png"
                alt="Drapshop LLC">
            </div>
          </div>
          <div class="col">
            <div class="footer-social-media d-flex justify-content-end">
              <ul>
                <li>
                  <a href="#" class="social-media"><img class="social-media-icon"
                      src="https://draplovers.com/script/main-content/Themes/main/public/img/footer/iconFacebook.png"
                      alt=""></a>
                </li>
                <li>
                  <a href="#" class="social-media"><img class="social-media-icon"
                      src="https://draplovers.com/script/main-content/Themes/main/public/img/footer/iconFacebook.png"
                      alt=""></a>
                </li>
                <li>
                  <a href="#" class="social-media"><img class="social-media-icon"
                      src="https://draplovers.com/script/main-content/Themes/main/public/img/footer/iconFacebook.png"
                      alt=""></a>
                </li>
                <li>
                  <a href="#" class="social-media"><img class="social-media-icon"
                      src="https://draplovers.com/script/main-content/Themes/main/public/img/footer/iconFacebook.png"
                      alt=""></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="footer-body">
        <div class="row">
          <div class="col">
            <div class="col-title">
              <h3>Company</h3>
            </div>
            <div class="list">
              <ul>
                <li>
                  <router-link to="/about">About us</router-link>
                </li>
                <li>
                  <router-link to="/about">Blog</router-link>
                </li>
                <li>
                  <router-link to="/about">Become a Partner</router-link>
                </li>
                <li>
                  <router-link to="/about">Become a Driver</router-link>
                </li>
                <li>
                  <router-link to="/about">Careers</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="col-title">
              <h3>Contact</h3>
            </div>
            <div class="list">
              <ul>
                <li>
                  <router-link to="/about">Help & Support</router-link>
                </li>
                <li>
                  <router-link to="/about">Contact Us</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="col-title">
              <h3>Legal</h3>
            </div>
            <div class="list">
              <ul>
                <li>
                  <router-link to="/terms-and-conditions">Terms & Conditions</router-link>
                </li>
                <li>
                  <router-link to="/about">Payment & Credit Policy</router-link>
                </li>
                <li>
                  <router-link to="/about">Privacy Policy</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <div class="list">
              <ul>
                <li>
                  <router-link class="app-store-link" to="/about">
                    <img class="app-store"
                      src="https://draplovers.com/script/main-content/Themes/main/public/img/footer/AppStore.svg"
                      alt="App Store">
                  </router-link>
                </li>
                <li>
                  <img class="app-store"
                    src="https://draplovers.com/script/main-content/Themes/main/public/img/footer/GooglePlay.svg"
                    alt="Google Play">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="footer-end">
        <div class="row">
          <div class="col">
            <div class="copy-right">
              <p>© Copyright 2021 Drapshop.<iconBase icon-name="write">
                </iconBase> All Rights Reserved.</p>
            </div>
          </div>
          <div class="col">
            <div class="primary-slogan">
              <p>WE DELIVER love TO YOUR DOOR </p>
            </div>
          </div>
          <div class="col">
            <div class="secondary-slogan">
              <p>Made with Heart by DRAPSHOP LLC.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </footer>
</template>

<script>
import iconBase from "../../components/Layouts/icons/IconBase.vue";
export default {
    name: "mainFooter",
    components: {
        iconBase
    }
};
</script>
<style scoped lang="scss">
  .main-footer{
    position: relative;
    width: 100%;
    height: auto;
    padding: auto;
    border-top: 6px solid #ffff00;
    background: #000000;
  }
  .main-footer .container{
      max-width: auto;
  }
  .footer-header{
    width: 100%;
    max-width: 100%;
    padding: 2%;
    align-items: center;
  }
  .footer-header .footer-logo img{
    display: flex;
    width: 50%;
    max-width: 100%;
    align-items: left;
  }
  .footer-header .footer-social-media ul {
    align-items: right;
    margin: 0 -20% 0 20%;
    padding: 3% 0 0 0;
  }
  .footer-header .footer-social-media ul li{
    display: inline;
    margin: 4% 0 0 4%;
  }
  .footer-header .footer-social-media .social-media-icon{
    width: 6%;
    height: auto;
    max-width: 100%;
  }
  .footer-body {
    padding: 2%;
    text-align: left;
  }
  .footer-body h3{
    font-family: Libre Franklin;
    font-size: 20px;
    font-weight: 700;
    color: #FFFFFF;
    letter-spacing: 0.3px;
    line-height: 25px;
  }
  .footer-body ul {
    list-style: none;
    margin: 0 0 0 -12%;
    width: auto;
  }
  .footer-body ul li{
    margin: 0 0 5% 0;
  }
  .footer-body ul li a{
    font-family: Libre Franklin;
    font-size: 16px;
    font-weight: normal;
    color: #FFFFFF;
    letter-spacing: 0.3px;
    line-height: 25px;
    text-decoration: none;
  }
  .footer-end{
    padding: 0 0 2% 0;
    text-align: center;
  }
  .footer-end p{
    font-family: Libre Franklin;
    font-size: 14px;
    color: #FFFFFF;
    line-height: 19px;
    letter-spacing: 0.3px;
    word-spacing: 1px;
  }
  .footer-end .primary-slogan p{
    text-transform: uppercase;
  }

  /* Tablets */
  @media only screen and (min-width: 768px) and (max-width: 1024px){
    .footer-header {
      width: 100%;
      max-width: 100%;
      padding: 5% 0 0 0;
      align-items: center;
    }
    .footer-header .footer-logo img {
      display: flex;
      width: 70%;
      max-width: 100%;
      align-items: left;
    }
    .footer-header .footer-social-media ul {
      align-items: right;
      margin: 0 -20% 0 20%;
      padding: 3% 0 0 0;
    }
    .footer-body {
      padding: 5% 0 0 0;
      text-align: left;
    }
    .footer-body h3 {
      font-family: Libre Franklin;
      font-size: 18px;
      font-weight: 700;
      color: #FFFFFF;
      letter-spacing: 0.3px;
      line-height: 25px;
    }
    .footer-body ul {
      list-style: none;
      margin: 0 0 0 -20%;
      width: auto;
    }
    .footer-body ul li a {
      font-family: Libre Franklin;
      font-size: 15px;
      font-weight: normal;
      color: #FFFFFF;
      letter-spacing: 0.3px;
      line-height: 25px;
      text-decoration: none;
    }
    .footer-body .list .app-store{
      width: 100%;
      max-width: 100%;
      margin-bottom: 10%;
    }
    .footer-end {
      padding: 2% 0 2% 0;
      text-align: center;
    }
    .footer-end p {
      font-family: Libre Franklin;
      font-size: 12px;
      color: #FFFFFF;
      line-height: 19px;
      letter-spacing: 0.3px;
      word-spacing: 1px;
    }
  }
</style>