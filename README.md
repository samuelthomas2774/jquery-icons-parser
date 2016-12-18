jQuery Icons Parser
============

This adds a basic syntax for icon frameworks:

```html
[ui-flag]

```

Gets parsed as:

```html
<span class="ui-icon ui-icon-flag" style="display: inline-block;"></span>

```

It will leave script and style tags alone:

```html
[ui-flag]
<script data-icon="[ui-flag]">
    [ui-flag]
</script>
<style data-icon="[ui-flag]">
    [ui-flag]
</style>

```

```html
<span class="ui-icon ui-icon-flag" style="display: inline-block;"></span>
<script data-icon="[ui-flag]">
    [ui-flag]
</script>
<style data-icon="[ui-flag]">
    [ui-flag]
</style>

```

Requirements and installation
------------

jQuery 1.8 or later is required.

```html
<script src="/jqueryui-icons-parser/jquery.icons.js"></script>

```

Icon frameworks
------------

- jQuery UI Icons
	[ui-{icon}]
- Glyphicons
	[glyphicon-{icon}]
- Font Awesome
	[fa-{icon}]
	[fa-{icon}-spin]
	[fa-{icon}-pulse]
- Framework7 Icons
	[f7-{icon}]
- Ionicons
	[ion-{icon}]
- Typicons
	[typcn-{icon}]
- Foundation Icons
	[fi-{icon}]
- Metro UI Icons
	[mif-{icon}]
- Elusive Icons
	[el-{icon}]

You can add custom icon frameworks like this:

```js
// You can add a string - %icon% will be replaced with the name of the icon
$.icons.libraries.myicons = "<span class=\"myicons myicons-%icon%\"></span>";

// ... or you can add a function - the name of the icon will be passed as the first argument
$.icons.libraries.myicons = function(icon) {
	return "<span class=\"myicons myicons-" + icon + "\"></span>";
};

```

Usage
------------

Simply call .icons():

```js
$(".render-icons").icons();

```
