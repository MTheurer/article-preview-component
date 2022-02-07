function showFunction() {
  if (matchMedia('only screen and (max-width: 700px)').matches) {
    // Mobile toggle
    var bar = document.getElementById("account-bar");
    if (bar.classList.contains('account-info-clicked')) {
      bar.classList.remove("account-info-clicked");
    }else {
      bar.classList.add("account-info-clicked");
    }
    return
  }
  
  // Desktop toggle
  var x = document.getElementById("socialPopup");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}