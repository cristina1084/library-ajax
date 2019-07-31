$(document).ready(function(){             //jQuery
    $("#load").hide();
    $("#btn1").click(function(){
        $.ajax({                        //AJAX format
            type:"GET",                 //type mentions the method to be used 
            url :"librarydata.json",         //can provide API link
            beforeSend : function(){
                $("#load").show();
            },
            success : function(data){
                $("#load").hide();
                var card="<div class='card-deck'>";
                for (var j in data){
                    card+="<div class='card'> <img class='card-img-top' src=" + data[j].urlToImage + "alt='Card Image cap'>";
                    card+="<div class='card-body'> <h5 class='card-title'>"+ data[j].bookTitle +"</h5>";
                    card+="<h6 class='card-subtitle mb-2 text-muted'>" + data[j].author +"</h6>";
                    card+="<p class='card-text'>"+ data[j].description + "</p>";
                    card+="<p class='card-text'> <span class='font-weight-bold'> Address : </span>  "+ data[j].address.street +", "+ data[j].address.suite +", "+data[j].address.city +", "+data[j].address.zipcode + "</p>";
                    card+="<a href='#' class='btn btn-primary '>"+ data[j].price+"</a></div></div><br>";
                }
                $(".results").html(card);
            }         
        });
    });
});