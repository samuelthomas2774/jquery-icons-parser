/* jQuery Icons Parser
 * https://github.com/samuelthomas2774/jquery-icons-parser
 * 
 * Adds a basic syntax for icon frameworks.
 */
(function($) {
	// .icons(): Replaces any icons in text nodes with images
	$.fn.icons = function() {
		var $this = $(this);
		
		$this.each(function() {
			return $.icons.textnodes(this).each(function() {
				var regex = new RegExp("\\[([a-z0-9]+)-([a-z0-9-]+)\\]", "gi");
				var textdata = $("<div></div>").text(this.data).html();
				$(this).replaceWith(textdata.replace(regex, $.icons.replace));
			});
		});
		
		return $this;
	};
	
	$.icons = {};
	// $.icons
	
	// $.icons.libraries: A list of icon libraries that can be used
	$.icons.libraries = {
		"icon": "<span class=\"icon icon-%icon%\"></span>",
		"ui": "<span class=\"ui-icon ui-icon-%icon%\" style=\"display: inline-block;\"></span>"
	};
	
	// $.icons.textnodes(): Returns any text nodes unless in a script or style element
	$.icons.textnodes = function(element) {
		return $(element).find(":not(iframe)").addBack().contents().filter(function() {
			if($(this).parent().is("script") || $(this).parent().is("style")) return false;
			return this.nodeType == 3;
		});
	};
	
	// $.icons.replace(): Callback for .replace()
	$.icons.replace = function(match, library, icon) {
		if(typeof $.icons.libraries[library] == "string")
			return $.icons.libraries[library].replace("%icon%", icon);
		else if(typeof $.icons.libraries[library] == "function") {
			var r = $.icons.libraries[library].call(null, icon);
			if(typeof r == "string") return r;
			else return match;
		} else return match;
	};
})(jQuery);
