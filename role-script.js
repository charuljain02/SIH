// Role Selection and Login Handling

function setRole(role){
  if(role==='doctor'){
    window.location.href='doctor-login.html';
  } else if(role==='patient'){
    window.location.href='patient-login.html';
  } else {
    alert('Company role coming soon!');
  }
}

// Login Function
function login(role){
  let username,password;

  if(role==='doctor'){
    username=document.getElementById("doctorUsername").value.trim();
    password=document.getElementById("doctorPassword").value.trim();
  } else if(role==='patient'){
    username=document.getElementById("patientUsername").value.trim();
    password=document.getElementById("patientPassword").value.trim();
  }

  if(!username || !password){
    alert("Please fill both username and password!");
    return;
  }

  // Dummy Authentication
  if(role==='doctor'){
    if(username==="doctor" && password==="1234"){
      alert("✅ Doctor Login Successful");
      window.location.href="dashboard.html";
    } else {
      alert("❌ Invalid Credentials");
    }
  }

  if(role==='patient'){
    if(username==="patient" && password==="1234"){
      alert("✅ Patient Login Successful");
      window.location.href="patient-dashboard.html";
    } else {
      alert("❌ Invalid Credentials");
    }
  }
}
