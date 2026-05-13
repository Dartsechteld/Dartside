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
    naam: "poulefase",
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

  const huidigePagina =
    window.location.pathname.split("/").pop() || "index.html";

  let html = "";

  menuItems.forEach(function(item){

    const actief =
      huidigePagina === item.link ? "active" : "";

    html += `
      <a href="${item.link}" class="${actief}">
        ${item.naam}
      </a>
    `;

  });

  menu.innerHTML = html;

}
