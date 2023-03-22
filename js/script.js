// ARRAY OGGETTI
const team = [
    {
        nome: "Wayne Barnett",
        ruolo: "founder & CEO",
        immagine: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        immagine: "angela-caroll-chief-editor.jpg"
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office Manager",
        immagine: "walter-gordon-office-manager.jpg"
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        immagine: "angela-lopez-social-media-manager.jpg"
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        immagine: "scott-estrada-developer.jpg"
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        immagine: "barbara-ramos-graphic-designer.jpg"
    }
];
// ELEMENTI HTML
const riga = document.querySelector(".row");
let colonne ="";
for(let i=0;i<team.length;i++){
    // listaMembriTeam.innerHTML += `
    // <li><h4>Membro ${i+1}</h4>
    //     <ul class="informazioni-membro"></ul>
    // </li>`;
    // const informazioniMembro=document.querySelector(`li:nth-child(${i+1}) .informazioni-membro`);
    // for (const key in team[i]) {
    //     informazioniMembro.innerHTML += `<li >${key}:${team[i][key]}</li>`;
    //     console.log(`${key}:${team[i][key]}`);
    // }
    // console.log("--------------------------");
    colonne += `
    <div class="col">
        <div class="card">
            <img src="img/${team[i].immagine}" class="card-img-top" alt="${team[i].immagine}">
            <div class="card-body">
                <h5 class="card-title nome">${team[i].nome}</h5>
                <p class="card-text ruolo">${team[i].ruolo}</p>
            </div>
        </div>
    </div>
    `;
    riga.innerHTML = colonne;
}