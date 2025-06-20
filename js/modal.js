// Job LRQA
const modalLRQA = document.getElementById("modalLRQA");
document.getElementById("jobLRQA").onclick = () =>
	(modalLRQA.style.display = "block");
// document.getElementById("jobLRQA_hist").onclick = () =>
// 	(modalLRQA.style.display = "block");
document.getElementById("closeModalLRQA").onclick = () =>
	(modalLRQA.style.display = "none");

// Job GL
const modalGL = document.getElementById("modalGL");
document.getElementById("jobGL").onclick = () =>
	(modalGL.style.display = "block");
document.getElementById("jobGL_hist").onclick = () =>
	(modalGL.style.display = "block");
document.getElementById("closeModalGL").onclick = () =>
	(modalGL.style.display = "none");

// Job WB
wbHandler = (modal) => {
	modal.style.display = "block";
	document.getElementById("wbDefault").click();
};
const modalWB = document.getElementById("modalWB");
document.getElementById("jobWB").onclick = () => wbHandler(modalWB);
document.getElementById("jobWB_hist").onclick = () => wbHandler(modalWB);
document.getElementById("closeModalWB").onclick = () =>
	(modalWB.style.display = "none");

// Job Melco
melcoHandler = (modal) => {
	modalMelco.style.display = "block";
	document.getElementById("melcoDefault").click();
};
const modalMelco = document.getElementById("modalMelco");
document.getElementById("jobMelco").onclick = () => melcoHandler(modalMelco);
document.getElementById("jobMelco_hist").onclick = () =>
	melcoHandler(modalMelco);
document.getElementById("closeModalMelco").onclick = () =>
	(modalMelco.style.display = "none");

// SC
const modalSC = document.getElementById("modalSC");
document.getElementById("jobSC").onclick = () =>
	(modalSC.style.display = "block");
document.getElementById("jobSC_hist").onclick = () =>
	(modalSC.style.display = "block");
document.getElementById("closeModalSC").onclick = () =>
	(modalSC.style.display = "none");

// Palo IT
const modalPalo = document.getElementById("modalPalo");
document.getElementById("jobPalo").onclick = () =>
	(modalPalo.style.display = "block");
document.getElementById("jobPalo_hist").onclick = () =>
	(modalPalo.style.display = "block");
document.getElementById("closeModalPalo").onclick = () =>
	(modalPalo.style.display = "none");

// TG
const modalTG = document.getElementById("modalTG");
document.getElementById("jobTG").onclick = () =>
	(modalTG.style.display = "block");
document.getElementById("jobTG_hist").onclick = () =>
	(modalTG.style.display = "block");
document.getElementById("closeModalTG").onclick = () =>
	(modalTG.style.display = "none");

// CovidClean
const modalCovidClean = document.getElementById("modalCovidClean");
document.getElementById("keyPrjCovidClean").onclick = () =>
	(modalCovidClean.style.display = "block");
document.getElementById("covidClean_hist").onclick = () =>
	(modalCovidClean.style.display = "block");
document.getElementById("closeModalCovidClean").onclick = () =>
	(modalCovidClean.style.display = "none");

// Travie
const modalTravie = document.getElementById("modalTravie");
document.getElementById("keyPrjTravie").onclick = () =>
	(modalTravie.style.display = "block");
document.getElementById("travie_hist").onclick = () =>
	(modalTravie.style.display = "block");
document.getElementById("closeModalTravie").onclick = () =>
	(modalTravie.style.display = "none");

// AutoBid
const modalAutobid = document.getElementById("modalAutobid");
document.getElementById("allPrjAutobid").onclick = () =>
	(modalAutobid.style.display = "block");
document.getElementById("closeModalAutobid").onclick = () =>
	(modalAutobid.style.display = "none");

// Client Sainsbury
const modalSainsbury = document.getElementById("modalSainsbury");
document.getElementById("jobSainsbury").onclick = () =>
	(modalSainsbury.style.display = "block");
document.getElementById("jobSainsbury_hist").onclick = () =>
	(modalSainsbury.style.display = "block");
document.getElementById("closeModalSainsbury").onclick = () =>
	(modalSainsbury.style.display = "none");

window.onclick = (event) => {
	switch (event.target) {
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
		case modalWB:
			modalWB.style.display = "none";
		case modalSC:
			modalSC.style.display = "none";
		case modalGL:
			modalGL.style.display = "none";
		case modalLRQA:
			modalLRQA.style.display = "none";
		case modalSainsbury:
			modalSainsbury.style.display = "none";
	}
};
