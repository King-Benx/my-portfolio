const body = document.body;
const brand = document.getElementById("brand");
const humberger = document.getElementById("humberger");
const humbergerClose = document.getElementById("humberger-close");
const navigation = document.querySelector("nav");
const navToggle = document.getElementById("nav-toggle");

function handleSidebar(flag){
  if(flag===true){
     navigation.style = "transform:scale(1,1)";
     brand.style = "visibility:hidden;";
     humberger.style = "display:none";
     humbergerClose.style = "display:block";
  }else{
    navigation.style = "transform:scale(1,0)";
    brand.style = "visibility:visible;";
    humberger.style = "display:block";
    humbergerClose.style = "display:none";
  }
}

navToggle.addEventListener("change", (e) => {
  if (e.target.checked === true) {
    handleSidebar(true);
  } else {
    handleSidebar(false);
  }
});




