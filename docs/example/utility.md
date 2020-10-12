## Tools

## Console wrapper
```javascript
p(something) //console.log
w(something) //console.warn
e(something) //console.error
```

## Compare objects
```javascript
let x = [0,2,3]
let y = {"q":1}
compare(x, y)
compare(_("h1"), _(".header"))
```

## Check if object is iterable
```javascript
let x = [0,2,3]
let y = {"q":1}
iterable(x)
iterable(y)
```

## Check if object is parsable
```javascript
let x = [0,2,3]
let y = {"q":1}
parsable(x)
parsable(y)
```

## Check if object is empty
```javascript
let x = [0,2,3]
let y = {}
empty(x)
empty(y)
```

## Check object type
```javascript
let x = [0,2,3]
let y = {"q":1}
type(x)
type(y)
```

## Create Array
```javascript
for(i of range(10)) p(i) //print 0-9
for(i of range(5,10)) p(i) //print 5-9
for (i of range(0,10,3)) p(i) //print 0,3,6,9
```

## Scale a value
```javascript
//first param = value to scale
//second param = lowest input value
//third param = highest input value
//fourth param = lowest output value
//fifth param = highest output value
scale(66, 1, 120, 1, 5)
```