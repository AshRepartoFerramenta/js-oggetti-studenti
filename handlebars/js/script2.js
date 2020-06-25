$(document).ready(function () {
  $(".invia").click(function () {
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);

    var userName = $("#add-message").val();
    var context = {
      name: userName,
    };
    var html = template(context);

    $(".name-list").append(html);
  });
});
