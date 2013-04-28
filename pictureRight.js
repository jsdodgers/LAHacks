//var posts = $("div:regex(class, .*thing.*)");

//function repeat() {
//	$('<p>A new paragraph.</p>').css('color', '#f00').appendTo('#header');
//}
//var t = setInterval(repeat,1000);
/*
if (document.addEventListener) {
	document.addEventListener('contextmenu', function(e) {
		alert("You've tried to open context menu");
		e.preventDefault();
	}, false);
}
else {
	document.attachEvent('oncontextmenu', function() {
		alert("You've tried to open context menu");
		window.event.returnValue = false;
	});
}
*/



var rightclicked_item = null;
if (document.body) {
  document.body.addEventListener("contextmenu", function(e) {
    rightclicked_item = e.srcElement;
  });
  document.body.addEventListener("click", function() {
    rightclicked_item = null;
  });
}