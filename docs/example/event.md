# Event

## Add Event Listener
```javascript
a.on("mousedown", function(){_(this).anim("hover", "slideInRight")})

//Arrow function will change "this" context into window
```

## Remove Event Listener
```javascript
a.off("mousedown")
```

## Trigger Event
> **⚠ WARNING :**
>**This only work with Element does't work with MultiElement**
```javascript
//first parameter optional to set event option
a.click({ctrlKey:true})
a.dblclick()
a.mouseup({button:2})
a.mousedown()

//first parameter is keyCode for event
//second parameter is object containing option
a.keypress(34)
a.keyup(13, {shiftKey:true})
```