$().ready(function () {

  $('form').submit(function (e) {
    e.preventDefault();
    $.getJSON(
    this.action + "?callback=?",
    $(this).serialize(),
      function (data) {
        if (data.Status === 400) {
          // alert("Error: " + data.Message);
          alert("Ooops! Desculpe mas o email fornecido é inválido e precisa ser corrigido.")
        } else { // 200
          $('#js-form-interessados').hide();
          $('#js-form-success').fadeIn();
          // alert("Success: " + data.Message);
        }
    });
  });

});
