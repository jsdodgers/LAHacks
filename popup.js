chrome.storage.sync.get(["text","image"],function(items) {
	console.log(items.image.image);
	var texts = items.text.text;
	var images = items.image.image;
	for (var i = 0; i < images.length; i++) {
		$('body').append("<img id=\"id" + i + "\" class=myImage src=\"" + images[i] + "\"></img>");
		
	document.getElementById('id'+i).addEventListener('click', function (e) {
		console.log(e);
		var number = e.srcElement.id.substring(2); //get the number of the picture
		console.log("number:" + number);
		var img = document.createElement('img');
		$('img').remove('#id' + number);
		chrome.storage.sync.get("image",function(items) {
			var arr = items.image.image;
			console.log("Before:" + number + arr);
			if(number != -1) {
				arr.splice(number, 1);
			}
			console.log("After:" + arr);
			chrome.storage.sync.set({"image":{image:arr}},function() {});
		});
		img.setAttribute('src', 'http://blog.stackoverflow.com/wp-content/uploads/stackoverflow-logo-300.png');
		e.target.appendChild(img);
	});
  
	}
});




function saveText(text) {
	alert("YES");
	var theValue = text;
	alert("Yes");
	if (!theValue) return;

	chrome.storage.sync.get("text",function(items) {
		if (Object.keys(items).length==0) {
			chrome.storage.sync.set({"text":{text:[theValue]}},function() {});
		}
		else {
			var arr = items.text.text;
			arr.push(theValue);
			chrome.storage.sync.set({"text":{text:arr}},function() {});
			console.log(arr);
		}
	});


}

function saveText(text) {
	var theValue = text;
	if (!theValue) return;

	chrome.storage.sync.get("text",function(items) {
		if (Object.keys(items).length==0) {
			chrome.storage.sync.set({"text":{text:[theValue]}},function() {});
		}
		else {
			var arr = items.text.text;
			arr.push(theValue);
			chrome.storage.sync.set({"text":{text:arr}},function() {});
			console.log(arr);
		}
	});
}


function buttonClick() {
	var test = document.getElementById('remindField').value;
	console.log("test:" + test);
	saveText(document.getElementById('remindField').value);
	document.getElementById('remindField').value = "";
}

document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('button').addEventListener('click',buttonClick);
});