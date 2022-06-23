function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $674181ad764611f6$exports = {};

$parcel$defineInteropFlag($674181ad764611f6$exports);

$parcel$export($674181ad764611f6$exports, "default", function () { return $674181ad764611f6$export$2e2bcd8739ae039; });
$parcel$export($674181ad764611f6$exports, "HilbertGalleryViewer", function () { return $674181ad764611f6$export$2e2bcd8739ae039; });
function $c48a0955cd50cee1$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) resolve(value);
    else Promise.resolve(value).then(_next, _throw);
}
function $c48a0955cd50cee1$export$2e2bcd8739ae039(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $c48a0955cd50cee1$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $c48a0955cd50cee1$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}

function $0605ccfdbc7c3e55$export$2e2bcd8739ae039(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

function $a68932d12b922dac$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $a68932d12b922dac$export$2e2bcd8739ae039(Constructor, protoProps, staticProps) {
    if (protoProps) $a68932d12b922dac$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $a68932d12b922dac$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}

function $a7795e403b3dc860$export$2e2bcd8739ae039() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}


function $60befe1986251ad9$var$getPrototypeOf(o1) {
    $60befe1986251ad9$var$getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $60befe1986251ad9$var$getPrototypeOf(o1);
}
function $60befe1986251ad9$export$2e2bcd8739ae039(o) {
    return $60befe1986251ad9$var$getPrototypeOf(o);
}


function $91995da9ed73bf8b$export$2e2bcd8739ae039(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}


function $deb0ff0690b5215d$export$2e2bcd8739ae039(obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}


function $e121a898b131f7c6$export$2e2bcd8739ae039(self, call) {
    if (call && ($deb0ff0690b5215d$export$2e2bcd8739ae039(call) === "object" || typeof call === "function")) return call;
    return $91995da9ed73bf8b$export$2e2bcd8739ae039(self);
}


function $e8bccef633e20608$export$2e2bcd8739ae039(Derived) {
    var hasNativeReflectConstruct = $a7795e403b3dc860$export$2e2bcd8739ae039();
    return function _createSuperInternal() {
        var Super = $60befe1986251ad9$export$2e2bcd8739ae039(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = $60befe1986251ad9$export$2e2bcd8739ae039(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return $e121a898b131f7c6$export$2e2bcd8739ae039(this, result);
    };
}

function $f8afd350de1754e4$export$2e2bcd8739ae039(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

function $fde66734400285c8$var$setPrototypeOf(o1, p1) {
    $fde66734400285c8$var$setPrototypeOf = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $fde66734400285c8$var$setPrototypeOf(o1, p1);
}
function $fde66734400285c8$export$2e2bcd8739ae039(o, p) {
    return $fde66734400285c8$var$setPrototypeOf(o, p);
}


function $effcad08cfe0ab79$export$2e2bcd8739ae039(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) $fde66734400285c8$export$2e2bcd8739ae039(subClass, superClass);
}


function $0abe412cc2c86356$export$2e2bcd8739ae039(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            $f8afd350de1754e4$export$2e2bcd8739ae039(target, key, source[key]);
        });
    }
    return target;
}

function $18afbf9c545b90a5$export$2e2bcd8739ae039(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}


function $7b5c96222288249a$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) return $18afbf9c545b90a5$export$2e2bcd8739ae039(arr);
}


function $75167622b08277cf$export$2e2bcd8739ae039(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}


function $bc9ae705e7fb8af8$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}



function $ae9f3824659edf33$export$2e2bcd8739ae039(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $18afbf9c545b90a5$export$2e2bcd8739ae039(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $18afbf9c545b90a5$export$2e2bcd8739ae039(o, minLen);
}


function $203802c08d5b4f03$export$2e2bcd8739ae039(arr) {
    return $7b5c96222288249a$export$2e2bcd8739ae039(arr) || $75167622b08277cf$export$2e2bcd8739ae039(arr) || $ae9f3824659edf33$export$2e2bcd8739ae039(arr) || $bc9ae705e7fb8af8$export$2e2bcd8739ae039();
}


function $ab457476a7bd5619$var$isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function $ab457476a7bd5619$var$construct(Parent1, args1, Class1) {
    if ($ab457476a7bd5619$var$isNativeReflectConstruct()) $ab457476a7bd5619$var$construct = Reflect.construct;
    else $ab457476a7bd5619$var$construct = function construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) $fde66734400285c8$export$2e2bcd8739ae039(instance, Class.prototype);
        return instance;
    };
    return $ab457476a7bd5619$var$construct.apply(null, arguments);
}
function $ab457476a7bd5619$export$2e2bcd8739ae039(Parent, args, Class) {
    return $ab457476a7bd5619$var$construct.apply(null, arguments);
}


function $b9d93dd6b3b7b436$export$2e2bcd8739ae039(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}




function $1d9fb59c767d6276$var$wrapNativeSuper(Class1) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    $1d9fb59c767d6276$var$wrapNativeSuper = function wrapNativeSuper(Class) {
        if (Class === null || !$b9d93dd6b3b7b436$export$2e2bcd8739ae039(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return $ab457476a7bd5619$export$2e2bcd8739ae039(Class, arguments, $60befe1986251ad9$export$2e2bcd8739ae039(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return $fde66734400285c8$export$2e2bcd8739ae039(Wrapper, Class);
    };
    return $1d9fb59c767d6276$var$wrapNativeSuper(Class1);
}
function $1d9fb59c767d6276$export$2e2bcd8739ae039(Class) {
    return $1d9fb59c767d6276$var$wrapNativeSuper(Class);
}



var $779af3c4556adc53$exports = {};
'use strict';
var $9d1be0844b9f5d10$exports = {};
var $d846167b6fbe0b24$exports = {};
var $2b0a282a34db700b$exports = {};
var $08a950495e611c20$exports = {};
var $8f05b05332b1117a$exports = {};
$8f05b05332b1117a$exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};


$08a950495e611c20$exports = !$8f05b05332b1117a$exports(function() {
    // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != 'function' || test.hasOwnProperty('prototype');
});


var $2b0a282a34db700b$var$FunctionPrototype = Function.prototype;
var $2b0a282a34db700b$var$bind = $2b0a282a34db700b$var$FunctionPrototype.bind;
var $2b0a282a34db700b$var$call = $2b0a282a34db700b$var$FunctionPrototype.call;
var $2b0a282a34db700b$var$uncurryThis = $08a950495e611c20$exports && $2b0a282a34db700b$var$bind.bind($2b0a282a34db700b$var$call, $2b0a282a34db700b$var$call);
$2b0a282a34db700b$exports = $08a950495e611c20$exports ? function(fn) {
    return fn && $2b0a282a34db700b$var$uncurryThis(fn);
} : function(fn) {
    return fn && function() {
        return $2b0a282a34db700b$var$call.apply(fn, arguments);
    };
};



var $027a1d5efee0622d$exports = {};

var $027a1d5efee0622d$var$toString = $2b0a282a34db700b$exports({}.toString);
var $027a1d5efee0622d$var$stringSlice = $2b0a282a34db700b$exports(''.slice);
$027a1d5efee0622d$exports = function(it) {
    return $027a1d5efee0622d$var$stringSlice($027a1d5efee0622d$var$toString(it), 8, -1);
};


var $d846167b6fbe0b24$var$$Object = Object;
var $d846167b6fbe0b24$var$split = $2b0a282a34db700b$exports(''.split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
$d846167b6fbe0b24$exports = $8f05b05332b1117a$exports(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$d846167b6fbe0b24$var$$Object('z').propertyIsEnumerable(0);
}) ? function(it) {
    return $027a1d5efee0622d$exports(it) == 'String' ? $d846167b6fbe0b24$var$split(it, '') : $d846167b6fbe0b24$var$$Object(it);
} : $d846167b6fbe0b24$var$$Object;


var $8a30942375981049$exports = {};
var $8a30942375981049$var$$TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
$8a30942375981049$exports = function(it) {
    if (it == undefined) throw $8a30942375981049$var$$TypeError("Can't call method on " + it);
    return it;
};


$9d1be0844b9f5d10$exports = function(it) {
    return $d846167b6fbe0b24$exports($8a30942375981049$exports(it));
};


var $70a8ce4d6b2eac9a$exports = {};
var $8342f2054ec8a712$exports = {};
var $d559f7f02fd8963f$exports = {};
var $d559f7f02fd8963f$var$check = function $d559f7f02fd8963f$var$check(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
$d559f7f02fd8963f$exports = // eslint-disable-next-line es-x/no-global-this -- safe
$d559f7f02fd8963f$var$check(typeof globalThis == 'object' && globalThis) || $d559f7f02fd8963f$var$check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
$d559f7f02fd8963f$var$check(typeof self == 'object' && self) || $d559f7f02fd8963f$var$check(typeof $parcel$global == 'object' && $parcel$global) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function('return this')();


var $13d106f7968f429a$exports = {};
var $522b1997a687d541$exports = {};
$522b1997a687d541$exports = false;


var $5c7bd3f7ded9cc5f$exports = {};

var $66ba556cee753a8d$exports = {};

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $66ba556cee753a8d$var$defineProperty = Object.defineProperty;
$66ba556cee753a8d$exports = function(key, value) {
    try {
        $66ba556cee753a8d$var$defineProperty($d559f7f02fd8963f$exports, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        $d559f7f02fd8963f$exports[key] = value;
    }
    return value;
};


var $5c7bd3f7ded9cc5f$var$SHARED = '__core-js_shared__';
var $5c7bd3f7ded9cc5f$var$store = $d559f7f02fd8963f$exports[$5c7bd3f7ded9cc5f$var$SHARED] || $66ba556cee753a8d$exports($5c7bd3f7ded9cc5f$var$SHARED, {});
$5c7bd3f7ded9cc5f$exports = $5c7bd3f7ded9cc5f$var$store;


($13d106f7968f429a$exports = function(key, value) {
    return $5c7bd3f7ded9cc5f$exports[key] || ($5c7bd3f7ded9cc5f$exports[key] = value !== undefined ? value : {});
})('versions', []).push({
    version: '3.23.2',
    mode: $522b1997a687d541$exports ? 'pure' : 'global',
    copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
    license: 'https://github.com/zloirock/core-js/blob/v3.23.2/LICENSE',
    source: 'https://github.com/zloirock/core-js'
});


var $7096ce415f0a9297$exports = {};

var $ad76e1fdc452637b$exports = {};

var $ad76e1fdc452637b$var$$Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
$ad76e1fdc452637b$exports = function(argument) {
    return $ad76e1fdc452637b$var$$Object($8a30942375981049$exports(argument));
};


var $7096ce415f0a9297$var$hasOwnProperty = $2b0a282a34db700b$exports({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
$7096ce415f0a9297$exports = Object.hasOwn || function hasOwn(it, key) {
    return $7096ce415f0a9297$var$hasOwnProperty($ad76e1fdc452637b$exports(it), key);
};


var $13ed510c1832184b$exports = {};

var $13ed510c1832184b$var$id = 0;
var $13ed510c1832184b$var$postfix = Math.random();
var $13ed510c1832184b$var$toString = $2b0a282a34db700b$exports(1.0.toString);
$13ed510c1832184b$exports = function(key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + $13ed510c1832184b$var$toString(++$13ed510c1832184b$var$id + $13ed510c1832184b$var$postfix, 36);
};


var $7a06a5de38b1cb65$exports = {};
var $89c5c4f52e5a92e0$exports = {};

var $a601abf8e68d9702$exports = {};
var $4c0a73a100c6cd02$exports = {};

var $ee014ce6443cdcf8$exports = {};
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
$ee014ce6443cdcf8$exports = function(argument) {
    return typeof argument == 'function';
};


var $4c0a73a100c6cd02$var$aFunction = function $4c0a73a100c6cd02$var$aFunction(argument) {
    return $ee014ce6443cdcf8$exports(argument) ? argument : undefined;
};
$4c0a73a100c6cd02$exports = function(namespace, method) {
    return arguments.length < 2 ? $4c0a73a100c6cd02$var$aFunction($d559f7f02fd8963f$exports[namespace]) : $d559f7f02fd8963f$exports[namespace] && $d559f7f02fd8963f$exports[namespace][method];
};


$a601abf8e68d9702$exports = $4c0a73a100c6cd02$exports('navigator', 'userAgent') || '';


var $89c5c4f52e5a92e0$var$process = $d559f7f02fd8963f$exports.process;
var $89c5c4f52e5a92e0$var$Deno = $d559f7f02fd8963f$exports.Deno;
var $89c5c4f52e5a92e0$var$versions = $89c5c4f52e5a92e0$var$process && $89c5c4f52e5a92e0$var$process.versions || $89c5c4f52e5a92e0$var$Deno && $89c5c4f52e5a92e0$var$Deno.version;
var $89c5c4f52e5a92e0$var$v8 = $89c5c4f52e5a92e0$var$versions && $89c5c4f52e5a92e0$var$versions.v8;
var $89c5c4f52e5a92e0$var$match, $89c5c4f52e5a92e0$var$version;
if ($89c5c4f52e5a92e0$var$v8) {
    $89c5c4f52e5a92e0$var$match = $89c5c4f52e5a92e0$var$v8.split('.');
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    $89c5c4f52e5a92e0$var$version = $89c5c4f52e5a92e0$var$match[0] > 0 && $89c5c4f52e5a92e0$var$match[0] < 4 ? 1 : +($89c5c4f52e5a92e0$var$match[0] + $89c5c4f52e5a92e0$var$match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!$89c5c4f52e5a92e0$var$version && $a601abf8e68d9702$exports) {
    $89c5c4f52e5a92e0$var$match = $a601abf8e68d9702$exports.match(/Edge\/(\d+)/);
    if (!$89c5c4f52e5a92e0$var$match || $89c5c4f52e5a92e0$var$match[1] >= 74) {
        $89c5c4f52e5a92e0$var$match = $a601abf8e68d9702$exports.match(/Chrome\/(\d+)/);
        if ($89c5c4f52e5a92e0$var$match) $89c5c4f52e5a92e0$var$version = +$89c5c4f52e5a92e0$var$match[1];
    }
}
$89c5c4f52e5a92e0$exports = $89c5c4f52e5a92e0$var$version;



// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
$7a06a5de38b1cb65$exports = !!Object.getOwnPropertySymbols && !$8f05b05332b1117a$exports(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && $89c5c4f52e5a92e0$exports && $89c5c4f52e5a92e0$exports < 41;
});


var $84fc446ad5718336$exports = {};


$84fc446ad5718336$exports = $7a06a5de38b1cb65$exports && !Symbol.sham && $deb0ff0690b5215d$export$2e2bcd8739ae039(Symbol.iterator) == 'symbol';


var $8342f2054ec8a712$var$WellKnownSymbolsStore = $13d106f7968f429a$exports('wks');
var $8342f2054ec8a712$var$Symbol = $d559f7f02fd8963f$exports.Symbol;
var $8342f2054ec8a712$var$symbolFor = $8342f2054ec8a712$var$Symbol && $8342f2054ec8a712$var$Symbol['for'];
var $8342f2054ec8a712$var$createWellKnownSymbol = $84fc446ad5718336$exports ? $8342f2054ec8a712$var$Symbol : $8342f2054ec8a712$var$Symbol && $8342f2054ec8a712$var$Symbol.withoutSetter || $13ed510c1832184b$exports;
$8342f2054ec8a712$exports = function(name) {
    if (!$7096ce415f0a9297$exports($8342f2054ec8a712$var$WellKnownSymbolsStore, name) || !($7a06a5de38b1cb65$exports || typeof $8342f2054ec8a712$var$WellKnownSymbolsStore[name] == 'string')) {
        var description = 'Symbol.' + name;
        if ($7a06a5de38b1cb65$exports && $7096ce415f0a9297$exports($8342f2054ec8a712$var$Symbol, name)) $8342f2054ec8a712$var$WellKnownSymbolsStore[name] = $8342f2054ec8a712$var$Symbol[name];
        else if ($84fc446ad5718336$exports && $8342f2054ec8a712$var$symbolFor) $8342f2054ec8a712$var$WellKnownSymbolsStore[name] = $8342f2054ec8a712$var$symbolFor(description);
        else $8342f2054ec8a712$var$WellKnownSymbolsStore[name] = $8342f2054ec8a712$var$createWellKnownSymbol(description);
    }
    return $8342f2054ec8a712$var$WellKnownSymbolsStore[name];
};


var $74ed9248ea31c140$exports = {};
var $c857ccf1c716bc86$exports = {};
var $459f8d93190eef3e$exports = {};

$459f8d93190eef3e$exports = function(it) {
    return typeof it == 'object' ? it !== null : $ee014ce6443cdcf8$exports(it);
};


var $c857ccf1c716bc86$var$$String = String;
var $c857ccf1c716bc86$var$$TypeError = TypeError;
// `Assert: Type(argument) is Object`
$c857ccf1c716bc86$exports = function(argument) {
    if ($459f8d93190eef3e$exports(argument)) return argument;
    throw $c857ccf1c716bc86$var$$TypeError($c857ccf1c716bc86$var$$String(argument) + ' is not an object');
};


// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
var $93642fc6b05d91fb$export$2d1720544b23b823;
var $382caa4254505392$exports = {};

// Detect IE8's incomplete defineProperty implementation
$382caa4254505392$exports = !$8f05b05332b1117a$exports(function() {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function get() {
            return 7;
        }
    })[1] != 7;
});


var $350b302125eea52b$exports = {};


// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
$350b302125eea52b$exports = $382caa4254505392$exports && $8f05b05332b1117a$exports(function() {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, 'prototype', {
        value: 42,
        writable: false
    }).prototype != 42;
});


// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
var $01ca6708483402eb$export$2d1720544b23b823;

var $d6d3df4784a6fe83$exports = {};


var $c113ccdb28af8131$exports = {};


var $c113ccdb28af8131$var$document = $d559f7f02fd8963f$exports.document;
// typeof document.createElement is 'object' in old IE
var $c113ccdb28af8131$var$EXISTS = $459f8d93190eef3e$exports($c113ccdb28af8131$var$document) && $459f8d93190eef3e$exports($c113ccdb28af8131$var$document.createElement);
$c113ccdb28af8131$exports = function(it) {
    return $c113ccdb28af8131$var$EXISTS ? $c113ccdb28af8131$var$document.createElement(it) : {};
};


// Thanks to IE8 for its funny defineProperty
$d6d3df4784a6fe83$exports = !$382caa4254505392$exports && !$8f05b05332b1117a$exports(function() {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty($c113ccdb28af8131$exports('div'), 'a', {
        get: function get() {
            return 7;
        }
    }).a != 7;
});




var $d93740f63f657394$exports = {};
var $900a87e9fa67ca12$exports = {};
var $5d66713b352b955a$exports = {};

var $5d66713b352b955a$var$call = Function.prototype.call;
$5d66713b352b955a$exports = $08a950495e611c20$exports ? $5d66713b352b955a$var$call.bind($5d66713b352b955a$var$call) : function() {
    return $5d66713b352b955a$var$call.apply($5d66713b352b955a$var$call, arguments);
};



var $506d77efa384ea3d$exports = {};



var $d384df56aad1f4c0$exports = {};

$d384df56aad1f4c0$exports = $2b0a282a34db700b$exports({}.isPrototypeOf);



var $506d77efa384ea3d$var$$Object = Object;
$506d77efa384ea3d$exports = $84fc446ad5718336$exports ? function(it) {
    return (typeof it === "undefined" ? "undefined" : $deb0ff0690b5215d$export$2e2bcd8739ae039(it)) == 'symbol';
} : function(it) {
    var $Symbol = $4c0a73a100c6cd02$exports('Symbol');
    return $ee014ce6443cdcf8$exports($Symbol) && $d384df56aad1f4c0$exports($Symbol.prototype, $506d77efa384ea3d$var$$Object(it));
};


var $2b08e8149b4b496d$exports = {};
var $745dc3aec62c58e4$exports = {};

var $3b13f3818143a2e3$exports = {};
var $3b13f3818143a2e3$var$$String = String;
$3b13f3818143a2e3$exports = function(argument) {
    try {
        return $3b13f3818143a2e3$var$$String(argument);
    } catch (error) {
        return 'Object';
    }
};


var $745dc3aec62c58e4$var$$TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
$745dc3aec62c58e4$exports = function(argument) {
    if ($ee014ce6443cdcf8$exports(argument)) return argument;
    throw $745dc3aec62c58e4$var$$TypeError($3b13f3818143a2e3$exports(argument) + ' is not a function');
};


// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
$2b08e8149b4b496d$exports = function(V, P) {
    var func = V[P];
    return func == null ? undefined : $745dc3aec62c58e4$exports(func);
};


var $6eb0e60019e843ca$exports = {};



var $6eb0e60019e843ca$var$$TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
$6eb0e60019e843ca$exports = function(input, pref) {
    var fn, val;
    if (pref === 'string' && $ee014ce6443cdcf8$exports(fn = input.toString) && !$459f8d93190eef3e$exports(val = $5d66713b352b955a$exports(fn, input))) return val;
    if ($ee014ce6443cdcf8$exports(fn = input.valueOf) && !$459f8d93190eef3e$exports(val = $5d66713b352b955a$exports(fn, input))) return val;
    if (pref !== 'string' && $ee014ce6443cdcf8$exports(fn = input.toString) && !$459f8d93190eef3e$exports(val = $5d66713b352b955a$exports(fn, input))) return val;
    throw $6eb0e60019e843ca$var$$TypeError("Can't convert object to primitive value");
};



var $900a87e9fa67ca12$var$$TypeError = TypeError;
var $900a87e9fa67ca12$var$TO_PRIMITIVE = $8342f2054ec8a712$exports('toPrimitive');
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
$900a87e9fa67ca12$exports = function(input, pref) {
    if (!$459f8d93190eef3e$exports(input) || $506d77efa384ea3d$exports(input)) return input;
    var exoticToPrim = $2b08e8149b4b496d$exports(input, $900a87e9fa67ca12$var$TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = 'default';
        result = $5d66713b352b955a$exports(exoticToPrim, input, pref);
        if (!$459f8d93190eef3e$exports(result) || $506d77efa384ea3d$exports(result)) return result;
        throw $900a87e9fa67ca12$var$$TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return $6eb0e60019e843ca$exports(input, pref);
};



// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
$d93740f63f657394$exports = function(argument) {
    var key = $900a87e9fa67ca12$exports(argument, 'string');
    return $506d77efa384ea3d$exports(key) ? key : key + '';
};


var $01ca6708483402eb$var$$TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $01ca6708483402eb$var$$defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $01ca6708483402eb$var$$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var $01ca6708483402eb$var$ENUMERABLE = 'enumerable';
var $01ca6708483402eb$var$CONFIGURABLE = 'configurable';
var $01ca6708483402eb$var$WRITABLE = 'writable';
$01ca6708483402eb$export$2d1720544b23b823 = $382caa4254505392$exports ? $350b302125eea52b$exports ? function defineProperty(O, P, Attributes) {
    $c857ccf1c716bc86$exports(O);
    P = $d93740f63f657394$exports(P);
    $c857ccf1c716bc86$exports(Attributes);
    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && $01ca6708483402eb$var$WRITABLE in Attributes && !Attributes[$01ca6708483402eb$var$WRITABLE]) {
        var current = $01ca6708483402eb$var$$getOwnPropertyDescriptor(O, P);
        if (current && current[$01ca6708483402eb$var$WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: $01ca6708483402eb$var$CONFIGURABLE in Attributes ? Attributes[$01ca6708483402eb$var$CONFIGURABLE] : current[$01ca6708483402eb$var$CONFIGURABLE],
                enumerable: $01ca6708483402eb$var$ENUMERABLE in Attributes ? Attributes[$01ca6708483402eb$var$ENUMERABLE] : current[$01ca6708483402eb$var$ENUMERABLE],
                writable: false
            };
        }
    }
    return $01ca6708483402eb$var$$defineProperty(O, P, Attributes);
} : $01ca6708483402eb$var$$defineProperty : function defineProperty(O, P, Attributes) {
    $c857ccf1c716bc86$exports(O);
    P = $d93740f63f657394$exports(P);
    $c857ccf1c716bc86$exports(Attributes);
    if ($d6d3df4784a6fe83$exports) try {
        return $01ca6708483402eb$var$$defineProperty(O, P, Attributes);
    } catch (error) {}
    if ('get' in Attributes || 'set' in Attributes) throw $01ca6708483402eb$var$$TypeError('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
};




var $ab4e311abcd00fb0$exports = {};
var $35d63ff0e8dd2701$exports = {};



var $b79d0c132e9f0aa8$exports = {};

var $68b0e4f311660f8c$exports = {};
var $b6ca2a462e819258$exports = {};
var $47ec41a611a36d63$exports = {};
var $47ec41a611a36d63$var$ceil = Math.ceil;
var $47ec41a611a36d63$var$floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
$47ec41a611a36d63$exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? $47ec41a611a36d63$var$floor : $47ec41a611a36d63$var$ceil)(n);
};


// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
$b6ca2a462e819258$exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : $47ec41a611a36d63$exports(number);
};


var $68b0e4f311660f8c$var$max = Math.max;
var $68b0e4f311660f8c$var$min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
$68b0e4f311660f8c$exports = function(index, length) {
    var integer = $b6ca2a462e819258$exports(index);
    return integer < 0 ? $68b0e4f311660f8c$var$max(integer + length, 0) : $68b0e4f311660f8c$var$min(integer, length);
};


var $9002a45dcaac2d51$exports = {};
var $e044e1dd6dba0268$exports = {};

var $e044e1dd6dba0268$var$min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
$e044e1dd6dba0268$exports = function(argument) {
    return argument > 0 ? $e044e1dd6dba0268$var$min($b6ca2a462e819258$exports(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
$9002a45dcaac2d51$exports = function(obj) {
    return $e044e1dd6dba0268$exports(obj.length);
};


// `Array.prototype.{ indexOf, includes }` methods implementation
var $b79d0c132e9f0aa8$var$createMethod = function $b79d0c132e9f0aa8$var$createMethod(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = $9d1be0844b9f5d10$exports($this);
        var length = $9002a45dcaac2d51$exports(O);
        var index = $68b0e4f311660f8c$exports(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare -- NaN check
        if (IS_INCLUDES && el != el) while(length > index){
            value = O[index++];
            // eslint-disable-next-line no-self-compare -- NaN check
            if (value != value) return true;
        // Array#indexOf ignores holes, Array#includes - not
        }
        else for(; length > index; index++){
            if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
        }
        return !IS_INCLUDES && -1;
    };
};
$b79d0c132e9f0aa8$exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: $b79d0c132e9f0aa8$var$createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: $b79d0c132e9f0aa8$var$createMethod(false)
};


var $35d63ff0e8dd2701$require$indexOf = $b79d0c132e9f0aa8$exports.indexOf;
var $da82589952d11bbf$exports = {};
$da82589952d11bbf$exports = {};


var $35d63ff0e8dd2701$var$push = $2b0a282a34db700b$exports([].push);
$35d63ff0e8dd2701$exports = function(object, names) {
    var O = $9d1be0844b9f5d10$exports(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!$7096ce415f0a9297$exports($da82589952d11bbf$exports, key) && $7096ce415f0a9297$exports(O, key) && $35d63ff0e8dd2701$var$push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if ($7096ce415f0a9297$exports(O, key = names[i++])) ~$35d63ff0e8dd2701$require$indexOf(result, key) || $35d63ff0e8dd2701$var$push(result, key);
    return result;
};


var $986bcd97ef86013d$exports = {};
// IE8- don't enum bug keys
$986bcd97ef86013d$exports = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
];


// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
$ab4e311abcd00fb0$exports = Object.keys || function keys(O) {
    return $35d63ff0e8dd2701$exports(O, $986bcd97ef86013d$exports);
};


$93642fc6b05d91fb$export$2d1720544b23b823 = $382caa4254505392$exports && !$350b302125eea52b$exports ? Object.defineProperties : function defineProperties(O, Properties) {
    $c857ccf1c716bc86$exports(O);
    var props = $9d1be0844b9f5d10$exports(Properties);
    var keys = $ab4e311abcd00fb0$exports(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while(length > index)$01ca6708483402eb$export$2d1720544b23b823(O, key = keys[index++], props[key]);
    return O;
};




var $b62317d42bfa3a43$exports = {};

$b62317d42bfa3a43$exports = $4c0a73a100c6cd02$exports('document', 'documentElement');



var $271708e2eef1128b$exports = {};


var $271708e2eef1128b$var$keys = $13d106f7968f429a$exports('keys');
$271708e2eef1128b$exports = function(key) {
    return $271708e2eef1128b$var$keys[key] || ($271708e2eef1128b$var$keys[key] = $13ed510c1832184b$exports(key));
};


var $74ed9248ea31c140$var$GT = '>';
var $74ed9248ea31c140$var$LT = '<';
var $74ed9248ea31c140$var$PROTOTYPE = 'prototype';
var $74ed9248ea31c140$var$SCRIPT = 'script';
var $74ed9248ea31c140$var$IE_PROTO = $271708e2eef1128b$exports('IE_PROTO');
var $74ed9248ea31c140$var$EmptyConstructor = function $74ed9248ea31c140$var$EmptyConstructor() {};
var $74ed9248ea31c140$var$scriptTag = function $74ed9248ea31c140$var$scriptTag(content) {
    return $74ed9248ea31c140$var$LT + $74ed9248ea31c140$var$SCRIPT + $74ed9248ea31c140$var$GT + content + $74ed9248ea31c140$var$LT + '/' + $74ed9248ea31c140$var$SCRIPT + $74ed9248ea31c140$var$GT;
};
// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var $74ed9248ea31c140$var$NullProtoObjectViaActiveX = function $74ed9248ea31c140$var$NullProtoObjectViaActiveX(activeXDocument) {
    activeXDocument.write($74ed9248ea31c140$var$scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
};
// Create object with fake `null` prototype: use iframe Object with cleared prototype
var $74ed9248ea31c140$var$NullProtoObjectViaIFrame = function $74ed9248ea31c140$var$NullProtoObjectViaIFrame() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = $c113ccdb28af8131$exports('iframe');
    var JS = 'java' + $74ed9248ea31c140$var$SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    $b62317d42bfa3a43$exports.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write($74ed9248ea31c140$var$scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
};
// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var $74ed9248ea31c140$var$activeXDocument;
var $74ed9248ea31c140$var$NullProtoObject = function() {
    try {
        $74ed9248ea31c140$var$activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) {}
    $74ed9248ea31c140$var$NullProtoObject = typeof document != 'undefined' ? document.domain && $74ed9248ea31c140$var$activeXDocument ? $74ed9248ea31c140$var$NullProtoObjectViaActiveX($74ed9248ea31c140$var$activeXDocument) // old IE
     : $74ed9248ea31c140$var$NullProtoObjectViaIFrame() : $74ed9248ea31c140$var$NullProtoObjectViaActiveX($74ed9248ea31c140$var$activeXDocument); // WSH
    var length = $986bcd97ef86013d$exports.length;
    while(length--)delete $74ed9248ea31c140$var$NullProtoObject[$74ed9248ea31c140$var$PROTOTYPE][$986bcd97ef86013d$exports[length]];
    return $74ed9248ea31c140$var$NullProtoObject();
};
$da82589952d11bbf$exports[$74ed9248ea31c140$var$IE_PROTO] = true;
// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
$74ed9248ea31c140$exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
        $74ed9248ea31c140$var$EmptyConstructor[$74ed9248ea31c140$var$PROTOTYPE] = $c857ccf1c716bc86$exports(O);
        result = new $74ed9248ea31c140$var$EmptyConstructor();
        $74ed9248ea31c140$var$EmptyConstructor[$74ed9248ea31c140$var$PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[$74ed9248ea31c140$var$IE_PROTO] = O;
    } else result = $74ed9248ea31c140$var$NullProtoObject();
    return Properties === undefined ? result : $93642fc6b05d91fb$export$2d1720544b23b823(result, Properties);
};



var $70a8ce4d6b2eac9a$require$defineProperty = $01ca6708483402eb$export$2d1720544b23b823;
var $70a8ce4d6b2eac9a$var$UNSCOPABLES = $8342f2054ec8a712$exports('unscopables');
var $70a8ce4d6b2eac9a$var$ArrayPrototype = Array.prototype;
// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if ($70a8ce4d6b2eac9a$var$ArrayPrototype[$70a8ce4d6b2eac9a$var$UNSCOPABLES] == undefined) $70a8ce4d6b2eac9a$require$defineProperty($70a8ce4d6b2eac9a$var$ArrayPrototype, $70a8ce4d6b2eac9a$var$UNSCOPABLES, {
    configurable: true,
    value: $74ed9248ea31c140$exports(null)
});
// add a key to Array.prototype[@@unscopables]
$70a8ce4d6b2eac9a$exports = function(key) {
    $70a8ce4d6b2eac9a$var$ArrayPrototype[$70a8ce4d6b2eac9a$var$UNSCOPABLES][key] = true;
};


var $b7d93248e010db38$exports = {};
$b7d93248e010db38$exports = {};


var $9b837eff291dea4b$exports = {};
var $9d72fb516562e815$exports = {};


var $4a6fe06efd5cc423$exports = {};



var $4a6fe06efd5cc423$var$functionToString = $2b0a282a34db700b$exports(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!$ee014ce6443cdcf8$exports($5c7bd3f7ded9cc5f$exports.inspectSource)) $5c7bd3f7ded9cc5f$exports.inspectSource = function(it) {
    return $4a6fe06efd5cc423$var$functionToString(it);
};
$4a6fe06efd5cc423$exports = $5c7bd3f7ded9cc5f$exports.inspectSource;


var $9d72fb516562e815$var$WeakMap = $d559f7f02fd8963f$exports.WeakMap;
$9d72fb516562e815$exports = $ee014ce6443cdcf8$exports($9d72fb516562e815$var$WeakMap) && /native code/.test($4a6fe06efd5cc423$exports($9d72fb516562e815$var$WeakMap));





var $079f3799c51a4d21$exports = {};


var $b652c4b8cc86e84d$exports = {};
$b652c4b8cc86e84d$exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};


