/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
(()=>{// webpackBootstrap
var t={1361:function(t){
/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */
// These values are established by empiricism with tests (tradeoff: performance VS precision)
var e=.1,n="function"==typeof Float32Array;function r(t,e){return 1-3*e+3*t}function i(t,e){return 3*e-6*t}function o(t){return 3*t}
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function a(t,e,n){return((r(e,n)*t+i(e,n))*t+o(e))*t}
// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function u(t,e,n){return 3*r(e,n)*t*t+2*i(e,n)*t+o(e)}t.exports=function(t,r,i,o){if(!(0<=t&&t<=1&&0<=i&&i<=1))throw new Error("bezier x values must be in [0, 1] range");
// Precompute samples table
var c=n?new Float32Array(11):new Array(11);if(t!==r||i!==o)for(var s=0;s<11;++s)c[s]=a(s*e,t,i);return function(n){return t===r&&i===o?n:
// Because JavaScript number are imprecise, we should guarantee the extremes are right.
0===n?0:1===n?1:a(function(n){for(var r=0,o=1;10!==o&&c[o]<=n;++o)r+=e;--o;
// Interpolate to provide an initial guess for t
var s=r+(n-c[o])/(c[o+1]-c[o])*e,l=u(s,t,i);return l>=.001?function(t,e,n,r){for(var i=0;i<4;++i){var o=u(e,n,r);if(0===o)return e;e-=(a(e,n,r)-t)/o}return e}(n,s,t,i):0===l?s:function(t,e,n,r,i){var o,u,c=0;do{(o=a(u=e+(n-e)/2,r,i)-t)>0?n=u:e=u}while(Math.abs(o)>1e-7&&++c<10);return u}(n,r,r+e,t,i)}(n),r,o)}}},8172:function(t,e,n){var r=n(440)(n(5238),"DataView");
/* Built-in method references that are verified to be native. */t.exports=r},1796:function(t,e,n){var r=n(7322),i=n(2937),o=n(207),a=n(2165),u=n(7523);
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}
// Add methods to `Hash`.
c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=o,c.prototype.has=a,c.prototype.set=u,t.exports=c},4281:function(t,e,n){var r=n(5940),i=n(4382);
/** Used as references for the maximum length and index of an array. */
/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function o(t){this.__wrapped__=t,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}
// Ensure `LazyWrapper` is an instance of `baseLodash`.
o.prototype=r(i.prototype),o.prototype.constructor=o,t.exports=o},283:function(t,e,n){var r=n(7435),i=n(8438),o=n(3067),a=n(9679),u=n(2426);
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}
// Add methods to `ListCache`.
c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=o,c.prototype.has=a,c.prototype.set=u,t.exports=c},9675:function(t,e,n){var r=n(5940),i=n(4382);
/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */function o(t,e){this.__wrapped__=t,this.__actions__=[],this.__chain__=!!e,this.__index__=0,this.__values__=void 0}o.prototype=r(i.prototype),o.prototype.constructor=o,t.exports=o},9036:function(t,e,n){var r=n(440)(n(5238),"Map");
/* Built-in method references that are verified to be native. */t.exports=r},4544:function(t,e,n){var r=n(6409),i=n(5335),o=n(5601),a=n(1533),u=n(151);
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function c(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}
// Add methods to `MapCache`.
c.prototype.clear=r,c.prototype.delete=i,c.prototype.get=o,c.prototype.has=a,c.prototype.set=u,t.exports=c},44:function(t,e,n){var r=n(440)(n(5238),"Promise");
/* Built-in method references that are verified to be native. */t.exports=r},6656:function(t,e,n){var r=n(440)(n(5238),"Set");
/* Built-in method references that are verified to be native. */t.exports=r},3290:function(t,e,n){var r=n(4544),i=n(1760),o=n(5484);
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */function a(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new r;++e<n;)this.add(t[e])}
// Add methods to `SetCache`.
a.prototype.add=a.prototype.push=i,a.prototype.has=o,t.exports=a},1902:function(t,e,n){var r=n(283),i=n(6063),o=n(7727),a=n(3281),u=n(6667),c=n(1270);
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */function s(t){var e=this.__data__=new r(t);this.size=e.size}
// Add methods to `Stack`.
s.prototype.clear=i,s.prototype.delete=o,s.prototype.get=a,s.prototype.has=u,s.prototype.set=c,t.exports=s},4886:function(t,e,n){var r=n(5238).Symbol;
/** Built-in value references. */t.exports=r},8965:function(t,e,n){var r=n(5238).Uint8Array;
/** Built-in value references. */t.exports=r},3283:function(t,e,n){var r=n(440)(n(5238),"WeakMap");
/* Built-in method references that are verified to be native. */t.exports=r},9198:function(t){t.exports=
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function(t,e,n){switch(n.length){case 0:return t.call(e);case 1:return t.call(e,n[0]);case 2:return t.call(e,n[0],n[1]);case 3:return t.call(e,n[0],n[1],n[2])}return t.apply(e,n)}},4970:function(t){t.exports=
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r&&!1!==e(t[n],n,t););return t}},2654:function(t){t.exports=
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function(t,e){for(var n=-1,r=null==t?0:t.length,i=0,o=[];++n<r;){var a=t[n];e(a,n,t)&&(o[i++]=a)}return o}},4979:function(t,e,n){var r=n(1682),i=n(9732),o=n(6377),a=n(6018),u=n(9251),c=n(8586),s=Object.prototype.hasOwnProperty;
/** Used for built-in method references. */t.exports=
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function(t,e){var n=o(t),l=!n&&i(t),f=!n&&!l&&a(t),d=!n&&!l&&!f&&c(t),p=n||l||f||d,h=p?r(t.length,String):[],E=h.length;for(var v in t)!e&&!s.call(t,v)||p&&(
// Safari 9 has enumerable `arguments.length` in strict mode.
"length"==v||
// Node.js 0.10 has enumerable non-index properties on buffers.
f&&("offset"==v||"parent"==v)||
// PhantomJS 2 has enumerable non-index properties on typed arrays.
d&&("buffer"==v||"byteLength"==v||"byteOffset"==v)||
// Skip index properties.
u(v,E))||h.push(v);return h}},1098:function(t){t.exports=
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function(t,e){for(var n=-1,r=null==t?0:t.length,i=Array(r);++n<r;)i[n]=e(t[n],n,t);return i}},5741:function(t){t.exports=
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}},2607:function(t){t.exports=
/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function(t,e,n,r){var i=-1,o=null==t?0:t.length;for(r&&o&&(n=t[++i]);++i<o;)n=e(n,t[i],i,t);return n}},3955:function(t){t.exports=
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}},609:function(t,e,n){var r=n(2726)("length");
/**
 * Gets the size of an ASCII `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */t.exports=r},3615:function(t,e,n){var r=n(2676),i=n(4071),o=Object.prototype.hasOwnProperty;
/** Used for built-in method references. */t.exports=
/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function(t,e,n){var a=t[e];o.call(t,e)&&i(a,n)&&(void 0!==n||e in t)||r(t,e,n)}},8357:function(t,e,n){var r=n(4071);
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},2676:function(t,e,n){var r=n(9833);
/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},2009:function(t){t.exports=
/**
 * The base implementation of `_.clamp` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 */
function(t,e,n){return t==t&&(void 0!==n&&(t=t<=n?t:n),void 0!==e&&(t=t>=e?t:e)),t}},5940:function(t,e,n){var r=n(8532),i=Object.create,o=function(){function t(){}return function(e){if(!r(e))return{};if(i)return i(e);t.prototype=e;var n=new t;return t.prototype=void 0,n}}();
/** Built-in value references. */t.exports=o},8264:function(t,e,n){var r=n(3406),i=n(2679)(r);
/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */t.exports=i},2056:function(t){t.exports=
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function(t,e,n,r){for(var i=t.length,o=n+(r?1:-1);r?o--:++o<i;)if(e(t[o],o,t))return o;return-1}},5265:function(t,e,n){var r=n(5741),i=n(1668);
/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */t.exports=function t(e,n,o,a,u){var c=-1,s=e.length;for(o||(o=i),u||(u=[]);++c<s;){var l=e[c];n>0&&o(l)?n>1?
// Recursively flatten arrays (susceptible to call stack limits).
t(l,n-1,o,a,u):r(u,l):a||(u[u.length]=l)}return u}},1:function(t,e,n){var r=n(132)();
/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */t.exports=r},3406:function(t,e,n){var r=n(1),i=n(7361);
/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */t.exports=function(t,e){return t&&r(t,e,i)}},1957:function(t,e,n){var r=n(3835),i=n(8481);
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */t.exports=function(t,e){for(var n=0,o=(e=r(e,t)).length;null!=t&&n<o;)t=t[i(e[n++])];return n&&n==o?t:void 0}},7743:function(t,e,n){var r=n(5741),i=n(6377);
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */t.exports=function(t,e,n){var o=e(t);return i(t)?o:r(o,n(t))}},3757:function(t,e,n){var r=n(4886),i=n(5118),o=n(7070),a=r?r.toStringTag:void 0;
/** `Object#toString` result references. */t.exports=
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":a&&a in Object(t)?i(t):o(t)}},6993:function(t){t.exports=
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function(t,e){return null!=t&&e in Object(t)}},841:function(t,e,n){var r=n(3757),i=n(7013);
/** `Object#toString` result references. */t.exports=
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function(t){return i(t)&&"[object Arguments]"==r(t)}},5447:function(t,e,n){var r=n(906),i=n(7013);
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */t.exports=function t(e,n,o,a,u){return e===n||(null==e||null==n||!i(e)&&!i(n)?e!=e&&n!=n:r(e,n,o,a,t,u))}},906:function(t,e,n){var r=n(1902),i=n(4476),o=n(9027),a=n(8714),u=n(9937),c=n(6377),s=n(6018),l=n(8586),f="[object Arguments]",d="[object Array]",p="[object Object]",h=Object.prototype.hasOwnProperty;
/** Used to compose bitmasks for value comparisons. */t.exports=
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function(t,e,n,E,v,g){var y=c(t),m=c(e),_=y?d:u(t),I=m?d:u(e),b=(_=_==f?p:_)==p,T=(I=I==f?p:I)==p,O=_==I;if(O&&s(t)){if(!s(e))return!1;y=!0,b=!1}if(O&&!b)return g||(g=new r),y||l(t)?i(t,e,n,E,v,g):o(t,e,_,n,E,v,g);if(!(1&n)){var A=b&&h.call(t,"__wrapped__"),w=T&&h.call(e,"__wrapped__");if(A||w){var S=A?t.value():t,N=w?e.value():e;return g||(g=new r),v(S,N,n,E,g)}}return!!O&&(g||(g=new r),a(t,e,n,E,v,g))}},7293:function(t,e,n){var r=n(1902),i=n(5447);
/** Used to compose bitmasks for value comparisons. */t.exports=
/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function(t,e,n,o){var a=n.length,u=a,c=!o;if(null==t)return!u;for(t=Object(t);a--;){var s=n[a];if(c&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++a<u;){var l=(s=n[a])[0],f=t[l],d=s[1];if(c&&s[2]){if(void 0===f&&!(l in t))return!1}else{var p=new r;if(o)var h=o(f,d,l,t,e,p);if(!(void 0===h?i(d,f,3,o,p):h))return!1}}return!0}},692:function(t,e,n){var r=n(6644),i=n(3417),o=n(8532),a=n(1473),u=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,l=c.toString,f=s.hasOwnProperty,d=RegExp("^"+l.call(f).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */t.exports=
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function(t){return!(!o(t)||i(t))&&(r(t)?d:u).test(a(t))}},2195:function(t,e,n){var r=n(3757),i=n(7924),o=n(7013),a={};
/** `Object#toString` result references. */a["[object Float32Array]"]=a["[object Float64Array]"]=a["[object Int8Array]"]=a["[object Int16Array]"]=a["[object Int32Array]"]=a["[object Uint8Array]"]=a["[object Uint8ClampedArray]"]=a["[object Uint16Array]"]=a["[object Uint32Array]"]=!0,a["[object Arguments]"]=a["[object Array]"]=a["[object ArrayBuffer]"]=a["[object Boolean]"]=a["[object DataView]"]=a["[object Date]"]=a["[object Error]"]=a["[object Function]"]=a["[object Map]"]=a["[object Number]"]=a["[object Object]"]=a["[object RegExp]"]=a["[object Set]"]=a["[object String]"]=a["[object WeakMap]"]=!1,t.exports=
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function(t){return o(t)&&i(t.length)&&!!a[r(t)]}},5462:function(t,e,n){var r=n(6358),i=n(4503),o=n(1622),a=n(6377),u=n(8303);
/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */t.exports=function(t){
// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
return"function"==typeof t?t:null==t?o:"object"==typeof t?a(t)?i(t[0],t[1]):r(t):u(t)}},7407:function(t,e,n){var r=n(8857),i=n(2440),o=Object.prototype.hasOwnProperty;
/** Used for built-in method references. */t.exports=
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function(t){if(!r(t))return i(t);var e=[];for(var n in Object(t))o.call(t,n)&&"constructor"!=n&&e.push(n);return e}},9237:function(t,e,n){var r=n(8532),i=n(8857),o=n(1308),a=Object.prototype.hasOwnProperty;
/** Used for built-in method references. */t.exports=
/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function(t){if(!r(t))return o(t);var e=i(t),n=[];for(var u in t)("constructor"!=u||!e&&a.call(t,u))&&n.push(u);return n}},4382:function(t){t.exports=
/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function(){
// No operation performed.
}},6358:function(t,e,n){var r=n(7293),i=n(7145),o=n(4167);
/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */t.exports=function(t){var e=i(t);return 1==e.length&&e[0][2]?o(e[0][0],e[0][1]):function(n){return n===t||r(n,t,e)}}},4503:function(t,e,n){var r=n(5447),i=n(4738),o=n(9290),a=n(7074),u=n(1542),c=n(4167),s=n(8481);
/** Used to compose bitmasks for value comparisons. */t.exports=
/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function(t,e){return a(t)&&u(e)?c(s(t),e):function(n){var a=i(n,t);return void 0===a&&a===e?o(n,t):r(e,a,3)}}},7100:function(t,e,n){var r=n(1957),i=n(5495),o=n(3835);
/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */t.exports=function(t,e,n){for(var a=-1,u=e.length,c={};++a<u;){var s=e[a],l=r(t,s);n(l,s)&&i(c,o(s,t),l)}return c}},2726:function(t){t.exports=
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function(t){return function(e){return null==e?void 0:e[t]}}},1374:function(t,e,n){var r=n(1957);
/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */t.exports=function(t){return function(e){return r(e,t)}}},9864:function(t){t.exports=
/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function(t,e,n,r,i){return i(t,function(t,i,o){n=r?(r=!1,t):e(n,t,i,o)}),n}},5495:function(t,e,n){var r=n(3615),i=n(3835),o=n(9251),a=n(8532),u=n(8481);
/**
 * The base implementation of `_.set`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to set.
 * @param {*} value The value to set.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */t.exports=function(t,e,n,c){if(!a(t))return t;for(var s=-1,l=(e=i(e,t)).length,f=l-1,d=t;null!=d&&++s<l;){var p=u(e[s]),h=n;if("__proto__"===p||"constructor"===p||"prototype"===p)return t;if(s!=f){var E=d[p];void 0===(h=c?c(E,p,d):void 0)&&(h=a(E)?E:o(e[s+1])?[]:{})}r(d,p,h),d=d[p]}return t}},2422:function(t,e,n){var r=n(5055),i=n(9833),o=n(1622),a=i?function(t,e){return i(t,"toString",{configurable:!0,enumerable:!1,value:r(e),writable:!0})}:o;
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */t.exports=a},1682:function(t){t.exports=
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},9653:function(t,e,n){var r=n(4886),i=n(1098),o=n(6377),a=n(1359),u=r?r.prototype:void 0,c=u?u.toString:void 0;
/** Used as references for various `Number` constants. */t.exports=
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function t(e){
// Exit early for strings to avoid a performance hit in some environments.
if("string"==typeof e)return e;if(o(e))
// Recursively convert values (susceptible to call stack limits).
return i(e,t)+"";if(a(e))return c?c.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}},1072:function(t,e,n){var r=n(3230),i=/^\s+/;
/** Used to match leading whitespace. */t.exports=
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function(t){return t?t.slice(0,r(t)+1).replace(i,""):t}},7509:function(t){t.exports=
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function(t){return function(e){return t(e)}}},2471:function(t){t.exports=
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function(t,e){return t.has(e)}},8269:function(t,e,n){var r=n(1622);
/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */t.exports=function(t){return"function"==typeof t?t:r}},3835:function(t,e,n){var r=n(6377),i=n(7074),o=n(8997),a=n(6214);
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */t.exports=function(t,e){return r(t)?t:i(t,e)?[t]:o(a(t))}},8606:function(t){t.exports=
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function(t,e){var n=-1,r=t.length;for(e||(e=Array(r));++n<r;)e[n]=t[n];return e}},5772:function(t,e,n){var r=n(5238)["__core-js_shared__"];
/** Used to detect overreaching core-js shims. */t.exports=r},2679:function(t,e,n){var r=n(508);
/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */t.exports=function(t,e){return function(n,i){if(null==n)return n;if(!r(n))return t(n,i);for(var o=n.length,a=e?o:-1,u=Object(n);(e?a--:++a<o)&&!1!==i(u[a],a,u););return n}}},132:function(t){t.exports=
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function(t){return function(e,n,r){for(var i=-1,o=Object(e),a=r(e),u=a.length;u--;){var c=a[t?u:++i];if(!1===n(o[c],c,o))break}return e}}},727:function(t,e,n){var r=n(5462),i=n(508),o=n(7361);
/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */t.exports=function(t){return function(e,n,a){var u=Object(e);if(!i(e)){var c=r(n,3);e=o(e),n=function(t){return c(u[t],t,u)}}var s=t(e,n,a);return s>-1?u[c?e[s]:s]:void 0}}},914:function(t,e,n){var r=n(9675),i=n(4502),o=n(6007),a=n(195),u=n(6377),c=n(6252);
/** Error message constants. */t.exports=
/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */
function(t){return i(function(e){var n=e.length,i=n,s=r.prototype.thru;for(t&&e.reverse();i--;){var l=e[i];if("function"!=typeof l)throw new TypeError("Expected a function");if(s&&!f&&"wrapper"==a(l))var f=new r([],!0)}for(i=f?i:n;++i<n;){l=e[i];var d=a(l),p="wrapper"==d?o(l):void 0;f=p&&c(p[0])&&424==p[1]&&!p[4].length&&1==p[9]?f[a(p[0])].apply(f,p[3]):1==l.length&&c(l)?f[d]():f.thru(l)}return function(){var t=arguments,r=t[0];if(f&&1==t.length&&u(r))return f.plant(r).value();for(var i=0,o=n?e[i].apply(this,t):r;++i<n;)o=e[i].call(this,o);return o}})}},9833:function(t,e,n){var r=n(440),i=function(){try{var t=r(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=i},4476:function(t,e,n){var r=n(3290),i=n(3955),o=n(2471);
/** Used to compose bitmasks for value comparisons. */t.exports=
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function(t,e,n,a,u,c){var s=1&n,l=t.length,f=e.length;if(l!=f&&!(s&&f>l))return!1;
// Check that cyclic values are equal.
var d=c.get(t),p=c.get(e);if(d&&p)return d==e&&p==t;var h=-1,E=!0,v=2&n?new r:void 0;
// Ignore non-index properties.
for(c.set(t,e),c.set(e,t);++h<l;){var g=t[h],y=e[h];if(a)var m=s?a(y,g,h,e,t,c):a(g,y,h,t,e,c);if(void 0!==m){if(m)continue;E=!1;break}
// Recursively compare arrays (susceptible to call stack limits).
if(v){if(!i(e,function(t,e){if(!o(v,e)&&(g===t||u(g,t,n,a,c)))return v.push(e)})){E=!1;break}}else if(g!==y&&!u(g,y,n,a,c)){E=!1;break}}return c.delete(t),c.delete(e),E}},9027:function(t,e,n){var r=n(4886),i=n(8965),o=n(4071),a=n(4476),u=n(7170),c=n(2779),s=r?r.prototype:void 0,l=s?s.valueOf:void 0;
/** Used to compose bitmasks for value comparisons. */t.exports=
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function(t,e,n,r,s,f,d){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!f(new i(t),new i(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":
// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return o(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":
// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return t==e+"";case"[object Map]":var p=u;case"[object Set]":var h=1&r;if(p||(p=c),t.size!=e.size&&!h)return!1;
// Assume cyclic values are equal.
var E=d.get(t);if(E)return E==e;r|=2,
// Recursively compare objects (susceptible to call stack limits).
d.set(t,e);var v=a(p(t),p(e),r,s,f,d);return d.delete(t),v;case"[object Symbol]":if(l)return l.call(t)==l.call(e)}return!1}},8714:function(t,e,n){var r=n(3948),i=Object.prototype.hasOwnProperty;
/** Used to compose bitmasks for value comparisons. */t.exports=
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function(t,e,n,o,a,u){var c=1&n,s=r(t),l=s.length;if(l!=r(e).length&&!c)return!1;for(var f=l;f--;){var d=s[f];if(!(c?d in e:i.call(e,d)))return!1}
// Check that cyclic values are equal.
var p=u.get(t),h=u.get(e);if(p&&h)return p==e&&h==t;var E=!0;u.set(t,e),u.set(e,t);for(var v=c;++f<l;){var g=t[d=s[f]],y=e[d];if(o)var m=c?o(y,g,d,e,t,u):o(g,y,d,t,e,u);
// Recursively compare objects (susceptible to call stack limits).
if(!(void 0===m?g===y||a(g,y,n,o,u):m)){E=!1;break}v||(v="constructor"==d)}if(E&&!v){var _=t.constructor,I=e.constructor;
// Non `Object` object instances with different constructors are not equal.
_==I||!("constructor"in t)||!("constructor"in e)||"function"==typeof _&&_ instanceof _&&"function"==typeof I&&I instanceof I||(E=!1)}return u.delete(t),u.delete(e),E}},4502:function(t,e,n){var r=n(6380),i=n(6813),o=n(2413);
/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */t.exports=function(t){return o(i(t,void 0,r),t+"")}},2593:function(t,e,n){
/** Detect free variable `global` from Node.js. */
var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},3948:function(t,e,n){var r=n(7743),i=n(6230),o=n(7361);
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */t.exports=function(t){return r(t,o,i)}},9254:function(t,e,n){var r=n(7743),i=n(2992),o=n(3747);
/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */t.exports=function(t){return r(t,o,i)}},6007:function(t,e,n){var r=n(900),i=n(6032),o=r?function(t){return r.get(t)}:i;
/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */t.exports=o},195:function(t,e,n){var r=n(8564),i=Object.prototype.hasOwnProperty;
/** Used for built-in method references. */t.exports=
/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function(t){for(var e=t.name+"",n=r[e],o=i.call(r,e)?n.length:0;o--;){var a=n[o],u=a.func;if(null==u||u==t)return a.name}return e}},1143:function(t,e,n){var r=n(6669);
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},7145:function(t,e,n){var r=n(1542),i=n(7361);
/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */t.exports=function(t){for(var e=i(t),n=e.length;n--;){var o=e[n],a=t[o];e[n]=[o,a,r(a)]}return e}},440:function(t,e,n){var r=n(692),i=n(8974);
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */t.exports=function(t,e){var n=i(t,e);return r(n)?n:void 0}},6095:function(t,e,n){var r=n(6512)(Object.getPrototypeOf,Object);
/** Built-in value references. */t.exports=r},5118:function(t,e,n){var r=n(4886),i=Object.prototype,o=i.hasOwnProperty,a=i.toString,u=r?r.toStringTag:void 0;
/** Used for built-in method references. */t.exports=
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function(t){var e=o.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(t){}var i=a.call(t);return r&&(e?t[u]=n:delete t[u]),i}},6230:function(t,e,n){var r=n(2654),i=n(1036),o=Object.prototype.propertyIsEnumerable,a=Object.getOwnPropertySymbols,u=a?function(t){return null==t?[]:(t=Object(t),r(a(t),function(e){return o.call(t,e)}))}:i;
/** Used for built-in method references. */t.exports=u},2992:function(t,e,n){var r=n(5741),i=n(6095),o=n(6230),a=n(1036),u=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,o(t)),t=i(t);return e}:a;
/* Built-in method references for those with the same name as other `lodash` methods. */t.exports=u},9937:function(t,e,n){var r=n(8172),i=n(9036),o=n(44),a=n(6656),u=n(3283),c=n(3757),s=n(1473),l="[object Map]",f="[object Promise]",d="[object Set]",p="[object WeakMap]",h="[object DataView]",E=s(r),v=s(i),g=s(o),y=s(a),m=s(u),_=c;
/** `Object#toString` result references. */
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
(r&&_(new r(new ArrayBuffer(1)))!=h||i&&_(new i)!=l||o&&_(o.resolve())!=f||a&&_(new a)!=d||u&&_(new u)!=p)&&(_=function(t){var e=c(t),n="[object Object]"==e?t.constructor:void 0,r=n?s(n):"";if(r)switch(r){case E:return h;case v:return l;case g:return f;case y:return d;case m:return p}return e}),t.exports=_},8974:function(t){t.exports=
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function(t,e){return null==t?void 0:t[e]}},7635:function(t,e,n){var r=n(3835),i=n(9732),o=n(6377),a=n(9251),u=n(7924),c=n(8481);
/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */t.exports=function(t,e,n){for(var s=-1,l=(e=r(e,t)).length,f=!1;++s<l;){var d=c(e[s]);if(!(f=null!=t&&n(t,d)))break;t=t[d]}return f||++s!=l?f:!!(l=null==t?0:t.length)&&u(l)&&a(d,l)&&(o(t)||i(t))}},9520:function(t){
/** Used to compose unicode character classes. */
var e=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
/** Used to compose unicode capture groups. */t.exports=
/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function(t){return e.test(t)}},7322:function(t,e,n){var r=n(7305);
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */t.exports=function(){this.__data__=r?r(null):{},this.size=0}},2937:function(t){t.exports=
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},207:function(t,e,n){var r=n(7305),i=Object.prototype.hasOwnProperty;
/** Used to stand-in for `undefined` hash values. */t.exports=
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return i.call(e,t)?e[t]:void 0}},2165:function(t,e,n){var r=n(7305),i=Object.prototype.hasOwnProperty;
/** Used for built-in method references. */t.exports=
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function(t){var e=this.__data__;return r?void 0!==e[t]:i.call(e,t)}},7523:function(t,e,n){var r=n(7305);
/** Used to stand-in for `undefined` hash values. */t.exports=
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},1668:function(t,e,n){var r=n(4886),i=n(9732),o=n(6377),a=r?r.isConcatSpreadable:void 0;
/** Built-in value references. */t.exports=
/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function(t){return o(t)||i(t)||!!(a&&t&&t[a])}},9251:function(t){
/** Used as references for various `Number` constants. */
var e=/^(?:0|[1-9]\d*)$/;
/** Used to detect unsigned integer values. */t.exports=
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function(t,n){var r=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&e.test(t))&&t>-1&&t%1==0&&t<n}},7074:function(t,e,n){var r=n(6377),i=n(1359),o=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,a=/^\w*$/;
/** Used to match property names within property paths. */t.exports=
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!i(t))||a.test(t)||!o.test(t)||null!=e&&t in Object(e)}},6669:function(t){t.exports=
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},6252:function(t,e,n){var r=n(4281),i=n(6007),o=n(195),a=n(6985);
/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */t.exports=function(t){var e=o(t),n=a[e];if("function"!=typeof n||!(e in r.prototype))return!1;if(t===n)return!0;var u=i(n);return!!u&&t===u[0]}},3417:function(t,e,n){var r,i=n(5772),o=(r=/[^.]+$/.exec(i&&i.keys&&i.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";
/** Used to detect methods masquerading as native. */t.exports=
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function(t){return!!o&&o in t}},8857:function(t){
/** Used for built-in method references. */
var e=Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */t.exports=function(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||e)}},1542:function(t,e,n){var r=n(8532);
/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */t.exports=function(t){return t==t&&!r(t)}},7435:function(t){t.exports=
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function(){this.__data__=[],this.size=0}},8438:function(t,e,n){var r=n(8357),i=Array.prototype.splice;
/** Used for built-in method references. */t.exports=
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function(t){var e=this.__data__,n=r(e,t);return!(n<0||(n==e.length-1?e.pop():i.call(e,n,1),--this.size,0))}},3067:function(t,e,n){var r=n(8357);
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},9679:function(t,e,n){var r=n(8357);
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */t.exports=function(t){return r(this.__data__,t)>-1}},2426:function(t,e,n){var r=n(8357);
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */t.exports=function(t,e){var n=this.__data__,i=r(n,t);return i<0?(++this.size,n.push([t,e])):n[i][1]=e,this}},6409:function(t,e,n){var r=n(1796),i=n(283),o=n(9036);
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(o||i),string:new r}}},5335:function(t,e,n){var r=n(1143);
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},5601:function(t,e,n){var r=n(1143);
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */t.exports=function(t){return r(this,t).get(t)}},1533:function(t,e,n){var r=n(1143);
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */t.exports=function(t){return r(this,t).has(t)}},151:function(t,e,n){var r=n(1143);
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */t.exports=function(t,e){var n=r(this,t),i=n.size;return n.set(t,e),this.size+=n.size==i?0:1,this}},7170:function(t){t.exports=
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function(t){var e=-1,n=Array(t.size);return t.forEach(function(t,r){n[++e]=[r,t]}),n}},4167:function(t){t.exports=
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function(t,e){return function(n){return null!=n&&n[t]===e&&(void 0!==e||t in Object(n))}}},6141:function(t,e,n){var r=n(4984);
/** Used as the maximum memoize cache size. */t.exports=
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function(t){var e=r(t,function(t){return 500===n.size&&n.clear(),t}),n=e.cache;return e}},900:function(t,e,n){var r=n(3283),i=r&&new r;
/** Used to store function metadata. */t.exports=i},7305:function(t,e,n){var r=n(440)(Object,"create");
/* Built-in method references that are verified to be native. */t.exports=r},2440:function(t,e,n){var r=n(6512)(Object.keys,Object);
/* Built-in method references for those with the same name as other `lodash` methods. */t.exports=r},1308:function(t){t.exports=
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},895:function(t,e,n){
/* module decorator */t=n.nmd(t);var r=n(2593),i=e&&!e.nodeType&&e,o=i&&t&&!t.nodeType&&t,a=o&&o.exports===i&&r.process,u=function(){try{return o&&o.require&&o.require("util").types||a&&a.binding&&a.binding("util");
// Legacy `process.binding('util')` for Node.js < 10.
}catch(t){}}();
/** Detect free variable `exports`. */t.exports=u},7070:function(t){
/** Used for built-in method references. */
var e=Object.prototype.toString;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */t.exports=
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function(t){return e.call(t)}},6512:function(t){t.exports=
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function(t,e){return function(n){return t(e(n))}}},6813:function(t,e,n){var r=n(9198),i=Math.max;
/* Built-in method references for those with the same name as other `lodash` methods. */t.exports=
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function(t,e,n){return e=i(void 0===e?t.length-1:e,0),function(){for(var o=arguments,a=-1,u=i(o.length-e,0),c=Array(u);++a<u;)c[a]=o[e+a];a=-1;for(var s=Array(e+1);++a<e;)s[a]=o[a];return s[e]=n(c),r(t,this,s)}}},8564:function(t){t.exports={}},5238:function(t,e,n){var r=n(2593),i="object"==typeof self&&self&&self.Object===Object&&self,o=r||i||Function("return this")();
/** Detect free variable `self`. */t.exports=o},1760:function(t){t.exports=
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},5484:function(t){t.exports=
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function(t){return this.__data__.has(t)}},2779:function(t){t.exports=
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function(t){var e=-1,n=Array(t.size);return t.forEach(function(t){n[++e]=t}),n}},2413:function(t,e,n){var r=n(2422),i=n(7890)(r);
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */t.exports=i},7890:function(t){
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var e=Date.now;
/* Built-in method references for those with the same name as other `lodash` methods. */t.exports=
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function(t){var n=0,r=0;return function(){var i=e(),o=16-(i-r);if(r=i,o>0){if(++n>=800)return arguments[0]}else n=0;return t.apply(void 0,arguments)}}},6063:function(t,e,n){var r=n(283);
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */t.exports=function(){this.__data__=new r,this.size=0}},7727:function(t){t.exports=
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}},3281:function(t){t.exports=
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function(t){return this.__data__.get(t)}},6667:function(t){t.exports=
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function(t){return this.__data__.has(t)}},1270:function(t,e,n){var r=n(283),i=n(9036),o=n(4544);
/** Used as the size to enable large array optimizations. */t.exports=
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function(t,e){var n=this.__data__;if(n instanceof r){var a=n.__data__;if(!i||a.length<199)return a.push([t,e]),this.size=++n.size,this;n=this.__data__=new o(a)}return n.set(t,e),this.size=n.size,this}},6749:function(t,e,n){var r=n(609),i=n(9520),o=n(9668);
/**
 * Gets the number of symbols in `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the string size.
 */t.exports=function(t){return i(t)?o(t):r(t)}},8997:function(t,e,n){var r=n(6141),i=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,o=/\\(\\)?/g,a=r(function(t){var e=[];return 46/* . */===t.charCodeAt(0)&&e.push(""),t.replace(i,function(t,n,r,i){e.push(r?i.replace(o,"$1"):n||t)}),e});
/** Used to match property names within property paths. */t.exports=a},8481:function(t,e,n){var r=n(1359);
/** Used as references for various `Number` constants. */t.exports=
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},1473:function(t){
/** Used for built-in method references. */
var e=Function.prototype.toString;
/** Used to resolve the decompiled source of functions. */t.exports=
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function(t){if(null!=t){try{return e.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},3230:function(t){
/** Used to match a single whitespace character. */
var e=/\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},9668:function(t){
/** Used to compose unicode character classes. */
var e="\\ud800-\\udfff",n="["+e+"]",r="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",i="\\ud83c[\\udffb-\\udfff]",o="[^"+e+"]",a="(?:\\ud83c[\\udde6-\\uddff]){2}",u="[\\ud800-\\udbff][\\udc00-\\udfff]",c="(?:"+r+"|"+i+")?",s="[\\ufe0e\\ufe0f]?",l=s+c+"(?:\\u200d(?:"+[o,a,u].join("|")+")"+s+c+")*",f="(?:"+[o+r+"?",r,a,u,n].join("|")+")",d=RegExp(i+"(?="+i+")|"+f+l,"g");
/** Used to compose unicode capture groups. */t.exports=
/**
 * Gets the size of a Unicode `string`.
 *
 * @private
 * @param {string} string The string inspect.
 * @returns {number} Returns the string size.
 */
function(t){for(var e=d.lastIndex=0;d.test(t);)++e;return e}},219:function(t,e,n){var r=n(4281),i=n(9675),o=n(8606);
/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */t.exports=function(t){if(t instanceof r)return t.clone();var e=new i(t.__wrapped__,t.__chain__);return e.__actions__=o(t.__actions__),e.__index__=t.__index__,e.__values__=t.__values__,e}},3789:function(t,e,n){var r=n(2009),i=n(6127);
/**
 * Clamps `number` within the inclusive `lower` and `upper` bounds.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Number
 * @param {number} number The number to clamp.
 * @param {number} [lower] The lower bound.
 * @param {number} upper The upper bound.
 * @returns {number} Returns the clamped number.
 * @example
 *
 * _.clamp(-10, -5, 5);
 * // => -5
 *
 * _.clamp(10, -5, 5);
 * // => 5
 */t.exports=function(t,e,n){return void 0===n&&(n=e,e=void 0),void 0!==n&&(n=(n=i(n))==n?n:0),void 0!==e&&(e=(e=i(e))==e?e:0),r(i(t),e,n)}},5055:function(t){t.exports=
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function(t){return function(){return t}}},8305:function(t,e,n){var r=n(8532),i=n(806),o=n(6127),a=Math.max,u=Math.min;
/** Error message constants. */t.exports=
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function(t,e,n){var c,s,l,f,d,p,h=0,E=!1,v=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=c,r=s;return c=s=void 0,h=e,f=t.apply(r,n)}function m(t){var n=t-p;
// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===p||n>=e||n<0||v&&t-h>=l}function _(){var t=i();if(m(t))return I(t);
// Restart the timer.
d=setTimeout(_,function(t){var n=e-(t-p);return v?u(n,l-(t-h)):n}(t))}function I(t){
// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
return d=void 0,g&&c?y(t):(c=s=void 0,f)}function b(){var t=i(),n=m(t);if(c=arguments,s=this,p=t,n){if(void 0===d)return function(t){
// Invoke the leading edge.
// Reset any `maxWait` timer.
return h=t,
// Start the timer for the trailing edge.
d=setTimeout(_,e),E?y(t):f}(p);if(v)
// Handle invocations in a tight loop.
return clearTimeout(d),d=setTimeout(_,e),y(p)}return void 0===d&&(d=setTimeout(_,e)),f}return e=o(e)||0,r(n)&&(E=!!n.leading,l=(v="maxWait"in n)?a(o(n.maxWait)||0,e):l,g="trailing"in n?!!n.trailing:g),b.cancel=function(){void 0!==d&&clearTimeout(d),h=0,c=p=s=d=void 0},b.flush=function(){return void 0===d?f:I(i())},b}},4075:function(t){t.exports=
/**
 * Checks `value` to determine whether a default value should be returned in
 * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
 * or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.14.0
 * @category Util
 * @param {*} value The value to check.
 * @param {*} defaultValue The default value.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * _.defaultTo(1, 10);
 * // => 1
 *
 * _.defaultTo(undefined, 10);
 * // => 10
 */
function(t,e){return null==t||t!=t?e:t}},4071:function(t){t.exports=
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function(t,e){return t===e||t!=t&&e!=e}},9777:function(t,e,n){var r=n(727)(n(3142));
/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */t.exports=r},3142:function(t,e,n){var r=n(2056),i=n(5462),o=n(8536),a=Math.max;
/* Built-in method references for those with the same name as other `lodash` methods. */t.exports=
/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function(t,e,n){var u=null==t?0:t.length;if(!u)return-1;var c=null==n?0:o(n);return c<0&&(c=a(u+c,0)),r(t,i(e,3),c)}},5720:function(t,e,n){var r=n(727)(n(3758));
/**
 * This method is like `_.find` except that it iterates over elements of
 * `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=collection.length-1] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * _.findLast([1, 2, 3, 4], function(n) {
 *   return n % 2 == 1;
 * });
 * // => 3
 */t.exports=r},3758:function(t,e,n){var r=n(2056),i=n(5462),o=n(8536),a=Math.max,u=Math.min;
/* Built-in method references for those with the same name as other `lodash` methods. */t.exports=
/**
 * This method is like `_.findIndex` except that it iterates over elements
 * of `collection` from right to left.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=array.length-1] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': true },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': false }
 * ];
 *
 * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
 * // => 2
 *
 * // The `_.matches` iteratee shorthand.
 * _.findLastIndex(users, { 'user': 'barney', 'active': true });
 * // => 0
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findLastIndex(users, ['active', false]);
 * // => 2
 *
 * // The `_.property` iteratee shorthand.
 * _.findLastIndex(users, 'active');
 * // => 0
 */
function(t,e,n){var c=null==t?0:t.length;if(!c)return-1;var s=c-1;return void 0!==n&&(s=o(n),s=n<0?a(c+s,0):u(s,c-1)),r(t,i(e,3),s,!0)}},6380:function(t,e,n){var r=n(5265);
/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */t.exports=function(t){return null!=t&&t.length?r(t,1):[]}},5801:function(t,e,n){var r=n(914)();
/**
 * Creates a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flowRight
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flow([_.add, square]);
 * addSquare(1, 2);
 * // => 9
 */t.exports=r},2397:function(t,e,n){var r=n(4970),i=n(8264),o=n(8269),a=n(6377);
/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */t.exports=function(t,e){return(a(t)?r:i)(t,o(e))}},4738:function(t,e,n){var r=n(1957);
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */t.exports=function(t,e,n){var i=null==t?void 0:r(t,e);return void 0===i?n:i}},9290:function(t,e,n){var r=n(6993),i=n(7635);
/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */t.exports=function(t,e){return null!=t&&i(t,e,r)}},1622:function(t){t.exports=
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function(t){return t}},9732:function(t,e,n){var r=n(841),i=n(7013),o=Object.prototype,a=o.hasOwnProperty,u=o.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(t){return i(t)&&a.call(t,"callee")&&!u.call(t,"callee")};
/** Used for built-in method references. */t.exports=c},6377:function(t){
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var e=Array.isArray;t.exports=e},508:function(t,e,n){var r=n(6644),i=n(7924);
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */t.exports=function(t){return null!=t&&i(t.length)&&!r(t)}},6018:function(t,e,n){
/* module decorator */t=n.nmd(t);var r=n(5238),i=n(5786),o=e&&!e.nodeType&&e,a=o&&t&&!t.nodeType&&t,u=a&&a.exports===o?r.Buffer:void 0,c=(u?u.isBuffer:void 0)||i;
/** Detect free variable `exports`. */t.exports=c},6633:function(t,e,n){var r=n(7407),i=n(9937),o=n(9732),a=n(6377),u=n(508),c=n(6018),s=n(8857),l=n(8586),f=Object.prototype.hasOwnProperty;
/** `Object#toString` result references. */t.exports=
/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function(t){if(null==t)return!0;if(u(t)&&(a(t)||"string"==typeof t||"function"==typeof t.splice||c(t)||l(t)||o(t)))return!t.length;var e=i(t);if("[object Map]"==e||"[object Set]"==e)return!t.size;if(s(t))return!r(t).length;for(var n in t)if(f.call(t,n))return!1;return!0}},6644:function(t,e,n){var r=n(3757),i=n(8532);
/** `Object#toString` result references. */t.exports=
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function(t){if(!i(t))return!1;
// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},7924:function(t){t.exports=
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},8532:function(t){t.exports=
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},7013:function(t){t.exports=
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function(t){return null!=t&&"object"==typeof t}},1085:function(t,e,n){var r=n(3757),i=n(6377),o=n(7013);
/** `Object#toString` result references. */t.exports=
/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function(t){return"string"==typeof t||!i(t)&&o(t)&&"[object String]"==r(t)}},1359:function(t,e,n){var r=n(3757),i=n(7013);
/** `Object#toString` result references. */t.exports=
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function(t){return"symbol"==typeof t||i(t)&&"[object Symbol]"==r(t)}},8586:function(t,e,n){var r=n(2195),i=n(7509),o=n(895),a=o&&o.isTypedArray,u=a?i(a):r;
/* Node.js helper references. */t.exports=u},7361:function(t,e,n){var r=n(4979),i=n(7407),o=n(508);
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */t.exports=function(t){return o(t)?r(t):i(t)}},3747:function(t,e,n){var r=n(4979),i=n(9237),o=n(508);
/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */t.exports=function(t){return o(t)?r(t,!0):i(t)}},3729:function(t,e,n){var r=n(2676),i=n(3406),o=n(5462);
/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */t.exports=function(t,e){var n={};return e=o(e,3),i(t,function(t,i,o){r(n,i,e(t,i,o))}),n}},4984:function(t,e,n){var r=n(4544);
/** Error message constants. */
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function i(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,i=e?e.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=t.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(i.Cache||r),n}
// Expose `MapCache`.
i.Cache=r,t.exports=i},3103:function(t){t.exports=
/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */
function(t){if("function"!=typeof t)throw new TypeError("Expected a function");return function(){var e=arguments;switch(e.length){case 0:return!t.call(this);case 1:return!t.call(this,e[0]);case 2:return!t.call(this,e[0],e[1]);case 3:return!t.call(this,e[0],e[1],e[2])}return!t.apply(this,e)}}},6032:function(t){t.exports=
/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function(){
// No operation performed.
}},806:function(t,e,n){var r=n(5238);
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */t.exports=function(){return r.Date.now()}},3452:function(t,e,n){var r=n(5462),i=n(3103),o=n(4103);
/**
 * The opposite of `_.pickBy`; this method creates an object composed of
 * the own and inherited enumerable string keyed properties of `object` that
 * `predicate` doesn't return truthy for. The predicate is invoked with two
 * arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omitBy(object, _.isNumber);
 * // => { 'b': '2' }
 */t.exports=function(t,e){return o(t,i(r(e)))}},4103:function(t,e,n){var r=n(1098),i=n(5462),o=n(7100),a=n(9254);
/**
 * Creates an object composed of the `object` properties `predicate` returns
 * truthy for. The predicate is invoked with two arguments: (value, key).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The source object.
 * @param {Function} [predicate=_.identity] The function invoked per property.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pickBy(object, _.isNumber);
 * // => { 'a': 1, 'c': 3 }
 */t.exports=function(t,e){if(null==t)return{};var n=r(a(t),function(t){return[t]});return e=i(e),o(t,n,function(t,n){return e(t,n[0])})}},8303:function(t,e,n){var r=n(2726),i=n(1374),o=n(7074),a=n(8481);
/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */t.exports=function(t){return o(t)?r(a(t)):i(t)}},1455:function(t,e,n){var r=n(2607),i=n(8264),o=n(5462),a=n(9864),u=n(6377);
/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */t.exports=function(t,e,n){var c=u(t)?r:a,s=arguments.length<3;return c(t,o(e,4),n,s,i)}},4659:function(t,e,n){var r=n(7407),i=n(9937),o=n(508),a=n(1085),u=n(6749);
/** `Object#toString` result references. */t.exports=
/**
 * Gets the size of `collection` by returning its length for array-like
 * values or the number of own enumerable string keyed properties for objects.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @returns {number} Returns the collection size.
 * @example
 *
 * _.size([1, 2, 3]);
 * // => 3
 *
 * _.size({ 'a': 1, 'b': 2 });
 * // => 2
 *
 * _.size('pebbles');
 * // => 7
 */
function(t){if(null==t)return 0;if(o(t))return a(t)?u(t):t.length;var e=i(t);return"[object Map]"==e||"[object Set]"==e?t.size:r(t).length}},1036:function(t){t.exports=
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function(){return[]}},5786:function(t){t.exports=
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function(){return!1}},5082:function(t,e,n){var r=n(8305),i=n(8532);
/** Error message constants. */t.exports=
/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function(t,e,n){var o=!0,a=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return i(n)&&(o="leading"in n?!!n.leading:o,a="trailing"in n?!!n.trailing:a),r(t,e,{leading:o,maxWait:e,trailing:a})}},5597:function(t,e,n){var r=n(6127),i=1/0;
/** Used as references for various `Number` constants. */t.exports=
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function(t){return t?(t=r(t))===i||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}},8536:function(t,e,n){var r=n(5597);
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */t.exports=function(t){var e=r(t),n=e%1;return e==e?n?e-n:e:0}},6127:function(t,e,n){var r=n(1072),i=n(8532),o=n(1359),a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;
/** Used as references for various `Number` constants. */t.exports=
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function(t){if("number"==typeof t)return t;if(o(t))return NaN;if(i(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=i(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=u.test(t);return n||c.test(t)?s(t.slice(2),n?2:8):a.test(t)?NaN:+t}},6214:function(t,e,n){var r=n(9653);
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */t.exports=function(t){return null==t?"":r(t)}},6985:function(t,e,n){var r=n(4281),i=n(9675),o=n(4382),a=n(6377),u=n(7013),c=n(219),s=Object.prototype.hasOwnProperty;
/** Used for built-in method references. */
/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function l(t){if(u(t)&&!a(t)&&!(t instanceof r)){if(t instanceof i)return t;if(s.call(t,"__wrapped__"))return c(t)}return new i(t)}
// Ensure wrappers are instances of `baseLodash`.
l.prototype=o.prototype,l.prototype.constructor=l,t.exports=l},9516:function(t,e,n){"use strict";
// ESM COMPAT FLAG
n.r(e),
// EXPORTS
n.d(e,{compose:()=>/* reexport */R,createStore:()=>/* reexport */O,bindActionCreators:()=>/* reexport */N,combineReducers:()=>/* reexport */w,applyMiddleware:()=>/* reexport */L});
/* ESM default export */const r="object"==typeof global&&global&&global.Object===Object&&global;// CONCATENATED MODULE: ../../app/node_modules/lodash-es/_root.js
/** Detect free variable `self`. */
var i="object"==typeof self&&self&&self.Object===Object&&self;
/** Used as a reference to the global object. */
/* ESM default export */const o=(r||i||Function("return this")()).Symbol;// CONCATENATED MODULE: ../../app/node_modules/lodash-es/_getRawTag.js
/** Used for built-in method references. */
var a=Object.prototype,u=a.hasOwnProperty,c=a.toString,s=o?o.toStringTag:void 0;
/** Used to check objects for own properties. */ // CONCATENATED MODULE: ../../app/node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var l=Object.prototype.toString;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ // CONCATENATED MODULE: ../../app/node_modules/lodash-es/_baseGetTag.js
/** `Object#toString` result references. */
var f=o?o.toStringTag:void 0;
/** Built-in value references. */
/* ESM default export */const d=
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":f&&f in Object(t)?
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function(t){var e=u.call(t,s),n=t[s];try{t[s]=void 0;var r=!0}catch(t){}var i=c.call(t);return r&&(e?t[s]=n:delete t[s]),i}
/* ESM default export */(t):
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function(t){return l.call(t)}
/* ESM default export */(t)},p=(h=Object.getPrototypeOf,E=Object,function(t){return h(E(t))});// CONCATENATED MODULE: ../../app/node_modules/lodash-es/_overArg.js
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
var h,E;
/* ESM default export */ // CONCATENATED MODULE: ../../app/node_modules/lodash-es/isPlainObject.js
/** `Object#toString` result references. */
var v=Function.prototype,g=Object.prototype,y=v.toString,m=g.hasOwnProperty,_=y.call(Object);
/** Used for built-in method references. */
/* ESM default export */const I=
/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function(t){if(!// CONCATENATED MODULE: ../../app/node_modules/lodash-es/isObjectLike.js
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function(t){return null!=t&&"object"==typeof t}
/* ESM default export */(t)||"[object Object]"!=d(t))return!1;var e=p(t);if(null===e)return!0;var n=m.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&y.call(n)==_};
// EXTERNAL MODULE: ../../app/node_modules/redux/node_modules/symbol-observable/es/index.js + 1 modules
var b=n(3485),T={INIT:"@@redux/INIT"};
/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function O(t,e,n){var r;if("function"==typeof e&&void 0===n&&(n=e,e=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(O)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var i=t,o=e,a=[],u=a,c=!1;function s(){u===a&&(u=a.slice())}
/**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */function l(){return o}
/**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */function f(t){if("function"!=typeof t)throw new Error("Expected listener to be a function.");var e=!0;return s(),u.push(t),function(){if(e){e=!1,s();var n=u.indexOf(t);u.splice(n,1)}}}
/**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */function d(t){if(!I(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(c)throw new Error("Reducers may not dispatch actions.");try{c=!0,o=i(o,t)}finally{c=!1}for(var e=a=u,n=0;n<e.length;n++)e[n]();return t}
/**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
// When a store is created, an "INIT" action is dispatched so that every
// reducer returns their initial state. This effectively populates
// the initial state tree.
return d({type:T.INIT}),(r={dispatch:d,subscribe:f,getState:l,replaceReducer:function(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");i=t,d({type:T.INIT})}
/**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */})[b/* default */.Z]=function(){var t,e=f;return(t={
/**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
subscribe:function(t){if("object"!=typeof t)throw new TypeError("Expected the observer to be an object.");function n(){t.next&&t.next(l())}return n(),{unsubscribe:e(n)}}})[b/* default */.Z]=function(){return this},t},r}// CONCATENATED MODULE: ../../app/node_modules/redux/es/combineReducers.js
function A(t,e){var n=e&&e.type;return"Given action "+(n&&'"'+n.toString()+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state.'}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function w(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];"function"==typeof t[i]&&(n[i]=t[i])}var o,a=Object.keys(n);try{!function(t){Object.keys(t).forEach(function(e){var n=t[e];if(void 0===n(void 0,{type:T.INIT}))throw new Error('Reducer "'+e+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+T.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')})}(n)}catch(t){o=t}return function(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],e=arguments[1];if(o)throw o;for(var r=!1,i={},u=0;u<a.length;u++){var c=a[u],s=n[c],l=t[c],f=s(l,e);if(void 0===f){var d=A(c,e);throw new Error(d)}i[c]=f,r=r||f!==l}return r?i:t}}// CONCATENATED MODULE: ../../app/node_modules/redux/es/bindActionCreators.js
function S(t,e){return function(){return e(t.apply(void 0,arguments))}}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */function N(t,e){if("function"==typeof t)return S(t,e);if("object"!=typeof t||null===t)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===t?"null":typeof t)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(t),r={},i=0;i<n.length;i++){var o=n[i],a=t[o];"function"==typeof a&&(r[o]=S(a,e))}return r}// CONCATENATED MODULE: ../../app/node_modules/redux/es/compose.js
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function R(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];if(0===e.length)return function(t){return t};if(1===e.length)return e[0];var r=e[e.length-1],i=e.slice(0,-1);return function(){return i.reduceRight(function(t,e){return e(t)},r.apply(void 0,arguments))}}// CONCATENATED MODULE: ../../app/node_modules/redux/es/applyMiddleware.js
var C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};
/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */function L(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(n,r,i){var o,a=t(n,r,i),u=a.dispatch,c={getState:a.getState,dispatch:function(t){return u(t)}};return o=e.map(function(t){return t(c)}),u=R.apply(void 0,o)(a.dispatch),C({},a,{dispatch:u})}}}},3485:function(t,e,n){"use strict";
// EXPORTS
n.d(e,{Z:()=>/* binding */r}),// CONCATENATED MODULE: ../../app/node_modules/redux/node_modules/symbol-observable/es/index.js
/* module decorator */t=n.hmd(t);
/* ESM default export */const r=// CONCATENATED MODULE: ../../app/node_modules/redux/node_modules/symbol-observable/es/ponyfill.js
function(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:t)},1185:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.clone=u,e.addLast=l,e.addFirst=f,e.removeLast=d,e.removeFirst=p,e.insert=h,e.removeAt=E,e.replaceAt=v,e.getIn=g,e.set=y,e.setIn=_,e.update=I,e.updateIn=b,e.merge=T,e.mergeDeep=O,e.mergeIn=A,e.omit=w,e.addDefaults=S;
/*!
 * Timm
 *
 * Immutability helpers with fast reads and acceptable writes.
 *
 * @copyright Guillermo Grau Panea 2016
 * @license MIT
 */
var r="INVALID_ARGS";
// ===============================================
// ### Helpers
// ===============================================
function i(t){throw new Error(t)}function o(t){var e=Object.keys(t);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e}var a={}.hasOwnProperty;function u(t){if(Array.isArray(t))return t.slice();for(var e=o(t),n={},r=0;r<e.length;r++){var i=e[r];n[i]=t[i]}return n}function c(t,e,n){var a=n;null==a&&i(r);for(var l=!1,f=arguments.length,d=Array(f>3?f-3:0),p=3;p<f;p++)d[p-3]=arguments[p];for(var h=0;h<d.length;h++){var E=d[h];if(null!=E){var v=o(E);if(v.length)for(var g=0;g<=v.length;g++){var y=v[g];if(!t||void 0===a[y]){var m=E[y];e&&s(a[y])&&s(m)&&(m=c(t,e,a[y],m)),void 0!==m&&m!==a[y]&&(l||(l=!0,a=u(a)),a[y]=m)}}}}return a}function s(t){var e=void 0===t?"undefined":n(t);return null!=t&&("object"===e||"function"===e)}
// _deepFreeze = (obj) ->
//   Object.freeze obj
//   for key in Object.getOwnPropertyNames obj
//     val = obj[key]
//     if isObject(val) and not Object.isFrozen val
//       _deepFreeze val
//   obj
// ===============================================
// -- ### Arrays
// ===============================================
// -- #### addLast()
// -- Returns a new array with an appended item or items.
// --
// -- Usage: `addLast<T>(array: Array<T>, val: Array<T>|T): Array<T>`
// --
// -- ```js
// -- arr = ['a', 'b']
// -- arr2 = addLast(arr, 'c')
// -- // ['a', 'b', 'c']
// -- arr2 === arr
// -- // false
// -- arr3 = addLast(arr, ['c', 'd'])
// -- // ['a', 'b', 'c', 'd']
// -- ```
// `array.concat(val)` also handles the scalar case,
// but is apparently very slow
function l(t,e){return Array.isArray(e)?t.concat(e):t.concat([e])}
// -- #### addFirst()
// -- Returns a new array with a prepended item or items.
// --
// -- Usage: `addFirst<T>(array: Array<T>, val: Array<T>|T): Array<T>`
// --
// -- ```js
// -- arr = ['a', 'b']
// -- arr2 = addFirst(arr, 'c')
// -- // ['c', 'a', 'b']
// -- arr2 === arr
// -- // false
// -- arr3 = addFirst(arr, ['c', 'd'])
// -- // ['c', 'd', 'a', 'b']
// -- ```
function f(t,e){return Array.isArray(e)?e.concat(t):[e].concat(t)}
// -- #### removeLast()
// -- Returns a new array removing the last item.
// --
// -- Usage: `removeLast<T>(array: Array<T>): Array<T>`
// --
// -- ```js
// -- arr = ['a', 'b']
// -- arr2 = removeLast(arr)
// -- // ['a']
// -- arr2 === arr
// -- // false
// --
// -- // The same array is returned if there are no changes:
// -- arr3 = []
// -- removeLast(arr3) === arr3
// -- // true
// -- ```
function d(t){return t.length?t.slice(0,t.length-1):t}
// -- #### removeFirst()
// -- Returns a new array removing the first item.
// --
// -- Usage: `removeFirst<T>(array: Array<T>): Array<T>`
// --
// -- ```js
// -- arr = ['a', 'b']
// -- arr2 = removeFirst(arr)
// -- // ['b']
// -- arr2 === arr
// -- // false
// --
// -- // The same array is returned if there are no changes:
// -- arr3 = []
// -- removeFirst(arr3) === arr3
// -- // true
// -- ```
function p(t){return t.length?t.slice(1):t}
// -- #### insert()
// -- Returns a new array obtained by inserting an item or items
// -- at a specified index.
// --
// -- Usage: `insert<T>(array: Array<T>, idx: number, val: Array<T>|T): Array<T>`
// --
// -- ```js
// -- arr = ['a', 'b', 'c']
// -- arr2 = insert(arr, 1, 'd')
// -- // ['a', 'd', 'b', 'c']
// -- arr2 === arr
// -- // false
// -- insert(arr, 1, ['d', 'e'])
// -- // ['a', 'd', 'e', 'b', 'c']
// -- ```
function h(t,e,n){return t.slice(0,e).concat(Array.isArray(n)?n:[n]).concat(t.slice(e))}
// -- #### removeAt()
// -- Returns a new array obtained by removing an item at
// -- a specified index.
// --
// -- Usage: `removeAt<T>(array: Array<T>, idx: number): Array<T>`
// --
// -- ```js
// -- arr = ['a', 'b', 'c']
// -- arr2 = removeAt(arr, 1)
// -- // ['a', 'c']
// -- arr2 === arr
// -- // false
// --
// -- // The same array is returned if there are no changes:
// -- removeAt(arr, 4) === arr
// -- // true
// -- ```
function E(t,e){return e>=t.length||e<0?t:t.slice(0,e).concat(t.slice(e+1))}
// -- #### replaceAt()
// -- Returns a new array obtained by replacing an item at
// -- a specified index. If the provided item is the same as
// -- (*referentially equal to*) the previous item at that position,
// -- the original array is returned.
// --
// -- Usage: `replaceAt<T>(array: Array<T>, idx: number, newItem: T): Array<T>`
// --
// -- ```js
// -- arr = ['a', 'b', 'c']
// -- arr2 = replaceAt(arr, 1, 'd')
// -- // ['a', 'd', 'c']
// -- arr2 === arr
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- replaceAt(arr, 1, 'b') === arr
// -- // true
// -- ```
function v(t,e,n){if(t[e]===n)return t;for(var r=t.length,i=Array(r),o=0;o<r;o++)i[o]=t[o];return i[e]=n,i}
// ===============================================
// -- ### Collections (objects and arrays)
// ===============================================
// -- The following types are used throughout this section
// -- ```js
// -- type ArrayOrObject = Array<any>|Object;
// -- type Key = number|string;
// -- ```
// -- #### getIn()
// -- Returns a value from an object at a given path. Works with
// -- nested arrays and objects. If the path does not exist, it returns
// -- `undefined`.
// --
// -- Usage: `getIn(obj: ?ArrayOrObject, path: Array<Key>): any`
// --
// -- ```js
// -- obj = { a: 1, b: 2, d: { d1: 3, d2: 4 }, e: ['a', 'b', 'c'] }
// -- getIn(obj, ['d', 'd1'])
// -- // 3
// -- getIn(obj, ['e', 1])
// -- // 'b'
// -- ```
function g(t,e){if(!Array.isArray(e)&&i(r),null!=t){for(var n=t,o=0;o<e.length;o++){var a=e[o];if(void 0===(n=null!=n?n[a]:void 0))return n}return n}}
// -- #### set()
// -- Returns a new object with a modified attribute.
// -- If the provided value is the same as (*referentially equal to*)
// -- the previous value, the original object is returned.
// --
// -- Usage: `set<T>(obj: ?T, key: Key, val: any): T`
// --
// -- ```js
// -- obj = { a: 1, b: 2, c: 3 }
// -- obj2 = set(obj, 'b', 5)
// -- // { a: 1, b: 5, c: 3 }
// -- obj2 === obj
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- set(obj, 'b', 2) === obj
// -- // true
// -- ```
function y(t,e,n){var r=null==t?"number"==typeof e?[]:{}:t;if(r[e]===n)return r;var i=u(r);return i[e]=n,i}
// -- #### setIn()
// -- Returns a new object with a modified **nested** attribute.
// --
// -- Notes:
// --
// -- * If the provided value is the same as (*referentially equal to*)
// -- the previous value, the original object is returned.
// -- * If the path does not exist, it will be created before setting
// -- the new value.
// --
// -- Usage: `setIn<T: ArrayOrObject>(obj: T, path: Array<Key>, val: any): T`
// --
// -- ```js
// -- obj = { a: 1, b: 2, d: { d1: 3, d2: 4 }, e: { e1: 'foo', e2: 'bar' } }
// -- obj2 = setIn(obj, ['d', 'd1'], 4)
// -- // { a: 1, b: 2, d: { d1: 4, d2: 4 }, e: { e1: 'foo', e2: 'bar' } }
// -- obj2 === obj
// -- // false
// -- obj2.d === obj.d
// -- // false
// -- obj2.e === obj.e
// -- // true
// --
// -- // The same object is returned if there are no changes:
// -- obj3 = setIn(obj, ['d', 'd1'], 3)
// -- // { a: 1, b: 2, d: { d1: 3, d2: 4 }, e: { e1: 'foo', e2: 'bar' } }
// -- obj3 === obj
// -- // true
// -- obj3.d === obj.d
// -- // true
// -- obj3.e === obj.e
// -- // true
// --
// -- // ... unknown paths create intermediate keys. Numeric segments are treated as array indices:
// -- setIn({ a: 3 }, ['unknown', 0, 'path'], 4)
// -- // { a: 3, unknown: [{ path: 4 }] }
// -- ```
function m(t,e,n,r){var i=e[r];return y(t,i,r===e.length-1?n:m(s(t)&&s(t[i])?t[i]:"number"==typeof e[r+1]?[]:{},e,n,r+1))}function _(t,e,n){return e.length?m(t,e,n,0):n}
// -- #### update()
// -- Returns a new object with a modified attribute,
// -- calculated via a user-provided callback based on the current value.
// -- If the calculated value is the same as (*referentially equal to*)
// -- the previous value, the original object is returned.
// --
// -- Usage: `update<T: ArrayOrObject>(obj: T, key: Key,
// -- fnUpdate: (prevValue: any) => any): T`
// --
// -- ```js
// -- obj = { a: 1, b: 2, c: 3 }
// -- obj2 = update(obj, 'b', (val) => val + 1)
// -- // { a: 1, b: 3, c: 3 }
// -- obj2 === obj
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- update(obj, 'b', (val) => val) === obj
// -- // true
// -- ```
function I(t,e,n){return y(t,e,n(null==t?void 0:t[e]))}
// -- #### updateIn()
// -- Returns a new object with a modified **nested** attribute,
// -- calculated via a user-provided callback based on the current value.
// -- If the calculated value is the same as (*referentially equal to*)
// -- the previous value, the original object is returned.
// --
// -- Usage: `updateIn<T: ArrayOrObject>(obj: T, path: Array<Key>,
// -- fnUpdate: (prevValue: any) => any): T`
// --
// -- ```js
// -- obj = { a: 1, d: { d1: 3, d2: 4 } }
// -- obj2 = updateIn(obj, ['d', 'd1'], (val) => val + 1)
// -- // { a: 1, d: { d1: 4, d2: 4 } }
// -- obj2 === obj
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- obj3 = updateIn(obj, ['d', 'd1'], (val) => val)
// -- // { a: 1, d: { d1: 3, d2: 4 } }
// -- obj3 === obj
// -- // true
// -- ```
function b(t,e,n){return _(t,e,n(g(t,e)))}
// -- #### merge()
// -- Returns a new object built as follows: the overlapping keys from the
// -- second one overwrite the corresponding entries from the first one.
// -- Similar to `Object.assign()`, but immutable.
// --
// -- Usage:
// --
// -- * `merge(obj1: Object, obj2: ?Object): Object`
// -- * `merge(obj1: Object, ...objects: Array<?Object>): Object`
// --
// -- The unmodified `obj1` is returned if `obj2` does not *provide something
// -- new to* `obj1`, i.e. if either of the following
// -- conditions are true:
// --
// -- * `obj2` is `null` or `undefined`
// -- * `obj2` is an object, but it is empty
// -- * All attributes of `obj2` are `undefined`
// -- * All attributes of `obj2` are referentially equal to the
// --   corresponding attributes of `obj1`
// --
// -- Note that `undefined` attributes in `obj2` do not modify the
// -- corresponding attributes in `obj1`.
// --
// -- ```js
// -- obj1 = { a: 1, b: 2, c: 3 }
// -- obj2 = { c: 4, d: 5 }
// -- obj3 = merge(obj1, obj2)
// -- // { a: 1, b: 2, c: 4, d: 5 }
// -- obj3 === obj1
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- merge(obj1, { c: 3 }) === obj1
// -- // true
// -- ```
function T(t,e,n,r,i,o){for(var a=arguments.length,u=Array(a>6?a-6:0),s=6;s<a;s++)u[s-6]=arguments[s];return u.length?c.call.apply(c,[null,!1,!1,t,e,n,r,i,o].concat(u)):c(!1,!1,t,e,n,r,i,o)}
// -- #### mergeDeep()
// -- Returns a new object built as follows: the overlapping keys from the
// -- second one overwrite the corresponding entries from the first one.
// -- If both the first and second entries are objects they are merged recursively.
// -- Similar to `Object.assign()`, but immutable, and deeply merging.
// --
// -- Usage:
// --
// -- * `mergeDeep(obj1: Object, obj2: ?Object): Object`
// -- * `mergeDeep(obj1: Object, ...objects: Array<?Object>): Object`
// --
// -- The unmodified `obj1` is returned if `obj2` does not *provide something
// -- new to* `obj1`, i.e. if either of the following
// -- conditions are true:
// --
// -- * `obj2` is `null` or `undefined`
// -- * `obj2` is an object, but it is empty
// -- * All attributes of `obj2` are `undefined`
// -- * All attributes of `obj2` are referentially equal to the
// --   corresponding attributes of `obj1`
// --
// -- Note that `undefined` attributes in `obj2` do not modify the
// -- corresponding attributes in `obj1`.
// --
// -- ```js
// -- obj1 = { a: 1, b: 2, c: { a: 1 } }
// -- obj2 = { b: 3, c: { b: 2 } }
// -- obj3 = mergeDeep(obj1, obj2)
// -- // { a: 1, b: 3, c: { a: 1, b: 2 }  }
// -- obj3 === obj1
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- mergeDeep(obj1, { c: { a: 1 } }) === obj1
// -- // true
// -- ```
function O(t,e,n,r,i,o){for(var a=arguments.length,u=Array(a>6?a-6:0),s=6;s<a;s++)u[s-6]=arguments[s];return u.length?c.call.apply(c,[null,!1,!0,t,e,n,r,i,o].concat(u)):c(!1,!0,t,e,n,r,i,o)}
// -- #### mergeIn()
// -- Similar to `merge()`, but merging the value at a given nested path.
// -- Note that the returned type is the same as that of the first argument.
// --
// -- Usage:
// --
// -- * `mergeIn<T: ArrayOrObject>(obj1: T, path: Array<Key>, obj2: ?Object): T`
// -- * `mergeIn<T: ArrayOrObject>(obj1: T, path: Array<Key>,
// -- ...objects: Array<?Object>): T`
// --
// -- ```js
// -- obj1 = { a: 1, d: { b: { d1: 3, d2: 4 } } }
// -- obj2 = { d3: 5 }
// -- obj3 = mergeIn(obj1, ['d', 'b'], obj2)
// -- // { a: 1, d: { b: { d1: 3, d2: 4, d3: 5 } } }
// -- obj3 === obj1
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- mergeIn(obj1, ['d', 'b'], { d2: 4 }) === obj1
// -- // true
// -- ```
function A(t,e,n,r,i,o,a){var u=g(t,e);null==u&&(u={});for(var s=arguments.length,l=Array(s>7?s-7:0),f=7;f<s;f++)l[f-7]=arguments[f];return _(t,e,l.length?c.call.apply(c,[null,!1,!1,u,n,r,i,o,a].concat(l)):c(!1,!1,u,n,r,i,o,a))}
// -- #### omit()
// -- Returns an object excluding one or several attributes.
// --
// -- Usage: `omit(obj: Object, attrs: Array<string>|string): Object`

// -- ```js
// -- obj = { a: 1, b: 2, c: 3, d: 4 }
// -- omit(obj, 'a')
// -- // { b: 2, c: 3, d: 4 }
// -- omit(obj, ['b', 'c'])
// -- // { a: 1, d: 4 }
// --
// -- // The same object is returned if there are no changes:
// -- omit(obj, 'z') === obj1
// -- // true
// -- ```
function w(t,e){for(var n=Array.isArray(e)?e:[e],r=!1,i=0;i<n.length;i++)if(a.call(t,n[i])){r=!0;break}if(!r)return t;for(var u={},c=o(t),s=0;s<c.length;s++){var l=c[s];n.indexOf(l)>=0||(u[l]=t[l])}return u}
// -- #### addDefaults()
// -- Returns a new object built as follows: `undefined` keys in the first one
// -- are filled in with the corresponding values from the second one
// -- (even if they are `null`).
// --
// -- Usage:
// --
// -- * `addDefaults(obj: Object, defaults: Object): Object`
// -- * `addDefaults(obj: Object, ...defaultObjects: Array<?Object>): Object`
// --
// -- ```js
// -- obj1 = { a: 1, b: 2, c: 3 }
// -- obj2 = { c: 4, d: 5, e: null }
// -- obj3 = addDefaults(obj1, obj2)
// -- // { a: 1, b: 2, c: 3, d: 5, e: null }
// -- obj3 === obj1
// -- // false
// --
// -- // The same object is returned if there are no changes:
// -- addDefaults(obj1, { c: 4 }) === obj1
// -- // true
// -- ```
function S(t,e,n,r,i,o){for(var a=arguments.length,u=Array(a>6?a-6:0),s=6;s<a;s++)u[s-6]=arguments[s];return u.length?c.call.apply(c,[null,!0,!1,t,e,n,r,i,o].concat(u)):c(!0,!1,t,e,n,r,i,o)}
// ===============================================
// ### Public API
// ===============================================
var N={clone:u,addLast:l,addFirst:f,removeLast:d,removeFirst:p,insert:h,removeAt:E,replaceAt:v,getIn:g,
// eslint-disable-next-line object-shorthand
set:y,// so that flow doesn't complain
setIn:_,update:I,updateIn:b,merge:T,mergeDeep:O,mergeIn:A,omit:w,addDefaults:S};e.default=N},5487:function(){"use strict";
/* eslint-disable eslint-comments/no-unlimited-disable */ /* eslint-disable */
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/* prettier-ignore */window.tram=function(t){function e(t,e){return(new F.Bare).init(t,e)}function n(t){return t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})}function r(t){var e=parseInt(t.slice(1),16);return[e>>16&255,e>>8&255,255&e]}function i(t,e,n){return"#"+(1<<24|t<<16|e<<8|n).toString(16).slice(1)}function o(){}function a(t,e,n){if(void 0!==e&&(n=e),void 0===t)return n;var r=n;return K.test(t)||!Q.test(t)?r=parseInt(t,10):Q.test(t)&&(r=1e3*parseFloat(t)),0>r&&(r=0),r==r?r:n}function u(t){B.debug&&window&&window.console.warn(t)}var c=function(t,e){function n(t){return"object"==typeof t}function r(t){return"function"==typeof t}function i(){}return function o(a,u){function c(){var t=new s;return r(t.init)&&t.init.apply(t,arguments),t}function s(){}void 0===u&&(u=a,a=Object),c.Bare=s;var l,f=i[t]=a[t],d=s[t]=c[t]=new i;return d.constructor=c,c.mixin=function(e){return s[t]=c[t]=o(c,e)[t],c},c.open=function(t){if(l={},r(t)?l=t.call(c,d,f,c,a):n(t)&&(l=t),n(l))for(var i in l)e.call(l,i)&&(d[i]=l[i]);return r(d.init)||(d.init=a),c},c.open(u)}}("prototype",{}.hasOwnProperty),s={ease:["ease",function(t,e,n,r){var i=(t/=r)*t,o=i*t;return e+n*(-2.75*o*i+11*i*i+-15.5*o+8*i+.25*t)}],"ease-in":["ease-in",function(t,e,n,r){var i=(t/=r)*t,o=i*t;return e+n*(-1*o*i+3*i*i+-3*o+2*i)}],"ease-out":["ease-out",function(t,e,n,r){var i=(t/=r)*t,o=i*t;return e+n*(.3*o*i+-1.6*i*i+2.2*o+-1.8*i+1.9*t)}],"ease-in-out":["ease-in-out",function(t,e,n,r){var i=(t/=r)*t,o=i*t;return e+n*(2*o*i+-5*i*i+2*o+2*i)}],linear:["linear",function(t,e,n,r){return n*t/r+e}],"ease-in-quad":["cubic-bezier(0.550, 0.085, 0.680, 0.530)",function(t,e,n,r){return n*(t/=r)*t+e}],"ease-out-quad":["cubic-bezier(0.250, 0.460, 0.450, 0.940)",function(t,e,n,r){return-n*(t/=r)*(t-2)+e}],"ease-in-out-quad":["cubic-bezier(0.455, 0.030, 0.515, 0.955)",function(t,e,n,r){return(t/=r/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}],"ease-in-cubic":["cubic-bezier(0.550, 0.055, 0.675, 0.190)",function(t,e,n,r){return n*(t/=r)*t*t+e}],"ease-out-cubic":["cubic-bezier(0.215, 0.610, 0.355, 1)",function(t,e,n,r){return n*((t=t/r-1)*t*t+1)+e}],"ease-in-out-cubic":["cubic-bezier(0.645, 0.045, 0.355, 1)",function(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e}],"ease-in-quart":["cubic-bezier(0.895, 0.030, 0.685, 0.220)",function(t,e,n,r){return n*(t/=r)*t*t*t+e}],"ease-out-quart":["cubic-bezier(0.165, 0.840, 0.440, 1)",function(t,e,n,r){return-n*((t=t/r-1)*t*t*t-1)+e}],"ease-in-out-quart":["cubic-bezier(0.770, 0, 0.175, 1)",function(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e}],"ease-in-quint":["cubic-bezier(0.755, 0.050, 0.855, 0.060)",function(t,e,n,r){return n*(t/=r)*t*t*t*t+e}],"ease-out-quint":["cubic-bezier(0.230, 1, 0.320, 1)",function(t,e,n,r){return n*((t=t/r-1)*t*t*t*t+1)+e}],"ease-in-out-quint":["cubic-bezier(0.860, 0, 0.070, 1)",function(t,e,n,r){return(t/=r/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e}],"ease-in-sine":["cubic-bezier(0.470, 0, 0.745, 0.715)",function(t,e,n,r){return-n*Math.cos(t/r*(Math.PI/2))+n+e}],"ease-out-sine":["cubic-bezier(0.390, 0.575, 0.565, 1)",function(t,e,n,r){return n*Math.sin(t/r*(Math.PI/2))+e}],"ease-in-out-sine":["cubic-bezier(0.445, 0.050, 0.550, 0.950)",function(t,e,n,r){return-n/2*(Math.cos(Math.PI*t/r)-1)+e}],"ease-in-expo":["cubic-bezier(0.950, 0.050, 0.795, 0.035)",function(t,e,n,r){return 0===t?e:n*Math.pow(2,10*(t/r-1))+e}],"ease-out-expo":["cubic-bezier(0.190, 1, 0.220, 1)",function(t,e,n,r){return t===r?e+n:n*(1-Math.pow(2,-10*t/r))+e}],"ease-in-out-expo":["cubic-bezier(1, 0, 0, 1)",function(t,e,n,r){return 0===t?e:t===r?e+n:(t/=r/2)<1?n/2*Math.pow(2,10*(t-1))+e:n/2*(2-Math.pow(2,-10*--t))+e}],"ease-in-circ":["cubic-bezier(0.600, 0.040, 0.980, 0.335)",function(t,e,n,r){return-n*(Math.sqrt(1-(t/=r)*t)-1)+e}],"ease-out-circ":["cubic-bezier(0.075, 0.820, 0.165, 1)",function(t,e,n,r){return n*Math.sqrt(1-(t=t/r-1)*t)+e}],"ease-in-out-circ":["cubic-bezier(0.785, 0.135, 0.150, 0.860)",function(t,e,n,r){return(t/=r/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+e:n/2*(Math.sqrt(1-(t-=2)*t)+1)+e}],"ease-in-back":["cubic-bezier(0.600, -0.280, 0.735, 0.045)",function(t,e,n,r,i){return void 0===i&&(i=1.70158),n*(t/=r)*t*((i+1)*t-i)+e}],"ease-out-back":["cubic-bezier(0.175, 0.885, 0.320, 1.275)",function(t,e,n,r,i){return void 0===i&&(i=1.70158),n*((t=t/r-1)*t*((i+1)*t+i)+1)+e}],"ease-in-out-back":["cubic-bezier(0.680, -0.550, 0.265, 1.550)",function(t,e,n,r,i){return void 0===i&&(i=1.70158),(t/=r/2)<1?n/2*t*t*((1+(i*=1.525))*t-i)+e:n/2*((t-=2)*t*((1+(i*=1.525))*t+i)+2)+e}]},l={"ease-in-back":"cubic-bezier(0.600, 0, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1)","ease-in-out-back":"cubic-bezier(0.680, 0, 0.265, 1)"},f=document,d=window,p="bkwld-tram",h=/[\-\.0-9]/g,E=/[A-Z]/,v="number",g=/^(rgb|#)/,y=/(em|cm|mm|in|pt|pc|px)$/,m=/(em|cm|mm|in|pt|pc|px|%)$/,_=/(deg|rad|turn)$/,I="unitless",b=/(all|none) 0s ease 0s/,T=/^(width|height)$/,O=" ",A=f.createElement("a"),w=["Webkit","Moz","O","ms"],S=["-webkit-","-moz-","-o-","-ms-"],N=function(t){if(t in A.style)return{dom:t,css:t};var e,n,r="",i=t.split("-");for(e=0;e<i.length;e++)r+=i[e].charAt(0).toUpperCase()+i[e].slice(1);for(e=0;e<w.length;e++)if((n=w[e]+r)in A.style)return{dom:n,css:S[e]+t}},R=e.support={bind:Function.prototype.bind,transform:N("transform"),transition:N("transition"),backface:N("backface-visibility"),timing:N("transition-timing-function")};if(R.transition){var C=R.timing.dom;if(A.style[C]=s["ease-in-back"][0],!A.style[C])for(var L in l)s[L][0]=l[L]}var x=e.frame=function(){var t=d.requestAnimationFrame||d.webkitRequestAnimationFrame||d.mozRequestAnimationFrame||d.oRequestAnimationFrame||d.msRequestAnimationFrame;return t&&R.bind?t.bind(d):function(t){d.setTimeout(t,16)}}(),P=e.now=function(){var t=d.performance,e=t&&(t.now||t.webkitNow||t.msNow||t.mozNow);return e&&R.bind?e.bind(t):Date.now||function(){return+new Date}}(),M=c(function(e){function r(t,e){var n=function(t){for(var e=-1,n=t?t.length:0,r=[];++e<n;){var i=t[e];i&&r.push(i)}return r}((""+t).split(O)),r=n[0];e=e||{};var i=$[r];if(!i)return u("Unsupported property: "+r);if(!e.weak||!this.props[r]){var o=i[0],a=this.props[r];return a||(a=this.props[r]=new o.Bare),a.init(this.$el,n,i,e),a}}function i(t,e,n){if(t){var i=typeof t;if(e||(this.timer&&this.timer.destroy(),this.queue=[],this.active=!1),"number"==i&&e)return this.timer=new U({duration:t,context:this,complete:o}),void(this.active=!0);if("string"==i&&e){switch(t){case"hide":s.call(this);break;case"stop":c.call(this);break;case"redraw":l.call(this);break;default:r.call(this,t,n&&n[1])}return o.call(this)}if("function"==i)return void t.call(this,this);if("object"==i){var u=0;d.call(this,t,function(t,e){t.span>u&&(u=t.span),t.stop(),t.animate(e)},function(t){"wait"in t&&(u=a(t.wait,0))}),f.call(this),u>0&&(this.timer=new U({duration:u,context:this}),this.active=!0,e&&(this.timer.complete=o));var p=this,h=!1,E={};x(function(){d.call(p,t,function(t){t.active&&(h=!0,E[t.name]=t.nextStyle)}),h&&p.$el.css(E)})}}}function o(){if(this.timer&&this.timer.destroy(),this.active=!1,this.queue.length){var t=this.queue.shift();i.call(this,t.options,!0,t.args)}}function c(t){var e;this.timer&&this.timer.destroy(),this.queue=[],this.active=!1,"string"==typeof t?(e={})[t]=1:e="object"==typeof t&&null!=t?t:this.props,d.call(this,e,h),f.call(this)}function s(){c.call(this),this.el.style.display="none"}function l(){this.el.offsetHeight}function f(){var t,e,n=[];for(t in this.upstream&&n.push(this.upstream),this.props)(e=this.props[t]).active&&n.push(e.string);n=n.join(","),this.style!==n&&(this.style=n,this.el.style[R.transition.dom]=n)}function d(t,e,i){var o,a,u,c,s=e!==h,l={};for(o in t)u=t[o],o in Y?(l.transform||(l.transform={}),l.transform[o]=u):(E.test(o)&&(o=n(o)),o in $?l[o]=u:(c||(c={}),c[o]=u));for(o in l){if(u=l[o],!(a=this.props[o])){if(!s)continue;a=r.call(this,o)}e.call(this,a,u)}i&&c&&i.call(this,c)}function h(t){t.stop()}function v(t,e){t.set(e)}function g(t){this.$el.css(t)}function y(t,n){e[t]=function(){return this.children?m.call(this,n,arguments):(this.el&&n.apply(this,arguments),this)}}function m(t,e){var n,r=this.children.length;for(n=0;r>n;n++)t.apply(this.children[n],e);return this}e.init=function(e){if(this.$el=t(e),this.el=this.$el[0],this.props={},this.queue=[],this.style="",this.active=!1,B.keepInherited&&!B.fallback){var n=z(this.el,"transition");n&&!b.test(n)&&(this.upstream=n)}R.backface&&B.hideBackface&&W(this.el,R.backface.css,"hidden")},y("add",r),y("start",i),y("wait",function(t){t=a(t,0),this.active?this.queue.push({options:t}):(this.timer=new U({duration:t,context:this,complete:o}),this.active=!0)}),y("then",function(t){return this.active?(this.queue.push({options:t,args:arguments}),void(this.timer.complete=o)):u("No active transition timer. Use start() or wait() before then().")}),y("next",o),y("stop",c),y("set",function(t){c.call(this,t),d.call(this,t,v,g)}),y("show",function(t){"string"!=typeof t&&(t="block"),this.el.style.display=t}),y("hide",s),y("redraw",l),y("destroy",function(){c.call(this),t.removeData(this.el,p),this.$el=this.el=null})}),F=c(M,function(e){function n(e,n){var r=t.data(e,p)||t.data(e,p,new M.Bare);return r.el||r.init(e),n?r.start(n):r}e.init=function(e,r){var i=t(e);if(!i.length)return this;if(1===i.length)return n(i[0],r);var o=[];return i.each(function(t,e){o.push(n(e,r))}),this.children=o,this}}),D=c(function(t){function e(){var t=this.get();this.update("auto");var e=this.get();return this.update(t),e}function n(t){var e=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);return(e?i(e[1],e[2],e[3]):t).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")}t.init=function(t,e,n,r){this.$el=t,this.el=t[0];var i=e[0];n[2]&&(i=n[2]),H[i]&&(i=H[i]),this.name=i,this.type=n[1],this.duration=a(e[1],this.duration,500),this.ease=function(t,e,n){return void 0!==e&&(n=e),t in s?t:n}(e[2],this.ease,"ease"),this.delay=a(e[3],this.delay,0),this.span=this.duration+this.delay,this.active=!1,this.nextStyle=null,this.auto=T.test(this.name),this.unit=r.unit||this.unit||B.defaultUnit,this.angle=r.angle||this.angle||B.defaultAngle,B.fallback||r.fallback?this.animate=this.fallback:(this.animate=this.transition,this.string=this.name+O+this.duration+"ms"+("ease"!=this.ease?O+s[this.ease][0]:"")+(this.delay?O+this.delay+"ms":""))},t.set=function(t){t=this.convert(t,this.type),this.update(t),this.redraw()},t.transition=function(t){this.active=!0,t=this.convert(t,this.type),this.auto&&("auto"==this.el.style[this.name]&&(this.update(this.get()),this.redraw()),"auto"==t&&(t=e.call(this))),this.nextStyle=t},t.fallback=function(t){var n=this.el.style[this.name]||this.convert(this.get(),this.type);t=this.convert(t,this.type),this.auto&&("auto"==n&&(n=this.convert(this.get(),this.type)),"auto"==t&&(t=e.call(this))),this.tween=new V({from:n,to:t,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.get=function(){return z(this.el,this.name)},t.update=function(t){W(this.el,this.name,t)},t.stop=function(){(this.active||this.nextStyle)&&(this.active=!1,this.nextStyle=null,W(this.el,this.name,this.get()));var t=this.tween;t&&t.context&&t.destroy()},t.convert=function(t,e){if("auto"==t&&this.auto)return t;var r,i="number"==typeof t,o="string"==typeof t;switch(e){case v:if(i)return t;if(o&&""===t.replace(h,""))return+t;r="number(unitless)";break;case g:if(o){if(""===t&&this.original)return this.original;if(e.test(t))return"#"==t.charAt(0)&&7==t.length?t:n(t)}r="hex or rgb string";break;case y:if(i)return t+this.unit;if(o&&e.test(t))return t;r="number(px) or string(unit)";break;case m:if(i)return t+this.unit;if(o&&e.test(t))return t;r="number(px) or string(unit or %)";break;case _:if(i)return t+this.angle;if(o&&e.test(t))return t;r="number(deg) or string(angle)";break;case I:if(i)return t;if(o&&m.test(t))return t;r="number(unitless) or string(unit or %)"}return function(t,e){u("Type warning: Expected: ["+t+"] Got: ["+typeof e+"] "+e)}(r,t),t},t.redraw=function(){this.el.offsetHeight}}),j=c(D,function(t,e){t.init=function(){e.init.apply(this,arguments),this.original||(this.original=this.convert(this.get(),g))}}),k=c(D,function(t,e){t.init=function(){e.init.apply(this,arguments),this.animate=this.fallback},t.get=function(){return this.$el[this.name]()},t.update=function(t){this.$el[this.name](t)}}),G=c(D,function(t,e){function n(t,e){var n,r,i,o,a;for(n in t)i=(o=Y[n])[0],r=o[1]||n,a=this.convert(t[n],i),e.call(this,r,a,i)}t.init=function(){e.init.apply(this,arguments),this.current||(this.current={},Y.perspective&&B.perspective&&(this.current.perspective=B.perspective,W(this.el,this.name,this.style(this.current)),this.redraw()))},t.set=function(t){n.call(this,t,function(t,e){this.current[t]=e}),W(this.el,this.name,this.style(this.current)),this.redraw()},t.transition=function(t){var e=this.values(t);this.tween=new X({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease});var n,r={};for(n in this.current)r[n]=n in e?e[n]:this.current[n];this.active=!0,this.nextStyle=this.style(r)},t.fallback=function(t){var e=this.values(t);this.tween=new X({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.update=function(){W(this.el,this.name,this.style(this.current))},t.style=function(t){var e,n="";for(e in t)n+=e+"("+t[e]+") ";return n},t.values=function(t){var e,r={};return n.call(this,t,function(t,n,i){r[t]=n,void 0===this.current[t]&&(e=0,~t.indexOf("scale")&&(e=1),this.current[t]=this.convert(e,i))}),r}}),V=c(function(e){function n(){var t,e,r,i=c.length;if(i)for(x(n),e=P(),t=i;t--;)(r=c[t])&&r.render(e)}var a={ease:s.ease[1],from:0,to:1};e.init=function(t){this.duration=t.duration||0,this.delay=t.delay||0;var e=t.ease||a.ease;s[e]&&(e=s[e][1]),"function"!=typeof e&&(e=a.ease),this.ease=e,this.update=t.update||o,this.complete=t.complete||o,this.context=t.context||this,this.name=t.name;var n=t.from,r=t.to;void 0===n&&(n=a.from),void 0===r&&(r=a.to),this.unit=t.unit||"","number"==typeof n&&"number"==typeof r?(this.begin=n,this.change=r-n):this.format(r,n),this.value=this.begin+this.unit,this.start=P(),!1!==t.autoplay&&this.play()},e.play=function(){this.active||(this.start||(this.start=P()),this.active=!0,function(t){1===c.push(t)&&x(n)}(this))},e.stop=function(){this.active&&(this.active=!1,function(e){var n,r=t.inArray(e,c);r>=0&&(n=c.slice(r+1),c.length=r,n.length&&(c=c.concat(n)))}(this))},e.render=function(t){var e,n=t-this.start;if(this.delay){if(n<=this.delay)return;n-=this.delay}if(n<this.duration){var r=this.ease(n,0,1,this.duration);return e=this.startRGB?function(t,e,n){return i(t[0]+n*(e[0]-t[0]),t[1]+n*(e[1]-t[1]),t[2]+n*(e[2]-t[2]))}(this.startRGB,this.endRGB,r):function(t){return Math.round(t*l)/l}(this.begin+r*this.change),this.value=e+this.unit,void this.update.call(this.context,this.value)}e=this.endHex||this.begin+this.change,this.value=e+this.unit,this.update.call(this.context,this.value),this.complete.call(this.context),this.destroy()},e.format=function(t,e){if(e+="","#"==(t+="").charAt(0))return this.startRGB=r(e),this.endRGB=r(t),this.endHex=t,this.begin=0,void(this.change=1);if(!this.unit){var n=e.replace(h,"");n!==t.replace(h,"")&&function(t,e,n){u("Units do not match ["+t+"]: "+e+", "+n)}("tween",e,t),this.unit=n}e=parseFloat(e),t=parseFloat(t),this.begin=this.value=e,this.change=t-e},e.destroy=function(){this.stop(),this.context=null,this.ease=this.update=this.complete=o};var c=[],l=1e3}),U=c(V,function(t){t.init=function(t){this.duration=t.duration||0,this.complete=t.complete||o,this.context=t.context,this.play()},t.render=function(t){t-this.start<this.duration||(this.complete.call(this.context),this.destroy())}}),X=c(V,function(t,e){t.init=function(t){var e,n;for(e in this.context=t.context,this.update=t.update,this.tweens=[],this.current=t.current,t.values)n=t.values[e],this.current[e]!==n&&this.tweens.push(new V({name:e,from:this.current[e],to:n,duration:t.duration,delay:t.delay,ease:t.ease,autoplay:!1}));this.play()},t.render=function(t){var e,n,r=!1;for(e=this.tweens.length;e--;)(n=this.tweens[e]).context&&(n.render(t),this.current[n.name]=n.value,r=!0);return r?void(this.update&&this.update.call(this.context)):this.destroy()},t.destroy=function(){if(e.destroy.call(this),this.tweens){var t;for(t=this.tweens.length;t--;)this.tweens[t].destroy();this.tweens=null,this.current=null}}}),B=e.config={debug:!1,defaultUnit:"px",defaultAngle:"deg",keepInherited:!1,hideBackface:!1,perspective:"",fallback:!R.transition,agentTests:[]};e.fallback=function(t){if(!R.transition)return B.fallback=!0;B.agentTests.push("("+t+")");var e=new RegExp(B.agentTests.join("|"),"i");B.fallback=e.test(navigator.userAgent)},e.fallback("6.0.[2-5] Safari"),e.tween=function(t){return new V(t)},e.delay=function(t,e,n){return new U({complete:e,duration:t,context:n})},t.fn.tram=function(t){return e.call(null,this,t)};var W=t.style,z=t.css,H={transform:R.transform&&R.transform.css},$={color:[j,g],background:[j,g,"background-color"],"outline-color":[j,g],"border-color":[j,g],"border-top-color":[j,g],"border-right-color":[j,g],"border-bottom-color":[j,g],"border-left-color":[j,g],"border-width":[D,y],"border-top-width":[D,y],"border-right-width":[D,y],"border-bottom-width":[D,y],"border-left-width":[D,y],"border-spacing":[D,y],"letter-spacing":[D,y],margin:[D,y],"margin-top":[D,y],"margin-right":[D,y],"margin-bottom":[D,y],"margin-left":[D,y],padding:[D,y],"padding-top":[D,y],"padding-right":[D,y],"padding-bottom":[D,y],"padding-left":[D,y],"outline-width":[D,y],opacity:[D,v],top:[D,m],right:[D,m],bottom:[D,m],left:[D,m],"font-size":[D,m],"text-indent":[D,m],"word-spacing":[D,m],width:[D,m],"min-width":[D,m],"max-width":[D,m],height:[D,m],"min-height":[D,m],"max-height":[D,m],"line-height":[D,I],"scroll-top":[k,v,"scrollTop"],"scroll-left":[k,v,"scrollLeft"]},Y={};R.transform&&($.transform=[G],Y={x:[m,"translateX"],y:[m,"translateY"],rotate:[_],rotateX:[_],rotateY:[_],scale:[v],scaleX:[v],scaleY:[v],skew:[_],skewX:[_],skewY:[_]}),R.transform&&R.backface&&(Y.z=[m,"translateZ"],Y.rotateZ=[_],Y.scaleZ=[v],Y.perspective=[y]);var K=/ms/,Q=/s|\./;return t.tram=e}(window.jQuery)},5756:function(t,e,n){"use strict";
// Include tram for frame-throttling
/* globals window */var r=window.$,i=n(5487)&&r.tram;
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/**
 * Webflow custom build of Underscore.js 1.6.0
 * https://github.com/jashkenas/underscore/tree/1.6.0
 *
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 */
t.exports=function(){var t={
// Current version.
VERSION:"1.6.0-Webflow"},e={},n=Array.prototype,r=Object.prototype,o=Function.prototype,a=(n.push,n.slice),u=(n.concat,r.toString,r.hasOwnProperty),c=n.forEach,s=n.map,l=(n.reduce,n.reduceRight,n.filter),f=(n.every,n.some),d=n.indexOf,p=(n.lastIndexOf,Array.isArray,Object.keys),h=(o.bind,t.each=t.forEach=function(n,r,i){
/* jshint shadow:true */if(null==n)return n;if(c&&n.forEach===c)n.forEach(r,i);
// eslint-disable-next-line no-implicit-coercion
else if(n.length===+n.length){for(var o=0,a=n.length;o<a;o++)if(r.call(i,n[o],o,n)===e)return}else{var u=t.keys(n);
// eslint-disable-next-line no-redeclare
for(o=0,a=u.length;o<a;o++)if(r.call(i,n[u[o]],u[o],n)===e)return}return n});
// Return the results of applying the iterator to each element.
// Delegates to **ECMAScript 5**'s native `map` if available.
t.map=t.collect=function(t,e,n){var r=[];return null==t?r:s&&t.map===s?t.map(e,n):(h(t,function(t,i,o){r.push(e.call(n,t,i,o))}),r)},
// Return the first value which passes a truth test. Aliased as `detect`.
t.find=t.detect=function(t,e,n){var r;return E(t,function(t,i,o){if(e.call(n,t,i,o))return r=t,!0}),r},
// Return all the elements that pass a truth test.
// Delegates to **ECMAScript 5**'s native `filter` if available.
// Aliased as `select`.
t.filter=t.select=function(t,e,n){var r=[];return null==t?r:l&&t.filter===l?t.filter(e,n):(h(t,function(t,i,o){e.call(n,t,i,o)&&r.push(t)}),r)};
// Determine if at least one element in the object matches a truth test.
// Delegates to **ECMAScript 5**'s native `some` if available.
// Aliased as `any`.
var E=t.some=t.any=function(n,r,i){r||(r=t.identity);var o=!1;return null==n?o:f&&n.some===f?n.some(r,i):(h(n,function(t,n,a){if(o||(o=r.call(i,t,n,a)))return e}),!!o)};
// Determine if the array or object contains a given value (using `===`).
// Aliased as `include`.
t.contains=t.include=function(t,e){return null!=t&&(d&&t.indexOf===d?-1!=t.indexOf(e):E(t,function(t){return t===e}))},
// Function (ahem) Functions
// --------------------
// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
t.delay=function(t,e){var n=a.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},
// Defers a function, scheduling it to run after the current call stack has
// cleared.
t.defer=function(e){return t.delay.apply(t,[e,1].concat(a.call(arguments,1)))},
// Returns a function, that, when invoked, will only be triggered once every
// browser animation frame - using tram's requestAnimationFrame polyfill.
t.throttle=function(t){
// eslint-disable-next-line one-var
var e,n,r;return function(){e||(e=!0,n=arguments,r=this,i.frame(function(){e=!1,t.apply(r,n)}))}},
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
t.debounce=function(e,n,r){
// eslint-disable-next-line one-var
var i,o,a,u,c,s=function(){var l=t.now()-u;l<n?i=setTimeout(s,n-l):(i=null,r||(c=e.apply(a,o),a=o=null))};return function(){a=this,o=arguments,u=t.now();var l=r&&!i;return i||(i=setTimeout(s,n)),l&&(c=e.apply(a,o),a=o=null),c}},
// Object Functions
// ----------------
// Fill in a given object with default properties.
t.defaults=function(e){if(!t.isObject(e))return e;for(var n=1,r=arguments.length;n<r;n++){var i=arguments[n];for(var o in i)
// eslint-disable-next-line no-void
void 0===e[o]&&(e[o]=i[o])}return e},
// Retrieve the names of an object's properties.
// Delegates to **ECMAScript 5**'s native `Object.keys`
t.keys=function(e){if(!t.isObject(e))return[];if(p)return p(e);var n=[];for(var r in e)t.has(e,r)&&n.push(r);return n},
// Shortcut function for checking if an object has a given property directly
// on itself (in other words, not on a prototype).
t.has=function(t,e){return u.call(t,e)},
// Is a given variable an object?
t.isObject=function(t){return t===Object(t)},
// Utility Functions
// -----------------
// A (possibly faster) way to get the current timestamp as an integer.
t.now=Date.now||function(){return(new Date).getTime()},
// By default, Underscore uses ERB-style template delimiters, change the
// following template settings to use alternative delimiters.
t.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
// When customizing `templateSettings`, if you don't want to define an
// interpolation, evaluation or escaping regex, we need one that is
// guaranteed not to match.
var v=/(.)^/,g={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},y=/\\|'|\r|\n|\u2028|\u2029/g,m=function(t){return"\\"+g[t]},_=/^\s*(\w|\$)+\s*$/;
// Certain characters need to be escaped so that they can be put into a
// string literal.
// Export underscore
// JavaScript micro-templating, similar to John Resig's implementation.
// Underscore templating handles arbitrary delimiters, preserves whitespace,
// and correctly escapes quotes within interpolated code.
// NB: `oldSettings` only exists for backwards compatibility.
return t.template=function(e,n,r){!n&&r&&(n=r),n=t.defaults({},n,t.templateSettings);
// Combine delimiters into one regular expression via alternation.
var i=RegExp([(n.escape||v).source,(n.interpolate||v).source,(n.evaluate||v).source].join("|")+"|$","g"),o=0,a="__p+='";
// Compile the template source, escaping string literals appropriately.
e.replace(i,function(t,n,r,i,u){
// Adobe VMs need the match returned to produce the correct offset.
return a+=e.slice(o,u).replace(y,m),o=u+t.length,n?a+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?a+="'+\n((__t=("+r+"))==null?'':__t)+\n'":i&&(a+="';\n"+i+"\n__p+='"),t}),a+="';\n";var u,c=n.variable;if(c){
// Insure against third-party code injection. (CVE-2021-23358)
if(!_.test(c))throw new Error("variable is not a bare identifier: "+c)}else
// If a variable is not specified, place data values in local scope.
a="with(obj||{}){\n"+a+"}\n",c="obj";a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{
// eslint-disable-next-line no-new-func
u=new Function(n.variable||"obj","_",a)}catch(t){throw t.source=a,t}var s=function(e){return u.call(this,e,t)};
// Provide the compiled source as a convenience for precompilation.
return s.source="function("+c+"){\n"+a+"}",s},t}()},9461:function(t,e,n){"use strict";
/* globals document, window, navigator */
/**
 * Webflow: Brand pages on the subdomain
 */var r=n(3949);r.define("brand",t.exports=function(t){var e,n={},i=document,o=t("html"),a=t("body"),u=window.location,c=/PhantomJS/i.test(navigator.userAgent),s="fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";function l(){var n=i.fullScreen||i.mozFullScreen||i.webkitIsFullScreen||i.msFullscreenElement||Boolean(i.webkitFullscreenElement);t(e).attr("style",n?"display: none !important;":"")}function f(){var t=a.children(".w-webflow-badge"),n=t.length&&t.get(0)===e,i=r.env("editor");n?
// Remove brand when Editor is active
i&&t.remove():(
// Remove any invalid brand elements
t.length&&t.remove(),
// Append the brand (unless Editor is active)
i||a.append(e))}
// Export module
// -----------------------------------
// Module methods
return n.ready=function(){var n,r,a,d=o.attr("data-wf-status"),p=o.attr("data-wf-domain")||"";/\.webflow\.io$/i.test(p)&&u.hostname!==p&&(d=!0),d&&!c&&(e=e||(n=t('<a class="w-webflow-badge"></a>').attr("href","https://webflow.com?utm_campaign=brandjs"),r=t("<img>").attr("src","https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt","").css({marginRight:"4px",width:"26px"}),a=t("<img>").attr("src","https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt","Made in Webflow"),n.append(r,a),n[0]),f(),setTimeout(f,500),t(i).off(s,l).on(s,l))},n})},2338:function(t,e,n){"use strict";
/* globals window, document */
/**
 * Webflow: focus-visible
 */
/*
 * This polyfill comes from https://github.com/WICG/focus-visible
 */
n(3949).define("focus-visible",t.exports=function(){
// Export module
return{ready:function(){if("undefined"!=typeof document)try{
// check for native support; this will throw if the selector is not considered valid
document.querySelector(":focus-visible")}catch(t){
// :focus-visible pseudo-selector is not supported natively
!
/**
     * Applies the :focus-visible polyfill at the given scope.
     * A scope in this case is either the top-level Document or a Shadow Root.
     *
     * @param {(Document|ShadowRoot)} scope
     * @see https://github.com/WICG/focus-visible
     */
function(t){var e=!0,n=!1,r=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};
/**
       * Helper function for legacy browsers and iframes which sometimes focus
       * elements like document, body, and non-interactive SVG.
       * @param {Element} el
       */
function o(t){return!!(t&&t!==document&&"HTML"!==t.nodeName&&"BODY"!==t.nodeName&&"classList"in t&&"contains"in t.classList)}
/**
       * Computes whether the given element should automatically trigger the
       * `focus-visible` class being added, i.e. whether it should always match
       * `:focus-visible` when focused.
       * @param {Element} el
       * @return {boolean}
       */function a(t){t.getAttribute("data-wf-focus-visible")||t.setAttribute("data-wf-focus-visible","true")}
/**
       * If at any point a user clicks with a pointing device, ensure that we change
       * the modality away from keyboard.
       * This avoids the situation where a user presses a key on an already focused
       * element, and then clicks on a different element, focusing it with a
       * pointing device, while we still think we're in keyboard modality.
       * @param {Event} e
       */
function u(){e=!1}
/**
       * On `focus`, add the `focus-visible` class to the target if:
       * - the target received focus as a result of keyboard navigation, or
       * - the event target is an element that will likely require interaction
       *   via the keyboard (e.g. a text box)
       * @param {Event} e
       */
/**
       * Add a group of listeners to detect usage of any pointing devices.
       * These listeners will be added when the polyfill first loads, and anytime
       * the window is blurred, so that they are active when the window regains
       * focus.
       */
function c(){document.addEventListener("mousemove",s),document.addEventListener("mousedown",s),document.addEventListener("mouseup",s),document.addEventListener("pointermove",s),document.addEventListener("pointerdown",s),document.addEventListener("pointerup",s),document.addEventListener("touchmove",s),document.addEventListener("touchstart",s),document.addEventListener("touchend",s)}
/**
       * When the polfyill first loads, assume the user is in keyboard modality.
       * If any event is received from a pointing device (e.g. mouse, pointer,
       * touch), turn off keyboard modality.
       * This accounts for situations where focus enters the page from the URL bar.
       * @param {Event} e
       */
function s(t){
// Work around a Safari quirk that fires a mousemove on <html> whenever the
// window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
t.target.nodeName&&"html"===t.target.nodeName.toLowerCase()||(e=!1,document.removeEventListener("mousemove",s),document.removeEventListener("mousedown",s),document.removeEventListener("mouseup",s),document.removeEventListener("pointermove",s),document.removeEventListener("pointerdown",s),document.removeEventListener("pointerup",s),document.removeEventListener("touchmove",s),document.removeEventListener("touchstart",s),document.removeEventListener("touchend",s))}
// For some kinds of state, we are interested in changes at the global scope
// only. For example, global pointer input, global key presses and global
// visibility change should affect the state at every scope:
document.addEventListener("keydown",
/**
       * If the most recent user interaction was via the keyboard;
       * and the key press did not include a meta, alt/option, or control key;
       * then the modality is keyboard. Otherwise, the modality is not keyboard.
       * Apply `focus-visible` to any current active element and keep track
       * of our keyboard modality state with `hadKeyboardEvent`.
       * @param {KeyboardEvent} e
       */
function(n){n.metaKey||n.altKey||n.ctrlKey||(o(t.activeElement)&&a(t.activeElement),e=!0)},!0),document.addEventListener("mousedown",u,!0),document.addEventListener("pointerdown",u,!0),document.addEventListener("touchstart",u,!0),document.addEventListener("visibilitychange",
/**
       * If the user changes tabs, keep track of whether or not the previously
       * focused element had .focus-visible.
       * @param {Event} e
       */
function(){"hidden"===document.visibilityState&&(
// If the tab becomes active again, the browser will handle calling focus
// on the element (Safari actually calls it twice).
// If this tab change caused a blur on an element with focus-visible,
// re-apply the class when the user switches back to the tab.
n&&(e=!0),c())},!0),c(),
// For focus and blur, we specifically care about state changes in the local
// scope. This is because focus / blur events that originate from within a
// shadow root are not re-dispatched from the host element if it was already
// the active element in its own scope:
t.addEventListener("focus",function(t){var n,r,u;
// Prevent IE from focusing the document or HTML element.
o(t.target)&&(e||(r=(n=t.target).type,"INPUT"===(u=n.tagName)&&i[r]&&!n.readOnly||"TEXTAREA"===u&&!n.readOnly||n.isContentEditable))&&a(t.target)}
/**
       * On `blur`, remove the `focus-visible` class from the target.
       * @param {Event} e
       */,!0),t.addEventListener("blur",function(t){var e;o(t.target)&&t.target.hasAttribute("data-wf-focus-visible")&&(
// To detect a tab/window switch, we look for a blur event followed
// rapidly by a visibility change.
// If we don't see a visibility change within 100ms, it's probably a
// regular focus change.
n=!0,window.clearTimeout(r),r=window.setTimeout(function(){n=!1},100),(e=t.target).getAttribute("data-wf-focus-visible")&&e.removeAttribute("data-wf-focus-visible"))},!0)}(document)}}}})},8334:function(t,e,n){"use strict";
/* globals document, MouseEvent */
/**
 * Webflow: focus
 */var r=n(3949);
/*
 * Safari has a weird bug where it doesn't support :focus for links with hrefs,
 * buttons, and input[type=button|submit], so we listen for mousedown events
 * instead and force the element to emit a focus event in those cases.

 * See these webkit bugs for reference:
 * https://bugs.webkit.org/show_bug.cgi?id=22261
 * https://bugs.webkit.org/show_bug.cgi?id=229895
 */r.define("focus",t.exports=function(){var t=[],e=!1;function n(n){e&&(n.preventDefault(),n.stopPropagation(),n.stopImmediatePropagation(),t.unshift(n))}
/*
     * The only mousedown events we care about here are ones emanating from
     * (A) anchor links with href attribute,
     * (B) non-disabled buttons,
     * (C) non-disabled textarea,
     * (D) non-disabled inputs of type "button", "reset", "checkbox", "radio", "submit"
     * (E) non-interactive elements (button, a, input, textarea, select) that have a tabindex with a numeric value
     * (F) audio elements
     * (G) video elements with controls attribute
     */function i(n){(function(t){var e=t.target,n=e.tagName;return/^a$/i.test(n)&&null!=e.href||// (A)
/^(button|textarea)$/i.test(n)&&!0!==e.disabled||// (B) (C)
/^input$/i.test(n)&&/^(button|reset|submit|radio|checkbox)$/i.test(e.type)&&!e.disabled||// (D)
!/^(button|input|textarea|select|a)$/i.test(n)&&!Number.isNaN(Number.parseFloat(e.tabIndex))||// (E)
/^audio$/i.test(n)||// (F)
/^video$/i.test(n)&&!0===e.controls})(n)&&(
// start capturing possible out-of-order mouse events
e=!0,
/*
         * enqueue the focus event _after_ the current batch of events, which
         * includes any blur events. The correct order of events is:
         *
         * [this element] MOUSEDOWN               <-- this event
         * [previously active element] BLUR
         * [previously active element] FOCUSOUT
         * [this element] FOCUS                   <-- forced event
         * [this element] FOCUSIN                 <-- forced event
         * [this element] MOUSEUP                 <-- possibly captured event (it may have fired _before_ the FOCUS event)
         * [this element] CLICK                   <-- possibly captured event (it may have fired _before_ the FOCUS event)
         */
setTimeout(()=>{
// re-dispatch captured mouse events in order
for(
// stop capturing possible out-of-order mouse events
e=!1,
// trigger focus event
n.target.focus();t.length>0;){var r=t.pop();r.target.dispatchEvent(new MouseEvent(r.type,r))}},0))}
// Export module
return{ready:function(){"undefined"!=typeof document&&document.body.hasAttribute("data-wf-focus-within")&&r.env.safari&&(document.addEventListener("mousedown",i,!0),document.addEventListener("mouseup",n,!0),document.addEventListener("click",n,!0))}}})},7199:function(t){"use strict";
/* globals window */
/**
 * Webflow: IX Event triggers for other modules
 */var e=window.jQuery,n={},r=[],i=".w-ix",o={reset:function(t,e){e.__wf_intro=null},intro:function(t,r){r.__wf_intro||(r.__wf_intro=!0,e(r).triggerHandler(n.types.INTRO))},outro:function(t,r){r.__wf_intro&&(r.__wf_intro=null,e(r).triggerHandler(n.types.OUTRO))}};n.triggers={},n.types={INTRO:"w-ix-intro"+i,OUTRO:"w-ix-outro"+i},
// Trigger any events in queue + restore trigger methods
n.init=function(){for(var t=r.length,i=0;i<t;i++){var a=r[i];a[0](0,a[1])}r=[],e.extend(n.triggers,o)},
// Replace all triggers with async wrapper to queue events until init
n.async=function(){for(var t in o){var e=o[t];o.hasOwnProperty(t)&&(
// Replace trigger method with async wrapper
n.triggers[t]=function(t,n){r.push([e,n])})}},
// Default triggers to async queue
n.async(),t.exports=n},5134:function(t,e,n){"use strict";
/* globals window, document */var r=n(7199);function i(t,e,n){var r=document.createEvent("CustomEvent");r.initCustomEvent(e,!0,!0,n||null),t.dispatchEvent(r)}
/**
 * Webflow: IX Event triggers for other modules
 */var o=window.jQuery,a={},u=".w-ix",c={reset:function(t,e){r.triggers.reset(t,e)},intro:function(t,e){r.triggers.intro(t,e),i(e,"COMPONENT_ACTIVE")},outro:function(t,e){r.triggers.outro(t,e),i(e,"COMPONENT_INACTIVE")}};a.triggers={},a.types={INTRO:"w-ix-intro"+u,OUTRO:"w-ix-outro"+u},o.extend(a.triggers,c),a.dispatchCustomEvent=i,t.exports=a},941:function(t,e,n){"use strict";
/**
 * Webflow: Interactions 2
 */var r=n(3949),i=n(6011);i.setEnv(r.env),r.define("ix2",t.exports=function(){return i})},3949:function(t,e,n){"use strict";
/* globals window, document, navigator, WEBFLOW_ENV_TEST */
/**
 * Webflow: Core site library
 */var r={},i={},o=[],a=window.Webflow||[],u=window.jQuery,c=u(window),s=u(document),l=u.isFunction,f=r._=n(5756),d=r.tram=n(5487)&&u.tram,p=!1,h=!1;function E(t){
// If running in Webflow app, subscribe to design/preview events
r.env()&&(l(t.design)&&c.on("__wf_design",t.design),l(t.preview)&&c.on("__wf_preview",t.preview)),
// Subscribe to front-end destroy event
l(t.destroy)&&c.on("__wf_destroy",t.destroy),
// Look for ready method on module
t.ready&&l(t.ready)&&function(t){
// If domready has already happened, run ready method
p?t.ready():
// Otherwise add ready method to the primary queue (only once)
f.contains(o,t.ready)||o.push(t.ready)}(t)}function v(t){
// Unsubscribe module from window events
l(t.design)&&c.off("__wf_design",t.design),l(t.preview)&&c.off("__wf_preview",t.preview),l(t.destroy)&&c.off("__wf_destroy",t.destroy),
// Remove ready method from primary queue
t.ready&&l(t.ready)&&function(t){o=f.filter(o,function(e){return e!==t.ready})}
/**
 * Webflow.push - Add a ready handler into secondary queue
 * @param {function} ready  Callback to invoke on domready
 */(t)}d.config.hideBackface=!1,d.config.keepInherited=!0,
/**
 * Webflow.define - Define a named module
 * @param  {string} name
 * @param  {function} factory
 * @param  {object} [options]
 * @return {object}
 */
r.define=function(t,e,n){i[t]&&v(i[t]);var r=i[t]=e(u,f,n)||{};return E(r),r},
/**
 * Webflow.require - Require a named module
 * @param  {string} name
 * @return {object}
 */
r.require=function(t){return i[t]},r.push=function(t){
// If domready has already happened, invoke handler
p?l(t)&&t():
// Otherwise push into secondary queue
a.push(t)},
/**
 * Webflow.env - Get the state of the Webflow app
 * @param {string} mode [optional]
 * @return {boolean}
 */
r.env=function(t){var e=window.__wf_design,n=void 0!==e;return t?"design"===t?n&&e:"preview"===t?n&&!e:"slug"===t?n&&window.__wf_slug:"editor"===t?window.WebflowEditor:"test"===t?window.__wf_test:"frame"===t?window!==window.top:void 0:n};
// Feature detects + browser sniffs  ಠ_ಠ
var g,y=navigator.userAgent.toLowerCase(),m=r.env.touch="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,_=r.env.chrome=/chrome/.test(y)&&/Google/.test(navigator.vendor)&&parseInt(y.match(/chrome\/(\d+)\./)[1],10),I=r.env.ios=/(ipod|iphone|ipad)/.test(y);r.env.safari=/safari/.test(y)&&!_&&!I,
// Listen for both events to support touch/mouse hybrid devices
m&&s.on("touchstart mousedown",function(t){g=t.target}),
/**
 * Webflow.validClick - validate click target against current touch target
 * @param  {HTMLElement} clickTarget  Element being clicked
 * @return {Boolean}  True if click target is valid (always true on non-touch)
 */
r.validClick=m?function(t){return t===g||u.contains(t,g)}:function(){return!0};
/**
 * Webflow.resize, Webflow.scroll - throttled event proxies
 */
var b,T="resize.webflow orientationchange.webflow load.webflow",O="scroll.webflow "+T;
// Create a proxy instance for throttled events
function A(t,e){
// Set up throttled method (using custom frame-based _.throttle)
var n=[],r={};return r.up=f.throttle(function(t){f.each(n,function(e){e(t)})}),
// Bind events to target
t&&e&&t.on(e,r.up)
/**
   * Add an event handler
   * @param  {function} handler
   */,r.on=function(t){"function"==typeof t&&(f.contains(n,t)||n.push(t))},
/**
   * Remove an event handler
   * @param  {function} handler
   */
r.off=function(t){
// If no arguments supplied, clear all handlers
// Otherwise, remove handler from the list
n=arguments.length?f.filter(n,function(e){return e!==t}):[]},r}
// Webflow.location - Wrap window.location in api
function w(t){l(t)&&t()}function S(){
// Reject any previous deferred (to support destroy)
b&&(b.reject(),c.off("load",b.resolve)),
// Create deferred and bind window load event
b=new u.Deferred,c.on("load",b.resolve)}
// Webflow.destroy - Trigger a destroy event for all modules
r.resize=A(c,T),r.scroll=A(c,O),r.redraw=A(),r.location=function(t){window.location=t},r.env()&&(
// Ignore redirects inside a Webflow design/edit environment
r.location=function(){}),
// Webflow.ready - Call primary and secondary handlers
r.ready=function(){p=!0,
// Restore modules after destroy
h?(h=!1,f.each(i,E)):f.each(o,w),
// Run secondary ready methods
f.each(a,w),
// Trigger resize
r.resize.up()},r.load=function(t){b.then(t)},r.destroy=function(t){t=t||{},h=!0,c.triggerHandler("__wf_destroy"),
// Allow domready reset for tests
null!=t.domready&&(p=t.domready),
// Unbind modules
f.each(i,v),
// Clear any proxy event handlers
r.resize.off(),r.scroll.off(),r.redraw.off(),
// Clear any queued ready methods
o=[],a=[],
// If load event has not yet fired, replace the deferred
"pending"===b.state()&&S()},
// Listen for domready
u(r.ready),
// Listen for window.onload and resolve deferred
S(),
// Export commonjs module
t.exports=window.Webflow=r},7624:function(t,e,n){"use strict";
/* globals window, document */
/**
 * Webflow: Auto-select links to current page or section
 */var r=n(3949);r.define("links",t.exports=function(t,e){var n,i,o,a={},u=t(window),c=r.env(),s=window.location,l=document.createElement("a"),f="w--current",d=/index\.(html|php)$/,p=/\/$/;function h(e){
// Ignore localized links
if(!e.getAttribute("hreflang")){var r=n&&e.getAttribute("href-disabled")||e.getAttribute("href");
// Ignore any hrefs with a colon to safely avoid all uri schemes
if(l.href=r,!(r.indexOf(":")>=0)){var a=t(e);
// Check for all links with hash (eg (this-host)(/this-path)#section) to this page
if(l.hash.length>1&&l.host+l.pathname===s.host+s.pathname){
// Ignore any hrefs with Google Translate type hash
// Example: jQuery can't parse $('#googtrans(en|es)')
// https://forum.webflow.com/t/dropdown-menus-not-working-on-site/87140
if(!/^#[a-zA-Z0-9\-\_]+$/.test(l.hash))return;var u=t(l.hash);u.length&&i.push({link:a,sec:u,active:!1})}
// Ignore empty # links
else if("#"!==r&&""!==r){
// Determine whether the link should be selected
var h=!c&&l.href===s.href||r===o||d.test(r)&&p.test(o);v(a,f,h)}}}}function E(){var t=u.scrollTop(),n=u.height();
// Check each anchor for a section in view
e.each(i,function(e){
// Ignore localized links
if(!e.link.attr("hreflang")){var r=e.link,i=e.sec,o=i.offset().top,a=i.outerHeight(),u=.5*n,c=i.is(":visible")&&o+a-u>=t&&o+u<=t+n;e.active!==c&&(e.active=c,v(r,f,c))}})}function v(t,e,n){var r=t.hasClass(e);n&&r||(n||r)&&(n?t.addClass(e):t.removeClass(e))}
// Export module
// -----------------------------------
// Module methods
return a.ready=a.design=a.preview=
// -----------------------------------
// Private methods
function(){n=c&&r.env("design"),o=r.env("slug")||s.pathname||"",
// Reset scroll listener, init anchors
r.scroll.off(E),i=[];for(
// Test all links for a selectable href
var t=document.links,e=0;e<t.length;++e)h(t[e]);
// Listen for scroll if any anchors exist
i.length&&(r.scroll.on(E),E())},a})},286:function(t,e,n){"use strict";
/* globals window, document */
/**
 * Webflow: Smooth scroll
 */var r=n(3949);r.define("scroll",t.exports=function(t){
/**
     * A collection of namespaced events found in this module.
     * Namespaced events encapsulate our code, and make it safer and easier
     * for designers to apply custom code overrides.
     * @see https://api.jquery.com/on/#event-names
     * @typedef {Object.<string>} NamespacedEventsCollection
     */
var e={WF_CLICK_EMPTY:"click.wf-empty-link",WF_CLICK_SCROLL:"click.wf-scroll"},n=window.location,i=function(){try{return Boolean(window.frameElement)}catch(t){return!0}}()?null:window.history,o=t(window),a=t(document),u=t(document.body),c=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(t){window.setTimeout(t,15)},s=r.env("editor")?".w-editor-body":"body",l="header, "+s+" > .header, "+s+" > .w-nav:not([data-no-scroll])",f='a[href="#"]',d='a[href*="#"]:not(.w-tab-link):not('+f+")",p=document.createElement("style");p.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));var h=/^#[a-zA-Z0-9][\w:.-]*$/;
/**
     * Determine if link navigates to current page
     * @param {HTMLAnchorElement} link
     */
/**
     * Check if the designer has indicated that this page should
     * have no scroll animation, or if the end user has set
     * prefers-reduced-motion in their OS
     */
const E="function"==typeof window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)");function v(t,e){var n;switch(e){case"add":(n=t.attr("tabindex"))?t.attr("data-wf-tabindex-swap",n):t.attr("tabindex","-1");break;case"remove":(n=t.attr("data-wf-tabindex-swap"))?(t.attr("tabindex",n),t.removeAttr("data-wf-tabindex-swap")):t.removeAttr("tabindex")}t.toggleClass("wf-force-outline-none","add"===e)}
/**
     * Determine if we should execute custom scroll
     */function g(e){var a=e.currentTarget;if(// Bail if in Designer
!(r.env("design")||// Ignore links being used by jQuery mobile
window.$.mobile&&/(?:^|\s)ui-link(?:$|\s)/.test(a.className))){var s,f=(s=a,h.test(s.hash)&&s.host+s.pathname===n.host+n.pathname?a.hash:"");if(""!==f){var d=t(f);d.length&&(e&&(e.preventDefault(),e.stopPropagation()),function(t){
// Push new history state
n.hash===t||!i||!i.pushState||r.env.chrome&&"file:"===n.protocol||(i.state&&i.state.hash)!==t&&i.pushState({hash:t},"",t)}(f),window.setTimeout(function(){!function(e,n){var r=o.scrollTop(),i=function(e){
// If a fixed header exists, offset for the height
var n=t(l),r="fixed"===n.css("position")?n.outerHeight():0,i=e.offset().top-r;
// If specified, scroll so that the element ends up in the middle of the viewport
if("mid"===e.data("scroll")){var a=o.height()-r,u=e.outerHeight();u<a&&(i-=Math.round((a-u)/2))}return i}(e);if(r!==i){var a=function(t,e,n){if("none"===document.body.getAttribute("data-wf-scroll-motion")||E.matches)return 0;var r=1;
// Check for custom time multiplier on the body and the scroll target
return u.add(t).each(function(t,e){var n=parseFloat(e.getAttribute("data-scroll-time"));!isNaN(n)&&n>=0&&(r=n)}),(472.143*Math.log(Math.abs(e-n)+125)-2e3)*r}(e,r,i),s=Date.now(),f=function(){var t=Date.now()-s;window.scroll(0,function(t,e,n,r){return n>r?e:t+(e-t)*((i=n/r)<.5?4*i*i*i:(i-1)*(2*i-2)*(2*i-2)+1);var i}(r,i,t,a)),t<=a?c(f):n()};c(f)}}(d,function(){v(d,"add"),d.get(0).focus({preventScroll:!0}),v(d,"remove")})},e?0:300))}}}
// Export module
return{ready:function(){var{WF_CLICK_EMPTY:t,WF_CLICK_SCROLL:n}=e;a.on(n,d,g),
/**
       * Prevent empty hash links from triggering scroll.
       * Legacy feature to preserve: use the default "#" link
       * to trigger an interaction, and do not want the page
       * to scroll to the top.
       */
a.on(t,f,function(t){t.preventDefault()}),document.head.insertBefore(p,document.head.firstChild)}}})},3695:function(t,e,n){"use strict";
/* globals document, window */
/**
 * Webflow: Touch events
 * Supports legacy 'tap' event
 * Adds a 'swipe' event to desktop and mobile
 */n(3949).define("touch",t.exports=function(t){var e={},n=window.getSelection;function r(e){var r,i,o=!1,a=!1,u=Math.min(Math.round(.04*window.innerWidth),40);function c(t){
// We don’t handle multi-touch events yet.
var e=t.touches;e&&e.length>1||(o=!0,e?(a=!0,r=e[0].clientX):r=t.clientX,i=r)}function s(e){if(o){if(a&&"mousemove"===e.type)return e.preventDefault(),void e.stopPropagation();var r=e.touches,c=r?r[0].clientX:e.clientX,s=c-i;i=c,
// Allow swipes while pointer is down, but prevent them during text selection
Math.abs(s)>u&&n&&""===String(n())&&(
// Wrap native event to supoprt preventdefault + stopPropagation
function(e,n,r){var i=t.Event("swipe",{originalEvent:n});t(n.target).trigger(i,r)}
// Listen for touch events on all nodes by default.
(0,e,{direction:s>0?"right":"left"}),f())}}function l(t){if(o)return o=!1,a&&"mouseup"===t.type?(t.preventDefault(),t.stopPropagation(),void(a=!1)):void 0}function f(){o=!1}e.addEventListener("touchstart",c,!1),e.addEventListener("touchmove",s,!1),e.addEventListener("touchend",l,!1),e.addEventListener("touchcancel",f,!1),e.addEventListener("mousedown",c,!1),e.addEventListener("mousemove",s,!1),e.addEventListener("mouseup",l,!1),e.addEventListener("mouseout",f,!1),
// Public instance methods
this.destroy=function(){e.removeEventListener("touchstart",c,!1),e.removeEventListener("touchmove",s,!1),e.removeEventListener("touchend",l,!1),e.removeEventListener("touchcancel",f,!1),e.removeEventListener("mousedown",c,!1),e.removeEventListener("mousemove",s,!1),e.removeEventListener("mouseup",l,!1),e.removeEventListener("mouseout",f,!1),e=null}}
// Export module
// Delegate all legacy 'tap' events to 'click'
return t.event.special.tap={bindType:"click",delegateType:"click"},e.init=function(e){return(e="string"==typeof e?t(e).get(0):e)?new r(e):null},e.instance=e.init(document),e})},7527:function(t,e,n){"use strict";
/* globals
  window,
  document,
  IntersectionObserver,
  WEBFLOW_FORM_API_HOST,
  WEBFLOW_FORM_OLDIE_HOST,
  WEBFLOW_EXPORT_MODE,
  turnstile
*/
/**
 * Webflow: Forms
 */var r=n(3949);r.define("forms",t.exports=function(t,e){const n="TURNSTILE_LOADED";var i,o,a,u,c,s={},l=t(document),f=window.location,d=window.XDomainRequest&&!window.atob,p=".w-form",h=/e(-)?mail/i,E=/^\S+@\S+$/,v=window.alert,g=r.env();const y=l.find("[data-turnstile-sitekey]").data("turnstile-sitekey");let m;
// MailChimp domains: list-manage.com + mirrors
var _=/list-manage[1-9]?.com/i,I=e.debounce(function(){console.warn("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")},100);function b(e,r){
// Store form state using namespace
var i=t(r),a=t.data(r,p);a||(a=t.data(r,p,{form:i})),// data.form
T(a);var u=i.closest("div.w-form");a.done=u.find("> .w-form-done"),a.fail=u.find("> .w-form-fail"),a.fileUploads=u.find(".w-file-upload"),a.fileUploads.each(function(e){!function(e,n){if(n.fileUploads&&n.fileUploads[e]){var r,i=t(n.fileUploads[e]),o=i.find("> .w-file-upload-default"),a=i.find("> .w-file-upload-uploading"),u=i.find("> .w-file-upload-success"),s=i.find("> .w-file-upload-error"),l=o.find(".w-file-upload-input"),f=o.find(".w-file-upload-label"),d=f.children(),p=s.find(".w-file-upload-error-msg"),h=u.find(".w-file-upload-file"),E=u.find(".w-file-remove-link"),v=h.find(".w-file-upload-file-name"),y=p.attr("data-w-size-error"),m=p.attr("data-w-type-error"),_=p.attr("data-w-generic-error");if(
// Accessibility fixes
// The file upload Input is not stylable by the designer, so we are
// going to pretend the Label is the input. ¯\_(ツ)_/¯
g||f.on("click keydown",function(t){"keydown"===t.type&&13!==t.which&&32!==t.which||(t.preventDefault(),l.click())}),
// Both of these are added through CSS
f.find(".w-icon-file-upload-icon").attr("aria-hidden","true"),E.find(".w-icon-file-upload-remove").attr("aria-hidden","true"),g)l.on("click",function(t){t.preventDefault()}),f.on("click",function(t){t.preventDefault()}),d.on("click",function(t){t.preventDefault()});else{E.on("click keydown",function(t){if("keydown"===t.type){if(13!==t.which&&32!==t.which)return;t.preventDefault()}l.removeAttr("data-value"),l.val(""),v.html(""),o.toggle(!0),u.toggle(!1),f.focus()}),l.on("change",function(i){(r=i.target&&i.target.files&&i.target.files[0])&&(
// Show uploading
o.toggle(!1),s.toggle(!1),a.toggle(!0),a.focus(),
// Set filename
v.text(r.name),
// Disable submit button
S()||O(n),n.fileUploads[e].uploading=!0,function(e,n){var r=new URLSearchParams({name:e.name,size:e.size});t.ajax({type:"GET",url:`${c}?${r}`,crossDomain:!0}).done(function(t){n(null,t)}).fail(function(t){n(t)})}(r,A))});
// Setting input width 1px and height equal label
// This is so the browser required error will show up
var I=f.outerHeight();l.height(I),l.width(1)}}function b(t){var r=t.responseJSON&&t.responseJSON.msg,i=_;"string"==typeof r&&0===r.indexOf("InvalidFileTypeError")?i=m:"string"==typeof r&&0===r.indexOf("MaxFileSizeError")&&(i=y),p.text(i),l.removeAttr("data-value"),l.val(""),a.toggle(!1),o.toggle(!0),s.toggle(!0),s.focus(),n.fileUploads[e].uploading=!1,S()||T(n)}function A(e,n){if(e)return b(e);var i=n.fileName,o=n.postData,a=n.fileId,u=n.s3Url;l.attr("data-value",a),function(e,n,r,i,o){var a=new FormData;for(var u in n)a.append(u,n[u]);a.append("file",r,i),t.ajax({type:"POST",url:e,data:a,processData:!1,contentType:!1}).done(function(){o(null)}).fail(function(t){o(t)})}
// Export module
(u,o,r,i,w)}function w(t){if(t)return b(t);
// Show success
a.toggle(!1),u.css("display","inline-block"),u.focus(),n.fileUploads[e].uploading=!1,S()||T(n)}function S(){return(n.fileUploads&&n.fileUploads.toArray()||[]).some(function(t){return t.uploading})}}(e,a)}),y&&!i.is("[data-wf-no-turnstile]")&&(
// Once all custom fonts are loaded, set the button state to indicate Turnstile is loading
// Set button state while Turnstile script is loading
function(t){const e=t.btn||t.form.find(':input[type="submit"]');t.btn||(t.btn=e),e.prop("disabled",!0),e.addClass("w-form-loading")}
// Add/remove loading class from the form wrapper
(a),
// Add loading state to the form wrapper
A(i,!0),
// this is probably overkill, but if the turnstile script has already loaded and we reached this point then
// we'll fire the callback below immediately. Otherwise we'll wait for the TURNSTILE_LOADED_EVENT to fire.
l.on("undefined"!=typeof turnstile?"ready":n,function(){function t(){
// render the hidden input with the turnstile token for each form on the page
((t,e)=>{const n=document.createElement("div");e.appendChild(n),
// Render the captcha
turnstile.render(n,{sitekey:t,callback:function(t){(t=>{
// The turnstile token gets automatically attached to the form as a hidden input field & sent on submission to the server.
// Here we are using this `data.turnstileToken` value to decide whether or not the submit button should be enabled.
a.turnstileToken=t,
// enable the submit button and restore text once turnstile is done rendering
T(a),A(i,!1)})(t)},"error-callback":function(){
// If Turnstile fails, keep the button disabled but restore original state (tooltip, etc.)
T(a),
// Ensure button is definitely disabled if reset didn't handle it (e.g., if turnstileSiteKey logic changes)
a.btn&&a.btn.prop("disabled",!0),A(i,!1)}})})(y,r)}
// Defer widget render until the form is near the viewport. Calling
// turnstile.render() for every off-screen form simultaneously blocks
// Safari's main thread and causes multi-second below-the-fold delays
// on iOS. Forms already in (or near) the viewport render immediately.
if("undefined"!=typeof IntersectionObserver){var e=new IntersectionObserver(function(n){n[0].isIntersecting&&(e.disconnect(),t())},{rootMargin:"200px"});e.observe(r)}else t()}));
// Accessibility fixes
var s=a.form.attr("aria-label")||a.form.attr("data-name")||"Form";a.done.attr("aria-label")||a.form.attr("aria-label",s),a.done.attr("tabindex","-1"),a.done.attr("role","region"),a.done.attr("aria-label")||a.done.attr("aria-label",s+" success"),a.fail.attr("tabindex","-1"),a.fail.attr("role","region"),a.fail.attr("aria-label")||a.fail.attr("aria-label",s+" failure");var f=a.action=i.attr("action");a.handler=null,a.redirect=i.attr("data-redirect"),
// MailChimp form
_.test(f)?a.handler=S:
// Custom form action
f||(
// Webflow forms for hosting accounts
o?a.handler=w:
// Alert for disconnected Webflow forms
I())}
// Reset data common to all submit handlers
function T(t){var e=t.btn=t.form.find(':input[type="submit"]');t.wait=t.btn.attr("data-wait")||null,t.success=!1;
// Determine if the button should be disabled
const n=Boolean(y&&!t.turnstileToken);e.prop("disabled",n),e.removeClass("w-form-loading"),t.label&&e.val(t.label)}
// Disable submit button during actual submission
function O(t){var e=t.btn,n=t.wait;// Use the value from data-wait attribute
e.prop("disabled",!0),
// Show wait text and store previous label
n&&(t.label=e.val(),// Store the current label before overwriting
e.val(n))}function A(t,e){const n=t.closest(".w-form");e?n.addClass("w-form-loading"):n.removeClass("w-form-loading")}
// Find form fields, validate, and set value pairs
function w(t){R(t),N(t)}
// Submit form to MailChimp
function S(n){T(n);var r=n.form,i={};
// Skip Ajax submission if http/s mismatch, fallback to POST instead
if(!/^https/.test(f.href)||/^https/.test(n.action)){R(n);
// Find & populate all fields
var o,a=function(e,n){var r=null;return n=n||{},
// The ":input" selector is a jQuery shortcut to select all inputs, selects, textareas
e.find(':input:not([type="submit"]):not([type="file"]):not([type="button"])').each(function(i,o){var a=t(o),u=a.attr("type"),c=a.attr("data-name")||a.attr("name")||"Field "+(i+1);
// Encoding the field name will prevent fields that have brackets
// in their name from being parsed by `bodyParser.urlencoded` as
// objects which would have unintended consequences like not saving
// the content of the field.
// https://webflow.atlassian.net/browse/CMSAUTH-2495
c=encodeURIComponent(c);var s=a.val();if("checkbox"===u)s=a.is(":checked");else if("radio"===u){
// Radio group value already processed
if(null===n[c]||"string"==typeof n[c])return;s=e.find('input[name="'+a.attr("name")+'"]:checked').val()||null}"string"==typeof s&&(s=t.trim(s)),n[c]=s,r=r||function(t,e,n,r){var i=null;return"password"===e?i="Passwords cannot be submitted.":t.attr("required")?r?h.test(t.attr("type"))&&(E.test(r)||(i="Please enter a valid email address for: "+n)):i="Please fill out the required field: "+n:"g-recaptcha-response"!==n||r||(i="Please confirm you're not a robot."),i}(a,u,c,s)}),r}(r,i);if(a)return v(a);
// Disable submit button
O(n),e.each(i,function(t,e){h.test(e)&&(i.EMAIL=t),/^((full[ _-]?)?name)$/i.test(e)&&(o=t),/^(first[ _-]?name)$/i.test(e)&&(i.FNAME=t),/^(last[ _-]?name)$/i.test(e)&&(i.LNAME=t)}),o&&!i.FNAME&&(o=o.split(" "),i.FNAME=o[0],i.LNAME=i.LNAME||o[1]);
// Use the (undocumented) MailChimp jsonp api
var u=n.action.replace("/post?","/post-json?")+"&c=?",c=u.indexOf("u=")+2;
// Add special param to prevent bot signups
c=u.substring(c,u.indexOf("&",c));var s=u.indexOf("id=")+3;s=u.substring(s,u.indexOf("&",s)),i["b_"+c+"_"+s]="",t.ajax({url:u,data:i,dataType:"jsonp"}).done(function(t){n.success="success"===t.result||/already/.test(t.msg),n.success||console.info("MailChimp error: "+t.msg),N(n)}).fail(function(){N(n)})}else r.attr("method","post")}
// Common callback which runs after all Ajax submissions
function N(t){var e=t.form,n=t.redirect,i=t.success;
// Redirect to a success url if defined
i&&n?r.location(n):(
// Show or hide status divs
t.done.toggle(i),t.fail.toggle(!i),i?t.done.focus():t.fail.focus(),
// Hide form on success
e.toggle(!i),
// Reset data and enable submit button
T(t))}function R(t){t.evt&&t.evt.preventDefault(),t.evt=null}return s.ready=s.design=s.preview=function(){
// start by loading the turnstile script (if the user has the feature enabled)
!function(){if(y){const t=()=>{
// Create script tag for turnstile
m=document.createElement("script"),m.src="https://challenges.cloudflare.com/turnstile/v0/api.js",document.head.appendChild(m),m.onload=()=>{
// after the script loads, emit an event that we listen to below.
// this enables us to listen for the event on each form on the page and render the turnstile token for each of them.
l.trigger(n)}};
// Defer loading until the browser is idle to avoid blocking page-load
// animations. Safari is particularly sensitive to main-thread work from
// the Turnstile script executing during animation frames.
"function"==typeof requestIdleCallback?window.requestIdleCallback(t):
// Fallback for Safari < 16 which lacks requestIdleCallback support.
setTimeout(t,200)}}(),o=t("html").attr("data-wf-site"),u="https://webflow.com/api/v1/form/"+o,
// Work around same-protocol IE XDR limitation - without this IE9 and below forms won't submit
d&&u.indexOf("https://webflow.com")>=0&&(u=u.replace("https://webflow.com","https://formdata.webflow.com")),c=`${u}/signFile`,(i=t(p+" form")).length&&i.each(b),
// Wire document events on published and in preview workflow only once
g&&!r.env("preview")||a||function(){a=!0,l.on("submit",p+" form",function(e){var n=t.data(this,p);n.handler&&(n.evt=e,n.handler(n))});
// handle checked ui for custom checkbox and radio button
const e=".w-checkbox-input",n=".w-radio-input",r="w--redirected-checked",i="w--redirected-focus",o="w--redirected-focus-visible",u=[["checkbox",e],["radio",n]];l.on("change",p+' form input[type="checkbox"]:not('+e+")",n=>{t(n.target).siblings(e).toggleClass(r)}),l.on("change",p+' form input[type="radio"]',i=>{t(`input[name="${i.target.name}"]:not(${e})`).map((e,i)=>t(i).siblings(n).removeClass(r));const o=t(i.target);o.hasClass("w-radio-input")||o.siblings(n).addClass(r)}),u.forEach(([e,n])=>{l.on("focus",p+` form input[type="${e}"]:not(`+n+")",e=>{t(e.target).siblings(n).addClass(i),t(e.target).filter(":focus-visible, [data-wf-focus-visible]").siblings(n).addClass(o)}),l.on("blur",p+` form input[type="${e}"]:not(`+n+")",e=>{t(e.target).siblings(n).removeClass(`${i} ${o}`)})})}()},s})},3946:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{actionListPlaybackChanged:function(){return B},animationFrameChanged:function(){return j},clearRequested:function(){return P},elementStateChanged:function(){return X},eventListenerAdded:function(){return M},eventStateChanged:function(){return D},instanceAdded:function(){return G},instanceRemoved:function(){return U},instanceStarted:function(){return V},mediaQueriesDefined:function(){return z},parameterChanged:function(){return k},playbackRequested:function(){return L},previewRequested:function(){return C},rawDataImported:function(){return w},sessionInitialized:function(){return S},sessionStarted:function(){return N},sessionStopped:function(){return R},stopRequested:function(){return x},testFrameRendered:function(){return F},viewportWidthChanged:function(){return W}});const r=n(7087),i=n(9468),{IX2_RAW_DATA_IMPORTED:o,IX2_SESSION_INITIALIZED:a,IX2_SESSION_STARTED:u,IX2_SESSION_STOPPED:c,IX2_PREVIEW_REQUESTED:s,IX2_PLAYBACK_REQUESTED:l,IX2_STOP_REQUESTED:f,IX2_CLEAR_REQUESTED:d,IX2_EVENT_LISTENER_ADDED:p,IX2_TEST_FRAME_RENDERED:h,IX2_EVENT_STATE_CHANGED:E,IX2_ANIMATION_FRAME_CHANGED:v,IX2_PARAMETER_CHANGED:g,IX2_INSTANCE_ADDED:y,IX2_INSTANCE_STARTED:m,IX2_INSTANCE_REMOVED:_,IX2_ELEMENT_STATE_CHANGED:I,IX2_ACTION_LIST_PLAYBACK_CHANGED:b,IX2_VIEWPORT_WIDTH_CHANGED:T,IX2_MEDIA_QUERIES_DEFINED:O}=r.IX2EngineActionTypes,{reifyState:A}=i.IX2VanillaUtils,w=t=>({type:o,payload:{...A(t)}}),S=({hasBoundaryNodes:t,reducedMotion:e})=>({type:a,payload:{hasBoundaryNodes:t,reducedMotion:e}}),N=()=>({type:u}),R=()=>({type:c}),C=({rawData:t,defer:e})=>({type:s,payload:{defer:e,rawData:t}}),L=({actionTypeId:t=r.ActionTypeConsts.GENERAL_START_ACTION,actionListId:e,actionItemId:n,eventId:i,allowEvents:o,immediate:a,testManual:u,verbose:c,rawData:s})=>({type:l,payload:{actionTypeId:t,actionListId:e,actionItemId:n,testManual:u,eventId:i,allowEvents:o,immediate:a,verbose:c,rawData:s}}),x=t=>({type:f,payload:{actionListId:t}}),P=()=>({type:d}),M=(t,e)=>({type:p,payload:{target:t,listenerParams:e}}),F=(t=1)=>({type:h,payload:{step:t}}),D=(t,e)=>({type:E,payload:{stateKey:t,newState:e}}),j=(t,e)=>({type:v,payload:{now:t,parameters:e}}),k=(t,e)=>({type:g,payload:{key:t,value:e}}),G=t=>({type:y,payload:{...t}}),V=(t,e)=>({type:m,payload:{instanceId:t,time:e}}),U=t=>({type:_,payload:{instanceId:t}}),X=(t,e,n,r)=>({type:I,payload:{elementId:t,actionTypeId:e,current:n,actionItem:r}}),B=({actionListId:t,isPlaying:e})=>({type:b,payload:{actionListId:t,isPlaying:e}}),W=({width:t,mediaQueries:e})=>({type:T,payload:{width:t,mediaQueries:e}}),z=()=>({type:O})},6011:function(t,e,n){"use strict";
// Array.includes needed for IE11 @packages/systems/ix2/shared-utils/quick-effects
Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{actions:function(){return a},destroy:function(){return p},init:function(){return d},setEnv:function(){return f},store:function(){return l}});const r=n(9516),i=u(n(7243)),o=n(1970),a=s(n(3946));function u(t){return t&&t.__esModule?t:{default:t}}function c(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(c=function(t){return t?n:e})(t)}function s(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=c(e);if(n&&n.has(t))return n.get(t);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var a=i?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=t[o]}return r.default=t,n&&n.set(t,r),r}const l=(0,r.createStore)(i.default);function f(t){t()&&(0,o.observeRequests)(l)}function d(t){p(),(0,o.startEngine)({store:l,rawData:t,allowEvents:!0})}function p(){(0,o.stopEngine)(l)}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL2VuZ2luZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBcnJheS5pbmNsdWRlcyBuZWVkZWQgZm9yIElFMTEgQHBhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC11dGlscy9xdWljay1lZmZlY3RzXG5pbXBvcnQgJ2NvcmUtanMvZmVhdHVyZXMvYXJyYXkvaW5jbHVkZXMnO1xuXG5pbXBvcnQge2NyZWF0ZVN0b3JlfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL0lYMlJlZHVjZXInO1xuaW1wb3J0IHtcbiAgc3RhcnRFbmdpbmUsXG4gIHN0b3BFbmdpbmUsXG4gIG9ic2VydmVSZXF1ZXN0cyxcbn0gZnJvbSAnLi9sb2dpYy9JWDJWYW5pbGxhRW5naW5lJztcbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zL0lYMkVuZ2luZUFjdGlvbnMnO1xuaW1wb3J0IHtcbiAgdHlwZSBJWDJSYXdEYXRhLFxuICB0eXBlIHJhd0RhdGFJbXBvcnRlZFBheWxvYWQsXG59IGZyb20gJy4vYWN0aW9ucy9JWDJFbmdpbmVBY3Rpb25zJztcblxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyKTtcblxuZnVuY3Rpb24gc2V0RW52KGVudjogKGFyZzE/OiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiBib29sZWFuKSB7XG4gIGlmIChlbnYoKSkge1xuICAgIG9ic2VydmVSZXF1ZXN0cyhzdG9yZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5pdChyYXdEYXRhOiBJWDJSYXdEYXRhKSB7XG4gIGRlc3Ryb3koKTtcblxuICBzdGFydEVuZ2luZSh7c3RvcmUsIHJhd0RhdGEsIGFsbG93RXZlbnRzOiB0cnVlfSk7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gIHN0b3BFbmdpbmUoc3RvcmUpO1xufVxuXG5leHBvcnQge1xuICBzZXRFbnYsXG4gIGluaXQsXG4gIGRlc3Ryb3ksXG4gIHN0b3JlLFxuICBhY3Rpb25zLFxuICB0eXBlIElYMlJhd0RhdGEsXG4gIHR5cGUgcmF3RGF0YUltcG9ydGVkUGF5bG9hZCxcbn07XG4iXSwibmFtZXMiOlsiYWN0aW9ucyIsImRlc3Ryb3kiLCJpbml0Iiwic2V0RW52Iiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJlbnYiLCJvYnNlcnZlUmVxdWVzdHMiLCJyYXdEYXRhIiwic3RhcnRFbmdpbmUiLCJhbGxvd0V2ZW50cyIsInN0b3BFbmdpbmUiXSwibWFwcGluZ3MiOiJBQUFBLGtGQUFrRjs7Ozs7Ozs7Ozs7O0lBdUNoRkEsT0FBTztlQUFQQTs7SUFGQUMsT0FBTztlQUFQQTs7SUFEQUMsSUFBSTtlQUFKQTs7SUFEQUMsTUFBTTtlQUFOQTs7SUFHQUMsS0FBSztlQUFMQTs7O3VCQW5Dd0I7bUVBQ047a0NBS2I7MEVBQ2tCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU16QixNQUFNQSxRQUFRQyxJQUFBQSxrQkFBVyxFQUFDQyxtQkFBTztBQUVqQyxTQUFTSCxPQUFPSSxHQUFrRDtJQUNoRSxJQUFJQSxPQUFPO1FBQ1RDLElBQUFBLGlDQUFlLEVBQUNKO0lBQ2xCO0FBQ0Y7QUFFQSxTQUFTRixLQUFLTyxPQUFtQjtJQUMvQlI7SUFFQVMsSUFBQUEsNkJBQVcsRUFBQztRQUFDTjtRQUFPSztRQUFTRSxhQUFhO0lBQUk7QUFDaEQ7QUFFQSxTQUFTVjtJQUNQVyxJQUFBQSw0QkFBVSxFQUFDUjtBQUNiIn0=
},5012:function(t,e,n){"use strict";
/* eslint-env browser */Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{elementContains:function(){return g},getChildElements:function(){return m},getClosestElement:function(){return I},getProperty:function(){return d},getQuerySelector:function(){return h},getRefType:function(){return b},getSiblingElements:function(){return _},getStyle:function(){return f},getValidDocument:function(){return E},isSiblingNode:function(){return y},matchSelector:function(){return p},queryDocument:function(){return v},setStyle:function(){return l}});const r=n(9468),i=n(7087),{ELEMENT_MATCHES:o}=r.IX2BrowserSupport,{IX2_ID_DELIMITER:a,HTML_ELEMENT:u,PLAIN_OBJECT:c,WF_PAGE:s}=i.IX2EngineConstants;function l(t,e,n){
// @ts-expect-error - TS7015 - Element implicitly has an 'any' type because index expression is not of type 'number'.
t.style[e]=n}function f(t,e){return e.startsWith("--")?window.getComputedStyle(document.documentElement).getPropertyValue(e):t.style instanceof CSSStyleDeclaration?t.style[e]:void 0}function d(t,e){
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'HTMLElement'.
return t[e]}function p(t){
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'HTMLElement'.
return e=>e[o](t)}function h({id:t,selector:e}){if(t){let e=t;if(-1!==t.indexOf(a)){const n=t.split(a),r=n[0];
// Short circuit query if we're on the wrong page
if(
// @ts-expect-error - TS2322 - Type 'string | undefined' is not assignable to type 'string'.
e=n[1],r!==document.documentElement.getAttribute(s))return null}return`[data-w-id="${e}"], [data-w-id^="${e}_instance"]`}return e}function E(t){return null==t||t===document.documentElement.getAttribute(s)?document:null}function v(t,e){return Array.prototype.slice.call(document.querySelectorAll(e?t+" "+e:t))}function g(t,e){return t.contains(e)}function y(t,e){return t!==e&&t.parentNode===e.parentNode}function m(// @ts-expect-error - TS2315 - Type 'NodeList' is not generic.
t){const e=[];for(let n=0,{length:r}=t||[];n<r;n++){const{children:r}=t[n],{length:i}=r;if(i)for(let t=0;t<i;t++)e.push(r[t])}return e}function _(t=[]){const e=[],n=[];for(let r=0,{length:i}=t;r<i;r++){
// @ts-expect-error - TS2339 - Property 'parentNode' does not exist on type 'undefined'.
const{parentNode:i}=t[r];if(!i||!i.children||!i.children.length)continue;if(-1!==n.indexOf(i))continue;n.push(i);let o=i.firstElementChild;for(;null!=o;)-1===t.indexOf(o)&&e.push(o),o=o.nextElementSibling}return e}const I=Element.prototype.closest?(t,e)=>document.documentElement.contains(t)?t.closest(e):null:(t,e)=>{if(!document.documentElement.contains(t))return null;let n=t;do{
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'HTMLElement'. | TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'HTMLElement'.
if(n[o]&&n[o](e))return n;
// @ts-expect-error - TS2322 - Type 'ParentNode | null' is not assignable to type 'HTMLElement'.
n=n.parentNode}while(null!=n);return null};function b(t){return null!=t&&"object"==typeof t?t instanceof Element?u:c:null}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL2VuZ2luZS9sb2dpYy9JWDJCcm93c2VyQXBpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuaW1wb3J0IHtJWDJCcm93c2VyU3VwcG9ydH0gZnJvbSAnQHBhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZCc7XG5pbXBvcnQge0lYMkVuZ2luZUNvbnN0YW50c30gZnJvbSAnQHBhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC1jb25zdGFudHMnO1xuY29uc3Qge0VMRU1FTlRfTUFUQ0hFU30gPSBJWDJCcm93c2VyU3VwcG9ydDtcbmNvbnN0IHtJWDJfSURfREVMSU1JVEVSLCBIVE1MX0VMRU1FTlQsIFBMQUlOX09CSkVDVCwgV0ZfUEFHRX0gPVxuICBJWDJFbmdpbmVDb25zdGFudHM7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTdHlsZShlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMTUgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBpbmRleCBleHByZXNzaW9uIGlzIG5vdCBvZiB0eXBlICdudW1iZXInLlxuICBlbGVtZW50LnN0eWxlW3Byb3BdID0gdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHlsZShlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcDogc3RyaW5nKSB7XG4gIGlmIChwcm9wLnN0YXJ0c1dpdGgoJy0tJykpIHtcbiAgICByZXR1cm4gd2luZG93XG4gICAgICAuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpXG4gICAgICAuZ2V0UHJvcGVydHlWYWx1ZShwcm9wKTtcbiAgfVxuXG4gIGlmIChlbGVtZW50LnN0eWxlIGluc3RhbmNlb2YgQ1NTU3R5bGVEZWNsYXJhdGlvbikge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMTUgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBpbmRleCBleHByZXNzaW9uIGlzIG5vdCBvZiB0eXBlICdudW1iZXInLlxuICAgIHJldHVybiBlbGVtZW50LnN0eWxlW3Byb3BdO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eShlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcDogc3RyaW5nKSB7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwNTMgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZXNzaW9uIG9mIHR5cGUgJ3N0cmluZycgY2FuJ3QgYmUgdXNlZCB0byBpbmRleCB0eXBlICdIVE1MRWxlbWVudCcuXG4gIHJldHVybiBlbGVtZW50W3Byb3BdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hTZWxlY3RvcihcbiAgc2VsZWN0b3I6IHN0cmluZ1xuKTogKGFyZzE6IEhUTUxFbGVtZW50KSA9PiBib29sZWFuIHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzA1MyAtIEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlc3Npb24gb2YgdHlwZSAnYW55JyBjYW4ndCBiZSB1c2VkIHRvIGluZGV4IHR5cGUgJ0hUTUxFbGVtZW50Jy5cbiAgcmV0dXJuIChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4gZWxlbWVudFtFTEVNRU5UX01BVENIRVNdKHNlbGVjdG9yKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFF1ZXJ5U2VsZWN0b3Ioe1xuICBpZCxcbiAgc2VsZWN0b3IsXG59OiB7XG4gIGlkOiBudWxsIHwgdW5kZWZpbmVkIHwgc3RyaW5nO1xuICBzZWxlY3Rvcjogc3RyaW5nO1xufSkge1xuICBpZiAoaWQpIHtcbiAgICBsZXQgbm9kZUlkID0gaWQ7XG4gICAgaWYgKGlkLmluZGV4T2YoSVgyX0lEX0RFTElNSVRFUikgIT09IC0xKSB7XG4gICAgICBjb25zdCBwYWlyID0gaWQuc3BsaXQoSVgyX0lEX0RFTElNSVRFUik7XG4gICAgICBjb25zdCBwYWdlSWQgPSBwYWlyWzBdO1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjMyMiAtIFR5cGUgJ3N0cmluZyB8IHVuZGVmaW5lZCcgaXMgbm90IGFzc2lnbmFibGUgdG8gdHlwZSAnc3RyaW5nJy5cbiAgICAgIG5vZGVJZCA9IHBhaXJbMV07XG4gICAgICAvLyBTaG9ydCBjaXJjdWl0IHF1ZXJ5IGlmIHdlJ3JlIG9uIHRoZSB3cm9uZyBwYWdlXG4gICAgICBpZiAocGFnZUlkICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFdGX1BBR0UpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYFtkYXRhLXctaWQ9XCIke25vZGVJZH1cIl0sIFtkYXRhLXctaWRePVwiJHtub2RlSWR9X2luc3RhbmNlXCJdYDtcbiAgfVxuICByZXR1cm4gc2VsZWN0b3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRWYWxpZERvY3VtZW50KHBhZ2VJZD86IG51bGwgfCBzdHJpbmcpIHtcbiAgaWYgKFxuICAgIHBhZ2VJZCA9PSBudWxsIHx8XG4gICAgcGFnZUlkID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZ2V0QXR0cmlidXRlKFdGX1BBR0UpXG4gICkge1xuICAgIHJldHVybiBkb2N1bWVudDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5RG9jdW1lbnQoXG4gIGJhc2VTZWxlY3Rvcjogc3RyaW5nLFxuICBkZXNjZW5kYW50U2VsZWN0b3I/OiBudWxsIHwgc3RyaW5nXG4pOiBIVE1MRWxlbWVudFtdIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICBkZXNjZW5kYW50U2VsZWN0b3JcbiAgICAgICAgPyBiYXNlU2VsZWN0b3IgKyAnICcgKyBkZXNjZW5kYW50U2VsZWN0b3JcbiAgICAgICAgOiBiYXNlU2VsZWN0b3JcbiAgICApXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50Q29udGFpbnMoXG4gIHBhcmVudDogSFRNTEVsZW1lbnQsXG4gIGNoaWxkOiBIVE1MRWxlbWVudFxuKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXJlbnQuY29udGFpbnMoY2hpbGQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTaWJsaW5nTm9kZShhOiBIVE1MRWxlbWVudCwgYjogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgcmV0dXJuIGEgIT09IGIgJiYgYS5wYXJlbnROb2RlID09PSBiLnBhcmVudE5vZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGlsZEVsZW1lbnRzKFxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzE1IC0gVHlwZSAnTm9kZUxpc3QnIGlzIG5vdCBnZW5lcmljLlxuICBzb3VyY2VFbGVtZW50czogQXJyYXk8SFRNTEVsZW1lbnQ+IHwgTm9kZUxpc3Q8SFRNTEVsZW1lbnQ+XG4pIHtcbiAgY29uc3QgY2hpbGRFbGVtZW50czogQXJyYXk8SFRNTEVsZW1lbnQgfCBhbnk+ID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDAsIHtsZW5ndGh9ID0gc291cmNlRWxlbWVudHMgfHwgW107IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IHtjaGlsZHJlbn0gPSBzb3VyY2VFbGVtZW50c1tpXTtcbiAgICBjb25zdCB7bGVuZ3RoOiBjaGlsZENvdW50fSA9IGNoaWxkcmVuO1xuICAgIGlmICghY2hpbGRDb3VudCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2hpbGRDb3VudDsgaisrKSB7XG4gICAgICBjaGlsZEVsZW1lbnRzLnB1c2goY2hpbGRyZW5bal0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gY2hpbGRFbGVtZW50cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNpYmxpbmdFbGVtZW50cyhcbiAgc291cmNlRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXVxuKTogSFRNTEVsZW1lbnRbXSB7XG4gIGNvbnN0IGVsZW1lbnRzOiBBcnJheTxhbnk+ID0gW107XG4gIGNvbnN0IHBhcmVudENhY2hlOiBBcnJheTxhbnk+ID0gW107XG4gIGZvciAobGV0IGkgPSAwLCB7bGVuZ3RofSA9IHNvdXJjZUVsZW1lbnRzOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzM5IC0gUHJvcGVydHkgJ3BhcmVudE5vZGUnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ3VuZGVmaW5lZCcuXG4gICAgY29uc3Qge3BhcmVudE5vZGV9ID0gc291cmNlRWxlbWVudHNbaV07XG4gICAgaWYgKCFwYXJlbnROb2RlIHx8ICFwYXJlbnROb2RlLmNoaWxkcmVuIHx8ICFwYXJlbnROb2RlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChwYXJlbnRDYWNoZS5pbmRleE9mKHBhcmVudE5vZGUpICE9PSAtMSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHBhcmVudENhY2hlLnB1c2gocGFyZW50Tm9kZSk7XG4gICAgbGV0IGVsID0gcGFyZW50Tm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB3aGlsZSAoZWwgIT0gbnVsbCkge1xuICAgICAgaWYgKHNvdXJjZUVsZW1lbnRzLmluZGV4T2YoZWwpID09PSAtMSkge1xuICAgICAgICBlbGVtZW50cy5wdXNoKGVsKTtcbiAgICAgIH1cbiAgICAgIGVsID0gZWwubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZWxlbWVudHM7XG59XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI3NzQgLSBUaGlzIGNvbmRpdGlvbiB3aWxsIGFsd2F5cyByZXR1cm4gdHJ1ZSBzaW5jZSB0aGlzIGZ1bmN0aW9uIGlzIGFsd2F5cyBkZWZpbmVkLiBEaWQgeW91IG1lYW4gdG8gY2FsbCBpdCBpbnN0ZWFkP1xuZXhwb3J0IGNvbnN0IGdldENsb3Nlc3RFbGVtZW50ID0gRWxlbWVudC5wcm90b3R5cGUuY2xvc2VzdFxuICA/IChlbGVtZW50OiBIVE1MRWxlbWVudCwgc2VsZWN0b3I6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKCFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY29udGFpbnMoZWxlbWVudCkpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBlbGVtZW50LmNsb3Nlc3Qoc2VsZWN0b3IpIGFzIEhUTUxFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgICB9XG4gIDogKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBzZWxlY3Rvcjogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jb250YWlucyhlbGVtZW50KSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgbGV0IGVsID0gZWxlbWVudDtcblxuICAgICAgZG8ge1xuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDUzIC0gRWxlbWVudCBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlIGJlY2F1c2UgZXhwcmVzc2lvbiBvZiB0eXBlICdhbnknIGNhbid0IGJlIHVzZWQgdG8gaW5kZXggdHlwZSAnSFRNTEVsZW1lbnQnLiB8IFRTNzA1MyAtIEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlc3Npb24gb2YgdHlwZSAnYW55JyBjYW4ndCBiZSB1c2VkIHRvIGluZGV4IHR5cGUgJ0hUTUxFbGVtZW50Jy5cbiAgICAgICAgaWYgKGVsW0VMRU1FTlRfTUFUQ0hFU10gJiYgZWxbRUxFTUVOVF9NQVRDSEVTXShzZWxlY3RvcikpIHtcbiAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjMyMiAtIFR5cGUgJ1BhcmVudE5vZGUgfCBudWxsJyBpcyBub3QgYXNzaWduYWJsZSB0byB0eXBlICdIVE1MRWxlbWVudCcuXG4gICAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcbiAgICAgIH0gd2hpbGUgKGVsICE9IG51bGwpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlZlR5cGUocmVmOiBhbnkpIHtcbiAgaWYgKHJlZiAhPSBudWxsICYmIHR5cGVvZiByZWYgPT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcmVmIGluc3RhbmNlb2YgRWxlbWVudCA/IEhUTUxfRUxFTUVOVCA6IFBMQUlOX09CSkVDVDtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn1cbiJdLCJuYW1lcyI6WyJlbGVtZW50Q29udGFpbnMiLCJnZXRDaGlsZEVsZW1lbnRzIiwiZ2V0Q2xvc2VzdEVsZW1lbnQiLCJnZXRQcm9wZXJ0eSIsImdldFF1ZXJ5U2VsZWN0b3IiLCJnZXRSZWZUeXBlIiwiZ2V0U2libGluZ0VsZW1lbnRzIiwiZ2V0U3R5bGUiLCJnZXRWYWxpZERvY3VtZW50IiwiaXNTaWJsaW5nTm9kZSIsIm1hdGNoU2VsZWN0b3IiLCJxdWVyeURvY3VtZW50Iiwic2V0U3R5bGUiLCJFTEVNRU5UX01BVENIRVMiLCJJWDJCcm93c2VyU3VwcG9ydCIsIklYMl9JRF9ERUxJTUlURVIiLCJIVE1MX0VMRU1FTlQiLCJQTEFJTl9PQkpFQ1QiLCJXRl9QQUdFIiwiSVgyRW5naW5lQ29uc3RhbnRzIiwiZWxlbWVudCIsInByb3AiLCJ2YWx1ZSIsInN0eWxlIiwic3RhcnRzV2l0aCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJkb2N1bWVudCIsImRvY3VtZW50RWxlbWVudCIsImdldFByb3BlcnR5VmFsdWUiLCJDU1NTdHlsZURlY2xhcmF0aW9uIiwic2VsZWN0b3IiLCJpZCIsIm5vZGVJZCIsImluZGV4T2YiLCJwYWlyIiwic3BsaXQiLCJwYWdlSWQiLCJnZXRBdHRyaWJ1dGUiLCJiYXNlU2VsZWN0b3IiLCJkZXNjZW5kYW50U2VsZWN0b3IiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwYXJlbnQiLCJjaGlsZCIsImNvbnRhaW5zIiwiYSIsImIiLCJwYXJlbnROb2RlIiwic291cmNlRWxlbWVudHMiLCJjaGlsZEVsZW1lbnRzIiwiaSIsImxlbmd0aCIsImNoaWxkcmVuIiwiY2hpbGRDb3VudCIsImoiLCJwdXNoIiwiZWxlbWVudHMiLCJwYXJlbnRDYWNoZSIsImVsIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJFbGVtZW50IiwiY2xvc2VzdCIsInJlZiJdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCOzs7Ozs7Ozs7OztJQW9GTkEsZUFBZTtlQUFmQTs7SUFXQUMsZ0JBQWdCO2VBQWhCQTs7SUE4Q0hDLGlCQUFpQjtlQUFqQkE7O0lBcEhHQyxXQUFXO2VBQVhBOztJQVlBQyxnQkFBZ0I7ZUFBaEJBOztJQWtJQUMsVUFBVTtlQUFWQTs7SUFyREFDLGtCQUFrQjtlQUFsQkE7O0lBdEdBQyxRQUFRO2VBQVJBOztJQWlEQUMsZ0JBQWdCO2VBQWhCQTs7SUE4QkFDLGFBQWE7ZUFBYkE7O0lBN0RBQyxhQUFhO2VBQWJBOztJQXlDQUMsYUFBYTtlQUFiQTs7SUFoRUFDLFFBQVE7ZUFBUkE7Ozt3QkFOZ0I7aUNBQ0M7QUFDakMsTUFBTSxFQUFDQyxlQUFlLEVBQUMsR0FBR0MseUJBQWlCO0FBQzNDLE1BQU0sRUFBQ0MsZ0JBQWdCLEVBQUVDLFlBQVksRUFBRUMsWUFBWSxFQUFFQyxPQUFPLEVBQUMsR0FDM0RDLG1DQUFrQjtBQUViLFNBQVNQLFNBQVNRLE9BQW9CLEVBQUVDLElBQVksRUFBRUMsS0FBYTtJQUN4RSxxSEFBcUg7SUFDckhG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
},1970:function(t,e,n){"use strict";
/* eslint-env browser */Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{observeRequests:function(){return q},startActionGroup:function(){return ht},startEngine:function(){return rt},stopActionGroup:function(){return pt},stopAllActionGroups:function(){return dt},stopEngine:function(){return it}});const r=v(n(9777)),i=v(n(4738)),o=v(n(4659)),a=v(n(3452)),u=v(n(6633)),c=v(n(3729)),s=v(n(2397)),l=v(n(5082)),f=n(7087),d=n(9468),p=n(3946),h=y(n(5012)),E=v(n(8955));function v(t){return t&&t.__esModule?t:{default:t}}function g(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(g=function(t){return t?n:e})(t)}function y(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=g(e);if(n&&n.has(t))return n.get(t);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var a=i?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=t[o]}return r.default=t,n&&n.set(t,r),r}const m=Object.keys(f.QuickEffectIds),_=t=>m.includes(t),{COLON_DELIMITER:I,BOUNDARY_SELECTOR:b,HTML_ELEMENT:T,RENDER_GENERAL:O,W_MOD_IX:A}=f.IX2EngineConstants,{getAffectedElements:w,getElementId:S,getDestinationValues:N,observeStore:R,getInstanceId:C,renderHTMLElement:L,clearAllStyles:x,getMaxDurationItemIndex:P,getComputedStyle:M,getInstanceOrigin:F,reduceListToGroup:D,shouldNamespaceEventParameter:j,getNamespacedParameterId:k,shouldAllowMediaQuery:G,cleanupHTMLElement:V,clearObjectCache:U,stringifyTarget:X,mediaQueriesEqual:B,shallowEqual:W}=d.IX2VanillaUtils,{isPluginType:z,createPluginInstance:H,getPluginDuration:$}=d.IX2VanillaPlugins,Y=navigator.userAgent,K=Y.match(/iPad/i)||Y.match(/iPhone/),Q=12;function q(t){R({store:t,select:({ixRequest:t})=>t.preview,onChange:Z}),R({store:t,select:({ixRequest:t})=>t.playback,onChange:tt}),R({store:t,select:({ixRequest:t})=>t.stop,onChange:et}),R({store:t,select:({ixRequest:t})=>t.clear,onChange:nt})}function Z({rawData:t,defer:e},n){const r=()=>{rt({store:n,rawData:t,allowEvents:!0}),J()};e?setTimeout(r,0):r()}function J(){document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))}function tt(t,e){const{actionTypeId:n,actionListId:r,actionItemId:i,eventId:o,allowEvents:a,immediate:u,testManual:c,verbose:s=!0}=t;let{rawData:l}=t;if(r&&i&&l&&u){const t=l.actionLists[r];t&&(l=D({actionList:t,actionItemId:i,rawData:l}))}if(rt({store:e,rawData:l,allowEvents:a,testManual:c}),r&&n===f.ActionTypeConsts.GENERAL_START_ACTION||_(n)){
// @ts-expect-error - TS2345 - Argument of type '{ store: any; actionListId: any; }' is not assignable to parameter of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; }'.
pt({store:e,actionListId:r}),ft({store:e,actionListId:r,eventId:o});
// @ts-expect-error - TS2345 - Argument of type '{ store: any; eventId: any; actionListId: any; immediate: any; verbose: any; }' is not assignable to parameter of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; groupIndex?: number | undefined; immediate: any; verbose: any; }'.
const t=ht({store:e,eventId:o,actionListId:r,immediate:u,verbose:s});s&&t&&e.dispatch((0,p.actionListPlaybackChanged)({actionListId:r,isPlaying:!u}))}}function et({actionListId:t},e){t?
// @ts-expect-error - TS2345 - Argument of type '{ store: any; actionListId: any; }' is not assignable to parameter of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; }'.
pt({store:e,actionListId:t}):dt({store:e}),it(e)}function nt(t,e){it(e),x({store:e,elementApi:h})}function rt({store:t,rawData:e,allowEvents:n,testManual:a}){const{ixSession:u}=t.getState();e&&t.dispatch((0,p.rawDataImported)(e)),u.active||(t.dispatch((0,p.sessionInitialized)({hasBoundaryNodes:Boolean(document.querySelector(b)),reducedMotion:document.body.hasAttribute("data-wf-ix-vacation")&&window.matchMedia("(prefers-reduced-motion)").matches})),n&&(function(t){const{ixData:e}=t.getState(),{eventTypeMap:n}=e;ut(t),(0,s.default)(n,(e,n)=>{
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ SLIDER_ACTIVE: { handler: (options: any, state: any) => any; types: string; }; SLIDER_INACTIVE: { handler: (options: any, state: any) => any; types: string; }; DROPDOWN_OPEN: { handler: (options: any, state: any) => any; types: string; }; ... 21 more ...; PAGE_START: { ...; }; }'.
const a=E.default[n];a?
// @ts-expect-error - TS7031 - Binding element 'logic' implicitly has an 'any' type. | TS7031 - Binding element 'store' implicitly has an 'any' type. | TS7031 - Binding element 'events' implicitly has an 'any' type.
function({logic:t,store:e,events:n}){!
/**
 * Injects CSS into the document to fix behavior issues across
 * different devices.
 */
function(t){if(!K)return;const e={};let n="";for(const r in t){const{eventTypeId:i,target:o}=t[r],a=h.getQuerySelector(o);
// @ts-expect-error - TS2538 - Type 'null' cannot be used as an index type.
e[a]||i!==f.EventTypeConsts.MOUSE_CLICK&&i!==f.EventTypeConsts.MOUSE_SECOND_CLICK||(
// @ts-expect-error - TS2538 - Type 'null' cannot be used as an index type.
e[a]=!0,n+=a+"{cursor: pointer;touch-action: manipulation;}");
// add a "cursor: pointer" style rule to ensure that CLICK events get fired for IOS devices
}if(n){const t=document.createElement("style");t.textContent=n,document.body.appendChild(t)}}(n);const{types:a,handler:u}=t,{ixData:c}=e.getState(),{actionLists:d}=c,E=ct(n,lt);if(!(0,o.default)(E))return;(0,s.default)(E,(t,o)=>{const a=n[o],{action:u,id:s,mediaQueries:l=c.mediaQueryKeys}=a,{actionListId:E}=u.config;B(l,c.mediaQueryKeys)||e.dispatch((0,p.mediaQueriesDefined)()),u.actionTypeId===f.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION&&
// @ts-expect-error - TS7006 - Parameter 'eventConfig' implicitly has an 'any' type.
(Array.isArray(a.config)?a.config:[a.config]).forEach(n=>{const{continuousParameterGroupId:o}=n,a=(0,i.default)(d,`${E}.continuousParameterGroups`,[]),u=(0,r.default)(a,({id:t})=>t===o),c=(n.smoothing||0)/100,l=(n.restingState||0)/100;u&&t.forEach((t,r)=>{!function({store:// @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
t,eventStateKey:// @ts-expect-error - TS7031 - Binding element 'eventStateKey' implicitly has an 'any' type.
e,eventTarget:// @ts-expect-error - TS7031 - Binding element 'eventTarget' implicitly has an 'any' type.
n,eventId:// @ts-expect-error - TS7031 - Binding element 'eventId' implicitly has an 'any' type.
r,eventConfig:// @ts-expect-error - TS7031 - Binding element 'eventConfig' implicitly has an 'any' type.
o,actionListId:// @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
a,parameterGroup:// @ts-expect-error - TS7031 - Binding element 'parameterGroup' implicitly has an 'any' type.
u,smoothing:// @ts-expect-error - TS7031 - Binding element 'smoothing' implicitly has an 'any' type.
c,restingValue:// @ts-expect-error - TS7031 - Binding element 'restingValue' implicitly has an 'any' type.
s}){const{ixData:l,ixSession:d}=t.getState(),{events:p}=l,E=p[r],{eventTypeId:v}=E,g={},y={},m=[],{continuousActionGroups:_}=u;let{id:T}=u;j(v,o)&&(T=k(e,T));
// Limit affected elements when event target is within a boundary node
const O=d.hasBoundaryNodes&&n?h.getClosestElement(n,b):null;
// @ts-expect-error - TS7006 - Parameter 'actionGroup' implicitly has an 'any' type.
_.forEach(t=>{const{keyframe:e,actionItems:r}=t;
// @ts-expect-error - TS7006 - Parameter 'actionItem' implicitly has an 'any' type.
r.forEach(t=>{const{actionTypeId:r}=t,{target:i}=t.config;if(!i)return;const o=i.boundaryMode?O:null,a=X(i)+I+r;if(y[a]=function(t=[],e,n){const r=[...t];let i;return r.some((t,n)=>
// @ts-expect-error - TS2339 - Property 'keyframe' does not exist on type 'never'.
t.keyframe===e&&(i=n,!0)),null==i&&(i=r.length,
// @ts-expect-error - TS2345 - Argument of type '{ keyframe: any; actionItems: never[]; }' is not assignable to parameter of type 'never'.
r.push({keyframe:e,actionItems:[]})),
// @ts-expect-error - TS2339 - Property 'actionItems' does not exist on type 'never'.
r[i].actionItems.push(n),r}(y[a],e,t),!g[a]){g[a]=!0;const{config:e}=t;w({config:e,event:E,eventTarget:n,elementRoot:o,elementApi:h}).forEach(t=>{m.push({element:t,key:a})})}})}),m.forEach(({element:e,key:n})=>{const o=y[n],u=(0,i.default)(o,"[0].actionItems[0]",{}),{actionTypeId:l}=u,d=(// If it's targeted by class, don't query the element by pluginElementId
l===f.ActionTypeConsts.PLUGIN_RIVE?0===(u.config?.target?.selectorGuids||[]).length:z(l))?H(l)?.(e,u):null,p=N({element:e,actionItem:u,elementApi:h},// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
d);Et({store:t,element:e,eventId:r,actionListId:a,actionItem:u,destination:p,continuous:!0,parameterId:T,actionGroups:o,smoothing:c,restingValue:s,pluginInstance:d})})}({store:e,eventStateKey:s+I+r,eventTarget:t,eventId:s,eventConfig:n,actionListId:E,parameterGroup:u,smoothing:c,restingValue:l})})}),(u.actionTypeId===f.ActionTypeConsts.GENERAL_START_ACTION||_(u.actionTypeId))&&ft({store:e,actionListId:E,eventId:s})});const v=t=>{const{ixSession:r}=e.getState();st(E,(i,o,a)=>{const s=n[o],l=r.eventState[a],{action:d,mediaQueries:h=c.mediaQueryKeys}=s;
// Bypass event handler if current media query is not listed in event config
if(!G(h,r.mediaQueryKey))return;const E=(n={})=>{const r=u({store:e,element:i,event:s,eventConfig:n,nativeEvent:t,eventStateKey:a},l);W(r,l)||e.dispatch((0,p.eventStateChanged)(a,r))};d.actionTypeId===f.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION?(Array.isArray(s.config)?s.config:[s.config]).forEach(E):E()})},g=(0,l.default)(v,Q),y=({target:t=document,// @ts-expect-error - TS7031 - Binding element 'types' implicitly has an 'any' type.
types:n,// @ts-expect-error - TS7031 - Binding element 'shouldThrottle' implicitly has an 'any' type.
throttle:r})=>{n.split(" ").filter(Boolean).forEach(n=>{const i=r?g:v;t.addEventListener(n,i),e.dispatch((0,p.eventListenerAdded)(t,[n,i]))})};Array.isArray(a)?a.forEach(y):"string"==typeof a&&y(t)}({
// @ts-expect-error - TS7031 - Binding element 'logic' implicitly has an 'any' type.
logic:a,store:t,events:e}):console.warn(`IX2 event type not configured: ${n}`)});const{ixSession:a}=t.getState();a.eventListeners.length&&function(t){const e=()=>{ut(t)};at.forEach(n=>{window.addEventListener(n,e),t.dispatch((0,p.eventListenerAdded)(window,[n,e]))}),e()}(t)}(t),function(){const{documentElement:t}=document;-1===t.className.indexOf(A)&&(t.className+=` ${A}`)}(),t.getState().ixSession.hasDefinedMediaQueries&&function(t){R({store:t,select:({ixSession:t})=>t.mediaQueryKey,onChange:()=>{it(t),x({store:t,elementApi:h}),rt({store:t,allowEvents:!0}),J()}})}(t)),t.dispatch((0,p.sessionStarted)()),function(t,e){const n=r=>{const{ixSession:i,ixParameters:o}=t.getState();i.active&&(t.dispatch((0,p.animationFrameChanged)(r,o)),e?function(t,e){const n=R({store:t,select:({ixSession:t})=>t.tick,
// @ts-expect-error - TS7006 - Parameter 'tick' implicitly has an 'any' type.
onChange:t=>{e(t),n()}})}(t,n):requestAnimationFrame(n))};n(window.performance.now())}(t,a))}function it(t){const{ixSession:e}=t.getState();if(e.active){const{eventListeners:n}=e;n.forEach(ot),U(),t.dispatch((0,p.sessionStopped)())}}
// @ts-expect-error - TS7031 - Binding element 'target' implicitly has an 'any' type. | TS7031 - Binding element 'listenerParams' implicitly has an 'any' type.
function ot({target:t,listenerParams:e}){
// eslint-disable-next-line prefer-spread
t.removeEventListener.apply(t,e)}const at=["resize","orientationchange"];function ut(t){const{ixSession:e,ixData:n}=t.getState(),r=window.innerWidth;if(r!==e.viewportWidth){const{mediaQueries:e}=n;t.dispatch((0,p.viewportWidthChanged)({width:r,mediaQueries:e}))}}const ct=(t,e)=>(0,a.default)((0,c.default)(t,e),u.default),st=(t,e)=>{(0,s.default)(t,(t,n)=>{
// @ts-expect-error - TS7006 - Parameter 'element' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type.
t.forEach((t,r)=>{e(t,n,n+I+r)})})},lt=t=>{const e={target:t.target,targets:t.targets};return w({config:e,elementApi:h})};function ft({store:t,actionListId:e,eventId:n}){const{ixData:r,ixSession:o}=t.getState(),{actionLists:a,events:u}=r,c=u[n],s=a[e];
// @ts-expect-error - Property 'useFirstGroupAsInitialState' does not exist on type 'ActionListType'.
if(s&&s.useFirstGroupAsInitialState){const a=(0,i.default)(s,"actionItemGroups[0].actionItems",[]),u=(0,i.default)(c,"mediaQueries",r.mediaQueryKeys);
// Bypass initial state render if current media query is not listed in event config
if(!G(u,o.mediaQueryKey))return;a.forEach(r=>{const{config:i,actionTypeId:o}=r,a=// When useEventTarget is explicitly true, use event target/targets to query elements
// However, skip this condition when objectId is defined
// @ts-expect-error - Property 'target' does not exist on type 'never'.
!0===i?.target?.useEventTarget&&// @ts-expect-error - Property 'target' does not exist on type 'never'.
null==i?.target?.objectId?{target:c.target,targets:c.targets}:i,u=w({config:a,event:c,elementApi:h}),s=z(o);u.forEach(i=>{const a=s?H(o)?.(i,r):null;Et({destination:N({element:i,actionItem:r,elementApi:h},// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
a),immediate:!0,store:t,element:i,eventId:n,actionItem:r,actionListId:e,pluginInstance:a})})})}}function dt({store:t}){const{ixInstances:e}=t.getState();(0,s.default)(e,e=>{if(!e.continuous){const{actionListId:n,verbose:r}=e;vt(e,t),r&&t.dispatch((0,p.actionListPlaybackChanged)({actionListId:n,isPlaying:!1}))}})}function pt({store:// @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
t,eventId:// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
e,eventTarget:// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
n,eventStateKey:// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
r,actionListId:// @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
o}){const{ixInstances:a,ixSession:u}=t.getState(),c=u.hasBoundaryNodes&&n?h.getClosestElement(n,b):null;
// Check for element boundary before stopping engine instances
(0,s.default)(a,n=>{const a=(0,i.default)(n,"actionItem.config.target.boundaryMode"),u=!r||n.eventStateKey===r;
// Validate event key if eventStateKey was provided, otherwise default to true
// Remove engine instances that match the required ids
if(n.actionListId===o&&n.eventId===e&&u){
// Avoid removal when root boundary does not contain instance element
if(c&&a&&!h.elementContains(c,n.element))return;vt(n,t),n.verbose&&t.dispatch((0,p.actionListPlaybackChanged)({actionListId:o,isPlaying:!1}))}})}function ht({store:// @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
t,eventId:// @ts-expect-error - TS7031 - Binding element 'eventId' implicitly has an 'any' type.
e,eventTarget:// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
n,eventStateKey:// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
r,actionListId:// @ts-expect-error - TS7031 - Binding element 'actionListId' implicitly has an 'any' type.
o,groupIndex:a=0,immediate:// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
u,verbose:// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
c}){const{ixData:s,ixSession:l}=t.getState(),{events:f}=s,d=f[e]||{},{mediaQueries:p=s.mediaQueryKeys}=d,E=(0,i.default)(s,`actionLists.${o}`,{}),{actionItemGroups:v,useFirstGroupAsInitialState:g}=E;
// Abort playback if no action groups
if(!v||!v.length)return!1;
// Reset to first group when event loop is configured
a>=v.length&&(0,i.default)(d,"config.loop")&&(a=0),
// Skip initial state group during action list playback, as it should already be applied
0===a&&g&&a++;
// Identify first animated group and apply the initial QuickEffect delay
const y=(0===a||1===a&&g)&&_(d.action?.actionTypeId)?d.config.delay:void 0,m=(0,i.default)(v,[a,"actionItems"],[]);if(!m.length)return!1;
// Abort playback if current media query is not listed in event config
if(!G(p,l.mediaQueryKey))return!1;
// Limit affected elements when event target is within a boundary node
const I=l.hasBoundaryNodes&&n?h.getClosestElement(n,b):null,T=P(m);let O=!1;
// @ts-expect-error - TS7006 - Parameter 'actionItem' implicitly has an 'any' type. | TS7006 - Parameter 'actionIndex' implicitly has an 'any' type.
return m.forEach((i,s)=>{const{config:l,actionTypeId:f}=i,p=z(f),{target:E}=l;if(!E)return;const v=E.boundaryMode?I:null;w({config:l,event:d,eventTarget:n,elementRoot:v,elementApi:h}).forEach((l,d)=>{const E=p?H(f)?.(l,i):null,v=p?$(f)(l,i):null;O=!0;const g=T===s&&0===d,m=M({element:l,actionItem:i}),_=N({element:l,actionItem:i,elementApi:h},// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
E);Et({store:t,element:l,actionItem:i,eventId:e,eventTarget:n,eventStateKey:r,actionListId:o,groupIndex:a,isCarrier:g,computedStyle:m,destination:_,immediate:u,verbose:c,pluginInstance:E,pluginDuration:v,instanceDelay:y})})}),O}
// @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type.
function Et(t){const{store:e,computedStyle:n,...r}=t,{element:i,actionItem:o,immediate:a,pluginInstance:u,continuous:c,restingValue:s,eventId:l}=r,d=!c,E=C(),{ixElements:v,ixSession:g,ixData:y}=e.getState(),m=S(v,i),{refState:_}=v[m]||{},I=h.getRefType(i),b=// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ readonly TRANSFORM_MOVE: true; readonly TRANSFORM_SCALE: true; readonly TRANSFORM_ROTATE: true; readonly TRANSFORM_SKEW: true; readonly STYLE_SIZE: true; readonly STYLE_FILTER: true; readonly STYLE_FONT_VARIATION: true; }'.
g.reducedMotion&&f.ReducedMotionTypes[o.actionTypeId];let T;if(b&&c)switch(y.events[l]?.eventTypeId){case f.EventTypeConsts.MOUSE_MOVE:case f.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:T=s;break;default:T=.5}const O=F(i,_,n,o,h,// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
u);e.dispatch((0,p.instanceAdded)({instanceId:E,elementId:m,origin:O,refType:I,skipMotion:b,skipToValue:T,...r})),gt(document.body,"ix2-animation-started",E),a?function(t,e){const{ixParameters:n}=t.getState();t.dispatch((0,p.instanceStarted)(e,0)),t.dispatch((0,p.animationFrameChanged)(performance.now(),n));const{ixInstances:r}=t.getState();yt(r[e],t)}(e,E):(R({store:e,
// @ts-expect-error - TS7031 - Binding element 'ixInstances' implicitly has an 'any' type.
select:({ixInstances:t})=>t[E],onChange:yt}),d&&e.dispatch((0,p.instanceStarted)(E,g.tick)))}function vt(t,e){gt(document.body,"ix2-animation-stopping",{instanceId:t.id,state:e.getState()});const{elementId:n,actionItem:r}=t,{ixElements:i}=e.getState(),{ref:o,refType:a}=i[n]||{};a===T&&V(o,r,h),e.dispatch((0,p.instanceRemoved)(t.id))}function gt(t,e,n){const r=document.createEvent("CustomEvent");r.initCustomEvent(e,!0,!0,n),
// @ts-expect-error - TS18047 - 'element' is possibly 'null'.
t.dispatchEvent(r)}function yt(t,e){const{active:n,continuous:r,complete:i,elementId:o,actionItem:a,actionTypeId:u,renderType:c,current:s,groupIndex:l,eventId:f,eventTarget:d,eventStateKey:E,actionListId:v,isCarrier:g,styleProp:y,verbose:m,pluginInstance:_}=t,{ixData:I,ixSession:b}=e.getState(),{events:A}=I,w=A&&A[f]?A[f]:{},{mediaQueries:S=I.mediaQueryKeys}=w;
// Bypass render if current media query is not listed in event config
if(G(S,b.mediaQueryKey)&&(r||n||i)){if(s||c===O&&i){
// Render current values to ref state and grab latest
e.dispatch((0,p.elementStateChanged)(o,u,s,a));const{ixElements:t}=e.getState(),{ref:n,refType:r,refState:i}=t[o]||{},l=i&&i[u];
// Render HTML and plugin elements
(r===T||z(u))&&L(// @ts-expect-error - ref can be undefined
n,i,l,f,a,y,h,c,_)}if(i){if(g){
// @ts-expect-error - TS2345 - Argument of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; groupIndex: any; verbose: any; }' is not assignable to parameter of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; groupIndex?: number | undefined; immediate: any; verbose: any; }'.
const t=ht({store:e,eventId:f,eventTarget:d,eventStateKey:E,actionListId:v,groupIndex:l+1,verbose:m});m&&!t&&e.dispatch((0,p.actionListPlaybackChanged)({actionListId:v,isPlaying:!1}))}vt(t,e)}}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL2VuZ2luZS9sb2dpYy9JWDJWYW5pbGxhRW5naW5lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuaW1wb3J0IGZpbmQgZnJvbSAnbG9kYXNoL2ZpbmQnO1xuaW1wb3J0IGdldCBmcm9tICdsb2Rhc2gvZ2V0JztcbmltcG9ydCBzaXplIGZyb20gJ2xvZGFzaC9zaXplJztcbmltcG9ydCBvbWl0QnkgZnJvbSAnbG9kYXNoL29taXRCeSc7XG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XG5pbXBvcnQgbWFwVmFsdWVzIGZyb20gJ2xvZGFzaC9tYXBWYWx1ZXMnO1xuaW1wb3J0IGZvckVhY2ggZnJvbSAnbG9kYXNoL2ZvckVhY2gnO1xuaW1wb3J0IHRocm90dGxlIGZyb20gJ2xvZGFzaC90aHJvdHRsZSc7XG5pbXBvcnQge1xuICBFdmVudFR5cGVDb25zdHMsXG4gIEFjdGlvblR5cGVDb25zdHMsXG4gIElYMkVuZ2luZUNvbnN0YW50cyxcbiAgUXVpY2tFZmZlY3RJZHMsXG4gIFJlZHVjZWRNb3Rpb25UeXBlcyxcbn0gZnJvbSAnQHBhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC1jb25zdGFudHMnO1xuXG5jb25zdCBRdWlja0VmZmVjdHNJZExpc3QgPSBPYmplY3Qua2V5cyhRdWlja0VmZmVjdElkcyk7XG5cbmNvbnN0IGlzUXVpY2tFZmZlY3QgPSAoYWN0aW9uVHlwZUlkOiBzdHJpbmcpID0+XG4gIFF1aWNrRWZmZWN0c0lkTGlzdC5pbmNsdWRlcyhhY3Rpb25UeXBlSWQpO1xuXG5pbXBvcnQge0lYMlZhbmlsbGFVdGlscywgSVgyVmFuaWxsYVBsdWdpbnN9IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi9zaGFyZWQnO1xuXG5jb25zdCB7XG4gIENPTE9OX0RFTElNSVRFUixcbiAgQk9VTkRBUllfU0VMRUNUT1IsXG4gIEhUTUxfRUxFTUVOVCxcbiAgUkVOREVSX0dFTkVSQUwsXG4gIFdfTU9EX0lYLFxufSA9IElYMkVuZ2luZUNvbnN0YW50cztcblxuY29uc3Qge1xuICBnZXRBZmZlY3RlZEVsZW1lbnRzLFxuICBnZXRFbGVtZW50SWQsXG4gIGdldERlc3RpbmF0aW9uVmFsdWVzLFxuICBvYnNlcnZlU3RvcmUsXG4gIGdldEluc3RhbmNlSWQsXG4gIHJlbmRlckhUTUxFbGVtZW50LFxuICBjbGVhckFsbFN0eWxlcyxcbiAgZ2V0TWF4RHVyYXRpb25JdGVtSW5kZXgsXG4gIGdldENvbXB1dGVkU3R5bGUsXG4gIGdldEluc3RhbmNlT3JpZ2luLFxuICByZWR1Y2VMaXN0VG9Hcm91cCxcbiAgc2hvdWxkTmFtZXNwYWNlRXZlbnRQYXJhbWV0ZXIsXG4gIGdldE5hbWVzcGFjZWRQYXJhbWV0ZXJJZCxcbiAgc2hvdWxkQWxsb3dNZWRpYVF1ZXJ5LFxuICBjbGVhbnVwSFRNTEVsZW1lbnQsXG4gIGNsZWFyT2JqZWN0Q2FjaGUsXG4gIHN0cmluZ2lmeVRhcmdldCxcbiAgbWVkaWFRdWVyaWVzRXF1YWwsXG4gIHNoYWxsb3dFcXVhbCxcbn0gPSBJWDJWYW5pbGxhVXRpbHM7XG5jb25zdCB7aXNQbHVnaW5UeXBlLCBjcmVhdGVQbHVnaW5JbnN0YW5jZSwgZ2V0UGx1Z2luRHVyYXRpb259ID1cbiAgSVgyVmFuaWxsYVBsdWdpbnM7XG5cbmltcG9ydCB7XG4gIHJhd0RhdGFJbXBvcnRlZCxcbiAgc2Vzc2lvbkluaXRpYWxpemVkLFxuICBzZXNzaW9uU3RhcnRlZCxcbiAgc2Vzc2lvblN0b3BwZWQsXG4gIGV2ZW50TGlzdGVuZXJBZGRlZCxcbiAgZXZlbnRTdGF0ZUNoYW5nZWQsXG4gIGFuaW1hdGlvbkZyYW1lQ2hhbmdlZCxcbiAgaW5zdGFuY2VBZGRlZCxcbiAgaW5zdGFuY2VTdGFydGVkLFxuICBpbnN0YW5jZVJlbW92ZWQsXG4gIGVsZW1lbnRTdGF0ZUNoYW5nZWQsXG4gIGFjdGlvbkxpc3RQbGF5YmFja0NoYW5nZWQsXG4gIHZpZXdwb3J0V2lkdGhDaGFuZ2VkLFxuICBtZWRpYVF1ZXJpZXNEZWZpbmVkLFxuICBJWDJSYXdEYXRhLFxufSBmcm9tICcuLi9hY3Rpb25zL0lYMkVuZ2luZUFjdGlvbnMnO1xuXG5pbXBvcnQgKiBhcyBlbGVtZW50QXBpIGZyb20gJy4vSVgyQnJvd3NlckFwaSc7XG5cbmltcG9ydCBJWDJWYW5pbGxhRXZlbnRzIGZyb20gJy4vSVgyVmFuaWxsYUV2ZW50cyc7XG5pbXBvcnQge1xuICBJWDJFbmdpbmVSZWR1Y2VyU3RhdGVTaGFwZSxcbiAgSVgyRW5naW5lUmVkdWNlclN0b3JlLFxufSBmcm9tICcuLi9yZWR1Y2Vycy9JWDJSZWR1Y2VyJztcbmltcG9ydCB7QWN0aW9uTGlzdElkfSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvdHlwZXMtY29yZSc7XG5cbmNvbnN0IHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbmNvbnN0IElTX01PQklMRV9TQUZBUkkgPSB1YS5tYXRjaCgvaVBhZC9pKSB8fCB1YS5tYXRjaCgvaVBob25lLyk7XG5cbi8vIEtlZXAgdGhyb3R0bGVkIGV2ZW50cyBhdCB+ODBmcHMgdG8gcmVkdWNlIHJlZmxvd3Mgd2hpbGUgbWFpbnRhaW5pbmcgcmVuZGVyIGFjY3VyYWN5XG5jb25zdCBUSFJPVFRMRURfRVZFTlRfV0FJVCA9IDEyO1xuXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZVJlcXVlc3RzKHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmUpIHtcbiAgb2JzZXJ2ZVN0b3JlKHtcbiAgICBzdG9yZSxcbiAgICBzZWxlY3Q6ICh7XG4gICAgICBpeFJlcXVlc3QsXG4gICAgfToge1xuICAgICAgaXhSZXF1ZXN0OiBJWDJFbmdpbmVSZWR1Y2VyU3RhdGVTaGFwZVsnaXhSZXF1ZXN0J107XG4gICAgfSkgPT4gaXhSZXF1ZXN0LnByZXZpZXcsXG4gICAgb25DaGFuZ2U6IGhhbmRsZVByZXZpZXdSZXF1ZXN0LFxuICB9KTtcbiAgb2JzZXJ2ZVN0b3JlKHtcbiAgICBzdG9yZSxcbiAgICBzZWxlY3Q6ICh7XG4gICAgICBpeFJlcXVlc3QsXG4gICAgfToge1xuICAgICAgaXhSZXF1ZXN0OiBJWDJFbmdpbmVSZWR1Y2VyU3RhdGVTaGFwZVsnaXhSZXF1ZXN0J107XG4gICAgfSkgPT4gaXhSZXF1ZXN0LnBsYXliYWNrLFxuICAgIG9uQ2hhbmdlOiBoYW5kbGVQbGF5YmFja1JlcXVlc3QsXG4gIH0pO1xuICBvYnNlcnZlU3RvcmUoe1xuICAgIHN0b3JlLFxuICAgIHNlbGVjdDogKHtcbiAgICAgIGl4UmVxdWVzdCxcbiAgICB9OiB7XG4gICAgICBpeFJlcXVlc3Q6IElYMkVuZ2luZVJlZHVjZXJTdGF0ZVNoYXBlWydpeFJlcXVlc3QnXTtcbiAgICB9KSA9PiBpeFJlcXVlc3Quc3RvcCxcbiAgICBvbkNoYW5nZTogaGFuZGxlU3RvcFJlcXVlc3QsXG4gIH0pO1xuICBvYnNlcnZlU3RvcmUoe1xuICAgIHN0b3JlLFxuICAgIHNlbGVjdDogKHtcbiAgICAgIGl4UmVxdWVzdCxcbiAgICB9OiB7XG4gICAgICBpeFJlcXVlc3Q6IElYMkVuZ2luZVJlZHVjZXJTdGF0ZVNoYXBlWydpeFJlcXVlc3QnXTtcbiAgICB9KSA9PiBpeFJlcXVlc3QuY2xlYXIsXG4gICAgb25DaGFuZ2U6IGhhbmRsZUNsZWFyUmVxdWVzdCxcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9ic2VydmVNZWRpYVF1ZXJ5Q2hhbmdlKHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmUpIHtcbiAgb2JzZXJ2ZVN0b3JlKHtcbiAgICBzdG9yZSxcbiAgICBzZWxlY3Q6ICh7XG4gICAgICBpeFNlc3Npb24sXG4gICAgfToge1xuICAgICAgaXhTZXNzaW9uOiBJWDJFbmdpbmVSZWR1Y2VyU3RhdGVTaGFwZVsnaXhTZXNzaW9uJ107XG4gICAgfSkgPT4gaXhTZXNzaW9uLm1lZGlhUXVlcnlLZXksXG4gICAgb25DaGFuZ2U6ICgpID0+IHtcbiAgICAgIHN0b3BFbmdpbmUoc3RvcmUpO1xuICAgICAgY2xlYXJBbGxTdHlsZXMoe3N0b3JlLCBlbGVtZW50QXBpfSk7XG4gICAgICBzdGFydEVuZ2luZSh7c3RvcmUsIGFsbG93RXZlbnRzOiB0cnVlfSk7XG4gICAgICBkaXNwYXRjaFBhZ2VVcGRhdGVFdmVudCgpO1xuICAgIH0sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBvYnNlcnZlT25lUmVuZGVyVGljayhcbiAgc3RvcmU6IElYMkVuZ2luZVJlZHVjZXJTdG9yZSxcbiAgb25UaWNrOiAobm93OiBhbnkgfCBudW1iZXIpID0+IHZvaWRcbikge1xuICBjb25zdCB1bnN1YnNjcmliZSA9IG9ic2VydmVTdG9yZSh7XG4gICAgc3RvcmUsXG4gICAgc2VsZWN0OiAoe1xuICAgICAgaXhTZXNzaW9uLFxuICAgIH06IHtcbiAgICAgIGl4U2Vzc2lvbjogSVgyRW5naW5lUmVkdWNlclN0YXRlU2hhcGVbJ2l4U2Vzc2lvbiddO1xuICAgIH0pID0+IGl4U2Vzc2lvbi50aWNrLFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ3RpY2snIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gICAgb25DaGFuZ2U6ICh0aWNrKSA9PiB7XG4gICAgICBvblRpY2sodGljayk7XG4gICAgICB1bnN1YnNjcmliZSgpO1xuICAgIH0sXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcmV2aWV3UmVxdWVzdChcbiAge3Jhd0RhdGEsIGRlZmVyfToge3Jhd0RhdGE6IElYMlJhd0RhdGE7IGRlZmVyOiBib29sZWFufSxcbiAgc3RvcmU6IElYMkVuZ2luZVJlZHVjZXJTdG9yZVxuKSB7XG4gIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgIHN0YXJ0RW5naW5lKHtzdG9yZSwgcmF3RGF0YSwgYWxsb3dFdmVudHM6IHRydWV9KTtcbiAgICBkaXNwYXRjaFBhZ2VVcGRhdGVFdmVudCgpO1xuICB9O1xuICBkZWZlciA/IHNldFRpbWVvdXQoc3RhcnQsIDApIDogc3RhcnQoKTtcbn1cblxuZnVuY3Rpb24gZGlzcGF0Y2hQYWdlVXBkYXRlRXZlbnQoKSB7XG4gIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdJWDJfUEFHRV9VUERBVEUnKSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVBsYXliYWNrUmVxdWVzdChwbGF5YmFjazogYW55LCBzdG9yZTogSVgyRW5naW5lUmVkdWNlclN0b3JlKSB7XG4gIGNvbnN0IHtcbiAgICBhY3Rpb25UeXBlSWQsXG4gICAgYWN0aW9uTGlzdElkLFxuICAgIGFjdGlvbkl0ZW1JZCxcbiAgICBldmVudElkLFxuICAgIGFsbG93RXZlbnRzLFxuICAgIGltbWVkaWF0ZSxcbiAgICB0ZXN0TWFudWFsLFxuICAgIHZlcmJvc2UgPSB0cnVlLFxuICB9ID0gcGxheWJhY2s7XG4gIGxldCB7cmF3RGF0YX0gPSBwbGF5YmFjaztcblxuICBpZiAoYWN0aW9uTGlzdElkICYmIGFjdGlvbkl0ZW1JZCAmJiByYXdEYXRhICYmIGltbWVkaWF0ZSkge1xuICAgIGNvbnN0IGFjdGlvbkxpc3QgPSByYXdEYXRhLmFjdGlvbkxpc3RzW2FjdGlvbkxpc3RJZF07XG5cbiAgICBpZiAoYWN0aW9uTGlzdCkge1xuICAgICAgcmF3RGF0YSA9IHJlZHVjZUxpc3RUb0dyb3VwKHtcbiAgICAgICAgYWN0aW9uTGlzdCxcbiAgICAgICAgYWN0aW9uSXRlbUlkLFxuICAgICAgICByYXdEYXRhLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRFbmdpbmUoe3N0b3JlLCByYXdEYXRhLCBhbGxvd0V2ZW50cywgdGVzdE1hbnVhbH0pO1xuXG4gIGlmIChcbiAgICAoYWN0aW9uTGlzdElkICYmIGFjdGlvblR5cGVJZCA9PT0gQWN0aW9uVHlwZUNvbnN0cy5HRU5FUkFMX1NUQVJUX0FDVElPTikgfHxcbiAgICBpc1F1aWNrRWZmZWN0KGFjdGlvblR5cGVJZClcbiAgKSB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjM0NSAtIEFyZ3VtZW50IG9mIHR5cGUgJ3sgc3RvcmU6IGFueTsgYWN0aW9uTGlzdElkOiBhbnk7IH0nIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHBhcmFtZXRlciBvZiB0eXBlICd7IHN0b3JlOiBhbnk7IGV2ZW50SWQ6IGFueTsgZXZlbnRUYXJnZXQ6IGFueTsgZXZlbnRTdGF0ZUtleTogYW55OyBhY3Rpb25MaXN0SWQ6IGFueTsgfScuXG4gICAgc3RvcEFjdGlvbkdyb3VwKHtzdG9yZSwgYWN0aW9uTGlzdElkfSk7XG4gICAgcmVuZGVySW5pdGlhbEdyb3VwKHtzdG9yZSwgYWN0aW9uTGlzdElkLCBldmVudElkfSk7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjM0NSAtIEFyZ3VtZW50IG9mIHR5cGUgJ3sgc3RvcmU6IGFueTsgZXZlbnRJZDogYW55OyBhY3Rpb25MaXN0SWQ6IGFueTsgaW1tZWRpYXRlOiBhbnk7IHZlcmJvc2U6IGFueTsgfScgaXMgbm90IGFzc2lnbmFibGUgdG8gcGFyYW1ldGVyIG9mIHR5cGUgJ3sgc3RvcmU6IGFueTsgZXZlbnRJZDogYW55OyBldmVudFRhcmdldDogYW55OyBldmVudFN0YXRlS2V5OiBhbnk7IGFjdGlvbkxpc3RJZDogYW55OyBncm91cEluZGV4PzogbnVtYmVyIHwgdW5kZWZpbmVkOyBpbW1lZGlhdGU6IGFueTsgdmVyYm9zZTogYW55OyB9Jy5cbiAgICBjb25zdCBzdGFydGVkID0gc3RhcnRBY3Rpb25Hcm91cCh7XG4gICAgICBzdG9yZSxcbiAgICAgIGV2ZW50SWQsXG4gICAgICBhY3Rpb25MaXN0SWQsXG4gICAgICBpbW1lZGlhdGUsXG4gICAgICB2ZXJib3NlLFxuICAgIH0pO1xuICAgIGlmICh2ZXJib3NlICYmIHN0YXJ0ZWQpIHtcbiAgICAgIHN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBhY3Rpb25MaXN0UGxheWJhY2tDaGFuZ2VkKHthY3Rpb25MaXN0SWQsIGlzUGxheWluZzogIWltbWVkaWF0ZX0pXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVTdG9wUmVxdWVzdChcbiAge2FjdGlvbkxpc3RJZH06IHthY3Rpb25MaXN0SWQ6IEFjdGlvbkxpc3RJZH0sXG4gIHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmVcbikge1xuICBpZiAoYWN0aW9uTGlzdElkKSB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjM0NSAtIEFyZ3VtZW50IG9mIHR5cGUgJ3sgc3RvcmU6IGFueTsgYWN0aW9uTGlzdElkOiBhbnk7IH0nIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHBhcmFtZXRlciBvZiB0eXBlICd7IHN0b3JlOiBhbnk7IGV2ZW50SWQ6IGFueTsgZXZlbnRUYXJnZXQ6IGFueTsgZXZlbnRTdGF0ZUtleTogYW55OyBhY3Rpb25MaXN0SWQ6IGFueTsgfScuXG4gICAgc3RvcEFjdGlvbkdyb3VwKHtzdG9yZSwgYWN0aW9uTGlzdElkfSk7XG4gIH0gZWxzZSB7XG4gICAgc3RvcEFsbEFjdGlvbkdyb3Vwcyh7c3RvcmV9KTtcbiAgfVxuICBzdG9wRW5naW5lKHN0b3JlKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2xlYXJSZXF1ZXN0KHN0YXRlOiBhbnksIHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmUpIHtcbiAgc3RvcEVuZ2luZShzdG9yZSk7XG4gIGNsZWFyQWxsU3R5bGVzKHtzdG9yZSwgZWxlbWVudEFwaX0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRFbmdpbmUoe1xuICBzdG9yZSxcbiAgcmF3RGF0YSxcbiAgYWxsb3dFdmVudHMsXG4gIHRlc3RNYW51YWwsXG59OiB7XG4gIHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmU7XG4gIHJhd0RhdGE/OiBJWDJSYXdEYXRhO1xuICB0ZXN0TWFudWFsPzogYm9vbGVhbjtcbiAgYWxsb3dFdmVudHM/OiBib29sZWFuO1xufSkge1xuICBjb25zdCB7aXhTZXNzaW9ufSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIGlmIChyYXdEYXRhKSB7XG4gICAgc3RvcmUuZGlzcGF0Y2gocmF3RGF0YUltcG9ydGVkKHJhd0RhdGEpKTtcbiAgfVxuICBpZiAoIWl4U2Vzc2lvbi5hY3RpdmUpIHtcbiAgICBzdG9yZS5kaXNwYXRjaChcbiAgICAgIHNlc3Npb25Jbml0aWFsaXplZCh7XG4gICAgICAgIGhhc0JvdW5kYXJ5Tm9kZXM6IEJvb2xlYW4oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihCT1VOREFSWV9TRUxFQ1RPUikpLFxuICAgICAgICByZWR1Y2VkTW90aW9uOlxuICAgICAgICAgIGRvY3VtZW50LmJvZHkuaGFzQXR0cmlidXRlKCdkYXRhLXdmLWl4LXZhY2F0aW9uJykgJiZcbiAgICAgICAgICB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtcmVkdWNlZC1tb3Rpb24pJykubWF0Y2hlcyxcbiAgICAgIH0pXG4gICAgKTtcbiAgICBpZiAoYWxsb3dFdmVudHMpIHtcbiAgICAgIGJpbmRFdmVudHMoc3RvcmUpO1xuICAgICAgYWRkRG9jdW1lbnRDbGFzcygpO1xuXG4gICAgICBpZiAoc3RvcmUuZ2V0U3RhdGUoKS5peFNlc3Npb24uaGFzRGVmaW5lZE1lZGlhUXVlcmllcykge1xuICAgICAgICBvYnNlcnZlTWVkaWFRdWVyeUNoYW5nZShzdG9yZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHN0b3JlLmRpc3BhdGNoKHNlc3Npb25TdGFydGVkKCkpO1xuICAgIHN0YXJ0UmVuZGVyTG9vcChzdG9yZSwgdGVzdE1hbnVhbCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkRG9jdW1lbnRDbGFzcygpIHtcbiAgY29uc3Qge2RvY3VtZW50RWxlbWVudH0gPSBkb2N1bWVudDtcbiAgaWYgKGRvY3VtZW50RWxlbWVudC5jbGFzc05hbWUuaW5kZXhPZihXX01PRF9JWCkgPT09IC0xKSB7XG4gICAgZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSArPSBgICR7V19NT0RfSVh9YDtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdGFydFJlbmRlckxvb3Aoc3RvcmU6IElYMkVuZ2luZVJlZHVjZXJTdG9yZSwgdGVzdE1hbnVhbD86IGJvb2xlYW4pIHtcbiAgY29uc3QgaGFuZGxlRnJhbWUgPSAobm93OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB7aXhTZXNzaW9uLCBpeFBhcmFtZXRlcnN9ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICBpZiAoaXhTZXNzaW9uLmFjdGl2ZSkge1xuICAgICAgc3RvcmUuZGlzcGF0Y2goYW5pbWF0aW9uRnJhbWVDaGFuZ2VkKG5vdywgaXhQYXJhbWV0ZXJzKSk7XG4gICAgICBpZiAodGVzdE1hbnVhbCkge1xuICAgICAgICBvYnNlcnZlT25lUmVuZGVyVGljayhzdG9yZSwgaGFuZGxlRnJhbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGhhbmRsZUZyYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGhhbmRsZUZyYW1lKHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9wRW5naW5lKHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmUpIHtcbiAgY29uc3Qge2l4U2Vzc2lvbn0gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBpZiAoaXhTZXNzaW9uLmFjdGl2ZSkge1xuICAgIGNvbnN0IHtldmVudExpc3RlbmVyc30gPSBpeFNlc3Npb247XG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChjbGVhckV2ZW50TGlzdGVuZXIpO1xuICAgIGNsZWFyT2JqZWN0Q2FjaGUoKTtcbiAgICBzdG9yZS5kaXNwYXRjaChzZXNzaW9uU3RvcHBlZCgpKTtcbiAgfVxufVxuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICd0YXJnZXQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdsaXN0ZW5lclBhcmFtcycgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmZ1bmN0aW9uIGNsZWFyRXZlbnRMaXN0ZW5lcih7dGFyZ2V0LCBsaXN0ZW5lclBhcmFtc30pIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1zcHJlYWRcbiAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIuYXBwbHkodGFyZ2V0LCBsaXN0ZW5lclBhcmFtcyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdyb3VwSW5zdGFuY2VzKHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnc3RvcmUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIHN0b3JlLFxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdldmVudFN0YXRlS2V5JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBldmVudFN0YXRlS2V5LFxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdldmVudFRhcmdldCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgZXZlbnRUYXJnZXQsXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2V2ZW50SWQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIGV2ZW50SWQsXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2V2ZW50Q29uZmlnJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBldmVudENvbmZpZyxcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnYWN0aW9uTGlzdElkJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBhY3Rpb25MaXN0SWQsXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ3BhcmFtZXRlckdyb3VwJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBwYXJhbWV0ZXJHcm91cCxcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnc21vb3RoaW5nJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBzbW9vdGhpbmcsXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ3Jlc3RpbmdWYWx1ZScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgcmVzdGluZ1ZhbHVlLFxufSkge1xuICBjb25zdCB7aXhEYXRhLCBpeFNlc3Npb259ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgY29uc3Qge2V2ZW50c30gPSBpeERhdGE7XG4gIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2V2ZW50SWRdO1xuICBjb25zdCB7ZXZlbnRUeXBlSWR9ID0gZXZlbnQ7XG4gIGNvbnN0IHRhcmdldENhY2hlOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG4gIGNvbnN0IGluc3RhbmNlQWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge307XG4gIGNvbnN0IGluc3RhbmNlQ29uZmlnczogQXJyYXk8XG4gICAgfCBhbnlcbiAgICB8IHtcbiAgICAgICAgZWxlbWVudDogSFRNTEVsZW1lbnQgfCBhbnk7XG4gICAgICAgIGtleTogc3RyaW5nO1xuICAgICAgfVxuICA+ID0gW107XG5cbiAgY29uc3Qge2NvbnRpbnVvdXNBY3Rpb25Hcm91cHN9ID0gcGFyYW1ldGVyR3JvdXA7XG4gIGxldCB7aWQ6IHBhcmFtZXRlcklkfSA9IHBhcmFtZXRlckdyb3VwO1xuICBpZiAoc2hvdWxkTmFtZXNwYWNlRXZlbnRQYXJhbWV0ZXIoZXZlbnRUeXBlSWQsIGV2ZW50Q29uZmlnKSkge1xuICAgIHBhcmFtZXRlcklkID0gZ2V0TmFtZXNwYWNlZFBhcmFtZXRlcklkKGV2ZW50U3RhdGVLZXksIHBhcmFtZXRlcklkKTtcbiAgfVxuXG4gIC8vIExpbWl0IGFmZmVjdGVkIGVsZW1lbnRzIHdoZW4gZXZlbnQgdGFyZ2V0IGlzIHdpdGhpbiBhIGJvdW5kYXJ5IG5vZGVcbiAgY29uc3QgZXZlbnRFbGVtZW50Um9vdCA9XG4gICAgaXhTZXNzaW9uLmhhc0JvdW5kYXJ5Tm9kZXMgJiYgZXZlbnRUYXJnZXRcbiAgICAgID8gZWxlbWVudEFwaS5nZXRDbG9zZXN0RWxlbWVudChldmVudFRhcmdldCwgQk9VTkRBUllfU0VMRUNUT1IpXG4gICAgICA6IG51bGw7XG5cbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnYWN0aW9uR3JvdXAnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIGNvbnRpbnVvdXNBY3Rpb25Hcm91cHMuZm9yRWFjaCgoYWN0aW9uR3JvdXApID0+IHtcbiAgICBjb25zdCB7a2V5ZnJhbWUsIGFjdGlvbkl0ZW1zfSA9IGFjdGlvbkdyb3VwO1xuXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnYWN0aW9uSXRlbScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICBhY3Rpb25JdGVtcy5mb3JFYWNoKChhY3Rpb25JdGVtKSA9PiB7XG4gICAgICBjb25zdCB7YWN0aW9uVHlwZUlkfSA9IGFjdGlvbkl0ZW07XG4gICAgICBjb25zdCB7dGFyZ2V0fSA9IGFjdGlvbkl0ZW0uY29uZmlnO1xuICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZWxlbWVudFJvb3QgPSB0YXJnZXQuYm91bmRhcnlNb2RlID8gZXZlbnRFbGVtZW50Um9vdCA6IG51bGw7XG5cbiAgICAgIGNvbnN0IGtleSA9IHN0cmluZ2lmeVRhcmdldCh0YXJnZXQpICsgQ09MT05fREVMSU1JVEVSICsgYWN0aW9uVHlwZUlkO1xuICAgICAgaW5zdGFuY2VBY3Rpb25Hcm91cHNba2V5XSA9IGFwcGVuZEFjdGlvbkl0ZW0oXG4gICAgICAgIGluc3RhbmNlQWN0aW9uR3JvdXBzW2tleV0sXG4gICAgICAgIGtleWZyYW1lLFxuICAgICAgICBhY3Rpb25JdGVtXG4gICAgICApO1xuXG4gICAgICBpZiAoIXRhcmdldENhY2hlW2tleV0pIHtcbiAgICAgICAgdGFyZ2V0Q2FjaGVba2V5XSA9IHRydWU7XG4gICAgICAgIGNvbnN0IHtjb25maWd9ID0gYWN0aW9uSXRlbTtcbiAgICAgICAgZ2V0QWZmZWN0ZWRFbGVtZW50cyh7XG4gICAgICAgICAgY29uZmlnLFxuICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgIGV2ZW50VGFyZ2V0LFxuICAgICAgICAgIGVsZW1lbnRSb290LFxuICAgICAgICAgIGVsZW1lbnRBcGksXG4gICAgICAgIH0pLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBpbnN0YW5jZUNvbmZpZ3MucHVzaCh7ZWxlbWVudCwga2V5fSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBpbnN0YW5jZUNvbmZpZ3MuZm9yRWFjaCgoe2VsZW1lbnQsIGtleX0pID0+IHtcbiAgICBjb25zdCBhY3Rpb25Hcm91cHMgPSBpbnN0YW5jZUFjdGlvbkdyb3Vwc1trZXldO1xuICAgIGNvbnN0IGFjdGlvbkl0ZW0gPSBnZXQoYWN0aW9uR3JvdXBzLCBgWzBdLmFjdGlvbkl0ZW1zWzBdYCwge30pO1xuICAgIGNvbnN0IHthY3Rpb25UeXBlSWR9ID0gYWN0aW9uSXRlbTtcbiAgICBjb25zdCBzaG91bGRVc2VQbHVnaW4gPVxuICAgICAgLy8gSWYgaXQncyB0YXJnZXRlZCBieSBjbGFzcywgZG9uJ3QgcXVlcnkgdGhlIGVsZW1lbnQgYnkgcGx1Z2luRWxlbWVudElkXG4gICAgICBhY3Rpb25UeXBlSWQgPT09IEFjdGlvblR5cGVDb25zdHMuUExVR0lOX1JJVkVcbiAgICAgICAgPyAoYWN0aW9uSXRlbS5jb25maWc/LnRhcmdldD8uc2VsZWN0b3JHdWlkcyB8fCBbXSkubGVuZ3RoID09PSAwXG4gICAgICAgIDogaXNQbHVnaW5UeXBlKGFjdGlvblR5cGVJZCk7XG5cbiAgICBjb25zdCBwbHVnaW5JbnN0YW5jZSA9IHNob3VsZFVzZVBsdWdpblxuICAgICAgPyBjcmVhdGVQbHVnaW5JbnN0YW5jZShhY3Rpb25UeXBlSWQpPy4oZWxlbWVudCwgYWN0aW9uSXRlbSlcbiAgICAgIDogbnVsbDtcbiAgICBjb25zdCBkZXN0aW5hdGlvbiA9IGdldERlc3RpbmF0aW9uVmFsdWVzKFxuICAgICAge2VsZW1lbnQsIGFjdGlvbkl0ZW0sIGVsZW1lbnRBcGl9LFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgcGx1Z2luSW5zdGFuY2VcbiAgICApO1xuICAgIGNyZWF0ZUluc3RhbmNlKHtcbiAgICAgIHN0b3JlLFxuICAgICAgZWxlbWVudCxcbiAgICAgIGV2ZW50SWQsXG4gICAgICBhY3Rpb25MaXN0SWQsXG4gICAgICBhY3Rpb25JdGVtLFxuICAgICAgZGVzdGluYXRpb24sXG4gICAgICBjb250aW51b3VzOiB0cnVlLFxuICAgICAgcGFyYW1ldGVySWQsXG4gICAgICBhY3Rpb25Hcm91cHMsXG4gICAgICBzbW9vdGhpbmcsXG4gICAgICByZXN0aW5nVmFsdWUsXG4gICAgICBwbHVnaW5JbnN0YW5jZSxcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEFjdGlvbkl0ZW0oYWN0aW9uR3JvdXBzID0gW10sIGtleWZyYW1lOiBhbnksIGFjdGlvbkl0ZW06IGFueSkge1xuICBjb25zdCBuZXdBY3Rpb25Hcm91cHMgPSBbLi4uYWN0aW9uR3JvdXBzXTtcbiAgbGV0IGdyb3VwSW5kZXg7XG4gIG5ld0FjdGlvbkdyb3Vwcy5zb21lKChncm91cCwgaW5kZXgpID0+IHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzM5IC0gUHJvcGVydHkgJ2tleWZyYW1lJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICduZXZlcicuXG4gICAgaWYgKGdyb3VwLmtleWZyYW1lID09PSBrZXlmcmFtZSkge1xuICAgICAgZ3JvdXBJbmRleCA9IGluZGV4O1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG4gIGlmIChncm91cEluZGV4ID09IG51bGwpIHtcbiAgICBncm91cEluZGV4ID0gbmV3QWN0aW9uR3JvdXBzLmxlbmd0aDtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzQ1IC0gQXJndW1lbnQgb2YgdHlwZSAneyBrZXlmcmFtZTogYW55OyBhY3Rpb25JdGVtczogbmV2ZXJbXTsgfScgaXMgbm90IGFzc2lnbmFibGUgdG8gcGFyYW1ldGVyIG9mIHR5cGUgJ25ldmVyJy5cbiAgICBuZXdBY3Rpb25Hcm91cHMucHVzaCh7XG4gICAgICBrZXlmcmFtZSxcbiAgICAgIGFjdGlvbkl0ZW1zOiBbXSxcbiAgICB9KTtcbiAgfVxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzM5IC0gUHJvcGVydHkgJ2FjdGlvbkl0ZW1zJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICduZXZlcicuXG4gIG5ld0FjdGlvbkdyb3Vwc1tncm91cEluZGV4XS5hY3Rpb25JdGVtcy5wdXNoKGFjdGlvbkl0ZW0pO1xuICByZXR1cm4gbmV3QWN0aW9uR3JvdXBzO1xufVxuXG5mdW5jdGlvbiBiaW5kRXZlbnRzKHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmUpIHtcbiAgY29uc3Qge2l4RGF0YX0gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBjb25zdCB7ZXZlbnRUeXBlTWFwfSA9IGl4RGF0YTtcblxuICB1cGRhdGVWaWV3cG9ydFdpZHRoKHN0b3JlKTtcblxuICBmb3JFYWNoKGV2ZW50VHlwZU1hcCwgKGV2ZW50cywga2V5KSA9PiB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzA1MyAtIEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlc3Npb24gb2YgdHlwZSAnc3RyaW5nJyBjYW4ndCBiZSB1c2VkIHRvIGluZGV4IHR5cGUgJ3sgU0xJREVSX0FDVElWRTogeyBoYW5kbGVyOiAob3B0aW9uczogYW55LCBzdGF0ZTogYW55KSA9PiBhbnk7IHR5cGVzOiBzdHJpbmc7IH07IFNMSURFUl9JTkFDVElWRTogeyBoYW5kbGVyOiAob3B0aW9uczogYW55LCBzdGF0ZTogYW55KSA9PiBhbnk7IHR5cGVzOiBzdHJpbmc7IH07IERST1BET1dOX09QRU46IHsgaGFuZGxlcjogKG9wdGlvbnM6IGFueSwgc3RhdGU6IGFueSkgPT4gYW55OyB0eXBlczogc3RyaW5nOyB9OyAuLi4gMjEgbW9yZSAuLi47IFBBR0VfU1RBUlQ6IHsgLi4uOyB9OyB9Jy5cbiAgICBjb25zdCBsb2dpYyA9IElYMlZhbmlsbGFFdmVudHNba2V5XTtcbiAgICBpZiAoIWxvZ2ljKSB7XG4gICAgICBjb25zb2xlLndhcm4oYElYMiBldmVudCB0eXBlIG5vdCBjb25maWd1cmVkOiAke2tleX1gKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYmluZEV2ZW50VHlwZSh7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdsb2dpYycgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICAgIGxvZ2ljLFxuICAgICAgc3RvcmUsXG4gICAgICBldmVudHMsXG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHtpeFNlc3Npb259ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgaWYgKGl4U2Vzc2lvbi5ldmVudExpc3RlbmVycy5sZW5ndGgpIHtcbiAgICBiaW5kUmVzaXplRXZlbnRzKHN0b3JlKTtcbiAgfVxufVxuXG5jb25zdCBXSU5ET1dfUkVTSVpFX0VWRU5UUyA9IFsncmVzaXplJywgJ29yaWVudGF0aW9uY2hhbmdlJ107XG5cbmZ1bmN0aW9uIGJpbmRSZXNpemVFdmVudHMoc3RvcmU6IElYMkVuZ2luZVJlZHVjZXJTdG9yZSkge1xuICBjb25zdCBoYW5kbGVSZXNpemUgPSAoKSA9PiB7XG4gICAgdXBkYXRlVmlld3BvcnRXaWR0aChzdG9yZSk7XG4gIH07XG4gIFdJTkRPV19SRVNJWkVfRVZFTlRTLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBoYW5kbGVSZXNpemUpO1xuICAgIHN0b3JlLmRpc3BhdGNoKGV2ZW50TGlzdGVuZXJBZGRlZCh3aW5kb3csIFt0eXBlLCBoYW5kbGVSZXNpemVdKSk7XG4gIH0pO1xuICBoYW5kbGVSZXNpemUoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVmlld3BvcnRXaWR0aChzdG9yZTogSVgyRW5naW5lUmVkdWNlclN0b3JlKSB7XG4gIGNvbnN0IHtpeFNlc3Npb24sIGl4RGF0YX0gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBjb25zdCB3aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICBpZiAod2lkdGggIT09IGl4U2Vzc2lvbi52aWV3cG9ydFdpZHRoKSB7XG4gICAgY29uc3Qge21lZGlhUXVlcmllc30gPSBpeERhdGE7XG4gICAgc3RvcmUuZGlzcGF0Y2godmlld3BvcnRXaWR0aENoYW5nZWQoe3dpZHRoLCBtZWRpYVF1ZXJpZXN9KSk7XG4gIH1cbn1cblxuY29uc3QgbWFwRm91bmRWYWx1ZXMgPSAoXG4gIG9iamVjdDogYW55LFxuICBpdGVyYXRlZTogKGV2ZW50PzogYW55KSA9PiBBcnJheTxIVE1MRWxlbWVudCB8IGFueT5cbikgPT4gb21pdEJ5KG1hcFZhbHVlcyhvYmplY3QsIGl0ZXJhdGVlKSwgaXNFbXB0eSk7XG5cbmNvbnN0IGZvckVhY2hFdmVudFRhcmdldCA9IChcbiAgZXZlbnRUYXJnZXRzOiBhbnksXG4gIGV2ZW50Q2FsbGJhY2s6IChlbGVtZW50OiBhbnksIGV2ZW50SWQ6IGFueSwgZXZlbnRTdGF0ZUtleTogc3RyaW5nKSA9PiB2b2lkXG4pID0+IHtcbiAgZm9yRWFjaChldmVudFRhcmdldHMsIChlbGVtZW50cywgZXZlbnRJZCkgPT4ge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2VsZW1lbnQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDA2IC0gUGFyYW1ldGVyICdpbmRleCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZXZlbnRTdGF0ZUtleSA9IGV2ZW50SWQgKyBDT0xPTl9ERUxJTUlURVIgKyBpbmRleDtcbiAgICAgIGV2ZW50Q2FsbGJhY2soZWxlbWVudCwgZXZlbnRJZCwgZXZlbnRTdGF0ZUtleSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3QgZ2V0QWZmZWN0ZWRGb3JFdmVudCA9IChldmVudDogYW55KSA9PiB7XG4gIGNvbnN0IGNvbmZpZyA9IHt0YXJnZXQ6IGV2ZW50LnRhcmdldCwgdGFyZ2V0czogZXZlbnQudGFyZ2V0c30gYXMgY29uc3Q7XG4gIHJldHVybiBnZXRBZmZlY3RlZEVsZW1lbnRzKHtjb25maWcsIGVsZW1lbnRBcGl9KTtcbn07XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2xvZ2ljJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnc3RvcmUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdldmVudHMnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5mdW5jdGlvbiBiaW5kRXZlbnRUeXBlKHtsb2dpYywgc3RvcmUsIGV2ZW50c306IHtzdG9yZTogSVgyRW5naW5lUmVkdWNlclN0b3JlfSkge1xuICBpbmplY3RCZWhhdmlvckNTU0ZpeGVzKGV2ZW50cyk7XG4gIGNvbnN0IHt0eXBlczogZXZlbnRUeXBlcywgaGFuZGxlcjogZXZlbnRIYW5kbGVyfSA9IGxvZ2ljO1xuICBjb25zdCB7aXhEYXRhfSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIGNvbnN0IHthY3Rpb25MaXN0c30gPSBpeERhdGE7XG4gIGNvbnN0IGV2ZW50VGFyZ2V0cyA9IG1hcEZvdW5kVmFsdWVzKGV2ZW50cywgZ2V0QWZmZWN0ZWRGb3JFdmVudCk7XG5cbiAgaWYgKCFzaXplKGV2ZW50VGFyZ2V0cykpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb3JFYWNoKGV2ZW50VGFyZ2V0cywgKGVsZW1lbnRzLCBrZXkpID0+IHtcbiAgICBjb25zdCBldmVudCA9IGV2ZW50c1trZXldO1xuICAgIGNvbnN0IHtcbiAgICAgIGFjdGlvbjogZXZlbnRBY3Rpb24sXG4gICAgICBpZDogZXZlbnRJZCxcbiAgICAgIG1lZGlhUXVlcmllcyA9IGl4RGF0YS5tZWRpYVF1ZXJ5S2V5cyxcbiAgICB9ID0gZXZlbnQ7XG4gICAgY29uc3Qge2FjdGlvbkxpc3RJZH0gPSBldmVudEFjdGlvbi5jb25maWc7XG5cbiAgICBpZiAoIW1lZGlhUXVlcmllc0VxdWFsKG1lZGlhUXVlcmllcywgaXhEYXRhLm1lZGlhUXVlcnlLZXlzKSkge1xuICAgICAgc3RvcmUuZGlzcGF0Y2gobWVkaWFRdWVyaWVzRGVmaW5lZCgpKTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBldmVudEFjdGlvbi5hY3Rpb25UeXBlSWQgPT09IEFjdGlvblR5cGVDb25zdHMuR0VORVJBTF9DT05USU5VT1VTX0FDVElPTlxuICAgICkge1xuICAgICAgY29uc3QgY29uZmlncyA9IEFycmF5LmlzQXJyYXkoZXZlbnQuY29uZmlnKVxuICAgICAgICA/IGV2ZW50LmNvbmZpZ1xuICAgICAgICA6IFtldmVudC5jb25maWddO1xuXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICdldmVudENvbmZpZycgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICAgIGNvbmZpZ3MuZm9yRWFjaCgoZXZlbnRDb25maWcpID0+IHtcbiAgICAgICAgY29uc3Qge2NvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cElkfSA9IGV2ZW50Q29uZmlnO1xuICAgICAgICBjb25zdCBwYXJhbUdyb3VwcyA9IGdldChcbiAgICAgICAgICBhY3Rpb25MaXN0cyxcbiAgICAgICAgICBgJHthY3Rpb25MaXN0SWR9LmNvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cHNgLFxuICAgICAgICAgIFtdXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHBhcmFtZXRlckdyb3VwID0gZmluZChcbiAgICAgICAgICBwYXJhbUdyb3VwcyxcbiAgICAgICAgICAoe2lkfSkgPT4gaWQgPT09IGNvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cElkXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHNtb290aGluZyA9IChldmVudENvbmZpZy5zbW9vdGhpbmcgfHwgMCkgLyAxMDA7XG4gICAgICAgIGNvbnN0IHJlc3RpbmdWYWx1ZSA9IChldmVudENvbmZpZy5yZXN0aW5nU3RhdGUgfHwgMCkgLyAxMDA7XG5cbiAgICAgICAgaWYgKCFwYXJhbWV0ZXJHcm91cCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGV2ZW50VGFyZ2V0LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGV2ZW50U3RhdGVLZXkgPSBldmVudElkICsgQ09MT05fREVMSU1JVEVSICsgaW5kZXg7XG4gICAgICAgICAgY3JlYXRlR3JvdXBJbnN0YW5jZXMoe1xuICAgICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgICBldmVudFN0YXRlS2V5LFxuICAgICAgICAgICAgZXZlbnRUYXJnZXQsXG4gICAgICAgICAgICBldmVudElkLFxuICAgICAgICAgICAgZXZlbnRDb25maWcsXG4gICAgICAgICAgICBhY3Rpb25MaXN0SWQsXG4gICAgICAgICAgICBwYXJhbWV0ZXJHcm91cCxcbiAgICAgICAgICAgIHNtb290aGluZyxcbiAgICAgICAgICAgIHJlc3RpbmdWYWx1ZSxcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoXG4gICAgICBldmVudEFjdGlvbi5hY3Rpb25UeXBlSWQgPT09IEFjdGlvblR5cGVDb25zdHMuR0VORVJBTF9TVEFSVF9BQ1RJT04gfHxcbiAgICAgIGlzUXVpY2tFZmZlY3QoZXZlbnRBY3Rpb24uYWN0aW9uVHlwZUlkKVxuICAgICkge1xuICAgICAgcmVuZGVySW5pdGlhbEdyb3VwKHtzdG9yZSwgYWN0aW9uTGlzdElkLCBldmVudElkfSk7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBoYW5kbGVFdmVudCA9IChuYXRpdmVFdmVudDogYW55KSA9PiB7XG4gICAgY29uc3Qge2l4U2Vzc2lvbn0gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICAgIGZvckVhY2hFdmVudFRhcmdldChldmVudFRhcmdldHMsIChlbGVtZW50LCBldmVudElkLCBldmVudFN0YXRlS2V5KSA9PiB7XG4gICAgICBjb25zdCBldmVudCA9IGV2ZW50c1tldmVudElkXTtcbiAgICAgIGNvbnN0IG9sZFN0YXRlID0gaXhTZXNzaW9uLmV2ZW50U3RhdGVbZXZlbnRTdGF0ZUtleV07XG4gICAgICBjb25zdCB7YWN0aW9uOiBldmVudEFjdGlvbiwgbWVkaWFRdWVyaWVzID0gaXhEYXRhLm1lZGlhUXVlcnlLZXlzfSA9IGV2ZW50O1xuICAgICAgLy8gQnlwYXNzIGV2ZW50IGhhbmRsZXIgaWYgY3VycmVudCBtZWRpYSBxdWVyeSBpcyBub3QgbGlzdGVkIGluIGV2ZW50IGNvbmZpZ1xuICAgICAgaWYgKCFzaG91bGRBbGxvd01lZGlhUXVlcnkobWVkaWFRdWVyaWVzLCBpeFNlc3Npb24ubWVkaWFRdWVyeUtleSkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgaGFuZGxlRXZlbnRXaXRoQ29uZmlnID0gKGV2ZW50Q29uZmlnID0ge30pID0+IHtcbiAgICAgICAgY29uc3QgbmV3U3RhdGUgPSBldmVudEhhbmRsZXIoXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RvcmUsXG4gICAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBldmVudENvbmZpZyxcbiAgICAgICAgICAgIG5hdGl2ZUV2ZW50LFxuICAgICAgICAgICAgZXZlbnRTdGF0ZUtleSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9sZFN0YXRlXG4gICAgICAgICk7XG4gICAgICAgIGlmICghc2hhbGxvd0VxdWFsKG5ld1N0YXRlLCBvbGRTdGF0ZSkpIHtcbiAgICAgICAgICBzdG9yZS5kaXNwYXRjaChldmVudFN0YXRlQ2hhbmdlZChldmVudFN0YXRlS2V5LCBuZXdTdGF0ZSkpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgaWYgKFxuICAgICAgICBldmVudEFjdGlvbi5hY3Rpb25UeXBlSWQgPT09IEFjdGlvblR5cGVDb25zdHMuR0VORVJBTF9DT05USU5VT1VTX0FDVElPTlxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGNvbmZpZ3MgPSBBcnJheS5pc0FycmF5KGV2ZW50LmNvbmZpZylcbiAgICAgICAgICA/IGV2ZW50LmNvbmZpZ1xuICAgICAgICAgIDogW2V2ZW50LmNvbmZpZ107XG4gICAgICAgIGNvbmZpZ3MuZm9yRWFjaChoYW5kbGVFdmVudFdpdGhDb25maWcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGFuZGxlRXZlbnRXaXRoQ29uZmlnKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRXZlbnRUaHJvdHRsZWQgPSB0aHJvdHRsZShoYW5kbGVFdmVudCwgVEhST1RUTEVEX0VWRU5UX1dBSVQpO1xuXG4gIGNvbnN0IGFkZExpc3RlbmVycyA9ICh7XG4gICAgdGFyZ2V0ID0gZG9jdW1lbnQsXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAndHlwZXMnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gICAgdHlwZXMsXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnc2hvdWxkVGhyb3R0bGUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gICAgdGhyb3R0bGU6IHNob3VsZFRocm90dGxlLFxuICB9KSA9PiB7XG4gICAgdHlwZXNcbiAgICAgIC5zcGxpdCgnICcpXG4gICAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICd0eXBlJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICAgICAgLmZvckVhY2goKHR5cGUpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlckZ1bmMgPSBzaG91bGRUaHJvdHRsZSA/IGhhbmRsZUV2ZW50VGhyb3R0bGVkIDogaGFuZGxlRXZlbnQ7XG4gICAgICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKHR5cGUsIGhhbmRsZXJGdW5jKTtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goZXZlbnRMaXN0ZW5lckFkZGVkKHRhcmdldCwgW3R5cGUsIGhhbmRsZXJGdW5jXSkpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoZXZlbnRUeXBlcykpIHtcbiAgICBldmVudFR5cGVzLmZvckVhY2goYWRkTGlzdGVuZXJzKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgZXZlbnRUeXBlcyA9PT0gJ3N0cmluZycpIHtcbiAgICBhZGRMaXN0ZW5lcnMobG9naWMpO1xuICB9XG59XG5cbi8qKlxuICogSW5qZWN0cyBDU1MgaW50byB0aGUgZG9jdW1lbnQgdG8gZml4IGJlaGF2aW9yIGlzc3VlcyBhY3Jvc3NcbiAqIGRpZmZlcmVudCBkZXZpY2VzLlxuICovXG5cbmZ1bmN0aW9uIGluamVjdEJlaGF2aW9yQ1NTRml4ZXMoZXZlbnRzOiBhbnkpIHtcbiAgaWYgKCFJU19NT0JJTEVfU0FGQVJJKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaW5qZWN0ZWRTZWxlY3RvcnM6IFJlY29yZDxzdHJpbmcsIGFueT4gPSB7fTtcblxuICBsZXQgY3NzVGV4dCA9ICcnO1xuICBmb3IgKGNvbnN0IGV2ZW50SWQgaW4gZXZlbnRzKSB7XG4gICAgY29uc3Qge2V2ZW50VHlwZUlkLCB0YXJnZXR9ID0gZXZlbnRzW2V2ZW50SWRdO1xuXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBlbGVtZW50QXBpLmdldFF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyNTM4IC0gVHlwZSAnbnVsbCcgY2Fubm90IGJlIHVzZWQgYXMgYW4gaW5kZXggdHlwZS5cbiAgICBpZiAoaW5qZWN0ZWRTZWxlY3RvcnNbc2VsZWN0b3JdKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBhZGQgYSBcImN1cnNvcjogcG9pbnRlclwiIHN0eWxlIHJ1bGUgdG8gZW5zdXJlIHRoYXQgQ0xJQ0sgZXZlbnRzIGdldCBmaXJlZCBmb3IgSU9TIGRldmljZXNcbiAgICBpZiAoXG4gICAgICBldmVudFR5cGVJZCA9PT0gRXZlbnRUeXBlQ29uc3RzLk1PVVNFX0NMSUNLIHx8XG4gICAgICBldmVudFR5cGVJZCA9PT0gRXZlbnRUeXBlQ29uc3RzLk1PVVNFX1NFQ09ORF9DTElDS1xuICAgICkge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjUzOCAtIFR5cGUgJ251bGwnIGNhbm5vdCBiZSB1c2VkIGFzIGFuIGluZGV4IHR5cGUuXG4gICAgICBpbmplY3RlZFNlbGVjdG9yc1tzZWxlY3Rvcl0gPSB0cnVlO1xuICAgICAgY3NzVGV4dCArPVxuICAgICAgICBzZWxlY3RvciArXG4gICAgICAgICd7JyArXG4gICAgICAgICdjdXJzb3I6IHBvaW50ZXI7JyArXG4gICAgICAgICd0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjsnICtcbiAgICAgICAgJ30nO1xuICAgIH1cbiAgfVxuXG4gIGlmIChjc3NUZXh0KSB7XG4gICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLnRleHRDb250ZW50ID0gY3NzVGV4dDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJJbml0aWFsR3JvdXAoe1xuICBzdG9yZSxcbiAgYWN0aW9uTGlzdElkLFxuICBldmVudElkLFxufToge1xuICBzdG9yZTogSVgyRW5naW5lUmVkdWNlclN0b3JlO1xuICBhY3Rpb25MaXN0SWQ6IG51bWJlcjtcbiAgZXZlbnRJZDogbnVtYmVyO1xufSkge1xuICBjb25zdCB7aXhEYXRhLCBpeFNlc3Npb259ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgY29uc3Qge2FjdGlvbkxpc3RzLCBldmVudHN9ID0gaXhEYXRhO1xuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMxODA0OCAtICdldmVudHMnIGlzIHBvc3NpYmx5ICd1bmRlZmluZWQnLlxuICBjb25zdCBldmVudCA9IGV2ZW50c1tldmVudElkXTtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMTgwNDggLSAnYWN0aW9uTGlzdHMnIGlzIHBvc3NpYmx5ICd1bmRlZmluZWQnLlxuICBjb25zdCBhY3Rpb25MaXN0ID0gYWN0aW9uTGlzdHNbYWN0aW9uTGlzdElkXTtcblxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gUHJvcGVydHkgJ3VzZUZpcnN0R3JvdXBBc0luaXRpYWxTdGF0ZScgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAnQWN0aW9uTGlzdFR5cGUnLlxuICBpZiAoYWN0aW9uTGlzdCAmJiBhY3Rpb25MaXN0LnVzZUZpcnN0R3JvdXBBc0luaXRpYWxTdGF0ZSkge1xuICAgIGNvbnN0IGluaXRpYWxTdGF0ZUl0ZW1zID0gZ2V0KFxuICAgICAgYWN0aW9uTGlzdCxcbiAgICAgICdhY3Rpb25JdGVtR3JvdXBzWzBdLmFjdGlvbkl0ZW1zJyxcbiAgICAgIFtdXG4gICAgKTtcblxuICAgIC8vIEJ5cGFzcyBpbml0aWFsIHN0YXRlIHJlbmRlciBpZiBjdXJyZW50IG1lZGlhIHF1ZXJ5IGlzIG5vdCBsaXN0ZWQgaW4gZXZlbnQgY29uZmlnXG4gICAgY29uc3QgbWVkaWFRdWVyaWVzID0gZ2V0KGV2ZW50LCAnbWVkaWFRdWVyaWVzJywgaXhEYXRhLm1lZGlhUXVlcnlLZXlzKTtcbiAgICBpZiAoIXNob3VsZEFsbG93TWVkaWFRdWVyeShtZWRpYVF1ZXJpZXMsIGl4U2Vzc2lvbi5tZWRpYVF1ZXJ5S2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGluaXRpYWxTdGF0ZUl0ZW1zLmZvckVhY2goKGFjdGlvbkl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHtjb25maWc6IGl0ZW1Db25maWcsIGFjdGlvblR5cGVJZH0gPSBhY3Rpb25JdGVtO1xuICAgICAgY29uc3QgY29uZmlnID1cbiAgICAgICAgLy8gV2hlbiB1c2VFdmVudFRhcmdldCBpcyBleHBsaWNpdGx5IHRydWUsIHVzZSBldmVudCB0YXJnZXQvdGFyZ2V0cyB0byBxdWVyeSBlbGVtZW50c1xuICAgICAgICAvLyBIb3dldmVyLCBza2lwIHRoaXMgY29uZGl0aW9uIHdoZW4gb2JqZWN0SWQgaXMgZGVmaW5lZFxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gUHJvcGVydHkgJ3RhcmdldCcgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSAnbmV2ZXInLlxuICAgICAgICBpdGVtQ29uZmlnPy50YXJnZXQ/LnVzZUV2ZW50VGFyZ2V0ID09PSB0cnVlICYmXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBQcm9wZXJ0eSAndGFyZ2V0JyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICduZXZlcicuXG4gICAgICAgIGl0ZW1Db25maWc/LnRhcmdldD8ub2JqZWN0SWQgPT0gbnVsbFxuICAgICAgICAgID8gLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMTgwNDggLSAnZXZlbnQnIGlzIHBvc3NpYmx5ICd1bmRlZmluZWQnLlxuICAgICAgICAgICAge3RhcmdldDogZXZlbnQudGFyZ2V0LCB0YXJnZXRzOiBldmVudC50YXJnZXRzfVxuICAgICAgICAgIDogaXRlbUNvbmZpZztcbiAgICAgIGNvbnN0IGl0ZW1FbGVtZW50cyA9IGdldEFmZmVjdGVkRWxlbWVudHMoe2NvbmZpZywgZXZlbnQsIGVsZW1lbnRBcGl9KTtcbiAgICAgIGNvbnN0IHNob3VsZFVzZVBsdWdpbiA9IGlzUGx1Z2luVHlwZShhY3Rpb25UeXBlSWQpO1xuXG4gICAgICBpdGVtRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBwbHVnaW5JbnN0YW5jZSA9IHNob3VsZFVzZVBsdWdpblxuICAgICAgICAgID8gY3JlYXRlUGx1Z2luSW5zdGFuY2UoYWN0aW9uVHlwZUlkKT8uKGVsZW1lbnQsIGFjdGlvbkl0ZW0pXG4gICAgICAgICAgOiBudWxsO1xuICAgICAgICBjcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgICAgZGVzdGluYXRpb246IGdldERlc3RpbmF0aW9uVmFsdWVzKFxuICAgICAgICAgICAge2VsZW1lbnQsIGFjdGlvbkl0ZW0sIGVsZW1lbnRBcGl9LFxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAgICAgcGx1Z2luSW5zdGFuY2VcbiAgICAgICAgICApLFxuICAgICAgICAgIGltbWVkaWF0ZTogdHJ1ZSxcbiAgICAgICAgICBzdG9yZSxcbiAgICAgICAgICBlbGVtZW50LFxuICAgICAgICAgIGV2ZW50SWQsXG4gICAgICAgICAgYWN0aW9uSXRlbSxcbiAgICAgICAgICBhY3Rpb25MaXN0SWQsXG4gICAgICAgICAgcGx1Z2luSW5zdGFuY2UsXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3BBbGxBY3Rpb25Hcm91cHMoe3N0b3JlfToge3N0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmV9KSB7XG4gIGNvbnN0IHtpeEluc3RhbmNlc30gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBmb3JFYWNoKGl4SW5zdGFuY2VzLCAoaW5zdGFuY2UpID0+IHtcbiAgICBpZiAoIWluc3RhbmNlLmNvbnRpbnVvdXMpIHtcbiAgICAgIGNvbnN0IHthY3Rpb25MaXN0SWQsIHZlcmJvc2V9ID0gaW5zdGFuY2U7XG4gICAgICByZW1vdmVJbnN0YW5jZShpbnN0YW5jZSwgc3RvcmUpO1xuICAgICAgaWYgKHZlcmJvc2UpIHtcbiAgICAgICAgc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgYWN0aW9uTGlzdFBsYXliYWNrQ2hhbmdlZCh7YWN0aW9uTGlzdElkLCBpc1BsYXlpbmc6IGZhbHNlfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RvcEFjdGlvbkdyb3VwKHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnc3RvcmUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIHN0b3JlLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgZXZlbnRJZCxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gIGV2ZW50VGFyZ2V0LFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgZXZlbnRTdGF0ZUtleSxcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnYWN0aW9uTGlzdElkJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBhY3Rpb25MaXN0SWQsXG59KSB7XG4gIGNvbnN0IHtpeEluc3RhbmNlcywgaXhTZXNzaW9ufSA9IHN0b3JlLmdldFN0YXRlKCk7XG5cbiAgLy8gQ2hlY2sgZm9yIGVsZW1lbnQgYm91bmRhcnkgYmVmb3JlIHN0b3BwaW5nIGVuZ2luZSBpbnN0YW5jZXNcbiAgY29uc3QgZXZlbnRFbGVtZW50Um9vdCA9XG4gICAgaXhTZXNzaW9uLmhhc0JvdW5kYXJ5Tm9kZXMgJiYgZXZlbnRUYXJnZXRcbiAgICAgID8gZWxlbWVudEFwaS5nZXRDbG9zZXN0RWxlbWVudChldmVudFRhcmdldCwgQk9VTkRBUllfU0VMRUNUT1IpXG4gICAgICA6IG51bGw7XG5cbiAgZm9yRWFjaChpeEluc3RhbmNlcywgKGluc3RhbmNlKSA9PiB7XG4gICAgY29uc3QgYm91bmRhcnlNb2RlID0gZ2V0KGluc3RhbmNlLCAnYWN0aW9uSXRlbS5jb25maWcudGFyZ2V0LmJvdW5kYXJ5TW9kZScpO1xuICAgIC8vIFZhbGlkYXRlIGV2ZW50IGtleSBpZiBldmVudFN0YXRlS2V5IHdhcyBwcm92aWRlZCwgb3RoZXJ3aXNlIGRlZmF1bHQgdG8gdHJ1ZVxuICAgIGNvbnN0IHZhbGlkRXZlbnRLZXkgPSBldmVudFN0YXRlS2V5XG4gICAgICA/IGluc3RhbmNlLmV2ZW50U3RhdGVLZXkgPT09IGV2ZW50U3RhdGVLZXlcbiAgICAgIDogdHJ1ZTtcbiAgICAvLyBSZW1vdmUgZW5naW5lIGluc3RhbmNlcyB0aGF0IG1hdGNoIHRoZSByZXF1aXJlZCBpZHNcbiAgICBpZiAoXG4gICAgICBpbnN0YW5jZS5hY3Rpb25MaXN0SWQgPT09IGFjdGlvbkxpc3RJZCAmJlxuICAgICAgaW5zdGFuY2UuZXZlbnRJZCA9PT0gZXZlbnRJZCAmJlxuICAgICAgdmFsaWRFdmVudEtleVxuICAgICkge1xuICAgICAgLy8gQXZvaWQgcmVtb3ZhbCB3aGVuIHJvb3QgYm91bmRhcnkgZG9lcyBub3QgY29udGFpbiBpbnN0YW5jZSBlbGVtZW50XG4gICAgICBpZiAoXG4gICAgICAgIGV2ZW50RWxlbWVudFJvb3QgJiZcbiAgICAgICAgYm91bmRhcnlNb2RlICYmXG4gICAgICAgICFlbGVtZW50QXBpLmVsZW1lbnRDb250YWlucyhldmVudEVsZW1lbnRSb290LCBpbnN0YW5jZS5lbGVtZW50KVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJlbW92ZUluc3RhbmNlKGluc3RhbmNlLCBzdG9yZSk7XG4gICAgICBpZiAoaW5zdGFuY2UudmVyYm9zZSkge1xuICAgICAgICBzdG9yZS5kaXNwYXRjaChcbiAgICAgICAgICBhY3Rpb25MaXN0UGxheWJhY2tDaGFuZ2VkKHthY3Rpb25MaXN0SWQsIGlzUGxheWluZzogZmFsc2V9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGFydEFjdGlvbkdyb3VwKHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnc3RvcmUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIHN0b3JlLFxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdldmVudElkJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBldmVudElkLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10cy1jb21tZW50XG4gIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgZXZlbnRUYXJnZXQsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICBldmVudFN0YXRlS2V5LFxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdhY3Rpb25MaXN0SWQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gIGFjdGlvbkxpc3RJZCxcbiAgZ3JvdXBJbmRleCA9IDAsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICBpbW1lZGlhdGUsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICB2ZXJib3NlLFxufSkge1xuICBjb25zdCB7aXhEYXRhLCBpeFNlc3Npb259ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgY29uc3Qge2V2ZW50c30gPSBpeERhdGE7XG4gIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2V2ZW50SWRdIHx8IHt9O1xuICBjb25zdCB7bWVkaWFRdWVyaWVzID0gaXhEYXRhLm1lZGlhUXVlcnlLZXlzfSA9IGV2ZW50O1xuICBjb25zdCBhY3Rpb25MaXN0ID0gZ2V0KGl4RGF0YSwgYGFjdGlvbkxpc3RzLiR7YWN0aW9uTGlzdElkfWAsIHt9KTtcbiAgY29uc3Qge2FjdGlvbkl0ZW1Hcm91cHMsIHVzZUZpcnN0R3JvdXBBc0luaXRpYWxTdGF0ZX0gPSBhY3Rpb25MaXN0O1xuICAvLyBBYm9ydCBwbGF5YmFjayBpZiBubyBhY3Rpb24gZ3JvdXBzXG4gIGlmICghYWN0aW9uSXRlbUdyb3VwcyB8fCAhYWN0aW9uSXRlbUdyb3Vwcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gUmVzZXQgdG8gZmlyc3QgZ3JvdXAgd2hlbiBldmVudCBsb29wIGlzIGNvbmZpZ3VyZWRcbiAgaWYgKGdyb3VwSW5kZXggPj0gYWN0aW9uSXRlbUdyb3Vwcy5sZW5ndGggJiYgZ2V0KGV2ZW50LCAnY29uZmlnLmxvb3AnKSkge1xuICAgIGdyb3VwSW5kZXggPSAwO1xuICB9XG4gIC8vIFNraXAgaW5pdGlhbCBzdGF0ZSBncm91cCBkdXJpbmcgYWN0aW9uIGxpc3QgcGxheWJhY2ssIGFzIGl0IHNob3VsZCBhbHJlYWR5IGJlIGFwcGxpZWRcbiAgaWYgKGdyb3VwSW5kZXggPT09IDAgJiYgdXNlRmlyc3RHcm91cEFzSW5pdGlhbFN0YXRlKSB7XG4gICAgZ3JvdXBJbmRleCsrO1xuICB9XG4gIC8vIElkZW50aWZ5IGZpcnN0IGFuaW1hdGVkIGdyb3VwIGFuZCBhcHBseSB0aGUgaW5pdGlhbCBRdWlja0VmZmVjdCBkZWxheVxuICBjb25zdCBpc0ZpcnN0R3JvdXAgPVxuICAgIGdyb3VwSW5kZXggPT09IDAgfHwgKGdyb3VwSW5kZXggPT09IDEgJiYgdXNlRmlyc3RHcm91cEFzSW5pdGlhbFN0YXRlKTtcbiAgY29uc3QgaW5zdGFuY2VEZWxheSA9XG4gICAgaXNGaXJzdEdyb3VwICYmIGlzUXVpY2tFZmZlY3QoZXZlbnQuYWN0aW9uPy5hY3Rpb25UeXBlSWQpXG4gICAgICA/IGV2ZW50LmNvbmZpZy5kZWxheVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgLy8gQWJvcnQgcGxheWJhY2sgaWYgbm8gYWN0aW9uIGl0ZW1zIGV4aXN0IGF0IGdyb3VwIGluZGV4XG4gIGNvbnN0IGFjdGlvbkl0ZW1zID0gZ2V0KGFjdGlvbkl0ZW1Hcm91cHMsIFtncm91cEluZGV4LCAnYWN0aW9uSXRlbXMnXSwgW10pO1xuICBpZiAoIWFjdGlvbkl0ZW1zLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBBYm9ydCBwbGF5YmFjayBpZiBjdXJyZW50IG1lZGlhIHF1ZXJ5IGlzIG5vdCBsaXN0ZWQgaW4gZXZlbnQgY29uZmlnXG4gIGlmICghc2hvdWxkQWxsb3dNZWRpYVF1ZXJ5KG1lZGlhUXVlcmllcywgaXhTZXNzaW9uLm1lZGlhUXVlcnlLZXkpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIExpbWl0IGFmZmVjdGVkIGVsZW1lbnRzIHdoZW4gZXZlbnQgdGFyZ2V0IGlzIHdpdGhpbiBhIGJvdW5kYXJ5IG5vZGVcbiAgY29uc3QgZXZlbnRFbGVtZW50Um9vdCA9XG4gICAgaXhTZXNzaW9uLmhhc0JvdW5kYXJ5Tm9kZXMgJiYgZXZlbnRUYXJnZXRcbiAgICAgID8gZWxlbWVudEFwaS5nZXRDbG9zZXN0RWxlbWVudChldmVudFRhcmdldCwgQk9VTkRBUllfU0VMRUNUT1IpXG4gICAgICA6IG51bGw7XG5cbiAgY29uc3QgY2FycmllckluZGV4ID0gZ2V0TWF4RHVyYXRpb25JdGVtSW5kZXgoYWN0aW9uSXRlbXMpO1xuICBsZXQgZ3JvdXBTdGFydFJlc3VsdCA9IGZhbHNlO1xuXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2FjdGlvbkl0ZW0nIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDA2IC0gUGFyYW1ldGVyICdhY3Rpb25JbmRleCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgYWN0aW9uSXRlbXMuZm9yRWFjaCgoYWN0aW9uSXRlbSwgYWN0aW9uSW5kZXgpID0+IHtcbiAgICBjb25zdCB7Y29uZmlnLCBhY3Rpb25UeXBlSWR9ID0gYWN0aW9uSXRlbTtcbiAgICBjb25zdCBzaG91bGRVc2VQbHVnaW4gPSBpc1BsdWdpblR5cGUoYWN0aW9uVHlwZUlkKTtcbiAgICBjb25zdCB7dGFyZ2V0fSA9IGNvbmZpZztcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50Um9vdCA9IHRhcmdldC5ib3VuZGFyeU1vZGUgPyBldmVudEVsZW1lbnRSb290IDogbnVsbDtcbiAgICBjb25zdCBlbGVtZW50cyA9IGdldEFmZmVjdGVkRWxlbWVudHMoe1xuICAgICAgY29uZmlnLFxuICAgICAgZXZlbnQsXG4gICAgICBldmVudFRhcmdldCxcbiAgICAgIGVsZW1lbnRSb290LFxuICAgICAgZWxlbWVudEFwaSxcbiAgICB9KTtcbiAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50LCBlbGVtZW50SW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IHBsdWdpbkluc3RhbmNlID0gc2hvdWxkVXNlUGx1Z2luXG4gICAgICAgID8gY3JlYXRlUGx1Z2luSW5zdGFuY2UoYWN0aW9uVHlwZUlkKT8uKGVsZW1lbnQsIGFjdGlvbkl0ZW0pXG4gICAgICAgIDogbnVsbDtcbiAgICAgIGNvbnN0IHBsdWdpbkR1cmF0aW9uID0gc2hvdWxkVXNlUGx1Z2luXG4gICAgICAgID8gZ2V0UGx1Z2luRHVyYXRpb24oYWN0aW9uVHlwZUlkKShlbGVtZW50LCBhY3Rpb25JdGVtKVxuICAgICAgICA6IG51bGw7XG4gICAgICBncm91cFN0YXJ0UmVzdWx0ID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGlzQ2FycmllciA9IGNhcnJpZXJJbmRleCA9PT0gYWN0aW9uSW5kZXggJiYgZWxlbWVudEluZGV4ID09PSAwO1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoe2VsZW1lbnQsIGFjdGlvbkl0ZW19KTtcbiAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gZ2V0RGVzdGluYXRpb25WYWx1ZXMoXG4gICAgICAgIHtlbGVtZW50LCBhY3Rpb25JdGVtLCBlbGVtZW50QXBpfSxcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHMtY29tbWVudFxuICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgIHBsdWdpbkluc3RhbmNlXG4gICAgICApO1xuXG4gICAgICBjcmVhdGVJbnN0YW5jZSh7XG4gICAgICAgIHN0b3JlLFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICBhY3Rpb25JdGVtLFxuICAgICAgICBldmVudElkLFxuICAgICAgICBldmVudFRhcmdldCxcbiAgICAgICAgZXZlbnRTdGF0ZUtleSxcbiAgICAgICAgYWN0aW9uTGlzdElkLFxuICAgICAgICBncm91cEluZGV4LFxuICAgICAgICBpc0NhcnJpZXIsXG4gICAgICAgIGNvbXB1dGVkU3R5bGUsXG4gICAgICAgIGRlc3RpbmF0aW9uLFxuICAgICAgICBpbW1lZGlhdGUsXG4gICAgICAgIHZlcmJvc2UsXG4gICAgICAgIHBsdWdpbkluc3RhbmNlLFxuICAgICAgICBwbHVnaW5EdXJhdGlvbixcbiAgICAgICAgaW5zdGFuY2VEZWxheSxcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGdyb3VwU3RhcnRSZXN1bHQ7XG59XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ29wdGlvbnMnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5mdW5jdGlvbiBjcmVhdGVJbnN0YW5jZShvcHRpb25zKSB7XG4gIGNvbnN0IHtzdG9yZSwgY29tcHV0ZWRTdHlsZSwgLi4ucmVzdH0gPSBvcHRpb25zO1xuICBjb25zdCB7XG4gICAgZWxlbWVudCxcbiAgICBhY3Rpb25JdGVtLFxuXG4gICAgaW1tZWRpYXRlLFxuICAgIHBsdWdpbkluc3RhbmNlLFxuXG4gICAgY29udGludW91cyxcblxuICAgIHJlc3RpbmdWYWx1ZSxcbiAgICBldmVudElkLFxuICB9ID0gcmVzdDtcbiAgY29uc3QgYXV0b1N0YXJ0ID0gIWNvbnRpbnVvdXM7XG4gIGNvbnN0IGluc3RhbmNlSWQgPSBnZXRJbnN0YW5jZUlkKCk7XG5cbiAgY29uc3Qge2l4RWxlbWVudHMsIGl4U2Vzc2lvbiwgaXhEYXRhfSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIGNvbnN0IGVsZW1lbnRJZCA9IGdldEVsZW1lbnRJZChpeEVsZW1lbnRzLCBlbGVtZW50KTtcbiAgY29uc3Qge3JlZlN0YXRlfSA9IGl4RWxlbWVudHNbZWxlbWVudElkXSB8fCB7fTtcbiAgY29uc3QgcmVmVHlwZSA9IGVsZW1lbnRBcGkuZ2V0UmVmVHlwZShlbGVtZW50KTtcblxuICBjb25zdCBza2lwTW90aW9uID1cbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDUzIC0gRWxlbWVudCBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlIGJlY2F1c2UgZXhwcmVzc2lvbiBvZiB0eXBlICdhbnknIGNhbid0IGJlIHVzZWQgdG8gaW5kZXggdHlwZSAneyByZWFkb25seSBUUkFOU0ZPUk1fTU9WRTogdHJ1ZTsgcmVhZG9ubHkgVFJBTlNGT1JNX1NDQUxFOiB0cnVlOyByZWFkb25seSBUUkFOU0ZPUk1fUk9UQVRFOiB0cnVlOyByZWFkb25seSBUUkFOU0ZPUk1fU0tFVzogdHJ1ZTsgcmVhZG9ubHkgU1RZTEVfU0laRTogdHJ1ZTsgcmVhZG9ubHkgU1RZTEVfRklMVEVSOiB0cnVlOyByZWFkb25seSBTVFlMRV9GT05UX1ZBUklBVElPTjogdHJ1ZTsgfScuXG4gICAgaXhTZXNzaW9uLnJlZHVjZWRNb3Rpb24gJiYgUmVkdWNlZE1vdGlvblR5cGVzW2FjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkXTtcbiAgbGV0IHNraXBUb1ZhbHVlO1xuICBpZiAoc2tpcE1vdGlvbiAmJiBjb250aW51b3VzKSB7XG4gICAgc3dpdGNoIChpeERhdGEuZXZlbnRzW2V2ZW50SWRdPy5ldmVudFR5cGVJZCkge1xuICAgICAgY2FzZSBFdmVudFR5cGVDb25zdHMuTU9VU0VfTU9WRTpcbiAgICAgIGNhc2UgRXZlbnRUeXBlQ29uc3RzLk1PVVNFX01PVkVfSU5fVklFV1BPUlQ6XG4gICAgICAgIHNraXBUb1ZhbHVlID0gcmVzdGluZ1ZhbHVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHNraXBUb1ZhbHVlID0gMC41O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb25zdCBvcmlnaW4gPSBnZXRJbnN0YW5jZU9yaWdpbihcbiAgICBlbGVtZW50LFxuICAgIHJlZlN0YXRlLFxuICAgIGNvbXB1dGVkU3R5bGUsXG4gICAgYWN0aW9uSXRlbSxcbiAgICBlbGVtZW50QXBpLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXRzLWNvbW1lbnRcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgcGx1Z2luSW5zdGFuY2VcbiAgKTtcblxuICBzdG9yZS5kaXNwYXRjaChcbiAgICBpbnN0YW5jZUFkZGVkKHtcbiAgICAgIGluc3RhbmNlSWQsXG4gICAgICBlbGVtZW50SWQsXG4gICAgICBvcmlnaW4sXG4gICAgICByZWZUeXBlLFxuICAgICAgc2tpcE1vdGlvbixcbiAgICAgIHNraXBUb1ZhbHVlLFxuICAgICAgLi4ucmVzdCxcbiAgICB9KVxuICApO1xuXG4gIGRpc3BhdGNoQ3VzdG9tRXZlbnQoZG9jdW1lbnQuYm9keSwgJ2l4Mi1hbmltYXRpb24tc3RhcnRlZCcsIGluc3RhbmNlSWQpO1xuXG4gIGlmIChpbW1lZGlhdGUpIHtcbiAgICByZW5kZXJJbW1lZGlhdGVJbnN0YW5jZShzdG9yZSwgaW5zdGFuY2VJZCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb2JzZXJ2ZVN0b3JlKHtcbiAgICBzdG9yZSxcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdpeEluc3RhbmNlcycgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICBzZWxlY3Q6ICh7aXhJbnN0YW5jZXN9KSA9PiBpeEluc3RhbmNlc1tpbnN0YW5jZUlkXSxcbiAgICBvbkNoYW5nZTogaGFuZGxlSW5zdGFuY2VDaGFuZ2UsXG4gIH0pO1xuXG4gIGlmIChhdXRvU3RhcnQpIHtcbiAgICBzdG9yZS5kaXNwYXRjaChpbnN0YW5jZVN0YXJ0ZWQoaW5zdGFuY2VJZCwgaXhTZXNzaW9uLnRpY2spKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVJbnN0YW5jZShpbnN0YW5jZTogYW55LCBzdG9yZTogSVgyRW5naW5lUmVkdWNlclN0b3JlKSB7XG4gIGRpc3BhdGNoQ3VzdG9tRXZlbnQoZG9jdW1lbnQuYm9keSwgJ2l4Mi1hbmltYXRpb24tc3RvcHBpbmcnLCB7XG4gICAgaW5zdGFuY2VJZDogaW5zdGFuY2UuaWQsXG4gICAgc3RhdGU6IHN0b3JlLmdldFN0YXRlKCksXG4gIH0pO1xuICBjb25zdCB7ZWxlbWVudElkLCBhY3Rpb25JdGVtfSA9IGluc3RhbmNlO1xuICBjb25zdCB7aXhFbGVtZW50c30gPSBzdG9yZS5nZXRTdGF0ZSgpO1xuICBjb25zdCB7cmVmLCByZWZUeXBlfSA9IGl4RWxlbWVudHNbZWxlbWVudElkXSB8fCB7fTtcbiAgaWYgKHJlZlR5cGUgPT09IEhUTUxfRUxFTUVOVCkge1xuICAgIGNsZWFudXBIVE1MRWxlbWVudChyZWYsIGFjdGlvbkl0ZW0sIGVsZW1lbnRBcGkpO1xuICB9XG4gIHN0b3JlLmRpc3BhdGNoKGluc3RhbmNlUmVtb3ZlZChpbnN0YW5jZS5pZCkpO1xufVxuXG5mdW5jdGlvbiBkaXNwYXRjaEN1c3RvbUV2ZW50KFxuICBlbGVtZW50OiBudWxsIHwgSFRNTEVsZW1lbnQsXG4gIGV2ZW50TmFtZTogc3RyaW5nLFxuICBkZXRhaWw6XG4gICAgfCBzdHJpbmdcbiAgICB8IHtcbiAgICAgICAgaW5zdGFuY2VJZDogYW55O1xuICAgICAgICBzdGF0ZTogYW55O1xuICAgICAgfVxuKSB7XG4gIGNvbnN0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gIGV2ZW50LmluaXRDdXN0b21FdmVudChldmVudE5hbWUsIHRydWUsIHRydWUsIGRldGFpbCk7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzE4MDQ3IC0gJ2VsZW1lbnQnIGlzIHBvc3NpYmx5ICdudWxsJy5cbiAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVySW1tZWRpYXRlSW5zdGFuY2UoXG4gIHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmUsXG4gIGluc3RhbmNlSWQ6IHN0cmluZ1xuKSB7XG4gIGNvbnN0IHtpeFBhcmFtZXRlcnN9ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgc3RvcmUuZGlzcGF0Y2goaW5zdGFuY2VTdGFydGVkKGluc3RhbmNlSWQsIDApKTtcbiAgc3RvcmUuZGlzcGF0Y2goYW5pbWF0aW9uRnJhbWVDaGFuZ2VkKHBlcmZvcm1hbmNlLm5vdygpLCBpeFBhcmFtZXRlcnMpKTtcbiAgY29uc3Qge2l4SW5zdGFuY2VzfSA9IHN0b3JlLmdldFN0YXRlKCk7XG4gIGhhbmRsZUluc3RhbmNlQ2hhbmdlKGl4SW5zdGFuY2VzW2luc3RhbmNlSWRdLCBzdG9yZSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUluc3RhbmNlQ2hhbmdlKGluc3RhbmNlOiBhbnksIHN0b3JlOiBJWDJFbmdpbmVSZWR1Y2VyU3RvcmUpIHtcbiAgY29uc3Qge1xuICAgIGFjdGl2ZSxcbiAgICBjb250aW51b3VzLFxuICAgIGNvbXBsZXRlLFxuICAgIGVsZW1lbnRJZCxcbiAgICBhY3Rpb25JdGVtLFxuICAgIGFjdGlvblR5cGVJZCxcbiAgICByZW5kZXJUeXBlLFxuICAgIGN1cnJlbnQsXG4gICAgZ3JvdXBJbmRleCxcbiAgICBldmVudElkLFxuICAgIGV2ZW50VGFyZ2V0LFxuICAgIGV2ZW50U3RhdGVLZXksXG4gICAgYWN0aW9uTGlzdElkLFxuICAgIGlzQ2FycmllcixcbiAgICBzdHlsZVByb3AsXG4gICAgdmVyYm9zZSxcbiAgICBwbHVnaW5JbnN0YW5jZSxcbiAgfSA9IGluc3RhbmNlO1xuXG4gIC8vIEJ5cGFzcyByZW5kZXIgaWYgY3VycmVudCBtZWRpYSBxdWVyeSBpcyBub3QgbGlzdGVkIGluIGV2ZW50IGNvbmZpZ1xuICBjb25zdCB7aXhEYXRhLCBpeFNlc3Npb259ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgY29uc3Qge2V2ZW50c30gPSBpeERhdGE7XG4gIGNvbnN0IGV2ZW50ID0gZXZlbnRzICYmIGV2ZW50c1tldmVudElkXSA/IGV2ZW50c1tldmVudElkXSA6IHt9O1xuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzM5IC0gIFByb3BlcnR5ICdtZWRpYVF1ZXJpZXMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ3t9IHwgdW5kZWZpbmVkJy5cbiAgY29uc3Qge21lZGlhUXVlcmllcyA9IGl4RGF0YS5tZWRpYVF1ZXJ5S2V5c30gPSBldmVudDtcbiAgaWYgKCFzaG91bGRBbGxvd01lZGlhUXVlcnkobWVkaWFRdWVyaWVzLCBpeFNlc3Npb24ubWVkaWFRdWVyeUtleSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoY29udGludW91cyB8fCBhY3RpdmUgfHwgY29tcGxldGUpIHtcbiAgICBpZiAoY3VycmVudCB8fCAocmVuZGVyVHlwZSA9PT0gUkVOREVSX0dFTkVSQUwgJiYgY29tcGxldGUpKSB7XG4gICAgICAvLyBSZW5kZXIgY3VycmVudCB2YWx1ZXMgdG8gcmVmIHN0YXRlIGFuZCBncmFiIGxhdGVzdFxuICAgICAgc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIGVsZW1lbnRTdGF0ZUNoYW5nZWQoZWxlbWVudElkLCBhY3Rpb25UeXBlSWQsIGN1cnJlbnQsIGFjdGlvbkl0ZW0pXG4gICAgICApO1xuICAgICAgY29uc3Qge2l4RWxlbWVudHN9ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgIGNvbnN0IHtyZWYsIHJlZlR5cGUsIHJlZlN0YXRlfSA9IGl4RWxlbWVudHNbZWxlbWVudElkXSB8fCB7fTtcbiAgICAgIGNvbnN0IGFjdGlvblN0YXRlID0gcmVmU3RhdGUgJiYgcmVmU3RhdGVbYWN0aW9uVHlwZUlkXTtcblxuICAgICAgLy8gUmVuZGVyIEhUTUwgYW5kIHBsdWdpbiBlbGVtZW50c1xuICAgICAgaWYgKHJlZlR5cGUgPT09IEhUTUxfRUxFTUVOVCB8fCBpc1BsdWdpblR5cGUoYWN0aW9uVHlwZUlkKSkge1xuICAgICAgICByZW5kZXJIVE1MRWxlbWVudChcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gcmVmIGNhbiBiZSB1bmRlZmluZWRcbiAgICAgICAgICByZWYsXG4gICAgICAgICAgcmVmU3RhdGUsXG4gICAgICAgICAgYWN0aW9uU3RhdGUsXG4gICAgICAgICAgZXZlbnRJZCxcbiAgICAgICAgICBhY3Rpb25JdGVtLFxuICAgICAgICAgIHN0eWxlUHJvcCxcbiAgICAgICAgICBlbGVtZW50QXBpLFxuICAgICAgICAgIHJlbmRlclR5cGUsXG4gICAgICAgICAgcGx1Z2luSW5zdGFuY2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY29tcGxldGUpIHtcbiAgICAgIGlmIChpc0NhcnJpZXIpIHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjM0NSAtIEFyZ3VtZW50IG9mIHR5cGUgJ3sgc3RvcmU6IGFueTsgZXZlbnRJZDogYW55OyBldmVudFRhcmdldDogYW55OyBldmVudFN0YXRlS2V5OiBhbnk7IGFjdGlvbkxpc3RJZDogYW55OyBncm91cEluZGV4OiBhbnk7IHZlcmJvc2U6IGFueTsgfScgaXMgbm90IGFzc2lnbmFibGUgdG8gcGFyYW1ldGVyIG9mIHR5cGUgJ3sgc3RvcmU6IGFueTsgZXZlbnRJZDogYW55OyBldmVudFRhcmdldDogYW55OyBldmVudFN0YXRlS2V5OiBhbnk7IGFjdGlvbkxpc3RJZDogYW55OyBncm91cEluZGV4PzogbnVtYmVyIHwgdW5kZWZpbmVkOyBpbW1lZGlhdGU6IGFueTsgdmVyYm9zZTogYW55OyB9Jy5cbiAgICAgICAgY29uc3Qgc3RhcnRlZCA9IHN0YXJ0QWN0aW9uR3JvdXAoe1xuICAgICAgICAgIHN0b3JlLFxuICAgICAgICAgIGV2ZW50SWQsXG4gICAgICAgICAgZXZlbnRUYXJnZXQsXG4gICAgICAgICAgZXZlbnRTdGF0ZUtleSxcbiAgICAgICAgICBhY3Rpb25MaXN0SWQsXG4gICAgICAgICAgZ3JvdXBJbmRleDogZ3JvdXBJbmRleCArIDEsXG4gICAgICAgICAgdmVyYm9zZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh2ZXJib3NlICYmICFzdGFydGVkKSB7XG4gICAgICAgICAgc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgICAgICBhY3Rpb25MaXN0UGxheWJhY2tDaGFuZ2VkKHthY3Rpb25MaXN0SWQsIGlzUGxheWluZzogZmFsc2V9KVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmVtb3ZlSW5zdGFuY2UoaW5zdGFuY2UsIHN0b3JlKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJvYnNlcnZlUmVxdWVzdHMiLCJzdGFydEFjdGlvbkdyb3VwIiwic3RhcnRFbmdpbmUiLCJzdG9wQWN0aW9uR3JvdXAiLCJzdG9wQWxsQWN0aW9uR3JvdXBzIiwic3RvcEVuZ2luZSIsIlF1aWNrRWZmZWN0c0lkTGlzdCIsIk9iamVjdCIsImtleXMiLCJRdWlja0VmZmVjdElkcyIsImlzUXVpY2tFZmZlY3QiLCJhY3Rpb25UeXBlSWQiLCJpbmNsdWRlcyIsIkNPTE9OX0RFTElNSVRFUiIsIkJPVU5EQVJZX1NFTEVDVE9SIiwiSFRNTF9FTEVNRU5UIiwiUkVOREVSX0dFTkVSQUwiLCJXX01PRF9JWCIsIklYMkVuZ2luZUNvbnN0YW50cyIsImdldEFmZmVjdGVkRWxlbWVudHMiLCJnZXRFbGVtZW50SWQiLCJnZXREZXN0aW5hdGlvblZhbHVlcyIsIm9ic2VydmVTdG9yZSIsImdldEluc3RhbmNlSWQiLCJyZW5kZXJIVE1MRWxlbWVudCIsImNsZWFyQWxsU3R5bGVzIiwiZ2V0TWF4RHVyYXRpb25JdGVtSW5kZXgiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0SW5zdGFuY2VPcmlnaW4iLCJyZWR1Y2VMaXN0VG9Hcm91cCIsInNob3VsZE5hbWVzcGFjZUV2ZW50UGFyYW1ldGVyIiwiZ2V0TmFtZXNwYWNlZFBhcmFtZXRlcklkIiwic2hvdWxkQWxsb3dNZWRpYVF1ZXJ5IiwiY2xlYW51cEhUTUxFbGVtZW50IiwiY2xlYXJPYmplY3RDYWNoZSIsInN0cmluZ2lmeVRhcmdldCIsIm1lZGlhUXVlcmllc0VxdWFsIiwic2hhbGxvd0VxdWFsIiwiSVgyVmFuaWxsYVV0aWxzIiwiaXNQbHVnaW5UeXBlIiwiY3JlYXRlUGx1Z2luSW5zdGFuY2UiLCJnZXRQbHVnaW5EdXJhdGlvbiIsIklYMlZhbmlsbGFQbHVnaW5zIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJJU19NT0JJTEVfU0FGQVJJIiwibWF0Y2giLCJUSFJPVFRMRURfRVZFTlRfV0FJVCIsInN0b3JlIiwic2VsZWN0IiwiaXhSZXF1ZXN0IiwicHJldmlldyIsIm9uQ2hhbmdlIiwiaGFuZGxlUHJldmlld1JlcXVlc3QiLCJwbGF5YmFjayIsImhhbmRsZVBsYXliYWNrUmVxdWVzdCIsInN0b3AiLCJoYW5kbGVTdG9wUmVxdWVzdCIsImNsZWFyIiwiaGFuZGxlQ2xlYXJSZXF1ZXN0Iiwib2JzZXJ2ZU1lZGlhUXVlcnlDaGFuZ2UiLCJpeFNlc3Npb24iLCJtZWRpYVF1ZXJ5S2V5IiwiZWxlbWVudEFwaSIsImFsbG93RXZlbnRzIiwiZGlzcGF0Y2hQYWdlVXBkYXRlRXZlbnQiLCJvYnNlcnZlT25lUmVuZGVyVGljayIsIm9uVGljayIsInVuc3Vic2NyaWJlIiwidGljayIsInJhd0RhdGEiLCJkZWZlciIsInN0YXJ0Iiwic2V0VGltZW91dCIsImRvY3VtZW50IiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiYWN0aW9uTGlzdElkIiwiYWN0aW9uSXRlbUlkIiwiZXZlbnRJZCIsImltbWVkaWF0ZSIsInRlc3RNYW51YWwiLCJ2ZXJib3NlIiwiYWN0aW9uTGlzdCIsImFjdGlvbkxpc3RzIiwiQWN0aW9uVHlwZUNvbnN0cyIsIkdFTkVSQUxfU1RBUlRfQUNUSU9OIiwicmVuZGVySW5pdGlhbEdyb3VwIiwic3RhcnRlZCIsImRpc3BhdGNoIiwiYWN0aW9uTGlzdFBsYXliYWNrQ2hhbmdlZCIsImlzUGxheWluZyIsInN0YXRlIiwiZ2V0U3RhdGUiLCJyYXdEYXRhSW1wb3J0ZWQiLCJhY3RpdmUiLCJzZXNzaW9uSW5pdGlhbGl6ZWQiLCJoYXNCb3VuZGFyeU5vZGVzIiwiQm9vbGVhbiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWR1Y2VkTW90aW9uIiwiYm9keSIsImhhc0F0dHJpYnV0ZSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiYmluZEV2ZW50cyIsImFkZERvY3VtZW50Q2xhc3MiLCJoYXNEZWZpbmVkTWVkaWFRdWVyaWVzIiwic2Vzc2lvblN0YXJ0ZWQiLCJzdGFydFJlbmRlckxvb3AiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbmRleE9mIiwiaGFuZGxlRnJhbWUiLCJub3ciLCJpeFBhcmFtZXRlcnMiLCJhbmltYXRpb25GcmFtZUNoYW5nZWQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJwZXJmb3JtYW5jZSIsImV2ZW50TGlzdGVuZXJzIiwiZm9yRWFjaCIsImNsZWFyRXZlbnRMaXN0ZW5lciIsInNlc3Npb25TdG9wcGVkIiwidGFyZ2V0IiwibGlzdGVuZXJQYXJhbXMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYXBwbHkiLCJjcmVhdGVHcm91cEluc3RhbmNlcyIsImV2ZW50U3RhdGVLZXkiLCJldmVudFRhcmdldCIsImV2ZW50Q29uZmlnIiwicGFyYW1ldGVyR3JvdXAiLCJzbW9vdGhpbmciLCJyZXN0aW5nVmFsdWUiLCJpeERhdGEiLCJldmVudHMiLCJldmVudCIsImV2ZW50VHlwZUlkIiwidGFyZ2V0Q2FjaGUiLCJpbnN0YW5jZUFjdGlvbkdyb3VwcyIsImluc3RhbmNlQ29uZmlncyIsImNvbnRpbnVvdXNBY3Rpb25Hcm91cHMiLCJpZCIsInBhcmFtZXRlcklkIiwiZXZlbnRFbGVtZW50Um9vdCIsImdldENsb3Nlc3RFbGVtZW50IiwiYWN0aW9uR3JvdXAiLCJrZXlmcmFtZSIsImFjdGlvbkl0ZW1zIiwiYWN0aW9uSXRlbSIsImNvbmZpZyIsImVsZW1lbnRSb290IiwiYm91bmRhcnlNb2RlIiwia2V5IiwiYXBwZW5kQWN0aW9uSXRlbSIsImVsZW1lbnQiLCJwdXNoIiwiYWN0aW9uR3JvdXBzIiwiZ2V0Iiwic2hvdWxkVXNlUGx1Z2luIiwiUExVR0lOX1JJVkUiLCJzZWxlY3Rvckd1aWRzIiwibGVuZ3RoIiwicGx1Z2luSW5zdGFuY2UiLCJkZXN0aW5hdGlvbiIsImNyZWF0ZUluc3RhbmNlIiwiY29udGludW91cyIsIm5ld0FjdGlvbkdyb3VwcyIsImdyb3VwSW5kZXgiLCJzb21lIiwiZ3JvdXAiLCJpbmRleCIsImV2ZW50VHlwZU1hcCIsInVwZGF0ZVZpZXdwb3J0V2lkdGgiLCJsb2dpYyIsIklYMlZhbmlsbGFFdmVudHMiLCJjb25zb2xlIiwid2FybiIsImJpbmRFdmVudFR5cGUiLCJiaW5kUmVzaXplRXZlbnRzIiwiV0lORE9XX1JFU0laRV9FVkVOVFMiLCJoYW5kbGVSZXNpemUiLCJ0eXBlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50TGlzdGVuZXJBZGRlZCIsIndpZHRoIiwiaW5uZXJXaWR0aCIsInZpZXdwb3J0V2lkdGgiLCJtZWRpYVF1ZXJpZXMiLCJ2aWV3cG9ydFdpZHRoQ2hhbmdlZCIsIm1hcEZvdW5kVmFsdWVzIiwib2JqZWN0IiwiaXRlcmF0ZWUiLCJvbWl0QnkiLCJtYXBWYWx1ZXMiLCJpc0VtcHR5IiwiZm9yRWFjaEV2ZW50VGFyZ2V0IiwiZXZlbnRUYXJnZXRzIiwiZXZlbnRDYWxsYmFjayIsImVsZW1lbnRzIiwiZ2V0QWZmZWN0ZWRGb3JFdmVudCIsInRhcmdldHMiLCJpbmplY3RCZWhhdmlvckNTU0ZpeGVzIiwidHlwZXMiLCJldmVudFR5cGVzIiwiaGFuZGxlciIsImV2ZW50SGFuZGxlciIsInNpemUiLCJhY3Rpb24iLCJldmVudEFjdGlvbiIsIm1lZGlhUXVlcnlLZXlzIiwibWVkaWFRdWVyaWVzRGVmaW5lZCIsIkdFTkVSQUxfQ09OVElOVU9VU19BQ1RJT04iLCJjb25maWdzIiwiQXJyYXkiLCJpc0FycmF5IiwiY29udGludW91c1BhcmFtZXRlckdyb3VwSWQiLCJwYXJhbUdyb3VwcyIsImZpbmQiLCJyZXN0aW5nU3RhdGUiLCJoYW5kbGVFdmVudCIsIm5hdGl2ZUV2ZW50Iiwib2xkU3RhdGUiLCJldmVudFN0YXRlIiwiaGFuZGxlRXZlbnRXaXRoQ29uZmlnIiwibmV3U3RhdGUiLCJldmVudFN0YXRlQ2hhbmdlZCIsImhhbmRsZUV2ZW50VGhyb3R0bGVkIiwidGhyb3R0bGUiLCJhZGRMaXN0ZW5lcnMiLCJzaG91bGRUaHJvdHRsZSIsInNwbGl0IiwiZmlsdGVyIiwiaGFuZGxlckZ1bmMiLCJpbmplY3RlZFNlbGVjdG9ycyIsImNzc1RleHQiLCJzZWxlY3RvciIsImdldFF1ZXJ5U2VsZWN0b3IiLCJFdmVudFR5cGVDb25zdHMiLCJNT1VTRV9DTElDSyIsIk1PVVNFX1NFQ09ORF9DTElDSyIsInN0eWxlIiwiY3JlYXRlRWxlbWVudCIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJ1c2VGaXJzdEdyb3VwQXNJbml0aWFsU3RhdGUiLCJpbml0aWFsU3RhdGVJdGVtcyIsIml0ZW1Db25maWciLCJ1c2VFdmVudFRhcmdldCIsIm9iamVjdElkIiwiaXRlbUVsZW1lbnRzIiwiaXhJbnN0YW5jZXMiLCJpbnN0YW5jZSIsInJlbW92ZUluc3RhbmNlIiwidmFsaWRFdmVudEtleSIsImVsZW1lbnRDb250YWlucyIsImFjdGlvbkl0ZW1Hcm91cHMiLCJpc0ZpcnN0R3JvdXAiLCJpbnN0YW5jZURlbGF5IiwiZGVsYXkiLCJ1bmRlZmluZWQiLCJjYXJyaWVySW5kZXgiLCJncm91cFN0YXJ0UmVzdWx0IiwiYWN0aW9uSW5kZXgiLCJlbGVtZW50SW5kZXgiLCJwbHVnaW5EdXJhdGlvbiIsImlzQ2FycmllciIsImNvbXB1dGVkU3R5bGUiLCJvcHRpb25zIiwicmVzdCIsImF1dG9TdGFydCIsImluc3RhbmNlSWQiLCJpeEVsZW1lbnRzIiwiZWxlbWVudElkIiwicmVmU3RhdGUiLCJyZWZUeXBlIiwiZ2V0UmVmVHlwZSIsInNraXBNb3Rpb24iLCJSZWR1Y2VkTW90aW9uVHlwZXMiLCJza2lwVG9WYWx1ZSIsIk1PVVNFX01PVkUiLCJNT1VTRV9NT1ZFX0lOX1ZJRVdQT1JUIiwib3JpZ2luIiwiaW5zdGFuY2VBZGRlZCIsImRpc3BhdGNoQ3VzdG9tRXZlbnQiLCJyZW5kZXJJbW1lZGlhdGVJbnN0YW5jZSIsImhhbmRsZUluc3RhbmNlQ2hhbmdlIiwiaW5zdGFuY2VTdGFydGVkIiwicmVmIiwiaW5zdGFuY2VSZW1vdmVkIiwiZXZlbnROYW1lIiwiZGV0YWlsIiwiY3JlYXRlRXZlbnQiLCJpbml0Q3VzdG9tRXZlbnQiLCJjb21wbGV0ZSIsInJlbmRlclR5cGUiLCJjdXJyZW50Iiwic3R5bGVQcm9wIiwiZWxlbWVudFN0YXRlQ2hhbmdlZCIsImFjdGlvblN0YXRlIl0sIm1hcHBpbmdzIjoiQUFBQSxzQkFBc0I7Ozs7Ozs7Ozs7O0lBeUZOQSxlQUFlO2VBQWZBOztJQW13QkFDLGdCQUFnQjtlQUFoQkE7O0lBcm1CQUMsV0FBVztlQUFYQTs7SUFnakJBQyxlQUFlO2VBQWZBOztJQWZBQyxtQkFBbUI7ZUFBbkJBOztJQXRlQUMsVUFBVTtlQUFWQTs7OzZEQWpUQzs0REFDRDs2REFDQzsrREFDRTtnRUFDQztrRUFDRTtnRUFDRjtpRUFDQztpQ0FPZDt3QkFPMEM7a0NBa0QxQzt1RUFFcUI7eUVBRUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBM0Q3QixNQUFNQyxxQkFBcUJDLE9BQU9DLElBQUksQ0FBQ0MsK0JBQWM7QUFFckQsTUFBTUMsZ0JBQWdCLENBQUNDLGVBQ3JCTCxtQkFBbUJNLFFBQVEsQ0FBQ0Q7QUFJOUIsTUFBTSxFQUNKRSxlQUFlLEVBQ2ZDLGlCQUFpQixFQUNqQkMsWUFBWSxFQUNaQyxjQUFjLEVBQ2RDLFFBQVEsRUFDVCxHQUFHQyxtQ0FBa0I7QUFFdEIsTUFBTSxFQUNKQyxtQkFBbUIsRUFDbkJDLFlBQVksRUFDWkMsb0JBQW9CLEVBQ3BCQyxZQUFZLEVBQ1pDLGFBQWEsRUFDYkMsaUJBQWlCLEVBQ2pCQyxjQUFjLEVBQ2RDLHVCQUF1QixFQUN2QkMsZ0JBQWdCLEVBQ2hCQyxpQkFBaUIsRUFDakJDLGlCQUFpQixFQUNqQkMsNkJBQTZCLEVBQzdCQyx3QkFBd0IsRUFDeEJDLHFCQUFxQixFQUNyQkMsa0JBQWtCLEVBQ2xCQyxnQkFBZ0IsRUFDaEJDLGVBQWUsRUFDZkMsaUJBQWlCLEVBQ2pCQyxZQUFZLEVBQ2IsR0FBR0MsdUJBQWU7QUFDbkIs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
},8955:function(t,e,n){"use strict";
/* eslint-env browser */Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return lt}});const r=l(n(5801)),i=l(n(4738)),o=l(n(3789)),a=n(7087),u=n(1970),c=n(3946),s=n(9468);function l(t){return t&&t.__esModule?t:{default:t}}const{MOUSE_CLICK:f,MOUSE_SECOND_CLICK:d,MOUSE_DOWN:p,MOUSE_UP:h,MOUSE_OVER:E,MOUSE_OUT:v,DROPDOWN_CLOSE:g,DROPDOWN_OPEN:y,SLIDER_ACTIVE:m,SLIDER_INACTIVE:_,TAB_ACTIVE:I,TAB_INACTIVE:b,NAVBAR_CLOSE:T,NAVBAR_OPEN:O,MOUSE_MOVE:A,PAGE_SCROLL_DOWN:w,SCROLL_INTO_VIEW:S,SCROLL_OUT_OF_VIEW:N,PAGE_SCROLL_UP:R,SCROLLING_IN_VIEW:C,PAGE_FINISH:L,ECOMMERCE_CART_CLOSE:x,ECOMMERCE_CART_OPEN:P,PAGE_START:M,PAGE_SCROLL:F}=a.EventTypeConsts,D="COMPONENT_ACTIVE",j="COMPONENT_INACTIVE",{COLON_DELIMITER:k}=a.IX2EngineConstants,{getNamespacedParameterId:G}=s.IX2VanillaUtils,V=t=>e=>!("object"!=typeof e||!t(e))||e,U=V(({element:t,nativeEvent:e})=>t===e.target),X=V(({element:t,nativeEvent:e})=>t.contains(e.target)),B=(0,r.default)([U,X]),W=(t,e)=>{if(e){const{ixData:n}=t.getState(),{events:r}=n,i=r[e];
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{ readonly PAGE_START: "PAGE_START"; readonly PAGE_FINISH: "PAGE_FINISH"; }'.
if(i&&!Z[i.eventTypeId])return i}return null},z=({store:t,event:e,element:n,eventStateKey:r},o)=>{const{action:a,id:c}=e,{actionListId:s,autoStopEventId:l}=a.config,f=W(t,l);return f&&(0,u.stopActionGroup)({store:t,eventId:l,eventTarget:n,eventStateKey:l+k+r.split(k)[1],actionListId:(0,i.default)(f,"action.config.actionListId")}),(0,u.stopActionGroup)({store:t,eventId:c,eventTarget:n,eventStateKey:r,actionListId:s}),
// @ts-expect-error - TS2345 - Argument of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; }' is not assignable to parameter of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; groupIndex?: number | undefined; immediate: any; verbose: any; }'.
// @ts-expect-error - TS2345 - Argument of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; }' is not assignable to parameter of type '{ store: any; eventId: any; eventTarget: any; eventStateKey: any; actionListId: any; groupIndex?: number | undefined; immediate: any; verbose: any; }'.
(0,u.startActionGroup)({store:t,eventId:c,eventTarget:n,eventStateKey:r,actionListId:s}),o},H=(t,e)=>(n,r)=>!0===t(n,r)?e(n,r):r,$={handler:H(B,z)},Y={...$,types:[D,j].join(" ")},K=[{target:window,types:"resize orientationchange",throttle:!0},{target:document,types:"scroll wheel readystatechange IX2_PAGE_UPDATE",throttle:!0}],Q="mouseover mouseout",q={types:K},Z={PAGE_START:M,PAGE_FINISH:L},J=(()=>{const t=void 0!==window.pageXOffset,e="CSS1Compat"===document.compatMode?document.documentElement:document.body;return()=>({scrollLeft:t?window.pageXOffset:e.scrollLeft,scrollTop:t?window.pageYOffset:e.scrollTop,
// required to remove elasticity in Safari scrolling.
stiffScrollTop:(0,o.default)(t?window.pageYOffset:e.scrollTop,0,e.scrollHeight-window.innerHeight),scrollWidth:e.scrollWidth,scrollHeight:e.scrollHeight,clientWidth:e.clientWidth,clientHeight:e.clientHeight,innerWidth:window.innerWidth,innerHeight:window.innerHeight})})(),tt=({element:t,nativeEvent:e})=>{const{type:n,target:r,relatedTarget:i}=e,o=t.contains(r);if("mouseover"===n&&o)return!0;const a=t.contains(i);return!("mouseout"!==n||!o||!a)},et=t=>{const{element:e,event:{config:n}}=t,{clientWidth:r,clientHeight:i}=J(),o=n.scrollOffsetValue,a="PX"===n.scrollOffsetUnit?o:i*(o||0)/100;return c={left:0,top:a,right:r,bottom:i-a},!((u=e.getBoundingClientRect()).left>c.right||u.right<c.left||u.top>c.bottom||u.bottom<c.top);var u,c},nt=// @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
t=>(e,n)=>{const{type:r}=e.nativeEvent,i=-1!==[D,j].indexOf(r)?r===D:n.isActive,o={...n,isActive:i};
// prettier-ignore
return n&&o.isActive===n.isActive?o:t(e,o)||o},rt=t=>(e,n)=>{const r={elementHovered:tt(e)};return(n?r.elementHovered!==n.elementHovered:r.elementHovered)&&t(e,r)||r},it=// @ts-expect-error - TS7006 - Parameter 'handler' implicitly has an 'any' type.
t=>(e,n={})=>{const{stiffScrollTop:r,scrollHeight:i,innerHeight:o}=J(),{event:{config:a,eventTypeId:u}}=e,{scrollOffsetValue:c,scrollOffsetUnit:s}=a,l="PX"===s,f=i-o,d=Number((r/f).toFixed(2));
// no state change
// @ts-expect-error - TS2339 - Property 'percentTop' does not exist on type '{}'.
if(n&&n.percentTop===d)return n;const p=(l?c:o*(c||0)/100)/f;let h,E,v=0;n&&(
// @ts-expect-error - TS2339 - Property 'percentTop' does not exist on type '{}'.
h=d>n.percentTop,
// @ts-expect-error - TS2339 - Property 'scrollingDown' does not exist on type '{}'.
E=n.scrollingDown!==h,
// @ts-expect-error - TS2339 - Property 'anchorTop' does not exist on type '{}'.
v=E?d:n.anchorTop);const g=u===w?d>=v+p:d<=v-p,y={...n,percentTop:d,inBounds:g,anchorTop:v,scrollingDown:h};return n&&g&&(// @ts-expect-error - TS2339 - Property 'inBounds' does not exist on type '{}'.
E||y.inBounds!==n.inBounds)&&t(e,y)||y},ot=t=>(e,n={clickCount:0})=>{const r={clickCount:n.clickCount%2+1};return r.clickCount!==n.clickCount&&t(e,r)||r},at=(t=!0)=>({...Y,handler:H(t?B:U,// @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
nt((t,e)=>e.isActive?$.handler(t,e):e))}),ut=(t=!0)=>({...Y,handler:H(t?B:U,// @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
nt((t,e)=>e.isActive?e:$.handler(t,e)))}),ct={...q,handler:(st=(t,e)=>{const{elementVisible:n}=e,{event:r,store:i}=t,{ixData:o}=i.getState(),{events:a}=o;
// trigger the handler only once if only one of SCROLL_INTO or SCROLL_OUT_OF event types
// are registered.
return!a[r.action.config.autoStopEventId]&&e.triggered?e:r.eventTypeId===S===n?(
// @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
z(t),{...e,triggered:!0}):e},(t,e)=>{const n={...e,elementVisible:et(t)};return(e?n.elementVisible!==e.elementVisible:n.elementVisible)&&st(t,n)||n})};var st;const lt={[m]:at(),[_]:ut(),[y]:at(),[g]:ut(),
// navbar elements may contain nested components in the menu. To prevent activity misfires, only listed for activity
// events where the target is the navbar element, and ignore children that dispatch activitiy events.
[O]:at(!1),[T]:ut(!1),[I]:at(),[b]:ut(),[P]:{types:"ecommerce-cart-open",handler:H(B,z)},[x]:{types:"ecommerce-cart-close",handler:H(B,z)},[f]:{types:"click",handler:H(B,ot((t,{clickCount:e})=>{(({store:t,event:e})=>{const{action:n}=e,{autoStopEventId:r}=n.config;return Boolean(W(t,r))})(t)?
// @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
1===e&&z(t):
// @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
z(t)}))},[d]:{types:"click",handler:H(B,ot((t,{clickCount:e})=>{2===e&&
// @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
z(t)}))},[p]:{...$,types:"mousedown"},[h]:{...$,types:"mouseup"},[E]:{types:Q,handler:H(B,rt((t,e)=>{e.elementHovered&&
// @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
z(t)}))},[v]:{types:Q,handler:H(B,rt((t,e)=>{e.elementHovered||
// @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
z(t)}))},[A]:{types:"mousemove mouseout scroll",handler:(// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
{store:t,element:e,eventConfig:n,nativeEvent:r,eventStateKey:i},o={clientX:0,clientY:0,pageX:0,pageY:0})=>{const{basedOn:u,selectedAxis:s,continuousParameterGroupId:l,reverse:f,restingState:d=0}=n,{clientX:p=o.clientX,clientY:h=o.clientY,pageX:E=o.pageX,pageY:v=o.pageY}=r,g="X_AXIS"===s,y="mouseout"===r.type;let m=d/100,_=l,I=!1;switch(u){case a.EventBasedOn.VIEWPORT:m=g?Math.min(p,window.innerWidth)/window.innerWidth:Math.min(h,window.innerHeight)/window.innerHeight;break;
// @ts-expect-error - TS2339 - Property 'PAGE' does not exist on type '{ readonly ELEMENT: "ELEMENT"; readonly VIEWPORT: "VIEWPORT"; }'.
case a.EventBasedOn.PAGE:{const{scrollLeft:t,scrollTop:e,scrollWidth:n,scrollHeight:r}=J();m=g?Math.min(t+E,n)/n:Math.min(e+v,r)/r;break}case a.EventBasedOn.ELEMENT:default:{_=G(i,l);const t=0===r.type.indexOf("mouse");
// Use isOrContainsElement for mouse events since they are fired from the target
if(t&&!0!==B({element:e,nativeEvent:r}))break;const n=e.getBoundingClientRect(),{left:o,top:a,width:u,height:c}=n;
// Otherwise we'll need to calculate the mouse position from the previous handler state
// against the target element's rect
if(!t&&!((t,e)=>t.left>e.left&&t.left<e.right&&t.top>e.top&&t.top<e.bottom)({left:p,top:h},n))break;I=!0,m=g?(p-o)/u:(h-a)/c;break}}
// cover case where the event is a mouse out, but the value is not quite at 100%
return y&&(m>.95||m<.05)&&(m=Math.round(m)),
// Only update based on element if the mouse is moving over or has just left the element
(u!==a.EventBasedOn.ELEMENT||I||// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
I!==o.elementHovered)&&(m=f?1-m:m,t.dispatch((0,c.parameterChanged)(_,m))),{elementHovered:I,clientX:p,clientY:h,pageX:E,pageY:v}}},[F]:{types:K,
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
handler:({store:t,eventConfig:e})=>{const{continuousParameterGroupId:n,reverse:r}=e,{scrollTop:i,scrollHeight:o,clientHeight:a}=J();let u=i/(o-a);u=r?1-u:u,t.dispatch((0,c.parameterChanged)(n,u))}},[C]:{types:K,handler:(// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
{element:t,store:e,eventConfig:n,eventStateKey:r},i={scrollPercent:0})=>{const{scrollLeft:o,scrollTop:u,scrollWidth:s,scrollHeight:l,clientHeight:f}=J(),{basedOn:d,selectedAxis:p,continuousParameterGroupId:h,startsEntering:E,startsExiting:v,addEndOffset:g,addStartOffset:y,addOffsetValue:m=0,endOffsetValue:_=0}=n,I="X_AXIS"===p;if(d===a.EventBasedOn.VIEWPORT){const t=I?o/s:u/l;return t!==i.scrollPercent&&e.dispatch((0,c.parameterChanged)(h,t)),{scrollPercent:t}}{const n=G(r,h),o=t.getBoundingClientRect();let a=(y?m:0)/100,u=(g?_:0)/100;
// flip the offset percentages depending on start / exit type
a=E?a:1-a,u=v?u:1-u;const s=o.top+Math.min(o.height*a,f),d=o.top+o.height*u-s,p=Math.min(f+d,l),I=Math.min(Math.max(0,f-s),p)/p;return I!==i.scrollPercent&&e.dispatch((0,c.parameterChanged)(n,I)),{scrollPercent:I}}}},[S]:ct,[N]:ct,[w]:{...q,
// @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
handler:it((t,e)=>{e.scrollingDown&&
// @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
z(t)})},[R]:{...q,
// @ts-expect-error - TS7006 - Parameter 'options' implicitly has an 'any' type. | TS7006 - Parameter 'state' implicitly has an 'any' type.
handler:it((t,e)=>{e.scrollingDown||
// @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
z(t)})},[L]:{types:"readystatechange IX2_PAGE_UPDATE",handler:H(U,(t=>(e,n)=>{const r={finished:"complete"===document.readyState};return!r.finished||n&&n.finshed||
// @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
t(e),r})(z))},[M]:{types:"readystatechange IX2_PAGE_UPDATE",handler:H(U,(t=>(e,n)=>(n||
// @ts-expect-error - TS2554 - Expected 2 arguments, but got 1.
t(e),{started:!0}))(z))}}},4609:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"ixData",{enumerable:!0,get:function(){return o}});const r=n(7087),{IX2_RAW_DATA_IMPORTED:i}=r.IX2EngineActionTypes,o=(t=Object.freeze({}),e)=>e.type===i?e.payload.ixData||Object.freeze({}):t},7718:function(t,e,n){"use strict";
/* eslint-env browser */Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"ixInstances",{enumerable:!0,get:function(){return I}});const r=n(7087),i=n(9468),o=n(1185),{IX2_RAW_DATA_IMPORTED:a,IX2_SESSION_STOPPED:u,IX2_INSTANCE_ADDED:c,IX2_INSTANCE_STARTED:s,IX2_INSTANCE_REMOVED:l,IX2_ANIMATION_FRAME_CHANGED:f}=r.IX2EngineActionTypes,{optimizeFloat:d,applyEasing:p,createBezierEasing:h}=i.IX2EasingUtils,{RENDER_GENERAL:E}=r.IX2EngineConstants,{getItemConfigByKey:v,getRenderType:g,getStyleProp:y}=i.IX2VanillaUtils,m=(t,e)=>{const{position:n,parameterId:r,actionGroups:i,destinationKeys:a,smoothing:u,restingValue:c,actionTypeId:s,customEasingFn:l,skipMotion:f,skipToValue:h}=t,{parameters:E}=e.payload;let g=Math.max(1-u,.01),y=E[r];null==y&&(g=1,y=c);const m=Math.max(y,0)||0,_=d(m-n),I=f?h:d(n+_*g),b=100*I;if(I===n&&t.current)return t;let T,O,A,w;for(let t=0,{length:e}=i;t<e;t++){const{keyframe:e,actionItems:n}=i[t];if(0===t&&(T=n[0]),b>=e){T=n[0];const r=i[t+1],o=r&&b!==e;O=o?r.actionItems[0]:null,o&&(A=e/100,w=(r.keyframe-e)/100)}}const S={};if(T&&!O)for(let t=0,{length:e}=a;t<e;t++){const e=a[t];S[e]=v(s,e,T.config)}else if(T&&O&&void 0!==A&&void 0!==w){const t=(I-A)/w,e=T.config.easing,n=p(e,t,l);for(let t=0,{length:e}=a;t<e;t++){const e=a[t],r=v(s,e,T.config),i=(v(s,e,O.config)-r)*n+r;S[e]=i}}return(0,o.merge)(t,{position:I,current:S})},_=(t,e)=>{const{active:n,origin:r,start:i,immediate:a,renderType:u,verbose:c,actionItem:s,destination:l,destinationKeys:f,pluginDuration:h,instanceDelay:v,customEasingFn:g,skipMotion:y}=t,m=s.config.easing;let{duration:_,delay:I}=s.config;null!=h&&(_=h),I=null!=v?v:I,u===E?_=0:(a||y)&&(_=I=0);const{now:b}=e.payload;if(n&&r){const e=b-(i+I);if(c){const e=b-i,n=_+I,r=d(Math.min(Math.max(0,e/n),1));t=(0,o.set)(t,"verboseTimeElapsed",n*r)}if(e<0)return t;const n=d(Math.min(Math.max(0,e/_),1)),a=p(m,n,g),u={};let s=null;return f.length&&(
// @ts-expect-error - TS2347 - Untyped function calls may not accept type arguments. | TS7006 - Parameter 'result' implicitly has an 'any' type. | TS7006 - Parameter 'key' implicitly has an 'any' type.
s=f.reduce((t,e)=>{const n=l[e],i=parseFloat(r[e])||0,o=(parseFloat(n)-i)*a+i;return t[e]=o,t},{})),u.current=s,u.position=n,1===n&&(u.active=!1,u.complete=!0),(0,o.merge)(t,u)}return t},I=(t=Object.freeze({}),e)=>{switch(e.type){case a:return e.payload.ixInstances||Object.freeze({});case u:return Object.freeze({});case c:{const{instanceId:n,elementId:r,actionItem:i,eventId:a,eventTarget:u,eventStateKey:c,actionListId:s,groupIndex:l,isCarrier:f,origin:d,destination:p,immediate:E,verbose:v,continuous:m,parameterId:_,actionGroups:I,smoothing:b,restingValue:T,pluginInstance:O,pluginDuration:A,instanceDelay:w,skipMotion:S,skipToValue:N}=e.payload,{actionTypeId:R}=i,C=g(R),L=y(C,R),x=Object.keys(p).filter(t=>// Skip null destination values
null!=p[t]&&// Skip string destination values
"string"!=typeof p[t]),{easing:P}=i.config;return(0,o.set)(t,n,{id:n,elementId:r,active:!1,position:0,start:0,origin:d,destination:p,destinationKeys:x,immediate:E,verbose:v,current:null,actionItem:i,actionTypeId:R,eventId:a,eventTarget:u,eventStateKey:c,actionListId:s,groupIndex:l,renderType:C,isCarrier:f,styleProp:L,continuous:m,parameterId:_,actionGroups:I,smoothing:b,restingValue:T,pluginInstance:O,pluginDuration:A,instanceDelay:w,skipMotion:S,skipToValue:N,customEasingFn:Array.isArray(P)&&4===P.length?h(P):void 0})}case s:{const{instanceId:n,time:r}=e.payload;return(0,o.mergeIn)(t,[n],{active:!0,complete:!1,start:r})}case l:{const{instanceId:n}=e.payload;if(!t[n])return t;const r={},i=Object.keys(t),{length:o}=i;for(let e=0;e<o;e++){const o=i[e];o!==n&&(
// @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type. | TS2538 - Type 'undefined' cannot be used as an index type.
r[o]=t[o])}return r}case f:{let n=t;const r=Object.keys(t),{length:i}=r;for(let a=0;a<i;a++){const i=r[a],u=t[i],c=u.continuous?m:_;
// @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type.
// @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'Key'.
n=(0,o.set)(n,i,c(u,e))}return n}default:return t}}},1540:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"ixParameters",{enumerable:!0,get:function(){return u}});const r=n(7087),{IX2_RAW_DATA_IMPORTED:i,IX2_SESSION_STOPPED:o,IX2_PARAMETER_CHANGED:a}=r.IX2EngineActionTypes,u=(t={},e)=>{switch(e.type){case i:// @ts-expect-error - Further investigation is needed as looks like IX2_RAW_DATA_IMPORTED is never triggered with ixParameters
return e.payload.ixParameters||{};case o:return{};case a:{const{key:n,value:r}=e.payload;return t[n]=r,t}default:return t}}},7243:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return f}});const r=n(9516),i=n(4609),o=n(628),a=n(5862),u=n(9468),c=n(7718),s=n(1540),{ixElements:l}=u.IX2ElementsReducer,f=(0,r.combineReducers)({ixData:i.ixData,ixRequest:o.ixRequest,ixSession:a.ixSession,ixElements:l,ixInstances:c.ixInstances,ixParameters:s.ixParameters})},628:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"ixRequest",{enumerable:!0,get:function(){return f}});const r=n(7087),i=n(1185),{IX2_PREVIEW_REQUESTED:o,IX2_PLAYBACK_REQUESTED:a,IX2_STOP_REQUESTED:u,IX2_CLEAR_REQUESTED:c}=r.IX2EngineActionTypes,s={preview:{},playback:{},stop:{},clear:{}},l=Object.create(null,{[o]:{value:"preview"},[a]:{value:"playback"},[u]:{value:"stop"},[c]:{value:"clear"}}),f=(t=s,e)=>{if(e.type in l){const n=[l[e.type]];return(0,i.setIn)(t,[n],{...e.payload})}return t}},5862:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"ixSession",{enumerable:!0,get:function(){return g}});const r=n(7087),i=n(1185),{IX2_SESSION_INITIALIZED:o,IX2_SESSION_STARTED:a,IX2_TEST_FRAME_RENDERED:u,IX2_SESSION_STOPPED:c,IX2_EVENT_LISTENER_ADDED:s,IX2_EVENT_STATE_CHANGED:l,IX2_ANIMATION_FRAME_CHANGED:f,IX2_ACTION_LIST_PLAYBACK_CHANGED:d,IX2_VIEWPORT_WIDTH_CHANGED:p,IX2_MEDIA_QUERIES_DEFINED:h}=r.IX2EngineActionTypes,E={active:!1,tick:0,eventListeners:[],eventState:{},playbackState:{},viewportWidth:0,mediaQueryKey:null,hasBoundaryNodes:!1,hasDefinedMediaQueries:!1,reducedMotion:!1},v=20,g=(t=E,e)=>{switch(e.type){case o:{const{hasBoundaryNodes:n,reducedMotion:r}=e.payload;return(0,i.merge)(t,{hasBoundaryNodes:n,reducedMotion:r})}case a:return(0,i.set)(t,"active",!0);case u:{const{payload:{step:n=v}}=e;return(0,i.set)(t,"tick",t.tick+n)}case c:return E;case f:{const{payload:{now:n}}=e;return(0,i.set)(t,"tick",n)}case s:{const n=(0,i.addLast)(t.eventListeners,e.payload);return(0,i.set)(t,"eventListeners",n)}case l:{const{stateKey:n,newState:r}=e.payload;return(0,i.setIn)(t,["eventState",n],r)}case d:{const{actionListId:n,isPlaying:r}=e.payload;return(0,i.setIn)(t,["playbackState",n],r)}case p:{const{width:n,mediaQueries:r}=e.payload,o=r.length;let a=null;for(let t=0;t<o;t++){const{key:e,min:i,max:o}=r[t];if(n>=i&&n<=o){a=e;break}}return(0,i.merge)(t,{viewportWidth:n,mediaQueryKey:a})}case h:return(0,i.set)(t,"hasDefinedMediaQueries",!0);default:return t}}},7377:function(t,e){"use strict";
/* eslint-env browser */Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{clearPlugin:function(){return c},createPluginInstance:function(){return a},getPluginConfig:function(){return n},getPluginDestination:function(){return o},getPluginDuration:function(){return r},getPluginOrigin:function(){return i},renderPlugin:function(){return u}});const n=t=>t.value,r=(t,e)=>{if("auto"!==e.config.duration)return null;const n=parseFloat(t.getAttribute("data-duration"));return n>0?1e3*n:1e3*parseFloat(t.getAttribute("data-default-duration"))},i=t=>t||{value:0},o=t=>({value:t.value}),a=t=>{const e=window.Webflow.require("lottie");if(!e)return null;const n=e.createInstance(t);return n.stop(),n.setSubframe(!0),n},u=(t,e,n)=>{if(!t)return;const r=e[n.actionTypeId].value/100;t.goToFrame(t.frames*r)},c=t=>{const e=window.Webflow.require("lottie");e&&e.createInstance(t).stop()}},2570:function(t,e){"use strict";
/* eslint-env browser */Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{clearPlugin:function(){return l},createPluginInstance:function(){return c},getPluginConfig:function(){return i},getPluginDestination:function(){return u},getPluginDuration:function(){return o},getPluginOrigin:function(){return a},renderPlugin:function(){return s}});const n="--wf-rive-fit",r="--wf-rive-alignment",i=(t,e)=>t.value.inputs[e],o=()=>null,a=(t,e)=>{if(t)return t;const n={},{inputs:r={}}=e.config.value;for(const t in r)null==r[t]&&(n[t]=0);return n},u=t=>t.value.inputs??{},c=(t,e)=>{if((e.config?.target?.selectorGuids||[]).length>0)return t;
// In this case, we define pluginInstance as a reference to the container element
const n=e?.config?.target?.pluginElement;return n?(r=n,document.querySelector(`[data-w-id="${r}"]`)):null;var r},s=(t,{PLUGIN_RIVE:e},i)=>{const o=window.Webflow.require("rive");if(!o)return;const a=o.getInstance(t),u=o.rive.StateMachineInputType,{name:c,inputs:s={}}=i.config.value||{};function l(t){if(t.loaded)i();else{
// Render instance immediately on load and then clean up handler
const e=()=>{i(),t?.off("load",e)};t?.on("load",e)}function i(){const i=t.stateMachineInputs(c);if(null!=i){// set autoplay: false because IX engine is controlling playback.
if(// exit early since no inputs found
t.isPlaying||t.play(c,!1),n in s||r in s){const e=t.layout,i=s[n]??e.fit,o=s[r]??e.alignment;i===e.fit&&o===e.alignment||(t.layout=e.copyWith({fit:i,alignment:o}))}for(const t in s){if(t===n||t===r)continue;const o=i.find(e=>e.name===t);if(null!=o)switch(o.type){case u.Boolean:if(null!=s[t]){const e=Boolean(s[t]);o.value=e}break;case u.Number:{const n=e[t];null!=n&&(o.value=n);break}case u.Trigger:s[t]&&o.fire()}}}}}
// Render rive if the instance is available
a?.rive?l(a.rive):o.setLoadHandler(t,l)},l=(t,e)=>null},2866:function(t,e){"use strict";
/* eslint-env browser */Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{clearPlugin:function(){return s},createPluginInstance:function(){return u},getPluginConfig:function(){return n},getPluginDestination:function(){return a},getPluginDuration:function(){return r},getPluginOrigin:function(){return o},renderPlugin:function(){return c}});const n=(t,e)=>t.value[e],r=()=>null,i=Object.freeze({positionX:0,positionY:0,positionZ:0,rotationX:0,rotationY:0,rotationZ:0,scaleX:1,scaleY:1,scaleZ:1}),o=(t,e)=>{
// Determine which props we care about in the destination
const n=e.config.value,r=Object.keys(n);
// Check the current state for any missing origin props
if(t){const e=Object.keys(t),n=(o=e,r.filter(t=>!o.includes(t)));
// If new props are needed, merge new origin values with current state
return n.length?n.reduce((t,e)=>(t[e]=i[e],t),t):t;
// No difference, return current state
}
// State doesn't exist so define new origin based on destination
var o;return r.reduce((t,e)=>(t[e]=i[e],t),{})},a=t=>t.value,u=(t,e)=>{
// In this case, we define pluginInstance as a reference to the container element
const n=e?.config?.target?.pluginElement;return n?(r=n,document.querySelector(`[data-w-id="${r}"]`)):null;var r},c=(t,e,n)=>{const r=window.Webflow.require("spline");if(!r)return;const i=r.getInstance(t),o=n.config.target.objectId,a=t=>{if(!t)throw new Error("Invalid spline app passed to renderSpline");const n=o&&t.findObjectById(o);if(!n)return;const{PLUGIN_SPLINE:r}=e;null!=r.positionX&&(n.position.x=r.positionX),null!=r.positionY&&(n.position.y=r.positionY),null!=r.positionZ&&(n.position.z=r.positionZ),null!=r.rotationX&&(n.rotation.x=r.rotationX),null!=r.rotationY&&(n.rotation.y=r.rotationY),null!=r.rotationZ&&(n.rotation.z=r.rotationZ),null!=r.scaleX&&(n.scale.x=r.scaleX),null!=r.scaleY&&(n.scale.y=r.scaleY),null!=r.scaleZ&&(n.scale.z=r.scaleZ)};i?
// Render spline if the app instance is already loaded
a(i.spline):
// Otherwise, store latest render as a callback to fire when loaded
r.setLoadHandler(t,a)},s=()=>null},1407:function(t,e,n){"use strict";
/* eslint-env browser */ // Importing directly to avoid importing the entire shared-utils package.
// eslint-disable-next-line webflow/package-boundaries
Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{clearPlugin:function(){return f},createPluginInstance:function(){return c},getPluginConfig:function(){return i},getPluginDestination:function(){return u},getPluginDuration:function(){return o},getPluginOrigin:function(){return a},renderPlugin:function(){return l}});const r=n(380),i=(t,e)=>t.value[e],o=()=>null,a=(t,e)=>{if(t)return t;
// Determine which props we care about in the destination
const n=e.config.value,i=e.config.target.objectId,o=getComputedStyle(document.documentElement).getPropertyValue(i);
// Look up root variable to parse origin values
return null!=n.size?{size:parseInt(o,10)}:"%"===n.unit||"-"===n.unit?{size:parseFloat(o)}:null!=n.red&&null!=n.green&&null!=n.blue?(0,r.normalizeColor)(o):void 0},u=t=>t.value,c=()=>null,s={color:{match:({red:t,green:e,blue:n,alpha:r})=>[t,e,n,r].every(t=>null!=t),getValue:({red:t,green:e,blue:n,alpha:r})=>`rgba(${t}, ${e}, ${n}, ${r})`},
// Size, Percentage, and Unitless variables.
size:{match:({size:t})=>null!=t,getValue:({size:t},e)=>"-"===e?t:`${t}${e}`}},l=(t,e,n)=>{const{target:{objectId:r},value:{unit:i}}=n.config,o=e.PLUGIN_VARIABLE,a=Object.values(s).find(t=>t.match(o,i));a&&document.documentElement.style.setProperty(r,a.getValue(o,i))},f=(t,e)=>{const n=e.config.target.objectId;document.documentElement.style.removeProperty(n)}},3690:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"pluginMethodMap",{enumerable:!0,get:function(){return l}});const r=n(7087),i=s(n(7377)),o=s(n(2866)),a=s(n(2570)),u=s(n(1407));function c(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(c=function(t){return t?n:e})(t)}function s(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=c(e);if(n&&n.has(t))return n.get(t);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var a=i?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=t[o]}return r.default=t,n&&n.set(t,r),r}const l=new Map([[r.ActionTypeConsts.PLUGIN_LOTTIE,{...i}],[r.ActionTypeConsts.PLUGIN_SPLINE,{...o}],[r.ActionTypeConsts.PLUGIN_RIVE,{...a}],[r.ActionTypeConsts.PLUGIN_VARIABLE,{...u}]]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3BsdWdpbnMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBY3Rpb25UeXBlQ29uc3RzfSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvc2hhcmVkLWNvbnN0YW50cyc7XG5cbmltcG9ydCAqIGFzIGxvdHRpZSBmcm9tICcuL0lYMkxvdHRpZSc7XG5pbXBvcnQgKiBhcyBzcGxpbmUgZnJvbSAnLi9JWDJTcGxpbmUnO1xuaW1wb3J0ICogYXMgcml2ZSBmcm9tICcuL0lYMlJpdmUnO1xuaW1wb3J0ICogYXMgdmFyaWFibGUgZnJvbSAnLi9JWDJWYXJpYWJsZSc7XG5cbmV4cG9ydCB0eXBlIFBsdWdpblR5cGUgPVxuICB8IHR5cGVvZiBBY3Rpb25UeXBlQ29uc3RzLlBMVUdJTl9MT1RUSUVcbiAgfCB0eXBlb2YgQWN0aW9uVHlwZUNvbnN0cy5QTFVHSU5fU1BMSU5FXG4gIHwgdHlwZW9mIEFjdGlvblR5cGVDb25zdHMuUExVR0lOX1ZBUklBQkxFXG4gIHwgdHlwZW9mIEFjdGlvblR5cGVDb25zdHMuUExVR0lOX1JJVkU7XG5cbmV4cG9ydCBjb25zdCBwbHVnaW5NZXRob2RNYXAgPSBuZXcgTWFwKFtcbiAgW0FjdGlvblR5cGVDb25zdHMuUExVR0lOX0xPVFRJRSwgey4uLmxvdHRpZX1dLFxuICBbQWN0aW9uVHlwZUNvbnN0cy5QTFVHSU5fU1BMSU5FLCB7Li4uc3BsaW5lfV0sXG4gIFtBY3Rpb25UeXBlQ29uc3RzLlBMVUdJTl9SSVZFLCB7Li4ucml2ZX1dLFxuICBbQWN0aW9uVHlwZUNvbnN0cy5QTFVHSU5fVkFSSUFCTEUsIHsuLi52YXJpYWJsZX1dLFxuXSk7XG4iXSwibmFtZXMiOlsicGx1Z2luTWV0aG9kTWFwIiwiTWFwIiwiQWN0aW9uVHlwZUNvbnN0cyIsIlBMVUdJTl9MT1RUSUUiLCJsb3R0aWUiLCJQTFVHSU5fU1BMSU5FIiwic3BsaW5lIiwiUExVR0lOX1JJVkUiLCJyaXZlIiwiUExVR0lOX1ZBUklBQkxFIiwidmFyaWFibGUiXSwibWFwcGluZ3MiOiI7Ozs7K0JBYWFBOzs7ZUFBQUE7OztpQ0Fia0I7bUVBRVA7bUVBQ0E7aUVBQ0Y7cUVBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuQixNQUFNQSxrQkFBa0IsSUFBSUMsSUFBSTtJQUNyQztRQUFDQyxpQ0FBZ0IsQ0FBQ0MsYUFBYTtRQUFFO1lBQUMsR0FBR0MsVUFBTTtRQUFBO0tBQUU7SUFDN0M7UUFBQ0YsaUNBQWdCLENBQUNHLGFBQWE7UUFBRTtZQUFDLEdBQUdDLFVBQU07UUFBQTtLQUFFO0lBQzdDO1FBQUNKLGlDQUFnQixDQUFDSyxXQUFXO1FBQUU7WUFBQyxHQUFHQyxRQUFJO1FBQUE7S0FBRTtJQUN6QztRQUFDTixpQ0FBZ0IsQ0FBQ08sZUFBZTtRQUFFO1lBQUMsR0FBR0MsWUFBUTtRQUFBO0tBQUU7Q0FDbEQifQ==
},8023:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{IX2_ACTION_LIST_PLAYBACK_CHANGED:function(){return y},IX2_ANIMATION_FRAME_CHANGED:function(){return d},IX2_CLEAR_REQUESTED:function(){return s},IX2_ELEMENT_STATE_CHANGED:function(){return g},IX2_EVENT_LISTENER_ADDED:function(){return l},IX2_EVENT_STATE_CHANGED:function(){return f},IX2_INSTANCE_ADDED:function(){return h},IX2_INSTANCE_REMOVED:function(){return v},IX2_INSTANCE_STARTED:function(){return E},IX2_MEDIA_QUERIES_DEFINED:function(){return _},IX2_PARAMETER_CHANGED:function(){return p},IX2_PLAYBACK_REQUESTED:function(){return u},IX2_PREVIEW_REQUESTED:function(){return a},IX2_RAW_DATA_IMPORTED:function(){return n},IX2_SESSION_INITIALIZED:function(){return r},IX2_SESSION_STARTED:function(){return i},IX2_SESSION_STOPPED:function(){return o},IX2_STOP_REQUESTED:function(){return c},IX2_TEST_FRAME_RENDERED:function(){return I},IX2_VIEWPORT_WIDTH_CHANGED:function(){return m}});const n="IX2_RAW_DATA_IMPORTED",r="IX2_SESSION_INITIALIZED",i="IX2_SESSION_STARTED",o="IX2_SESSION_STOPPED",a="IX2_PREVIEW_REQUESTED",u="IX2_PLAYBACK_REQUESTED",c="IX2_STOP_REQUESTED",s="IX2_CLEAR_REQUESTED",l="IX2_EVENT_LISTENER_ADDED",f="IX2_EVENT_STATE_CHANGED",d="IX2_ANIMATION_FRAME_CHANGED",p="IX2_PARAMETER_CHANGED",h="IX2_INSTANCE_ADDED",E="IX2_INSTANCE_STARTED",v="IX2_INSTANCE_REMOVED",g="IX2_ELEMENT_STATE_CHANGED",y="IX2_ACTION_LIST_PLAYBACK_CHANGED",m="IX2_VIEWPORT_WIDTH_CHANGED",_="IX2_MEDIA_QUERIES_DEFINED",I="IX2_TEST_FRAME_RENDERED"},2686:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{AUTO:function(){return X},BACKGROUND:function(){return D},BACKGROUND_COLOR:function(){return F},BAR_DELIMITER:function(){return z},BORDER_COLOR:function(){return j},BOUNDARY_SELECTOR:function(){return a},CHILDREN:function(){return H},COLON_DELIMITER:function(){return W},COLOR:function(){return k},COMMA_DELIMITER:function(){return B},CONFIG_UNIT:function(){return h},CONFIG_VALUE:function(){return l},CONFIG_X_UNIT:function(){return f},CONFIG_X_VALUE:function(){return u},CONFIG_Y_UNIT:function(){return d},CONFIG_Y_VALUE:function(){return c},CONFIG_Z_UNIT:function(){return p},CONFIG_Z_VALUE:function(){return s},DISPLAY:function(){return G},EXPRESSION_ELEMENT:function(){return J},FILTER:function(){return L},FLEX:function(){return V},FONT_VARIATION_SETTINGS:function(){return x},HEIGHT:function(){return M},HTML_ELEMENT:function(){return q},IMMEDIATE_CHILDREN:function(){return $},IX2_ID_DELIMITER:function(){return n},OPACITY:function(){return C},PARENT:function(){return K},PLAIN_OBJECT:function(){return Z},PRESERVE_3D:function(){return Q},RENDER_GENERAL:function(){return et},RENDER_PLUGIN:function(){return rt},RENDER_STYLE:function(){return nt},RENDER_TRANSFORM:function(){return tt},ROTATE_X:function(){return O},ROTATE_Y:function(){return A},ROTATE_Z:function(){return w},SCALE_3D:function(){return T},SCALE_X:function(){return _},SCALE_Y:function(){return I},SCALE_Z:function(){return b},SIBLINGS:function(){return Y},SKEW:function(){return S},SKEW_X:function(){return N},SKEW_Y:function(){return R},TRANSFORM:function(){return E},TRANSLATE_3D:function(){return m},TRANSLATE_X:function(){return v},TRANSLATE_Y:function(){return g},TRANSLATE_Z:function(){return y},WF_PAGE:function(){return r},WIDTH:function(){return P},WILL_CHANGE:function(){return U},W_MOD_IX:function(){return o},W_MOD_JS:function(){return i}});const n="|",r="data-wf-page",i="w-mod-js",o="w-mod-ix",a=".w-dyn-item",u="xValue",c="yValue",s="zValue",l="value",f="xUnit",d="yUnit",p="zUnit",h="unit",E="transform",v="translateX",g="translateY",y="translateZ",m="translate3d",_="scaleX",I="scaleY",b="scaleZ",T="scale3d",O="rotateX",A="rotateY",w="rotateZ",S="skew",N="skewX",R="skewY",C="opacity",L="filter",x="font-variation-settings",P="width",M="height",F="backgroundColor",D="background",j="borderColor",k="color",G="display",V="flex",U="willChange",X="AUTO",B=",",W=":",z="|",H="CHILDREN",$="IMMEDIATE_CHILDREN",Y="SIBLINGS",K="PARENT",Q="preserve-3d",q="HTML_ELEMENT",Z="PLAIN_OBJECT",J="EXPRESSION_ELEMENT",tt="RENDER_TRANSFORM",et="RENDER_GENERAL",nt="RENDER_STYLE",rt="RENDER_PLUGIN"},262:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{ActionAppliesTo:function(){return r},ActionTypeConsts:function(){return n}});const n={TRANSFORM_MOVE:"TRANSFORM_MOVE",TRANSFORM_SCALE:"TRANSFORM_SCALE",TRANSFORM_ROTATE:"TRANSFORM_ROTATE",TRANSFORM_SKEW:"TRANSFORM_SKEW",STYLE_OPACITY:"STYLE_OPACITY",STYLE_SIZE:"STYLE_SIZE",STYLE_FILTER:"STYLE_FILTER",STYLE_FONT_VARIATION:"STYLE_FONT_VARIATION",STYLE_BACKGROUND_COLOR:"STYLE_BACKGROUND_COLOR",STYLE_BORDER:"STYLE_BORDER",STYLE_TEXT_COLOR:"STYLE_TEXT_COLOR",OBJECT_VALUE:"OBJECT_VALUE",PLUGIN_LOTTIE:"PLUGIN_LOTTIE",PLUGIN_SPLINE:"PLUGIN_SPLINE",PLUGIN_RIVE:"PLUGIN_RIVE",PLUGIN_VARIABLE:"PLUGIN_VARIABLE",GENERAL_DISPLAY:"GENERAL_DISPLAY",GENERAL_START_ACTION:"GENERAL_START_ACTION",GENERAL_CONTINUOUS_ACTION:"GENERAL_CONTINUOUS_ACTION",
// TODO: Clean these up below because they're not used at this time
GENERAL_COMBO_CLASS:"GENERAL_COMBO_CLASS",GENERAL_STOP_ACTION:"GENERAL_STOP_ACTION",GENERAL_LOOP:"GENERAL_LOOP",STYLE_BOX_SHADOW:"STYLE_BOX_SHADOW"},r={ELEMENT:"ELEMENT",ELEMENT_CLASS:"ELEMENT_CLASS",TRIGGER_ELEMENT:"TRIGGER_ELEMENT"}},7087:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{ActionTypeConsts:function(){return i.ActionTypeConsts},IX2EngineActionTypes:function(){return o},IX2EngineConstants:function(){return a},QuickEffectIds:function(){return r.QuickEffectIds}});const r=u(n(1833),e),i=u(n(262),e);u(n(8704),e),u(n(3213),e);const o=s(n(8023)),a=s(n(2686));function u(t,e){return Object.keys(t).forEach(function(n){"default"===n||Object.prototype.hasOwnProperty.call(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})}),t}function c(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(c=function(t){return t?n:e})(t)}function s(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=c(e);if(n&&n.has(t))return n.get(t);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var a=i?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=t[o]}return r.default=t,n&&n.set(t,r),r}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC1jb25zdGFudHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSAnLi90cmlnZ2VyLWV2ZW50cyc7XG5leHBvcnQgKiBmcm9tICcuL2FuaW1hdGlvbi1hY3Rpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vdHJpZ2dlci1pbnRlcmFjdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9yZWR1Y2VkLW1vdGlvbic7XG5cbmltcG9ydCAqIGFzIElYMkVuZ2luZUFjdGlvblR5cGVzIGZyb20gJy4vSVgyRW5naW5lQWN0aW9uVHlwZXMnO1xuaW1wb3J0ICogYXMgSVgyRW5naW5lQ29uc3RhbnRzIGZyb20gJy4vSVgyRW5naW5lQ29uc3RhbnRzJztcbmV4cG9ydCB7SVgyRW5naW5lQWN0aW9uVHlwZXMsIElYMkVuZ2luZUNvbnN0YW50c307XG5cbmV4cG9ydCB7QWN0aW9uVHlwZUNvbnN0c30gZnJvbSAnLi9hbmltYXRpb24tYWN0aW9ucyc7XG5leHBvcnQge1F1aWNrRWZmZWN0SWRzfSBmcm9tICcuL3RyaWdnZXItZXZlbnRzJztcbiJdLCJuYW1lcyI6WyJBY3Rpb25UeXBlQ29uc3RzIiwiSVgyRW5naW5lQWN0aW9uVHlwZXMiLCJJWDJFbmdpbmVDb25zdGFudHMiLCJRdWlja0VmZmVjdElkcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFTUUEsZ0JBQWdCO2VBQWhCQSxrQ0FBZ0I7O0lBRmhCQyxvQkFBb0I7ZUFBcEJBOztJQUFzQkMsa0JBQWtCO2VBQWxCQTs7SUFHdEJDLGNBQWM7ZUFBZEEsNkJBQWM7Ozs0Q0FWUjsrQ0FDQTtxQkFDQTtxQkFDQTs4RUFFd0I7NEVBQ0YifQ==
},3213:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"ReducedMotionTypes",{enumerable:!0,get:function(){return f}});const r=n(262),{TRANSFORM_MOVE:i,TRANSFORM_SCALE:o,TRANSFORM_ROTATE:a,TRANSFORM_SKEW:u,STYLE_SIZE:c,STYLE_FILTER:s,STYLE_FONT_VARIATION:l}=r.ActionTypeConsts,f={[i]:!0,[o]:!0,[a]:!0,[u]:!0,[c]:!0,[s]:!0,[l]:!0}},1833:function(t,e){"use strict";
/**
 * Event Type IDs
 */Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{EventAppliesTo:function(){return r},EventBasedOn:function(){return i},EventContinuousMouseAxes:function(){return o},EventLimitAffectedElements:function(){return a},EventTypeConsts:function(){return n},QuickEffectDirectionConsts:function(){return c},QuickEffectIds:function(){return u}});const n={NAVBAR_OPEN:"NAVBAR_OPEN",NAVBAR_CLOSE:"NAVBAR_CLOSE",TAB_ACTIVE:"TAB_ACTIVE",TAB_INACTIVE:"TAB_INACTIVE",SLIDER_ACTIVE:"SLIDER_ACTIVE",SLIDER_INACTIVE:"SLIDER_INACTIVE",DROPDOWN_OPEN:"DROPDOWN_OPEN",DROPDOWN_CLOSE:"DROPDOWN_CLOSE",MOUSE_CLICK:"MOUSE_CLICK",MOUSE_SECOND_CLICK:"MOUSE_SECOND_CLICK",MOUSE_DOWN:"MOUSE_DOWN",MOUSE_UP:"MOUSE_UP",MOUSE_OVER:"MOUSE_OVER",MOUSE_OUT:"MOUSE_OUT",MOUSE_MOVE:"MOUSE_MOVE",MOUSE_MOVE_IN_VIEWPORT:"MOUSE_MOVE_IN_VIEWPORT",SCROLL_INTO_VIEW:"SCROLL_INTO_VIEW",SCROLL_OUT_OF_VIEW:"SCROLL_OUT_OF_VIEW",SCROLLING_IN_VIEW:"SCROLLING_IN_VIEW",ECOMMERCE_CART_OPEN:"ECOMMERCE_CART_OPEN",ECOMMERCE_CART_CLOSE:"ECOMMERCE_CART_CLOSE",PAGE_START:"PAGE_START",PAGE_FINISH:"PAGE_FINISH",PAGE_SCROLL_UP:"PAGE_SCROLL_UP",PAGE_SCROLL_DOWN:"PAGE_SCROLL_DOWN",PAGE_SCROLL:"PAGE_SCROLL"},r={ELEMENT:"ELEMENT",CLASS:"CLASS",PAGE:"PAGE"},i={ELEMENT:"ELEMENT",VIEWPORT:"VIEWPORT"},o={X_AXIS:"X_AXIS",Y_AXIS:"Y_AXIS"},a={CHILDREN:"CHILDREN",SIBLINGS:"SIBLINGS",IMMEDIATE_CHILDREN:"IMMEDIATE_CHILDREN"},u={FADE_EFFECT:"FADE_EFFECT",SLIDE_EFFECT:"SLIDE_EFFECT",GROW_EFFECT:"GROW_EFFECT",SHRINK_EFFECT:"SHRINK_EFFECT",SPIN_EFFECT:"SPIN_EFFECT",FLY_EFFECT:"FLY_EFFECT",POP_EFFECT:"POP_EFFECT",FLIP_EFFECT:"FLIP_EFFECT",JIGGLE_EFFECT:"JIGGLE_EFFECT",PULSE_EFFECT:"PULSE_EFFECT",DROP_EFFECT:"DROP_EFFECT",BLINK_EFFECT:"BLINK_EFFECT",BOUNCE_EFFECT:"BOUNCE_EFFECT",FLIP_LEFT_TO_RIGHT_EFFECT:"FLIP_LEFT_TO_RIGHT_EFFECT",FLIP_RIGHT_TO_LEFT_EFFECT:"FLIP_RIGHT_TO_LEFT_EFFECT",RUBBER_BAND_EFFECT:"RUBBER_BAND_EFFECT",JELLO_EFFECT:"JELLO_EFFECT",GROW_BIG_EFFECT:"GROW_BIG_EFFECT",SHRINK_BIG_EFFECT:"SHRINK_BIG_EFFECT",PLUGIN_LOTTIE_EFFECT:"PLUGIN_LOTTIE_EFFECT"},c={LEFT:"LEFT",RIGHT:"RIGHT",BOTTOM:"BOTTOM",TOP:"TOP",BOTTOM_LEFT:"BOTTOM_LEFT",BOTTOM_RIGHT:"BOTTOM_RIGHT",TOP_RIGHT:"TOP_RIGHT",TOP_LEFT:"TOP_LEFT",CLOCKWISE:"CLOCKWISE",COUNTER_CLOCKWISE:"COUNTER_CLOCKWISE"}},8704:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"InteractionTypeConsts",{enumerable:!0,get:function(){return n}});const n={MOUSE_CLICK_INTERACTION:"MOUSE_CLICK_INTERACTION",MOUSE_HOVER_INTERACTION:"MOUSE_HOVER_INTERACTION",MOUSE_MOVE_INTERACTION:"MOUSE_MOVE_INTERACTION",SCROLL_INTO_VIEW_INTERACTION:"SCROLL_INTO_VIEW_INTERACTION",SCROLLING_IN_VIEW_INTERACTION:"SCROLLING_IN_VIEW_INTERACTION",MOUSE_MOVE_IN_VIEWPORT_INTERACTION:"MOUSE_MOVE_IN_VIEWPORT_INTERACTION",PAGE_IS_SCROLLING_INTERACTION:"PAGE_IS_SCROLLING_INTERACTION",PAGE_LOAD_INTERACTION:"PAGE_LOAD_INTERACTION",PAGE_SCROLLED_INTERACTION:"PAGE_SCROLLED_INTERACTION",NAVBAR_INTERACTION:"NAVBAR_INTERACTION",DROPDOWN_INTERACTION:"DROPDOWN_INTERACTION",ECOMMERCE_CART_INTERACTION:"ECOMMERCE_CART_INTERACTION",TAB_INTERACTION:"TAB_INTERACTION",SLIDER_INTERACTION:"SLIDER_INTERACTION"};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC1jb25zdGFudHMvdHJpZ2dlci1pbnRlcmFjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEludGVyYWN0aW9uVHlwZUNvbnN0cyA9IHtcbiAgTU9VU0VfQ0xJQ0tfSU5URVJBQ1RJT046ICdNT1VTRV9DTElDS19JTlRFUkFDVElPTicgYXMgY29uc3QsXG4gIE1PVVNFX0hPVkVSX0lOVEVSQUNUSU9OOiAnTU9VU0VfSE9WRVJfSU5URVJBQ1RJT04nIGFzIGNvbnN0LFxuICBNT1VTRV9NT1ZFX0lOVEVSQUNUSU9OOiAnTU9VU0VfTU9WRV9JTlRFUkFDVElPTicgYXMgY29uc3QsXG4gIFNDUk9MTF9JTlRPX1ZJRVdfSU5URVJBQ1RJT046ICdTQ1JPTExfSU5UT19WSUVXX0lOVEVSQUNUSU9OJyBhcyBjb25zdCxcbiAgU0NST0xMSU5HX0lOX1ZJRVdfSU5URVJBQ1RJT046ICdTQ1JPTExJTkdfSU5fVklFV19JTlRFUkFDVElPTicgYXMgY29uc3QsXG4gIE1PVVNFX01PVkVfSU5fVklFV1BPUlRfSU5URVJBQ1RJT046XG4gICAgJ01PVVNFX01PVkVfSU5fVklFV1BPUlRfSU5URVJBQ1RJT04nIGFzIGNvbnN0LFxuICBQQUdFX0lTX1NDUk9MTElOR19JTlRFUkFDVElPTjogJ1BBR0VfSVNfU0NST0xMSU5HX0lOVEVSQUNUSU9OJyBhcyBjb25zdCxcbiAgUEFHRV9MT0FEX0lOVEVSQUNUSU9OOiAnUEFHRV9MT0FEX0lOVEVSQUNUSU9OJyBhcyBjb25zdCxcbiAgUEFHRV9TQ1JPTExFRF9JTlRFUkFDVElPTjogJ1BBR0VfU0NST0xMRURfSU5URVJBQ1RJT04nIGFzIGNvbnN0LFxuICBOQVZCQVJfSU5URVJBQ1RJT046ICdOQVZCQVJfSU5URVJBQ1RJT04nIGFzIGNvbnN0LFxuICBEUk9QRE9XTl9JTlRFUkFDVElPTjogJ0RST1BET1dOX0lOVEVSQUNUSU9OJyBhcyBjb25zdCxcbiAgRUNPTU1FUkNFX0NBUlRfSU5URVJBQ1RJT046ICdFQ09NTUVSQ0VfQ0FSVF9JTlRFUkFDVElPTicgYXMgY29uc3QsXG4gIFRBQl9JTlRFUkFDVElPTjogJ1RBQl9JTlRFUkFDVElPTicgYXMgY29uc3QsXG4gIFNMSURFUl9JTlRFUkFDVElPTjogJ1NMSURFUl9JTlRFUkFDVElPTicgYXMgY29uc3QsXG59IGFzIGNvbnN0O1xuIl0sIm5hbWVzIjpbIkludGVyYWN0aW9uVHlwZUNvbnN0cyIsIk1PVVNFX0NMSUNLX0lOVEVSQUNUSU9OIiwiTU9VU0VfSE9WRVJfSU5URVJBQ1RJT04iLCJNT1VTRV9NT1ZFX0lOVEVSQUNUSU9OIiwiU0NST0xMX0lOVE9fVklFV19JTlRFUkFDVElPTiIsIlNDUk9MTElOR19JTl9WSUVXX0lOVEVSQUNUSU9OIiwiTU9VU0VfTU9WRV9JTl9WSUVXUE9SVF9JTlRFUkFDVElPTiIsIlBBR0VfSVNfU0NST0xMSU5HX0lOVEVSQUNUSU9OIiwiUEFHRV9MT0FEX0lOVEVSQUNUSU9OIiwiUEFHRV9TQ1JPTExFRF9JTlRFUkFDVElPTiIsIk5BVkJBUl9JTlRFUkFDVElPTiIsIkRST1BET1dOX0lOVEVSQUNUSU9OIiwiRUNPTU1FUkNFX0NBUlRfSU5URVJBQ1RJT04iLCJUQUJfSU5URVJBQ1RJT04iLCJTTElERVJfSU5URVJBQ1RJT04iXSwibWFwcGluZ3MiOiI7Ozs7K0JBQWFBOzs7ZUFBQUE7OztBQUFOLE1BQU1BLHdCQUF3QjtJQUNuQ0MseUJBQXlCO0lBQ3pCQyx5QkFBeUI7SUFDekJDLHdCQUF3QjtJQUN4QkMsOEJBQThCO0lBQzlCQywrQkFBK0I7SUFDL0JDLG9DQUNFO0lBQ0ZDLCtCQUErQjtJQUMvQkMsdUJBQXVCO0lBQ3ZCQywyQkFBMkI7SUFDM0JDLG9CQUFvQjtJQUNwQkMsc0JBQXNCO0lBQ3RCQyw0QkFBNEI7SUFDNUJDLGlCQUFpQjtJQUNqQkMsb0JBQW9CO0FBQ3RCIn0=
},380:function(t,e){"use strict";
// Big List of Colors
// ------------------
// <https://www.w3.org/TR/css-color-4/#named-colors>
Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"normalizeColor",{enumerable:!0,get:function(){return r}});const n={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",green:"#008000",greenyellow:"#ADFF2F",grey:"#808080",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"};function r(t){let e,r,i,o=1;// Default alpha to 1
const a=t.replace(/\s/g,"").toLowerCase(),u=("string"==typeof n[a]?n[a].toLowerCase():null)||a;if(u.startsWith("#")){const t=u.substring(1);3===t.length||4===t.length?(e=parseInt(t[0]+t[0],16),r=parseInt(t[1]+t[1],16),i=parseInt(t[2]+t[2],16),4===t.length&&(o=parseInt(t[3]+t[3],16)/255)):6!==t.length&&8!==t.length||(e=parseInt(t.substring(0,2),16),r=parseInt(t.substring(2,4),16),i=parseInt(t.substring(4,6),16),8===t.length&&(o=parseInt(t.substring(6,8),16)/255))}else if(u.startsWith("rgba")){const t=u.match(/rgba\(([^)]+)\)/)[1].split(",");e=parseInt(t[0],10),r=parseInt(t[1],10),i=parseInt(t[2],10),o=parseFloat(t[3])}else if(u.startsWith("rgb")){const t=u.match(/rgb\(([^)]+)\)/)[1].split(",");e=parseInt(t[0],10),r=parseInt(t[1],10),i=parseInt(t[2],10)}else if(u.startsWith("hsla")){const t=u.match(/hsla\(([^)]+)\)/)[1].split(","),n=parseFloat(t[0]),a=parseFloat(t[1].replace("%",""))/100,c=parseFloat(t[2].replace("%",""))/100;o=parseFloat(t[3]);
// Convert HSL to RGB
const s=(1-Math.abs(2*c-1))*a,l=s*(1-Math.abs(n/60%2-1)),f=c-s/2;let d,p,h;n>=0&&n<60?(d=s,p=l,h=0):n>=60&&n<120?(d=l,p=s,h=0):n>=120&&n<180?(d=0,p=s,h=l):n>=180&&n<240?(d=0,p=l,h=s):n>=240&&n<300?(d=l,p=0,h=s):(d=s,p=0,h=l),e=Math.round(255*(d+f)),r=Math.round(255*(p+f)),i=Math.round(255*(h+f))}else if(u.startsWith("hsl")){const t=u.match(/hsl\(([^)]+)\)/)[1].split(","),n=parseFloat(t[0]),o=parseFloat(t[1].replace("%",""))/100,a=parseFloat(t[2].replace("%",""))/100,c=(1-Math.abs(2*a-1))*o,s=c*(1-Math.abs(n/60%2-1)),l=a-c/2;let f,d,p;n>=0&&n<60?(f=c,d=s,p=0):n>=60&&n<120?(f=s,d=c,p=0):n>=120&&n<180?(f=0,d=c,p=s):n>=180&&n<240?(f=0,d=s,p=c):n>=240&&n<300?(f=s,d=0,p=c):(f=c,d=0,p=s),e=Math.round(255*(f+l)),r=Math.round(255*(d+l)),i=Math.round(255*(p+l))}if(Number.isNaN(e)||Number.isNaN(r)||Number.isNaN(i))throw new Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${t}'`);return{red:e,green:r,blue:i,alpha:o}}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC11dGlscy9ub3JtYWxpemVDb2xvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCaWcgTGlzdCBvZiBDb2xvcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gPGh0dHBzOi8vd3d3LnczLm9yZy9UUi9jc3MtY29sb3ItNC8jbmFtZWQtY29sb3JzPlxuY29uc3QgY29sb3JOYW1lc09iaiA9IHtcbiAgYWxpY2VibHVlOiAnI0YwRjhGRicsXG4gIGFudGlxdWV3aGl0ZTogJyNGQUVCRDcnLFxuICBhcXVhOiAnIzAwRkZGRicsXG4gIGFxdWFtYXJpbmU6ICcjN0ZGRkQ0JyxcbiAgYXp1cmU6ICcjRjBGRkZGJyxcbiAgYmVpZ2U6ICcjRjVGNURDJyxcbiAgYmlzcXVlOiAnI0ZGRTRDNCcsXG4gIGJsYWNrOiAnIzAwMDAwMCcsXG4gIGJsYW5jaGVkYWxtb25kOiAnI0ZGRUJDRCcsXG4gIGJsdWU6ICcjMDAwMEZGJyxcbiAgYmx1ZXZpb2xldDogJyM4QTJCRTInLFxuICBicm93bjogJyNBNTJBMkEnLFxuICBidXJseXdvb2Q6ICcjREVCODg3JyxcbiAgY2FkZXRibHVlOiAnIzVGOUVBMCcsXG4gIGNoYXJ0cmV1c2U6ICcjN0ZGRjAwJyxcbiAgY2hvY29sYXRlOiAnI0QyNjkxRScsXG4gIGNvcmFsOiAnI0ZGN0Y1MCcsXG4gIGNvcm5mbG93ZXJibHVlOiAnIzY0OTVFRCcsXG4gIGNvcm5zaWxrOiAnI0ZGRjhEQycsXG4gIGNyaW1zb246ICcjREMxNDNDJyxcbiAgY3lhbjogJyMwMEZGRkYnLFxuICBkYXJrYmx1ZTogJyMwMDAwOEInLFxuICBkYXJrY3lhbjogJyMwMDhCOEInLFxuICBkYXJrZ29sZGVucm9kOiAnI0I4ODYwQicsXG4gIGRhcmtncmF5OiAnI0E5QTlBOScsXG4gIGRhcmtncmVlbjogJyMwMDY0MDAnLFxuICBkYXJrZ3JleTogJyNBOUE5QTknLFxuICBkYXJra2hha2k6ICcjQkRCNzZCJyxcbiAgZGFya21hZ2VudGE6ICcjOEIwMDhCJyxcbiAgZGFya29saXZlZ3JlZW46ICcjNTU2QjJGJyxcbiAgZGFya29yYW5nZTogJyNGRjhDMDAnLFxuICBkYXJrb3JjaGlkOiAnIzk5MzJDQycsXG4gIGRhcmtyZWQ6ICcjOEIwMDAwJyxcbiAgZGFya3NhbG1vbjogJyNFOTk2N0EnLFxuICBkYXJrc2VhZ3JlZW46ICcjOEZCQzhGJyxcbiAgZGFya3NsYXRlYmx1ZTogJyM0ODNEOEInLFxuICBkYXJrc2xhdGVncmF5OiAnIzJGNEY0RicsXG4gIGRhcmtzbGF0ZWdyZXk6ICcjMkY0RjRGJyxcbiAgZGFya3R1cnF1b2lzZTogJyMwMENFRDEnLFxuICBkYXJrdmlvbGV0OiAnIzk0MDBEMycsXG4gIGRlZXBwaW5rOiAnI0ZGMTQ5MycsXG4gIGRlZXBza3libHVlOiAnIzAwQkZGRicsXG4gIGRpbWdyYXk6ICcjNjk2OTY5JyxcbiAgZGltZ3JleTogJyM2OTY5NjknLFxuICBkb2RnZXJibHVlOiAnIzFFOTBGRicsXG4gIGZpcmVicmljazogJyNCMjIyMjInLFxuICBmbG9yYWx3aGl0ZTogJyNGRkZBRjAnLFxuICBmb3Jlc3RncmVlbjogJyMyMjhCMjInLFxuICBmdWNoc2lhOiAnI0ZGMDBGRicsXG4gIGdhaW5zYm9ybzogJyNEQ0RDREMnLFxuICBnaG9zdHdoaXRlOiAnI0Y4RjhGRicsXG4gIGdvbGQ6ICcjRkZENzAwJyxcbiAgZ29sZGVucm9kOiAnI0RBQTUyMCcsXG4gIGdyYXk6ICcjODA4MDgwJyxcbiAgZ3JlZW46ICcjMDA4MDAwJyxcbiAgZ3JlZW55ZWxsb3c6ICcjQURGRjJGJyxcbiAgZ3JleTogJyM4MDgwODAnLFxuICBob25leWRldzogJyNGMEZGRjAnLFxuICBob3RwaW5rOiAnI0ZGNjlCNCcsXG4gIGluZGlhbnJlZDogJyNDRDVDNUMnLFxuICBpbmRpZ286ICcjNEIwMDgyJyxcbiAgaXZvcnk6ICcjRkZGRkYwJyxcbiAga2hha2k6ICcjRjBFNjhDJyxcbiAgbGF2ZW5kZXI6ICcjRTZFNkZBJyxcbiAgbGF2ZW5kZXJibHVzaDogJyNGRkYwRjUnLFxuICBsYXduZ3JlZW46ICcjN0NGQzAwJyxcbiAgbGVtb25jaGlmZm9uOiAnI0ZGRkFDRCcsXG4gIGxpZ2h0Ymx1ZTogJyNBREQ4RTYnLFxuICBsaWdodGNvcmFsOiAnI0YwODA4MCcsXG4gIGxpZ2h0Y3lhbjogJyNFMEZGRkYnLFxuICBsaWdodGdvbGRlbnJvZHllbGxvdzogJyNGQUZBRDInLFxuICBsaWdodGdyYXk6ICcjRDNEM0QzJyxcbiAgbGlnaHRncmVlbjogJyM5MEVFOTAnLFxuICBsaWdodGdyZXk6ICcjRDNEM0QzJyxcbiAgbGlnaHRwaW5rOiAnI0ZGQjZDMScsXG4gIGxpZ2h0c2FsbW9uOiAnI0ZGQTA3QScsXG4gIGxpZ2h0c2VhZ3JlZW46ICcjMjBCMkFBJyxcbiAgbGlnaHRza3libHVlOiAnIzg3Q0VGQScsXG4gIGxpZ2h0c2xhdGVncmF5OiAnIzc3ODg5OScsXG4gIGxpZ2h0c2xhdGVncmV5OiAnIzc3ODg5OScsXG4gIGxpZ2h0c3RlZWxibHVlOiAnI0IwQzRERScsXG4gIGxpZ2h0eWVsbG93OiAnI0ZGRkZFMCcsXG4gIGxpbWU6ICcjMDBGRjAwJyxcbiAgbGltZWdyZWVuOiAnIzMyQ0QzMicsXG4gIGxpbmVuOiAnI0ZBRjBFNicsXG4gIG1hZ2VudGE6ICcjRkYwMEZGJyxcbiAgbWFyb29uOiAnIzgwMDAwMCcsXG4gIG1lZGl1bWFxdWFtYXJpbmU6ICcjNjZDREFBJyxcbiAgbWVkaXVtYmx1ZTogJyMwMDAwQ0QnLFxuICBtZWRpdW1vcmNoaWQ6ICcjQkE1NUQzJyxcbiAgbWVkaXVtcHVycGxlOiAnIzkzNzBEQicsXG4gIG1lZGl1bXNlYWdyZWVuOiAnIzNDQjM3MScsXG4gIG1lZGl1bXNsYXRlYmx1ZTogJyM3QjY4RUUnLFxuICBtZWRpdW1zcHJpbmdncmVlbjogJyMwMEZBOUEnLFxuICBtZWRpdW10dXJxdW9pc2U6ICcjNDhEMUNDJyxcbiAgbWVkaXVtdmlvbGV0cmVkOiAnI0M3MTU4NScsXG4gIG1pZG5pZ2h0Ymx1ZTogJyMxOTE5NzAnLFxuICBtaW50Y3JlYW06ICcjRjVGRkZBJyxcbiAgbWlzdHlyb3NlOiAnI0ZGRTRFMScsXG4gIG1vY2Nhc2luOiAnI0ZGRTRCNScsXG4gIG5hdmFqb3doaXRlOiAnI0ZGREVBRCcsXG4gIG5hdnk6ICcjMDAwMDgwJyxcbiAgb2xkbGFjZTogJyNGREY1RTYnLFxuICBvbGl2ZTogJyM4MDgwMDAnLFxuICBvbGl2ZWRyYWI6ICcjNkI4RTIzJyxcbiAgb3JhbmdlOiAnI0ZGQTUwMCcsXG4gIG9yYW5nZXJlZDogJyNGRjQ1MDAnLFxuICBvcmNoaWQ6ICcjREE3MEQ2JyxcbiAgcGFsZWdvbGRlbnJvZDogJyNFRUU4QUEnLFxuICBwYWxlZ3JlZW46ICcjOThGQjk4JyxcbiAgcGFsZXR1cnF1b2lzZTogJyNBRkVFRUUnLFxuICBwYWxldmlvbGV0cmVkOiAnI0RCNzA5MycsXG4gIHBhcGF5YXdoaXA6ICcjRkZFRkQ1JyxcbiAgcGVhY2hwdWZmOiAnI0ZGREFCOScsXG4gIHBlcnU6ICcjQ0Q4NTNGJyxcbiAgcGluazogJyNGRkMwQ0InLFxuICBwbHVtOiAnI0REQTBERCcsXG4gIHBvd2RlcmJsdWU6ICcjQjBFMEU2JyxcbiAgcHVycGxlOiAnIzgwMDA4MCcsXG4gIHJlYmVjY2FwdXJwbGU6ICcjNjYzMzk5JyxcbiAgcmVkOiAnI0ZGMDAwMCcsXG4gIHJvc3licm93bjogJyNCQzhGOEYnLFxuICByb3lhbGJsdWU6ICcjNDE2OUUxJyxcbiAgc2FkZGxlYnJvd246ICcjOEI0NTEzJyxcbiAgc2FsbW9uOiAnI0ZBODA3MicsXG4gIHNhbmR5YnJvd246ICcjRjRBNDYwJyxcbiAgc2VhZ3JlZW46ICcjMkU4QjU3JyxcbiAgc2Vhc2hlbGw6ICcjRkZGNUVFJyxcbiAgc2llbm5hOiAnI0EwNTIyRCcsXG4gIHNpbHZlcjogJyNDMEMwQzAnLFxuICBza3libHVlOiAnIzg3Q0VFQicsXG4gIHNsYXRlYmx1ZTogJyM2QTVBQ0QnLFxuICBzbGF0ZWdyYXk6ICcjNzA4MDkwJyxcbiAgc2xhdGVncmV5OiAnIzcwODA5MCcsXG4gIHNub3c6ICcjRkZGQUZBJyxcbiAgc3ByaW5nZ3JlZW46ICcjMDBGRjdGJyxcbiAgc3RlZWxibHVlOiAnIzQ2ODJCNCcsXG4gIHRhbjogJyNEMkI0OEMnLFxuICB0ZWFsOiAnIzAwODA4MCcsXG4gIHRoaXN0bGU6ICcjRDhCRkQ4JyxcbiAgdG9tYXRvOiAnI0ZGNjM0NycsXG4gIHR1cnF1b2lzZTogJyM0MEUwRDAnLFxuICB2aW9sZXQ6ICcjRUU4MkVFJyxcbiAgd2hlYXQ6ICcjRjVERUIzJyxcbiAgd2hpdGU6ICcjRkZGRkZGJyxcbiAgd2hpdGVzbW9rZTogJyNGNUY1RjUnLFxuICB5ZWxsb3c6ICcjRkZGRjAwJyxcbiAgeWVsbG93Z3JlZW46ICcjOUFDRDMyJyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVDb2xvcihpbnB1dENvbG9yKSB7XG4gIGxldCByZWQ7XG4gIGxldCBncmVlbjtcbiAgbGV0IGJsdWU7XG4gIGxldCBhbHBoYSA9IDE7IC8vIERlZmF1bHQgYWxwaGEgdG8gMVxuICBjb25zdCByYXdDb2xvciA9IGlucHV0Q29sb3IucmVwbGFjZSgvXFxzL2csICcnKS50b0xvd2VyQ2FzZSgpO1xuICBjb25zdCBuYW1lZENvbG9yID1cbiAgICB0eXBlb2YgY29sb3JOYW1lc09ialtyYXdDb2xvcl0gPT09ICdzdHJpbmcnXG4gICAgICA/IGNvbG9yTmFtZXNPYmpbcmF3Q29sb3JdLnRvTG93ZXJDYXNlKClcbiAgICAgIDogbnVsbDtcbiAgY29uc3QgY2xlYW5Db2xvciA9IG5hbWVkQ29sb3IgfHwgcmF3Q29sb3I7XG5cbiAgaWYgKGNsZWFuQ29sb3Iuc3RhcnRzV2l0aCgnIycpKSB7XG4gICAgY29uc3QgaGV4ID0gY2xlYW5Db2xvci5zdWJzdHJpbmcoMSk7XG5cbiAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMyB8fCBoZXgubGVuZ3RoID09PSA0KSB7XG4gICAgICByZWQgPSBwYXJzZUludChoZXhbMF0gKyBoZXhbMF0sIDE2KTtcbiAgICAgIGdyZWVuID0gcGFyc2VJbnQoaGV4WzFdICsgaGV4WzFdLCAxNik7XG4gICAgICBibHVlID0gcGFyc2VJbnQoaGV4WzJdICsgaGV4WzJdLCAxNik7XG4gICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gNCkge1xuICAgICAgICBhbHBoYSA9IHBhcnNlSW50KGhleFszXSArIGhleFszXSwgMTYpIC8gMjU1O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoaGV4Lmxlbmd0aCA9PT0gNiB8fCBoZXgubGVuZ3RoID09PSA4KSB7XG4gICAgICByZWQgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDAsIDIpLCAxNik7XG4gICAgICBncmVlbiA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoMiwgNCksIDE2KTtcbiAgICAgIGJsdWUgPSBwYXJzZUludChoZXguc3Vic3RyaW5nKDQsIDYpLCAxNik7XG4gICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gOCkge1xuICAgICAgICBhbHBoYSA9IHBhcnNlSW50KGhleC5zdWJzdHJpbmcoNiwgOCksIDE2KSAvIDI1NTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoY2xlYW5Db2xvci5zdGFydHNXaXRoKCdyZ2JhJykpIHtcbiAgICBjb25zdCByZ2JhVmFsdWVzID0gY2xlYW5Db2xvci5tYXRjaCgvcmdiYVxcKChbXildKylcXCkvKVsxXS5zcGxpdCgnLCcpO1xuICAgIHJlZCA9IHBhcnNlSW50KHJnYmFWYWx1ZXNbMF0sIDEwKTtcbiAgICBncmVlbiA9IHBhcnNlSW50KHJnYmFWYWx1ZXNbMV0sIDEwKTtcbiAgICBibHVlID0gcGFyc2VJbnQocmdiYVZhbHVlc1syXSwgMTApO1xuICAgIGFscGhhID0gcGFyc2VGbG9hdChyZ2JhVmFsdWVzWzNdKTtcbiAgfSBlbHNlIGlmIChjbGVhbkNvbG9yLnN0YXJ0c1dpdGgoJ3JnYicpKSB7XG4gICAgY29uc3QgcmdiVmFsdWVzID0gY2xlYW5Db2xvci5tYXRjaCgvcmdiXFwoKFteKV0rKVxcKS8pWzFdLnNwbGl0KCcsJyk7XG4gICAgcmVkID0gcGFyc2VJbnQocmdiVmFsdWVzWzBdLCAxMCk7XG4gICAgZ3JlZW4gPSBwYXJzZUludChyZ2JWYWx1ZXNbMV0sIDEwKTtcbiAgICBibHVlID0gcGFyc2VJbnQocmdiVmFsdWVzWzJdLCAxMCk7XG4gIH0gZWxzZSBpZiAoY2xlYW5Db2xvci5zdGFydHNXaXRoKCdoc2xhJykpIHtcbiAgICBjb25zdCBoc2xhVmFsdWVzID0gY2xlYW5Db2xvci5tYXRjaCgvaHNsYVxcKChbXildKylcXCkvKVsxXS5zcGxpdCgnLCcpO1xuICAgIGNvbnN0IGggPSBwYXJzZUZsb2F0KGhzbGFWYWx1ZXNbMF0pO1xuICAgIGNvbnN0IHMgPSBwYXJzZUZsb2F0KGhzbGFWYWx1ZXNbMV0ucmVwbGFjZSgnJScsICcnKSkgLyAxMDA7XG4gICAgY29uc3QgbCA9IHBhcnNlRmxvYXQoaHNsYVZhbHVlc1syXS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcbiAgICBhbHBoYSA9IHBhcnNlRmxvYXQoaHNsYVZhbHVlc1szXSk7XG5cbiAgICAvLyBDb252ZXJ0IEhTTCB0byBSR0JcbiAgICBjb25zdCBDID0gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKSAqIHM7XG4gICAgY29uc3QgWCA9IEMgKiAoMSAtIE1hdGguYWJzKCgoaCAvIDYwKSAlIDIpIC0gMSkpO1xuICAgIGNvbnN0IG0gPSBsIC0gQyAvIDI7XG4gICAgbGV0IFI7XG4gICAgbGV0IEc7XG4gICAgbGV0IEI7XG5cbiAgICBpZiAoaCA+PSAwICYmIGggPCA2MCkge1xuICAgICAgUiA9IEM7XG4gICAgICBHID0gWDtcbiAgICAgIEIgPSAwO1xuICAgIH0gZWxzZSBpZiAoaCA+PSA2MCAmJiBoIDwgMTIwKSB7XG4gICAgICBSID0gWDtcbiAgICAgIEcgPSBDO1xuICAgICAgQiA9IDA7XG4gICAgfSBlbHNlIGlmIChoID49IDEyMCAmJiBoIDwgMTgwKSB7XG4gICAgICBSID0gMDtcbiAgICAgIEcgPSBDO1xuICAgICAgQiA9IFg7XG4gICAgfSBlbHNlIGlmIChoID49IDE4MCAmJiBoIDwgMjQwKSB7XG4gICAgICBSID0gMDtcbiAgICAgIEcgPSBYO1xuICAgICAgQiA9IEM7XG4gICAgfSBlbHNlIGlmIChoID49IDI0MCAmJiBoIDwgMzAwKSB7XG4gICAgICBSID0gWDtcbiAgICAgIEcgPSAwO1xuICAgICAgQiA9IEM7XG4gICAgfSBlbHNlIHtcbiAgICAgIFIgPSBDO1xuICAgICAgRyA9IDA7XG4gICAgICBCID0gWDtcbiAgICB9XG5cbiAgICByZWQgPSBNYXRoLnJvdW5kKChSICsgbSkgKiAyNTUpO1xuICAgIGdyZWVuID0gTWF0aC5yb3VuZCgoRyArIG0pICogMjU1KTtcbiAgICBibHVlID0gTWF0aC5yb3VuZCgoQiArIG0pICogMjU1KTtcbiAgfSBlbHNlIGlmIChjbGVhbkNvbG9yLnN0YXJ0c1dpdGgoJ2hzbCcpKSB7XG4gICAgY29uc3QgaHNsVmFsdWVzID0gY2xlYW5Db2xvci5tYXRjaCgvaHNsXFwoKFteKV0rKVxcKS8pWzFdLnNwbGl0KCcsJyk7XG4gICAgY29uc3QgaCA9IHBhcnNlRmxvYXQoaHNsVmFsdWVzWzBdKTtcbiAgICBjb25zdCBzID0gcGFyc2VGbG9hdChoc2xWYWx1ZXNbMV0ucmVwbGFjZSgnJScsICcnKSkgLyAxMDA7XG4gICAgY29uc3QgbCA9IHBhcnNlRmxvYXQoaHNsVmFsdWVzWzJdLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xuXG4gICAgLy8gQ29udmVydCBIU0wgdG8gUkdCICh3aXRob3V0IGFscGhhKVxuICAgIGNvbnN0IEMgPSAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpICogcztcbiAgICBjb25zdCBYID0gQyAqICgxIC0gTWF0aC5hYnMoKChoIC8gNjApICUgMikgLSAxKSk7XG4gICAgY29uc3QgbSA9IGwgLSBDIC8gMjtcbiAgICBsZXQgUjtcbiAgICBsZXQgRztcbiAgICBsZXQgQjtcblxuICAgIGlmIChoID49IDAgJiYgaCA8IDYwKSB7XG4gICAgICBSID0gQztcbiAgICAgIEcgPSBYO1xuICAgICAgQiA9IDA7XG4gICAgfSBlbHNlIGlmIChoID49IDYwICYmIGggPCAxMjApIHtcbiAgICAgIFIgPSBYO1xuICAgICAgRyA9IEM7XG4gICAgICBCID0gMDtcbiAgICB9IGVsc2UgaWYgKGggPj0gMTIwICYmIGggPCAxODApIHtcbiAgICAgIFIgPSAwO1xuICAgICAgRyA9IEM7XG4gICAgICBCID0gWDtcbiAgICB9IGVsc2UgaWYgKGggPj0gMTgwICYmIGggPCAyNDApIHtcbiAgICAgIFIgPSAwO1xuICAgICAgRyA9IFg7XG4gICAgICBCID0gQztcbiAgICB9IGVsc2UgaWYgKGggPj0gMjQwICYmIGggPCAzMDApIHtcbiAgICAgIFIgPSBYO1xuICAgICAgRyA9IDA7XG4gICAgICBCID0gQztcbiAgICB9IGVsc2Uge1xuICAgICAgUiA9IEM7XG4gICAgICBHID0gMDtcbiAgICAgIEIgPSBYO1xuICAgIH1cblxuICAgIHJlZCA9IE1hdGgucm91bmQoKFIgKyBtKSAqIDI1NSk7XG4gICAgZ3JlZW4gPSBNYXRoLnJvdW5kKChHICsgbSkgKiAyNTUpO1xuICAgIGJsdWUgPSBNYXRoLnJvdW5kKChCICsgbSkgKiAyNTUpO1xuICB9XG5cbiAgaWYgKE51bWJlci5pc05hTihyZWQpIHx8IE51bWJlci5pc05hTihncmVlbikgfHwgTnVtYmVyLmlzTmFOKGJsdWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEludmFsaWQgY29sb3IgaW4gW2l4Mi9zaGFyZWQvdXRpbHMvbm9ybWFsaXplQ29sb3IuanNdICcke2lucHV0Q29sb3J9J2BcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHtyZWQsIGdyZWVuLCBibHVlLCBhbHBoYX07XG59XG4iXSwibmFtZXMiOlsibm9ybWFsaXplQ29sb3IiLCJjb2xvck5hbWVzT2JqIiwiYWxpY2VibHVlIiwiYW50aXF1ZXdoaXRlIiwiYXF1YSIsImFxdWFtYXJpbmUiLCJhenVyZSIsImJlaWdlIiwiYmlzcXVlIiwiYmxhY2siLCJibGFuY2hlZGFsbW9uZCIsImJsdWUiLCJibHVldmlvbGV0IiwiYnJvd24iLCJidXJseXdvb2QiLCJjYWRldGJsdWUiLCJjaGFydHJldXNlIiwiY2hvY29sYXRlIiwiY29yYWwiLCJjb3JuZmxvd2VyYmx1ZSIsImNvcm5zaWxrIiwiY3JpbXNvbiIsImN5YW4iLCJkYXJrYmx1ZSIsImRhcmtjeWFuIiwiZGFya2dvbGRlbnJvZCIsImRhcmtncmF5IiwiZGFya2dyZWVuIiwiZGFya2dyZXkiLCJkYXJra2hha2kiLCJkYXJrbWFnZW50YSIsImRhcmtvbGl2ZWdyZWVuIiwiZGFya29yYW5nZSIsImRhcmtvcmNoaWQiLCJkYXJrcmVkIiwiZGFya3NhbG1vbiIsImRhcmtzZWFncmVlbiIsImRhcmtzbGF0ZWJsdWUiLCJkYXJrc2xhdGVncmF5IiwiZGFya3NsYXRlZ3JleSIsImRhcmt0dXJxdW9pc2UiLCJkYXJrdmlvbGV0IiwiZGVlcHBpbmsiLCJkZWVwc2t5Ymx1ZSIsImRpbWdyYXkiLCJkaW1ncmV5IiwiZG9kZ2VyYmx1ZSIsImZpcmVicmljayIsImZsb3JhbHdoaXRlIiwiZm9yZXN0Z3JlZW4iLCJmdWNoc2lhIiwiZ2FpbnNib3JvIiwiZ2hvc3R3aGl0ZSIsImdvbGQiLCJnb2xkZW5yb2QiLCJncmF5IiwiZ3JlZW4iLCJncmVlbnllbGxvdyIsImdyZXkiLCJob25leWRldyIsImhvdHBpbmsiLCJpbmRpYW5yZWQiLCJpbmRpZ28iLCJpdm9yeSIsImtoYWtpIiwibGF2ZW5kZXIiLCJsYXZlbmRlcmJsdXNoIiwibGF3bmdyZWVuIiwibGVtb25jaGlmZm9uIiwibGlnaHRibHVlIiwibGlnaHRjb3JhbCIsImxpZ2h0Y3lhbiIsImxpZ2h0Z29sZGVucm9keWVsbG93IiwibGlnaHRncmF5IiwibGlnaHRncmVlbiIsImxpZ2h0Z3JleSIsImxpZ2h0cGluayIsImxpZ2h0c2FsbW9uIiwibGlnaHRzZWFncmVlbiIsImxpZ2h0c2t5Ymx1ZSIsImxpZ2h0c2xhdGVncmF5IiwibGlnaHRzbGF0ZWdyZXkiLCJsaWdodHN0ZWVsYmx1ZSIsImxpZ2h0eWVsbG93IiwibGltZSIsImxpbWVncmVlbiIsImxpbmVuIiwibWFnZW50YSIsIm1hcm9vbiIsIm1lZGl1bWFxdWFtYXJpbmUiLCJtZWRpdW1ibHVlIiwibWVkaXVtb3JjaGlkIiwibWVkaXVtcHVycGxlIiwibWVkaXVtc2VhZ3JlZW4iLCJtZWRpdW1zbGF0ZWJsdWUiLCJtZWRpdW1zcHJpbmdncmVlbiIsIm1lZGl1bXR1cnF1b2lzZSIsIm1lZGl1bXZpb2xldHJlZCIsIm1pZG5pZ2h0Ymx1ZSIsIm1pbnRjcmVhbSIsIm1pc3R5cm9zZSIsIm1vY2Nhc2luIiwibmF2YWpvd2hpdGUiLCJuYXZ5Iiwib2xkbGFjZSIsIm9saXZlIiwib2xpdmVkcmFiIiwib3JhbmdlIiwib3JhbmdlcmVkIiwib3JjaGlkIiwicGFsZWdvbGRlbnJvZCIsInBhbGVncmVlbiIsInBhbGV0dXJxdW9pc2UiLCJwYWxldmlvbGV0cmVkIiwicGFwYXlhd2hpcCIsInBlYWNocHVmZiIsInBlcnUiLCJwaW5rIiwicGx1bSIsInBvd2RlcmJsdWUiLCJwdXJwbGUiLCJyZWJlY2NhcHVycGxlIiwicmVkIiwicm9zeWJyb3duIiwicm95YWxibHVlIiwic2FkZGxlYnJvd24iLCJzYWxtb24iLCJzYW5keWJyb3duIiwic2VhZ3JlZW4iLCJzZWFzaGVsbCIsInNpZW5uYSIsInNpbHZlciIsInNreWJsdWUiLCJzbGF0ZWJsdWUiLCJzbGF0ZWdyYXkiLCJzbGF0ZWdyZXkiLCJzbm93Iiwic3ByaW5nZ3JlZW4iLCJzdGVlbGJsdWUiLCJ0YW4iLCJ0ZWFsIiwidGhpc3RsZSIsInRvbWF0byIsInR1cnF1b2lzZSIsInZpb2xldCIsIndoZWF0Iiwid2hpdGUiLCJ3aGl0ZXNtb2tlIiwieWVsbG93IiwieWVsbG93Z3JlZW4iLCJpbnB1dENvbG9yIiwiYWxwaGEiLCJyYXdDb2xvciIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsIm5hbWVkQ29sb3IiLCJjbGVhbkNvbG9yIiwic3RhcnRzV2l0aCIsImhleCIsInN1YnN0cmluZyIsImxlbmd0aCIsInBhcnNlSW50IiwicmdiYVZhbHVlcyIsIm1hdGNoIiwic3BsaXQiLCJwYXJzZUZsb2F0IiwicmdiVmFsdWVzIiwiaHNsYVZhbHVlcyIsImgiLCJzIiwibCIsIkMiLCJNYXRoIiwiYWJzIiwiWCIsIm0iLCJSIiwiRyIsIkIiLCJyb3VuZCIsImhzbFZhbHVlcyIsIk51bWJlciIsImlzTmFOIiwiRXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBLHFCQUFxQjtBQUNyQixxQkFBcUI7QUFDckIsb0RBQW9EOzs7OzsrQkF3SnBDQTs7O2VBQUFBOzs7QUF2SmhCLE1BQU1DLGdCQUFnQjtJQUNwQkMsV0FBVztJQUNYQyxjQUFjO0lBQ2RDLE1BQU07SUFDTkMsWUFBWTtJQUNaQyxPQUFPO0lBQ1BDLE9BQU87SUFDUEMsUUFBUTtJQUNSQyxPQUFPO0lBQ1BDLGdCQUFnQjtJQUNoQkMsTUFBTTtJQUNOQyxZQUFZO0lBQ1pDLE9BQU87SUFDUEMsV0FBVztJQUNYQyxXQUFXO0lBQ1hDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxPQUFPO0lBQ1BDLGdCQUFnQjtJQUNoQkMsVUFBVTtJQUNWQyxTQUFTO0lBQ1RDLE1BQU07SUFDTkMsVUFBVTtJQUNWQyxVQUFVO0lBQ1ZDLGVBQWU7SUFDZkMsVUFBVTtJQUNWQyxXQUFXO0lBQ1hDLFVBQVU7SUFDVkMsV0FBVztJQUNYQyxhQUFhO0lBQ2JDLGdCQUFnQjtJQUNoQkMsWUFBWTtJQUNaQyxZQUFZO0lBQ1pDLFNBQVM7SUFDVEMsWUFBWTtJQUNaQyxjQUFjO0lBQ2RDLGVBQWU7SUFDZkMsZUFBZTtJQUNmQyxlQUFlO0lBQ2ZDLGVBQWU7SUFDZkMsWUFBWTtJQUNaQyxVQUFVO0lBQ1ZDLGFBQWE7SUFDYkMsU0FBUztJQUNUQyxTQUFTO0lBQ1RDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxhQUFhO0lBQ2JDLGFBQWE7SUFDYkMsU0FBUztJQUNUQyxXQUFXO0lBQ1hDLFlBQVk7SUFDWkMsTUFBTTtJQUNOQyxXQUFXO0lBQ1hDLE1BQU07SUFDTkMsT0FBTztJQUNQQyxhQUFhO0lBQ2JDLE1BQU07SUFDTkMsVUFBVTtJQUNWQyxTQUFTO0lBQ1RDLFdBQVc7SUFDWEMsUUFBUTtJ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
},9468:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{
// IX2Actions,
IX2BrowserSupport:function(){return r},IX2EasingUtils:function(){return o},IX2Easings:function(){return i},IX2ElementsReducer:function(){return a},IX2VanillaPlugins:function(){return u},IX2VanillaUtils:function(){return c}});const r=l(n(2662)),i=l(n(8686)),o=l(n(3767)),a=l(n(5861)),u=l(n(1799)),c=l(n(4124));function s(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(s=function(t){return t?n:e})(t)}function l(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=s(e);if(n&&n.has(t))return n.get(t);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var a=i?Object.getOwnPropertyDescriptor(t,o):null;a&&(a.get||a.set)?Object.defineProperty(r,o,a):r[o]=t[o]}return r.default=t,n&&n.set(t,r),r}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBJWDJCcm93c2VyU3VwcG9ydCBmcm9tICcuL2xvZ2ljL0lYMkJyb3dzZXJTdXBwb3J0JztcbmltcG9ydCAqIGFzIElYMkVhc2luZ3MgZnJvbSAnLi9sb2dpYy9JWDJFYXNpbmdzJztcbmltcG9ydCAqIGFzIElYMkVhc2luZ1V0aWxzIGZyb20gJy4vbG9naWMvSVgyRWFzaW5nVXRpbHMnO1xuaW1wb3J0ICogYXMgSVgyRWxlbWVudHNSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvSVgyRWxlbWVudHNSZWR1Y2VyJztcbmltcG9ydCAqIGFzIElYMlZhbmlsbGFQbHVnaW5zIGZyb20gJy4vbG9naWMvSVgyVmFuaWxsYVBsdWdpbnMnO1xuaW1wb3J0ICogYXMgSVgyVmFuaWxsYVV0aWxzIGZyb20gJy4vbG9naWMvSVgyVmFuaWxsYVV0aWxzJztcbmV4cG9ydCB7XG4gIC8vIElYMkFjdGlvbnMsXG4gIElYMkJyb3dzZXJTdXBwb3J0LFxuICBJWDJFYXNpbmdzLFxuICBJWDJFYXNpbmdVdGlscyxcbiAgSVgyRWxlbWVudHNSZWR1Y2VyLFxuICBJWDJWYW5pbGxhUGx1Z2lucyxcbiAgSVgyVmFuaWxsYVV0aWxzLFxufTtcbiJdLCJuYW1lcyI6WyJJWDJCcm93c2VyU3VwcG9ydCIsIklYMkVhc2luZ1V0aWxzIiwiSVgyRWFzaW5ncyIsIklYMkVsZW1lbnRzUmVkdWNlciIsIklYMlZhbmlsbGFQbHVnaW5zIiwiSVgyVmFuaWxsYVV0aWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQU9FLGNBQWM7SUFDZEEsaUJBQWlCO2VBQWpCQTs7SUFFQUMsY0FBYztlQUFkQTs7SUFEQUMsVUFBVTtlQUFWQTs7SUFFQUMsa0JBQWtCO2VBQWxCQTs7SUFDQUMsaUJBQWlCO2VBQWpCQTs7SUFDQUMsZUFBZTtlQUFmQTs7OzJFQWJpQztvRUFDUDt3RUFDSTs0RUFDSTsyRUFDRDt5RUFDRiJ9
},2662:function(t,e,n){"use strict";
/* eslint-env browser */Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{ELEMENT_MATCHES:function(){return u},FLEX_PREFIXED:function(){return c},IS_BROWSER_ENV:function(){return o},TRANSFORM_PREFIXED:function(){return s},TRANSFORM_STYLE_PREFIXED:function(){return f},withBrowser:function(){return a}});const r=i(n(9777));function i(t){return t&&t.__esModule?t:{default:t}}const o="undefined"!=typeof window,a=(t,e)=>o?t():e,u=a(()=>(0,r.default)(["matches","matchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector","webkitMatchesSelector"],t=>t in Element.prototype)),c=a(()=>{const t=document.createElement("i"),e=["flex","-webkit-flex","-ms-flexbox","-moz-box","-webkit-box"];try{const{length:n}=e;for(let r=0;r<n;r++){const n=e[r];
// @ts-expect-error - TS2322 - Type 'string | undefined' is not assignable to type 'string'.
if(t.style.display=n,t.style.display===n)return n}return""}catch(t){return""}},"flex"),s=a(()=>{const t=document.createElement("i");if(null==t.style.transform){const e=["Webkit","Moz","ms"],n="Transform",{length:r}=e;for(let i=0;i<r;i++){const r=e[i]+n;
// @ts-expect-error - TS7015 - Element implicitly has an 'any' type because index expression is not of type 'number'.
if(void 0!==t.style[r])return r}}return"transform"},"transform"),l=s.split("transform")[0],f=l?l+"TransformStyle":"transformStyle"},3767:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{applyEasing:function(){return l},createBezierEasing:function(){return s},optimizeFloat:function(){return c}});const r=u(n(8686)),i=o(n(1361));function o(t){return t&&t.__esModule?t:{default:t}}function a(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(a=function(t){return t?n:e})(t)}function u(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=a(e);if(n&&n.has(t))return n.get(t);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if("default"!==o&&Object.prototype.hasOwnProperty.call(t,o)){var u=i?Object.getOwnPropertyDescriptor(t,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=t[o]}return r.default=t,n&&n.set(t,r),r}function c(t,e=5,n=10){const r=Math.pow(n,e),i=Number(Math.round(t*r)/r);return Math.abs(i)>1e-4?i:0}function s(t){return(0,i.default)(...t)}function l(t,e,n){return 0===e?0:1===e?1:c(n?e>0?n(e):e:e>0&&t&&r[t]?r[t](e):e)}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC9sb2dpYy9JWDJFYXNpbmdVdGlscy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7XG4gIElYMkVhc2luZ0VudW1UeXBlLFxuICBJWDJFYXNpbmdDdXN0b21UeXBlLFxufSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvdHlwZXMtY29yZSc7XG5pbXBvcnQgKiBhcyBlYXNpbmdzIGZyb20gJy4vSVgyRWFzaW5ncyc7XG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDE2IC0gQ291bGQgbm90IGZpbmQgYSBkZWNsYXJhdGlvbiBmaWxlIGZvciBtb2R1bGUgJ2Jlemllci1lYXNpbmcnLiAnL2hvbWUvcnVubmVyL3dvcmsvZmxvdy10by10eXBlc2NyaXB0LWNvZGVtb2QvZmxvdy10by10eXBlc2NyaXB0LWNvZGVtb2Qvd2ViZmxvdy9ub2RlX21vZHVsZXMvYmV6aWVyLWVhc2luZy9zcmMvaW5kZXguanMnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5pbXBvcnQgQmV6aWVyRWFzaW5nIGZyb20gJ2Jlemllci1lYXNpbmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gb3B0aW1pemVGbG9hdChcbiAgdmFsdWU6IG51bWJlcixcbiAgZGlnaXRzOiBudW1iZXIgPSA1LFxuICBiYXNlOiBudW1iZXIgPSAxMFxuKTogbnVtYmVyIHtcbiAgY29uc3QgcG93ID0gTWF0aC5wb3coYmFzZSwgZGlnaXRzKTtcbiAgY29uc3QgZmxvYXQgPSBOdW1iZXIoTWF0aC5yb3VuZCh2YWx1ZSAqIHBvdykgLyBwb3cpO1xuICByZXR1cm4gTWF0aC5hYnMoZmxvYXQpID4gMC4wMDAxID8gZmxvYXQgOiAwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmV6aWVyRWFzaW5nKFxuICBlYXNpbmc6IElYMkVhc2luZ0N1c3RvbVR5cGVcbik6IChhcmcxOiBudW1iZXIpID0+IG51bWJlciB7XG4gIHJldHVybiBCZXppZXJFYXNpbmcoLi4uZWFzaW5nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5RWFzaW5nKFxuICBlYXNpbmc6IElYMkVhc2luZ0VudW1UeXBlLFxuICBwb3NpdGlvbjogbnVtYmVyLFxuICBjdXN0b21FYXNpbmdGbj86IChhcmcxOiBudW1iZXIpID0+IG51bWJlclxuKSB7XG4gIGlmIChwb3NpdGlvbiA9PT0gMCkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIGlmIChwb3NpdGlvbiA9PT0gMSkge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgaWYgKGN1c3RvbUVhc2luZ0ZuKSB7XG4gICAgcmV0dXJuIG9wdGltaXplRmxvYXQocG9zaXRpb24gPiAwID8gY3VzdG9tRWFzaW5nRm4ocG9zaXRpb24pIDogcG9zaXRpb24pO1xuICB9XG5cbiAgcmV0dXJuIG9wdGltaXplRmxvYXQoXG4gICAgcG9zaXRpb24gPiAwICYmIGVhc2luZyAmJiBlYXNpbmdzW2Vhc2luZ11cbiAgICAgID8gZWFzaW5nc1tlYXNpbmddKHBvc2l0aW9uKVxuICAgICAgOiBwb3NpdGlvblxuICApO1xufVxuIl0sIm5hbWVzIjpbImFwcGx5RWFzaW5nIiwiY3JlYXRlQmV6aWVyRWFzaW5nIiwib3B0aW1pemVGbG9hdCIsInZhbHVlIiwiZGlnaXRzIiwiYmFzZSIsInBvdyIsIk1hdGgiLCJmbG9hdCIsIk51bWJlciIsInJvdW5kIiwiYWJzIiwiZWFzaW5nIiwiQmV6aWVyRWFzaW5nIiwicG9zaXRpb24iLCJjdXN0b21FYXNpbmdGbiIsImVhc2luZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBd0JnQkEsV0FBVztlQUFYQTs7SUFOQUMsa0JBQWtCO2VBQWxCQTs7SUFWQUMsYUFBYTtlQUFiQTs7O29FQUpTO3FFQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsQixTQUFTQSxjQUNkQyxLQUFhLEVBQ2JDLFNBQWlCLENBQUMsRUFDbEJDLE9BQWUsRUFBRTtJQUVqQixNQUFNQyxNQUFNQyxLQUFLRCxHQUFHLENBQUNELE1BQU1EO0lBQzNCLE1BQU1JLFFBQVFDLE9BQU9GLEtBQUtHLEtBQUssQ0FBQ1AsUUFBUUcsT0FBT0E7SUFDL0MsT0FBT0MsS0FBS0ksR0FBRyxDQUFDSCxTQUFTLFNBQVNBLFFBQVE7QUFDNUM7QUFFTyxTQUFTUCxtQkFDZFcsTUFBMkI7SUFFM0IsT0FBT0MsSUFBQUEscUJBQVksS0FBSUQ7QUFDekI7QUFFTyxTQUFTWixZQUNkWSxNQUF5QixFQUN6QkUsUUFBZ0IsRUFDaEJDLGNBQXlDO0lBRXpDLElBQUlELGFBQWEsR0FBRztRQUNsQixPQUFPO0lBQ1Q7SUFDQSxJQUFJQSxhQUFhLEdBQUc7UUFDbEIsT0FBTztJQUNUO0lBRUEsSUFBSUMsZ0JBQWdCO1FBQ2xCLE9BQU9iLGNBQWNZLFdBQVcsSUFBSUMsZUFBZUQsWUFBWUE7SUFDakU7SUFFQSxPQUFPWixjQUNMWSxXQUFXLEtBQUtGLFVBQVVJLFdBQU8sQ0FBQ0osT0FBTyxHQUNyQ0ksV0FBTyxDQUFDSixPQUFPLENBQUNFLFlBQ2hCQTtBQUVSIn0=
},8686:function(t,e,n){"use strict";
// @ts-expect-error - TS7016 - Could not find a declaration file for module 'bezier-easing'. '/home/runner/work/flow-to-typescript-codemod/flow-to-typescript-codemod/webflow/node_modules/bezier-easing/src/index.js' implicitly has an 'any' type.
Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{bounce:function(){return U},bouncePast:function(){return X},ease:function(){return a},easeIn:function(){return u},easeInOut:function(){return s},easeOut:function(){return c},inBack:function(){return x},inCirc:function(){return N},inCubic:function(){return p},inElastic:function(){return F},inExpo:function(){return A},inOutBack:function(){return M},inOutCirc:function(){return C},inOutCubic:function(){return E},inOutElastic:function(){return j},inOutExpo:function(){return S},inOutQuad:function(){return d},inOutQuart:function(){return y},inOutQuint:function(){return I},inOutSine:function(){return O},inQuad:function(){return l},inQuart:function(){return v},inQuint:function(){return m},inSine:function(){return b},outBack:function(){return P},outBounce:function(){return L},outCirc:function(){return R},outCubic:function(){return h},outElastic:function(){return D},outExpo:function(){return w},outQuad:function(){return f},outQuart:function(){return g},outQuint:function(){return _},outSine:function(){return T},swingFrom:function(){return G},swingFromTo:function(){return k},swingTo:function(){return V}});const r=i(n(1361));function i(t){return t&&t.__esModule?t:{default:t}}
// Easing functions adapted from Thomas Fuchs & Jeremy Kahn
// Easing Equations (c) 2003 Robert Penner, BSD license
// https://raw.github.com/danro/easing-js/master/LICENSE
const o=1.70158,a=(0,r.default)(.25,.1,.25,1),u=(0,r.default)(.42,0,1,1),c=(0,r.default)(0,0,.58,1),s=(0,r.default)(.42,0,.58,1);function l(t){return Math.pow(t,2)}function f(t){return-(Math.pow(t-1,2)-1)}function d(t){return(t/=.5)<1?.5*Math.pow(t,2):-.5*((t-=2)*t-2)}function p(t){return Math.pow(t,3)}function h(t){return Math.pow(t-1,3)+1}function E(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)}function v(t){return Math.pow(t,4)}function g(t){return-(Math.pow(t-1,4)-1)}function y(t){return(t/=.5)<1?.5*Math.pow(t,4):-.5*((t-=2)*Math.pow(t,3)-2)}function m(t){return Math.pow(t,5)}function _(t){return Math.pow(t-1,5)+1}function I(t){return(t/=.5)<1?.5*Math.pow(t,5):.5*(Math.pow(t-2,5)+2)}function b(t){return 1-Math.cos(t*(Math.PI/2))}function T(t){return Math.sin(t*(Math.PI/2))}function O(t){return-.5*(Math.cos(Math.PI*t)-1)}function A(t){return 0===t?0:Math.pow(2,10*(t-1))}function w(t){return 1===t?1:1-Math.pow(2,-10*t)}function S(t){return 0===t?0:1===t?1:(t/=.5)<1?.5*Math.pow(2,10*(t-1)):.5*(2-Math.pow(2,-10*--t))}function N(t){return-(Math.sqrt(1-t*t)-1)}function R(t){return Math.sqrt(1-Math.pow(t-1,2))}function C(t){return(t/=.5)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}function L(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}function x(t){return t*t*((o+1)*t-o)}function P(t){return(t-=1)*t*((o+1)*t+o)+1}function M(t){let e=o;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)}function F(t){let e=o,n=0,r=1;return 0===t?0:1===t?1:(n||(n=.3),r<1?(r=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/r),-r*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n))}function D(t){let e=o,n=0,r=1;return 0===t?0:1===t?1:(n||(n=.3),r<1?(r=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/r),r*Math.pow(2,-10*t)*Math.sin((t-e)*(2*Math.PI)/n)+1)}function j(t){let e=o,n=0,r=1;return 0===t?0:2==(t/=.5)?1:(n||(n=.3*1.5),r<1?(r=1,e=n/4):e=n/(2*Math.PI)*Math.asin(1/r),t<1?r*Math.pow(2,10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*-.5:r*Math.pow(2,-10*(t-=1))*Math.sin((t-e)*(2*Math.PI)/n)*.5+1)}function k(t){let e=o;return(t/=.5)<1?t*t*((1+(e*=1.525))*t-e)*.5:.5*((t-=2)*t*((1+(e*=1.525))*t+e)+2)}function G(t){return t*t*((o+1)*t-o)}function V(t){return(t-=1)*t*((o+1)*t+o)+1}function U(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}function X(t){return t<1/2.75?7.5625*t*t:t<2/2.75?2-(7.5625*(t-=1.5/2.75)*t+.75):t<2.5/2.75?2-(7.5625*(t-=2.25/2.75)*t+.9375):2-(7.5625*(t-=2.625/2.75)*t+.984375)}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC9sb2dpYy9JWDJFYXNpbmdzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMTYgLSBDb3VsZCBub3QgZmluZCBhIGRlY2xhcmF0aW9uIGZpbGUgZm9yIG1vZHVsZSAnYmV6aWVyLWVhc2luZycuICcvaG9tZS9ydW5uZXIvd29yay9mbG93LXRvLXR5cGVzY3JpcHQtY29kZW1vZC9mbG93LXRvLXR5cGVzY3JpcHQtY29kZW1vZC93ZWJmbG93L25vZGVfbW9kdWxlcy9iZXppZXItZWFzaW5nL3NyYy9pbmRleC5qcycgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmltcG9ydCBCZXppZXJFYXNpbmcgZnJvbSAnYmV6aWVyLWVhc2luZyc7XG5cbi8vIEVhc2luZyBmdW5jdGlvbnMgYWRhcHRlZCBmcm9tIFRob21hcyBGdWNocyAmIEplcmVteSBLYWhuXG4vLyBFYXNpbmcgRXF1YXRpb25zIChjKSAyMDAzIFJvYmVydCBQZW5uZXIsIEJTRCBsaWNlbnNlXG4vLyBodHRwczovL3Jhdy5naXRodWIuY29tL2RhbnJvL2Vhc2luZy1qcy9tYXN0ZXIvTElDRU5TRVxuXG5jb25zdCBtYWdpY1N3aW5nID0gMS43MDE1ODtcblxudHlwZSBFYXNpbmdGdW5jdGlvbiA9IChhcmcxOiBudW1iZXIpID0+IG51bWJlcjtcblxuZXhwb3J0IGNvbnN0IGVhc2U6IEVhc2luZ0Z1bmN0aW9uID0gQmV6aWVyRWFzaW5nKDAuMjUsIDAuMSwgMC4yNSwgMS4wKTtcbmV4cG9ydCBjb25zdCBlYXNlSW46IEVhc2luZ0Z1bmN0aW9uID0gQmV6aWVyRWFzaW5nKDAuNDIsIDAuMCwgMS4wLCAxLjApO1xuZXhwb3J0IGNvbnN0IGVhc2VPdXQ6IEVhc2luZ0Z1bmN0aW9uID0gQmV6aWVyRWFzaW5nKDAuMCwgMC4wLCAwLjU4LCAxLjApO1xuZXhwb3J0IGNvbnN0IGVhc2VJbk91dDogRWFzaW5nRnVuY3Rpb24gPSBCZXppZXJFYXNpbmcoMC40MiwgMC4wLCAwLjU4LCAxLjApO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5RdWFkKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgucG93KHBvcywgMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdXRRdWFkKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIC0oTWF0aC5wb3cocG9zIC0gMSwgMikgLSAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluT3V0UXVhZChwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGlmICgocG9zIC89IDAuNSkgPCAxKSB7XG4gICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KHBvcywgMik7XG4gIH1cbiAgcmV0dXJuIC0wLjUgKiAoKHBvcyAtPSAyKSAqIHBvcyAtIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5DdWJpYyhwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLnBvdyhwb3MsIDMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3V0Q3ViaWMocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5wb3cocG9zIC0gMSwgMykgKyAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5PdXRDdWJpYyhwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGlmICgocG9zIC89IDAuNSkgPCAxKSB7XG4gICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KHBvcywgMyk7XG4gIH1cbiAgcmV0dXJuIDAuNSAqIChNYXRoLnBvdyhwb3MgLSAyLCAzKSArIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5RdWFydChwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLnBvdyhwb3MsIDQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3V0UXVhcnQocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gLShNYXRoLnBvdyhwb3MgLSAxLCA0KSAtIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5PdXRRdWFydChwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGlmICgocG9zIC89IDAuNSkgPCAxKSB7XG4gICAgcmV0dXJuIDAuNSAqIE1hdGgucG93KHBvcywgNCk7XG4gIH1cbiAgcmV0dXJuIC0wLjUgKiAoKHBvcyAtPSAyKSAqIE1hdGgucG93KHBvcywgMykgLSAyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluUXVpbnQocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gTWF0aC5wb3cocG9zLCA1KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG91dFF1aW50KHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgucG93KHBvcyAtIDEsIDUpICsgMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluT3V0UXVpbnQocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAoKHBvcyAvPSAwLjUpIDwgMSkge1xuICAgIHJldHVybiAwLjUgKiBNYXRoLnBvdyhwb3MsIDUpO1xuICB9XG4gIHJldHVybiAwLjUgKiAoTWF0aC5wb3cocG9zIC0gMiwgNSkgKyAyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluU2luZShwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiAtTWF0aC5jb3MocG9zICogKE1hdGguUEkgLyAyKSkgKyAxO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3V0U2luZShwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLnNpbihwb3MgKiAoTWF0aC5QSSAvIDIpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluT3V0U2luZShwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiAtMC41ICogKE1hdGguY29zKE1hdGguUEkgKiBwb3MpIC0gMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbkV4cG8ocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gcG9zID09PSAwID8gMCA6IE1hdGgucG93KDIsIDEwICogKHBvcyAtIDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG91dEV4cG8ocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gcG9zID09PSAxID8gMSA6IC1NYXRoLnBvdygyLCAtMTAgKiBwb3MpICsgMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluT3V0RXhwbyhwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChwb3MgPT09IDApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBpZiAocG9zID09PSAxKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgaWYgKChwb3MgLz0gMC41KSA8IDEpIHtcbiAgICByZXR1cm4gMC41ICogTWF0aC5wb3coMiwgMTAgKiAocG9zIC0gMSkpO1xuICB9XG4gIHJldHVybiAwLjUgKiAoLU1hdGgucG93KDIsIC0xMCAqIC0tcG9zKSArIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5DaXJjKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIC0oTWF0aC5zcXJ0KDEgLSBwb3MgKiBwb3MpIC0gMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvdXRDaXJjKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGguc3FydCgxIC0gTWF0aC5wb3cocG9zIC0gMSwgMikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5PdXRDaXJjKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKChwb3MgLz0gMC41KSA8IDEpIHtcbiAgICByZXR1cm4gLTAuNSAqIChNYXRoLnNxcnQoMSAtIHBvcyAqIHBvcykgLSAxKTtcbiAgfVxuICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHBvcyAtPSAyKSAqIHBvcykgKyAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG91dEJvdW5jZShwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChwb3MgPCAxIC8gMi43NSkge1xuICAgIHJldHVybiA3LjU2MjUgKiBwb3MgKiBwb3M7XG4gIH0gZWxzZSBpZiAocG9zIDwgMiAvIDIuNzUpIHtcbiAgICByZXR1cm4gNy41NjI1ICogKHBvcyAtPSAxLjUgLyAyLjc1KSAqIHBvcyArIDAuNzU7XG4gIH0gZWxzZSBpZiAocG9zIDwgMi41IC8gMi43NSkge1xuICAgIHJldHVybiA3LjU2MjUgKiAocG9zIC09IDIuMjUgLyAyLjc1KSAqIHBvcyArIDAuOTM3NTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gNy41NjI1ICogKHBvcyAtPSAyLjYyNSAvIDIuNzUpICogcG9zICsgMC45ODQzNzU7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluQmFjayhwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IHMgPSBtYWdpY1N3aW5nO1xuICByZXR1cm4gcG9zICogcG9zICogKChzICsgMSkgKiBwb3MgLSBzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG91dEJhY2socG9zOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBzID0gbWFnaWNTd2luZztcbiAgcmV0dXJuIChwb3MgLT0gMSkgKiBwb3MgKiAoKHMgKyAxKSAqIHBvcyArIHMpICsgMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluT3V0QmFjayhwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBzID0gbWFnaWNTd2luZztcbiAgaWYgKChwb3MgLz0gMC41KSA8IDEpIHtcbiAgICByZXR1cm4gMC41ICogKHBvcyAqIHBvcyAqICgoKHMgKj0gMS41MjUpICsgMSkgKiBwb3MgLSBzKSk7XG4gIH1cbiAgcmV0dXJuIDAuNSAqICgocG9zIC09IDIpICogcG9zICogKCgocyAqPSAxLjUyNSkgKyAxKSAqIHBvcyArIHMpICsgMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbkVsYXN0aWMocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgcyA9IG1hZ2ljU3dpbmc7XG4gIGxldCBwID0gMDtcbiAgbGV0IGEgPSAxO1xuICBpZiAocG9zID09PSAwKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgaWYgKHBvcyA9PT0gMSkge1xuICAgIHJldHVybiAxO1xuICB9XG4gIGlmICghcCkge1xuICAgIHAgPSAwLjM7XG4gIH1cbiAgaWYgKGEgPCAxKSB7XG4gICAgYSA9IDE7XG4gICAgcyA9IHAgLyA0O1xuICB9IGVsc2Uge1xuICAgIHMgPSAocCAvICgyICogTWF0aC5QSSkpICogTWF0aC5hc2luKDEgLyBhKTtcbiAgfVxuICByZXR1cm4gLShcbiAgICBhICpcbiAgICBNYXRoLnBvdygyLCAxMCAqIChwb3MgLT0gMSkpICpcbiAgICBNYXRoLnNpbigoKHBvcyAtIHMpICogKDIgKiBNYXRoLlBJKSkgLyBwKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3V0RWxhc3RpYyhwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBzID0gbWFnaWNTd2luZztcbiAgbGV0IHAgPSAwO1xuICBsZXQgYSA9IDE7XG4gIGlmIChwb3MgPT09IDApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBpZiAocG9zID09PSAxKSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbiAgaWYgKCFwKSB7XG4gICAgcCA9IDAuMztcbiAgfVxuICBpZiAoYSA8IDEpIHtcbiAgICBhID0gMTtcbiAgICBzID0gcCAvIDQ7XG4gIH0gZWxzZSB7XG4gICAgcyA9IChwIC8gKDIgKiBNYXRoLlBJKSkgKiBNYXRoLmFzaW4oMSAvIGEpO1xuICB9XG4gIHJldHVybiAoXG4gICAgYSAqIE1hdGgucG93KDIsIC0xMCAqIHBvcykgKiBNYXRoLnNpbigoKHBvcyAtIHMpICogKDIgKiBNYXRoLlBJKSkgLyBwKSArIDFcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluT3V0RWxhc3RpYyhwb3M6IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBzID0gbWFnaWNTd2luZztcbiAgbGV0IHAgPSAwO1xuICBsZXQgYSA9IDE7XG4gIGlmIChwb3MgPT09IDApIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICBpZiAoKHBvcyAvPSAxIC8gMikgPT09IDIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuICBpZiAoIXApIHtcbiAgICBwID0gMC4zICogMS41O1xuICB9XG4gIGlmIChhIDwgMSkge1xuICAgIGEgPSAxO1xuICAgIHMgPSBwIC8gNDtcbiAgfSBlbHNlIHtcbiAgICBzID0gKHAgLyAoMiAqIE1hdGguUEkpKSAqIE1hdGguYXNpbigxIC8gYSk7XG4gIH1cbiAgaWYgKHBvcyA8IDEpIHtcbiAgICByZXR1cm4gKFxuICAgICAgLTAuNSAqXG4gICAgICAoYSAqXG4gICAgICAgIE1hdGgucG93KDIsIDEwICogKHBvcyAtPSAxKSkgKlxuICAgICAgICBNYXRoLnNpbigoKHBvcyAtIHMpICogKDIgKiBNYXRoLlBJKSkgLyBwKSlcbiAgICApO1xuICB9XG4gIHJldHVybiAoXG4gICAgYSAqXG4gICAgICBNYXRoLnBvdygyLCAtMTAgKiAocG9zIC09IDEpKSAqXG4gICAgICBNYXRoLnNpbigoKHBvcyAtIHMpICogKDIgKiBNYXRoLlBJKSkgLyBwKSAqXG4gICAgICAwLjUgK1xuICAgIDFcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN3aW5nRnJvbVRvKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgbGV0IHMgPSBtYWdpY1N3aW5nO1xuICByZXR1cm4gKHBvcyAvPSAwLjUpIDwgMVxuICAgID8gMC41ICogKHBvcyAqIHBvcyAqICgoKHMgKj0gMS41MjUpICsgMSkgKiBwb3MgLSBzKSlcbiAgICA6IDAuNSAqICgocG9zIC09IDIpICogcG9zICogKCgocyAqPSAxLjUyNSkgKyAxKSAqIHBvcyArIHMpICsgMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzd2luZ0Zyb20ocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBzID0gbWFnaWNTd2luZztcbiAgcmV0dXJuIHBvcyAqIHBvcyAqICgocyArIDEpICogcG9zIC0gcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzd2luZ1RvKHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgcyA9IG1hZ2ljU3dpbmc7XG4gIHJldHVybiAocG9zIC09IDEpICogcG9zICogKChzICsgMSkgKiBwb3MgKyBzKSArIDE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuY2UocG9zOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAocG9zIDwgMSAvIDIuNzUpIHtcbiAgICByZXR1cm4gNy41NjI1ICogcG9zICogcG9zO1xuICB9IGVsc2UgaWYgKHBvcyA8IDIgLyAyLjc1KSB7XG4gICAgcmV0dXJuIDcuNTYyNSAqIChwb3MgLT0gMS41IC8gMi43NSkgKiBwb3MgKyAwLjc1O1xuICB9IGVsc2UgaWYgKHBvcyA8IDIuNSAvIDIuNzUpIHtcbiAgICByZXR1cm4gNy41NjI1ICogKHBvcyAtPSAyLjI1IC8gMi43NSkgKiBwb3MgKyAwLjkzNzU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDcuNTYyNSAqIChwb3MgLT0gMi42MjUgLyAyLjc1KSAqIHBvcyArIDAuOTg0Mzc1O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib3VuY2VQYXN0KHBvczogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKHBvcyA8IDEgLyAyLjc1KSB7XG4gICAgcmV0dXJuIDcuNTYyNSAqIHBvcyAqIHBvcztcbiAgfSBlbHNlIGlmIChwb3MgPCAyIC8gMi43NSkge1xuICAgIHJldHVybiAyIC0gKDcuNTYyNSAqIChwb3MgLT0gMS41IC8gMi43NSkgKiBwb3MgKyAwLjc1KTtcbiAgfSBlbHNlIGlmIChwb3MgPCAyLjUgLyAyLjc1KSB7XG4gICAgcmV0dXJuIDIgLSAoNy41NjI1ICogKHBvcyAtPSAyLjI1IC8gMi43NSkgKiBwb3MgKyAwLjkzNzUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAyIC0gKDcuNTYyNSAqIChwb3MgLT0gMi42MjUgLyAyLjc1KSAqIHBvcyArIDAuOTg0Mzc1KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImJvdW5jZSIsImJvdW5jZVBhc3QiLCJlYXNlIiwiZWFzZUluIiwiZWFzZUluT3V0IiwiZWFzZU91dCIsImluQmFjayIsImluQ2lyYyIsImluQ3ViaWMiLCJpbkVsYXN0aWMiLCJpbkV4cG8iLCJpbk91dEJhY2siLCJpbk91dENpcmMiLCJpbk91dEN1YmljIiwiaW5PdXRFbGFzdGljIiwiaW5PdXRFeHBvIiwiaW5PdXRRdWFkIiwiaW5PdXRRdWFydCIsImluT3V0UXVpbnQiLCJpbk91dFNpbmUiLCJpblF1YWQiLCJpblF1YXJ0IiwiaW5RdWludCIsImluU2luZSIsIm91dEJhY2siLCJvdXRCb3VuY2UiLCJvdXRDaXJjIiwib3V0Q3ViaWMiLCJvdXRFbGFzdGljIiwib3V0RXhwbyIsIm91dFF1YWQiLCJvdXRRdWFydCIsIm91dFF1aW50Iiwib3V0U2luZSIsInN3aW5nRnJvbSIsInN3aW5nRnJvbVRvIiwic3dpbmdUbyIsIm1hZ2ljU3dpbmciLCJCZXppZXJFYXNpbmciLCJwb3MiLCJNYXRoIiwicG93IiwiY29zIiwiUEkiLCJzaW4iLCJzcXJ0IiwicyIsInAiLCJhIiwiYXNpbiJdLCJtYXBwaW5ncyI6IkFBQUEsb1BBQW9QOzs7Ozs7Ozs7Ozs7SUFpUXBPQSxNQUFNO2VBQU5BOztJQVlBQyxVQUFVO2VBQVZBOztJQWxRSEMsSUFBSTtlQUFKQTs7SUFDQUMsTUFBTTtlQUFOQTs7SUFFQUMsU0FBUztlQUFUQTs7SUFEQUMsT0FBTztlQUFQQTs7SUEySEdDLE1BQU07ZUFBTkE7O0lBM0JBQyxNQUFNO2VBQU5BOztJQTlFQUMsT0FBTztlQUFQQTs7SUEySEFDLFNBQVM7ZUFBVEE7O0lBbEVBQyxNQUFNO2VBQU5BOztJQTBEQUMsU0FBUztlQUFUQTs7SUE3QkFDLFNBQVM7ZUFBVEE7O0lBOUVBQyxVQUFVO2VBQVZBOztJQXFLQUMsWUFBWTtlQUFaQTs7SUE1R0FDLFNBQVM7ZUFBVEE7O0lBeEVBQyxTQUFTO2VBQVRBOztJQThCQUMsVUFBVTtlQUFWQTs7SUFlQUMsVUFBVTtlQUFWQTs7SUFlQUMsU0FBUztlQUFUQTs7SUFwRUFDLE1BQU07ZUFBTkE7O0lBOEJBQyxPQUFPO2VBQVBBOztJQWVBQyxPQUFPO2VBQVBBOztJQWVBQyxNQUFN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
},1799:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{clearPlugin:function(){return p},createPluginInstance:function(){return f},getPluginConfig:function(){return u},getPluginDestination:function(){return l},getPluginDuration:function(){return s},getPluginOrigin:function(){return c},isPluginType:function(){return o},renderPlugin:function(){return d}});const r=n(2662),i=n(3690);function o(t){
// @ts-expect-error - TS2345 - Argument of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW" | "STYLE_OPACITY" | "STYLE_SIZE" | "STYLE_FILTER" | "STYLE_FONT_VARIATION" | "STYLE_BACKGROUND_COLOR" | ... 12 more ... | "STYLE_BOX_SHADOW"' is not assignable to parameter of type '"PLUGIN_LOTTIE" | "PLUGIN_SPLINE" | "PLUGIN_VARIABLE"'.
return i.pluginMethodMap.has(t)}const a=t=>e=>{if(!r.IS_BROWSER_ENV)
// IX2 plugins require browser libs for now
return()=>null;const n=i.pluginMethodMap.get(e);if(!n)throw new Error(`IX2 no plugin configured for: ${e}`);const o=n[t];if(!o)throw new Error(`IX2 invalid plugin method: ${t}`);return o},u=a("getPluginConfig"),c=a("getPluginOrigin"),s=a("getPluginDuration"),l=a("getPluginDestination"),f=a("createPluginInstance"),d=a("renderPlugin"),p=a("clearPlugin")},4124:function(t,e,n){"use strict";
/* eslint-env browser */Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{cleanupHTMLElement:function(){return Bt},clearAllStyles:function(){return Vt},clearObjectCache:function(){return st},getActionListProgress:function(){return $t},getAffectedElements:function(){return yt},getComputedStyle:function(){return mt},getDestinationValues:function(){return St},getElementId:function(){return pt},getInstanceId:function(){return ft},getInstanceOrigin:function(){return Tt},getItemConfigByKey:function(){return wt},getMaxDurationItemIndex:function(){return Ht},getNamespacedParameterId:function(){return Qt},getRenderType:function(){return Nt},getStyleProp:function(){return Rt},mediaQueriesEqual:function(){return Zt},observeStore:function(){return vt},reduceListToGroup:function(){return Yt},reifyState:function(){return ht},renderHTMLElement:function(){return Ct},shallowEqual:function(){return c.default},shouldAllowMediaQuery:function(){return qt},shouldNamespaceEventParameter:function(){return Kt},stringifyTarget:function(){return Jt}});const r=p(n(4075)),i=p(n(1455)),o=p(n(5720)),a=n(1185),u=n(7087),c=p(n(7164)),s=n(3767),l=n(380),f=n(1799),d=n(2662);function p(t){return t&&t.__esModule?t:{default:t}}const{BACKGROUND:h,TRANSFORM:E,TRANSLATE_3D:v,SCALE_3D:g,ROTATE_X:y,ROTATE_Y:m,ROTATE_Z:_,SKEW:I,PRESERVE_3D:b,FLEX:T,OPACITY:O,FILTER:A,FONT_VARIATION_SETTINGS:w,WIDTH:S,HEIGHT:N,BACKGROUND_COLOR:R,BORDER_COLOR:C,COLOR:L,CHILDREN:x,IMMEDIATE_CHILDREN:P,SIBLINGS:M,PARENT:F,DISPLAY:D,WILL_CHANGE:j,AUTO:k,COMMA_DELIMITER:G,COLON_DELIMITER:V,BAR_DELIMITER:U,RENDER_TRANSFORM:X,RENDER_GENERAL:B,RENDER_STYLE:W,RENDER_PLUGIN:z}=u.IX2EngineConstants,{TRANSFORM_MOVE:H,TRANSFORM_SCALE:$,TRANSFORM_ROTATE:Y,TRANSFORM_SKEW:K,STYLE_OPACITY:Q,STYLE_FILTER:q,STYLE_FONT_VARIATION:Z,STYLE_SIZE:J,STYLE_BACKGROUND_COLOR:tt,STYLE_BORDER:et,STYLE_TEXT_COLOR:nt,GENERAL_DISPLAY:rt,OBJECT_VALUE:it}=u.ActionTypeConsts,ot=t=>t.trim(),at=Object.freeze({[tt]:R,[et]:C,[nt]:L}),ut=Object.freeze({[d.TRANSFORM_PREFIXED]:E,[R]:h,[O]:O,[A]:A,[S]:S,[N]:N,[w]:w}),ct=new Map;function st(){ct.clear()}let lt=1;function ft(){return"i"+lt++}let dt=1;function pt(t,e){
// TODO: optimize element lookup
for(const n in t){const r=t[n];if(r&&r.ref===e)return r.id}return"e"+dt++}function ht({events:t,actionLists:e,site:n}={}){const r=(0,i.default)(t,(t,e)=>{const{eventTypeId:n}=e;return t[n]||(t[n]={}),t[n][e.id]=e,t},{});let o=n&&n.mediaQueries,a=[];return o?a=o.map(t=>t.key):(o=[],console.warn("IX2 missing mediaQueries in site data")),{ixData:{events:t,actionLists:e,eventTypeMap:r,mediaQueries:o,mediaQueryKeys:a}}}const Et=(t,e)=>t===e;function vt({store:// @ts-expect-error - TS7031 - Binding element 'store' implicitly has an 'any' type.
t,select:// @ts-expect-error - TS7031 - Binding element 'select' implicitly has an 'any' type.
e,onChange:// @ts-expect-error - TS7031 - Binding element 'onChange' implicitly has an 'any' type.
n,comparator:r=Et}){const{getState:i,subscribe:o}=t,a=o(function(){const o=e(i());null!=o?r(o,u)||(u=o,n(u,t)):a()});let u=e(i());return a}
// @ts-expect-error - TS7006 - Parameter 'target' implicitly has an 'any' type.
function gt(t){const e=typeof t;if("string"===e)return{id:t};if(null!=t&&"object"===e){const{id:e,objectId:n,selector:r,selectorGuids:i,appliesTo:o,useEventTarget:a}=t;return{id:e,objectId:n,selector:r,selectorGuids:i,appliesTo:o,useEventTarget:a}}return{}}function yt({config:t,event:e,eventTarget:n,elementRoot:r,elementApi:i}){if(!i)throw new Error("IX2 missing elementApi");const{targets:o}=t;if(Array.isArray(o)&&o.length>0)return o.reduce((t,o)=>t.concat(yt({config:{target:o},event:e,eventTarget:n,elementRoot:r,elementApi:i})),[]);const{getValidDocument:a,getQuerySelector:c,queryDocument:s,getChildElements:l,getSiblingElements:f,matchSelector:p,elementContains:h,isSiblingNode:E}=i,{target:v}=t;if(!v)return[];const{id:g,objectId:y,selector:m,selectorGuids:_,appliesTo:I,useEventTarget:b}=gt(v);if(y)return[ct.has(y)?ct.get(y):ct.set(y,{}).get(y)];if(I===u.EventAppliesTo.PAGE){const t=a(g);return t?[t]:[]}const T=(e?.action?.config?.affectedElements??{})[g||m]||{},O=Boolean(T.id||T.selector);let A,w,S;const N=e&&c(gt(e.target));if(O?(A=T.limitAffectedElements,w=N,S=c(T)):
// pass in selectorGuids as well for server-side rendering.
w=S=c({id:g,selector:m,selectorGuids:_}),e&&b){
// eventTarget is not defined when this function is called in a clear request, so find
// all target elements associated with the event data, and return affected elements.
const t=n&&(S||!0===b)?[n]:s(N);if(S){if(b===F)return s(S).filter(e=>t.some(t=>h(e,t)));if(b===x)return s(S).filter(e=>t.some(t=>h(t,e)));if(b===M)return s(S).filter(e=>t.some(t=>E(t,e)))}return t}return null==w||null==S?[]:d.IS_BROWSER_ENV&&r?s(S).filter(t=>// @ts-expect-error - elementRoot is HTMLElement in browser
r.contains(t)):A===x?s(w,S):A===P?l(s(w)).filter(p(S)):A===M?f(s(w)).filter(p(S)):s(S)}function mt({element:t,actionItem:e}){if(!d.IS_BROWSER_ENV)return{};const{actionTypeId:n}=e;switch(n){case J:case tt:case et:case nt:case rt:return window.getComputedStyle(t);default:return{}}}const _t=/px/,It=(t,e)=>// @ts-expect-error - TS7006 - Parameter 'result' implicitly has an 'any' type. | TS7006 - Parameter 'filter' implicitly has an 'any' type.
e.reduce((t,e)=>(null==t[e.type]&&(t[e.type]=// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'Readonly<{ blur: 0; 'hue-rotate': 0; invert: 0; grayscale: 0; saturate: 100; sepia: 0; contrast: 100; brightness: 100; }>'.
xt[e.type]),t),t||{}),bt=(t,e)=>e.reduce((t,e)=>(null==t[e.type]&&(t[e.type]=// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'Readonly<{ wght: 0; opsz: 0; wdth: 0; slnt: 0; }>'.
Pt[e.type]||// @ts-expect-error - TS2339 - Property 'defaultValue' does not exist on type 'FontVariationItemConfigType'.
e.defaultValue||0),t),t||{});
// @ts-expect-error - TS7006 - Parameter 'filters' implicitly has an 'any' type.
function Tt(t,e={},n={},i,o){const{getStyle:a}=o,{actionTypeId:u}=i;
// Flow Hack: Passing actionTypeId to isPluginType and then trying
// to do type refinement using the same variable via a switch statement
// breaks down. This is is a workaround to ensure we can use type refinement.
if((0,f.isPluginType)(u))
// @ts-expect-error - TS2345 - Argument of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW" | "STYLE_OPACITY" | "STYLE_SIZE" | "STYLE_FILTER" | "STYLE_FONT_VARIATION" | "STYLE_BACKGROUND_COLOR" | "STYLE_BORDER" | "STYLE_TEXT_COLOR" | "PLUGIN_LOTTIE" | "GENERAL_DISPLAY"' is not assignable to parameter of type 'PluginType'. | TS7053 - Element implicitly has an 'any' type because expression of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW" | "STYLE_OPACITY" | "STYLE_SIZE" | "STYLE_FILTER" | "STYLE_FONT_VARIATION" | "STYLE_BACKGROUND_COLOR" | "STYLE_BORDER" | "STYLE_TEXT_COLOR" | "PLUGIN_LOTTIE" | "GENERAL_DISPLAY"' can't be used to index type '{}'.
return(0,f.getPluginOrigin)(u)(e[u],i);switch(i.actionTypeId){case H:case $:case Y:case K:// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW"' can't be used to index type '{}'.
return e[i.actionTypeId]||Lt[i.actionTypeId];case q:return It(// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"STYLE_FILTER"' can't be used to index type '{}'.
e[i.actionTypeId],i.config.filters);case Z:return bt(// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type '"STYLE_FONT_VARIATION"' can't be used to index type '{}'.
e[i.actionTypeId],i.config.fontVariations);case Q:return{value:(0,r.default)(parseFloat(a(t,O)),1)};case J:{const e=a(t,S),o=a(t,N);let u,c;
// When destination unit is 'AUTO', ensure origin values are in px
return u=i.config.widthUnit===k?_t.test(e)?parseFloat(e):parseFloat(n.width):(0,r.default)(parseFloat(e),// @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
parseFloat(n.width)),c=i.config.heightUnit===k?_t.test(o)?parseFloat(o):parseFloat(n.height):(0,r.default)(parseFloat(o),// @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
parseFloat(n.height)),{widthValue:u,heightValue:c}}case tt:case et:case nt:
// @ts-expect-error - TS7031 - Binding element 'element' implicitly has an 'any' type. | TS7031 - Binding element 'actionTypeId' implicitly has an 'any' type. | TS7031 - Binding element 'computedStyle' implicitly has an 'any' type. | TS7031 - Binding element 'getStyle' implicitly has an 'any' type.
return function({element:t,actionTypeId:e,computedStyle:n,getStyle:i}){
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'Readonly<{ STYLE_BACKGROUND_COLOR: "backgroundColor"; STYLE_BORDER: "borderColor"; STYLE_TEXT_COLOR: "color"; }>'.
const o=at[e],a=i(t,o),u=Dt.test(a)?a:n[o],c=function(t,e){const n=t.exec(e);return n?n[1]:""}(jt,u).split(G);return{
// @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
rValue:(0,r.default)(parseInt(c[0],10),255),
// @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
gValue:(0,r.default)(parseInt(c[1],10),255),
// @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
bValue:(0,r.default)(parseInt(c[2],10),255),
// @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
aValue:(0,r.default)(parseFloat(c[3]),1)}}({element:t,actionTypeId:i.actionTypeId,computedStyle:n,getStyle:a});case rt:return{
// @ts-expect-error - TS18047 - 'computedStyle' is possibly 'null'.
value:(0,r.default)(a(t,D),n.display)};
// @ts-expect-error - `OBJECT_VALUE` is not an expected `actionTypeId`
case it:
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'any' can't be used to index type '{}'. | TS2339 - Property 'actionTypeId' does not exist on type 'never'.
return e[i.actionTypeId]||{value:0};default:
// As far as the type system can tell, we're missing a handler for
// PLUGIN_LOTTIE.
// This is actually handled by `isPluginType` above.
/*:: (actionItem: empty); */return}}
// @ts-expect-error - TS7006 - Parameter 'result' implicitly has an 'any' type. | TS7006 - Parameter 'filter' implicitly has an 'any' type.
const Ot=(t,e)=>(e&&(t[e.type]=e.value||0),t),At=(t,e)=>(e&&(t[e.type]=e.value||0),t),wt=(t,e,n)=>{if((0,f.isPluginType)(t))return(0,f.getPluginConfig)(t)(n,e);switch(t){case q:{const t=(0,o.default)(n.filters,({type:t})=>t===e);return t?t.value:0}case Z:{const t=(0,o.default)(n.fontVariations,({type:t})=>t===e);return t?t.value:0}default:return n[e]}};function St({element:t,actionItem:e,elementApi:n}){if((0,f.isPluginType)(e.actionTypeId))
// @ts-expect-error - TS2345 - Argument of type '"TRANSFORM_MOVE" | "TRANSFORM_SCALE" | "TRANSFORM_ROTATE" | "TRANSFORM_SKEW" | "STYLE_OPACITY" | "STYLE_SIZE" | "STYLE_FILTER" | "STYLE_FONT_VARIATION" | "STYLE_BACKGROUND_COLOR" | "STYLE_BORDER" | "STYLE_TEXT_COLOR" | "PLUGIN_LOTTIE" | "GENERAL_DISPLAY"' is not assignable to parameter of type 'PluginType'.
return(0,f.getPluginDestination)(e.actionTypeId)(e.config);switch(e.actionTypeId){case H:case $:case Y:case K:{const{xValue:t,yValue:n,zValue:r}=e.config;return{xValue:t,yValue:n,zValue:r}}case J:{const{getStyle:r,setStyle:i,getProperty:o}=n,{widthUnit:a,heightUnit:u}=e.config;let{widthValue:c,heightValue:s}=e.config;if(!d.IS_BROWSER_ENV)return{widthValue:c,heightValue:s};if(a===k){const e=r(t,S);i(t,S,""),
// @ts-expect-error - TS2322 - Type 'string | null' is not assignable to type 'number | undefined'.
c=o(t,"offsetWidth"),i(t,S,e)}if(u===k){const e=r(t,N);i(t,N,""),
// @ts-expect-error - TS2322 - Type 'string | null' is not assignable to type 'number | undefined'.
s=o(t,"offsetHeight"),i(t,N,e)}return{widthValue:c,heightValue:s}}case tt:case et:case nt:{const{rValue:r,gValue:i,bValue:o,aValue:a,globalSwatchId:u}=e.config;if(u&&u.startsWith("--")){const{getStyle:e}=n,r=e(t,u),i=(0,l.normalizeColor)(r);return{rValue:i.red,gValue:i.green,bValue:i.blue,aValue:i.alpha}}return{rValue:r,gValue:i,bValue:o,aValue:a}}case q:return e.config.filters.reduce(Ot,{});case Z:return e.config.fontVariations.reduce(At,{});default:{const{value:t}=e.config;return{value:t}}}}function Nt(t){return/^TRANSFORM_/.test(t)?X:/^STYLE_/.test(t)?W:/^GENERAL_/.test(t)?B:/^PLUGIN_/.test(t)?z:void 0}function Rt(t,e){return t===W?e.replace("STYLE_","").toLowerCase():null}function Ct(t,e,n,r,o,a,u,c,s){switch(c){case X:return function(t,e,n,r,i){const o=Ft.map(t=>{
// @ts-expect-error - TS7053 - Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{ readonly TRANSFORM_MOVE: Readonly<{ xValue: 0; yValue: 0; zValue: 0; }>; readonly TRANSFORM_SCALE: Readonly<{ xValue: 1; yValue: 1; zValue: 1; }>; readonly TRANSFORM_ROTATE: Readonly<{ xValue: 0; yValue: 0; zValue: 0; }>; readonly TRANSFORM_SKEW: Readonly<...>; }'.
const n=Lt[t],{xValue:r=n.xValue,yValue:i=n.yValue,zValue:o=n.zValue,xUnit:a="",yUnit:u="",zUnit:c=""}=e[t]||{};switch(t){case H:return`${v}(${r}${a}, ${i}${u}, ${o}${c})`;case $:return`${g}(${r}${a}, ${i}${u}, ${o}${c})`;case Y:return`${y}(${r}${a}) ${m}(${i}${u}) ${_}(${o}${c})`;case K:return`${I}(${r}${a}, ${i}${u})`;default:return""}}).join(" "),{setStyle:a}=i;kt(t,d.TRANSFORM_PREFIXED,i),a(t,d.TRANSFORM_PREFIXED,o),
// Set transform-style: preserve-3d
// @ts-expect-error - TS7031 - Binding element 'actionTypeId' implicitly has an 'any' type. | TS7031 - Binding element 'xValue' implicitly has an 'any' type. | TS7031 - Binding element 'yValue' implicitly has an 'any' type. | TS7031 - Binding element 'zValue' implicitly has an 'any' type.
function({actionTypeId:t},{xValue:e,yValue:n,zValue:r}){
// TRANSLATE_Z
return t===H&&void 0!==r||// SCALE_Z
t===$&&void 0!==r||// ROTATE_X or ROTATE_Y
t===Y&&(void 0!==e||void 0!==n)}(r,n)&&a(t,d.TRANSFORM_STYLE_PREFIXED,b)}(t,e,n,o,u);case W:return function(t,e,n,r,o,a){const{setStyle:u}=a;switch(r.actionTypeId){case J:{let{widthUnit:e="",heightUnit:i=""}=r.config;const{widthValue:o,heightValue:c}=n;void 0!==o&&(e===k&&(e="px"),kt(t,S,a),u(t,S,o+e)),void 0!==c&&(i===k&&(i="px"),kt(t,N,a),u(t,N,c+i));break}case q:!function(t,e,n,r){const o=(0,i.default)(e,(t,e,r)=>`${t} ${r}(${e}${Mt(r,n)})`,""),{setStyle:a}=r;kt(t,A,r),a(t,A,o)}(t,n,r.config,a);break;case Z:!function(t,e,n,r){const o=(0,i.default)(e,(t,e,n)=>(
// @ts-expect-error - TS2345 - Argument of type 'string' is not assignable to parameter of type 'never'.
t.push(`"${n}" ${e}`),t),[]).join(", "),{setStyle:a}=r;kt(t,w,r),a(t,w,o)}(t,n,r.config,a);break;case tt:case et:case nt:{const e=at[r.actionTypeId],i=Math.round(n.rValue),o=Math.round(n.gValue),c=Math.round(n.bValue),s=n.aValue;kt(t,e,a),u(t,e,s>=1?`rgb(${i},${o},${c})`:`rgba(${i},${o},${c},${s})`);break}default:{
// @ts-expect-error - TS2339 - Property 'unit' does not exist on type '{ delay: number; easing: IX2EasingType; duration: number; target: ActionItemTargetType; xValue: number | undefined; yValue: number | undefined; zValue: number | undefined; xUnit: "%" | ... 4 more ... | "VW"; yUnit: "%" | ... 4 more ... | "VW"; zUnit: "%" | ... 4 more ... | "VW"; } | ... 5 more ... | { ...; }'.
const{unit:e=""}=r.config;kt(t,o,a),u(t,o,n.value+e);break}}}(t,0,n,o,a,u);case B:return function(t,e,n){const{setStyle:r}=n;if(e.actionTypeId===rt){const{value:n}=e.config;return void(n===T&&d.IS_BROWSER_ENV?r(t,D,d.FLEX_PREFIXED):r(t,D,n))}}(t,o,u);case z:{const{actionTypeId:t}=o;if((0,f.isPluginType)(t))return(0,f.renderPlugin)(t)(s,e,o)}}}const Lt={[H]:Object.freeze({xValue:0,yValue:0,zValue:0}),[$]:Object.freeze({xValue:1,yValue:1,zValue:1}),[Y]:Object.freeze({xValue:0,yValue:0,zValue:0}),[K]:Object.freeze({xValue:0,yValue:0})},xt=Object.freeze({blur:0,"hue-rotate":0,invert:0,grayscale:0,saturate:100,sepia:0,contrast:100,brightness:100}),Pt=Object.freeze({wght:0,opsz:0,wdth:0,slnt:0}),Mt=(t,e)=>{const n=(0,o.default)(e.filters,({type:e})=>e===t);if(n&&n.unit)return n.unit;switch(t){case"blur":return"px";case"hue-rotate":return"deg";default:return"%"}},Ft=Object.keys(Lt),Dt=/^rgb/,jt=RegExp("rgba?\\(([^)]+)\\)");function kt(t,e,n){if(!d.IS_BROWSER_ENV)return;const r=ut[e];if(!r)return;const{getStyle:i,setStyle:o}=n,a=i(t,j);if(!a)return void o(t,j,r);const u=a.split(G).map(ot);-1===u.indexOf(r)&&o(t,j,u.concat(r).join(G))}
// @ts-expect-error - TS7006 - Parameter 'prop' implicitly has an 'any' type.
function Gt(t,e,n){if(!d.IS_BROWSER_ENV)return;const r=ut[e];if(!r)return;const{getStyle:i,setStyle:o}=n,a=i(t,j);a&&-1!==a.indexOf(r)&&o(t,j,a.split(G).map(ot).filter(t=>t!==r).join(G))}function Vt({store:t,elementApi:e}){const{ixData:n}=t.getState(),{events:r={},actionLists:i={}}=n;Object.keys(r).forEach(t=>{const n=r[t],{config:o}=n.action,{actionListId:a}=o,u=i[a];u&&Ut({actionList:u,event:n,elementApi:e})}),Object.keys(i).forEach(t=>{
// @ts-expect-error - TS2345 - Argument of type '{ actionList: any; elementApi: any; }' is not assignable to parameter of type '{ actionList?: {} | undefined; event: any; elementApi: any; }'.
Ut({actionList:i[t],elementApi:e})})}
// @ts-expect-error - TS7031 - Binding element 'event' implicitly has an 'any' type. | TS7031 - Binding element 'elementApi' implicitly has an 'any' type.
function Ut({actionList:t={},event:e,elementApi:n}){
// @ts-expect-error - TS2339 - Property 'actionItemGroups' does not exist on type '{}'. | TS2339 - Property 'continuousParameterGroups' does not exist on type '{}'.
const{actionItemGroups:r,continuousParameterGroups:i}=t;r&&// @ts-expect-error - TS7006 - Parameter 'actionGroup' implicitly has an 'any' type.
r.forEach(t=>{Xt({actionGroup:t,event:e,elementApi:n})}),i&&// @ts-expect-error - TS7006 - Parameter 'paramGroup' implicitly has an 'any' type.
i.forEach(t=>{const{continuousActionGroups:r}=t;
// @ts-expect-error - TS7006 - Parameter 'actionGroup' implicitly has an 'any' type.
r.forEach(t=>{Xt({actionGroup:t,event:e,elementApi:n})})})}
// @ts-expect-error - TS7031 - Binding element 'actionGroup' implicitly has an 'any' type. | TS7031 - Binding element 'event' implicitly has an 'any' type. | TS7031 - Binding element 'elementApi' implicitly has an 'any' type.
function Xt({actionGroup:t,event:e,elementApi:n}){const{actionItems:r}=t;
// @ts-expect-error - TS7006 - Parameter 'actionItem' implicitly has an 'any' type.
r.forEach(t=>{const{actionTypeId:r,config:i}=t;let o;
// @ts-expect-error - TS7006 - Parameter 'ref' implicitly has an 'any' type.
o=(0,f.isPluginType)(r)?e=>(0,f.clearPlugin)(r)(e,t):Wt({effect:zt,actionTypeId:r,elementApi:n}),yt({config:i,event:e,elementApi:n}).forEach(o)})}function Bt(t,e,n){const{setStyle:r,getStyle:i}=n,{actionTypeId:o}=e;if(o===J){const{config:n}=e;n.widthUnit===k&&r(t,S,""),n.heightUnit===k&&r(t,N,"")}i(t,j)&&Wt({effect:Gt,actionTypeId:o,elementApi:n})(t)}const Wt=({effect:t,actionTypeId:e,elementApi:n})=>// @ts-expect-error - TS7006 - Parameter 'element' implicitly has an 'any' type.
r=>{switch(e){case H:case $:case Y:case K:t(r,d.TRANSFORM_PREFIXED,n);break;case q:t(r,A,n);break;case Z:t(r,w,n);break;case Q:t(r,O,n);break;case J:t(r,S,n),t(r,N,n);break;case tt:case et:case nt:t(r,at[e],n);break;case rt:t(r,D,n)}};
// @ts-expect-error - TS7006 - Parameter 'prop' implicitly has an 'any' type.
function zt(t,e,n){const{setStyle:r}=n;Gt(t,e,n),r(t,e,""),
// Clear transform-style: preserve-3d
e===d.TRANSFORM_PREFIXED&&r(t,d.TRANSFORM_STYLE_PREFIXED,"")}function Ht(t){let e=0,n=0;
// @ts-expect-error - TS7006 - Parameter 'actionItem' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type.
return t.forEach((t,r)=>{const{config:i}=t,o=i.delay+i.duration;o>=e&&(e=o,n=r)}),n}function $t(t,e){const{actionItemGroups:n,useFirstGroupAsInitialState:r}=t,{actionItem:i,verboseTimeElapsed:o=0}=e;let a=0,u=0;
// @ts-expect-error - TS7006 - Parameter 'group' implicitly has an 'any' type. | TS7006 - Parameter 'index' implicitly has an 'any' type.
return n.forEach((t,e)=>{if(r&&0===e)return;const{actionItems:n}=t,c=n[Ht(n)],{config:s,actionTypeId:l}=c;i.id===c.id&&(u=a+o);const f=Nt(l)===B?0:s.duration;a+=s.delay+f}),a>0?(0,s.optimizeFloat)(u/a):0}function Yt({actionList:t,actionItemId:e,rawData:n}){
// @ts-expect-error - FIXME - TS2339 - Property 'actionItemGroups' does not exist on type 'ActionListType'.
const{actionItemGroups:r,continuousParameterGroups:i}=t,o=[],u=t=>(o.push((0,a.mergeIn)(t,["config"],{delay:0,duration:0})),t.id===e);return r&&r.some(({actionItems:t})=>t.some(u)),i&&i.some(t=>{const{continuousActionGroups:e}=t;return e.some(({actionItems:t})=>t.some(u))}),(0,a.setIn)(n,["actionLists"],{[t.id]:{id:t.id,actionItemGroups:[{actionItems:o}]}})}function Kt(t,{basedOn:e}){return t===u.EventTypeConsts.SCROLLING_IN_VIEW&&(e===u.EventBasedOn.ELEMENT||null==e)||t===u.EventTypeConsts.MOUSE_MOVE&&e===u.EventBasedOn.ELEMENT}function Qt(t,e){return t+V+e}function qt(t,e){
// During design mode, current media query key does not exist
return null==e||-1!==t.indexOf(e)}function Zt(t,e){return(0,c.default)(t&&t.sort(),e&&e.sort())}function Jt(t){if("string"==typeof t)return t;if(t.pluginElement&&t.objectId)return t.pluginElement+U+t.objectId;if(t.objectId)return t.objectId;const{id:e="",selector:n="",useEventTarget:r=""}=t;return e+U+n+U+r}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC9sb2dpYy9JWDJWYW5pbGxhVXRpbHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbmltcG9ydCB0eXBlIHtcbiAgQ29udGludW91c1BhcmFtZXRlckdyb3VwSWQsXG4gIEFjdGlvbkl0ZW1UeXBlLFxuICBBY3Rpb25JZCxcbiAgRm9udFZhcmlhdGlvbkl0ZW1Db25maWdUeXBlLFxuICBGb250VmFyaWF0aW9uQWN0aW9uQ29uZmlnVHlwZSxcbiAgRXZlbnRUeXBlLFxuICBBY3Rpb25MaXN0VHlwZSxcbiAgQWN0aW9uSXRlbXNUeXBlLFxuICBDb250aW51b3VzUGFyYW1ldGVyR3JvdXBUeXBlLFxufSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvdHlwZXMtY29yZSc7XG5cbmltcG9ydCBkZWZhdWx0VG8gZnJvbSAnbG9kYXNoL2RlZmF1bHRUbyc7XG5pbXBvcnQgcmVkdWNlIGZyb20gJ2xvZGFzaC9yZWR1Y2UnO1xuaW1wb3J0IGZpbmRMYXN0IGZyb20gJ2xvZGFzaC9maW5kTGFzdCc7XG5pbXBvcnQge3NldEluLCBtZXJnZUlufSBmcm9tICd0aW1tJztcbmltcG9ydCB7XG4gIEV2ZW50VHlwZUNvbnN0cyxcbiAgRXZlbnRBcHBsaWVzVG8sXG4gIEV2ZW50QmFzZWRPbixcbiAgQWN0aW9uVHlwZUNvbnN0cyxcbiAgSVgyRW5naW5lQ29uc3RhbnRzLFxufSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvc2hhcmVkLWNvbnN0YW50cyc7XG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gJy4vc2hhbGxvd0VxdWFsJztcblxuaW1wb3J0IHtvcHRpbWl6ZUZsb2F0fSBmcm9tICcuL0lYMkVhc2luZ1V0aWxzJztcblxuLy8gSW1wb3J0aW5nIGRpcmVjdGx5IHRvIGF2b2lkIGltcG9ydGluZyB0aGUgZW50aXJlIHNoYXJlZC11dGlscyBwYWNrYWdlLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHdlYmZsb3cvcGFja2FnZS1ib3VuZGFyaWVzXG5pbXBvcnQge25vcm1hbGl6ZUNvbG9yfSBmcm9tICcuLi8uLi9zaGFyZWQtdXRpbHMvbm9ybWFsaXplQ29sb3InO1xuaW1wb3J0IHtcbiAgaXNQbHVnaW5UeXBlLFxuICBnZXRQbHVnaW5Db25maWcsXG4gIGdldFBsdWdpbk9yaWdpbixcbiAgZ2V0UGx1Z2luRGVzdGluYXRpb24sXG4gIHJlbmRlclBsdWdpbixcbiAgY2xlYXJQbHVnaW4sXG59IGZyb20gJy4vSVgyVmFuaWxsYVBsdWdpbnMnO1xuXG5pbXBvcnQge1xuICBJU19CUk9XU0VSX0VOVixcbiAgRkxFWF9QUkVGSVhFRCxcbiAgVFJBTlNGT1JNX1BSRUZJWEVELFxuICBUUkFOU0ZPUk1fU1RZTEVfUFJFRklYRUQsXG59IGZyb20gJy4vSVgyQnJvd3NlclN1cHBvcnQnO1xuaW1wb3J0IHtcbiAgdHlwZSBJWDJSYXdEYXRhLFxuICB0eXBlIHJhd0RhdGFJbXBvcnRlZFBheWxvYWQsXG59IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL2l4Mi9lbmdpbmUnO1xuaW1wb3J0IHtCcmVha3BvaW50SUR9IGZyb20gJ0BwYWNrYWdlcy9zeXN0ZW1zL3N0eWxlL3R5cGVzJztcbmltcG9ydCB7UmVmVHlwZXN9IGZyb20gJy4uL3JlZHVjZXJzL0lYMkVsZW1lbnRzUmVkdWNlcic7XG5cbmV4cG9ydCB0eXBlIEVsZW1lbnRBcGk8RWxlbWVudFR5cGUsIFNlbGVjdG9yVHlwZT4gPSB7XG4gIGdldFN0eWxlOiAoYXJnMTogRWxlbWVudFR5cGUsIGFyZzI6IHN0cmluZykgPT4gc3RyaW5nO1xuICBzZXRTdHlsZTogKGFyZzE6IEVsZW1lbnRUeXBlLCBhcmcyOiBzdHJpbmcsIGFyZzM6IHN0cmluZykgPT4gdm9pZDtcbiAgZ2V0UHJvcGVydHk6IChhcmcxOiBFbGVtZW50VHlwZSwgYXJnMjogc3RyaW5nKSA9PiBudWxsIHwgc3RyaW5nO1xuICBnZXRWYWxpZERvY3VtZW50OiAoYXJnMTogSVgyVGFyZ2V0KSA9PiBhbnk7XG4gIGdldFF1ZXJ5U2VsZWN0b3I6IChhcmcxOiBJWDJUYXJnZXQpID0+IG51bGwgfCBTZWxlY3RvclR5cGU7XG4gIC8vIFNob3VsZCB0aGVzZSBgQXJyYXlgcyBiZSBgTm9kZUxpc3Rgcz9cbiAgcXVlcnlEb2N1bWVudDogKFxuICAgIGFyZzE6IFNlbGVjdG9yVHlwZSxcbiAgICBhcmcyPzogU2VsZWN0b3JUeXBlIHwgbnVsbCB8IHVuZGVmaW5lZFxuICApID0+IEVsZW1lbnRUeXBlW107XG4gIGdldENoaWxkRWxlbWVudHM6IChhcmcxOiBFbGVtZW50VHlwZVtdKSA9PiBFbGVtZW50VHlwZVtdO1xuICBnZXRTaWJsaW5nRWxlbWVudHM6IChhcmcxOiBFbGVtZW50VHlwZVtdKSA9PiBFbGVtZW50VHlwZVtdO1xuXG4gIG1hdGNoU2VsZWN0b3I6IChhcmcxOiBTZWxlY3RvclR5cGUpID0+IChhcmcxOiBFbGVtZW50VHlwZSkgPT4gYm9vbGVhbjtcbiAgZWxlbWVudENvbnRhaW5zOiAoYXJnMTogRWxlbWVudFR5cGUsIGFyZzI6IEVsZW1lbnRUeXBlKSA9PiBib29sZWFuO1xuICBpc1NpYmxpbmdOb2RlOiAoYXJnMTogRWxlbWVudFR5cGUsIGFyZzI6IEVsZW1lbnRUeXBlKSA9PiBib29sZWFuO1xuICBnZXRDbG9zZXN0RWxlbWVudDogKFxuICAgIGFyZzE6IEVsZW1lbnRUeXBlLFxuICAgIGFyZzI6IHN0cmluZ1xuICApID0+IEVsZW1lbnRUeXBlIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgZ2V0UmVmVHlwZTogKGFyZzE6IEVsZW1lbnRUeXBlKSA9PiBSZWZUeXBlcyB8IG51bGw7XG59O1xuXG5jb25zdCB7XG4gIEJBQ0tHUk9VTkQsXG4gIFRSQU5TRk9STSxcbiAgVFJBTlNMQVRFXzNELFxuICBTQ0FMRV8zRCxcbiAgUk9UQVRFX1gsXG4gIFJPVEFURV9ZLFxuICBST1RBVEVfWixcbiAgU0tFVyxcbiAgUFJFU0VSVkVfM0QsXG4gIEZMRVgsXG4gIE9QQUNJVFksXG4gIEZJTFRFUixcbiAgRk9OVF9WQVJJQVRJT05fU0VUVElOR1MsXG4gIFdJRFRILFxuICBIRUlHSFQsXG4gIEJBQ0tHUk9VTkRfQ09MT1IsXG4gIEJPUkRFUl9DT0xPUixcbiAgQ09MT1IsXG4gIENISUxEUkVOLFxuICBJTU1FRElBVEVfQ0hJTERSRU4sXG4gIFNJQkxJTkdTLFxuICBQQVJFTlQsXG4gIERJU1BMQVksXG4gIFdJTExfQ0hBTkdFLFxuICBBVVRPLFxuICBDT01NQV9ERUxJTUlURVIsXG4gIENPTE9OX0RFTElNSVRFUixcbiAgQkFSX0RFTElNSVRFUixcbiAgUkVOREVSX1RSQU5TRk9STSxcbiAgUkVOREVSX0dFTkVSQUwsXG4gIFJFTkRFUl9TVFlMRSxcbiAgUkVOREVSX1BMVUdJTixcbn0gPSBJWDJFbmdpbmVDb25zdGFudHM7XG5cbmNvbnN0IHtcbiAgVFJBTlNGT1JNX01PVkUsXG4gIFRSQU5TRk9STV9TQ0FMRSxcbiAgVFJBTlNGT1JNX1JPVEFURSxcbiAgVFJBTlNGT1JNX1NLRVcsXG4gIFNUWUxFX09QQUNJVFksXG4gIFNUWUxFX0ZJTFRFUixcbiAgU1RZTEVfRk9OVF9WQVJJQVRJT04sXG4gIFNUWUxFX1NJWkUsXG4gIFNUWUxFX0JBQ0tHUk9VTkRfQ09MT1IsXG4gIFNUWUxFX0JPUkRFUixcbiAgU1RZTEVfVEVYVF9DT0xPUixcbiAgR0VORVJBTF9ESVNQTEFZLFxuICBPQkpFQ1RfVkFMVUUsXG59ID0gQWN0aW9uVHlwZUNvbnN0cztcblxuZXhwb3J0IHtzaGFsbG93RXF1YWx9O1xuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICd2JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuY29uc3QgdHJpbSA9ICh2KSA9PiB2LnRyaW0oKTtcblxuY29uc3QgY29sb3JTdHlsZVByb3BzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIFtTVFlMRV9CQUNLR1JPVU5EX0NPTE9SXTogQkFDS0dST1VORF9DT0xPUixcbiAgW1NUWUxFX0JPUkRFUl06IEJPUkRFUl9DT0xPUixcbiAgW1NUWUxFX1RFWFRfQ09MT1JdOiBDT0xPUixcbn0pO1xuXG5jb25zdCB3aWxsQ2hhbmdlUHJvcHMgPSBPYmplY3QuZnJlZXplKHtcbiAgW1RSQU5TRk9STV9QUkVGSVhFRF06IFRSQU5TRk9STSxcbiAgW0JBQ0tHUk9VTkRfQ09MT1JdOiBCQUNLR1JPVU5ELFxuICBbT1BBQ0lUWV06IE9QQUNJVFksXG4gIFtGSUxURVJdOiBGSUxURVIsXG4gIFtXSURUSF06IFdJRFRILFxuICBbSEVJR0hUXTogSEVJR0hULFxuICBbRk9OVF9WQVJJQVRJT05fU0VUVElOR1NdOiBGT05UX1ZBUklBVElPTl9TRVRUSU5HUyxcbn0pO1xuXG5jb25zdCBvYmplY3RDYWNoZSA9IG5ldyBNYXAoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyT2JqZWN0Q2FjaGUoKSB7XG4gIG9iamVjdENhY2hlLmNsZWFyKCk7XG59XG5cbmxldCBpbnN0YW5jZUNvdW50ID0gMTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbnN0YW5jZUlkKCkge1xuICByZXR1cm4gJ2knICsgaW5zdGFuY2VDb3VudCsrO1xufVxuXG5sZXQgZWxlbWVudENvdW50ID0gMTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50SWQoaXhFbGVtZW50czogYW55LCByZWY6IGFueSkge1xuICAvLyBUT0RPOiBvcHRpbWl6ZSBlbGVtZW50IGxvb2t1cFxuICBmb3IgKGNvbnN0IGtleSBpbiBpeEVsZW1lbnRzKSB7XG4gICAgY29uc3QgaXhFbCA9IGl4RWxlbWVudHNba2V5XTtcbiAgICBpZiAoaXhFbCAmJiBpeEVsLnJlZiA9PT0gcmVmKSB7XG4gICAgICByZXR1cm4gaXhFbC5pZDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuICdlJyArIGVsZW1lbnRDb3VudCsrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVpZnlTdGF0ZSh7XG4gIGV2ZW50cyxcbiAgYWN0aW9uTGlzdHMsXG4gIHNpdGUsXG59OiBQYXJ0aWFsPElYMlJhd0RhdGE+ID0ge30pOiByYXdEYXRhSW1wb3J0ZWRQYXlsb2FkIHtcbiAgY29uc3QgZXZlbnRUeXBlTWFwID0gcmVkdWNlKFxuICAgIGV2ZW50cyxcbiAgICAocmVzdWx0LCBldmVudCkgPT4ge1xuICAgICAgY29uc3Qge2V2ZW50VHlwZUlkfSA9IGV2ZW50O1xuXG4gICAgICBpZiAoIXJlc3VsdFtldmVudFR5cGVJZF0pIHtcbiAgICAgICAgcmVzdWx0W2V2ZW50VHlwZUlkXSA9IHt9IGFzIHtba2V5OiBzdHJpbmddOiBFdmVudFR5cGV9O1xuICAgICAgfVxuXG4gICAgICByZXN1bHRbZXZlbnRUeXBlSWRdW2V2ZW50LmlkXSA9IGV2ZW50O1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIHt9IGFzIHJhd0RhdGFJbXBvcnRlZFBheWxvYWRbJ2l4RGF0YSddWydldmVudFR5cGVNYXAnXVxuICApO1xuXG4gIGxldCBtZWRpYVF1ZXJpZXMgPSBzaXRlICYmIHNpdGUubWVkaWFRdWVyaWVzO1xuICBsZXQgbWVkaWFRdWVyeUtleXMgPSBbXSBhcyBCcmVha3BvaW50SURbXTtcbiAgaWYgKG1lZGlhUXVlcmllcykge1xuICAgIG1lZGlhUXVlcnlLZXlzID0gbWVkaWFRdWVyaWVzLm1hcCgobXEpID0+IG1xLmtleSk7XG4gIH0gZWxzZSB7XG4gICAgbWVkaWFRdWVyaWVzID0gW107XG4gICAgY29uc29sZS53YXJuKGBJWDIgbWlzc2luZyBtZWRpYVF1ZXJpZXMgaW4gc2l0ZSBkYXRhYCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGl4RGF0YToge1xuICAgICAgZXZlbnRzLFxuICAgICAgYWN0aW9uTGlzdHMsXG4gICAgICBldmVudFR5cGVNYXAsXG4gICAgICBtZWRpYVF1ZXJpZXMsXG4gICAgICBtZWRpYVF1ZXJ5S2V5cyxcbiAgICB9LFxuICB9O1xufVxuXG5jb25zdCBzdHJpY3RFcXVhbCA9IChhOiBhbnksIGI6IGFueSkgPT4gYSA9PT0gYjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9ic2VydmVTdG9yZSh7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ3N0b3JlJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBzdG9yZSxcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnc2VsZWN0JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBzZWxlY3QsXG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ29uQ2hhbmdlJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBvbkNoYW5nZSxcbiAgY29tcGFyYXRvciA9IHN0cmljdEVxdWFsLFxufSkge1xuICBjb25zdCB7Z2V0U3RhdGUsIHN1YnNjcmliZX0gPSBzdG9yZTtcbiAgY29uc3QgdW5zdWJzY3JpYmUgPSBzdWJzY3JpYmUoaGFuZGxlQ2hhbmdlKTtcbiAgbGV0IGN1cnJlbnRTdGF0ZSA9IHNlbGVjdChnZXRTdGF0ZSgpKTtcbiAgZnVuY3Rpb24gaGFuZGxlQ2hhbmdlKCkge1xuICAgIGNvbnN0IG5leHRTdGF0ZSA9IHNlbGVjdChnZXRTdGF0ZSgpKTtcbiAgICBpZiAobmV4dFN0YXRlID09IG51bGwpIHtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghY29tcGFyYXRvcihuZXh0U3RhdGUsIGN1cnJlbnRTdGF0ZSkpIHtcbiAgICAgIGN1cnJlbnRTdGF0ZSA9IG5leHRTdGF0ZTtcbiAgICAgIG9uQ2hhbmdlKGN1cnJlbnRTdGF0ZSwgc3RvcmUpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdW5zdWJzY3JpYmU7XG59XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ3RhcmdldCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVRhcmdldCh0YXJnZXQpIHtcbiAgY29uc3QgdHlwZSA9IHR5cGVvZiB0YXJnZXQ7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB7aWQ6IHRhcmdldH07XG4gIH0gZWxzZSBpZiAodGFyZ2V0ICE9IG51bGwgJiYgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBjb25zdCB7aWQsIG9iamVjdElkLCBzZWxlY3Rvciwgc2VsZWN0b3JHdWlkcywgYXBwbGllc1RvLCB1c2VFdmVudFRhcmdldH0gPVxuICAgICAgdGFyZ2V0O1xuICAgIHJldHVybiB7aWQsIG9iamVjdElkLCBzZWxlY3Rvciwgc2VsZWN0b3JHdWlkcywgYXBwbGllc1RvLCB1c2VFdmVudFRhcmdldH07XG4gIH1cbiAgcmV0dXJuIHt9O1xufVxuXG50eXBlIElYMlRhcmdldCA9IGFueTsgLy8gc2VyaWFsaXplZCBJWDJFdmVudFRhcmdldERhdGFcblxudHlwZSBBZmZlY3RlZEVsZW1lbnRzUHJvcHM8RWxlbWVudFR5cGUsIFNlbGVjdG9yVHlwZT4gPSB7XG4gIGNvbmZpZzoge1xuICAgIHRhcmdldDogSVgyVGFyZ2V0O1xuICAgIHRhcmdldHM/OiBBcnJheTxJWDJUYXJnZXQ+O1xuICB9O1xuICBldmVudD86IGFueTsgLy8gc2VyaWFsaXplZCBJWDJFdmVudFR5cGU7XG4gIGV2ZW50VGFyZ2V0PzogRWxlbWVudFR5cGUgfCBudWxsIHwgdW5kZWZpbmVkO1xuICBlbGVtZW50Um9vdD86IEVsZW1lbnRUeXBlIHwgbnVsbCB8IHVuZGVmaW5lZDtcbiAgZWxlbWVudEFwaTogRWxlbWVudEFwaTxFbGVtZW50VHlwZSwgU2VsZWN0b3JUeXBlPjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBZmZlY3RlZEVsZW1lbnRzPEVsZW1lbnRUeXBlLCBTZWxlY3RvclR5cGU+KHtcbiAgY29uZmlnLFxuICBldmVudCxcbiAgZXZlbnRUYXJnZXQsXG4gIGVsZW1lbnRSb290LFxuICBlbGVtZW50QXBpLFxufTogQWZmZWN0ZWRFbGVtZW50c1Byb3BzPEVsZW1lbnRUeXBlLCBTZWxlY3RvclR5cGU+KTogRWxlbWVudFR5cGVbXSB7XG4gIGlmICghZWxlbWVudEFwaSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSVgyIG1pc3NpbmcgZWxlbWVudEFwaScpO1xuICB9XG5cbiAgY29uc3Qge3RhcmdldHN9ID0gY29uZmlnO1xuICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXRzKSAmJiB0YXJnZXRzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gdGFyZ2V0cy5yZWR1Y2U8QXJyYXk8YW55Pj4oXG4gICAgICAoYWNjdW11bGF0b3IsIHRhcmdldCk6IEFycmF5PEhUTUxFbGVtZW50PiA9PlxuICAgICAgICBhY2N1bXVsYXRvci5jb25jYXQoXG4gICAgICAgICAgZ2V0QWZmZWN0ZWRFbGVtZW50cyh7XG4gICAgICAgICAgICBjb25maWc6IHt0YXJnZXR9LFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICBldmVudFRhcmdldCxcbiAgICAgICAgICAgIGVsZW1lbnRSb290LFxuICAgICAgICAgICAgZWxlbWVudEFwaSxcbiAgICAgICAgICB9KVxuICAgICAgICApLFxuICAgICAgW11cbiAgICApO1xuICB9XG5cbiAgY29uc3Qge1xuICAgIGdldFZhbGlkRG9jdW1lbnQsXG4gICAgZ2V0UXVlcnlTZWxlY3RvcixcbiAgICBxdWVyeURvY3VtZW50LFxuICAgIGdldENoaWxkRWxlbWVudHMsXG4gICAgZ2V0U2libGluZ0VsZW1lbnRzLFxuICAgIG1hdGNoU2VsZWN0b3IsXG4gICAgZWxlbWVudENvbnRhaW5zLFxuICAgIGlzU2libGluZ05vZGUsXG4gIH0gPSBlbGVtZW50QXBpO1xuXG4gIGNvbnN0IHt0YXJnZXR9ID0gY29uZmlnO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBpZCxcblxuICAgIG9iamVjdElkLFxuXG4gICAgc2VsZWN0b3IsXG5cbiAgICBzZWxlY3Rvckd1aWRzLFxuXG4gICAgYXBwbGllc1RvLFxuXG4gICAgdXNlRXZlbnRUYXJnZXQsXG4gIH0gPSBub3JtYWxpemVUYXJnZXQodGFyZ2V0KTtcblxuICBpZiAob2JqZWN0SWQpIHtcbiAgICBjb25zdCByZWYgPSBvYmplY3RDYWNoZS5oYXMob2JqZWN0SWQpXG4gICAgICA/IG9iamVjdENhY2hlLmdldChvYmplY3RJZClcbiAgICAgIDogb2JqZWN0Q2FjaGUuc2V0KG9iamVjdElkLCB7fSkuZ2V0KG9iamVjdElkKTtcbiAgICByZXR1cm4gW3JlZl07XG4gIH1cblxuICBpZiAoYXBwbGllc1RvID09PSBFdmVudEFwcGxpZXNUby5QQUdFKSB7XG4gICAgY29uc3QgZG9jID0gZ2V0VmFsaWREb2N1bWVudChpZCk7XG4gICAgcmV0dXJuIGRvYyA/IFtkb2NdIDogW107XG4gIH1cblxuICBjb25zdCBvdmVycmlkZXMgPSBldmVudD8uYWN0aW9uPy5jb25maWc/LmFmZmVjdGVkRWxlbWVudHMgPz8ge307XG4gIGNvbnN0IG92ZXJyaWRlID0gb3ZlcnJpZGVzW2lkIHx8IHNlbGVjdG9yXSB8fCB7fTtcbiAgY29uc3QgdmFsaWRPdmVycmlkZSA9IEJvb2xlYW4ob3ZlcnJpZGUuaWQgfHwgb3ZlcnJpZGUuc2VsZWN0b3IpO1xuXG4gIGxldCBsaW1pdEFmZmVjdGVkRWxlbWVudHM7XG4gIGxldCBiYXNlU2VsZWN0b3I7XG4gIGxldCBmaW5hbFNlbGVjdG9yO1xuXG4gIGNvbnN0IGV2ZW50VGFyZ2V0U2VsZWN0b3IgPVxuICAgIGV2ZW50ICYmIGdldFF1ZXJ5U2VsZWN0b3Iobm9ybWFsaXplVGFyZ2V0KGV2ZW50LnRhcmdldCkpO1xuXG4gIGlmICh2YWxpZE92ZXJyaWRlKSB7XG4gICAgbGltaXRBZmZlY3RlZEVsZW1lbnRzID0gb3ZlcnJpZGUubGltaXRBZmZlY3RlZEVsZW1lbnRzO1xuICAgIGJhc2VTZWxlY3RvciA9IGV2ZW50VGFyZ2V0U2VsZWN0b3I7XG4gICAgZmluYWxTZWxlY3RvciA9IGdldFF1ZXJ5U2VsZWN0b3Iob3ZlcnJpZGUpO1xuICB9IGVsc2Uge1xuICAgIC8vIHBhc3MgaW4gc2VsZWN0b3JHdWlkcyBhcyB3ZWxsIGZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuXG4gICAgYmFzZVNlbGVjdG9yID0gZmluYWxTZWxlY3RvciA9IGdldFF1ZXJ5U2VsZWN0b3Ioe1xuICAgICAgaWQsXG4gICAgICBzZWxlY3RvcixcbiAgICAgIHNlbGVjdG9yR3VpZHMsXG4gICAgfSk7XG4gIH1cblxuICBpZiAoZXZlbnQgJiYgdXNlRXZlbnRUYXJnZXQpIHtcbiAgICAvLyBldmVudFRhcmdldCBpcyBub3QgZGVmaW5lZCB3aGVuIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGluIGEgY2xlYXIgcmVxdWVzdCwgc28gZmluZFxuICAgIC8vIGFsbCB0YXJnZXQgZWxlbWVudHMgYXNzb2NpYXRlZCB3aXRoIHRoZSBldmVudCBkYXRhLCBhbmQgcmV0dXJuIGFmZmVjdGVkIGVsZW1lbnRzLlxuICAgIGNvbnN0IGV2ZW50VGFyZ2V0cyA9XG4gICAgICBldmVudFRhcmdldCAmJiAoZmluYWxTZWxlY3RvciB8fCB1c2VFdmVudFRhcmdldCA9PT0gdHJ1ZSlcbiAgICAgICAgPyBbZXZlbnRUYXJnZXRdXG4gICAgICAgIDogcXVlcnlEb2N1bWVudChldmVudFRhcmdldFNlbGVjdG9yKTtcblxuICAgIGlmIChmaW5hbFNlbGVjdG9yKSB7XG4gICAgICBpZiAodXNlRXZlbnRUYXJnZXQgPT09IFBBUkVOVCkge1xuICAgICAgICByZXR1cm4gcXVlcnlEb2N1bWVudChmaW5hbFNlbGVjdG9yKS5maWx0ZXIoKHBhcmVudEVsZW1lbnQpID0+XG4gICAgICAgICAgZXZlbnRUYXJnZXRzLnNvbWUoKHRhcmdldEVsZW1lbnQpID0+XG4gICAgICAgICAgICBlbGVtZW50Q29udGFpbnMocGFyZW50RWxlbWVudCwgdGFyZ2V0RWxlbWVudClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodXNlRXZlbnRUYXJnZXQgPT09IENISUxEUkVOKSB7XG4gICAgICAgIHJldHVybiBxdWVyeURvY3VtZW50KGZpbmFsU2VsZWN0b3IpLmZpbHRlcigoY2hpbGRFbGVtZW50KSA9PlxuICAgICAgICAgIGV2ZW50VGFyZ2V0cy5zb21lKCh0YXJnZXRFbGVtZW50KSA9PlxuICAgICAgICAgICAgZWxlbWVudENvbnRhaW5zKHRhcmdldEVsZW1lbnQsIGNoaWxkRWxlbWVudClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodXNlRXZlbnRUYXJnZXQgPT09IFNJQkxJTkdTKSB7XG4gICAgICAgIHJldHVybiBxdWVyeURvY3VtZW50KGZpbmFsU2VsZWN0b3IpLmZpbHRlcigoc2libGluZ0VsZW1lbnQpID0+XG4gICAgICAgICAgZXZlbnRUYXJnZXRzLnNvbWUoKHRhcmdldEVsZW1lbnQpID0+XG4gICAgICAgICAgICBpc1NpYmxpbmdOb2RlKHRhcmdldEVsZW1lbnQsIHNpYmxpbmdFbGVtZW50KVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGV2ZW50VGFyZ2V0cztcbiAgfVxuXG4gIGlmIChiYXNlU2VsZWN0b3IgPT0gbnVsbCB8fCBmaW5hbFNlbGVjdG9yID09IG51bGwpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBpZiAoSVNfQlJPV1NFUl9FTlYgJiYgZWxlbWVudFJvb3QpIHtcbiAgICByZXR1cm4gcXVlcnlEb2N1bWVudChmaW5hbFNlbGVjdG9yKS5maWx0ZXIoKGVsZW1lbnQpID0+XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gZWxlbWVudFJvb3QgaXMgSFRNTEVsZW1lbnQgaW4gYnJvd3NlclxuICAgICAgZWxlbWVudFJvb3QuY29udGFpbnMoZWxlbWVudClcbiAgICApO1xuICB9XG5cbiAgaWYgKGxpbWl0QWZmZWN0ZWRFbGVtZW50cyA9PT0gQ0hJTERSRU4pIHtcbiAgICByZXR1cm4gcXVlcnlEb2N1bWVudChiYXNlU2VsZWN0b3IsIGZpbmFsU2VsZWN0b3IpO1xuICB9IGVsc2UgaWYgKGxpbWl0QWZmZWN0ZWRFbGVtZW50cyA9PT0gSU1NRURJQVRFX0NISUxEUkVOKSB7XG4gICAgcmV0dXJuIGdldENoaWxkRWxlbWVudHMocXVlcnlEb2N1bWVudChiYXNlU2VsZWN0b3IpKS5maWx0ZXIoXG4gICAgICBtYXRjaFNlbGVjdG9yKGZpbmFsU2VsZWN0b3IpXG4gICAgKTtcbiAgfSBlbHNlIGlmIChsaW1pdEFmZmVjdGVkRWxlbWVudHMgPT09IFNJQkxJTkdTKSB7XG4gICAgcmV0dXJuIGdldFNpYmxpbmdFbGVtZW50cyhxdWVyeURvY3VtZW50KGJhc2VTZWxlY3RvcikpLmZpbHRlcihcbiAgICAgIG1hdGNoU2VsZWN0b3IoZmluYWxTZWxlY3RvcilcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBxdWVyeURvY3VtZW50KGZpbmFsU2VsZWN0b3IpO1xuICB9XG59XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2VsZW1lbnQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdhY3Rpb25JdGVtJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoe2VsZW1lbnQsIGFjdGlvbkl0ZW19KSB7XG4gIGlmICghSVNfQlJPV1NFUl9FTlYpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgY29uc3Qge2FjdGlvblR5cGVJZH0gPSBhY3Rpb25JdGVtO1xuICBzd2l0Y2ggKGFjdGlvblR5cGVJZCkge1xuICAgIGNhc2UgU1RZTEVfU0laRTpcbiAgICBjYXNlIFNUWUxFX0JBQ0tHUk9VTkRfQ09MT1I6XG4gICAgY2FzZSBTVFlMRV9CT1JERVI6XG4gICAgY2FzZSBTVFlMRV9URVhUX0NPTE9SOlxuICAgIGNhc2UgR0VORVJBTF9ESVNQTEFZOlxuICAgICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4ge307XG4gIH1cbn1cblxuY29uc3QgcHhWYWx1ZVJlZ2V4ID0gL3B4LztcblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnZmlsdGVycycgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmNvbnN0IGdldEZpbHRlckRlZmF1bHRzID0gKGFjdGlvblN0YXRlOiBhbnksIGZpbHRlcnMpID0+XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ3Jlc3VsdCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2ZpbHRlcicgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgZmlsdGVycy5yZWR1Y2UoKHJlc3VsdCwgZmlsdGVyKSA9PiB7XG4gICAgaWYgKHJlc3VsdFtmaWx0ZXIudHlwZV0gPT0gbnVsbCkge1xuICAgICAgcmVzdWx0W2ZpbHRlci50eXBlXSA9XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwNTMgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZXNzaW9uIG9mIHR5cGUgJ2FueScgY2FuJ3QgYmUgdXNlZCB0byBpbmRleCB0eXBlICdSZWFkb25seTx7IGJsdXI6IDA7ICdodWUtcm90YXRlJzogMDsgaW52ZXJ0OiAwOyBncmF5c2NhbGU6IDA7IHNhdHVyYXRlOiAxMDA7IHNlcGlhOiAwOyBjb250cmFzdDogMTAwOyBicmlnaHRuZXNzOiAxMDA7IH0+Jy5cbiAgICAgICAgZmlsdGVyRGVmYXVsdHNbZmlsdGVyLnR5cGVdO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIGFjdGlvblN0YXRlIHx8IHt9KTtcblxuY29uc3QgZ2V0Rm9udFZhcmlhdGlvbkRlZmF1bHRzID0gKFxuICBhY3Rpb25TdGF0ZTogYW55LFxuICBmb250VmFyaWF0aW9uczogQXJyYXk8Rm9udFZhcmlhdGlvbkl0ZW1Db25maWdUeXBlPlxuKSA9PlxuICBmb250VmFyaWF0aW9ucy5yZWR1Y2UoKHJlc3VsdCwgZm9udFZhcmlhdGlvbikgPT4ge1xuICAgIGlmIChyZXN1bHRbZm9udFZhcmlhdGlvbi50eXBlXSA9PSBudWxsKSB7XG4gICAgICByZXN1bHRbZm9udFZhcmlhdGlvbi50eXBlXSA9XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwNTMgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZXNzaW9uIG9mIHR5cGUgJ3N0cmluZycgY2FuJ3QgYmUgdXNlZCB0byBpbmRleCB0eXBlICdSZWFkb25seTx7IHdnaHQ6IDA7IG9wc3o6IDA7IHdkdGg6IDA7IHNsbnQ6IDA7IH0+Jy5cbiAgICAgICAgZm9udFZhcmlhdGlvbkRlZmF1bHRzW2ZvbnRWYXJpYXRpb24udHlwZV0gfHxcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjMzOSAtIFByb3BlcnR5ICdkZWZhdWx0VmFsdWUnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ0ZvbnRWYXJpYXRpb25JdGVtQ29uZmlnVHlwZScuXG4gICAgICAgIGZvbnRWYXJpYXRpb24uZGVmYXVsdFZhbHVlIHx8XG4gICAgICAgIDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwgYWN0aW9uU3RhdGUgfHwge30pO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5zdGFuY2VPcmlnaW4oXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuXG4gIHJlZlN0YXRlID0ge30sXG4gIGNvbXB1dGVkU3R5bGU6XG4gICAgfCB7XG4gICAgICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgICAgIH1cbiAgICB8IG51bGxcbiAgICB8IHVuZGVmaW5lZCA9IHt9LFxuICBhY3Rpb25JdGVtOiBBY3Rpb25JdGVtVHlwZSxcbiAgZWxlbWVudEFwaTogRWxlbWVudEFwaTxIVE1MRWxlbWVudCwgc3RyaW5nPlxuKSB7XG4gIGNvbnN0IHtnZXRTdHlsZX0gPSBlbGVtZW50QXBpO1xuICAvLyBGbG93IEhhY2s6IFBhc3NpbmcgYWN0aW9uVHlwZUlkIHRvIGlzUGx1Z2luVHlwZSBhbmQgdGhlbiB0cnlpbmdcbiAgLy8gdG8gZG8gdHlwZSByZWZpbmVtZW50IHVzaW5nIHRoZSBzYW1lIHZhcmlhYmxlIHZpYSBhIHN3aXRjaCBzdGF0ZW1lbnRcbiAgLy8gYnJlYWtzIGRvd24uIFRoaXMgaXMgaXMgYSB3b3JrYXJvdW5kIHRvIGVuc3VyZSB3ZSBjYW4gdXNlIHR5cGUgcmVmaW5lbWVudC5cbiAgY29uc3Qge2FjdGlvblR5cGVJZH0gPSBhY3Rpb25JdGVtO1xuXG4gIGlmIChpc1BsdWdpblR5cGUoYWN0aW9uVHlwZUlkKSkge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzNDUgLSBBcmd1bWVudCBvZiB0eXBlICdcIlRSQU5TRk9STV9NT1ZFXCIgfCBcIlRSQU5TRk9STV9TQ0FMRVwiIHwgXCJUUkFOU0ZPUk1fUk9UQVRFXCIgfCBcIlRSQU5TRk9STV9TS0VXXCIgfCBcIlNUWUxFX09QQUNJVFlcIiB8IFwiU1RZTEVfU0laRVwiIHwgXCJTVFlMRV9GSUxURVJcIiB8IFwiU1RZTEVfRk9OVF9WQVJJQVRJT05cIiB8IFwiU1RZTEVfQkFDS0dST1VORF9DT0xPUlwiIHwgXCJTVFlMRV9CT1JERVJcIiB8IFwiU1RZTEVfVEVYVF9DT0xPUlwiIHwgXCJQTFVHSU5fTE9UVElFXCIgfCBcIkdFTkVSQUxfRElTUExBWVwiJyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAnUGx1Z2luVHlwZScuIHwgVFM3MDUzIC0gRWxlbWVudCBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlIGJlY2F1c2UgZXhwcmVzc2lvbiBvZiB0eXBlICdcIlRSQU5TRk9STV9NT1ZFXCIgfCBcIlRSQU5TRk9STV9TQ0FMRVwiIHwgXCJUUkFOU0ZPUk1fUk9UQVRFXCIgfCBcIlRSQU5TRk9STV9TS0VXXCIgfCBcIlNUWUxFX09QQUNJVFlcIiB8IFwiU1RZTEVfU0laRVwiIHwgXCJTVFlMRV9GSUxURVJcIiB8IFwiU1RZTEVfRk9OVF9WQVJJQVRJT05cIiB8IFwiU1RZTEVfQkFDS0dST1VORF9DT0xPUlwiIHwgXCJTVFlMRV9CT1JERVJcIiB8IFwiU1RZTEVfVEVYVF9DT0xPUlwiIHwgXCJQTFVHSU5fTE9UVElFXCIgfCBcIkdFTkVSQUxfRElTUExBWVwiJyBjYW4ndCBiZSB1c2VkIHRvIGluZGV4IHR5cGUgJ3t9Jy5cbiAgICByZXR1cm4gZ2V0UGx1Z2luT3JpZ2luKGFjdGlvblR5cGVJZCkocmVmU3RhdGVbYWN0aW9uVHlwZUlkXSwgYWN0aW9uSXRlbSk7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkKSB7XG4gICAgY2FzZSBUUkFOU0ZPUk1fTU9WRTpcbiAgICBjYXNlIFRSQU5TRk9STV9TQ0FMRTpcbiAgICBjYXNlIFRSQU5TRk9STV9ST1RBVEU6XG4gICAgY2FzZSBUUkFOU0ZPUk1fU0tFVzoge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzA1MyAtIEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlc3Npb24gb2YgdHlwZSAnXCJUUkFOU0ZPUk1fTU9WRVwiIHwgXCJUUkFOU0ZPUk1fU0NBTEVcIiB8IFwiVFJBTlNGT1JNX1JPVEFURVwiIHwgXCJUUkFOU0ZPUk1fU0tFV1wiJyBjYW4ndCBiZSB1c2VkIHRvIGluZGV4IHR5cGUgJ3t9Jy5cbiAgICAgICAgcmVmU3RhdGVbYWN0aW9uSXRlbS5hY3Rpb25UeXBlSWRdIHx8XG4gICAgICAgIHRyYW5zZm9ybURlZmF1bHRzW2FjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkXVxuICAgICAgKTtcbiAgICB9XG4gICAgY2FzZSBTVFlMRV9GSUxURVI6XG4gICAgICByZXR1cm4gZ2V0RmlsdGVyRGVmYXVsdHMoXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwNTMgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZXNzaW9uIG9mIHR5cGUgJ1wiU1RZTEVfRklMVEVSXCInIGNhbid0IGJlIHVzZWQgdG8gaW5kZXggdHlwZSAne30nLlxuICAgICAgICByZWZTdGF0ZVthY3Rpb25JdGVtLmFjdGlvblR5cGVJZF0sXG4gICAgICAgIGFjdGlvbkl0ZW0uY29uZmlnLmZpbHRlcnNcbiAgICAgICk7XG4gICAgY2FzZSBTVFlMRV9GT05UX1ZBUklBVElPTjpcbiAgICAgIHJldHVybiBnZXRGb250VmFyaWF0aW9uRGVmYXVsdHMoXG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwNTMgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZXNzaW9uIG9mIHR5cGUgJ1wiU1RZTEVfRk9OVF9WQVJJQVRJT05cIicgY2FuJ3QgYmUgdXNlZCB0byBpbmRleCB0eXBlICd7fScuXG4gICAgICAgIHJlZlN0YXRlW2FjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkXSxcbiAgICAgICAgYWN0aW9uSXRlbS5jb25maWcuZm9udFZhcmlhdGlvbnNcbiAgICAgICk7XG4gICAgY2FzZSBTVFlMRV9PUEFDSVRZOlxuICAgICAgcmV0dXJuIHt2YWx1ZTogZGVmYXVsdFRvKHBhcnNlRmxvYXQoZ2V0U3R5bGUoZWxlbWVudCwgT1BBQ0lUWSkpLCAxLjApfTtcbiAgICBjYXNlIFNUWUxFX1NJWkU6IHtcbiAgICAgIGNvbnN0IGlubGluZVdpZHRoID0gZ2V0U3R5bGUoZWxlbWVudCwgV0lEVEgpO1xuICAgICAgY29uc3QgaW5saW5lSGVpZ2h0ID0gZ2V0U3R5bGUoZWxlbWVudCwgSEVJR0hUKTtcbiAgICAgIGxldCB3aWR0aFZhbHVlO1xuICAgICAgbGV0IGhlaWdodFZhbHVlO1xuICAgICAgLy8gV2hlbiBkZXN0aW5hdGlvbiB1bml0IGlzICdBVVRPJywgZW5zdXJlIG9yaWdpbiB2YWx1ZXMgYXJlIGluIHB4XG4gICAgICBpZiAoYWN0aW9uSXRlbS5jb25maWcud2lkdGhVbml0ID09PSBBVVRPKSB7XG4gICAgICAgIHdpZHRoVmFsdWUgPSBweFZhbHVlUmVnZXgudGVzdChpbmxpbmVXaWR0aClcbiAgICAgICAgICA/IHBhcnNlRmxvYXQoaW5saW5lV2lkdGgpXG4gICAgICAgICAgOiAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMxODA0NyAtICdjb21wdXRlZFN0eWxlJyBpcyBwb3NzaWJseSAnbnVsbCcuXG4gICAgICAgICAgICBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUud2lkdGgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2lkdGhWYWx1ZSA9IGRlZmF1bHRUbyhcbiAgICAgICAgICBwYXJzZUZsb2F0KGlubGluZVdpZHRoKSxcbiAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMxODA0NyAtICdjb21wdXRlZFN0eWxlJyBpcyBwb3NzaWJseSAnbnVsbCcuXG4gICAgICAgICAgcGFyc2VGbG9hdChjb21wdXRlZFN0eWxlLndpZHRoKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGFjdGlvbkl0ZW0uY29uZmlnLmhlaWdodFVuaXQgPT09IEFVVE8pIHtcbiAgICAgICAgaGVpZ2h0VmFsdWUgPSBweFZhbHVlUmVnZXgudGVzdChpbmxpbmVIZWlnaHQpXG4gICAgICAgICAgPyBwYXJzZUZsb2F0KGlubGluZUhlaWdodClcbiAgICAgICAgICA6IC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzE4MDQ3IC0gJ2NvbXB1dGVkU3R5bGUnIGlzIHBvc3NpYmx5ICdudWxsJy5cbiAgICAgICAgICAgIHBhcnNlRmxvYXQoY29tcHV0ZWRTdHlsZS5oZWlnaHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVpZ2h0VmFsdWUgPSBkZWZhdWx0VG8oXG4gICAgICAgICAgcGFyc2VGbG9hdChpbmxpbmVIZWlnaHQpLFxuICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzE4MDQ3IC0gJ2NvbXB1dGVkU3R5bGUnIGlzIHBvc3NpYmx5ICdudWxsJy5cbiAgICAgICAgICBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUuaGVpZ2h0KVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhWYWx1ZSxcbiAgICAgICAgaGVpZ2h0VmFsdWUsXG4gICAgICB9O1xuICAgIH1cbiAgICBjYXNlIFNUWUxFX0JBQ0tHUk9VTkRfQ09MT1I6XG4gICAgY2FzZSBTVFlMRV9CT1JERVI6XG4gICAgY2FzZSBTVFlMRV9URVhUX0NPTE9SOlxuICAgICAgcmV0dXJuIHBhcnNlQ29sb3Ioe1xuICAgICAgICBlbGVtZW50LFxuICAgICAgICBhY3Rpb25UeXBlSWQ6IGFjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkLFxuICAgICAgICBjb21wdXRlZFN0eWxlLFxuICAgICAgICBnZXRTdHlsZSxcbiAgICAgIH0pO1xuICAgIGNhc2UgR0VORVJBTF9ESVNQTEFZOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMTgwNDcgLSAnY29tcHV0ZWRTdHlsZScgaXMgcG9zc2libHkgJ251bGwnLlxuICAgICAgICB2YWx1ZTogZGVmYXVsdFRvKGdldFN0eWxlKGVsZW1lbnQsIERJU1BMQVkpLCBjb21wdXRlZFN0eWxlLmRpc3BsYXkpLFxuICAgICAgfTtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gYE9CSkVDVF9WQUxVRWAgaXMgbm90IGFuIGV4cGVjdGVkIGBhY3Rpb25UeXBlSWRgXG4gICAgY2FzZSBPQkpFQ1RfVkFMVUU6XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDUzIC0gRWxlbWVudCBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlIGJlY2F1c2UgZXhwcmVzc2lvbiBvZiB0eXBlICdhbnknIGNhbid0IGJlIHVzZWQgdG8gaW5kZXggdHlwZSAne30nLiB8IFRTMjMzOSAtIFByb3BlcnR5ICdhY3Rpb25UeXBlSWQnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ25ldmVyJy5cbiAgICAgIHJldHVybiByZWZTdGF0ZVthY3Rpb25JdGVtLmFjdGlvblR5cGVJZF0gfHwge3ZhbHVlOiAwfTtcbiAgICBkZWZhdWx0OiB7XG4gICAgICAvLyBBcyBmYXIgYXMgdGhlIHR5cGUgc3lzdGVtIGNhbiB0ZWxsLCB3ZSdyZSBtaXNzaW5nIGEgaGFuZGxlciBmb3JcbiAgICAgIC8vIFBMVUdJTl9MT1RUSUUuXG4gICAgICAvL1xuICAgICAgLy8gVGhpcyBpcyBhY3R1YWxseSBoYW5kbGVkIGJ5IGBpc1BsdWdpblR5cGVgIGFib3ZlLlxuICAgICAgLy9cbiAgICAgIC8qOjogKGFjdGlvbkl0ZW06IGVtcHR5KTsgKi9cbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn1cblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAncmVzdWx0JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAwNiAtIFBhcmFtZXRlciAnZmlsdGVyJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuY29uc3QgcmVkdWNlRmlsdGVycyA9IChyZXN1bHQsIGZpbHRlcikgPT4ge1xuICBpZiAoZmlsdGVyKSB7XG4gICAgcmVzdWx0W2ZpbHRlci50eXBlXSA9IGZpbHRlci52YWx1ZSB8fCAwO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5jb25zdCByZWR1Y2VGb250VmFyaWF0aW9ucyA9IChcbiAgcmVzdWx0OiBSZWNvcmQ8YW55LCBhbnk+LFxuICBmb250VmFyaWF0aW9uOlxuICAgIHwgRm9udFZhcmlhdGlvbkl0ZW1Db25maWdUeXBlXG4gICAgfCB7XG4gICAgICAgIGlkOiBudWxsIHwgc3RyaW5nO1xuICAgICAgICB0eXBlOiBzdHJpbmc7XG4gICAgICAgIHZhbHVlOiBudW1iZXI7XG4gICAgICB9XG4pID0+IHtcbiAgaWYgKGZvbnRWYXJpYXRpb24pIHtcbiAgICByZXN1bHRbZm9udFZhcmlhdGlvbi50eXBlXSA9IGZvbnRWYXJpYXRpb24udmFsdWUgfHwgMDtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEl0ZW1Db25maWdCeUtleSA9IChcbiAgYWN0aW9uVHlwZUlkOiBhbnksXG4gIGtleTogYW55LFxuICBjb25maWc6IGFueVxuKSA9PiB7XG4gIGlmIChpc1BsdWdpblR5cGUoYWN0aW9uVHlwZUlkKSkge1xuICAgIHJldHVybiBnZXRQbHVnaW5Db25maWcoYWN0aW9uVHlwZUlkKShjb25maWcsIGtleSk7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvblR5cGVJZCkge1xuICAgIGNhc2UgU1RZTEVfRklMVEVSOiB7XG4gICAgICBjb25zdCBmaWx0ZXIgPSBmaW5kTGFzdChjb25maWcuZmlsdGVycywgKHt0eXBlfSkgPT4gdHlwZSA9PT0ga2V5KTtcbiAgICAgIHJldHVybiBmaWx0ZXIgPyBmaWx0ZXIudmFsdWUgOiAwO1xuICAgIH1cbiAgICBjYXNlIFNUWUxFX0ZPTlRfVkFSSUFUSU9OOiB7XG4gICAgICBjb25zdCBmb250VmFyaWF0aW9uID0gZmluZExhc3QoXG4gICAgICAgIGNvbmZpZy5mb250VmFyaWF0aW9ucyxcbiAgICAgICAgKHt0eXBlfSkgPT4gdHlwZSA9PT0ga2V5XG4gICAgICApO1xuICAgICAgcmV0dXJuIGZvbnRWYXJpYXRpb24gPyBmb250VmFyaWF0aW9uLnZhbHVlIDogMDtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBjb25maWdba2V5XTtcbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlc3RpbmF0aW9uVmFsdWVzPEVsZW1lbnRUeXBlLCBTZWxlY3RvclR5cGU+KHtcbiAgZWxlbWVudCxcbiAgYWN0aW9uSXRlbSxcbiAgZWxlbWVudEFwaSxcbn06IHtcbiAgZWxlbWVudDogRWxlbWVudFR5cGU7XG4gIGFjdGlvbkl0ZW06IEFjdGlvbkl0ZW1UeXBlO1xuICBlbGVtZW50QXBpOiBFbGVtZW50QXBpPEVsZW1lbnRUeXBlLCBTZWxlY3RvclR5cGU+O1xufSkge1xuICBpZiAoaXNQbHVnaW5UeXBlKGFjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkKSkge1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzNDUgLSBBcmd1bWVudCBvZiB0eXBlICdcIlRSQU5TRk9STV9NT1ZFXCIgfCBcIlRSQU5TRk9STV9TQ0FMRVwiIHwgXCJUUkFOU0ZPUk1fUk9UQVRFXCIgfCBcIlRSQU5TRk9STV9TS0VXXCIgfCBcIlNUWUxFX09QQUNJVFlcIiB8IFwiU1RZTEVfU0laRVwiIHwgXCJTVFlMRV9GSUxURVJcIiB8IFwiU1RZTEVfRk9OVF9WQVJJQVRJT05cIiB8IFwiU1RZTEVfQkFDS0dST1VORF9DT0xPUlwiIHwgXCJTVFlMRV9CT1JERVJcIiB8IFwiU1RZTEVfVEVYVF9DT0xPUlwiIHwgXCJQTFVHSU5fTE9UVElFXCIgfCBcIkdFTkVSQUxfRElTUExBWVwiJyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAnUGx1Z2luVHlwZScuXG4gICAgcmV0dXJuIGdldFBsdWdpbkRlc3RpbmF0aW9uKGFjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkKShhY3Rpb25JdGVtLmNvbmZpZyk7XG4gIH1cblxuICBzd2l0Y2ggKGFjdGlvbkl0ZW0uYWN0aW9uVHlwZUlkKSB7XG4gICAgY2FzZSBUUkFOU0ZPUk1fTU9WRTpcbiAgICBjYXNlIFRSQU5TRk9STV9TQ0FMRTpcbiAgICBjYXNlIFRSQU5TRk9STV9ST1RBVEU6XG4gICAgY2FzZSBUUkFOU0ZPUk1fU0tFVzoge1xuICAgICAgY29uc3Qge3hWYWx1ZSwgeVZhbHVlLCB6VmFsdWV9ID0gYWN0aW9uSXRlbS5jb25maWc7XG4gICAgICByZXR1cm4ge3hWYWx1ZSwgeVZhbHVlLCB6VmFsdWV9O1xuICAgIH1cbiAgICBjYXNlIFNUWUxFX1NJWkU6IHtcbiAgICAgIGNvbnN0IHtnZXRTdHlsZSwgc2V0U3R5bGUsIGdldFByb3BlcnR5fSA9IGVsZW1lbnRBcGk7XG4gICAgICBjb25zdCB7d2lkdGhVbml0LCBoZWlnaHRVbml0fSA9IGFjdGlvbkl0ZW0uY29uZmlnO1xuICAgICAgbGV0IHt3aWR0aFZhbHVlLCBoZWlnaHRWYWx1ZX0gPSBhY3Rpb25JdGVtLmNvbmZpZztcbiAgICAgIGlmICghSVNfQlJPV1NFUl9FTlYpIHtcbiAgICAgICAgcmV0dXJuIHt3aWR0aFZhbHVlLCBoZWlnaHRWYWx1ZX07XG4gICAgICB9XG4gICAgICBpZiAod2lkdGhVbml0ID09PSBBVVRPKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBnZXRTdHlsZShlbGVtZW50LCBXSURUSCk7XG4gICAgICAgIHNldFN0eWxlKGVsZW1lbnQsIFdJRFRILCAnJyk7XG4gICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzMjIgLSBUeXBlICdzdHJpbmcgfCBudWxsJyBpcyBub3QgYXNzaWduYWJsZSB0byB0eXBlICdudW1iZXIgfCB1bmRlZmluZWQnLlxuICAgICAgICB3aWR0aFZhbHVlID0gZ2V0UHJvcGVydHkoZWxlbWVudCwgJ29mZnNldFdpZHRoJyk7XG4gICAgICAgIHNldFN0eWxlKGVsZW1lbnQsIFdJRFRILCB0ZW1wKTtcbiAgICAgIH1cbiAgICAgIGlmIChoZWlnaHRVbml0ID09PSBBVVRPKSB7XG4gICAgICAgIGNvbnN0IHRlbXAgPSBnZXRTdHlsZShlbGVtZW50LCBIRUlHSFQpO1xuICAgICAgICBzZXRTdHlsZShlbGVtZW50LCBIRUlHSFQsICcnKTtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjMyMiAtIFR5cGUgJ3N0cmluZyB8IG51bGwnIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHR5cGUgJ251bWJlciB8IHVuZGVmaW5lZCcuXG4gICAgICAgIGhlaWdodFZhbHVlID0gZ2V0UHJvcGVydHkoZWxlbWVudCwgJ29mZnNldEhlaWdodCcpO1xuICAgICAgICBzZXRTdHlsZShlbGVtZW50LCBIRUlHSFQsIHRlbXApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHt3aWR0aFZhbHVlLCBoZWlnaHRWYWx1ZX07XG4gICAgfVxuICAgIGNhc2UgU1RZTEVfQkFDS0dST1VORF9DT0xPUjpcbiAgICBjYXNlIFNUWUxFX0JPUkRFUjpcbiAgICBjYXNlIFNUWUxFX1RFWFRfQ09MT1I6IHtcbiAgICAgIGNvbnN0IHtyVmFsdWUsIGdWYWx1ZSwgYlZhbHVlLCBhVmFsdWUsIGdsb2JhbFN3YXRjaElkfSA9XG4gICAgICAgIGFjdGlvbkl0ZW0uY29uZmlnO1xuXG4gICAgICBpZiAoZ2xvYmFsU3dhdGNoSWQgJiYgZ2xvYmFsU3dhdGNoSWQuc3RhcnRzV2l0aCgnLS0nKSkge1xuICAgICAgICBjb25zdCB7Z2V0U3R5bGV9ID0gZWxlbWVudEFwaTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBnZXRTdHlsZShlbGVtZW50LCBnbG9iYWxTd2F0Y2hJZCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRWYWx1ZSA9IG5vcm1hbGl6ZUNvbG9yKHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByVmFsdWU6IG5vcm1hbGl6ZWRWYWx1ZS5yZWQsXG4gICAgICAgICAgZ1ZhbHVlOiBub3JtYWxpemVkVmFsdWUuZ3JlZW4sXG4gICAgICAgICAgYlZhbHVlOiBub3JtYWxpemVkVmFsdWUuYmx1ZSxcbiAgICAgICAgICBhVmFsdWU6IG5vcm1hbGl6ZWRWYWx1ZS5hbHBoYSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtyVmFsdWUsIGdWYWx1ZSwgYlZhbHVlLCBhVmFsdWV9O1xuICAgIH1cbiAgICBjYXNlIFNUWUxFX0ZJTFRFUjoge1xuICAgICAgcmV0dXJuIGFjdGlvbkl0ZW0uY29uZmlnLmZpbHRlcnMucmVkdWNlPFJlY29yZDxzdHJpbmcsIGFueT4+KFxuICAgICAgICByZWR1Y2VGaWx0ZXJzLFxuICAgICAgICB7fVxuICAgICAgKTtcbiAgICB9XG4gICAgY2FzZSBTVFlMRV9GT05UX1ZBUklBVElPTjoge1xuICAgICAgcmV0dXJuIGFjdGlvbkl0ZW0uY29uZmlnLmZvbnRWYXJpYXRpb25zLnJlZHVjZTxSZWNvcmQ8c3RyaW5nLCBhbnk+PihcbiAgICAgICAgcmVkdWNlRm9udFZhcmlhdGlvbnMsXG4gICAgICAgIHt9XG4gICAgICApO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCB7dmFsdWV9ID0gYWN0aW9uSXRlbS5jb25maWc7XG4gICAgICByZXR1cm4ge3ZhbHVlfTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlbmRlclR5cGUoYWN0aW9uVHlwZUlkOiBhbnkpIHtcbiAgaWYgKC9eVFJBTlNGT1JNXy8udGVzdChhY3Rpb25UeXBlSWQpKSB7XG4gICAgcmV0dXJuIFJFTkRFUl9UUkFOU0ZPUk07XG4gIH1cbiAgaWYgKC9eU1RZTEVfLy50ZXN0KGFjdGlvblR5cGVJZCkpIHtcbiAgICByZXR1cm4gUkVOREVSX1NUWUxFO1xuICB9XG4gIGlmICgvXkdFTkVSQUxfLy50ZXN0KGFjdGlvblR5cGVJZCkpIHtcbiAgICByZXR1cm4gUkVOREVSX0dFTkVSQUw7XG4gIH1cbiAgaWYgKC9eUExVR0lOXy8udGVzdChhY3Rpb25UeXBlSWQpKSB7XG4gICAgcmV0dXJuIFJFTkRFUl9QTFVHSU47XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0eWxlUHJvcChyZW5kZXJUeXBlOiBhbnksIGFjdGlvblR5cGVJZDogYW55KSB7XG4gIHJldHVybiByZW5kZXJUeXBlID09PSBSRU5ERVJfU1RZTEVcbiAgICA/IGFjdGlvblR5cGVJZC5yZXBsYWNlKCdTVFlMRV8nLCAnJykudG9Mb3dlckNhc2UoKVxuICAgIDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckhUTUxFbGVtZW50PEVsZW1lbnRUeXBlLCBTZWxlY3RvclR5cGU+KFxuICBlbGVtZW50OiBFbGVtZW50VHlwZSxcblxuICByZWZTdGF0ZTogYW55LFxuXG4gIGFjdGlvblN0YXRlOiBhbnksXG5cbiAgZXZlbnRJZDogYW55LFxuXG4gIGFjdGlvbkl0ZW06IGFueSxcblxuICBzdHlsZVByb3A6IGFueSxcblxuICBlbGVtZW50QXBpOiBFbGVtZW50QXBpPEVsZW1lbnRUeXBlLCBTZWxlY3RvclR5cGU+LFxuXG4gIHJlbmRlclR5cGU6IGFueSxcblxuICBwbHVnaW5JbnN0YW5jZTogYW55XG4pIHtcbiAgc3dpdGNoIChyZW5kZXJUeXBlKSB7XG4gICAgY2FzZSBSRU5ERVJfVFJBTlNGT1JNOiB7XG4gICAgICByZXR1cm4gcmVuZGVyVHJhbnNmb3JtKFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICByZWZTdGF0ZSxcbiAgICAgICAgYWN0aW9uU3RhdGUsXG4gICAgICAgIGFjdGlvbkl0ZW0sXG4gICAgICAgIGVsZW1lbnRBcGlcbiAgICAgICk7XG4gICAgfVxuICAgIGNhc2UgUkVOREVSX1NUWUxFOiB7XG4gICAgICByZXR1cm4gcmVuZGVyU3R5bGUoXG4gICAgICAgIGVsZW1lbnQsXG4gICAgICAgIHJlZlN0YXRlLFxuICAgICAgICBhY3Rpb25TdGF0ZSxcbiAgICAgICAgYWN0aW9uSXRlbSxcbiAgICAgICAgc3R5bGVQcm9wLFxuICAgICAgICBlbGVtZW50QXBpXG4gICAgICApO1xuICAgIH1cbiAgICBjYXNlIFJFTkRFUl9HRU5FUkFMOiB7XG4gICAgICByZXR1cm4gcmVuZGVyR2VuZXJhbChlbGVtZW50LCBhY3Rpb25JdGVtLCBlbGVtZW50QXBpKTtcbiAgICB9XG4gICAgY2FzZSBSRU5ERVJfUExVR0lOOiB7XG4gICAgICBjb25zdCB7YWN0aW9uVHlwZUlkfSA9IGFjdGlvbkl0ZW07XG4gICAgICBpZiAoaXNQbHVnaW5UeXBlKGFjdGlvblR5cGVJZCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbmRlclBsdWdpbihhY3Rpb25UeXBlSWQpKHBsdWdpbkluc3RhbmNlLCByZWZTdGF0ZSwgYWN0aW9uSXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHRyYW5zZm9ybURlZmF1bHRzID0ge1xuICBbVFJBTlNGT1JNX01PVkVdOiBPYmplY3QuZnJlZXplKHtcbiAgICB4VmFsdWU6IDAsXG4gICAgeVZhbHVlOiAwLFxuICAgIHpWYWx1ZTogMCxcbiAgfSksXG4gIFtUUkFOU0ZPUk1fU0NBTEVdOiBPYmplY3QuZnJlZXplKHtcbiAgICB4VmFsdWU6IDEsXG4gICAgeVZhbHVlOiAxLFxuICAgIHpWYWx1ZTogMSxcbiAgfSksXG4gIFtUUkFOU0ZPUk1fUk9UQVRFXTogT2JqZWN0LmZyZWV6ZSh7XG4gICAgeFZhbHVlOiAwLFxuICAgIHlWYWx1ZTogMCxcbiAgICB6VmFsdWU6IDAsXG4gIH0pLFxuICBbVFJBTlNGT1JNX1NLRVddOiBPYmplY3QuZnJlZXplKHtcbiAgICB4VmFsdWU6IDAsXG4gICAgeVZhbHVlOiAwLFxuICB9KSxcbn0gYXMgY29uc3Q7XG5cbmNvbnN0IGZpbHRlckRlZmF1bHRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIGJsdXI6IDAsXG4gICdodWUtcm90YXRlJzogMCxcbiAgaW52ZXJ0OiAwLFxuICBncmF5c2NhbGU6IDAsXG4gIHNhdHVyYXRlOiAxMDAsXG4gIHNlcGlhOiAwLFxuICBjb250cmFzdDogMTAwLFxuICBicmlnaHRuZXNzOiAxMDAsXG59KTtcblxuY29uc3QgZm9udFZhcmlhdGlvbkRlZmF1bHRzID0gT2JqZWN0LmZyZWV6ZSh7XG4gIHdnaHQ6IDAsXG4gIG9wc3o6IDAsXG4gIHdkdGg6IDAsXG4gIHNsbnQ6IDAsXG59KTtcblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnZmlsdGVyVHlwZScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2FjdGlvbkl0ZW1Db25maWcnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5jb25zdCBnZXRGaWx0ZXJVbml0ID0gKGZpbHRlclR5cGUsIGFjdGlvbkl0ZW1Db25maWcpID0+IHtcbiAgY29uc3QgZmlsdGVyID0gZmluZExhc3QoXG4gICAgYWN0aW9uSXRlbUNvbmZpZy5maWx0ZXJzLFxuICAgICh7dHlwZX0pID0+IHR5cGUgPT09IGZpbHRlclR5cGVcbiAgKTtcblxuICBpZiAoZmlsdGVyICYmIGZpbHRlci51bml0KSB7XG4gICAgcmV0dXJuIGZpbHRlci51bml0O1xuICB9XG5cbiAgc3dpdGNoIChmaWx0ZXJUeXBlKSB7XG4gICAgY2FzZSAnYmx1cic6XG4gICAgICByZXR1cm4gJ3B4JztcbiAgICBjYXNlICdodWUtcm90YXRlJzpcbiAgICAgIHJldHVybiAnZGVnJztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICclJztcbiAgfVxufTtcblxuY29uc3QgdHJhbnNmb3JtS2V5cyA9IE9iamVjdC5rZXlzKHRyYW5zZm9ybURlZmF1bHRzKTtcblxuZnVuY3Rpb24gcmVuZGVyVHJhbnNmb3JtPEVsZW1lbnRUeXBlLCBTZWxlY3RvclR5cGU+KFxuICBlbGVtZW50OiBFbGVtZW50VHlwZSxcbiAgcmVmU3RhdGU6IGFueSxcbiAgYWN0aW9uU3RhdGU6IGFueSxcbiAgYWN0aW9uSXRlbTogYW55LFxuICBlbGVtZW50QXBpOiBFbGVtZW50QXBpPEVsZW1lbnRUeXBlLCBTZWxlY3RvclR5cGU+XG4pIHtcbiAgY29uc3QgbmV3VHJhbnNmb3JtID0gdHJhbnNmb3JtS2V5c1xuICAgIC5tYXAoKGFjdGlvblR5cGVJZCkgPT4ge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzA1MyAtIEVsZW1lbnQgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZSBiZWNhdXNlIGV4cHJlc3Npb24gb2YgdHlwZSAnc3RyaW5nJyBjYW4ndCBiZSB1c2VkIHRvIGluZGV4IHR5cGUgJ3sgcmVhZG9ubHkgVFJBTlNGT1JNX01PVkU6IFJlYWRvbmx5PHsgeFZhbHVlOiAwOyB5VmFsdWU6IDA7IHpWYWx1ZTogMDsgfT47IHJlYWRvbmx5IFRSQU5TRk9STV9TQ0FMRTogUmVhZG9ubHk8eyB4VmFsdWU6IDE7IHlWYWx1ZTogMTsgelZhbHVlOiAxOyB9PjsgcmVhZG9ubHkgVFJBTlNGT1JNX1JPVEFURTogUmVhZG9ubHk8eyB4VmFsdWU6IDA7IHlWYWx1ZTogMDsgelZhbHVlOiAwOyB9PjsgcmVhZG9ubHkgVFJBTlNGT1JNX1NLRVc6IFJlYWRvbmx5PC4uLj47IH0nLlxuICAgICAgY29uc3QgZGVmYXVsdHMgPSB0cmFuc2Zvcm1EZWZhdWx0c1thY3Rpb25UeXBlSWRdO1xuICAgICAgY29uc3Qge1xuICAgICAgICB4VmFsdWUgPSBkZWZhdWx0cy54VmFsdWUsXG4gICAgICAgIHlWYWx1ZSA9IGRlZmF1bHRzLnlWYWx1ZSxcblxuICAgICAgICB6VmFsdWUgPSBkZWZhdWx0cy56VmFsdWUsXG4gICAgICAgIHhVbml0ID0gJycsXG4gICAgICAgIHlVbml0ID0gJycsXG4gICAgICAgIHpVbml0ID0gJycsXG4gICAgICB9ID0gcmVmU3RhdGVbYWN0aW9uVHlwZUlkXSB8fCB7fTtcbiAgICAgIHN3aXRjaCAoYWN0aW9uVHlwZUlkKSB7XG4gICAgICAgIGNhc2UgVFJBTlNGT1JNX01PVkU6XG4gICAgICAgICAgcmV0dXJuIGAke1RSQU5TTEFURV8zRH0oJHt4VmFsdWV9JHt4VW5pdH0sICR7eVZhbHVlfSR7eVVuaXR9LCAke3pWYWx1ZX0ke3pVbml0fSlgO1xuICAgICAgICBjYXNlIFRSQU5TRk9STV9TQ0FMRTpcbiAgICAgICAgICByZXR1cm4gYCR7U0NBTEVfM0R9KCR7eFZhbHVlfSR7eFVuaXR9LCAke3lWYWx1ZX0ke3lVbml0fSwgJHt6VmFsdWV9JHt6VW5pdH0pYDtcbiAgICAgICAgY2FzZSBUUkFOU0ZPUk1fUk9UQVRFOlxuICAgICAgICAgIHJldHVybiBgJHtST1RBVEVfWH0oJHt4VmFsdWV9JHt4VW5pdH0pICR7Uk9UQVRFX1l9KCR7eVZhbHVlfSR7eVVuaXR9KSAke1JPVEFURV9afSgke3pWYWx1ZX0ke3pVbml0fSlgO1xuICAgICAgICBjYXNlIFRSQU5TRk9STV9TS0VXOlxuICAgICAgICAgIHJldHVybiBgJHtTS0VXfSgke3hWYWx1ZX0ke3hVbml0fSwgJHt5VmFsdWV9JHt5VW5pdH0pYDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignICcpO1xuXG4gIGNvbnN0IHtzZXRTdHlsZX0gPSBlbGVtZW50QXBpO1xuICBhZGRXaWxsQ2hhbmdlKGVsZW1lbnQsIFRSQU5TRk9STV9QUkVGSVhFRCwgZWxlbWVudEFwaSk7XG4gIHNldFN0eWxlKGVsZW1lbnQsIFRSQU5TRk9STV9QUkVGSVhFRCwgbmV3VHJhbnNmb3JtKTtcblxuICAvLyBTZXQgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZFxuICBpZiAoaGFzRGVmaW5lZDNkVHJhbnNmb3JtKGFjdGlvbkl0ZW0sIGFjdGlvblN0YXRlKSkge1xuICAgIHNldFN0eWxlKGVsZW1lbnQsIFRSQU5TRk9STV9TVFlMRV9QUkVGSVhFRCwgUFJFU0VSVkVfM0QpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckZpbHRlcjxFbGVtZW50VHlwZSwgU2VsZWN0b3JUeXBlPihcbiAgZWxlbWVudDogRWxlbWVudFR5cGUsXG4gIGFjdGlvblN0YXRlOiBhbnksXG4gIGFjdGlvbkl0ZW1Db25maWc6IGFueSxcbiAgZWxlbWVudEFwaTogRWxlbWVudEFwaTxFbGVtZW50VHlwZSwgU2VsZWN0b3JUeXBlPlxuKSB7XG4gIGNvbnN0IGZpbHRlclZhbHVlID0gcmVkdWNlKFxuICAgIGFjdGlvblN0YXRlLFxuICAgIChyZXN1bHQsIHZhbHVlLCB0eXBlKSA9PlxuICAgICAgYCR7cmVzdWx0fSAke3R5cGV9KCR7dmFsdWV9JHtnZXRGaWx0ZXJVbml0KHR5cGUsIGFjdGlvbkl0ZW1Db25maWcpfSlgLFxuICAgICcnXG4gICk7XG5cbiAgY29uc3Qge3NldFN0eWxlfSA9IGVsZW1lbnRBcGk7XG4gIGFkZFdpbGxDaGFuZ2UoZWxlbWVudCwgRklMVEVSLCBlbGVtZW50QXBpKTtcbiAgc2V0U3R5bGUoZWxlbWVudCwgRklMVEVSLCBmaWx0ZXJWYWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckZvbnRWYXJpYXRpb248RWxlbWVudFR5cGUsIFNlbGVjdG9yVHlwZT4oXG4gIGVsZW1lbnQ6IEVsZW1lbnRUeXBlLFxuICBhY3Rpb25TdGF0ZTogYW55LFxuICBhY3Rpb25JdGVtQ29uZmlnOiBGb250VmFyaWF0aW9uQWN0aW9uQ29uZmlnVHlwZSxcbiAgZWxlbWVudEFwaTogRWxlbWVudEFwaTxFbGVtZW50VHlwZSwgU2VsZWN0b3JUeXBlPlxuKSB7XG4gIGNvbnN0IGZvbnRWYXJpYXRpb25WYWx1ZSA9IHJlZHVjZShcbiAgICBhY3Rpb25TdGF0ZSxcbiAgICAocmVzdWx0LCB2YWx1ZSwgdHlwZSkgPT4ge1xuICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjM0NSAtIEFyZ3VtZW50IG9mIHR5cGUgJ3N0cmluZycgaXMgbm90IGFzc2lnbmFibGUgdG8gcGFyYW1ldGVyIG9mIHR5cGUgJ25ldmVyJy5cbiAgICAgIHJlc3VsdC5wdXNoKGBcIiR7dHlwZX1cIiAke3ZhbHVlfWApO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIFtdXG4gICkuam9pbignLCAnKTtcblxuICBjb25zdCB7c2V0U3R5bGV9ID0gZWxlbWVudEFwaTtcbiAgYWRkV2lsbENoYW5nZShlbGVtZW50LCBGT05UX1ZBUklBVElPTl9TRVRUSU5HUywgZWxlbWVudEFwaSk7XG4gIHNldFN0eWxlKGVsZW1lbnQsIEZPTlRfVkFSSUFUSU9OX1NFVFRJTkdTLCBmb250VmFyaWF0aW9uVmFsdWUpO1xufVxuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdhY3Rpb25UeXBlSWQnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICd4VmFsdWUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICd5VmFsdWUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICd6VmFsdWUnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5mdW5jdGlvbiBoYXNEZWZpbmVkM2RUcmFuc2Zvcm0oe2FjdGlvblR5cGVJZH0sIHt4VmFsdWUsIHlWYWx1ZSwgelZhbHVlfSkge1xuICAvLyBUUkFOU0xBVEVfWlxuICByZXR1cm4gKFxuICAgIChhY3Rpb25UeXBlSWQgPT09IFRSQU5TRk9STV9NT1ZFICYmIHpWYWx1ZSAhPT0gdW5kZWZpbmVkKSB8fFxuICAgIC8vIFNDQUxFX1pcbiAgICAoYWN0aW9uVHlwZUlkID09PSBUUkFOU0ZPUk1fU0NBTEUgJiYgelZhbHVlICE9PSB1bmRlZmluZWQpIHx8XG4gICAgLy8gUk9UQVRFX1ggb3IgUk9UQVRFX1lcbiAgICAoYWN0aW9uVHlwZUlkID09PSBUUkFOU0ZPUk1fUk9UQVRFICYmXG4gICAgICAoeFZhbHVlICE9PSB1bmRlZmluZWQgfHwgeVZhbHVlICE9PSB1bmRlZmluZWQpKVxuICApO1xufVxuXG5jb25zdCBwYXJhbUNhcHR1cmUgPSAnXFxcXCgoW14pXSspXFxcXCknO1xuY29uc3QgcmdiVmFsaWRSZWdleCA9IC9ecmdiLztcbmNvbnN0IHJnYk1hdGNoUmVnZXggPSBSZWdFeHAoYHJnYmE/JHtwYXJhbUNhcHR1cmV9YCk7XG5cbmZ1bmN0aW9uIGdldEZpcnN0TWF0Y2gocmVnZXg6IFJlZ0V4cCwgdmFsdWU6IHN0cmluZykge1xuICBjb25zdCBtYXRjaCA9IHJlZ2V4LmV4ZWModmFsdWUpO1xuICByZXR1cm4gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnO1xufVxuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdlbGVtZW50JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnYWN0aW9uVHlwZUlkJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnY29tcHV0ZWRTdHlsZScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2dldFN0eWxlJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuZnVuY3Rpb24gcGFyc2VDb2xvcih7ZWxlbWVudCwgYWN0aW9uVHlwZUlkLCBjb21wdXRlZFN0eWxlLCBnZXRTdHlsZX0pOiB7XG4gIHJWYWx1ZTogbnVtYmVyO1xuICBnVmFsdWU6IG51bWJlcjtcbiAgYlZhbHVlOiBudW1iZXI7XG4gIGFWYWx1ZTogbnVtYmVyO1xufSB7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwNTMgLSBFbGVtZW50IGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUgYmVjYXVzZSBleHByZXNzaW9uIG9mIHR5cGUgJ2FueScgY2FuJ3QgYmUgdXNlZCB0byBpbmRleCB0eXBlICdSZWFkb25seTx7IFNUWUxFX0JBQ0tHUk9VTkRfQ09MT1I6IFwiYmFja2dyb3VuZENvbG9yXCI7IFNUWUxFX0JPUkRFUjogXCJib3JkZXJDb2xvclwiOyBTVFlMRV9URVhUX0NPTE9SOiBcImNvbG9yXCI7IH0+Jy5cbiAgY29uc3QgcHJvcCA9IGNvbG9yU3R5bGVQcm9wc1thY3Rpb25UeXBlSWRdO1xuICBjb25zdCBpbmxpbmVWYWx1ZSA9IGdldFN0eWxlKGVsZW1lbnQsIHByb3ApO1xuICBjb25zdCB2YWx1ZSA9IHJnYlZhbGlkUmVnZXgudGVzdChpbmxpbmVWYWx1ZSlcbiAgICA/IGlubGluZVZhbHVlXG4gICAgOiBjb21wdXRlZFN0eWxlW3Byb3BdO1xuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyNTMyIC0gT2JqZWN0IGlzIHBvc3NpYmx5ICd1bmRlZmluZWQnLlxuICBjb25zdCBtYXRjaGVzID0gZ2V0Rmlyc3RNYXRjaChyZ2JNYXRjaFJlZ2V4LCB2YWx1ZSkuc3BsaXQoQ09NTUFfREVMSU1JVEVSKTtcbiAgcmV0dXJuIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzQ1IC0gQXJndW1lbnQgb2YgdHlwZSAnc3RyaW5nIHwgdW5kZWZpbmVkJyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAnc3RyaW5nJy5cbiAgICByVmFsdWU6IGRlZmF1bHRUbyhwYXJzZUludChtYXRjaGVzWzBdLCAxMCksIDI1NSksXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjM0NSAtIEFyZ3VtZW50IG9mIHR5cGUgJ3N0cmluZyB8IHVuZGVmaW5lZCcgaXMgbm90IGFzc2lnbmFibGUgdG8gcGFyYW1ldGVyIG9mIHR5cGUgJ3N0cmluZycuXG4gICAgZ1ZhbHVlOiBkZWZhdWx0VG8ocGFyc2VJbnQobWF0Y2hlc1sxXSwgMTApLCAyNTUpLFxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzIzNDUgLSBBcmd1bWVudCBvZiB0eXBlICdzdHJpbmcgfCB1bmRlZmluZWQnIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHBhcmFtZXRlciBvZiB0eXBlICdzdHJpbmcnLlxuICAgIGJWYWx1ZTogZGVmYXVsdFRvKHBhcnNlSW50KG1hdGNoZXNbMl0sIDEwKSwgMjU1KSxcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzQ1IC0gQXJndW1lbnQgb2YgdHlwZSAnc3RyaW5nIHwgdW5kZWZpbmVkJyBpcyBub3QgYXNzaWduYWJsZSB0byBwYXJhbWV0ZXIgb2YgdHlwZSAnc3RyaW5nJy5cbiAgICBhVmFsdWU6IGRlZmF1bHRUbyhwYXJzZUZsb2F0KG1hdGNoZXNbM10pLCAxKSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyU3R5bGU8RWxlbWVudFR5cGUsIFNlbGVjdG9yVHlwZT4oXG4gIGVsZW1lbnQ6IEVsZW1lbnRUeXBlLFxuICByZWZTdGF0ZTogYW55LFxuICBhY3Rpb25TdGF0ZTogYW55LFxuICBhY3Rpb25JdGVtOiBBY3Rpb25JdGVtVHlwZSxcbiAgc3R5bGVQcm9wOiBhbnksXG4gIGVsZW1lbnRBcGk6IEVsZW1lbnRBcGk8RWxlbWVudFR5cGUsIFNlbGVjdG9yVHlwZT5cbikge1xuICBjb25zdCB7c2V0U3R5bGV9ID0gZWxlbWVudEFwaTtcbiAgc3dpdGNoIChhY3Rpb25JdGVtLmFjdGlvblR5cGVJZCkge1xuICAgIGNhc2UgU1RZTEVfU0laRToge1xuICAgICAgbGV0IHt3aWR0aFVuaXQgPSAnJywgaGVpZ2h0VW5pdCA9ICcnfSA9IGFjdGlvbkl0ZW0uY29uZmlnO1xuICAgICAgY29uc3Qge3dpZHRoVmFsdWUsIGhlaWdodFZhbHVlfSA9IGFjdGlvblN0YXRlO1xuICAgICAgaWYgKHdpZHRoVmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAod2lkdGhVbml0ID09PSBBVVRPKSB7XG4gICAgICAgICAgd2lkdGhVbml0ID0gJ3B4JztcbiAgICAgICAgfVxuICAgICAgICBhZGRXaWxsQ2hhbmdlKGVsZW1lbnQsIFdJRFRILCBlbGVtZW50QXBpKTtcbiAgICAgICAgc2V0U3R5bGUoZWxlbWVudCwgV0lEVEgsIHdpZHRoVmFsdWUgKyB3aWR0aFVuaXQpO1xuICAgICAgfVxuICAgICAgaWYgKGhlaWdodFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGhlaWdodFVuaXQgPT09IEFVVE8pIHtcbiAgICAgICAgICBoZWlnaHRVbml0ID0gJ3B4JztcbiAgICAgICAgfVxuICAgICAgICBhZGRXaWxsQ2hhbmdlKGVsZW1lbnQsIEhFSUdIVCwgZWxlbWVudEFwaSk7XG4gICAgICAgIHNldFN0eWxlKGVsZW1lbnQsIEhFSUdIVCwgaGVpZ2h0VmFsdWUgKyBoZWlnaHRVbml0KTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjYXNlIFNUWUxFX0ZJTFRFUjoge1xuICAgICAgcmVuZGVyRmlsdGVyKGVsZW1lbnQsIGFjdGlvblN0YXRlLCBhY3Rpb25JdGVtLmNvbmZpZywgZWxlbWVudEFwaSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgY2FzZSBTVFlMRV9GT05UX1ZBUklBVElPTjoge1xuICAgICAgcmVuZGVyRm9udFZhcmlhdGlvbihlbGVtZW50LCBhY3Rpb25TdGF0ZSwgYWN0aW9uSXRlbS5jb25maWcsIGVsZW1lbnRBcGkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNhc2UgU1RZTEVfQkFDS0dST1VORF9DT0xPUjpcbiAgICBjYXNlIFNUWUxFX0JPUkRFUjpcbiAgICBjYXNlIFNUWUxFX1RFWFRfQ09MT1I6IHtcbiAgICAgIGNvbnN0IHByb3AgPSBjb2xvclN0eWxlUHJvcHNbYWN0aW9uSXRlbS5hY3Rpb25UeXBlSWRdO1xuXG4gICAgICBjb25zdCByVmFsdWUgPSBNYXRoLnJvdW5kKGFjdGlvblN0YXRlLnJWYWx1ZSk7XG4gICAgICBjb25zdCBnVmFsdWUgPSBNYXRoLnJvdW5kKGFjdGlvblN0YXRlLmdWYWx1ZSk7XG4gICAgICBjb25zdCBiVmFsdWUgPSBNYXRoLnJvdW5kKGFjdGlvblN0YXRlLmJWYWx1ZSk7XG4gICAgICBjb25zdCBhVmFsdWUgPSBhY3Rpb25TdGF0ZS5hVmFsdWU7XG5cbiAgICAgIGFkZFdpbGxDaGFuZ2UoZWxlbWVudCwgcHJvcCwgZWxlbWVudEFwaSk7XG5cbiAgICAgIHNldFN0eWxlKFxuICAgICAgICBlbGVtZW50LFxuICAgICAgICBwcm9wLFxuICAgICAgICBhVmFsdWUgPj0gMVxuICAgICAgICAgID8gYHJnYigke3JWYWx1ZX0sJHtnVmFsdWV9LCR7YlZhbHVlfSlgXG4gICAgICAgICAgOiBgcmdiYSgke3JWYWx1ZX0sJHtnVmFsdWV9LCR7YlZhbHVlfSwke2FWYWx1ZX0pYFxuICAgICAgKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFMyMzM5IC0gUHJvcGVydHkgJ3VuaXQnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ3sgZGVsYXk6IG51bWJlcjsgZWFzaW5nOiBJWDJFYXNpbmdUeXBlOyBkdXJhdGlvbjogbnVtYmVyOyB0YXJnZXQ6IEFjdGlvbkl0ZW1UYXJnZXRUeXBlOyB4VmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZDsgeVZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQ7IHpWYWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkOyB4VW5pdDogXCIlXCIgfCAuLi4gNCBtb3JlIC4uLiB8IFwiVldcIjsgeVVuaXQ6IFwiJVwiIHwgLi4uIDQgbW9yZSAuLi4gfCBcIlZXXCI7IHpVbml0OiBcIiVcIiB8IC4uLiA0IG1vcmUgLi4uIHwgXCJWV1wiOyB9IHwgLi4uIDUgbW9yZSAuLi4gfCB7IC4uLjsgfScuXG4gICAgICBjb25zdCB7dW5pdCA9ICcnfSA9IGFjdGlvbkl0ZW0uY29uZmlnO1xuICAgICAgYWRkV2lsbENoYW5nZShlbGVtZW50LCBzdHlsZVByb3AsIGVsZW1lbnRBcGkpO1xuICAgICAgc2V0U3R5bGUoZWxlbWVudCwgc3R5bGVQcm9wLCBhY3Rpb25TdGF0ZS52YWx1ZSArIHVuaXQpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlckdlbmVyYWw8RWxlbWVudFR5cGUsIFNlbGVjdG9yVHlwZT4oXG4gIGVsZW1lbnQ6IEVsZW1lbnRUeXBlLFxuICBhY3Rpb25JdGVtOiBhbnksXG4gIGVsZW1lbnRBcGk6IEVsZW1lbnRBcGk8RWxlbWVudFR5cGUsIFNlbGVjdG9yVHlwZT5cbikge1xuICBjb25zdCB7c2V0U3R5bGV9ID0gZWxlbWVudEFwaTtcbiAgc3dpdGNoIChhY3Rpb25JdGVtLmFjdGlvblR5cGVJZCkge1xuICAgIGNhc2UgR0VORVJBTF9ESVNQTEFZOiB7XG4gICAgICBjb25zdCB7dmFsdWV9ID0gYWN0aW9uSXRlbS5jb25maWc7XG4gICAgICBpZiAodmFsdWUgPT09IEZMRVggJiYgSVNfQlJPV1NFUl9FTlYpIHtcbiAgICAgICAgc2V0U3R5bGUoZWxlbWVudCwgRElTUExBWSwgRkxFWF9QUkVGSVhFRCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRTdHlsZShlbGVtZW50LCBESVNQTEFZLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFdpbGxDaGFuZ2U8RWxlbWVudFR5cGUsIFNlbGVjdG9yVHlwZT4oXG4gIGVsZW1lbnQ6IEVsZW1lbnRUeXBlLFxuICBwcm9wOiBzdHJpbmcsXG4gIGVsZW1lbnRBcGk6IEVsZW1lbnRBcGk8RWxlbWVudFR5cGUsIFNlbGVjdG9yVHlwZT5cbikge1xuICBpZiAoIUlTX0JST1dTRVJfRU5WKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IHZhbGlkUHJvcCA9IHdpbGxDaGFuZ2VQcm9wc1twcm9wXTtcbiAgaWYgKCF2YWxpZFByb3ApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3Qge2dldFN0eWxlLCBzZXRTdHlsZX0gPSBlbGVtZW50QXBpO1xuICBjb25zdCB2YWx1ZSA9IGdldFN0eWxlKGVsZW1lbnQsIFdJTExfQ0hBTkdFKTtcbiAgaWYgKCF2YWx1ZSkge1xuICAgIHNldFN0eWxlKGVsZW1lbnQsIFdJTExfQ0hBTkdFLCB2YWxpZFByb3ApO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB2YWx1ZXMgPSB2YWx1ZS5zcGxpdChDT01NQV9ERUxJTUlURVIpLm1hcCh0cmltKTtcbiAgaWYgKHZhbHVlcy5pbmRleE9mKHZhbGlkUHJvcCkgPT09IC0xKSB7XG4gICAgc2V0U3R5bGUoXG4gICAgICBlbGVtZW50LFxuICAgICAgV0lMTF9DSEFOR0UsXG4gICAgICB2YWx1ZXMuY29uY2F0KHZhbGlkUHJvcCkuam9pbihDT01NQV9ERUxJTUlURVIpXG4gICAgKTtcbiAgfVxufVxuXG4vLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICdwcm9wJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuZnVuY3Rpb24gcmVtb3ZlV2lsbENoYW5nZShlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJvcCwgZWxlbWVudEFwaTogYW55KSB7XG4gIGlmICghSVNfQlJPV1NFUl9FTlYpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgdmFsaWRQcm9wID0gd2lsbENoYW5nZVByb3BzW3Byb3BdO1xuICBpZiAoIXZhbGlkUHJvcCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCB7Z2V0U3R5bGUsIHNldFN0eWxlfSA9IGVsZW1lbnRBcGk7XG4gIGNvbnN0IHZhbHVlID0gZ2V0U3R5bGUoZWxlbWVudCwgV0lMTF9DSEFOR0UpO1xuICBpZiAoIXZhbHVlIHx8IHZhbHVlLmluZGV4T2YodmFsaWRQcm9wKSA9PT0gLTEpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgc2V0U3R5bGUoXG4gICAgZWxlbWVudCxcbiAgICBXSUxMX0NIQU5HRSxcbiAgICB2YWx1ZVxuICAgICAgLnNwbGl0KENPTU1BX0RFTElNSVRFUilcbiAgICAgIC5tYXAodHJpbSlcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ3YnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG4gICAgICAuZmlsdGVyKCh2KSA9PiB2ICE9PSB2YWxpZFByb3ApXG4gICAgICAuam9pbihDT01NQV9ERUxJTUlURVIpXG4gICk7XG59XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ3N0b3JlJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnZWxlbWVudEFwaScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckFsbFN0eWxlcyh7c3RvcmUsIGVsZW1lbnRBcGl9KSB7XG4gIGNvbnN0IHtpeERhdGF9ID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgY29uc3Qge2V2ZW50cyA9IHt9LCBhY3Rpb25MaXN0cyA9IHt9fSA9IGl4RGF0YTtcbiAgT2JqZWN0LmtleXMoZXZlbnRzKS5mb3JFYWNoKChldmVudElkKSA9PiB7XG4gICAgY29uc3QgZXZlbnQgPSBldmVudHNbZXZlbnRJZF07XG4gICAgY29uc3Qge2NvbmZpZ30gPSBldmVudC5hY3Rpb247XG4gICAgY29uc3Qge2FjdGlvbkxpc3RJZH0gPSBjb25maWc7XG4gICAgY29uc3QgYWN0aW9uTGlzdCA9IGFjdGlvbkxpc3RzW2FjdGlvbkxpc3RJZF07XG4gICAgaWYgKGFjdGlvbkxpc3QpIHtcbiAgICAgIGNsZWFyQWN0aW9uTGlzdFN0eWxlcyh7YWN0aW9uTGlzdCwgZXZlbnQsIGVsZW1lbnRBcGl9KTtcbiAgICB9XG4gIH0pO1xuICBPYmplY3Qua2V5cyhhY3Rpb25MaXN0cykuZm9yRWFjaCgoYWN0aW9uTGlzdElkKSA9PiB7XG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjM0NSAtIEFyZ3VtZW50IG9mIHR5cGUgJ3sgYWN0aW9uTGlzdDogYW55OyBlbGVtZW50QXBpOiBhbnk7IH0nIGlzIG5vdCBhc3NpZ25hYmxlIHRvIHBhcmFtZXRlciBvZiB0eXBlICd7IGFjdGlvbkxpc3Q/OiB7fSB8IHVuZGVmaW5lZDsgZXZlbnQ6IGFueTsgZWxlbWVudEFwaTogYW55OyB9Jy5cbiAgICBjbGVhckFjdGlvbkxpc3RTdHlsZXMoe2FjdGlvbkxpc3Q6IGFjdGlvbkxpc3RzW2FjdGlvbkxpc3RJZF0sIGVsZW1lbnRBcGl9KTtcbiAgfSk7XG59XG5cbi8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2V2ZW50JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLiB8IFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnZWxlbWVudEFwaScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmZ1bmN0aW9uIGNsZWFyQWN0aW9uTGlzdFN0eWxlcyh7YWN0aW9uTGlzdCA9IHt9LCBldmVudCwgZWxlbWVudEFwaX0pIHtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjMzOSAtIFByb3BlcnR5ICdhY3Rpb25JdGVtR3JvdXBzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICd7fScuIHwgVFMyMzM5IC0gUHJvcGVydHkgJ2NvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgJ3t9Jy5cbiAgY29uc3Qge2FjdGlvbkl0ZW1Hcm91cHMsIGNvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cHN9ID0gYWN0aW9uTGlzdDtcbiAgYWN0aW9uSXRlbUdyb3VwcyAmJlxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2FjdGlvbkdyb3VwJyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICAgIGFjdGlvbkl0ZW1Hcm91cHMuZm9yRWFjaCgoYWN0aW9uR3JvdXApID0+IHtcbiAgICAgIGNsZWFyQWN0aW9uR3JvdXBTdHlsZXMoe2FjdGlvbkdyb3VwLCBldmVudCwgZWxlbWVudEFwaX0pO1xuICAgIH0pO1xuICBjb250aW51b3VzUGFyYW1ldGVyR3JvdXBzICYmXG4gICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAncGFyYW1Hcm91cCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICBjb250aW51b3VzUGFyYW1ldGVyR3JvdXBzLmZvckVhY2goKHBhcmFtR3JvdXApID0+IHtcbiAgICAgIGNvbnN0IHtjb250aW51b3VzQWN0aW9uR3JvdXBzfSA9IHBhcmFtR3JvdXA7XG4gICAgICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICdhY3Rpb25Hcm91cCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICAgIGNvbnRpbnVvdXNBY3Rpb25Hcm91cHMuZm9yRWFjaCgoYWN0aW9uR3JvdXApID0+IHtcbiAgICAgICAgY2xlYXJBY3Rpb25Hcm91cFN0eWxlcyh7YWN0aW9uR3JvdXAsIGV2ZW50LCBlbGVtZW50QXBpfSk7XG4gICAgICB9KTtcbiAgICB9KTtcbn1cblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnYWN0aW9uR3JvdXAnIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuIHwgVFM3MDMxIC0gQmluZGluZyBlbGVtZW50ICdldmVudCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMzEgLSBCaW5kaW5nIGVsZW1lbnQgJ2VsZW1lbnRBcGknIGltcGxpY2l0bHkgaGFzIGFuICdhbnknIHR5cGUuXG5mdW5jdGlvbiBjbGVhckFjdGlvbkdyb3VwU3R5bGVzKHthY3Rpb25Hcm91cCwgZXZlbnQsIGVsZW1lbnRBcGl9KSB7XG4gIGNvbnN0IHthY3Rpb25JdGVtc30gPSBhY3Rpb25Hcm91cDtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnYWN0aW9uSXRlbScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgYWN0aW9uSXRlbXMuZm9yRWFjaCgoYWN0aW9uSXRlbSkgPT4ge1xuICAgIGNvbnN0IHthY3Rpb25UeXBlSWQsIGNvbmZpZ30gPSBhY3Rpb25JdGVtO1xuICAgIGxldCBjbGVhckVsZW1lbnQ7XG5cbiAgICBpZiAoaXNQbHVnaW5UeXBlKGFjdGlvblR5cGVJZCkpIHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzcwMDYgLSBQYXJhbWV0ZXIgJ3JlZicgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbiAgICAgIGNsZWFyRWxlbWVudCA9IChyZWYpID0+IGNsZWFyUGx1Z2luKGFjdGlvblR5cGVJZCkocmVmLCBhY3Rpb25JdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYXJFbGVtZW50ID0gcHJvY2Vzc0VsZW1lbnRCeVR5cGUoe1xuICAgICAgICBlZmZlY3Q6IGNsZWFyU3R5bGVQcm9wLFxuICAgICAgICBhY3Rpb25UeXBlSWQsXG4gICAgICAgIGVsZW1lbnRBcGksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRBZmZlY3RlZEVsZW1lbnRzKHtjb25maWcsIGV2ZW50LCBlbGVtZW50QXBpfSkuZm9yRWFjaChjbGVhckVsZW1lbnQpO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFudXBIVE1MRWxlbWVudChcbiAgZWxlbWVudDogYW55LFxuICBhY3Rpb25JdGVtOiBhbnksXG4gIGVsZW1lbnRBcGk6IGFueVxuKSB7XG4gIGNvbnN0IHtzZXRTdHlsZSwgZ2V0U3R5bGV9ID0gZWxlbWVudEFwaTtcbiAgY29uc3Qge2FjdGlvblR5cGVJZH0gPSBhY3Rpb25JdGVtO1xuXG4gIGlmIChhY3Rpb25UeXBlSWQgPT09IFNUWUxFX1NJWkUpIHtcbiAgICBjb25zdCB7Y29uZmlnfSA9IGFjdGlvbkl0ZW07XG4gICAgaWYgKGNvbmZpZy53aWR0aFVuaXQgPT09IEFVVE8pIHtcbiAgICAgIHNldFN0eWxlKGVsZW1lbnQsIFdJRFRILCAnJyk7XG4gICAgfVxuICAgIGlmIChjb25maWcuaGVpZ2h0VW5pdCA9PT0gQVVUTykge1xuICAgICAgc2V0U3R5bGUoZWxlbWVudCwgSEVJR0hULCAnJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGdldFN0eWxlKGVsZW1lbnQsIFdJTExfQ0hBTkdFKSkge1xuICAgIHByb2Nlc3NFbGVtZW50QnlUeXBlKHtlZmZlY3Q6IHJlbW92ZVdpbGxDaGFuZ2UsIGFjdGlvblR5cGVJZCwgZWxlbWVudEFwaX0pKFxuICAgICAgZWxlbWVudFxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgcHJvY2Vzc0VsZW1lbnRCeVR5cGUgPVxuICAoe1xuICAgIGVmZmVjdCxcbiAgICBhY3Rpb25UeXBlSWQsXG4gICAgZWxlbWVudEFwaSxcbiAgfToge1xuICAgIGVmZmVjdDogKFxuICAgICAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgICBwcm9wOiBhbnkgfCB1bmRlZmluZWQgfCBzdHJpbmcsXG5cbiAgICAgIGVsZW1lbnRBcGk/OiBhbnlcbiAgICApID0+IHZvaWQ7XG4gICAgYWN0aW9uVHlwZUlkOiBBY3Rpb25JZDtcbiAgICBlbGVtZW50QXBpOiBFbGVtZW50QXBpPEhUTUxFbGVtZW50LCBzdHJpbmc+O1xuICB9KSA9PlxuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICdlbGVtZW50JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICAoZWxlbWVudCkgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uVHlwZUlkKSB7XG4gICAgICBjYXNlIFRSQU5TRk9STV9NT1ZFOlxuICAgICAgY2FzZSBUUkFOU0ZPUk1fU0NBTEU6XG4gICAgICBjYXNlIFRSQU5TRk9STV9ST1RBVEU6XG4gICAgICBjYXNlIFRSQU5TRk9STV9TS0VXOlxuICAgICAgICBlZmZlY3QoZWxlbWVudCwgVFJBTlNGT1JNX1BSRUZJWEVELCBlbGVtZW50QXBpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNUWUxFX0ZJTFRFUjpcbiAgICAgICAgZWZmZWN0KGVsZW1lbnQsIEZJTFRFUiwgZWxlbWVudEFwaSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBTVFlMRV9GT05UX1ZBUklBVElPTjpcbiAgICAgICAgZWZmZWN0KGVsZW1lbnQsIEZPTlRfVkFSSUFUSU9OX1NFVFRJTkdTLCBlbGVtZW50QXBpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNUWUxFX09QQUNJVFk6XG4gICAgICAgIGVmZmVjdChlbGVtZW50LCBPUEFDSVRZLCBlbGVtZW50QXBpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFNUWUxFX1NJWkU6XG4gICAgICAgIGVmZmVjdChlbGVtZW50LCBXSURUSCwgZWxlbWVudEFwaSk7XG4gICAgICAgIGVmZmVjdChlbGVtZW50LCBIRUlHSFQsIGVsZW1lbnRBcGkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgU1RZTEVfQkFDS0dST1VORF9DT0xPUjpcbiAgICAgIGNhc2UgU1RZTEVfQk9SREVSOlxuICAgICAgY2FzZSBTVFlMRV9URVhUX0NPTE9SOlxuICAgICAgICBlZmZlY3QoZWxlbWVudCwgY29sb3JTdHlsZVByb3BzW2FjdGlvblR5cGVJZF0sIGVsZW1lbnRBcGkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgR0VORVJBTF9ESVNQTEFZOlxuICAgICAgICBlZmZlY3QoZWxlbWVudCwgRElTUExBWSwgZWxlbWVudEFwaSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAncHJvcCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmZ1bmN0aW9uIGNsZWFyU3R5bGVQcm9wKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBwcm9wLCBlbGVtZW50QXBpOiBhbnkpIHtcbiAgY29uc3Qge3NldFN0eWxlfSA9IGVsZW1lbnRBcGk7XG4gIHJlbW92ZVdpbGxDaGFuZ2UoZWxlbWVudCwgcHJvcCwgZWxlbWVudEFwaSk7XG4gIHNldFN0eWxlKGVsZW1lbnQsIHByb3AsICcnKTtcbiAgLy8gQ2xlYXIgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZFxuICBpZiAocHJvcCA9PT0gVFJBTlNGT1JNX1BSRUZJWEVEKSB7XG4gICAgc2V0U3R5bGUoZWxlbWVudCwgVFJBTlNGT1JNX1NUWUxFX1BSRUZJWEVELCAnJyk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1heER1cmF0aW9uSXRlbUluZGV4KGFjdGlvbkl0ZW1zOiBhbnkpIHtcbiAgbGV0IG1heER1cmF0aW9uID0gMDtcbiAgbGV0IHJlc3VsdEluZGV4ID0gMDtcbiAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAwNiAtIFBhcmFtZXRlciAnYWN0aW9uSXRlbScgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2luZGV4JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBhY3Rpb25JdGVtcy5mb3JFYWNoKChhY3Rpb25JdGVtLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHtjb25maWd9ID0gYWN0aW9uSXRlbTtcbiAgICBjb25zdCB0b3RhbCA9IGNvbmZpZy5kZWxheSArIGNvbmZpZy5kdXJhdGlvbjtcbiAgICBpZiAodG90YWwgPj0gbWF4RHVyYXRpb24pIHtcbiAgICAgIG1heER1cmF0aW9uID0gdG90YWw7XG4gICAgICByZXN1bHRJbmRleCA9IGluZGV4O1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiByZXN1bHRJbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFjdGlvbkxpc3RQcm9ncmVzcyhhY3Rpb25MaXN0OiBhbnksIGluc3RhbmNlOiBhbnkpIHtcbiAgY29uc3Qge2FjdGlvbkl0ZW1Hcm91cHMsIHVzZUZpcnN0R3JvdXBBc0luaXRpYWxTdGF0ZX0gPSBhY3Rpb25MaXN0O1xuICBjb25zdCB7YWN0aW9uSXRlbTogaW5zdGFuY2VJdGVtLCB2ZXJib3NlVGltZUVsYXBzZWQgPSAwfSA9IGluc3RhbmNlO1xuICBsZXQgdG90YWxEdXJhdGlvbiA9IDA7XG4gIGxldCBlbGFwc2VkRHVyYXRpb24gPSAwO1xuICAvLyBAdHMtZXhwZWN0LWVycm9yIC0gVFM3MDA2IC0gUGFyYW1ldGVyICdncm91cCcgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS4gfCBUUzcwMDYgLSBQYXJhbWV0ZXIgJ2luZGV4JyBpbXBsaWNpdGx5IGhhcyBhbiAnYW55JyB0eXBlLlxuICBhY3Rpb25JdGVtR3JvdXBzLmZvckVhY2goKGdyb3VwLCBpbmRleCkgPT4ge1xuICAgIGlmICh1c2VGaXJzdEdyb3VwQXNJbml0aWFsU3RhdGUgJiYgaW5kZXggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qge2FjdGlvbkl0ZW1zfSA9IGdyb3VwO1xuICAgIGNvbnN0IGNhcnJpZXJJdGVtID0gYWN0aW9uSXRlbXNbZ2V0TWF4RHVyYXRpb25JdGVtSW5kZXgoYWN0aW9uSXRlbXMpXTtcbiAgICBjb25zdCB7Y29uZmlnLCBhY3Rpb25UeXBlSWR9ID0gY2Fycmllckl0ZW07XG4gICAgaWYgKGluc3RhbmNlSXRlbS5pZCA9PT0gY2Fycmllckl0ZW0uaWQpIHtcbiAgICAgIGVsYXBzZWREdXJhdGlvbiA9IHRvdGFsRHVyYXRpb24gKyB2ZXJib3NlVGltZUVsYXBzZWQ7XG4gICAgfVxuICAgIGNvbnN0IGR1cmF0aW9uID1cbiAgICAgIGdldFJlbmRlclR5cGUoYWN0aW9uVHlwZUlkKSA9PT0gUkVOREVSX0dFTkVSQUwgPyAwIDogY29uZmlnLmR1cmF0aW9uO1xuICAgIHRvdGFsRHVyYXRpb24gKz0gY29uZmlnLmRlbGF5ICsgZHVyYXRpb247XG4gIH0pO1xuICByZXR1cm4gdG90YWxEdXJhdGlvbiA+IDAgPyBvcHRpbWl6ZUZsb2F0KGVsYXBzZWREdXJhdGlvbiAvIHRvdGFsRHVyYXRpb24pIDogMDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZUxpc3RUb0dyb3VwKHtcbiAgYWN0aW9uTGlzdCxcbiAgYWN0aW9uSXRlbUlkLFxuICByYXdEYXRhLFxufToge1xuICBhY3Rpb25MaXN0OiBBY3Rpb25MaXN0VHlwZTtcbiAgYWN0aW9uSXRlbUlkOiBzdHJpbmc7XG4gIHJhd0RhdGE6IElYMlJhd0RhdGE7XG59KSB7XG4gIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBGSVhNRSAtIFRTMjMzOSAtIFByb3BlcnR5ICdhY3Rpb25JdGVtR3JvdXBzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlICdBY3Rpb25MaXN0VHlwZScuXG4gIGNvbnN0IHthY3Rpb25JdGVtR3JvdXBzLCBjb250aW51b3VzUGFyYW1ldGVyR3JvdXBzfSA9IGFjdGlvbkxpc3Q7XG4gIGNvbnN0IG5ld0FjdGlvbkl0ZW1zOiBBcnJheTxBY3Rpb25JdGVtVHlwZT4gPSBbXTtcblxuICBjb25zdCB0YWtlSXRlbVVudGlsTWF0Y2ggPSAoYWN0aW9uSXRlbTogQWN0aW9uSXRlbVR5cGUpID0+IHtcbiAgICBuZXdBY3Rpb25JdGVtcy5wdXNoKFxuICAgICAgbWVyZ2VJbihhY3Rpb25JdGVtLCBbJ2NvbmZpZyddLCB7XG4gICAgICAgIGRlbGF5OiAwLFxuICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgIH0pXG4gICAgKTtcbiAgICByZXR1cm4gYWN0aW9uSXRlbS5pZCA9PT0gYWN0aW9uSXRlbUlkO1xuICB9O1xuXG4gIGFjdGlvbkl0ZW1Hcm91cHMgJiZcbiAgICBhY3Rpb25JdGVtR3JvdXBzLnNvbWUoKHthY3Rpb25JdGVtc306IHthY3Rpb25JdGVtczogQWN0aW9uSXRlbXNUeXBlfSkgPT4ge1xuICAgICAgcmV0dXJuIGFjdGlvbkl0ZW1zLnNvbWUodGFrZUl0ZW1VbnRpbE1hdGNoKTtcbiAgICB9KTtcblxuICBjb250aW51b3VzUGFyYW1ldGVyR3JvdXBzICYmXG4gICAgY29udGludW91c1BhcmFtZXRlckdyb3Vwcy5zb21lKFxuICAgICAgKFxuICAgICAgICBwYXJhbUdyb3VwOlxuICAgICAgICAgIHwgQ29udGludW91c1BhcmFtZXRlckdyb3VwVHlwZTwnTU9VU0VfWCc+XG4gICAgICAgICAgfCBDb250aW51b3VzUGFyYW1ldGVyR3JvdXBUeXBlPCdNT1VTRV9ZJz5cbiAgICAgICAgICB8IENvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cFR5cGU8J1NDUk9MTF9QUk9HUkVTUyc+XG4gICAgICApID0+IHtcbiAgICAgICAgY29uc3Qge2NvbnRpbnVvdXNBY3Rpb25Hcm91cHN9ID0gcGFyYW1Hcm91cDtcbiAgICAgICAgcmV0dXJuIGNvbnRpbnVvdXNBY3Rpb25Hcm91cHMuc29tZShcbiAgICAgICAgICAoe2FjdGlvbkl0ZW1zfToge2FjdGlvbkl0ZW1zOiBBY3Rpb25JdGVtc1R5cGV9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uSXRlbXMuc29tZSh0YWtlSXRlbVVudGlsTWF0Y2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICApO1xuXG4gIHJldHVybiBzZXRJbihyYXdEYXRhLCBbJ2FjdGlvbkxpc3RzJ10sIHtcbiAgICBbYWN0aW9uTGlzdC5pZF06IHtcbiAgICAgIGlkOiBhY3Rpb25MaXN0LmlkLFxuICAgICAgYWN0aW9uSXRlbUdyb3VwczogW1xuICAgICAgICB7XG4gICAgICAgICAgYWN0aW9uSXRlbXM6IG5ld0FjdGlvbkl0ZW1zLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICB9KTtcbn1cblxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTNzAzMSAtIEJpbmRpbmcgZWxlbWVudCAnYmFzZWRPbicgaW1wbGljaXRseSBoYXMgYW4gJ2FueScgdHlwZS5cbmV4cG9ydCBmdW5jdGlvbiBzaG91bGROYW1lc3BhY2VFdmVudFBhcmFtZXRlcihldmVudFR5cGVJZDogYW55LCB7YmFzZWRPbn0pIHtcbiAgcmV0dXJuIChcbiAgICAoZXZlbnRUeXBlSWQgPT09IEV2ZW50VHlwZUNvbnN0cy5TQ1JPTExJTkdfSU5fVklFVyAmJlxuICAgICAgKGJhc2VkT24gPT09IEV2ZW50QmFzZWRPbi5FTEVNRU5UIHx8IGJhc2VkT24gPT0gbnVsbCkpIHx8XG4gICAgKGV2ZW50VHlwZUlkID09PSBFdmVudFR5cGVDb25zdHMuTU9VU0VfTU9WRSAmJlxuICAgICAgYmFzZWRPbiA9PT0gRXZlbnRCYXNlZE9uLkVMRU1FTlQpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROYW1lc3BhY2VkUGFyYW1ldGVySWQoXG4gIGV2ZW50U3RhdGVLZXk6IGFueSxcbiAgY29udGludW91c1BhcmFtZXRlckdyb3VwSWQ6IENvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cElkXG4pIHtcbiAgY29uc3QgbmFtZXNwYWNlZFBhcmFtZXRlcklkID1cbiAgICBldmVudFN0YXRlS2V5ICsgQ09MT05fREVMSU1JVEVSICsgY29udGludW91c1BhcmFtZXRlckdyb3VwSWQ7XG5cbiAgcmV0dXJuIG5hbWVzcGFjZWRQYXJhbWV0ZXJJZCBhcyBDb250aW51b3VzUGFyYW1ldGVyR3JvdXBJZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNob3VsZEFsbG93TWVkaWFRdWVyeShtZWRpYVF1ZXJpZXM6IGFueSwgbWVkaWFRdWVyeUtleTogYW55KSB7XG4gIC8vIER1cmluZyBkZXNpZ24gbW9kZSwgY3VycmVudCBtZWRpYSBxdWVyeSBrZXkgZG9lcyBub3QgZXhpc3RcbiAgaWYgKG1lZGlhUXVlcnlLZXkgPT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBtZWRpYVF1ZXJpZXMuaW5kZXhPZihtZWRpYVF1ZXJ5S2V5KSAhPT0gLTE7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZWRpYVF1ZXJpZXNFcXVhbChsaXN0QTogYW55LCBsaXN0QjogYW55KSB7XG4gIHJldHVybiBzaGFsbG93RXF1YWwobGlzdEEgJiYgbGlzdEEuc29ydCgpLCBsaXN0QiAmJiBsaXN0Qi5zb3J0KCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5VGFyZ2V0KHRhcmdldDogYW55KSB7XG4gIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgaWYgKHRhcmdldC5wbHVnaW5FbGVtZW50ICYmIHRhcmdldC5vYmplY3RJZCkge1xuICAgIHJldHVybiB0YXJnZXQucGx1Z2luRWxlbWVudCArIEJBUl9ERUxJTUlURVIgKyB0YXJnZXQub2JqZWN0SWQ7XG4gIH1cbiAgaWYgKHRhcmdldC5vYmplY3RJZCkge1xuICAgIHJldHVybiB0YXJnZXQub2JqZWN0SWQ7XG4gIH1cbiAgY29uc3Qge2lkID0gJycsIHNlbGVjdG9yID0gJycsIHVzZUV2ZW50VGFyZ2V0ID0gJyd9ID0gdGFyZ2V0O1xuICByZXR1cm4gaWQgKyBCQVJfREVMSU1JVEVSICsgc2VsZWN0b3IgKyBCQVJfREVMSU1JVEVSICsgdXNlRXZlbnRUYXJnZXQ7XG59XG4iXSwibmFtZXMiOlsiY2xlYW51cEhUTUxFbGVtZW50IiwiY2xlYXJBbGxTdHlsZXMiLCJjbGVhck9iamVjdENhY2hlIiwiZ2V0QWN0aW9uTGlzdFByb2dyZXNzIiwiZ2V0QWZmZWN0ZWRFbGVtZW50cyIsImdldENvbXB1dGVkU3R5bGUiLCJnZXREZXN0aW5hdGlvblZhbHVlcyIsImdldEVsZW1lbnRJZCIsImdldEluc3RhbmNlSWQiLCJnZXRJbnN0YW5jZU9yaWdpbiIsImdldEl0ZW1Db25maWdCeUtleSIsImdldE1heER1cmF0aW9uSXRlbUluZGV4IiwiZ2V0TmFtZXNwYWNlZFBhcmFtZXRlcklkIiwiZ2V0UmVuZGVyVHlwZSIsImdldFN0eWxlUHJvcCIsIm1lZGlhUXVlcmllc0VxdWFsIiwib2JzZXJ2ZVN0b3JlIiwicmVkdWNlTGlzdFRvR3JvdXAiLCJyZWlmeVN0YXRlIiwicmVuZGVySFRNTEVsZW1lbnQiLCJzaGFsbG93RXF1YWwiLCJzaG91bGRBbGxvd01lZGlhUXVlcnkiLCJzaG91bGROYW1lc3BhY2VFdmVudFBhcmFtZXRlciIsInN0cmluZ2lmeVRhcmdldCIsIkJBQ0tHUk9VTkQiLCJUUkFOU0ZPUk0iLCJUUkFOU0xBVEVfM0QiLCJTQ0FMRV8zRCIsIlJPVEFURV9YIiwiUk9UQVRFX1kiLCJST1RBVEVfWiIsIlNLRVciLCJQUkVTRVJWRV8zRCIsIkZMRVgiLCJPUEFDSVRZIiwiRklMVEVSIiwiRk9OVF9WQVJJQVRJT05fU0VUVElOR1MiLCJXSURUSCIsIkhFSUdIVCIsIkJBQ0tHUk9VTkRfQ09MT1IiLCJCT1JERVJfQ09MT1IiLCJDT0xPUiIsIkNISUxEUkVOIiwiSU1NRURJQVRFX0NISUxEUkVOIiwiU0lCTElOR1MiLCJQQVJFTlQiLCJESVNQTEFZIiwiV0lMTF9DSEFOR0UiLCJBVVRPIiwiQ09NTUFfREVMSU1JVEVSIiwiQ09MT05fREVMSU1JVEVSIiwiQkFSX0RFTElNSVRFUiIsIlJFTkRFUl9UUkFOU0ZPUk0iLCJSRU5ERVJfR0VORVJBTCIsIlJFTkRFUl9TVFlMRSIsIlJFTkRFUl9QTFVHSU4iLCJJWDJFbmdpbmVDb25zdGFudHMiLCJUUkFOU0ZPUk1fTU9WRSIsIlRSQU5TRk9STV9TQ0FMRSIsIlRSQU5TRk9STV9ST1RBVEUiLCJUUkFOU0ZPUk1fU0tFVyIsIlNUWUxFX09QQUNJVFkiLCJTVFlMRV9GSUxURVIiLCJTVFlMRV9GT05UX1ZBUklBVElPTiIsIlNUWUxFX1NJWkUiLCJTVFlMRV9CQUNLR1JPVU5EX0NPTE9SIiwiU1RZTEVfQk9SREVSIiwiU1RZTEVfVEVYVF9DT0xPUiIsIkdFTkVSQUxfRElTUExBWSIsIk9CSkVDVF9WQUxVRSIsIkFjdGlvblR5cGVDb25zdHMiLCJ0cmltIiwidiIsImNvbG9yU3R5bGVQcm9wcyIsIk9iamVjdCIsImZyZWV6ZSIsIndpbGxDaGFuZ2VQcm9wcyIsIlRSQU5TRk9STV9QUkVGSVhFRCIsIm9iamVjdENhY2hlIiwiTWFwIiwiY2xlYXIiLCJpbnN0YW5jZUNvdW50IiwiZWxlbWVudENvdW50IiwiaXhFbGVtZW50cyIsInJlZiIsImtleSIsIml4RWwiLCJpZCIsImV2ZW50cyIsImFjdGlvbkxpc3RzIiwic2l0ZSIsImV2ZW50VHlwZU1hcCIsInJlZHVjZSIsInJlc3VsdCIsImV2ZW50IiwiZXZlbnRUeXBlSWQiLCJtZWRpYVF1ZXJpZXMiLCJtZWRpYVF1ZXJ5S2V5cyIsIm1hcCIsIm1xIiwiY29uc29sZSIsIndhcm4iLCJpeERhdGEiLCJzdHJpY3RFcXVhbCIsImEiLCJiIiwic3RvcmUiLCJzZWxlY3QiLCJvbkNoYW5nZSIsImNvbXBhcmF0b3IiLCJnZXRTdGF0ZSIsInN1YnNjcmliZSIsInVuc3Vic2NyaWJlIiwiaGFuZGxlQ2hhbmdlIiwiY3VycmVudFN0YXRlIiwibmV4dFN0YXRlIiwibm9ybWFsaXplVGFyZ2V0IiwidGFyZ2V0IiwidHlwZSIsIm9iamVjdElkIiwic2VsZWN0b3IiLCJzZWxlY3Rvckd1aWRzIiwiYXBwbGllc1RvIiwidXNlRXZlbnRUYXJnZXQiLCJjb25maWciLCJldmVudFRhcmdldCIsImVsZW1lbnRSb290IiwiZWxlbWVudEFwaSIsIkVycm9yIiwidGFyZ2V0cyIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsImFjY3VtdWxhdG9yIiwiY29uY2F0IiwiZ2V0VmFsaWREb2N1bWVudCIsImdldFF1ZXJ5U2VsZWN0b3IiLCJxdWVyeURvY3VtZW50IiwiZ2V0Q2hpbGRFbGVtZW50cyIsImdldFNpYmxpbmdFbGVtZW50cyIsIm1hdGNoU2VsZWN0b3IiLCJlbGVtZW50Q29udGFpbnMiLCJpc1NpYmxpbmdOb2RlIiwiaGFzIiwiZ2V0Iiwic2V0IiwiRXZlbnRBcHBsaWVzVG8iLCJQQUdFIiwiZG9jIiwib3ZlcnJpZGVzIiwiYWN0aW9uIiwiYWZmZWN0ZWRFbGVtZW50cyIsIm92ZXJyaWRlIiwidmFsaWRPdmVycmlkZSIsIkJvb2xlYW4iLCJsaW1pdEFmZmVjdGVkRWxlbWVudHMiLCJiYXNlU2VsZWN0b3IiLCJmaW5hbFNlbGVjdG9yIiwiZXZlbnRUYXJnZXRTZWxlY3RvciIsImV2ZW50VGFyZ2V0cyIsImZpbHRlciIsInBhcmVudEVsZW1lbnQiLCJzb21lIiwidGFyZ2V0RWxlbWVudCIsImNoaWxkRWxlbWVudCIsInNpYmxpbmdFbGVtZW50IiwiSVNfQlJPV1NFUl9FTlYiLCJlbGVtZW50IiwiY29udGFpbnMiLCJhY3Rpb25JdGVtIiwiYWN0aW9uVHlwZUlkIiwid2luZG93IiwicHhWYWx1ZVJlZ2V4IiwiZ2V0RmlsdGVyRGVmYXVsdHMiLCJhY3Rpb25TdGF0ZSIsImZpbHRlcnMiLCJmaWx0ZXJEZWZhdWx0cyIsImdldEZvbnRWYXJpYXRpb25EZWZhdWx0cyIsImZvbnRWYXJpYXRpb25zIiwiZm9udFZhcmlhdGlvbiIsImZvbnRWYXJpYXRpb25EZWZhdWx0cyIsImRlZmF1bHRWYWx1ZSIsInJlZlN0YXRlIiwiY29tcHV0ZWRTdHlsZSIsImdldFN0eWxlIiwiaXNQbHVnaW5UeXBlIiwiZ2V0UGx1Z2luT3JpZ2luIiwidHJhbnNmb3JtRGVmYXVsdHMiLCJ2YWx1ZSIsImRlZmF1bHRUbyIsInBhcnNlRmxvYXQiLCJpbmxpbmVXaWR0aCIsImlubGluZUhlaWdodCIsIndpZHRoVmFsdWUiLCJoZWlnaHRWYWx1ZSIsIndpZHRoVW5pdCIsInRlc3QiLCJ3aWR0aCIsImhlaWdodFVuaXQiLCJoZWlnaHQiLCJwYXJzZUNvbG9yIiwiZGlzcGxheSIsInJlZHVjZUZpbHRlcnMiLCJyZWR1Y2VGb250VmFyaWF0aW9ucyIsImdldFBsdWdpbkNvbmZpZyIsImZpbmRMYXN0IiwiZ2V0UGx1Z2luRGVzdGluYXRpb24iLCJ4VmFsdWUiLCJ5VmFsdWUiLCJ6VmFsdWUiLCJzZXRTdHlsZSIsImdldFByb3BlcnR5IiwidGVtcCIsInJWYWx1ZSIsImdWYWx1ZSIsImJWYWx1ZSIsImFWYWx1ZSIsImdsb2JhbFN3YXRjaElkIiwic3RhcnRzV2l0aCIsIm5vcm1hbGl6ZWRWYWx1ZSIsIm5vcm1hbGl6ZUNvbG9yIiwicmVkIiwiZ3JlZW4iLCJibHVlIiwiYWxwaGEiLCJyZW5kZXJUeXBlIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwiZXZlbnRJZCIsInN0eWxlUHJvcCIsInBsdWdpbkluc3RhbmNlIiwicmVuZGVyVHJhbnNmb3JtIiwicmVuZGVyU3R5bGUiLCJyZW5kZXJHZW5lcmFsIiwicmVuZGVyUGx1Z2luIiwiYmx1ciIsImludmVydCIsImdyYXlzY2FsZSIsInNhdHVyYXRlIiwic2VwaWEiLCJjb250cmFzdCIsImJyaWdodG5lc3MiLCJ3Z2h0Iiwib3BzeiIsIndkdGgiLCJzbG50IiwiZ2V0RmlsdGVyVW5pdCIsImZpbHRlclR5cGUiLCJhY3Rpb25JdGVtQ29uZmlnIiwidW5pdCIsInRyYW5zZm9ybUtleXMiLCJrZXlzIiwibmV3VHJhbnNmb3JtIiwiZGVmYXVsdHMiLCJ4VW5pdCIsInlVbml0IiwielVuaXQiLCJqb2luIiwiYWRkV2lsbENoYW5nZSIsImhhc0RlZmluZWQzZFRyYW5zZm9ybSIsIlRSQU5TRk9STV9TVFlMRV9QUkVGSVhFRCIsInJlbmRlckZpbHRlciIsImZpbHRlclZhbHVlIiwicmVuZGVyRm9udFZhcmlhdGlvbiIsImZvbnRWYXJpYXRpb25WYWx1ZSIsInB1c2giLCJ1bmRlZmluZWQiLCJwYXJhbUNhcHR1cmUiLCJyZ2JWYWxpZFJlZ2V4IiwicmdiTWF0Y2hSZWdleCIsIlJlZ0V4cCIsImdldEZpcnN0TWF0Y2giLCJyZWdleCIsIm1hdGNoIiwiZXhlYyIsInByb3AiLCJpbmxpbmVWYWx1ZSIsIm1hdGNoZXMiLCJzcGxpdCIsInBhcnNlSW50IiwiTWF0aCIsInJvdW5kIiwiRkxFWF9QUkVGSVhFRCIsInZhbGlkUHJvcCIsInZhbHVlcyIsImluZGV4T2YiLCJyZW1vdmVXaWxsQ2hhbmdlIiwiZm9yRWFjaCIsImFjdGlvbkxpc3RJZCIsImFjdGlvbkxpc3QiLCJjbGVhckFjdGlvbkxpc3RTdHlsZXMiLCJhY3Rpb25JdGVtR3JvdXBzIiwiY29udGludW91c1BhcmFtZXRlckdyb3VwcyIsImFjdGlvbkdyb3VwIiwiY2xlYXJBY3Rpb25Hcm91cFN0eWxlcyIsInBhcmFtR3JvdXAiLCJjb250aW51b3VzQWN0aW9uR3JvdXBzIiwiYWN0aW9uSXRlbXMiLCJjbGVhckVsZW1lbnQiLCJjbGVhclBsdWdpbiIsInByb2Nlc3NFbGVtZW50QnlUeXBlIiwiZWZmZWN0IiwiY2xlYXJTdHlsZVByb3AiLCJtYXhEdXJhdGlvbiIsInJlc3VsdEluZGV4IiwiaW5kZXgiLCJ0b3RhbCIsImRlbGF5IiwiZHVyYXRpb24iLCJpbnN0YW5jZSIsInVzZUZpcnN0R3JvdXBBc0luaXRpYWxTdGF0ZSIsImluc3RhbmNlSXRlbSIsInZlcmJvc2VUaW1lRWxhcHNlZCIsInRvdGFsRHVyYXRpb24iLCJlbGFwc2VkRHVyYXRpb24iLCJncm91cCIsImNhcnJpZXJJdGVtIiwib3B0aW1pemVGbG9hdCIsImFjdGlvbkl0ZW1JZCIsInJhd0RhdGEiLCJuZXdBY3Rpb25JdGVtcyIsInRha2VJdGVtVW50aWxNYXRjaCIsIm1lcmdlSW4iLCJzZXRJbiIsImJhc2VkT24iLCJFdmVudFR5cGVDb25zdHMiLCJTQ1JPTExJTkdfSU5fVklFVyIsIkV2ZW50QmFzZWRPbiIsIkVMRU1FTlQiLCJNT1VTRV9NT1ZFIiwiZXZlbnRTdGF0ZUtleSIsImNvbnRpbnVvdXNQYXJhbWV0ZXJHcm91cElkIiwibmFtZXNwYWNlZFBhcmFtZXRlcklkIiwibWVkaWFRdWVyeUtleSIsImxpc3RBIiwibGlzdEIiLCJzb3J0IiwicGx1Z2luRWxlbWVudCJdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQXNCOzs7Ozs7Ozs7OztJQXNxQ05BLGtCQUFrQjtlQUFsQkE7O0lB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
},7164:function(t,e){"use strict";
// from https://github.com/acdlite/recompose/blob/master/src/packages/recompose/shallowEqual.js
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule shallowEqual
 * @typechecks
 */
/* eslint-disable no-self-compare */
/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */function n(t,e){
// SameValue algorithm
return t===e?0!==t||0!==e||1/t==1/e:t!=t&&e!=e;
// Step 6.a: NaN == NaN
}
/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r}});const r=function(t,e){if(n(t,e))return!0;if("object"!=typeof t||null===t||"object"!=typeof e||null===e)return!1;const r=Object.keys(t),i=Object.keys(e);if(r.length!==i.length)return!1;
// Test for A's keys different from B.
for(let i=0;i<r.length;i++)if(!Object.hasOwn(e,// @ts-expect-error - TS2345 - Argument of type 'string | undefined' is not assignable to parameter of type 'PropertyKey'.
r[i])||// @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type. | TS2538 - Type 'undefined' cannot be used as an index type.
!n(t[r[i]],e[r[i]]))return!1;return!0};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC9sb2dpYy9zaGFsbG93RXF1YWwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vYWNkbGl0ZS9yZWNvbXBvc2UvYmxvYi9tYXN0ZXIvc3JjL3BhY2thZ2VzL3JlY29tcG9zZS9zaGFsbG93RXF1YWwuanNcblxuLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAcHJvdmlkZXNNb2R1bGUgc2hhbGxvd0VxdWFsXG4gKiBAdHlwZWNoZWNrc1xuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSAqL1xuXG4vKipcbiAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9pc1xuICovXG5mdW5jdGlvbiBpcyh4OiBudW1iZXIgfCBSZWNvcmQ8YW55LCBhbnk+LCB5OiBudW1iZXIgfCBSZWNvcmQ8YW55LCBhbnk+KSB7XG4gIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgaWYgKHggPT09IHkpIHtcbiAgICAvLyBTdGVwcyAxLTUsIDctMTBcbiAgICAvLyBTdGVwcyA2LmItNi5lOiArMCAhPSAtMFxuICAgIC8vIEFkZGVkIHRoZSBub256ZXJvIHkgY2hlY2sgdG8gbWFrZSBGbG93IGhhcHB5LCBidXQgaXQgaXMgcmVkdW5kYW50XG4gICAgcmV0dXJuIHggIT09IDAgfHwgeSAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH1cbiAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbn1cblxuLyoqXG4gKiBQZXJmb3JtcyBlcXVhbGl0eSBieSBpdGVyYXRpbmcgdGhyb3VnaCBrZXlzIG9uIGFuIG9iamVjdCBhbmQgcmV0dXJuaW5nIGZhbHNlXG4gKiB3aGVuIGFueSBrZXkgaGFzIHZhbHVlcyB3aGljaCBhcmUgbm90IHN0cmljdGx5IGVxdWFsIGJldHdlZW4gdGhlIGFyZ3VtZW50cy5cbiAqIFJldHVybnMgdHJ1ZSB3aGVuIHRoZSB2YWx1ZXMgb2YgYWxsIGtleXMgYXJlIHN0cmljdGx5IGVxdWFsLlxuICovXG5mdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQTogUmVjb3JkPGFueSwgYW55Piwgb2JqQjogUmVjb3JkPGFueSwgYW55Pik6IGJvb2xlYW4ge1xuICBpZiAoaXMob2JqQSwgb2JqQikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChcbiAgICB0eXBlb2Ygb2JqQSAhPT0gJ29iamVjdCcgfHxcbiAgICBvYmpBID09PSBudWxsIHx8XG4gICAgdHlwZW9mIG9iakIgIT09ICdvYmplY3QnIHx8XG4gICAgb2JqQiA9PT0gbnVsbFxuICApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICBjb25zdCBrZXlzQiA9IE9iamVjdC5rZXlzKG9iakIpO1xuXG4gIGlmIChrZXlzQS5sZW5ndGggIT09IGtleXNCLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFRlc3QgZm9yIEEncyBrZXlzIGRpZmZlcmVudCBmcm9tIEIuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5c0EubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoXG4gICAgICAhT2JqZWN0Lmhhc093bihcbiAgICAgICAgb2JqQixcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvciAtIFRTMjM0NSAtIEFyZ3VtZW50IG9mIHR5cGUgJ3N0cmluZyB8IHVuZGVmaW5lZCcgaXMgbm90IGFzc2lnbmFibGUgdG8gcGFyYW1ldGVyIG9mIHR5cGUgJ1Byb3BlcnR5S2V5Jy5cbiAgICAgICAga2V5c0FbaV1cbiAgICAgICkgfHxcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI1MzggLSBUeXBlICd1bmRlZmluZWQnIGNhbm5vdCBiZSB1c2VkIGFzIGFuIGluZGV4IHR5cGUuIHwgVFMyNTM4IC0gVHlwZSAndW5kZWZpbmVkJyBjYW5ub3QgYmUgdXNlZCBhcyBhbiBpbmRleCB0eXBlLlxuICAgICAgIWlzKG9iakFba2V5c0FbaV1dLCBvYmpCW2tleXNBW2ldXSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2hhbGxvd0VxdWFsO1xuIl0sIm5hbWVzIjpbImlzIiwieCIsInkiLCJzaGFsbG93RXF1YWwiLCJvYmpBIiwib2JqQiIsImtleXNBIiwiT2JqZWN0Iiwia2V5cyIsImtleXNCIiwibGVuZ3RoIiwiaSIsImhhc093biJdLCJtYXBwaW5ncyI6IkFBQUEsK0ZBQStGO0FBRS9GOzs7Ozs7OztDQVFDLEdBRUQsa0NBQWtDLEdBRWxDOzs7Q0FHQzs7OzsrQkF5REQ7OztlQUFBOzs7QUF4REEsU0FBU0EsR0FBR0MsQ0FBNEIsRUFBRUMsQ0FBNEI7SUFDcEUsc0JBQXNCO0lBQ3RCLElBQUlELE1BQU1DLEdBQUc7UUFDWCxrQkFBa0I7UUFDbEIsMEJBQTBCO1FBQzFCLG9FQUFvRTtRQUNwRSxPQUFPRCxNQUFNLEtBQUtDLE1BQU0sS0FBSyxJQUFJRCxNQUFNLElBQUlDO0lBQzdDO0lBQ0EsdUJBQXVCO0lBQ3ZCLE9BQU9ELE1BQU1BLEtBQUtDLE1BQU1BO0FBQzFCO0FBRUE7Ozs7Q0FJQyxHQUNELFNBQVNDLGFBQWFDLElBQXNCLEVBQUVDLElBQXNCO0lBQ2xFLElBQUlMLEdBQUdJLE1BQU1DLE9BQU87UUFDbEIsT0FBTztJQUNUO0lBRUEsSUFDRSxPQUFPRCxTQUFTLFlBQ2hCQSxTQUFTLFFBQ1QsT0FBT0MsU0FBUyxZQUNoQkEsU0FBUyxNQUNUO1FBQ0EsT0FBTztJQUNUO0lBRUEsTUFBTUMsUUFBUUMsT0FBT0MsSUFBSSxDQUFDSjtJQUMxQixNQUFNSyxRQUFRRixPQUFPQyxJQUFJLENBQUNIO0lBRTFCLElBQUlDLE1BQU1JLE1BQU0sS0FBS0QsTUFBTUMsTUFBTSxFQUFFO1FBQ2pDLE9BQU87SUFDVDtJQUVBLHNDQUFzQztJQUN0QyxJQUFLLElBQUlDLElBQUksR0FBR0EsSUFBSUwsTUFBTUksTUFBTSxFQUFFQyxJQUFLO1FBQ3JDLElBQ0UsQ0FBQ0osT0FBT0ssTUFBTSxDQUNaUCxNQUNBLDBIQUEwSDtRQUMxSEMsS0FBSyxDQUFDSyxFQUFFLEtBRVYsNklBQTZJO1FBQzdJLENBQUNYLEdBQUdJLElBQUksQ0FBQ0UsS0FBSyxDQUFDSyxFQUFFLENBQUMsRUFBRU4sSUFBSSxDQUFDQyxLQUFLLENBQUNLLEVBQUUsQ0FBQyxHQUNsQztZQUNBLE9BQU87UUFDVDtJQUNGO0lBRUEsT0FBTztBQUNUO01BRUEsV0FBZVIifQ==
},5861:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var n in e)Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}(e,{createElementState:function(){return b},ixElements:function(){return I},mergeActionState:function(){return T}});const r=n(1185),i=n(7087),{HTML_ELEMENT:o,PLAIN_OBJECT:a,EXPRESSION_ELEMENT:u,CONFIG_X_VALUE:c,CONFIG_Y_VALUE:s,CONFIG_Z_VALUE:l,CONFIG_VALUE:f,CONFIG_X_UNIT:d,CONFIG_Y_UNIT:p,CONFIG_Z_UNIT:h,CONFIG_UNIT:E}=i.IX2EngineConstants,{IX2_SESSION_STOPPED:v,IX2_INSTANCE_ADDED:g,IX2_ELEMENT_STATE_CHANGED:y}=i.IX2EngineActionTypes,m={},_="refState",I=(t=m,e={})=>{switch(e.type){case v:return m;case g:{const{elementId:n,element:i,origin:o,actionItem:a,refType:u}=e.payload,{actionTypeId:c}=a;let s=t;
// Create new ref entry if it doesn't exist
// Merge origin values into ref state
return(0,r.getIn)(s,[n,i])!==i&&(s=b(s,i,u,n,a)),T(s,n,c,o,a)}case y:{const{elementId:n,actionTypeId:r,current:i,actionItem:o}=e.payload;return T(t,n,r,i,o)}default:return t}};function b(t,e,n,i,o){const u=n===a?(0,r.getIn)(o,["config","target","objectId"]):null;return(0,r.mergeIn)(t,[i],{id:i,ref:e,refId:u,refType:n})}function T(t,e,n,i,o){const a=function(t){const{config:e}=t;return O.reduce((t,n)=>{const r=n[0],i=n[1],o=e[r],a=e[i];return null!=o&&null!=a&&(
// @ts-expect-error - TS2538 - Type 'undefined' cannot be used as an index type.
t[i]=a),t},{})}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3N5c3RlbXMvaXgyL3NoYXJlZC9yZWR1Y2Vycy9JWDJFbGVtZW50c1JlZHVjZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtnZXRJbiwgbWVyZ2VJbn0gZnJvbSAndGltbSc7XG5pbXBvcnQge1xuICBJWDJFbmdpbmVBY3Rpb25UeXBlcyxcbiAgSVgyRW5naW5lQ29uc3RhbnRzLFxufSBmcm9tICdAcGFja2FnZXMvc3lzdGVtcy9peDIvc2hhcmVkLWNvbnN0YW50cyc7XG5cbmNvbnN0IHtcbiAgSFRNTF9FTEVNRU5ULFxuICBQTEFJTl9PQkpFQ1QsXG4gIEVYUFJFU1NJT05fRUxFTUVOVCxcbiAgQ09ORklHX1hfVkFMVUUsXG4gIENPTkZJR19ZX1ZBTFVFLFxuICBDT05GSUdfWl9WQUxVRSxcbiAgQ09ORklHX1ZBTFVFLFxuICBDT05GSUdfWF9VTklULFxuICBDT05GSUdfWV9VTklULFxuICBDT05GSUdfWl9VTklULFxuICBDT05GSUdfVU5JVCxcbn0gPSBJWDJFbmdpbmVDb25zdGFudHM7XG5cbmNvbnN0IHtJWDJfU0VTU0lPTl9TVE9QUEVELCBJWDJfSU5TVEFOQ0VfQURERUQsIElYMl9FTEVNRU5UX1NUQVRFX0NIQU5HRUR9ID1cbiAgSVgyRW5naW5lQWN0aW9uVHlwZXM7XG5cbmV4cG9ydCB0eXBlIFJlZlR5cGVzID1cbiAgfCB0eXBlb2YgSFRNTF9FTEVNRU5UXG4gIHwgdHlwZW9mIFBMQUlOX09CSkVDVFxuICB8IHR5cGVvZiBFWFBSRVNTSU9OX0VMRU1FTlQ7XG5cbnR5cGUgQWN0aW9uU3RhdGUgPSB7XG4gIHhWYWx1ZT86IG51bWJlcjtcbiAgeVZhbHVlPzogbnVtYmVyO1xuICB6VmFsdWU/OiBudW1iZXI7XG4gIHZhbHVlPzogbnVtYmVyO1xuICB4VW5pdD86IHN0cmluZztcbiAgeVVuaXQ/OiBzdHJpbmc7XG4gIHpVbml0Pzogc3RyaW5nO1xuICB1bml0Pzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgRWxlbWVudHNTdGF0ZTxFbGVtZW50VHlwZT4gPSB7XG4gIFtlbGVtZW50SWQ6IHN0cmluZ106IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIHJlZjogRWxlbWVudFR5cGU7IC8vIEhUTUxFbGVtZW50IHwgT2JqZWN0O1xuICAgIHJlZklkOiBzdHJpbmcgfCBudWxsO1xuICAgIHJlZlR5cGU6IFJlZlR5cGVzO1xuICAgIHJlZlN0YXRlOiB7XG4gICAgICBbYWN0aW9uVHlwZUlkOiBzdHJpbmddOiBBY3Rpb25TdGF0ZTtcbiAgICB9O1xuICB9O1xufTtcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBFbGVtZW50c1N0YXRlPGFueT4gPSB7fTtcbmNvbnN0IHJlZlN0YXRlID0gJ3JlZlN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGl4RWxlbWVudHMgPSA8RWxlbWVudFR5cGU+KFxuICBzdGF0ZTogRWxlbWVudHNTdGF0ZTxFbGVtZW50VHlwZT4gPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogUmVjb3JkPGFueSwgYW55PiA9IHt9XG4pOiBFbGVtZW50c1N0YXRlPEVsZW1lbnRUeXBlPiA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIElYMl9TRVNTSU9OX1NUT1BQRUQ6IHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICAgIGNhc2UgSVgyX0lOU1RBTkNFX0FEREVEOiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGVsZW1lbnRJZCxcbiAgICAgICAgZWxlbWVudDogcmVmLFxuICAgICAgICBvcmlnaW4sXG4gICAgICAgIGFjdGlvbkl0ZW0sXG4gICAgICAgIHJlZlR5cGUsXG4gICAgICB9ID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIGNvbnN0IHthY3Rpb25UeXBlSWR9ID0gYWN0aW9uSXRlbTtcbiAgICAgIGxldCBuZXdTdGF0ZSA9IHN0YXRlO1xuXG4gICAgICAvLyBDcmVhdGUgbmV3IHJlZiBlbnRyeSBpZiBpdCBkb2Vzbid0IGV4aXN0XG4gICAgICBpZiAoZ2V0SW4obmV3U3RhdGUsIFtlbGVtZW50SWQsIHJlZl0pICE9PSByZWYpIHtcbiAgICAgICAgbmV3U3RhdGUgPSBjcmVhdGVFbGVtZW50U3RhdGUoXG4gICAgICAgICAgbmV3U3RhdGUsXG4gICAgICAgICAgcmVmLFxuICAgICAgICAgIHJlZlR5cGUsXG4gICAgICAgICAgZWxlbWVudElkLFxuICAgICAgICAgIGFjdGlvbkl0ZW1cbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgLy8gTWVyZ2Ugb3JpZ2luIHZhbHVlcyBpbnRvIHJlZiBzdGF0ZVxuICAgICAgcmV0dXJuIG1lcmdlQWN0aW9uU3RhdGUoXG4gICAgICAgIG5ld1N0YXRlLFxuICAgICAgICBlbGVtZW50SWQsXG4gICAgICAgIGFjdGlvblR5cGVJZCxcbiAgICAgICAgb3JpZ2luLFxuICAgICAgICBhY3Rpb25JdGVtXG4gICAgICApO1xuICAgIH1cbiAgICBjYXNlIElYMl9FTEVNRU5UX1NUQVRFX0NIQU5HRUQ6IHtcbiAgICAgIGNvbnN0IHtlbGVtZW50SWQsIGFjdGlvblR5cGVJZCwgY3VycmVudCwgYWN0aW9uSXRlbX0gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiBtZXJnZUFjdGlvblN0YXRlKFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgZWxlbWVudElkLFxuICAgICAgICBhY3Rpb25UeXBlSWQsXG4gICAgICAgIGN1cnJlbnQsXG4gICAgICAgIGFjdGlvbkl0ZW1cbiAgICAgICk7XG4gICAgfVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFbGVtZW50U3RhdGU8RWxlbWVudFR5cGU+KFxuICBzdGF0ZTogRWxlbWVudHNTdGF0ZTxFbGVtZW50VHlwZT4sXG4gIHJlZjogRWxlbWVudFR5cGUsXG4gIHJlZlR5cGU6IFJlZlR5cGVzLFxuICBlbGVtZW50SWQ6IHN0cmluZyxcbiAgYWN0aW9uSXRlbToge1xuICAgIFtrZXk6IHN0cmluZ106IGFueTtcbiAgfVxuKTogRWxlbWVudHNTdGF0ZTxFbGVtZW50VHlwZT4ge1xuICBjb25zdCByZWZJZCA9XG4gICAgcmVmVHlwZSA9PT0gUExBSU5fT0JKRUNUXG4gICAgICA/IGdldEluKGFjdGlvbkl0ZW0sIFsnY29uZmlnJywgJ3RhcmdldCcsICdvYmplY3RJZCddKVxuICAgICAgOiBudWxsO1xuICByZXR1cm4gbWVyZ2VJbihzdGF0ZSwgW2VsZW1lbnRJZF0sIHtcbiAgICBpZDogZWxlbWVudElkLFxuICAgIHJlZixcbiAgICByZWZJZCxcbiAgICByZWZUeXBlLFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQWN0aW9uU3RhdGU8RWxlbWVudFR5cGU+KFxuICBzdGF0ZTogRWxlbWVudHNTdGF0ZTxFbGVtZW50VHlwZT4sXG4gIGVsZW1lbnRJZDogc3RyaW5nLFxuICBhY3Rpb25UeXBlSWQ6IHN0cmluZyxcbiAgYWN0aW9uU3RhdGU6IEFjdGlvblN0YXRlLFxuICBhY3Rpb25JdGVtOiBSZWNvcmQ8YW55LCBhbnk+XG4pOiBFbGVtZW50c1N0YXRlPEVsZW1lbnRUeXBlPiB7XG4gIGNvbnN0IHVuaXRzID0gcGlja1VuaXRzKGFjdGlvbkl0ZW0pO1xuICBjb25zdCBtZXJnZVBhdGggPSBbZWxlbWVudElkLCByZWZTdGF0ZSwgYWN0aW9uVHlwZUlkXTtcbiAgcmV0dXJuIG1lcmdlSW4oc3RhdGUsIG1lcmdlUGF0aCwgYWN0aW9uU3RhdGUsIHVuaXRzKTtcbn1cblxuY29uc3QgdmFsdWVVbml0UGFpcnMgPSBbXG4gIFtDT05GSUdfWF9WQUxVRSwgQ09ORklHX1hfVU5JVF0sXG4gIFtDT05GSUdfWV9WQUxVRSwgQ09ORklHX1lfVU5JVF0sXG4gIFtDT05GSUdfWl9WQUxVRSwgQ09ORklHX1pfVU5JVF0sXG4gIFtDT05GSUdfVkFMVUUsIENPTkZJR19VTklUXSxcbl07XG5cbmZ1bmN0aW9uIHBpY2tVbml0cyhhY3Rpb25JdGVtOiBSZWNvcmQ8YW55LCBhbnk+KSB7XG4gIGNvbnN0IHtjb25maWd9ID0gYWN0aW9uSXRlbTtcbiAgcmV0dXJuIHZhbHVlVW5pdFBhaXJzLnJlZHVjZTxSZWNvcmQ8c3RyaW5nLCBhbnk+PigocmVzdWx0LCBwYWlyKSA9PiB7XG4gICAgY29uc3QgdmFsdWVLZXkgPSBwYWlyWzBdO1xuICAgIGNvbnN0IHVuaXRLZXkgPSBwYWlyWzFdO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI1MzggLSBUeXBlICd1bmRlZmluZWQnIGNhbm5vdCBiZSB1c2VkIGFzIGFuIGluZGV4IHR5cGUuXG4gICAgY29uc3QgY29uZmlnVmFsdWUgPSBjb25maWdbdmFsdWVLZXldO1xuICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI1MzggLSBUeXBlICd1bmRlZmluZWQnIGNhbm5vdCBiZSB1c2VkIGFzIGFuIGluZGV4IHR5cGUuXG4gICAgY29uc3QgY29uZmlnVW5pdCA9IGNvbmZpZ1t1bml0S2V5XTtcbiAgICBpZiAoY29uZmlnVmFsdWUgIT0gbnVsbCAmJiBjb25maWdVbml0ICE9IG51bGwpIHtcbiAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3IgLSBUUzI1MzggLSBUeXBlICd1bmRlZmluZWQnIGNhbm5vdCBiZSB1c2VkIGFzIGFuIGluZGV4IHR5cGUuXG4gICAgICByZXN1bHRbdW5pdEtleV0gPSBjb25maWdVbml0O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LCB7fSk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlRWxlbWVudFN0YXRlIiwiaXhFbGVtZW50cyIsIm1lcmdlQWN0aW9uU3RhdGUiLCJIVE1MX0VMRU1FTlQiLCJQTEFJTl9PQkpFQ1QiLCJFWFBSRVNTSU9OX0VMRU1FTlQiLCJDT05GSUdfWF9WQUxVRSIsIkNPTkZJR19ZX1ZBTFVFIiwiQ09ORklHX1pfVkFMVUUiLCJDT05GSUdfVkFMVUUiLCJDT05GSUdfWF9VTklUIiwiQ09ORklHX1lfVU5JVCIsIkNPTkZJR19aX1VOSVQiLCJDT05GSUdfVU5JVCIsIklYMkVuZ2luZUNvbnN0YW50cyIsIklYMl9TRVNTSU9OX1NUT1BQRUQiLCJJWDJfSU5TVEFOQ0VfQURERUQiLCJJWDJfRUxFTUVOVF9TVEFURV9DSEFOR0VEIiwiSVgyRW5naW5lQWN0aW9uVHlwZXMiLCJpbml0aWFsU3RhdGUiLCJyZWZTdGF0ZSIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImVsZW1lbnRJZCIsImVsZW1lbnQiLCJyZWYiLCJvcmlnaW4iLCJhY3Rpb25JdGVtIiwicmVmVHlwZSIsInBheWxvYWQiLCJhY3Rpb25UeXBlSWQiLCJuZXdTdGF0ZSIsImdldEluIiwiY3VycmVudCIsInJlZklkIiwibWVyZ2VJbiIsImlkIiwiYWN0aW9uU3RhdGUiLCJ1bml0cyIsInBpY2tVbml0cyIsIm1lcmdlUGF0aCIsInZhbHVlVW5pdFBhaXJzIiwiY29uZmlnIiwicmVkdWNlIiwicmVzdWx0IiwicGFpciIsInZhbHVlS2V5IiwidW5pdEtleSIsImNvbmZpZ1ZhbHVlIiwiY29uZmlnVW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUE4R2dCQSxrQkFBa0I7ZUFBbEJBOztJQXhESEMsVUFBVTtlQUFWQTs7SUE2RUdDLGdCQUFnQjtlQUFoQkE7OztzQkFuSWE7aUNBSXRCO0FBRVAsTUFBTSxFQUNKQyxZQUFZLEVBQ1pDLFlBQVksRUFDWkMsa0JBQWtCLEVBQ2xCQyxjQUFjLEVBQ2RDLGNBQWMsRUFDZEMsY0FBYyxFQUNkQyxZQUFZLEVBQ1pDLGFBQWEsRUFDYkMsYUFBYSxFQUNiQyxhQUFhLEVBQ2JDLFdBQVcsRUFDWixHQUFHQyxtQ0FBa0I7QUFFdEIsTUFBTSxFQUFDQyxtQkFBbUIsRUFBRUMsa0JBQWtCLEVBQUVDLHlCQUF5QixFQUFDLEdBQ3hFQyxxQ0FBb0I7QUE4QnRCLE1BQU1DLGVBQW1DLENBQUM7QUFDMUMsTUFBTUMsV0FBVztBQUVWLE1BQU1uQixhQUFhLENBQ3hCb0IsUUFBb0NGLFlBQVksRUFDaERHLFNBQTJCLENBQUMsQ0FBQztJQUU3QixPQUFRQSxPQUFPQyxJQUFJO1FBQ2pCLEtB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
(o),u=[e,_,n];return(0,r.mergeIn)(t,u,i,a)}const O=[[c,d],[s,p],[l,h],[f,E]]},7239:function(){
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({events:{"e-3":{id:"e-3",name:"",animationType:"custom",eventTypeId:"MOUSE_MOVE",action:{id:"",actionTypeId:"GENERAL_CONTINUOUS_ACTION",config:{actionListId:"a-3",affectedElements:{},duration:0}},mediaQueries:["main","medium","small","tiny"],target:{selector:".div-block-18",originalId:"69ec86cd523b2ecb4353162e|0af0d8cd-c5b5-cc6c-86ea-0404e4e7be66",appliesTo:"CLASS"},targets:[],config:[{continuousParameterGroupId:"a-3-p",selectedAxis:"X_AXIS",basedOn:"ELEMENT",reverse:!1,smoothing:50,restingState:50},{continuousParameterGroupId:"a-3-p-2",selectedAxis:"Y_AXIS",basedOn:"ELEMENT",reverse:!1,smoothing:50,restingState:50}],createdOn:1777388191799},"e-4":{id:"e-4",name:"",animationType:"custom",eventTypeId:"MOUSE_OVER",action:{id:"",actionTypeId:"GENERAL_START_ACTION",config:{delay:0,easing:"",duration:0,actionListId:"a",affectedElements:{},playInReverse:!1,autoStopEventId:"e-5"}},mediaQueries:["main","medium","small","tiny"],target:{appliesTo:"ELEMENT",styleBlockIds:[],id:"69ec86cd523b2ecb4353162e|90aabe11-eb8a-3b35-b7e9-c1bd4646443d"},targets:[],config:{loop:!1,playInReverse:!1,scrollOffsetValue:null,scrollOffsetUnit:null,delay:null,direction:null,effectIn:null},createdOn:1777388448257},"e-5":{id:"e-5",name:"",animationType:"custom",eventTypeId:"MOUSE_OUT",action:{id:"",actionTypeId:"GENERAL_START_ACTION",config:{delay:0,easing:"",duration:0,actionListId:"a-2",affectedElements:{},playInReverse:!1,autoStopEventId:"e-4"}},mediaQueries:["main","medium","small","tiny"],target:{appliesTo:"ELEMENT",styleBlockIds:[],id:"69ec86cd523b2ecb4353162e|90aabe11-eb8a-3b35-b7e9-c1bd4646443d"},targets:[],config:{loop:!1,playInReverse:!1,scrollOffsetValue:null,scrollOffsetUnit:null,delay:null,direction:null,effectIn:null},createdOn:1777388448257},"e-6":{id:"e-6",name:"",animationType:"custom",eventTypeId:"MOUSE_OVER",action:{id:"",actionTypeId:"GENERAL_START_ACTION",config:{delay:0,easing:"",duration:0,actionListId:"a",affectedElements:{},playInReverse:!1,autoStopEventId:"e-7"}},mediaQueries:["main","medium","small","tiny"],target:{appliesTo:"ELEMENT",styleBlockIds:[],id:"69ec86cd523b2ecb4353162e|95221cab-585b-136e-cd93-a6ac9bb76220"},targets:[],config:{loop:!1,playInReverse:!1,scrollOffsetValue:null,scrollOffsetUnit:null,delay:null,direction:null,effectIn:null},createdOn:1777388483165},"e-7":{id:"e-7",name:"",animationType:"custom",eventTypeId:"MOUSE_OUT",action:{id:"",actionTypeId:"GENERAL_START_ACTION",config:{delay:0,easing:"",duration:0,actionListId:"a-2",affectedElements:{},playInReverse:!1,autoStopEventId:"e-6"}},mediaQueries:["main","medium","small","tiny"],target:{appliesTo:"ELEMENT",styleBlockIds:[],id:"69ec86cd523b2ecb4353162e|95221cab-585b-136e-cd93-a6ac9bb76220"},targets:[],config:{loop:!1,playInReverse:!1,scrollOffsetValue:null,scrollOffsetUnit:null,delay:null,direction:null,effectIn:null},createdOn:1777388483165}},actionLists:{"a-3":{id:"a-3",title:"proo",continuousParameterGroups:[{id:"a-3-p",type:"MOUSE_X",parameterLabel:"Mouse X",continuousActionGroups:[{keyframe:0,actionItems:[{id:"a-3-n",actionTypeId:"TRANSFORM_MOVE",config:{delay:0,easing:"",duration:500,target:{useEventTarget:"CHILDREN",selector:".llll",selectorGuids:["5b9895ab-95d6-dada-545f-33ff1817d423"]},xValue:-50,xUnit:"%",yUnit:"PX",zUnit:"PX"}}]},{keyframe:100,actionItems:[{id:"a-3-n-2",actionTypeId:"TRANSFORM_MOVE",config:{delay:0,easing:"",duration:500,target:{useEventTarget:"CHILDREN",selector:".llll",selectorGuids:["5b9895ab-95d6-dada-545f-33ff1817d423"]},xValue:50,xUnit:"%",yUnit:"PX",zUnit:"PX"}}]}]},{id:"a-3-p-2",type:"MOUSE_Y",parameterLabel:"Mouse Y",continuousActionGroups:[{keyframe:0,actionItems:[{id:"a-3-n-3",actionTypeId:"TRANSFORM_MOVE",config:{delay:0,easing:"",duration:500,target:{useEventTarget:"CHILDREN",selector:".llll",selectorGuids:["5b9895ab-95d6-dada-545f-33ff1817d423"]},yValue:-15,xUnit:"PX",yUnit:"rem",zUnit:"PX"}}]},{keyframe:100,actionItems:[{id:"a-3-n-4",actionTypeId:"TRANSFORM_MOVE",config:{delay:0,easing:"",duration:500,target:{useEventTarget:"CHILDREN",selector:".llll",selectorGuids:["5b9895ab-95d6-dada-545f-33ff1817d423"]},yValue:15,xUnit:"PX",yUnit:"rem",zUnit:"PX"}}]}]}],createdOn:1777388196130},a:{id:"a",title:"New Timed Animation",actionItemGroups:[{actionItems:[{id:"a-n",actionTypeId:"STYLE_OPACITY",config:{delay:0,easing:"",duration:500,target:{useEventTarget:"CHILDREN",selector:".div-block-18",selectorGuids:["fe9de8f2-e03e-9deb-46ce-60367e3ab63f"]},value:0,unit:""}}]},{actionItems:[{id:"a-n-2",actionTypeId:"STYLE_OPACITY",config:{delay:0,easing:"",duration:500,target:{useEventTarget:"CHILDREN",selector:".div-block-18",selectorGuids:["fe9de8f2-e03e-9deb-46ce-60367e3ab63f"]},value:1,unit:""}}]}],createdOn:1777388144526,useFirstGroupAsInitialState:!0},"a-2":{id:"a-2",title:"New Timed Animation 2",actionItemGroups:[{actionItems:[{id:"a-2-n-2",actionTypeId:"STYLE_OPACITY",config:{delay:0,easing:"",duration:500,target:{useEventTarget:"CHILDREN",selector:".div-block-18",selectorGuids:["fe9de8f2-e03e-9deb-46ce-60367e3ab63f"]},value:0,unit:""}}]}],createdOn:1777388144526,useFirstGroupAsInitialState:!1}},site:{mediaQueries:[{key:"main",min:992,max:1e4},{key:"medium",min:768,max:991},{key:"small",min:480,max:767},{key:"tiny",min:0,max:479}]}})}},e={};
/************************************************************************/
// The module cache
// The require function
function n(r){
// Check if module is in cache
var i=e[r];if(void 0!==i)return i.exports;
// Create a new module (and put it into the cache)
var o=e[r]={id:r,loaded:!1,exports:{}};
// Execute the module function
// Return the exports of the module
return t[r](o,o.exports,n),
// Flag the module as loaded
o.loaded=!0,o.exports}
/************************************************************************/
// webpack/runtime/define_property_getters
n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.hmd=t=>((t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t),
// webpack/runtime/global
(()=>{n.g=(()=>{if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}})()})(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),
// define __esModule on exports
n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),n.rv=()=>"1.3.9",n.ruid="bundler=rspack@1.3.9",n(9461),n(7624),n(286),n(8334),n(2338),n(3695),n(941),n(5134),n(7527),n(7239)})();