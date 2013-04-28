//$('<p>A new paragraph.</p>').css('color', '#f00').appendTo('#header');

//$('div[class^=" thing"]').append("Hello there, my young one!!");
//var post = $('div[class^=" thing"]').last().clone().html();
//var allPosts = $('#siteTable').children().html();
//var allPosts = $('#siteTable').prepend(post);
//$('.siteTable').children().prepend(post).append("Hahahaha");

$('body').append("<img class=\"bgImage\" src=\"http://t1.gstatic.com/images?q=tbn:ANd9GcSRYne0n5LSogDMoT_Q4_LMIQTOwt_Sg4FQ5E2ZDrtr2KnWb7PxvA\" alt=\"bg\">");
$('body').append("<img class=\"overlayImage\" src=\"http://sitmeanssit.com/dog-training-mu/houston-dog-training/files/2013/03/puppy.jpeg\" alt=\"dog\">");

$('body').css({'overflow':'hidden'});
$(document).bind('scroll',function () { 
     window.scrollTo(0,0); 
});


// Implement a timer here
setTimeout(removeFunction,2000);

function removeFunction() {
  $(document).unbind('scroll'); 
  $('body').css({'overflow':'visible'});

  $('img').remove('.overlayImage');
  $('img').remove('.bgImage');

}

