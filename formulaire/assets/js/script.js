$(function(){
    $('.formDeliveryAdress, .formPayment').hide();
    $('#buttonContact').click(function(event){
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

        if(!checkName.test(name)){
            isValid = false;
            var span = $('<span></span>');
            span.addClass('text-danger');
            span.text('Veuillez entrer un nom valide');
            $('#name').after(span);
        }
        if(!checkFirstName.test(firstName)){
            isValid = false;
            var span = $('<span></span>');
            span.addClass('text-danger');
            span.text('Veuillez entrer un prénom valide');
            $('#firstName').after(span);
        }

        if(!checkMail.test(mail)){
            isValid = false;
            var span = $('<span></span>');
            span.addClass('text-danger');
            span.text('Veuillez entrer un mail valide');
            $('#mail').after(span);
        }
        if(!checkPhone.test(phone)){
            isValid = false;
            var span = $('<span></span>');
            span.addClass('text-danger');
            span.text('Veuillez entrer un numéro de téléphone valide');
            $('#phoneNumber').after(span);
        }

        if(!isValid){
            event.preventDefault();
        }
        if (isValid){
          // alert('gagné');
            $('.formDeliveryAdress').show();
            // event.preventDefault();
        }
    });
  $('#buttonDelivery').click(function(event){
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

      if(!checkStreetNumber.test(streetNumber)){
          isValid = false;
          var span = $('<span></span>');
          span.addClass('text-danger');
          span.text('Veuillez un numéro de rue valide');
          $('#streetNumber').after(span);
      }
      if(!checkAdress.test(adress)){
          isValid = false;
          var span = $('<span></span>');
          span.addClass('text-danger');
          span.text('Veuillez entrer une adresse valide');
          $('#adress').after(span);
      }

      if(!checkZipCode.test(zipCode)){
          isValid = false;
          var span = $('<span></span>');
          span.addClass('text-danger');
          span.text('Veuillez entrer une adresse postale valide');
          $('#zipCode').after(span);
      }
      if(!checkcity.test(city)){
          isValid = false;
          var span = $('<span></span>');
          span.addClass('text-danger');
          span.text('Veuillez entrer une ville valide');
          $('#city').after(span);
      }

      if(!isValid){
          event.preventDefault();
      }
      if (isValid){
        // alert('gagné');
          $('.formPayment').show();
          // event.preventDefault();
      }

  });
  $('#buttonPayment').click(function(event){
      var isValid = true;

      var nameOnCard = $('#nameOnCard'). val();
      var cardNumber = $('#cardNumber').val();
      var expiryDate = $('#expiryDate').val();
      var securityCode = $('#securityCode').val();

      var checknameOnCard = /^[A-Z][a-zéèçàïîêëôöûü]+([ -][A-Z][a-zéèçàïîêëôöûü]+)?$/;
      var checkcardNumber = /^[0-9]{16}$/;
      var checkexpiryDate = /^[0-9]{2}\/+([0-9]){2}$/;
      var checksecurityCode = /^[0-9]{3}$/;

      $('form span.text-danger').remove();

      if(!checknameOnCard.test(nameOnCard)){
          isValid = false;
          var span = $('<span></span>');
          span.addClass('text-danger');
          span.text('Veuillez un nom valide');
          $('#nameOnCard').after(span);
      }
      if(!checkcardNumber.test(cardNumber)){
          isValid = false;
          var span = $('<span></span>');
          span.addClass('text-danger');
          span.text('Veuillez entrer un numéro de carte valide');
          $('#cardNumber').after(span);
      }

      if(!checkexpiryDate.test(expiryDate)){
          isValid = false;
          var span = $('<span></span>');
          span.addClass('text-danger');
          span.text('Veuillez entrer une date valide');
          $('#expiryDate').after(span);
      }

      if(!checksecurityCode.test(securityCode)){
          isValid = false;
          var span = $('<span></span>');
          span.addClass('text-danger');
          span.text('Veuillez entrer un cryptogramme valide');
          $('#securityCode').after(span);
      }

      if(!isValid){
          event.preventDefault();
      }
      if (isValid){
        alert('Confirmation de votre commande')
      }
  });
});
