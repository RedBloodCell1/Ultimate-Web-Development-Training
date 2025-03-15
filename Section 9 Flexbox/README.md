# NOTES

## Flexbox:

1. display: flex; can be used to make column
2. So normally every elements by default has different default display value, by putting **flex**, it will try to make everyting fit into a one liner
3. **gap** (Parent) to make a gap between element
4. We can use inline-flex so it only occupies as much space as the widest or tallest depending on the flex direction

## Flex Direction:

1. **flex-direction** (Parent) defaults4 to row. (Left to right). If we set it to column then it will be (up to down)
2. **flex-basis** (Child) = change the size depends on flex direction

## Flex Layout:

1. Its important to differentiate if something is applied to the parent or child
2. **order** (Child) = Set the order of the child element (all default to 0). Biggest number go to the most right
3. **flexwrap** (Parent) = Default is set to _nowrap_. So it will always go to the right infinity until we change the property to _wrap_. There is many more like _wrapreverse_ which makes it go from bottom to top
4. **justify-content** (Parent) = flex-start, flex-end, center, space-between, space-around, space-evenly. BLABLABLA JUST USE OUR INTUITION
5. **align-items** (Parent) = Just like justify content but set on the cross-axis. We can also use _align-self_ on Child to set it to just one child
6. vh is viewport height
7. BRUH JUST LOOK AT THIS LINK MAN **https://css-tricks.com/snippets/css/a-guide-to-flexbox/**
8. **align-content** (Parent) = If we use wrap the we use this thing right here

## Flex Sizing:

1. Holy there is so much to write, damn do i wanna write em all, I guess i will
2. **flex-grow / flex-shrink** = it can grow (Default 0) or shrink (Default 1). Grow is trying to take as much width as possible (affected by max-width and min-width)
3. flex-basis default is auto
4. We can just write **flex**: 1 1 0 (Grow, shrink, basis) or simply just flex: 1
