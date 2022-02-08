<template>
  <div class="navFooter">
    <div class="upperFooter d-flex align-items-center">
      <div class="container">
        <div class="row">
          <div class="col-3 d-flex align-self-center">
            <img src="../assets/images/finance_logo_footer-200x131.png" alt="">
          </div>
          <div class="col-3 d-flex align-self-center">
            <ul> <h5 style="font-size:bold;">RECENT POSTS</h5> 
              <li>
                Lorem ipsum dolor sit.
              </li>
              <li>
                Lorem ipsum dolor sit.
              </li>
              <li>
                Lorem ipsum dolor sit.
              </li>

            </ul>
          </div>
          <div class="col-3 d-flex align-self-center">
            <ul>SERVICES
              <li>
                Lorem ipsum dolor sit.
              </li><li>
                Lorem ipsum dolor sit.
              </li>
              <li>
                Lorem ipsum dolor sit.
              </li>
            </ul>
          </div>
          <div class="col-3 d-flex align-self-center">
            <ul>
              LATEST
              <div>piccionDmammt</div>
            </ul>
          </div>
        </div>
      </div>

    </div>

      <div class="lowerFooter d-flex">
      </div>  
  </div>
</template>

<script>
export default {
    name :"Footer"

}
</script>

<style lang="scss" scoped>
@import "../assets/style/global.scss";

*{
  font-family: 'Courier New', Courier, monospace;
}


  .upperFooter{
    width: 100%;
    height:250px;
    background-color: $baltic; 
    .col-3{
      height: 100%;
    }
    img{
      width: 50%;
    }
  }
  ul {
    line-height: 30px;
  position: relative;
  list-style: none;
  color: $white;
  }
  li{
  color: $gray;
  font-size: 12px;

  }
  li::before {
    content: '>';
    position: absolute;
    left: 15px;

  }

  .lowerFooter{
    width: 100%;
    height:100px;
    background-color: $shark; 
  
  
  }



</style>