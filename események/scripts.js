$('#1').on('click', () => {
    console.log('Igen, most rámkattintottál')
})
$('#2').on('click', () => {
    $('#1').text('baba')
})
$('#3').on('click', () => {
    console.log($('input').val())
    $('button').css('background','purple')
    
})
