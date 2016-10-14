'use strict';
//var storage = window.localStorage;

// 当装修页面加载完成时，加载插件，以及注入相关脚本（content script）
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	if (changeInfo.status === 'complete') {
		if (tab.url.indexOf("//siteadmin.tmall.com/design.htm") > -1) {
			//			chrome.tabs.executeScript(tabId, {file: "js/jquery.zclip.js"});
			var js;
			js = `
				var $body = $(document.body);
				$body.append('<script src="//cdn.bootcss.com/jquery/1.12.1/jquery.min.js"></script>');
				$body.append('<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.0/jquery-ui.min.js"></script>');
//				$body.append('<link rel="stylesheet" type="text/css" href="http://lomenck.com/Workprogram/css_box/dp_all.css" />');	
			`;
			chrome.tabs.executeScript({
				code: js
			});
		}
	}
});
//var script = document.createElement("script");
//script.type = "text/javascript";
//script.src = "/js/zClip.js";
//document.getElementsByTagName("head")[0].appendChild(script);