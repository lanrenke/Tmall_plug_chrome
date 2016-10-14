'use strict';
(function() {
	var $body = $(document.body);
	var code_css = "display: none;"
	var code = "<p id='plug_code_txt'></p>";
	$body.append(code);
	var txt_css = "display: block;float:left;padding:3px;background-color:#000;color: #fff;cursor:pointer;z-index:1;"
	var txt = "<button class='tmall_copy_code' style='" + txt_css + "' data-clipboard-target='plug_code_txt' data-clipboard-text='内容为空'>复制代码</button>";
	var extension_url = chrome.extension.getURL('');
	$body.on('mouseover', 'bar', function() {
		if ($('.tmall_copy_code').length <= 0) {
			$(this).children('baracts').append(txt);
		}
	});

	$(document).on('click', '.tmall_copy_code', function() {
		var module_top = $(this).parent().parent().css('top'); //获取父类的父类的顶部位移
		var module_width = $(this).parent().parent().css('width'); //获取父类的父类的宽度
		var uri = getModuleUri(module_width, module_top);
		console.log(uri);
		if (uri) {
			var $plug_mod = $('#J_PageToDesign').contents().find('[data-uri="' + uri + '"]').find('span').html();
			$('#plug_code_txt').text($plug_mod);
			if ($plug_mod != '') {
				setTimeout(function() {
					var path = extension_url + 'js/Plug_Copy_Code.js';
					$body.append(('<script src="' + path + '"></script>'));
				}, 2000);

			};
		}
	});
})();