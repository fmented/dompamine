## Class


### Element

**constructor :**  `HTMLElement`


#### Members


|Name|Type|Category|Description
|---|---|---|---|
|el|`HTMLElement`|property|
|text|`string`|getter \| setter|
|html|`string`|getter \| setter|
|style|`string` |getter \| setter|
|css|`string`|getter \| setter|
|class|`object`|getter \| setter|
|parent|``Element`` \| ``MultiElement``|getter|
|child|``Element`` \| ``MultiElement``|getter|
|top|``Element`` \| ``MultiElement``|getter|
|bottom|``Element`` \| ``MultiElement``|getter|
|topChild|``Element`` \| ``MultiElement``|getter|
|bottomChild|``Element`` \| ``MultiElement``|getter|

---
---

#### Methods

- **hide**

|Parameter|Type|Default|Description
|---|---|---|---|
|speed|`number`|`0`|time in seconds|

Return : ``this``

---

- **show**

|Parameter|Type|Default|Description
|---|---|---|---|
|speed|`number`|`0`|time in seconds|

Return : ``this``

---

- **toggle**

|Parameter|Type|Default|Description
|---|---|---|---|
|speed|`number`|`0`|time in seconds|

Return : ``this``

---

- **set**

|Parameter|Type|Default|Description
|---|---|---|---|
|style props|`object`| |style properties|

Return : ``this``

---

- **attr**

|Parameter|Type|Default|Description
|---|---|---|---|
|name|`string`| |attribute name|
|value|`string` \| `boolean` \| `number` \| `null`| `undefined`|attribute value|

Return : ``this``

---


- **apply**

|Parameter|Type|Default|Description
|---|---|---|---|
|element props|`object`| |HTMLElement properties|

Return : ``this``

---


- **steal**

|Parameter|Type|Default|Description
|---|---|---|---|
|psuedo|`string`| |psuedo class text|
|css selector|`string`| |css selector text|

Return : ``this``

---

- **anim**

|Parameter|Type|Default|Description
|---|---|---|---|
|psuedo|`string`| |psuedo class text|
|animation name|`string`| |animation name|

Return : ``this``

---


- **find**

|Parameter|Type|Default|Description
|---|---|---|---|
|query|`string`| |query text|

Return : ``Element`` \| ``MultiElement``

---

- **glue**

|Parameter|Type|Default|Description
|---|---|---|---|
|query|`string`| |query text|

Return : ``MultiElement``

---

- **chain**

|Parameter|Type|Default|Description
|---|---|---|---|
|query|`string`| |query text|

Return : ``Element`` \| ``MultiElement``

---

- **on**

|Parameter|Type|Default|Description
|---|---|---|---|
|event|`string`| |event name|
|callback|`function`| |callback function|

Return : ``this``

---

- **off**

|Parameter|Type|Default|Description
|---|---|---|---|
|event|`string`| |event name|

Return : ``this``

---

- **click**

|Parameter|Type|Default|Description
|---|---|---|---|
|mouse event props|`object`| |MouseEvent properties|

Return : ``this``

---

- **dblclick**

|Parameter|Type|Default|Description
|---|---|---|---|
|mouse event props|`object`| |MouseEvent properties|

Return : ``this``

---

- **mouseup**

|Parameter|Type|Default|Description
|---|---|---|---|
|mouse event props|`object`| |MouseEvent properties|

Return : ``this``

---

- **mousedown**

|Parameter|Type|Default|Description
|---|---|---|---|
|mouse event props|`object`| |MouseEvent properties|

Return : ``this``

---

- **keypress**

|Parameter|Type|Default|Description
|---|---|---|---|
|key code|`number`|``13``|KeyboardEvent keyCode|
|mouse event props|`object`| |KeyboardEvent properties|

Return : ``this``

---

- **keydown**

|Parameter|Type|Default|Description
|---|---|---|---|
|key code|`number`|``13``|KeyboardEvent keyCode|
|mouse event props|`object`| |KeyboardEvent properties|

Return : ``this``

---

- **keyup**

|Parameter|Type|Default|Description
|---|---|---|---|
|key code|`number`|``13``|KeyboardEvent keyCode|
|mouse event props|`object`| |KeyboardEvent properties|

Return : ``this``

---
---

#### Misc.

**create** ``object``

***top*** 

|Parameter|Type|Default|Description
|---|---|---|---|
|element and id|`string`| |element name and id separated by *#*|
|class|`string`| |class separated by <kbd>space</kbd> 
|element props|`object`| |HTMLElement properties|

---

***bottom*** 

|Parameter|Type|Default|Description
|---|---|---|---|
|element and id|`string`| |element name and id separated by *#*|
|class|`string`| |class separated by <kbd>space</kbd> 
|element props|`object`| |HTMLElement properties|

---

***inside.top*** 

|Parameter|Type|Default|Description
|---|---|---|---|
|element and id|`string`| |element name and id separated by *#*|
|class|`string`| |class separated by <kbd>space</kbd> 
|element props|`object`| |HTMLElement properties|

---

***inside.bottom*** 

|Parameter|Type|Default|Description
|---|---|---|---|
|element and id|`string`| |element name and id separated by *#*|
|class|`string`| |class separated by <kbd>space</kbd> 
|element props|`object`| |HTMLElement properties|

---
