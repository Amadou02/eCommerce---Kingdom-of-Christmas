$(function () {
  // ********************* DEBUT CARROUSSEL *********************
  setInterval(function () {
    // RECUPERE LA LARGEUR D'UN LI DANS NOTRE CARROUSEL (MARGES COMPRISES)
    let taille = $('#carrousel li').outerWidth(true);
    // RECULE LE UL VERS LA GAUCHE DE LA TAILLE D'UN LI
    $('#carrousel ul').animate({
      marginLeft: -taille
    }, 2000, function () {
      // SELECTIONNE ENSUITE LE PREMIER LI ET LE PLACE APRES LE DERNIER LI POUR CREER UN CAROUSSEL INFINI
      $(this).css({
        marginLeft: 0
      }).find('li:last').after($(this).find('li:first'));
    })
  }, 6000);
  // ********************* FIN CARROUSSEL *********************

  // ********************* CREATION DE LA CLASS QUI VA NOUS SERVIR A CREER DES OBJETS. CETTE CLASS EST UNE SORTE DE MOULE DE FABRICATION, CHAQUE VARIABLE ENVOYÉ DEVIENDRA UN OBJET CONSTITUÉ DE CES 7 PARAMETRES *********************
  class Article {
    constructor(nom, reference, description, prix, image, categorie, nombre, size) {
      this.nom = nom;
      this.reference = reference;
      this.description = description;
      this.prix = prix;
      this.image = image;
      this.categorie = categorie;
      this.nombre = nombre;
      this.size = size;
    }
  }
  // ********************* FIN DE LA CLASS*********************

  // ********************* DECLARATION DES VARIABLES AVEC LEURS DIFFERENTS PARAMETRES, CHACUNE D'ENTRE ELLE VA PASSER PAR LA CLASS ET DEVENIR UN OBJET AVEC SES DIFFERENTS PARAMETRES *********************
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
  let promo01 = new Article('Pyjama des joies hivernales', 'R026', 'Rappelez à votre famille tout ce qui fait les joies de l\'hiver avec ces pyjamas arborant toutes les petites étapes qui font que cette fin d\'année sera magique.', '18.99', 'assets/img/pyjama05.jpg', 'Promotions');
  let promo02 = new Article('Pull "Fluffy Snow"', 'R027', 'Dites non au froid à l\'aide de ce pull rappelant les chutes de poudreuse sur les forêts. Chacun des détails de ce pull est soigneusement confectionné à partir de poils de Yéti des montagnes du Grand Nord et vous assurera de conserver votre chaleur corporelle quelque soit la température extérieure.', '28.99', 'assets/img/pull05.jpg', 'Promotions');
  let promo03 = new Article('Tree Rex !', 'R028', 'Vous aimez les jeux de mots, les dinosaures et les fêtes de Noël ? Ne cherchez pas plus loin et adoptez le fabuleux Tree Rex, curieux hybride de l\'espèce emblématique du Maastrichtien et de votre conifère de prédilection. De quoi mettre un sourire sur le visage de toutes les personnes qui croiseront votre chemin.', '23.99', 'assets/img/pull02.jpg', 'Promotions');
  let promo04 = new Article('Chaussettes dépareillées des deux écoles', 'R29', 'Les décorations du sapin, ou bien les rennes ? Plus besoin d\'hésiter avec cette paire de chaussettes qui vous permettra d\'allier le meilleur des deux à chacun de vos pieds.', '6.99', 'assets/img/chaussettes04.jpg', 'Promotions');
  let promo05 = new Article('Lot de cravates de Noël', 'R30', 'Vous aimeriez porter une petite cravate festive, mais vous n\'êtes pas du tout en bons termes avec les noeuds de cravate ? Pas de problèmes avec ce lot de cravates pourvues d\'un élastique, assurant une mise en place rapide et sans frustration pour votre réveillon.', '10.99', 'assets/img/accessoire05.jpg', 'Promotions');
  // ********************* FIN DES VARIABLES *********************

  // ********************* CREATION D'UN TABLEAU DANS LEQUEL ON VA PUSH, REUNIR, TOUS NOS OBJETS CREES PRECEDEMENT *********************
  var mon_array = [];
  mon_array.push(accessoire01, accessoire02, accessoire03, accessoire04, accessoire05, chaussettes01, chaussettes02, chaussettes03, chaussettes04, chaussettes05, deguisement01, deguisement02, deguisement03, deguisement04, deguisement05, pull01, pull02, pull03, pull04, pull05, pyjama01, pyjama02, pyjama03, pyjama04, pyjama05, promo02, promo01, promo03, promo04, promo05);
  // ********************* FIN *********************

  //********************* CATÉGORIES ET ARTICLES *********************
  //CATÉGORIE PAR DÉFAUT
  var x = "Promotions";
  boucle(x);

  //AU CLIC SUR L'UN DES BOUTONS DE LA NAVBAR
  $('.categorie').click(function () {
    //RECUPERE SON ID ET STOCKE DANS UNE VARIABLE
    x = $(this).attr('id');
    //VIDE LA DIV "CONTENU" DANS LAQUELLE S'AFFICHERONT TOUS LES ARTICLES DU SITE (POUR EVITER QUE LES ARTICLES S'AJOUTENT AU PRECEDENTS A CHAQUE CLIC)
    $('.contenu').html('');
    //REMPLACE LE TITRE DE CATEGORIE PAR L'ID DU BOUTON CLIQUÉ
    $('#titre_Categorie').html('Nos ' + x);
    //LANCE LA BOUCLE POUR AFFICHER LES ARTICLES
    boucle(x);
  });

  //LA FONCTION QUI PERMET D'AFFICHER TOUS LES ARTICLES DU SITE
  function boucle(x) {
    //BOUCLE SUR TOUS LES OBJETS CONTENU DANS LE TABLEAU ET AFFICHE SEULEMENT CEUX DONT LE PARAMETRE "categorie" CORESPOND A L'ID RECUPERÉ AU DESSUS
    for (var i = 0; i < mon_array.length; i++) {
      if (mon_array[i].categorie == x) {
        console.log(mon_array[i].nom)
        //CETTE CARD VA DONC SE REPETER POUR CHAQUE ARTICLE. AVEC A CHAQUE INSTANCE DE LA BOUCLE, LES PARAMETRES DE L'OBJET EN COURS
        $('.contenu').append(`<!-- PROMO CARD DEBUT${mon_array[i].reference} -->
          <div class="col-11 col-md-5 col-lg-2 card cardBorder">
          <div class="card_article_img" data-toggle="modal" data-target="#${mon_array[i].reference}"><img src="${mon_array[i].image}" alt="img_article"></div>
          <div class="card_article_text"><p class="articleTitle">${mon_array[i].nom}</p><p class="text-success">${mon_array[i].prix}€</p>
          <!-- MODALE -->
          <button type="button" class="btn btnCustomAnthony" data-toggle="modal" data-target="#${mon_array[i].reference}">Plus d'infos</button>
          <div id="${mon_array[i].reference}" class="modal fade spanAppend" tabindex="-1" role="dialog"
          aria-labelledby="myHugeModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-xl">
          <div class="modal-content rounded flex-row flex-wrap justify-content-center  p-3">
          <img class="d-block img-thumbnail modalPictures" src="${mon_array[i].image}" alt="img_article">
          <div class="col-md-8">
          <p>${mon_array[i].description}</p>
          <div class="w-100 p-2"></div>
          <select class="${mon_array[i].reference}" name="sizeSelection">
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
          <button class="btn btnCustomAnthony add_basket" id="${mon_array[i].reference}">Ajouter au panier</button>
          </div>
          </div>
          </div>
          </div>
          <!-- FIN MODALE -->
          </div>
          </div>
          `);
          //C'EST SUR LE BOUTON CI DESSUS QUE L'ON PASSE LA REFERENCE DE L'ARTICLE EN ID, CE QUI NOUS SERVIRA PLUS TARD AFIN DE RECUPERER TOUTES LES DONNEES DE L'ARTICLE CONCERNÉ ET POUVOIR LE METTRE DANS LE PANIER. CHAQUE BOUTON "Ajouter au panier" AURA DONC UN ID DIFFÉRENT, CELUI DE SON ARTICLE
        }
      }
    };


    //FONCTION QUI AJOUTE UN ARTICLE VIA UN FORMULAIRE
      $('body').on('click', '#new_Item', function (event) {
        var name_Item = $('#name_Item').val();
        var ref_Item = $('#ref_Item').val();
        var desc_Item = $('#desc_Item').val();
        var price_Item = $('#price_Item').val();
        var src_Item = $('#src_Item').val();
        var cat_Item = $('#cat_Item option:selected').text();
          let new_Item = new Article(name_Item, ref_Item, desc_Item, price_Item, src_Item, cat_Item);
          mon_array.push(new_Item);
          x = cat_Item;
          $('.contenu').html('');
          boucle(x)
      });



    // ********************* FIN CATÉGORIES ET ARTICLES *********************

    // ********************* CRÉATION DU PANIER *********************
    // CRÉATION D'UN TABLEAU QUI NOUS SERVIRA A REUNIR TOUS NOS ARTICLES
    var mon_panier = [];

    // AU CLIC SUR UN BOUTON "AJOUTER AU PANIER"
    $('body').on('click', 'button.add_basket', function () {
      //CHAQUE BOUTON A COMME ID, LA REFERENCE DE L'ARTICLE AUQUEL IL EST LIÉ. ON LE RECUPERE ICI
      var shop = $(this).attr('id');
      //SI LE PANIER EST VIDE
      if (mon_panier.length == 0) {
        ajoutemolli(shop);
      }
      //SINON
      else {
        for (var i = 0; i < mon_panier.length; i++) {
          //VERIFIE QUE L'ARTICLE N'EST PAS DÉJÀ DANS LE PANIER, S'IL EXISTE, INCREMENTER SON NOMBRE
          if (mon_panier[i].reference == shop) {
            mon_panier[i].nombre = ++mon_panier[i].nombre;
            var searching = true;
          }
        }
        //S'IL N'EXISTE PAS, LANCE LA FONCTION
        if (!searching) {
          ajoutemolli(shop)
        }
      }
    });

    //FONCTION POUR AJOUTER UN ARTICLE AU PANIER
    function ajoutemolli(shop) {
      var size = $('.'+shop+' option:selected').text();
      console.log(shop)
      console.log(size);
      console.log('Ajout au panier')
      for (var i = 0; i < mon_array.length; i++) {
        //BOUCLE DANS LE TABLEAU DES OBJETS POUR RECUPERER TOUTES LES DONNES DE L'ARTICLE CONCERNÉ A PARTIR DE SA REFERENCE
        if (mon_array[i].reference == shop) {
          //ON CREE UN NOUVEL OBJET AVEC LES DONNÉES RECUPEREES ET ON LE PUSH DANS NOTRE TABLEAU PANIER
          let add_Basket = new Article(mon_array[i].nom, mon_array[i].reference, mon_array[i].description, mon_array[i].prix, mon_array[i].image, mon_array[i].categorie, 1, size);
          mon_panier.push(add_Basket);
          console.log(mon_panier);
          var span = $('<div></div>');
          span.addClass('h4');
          span.text('Article ajouté au panier !');
          $('.spanAppend #'+mon_array[i].reference).after(span);

        }
      }
    }

    // A CHAQUE CLIC SUR LE PANIER, LE VIDER (POUR EVITER QUE LES ARTICLES DU PANIER S'AJOUTENT AU PRECEDENTS A CHAQUE CLIC) ET LANCER LA FONCTION POUR L'AFFICHER
    $('.myBasket').click(function () {
      $('.formDeliveryAdress, .contact, .formPayment').hide();
      $('.firt_Step_Basket').show();
      if (mon_panier.length == 0) {$('.firt_Step_Basket').html('<p class="text-center">Aucun article dans le panier !</p>');}
      else (affichepanier());
    });

    //FONCTION POUR AFFICHER LE CONTENU DE NOTRE PANIER
    function affichepanier() {
      $('.firt_Step_Basket').html('');
      //BOUCLE POUR AFFICHER LE CONTENU DE NOTRE TABLEAU PANIER
      if (mon_panier.length == 0) {$('.firt_Step_Basket').html('<p class="text-center">Aucun article dans le panier !</p>');}
      else {
      for (var i = 0; i < mon_panier.length; i++) {
        $('.firt_Step_Basket').append(
          `<div id="line_Basket"><div id="basket_Img"><img src="${mon_panier[i].image}"></div><a href="#"><i class="text-danger mr-2 fas fa-trash-alt delete_Article" id="${mon_panier[i].reference}"></i></a>${mon_panier[i].nom} - <span class="h5 text-success">${mon_panier[i].prix}€</span><input type="number" min="0" name="${mon_panier[i].reference}" id="${mon_panier[i].reference}" class="change_Number_Article" value="${mon_panier[i].nombre}">${mon_panier[i].size}</div>`
        );
      };
      $('.firt_Step_Basket').append('<button type="button" class="btn btnCustomAnthony button_Command" data-dismiss="">Commander</button>');
    }
      //LANCE LA FONCTION QUI CALCULE LE PRIX TOTAL
      lokil();
    }

    var total_bask = 0;
    //FONCTION POUR CALCULER LE PRIX TOTAL. S'ACTIVE QUAND ON CLIC SUR LE PANIER, QUE L'ON SUPPRIME UN ARTICLE OU MODIFIE SON NOMBRE
    function lokil() {
      total_bask = 0;
      for (var i = 0; i < mon_panier.length; i++) {
        //BOUCLE SUR TOUS LES PRIX DU PANIER. A CHAQUE INSTANCE D'UNE BOUCLE, PRENDRE LE RESULTAT PRECÉDENT ET LUI ADDITIONNER LE PRIX DE L'ARTICLE x SON NOMBRE
        total_bask = total_bask + (parseFloat(mon_panier[i].prix) * mon_panier[i].nombre);
        total_bask = Math.round(total_bask*100)/100;
      };
      $('#total_Basket').html(total_bask);
      $('#nb_Item_Basket span').html(total_bask);

    }

    //FONCTION POUR CHANGER LE NOMBRE D'UN ARTICLE
    $('body').on('click', '.change_Number_Article', function () {
      //RECUPERE LA VALEUR DE L'INPUT NUMBER
      var modif_art = $(this).val();
      //RECUPERE L'ID DE L'INPUT QUI EST LA REFERENCE DE SON ARTICLE
      var my_Ref_Input = $(this).attr('id');
      console.log(total_bask);
      for (var i = 0; i < mon_panier.length; i++) {
        //BOUCLE POUR TROUVER L'ARTICLE CONCERNÉ A PARTIR DE SA REFERENCE
        if (mon_panier[i].reference == my_Ref_Input) {
          //UNE FOIS TROUVÉ, MODIFIE SON NOMBRE PAR LA VALEUR DU CHAMP INPUT
          mon_panier[i].nombre = modif_art;
          console.log(modif_art)
        }
      };
      //RELANCE LE CALCUL DU PRIX TOTAL
      lokil();
    });

    //FONCTION POUR SUPPRIMER UN ARTICLE
    $('body').on('click', '.delete_Article', function () {
      //BOUCLE POUR RECUPERER L'ARTICLE CONCERNÉ A PARTIR DE SA REFERENCE (QUI EST ELLE MEME L'ID DE L'ELEMENT CLIQUÉ)
      for (var i = 0; i < mon_panier.length; i++) {
        var my_Ref_Input = $(this).attr('id');
        if (mon_panier[i].reference == my_Ref_Input) {
          //UNE FOIS TROUVÉ, SUPPRIMER LA LIGNE DANS LE TABLEAU
          mon_panier.splice(i, 1);
          console.log(mon_panier)
          //RELANCE LA FONCTION POUR AFFICHER LE PANIER MIS A JOUR
          affichepanier()
        }
      }
    });
    // ********************* FIN PANIER *********************

    // ********************* TOUTES LES VERIFICATIONS DU FORMULAIRE *********************
    $('body').on('click', '.button_Command', function (event) {
      $('.firt_Step_Basket').hide();
      $('.contact').show();
    })

    var checkName = /^[A-Z][a-zéèçàïîêëôöûü]+([ -][A-Z][a-zéèçàïîêëôöûü]+)?$/;

    $('#buttonContact').click(function (event) {
      event.preventDefault();
      var isValid = true;

      var name = $('#name').val();
      var firstName = $('#firstName').val();
      var mail = $('#mail').val();
      var phone = $('#phoneNumber').val();

      var checkName = /^[A-Z][a-zéèçàïîêëôöûü]+([ -][A-Z][a-zéèçàïîêëôöûü]+)?$/;
      var checkFirstName = /^[A-Z][a-zéèçàïîêëôöûü]+([ -][A-Z][a-zéèçàïîêëôöûü]+)?$/;
      var checkMail = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
      var checkPhone = /^(0|\+33)[1-9]([-. ][0-9]{2}){4}$/;

      $('form span.text-danger').remove();

      if (!checkName.test(name)) {
        isValid = false;
        var span = $('<span></span>');
        span.addClass('text-danger');
        span.text('Veuillez entrer un nom valide');
        $('#name').after(span);
      }
      if (!checkFirstName.test(firstName)) {
        isValid = false;
        var span = $('<span></span>');
        span.addClass('text-danger');
        span.text('Veuillez entrer un prénom valide');
        $('#firstName').after(span);
      }
      if (!checkMail.test(mail)) {
        isValid = false;
        var span = $('<span></span>');
        span.addClass('text-danger');
        span.text('Veuillez entrer un mail valide');
        $('#mail').after(span);
      }
      if (!checkPhone.test(phone)) {
        isValid = false;
        var span = $('<span></span>');
        span.addClass('text-danger');
        span.text('Veuillez entrer un numéro de téléphone valide');
        $('#phoneNumber').after(span);
      }
      if (!isValid) {
        event.preventDefault();
      }
      if (isValid) {
        // alert('gagné');
        $('.formDeliveryAdress').show();
        // event.preventDefault();
      }
    });
    $('#buttonDelivery').click(function (event) {
      event.preventDefault();
      var isValid = true;

      var streetNumber = $('#streetNumber').val();
      var adress = $('#adress').val();
      var zipCode = $('#zipCode').val();
      var city = $('#city').val();

      var checkStreetNumber = /^[0-9]+$/;
      var checkAdress = /^[A-Z a-z]+$/;
      var checkZipCode = /^[0-9]{5}$/;
      var checkcity = /^[A-Z][a-z]+([ -][A-Z][a-z]+)?$/;

      $('form span.text-danger').remove();

      if (!checkStreetNumber.test(streetNumber)) {
        isValid = false;
        var span = $('<span></span>');
        span.addClass('text-danger');
        span.text('Veuillez un numéro de rue valide');
        $('#streetNumber').after(span);
      }
      if (!checkAdress.test(adress)) {
        isValid = false;
        var span = $('<span></span>');
        span.addClass('text-danger');
        span.text('Veuillez entrer une adresse valide');
        $('#adress').after(span);
      }

      if (!checkZipCode.test(zipCode)) {
        isValid = false;
        var span = $('<span></span>');
        span.addClass('text-danger');
        span.text('Veuillez entrer une adresse postale valide');
        $('#zipCode').after(span);
      }
      if (!checkcity.test(city)) {
        isValid = false;
        var span = $('<span></span>');
        span.addClass('text-danger');
        span.text('Veuillez entrer une ville valide');
        $('#city').after(span);
      }
      if (!isValid) {
        event.preventDefault();
      }
      if (isValid) {
        $('.formPayment').show();
      }
    });
    $('#buttonPayment').click(function (event) {
      var isValid = true;

      var nameOnCard = $('#nameOnCard').val();
      var cardNumber = $('#cardNumber').val();
      var expiryDate = $('#expiryDate').val();
      var securityCode = $('#securityCode').val();

      var checknameOnCard = /^[A-Z][a-zéèçàïîêëôöûü]+([ -][A-Z][a-zéèçàïîêëôöûü]+)?$/;
      var checkcardNumber = /^[0-9]{16}$/;
      var checkexpiryDate = /^[0-9]{2}\/+([0-9]){2}$/;
      var checksecurityCode = /^[0-9]{3}$/;

      $('form span.text-danger').remove();

      if (!checknameOnCard.test(nameOnCard)) {
        isValid = false;
        var span = $('<span></span>');
        span.addClass('text-danger');
        span.text('Veuillez un nom valide');
        $('#nameOnCard').after(span);
      }
      if (!checkcardNumber.test(cardNumber)) {
        isValid = false;
        var span = $('<span></span>');
        span.addClass('text-danger');
        span.text('Veuillez entrer un numéro de carte valide');
        $('#cardNumber').after(span);
      }
      if (!checkexpiryDate.test(expiryDate)) {
        isValid = false;
        var span = $('<span></span>');
        span.addClass('text-danger');
        span.text('Veuillez entrer une date valide');
        $('#expiryDate').after(span);
      }
      if (!checksecurityCode.test(securityCode)) {
        isValid = false;
        var span = $('<span></span>');
        span.addClass('text-danger');
        span.text('Veuillez entrer un cryptogramme valide');
        $('#securityCode').after(span);
      }
      if (!isValid) {
        event.preventDefault();
      }
      if (isValid) {
        alert('Confirmation de votre commande')
      }
    });
    // ********************* FIN VERIFICATIONS FORMULAIRE *********************
  });
