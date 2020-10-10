var movies = JSON.parse(object);

console.table(movies);



for (let i = 0; i < movies.length; i++) {
    document.getElementById("content").innerHTML += `<section class="col-md-5 flexy">
    						<div class="pic">
    						<img src="${movies[i].image}">
    						</div>
    						<div class="text">
    						<h4>${movies[i].movie}</h4>
    						<p>${movies[i].description}</p>
    						<p class="likes" style="color:green;">Like
                            <button type="button" class="btn btn-default btn-likes" id="${i}" style="color:green;">&#128077;</button>
                            <span class="number">${movies[i].likes}</span>
                            </p> </div> </section>`
};

$(document).ready(function(){
    $(".btn-likes").on("click", function(){
        var counter = $(this).attr("id");
        movies[counter].likes += 1;
        $(this).parent().find(".number").html(movies[counter].likes);
    });

    $('.btn-sort').click(function(){
    var arr = {};
    $.each($('.flexy'), function(ii, n){
        console.log(n);
        arr[$(this).find('.number').html()] = n;
    });
      $(arr).sort();
        $('.flexy').remove();
        $.each (arr, function(i, v){
            $(v).appendTo('#content');
        })
    })

});



