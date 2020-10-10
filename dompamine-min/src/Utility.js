export function w(...message){console.warn(...message);}
export function p(...what){console.log(...what);}
export function e(...message){console.error(...message);}
let getType=Function.prototype.call.bind(Object.prototype.toString);function isClass(obj){try{return(typeof obj==="function"&&obj.prototype.constructor.prototype.constructor.toString().startsWith("class"));}catch{return false;}}
export function type(obj){if(isClass(obj))return"Class";let x=getType(obj).slice(8,-1);if(x==="Object"){try{return obj.constructor.name;}catch{return x;}}
return x;}
export function iterable(obj){if(obj==null)return false;return typeof obj[Symbol.iterator]==="function";}
export function compare(a,b){if(a===b)return true;if(typeof a!="object"||typeof b!="object"||a==null||b==null)
return false;let keysA=Object.keys(a),keysB=Object.keys(b);if(keysA.length!=keysB.length)return false;for(let key of keysA){if(!keysB.includes(key))return false;if(typeof a[key]==="function"||typeof b[key]==="function"){if(a[key].toString()!=b[key].toString())return false;}else{if(!compare(a[key],b[key]))return false;}}
return true;}
export function merge(x,y,return_type={},convert=1){if(iterable(x)&&iterable(y))return[...x,...y];let t=type(return_type);if(typeof x==="number"||typeof y==="number")
w(`you are trying to merge ${typeof x} with ${typeof y}, ${
        typeof x === "number" ? typeof x : typeof y
      } will be ignored`);if(t==="Object")return{...x,...y};else{if(convert!==0)return[...Object.values(x),...Object.values(y)];else{let a=iterable(x)?x:Object.keys(x).map((i)=>{if(parsable(i))return JSON.parse(i);return i;});let b=iterable(y)?y:Object.keys(y).map((i)=>{if(parsable(i))return JSON.parse(i);return i;});return[...a,...b];}}}
export function parsable(obj){try{JSON.parse(obj);return true;}catch{return false;}}
export function empty(object){for(const key in object){if(object.hasOwnProperty(key)){return false;}}
return true;}
export function scale(value=0,i_from=0,i_to=0,o_from=0,o_to=0){return o_from+(o_to-o_from)*((value-i_from)/(i_to-i_from));}
export function range(n1,n2=undefined,step=1){let start,stop;let list=[];if(n2===undefined){start=0;stop=n1;}else{if(n1<n2){start=n1;stop=n2;}else{start=n2;stop=n1;}}
for(let index=start;index<=stop;index+=step){if(index>stop){break;}
list.push(index);}
return n2===undefined||n1<n2?list:list.reverse();}
