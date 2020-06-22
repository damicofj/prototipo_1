// document.querySelector(".btn-buscar-navbar").classList.toggle("hide");
// esto era para esconder un boton o algo cuando se realiza una acción determinada

// JavaScript de botón de navbar

$(document).ready(function () {
  $(".first-button").on("click", function () {
    $(".animated-icon1").toggleClass("open");
  });
  $(".second-button").on("click", function () {
    $(".animated-icon2").toggleClass("open");
  });
  $(".third-button").on("click", function () {
    $(".animated-icon3").toggleClass("open");
  });
});

// fin JavaScript de botón de navbar

// inicio JS autocomplete form

let states = [
  "Alabama",
  "Alaska",
  "Amiami"
  ];
  
  $('#autocomplete_pro').mdbAutocomplete({
  data: states,
  dataColor: 'green',
  inputFocus: '2px solid green',
  inputBlur: '1px solid #ced4da',
  inputFocusShadow: '0 1px 0 0 #4285f4',
  inputBlurShadow: ''
  });