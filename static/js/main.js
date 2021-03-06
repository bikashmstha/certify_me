$(document).ready(function() {
  $.get('/permission_partial', function(res){
    if (res.error) {
      window.location.assign('/')
    } else {
      $('.main_content').html(res);
    }

  })
  //expand sidebar menu when hamburger is clicked
  $('.fa-bars').click(function(){
    $('.sidebar_content').toggle('slow');
  });
  //when add `user link is clicked, load add user partial
  $('.add_user').click(function() {
    $.get('/index/add_user', function(res) {
      if (res.error) {
        window.location.assign('/')
      } else {
        $('.main_content').html(res);
      }
    })
  });
  $('.users').click(function(){
    $.get('/index/users', function(res){
      if(res.error) {
        window.location.assign('/')
      } else {
        $('.main_content').html(res);
      }
    })
  })
  //add update client
  $('.update_client').click(function(){
    var business_id = $(this).attr('data-client-id')
    console.log(business_id);
    $.get('/index/client/' + business_id, function(res){
      if(res.error) {
        window.location.assign('/')
      } else {
        $('.main_content').html(res)
      }
    })
  })

  //when choose client is clicked, load choose client partial
  $('.choose_business').click(function() {
    $.get('/index/choose_business', function(res) {
      if (res.error) {
        window.location.assign('/');
      } else {
        $('.main_content').html(res);
      }
    })
  });
  //when add client link is clicked, load add client partial
  $('.add_client').click(function() {
    $.get('/index/add_client', function(res) {
      if (res.error) {
        window.location.assign('/');
      } else {
        $('.main_content').html(res);
      }
    })
  });
  //when view clients is clicked, load view clients partial
  $('.clients').click(function(){
    $.get('/index/clients', function(res) {
      if(res.error) {
        window.location.assign('/');
      } else {
        $('.main_content').html(res);
      }
    })
  });
  //when user profile is clicked, load user partial
  $('.show_user').click(function(){
    var id = $(this).attr('data-user-id')
    $.get('/index/user/' + id, function(res) {
      if(res.error) {
        window.location.assign('/');
      } else {
        $('.main_content').html(res);
      }
    })
  });
  //when new seminar is clicked, load add class partial
  $('.add_class').click(function() {
    $.get('/index/add_class', function(res) {
      if (res.error) {
        window.location.assign('/')
      } else {
        $('.main_content').html(res);
      }
    })
  });
  $('.classes').click(function() {
    $.get('/index/classes', function(res){
      if (res.error) {
        window.location.assign('/')
      } else {
        $('.main_content').html(res);
      }
    })
  })
  //when generate pdf is clicked, load choose pdf partial
  $('.generate_certs').click(function() {
    $.get('/index/certificates', function(res) {
      if (res.error) {
        window.location.assign('/')
      } else {
        $('.main_content').html(res);
      }
    })
  });
  $('.test').click(function(){
    // console.log("clicked test")
    $.get('/index/test', function(res){
      // console.log("got response", res)
      $('.main_content').html(res);
    })
  })

});
