document.getElementById("info").classList.add("weg");
window.addEventListener("load", (event) => {
  setTimeout(function () {
    document.getElementById("info").classList.add("toon");
  }, 1500);
});

var prevnext = "act1";
function changedate(datum) {
  setTimeout(() => {
    document.getElementById("mijntext").classList.remove("clickedding");
    document.getElementById("imgdate").classList.remove("clickeddingimg");
  }, 2000);
  document.getElementById(prevnext).classList.remove("actived");
  document.getElementById("mijntext").classList.add("clickedding");
  document.getElementById("imgdate").classList.add("clickeddingimg");

  if (datum != "actup" || datum != "actdown") {
    document.getElementById(datum).classList.add("actived");
  }

  setTimeout(() => {
    var titleuitleg = document.getElementById("titleuitleg");
    var uitleg = document.getElementById("uitleg");
    var thedate = document.getElementById("thedate");
    var imgda = document.getElementById("imgdate");

    switch (datum) {
      case "act1":
        console.log("trest");
        titleuitleg.innerHTML = "Start Highschool";
        uitleg.innerHTML =
          "  In 2015 I started highschool at ST.Bernardus in Oudenaarde. I studied modern in my first 2 years. In 2017 I tried to study science for 2 years but I didn't like the education, so I switched schools to Atheneum Oudenaarde where I started studing Informatics in 2019.";
        thedate.innerHTML = "2015";
        imgda.src = "images/2015.png";
        break;
      case "act2":
        titleuitleg.innerHTML = "Start Graphic Design";
        uitleg.innerHTML =
          "In my first year of informatics 2 friends of me asked if I wanted to do Graphic Design as a hobby with them. We did this for 2 years and I learned a lot about designing plus had great time there.";
        thedate.innerHTML = "2019";
        imgda.src = "images/2019.png";
        break;
      case "act3":
        titleuitleg.innerHTML = "Graduated Highschool";
        uitleg.innerHTML =
          "In 2021 I gruadated in informatics at Atheneum Oudenaarde and had an extra participation certificate from VLAJO for economics for building a small company where we had to find stakeholder and tried to dubbel there stock with our company.";
        thedate.innerHTML = "2021";
        imgda.src = "images/2021.png";
        break;
      case "act4":
        titleuitleg.innerHTML = "Start Collage HOGENT";
        uitleg.innerHTML =
          "After my 2021 summer I could start at HOGENT where I am currently studing applied Informatics. I learn about JAVA, JS, HTML, CSS but also a lot about Networks and operation systems. We see how it is all connected to eachother.";
        thedate.innerHTML = "2022";
        imgda.src = "images/2022.png";
        break;
    }
  }, 2000);

  prevnext = datum;
}

const MAX_CHECK = 4;
const MIN_CHECK = 0;
let counterwork = 1;
function verander(soort) {
  soort === "next" ? counterwork++ : counterwork--;

  if (counterwork > MIN_CHECK && counterwork < MAX_CHECK) {
    let tituitleg1 = document.getElementById("uitlegtit1");
    let tituitleg2 = document.getElementById("uitlegtit2");
    let uitleg1 = document.getElementById("uitleg1");
    let uitleg2 = document.getElementById("uitleg2");
    setTimeout(() => {
      document.getElementById("pic1").classList.remove("clickeddingimg");
      document.getElementById("pic2").classList.remove("clickeddingimg");
    }, 2000);
    document.getElementById("pic1").classList.add("clickeddingimg");
    document.getElementById("pic2").classList.add("clickeddingimg");

    setTimeout(() => {
      document.getElementById("pic1").src =
        "images/" + counterwork + "." + 1 + ".png";
      document.getElementById("pic2").src =
        "images/" + counterwork + "." + 2 + ".png";

      document.getElementById("page").innerHTML = counterwork + "/3";
      switch (counterwork) {
        case 1:
          tituitleg1.innerHTML = "Scouts Website";
          tituitleg2.innerHTML = "Convertor";
          uitleg1.innerHTML = "Portofolio website made for my scouts";
          uitleg2.innerHTML = "Converting website BIN, HEX, DEC, OCT in JS";
          break;
        case 2:
          tituitleg1.innerHTML = "Drunk & Dunk";
          tituitleg2.innerHTML = "My Wallet";
          uitleg1.innerHTML = "A drinking game made with nodejs";
          uitleg2.innerHTML =
            "A wallet to mange my money linked with a database";
          break;
        case 3:
          tituitleg1.innerHTML = "Week Meal";
          tituitleg2.innerHTML = "BOCK'CAR";
          uitleg1.innerHTML =
            "Generates each week 7 meals with there ingredients";
          uitleg2.innerHTML =
            "Sends mails + add to calender when a car of my parents are in use";
          break;

        default:
          break;
      }
    }, 2000);
  } else {
    soort === "next" ? counterwork-- : counterwork++;
  }
}

function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}
