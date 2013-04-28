var int=self.setInterval(function(){clock()},5000);
function clock()
 {
	 chrome.tabs.getAllInWindow(null, function(tabs){
		for (var i = 0; i < tabs.length; i++) {
		chrome.tabs.sendMessage(tabs[i].id, {greeting: "hello"},function(response) {
		console.log(response.farewell);
	  });                         
		}
	});
}