$079f3799c51a4d21$exports = $382caa4254505392$exports ? function(object, key, value) {
    return $01ca6708483402eb$export$2d1720544b23b823(object, key, $b652c4b8cc86e84d$exports(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};






var $9b837eff291dea4b$var$OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var $9b837eff291dea4b$var$TypeError = $d559f7f02fd8963f$exports.TypeError;
var $9b837eff291dea4b$var$WeakMap = $d559f7f02fd8963f$exports.WeakMap;
var $9b837eff291dea4b$var$set, $9b837eff291dea4b$var$get, $9b837eff291dea4b$var$has;
var $9b837eff291dea4b$var$enforce = function $9b837eff291dea4b$var$enforce(it) {
    return $9b837eff291dea4b$var$has(it) ? $9b837eff291dea4b$var$get(it) : $9b837eff291dea4b$var$set(it, {});
};
var $9b837eff291dea4b$var$getterFor = function $9b837eff291dea4b$var$getterFor(TYPE) {
    return function(it) {
        var state;
        if (!$459f8d93190eef3e$exports(it) || (state = $9b837eff291dea4b$var$get(it)).type !== TYPE) throw $9b837eff291dea4b$var$TypeError('Incompatible receiver, ' + TYPE + ' required');
        return state;
    };
};
if ($9d72fb516562e815$exports || $5c7bd3f7ded9cc5f$exports.state) {
    var $9b837eff291dea4b$var$store = $5c7bd3f7ded9cc5f$exports.state || ($5c7bd3f7ded9cc5f$exports.state = new $9b837eff291dea4b$var$WeakMap());
    var $9b837eff291dea4b$var$wmget = $2b0a282a34db700b$exports($9b837eff291dea4b$var$store.get);
    var $9b837eff291dea4b$var$wmhas = $2b0a282a34db700b$exports($9b837eff291dea4b$var$store.has);
    var $9b837eff291dea4b$var$wmset = $2b0a282a34db700b$exports($9b837eff291dea4b$var$store.set);
    $9b837eff291dea4b$var$set = function $9b837eff291dea4b$var$set(it, metadata) {
        if ($9b837eff291dea4b$var$wmhas($9b837eff291dea4b$var$store, it)) throw new $9b837eff291dea4b$var$TypeError($9b837eff291dea4b$var$OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        $9b837eff291dea4b$var$wmset($9b837eff291dea4b$var$store, it, metadata);
        return metadata;
    };
    $9b837eff291dea4b$var$get = function $9b837eff291dea4b$var$get(it) {
        return $9b837eff291dea4b$var$wmget($9b837eff291dea4b$var$store, it) || {};
    };
    $9b837eff291dea4b$var$has = function $9b837eff291dea4b$var$has(it) {
        return $9b837eff291dea4b$var$wmhas($9b837eff291dea4b$var$store, it);
    };
} else {
    var $9b837eff291dea4b$var$STATE = $271708e2eef1128b$exports('state');
    $da82589952d11bbf$exports[$9b837eff291dea4b$var$STATE] = true;
    $9b837eff291dea4b$var$set = function $9b837eff291dea4b$var$set(it, metadata) {
        if ($7096ce415f0a9297$exports(it, $9b837eff291dea4b$var$STATE)) throw new $9b837eff291dea4b$var$TypeError($9b837eff291dea4b$var$OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        $079f3799c51a4d21$exports(it, $9b837eff291dea4b$var$STATE, metadata);
        return metadata;
    };
    $9b837eff291dea4b$var$get = function $9b837eff291dea4b$var$get(it) {
        return $7096ce415f0a9297$exports(it, $9b837eff291dea4b$var$STATE) ? it[$9b837eff291dea4b$var$STATE] : {};
    };
    $9b837eff291dea4b$var$has = function $9b837eff291dea4b$var$has(it) {
        return $7096ce415f0a9297$exports(it, $9b837eff291dea4b$var$STATE);
    };
}
$9b837eff291dea4b$exports = {
    set: $9b837eff291dea4b$var$set,
    get: $9b837eff291dea4b$var$get,
    has: $9b837eff291dea4b$var$has,
    enforce: $9b837eff291dea4b$var$enforce,
    getterFor: $9b837eff291dea4b$var$getterFor
};



var $779af3c4556adc53$require$defineProperty = $01ca6708483402eb$export$2d1720544b23b823;
var $54e173ab4b8228d8$exports = {};
'use strict';
var $24011036e32cf0cf$exports = {};


// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
var $7d04b0085779dfdc$export$2d1720544b23b823;


// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
var $94fb42db723357fe$export$2d1720544b23b823;
'use strict';
var $94fb42db723357fe$var$$propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $94fb42db723357fe$var$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var $94fb42db723357fe$var$NASHORN_BUG = $94fb42db723357fe$var$getOwnPropertyDescriptor && !$94fb42db723357fe$var$$propertyIsEnumerable.call({
    1: 2
}, 1);
$94fb42db723357fe$export$2d1720544b23b823 = $94fb42db723357fe$var$NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = $94fb42db723357fe$var$getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $94fb42db723357fe$var$$propertyIsEnumerable;







// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $7d04b0085779dfdc$var$$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
$7d04b0085779dfdc$export$2d1720544b23b823 = $382caa4254505392$exports ? $7d04b0085779dfdc$var$$getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = $9d1be0844b9f5d10$exports(O);
    P = $d93740f63f657394$exports(P);
    if ($d6d3df4784a6fe83$exports) try {
        return $7d04b0085779dfdc$var$$getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if ($7096ce415f0a9297$exports(O, P)) return $b652c4b8cc86e84d$exports(!$5d66713b352b955a$exports($94fb42db723357fe$export$2d1720544b23b823, O, P), O[P]);
};


var $24011036e32cf0cf$require$getOwnPropertyDescriptor = $7d04b0085779dfdc$export$2d1720544b23b823;

var $9a74f37bc9cc0327$exports = {};


var $51fa1a3b0de32099$exports = {};




var $2507e7fd6a2c7e49$exports = {};


var $2507e7fd6a2c7e49$var$FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $2507e7fd6a2c7e49$var$getDescriptor = $382caa4254505392$exports && Object.getOwnPropertyDescriptor;
var $2507e7fd6a2c7e49$var$EXISTS = $7096ce415f0a9297$exports($2507e7fd6a2c7e49$var$FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var $2507e7fd6a2c7e49$var$PROPER = $2507e7fd6a2c7e49$var$EXISTS && (function something() {}).name === 'something';
var $2507e7fd6a2c7e49$var$CONFIGURABLE = $2507e7fd6a2c7e49$var$EXISTS && (!$382caa4254505392$exports || $382caa4254505392$exports && $2507e7fd6a2c7e49$var$getDescriptor($2507e7fd6a2c7e49$var$FunctionPrototype, 'name').configurable);
$2507e7fd6a2c7e49$exports = {
    EXISTS: $2507e7fd6a2c7e49$var$EXISTS,
    PROPER: $2507e7fd6a2c7e49$var$PROPER,
    CONFIGURABLE: $2507e7fd6a2c7e49$var$CONFIGURABLE
};


var $51fa1a3b0de32099$require$CONFIGURABLE_FUNCTION_NAME = $2507e7fd6a2c7e49$exports.CONFIGURABLE;


var $51fa1a3b0de32099$var$enforceInternalState = $9b837eff291dea4b$exports.enforce;
var $51fa1a3b0de32099$var$getInternalState = $9b837eff291dea4b$exports.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $51fa1a3b0de32099$var$defineProperty = Object.defineProperty;
var $51fa1a3b0de32099$var$CONFIGURABLE_LENGTH = $382caa4254505392$exports && !$8f05b05332b1117a$exports(function() {
    return $51fa1a3b0de32099$var$defineProperty(function() {}, 'length', {
        value: 8
    }).length !== 8;
});
var $51fa1a3b0de32099$var$TEMPLATE = String(String).split('String');
var $51fa1a3b0de32099$var$makeBuiltIn = $51fa1a3b0de32099$exports = function $51fa1a3b0de32099$var$makeBuiltIn(value, name, options) {
    if (String(name).slice(0, 7) === 'Symbol(') name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
    if (options && options.getter) name = 'get ' + name;
    if (options && options.setter) name = 'set ' + name;
    if (!$7096ce415f0a9297$exports(value, 'name') || $51fa1a3b0de32099$require$CONFIGURABLE_FUNCTION_NAME && value.name !== name) $51fa1a3b0de32099$var$defineProperty(value, 'name', {
        value: name,
        configurable: true
    });
    if ($51fa1a3b0de32099$var$CONFIGURABLE_LENGTH && options && $7096ce415f0a9297$exports(options, 'arity') && value.length !== options.arity) $51fa1a3b0de32099$var$defineProperty(value, 'length', {
        value: options.arity
    });
    try {
        if (options && $7096ce415f0a9297$exports(options, 'constructor') && options.constructor) {
            if ($382caa4254505392$exports) $51fa1a3b0de32099$var$defineProperty(value, 'prototype', {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = $51fa1a3b0de32099$var$enforceInternalState(value);
    if (!$7096ce415f0a9297$exports(state, 'source')) state.source = $51fa1a3b0de32099$var$TEMPLATE.join(typeof name == 'string' ? name : '');
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = $51fa1a3b0de32099$var$makeBuiltIn(function toString() {
    return $ee014ce6443cdcf8$exports(this) && $51fa1a3b0de32099$var$getInternalState(this).source || $4a6fe06efd5cc423$exports(this);
}, 'toString');



$9a74f37bc9cc0327$exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if ($ee014ce6443cdcf8$exports(value)) $51fa1a3b0de32099$exports(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else $66ba556cee753a8d$exports(key, value);
    } else {
        if (!options.unsafe) delete O[key];
        else if (O[key]) simple = true;
        if (simple) O[key] = value;
        else $01ca6708483402eb$export$2d1720544b23b823(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};



var $359361ecfd028fde$exports = {};

var $714c9cc4d386c3e7$exports = {};


// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
var $7855f1a661d8de20$export$2d1720544b23b823;


var $7855f1a661d8de20$var$hiddenKeys = $986bcd97ef86013d$exports.concat('length', 'prototype');
$7855f1a661d8de20$export$2d1720544b23b823 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $35d63ff0e8dd2701$exports(O, $7855f1a661d8de20$var$hiddenKeys);
};


// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
var $905d4bfb90797c24$export$2d1720544b23b823;
$905d4bfb90797c24$export$2d1720544b23b823 = Object.getOwnPropertySymbols;



var $714c9cc4d386c3e7$var$concat = $2b0a282a34db700b$exports([].concat);
// all object keys, includes non-enumerable and symbols
$714c9cc4d386c3e7$exports = $4c0a73a100c6cd02$exports('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = $7855f1a661d8de20$export$2d1720544b23b823($c857ccf1c716bc86$exports(it));
    var getOwnPropertySymbols = $905d4bfb90797c24$export$2d1720544b23b823;
    return getOwnPropertySymbols ? $714c9cc4d386c3e7$var$concat(keys, getOwnPropertySymbols(it)) : keys;
};




$359361ecfd028fde$exports = function(target, source, exceptions) {
    var keys = $714c9cc4d386c3e7$exports(source);
    var defineProperty = $01ca6708483402eb$export$2d1720544b23b823;
    var getOwnPropertyDescriptor = $7d04b0085779dfdc$export$2d1720544b23b823;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!$7096ce415f0a9297$exports(target, key) && !(exceptions && $7096ce415f0a9297$exports(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};


var $f5d6930a80565e97$exports = {};


var $f5d6930a80565e97$var$replacement = /#|\.prototype\./;
var $f5d6930a80565e97$var$isForced = function $f5d6930a80565e97$var$isForced(feature, detection) {
    var value = $f5d6930a80565e97$var$data[$f5d6930a80565e97$var$normalize(feature)];
    return value == $f5d6930a80565e97$var$POLYFILL ? true : value == $f5d6930a80565e97$var$NATIVE ? false : $ee014ce6443cdcf8$exports(detection) ? $8f05b05332b1117a$exports(detection) : !!detection;
};
var $f5d6930a80565e97$var$normalize = $f5d6930a80565e97$var$isForced.normalize = function $f5d6930a80565e97$var$normalize(string) {
    return String(string).replace($f5d6930a80565e97$var$replacement, '.').toLowerCase();
};
var $f5d6930a80565e97$var$data = $f5d6930a80565e97$var$isForced.data = {};
var $f5d6930a80565e97$var$NATIVE = $f5d6930a80565e97$var$isForced.NATIVE = 'N';
var $f5d6930a80565e97$var$POLYFILL = $f5d6930a80565e97$var$isForced.POLYFILL = 'P';
$f5d6930a80565e97$exports = $f5d6930a80565e97$var$isForced;


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
*/ $24011036e32cf0cf$exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = $d559f7f02fd8963f$exports;
    else if (STATIC) target = $d559f7f02fd8963f$exports[TARGET] || $66ba556cee753a8d$exports(TARGET, {});
    else target = ($d559f7f02fd8963f$exports[TARGET] || {}).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = $24011036e32cf0cf$require$getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = $f5d6930a80565e97$exports(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if ((typeof sourceProperty === "undefined" ? "undefined" : $deb0ff0690b5215d$export$2e2bcd8739ae039(sourceProperty)) == (typeof targetProperty === "undefined" ? "undefined" : $deb0ff0690b5215d$export$2e2bcd8739ae039(targetProperty))) continue;
            $359361ecfd028fde$exports(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) $079f3799c51a4d21$exports(sourceProperty, 'sham', true);
        $9a74f37bc9cc0327$exports(target, key, sourceProperty, options);
    }
};






var $5ed38fdb3bbf10aa$exports = {};
'use strict';
var $20ed890be8c5d9bd$exports = {};
'use strict';



var $e889d53309322d01$exports = {};




var $266cc98e128fe745$exports = {};

$266cc98e128fe745$exports = !$8f05b05332b1117a$exports(function() {
    var F = function F() {};
    F.prototype.constructor = null;
    // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
});


var $e889d53309322d01$var$IE_PROTO = $271708e2eef1128b$exports('IE_PROTO');
var $e889d53309322d01$var$$Object = Object;
var $e889d53309322d01$var$ObjectPrototype = $e889d53309322d01$var$$Object.prototype;
// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es-x/no-object-getprototypeof -- safe
$e889d53309322d01$exports = $266cc98e128fe745$exports ? $e889d53309322d01$var$$Object.getPrototypeOf : function(O) {
    var object = $ad76e1fdc452637b$exports(O);
    if ($7096ce415f0a9297$exports(object, $e889d53309322d01$var$IE_PROTO)) return object[$e889d53309322d01$var$IE_PROTO];
    var constructor = object.constructor;
    if ($ee014ce6443cdcf8$exports(constructor) && object instanceof constructor) return constructor.prototype;
    return object instanceof $e889d53309322d01$var$$Object ? $e889d53309322d01$var$ObjectPrototype : null;
};





var $20ed890be8c5d9bd$var$ITERATOR = $8342f2054ec8a712$exports('iterator');
var $20ed890be8c5d9bd$var$BUGGY_SAFARI_ITERATORS = false;
// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var $20ed890be8c5d9bd$var$IteratorPrototype, $20ed890be8c5d9bd$var$PrototypeOfArrayIteratorPrototype, $20ed890be8c5d9bd$var$arrayIterator;
/* eslint-disable es-x/no-array-prototype-keys -- safe */ if ([].keys) {
    $20ed890be8c5d9bd$var$arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!('next' in $20ed890be8c5d9bd$var$arrayIterator)) $20ed890be8c5d9bd$var$BUGGY_SAFARI_ITERATORS = true;
    else {
        $20ed890be8c5d9bd$var$PrototypeOfArrayIteratorPrototype = $e889d53309322d01$exports($e889d53309322d01$exports($20ed890be8c5d9bd$var$arrayIterator));
        if ($20ed890be8c5d9bd$var$PrototypeOfArrayIteratorPrototype !== Object.prototype) $20ed890be8c5d9bd$var$IteratorPrototype = $20ed890be8c5d9bd$var$PrototypeOfArrayIteratorPrototype;
    }
}
var $20ed890be8c5d9bd$var$NEW_ITERATOR_PROTOTYPE = $20ed890be8c5d9bd$var$IteratorPrototype == undefined || $8f05b05332b1117a$exports(function() {
    var test = {};
    // FF44- legacy iterators case
    return $20ed890be8c5d9bd$var$IteratorPrototype[$20ed890be8c5d9bd$var$ITERATOR].call(test) !== test;
});
if ($20ed890be8c5d9bd$var$NEW_ITERATOR_PROTOTYPE) $20ed890be8c5d9bd$var$IteratorPrototype = {};
else if ($522b1997a687d541$exports) $20ed890be8c5d9bd$var$IteratorPrototype = $74ed9248ea31c140$exports($20ed890be8c5d9bd$var$IteratorPrototype);
// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!$ee014ce6443cdcf8$exports($20ed890be8c5d9bd$var$IteratorPrototype[$20ed890be8c5d9bd$var$ITERATOR])) $9a74f37bc9cc0327$exports($20ed890be8c5d9bd$var$IteratorPrototype, $20ed890be8c5d9bd$var$ITERATOR, function() {
    return this;
});
$20ed890be8c5d9bd$exports = {
    IteratorPrototype: $20ed890be8c5d9bd$var$IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: $20ed890be8c5d9bd$var$BUGGY_SAFARI_ITERATORS
};


var $5ed38fdb3bbf10aa$require$IteratorPrototype = $20ed890be8c5d9bd$exports.IteratorPrototype;


var $48c92574fb75c79c$exports = {};

var $48c92574fb75c79c$require$defineProperty = $01ca6708483402eb$export$2d1720544b23b823;


var $48c92574fb75c79c$var$TO_STRING_TAG = $8342f2054ec8a712$exports('toStringTag');
$48c92574fb75c79c$exports = function(target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !$7096ce415f0a9297$exports(target, $48c92574fb75c79c$var$TO_STRING_TAG)) $48c92574fb75c79c$require$defineProperty(target, $48c92574fb75c79c$var$TO_STRING_TAG, {
        configurable: true,
        value: TAG
    });
};



var $5ed38fdb3bbf10aa$var$returnThis = function $5ed38fdb3bbf10aa$var$returnThis() {
    return this;
};
$5ed38fdb3bbf10aa$exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = $74ed9248ea31c140$exports($5ed38fdb3bbf10aa$require$IteratorPrototype, {
        next: $b652c4b8cc86e84d$exports(+!ENUMERABLE_NEXT, next)
    });
    $48c92574fb75c79c$exports(IteratorConstructor, TO_STRING_TAG, false, true);
    $b7d93248e010db38$exports[TO_STRING_TAG] = $5ed38fdb3bbf10aa$var$returnThis;
    return IteratorConstructor;
};



var $499b9fc6e1099b52$exports = {};


var $2e65e006bb0d103f$exports = {};

var $2e65e006bb0d103f$var$$String = String;
var $2e65e006bb0d103f$var$$TypeError = TypeError;
$2e65e006bb0d103f$exports = function(argument) {
    if (typeof argument == 'object' || $ee014ce6443cdcf8$exports(argument)) return argument;
    throw $2e65e006bb0d103f$var$$TypeError("Can't set " + $2e65e006bb0d103f$var$$String(argument) + ' as a prototype');
};


// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
$499b9fc6e1099b52$exports = Object.setPrototypeOf || ('__proto__' in {} ? function() {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
        // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
        setter = $2b0a282a34db700b$exports(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
        setter(test, []);
        CORRECT_SETTER = test instanceof Array;
    } catch (error) {}
    return function setPrototypeOf(O, proto) {
        $c857ccf1c716bc86$exports(O);
        $2e65e006bb0d103f$exports(proto);
        if (CORRECT_SETTER) setter(O, proto);
        else O.__proto__ = proto;
        return O;
    };
}() : undefined);








var $54e173ab4b8228d8$var$PROPER_FUNCTION_NAME = $2507e7fd6a2c7e49$exports.PROPER;
var $54e173ab4b8228d8$var$CONFIGURABLE_FUNCTION_NAME = $2507e7fd6a2c7e49$exports.CONFIGURABLE;
var $54e173ab4b8228d8$var$IteratorPrototype = $20ed890be8c5d9bd$exports.IteratorPrototype;
var $54e173ab4b8228d8$var$BUGGY_SAFARI_ITERATORS = $20ed890be8c5d9bd$exports.BUGGY_SAFARI_ITERATORS;
var $54e173ab4b8228d8$var$ITERATOR = $8342f2054ec8a712$exports('iterator');
var $54e173ab4b8228d8$var$KEYS = 'keys';
var $54e173ab4b8228d8$var$VALUES = 'values';
var $54e173ab4b8228d8$var$ENTRIES = 'entries';
var $54e173ab4b8228d8$var$returnThis = function $54e173ab4b8228d8$var$returnThis() {
    return this;
};
$54e173ab4b8228d8$exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    $5ed38fdb3bbf10aa$exports(IteratorConstructor, NAME, next);
    var getIterationMethod = function getIterationMethod(KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!$54e173ab4b8228d8$var$BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
        switch(KIND){
            case $54e173ab4b8228d8$var$KEYS:
                return function keys() {
                    return new IteratorConstructor(this, KIND);
                };
            case $54e173ab4b8228d8$var$VALUES:
                return function values() {
                    return new IteratorConstructor(this, KIND);
                };
            case $54e173ab4b8228d8$var$ENTRIES:
                return function entries() {
                    return new IteratorConstructor(this, KIND);
                };
        }
        return function() {
            return new IteratorConstructor(this);
        };
    };
    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[$54e173ab4b8228d8$var$ITERATOR] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !$54e173ab4b8228d8$var$BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;
    // fix native
    if (anyNativeIterator) {
        CurrentIteratorPrototype = $e889d53309322d01$exports(anyNativeIterator.call(new Iterable()));
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!$522b1997a687d541$exports && $e889d53309322d01$exports(CurrentIteratorPrototype) !== $54e173ab4b8228d8$var$IteratorPrototype) {
                if ($499b9fc6e1099b52$exports) $499b9fc6e1099b52$exports(CurrentIteratorPrototype, $54e173ab4b8228d8$var$IteratorPrototype);
                else if (!$ee014ce6443cdcf8$exports(CurrentIteratorPrototype[$54e173ab4b8228d8$var$ITERATOR])) $9a74f37bc9cc0327$exports(CurrentIteratorPrototype, $54e173ab4b8228d8$var$ITERATOR, $54e173ab4b8228d8$var$returnThis);
            }
            // Set @@toStringTag to native iterators
            $48c92574fb75c79c$exports(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if ($522b1997a687d541$exports) $b7d93248e010db38$exports[TO_STRING_TAG] = $54e173ab4b8228d8$var$returnThis;
        }
    }
    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if ($54e173ab4b8228d8$var$PROPER_FUNCTION_NAME && DEFAULT == $54e173ab4b8228d8$var$VALUES && nativeIterator && nativeIterator.name !== $54e173ab4b8228d8$var$VALUES) {
        if (!$522b1997a687d541$exports && $54e173ab4b8228d8$var$CONFIGURABLE_FUNCTION_NAME) $079f3799c51a4d21$exports(IterablePrototype, 'name', $54e173ab4b8228d8$var$VALUES);
        else {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
                return $5d66713b352b955a$exports(nativeIterator, this);
            };
        }
    }
    // export additional methods
    if (DEFAULT) {
        methods = {
            values: getIterationMethod($54e173ab4b8228d8$var$VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod($54e173ab4b8228d8$var$KEYS),
            entries: getIterationMethod($54e173ab4b8228d8$var$ENTRIES)
        };
        if (FORCED) {
            for(KEY in methods)if ($54e173ab4b8228d8$var$BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) $9a74f37bc9cc0327$exports(IterablePrototype, KEY, methods[KEY]);
        } else $24011036e32cf0cf$exports({
            target: NAME,
            proto: true,
            forced: $54e173ab4b8228d8$var$BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
        }, methods);
    }
    // define iterator
    if ((!$522b1997a687d541$exports || FORCED) && IterablePrototype[$54e173ab4b8228d8$var$ITERATOR] !== defaultIterator) $9a74f37bc9cc0327$exports(IterablePrototype, $54e173ab4b8228d8$var$ITERATOR, defaultIterator, {
        name: DEFAULT
    });
    $b7d93248e010db38$exports[NAME] = defaultIterator;
    return methods;
};




var $779af3c4556adc53$var$ARRAY_ITERATOR = 'Array Iterator';
var $779af3c4556adc53$var$setInternalState = $9b837eff291dea4b$exports.set;
var $779af3c4556adc53$var$getInternalState = $9b837eff291dea4b$exports.getterFor($779af3c4556adc53$var$ARRAY_ITERATOR);
// `Array.prototype.entries` method
// https://tc39.es/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.es/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.es/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.es/ecma262/#sec-createarrayiterator
$779af3c4556adc53$exports = $54e173ab4b8228d8$exports(Array, 'Array', function(iterated, kind) {
    $779af3c4556adc53$var$setInternalState(this, {
        type: $779af3c4556adc53$var$ARRAY_ITERATOR,
        target: $9d1be0844b9f5d10$exports(iterated),
        index: 0,
        kind: kind // kind
    });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function() {
    var state = $779af3c4556adc53$var$getInternalState(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
        state.target = undefined;
        return {
            value: undefined,
            done: true
        };
    }
    if (kind == 'keys') return {
        value: index,
        done: false
    };
    if (kind == 'values') return {
        value: target[index],
        done: false
    };
    return {
        value: [
            index,
            target[index]
        ],
        done: false
    };
}, 'values');
// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var $779af3c4556adc53$var$values = $b7d93248e010db38$exports.Arguments = $b7d93248e010db38$exports.Array;
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
$70a8ce4d6b2eac9a$exports('keys');
$70a8ce4d6b2eac9a$exports('values');
$70a8ce4d6b2eac9a$exports('entries');
// V8 ~ Chrome 45- bug
if (!$522b1997a687d541$exports && $382caa4254505392$exports && $779af3c4556adc53$var$values.name !== 'values') try {
    $779af3c4556adc53$require$defineProperty($779af3c4556adc53$var$values, 'name', {
        value: 'values'
    });
} catch (error) {}


var $31f452221cf5d6e2$exports = {};

var $31f452221cf5d6e2$var$TO_STRING_TAG = $8342f2054ec8a712$exports('toStringTag');
var $31f452221cf5d6e2$var$test = {};
$31f452221cf5d6e2$var$test[$31f452221cf5d6e2$var$TO_STRING_TAG] = 'z';
$31f452221cf5d6e2$exports = String($31f452221cf5d6e2$var$test) === '[object z]';



var $32fc92d82c168f38$exports = {};
'use strict';

var $1e9bf5768cc1840f$exports = {};




var $1e9bf5768cc1840f$var$TO_STRING_TAG = $8342f2054ec8a712$exports('toStringTag');
var $1e9bf5768cc1840f$var$$Object = Object;
// ES3 wrong here
var $1e9bf5768cc1840f$var$CORRECT_ARGUMENTS = $027a1d5efee0622d$exports(function() {
    return arguments;
}()) == 'Arguments';
// fallback for IE11 Script Access Denied error
var $1e9bf5768cc1840f$var$tryGet = function $1e9bf5768cc1840f$var$tryGet(it, key) {
    try {
        return it[key];
    } catch (error) {}
};
// getting tag from ES6+ `Object.prototype.toString`
$1e9bf5768cc1840f$exports = $31f452221cf5d6e2$exports ? $027a1d5efee0622d$exports : function(it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null' : typeof (tag = $1e9bf5768cc1840f$var$tryGet(O = $1e9bf5768cc1840f$var$$Object(it), $1e9bf5768cc1840f$var$TO_STRING_TAG)) == 'string' ? tag : $1e9bf5768cc1840f$var$CORRECT_ARGUMENTS ? $027a1d5efee0622d$exports(O) : (result = $027a1d5efee0622d$exports(O)) == 'Object' && $ee014ce6443cdcf8$exports(O.callee) ? 'Arguments' : result;
};


// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
$32fc92d82c168f38$exports = $31f452221cf5d6e2$exports ? ({}).toString : function toString() {
    return '[object ' + $1e9bf5768cc1840f$exports(this) + ']';
};


// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!$31f452221cf5d6e2$exports) $9a74f37bc9cc0327$exports(Object.prototype, 'toString', $32fc92d82c168f38$exports, {
    unsafe: true
});


'use strict';


var $3675020bbfd7dbb8$exports = {};


$3675020bbfd7dbb8$exports = $027a1d5efee0622d$exports($d559f7f02fd8963f$exports.process) == 'process';







var $989a257785f3075d$exports = {};
'use strict';




var $989a257785f3075d$var$SPECIES = $8342f2054ec8a712$exports('species');
$989a257785f3075d$exports = function(CONSTRUCTOR_NAME) {
    var Constructor = $4c0a73a100c6cd02$exports(CONSTRUCTOR_NAME);
    var defineProperty = $01ca6708483402eb$export$2d1720544b23b823;
    if ($382caa4254505392$exports && Constructor && !Constructor[$989a257785f3075d$var$SPECIES]) defineProperty(Constructor, $989a257785f3075d$var$SPECIES, {
        configurable: true,
        get: function get() {
            return this;
        }
    });
};





var $b0864e7a277a061c$exports = {};

var $b0864e7a277a061c$var$$TypeError = TypeError;
$b0864e7a277a061c$exports = function(it, Prototype) {
    if ($d384df56aad1f4c0$exports(Prototype, it)) return it;
    throw $b0864e7a277a061c$var$$TypeError('Incorrect invocation');
};


var $bb5205bd4a8ec714$exports = {};

var $e2a2e88842d669a5$exports = {};
var $c0eb8792f0d419a8$exports = {};






var $c0eb8792f0d419a8$var$noop = function $c0eb8792f0d419a8$var$noop() {};
var $c0eb8792f0d419a8$var$empty = [];
var $c0eb8792f0d419a8$var$construct = $4c0a73a100c6cd02$exports('Reflect', 'construct');
var $c0eb8792f0d419a8$var$constructorRegExp = /^\s*(?:class|function)\b/;
var $c0eb8792f0d419a8$var$exec = $2b0a282a34db700b$exports($c0eb8792f0d419a8$var$constructorRegExp.exec);
var $c0eb8792f0d419a8$var$INCORRECT_TO_STRING = !$c0eb8792f0d419a8$var$constructorRegExp.exec($c0eb8792f0d419a8$var$noop);
var $c0eb8792f0d419a8$var$isConstructorModern = function isConstructor(argument) {
    if (!$ee014ce6443cdcf8$exports(argument)) return false;
    try {
        $c0eb8792f0d419a8$var$construct($c0eb8792f0d419a8$var$noop, $c0eb8792f0d419a8$var$empty, argument);
        return true;
    } catch (error) {
        return false;
    }
};
var $c0eb8792f0d419a8$var$isConstructorLegacy = function isConstructor(argument) {
    if (!$ee014ce6443cdcf8$exports(argument)) return false;
    switch($1e9bf5768cc1840f$exports(argument)){
        case 'AsyncFunction':
        case 'GeneratorFunction':
        case 'AsyncGeneratorFunction':
            return false;
    }
    try {
        // we can't check .prototype since constructors produced by .bind haven't it
        // `Function#toString` throws on some built-it function in some legacy engines
        // (for example, `DOMQuad` and similar in FF41-)
        return $c0eb8792f0d419a8$var$INCORRECT_TO_STRING || !!$c0eb8792f0d419a8$var$exec($c0eb8792f0d419a8$var$constructorRegExp, $4a6fe06efd5cc423$exports(argument));
    } catch (error) {
        return true;
    }
};
$c0eb8792f0d419a8$var$isConstructorLegacy.sham = true;
// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
$c0eb8792f0d419a8$exports = !$c0eb8792f0d419a8$var$construct || $8f05b05332b1117a$exports(function() {
    var called;
    return $c0eb8792f0d419a8$var$isConstructorModern($c0eb8792f0d419a8$var$isConstructorModern.call) || !$c0eb8792f0d419a8$var$isConstructorModern(Object) || !$c0eb8792f0d419a8$var$isConstructorModern(function() {
        called = true;
    }) || called;
}) ? $c0eb8792f0d419a8$var$isConstructorLegacy : $c0eb8792f0d419a8$var$isConstructorModern;



var $e2a2e88842d669a5$var$$TypeError = TypeError;
// `Assert: IsConstructor(argument) is true`
$e2a2e88842d669a5$exports = function(argument) {
    if ($c0eb8792f0d419a8$exports(argument)) return argument;
    throw $e2a2e88842d669a5$var$$TypeError($3b13f3818143a2e3$exports(argument) + ' is not a constructor');
};



var $bb5205bd4a8ec714$var$SPECIES = $8342f2054ec8a712$exports('species');
// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
$bb5205bd4a8ec714$exports = function(O, defaultConstructor) {
    var C = $c857ccf1c716bc86$exports(O).constructor;
    var S;
    return C === undefined || (S = $c857ccf1c716bc86$exports(C)[$bb5205bd4a8ec714$var$SPECIES]) == undefined ? defaultConstructor : $e2a2e88842d669a5$exports(S);
};


var $95cd8f85462e2c69$exports = {};

var $9473817ae86c209f$exports = {};

var $9473817ae86c209f$var$FunctionPrototype = Function.prototype;
var $9473817ae86c209f$var$apply = $9473817ae86c209f$var$FunctionPrototype.apply;
var $9473817ae86c209f$var$call = $9473817ae86c209f$var$FunctionPrototype.call;
// eslint-disable-next-line es-x/no-reflect -- safe
$9473817ae86c209f$exports = typeof Reflect == 'object' && Reflect.apply || ($08a950495e611c20$exports ? $9473817ae86c209f$var$call.bind($9473817ae86c209f$var$apply) : function() {
    return $9473817ae86c209f$var$call.apply($9473817ae86c209f$var$apply, arguments);
});


var $aae891644e092c86$exports = {};



var $aae891644e092c86$var$bind = $2b0a282a34db700b$exports($2b0a282a34db700b$exports.bind);
// optional / simple context binding
$aae891644e092c86$exports = function(fn, that) {
    $745dc3aec62c58e4$exports(fn);
    return that === undefined ? fn : $08a950495e611c20$exports ? $aae891644e092c86$var$bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};






var $3ec964f546f55196$exports = {};

$3ec964f546f55196$exports = $2b0a282a34db700b$exports([].slice);



var $afd6064eb3e51665$exports = {};
var $afd6064eb3e51665$var$$TypeError = TypeError;
$afd6064eb3e51665$exports = function(passed, required) {
    if (passed < required) throw $afd6064eb3e51665$var$$TypeError('Not enough arguments');
    return passed;
};


var $dcdd73517a48cfe7$exports = {};

$dcdd73517a48cfe7$exports = /(?:ipad|iphone|ipod).*applewebkit/i.test($a601abf8e68d9702$exports);



var $95cd8f85462e2c69$var$set = $d559f7f02fd8963f$exports.setImmediate;
var $95cd8f85462e2c69$var$clear = $d559f7f02fd8963f$exports.clearImmediate;
var $95cd8f85462e2c69$var$process = $d559f7f02fd8963f$exports.process;
var $95cd8f85462e2c69$var$Dispatch = $d559f7f02fd8963f$exports.Dispatch;
var $95cd8f85462e2c69$var$Function = $d559f7f02fd8963f$exports.Function;
var $95cd8f85462e2c69$var$MessageChannel = $d559f7f02fd8963f$exports.MessageChannel;
var $95cd8f85462e2c69$var$String = $d559f7f02fd8963f$exports.String;
var $95cd8f85462e2c69$var$counter = 0;
var $95cd8f85462e2c69$var$queue = {};
var $95cd8f85462e2c69$var$ONREADYSTATECHANGE = 'onreadystatechange';
var $95cd8f85462e2c69$var$location, $95cd8f85462e2c69$var$defer, $95cd8f85462e2c69$var$channel, $95cd8f85462e2c69$var$port;
try {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $95cd8f85462e2c69$var$location = $d559f7f02fd8963f$exports.location;
} catch (error) {}
var $95cd8f85462e2c69$var$run = function $95cd8f85462e2c69$var$run(id) {
    if ($7096ce415f0a9297$exports($95cd8f85462e2c69$var$queue, id)) {
        var fn = $95cd8f85462e2c69$var$queue[id];
        delete $95cd8f85462e2c69$var$queue[id];
        fn();
    }
};
var $95cd8f85462e2c69$var$runner = function $95cd8f85462e2c69$var$runner(id) {
    return function() {
        $95cd8f85462e2c69$var$run(id);
    };
};
var $95cd8f85462e2c69$var$listener = function $95cd8f85462e2c69$var$listener(event) {
    $95cd8f85462e2c69$var$run(event.data);
};
var $95cd8f85462e2c69$var$post = function $95cd8f85462e2c69$var$post(id) {
    // old engines have not location.origin
    $d559f7f02fd8963f$exports.postMessage($95cd8f85462e2c69$var$String(id), $95cd8f85462e2c69$var$location.protocol + '//' + $95cd8f85462e2c69$var$location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!$95cd8f85462e2c69$var$set || !$95cd8f85462e2c69$var$clear) {
    $95cd8f85462e2c69$var$set = function setImmediate(handler) {
        $afd6064eb3e51665$exports(arguments.length, 1);
        var fn = $ee014ce6443cdcf8$exports(handler) ? handler : $95cd8f85462e2c69$var$Function(handler);
        var args = $3ec964f546f55196$exports(arguments, 1);
        $95cd8f85462e2c69$var$queue[++$95cd8f85462e2c69$var$counter] = function() {
            $9473817ae86c209f$exports(fn, undefined, args);
        };
        $95cd8f85462e2c69$var$defer($95cd8f85462e2c69$var$counter);
        return $95cd8f85462e2c69$var$counter;
    };
    $95cd8f85462e2c69$var$clear = function clearImmediate(id) {
        delete $95cd8f85462e2c69$var$queue[id];
    };
    // Node.js 0.8-
    if ($3675020bbfd7dbb8$exports) $95cd8f85462e2c69$var$defer = function $95cd8f85462e2c69$var$defer(id) {
        $95cd8f85462e2c69$var$process.nextTick($95cd8f85462e2c69$var$runner(id));
    };
    else if ($95cd8f85462e2c69$var$Dispatch && $95cd8f85462e2c69$var$Dispatch.now) $95cd8f85462e2c69$var$defer = function $95cd8f85462e2c69$var$defer(id) {
        $95cd8f85462e2c69$var$Dispatch.now($95cd8f85462e2c69$var$runner(id));
    };
    else if ($95cd8f85462e2c69$var$MessageChannel && !$dcdd73517a48cfe7$exports) {
        $95cd8f85462e2c69$var$channel = new $95cd8f85462e2c69$var$MessageChannel();
        $95cd8f85462e2c69$var$port = $95cd8f85462e2c69$var$channel.port2;
        $95cd8f85462e2c69$var$channel.port1.onmessage = $95cd8f85462e2c69$var$listener;
        $95cd8f85462e2c69$var$defer = $aae891644e092c86$exports($95cd8f85462e2c69$var$port.postMessage, $95cd8f85462e2c69$var$port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if ($d559f7f02fd8963f$exports.addEventListener && $ee014ce6443cdcf8$exports($d559f7f02fd8963f$exports.postMessage) && !$d559f7f02fd8963f$exports.importScripts && $95cd8f85462e2c69$var$location && $95cd8f85462e2c69$var$location.protocol !== 'file:' && !$8f05b05332b1117a$exports($95cd8f85462e2c69$var$post)) {
        $95cd8f85462e2c69$var$defer = $95cd8f85462e2c69$var$post;
        $d559f7f02fd8963f$exports.addEventListener('message', $95cd8f85462e2c69$var$listener, false);
    // IE8-
    } else if ($95cd8f85462e2c69$var$ONREADYSTATECHANGE in $c113ccdb28af8131$exports('script')) $95cd8f85462e2c69$var$defer = function $95cd8f85462e2c69$var$defer(id) {
        $b62317d42bfa3a43$exports.appendChild($c113ccdb28af8131$exports('script'))[$95cd8f85462e2c69$var$ONREADYSTATECHANGE] = function() {
            $b62317d42bfa3a43$exports.removeChild(this);
            $95cd8f85462e2c69$var$run(id);
        };
    };
    else $95cd8f85462e2c69$var$defer = function $95cd8f85462e2c69$var$defer(id) {
        setTimeout($95cd8f85462e2c69$var$runner(id), 0);
    };
}
$95cd8f85462e2c69$exports = {
    set: $95cd8f85462e2c69$var$set,
    clear: $95cd8f85462e2c69$var$clear
};


var $352d15b9841a088c$require$task = $95cd8f85462e2c69$exports.set;
var $6acb23d5f8b2c607$exports = {};



var $6acb23d5f8b2c607$require$getOwnPropertyDescriptor = $7d04b0085779dfdc$export$2d1720544b23b823;

var $6acb23d5f8b2c607$require$macrotask = $95cd8f85462e2c69$exports.set;

var $489f0325613883af$exports = {};


$489f0325613883af$exports = /ipad|iphone|ipod/i.test($a601abf8e68d9702$exports) && $d559f7f02fd8963f$exports.Pebble !== undefined;


var $364e57a7bdc95b0d$exports = {};

$364e57a7bdc95b0d$exports = /web0s(?!.*chrome)/i.test($a601abf8e68d9702$exports);



var $6acb23d5f8b2c607$var$MutationObserver = $d559f7f02fd8963f$exports.MutationObserver || $d559f7f02fd8963f$exports.WebKitMutationObserver;
var $6acb23d5f8b2c607$var$document = $d559f7f02fd8963f$exports.document;
var $6acb23d5f8b2c607$var$process = $d559f7f02fd8963f$exports.process;
var $6acb23d5f8b2c607$var$Promise = $d559f7f02fd8963f$exports.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var $6acb23d5f8b2c607$var$queueMicrotaskDescriptor = $6acb23d5f8b2c607$require$getOwnPropertyDescriptor($d559f7f02fd8963f$exports, 'queueMicrotask');
var $6acb23d5f8b2c607$var$queueMicrotask = $6acb23d5f8b2c607$var$queueMicrotaskDescriptor && $6acb23d5f8b2c607$var$queueMicrotaskDescriptor.value;
var $6acb23d5f8b2c607$var$flush, $6acb23d5f8b2c607$var$head, $6acb23d5f8b2c607$var$last, $6acb23d5f8b2c607$var$notify, $6acb23d5f8b2c607$var$toggle, $6acb23d5f8b2c607$var$node, $6acb23d5f8b2c607$var$promise, $6acb23d5f8b2c607$var$then;
// modern engines have queueMicrotask method
if (!$6acb23d5f8b2c607$var$queueMicrotask) {
    $6acb23d5f8b2c607$var$flush = function $6acb23d5f8b2c607$var$flush() {
        var parent, fn;
        if ($3675020bbfd7dbb8$exports && (parent = $6acb23d5f8b2c607$var$process.domain)) parent.exit();
        while($6acb23d5f8b2c607$var$head){
            fn = $6acb23d5f8b2c607$var$head.fn;
            $6acb23d5f8b2c607$var$head = $6acb23d5f8b2c607$var$head.next;
            try {
                fn();
            } catch (error) {
                if ($6acb23d5f8b2c607$var$head) $6acb23d5f8b2c607$var$notify();
                else $6acb23d5f8b2c607$var$last = undefined;
                throw error;
            }
        }
        $6acb23d5f8b2c607$var$last = undefined;
        if (parent) parent.enter();
    };
    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (!$dcdd73517a48cfe7$exports && !$3675020bbfd7dbb8$exports && !$364e57a7bdc95b0d$exports && $6acb23d5f8b2c607$var$MutationObserver && $6acb23d5f8b2c607$var$document) {
        $6acb23d5f8b2c607$var$toggle = true;
        $6acb23d5f8b2c607$var$node = $6acb23d5f8b2c607$var$document.createTextNode('');
        new $6acb23d5f8b2c607$var$MutationObserver($6acb23d5f8b2c607$var$flush).observe($6acb23d5f8b2c607$var$node, {
            characterData: true
        });
        $6acb23d5f8b2c607$var$notify = function $6acb23d5f8b2c607$var$notify() {
            $6acb23d5f8b2c607$var$node.data = $6acb23d5f8b2c607$var$toggle = !$6acb23d5f8b2c607$var$toggle;
        };
    // environments with maybe non-completely correct, but existent Promise
    } else if (!$489f0325613883af$exports && $6acb23d5f8b2c607$var$Promise && $6acb23d5f8b2c607$var$Promise.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        $6acb23d5f8b2c607$var$promise = $6acb23d5f8b2c607$var$Promise.resolve(undefined);
        // workaround of WebKit ~ iOS Safari 10.1 bug
        $6acb23d5f8b2c607$var$promise.constructor = $6acb23d5f8b2c607$var$Promise;
        $6acb23d5f8b2c607$var$then = $aae891644e092c86$exports($6acb23d5f8b2c607$var$promise.then, $6acb23d5f8b2c607$var$promise);
        $6acb23d5f8b2c607$var$notify = function $6acb23d5f8b2c607$var$notify() {
            $6acb23d5f8b2c607$var$then($6acb23d5f8b2c607$var$flush);
        };
    // Node.js without promises
    } else if ($3675020bbfd7dbb8$exports) $6acb23d5f8b2c607$var$notify = function $6acb23d5f8b2c607$var$notify() {
        $6acb23d5f8b2c607$var$process.nextTick($6acb23d5f8b2c607$var$flush);
    };
    else {
        // strange IE + webpack dev server bug - use .bind(global)
        $6acb23d5f8b2c607$require$macrotask = $aae891644e092c86$exports($6acb23d5f8b2c607$require$macrotask, $d559f7f02fd8963f$exports);
        $6acb23d5f8b2c607$var$notify = function $6acb23d5f8b2c607$var$notify() {
            $6acb23d5f8b2c607$require$macrotask($6acb23d5f8b2c607$var$flush);
        };
    }
}
$6acb23d5f8b2c607$exports = $6acb23d5f8b2c607$var$queueMicrotask || function(fn) {
    var task = {
        fn: fn,
        next: undefined
    };
    if ($6acb23d5f8b2c607$var$last) $6acb23d5f8b2c607$var$last.next = task;
    if (!$6acb23d5f8b2c607$var$head) {
        $6acb23d5f8b2c607$var$head = task;
        $6acb23d5f8b2c607$var$notify();
    }
    $6acb23d5f8b2c607$var$last = task;
};


var $37b1b9fd944e8079$exports = {};

$37b1b9fd944e8079$exports = function(a, b) {
    var console = $d559f7f02fd8963f$exports.console;
    if (console && console.error) arguments.length == 1 ? console.error(a) : console.error(a, b);
};


var $aa23d3a1c1c30bd2$exports = {};
$aa23d3a1c1c30bd2$exports = function(exec) {
    try {
        return {
            error: false,
            value: exec()
        };
    } catch (error) {
        return {
            error: true,
            value: error
        };
    }
};


var $ada3c605da70e543$exports = {};
var $ada3c605da70e543$var$Queue = function $ada3c605da70e543$var$Queue() {
    this.head = null;
    this.tail = null;
};
$ada3c605da70e543$var$Queue.prototype = {
    add: function add(item) {
        var entry = {
            item: item,
            next: null
        };
        if (this.head) this.tail.next = entry;
        else this.head = entry;
        this.tail = entry;
    },
    get: function get() {
        var entry = this.head;
        if (entry) {
            this.head = entry.next;
            if (this.tail === entry) this.tail = null;
            return entry.item;
        }
    }
};
$ada3c605da70e543$exports = $ada3c605da70e543$var$Queue;



var $43e586947d8484e3$exports = {};

$43e586947d8484e3$exports = $d559f7f02fd8963f$exports.Promise;


var $21c9d360f095e13c$exports = {};






var $c33583b31d488552$exports = {};
$c33583b31d488552$exports = typeof window == 'object' && typeof Deno != 'object';




var $21c9d360f095e13c$var$NativePromisePrototype = $43e586947d8484e3$exports && $43e586947d8484e3$exports.prototype;
var $21c9d360f095e13c$var$SPECIES = $8342f2054ec8a712$exports('species');
var $21c9d360f095e13c$var$SUBCLASSING = false;
var $21c9d360f095e13c$var$NATIVE_PROMISE_REJECTION_EVENT = $ee014ce6443cdcf8$exports($d559f7f02fd8963f$exports.PromiseRejectionEvent);
var $21c9d360f095e13c$var$FORCED_PROMISE_CONSTRUCTOR = $f5d6930a80565e97$exports('Promise', function() {
    var PROMISE_CONSTRUCTOR_SOURCE = $4a6fe06efd5cc423$exports($43e586947d8484e3$exports);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String($43e586947d8484e3$exports);
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (!GLOBAL_CORE_JS_PROMISE && $89c5c4f52e5a92e0$exports === 66) return true;
    // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
    if ($522b1997a687d541$exports && !($21c9d360f095e13c$var$NativePromisePrototype['catch'] && $21c9d360f095e13c$var$NativePromisePrototype['finally'])) return true;
    // We can't use @@species feature detection in V8 since it causes
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if ($89c5c4f52e5a92e0$exports >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
    // Detect correctness of subclassing with @@species support
    var promise = new $43e586947d8484e3$exports(function(resolve) {
        resolve(1);
    });
    var FakePromise = function FakePromise(exec) {
        exec(function() {}, function() {});
    };
    var constructor = promise.constructor = {};
    constructor[$21c9d360f095e13c$var$SPECIES] = FakePromise;
    $21c9d360f095e13c$var$SUBCLASSING = promise.then(function() {}) instanceof FakePromise;
    if (!$21c9d360f095e13c$var$SUBCLASSING) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return !GLOBAL_CORE_JS_PROMISE && $c33583b31d488552$exports && !$21c9d360f095e13c$var$NATIVE_PROMISE_REJECTION_EVENT;
});
$21c9d360f095e13c$exports = {
    CONSTRUCTOR: $21c9d360f095e13c$var$FORCED_PROMISE_CONSTRUCTOR,
    REJECTION_EVENT: $21c9d360f095e13c$var$NATIVE_PROMISE_REJECTION_EVENT,
    SUBCLASSING: $21c9d360f095e13c$var$SUBCLASSING
};


// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
var $207e2e0d086cf3a8$export$2d1720544b23b823;
'use strict';

var $207e2e0d086cf3a8$var$PromiseCapability = function $207e2e0d086cf3a8$var$PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
        resolve = $$resolve;
        reject = $$reject;
    });
    this.resolve = $745dc3aec62c58e4$exports(resolve);
    this.reject = $745dc3aec62c58e4$exports(reject);
};
$207e2e0d086cf3a8$export$2d1720544b23b823 = function(C) {
    return new $207e2e0d086cf3a8$var$PromiseCapability(C);
};


var $352d15b9841a088c$var$PROMISE = 'Promise';
var $352d15b9841a088c$var$FORCED_PROMISE_CONSTRUCTOR = $21c9d360f095e13c$exports.CONSTRUCTOR;
var $352d15b9841a088c$var$NATIVE_PROMISE_REJECTION_EVENT = $21c9d360f095e13c$exports.REJECTION_EVENT;
var $352d15b9841a088c$var$NATIVE_PROMISE_SUBCLASSING = $21c9d360f095e13c$exports.SUBCLASSING;
var $352d15b9841a088c$var$getInternalPromiseState = $9b837eff291dea4b$exports.getterFor($352d15b9841a088c$var$PROMISE);
var $352d15b9841a088c$var$setInternalState = $9b837eff291dea4b$exports.set;
var $352d15b9841a088c$var$NativePromisePrototype = $43e586947d8484e3$exports && $43e586947d8484e3$exports.prototype;
var $352d15b9841a088c$var$PromiseConstructor = $43e586947d8484e3$exports;
var $352d15b9841a088c$var$PromisePrototype = $352d15b9841a088c$var$NativePromisePrototype;
var $352d15b9841a088c$var$TypeError = $d559f7f02fd8963f$exports.TypeError;
var $352d15b9841a088c$var$document = $d559f7f02fd8963f$exports.document;
var $352d15b9841a088c$var$process = $d559f7f02fd8963f$exports.process;
var $352d15b9841a088c$var$newPromiseCapability = $207e2e0d086cf3a8$export$2d1720544b23b823;
var $352d15b9841a088c$var$newGenericPromiseCapability = $352d15b9841a088c$var$newPromiseCapability;
var $352d15b9841a088c$var$DISPATCH_EVENT = !!($352d15b9841a088c$var$document && $352d15b9841a088c$var$document.createEvent && $d559f7f02fd8963f$exports.dispatchEvent);
var $352d15b9841a088c$var$UNHANDLED_REJECTION = 'unhandledrejection';
var $352d15b9841a088c$var$REJECTION_HANDLED = 'rejectionhandled';
var $352d15b9841a088c$var$PENDING = 0;
var $352d15b9841a088c$var$FULFILLED = 1;
var $352d15b9841a088c$var$REJECTED = 2;
var $352d15b9841a088c$var$HANDLED = 1;
var $352d15b9841a088c$var$UNHANDLED = 2;
var $352d15b9841a088c$var$Internal, $352d15b9841a088c$var$OwnPromiseCapability, $352d15b9841a088c$var$PromiseWrapper, $352d15b9841a088c$var$nativeThen;
// helpers
var $352d15b9841a088c$var$isThenable = function $352d15b9841a088c$var$isThenable(it) {
    var then;
    return $459f8d93190eef3e$exports(it) && $ee014ce6443cdcf8$exports(then = it.then) ? then : false;
};
var $352d15b9841a088c$var$callReaction = function $352d15b9841a088c$var$callReaction(reaction, state) {
    var value = state.value;
    var ok = state.state == $352d15b9841a088c$var$FULFILLED;
    var handler = ok ? reaction.ok : reaction.fail;
    var resolve = reaction.resolve;
    var reject = reaction.reject;
    var domain = reaction.domain;
    var result, then, exited;
    try {
        if (handler) {
            if (!ok) {
                if (state.rejection === $352d15b9841a088c$var$UNHANDLED) $352d15b9841a088c$var$onHandleUnhandled(state);
                state.rejection = $352d15b9841a088c$var$HANDLED;
            }
            if (handler === true) result = value;
            else {
                if (domain) domain.enter();
                result = handler(value); // can throw
                if (domain) {
                    domain.exit();
                    exited = true;
                }
            }
            if (result === reaction.promise) reject($352d15b9841a088c$var$TypeError('Promise-chain cycle'));
            else if (then = $352d15b9841a088c$var$isThenable(result)) $5d66713b352b955a$exports(then, result, resolve, reject);
            else resolve(result);
        } else reject(value);
    } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
    }
};
var $352d15b9841a088c$var$notify = function $352d15b9841a088c$var$notify(state, isReject) {
    if (state.notified) return;
    state.notified = true;
    $6acb23d5f8b2c607$exports(function() {
        var reactions = state.reactions;
        var reaction;
        while(reaction = reactions.get())$352d15b9841a088c$var$callReaction(reaction, state);
        state.notified = false;
        if (isReject && !state.rejection) $352d15b9841a088c$var$onUnhandled(state);
    });
};
var $352d15b9841a088c$var$dispatchEvent = function $352d15b9841a088c$var$dispatchEvent(name, promise, reason) {
    var event, handler;
    if ($352d15b9841a088c$var$DISPATCH_EVENT) {
        event = $352d15b9841a088c$var$document.createEvent('Event');
        event.promise = promise;
        event.reason = reason;
        event.initEvent(name, false, true);
        $d559f7f02fd8963f$exports.dispatchEvent(event);
    } else event = {
        promise: promise,
        reason: reason
    };
    if (!$352d15b9841a088c$var$NATIVE_PROMISE_REJECTION_EVENT && (handler = $d559f7f02fd8963f$exports['on' + name])) handler(event);
    else if (name === $352d15b9841a088c$var$UNHANDLED_REJECTION) $37b1b9fd944e8079$exports('Unhandled promise rejection', reason);
};
var $352d15b9841a088c$var$onUnhandled = function $352d15b9841a088c$var$onUnhandled(state) {
    $5d66713b352b955a$exports($352d15b9841a088c$require$task, $d559f7f02fd8963f$exports, function() {
        var promise = state.facade;
        var value = state.value;
        var IS_UNHANDLED = $352d15b9841a088c$var$isUnhandled(state);
        var result;
        if (IS_UNHANDLED) {
            result = $aa23d3a1c1c30bd2$exports(function() {
                if ($3675020bbfd7dbb8$exports) $352d15b9841a088c$var$process.emit('unhandledRejection', value, promise);
                else $352d15b9841a088c$var$dispatchEvent($352d15b9841a088c$var$UNHANDLED_REJECTION, promise, value);
            });
            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
            state.rejection = $3675020bbfd7dbb8$exports || $352d15b9841a088c$var$isUnhandled(state) ? $352d15b9841a088c$var$UNHANDLED : $352d15b9841a088c$var$HANDLED;
            if (result.error) throw result.value;
        }
    });
};
var $352d15b9841a088c$var$isUnhandled = function $352d15b9841a088c$var$isUnhandled(state) {
    return state.rejection !== $352d15b9841a088c$var$HANDLED && !state.parent;
};
var $352d15b9841a088c$var$onHandleUnhandled = function $352d15b9841a088c$var$onHandleUnhandled(state) {
    $5d66713b352b955a$exports($352d15b9841a088c$require$task, $d559f7f02fd8963f$exports, function() {
        var promise = state.facade;
        if ($3675020bbfd7dbb8$exports) $352d15b9841a088c$var$process.emit('rejectionHandled', promise);
        else $352d15b9841a088c$var$dispatchEvent($352d15b9841a088c$var$REJECTION_HANDLED, promise, state.value);
    });
};
var $352d15b9841a088c$var$bind = function $352d15b9841a088c$var$bind(fn, state, unwrap) {
    return function(value) {
        fn(state, value, unwrap);
    };
};
var $352d15b9841a088c$var$internalReject = function $352d15b9841a088c$var$internalReject(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = $352d15b9841a088c$var$REJECTED;
    $352d15b9841a088c$var$notify(state, true);
};
var $352d15b9841a088c$var$internalResolve = function(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
        if (state.facade === value) throw $352d15b9841a088c$var$TypeError("Promise can't be resolved itself");
        var then = $352d15b9841a088c$var$isThenable(value);
        if (then) $6acb23d5f8b2c607$exports(function() {
            var wrapper = {
                done: false
            };
            try {
                $5d66713b352b955a$exports(then, value, $352d15b9841a088c$var$bind($352d15b9841a088c$var$internalResolve, wrapper, state), $352d15b9841a088c$var$bind($352d15b9841a088c$var$internalReject, wrapper, state));
            } catch (error) {
                $352d15b9841a088c$var$internalReject(wrapper, error, state);
            }
        });
        else {
            state.value = value;
            state.state = $352d15b9841a088c$var$FULFILLED;
            $352d15b9841a088c$var$notify(state, false);
        }
    } catch (error) {
        $352d15b9841a088c$var$internalReject({
            done: false
        }, error, state);
    }
};
// constructor polyfill
if ($352d15b9841a088c$var$FORCED_PROMISE_CONSTRUCTOR) {
    // 25.4.3.1 Promise(executor)
    $352d15b9841a088c$var$PromiseConstructor = function Promise(executor) {
        $b0864e7a277a061c$exports(this, $352d15b9841a088c$var$PromisePrototype);
        $745dc3aec62c58e4$exports(executor);
        $5d66713b352b955a$exports($352d15b9841a088c$var$Internal, this);
        var state = $352d15b9841a088c$var$getInternalPromiseState(this);
        try {
            executor($352d15b9841a088c$var$bind($352d15b9841a088c$var$internalResolve, state), $352d15b9841a088c$var$bind($352d15b9841a088c$var$internalReject, state));
        } catch (error) {
            $352d15b9841a088c$var$internalReject(state, error);
        }
    };
    $352d15b9841a088c$var$PromisePrototype = $352d15b9841a088c$var$PromiseConstructor.prototype;
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    $352d15b9841a088c$var$Internal = function Promise(executor) {
        $352d15b9841a088c$var$setInternalState(this, {
            type: $352d15b9841a088c$var$PROMISE,
            done: false,
            notified: false,
            parent: false,
            reactions: new $ada3c605da70e543$exports(),
            rejection: false,
            state: $352d15b9841a088c$var$PENDING,
            value: undefined
        });
    };
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    $352d15b9841a088c$var$Internal.prototype = $9a74f37bc9cc0327$exports($352d15b9841a088c$var$PromisePrototype, 'then', function then(onFulfilled, onRejected) {
        var state = $352d15b9841a088c$var$getInternalPromiseState(this);
        var reaction = $352d15b9841a088c$var$newPromiseCapability($bb5205bd4a8ec714$exports(this, $352d15b9841a088c$var$PromiseConstructor));
        state.parent = true;
        reaction.ok = $ee014ce6443cdcf8$exports(onFulfilled) ? onFulfilled : true;
        reaction.fail = $ee014ce6443cdcf8$exports(onRejected) && onRejected;
        reaction.domain = $3675020bbfd7dbb8$exports ? $352d15b9841a088c$var$process.domain : undefined;
        if (state.state == $352d15b9841a088c$var$PENDING) state.reactions.add(reaction);
        else $6acb23d5f8b2c607$exports(function() {
            $352d15b9841a088c$var$callReaction(reaction, state);
        });
        return reaction.promise;
    });
    $352d15b9841a088c$var$OwnPromiseCapability = function $352d15b9841a088c$var$OwnPromiseCapability() {
        var promise = new $352d15b9841a088c$var$Internal();
        var state = $352d15b9841a088c$var$getInternalPromiseState(promise);
        this.promise = promise;
        this.resolve = $352d15b9841a088c$var$bind($352d15b9841a088c$var$internalResolve, state);
        this.reject = $352d15b9841a088c$var$bind($352d15b9841a088c$var$internalReject, state);
    };
    $207e2e0d086cf3a8$export$2d1720544b23b823 = $352d15b9841a088c$var$newPromiseCapability = function $352d15b9841a088c$var$newPromiseCapability(C) {
        return C === $352d15b9841a088c$var$PromiseConstructor || C === $352d15b9841a088c$var$PromiseWrapper ? new $352d15b9841a088c$var$OwnPromiseCapability(C) : $352d15b9841a088c$var$newGenericPromiseCapability(C);
    };
    if (!$522b1997a687d541$exports && $ee014ce6443cdcf8$exports($43e586947d8484e3$exports) && $352d15b9841a088c$var$NativePromisePrototype !== Object.prototype) {
        $352d15b9841a088c$var$nativeThen = $352d15b9841a088c$var$NativePromisePrototype.then;
        if (!$352d15b9841a088c$var$NATIVE_PROMISE_SUBCLASSING) // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        $9a74f37bc9cc0327$exports($352d15b9841a088c$var$NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
            var that = this;
            return new $352d15b9841a088c$var$PromiseConstructor(function(resolve, reject) {
                $5d66713b352b955a$exports($352d15b9841a088c$var$nativeThen, that, resolve, reject);
            }).then(onFulfilled, onRejected);
        // https://github.com/zloirock/core-js/issues/640
        }, {
            unsafe: true
        });
        // make `.constructor === Promise` work for native promise-based APIs
        try {
            delete $352d15b9841a088c$var$NativePromisePrototype.constructor;
        } catch (error) {}
        // make `instanceof Promise` work for native promise-based APIs
        if ($499b9fc6e1099b52$exports) $499b9fc6e1099b52$exports($352d15b9841a088c$var$NativePromisePrototype, $352d15b9841a088c$var$PromisePrototype);
    }
}
$24011036e32cf0cf$exports({
    global: true,
    constructor: true,
    wrap: true,
    forced: $352d15b9841a088c$var$FORCED_PROMISE_CONSTRUCTOR
}, {
    Promise: $352d15b9841a088c$var$PromiseConstructor
});
$48c92574fb75c79c$exports($352d15b9841a088c$var$PromiseConstructor, $352d15b9841a088c$var$PROMISE, false, true);
$989a257785f3075d$exports($352d15b9841a088c$var$PROMISE);


