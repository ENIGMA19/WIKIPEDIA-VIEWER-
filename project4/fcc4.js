
function ser()
{
document.getElementById('sbox').focus();
}

function result()
{
	$("#sbox").addClass('red');
	var keyword=document.getElementById('sbox').value;
	
		$.ajax({ 
		url:"https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keyword + "&prop=info&inprop=url&utf8=&format=json",
		dataType: "jsonp",
		success: function(response)
			 {
			 			if(keyword!="")

					{
						if((response.query.searchinfo.totalhits)!=0)
						{
								$("#results").removeClass('hidden');
								$("#error1").addClass('hidden');
								$("#error").addClass('hidden');

							for (var m = 0; m <=6; m++)
							{
								var title = response.query.search[m].title;
						
		                		var url = title.replace(/ /g, "_");
		                
		               
		                
		                $("#t" + (m+1)).html("<a href='https://en.wikipedia.org/wiki/" + url + "' target='_blank'>" +title+ "</a>");
						$("#c" + (m+1)).html( response.query.search[m].snippet);
							}
						}
						else
								{
										$("#results").addClass('hidden');
										$("#error1").addClass('hidden');
										$("#error").removeClass('hidden');
								}

					}
					else
					{
						$("#results").addClass('hidden');
						$("#error").addClass('hidden');
						$("#error1").removeClass('hidden');
					}			

			},
						
		error: function () {
			alert("Error retrieving search results, please refresh the page");
		}
	});
}

