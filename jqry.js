$(document).ready(function(){

    $(document).on('click', '.btn-outline-warning', function () {

        $('.bg-danger').addClass('bg-warning');
        $('.bg-danger').removeClass('bg-danger');

    
      $('.bg-primary').addClass('bg-warning')
      $('.bg-primary').removeClass('bg-primary')
     
    });

    $(document).on('click', '.btn-outline-primary', function () {

        $('.bg-danger').addClass('bg-primary');
        $('.bg-danger').removeClass('bg-danger');

        $('.bg-warning').addClass('bg-primary')
        $('.bg-warning').removeClass('bg-warning')

     
    });


})









