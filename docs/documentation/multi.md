## Class


### MultElement

**constructor :**  `HTMLElement[]` \| `Nodelist` \| `HTMLCollection`


#### Members


|Name|Type|Category|Description
|---|---|---|---|
|el|`HTMLElement`|property|
|text|`string`|getter \| setter|
|html|`string`|getter \| setter|
|style|`string` |getter \| setter|
|css|`string`|getter \| setter|
|class|`object`|setter||
|parent|[``Element``](documentation/element) \| [``MultiElement``](documentation/multi)|getter|
|child|[``Element``](documentation/element) \| [``MultiElement``](documentation/multi)|getter|
|top|[``Element``](documentation/element) \| [``MultiElement``](documentation/multi)|getter|
|bottom|[``Element``](documentation/element) \| [``MultiElement``](documentation/multi)|getter|
|topChild|[``Element``](documentation/element) \| [``MultiElement``](documentation/multi)|getter|
|bottomChild|[``Element``](documentation/element) \| [``MultiElement``](documentation/multi)|getter|

---
---

#### Methods

- **hide( *speed* <sub>optional</sub> )**

|Parameter|Type|Default|Description
|---|---|---|---|
|speed|`number`|`0`|time in seconds|

Return : ``this``

---

- **show( *speed* <sub>optional</sub> )**

|Parameter|Type|Default|Description
|---|---|---|---|
|speed|`number`|`0`|time in seconds|

Return : ``this``

---

- **toggle( *speed* <sub>optional</sub> )**

|Parameter|Type|Default|Description
|---|---|---|---|
|speed|`number`|`0`|time in seconds|

Return : ``this``

---

- **set( *style* )**

|Parameter|Type|Default|Description
|---|---|---|---|
|style|`object`| |``CSSStyleDeclaration`` properties|

Return : ``this``

---

- **attr( *name*, *value* <sub>optional</sub> )**

> if value is not given, it will return the attribute value.<br>
if value is set to null, it will remove the attribute.<br>
else it will set the attribute value.<br>

|Parameter|Type|Default|Description
|---|---|---|---|
|name|`string`| |attribute name|
|value|`string` \| `boolean` \| `number` \| `null`| `undefined`|attribute value|

Return : ``this``

---


- **apply( *props* )**

|Parameter|Type|Default|Description
|---|---|---|---|
|props|`object`| |``HTMLElement`` properties|

Return : ``this``

---


- **steal( *psuedo*, *selector*)**

|Parameter|Type|Default|Description
|---|---|---|---|
|psuedo|`string`| |psuedo class text|
|selector|`string`| |css selector text|

Return : ``this``

---

- **anim( *psuedo*, *animation*, *option* <sub>optional</sub> )**

|Parameter|Type|Default|Description
|---|---|---|---|
|psuedo|`string`| |psuedo class text|
|animation|`string`| |animation name|
|option|`null`| |used to remove generated animation|

Return : ``this``

---


- **glue( *query* )**

|Parameter|Type|Default|Description
|---|---|---|---|
|query|`string`| |query text of element to be glued with|

Return : [``MultiElement``](documentation/multi)

---

- **chain( *query* )**

|Parameter|Type|Default|Description
|---|---|---|---|
|query|`string`| |query text|

Return : [``Element``](documentation/element) \| [``MultiElement``](documentation/multi)

---

- **filter( *query* )**
> will return element that match the query

|Parameter|Type|Default|Description
|---|---|---|---|
|query|`string`| |query text|

Return : [``Element``](documentation/element) \| [``MultiElement``](documentation/multi)

---

- **exclude( *query* )**
> will return element excluding element that match the query

|Parameter|Type|Default|Description
|---|---|---|---|
|query|`string`| |query text|

Return : [``Element``](documentation/element) \| [``MultiElement``](documentation/multi)

---

- **on( *event*, *callback* )**

|Parameter|Type|Default|Description
|---|---|---|---|
|event|`string`| |event name|
|callback|`function`| |callback function|

Return : ``this``

---

- **off( *event*, *callback* )**

|Parameter|Type|Default|Description
|---|---|---|---|
|event|`string`| |event name|

Return : ``this``



---
---

#### Misc.

**create** ``object``

**top( elid, class, props <sub>optional</sub> )** 

|Parameter|Type|Default|Description
|---|---|---|---|
|elid|`string`| |element name and id separated by *#*|
|class|`string`| |class separated by <kbd>space</kbd> 
|props|`object`| |``HTMLElement`` properties|

---

**bottom( elid, class, props <sub>optional</sub> )** 

|Parameter|Type|Default|Description
|---|---|---|---|
|elid|`string`| |element name and id separated by *#*|
|class|`string`| |class separated by <kbd>space</kbd> 
|props|`object`| |``HTMLElement`` properties|

---

**inside.top( elid, class, props <sub>optional</sub> )**

|Parameter|Type|Default|Description
|---|---|---|---|
|elid|`string`| |element name and id separated by *#*|
|class|`string`| |class separated by <kbd>space</kbd> 
|props|`object`| |``HTMLElement`` properties|

---

**inside.bottom( elid, class, props <sub>optional</sub> )**

|Parameter|Type|Default|Description
|---|---|---|---|
|elid|`string`| |element name and id separated by *#*|
|class|`string`| |class separated by <kbd>space</kbd> 
|props|`object`| |``HTMLElement`` properties|

---
