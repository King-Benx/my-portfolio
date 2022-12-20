const body = document.body;

const navToggle = document.getElementById("nav-toggle");

const brand = document.getElementById("brand");

const humberger = document.getElementById("humberger");

const humbergerClose = document.getElementById("humberger-close");

const navigation = document.querySelector("nav");

navToggle.addEventListener("change", (e) => {
  if (e.target.checked === true) {
    navigation.style = "transform:scale(1,1)";
    brand.style = "visibility:hidden;";
    humberger.style = "display:none";
    humbergerClose.style = "display:block";
  } else {
    navigation.style = "transform:scale(1,0)";
    brand.style = "visibility:visible;";
    humberger.style = "display:block";
    humbergerClose.style = "display:none";
  }
});


