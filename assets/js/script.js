$(function(){
  class Article {
  constructor(nom, reference, description, prix, image){
  this.nom = nom;
  this.reference = reference;
  this.description = description;
  this.prix = prix;
  this.image = image;
  }
}
  let article1 = new Article('Pere noel', '#001', 'Costume', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');

  var mon_array = [];
  mon_array.push(article1);
  mon_array.push(article1);
  var LongueurTableau = (Object.keys(mon_array).length);

for (var i = 0; i < LongueurTableau; i++) {
  console.log(mon_array[i].nom);
  $('.contenu').html(`<!-- PROMO CARD DEBUT -->
  <div class="col-11 col-md-2 card cardBorder">
   <div class="card_article_img" data-toggle="modal" data-target="#promo03"><img src="${mon_array[i].image}" alt="famille portant chacun un pyjama rouge avec des visages de rennes"></div>
   <div class="card_article_text"><p class="articleTitle">${mon_array[i].nom}"</p><p class="text-success">9,99€</p><p class="text-danger"><s>19,99€</s></p>
     <!-- MODALE -->
     <button type="button" class="btn btnCustomAnthony" data-toggle="modal" data-target="#promo03">Plus d'infos</button>
     <div id="promo03" class="modal fade" tabindex="-1" role="dialog"
     aria-labelledby="myHugeModalLabel" aria-hidden="true">
     <div class="modal-dialog modal-xl">
       <div class="modal-content rounded flex-row flex-wrap justify-content-center p-3">
         <img class="d-block img-thumbnail modalPictures" src="${mon_array[i].image}" alt="famille portant chacun un pyjama rouge avec des visages de rennes">
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
});
