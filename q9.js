$('#create').click(function(){
	var value=$('<li>').val()
	if ($("#input1").prop('checked') &&  $("#input2").prop('checked') && $("#input3").prop('checked')){
		$(('#ul').append('<li>  class:black')+ value).text(balck)
	}
	if(($("#input1").prop('checked') &&  $("#input2").prop('checked')) || (($("#input1").prop('checked') &&  $("#input3").prop('checked')) || (($("#input3").prop('checked') &&  $("#input2").prop('checked'))
		$(('#ul').append('<li>  class:purple,green,orange')+ value).text()
	}
	if($("#input1").prop('checked') || $("#input2").prop('checked') || $("#input3").prop('checked')
		$(('#ul').append('<li>  class : yellow, blue, red')+ value).text()
	}
})






$('#delete').click(function(){

var value=$('<li>').val()
	if ($("#input1").prop('checked') &&  $("#input2").prop('checked') && $("#input3").prop('checked')){
		$(('#ul').remove('<li>')
	}
	if(($("#input1").prop('checked') &&  $("#input2").prop('checked')) || (($("#input1").prop('checked') &&  $("#input3").prop('checked')) || (($("#input3").prop('checked') &&  $("#input2").prop('checked'))
		$(('#ul').remove('<li>')
	}
	if($("#input1").prop('checked') || $("#input2").prop('checked') || $("#input3").prop('checked')
		$(('#ul').remove('<li>')
	}
})