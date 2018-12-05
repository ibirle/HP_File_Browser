$(document).ready(function(){
	$('#systems-table').DataTable({
		scrollY:        400,
		scrollCollapse: true,
		paging:         false,
		"order": 		[[ 0, "asc"]], 
		fixedColumns:   {
			heightMatch: 'none'
		}
	});
	
	$(".capacity").each(function(){
		var capacity_string = $(this).html();
		var capacity = capacity_string.substr(0, capacity_string.length - 1)/100.0;		
		capacity /= 0.3 
		if (capacity > 1){
			return;
		}
		var color = "rgba(" + 220 + ","
							+ 0 + "," 
							+ 0 + ","
							+ ((1-capacity)*0.5 + 0.2) + ")";
		$(this).css("background-color", color);
	})
	
});

$(window).resize(function(){
	$('#systems-table').DataTable().draw();
});
