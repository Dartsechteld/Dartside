fetch("menu.html")
  .then(r => r.text())
  .then(data => {
    document.getElementById("menu").innerHTML = data;

    document.querySelectorAll(".menu a").forEach(link => {
      if(link.href === window.location.href){
        link.classList.add("active");
      }
    });
  });
