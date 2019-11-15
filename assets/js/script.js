$(function(){

//Carrousel
setInterval(function(){
let taille = $('#carrousel li').outerWidth(true);
$("#carrousel ul").animate({marginLeft: -taille},2000,function(){ $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
})
}, 6000);

  class Article {
  constructor(nom, reference, description, prix, image, categorie){
  this.nom = nom;
  this.reference = reference;
  this.description = description;
  this.prix = prix;
  this.image = image;
  this.categorie = categorie;
  }
}
  let accessoire01 = new Article('Serre-tête du renne', '#001', 'Un fabuleux serre-tête qui annoncera votre amour inconditionnel pour votre renne favori. Les douces ramures et les oreilles aux aguets devraient attirer sans soucis les regards de tous vos convives.', '9.99', 'assets/img/accessoire01.jpg', 'Accessoires');
  let accessoire02 = new Article('Gants rouges à fourrure blanche', '#002', 'Alliez douceur et festivité à l\'aide de cette magnifique paire de gants d\'un rouge profond n\'omettant pas la classique (fausse) fourrure blanche, ajoutant un peu de chaleur au design d\'ensemble.', '14.99', 'assets/img/accessoire02.jpg', 'Accessoires');
  let accessoire03 = new Article('Cache-oreilles bonshommes de neige', '#003', 'Protégez vos oreilles du froid hivernal à l\'aide de ces bonshommes de neige au look délicieusement débonnaire.', '12.99', 'assets/img/accessoire03.jpg', 'Accessoires');
  let accessoire04 = new Article('Hotte du Père Noël', '#004', 'N\'oubliez aucun des joujoux de vos précieux chérubins lors de votre passage au pied du sapin avec cette hotte rouge arborant le visage de leur livreur de Noël préféré.', '14.99', 'assets/img/accessoire04.jpg', 'Accessoires');
  let accessoire05 = new Article('Lot de cravates de Noël', '#005', 'Vous aimeriez porter une petite cravate festive, mais vous n\'êtes pas du tout en bons termes avec les noeuds de cravate ? Pas de problèmes avec ce lot de cravates pourvues d\'un élastique, assurant une mise en place rapide et sans frustration pour votre réveillon.', '11.99', 'assets/img/accessoire05.jpg', 'Accessoires');
  let chaussettes01 = new Article('Chaussettes de rennes de neige', '#006', 'Quelques rennes, un peu de bonshommes de neige et une bonne dose de chaleur composent les ingrédients fabuleux qui ont donné naissance à cette paire de chaussettes qui devrait ravir petits et grands enfants.', '7.99', 'assets/img/chaussettes01.jpg', 'Chaussettes');
  let chaussettes02 = new Article('Chaussettes de la course aux rennes', '#007', 'Des rennes, toujours des rennes et encore des rennes ! Alliez le rouge emblématique de Noël et vos cervidés préférés avec cette paire de chaussettes festive qui gardera les pieds de toute la famille bien au chaud. Ces chaussettes sont pourvues de patins anti-dérapants pour assurer que tout le monde reste bien stable lors de la course jusqu\'au sapin.', '8.99', 'assets/img/chaussettes02.jpg', 'Chaussettes');
  let chaussettes03 = new Article('Chaussettes des rennes aux flocons', '#008', 'La neige ou l\'intérieur ? Mettez fin à vos hésitations avec ces chaussettes arborant vos cervidés préférés dansant au milieu des flocons. Ces chaussettes sont pourvues de patins anti-dérapants pour assurer que tout le monde reste bien stable lors de la course jusqu\'au sapin.', '8.99', 'assets/img/chaussettes03.jpg', 'Chaussettes');
  let chaussettes04 = new Article('Chaussettes dépareillées des deux écoles', '#009', 'Les décorations du sapin, ou bien les rennes ? Plus besoin d\'hésiter avec cette paire de chaussettes qui vous permettra d\'allier le meilleur des deux à chacun de vos pieds.', '7.99', 'assets/img/chaussettes04.jpg', 'Chaussettes');
  let chaussettes05 = new Article('Chaussettes aux flocons festifs', '#010', 'Mettez une bonne dose de rouge à vos pieds avec cette chaude paire de chaussettes arborant les beaux flocons blancs qui ravissent petits et grands lors de leur chute. Ces chaussettes sont pourvues de patins anti-dérapants pour assurer que tout le monde reste bien stable lors de la course jusqu\'au sapin.', '8.99', 'assets/img/chaussettes05.jpg', 'Chaussettes');
  let deguisement01 = new Article('Père Noël galopant', '#011', 'Rudolph et le Père Noël sont de sortie ! Impressionnez la galerie en arborant ce déguisement du célèbre "Lonesome Santa" et galopez à travers le pays pour distribuer joie et cadeaux !', '59.99', 'assets/img/deguisement01.jpg', 'Déguisements');
  let deguisement02 = new Article('Bonhomme de neige débonnaire', '#012', 'Apportez un peu de volume à l\'assemblée avec ce costume reprenant les rondeurs d\'un bonhomme de neige fraîchement confectionné.', '39.99', 'assets/img/deguisement02.jpg', 'Déguisements');
  let deguisement03 = new Article('Mère Noël', '#013', 'Déguisez-vous en la plus charmante des dames du Grand Nord avec cet ensemble de Mère Noël et renversez les règles établies en assurant la distribution des cadeaux pendant que votre Père Noël s\'occupe de préparer le reste des festivités !', '59.99', 'assets/img/deguisement03.jpg', 'Déguisements');
  let deguisement04 = new Article('Robe sapin', '#014', 'Arrêtez de vous faire enguirlander et posez vous-même les règles de la soirée avec cette robe de votre conifère festif favori !', '49.99', 'assets/img/deguisement04.jpg', 'Déguisements');
  let deguisement05 = new Article('Sapin festif', '#015', 'Vivez votre rêve et devenez le sapin que tout le monde aime tant : décoré et cadeaux à ses pieds. Ce costume, bien que risquant de limiter quelque peu vos mouvement si vous ne procédez pas à un entraînement préalable, attirera sans mal les regards de tous vos convives.', '59.99', 'assets/img/deguisement05.jpg', 'Déguisements');
  let pull01 = new Article('Pull de l\'Avent', '#016', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let pull02 = new Article('Pere noel', '#017', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let pull03 = new Article('Pere noel', '#018', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let pull04 = new Article('Pere noel', '#019', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let pull05 = new Article('Pere noel', '#020', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let pyjama01 = new Article('Pere noel', '#021', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let pyjama02 = new Article('Pere noel', '#022', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let pyjama03 = new Article('Pere noel', '#023', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let pyjama04 = new Article('Pere noel', '#024', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let pyjama05 = new Article('Pere noel', '#025', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');

  var mon_array = [];
  mon_array.push(article1, article2, article3, article4, article5);
  var LongueurTableau = (Object.keys(mon_array).length);

   $('.categorie').click(function() {
      var x = $(this).attr("id");
      $('.contenu').html('');
      $('#titre_Categorie').html('Nos '+x);
 for (var i = 0; i < LongueurTableau; i++) {

  if (mon_array[i].categorie == x) {
  console.log(mon_array[i].categorie);
  $('.contenu').append(`<!-- PROMO CARD DEBUT -->
  <div class="col-11 col-md-2 card cardBorder">
   <div class="card_article_img" data-toggle="modal" data-target="#${mon_array[i].reference}"><img src="${mon_array[i].image}" alt="img_article"></div>
   <div class="card_article_text"><p class="articleTitle">${mon_array[i].nom}</p><p class="text-success">${mon_array[i].prix}€</p>
     <!-- MODALE -->
     <button type="button" class="btn btnCustomAnthony" data-toggle="modal" data-target="#${mon_array[i].reference}">Plus d'infos</button>
     <div id="${mon_array[i].reference}" class="modal fade" tabindex="-1" role="dialog"
     aria-labelledby="myHugeModalLabel" aria-hidden="true">
     <div class="modal-dialog modal-xl">
       <div class="modal-content rounded flex-row flex-wrap justify-content-center p-3">
         <img class="d-block img-thumbnail modalPictures" src="${mon_array[i].image}" alt="img_article">
         <div class="col-md-8">
           <p>${mon_array[i].description}</p>
           <div class="w-100 p-2"></div>
           <select class="" name="sizeSelection">
             <optgroup label="Enfants">
               <option value="childS">Enfant - S</option>
               <option value="childM">Enfant - M</option>
               <option value="childL">Enfant - L</option>
               <option value="childXL">Enfant - XL</option>
             </optgroup>
             <optgroup label="Femmes">
               <option value="womanS">Femme - S</option>
               <option value="womanM">Femme - M</option>
               <option value="womanL">Femme - L</option>
               <option value="womanXL">Femme - XL</option>
             </optgroup>
             <optgroup label="Hommes">
               <option value="manS">Homme - S</option>
               <option value="manM">Homme - M</option>
               <option value="manL">Homme - L</option>
               <option value="manXL">Homme - XL</option>
             </optgroup>
           </select>
           <div class="w-100 p-2"></div>
           <button class="btn btnCustomAnthony" name="button">Ajouter au panier</button>
         </div>
       </div>
     </div>
   </div>
   <!-- FIN MODALE -->
  </div>
  </div>
`);
}
}   });
});
