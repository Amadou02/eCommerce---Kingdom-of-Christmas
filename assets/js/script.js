$(function(){

//Carrousel
setInterval(function(){
let taille = $('#carrousel li').outerWidth(true);
$('#carrousel ul').animate({marginLeft: -taille},2000,function(){ $(this).css({marginLeft:0}).find('li:last').after($(this).find('li:first'));
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
<<<<<<< HEAD
  let accessoire01 = new Article('Serre-tête du renne', 'R001', 'Un fabuleux serre-tête qui annoncera votre amour inconditionnel pour votre renne favori. Les douces ramures et les oreilles aux aguets devraient attirer sans soucis les regards de tous vos convives.', '9.99', 'assets/img/accessoire01.jpg', 'Accessoires');
  let accessoire02 = new Article('Gants rouges à fourrure blanche', 'R002', 'Alliez douceur et festivité à l\'aide de cette magnifique paire de gants d\'un rouge profond n\'omettant pas la classique (fausse) fourrure blanche, ajoutant un peu de chaleur au design d\'ensemble.', '14.99', 'assets/img/accessoire02.jpg', 'Accessoires');
  let accessoire03 = new Article('Cache-oreilles bonshommes de neige', 'R003', 'Protégez vos oreilles du froid hivernal à l\'aide de ces bonshommes de neige au look délicieusement débonnaire.', '12.99', 'assets/img/accessoire03.jpg', 'Accessoires');
  let accessoire04 = new Article('Hotte du Père Noël', 'R004', 'N\'oubliez aucun des joujoux de vos précieux chérubins lors de votre passage au pied du sapin avec cette hotte rouge arborant le visage de leur livreur de Noël préféré.', '14.99', 'assets/img/accessoire04.jpg', 'Accessoires');
  let accessoire05 = new Article('Lot de cravates de Noël', 'R005', 'Vous aimeriez porter une petite cravate festive, mais vous n\'êtes pas du tout en bons termes avec les noeuds de cravate ? Pas de problèmes avec ce lot de cravates pourvues d\'un élastique, assurant une mise en place rapide et sans frustration pour votre réveillon.', '11.99', 'assets/img/accessoire05.jpg', 'Accessoires');
  let chaussettes01 = new Article('Chaussettes de rennes de neige', 'R006', 'Quelques rennes, un peu de bonshommes de neige et une bonne dose de chaleur composent les ingrédients fabuleux qui ont donné naissance à cette paire de chaussettes qui devrait ravir petits et grands enfants.', '7.99', 'assets/img/chaussettes01.jpg', 'Chaussettes');
  let chaussettes02 = new Article('Chaussettes de la course aux rennes', 'R007', 'Des rennes, toujours des rennes et encore des rennes ! Alliez le rouge emblématique de Noël et vos cervidés préférés avec cette paire de chaussettes festive qui gardera les pieds de toute la famille bien au chaud. Ces chaussettes sont pourvues de patins anti-dérapants pour assurer que tout le monde reste bien stable lors de la course jusqu\'au sapin.', '8.99', 'assets/img/chaussettes02.jpg', 'Chaussettes');
  let chaussettes03 = new Article('Chaussettes des rennes aux flocons', 'R008', 'La neige ou l\'intérieur ? Mettez fin à vos hésitations avec ces chaussettes arborant vos cervidés préférés dansant au milieu des flocons. Ces chaussettes sont pourvues de patins anti-dérapants pour assurer que tout le monde reste bien stable lors de la course jusqu\'au sapin.', '8.99', 'assets/img/chaussettes03.jpg', 'Chaussettes');
  let chaussettes04 = new Article('Chaussettes dépareillées des deux écoles', 'R009', 'Les décorations du sapin, ou bien les rennes ? Plus besoin d\'hésiter avec cette paire de chaussettes qui vous permettra d\'allier le meilleur des deux à chacun de vos pieds.', '7.99', 'assets/img/chaussettes04.jpg', 'Chaussettes');
  let chaussettes05 = new Article('Chaussettes aux flocons festifs', 'R010', 'Mettez une bonne dose de rouge à vos pieds avec cette chaude paire de chaussettes arborant les beaux flocons blancs qui ravissent petits et grands lors de leur chute. Ces chaussettes sont pourvues de patins anti-dérapants pour assurer que tout le monde reste bien stable lors de la course jusqu\'au sapin.', '8.99', 'assets/img/chaussettes05.jpg', 'Chaussettes');
  let deguisement01 = new Article('Père Noël galopant', 'R011', 'Rudolph et le Père Noël sont de sortie ! Impressionnez la galerie en arborant ce déguisement du célèbre "Lonesome Santa" et galopez à travers le pays pour distribuer joie et cadeaux !', '59.99', 'assets/img/deguisement01.jpg', 'Déguisements');
  let deguisement02 = new Article('Bonhomme de neige débonnaire', 'R012', 'Apportez un peu de volume à l\'assemblée avec ce costume reprenant les rondeurs d\'un bonhomme de neige fraîchement confectionné.', '39.99', 'assets/img/deguisement02.jpg', 'Déguisements');
  let deguisement03 = new Article('Mère Noël', 'R013', 'Déguisez-vous en la plus charmante des dames du Grand Nord avec cet ensemble de Mère Noël et renversez les règles établies en assurant la distribution des cadeaux pendant que votre Père Noël s\'occupe de préparer le reste des festivités !', '59.99', 'assets/img/deguisement03.jpg', 'Déguisements');
  let deguisement04 = new Article('Robe sapin', 'R014', 'Arrêtez de vous faire enguirlander et posez vous-même les règles de la soirée avec cette robe de votre conifère festif favori !', '49.99', 'assets/img/deguisement04.jpg', 'Déguisements');
  let deguisement05 = new Article('Sapin festif', 'R015', 'Vivez votre rêve et devenez le sapin que tout le monde aime tant : décoré et cadeaux à ses pieds. Ce costume, bien que risquant de limiter quelque peu vos mouvement si vous ne procédez pas à un entraînement préalable, attirera sans mal les regards de tous vos convives.', '59.99', 'assets/img/deguisement05.jpg', 'Déguisements');
  let pull01 = new Article('Pull de l\'Avent', 'R016', 'Restez bien au chaud pour décompter les jours qu\'il vous reste avant de pouvoir vous précipiter jusqu\'au sapin et ouvrir tous vos cadeaux.', '19.99', 'assets/img/pull01.jpg', 'Pulls');
  let pull02 = new Article('Tree Rex !', 'R017', 'Vous aimez les jeux de mots, les dinosaures et les fêtes de Noël ? Ne cherchez pas plus loin et adoptez le fabuleux Tree Rex, curieux hybride de l\'espèce emblématique du Maastrichtien et de votre conifère de prédilection. De quoi mettre un sourire sur le visage de toutes les personnes qui croiseront votre chemin.', '24.99', 'assets/img/pull02.jpg', 'Pulls');
  let pull03 = new Article('Pull enguirlandé', 'R018', 'Vous aimeriez dégager autant de classe et de festivité que votre sapin de Noël ? Ouvrez les hostilités et prouvez lui que vous ne reculerez devant rien pour asseoir votre suprématie lors des fêtes de fin d\'année !', '24.99', 'assets/img/pull03.jpg', 'Pulls');
  let pull04 = new Article('Pull de l\'adorateur du Père Noël', 'R019', 'Déclarez votre flamme au plus Noël des padre avec ce pull qui ne laissera aucun doute sur votre inclinaison sentimentale. Fabrication garantie 100% en poils de barbe de votre idole.', '199.99', 'assets/img/pull04.jpg', 'Pulls');
  let pull05 = new Article('Pull "Fluffy Snow"', 'R020', 'Dites non au froid à l\'aide de ce pull rappelant les chutes de poudreuse sur les forêts. Chacun des détails de ce pull est soigneusement confectionné à partir de poils de Yéti des montagnes du Grand Nord et vous assurera de conserver votre chaleur corporelle quelque soit la température extérieure.', '29.99', 'assets/img/pull05.jpg', 'Pulls');
  let pyjama01 = new Article('Pyjama de l\'avalanche de rennes', 'R021', 'Exprimez votre amour pour les compagnons de route du Père Noël avec ce confortable pyjama. Disponible pour toute la famille.', '19.99', 'assets/img/pyjama01.jpg', 'Pyjamas');
  let pyjama02 = new Article('Pyjama du lutin', 'R022', 'Vous aviez toujours rêvé d\'aller donner un coup de main aux ateliers de confection des jouets du Père Noël aux côtés des lutins si chers à votre coeur ? Alors n\'attendez plus et procurez-vous ce pyjama aux couleurs de vos artisans préférés !', '19.99', 'assets/img/pyjama02.jpg', 'Pyjamas');
  let pyjama03 = new Article('Pyjama breuvage de Noël', 'R023', 'Ne mettez pas votre passion pour votre breuvage favori de côté avec ces pyjamas mettant en avant votre côté alcoolique, addict au café ou au biberon sur votre torse.', '19.99', 'assets/img/pyjama03.jpg', 'Pyjamas');
  let pyjama04 = new Article('Pyjama des icônes festives', 'R024', 'Bien que les couleurs puissent vous rappeler le pays dont proviennent le Gorgonzola et le Colisée, ce pyjama sera bel et bien un hommage vibrant aux icônes de vos fêtes de fin d\'année préférées.', '19.99', 'assets/img/pyjama04.jpg', 'Pyjamas');
  let pyjama05 = new Article('Pyjama des joies hivernales', 'R025', 'Rappelez à votre famille tout ce qui fait les joies de l\'hiver avec ces pyjamas arborant toutes les petites étapes qui font que cette fin d\'année sera magique.', '19.99', 'assets/img/pyjama05.jpg', 'Pyjamas');
=======
let accessoire01 = new Article('Serre-tête du renne', 'R001', 'Un fabuleux serre-tête qui annoncera votre amour inconditionnel pour votre renne favori. Les douces ramures et les oreilles aux aguets devraient attirer sans soucis les regards de tous vos convives.', '9.99', 'assets/img/accessoire01.jpg', 'Accessoires');
 let accessoire02 = new Article('Gants rouges à fourrure blanche', 'R002', 'Alliez douceur et festivité à l\'aide de cette magnifique paire de gants d\'un rouge profond n\'omettant pas la classique (fausse) fourrure blanche, ajoutant un peu de chaleur au design d\'ensemble.', '14.99', 'assets/img/accessoire02.jpg', 'Accessoires');
 let accessoire03 = new Article('Cache-oreilles bonshommes de neige', 'R003', 'Protégez vos oreilles du froid hivernal à l\'aide de ces bonshommes de neige au look délicieusement débonnaire.', '12.99', 'assets/img/accessoire03.jpg', 'Accessoires');
 let accessoire04 = new Article('Hotte du Père Noël', 'R004', 'N\'oubliez aucun des joujoux de vos précieux chérubins lors de votre passage au pied du sapin avec cette hotte rouge arborant le visage de leur livreur de Noël préféré.', '14.99', 'assets/img/accessoire04.jpg', 'Accessoires');
 let accessoire05 = new Article('Lot de cravates de Noël', 'R005', 'Vous aimeriez porter une petite cravate festive, mais vous n\'êtes pas du tout en bons termes avec les noeuds de cravate ? Pas de problèmes avec ce lot de cravates pourvues d\'un élastique, assurant une mise en place rapide et sans frustration pour votre réveillon.', '11.99', 'assets/img/accessoire05.jpg', 'Accessoires');
 let chaussettes01 = new Article('Chaussettes de rennes de neige', 'R006', 'Quelques rennes, un peu de bonshommes de neige et une bonne dose de chaleur composent les ingrédients fabuleux qui ont donné naissance à cette paire de chaussettes qui devrait ravir petits et grands enfants.', '7.99', 'assets/img/chaussettes01.jpg', 'Chaussettes');
 let chaussettes02 = new Article('Chaussettes de la course aux rennes', 'R007', 'Des rennes, toujours des rennes et encore des rennes ! Alliez le rouge emblématique de Noël et vos cervidés préférés avec cette paire de chaussettes festive qui gardera les pieds de toute la famille bien au chaud. Ces chaussettes sont pourvues de patins anti-dérapants pour assurer que tout le monde reste bien stable lors de la course jusqu\'au sapin.', '8.99', 'assets/img/chaussettes02.jpg', 'Chaussettes');
 let chaussettes03 = new Article('Chaussettes des rennes aux flocons', 'R008', 'La neige ou l\'intérieur ? Mettez fin à vos hésitations avec ces chaussettes arborant vos cervidés préférés dansant au milieu des flocons. Ces chaussettes sont pourvues de patins anti-dérapants pour assurer que tout le monde reste bien stable lors de la course jusqu\'au sapin.', '8.99', 'assets/img/chaussettes03.jpg', 'Chaussettes');
 let chaussettes04 = new Article('Chaussettes dépareillées des deux écoles', 'R009', 'Les décorations du sapin, ou bien les rennes ? Plus besoin d\'hésiter avec cette paire de chaussettes qui vous permettra d\'allier le meilleur des deux à chacun de vos pieds.', '7.99', 'assets/img/chaussettes04.jpg', 'Chaussettes');
 let chaussettes05 = new Article('Chaussettes aux flocons festifs', 'R010', 'Mettez une bonne dose de rouge à vos pieds avec cette chaude paire de chaussettes arborant les beaux flocons blancs qui ravissent petits et grands lors de leur chute. Ces chaussettes sont pourvues de patins anti-dérapants pour assurer que tout le monde reste bien stable lors de la course jusqu\'au sapin.', '8.99', 'assets/img/chaussettes05.jpg', 'Chaussettes');
 let deguisement01 = new Article('Père Noël galopant', 'R011', 'Rudolph et le Père Noël sont de sortie ! Impressionnez la galerie en arborant ce déguisement du célèbre "Lonesome Santa" et galopez à travers le pays pour distribuer joie et cadeaux !', '59.99', 'assets/img/deguisement01.jpg', 'Déguisements');
 let deguisement02 = new Article('Bonhomme de neige débonnaire', 'R012', 'Apportez un peu de volume à l\'assemblée avec ce costume reprenant les rondeurs d\'un bonhomme de neige fraîchement confectionné.', '39.99', 'assets/img/deguisement02.jpg', 'Déguisements');
 let deguisement03 = new Article('Mère Noël', 'R013', 'Déguisez-vous en la plus charmante des dames du Grand Nord avec cet ensemble de Mère Noël et renversez les règles établies en assurant la distribution des cadeaux pendant que votre Père Noël s\'occupe de préparer le reste des festivités !', '59.99', 'assets/img/deguisement03.jpg', 'Déguisements');
 let deguisement04 = new Article('Robe sapin', 'R014', 'Arrêtez de vous faire enguirlander et posez vous-même les règles de la soirée avec cette robe de votre conifère festif favori !', '49.99', 'assets/img/deguisement04.jpg', 'Déguisements');
 let deguisement05 = new Article('Sapin festif', 'R015', 'Vivez votre rêve et devenez le sapin que tout le monde aime tant : décoré et cadeaux à ses pieds. Ce costume, bien que risquant de limiter quelque peu vos mouvement si vous ne procédez pas à un entraînement préalable, attirera sans mal les regards de tous vos convives.', '59.99', 'assets/img/deguisement05.jpg', 'Déguisements');
 let pull01 = new Article('Pull de l\'Avent', 'R016', 'Restez bien au chaud pour décompter les jours qu\'il vous reste avant de pouvoir vous précipiter jusqu\'au sapin et ouvrir tous vos cadeaux.', '19.99', 'assets/img/pull01.jpg', 'Pulls');
 let pull02 = new Article('Tree Rex !', 'R017', 'Vous aimez les jeux de mots, les dinosaures et les fêtes de Noël ? Ne cherchez pas plus loin et adoptez le fabuleux Tree Rex, curieux hybride de l\'espèce emblématique du Maastrichtien et de votre conifère de prédilection. De quoi mettre un sourire sur le visage de toutes les personnes qui croiseront votre chemin.', '24.99', 'assets/img/pull02.jpg', 'Pulls');
 let pull03 = new Article('Pull enguirlandé', 'R018', 'Vous aimeriez dégager autant de classe et de festivité que votre sapin de Noël ? Ouvrez les hostilités et prouvez lui que vous ne reculerez devant rien pour asseoir votre suprématie lors des fêtes de fin d\'année !', '24.99', 'assets/img/pull03.jpg', 'Pulls');
 let pull04 = new Article('Pull de l\'adorateur du Père Noël', 'R019', 'Déclarez votre flamme au plus Noël des padre avec ce pull qui ne laissera aucun doute sur votre inclinaison sentimentale. Fabrication garantie 100% en poils de barbe de votre idole.', '199.99', 'assets/img/pull04.jpg', 'Pulls');
 let pull05 = new Article('Pull "Fluffy Snow"', 'R020', 'Dites non au froid à l\'aide de ce pull rappelant les chutes de poudreuse sur les forêts. Chacun des détails de ce pull est soigneusement confectionné à partir de poils de Yéti des montagnes du Grand Nord et vous assurera de conserver votre chaleur corporelle quelque soit la température extérieure.', '29.99', 'assets/img/pull05.jpg', 'Pulls');
 let pyjama01 = new Article('Pyjama de l\'avalanche de rennes', 'R021', 'Exprimez votre amour pour les compagnons de route du Père Noël avec ce confortable pyjama. Disponible pour toute la famille.', '19.99', 'assets/img/pyjama01.jpg', 'Pyjamas');
 let pyjama02 = new Article('Pyjama du lutin', 'R022', 'Vous aviez toujours rêvé d\'aller donner un coup de main aux ateliers de confection des jouets du Père Noël aux côtés des lutins si chers à votre coeur ? Alors n\'attendez plus et procurez-vous ce pyjama aux couleurs de vos artisans préférés !', '19.99', 'assets/img/pyjama02.jpg', 'Pyjamas');
 let pyjama03 = new Article('Pyjama breuvage de Noël', 'R023', 'Ne mettez pas votre passion pour votre breuvage favori de côté avec ces pyjamas mettant en avant votre côté alcoolique, addict au café ou au biberon sur votre torse.', '19.99', 'assets/img/pyjama03.jpg', 'Pyjamas');
 let pyjama04 = new Article('Pyjama des icônes festives', 'R024', 'Bien que les couleurs puissent vous rappeler le pays dont proviennent le Gorgonzola et le Colisée, ce pyjama sera bel et bien un hommage vibrant aux icônes de vos fêtes de fin d\'année préférées.', '19.99', 'assets/img/pyjama04.jpg', 'Pyjamas');
 let pyjama05 = new Article('Pyjama des joies hivernales', 'R025', 'Rappelez à votre famille tout ce qui fait les joies de l\'hiver avec ces pyjamas arborant toutes les petites étapes qui font que cette fin d\'année sera magique.', '19.99', 'assets/img/pyjama05.jpg', 'Pyjamas');

>>>>>>> a3a5f814bef2b153033f19401665d52626a74f9c

  var mon_array = [];
  mon_array.push(accessoire01, accessoire02, accessoire03, accessoire04, accessoire05, chaussettes01, chaussettes02, chaussettes03, chaussettes04, chaussettes05, deguisement01, deguisement02, deguisement03, deguisement04, deguisement05, pull01, pull02, pull03, pull04, pull05, pyjama01, pyjama02, pyjama03, pyjama04, pyjama05);
  var LongueurTableau = (Object.keys(mon_array).length);
  var x = 'Promotions';
  boucle(x);

  $('#add_basket').click(function(){
    var id_shop = $(this).attr('name');
    console.log(id_shop);
    alert('ajout de larticle reference :' + id_shop);
  });

   $('.categorie').click(function() {
      x = $(this).attr('id');
      $('.contenu').html('');
      $('#titre_Categorie').html('Nos '+x);
     boucle(x);
   });

 function boucle(x) {
 for (var i = 0; i < LongueurTableau; i++) {
  if (mon_array[i].categorie == x) {
  $('.contenu').append(`<!-- PROMO CARD DEBUT -->
  <div class="col-11 col-md-2 card cardBorder">
   <div class="card_article_img" data-toggle="modal" data-target="#${mon_array[i].reference}"><img src="${mon_array[i].image}" alt="img_article"></div>
   <div class="card_article_text"><p class="articleTitle">${mon_array[i].nom}</p><p class="text-success">${mon_array[i].prix}€</p>
     <!-- MODALE -->
     <button type="button" class="btn btnCustomAnthony" data-toggle="modal" data-target="#${mon_array[i].reference}">Plus d'infos</button>
     <div id="${mon_array[i].reference}" class="modal fade" tabindex="-1" role="dialog"
     aria-labelledby="myHugeModalLabel" aria-hidden="true">
     <div class="modal-dialog modal-xl">
       <div class="modal-content rounded flex-row flex-wrap justify-content-center  p-3">
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
           <button class="btn btnCustomAnthony" id="add_basket" name="${mon_array[i].reference}">Ajouter au panier</button>
         </div>
       </div>
     </div>
   </div>
   <!-- FIN MODALE -->
  </div>
  </div>
`);
}
}   };
});
