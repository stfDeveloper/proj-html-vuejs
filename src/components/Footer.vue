<template>
  <div class="navFooter">
    <div class="upperFooter d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-3 d-flex align-self-center">
            <img
              src="../assets/images/finance_logo_footer-200x131.png"
              alt=""
            />
          </div>
          <div class="col-3">
            <ul>
              <h5 style="font-size: bold">RECENT POSTS</h5>
              <li @click="toggle" >Lorem ipsum dolor sit.</li>
              <p class="dropdown" v-if="active">ciao</p>
              <li @click="toggle">Lorem ipsum dolor sit.</li>
               <p class="dropdown" v-if="active">ciao</p>
              <li @click="toggle">Lorem ipsum dolor sit.</li>
               <p class="dropdown" v-if="active">ciao</p>
            </ul>
          </div>
          <div class="col-3">
            <ul>
               <h5 style="font-size: bold">SERVICES</h5>
              <li @click="toggle">Lorem ipsum dolor sit.</li>
               <p class="dropdown" v-if="active">ciao</p>
              <li @click="toggle">Lorem ipsum dolor sit.</li>
               <p class="dropdown" v-if="active">ciao</p>
              <li @click="toggle">Lorem ipsum dolor sit.</li>
               <p class="dropdown" v-if="active">ciao</p>
            </ul>
          </div>
          <div class="col-3">
            <ul>
               <h5 style="font-size: bold">LATEST</h5>
              <div class="">
                <i class="link-primary fa-brands fa-twitter fa-xl"></i>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="lowerFooter d-flex justify-content-around align-items-center">
      <div class="rights">
        CopyRight 2012/2020 | Avada Theme by StfDeveloper | Powered by VUE
      </div>
      <div class="socials d-flex flex-row">
        <div class="socialContainer mx-2">
          <i class="fa-brands fa-facebook-f fa-xl"></i>
        </div>
        <div class="socialContainer mx-2">
          <i class="fa-brands fa-twitter fa-xl"></i>
        </div>
        <div class="socialContainer mx-2">
          <i class="fa-brands fa-youtube fa-xl"></i>
        </div>
        <div class="socialContainer mx-2">
          <i class="fa-brands fa-instagram fa-xl"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: "Footer",
  data () {
      return {
        active: false
      }
    },
    methods: {
      toggle () {
        this.active = !this.active
      }
    }
};
</script>

<style lang="scss" scoped>
@import "../assets/style/global.scss";

* {
  font-family: "Courier New", Courier, monospace;
}
.upperFooter {
  width: 100%;
  height: 250px;
  background-color: $baltic;
  .col-3 {
    height: 100%;
  }
  img {
    width: 50%;
  }
}
ul {
  line-height: 30px;
  position: relative;
  list-style: none;
  color: $white;
}
li {
  color: $gray;
  font-size: 12px;
}
li::before {
  content: ">";
  position: absolute;
  left: 15px;
  font-size: 15px;
}

.lowerFooter {
  width: 100%;
  height: 100px;
  background-color: $shark;
  color: $gray;
  .socialContainer {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: $viking;
    color: $white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.dropdown{
  position: absolute;
  line-height: 2px;
  background-color: rgba(0, 0, 255, 0.158);
  text-align: center;
  margin-bottom: 5px;
  color: $gray;
  font-size: 10px;
}
</style>
