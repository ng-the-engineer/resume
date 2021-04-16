// Job Melco
const modalMelco = document.getElementById("modalMelco");
document.getElementById("jobMelco").onclick = () => {
  modalMelco.style.display = "block";
  document.getElementById("melcoDefault").click();
}

document.getElementById("closeModalMelco").onclick = () => modalMelco.style.display = "none";

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
    console.log('Covid Clean')
    modalCovidClean.style.display = "none";
  } else if (event.target == modalTravie) {
    modalTravie.style.display = "none";
  } else if (event.target == modalAutobid) {
    modalAutobid.style.display = "none";
  } else if (event.target == modalMelco) {
    modalMelco.style.display = "none";    
  }
};
