$(document).ready(function(){             //jQuery
    $("#load").hide();
    $("#tp1").click(function(){
        $.ajax({                        //AJAX format
            type:"GET",                 //type mentions the method to be used 
            url :"librarydata.json",         //can provide API link
            beforeSend : function(){
                $("#load").show();
            },
            success : function(data){
                $("#load").hide();
                console.log(data);
                
                var card="<div class='card-deck'>";
                for (var j in data){
                    card+="<div class='card'> <img class='card-img-top' style='width:50px;height:100px;' src=" + data[j].urlToImage + ">";
                    card+="<div class='card-body'> <h5 class='card-title'>"+ data[j].bookTitle +"</h5>";
                    card+="<h6 class='card-subtitle mb-2 text-muted'>" + data[j].author +"</h6> ";
                    card+="<p class='card-text'>"+ data[j].description + "</p> </div>";
                    card+="<div class='card-footer'>"+ data[j].price+"</div></div>";
                }
                card+="</div>";
                $(".results").html(card);
            }         
        });
    });
});