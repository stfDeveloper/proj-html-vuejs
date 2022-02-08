<template>
<div>
<!-- jumbo -->
  <div id="jumbo">
      <div class="jumboText">
          Right People. Right Investments.
      </div>
  </div>
    <!-- sponsor -->
  <div id="sponsorSection" class="d-flex flex-row justify-content-between m4">
      <div><img src="../assets/images/client-logo-7-200x87.png" alt=""></div>
      <div><img src="../assets/images/client-logo-4-200x87.png" alt=""></div>
      <div><img src="../assets/images/client-logo-9-200x87.png" alt=""></div>
      <div><img src="../assets/images/client-logo-5-200x87.png" alt=""></div>
      <div><img src="../assets/images/client-logo-6-200x87.png" alt=""></div>
      <div><img src="../assets/images/client-logo-7-200x87.png" alt=""></div>
  </div>
<!-- finance -->
  <div id="financeGraph" class="container justify-content-center">
      <div class="row">
            <div class="col-6 align-self-center mx4" id="infoGraph">
                <h3>
                Cloud Based Finance
                </h3>
                <span>
                    <hr>
                </span>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla rerum atque obcaecati unde molestiae possimus eius magnam hic sunt consequuntur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi omnis laboriosam dolor!</p>
                <button>Learn More!</button>
            </div>
            <div class="col-6" id="graph">
                <img src="../assets/images/graph.jpg" alt="">
            </div>
      </div> 
  </div>
<!-- services -->
    <div id="services" class="pt-5">
        <div class="container d-flex flex-column">
            <div class="row">
                <h3 class="col-12 text-center">
                    Speciality Services
                </h3>
            </div>

            <div class="row justify-content-center">
                <hr class="col-1 ">
            </div>
             <div class="row justify-content-center">
                <p class="col-6 text-center"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio mollitia tenetur dolorem eos placeat accusamus.<p/>
            </div>
        </div>
        <div class="serviceCards d-flex justify-content-center ">
            <div class="serviceCard d-flex flex-column">
                <div class="serviceImage1">
                </div>
                <div class="">
                    <h4>
                        Small Business Loans
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusamus eius provident, molestiae cupiditate harum ut.
                    </p>
                </div>
                <button class="mt-auto p-1">Learn More</button>
            </div>

            <div class="serviceCard d-flex flex-column"> 
                <div class="serviceImage2">
                </div>
                <div class="mx-5">
                    <h4>
                        Credit Rating Advice
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusamus eius provident, molestiae cupiditate harum ut.
                    </p>
                </div>
                <button class="mt-auto p-1">Learn More</button>
            </div>

            <div class="serviceCard d-flex flex-column">
                 <div class="serviceImage3">
                </div>
                <div class="mx-5">
                    <h4>
                        Fast Crowd Funding
                    </h4>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusamus eius provident, molestiae cupiditate harum ut.
                    </p>
                </div>
                <button class="mt-auto p-1">Learn More</button>
            </div>
        </div>
        
    </div>
</div>
</template>

<script>
export default {
    name:"Main"

}
</script>

<style lang="scss" scoped>
@import "../assets/style/global.scss";

#jumbo{
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 700px;
    background:url(../assets/images/home_finance_slider_bg.jpg);
    background-size: cover;
    background-attachment: fixed;
    .jumboText{
        align-self: center;
        color: $white;
        font-size: 40px;
        font-family:monospace;
        text-align: center;
    }
}
    #sponsorSection{
        background-color: $haze;
        width: 100vw;
        padding:10px;
    }
    #financeGraph{
        background-color: $white;
        width: 100%;
        height: 500px;
        margin-top: 50px;
        font-size: 15px;

    }
    hr{
        width: 50px;
    }
    #infoGraph{
        width: 50%;
    }
     #graph{
        width: 50%;
        img{
            width: 100%;
        }
    }
    #services{
        background-color: $haze;
        width: 100%;
        height:600px;
        font-size: 15px;
    }
    .serviceCard{
        background-color: $white;
        margin: 10px;
        width: 350px;
        height: 350px;
        text-align: center;
        p{
        line-height: 30px;
        }
        button{
            width: 100%;
        }
    }
    .serviceImage1:before{
        content: "\1F310";
        font-size: 80px; 

    }
    .serviceImage2:before{
        content: "\1F48E";
        font-size: 80px;

    }
    .serviceImage3:before{
        content: "\1F4C8";
        font-size: 80px;

    }
</style>