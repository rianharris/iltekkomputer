var widgetHtml = '<iframe src="https://www.prepostseo.com/widget/wordcount" style="border:0;width:100%;min-height:1000px;height:100%;"></iframe>';
var widgetTag = document.getElementById("ppsLink");
if (widgetTag === null){ 
	widgetHtml += '<div style="text-align: center; font-size:12px; color:#333;"><p><a href="https://www.prepostseo.com/word-count-character-count-tool" target="_blank" style="color:#000;" id="ppsLink">Word Counter</a> provided by <a href="https://www.prepostseo.com/" target="_blank"  style="color:#000;">prepostseo.com</a></p></div>';
	
}

var isNew = document.getElementById("ppsWidgetCode");

document.getElementById("ppsWidgetCode").innerHTML = widgetHtml;