var loadStyleSheet = function (src) {
	if (document.createStyleSheet) {
		document.createStyleSheet(src);
	} else {
		var stylesheet = document.createElement('link');
		stylesheet.href = src;
		stylesheet.rel = 'stylesheet';
		stylesheet.type = 'text/css';
		document.getElementsByTagName('head')[0].appendChild(stylesheet);
	}
};
window.onload = function () {
	loadStyleSheet('./css/style2.css');
};
