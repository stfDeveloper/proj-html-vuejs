<template>
  <div class="d-flex justify-content-between align-items-center" id="header">
    <div class="logo">
      <img src="../assets/style/logo.png" alt="" />
    </div>
    <div id="nav">
      <div @click="onClick()" :class="{ buttonActive: isActive }">HOME</div>
      <div>ABOUT</div>
      <div>SERVICES</div>
      <div @click="toggle">PACKAGES <i class="fa-solid fa-chevron-down"></i></div>
      <div class="dropdown" v-if="active">
        <p class="dropdownItem">
          <ul style="width:95px; height:60px;">
            <li style="list-style:none;">ciao</li>
            <li style="list-style:none;">ciao</li>
            <li style="list-style:none;">ciao</li>
          </ul>
        </p>
      </div>
      <div>INSIGHT</div>
      <div>
        <button class="rounded-pill">CONTACT</button>
      </div>
      <div>+</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isActive: true,
      active: false
    };
  },
  methods: {
    onClick() {
      if (this.isActive) {
        this.isActive = false;
      } else {
        this.isActive = true;
      }
    },
    toggle () {
        this.active = !this.active
      }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style/global.scss";

#header {
  width: 100%;
  height: 80px;
  padding-left: 30px;
  padding-right: 30px;
  .dropdown{
    position: absolute;
    top: 30px;
    right: 435px;
    display: inline-block;

  }
    .dropdownItem{
      position: absolute;
      background-color: $viking;
      border-radius:30px;
    }
      li:hover{
      opacity: 0.4;
    }
  #nav {
    display: flex;
    div {
      height: 80px;
      padding-top: 30px;
      padding: 30px;
      cursor: pointer;
    }
  }
}
.buttonActive {
  background-color: $viking;
}

</style>
