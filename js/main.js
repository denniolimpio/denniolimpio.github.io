// esercizio
// creare uno slider di immagini e personalizzare l'html

//apro document
$(document).ready (

  function() {

    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
      $(".burger").animate({width:'toggle'},350);
		$(this).toggleClass('open');
    $('.burger').toggleClass('visibile');

	});

    // SCHERMATA CARICAMENTO

    $('body').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');
    $(window).on('load', function(){
      setTimeout(removeLoader, 3000); //
    });
    function removeLoader(){
      $( "#loadingDiv" ).slideUp(500, function() {
        // fadeOut complete.  Lo sfondo scorre verso l alto
        $( "#loadingDiv" ).remove(); //makes page more lightweight
      });
    }




    // burger menu DA IMPLEMENTARE





    // DROPDOWN EFFETTI

    $(".with-dropdown").mouseenter(
      function(){

        $(this).children(".dropdown").addClass("active");


      });

      // Se sposto  il mouse da un elemento con dropdown visibile  questo si chiude

      $(".with-dropdown").mouseleave(

        function () {
          $(this).children(".dropdown").removeClass("active");

        });


        // Con un doppio click chiudo il menu a comparsa se è aperto,
        // altrimenti lo apro.

        $(".with-dropdown").dblclick(

          function(){

            if( $(".dropdown").hasClass("active") ) {
              $(this).children(".dropdown").removeClass("active");

            } else {
              $(this).children(".dropdown").addClass("active");

            }
          })







          //  CAROSELLO

          // cliccando sul tasto freccia destra genero un evento

          // slider img successiva
          $(".next").click (

            function() {
              immagineSuccessiva();

            });

            // cliccando sul tasto freccia sinistra genero un evento

            // slider img precedente
            $(".prev").click (

              function() {
                immaginePrecedente();


              });



            });

            //funzioni


            // #funzione1
            function immagineSuccessiva() {


              // definisco la mia variabile riferita all'immagine che al momento risulta selezionata,visibile
              var immagineSelezionata = $(" .images img.active ");
              var cerchioAttivo = $( ".nav i.active");

              // rimuovo la classe " active" all'elemento che al momento è visibile e(..)
              immagineSelezionata.removeClass("active");
              cerchioAttivo.removeClass("active");


              //Se immagineSelezionata e cerchioAttivo ha classe "last", allora aggiungo al'elemento con classe "first" , la classe "active".
              //In questo modo dopo l'ultima immagine riappare la prima.

              if(immagineSelezionata.hasClass("last")){
                $(".images img.first").addClass("active");
                $(".nav i.first").addClass("active");

              } else {
                // aggiungo la classe " active" all'immagine successiva.

                immagineSelezionata.next().addClass("active");
                cerchioAttivo.next().addClass("active");

              }

            };


            //ho bisogno di una funzione che, cliccando sulla freccia sx, mi permetta di passare dall'immagine corrente a quella precedente
            // questa stessa funzione deve evidenziare il cerchietto dell'immagine che è visibile in quel momento.

            // #funzione 2


            function immaginePrecedente() {

              // definisco la mia variabile riferita all'elemento che al momento risulta selezionata,visibile

              var immagineSelezionata = $(".images img.active");
              var cerchioAttivo = $( ".nav i.active");

              // rimuovo la classe " active" all'elemento che al momento è visibile e(..)
              immagineSelezionata.removeClass("active");
              cerchioAttivo.removeClass("active");


              //Se immagineSelezionata e cerchioAttivo  ha classe "first", allora aggiungo al'elemento con classe "last" , la classe "active"
              //In questo modo dopo la prima immagine riappare l'ultima.


              if(immagineSelezionata.hasClass("first")) {
                $(".images img.last").addClass("active");

                $ (".nav i.last").addClass("active");

              } else {


                immagineSelezionata.prev().addClass("active");
                cerchioAttivo.prev().addClass("active");
              }
            }

            //chiudo document
