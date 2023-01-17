$('#boton').click(() => {
  var friendList = $('#lista') ;
  $.get('http://localhost:5000/amigos', data => {
    data.forEach(userData => {
      friendList.append(<li>userData.name</li>)
    });
  })
})