'use strict';





var $2910ae303b24c197$exports = {};




var $65b9cac193ac68fd$exports = {};


var $65b9cac193ac68fd$var$ITERATOR = $8342f2054ec8a712$exports('iterator');
var $65b9cac193ac68fd$var$ArrayPrototype = Array.prototype;
// check on default Array iterator
$65b9cac193ac68fd$exports = function(it) {
    return it !== undefined && ($b7d93248e010db38$exports.Array === it || $65b9cac193ac68fd$var$ArrayPrototype[$65b9cac193ac68fd$var$ITERATOR] === it);
};




var $a123eed6dc7c80cd$exports = {};




var $bda818d04d1c80f3$exports = {};




var $bda818d04d1c80f3$var$ITERATOR = $8342f2054ec8a712$exports('iterator');
$bda818d04d1c80f3$exports = function(it) {
    if (it != undefined) return $2b08e8149b4b496d$exports(it, $bda818d04d1c80f3$var$ITERATOR) || $2b08e8149b4b496d$exports(it, '@@iterator') || $b7d93248e010db38$exports[$1e9bf5768cc1840f$exports(it)];
};


var $a123eed6dc7c80cd$var$$TypeError = TypeError;
$a123eed6dc7c80cd$exports = function(argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? $bda818d04d1c80f3$exports(argument) : usingIterator;
    if ($745dc3aec62c58e4$exports(iteratorMethod)) return $c857ccf1c716bc86$exports($5d66713b352b955a$exports(iteratorMethod, argument));
    throw $a123eed6dc7c80cd$var$$TypeError($3b13f3818143a2e3$exports(argument) + ' is not iterable');
};



