function showMessage() {
  alert("Hello, welcome to my page!");
}

let photo = document.getElementById("photo");

photo.addEventListener("mouseover", function() {
  document.body.style.backgroundColor = "#e0ffe0";
});

photo.addEventListener("mouseout", function() {
  document.body.style.backgroundColor = "#f2f6ff";
});
