//initially alerts should be hidden
$(".alert").hide();

//for closing alerts
$(".alert.alert-success").click(function(){
    $(".alert.alert-success").hide();
});
$(".alert.alert-warning").click(function(){
    $(".alert.alert-warning").hide();
});



var page1 = [1,2,3,4,5,6,7];
page1.forEach(function(index) {
	var text_box_id = "q".concat(index,"p1");
	var get = {}
	get[text_box_id] = '';
	var text = document.getElementById(text_box_id);
	getValues(get, function (value) {text.value = value[text_box_id]});
});
function getValues(text_box_id, callback) {chrome.storage.sync.get(text_box_id, callback);}

//for (i=1 ; i < 8; i++) {
	
	
//}




document.getElementById('save_form').addEventListener('click', function() {
    // var page_36 = "http://www.youtube.com";
    // chrome.tabs.create({ url: page_36 });
    $(".alert").hide();
    //chrome.storage.sync.set({"q7p1": document.getElementById("q7p1").value});
    page1.forEach(function(index) {
    	var text_box_id = "q".concat(index,"p1");
		var text = document.getElementById(text_box_id);
		var save = {};
		if(text) save[text_box_id] = text.value;
		else save[text_box_id] = '';


		chrome.storage.sync.set(save, function(){
        	console.log(save);
    	});
		
	});

    
	$(".alert.alert-success").show();

    


  });