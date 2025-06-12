# Jquery

## Notes:

1. Jquery use **$** to become a selector
2. Include our script at the end of our website with proper placement
3. Minify to save memory space
4. **$** will select all the available selector
5. Keep javascript all about behaviour and CSS for the styling

## Function:

1. **$("h1").css("css_property", "value")** = to change css property // If we only use one string inside the method, then we can get the value of the current selected html attribute (Getter and Setter)
2. **$.add/remove/hasClass("class")** = to add or remove class
3. **$.text("new_text")** = to change text for every matching selector
4. **$.html("new_html")** = to add html for every matching selector
5. **$.attr("get","set")** = to get or set attribute for every matching selector
6. **$.before/after/preprend/append** = self explanatory
7. **$.remove()** = to remove every matching selector
8. **$.hide/show/toggle/fadein/fadeout/fadeToggle/slideUp/slideDown/slideToggle** = self explanatory
9. **$.animate({})** = to add our own css (Only numeric value)

## EVENT LISTENER: $.on("event", funtion(){})

1. **$.click(function(){})** = to put event listener when we click the matching selector
2. **$.keypress(function(event){})** = to put event listener when we press a key
3. **$.mouseover**
