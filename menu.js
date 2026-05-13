const menuItems = [
  {
    naam: "Datum",
    link: "index.html"
  },
  {
    naam: "Deelnemers",
    link: "deelnemers.html"
  },
  {
    naam: "Poulefase",
    link: "uitslagen.html"
  },
  {
    naam: "Poulestand",
    link: "poulestand.html"
  },
  {
    naam: "Knock-out A",
    link: "knockout.html"
  },
  {
    naam: "Knock-out B",
    link: "knockoutB.html"
  }
];

const menu = document.getElementById("menu");

if(menu){

  menu.className = "menu";

  let html = "";

  menuItems.forEach(function(item){

    html += `
      <a href="${item.link}">
        ${item.naam}
      </a>
    `;

  });

  menu.innerHTML = html;

}
