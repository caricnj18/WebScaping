
$.getJSON("/articles", function(data) {
    for (var i = 0; i < data.length; i++) {
      $("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].summary + "<br />" + data[i].url + "</p>");
    }
  });
  
  
  $(document).on("click", "p", function() {
   
    $("#lists").empty();
   
    var thisId = $(this).attr("data-id");
  
    $.ajax({
      method: "GET",
      url: "/articles/" + thisId
    })
      
      .then(function(data) {
        console.log(data);
      
        $("#note").append("<h2>" + data.title + "</h2>");
        
        $("#note").append("<input id='titleinput' name='title' >");
        
        $("#note").append("<textarea id='bodyinput' name='body'></textarea>");
         
        $("#note").append("<button data-id='" + data._id + "' id='savenote'>Save Note</button>");
  
        
        if (data.list) {
         
          $("#headinginput").val(data.list.heading);
         
          $("#summaryinput").val(data.list.summary);

          $("#urlinput").val(data.list.url);
        }
      });
  });
  

  $(document).on("click", "#savenote", function() {
    
    var thisId = $(this).attr("data-id");
  
    
    $.ajax({
      method: "POST",
      url: "/articles/" + thisId,
      data: {
      
        heading: $("#headinginput").val(),

        summary: $("#summaryinput").val(),
        
        url: $("#urlinput").val()
      }
    })
   
      .then(function(data) {
        
        console.log(data);
      
        $("#notes").empty();
      });
  

    $("#headinginput").val("");
    $("#summaryinput").val("");
    $("#urlinput").val("");
  });
  