$(document).ready(function(){
	returnDateCheck();
	
});
function returnDateCheck(){
	 var today = new Date(); 
	 	var ss = today.getSeconds();
	 	var mm = today.getMinutes()<10 ? "0"+ today.getMinutes():today.getDate().toString();
	 	var hh = today.getHours();
	    var dd = today.getDate() < 10 ? "0" + today.getDate() : today.getDate().toString();  
	    var MM = today.getMonth()+1 < 10 ? "0" + (today.getMonth()+1) : today.getMonth()+1;  
	    var yyyy = today.getFullYear().toString();
	    var ct = yyyy+'-'+MM+'-'+dd+' '+hh+':'+mm+':'+ss;
	    var si = yyyy+MM+dd+hh+mm+ss;
	    $("#sellReturnId").val(si);
	    $("#returnDate").val(ct);
	  
	 
}

	

