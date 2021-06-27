   function calculate_carbs() {
       
       var protein = parseFloat(document.getElementById('protein').value);
       
         if ( $("#protein").val().length == 0 ) {
            alert("You didn't put protein percent.");
            $("#protein").focus();
            return;
     }
       
       var fat = parseFloat(document.getElementById('fat').value);
        
         if ( $("#fat").val().length == 0 ) {
            alert("You didn't put fat percent.");
            $("#fat").focus();
            return;
     }
         var moisture = parseFloat(document.getElementById('protein').value);
       
           if ( $("#moisture").val().length == 0 ) {
            alert("You didn't put moisture percent.");
            $("#moisture").focus();
            return;
     }
       
        var ash = parseFloat(document.getElementById('fat').value);
        
           if ( $("#ash").val().length == 0 ) {
            alert("You didn't put ash percent.");
            $("#ash").focus();
            return;
     }
        
       
        var carbs = 100-(protein + fat + moisture + ash);
        document.getElementById('carbs').value = carbs;
         
    }