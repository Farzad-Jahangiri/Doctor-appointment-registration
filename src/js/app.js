const Modal = document.getElementById("Modal");
const ModalSave = document.getElementById("ModelSave");

const reserv = function (event){
  Modal.classList.remove("hidden");
  console.log(1);
  const parent = event.parentNode;
  const nameDoctor = parent.querySelector('p[data-name="name"]').innerText;
  const familyDoctor = parent.querySelector('p[data-family="family"]').innerText;
  const ExpertiseDoctor = parent.querySelector('p[data-Expertise="Expertise"]').innerText;
  const src_img = parent.querySelector('img').src;
  Modal.querySelector('p[data-name="name"]').innerHTML=nameDoctor;
  Modal.querySelector('p[data-family="family"]').innerHTML=familyDoctor;
  Modal.querySelector('p[data-Expertise="Expertise"]').innerHTML=ExpertiseDoctor;
  Modal.querySelector('img').src=src_img;
}

const saveReserv = function(event){
  const parent = event.parentNode.parentNode.parentNode;
  const nameDoctor = parent.querySelector('p[data-name="name"]').innerText;
  const familyDoctor = parent.querySelector('p[data-family="family"]').innerText;
  const ExpertiseDoctor = parent.querySelector('p[data-Expertise="Expertise"]').innerText;
  const namePatient = parent.querySelector('input[data-name="name"]');
  const familyPatient = parent.querySelector('input[data-family="family"]');
  const phoneNumberPatient = parent.querySelector('input[data-phoneNumber="phoneNumber"]');
  const day = event.innerText;
  if (namePatient.value=="" || namePatient.value.length<3){
    namePatient.style.border = "2px solid red";
    return
  }
  if (familyPatient.value=="" || familyPatient.value.length<3){
    namePatient.style.border = "0px";
    familyPatient.style.border = "2px solid red";
    return
  }
  if (phoneNumberPatient.value=="" || phoneNumberPatient.value.length<10){
    familyPatient.style.border = "0px";
    phoneNumberPatient.style.border = "2px solid red";
    return
  }
  Modal.classList.add("hidden");
  ModalSave.classList.remove("hidden");
  setTimeout(()=>{
    ModalSave.classList.add("hidden");
  },1500)
}

const cancel = function(event){
  Modal.classList.add("hidden");
}