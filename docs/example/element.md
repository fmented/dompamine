# Element


## Group with other elements
```javascript
a.glue("b").hide() //groupping and hide elements
a.glue("h2", "i", ".active") //group with multiple elements with different queries
```

## Get Associated elements
```javascript
a.parent //return parent element
a.child //return MultiElement containing child element(s)
a.sibling //return MultiElement containing child element(s)
a.top //return previous sibling element
a.bottom //return next sibling element
a.firstChild //return first child element
a.lastChild //return last child element
```

## Return DOM query to select this element
```javascript
a.query //return Array containing queries
```
