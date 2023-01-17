$('#button').click(() => {
  var friendList = $('#list');
  friendList.empty()
  $.get('http://localhost:5000/amigos/', data => {
    data.forEach(userData => {
      friendList.append(`<li>${userData.name}</li>`)
    });
  })
})

$('#search').click(() => {
  var id = $('#input').val()
  $.get(`http://localhost:5000/amigos/${id}`, data => {
    $('#amigo').text(data.name)
  })
})

$('#delete').click(() => {
  var id = $('#inputDelete').val()
  $.ajax({
    url: `http://localhost:5000/amigos/${id}`,
    type: 'DELETE',
    success: () => $('#success').text(`Tu amigo fue eliminado con éxito`)
  })
})

