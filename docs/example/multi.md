# MultiElement

### Preparation
```javascript
let a = _("h1")
```

## Group with other elements
```javascript
a.glue("b").hide() //groupping and hide elements
a.glue("h2", "i", ".active") //group with multiple elements with different queries
```

## Get Associated elements
```javascript
a.parent //return MultiElement containing parent element of each element
a.child //return MultiElement containing child element(s) of each element
a.sibling //return MultiElement containing child element(s) of each element
a.top //return MultiElement containing previous sibling element
a.bottom //return MultiElement containing next sibling element of each element
a.firstChild //return MultiElement containing first child element of each element
a.lastChild //return MultiElement containing last child element of each element
```

## Return DOM query to select this element
```javascript
a.query //return Array containing queries of each element
```

## Excluding some element
```javascript
a.exclude(".someclass")
```

## Filtering elements
```javascript
a.filter("div")
```