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
