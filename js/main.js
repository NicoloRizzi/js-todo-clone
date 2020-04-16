/****************************************
 * ESERCIZIO TODO LIST:
 * 
 ***************************************/
$(document).ready(function (){
  // ARRAY CONTENTENTE TODO
  var todoItems = [
    'Item1',
    'Item2',
    'Item3',
  ];

  // referenza alla lista
  var list = $('.todo')

  // referenza sull'input
  var newInput = $('input.add-element')

  // ITERO NELL'ARRAY PER LEGGERE OGNI ELEMENTO
  for(var i=0; i < todoItems.length; i++) {
    // inizializzo una variabile che conterrà la copia del template creato
    var elementList = $('.template li').clone();
    // aggiungere testo dinamico al template tramite metodo prepend per metterlo prima dell'elmento html
    elementList.prepend(todoItems[i]);
    

    // aggiungere il clone alla lista
    list.append(elementList);
  }

  // rimozione todo item
  //referenza al click sulla i
  var trash = $('body').on('click','.todo li i', function() {
    $(this).parent().remove();
  });


  // aggiunta di un nuovo list item 
  newInput.keyup(function (e) { 
    console.log(e.which);
    if (e.which == 13 || e.keyCode == 13) {
      var text = $(this).val().trim();
      console.log(text);
      if(text !== ''){
        var elementNew = $('.template li').clone();
        elementNew.prepend(text);
        list.append(elementNew);


        // clear dell'input
        newInput.val('');
      }
      
    }
    
  });

}); /* END DOC READY */