var $0ac240d582d40908$exports = {};



$0ac240d582d40908$exports = function(iterator, kind, value) {
    var innerResult, innerError;
    $c857ccf1c716bc86$exports(iterator);
    try {
        innerResult = $2b08e8149b4b496d$exports(iterator, 'return');
        if (!innerResult) {
            if (kind === 'throw') throw value;
            return value;
        }
        innerResult = $5d66713b352b955a$exports(innerResult, iterator);
    } catch (error) {
        innerError = true;
        innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    $c857ccf1c716bc86$exports(innerResult);
    return value;
};


var $2910ae303b24c197$var$$TypeError = TypeError;
var $2910ae303b24c197$var$Result = function $2910ae303b24c197$var$Result(stopped, result) {
    this.stopped = stopped;
    this.result = result;
};
var $2910ae303b24c197$var$ResultPrototype = $2910ae303b24c197$var$Result.prototype;
$2910ae303b24c197$exports = function(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = $aae891644e092c86$exports(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function stop(condition) {
        if (iterator) $0ac240d582d40908$exports(iterator, 'normal', condition);
        return new $2910ae303b24c197$var$Result(true, condition);
    };
    var callFn = function callFn(value) {
        if (AS_ENTRIES) {
            $c857ccf1c716bc86$exports(value);
            return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
    };
    if (IS_ITERATOR) iterator = iterable;
    else {
        iterFn = $bda818d04d1c80f3$exports(iterable);
        if (!iterFn) throw $2910ae303b24c197$var$$TypeError($3b13f3818143a2e3$exports(iterable) + ' is not iterable');
        // optimisation for array iterators
        if ($65b9cac193ac68fd$exports(iterFn)) {
            for(index = 0, length = $9002a45dcaac2d51$exports(iterable); length > index; index++){
                result = callFn(iterable[index]);
                if (result && $d384df56aad1f4c0$exports($2910ae303b24c197$var$ResultPrototype, result)) return result;
            }
            return new $2910ae303b24c197$var$Result(false);
        }
        iterator = $a123eed6dc7c80cd$exports(iterable, iterFn);
    }
    next = iterator.next;
    while(!(step = $5d66713b352b955a$exports(next, iterator)).done){
        try {
            result = callFn(step.value);
        } catch (error) {
            $0ac240d582d40908$exports(iterator, 'throw', error);
        }
        if (typeof result == 'object' && result && $d384df56aad1f4c0$exports($2910ae303b24c197$var$ResultPrototype, result)) return result;
    }
    return new $2910ae303b24c197$var$Result(false);
};


var $6e9a103adc06aeff$exports = {};

var $736bd9e9b25f8952$exports = {};

var $736bd9e9b25f8952$var$ITERATOR = $8342f2054ec8a712$exports('iterator');
var $736bd9e9b25f8952$var$SAFE_CLOSING = false;
try {
    var $736bd9e9b25f8952$var$called = 0;
    var $736bd9e9b25f8952$var$iteratorWithReturn = {
        next: function next() {
            return {
                done: !!$736bd9e9b25f8952$var$called++
            };
        },
        'return': function() {
            $736bd9e9b25f8952$var$SAFE_CLOSING = true;
        }
    };
    $736bd9e9b25f8952$var$iteratorWithReturn[$736bd9e9b25f8952$var$ITERATOR] = function() {
        return this;
    };
    // eslint-disable-next-line es-x/no-array-from, no-throw-literal -- required for testing
    Array.from($736bd9e9b25f8952$var$iteratorWithReturn, function() {
        throw 2;
    });
} catch (error) {}
$736bd9e9b25f8952$exports = function(exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !$736bd9e9b25f8952$var$SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
        var object = {};
        object[$736bd9e9b25f8952$var$ITERATOR] = function() {
            return {
                next: function next() {
                    return {
                        done: ITERATION_SUPPORT = true
                    };
                }
            };
        };
        exec(object);
    } catch (error) {}
    return ITERATION_SUPPORT;
};



var $6e9a103adc06aeff$require$FORCED_PROMISE_CONSTRUCTOR = $21c9d360f095e13c$exports.CONSTRUCTOR;
$6e9a103adc06aeff$exports = $6e9a103adc06aeff$require$FORCED_PROMISE_CONSTRUCTOR || !$736bd9e9b25f8952$exports(function(iterable) {
    $43e586947d8484e3$exports.all(iterable).then(undefined, function() {});
});


// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$24011036e32cf0cf$exports({
    target: 'Promise',
    stat: true,
    forced: $6e9a103adc06aeff$exports
}, {
    all: function all(iterable) {
        var C = this;
        var capability = $207e2e0d086cf3a8$export$2d1720544b23b823(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = $aa23d3a1c1c30bd2$exports(function() {
            var $promiseResolve = $745dc3aec62c58e4$exports(C.resolve);
            var values = [];
            var counter = 0;
            var remaining = 1;
            $2910ae303b24c197$exports(iterable, function(promise) {
                var index = counter++;
                var alreadyCalled = false;
                remaining++;
                $5d66713b352b955a$exports($promiseResolve, C, promise).then(function(value) {
                    if (alreadyCalled) return;
                    alreadyCalled = true;
                    values[index] = value;
                    --remaining || resolve(values);
                }, reject);
            });
            --remaining || resolve(values);
        });
        if (result.error) reject(result.value);
        return capability.promise;
    }
});


'use strict';



var $9484c4c5cbff968d$require$FORCED_PROMISE_CONSTRUCTOR = $21c9d360f095e13c$exports.CONSTRUCTOR;




var $9484c4c5cbff968d$var$NativePromisePrototype = $43e586947d8484e3$exports && $43e586947d8484e3$exports.prototype;
// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$24011036e32cf0cf$exports({
    target: 'Promise',
    proto: true,
    forced: $9484c4c5cbff968d$require$FORCED_PROMISE_CONSTRUCTOR,
    real: true
}, {
    'catch': function(onRejected) {
        return this.then(undefined, onRejected);
    }
});
// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!$522b1997a687d541$exports && $ee014ce6443cdcf8$exports($43e586947d8484e3$exports)) {
    var $9484c4c5cbff968d$var$method = $4c0a73a100c6cd02$exports('Promise').prototype['catch'];
    if ($9484c4c5cbff968d$var$NativePromisePrototype['catch'] !== $9484c4c5cbff968d$var$method) $9a74f37bc9cc0327$exports($9484c4c5cbff968d$var$NativePromisePrototype, 'catch', $9484c4c5cbff968d$var$method, {
        unsafe: true
    });
}


