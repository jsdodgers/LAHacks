var number = 0;

chrome.storage.sync.get(["text","image"],function(items) {
	console.log(items.image.image);
	$('body').append("<hr>");
	var texts = items.text.text;
	var images = items.image.image;
	var newDiv = document.createElement('div');
	newDiv.id = "div1";
	document.body.appendChild(newDiv);
	var newDiv2 = document.createElement('div');
	newDiv2.id = "div2";
	document.body.appendChild(newDiv2);
	number = texts.length;
	for (var i = texts.length-1; i>=0; i--) {
		$('body').find("#div1").append("<div id=\"div-"+i+"\"><p>" + texts[i] + "</p></div><hr id=\"hr"+i+"\">");
		$('body').find("#div1").find("#div-"+i).find('p').append("<img id=\"closeId" + i + "\" class=closeImage src=\"close.png\" align=\"right\"></img>");
		document.getElementById('closeId' + i).addEventListener('click', function (e) {
			console.log(e);
			var number = e.srcElement.id.substring(7);
			console.log("number:" + number);
			var div = document.getElementById("div-"+number);
			div.parentNode.removeChild(div);
			var hr = document.getElementById("hr"+number);
			hr.parentNode.removeChild(hr);
			chrome.storage.sync.get("text",function(items) {
				var arr = items.text.text;
				console.log("Before:" + number + arr);
				if (number!=-1) {
					arr.splice(number,1);
				}
				console.log("After:" + arr);
				chrome.storage.sync.set({"text":{text:arr}},function() {});
			});
		});
	}
	for (var i = images.length-1; i>=0; i--) {
		$('body').find("#div2").append("<img id=\"id" + i + "\" class=myImage src=\"" + images[i] + "\"></img>");
		
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


function drawLine( lineObjectHandle, Ax, Ay, Bx, By, lineImgPath )
{
    /*
     *	lineObjectHandle = an IMG tag with position:absolute
     */
    var
        xMin        = Math.min( Ax, Bx ),
        yMin        = Math.min( Ay, By ),
        xMax        = Math.max( Ax, Bx ),
        yMax        = Math.max( Ay, By ),
        boxWidth    = Math.max( xMax-xMin, 1 ),
        boxHeight   = Math.max( yMax-yMin, 1 ),
        tmp         = Math.min( boxWidth, boxHeight ),
        smallEdge   = 1,
        newSrc;


    while( tmp>>=1 )
        smallEdge<<=1;

    newSrc = lineImgPath+ smallEdge +( (Bx-Ax)*(By-Ay)<0?"up.gif":"down.gif" );
    if( lineObjectHandle.src.indexOf( newSrc )==-1 )
        lineObjectHandle.src = newSrc;

    with( lineObjectHandle.style )
    {
        width   = boxWidth	+"px";
        height  = boxHeight	+"px";
        left    = xMin		+"px";
        top     = yMin		+"px";
    }
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
	var text = document.getElementById('remindField').value;
	number++;
	$('body').find("#div1").prepend("<div id=\"div-"+number+"\"><p>" + text + "</p></div><hr id=\"hr"+number+"\">");
	$('body').find("#div1").find("#div-"+number).append("<img id=\"closeId" + number + "\" class=closeImage src=\"close.png\" align=\"right\"></img>");
		

	saveText(text);
	document.getElementById('remindField').value = "";
}

function timeBetweenChanged (e) {
	console.log(e);
	console.log(e.srcElement.value);
	chrome.storage.sync.set({"timeBetween":e.srcElement.value},function(){});
}

function durationChanged (e) {
	console.log(e);
	console.log(e.srcElement.value);
	chrome.storage.sync.set({"duration":e.srcElement.value},function(){});
}



document.addEventListener('DOMContentLoaded', function() {
	document.querySelector('button').addEventListener('click',buttonClick);
	var duration = document.querySelector('#duration');
	duration.addEventListener('keyup',durationChanged);
	chrome.storage.sync.get("duration",function(items) {
		duration.value = items.duration;
		console.log(items.duration);
	});
	var timeBetween = document.querySelector('#timeBetween');
	timeBetween.addEventListener('keyup',timeBetweenChanged);
	chrome.storage.sync.get("timeBetween",function(items) {
		timeBetween.value = items.timeBetween;
	});
});