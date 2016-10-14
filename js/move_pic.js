$(document).ready(function() {
	var str = '<div class="app" id="move_btn">添加背景移动按钮</div>';
	str += '<div class="app" id="move_btn_del">移除背景移动按钮</div>'
	str += '<div class="app" id="message_btn">添加获取信息按钮</div>'
	str += '<div class="app" id="message_btn_del">删除获取信息按钮</div>'
	$('#applistbox div:eq(17)').after(str);
	$(document.body).append('<link rel="stylesheet" type="text/css" href="http://lomenck.com/Workprogram/css_box/dp_all.css" />');	
});

$(document).on('click', '#move_btn', function() {
	var table_len = $('#june .junehtml').find('td').length;
	if(table_len) {
		var str = '<div id="move_btn_left" style="padding:8px;position:absolute;top:46%;left:0px;cursor:pointer;z-index:9999;border:2px solid #87CEFA;background-color:#FF4040;opacity:0.6;">左移</div>';
		str += '<div id="move_btn_right" style="padding:8px;position:absolute;top:46%;right:0px;cursor:pointer;z-index:9999;border:2px solid #87CEFA;background-color:#FF4040;opacity:0.6;">右移</div>'
		str += '<div id="move_btn_top" style="padding:8px;position:absolute;top:0%;left:46%;cursor:pointer;z-index:9999;border:2px solid #87CEFA;background-color:#FF4040;opacity:0.6;">上移</div>'
		str += '<div id="move_btn_bottom" style="padding:8px;position:absolute;bottom:0%;left:46%;cursor:pointer;z-index:9999;border:2px solid #87CEFA;background-color:#FF4040;opacity:0.6;">下移</div>'
		for(var i = 0; i < table_len; i++) {
			$('#june .junehtml td').css('position', 'relative');
			$('#june .junehtml td:eq(' + i + ')').append(str);
		}
	} else {
		var str = '<div style="position:absolute;top:1%;;left:47%;padding:10px;font-size:18px;font-family:幼圆;border:1px solid #87CEFA;color:#FF4040;';
		str += 'border-radius:3px;z-index:9999;opacity:0.8;background-color:#70DB93;" id="move_message">请先导入背景！</div>'
		$(document.body).append(str);
		setTimeout(function() {
			$('#move_message').remove();
		}, 4500);
	}
});

$(document).on('click', '#move_btn_del', function() {
	$('#june .junehtml td').removeAttr('style');
	$('#june .junehtml table').find('div').remove();
});

//修改位置函数
$(document).on('click', '#move_btn_left', function() {
	var td_index = $(this).parent().index(); //获取索引
	var tr_index = $(this).parent().parent().index();
	var td_num = $(this).parent().parent().find('td').length - 1;
	if(td_num == '0') {
		var this_href = $(this).parent().find('img').attr('src'); //获得当前td里面图片的链接
		var prev_href = $(this).parent().parent().prev().find('img').attr('src'); //获得相对当前td上一个td里面图片的链接
		$(this).parent().find('img').attr('src', prev_href); //交换值
		$(this).parent().parent().prev().find('img').attr('src', this_href);
	} else {
		if(!td_index == '0') {
			var this_href = $(this).parent().find('img').attr('src');
			var prev_href = $(this).parent().prev().find('img').attr('src');
			$(this).parent().find('img').attr('src', prev_href);
			$(this).parent().prev().find('img').attr('src', this_href);
		} else {
			var this_href = $(this).parent().find('img').attr('src');
			var prev_href = $(this).parent().parent().prev().find('td:eq(' + td_num + ')').find('img').attr('src');
			$(this).parent().find('img').attr('src', prev_href);
			$(this).parent().parent().prev().find('td:eq(' + td_num + ')').find('img').attr('src', this_href);
		}
	}
});

$(document).on('click', '#move_btn_right', function() {
	var td_index = $(this).parent().index(); //获取索引
	var tr_index = $(this).parent().parent().index();
	var td_num = $(this).parent().parent().find('td').length - 1;
	if(td_num == '0') {
		var this_href = $(this).parent().find('img').attr('src');
		var next_href = $(this).parent().parent().next().find('img').attr('src');
		$(this).parent().find('img').attr('src', next_href);
		$(this).parent().parent().next().find('img').attr('src', this_href);
	} else {
		if(td_index < td_num) {
			var this_href = $(this).parent().find('img').attr('src');
			var next_href = $(this).parent().next().find('img').attr('src');
			$(this).parent().find('img').attr('src', next_href);
			$(this).parent().next().find('img').attr('src', this_href);
		} else {
			var this_href = $(this).parent().find('img').attr('src');
			var next_href = $(this).parent().parent().next().find('td:eq(0)').find('img').attr('src');
			$(this).parent().find('img').attr('src', next_href);
			$(this).parent().parent().next().find('td:eq(0)').find('img').attr('src', this_href);
		}
	}
});