'use strict';







// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$24011036e32cf0cf$exports({
    target: 'Promise',
    stat: true,
    forced: $6e9a103adc06aeff$exports
}, {
    race: function race(iterable) {
        var C = this;
        var capability = $207e2e0d086cf3a8$export$2d1720544b23b823(C);
        var reject = capability.reject;
        var result = $aa23d3a1c1c30bd2$exports(function() {
            var $promiseResolve = $745dc3aec62c58e4$exports(C.resolve);
            $2910ae303b24c197$exports(iterable, function(promise) {
                $5d66713b352b955a$exports($promiseResolve, C, promise).then(capability.resolve, reject);
            });
        });
        if (result.error) reject(result.value);
        return capability.promise;
    }
});


'use strict';




var $5c06b81c5b7649cb$require$FORCED_PROMISE_CONSTRUCTOR = $21c9d360f095e13c$exports.CONSTRUCTOR;
// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$24011036e32cf0cf$exports({
    target: 'Promise',
    stat: true,
    forced: $5c06b81c5b7649cb$require$FORCED_PROMISE_CONSTRUCTOR
}, {
    reject: function reject(r) {
        var capability = $207e2e0d086cf3a8$export$2d1720544b23b823(this);
        $5d66713b352b955a$exports(capability.reject, undefined, r);
        return capability.promise;
    }
});


