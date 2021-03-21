let nevek = ['Baba','Bebe','Bibi','Bobo']
nevek.forEach(function (név) {
$('ul').append('li')
$('ul li:last-of-type').text(név)
})

let additionalBlock = {
    title: "Beillesztve JavaScripttel",
    text: "Ez a blokk a JavaScript jQuery könyvtárával lett beillesztve. Király!"
  };
function() {
    $('main').append('<h1>"title"</h1>')
    $('main').append('<p>"text"</p>')
}