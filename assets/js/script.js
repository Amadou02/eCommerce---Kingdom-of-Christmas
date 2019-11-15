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
  let article1 = new Article('Pull de Noël', 'R001', 'Magnifique pull de noël', '24.99', 'https://images-na.ssl-images-amazon.com/images/I/81reC2OYnlL._UX385_.jpg', 'Pulls');
 let article2 = new Article('Costume du Père Noël', 'R002', 'Superbe costume de Père Noël', '34.99', 'https://cdn.deguisetoi.fr/images/rep_art/gra/236/0/236083/deguisement-complet-pere-noel-luxe-adulte_236083_4.jpg', 'Déguisements');
 let article3 = new Article('Pyjama renne', 'R003', 'Très beau pyjama', '19.99', 'https://gloimg.drlcdn.com/L/pdm-product-pic/Clothing/2017/11/11/goods-img-app/1510515212107832415.jpg', 'Pyjamas');
  let article4 = new Article('Pyjama', 'R004', 'Magnifique pyjama', '19.99', 'https://www.moa.fr/68609-thickbox_default/chaussettes-noel-cerf.jpg', 'Chaussettes');
  let article5 = new Article('Chausson du père noël', 'R005', 'Beaux chaussons', '9.99', 'https://images-na.ssl-images-amazon.com/images/I/61U8ukNKaJL._SY355_.jpg', 'Accessoires');

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
