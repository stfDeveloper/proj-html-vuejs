<template>
  <div class="d-flex justify-content-between flex-row align-items-center" id="header">
    <div class="logo">
      <img src="../assets/style/logo.png" alt="" />
    </div>
    <div id="nav">
      <div>HOME</div>
      <div>ABOUT</div>
      <div>SERVICES</div>
      <div>PACKAGES</div>
      <div>INSIGHT</div>
      <div>
        <button>CONTACT</button>
      </div>
      <div>+</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
#header{
    width: 100%;
    height: 60px;
    #nav{
        display: flex;
        flex-direction: row;
        align-items: center;
        div{
            margin-left: 50px;
        }
    }
}


</style>
