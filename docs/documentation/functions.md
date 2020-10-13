### Global Functions

- **_( element )**

|Parameter|Type|Default|Description
|---|---|---|---|
|element|`string` \| `HTMLElement[]` \| `nodelist` \|`HTMLColection`|||

Return : [``Element``](documentation/element) \| [``MultiElement``](documentation/multi)

---

- **p( ...data )**

|Parameter|Type|Default|Description
|---|---|---|---|
|...data|any||console.log|

Return :

---

- **w( ...data )**

|Parameter|Type|Default|Description
|---|---|---|---|
|...data|any||console.warn|

Return :

---

- **e( ...data )**

|Parameter|Type|Default|Description
|---|---|---|---|
|...data|any||console.error|

Return :

---

- **iterable( obj )**
>check if object is iterable

|Parameter|Type|Default|Description
|---|---|---|---|
|obj|any|||

Return : `boolean`

---

- **parsable( obj )**
>check if object is parsable

|Parameter|Type|Default|Description
|---|---|---|---|
|obj|any|||

Return : `boolean`

---

- **empty( obj )**
>check if object is empty

|Parameter|Type|Default|Description
|---|---|---|---|
|obj|`object`\|`array`|||

Return : `boolean`

---

- **compare( obj1, obj2 )**
>check if objects are the same

|Parameter|Type|Default|Description
|---|---|---|---|
|obj1|any|||
|obj2|any|||

Return : `boolean`

---

- **type( obj )**
>check object type

|Parameter|Type|Default|Description
|---|---|---|---|
|obj|any|||


Return : `string`

---

- **range( n1, n2, step )**

|Parameter|Type|Default|Description
|---|---|---|---|
|n1|``number``|||
|n2|``number``|``undefined``||
|step|``number``|``1``||

Return : `array`

---

- **scale( value, inLow, inHight, outLow, outHight )**

|Parameter|Type|Default|Description
|---|---|---|---|
|value|``number``|||
|inLow|``number``|||
|inHight|``number``|||
|outLow|``number``|||
|outHight|``number``|||

Return : `number`

---
