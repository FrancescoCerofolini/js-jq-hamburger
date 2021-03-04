
//  VADO A SELEZIONARE IL MIO MENU HAMBUGER NEL MIO HTML COL $ E GLI AGGIUNGO UNA FUNZIONE CLICK CHE MOSTRA IL MIO
//  HAMBURGER MENU CON UNA ANIMAZIONE fadeIn E UNA STESSA IDENTIZA MA SULLA X PER IL fadeOut 
$("i.fas.fa-bars").click(function() {
  // $(".hamburger-menu").fadeIn(1000); INIZIALMENTE HO CRETO UNA ANIMAZIONE DI DURATA OMOGENEA MA PER UN MIGLIOR 
  // SENSO ESTETCO HO PREFERITO VEL;OCIZZARE L'ANIMAZIONE DI fadeOut PER RENDERLA PIÙ SIMILE A UN VERSO MENÙ A COMPARSA
  $(".hamburger-menu").fadeIn(800);
});

$("i.fas.fa-times").click(function() {
  // $(".hamburger-menu").fadeOut(1000);
  $(".hamburger-menu").fadeOut(300);
});
