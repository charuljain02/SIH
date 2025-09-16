// ============================
// Global Script for Healthcare System
// ============================

document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Healthcare System Loaded");

  highlightActiveNav();

  const patientForm = document.getElementById("patientForm");
  if(patientForm) patientForm.addEventListener("submit", handlePatientForm);

  const qrBtn = document.getElementById("generateQR");
  if(qrBtn) qrBtn.addEventListener("click", generateQRCode);

  const hospitalSearchBtn = document.getElementById("searchHospital");
  if(hospitalSearchBtn) hospitalSearchBtn.addEventListener("click", searchHospital);
});

// ============================
// Highlight Active Navigation Link
// ============================
function highlightActiveNav() {
  const links = document.querySelectorAll("nav a");
  const current = window.location.pathname.split("/").pop();
  links.forEach(link=>{
    if(link.getAttribute("href")===current){
      link.style.fontWeight="bold";
      link.style.textDecoration="underline";
    }
  });
}

// ============================
// Patient Form Submission
// ============================
function handlePatientForm(e){
  e.preventDefault();
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const aadhaar = document.getElementById("aadhaar").value;

  if(!name || !age || !aadhaar){
    alert("Please fill all required fields!");
    return;
  }

  // Display profile if exists
  const profileCard = document.getElementById("profileCard");
  if(profileCard){
    document.getElementById('displayName').innerText=name;
    document.getElementById('displayAadhaar').innerText=aadhaar;
    document.getElementById('displayAge').innerText=age;
    document.getElementById('displayGender').innerText=document.getElementById("gender").value;
    document.getElementById('displayPhone').innerText=document.getElementById("phone").value;
    document.getElementById('displayAddress').innerText=document.getElementById("address").value;
    profileCard.style.display="block";

    const qrContainer = document.getElementById('qrcode');
    if(qrContainer){
      qrContainer.innerHTML="";
      new QRCode(qrContainer,{text:JSON.stringify({name,age,aadhaar}),width:150,height:150});
    }
  }

  alert(`✅ Patient Registered: ${name}, Age: ${age}, Aadhaar: ${aadhaar}`);
  document.getElementById("patientForm").reset();
}

// ============================
// QR Code Generator
// ============================
function generateQRCode(){
  const aadhaar = document.getElementById("aadhaar").value.trim();
  const qrContainer = document.getElementById("qrCode");

  if(aadhaar.length < 8){
    alert("Enter valid Aadhaar Number!");
    return;
  }

  qrContainer.innerHTML="";
  new QRCode(qrContainer,{text:`Patient-Aadhaar-${aadhaar}`,width:200,height:200});
}

// ============================
// Hospital Search
// ============================
function searchHospital(){
  const location = document.getElementById("location").value.trim();
  const resultsDiv = document.getElementById("hospitalResults");

  if(!location){
    alert("Enter a location!");
    return;
  }

  const hospitals=[
    {name:"Kerala General Hospital",address:"Ernakulam",contact:"0484-123456"},
    {name:"Migrant Health Center",address:"Kochi",contact:"0484-654321"},
    {name:"Unity Care Hospital",address:"Thrissur",contact:"0487-111111"}
  ];

  resultsDiv.innerHTML=`<h3>Hospitals in ${location}</h3>`;
  hospitals.forEach(h=>{
    const div=document.createElement("div");
    div.classList.add("hospital-card");
    div.innerHTML=`<strong>${h.name}</strong><br>📍 ${h.address}<br>☎ ${h.contact}<br><br>`;
    resultsDiv.appendChild(div);
  });
}
