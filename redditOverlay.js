$('<p>A new paragraph.</p>').css('color', '#f00').appendTo('#header');


//$('div[class^=" thing"]').append("Hello there, my young one!!");
var lastPost = $('div[class^=" thing"]').last().clone();
lastPost.find('.entry').find('.title').find('.title').text("Gullible: This word is not in the dictionary"); //SET THE TEXT HERE
lastPost.find('.entry').find('.title').find('.title').attr('href','http://www.google.com/'); //SET THE LINK OF THE CLICKY THING HERE
lastPost.find('.entry').find('.expando-button').remove();
lastPost.find('.score.upvoted').text("1200");
lastPost.find('.score.unvoted').text("1200");

lastPost.find('.entry').find('.tagline').find('.author').text("HelpMeRemember");
lastPost.find('.entry').find('.tagline').find('.author').attr('href','http://helpmeremember.com/');
lastPost.find('.rank').text("!!!");
lastPost.find('.entry').find('.tagline').find('.subreddit.hover').text("HMR");
lastPost.find('.thumbnail').attr('href','http://madeformediacenter.com/m4mc/apps/bdf89210-93c7-4044-8b08-e1e351e96eb1SML.JPG');
lastPost.find('.thumbnail').append("<img src=\"http://madeformediacenter.com/m4mc/apps/bdf89210-93c7-4044-8b08-e1e351e96eb1SML.JPG\" width=\"70\" height=\"70\" alt=\"\">");
lastPost.find('.entry').find('.tagline').find('.author').text("HelpMeRemember");


var post = $('<div>').append(lastPost).html(); //grabs the last post and moves it to the first slot
//$('div[class^=" thing"]').last().clone().html();
//var allPosts = $('#siteTable').children().html();
var allPosts = $('#siteTable').prepend(post);


//$('.siteTable').children().prepend(post).append("Hahahaha");
//$('body').append("<p>More stuff" + post);
//$('#footer-flair').children().clone()
//clonding element