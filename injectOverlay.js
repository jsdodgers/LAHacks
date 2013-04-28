chrome.runtime.onMessage.addListener(
 function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello") {
		interuptUser();
		setTimeout(removeFunction, 2000);
	    sendResponse({farewell: "confirm"});	
	}
  });
  

function randomFromInterval(from,to)
{
    return Math.floor(Math.random()*(to-from+1)+from);
}
  

// interuptUser();
// setTimeout(removeFunction,2000);
  
﻿//$('<p>A new paragraph.</p>').css('color', '#f00').appendTo('#header');

//$('div[class^=" thing"]').append("Hello there, my young one!!");
//var post = $('div[class^=" thing"]').last().clone().html();
//var allPosts = $('#siteTable').children().html();
//var allPosts = $('#siteTable').prepend(post);
//$('.siteTable').children().prepend(post).append("Hahahaha");

function interuptUser() {
	var image;
	chrome.storage.sync.get("image",function(items) {
			console.log(items);
			var arr = items.image.image;
			if(arr.length > 0) {
				var rand = randomFromInterval(0,arr.length - 1);
				image = arr[rand];
				console.log(image);
				$('body').append("<img class=\"bgImage\"src=\"http://t1.gstatic.com/images?q=tbn:ANd9GcSRYne0n5LSogDMoT_Q4_LMIQTOwt_Sg4FQ5E2ZDrtr2KnWb7PxvA\" alt=\"bg\">");
				$('body').append("<img class=\"overlayImage\" src=\"" + image + "\" alt=\"dog\">");
				$('body').css({'overflow':'hidden'});
			}

		//for (int i = 0; i < items.length; i++ {	
		//}
	});
	//http://sitmeanssit.com/dog-training-mu/houston-dog-training/files/2013/03/puppy.jpeg
	console.log("outside:" + image);

	// $(document).bind('scroll',function () { 
		 // window.scrollTo(0,0); 
	// });
}

function removeFunction() {
  $(document).unbind('scroll'); 
  $('body').css({'overflow':'visible'});

  $('img').remove('.overlayImage');
  $('img').remove('.bgImage');

}