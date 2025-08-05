$(document).ready(function(){
  
  $(".submitform").keyup(function(){

    var bankname = $("#bankname").val();
    $('.bankname').text(bankname);

   var somestring = $("#cardnumber").val();
   var cardnumber =  somestring.replace(/(\d{4})/g, '$1 ').replace(/(^\s+|\s+$)/,'');
    $('.cardnumber').text(cardnumber);

   var datemm = $("#datemm").val();
   var dateyy = $("#dateyy").val();
    $('#validthru').text(datemm+"/"+dateyy);
    $('.validthru').show();

    var customername = $("#customername").val();
    $('.customername').text(customername);

		});

  	document.getElementById("octane").onchange = function() {

  	
  		switch (this.value) {
		  case "American Express":
		  $('#cardlogo').attr('src','amex.png');
		    break;
		  case "Diners Club":
		  $('#cardlogo').attr('src','dinersclub.png');
		    break;
		  case "Discover":
		  $('#cardlogo').attr('src','discover.png');
		    break;
		  case "JCB":
		  $('#cardlogo').attr('src','jcb.png');
		    break;
		  case "MasterCard":
		  $('#cardlogo').attr('src','mastercard.png');
		    break;
		  case "Visa":
		  $('#cardlogo').attr('src','visa.png');
		    break;
      case "Rupay":
      $('#cardlogo').attr('src','rupay.png');
        break;
      case "unionpay":
      $('#cardlogo').attr('src','unionpay.png');
        break;
			}
   
		};

    document.getElementById("type").onchange = function() {

    //alert()
      switch (this.value) {
      case "creditcard":
      $('.cardtype').text('Credit card');
        break;
      case "debitcard":
      $('.cardtype').text('Debit card');
        break;
      }
   
    };

    document.getElementById("color").onchange = function() {

    //alert()
      switch (this.value) {
      case "blue":
      $('.card').css('background-color',"#0079BF");
        break;
      case "grey":
      $('.card').css('background-color',"#848688");
        break;
      case "maroon":
      $('.card').css('background-color',"#900C3E");
        break;

        
      }
   
    };


	 $("#btnSave").click(function() { 
        var scaleBy = 100;
        var w = 1000;
        var h = 1000;
        var div = document.querySelector('.card');
        var canvas = document.createElement('canvas');
        canvas.width = w * scaleBy;
        canvas.height = h * scaleBy;

        canvas.style.width = w + 'px';
        canvas.style.height = h + 'px';
        var context = canvas.getContext('2d');
        context.scale(scaleBy, scaleBy);
      
        html2canvas(div, {
            canvas:canvas,

            onrendered: function(canvas) {
            
                //document.body.appendChild(canvas)

                // Convert and download as image 
             // return Canvas2Image.saveAsPNG(canvas);
             	/*Canvas2Image.saveAsPNG(canvas); 
                $("#img-out").append(canvas);*/

        var img = canvas.toDataURL();

		$('#img-out').append('<img src="'+img+'"/>');
     	
            }
        });
        $('.info').show();
        $("html, body").animate({ scrollTop: $(document).height() }, 500);
    });    
   });

