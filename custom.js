jQuery(document).ready(function ($) {

    $('.one').hide();

    $.ajax({
        type: "GET",
        url: "https://reqres.in/api/users?page=" + 1,

        success: function (res) {
            $('.container').html('');
            for (var a = 0; a < res.data.length; a++) {
                $('.container').append(' <div class="single-data"> <p class="avatar"> <img src="' + res.data[a].avatar + '" alt=""> </p> <p class="id">' + res.data[a].id + '</p> <p class="firstname ">' + res.data[a].first_name + '</p> <p class="lastname ">' + res.data[a].last_name + '</p> <p class="email">' + res.data[a].email + '</p> </div>');
            }

        }
    });



    $('.two').click(function () {
        $.ajax({
            type: "GET",
            url: "https://reqres.in/api/users?page=" + 2,

            success: function (res) {
                $('.container').html('');
                for (var a = 0; a < res.data.length; a++) {
                    $('.container').append(' <div class="single-data"> <p class="avatar"> <img src="' + res.data[a].avatar + '" alt=""> </p> <p class="id">' + res.data[a].id + '</p> <p class="firstname ">' + res.data[a].first_name + '</p> <p class="lastname ">' + res.data[a].last_name + '</p> <p class="email">' + res.data[a].email + '</p> </div>');
                }

            }
        });


        $('.two').hide();
        $('.one').show();
    });

    $('.one').click(function () {
        $.ajax({
            type: "GET",
            url: "https://reqres.in/api/users?page=" + 1,

            success: function (res) {
                $('.container').html('');
                for (var a = 0; a < res.data.length; a++) {
                    $('.container').append(' <div class="single-data"> <p class="avatar"> <img src="' + res.data[a].avatar + '" alt=""> </p> <p class="id">' + res.data[a].id + '</p> <p class="firstname ">' + res.data[a].first_name + '</p> <p class="lastname ">' + res.data[a].last_name + '</p> <p class="email">' + res.data[a].email + '</p> </div>');
                }

            }
        });

        $('.one').hide();
        $('.two').show();
    });

});