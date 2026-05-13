const menuItems = [
  {
    naam: "Datum",
    link: "affiche.html"
  },
  {
    naam: "Deelnemers",
    link: "deelnemers.html"
  },
  {
    naam: "Poulefase",
    link: "index.html"
  },
  {
    naam: "Poulestand",
    link: "uitslagpoule.html"
  },
  {
    naam: "Knock-out A",
    link: "knockout.html"
  },
  {
    naam: "Knock-out B",
    link: "knockoutb.html"
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
