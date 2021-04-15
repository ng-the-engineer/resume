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
  if (event.target == modalCovidClean) {
    modalCovidClean.style.display = "none";
  } else if (event.target == modalTravie) {
    modalTravie.style.display = "none";
  } else if (event.target == modalAutobid) {
    modalAutobid.style.display = "none";
  }
};