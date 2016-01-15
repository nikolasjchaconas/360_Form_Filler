var page1 = ["responses_311246",
"responses_311229",
"responses_311230",
"responses_311232",
"responses_311234",
"responses_311236",
"responses_311237"];

page1.forEach(function(key,index) {
	var text_box_id = "q".concat(index + 1,"p1");
	var get = {}
	get[text_box_id] = '';
	var text = document.getElementById(key);
	getValues(get, function (value) {text.value = value[text_box_id]});
});
function getValues(text_box_id, callback) {chrome.storage.sync.get(text_box_id, callback);}

var save_to_template_button =
    '<span><button class="button green" id="SaveToTemplate"/>Save To 360 Extension Template &amp Continue</span>';

//var alert = 

 
 document.getElementsByClassName('button-row qna-actions')[0].insertAdjacentHTML('beforebegin',save_to_template_button);

 document.getElementById('SaveToTemplate').addEventListener('click', function() {
    //chrome.storage.sync.set({"q7p1": document.getElementById("q7p1").value});
    page1.forEach(function(key, index) {
    	var text_box_id = "q".concat(index+1,"p1");
		var text = document.getElementById(key);
		var save = {};
		if(text) save[text_box_id] = text.value;
		//else save[text_box_id] = '';


		chrome.storage.sync.set(save, function(){
        	console.log(save);
    	});
		
	});

    


  });