$(document).on('click', '#move_btn_top', function() {
	var td_index = $(this).parent().index(); //获取索引
	var tr_index = $(this).parent().parent().index();
	var td_num = $(this).parent().parent().find('td').length - 1;
	var tr_num = $('#june .junehtml table tr').length - 1;
	var this_href = $(this).parent().find('img').attr('src');
	var top_href = $(this).parent().parent().prev().find('td:eq(' + td_index + ')').find('img').attr('src');
	$(this).parent().find('img').attr('src', top_href);
	$(this).parent().parent().prev().find('td:eq(' + td_index + ')').find('img').attr('src', this_href);
});

$(document).on('click', '#move_btn_bottom', function() {
	var td_index = $(this).parent().index(); //获取索引
	var tr_index = $(this).parent().parent().index();
	var td_num = $(this).parent().parent().find('td').length - 1;
	var this_href = $(this).parent().find('img').attr('src');
	var bottom_href = $(this).parent().parent().next().find('td:eq(' + td_index + ')').find('img').attr('src');
	$(this).parent().find('img').attr('src', bottom_href);
	$(this).parent().parent().next().find('td:eq(' + td_index + ')').find('img').attr('src', this_href);
});

//2016-08-25
//获取手写代码的信息并进行修改
$(document).on('click', '#message_btn', function() {
	var li_length = $(".junehtml ul li").length;
	if(li_length) {
		var str = '<div class="message_get" style="position:absolute;top:0px;left:0px;padding:3px;cursor:pointer;z-index:9999;border:2px solid #87CEFA;background-color:#FF4040;opacity:0.6;">获取产品信息</div>';
		for(var i = 0; i <= li_length; i++) {
			$(".junehtml ul li:eq(" + i + ")").css('position', 'relative');
			$(".junehtml ul li:eq(" + i + ")").append(str);
			
		}
		$(".junehtml ul").sortable();
		$(".junehtml ul").disableSelection();
	} else {
		var str = '<div style="position:absolute;top:1%;;left:47%;padding:10px;font-size:18px;font-family:幼圆;border:1px solid #87CEFA;color:#FF4040;';
		str += 'border-radius:3px;z-index:9999;opacity:0.8;background-color:#70DB93;" id="move_message">没有产品代码！</div>'
		$(document.body).append(str);
		setTimeout(function() {
			$('#move_message').remove();
		}, 4500);
	}
});
$(document).on('click', '#message_btn_del', function() {
	$(".junehtml ul li").removeAttr('style class');
	$(".junehtml ul li").find('[class="message_get"]').remove();
});

$(document).on('click', '.message_get', function() {
	//避免多个信息框在页面上
	if($('.input_data').length){
		$('.input_data').remove();
	}
	var li_index = $(this).parent().index();
	var li_child = $(this).parent().find('div:eq(0)');
	var message_picture,message_title, message_nol_price, message_act_price,message_href;
	message_picture = li_child.find('img:eq(0)').attr('src');
	message_title = li_child.find('div:eq(0)').find('p:eq(0)').text();
	message_nol_price = li_child.find('div:eq(0)').find('span').text();
	message_act_price = li_child.find('div:eq(0)').find('p:eq(1)').find('em').text();
	message_href = li_child.find('a:eq(3)').attr('junehref');
	message_handle(message_picture,message_title,message_nol_price, message_act_price,message_href,li_index);//调用函数处理获取的数据
});

function message_handle(picture,title, nol_price, act_price,href,index) {
	var str =	'<div class="input_data">';
		str +=		'<label>产品图片</label><input id="picture" type="text" value="'+picture+'"/>'
		str +=		'<label>产品标题</label><input id="title" type="text" value="'+title+'"/>'
		str +=		'<label>产品价格</label><input id="price" type="text" value="'+nol_price+'"/>'
		str +=		'<label>活动价格</label><input id="act_price" type="text" value="'+act_price+'"/>'
		str +=		'<label>产品链接</label><input id="href" type="text" value="'+href+'"/>'
		str +=		'<label>产品编码</label><input id="encoding" type="text" value="'+encoding+'"/>'
		str +=		'<div class="btn_box">'
		str +=			'<input type="button" id="to_ok" name="`+index+`" value="確定" />'
		str +=			'<input type="button" id="to_cancel" value="取消"/>'
		str +=		'</div>'
		str +=	'</div>'
	$('#toolMain').append(str);
}

$(document).on('click','#to_ok',function(){
	var index = $("#to_ok").attr('name');
	var picture = $("#picture").val();
	var title = $("#title").val();
	var price = $("#price").val();
	var act_price = $("#act_price").val();
	var href = $("#href").val();
	var li_child = $(".junehtml ul li:eq("+index+")").find('div:eq(0)');
	li_child.find('div:eq(0)').find('img:eq(0)').attr('src',picture);
	li_child.find('div:eq(0)').find('p:eq(0)').text(title);
	li_child.find('div:eq(0)').find('span').text(price);
	li_child.find('div:eq(0)').find('p:eq(1)').find('em').text(act_price);
	li_child.find('a:eq(3)').attr('junehref',href);
//	li_child.find('div:eq(0)').find('a').attr('junehref',href);
//	li_child.find('div:eq(2)').find('a').attr('junehref',href);
	$(".input_data").remove();
});

$(document).on('click','#to_cancel',function(){
	$(".input_data").remove();
});