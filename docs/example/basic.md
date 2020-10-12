# Basic Usage

## Selecting element(s)
```javascript
let a = _("#id")
```

## Selecting element(s) in a chain
```javascript
let a = _("#id")
a.hide().chain("#id2").css = "background:blue" //hide element with id #id set background of element with id #id2
```

## Get actual DOM element
```javascript
a.el
```


## Get and set element inner text
```javascript
a.text //return element text
a.text = "sometext" //set element text
```

## Get and set element inner HTML
```javascript
a.html //return element html
a.html = "<i>something</i>" //set element html
```

## Show and hide element
```javascript
a.show()
a.hide()
a.toggle()
```

## Attribute manipulation

```javascript
a.attr("something").exist //return true or false
a.attr("something").value //return attribute value
a.attr("something", 1) //set attribute something with value 1
a.attr("something", null) //remove attribute something
```

## Create new element
```javascript
a.create.top("b#someting", "class1 class2", {innerText: "I'm new"})

a.create.bottom("b", "class1 class2", {innerText: "I'm new"})

a.create.inside.top("b", "class1 class2", {innerText: "I'm new"})

a.create.inside.bottom("b#someting", "", {innerText: "I'm new"})
```


## Add Animation

!>**This could potentialy break your CSS rules if you have the same CSS selector text.**
<br>
>This will create new CSS rules with parent#id.class>el#id.class:psuedo-class.

>*example* : ***body>h1#logo.large.brand:hover***
```HTML
<body>
    <h1 id="logo" class="large brand"></h1> <!-- it will Create new CSS rule for this element by creating new style tag-->
</body>
```

```HTML
<head>
    ...rest of content
    <style name="dompamine">
        body>h1#logo.large.brand:hover{
            animation-name: slideInRight;
        }
    </style>
<head>
```


```javascript
a.anim("hover", "slideInRight") // generate new css rules for animation
a.anim("hover", "slideInRight", null) //remove generated rules 
```

## Create CSS rule by copying another

!>**This could potentialy break your CSS rules if you have the same CSS selector text**
<br>
>This will create new CSS rules with parent#id.class>el#id.class:psuedo-class.

```javascript
a.steal("", "#item") // generate new css rules
a.steal("", "#item", null) // remove generated rules
```