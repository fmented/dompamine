### Global Functions

- **_( *element* )**

|Parameter|Type|Default|Description
|---|---|---|---|
|element|`string` \| `HTMLElement[]` \| [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/Nodelist) \|[`HTMLCollection`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection) |||

Return : [``Element``](documentation/element) \| [``MultiElement``](documentation/multi)

---

- **p( ...*data* )**

|Parameter|Type|Default|Description
|---|---|---|---|
|...data|any||console.log|

Return :

---

- **w( ...*data* )**

|Parameter|Type|Default|Description
|---|---|---|---|
|...data|any||console.warn|

Return :

---

- **e( ...*data* )**

|Parameter|Type|Default|Description
|---|---|---|---|
|...data|any||console.error|

Return :

---

- **iterable( *obj* )**
>check if object is iterable

|Parameter|Type|Default|Description
|---|---|---|---|
|obj|any|||

Return : `boolean`

---

- **parsable( *obj* )**
>check if object is parsable

|Parameter|Type|Default|Description
|---|---|---|---|
|obj|any|||

Return : `boolean`

---

- **empty( *obj* )**
>check if object is empty

|Parameter|Type|Default|Description
|---|---|---|---|
|obj|`object`\|`array`|||

Return : `boolean`

---

- **compare( *obj1*, *obj2* )**
>check if objects are the same

|Parameter|Type|Default|Description
|---|---|---|---|
|obj1|any|||
|obj2|any|||

Return : `boolean`

---

- **type( *obj* )**
>check object type

|Parameter|Type|Default|Description
|---|---|---|---|
|obj|any|||


Return : `string`

---

- **range( *n1*, *n2* <sub>optional</sub>, *step* <sub>optional</sub>)**

|Parameter|Type|Default|Description
|---|---|---|---|
|n1|``number``|||
|n2|``number``|``undefined``||
|step|``number``|``1``||

Return : `array`

---

- **scale( *value*, *inLow*, *inHight*, *outLow*, *outHight* )**

|Parameter|Type|Default|Description
|---|---|---|---|
|value|``number``|||
|inLow|``number``||lowest input value|
|inHight|``number``||highest input value|
|outLow|``number``||lowest output value|
|outHight|``number``||highest output value|

Return : `number`

---

- **cs( *name*, *value*, *exp* <sub>optional</sub> )**
> if value is not given, it will return the cookie value.<br>
if value is set to ``null``, it will remove the cookie.<br>
else it will set the cookie value.<br>

|Parameter|Type|Default|Description
|---|---|---|---|
|name|``string``|||
|value|any|||
|exp|``number``|`1`|exiration date by day|


Return : 

---

- **ss( *key*, *value*, *exp* <sub>optional</sub> )**
> if value is not given, it will return the session storage  value.<br>
if value is set to ``null``, it will remove the session storage.<br>
else it will set the session storage value.<br>

|Parameter|Type|Default|Description
|---|---|---|---|
|key|``string``|||
|value|any|||


Return : 

---

- **ls( *key*, *value*, *exp* <sub>optional</sub> )**
> if value is not given, it will return the local storage value.<br>
if value is set to ``null``, it will remove the local storage .<br>
else it will set the local storage  value.<br>

|Parameter|Type|Default|Description
|---|---|---|---|
|key|``string``|||
|value|any|||


Return : 
