function genera() {
    var versi1=[
        "Il cielo brilla",
        "le stelle luminose",
        "la notte serena",
        "i venti leggeri",
        "le onde calme",
        "le luci lontane",
        "i sogni dolci",
        "i cuori aperti",
        "le mani unite",
        "gli occhi chiusi",
        "i respiri profondi",
        "i silenzi parlano",
        "le attese infinite",
        "gli amori veri",
        "le speranze nuove."
    ];

    var versi2=[
        "La pioggia lieve",
        "la terra bagnata",
        "il profumo fresco",
        "le strade vuote",
        "i passi veloci",
        "gli ombrelli aperti",
        "le voci lontane",
        "le finestre chiuse",
        "il calore interno",
        "il tè caldo",
        "i libri aperti",
        "le pagine girano",
        "le storie vive",
        "i sogni accesi",
        "le anime tranquille."
    ];

    var versi3=[
        "L'alba rosa",
        "la giornata nuova",
        "il sole caldo",
        "i passi lenti",
        "i fiori sbocciano",
        "i colori vivi",
        "le risate forti",
        "i giochi infiniti",
        "gli amici veri",
        "gli abbracci stretti",
        "gli sguardi complici",
        "i ricordi belli",
        "il tempo fermo",
        "i cuori felici",
        "le anime serene"
    ];

    var verso1=versi1[Math.floor(Math.random() * versi1.length)];
    var verso2=versi2[Math.floor(Math.random() * versi2.length)];
    var verso3=versi3[Math.floor(Math.random() * versi3.length)];

    document.getElementById('verso1').innerHTML=verso1;
    document.getElementById('verso2').innerHTML=verso2;
    document.getElementById('verso3').innerHTML=verso3;
}

    var libreria = document.getElementsByClassName('libreria')[0];
    var spazio = document.getElementsByClassName('spazio')[0];
    var stella = document.getElementsByClassName('stella')[0];

function tema1() {
    libreria.style.backgroundColor = "orangered";
    document.body.style.backgroundImage = 'url("immagini/libreria.jpg")';
    spazio.style.backgroundColor = "";
    stella.style.backgroundColor = "";
}

function tema2() {
    spazio.style.backgroundColor = "orangered";
    document.body.style.backgroundImage = 'url("immagini/notte.jpg")';
    stella.style.backgroundColor = "";
    libreria.style.backgroundColor = "";
}

function tema3() {
    stella.style.backgroundColor = "orangered";
    document.body.style.backgroundImage = 'url("immagini/hunter.png")';
    spazio.style.backgroundColor = "";
    libreria.style.backgroundColor = "";
}