'use strict';





var $9eee5d3b2b21bea4$require$FORCED_PROMISE_CONSTRUCTOR = $21c9d360f095e13c$exports.CONSTRUCTOR;
var $1be8cadeef912a11$exports = {};



$1be8cadeef912a11$exports = function(C, x) {
    $c857ccf1c716bc86$exports(C);
    if ($459f8d93190eef3e$exports(x) && x.constructor === C) return x;
    var promiseCapability = $207e2e0d086cf3a8$export$2d1720544b23b823(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
};


var $9eee5d3b2b21bea4$var$PromiseConstructorWrapper = $4c0a73a100c6cd02$exports('Promise');
var $9eee5d3b2b21bea4$var$CHECK_WRAPPER = $522b1997a687d541$exports && !$9eee5d3b2b21bea4$require$FORCED_PROMISE_CONSTRUCTOR;
// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$24011036e32cf0cf$exports({
    target: 'Promise',
    stat: true,
    forced: $522b1997a687d541$exports || $9eee5d3b2b21bea4$require$FORCED_PROMISE_CONSTRUCTOR
}, {
    resolve: function resolve(x) {
        return $1be8cadeef912a11$exports($9eee5d3b2b21bea4$var$CHECK_WRAPPER && this === $9eee5d3b2b21bea4$var$PromiseConstructorWrapper ? $43e586947d8484e3$exports : this, x);
    }
});




'use strict';









var $863e749662319e99$var$NativePromisePrototype = $43e586947d8484e3$exports && $43e586947d8484e3$exports.prototype;
// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var $863e749662319e99$var$NON_GENERIC = !!$43e586947d8484e3$exports && $8f05b05332b1117a$exports(function() {
    // eslint-disable-next-line unicorn/no-thenable -- required for testing
    $863e749662319e99$var$NativePromisePrototype['finally'].call({
        then: function then() {}
    }, function() {});
});
// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$24011036e32cf0cf$exports({
    target: 'Promise',
    proto: true,
    real: true,
    forced: $863e749662319e99$var$NON_GENERIC
}, {
    'finally': function(onFinally) {
        var C = $bb5205bd4a8ec714$exports(this, $4c0a73a100c6cd02$exports('Promise'));
        var isFunction = $ee014ce6443cdcf8$exports(onFinally);
        return this.then(isFunction ? function(x) {
            return $1be8cadeef912a11$exports(C, onFinally()).then(function() {
                return x;
            });
        } : onFinally, isFunction ? function(e) {
            return $1be8cadeef912a11$exports(C, onFinally()).then(function() {
                throw e;
            });
        } : onFinally);
    }
});
// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (!$522b1997a687d541$exports && $ee014ce6443cdcf8$exports($43e586947d8484e3$exports)) {
    var $863e749662319e99$var$method = $4c0a73a100c6cd02$exports('Promise').prototype['finally'];
    if ($863e749662319e99$var$NativePromisePrototype['finally'] !== $863e749662319e99$var$method) $9a74f37bc9cc0327$exports($863e749662319e99$var$NativePromisePrototype, 'finally', $863e749662319e99$var$method, {
        unsafe: true
    });
}


'use strict';
var $f29cbf84a34c043a$exports = {};


var $8cb7705a8bef2f5d$exports = {};

var $8cb7705a8bef2f5d$var$$String = String;
$8cb7705a8bef2f5d$exports = function(argument) {
    if ($1e9bf5768cc1840f$exports(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return $8cb7705a8bef2f5d$var$$String(argument);
};



var $f29cbf84a34c043a$var$charAt = $2b0a282a34db700b$exports(''.charAt);
var $f29cbf84a34c043a$var$charCodeAt = $2b0a282a34db700b$exports(''.charCodeAt);
var $f29cbf84a34c043a$var$stringSlice = $2b0a282a34db700b$exports(''.slice);
var $f29cbf84a34c043a$var$createMethod = function $f29cbf84a34c043a$var$createMethod(CONVERT_TO_STRING) {
    return function($this, pos) {
        var S = $8cb7705a8bef2f5d$exports($8a30942375981049$exports($this));
        var position = $b6ca2a462e819258$exports(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
        first = $f29cbf84a34c043a$var$charCodeAt(S, position);
        return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = $f29cbf84a34c043a$var$charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? $f29cbf84a34c043a$var$charAt(S, position) : first : CONVERT_TO_STRING ? $f29cbf84a34c043a$var$stringSlice(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
};
$f29cbf84a34c043a$exports = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: $f29cbf84a34c043a$var$createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: $f29cbf84a34c043a$var$createMethod(true)
};


var $805f193649bfb9bd$require$charAt = $f29cbf84a34c043a$exports.charAt;



var $805f193649bfb9bd$var$STRING_ITERATOR = 'String Iterator';
var $805f193649bfb9bd$var$setInternalState = $9b837eff291dea4b$exports.set;
var $805f193649bfb9bd$var$getInternalState = $9b837eff291dea4b$exports.getterFor($805f193649bfb9bd$var$STRING_ITERATOR);
// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
$54e173ab4b8228d8$exports(String, 'String', function(iterated) {
    $805f193649bfb9bd$var$setInternalState(this, {
        type: $805f193649bfb9bd$var$STRING_ITERATOR,
        string: $8cb7705a8bef2f5d$exports(iterated),
        index: 0
    });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
    var state = $805f193649bfb9bd$var$getInternalState(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return {
        value: undefined,
        done: true
    };
    point = $805f193649bfb9bd$require$charAt(string, index);
    state.index += point.length;
    return {
        value: point,
        done: false
    };
});



var $65b697f2c3f04ac3$exports = {};
// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
$65b697f2c3f04ac3$exports = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
};


var $4cf2d82581e8cc42$exports = {};

var $4cf2d82581e8cc42$var$classList = $c113ccdb28af8131$exports('span').classList;
var $4cf2d82581e8cc42$var$DOMTokenListPrototype = $4cf2d82581e8cc42$var$classList && $4cf2d82581e8cc42$var$classList.constructor && $4cf2d82581e8cc42$var$classList.constructor.prototype;
$4cf2d82581e8cc42$exports = $4cf2d82581e8cc42$var$DOMTokenListPrototype === Object.prototype ? undefined : $4cf2d82581e8cc42$var$DOMTokenListPrototype;





var $425299ad8fd943a2$var$ITERATOR = $8342f2054ec8a712$exports('iterator');
var $425299ad8fd943a2$var$TO_STRING_TAG = $8342f2054ec8a712$exports('toStringTag');
var $425299ad8fd943a2$var$ArrayValues = $779af3c4556adc53$exports.values;
var $425299ad8fd943a2$var$handlePrototype = function $425299ad8fd943a2$var$handlePrototype(CollectionPrototype, COLLECTION_NAME) {
    if (CollectionPrototype) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[$425299ad8fd943a2$var$ITERATOR] !== $425299ad8fd943a2$var$ArrayValues) try {
            $079f3799c51a4d21$exports(CollectionPrototype, $425299ad8fd943a2$var$ITERATOR, $425299ad8fd943a2$var$ArrayValues);
        } catch (error) {
            CollectionPrototype[$425299ad8fd943a2$var$ITERATOR] = $425299ad8fd943a2$var$ArrayValues;
        }
        if (!CollectionPrototype[$425299ad8fd943a2$var$TO_STRING_TAG]) $079f3799c51a4d21$exports(CollectionPrototype, $425299ad8fd943a2$var$TO_STRING_TAG, COLLECTION_NAME);
        if ($65b697f2c3f04ac3$exports[COLLECTION_NAME]) for(var METHOD_NAME in $779af3c4556adc53$exports){
            // some Chrome versions have non-configurable methods on DOMTokenList
            if (CollectionPrototype[METHOD_NAME] !== $779af3c4556adc53$exports[METHOD_NAME]) try {
                $079f3799c51a4d21$exports(CollectionPrototype, METHOD_NAME, $779af3c4556adc53$exports[METHOD_NAME]);
            } catch (error) {
                CollectionPrototype[METHOD_NAME] = $779af3c4556adc53$exports[METHOD_NAME];
            }
        }
    }
};
for(var $425299ad8fd943a2$var$COLLECTION_NAME in $65b697f2c3f04ac3$exports)$425299ad8fd943a2$var$handlePrototype($d559f7f02fd8963f$exports[$425299ad8fd943a2$var$COLLECTION_NAME] && $d559f7f02fd8963f$exports[$425299ad8fd943a2$var$COLLECTION_NAME].prototype, $425299ad8fd943a2$var$COLLECTION_NAME);
$425299ad8fd943a2$var$handlePrototype($4cf2d82581e8cc42$exports, 'DOMTokenList');


var $d879137c8c0a0e40$exports = {};
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $d879137c8c0a0e40$var$runtime = function(exports) {
    var define = function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    };
    var wrap = function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    };
    var tryCatch = // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    };
    var Generator = // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {};
    var GeneratorFunction = function GeneratorFunction() {};
    var GeneratorFunctionPrototype = function GeneratorFunctionPrototype() {};
    var defineIteratorMethods = // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    };
    var AsyncIterator = function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value1 = result.value;
                if (value1 && typeof value1 === "object" && hasOwn.call(value1, "__await")) return PromiseImpl.resolve(value1.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value1).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    };
    var makeInvokeMethod = function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    };
    var pushTryEntry = function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    };
    var resetTryEntry = function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    };
    var Context = function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    };
    var values = function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next1 = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next1.next = next1;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    };
    var doneResult = function doneResult() {
        return {
            value: undefined,
            done: true
        };
    };
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {};
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
    } catch (err) {
        define = function define(obj, key, value) {
            return obj[key] = value;
        };
    }
    exports.wrap = wrap;
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {};
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {};
    define(IteratorPrototype, iteratorSymbol, function() {
        return this;
    });
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = GeneratorFunctionPrototype;
    define(Gp, "constructor", GeneratorFunctionPrototype);
    define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    defineIteratorMethods(AsyncIterator.prototype);
    define(AsyncIterator.prototype, asyncIteratorSymbol, function() {
        return this;
    });
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    define(Gp, iteratorSymbol, function() {
        return this;
    });
    define(Gp, "toString", function() {
        return "[object Generator]";
    });
    exports.keys = function(object) {
        var keys = [];
        for(var key1 in object)keys.push(key1);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    exports.values = values;
    Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function stop() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(exception) {
            var handle = function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            };
            if (this.done) throw exception;
            var context = this;
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function abrupt(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}($d879137c8c0a0e40$exports);
try {
    regeneratorRuntime = $d879137c8c0a0e40$var$runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, in modern engines
    // we can explicitly access globalThis. In older engines we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = $d879137c8c0a0e40$var$runtime;
    else Function("r", "regeneratorRuntime = r")($d879137c8c0a0e40$var$runtime);
}


var $ca8d0949b1cd3125$exports = {};
$ca8d0949b1cd3125$exports = ":host {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n:host > .container {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n:host > .container > .transition {\n  --transition-background-color: black;\n  background-color: var(--transition-background-color);\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\n:host > .container > .transition > .animation, :host > .container > .transition > .animation > .content {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n\n:host > .container > .transition > .animation > .content.fit-contain {\n  object-fit: contain;\n}\n\n:host > .container > .transition > .animation > .content.fit-cover {\n  object-fit: cover;\n}\n\n";





var $05dbe9138e03b67e$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    "use strict";
    function $05dbe9138e03b67e$export$2e2bcd8739ae039(state) {
        $0605ccfdbc7c3e55$export$2e2bcd8739ae039(this, $05dbe9138e03b67e$export$2e2bcd8739ae039);
        this.state = state;
    }
    $a68932d12b922dac$export$2e2bcd8739ae039($05dbe9138e03b67e$export$2e2bcd8739ae039, [
        {
            key: "buildExecutor",
            value: function buildExecutor(arg) {
                var _this = this;
                var unpackedArg = this.unpack(arg);
                return function() {
                    return _this.execute(unpackedArg);
                };
            }
        }
    ]);
    return $05dbe9138e03b67e$export$2e2bcd8739ae039;
}();


var $a78389b36f1c04ad$exports = {};

$parcel$defineInteropFlag($a78389b36f1c04ad$exports);

$parcel$export($a78389b36f1c04ad$exports, "default", function () { return $a78389b36f1c04ad$export$2e2bcd8739ae039; });
$parcel$export($a78389b36f1c04ad$exports, "Preloader", function () { return $a78389b36f1c04ad$export$2e2bcd8739ae039; });

var $a78389b36f1c04ad$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    "use strict";
    function $a78389b36f1c04ad$export$2e2bcd8739ae039() {
        $0605ccfdbc7c3e55$export$2e2bcd8739ae039(this, $a78389b36f1c04ad$export$2e2bcd8739ae039);
        $f8afd350de1754e4$export$2e2bcd8739ae039(this, "refs", new Map());
        $f8afd350de1754e4$export$2e2bcd8739ae039(this, "typeRegistry", new Map());
        this.typeRegistry.set('image', this.preloadImage.bind(this));
        this.typeRegistry.set('video', this.preloadVideo.bind(this));
    }
    $a68932d12b922dac$export$2e2bcd8739ae039($a78389b36f1c04ad$export$2e2bcd8739ae039, [
        {
            key: "preload",
            value: function preload(mimetype, url) {
                var type = mimetype.split('/', 1)[0];
                var preloadFunc = this.typeRegistry.get(type);
                if (preloadFunc) {
                    preloadFunc(url);
                    return true;
                }
                return false;
            }
        },
        {
            key: "preloadImage",
            value: function preloadImage(url) {
                var href = new URL(url).href;
                var image = new Image();
                image.src = href;
                this.refs.set(href, image);
            }
        },
        {
            key: "preloadVideo",
            value: function preloadVideo(url) {
                var href = new URL(url).href;
                var video = document.createElement('video');
                video.preload = 'auto';
                video.src = href;
                this.refs.set(href, video);
            }
        },
        {
            key: "unref",
            value: function unref() {
                for(var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++){
                    refs[_key] = arguments[_key];
                }
                var _this = this;
                if (refs.length === 0) this.refs.clear();
                else refs.forEach(function(ref) {
                    return _this.refs.delete(ref);
                });
            }
        }
    ]);
    return $a78389b36f1c04ad$export$2e2bcd8739ae039;
}();


var $97d569b32ac29f5c$export$2e2bcd8739ae039 = /*#__PURE__*/ function(Base) {
    "use strict";
    $effcad08cfe0ab79$export$2e2bcd8739ae039($97d569b32ac29f5c$export$2e2bcd8739ae039, Base);
    var _super = $e8bccef633e20608$export$2e2bcd8739ae039($97d569b32ac29f5c$export$2e2bcd8739ae039);
    function $97d569b32ac29f5c$export$2e2bcd8739ae039(state) {
        $0605ccfdbc7c3e55$export$2e2bcd8739ae039(this, $97d569b32ac29f5c$export$2e2bcd8739ae039);
        var _this;
        _this = _super.call(this, state);
        _this.preloader = new $a78389b36f1c04ad$export$2e2bcd8739ae039();
        return _this;
    }
    $a68932d12b922dac$export$2e2bcd8739ae039($97d569b32ac29f5c$export$2e2bcd8739ae039, [
        {
            key: "execute",
            value: function execute(items) {
                var _this = this;
                return $c48a0955cd50cee1$export$2e2bcd8739ae039((/*@__PURE__*/$parcel$interopDefault($d879137c8c0a0e40$exports)).mark(function _callee() {
                    return (/*@__PURE__*/$parcel$interopDefault($d879137c8c0a0e40$exports)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _this.preloader.unref();
                                items.forEach(function(param) {
                                    var mimetype = param.mimetype, url = param.url;
                                    return _this.preloader.preload(mimetype, url);
                                });
                                return _ctx.abrupt("return", Promise.resolve());
                            case 3:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "unpack",
            value: function unpack(arg) {
                if (!Array.isArray(arg)) throw new TypeError('PreloadAction.unpack(arg): arg must be an array');
                var items = arg;
                items.forEach(function(item, index) {
                    var mimetype = item.mimetype, url = item.url;
                    if (typeof mimetype !== 'string') throw new TypeError("PreloadAction.unpack(arg): item ".concat(index, " of args must have a mimetype"));
                    if (typeof url !== 'string') throw new TypeError("PreloadAction.unpack(arg): item ".concat(index, " of arg must have an url"));
                });
                return arg;
            }
        }
    ]);
    return $97d569b32ac29f5c$export$2e2bcd8739ae039;
}($05dbe9138e03b67e$export$2e2bcd8739ae039);



var /* eslint-disable no-console */ $32c6ed2f89c095a2$export$243e62d78d3b544d;
(function($32c6ed2f89c095a2$export$243e62d78d3b544d) {
    $32c6ed2f89c095a2$export$243e62d78d3b544d[$32c6ed2f89c095a2$export$243e62d78d3b544d["OFF"] = 0] = "OFF";
    $32c6ed2f89c095a2$export$243e62d78d3b544d[$32c6ed2f89c095a2$export$243e62d78d3b544d["ERROR"] = 200] = "ERROR";
    $32c6ed2f89c095a2$export$243e62d78d3b544d[$32c6ed2f89c095a2$export$243e62d78d3b544d["WARN"] = 300] = "WARN";
    $32c6ed2f89c095a2$export$243e62d78d3b544d[$32c6ed2f89c095a2$export$243e62d78d3b544d["INFO"] = 400] = "INFO";
    $32c6ed2f89c095a2$export$243e62d78d3b544d[$32c6ed2f89c095a2$export$243e62d78d3b544d["DEBUG"] = 500] = "DEBUG";
    $32c6ed2f89c095a2$export$243e62d78d3b544d[$32c6ed2f89c095a2$export$243e62d78d3b544d["TRACE"] = 600] = "TRACE";
})($32c6ed2f89c095a2$export$243e62d78d3b544d || ($32c6ed2f89c095a2$export$243e62d78d3b544d = {}));
var $32c6ed2f89c095a2$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    "use strict";
    function $32c6ed2f89c095a2$export$2e2bcd8739ae039() {
        var level = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $32c6ed2f89c095a2$export$243e62d78d3b544d.INFO;
        $0605ccfdbc7c3e55$export$2e2bcd8739ae039(this, $32c6ed2f89c095a2$export$2e2bcd8739ae039);
        this.level = level;
    }
    $a68932d12b922dac$export$2e2bcd8739ae039($32c6ed2f89c095a2$export$2e2bcd8739ae039, [
        {
            key: "error",
            value: function error() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                if (this.level >= $32c6ed2f89c095a2$export$243e62d78d3b544d.ERROR) (_console = console).error.apply(_console, $203802c08d5b4f03$export$2e2bcd8739ae039(args));
            }
        },
        {
            key: "assert",
            value: function assert(assertion) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                var _console;
                if (this.level >= $32c6ed2f89c095a2$export$243e62d78d3b544d.ERROR) (_console = console).assert.apply(_console, [
                    assertion
                ].concat($203802c08d5b4f03$export$2e2bcd8739ae039(args)));
            }
        },
        {
            key: "warn",
            value: function warn() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                if (this.level >= $32c6ed2f89c095a2$export$243e62d78d3b544d.WARN) (_console = console).warn.apply(_console, $203802c08d5b4f03$export$2e2bcd8739ae039(args));
            }
        },
        {
            key: "info",
            value: function info() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                if (this.level >= $32c6ed2f89c095a2$export$243e62d78d3b544d.INFO) (_console = console).info.apply(_console, $203802c08d5b4f03$export$2e2bcd8739ae039(args));
            }
        },
        {
            key: "debug",
            value: function debug() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                if (this.level >= $32c6ed2f89c095a2$export$243e62d78d3b544d.DEBUG) (_console = console).debug.apply(_console, $203802c08d5b4f03$export$2e2bcd8739ae039(args));
            }
        },
        {
            key: "trace",
            value: function trace() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                if (this.level >= $32c6ed2f89c095a2$export$243e62d78d3b544d.TRACE) (_console = console).trace.apply(_console, $203802c08d5b4f03$export$2e2bcd8739ae039(args));
            }
        }
    ]);
    return $32c6ed2f89c095a2$export$2e2bcd8739ae039;
}();





