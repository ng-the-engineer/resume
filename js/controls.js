// Job Melco
const modalMelco = document.getElementById("modalMelco");
document.getElementById("jobMelco").onclick = () => {
  modalMelco.style.display = "block";
  document.getElementById("melcoDefault").click();
}
document.getElementById("closeModalMelco").onclick = () => modalMelco.style.display = "none";

// SC
const modalSC = document.getElementById("modalSC");
document.getElementById("jobSC").onclick = () => modalSC.style.display = "block";
document.getElementById("closeModalSC").onclick = () => modalSC.style.display = "none";

// Palo IT
const modalPalo = document.getElementById("modalPalo");
document.getElementById("jobPalo").onclick = () => modalPalo.style.display = "block";
document.getElementById("closeModalPalo").onclick = () => modalPalo.style.display = "none";

// TG
const modalTG = document.getElementById("modalTG");
document.getElementById("jobTG").onclick = () => modalTG.style.display = "block";
document.getElementById("closeModalTG").onclick = () => modalTG.style.display = "none";

// CovidClean
const modalCovidClean = document.getElementById("modalCovidClean");
document.getElementById("keyPrjCovidClean").onclick = () => modalCovidClean.style.display = "block";
document.getElementById("closeModalCovidClean").onclick = () => modalCovidClean.style.display = "none";
  
// Travie
const modalTravie = document.getElementById("modalTravie");
document.getElementById("keyPrjTravie").onclick = () => modalTravie.style.display = "block";
document.getElementById("closeModalTravie").onclick = () => modalTravie.style.display = "none";

// AutoBid
const modalAutobid = document.getElementById("modalAutobid");
document.getElementById("allPrjAutobid").onclick = () => modalAutobid.style.display = "block";
document.getElementById("closeModalAutobid").onclick = () => modalAutobid.style.display = "none";

window.onclick = (event) => {
  switch(event.target) {
    case modalCovidClean:
      modalCovidClean.style.display = "none";
    case modalTravie:
      modalTravie.style.display = "none";
    case modalAutobid:
      modalAutobid.style.display = "none";
    case modalMelco:
      modalMelco.style.display = "none";
    case modalTG:
      modalTG.style.display = "none";
    case modalPalo:
      modalPalo.style.display = "none";
  }
};


