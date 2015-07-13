/* jQuery UI Icons Parser
 * https://github.com/samuelthomas2774/jqueryui-icons-parser
 * 
 * Adds a basic syntax for jQuery UI Icons.
 */
(function($) {
	// .icons(), replaces any icons in text nodes with images.
	$.fn.icons = function() {
		return $(this).each(function() {
			return $.icons.textnodes(this).each(function() {
				var regex = new RegExp('\\[ui-([a-z0-9-]+)\\]', 'gi');
				var textdata = $("<div></div>").text(this.data).html();
				$(this).replaceWith(textdata.replace(regex, $.icons.replace));
			});
		});
	};
	
	// $.icons.
	$.icons = {};
	
	// $.icons.textnodes(), returns any text nodes unless in a script or style element.
	$.icons.textnodes = function(element) {
		return $(element).find(":not(iframe)").addBack().contents().filter(function() {
			if($(this).parent().is("script") || $(this).parent().is("style")) return false;
			return this.nodeType == 3;
		});
	};
	
	// $.icons.replace(), callback for .replace().
	$.icons.replace = function() {
		var icon = arguments[1];
		return "<span class=\"ui-icon ui-icon-" + icon + "\" style=\"display: inline-block;\"></span>";
	};
})(jQuery);