var $2b8dc696c791db97$export$2e2bcd8739ae039 = /*#__PURE__*/ function(Base) {
    "use strict";
    $effcad08cfe0ab79$export$2e2bcd8739ae039($2b8dc696c791db97$export$2e2bcd8739ae039, Base);
    var _super = $e8bccef633e20608$export$2e2bcd8739ae039($2b8dc696c791db97$export$2e2bcd8739ae039);
    function $2b8dc696c791db97$export$2e2bcd8739ae039(state) {
        $0605ccfdbc7c3e55$export$2e2bcd8739ae039(this, $2b8dc696c791db97$export$2e2bcd8739ae039);
        return _super.call(this, state);
    }
    $a68932d12b922dac$export$2e2bcd8739ae039($2b8dc696c791db97$export$2e2bcd8739ae039, [
        {
            key: "execute",
            value: // eslint-disable-next-line class-methods-use-this
            function execute() {
                return $c48a0955cd50cee1$export$2e2bcd8739ae039((/*@__PURE__*/$parcel$interopDefault($d879137c8c0a0e40$exports)).mark(function _callee() {
                    return (/*@__PURE__*/$parcel$interopDefault($d879137c8c0a0e40$exports)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                window.location.reload();
                                return _ctx.abrupt("return", Promise.resolve());
                            case 2:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "unpack",
            value: function unpack() {}
        }
    ]);
    return $2b8dc696c791db97$export$2e2bcd8739ae039;
}($05dbe9138e03b67e$export$2e2bcd8739ae039);







var $a4fe968956461d81$export$c86220c67bdb4242 = /*#__PURE__*/ function() {
    "use strict";
    function $a4fe968956461d81$export$c86220c67bdb4242() {
        $0605ccfdbc7c3e55$export$2e2bcd8739ae039(this, $a4fe968956461d81$export$c86220c67bdb4242);
    }
    $a68932d12b922dac$export$2e2bcd8739ae039($a4fe968956461d81$export$c86220c67bdb4242, null, [
        {
            key: "create",
            value: function create(mimetype, url) {
                var objectFit = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 'cover';
                var type = mimetype.split('/', 1)[0];
                var content;
                switch(type){
                    case 'image':
                        content = $a4fe968956461d81$export$c86220c67bdb4242.createImage(url);
                        break;
                    case 'video':
                        content = $a4fe968956461d81$export$c86220c67bdb4242.createVideo(url);
                        break;
                    default:
                        content = $a4fe968956461d81$export$c86220c67bdb4242.createObject(mimetype, url);
                        break;
                }
                content.classList.add('content');
                content.classList.add("fit-".concat(objectFit));
                return content;
            }
        },
        {
            key: "createObject",
            value: function createObject(mimetype, url) {
                var object = document.createElement('object');
                object.type = mimetype;
                object.data = url;
                return object;
            }
        },
        {
            key: "createImage",
            value: function createImage(url) {
                var image = document.createElement('img');
                image.src = url;
                return image;
            }
        },
        {
            key: "createVideo",
            value: function createVideo(url) {
                var video = document.createElement('video');
                video.preload = 'auto';
                video.src = url;
                video.autoplay = false;
                return video;
            }
        },
        {
            key: "awaitLoad",
            value: function awaitLoad(content) {
                return $c48a0955cd50cee1$export$2e2bcd8739ae039((/*@__PURE__*/$parcel$interopDefault($d879137c8c0a0e40$exports)).mark(function _callee() {
                    return (/*@__PURE__*/$parcel$interopDefault($d879137c8c0a0e40$exports)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                return _ctx.abrupt("return", new Promise(function(resolve) {
                                    if (content.tagName === 'IMG') {
                                        var image = content;
                                        if (image.complete) resolve(content);
                                        else {
                                            var handler = function() {
                                                image.removeEventListener('load', handler);
                                                image.removeEventListener('error', handler);
                                                requestAnimationFrame(function() {
                                                    return resolve(content);
                                                });
                                            };
                                            image.addEventListener('load', handler);
                                            image.addEventListener('error', handler);
                                        }
                                    } else // consider the transition-ol done after a grace period of 1s
                                    setTimeout(function() {
                                        return resolve(content);
                                    }, 1000);
                                }));
                            case 1:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "play",
            value: function play(content) {
                if (content.tagName === 'VIDEO') {
                    var video = content;
                    video.play().finally(function() {});
                }
            }
        }
    ]);
    return $a4fe968956461d81$export$c86220c67bdb4242;
}();






var $5f4404fd6ce41062$export$af22135957e110d7 = /*#__PURE__*/ function() {
    "use strict";
    function $5f4404fd6ce41062$export$af22135957e110d7() {
        $0605ccfdbc7c3e55$export$2e2bcd8739ae039(this, $5f4404fd6ce41062$export$af22135957e110d7);
        // dummy initialization required to satisfy TS2564 (definite assignment)
        var tmpResolve = function(result) {};
        var tmpReject = function() {};
        this._promise = new Promise(function(resolve, reject) {
            tmpResolve = resolve;
            tmpReject = reject;
        });
        this._resolve = tmpResolve;
        this._reject = tmpReject;
    }
    $a68932d12b922dac$export$2e2bcd8739ae039($5f4404fd6ce41062$export$af22135957e110d7, [
        {
            key: "promise",
            value: function promise() {
                return this._promise;
            }
        },
        {
            key: "resolve",
            value: function resolve(result) {
                return this._resolve(result);
            }
        },
        {
            key: "reject",
            value: function reject() {
                return this._reject();
            }
        }
    ]);
    return $5f4404fd6ce41062$export$af22135957e110d7;
}();


var $0183e7363cc02e6e$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    "use strict";
    function $0183e7363cc02e6e$export$2e2bcd8739ae039(container, from, to) {
        $0605ccfdbc7c3e55$export$2e2bcd8739ae039(this, $0183e7363cc02e6e$export$2e2bcd8739ae039);
        $f8afd350de1754e4$export$2e2bcd8739ae039(this, "_isCancelled", false);
        $f8afd350de1754e4$export$2e2bcd8739ae039(this, "_isDone", false);
        this.container = container;
        this.from = from;
        this.to = to;
        this.targetVisiblePEC = new $5f4404fd6ce41062$export$af22135957e110d7();
        this.donePEC = new $5f4404fd6ce41062$export$af22135957e110d7();
        // prevent uncaught exceptions in promise
        this.targetVisiblePEC.promise().catch(function() {});
        this.donePEC.promise().catch(function() {});
    }
    $a68932d12b922dac$export$2e2bcd8739ae039($0183e7363cc02e6e$export$2e2bcd8739ae039, [
        {
            key: "isCancelled",
            value: function isCancelled() {
                return this._isCancelled;
            }
        },
        {
            key: "targetVisible",
            value: function targetVisible() {
                return this.targetVisiblePEC.promise();
            }
        },
        {
            key: "done",
            value: function done() {
                return this.donePEC.promise();
            }
        },
        {
            key: "isDone",
            value: function isDone() {
                return this._isDone;
            }
        }
    ]);
    return $0183e7363cc02e6e$export$2e2bcd8739ae039;
}();


var $50da7db669fa616d$export$2e2bcd8739ae039 = /*#__PURE__*/ function(BaseTransition) {
    "use strict";
    $effcad08cfe0ab79$export$2e2bcd8739ae039($50da7db669fa616d$export$2e2bcd8739ae039, BaseTransition);
    var _super = $e8bccef633e20608$export$2e2bcd8739ae039($50da7db669fa616d$export$2e2bcd8739ae039);
    function $50da7db669fa616d$export$2e2bcd8739ae039() {
        var container = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document.createElement('div'), from = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document.createElement('div'), to = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : document.createElement('div');
        $0605ccfdbc7c3e55$export$2e2bcd8739ae039(this, $50da7db669fa616d$export$2e2bcd8739ae039);
        var _this;
        _this = _super.call(this, container, from, to);
        _this._isCancelled = false;
        _this._isDone = true;
        return _this;
    }
    $a68932d12b922dac$export$2e2bcd8739ae039($50da7db669fa616d$export$2e2bcd8739ae039, [
        {
            // eslint-disable-next-line class-methods-use-this
            key: "cancel",
            value: function cancel() {}
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "targetVisible",
            value: function targetVisible() {
                return Promise.resolve();
            }
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "done",
            value: function done() {
                return Promise.resolve();
            }
        }
    ], [
        {
            key: "unpack",
            value: function unpack() {}
        },
        {
            key: "prepare",
            value: function prepare() {
                return function(container, from, to) {
                    return new $50da7db669fa616d$export$2e2bcd8739ae039(container, from, to);
                };
            }
        },
        {
            key: "getStyleSheetAsString",
            value: function getStyleSheetAsString() {
                return '';
            }
        }
    ]);
    return $50da7db669fa616d$export$2e2bcd8739ae039;
}($0183e7363cc02e6e$export$2e2bcd8739ae039);



var $7e443828db50f6a9$exports = {};
$7e443828db50f6a9$exports = "@-webkit-keyframes transition-fade-out {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes transition-fade-out {\n  0% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n}\n\n@-webkit-keyframes transition-fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.container {\n  --transition-fade-color: black;\n  --transition-fade-duration: 1s;\n  --transition-fade-duration-half: calc(var(--transition-fade-duration) / 2);\n  background-color: var(--transition-fade-color);\n}\n\n.container > .transition.fade {\n  -webkit-animation-duration: var(--transition-fade-duration-half);\n  animation-duration: var(--transition-fade-duration-half);\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.container > .transition.fade.fade-out {\n  -webkit-animation-name: transition-fade-out;\n  animation-name: transition-fade-out;\n}\n\n.container > .transition.fade.fade-in {\n  -webkit-animation-name: transition-fade-in;\n  animation-name: transition-fade-in;\n  -webkit-animation-delay: var(--transition-fade-duration-half);\n  animation-delay: var(--transition-fade-duration-half);\n}\n\n";



var $25b1f9fcf54d4465$var$defaultOptions = {
    duration: 500,
    color: '#000'
};
var $25b1f9fcf54d4465$export$2e2bcd8739ae039 = /*#__PURE__*/ function(BaseTransition) {
    "use strict";
    $effcad08cfe0ab79$export$2e2bcd8739ae039($25b1f9fcf54d4465$export$2e2bcd8739ae039, BaseTransition);
    var _super = $e8bccef633e20608$export$2e2bcd8739ae039($25b1f9fcf54d4465$export$2e2bcd8739ae039);
    function $25b1f9fcf54d4465$export$2e2bcd8739ae039(container, from, to, options) {
        $0605ccfdbc7c3e55$export$2e2bcd8739ae039(this, $25b1f9fcf54d4465$export$2e2bcd8739ae039);
        var _this;
        _this = _super.call(this, container, from, to);
        var ref = $0abe412cc2c86356$export$2e2bcd8739ae039({}, $25b1f9fcf54d4465$var$defaultOptions, options !== null && options !== void 0 ? options : {}), duration = ref.duration, color = ref.color;
        var style = container.style;
        style.setProperty('--transition-fade-duration', "".concat(duration, "s"));
        style.setProperty('--transition-fade-color', "".concat(color));
        from.classList.add('fade');
        from.classList.add('fade-out');
        _this.fromEndCancelHandler = function(param) {
            var animationName = param.animationName;
            if (animationName === 'transition-fade-out') _this.targetVisiblePEC.resolve();
        };
        from.addEventListener('animationend', _this.fromEndCancelHandler);
        from.addEventListener('animationcancel', _this.fromEndCancelHandler);
        to.classList.add('fade');
        to.classList.add('fade-in');
        _this.toEndHandler = function(param) {
            var animationName = param.animationName;
            if (animationName === 'transition-fade-in') _this.end();
        };
        _this.toCancelHandler = function(param) {
            var animationName = param.animationName;
            if (animationName === 'transition-fade-in') _this.cancel();
        };
        to.addEventListener('animationend', _this.toEndHandler);
        to.addEventListener('animationcancel', _this.toCancelHandler);
        return _this;
    }
    $a68932d12b922dac$export$2e2bcd8739ae039($25b1f9fcf54d4465$export$2e2bcd8739ae039, [
        {
            key: "end",
            value: function end() {
                if (!this.isCancelled() && !this.isDone()) {
                    this.cleanup();
                    this._isDone = true;
                    this.targetVisiblePEC.resolve();
                    this.donePEC.resolve();
                }
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                if (!this.isCancelled() && !this.isDone()) {
                    this.cleanup();
                    this._isCancelled = true;
                    this.targetVisiblePEC.resolve();
                    this.donePEC.reject();
                }
            }
        },
        {
            key: "cleanup",
            value: function cleanup() {
                this.from.removeEventListener('animationend', this.fromEndCancelHandler);
                this.from.removeEventListener('animationcancel', this.fromEndCancelHandler);
                this.to.removeEventListener('animationend', this.toEndHandler);
                this.to.removeEventListener('animationcancel', this.toCancelHandler);
                var style = this.container.style;
                style.removeProperty('--transition-fade-duration');
                style.removeProperty('--transition-fade-color');
                this.from.classList.remove('fade');
                this.from.classList.remove('fade-out');
                this.to.classList.remove('fade');
                this.to.classList.remove('fade-in');
            }
        }
    ], [
        {
            key: "unpack",
            value: function unpack(options) {
                return options;
            }
        },
        {
            key: "prepare",
            value: function prepare(options) {
                var unpackedOptions = $25b1f9fcf54d4465$export$2e2bcd8739ae039.unpack(options);
                return function(container, from, to) {
                    return new $25b1f9fcf54d4465$export$2e2bcd8739ae039(container, from, to, unpackedOptions);
                };
            }
        },
        {
            key: "getStyleSheetAsString",
            value: function getStyleSheetAsString() {
                return (/*@__PURE__*/$parcel$interopDefault($7e443828db50f6a9$exports));
            }
        }
    ]);
    return $25b1f9fcf54d4465$export$2e2bcd8739ae039;
}($0183e7363cc02e6e$export$2e2bcd8739ae039);



var $22604cac0b293565$exports = {};
$22604cac0b293565$exports = "@-webkit-keyframes transition-cross-fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-cross-fade-in {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.container {\n  --transition-cross-fade-duration: 1s;\n}\n\n.container > .transition.cross-fade.cross-fade-in {\n  -webkit-animation-duration: var(--transition-cross-fade-duration);\n  animation-duration: var(--transition-cross-fade-duration);\n  -webkit-animation-name: transition-cross-fade-in;\n  animation-name: transition-cross-fade-in;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n";



var $6ca47fcedb45fffb$var$defaultOptions = {
    duration: 500
};
var $6ca47fcedb45fffb$export$2e2bcd8739ae039 = /*#__PURE__*/ function(BaseTransition) {
    "use strict";
    $effcad08cfe0ab79$export$2e2bcd8739ae039($6ca47fcedb45fffb$export$2e2bcd8739ae039, BaseTransition);
    var _super = $e8bccef633e20608$export$2e2bcd8739ae039($6ca47fcedb45fffb$export$2e2bcd8739ae039);
    function $6ca47fcedb45fffb$export$2e2bcd8739ae039(container, from, to, options) {
        $0605ccfdbc7c3e55$export$2e2bcd8739ae039(this, $6ca47fcedb45fffb$export$2e2bcd8739ae039);
        var _this;
        _this = _super.call(this, container, from, to);
        var duration = $0abe412cc2c86356$export$2e2bcd8739ae039({}, $6ca47fcedb45fffb$var$defaultOptions, options !== null && options !== void 0 ? options : {}).duration;
        var style = container.style;
        style.setProperty('--transition-cross-fade-duration', "".concat(duration, "s"));
        from.classList.add('cross-fade');
        from.classList.add('cross-fade-out');
        to.classList.add('cross-fade');
        to.classList.add('cross-fade-in');
        _this.toEndHandler = function(param) {
            var animationName = param.animationName;
            if (animationName === 'transition-cross-fade-in') _this.end();
        };
        _this.toCancelHandler = function(param) {
            var animationName = param.animationName;
            if (animationName === 'transition-cross-fade-in') _this.cancel();
        };
        to.addEventListener('animationend', _this.toEndHandler);
        to.addEventListener('animationcancel', _this.toCancelHandler);
        _this.targetVisiblePEC.resolve();
        return _this;
    }
    $a68932d12b922dac$export$2e2bcd8739ae039($6ca47fcedb45fffb$export$2e2bcd8739ae039, [
        {
            key: "end",
            value: function end() {
                if (!this.isCancelled() && !this.isDone()) {
                    this.cleanup();
                    this._isDone = true;
                    this.donePEC.resolve();
                }
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                if (!this.isCancelled() && !this.isDone()) {
                    this.cleanup();
                    this._isCancelled = true;
                    this.donePEC.reject();
                }
            }
        },
        {
            key: "cleanup",
            value: function cleanup() {
                this.to.removeEventListener('animationend', this.toEndHandler);
                this.to.removeEventListener('animationcancel', this.toCancelHandler);
                var style = this.container.style;
                style.removeProperty('--transition-cross-fade-duration');
                this.from.classList.remove('cross-fade');
                this.from.classList.remove('cross-fade-out');
                this.to.classList.remove('cross-fade');
                this.to.classList.remove('cross-fade-in');
            }
        }
    ], [
        {
            key: "unpack",
            value: function unpack(options) {
                return options;
            }
        },
        {
            key: "prepare",
            value: function prepare(options) {
                var unpackedOptions = $6ca47fcedb45fffb$export$2e2bcd8739ae039.unpack(options);
                return function(container, from, to) {
                    return new $6ca47fcedb45fffb$export$2e2bcd8739ae039(container, from, to, unpackedOptions);
                };
            }
        },
        {
            key: "getStyleSheetAsString",
            value: function getStyleSheetAsString() {
                return (/*@__PURE__*/$parcel$interopDefault($22604cac0b293565$exports));
            }
        }
    ]);
    return $6ca47fcedb45fffb$export$2e2bcd8739ae039;
}($0183e7363cc02e6e$export$2e2bcd8739ae039);


/* eslint-disable import/prefer-default-export */ function $72ec348ae82af3ab$export$c2aff9e92362a9b2(root, stylesheetText, id) {
    var style = document.createElement('style');
    if (typeof id !== 'undefined') style.id = id;
    style.textContent = stylesheetText;
    var selector = "style[type='text/css']:last-of-type, style:not([type]):last-of-type";
    var lastStyleElem = root.querySelector(selector);
    if (lastStyleElem === null) root.prepend(style);
    else lastStyleElem.after(style);
}


var $5213b4f15a3aca51$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    "use strict";
    function $5213b4f15a3aca51$export$2e2bcd8739ae039(root) {
        $0605ccfdbc7c3e55$export$2e2bcd8739ae039(this, $5213b4f15a3aca51$export$2e2bcd8739ae039);
        $f8afd350de1754e4$export$2e2bcd8739ae039(this, "transitionRegistry", new Map());
        this.root = root;
        this.registerKnownTransitions();
    }
    $a68932d12b922dac$export$2e2bcd8739ae039($5213b4f15a3aca51$export$2e2bcd8739ae039, [
        {
            key: "registerKnownTransitions",
            value: function registerKnownTransitions() {
                this.register('none', $50da7db669fa616d$export$2e2bcd8739ae039);
                this.register('fade', $25b1f9fcf54d4465$export$2e2bcd8739ae039);
                this.register('cross-fade', $6ca47fcedb45fffb$export$2e2bcd8739ae039);
            }
        },
        {
            key: "register",
            value: function register(id, transitionClass) {
                if (this.transitionRegistry.has(id)) throw new Error('Transition type already registered');
                $72ec348ae82af3ab$export$c2aff9e92362a9b2(this.root, transitionClass.getStyleSheetAsString(), "transition-".concat(id));
                this.transitionRegistry.set(id, transitionClass);
            }
        },
        {
            key: "prepare",
            value: function prepare() {
                var type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'none', options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var TransitionClass = this.transitionRegistry.get(type);
                if (!TransitionClass) throw new Error("Unknown transition type: ".concat(type));
                // unpacks the options and throws an exception if they are invalid,
                // but does create the actual transition yet
                return TransitionClass.prepare(options);
            }
        }
    ]);
    return $5213b4f15a3aca51$export$2e2bcd8739ae039;
}();








var $986d6415242143b5$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    "use strict";
    function $986d6415242143b5$export$2e2bcd8739ae039(wrapper, content) {
        $0605ccfdbc7c3e55$export$2e2bcd8739ae039(this, $986d6415242143b5$export$2e2bcd8739ae039);
        $f8afd350de1754e4$export$2e2bcd8739ae039(this, "_isCancelled", false);
        $f8afd350de1754e4$export$2e2bcd8739ae039(this, "_isDone", false);
        this.wrapper = wrapper;
        this.content = content;
        this.donePEC = new $5f4404fd6ce41062$export$af22135957e110d7();
        // prevent uncaught exceptions in promise
        this.donePEC.promise().catch(function() {});
    }
    $a68932d12b922dac$export$2e2bcd8739ae039($986d6415242143b5$export$2e2bcd8739ae039, [
        {
            key: "isCancelled",
            value: function isCancelled() {
                return this._isCancelled;
            }
        },
        {
            key: "done",
            value: function done() {
                return this.donePEC.promise();
            }
        },
        {
            key: "isDone",
            value: function isDone() {
                return this._isDone;
            }
        }
    ]);
    return $986d6415242143b5$export$2e2bcd8739ae039;
}();


// @staticImplements<AnimationStatic<NoneAnimation, void>>()
var $cefdd9f8c914c768$export$a27a75f1864d99f4 = /*#__PURE__*/ function(BaseAnimation) {
    "use strict";
    $effcad08cfe0ab79$export$2e2bcd8739ae039($cefdd9f8c914c768$export$a27a75f1864d99f4, BaseAnimation);
    var _super = $e8bccef633e20608$export$2e2bcd8739ae039($cefdd9f8c914c768$export$a27a75f1864d99f4);
    function $cefdd9f8c914c768$export$a27a75f1864d99f4() {
        var wrapper = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document.createElement('div'), content = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document.createElement('div');
        $0605ccfdbc7c3e55$export$2e2bcd8739ae039(this, $cefdd9f8c914c768$export$a27a75f1864d99f4);
        var _this;
        _this = _super.call(this, wrapper, content);
        _this._isCancelled = false;
        _this._isDone = true;
        return _this;
    }
    $a68932d12b922dac$export$2e2bcd8739ae039($cefdd9f8c914c768$export$a27a75f1864d99f4, [
        {
            // eslint-disable-next-line class-methods-use-this
            key: "cancel",
            value: function cancel() {}
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "targetVisible",
            value: function targetVisible() {
                return Promise.resolve();
            }
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "done",
            value: function done() {
                return Promise.resolve();
            }
        }
    ], [
        {
            key: "unpack",
            value: function unpack() {}
        },
        {
            key: "prepare",
            value: function prepare() {
                return function(wrapper, content) {
                    return new $cefdd9f8c914c768$export$a27a75f1864d99f4(wrapper, content);
                };
            }
        },
        {
            key: "getStyleSheetAsString",
            value: function getStyleSheetAsString() {
                return '';
            }
        }
    ]);
    return $cefdd9f8c914c768$export$a27a75f1864d99f4;
}($986d6415242143b5$export$2e2bcd8739ae039);




var $6525266f74fdbe32$exports = {};
$6525266f74fdbe32$exports = "@-webkit-keyframes animation-pan-zoom-animation {\n  0% {\n    top: 0;\n    left: 0;\n  }\n\n  100% {\n    top: calc(50% - 50% * var(--animation-pan-zoom-target-scale) );\n    left: calc(50% - 50% * var(--animation-pan-zoom-target-scale) );\n  }\n}\n\n@keyframes animation-pan-zoom-animation {\n  0% {\n    top: 0;\n    left: 0;\n  }\n\n  100% {\n    top: calc(50% - 50% * var(--animation-pan-zoom-target-scale) );\n    left: calc(50% - 50% * var(--animation-pan-zoom-target-scale) );\n  }\n}\n\n@-webkit-keyframes animation-pan-zoom-content {\n  0% {\n    width: 100%;\n    height: 100%;\n    object-position: 50% 50%;\n    top: 0;\n    left: 0;\n  }\n\n  100% {\n    left: calc(100% * var(--animation-pan-zoom-target-scale) * (.5 - var(--animation-pan-zoom-target-x) ) );\n    top: calc(100% * var(--animation-pan-zoom-target-scale) * (.5 - var(--animation-pan-zoom-target-y) ) );\n    width: calc(100% * var(--animation-pan-zoom-target-scale) );\n    height: calc(100% * var(--animation-pan-zoom-target-scale) );\n    object-position: calc(100% * var(--animation-pan-zoom-target-x) ) calc(100% * var(--animation-pan-zoom-target-y) );\n  }\n}\n\n@keyframes animation-pan-zoom-content {\n  0% {\n    width: 100%;\n    height: 100%;\n    object-position: 50% 50%;\n    top: 0;\n    left: 0;\n  }\n\n  100% {\n    left: calc(100% * var(--animation-pan-zoom-target-scale) * (.5 - var(--animation-pan-zoom-target-x) ) );\n    top: calc(100% * var(--animation-pan-zoom-target-scale) * (.5 - var(--animation-pan-zoom-target-y) ) );\n    width: calc(100% * var(--animation-pan-zoom-target-scale) );\n    height: calc(100% * var(--animation-pan-zoom-target-scale) );\n    object-position: calc(100% * var(--animation-pan-zoom-target-x) ) calc(100% * var(--animation-pan-zoom-target-y) );\n  }\n}\n\n.container > .transition > .animation.animation-pan-zoom {\n  --animation-pan-zoom-duration: 0s;\n  --animation-pan-zoom-target-x: .5;\n  --animation-pan-zoom-target-y: .5;\n  --animation-pan-zoom-target-scale: 1;\n  -webkit-animation-name: animation-pan-zoom-animation;\n  animation-name: animation-pan-zoom-animation;\n}\n\n.container > .transition > .animation.animation-pan-zoom, .container > .transition > .animation.animation-pan-zoom > * {\n  -webkit-animation-duration: var(--animation-pan-zoom-duration);\n  animation-duration: var(--animation-pan-zoom-duration);\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n.container > .transition > .animation.animation-pan-zoom > * {\n  -webkit-animation-name: animation-pan-zoom-content;\n  animation-name: animation-pan-zoom-content;\n  position: relative;\n}\n\n.sdfdsf-resizable > div {\n  --zoom-factor: 1;\n  --pan-target-x: .5;\n  --pan-target-y: .5;\n  --transition-duration: 10s;\n  width: 100%;\n  height: 100%;\n  top: calc(50% - 50% * var(--zoom-factor) );\n  left: calc(50% - 50% * var(--zoom-factor) );\n  z-index: -1;\n  transition-property: top, left, width, height;\n  position: relative;\n}\n\n.sdfdsf-resizable > div, .sdfdsf-resizable > div * {\n  transition-duration: var(--transition-duration);\n}\n\n.sdfdsf-resizable > div img {\n  left: calc(100% * var(--zoom-factor) * (.5 - var(--pan-target-x) ) );\n  top: calc(100% * var(--zoom-factor) * (.5 - var(--pan-target-y) ) );\n  width: calc(100% * var(--zoom-factor) );\n  height: calc(100% * var(--zoom-factor) );\n  object-fit: cover;\n  object-position: calc(100% * var(--pan-target-x) ) calc(100% * var(--pan-target-y) );\n  transition-property: top, left, width, height, object-position;\n  position: relative;\n}\n\n";



function $636d273b8808a746$var$setCSSPropertyIfDefined(elem, property, formatter, value) {
    if (typeof value !== 'undefined') elem.style.setProperty(property, formatter(value));
}
var $636d273b8808a746$export$2e2bcd8739ae039 = /*#__PURE__*/ function(BaseAnimation) {
    "use strict";
    $effcad08cfe0ab79$export$2e2bcd8739ae039($636d273b8808a746$export$2e2bcd8739ae039, BaseAnimation);
    var _super = $e8bccef633e20608$export$2e2bcd8739ae039($636d273b8808a746$export$2e2bcd8739ae039);
    function $636d273b8808a746$export$2e2bcd8739ae039(wrapper, content, options) {
        $0605ccfdbc7c3e55$export$2e2bcd8739ae039(this, $636d273b8808a746$export$2e2bcd8739ae039);
        var _this;
        _this = _super.call(this, wrapper, content);
        _this.endHandler = function() {};
        _this.cancelHandler = function() {};
        _this.asyncInit(options).finally(function() {});
        return _this;
    }
    $a68932d12b922dac$export$2e2bcd8739ae039($636d273b8808a746$export$2e2bcd8739ae039, [
        {
            key: "asyncInit",
            value: function asyncInit(options) {
                var _this = this;
                return $c48a0955cd50cee1$export$2e2bcd8739ae039((/*@__PURE__*/$parcel$interopDefault($d879137c8c0a0e40$exports)).mark(function _callee() {
                    var from, duration, to;
                    return (/*@__PURE__*/$parcel$interopDefault($d879137c8c0a0e40$exports)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _this.wrapper.classList.add('animation-pan-zoom');
                                if (!(typeof options.from !== 'undefined')) {
                                    _ctx.next = 11;
                                    break;
                                }
                                _ctx.prev = 2;
                                from = options.from;
                                _this.setDefinedCssProperties(0, from);
                                _ctx.next = 7;
                                return new Promise(function(resolve) {
                                    requestAnimationFrame(resolve);
                                });
                            case 7:
                                _ctx.next = 11;
                                break;
                            case 9:
                                _ctx.prev = 9;
                                _ctx.t0 = _ctx["catch"](2);
                            case 11:
                                if (!_this.isCancelled()) {
                                    duration = options.duration, to = options.to;
                                    _this.setDefinedCssProperties(duration, to);
                                    _this.endHandler = function(param) {
                                        var animationName = param.animationName;
                                        if (animationName === 'animation-pan-zoom-animation') _this.end();
                                    };
                                    _this.cancelHandler = function(param) {
                                        var animationName = param.animationName;
                                        if (animationName === 'animation-pan-zoom-animation') _this.cancel();
                                    };
                                    _this.wrapper.addEventListener('animationend', _this.endHandler);
                                    _this.wrapper.addEventListener('animationcancel', _this.cancelHandler);
                                }
                            case 12:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, null, [
                        [
                            2,
                            9
                        ]
                    ]);
                }))();
            }
        },
        {
            key: "setDefinedCssProperties",
            value: function setDefinedCssProperties(duration, param) {
                var x = param.x, y = param.y, scale = param.scale;
                var ref = this, w = ref.wrapper;
                var s = $636d273b8808a746$var$setCSSPropertyIfDefined;
                s(w, '--animation-pan-zoom-duration', function(v) {
                    return "".concat(v, "s");
                }, duration);
                s(w, '--animation-pan-zoom-target-x', function(v) {
                    return "".concat(v);
                }, x);
                s(w, '--animation-pan-zoom-target-y', function(v) {
                    return "".concat(v);
                }, y);
                s(w, '--animation-pan-zoom-target-scale', function(v) {
                    return "".concat(v);
                }, scale);
            }
        },
        {
            key: "end",
            value: function end() {
                if (!this.isCancelled() && !this.isDone()) {
                    this.cleanup();
                    this._isDone = true;
                    this.donePEC.resolve();
                }
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                if (!this.isCancelled() && !this.isDone()) {
                    this.cleanup();
                    this._isCancelled = true;
                    this.donePEC.reject();
                }
            }
        },
        {
            key: "cleanup",
            value: function cleanup() {
                var wrapper = this.wrapper;
                wrapper.addEventListener('animationend', this.endHandler);
                wrapper.addEventListener('animationcancel', this.cancelHandler);
            /**
     * We do not remove the CSS classes and custom properties to keep the
     * forwards fill-mode of the animation (target state).
     */ }
        }
    ], [
        {
            key: "unpack",
            value: function unpack(options) {
                return options;
            }
        },
        {
            key: "prepare",
            value: function prepare(options) {
                var unpackedOptions = $636d273b8808a746$export$2e2bcd8739ae039.unpack(options);
                return function(wrapper, content) {
                    return new $636d273b8808a746$export$2e2bcd8739ae039(wrapper, content, unpackedOptions);
                };
            }
        },
        {
            key: "getStyleSheetAsString",
            value: function getStyleSheetAsString() {
                return (/*@__PURE__*/$parcel$interopDefault($6525266f74fdbe32$exports));
            }
        }
    ]);
    return $636d273b8808a746$export$2e2bcd8739ae039;
}($986d6415242143b5$export$2e2bcd8739ae039);


var $947a1218f0540c0d$export$c11ebe2b2060f51f = /*#__PURE__*/ function() {
    "use strict";
    function $947a1218f0540c0d$export$c11ebe2b2060f51f(root) {
        $0605ccfdbc7c3e55$export$2e2bcd8739ae039(this, $947a1218f0540c0d$export$c11ebe2b2060f51f);
        $f8afd350de1754e4$export$2e2bcd8739ae039(this, "animationRegistry", new Map());
        this.root = root;
        this.registerKnownTransitions();
    }
    $a68932d12b922dac$export$2e2bcd8739ae039($947a1218f0540c0d$export$c11ebe2b2060f51f, [
        {
            key: "registerKnownTransitions",
            value: function registerKnownTransitions() {
                this.register('none', $cefdd9f8c914c768$export$a27a75f1864d99f4);
                this.register('pan-zoom', $636d273b8808a746$export$2e2bcd8739ae039);
            }
        },
        {
            key: "register",
            value: function register(id, AnimationClass) {
                if (this.animationRegistry.has(id)) throw new Error('Animation type already registered');
                $72ec348ae82af3ab$export$c2aff9e92362a9b2(this.root, AnimationClass.getStyleSheetAsString(), "animation-".concat(id));
                this.animationRegistry.set(id, AnimationClass);
            }
        },
        {
            key: "prepare",
            value: function prepare() {
                var type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'none', options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var AnimationClass = this.animationRegistry.get(type);
                if (!AnimationClass) throw new Error("Unknown animation type: ".concat(type));
                // unpacks the options and throws an exception if they are invalid,
                // but does create the actual transition yet
                return AnimationClass.prepare(options);
            }
        }
    ]);
    return $947a1218f0540c0d$export$c11ebe2b2060f51f;
}();



var $e884c555a19b5150$export$2e2bcd8739ae039 = /*#__PURE__*/ function(Base) {
    "use strict";
    $effcad08cfe0ab79$export$2e2bcd8739ae039($e884c555a19b5150$export$2e2bcd8739ae039, Base);
    var _super = $e8bccef633e20608$export$2e2bcd8739ae039($e884c555a19b5150$export$2e2bcd8739ae039);
    function $e884c555a19b5150$export$2e2bcd8739ae039(state) {
        $0605ccfdbc7c3e55$export$2e2bcd8739ae039(this, $e884c555a19b5150$export$2e2bcd8739ae039);
        var _this;
        _this = _super.call(this, state);
        _this.transitionFactory = new $5213b4f15a3aca51$export$2e2bcd8739ae039(state.shadowRoot);
        _this.animationFactory = new $947a1218f0540c0d$export$c11ebe2b2060f51f(state.shadowRoot);
        _this.transition = new $50da7db669fa616d$export$2e2bcd8739ae039();
        _this.animation = new $cefdd9f8c914c768$export$a27a75f1864d99f4();
        var dummy = document.createElement('div');
        _this.current = _this.appendCurrentContent(dummy, 'black');
        return _this;
    }
    $a68932d12b922dac$export$2e2bcd8739ae039($e884c555a19b5150$export$2e2bcd8739ae039, [
        {
            key: "removePrevious",
            value: function removePrevious() {
                // keep only current content
                var container = this.state.container;
                while(container.children.length > 1)container.children[0].remove();
            }
        },
        {
            key: "cleanup",
            value: function cleanup() {
                this.transition.cancel();
                this.animation.cancel();
                this.removePrevious();
            }
        },
        {
            key: "appendCurrentContent",
            value: function appendCurrentContent(content, color) {
                var animation = document.createElement('div');
                animation.classList.add('animation');
                animation.appendChild(content);
                var transition = document.createElement('div');
                transition.classList.add('transition');
                transition.style.setProperty('--transition-background-color', color);
                transition.appendChild(animation);
                var container = this.state.container;
                container.appendChild(transition);
                return {
                    transition: transition,
                    animation: animation,
                    content: content
                };
            }
        },
        {
            key: "execute",
            value: function execute(arg) {
                var _this = this;
                return $c48a0955cd50cee1$export$2e2bcd8739ae039((/*@__PURE__*/$parcel$interopDefault($d879137c8c0a0e40$exports)).mark(function _callee() {
                    var mimetype, url, fit, color, transitionCreator, animationCreator, content, previous, msg;
                    return (/*@__PURE__*/$parcel$interopDefault($d879137c8c0a0e40$exports)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                mimetype = arg.mimetype, url = arg.url, fit = arg.fit, color = arg.color;
                                transitionCreator = _this.prepareTransition(arg);
                                animationCreator = _this.prepareAnimation(arg);
                                content = $a4fe968956461d81$export$c86220c67bdb4242.create(mimetype, url, fit);
                                _ctx.prev = 4;
                                _ctx.next = 7;
                                return $a4fe968956461d81$export$c86220c67bdb4242.awaitLoad(content);
                            case 7:
                                _ctx.next = 12;
                                break;
                            case 9:
                                _ctx.prev = 9;
                                _ctx.t0 = _ctx["catch"](4);
                                _this.state.log.warn('Waiting for content to load failed. Proceeding anyway.');
                            case 12:
                                _this.cleanup();
                                previous = _this.current;
                                _this.current = _this.appendCurrentContent(content, color !== null && color !== void 0 ? color : 'black');
                                _this.transition = _this.createTransition(transitionCreator, previous);
                                _ctx.prev = 16;
                                _ctx.next = 19;
                                return _this.transition.targetVisible();
                            case 19:
                                _ctx.next = 24;
                                break;
                            case 21:
                                _ctx.prev = 21;
                                _ctx.t1 = _ctx["catch"](16);
                                _this.state.log.warn('Waiting for target to become visible failed. Proceeding anyway.');
                            case 24:
                                $a4fe968956461d81$export$c86220c67bdb4242.play(content);
                                _this.animation = _this.createAnimation(animationCreator);
                                _ctx.prev = 26;
                                _ctx.next = 29;
                                return _this.transition.done();
                            case 29:
                                _ctx.next = 35;
                                break;
                            case 31:
                                _ctx.prev = 31;
                                _ctx.t2 = _ctx["catch"](26);
                                msg = 'Waiting for transition to end failed. Proceeding anyway';
                                if (_ctx.t2) _this.state.log.warn(msg, _ctx.t2);
                                else _this.state.log.warn(msg);
                            case 35:
                                _this.removePrevious();
                            case 36:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, null, [
                        [
                            4,
                            9
                        ],
                        [
                            16,
                            21
                        ],
                        [
                            26,
                            31
                        ]
                    ]);
                }))();
            }
        },
        {
            key: "prepareTransition",
            value: function prepareTransition(arg) {
                var transition = arg.transition;
                var ref = transition !== null && transition !== void 0 ? transition : {
                    type: 'none',
                    options: {}
                }, type = ref.type, options = ref.options;
                return this.transitionFactory.prepare(type, options);
            }
        },
        {
            key: "prepareAnimation",
            value: function prepareAnimation(arg) {
                var animation = arg.animation;
                var ref = animation !== null && animation !== void 0 ? animation : {
                    type: 'none',
                    options: {}
                }, type = ref.type, options = ref.options;
                return this.animationFactory.prepare(type, options);
            }
        },
        {
            key: "createTransition",
            value: function createTransition(creator, previous) {
                var container = this.state.container;
                var from = previous.transition;
                var to = this.current.transition;
                return creator(container, from, to);
            }
        },
        {
            key: "createAnimation",
            value: function createAnimation(creator) {
                var _current = this.current, wrapper = _current.animation, content = _current.content;
                return creator(wrapper, content);
            }
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "unpack",
            value: function unpack(arg) {
                if (typeof arg !== 'object') throw new TypeError('ShowAction.unpack(arg): arg must be an object');
                // TODO: further type checking
                return arg;
            }
        }
    ]);
    return $e884c555a19b5150$export$2e2bcd8739ae039;
}($05dbe9138e03b67e$export$2e2bcd8739ae039);



var $674181ad764611f6$export$2e2bcd8739ae039 = /*#__PURE__*/ function(HTMLElement) {
    "use strict";
    $effcad08cfe0ab79$export$2e2bcd8739ae039($674181ad764611f6$export$2e2bcd8739ae039, HTMLElement);
    var _super = $e8bccef633e20608$export$2e2bcd8739ae039($674181ad764611f6$export$2e2bcd8739ae039);
    function $674181ad764611f6$export$2e2bcd8739ae039() {
        $0605ccfdbc7c3e55$export$2e2bcd8739ae039(this, $674181ad764611f6$export$2e2bcd8739ae039);
        var _this;
        _this = _super.call(this);
        var shadowRoot = _this.attachShadow({
            mode: 'open'
        });
        $72ec348ae82af3ab$export$c2aff9e92362a9b2(shadowRoot, (/*@__PURE__*/$parcel$interopDefault($ca8d0949b1cd3125$exports)));
        var container = document.createElement('div');
        container.classList.add('container');
        shadowRoot.appendChild(container);
        _this.state = {
            log: new $32c6ed2f89c095a2$export$2e2bcd8739ae039($32c6ed2f89c095a2$export$243e62d78d3b544d.WARN),
            shadowRoot: shadowRoot,
            container: container
        };
        _this.actionRegistry = _this.createActionRegistry();
        return _this;
    }
    $a68932d12b922dac$export$2e2bcd8739ae039($674181ad764611f6$export$2e2bcd8739ae039, [
        {
            key: "createActionRegistry",
            value: function createActionRegistry() {
                var registry = new Map();
                registry.set('reload', new $2b8dc696c791db97$export$2e2bcd8739ae039(this.state));
                registry.set('preload', new $97d569b32ac29f5c$export$2e2bcd8739ae039(this.state));
                registry.set('show', new $e884c555a19b5150$export$2e2bcd8739ae039(this.state));
                return registry;
            }
        },
        {
            key: "execute",
            value: function execute(action, arg) {
                var _this = this;
                return $c48a0955cd50cee1$export$2e2bcd8739ae039((/*@__PURE__*/$parcel$interopDefault($d879137c8c0a0e40$exports)).mark(function _callee() {
                    return (/*@__PURE__*/$parcel$interopDefault($d879137c8c0a0e40$exports)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return _this.executeImpl(action, arg);
                            case 2:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "executeImpl",
            value: function executeImpl(actionName, arg) {
                var _this = this;
                return $c48a0955cd50cee1$export$2e2bcd8739ae039((/*@__PURE__*/$parcel$interopDefault($d879137c8c0a0e40$exports)).mark(function _callee() {
                    var action, executor;
                    return (/*@__PURE__*/$parcel$interopDefault($d879137c8c0a0e40$exports)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                action = _this.actionRegistry.get(actionName);
                                if (!action) {
                                    _ctx.next = 7;
                                    break;
                                }
                                executor = action.buildExecutor(arg);
                                _ctx.next = 5;
                                return executor();
                            case 5:
                                _ctx.next = 8;
                                break;
                            case 7:
                                throw new TypeError('HilbertGalleryViewer.execute(): unknown action');
                            case 8:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return $674181ad764611f6$export$2e2bcd8739ae039;
}($1d9fb59c767d6276$export$2e2bcd8739ae039(HTMLElement));
customElements.define('hilbert-gallery-viewer', $674181ad764611f6$export$2e2bcd8739ae039);



$parcel$exportWildcard(module.exports, $674181ad764611f6$exports);
$parcel$exportWildcard(module.exports, $a78389b36f1c04ad$exports);


//# sourceMappingURL=hilbert-gallery-viewer.js.map
