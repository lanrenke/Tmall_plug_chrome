'use strict';
//跨域函数
function httpRequest(url, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			callback(xhr.responseText);
		}
	}
	xhr.send();
}
$(document).on("click",".check_btn",function() {
	var pro_id = $(".add_btn").val();
	console.log(pro_id);
	httpRequest('https://detail.tmall.com/item.htm?id=' + pro_id, function() {
		var popup_take_code_txt = $('.ke-post').contents().children(5).html();
		console.log(popup_take_code_txt);
		$('#html_content_pro').append(popup_take_code_txt);
	});
});
//$(document).on('click', '.check_btn', function() {
//	console.log(1);
//	var html_code = $('.ke-post')
//	var all_div = html_code.children(5).html();
//	if(all_div)
//	console.log(all_div);
//	else
//	console.log('error');
//});
//商品参数
