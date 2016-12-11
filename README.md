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

Usage
------------

Simply call .icons():

```js
$(".render-icons").icons();

```
