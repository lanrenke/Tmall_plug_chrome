'use strict';
//ZeroClipboard.config( { swfPath: 'https://cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.2.0/ZeroClipboard.swf' } );
var clip = new ZeroClipboard($('#J_SelectedModuleMask .tmall_copy_code'));
clip.on('ready', function() {
	console.log('Flash for ready');

	this.on('aftercopy', function(event) {
		alert('succes');
		console.log(2);
		console.log('copy for succes: ' + event.data['text/plain']);
	});
});
clip.on('error', function(event) {
	console.log('error[name="' + event.name + '"]: ' + event.message);
	ZeroClipboard.destory();
});