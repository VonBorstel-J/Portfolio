//Sticky Nav
$(document).ready(function () {
    /* hamburger icon switch - use bootstrap event */
    $(".splash-site-header .navbar").on("show.bs.collapse", function () {
      $(".navbar-toggler-icon").removeClass("collapse-svg");
      $(".navbar-toggler-icon").addClass("expanded-svg");
    });
  
    $(".splash-site-header .navbar").on("hide.bs.collapse", function () {
      $(".navbar-toggler-icon").removeClass("expanded-svg");
      $(".navbar-toggler-icon").addClass("collapse-svg");
    });
  
    $(".splash-site-header .dropdown").on("show.bs.dropdown", function () {
      $(".splash-site-header .nav-location > div > a")
        .css({ "background-color": "white" })
        .removeClass("text-white")
        .addClass("text-black");
    });
  
    $(".splash-site-header .dropdown").on("hide.bs.dropdown", function () {
      $(".splash-site-header .nav-location > div > a")
        .css({ "background-color": "inherit" })
        .removeClass("text-black")
        .addClass("text-white");
    });
  
    /* home redirection on logo click */
    $(".splash-site-header .nav-logo").click(function () {
      window.open("/index.html", "_self");
    });
  });
  
  /* Vue Component */
  new Vue({
    el: "#vue-app",
    data: {
      emailInput: "",
      passwordInput: "",
      isButtonDisabled: true,
      disableStyle: {
        backgroundColor: function (disbaled) {
          return `rgba(3, 177, 244, ${disbaled ? "0.3" : "1"})`;
        },
        color: function (disbaled) {
          return `rgba(255, 255, 255, ${disbaled ? "0.9" : "1"})`;
        },
      },
    },
    methods: {
      handleButtonDisable: function (event) {
        this.isButtonDisabled = !(this.emailInput && this.passwordInput);
        var signButton = document.getElementById("sign-in");
        signButton.style.backgroundColor = this.disableStyle.backgroundColor(
          this.isButtonDisabled
        );
        signButton.style.color = this.disableStyle.color(this.isButtonDisabled);
      },
    },
    components: {
      "splash-image": {
        props: ["path", "name", "suffix"],
        template: "<img :src='path + name + suffix' :alt='name' :class='name' />",
      },
    },
  });
  
  //------------ Awards Section --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  const awardsEl = document.getElementById("awards");
  const images = [
    "colorado-parenting-family-fav2021.png",
    "bay-area-parent-gold2020.png",
    "mla-swim-lessons-winner-2020-250x250.png",
    "colorado-parenting-family-fav2020.png",
    "website-parenting-oc-2019.jpeg",
    "colorado-parenting-family-fav2019.jpeg",
    "bay-area-parent-2019.jpeg",
    "best-of-la-kids-winner.jpeg",
    "best-of-the-best-2018.jpeg",
  ];
  const alts = [
    "Colorado Parenting Family Fav2021",
    "Bay Area Parent Gold 2020",
    "Mla Swim Lessons Winner 2020",
    "Colorado Parenting Family Fav 2020",
    "Website Parenting Oc 2019",
    "Colorado Parenting Family Fav 2019",
    "Bay Area Parent 2019",
    "Best of la kids winner",
    "Best of the best 2018",
  ];
  let completedImages = [];
  completedImages = images.map((image, index) => {
    return `<div class="award col-xs-12 col-md-4 p-0">
            <img src="images/${image}"  alt="${alts[index]}" class="maxw-100"/>
          </div>
          `;
  });
  awardsEl.innerHTML = completedImages.join("");
  