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

//Pop UP confiramtion 
const modalSubmit = document.getElementsByClassName('content_confirmation');
const closeModalSubmit = document.getElementsByClassName("close_submit");
var value;

//list Regex
var mailRegex = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;
var nomRegex = /^[a-zA-Zéèîï][a-zéèêàçîï]+([-'\s][a-zA-Zéèîï][a-zéèêàçîï]+)?/;
var prenomRegex = /^[a-zA-Zéèîï][a-zéèêàçîï]+([-'\s][a-zA-Zéèîï][a-zéèêàçîï]+)?/;
var concoursRegex =/^[0-9][0-9]?$|^999$/;
var naissanceRegex = /^([0-9]{2})|([0-9]{2})|([0-9]{4})$/;



// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close modal event=> Fermer Form class "bground" => POPUP formulaire
modalClose[0].addEventListener ("click", closeModal);


// EVENT CLOSE MODAL SUBMIT => POPUP confirmation d'envoi
closeModalSubmit[0].addEventListener('click', closeSubmit);



// launch modal form affic
function launchModal() {
  modalbg.style.display = "block";
}
//fermer la modale cache
function closeModal() {
  modalbg.style.display = "none";
};
//fermer popUP Confiramtion cache
function closeSubmit() {
  modalSubmit[0].style.display = 'none';
}



//Bouton valider pour envoyer le formulaire
submitBtn.addEventListener("click",validate); 

function validate (e) {

  //Affichage du message d'erreur si le champs Prénom n'est pas vide ou < a 2 caractères : retourne true 
  if (prenom.value.trim() == '' || prenom.value.length < 2 || prenomRegex.test(prenom.value) == false) {
    prenom_erreur.innerHTML = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    check_prenom = false;
  }else{ //validation champs prenom
       prenom_erreur.innerHTML  = "";
    check_prenom = true;
  }
  
  //Affichage du message d'erreur si le champs NOM n'est pas vide ou < a 2 caractères : retourne true 
  if (nom.value.trim() == '' || nom.value.length < 2 || nomRegex.test(nom.value) == false ){
    nom_erreur.innerHTML  = "Veuillez entrer 2 caractères ou plus pour le champ du nom."; 
    check_nom = false;
  }else{
    nom_erreur.innerHTML  = "";
    check_nom = true;
  }

  // Utiliser mailRegex afin de vérifier l'@mail
  if(mailRegex.test(email.value)== false){
    email_erreur.innerHTML  ="Veuillez entrer un email correct !";
    check_mail = false;
  }
  else{
    email_erreur.innerHTML  = "";
    check_mail = true;
  }

  if (date_naiss.value.trim() == '' || date_naiss.value.length < 2){
    date_naiss_erreur.innerHTML = "Vous devez entrer votre date de naissance.";
    check_dnaiss = false;
  }else{ 
    date_naiss_erreur.innerHTML  = "";
    check_dnaiss = true;
  }

  // Pour le nombre de concours, une valeur numérique est saisie || non vide 
  if (nb_concours.value == '' || concoursRegex.test(nb_concours.value) == false){
    concours_erreur.innerHTML  = "Veuillez entrer le nombre de tournois !";
    check_tournois = false;
  }else{
    concours_erreur.innerHTML  = "";
    check_tournois = true;
  }

  // verifier si une localisation est sélectionnée.
  let location = ""
  for (let i = 0; i < locationList.length; i++) {
    if (locationList[i].checked ) {
      location = locationList[i].value;
      location_erreur.innerHTML = "";
      check_location = true;
    } else if (location == ''){
      location_erreur.innerHTML = "Vous devez choisir une option.";
      check_location = false;
    }
  }

     
  
  // vérifier si les conditions sont cochées 
  if(checkbox1.checked){
    condition_erreur.innerHTML  = "";
    check_condition = true;
  }else{
    condition_erreur.innerHTML  ="Vous devez vérifier que vous acceptez les termes et conditions";
    check_condition = false;
  }

    //Bloquer la fermeture de la popUp inscription 
    e.preventDefault();
  
    
  //Vérfifier que les champs sont bien renseignés afin d'envoyer popUp Confirmation 
    if(check_prenom == true && check_nom == true && check_mail== true &&
      check_dnaiss == true && check_location == true && check_tournois == true
       && check_condition == true){
    
      modalbg.style.display = 'none';
      modalSubmit[0].style.display = 'block';
      //Réinitialiser le formulaire 
      document.querySelector('form').reset();
    }
    
    
}