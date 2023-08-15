function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
//const => fermer la fenetre 
const modalClose = document.getElementsByClassName("close");
const form = document.getElementById("form");
// Liaison des labels
const prenom = document.getElementById("first");
const prenom_erreur = document.getElementById("first_error");
const nom =  document.getElementById("last");
const nom_erreur =document.getElementById("last_error");
const email =  document.getElementById("email");
const email_erreur = document.getElementById("email_error");
const date_naiss = document.getElementById("birthdate");
const date_naiss_erreur = document.getElementById("date_naiss_error");
const nb_concours = document.getElementById("quantity");
const concours_erreur = document.getElementById("quantity_error");
const locationList = document.querySelectorAll('input[name="location"]');
const location_erreur = document.getElementById("location_error");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const condition_erreur = document.getElementById("condition_error");

const submitBtn = document.querySelector(".btn-submit");





// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event=> Fermer Form class "bground"
modalClose[0].addEventListener ("click", closeModal);

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


//fermer la modale
function closeModal() {
  modalbg.style.display = "none";
};

//Bouton valider pour envoyer le formulaire
submitBtn.addEventListener("click",validate); 

function validate () {

  //Affichage du message d'erreur si le champs Prénom n'est pas vide ou < a 2 caractères : retourne true 
  if (prenom.value.trim() == '' || prenom.value.length < 2){
    prenom_erreur.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  }else{ //validation champs prenom
    prenom_erreur.innerHTML  = "";
  }
  
  //Affichage du message d'erreur si le champs NOM n'est pas vide ou < a 2 caractères : retourne true 
  if (nom.value.trim() == '' || nom.value.length <2){
    nom_erreur.innerHTML  = "Veuillez entrer 2 caractères ou plus pour le champ du nom."; 
  }else{
    nom_erreur.innerHTML  = "";
  }
  // Utiliser mailRegex afin de vérifier l'@mail
  if(mailRegex.test(email.value)== false){
    email_erreur.innerHTML  ="Veuillez entrer un email correct !";
  }
  else{
    email_erreur.innerHTML  = "";
  }
  if (date_naiss.value.trim() == '' || date_naiss.value.length < 2){
    date_naiss_erreur.innerHTML = "Vous devez entrer votre date de naissance.";
  }else{ //validation champs prenom
    date_naiss_erreur.innerHTML  = "";
  }
  // Pour le nombre de concours, une valeur numérique est saisie || non vide 
  if (nb_concours.value == '' || concoursRegex.test(nb_concours.value) == false){
    concours_erreur.innerHTML  = "Veuillez entrer le nombre de tournois !";
  }else{
    concours_erreur.innerHTML  = "";
  }

 

  // verifier si une localisation est sélectionnée.
  let location = ""
  for (let i = 0; i < locationList.length; i++) {
    if (locationList[i].checked) {
      location = locationList[i].value;
      return true;
    } else {
      location_erreur.innerHTML = "Vous devez choisir une option.";
    }
  }

  // vérifier si les conditions sont cochées 
  if(checkbox1.checked){
    condition_erreur.innerHTML  = "";
  }
  else{
    condition_erreur.innerHTML  ="Vous devez vérifier que vous acceptez les termes et conditions";
  }

 
  form.addEventListener('submit', function (e) {
    e.preventDefault();
  })
  
}


