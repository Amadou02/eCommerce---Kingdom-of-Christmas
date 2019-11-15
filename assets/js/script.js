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
  let accessoire01 = new Article('Serre-tête du renne', '#001', 'Un fabuleux serre-tête qui annoncera votre amour inconditionnel pour votre renne favori. Les douces ramures et les oreilles aux aguets devraient attirer sans soucis les regards de tous vos convives.', '9.99', 'assets/img/accessoire01.jpg');
  let accessoire02 = new Article('Gants rouges à fourrure blanche', '#002', 'Description', '14.99', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let accessoire03 = new Article('Pere noel', '#003', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let accessoire04 = new Article('Pere noel', '#004', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let accessoire05 = new Article('Pere noel', '#005', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let chaussettes01 = new Article('Pere noel', '#006', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let chaussettes02 = new Article('Pere noel', '#007', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let chaussettes03 = new Article('Pere noel', '#008', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let chaussettes04 = new Article('Pere noel', '#009', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let chaussettes05 = new Article('Pere noel', '#010', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let deguisement01 = new Article('Pere noel', '#011', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let deguisement02 = new Article('Pere noel', '#012', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let deguisement03 = new Article('Pere noel', '#013', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let deguisement04 = new Article('Pere noel', '#014', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let deguisement05 = new Article('Pere noel', '#015', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
  let pull01 = new Article('Pere noel', '#016', 'Description', 'prix', 'https://cdn.deguisetoi.fr/images/rep_art/gra/206/3/206366/deguisement-pere-noel-costume-adulte_206366.jpg');
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
