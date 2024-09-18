/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 419:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(6822);
var tryToString = __webpack_require__(7716);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 5852:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isObject = __webpack_require__(3489);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 2672:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIndexedObject = __webpack_require__(7282);
var toAbsoluteIndex = __webpack_require__(3429);
var lengthOfArrayLike = __webpack_require__(2843);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 5950:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(2667);
var isArray = __webpack_require__(7829);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ 3515:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1671);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 6055:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var hasOwn = __webpack_require__(6072);
var ownKeys = __webpack_require__(9814);
var getOwnPropertyDescriptorModule = __webpack_require__(3570);
var definePropertyModule = __webpack_require__(1152);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 2398:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(2667);
var definePropertyModule = __webpack_require__(1152);
var createPropertyDescriptor = __webpack_require__(7477);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 7477:
/***/ (function(module) {


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 579:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(6822);
var definePropertyModule = __webpack_require__(1152);
var makeBuiltIn = __webpack_require__(3660);
var defineGlobalProperty = __webpack_require__(1328);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 1328:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(2750);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 2667:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(560);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ 8956:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(2750);
var isObject = __webpack_require__(3489);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 1756:
/***/ (function(module) {


var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 7055:
/***/ (function(module) {


module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ 4567:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(2750);
var userAgent = __webpack_require__(7055);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 3108:
/***/ (function(module) {


// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 6071:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(2750);
var getOwnPropertyDescriptor = (__webpack_require__(3570).f);
var createNonEnumerableProperty = __webpack_require__(2398);
var defineBuiltIn = __webpack_require__(579);
var defineGlobalProperty = __webpack_require__(1328);
var copyConstructorProperties = __webpack_require__(6055);
var isForced = __webpack_require__(3859);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = global[TARGET] && global[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 560:
/***/ (function(module) {


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 1693:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(560);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 2486:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(1693);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 2565:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(2667);
var hasOwn = __webpack_require__(6072);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 1671:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_BIND = __webpack_require__(1693);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 7522:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(2750);
var isCallable = __webpack_require__(6822);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 7147:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var aCallable = __webpack_require__(419);
var isNullOrUndefined = __webpack_require__(636);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 2750:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 6072:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1671);
var toObject = __webpack_require__(310);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 8646:
/***/ (function(module) {


module.exports = {};


/***/ }),

/***/ 4468:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(2667);
var fails = __webpack_require__(560);
var createElement = __webpack_require__(8956);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ 1286:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1671);
var fails = __webpack_require__(560);
var classof = __webpack_require__(3515);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 4459:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1671);
var isCallable = __webpack_require__(6822);
var store = __webpack_require__(5404);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 1528:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var NATIVE_WEAK_MAP = __webpack_require__(2891);
var global = __webpack_require__(2750);
var isObject = __webpack_require__(3489);
var createNonEnumerableProperty = __webpack_require__(2398);
var hasOwn = __webpack_require__(6072);
var shared = __webpack_require__(5404);
var sharedKey = __webpack_require__(8310);
var hiddenKeys = __webpack_require__(8646);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 7829:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var classof = __webpack_require__(3515);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ 6822:
/***/ (function(module) {


// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 3859:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var fails = __webpack_require__(560);
var isCallable = __webpack_require__(6822);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 636:
/***/ (function(module) {


// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 3489:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isCallable = __webpack_require__(6822);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 252:
/***/ (function(module) {


module.exports = false;


/***/ }),

/***/ 7646:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(7522);
var isCallable = __webpack_require__(6822);
var isPrototypeOf = __webpack_require__(7948);
var USE_SYMBOL_AS_UID = __webpack_require__(6043);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 2843:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toLength = __webpack_require__(7157);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 3660:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1671);
var fails = __webpack_require__(560);
var isCallable = __webpack_require__(6822);
var hasOwn = __webpack_require__(6072);
var DESCRIPTORS = __webpack_require__(2667);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(2565).CONFIGURABLE);
var inspectSource = __webpack_require__(4459);
var InternalStateModule = __webpack_require__(1528);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 868:
/***/ (function(module) {


var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 1152:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(2667);
var IE8_DOM_DEFINE = __webpack_require__(4468);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(3145);
var anObject = __webpack_require__(5852);
var toPropertyKey = __webpack_require__(9242);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 3570:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(2667);
var call = __webpack_require__(2486);
var propertyIsEnumerableModule = __webpack_require__(8658);
var createPropertyDescriptor = __webpack_require__(7477);
var toIndexedObject = __webpack_require__(7282);
var toPropertyKey = __webpack_require__(9242);
var hasOwn = __webpack_require__(6072);
var IE8_DOM_DEFINE = __webpack_require__(4468);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 5719:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var internalObjectKeys = __webpack_require__(7401);
var enumBugKeys = __webpack_require__(3108);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 3694:
/***/ (function(__unused_webpack_module, exports) {


// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 7948:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1671);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 7401:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1671);
var hasOwn = __webpack_require__(6072);
var toIndexedObject = __webpack_require__(7282);
var indexOf = (__webpack_require__(2672).indexOf);
var hiddenKeys = __webpack_require__(8646);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 8658:
/***/ (function(__unused_webpack_module, exports) {


var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 4481:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(2486);
var isCallable = __webpack_require__(6822);
var isObject = __webpack_require__(3489);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 9814:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var getBuiltIn = __webpack_require__(7522);
var uncurryThis = __webpack_require__(1671);
var getOwnPropertyNamesModule = __webpack_require__(5719);
var getOwnPropertySymbolsModule = __webpack_require__(3694);
var anObject = __webpack_require__(5852);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 8939:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var isNullOrUndefined = __webpack_require__(636);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 8310:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var shared = __webpack_require__(1300);
var uid = __webpack_require__(2599);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 5404:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var IS_PURE = __webpack_require__(252);
var globalThis = __webpack_require__(2750);
var defineGlobalProperty = __webpack_require__(1328);

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.37.1',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.37.1/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 1300:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var store = __webpack_require__(5404);

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ 9474:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(4567);
var fails = __webpack_require__(560);
var global = __webpack_require__(2750);

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 3429:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(3790);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 7282:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(1286);
var requireObjectCoercible = __webpack_require__(8939);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 3790:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var trunc = __webpack_require__(868);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 7157:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toIntegerOrInfinity = __webpack_require__(3790);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 310:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var requireObjectCoercible = __webpack_require__(8939);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 8864:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var call = __webpack_require__(2486);
var isObject = __webpack_require__(3489);
var isSymbol = __webpack_require__(7646);
var getMethod = __webpack_require__(7147);
var ordinaryToPrimitive = __webpack_require__(4481);
var wellKnownSymbol = __webpack_require__(6772);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 9242:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var toPrimitive = __webpack_require__(8864);
var isSymbol = __webpack_require__(7646);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 7716:
/***/ (function(module) {


var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 2599:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var uncurryThis = __webpack_require__(1671);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 6043:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(9474);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 3145:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var DESCRIPTORS = __webpack_require__(2667);
var fails = __webpack_require__(560);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ 2891:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(2750);
var isCallable = __webpack_require__(6822);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 6772:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {


var global = __webpack_require__(2750);
var shared = __webpack_require__(1300);
var hasOwn = __webpack_require__(6072);
var uid = __webpack_require__(2599);
var NATIVE_SYMBOL = __webpack_require__(9474);
var USE_SYMBOL_AS_UID = __webpack_require__(6043);

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 381:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


var $ = __webpack_require__(6071);
var toObject = __webpack_require__(310);
var lengthOfArrayLike = __webpack_require__(2843);
var setArrayLength = __webpack_require__(5950);
var doesNotExceedSafeInteger = __webpack_require__(1756);
var fails = __webpack_require__(560);

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "bdgl-map-lib.common." + chunkId + ".js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "css/" + chunkId + "." + "48d08d29" + ".css";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "bdgl-map-lib:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = function(chunkId, fullhref, oldTag, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			if (__webpack_require__.nc) {
/******/ 				linkTag.nonce = __webpack_require__.nc;
/******/ 			}
/******/ 			var onLinkComplete = function(event) {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && event.type;
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + errorType + ": " + realHref + ")");
/******/ 					err.name = "ChunkLoadError";
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// object to store loaded CSS chunks
/******/ 		var installedCssChunks = {
/******/ 			656: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.miniCss = function(chunkId, promises) {
/******/ 			var cssChunks = {"457":1};
/******/ 			if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 			else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 				promises.push(installedCssChunks[chunkId] = loadStylesheet(chunkId).then(function() {
/******/ 					installedCssChunks[chunkId] = 0;
/******/ 				}, function(e) {
/******/ 					delete installedCssChunks[chunkId];
/******/ 					throw e;
/******/ 				}));
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no hmr
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			656: 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = function(chunkId, promises) {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise(function(resolve, reject) { installedChunkData = installedChunks[chunkId] = [resolve, reject]; });
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = function(event) {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = (typeof self !== 'undefined' ? self : this)["webpackChunkbdgl_map_lib"] = (typeof self !== 'undefined' ? self : this)["webpackChunkbdgl_map_lib"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@5.0.8_vgqb3v6m2ynwvuzumqmye2vzna/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.93.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_ce2ekrksu4bikkggd5ymmdtq6i/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/demo/src/main.vue?vue&type=template&id=05ab3702&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm._m(0);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "a"
  }, [_vm._v(" main "), _c('div', {
    staticClass: "b"
  }, [_vm._v("demo")])]);
}];

;// CONCATENATED MODULE: ./components/demo/src/main.vue?vue&type=template&id=05ab3702&scoped=true

;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.93.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_ce2ekrksu4bikkggd5ymmdtq6i/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/demo/src/main.vue?vue&type=script&lang=js
/* harmony default export */ var mainvue_type_script_lang_js = ({
  name: "demo-main",
  components: {},
  mixins: [],
  props: {},
  computed: {},
  watch: {},
  filters: {},
  data() {
    return {};
  },
  methods: {},
  created() {},
  mounted() {},
  destroyed() {}
});
;// CONCATENATED MODULE: ./components/demo/src/main.vue?vue&type=script&lang=js
 /* harmony default export */ var src_mainvue_type_script_lang_js = (mainvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.93.0/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.93.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_zs77g4opexpjlazxpbaplvsl5m/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/.pnpm/sass-loader@8.0.2_i4l4nmociu5xhprmi6hdovwxki/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/demo/src/main.vue?vue&type=style&index=0&id=05ab3702&prod&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./components/demo/src/main.vue?vue&type=style&index=0&id=05ab3702&prod&lang=scss&scoped=true

;// CONCATENATED MODULE: ./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./components/demo/src/main.vue



;


/* normalize component */

var component = normalizeComponent(
  src_mainvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "05ab3702",
  null
  
)

/* harmony default export */ var main = (component.exports);
;// CONCATENATED MODULE: ./components/demo/index.js

main.install = Vue => {
  Vue.component(main.name, main);
};
/* harmony default export */ var demo = (main);
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.93.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_ce2ekrksu4bikkggd5ymmdtq6i/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/mapComps/mapComps.vue?vue&type=template&id=80bd0c90&scoped=true
var mapCompsvue_type_template_id_80bd0c90_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "map-comps"
  }, [_vm.mapType === 'bdMap' ? _c('bdMap', {
    ref: "bdMap",
    attrs: {
      "mapConfig": _vm.bdMapConfig,
      "infoWindowStyle": _vm.bdInfoWindowStyle
    },
    on: {
      "showMarkerDetail": _vm.showMarkerDetail,
      "showPolylineDetail": _vm.showPolylineDetail,
      "showPolygonDetail": _vm.showPolygonDetail,
      "showCustomOverlayDetail": _vm.showCustomOverlayDetail,
      "return-sectionObj": _vm.getSectionObj,
      "mapChange": _vm.mapChange,
      "mapClick": _vm.mapClick,
      "returnCustomOverlay": _vm.getCustomOverlay
    }
  }) : _vm._e()], 1);
};
var mapCompsvue_type_template_id_80bd0c90_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.93.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_ce2ekrksu4bikkggd5ymmdtq6i/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/mapComps/bdMap/bdMap.vue?vue&type=template&id=9d7de886&scoped=true
var bdMapvue_type_template_id_9d7de886_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    style: _vm.mapStyle,
    attrs: {
      "id": "map-container"
    }
  }, [_c('bdMapVGl', {
    ref: "bdMapVGl",
    attrs: {
      "bdMap": _vm.bdMap
    }
  })], 1);
};
var bdMapvue_type_template_id_9d7de886_scoped_true_staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/.pnpm/core-js@3.37.1/node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(381);
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.93.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_ce2ekrksu4bikkggd5ymmdtq6i/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/mapComps/bdMap/bdMapVGl.vue?vue&type=template&id=51c898b5
var bdMapVGlvue_type_template_id_51c898b5_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div");
};
var bdMapVGlvue_type_template_id_51c898b5_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.93.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_ce2ekrksu4bikkggd5ymmdtq6i/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/mapComps/bdMap/bdMapVGl.vue?vue&type=script&lang=js
/* harmony default export */ var bdMapVGlvue_type_script_lang_js = ({
  name: "bdMapVGl",
  components: {},
  mixins: [],
  props: {
    bdMap: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {},
  watch: {},
  filters: {},
  data() {
    return {};
  },
  methods: {
    /**
     * 初始化用于展示大数据的立体多边形ShapeLayer。
     * 参考文档: [ShapeLayer](https://mapv.baidu.com/gl/docs/ShapeLayer.html)
     *
     * @param {Object} [params={}] - 配置对象，包含ShapeLayer所需参数及事件处理。
     * @property {string} [params.color='rgba(0, 214, 236, 0.8)'] - 立体多边形颜色。
     * @property {boolean} [params.enablePicked=true] - 是否允许拾取交互。
     * @property {number} [params.selectedIndex=-1] - 初始选中项索引。
     * @property {string} [params.selectedColor='#ee1111'] - 选中项颜色。
     * @property {boolean} [params.autoSelect=true] - 是否根据鼠标位置自动选择。
     * @property {Array} [params.data=[]] - 数据源。
     * @property {Function} [params.onclick=() => {}] - 点击事件处理函数。
     *
     * @author: mhf
     * @time: 2024-06-29 14:54:48
     */
    initShapeLayer(params = {}) {
      let {
        color = "rgba(0, 214, 236, 0.8)",
        // 柱状图颜色
        enablePicked = true,
        // 是否可以拾取
        selectedIndex = -1,
        // 选中项
        selectedColor = "#ee1111",
        // 选中项颜色
        autoSelect = true,
        // 根据鼠标位置来自动设置选中项
        data = [],
        // 第一种：随参数带入这个数据
        onclick = () => {}
      } = params;
      var view = new mapvgl.View({
        map: this.bdMap
      });
      var shapeLayer = new mapvgl.ShapeLayer(params);
      view.addLayer(shapeLayer);
      // shapeLayer.setData(jsonData); // 第二种设置数据的方式【jsonData是外部传来的json数据】
      this.bdMap.setDefaultCursor("default"); // 设置地图默认光标
    }
  }
});
;// CONCATENATED MODULE: ./components/mapComps/bdMap/bdMapVGl.vue?vue&type=script&lang=js
 /* harmony default export */ var bdMap_bdMapVGlvue_type_script_lang_js = (bdMapVGlvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./components/mapComps/bdMap/bdMapVGl.vue





/* normalize component */
;
var bdMapVGl_component = normalizeComponent(
  bdMap_bdMapVGlvue_type_script_lang_js,
  bdMapVGlvue_type_template_id_51c898b5_render,
  bdMapVGlvue_type_template_id_51c898b5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var bdMapVGl = (bdMapVGl_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.93.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_ce2ekrksu4bikkggd5ymmdtq6i/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/mapComps/bdMap/bdMap.vue?vue&type=script&lang=js


/* harmony default export */ var bdMapvue_type_script_lang_js = ({
  name: "bdMap",
  components: {
    bdMapVGl: bdMapVGl
  },
  mixins: [],
  props: {
    infoWindowStyle: {
      type: Object,
      default: () => {
        return {
          "--popBg": "#ffffff",
          // 气泡体的背景色
          "--imgDisplay": "block",
          // 气泡体的图片 (可选值：block、none)
          "--closeBtnColor": "#cccccc",
          // 气泡关闭按钮的颜色
          "--titleHeight": "auto" // 气泡顶部标题高度
        };
      }
    }
  },
  computed: {
    mapConfig() {
      return this.$attrs.mapConfig;
    },
    // 获取所有的mapComps传来的props
    mapStyle() {
      return this.infoWindowStyle;
    }
  },
  watch: {},
  filters: {},
  data() {
    return {
      bdMap: null,
      //  百度地图实例
      sectionObj: {
        duration: undefined,
        // 获取路线耗时
        distance: undefined,
        // 路段距离
        pointsArr: [] // 路段上的点位
      },
      // 路段详情
      rightMenu: undefined,
      // 地图右键菜单实例
      viewport: {
        WS: undefined,
        WN: undefined,
        EN: undefined,
        ES: undefined,
        zoom: undefined
      },
      roadCondition: [] // 自定义起点和终点绘制的路况信息
    };
  },
  methods: {
    /**
     * 初始化地图
     * @author: mhf
     * @time: 2024-03-04 10:05:19
     **/
    initMap() {
      console.log(BMapGL, "BMapGL");
      this.bdMap = new BMapGL.Map("map-container"); // 创建Map实例
      this.bdMap.centerAndZoom(new BMapGL.Point(this.mapConfig.center.lng, this.mapConfig.center.lat), this.mapConfig.zoom); // 初始化地图,设置中心点坐标和地图级别
      this.bdMap.enableScrollWheelZoom(true); // 开启鼠标滚轮缩放

      if (this.mapConfig.style?.custom) {
        const {
          custom,
          styleJson,
          styleId
        } = this.mapConfig.style;
        let config;
        if (custom === "styleJson") {
          config = {
            styleJson
          }; // styleJson与ak无关联
        } else if (custom === "styleId") {
          config = {
            styleId
          }; // 发布的styleID需要与ak为同一个用户
        }
        this.$nextTick(() => {
          this.bdMap.setMapStyleV2(config);
        });
      }
      // 确保地图完全加载后再添加事件监听器
      this.bdMap.addEventListener("tilesloaded", () => {
        // console.log("地图加载完成");
        // this.mapChange();
      });
    },
    /**
     * 实现指定路段的实时路况图层并添加点击事件
     * 注意：点击事件需结合 drawPolyline的showPolylineDetail 使用【全局搜索 showPolylineDetail 就懂了】
     * @param: isShowMyRoad: 是否显示系统中配置的路线的实时路况
     * @param: isShowRoadCondition: 是否显示路况图层
     * @param: startPoint: {lat: '', lng: ''} 起点坐标
     * @param: endPoint: {lat: '', lng: ''} 终点坐标
     * @param: customObj: 自定义信息
     * @param: clearRoadSectionType: 移除图层类型(""：所有；traffic：交通流量图层；roadCondition：路径规划路层)
     * @return: sectionObj: 路段的信息(isShowMyRoad为true时可用)
     * @Demo:    this.showRoadCondition({
     *              isShowRoadCondition: true,
     *              isShowMyRoad: true,
     *              startPoint: {
     *                lng: 120.741951,
     *                lat: 30.742613,
     *              },
     *              endPoint: {
     *                lng: 120.741951,
     *                lat: 31.742613,
     *              },
     *          })
     * @author: mhf
     * @time: 2024-03-05 14:29:01
     **/
    showRoadCondition(params = {}) {
      // console.log(params, "百度地图ShowRoadCondition");
      let {
        isShowRoadCondition = true,
        // 是否显示路况图层
        isShowMyRoad = false,
        // 是否显示系统中配置的路线
        startPoint = {
          lng: undefined,
          // 120.741951
          lat: undefined // 30.742613
        },
        endPoint = {
          lng: undefined,
          lat: undefined
        },
        customObj = {},
        clearRoadSectionType = ""
      } = params;
      let pointsArr = [];
      let that = this;
      if (isShowRoadCondition) {
        if (isShowMyRoad) {
          // 将起点和终点转换为经纬度点对象
          const startMarker = new BMapGL.Point(startPoint.lng, startPoint.lat);
          const endMarker = new BMapGL.Point(endPoint.lng, endPoint.lat);
          var searchComplete = results => {
            if (transit.getStatus() == BMAP_STATUS_SUCCESS) {
              var plan = results.getPlan(0);
              pointsArr = that.flattenArr(plan._lines); // 路段中所有的点位数组
              this.sectionObj = {
                duration: plan.getDuration(true),
                distance: plan.getDistance(true),
                pointsArr,
                params
              };
              /* 删除起点和终点的Marker图标 */
              this.$nextTick(() => {
                this.bdMap.removeOverlay(results._end.marker);
                this.bdMap.removeOverlay(results._start.marker);
              });
              /* 绘制一条透明路段实现点击事件 */
              that.drawPolyline({
                pointsArr,
                customObj: {
                  ...customObj,
                  pointsArr
                },
                stroke: {
                  strokeStyle: "solid",
                  strokeColor: "#fff",
                  strokeWeight: 9,
                  strokeOpacity: 0
                },
                isRightDelete: false,
                isViewport: false
              });
            }
          };
          var transit = new BMapGL.DrivingRouteLine(this.bdMap, {
            renderOptions: {
              map: this.bdMap,
              autoViewport: false,
              enableDragging: false,
              lineLayerStyle: {
                strokeTextureUrl: null,
                showTraffic: true
                // lineLayerColor: {
                //     color: '#ffffff',
                //     opacity: 1,
                // }
              }
            },
            onSearchComplete: searchComplete,
            onPolylinesSet: () => {
              this.$emit("return-sectionObj", this.sectionObj); // 将路段信息传递给父组件
            }
          });

          // this.bdMap.setViewport([startMarker, endMarker])
          transit.search(startMarker, endMarker);
          this.roadCondition.push(transit);
        } else {
          this.bdMap.setTrafficOff(); // 移除交通流量图层
          this.$nextTick(() => {
            this.bdMap.setTrafficOn(); // 开启交通路况图层 方法1
          });
          // this.bdMap.addTileLayer(new BMapGL.TrafficLayer()); // 加载交通图层 方法2
          // this.bdMap.setTrafficOff(); // 移除交通流量图层
        }
      } else {
        this.$nextTick(() => {
          this.clearRoadSection(clearRoadSectionType);
        });
      }
    },
    /**
     * @Event 将指定数组嵌套的数据转成扁平化的点位数据
     * @description:
     * @author: mhf
     * @time: 2024-02-01 13:57:20
     **/
    flattenArr(arr) {
      return arr.flatMap(item => item.points);
    },
    /**
     * 移除交通流量图层 和 路径规划路层
     * @param: type: ""：移除所有；traffic：交通流量图层；roadCondition：路径规划路层
     * @return:
     * @author: mhf
     * @time: 2024-05-22 13:35:55
     **/
    clearRoadSection(type = "") {
      const {
        bdMap,
        roadCondition
      } = this;
      if (shouldClear("traffic", type)) {
        bdMap.setTrafficOff();
      }
      if (shouldClear("roadCondition", type)) {
        roadCondition.forEach(condition => condition.clearResults());
      }
      function shouldClear(layerType, requestedType) {
        return requestedType === layerType || requestedType === "";
      }
    },
    /**
     * 添加点标记,实现悬浮信息窗体和点击事件 this.drawMarker({obj: {lng: 116.404, lat: 39.119}})
     * @param: obj 点位对象
     * @param: myIcon 自定义图标,
     * @param: customObj 自定义参数,
     * @param: isReturn 是否返回marker对象
     * @param: isShowInfo 是否显示信息窗口
     * @param: isFloatShadow 是否需要添加气泡阴影，默认为true
     * @param: isShowInfo值为 true 时使用， key 显示信息窗口的key,即绘制点位时自定义对象customObj里面的key,
     * @param: isResetCenter 是否在点击点位时重置地图中心点
     * @param: isResetZoom 是否在点击点位时重置地图缩放级别
     * @param: isResetMakeIcon 是否给点击的marker设置选中的图标
     * @param: myChooseIcon 自定义选中的图标（点击点位时，替换的图标，isResetMakeIcon为true时使用）,
     * @param: offsetX: 偏移量X 水平
     * @param: offsetY: 偏移量Y 垂直
     * @param: html: 信息窗体内容，如：`<span style="line-height: 60px;margin-left: 10px;color: #ff6b00">${item.name}</span>`
     * @param: newZoom: 点击点位后地图更改的缩放级别
     * @param: className: 给生成的marker添加的类名【样式可以在自己的组件中定义， 可以多个类名需用逗号隔开】
     * @param:  isLabelShow: true,
     *           labelText: "label标题",
     *           labelsetX: 10,
     *           labelsetY: -60,
     *           labelStyle: {
     *             color: "#fff", // 文字颜色
     *             backgroundColor: "#0e335b", // 背景颜色，可以使用rgba设置透明度
     *             border: "none", // 边框样式
     *             borderRadius: "5px", // 边框圆角
     *             padding: "5px 10px", // 文本内边距
     *             fontSize: "10px", // 字体大小
     *             fontWeight: "bold", // 字体粗细
     *           },
     * @return: isReturn === true ? marker对象 : null
     * @author: mhf
     * @time: 2024-03-04 10:05:59
     **/
    drawMarker(params = {}) {
      // console.log(params, "百度地图DrawMarker");
      let {
        obj,
        myIcon,
        customObj,
        isReturn = false,
        isShowInfo = false,
        isFloatShadow = true,
        key,
        isResetCenter = true,
        isResetZoom = false,
        isResetMakeIcon = false,
        myChooseIcon,
        offsetX = 0,
        offsetY = 0,
        isLabelShow = false,
        labelsetX = 0,
        labelsetY = 0,
        labelText = undefined,
        labelStyle = undefined,
        html = undefined,
        newZoom = 17,
        className = undefined
      } = params;
      let point = new BMapGL.Point(obj.lng, obj.lat); // 创建点
      let marker = new BMapGL.Marker(point, {
        icon: myIcon ? myIcon : null,
        enableDragging: false // 实现可拖拽
      }); // 创建标注
      marker.setZIndex(1); // 设置点位层级
      if (isLabelShow) {
        // 创建文本标注
        let label = new BMapGL.Label(labelText, {
          offset: new BMapGL.Size(labelsetX, labelsetY) // 设置文本偏移量，使文本显示在标注点的上方
        });
        if (labelStyle) {
          label.setStyle(labelStyle);
        }
        marker.setLabel(label);
      }
      marker.customObj = customObj;
      this.bdMap.addOverlay(marker);
      const markerClick = e => {
        // console.log("点击了标注", e, e.target.customObj);
        if (isResetCenter) {
          /* 重置地图中心点 */
          this.setMapCenter({
            lng: e.target.customObj.longitude,
            lat: e.target.customObj.latitude
          });
        }
        if (isResetZoom) {
          /* 重置地图缩放级别 */
          this.setMapZoom({
            zoom: newZoom
          });
        }
        if (isResetMakeIcon) {
          /* 给点击的marker设置选中的图标 */
          let chooseMarker = new BMapGL.Marker(point, {
            icon: myChooseIcon ? myChooseIcon : null
          }); // 创建选中的点位的图标
          chooseMarker.customObj = {
            ...customObj,
            isChoose: true // 用于标识该标注是否被选中
          }; // 其实只是需要 customObj 中的某个属性值【key】就是用来判断删除的那个【key】

          // this.bdMap.removeOverlay(marker); // 移除当前点击的marker
          this.removeOverlay({
            callback: e => e.customObj?.isChoose
          }); // 移除上一个选中的marker
          chooseMarker.setZIndex(2); // 设置点位层级
          this.bdMap.addOverlay(chooseMarker);
          chooseMarker.addEventListener("click", e => {
            /* 给选中的marker添加点击事件 */
            this.$emit("showMarkerDetail", e.target.customObj); // 接收父组件传来的showMarkerDetail事件（打开详情弹窗）
          });
        }
        this.$emit("showMarkerDetail", e.target.customObj); // 接收父组件传来的showMarkerDetail事件（打开详情弹窗）
      };
      marker.addEventListener("click", markerClick);
      if (isShowInfo) {
        marker.addEventListener("mouseover", e => {
          console.log(e, "e");
          this.isOpenInfoWindow({
            flag: true,
            html: html ? html : e.target.customObj[key],
            offsetX: offsetX,
            offsetY: offsetY,
            marker: point,
            isFloatShadow
          });
        });
        marker.addEventListener("mouseout", () => {
          this.isOpenInfoWindow({
            flag: false
          });
        });
        if (className) {
          /* 可以添加多个类名 需用 , 隔开【如：markerClass,bridge】 */
          setTimeout(() => {
            let classArr = className.split(",");
            classArr.forEach(name => marker.domElement.classList.add(name));
          }, 500);
          this.$forceUpdate();
          // marker.domElement.classList.add(className);
        }
      }
      return isReturn ? marker : null;
    },
    /**
     * 添加线，并实现点击事件
     * @param: pointsArr：点位数组 [{lng: 120.123, lat: 30.123}, ...]
     * @param: customObj 自定义参数 { key: value, ... }
     * @param: stroke 线段样式
     * @param: isRightDelete 是否右键删除
     * @return:
     * @author: mhf
     * @time: 2024-03-06 11:14:28
     **/
    drawPolyline(params = {}) {
      // console.log(params, "百度地图drawPolyline");
      let {
        pointsArr = [],
        customObj = {},
        stroke = {
          strokeStyle: "solid",
          strokeColor: "#5298fe",
          strokeWeight: 9,
          strokeOpacity: 1,
          zIndex: 1000
        },
        isRightDelete = false,
        isViewport = true
      } = params;
      let pointsGlArr = pointsArr.map(item => new BMapGL.Point(item.lng, item.lat));
      let polyline = new BMapGL.Polyline(pointsGlArr, stroke);
      polyline.customObj = customObj; // 添加自定义参数
      this.bdMap.addOverlay(polyline); // 绘制折线
      if (isViewport) {
        this.bdMap.setViewport(pointsArr); // 调整地图视野
      }
      polyline.addEventListener("click", e => {
        console.log("点击了", e);
        this.$emit("showPolylineDetail", e.target.customObj); // 接收父组件传来的showPolylineDetail事件（打开详情弹窗）
        e.domEvent.stopPropagation();
      });
      if (isRightDelete) {
        polyline.addEventListener("rightclick", e => {
          let txtMenuItem = [{
            text: "删除",
            callback: () => {
              /* 移除当前线段 */
              this.bdMap.removeOverlay(polyline);
              /* 移除当前显示的右键菜单 */
              this.bdMap.removeContextMenu(this.rightMenu);
              /* 取消线段点击事件监听器，防止再次触发右键菜单 */
              polyline.removeEventListener("rightclick");
            }
          }];
          this.addRightMenu(txtMenuItem);
        });
      }
    },
    /**
     * 添加面，并实现点击事件
     * @param: pointArr：点位数组 [{lng: 116.387112, lat: 39.920977}, ...]
     * @param: config: 面的配置
     * @param: customObj 自定义参数 { key: value, ... }
     * @return:
     * @author: mhf
     * @time: 2024-03-07 13:31:56
     **/
    drawPolygon(params = {}) {
      console.log(params, "百度地图DrawPolygon");
      let {
        pointArr = [],
        config = {
          zIndex: 10,
          // 层级
          fillOpacity: 0.8,
          // 面的不透明度
          strokeStyle: "solid",
          // dashed虚线、solid实线、dotted点线
          strokeColor: "#5298fe",
          // 边框颜色
          strokeWeight: 6,
          // 边框粗细
          strokeOpacity: 1 // 边框不透明度
        },
        customObj,
        isRightDelete = false // 是否右键删除
      } = params;
      let pointGlArr = pointArr.map(item => new BMapGL.Point(item.lng, item.lat));
      var polygon = new BMapGL.Polygon(pointGlArr, config);
      polygon.customObj = customObj;
      this.bdMap.addOverlay(polygon);
      this.bdMap.setViewport(pointArr);
      polygon.addEventListener("click", e => {
        console.log("点击了面", e);
        this.$emit("showPolygonDetail", e.target.customObj); // 接收父组件传来的showPolygonDetail事件（打开详情弹窗）
      });
      if (isRightDelete) {
        polygon.addEventListener("rightclick", e => {
          let txtMenuItem = [{
            text: "删除",
            callback: () => {
              /* 移除当前线段 */
              this.bdMap.removeOverlay(polygon);
              /* 移除当前显示的右键菜单 */
              this.bdMap.removeContextMenu(this.rightMenu);
              /* 取消线段点击事件监听器，防止再次触发右键菜单 */
              polygon.removeEventListener("rightclick");
            }
          }];
          this.addRightMenu(txtMenuItem);
        });
      }
    },
    /**
     * 添加自定义覆盖物，并添加点击事件
     * https://lbsyun.baidu.com/index.php?title=jspopularGL/guide/CustomOverlay
     * @param: createDOM, point, customObj, customOverlayConfig, isShowInfo, infoWindowConfig
     * @demo: 创建一个图片覆盖物
     * function createDOM(config) {
     *    const img = document.createElement('img');
     *    img.style.width = '300px';
     *    img.style.height = '171px';
     *    img.src = config.url;
     *    img.draggable = false;
     *    return img;
     * }
     * @Event: customOverlay.getProperties() // 获取自定义覆盖物的属性
     * @Event: customOverlay.getPoint()  // 获取自定义覆盖物的坐标
     * @Event: customOverlay.setPoint(new BMapGL.Point(120, 30)) // 设置覆盖物新坐标
     * @Event: customOverlay.hide() // 隐藏自定义覆盖物【show() 显示】
     * @return: customOverlay：自定义覆盖物
     * @author: mhf
     * @time: 2024-07-24 14:00:52
     **/
    drawCustomOverlay(params = {}) {
      let {
        createDOM = () => {
          return "dom";
        },
        // 创建一个文档元素,且必须有返回值【demo看注释】
        point = {
          lng: undefined,
          // 112.18
          lat: undefined // 41.15
        },
        // 点位经纬度
        customObj,
        // 自绑定属性的其他自定义参数（即元素自身的properties参数）
        customOverlayConfig = {
          offsetX: -10,
          // 覆盖物水平偏移量
          offsetY: -10,
          // 覆盖物垂直偏移量
          MinZoom: 4,
          // 最小显示层级
          MaxZoom: 12,
          // 最大显示层级
          enableMassClear: true,
          // 是否能被统一清除掉覆盖物
          enableDraggingMap: true // 是否可以在覆盖物位置拖拽地图
        },
        // CustomOverlay(createDom, options: Object) 构造函数的参数options配置项
        isShowInfo = false,
        // 是否显示信息窗口
        infoWindowConfig = {
          html: "",
          key: "",
          offsetX: 0,
          // 覆盖物水平偏移量
          offsetY: 0,
          isFloatShadow: false
        },
        // 信息窗口配置项(鼠标放在覆盖物上出现的window的配置项)

        isResetCenter = true,
        // 是否重置地图中心点
        isResetZoom = false,
        // 是否重置地图缩放级别
        newZoom = 10 // isResetZoom 为true时，新缩放级别.
      } = params;
      // 创建自定义覆盖物
      const defaultOverlayConfig = {
        offsetX: 0,
        // 覆盖物水平偏移量
        offsetY: 0,
        // 覆盖物垂直偏移量
        // MinZoom: 4, // 最小显示层级
        // MaxZoom: 12, // 最大显示层级
        enableMassClear: true,
        // 是否能被统一清除掉覆盖物
        enableDraggingMap: true // 是否可以在覆盖物位置拖拽地图
      }; // 默认的覆盖物配置
      const overlayConfig = Object.keys(customOverlayConfig).length > 0 ? customOverlayConfig : defaultOverlayConfig;
      const customOverlay = new BMapGL.CustomOverlay(createDOM, {
        point: new BMapGL.Point(point.lng, point.lat),
        properties: {
          customObj // 其他自定义属性
        },
        // 自绑定属性【这里的属性就是createDom(config)中的参数】
        ...overlayConfig // 自定义覆盖物配置
      });
      this.bdMap.addOverlay(customOverlay);
      this.$emit("returnCustomOverlay", customOverlay); // 返回自定义覆盖物实例

      const customOverlayClick = e => {
        console.log("点击了自定义覆盖物", e.target.properties);
        if (isResetCenter) {
          /* 重置地图中心点 */
          this.setMapCenter({
            lng: e.target.point.lng,
            lat: e.target.point.lat
          });
        }
        if (isResetZoom) {
          /* 重置地图缩放级别 */
          this.setMapZoom({
            zoom: newZoom
          });
        }
        // if (isResetMakeIcon) {
        //   /* 给点击的marker设置选中的图标 */
        //   let chooseMarker = new BMapGL.Marker(point, {
        //     icon: myChooseIcon ? myChooseIcon : null,
        //   }); // 创建选中的点位的图标
        //   chooseMarker.customObj = {
        //     ...customObj,
        //     isChoose: true, // 用于标识该标注是否被选中
        //   }; // 其实只是需要 customObj 中的某个属性值【key】就是用来判断删除的那个【key】
        //
        //   // this.bdMap.removeOverlay(marker); // 移除当前点击的marker
        //   this.removeOverlay({
        //     callback: (e) => e.customObj?.isChoose,
        //   }); // 移除上一个选中的marker
        //   chooseMarker.setZIndex(2); // 设置点位层级
        //   this.bdMap.addOverlay(chooseMarker);
        //
        //   chooseMarker.addEventListener("click", (e) => {
        //     /* 给选中的marker添加点击事件 */
        //     this.$emit("showMarkerDetail", e.target.customObj); // 接收父组件传来的showMarkerDetail事件（打开详情弹窗）
        //   });
        // }
        this.$emit("showCustomOverlayDetail", e.target); // 接收父组件传来的showMarkerDetail事件（打开详情弹窗）
      };
      // 鼠标点击事件
      customOverlay.addEventListener("click", customOverlayClick);
      if (isShowInfo) {
        // 鼠标悬浮事件
        customOverlay.addEventListener("mouseover", e => {
          let marker = new BMapGL.Point(point.lng, point.lat); // 创建点
          this.isOpenInfoWindow({
            flag: true,
            html: infoWindowConfig.html ? infoWindowConfig.html : e.target.properties[infoWindowConfig.key],
            offsetX: infoWindowConfig.offsetX,
            offsetY: infoWindowConfig.offsetY,
            marker: marker,
            isFloatShadow: infoWindowConfig.isFloatShadow
          });
        });
        // 鼠标移出事件
        customOverlay.addEventListener("mouseout", () => {
          this.isOpenInfoWindow({
            flag: false
          });
        });
      }
    },
    /**
     * 添加或移除信息窗口
     * @param: flag: true: 添加 false: 移除
     * @param: html: 信息窗口内容
     * @param: offsetX: 偏移量X 水平
     * @param: offsetY: 偏移量Y 垂直
     * @param: marker: 点位对象,如：new BMapGL.Point(lng, lat);
     * @param: isFloatShadow: 是否需要气泡阴影，默认是；
     * @return:
     * @author: mhf
     * @time: 2024-03-04 15:43:55
     **/
    isOpenInfoWindow(params = {}) {
      let {
        flag,
        html,
        offsetX = 0,
        offsetY = 0,
        marker,
        isFloatShadow = true
      } = params;
      if (flag) {
        var infoWindow = new BMapGL.InfoWindow(html, {
          offset: new BMapGL.Size(offsetX, offsetY) // 偏移量
        });
        if (!isFloatShadow) this.bdMap.getPanes().floatShadow.style.display = "none"; // 移除气泡阴影
        this.bdMap.openInfoWindow(infoWindow, marker);
      } else {
        this.bdMap.closeInfoWindow();
      }
    },
    /**
     * 获取点位的自定义图标
     * @param: url 图标地址
     * @param: width 图标宽度
     * @param: height 图标高度
     * @param: offsetW 图片横向偏移
     * @param: offsetH 图标高度偏移
     * @return:
     * @author: mhf
     * @time: 2024-03-04 10:20:50
     **/
    getIcon(params = {}) {
      // console.log(params, "百度地图GetIcon");
      let {
        url = "/img/endPoint.png",
        width = 25,
        height = 40,
        offsetW = 0,
        offsetH = 0
      } = params;
      return new BMapGL.Icon(url, new BMapGL.Size(width, height), {
        anchor: new BMapGL.Size(width / 2, height + 2),
        // 图标中央下端的尖角位置。（左右、上下）[底部居对齐]
        imageOffset: new BMapGL.Size(offsetW, offsetH) // 设置图片偏移
      });
    },
    /**
     * 移除符合特定条件的 点位标记/线段
     * @param: key：customObj的key
     * @param: value：customObj的value，用来判断是否移除
     * @param: callback：自定义回调函数，返回true则移除
     * @return:
     * @author: mhf
     * @time: 2024-03-04 14:07:27
     * @demo1:   this.removeOverlay({
     *              callback: (e) => e.customObj?.type == type
     *            })
     * @demo2:  this.removeOverlay({
     *              key: "type",
     *              value: type
     *           })
     **/
    removeOverlay(params = {}) {
      console.log(params, "百度地图RemoveOverlay");
      let {
        key,
        value,
        callback = () => false
      } = params;
      let overlaysArr = this.bdMap.getOverlays();
      /* 找到所有需要删除的标记 */
      const overlaysToRemove = overlaysArr.filter(overlay => {
        if (key) {
          return overlay.customObj[key] === value;
        } else {
          return callback(overlay);
        }
      });
      /* 移除符合条件的标记 */
      if (overlaysToRemove.length > 0) {
        overlaysToRemove.forEach(overlay => {
          this.bdMap.removeOverlay(overlay);
        });
      }
    },
    /**
     * 设置地图中心点和缩放层级
     * @param: params：{lat: 纬度, lng: 经度, zoom: 缩放层级}
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-04 16:22:17
     **/
    setMapCenterAndZoom(params = {}) {
      let {
        lat,
        lng,
        zoom = 16
      } = params;
      this.bdMap.centerAndZoom(new BMapGL.Point(lng, lat), zoom);
    },
    /**
     * 设置地图中心点
     * @param: params：{lat: 纬度, lng: 经度}
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-04 16:22:17
     **/
    setMapCenter(params = {}) {
      let {
        lat,
        lng
      } = params;
      this.bdMap.setCenter(new BMapGL.Point(lng, lat));
    },
    /**
     * 设置地图缩放层级
     * @param: params：{zoom: 缩放层级}
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-04 16:22:17
     **/
    setMapZoom(params = {}) {
      let {
        zoom
      } = params;
      this.bdMap.setZoom(zoom);
    },
    /**
     * 自适应地图里面的图层，如：绘制线段、面或者多个点的时候，使用此方法可自动将绘制的图层调整到合适的区域和层级
     * @param: pointsArr：点位数组 [{lng: 116.387112, lat: 39.920977}, ...]
     * @return:
     * @author: mhf
     * @time: 2024-03-07 14:48:53
     **/
    setViewport(pointsArr) {
      this.bdMap.setViewport(pointsArr);
    },
    /**
     * 添加右键菜单
     * @param: txtMenuItem：菜单项数组 [{text: "文字", callback: () => {}}, ...]
     * @return:
     * @author: mhf
     * @time: 2024-03-07 15:34:10
     **/
    addRightMenu(txtMenuItem = []) {
      this.rightMenu = new BMapGL.ContextMenu();
      for (var i = 0; i < txtMenuItem.length; i++) {
        this.rightMenu.addItem(new BMapGL.MenuItem(txtMenuItem[i].text, txtMenuItem[i].callback, 100));
      }
      this.bdMap.addContextMenu(this.rightMenu);
    },
    /**
     * 获取地图可视区坐标和层级
     * @param:
     * @return: 可视区坐标和层级
     * @author: mhf
     * @time: 2024-04-24 16:55:21
     **/
    getMapViewport() {
      let bounds = this.bdMap.getBounds(); //获取地图可视区域
      let zoom = this.bdMap.getZoom();
      let WS = bounds.getSouthWest();
      let EN = bounds.getNorthEast();
      return {
        WS,
        // 获取西南角的经纬度(左下角)
        WN: new BMapGL.Point(WS.lng, EN.lat),
        // 获取西北角的经纬度(左上角)
        EN,
        // 获取东北角的经纬度(右上角)
        ES: new BMapGL.Point(EN.lng, WS.lat),
        // 获取东南角的经纬度(右下角)
        zoom
      };
    },
    /**
     * 监听地图缩放/拖动事件
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-04-24 17:34:05
     **/
    mapChange() {
      this.bdMap.addEventListener("zoomend", e => {
        this.viewport = this.getMapViewport();
        this.$emit("mapChange", this.viewport); // 将更新的数据传给父组件
        // console.log(this.viewport, "地图缩放事件");
      });
      this.bdMap.addEventListener("dragend", e => {
        this.viewport = this.getMapViewport();
        this.$emit("mapChange", this.viewport); // 将更新的数据传给父组件
        // console.log(this.viewport, "地图拖拽事件");
      });
      this.bdMap.addEventListener("click", e => {
        this.bdMap.closeInfoWindow();
        this.$emit("mapClick", e);
      });
    },
    initShapeLayer(params = {}) {
      this.$refs.bdMapVGl.initShapeLayer(params);
    }
  },
  created() {},
  mounted() {
    this.initMap();
    this.mapChange();
  },
  destroyed() {
    // this.bdMap.removeEventListener('click', handleClick);
  }
});
;// CONCATENATED MODULE: ./components/mapComps/bdMap/bdMap.vue?vue&type=script&lang=js
 /* harmony default export */ var bdMap_bdMapvue_type_script_lang_js = (bdMapvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.93.0/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.93.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_zs77g4opexpjlazxpbaplvsl5m/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/.pnpm/sass-loader@8.0.2_i4l4nmociu5xhprmi6hdovwxki/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/mapComps/bdMap/bdMap.vue?vue&type=style&index=0&id=9d7de886&prod&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./components/mapComps/bdMap/bdMap.vue?vue&type=style&index=0&id=9d7de886&prod&lang=scss&scoped=true

;// CONCATENATED MODULE: ./components/mapComps/bdMap/bdMap.vue



;


/* normalize component */

var bdMap_component = normalizeComponent(
  bdMap_bdMapvue_type_script_lang_js,
  bdMapvue_type_template_id_9d7de886_scoped_true_render,
  bdMapvue_type_template_id_9d7de886_scoped_true_staticRenderFns,
  false,
  null,
  "9d7de886",
  null
  
)

/* harmony default export */ var bdMap = (bdMap_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.93.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_ce2ekrksu4bikkggd5ymmdtq6i/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/mapComps/mapComps.vue?vue&type=script&lang=js

/* harmony default export */ var mapCompsvue_type_script_lang_js = ({
  name: "mapComps",
  components: {
    bdMap: bdMap
  },
  mixins: [],
  props: {
    mapType: {
      type: String,
      default: "bdMap"
    },
    // 选择的地图类型【aMap：高德地图、bdMap：百度地图、tdMap：天地图、leafletMap：leaflet地图】

    bdMapConfig: {
      type: Object,
      default: () => {
        return {
          center: {
            lng: 116.404,
            lat: 39.915
          },
          zoom: 12,
          style: {
            custom: "",
            // styleId 或 styleJson
            styleId: undefined,
            // 发布的styleID需要与ak为同一个用户
            styleJson: undefined // styleJson与ak无关联
          } // 是否需要自定义地图样式
        };
      }
    },
    // 百度地图基础配置
    bdInfoWindowStyle: {
      "--popBg": "#ffffff",
      // 气泡体的背景色
      "--imgDisplay": "block",
      // 气泡体的图片 (可选值：block、none)
      "--closeBtnColor": "#cccccc",
      // 气泡关闭按钮的颜色
      "--titleHeight": "auto" // 气泡顶部标题高度
    },
    // 百度地图自定义信息窗体样式
    aMapConfig: {
      type: Object,
      default: () => {
        return {
          center: {
            lng: 116.404,
            lat: 39.915
          },
          zoom: 12,
          pitch: 5,
          // 地图俯仰角度，有效范围 0 度- 83 度
          rotation: 90 // 初始地图顺时针旋转的角度
        };
      }
    },
    //  高德地图基础配置
    tdMapConfig: {
      type: Object,
      default: () => {
        return {};
      }
    },
    // 天地图基础配置
    leafletMapConfig: {
      type: Object,
      default: () => {
        return {};
      }
    } //  leaflet地图基础配置
  },
  computed: {},
  watch: {},
  filters: {},
  data() {
    return {};
  },
  methods: {
    /**
     * 重置地图的中心点和缩放层级
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-06 15:51:49
     **/
    setMapCenterAndZoom(obj) {
      this.$refs[this.mapType].setMapCenterAndZoom(obj);
    },
    /**
     * 重置地图的中心点
     * @param:
     * @return:
     * @author: xxb
     * @time: 2024-09-06 17:51:49
     **/
    setMapCenter(obj) {
      this.$refs[this.mapType].setMapCenter(obj);
    },
    /**
     * 添加点标记,实现悬浮信息窗体和点击事件
     * @param: obj
     * @return:
     * @author: mhf
     * @time: 2024-03-04 11:09:46
     **/
    drawMarker(obj) {
      this.$refs[this.mapType].drawMarker(obj);
    },
    /**
     * 添加线，并实现点击事件
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-06 13:17:02
     **/
    drawPolyline(obj) {
      this.$refs[this.mapType].drawPolyline(obj);
    },
    /**
     * 添加面，并实现点击事件
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-06 13:17:02
     **/
    drawPolygon(obj) {
      this.$refs[this.mapType].drawPolygon(obj);
    },
    /**
     * 添加自定义覆盖物，并实现点击事件
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-06 13:17:02
     **/
    drawCustomOverlay(obj) {
      this.$refs[this.mapType].drawCustomOverlay(obj);
    },
    /**
     * 将自定义覆盖物传给父页面
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-06 13:17:02
     **/
    getCustomOverlay(customOverlay) {
      this.$emit("returnCustomOverlay", customOverlay); // 返回自定义覆盖物实例
    },
    /**
     * 获取点位的自定义图标
     * @param: obj
     * @return:
     * @author: mhf
     * @time: 2024-03-04 11:09:46
     **/
    getIcon(obj) {
      return this.$refs[this.mapType].getIcon(obj);
    },
    /**
     * 展示点位详情
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-04 16:12:05
     **/
    showMarkerDetail(params) {
      this.$emit("showMarkerDetail", params);
    },
    /**
     * 展示线段详情
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-04 16:12:05
     **/
    showPolylineDetail(params) {
      this.$emit("showPolylineDetail", params);
    },
    /**
     * 展示面详情
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-04 16:12:05
     **/
    showPolygonDetail(params) {
      this.$emit("showPolygonDetail", params);
    },
    /**
     * 展示自定义覆盖物详情
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-03-04 16:12:05
     **/
    showCustomOverlayDetail(params) {
      this.$emit("showCustomOverlayDetail", params);
    },
    /**
     * 移除符合特定条件的 点位标记/线段
     * @param: obj
     * @return:
     * @author: mhf
     * @time: 2024-03-04 11:09:46
     **/
    removeOverlay(obj) {
      this.$refs[this.mapType].removeOverlay(obj);
    },
    /**
     * [传入起点和终点坐标]实现指定路段的实时路况图层
     * @param: obj
     * @return:
     * @author: mhf
     * @time: 2024-03-04 11:09:46
     **/
    showRoadCondition(obj) {
      this.$refs[this.mapType].showRoadCondition(obj);
    },
    clearRoadSection() {
      this.$refs[this.mapType].clearRoadSection();
    },
    /**
     * 获取地图中绘制的实时线段的信息
     * @param: 将地图组件中接收到的路段信息传给父组件，使用时请直接在组件上挂载
     * @return: obj：路段信息
     * @author: mhf
     * @time: 2024-03-05 16:58:56
     **/
    getSectionObj(obj) {
      // console.log(obj, "obj")
      this.$emit("return-sectionObj", obj);
    },
    /**
     * 获取地图中绘制的实时线段的信息
     * @param: 将地图组件中接收到的路段信息传给父组件，使用时请直接在组件上挂载
     * @return: obj：路段信息
     * @author: mhf
     * @time: 2024-03-05 16:58:56
     **/
    setViewport(arr) {
      this.$refs[this.mapType].setViewport(arr);
    },
    /**
     * 获取地图缩放、拖拽后的可视区坐标和层级
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-04-24 17:56:59
     **/
    mapChange(viewport) {
      // console.log(viewport, "viewport")
      this.$emit("mapChange", viewport); // 接受子组件的数据，并将子组件收到的数据传给父组件
    },
    /**
     * 初始化用于展示大数据的立体多边形ShapeLayer。
     * 参考文档: [ShapeLayer](https://mapv.baidu.com/gl/docs/ShapeLayer.html)
     * @author: mhf
     * @time: 2024-06-29 15:59:20
     **/
    initShapeLayer(params = {}) {
      this.$refs[this.mapType].initShapeLayer(params);
    },
    /**
     * 地图点击事件
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-04-24 17:56:59
     **/
    mapClick(e) {
      this.$emit("mapClick", e);
    }
  },
  created() {},
  mounted() {},
  destroyed() {}
});
;// CONCATENATED MODULE: ./components/mapComps/mapComps.vue?vue&type=script&lang=js
 /* harmony default export */ var mapComps_mapCompsvue_type_script_lang_js = (mapCompsvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.93.0/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.93.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_zs77g4opexpjlazxpbaplvsl5m/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/.pnpm/sass-loader@8.0.2_i4l4nmociu5xhprmi6hdovwxki/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/mapComps/mapComps.vue?vue&type=style&index=0&id=80bd0c90&prod&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./components/mapComps/mapComps.vue?vue&type=style&index=0&id=80bd0c90&prod&lang=scss&scoped=true

;// CONCATENATED MODULE: ./components/mapComps/mapComps.vue



;


/* normalize component */

var mapComps_component = normalizeComponent(
  mapComps_mapCompsvue_type_script_lang_js,
  mapCompsvue_type_template_id_80bd0c90_scoped_true_render,
  mapCompsvue_type_template_id_80bd0c90_scoped_true_staticRenderFns,
  false,
  null,
  "80bd0c90",
  null
  
)

/* harmony default export */ var mapComps = (mapComps_component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.93.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_ce2ekrksu4bikkggd5ymmdtq6i/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/bdLib/bdLib.vue?vue&type=template&id=3e3aac34&scoped=true
var bdLibvue_type_template_id_3e3aac34_scoped_true_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.dialogVisible ? _c('el-dialog', {
    directives: [{
      name: "dialog-out",
      rawName: "v-dialog-out"
    }],
    attrs: {
      "width": "1300px",
      "append-to-body": "",
      "title": _vm.title,
      "close-on-click-modal": false,
      "visible": _vm.dialogVisible
    },
    on: {
      "update:visible": function ($event) {
        _vm.dialogVisible = $event;
      },
      "close": _vm.hideDialog
    }
  }, [_c('div', {
    staticClass: "dialog-body"
  }, [_c('ul', {
    staticClass: "dialog-body-panel"
  }, _vm._l(_vm.btnList, function (item) {
    return _c('li', {
      key: item,
      class: ['bmap-btn', `bmap-${item}`],
      style: {
        'background-position-y': _vm.activeBtn === item ? '-52px' : '0px'
      },
      on: {
        "click": function ($event) {
          return _vm.handleDraw(item);
        }
      }
    });
  }), 0), _vm.dialogVisible ? _c('div', {
    ref: "map",
    staticClass: "map",
    attrs: {
      "id": "map-container"
    }
  }) : _vm._e()]), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    on: {
      "click": _vm.hideDialog
    }
  }, [_vm._v("取 消")]), _c('el-button', {
    attrs: {
      "type": "primary"
    },
    on: {
      "click": function ($event) {
        return _vm.handleSubmit();
      }
    }
  }, [_vm._v("保存")])], 1)]) : _vm._e();
};
var bdLibvue_type_template_id_3e3aac34_scoped_true_staticRenderFns = [];

;// CONCATENATED MODULE: ./components/bdLib/bmpgl_lib.js
/**
 * 异步加载百度地图
 * @returns {Promise}
 * @constructor
 */
function loadBaiDuMap(ak) {
  return new Promise(function (resolve, reject) {
    try {
      console.log("BMap is defined:", BMapGL === undefined || BMapGL);
      resolve(BMapGL);
    } catch (err) {
      window.init = function () {
        resolve(BMapGL);
      };
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://api.map.baidu.com/api?v=1.0&type=webgl&ak=${ak}&callback=init`;
      script.onerror = reject;
      document.body.appendChild(script);
    }
  });
}

/**
 * 选择性加载，如果不需要就把下面的这部分删掉
 * 异步加载百度地图,以及绘制工具
 * @returns {Promise}
 * @constructor
 */
function loadBaiDuDrawMap(ak) {
  return loadBaiDuMap(ak).then(BMapGL => {
    let loaded = false;
    try {
      loaded = BMapGLLib && BMapGLLib.DrawingManager;
    } catch (err) {
      loaded = false;
    }
    if (!loaded) {
      console.log("BMapLib.DrawingManager loading!");
      let script = document.createElement("script");
      script.type = "text/javascript";
      // script.src = "http://mapopen.cdn.bcebos.com/github/BMapGLLib/DrawingManager/src/DrawingManager.min.js";
      script.src = __webpack_require__.e(/* import() */ 272).then(__webpack_require__.t.bind(__webpack_require__, 6272, 23));
      document.body.appendChild(script);
      let link = document.createElement("link");
      link.rel = "stylesheet";
      // link.href = "http://mapopen.cdn.bcebos.com/github/BMapGLLib/DrawingManager/src/DrawingManager.min.css";
      link.href = __webpack_require__.e(/* import() */ 457).then(__webpack_require__.bind(__webpack_require__, 7457));
      document.body.appendChild(link);
    } else {
      console.log("BMapLib.DrawingManager is loaded!");
    }
    return BMapGL;
  });
}

;// CONCATENATED MODULE: ./node_modules/.pnpm/thread-loader@3.0.4_webpack@5.93.0/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/babel-loader@8.3.0_ce2ekrksu4bikkggd5ymmdtq6i/node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/bdLib/bdLib.vue?vue&type=script&lang=js

/* harmony default export */ var bdLibvue_type_script_lang_js = ({
  name: "bdGlDrawAreaDialog",
  components: {},
  props: {
    ak: {
      required: true,
      type: String,
      default: ""
    },
    btnList: {
      type: Array,
      default: () => {
        return ["marker", "polyline", "rectangle", "polygon", "circle"];
      }
    },
    // 按钮列表【marker：点位,polyline：折线,rectangle：矩形,polygon：多边形,circle：圆】
    mapConfig: {
      type: Object,
      default: () => {
        return {
          lng: 113.16,
          // 经度
          lat: 40.9556,
          zoom: 12,
          heading: 10,
          // 地图旋转角度
          tilt: 19,
          // 地图倾斜角度
          styleId: "" // 个性化地图样式 e6360ab59a74ddb51b584fb38d1cc191
          // mapType: BMAP_EARTH_MAP, // 地图类型：BMAP_EARTH_MAP 地图卫星模式，BMAP_NORMAL_MAP 普通模式
        };
      }
    },
    // 地图基础配置信息
    isCustomCenter: {
      type: Boolean,
      default: false
    },
    // 是否需要自定义地图中心点（默认使用用户的位置）
    mapCenter: {
      type: Object,
      default: () => {
        return {
          lng: 113.16,
          // 经度
          lat: 40.9556
        };
      }
    },
    // 地图中心点（仅当isCustomCenter为false时生效）
    styleOptions: {
      type: Object,
      default: () => {
        return {
          strokeColor: "#43a8ff",
          // 边线颜色
          fillColor: "#43a8ff",
          // 填充颜色
          strokeWeight: 3,
          // 边线宽度，以像素为单位
          strokeOpacity: 1,
          // 边线透明度，取值范围0-1
          fillOpacity: 0.2 // 填充透明度，取值范围0-1
        };
      }
    },
    // 自定义图形样式
    labelOptions: {
      type: Object,
      default: () => {
        return {
          borderRadius: "2px",
          background: "#FFFBCC",
          border: "1px solid #E1E1E1",
          color: "#703A04",
          fontSize: "12px",
          letterSpacing: "0",
          padding: "5px"
        };
      }
    } // 自定义图形标注样式（提示词）
  },
  dicts: [],
  data() {
    return {
      title: "绘制区域",
      map: null,
      BMapGL: null,
      dialogVisible: false,
      activeBtn: "",
      // 当前激活的按钮
      markerObj: {
        e: undefined,
        point: undefined,
        address: undefined
      },
      // 点位绘制完的数据
      polylineObj: {
        e: undefined,
        pointsArr: undefined
      },
      // 折线绘制完的数据
      rectangleObj: {
        e: undefined,
        pointsArr: undefined
      },
      // 矩形绘制完的数据
      polygonObj: {
        e: undefined,
        pointsArr: undefined
      },
      //  多边形绘制完的数据
      circleObj: {
        e: undefined,
        center: undefined,
        radius: undefined
      } // 圆形绘制完的数据
    };
  },
  methods: {
    /**
     * 获取当前IP定位的经纬度
     * @param:
     * @return: 当前用户的经纬度
     * @author: mhf
     * @time: 2024-05-14 16:57:23
     **/
    getMyPosition() {
      return new Promise((resolve, reject) => {
        this.$nextTick(() => {
          const geolocation = new this.BMapGL.Geolocation();
          geolocation.getCurrentPosition(res => {
            if (res && res.point) {
              resolve(res.point);
            } else {
              reject({
                lat: undefined,
                lng: undefined
              });
            }
          });
        });
      });
    },
    /**
     * 初始化地图
     * @author: mhf
     * @time: 2024-05-15 13:41:54
     **/
    initMap() {
      this.$nextTick(() => {
        loadBaiDuDrawMap(this.ak).then(() => {
          this.BMapGL = BMapGL;
          this.map = new this.BMapGL.Map("map-container");
          let latLng = this.getMyPosition();
          this.map.enableScrollWheelZoom();
          this.map.setHeading(this.mapConfig.heading);
          this.map.setTilt(this.mapConfig.tilt);
          this.map.setMapStyleV2({
            styleId: this.mapConfig.styleId
          });

          // this.map.setMapType(this.mapConfig.mapType); // todo 异步后导致地图类型不可用？？？

          function getCoordinates(isCustomCenter, latLng, mapConfig) {
            return {
              lng: isCustomCenter ? mapConfig.lng : latLng.lng,
              lat: isCustomCenter ? mapConfig.lat : latLng.lat
            };
          }

          // 使用提取的函数来获取坐标
          const coordinates = getCoordinates(!this.isCustomCenter, latLng, this.mapConfig);
          // 设置地图中心点和缩放级别
          this.map.centerAndZoom(new this.BMapGL.Point(coordinates.lng, coordinates.lat), this.mapConfig.zoom);
          this.echoMapPolygon();
        });
      });
    },
    /**
     * 回显图层（点 线 面 ...）
     * @param: todo 需完善其他类型的数据回显
     * @return:
     * @author: mhf
     * @time: 2024-05-31 16:35:25
     **/
    echoMapPolygon() {
      /* 多边形回显 */
      if (this.polygonObj.pointsArr) {
        let pointsArr = JSON.parse(this.polygonObj.pointsArr);
        let pointGlArr = pointsArr.map(item => new BMapGL.Point(item.lng, item.lat));
        var polygon = new BMapGL.Polygon(pointGlArr, this.styleOptions);
        this.map.addOverlay(polygon);
        this.map.setViewport(pointsArr);
      }
    },
    /**
     * 绘制图层
     * @param: btnType：绘制类型
     * @return:
     * @author: mhf
     * @time: 2024-05-15 13:43:10
     **/
    handleDraw(btnType) {
      this.clearLayers();
      this.activeBtn = btnType;
      // 实例化鼠标绘制工具
      const drawingManager = new BMapGLLib.DrawingManager(this.map, {
        //isOpen: true,        // 是否开启绘制模式
        enableCalculate: false,
        // 绘制是否进行测距测面
        enableSorption: true,
        // 是否开启边界吸附功能
        sorptiondistance: 20,
        // 边界吸附距离
        circleOptions: this.styleOptions,
        // 圆的样式
        polylineOptions: this.styleOptions,
        // 线的样式
        polygonOptions: this.styleOptions,
        // 多边形的样式
        rectangleOptions: this.styleOptions,
        // 矩形的样式
        labelOptions: this.labelOptions // label样式
      });
      if (drawingManager._isOpen && drawingManager.getDrawingMode() === this.activeBtn) {
        drawingManager.close();
        this.activeBtn === "";
      } else {
        drawingManager.setDrawingMode(this.activeBtn);
        drawingManager.open();
      }

      /* 点 */
      if (this.activeBtn === "marker") {
        let markerNum = 0;
        this.map.addEventListener("click", e => {
          markerNum++;
          if (markerNum > 1) {
            return;
          }
          drawingManager.close();
          this.activeBtn === "";
        });
        drawingManager.addEventListener("overlaycomplete", e => {
          const marker = e.overlay;
          // 获取标注的经纬度坐标
          let point = marker.getPosition();
          // 创建地理编码服务实例
          const geocoder = new this.BMapGL.Geocoder();
          // 将经纬度坐标解析为地址信息
          geocoder.getLocation(point, result => {
            this.markerObj = {
              e,
              point: point,
              address: result
            };
            console.log(this.markerObj, "点");
          });
        });
      } else if (this.activeBtn === "polyline") {
        /* 折线 */
        drawingManager.addEventListener("overlaycomplete", e => {
          this.polylineObj = {
            e: e,
            pointsArr: e.overlay.points.map(p => p.latLng)
          };
          console.log(this.polylineObj, "折线");
        });
      } else if (this.activeBtn === "rectangle") {
        /* 矩形 */
        // 监听矩形绘制完成事件
        drawingManager.addEventListener("overlaycomplete", e => {
          this.rectangleObj = {
            e,
            pointsArr: e.overlay.getPath()
          };
          console.log(this.rectangleObj, "矩形");
        });
      } else if (this.activeBtn === "polygon") {
        /* 多边形 */
        drawingManager.addEventListener("overlaycomplete", e => {
          this.polygonObj = {
            e,
            pointsArr: e.overlay.getPath()
          };
          console.log(this.polygonObj, "多边形");
        });
      } else if (this.activeBtn === "circle") {
        /* 圆 */
        // 监听圆形绘制完成事件
        drawingManager.addEventListener("overlaycomplete", e => {
          const circle = e.overlay;
          this.circleObj = {
            e,
            center: circle.getCenter(),
            // 圆心
            radius: circle.getRadius() // 半径
          };
          console.log(this.circleObj, "圆");
        });
      }
    },
    /**
     * 清空所有图层和保存的数据
     * @author: mhf
     * @time: 2024-05-15 13:50:59
     **/
    clearLayers() {
      let overlaysArr = this.map.getOverlays();
      overlaysArr.forEach(layer => {
        this.map.removeOverlay(layer);
      });
      this.markerObj = {
        e: undefined,
        point: undefined,
        address: undefined
      }; // 点位
      this.polylineObj = {
        e: undefined,
        pointsArr: undefined
      }; // 折线
      this.rectangleObj = {
        e: undefined,
        pointsArr: undefined
      }; // 矩形
      this.polygonObj = {
        e: undefined,
        pointsArr: undefined
      }; //  多边形
      this.circleObj = {
        e: undefined,
        center: undefined,
        radius: undefined
      }; // 圆
    },
    showDialog(data) {
      this.title = data.title;
      this.dialogVisible = true;

      /* todo 回显的部分需优化 目前只考虑多边形一种情况 */
      this.polygonObj.pointsArr = data.data;
      /* todo 回显的部分需优化 目前只考虑多边形一种情况 */

      let that = this;
      this.$nextTick(() => {
        that.initMap();
      });
    },
    hideDialog() {
      this.activeBtn = "";
      this.map = null;
      this.dialogVisible = false;
    },
    async handleSubmit() {
      console.log("点击保存");
      let obj = this[`${this.activeBtn}Obj`]; // 不同类型对应的Obj属性名
      if (!obj.e) {
        this.$message({
          type: "error",
          message: "请先绘制图层再确定!"
        });
        return;
      }
      console.log(obj, "obj");
      this.$emit("on-response", obj);
      this.hideDialog();
    },
    /**
     * 回显数据
     * @param:
     * @return:
     * @author: mhf
     * @time: 2024-05-15 18:42:06
     **/
    echoData(data) {}
  },
  created() {},
  mounted() {}
});
;// CONCATENATED MODULE: ./components/bdLib/bdLib.vue?vue&type=script&lang=js
 /* harmony default export */ var bdLib_bdLibvue_type_script_lang_js = (bdLibvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/.pnpm/mini-css-extract-plugin@2.9.0_webpack@5.93.0/node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-22.use[0]!./node_modules/.pnpm/css-loader@6.11.0_webpack@5.93.0/node_modules/css-loader/dist/cjs.js??clonedRuleSet-22.use[1]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.pnpm/postcss-loader@6.2.1_zs77g4opexpjlazxpbaplvsl5m/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-22.use[2]!./node_modules/.pnpm/sass-loader@8.0.2_i4l4nmociu5xhprmi6hdovwxki/node_modules/sass-loader/dist/cjs.js??clonedRuleSet-22.use[3]!./node_modules/.pnpm/vue-loader@15.11.1_d3fwwjlxcdz26pihteszkgpun4/node_modules/vue-loader/lib/index.js??vue-loader-options!./components/bdLib/bdLib.vue?vue&type=style&index=0&id=3e3aac34&prod&lang=scss&scoped=true
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./components/bdLib/bdLib.vue?vue&type=style&index=0&id=3e3aac34&prod&lang=scss&scoped=true

;// CONCATENATED MODULE: ./components/bdLib/bdLib.vue



;


/* normalize component */

var bdLib_component = normalizeComponent(
  bdLib_bdLibvue_type_script_lang_js,
  bdLibvue_type_template_id_3e3aac34_scoped_true_render,
  bdLibvue_type_template_id_3e3aac34_scoped_true_staticRenderFns,
  false,
  null,
  "3e3aac34",
  null
  
)

/* harmony default export */ var bdLib = (bdLib_component.exports);
;// CONCATENATED MODULE: ./components/index.js





const components = [demo, mapComps, bdLib];
const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
/* harmony default export */ var components_0 = ({
  install,
  ...components
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/@vue+cli-service@5.0.8_vgqb3v6m2ynwvuzumqmye2vzna/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (components_0);


module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=bdgl-map-lib.common.js.map