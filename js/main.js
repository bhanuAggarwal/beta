function getEventList(category) {
	$('#eventList').html("<li class='grid-sizer'></li>");
	console.log(category);
	$.ajax({
		type:'GET',
		data: {'category':category},
		url:'php/getEventList.php',
		success: function(eventObject) {
					//console.log(eventObject);
					
					$('#container').html('<header class="clearfix"><img src="images/Events.png" align="center" style="margin-left:28%; height:200x; width: 500px;"></header>');
					var key = 0;
					eventList = JSON.parse(eventObject,function(id,name) {
						//console.log(name);
						if(key == 0) {
							$('#eventList').append(	
								'<li id="event'+id+'">'+
									'<figure>'+
										
										'<figcaption><h3>'+name+'</h3></figcaption>'+
									'</figure>'+
								'</li>'
							//'<button type="button" class="btn btn-default margin10 col-md-2 col-sm-3 col-xs-10 " data-toggle="modal" data-target="#myModal" onClick="eventDetail('+id+')" id="event'+id+'" >'+name+'</button>'
							);
							$('#slideshow').append(
								'<li >'+
									'<figure>'+
										'<figcaption>'+
											'<h3 align="center">'+name+'</h3>'+
										'</figcaption>'+
										'<iframe onload="getEventDetail('+id+')" id="frame'+id+'" src="conf_menu/index.html" width="100%" height="140%" style="border:#000 solid 5px;position:relative;top:10%"></iframe>'+
									'</figure>'+
								'</li>'
							);
							key = 1;


						}
						else{
							key = 0;
						}
					});
					$('#event').remove();
					new CBPGridGallery( document.getElementById( 'grid-gallery' ) );
					
				}
	
	});

}

//getEventList();

function getEventDetail(eventid) {
	$.post("php/getdetail.php",{'eventID':eventid},function(dataObject) {
		var frameid = "#frame" + eventid;
		details = JSON.parse(dataObject);
		if(details['description'] != "") {
			$(frameid).contents().find("#about").html(details['description']);	
		}
		if(details['rules'] != "") {
			$(frameid).contents().find("#rules").html(details['rules']);
		}
		if(details['venue'] != "") {
			$(frameid).contents().find("#venue").html(details['venue']);
		}
		if(details['coordinator1'] != "") {	
			$(frameid).contents().find("#contact").html(
				"<div>" +
					details['coordinator1'] +" : " + details['phone1'] +"<br/>"+
					details['coordinator2'] +" : " + details['phone2'] +"<br/>"+
				"</div>"
			);
		}
	});
}