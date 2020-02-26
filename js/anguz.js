//___________Team Tabs___________
function viewTeam(evt, teamName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(teamName).style.display = "block";
  evt.currentTarget.className += " active";
}

//__________Dark Mode Control________

// Toggle the theme state
//let darkTheme = false;
//function toggleDark() {
//  var element = document.body;
//  darkTheme = !darkTheme;
//   localStorage.getItem('theme') !== null ? localStorage.removeItem('theme') : null;
//   localStorage.setItem('theme', darkTheme);
//if(localStorage.getItem('theme') == "true") {
//  element.classList.add("dark-mode");
//} else {
// element.classList.remove("dark-mode");
//}
//}
//document.querySelector(".switch").addEventListener("click", toggleDark);

let div = document.querySelector("#d-mode");
let darkTheme = false;

div.addEventListener("click", e => {
  var element = document.body;
  darkTheme = !darkTheme;
   localStorage.getItem('theme') !== null ? localStorage.removeItem('theme') : null;
   localStorage.setItem('theme', darkTheme);
if(localStorage.getItem('theme') == "true") {
  element.classList.add("dark-mode");
} else {
 element.classList.remove("dark-mode");
}
});

// Add an onload listener
window.onload = function() {
  var element = document.body;
   if(localStorage.getItem('theme') == "true") {
   element.classList.add("dark-mode");
 } else {
  element.classList.remove("dark-mode");
 }
}