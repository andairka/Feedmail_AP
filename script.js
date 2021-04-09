function onSaveButtonClick() {
    // $( "#save-button" ).click(function() {
    alert( "save button click" );
    //   });
}

function onAddButtonClick() {
   var listaRss = $( "#listaRSS" );
   let toAddPrefix = '<input type="text" readonly class="form-control-plaintext" value="';
   let toAddSufix = '">';
   let rss = $( "#rssUrlToAdd" ).val();
   if (rss !== '') {
        //    alert(toAddPrefix + rss + toAddSufix)
        listaRss = listaRss.append(toAddPrefix + rss + toAddSufix);
        $( "#rssUrlToAdd" ).val('');
   }
}

function onPreviewButtonClick() {
    var listaRss = $( "#listaRSS" );
    let listaUrlRSS = [];
    listaRss.children('input').each(function(i) {
        // let val = $('#textarea').val();
        // $('#textarea').val(val + ' \n ' +this.value);
        listaUrlRSS.push(this.value);
    });

    console.log(listaUrlRSS);
    // Server call GET/POST z lista

    // Odpowiedz zapisz do textarea
    // $('#textarea').val('odpowiedz');
}

function onSendButtonClick() {
    // $( "#send-button" ).click(function() {
    alert( "send button click" );
    //   });
}