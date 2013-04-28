//var posts = $("div:regex(class, .*thing.*)");

//function repeat() {
//	$('<p>A new paragraph.</p>').css('color', '#f00').appendTo('#header');
//}
//var t = setInterval(repeat,1000);



// Create one test item for each context type.
var contexts = ["selection","image"];
/*for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Test '" + context + "' menu item";
  var id = chrome.contextMenus.create({"title": title, "contexts":[context],
                                       "onclick": genericOnClick});
  console.log("'" + context + "' item:" + id);
}*/
var title = "Remember this!";
var id = chrome.contextMenus.create({"title":title, "contexts":[contexts[0]],"onclick":selectionClick});
var id2 = chrome.contextMenus.create({"title":title, "contexts":[contexts[1]],"onclick":imageClick});

function imageClick(info, tab) {
	saveImage(info, tab);
	console.log("item " + info.menuItemId + " was clicked");
	console.log("info: " + JSON.stringify(info));
	console.log("tab: " + JSON.stringify(tab));
}

function selectionClick(info, tab) {
	saveText(info,tab);
	chrome.extension.getBackgroundPage().console.log("HI HERE");
	console.log("item " + info.menuItemId + " was clicked");
	console.log("info: " + JSON.stringify(info));
	console.log("tab: " + JSON.stringify(tab));
}


function saveText(info,tab) {
	var theValue = info.selectionText;
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

function saveImage(info,tab) {
	var theValue = info.srcUrl;
	if (!theValue) return;
	chrome.storage.sync.get("image",function(items) {
		if (Object.keys(items).length==0) {
			chrome.storage.sync.set({"image":{image:[theValue]}},function() {});
		}
		else {
			var arr = items.image.image;
			arr.push(theValue);
			chrome.storage.sync.set({"image":{image:arr}},function() {});
			console.log(arr);
		}
	});
}