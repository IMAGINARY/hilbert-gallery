(function () {
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
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
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire09b2"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire09b2"] = parcelRequire;
}
parcelRequire.register("4FUon", function(module, exports) {

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $jdvqV = parcelRequire("jdvqV");

var $7l5ho = parcelRequire("7l5ho");

var $5sttm = parcelRequire("5sttm");

var $8oBD6 = parcelRequire("8oBD6");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = void 0;

var $8JMM5 = parcelRequire("8JMM5");

var $jeXeZ = parcelRequire("jeXeZ");

var $cArUi = parcelRequire("cArUi");

var $jz1jr = parcelRequire("jz1jr");
var META_SUPPORT_DATA = [
    "/properties"
];
var META_SCHEMA_ID = "http://json-schema.org/draft-07/schema";
var Ajv = /*#__PURE__*/ function(_default) {
    (0, $5sttm.default)(Ajv1, _default);
    var _super = (0, $8oBD6.default)(Ajv1);
    function Ajv1() {
        (0, $f3yih.default)(this, Ajv1);
        return _super.apply(this, arguments);
    }
    (0, $2x3qu.default)(Ajv1, [
        {
            key: "_addVocabularies",
            value: function _addVocabularies() {
                var _this = this;
                (0, $jdvqV.default)((0, $7l5ho.default)(Ajv1.prototype), "_addVocabularies", this).call(this);
                $jeXeZ.default.forEach(function(v) {
                    return _this.addVocabulary(v);
                });
                if (this.opts.discriminator) this.addKeyword($cArUi.default);
            }
        },
        {
            key: "_addDefaultMetaSchema",
            value: function _addDefaultMetaSchema() {
                (0, $jdvqV.default)((0, $7l5ho.default)(Ajv1.prototype), "_addDefaultMetaSchema", this).call(this);
                if (!this.opts.meta) return;
                var metaSchema = this.opts.$data ? this.$dataMetaSchema($jz1jr, META_SUPPORT_DATA) : $jz1jr;
                this.addMetaSchema(metaSchema, META_SCHEMA_ID, false);
                this.refs["http://json-schema.org/schema"] = META_SCHEMA_ID;
            }
        },
        {
            key: "defaultMeta",
            value: function defaultMeta() {
                return this.opts.defaultMeta = (0, $jdvqV.default)((0, $7l5ho.default)(Ajv1.prototype), "defaultMeta", this).call(this) || (this.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : undefined);
            }
        }
    ]);
    return Ajv1;
}($8JMM5.default);
module.exports = exports = Ajv;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Ajv;

var $5KqkP = parcelRequire("5KqkP");
Object.defineProperty(exports, "KeywordCxt", {
    enumerable: true,
    get: function get() {
        return $5KqkP.KeywordCxt;
    }
});

var $jkIFZ = parcelRequire("jkIFZ");
Object.defineProperty(exports, "_", {
    enumerable: true,
    get: function get() {
        return $jkIFZ._;
    }
});
Object.defineProperty(exports, "str", {
    enumerable: true,
    get: function get() {
        return $jkIFZ.str;
    }
});
Object.defineProperty(exports, "stringify", {
    enumerable: true,
    get: function get() {
        return $jkIFZ.stringify;
    }
});
Object.defineProperty(exports, "nil", {
    enumerable: true,
    get: function get() {
        return $jkIFZ.nil;
    }
});
Object.defineProperty(exports, "Name", {
    enumerable: true,
    get: function get() {
        return $jkIFZ.Name;
    }
});
Object.defineProperty(exports, "CodeGen", {
    enumerable: true,
    get: function get() {
        return $jkIFZ.CodeGen;
    }
});

});
parcelRequire.register("f3yih", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $6aa3c0564840f286$export$2e2bcd8739ae039; });
function $6aa3c0564840f286$export$2e2bcd8739ae039(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

});

parcelRequire.register("2x3qu", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $6f0820cdeb9960e7$export$2e2bcd8739ae039; });
function $6f0820cdeb9960e7$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $6f0820cdeb9960e7$export$2e2bcd8739ae039(Constructor, protoProps, staticProps) {
    if (protoProps) $6f0820cdeb9960e7$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $6f0820cdeb9960e7$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}

});

parcelRequire.register("jdvqV", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $5dfeb5b9e9e529c0$export$2e2bcd8739ae039; });

var $bl2nu = parcelRequire("bl2nu");
function $5dfeb5b9e9e529c0$var$get(target1, property1, receiver1) {
    if (typeof Reflect !== "undefined" && Reflect.get) $5dfeb5b9e9e529c0$var$get = Reflect.get;
    else $5dfeb5b9e9e529c0$var$get = function get(target, property, receiver) {
        var base = (0, $bl2nu.default)(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(receiver || target);
        return desc.value;
    };
    return $5dfeb5b9e9e529c0$var$get(target1, property1, receiver1);
}
function $5dfeb5b9e9e529c0$export$2e2bcd8739ae039(target, property, receiver) {
    return $5dfeb5b9e9e529c0$var$get(target, property, receiver);
}

});
parcelRequire.register("bl2nu", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $a332ab3f2edf3fbe$export$2e2bcd8739ae039; });

var $7l5ho = parcelRequire("7l5ho");
function $a332ab3f2edf3fbe$export$2e2bcd8739ae039(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = (0, $7l5ho.default)(object);
        if (object === null) break;
    }
    return object;
}

});
parcelRequire.register("7l5ho", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $262567e99b591e65$export$2e2bcd8739ae039; });
function $262567e99b591e65$var$getPrototypeOf(o1) {
    $262567e99b591e65$var$getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $262567e99b591e65$var$getPrototypeOf(o1);
}
function $262567e99b591e65$export$2e2bcd8739ae039(o) {
    return $262567e99b591e65$var$getPrototypeOf(o);
}

});



parcelRequire.register("5sttm", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $efae6b6b0aa00f77$export$2e2bcd8739ae039; });

var $1yDKB = parcelRequire("1yDKB");
function $efae6b6b0aa00f77$export$2e2bcd8739ae039(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) (0, $1yDKB.default)(subClass, superClass);
}

});
parcelRequire.register("1yDKB", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $7a77569674c5bed4$export$2e2bcd8739ae039; });
function $7a77569674c5bed4$var$setPrototypeOf(o1, p1) {
    $7a77569674c5bed4$var$setPrototypeOf = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $7a77569674c5bed4$var$setPrototypeOf(o1, p1);
}
function $7a77569674c5bed4$export$2e2bcd8739ae039(o, p) {
    return $7a77569674c5bed4$var$setPrototypeOf(o, p);
}

});


parcelRequire.register("8oBD6", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $ece2b86df807edfa$export$2e2bcd8739ae039; });

var $elF5t = parcelRequire("elF5t");

var $7l5ho = parcelRequire("7l5ho");

var $ltwOQ = parcelRequire("ltwOQ");
function $ece2b86df807edfa$export$2e2bcd8739ae039(Derived) {
    var hasNativeReflectConstruct = (0, $elF5t.default)();
    return function _createSuperInternal() {
        var Super = (0, $7l5ho.default)(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = (0, $7l5ho.default)(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return (0, $ltwOQ.default)(this, result);
    };
}

});
parcelRequire.register("elF5t", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $be97a851f644eca8$export$2e2bcd8739ae039; });
function $be97a851f644eca8$export$2e2bcd8739ae039() {
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

});

parcelRequire.register("ltwOQ", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $abc8e6f6080d4d93$export$2e2bcd8739ae039; });

var $apDhX = parcelRequire("apDhX");

var $9zKh9 = parcelRequire("9zKh9");
function $abc8e6f6080d4d93$export$2e2bcd8739ae039(self, call) {
    if (call && ((0, $9zKh9.default)(call) === "object" || typeof call === "function")) return call;
    return (0, $apDhX.default)(self);
}

});
parcelRequire.register("apDhX", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $5339cb3e0cfdd7e8$export$2e2bcd8739ae039; });
function $5339cb3e0cfdd7e8$export$2e2bcd8739ae039(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}

});

parcelRequire.register("9zKh9", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $a6e241155ed64a76$export$2e2bcd8739ae039; });
function $a6e241155ed64a76$export$2e2bcd8739ae039(obj) {
    "@swc/helpers - typeof";
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}

});



parcelRequire.register("8JMM5", function(module, exports) {

var $dzBOF = parcelRequire("dzBOF");

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $1he00 = parcelRequire("1he00");

var $8zIXb = parcelRequire("8zIXb");

var $9zKh9 = parcelRequire("9zKh9");

var $aT4ZK = parcelRequire("aT4ZK");
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.CodeGen = module.exports.Name = module.exports.nil = module.exports.stringify = module.exports.str = module.exports._ = module.exports.KeywordCxt = void 0;

var $5KqkP = parcelRequire("5KqkP");
Object.defineProperty(module.exports, "KeywordCxt", {
    enumerable: true,
    get: function get() {
        return $5KqkP.KeywordCxt;
    }
});

var $jkIFZ = parcelRequire("jkIFZ");
Object.defineProperty(module.exports, "_", {
    enumerable: true,
    get: function get() {
        return $jkIFZ._;
    }
});
Object.defineProperty(module.exports, "str", {
    enumerable: true,
    get: function get() {
        return $jkIFZ.str;
    }
});
Object.defineProperty(module.exports, "stringify", {
    enumerable: true,
    get: function get() {
        return $jkIFZ.stringify;
    }
});
Object.defineProperty(module.exports, "nil", {
    enumerable: true,
    get: function get() {
        return $jkIFZ.nil;
    }
});
Object.defineProperty(module.exports, "Name", {
    enumerable: true,
    get: function get() {
        return $jkIFZ.Name;
    }
});
Object.defineProperty(module.exports, "CodeGen", {
    enumerable: true,
    get: function get() {
        return $jkIFZ.CodeGen;
    }
});

var $jz3Xm = parcelRequire("jz3Xm");

var $2FExk = parcelRequire("2FExk");

var $dUDQb = parcelRequire("dUDQb");

var $9JBGp = parcelRequire("9JBGp");

var $jkIFZ = parcelRequire("jkIFZ");

var $5Jgc6 = parcelRequire("5Jgc6");

var $6PO8h = parcelRequire("6PO8h");

var $eF2Jh = parcelRequire("eF2Jh");

var $86QIA = parcelRequire("86QIA");

var $14LXY = parcelRequire("14LXY");
var $65c85c55bceef1cd$var$defaultRegExp = function(str, flags) {
    return new RegExp(str, flags);
};
$65c85c55bceef1cd$var$defaultRegExp.code = "new RegExp";
var $65c85c55bceef1cd$var$META_IGNORE_OPTIONS = [
    "removeAdditional",
    "useDefaults",
    "coerceTypes"
];
var $65c85c55bceef1cd$var$EXT_SCOPE_NAMES = new Set([
    "validate",
    "serialize",
    "parse",
    "wrapper",
    "root",
    "schema",
    "keyword",
    "pattern",
    "formats",
    "validate$data",
    "func",
    "obj",
    "Error", 
]);
var $65c85c55bceef1cd$var$removedOptions = {
    errorDataPath: "",
    format: "`validateFormats: false` can be used instead.",
    nullable: '"nullable" keyword is supported by default.',
    jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
    extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
    missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
    processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
    sourceCode: "Use option `code: {source: true}`",
    strictDefaults: "It is default now, see option `strict`.",
    strictKeywords: "It is default now, see option `strict`.",
    uniqueItems: '"uniqueItems" keyword is always validated.',
    unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
    cache: "Map is used as cache, schema object as key.",
    serialize: "Map is used as cache, schema object as key.",
    ajvErrors: "It is default now."
};
var $65c85c55bceef1cd$var$deprecatedOptions = {
    ignoreKeywordsWithRef: "",
    jsPropertySyntax: "",
    unicode: '"minLength"/"maxLength" account for unicode characters by default.'
};
var $65c85c55bceef1cd$var$MAX_EXPRESSION = 200;
// eslint-disable-next-line complexity
function $65c85c55bceef1cd$var$requiredOptions(o) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
    var s = o.strict;
    var _optz = (_a = o.code) === null || _a === void 0 ? void 0 : _a.optimize;
    var optimize = _optz === true || _optz === undefined ? 1 : _optz || 0;
    var regExp = (_c = (_b = o.code) === null || _b === void 0 ? void 0 : _b.regExp) !== null && _c !== void 0 ? _c : $65c85c55bceef1cd$var$defaultRegExp;
    var uriResolver = (_d = o.uriResolver) !== null && _d !== void 0 ? _d : $14LXY.default;
    return {
        strictSchema: (_f = (_e = o.strictSchema) !== null && _e !== void 0 ? _e : s) !== null && _f !== void 0 ? _f : true,
        strictNumbers: (_h = (_g = o.strictNumbers) !== null && _g !== void 0 ? _g : s) !== null && _h !== void 0 ? _h : true,
        strictTypes: (_k = (_j = o.strictTypes) !== null && _j !== void 0 ? _j : s) !== null && _k !== void 0 ? _k : "log",
        strictTuples: (_m = (_l = o.strictTuples) !== null && _l !== void 0 ? _l : s) !== null && _m !== void 0 ? _m : "log",
        strictRequired: (_p = (_o = o.strictRequired) !== null && _o !== void 0 ? _o : s) !== null && _p !== void 0 ? _p : false,
        code: o.code ? (0, $8zIXb.default)((0, $1he00.default)({}, o.code), {
            optimize: optimize,
            regExp: regExp
        }) : {
            optimize: optimize,
            regExp: regExp
        },
        loopRequired: (_q = o.loopRequired) !== null && _q !== void 0 ? _q : $65c85c55bceef1cd$var$MAX_EXPRESSION,
        loopEnum: (_r = o.loopEnum) !== null && _r !== void 0 ? _r : $65c85c55bceef1cd$var$MAX_EXPRESSION,
        meta: (_s = o.meta) !== null && _s !== void 0 ? _s : true,
        messages: (_t = o.messages) !== null && _t !== void 0 ? _t : true,
        inlineRefs: (_u = o.inlineRefs) !== null && _u !== void 0 ? _u : true,
        schemaId: (_v = o.schemaId) !== null && _v !== void 0 ? _v : "$id",
        addUsedSchema: (_w = o.addUsedSchema) !== null && _w !== void 0 ? _w : true,
        validateSchema: (_x = o.validateSchema) !== null && _x !== void 0 ? _x : true,
        validateFormats: (_y = o.validateFormats) !== null && _y !== void 0 ? _y : true,
        unicodeRegExp: (_z = o.unicodeRegExp) !== null && _z !== void 0 ? _z : true,
        int32range: (_0 = o.int32range) !== null && _0 !== void 0 ? _0 : true,
        uriResolver: uriResolver
    };
}
var $65c85c55bceef1cd$var$Ajv = /*#__PURE__*/ function() {
    function Ajv() {
        var opts = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        (0, $f3yih.default)(this, Ajv);
        this.schemas = {};
        this.refs = {};
        this.formats = {};
        this._compilations = new Set();
        this._loading = {};
        this._cache = new Map();
        opts = this.opts = (0, $1he00.default)({}, opts, $65c85c55bceef1cd$var$requiredOptions(opts));
        var _code = this.opts.code, es5 = _code.es5, lines = _code.lines;
        this.scope = new $jkIFZ.ValueScope({
            scope: {},
            prefixes: $65c85c55bceef1cd$var$EXT_SCOPE_NAMES,
            es5: es5,
            lines: lines
        });
        this.logger = $65c85c55bceef1cd$var$getLogger(opts.logger);
        var formatOpt = opts.validateFormats;
        opts.validateFormats = false;
        this.RULES = (0, $dUDQb.getRules)();
        $65c85c55bceef1cd$var$checkOptions.call(this, $65c85c55bceef1cd$var$removedOptions, opts, "NOT SUPPORTED");
        $65c85c55bceef1cd$var$checkOptions.call(this, $65c85c55bceef1cd$var$deprecatedOptions, opts, "DEPRECATED", "warn");
        this._metaOpts = $65c85c55bceef1cd$var$getMetaSchemaOptions.call(this);
        if (opts.formats) $65c85c55bceef1cd$var$addInitialFormats.call(this);
        this._addVocabularies();
        this._addDefaultMetaSchema();
        if (opts.keywords) $65c85c55bceef1cd$var$addInitialKeywords.call(this, opts.keywords);
        if (typeof opts.meta == "object") this.addMetaSchema(opts.meta);
        $65c85c55bceef1cd$var$addInitialSchemas.call(this);
        opts.validateFormats = formatOpt;
    }
    (0, $2x3qu.default)(Ajv, [
        {
            key: "_addVocabularies",
            value: function _addVocabularies() {
                this.addKeyword("$async");
            }
        },
        {
            key: "_addDefaultMetaSchema",
            value: function _addDefaultMetaSchema() {
                var _opts = this.opts, $data = _opts.$data, meta = _opts.meta, schemaId = _opts.schemaId;
                var _dataRefSchema = $86QIA;
                if (schemaId === "id") {
                    _dataRefSchema = (0, $1he00.default)({}, $86QIA);
                    _dataRefSchema.id = _dataRefSchema.$id;
                    delete _dataRefSchema.$id;
                }
                if (meta && $data) this.addMetaSchema(_dataRefSchema, _dataRefSchema[schemaId], false);
            }
        },
        {
            key: "defaultMeta",
            value: function defaultMeta() {
                var _opts = this.opts, meta = _opts.meta, schemaId = _opts.schemaId;
                return this.opts.defaultMeta = typeof meta == "object" ? meta[schemaId] || meta : undefined;
            }
        },
        {
            key: "validate",
            value: function validate(schemaKeyRef, data // to be validated
            ) {
                var v;
                if (typeof schemaKeyRef == "string") {
                    v = this.getSchema(schemaKeyRef);
                    if (!v) throw new Error('no schema with key or ref "'.concat(schemaKeyRef, '"'));
                } else v = this.compile(schemaKeyRef);
                var valid = v(data);
                if (!("$async" in v)) this.errors = v.errors;
                return valid;
            }
        },
        {
            key: "compile",
            value: function compile(schema, _meta) {
                var sch = this._addSchema(schema, _meta);
                return sch.validate || this._compileSchemaEnv(sch);
            }
        },
        {
            key: "compileAsync",
            value: function compileAsync(schema, meta) {
                var checkLoaded = function checkLoaded(param) {
                    var ref = param.missingSchema, missingRef = param.missingRef;
                    if (this.refs[ref]) {
                        throw new Error("AnySchema ".concat(ref, " is loaded but ").concat(missingRef, " cannot be resolved"));
                    }
                };
                if (typeof this.opts.loadSchema != "function") throw new Error("options.loadSchema should be a function");
                var loadSchema = this.opts.loadSchema;
                return runCompileAsync.call(this, schema, meta);
                function runCompileAsync(_schema, _meta) {
                    return _runCompileAsync.apply(this, arguments);
                }
                function _runCompileAsync() {
                    _runCompileAsync = (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee(_schema, _meta) {
                        var sch;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return loadMetaSchema.call(this, _schema.$schema);
                                case 2:
                                    sch = this._addSchema(_schema, _meta);
                                    return _ctx.abrupt("return", sch.validate || _compileAsync.call(this, sch));
                                case 4:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee, this);
                    }));
                    return _runCompileAsync.apply(this, arguments);
                }
                function loadMetaSchema($ref) {
                    return _loadMetaSchema.apply(this, arguments);
                }
                function _loadMetaSchema() {
                    _loadMetaSchema = (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee($ref) {
                        return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    if (!($ref && !this.getSchema($ref))) {
                                        _ctx.next = 3;
                                        break;
                                    }
                                    _ctx.next = 3;
                                    return runCompileAsync.call(this, {
                                        $ref: $ref
                                    }, true);
                                case 3:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee, this);
                    }));
                    return _loadMetaSchema.apply(this, arguments);
                }
                function _compileAsync(sch) {
                    return __compileAsync.apply(this, arguments);
                }
                function __compileAsync() {
                    __compileAsync = (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee(sch) {
                        return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.prev = 0;
                                    return _ctx.abrupt("return", this._compileSchemaEnv(sch));
                                case 4:
                                    _ctx.prev = 4;
                                    _ctx.t0 = _ctx["catch"](0);
                                    if (_ctx.t0 instanceof $2FExk.default) {
                                        _ctx.next = 8;
                                        break;
                                    }
                                    throw _ctx.t0;
                                case 8:
                                    checkLoaded.call(this, _ctx.t0);
                                    _ctx.next = 11;
                                    return loadMissingSchema.call(this, _ctx.t0.missingSchema);
                                case 11:
                                    return _ctx.abrupt("return", _compileAsync.call(this, sch));
                                case 12:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee, this, [
                            [
                                0,
                                4
                            ]
                        ]);
                    }));
                    return __compileAsync.apply(this, arguments);
                }
                function loadMissingSchema(ref) {
                    return _loadMissingSchema.apply(this, arguments);
                }
                function _loadMissingSchema() {
                    _loadMissingSchema = (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee(ref) {
                        var _schema;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    _ctx.next = 2;
                                    return _loadSchema.call(this, ref);
                                case 2:
                                    _schema = _ctx.sent;
                                    if (this.refs[ref]) {
                                        _ctx.next = 6;
                                        break;
                                    }
                                    _ctx.next = 6;
                                    return loadMetaSchema.call(this, _schema.$schema);
                                case 6:
                                    if (!this.refs[ref]) this.addSchema(_schema, ref, meta);
                                case 7:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee, this);
                    }));
                    return _loadMissingSchema.apply(this, arguments);
                }
                function _loadSchema(ref) {
                    return __loadSchema.apply(this, arguments);
                }
                function __loadSchema() {
                    __loadSchema = (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee(ref) {
                        var p;
                        return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
                            while(1)switch(_ctx.prev = _ctx.next){
                                case 0:
                                    p = this._loading[ref];
                                    if (!p) {
                                        _ctx.next = 3;
                                        break;
                                    }
                                    return _ctx.abrupt("return", p);
                                case 3:
                                    _ctx.prev = 3;
                                    _ctx.next = 6;
                                    return this._loading[ref] = loadSchema(ref);
                                case 6:
                                    return _ctx.abrupt("return", _ctx.sent);
                                case 7:
                                    _ctx.prev = 7;
                                    delete this._loading[ref];
                                    return _ctx.finish(7);
                                case 10:
                                case "end":
                                    return _ctx.stop();
                            }
                        }, _callee, this, [
                            [
                                3,
                                ,
                                7,
                                10
                            ]
                        ]);
                    }));
                    return __loadSchema.apply(this, arguments);
                }
            }
        },
        {
            // Adds schema to the instance
            key: "addSchema",
            value: function addSchema(schema, key, _meta) {
                var _validateSchema = arguments.length > 3 && arguments[3] !== void 0 // false to skip schema validation. Used internally, option validateSchema should be used instead.
                 ? arguments[3] : this.opts.validateSchema;
                if (Array.isArray(schema)) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = schema[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var sch = _step.value;
                            this.addSchema(sch, undefined, _meta, _validateSchema);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                    return this;
                }
                var id;
                if (typeof schema === "object") {
                    var schemaId = this.opts.schemaId;
                    id = schema[schemaId];
                    if (id !== undefined && typeof id != "string") throw new Error("schema ".concat(schemaId, " must be string"));
                }
                key = (0, $5Jgc6.normalizeId)(key || id);
                this._checkUnique(key);
                this.schemas[key] = this._addSchema(schema, _meta, key, _validateSchema, true);
                return this;
            }
        },
        {
            // Add schema that will be used to validate other schemas
            // options in META_IGNORE_OPTIONS are alway set to false
            key: "addMetaSchema",
            value: function addMetaSchema(schema, key) {
                var _validateSchema = arguments.length > 2 && arguments[2] !== void 0 // false to skip schema validation, can be used to override validateSchema option for meta-schema
                 ? arguments[2] : this.opts.validateSchema;
                this.addSchema(schema, key, true, _validateSchema);
                return this;
            }
        },
        {
            //  Validate schema against its meta-schema
            key: "validateSchema",
            value: function validateSchema(schema, throwOrLogError) {
                if (typeof schema == "boolean") return true;
                var $schema;
                $schema = schema.$schema;
                if ($schema !== undefined && typeof $schema != "string") throw new Error("$schema must be a string");
                $schema = $schema || this.opts.defaultMeta || this.defaultMeta();
                if (!$schema) {
                    this.logger.warn("meta-schema not available");
                    this.errors = null;
                    return true;
                }
                var valid = this.validate($schema, schema);
                if (!valid && throwOrLogError) {
                    var message = "schema is invalid: " + this.errorsText();
                    if (this.opts.validateSchema === "log") this.logger.error(message);
                    else throw new Error(message);
                }
                return valid;
            }
        },
        {
            // Get compiled schema by `key` or `ref`.
            // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
            key: "getSchema",
            value: function getSchema(keyRef) {
                var sch;
                while(typeof (sch = $65c85c55bceef1cd$var$getSchEnv.call(this, keyRef)) == "string")keyRef = sch;
                if (sch === undefined) {
                    var schemaId = this.opts.schemaId;
                    var root = new $9JBGp.SchemaEnv({
                        schema: {},
                        schemaId: schemaId
                    });
                    sch = $9JBGp.resolveSchema.call(this, root, keyRef);
                    if (!sch) return;
                    this.refs[keyRef] = sch;
                }
                return sch.validate || this._compileSchemaEnv(sch);
            }
        },
        {
            // Remove cached schema(s).
            // If no parameter is passed all schemas but meta-schemas are removed.
            // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
            // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
            key: "removeSchema",
            value: function removeSchema(schemaKeyRef) {
                if (schemaKeyRef instanceof RegExp) {
                    this._removeAllSchemas(this.schemas, schemaKeyRef);
                    this._removeAllSchemas(this.refs, schemaKeyRef);
                    return this;
                }
                switch(typeof schemaKeyRef === "undefined" ? "undefined" : (0, $9zKh9.default)(schemaKeyRef)){
                    case "undefined":
                        this._removeAllSchemas(this.schemas);
                        this._removeAllSchemas(this.refs);
                        this._cache.clear();
                        return this;
                    case "string":
                        {
                            var sch = $65c85c55bceef1cd$var$getSchEnv.call(this, schemaKeyRef);
                            if (typeof sch == "object") this._cache.delete(sch.schema);
                            delete this.schemas[schemaKeyRef];
                            delete this.refs[schemaKeyRef];
                            return this;
                        }
                    case "object":
                        {
                            var cacheKey = schemaKeyRef;
                            this._cache.delete(cacheKey);
                            var id = schemaKeyRef[this.opts.schemaId];
                            if (id) {
                                id = (0, $5Jgc6.normalizeId)(id);
                                delete this.schemas[id];
                                delete this.refs[id];
                            }
                            return this;
                        }
                    default:
                        throw new Error("ajv.removeSchema: invalid parameter");
                }
            }
        },
        {
            // add "vocabulary" - a collection of keywords
            key: "addVocabulary",
            value: function addVocabulary(definitions) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = definitions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var def = _step.value;
                        this.addKeyword(def);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return this;
            }
        },
        {
            key: "addKeyword",
            value: function addKeyword(kwdOrDef, def // deprecated
            ) {
                var _this = this;
                var keyword;
                if (typeof kwdOrDef == "string") {
                    keyword = kwdOrDef;
                    if (typeof def == "object") {
                        this.logger.warn("these parameters are deprecated, see docs for addKeyword");
                        def.keyword = keyword;
                    }
                } else if (typeof kwdOrDef == "object" && def === undefined) {
                    def = kwdOrDef;
                    keyword = def.keyword;
                    if (Array.isArray(keyword) && !keyword.length) throw new Error("addKeywords: keyword must be string or non-empty array");
                } else throw new Error("invalid addKeywords parameters");
                $65c85c55bceef1cd$var$checkKeyword.call(this, keyword, def);
                if (!def) {
                    var _this1 = this;
                    (0, $eF2Jh.eachItem)(keyword, function(kwd) {
                        return $65c85c55bceef1cd$var$addRule.call(_this1, kwd);
                    });
                    return this;
                }
                $65c85c55bceef1cd$var$keywordMetaschema.call(this, def);
                var definition = (0, $8zIXb.default)((0, $1he00.default)({}, def), {
                    type: (0, $6PO8h.getJSONTypes)(def.type),
                    schemaType: (0, $6PO8h.getJSONTypes)(def.schemaType)
                });
                (0, $eF2Jh.eachItem)(keyword, definition.type.length === 0 ? function(k) {
                    return $65c85c55bceef1cd$var$addRule.call(_this, k, definition);
                } : function(k) {
                    return definition.type.forEach(function(t) {
                        return $65c85c55bceef1cd$var$addRule.call(_this, k, definition, t);
                    });
                });
                return this;
            }
        },
        {
            key: "getKeyword",
            value: function getKeyword(keyword) {
                var rule = this.RULES.all[keyword];
                return typeof rule == "object" ? rule.definition : !!rule;
            }
        },
        {
            // Remove keyword
            key: "removeKeyword",
            value: function removeKeyword(keyword) {
                // TODO return type should be Ajv
                var RULES = this.RULES;
                delete RULES.keywords[keyword];
                delete RULES.all[keyword];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = RULES.rules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var group = _step.value;
                        var i = group.rules.findIndex(function(rule) {
                            return rule.keyword === keyword;
                        });
                        if (i >= 0) group.rules.splice(i, 1);
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return this;
            }
        },
        {
            // Add format
            key: "addFormat",
            value: function addFormat(name, format) {
                if (typeof format == "string") format = new RegExp(format);
                this.formats[name] = format;
                return this;
            }
        },
        {
            key: "errorsText",
            value: function errorsText() {
                var errors = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.errors, ref // optional options with properties `separator` and `dataVar`
                 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _separator = ref.separator, separator = _separator === void 0 ? ", " : _separator, _dataVar = ref.dataVar, dataVar = _dataVar === void 0 ? "data" : _dataVar;
                if (!errors || errors.length === 0) return "No errors";
                return errors.map(function(e) {
                    return "".concat(dataVar).concat(e.instancePath, " ").concat(e.message);
                }).reduce(function(text, msg) {
                    return text + separator + msg;
                });
            }
        },
        {
            key: "$dataMetaSchema",
            value: function $dataMetaSchema(metaSchema, keywordsJsonPointers) {
                var rules = this.RULES.all;
                metaSchema = JSON.parse(JSON.stringify(metaSchema));
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = keywordsJsonPointers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var jsonPointer = _step.value;
                        var segments = jsonPointer.split("/").slice(1); // first segment is an empty string
                        var keywords = metaSchema;
                        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                        try {
                            for(var _iterator1 = segments[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                                var seg = _step1.value;
                                keywords = keywords[seg];
                            }
                        } catch (err) {
                            _didIteratorError1 = true;
                            _iteratorError1 = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError1) {
                                    throw _iteratorError1;
                                }
                            }
                        }
                        for(var key in rules){
                            var rule = rules[key];
                            if (typeof rule != "object") continue;
                            var $data = rule.definition.$data;
                            var schema = keywords[key];
                            if ($data && schema) keywords[key] = $65c85c55bceef1cd$var$schemaOrData(schema);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                return metaSchema;
            }
        },
        {
            key: "_removeAllSchemas",
            value: function _removeAllSchemas(schemas, regex) {
                for(var keyRef in schemas){
                    var sch = schemas[keyRef];
                    if (!regex || regex.test(keyRef)) {
                        if (typeof sch == "string") delete schemas[keyRef];
                        else if (sch && !sch.meta) {
                            this._cache.delete(sch.schema);
                            delete schemas[keyRef];
                        }
                    }
                }
            }
        },
        {
            key: "_addSchema",
            value: function _addSchema(schema, meta, baseId) {
                var validateSchema = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : this.opts.validateSchema, addSchema = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.opts.addUsedSchema;
                var id;
                var schemaId = this.opts.schemaId;
                if (typeof schema == "object") id = schema[schemaId];
                else {
                    if (this.opts.jtd) throw new Error("schema must be object");
                    else if (typeof schema != "boolean") throw new Error("schema must be object or boolean");
                }
                var sch = this._cache.get(schema);
                if (sch !== undefined) return sch;
                baseId = (0, $5Jgc6.normalizeId)(id || baseId);
                var localRefs = $5Jgc6.getSchemaRefs.call(this, schema, baseId);
                sch = new $9JBGp.SchemaEnv({
                    schema: schema,
                    schemaId: schemaId,
                    meta: meta,
                    baseId: baseId,
                    localRefs: localRefs
                });
                this._cache.set(sch.schema, sch);
                if (addSchema && !baseId.startsWith("#")) {
                    // TODO atm it is allowed to overwrite schemas without id (instead of not adding them)
                    if (baseId) this._checkUnique(baseId);
                    this.refs[baseId] = sch;
                }
                if (validateSchema) this.validateSchema(schema, true);
                return sch;
            }
        },
        {
            key: "_checkUnique",
            value: function _checkUnique(id) {
                if (this.schemas[id] || this.refs[id]) throw new Error('schema with key or id "'.concat(id, '" already exists'));
            }
        },
        {
            key: "_compileSchemaEnv",
            value: function _compileSchemaEnv(sch) {
                if (sch.meta) this._compileMetaSchema(sch);
                else $9JBGp.compileSchema.call(this, sch);
                /* istanbul ignore if */ if (!sch.validate) throw new Error("ajv implementation error");
                return sch.validate;
            }
        },
        {
            key: "_compileMetaSchema",
            value: function _compileMetaSchema(sch) {
                var currentOpts = this.opts;
                this.opts = this._metaOpts;
                try {
                    $9JBGp.compileSchema.call(this, sch);
                } finally{
                    this.opts = currentOpts;
                }
            }
        }
    ]);
    return Ajv;
}();
module.exports.default = $65c85c55bceef1cd$var$Ajv;
$65c85c55bceef1cd$var$Ajv.ValidationError = $jz3Xm.default;
$65c85c55bceef1cd$var$Ajv.MissingRefError = $2FExk.default;
function $65c85c55bceef1cd$var$checkOptions(checkOpts, options, msg) {
    var log = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "error";
    for(var key in checkOpts){
        var opt = key;
        if (opt in options) this.logger[log]("".concat(msg, ": option ").concat(key, ". ").concat(checkOpts[opt]));
    }
}
function $65c85c55bceef1cd$var$getSchEnv(keyRef) {
    keyRef = (0, $5Jgc6.normalizeId)(keyRef); // TODO tests fail without this line
    return this.schemas[keyRef] || this.refs[keyRef];
}
function $65c85c55bceef1cd$var$addInitialSchemas() {
    var optsSchemas = this.opts.schemas;
    if (!optsSchemas) return;
    if (Array.isArray(optsSchemas)) this.addSchema(optsSchemas);
    else for(var key in optsSchemas)this.addSchema(optsSchemas[key], key);
}
function $65c85c55bceef1cd$var$addInitialFormats() {
    for(var name in this.opts.formats){
        var format = this.opts.formats[name];
        if (format) this.addFormat(name, format);
    }
}
function $65c85c55bceef1cd$var$addInitialKeywords(defs) {
    if (Array.isArray(defs)) {
        this.addVocabulary(defs);
        return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for(var keyword in defs){
        var def = defs[keyword];
        if (!def.keyword) def.keyword = keyword;
        this.addKeyword(def);
    }
}
function $65c85c55bceef1cd$var$getMetaSchemaOptions() {
    var metaOpts = (0, $1he00.default)({}, this.opts);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = $65c85c55bceef1cd$var$META_IGNORE_OPTIONS[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var opt = _step.value;
            delete metaOpts[opt];
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return metaOpts;
}
var $65c85c55bceef1cd$var$noLogs = {
    log: function() {},
    warn: function() {},
    error: function() {}
};
function $65c85c55bceef1cd$var$getLogger(logger) {
    if (logger === false) return $65c85c55bceef1cd$var$noLogs;
    if (logger === undefined) return console;
    if (logger.log && logger.warn && logger.error) return logger;
    throw new Error("logger must implement log, warn and error methods");
}
var $65c85c55bceef1cd$var$KEYWORD_NAME = /^[a-z_$][a-z0-9_$:-]*$/i;
function $65c85c55bceef1cd$var$checkKeyword(keyword, def) {
    var RULES = this.RULES;
    (0, $eF2Jh.eachItem)(keyword, function(kwd) {
        if (RULES.keywords[kwd]) throw new Error("Keyword ".concat(kwd, " is already defined"));
        if (!$65c85c55bceef1cd$var$KEYWORD_NAME.test(kwd)) throw new Error("Keyword ".concat(kwd, " has invalid name"));
    });
    if (!def) return;
    if (def.$data && !("code" in def || "validate" in def)) throw new Error('$data keyword must have "code" or "validate" function');
}
function $65c85c55bceef1cd$var$addRule(keyword, definition, dataType) {
    var _this = this;
    var _a;
    var post = definition === null || definition === void 0 ? void 0 : definition.post;
    if (dataType && post) throw new Error('keyword with "post" flag cannot have "type"');
    var RULES = this.RULES;
    var ruleGroup = post ? RULES.post : RULES.rules.find(function(param) {
        var t = param.type;
        return t === dataType;
    });
    if (!ruleGroup) {
        ruleGroup = {
            type: dataType,
            rules: []
        };
        RULES.rules.push(ruleGroup);
    }
    RULES.keywords[keyword] = true;
    if (!definition) return;
    var rule = {
        keyword: keyword,
        definition: (0, $8zIXb.default)((0, $1he00.default)({}, definition), {
            type: (0, $6PO8h.getJSONTypes)(definition.type),
            schemaType: (0, $6PO8h.getJSONTypes)(definition.schemaType)
        })
    };
    if (definition.before) $65c85c55bceef1cd$var$addBeforeRule.call(this, ruleGroup, rule, definition.before);
    else ruleGroup.rules.push(rule);
    RULES.all[keyword] = rule;
    (_a = definition.implements) === null || _a === void 0 || _a.forEach(function(kwd) {
        return _this.addKeyword(kwd);
    });
}
function $65c85c55bceef1cd$var$addBeforeRule(ruleGroup, rule, before) {
    var i = ruleGroup.rules.findIndex(function(_rule) {
        return _rule.keyword === before;
    });
    if (i >= 0) ruleGroup.rules.splice(i, 0, rule);
    else {
        ruleGroup.rules.push(rule);
        this.logger.warn("rule ".concat(before, " is not defined"));
    }
}
function $65c85c55bceef1cd$var$keywordMetaschema(def) {
    var metaSchema = def.metaSchema;
    if (metaSchema === undefined) return;
    if (def.$data && this.opts.$data) metaSchema = $65c85c55bceef1cd$var$schemaOrData(metaSchema);
    def.validateSchema = this.compile(metaSchema, true);
}
var $65c85c55bceef1cd$var$$dataRef = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
};
function $65c85c55bceef1cd$var$schemaOrData(schema) {
    return {
        anyOf: [
            schema,
            $65c85c55bceef1cd$var$$dataRef
        ]
    };
}

});
parcelRequire.register("dzBOF", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $6c73857f2b212f04$export$2e2bcd8739ae039; });
function $6c73857f2b212f04$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
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
function $6c73857f2b212f04$export$2e2bcd8739ae039(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                $6c73857f2b212f04$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                $6c73857f2b212f04$var$asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}

});

parcelRequire.register("1he00", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $60b5d217ca74b5a7$export$2e2bcd8739ae039; });

var $3jaBu = parcelRequire("3jaBu");
function $60b5d217ca74b5a7$export$2e2bcd8739ae039(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === "function") ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            (0, $3jaBu.default)(target, key, source[key]);
        });
    }
    return target;
}

});
parcelRequire.register("3jaBu", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $5753f3702b1351dc$export$2e2bcd8739ae039; });
function $5753f3702b1351dc$export$2e2bcd8739ae039(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

});


parcelRequire.register("8zIXb", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $3618fd66bf7531e1$export$2e2bcd8739ae039; });
function $3618fd66bf7531e1$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function $3618fd66bf7531e1$export$2e2bcd8739ae039(target, source) {
    source = source != null ? source : {};
    if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    else $3618fd66bf7531e1$var$ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
    return target;
}

});

parcelRequire.register("aT4ZK", function(module, exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $7ed2ea592a2156b1$var$runtime = function(exports) {
    "use strict";
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
}(module.exports);
try {
    regeneratorRuntime = $7ed2ea592a2156b1$var$runtime;
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
    if (typeof globalThis === "object") globalThis.regeneratorRuntime = $7ed2ea592a2156b1$var$runtime;
    else Function("r", "regeneratorRuntime = r")($7ed2ea592a2156b1$var$runtime);
}

});

parcelRequire.register("5KqkP", function(module, exports) {

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $1he00 = parcelRequire("1he00");

var $8zIXb = parcelRequire("8zIXb");

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $42f5ad34b8447cd1$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "",
        ", ",
        ""
    ]);
    $42f5ad34b8447cd1$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        '"use strict"; ',
        ""
    ]);
    $42f5ad34b8447cd1$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "",
        ", ",
        ""
    ]);
    $42f5ad34b8447cd1$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject3() {
    var data = (0, $iXJoB.default)([
        ", ",
        "={}"
    ]);
    $42f5ad34b8447cd1$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject4() {
    var data = (0, $iXJoB.default)([
        "{",
        '="", ',
        ", ",
        ", ",
        "=",
        "",
        "}={}"
    ]);
    $42f5ad34b8447cd1$var$_templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject5() {
    var data = (0, $iXJoB.default)([
        "",
        ".",
        ""
    ]);
    $42f5ad34b8447cd1$var$_templateObject5 = function _templateObject5() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject6() {
    var data = (0, $iXJoB.default)([
        "",
        ".",
        ""
    ]);
    $42f5ad34b8447cd1$var$_templateObject6 = function _templateObject6() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject7() {
    var data = (0, $iXJoB.default)([
        "",
        ".",
        ""
    ]);
    $42f5ad34b8447cd1$var$_templateObject7 = function _templateObject7() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject8() {
    var data = (0, $iXJoB.default)([
        "",
        ".",
        ""
    ]);
    $42f5ad34b8447cd1$var$_templateObject8 = function _templateObject8() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject9() {
    var data = (0, $iXJoB.default)([
        "",
        ".",
        ""
    ]);
    $42f5ad34b8447cd1$var$_templateObject9 = function _templateObject9() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject10() {
    var data = (0, $iXJoB.default)([
        '""'
    ]);
    $42f5ad34b8447cd1$var$_templateObject10 = function _templateObject10() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject11() {
    var data = (0, $iXJoB.default)([
        "undefined"
    ]);
    $42f5ad34b8447cd1$var$_templateObject11 = function _templateObject11() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject12() {
    var data = (0, $iXJoB.default)([
        "undefined"
    ]);
    $42f5ad34b8447cd1$var$_templateObject12 = function _templateObject12() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject13() {
    var data = (0, $iXJoB.default)([
        "{}"
    ]);
    $42f5ad34b8447cd1$var$_templateObject13 = function _templateObject13() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject14() {
    var data = (0, $iXJoB.default)([
        "",
        ".evaluated"
    ]);
    $42f5ad34b8447cd1$var$_templateObject14 = function _templateObject14() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject15() {
    var data = (0, $iXJoB.default)([
        "",
        ".dynamicProps"
    ]);
    $42f5ad34b8447cd1$var$_templateObject15 = function _templateObject15() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject16() {
    var data = (0, $iXJoB.default)([
        "",
        ".props"
    ]);
    $42f5ad34b8447cd1$var$_templateObject16 = function _templateObject16() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject17() {
    var data = (0, $iXJoB.default)([
        "undefined"
    ]);
    $42f5ad34b8447cd1$var$_templateObject17 = function _templateObject17() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject18() {
    var data = (0, $iXJoB.default)([
        "",
        ".dynamicItems"
    ]);
    $42f5ad34b8447cd1$var$_templateObject18 = function _templateObject18() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject19() {
    var data = (0, $iXJoB.default)([
        "",
        ".items"
    ]);
    $42f5ad34b8447cd1$var$_templateObject19 = function _templateObject19() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject20() {
    var data = (0, $iXJoB.default)([
        "undefined"
    ]);
    $42f5ad34b8447cd1$var$_templateObject20 = function _templateObject20() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject21() {
    var data = (0, $iXJoB.default)([
        "/*# sourceURL=",
        " */"
    ]);
    $42f5ad34b8447cd1$var$_templateObject21 = function _templateObject21() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject22() {
    var data = (0, $iXJoB.default)([
        "",
        " === ",
        ""
    ]);
    $42f5ad34b8447cd1$var$_templateObject22 = function _templateObject22() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject23() {
    var data = (0, $iXJoB.default)([
        "",
        ".logger.log(",
        ")"
    ]);
    $42f5ad34b8447cd1$var$_templateObject23 = function _templateObject23() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject24() {
    var data = (0, $iXJoB.default)([
        "",
        "/$comment"
    ]);
    $42f5ad34b8447cd1$var$_templateObject24 = function _templateObject24() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject25() {
    var data = (0, $iXJoB.default)([
        "",
        ".opts.$comment(",
        ", ",
        ", ",
        ".schema)"
    ]);
    $42f5ad34b8447cd1$var$_templateObject25 = function _templateObject25() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject26() {
    var data = (0, $iXJoB.default)([
        "",
        " === 0"
    ]);
    $42f5ad34b8447cd1$var$_templateObject26 = function _templateObject26() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject27() {
    var data = (0, $iXJoB.default)([
        "new ",
        "(",
        ")"
    ]);
    $42f5ad34b8447cd1$var$_templateObject27 = function _templateObject27() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject28() {
    var data = (0, $iXJoB.default)([
        "",
        ".errors"
    ]);
    $42f5ad34b8447cd1$var$_templateObject28 = function _templateObject28() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject29() {
    var data = (0, $iXJoB.default)([
        "",
        " === 0"
    ]);
    $42f5ad34b8447cd1$var$_templateObject29 = function _templateObject29() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject30() {
    var data = (0, $iXJoB.default)([
        "",
        ".props"
    ]);
    $42f5ad34b8447cd1$var$_templateObject30 = function _templateObject30() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject31() {
    var data = (0, $iXJoB.default)([
        "",
        ".items"
    ]);
    $42f5ad34b8447cd1$var$_templateObject31 = function _templateObject31() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject32() {
    var data = (0, $iXJoB.default)([
        "",
        " === ",
        ""
    ]);
    $42f5ad34b8447cd1$var$_templateObject32 = function _templateObject32() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject33() {
    var data = (0, $iXJoB.default)([
        "",
        " !== undefined && (",
        ")"
    ]);
    $42f5ad34b8447cd1$var$_templateObject33 = function _templateObject33() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject34() {
    var data = (0, $iXJoB.default)([
        "",
        " === undefined"
    ]);
    $42f5ad34b8447cd1$var$_templateObject34 = function _templateObject34() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject35() {
    var data = (0, $iXJoB.default)([
        "",
        ""
    ]);
    $42f5ad34b8447cd1$var$_templateObject35 = function _templateObject35() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject36() {
    var data = (0, $iXJoB.default)([
        "!",
        "(",
        ")"
    ]);
    $42f5ad34b8447cd1$var$_templateObject36 = function _templateObject36() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject37() {
    var data = (0, $iXJoB.default)([
        "",
        "",
        ""
    ]);
    $42f5ad34b8447cd1$var$_templateObject37 = function _templateObject37() {
        return data;
    };
    return data;
}
function $42f5ad34b8447cd1$var$_templateObject38() {
    var data = (0, $iXJoB.default)([
        "",
        " && ",
        ""
    ]);
    $42f5ad34b8447cd1$var$_templateObject38 = function _templateObject38() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getData = module.exports.KeywordCxt = module.exports.validateFunctionCode = void 0;

var $d2Ahy = parcelRequire("d2Ahy");

var $6PO8h = parcelRequire("6PO8h");

var $4MXbj = parcelRequire("4MXbj");

var $6PO8h = parcelRequire("6PO8h");

var $8djet = parcelRequire("8djet");

var $hHGxT = parcelRequire("hHGxT");

var $24jGs = parcelRequire("24jGs");

var $jkIFZ = parcelRequire("jkIFZ");

var $4QYyN = parcelRequire("4QYyN");

var $5Jgc6 = parcelRequire("5Jgc6");

var $eF2Jh = parcelRequire("eF2Jh");

var $lvc7F = parcelRequire("lvc7F");
// schema compilation - generates validation function, subschemaCode (below) is used for subschemas
function $42f5ad34b8447cd1$var$validateFunctionCode(it) {
    if ($42f5ad34b8447cd1$var$isSchemaObj(it)) {
        $42f5ad34b8447cd1$var$checkKeywords(it);
        if ($42f5ad34b8447cd1$var$schemaCxtHasRules(it)) {
            $42f5ad34b8447cd1$var$topSchemaObjCode(it);
            return;
        }
    }
    $42f5ad34b8447cd1$var$validateFunction(it, function() {
        return (0, $d2Ahy.topBoolOrEmptySchema)(it);
    });
}
module.exports.validateFunctionCode = $42f5ad34b8447cd1$var$validateFunctionCode;
function $42f5ad34b8447cd1$var$validateFunction(param, body) {
    var gen = param.gen, validateName = param.validateName, schema = param.schema, schemaEnv = param.schemaEnv, opts = param.opts;
    if (opts.code.es5) gen.func(validateName, $jkIFZ._($42f5ad34b8447cd1$var$_templateObject(), $4QYyN.default.data, $4QYyN.default.valCxt), schemaEnv.$async, function() {
        gen.code($jkIFZ._($42f5ad34b8447cd1$var$_templateObject1(), $42f5ad34b8447cd1$var$funcSourceUrl(schema, opts)));
        $42f5ad34b8447cd1$var$destructureValCxtES5(gen, opts);
        gen.code(body);
    });
    else gen.func(validateName, $jkIFZ._($42f5ad34b8447cd1$var$_templateObject2(), $4QYyN.default.data, $42f5ad34b8447cd1$var$destructureValCxt(opts)), schemaEnv.$async, function() {
        return gen.code($42f5ad34b8447cd1$var$funcSourceUrl(schema, opts)).code(body);
    });
}
function $42f5ad34b8447cd1$var$destructureValCxt(opts) {
    return $jkIFZ._($42f5ad34b8447cd1$var$_templateObject4(), $4QYyN.default.instancePath, $4QYyN.default.parentData, $4QYyN.default.parentDataProperty, $4QYyN.default.rootData, $4QYyN.default.data, opts.dynamicRef ? $jkIFZ._($42f5ad34b8447cd1$var$_templateObject3(), $4QYyN.default.dynamicAnchors) : $jkIFZ.nil);
}
function $42f5ad34b8447cd1$var$destructureValCxtES5(gen, opts) {
    gen.if($4QYyN.default.valCxt, function() {
        gen.var($4QYyN.default.instancePath, $jkIFZ._($42f5ad34b8447cd1$var$_templateObject5(), $4QYyN.default.valCxt, $4QYyN.default.instancePath));
        gen.var($4QYyN.default.parentData, $jkIFZ._($42f5ad34b8447cd1$var$_templateObject6(), $4QYyN.default.valCxt, $4QYyN.default.parentData));
        gen.var($4QYyN.default.parentDataProperty, $jkIFZ._($42f5ad34b8447cd1$var$_templateObject7(), $4QYyN.default.valCxt, $4QYyN.default.parentDataProperty));
        gen.var($4QYyN.default.rootData, $jkIFZ._($42f5ad34b8447cd1$var$_templateObject8(), $4QYyN.default.valCxt, $4QYyN.default.rootData));
        if (opts.dynamicRef) gen.var($4QYyN.default.dynamicAnchors, $jkIFZ._($42f5ad34b8447cd1$var$_templateObject9(), $4QYyN.default.valCxt, $4QYyN.default.dynamicAnchors));
    }, function() {
        gen.var($4QYyN.default.instancePath, $jkIFZ._($42f5ad34b8447cd1$var$_templateObject10()));
        gen.var($4QYyN.default.parentData, $jkIFZ._($42f5ad34b8447cd1$var$_templateObject11()));
        gen.var($4QYyN.default.parentDataProperty, $jkIFZ._($42f5ad34b8447cd1$var$_templateObject12()));
        gen.var($4QYyN.default.rootData, $4QYyN.default.data);
        if (opts.dynamicRef) gen.var($4QYyN.default.dynamicAnchors, $jkIFZ._($42f5ad34b8447cd1$var$_templateObject13()));
    });
}
function $42f5ad34b8447cd1$var$topSchemaObjCode(it) {
    var schema = it.schema, opts = it.opts, gen = it.gen;
    $42f5ad34b8447cd1$var$validateFunction(it, function() {
        if (opts.$comment && schema.$comment) $42f5ad34b8447cd1$var$commentKeyword(it);
        $42f5ad34b8447cd1$var$checkNoDefault(it);
        gen.let($4QYyN.default.vErrors, null);
        gen.let($4QYyN.default.errors, 0);
        if (opts.unevaluated) $42f5ad34b8447cd1$var$resetEvaluated(it);
        $42f5ad34b8447cd1$var$typeAndKeywords(it);
        $42f5ad34b8447cd1$var$returnResults(it);
    });
    return;
}
function $42f5ad34b8447cd1$var$resetEvaluated(it) {
    // TODO maybe some hook to execute it in the end to check whether props/items are Name, as in assignEvaluated
    var gen = it.gen, validateName = it.validateName;
    it.evaluated = gen.const("evaluated", $jkIFZ._($42f5ad34b8447cd1$var$_templateObject14(), validateName));
    gen.if($jkIFZ._($42f5ad34b8447cd1$var$_templateObject15(), it.evaluated), function() {
        return gen.assign($jkIFZ._($42f5ad34b8447cd1$var$_templateObject16(), it.evaluated), $jkIFZ._($42f5ad34b8447cd1$var$_templateObject17()));
    });
    gen.if($jkIFZ._($42f5ad34b8447cd1$var$_templateObject18(), it.evaluated), function() {
        return gen.assign($jkIFZ._($42f5ad34b8447cd1$var$_templateObject19(), it.evaluated), $jkIFZ._($42f5ad34b8447cd1$var$_templateObject20()));
    });
}
function $42f5ad34b8447cd1$var$funcSourceUrl(schema, opts) {
    var schId = typeof schema == "object" && schema[opts.schemaId];
    return schId && (opts.code.source || opts.code.process) ? $jkIFZ._($42f5ad34b8447cd1$var$_templateObject21(), schId) : $jkIFZ.nil;
}
// schema compilation - this function is used recursively to generate code for sub-schemas
function $42f5ad34b8447cd1$var$subschemaCode(it, valid) {
    if ($42f5ad34b8447cd1$var$isSchemaObj(it)) {
        $42f5ad34b8447cd1$var$checkKeywords(it);
        if ($42f5ad34b8447cd1$var$schemaCxtHasRules(it)) {
            $42f5ad34b8447cd1$var$subSchemaObjCode(it, valid);
            return;
        }
    }
    (0, $d2Ahy.boolOrEmptySchema)(it, valid);
}
function $42f5ad34b8447cd1$var$schemaCxtHasRules(param) {
    var schema = param.schema, self = param.self;
    if (typeof schema == "boolean") return !schema;
    for(var key in schema)if (self.RULES.all[key]) return true;
    return false;
}
function $42f5ad34b8447cd1$var$isSchemaObj(it) {
    return typeof it.schema != "boolean";
}
function $42f5ad34b8447cd1$var$subSchemaObjCode(it, valid) {
    var schema = it.schema, gen = it.gen, opts = it.opts;
    if (opts.$comment && schema.$comment) $42f5ad34b8447cd1$var$commentKeyword(it);
    $42f5ad34b8447cd1$var$updateContext(it);
    $42f5ad34b8447cd1$var$checkAsyncSchema(it);
    var errsCount = gen.const("_errs", $4QYyN.default.errors);
    $42f5ad34b8447cd1$var$typeAndKeywords(it, errsCount);
    // TODO var
    gen.var(valid, $jkIFZ._($42f5ad34b8447cd1$var$_templateObject22(), errsCount, $4QYyN.default.errors));
}
function $42f5ad34b8447cd1$var$checkKeywords(it) {
    (0, $eF2Jh.checkUnknownRules)(it);
    $42f5ad34b8447cd1$var$checkRefsAndKeywords(it);
}
function $42f5ad34b8447cd1$var$typeAndKeywords(it, errsCount) {
    if (it.opts.jtd) return $42f5ad34b8447cd1$var$schemaKeywords(it, [], false, errsCount);
    var types = (0, $6PO8h.getSchemaTypes)(it.schema);
    var checkedTypes = (0, $6PO8h.coerceAndCheckDataType)(it, types);
    $42f5ad34b8447cd1$var$schemaKeywords(it, types, !checkedTypes, errsCount);
}
function $42f5ad34b8447cd1$var$checkRefsAndKeywords(it) {
    var schema = it.schema, errSchemaPath = it.errSchemaPath, opts = it.opts, self = it.self;
    if (schema.$ref && opts.ignoreKeywordsWithRef && (0, $eF2Jh.schemaHasRulesButRef)(schema, self.RULES)) self.logger.warn('$ref: keywords ignored in schema at path "'.concat(errSchemaPath, '"'));
}
function $42f5ad34b8447cd1$var$checkNoDefault(it) {
    var schema = it.schema, opts = it.opts;
    if (schema.default !== undefined && opts.useDefaults && opts.strictSchema) (0, $eF2Jh.checkStrictMode)(it, "default is ignored in the schema root");
}
function $42f5ad34b8447cd1$var$updateContext(it) {
    var schId = it.schema[it.opts.schemaId];
    if (schId) it.baseId = (0, $5Jgc6.resolveUrl)(it.opts.uriResolver, it.baseId, schId);
}
function $42f5ad34b8447cd1$var$checkAsyncSchema(it) {
    if (it.schema.$async && !it.schemaEnv.$async) throw new Error("async schema in sync schema");
}
function $42f5ad34b8447cd1$var$commentKeyword(param) {
    var gen = param.gen, schemaEnv = param.schemaEnv, schema = param.schema, errSchemaPath = param.errSchemaPath, opts = param.opts;
    var msg = schema.$comment;
    if (opts.$comment === true) gen.code($jkIFZ._($42f5ad34b8447cd1$var$_templateObject23(), $4QYyN.default.self, msg));
    else if (typeof opts.$comment == "function") {
        var schemaPath = $jkIFZ.str($42f5ad34b8447cd1$var$_templateObject24(), errSchemaPath);
        var rootName = gen.scopeValue("root", {
            ref: schemaEnv.root
        });
        gen.code($jkIFZ._($42f5ad34b8447cd1$var$_templateObject25(), $4QYyN.default.self, msg, schemaPath, rootName));
    }
}
function $42f5ad34b8447cd1$var$returnResults(it) {
    var gen = it.gen, schemaEnv = it.schemaEnv, validateName = it.validateName, ValidationError = it.ValidationError, opts = it.opts;
    if (schemaEnv.$async) // TODO assign unevaluated
    gen.if($jkIFZ._($42f5ad34b8447cd1$var$_templateObject26(), $4QYyN.default.errors), function() {
        return gen.return($4QYyN.default.data);
    }, function() {
        return gen.throw($jkIFZ._($42f5ad34b8447cd1$var$_templateObject27(), ValidationError, $4QYyN.default.vErrors));
    });
    else {
        gen.assign($jkIFZ._($42f5ad34b8447cd1$var$_templateObject28(), validateName), $4QYyN.default.vErrors);
        if (opts.unevaluated) $42f5ad34b8447cd1$var$assignEvaluated(it);
        gen.return($jkIFZ._($42f5ad34b8447cd1$var$_templateObject29(), $4QYyN.default.errors));
    }
}
function $42f5ad34b8447cd1$var$assignEvaluated(param) {
    var gen = param.gen, evaluated = param.evaluated, props = param.props, items = param.items;
    if (props instanceof $jkIFZ.Name) gen.assign($jkIFZ._($42f5ad34b8447cd1$var$_templateObject30(), evaluated), props);
    if (items instanceof $jkIFZ.Name) gen.assign($jkIFZ._($42f5ad34b8447cd1$var$_templateObject31(), evaluated), items);
}
function $42f5ad34b8447cd1$var$schemaKeywords(it, types, typeErrors, errsCount) {
    var groupKeywords = function groupKeywords(group) {
        if (!(0, $4MXbj.shouldUseGroup)(schema, group)) return;
        if (group.type) {
            gen.if((0, $6PO8h.checkDataType)(group.type, data, opts.strictNumbers));
            $42f5ad34b8447cd1$var$iterateKeywords(it, group);
            if (types.length === 1 && types[0] === group.type && typeErrors) {
                gen.else();
                (0, $6PO8h.reportTypeError)(it);
            }
            gen.endIf();
        } else $42f5ad34b8447cd1$var$iterateKeywords(it, group);
        // TODO make it "ok" call?
        if (!allErrors) gen.if($jkIFZ._($42f5ad34b8447cd1$var$_templateObject32(), $4QYyN.default.errors, errsCount || 0));
    };
    var gen = it.gen, schema = it.schema, data = it.data, allErrors = it.allErrors, opts = it.opts, self = it.self;
    var RULES = self.RULES;
    if (schema.$ref && (opts.ignoreKeywordsWithRef || !(0, $eF2Jh.schemaHasRulesButRef)(schema, RULES))) {
        gen.block(function() {
            return $42f5ad34b8447cd1$var$keywordCode(it, "$ref", RULES.all.$ref.definition);
        }); // TODO typecast
        return;
    }
    if (!opts.jtd) $42f5ad34b8447cd1$var$checkStrictTypes(it, types);
    gen.block(function() {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = RULES.rules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var group = _step.value;
                groupKeywords(group);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        groupKeywords(RULES.post);
    });
}
function $42f5ad34b8447cd1$var$iterateKeywords(it, group) {
    var gen = it.gen, schema = it.schema, useDefaults = it.opts.useDefaults;
    if (useDefaults) (0, $8djet.assignDefaults)(it, group.type);
    gen.block(function() {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = group.rules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var rule = _step.value;
                if ((0, $4MXbj.shouldUseRule)(schema, rule)) $42f5ad34b8447cd1$var$keywordCode(it, rule.keyword, rule.definition, group.type);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    });
}
function $42f5ad34b8447cd1$var$checkStrictTypes(it, types) {
    if (it.schemaEnv.meta || !it.opts.strictTypes) return;
    $42f5ad34b8447cd1$var$checkContextTypes(it, types);
    if (!it.opts.allowUnionTypes) $42f5ad34b8447cd1$var$checkMultipleTypes(it, types);
    $42f5ad34b8447cd1$var$checkKeywordTypes(it, it.dataTypes);
}
function $42f5ad34b8447cd1$var$checkContextTypes(it, types) {
    if (!types.length) return;
    if (!it.dataTypes.length) {
        it.dataTypes = types;
        return;
    }
    types.forEach(function(t) {
        if (!$42f5ad34b8447cd1$var$includesType(it.dataTypes, t)) $42f5ad34b8447cd1$var$strictTypesError(it, 'type "'.concat(t, '" not allowed by context "').concat(it.dataTypes.join(","), '"'));
    });
    it.dataTypes = it.dataTypes.filter(function(t) {
        return $42f5ad34b8447cd1$var$includesType(types, t);
    });
}
function $42f5ad34b8447cd1$var$checkMultipleTypes(it, ts) {
    if (ts.length > 1 && !(ts.length === 2 && ts.includes("null"))) $42f5ad34b8447cd1$var$strictTypesError(it, "use allowUnionTypes to allow union type keyword");
}
function $42f5ad34b8447cd1$var$checkKeywordTypes(it, ts) {
    var rules = it.self.RULES.all;
    for(var keyword in rules){
        var rule = rules[keyword];
        if (typeof rule == "object" && (0, $4MXbj.shouldUseRule)(it.schema, rule)) {
            var type = rule.definition.type;
            if (type.length && !type.some(function(t) {
                return $42f5ad34b8447cd1$var$hasApplicableType(ts, t);
            })) $42f5ad34b8447cd1$var$strictTypesError(it, 'missing type "'.concat(type.join(","), '" for keyword "').concat(keyword, '"'));
        }
    }
}
function $42f5ad34b8447cd1$var$hasApplicableType(schTs, kwdT) {
    return schTs.includes(kwdT) || kwdT === "number" && schTs.includes("integer");
}
function $42f5ad34b8447cd1$var$includesType(ts, t) {
    return ts.includes(t) || t === "integer" && ts.includes("number");
}
function $42f5ad34b8447cd1$var$strictTypesError(it, msg) {
    var schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
    msg += ' at "'.concat(schemaPath, '" (strictTypes)');
    (0, $eF2Jh.checkStrictMode)(it, msg, it.opts.strictTypes);
}
var $42f5ad34b8447cd1$var$KeywordCxt = /*#__PURE__*/ function() {
    function KeywordCxt(it, def, keyword) {
        (0, $f3yih.default)(this, KeywordCxt);
        (0, $hHGxT.validateKeywordUsage)(it, def, keyword);
        this.gen = it.gen;
        this.allErrors = it.allErrors;
        this.keyword = keyword;
        this.data = it.data;
        this.schema = it.schema[keyword];
        this.$data = def.$data && it.opts.$data && this.schema && this.schema.$data;
        this.schemaValue = (0, $eF2Jh.schemaRefOrVal)(it, this.schema, keyword, this.$data);
        this.schemaType = def.schemaType;
        this.parentSchema = it.schema;
        this.params = {};
        this.it = it;
        this.def = def;
        if (this.$data) this.schemaCode = it.gen.const("vSchema", $42f5ad34b8447cd1$var$getData(this.$data, it));
        else {
            this.schemaCode = this.schemaValue;
            if (!(0, $hHGxT.validSchemaType)(this.schema, def.schemaType, def.allowUndefined)) throw new Error("".concat(keyword, " value must be ").concat(JSON.stringify(def.schemaType)));
        }
        if ("code" in def ? def.trackErrors : def.errors !== false) this.errsCount = it.gen.const("_errs", $4QYyN.default.errors);
    }
    (0, $2x3qu.default)(KeywordCxt, [
        {
            key: "result",
            value: function result(condition, successAction, failAction) {
                this.failResult((0, $jkIFZ.not)(condition), successAction, failAction);
            }
        },
        {
            key: "failResult",
            value: function failResult(condition, successAction, failAction) {
                this.gen.if(condition);
                if (failAction) failAction();
                else this.error();
                if (successAction) {
                    this.gen.else();
                    successAction();
                    if (this.allErrors) this.gen.endIf();
                } else if (this.allErrors) this.gen.endIf();
                else this.gen.else();
            }
        },
        {
            key: "pass",
            value: function pass(condition, failAction) {
                this.failResult((0, $jkIFZ.not)(condition), undefined, failAction);
            }
        },
        {
            key: "fail",
            value: function fail(condition) {
                if (condition === undefined) {
                    this.error();
                    if (!this.allErrors) this.gen.if(false); // this branch will be removed by gen.optimize
                    return;
                }
                this.gen.if(condition);
                this.error();
                if (this.allErrors) this.gen.endIf();
                else this.gen.else();
            }
        },
        {
            key: "fail$data",
            value: function fail$data(condition) {
                if (!this.$data) return this.fail(condition);
                var schemaCode = this.schemaCode;
                this.fail($jkIFZ._($42f5ad34b8447cd1$var$_templateObject33(), schemaCode, (0, $jkIFZ.or)(this.invalid$data(), condition)));
            }
        },
        {
            key: "error",
            value: function error(append, errorParams, errorPaths) {
                if (errorParams) {
                    this.setParams(errorParams);
                    this._error(append, errorPaths);
                    this.setParams({});
                    return;
                }
                this._error(append, errorPaths);
            }
        },
        {
            key: "_error",
            value: function _error(append, errorPaths) {
                (append ? $lvc7F.reportExtraError : $lvc7F.reportError)(this, this.def.error, errorPaths);
            }
        },
        {
            key: "$dataError",
            value: function $dataError() {
                (0, $lvc7F.reportError)(this, this.def.$dataError || $lvc7F.keyword$DataError);
            }
        },
        {
            key: "reset",
            value: function reset() {
                if (this.errsCount === undefined) throw new Error('add "trackErrors" to keyword definition');
                (0, $lvc7F.resetErrorsCount)(this.gen, this.errsCount);
            }
        },
        {
            key: "ok",
            value: function ok(cond) {
                if (!this.allErrors) this.gen.if(cond);
            }
        },
        {
            key: "setParams",
            value: function setParams(obj, assign) {
                if (assign) Object.assign(this.params, obj);
                else this.params = obj;
            }
        },
        {
            key: "block$data",
            value: function block$data(valid, codeBlock) {
                var $dataValid = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : $jkIFZ.nil;
                var _this = this;
                this.gen.block(function() {
                    _this.check$data(valid, $dataValid);
                    codeBlock();
                });
            }
        },
        {
            key: "check$data",
            value: function check$data() {
                var valid = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $jkIFZ.nil, $dataValid = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $jkIFZ.nil;
                if (!this.$data) return;
                var ref = this, gen = ref.gen, schemaCode = ref.schemaCode, schemaType = ref.schemaType, def = ref.def;
                gen.if((0, $jkIFZ.or)($jkIFZ._($42f5ad34b8447cd1$var$_templateObject34(), schemaCode), $dataValid));
                if (valid !== $jkIFZ.nil) gen.assign(valid, true);
                if (schemaType.length || def.validateSchema) {
                    gen.elseIf(this.invalid$data());
                    this.$dataError();
                    if (valid !== $jkIFZ.nil) gen.assign(valid, false);
                }
                gen.else();
            }
        },
        {
            key: "invalid$data",
            value: function invalid$data() {
                var wrong$DataType = function wrong$DataType() {
                    if (schemaType.length) {
                        /* istanbul ignore if */ if (!(schemaCode instanceof $jkIFZ.Name)) throw new Error("ajv implementation error");
                        var st = Array.isArray(schemaType) ? schemaType : [
                            schemaType
                        ];
                        return $jkIFZ._($42f5ad34b8447cd1$var$_templateObject35(), (0, $6PO8h.checkDataTypes)(st, schemaCode, it.opts.strictNumbers, $6PO8h.DataType.Wrong));
                    }
                    return $jkIFZ.nil;
                };
                var invalid$DataSchema = function invalid$DataSchema() {
                    if (def.validateSchema) {
                        var validateSchemaRef = gen.scopeValue("validate$data", {
                            ref: def.validateSchema
                        }); // TODO value.code for standalone
                        return $jkIFZ._($42f5ad34b8447cd1$var$_templateObject36(), validateSchemaRef, schemaCode);
                    }
                    return $jkIFZ.nil;
                };
                var ref = this, gen = ref.gen, schemaCode = ref.schemaCode, schemaType = ref.schemaType, def = ref.def, it = ref.it;
                return (0, $jkIFZ.or)(wrong$DataType(), invalid$DataSchema());
            }
        },
        {
            key: "subschema",
            value: function subschema(appl, valid) {
                var subschema1 = (0, $24jGs.getSubschema)(this.it, appl);
                (0, $24jGs.extendSubschemaData)(subschema1, this.it, appl);
                (0, $24jGs.extendSubschemaMode)(subschema1, appl);
                var nextContext = (0, $8zIXb.default)((0, $1he00.default)({}, this.it, subschema1), {
                    items: undefined,
                    props: undefined
                });
                $42f5ad34b8447cd1$var$subschemaCode(nextContext, valid);
                return nextContext;
            }
        },
        {
            key: "mergeEvaluated",
            value: function mergeEvaluated(schemaCxt, toName) {
                var ref = this, it = ref.it, gen = ref.gen;
                if (!it.opts.unevaluated) return;
                if (it.props !== true && schemaCxt.props !== undefined) it.props = $eF2Jh.mergeEvaluated.props(gen, schemaCxt.props, it.props, toName);
                if (it.items !== true && schemaCxt.items !== undefined) it.items = $eF2Jh.mergeEvaluated.items(gen, schemaCxt.items, it.items, toName);
            }
        },
        {
            key: "mergeValidEvaluated",
            value: function mergeValidEvaluated(schemaCxt, valid) {
                var ref = this, it = ref.it, gen = ref.gen;
                if (it.opts.unevaluated && (it.props !== true || it.items !== true)) {
                    var _this = this;
                    gen.if(valid, function() {
                        return _this.mergeEvaluated(schemaCxt, $jkIFZ.Name);
                    });
                    return true;
                }
            }
        }
    ]);
    return KeywordCxt;
}();
module.exports.KeywordCxt = $42f5ad34b8447cd1$var$KeywordCxt;
function $42f5ad34b8447cd1$var$keywordCode(it, keyword, def, ruleType) {
    var cxt = new $42f5ad34b8447cd1$var$KeywordCxt(it, def, keyword);
    if ("code" in def) def.code(cxt, ruleType);
    else if (cxt.$data && def.validate) (0, $hHGxT.funcKeywordCode)(cxt, def);
    else if ("macro" in def) (0, $hHGxT.macroKeywordCode)(cxt, def);
    else if (def.compile || def.validate) (0, $hHGxT.funcKeywordCode)(cxt, def);
}
var $42f5ad34b8447cd1$var$JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
var $42f5ad34b8447cd1$var$RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function $42f5ad34b8447cd1$var$getData($data, param) {
    var dataLevel = param.dataLevel, dataNames = param.dataNames, dataPathArr = param.dataPathArr;
    var errorMsg = function errorMsg(pointerType, up) {
        return "Cannot access ".concat(pointerType, " ").concat(up, " levels up, current level is ").concat(dataLevel);
    };
    var jsonPointer;
    var data;
    if ($data === "") return $4QYyN.default.rootData;
    if ($data[0] === "/") {
        if (!$42f5ad34b8447cd1$var$JSON_POINTER.test($data)) throw new Error("Invalid JSON-pointer: ".concat($data));
        jsonPointer = $data;
        data = $4QYyN.default.rootData;
    } else {
        var matches = $42f5ad34b8447cd1$var$RELATIVE_JSON_POINTER.exec($data);
        if (!matches) throw new Error("Invalid JSON-pointer: ".concat($data));
        var up1 = +matches[1];
        jsonPointer = matches[2];
        if (jsonPointer === "#") {
            if (up1 >= dataLevel) throw new Error(errorMsg("property/index", up1));
            return dataPathArr[dataLevel - up1];
        }
        if (up1 > dataLevel) throw new Error(errorMsg("data", up1));
        data = dataNames[dataLevel - up1];
        if (!jsonPointer) return data;
    }
    var expr = data;
    var segments = jsonPointer.split("/");
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = segments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var segment = _step.value;
            if (segment) {
                data = $jkIFZ._($42f5ad34b8447cd1$var$_templateObject37(), data, (0, $jkIFZ.getProperty)((0, $eF2Jh.unescapeJsonPointer)(segment)));
                expr = $jkIFZ._($42f5ad34b8447cd1$var$_templateObject38(), expr, data);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return expr;
}
module.exports.getData = $42f5ad34b8447cd1$var$getData;

});
parcelRequire.register("iXJoB", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $57c38f4b3dec0385$export$2e2bcd8739ae039; });
function $57c38f4b3dec0385$export$2e2bcd8739ae039(strings, raw) {
    if (!raw) raw = strings.slice(0);
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}

});

parcelRequire.register("d2Ahy", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $97e79b1debc69f5e$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "",
        ".errors"
    ]);
    $97e79b1debc69f5e$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.boolOrEmptySchema = module.exports.topBoolOrEmptySchema = void 0;

var $lvc7F = parcelRequire("lvc7F");

var $jkIFZ = parcelRequire("jkIFZ");

var $4QYyN = parcelRequire("4QYyN");
var $97e79b1debc69f5e$var$boolError = {
    message: "boolean schema is false"
};
function $97e79b1debc69f5e$var$topBoolOrEmptySchema(it) {
    var gen = it.gen, schema = it.schema, validateName = it.validateName;
    if (schema === false) $97e79b1debc69f5e$var$falseSchemaError(it, false);
    else if (typeof schema == "object" && schema.$async === true) gen.return($4QYyN.default.data);
    else {
        gen.assign($jkIFZ._($97e79b1debc69f5e$var$_templateObject(), validateName), null);
        gen.return(true);
    }
}
module.exports.topBoolOrEmptySchema = $97e79b1debc69f5e$var$topBoolOrEmptySchema;
function $97e79b1debc69f5e$var$boolOrEmptySchema(it, valid) {
    var gen = it.gen, schema = it.schema;
    if (schema === false) {
        gen.var(valid, false); // TODO var
        $97e79b1debc69f5e$var$falseSchemaError(it);
    } else gen.var(valid, true); // TODO var
}
module.exports.boolOrEmptySchema = $97e79b1debc69f5e$var$boolOrEmptySchema;
function $97e79b1debc69f5e$var$falseSchemaError(it, overrideAllErrors) {
    var gen = it.gen, data = it.data;
    // TODO maybe some other interface should be used for non-keyword validation errors...
    var cxt = {
        gen: gen,
        keyword: "false schema",
        data: data,
        schema: false,
        schemaCode: false,
        schemaValue: false,
        params: {},
        it: it
    };
    (0, $lvc7F.reportError)(cxt, $97e79b1debc69f5e$var$boolError, undefined, overrideAllErrors);
}

});
parcelRequire.register("lvc7F", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");

var $d67Ag = parcelRequire("d67Ag");
"use strict";
function $fa75e58da74a3d35$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        'must pass "',
        '" keyword validation'
    ]);
    $fa75e58da74a3d35$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        '"',
        '" keyword must be ',
        " ($data)"
    ]);
    $fa75e58da74a3d35$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        '"',
        '" keyword is invalid ($data)'
    ]);
    $fa75e58da74a3d35$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject3() {
    var data = (0, $iXJoB.default)([
        "[",
        "]"
    ]);
    $fa75e58da74a3d35$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject4() {
    var data = (0, $iXJoB.default)([
        "",
        " !== null"
    ]);
    $fa75e58da74a3d35$var$_templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject5() {
    var data = (0, $iXJoB.default)([
        "",
        ".length"
    ]);
    $fa75e58da74a3d35$var$_templateObject5 = function _templateObject5() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject6() {
    var data = (0, $iXJoB.default)([
        "",
        "[",
        "]"
    ]);
    $fa75e58da74a3d35$var$_templateObject6 = function _templateObject6() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject7() {
    var data = (0, $iXJoB.default)([
        "",
        ".instancePath === undefined"
    ]);
    $fa75e58da74a3d35$var$_templateObject7 = function _templateObject7() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject8() {
    var data = (0, $iXJoB.default)([
        "",
        ".instancePath"
    ]);
    $fa75e58da74a3d35$var$_templateObject8 = function _templateObject8() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject9() {
    var data = (0, $iXJoB.default)([
        "",
        ".schemaPath"
    ]);
    $fa75e58da74a3d35$var$_templateObject9 = function _templateObject9() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject10() {
    var data = (0, $iXJoB.default)([
        "",
        "/",
        ""
    ]);
    $fa75e58da74a3d35$var$_templateObject10 = function _templateObject10() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject11() {
    var data = (0, $iXJoB.default)([
        "",
        ".schema"
    ]);
    $fa75e58da74a3d35$var$_templateObject11 = function _templateObject11() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject12() {
    var data = (0, $iXJoB.default)([
        "",
        ".data"
    ]);
    $fa75e58da74a3d35$var$_templateObject12 = function _templateObject12() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject13() {
    var data = (0, $iXJoB.default)([
        "",
        " === null"
    ]);
    $fa75e58da74a3d35$var$_templateObject13 = function _templateObject13() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject14() {
    var data = (0, $iXJoB.default)([
        "[",
        "]"
    ]);
    $fa75e58da74a3d35$var$_templateObject14 = function _templateObject14() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject15() {
    var data = (0, $iXJoB.default)([
        "",
        ".push(",
        ")"
    ]);
    $fa75e58da74a3d35$var$_templateObject15 = function _templateObject15() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject16() {
    var data = (0, $iXJoB.default)([
        "",
        "++"
    ]);
    $fa75e58da74a3d35$var$_templateObject16 = function _templateObject16() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject17() {
    var data = (0, $iXJoB.default)([
        "new ",
        "(",
        ")"
    ]);
    $fa75e58da74a3d35$var$_templateObject17 = function _templateObject17() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject18() {
    var data = (0, $iXJoB.default)([
        "",
        ".errors"
    ]);
    $fa75e58da74a3d35$var$_templateObject18 = function _templateObject18() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject19() {
    var data = (0, $iXJoB.default)([
        "{}"
    ]);
    $fa75e58da74a3d35$var$_templateObject19 = function _templateObject19() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject20() {
    var data = (0, $iXJoB.default)([
        "",
        "",
        ""
    ]);
    $fa75e58da74a3d35$var$_templateObject20 = function _templateObject20() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject21() {
    var data = (0, $iXJoB.default)([
        "",
        "/",
        ""
    ]);
    $fa75e58da74a3d35$var$_templateObject21 = function _templateObject21() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject22() {
    var data = (0, $iXJoB.default)([
        "",
        "",
        ""
    ]);
    $fa75e58da74a3d35$var$_templateObject22 = function _templateObject22() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject23() {
    var data = (0, $iXJoB.default)([
        "{}"
    ]);
    $fa75e58da74a3d35$var$_templateObject23 = function _templateObject23() {
        return data;
    };
    return data;
}
function $fa75e58da74a3d35$var$_templateObject24() {
    var data = (0, $iXJoB.default)([
        "",
        "",
        ""
    ]);
    $fa75e58da74a3d35$var$_templateObject24 = function _templateObject24() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.extendErrors = module.exports.resetErrorsCount = module.exports.reportExtraError = module.exports.reportError = module.exports.keyword$DataError = module.exports.keywordError = void 0;

var $jkIFZ = parcelRequire("jkIFZ");

var $eF2Jh = parcelRequire("eF2Jh");

var $4QYyN = parcelRequire("4QYyN");
module.exports.keywordError = {
    message: function(param) {
        var keyword = param.keyword;
        return $jkIFZ.str($fa75e58da74a3d35$var$_templateObject(), keyword);
    }
};
module.exports.keyword$DataError = {
    message: function(param) {
        var keyword = param.keyword, schemaType = param.schemaType;
        return schemaType ? $jkIFZ.str($fa75e58da74a3d35$var$_templateObject1(), keyword, schemaType) : $jkIFZ.str($fa75e58da74a3d35$var$_templateObject2(), keyword);
    }
};
function $fa75e58da74a3d35$var$reportError(cxt) {
    var error = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : module.exports.keywordError, errorPaths = arguments.length > 2 ? arguments[2] : void 0, overrideAllErrors = arguments.length > 3 ? arguments[3] : void 0;
    var it = cxt.it;
    var gen = it.gen, compositeRule = it.compositeRule, allErrors = it.allErrors;
    var errObj = $fa75e58da74a3d35$var$errorObjectCode(cxt, error, errorPaths);
    if (overrideAllErrors !== null && overrideAllErrors !== void 0 ? overrideAllErrors : compositeRule || allErrors) $fa75e58da74a3d35$var$addError(gen, errObj);
    else $fa75e58da74a3d35$var$returnErrors(it, $jkIFZ._($fa75e58da74a3d35$var$_templateObject3(), errObj));
}
module.exports.reportError = $fa75e58da74a3d35$var$reportError;
function $fa75e58da74a3d35$var$reportExtraError(cxt) {
    var error = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : module.exports.keywordError, errorPaths = arguments.length > 2 ? arguments[2] : void 0;
    var it = cxt.it;
    var gen = it.gen, compositeRule = it.compositeRule, allErrors = it.allErrors;
    var errObj = $fa75e58da74a3d35$var$errorObjectCode(cxt, error, errorPaths);
    $fa75e58da74a3d35$var$addError(gen, errObj);
    if (!(compositeRule || allErrors)) $fa75e58da74a3d35$var$returnErrors(it, $4QYyN.default.vErrors);
}
module.exports.reportExtraError = $fa75e58da74a3d35$var$reportExtraError;
function $fa75e58da74a3d35$var$resetErrorsCount(gen, errsCount) {
    gen.assign($4QYyN.default.errors, errsCount);
    gen.if($jkIFZ._($fa75e58da74a3d35$var$_templateObject4(), $4QYyN.default.vErrors), function() {
        return gen.if(errsCount, function() {
            return gen.assign($jkIFZ._($fa75e58da74a3d35$var$_templateObject5(), $4QYyN.default.vErrors), errsCount);
        }, function() {
            return gen.assign($4QYyN.default.vErrors, null);
        });
    });
}
module.exports.resetErrorsCount = $fa75e58da74a3d35$var$resetErrorsCount;
function $fa75e58da74a3d35$var$extendErrors(param) {
    var gen = param.gen, keyword = param.keyword, schemaValue = param.schemaValue, data = param.data, errsCount = param.errsCount, it = param.it;
    /* istanbul ignore if */ if (errsCount === undefined) throw new Error("ajv implementation error");
    var err = gen.name("err");
    gen.forRange("i", errsCount, $4QYyN.default.errors, function(i) {
        gen.const(err, $jkIFZ._($fa75e58da74a3d35$var$_templateObject6(), $4QYyN.default.vErrors, i));
        gen.if($jkIFZ._($fa75e58da74a3d35$var$_templateObject7(), err), function() {
            return gen.assign($jkIFZ._($fa75e58da74a3d35$var$_templateObject8(), err), (0, $jkIFZ.strConcat)($4QYyN.default.instancePath, it.errorPath));
        });
        gen.assign($jkIFZ._($fa75e58da74a3d35$var$_templateObject9(), err), $jkIFZ.str($fa75e58da74a3d35$var$_templateObject10(), it.errSchemaPath, keyword));
        if (it.opts.verbose) {
            gen.assign($jkIFZ._($fa75e58da74a3d35$var$_templateObject11(), err), schemaValue);
            gen.assign($jkIFZ._($fa75e58da74a3d35$var$_templateObject12(), err), data);
        }
    });
}
module.exports.extendErrors = $fa75e58da74a3d35$var$extendErrors;
function $fa75e58da74a3d35$var$addError(gen, errObj) {
    var err = gen.const("err", errObj);
    gen.if($jkIFZ._($fa75e58da74a3d35$var$_templateObject13(), $4QYyN.default.vErrors), function() {
        return gen.assign($4QYyN.default.vErrors, $jkIFZ._($fa75e58da74a3d35$var$_templateObject14(), err));
    }, $jkIFZ._($fa75e58da74a3d35$var$_templateObject15(), $4QYyN.default.vErrors, err));
    gen.code($jkIFZ._($fa75e58da74a3d35$var$_templateObject16(), $4QYyN.default.errors));
}
function $fa75e58da74a3d35$var$returnErrors(it, errs) {
    var gen = it.gen, validateName = it.validateName, schemaEnv = it.schemaEnv;
    if (schemaEnv.$async) gen.throw($jkIFZ._($fa75e58da74a3d35$var$_templateObject17(), it.ValidationError, errs));
    else {
        gen.assign($jkIFZ._($fa75e58da74a3d35$var$_templateObject18(), validateName), errs);
        gen.return(false);
    }
}
var $fa75e58da74a3d35$var$E = {
    keyword: new $jkIFZ.Name("keyword"),
    schemaPath: new $jkIFZ.Name("schemaPath"),
    params: new $jkIFZ.Name("params"),
    propertyName: new $jkIFZ.Name("propertyName"),
    message: new $jkIFZ.Name("message"),
    schema: new $jkIFZ.Name("schema"),
    parentSchema: new $jkIFZ.Name("parentSchema")
};
function $fa75e58da74a3d35$var$errorObjectCode(cxt, error, errorPaths) {
    var createErrors = cxt.it.createErrors;
    if (createErrors === false) return $jkIFZ._($fa75e58da74a3d35$var$_templateObject19());
    return $fa75e58da74a3d35$var$errorObject(cxt, error, errorPaths);
}
function $fa75e58da74a3d35$var$errorObject(cxt, error) {
    var errorPaths = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    var _gen;
    var gen = cxt.gen, it = cxt.it;
    var keyValues = [
        $fa75e58da74a3d35$var$errorInstancePath(it, errorPaths),
        $fa75e58da74a3d35$var$errorSchemaPath(cxt, errorPaths), 
    ];
    $fa75e58da74a3d35$var$extraErrorProps(cxt, error, keyValues);
    return (_gen = gen).object.apply(_gen, (0, $d67Ag.default)(keyValues));
}
function $fa75e58da74a3d35$var$errorInstancePath(param, param1) {
    var errorPath = param.errorPath, instancePath = param1.instancePath;
    var instPath = instancePath ? $jkIFZ.str($fa75e58da74a3d35$var$_templateObject20(), errorPath, (0, $eF2Jh.getErrorPath)(instancePath, $eF2Jh.Type.Str)) : errorPath;
    return [
        $4QYyN.default.instancePath,
        (0, $jkIFZ.strConcat)($4QYyN.default.instancePath, instPath)
    ];
}
function $fa75e58da74a3d35$var$errorSchemaPath(param, param2) {
    var keyword = param.keyword, errSchemaPath = param.it.errSchemaPath, schemaPath = param2.schemaPath, parentSchema = param2.parentSchema;
    var schPath = parentSchema ? errSchemaPath : $jkIFZ.str($fa75e58da74a3d35$var$_templateObject21(), errSchemaPath, keyword);
    if (schemaPath) schPath = $jkIFZ.str($fa75e58da74a3d35$var$_templateObject22(), schPath, (0, $eF2Jh.getErrorPath)(schemaPath, $eF2Jh.Type.Str));
    return [
        $fa75e58da74a3d35$var$E.schemaPath,
        schPath
    ];
}
function $fa75e58da74a3d35$var$extraErrorProps(cxt, param, keyValues) {
    var params = param.params, message = param.message;
    var keyword = cxt.keyword, data = cxt.data, schemaValue = cxt.schemaValue, it = cxt.it;
    var opts = it.opts, propertyName = it.propertyName, topSchemaRef = it.topSchemaRef, schemaPath = it.schemaPath;
    keyValues.push([
        $fa75e58da74a3d35$var$E.keyword,
        keyword
    ], [
        $fa75e58da74a3d35$var$E.params,
        typeof params == "function" ? params(cxt) : params || $jkIFZ._($fa75e58da74a3d35$var$_templateObject23())
    ]);
    if (opts.messages) keyValues.push([
        $fa75e58da74a3d35$var$E.message,
        typeof message == "function" ? message(cxt) : message
    ]);
    if (opts.verbose) keyValues.push([
        $fa75e58da74a3d35$var$E.schema,
        schemaValue
    ], [
        $fa75e58da74a3d35$var$E.parentSchema,
        $jkIFZ._($fa75e58da74a3d35$var$_templateObject24(), topSchemaRef, schemaPath)
    ], [
        $4QYyN.default.data,
        data
    ]);
    if (propertyName) keyValues.push([
        $fa75e58da74a3d35$var$E.propertyName,
        propertyName
    ]);
}

});
parcelRequire.register("d67Ag", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $a3c0b5c2dc64c119$export$2e2bcd8739ae039; });

var $hBkWi = parcelRequire("hBkWi");

var $cUUDS = parcelRequire("cUUDS");

var $9rbRr = parcelRequire("9rbRr");

var $hoJdg = parcelRequire("hoJdg");
function $a3c0b5c2dc64c119$export$2e2bcd8739ae039(arr) {
    return (0, $hBkWi.default)(arr) || (0, $cUUDS.default)(arr) || (0, $hoJdg.default)(arr) || (0, $9rbRr.default)();
}

});
parcelRequire.register("hBkWi", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $edf9458b3a7c482a$export$2e2bcd8739ae039; });

var $5Qv2f = parcelRequire("5Qv2f");
function $edf9458b3a7c482a$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) return (0, $5Qv2f.default)(arr);
}

});
parcelRequire.register("5Qv2f", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $88ead292e0a1756d$export$2e2bcd8739ae039; });
function $88ead292e0a1756d$export$2e2bcd8739ae039(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}

});


parcelRequire.register("cUUDS", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $e455a6e37445e97b$export$2e2bcd8739ae039; });
function $e455a6e37445e97b$export$2e2bcd8739ae039(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

});

parcelRequire.register("9rbRr", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $87c02312261d8066$export$2e2bcd8739ae039; });
function $87c02312261d8066$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

});

parcelRequire.register("hoJdg", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $175e6825bed1fa20$export$2e2bcd8739ae039; });

var $5Qv2f = parcelRequire("5Qv2f");
function $175e6825bed1fa20$export$2e2bcd8739ae039(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return (0, $5Qv2f.default)(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, $5Qv2f.default)(o, minLen);
}

});


parcelRequire.register("jkIFZ", function(module, exports) {

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $jdvqV = parcelRequire("jdvqV");

var $7l5ho = parcelRequire("7l5ho");

var $5sttm = parcelRequire("5sttm");

var $1he00 = parcelRequire("1he00");

var $8zIXb = parcelRequire("8zIXb");

var $9NXTR = parcelRequire("9NXTR");

var $iXJoB = parcelRequire("iXJoB");

var $d67Ag = parcelRequire("d67Ag");

var $2qJq4 = parcelRequire("2qJq4");

var $8oBD6 = parcelRequire("8oBD6");
"use strict";
function $e1328a58e6132009$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "",
        ".length"
    ]);
    $e1328a58e6132009$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $e1328a58e6132009$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "",
        "[",
        "]"
    ]);
    $e1328a58e6132009$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $e1328a58e6132009$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "Object.keys(",
        ")"
    ]);
    $e1328a58e6132009$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $e1328a58e6132009$var$_templateObject3() {
    var data = (0, $iXJoB.default)([
        "!",
        ""
    ]);
    $e1328a58e6132009$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function $e1328a58e6132009$var$_templateObject4() {
    var data = (0, $iXJoB.default)([
        "",
        " ",
        " ",
        ""
    ]);
    $e1328a58e6132009$var$_templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
function $e1328a58e6132009$var$_templateObject5() {
    var data = (0, $iXJoB.default)([
        "(",
        ")"
    ]);
    $e1328a58e6132009$var$_templateObject5 = function _templateObject5() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.or = module.exports.and = module.exports.not = module.exports.CodeGen = module.exports.operators = module.exports.varKinds = module.exports.ValueScopeName = module.exports.ValueScope = module.exports.Scope = module.exports.Name = module.exports.regexpCode = module.exports.stringify = module.exports.getProperty = module.exports.nil = module.exports.strConcat = module.exports.str = module.exports._ = void 0;

var $fAJgM = parcelRequire("fAJgM");

var $cFQ3g = parcelRequire("cFQ3g");

var $fAJgM = parcelRequire("fAJgM");
Object.defineProperty(module.exports, "_", {
    enumerable: true,
    get: function get() {
        return $fAJgM._;
    }
});
Object.defineProperty(module.exports, "str", {
    enumerable: true,
    get: function get() {
        return $fAJgM.str;
    }
});
Object.defineProperty(module.exports, "strConcat", {
    enumerable: true,
    get: function get() {
        return $fAJgM.strConcat;
    }
});
Object.defineProperty(module.exports, "nil", {
    enumerable: true,
    get: function get() {
        return $fAJgM.nil;
    }
});
Object.defineProperty(module.exports, "getProperty", {
    enumerable: true,
    get: function get() {
        return $fAJgM.getProperty;
    }
});
Object.defineProperty(module.exports, "stringify", {
    enumerable: true,
    get: function get() {
        return $fAJgM.stringify;
    }
});
Object.defineProperty(module.exports, "regexpCode", {
    enumerable: true,
    get: function get() {
        return $fAJgM.regexpCode;
    }
});
Object.defineProperty(module.exports, "Name", {
    enumerable: true,
    get: function get() {
        return $fAJgM.Name;
    }
});

var $cFQ3g = parcelRequire("cFQ3g");
Object.defineProperty(module.exports, "Scope", {
    enumerable: true,
    get: function get() {
        return $cFQ3g.Scope;
    }
});
Object.defineProperty(module.exports, "ValueScope", {
    enumerable: true,
    get: function get() {
        return $cFQ3g.ValueScope;
    }
});
Object.defineProperty(module.exports, "ValueScopeName", {
    enumerable: true,
    get: function get() {
        return $cFQ3g.ValueScopeName;
    }
});
Object.defineProperty(module.exports, "varKinds", {
    enumerable: true,
    get: function get() {
        return $cFQ3g.varKinds;
    }
});
module.exports.operators = {
    GT: new $fAJgM._Code(">"),
    GTE: new $fAJgM._Code(">="),
    LT: new $fAJgM._Code("<"),
    LTE: new $fAJgM._Code("<="),
    EQ: new $fAJgM._Code("==="),
    NEQ: new $fAJgM._Code("!=="),
    NOT: new $fAJgM._Code("!"),
    OR: new $fAJgM._Code("||"),
    AND: new $fAJgM._Code("&&"),
    ADD: new $fAJgM._Code("+")
};
var $e1328a58e6132009$var$Node = /*#__PURE__*/ function() {
    function Node() {
        (0, $f3yih.default)(this, Node);
    }
    (0, $2x3qu.default)(Node, [
        {
            key: "optimizeNodes",
            value: function optimizeNodes() {
                return this;
            }
        },
        {
            key: "optimizeNames",
            value: function optimizeNames(_names, _constants) {
                return this;
            }
        }
    ]);
    return Node;
}();
var $e1328a58e6132009$var$Def = /*#__PURE__*/ function(Node) {
    (0, $5sttm.default)(Def, Node);
    var _super = (0, $8oBD6.default)(Def);
    function Def(varKind, name, rhs) {
        (0, $f3yih.default)(this, Def);
        var _this;
        _this = _super.call(this);
        _this.varKind = varKind;
        _this.name = name;
        _this.rhs = rhs;
        return _this;
    }
    (0, $2x3qu.default)(Def, [
        {
            key: "render",
            value: function render(param) {
                var es5 = param.es5, _n = param._n;
                var varKind = es5 ? $cFQ3g.varKinds.var : this.varKind;
                var rhs = this.rhs === undefined ? "" : " = ".concat(this.rhs);
                return "".concat(varKind, " ").concat(this.name).concat(rhs, ";") + _n;
            }
        },
        {
            key: "optimizeNames",
            value: function optimizeNames(names, constants) {
                if (!names[this.name.str]) return;
                if (this.rhs) this.rhs = $e1328a58e6132009$var$optimizeExpr(this.rhs, names, constants);
                return this;
            }
        },
        {
            key: "names",
            get: function get() {
                return this.rhs instanceof $fAJgM._CodeOrName ? this.rhs.names : {};
            }
        }
    ]);
    return Def;
}((0, $2qJq4.default)($e1328a58e6132009$var$Node));
var $e1328a58e6132009$var$Assign = /*#__PURE__*/ function(Node) {
    (0, $5sttm.default)(Assign, Node);
    var _super = (0, $8oBD6.default)(Assign);
    function Assign(lhs, rhs, sideEffects) {
        (0, $f3yih.default)(this, Assign);
        var _this;
        _this = _super.call(this);
        _this.lhs = lhs;
        _this.rhs = rhs;
        _this.sideEffects = sideEffects;
        return _this;
    }
    (0, $2x3qu.default)(Assign, [
        {
            key: "render",
            value: function render(param) {
                var _n = param._n;
                return "".concat(this.lhs, " = ").concat(this.rhs, ";") + _n;
            }
        },
        {
            key: "optimizeNames",
            value: function optimizeNames(names, constants) {
                if (this.lhs instanceof $fAJgM.Name && !names[this.lhs.str] && !this.sideEffects) return;
                this.rhs = $e1328a58e6132009$var$optimizeExpr(this.rhs, names, constants);
                return this;
            }
        },
        {
            key: "names",
            get: function get() {
                var names = this.lhs instanceof $fAJgM.Name ? {} : (0, $1he00.default)({}, this.lhs.names);
                return $e1328a58e6132009$var$addExprNames(names, this.rhs);
            }
        }
    ]);
    return Assign;
}((0, $2qJq4.default)($e1328a58e6132009$var$Node));
var $e1328a58e6132009$var$AssignOp = /*#__PURE__*/ function(Assign) {
    (0, $5sttm.default)(AssignOp, Assign);
    var _super = (0, $8oBD6.default)(AssignOp);
    function AssignOp(lhs, op, rhs, sideEffects) {
        (0, $f3yih.default)(this, AssignOp);
        var _this;
        _this = _super.call(this, lhs, rhs, sideEffects);
        _this.op = op;
        return _this;
    }
    (0, $2x3qu.default)(AssignOp, [
        {
            key: "render",
            value: function render(param) {
                var _n = param._n;
                return "".concat(this.lhs, " ").concat(this.op, "= ").concat(this.rhs, ";") + _n;
            }
        }
    ]);
    return AssignOp;
}($e1328a58e6132009$var$Assign);
var $e1328a58e6132009$var$Label = /*#__PURE__*/ function(Node) {
    (0, $5sttm.default)(Label, Node);
    var _super = (0, $8oBD6.default)(Label);
    function Label(label) {
        (0, $f3yih.default)(this, Label);
        var _this;
        _this = _super.call(this);
        _this.label = label;
        _this.names = {};
        return _this;
    }
    (0, $2x3qu.default)(Label, [
        {
            key: "render",
            value: function render(param) {
                var _n = param._n;
                return "".concat(this.label, ":") + _n;
            }
        }
    ]);
    return Label;
}((0, $2qJq4.default)($e1328a58e6132009$var$Node));
var $e1328a58e6132009$var$Break = /*#__PURE__*/ function(Node) {
    (0, $5sttm.default)(Break, Node);
    var _super = (0, $8oBD6.default)(Break);
    function Break(label) {
        (0, $f3yih.default)(this, Break);
        var _this;
        _this = _super.call(this);
        _this.label = label;
        _this.names = {};
        return _this;
    }
    (0, $2x3qu.default)(Break, [
        {
            key: "render",
            value: function render(param) {
                var _n = param._n;
                var label = this.label ? " ".concat(this.label) : "";
                return "break".concat(label, ";") + _n;
            }
        }
    ]);
    return Break;
}((0, $2qJq4.default)($e1328a58e6132009$var$Node));
var $e1328a58e6132009$var$Throw = /*#__PURE__*/ function(Node) {
    (0, $5sttm.default)(Throw, Node);
    var _super = (0, $8oBD6.default)(Throw);
    function Throw(error) {
        (0, $f3yih.default)(this, Throw);
        var _this;
        _this = _super.call(this);
        _this.error = error;
        return _this;
    }
    (0, $2x3qu.default)(Throw, [
        {
            key: "render",
            value: function render(param) {
                var _n = param._n;
                return "throw ".concat(this.error, ";") + _n;
            }
        },
        {
            key: "names",
            get: function get() {
                return this.error.names;
            }
        }
    ]);
    return Throw;
}((0, $2qJq4.default)($e1328a58e6132009$var$Node));
var $e1328a58e6132009$var$AnyCode = /*#__PURE__*/ function(Node) {
    (0, $5sttm.default)(AnyCode, Node);
    var _super = (0, $8oBD6.default)(AnyCode);
    function AnyCode(code) {
        (0, $f3yih.default)(this, AnyCode);
        var _this;
        _this = _super.call(this);
        _this.code = code;
        return _this;
    }
    (0, $2x3qu.default)(AnyCode, [
        {
            key: "render",
            value: function render(param) {
                var _n = param._n;
                return "".concat(this.code, ";") + _n;
            }
        },
        {
            key: "optimizeNodes",
            value: function optimizeNodes() {
                return "".concat(this.code) ? this : undefined;
            }
        },
        {
            key: "optimizeNames",
            value: function optimizeNames(names, constants) {
                this.code = $e1328a58e6132009$var$optimizeExpr(this.code, names, constants);
                return this;
            }
        },
        {
            key: "names",
            get: function get() {
                return this.code instanceof $fAJgM._CodeOrName ? this.code.names : {};
            }
        }
    ]);
    return AnyCode;
}((0, $2qJq4.default)($e1328a58e6132009$var$Node));
var $e1328a58e6132009$var$ParentNode = /*#__PURE__*/ function(Node) {
    (0, $5sttm.default)(ParentNode, Node);
    var _super = (0, $8oBD6.default)(ParentNode);
    function ParentNode() {
        var nodes = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
        (0, $f3yih.default)(this, ParentNode);
        var _this;
        _this = _super.call(this);
        _this.nodes = nodes;
        return _this;
    }
    (0, $2x3qu.default)(ParentNode, [
        {
            key: "render",
            value: function render(opts) {
                return this.nodes.reduce(function(code, n) {
                    return code + n.render(opts);
                }, "");
            }
        },
        {
            key: "optimizeNodes",
            value: function optimizeNodes() {
                var nodes = this.nodes;
                var i = nodes.length;
                while(i--){
                    var _nodes;
                    var n = nodes[i].optimizeNodes();
                    if (Array.isArray(n)) (_nodes = nodes).splice.apply(_nodes, [
                        i,
                        1
                    ].concat((0, $d67Ag.default)(n)));
                    else if (n) nodes[i] = n;
                    else nodes.splice(i, 1);
                }
                return nodes.length > 0 ? this : undefined;
            }
        },
        {
            key: "optimizeNames",
            value: function optimizeNames(names, constants) {
                var nodes = this.nodes;
                var i = nodes.length;
                while(i--){
                    // iterating backwards improves 1-pass optimization
                    var n = nodes[i];
                    if (n.optimizeNames(names, constants)) continue;
                    $e1328a58e6132009$var$subtractNames(names, n.names);
                    nodes.splice(i, 1);
                }
                return nodes.length > 0 ? this : undefined;
            }
        },
        {
            key: "names",
            get: function get() {
                return this.nodes.reduce(function(names, n) {
                    return $e1328a58e6132009$var$addNames(names, n.names);
                }, {});
            }
        }
    ]);
    return ParentNode;
}((0, $2qJq4.default)($e1328a58e6132009$var$Node));
var $e1328a58e6132009$var$BlockNode = /*#__PURE__*/ function(ParentNode) {
    (0, $5sttm.default)(BlockNode, ParentNode);
    var _super = (0, $8oBD6.default)(BlockNode);
    function BlockNode() {
        (0, $f3yih.default)(this, BlockNode);
        return _super.apply(this, arguments);
    }
    (0, $2x3qu.default)(BlockNode, [
        {
            key: "render",
            value: function render(opts) {
                return "{" + opts._n + (0, $jdvqV.default)((0, $7l5ho.default)(BlockNode.prototype), "render", this).call(this, opts) + "}" + opts._n;
            }
        }
    ]);
    return BlockNode;
}($e1328a58e6132009$var$ParentNode);
var $e1328a58e6132009$var$Root = /*#__PURE__*/ function(ParentNode) {
    (0, $5sttm.default)(Root, ParentNode);
    var _super = (0, $8oBD6.default)(Root);
    function Root() {
        (0, $f3yih.default)(this, Root);
        return _super.apply(this, arguments);
    }
    return Root;
}($e1328a58e6132009$var$ParentNode);
var $e1328a58e6132009$var$Else = /*#__PURE__*/ function(BlockNode) {
    (0, $5sttm.default)(Else, BlockNode);
    var _super = (0, $8oBD6.default)(Else);
    function Else() {
        (0, $f3yih.default)(this, Else);
        return _super.apply(this, arguments);
    }
    return Else;
}($e1328a58e6132009$var$BlockNode);
$e1328a58e6132009$var$Else.kind = "else";
var $e1328a58e6132009$var$If = /*#__PURE__*/ function(BlockNode) {
    (0, $5sttm.default)(If, BlockNode);
    var _super = (0, $8oBD6.default)(If);
    function If(condition, nodes) {
        (0, $f3yih.default)(this, If);
        var _this;
        _this = _super.call(this, nodes);
        _this.condition = condition;
        return _this;
    }
    (0, $2x3qu.default)(If, [
        {
            key: "render",
            value: function render(opts) {
                var code = "if(".concat(this.condition, ")") + (0, $jdvqV.default)((0, $7l5ho.default)(If.prototype), "render", this).call(this, opts);
                if (this.else) code += "else " + this.else.render(opts);
                return code;
            }
        },
        {
            key: "optimizeNodes",
            value: function optimizeNodes() {
                (0, $jdvqV.default)((0, $7l5ho.default)(If.prototype), "optimizeNodes", this).call(this);
                var cond = this.condition;
                if (cond === true) return this.nodes; // else is ignored here
                var e = this.else;
                if (e) {
                    var ns = e.optimizeNodes();
                    e = this.else = Array.isArray(ns) ? new $e1328a58e6132009$var$Else(ns) : ns;
                }
                if (e) {
                    if (cond === false) return e instanceof If ? e : e.nodes;
                    if (this.nodes.length) return this;
                    return new If($e1328a58e6132009$var$not(cond), e instanceof If ? [
                        e
                    ] : e.nodes);
                }
                if (cond === false || !this.nodes.length) return undefined;
                return this;
            }
        },
        {
            key: "optimizeNames",
            value: function optimizeNames(names, constants) {
                var _a;
                this.else = (_a = this.else) === null || _a === void 0 ? void 0 : _a.optimizeNames(names, constants);
                if (!((0, $jdvqV.default)((0, $7l5ho.default)(If.prototype), "optimizeNames", this).call(this, names, constants) || this.else)) return;
                this.condition = $e1328a58e6132009$var$optimizeExpr(this.condition, names, constants);
                return this;
            }
        },
        {
            key: "names",
            get: function get() {
                var names = (0, $jdvqV.default)((0, $7l5ho.default)(If.prototype), "names", this);
                $e1328a58e6132009$var$addExprNames(names, this.condition);
                if (this.else) $e1328a58e6132009$var$addNames(names, this.else.names);
                return names;
            }
        }
    ]);
    return If;
}($e1328a58e6132009$var$BlockNode);
$e1328a58e6132009$var$If.kind = "if";
var $e1328a58e6132009$var$For = /*#__PURE__*/ function(BlockNode) {
    (0, $5sttm.default)(For, BlockNode);
    var _super = (0, $8oBD6.default)(For);
    function For() {
        (0, $f3yih.default)(this, For);
        return _super.apply(this, arguments);
    }
    return For;
}($e1328a58e6132009$var$BlockNode);
$e1328a58e6132009$var$For.kind = "for";
var $e1328a58e6132009$var$ForLoop = /*#__PURE__*/ function(For) {
    (0, $5sttm.default)(ForLoop, For);
    var _super = (0, $8oBD6.default)(ForLoop);
    function ForLoop(iteration) {
        (0, $f3yih.default)(this, ForLoop);
        var _this;
        _this = _super.call(this);
        _this.iteration = iteration;
        return _this;
    }
    (0, $2x3qu.default)(ForLoop, [
        {
            key: "render",
            value: function render(opts) {
                return "for(".concat(this.iteration, ")") + (0, $jdvqV.default)((0, $7l5ho.default)(ForLoop.prototype), "render", this).call(this, opts);
            }
        },
        {
            key: "optimizeNames",
            value: function optimizeNames(names, constants) {
                if (!(0, $jdvqV.default)((0, $7l5ho.default)(ForLoop.prototype), "optimizeNames", this).call(this, names, constants)) return;
                this.iteration = $e1328a58e6132009$var$optimizeExpr(this.iteration, names, constants);
                return this;
            }
        },
        {
            key: "names",
            get: function get() {
                return $e1328a58e6132009$var$addNames((0, $jdvqV.default)((0, $7l5ho.default)(ForLoop.prototype), "names", this), this.iteration.names);
            }
        }
    ]);
    return ForLoop;
}($e1328a58e6132009$var$For);
var $e1328a58e6132009$var$ForRange = /*#__PURE__*/ function(For) {
    (0, $5sttm.default)(ForRange, For);
    var _super = (0, $8oBD6.default)(ForRange);
    function ForRange(varKind, name, from, to) {
        (0, $f3yih.default)(this, ForRange);
        var _this;
        _this = _super.call(this);
        _this.varKind = varKind;
        _this.name = name;
        _this.from = from;
        _this.to = to;
        return _this;
    }
    (0, $2x3qu.default)(ForRange, [
        {
            key: "render",
            value: function render(opts) {
                var varKind = opts.es5 ? $cFQ3g.varKinds.var : this.varKind;
                var ref = this, name = ref.name, from = ref.from, to = ref.to;
                return "for(".concat(varKind, " ").concat(name, "=").concat(from, "; ").concat(name, "<").concat(to, "; ").concat(name, "++)") + (0, $jdvqV.default)((0, $7l5ho.default)(ForRange.prototype), "render", this).call(this, opts);
            }
        },
        {
            key: "names",
            get: function get() {
                var names = $e1328a58e6132009$var$addExprNames((0, $jdvqV.default)((0, $7l5ho.default)(ForRange.prototype), "names", this), this.from);
                return $e1328a58e6132009$var$addExprNames(names, this.to);
            }
        }
    ]);
    return ForRange;
}($e1328a58e6132009$var$For);
var $e1328a58e6132009$var$ForIter = /*#__PURE__*/ function(For) {
    (0, $5sttm.default)(ForIter, For);
    var _super = (0, $8oBD6.default)(ForIter);
    function ForIter(loop, varKind, name, iterable) {
        (0, $f3yih.default)(this, ForIter);
        var _this;
        _this = _super.call(this);
        _this.loop = loop;
        _this.varKind = varKind;
        _this.name = name;
        _this.iterable = iterable;
        return _this;
    }
    (0, $2x3qu.default)(ForIter, [
        {
            key: "render",
            value: function render(opts) {
                return "for(".concat(this.varKind, " ").concat(this.name, " ").concat(this.loop, " ").concat(this.iterable, ")") + (0, $jdvqV.default)((0, $7l5ho.default)(ForIter.prototype), "render", this).call(this, opts);
            }
        },
        {
            key: "optimizeNames",
            value: function optimizeNames(names, constants) {
                if (!(0, $jdvqV.default)((0, $7l5ho.default)(ForIter.prototype), "optimizeNames", this).call(this, names, constants)) return;
                this.iterable = $e1328a58e6132009$var$optimizeExpr(this.iterable, names, constants);
                return this;
            }
        },
        {
            key: "names",
            get: function get() {
                return $e1328a58e6132009$var$addNames((0, $jdvqV.default)((0, $7l5ho.default)(ForIter.prototype), "names", this), this.iterable.names);
            }
        }
    ]);
    return ForIter;
}($e1328a58e6132009$var$For);
var $e1328a58e6132009$var$Func = /*#__PURE__*/ function(BlockNode) {
    (0, $5sttm.default)(Func, BlockNode);
    var _super = (0, $8oBD6.default)(Func);
    function Func(name, args, async) {
        (0, $f3yih.default)(this, Func);
        var _this;
        _this = _super.call(this);
        _this.name = name;
        _this.args = args;
        _this.async = async;
        return _this;
    }
    (0, $2x3qu.default)(Func, [
        {
            key: "render",
            value: function render(opts) {
                var _async = this.async ? "async " : "";
                return "".concat(_async, "function ").concat(this.name, "(").concat(this.args, ")") + (0, $jdvqV.default)((0, $7l5ho.default)(Func.prototype), "render", this).call(this, opts);
            }
        }
    ]);
    return Func;
}($e1328a58e6132009$var$BlockNode);
$e1328a58e6132009$var$Func.kind = "func";
var $e1328a58e6132009$var$Return = /*#__PURE__*/ function(ParentNode) {
    (0, $5sttm.default)(Return, ParentNode);
    var _super = (0, $8oBD6.default)(Return);
    function Return() {
        (0, $f3yih.default)(this, Return);
        return _super.apply(this, arguments);
    }
    (0, $2x3qu.default)(Return, [
        {
            key: "render",
            value: function render(opts) {
                return "return " + (0, $jdvqV.default)((0, $7l5ho.default)(Return.prototype), "render", this).call(this, opts);
            }
        }
    ]);
    return Return;
}($e1328a58e6132009$var$ParentNode);
$e1328a58e6132009$var$Return.kind = "return";
var $e1328a58e6132009$var$Try = /*#__PURE__*/ function(BlockNode) {
    (0, $5sttm.default)(Try, BlockNode);
    var _super = (0, $8oBD6.default)(Try);
    function Try() {
        (0, $f3yih.default)(this, Try);
        return _super.apply(this, arguments);
    }
    (0, $2x3qu.default)(Try, [
        {
            key: "render",
            value: function render(opts) {
                var code = "try" + (0, $jdvqV.default)((0, $7l5ho.default)(Try.prototype), "render", this).call(this, opts);
                if (this.catch) code += this.catch.render(opts);
                if (this.finally) code += this.finally.render(opts);
                return code;
            }
        },
        {
            key: "optimizeNodes",
            value: function optimizeNodes() {
                var _a, _b;
                (0, $jdvqV.default)((0, $7l5ho.default)(Try.prototype), "optimizeNodes", this).call(this);
                (_a = this.catch) === null || _a === void 0 || _a.optimizeNodes();
                (_b = this.finally) === null || _b === void 0 || _b.optimizeNodes();
                return this;
            }
        },
        {
            key: "optimizeNames",
            value: function optimizeNames(names, constants) {
                var _a, _b;
                (0, $jdvqV.default)((0, $7l5ho.default)(Try.prototype), "optimizeNames", this).call(this, names, constants);
                (_a = this.catch) === null || _a === void 0 || _a.optimizeNames(names, constants);
                (_b = this.finally) === null || _b === void 0 || _b.optimizeNames(names, constants);
                return this;
            }
        },
        {
            key: "names",
            get: function get() {
                var names = (0, $jdvqV.default)((0, $7l5ho.default)(Try.prototype), "names", this);
                if (this.catch) $e1328a58e6132009$var$addNames(names, this.catch.names);
                if (this.finally) $e1328a58e6132009$var$addNames(names, this.finally.names);
                return names;
            }
        }
    ]);
    return Try;
}($e1328a58e6132009$var$BlockNode);
var $e1328a58e6132009$var$Catch = /*#__PURE__*/ function(BlockNode) {
    (0, $5sttm.default)(Catch, BlockNode);
    var _super = (0, $8oBD6.default)(Catch);
    function Catch(error) {
        (0, $f3yih.default)(this, Catch);
        var _this;
        _this = _super.call(this);
        _this.error = error;
        return _this;
    }
    (0, $2x3qu.default)(Catch, [
        {
            key: "render",
            value: function render(opts) {
                return "catch(".concat(this.error, ")") + (0, $jdvqV.default)((0, $7l5ho.default)(Catch.prototype), "render", this).call(this, opts);
            }
        }
    ]);
    return Catch;
}($e1328a58e6132009$var$BlockNode);
$e1328a58e6132009$var$Catch.kind = "catch";
var $e1328a58e6132009$var$Finally = /*#__PURE__*/ function(BlockNode) {
    (0, $5sttm.default)(Finally, BlockNode);
    var _super = (0, $8oBD6.default)(Finally);
    function Finally() {
        (0, $f3yih.default)(this, Finally);
        return _super.apply(this, arguments);
    }
    (0, $2x3qu.default)(Finally, [
        {
            key: "render",
            value: function render(opts) {
                return "finally" + (0, $jdvqV.default)((0, $7l5ho.default)(Finally.prototype), "render", this).call(this, opts);
            }
        }
    ]);
    return Finally;
}($e1328a58e6132009$var$BlockNode);
$e1328a58e6132009$var$Finally.kind = "finally";
var $e1328a58e6132009$var$CodeGen = /*#__PURE__*/ function() {
    function CodeGen(extScope) {
        var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        (0, $f3yih.default)(this, CodeGen);
        this._values = {};
        this._blockStarts = [];
        this._constants = {};
        this.opts = (0, $8zIXb.default)((0, $1he00.default)({}, opts), {
            _n: opts.lines ? "\n" : ""
        });
        this._extScope = extScope;
        this._scope = new $cFQ3g.Scope({
            parent: extScope
        });
        this._nodes = [
            new $e1328a58e6132009$var$Root()
        ];
    }
    (0, $2x3qu.default)(CodeGen, [
        {
            key: "toString",
            value: function toString() {
                return this._root.render(this.opts);
            }
        },
        {
            // returns unique name in the internal scope
            key: "name",
            value: function name(prefix) {
                return this._scope.name(prefix);
            }
        },
        {
            // reserves unique name in the external scope
            key: "scopeName",
            value: function scopeName(prefix) {
                return this._extScope.name(prefix);
            }
        },
        {
            // reserves unique name in the external scope and assigns value to it
            key: "scopeValue",
            value: function scopeValue(prefixOrName, value) {
                var name = this._extScope.value(prefixOrName, value);
                var vs = this._values[name.prefix] || (this._values[name.prefix] = new Set());
                vs.add(name);
                return name;
            }
        },
        {
            key: "getScopeValue",
            value: function getScopeValue(prefix, keyOrRef) {
                return this._extScope.getValue(prefix, keyOrRef);
            }
        },
        {
            // return code that assigns values in the external scope to the names that are used internally
            // (same names that were returned by gen.scopeName or gen.scopeValue)
            key: "scopeRefs",
            value: function scopeRefs(scopeName) {
                return this._extScope.scopeRefs(scopeName, this._values);
            }
        },
        {
            key: "scopeCode",
            value: function scopeCode() {
                return this._extScope.scopeCode(this._values);
            }
        },
        {
            key: "_def",
            value: function _def(varKind, nameOrPrefix, rhs, constant) {
                var name = this._scope.toName(nameOrPrefix);
                if (rhs !== undefined && constant) this._constants[name.str] = rhs;
                this._leafNode(new $e1328a58e6132009$var$Def(varKind, name, rhs));
                return name;
            }
        },
        {
            // `const` declaration (`var` in es5 mode)
            key: "const",
            value: function _const(nameOrPrefix, rhs, _constant) {
                return this._def($cFQ3g.varKinds.const, nameOrPrefix, rhs, _constant);
            }
        },
        {
            // `let` declaration with optional assignment (`var` in es5 mode)
            key: "let",
            value: function _let(nameOrPrefix, rhs, _constant) {
                return this._def($cFQ3g.varKinds.let, nameOrPrefix, rhs, _constant);
            }
        },
        {
            // `var` declaration with optional assignment
            key: "var",
            value: function _var(nameOrPrefix, rhs, _constant) {
                return this._def($cFQ3g.varKinds.var, nameOrPrefix, rhs, _constant);
            }
        },
        {
            // assignment code
            key: "assign",
            value: function assign(lhs, rhs, sideEffects) {
                return this._leafNode(new $e1328a58e6132009$var$Assign(lhs, rhs, sideEffects));
            }
        },
        {
            // `+=` code
            key: "add",
            value: function add(lhs, rhs) {
                return this._leafNode(new $e1328a58e6132009$var$AssignOp(lhs, module.exports.operators.ADD, rhs));
            }
        },
        {
            // appends passed SafeExpr to code or executes Block
            key: "code",
            value: function code(c) {
                if (typeof c == "function") c();
                else if (c !== $fAJgM.nil) this._leafNode(new $e1328a58e6132009$var$AnyCode(c));
                return this;
            }
        },
        {
            // returns code for object literal for the passed argument list of key-value pairs
            key: "object",
            value: function object() {
                for(var _len = arguments.length, keyValues = new Array(_len), _key = 0; _key < _len; _key++){
                    keyValues[_key] = arguments[_key];
                }
                var code = [
                    "{"
                ];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = keyValues[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var _value = (0, $9NXTR.default)(_step.value, 2), key = _value[0], value = _value[1];
                        if (code.length > 1) code.push(",");
                        code.push(key);
                        if (key !== value || this.opts.es5) {
                            code.push(":");
                            (0, $fAJgM.addCodeArg)(code, value);
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
                code.push("}");
                return new $fAJgM._Code(code);
            }
        },
        {
            // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
            key: "if",
            value: function _if(condition, thenBody, elseBody) {
                this._blockNode(new $e1328a58e6132009$var$If(condition));
                if (thenBody && elseBody) this.code(thenBody).else().code(elseBody).endIf();
                else if (thenBody) this.code(thenBody).endIf();
                else if (elseBody) throw new Error('CodeGen: "else" body without "then" body');
                return this;
            }
        },
        {
            // `else if` clause - invalid without `if` or after `else` clauses
            key: "elseIf",
            value: function elseIf(condition) {
                return this._elseNode(new $e1328a58e6132009$var$If(condition));
            }
        },
        {
            // `else` clause - only valid after `if` or `else if` clauses
            key: "else",
            value: function _else() {
                return this._elseNode(new $e1328a58e6132009$var$Else());
            }
        },
        {
            // end `if` statement (needed if gen.if was used only with condition)
            key: "endIf",
            value: function endIf() {
                return this._endBlockNode($e1328a58e6132009$var$If, $e1328a58e6132009$var$Else);
            }
        },
        {
            key: "_for",
            value: function _for(node, forBody) {
                this._blockNode(node);
                if (forBody) this.code(forBody).endFor();
                return this;
            }
        },
        {
            // a generic `for` clause (or statement if `forBody` is passed)
            key: "for",
            value: function _for(iteration, forBody) {
                return this._for(new $e1328a58e6132009$var$ForLoop(iteration), forBody);
            }
        },
        {
            // `for` statement for a range of values
            key: "forRange",
            value: function forRange(nameOrPrefix, from, to, forBody) {
                var varKind = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.opts.es5 ? $cFQ3g.varKinds.var : $cFQ3g.varKinds.let;
                var name = this._scope.toName(nameOrPrefix);
                return this._for(new $e1328a58e6132009$var$ForRange(varKind, name, from, to), function() {
                    return forBody(name);
                });
            }
        },
        {
            // `for-of` statement (in es5 mode replace with a normal for loop)
            key: "forOf",
            value: function forOf(nameOrPrefix, iterable, forBody) {
                var varKind = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : $cFQ3g.varKinds.const;
                var name = this._scope.toName(nameOrPrefix);
                if (this.opts.es5) {
                    var _this = this;
                    var arr = iterable instanceof $fAJgM.Name ? iterable : this.var("_arr", iterable);
                    return this.forRange("_i", 0, $fAJgM._($e1328a58e6132009$var$_templateObject(), arr), function(i) {
                        _this.var(name, $fAJgM._($e1328a58e6132009$var$_templateObject1(), arr, i));
                        forBody(name);
                    });
                }
                return this._for(new $e1328a58e6132009$var$ForIter("of", varKind, name, iterable), function() {
                    return forBody(name);
                });
            }
        },
        {
            // `for-in` statement.
            // With option `ownProperties` replaced with a `for-of` loop for object keys
            key: "forIn",
            value: function forIn(nameOrPrefix, obj, forBody) {
                var varKind = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : this.opts.es5 ? $cFQ3g.varKinds.var : $cFQ3g.varKinds.const;
                if (this.opts.ownProperties) return this.forOf(nameOrPrefix, $fAJgM._($e1328a58e6132009$var$_templateObject2(), obj), forBody);
                var name = this._scope.toName(nameOrPrefix);
                return this._for(new $e1328a58e6132009$var$ForIter("in", varKind, name, obj), function() {
                    return forBody(name);
                });
            }
        },
        {
            // end `for` loop
            key: "endFor",
            value: function endFor() {
                return this._endBlockNode($e1328a58e6132009$var$For);
            }
        },
        {
            // `label` statement
            key: "label",
            value: function label1(label) {
                return this._leafNode(new $e1328a58e6132009$var$Label(label));
            }
        },
        {
            // `break` statement
            key: "break",
            value: function _break(label) {
                return this._leafNode(new $e1328a58e6132009$var$Break(label));
            }
        },
        {
            // `return` statement
            key: "return",
            value: function _return(value) {
                var node = new $e1328a58e6132009$var$Return();
                this._blockNode(node);
                this.code(value);
                if (node.nodes.length !== 1) throw new Error('CodeGen: "return" should have one node');
                return this._endBlockNode($e1328a58e6132009$var$Return);
            }
        },
        {
            // `try` statement
            key: "try",
            value: function _try(tryBody, catchCode, finallyCode) {
                if (!catchCode && !finallyCode) throw new Error('CodeGen: "try" without "catch" and "finally"');
                var node = new $e1328a58e6132009$var$Try();
                this._blockNode(node);
                this.code(tryBody);
                if (catchCode) {
                    var error = this.name("e");
                    this._currNode = node.catch = new $e1328a58e6132009$var$Catch(error);
                    catchCode(error);
                }
                if (finallyCode) {
                    this._currNode = node.finally = new $e1328a58e6132009$var$Finally();
                    this.code(finallyCode);
                }
                return this._endBlockNode($e1328a58e6132009$var$Catch, $e1328a58e6132009$var$Finally);
            }
        },
        {
            // `throw` statement
            key: "throw",
            value: function _throw(error) {
                return this._leafNode(new $e1328a58e6132009$var$Throw(error));
            }
        },
        {
            // start self-balancing block
            key: "block",
            value: function block(body, nodeCount) {
                this._blockStarts.push(this._nodes.length);
                if (body) this.code(body).endBlock(nodeCount);
                return this;
            }
        },
        {
            // end the current self-balancing block
            key: "endBlock",
            value: function endBlock(nodeCount) {
                var len = this._blockStarts.pop();
                if (len === undefined) throw new Error("CodeGen: not in self-balancing block");
                var toClose = this._nodes.length - len;
                if (toClose < 0 || nodeCount !== undefined && toClose !== nodeCount) throw new Error("CodeGen: wrong number of nodes: ".concat(toClose, " vs ").concat(nodeCount, " expected"));
                this._nodes.length = len;
                return this;
            }
        },
        {
            // `function` heading (or definition if funcBody is passed)
            key: "func",
            value: function func(name) {
                var args = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $fAJgM.nil, async = arguments.length > 2 ? arguments[2] : void 0, funcBody = arguments.length > 3 ? arguments[3] : void 0;
                this._blockNode(new $e1328a58e6132009$var$Func(name, args, async));
                if (funcBody) this.code(funcBody).endFunc();
                return this;
            }
        },
        {
            // end function definition
            key: "endFunc",
            value: function endFunc() {
                return this._endBlockNode($e1328a58e6132009$var$Func);
            }
        },
        {
            key: "optimize",
            value: function optimize() {
                var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
                while(n-- > 0){
                    this._root.optimizeNodes();
                    this._root.optimizeNames(this._root.names, this._constants);
                }
            }
        },
        {
            key: "_leafNode",
            value: function _leafNode(node) {
                this._currNode.nodes.push(node);
                return this;
            }
        },
        {
            key: "_blockNode",
            value: function _blockNode(node) {
                this._currNode.nodes.push(node);
                this._nodes.push(node);
            }
        },
        {
            key: "_endBlockNode",
            value: function _endBlockNode(N1, N2) {
                var n = this._currNode;
                if (n instanceof N1 || N2 && n instanceof N2) {
                    this._nodes.pop();
                    return this;
                }
                throw new Error('CodeGen: not in block "'.concat(N2 ? "".concat(N1.kind, "/").concat(N2.kind) : N1.kind, '"'));
            }
        },
        {
            key: "_elseNode",
            value: function _elseNode(node) {
                var n = this._currNode;
                if (!(n instanceof $e1328a58e6132009$var$If)) throw new Error('CodeGen: "else" without "if"');
                this._currNode = n.else = node;
                return this;
            }
        },
        {
            key: "_root",
            get: function get() {
                return this._nodes[0];
            }
        },
        {
            key: "_currNode",
            get: function get() {
                var ns = this._nodes;
                return ns[ns.length - 1];
            },
            set: function set(node) {
                var ns = this._nodes;
                ns[ns.length - 1] = node;
            }
        }
    ]);
    return CodeGen;
}();
module.exports.CodeGen = $e1328a58e6132009$var$CodeGen;
function $e1328a58e6132009$var$addNames(names, from) {
    for(var n in from)names[n] = (names[n] || 0) + (from[n] || 0);
    return names;
}
function $e1328a58e6132009$var$addExprNames(names, from) {
    return from instanceof $fAJgM._CodeOrName ? $e1328a58e6132009$var$addNames(names, from.names) : names;
}
function $e1328a58e6132009$var$optimizeExpr(expr, names, constants) {
    var replaceName = function replaceName(n) {
        var c = constants[n.str];
        if (c === undefined || names[n.str] !== 1) return n;
        delete names[n.str];
        return c;
    };
    var canOptimize = function canOptimize(e) {
        return e instanceof $fAJgM._Code && e._items.some(function(c) {
            return c instanceof $fAJgM.Name && names[c.str] === 1 && constants[c.str] !== undefined;
        });
    };
    if (expr instanceof $fAJgM.Name) return replaceName(expr);
    if (!canOptimize(expr)) return expr;
    return new $fAJgM._Code(expr._items.reduce(function(items, c) {
        var _items;
        if (c instanceof $fAJgM.Name) c = replaceName(c);
        if (c instanceof $fAJgM._Code) (_items = items).push.apply(_items, (0, $d67Ag.default)(c._items));
        else items.push(c);
        return items;
    }, []));
}
function $e1328a58e6132009$var$subtractNames(names, from) {
    for(var n in from)names[n] = (names[n] || 0) - (from[n] || 0);
}
function $e1328a58e6132009$var$not(x) {
    return typeof x == "boolean" || typeof x == "number" || x === null ? !x : $fAJgM._($e1328a58e6132009$var$_templateObject3(), $e1328a58e6132009$var$par(x));
}
module.exports.not = $e1328a58e6132009$var$not;
var $e1328a58e6132009$var$andCode = $e1328a58e6132009$var$mappend(module.exports.operators.AND);
// boolean AND (&&) expression with the passed arguments
function $e1328a58e6132009$var$and() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return args.reduce($e1328a58e6132009$var$andCode);
}
module.exports.and = $e1328a58e6132009$var$and;
var $e1328a58e6132009$var$orCode = $e1328a58e6132009$var$mappend(module.exports.operators.OR);
// boolean OR (||) expression with the passed arguments
function $e1328a58e6132009$var$or() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    return args.reduce($e1328a58e6132009$var$orCode);
}
module.exports.or = $e1328a58e6132009$var$or;
function $e1328a58e6132009$var$mappend(op) {
    return function(x, y) {
        return x === $fAJgM.nil ? y : y === $fAJgM.nil ? x : $fAJgM._($e1328a58e6132009$var$_templateObject4(), $e1328a58e6132009$var$par(x), op, $e1328a58e6132009$var$par(y));
    };
}
function $e1328a58e6132009$var$par(x) {
    return x instanceof $fAJgM.Name ? x : $fAJgM._($e1328a58e6132009$var$_templateObject5(), x);
}

});
parcelRequire.register("9NXTR", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $0add5755314885ac$export$2e2bcd8739ae039; });

var $742Np = parcelRequire("742Np");

var $cUUDS = parcelRequire("cUUDS");

var $X6wlZ = parcelRequire("X6wlZ");

var $hoJdg = parcelRequire("hoJdg");
function $0add5755314885ac$export$2e2bcd8739ae039(arr, i) {
    return (0, $742Np.default)(arr) || (0, $cUUDS.default)(arr, i) || (0, $hoJdg.default)(arr, i) || (0, $X6wlZ.default)();
}

});
parcelRequire.register("742Np", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $3b1c0e7351a55752$export$2e2bcd8739ae039; });
function $3b1c0e7351a55752$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) return arr;
}

});

parcelRequire.register("X6wlZ", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $a5d61e792e83c6a4$export$2e2bcd8739ae039; });
function $a5d61e792e83c6a4$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

});


parcelRequire.register("2qJq4", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $287b3a5eec14968d$export$2e2bcd8739ae039; });

var $5mFRH = parcelRequire("5mFRH");

var $gPHER = parcelRequire("gPHER");

var $7l5ho = parcelRequire("7l5ho");

var $1yDKB = parcelRequire("1yDKB");
function $287b3a5eec14968d$var$wrapNativeSuper(Class1) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    $287b3a5eec14968d$var$wrapNativeSuper = function wrapNativeSuper(Class) {
        if (Class === null || !(0, $gPHER.default)(Class)) return Class;
        if (typeof Class !== "function") throw new TypeError("Super expression must either be null or a function");
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return (0, $5mFRH.default)(Class, arguments, (0, $7l5ho.default)(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return (0, $1yDKB.default)(Wrapper, Class);
    };
    return $287b3a5eec14968d$var$wrapNativeSuper(Class1);
}
function $287b3a5eec14968d$export$2e2bcd8739ae039(Class) {
    return $287b3a5eec14968d$var$wrapNativeSuper(Class);
}

});
parcelRequire.register("5mFRH", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $fadea5974f8b42b8$export$2e2bcd8739ae039; });

var $1yDKB = parcelRequire("1yDKB");
function $fadea5974f8b42b8$var$isNativeReflectConstruct() {
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
function $fadea5974f8b42b8$var$construct(Parent1, args1, Class1) {
    if ($fadea5974f8b42b8$var$isNativeReflectConstruct()) $fadea5974f8b42b8$var$construct = Reflect.construct;
    else $fadea5974f8b42b8$var$construct = function construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) (0, $1yDKB.default)(instance, Class.prototype);
        return instance;
    };
    return $fadea5974f8b42b8$var$construct.apply(null, arguments);
}
function $fadea5974f8b42b8$export$2e2bcd8739ae039(Parent, args, Class) {
    return $fadea5974f8b42b8$var$construct.apply(null, arguments);
}

});

parcelRequire.register("gPHER", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $5bd8c58aa44777c0$export$2e2bcd8739ae039; });
function $5bd8c58aa44777c0$export$2e2bcd8739ae039(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

});


parcelRequire.register("fAJgM", function(module, exports) {

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $3jaBu = parcelRequire("3jaBu");

var $5sttm = parcelRequire("5sttm");

var $iXJoB = parcelRequire("iXJoB");

var $d67Ag = parcelRequire("d67Ag");

var $8oBD6 = parcelRequire("8oBD6");
"use strict";
function $b59d556cec69fd3c$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "",
        "",
        ""
    ]);
    $b59d556cec69fd3c$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $b59d556cec69fd3c$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "[",
        "]"
    ]);
    $b59d556cec69fd3c$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.regexpCode = module.exports.getEsmExportName = module.exports.getProperty = module.exports.safeStringify = module.exports.stringify = module.exports.strConcat = module.exports.addCodeArg = module.exports.str = module.exports._ = module.exports.nil = module.exports._Code = module.exports.Name = module.exports.IDENTIFIER = module.exports._CodeOrName = void 0;
var $b59d556cec69fd3c$var$_CodeOrName = function _CodeOrName() {
    (0, $f3yih.default)(this, _CodeOrName);
};
module.exports._CodeOrName = $b59d556cec69fd3c$var$_CodeOrName;
module.exports.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
var $b59d556cec69fd3c$var$Name = /*#__PURE__*/ function(_CodeOrName) {
    (0, $5sttm.default)(Name, _CodeOrName);
    var _super = (0, $8oBD6.default)(Name);
    function Name(s) {
        (0, $f3yih.default)(this, Name);
        var _this;
        _this = _super.call(this);
        if (!module.exports.IDENTIFIER.test(s)) throw new Error("CodeGen: name must be a valid identifier");
        _this.str = s;
        return _this;
    }
    (0, $2x3qu.default)(Name, [
        {
            key: "toString",
            value: function toString() {
                return this.str;
            }
        },
        {
            key: "emptyStr",
            value: function emptyStr() {
                return false;
            }
        },
        {
            key: "names",
            get: function get() {
                return (0, $3jaBu.default)({}, this.str, 1);
            }
        }
    ]);
    return Name;
}($b59d556cec69fd3c$var$_CodeOrName);
module.exports.Name = $b59d556cec69fd3c$var$Name;
var $b59d556cec69fd3c$var$_Code = /*#__PURE__*/ function(_CodeOrName) {
    (0, $5sttm.default)(_Code, _CodeOrName);
    var _super = (0, $8oBD6.default)(_Code);
    function _Code(code) {
        (0, $f3yih.default)(this, _Code);
        var _this;
        _this = _super.call(this);
        _this._items = typeof code === "string" ? [
            code
        ] : code;
        return _this;
    }
    (0, $2x3qu.default)(_Code, [
        {
            key: "toString",
            value: function toString() {
                return this.str;
            }
        },
        {
            key: "emptyStr",
            value: function emptyStr() {
                if (this._items.length > 1) return false;
                var item = this._items[0];
                return item === "" || item === '""';
            }
        },
        {
            key: "str",
            get: function get() {
                var _a;
                return (_a = this._str) !== null && _a !== void 0 ? _a : this._str = this._items.reduce(function(s, c) {
                    return "".concat(s).concat(c);
                }, "");
            }
        },
        {
            key: "names",
            get: function get() {
                var _a;
                return (_a = this._names) !== null && _a !== void 0 ? _a : this._names = this._items.reduce(function(names, c) {
                    if (c instanceof $b59d556cec69fd3c$var$Name) names[c.str] = (names[c.str] || 0) + 1;
                    return names;
                }, {});
            }
        }
    ]);
    return _Code;
}($b59d556cec69fd3c$var$_CodeOrName);
module.exports._Code = $b59d556cec69fd3c$var$_Code;
module.exports.nil = new $b59d556cec69fd3c$var$_Code("");
function $b59d556cec69fd3c$var$_(strs) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    var code = [
        strs[0]
    ];
    var i = 0;
    while(i < args.length){
        $b59d556cec69fd3c$var$addCodeArg(code, args[i]);
        code.push(strs[++i]);
    }
    return new $b59d556cec69fd3c$var$_Code(code);
}
module.exports._ = $b59d556cec69fd3c$var$_;
var $b59d556cec69fd3c$var$plus = new $b59d556cec69fd3c$var$_Code("+");
function $b59d556cec69fd3c$var$str(strs) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    var expr = [
        $b59d556cec69fd3c$var$safeStringify(strs[0])
    ];
    var i = 0;
    while(i < args.length){
        expr.push($b59d556cec69fd3c$var$plus);
        $b59d556cec69fd3c$var$addCodeArg(expr, args[i]);
        expr.push($b59d556cec69fd3c$var$plus, $b59d556cec69fd3c$var$safeStringify(strs[++i]));
    }
    $b59d556cec69fd3c$var$optimize(expr);
    return new $b59d556cec69fd3c$var$_Code(expr);
}
module.exports.str = $b59d556cec69fd3c$var$str;
function $b59d556cec69fd3c$var$addCodeArg(code, arg) {
    var _code;
    if (arg instanceof $b59d556cec69fd3c$var$_Code) (_code = code).push.apply(_code, (0, $d67Ag.default)(arg._items));
    else if (arg instanceof $b59d556cec69fd3c$var$Name) code.push(arg);
    else code.push($b59d556cec69fd3c$var$interpolate(arg));
}
module.exports.addCodeArg = $b59d556cec69fd3c$var$addCodeArg;
function $b59d556cec69fd3c$var$optimize(expr) {
    var i = 1;
    while(i < expr.length - 1){
        if (expr[i] === $b59d556cec69fd3c$var$plus) {
            var res = $b59d556cec69fd3c$var$mergeExprItems(expr[i - 1], expr[i + 1]);
            if (res !== undefined) {
                expr.splice(i - 1, 3, res);
                continue;
            }
            expr[i++] = "+";
        }
        i++;
    }
}
function $b59d556cec69fd3c$var$mergeExprItems(a, b) {
    if (b === '""') return a;
    if (a === '""') return b;
    if (typeof a == "string") {
        if (b instanceof $b59d556cec69fd3c$var$Name || a[a.length - 1] !== '"') return;
        if (typeof b != "string") return "".concat(a.slice(0, -1)).concat(b, '"');
        if (b[0] === '"') return a.slice(0, -1) + b.slice(1);
        return;
    }
    if (typeof b == "string" && b[0] === '"' && !(a instanceof $b59d556cec69fd3c$var$Name)) return '"'.concat(a).concat(b.slice(1));
    return;
}
function $b59d556cec69fd3c$var$strConcat(c1, c2) {
    return c2.emptyStr() ? c1 : c1.emptyStr() ? c2 : $b59d556cec69fd3c$var$str($b59d556cec69fd3c$var$_templateObject(), c1, c2);
}
module.exports.strConcat = $b59d556cec69fd3c$var$strConcat;
// TODO do not allow arrays here
function $b59d556cec69fd3c$var$interpolate(x) {
    return typeof x == "number" || typeof x == "boolean" || x === null ? x : $b59d556cec69fd3c$var$safeStringify(Array.isArray(x) ? x.join(",") : x);
}
function $b59d556cec69fd3c$var$stringify(x) {
    return new $b59d556cec69fd3c$var$_Code($b59d556cec69fd3c$var$safeStringify(x));
}
module.exports.stringify = $b59d556cec69fd3c$var$stringify;
function $b59d556cec69fd3c$var$safeStringify(x) {
    return JSON.stringify(x).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}
module.exports.safeStringify = $b59d556cec69fd3c$var$safeStringify;
function $b59d556cec69fd3c$var$getProperty(key) {
    return typeof key == "string" && module.exports.IDENTIFIER.test(key) ? new $b59d556cec69fd3c$var$_Code(".".concat(key)) : $b59d556cec69fd3c$var$_($b59d556cec69fd3c$var$_templateObject1(), key);
}
module.exports.getProperty = $b59d556cec69fd3c$var$getProperty;
//Does best effort to format the name properly
function $b59d556cec69fd3c$var$getEsmExportName(key) {
    if (typeof key == "string" && module.exports.IDENTIFIER.test(key)) return new $b59d556cec69fd3c$var$_Code("".concat(key));
    throw new Error("CodeGen: invalid export name: ".concat(key, ", use explicit $id name mapping"));
}
module.exports.getEsmExportName = $b59d556cec69fd3c$var$getEsmExportName;
function $b59d556cec69fd3c$var$regexpCode(rx) {
    return new $b59d556cec69fd3c$var$_Code(rx.toString());
}
module.exports.regexpCode = $b59d556cec69fd3c$var$regexpCode;

});

parcelRequire.register("cFQ3g", function(module, exports) {

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $5sttm = parcelRequire("5sttm");

var $1he00 = parcelRequire("1he00");

var $8zIXb = parcelRequire("8zIXb");

var $iXJoB = parcelRequire("iXJoB");

var $2qJq4 = parcelRequire("2qJq4");

var $8oBD6 = parcelRequire("8oBD6");
"use strict";
function $93a1b0ba7ac07dfd$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        ".",
        "[",
        "]"
    ]);
    $93a1b0ba7ac07dfd$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $93a1b0ba7ac07dfd$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "\n"
    ], [
        "\\n"
    ]);
    $93a1b0ba7ac07dfd$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $93a1b0ba7ac07dfd$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "",
        "",
        ""
    ]);
    $93a1b0ba7ac07dfd$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $93a1b0ba7ac07dfd$var$_templateObject3() {
    var data = (0, $iXJoB.default)([
        "",
        "",
        " ",
        " = ",
        ";",
        ""
    ]);
    $93a1b0ba7ac07dfd$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function $93a1b0ba7ac07dfd$var$_templateObject4() {
    var data = (0, $iXJoB.default)([
        "",
        "",
        "",
        ""
    ]);
    $93a1b0ba7ac07dfd$var$_templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.ValueScope = module.exports.ValueScopeName = module.exports.Scope = module.exports.varKinds = module.exports.UsedValueState = void 0;

var $fAJgM = parcelRequire("fAJgM");
var $93a1b0ba7ac07dfd$var$ValueError = /*#__PURE__*/ function(Error) {
    (0, $5sttm.default)(ValueError, Error);
    var _super = (0, $8oBD6.default)(ValueError);
    function ValueError(name) {
        (0, $f3yih.default)(this, ValueError);
        var _this;
        _this = _super.call(this, 'CodeGen: "code" for '.concat(name, " not defined"));
        _this.value = name.value;
        return _this;
    }
    return ValueError;
}((0, $2qJq4.default)(Error));
var $93a1b0ba7ac07dfd$var$UsedValueState;
(function(UsedValueState1) {
    UsedValueState1[UsedValueState1["Started"] = 0] = "Started";
    UsedValueState1[UsedValueState1["Completed"] = 1] = "Completed";
})($93a1b0ba7ac07dfd$var$UsedValueState = module.exports.UsedValueState || (module.exports.UsedValueState = {}));
module.exports.varKinds = {
    const: new $fAJgM.Name("const"),
    let: new $fAJgM.Name("let"),
    var: new $fAJgM.Name("var")
};
var $93a1b0ba7ac07dfd$var$Scope = /*#__PURE__*/ function() {
    function Scope() {
        var ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, prefixes = ref.prefixes, parent = ref.parent;
        (0, $f3yih.default)(this, Scope);
        this._names = {};
        this._prefixes = prefixes;
        this._parent = parent;
    }
    (0, $2x3qu.default)(Scope, [
        {
            key: "toName",
            value: function toName(nameOrPrefix) {
                return nameOrPrefix instanceof $fAJgM.Name ? nameOrPrefix : this.name(nameOrPrefix);
            }
        },
        {
            key: "name",
            value: function name(prefix) {
                return new $fAJgM.Name(this._newName(prefix));
            }
        },
        {
            key: "_newName",
            value: function _newName(prefix) {
                var ng = this._names[prefix] || this._nameGroup(prefix);
                return "".concat(prefix).concat(ng.index++);
            }
        },
        {
            key: "_nameGroup",
            value: function _nameGroup(prefix) {
                var _a, _b;
                if (((_b = (_a = this._parent) === null || _a === void 0 ? void 0 : _a._prefixes) === null || _b === void 0 ? void 0 : _b.has(prefix)) || this._prefixes && !this._prefixes.has(prefix)) throw new Error('CodeGen: prefix "'.concat(prefix, '" is not allowed in this scope'));
                return this._names[prefix] = {
                    prefix: prefix,
                    index: 0
                };
            }
        }
    ]);
    return Scope;
}();
module.exports.Scope = $93a1b0ba7ac07dfd$var$Scope;
var $93a1b0ba7ac07dfd$var$ValueScopeName = /*#__PURE__*/ function(_Name) {
    (0, $5sttm.default)(ValueScopeName, _Name);
    var _super = (0, $8oBD6.default)(ValueScopeName);
    function ValueScopeName(prefix, nameStr) {
        (0, $f3yih.default)(this, ValueScopeName);
        var _this;
        _this = _super.call(this, nameStr);
        _this.prefix = prefix;
        return _this;
    }
    (0, $2x3qu.default)(ValueScopeName, [
        {
            key: "setValue",
            value: function setValue(value, param) {
                var property = param.property, itemIndex = param.itemIndex;
                this.value = value;
                this.scopePath = $fAJgM._($93a1b0ba7ac07dfd$var$_templateObject(), new $fAJgM.Name(property), itemIndex);
            }
        }
    ]);
    return ValueScopeName;
}($fAJgM.Name);
module.exports.ValueScopeName = $93a1b0ba7ac07dfd$var$ValueScopeName;
var $93a1b0ba7ac07dfd$var$line = $fAJgM._($93a1b0ba7ac07dfd$var$_templateObject1());
var $93a1b0ba7ac07dfd$var$ValueScope = /*#__PURE__*/ function(Scope) {
    (0, $5sttm.default)(ValueScope, Scope);
    var _super = (0, $8oBD6.default)(ValueScope);
    function ValueScope(opts) {
        (0, $f3yih.default)(this, ValueScope);
        var _this;
        _this = _super.call(this, opts);
        _this._values = {};
        _this._scope = opts.scope;
        _this.opts = (0, $8zIXb.default)((0, $1he00.default)({}, opts), {
            _n: opts.lines ? $93a1b0ba7ac07dfd$var$line : $fAJgM.nil
        });
        return _this;
    }
    (0, $2x3qu.default)(ValueScope, [
        {
            key: "get",
            value: function get() {
                return this._scope;
            }
        },
        {
            key: "name",
            value: function name(prefix) {
                return new $93a1b0ba7ac07dfd$var$ValueScopeName(prefix, this._newName(prefix));
            }
        },
        {
            key: "value",
            value: function value1(nameOrPrefix, value) {
                var _a;
                if (value.ref === undefined) throw new Error("CodeGen: ref must be passed in value");
                var name = this.toName(nameOrPrefix);
                var prefix = name.prefix;
                var valueKey = (_a = value.key) !== null && _a !== void 0 ? _a : value.ref;
                var vs = this._values[prefix];
                if (vs) {
                    var _name = vs.get(valueKey);
                    if (_name) return _name;
                } else vs = this._values[prefix] = new Map();
                vs.set(valueKey, name);
                var s = this._scope[prefix] || (this._scope[prefix] = []);
                var itemIndex = s.length;
                s[itemIndex] = value.ref;
                name.setValue(value, {
                    property: prefix,
                    itemIndex: itemIndex
                });
                return name;
            }
        },
        {
            key: "getValue",
            value: function getValue(prefix, keyOrRef) {
                var vs = this._values[prefix];
                if (!vs) return;
                return vs.get(keyOrRef);
            }
        },
        {
            key: "scopeRefs",
            value: function scopeRefs(scopeName) {
                var values = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this._values;
                return this._reduceValues(values, function(name) {
                    if (name.scopePath === undefined) throw new Error('CodeGen: name "'.concat(name, '" has no value'));
                    return $fAJgM._($93a1b0ba7ac07dfd$var$_templateObject2(), scopeName, name.scopePath);
                });
            }
        },
        {
            key: "scopeCode",
            value: function scopeCode() {
                var values = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._values, usedValues = arguments.length > 1 ? arguments[1] : void 0, getCode = arguments.length > 2 ? arguments[2] : void 0;
                return this._reduceValues(values, function(name) {
                    if (name.value === undefined) throw new Error('CodeGen: name "'.concat(name, '" has no value'));
                    return name.value.code;
                }, usedValues, getCode);
            }
        },
        {
            key: "_reduceValues",
            value: function _reduceValues(values, valueCode) {
                var usedValues = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, getCode = arguments.length > 3 ? arguments[3] : void 0;
                var code = $fAJgM.nil;
                for(var prefix in values){
                    var _this = this;
                    var vs = values[prefix];
                    if (!vs) continue;
                    var nameSet = usedValues[prefix] = usedValues[prefix] || new Map();
                    vs.forEach(function(name) {
                        if (nameSet.has(name)) return;
                        nameSet.set(name, $93a1b0ba7ac07dfd$var$UsedValueState.Started);
                        var c = valueCode(name);
                        if (c) {
                            var def = _this.opts.es5 ? module.exports.varKinds.var : module.exports.varKinds.const;
                            code = $fAJgM._($93a1b0ba7ac07dfd$var$_templateObject3(), code, def, name, c, _this.opts._n);
                        } else if (c = getCode === null || getCode === void 0 ? void 0 : getCode(name)) code = $fAJgM._($93a1b0ba7ac07dfd$var$_templateObject4(), code, c, _this.opts._n);
                        else throw new $93a1b0ba7ac07dfd$var$ValueError(name);
                        nameSet.set(name, $93a1b0ba7ac07dfd$var$UsedValueState.Completed);
                    });
                }
                return code;
            }
        }
    ]);
    return ValueScope;
}($93a1b0ba7ac07dfd$var$Scope);
module.exports.ValueScope = $93a1b0ba7ac07dfd$var$ValueScope;

});


parcelRequire.register("eF2Jh", function(module, exports) {

var $1he00 = parcelRequire("1he00");

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $aac703026a4271a6$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "",
        ""
    ]);
    $aac703026a4271a6$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $aac703026a4271a6$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "",
        "",
        "",
        ""
    ]);
    $aac703026a4271a6$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $aac703026a4271a6$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "",
        " !== true && ",
        " !== undefined"
    ]);
    $aac703026a4271a6$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $aac703026a4271a6$var$_templateObject3() {
    var data = (0, $iXJoB.default)([
        "",
        " === true"
    ]);
    $aac703026a4271a6$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function $aac703026a4271a6$var$_templateObject4() {
    var data = (0, $iXJoB.default)([
        "",
        " || {}"
    ]);
    $aac703026a4271a6$var$_templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
function $aac703026a4271a6$var$_templateObject5() {
    var data = (0, $iXJoB.default)([
        "Object.assign(",
        ", ",
        ")"
    ]);
    $aac703026a4271a6$var$_templateObject5 = function _templateObject5() {
        return data;
    };
    return data;
}
function $aac703026a4271a6$var$_templateObject6() {
    var data = (0, $iXJoB.default)([
        "",
        " !== true"
    ]);
    $aac703026a4271a6$var$_templateObject6 = function _templateObject6() {
        return data;
    };
    return data;
}
function $aac703026a4271a6$var$_templateObject7() {
    var data = (0, $iXJoB.default)([
        "",
        " || {}"
    ]);
    $aac703026a4271a6$var$_templateObject7 = function _templateObject7() {
        return data;
    };
    return data;
}
function $aac703026a4271a6$var$_templateObject8() {
    var data = (0, $iXJoB.default)([
        "",
        " !== true && ",
        " !== undefined"
    ]);
    $aac703026a4271a6$var$_templateObject8 = function _templateObject8() {
        return data;
    };
    return data;
}
function $aac703026a4271a6$var$_templateObject9() {
    var data = (0, $iXJoB.default)([
        "",
        " === true ? true : ",
        " > ",
        " ? ",
        " : ",
        ""
    ]);
    $aac703026a4271a6$var$_templateObject9 = function _templateObject9() {
        return data;
    };
    return data;
}
function $aac703026a4271a6$var$_templateObject10() {
    var data = (0, $iXJoB.default)([
        "",
        " !== true"
    ]);
    $aac703026a4271a6$var$_templateObject10 = function _templateObject10() {
        return data;
    };
    return data;
}
function $aac703026a4271a6$var$_templateObject11() {
    var data = (0, $iXJoB.default)([
        "",
        " > ",
        " ? ",
        " : ",
        ""
    ]);
    $aac703026a4271a6$var$_templateObject11 = function _templateObject11() {
        return data;
    };
    return data;
}
function $aac703026a4271a6$var$_templateObject12() {
    var data = (0, $iXJoB.default)([
        "{}"
    ]);
    $aac703026a4271a6$var$_templateObject12 = function _templateObject12() {
        return data;
    };
    return data;
}
function $aac703026a4271a6$var$_templateObject13() {
    var data = (0, $iXJoB.default)([
        "",
        "",
        ""
    ]);
    $aac703026a4271a6$var$_templateObject13 = function _templateObject13() {
        return data;
    };
    return data;
}
function $aac703026a4271a6$var$_templateObject14() {
    var data = (0, $iXJoB.default)([
        '"[" + ',
        ' + "]"'
    ]);
    $aac703026a4271a6$var$_templateObject14 = function _templateObject14() {
        return data;
    };
    return data;
}
function $aac703026a4271a6$var$_templateObject15() {
    var data = (0, $iXJoB.default)([
        '"[\'" + ',
        ' + "\']"'
    ]);
    $aac703026a4271a6$var$_templateObject15 = function _templateObject15() {
        return data;
    };
    return data;
}
function $aac703026a4271a6$var$_templateObject16() {
    var data = (0, $iXJoB.default)([
        '"/" + ',
        ""
    ]);
    $aac703026a4271a6$var$_templateObject16 = function _templateObject16() {
        return data;
    };
    return data;
}
function $aac703026a4271a6$var$_templateObject17() {
    var data = (0, $iXJoB.default)([
        '"/" + ',
        '.replace(/~/g, "~0").replace(/\\//g, "~1")'
    ], [
        '"/" + ',
        '.replace(/~/g, "~0").replace(/\\\\//g, "~1")'
    ]);
    $aac703026a4271a6$var$_templateObject17 = function _templateObject17() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.checkStrictMode = module.exports.getErrorPath = module.exports.Type = module.exports.useFunc = module.exports.setEvaluated = module.exports.evaluatedPropsToName = module.exports.mergeEvaluated = module.exports.eachItem = module.exports.unescapeJsonPointer = module.exports.escapeJsonPointer = module.exports.escapeFragment = module.exports.unescapeFragment = module.exports.schemaRefOrVal = module.exports.schemaHasRulesButRef = module.exports.schemaHasRules = module.exports.checkUnknownRules = module.exports.alwaysValidSchema = module.exports.toHash = void 0;

var $jkIFZ = parcelRequire("jkIFZ");

var $fAJgM = parcelRequire("fAJgM");
// TODO refactor to use Set
function $aac703026a4271a6$var$toHash(arr) {
    var hash = {};
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var item = _step.value;
            hash[item] = true;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return hash;
}
module.exports.toHash = $aac703026a4271a6$var$toHash;
function $aac703026a4271a6$var$alwaysValidSchema(it, schema) {
    if (typeof schema == "boolean") return schema;
    if (Object.keys(schema).length === 0) return true;
    $aac703026a4271a6$var$checkUnknownRules(it, schema);
    return !$aac703026a4271a6$var$schemaHasRules(schema, it.self.RULES.all);
}
module.exports.alwaysValidSchema = $aac703026a4271a6$var$alwaysValidSchema;
function $aac703026a4271a6$var$checkUnknownRules(it) {
    var schema = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : it.schema;
    var opts = it.opts, self = it.self;
    if (!opts.strictSchema) return;
    if (typeof schema === "boolean") return;
    var rules = self.RULES.keywords;
    for(var key in schema)if (!rules[key]) $aac703026a4271a6$var$checkStrictMode(it, 'unknown keyword: "'.concat(key, '"'));
}
module.exports.checkUnknownRules = $aac703026a4271a6$var$checkUnknownRules;
function $aac703026a4271a6$var$schemaHasRules(schema, rules) {
    if (typeof schema == "boolean") return !schema;
    for(var key in schema)if (rules[key]) return true;
    return false;
}
module.exports.schemaHasRules = $aac703026a4271a6$var$schemaHasRules;
function $aac703026a4271a6$var$schemaHasRulesButRef(schema, RULES) {
    if (typeof schema == "boolean") return !schema;
    for(var key in schema)if (key !== "$ref" && RULES.all[key]) return true;
    return false;
}
module.exports.schemaHasRulesButRef = $aac703026a4271a6$var$schemaHasRulesButRef;
function $aac703026a4271a6$var$schemaRefOrVal(param, schema, keyword, $data) {
    var topSchemaRef = param.topSchemaRef, schemaPath = param.schemaPath;
    if (!$data) {
        if (typeof schema == "number" || typeof schema == "boolean") return schema;
        if (typeof schema == "string") return $jkIFZ._($aac703026a4271a6$var$_templateObject(), schema);
    }
    return $jkIFZ._($aac703026a4271a6$var$_templateObject1(), topSchemaRef, schemaPath, (0, $jkIFZ.getProperty)(keyword));
}
module.exports.schemaRefOrVal = $aac703026a4271a6$var$schemaRefOrVal;
function $aac703026a4271a6$var$unescapeFragment(str) {
    return $aac703026a4271a6$var$unescapeJsonPointer(decodeURIComponent(str));
}
module.exports.unescapeFragment = $aac703026a4271a6$var$unescapeFragment;
function $aac703026a4271a6$var$escapeFragment(str) {
    return encodeURIComponent($aac703026a4271a6$var$escapeJsonPointer(str));
}
module.exports.escapeFragment = $aac703026a4271a6$var$escapeFragment;
function $aac703026a4271a6$var$escapeJsonPointer(str) {
    if (typeof str == "number") return "".concat(str);
    return str.replace(/~/g, "~0").replace(/\//g, "~1");
}
module.exports.escapeJsonPointer = $aac703026a4271a6$var$escapeJsonPointer;
function $aac703026a4271a6$var$unescapeJsonPointer(str) {
    return str.replace(/~1/g, "/").replace(/~0/g, "~");
}
module.exports.unescapeJsonPointer = $aac703026a4271a6$var$unescapeJsonPointer;
function $aac703026a4271a6$var$eachItem(xs, f) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    if (Array.isArray(xs)) try {
        for(var _iterator = xs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var x = _step.value;
            f(x);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    else f(xs);
}
module.exports.eachItem = $aac703026a4271a6$var$eachItem;
function $aac703026a4271a6$var$makeMergeEvaluated(param) {
    var mergeNames = param.mergeNames, mergeToName = param.mergeToName, mergeValues = param.mergeValues, resultToName = param.resultToName;
    return function(gen, from, to, toName) {
        var res = to === undefined ? from : to instanceof $jkIFZ.Name ? (from instanceof $jkIFZ.Name ? mergeNames(gen, from, to) : mergeToName(gen, from, to), to) : from instanceof $jkIFZ.Name ? (mergeToName(gen, to, from), from) : mergeValues(from, to);
        return toName === $jkIFZ.Name && !(res instanceof $jkIFZ.Name) ? resultToName(gen, res) : res;
    };
}
module.exports.mergeEvaluated = {
    props: $aac703026a4271a6$var$makeMergeEvaluated({
        mergeNames: function(gen, from, to) {
            return gen.if($jkIFZ._($aac703026a4271a6$var$_templateObject2(), to, from), function() {
                gen.if($jkIFZ._($aac703026a4271a6$var$_templateObject3(), from), function() {
                    return gen.assign(to, true);
                }, function() {
                    return gen.assign(to, $jkIFZ._($aac703026a4271a6$var$_templateObject4(), to)).code($jkIFZ._($aac703026a4271a6$var$_templateObject5(), to, from));
                });
            });
        },
        mergeToName: function(gen, from, to) {
            return gen.if($jkIFZ._($aac703026a4271a6$var$_templateObject6(), to), function() {
                if (from === true) gen.assign(to, true);
                else {
                    gen.assign(to, $jkIFZ._($aac703026a4271a6$var$_templateObject7(), to));
                    $aac703026a4271a6$var$setEvaluated(gen, to, from);
                }
            });
        },
        mergeValues: function(from, to) {
            return from === true ? true : (0, $1he00.default)({}, from, to);
        },
        resultToName: $aac703026a4271a6$var$evaluatedPropsToName
    }),
    items: $aac703026a4271a6$var$makeMergeEvaluated({
        mergeNames: function(gen, from, to) {
            return gen.if($jkIFZ._($aac703026a4271a6$var$_templateObject8(), to, from), function() {
                return gen.assign(to, $jkIFZ._($aac703026a4271a6$var$_templateObject9(), from, to, from, to, from));
            });
        },
        mergeToName: function(gen, from, to) {
            return gen.if($jkIFZ._($aac703026a4271a6$var$_templateObject10(), to), function() {
                return gen.assign(to, from === true ? true : $jkIFZ._($aac703026a4271a6$var$_templateObject11(), to, from, to, from));
            });
        },
        mergeValues: function(from, to) {
            return from === true ? true : Math.max(from, to);
        },
        resultToName: function(gen, items) {
            return gen.var("items", items);
        }
    })
};
function $aac703026a4271a6$var$evaluatedPropsToName(gen, ps) {
    if (ps === true) return gen.var("props", true);
    var props = gen.var("props", $jkIFZ._($aac703026a4271a6$var$_templateObject12()));
    if (ps !== undefined) $aac703026a4271a6$var$setEvaluated(gen, props, ps);
    return props;
}
module.exports.evaluatedPropsToName = $aac703026a4271a6$var$evaluatedPropsToName;
function $aac703026a4271a6$var$setEvaluated(gen, props, ps) {
    Object.keys(ps).forEach(function(p) {
        return gen.assign($jkIFZ._($aac703026a4271a6$var$_templateObject13(), props, (0, $jkIFZ.getProperty)(p)), true);
    });
}
module.exports.setEvaluated = $aac703026a4271a6$var$setEvaluated;
var $aac703026a4271a6$var$snippets = {};
function $aac703026a4271a6$var$useFunc(gen, f) {
    return gen.scopeValue("func", {
        ref: f,
        code: $aac703026a4271a6$var$snippets[f.code] || ($aac703026a4271a6$var$snippets[f.code] = new $fAJgM._Code(f.code))
    });
}
module.exports.useFunc = $aac703026a4271a6$var$useFunc;
var $aac703026a4271a6$var$Type;
(function(Type1) {
    Type1[Type1["Num"] = 0] = "Num";
    Type1[Type1["Str"] = 1] = "Str";
})($aac703026a4271a6$var$Type = module.exports.Type || (module.exports.Type = {}));
function $aac703026a4271a6$var$getErrorPath(dataProp, dataPropType, jsPropertySyntax) {
    // let path
    if (dataProp instanceof $jkIFZ.Name) {
        var isNumber = dataPropType === $aac703026a4271a6$var$Type.Num;
        return jsPropertySyntax ? isNumber ? $jkIFZ._($aac703026a4271a6$var$_templateObject14(), dataProp) : $jkIFZ._($aac703026a4271a6$var$_templateObject15(), dataProp) : isNumber ? $jkIFZ._($aac703026a4271a6$var$_templateObject16(), dataProp) : $jkIFZ._($aac703026a4271a6$var$_templateObject17(), dataProp); // TODO maybe use global escapePointer
    }
    return jsPropertySyntax ? (0, $jkIFZ.getProperty)(dataProp).toString() : "/" + $aac703026a4271a6$var$escapeJsonPointer(dataProp);
}
module.exports.getErrorPath = $aac703026a4271a6$var$getErrorPath;
function $aac703026a4271a6$var$checkStrictMode(it, msg) {
    var mode = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : it.opts.strictSchema;
    if (!mode) return;
    msg = "strict mode: ".concat(msg);
    if (mode === true) throw new Error(msg);
    it.self.logger.warn(msg);
}
module.exports.checkStrictMode = $aac703026a4271a6$var$checkStrictMode;

});

parcelRequire.register("4QYyN", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jkIFZ = parcelRequire("jkIFZ");
var $388afebe7772b674$var$names = {
    // validation function arguments
    data: new $jkIFZ.Name("data"),
    // args passed from referencing schema
    valCxt: new $jkIFZ.Name("valCxt"),
    instancePath: new $jkIFZ.Name("instancePath"),
    parentData: new $jkIFZ.Name("parentData"),
    parentDataProperty: new $jkIFZ.Name("parentDataProperty"),
    rootData: new $jkIFZ.Name("rootData"),
    dynamicAnchors: new $jkIFZ.Name("dynamicAnchors"),
    // function scoped variables
    vErrors: new $jkIFZ.Name("vErrors"),
    errors: new $jkIFZ.Name("errors"),
    this: new $jkIFZ.Name("this"),
    // "globals"
    self: new $jkIFZ.Name("self"),
    scope: new $jkIFZ.Name("scope"),
    // JTD serialize/parse name for JSON string and position
    json: new $jkIFZ.Name("json"),
    jsonPos: new $jkIFZ.Name("jsonPos"),
    jsonLen: new $jkIFZ.Name("jsonLen"),
    jsonPart: new $jkIFZ.Name("jsonPart")
};
module.exports.default = $388afebe7772b674$var$names;

});



parcelRequire.register("6PO8h", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $4f9e64c2576053ad$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "",
        ' == "number" || ',
        ' == "boolean"'
    ]);
    $4f9e64c2576053ad$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        '"" + ',
        ""
    ]);
    $4f9e64c2576053ad$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "",
        " === null"
    ]);
    $4f9e64c2576053ad$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject3() {
    var data = (0, $iXJoB.default)([
        '""'
    ]);
    $4f9e64c2576053ad$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject4() {
    var data = (0, $iXJoB.default)([
        "",
        ' == "boolean" || ',
        " === null\n              || (",
        ' == "string" && ',
        " && ",
        " == +",
        ")"
    ]);
    $4f9e64c2576053ad$var$_templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject5() {
    var data = (0, $iXJoB.default)([
        "+",
        ""
    ]);
    $4f9e64c2576053ad$var$_templateObject5 = function _templateObject5() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject6() {
    var data = (0, $iXJoB.default)([
        "",
        ' === "boolean" || ',
        " === null\n              || (",
        ' === "string" && ',
        " && ",
        " == +",
        " && !(",
        " % 1))"
    ]);
    $4f9e64c2576053ad$var$_templateObject6 = function _templateObject6() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject7() {
    var data = (0, $iXJoB.default)([
        "+",
        ""
    ]);
    $4f9e64c2576053ad$var$_templateObject7 = function _templateObject7() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject8() {
    var data = (0, $iXJoB.default)([
        "",
        ' === "false" || ',
        " === 0 || ",
        " === null"
    ]);
    $4f9e64c2576053ad$var$_templateObject8 = function _templateObject8() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject9() {
    var data = (0, $iXJoB.default)([
        "",
        ' === "true" || ',
        " === 1"
    ]);
    $4f9e64c2576053ad$var$_templateObject9 = function _templateObject9() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject10() {
    var data = (0, $iXJoB.default)([
        "",
        ' === "" || ',
        " === 0 || ",
        " === false"
    ]);
    $4f9e64c2576053ad$var$_templateObject10 = function _templateObject10() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject11() {
    var data = (0, $iXJoB.default)([
        "",
        ' === "string" || ',
        ' === "number"\n              || ',
        ' === "boolean" || ',
        " === null"
    ]);
    $4f9e64c2576053ad$var$_templateObject11 = function _templateObject11() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject12() {
    var data = (0, $iXJoB.default)([
        "[",
        "]"
    ]);
    $4f9e64c2576053ad$var$_templateObject12 = function _templateObject12() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject13() {
    var data = (0, $iXJoB.default)([
        "typeof ",
        ""
    ]);
    $4f9e64c2576053ad$var$_templateObject13 = function _templateObject13() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject14() {
    var data = (0, $iXJoB.default)([
        "undefined"
    ]);
    $4f9e64c2576053ad$var$_templateObject14 = function _templateObject14() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject15() {
    var data = (0, $iXJoB.default)([
        "",
        " == 'object' && Array.isArray(",
        ") && ",
        ".length == 1"
    ]);
    $4f9e64c2576053ad$var$_templateObject15 = function _templateObject15() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject16() {
    var data = (0, $iXJoB.default)([
        "",
        "[0]"
    ]);
    $4f9e64c2576053ad$var$_templateObject16 = function _templateObject16() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject17() {
    var data = (0, $iXJoB.default)([
        "typeof ",
        ""
    ]);
    $4f9e64c2576053ad$var$_templateObject17 = function _templateObject17() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject18() {
    var data = (0, $iXJoB.default)([
        "",
        " !== undefined"
    ]);
    $4f9e64c2576053ad$var$_templateObject18 = function _templateObject18() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject19() {
    var data = (0, $iXJoB.default)([
        "",
        " !== undefined"
    ]);
    $4f9e64c2576053ad$var$_templateObject19 = function _templateObject19() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject20() {
    var data = (0, $iXJoB.default)([
        "",
        " !== undefined"
    ]);
    $4f9e64c2576053ad$var$_templateObject20 = function _templateObject20() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject21() {
    var data = (0, $iXJoB.default)([
        "",
        "[",
        "]"
    ]);
    $4f9e64c2576053ad$var$_templateObject21 = function _templateObject21() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject22() {
    var data = (0, $iXJoB.default)([
        "typeof ",
        ' == "number"'
    ]);
    $4f9e64c2576053ad$var$_templateObject22 = function _templateObject22() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject23() {
    var data = (0, $iXJoB.default)([
        "isFinite(",
        ")"
    ]);
    $4f9e64c2576053ad$var$_templateObject23 = function _templateObject23() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject24() {
    var data = (0, $iXJoB.default)([
        "",
        " ",
        " null"
    ]);
    $4f9e64c2576053ad$var$_templateObject24 = function _templateObject24() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject25() {
    var data = (0, $iXJoB.default)([
        "Array.isArray(",
        ")"
    ]);
    $4f9e64c2576053ad$var$_templateObject25 = function _templateObject25() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject26() {
    var data = (0, $iXJoB.default)([
        "",
        " && typeof ",
        ' == "object" && !Array.isArray(',
        ")"
    ]);
    $4f9e64c2576053ad$var$_templateObject26 = function _templateObject26() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject27() {
    var data = (0, $iXJoB.default)([
        "!(",
        " % 1) && !isNaN(",
        ")"
    ]);
    $4f9e64c2576053ad$var$_templateObject27 = function _templateObject27() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject28() {
    var data = (0, $iXJoB.default)([
        "typeof ",
        " ",
        " ",
        ""
    ]);
    $4f9e64c2576053ad$var$_templateObject28 = function _templateObject28() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject29() {
    var data = (0, $iXJoB.default)([
        "typeof ",
        ' != "object"'
    ]);
    $4f9e64c2576053ad$var$_templateObject29 = function _templateObject29() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject30() {
    var data = (0, $iXJoB.default)([
        "!",
        " || ",
        ""
    ]);
    $4f9e64c2576053ad$var$_templateObject30 = function _templateObject30() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject31() {
    var data = (0, $iXJoB.default)([
        "{type: ",
        "}"
    ]);
    $4f9e64c2576053ad$var$_templateObject31 = function _templateObject31() {
        return data;
    };
    return data;
}
function $4f9e64c2576053ad$var$_templateObject32() {
    var data = (0, $iXJoB.default)([
        "{type: ",
        "}"
    ]);
    $4f9e64c2576053ad$var$_templateObject32 = function _templateObject32() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.reportTypeError = module.exports.checkDataTypes = module.exports.checkDataType = module.exports.coerceAndCheckDataType = module.exports.getJSONTypes = module.exports.getSchemaTypes = module.exports.DataType = void 0;

var $dUDQb = parcelRequire("dUDQb");

var $4MXbj = parcelRequire("4MXbj");

var $lvc7F = parcelRequire("lvc7F");

var $jkIFZ = parcelRequire("jkIFZ");

var $eF2Jh = parcelRequire("eF2Jh");
var $4f9e64c2576053ad$var$DataType;
(function(DataType1) {
    DataType1[DataType1["Correct"] = 0] = "Correct";
    DataType1[DataType1["Wrong"] = 1] = "Wrong";
})($4f9e64c2576053ad$var$DataType = module.exports.DataType || (module.exports.DataType = {}));
function $4f9e64c2576053ad$var$getSchemaTypes(schema) {
    var types = $4f9e64c2576053ad$var$getJSONTypes(schema.type);
    var hasNull = types.includes("null");
    if (hasNull) {
        if (schema.nullable === false) throw new Error("type: null contradicts nullable: false");
    } else {
        if (!types.length && schema.nullable !== undefined) throw new Error('"nullable" cannot be used without "type"');
        if (schema.nullable === true) types.push("null");
    }
    return types;
}
module.exports.getSchemaTypes = $4f9e64c2576053ad$var$getSchemaTypes;
function $4f9e64c2576053ad$var$getJSONTypes(ts) {
    var types = Array.isArray(ts) ? ts : ts ? [
        ts
    ] : [];
    if (types.every($dUDQb.isJSONType)) return types;
    throw new Error("type must be JSONType or JSONType[]: " + types.join(","));
}
module.exports.getJSONTypes = $4f9e64c2576053ad$var$getJSONTypes;
function $4f9e64c2576053ad$var$coerceAndCheckDataType(it, types) {
    var gen = it.gen, data = it.data, opts = it.opts;
    var coerceTo = $4f9e64c2576053ad$var$coerceToTypes(types, opts.coerceTypes);
    var checkTypes = types.length > 0 && !(coerceTo.length === 0 && types.length === 1 && (0, $4MXbj.schemaHasRulesForType)(it, types[0]));
    if (checkTypes) {
        var wrongType = $4f9e64c2576053ad$var$checkDataTypes(types, data, opts.strictNumbers, $4f9e64c2576053ad$var$DataType.Wrong);
        gen.if(wrongType, function() {
            if (coerceTo.length) $4f9e64c2576053ad$var$coerceData(it, types, coerceTo);
            else $4f9e64c2576053ad$var$reportTypeError(it);
        });
    }
    return checkTypes;
}
module.exports.coerceAndCheckDataType = $4f9e64c2576053ad$var$coerceAndCheckDataType;
var $4f9e64c2576053ad$var$COERCIBLE = new Set([
    "string",
    "number",
    "integer",
    "boolean",
    "null"
]);
function $4f9e64c2576053ad$var$coerceToTypes(types, coerceTypes) {
    return coerceTypes ? types.filter(function(t) {
        return $4f9e64c2576053ad$var$COERCIBLE.has(t) || coerceTypes === "array" && t === "array";
    }) : [];
}
function $4f9e64c2576053ad$var$coerceData(it, types, coerceTo) {
    var coerceSpecificType = function coerceSpecificType(t) {
        switch(t){
            case "string":
                gen.elseIf($jkIFZ._($4f9e64c2576053ad$var$_templateObject(), dataType, dataType)).assign(coerced, $jkIFZ._($4f9e64c2576053ad$var$_templateObject1(), data)).elseIf($jkIFZ._($4f9e64c2576053ad$var$_templateObject2(), data)).assign(coerced, $jkIFZ._($4f9e64c2576053ad$var$_templateObject3()));
                return;
            case "number":
                gen.elseIf($jkIFZ._($4f9e64c2576053ad$var$_templateObject4(), dataType, data, dataType, data, data, data)).assign(coerced, $jkIFZ._($4f9e64c2576053ad$var$_templateObject5(), data));
                return;
            case "integer":
                gen.elseIf($jkIFZ._($4f9e64c2576053ad$var$_templateObject6(), dataType, data, dataType, data, data, data, data)).assign(coerced, $jkIFZ._($4f9e64c2576053ad$var$_templateObject7(), data));
                return;
            case "boolean":
                gen.elseIf($jkIFZ._($4f9e64c2576053ad$var$_templateObject8(), data, data, data)).assign(coerced, false).elseIf($jkIFZ._($4f9e64c2576053ad$var$_templateObject9(), data, data)).assign(coerced, true);
                return;
            case "null":
                gen.elseIf($jkIFZ._($4f9e64c2576053ad$var$_templateObject10(), data, data, data));
                gen.assign(coerced, null);
                return;
            case "array":
                gen.elseIf($jkIFZ._($4f9e64c2576053ad$var$_templateObject11(), dataType, dataType, dataType, data)).assign(coerced, $jkIFZ._($4f9e64c2576053ad$var$_templateObject12(), data));
        }
    };
    var gen = it.gen, data = it.data, opts = it.opts;
    var dataType = gen.let("dataType", $jkIFZ._($4f9e64c2576053ad$var$_templateObject13(), data));
    var coerced = gen.let("coerced", $jkIFZ._($4f9e64c2576053ad$var$_templateObject14()));
    if (opts.coerceTypes === "array") gen.if($jkIFZ._($4f9e64c2576053ad$var$_templateObject15(), dataType, data, data), function() {
        return gen.assign(data, $jkIFZ._($4f9e64c2576053ad$var$_templateObject16(), data)).assign(dataType, $jkIFZ._($4f9e64c2576053ad$var$_templateObject17(), data)).if($4f9e64c2576053ad$var$checkDataTypes(types, data, opts.strictNumbers), function() {
            return gen.assign(coerced, data);
        });
    });
    gen.if($jkIFZ._($4f9e64c2576053ad$var$_templateObject18(), coerced));
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = coerceTo[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var t1 = _step.value;
            if ($4f9e64c2576053ad$var$COERCIBLE.has(t1) || t1 === "array" && opts.coerceTypes === "array") coerceSpecificType(t1);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    gen.else();
    $4f9e64c2576053ad$var$reportTypeError(it);
    gen.endIf();
    gen.if($jkIFZ._($4f9e64c2576053ad$var$_templateObject19(), coerced), function() {
        gen.assign(data, coerced);
        $4f9e64c2576053ad$var$assignParentData(it, coerced);
    });
}
function $4f9e64c2576053ad$var$assignParentData(param, expr) {
    var gen = param.gen, parentData = param.parentData, parentDataProperty = param.parentDataProperty;
    // TODO use gen.property
    gen.if($jkIFZ._($4f9e64c2576053ad$var$_templateObject20(), parentData), function() {
        return gen.assign($jkIFZ._($4f9e64c2576053ad$var$_templateObject21(), parentData, parentDataProperty), expr);
    });
}
function $4f9e64c2576053ad$var$checkDataType(dataType, data, strictNums) {
    var correct = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : $4f9e64c2576053ad$var$DataType.Correct;
    var numCond = function numCond() {
        var _cond = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $jkIFZ.nil;
        return (0, $jkIFZ.and)($jkIFZ._($4f9e64c2576053ad$var$_templateObject22(), data), _cond, strictNums ? $jkIFZ._($4f9e64c2576053ad$var$_templateObject23(), data) : $jkIFZ.nil);
    };
    var EQ = correct === $4f9e64c2576053ad$var$DataType.Correct ? $jkIFZ.operators.EQ : $jkIFZ.operators.NEQ;
    var cond;
    switch(dataType){
        case "null":
            return $jkIFZ._($4f9e64c2576053ad$var$_templateObject24(), data, EQ);
        case "array":
            cond = $jkIFZ._($4f9e64c2576053ad$var$_templateObject25(), data);
            break;
        case "object":
            cond = $jkIFZ._($4f9e64c2576053ad$var$_templateObject26(), data, data, data);
            break;
        case "integer":
            cond = numCond($jkIFZ._($4f9e64c2576053ad$var$_templateObject27(), data, data));
            break;
        case "number":
            cond = numCond();
            break;
        default:
            return $jkIFZ._($4f9e64c2576053ad$var$_templateObject28(), data, EQ, dataType);
    }
    return correct === $4f9e64c2576053ad$var$DataType.Correct ? cond : (0, $jkIFZ.not)(cond);
}
module.exports.checkDataType = $4f9e64c2576053ad$var$checkDataType;
function $4f9e64c2576053ad$var$checkDataTypes(dataTypes, data, strictNums, correct) {
    if (dataTypes.length === 1) return $4f9e64c2576053ad$var$checkDataType(dataTypes[0], data, strictNums, correct);
    var cond;
    var types = (0, $eF2Jh.toHash)(dataTypes);
    if (types.array && types.object) {
        var notObj = $jkIFZ._($4f9e64c2576053ad$var$_templateObject29(), data);
        cond = types.null ? notObj : $jkIFZ._($4f9e64c2576053ad$var$_templateObject30(), data, notObj);
        delete types.null;
        delete types.array;
        delete types.object;
    } else cond = $jkIFZ.nil;
    if (types.number) delete types.integer;
    for(var t in types)cond = (0, $jkIFZ.and)(cond, $4f9e64c2576053ad$var$checkDataType(t, data, strictNums, correct));
    return cond;
}
module.exports.checkDataTypes = $4f9e64c2576053ad$var$checkDataTypes;
var $4f9e64c2576053ad$var$typeError = {
    message: function(param) {
        var schema = param.schema;
        return "must be ".concat(schema);
    },
    params: function(param) {
        var schema = param.schema, schemaValue = param.schemaValue;
        return typeof schema == "string" ? $jkIFZ._($4f9e64c2576053ad$var$_templateObject31(), schema) : $jkIFZ._($4f9e64c2576053ad$var$_templateObject32(), schemaValue);
    }
};
function $4f9e64c2576053ad$var$reportTypeError(it) {
    var cxt = $4f9e64c2576053ad$var$getTypeErrorContext(it);
    (0, $lvc7F.reportError)(cxt, $4f9e64c2576053ad$var$typeError);
}
module.exports.reportTypeError = $4f9e64c2576053ad$var$reportTypeError;
function $4f9e64c2576053ad$var$getTypeErrorContext(it) {
    var gen = it.gen, data = it.data, schema = it.schema;
    var schemaCode = (0, $eF2Jh.schemaRefOrVal)(it, schema, "type");
    return {
        gen: gen,
        keyword: "type",
        data: data,
        schema: schema.type,
        schemaCode: schemaCode,
        schemaValue: schemaCode,
        parentSchema: schema,
        params: {},
        it: it
    };
}

});
parcelRequire.register("dUDQb", function(module, exports) {

var $1he00 = parcelRequire("1he00");

var $8zIXb = parcelRequire("8zIXb");
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getRules = module.exports.isJSONType = void 0;
var $a20f68dd6dd108b3$var$_jsonTypes = [
    "string",
    "number",
    "integer",
    "boolean",
    "null",
    "object",
    "array"
];
var $a20f68dd6dd108b3$var$jsonTypes = new Set($a20f68dd6dd108b3$var$_jsonTypes);
function $a20f68dd6dd108b3$var$isJSONType(x) {
    return typeof x == "string" && $a20f68dd6dd108b3$var$jsonTypes.has(x);
}
module.exports.isJSONType = $a20f68dd6dd108b3$var$isJSONType;
function $a20f68dd6dd108b3$var$getRules() {
    var groups = {
        number: {
            type: "number",
            rules: []
        },
        string: {
            type: "string",
            rules: []
        },
        array: {
            type: "array",
            rules: []
        },
        object: {
            type: "object",
            rules: []
        }
    };
    return {
        types: (0, $8zIXb.default)((0, $1he00.default)({}, groups), {
            integer: true,
            boolean: true,
            null: true
        }),
        rules: [
            {
                rules: []
            },
            groups.number,
            groups.string,
            groups.array,
            groups.object
        ],
        post: {
            rules: []
        },
        all: {},
        keywords: {}
    };
}
module.exports.getRules = $a20f68dd6dd108b3$var$getRules;

});

parcelRequire.register("4MXbj", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.shouldUseRule = module.exports.shouldUseGroup = module.exports.schemaHasRulesForType = void 0;
function $37c98d519a8b90d7$var$schemaHasRulesForType(param, type) {
    var schema = param.schema, self = param.self;
    var group = self.RULES.types[type];
    return group && group !== true && $37c98d519a8b90d7$var$shouldUseGroup(schema, group);
}
module.exports.schemaHasRulesForType = $37c98d519a8b90d7$var$schemaHasRulesForType;
function $37c98d519a8b90d7$var$shouldUseGroup(schema, group) {
    return group.rules.some(function(rule) {
        return $37c98d519a8b90d7$var$shouldUseRule(schema, rule);
    });
}
module.exports.shouldUseGroup = $37c98d519a8b90d7$var$shouldUseGroup;
function $37c98d519a8b90d7$var$shouldUseRule(schema, rule) {
    var _a;
    return schema[rule.keyword] !== undefined || ((_a = rule.definition.implements) === null || _a === void 0 ? void 0 : _a.some(function(kwd) {
        return schema[kwd] !== undefined;
    }));
}
module.exports.shouldUseRule = $37c98d519a8b90d7$var$shouldUseRule;

});


parcelRequire.register("8djet", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $5fae74ccdb888244$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "",
        "",
        ""
    ]);
    $5fae74ccdb888244$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $5fae74ccdb888244$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "",
        " === undefined"
    ]);
    $5fae74ccdb888244$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $5fae74ccdb888244$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "",
        " || ",
        " === null || ",
        ' === ""'
    ]);
    $5fae74ccdb888244$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $5fae74ccdb888244$var$_templateObject3() {
    var data = (0, $iXJoB.default)([
        "",
        " = ",
        ""
    ]);
    $5fae74ccdb888244$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.assignDefaults = void 0;

var $jkIFZ = parcelRequire("jkIFZ");

var $eF2Jh = parcelRequire("eF2Jh");
function $5fae74ccdb888244$var$assignDefaults(it, ty) {
    var _schema = it.schema, properties = _schema.properties, items = _schema.items;
    if (ty === "object" && properties) for(var key in properties)$5fae74ccdb888244$var$assignDefault(it, key, properties[key].default);
    else if (ty === "array" && Array.isArray(items)) items.forEach(function(sch, i) {
        return $5fae74ccdb888244$var$assignDefault(it, i, sch.default);
    });
}
module.exports.assignDefaults = $5fae74ccdb888244$var$assignDefaults;
function $5fae74ccdb888244$var$assignDefault(it, prop, defaultValue) {
    var gen = it.gen, compositeRule = it.compositeRule, data = it.data, opts = it.opts;
    if (defaultValue === undefined) return;
    var childData = $jkIFZ._($5fae74ccdb888244$var$_templateObject(), data, (0, $jkIFZ.getProperty)(prop));
    if (compositeRule) {
        (0, $eF2Jh.checkStrictMode)(it, "default is ignored for: ".concat(childData));
        return;
    }
    var condition = $jkIFZ._($5fae74ccdb888244$var$_templateObject1(), childData);
    if (opts.useDefaults === "empty") condition = $jkIFZ._($5fae74ccdb888244$var$_templateObject2(), condition, childData, childData);
    // `${childData} === undefined` +
    // (opts.useDefaults === "empty" ? ` || ${childData} === null || ${childData} === ""` : "")
    gen.if(condition, $jkIFZ._($5fae74ccdb888244$var$_templateObject3(), childData, (0, $jkIFZ.stringify)(defaultValue)));
}

});

parcelRequire.register("hHGxT", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");

var $9zKh9 = parcelRequire("9zKh9");
"use strict";
function $ce37747bbf948e72$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "await "
    ]);
    $ce37747bbf948e72$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $ce37747bbf948e72$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "",
        " instanceof ",
        ""
    ]);
    $ce37747bbf948e72$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $ce37747bbf948e72$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "",
        ".errors"
    ]);
    $ce37747bbf948e72$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $ce37747bbf948e72$var$_templateObject3() {
    var data = (0, $iXJoB.default)([
        "",
        ".errors"
    ]);
    $ce37747bbf948e72$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function $ce37747bbf948e72$var$_templateObject4() {
    var data = (0, $iXJoB.default)([
        "await "
    ]);
    $ce37747bbf948e72$var$_templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
function $ce37747bbf948e72$var$_templateObject5() {
    var data = (0, $iXJoB.default)([
        "",
        "",
        ""
    ]);
    $ce37747bbf948e72$var$_templateObject5 = function _templateObject5() {
        return data;
    };
    return data;
}
function $ce37747bbf948e72$var$_templateObject6() {
    var data = (0, $iXJoB.default)([
        "",
        "[",
        "]"
    ]);
    $ce37747bbf948e72$var$_templateObject6 = function _templateObject6() {
        return data;
    };
    return data;
}
function $ce37747bbf948e72$var$_templateObject7() {
    var data = (0, $iXJoB.default)([
        "Array.isArray(",
        ")"
    ]);
    $ce37747bbf948e72$var$_templateObject7 = function _templateObject7() {
        return data;
    };
    return data;
}
function $ce37747bbf948e72$var$_templateObject8() {
    var data = (0, $iXJoB.default)([
        "",
        " === null ? ",
        " : ",
        ".concat(",
        ")"
    ]);
    $ce37747bbf948e72$var$_templateObject8 = function _templateObject8() {
        return data;
    };
    return data;
}
function $ce37747bbf948e72$var$_templateObject9() {
    var data = (0, $iXJoB.default)([
        "",
        ".length"
    ]);
    $ce37747bbf948e72$var$_templateObject9 = function _templateObject9() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.validateKeywordUsage = module.exports.validSchemaType = module.exports.funcKeywordCode = module.exports.macroKeywordCode = void 0;

var $jkIFZ = parcelRequire("jkIFZ");

var $4QYyN = parcelRequire("4QYyN");

var $2olnp = parcelRequire("2olnp");

var $lvc7F = parcelRequire("lvc7F");
function $ce37747bbf948e72$var$macroKeywordCode(cxt, def) {
    var gen = cxt.gen, keyword = cxt.keyword, schema = cxt.schema, parentSchema = cxt.parentSchema, it = cxt.it;
    var macroSchema = def.macro.call(it.self, schema, parentSchema, it);
    var schemaRef = $ce37747bbf948e72$var$useKeyword(gen, keyword, macroSchema);
    if (it.opts.validateSchema !== false) it.self.validateSchema(macroSchema, true);
    var valid = gen.name("valid");
    cxt.subschema({
        schema: macroSchema,
        schemaPath: $jkIFZ.nil,
        errSchemaPath: "".concat(it.errSchemaPath, "/").concat(keyword),
        topSchemaRef: schemaRef,
        compositeRule: true
    }, valid);
    cxt.pass(valid, function() {
        return cxt.error(true);
    });
}
module.exports.macroKeywordCode = $ce37747bbf948e72$var$macroKeywordCode;
function $ce37747bbf948e72$var$funcKeywordCode(cxt, def) {
    var validateKeyword = function validateKeyword() {
        if (def.errors === false) {
            assignValid();
            if (def.modifying) $ce37747bbf948e72$var$modifyData(cxt);
            reportErrs(function() {
                return cxt.error();
            });
        } else {
            var ruleErrs = def.async ? validateAsync() : validateSync();
            if (def.modifying) $ce37747bbf948e72$var$modifyData(cxt);
            reportErrs(function() {
                return $ce37747bbf948e72$var$addErrs(cxt, ruleErrs);
            });
        }
    };
    var validateAsync = function validateAsync() {
        var ruleErrs = gen.let("ruleErrs", null);
        gen.try(function() {
            return assignValid($jkIFZ._($ce37747bbf948e72$var$_templateObject()));
        }, function(e) {
            return gen.assign(valid, false).if($jkIFZ._($ce37747bbf948e72$var$_templateObject1(), e, it.ValidationError), function() {
                return gen.assign(ruleErrs, $jkIFZ._($ce37747bbf948e72$var$_templateObject2(), e));
            }, function() {
                return gen.throw(e);
            });
        });
        return ruleErrs;
    };
    var validateSync = function validateSync() {
        var validateErrs = $jkIFZ._($ce37747bbf948e72$var$_templateObject3(), validateRef);
        gen.assign(validateErrs, null);
        assignValid($jkIFZ.nil);
        return validateErrs;
    };
    var assignValid = function assignValid() {
        var _await = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : def.async ? $jkIFZ._($ce37747bbf948e72$var$_templateObject4()) : $jkIFZ.nil;
        var passCxt = it.opts.passContext ? $4QYyN.default.this : $4QYyN.default.self;
        var passSchema = !("compile" in def && !$data || def.schema === false);
        gen.assign(valid, $jkIFZ._($ce37747bbf948e72$var$_templateObject5(), _await, (0, $2olnp.callValidateCode)(cxt, validateRef, passCxt, passSchema)), def.modifying);
    };
    var reportErrs = function reportErrs(errors) {
        var _a;
        gen.if((0, $jkIFZ.not)((_a = def.valid) !== null && _a !== void 0 ? _a : valid), errors);
    };
    var _a1;
    var gen = cxt.gen, keyword = cxt.keyword, schema = cxt.schema, parentSchema = cxt.parentSchema, $data = cxt.$data, it = cxt.it;
    $ce37747bbf948e72$var$checkAsyncKeyword(it, def);
    var validate = !$data && def.compile ? def.compile.call(it.self, schema, parentSchema, it) : def.validate;
    var validateRef = $ce37747bbf948e72$var$useKeyword(gen, keyword, validate);
    var valid = gen.let("valid");
    cxt.block$data(valid, validateKeyword);
    cxt.ok((_a1 = def.valid) !== null && _a1 !== void 0 ? _a1 : valid);
}
module.exports.funcKeywordCode = $ce37747bbf948e72$var$funcKeywordCode;
function $ce37747bbf948e72$var$modifyData(cxt) {
    var gen = cxt.gen, data = cxt.data, it = cxt.it;
    gen.if(it.parentData, function() {
        return gen.assign(data, $jkIFZ._($ce37747bbf948e72$var$_templateObject6(), it.parentData, it.parentDataProperty));
    });
}
function $ce37747bbf948e72$var$addErrs(cxt, errs) {
    var gen = cxt.gen;
    gen.if($jkIFZ._($ce37747bbf948e72$var$_templateObject7(), errs), function() {
        gen.assign($4QYyN.default.vErrors, $jkIFZ._($ce37747bbf948e72$var$_templateObject8(), $4QYyN.default.vErrors, errs, $4QYyN.default.vErrors, errs)).assign($4QYyN.default.errors, $jkIFZ._($ce37747bbf948e72$var$_templateObject9(), $4QYyN.default.vErrors));
        (0, $lvc7F.extendErrors)(cxt);
    }, function() {
        return cxt.error();
    });
}
function $ce37747bbf948e72$var$checkAsyncKeyword(param, def) {
    var schemaEnv = param.schemaEnv;
    if (def.async && !schemaEnv.$async) throw new Error("async keyword in sync schema");
}
function $ce37747bbf948e72$var$useKeyword(gen, keyword, result) {
    if (result === undefined) throw new Error('keyword "'.concat(keyword, '" failed to compile'));
    return gen.scopeValue("keyword", typeof result == "function" ? {
        ref: result
    } : {
        ref: result,
        code: (0, $jkIFZ.stringify)(result)
    });
}
function $ce37747bbf948e72$var$validSchemaType(schema, schemaType) {
    var allowUndefined = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    // TODO add tests
    return !schemaType.length || schemaType.some(function(st) {
        return st === "array" ? Array.isArray(schema) : st === "object" ? schema && typeof schema == "object" && !Array.isArray(schema) : (typeof schema === "undefined" ? "undefined" : (0, $9zKh9.default)(schema)) == st || allowUndefined && typeof schema == "undefined";
    });
}
module.exports.validSchemaType = $ce37747bbf948e72$var$validSchemaType;
function $ce37747bbf948e72$var$validateKeywordUsage(param, def, keyword) {
    var schema = param.schema, opts = param.opts, self = param.self, errSchemaPath = param.errSchemaPath;
    /* istanbul ignore if */ if (Array.isArray(def.keyword) ? !def.keyword.includes(keyword) : def.keyword !== keyword) throw new Error("ajv implementation error");
    var deps = def.dependencies;
    if (deps === null || deps === void 0 ? void 0 : deps.some(function(kwd) {
        return !Object.prototype.hasOwnProperty.call(schema, kwd);
    })) throw new Error("parent schema must have dependencies of ".concat(keyword, ": ").concat(deps.join(",")));
    if (def.validateSchema) {
        var valid = def.validateSchema(schema[keyword]);
        if (!valid) {
            var msg = 'keyword "'.concat(keyword, '" value is invalid at path "').concat(errSchemaPath, '": ') + self.errorsText(def.validateSchema.errors);
            if (opts.validateSchema === "log") self.logger.error(msg);
            else throw new Error(msg);
        }
    }
}
module.exports.validateKeywordUsage = $ce37747bbf948e72$var$validateKeywordUsage;

});
parcelRequire.register("2olnp", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");

var $d67Ag = parcelRequire("d67Ag");
"use strict";
function $1bde679b4a96bfd6$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "",
        ""
    ]);
    $1bde679b4a96bfd6$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $1bde679b4a96bfd6$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "",
        " = ",
        ""
    ]);
    $1bde679b4a96bfd6$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $1bde679b4a96bfd6$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "Object.prototype.hasOwnProperty"
    ]);
    $1bde679b4a96bfd6$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $1bde679b4a96bfd6$var$_templateObject3() {
    var data = (0, $iXJoB.default)([
        "",
        ".call(",
        ", ",
        ")"
    ]);
    $1bde679b4a96bfd6$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function $1bde679b4a96bfd6$var$_templateObject4() {
    var data = (0, $iXJoB.default)([
        "",
        "",
        " !== undefined"
    ]);
    $1bde679b4a96bfd6$var$_templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
function $1bde679b4a96bfd6$var$_templateObject5() {
    var data = (0, $iXJoB.default)([
        "",
        " && ",
        ""
    ]);
    $1bde679b4a96bfd6$var$_templateObject5 = function _templateObject5() {
        return data;
    };
    return data;
}
function $1bde679b4a96bfd6$var$_templateObject6() {
    var data = (0, $iXJoB.default)([
        "",
        "",
        " === undefined"
    ]);
    $1bde679b4a96bfd6$var$_templateObject6 = function _templateObject6() {
        return data;
    };
    return data;
}
function $1bde679b4a96bfd6$var$_templateObject7() {
    var data = (0, $iXJoB.default)([
        "",
        ", ",
        ", ",
        "",
        ""
    ]);
    $1bde679b4a96bfd6$var$_templateObject7 = function _templateObject7() {
        return data;
    };
    return data;
}
function $1bde679b4a96bfd6$var$_templateObject8() {
    var data = (0, $iXJoB.default)([
        "",
        ", ",
        ""
    ]);
    $1bde679b4a96bfd6$var$_templateObject8 = function _templateObject8() {
        return data;
    };
    return data;
}
function $1bde679b4a96bfd6$var$_templateObject9() {
    var data = (0, $iXJoB.default)([
        "",
        ".call(",
        ", ",
        ")"
    ]);
    $1bde679b4a96bfd6$var$_templateObject9 = function _templateObject9() {
        return data;
    };
    return data;
}
function $1bde679b4a96bfd6$var$_templateObject10() {
    var data = (0, $iXJoB.default)([
        "",
        "(",
        ")"
    ]);
    $1bde679b4a96bfd6$var$_templateObject10 = function _templateObject10() {
        return data;
    };
    return data;
}
function $1bde679b4a96bfd6$var$_templateObject11() {
    var data = (0, $iXJoB.default)([
        "new RegExp"
    ]);
    $1bde679b4a96bfd6$var$_templateObject11 = function _templateObject11() {
        return data;
    };
    return data;
}
function $1bde679b4a96bfd6$var$_templateObject12() {
    var data = (0, $iXJoB.default)([
        "",
        "(",
        ", ",
        ")"
    ]);
    $1bde679b4a96bfd6$var$_templateObject12 = function _templateObject12() {
        return data;
    };
    return data;
}
function $1bde679b4a96bfd6$var$_templateObject13() {
    var data = (0, $iXJoB.default)([
        "",
        ".length"
    ]);
    $1bde679b4a96bfd6$var$_templateObject13 = function _templateObject13() {
        return data;
    };
    return data;
}
function $1bde679b4a96bfd6$var$_templateObject14() {
    var data = (0, $iXJoB.default)([
        "",
        " || ",
        ""
    ]);
    $1bde679b4a96bfd6$var$_templateObject14 = function _templateObject14() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.validateUnion = module.exports.validateArray = module.exports.usePattern = module.exports.callValidateCode = module.exports.schemaProperties = module.exports.allSchemaProperties = module.exports.noPropertyInData = module.exports.propertyInData = module.exports.isOwnProperty = module.exports.hasPropFunc = module.exports.reportMissingProp = module.exports.checkMissingProp = module.exports.checkReportMissingProp = void 0;

var $jkIFZ = parcelRequire("jkIFZ");

var $eF2Jh = parcelRequire("eF2Jh");

var $4QYyN = parcelRequire("4QYyN");

var $eF2Jh = parcelRequire("eF2Jh");
function $1bde679b4a96bfd6$var$checkReportMissingProp(cxt, prop) {
    var gen = cxt.gen, data = cxt.data, it = cxt.it;
    gen.if($1bde679b4a96bfd6$var$noPropertyInData(gen, data, prop, it.opts.ownProperties), function() {
        cxt.setParams({
            missingProperty: $jkIFZ._($1bde679b4a96bfd6$var$_templateObject(), prop)
        }, true);
        cxt.error();
    });
}
module.exports.checkReportMissingProp = $1bde679b4a96bfd6$var$checkReportMissingProp;
function $1bde679b4a96bfd6$var$checkMissingProp(param, properties, missing) {
    var gen = param.gen, data = param.data, opts = param.it.opts;
    return (0, $jkIFZ.or).apply(this, (0, $d67Ag.default)(properties.map(function(prop) {
        return (0, $jkIFZ.and)($1bde679b4a96bfd6$var$noPropertyInData(gen, data, prop, opts.ownProperties), $jkIFZ._($1bde679b4a96bfd6$var$_templateObject1(), missing, prop));
    })));
}
module.exports.checkMissingProp = $1bde679b4a96bfd6$var$checkMissingProp;
function $1bde679b4a96bfd6$var$reportMissingProp(cxt, missing) {
    cxt.setParams({
        missingProperty: missing
    }, true);
    cxt.error();
}
module.exports.reportMissingProp = $1bde679b4a96bfd6$var$reportMissingProp;
function $1bde679b4a96bfd6$var$hasPropFunc(gen) {
    return gen.scopeValue("func", {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        ref: Object.prototype.hasOwnProperty,
        code: $jkIFZ._($1bde679b4a96bfd6$var$_templateObject2())
    });
}
module.exports.hasPropFunc = $1bde679b4a96bfd6$var$hasPropFunc;
function $1bde679b4a96bfd6$var$isOwnProperty(gen, data, property) {
    return $jkIFZ._($1bde679b4a96bfd6$var$_templateObject3(), $1bde679b4a96bfd6$var$hasPropFunc(gen), data, property);
}
module.exports.isOwnProperty = $1bde679b4a96bfd6$var$isOwnProperty;
function $1bde679b4a96bfd6$var$propertyInData(gen, data, property, ownProperties) {
    var cond = $jkIFZ._($1bde679b4a96bfd6$var$_templateObject4(), data, (0, $jkIFZ.getProperty)(property));
    return ownProperties ? $jkIFZ._($1bde679b4a96bfd6$var$_templateObject5(), cond, $1bde679b4a96bfd6$var$isOwnProperty(gen, data, property)) : cond;
}
module.exports.propertyInData = $1bde679b4a96bfd6$var$propertyInData;
function $1bde679b4a96bfd6$var$noPropertyInData(gen, data, property, ownProperties) {
    var cond = $jkIFZ._($1bde679b4a96bfd6$var$_templateObject6(), data, (0, $jkIFZ.getProperty)(property));
    return ownProperties ? (0, $jkIFZ.or)(cond, (0, $jkIFZ.not)($1bde679b4a96bfd6$var$isOwnProperty(gen, data, property))) : cond;
}
module.exports.noPropertyInData = $1bde679b4a96bfd6$var$noPropertyInData;
function $1bde679b4a96bfd6$var$allSchemaProperties(schemaMap) {
    return schemaMap ? Object.keys(schemaMap).filter(function(p) {
        return p !== "__proto__";
    }) : [];
}
module.exports.allSchemaProperties = $1bde679b4a96bfd6$var$allSchemaProperties;
function $1bde679b4a96bfd6$var$schemaProperties(it, schemaMap) {
    return $1bde679b4a96bfd6$var$allSchemaProperties(schemaMap).filter(function(p) {
        return !(0, $eF2Jh.alwaysValidSchema)(it, schemaMap[p]);
    });
}
module.exports.schemaProperties = $1bde679b4a96bfd6$var$schemaProperties;
function $1bde679b4a96bfd6$var$callValidateCode(param, func, context, passSchema) {
    var schemaCode = param.schemaCode, data = param.data, _it = param.it, gen = _it.gen, topSchemaRef = _it.topSchemaRef, schemaPath = _it.schemaPath, errorPath = _it.errorPath, it = param.it;
    var _gen;
    var dataAndSchema = passSchema ? $jkIFZ._($1bde679b4a96bfd6$var$_templateObject7(), schemaCode, data, topSchemaRef, schemaPath) : data;
    var valCxt = [
        [
            $4QYyN.default.instancePath,
            (0, $jkIFZ.strConcat)($4QYyN.default.instancePath, errorPath)
        ],
        [
            $4QYyN.default.parentData,
            it.parentData
        ],
        [
            $4QYyN.default.parentDataProperty,
            it.parentDataProperty
        ],
        [
            $4QYyN.default.rootData,
            $4QYyN.default.rootData
        ], 
    ];
    if (it.opts.dynamicRef) valCxt.push([
        $4QYyN.default.dynamicAnchors,
        $4QYyN.default.dynamicAnchors
    ]);
    var args = $jkIFZ._($1bde679b4a96bfd6$var$_templateObject8(), dataAndSchema, (_gen = gen).object.apply(_gen, (0, $d67Ag.default)(valCxt)));
    return context !== $jkIFZ.nil ? $jkIFZ._($1bde679b4a96bfd6$var$_templateObject9(), func, context, args) : $jkIFZ._($1bde679b4a96bfd6$var$_templateObject10(), func, args);
}
module.exports.callValidateCode = $1bde679b4a96bfd6$var$callValidateCode;
var $1bde679b4a96bfd6$var$newRegExp = $jkIFZ._($1bde679b4a96bfd6$var$_templateObject11());
function $1bde679b4a96bfd6$var$usePattern(param, pattern) {
    var gen = param.gen, opts = param.it.opts;
    var u = opts.unicodeRegExp ? "u" : "";
    var regExp = opts.code.regExp;
    var rx = regExp(pattern, u);
    return gen.scopeValue("pattern", {
        key: rx.toString(),
        ref: rx,
        code: $jkIFZ._($1bde679b4a96bfd6$var$_templateObject12(), regExp.code === "new RegExp" ? $1bde679b4a96bfd6$var$newRegExp : (0, $eF2Jh.useFunc)(gen, regExp), pattern, u)
    });
}
module.exports.usePattern = $1bde679b4a96bfd6$var$usePattern;
function $1bde679b4a96bfd6$var$validateArray(cxt) {
    var validateItems = function validateItems(notValid) {
        var len = gen.const("len", $jkIFZ._($1bde679b4a96bfd6$var$_templateObject13(), data));
        gen.forRange("i", 0, len, function(i) {
            cxt.subschema({
                keyword: keyword,
                dataProp: i,
                dataPropType: $eF2Jh.Type.Num
            }, valid);
            gen.if((0, $jkIFZ.not)(valid), notValid);
        });
    };
    var gen = cxt.gen, data = cxt.data, keyword = cxt.keyword, it = cxt.it;
    var valid = gen.name("valid");
    if (it.allErrors) {
        var validArr = gen.let("valid", true);
        validateItems(function() {
            return gen.assign(validArr, false);
        });
        return validArr;
    }
    gen.var(valid, true);
    validateItems(function() {
        return gen.break();
    });
    return valid;
}
module.exports.validateArray = $1bde679b4a96bfd6$var$validateArray;
function $1bde679b4a96bfd6$var$validateUnion(cxt) {
    var gen = cxt.gen, schema = cxt.schema, keyword = cxt.keyword, it = cxt.it;
    /* istanbul ignore if */ if (!Array.isArray(schema)) throw new Error("ajv implementation error");
    var alwaysValid = schema.some(function(sch) {
        return (0, $eF2Jh.alwaysValidSchema)(it, sch);
    });
    if (alwaysValid && !it.opts.unevaluated) return;
    var valid = gen.let("valid", false);
    var schValid = gen.name("_valid");
    gen.block(function() {
        return schema.forEach(function(_sch, i) {
            var schCxt = cxt.subschema({
                keyword: keyword,
                schemaProp: i,
                compositeRule: true
            }, schValid);
            gen.assign(valid, $jkIFZ._($1bde679b4a96bfd6$var$_templateObject14(), valid, schValid));
            var merged = cxt.mergeValidEvaluated(schCxt, schValid);
            // can short-circuit if `unevaluatedProperties/Items` not supported (opts.unevaluated !== true)
            // or if all properties and items were evaluated (it.props === true && it.items === true)
            if (!merged) gen.if((0, $jkIFZ.not)(valid));
        });
    });
    cxt.result(valid, function() {
        return cxt.reset();
    }, function() {
        return cxt.error(true);
    });
}
module.exports.validateUnion = $1bde679b4a96bfd6$var$validateUnion;

});


parcelRequire.register("24jGs", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");

var $d67Ag = parcelRequire("d67Ag");
"use strict";
function $181b39464ef58bd9$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "",
        "",
        ""
    ]);
    $181b39464ef58bd9$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $181b39464ef58bd9$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "",
        "",
        "",
        ""
    ]);
    $181b39464ef58bd9$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $181b39464ef58bd9$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "",
        "",
        ""
    ]);
    $181b39464ef58bd9$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $181b39464ef58bd9$var$_templateObject3() {
    var data = (0, $iXJoB.default)([
        "",
        "",
        ""
    ]);
    $181b39464ef58bd9$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function $181b39464ef58bd9$var$_templateObject4() {
    var data = (0, $iXJoB.default)([
        "",
        ""
    ]);
    $181b39464ef58bd9$var$_templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.extendSubschemaMode = module.exports.extendSubschemaData = module.exports.getSubschema = void 0;

var $jkIFZ = parcelRequire("jkIFZ");

var $eF2Jh = parcelRequire("eF2Jh");
function $181b39464ef58bd9$var$getSubschema(it, param) {
    var keyword = param.keyword, schemaProp = param.schemaProp, schema = param.schema, schemaPath = param.schemaPath, errSchemaPath = param.errSchemaPath, topSchemaRef = param.topSchemaRef;
    if (keyword !== undefined && schema !== undefined) throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (keyword !== undefined) {
        var sch = it.schema[keyword];
        return schemaProp === undefined ? {
            schema: sch,
            schemaPath: $jkIFZ._($181b39464ef58bd9$var$_templateObject(), it.schemaPath, (0, $jkIFZ.getProperty)(keyword)),
            errSchemaPath: "".concat(it.errSchemaPath, "/").concat(keyword)
        } : {
            schema: sch[schemaProp],
            schemaPath: $jkIFZ._($181b39464ef58bd9$var$_templateObject1(), it.schemaPath, (0, $jkIFZ.getProperty)(keyword), (0, $jkIFZ.getProperty)(schemaProp)),
            errSchemaPath: "".concat(it.errSchemaPath, "/").concat(keyword, "/").concat((0, $eF2Jh.escapeFragment)(schemaProp))
        };
    }
    if (schema !== undefined) {
        if (schemaPath === undefined || errSchemaPath === undefined || topSchemaRef === undefined) throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
        return {
            schema: schema,
            schemaPath: schemaPath,
            topSchemaRef: topSchemaRef,
            errSchemaPath: errSchemaPath
        };
    }
    throw new Error('either "keyword" or "schema" must be passed');
}
module.exports.getSubschema = $181b39464ef58bd9$var$getSubschema;
function $181b39464ef58bd9$var$extendSubschemaData(subschema, it, param) {
    var dataProp = param.dataProp, dpType = param.dataPropType, data = param.data, dataTypes = param.dataTypes, propertyName = param.propertyName;
    var dataContextProps = function dataContextProps(_nextData) {
        subschema.data = _nextData;
        subschema.dataLevel = it.dataLevel + 1;
        subschema.dataTypes = [];
        it.definedProperties = new Set();
        subschema.parentData = it.data;
        subschema.dataNames = (0, $d67Ag.default)(it.dataNames).concat([
            _nextData
        ]);
    };
    if (data !== undefined && dataProp !== undefined) throw new Error('both "data" and "dataProp" passed, only one allowed');
    var gen = it.gen;
    if (dataProp !== undefined) {
        var errorPath = it.errorPath, dataPathArr = it.dataPathArr, opts = it.opts;
        var nextData = gen.let("data", $jkIFZ._($181b39464ef58bd9$var$_templateObject2(), it.data, (0, $jkIFZ.getProperty)(dataProp)), true);
        dataContextProps(nextData);
        subschema.errorPath = $jkIFZ.str($181b39464ef58bd9$var$_templateObject3(), errorPath, (0, $eF2Jh.getErrorPath)(dataProp, dpType, opts.jsPropertySyntax));
        subschema.parentDataProperty = $jkIFZ._($181b39464ef58bd9$var$_templateObject4(), dataProp);
        subschema.dataPathArr = (0, $d67Ag.default)(dataPathArr).concat([
            subschema.parentDataProperty
        ]);
    }
    if (data !== undefined) {
        var nextData1 = data instanceof $jkIFZ.Name ? data : gen.let("data", data, true); // replaceable if used once?
        dataContextProps(nextData1);
        if (propertyName !== undefined) subschema.propertyName = propertyName;
    // TODO something is possibly wrong here with not changing parentDataProperty and not appending dataPathArr
    }
    if (dataTypes) subschema.dataTypes = dataTypes;
}
module.exports.extendSubschemaData = $181b39464ef58bd9$var$extendSubschemaData;
function $181b39464ef58bd9$var$extendSubschemaMode(subschema, param) {
    var jtdDiscriminator = param.jtdDiscriminator, jtdMetadata = param.jtdMetadata, compositeRule = param.compositeRule, createErrors = param.createErrors, allErrors = param.allErrors;
    if (compositeRule !== undefined) subschema.compositeRule = compositeRule;
    if (createErrors !== undefined) subschema.createErrors = createErrors;
    if (allErrors !== undefined) subschema.allErrors = allErrors;
    subschema.jtdDiscriminator = jtdDiscriminator; // not inherited
    subschema.jtdMetadata = jtdMetadata; // not inherited
}
module.exports.extendSubschemaMode = $181b39464ef58bd9$var$extendSubschemaMode;

});

parcelRequire.register("5Jgc6", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getSchemaRefs = module.exports.resolveUrl = module.exports.normalizeId = module.exports._getFullPath = module.exports.getFullPath = module.exports.inlineRef = void 0;

var $eF2Jh = parcelRequire("eF2Jh");

var $iLoeH = parcelRequire("iLoeH");

var $fVbOT = parcelRequire("fVbOT");
// TODO refactor to use keyword definitions
var $42bdb7913ad3e82c$var$SIMPLE_INLINED = new Set([
    "type",
    "format",
    "pattern",
    "maxLength",
    "minLength",
    "maxProperties",
    "minProperties",
    "maxItems",
    "minItems",
    "maximum",
    "minimum",
    "uniqueItems",
    "multipleOf",
    "required",
    "enum",
    "const", 
]);
function $42bdb7913ad3e82c$var$inlineRef(schema) {
    var limit = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
    if (typeof schema == "boolean") return true;
    if (limit === true) return !$42bdb7913ad3e82c$var$hasRef(schema);
    if (!limit) return false;
    return $42bdb7913ad3e82c$var$countKeys(schema) <= limit;
}
module.exports.inlineRef = $42bdb7913ad3e82c$var$inlineRef;
var $42bdb7913ad3e82c$var$REF_KEYWORDS = new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor", 
]);
function $42bdb7913ad3e82c$var$hasRef(schema) {
    for(var key in schema){
        if ($42bdb7913ad3e82c$var$REF_KEYWORDS.has(key)) return true;
        var sch = schema[key];
        if (Array.isArray(sch) && sch.some($42bdb7913ad3e82c$var$hasRef)) return true;
        if (typeof sch == "object" && $42bdb7913ad3e82c$var$hasRef(sch)) return true;
    }
    return false;
}
function $42bdb7913ad3e82c$var$countKeys(schema) {
    var count = 0;
    for(var key in schema){
        if (key === "$ref") return Infinity;
        count++;
        if ($42bdb7913ad3e82c$var$SIMPLE_INLINED.has(key)) continue;
        if (typeof schema[key] == "object") (0, $eF2Jh.eachItem)(schema[key], function(sch) {
            return count += $42bdb7913ad3e82c$var$countKeys(sch);
        });
        if (count === Infinity) return Infinity;
    }
    return count;
}
function $42bdb7913ad3e82c$var$getFullPath(resolver) {
    var id = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", normalize = arguments.length > 2 ? arguments[2] : void 0;
    if (normalize !== false) id = $42bdb7913ad3e82c$var$normalizeId(id);
    var p = resolver.parse(id);
    return $42bdb7913ad3e82c$var$_getFullPath(resolver, p);
}
module.exports.getFullPath = $42bdb7913ad3e82c$var$getFullPath;
function $42bdb7913ad3e82c$var$_getFullPath(resolver, p) {
    var serialized = resolver.serialize(p);
    return serialized.split("#")[0] + "#";
}
module.exports._getFullPath = $42bdb7913ad3e82c$var$_getFullPath;
var $42bdb7913ad3e82c$var$TRAILING_SLASH_HASH = /#\/?$/;
function $42bdb7913ad3e82c$var$normalizeId(id) {
    return id ? id.replace($42bdb7913ad3e82c$var$TRAILING_SLASH_HASH, "") : "";
}
module.exports.normalizeId = $42bdb7913ad3e82c$var$normalizeId;
function $42bdb7913ad3e82c$var$resolveUrl(resolver, baseId, id) {
    id = $42bdb7913ad3e82c$var$normalizeId(id);
    return resolver.resolve(baseId, id);
}
module.exports.resolveUrl = $42bdb7913ad3e82c$var$resolveUrl;
var $42bdb7913ad3e82c$var$ANCHOR = /^[a-z_][-a-z0-9._]*$/i;
function $42bdb7913ad3e82c$var$getSchemaRefs(schema, baseId) {
    var _this = this;
    var checkAmbiguosRef = function checkAmbiguosRef(sch1, sch2, ref) {
        if (sch2 !== undefined && !$iLoeH(sch1, sch2)) throw ambiguos(ref);
    };
    var ambiguos = function ambiguos(ref) {
        return new Error('reference "'.concat(ref, '" resolves to more than one schema'));
    };
    if (typeof schema == "boolean") return {};
    var _opts = this.opts, schemaId = _opts.schemaId, uriResolver = _opts.uriResolver;
    var schId = $42bdb7913ad3e82c$var$normalizeId(schema[schemaId] || baseId);
    var baseIds = {
        "": schId
    };
    var pathPrefix = $42bdb7913ad3e82c$var$getFullPath(uriResolver, schId, false);
    var localRefs = {};
    var schemaRefs = new Set();
    $fVbOT(schema, {
        allKeys: true
    }, function(sch, jsonPtr, _, parentJsonPtr) {
        var addRef = function addRef(ref) {
            // eslint-disable-next-line @typescript-eslint/unbound-method
            var _resolve = this.opts.uriResolver.resolve;
            ref = $42bdb7913ad3e82c$var$normalizeId(_$baseId ? _resolve(_$baseId, ref) : ref);
            if (schemaRefs.has(ref)) throw ambiguos(ref);
            schemaRefs.add(ref);
            var schOrRef = this.refs[ref];
            if (typeof schOrRef == "string") schOrRef = this.refs[schOrRef];
            if (typeof schOrRef == "object") checkAmbiguosRef(sch, schOrRef.schema, ref);
            else if (ref !== $42bdb7913ad3e82c$var$normalizeId(fullPath)) {
                if (ref[0] === "#") {
                    checkAmbiguosRef(sch, localRefs[ref], ref);
                    localRefs[ref] = sch;
                } else this.refs[ref] = fullPath;
            }
            return ref;
        };
        var addAnchor = function addAnchor(anchor) {
            if (typeof anchor == "string") {
                if (!$42bdb7913ad3e82c$var$ANCHOR.test(anchor)) throw new Error('invalid anchor "'.concat(anchor, '"'));
                addRef.call(this, "#".concat(anchor));
            }
        };
        if (parentJsonPtr === undefined) return;
        var fullPath = pathPrefix + jsonPtr;
        var _$baseId = baseIds[parentJsonPtr];
        if (typeof sch[schemaId] == "string") _$baseId = addRef.call(_this, sch[schemaId]);
        addAnchor.call(_this, sch.$anchor);
        addAnchor.call(_this, sch.$dynamicAnchor);
        baseIds[jsonPtr] = _$baseId;
    });
    return localRefs;
}
module.exports.getSchemaRefs = $42bdb7913ad3e82c$var$getSchemaRefs;

});
parcelRequire.register("iLoeH", function(module, exports) {
"use strict";
// do not edit .js files directly - edit src/index.jst
module.exports = function equal(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
        if (a.constructor !== b.constructor) return false;
        var length, i, keys;
        if (Array.isArray(a)) {
            length = a.length;
            if (length != b.length) return false;
            for(i = length; (i--) !== 0;)if (!equal(a[i], b[i])) return false;
            return true;
        }
        if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
        if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
        if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) return false;
        for(i = length; (i--) !== 0;)if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
        for(i = length; (i--) !== 0;){
            var key = keys[i];
            if (!equal(a[key], b[key])) return false;
        }
        return true;
    }
    // true if both NaN, false otherwise
    return a !== a && b !== b;
};

});

parcelRequire.register("fVbOT", function(module, exports) {
"use strict";
var $b975590e51d4a7ce$var$traverse = module.exports = function traverse(schema, opts, cb) {
    // Legacy support for v0.3.1 and earlier.
    if (typeof opts == "function") {
        cb = opts;
        opts = {};
    }
    cb = opts.cb || cb;
    var pre = typeof cb == "function" ? cb : cb.pre || function() {};
    var post = cb.post || function() {};
    $b975590e51d4a7ce$var$_traverse(opts, pre, post, schema, "", schema);
};
$b975590e51d4a7ce$var$traverse.keywords = {
    additionalItems: true,
    items: true,
    contains: true,
    additionalProperties: true,
    propertyNames: true,
    not: true,
    if: true,
    then: true,
    else: true
};
$b975590e51d4a7ce$var$traverse.arrayKeywords = {
    items: true,
    allOf: true,
    anyOf: true,
    oneOf: true
};
$b975590e51d4a7ce$var$traverse.propsKeywords = {
    $defs: true,
    definitions: true,
    properties: true,
    patternProperties: true,
    dependencies: true
};
$b975590e51d4a7ce$var$traverse.skipKeywords = {
    default: true,
    enum: true,
    const: true,
    required: true,
    maximum: true,
    minimum: true,
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    multipleOf: true,
    maxLength: true,
    minLength: true,
    pattern: true,
    format: true,
    maxItems: true,
    minItems: true,
    uniqueItems: true,
    maxProperties: true,
    minProperties: true
};
function $b975590e51d4a7ce$var$_traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
    if (schema && typeof schema == "object" && !Array.isArray(schema)) {
        pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
        for(var key in schema){
            var sch = schema[key];
            if (Array.isArray(sch)) {
                if (key in $b975590e51d4a7ce$var$traverse.arrayKeywords) for(var i = 0; i < sch.length; i++)$b975590e51d4a7ce$var$_traverse(opts, pre, post, sch[i], jsonPtr + "/" + key + "/" + i, rootSchema, jsonPtr, key, schema, i);
            } else if (key in $b975590e51d4a7ce$var$traverse.propsKeywords) {
                if (sch && typeof sch == "object") for(var prop in sch)$b975590e51d4a7ce$var$_traverse(opts, pre, post, sch[prop], jsonPtr + "/" + key + "/" + $b975590e51d4a7ce$var$escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
            } else if (key in $b975590e51d4a7ce$var$traverse.keywords || opts.allKeys && !(key in $b975590e51d4a7ce$var$traverse.skipKeywords)) $b975590e51d4a7ce$var$_traverse(opts, pre, post, sch, jsonPtr + "/" + key, rootSchema, jsonPtr, key, schema);
        }
        post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
    }
}
function $b975590e51d4a7ce$var$escapeJsonPtr(str) {
    return str.replace(/~/g, "~0").replace(/\//g, "~1");
}

});



parcelRequire.register("jz3Xm", function(module, exports) {

var $f3yih = parcelRequire("f3yih");

var $5sttm = parcelRequire("5sttm");

var $2qJq4 = parcelRequire("2qJq4");

var $8oBD6 = parcelRequire("8oBD6");
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
var $e3e45adac68292a3$var$ValidationError = /*#__PURE__*/ function(Error) {
    (0, $5sttm.default)(ValidationError, Error);
    var _super = (0, $8oBD6.default)(ValidationError);
    function ValidationError(errors) {
        (0, $f3yih.default)(this, ValidationError);
        var _this;
        _this = _super.call(this, "validation failed");
        _this.errors = errors;
        _this.ajv = _this.validation = true;
        return _this;
    }
    return ValidationError;
}((0, $2qJq4.default)(Error));
module.exports.default = $e3e45adac68292a3$var$ValidationError;

});

parcelRequire.register("2FExk", function(module, exports) {

var $f3yih = parcelRequire("f3yih");

var $5sttm = parcelRequire("5sttm");

var $2qJq4 = parcelRequire("2qJq4");

var $8oBD6 = parcelRequire("8oBD6");
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $5Jgc6 = parcelRequire("5Jgc6");
var $1f1edad6f8201840$var$MissingRefError = /*#__PURE__*/ function(Error) {
    (0, $5sttm.default)(MissingRefError, Error);
    var _super = (0, $8oBD6.default)(MissingRefError);
    function MissingRefError(resolver, baseId, ref, msg) {
        (0, $f3yih.default)(this, MissingRefError);
        var _this;
        _this = _super.call(this, msg || "can't resolve reference ".concat(ref, " from id ").concat(baseId));
        _this.missingRef = (0, $5Jgc6.resolveUrl)(resolver, baseId, ref);
        _this.missingSchema = (0, $5Jgc6.normalizeId)((0, $5Jgc6.getFullPath)(resolver, _this.missingRef));
        return _this;
    }
    return MissingRefError;
}((0, $2qJq4.default)(Error));
module.exports.default = $1f1edad6f8201840$var$MissingRefError;

});

parcelRequire.register("9JBGp", function(module, exports) {

var $f3yih = parcelRequire("f3yih");

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $71658c173eb08fa1$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        'require("ajv/dist/runtime/validation_error").default'
    ]);
    $71658c173eb08fa1$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $71658c173eb08fa1$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        '""'
    ]);
    $71658c173eb08fa1$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.resolveSchema = module.exports.getCompilingSchema = module.exports.resolveRef = module.exports.compileSchema = module.exports.SchemaEnv = void 0;

var $jkIFZ = parcelRequire("jkIFZ");

var $jz3Xm = parcelRequire("jz3Xm");

var $4QYyN = parcelRequire("4QYyN");

var $5Jgc6 = parcelRequire("5Jgc6");

var $eF2Jh = parcelRequire("eF2Jh");

var $5KqkP = parcelRequire("5KqkP");
var $71658c173eb08fa1$var$SchemaEnv = function SchemaEnv(env) {
    (0, $f3yih.default)(this, SchemaEnv);
    var _a;
    this.refs = {};
    this.dynamicAnchors = {};
    var schema;
    if (typeof env.schema == "object") schema = env.schema;
    this.schema = env.schema;
    this.schemaId = env.schemaId;
    this.root = env.root || this;
    this.baseId = (_a = env.baseId) !== null && _a !== void 0 ? _a : (0, $5Jgc6.normalizeId)(schema === null || schema === void 0 ? void 0 : schema[env.schemaId || "$id"]);
    this.schemaPath = env.schemaPath;
    this.localRefs = env.localRefs;
    this.meta = env.meta;
    this.$async = schema === null || schema === void 0 ? void 0 : schema.$async;
    this.refs = {};
};
module.exports.SchemaEnv = $71658c173eb08fa1$var$SchemaEnv;
// let codeSize = 0
// let nodeCount = 0
// Compiles schema in SchemaEnv
function $71658c173eb08fa1$var$compileSchema(sch) {
    // TODO refactor - remove compilations
    var _sch = $71658c173eb08fa1$var$getCompilingSchema.call(this, sch);
    if (_sch) return _sch;
    var rootId = (0, $5Jgc6.getFullPath)(this.opts.uriResolver, sch.root.baseId); // TODO if getFullPath removed 1 tests fails
    var _code = this.opts.code, es5 = _code.es5, lines = _code.lines;
    var ownProperties = this.opts.ownProperties;
    var gen = new $jkIFZ.CodeGen(this.scope, {
        es5: es5,
        lines: lines,
        ownProperties: ownProperties
    });
    var _ValidationError;
    if (sch.$async) _ValidationError = gen.scopeValue("Error", {
        ref: $jz3Xm.default,
        code: $jkIFZ._($71658c173eb08fa1$var$_templateObject())
    });
    var validateName = gen.scopeName("validate");
    sch.validateName = validateName;
    var schemaCxt = {
        gen: gen,
        allErrors: this.opts.allErrors,
        data: $4QYyN.default.data,
        parentData: $4QYyN.default.parentData,
        parentDataProperty: $4QYyN.default.parentDataProperty,
        dataNames: [
            $4QYyN.default.data
        ],
        dataPathArr: [
            $jkIFZ.nil
        ],
        dataLevel: 0,
        dataTypes: [],
        definedProperties: new Set(),
        topSchemaRef: gen.scopeValue("schema", this.opts.code.source === true ? {
            ref: sch.schema,
            code: (0, $jkIFZ.stringify)(sch.schema)
        } : {
            ref: sch.schema
        }),
        validateName: validateName,
        ValidationError: _ValidationError,
        schema: sch.schema,
        schemaEnv: sch,
        rootId: rootId,
        baseId: sch.baseId || rootId,
        schemaPath: $jkIFZ.nil,
        errSchemaPath: sch.schemaPath || (this.opts.jtd ? "" : "#"),
        errorPath: $jkIFZ._($71658c173eb08fa1$var$_templateObject1()),
        opts: this.opts,
        self: this
    };
    var sourceCode;
    try {
        this._compilations.add(sch);
        (0, $5KqkP.validateFunctionCode)(schemaCxt);
        gen.optimize(this.opts.code.optimize);
        // gen.optimize(1)
        var validateCode = gen.toString();
        sourceCode = "".concat(gen.scopeRefs($4QYyN.default.scope), "return ").concat(validateCode);
        // console.log((codeSize += sourceCode.length), (nodeCount += gen.nodeCount))
        if (this.opts.code.process) sourceCode = this.opts.code.process(sourceCode, sch);
        // console.log("\n\n\n *** \n", sourceCode)
        var makeValidate = new Function("".concat($4QYyN.default.self), "".concat($4QYyN.default.scope), sourceCode);
        var validate = makeValidate(this, this.scope.get());
        this.scope.value(validateName, {
            ref: validate
        });
        validate.errors = null;
        validate.schema = sch.schema;
        validate.schemaEnv = sch;
        if (sch.$async) validate.$async = true;
        if (this.opts.code.source === true) validate.source = {
            validateName: validateName,
            validateCode: validateCode,
            scopeValues: gen._values
        };
        if (this.opts.unevaluated) {
            var props = schemaCxt.props, items = schemaCxt.items;
            validate.evaluated = {
                props: props instanceof $jkIFZ.Name ? undefined : props,
                items: items instanceof $jkIFZ.Name ? undefined : items,
                dynamicProps: props instanceof $jkIFZ.Name,
                dynamicItems: items instanceof $jkIFZ.Name
            };
            if (validate.source) validate.source.evaluated = (0, $jkIFZ.stringify)(validate.evaluated);
        }
        sch.validate = validate;
        return sch;
    } catch (e) {
        delete sch.validate;
        delete sch.validateName;
        if (sourceCode) this.logger.error("Error compiling schema, function code:", sourceCode);
        // console.log("\n\n\n *** \n", sourceCode, this.opts)
        throw e;
    } finally{
        this._compilations.delete(sch);
    }
}
module.exports.compileSchema = $71658c173eb08fa1$var$compileSchema;
function $71658c173eb08fa1$var$resolveRef(root, baseId, ref) {
    var _a;
    ref = (0, $5Jgc6.resolveUrl)(this.opts.uriResolver, baseId, ref);
    var schOrFunc = root.refs[ref];
    if (schOrFunc) return schOrFunc;
    var _sch = $71658c173eb08fa1$var$resolve.call(this, root, ref);
    if (_sch === undefined) {
        var schema = (_a = root.localRefs) === null || _a === void 0 ? void 0 : _a[ref]; // TODO maybe localRefs should hold SchemaEnv
        var schemaId = this.opts.schemaId;
        if (schema) _sch = new $71658c173eb08fa1$var$SchemaEnv({
            schema: schema,
            schemaId: schemaId,
            root: root,
            baseId: baseId
        });
    }
    if (_sch === undefined) return;
    return root.refs[ref] = $71658c173eb08fa1$var$inlineOrCompile.call(this, _sch);
}
module.exports.resolveRef = $71658c173eb08fa1$var$resolveRef;
function $71658c173eb08fa1$var$inlineOrCompile(sch) {
    if ((0, $5Jgc6.inlineRef)(sch.schema, this.opts.inlineRefs)) return sch.schema;
    return sch.validate ? sch : $71658c173eb08fa1$var$compileSchema.call(this, sch);
}
// Index of schema compilation in the currently compiled list
function $71658c173eb08fa1$var$getCompilingSchema(schEnv) {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = this._compilations[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var sch = _step.value;
            if ($71658c173eb08fa1$var$sameSchemaEnv(sch, schEnv)) return sch;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
module.exports.getCompilingSchema = $71658c173eb08fa1$var$getCompilingSchema;
function $71658c173eb08fa1$var$sameSchemaEnv(s1, s2) {
    return s1.schema === s2.schema && s1.root === s2.root && s1.baseId === s2.baseId;
}
// resolve and compile the references ($ref)
// TODO returns AnySchemaObject (if the schema can be inlined) or validation function
function $71658c173eb08fa1$var$resolve(root, ref // reference to resolve
) {
    var sch;
    while(typeof (sch = this.refs[ref]) == "string")ref = sch;
    return sch || this.schemas[ref] || $71658c173eb08fa1$var$resolveSchema.call(this, root, ref);
}
// Resolve schema, its root and baseId
function $71658c173eb08fa1$var$resolveSchema(root, ref // reference to resolve
) {
    var p = this.opts.uriResolver.parse(ref);
    var refPath = (0, $5Jgc6._getFullPath)(this.opts.uriResolver, p);
    var baseId = (0, $5Jgc6.getFullPath)(this.opts.uriResolver, root.baseId, undefined);
    // TODO `Object.keys(root.schema).length > 0` should not be needed - but removing breaks 2 tests
    if (Object.keys(root.schema).length > 0 && refPath === baseId) return $71658c173eb08fa1$var$getJsonPointer.call(this, p, root);
    var id = (0, $5Jgc6.normalizeId)(refPath);
    var schOrRef = this.refs[id] || this.schemas[id];
    if (typeof schOrRef == "string") {
        var sch = $71658c173eb08fa1$var$resolveSchema.call(this, root, schOrRef);
        if (typeof (sch === null || sch === void 0 ? void 0 : sch.schema) !== "object") return;
        return $71658c173eb08fa1$var$getJsonPointer.call(this, p, sch);
    }
    if (typeof (schOrRef === null || schOrRef === void 0 ? void 0 : schOrRef.schema) !== "object") return;
    if (!schOrRef.validate) $71658c173eb08fa1$var$compileSchema.call(this, schOrRef);
    if (id === (0, $5Jgc6.normalizeId)(ref)) {
        var schema = schOrRef.schema;
        var schemaId = this.opts.schemaId;
        var schId = schema[schemaId];
        if (schId) baseId = (0, $5Jgc6.resolveUrl)(this.opts.uriResolver, baseId, schId);
        return new $71658c173eb08fa1$var$SchemaEnv({
            schema: schema,
            schemaId: schemaId,
            root: root,
            baseId: baseId
        });
    }
    return $71658c173eb08fa1$var$getJsonPointer.call(this, p, schOrRef);
}
module.exports.resolveSchema = $71658c173eb08fa1$var$resolveSchema;
var $71658c173eb08fa1$var$PREVENT_SCOPE_CHANGE = new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions", 
]);
function $71658c173eb08fa1$var$getJsonPointer(parsedRef, param) {
    var baseId = param.baseId, schema = param.schema, root = param.root;
    var _a;
    if (((_a = parsedRef.fragment) === null || _a === void 0 ? void 0 : _a[0]) !== "/") return;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = parsedRef.fragment.slice(1).split("/")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var part = _step.value;
            if (typeof schema === "boolean") return;
            var partSchema = schema[(0, $eF2Jh.unescapeFragment)(part)];
            if (partSchema === undefined) return;
            schema = partSchema;
            // TODO PREVENT_SCOPE_CHANGE could be defined in keyword def?
            var schId = typeof schema === "object" && schema[this.opts.schemaId];
            if (!$71658c173eb08fa1$var$PREVENT_SCOPE_CHANGE.has(part) && schId) baseId = (0, $5Jgc6.resolveUrl)(this.opts.uriResolver, baseId, schId);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var env;
    if (typeof schema != "boolean" && schema.$ref && !(0, $eF2Jh.schemaHasRulesButRef)(schema, this.RULES)) {
        var $ref = (0, $5Jgc6.resolveUrl)(this.opts.uriResolver, baseId, schema.$ref);
        env = $71658c173eb08fa1$var$resolveSchema.call(this, root, $ref);
    }
    // even though resolution failed we need to return SchemaEnv to throw exception
    // so that compileAsync loads missing schema.
    var schemaId = this.opts.schemaId;
    env = env || new $71658c173eb08fa1$var$SchemaEnv({
        schema: schema,
        schemaId: schemaId,
        root: root,
        baseId: baseId
    });
    if (env.schema !== env.root.schema) return env;
    return undefined;
}

});

parcelRequire.register("86QIA", function(module, exports) {
module.exports = JSON.parse('{"$id":"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#","description":"Meta-schema for $data reference (JSON AnySchema extension proposal)","type":"object","required":["$data"],"properties":{"$data":{"type":"string","anyOf":[{"format":"relative-json-pointer"},{"format":"json-pointer"}]}},"additionalProperties":false}');

});

parcelRequire.register("14LXY", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $aP7KE = parcelRequire("aP7KE");
$aP7KE.code = 'require("ajv/dist/runtime/uri").default';
module.exports.default = $aP7KE;

});
parcelRequire.register("aP7KE", function(module, exports) {
/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */ (function(global, factory) {
    factory(module.exports);
})(module.exports, function(exports) {
    "use strict";
    var merge = function merge() {
        for(var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++)sets[_key] = arguments[_key];
        if (sets.length > 1) {
            sets[0] = sets[0].slice(0, -1);
            var xl = sets.length - 1;
            for(var x = 1; x < xl; ++x)sets[x] = sets[x].slice(1, -1);
            sets[xl] = sets[xl].slice(1);
            return sets.join("");
        } else return sets[0];
    };
    var subexp = function subexp(str) {
        return "(?:" + str + ")";
    };
    var typeOf = function typeOf(o) {
        return o === undefined ? "undefined" : o === null ? "null" : Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase();
    };
    var toUpperCase = function toUpperCase(str) {
        return str.toUpperCase();
    };
    var toArray = function toArray(obj) {
        return obj !== undefined && obj !== null ? obj instanceof Array ? obj : typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [
            obj
        ] : Array.prototype.slice.call(obj) : [];
    };
    var assign = function assign(target, source) {
        var obj = target;
        if (source) for(var key in source)obj[key] = source[key];
        return obj;
    };
    var buildExps = function buildExps(isIRI) {
        var ALPHA$$ = "[A-Za-z]", CR$ = "[\\x0D]", DIGIT$$ = "[0-9]", DQUOTE$$ = "[\\x22]", HEXDIG$$ = merge(DIGIT$$, "[A-Fa-f]"), //case-insensitive
        LF$$ = "[\\x0A]", SP$$ = "[\\x20]", PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)), //expanded
        GEN_DELIMS$$ = "[\\:\\/\\?\\#\\[\\]\\@]", SUB_DELIMS$$ = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]", RESERVED$$ = merge(GEN_DELIMS$$, SUB_DELIMS$$), UCSCHAR$$ = isIRI ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]", //subset, excludes bidi control characters
        IPRIVATE$$ = isIRI ? "[\\uE000-\\uF8FF]" : "[]", //subset
        UNRESERVED$$ = merge(ALPHA$$, DIGIT$$, "[\\-\\.\\_\\~]", UCSCHAR$$), SCHEME$ = subexp(ALPHA$$ + merge(ALPHA$$, DIGIT$$, "[\\+\\-\\.]") + "*"), USERINFO$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]")) + "*"), DEC_OCTET$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("[1-9]" + DIGIT$$) + "|" + DIGIT$$), DEC_OCTET_RELAXED$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("0?[1-9]" + DIGIT$$) + "|0?0?" + DIGIT$$), //relaxed parsing rules
        IPV4ADDRESS$ = subexp(DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$), H16$ = subexp(HEXDIG$$ + "{1,4}"), LS32$ = subexp(subexp(H16$ + "\\:" + H16$) + "|" + IPV4ADDRESS$), IPV6ADDRESS1$ = subexp(subexp(H16$ + "\\:") + "{6}" + LS32$), //                           6( h16 ":" ) ls32
        IPV6ADDRESS2$ = subexp("\\:\\:" + subexp(H16$ + "\\:") + "{5}" + LS32$), //                      "::" 5( h16 ":" ) ls32
        IPV6ADDRESS3$ = subexp(subexp(H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{4}" + LS32$), //[               h16 ] "::" 4( h16 ":" ) ls32
        IPV6ADDRESS4$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,1}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{3}" + LS32$), //[ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
        IPV6ADDRESS5$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,2}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{2}" + LS32$), //[ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
        IPV6ADDRESS6$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,3}" + H16$) + "?\\:\\:" + H16$ + "\\:" + LS32$), //[ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
        IPV6ADDRESS7$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,4}" + H16$) + "?\\:\\:" + LS32$), //[ *4( h16 ":" ) h16 ] "::"              ls32
        IPV6ADDRESS8$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,5}" + H16$) + "?\\:\\:" + H16$), //[ *5( h16 ":" ) h16 ] "::"              h16
        IPV6ADDRESS9$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,6}" + H16$) + "?\\:\\:"), //[ *6( h16 ":" ) h16 ] "::"
        IPV6ADDRESS$ = subexp([
            IPV6ADDRESS1$,
            IPV6ADDRESS2$,
            IPV6ADDRESS3$,
            IPV6ADDRESS4$,
            IPV6ADDRESS5$,
            IPV6ADDRESS6$,
            IPV6ADDRESS7$,
            IPV6ADDRESS8$,
            IPV6ADDRESS9$
        ].join("|")), ZONEID$ = subexp(subexp(UNRESERVED$$ + "|" + PCT_ENCODED$) + "+"), //RFC 6874
        IPV6ADDRZ$ = subexp(IPV6ADDRESS$ + "\\%25" + ZONEID$), //RFC 6874
        IPV6ADDRZ_RELAXED$ = subexp(IPV6ADDRESS$ + subexp("\\%25|\\%(?!" + HEXDIG$$ + "{2})") + ZONEID$), //RFC 6874, with relaxed parsing rules
        IPVFUTURE$ = subexp("[vV]" + HEXDIG$$ + "+\\." + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]") + "+"), IP_LITERAL$ = subexp("\\[" + subexp(IPV6ADDRZ_RELAXED$ + "|" + IPV6ADDRESS$ + "|" + IPVFUTURE$) + "\\]"), //RFC 6874
        REG_NAME$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$)) + "*"), HOST$ = subexp(IP_LITERAL$ + "|" + IPV4ADDRESS$ + "(?!" + REG_NAME$ + ")" + "|" + REG_NAME$), PORT$ = subexp(DIGIT$$ + "*"), AUTHORITY$ = subexp(subexp(USERINFO$ + "@") + "?" + HOST$ + subexp("\\:" + PORT$) + "?"), PCHAR$ = subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@]")), SEGMENT$ = subexp(PCHAR$ + "*"), SEGMENT_NZ$ = subexp(PCHAR$ + "+"), SEGMENT_NZ_NC$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\@]")) + "+"), PATH_ABEMPTY$ = subexp(subexp("\\/" + SEGMENT$) + "*"), PATH_ABSOLUTE$ = subexp("\\/" + subexp(SEGMENT_NZ$ + PATH_ABEMPTY$) + "?"), //simplified
        PATH_NOSCHEME$ = subexp(SEGMENT_NZ_NC$ + PATH_ABEMPTY$), //simplified
        PATH_ROOTLESS$ = subexp(SEGMENT_NZ$ + PATH_ABEMPTY$), //simplified
        PATH_EMPTY$ = "(?!" + PCHAR$ + ")", PATH$ = subexp(PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$), QUERY$ = subexp(subexp(PCHAR$ + "|" + merge("[\\/\\?]", IPRIVATE$$)) + "*"), FRAGMENT$ = subexp(subexp(PCHAR$ + "|[\\/\\?]") + "*"), HIER_PART$ = subexp(subexp("\\/\\/" + AUTHORITY$ + PATH_ABEMPTY$) + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$), URI$ = subexp(SCHEME$ + "\\:" + HIER_PART$ + subexp("\\?" + QUERY$) + "?" + subexp("\\#" + FRAGMENT$) + "?"), RELATIVE_PART$ = subexp(subexp("\\/\\/" + AUTHORITY$ + PATH_ABEMPTY$) + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_EMPTY$), RELATIVE$ = subexp(RELATIVE_PART$ + subexp("\\?" + QUERY$) + "?" + subexp("\\#" + FRAGMENT$) + "?"), URI_REFERENCE$ = subexp(URI$ + "|" + RELATIVE$), ABSOLUTE_URI$ = subexp(SCHEME$ + "\\:" + HIER_PART$ + subexp("\\?" + QUERY$) + "?"), GENERIC_REF$ = "^(" + SCHEME$ + ")\\:" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?" + subexp("\\#(" + FRAGMENT$ + ")") + "?$", RELATIVE_REF$ = "^(){0}" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?" + subexp("\\#(" + FRAGMENT$ + ")") + "?$", ABSOLUTE_REF$ = "^(" + SCHEME$ + ")\\:" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?$", SAMEDOC_REF$ = "^" + subexp("\\#(" + FRAGMENT$ + ")") + "?$", AUTHORITY_REF$ = "^" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?$";
        return {
            NOT_SCHEME: new RegExp(merge("[^]", ALPHA$$, DIGIT$$, "[\\+\\-\\.]"), "g"),
            NOT_USERINFO: new RegExp(merge("[^\\%\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
            NOT_HOST: new RegExp(merge("[^\\%\\[\\]\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
            NOT_PATH: new RegExp(merge("[^\\%\\/\\:\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
            NOT_PATH_NOSCHEME: new RegExp(merge("[^\\%\\/\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
            NOT_QUERY: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]", IPRIVATE$$), "g"),
            NOT_FRAGMENT: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]"), "g"),
            ESCAPE: new RegExp(merge("[^]", UNRESERVED$$, SUB_DELIMS$$), "g"),
            UNRESERVED: new RegExp(UNRESERVED$$, "g"),
            OTHER_CHARS: new RegExp(merge("[^\\%]", UNRESERVED$$, RESERVED$$), "g"),
            PCT_ENCODED: new RegExp(PCT_ENCODED$, "g"),
            IPV4ADDRESS: new RegExp("^(" + IPV4ADDRESS$ + ")$"),
            IPV6ADDRESS: new RegExp("^\\[?(" + IPV6ADDRESS$ + ")" + subexp(subexp("\\%25|\\%(?!" + HEXDIG$$ + "{2})") + "(" + ZONEID$ + ")") + "?\\]?$") //RFC 6874, with relaxed parsing rules
        };
    };
    var error$1 = /*--------------------------------------------------------------------------*/ /**
 * A generic error utility function.
 * @private
 * @param {String} type The error type.
 * @returns {Error} Throws a `RangeError` with the applicable error message.
 */ function error$1(type) {
        throw new RangeError(errors[type]);
    };
    var map = /**
 * A generic `Array#map` utility function.
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} callback The function that gets called for every array
 * item.
 * @returns {Array} A new array of values returned by the callback function.
 */ function map(array, fn) {
        var result = [];
        var length = array.length;
        while(length--)result[length] = fn(array[length]);
        return result;
    };
    var mapDomain = /**
 * A simple `Array#map`-like wrapper to work with domain name strings or email
 * addresses.
 * @private
 * @param {String} domain The domain name or email address.
 * @param {Function} callback The function that gets called for every
 * character.
 * @returns {Array} A new string of characters returned by the callback
 * function.
 */ function mapDomain(string, fn) {
        var parts = string.split("@");
        var result = "";
        if (parts.length > 1) {
            // In email addresses, only the domain name should be punycoded. Leave
            // the local part (i.e. everything up to `@`) intact.
            result = parts[0] + "@";
            string = parts[1];
        }
        // Avoid `split(regex)` for IE8 compatibility. See #17.
        string = string.replace(regexSeparators, ".");
        var labels = string.split(".");
        var encoded = map(labels, fn).join(".");
        return result + encoded;
    };
    var ucs2decode = /**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 * @see `punycode.ucs2.encode`
 * @see <https://mathiasbynens.be/notes/javascript-encoding>
 * @memberOf punycode.ucs2
 * @name decode
 * @param {String} string The Unicode input string (UCS-2).
 * @returns {Array} The new array of code points.
 */ function ucs2decode(string) {
        var output = [];
        var counter = 0;
        var length = string.length;
        while(counter < length){
            var value = string.charCodeAt(counter++);
            if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
                // It's a high surrogate, and there is a next character.
                var extra = string.charCodeAt(counter++);
                if ((extra & 0xFC00) == 0xDC00) // Low surrogate.
                output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
                else {
                    // It's an unmatched surrogate; only append this code unit, in case the
                    // next code unit is the high surrogate of a surrogate pair.
                    output.push(value);
                    counter--;
                }
            } else output.push(value);
        }
        return output;
    };
    var pctEncChar = function pctEncChar(chr) {
        var c = chr.charCodeAt(0);
        var e = void 0;
        if (c < 16) e = "%0" + c.toString(16).toUpperCase();
        else if (c < 128) e = "%" + c.toString(16).toUpperCase();
        else if (c < 2048) e = "%" + (c >> 6 | 192).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
        else e = "%" + (c >> 12 | 224).toString(16).toUpperCase() + "%" + (c >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
        return e;
    };
    var pctDecChars = function pctDecChars(str) {
        var newStr = "";
        var i = 0;
        var il = str.length;
        while(i < il){
            var c = parseInt(str.substr(i + 1, 2), 16);
            if (c < 128) {
                newStr += String.fromCharCode(c);
                i += 3;
            } else if (c >= 194 && c < 224) {
                if (il - i >= 6) {
                    var c2 = parseInt(str.substr(i + 4, 2), 16);
                    newStr += String.fromCharCode((c & 31) << 6 | c2 & 63);
                } else newStr += str.substr(i, 6);
                i += 6;
            } else if (c >= 224) {
                if (il - i >= 9) {
                    var _c = parseInt(str.substr(i + 4, 2), 16);
                    var c3 = parseInt(str.substr(i + 7, 2), 16);
                    newStr += String.fromCharCode((c & 15) << 12 | (_c & 63) << 6 | c3 & 63);
                } else newStr += str.substr(i, 9);
                i += 9;
            } else {
                newStr += str.substr(i, 3);
                i += 3;
            }
        }
        return newStr;
    };
    var _normalizeComponentEncoding = function _normalizeComponentEncoding(components, protocol) {
        function decodeUnreserved(str) {
            var decStr = pctDecChars(str);
            return !decStr.match(protocol.UNRESERVED) ? str : decStr;
        }
        if (components.scheme) components.scheme = String(components.scheme).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_SCHEME, "");
        if (components.userinfo !== undefined) components.userinfo = String(components.userinfo).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_USERINFO, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.host !== undefined) components.host = String(components.host).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_HOST, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.path !== undefined) components.path = String(components.path).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(components.scheme ? protocol.NOT_PATH : protocol.NOT_PATH_NOSCHEME, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.query !== undefined) components.query = String(components.query).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_QUERY, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        if (components.fragment !== undefined) components.fragment = String(components.fragment).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_FRAGMENT, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
        return components;
    };
    var _stripLeadingZeros = function _stripLeadingZeros(str) {
        return str.replace(/^0*(.*)/, "$1") || "0";
    };
    var _normalizeIPv4 = function _normalizeIPv4(host, protocol) {
        var matches = host.match(protocol.IPV4ADDRESS) || [];
        var _matches = slicedToArray(matches, 2), address = _matches[1];
        if (address) return address.split(".").map(_stripLeadingZeros).join(".");
        else return host;
    };
    var _normalizeIPv6 = function _normalizeIPv6(host, protocol) {
        var matches = host.match(protocol.IPV6ADDRESS) || [];
        var _matches2 = slicedToArray(matches, 3), address = _matches2[1], zone = _matches2[2];
        if (address) {
            var _address$toLowerCase$ = address.toLowerCase().split("::").reverse(), _address$toLowerCase$2 = slicedToArray(_address$toLowerCase$, 2), last = _address$toLowerCase$2[0], first = _address$toLowerCase$2[1];
            var firstFields = first ? first.split(":").map(_stripLeadingZeros) : [];
            var lastFields = last.split(":").map(_stripLeadingZeros);
            var isLastFieldIPv4Address = protocol.IPV4ADDRESS.test(lastFields[lastFields.length - 1]);
            var fieldCount = isLastFieldIPv4Address ? 7 : 8;
            var lastFieldsStart = lastFields.length - fieldCount;
            var fields = Array(fieldCount);
            for(var x = 0; x < fieldCount; ++x)fields[x] = firstFields[x] || lastFields[lastFieldsStart + x] || "";
            if (isLastFieldIPv4Address) fields[fieldCount - 1] = _normalizeIPv4(fields[fieldCount - 1], protocol);
            var allZeroFields = fields.reduce(function(acc, field, index) {
                if (!field || field === "0") {
                    var lastLongest = acc[acc.length - 1];
                    if (lastLongest && lastLongest.index + lastLongest.length === index) lastLongest.length++;
                    else acc.push({
                        index: index,
                        length: 1
                    });
                }
                return acc;
            }, []);
            var longestZeroFields = allZeroFields.sort(function(a, b) {
                return b.length - a.length;
            })[0];
            var newHost = void 0;
            if (longestZeroFields && longestZeroFields.length > 1) {
                var newFirst = fields.slice(0, longestZeroFields.index);
                var newLast = fields.slice(longestZeroFields.index + longestZeroFields.length);
                newHost = newFirst.join(":") + "::" + newLast.join(":");
            } else newHost = fields.join(":");
            if (zone) newHost += "%" + zone;
            return newHost;
        } else return host;
    };
    var parse = function parse(uriString) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var components = {};
        var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
        if (options.reference === "suffix") uriString = (options.scheme ? options.scheme + ":" : "") + "//" + uriString;
        var matches = uriString.match(URI_PARSE);
        if (matches) {
            if (NO_MATCH_IS_UNDEFINED) {
                //store each component
                components.scheme = matches[1];
                components.userinfo = matches[3];
                components.host = matches[4];
                components.port = parseInt(matches[5], 10);
                components.path = matches[6] || "";
                components.query = matches[7];
                components.fragment = matches[8];
                //fix port number
                if (isNaN(components.port)) components.port = matches[5];
            } else {
                //IE FIX for improper RegExp matching
                //store each component
                components.scheme = matches[1] || undefined;
                components.userinfo = uriString.indexOf("@") !== -1 ? matches[3] : undefined;
                components.host = uriString.indexOf("//") !== -1 ? matches[4] : undefined;
                components.port = parseInt(matches[5], 10);
                components.path = matches[6] || "";
                components.query = uriString.indexOf("?") !== -1 ? matches[7] : undefined;
                components.fragment = uriString.indexOf("#") !== -1 ? matches[8] : undefined;
                //fix port number
                if (isNaN(components.port)) components.port = uriString.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? matches[4] : undefined;
            }
            if (components.host) //normalize IP hosts
            components.host = _normalizeIPv6(_normalizeIPv4(components.host, protocol), protocol);
            //determine reference type
            if (components.scheme === undefined && components.userinfo === undefined && components.host === undefined && components.port === undefined && !components.path && components.query === undefined) components.reference = "same-document";
            else if (components.scheme === undefined) components.reference = "relative";
            else if (components.fragment === undefined) components.reference = "absolute";
            else components.reference = "uri";
            //check for reference errors
            if (options.reference && options.reference !== "suffix" && options.reference !== components.reference) components.error = components.error || "URI is not a " + options.reference + " reference.";
            //find scheme handler
            var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
            //check if scheme can't handle IRIs
            if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
                //if host component is a domain name
                if (components.host && (options.domainHost || schemeHandler && schemeHandler.domainHost)) //convert Unicode IDN -> ASCII IDN
                try {
                    components.host = punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase());
                } catch (e) {
                    components.error = components.error || "Host's domain name can not be converted to ASCII via punycode: " + e;
                }
                //convert IRI -> URI
                _normalizeComponentEncoding(components, URI_PROTOCOL);
            } else //normalize encodings
            _normalizeComponentEncoding(components, protocol);
            //perform scheme specific parsing
            if (schemeHandler && schemeHandler.parse) schemeHandler.parse(components, options);
        } else components.error = components.error || "URI can not be parsed.";
        return components;
    };
    var _recomposeAuthority = function _recomposeAuthority(components, options) {
        var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
        var uriTokens = [];
        if (components.userinfo !== undefined) {
            uriTokens.push(components.userinfo);
            uriTokens.push("@");
        }
        if (components.host !== undefined) //normalize IP hosts, add brackets and escape zone separator for IPv6
        uriTokens.push(_normalizeIPv6(_normalizeIPv4(String(components.host), protocol), protocol).replace(protocol.IPV6ADDRESS, function(_, $1, $2) {
            return "[" + $1 + ($2 ? "%25" + $2 : "") + "]";
        }));
        if (typeof components.port === "number" || typeof components.port === "string") {
            uriTokens.push(":");
            uriTokens.push(String(components.port));
        }
        return uriTokens.length ? uriTokens.join("") : undefined;
    };
    var removeDotSegments = function removeDotSegments(input) {
        var output = [];
        while(input.length){
            if (input.match(RDS1)) input = input.replace(RDS1, "");
            else if (input.match(RDS2)) input = input.replace(RDS2, "/");
            else if (input.match(RDS3)) {
                input = input.replace(RDS3, "/");
                output.pop();
            } else if (input === "." || input === "..") input = "";
            else {
                var im = input.match(RDS5);
                if (im) {
                    var s = im[0];
                    input = input.slice(s.length);
                    output.push(s);
                } else throw new Error("Unexpected dot segment condition");
            }
        }
        return output.join("");
    };
    var serialize = function serialize(components) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var protocol = options.iri ? IRI_PROTOCOL : URI_PROTOCOL;
        var uriTokens = [];
        //find scheme handler
        var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
        //perform scheme specific serialization
        if (schemeHandler && schemeHandler.serialize) schemeHandler.serialize(components, options);
        if (components.host) {
            //if host component is an IPv6 address
            if (protocol.IPV6ADDRESS.test(components.host)) ;
            else if (options.domainHost || schemeHandler && schemeHandler.domainHost) //convert IDN via punycode
            try {
                components.host = !options.iri ? punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase()) : punycode.toUnicode(components.host);
            } catch (e) {
                components.error = components.error || "Host's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
            }
        }
        //normalize encoding
        _normalizeComponentEncoding(components, protocol);
        if (options.reference !== "suffix" && components.scheme) {
            uriTokens.push(components.scheme);
            uriTokens.push(":");
        }
        var authority = _recomposeAuthority(components, options);
        if (authority !== undefined) {
            if (options.reference !== "suffix") uriTokens.push("//");
            uriTokens.push(authority);
            if (components.path && components.path.charAt(0) !== "/") uriTokens.push("/");
        }
        if (components.path !== undefined) {
            var s = components.path;
            if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) s = removeDotSegments(s);
            if (authority === undefined) s = s.replace(/^\/\//, "/%2F"); //don't allow the path to start with "//"
            uriTokens.push(s);
        }
        if (components.query !== undefined) {
            uriTokens.push("?");
            uriTokens.push(components.query);
        }
        if (components.fragment !== undefined) {
            uriTokens.push("#");
            uriTokens.push(components.fragment);
        }
        return uriTokens.join(""); //merge tokens into a string
    };
    var resolveComponents = function resolveComponents(base, relative) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var skipNormalization = arguments[3];
        var target = {};
        if (!skipNormalization) {
            base = parse(serialize(base, options), options); //normalize base components
            relative = parse(serialize(relative, options), options); //normalize relative components
        }
        options = options || {};
        if (!options.tolerant && relative.scheme) {
            target.scheme = relative.scheme;
            //target.authority = relative.authority;
            target.userinfo = relative.userinfo;
            target.host = relative.host;
            target.port = relative.port;
            target.path = removeDotSegments(relative.path || "");
            target.query = relative.query;
        } else {
            if (relative.userinfo !== undefined || relative.host !== undefined || relative.port !== undefined) {
                //target.authority = relative.authority;
                target.userinfo = relative.userinfo;
                target.host = relative.host;
                target.port = relative.port;
                target.path = removeDotSegments(relative.path || "");
                target.query = relative.query;
            } else {
                if (!relative.path) {
                    target.path = base.path;
                    if (relative.query !== undefined) target.query = relative.query;
                    else target.query = base.query;
                } else {
                    if (relative.path.charAt(0) === "/") target.path = removeDotSegments(relative.path);
                    else {
                        if ((base.userinfo !== undefined || base.host !== undefined || base.port !== undefined) && !base.path) target.path = "/" + relative.path;
                        else if (!base.path) target.path = relative.path;
                        else target.path = base.path.slice(0, base.path.lastIndexOf("/") + 1) + relative.path;
                        target.path = removeDotSegments(target.path);
                    }
                    target.query = relative.query;
                }
                //target.authority = base.authority;
                target.userinfo = base.userinfo;
                target.host = base.host;
                target.port = base.port;
            }
            target.scheme = base.scheme;
        }
        target.fragment = relative.fragment;
        return target;
    };
    var resolve = function resolve(baseURI, relativeURI, options) {
        var schemelessOptions = assign({
            scheme: "null"
        }, options);
        return serialize(resolveComponents(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true), schemelessOptions);
    };
    var normalize = function normalize(uri, options) {
        if (typeof uri === "string") uri = serialize(parse(uri, options), options);
        else if (typeOf(uri) === "object") uri = parse(serialize(uri, options), options);
        return uri;
    };
    var equal = function equal(uriA, uriB, options) {
        if (typeof uriA === "string") uriA = serialize(parse(uriA, options), options);
        else if (typeOf(uriA) === "object") uriA = serialize(uriA, options);
        if (typeof uriB === "string") uriB = serialize(parse(uriB, options), options);
        else if (typeOf(uriB) === "object") uriB = serialize(uriB, options);
        return uriA === uriB;
    };
    var escapeComponent = function escapeComponent(str, options) {
        return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.ESCAPE : IRI_PROTOCOL.ESCAPE, pctEncChar);
    };
    var unescapeComponent = function unescapeComponent(str, options) {
        return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.PCT_ENCODED : IRI_PROTOCOL.PCT_ENCODED, pctDecChars);
    };
    var isSecure = function isSecure(wsComponents) {
        return typeof wsComponents.secure === "boolean" ? wsComponents.secure : String(wsComponents.scheme).toLowerCase() === "wss";
    };
    var decodeUnreserved1 = function decodeUnreserved1(str) {
        var decStr = pctDecChars(str);
        return !decStr.match(UNRESERVED) ? str : decStr;
    };
    var URI_PROTOCOL = buildExps(false);
    var IRI_PROTOCOL = buildExps(true);
    var slicedToArray = function() {
        var sliceIterator = function sliceIterator(arr, i) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = undefined;
            try {
                for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
                    _arr.push(_s.value);
                    if (i && _arr.length === i) break;
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally{
                try {
                    if (!_n && _i["return"]) _i["return"]();
                } finally{
                    if (_d) throw _e;
                }
            }
            return _arr;
        };
        return function(arr, i) {
            if (Array.isArray(arr)) return arr;
            else if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
            else throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    }();
    var toConsumableArray = function toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for(var i = 0, arr2 = Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
            return arr2;
        } else return Array.from(arr);
    };
    /** Highest positive signed 32-bit float value */ var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1
    /** Bootstring parameters */ var base1 = 36;
    var tMin = 1;
    var tMax = 26;
    var skew = 38;
    var damp = 700;
    var initialBias = 72;
    var initialN = 128; // 0x80
    var delimiter = "-"; // '\x2D'
    /** Regular expressions */ var regexPunycode = /^xn--/;
    var regexNonASCII = /[^\0-\x7E]/; // non-ASCII chars
    var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators
    /** Error messages */ var errors = {
        "overflow": "Overflow: input needs wider integers to process",
        "not-basic": "Illegal input >= 0x80 (not a basic code point)",
        "invalid-input": "Invalid input"
    };
    /** Convenience shortcuts */ var baseMinusTMin = base1 - tMin;
    var floor = Math.floor;
    var stringFromCharCode = String.fromCharCode;
    /**
 * Creates a string based on an array of numeric code points.
 * @see `punycode.ucs2.decode`
 * @memberOf punycode.ucs2
 * @name encode
 * @param {Array} codePoints The array of numeric code points.
 * @returns {String} The new Unicode string (UCS-2).
 */ var ucs2encode = function ucs2encode(array) {
        return String.fromCodePoint.apply(String, toConsumableArray(array));
    };
    /**
 * Converts a basic code point into a digit/integer.
 * @see `digitToBasic()`
 * @private
 * @param {Number} codePoint The basic numeric code point value.
 * @returns {Number} The numeric value of a basic code point (for use in
 * representing integers) in the range `0` to `base - 1`, or `base` if
 * the code point does not represent a value.
 */ var basicToDigit = function basicToDigit(codePoint) {
        if (codePoint - 0x30 < 0x0A) return codePoint - 0x16;
        if (codePoint - 0x41 < 0x1A) return codePoint - 0x41;
        if (codePoint - 0x61 < 0x1A) return codePoint - 0x61;
        return base1;
    };
    /**
 * Converts a digit/integer into a basic code point.
 * @see `basicToDigit()`
 * @private
 * @param {Number} digit The numeric value of a basic code point.
 * @returns {Number} The basic code point whose value (when used for
 * representing integers) is `digit`, which needs to be in the range
 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
 * used; else, the lowercase form is used. The behavior is undefined
 * if `flag` is non-zero and `digit` has no uppercase form.
 */ var digitToBasic = function digitToBasic(digit, flag) {
        //  0..25 map to ASCII a..z or A..Z
        // 26..35 map to ASCII 0..9
        return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
    };
    /**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 * @private
 */ var adapt = function adapt(delta, numPoints, firstTime) {
        var k = 0;
        delta = firstTime ? floor(delta / damp) : delta >> 1;
        delta += floor(delta / numPoints);
        for(; delta > baseMinusTMin * tMax >> 1; k += base1)delta = floor(delta / baseMinusTMin);
        return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
    };
    /**
 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
 * symbols.
 * @memberOf punycode
 * @param {String} input The Punycode string of ASCII-only symbols.
 * @returns {String} The resulting string of Unicode symbols.
 */ var decode = function decode(input) {
        // Don't use UCS-2.
        var output = [];
        var inputLength = input.length;
        var i = 0;
        var n = initialN;
        var bias = initialBias;
        // Handle the basic code points: let `basic` be the number of input code
        // points before the last delimiter, or `0` if there is none, then copy
        // the first basic code points to the output.
        var basic = input.lastIndexOf(delimiter);
        if (basic < 0) basic = 0;
        for(var j = 0; j < basic; ++j){
            // if it's not a basic code point
            if (input.charCodeAt(j) >= 0x80) error$1("not-basic");
            output.push(input.charCodeAt(j));
        }
        // Main decoding loop: start just after the last delimiter if any basic code
        // points were copied; start at the beginning otherwise.
        for(var index = basic > 0 ? basic + 1 : 0; index < inputLength;)/* no final expression */ {
            // `index` is the index of the next character to be consumed.
            // Decode a generalized variable-length integer into `delta`,
            // which gets added to `i`. The overflow checking is easier
            // if we increase `i` as we go, then subtract off its starting
            // value at the end to obtain `delta`.
            var oldi = i;
            for(var w = 1, k = base1;; k += base1){
                if (index >= inputLength) error$1("invalid-input");
                var digit = basicToDigit(input.charCodeAt(index++));
                if (digit >= base1 || digit > floor((maxInt - i) / w)) error$1("overflow");
                i += digit * w;
                var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                if (digit < t) break;
                var baseMinusT = base1 - t;
                if (w > floor(maxInt / baseMinusT)) error$1("overflow");
                w *= baseMinusT;
            }
            var out = output.length + 1;
            bias = adapt(i - oldi, out, oldi == 0);
            // `i` was supposed to wrap around from `out` to `0`,
            // incrementing `n` each time, so we'll fix that now:
            if (floor(i / out) > maxInt - n) error$1("overflow");
            n += floor(i / out);
            i %= out;
            // Insert `n` at position `i` of the output.
            output.splice(i++, 0, n);
        }
        return String.fromCodePoint.apply(String, output);
    };
    /**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 * @memberOf punycode
 * @param {String} input The string of Unicode symbols.
 * @returns {String} The resulting Punycode string of ASCII-only symbols.
 */ var encode = function encode(input) {
        var output = [];
        // Convert the input in UCS-2 to an array of Unicode code points.
        input = ucs2decode(input);
        // Cache the length.
        var inputLength = input.length;
        // Initialize the state.
        var n = initialN;
        var delta = 0;
        var bias = initialBias;
        // Handle the basic code points.
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;
        try {
            for(var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var _currentValue2 = _step.value;
                if (_currentValue2 < 0x80) output.push(stringFromCharCode(_currentValue2));
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return) _iterator.return();
            } finally{
                if (_didIteratorError) throw _iteratorError;
            }
        }
        var basicLength = output.length;
        var handledCPCount = basicLength;
        // `handledCPCount` is the number of code points that have been handled;
        // `basicLength` is the number of basic code points.
        // Finish the basic string with a delimiter unless it's empty.
        if (basicLength) output.push(delimiter);
        // Main encoding loop:
        while(handledCPCount < inputLength){
            // All non-basic code points < n have been handled already. Find the next
            // larger one:
            var m = maxInt;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;
            try {
                for(var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
                    var currentValue = _step2.value;
                    if (currentValue >= n && currentValue < m) m = currentValue;
                }
            // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
            // but guard against overflow.
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) _iterator2.return();
                } finally{
                    if (_didIteratorError2) throw _iteratorError2;
                }
            }
            var handledCPCountPlusOne = handledCPCount + 1;
            if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) error$1("overflow");
            delta += (m - n) * handledCPCountPlusOne;
            n = m;
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;
            try {
                for(var _iterator3 = input[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                    var _currentValue = _step3.value;
                    if (_currentValue < n && ++delta > maxInt) error$1("overflow");
                    if (_currentValue == n) {
                        // Represent delta as a generalized variable-length integer.
                        var q = delta;
                        for(var k = base1;; k += base1){
                            var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
                            if (q < t) break;
                            var qMinusT = q - t;
                            var baseMinusT = base1 - t;
                            output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
                            q = floor(qMinusT / baseMinusT);
                        }
                        output.push(stringFromCharCode(digitToBasic(q, 0)));
                        bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
                        delta = 0;
                        ++handledCPCount;
                    }
                }
            } catch (err1) {
                _didIteratorError3 = true;
                _iteratorError3 = err1;
            } finally{
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) _iterator3.return();
                } finally{
                    if (_didIteratorError3) throw _iteratorError3;
                }
            }
            ++delta;
            ++n;
        }
        return output.join("");
    };
    /**
 * Converts a Punycode string representing a domain name or an email address
 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
 * it doesn't matter if you call it on a string that has already been
 * converted to Unicode.
 * @memberOf punycode
 * @param {String} input The Punycoded domain name or email address to
 * convert to Unicode.
 * @returns {String} The Unicode representation of the given Punycode
 * string.
 */ var toUnicode = function toUnicode(input) {
        return mapDomain(input, function(string) {
            return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
        });
    };
    /**
 * Converts a Unicode string representing a domain name or an email address to
 * Punycode. Only the non-ASCII parts of the domain name will be converted,
 * i.e. it doesn't matter if you call it with a domain that's already in
 * ASCII.
 * @memberOf punycode
 * @param {String} input The domain name or email address to convert, as a
 * Unicode string.
 * @returns {String} The Punycode representation of the given domain name or
 * email address.
 */ var toASCII = function toASCII(input) {
        return mapDomain(input, function(string) {
            return regexNonASCII.test(string) ? "xn--" + encode(string) : string;
        });
    };
    /*--------------------------------------------------------------------------*/ /** Define the public API */ var punycode = {
        /**
  * A string representing the current Punycode.js version number.
  * @memberOf punycode
  * @type String
  */ "version": "2.1.0",
        /**
  * An object of methods to convert from JavaScript's internal character
  * representation (UCS-2) to Unicode code points, and back.
  * @see <https://mathiasbynens.be/notes/javascript-encoding>
  * @memberOf punycode
  * @type Object
  */ "ucs2": {
            "decode": ucs2decode,
            "encode": ucs2encode
        },
        "decode": decode,
        "encode": encode,
        "toASCII": toASCII,
        "toUnicode": toUnicode
    };
    /**
 * URI.js
 *
 * @fileoverview An RFC 3986 compliant, scheme extendable URI parsing/validating/resolving library for JavaScript.
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/uri-js
 */ /**
 * Copyright 2011 Gary Court. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are
 * permitted provided that the following conditions are met:
 *
 *    1. Redistributions of source code must retain the above copyright notice, this list of
 *       conditions and the following disclaimer.
 *
 *    2. Redistributions in binary form must reproduce the above copyright notice, this list
 *       of conditions and the following disclaimer in the documentation and/or other materials
 *       provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY GARY COURT ``AS IS'' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL GARY COURT OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * The views and conclusions contained in the software and documentation are those of the
 * authors and should not be interpreted as representing official policies, either expressed
 * or implied, of Gary Court.
 */ var SCHEMES = {};
    var URI_PARSE = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
    var NO_MATCH_IS_UNDEFINED = "".match(/(){0}/)[1] === undefined;
    var RDS1 = /^\.\.?\//;
    var RDS2 = /^\/\.(\/|$)/;
    var RDS3 = /^\/\.\.(\/|$)/;
    var RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/;
    var handler = {
        scheme: "http",
        domainHost: true,
        parse: function parse(components, options) {
            //report missing host
            if (!components.host) components.error = components.error || "HTTP URIs must have a host.";
            return components;
        },
        serialize: function serialize(components, options) {
            var secure = String(components.scheme).toLowerCase() === "https";
            //normalize the default port
            if (components.port === (secure ? 443 : 80) || components.port === "") components.port = undefined;
            //normalize the empty path
            if (!components.path) components.path = "/";
            //NOTE: We do not parse query strings for HTTP URIs
            //as WWW Form Url Encoded query strings are part of the HTML4+ spec,
            //and not the HTTP spec.
            return components;
        }
    };
    var handler$1 = {
        scheme: "https",
        domainHost: handler.domainHost,
        parse: handler.parse,
        serialize: handler.serialize
    };
    //RFC 6455
    var handler$2 = {
        scheme: "ws",
        domainHost: true,
        parse: function parse(components, options) {
            var wsComponents = components;
            //indicate if the secure flag is set
            wsComponents.secure = isSecure(wsComponents);
            //construct resouce name
            wsComponents.resourceName = (wsComponents.path || "/") + (wsComponents.query ? "?" + wsComponents.query : "");
            wsComponents.path = undefined;
            wsComponents.query = undefined;
            return wsComponents;
        },
        serialize: function serialize(wsComponents, options) {
            //normalize the default port
            if (wsComponents.port === (isSecure(wsComponents) ? 443 : 80) || wsComponents.port === "") wsComponents.port = undefined;
            //ensure scheme matches secure flag
            if (typeof wsComponents.secure === "boolean") {
                wsComponents.scheme = wsComponents.secure ? "wss" : "ws";
                wsComponents.secure = undefined;
            }
            //reconstruct path from resource name
            if (wsComponents.resourceName) {
                var _wsComponents$resourc = wsComponents.resourceName.split("?"), _wsComponents$resourc2 = slicedToArray(_wsComponents$resourc, 2), path = _wsComponents$resourc2[0], query = _wsComponents$resourc2[1];
                wsComponents.path = path && path !== "/" ? path : undefined;
                wsComponents.query = query;
                wsComponents.resourceName = undefined;
            }
            //forbid fragment component
            wsComponents.fragment = undefined;
            return wsComponents;
        }
    };
    var handler$3 = {
        scheme: "wss",
        domainHost: handler$2.domainHost,
        parse: handler$2.parse,
        serialize: handler$2.serialize
    };
    var O = {};
    var isIRI1 = true;
    //RFC 3986
    var UNRESERVED$$1 = "[A-Za-z0-9\\-\\.\\_\\~" + (isIRI1 ? "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" : "") + "]";
    var HEXDIG$$1 = "[0-9A-Fa-f]"; //case-insensitive
    var PCT_ENCODED$1 = subexp(subexp("%[EFef]" + HEXDIG$$1 + "%" + HEXDIG$$1 + HEXDIG$$1 + "%" + HEXDIG$$1 + HEXDIG$$1) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$1 + "%" + HEXDIG$$1 + HEXDIG$$1) + "|" + subexp("%" + HEXDIG$$1 + HEXDIG$$1)); //expanded
    //RFC 5322, except these symbols as per RFC 6068: @ : / ? # [ ] & ; =
    //const ATEXT$$ = "[A-Za-z0-9\\!\\#\\$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\|\\}\\~]";
    //const WSP$$ = "[\\x20\\x09]";
    //const OBS_QTEXT$$ = "[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x7F]";  //(%d1-8 / %d11-12 / %d14-31 / %d127)
    //const QTEXT$$ = merge("[\\x21\\x23-\\x5B\\x5D-\\x7E]", OBS_QTEXT$$);  //%d33 / %d35-91 / %d93-126 / obs-qtext
    //const VCHAR$$ = "[\\x21-\\x7E]";
    //const WSP$$ = "[\\x20\\x09]";
    //const OBS_QP$ = subexp("\\\\" + merge("[\\x00\\x0D\\x0A]", OBS_QTEXT$$));  //%d0 / CR / LF / obs-qtext
    //const FWS$ = subexp(subexp(WSP$$ + "*" + "\\x0D\\x0A") + "?" + WSP$$ + "+");
    //const QUOTED_PAIR$ = subexp(subexp("\\\\" + subexp(VCHAR$$ + "|" + WSP$$)) + "|" + OBS_QP$);
    //const QUOTED_STRING$ = subexp('\\"' + subexp(FWS$ + "?" + QCONTENT$) + "*" + FWS$ + "?" + '\\"');
    var ATEXT$$ = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
    var QTEXT$$ = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
    var VCHAR$$ = merge(QTEXT$$, '[\\"\\\\]');
    var SOME_DELIMS$$ = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
    var UNRESERVED = new RegExp(UNRESERVED$$1, "g");
    var PCT_ENCODED = new RegExp(PCT_ENCODED$1, "g");
    var NOT_LOCAL_PART = new RegExp(merge("[^]", ATEXT$$, "[\\.]", '[\\"]', VCHAR$$), "g");
    var NOT_HFNAME = new RegExp(merge("[^]", UNRESERVED$$1, SOME_DELIMS$$), "g");
    var NOT_HFVALUE = NOT_HFNAME;
    var handler$4 = {
        scheme: "mailto",
        parse: function parse$$1(components, options) {
            var mailtoComponents = components;
            var to = mailtoComponents.to = mailtoComponents.path ? mailtoComponents.path.split(",") : [];
            mailtoComponents.path = undefined;
            if (mailtoComponents.query) {
                var unknownHeaders = false;
                var headers = {};
                var hfields = mailtoComponents.query.split("&");
                for(var x = 0, xl = hfields.length; x < xl; ++x){
                    var hfield = hfields[x].split("=");
                    switch(hfield[0]){
                        case "to":
                            var toAddrs = hfield[1].split(",");
                            for(var _x = 0, _xl = toAddrs.length; _x < _xl; ++_x)to.push(toAddrs[_x]);
                            break;
                        case "subject":
                            mailtoComponents.subject = unescapeComponent(hfield[1], options);
                            break;
                        case "body":
                            mailtoComponents.body = unescapeComponent(hfield[1], options);
                            break;
                        default:
                            unknownHeaders = true;
                            headers[unescapeComponent(hfield[0], options)] = unescapeComponent(hfield[1], options);
                            break;
                    }
                }
                if (unknownHeaders) mailtoComponents.headers = headers;
            }
            mailtoComponents.query = undefined;
            for(var _x2 = 0, _xl2 = to.length; _x2 < _xl2; ++_x2){
                var addr = to[_x2].split("@");
                addr[0] = unescapeComponent(addr[0]);
                if (!options.unicodeSupport) //convert Unicode IDN -> ASCII IDN
                try {
                    addr[1] = punycode.toASCII(unescapeComponent(addr[1], options).toLowerCase());
                } catch (e) {
                    mailtoComponents.error = mailtoComponents.error || "Email address's domain name can not be converted to ASCII via punycode: " + e;
                }
                else addr[1] = unescapeComponent(addr[1], options).toLowerCase();
                to[_x2] = addr.join("@");
            }
            return mailtoComponents;
        },
        serialize: function serialize$$1(mailtoComponents, options) {
            var components = mailtoComponents;
            var to = toArray(mailtoComponents.to);
            if (to) {
                for(var x = 0, xl = to.length; x < xl; ++x){
                    var toAddr = String(to[x]);
                    var atIdx = toAddr.lastIndexOf("@");
                    var localPart = toAddr.slice(0, atIdx).replace(PCT_ENCODED, decodeUnreserved1).replace(PCT_ENCODED, toUpperCase).replace(NOT_LOCAL_PART, pctEncChar);
                    var domain = toAddr.slice(atIdx + 1);
                    //convert IDN via punycode
                    try {
                        domain = !options.iri ? punycode.toASCII(unescapeComponent(domain, options).toLowerCase()) : punycode.toUnicode(domain);
                    } catch (e) {
                        components.error = components.error || "Email address's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
                    }
                    to[x] = localPart + "@" + domain;
                }
                components.path = to.join(",");
            }
            var headers = mailtoComponents.headers = mailtoComponents.headers || {};
            if (mailtoComponents.subject) headers["subject"] = mailtoComponents.subject;
            if (mailtoComponents.body) headers["body"] = mailtoComponents.body;
            var fields = [];
            for(var name in headers)if (headers[name] !== O[name]) fields.push(name.replace(PCT_ENCODED, decodeUnreserved1).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFNAME, pctEncChar) + "=" + headers[name].replace(PCT_ENCODED, decodeUnreserved1).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFVALUE, pctEncChar));
            if (fields.length) components.query = fields.join("&");
            return components;
        }
    };
    var URN_PARSE = /^([^\:]+)\:(.*)/;
    //RFC 2141
    var handler$5 = {
        scheme: "urn",
        parse: function parse$$1(components, options) {
            var matches = components.path && components.path.match(URN_PARSE);
            var urnComponents = components;
            if (matches) {
                var scheme = options.scheme || urnComponents.scheme || "urn";
                var nid = matches[1].toLowerCase();
                var nss = matches[2];
                var urnScheme = scheme + ":" + (options.nid || nid);
                var schemeHandler = SCHEMES[urnScheme];
                urnComponents.nid = nid;
                urnComponents.nss = nss;
                urnComponents.path = undefined;
                if (schemeHandler) urnComponents = schemeHandler.parse(urnComponents, options);
            } else urnComponents.error = urnComponents.error || "URN can not be parsed.";
            return urnComponents;
        },
        serialize: function serialize$$1(urnComponents, options) {
            var scheme = options.scheme || urnComponents.scheme || "urn";
            var nid = urnComponents.nid;
            var urnScheme = scheme + ":" + (options.nid || nid);
            var schemeHandler = SCHEMES[urnScheme];
            if (schemeHandler) urnComponents = schemeHandler.serialize(urnComponents, options);
            var uriComponents = urnComponents;
            var nss = urnComponents.nss;
            uriComponents.path = (nid || options.nid) + ":" + nss;
            return uriComponents;
        }
    };
    var UUID = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
    //RFC 4122
    var handler$6 = {
        scheme: "urn:uuid",
        parse: function parse(urnComponents, options) {
            var uuidComponents = urnComponents;
            uuidComponents.uuid = uuidComponents.nss;
            uuidComponents.nss = undefined;
            if (!options.tolerant && (!uuidComponents.uuid || !uuidComponents.uuid.match(UUID))) uuidComponents.error = uuidComponents.error || "UUID is not valid.";
            return uuidComponents;
        },
        serialize: function serialize(uuidComponents, options) {
            var urnComponents = uuidComponents;
            //normalize UUID
            urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
            return urnComponents;
        }
    };
    SCHEMES[handler.scheme] = handler;
    SCHEMES[handler$1.scheme] = handler$1;
    SCHEMES[handler$2.scheme] = handler$2;
    SCHEMES[handler$3.scheme] = handler$3;
    SCHEMES[handler$4.scheme] = handler$4;
    SCHEMES[handler$5.scheme] = handler$5;
    SCHEMES[handler$6.scheme] = handler$6;
    exports.SCHEMES = SCHEMES;
    exports.pctEncChar = pctEncChar;
    exports.pctDecChars = pctDecChars;
    exports.parse = parse;
    exports.removeDotSegments = removeDotSegments;
    exports.serialize = serialize;
    exports.resolveComponents = resolveComponents;
    exports.resolve = resolve;
    exports.normalize = normalize;
    exports.equal = equal;
    exports.escapeComponent = escapeComponent;
    exports.unescapeComponent = unescapeComponent;
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
});

});



parcelRequire.register("jeXeZ", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $3A9lS = parcelRequire("3A9lS");

var $4YNLD = parcelRequire("4YNLD");

var $9mihB = parcelRequire("9mihB");

var $a6TaU = parcelRequire("a6TaU");

var $4zmj2 = parcelRequire("4zmj2");
var $e01d471ab4389904$var$draft7Vocabularies = [
    $3A9lS.default,
    $4YNLD.default,
    (0, $9mihB.default)(),
    $a6TaU.default,
    $4zmj2.metadataVocabulary,
    $4zmj2.contentVocabulary, 
];
module.exports.default = $e01d471ab4389904$var$draft7Vocabularies;

});
parcelRequire.register("3A9lS", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $hCL0t = parcelRequire("hCL0t");

var $3Xuz4 = parcelRequire("3Xuz4");
var $29bbfcfadacca00c$var$core = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    {
        keyword: "$comment"
    },
    "definitions",
    $hCL0t.default,
    $3Xuz4.default, 
];
module.exports.default = $29bbfcfadacca00c$var$core;

});
parcelRequire.register("hCL0t", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
var $cd4a72d11187668a$var$def = {
    keyword: "id",
    code: function() {
        throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
};
module.exports.default = $cd4a72d11187668a$var$def;

});

parcelRequire.register("3Xuz4", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $2e1e97437796e289$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "",
        ".validate"
    ]);
    $2e1e97437796e289$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $2e1e97437796e289$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "",
        ".validate"
    ]);
    $2e1e97437796e289$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $2e1e97437796e289$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "await ",
        ""
    ]);
    $2e1e97437796e289$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $2e1e97437796e289$var$_templateObject3() {
    var data = (0, $iXJoB.default)([
        "!(",
        " instanceof ",
        ")"
    ]);
    $2e1e97437796e289$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function $2e1e97437796e289$var$_templateObject4() {
    var data = (0, $iXJoB.default)([
        "",
        ".errors"
    ]);
    $2e1e97437796e289$var$_templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
function $2e1e97437796e289$var$_templateObject5() {
    var data = (0, $iXJoB.default)([
        "",
        " === null ? ",
        " : ",
        ".concat(",
        ")"
    ]);
    $2e1e97437796e289$var$_templateObject5 = function _templateObject5() {
        return data;
    };
    return data;
}
function $2e1e97437796e289$var$_templateObject6() {
    var data = (0, $iXJoB.default)([
        "",
        ".length"
    ]);
    $2e1e97437796e289$var$_templateObject6 = function _templateObject6() {
        return data;
    };
    return data;
}
function $2e1e97437796e289$var$_templateObject7() {
    var data = (0, $iXJoB.default)([
        "",
        ".evaluated.props"
    ]);
    $2e1e97437796e289$var$_templateObject7 = function _templateObject7() {
        return data;
    };
    return data;
}
function $2e1e97437796e289$var$_templateObject8() {
    var data = (0, $iXJoB.default)([
        "",
        ".evaluated.items"
    ]);
    $2e1e97437796e289$var$_templateObject8 = function _templateObject8() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.callRef = module.exports.getValidate = void 0;

var $2FExk = parcelRequire("2FExk");

var $2olnp = parcelRequire("2olnp");

var $jkIFZ = parcelRequire("jkIFZ");

var $4QYyN = parcelRequire("4QYyN");

var $9JBGp = parcelRequire("9JBGp");

var $eF2Jh = parcelRequire("eF2Jh");
var $2e1e97437796e289$var$def = {
    keyword: "$ref",
    schemaType: "string",
    code: function(cxt) {
        var callRootRef = function callRootRef() {
            if (env === root) return $2e1e97437796e289$var$callRef(cxt, validateName, env, env.$async);
            var rootName = gen.scopeValue("root", {
                ref: root
            });
            return $2e1e97437796e289$var$callRef(cxt, $jkIFZ._($2e1e97437796e289$var$_templateObject(), rootName), root, root.$async);
        };
        var callValidate = function callValidate(sch) {
            var v = $2e1e97437796e289$var$getValidate(cxt, sch);
            $2e1e97437796e289$var$callRef(cxt, v, sch, sch.$async);
        };
        var inlineRefSchema = function inlineRefSchema(sch) {
            var schName = gen.scopeValue("schema", opts.code.source === true ? {
                ref: sch,
                code: (0, $jkIFZ.stringify)(sch)
            } : {
                ref: sch
            });
            var valid = gen.name("valid");
            var schCxt = cxt.subschema({
                schema: sch,
                dataTypes: [],
                schemaPath: $jkIFZ.nil,
                topSchemaRef: schName,
                errSchemaPath: $ref
            }, valid);
            cxt.mergeEvaluated(schCxt);
            cxt.ok(valid);
        };
        var gen = cxt.gen, $ref = cxt.schema, it = cxt.it;
        var baseId = it.baseId, env = it.schemaEnv, validateName = it.validateName, opts = it.opts, self = it.self;
        var root = env.root;
        if (($ref === "#" || $ref === "#/") && baseId === root.baseId) return callRootRef();
        var schOrEnv = $9JBGp.resolveRef.call(self, root, baseId, $ref);
        if (schOrEnv === undefined) throw new $2FExk.default(it.opts.uriResolver, baseId, $ref);
        if (schOrEnv instanceof $9JBGp.SchemaEnv) return callValidate(schOrEnv);
        return inlineRefSchema(schOrEnv);
    }
};
function $2e1e97437796e289$var$getValidate(cxt, sch) {
    var gen = cxt.gen;
    return sch.validate ? gen.scopeValue("validate", {
        ref: sch.validate
    }) : $jkIFZ._($2e1e97437796e289$var$_templateObject1(), gen.scopeValue("wrapper", {
        ref: sch
    }));
}
module.exports.getValidate = $2e1e97437796e289$var$getValidate;
function $2e1e97437796e289$var$callRef(cxt, v, sch, $async) {
    var callAsyncRef = function callAsyncRef() {
        if (!env.$async) throw new Error("async schema referenced by sync schema");
        var valid = gen.let("valid");
        gen.try(function() {
            gen.code($jkIFZ._($2e1e97437796e289$var$_templateObject2(), (0, $2olnp.callValidateCode)(cxt, v, passCxt)));
            addEvaluatedFrom(v); // TODO will not work with async, it has to be returned with the result
            if (!allErrors) gen.assign(valid, true);
        }, function(e) {
            gen.if($jkIFZ._($2e1e97437796e289$var$_templateObject3(), e, it.ValidationError), function() {
                return gen.throw(e);
            });
            addErrorsFrom(e);
            if (!allErrors) gen.assign(valid, false);
        });
        cxt.ok(valid);
    };
    var callSyncRef = function callSyncRef() {
        cxt.result((0, $2olnp.callValidateCode)(cxt, v, passCxt), function() {
            return addEvaluatedFrom(v);
        }, function() {
            return addErrorsFrom(v);
        });
    };
    var addErrorsFrom = function addErrorsFrom(source) {
        var errs = $jkIFZ._($2e1e97437796e289$var$_templateObject4(), source);
        gen.assign($4QYyN.default.vErrors, $jkIFZ._($2e1e97437796e289$var$_templateObject5(), $4QYyN.default.vErrors, errs, $4QYyN.default.vErrors, errs)); // TODO tagged
        gen.assign($4QYyN.default.errors, $jkIFZ._($2e1e97437796e289$var$_templateObject6(), $4QYyN.default.vErrors));
    };
    var addEvaluatedFrom = function addEvaluatedFrom(source) {
        var _a;
        if (!it.opts.unevaluated) return;
        var schEvaluated = (_a = sch === null || sch === void 0 ? void 0 : sch.validate) === null || _a === void 0 ? void 0 : _a.evaluated;
        // TODO refactor
        if (it.props !== true) {
            if (schEvaluated && !schEvaluated.dynamicProps) {
                if (schEvaluated.props !== undefined) it.props = $eF2Jh.mergeEvaluated.props(gen, schEvaluated.props, it.props);
            } else {
                var props = gen.var("props", $jkIFZ._($2e1e97437796e289$var$_templateObject7(), source));
                it.props = $eF2Jh.mergeEvaluated.props(gen, props, it.props, $jkIFZ.Name);
            }
        }
        if (it.items !== true) {
            if (schEvaluated && !schEvaluated.dynamicItems) {
                if (schEvaluated.items !== undefined) it.items = $eF2Jh.mergeEvaluated.items(gen, schEvaluated.items, it.items);
            } else {
                var items = gen.var("items", $jkIFZ._($2e1e97437796e289$var$_templateObject8(), source));
                it.items = $eF2Jh.mergeEvaluated.items(gen, items, it.items, $jkIFZ.Name);
            }
        }
    };
    var gen = cxt.gen, it = cxt.it;
    var allErrors = it.allErrors, env = it.schemaEnv, opts = it.opts;
    var passCxt = opts.passContext ? $4QYyN.default.this : $jkIFZ.nil;
    if ($async) callAsyncRef();
    else callSyncRef();
}
module.exports.callRef = $2e1e97437796e289$var$callRef;
module.exports.default = $2e1e97437796e289$var$def;

});


parcelRequire.register("4YNLD", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jxnbm = parcelRequire("jxnbm");

var $68Bbe = parcelRequire("68Bbe");

var $5s3dC = parcelRequire("5s3dC");

var $05cZp = parcelRequire("05cZp");

var $iqynw = parcelRequire("iqynw");

var $96SYv = parcelRequire("96SYv");

var $3j4cI = parcelRequire("3j4cI");

var $kWV9o = parcelRequire("kWV9o");

var $dHM6X = parcelRequire("dHM6X");

var $l4ILa = parcelRequire("l4ILa");
var $3a035ec48e72a8f5$var$validation = [
    // number
    $jxnbm.default,
    $68Bbe.default,
    // string
    $5s3dC.default,
    $05cZp.default,
    // object
    $iqynw.default,
    $96SYv.default,
    // array
    $3j4cI.default,
    $kWV9o.default,
    // any
    {
        keyword: "type",
        schemaType: [
            "string",
            "array"
        ]
    },
    {
        keyword: "nullable",
        schemaType: "boolean"
    },
    $dHM6X.default,
    $l4ILa.default, 
];
module.exports.default = $3a035ec48e72a8f5$var$validation;

});
parcelRequire.register("jxnbm", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $e39314e77c57d265$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "must be ",
        " ",
        ""
    ]);
    $e39314e77c57d265$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $e39314e77c57d265$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "{comparison: ",
        ", limit: ",
        "}"
    ]);
    $e39314e77c57d265$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $e39314e77c57d265$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "",
        " ",
        " ",
        " || isNaN(",
        ")"
    ]);
    $e39314e77c57d265$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jkIFZ = parcelRequire("jkIFZ");
var $e39314e77c57d265$var$ops = $jkIFZ.operators;
var $e39314e77c57d265$var$KWDs = {
    maximum: {
        okStr: "<=",
        ok: $e39314e77c57d265$var$ops.LTE,
        fail: $e39314e77c57d265$var$ops.GT
    },
    minimum: {
        okStr: ">=",
        ok: $e39314e77c57d265$var$ops.GTE,
        fail: $e39314e77c57d265$var$ops.LT
    },
    exclusiveMaximum: {
        okStr: "<",
        ok: $e39314e77c57d265$var$ops.LT,
        fail: $e39314e77c57d265$var$ops.GTE
    },
    exclusiveMinimum: {
        okStr: ">",
        ok: $e39314e77c57d265$var$ops.GT,
        fail: $e39314e77c57d265$var$ops.LTE
    }
};
var $e39314e77c57d265$var$error = {
    message: function(param) {
        var keyword = param.keyword, schemaCode = param.schemaCode;
        return $jkIFZ.str($e39314e77c57d265$var$_templateObject(), $e39314e77c57d265$var$KWDs[keyword].okStr, schemaCode);
    },
    params: function(param) {
        var keyword = param.keyword, schemaCode = param.schemaCode;
        return $jkIFZ._($e39314e77c57d265$var$_templateObject1(), $e39314e77c57d265$var$KWDs[keyword].okStr, schemaCode);
    }
};
var $e39314e77c57d265$var$def = {
    keyword: Object.keys($e39314e77c57d265$var$KWDs),
    type: "number",
    schemaType: "number",
    $data: true,
    error: $e39314e77c57d265$var$error,
    code: function(cxt) {
        var keyword = cxt.keyword, data = cxt.data, schemaCode = cxt.schemaCode;
        cxt.fail$data($jkIFZ._($e39314e77c57d265$var$_templateObject2(), data, $e39314e77c57d265$var$KWDs[keyword].fail, schemaCode, data));
    }
};
module.exports.default = $e39314e77c57d265$var$def;

});

parcelRequire.register("68Bbe", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $478054a80212456a$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "must be multiple of ",
        ""
    ]);
    $478054a80212456a$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $478054a80212456a$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "{multipleOf: ",
        "}"
    ]);
    $478054a80212456a$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $478054a80212456a$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "Math.abs(Math.round(",
        ") - ",
        ") > 1e-",
        ""
    ]);
    $478054a80212456a$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $478054a80212456a$var$_templateObject3() {
    var data = (0, $iXJoB.default)([
        "",
        " !== parseInt(",
        ")"
    ]);
    $478054a80212456a$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function $478054a80212456a$var$_templateObject4() {
    var data = (0, $iXJoB.default)([
        "(",
        " === 0 || (",
        " = ",
        "/",
        ", ",
        "))"
    ]);
    $478054a80212456a$var$_templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jkIFZ = parcelRequire("jkIFZ");
var $478054a80212456a$var$error = {
    message: function(param) {
        var schemaCode = param.schemaCode;
        return $jkIFZ.str($478054a80212456a$var$_templateObject(), schemaCode);
    },
    params: function(param) {
        var schemaCode = param.schemaCode;
        return $jkIFZ._($478054a80212456a$var$_templateObject1(), schemaCode);
    }
};
var $478054a80212456a$var$def = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: true,
    error: $478054a80212456a$var$error,
    code: function(cxt) {
        var gen = cxt.gen, data = cxt.data, schemaCode = cxt.schemaCode, it = cxt.it;
        // const bdt = bad$DataType(schemaCode, <string>def.schemaType, $data)
        var prec = it.opts.multipleOfPrecision;
        var res = gen.let("res");
        var invalid = prec ? $jkIFZ._($478054a80212456a$var$_templateObject2(), res, res, prec) : $jkIFZ._($478054a80212456a$var$_templateObject3(), res, res);
        cxt.fail$data($jkIFZ._($478054a80212456a$var$_templateObject4(), schemaCode, res, data, schemaCode, invalid));
    }
};
module.exports.default = $478054a80212456a$var$def;

});

parcelRequire.register("5s3dC", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $3f82106983d4bc38$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "must NOT have ",
        " than ",
        " characters"
    ]);
    $3f82106983d4bc38$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $3f82106983d4bc38$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "{limit: ",
        "}"
    ]);
    $3f82106983d4bc38$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $3f82106983d4bc38$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "",
        ".length"
    ]);
    $3f82106983d4bc38$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $3f82106983d4bc38$var$_templateObject3() {
    var data = (0, $iXJoB.default)([
        "",
        "(",
        ")"
    ]);
    $3f82106983d4bc38$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function $3f82106983d4bc38$var$_templateObject4() {
    var data = (0, $iXJoB.default)([
        "",
        " ",
        " ",
        ""
    ]);
    $3f82106983d4bc38$var$_templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jkIFZ = parcelRequire("jkIFZ");

var $eF2Jh = parcelRequire("eF2Jh");

var $5vyIp = parcelRequire("5vyIp");
var $3f82106983d4bc38$var$error = {
    message: function(param) {
        var keyword = param.keyword, schemaCode = param.schemaCode;
        var comp = keyword === "maxLength" ? "more" : "fewer";
        return $jkIFZ.str($3f82106983d4bc38$var$_templateObject(), comp, schemaCode);
    },
    params: function(param) {
        var schemaCode = param.schemaCode;
        return $jkIFZ._($3f82106983d4bc38$var$_templateObject1(), schemaCode);
    }
};
var $3f82106983d4bc38$var$def = {
    keyword: [
        "maxLength",
        "minLength"
    ],
    type: "string",
    schemaType: "number",
    $data: true,
    error: $3f82106983d4bc38$var$error,
    code: function(cxt) {
        var keyword = cxt.keyword, data = cxt.data, schemaCode = cxt.schemaCode, it = cxt.it;
        var op = keyword === "maxLength" ? $jkIFZ.operators.GT : $jkIFZ.operators.LT;
        var len = it.opts.unicode === false ? $jkIFZ._($3f82106983d4bc38$var$_templateObject2(), data) : $jkIFZ._($3f82106983d4bc38$var$_templateObject3(), (0, $eF2Jh.useFunc)(cxt.gen, $5vyIp.default), data);
        cxt.fail$data($jkIFZ._($3f82106983d4bc38$var$_templateObject4(), len, op, schemaCode));
    }
};
module.exports.default = $3f82106983d4bc38$var$def;

});
parcelRequire.register("5vyIp", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
// https://mathiasbynens.be/notes/javascript-encoding
// https://github.com/bestiejs/punycode.js - punycode.ucs2.decode
function $402ac6c1b548ce95$var$ucs2length(str) {
    var len = str.length;
    var length = 0;
    var pos = 0;
    var value;
    while(pos < len){
        length++;
        value = str.charCodeAt(pos++);
        if (value >= 0xd800 && value <= 0xdbff && pos < len) {
            // high surrogate, and there is a next character
            value = str.charCodeAt(pos);
            if ((value & 0xfc00) === 0xdc00) pos++; // low surrogate
        }
    }
    return length;
}
module.exports.default = $402ac6c1b548ce95$var$ucs2length;
$402ac6c1b548ce95$var$ucs2length.code = 'require("ajv/dist/runtime/ucs2length").default';

});


parcelRequire.register("05cZp", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $00fa8b35a85588c8$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        'must match pattern "',
        '"'
    ]);
    $00fa8b35a85588c8$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $00fa8b35a85588c8$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "{pattern: ",
        "}"
    ]);
    $00fa8b35a85588c8$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $00fa8b35a85588c8$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "(new RegExp(",
        ", ",
        "))"
    ]);
    $00fa8b35a85588c8$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $00fa8b35a85588c8$var$_templateObject3() {
    var data = (0, $iXJoB.default)([
        "!",
        ".test(",
        ")"
    ]);
    $00fa8b35a85588c8$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $2olnp = parcelRequire("2olnp");

var $jkIFZ = parcelRequire("jkIFZ");
var $00fa8b35a85588c8$var$error = {
    message: function(param) {
        var schemaCode = param.schemaCode;
        return $jkIFZ.str($00fa8b35a85588c8$var$_templateObject(), schemaCode);
    },
    params: function(param) {
        var schemaCode = param.schemaCode;
        return $jkIFZ._($00fa8b35a85588c8$var$_templateObject1(), schemaCode);
    }
};
var $00fa8b35a85588c8$var$def = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: true,
    error: $00fa8b35a85588c8$var$error,
    code: function(cxt) {
        var data = cxt.data, $data = cxt.$data, schema = cxt.schema, schemaCode = cxt.schemaCode, it = cxt.it;
        // TODO regexp should be wrapped in try/catchs
        var u = it.opts.unicodeRegExp ? "u" : "";
        var regExp = $data ? $jkIFZ._($00fa8b35a85588c8$var$_templateObject2(), schemaCode, u) : (0, $2olnp.usePattern)(cxt, schema);
        cxt.fail$data($jkIFZ._($00fa8b35a85588c8$var$_templateObject3(), regExp, data));
    }
};
module.exports.default = $00fa8b35a85588c8$var$def;

});

parcelRequire.register("iqynw", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $d6a5528a2c78b686$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "must NOT have ",
        " than ",
        " properties"
    ]);
    $d6a5528a2c78b686$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $d6a5528a2c78b686$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "{limit: ",
        "}"
    ]);
    $d6a5528a2c78b686$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $d6a5528a2c78b686$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "Object.keys(",
        ").length ",
        " ",
        ""
    ]);
    $d6a5528a2c78b686$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jkIFZ = parcelRequire("jkIFZ");
var $d6a5528a2c78b686$var$error = {
    message: function(param) {
        var keyword = param.keyword, schemaCode = param.schemaCode;
        var comp = keyword === "maxProperties" ? "more" : "fewer";
        return $jkIFZ.str($d6a5528a2c78b686$var$_templateObject(), comp, schemaCode);
    },
    params: function(param) {
        var schemaCode = param.schemaCode;
        return $jkIFZ._($d6a5528a2c78b686$var$_templateObject1(), schemaCode);
    }
};
var $d6a5528a2c78b686$var$def = {
    keyword: [
        "maxProperties",
        "minProperties"
    ],
    type: "object",
    schemaType: "number",
    $data: true,
    error: $d6a5528a2c78b686$var$error,
    code: function(cxt) {
        var keyword = cxt.keyword, data = cxt.data, schemaCode = cxt.schemaCode;
        var op = keyword === "maxProperties" ? $jkIFZ.operators.GT : $jkIFZ.operators.LT;
        cxt.fail$data($jkIFZ._($d6a5528a2c78b686$var$_templateObject2(), data, op, schemaCode));
    }
};
module.exports.default = $d6a5528a2c78b686$var$def;

});

parcelRequire.register("96SYv", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $6a1f517842167315$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "must have required property '",
        "'"
    ]);
    $6a1f517842167315$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $6a1f517842167315$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "{missingProperty: ",
        "}"
    ]);
    $6a1f517842167315$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $2olnp = parcelRequire("2olnp");

var $jkIFZ = parcelRequire("jkIFZ");

var $eF2Jh = parcelRequire("eF2Jh");
var $6a1f517842167315$var$error = {
    message: function(param) {
        var missingProperty = param.params.missingProperty;
        return $jkIFZ.str($6a1f517842167315$var$_templateObject(), missingProperty);
    },
    params: function(param) {
        var missingProperty = param.params.missingProperty;
        return $jkIFZ._($6a1f517842167315$var$_templateObject1(), missingProperty);
    }
};
var $6a1f517842167315$var$def = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: true,
    error: $6a1f517842167315$var$error,
    code: function(cxt) {
        var allErrorsMode = function allErrorsMode() {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            if (useLoop || $data) cxt.block$data($jkIFZ.nil, loopAllRequired);
            else try {
                for(var _iterator = schema[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var prop = _step.value;
                    (0, $2olnp.checkReportMissingProp)(cxt, prop);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        };
        var exitOnErrorMode = function exitOnErrorMode() {
            var missing = gen.let("missing");
            if (useLoop || $data) {
                var valid = gen.let("valid", true);
                cxt.block$data(valid, function() {
                    return loopUntilMissing(missing, valid);
                });
                cxt.ok(valid);
            } else {
                gen.if((0, $2olnp.checkMissingProp)(cxt, schema, missing));
                (0, $2olnp.reportMissingProp)(cxt, missing);
                gen.else();
            }
        };
        var loopAllRequired = function loopAllRequired() {
            gen.forOf("prop", schemaCode, function(prop) {
                cxt.setParams({
                    missingProperty: prop
                });
                gen.if((0, $2olnp.noPropertyInData)(gen, data, prop, opts.ownProperties), function() {
                    return cxt.error();
                });
            });
        };
        var loopUntilMissing = function loopUntilMissing(missing, valid) {
            cxt.setParams({
                missingProperty: missing
            });
            gen.forOf(missing, schemaCode, function() {
                gen.assign(valid, (0, $2olnp.propertyInData)(gen, data, missing, opts.ownProperties));
                gen.if((0, $jkIFZ.not)(valid), function() {
                    cxt.error();
                    gen.break();
                });
            }, $jkIFZ.nil);
        };
        var gen = cxt.gen, schema = cxt.schema, schemaCode = cxt.schemaCode, data = cxt.data, $data = cxt.$data, it = cxt.it;
        var opts = it.opts;
        if (!$data && schema.length === 0) return;
        var useLoop = schema.length >= opts.loopRequired;
        if (it.allErrors) allErrorsMode();
        else exitOnErrorMode();
        if (opts.strictRequired) {
            var props = cxt.parentSchema.properties;
            var definedProperties = cxt.it.definedProperties;
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = schema[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var requiredKey = _step1.value;
                    if ((props === null || props === void 0 ? void 0 : props[requiredKey]) === undefined && !definedProperties.has(requiredKey)) {
                        var schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
                        var msg = 'required property "'.concat(requiredKey, '" is not defined at "').concat(schemaPath, '" (strictRequired)');
                        (0, $eF2Jh.checkStrictMode)(it, msg, it.opts.strictRequired);
                    }
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                        _iterator1.return();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
        }
    }
};
module.exports.default = $6a1f517842167315$var$def;

});

parcelRequire.register("3j4cI", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $268668500d8b14a1$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "must NOT have ",
        " than ",
        " items"
    ]);
    $268668500d8b14a1$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $268668500d8b14a1$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "{limit: ",
        "}"
    ]);
    $268668500d8b14a1$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $268668500d8b14a1$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "",
        ".length ",
        " ",
        ""
    ]);
    $268668500d8b14a1$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jkIFZ = parcelRequire("jkIFZ");
var $268668500d8b14a1$var$error = {
    message: function(param) {
        var keyword = param.keyword, schemaCode = param.schemaCode;
        var comp = keyword === "maxItems" ? "more" : "fewer";
        return $jkIFZ.str($268668500d8b14a1$var$_templateObject(), comp, schemaCode);
    },
    params: function(param) {
        var schemaCode = param.schemaCode;
        return $jkIFZ._($268668500d8b14a1$var$_templateObject1(), schemaCode);
    }
};
var $268668500d8b14a1$var$def = {
    keyword: [
        "maxItems",
        "minItems"
    ],
    type: "array",
    schemaType: "number",
    $data: true,
    error: $268668500d8b14a1$var$error,
    code: function(cxt) {
        var keyword = cxt.keyword, data = cxt.data, schemaCode = cxt.schemaCode;
        var op = keyword === "maxItems" ? $jkIFZ.operators.GT : $jkIFZ.operators.LT;
        cxt.fail$data($jkIFZ._($268668500d8b14a1$var$_templateObject2(), data, op, schemaCode));
    }
};
module.exports.default = $268668500d8b14a1$var$def;

});

parcelRequire.register("kWV9o", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $f4058e5141b71f00$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "must NOT have duplicate items (items ## ",
        " and ",
        " are identical)"
    ]);
    $f4058e5141b71f00$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $f4058e5141b71f00$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "{i: ",
        ", j: ",
        "}"
    ]);
    $f4058e5141b71f00$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $f4058e5141b71f00$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "",
        ".length"
    ]);
    $f4058e5141b71f00$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $f4058e5141b71f00$var$_templateObject3() {
    var data = (0, $iXJoB.default)([
        "",
        " > 1"
    ]);
    $f4058e5141b71f00$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function $f4058e5141b71f00$var$_templateObject4() {
    var data = (0, $iXJoB.default)([
        "{}"
    ]);
    $f4058e5141b71f00$var$_templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
function $f4058e5141b71f00$var$_templateObject5() {
    var data = (0, $iXJoB.default)([
        ";",
        "--;"
    ]);
    $f4058e5141b71f00$var$_templateObject5 = function _templateObject5() {
        return data;
    };
    return data;
}
function $f4058e5141b71f00$var$_templateObject6() {
    var data = (0, $iXJoB.default)([
        "",
        "[",
        "]"
    ]);
    $f4058e5141b71f00$var$_templateObject6 = function _templateObject6() {
        return data;
    };
    return data;
}
function $f4058e5141b71f00$var$_templateObject7() {
    var data = (0, $iXJoB.default)([
        "continue"
    ]);
    $f4058e5141b71f00$var$_templateObject7 = function _templateObject7() {
        return data;
    };
    return data;
}
function $f4058e5141b71f00$var$_templateObject8() {
    var data = (0, $iXJoB.default)([
        "typeof ",
        ' == "string"'
    ]);
    $f4058e5141b71f00$var$_templateObject8 = function _templateObject8() {
        return data;
    };
    return data;
}
function $f4058e5141b71f00$var$_templateObject9() {
    var data = (0, $iXJoB.default)([
        "",
        ' += "_"'
    ]);
    $f4058e5141b71f00$var$_templateObject9 = function _templateObject9() {
        return data;
    };
    return data;
}
function $f4058e5141b71f00$var$_templateObject10() {
    var data = (0, $iXJoB.default)([
        "typeof ",
        "[",
        '] == "number"'
    ]);
    $f4058e5141b71f00$var$_templateObject10 = function _templateObject10() {
        return data;
    };
    return data;
}
function $f4058e5141b71f00$var$_templateObject11() {
    var data = (0, $iXJoB.default)([
        "",
        "[",
        "]"
    ]);
    $f4058e5141b71f00$var$_templateObject11 = function _templateObject11() {
        return data;
    };
    return data;
}
function $f4058e5141b71f00$var$_templateObject12() {
    var data = (0, $iXJoB.default)([
        "",
        "[",
        "] = ",
        ""
    ]);
    $f4058e5141b71f00$var$_templateObject12 = function _templateObject12() {
        return data;
    };
    return data;
}
function $f4058e5141b71f00$var$_templateObject13() {
    var data = (0, $iXJoB.default)([
        ";",
        "--;"
    ]);
    $f4058e5141b71f00$var$_templateObject13 = function _templateObject13() {
        return data;
    };
    return data;
}
function $f4058e5141b71f00$var$_templateObject14() {
    var data = (0, $iXJoB.default)([
        "",
        " = ",
        "; ",
        "--;"
    ]);
    $f4058e5141b71f00$var$_templateObject14 = function _templateObject14() {
        return data;
    };
    return data;
}
function $f4058e5141b71f00$var$_templateObject15() {
    var data = (0, $iXJoB.default)([
        "",
        "(",
        "[",
        "], ",
        "[",
        "])"
    ]);
    $f4058e5141b71f00$var$_templateObject15 = function _templateObject15() {
        return data;
    };
    return data;
}
function $f4058e5141b71f00$var$_templateObject16() {
    var data = (0, $iXJoB.default)([
        "",
        " === false"
    ]);
    $f4058e5141b71f00$var$_templateObject16 = function _templateObject16() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $6PO8h = parcelRequire("6PO8h");

var $jkIFZ = parcelRequire("jkIFZ");

var $eF2Jh = parcelRequire("eF2Jh");

var $7ZB35 = parcelRequire("7ZB35");
var $f4058e5141b71f00$var$error = {
    message: function(param) {
        var _params = param.params, i = _params.i, j = _params.j;
        return $jkIFZ.str($f4058e5141b71f00$var$_templateObject(), j, i);
    },
    params: function(param) {
        var _params = param.params, i = _params.i, j = _params.j;
        return $jkIFZ._($f4058e5141b71f00$var$_templateObject1(), i, j);
    }
};
var $f4058e5141b71f00$var$def = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: true,
    error: $f4058e5141b71f00$var$error,
    code: function(cxt) {
        var validateUniqueItems = function validateUniqueItems() {
            var i = gen.let("i", $jkIFZ._($f4058e5141b71f00$var$_templateObject2(), data));
            var j = gen.let("j");
            cxt.setParams({
                i: i,
                j: j
            });
            gen.assign(valid, true);
            gen.if($jkIFZ._($f4058e5141b71f00$var$_templateObject3(), i), function() {
                return (canOptimize() ? loopN : loopN2)(i, j);
            });
        };
        var canOptimize = function canOptimize() {
            return itemTypes.length > 0 && !itemTypes.some(function(t) {
                return t === "object" || t === "array";
            });
        };
        var loopN = function loopN(i, j) {
            var item = gen.name("item");
            var wrongType = (0, $6PO8h.checkDataTypes)(itemTypes, item, it.opts.strictNumbers, $6PO8h.DataType.Wrong);
            var indices = gen.const("indices", $jkIFZ._($f4058e5141b71f00$var$_templateObject4()));
            gen.for($jkIFZ._($f4058e5141b71f00$var$_templateObject5(), i), function() {
                gen.let(item, $jkIFZ._($f4058e5141b71f00$var$_templateObject6(), data, i));
                gen.if(wrongType, $jkIFZ._($f4058e5141b71f00$var$_templateObject7()));
                if (itemTypes.length > 1) gen.if($jkIFZ._($f4058e5141b71f00$var$_templateObject8(), item), $jkIFZ._($f4058e5141b71f00$var$_templateObject9(), item));
                gen.if($jkIFZ._($f4058e5141b71f00$var$_templateObject10(), indices, item), function() {
                    gen.assign(j, $jkIFZ._($f4058e5141b71f00$var$_templateObject11(), indices, item));
                    cxt.error();
                    gen.assign(valid, false).break();
                }).code($jkIFZ._($f4058e5141b71f00$var$_templateObject12(), indices, item, i));
            });
        };
        var loopN2 = function loopN2(i, j) {
            var eql = (0, $eF2Jh.useFunc)(gen, $7ZB35.default);
            var outer = gen.name("outer");
            gen.label(outer).for($jkIFZ._($f4058e5141b71f00$var$_templateObject13(), i), function() {
                return gen.for($jkIFZ._($f4058e5141b71f00$var$_templateObject14(), j, i, j), function() {
                    return gen.if($jkIFZ._($f4058e5141b71f00$var$_templateObject15(), eql, data, i, data, j), function() {
                        cxt.error();
                        gen.assign(valid, false).break(outer);
                    });
                });
            });
        };
        var gen = cxt.gen, data = cxt.data, $data = cxt.$data, schema = cxt.schema, parentSchema = cxt.parentSchema, schemaCode = cxt.schemaCode, it = cxt.it;
        if (!$data && !schema) return;
        var valid = gen.let("valid");
        var itemTypes = parentSchema.items ? (0, $6PO8h.getSchemaTypes)(parentSchema.items) : [];
        cxt.block$data(valid, validateUniqueItems, $jkIFZ._($f4058e5141b71f00$var$_templateObject16(), schemaCode));
        cxt.ok(valid);
    }
};
module.exports.default = $f4058e5141b71f00$var$def;

});
parcelRequire.register("7ZB35", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $iLoeH = parcelRequire("iLoeH");
$iLoeH.code = 'require("ajv/dist/runtime/equal").default';
module.exports.default = $iLoeH;

});


parcelRequire.register("dHM6X", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $9fa49c699a7f26d1$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "{allowedValue: ",
        "}"
    ]);
    $9fa49c699a7f26d1$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $9fa49c699a7f26d1$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "!",
        "(",
        ", ",
        ")"
    ]);
    $9fa49c699a7f26d1$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $9fa49c699a7f26d1$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "",
        " !== ",
        ""
    ]);
    $9fa49c699a7f26d1$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jkIFZ = parcelRequire("jkIFZ");

var $eF2Jh = parcelRequire("eF2Jh");

var $7ZB35 = parcelRequire("7ZB35");
var $9fa49c699a7f26d1$var$error = {
    message: "must be equal to constant",
    params: function(param) {
        var schemaCode = param.schemaCode;
        return $jkIFZ._($9fa49c699a7f26d1$var$_templateObject(), schemaCode);
    }
};
var $9fa49c699a7f26d1$var$def = {
    keyword: "const",
    $data: true,
    error: $9fa49c699a7f26d1$var$error,
    code: function(cxt) {
        var gen = cxt.gen, data = cxt.data, $data = cxt.$data, schemaCode = cxt.schemaCode, schema = cxt.schema;
        if ($data || schema && typeof schema == "object") cxt.fail$data($jkIFZ._($9fa49c699a7f26d1$var$_templateObject1(), (0, $eF2Jh.useFunc)(gen, $7ZB35.default), data, schemaCode));
        else cxt.fail($jkIFZ._($9fa49c699a7f26d1$var$_templateObject2(), schema, data));
    }
};
module.exports.default = $9fa49c699a7f26d1$var$def;

});

parcelRequire.register("l4ILa", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");

var $d67Ag = parcelRequire("d67Ag");
"use strict";
function $f57cb10bc6ae7f83$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "{allowedValues: ",
        "}"
    ]);
    $f57cb10bc6ae7f83$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $f57cb10bc6ae7f83$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "",
        "(",
        ", ",
        ")"
    ]);
    $f57cb10bc6ae7f83$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $f57cb10bc6ae7f83$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "",
        "(",
        ", ",
        "[",
        "])"
    ]);
    $f57cb10bc6ae7f83$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $f57cb10bc6ae7f83$var$_templateObject3() {
    var data = (0, $iXJoB.default)([
        "",
        " === ",
        ""
    ]);
    $f57cb10bc6ae7f83$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jkIFZ = parcelRequire("jkIFZ");

var $eF2Jh = parcelRequire("eF2Jh");

var $7ZB35 = parcelRequire("7ZB35");
var $f57cb10bc6ae7f83$var$error = {
    message: "must be equal to one of the allowed values",
    params: function(param) {
        var schemaCode = param.schemaCode;
        return $jkIFZ._($f57cb10bc6ae7f83$var$_templateObject(), schemaCode);
    }
};
var $f57cb10bc6ae7f83$var$def = {
    keyword: "enum",
    schemaType: "array",
    $data: true,
    error: $f57cb10bc6ae7f83$var$error,
    code: function(cxt) {
        var loopEnum = function loopEnum() {
            gen.assign(valid, false);
            gen.forOf("v", schemaCode, function(v) {
                return gen.if($jkIFZ._($f57cb10bc6ae7f83$var$_templateObject1(), getEql(), data, v), function() {
                    return gen.assign(valid, true).break();
                });
            });
        };
        var equalCode = function equalCode(vSchema, i) {
            var sch = schema[i];
            return typeof sch === "object" && sch !== null ? $jkIFZ._($f57cb10bc6ae7f83$var$_templateObject2(), getEql(), data, vSchema, i) : $jkIFZ._($f57cb10bc6ae7f83$var$_templateObject3(), data, sch);
        };
        var gen = cxt.gen, data = cxt.data, $data = cxt.$data, schema = cxt.schema, schemaCode = cxt.schemaCode, it = cxt.it;
        if (!$data && schema.length === 0) throw new Error("enum must have non-empty array");
        var useLoop = schema.length >= it.opts.loopEnum;
        var eql;
        var getEql = function() {
            return eql !== null && eql !== void 0 ? eql : eql = (0, $eF2Jh.useFunc)(gen, $7ZB35.default);
        };
        var valid;
        if (useLoop || $data) {
            valid = gen.let("valid");
            cxt.block$data(valid, loopEnum);
        } else {
            /* istanbul ignore if */ if (!Array.isArray(schema)) throw new Error("ajv implementation error");
            var vSchema1 = gen.const("vSchema", schemaCode);
            valid = (0, $jkIFZ.or).apply(this, (0, $d67Ag.default)(schema.map(function(_x, i) {
                return equalCode(vSchema1, i);
            })));
        }
        cxt.pass(valid);
    }
};
module.exports.default = $f57cb10bc6ae7f83$var$def;

});


parcelRequire.register("9mihB", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $5brlC = parcelRequire("5brlC");

var $k24OD = parcelRequire("k24OD");

var $ihbvj = parcelRequire("ihbvj");

var $6QPWW = parcelRequire("6QPWW");

var $54onc = parcelRequire("54onc");

var $8NzDY = parcelRequire("8NzDY");

var $3G6dL = parcelRequire("3G6dL");

var $mbe83 = parcelRequire("mbe83");

var $7D6LE = parcelRequire("7D6LE");

var $89idn = parcelRequire("89idn");

var $dxx0f = parcelRequire("dxx0f");

var $98R2r = parcelRequire("98R2r");

var $4Vka8 = parcelRequire("4Vka8");

var $2M3Ni = parcelRequire("2M3Ni");

var $fNeNU = parcelRequire("fNeNU");

var $j7jn0 = parcelRequire("j7jn0");
function $6d0459c2b6bc2150$var$getApplicator() {
    var draft2020 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    var applicator = [
        // any
        $dxx0f.default,
        $98R2r.default,
        $4Vka8.default,
        $2M3Ni.default,
        $fNeNU.default,
        $j7jn0.default,
        // object
        $3G6dL.default,
        $mbe83.default,
        $8NzDY.default,
        $7D6LE.default,
        $89idn.default, 
    ];
    // array
    if (draft2020) applicator.push($k24OD.default, $6QPWW.default);
    else applicator.push($5brlC.default, $ihbvj.default);
    applicator.push($54onc.default);
    return applicator;
}
module.exports.default = $6d0459c2b6bc2150$var$getApplicator;

});
parcelRequire.register("5brlC", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $3c63317e6ef39f5d$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "must NOT have more than ",
        " items"
    ]);
    $3c63317e6ef39f5d$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $3c63317e6ef39f5d$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "{limit: ",
        "}"
    ]);
    $3c63317e6ef39f5d$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $3c63317e6ef39f5d$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "",
        ".length"
    ]);
    $3c63317e6ef39f5d$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $3c63317e6ef39f5d$var$_templateObject3() {
    var data = (0, $iXJoB.default)([
        "",
        " <= ",
        ""
    ]);
    $3c63317e6ef39f5d$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function $3c63317e6ef39f5d$var$_templateObject4() {
    var data = (0, $iXJoB.default)([
        "",
        " <= ",
        ""
    ]);
    $3c63317e6ef39f5d$var$_templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.validateAdditionalItems = void 0;

var $jkIFZ = parcelRequire("jkIFZ");

var $eF2Jh = parcelRequire("eF2Jh");
var $3c63317e6ef39f5d$var$error = {
    message: function(param) {
        var len = param.params.len;
        return $jkIFZ.str($3c63317e6ef39f5d$var$_templateObject(), len);
    },
    params: function(param) {
        var len = param.params.len;
        return $jkIFZ._($3c63317e6ef39f5d$var$_templateObject1(), len);
    }
};
var $3c63317e6ef39f5d$var$def = {
    keyword: "additionalItems",
    type: "array",
    schemaType: [
        "boolean",
        "object"
    ],
    before: "uniqueItems",
    error: $3c63317e6ef39f5d$var$error,
    code: function(cxt) {
        var parentSchema = cxt.parentSchema, it = cxt.it;
        var items = parentSchema.items;
        if (!Array.isArray(items)) {
            (0, $eF2Jh.checkStrictMode)(it, '"additionalItems" is ignored when "items" is not an array of schemas');
            return;
        }
        $3c63317e6ef39f5d$var$validateAdditionalItems(cxt, items);
    }
};
function $3c63317e6ef39f5d$var$validateAdditionalItems(cxt, items) {
    var validateItems = function validateItems(valid) {
        gen.forRange("i", items.length, len, function(i) {
            cxt.subschema({
                keyword: keyword,
                dataProp: i,
                dataPropType: $eF2Jh.Type.Num
            }, valid);
            if (!it.allErrors) gen.if((0, $jkIFZ.not)(valid), function() {
                return gen.break();
            });
        });
    };
    var gen = cxt.gen, schema = cxt.schema, data = cxt.data, keyword = cxt.keyword, it = cxt.it;
    it.items = true;
    var len = gen.const("len", $jkIFZ._($3c63317e6ef39f5d$var$_templateObject2(), data));
    if (schema === false) {
        cxt.setParams({
            len: items.length
        });
        cxt.pass($jkIFZ._($3c63317e6ef39f5d$var$_templateObject3(), len, items.length));
    } else if (typeof schema == "object" && !(0, $eF2Jh.alwaysValidSchema)(it, schema)) {
        var valid1 = gen.var("valid", $jkIFZ._($3c63317e6ef39f5d$var$_templateObject4(), len, items.length)); // TODO var
        gen.if((0, $jkIFZ.not)(valid1), function() {
            return validateItems(valid1);
        });
        cxt.ok(valid1);
    }
}
module.exports.validateAdditionalItems = $3c63317e6ef39f5d$var$validateAdditionalItems;
module.exports.default = $3c63317e6ef39f5d$var$def;

});

parcelRequire.register("k24OD", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $ihbvj = parcelRequire("ihbvj");
var $e957bad726213188$var$def = {
    keyword: "prefixItems",
    type: "array",
    schemaType: [
        "array"
    ],
    before: "uniqueItems",
    code: function(cxt) {
        return (0, $ihbvj.validateTuple)(cxt, "items");
    }
};
module.exports.default = $e957bad726213188$var$def;

});
parcelRequire.register("ihbvj", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $d4e2bcfd370fc22d$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "",
        ".length"
    ]);
    $d4e2bcfd370fc22d$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $d4e2bcfd370fc22d$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "",
        " > ",
        ""
    ]);
    $d4e2bcfd370fc22d$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.validateTuple = void 0;

var $jkIFZ = parcelRequire("jkIFZ");

var $eF2Jh = parcelRequire("eF2Jh");

var $2olnp = parcelRequire("2olnp");
var $d4e2bcfd370fc22d$var$def = {
    keyword: "items",
    type: "array",
    schemaType: [
        "object",
        "array",
        "boolean"
    ],
    before: "uniqueItems",
    code: function(cxt) {
        var schema = cxt.schema, it = cxt.it;
        if (Array.isArray(schema)) return $d4e2bcfd370fc22d$var$validateTuple(cxt, "additionalItems", schema);
        it.items = true;
        if ((0, $eF2Jh.alwaysValidSchema)(it, schema)) return;
        cxt.ok((0, $2olnp.validateArray)(cxt));
    }
};
function $d4e2bcfd370fc22d$var$validateTuple(cxt, extraItems) {
    var schArr = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : cxt.schema;
    var checkStrictTuple = function checkStrictTuple(sch) {
        var opts = it.opts, errSchemaPath = it.errSchemaPath;
        var l = schArr.length;
        var fullTuple = l === sch.minItems && (l === sch.maxItems || sch[extraItems] === false);
        if (opts.strictTuples && !fullTuple) {
            var msg = '"'.concat(keyword, '" is ').concat(l, "-tuple, but minItems or maxItems/").concat(extraItems, ' are not specified or different at path "').concat(errSchemaPath, '"');
            (0, $eF2Jh.checkStrictMode)(it, msg, opts.strictTuples);
        }
    };
    var gen = cxt.gen, parentSchema = cxt.parentSchema, data = cxt.data, keyword = cxt.keyword, it = cxt.it;
    checkStrictTuple(parentSchema);
    if (it.opts.unevaluated && schArr.length && it.items !== true) it.items = $eF2Jh.mergeEvaluated.items(gen, schArr.length, it.items);
    var valid = gen.name("valid");
    var len = gen.const("len", $jkIFZ._($d4e2bcfd370fc22d$var$_templateObject(), data));
    schArr.forEach(function(sch, i) {
        if ((0, $eF2Jh.alwaysValidSchema)(it, sch)) return;
        gen.if($jkIFZ._($d4e2bcfd370fc22d$var$_templateObject1(), len, i), function() {
            return cxt.subschema({
                keyword: keyword,
                schemaProp: i,
                dataProp: i
            }, valid);
        });
        cxt.ok(valid);
    });
}
module.exports.validateTuple = $d4e2bcfd370fc22d$var$validateTuple;
module.exports.default = $d4e2bcfd370fc22d$var$def;

});


parcelRequire.register("6QPWW", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $4fcfe584eeb478a4$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "must NOT have more than ",
        " items"
    ]);
    $4fcfe584eeb478a4$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $4fcfe584eeb478a4$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "{limit: ",
        "}"
    ]);
    $4fcfe584eeb478a4$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jkIFZ = parcelRequire("jkIFZ");

var $eF2Jh = parcelRequire("eF2Jh");

var $2olnp = parcelRequire("2olnp");

var $5brlC = parcelRequire("5brlC");
var $4fcfe584eeb478a4$var$error = {
    message: function(param) {
        var len = param.params.len;
        return $jkIFZ.str($4fcfe584eeb478a4$var$_templateObject(), len);
    },
    params: function(param) {
        var len = param.params.len;
        return $jkIFZ._($4fcfe584eeb478a4$var$_templateObject1(), len);
    }
};
var $4fcfe584eeb478a4$var$def = {
    keyword: "items",
    type: "array",
    schemaType: [
        "object",
        "boolean"
    ],
    before: "uniqueItems",
    error: $4fcfe584eeb478a4$var$error,
    code: function(cxt) {
        var schema = cxt.schema, parentSchema = cxt.parentSchema, it = cxt.it;
        var prefixItems = parentSchema.prefixItems;
        it.items = true;
        if ((0, $eF2Jh.alwaysValidSchema)(it, schema)) return;
        if (prefixItems) (0, $5brlC.validateAdditionalItems)(cxt, prefixItems);
        else cxt.ok((0, $2olnp.validateArray)(cxt));
    }
};
module.exports.default = $4fcfe584eeb478a4$var$def;

});

parcelRequire.register("54onc", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $3b103b75a074a3f1$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "must contain at least ",
        " valid item(s)"
    ]);
    $3b103b75a074a3f1$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $3b103b75a074a3f1$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "must contain at least ",
        " and no more than ",
        " valid item(s)"
    ]);
    $3b103b75a074a3f1$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $3b103b75a074a3f1$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "{minContains: ",
        "}"
    ]);
    $3b103b75a074a3f1$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $3b103b75a074a3f1$var$_templateObject3() {
    var data = (0, $iXJoB.default)([
        "{minContains: ",
        ", maxContains: ",
        "}"
    ]);
    $3b103b75a074a3f1$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function $3b103b75a074a3f1$var$_templateObject4() {
    var data = (0, $iXJoB.default)([
        "",
        "++"
    ]);
    $3b103b75a074a3f1$var$_templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
function $3b103b75a074a3f1$var$_templateObject5() {
    var data = (0, $iXJoB.default)([
        "",
        " >= ",
        ""
    ]);
    $3b103b75a074a3f1$var$_templateObject5 = function _templateObject5() {
        return data;
    };
    return data;
}
function $3b103b75a074a3f1$var$_templateObject6() {
    var data = (0, $iXJoB.default)([
        "",
        " > ",
        ""
    ]);
    $3b103b75a074a3f1$var$_templateObject6 = function _templateObject6() {
        return data;
    };
    return data;
}
function $3b103b75a074a3f1$var$_templateObject7() {
    var data = (0, $iXJoB.default)([
        "",
        " >= ",
        ""
    ]);
    $3b103b75a074a3f1$var$_templateObject7 = function _templateObject7() {
        return data;
    };
    return data;
}
function $3b103b75a074a3f1$var$_templateObject8() {
    var data = (0, $iXJoB.default)([
        "",
        ".length"
    ]);
    $3b103b75a074a3f1$var$_templateObject8 = function _templateObject8() {
        return data;
    };
    return data;
}
function $3b103b75a074a3f1$var$_templateObject9() {
    var data = (0, $iXJoB.default)([
        "",
        " >= ",
        ""
    ]);
    $3b103b75a074a3f1$var$_templateObject9 = function _templateObject9() {
        return data;
    };
    return data;
}
function $3b103b75a074a3f1$var$_templateObject10() {
    var data = (0, $iXJoB.default)([
        "",
        " && ",
        " <= ",
        ""
    ]);
    $3b103b75a074a3f1$var$_templateObject10 = function _templateObject10() {
        return data;
    };
    return data;
}
function $3b103b75a074a3f1$var$_templateObject11() {
    var data = (0, $iXJoB.default)([
        "",
        ".length > 0"
    ]);
    $3b103b75a074a3f1$var$_templateObject11 = function _templateObject11() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jkIFZ = parcelRequire("jkIFZ");

var $eF2Jh = parcelRequire("eF2Jh");
var $3b103b75a074a3f1$var$error = {
    message: function(param) {
        var _params = param.params, min = _params.min, max = _params.max;
        return max === undefined ? $jkIFZ.str($3b103b75a074a3f1$var$_templateObject(), min) : $jkIFZ.str($3b103b75a074a3f1$var$_templateObject1(), min, max);
    },
    params: function(param) {
        var _params = param.params, min = _params.min, max = _params.max;
        return max === undefined ? $jkIFZ._($3b103b75a074a3f1$var$_templateObject2(), min) : $jkIFZ._($3b103b75a074a3f1$var$_templateObject3(), min, max);
    }
};
var $3b103b75a074a3f1$var$def = {
    keyword: "contains",
    type: "array",
    schemaType: [
        "object",
        "boolean"
    ],
    before: "uniqueItems",
    trackErrors: true,
    error: $3b103b75a074a3f1$var$error,
    code: function(cxt) {
        var validateItemsWithCount = function validateItemsWithCount() {
            var schValid = gen.name("_valid");
            var count = gen.let("count", 0);
            validateItems(schValid, function() {
                return gen.if(schValid, function() {
                    return checkLimits(count);
                });
            });
        };
        var validateItems = function validateItems(_valid, block) {
            gen.forRange("i", 0, len, function(i) {
                cxt.subschema({
                    keyword: "contains",
                    dataProp: i,
                    dataPropType: $eF2Jh.Type.Num,
                    compositeRule: true
                }, _valid);
                block();
            });
        };
        var checkLimits = function checkLimits(count) {
            gen.code($jkIFZ._($3b103b75a074a3f1$var$_templateObject4(), count));
            if (max === undefined) gen.if($jkIFZ._($3b103b75a074a3f1$var$_templateObject5(), count, min), function() {
                return gen.assign(valid, true).break();
            });
            else {
                gen.if($jkIFZ._($3b103b75a074a3f1$var$_templateObject6(), count, max), function() {
                    return gen.assign(valid, false).break();
                });
                if (min === 1) gen.assign(valid, true);
                else gen.if($jkIFZ._($3b103b75a074a3f1$var$_templateObject7(), count, min), function() {
                    return gen.assign(valid, true);
                });
            }
        };
        var gen = cxt.gen, schema = cxt.schema, parentSchema = cxt.parentSchema, data = cxt.data, it = cxt.it;
        var min;
        var max;
        var minContains = parentSchema.minContains, maxContains = parentSchema.maxContains;
        if (it.opts.next) {
            min = minContains === undefined ? 1 : minContains;
            max = maxContains;
        } else min = 1;
        var len = gen.const("len", $jkIFZ._($3b103b75a074a3f1$var$_templateObject8(), data));
        cxt.setParams({
            min: min,
            max: max
        });
        if (max === undefined && min === 0) {
            (0, $eF2Jh.checkStrictMode)(it, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
            return;
        }
        if (max !== undefined && min > max) {
            (0, $eF2Jh.checkStrictMode)(it, '"minContains" > "maxContains" is always invalid');
            cxt.fail();
            return;
        }
        if ((0, $eF2Jh.alwaysValidSchema)(it, schema)) {
            var cond = $jkIFZ._($3b103b75a074a3f1$var$_templateObject9(), len, min);
            if (max !== undefined) cond = $jkIFZ._($3b103b75a074a3f1$var$_templateObject10(), cond, len, max);
            cxt.pass(cond);
            return;
        }
        it.items = true;
        var valid = gen.name("valid");
        if (max === undefined && min === 1) validateItems(valid, function() {
            return gen.if(valid, function() {
                return gen.break();
            });
        });
        else if (min === 0) {
            gen.let(valid, true);
            if (max !== undefined) gen.if($jkIFZ._($3b103b75a074a3f1$var$_templateObject11(), data), validateItemsWithCount);
        } else {
            gen.let(valid, false);
            validateItemsWithCount();
        }
        cxt.result(valid, function() {
            return cxt.reset();
        });
    }
};
module.exports.default = $3b103b75a074a3f1$var$def;

});

parcelRequire.register("8NzDY", function(module, exports) {

var $9NXTR = parcelRequire("9NXTR");

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $667e8c6fad3a755e$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "must have ",
        " ",
        " when property ",
        " is present"
    ]);
    $667e8c6fad3a755e$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $667e8c6fad3a755e$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "{property: ",
        ",\n    missingProperty: ",
        ",\n    depsCount: ",
        ",\n    deps: ",
        "}"
    ]);
    $667e8c6fad3a755e$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $667e8c6fad3a755e$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "",
        " && (",
        ")"
    ]);
    $667e8c6fad3a755e$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.validateSchemaDeps = module.exports.validatePropertyDeps = module.exports.error = void 0;

var $jkIFZ = parcelRequire("jkIFZ");

var $eF2Jh = parcelRequire("eF2Jh");

var $2olnp = parcelRequire("2olnp");
module.exports.error = {
    message: function(param) {
        var _params = param.params, property = _params.property, depsCount = _params.depsCount, deps = _params.deps;
        var property_ies = depsCount === 1 ? "property" : "properties";
        return $jkIFZ.str($667e8c6fad3a755e$var$_templateObject(), property_ies, deps, property);
    },
    params: function(param) {
        var _params = param.params, property = _params.property, depsCount = _params.depsCount, deps = _params.deps, missingProperty = _params.missingProperty;
        return $jkIFZ._($667e8c6fad3a755e$var$_templateObject1(), property, missingProperty, depsCount, deps);
    }
};
var $667e8c6fad3a755e$var$def = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: module.exports.error,
    code: function(cxt) {
        var ref = (0, $9NXTR.default)($667e8c6fad3a755e$var$splitDependencies(cxt), 2), propDeps = ref[0], schDeps = ref[1];
        $667e8c6fad3a755e$var$validatePropertyDeps(cxt, propDeps);
        $667e8c6fad3a755e$var$validateSchemaDeps(cxt, schDeps);
    }
};
function $667e8c6fad3a755e$var$splitDependencies(param) {
    var schema = param.schema;
    var propertyDeps = {};
    var schemaDeps = {};
    for(var key in schema){
        if (key === "__proto__") continue;
        var deps = Array.isArray(schema[key]) ? propertyDeps : schemaDeps;
        deps[key] = schema[key];
    }
    return [
        propertyDeps,
        schemaDeps
    ];
}
function $667e8c6fad3a755e$var$validatePropertyDeps(cxt) {
    var _loop = function(prop) {
        var deps = propertyDeps[prop];
        if (deps.length === 0) return "continue";
        var hasProperty = (0, $2olnp.propertyInData)(gen, data, prop, it.opts.ownProperties);
        cxt.setParams({
            property: prop,
            depsCount: deps.length,
            deps: deps.join(", ")
        });
        if (it.allErrors) gen.if(hasProperty, function() {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = deps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var depProp = _step.value;
                    (0, $2olnp.checkReportMissingProp)(cxt, depProp);
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        });
        else {
            gen.if($jkIFZ._($667e8c6fad3a755e$var$_templateObject2(), hasProperty, (0, $2olnp.checkMissingProp)(cxt, deps, missing)));
            (0, $2olnp.reportMissingProp)(cxt, missing);
            gen.else();
        }
    };
    var propertyDeps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : cxt.schema;
    var gen = cxt.gen, data = cxt.data, it = cxt.it;
    if (Object.keys(propertyDeps).length === 0) return;
    var missing = gen.let("missing");
    for(var prop1 in propertyDeps)_loop(prop1);
}
module.exports.validatePropertyDeps = $667e8c6fad3a755e$var$validatePropertyDeps;
function $667e8c6fad3a755e$var$validateSchemaDeps(cxt) {
    var _loop = function(prop) {
        if ((0, $eF2Jh.alwaysValidSchema)(it, schemaDeps[prop])) return "continue";
        gen.if((0, $2olnp.propertyInData)(gen, data, prop, it.opts.ownProperties), function() {
            var schCxt = cxt.subschema({
                keyword: keyword,
                schemaProp: prop
            }, valid);
            cxt.mergeValidEvaluated(schCxt, valid);
        }, function() {
            return gen.var(valid, true) // TODO var
            ;
        });
        cxt.ok(valid);
    };
    var schemaDeps = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : cxt.schema;
    var gen = cxt.gen, data = cxt.data, keyword = cxt.keyword, it = cxt.it;
    var valid = gen.name("valid");
    for(var prop2 in schemaDeps)_loop(prop2);
}
module.exports.validateSchemaDeps = $667e8c6fad3a755e$var$validateSchemaDeps;
module.exports.default = $667e8c6fad3a755e$var$def;

});

parcelRequire.register("3G6dL", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $2ada1eb7d4354118$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "{propertyName: ",
        "}"
    ]);
    $2ada1eb7d4354118$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jkIFZ = parcelRequire("jkIFZ");

var $eF2Jh = parcelRequire("eF2Jh");
var $2ada1eb7d4354118$var$error = {
    message: "property name must be valid",
    params: function(param) {
        var params = param.params;
        return $jkIFZ._($2ada1eb7d4354118$var$_templateObject(), params.propertyName);
    }
};
var $2ada1eb7d4354118$var$def = {
    keyword: "propertyNames",
    type: "object",
    schemaType: [
        "object",
        "boolean"
    ],
    error: $2ada1eb7d4354118$var$error,
    code: function(cxt) {
        var gen = cxt.gen, schema = cxt.schema, data = cxt.data, it = cxt.it;
        if ((0, $eF2Jh.alwaysValidSchema)(it, schema)) return;
        var valid = gen.name("valid");
        gen.forIn("key", data, function(key) {
            cxt.setParams({
                propertyName: key
            });
            cxt.subschema({
                keyword: "propertyNames",
                data: key,
                dataTypes: [
                    "string"
                ],
                propertyName: key,
                compositeRule: true
            }, valid);
            gen.if((0, $jkIFZ.not)(valid), function() {
                cxt.error(true);
                if (!it.allErrors) gen.break();
            });
        });
        cxt.ok(valid);
    }
};
module.exports.default = $2ada1eb7d4354118$var$def;

});

parcelRequire.register("mbe83", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");

var $d67Ag = parcelRequire("d67Ag");
"use strict";
function $042ac39d2addd439$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "{additionalProperty: ",
        "}"
    ]);
    $042ac39d2addd439$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $042ac39d2addd439$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "",
        " === ",
        ""
    ]);
    $042ac39d2addd439$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $042ac39d2addd439$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "",
        ".test(",
        ")"
    ]);
    $042ac39d2addd439$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $042ac39d2addd439$var$_templateObject3() {
    var data = (0, $iXJoB.default)([
        "delete ",
        "[",
        "]"
    ]);
    $042ac39d2addd439$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function $042ac39d2addd439$var$_templateObject4() {
    var data = (0, $iXJoB.default)([
        "",
        " === ",
        ""
    ]);
    $042ac39d2addd439$var$_templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $2olnp = parcelRequire("2olnp");

var $jkIFZ = parcelRequire("jkIFZ");

var $4QYyN = parcelRequire("4QYyN");

var $eF2Jh = parcelRequire("eF2Jh");
var $042ac39d2addd439$var$error = {
    message: "must NOT have additional properties",
    params: function(param) {
        var params = param.params;
        return $jkIFZ._($042ac39d2addd439$var$_templateObject(), params.additionalProperty);
    }
};
var $042ac39d2addd439$var$def = {
    keyword: "additionalProperties",
    type: [
        "object"
    ],
    schemaType: [
        "boolean",
        "object"
    ],
    allowUndefined: true,
    trackErrors: true,
    error: $042ac39d2addd439$var$error,
    code: function(cxt) {
        var checkAdditionalProperties = function checkAdditionalProperties() {
            gen.forIn("key", data, function(key) {
                if (!props.length && !patProps.length) additionalPropertyCode(key);
                else gen.if(isAdditional(key), function() {
                    return additionalPropertyCode(key);
                });
            });
        };
        var isAdditional = function isAdditional(key) {
            var definedProp;
            if (props.length > 8) {
                // TODO maybe an option instead of hard-coded 8?
                var propsSchema = (0, $eF2Jh.schemaRefOrVal)(it, parentSchema.properties, "properties");
                definedProp = (0, $2olnp.isOwnProperty)(gen, propsSchema, key);
            } else if (props.length) definedProp = (0, $jkIFZ.or).apply(this, (0, $d67Ag.default)(props.map(function(p) {
                return $jkIFZ._($042ac39d2addd439$var$_templateObject1(), key, p);
            })));
            else definedProp = $jkIFZ.nil;
            if (patProps.length) definedProp = (0, $jkIFZ.or).apply(this, [
                definedProp
            ].concat((0, $d67Ag.default)(patProps.map(function(p) {
                return $jkIFZ._($042ac39d2addd439$var$_templateObject2(), (0, $2olnp.usePattern)(cxt, p), key);
            }))));
            return (0, $jkIFZ.not)(definedProp);
        };
        var deleteAdditional = function deleteAdditional(key) {
            gen.code($jkIFZ._($042ac39d2addd439$var$_templateObject3(), data, key));
        };
        var additionalPropertyCode = function additionalPropertyCode(key) {
            if (opts.removeAdditional === "all" || opts.removeAdditional && schema === false) {
                deleteAdditional(key);
                return;
            }
            if (schema === false) {
                cxt.setParams({
                    additionalProperty: key
                });
                cxt.error();
                if (!allErrors) gen.break();
                return;
            }
            if (typeof schema == "object" && !(0, $eF2Jh.alwaysValidSchema)(it, schema)) {
                var valid = gen.name("valid");
                if (opts.removeAdditional === "failing") {
                    applyAdditionalSchema(key, valid, false);
                    gen.if((0, $jkIFZ.not)(valid), function() {
                        cxt.reset();
                        deleteAdditional(key);
                    });
                } else {
                    applyAdditionalSchema(key, valid);
                    if (!allErrors) gen.if((0, $jkIFZ.not)(valid), function() {
                        return gen.break();
                    });
                }
            }
        };
        var applyAdditionalSchema = function applyAdditionalSchema(key, valid, errors) {
            var subschema = {
                keyword: "additionalProperties",
                dataProp: key,
                dataPropType: $eF2Jh.Type.Str
            };
            if (errors === false) Object.assign(subschema, {
                compositeRule: true,
                createErrors: false,
                allErrors: false
            });
            cxt.subschema(subschema, valid);
        };
        var gen = cxt.gen, schema = cxt.schema, parentSchema = cxt.parentSchema, data = cxt.data, errsCount = cxt.errsCount, it = cxt.it;
        /* istanbul ignore if */ if (!errsCount) throw new Error("ajv implementation error");
        var allErrors = it.allErrors, opts = it.opts;
        it.props = true;
        if (opts.removeAdditional !== "all" && (0, $eF2Jh.alwaysValidSchema)(it, schema)) return;
        var props = (0, $2olnp.allSchemaProperties)(parentSchema.properties);
        var patProps = (0, $2olnp.allSchemaProperties)(parentSchema.patternProperties);
        checkAdditionalProperties();
        cxt.ok($jkIFZ._($042ac39d2addd439$var$_templateObject4(), errsCount, $4QYyN.default.errors));
    }
};
module.exports.default = $042ac39d2addd439$var$def;

});

parcelRequire.register("7D6LE", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $5KqkP = parcelRequire("5KqkP");

var $2olnp = parcelRequire("2olnp");

var $eF2Jh = parcelRequire("eF2Jh");

var $mbe83 = parcelRequire("mbe83");
var $58e16cd1f1d45ea5$var$def = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code: function(cxt) {
        var hasDefault = function hasDefault(prop) {
            return it.opts.useDefaults && !it.compositeRule && schema[prop].default !== undefined;
        };
        var applyPropertySchema = function applyPropertySchema(prop) {
            cxt.subschema({
                keyword: "properties",
                schemaProp: prop,
                dataProp: prop
            }, valid);
        };
        var gen = cxt.gen, schema = cxt.schema, parentSchema = cxt.parentSchema, data = cxt.data, it = cxt.it;
        if (it.opts.removeAdditional === "all" && parentSchema.additionalProperties === undefined) $mbe83.default.code(new $5KqkP.KeywordCxt(it, $mbe83.default, "additionalProperties"));
        var allProps = (0, $2olnp.allSchemaProperties)(schema);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = allProps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var prop2 = _step.value;
                it.definedProperties.add(prop2);
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        if (it.opts.unevaluated && allProps.length && it.props !== true) it.props = $eF2Jh.mergeEvaluated.props(gen, (0, $eF2Jh.toHash)(allProps), it.props);
        var properties = allProps.filter(function(p) {
            return !(0, $eF2Jh.alwaysValidSchema)(it, schema[p]);
        });
        if (properties.length === 0) return;
        var valid = gen.name("valid");
        var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
        try {
            for(var _iterator1 = properties[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                var prop1 = _step1.value;
                if (hasDefault(prop1)) applyPropertySchema(prop1);
                else {
                    gen.if((0, $2olnp.propertyInData)(gen, data, prop1, it.opts.ownProperties));
                    applyPropertySchema(prop1);
                    if (!it.allErrors) gen.else().var(valid, true);
                    gen.endIf();
                }
                cxt.it.definedProperties.add(prop1);
                cxt.ok(valid);
            }
        } catch (err1) {
            _didIteratorError1 = true;
            _iteratorError1 = err1;
        } finally{
            try {
                if (!_iteratorNormalCompletion1 && _iterator1.return != null) {
                    _iterator1.return();
                }
            } finally{
                if (_didIteratorError1) {
                    throw _iteratorError1;
                }
            }
        }
    }
};
module.exports.default = $58e16cd1f1d45ea5$var$def;

});

parcelRequire.register("89idn", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $5eed4b0e2147b402$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "",
        ".test(",
        ")"
    ]);
    $5eed4b0e2147b402$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $5eed4b0e2147b402$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "",
        "[",
        "]"
    ]);
    $5eed4b0e2147b402$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $2olnp = parcelRequire("2olnp");

var $jkIFZ = parcelRequire("jkIFZ");

var $eF2Jh = parcelRequire("eF2Jh");

var $eF2Jh = parcelRequire("eF2Jh");
var $5eed4b0e2147b402$var$def = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code: function(cxt) {
        var validatePatternProperties = function validatePatternProperties() {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = patterns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var pat = _step.value;
                    if (checkProperties) checkMatchingProperties(pat);
                    if (it.allErrors) validateProperties(pat);
                    else {
                        gen.var(valid, true); // TODO var
                        validateProperties(pat);
                        gen.if(valid);
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        };
        var checkMatchingProperties = function checkMatchingProperties(pat) {
            for(var prop in checkProperties)if (new RegExp(pat).test(prop)) (0, $eF2Jh.checkStrictMode)(it, "property ".concat(prop, " matches pattern ").concat(pat, " (use allowMatchingProperties)"));
        };
        var validateProperties = function validateProperties(pat) {
            gen.forIn("key", data, function(key) {
                gen.if($jkIFZ._($5eed4b0e2147b402$var$_templateObject(), (0, $2olnp.usePattern)(cxt, pat), key), function() {
                    var alwaysValid = alwaysValidPatterns.includes(pat);
                    if (!alwaysValid) cxt.subschema({
                        keyword: "patternProperties",
                        schemaProp: pat,
                        dataProp: key,
                        dataPropType: $eF2Jh.Type.Str
                    }, valid);
                    if (it.opts.unevaluated && props !== true) gen.assign($jkIFZ._($5eed4b0e2147b402$var$_templateObject1(), props, key), true);
                    else if (!alwaysValid && !it.allErrors) // can short-circuit if `unevaluatedProperties` is not supported (opts.next === false)
                    // or if all properties were evaluated (props === true)
                    gen.if((0, $jkIFZ.not)(valid), function() {
                        return gen.break();
                    });
                });
            });
        };
        var gen = cxt.gen, schema = cxt.schema, data = cxt.data, parentSchema = cxt.parentSchema, it = cxt.it;
        var opts = it.opts;
        var patterns = (0, $2olnp.allSchemaProperties)(schema);
        var alwaysValidPatterns = patterns.filter(function(p) {
            return (0, $eF2Jh.alwaysValidSchema)(it, schema[p]);
        });
        if (patterns.length === 0 || alwaysValidPatterns.length === patterns.length && (!it.opts.unevaluated || it.props === true)) return;
        var checkProperties = opts.strictSchema && !opts.allowMatchingProperties && parentSchema.properties;
        var valid = gen.name("valid");
        if (it.props !== true && !(it.props instanceof $jkIFZ.Name)) it.props = (0, $eF2Jh.evaluatedPropsToName)(gen, it.props);
        var props = it.props;
        validatePatternProperties();
    }
};
module.exports.default = $5eed4b0e2147b402$var$def;

});

parcelRequire.register("dxx0f", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $eF2Jh = parcelRequire("eF2Jh");
var $9db7f51e16053f28$var$def = {
    keyword: "not",
    schemaType: [
        "object",
        "boolean"
    ],
    trackErrors: true,
    code: function(cxt) {
        var gen = cxt.gen, schema = cxt.schema, it = cxt.it;
        if ((0, $eF2Jh.alwaysValidSchema)(it, schema)) {
            cxt.fail();
            return;
        }
        var valid = gen.name("valid");
        cxt.subschema({
            keyword: "not",
            compositeRule: true,
            createErrors: false,
            allErrors: false
        }, valid);
        cxt.failResult(valid, function() {
            return cxt.reset();
        }, function() {
            return cxt.error();
        });
    },
    error: {
        message: "must NOT be valid"
    }
};
module.exports.default = $9db7f51e16053f28$var$def;

});

parcelRequire.register("98R2r", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $2olnp = parcelRequire("2olnp");
var $6a7e00b4b625c441$var$def = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: true,
    code: $2olnp.validateUnion,
    error: {
        message: "must match a schema in anyOf"
    }
};
module.exports.default = $6a7e00b4b625c441$var$def;

});

parcelRequire.register("4Vka8", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $395c202670005825$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "{passingSchemas: ",
        "}"
    ]);
    $395c202670005825$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $395c202670005825$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "",
        " && ",
        ""
    ]);
    $395c202670005825$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $395c202670005825$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "[",
        ", ",
        "]"
    ]);
    $395c202670005825$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jkIFZ = parcelRequire("jkIFZ");

var $eF2Jh = parcelRequire("eF2Jh");
var $395c202670005825$var$error = {
    message: "must match exactly one schema in oneOf",
    params: function(param) {
        var params = param.params;
        return $jkIFZ._($395c202670005825$var$_templateObject(), params.passing);
    }
};
var $395c202670005825$var$def = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: true,
    error: $395c202670005825$var$error,
    code: function(cxt) {
        var validateOneOf = function validateOneOf() {
            schArr.forEach(function(sch, i) {
                var schCxt;
                if ((0, $eF2Jh.alwaysValidSchema)(it, sch)) gen.var(schValid, true);
                else schCxt = cxt.subschema({
                    keyword: "oneOf",
                    schemaProp: i,
                    compositeRule: true
                }, schValid);
                if (i > 0) gen.if($jkIFZ._($395c202670005825$var$_templateObject1(), schValid, valid)).assign(valid, false).assign(passing, $jkIFZ._($395c202670005825$var$_templateObject2(), passing, i)).else();
                gen.if(schValid, function() {
                    gen.assign(valid, true);
                    gen.assign(passing, i);
                    if (schCxt) cxt.mergeEvaluated(schCxt, $jkIFZ.Name);
                });
            });
        };
        var gen = cxt.gen, schema = cxt.schema, parentSchema = cxt.parentSchema, it = cxt.it;
        /* istanbul ignore if */ if (!Array.isArray(schema)) throw new Error("ajv implementation error");
        if (it.opts.discriminator && parentSchema.discriminator) return;
        var schArr = schema;
        var valid = gen.let("valid", false);
        var passing = gen.let("passing", null);
        var schValid = gen.name("_valid");
        cxt.setParams({
            passing: passing
        });
        // TODO possibly fail straight away (with warning or exception) if there are two empty always valid schemas
        gen.block(validateOneOf);
        cxt.result(valid, function() {
            return cxt.reset();
        }, function() {
            return cxt.error(true);
        });
    }
};
module.exports.default = $395c202670005825$var$def;

});

parcelRequire.register("2M3Ni", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $eF2Jh = parcelRequire("eF2Jh");
var $205301e92f03ccf1$var$def = {
    keyword: "allOf",
    schemaType: "array",
    code: function(cxt) {
        var gen = cxt.gen, schema = cxt.schema, it = cxt.it;
        /* istanbul ignore if */ if (!Array.isArray(schema)) throw new Error("ajv implementation error");
        var valid = gen.name("valid");
        schema.forEach(function(sch, i) {
            if ((0, $eF2Jh.alwaysValidSchema)(it, sch)) return;
            var schCxt = cxt.subschema({
                keyword: "allOf",
                schemaProp: i
            }, valid);
            cxt.ok(valid);
            cxt.mergeEvaluated(schCxt);
        });
    }
};
module.exports.default = $205301e92f03ccf1$var$def;

});

parcelRequire.register("fNeNU", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $b7f6ea5bae070822$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        'must match "',
        '" schema'
    ]);
    $b7f6ea5bae070822$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $b7f6ea5bae070822$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "{failingKeyword: ",
        "}"
    ]);
    $b7f6ea5bae070822$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $b7f6ea5bae070822$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "",
        ""
    ]);
    $b7f6ea5bae070822$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jkIFZ = parcelRequire("jkIFZ");

var $eF2Jh = parcelRequire("eF2Jh");
var $b7f6ea5bae070822$var$error = {
    message: function(param) {
        var params = param.params;
        return $jkIFZ.str($b7f6ea5bae070822$var$_templateObject(), params.ifClause);
    },
    params: function(param) {
        var params = param.params;
        return $jkIFZ._($b7f6ea5bae070822$var$_templateObject1(), params.ifClause);
    }
};
var $b7f6ea5bae070822$var$def = {
    keyword: "if",
    schemaType: [
        "object",
        "boolean"
    ],
    trackErrors: true,
    error: $b7f6ea5bae070822$var$error,
    code: function(cxt) {
        var validateIf = function validateIf() {
            var schCxt = cxt.subschema({
                keyword: "if",
                compositeRule: true,
                createErrors: false,
                allErrors: false
            }, schValid);
            cxt.mergeEvaluated(schCxt);
        };
        var validateClause = function validateClause(keyword, ifClause) {
            return function() {
                var schCxt = cxt.subschema({
                    keyword: keyword
                }, schValid);
                gen.assign(valid, schValid);
                cxt.mergeValidEvaluated(schCxt, valid);
                if (ifClause) gen.assign(ifClause, $jkIFZ._($b7f6ea5bae070822$var$_templateObject2(), keyword));
                else cxt.setParams({
                    ifClause: keyword
                });
            };
        };
        var gen = cxt.gen, parentSchema = cxt.parentSchema, it = cxt.it;
        if (parentSchema.then === undefined && parentSchema.else === undefined) (0, $eF2Jh.checkStrictMode)(it, '"if" without "then" and "else" is ignored');
        var hasThen = $b7f6ea5bae070822$var$hasSchema(it, "then");
        var hasElse = $b7f6ea5bae070822$var$hasSchema(it, "else");
        if (!hasThen && !hasElse) return;
        var valid = gen.let("valid", true);
        var schValid = gen.name("_valid");
        validateIf();
        cxt.reset();
        if (hasThen && hasElse) {
            var ifClause1 = gen.let("ifClause");
            cxt.setParams({
                ifClause: ifClause1
            });
            gen.if(schValid, validateClause("then", ifClause1), validateClause("else", ifClause1));
        } else if (hasThen) gen.if(schValid, validateClause("then"));
        else gen.if((0, $jkIFZ.not)(schValid), validateClause("else"));
        cxt.pass(valid, function() {
            return cxt.error(true);
        });
    }
};
function $b7f6ea5bae070822$var$hasSchema(it, keyword) {
    var schema = it.schema[keyword];
    return schema !== undefined && !(0, $eF2Jh.alwaysValidSchema)(it, schema);
}
module.exports.default = $b7f6ea5bae070822$var$def;

});

parcelRequire.register("j7jn0", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $eF2Jh = parcelRequire("eF2Jh");
var $deadb23d3b8f7641$var$def = {
    keyword: [
        "then",
        "else"
    ],
    schemaType: [
        "object",
        "boolean"
    ],
    code: function(param) {
        var keyword = param.keyword, parentSchema = param.parentSchema, it = param.it;
        if (parentSchema.if === undefined) (0, $eF2Jh.checkStrictMode)(it, '"'.concat(keyword, '" without "if" is ignored'));
    }
};
module.exports.default = $deadb23d3b8f7641$var$def;

});


parcelRequire.register("a6TaU", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $dIU7y = parcelRequire("dIU7y");
var $75c54384daf14825$var$format = [
    $dIU7y.default
];
module.exports.default = $75c54384daf14825$var$format;

});
parcelRequire.register("dIU7y", function(module, exports) {

var $9NXTR = parcelRequire("9NXTR");

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $9fdaeaddef3f38e6$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        'must match format "',
        '"'
    ]);
    $9fdaeaddef3f38e6$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $9fdaeaddef3f38e6$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "{format: ",
        "}"
    ]);
    $9fdaeaddef3f38e6$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $9fdaeaddef3f38e6$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "",
        "[",
        "]"
    ]);
    $9fdaeaddef3f38e6$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $9fdaeaddef3f38e6$var$_templateObject3() {
    var data = (0, $iXJoB.default)([
        "typeof ",
        ' == "object" && !(',
        " instanceof RegExp)"
    ]);
    $9fdaeaddef3f38e6$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
function $9fdaeaddef3f38e6$var$_templateObject4() {
    var data = (0, $iXJoB.default)([
        "",
        '.type || "string"'
    ]);
    $9fdaeaddef3f38e6$var$_templateObject4 = function _templateObject4() {
        return data;
    };
    return data;
}
function $9fdaeaddef3f38e6$var$_templateObject5() {
    var data = (0, $iXJoB.default)([
        "",
        ".validate"
    ]);
    $9fdaeaddef3f38e6$var$_templateObject5 = function _templateObject5() {
        return data;
    };
    return data;
}
function $9fdaeaddef3f38e6$var$_templateObject6() {
    var data = (0, $iXJoB.default)([
        '"string"'
    ]);
    $9fdaeaddef3f38e6$var$_templateObject6 = function _templateObject6() {
        return data;
    };
    return data;
}
function $9fdaeaddef3f38e6$var$_templateObject7() {
    var data = (0, $iXJoB.default)([
        "",
        " && !",
        ""
    ]);
    $9fdaeaddef3f38e6$var$_templateObject7 = function _templateObject7() {
        return data;
    };
    return data;
}
function $9fdaeaddef3f38e6$var$_templateObject8() {
    var data = (0, $iXJoB.default)([
        "(",
        ".async ? await ",
        "(",
        ") : ",
        "(",
        "))"
    ]);
    $9fdaeaddef3f38e6$var$_templateObject8 = function _templateObject8() {
        return data;
    };
    return data;
}
function $9fdaeaddef3f38e6$var$_templateObject9() {
    var data = (0, $iXJoB.default)([
        "",
        "(",
        ")"
    ]);
    $9fdaeaddef3f38e6$var$_templateObject9 = function _templateObject9() {
        return data;
    };
    return data;
}
function $9fdaeaddef3f38e6$var$_templateObject10() {
    var data = (0, $iXJoB.default)([
        "(typeof ",
        ' == "function" ? ',
        " : ",
        ".test(",
        "))"
    ]);
    $9fdaeaddef3f38e6$var$_templateObject10 = function _templateObject10() {
        return data;
    };
    return data;
}
function $9fdaeaddef3f38e6$var$_templateObject11() {
    var data = (0, $iXJoB.default)([
        "",
        " && ",
        " !== true && ",
        " === ",
        " && !",
        ""
    ]);
    $9fdaeaddef3f38e6$var$_templateObject11 = function _templateObject11() {
        return data;
    };
    return data;
}
function $9fdaeaddef3f38e6$var$_templateObject12() {
    var data = (0, $iXJoB.default)([
        "",
        "",
        ""
    ]);
    $9fdaeaddef3f38e6$var$_templateObject12 = function _templateObject12() {
        return data;
    };
    return data;
}
function $9fdaeaddef3f38e6$var$_templateObject13() {
    var data = (0, $iXJoB.default)([
        "",
        ".validate"
    ]);
    $9fdaeaddef3f38e6$var$_templateObject13 = function _templateObject13() {
        return data;
    };
    return data;
}
function $9fdaeaddef3f38e6$var$_templateObject14() {
    var data = (0, $iXJoB.default)([
        "await ",
        "(",
        ")"
    ]);
    $9fdaeaddef3f38e6$var$_templateObject14 = function _templateObject14() {
        return data;
    };
    return data;
}
function $9fdaeaddef3f38e6$var$_templateObject15() {
    var data = (0, $iXJoB.default)([
        "",
        "(",
        ")"
    ]);
    $9fdaeaddef3f38e6$var$_templateObject15 = function _templateObject15() {
        return data;
    };
    return data;
}
function $9fdaeaddef3f38e6$var$_templateObject16() {
    var data = (0, $iXJoB.default)([
        "",
        ".test(",
        ")"
    ]);
    $9fdaeaddef3f38e6$var$_templateObject16 = function _templateObject16() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jkIFZ = parcelRequire("jkIFZ");
var $9fdaeaddef3f38e6$var$error = {
    message: function(param) {
        var schemaCode = param.schemaCode;
        return $jkIFZ.str($9fdaeaddef3f38e6$var$_templateObject(), schemaCode);
    },
    params: function(param) {
        var schemaCode = param.schemaCode;
        return $jkIFZ._($9fdaeaddef3f38e6$var$_templateObject1(), schemaCode);
    }
};
var $9fdaeaddef3f38e6$var$def = {
    keyword: "format",
    type: [
        "number",
        "string"
    ],
    schemaType: "string",
    $data: true,
    error: $9fdaeaddef3f38e6$var$error,
    code: function(cxt, ruleType) {
        var validate$DataFormat = function validate$DataFormat() {
            var fmts = gen.scopeValue("formats", {
                ref: self.formats,
                code: opts.code.formats
            });
            var fDef = gen.const("fDef", $jkIFZ._($9fdaeaddef3f38e6$var$_templateObject2(), fmts, schemaCode));
            var fType = gen.let("fType");
            var format = gen.let("format");
            // TODO simplify
            gen.if($jkIFZ._($9fdaeaddef3f38e6$var$_templateObject3(), fDef, fDef), function() {
                return gen.assign(fType, $jkIFZ._($9fdaeaddef3f38e6$var$_templateObject4(), fDef)).assign(format, $jkIFZ._($9fdaeaddef3f38e6$var$_templateObject5(), fDef));
            }, function() {
                return gen.assign(fType, $jkIFZ._($9fdaeaddef3f38e6$var$_templateObject6())).assign(format, fDef);
            });
            cxt.fail$data((0, $jkIFZ.or)(unknownFmt(), invalidFmt()));
            function unknownFmt() {
                if (opts.strictSchema === false) return $jkIFZ.nil;
                return $jkIFZ._($9fdaeaddef3f38e6$var$_templateObject7(), schemaCode, format);
            }
            function invalidFmt() {
                var callFormat = schemaEnv.$async ? $jkIFZ._($9fdaeaddef3f38e6$var$_templateObject8(), fDef, format, data, format, data) : $jkIFZ._($9fdaeaddef3f38e6$var$_templateObject9(), format, data);
                var validData = $jkIFZ._($9fdaeaddef3f38e6$var$_templateObject10(), format, callFormat, format, data);
                return $jkIFZ._($9fdaeaddef3f38e6$var$_templateObject11(), format, format, fType, ruleType, validData);
            }
        };
        var validateFormat = function validateFormat() {
            var formatDef = self.formats[schema];
            if (!formatDef) {
                unknownFormat();
                return;
            }
            if (formatDef === true) return;
            var ref = (0, $9NXTR.default)(getFormat(formatDef), 3), fmtType = ref[0], format = ref[1], fmtRef = ref[2];
            if (fmtType === ruleType) cxt.pass(validCondition());
            function unknownFormat() {
                if (opts.strictSchema === false) {
                    self.logger.warn(unknownMsg());
                    return;
                }
                throw new Error(unknownMsg());
                function unknownMsg() {
                    return 'unknown format "'.concat(schema, '" ignored in schema at path "').concat(errSchemaPath, '"');
                }
            }
            function getFormat(fmtDef) {
                var code = fmtDef instanceof RegExp ? (0, $jkIFZ.regexpCode)(fmtDef) : opts.code.formats ? $jkIFZ._($9fdaeaddef3f38e6$var$_templateObject12(), opts.code.formats, (0, $jkIFZ.getProperty)(schema)) : undefined;
                var fmt = gen.scopeValue("formats", {
                    key: schema,
                    ref: fmtDef,
                    code: code
                });
                if (typeof fmtDef == "object" && !(fmtDef instanceof RegExp)) return [
                    fmtDef.type || "string",
                    fmtDef.validate,
                    $jkIFZ._($9fdaeaddef3f38e6$var$_templateObject13(), fmt)
                ];
                return [
                    "string",
                    fmtDef,
                    fmt
                ];
            }
            function validCondition() {
                if (typeof formatDef == "object" && !(formatDef instanceof RegExp) && formatDef.async) {
                    if (!schemaEnv.$async) throw new Error("async format in sync schema");
                    return $jkIFZ._($9fdaeaddef3f38e6$var$_templateObject14(), fmtRef, data);
                }
                return typeof format == "function" ? $jkIFZ._($9fdaeaddef3f38e6$var$_templateObject15(), fmtRef, data) : $jkIFZ._($9fdaeaddef3f38e6$var$_templateObject16(), fmtRef, data);
            }
        };
        var gen = cxt.gen, data = cxt.data, $data = cxt.$data, schema = cxt.schema, schemaCode = cxt.schemaCode, it = cxt.it;
        var opts = it.opts, errSchemaPath = it.errSchemaPath, schemaEnv = it.schemaEnv, self = it.self;
        if (!opts.validateFormats) return;
        if ($data) validate$DataFormat();
        else validateFormat();
    }
};
module.exports.default = $9fdaeaddef3f38e6$var$def;

});


parcelRequire.register("4zmj2", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.contentVocabulary = module.exports.metadataVocabulary = void 0;
module.exports.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples", 
];
module.exports.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema", 
];

});


parcelRequire.register("cArUi", function(module, exports) {

var $iXJoB = parcelRequire("iXJoB");
"use strict";
function $929e7e924b1ca2c8$var$_templateObject() {
    var data = (0, $iXJoB.default)([
        "{error: ",
        ", tag: ",
        ", tagValue: ",
        "}"
    ]);
    $929e7e924b1ca2c8$var$_templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function $929e7e924b1ca2c8$var$_templateObject1() {
    var data = (0, $iXJoB.default)([
        "",
        " === ",
        ""
    ]);
    $929e7e924b1ca2c8$var$_templateObject1 = function _templateObject1() {
        return data;
    };
    return data;
}
function $929e7e924b1ca2c8$var$_templateObject2() {
    var data = (0, $iXJoB.default)([
        "",
        "",
        ""
    ]);
    $929e7e924b1ca2c8$var$_templateObject2 = function _templateObject2() {
        return data;
    };
    return data;
}
function $929e7e924b1ca2c8$var$_templateObject3() {
    var data = (0, $iXJoB.default)([
        "typeof ",
        ' == "string"'
    ]);
    $929e7e924b1ca2c8$var$_templateObject3 = function _templateObject3() {
        return data;
    };
    return data;
}
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jkIFZ = parcelRequire("jkIFZ");

var $4pQ2o = parcelRequire("4pQ2o");

var $9JBGp = parcelRequire("9JBGp");

var $eF2Jh = parcelRequire("eF2Jh");
var $929e7e924b1ca2c8$var$error = {
    message: function(param) {
        var _params = param.params, discrError = _params.discrError, tagName = _params.tagName;
        return discrError === $4pQ2o.DiscrError.Tag ? 'tag "'.concat(tagName, '" must be string') : 'value of tag "'.concat(tagName, '" must be in oneOf');
    },
    params: function(param) {
        var _params = param.params, discrError = _params.discrError, tag = _params.tag, tagName = _params.tagName;
        return $jkIFZ._($929e7e924b1ca2c8$var$_templateObject(), discrError, tagName, tag);
    }
};
var $929e7e924b1ca2c8$var$def = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: $929e7e924b1ca2c8$var$error,
    code: function(cxt) {
        var validateMapping = function validateMapping() {
            var mapping = getMapping();
            gen.if(false);
            for(var tagValue in mapping){
                gen.elseIf($jkIFZ._($929e7e924b1ca2c8$var$_templateObject1(), tag, tagValue));
                gen.assign(valid, applyTagSchema(mapping[tagValue]));
            }
            gen.else();
            cxt.error(false, {
                discrError: $4pQ2o.DiscrError.Mapping,
                tag: tag,
                tagName: tagName
            });
            gen.endIf();
        };
        var applyTagSchema = function applyTagSchema(schemaProp) {
            var _valid = gen.name("valid");
            var schCxt = cxt.subschema({
                keyword: "oneOf",
                schemaProp: schemaProp
            }, _valid);
            cxt.mergeEvaluated(schCxt, $jkIFZ.Name);
            return _valid;
        };
        var getMapping = function getMapping() {
            var _a;
            var oneOfMapping = {};
            var topRequired = hasRequired(parentSchema);
            var tagRequired = true;
            for(var i1 = 0; i1 < oneOf.length; i1++){
                var sch = oneOf[i1];
                if ((sch === null || sch === void 0 ? void 0 : sch.$ref) && !(0, $eF2Jh.schemaHasRulesButRef)(sch, it.self.RULES)) {
                    sch = $9JBGp.resolveRef.call(it.self, it.schemaEnv.root, it.baseId, sch === null || sch === void 0 ? void 0 : sch.$ref);
                    if (sch instanceof $9JBGp.SchemaEnv) sch = sch.schema;
                }
                var propSch = (_a = sch === null || sch === void 0 ? void 0 : sch.properties) === null || _a === void 0 ? void 0 : _a[tagName];
                if (typeof propSch != "object") throw new Error('discriminator: oneOf subschemas (or referenced schemas) must have "properties/'.concat(tagName, '"'));
                tagRequired = tagRequired && (topRequired || hasRequired(sch));
                addMappings(propSch, i1);
            }
            if (!tagRequired) throw new Error('discriminator: "'.concat(tagName, '" must be required'));
            return oneOfMapping;
            function hasRequired(param) {
                var required = param.required;
                return Array.isArray(required) && required.includes(tagName);
            }
            function addMappings(sch, i) {
                if (sch.const) {
                    addMapping(sch.const, i);
                } else if (sch.enum) {
                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                    try {
                        for(var _iterator = sch.enum[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                            var tagValue = _step.value;
                            addMapping(tagValue, i);
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally{
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return != null) {
                                _iterator.return();
                            }
                        } finally{
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                } else {
                    throw new Error('discriminator: "properties/'.concat(tagName, '" must have "const" or "enum"'));
                }
            }
            function addMapping(tagValue, i) {
                if (typeof tagValue != "string" || tagValue in oneOfMapping) {
                    throw new Error('discriminator: "'.concat(tagName, '" values must be unique strings'));
                }
                oneOfMapping[tagValue] = i;
            }
        };
        var gen = cxt.gen, data = cxt.data, schema = cxt.schema, parentSchema = cxt.parentSchema, it = cxt.it;
        var oneOf = parentSchema.oneOf;
        if (!it.opts.discriminator) throw new Error("discriminator: requires discriminator option");
        var tagName = schema.propertyName;
        if (typeof tagName != "string") throw new Error("discriminator: requires propertyName");
        if (schema.mapping) throw new Error("discriminator: mapping is not supported");
        if (!oneOf) throw new Error("discriminator: requires oneOf keyword");
        var valid = gen.let("valid", false);
        var tag = gen.const("tag", $jkIFZ._($929e7e924b1ca2c8$var$_templateObject2(), data, (0, $jkIFZ.getProperty)(tagName)));
        gen.if($jkIFZ._($929e7e924b1ca2c8$var$_templateObject3(), tag), function() {
            return validateMapping();
        }, function() {
            return cxt.error(false, {
                discrError: $4pQ2o.DiscrError.Tag,
                tag: tag,
                tagName: tagName
            });
        });
        cxt.ok(valid);
    }
};
module.exports.default = $929e7e924b1ca2c8$var$def;

});
parcelRequire.register("4pQ2o", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.DiscrError = void 0;
var $3371dcc8daae3454$var$DiscrError;
(function(DiscrError1) {
    DiscrError1["Tag"] = "tag";
    DiscrError1["Mapping"] = "mapping";
})($3371dcc8daae3454$var$DiscrError = module.exports.DiscrError || (module.exports.DiscrError = {}));

});


parcelRequire.register("jz1jr", function(module, exports) {
module.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"http://json-schema.org/draft-07/schema#","title":"Core schema meta-schema","definitions":{"schemaArray":{"type":"array","minItems":1,"items":{"$ref":"#"}},"nonNegativeInteger":{"type":"integer","minimum":0},"nonNegativeIntegerDefault0":{"allOf":[{"$ref":"#/definitions/nonNegativeInteger"},{"default":0}]},"simpleTypes":{"enum":["array","boolean","integer","null","number","object","string"]},"stringArray":{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]}},"type":["object","boolean"],"properties":{"$id":{"type":"string","format":"uri-reference"},"$schema":{"type":"string","format":"uri"},"$ref":{"type":"string","format":"uri-reference"},"$comment":{"type":"string"},"title":{"type":"string"},"description":{"type":"string"},"default":true,"readOnly":{"type":"boolean","default":false},"examples":{"type":"array","items":true},"multipleOf":{"type":"number","exclusiveMinimum":0},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"number"},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"number"},"maxLength":{"$ref":"#/definitions/nonNegativeInteger"},"minLength":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"pattern":{"type":"string","format":"regex"},"additionalItems":{"$ref":"#"},"items":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/schemaArray"}],"default":true},"maxItems":{"$ref":"#/definitions/nonNegativeInteger"},"minItems":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"uniqueItems":{"type":"boolean","default":false},"contains":{"$ref":"#"},"maxProperties":{"$ref":"#/definitions/nonNegativeInteger"},"minProperties":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"required":{"$ref":"#/definitions/stringArray"},"additionalProperties":{"$ref":"#"},"definitions":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#"},"propertyNames":{"format":"regex"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/stringArray"}]}},"propertyNames":{"$ref":"#"},"const":true,"enum":{"type":"array","items":true,"minItems":1,"uniqueItems":true},"type":{"anyOf":[{"$ref":"#/definitions/simpleTypes"},{"type":"array","items":{"$ref":"#/definitions/simpleTypes"},"minItems":1,"uniqueItems":true}]},"format":{"type":"string"},"contentMediaType":{"type":"string"},"contentEncoding":{"type":"string"},"if":{"$ref":"#"},"then":{"$ref":"#"},"else":{"$ref":"#"},"allOf":{"$ref":"#/definitions/schemaArray"},"anyOf":{"$ref":"#/definitions/schemaArray"},"oneOf":{"$ref":"#/definitions/schemaArray"},"not":{"$ref":"#"}},"default":true}');

});



var $apDhX = parcelRequire("apDhX");

var $dzBOF = parcelRequire("dzBOF");

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $3jaBu = parcelRequire("3jaBu");

var $5sttm = parcelRequire("5sttm");

var $2qJq4 = parcelRequire("2qJq4");

var $8oBD6 = parcelRequire("8oBD6");
var $6470aab53332fba1$exports = {};
"use strict";
var $f95e5e83ee1f9cbc$exports = {};
var $7d47e8332e0d7261$exports = {};
var $b99e87fedb7f9467$exports = {};
var $d45d55876709cf15$exports = {};
var $bee90e79ed13c4bc$exports = {};
$bee90e79ed13c4bc$exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};


$d45d55876709cf15$exports = !$bee90e79ed13c4bc$exports(function() {
    // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});


var $b99e87fedb7f9467$var$FunctionPrototype = Function.prototype;
var $b99e87fedb7f9467$var$bind = $b99e87fedb7f9467$var$FunctionPrototype.bind;
var $b99e87fedb7f9467$var$call = $b99e87fedb7f9467$var$FunctionPrototype.call;
var $b99e87fedb7f9467$var$uncurryThis = $d45d55876709cf15$exports && $b99e87fedb7f9467$var$bind.bind($b99e87fedb7f9467$var$call, $b99e87fedb7f9467$var$call);
$b99e87fedb7f9467$exports = $d45d55876709cf15$exports ? function(fn) {
    return fn && $b99e87fedb7f9467$var$uncurryThis(fn);
} : function(fn) {
    return fn && function() {
        return $b99e87fedb7f9467$var$call.apply(fn, arguments);
    };
};



var $ea0df83cd252cea9$exports = {};

var $ea0df83cd252cea9$var$toString = $b99e87fedb7f9467$exports({}.toString);
var $ea0df83cd252cea9$var$stringSlice = $b99e87fedb7f9467$exports("".slice);
$ea0df83cd252cea9$exports = function(it) {
    return $ea0df83cd252cea9$var$stringSlice($ea0df83cd252cea9$var$toString(it), 8, -1);
};


var $7d47e8332e0d7261$var$$Object = Object;
var $7d47e8332e0d7261$var$split = $b99e87fedb7f9467$exports("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
$7d47e8332e0d7261$exports = $bee90e79ed13c4bc$exports(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$7d47e8332e0d7261$var$$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return $ea0df83cd252cea9$exports(it) == "String" ? $7d47e8332e0d7261$var$split(it, "") : $7d47e8332e0d7261$var$$Object(it);
} : $7d47e8332e0d7261$var$$Object;


var $dcd70ef3cb4f66fe$exports = {};
var $dcd70ef3cb4f66fe$var$$TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
$dcd70ef3cb4f66fe$exports = function(it) {
    if (it == undefined) throw $dcd70ef3cb4f66fe$var$$TypeError("Can't call method on " + it);
    return it;
};


$f95e5e83ee1f9cbc$exports = function(it) {
    return $7d47e8332e0d7261$exports($dcd70ef3cb4f66fe$exports(it));
};


var $01b780c95fd9eae1$exports = {};
var $a7ee708de5d3202b$exports = {};
var $e075570e1515f83a$exports = {};
var $e075570e1515f83a$var$check = function check(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
$e075570e1515f83a$exports = // eslint-disable-next-line es-x/no-global-this -- safe
$e075570e1515f83a$var$check(typeof globalThis == "object" && globalThis) || $e075570e1515f83a$var$check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
$e075570e1515f83a$var$check(typeof self == "object" && self) || $e075570e1515f83a$var$check(typeof $parcel$global == "object" && $parcel$global) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();


var $7ac1b4a485d18ef3$exports = {};
var $fb757cc41bbad0c2$exports = {};
$fb757cc41bbad0c2$exports = false;


var $4cb4541e22e7b02d$exports = {};

var $2e83fdcbbb0a2b6f$exports = {};

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $2e83fdcbbb0a2b6f$var$defineProperty = Object.defineProperty;
$2e83fdcbbb0a2b6f$exports = function(key, value) {
    try {
        $2e83fdcbbb0a2b6f$var$defineProperty($e075570e1515f83a$exports, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        $e075570e1515f83a$exports[key] = value;
    }
    return value;
};


var $4cb4541e22e7b02d$var$SHARED = "__core-js_shared__";
var $4cb4541e22e7b02d$var$store = $e075570e1515f83a$exports[$4cb4541e22e7b02d$var$SHARED] || $2e83fdcbbb0a2b6f$exports($4cb4541e22e7b02d$var$SHARED, {});
$4cb4541e22e7b02d$exports = $4cb4541e22e7b02d$var$store;


($7ac1b4a485d18ef3$exports = function(key, value) {
    return $4cb4541e22e7b02d$exports[key] || ($4cb4541e22e7b02d$exports[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: "3.23.2",
    mode: $fb757cc41bbad0c2$exports ? "pure" : "global",
    copyright: "\xa9 2014-2022 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.23.2/LICENSE",
    source: "https://github.com/zloirock/core-js"
});


var $61bec295a3ed8110$exports = {};

var $fd7bf9d63ba236e8$exports = {};

var $fd7bf9d63ba236e8$var$$Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
$fd7bf9d63ba236e8$exports = function(argument) {
    return $fd7bf9d63ba236e8$var$$Object($dcd70ef3cb4f66fe$exports(argument));
};


var $61bec295a3ed8110$var$hasOwnProperty = $b99e87fedb7f9467$exports({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
$61bec295a3ed8110$exports = Object.hasOwn || function hasOwn(it, key) {
    return $61bec295a3ed8110$var$hasOwnProperty($fd7bf9d63ba236e8$exports(it), key);
};


var $2489866eef11ef0b$exports = {};

var $2489866eef11ef0b$var$id = 0;
var $2489866eef11ef0b$var$postfix = Math.random();
var $2489866eef11ef0b$var$toString = $b99e87fedb7f9467$exports(1.0.toString);
$2489866eef11ef0b$exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + $2489866eef11ef0b$var$toString(++$2489866eef11ef0b$var$id + $2489866eef11ef0b$var$postfix, 36);
};


var $483656ca40b0f857$exports = {};
var $e2cf3e7cf188c9cf$exports = {};

var $e03d2f0a543fae83$exports = {};
var $415c070cc5ea0697$exports = {};

var $7df38799cd0a811e$exports = {};
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
$7df38799cd0a811e$exports = function(argument) {
    return typeof argument == "function";
};


var $415c070cc5ea0697$var$aFunction = function aFunction(argument) {
    return $7df38799cd0a811e$exports(argument) ? argument : undefined;
};
$415c070cc5ea0697$exports = function(namespace, method) {
    return arguments.length < 2 ? $415c070cc5ea0697$var$aFunction($e075570e1515f83a$exports[namespace]) : $e075570e1515f83a$exports[namespace] && $e075570e1515f83a$exports[namespace][method];
};


$e03d2f0a543fae83$exports = $415c070cc5ea0697$exports("navigator", "userAgent") || "";


var $e2cf3e7cf188c9cf$var$process = $e075570e1515f83a$exports.process;
var $e2cf3e7cf188c9cf$var$Deno = $e075570e1515f83a$exports.Deno;
var $e2cf3e7cf188c9cf$var$versions = $e2cf3e7cf188c9cf$var$process && $e2cf3e7cf188c9cf$var$process.versions || $e2cf3e7cf188c9cf$var$Deno && $e2cf3e7cf188c9cf$var$Deno.version;
var $e2cf3e7cf188c9cf$var$v8 = $e2cf3e7cf188c9cf$var$versions && $e2cf3e7cf188c9cf$var$versions.v8;
var $e2cf3e7cf188c9cf$var$match, $e2cf3e7cf188c9cf$var$version;
if ($e2cf3e7cf188c9cf$var$v8) {
    $e2cf3e7cf188c9cf$var$match = $e2cf3e7cf188c9cf$var$v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    $e2cf3e7cf188c9cf$var$version = $e2cf3e7cf188c9cf$var$match[0] > 0 && $e2cf3e7cf188c9cf$var$match[0] < 4 ? 1 : +($e2cf3e7cf188c9cf$var$match[0] + $e2cf3e7cf188c9cf$var$match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!$e2cf3e7cf188c9cf$var$version && $e03d2f0a543fae83$exports) {
    $e2cf3e7cf188c9cf$var$match = $e03d2f0a543fae83$exports.match(/Edge\/(\d+)/);
    if (!$e2cf3e7cf188c9cf$var$match || $e2cf3e7cf188c9cf$var$match[1] >= 74) {
        $e2cf3e7cf188c9cf$var$match = $e03d2f0a543fae83$exports.match(/Chrome\/(\d+)/);
        if ($e2cf3e7cf188c9cf$var$match) $e2cf3e7cf188c9cf$var$version = +$e2cf3e7cf188c9cf$var$match[1];
    }
}
$e2cf3e7cf188c9cf$exports = $e2cf3e7cf188c9cf$var$version;



// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
$483656ca40b0f857$exports = !!Object.getOwnPropertySymbols && !$bee90e79ed13c4bc$exports(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && $e2cf3e7cf188c9cf$exports && $e2cf3e7cf188c9cf$exports < 41;
});


var $9587866c6e24488f$exports = {};

var $9zKh9 = parcelRequire("9zKh9");

$9587866c6e24488f$exports = $483656ca40b0f857$exports && !Symbol.sham && (0, $9zKh9.default)(Symbol.iterator) == "symbol";


var $a7ee708de5d3202b$var$WellKnownSymbolsStore = $7ac1b4a485d18ef3$exports("wks");
var $a7ee708de5d3202b$var$Symbol = $e075570e1515f83a$exports.Symbol;
var $a7ee708de5d3202b$var$symbolFor = $a7ee708de5d3202b$var$Symbol && $a7ee708de5d3202b$var$Symbol["for"];
var $a7ee708de5d3202b$var$createWellKnownSymbol = $9587866c6e24488f$exports ? $a7ee708de5d3202b$var$Symbol : $a7ee708de5d3202b$var$Symbol && $a7ee708de5d3202b$var$Symbol.withoutSetter || $2489866eef11ef0b$exports;
$a7ee708de5d3202b$exports = function(name) {
    if (!$61bec295a3ed8110$exports($a7ee708de5d3202b$var$WellKnownSymbolsStore, name) || !($483656ca40b0f857$exports || typeof $a7ee708de5d3202b$var$WellKnownSymbolsStore[name] == "string")) {
        var description = "Symbol." + name;
        if ($483656ca40b0f857$exports && $61bec295a3ed8110$exports($a7ee708de5d3202b$var$Symbol, name)) $a7ee708de5d3202b$var$WellKnownSymbolsStore[name] = $a7ee708de5d3202b$var$Symbol[name];
        else if ($9587866c6e24488f$exports && $a7ee708de5d3202b$var$symbolFor) $a7ee708de5d3202b$var$WellKnownSymbolsStore[name] = $a7ee708de5d3202b$var$symbolFor(description);
        else $a7ee708de5d3202b$var$WellKnownSymbolsStore[name] = $a7ee708de5d3202b$var$createWellKnownSymbol(description);
    }
    return $a7ee708de5d3202b$var$WellKnownSymbolsStore[name];
};


var $e0addf96a5867706$exports = {};
var $604e9ea1d4346234$exports = {};
var $bd9e743992db6f49$exports = {};

$bd9e743992db6f49$exports = function(it) {
    return typeof it == "object" ? it !== null : $7df38799cd0a811e$exports(it);
};


var $604e9ea1d4346234$var$$String = String;
var $604e9ea1d4346234$var$$TypeError = TypeError;
// `Assert: Type(argument) is Object`
$604e9ea1d4346234$exports = function(argument) {
    if ($bd9e743992db6f49$exports(argument)) return argument;
    throw $604e9ea1d4346234$var$$TypeError($604e9ea1d4346234$var$$String(argument) + " is not an object");
};


// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
var $91481cf24be07ae2$export$2d1720544b23b823;
var $ce582bb793e5bf12$exports = {};

// Detect IE8's incomplete defineProperty implementation
$ce582bb793e5bf12$exports = !$bee90e79ed13c4bc$exports(function() {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function get() {
            return 7;
        }
    })[1] != 7;
});


var $13a595c8dc062dd8$exports = {};


// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
$13a595c8dc062dd8$exports = $ce582bb793e5bf12$exports && $bee90e79ed13c4bc$exports(function() {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype != 42;
});


// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
var $47c9d0b706e8d029$export$2d1720544b23b823;

var $8d21d388350526f6$exports = {};


var $fbc423d8fb42f05f$exports = {};


var $fbc423d8fb42f05f$var$document = $e075570e1515f83a$exports.document;
// typeof document.createElement is 'object' in old IE
var $fbc423d8fb42f05f$var$EXISTS = $bd9e743992db6f49$exports($fbc423d8fb42f05f$var$document) && $bd9e743992db6f49$exports($fbc423d8fb42f05f$var$document.createElement);
$fbc423d8fb42f05f$exports = function(it) {
    return $fbc423d8fb42f05f$var$EXISTS ? $fbc423d8fb42f05f$var$document.createElement(it) : {};
};


// Thanks to IE8 for its funny defineProperty
$8d21d388350526f6$exports = !$ce582bb793e5bf12$exports && !$bee90e79ed13c4bc$exports(function() {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty($fbc423d8fb42f05f$exports("div"), "a", {
        get: function get() {
            return 7;
        }
    }).a != 7;
});




var $dcd45cb8addd73f8$exports = {};
var $20e56508e1b72cf0$exports = {};
var $809d5ec09fe529f6$exports = {};

var $809d5ec09fe529f6$var$call = Function.prototype.call;
$809d5ec09fe529f6$exports = $d45d55876709cf15$exports ? $809d5ec09fe529f6$var$call.bind($809d5ec09fe529f6$var$call) : function() {
    return $809d5ec09fe529f6$var$call.apply($809d5ec09fe529f6$var$call, arguments);
};



var $90dd30fa8a0dce74$exports = {};

var $9zKh9 = parcelRequire("9zKh9");


var $cb121e5a42e46f06$exports = {};

$cb121e5a42e46f06$exports = $b99e87fedb7f9467$exports({}.isPrototypeOf);



var $90dd30fa8a0dce74$var$$Object = Object;
$90dd30fa8a0dce74$exports = $9587866c6e24488f$exports ? function(it) {
    return (typeof it === "undefined" ? "undefined" : (0, $9zKh9.default)(it)) == "symbol";
} : function(it) {
    var $Symbol = $415c070cc5ea0697$exports("Symbol");
    return $7df38799cd0a811e$exports($Symbol) && $cb121e5a42e46f06$exports($Symbol.prototype, $90dd30fa8a0dce74$var$$Object(it));
};


var $cf14a838a92511d8$exports = {};
var $502bd7745c884545$exports = {};

var $24add494ff607948$exports = {};
var $24add494ff607948$var$$String = String;
$24add494ff607948$exports = function(argument) {
    try {
        return $24add494ff607948$var$$String(argument);
    } catch (error) {
        return "Object";
    }
};


var $502bd7745c884545$var$$TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
$502bd7745c884545$exports = function(argument) {
    if ($7df38799cd0a811e$exports(argument)) return argument;
    throw $502bd7745c884545$var$$TypeError($24add494ff607948$exports(argument) + " is not a function");
};


// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
$cf14a838a92511d8$exports = function(V, P) {
    var func = V[P];
    return func == null ? undefined : $502bd7745c884545$exports(func);
};


var $a812b42e929e4d07$exports = {};



var $a812b42e929e4d07$var$$TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
$a812b42e929e4d07$exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && $7df38799cd0a811e$exports(fn = input.toString) && !$bd9e743992db6f49$exports(val = $809d5ec09fe529f6$exports(fn, input))) return val;
    if ($7df38799cd0a811e$exports(fn = input.valueOf) && !$bd9e743992db6f49$exports(val = $809d5ec09fe529f6$exports(fn, input))) return val;
    if (pref !== "string" && $7df38799cd0a811e$exports(fn = input.toString) && !$bd9e743992db6f49$exports(val = $809d5ec09fe529f6$exports(fn, input))) return val;
    throw $a812b42e929e4d07$var$$TypeError("Can't convert object to primitive value");
};



var $20e56508e1b72cf0$var$$TypeError = TypeError;
var $20e56508e1b72cf0$var$TO_PRIMITIVE = $a7ee708de5d3202b$exports("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
$20e56508e1b72cf0$exports = function(input, pref) {
    if (!$bd9e743992db6f49$exports(input) || $90dd30fa8a0dce74$exports(input)) return input;
    var exoticToPrim = $cf14a838a92511d8$exports(input, $20e56508e1b72cf0$var$TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = $809d5ec09fe529f6$exports(exoticToPrim, input, pref);
        if (!$bd9e743992db6f49$exports(result) || $90dd30fa8a0dce74$exports(result)) return result;
        throw $20e56508e1b72cf0$var$$TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return $a812b42e929e4d07$exports(input, pref);
};



// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
$dcd45cb8addd73f8$exports = function(argument) {
    var key = $20e56508e1b72cf0$exports(argument, "string");
    return $90dd30fa8a0dce74$exports(key) ? key : key + "";
};


var $47c9d0b706e8d029$var$$TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $47c9d0b706e8d029$var$$defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $47c9d0b706e8d029$var$$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var $47c9d0b706e8d029$var$ENUMERABLE = "enumerable";
var $47c9d0b706e8d029$var$CONFIGURABLE = "configurable";
var $47c9d0b706e8d029$var$WRITABLE = "writable";
$47c9d0b706e8d029$export$2d1720544b23b823 = $ce582bb793e5bf12$exports ? $13a595c8dc062dd8$exports ? function defineProperty(O, P, Attributes) {
    $604e9ea1d4346234$exports(O);
    P = $dcd45cb8addd73f8$exports(P);
    $604e9ea1d4346234$exports(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && $47c9d0b706e8d029$var$WRITABLE in Attributes && !Attributes[$47c9d0b706e8d029$var$WRITABLE]) {
        var current = $47c9d0b706e8d029$var$$getOwnPropertyDescriptor(O, P);
        if (current && current[$47c9d0b706e8d029$var$WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: $47c9d0b706e8d029$var$CONFIGURABLE in Attributes ? Attributes[$47c9d0b706e8d029$var$CONFIGURABLE] : current[$47c9d0b706e8d029$var$CONFIGURABLE],
                enumerable: $47c9d0b706e8d029$var$ENUMERABLE in Attributes ? Attributes[$47c9d0b706e8d029$var$ENUMERABLE] : current[$47c9d0b706e8d029$var$ENUMERABLE],
                writable: false
            };
        }
    }
    return $47c9d0b706e8d029$var$$defineProperty(O, P, Attributes);
} : $47c9d0b706e8d029$var$$defineProperty : function defineProperty(O, P, Attributes) {
    $604e9ea1d4346234$exports(O);
    P = $dcd45cb8addd73f8$exports(P);
    $604e9ea1d4346234$exports(Attributes);
    if ($8d21d388350526f6$exports) try {
        return $47c9d0b706e8d029$var$$defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw $47c9d0b706e8d029$var$$TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};




var $be88ec0146bc98e8$exports = {};
var $fde9ab7023fa11e1$exports = {};



var $ed95db381c283f57$exports = {};

var $c8b087a92432ddec$exports = {};
var $34456c77ef7f6ce8$exports = {};
var $3d94bbdc726be7d9$exports = {};
var $3d94bbdc726be7d9$var$ceil = Math.ceil;
var $3d94bbdc726be7d9$var$floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
$3d94bbdc726be7d9$exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? $3d94bbdc726be7d9$var$floor : $3d94bbdc726be7d9$var$ceil)(n);
};


// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
$34456c77ef7f6ce8$exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : $3d94bbdc726be7d9$exports(number);
};


var $c8b087a92432ddec$var$max = Math.max;
var $c8b087a92432ddec$var$min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
$c8b087a92432ddec$exports = function(index, length) {
    var integer = $34456c77ef7f6ce8$exports(index);
    return integer < 0 ? $c8b087a92432ddec$var$max(integer + length, 0) : $c8b087a92432ddec$var$min(integer, length);
};


var $e6ac72082985015d$exports = {};
var $ba7a0bc7d710fd40$exports = {};

var $ba7a0bc7d710fd40$var$min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
$ba7a0bc7d710fd40$exports = function(argument) {
    return argument > 0 ? $ba7a0bc7d710fd40$var$min($34456c77ef7f6ce8$exports(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
$e6ac72082985015d$exports = function(obj) {
    return $ba7a0bc7d710fd40$exports(obj.length);
};


// `Array.prototype.{ indexOf, includes }` methods implementation
var $ed95db381c283f57$var$createMethod = function createMethod(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = $f95e5e83ee1f9cbc$exports($this);
        var length = $e6ac72082985015d$exports(O);
        var index = $c8b087a92432ddec$exports(fromIndex, length);
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
$ed95db381c283f57$exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: $ed95db381c283f57$var$createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: $ed95db381c283f57$var$createMethod(false)
};


var $fde9ab7023fa11e1$require$indexOf = $ed95db381c283f57$exports.indexOf;
var $c9e815fb3253dd9f$exports = {};
$c9e815fb3253dd9f$exports = {};


var $fde9ab7023fa11e1$var$push = $b99e87fedb7f9467$exports([].push);
$fde9ab7023fa11e1$exports = function(object, names) {
    var O = $f95e5e83ee1f9cbc$exports(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!$61bec295a3ed8110$exports($c9e815fb3253dd9f$exports, key) && $61bec295a3ed8110$exports(O, key) && $fde9ab7023fa11e1$var$push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if ($61bec295a3ed8110$exports(O, key = names[i++])) ~$fde9ab7023fa11e1$require$indexOf(result, key) || $fde9ab7023fa11e1$var$push(result, key);
    return result;
};


var $3eed0b03d6587a52$exports = {};
// IE8- don't enum bug keys
$3eed0b03d6587a52$exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];


// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
$be88ec0146bc98e8$exports = Object.keys || function keys(O) {
    return $fde9ab7023fa11e1$exports(O, $3eed0b03d6587a52$exports);
};


$91481cf24be07ae2$export$2d1720544b23b823 = $ce582bb793e5bf12$exports && !$13a595c8dc062dd8$exports ? Object.defineProperties : function defineProperties(O, Properties) {
    $604e9ea1d4346234$exports(O);
    var props = $f95e5e83ee1f9cbc$exports(Properties);
    var keys = $be88ec0146bc98e8$exports(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while(length > index)$47c9d0b706e8d029$export$2d1720544b23b823(O, key = keys[index++], props[key]);
    return O;
};




var $f4cb06efadd6219e$exports = {};

$f4cb06efadd6219e$exports = $415c070cc5ea0697$exports("document", "documentElement");



var $986ac0c1830efcef$exports = {};


var $986ac0c1830efcef$var$keys = $7ac1b4a485d18ef3$exports("keys");
$986ac0c1830efcef$exports = function(key) {
    return $986ac0c1830efcef$var$keys[key] || ($986ac0c1830efcef$var$keys[key] = $2489866eef11ef0b$exports(key));
};


var $e0addf96a5867706$var$GT = ">";
var $e0addf96a5867706$var$LT = "<";
var $e0addf96a5867706$var$PROTOTYPE = "prototype";
var $e0addf96a5867706$var$SCRIPT = "script";
var $e0addf96a5867706$var$IE_PROTO = $986ac0c1830efcef$exports("IE_PROTO");
var $e0addf96a5867706$var$EmptyConstructor = function EmptyConstructor() {};
var $e0addf96a5867706$var$scriptTag = function scriptTag(content) {
    return $e0addf96a5867706$var$LT + $e0addf96a5867706$var$SCRIPT + $e0addf96a5867706$var$GT + content + $e0addf96a5867706$var$LT + "/" + $e0addf96a5867706$var$SCRIPT + $e0addf96a5867706$var$GT;
};
// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var $e0addf96a5867706$var$NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument1) {
    activeXDocument1.write($e0addf96a5867706$var$scriptTag(""));
    activeXDocument1.close();
    var temp = activeXDocument1.parentWindow.Object;
    activeXDocument1 = null; // avoid memory leak
    return temp;
};
// Create object with fake `null` prototype: use iframe Object with cleared prototype
var $e0addf96a5867706$var$NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = $fbc423d8fb42f05f$exports("iframe");
    var JS = "java" + $e0addf96a5867706$var$SCRIPT + ":";
    var iframeDocument;
    iframe.style.display = "none";
    $f4cb06efadd6219e$exports.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write($e0addf96a5867706$var$scriptTag("document.F=Object"));
    iframeDocument.close();
    return iframeDocument.F;
};
// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var $e0addf96a5867706$var$activeXDocument;
var $e0addf96a5867706$var$NullProtoObject = function() {
    try {
        $e0addf96a5867706$var$activeXDocument = new ActiveXObject("htmlfile");
    } catch (error) {}
    $e0addf96a5867706$var$NullProtoObject = typeof document != "undefined" ? document.domain && $e0addf96a5867706$var$activeXDocument ? $e0addf96a5867706$var$NullProtoObjectViaActiveX($e0addf96a5867706$var$activeXDocument) // old IE
     : $e0addf96a5867706$var$NullProtoObjectViaIFrame() : $e0addf96a5867706$var$NullProtoObjectViaActiveX($e0addf96a5867706$var$activeXDocument); // WSH
    var length = $3eed0b03d6587a52$exports.length;
    while(length--)delete $e0addf96a5867706$var$NullProtoObject[$e0addf96a5867706$var$PROTOTYPE][$3eed0b03d6587a52$exports[length]];
    return $e0addf96a5867706$var$NullProtoObject();
};
$c9e815fb3253dd9f$exports[$e0addf96a5867706$var$IE_PROTO] = true;
// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
$e0addf96a5867706$exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
        $e0addf96a5867706$var$EmptyConstructor[$e0addf96a5867706$var$PROTOTYPE] = $604e9ea1d4346234$exports(O);
        result = new $e0addf96a5867706$var$EmptyConstructor();
        $e0addf96a5867706$var$EmptyConstructor[$e0addf96a5867706$var$PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[$e0addf96a5867706$var$IE_PROTO] = O;
    } else result = $e0addf96a5867706$var$NullProtoObject();
    return Properties === undefined ? result : $91481cf24be07ae2$export$2d1720544b23b823(result, Properties);
};



var $01b780c95fd9eae1$require$defineProperty = $47c9d0b706e8d029$export$2d1720544b23b823;
var $01b780c95fd9eae1$var$UNSCOPABLES = $a7ee708de5d3202b$exports("unscopables");
var $01b780c95fd9eae1$var$ArrayPrototype = Array.prototype;
// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if ($01b780c95fd9eae1$var$ArrayPrototype[$01b780c95fd9eae1$var$UNSCOPABLES] == undefined) $01b780c95fd9eae1$require$defineProperty($01b780c95fd9eae1$var$ArrayPrototype, $01b780c95fd9eae1$var$UNSCOPABLES, {
    configurable: true,
    value: $e0addf96a5867706$exports(null)
});
// add a key to Array.prototype[@@unscopables]
$01b780c95fd9eae1$exports = function(key) {
    $01b780c95fd9eae1$var$ArrayPrototype[$01b780c95fd9eae1$var$UNSCOPABLES][key] = true;
};


var $d09e3968208bfe82$exports = {};
$d09e3968208bfe82$exports = {};


var $2161f7fbe20907d3$exports = {};
var $61b5530f0fcd4082$exports = {};


var $f15f54516098e2f2$exports = {};



var $f15f54516098e2f2$var$functionToString = $b99e87fedb7f9467$exports(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!$7df38799cd0a811e$exports($4cb4541e22e7b02d$exports.inspectSource)) $4cb4541e22e7b02d$exports.inspectSource = function(it) {
    return $f15f54516098e2f2$var$functionToString(it);
};
$f15f54516098e2f2$exports = $4cb4541e22e7b02d$exports.inspectSource;


var $61b5530f0fcd4082$var$WeakMap = $e075570e1515f83a$exports.WeakMap;
$61b5530f0fcd4082$exports = $7df38799cd0a811e$exports($61b5530f0fcd4082$var$WeakMap) && /native code/.test($f15f54516098e2f2$exports($61b5530f0fcd4082$var$WeakMap));





var $ea9211ab365b22a8$exports = {};


var $38b019a69563b635$exports = {};
$38b019a69563b635$exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};


$ea9211ab365b22a8$exports = $ce582bb793e5bf12$exports ? function(object, key, value) {
    return $47c9d0b706e8d029$export$2d1720544b23b823(object, key, $38b019a69563b635$exports(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};






var $2161f7fbe20907d3$var$OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var $2161f7fbe20907d3$var$TypeError = $e075570e1515f83a$exports.TypeError;
var $2161f7fbe20907d3$var$WeakMap = $e075570e1515f83a$exports.WeakMap;
var $2161f7fbe20907d3$var$set, $2161f7fbe20907d3$var$get, $2161f7fbe20907d3$var$has;
var $2161f7fbe20907d3$var$enforce = function enforce(it) {
    return $2161f7fbe20907d3$var$has(it) ? $2161f7fbe20907d3$var$get(it) : $2161f7fbe20907d3$var$set(it, {});
};
var $2161f7fbe20907d3$var$getterFor = function getterFor(TYPE) {
    return function(it) {
        var state;
        if (!$bd9e743992db6f49$exports(it) || (state = $2161f7fbe20907d3$var$get(it)).type !== TYPE) throw $2161f7fbe20907d3$var$TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if ($61b5530f0fcd4082$exports || $4cb4541e22e7b02d$exports.state) {
    var $2161f7fbe20907d3$var$store = $4cb4541e22e7b02d$exports.state || ($4cb4541e22e7b02d$exports.state = new $2161f7fbe20907d3$var$WeakMap());
    var $2161f7fbe20907d3$var$wmget = $b99e87fedb7f9467$exports($2161f7fbe20907d3$var$store.get);
    var $2161f7fbe20907d3$var$wmhas = $b99e87fedb7f9467$exports($2161f7fbe20907d3$var$store.has);
    var $2161f7fbe20907d3$var$wmset = $b99e87fedb7f9467$exports($2161f7fbe20907d3$var$store.set);
    $2161f7fbe20907d3$var$set = function set(it, metadata) {
        if ($2161f7fbe20907d3$var$wmhas($2161f7fbe20907d3$var$store, it)) throw new $2161f7fbe20907d3$var$TypeError($2161f7fbe20907d3$var$OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        $2161f7fbe20907d3$var$wmset($2161f7fbe20907d3$var$store, it, metadata);
        return metadata;
    };
    $2161f7fbe20907d3$var$get = function get(it) {
        return $2161f7fbe20907d3$var$wmget($2161f7fbe20907d3$var$store, it) || {};
    };
    $2161f7fbe20907d3$var$has = function has(it) {
        return $2161f7fbe20907d3$var$wmhas($2161f7fbe20907d3$var$store, it);
    };
} else {
    var $2161f7fbe20907d3$var$STATE = $986ac0c1830efcef$exports("state");
    $c9e815fb3253dd9f$exports[$2161f7fbe20907d3$var$STATE] = true;
    $2161f7fbe20907d3$var$set = function set(it, metadata) {
        if ($61bec295a3ed8110$exports(it, $2161f7fbe20907d3$var$STATE)) throw new $2161f7fbe20907d3$var$TypeError($2161f7fbe20907d3$var$OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        $ea9211ab365b22a8$exports(it, $2161f7fbe20907d3$var$STATE, metadata);
        return metadata;
    };
    $2161f7fbe20907d3$var$get = function get(it) {
        return $61bec295a3ed8110$exports(it, $2161f7fbe20907d3$var$STATE) ? it[$2161f7fbe20907d3$var$STATE] : {};
    };
    $2161f7fbe20907d3$var$has = function has(it) {
        return $61bec295a3ed8110$exports(it, $2161f7fbe20907d3$var$STATE);
    };
}
$2161f7fbe20907d3$exports = {
    set: $2161f7fbe20907d3$var$set,
    get: $2161f7fbe20907d3$var$get,
    has: $2161f7fbe20907d3$var$has,
    enforce: $2161f7fbe20907d3$var$enforce,
    getterFor: $2161f7fbe20907d3$var$getterFor
};



var $6470aab53332fba1$require$defineProperty = $47c9d0b706e8d029$export$2d1720544b23b823;
var $c2b7b73fd9973575$exports = {};
"use strict";
var $ed212ae7182386e3$exports = {};

var $9zKh9 = parcelRequire("9zKh9");

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
var $69e9fab4dde2baf4$export$2d1720544b23b823;


// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
var $ad90a5d9b5e352a5$export$2d1720544b23b823;
"use strict";
var $ad90a5d9b5e352a5$var$$propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $ad90a5d9b5e352a5$var$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var $ad90a5d9b5e352a5$var$NASHORN_BUG = $ad90a5d9b5e352a5$var$getOwnPropertyDescriptor && !$ad90a5d9b5e352a5$var$$propertyIsEnumerable.call({
    1: 2
}, 1);
$ad90a5d9b5e352a5$export$2d1720544b23b823 = $ad90a5d9b5e352a5$var$NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = $ad90a5d9b5e352a5$var$getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $ad90a5d9b5e352a5$var$$propertyIsEnumerable;







// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $69e9fab4dde2baf4$var$$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
$69e9fab4dde2baf4$export$2d1720544b23b823 = $ce582bb793e5bf12$exports ? $69e9fab4dde2baf4$var$$getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = $f95e5e83ee1f9cbc$exports(O);
    P = $dcd45cb8addd73f8$exports(P);
    if ($8d21d388350526f6$exports) try {
        return $69e9fab4dde2baf4$var$$getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if ($61bec295a3ed8110$exports(O, P)) return $38b019a69563b635$exports(!$809d5ec09fe529f6$exports($ad90a5d9b5e352a5$export$2d1720544b23b823, O, P), O[P]);
};


var $ed212ae7182386e3$require$getOwnPropertyDescriptor = $69e9fab4dde2baf4$export$2d1720544b23b823;

var $2313d927b29dd93b$exports = {};


var $7fa9a199fbca3033$exports = {};




var $6dd525b0078b4011$exports = {};


var $6dd525b0078b4011$var$FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $6dd525b0078b4011$var$getDescriptor = $ce582bb793e5bf12$exports && Object.getOwnPropertyDescriptor;
var $6dd525b0078b4011$var$EXISTS = $61bec295a3ed8110$exports($6dd525b0078b4011$var$FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var $6dd525b0078b4011$var$PROPER = $6dd525b0078b4011$var$EXISTS && (function something() {}).name === "something";
var $6dd525b0078b4011$var$CONFIGURABLE = $6dd525b0078b4011$var$EXISTS && (!$ce582bb793e5bf12$exports || $ce582bb793e5bf12$exports && $6dd525b0078b4011$var$getDescriptor($6dd525b0078b4011$var$FunctionPrototype, "name").configurable);
$6dd525b0078b4011$exports = {
    EXISTS: $6dd525b0078b4011$var$EXISTS,
    PROPER: $6dd525b0078b4011$var$PROPER,
    CONFIGURABLE: $6dd525b0078b4011$var$CONFIGURABLE
};


var $7fa9a199fbca3033$require$CONFIGURABLE_FUNCTION_NAME = $6dd525b0078b4011$exports.CONFIGURABLE;


var $7fa9a199fbca3033$var$enforceInternalState = $2161f7fbe20907d3$exports.enforce;
var $7fa9a199fbca3033$var$getInternalState = $2161f7fbe20907d3$exports.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $7fa9a199fbca3033$var$defineProperty = Object.defineProperty;
var $7fa9a199fbca3033$var$CONFIGURABLE_LENGTH = $ce582bb793e5bf12$exports && !$bee90e79ed13c4bc$exports(function() {
    return $7fa9a199fbca3033$var$defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var $7fa9a199fbca3033$var$TEMPLATE = String(String).split("String");
var $7fa9a199fbca3033$var$makeBuiltIn = $7fa9a199fbca3033$exports = function makeBuiltIn(value, name, options) {
    if (String(name).slice(0, 7) === "Symbol(") name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!$61bec295a3ed8110$exports(value, "name") || $7fa9a199fbca3033$require$CONFIGURABLE_FUNCTION_NAME && value.name !== name) $7fa9a199fbca3033$var$defineProperty(value, "name", {
        value: name,
        configurable: true
    });
    if ($7fa9a199fbca3033$var$CONFIGURABLE_LENGTH && options && $61bec295a3ed8110$exports(options, "arity") && value.length !== options.arity) $7fa9a199fbca3033$var$defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && $61bec295a3ed8110$exports(options, "constructor") && options.constructor) {
            if ($ce582bb793e5bf12$exports) $7fa9a199fbca3033$var$defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = $7fa9a199fbca3033$var$enforceInternalState(value);
    if (!$61bec295a3ed8110$exports(state, "source")) state.source = $7fa9a199fbca3033$var$TEMPLATE.join(typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = $7fa9a199fbca3033$var$makeBuiltIn(function toString() {
    return $7df38799cd0a811e$exports(this) && $7fa9a199fbca3033$var$getInternalState(this).source || $f15f54516098e2f2$exports(this);
}, "toString");



$2313d927b29dd93b$exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if ($7df38799cd0a811e$exports(value)) $7fa9a199fbca3033$exports(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else $2e83fdcbbb0a2b6f$exports(key, value);
    } else {
        if (!options.unsafe) delete O[key];
        else if (O[key]) simple = true;
        if (simple) O[key] = value;
        else $47c9d0b706e8d029$export$2d1720544b23b823(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};



var $fe204e97fb284ae8$exports = {};

var $fc394b49b70967d3$exports = {};


// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
var $abdb2cbede7cc9d4$export$2d1720544b23b823;


var $abdb2cbede7cc9d4$var$hiddenKeys = $3eed0b03d6587a52$exports.concat("length", "prototype");
$abdb2cbede7cc9d4$export$2d1720544b23b823 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $fde9ab7023fa11e1$exports(O, $abdb2cbede7cc9d4$var$hiddenKeys);
};


// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
var $deca88e8305677dc$export$2d1720544b23b823;
$deca88e8305677dc$export$2d1720544b23b823 = Object.getOwnPropertySymbols;



var $fc394b49b70967d3$var$concat = $b99e87fedb7f9467$exports([].concat);
// all object keys, includes non-enumerable and symbols
$fc394b49b70967d3$exports = $415c070cc5ea0697$exports("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = $abdb2cbede7cc9d4$export$2d1720544b23b823($604e9ea1d4346234$exports(it));
    var getOwnPropertySymbols = $deca88e8305677dc$export$2d1720544b23b823;
    return getOwnPropertySymbols ? $fc394b49b70967d3$var$concat(keys, getOwnPropertySymbols(it)) : keys;
};




$fe204e97fb284ae8$exports = function(target, source, exceptions) {
    var keys = $fc394b49b70967d3$exports(source);
    var defineProperty = $47c9d0b706e8d029$export$2d1720544b23b823;
    var getOwnPropertyDescriptor = $69e9fab4dde2baf4$export$2d1720544b23b823;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!$61bec295a3ed8110$exports(target, key) && !(exceptions && $61bec295a3ed8110$exports(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};


var $03cf3a79bb999ca0$exports = {};


var $03cf3a79bb999ca0$var$replacement = /#|\.prototype\./;
var $03cf3a79bb999ca0$var$isForced = function isForced(feature, detection) {
    var value = $03cf3a79bb999ca0$var$data[$03cf3a79bb999ca0$var$normalize(feature)];
    return value == $03cf3a79bb999ca0$var$POLYFILL ? true : value == $03cf3a79bb999ca0$var$NATIVE ? false : $7df38799cd0a811e$exports(detection) ? $bee90e79ed13c4bc$exports(detection) : !!detection;
};
var $03cf3a79bb999ca0$var$normalize = $03cf3a79bb999ca0$var$isForced.normalize = function normalize(string) {
    return String(string).replace($03cf3a79bb999ca0$var$replacement, ".").toLowerCase();
};
var $03cf3a79bb999ca0$var$data = $03cf3a79bb999ca0$var$isForced.data = {};
var $03cf3a79bb999ca0$var$NATIVE = $03cf3a79bb999ca0$var$isForced.NATIVE = "N";
var $03cf3a79bb999ca0$var$POLYFILL = $03cf3a79bb999ca0$var$isForced.POLYFILL = "P";
$03cf3a79bb999ca0$exports = $03cf3a79bb999ca0$var$isForced;


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
*/ $ed212ae7182386e3$exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = $e075570e1515f83a$exports;
    else if (STATIC) target = $e075570e1515f83a$exports[TARGET] || $2e83fdcbbb0a2b6f$exports(TARGET, {});
    else target = ($e075570e1515f83a$exports[TARGET] || {}).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = $ed212ae7182386e3$require$getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = $03cf3a79bb999ca0$exports(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if ((typeof sourceProperty === "undefined" ? "undefined" : (0, $9zKh9.default)(sourceProperty)) == (typeof targetProperty === "undefined" ? "undefined" : (0, $9zKh9.default)(targetProperty))) continue;
            $fe204e97fb284ae8$exports(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) $ea9211ab365b22a8$exports(sourceProperty, "sham", true);
        $2313d927b29dd93b$exports(target, key, sourceProperty, options);
    }
};






var $95f28643e6d5708c$exports = {};
"use strict";
var $44767f8dc2054a7f$exports = {};
"use strict";



var $054f8a1125b6284c$exports = {};




var $d7298577064f94c2$exports = {};

$d7298577064f94c2$exports = !$bee90e79ed13c4bc$exports(function() {
    var F = function F() {};
    F.prototype.constructor = null;
    // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
});


var $054f8a1125b6284c$var$IE_PROTO = $986ac0c1830efcef$exports("IE_PROTO");
var $054f8a1125b6284c$var$$Object = Object;
var $054f8a1125b6284c$var$ObjectPrototype = $054f8a1125b6284c$var$$Object.prototype;
// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es-x/no-object-getprototypeof -- safe
$054f8a1125b6284c$exports = $d7298577064f94c2$exports ? $054f8a1125b6284c$var$$Object.getPrototypeOf : function(O) {
    var object = $fd7bf9d63ba236e8$exports(O);
    if ($61bec295a3ed8110$exports(object, $054f8a1125b6284c$var$IE_PROTO)) return object[$054f8a1125b6284c$var$IE_PROTO];
    var constructor = object.constructor;
    if ($7df38799cd0a811e$exports(constructor) && object instanceof constructor) return constructor.prototype;
    return object instanceof $054f8a1125b6284c$var$$Object ? $054f8a1125b6284c$var$ObjectPrototype : null;
};





var $44767f8dc2054a7f$var$ITERATOR = $a7ee708de5d3202b$exports("iterator");
var $44767f8dc2054a7f$var$BUGGY_SAFARI_ITERATORS = false;
// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var $44767f8dc2054a7f$var$IteratorPrototype, $44767f8dc2054a7f$var$PrototypeOfArrayIteratorPrototype, $44767f8dc2054a7f$var$arrayIterator;
/* eslint-disable es-x/no-array-prototype-keys -- safe */ if ([].keys) {
    $44767f8dc2054a7f$var$arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!("next" in $44767f8dc2054a7f$var$arrayIterator)) $44767f8dc2054a7f$var$BUGGY_SAFARI_ITERATORS = true;
    else {
        $44767f8dc2054a7f$var$PrototypeOfArrayIteratorPrototype = $054f8a1125b6284c$exports($054f8a1125b6284c$exports($44767f8dc2054a7f$var$arrayIterator));
        if ($44767f8dc2054a7f$var$PrototypeOfArrayIteratorPrototype !== Object.prototype) $44767f8dc2054a7f$var$IteratorPrototype = $44767f8dc2054a7f$var$PrototypeOfArrayIteratorPrototype;
    }
}
var $44767f8dc2054a7f$var$NEW_ITERATOR_PROTOTYPE = $44767f8dc2054a7f$var$IteratorPrototype == undefined || $bee90e79ed13c4bc$exports(function() {
    var test = {};
    // FF44- legacy iterators case
    return $44767f8dc2054a7f$var$IteratorPrototype[$44767f8dc2054a7f$var$ITERATOR].call(test) !== test;
});
if ($44767f8dc2054a7f$var$NEW_ITERATOR_PROTOTYPE) $44767f8dc2054a7f$var$IteratorPrototype = {};
else if ($fb757cc41bbad0c2$exports) $44767f8dc2054a7f$var$IteratorPrototype = $e0addf96a5867706$exports($44767f8dc2054a7f$var$IteratorPrototype);
// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!$7df38799cd0a811e$exports($44767f8dc2054a7f$var$IteratorPrototype[$44767f8dc2054a7f$var$ITERATOR])) $2313d927b29dd93b$exports($44767f8dc2054a7f$var$IteratorPrototype, $44767f8dc2054a7f$var$ITERATOR, function() {
    return this;
});
$44767f8dc2054a7f$exports = {
    IteratorPrototype: $44767f8dc2054a7f$var$IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: $44767f8dc2054a7f$var$BUGGY_SAFARI_ITERATORS
};


var $95f28643e6d5708c$require$IteratorPrototype = $44767f8dc2054a7f$exports.IteratorPrototype;


var $41cc5bde125d6ca6$exports = {};

var $41cc5bde125d6ca6$require$defineProperty = $47c9d0b706e8d029$export$2d1720544b23b823;


var $41cc5bde125d6ca6$var$TO_STRING_TAG = $a7ee708de5d3202b$exports("toStringTag");
$41cc5bde125d6ca6$exports = function(target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !$61bec295a3ed8110$exports(target, $41cc5bde125d6ca6$var$TO_STRING_TAG)) $41cc5bde125d6ca6$require$defineProperty(target, $41cc5bde125d6ca6$var$TO_STRING_TAG, {
        configurable: true,
        value: TAG
    });
};



var $95f28643e6d5708c$var$returnThis = function returnThis() {
    return this;
};
$95f28643e6d5708c$exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + " Iterator";
    IteratorConstructor.prototype = $e0addf96a5867706$exports($95f28643e6d5708c$require$IteratorPrototype, {
        next: $38b019a69563b635$exports(+!ENUMERABLE_NEXT, next)
    });
    $41cc5bde125d6ca6$exports(IteratorConstructor, TO_STRING_TAG, false, true);
    $d09e3968208bfe82$exports[TO_STRING_TAG] = $95f28643e6d5708c$var$returnThis;
    return IteratorConstructor;
};



var $c750e886230fd7b8$exports = {};


var $6b347df6ed0723bf$exports = {};

var $6b347df6ed0723bf$var$$String = String;
var $6b347df6ed0723bf$var$$TypeError = TypeError;
$6b347df6ed0723bf$exports = function(argument) {
    if (typeof argument == "object" || $7df38799cd0a811e$exports(argument)) return argument;
    throw $6b347df6ed0723bf$var$$TypeError("Can't set " + $6b347df6ed0723bf$var$$String(argument) + " as a prototype");
};


// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
$c750e886230fd7b8$exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
        // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
        setter = $b99e87fedb7f9467$exports(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set);
        setter(test, []);
        CORRECT_SETTER = test instanceof Array;
    } catch (error) {}
    return function setPrototypeOf(O, proto) {
        $604e9ea1d4346234$exports(O);
        $6b347df6ed0723bf$exports(proto);
        if (CORRECT_SETTER) setter(O, proto);
        else O.__proto__ = proto;
        return O;
    };
}() : undefined);








var $c2b7b73fd9973575$var$PROPER_FUNCTION_NAME = $6dd525b0078b4011$exports.PROPER;
var $c2b7b73fd9973575$var$CONFIGURABLE_FUNCTION_NAME = $6dd525b0078b4011$exports.CONFIGURABLE;
var $c2b7b73fd9973575$var$IteratorPrototype = $44767f8dc2054a7f$exports.IteratorPrototype;
var $c2b7b73fd9973575$var$BUGGY_SAFARI_ITERATORS = $44767f8dc2054a7f$exports.BUGGY_SAFARI_ITERATORS;
var $c2b7b73fd9973575$var$ITERATOR = $a7ee708de5d3202b$exports("iterator");
var $c2b7b73fd9973575$var$KEYS = "keys";
var $c2b7b73fd9973575$var$VALUES = "values";
var $c2b7b73fd9973575$var$ENTRIES = "entries";
var $c2b7b73fd9973575$var$returnThis = function returnThis() {
    return this;
};
$c2b7b73fd9973575$exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    $95f28643e6d5708c$exports(IteratorConstructor, NAME, next);
    var getIterationMethod = function getIterationMethod(KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!$c2b7b73fd9973575$var$BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
        switch(KIND){
            case $c2b7b73fd9973575$var$KEYS:
                return function keys() {
                    return new IteratorConstructor(this, KIND);
                };
            case $c2b7b73fd9973575$var$VALUES:
                return function values() {
                    return new IteratorConstructor(this, KIND);
                };
            case $c2b7b73fd9973575$var$ENTRIES:
                return function entries() {
                    return new IteratorConstructor(this, KIND);
                };
        }
        return function() {
            return new IteratorConstructor(this);
        };
    };
    var TO_STRING_TAG = NAME + " Iterator";
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[$c2b7b73fd9973575$var$ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !$c2b7b73fd9973575$var$BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;
    // fix native
    if (anyNativeIterator) {
        CurrentIteratorPrototype = $054f8a1125b6284c$exports(anyNativeIterator.call(new Iterable()));
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!$fb757cc41bbad0c2$exports && $054f8a1125b6284c$exports(CurrentIteratorPrototype) !== $c2b7b73fd9973575$var$IteratorPrototype) {
                if ($c750e886230fd7b8$exports) $c750e886230fd7b8$exports(CurrentIteratorPrototype, $c2b7b73fd9973575$var$IteratorPrototype);
                else if (!$7df38799cd0a811e$exports(CurrentIteratorPrototype[$c2b7b73fd9973575$var$ITERATOR])) $2313d927b29dd93b$exports(CurrentIteratorPrototype, $c2b7b73fd9973575$var$ITERATOR, $c2b7b73fd9973575$var$returnThis);
            }
            // Set @@toStringTag to native iterators
            $41cc5bde125d6ca6$exports(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if ($fb757cc41bbad0c2$exports) $d09e3968208bfe82$exports[TO_STRING_TAG] = $c2b7b73fd9973575$var$returnThis;
        }
    }
    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if ($c2b7b73fd9973575$var$PROPER_FUNCTION_NAME && DEFAULT == $c2b7b73fd9973575$var$VALUES && nativeIterator && nativeIterator.name !== $c2b7b73fd9973575$var$VALUES) {
        if (!$fb757cc41bbad0c2$exports && $c2b7b73fd9973575$var$CONFIGURABLE_FUNCTION_NAME) $ea9211ab365b22a8$exports(IterablePrototype, "name", $c2b7b73fd9973575$var$VALUES);
        else {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
                return $809d5ec09fe529f6$exports(nativeIterator, this);
            };
        }
    }
    // export additional methods
    if (DEFAULT) {
        methods = {
            values: getIterationMethod($c2b7b73fd9973575$var$VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod($c2b7b73fd9973575$var$KEYS),
            entries: getIterationMethod($c2b7b73fd9973575$var$ENTRIES)
        };
        if (FORCED) {
            for(KEY in methods)if ($c2b7b73fd9973575$var$BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) $2313d927b29dd93b$exports(IterablePrototype, KEY, methods[KEY]);
        } else $ed212ae7182386e3$exports({
            target: NAME,
            proto: true,
            forced: $c2b7b73fd9973575$var$BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
        }, methods);
    }
    // define iterator
    if ((!$fb757cc41bbad0c2$exports || FORCED) && IterablePrototype[$c2b7b73fd9973575$var$ITERATOR] !== defaultIterator) $2313d927b29dd93b$exports(IterablePrototype, $c2b7b73fd9973575$var$ITERATOR, defaultIterator, {
        name: DEFAULT
    });
    $d09e3968208bfe82$exports[NAME] = defaultIterator;
    return methods;
};




var $6470aab53332fba1$var$ARRAY_ITERATOR = "Array Iterator";
var $6470aab53332fba1$var$setInternalState = $2161f7fbe20907d3$exports.set;
var $6470aab53332fba1$var$getInternalState = $2161f7fbe20907d3$exports.getterFor($6470aab53332fba1$var$ARRAY_ITERATOR);
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
$6470aab53332fba1$exports = $c2b7b73fd9973575$exports(Array, "Array", function(iterated, kind) {
    $6470aab53332fba1$var$setInternalState(this, {
        type: $6470aab53332fba1$var$ARRAY_ITERATOR,
        target: $f95e5e83ee1f9cbc$exports(iterated),
        index: 0,
        kind: kind // kind
    });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function() {
    var state = $6470aab53332fba1$var$getInternalState(this);
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
    if (kind == "keys") return {
        value: index,
        done: false
    };
    if (kind == "values") return {
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
}, "values");
// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
// https://tc39.es/ecma262/#sec-createmappedargumentsobject
var $6470aab53332fba1$var$values = $d09e3968208bfe82$exports.Arguments = $d09e3968208bfe82$exports.Array;
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
$01b780c95fd9eae1$exports("keys");
$01b780c95fd9eae1$exports("values");
$01b780c95fd9eae1$exports("entries");
// V8 ~ Chrome 45- bug
if (!$fb757cc41bbad0c2$exports && $ce582bb793e5bf12$exports && $6470aab53332fba1$var$values.name !== "values") try {
    $6470aab53332fba1$require$defineProperty($6470aab53332fba1$var$values, "name", {
        value: "values"
    });
} catch (error) {}


var $1a4d92242e12064f$exports = {};

var $1a4d92242e12064f$var$TO_STRING_TAG = $a7ee708de5d3202b$exports("toStringTag");
var $1a4d92242e12064f$var$test = {};
$1a4d92242e12064f$var$test[$1a4d92242e12064f$var$TO_STRING_TAG] = "z";
$1a4d92242e12064f$exports = String($1a4d92242e12064f$var$test) === "[object z]";



var $adfa97c8ed51affa$exports = {};
"use strict";

var $3b7246e6890640c6$exports = {};




var $3b7246e6890640c6$var$TO_STRING_TAG = $a7ee708de5d3202b$exports("toStringTag");
var $3b7246e6890640c6$var$$Object = Object;
// ES3 wrong here
var $3b7246e6890640c6$var$CORRECT_ARGUMENTS = $ea0df83cd252cea9$exports(function() {
    return arguments;
}()) == "Arguments";
// fallback for IE11 Script Access Denied error
var $3b7246e6890640c6$var$tryGet = function tryGet(it, key) {
    try {
        return it[key];
    } catch (error) {}
};
// getting tag from ES6+ `Object.prototype.toString`
$3b7246e6890640c6$exports = $1a4d92242e12064f$exports ? $ea0df83cd252cea9$exports : function(it) {
    var O, tag, result;
    return it === undefined ? "Undefined" : it === null ? "Null" : typeof (tag = $3b7246e6890640c6$var$tryGet(O = $3b7246e6890640c6$var$$Object(it), $3b7246e6890640c6$var$TO_STRING_TAG)) == "string" ? tag : $3b7246e6890640c6$var$CORRECT_ARGUMENTS ? $ea0df83cd252cea9$exports(O) : (result = $ea0df83cd252cea9$exports(O)) == "Object" && $7df38799cd0a811e$exports(O.callee) ? "Arguments" : result;
};


// `Object.prototype.toString` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.tostring
$adfa97c8ed51affa$exports = $1a4d92242e12064f$exports ? ({}).toString : function toString() {
    return "[object " + $3b7246e6890640c6$exports(this) + "]";
};


// `Object.prototype.toString` method
// https://tc39.es/ecma262/#sec-object.prototype.tostring
if (!$1a4d92242e12064f$exports) $2313d927b29dd93b$exports(Object.prototype, "toString", $adfa97c8ed51affa$exports, {
    unsafe: true
});


"use strict";


var $85b7834bdf67b5aa$exports = {};


$85b7834bdf67b5aa$exports = $ea0df83cd252cea9$exports($e075570e1515f83a$exports.process) == "process";







var $c0290f33b778521f$exports = {};
"use strict";




var $c0290f33b778521f$var$SPECIES = $a7ee708de5d3202b$exports("species");
$c0290f33b778521f$exports = function(CONSTRUCTOR_NAME) {
    var Constructor = $415c070cc5ea0697$exports(CONSTRUCTOR_NAME);
    var defineProperty = $47c9d0b706e8d029$export$2d1720544b23b823;
    if ($ce582bb793e5bf12$exports && Constructor && !Constructor[$c0290f33b778521f$var$SPECIES]) defineProperty(Constructor, $c0290f33b778521f$var$SPECIES, {
        configurable: true,
        get: function get() {
            return this;
        }
    });
};





var $6cffad1a0850d6a8$exports = {};

var $6cffad1a0850d6a8$var$$TypeError = TypeError;
$6cffad1a0850d6a8$exports = function(it, Prototype) {
    if ($cb121e5a42e46f06$exports(Prototype, it)) return it;
    throw $6cffad1a0850d6a8$var$$TypeError("Incorrect invocation");
};


var $cca7b5dfaca49fe4$exports = {};

var $43896c87047a4e08$exports = {};
var $72ddb556e92d476c$exports = {};






var $72ddb556e92d476c$var$noop = function noop() {};
var $72ddb556e92d476c$var$empty = [];
var $72ddb556e92d476c$var$construct = $415c070cc5ea0697$exports("Reflect", "construct");
var $72ddb556e92d476c$var$constructorRegExp = /^\s*(?:class|function)\b/;
var $72ddb556e92d476c$var$exec = $b99e87fedb7f9467$exports($72ddb556e92d476c$var$constructorRegExp.exec);
var $72ddb556e92d476c$var$INCORRECT_TO_STRING = !$72ddb556e92d476c$var$constructorRegExp.exec($72ddb556e92d476c$var$noop);
var $72ddb556e92d476c$var$isConstructorModern = function isConstructor(argument) {
    if (!$7df38799cd0a811e$exports(argument)) return false;
    try {
        $72ddb556e92d476c$var$construct($72ddb556e92d476c$var$noop, $72ddb556e92d476c$var$empty, argument);
        return true;
    } catch (error) {
        return false;
    }
};
var $72ddb556e92d476c$var$isConstructorLegacy = function isConstructor(argument) {
    if (!$7df38799cd0a811e$exports(argument)) return false;
    switch($3b7246e6890640c6$exports(argument)){
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
            return false;
    }
    try {
        // we can't check .prototype since constructors produced by .bind haven't it
        // `Function#toString` throws on some built-it function in some legacy engines
        // (for example, `DOMQuad` and similar in FF41-)
        return $72ddb556e92d476c$var$INCORRECT_TO_STRING || !!$72ddb556e92d476c$var$exec($72ddb556e92d476c$var$constructorRegExp, $f15f54516098e2f2$exports(argument));
    } catch (error) {
        return true;
    }
};
$72ddb556e92d476c$var$isConstructorLegacy.sham = true;
// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
$72ddb556e92d476c$exports = !$72ddb556e92d476c$var$construct || $bee90e79ed13c4bc$exports(function() {
    var called;
    return $72ddb556e92d476c$var$isConstructorModern($72ddb556e92d476c$var$isConstructorModern.call) || !$72ddb556e92d476c$var$isConstructorModern(Object) || !$72ddb556e92d476c$var$isConstructorModern(function() {
        called = true;
    }) || called;
}) ? $72ddb556e92d476c$var$isConstructorLegacy : $72ddb556e92d476c$var$isConstructorModern;



var $43896c87047a4e08$var$$TypeError = TypeError;
// `Assert: IsConstructor(argument) is true`
$43896c87047a4e08$exports = function(argument) {
    if ($72ddb556e92d476c$exports(argument)) return argument;
    throw $43896c87047a4e08$var$$TypeError($24add494ff607948$exports(argument) + " is not a constructor");
};



var $cca7b5dfaca49fe4$var$SPECIES = $a7ee708de5d3202b$exports("species");
// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
$cca7b5dfaca49fe4$exports = function(O, defaultConstructor) {
    var C = $604e9ea1d4346234$exports(O).constructor;
    var S;
    return C === undefined || (S = $604e9ea1d4346234$exports(C)[$cca7b5dfaca49fe4$var$SPECIES]) == undefined ? defaultConstructor : $43896c87047a4e08$exports(S);
};


var $575783586a4147bf$exports = {};

var $bdbace7434427eed$exports = {};

var $bdbace7434427eed$var$FunctionPrototype = Function.prototype;
var $bdbace7434427eed$var$apply = $bdbace7434427eed$var$FunctionPrototype.apply;
var $bdbace7434427eed$var$call = $bdbace7434427eed$var$FunctionPrototype.call;
// eslint-disable-next-line es-x/no-reflect -- safe
$bdbace7434427eed$exports = typeof Reflect == "object" && Reflect.apply || ($d45d55876709cf15$exports ? $bdbace7434427eed$var$call.bind($bdbace7434427eed$var$apply) : function() {
    return $bdbace7434427eed$var$call.apply($bdbace7434427eed$var$apply, arguments);
});


var $c309ae6e8e9c3ac2$exports = {};



var $c309ae6e8e9c3ac2$var$bind = $b99e87fedb7f9467$exports($b99e87fedb7f9467$exports.bind);
// optional / simple context binding
$c309ae6e8e9c3ac2$exports = function(fn, that) {
    $502bd7745c884545$exports(fn);
    return that === undefined ? fn : $d45d55876709cf15$exports ? $c309ae6e8e9c3ac2$var$bind(fn, that) : function() {
        return fn.apply(that, arguments);
    };
};






var $e9bfb250699153a3$exports = {};

$e9bfb250699153a3$exports = $b99e87fedb7f9467$exports([].slice);



var $5910df70081542d5$exports = {};
var $5910df70081542d5$var$$TypeError = TypeError;
$5910df70081542d5$exports = function(passed, required) {
    if (passed < required) throw $5910df70081542d5$var$$TypeError("Not enough arguments");
    return passed;
};


var $75077f2147dc4156$exports = {};

$75077f2147dc4156$exports = /(?:ipad|iphone|ipod).*applewebkit/i.test($e03d2f0a543fae83$exports);



var $575783586a4147bf$var$set = $e075570e1515f83a$exports.setImmediate;
var $575783586a4147bf$var$clear = $e075570e1515f83a$exports.clearImmediate;
var $575783586a4147bf$var$process = $e075570e1515f83a$exports.process;
var $575783586a4147bf$var$Dispatch = $e075570e1515f83a$exports.Dispatch;
var $575783586a4147bf$var$Function = $e075570e1515f83a$exports.Function;
var $575783586a4147bf$var$MessageChannel = $e075570e1515f83a$exports.MessageChannel;
var $575783586a4147bf$var$String = $e075570e1515f83a$exports.String;
var $575783586a4147bf$var$counter = 0;
var $575783586a4147bf$var$queue = {};
var $575783586a4147bf$var$ONREADYSTATECHANGE = "onreadystatechange";
var $575783586a4147bf$var$location, $575783586a4147bf$var$defer, $575783586a4147bf$var$channel, $575783586a4147bf$var$port;
try {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    $575783586a4147bf$var$location = $e075570e1515f83a$exports.location;
} catch (error) {}
var $575783586a4147bf$var$run = function run(id) {
    if ($61bec295a3ed8110$exports($575783586a4147bf$var$queue, id)) {
        var fn = $575783586a4147bf$var$queue[id];
        delete $575783586a4147bf$var$queue[id];
        fn();
    }
};
var $575783586a4147bf$var$runner = function runner(id) {
    return function() {
        $575783586a4147bf$var$run(id);
    };
};
var $575783586a4147bf$var$listener = function listener(event) {
    $575783586a4147bf$var$run(event.data);
};
var $575783586a4147bf$var$post = function post(id) {
    // old engines have not location.origin
    $e075570e1515f83a$exports.postMessage($575783586a4147bf$var$String(id), $575783586a4147bf$var$location.protocol + "//" + $575783586a4147bf$var$location.host);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!$575783586a4147bf$var$set || !$575783586a4147bf$var$clear) {
    $575783586a4147bf$var$set = function setImmediate(handler) {
        $5910df70081542d5$exports(arguments.length, 1);
        var fn = $7df38799cd0a811e$exports(handler) ? handler : $575783586a4147bf$var$Function(handler);
        var args = $e9bfb250699153a3$exports(arguments, 1);
        $575783586a4147bf$var$queue[++$575783586a4147bf$var$counter] = function() {
            $bdbace7434427eed$exports(fn, undefined, args);
        };
        $575783586a4147bf$var$defer($575783586a4147bf$var$counter);
        return $575783586a4147bf$var$counter;
    };
    $575783586a4147bf$var$clear = function clearImmediate(id) {
        delete $575783586a4147bf$var$queue[id];
    };
    // Node.js 0.8-
    if ($85b7834bdf67b5aa$exports) $575783586a4147bf$var$defer = function defer(id) {
        $575783586a4147bf$var$process.nextTick($575783586a4147bf$var$runner(id));
    };
    else if ($575783586a4147bf$var$Dispatch && $575783586a4147bf$var$Dispatch.now) $575783586a4147bf$var$defer = function defer(id) {
        $575783586a4147bf$var$Dispatch.now($575783586a4147bf$var$runner(id));
    };
    else if ($575783586a4147bf$var$MessageChannel && !$75077f2147dc4156$exports) {
        $575783586a4147bf$var$channel = new $575783586a4147bf$var$MessageChannel();
        $575783586a4147bf$var$port = $575783586a4147bf$var$channel.port2;
        $575783586a4147bf$var$channel.port1.onmessage = $575783586a4147bf$var$listener;
        $575783586a4147bf$var$defer = $c309ae6e8e9c3ac2$exports($575783586a4147bf$var$port.postMessage, $575783586a4147bf$var$port);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if ($e075570e1515f83a$exports.addEventListener && $7df38799cd0a811e$exports($e075570e1515f83a$exports.postMessage) && !$e075570e1515f83a$exports.importScripts && $575783586a4147bf$var$location && $575783586a4147bf$var$location.protocol !== "file:" && !$bee90e79ed13c4bc$exports($575783586a4147bf$var$post)) {
        $575783586a4147bf$var$defer = $575783586a4147bf$var$post;
        $e075570e1515f83a$exports.addEventListener("message", $575783586a4147bf$var$listener, false);
    // IE8-
    } else if ($575783586a4147bf$var$ONREADYSTATECHANGE in $fbc423d8fb42f05f$exports("script")) $575783586a4147bf$var$defer = function defer(id) {
        $f4cb06efadd6219e$exports.appendChild($fbc423d8fb42f05f$exports("script"))[$575783586a4147bf$var$ONREADYSTATECHANGE] = function() {
            $f4cb06efadd6219e$exports.removeChild(this);
            $575783586a4147bf$var$run(id);
        };
    };
    else $575783586a4147bf$var$defer = function defer(id) {
        setTimeout($575783586a4147bf$var$runner(id), 0);
    };
}
$575783586a4147bf$exports = {
    set: $575783586a4147bf$var$set,
    clear: $575783586a4147bf$var$clear
};


var $a9bc2877428f0af0$require$task = $575783586a4147bf$exports.set;
var $7e5821a17af0c56d$exports = {};



var $7e5821a17af0c56d$require$getOwnPropertyDescriptor = $69e9fab4dde2baf4$export$2d1720544b23b823;

var $7e5821a17af0c56d$require$macrotask = $575783586a4147bf$exports.set;

var $bad1650e04f34d11$exports = {};


$bad1650e04f34d11$exports = /ipad|iphone|ipod/i.test($e03d2f0a543fae83$exports) && $e075570e1515f83a$exports.Pebble !== undefined;


var $143c70f1ede20a21$exports = {};

$143c70f1ede20a21$exports = /web0s(?!.*chrome)/i.test($e03d2f0a543fae83$exports);



var $7e5821a17af0c56d$var$MutationObserver = $e075570e1515f83a$exports.MutationObserver || $e075570e1515f83a$exports.WebKitMutationObserver;
var $7e5821a17af0c56d$var$document = $e075570e1515f83a$exports.document;
var $7e5821a17af0c56d$var$process = $e075570e1515f83a$exports.process;
var $7e5821a17af0c56d$var$Promise = $e075570e1515f83a$exports.Promise;
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var $7e5821a17af0c56d$var$queueMicrotaskDescriptor = $7e5821a17af0c56d$require$getOwnPropertyDescriptor($e075570e1515f83a$exports, "queueMicrotask");
var $7e5821a17af0c56d$var$queueMicrotask = $7e5821a17af0c56d$var$queueMicrotaskDescriptor && $7e5821a17af0c56d$var$queueMicrotaskDescriptor.value;
var $7e5821a17af0c56d$var$flush, $7e5821a17af0c56d$var$head, $7e5821a17af0c56d$var$last, $7e5821a17af0c56d$var$notify, $7e5821a17af0c56d$var$toggle, $7e5821a17af0c56d$var$node, $7e5821a17af0c56d$var$promise, $7e5821a17af0c56d$var$then;
// modern engines have queueMicrotask method
if (!$7e5821a17af0c56d$var$queueMicrotask) {
    $7e5821a17af0c56d$var$flush = function flush() {
        var parent, fn;
        if ($85b7834bdf67b5aa$exports && (parent = $7e5821a17af0c56d$var$process.domain)) parent.exit();
        while($7e5821a17af0c56d$var$head){
            fn = $7e5821a17af0c56d$var$head.fn;
            $7e5821a17af0c56d$var$head = $7e5821a17af0c56d$var$head.next;
            try {
                fn();
            } catch (error) {
                if ($7e5821a17af0c56d$var$head) $7e5821a17af0c56d$var$notify();
                else $7e5821a17af0c56d$var$last = undefined;
                throw error;
            }
        }
        $7e5821a17af0c56d$var$last = undefined;
        if (parent) parent.enter();
    };
    // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (!$75077f2147dc4156$exports && !$85b7834bdf67b5aa$exports && !$143c70f1ede20a21$exports && $7e5821a17af0c56d$var$MutationObserver && $7e5821a17af0c56d$var$document) {
        $7e5821a17af0c56d$var$toggle = true;
        $7e5821a17af0c56d$var$node = $7e5821a17af0c56d$var$document.createTextNode("");
        new $7e5821a17af0c56d$var$MutationObserver($7e5821a17af0c56d$var$flush).observe($7e5821a17af0c56d$var$node, {
            characterData: true
        });
        $7e5821a17af0c56d$var$notify = function notify() {
            $7e5821a17af0c56d$var$node.data = $7e5821a17af0c56d$var$toggle = !$7e5821a17af0c56d$var$toggle;
        };
    // environments with maybe non-completely correct, but existent Promise
    } else if (!$bad1650e04f34d11$exports && $7e5821a17af0c56d$var$Promise && $7e5821a17af0c56d$var$Promise.resolve) {
        // Promise.resolve without an argument throws an error in LG WebOS 2
        $7e5821a17af0c56d$var$promise = $7e5821a17af0c56d$var$Promise.resolve(undefined);
        // workaround of WebKit ~ iOS Safari 10.1 bug
        $7e5821a17af0c56d$var$promise.constructor = $7e5821a17af0c56d$var$Promise;
        $7e5821a17af0c56d$var$then = $c309ae6e8e9c3ac2$exports($7e5821a17af0c56d$var$promise.then, $7e5821a17af0c56d$var$promise);
        $7e5821a17af0c56d$var$notify = function notify() {
            $7e5821a17af0c56d$var$then($7e5821a17af0c56d$var$flush);
        };
    // Node.js without promises
    } else if ($85b7834bdf67b5aa$exports) $7e5821a17af0c56d$var$notify = function notify() {
        $7e5821a17af0c56d$var$process.nextTick($7e5821a17af0c56d$var$flush);
    };
    else {
        // strange IE + webpack dev server bug - use .bind(global)
        $7e5821a17af0c56d$require$macrotask = $c309ae6e8e9c3ac2$exports($7e5821a17af0c56d$require$macrotask, $e075570e1515f83a$exports);
        $7e5821a17af0c56d$var$notify = function notify() {
            $7e5821a17af0c56d$require$macrotask($7e5821a17af0c56d$var$flush);
        };
    }
}
$7e5821a17af0c56d$exports = $7e5821a17af0c56d$var$queueMicrotask || function(fn) {
    var task = {
        fn: fn,
        next: undefined
    };
    if ($7e5821a17af0c56d$var$last) $7e5821a17af0c56d$var$last.next = task;
    if (!$7e5821a17af0c56d$var$head) {
        $7e5821a17af0c56d$var$head = task;
        $7e5821a17af0c56d$var$notify();
    }
    $7e5821a17af0c56d$var$last = task;
};


var $c6d755aaa274548e$exports = {};

$c6d755aaa274548e$exports = function(a, b) {
    var console = $e075570e1515f83a$exports.console;
    if (console && console.error) arguments.length == 1 ? console.error(a) : console.error(a, b);
};


var $2d532e7c51907b0e$exports = {};
$2d532e7c51907b0e$exports = function(exec) {
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


var $eeb4f6a1cb081ed2$exports = {};
var $eeb4f6a1cb081ed2$var$Queue = function Queue() {
    this.head = null;
    this.tail = null;
};
$eeb4f6a1cb081ed2$var$Queue.prototype = {
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
$eeb4f6a1cb081ed2$exports = $eeb4f6a1cb081ed2$var$Queue;



var $92ce6f0b7cd9b3ea$exports = {};

$92ce6f0b7cd9b3ea$exports = $e075570e1515f83a$exports.Promise;


var $a064de21f1c32a70$exports = {};






var $7cc6a642f76c2800$exports = {};
$7cc6a642f76c2800$exports = typeof window == "object" && typeof Deno != "object";




var $a064de21f1c32a70$var$NativePromisePrototype = $92ce6f0b7cd9b3ea$exports && $92ce6f0b7cd9b3ea$exports.prototype;
var $a064de21f1c32a70$var$SPECIES = $a7ee708de5d3202b$exports("species");
var $a064de21f1c32a70$var$SUBCLASSING = false;
var $a064de21f1c32a70$var$NATIVE_PROMISE_REJECTION_EVENT = $7df38799cd0a811e$exports($e075570e1515f83a$exports.PromiseRejectionEvent);
var $a064de21f1c32a70$var$FORCED_PROMISE_CONSTRUCTOR = $03cf3a79bb999ca0$exports("Promise", function() {
    var PROMISE_CONSTRUCTOR_SOURCE = $f15f54516098e2f2$exports($92ce6f0b7cd9b3ea$exports);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String($92ce6f0b7cd9b3ea$exports);
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (!GLOBAL_CORE_JS_PROMISE && $e2cf3e7cf188c9cf$exports === 66) return true;
    // We need Promise#{ catch, finally } in the pure version for preventing prototype pollution
    if ($fb757cc41bbad0c2$exports && !($a064de21f1c32a70$var$NativePromisePrototype["catch"] && $a064de21f1c32a70$var$NativePromisePrototype["finally"])) return true;
    // We can't use @@species feature detection in V8 since it causes
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if ($e2cf3e7cf188c9cf$exports >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
    // Detect correctness of subclassing with @@species support
    var promise = new $92ce6f0b7cd9b3ea$exports(function(resolve) {
        resolve(1);
    });
    var FakePromise = function FakePromise(exec) {
        exec(function() {}, function() {});
    };
    var constructor = promise.constructor = {};
    constructor[$a064de21f1c32a70$var$SPECIES] = FakePromise;
    $a064de21f1c32a70$var$SUBCLASSING = promise.then(function() {}) instanceof FakePromise;
    if (!$a064de21f1c32a70$var$SUBCLASSING) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return !GLOBAL_CORE_JS_PROMISE && $7cc6a642f76c2800$exports && !$a064de21f1c32a70$var$NATIVE_PROMISE_REJECTION_EVENT;
});
$a064de21f1c32a70$exports = {
    CONSTRUCTOR: $a064de21f1c32a70$var$FORCED_PROMISE_CONSTRUCTOR,
    REJECTION_EVENT: $a064de21f1c32a70$var$NATIVE_PROMISE_REJECTION_EVENT,
    SUBCLASSING: $a064de21f1c32a70$var$SUBCLASSING
};


// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
var $471e6d5ebdbabf9f$export$2d1720544b23b823;
"use strict";

var $471e6d5ebdbabf9f$var$PromiseCapability = function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError("Bad Promise constructor");
        resolve = $$resolve;
        reject = $$reject;
    });
    this.resolve = $502bd7745c884545$exports(resolve);
    this.reject = $502bd7745c884545$exports(reject);
};
$471e6d5ebdbabf9f$export$2d1720544b23b823 = function(C) {
    return new $471e6d5ebdbabf9f$var$PromiseCapability(C);
};


var $a9bc2877428f0af0$var$PROMISE = "Promise";
var $a9bc2877428f0af0$var$FORCED_PROMISE_CONSTRUCTOR = $a064de21f1c32a70$exports.CONSTRUCTOR;
var $a9bc2877428f0af0$var$NATIVE_PROMISE_REJECTION_EVENT = $a064de21f1c32a70$exports.REJECTION_EVENT;
var $a9bc2877428f0af0$var$NATIVE_PROMISE_SUBCLASSING = $a064de21f1c32a70$exports.SUBCLASSING;
var $a9bc2877428f0af0$var$getInternalPromiseState = $2161f7fbe20907d3$exports.getterFor($a9bc2877428f0af0$var$PROMISE);
var $a9bc2877428f0af0$var$setInternalState = $2161f7fbe20907d3$exports.set;
var $a9bc2877428f0af0$var$NativePromisePrototype = $92ce6f0b7cd9b3ea$exports && $92ce6f0b7cd9b3ea$exports.prototype;
var $a9bc2877428f0af0$var$PromiseConstructor = $92ce6f0b7cd9b3ea$exports;
var $a9bc2877428f0af0$var$PromisePrototype = $a9bc2877428f0af0$var$NativePromisePrototype;
var $a9bc2877428f0af0$var$TypeError = $e075570e1515f83a$exports.TypeError;
var $a9bc2877428f0af0$var$document = $e075570e1515f83a$exports.document;
var $a9bc2877428f0af0$var$process = $e075570e1515f83a$exports.process;
var $a9bc2877428f0af0$var$newPromiseCapability = $471e6d5ebdbabf9f$export$2d1720544b23b823;
var $a9bc2877428f0af0$var$newGenericPromiseCapability = $a9bc2877428f0af0$var$newPromiseCapability;
var $a9bc2877428f0af0$var$DISPATCH_EVENT = !!($a9bc2877428f0af0$var$document && $a9bc2877428f0af0$var$document.createEvent && $e075570e1515f83a$exports.dispatchEvent);
var $a9bc2877428f0af0$var$UNHANDLED_REJECTION = "unhandledrejection";
var $a9bc2877428f0af0$var$REJECTION_HANDLED = "rejectionhandled";
var $a9bc2877428f0af0$var$PENDING = 0;
var $a9bc2877428f0af0$var$FULFILLED = 1;
var $a9bc2877428f0af0$var$REJECTED = 2;
var $a9bc2877428f0af0$var$HANDLED = 1;
var $a9bc2877428f0af0$var$UNHANDLED = 2;
var $a9bc2877428f0af0$var$Internal, $a9bc2877428f0af0$var$OwnPromiseCapability, $a9bc2877428f0af0$var$PromiseWrapper, $a9bc2877428f0af0$var$nativeThen;
// helpers
var $a9bc2877428f0af0$var$isThenable = function isThenable(it) {
    var then;
    return $bd9e743992db6f49$exports(it) && $7df38799cd0a811e$exports(then = it.then) ? then : false;
};
var $a9bc2877428f0af0$var$callReaction = function callReaction(reaction, state) {
    var value = state.value;
    var ok = state.state == $a9bc2877428f0af0$var$FULFILLED;
    var handler = ok ? reaction.ok : reaction.fail;
    var resolve = reaction.resolve;
    var reject = reaction.reject;
    var domain = reaction.domain;
    var result, then, exited;
    try {
        if (handler) {
            if (!ok) {
                if (state.rejection === $a9bc2877428f0af0$var$UNHANDLED) $a9bc2877428f0af0$var$onHandleUnhandled(state);
                state.rejection = $a9bc2877428f0af0$var$HANDLED;
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
            if (result === reaction.promise) reject($a9bc2877428f0af0$var$TypeError("Promise-chain cycle"));
            else if (then = $a9bc2877428f0af0$var$isThenable(result)) $809d5ec09fe529f6$exports(then, result, resolve, reject);
            else resolve(result);
        } else reject(value);
    } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
    }
};
var $a9bc2877428f0af0$var$notify = function notify(state, isReject) {
    if (state.notified) return;
    state.notified = true;
    $7e5821a17af0c56d$exports(function() {
        var reactions = state.reactions;
        var reaction;
        while(reaction = reactions.get())$a9bc2877428f0af0$var$callReaction(reaction, state);
        state.notified = false;
        if (isReject && !state.rejection) $a9bc2877428f0af0$var$onUnhandled(state);
    });
};
var $a9bc2877428f0af0$var$dispatchEvent = function dispatchEvent(name, promise, reason) {
    var event, handler;
    if ($a9bc2877428f0af0$var$DISPATCH_EVENT) {
        event = $a9bc2877428f0af0$var$document.createEvent("Event");
        event.promise = promise;
        event.reason = reason;
        event.initEvent(name, false, true);
        $e075570e1515f83a$exports.dispatchEvent(event);
    } else event = {
        promise: promise,
        reason: reason
    };
    if (!$a9bc2877428f0af0$var$NATIVE_PROMISE_REJECTION_EVENT && (handler = $e075570e1515f83a$exports["on" + name])) handler(event);
    else if (name === $a9bc2877428f0af0$var$UNHANDLED_REJECTION) $c6d755aaa274548e$exports("Unhandled promise rejection", reason);
};
var $a9bc2877428f0af0$var$onUnhandled = function onUnhandled(state) {
    $809d5ec09fe529f6$exports($a9bc2877428f0af0$require$task, $e075570e1515f83a$exports, function() {
        var promise = state.facade;
        var value = state.value;
        var IS_UNHANDLED = $a9bc2877428f0af0$var$isUnhandled(state);
        var result;
        if (IS_UNHANDLED) {
            result = $2d532e7c51907b0e$exports(function() {
                if ($85b7834bdf67b5aa$exports) $a9bc2877428f0af0$var$process.emit("unhandledRejection", value, promise);
                else $a9bc2877428f0af0$var$dispatchEvent($a9bc2877428f0af0$var$UNHANDLED_REJECTION, promise, value);
            });
            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
            state.rejection = $85b7834bdf67b5aa$exports || $a9bc2877428f0af0$var$isUnhandled(state) ? $a9bc2877428f0af0$var$UNHANDLED : $a9bc2877428f0af0$var$HANDLED;
            if (result.error) throw result.value;
        }
    });
};
var $a9bc2877428f0af0$var$isUnhandled = function isUnhandled(state) {
    return state.rejection !== $a9bc2877428f0af0$var$HANDLED && !state.parent;
};
var $a9bc2877428f0af0$var$onHandleUnhandled = function onHandleUnhandled(state) {
    $809d5ec09fe529f6$exports($a9bc2877428f0af0$require$task, $e075570e1515f83a$exports, function() {
        var promise = state.facade;
        if ($85b7834bdf67b5aa$exports) $a9bc2877428f0af0$var$process.emit("rejectionHandled", promise);
        else $a9bc2877428f0af0$var$dispatchEvent($a9bc2877428f0af0$var$REJECTION_HANDLED, promise, state.value);
    });
};
var $a9bc2877428f0af0$var$bind = function bind(fn, state, unwrap) {
    return function(value) {
        fn(state, value, unwrap);
    };
};
var $a9bc2877428f0af0$var$internalReject = function internalReject(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = $a9bc2877428f0af0$var$REJECTED;
    $a9bc2877428f0af0$var$notify(state, true);
};
var $a9bc2877428f0af0$var$internalResolve = function(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
        if (state.facade === value) throw $a9bc2877428f0af0$var$TypeError("Promise can't be resolved itself");
        var then = $a9bc2877428f0af0$var$isThenable(value);
        if (then) $7e5821a17af0c56d$exports(function() {
            var wrapper = {
                done: false
            };
            try {
                $809d5ec09fe529f6$exports(then, value, $a9bc2877428f0af0$var$bind($a9bc2877428f0af0$var$internalResolve, wrapper, state), $a9bc2877428f0af0$var$bind($a9bc2877428f0af0$var$internalReject, wrapper, state));
            } catch (error) {
                $a9bc2877428f0af0$var$internalReject(wrapper, error, state);
            }
        });
        else {
            state.value = value;
            state.state = $a9bc2877428f0af0$var$FULFILLED;
            $a9bc2877428f0af0$var$notify(state, false);
        }
    } catch (error) {
        $a9bc2877428f0af0$var$internalReject({
            done: false
        }, error, state);
    }
};
// constructor polyfill
if ($a9bc2877428f0af0$var$FORCED_PROMISE_CONSTRUCTOR) {
    // 25.4.3.1 Promise(executor)
    $a9bc2877428f0af0$var$PromiseConstructor = function Promise(executor) {
        $6cffad1a0850d6a8$exports(this, $a9bc2877428f0af0$var$PromisePrototype);
        $502bd7745c884545$exports(executor);
        $809d5ec09fe529f6$exports($a9bc2877428f0af0$var$Internal, this);
        var state = $a9bc2877428f0af0$var$getInternalPromiseState(this);
        try {
            executor($a9bc2877428f0af0$var$bind($a9bc2877428f0af0$var$internalResolve, state), $a9bc2877428f0af0$var$bind($a9bc2877428f0af0$var$internalReject, state));
        } catch (error) {
            $a9bc2877428f0af0$var$internalReject(state, error);
        }
    };
    $a9bc2877428f0af0$var$PromisePrototype = $a9bc2877428f0af0$var$PromiseConstructor.prototype;
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    $a9bc2877428f0af0$var$Internal = function Promise(executor) {
        $a9bc2877428f0af0$var$setInternalState(this, {
            type: $a9bc2877428f0af0$var$PROMISE,
            done: false,
            notified: false,
            parent: false,
            reactions: new $eeb4f6a1cb081ed2$exports(),
            rejection: false,
            state: $a9bc2877428f0af0$var$PENDING,
            value: undefined
        });
    };
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    $a9bc2877428f0af0$var$Internal.prototype = $2313d927b29dd93b$exports($a9bc2877428f0af0$var$PromisePrototype, "then", function then(onFulfilled, onRejected) {
        var state = $a9bc2877428f0af0$var$getInternalPromiseState(this);
        var reaction = $a9bc2877428f0af0$var$newPromiseCapability($cca7b5dfaca49fe4$exports(this, $a9bc2877428f0af0$var$PromiseConstructor));
        state.parent = true;
        reaction.ok = $7df38799cd0a811e$exports(onFulfilled) ? onFulfilled : true;
        reaction.fail = $7df38799cd0a811e$exports(onRejected) && onRejected;
        reaction.domain = $85b7834bdf67b5aa$exports ? $a9bc2877428f0af0$var$process.domain : undefined;
        if (state.state == $a9bc2877428f0af0$var$PENDING) state.reactions.add(reaction);
        else $7e5821a17af0c56d$exports(function() {
            $a9bc2877428f0af0$var$callReaction(reaction, state);
        });
        return reaction.promise;
    });
    $a9bc2877428f0af0$var$OwnPromiseCapability = function OwnPromiseCapability() {
        var promise = new $a9bc2877428f0af0$var$Internal();
        var state = $a9bc2877428f0af0$var$getInternalPromiseState(promise);
        this.promise = promise;
        this.resolve = $a9bc2877428f0af0$var$bind($a9bc2877428f0af0$var$internalResolve, state);
        this.reject = $a9bc2877428f0af0$var$bind($a9bc2877428f0af0$var$internalReject, state);
    };
    $471e6d5ebdbabf9f$export$2d1720544b23b823 = $a9bc2877428f0af0$var$newPromiseCapability = function newPromiseCapability(C) {
        return C === $a9bc2877428f0af0$var$PromiseConstructor || C === $a9bc2877428f0af0$var$PromiseWrapper ? new $a9bc2877428f0af0$var$OwnPromiseCapability(C) : $a9bc2877428f0af0$var$newGenericPromiseCapability(C);
    };
    if (!$fb757cc41bbad0c2$exports && $7df38799cd0a811e$exports($92ce6f0b7cd9b3ea$exports) && $a9bc2877428f0af0$var$NativePromisePrototype !== Object.prototype) {
        $a9bc2877428f0af0$var$nativeThen = $a9bc2877428f0af0$var$NativePromisePrototype.then;
        if (!$a9bc2877428f0af0$var$NATIVE_PROMISE_SUBCLASSING) // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        $2313d927b29dd93b$exports($a9bc2877428f0af0$var$NativePromisePrototype, "then", function then(onFulfilled, onRejected) {
            var that = this;
            return new $a9bc2877428f0af0$var$PromiseConstructor(function(resolve, reject) {
                $809d5ec09fe529f6$exports($a9bc2877428f0af0$var$nativeThen, that, resolve, reject);
            }).then(onFulfilled, onRejected);
        // https://github.com/zloirock/core-js/issues/640
        }, {
            unsafe: true
        });
        // make `.constructor === Promise` work for native promise-based APIs
        try {
            delete $a9bc2877428f0af0$var$NativePromisePrototype.constructor;
        } catch (error) {}
        // make `instanceof Promise` work for native promise-based APIs
        if ($c750e886230fd7b8$exports) $c750e886230fd7b8$exports($a9bc2877428f0af0$var$NativePromisePrototype, $a9bc2877428f0af0$var$PromisePrototype);
    }
}
$ed212ae7182386e3$exports({
    global: true,
    constructor: true,
    wrap: true,
    forced: $a9bc2877428f0af0$var$FORCED_PROMISE_CONSTRUCTOR
}, {
    Promise: $a9bc2877428f0af0$var$PromiseConstructor
});
$41cc5bde125d6ca6$exports($a9bc2877428f0af0$var$PromiseConstructor, $a9bc2877428f0af0$var$PROMISE, false, true);
$c0290f33b778521f$exports($a9bc2877428f0af0$var$PROMISE);


"use strict";





var $f4ed9274d1a54731$exports = {};




var $c29ba30da3c388df$exports = {};


var $c29ba30da3c388df$var$ITERATOR = $a7ee708de5d3202b$exports("iterator");
var $c29ba30da3c388df$var$ArrayPrototype = Array.prototype;
// check on default Array iterator
$c29ba30da3c388df$exports = function(it) {
    return it !== undefined && ($d09e3968208bfe82$exports.Array === it || $c29ba30da3c388df$var$ArrayPrototype[$c29ba30da3c388df$var$ITERATOR] === it);
};




var $32616e38a87604fa$exports = {};




var $d954f6360a464a20$exports = {};




var $d954f6360a464a20$var$ITERATOR = $a7ee708de5d3202b$exports("iterator");
$d954f6360a464a20$exports = function(it) {
    if (it != undefined) return $cf14a838a92511d8$exports(it, $d954f6360a464a20$var$ITERATOR) || $cf14a838a92511d8$exports(it, "@@iterator") || $d09e3968208bfe82$exports[$3b7246e6890640c6$exports(it)];
};


var $32616e38a87604fa$var$$TypeError = TypeError;
$32616e38a87604fa$exports = function(argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? $d954f6360a464a20$exports(argument) : usingIterator;
    if ($502bd7745c884545$exports(iteratorMethod)) return $604e9ea1d4346234$exports($809d5ec09fe529f6$exports(iteratorMethod, argument));
    throw $32616e38a87604fa$var$$TypeError($24add494ff607948$exports(argument) + " is not iterable");
};



var $a45c4426d33b22ad$exports = {};



$a45c4426d33b22ad$exports = function(iterator, kind, value) {
    var innerResult, innerError;
    $604e9ea1d4346234$exports(iterator);
    try {
        innerResult = $cf14a838a92511d8$exports(iterator, "return");
        if (!innerResult) {
            if (kind === "throw") throw value;
            return value;
        }
        innerResult = $809d5ec09fe529f6$exports(innerResult, iterator);
    } catch (error) {
        innerError = true;
        innerResult = error;
    }
    if (kind === "throw") throw value;
    if (innerError) throw innerResult;
    $604e9ea1d4346234$exports(innerResult);
    return value;
};


var $f4ed9274d1a54731$var$$TypeError = TypeError;
var $f4ed9274d1a54731$var$Result = function Result(stopped, result) {
    this.stopped = stopped;
    this.result = result;
};
var $f4ed9274d1a54731$var$ResultPrototype = $f4ed9274d1a54731$var$Result.prototype;
$f4ed9274d1a54731$exports = function(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = $c309ae6e8e9c3ac2$exports(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function stop(condition) {
        if (iterator) $a45c4426d33b22ad$exports(iterator, "normal", condition);
        return new $f4ed9274d1a54731$var$Result(true, condition);
    };
    var callFn = function callFn(value) {
        if (AS_ENTRIES) {
            $604e9ea1d4346234$exports(value);
            return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
        }
        return INTERRUPTED ? fn(value, stop) : fn(value);
    };
    if (IS_ITERATOR) iterator = iterable;
    else {
        iterFn = $d954f6360a464a20$exports(iterable);
        if (!iterFn) throw $f4ed9274d1a54731$var$$TypeError($24add494ff607948$exports(iterable) + " is not iterable");
        // optimisation for array iterators
        if ($c29ba30da3c388df$exports(iterFn)) {
            for(index = 0, length = $e6ac72082985015d$exports(iterable); length > index; index++){
                result = callFn(iterable[index]);
                if (result && $cb121e5a42e46f06$exports($f4ed9274d1a54731$var$ResultPrototype, result)) return result;
            }
            return new $f4ed9274d1a54731$var$Result(false);
        }
        iterator = $32616e38a87604fa$exports(iterable, iterFn);
    }
    next = iterator.next;
    while(!(step = $809d5ec09fe529f6$exports(next, iterator)).done){
        try {
            result = callFn(step.value);
        } catch (error) {
            $a45c4426d33b22ad$exports(iterator, "throw", error);
        }
        if (typeof result == "object" && result && $cb121e5a42e46f06$exports($f4ed9274d1a54731$var$ResultPrototype, result)) return result;
    }
    return new $f4ed9274d1a54731$var$Result(false);
};


var $d355f5f36d5df584$exports = {};

var $f04aa014a47dded5$exports = {};

var $f04aa014a47dded5$var$ITERATOR = $a7ee708de5d3202b$exports("iterator");
var $f04aa014a47dded5$var$SAFE_CLOSING = false;
try {
    var $f04aa014a47dded5$var$called = 0;
    var $f04aa014a47dded5$var$iteratorWithReturn = {
        next: function next() {
            return {
                done: !!$f04aa014a47dded5$var$called++
            };
        },
        "return": function() {
            $f04aa014a47dded5$var$SAFE_CLOSING = true;
        }
    };
    $f04aa014a47dded5$var$iteratorWithReturn[$f04aa014a47dded5$var$ITERATOR] = function() {
        return this;
    };
    // eslint-disable-next-line es-x/no-array-from, no-throw-literal -- required for testing
    Array.from($f04aa014a47dded5$var$iteratorWithReturn, function() {
        throw 2;
    });
} catch (error) {}
$f04aa014a47dded5$exports = function(exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !$f04aa014a47dded5$var$SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
        var object = {};
        object[$f04aa014a47dded5$var$ITERATOR] = function() {
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



var $d355f5f36d5df584$require$FORCED_PROMISE_CONSTRUCTOR = $a064de21f1c32a70$exports.CONSTRUCTOR;
$d355f5f36d5df584$exports = $d355f5f36d5df584$require$FORCED_PROMISE_CONSTRUCTOR || !$f04aa014a47dded5$exports(function(iterable) {
    $92ce6f0b7cd9b3ea$exports.all(iterable).then(undefined, function() {});
});


// `Promise.all` method
// https://tc39.es/ecma262/#sec-promise.all
$ed212ae7182386e3$exports({
    target: "Promise",
    stat: true,
    forced: $d355f5f36d5df584$exports
}, {
    all: function all(iterable) {
        var C = this;
        var capability = $471e6d5ebdbabf9f$export$2d1720544b23b823(C);
        var resolve = capability.resolve;
        var reject = capability.reject;
        var result = $2d532e7c51907b0e$exports(function() {
            var $promiseResolve = $502bd7745c884545$exports(C.resolve);
            var values = [];
            var counter = 0;
            var remaining = 1;
            $f4ed9274d1a54731$exports(iterable, function(promise) {
                var index = counter++;
                var alreadyCalled = false;
                remaining++;
                $809d5ec09fe529f6$exports($promiseResolve, C, promise).then(function(value) {
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


"use strict";



var $fbec98d9664caa4f$require$FORCED_PROMISE_CONSTRUCTOR = $a064de21f1c32a70$exports.CONSTRUCTOR;




var $fbec98d9664caa4f$var$NativePromisePrototype = $92ce6f0b7cd9b3ea$exports && $92ce6f0b7cd9b3ea$exports.prototype;
// `Promise.prototype.catch` method
// https://tc39.es/ecma262/#sec-promise.prototype.catch
$ed212ae7182386e3$exports({
    target: "Promise",
    proto: true,
    forced: $fbec98d9664caa4f$require$FORCED_PROMISE_CONSTRUCTOR,
    real: true
}, {
    "catch": function(onRejected) {
        return this.then(undefined, onRejected);
    }
});
// makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
if (!$fb757cc41bbad0c2$exports && $7df38799cd0a811e$exports($92ce6f0b7cd9b3ea$exports)) {
    var $fbec98d9664caa4f$var$method = $415c070cc5ea0697$exports("Promise").prototype["catch"];
    if ($fbec98d9664caa4f$var$NativePromisePrototype["catch"] !== $fbec98d9664caa4f$var$method) $2313d927b29dd93b$exports($fbec98d9664caa4f$var$NativePromisePrototype, "catch", $fbec98d9664caa4f$var$method, {
        unsafe: true
    });
}


"use strict";







// `Promise.race` method
// https://tc39.es/ecma262/#sec-promise.race
$ed212ae7182386e3$exports({
    target: "Promise",
    stat: true,
    forced: $d355f5f36d5df584$exports
}, {
    race: function race(iterable) {
        var C = this;
        var capability = $471e6d5ebdbabf9f$export$2d1720544b23b823(C);
        var reject = capability.reject;
        var result = $2d532e7c51907b0e$exports(function() {
            var $promiseResolve = $502bd7745c884545$exports(C.resolve);
            $f4ed9274d1a54731$exports(iterable, function(promise) {
                $809d5ec09fe529f6$exports($promiseResolve, C, promise).then(capability.resolve, reject);
            });
        });
        if (result.error) reject(result.value);
        return capability.promise;
    }
});


"use strict";




var $8e423e91097cf359$require$FORCED_PROMISE_CONSTRUCTOR = $a064de21f1c32a70$exports.CONSTRUCTOR;
// `Promise.reject` method
// https://tc39.es/ecma262/#sec-promise.reject
$ed212ae7182386e3$exports({
    target: "Promise",
    stat: true,
    forced: $8e423e91097cf359$require$FORCED_PROMISE_CONSTRUCTOR
}, {
    reject: function reject(r) {
        var capability = $471e6d5ebdbabf9f$export$2d1720544b23b823(this);
        $809d5ec09fe529f6$exports(capability.reject, undefined, r);
        return capability.promise;
    }
});


"use strict";





var $69b2a1372beccbe2$require$FORCED_PROMISE_CONSTRUCTOR = $a064de21f1c32a70$exports.CONSTRUCTOR;
var $116b89304a4e2f55$exports = {};



$116b89304a4e2f55$exports = function(C, x) {
    $604e9ea1d4346234$exports(C);
    if ($bd9e743992db6f49$exports(x) && x.constructor === C) return x;
    var promiseCapability = $471e6d5ebdbabf9f$export$2d1720544b23b823(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
};


var $69b2a1372beccbe2$var$PromiseConstructorWrapper = $415c070cc5ea0697$exports("Promise");
var $69b2a1372beccbe2$var$CHECK_WRAPPER = $fb757cc41bbad0c2$exports && !$69b2a1372beccbe2$require$FORCED_PROMISE_CONSTRUCTOR;
// `Promise.resolve` method
// https://tc39.es/ecma262/#sec-promise.resolve
$ed212ae7182386e3$exports({
    target: "Promise",
    stat: true,
    forced: $fb757cc41bbad0c2$exports || $69b2a1372beccbe2$require$FORCED_PROMISE_CONSTRUCTOR
}, {
    resolve: function resolve(x) {
        return $116b89304a4e2f55$exports($69b2a1372beccbe2$var$CHECK_WRAPPER && this === $69b2a1372beccbe2$var$PromiseConstructorWrapper ? $92ce6f0b7cd9b3ea$exports : this, x);
    }
});




"use strict";









var $e6a970cca3d089cc$var$NativePromisePrototype = $92ce6f0b7cd9b3ea$exports && $92ce6f0b7cd9b3ea$exports.prototype;
// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var $e6a970cca3d089cc$var$NON_GENERIC = !!$92ce6f0b7cd9b3ea$exports && $bee90e79ed13c4bc$exports(function() {
    // eslint-disable-next-line unicorn/no-thenable -- required for testing
    $e6a970cca3d089cc$var$NativePromisePrototype["finally"].call({
        then: function then() {}
    }, function() {});
});
// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$ed212ae7182386e3$exports({
    target: "Promise",
    proto: true,
    real: true,
    forced: $e6a970cca3d089cc$var$NON_GENERIC
}, {
    "finally": function(onFinally) {
        var C = $cca7b5dfaca49fe4$exports(this, $415c070cc5ea0697$exports("Promise"));
        var isFunction = $7df38799cd0a811e$exports(onFinally);
        return this.then(isFunction ? function(x) {
            return $116b89304a4e2f55$exports(C, onFinally()).then(function() {
                return x;
            });
        } : onFinally, isFunction ? function(e) {
            return $116b89304a4e2f55$exports(C, onFinally()).then(function() {
                throw e;
            });
        } : onFinally);
    }
});
// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (!$fb757cc41bbad0c2$exports && $7df38799cd0a811e$exports($92ce6f0b7cd9b3ea$exports)) {
    var $e6a970cca3d089cc$var$method = $415c070cc5ea0697$exports("Promise").prototype["finally"];
    if ($e6a970cca3d089cc$var$NativePromisePrototype["finally"] !== $e6a970cca3d089cc$var$method) $2313d927b29dd93b$exports($e6a970cca3d089cc$var$NativePromisePrototype, "finally", $e6a970cca3d089cc$var$method, {
        unsafe: true
    });
}


"use strict";
var $16a33e010a637280$exports = {};


var $1f69a86d244b2a82$exports = {};

var $1f69a86d244b2a82$var$$String = String;
$1f69a86d244b2a82$exports = function(argument) {
    if ($3b7246e6890640c6$exports(argument) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
    return $1f69a86d244b2a82$var$$String(argument);
};



var $16a33e010a637280$var$charAt = $b99e87fedb7f9467$exports("".charAt);
var $16a33e010a637280$var$charCodeAt = $b99e87fedb7f9467$exports("".charCodeAt);
var $16a33e010a637280$var$stringSlice = $b99e87fedb7f9467$exports("".slice);
var $16a33e010a637280$var$createMethod = function createMethod(CONVERT_TO_STRING) {
    return function($this, pos) {
        var S = $1f69a86d244b2a82$exports($dcd70ef3cb4f66fe$exports($this));
        var position = $34456c77ef7f6ce8$exports(pos);
        var size = S.length;
        var first, second;
        if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : undefined;
        first = $16a33e010a637280$var$charCodeAt(S, position);
        return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = $16a33e010a637280$var$charCodeAt(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? $16a33e010a637280$var$charAt(S, position) : first : CONVERT_TO_STRING ? $16a33e010a637280$var$stringSlice(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
};
$16a33e010a637280$exports = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: $16a33e010a637280$var$createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: $16a33e010a637280$var$createMethod(true)
};


var $6c2ee68710c5a738$require$charAt = $16a33e010a637280$exports.charAt;



var $6c2ee68710c5a738$var$STRING_ITERATOR = "String Iterator";
var $6c2ee68710c5a738$var$setInternalState = $2161f7fbe20907d3$exports.set;
var $6c2ee68710c5a738$var$getInternalState = $2161f7fbe20907d3$exports.getterFor($6c2ee68710c5a738$var$STRING_ITERATOR);
// `String.prototype[@@iterator]` method
// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
$c2b7b73fd9973575$exports(String, "String", function(iterated) {
    $6c2ee68710c5a738$var$setInternalState(this, {
        type: $6c2ee68710c5a738$var$STRING_ITERATOR,
        string: $1f69a86d244b2a82$exports(iterated),
        index: 0
    });
// `%StringIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
    var state = $6c2ee68710c5a738$var$getInternalState(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return {
        value: undefined,
        done: true
    };
    point = $6c2ee68710c5a738$require$charAt(string, index);
    state.index += point.length;
    return {
        value: point,
        done: false
    };
});



var $07171bc1d771ebf6$exports = {};
// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
$07171bc1d771ebf6$exports = {
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


var $7fffd6112c2b8457$exports = {};

var $7fffd6112c2b8457$var$classList = $fbc423d8fb42f05f$exports("span").classList;
var $7fffd6112c2b8457$var$DOMTokenListPrototype = $7fffd6112c2b8457$var$classList && $7fffd6112c2b8457$var$classList.constructor && $7fffd6112c2b8457$var$classList.constructor.prototype;
$7fffd6112c2b8457$exports = $7fffd6112c2b8457$var$DOMTokenListPrototype === Object.prototype ? undefined : $7fffd6112c2b8457$var$DOMTokenListPrototype;





var $7893d59cd7694a16$var$ITERATOR = $a7ee708de5d3202b$exports("iterator");
var $7893d59cd7694a16$var$TO_STRING_TAG = $a7ee708de5d3202b$exports("toStringTag");
var $7893d59cd7694a16$var$ArrayValues = $6470aab53332fba1$exports.values;
var $7893d59cd7694a16$var$handlePrototype = function handlePrototype(CollectionPrototype, COLLECTION_NAME1) {
    if (CollectionPrototype) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[$7893d59cd7694a16$var$ITERATOR] !== $7893d59cd7694a16$var$ArrayValues) try {
            $ea9211ab365b22a8$exports(CollectionPrototype, $7893d59cd7694a16$var$ITERATOR, $7893d59cd7694a16$var$ArrayValues);
        } catch (error) {
            CollectionPrototype[$7893d59cd7694a16$var$ITERATOR] = $7893d59cd7694a16$var$ArrayValues;
        }
        if (!CollectionPrototype[$7893d59cd7694a16$var$TO_STRING_TAG]) $ea9211ab365b22a8$exports(CollectionPrototype, $7893d59cd7694a16$var$TO_STRING_TAG, COLLECTION_NAME1);
        if ($07171bc1d771ebf6$exports[COLLECTION_NAME1]) for(var METHOD_NAME in $6470aab53332fba1$exports){
            // some Chrome versions have non-configurable methods on DOMTokenList
            if (CollectionPrototype[METHOD_NAME] !== $6470aab53332fba1$exports[METHOD_NAME]) try {
                $ea9211ab365b22a8$exports(CollectionPrototype, METHOD_NAME, $6470aab53332fba1$exports[METHOD_NAME]);
            } catch (error) {
                CollectionPrototype[METHOD_NAME] = $6470aab53332fba1$exports[METHOD_NAME];
            }
        }
    }
};
for(var $7893d59cd7694a16$var$COLLECTION_NAME in $07171bc1d771ebf6$exports)$7893d59cd7694a16$var$handlePrototype($e075570e1515f83a$exports[$7893d59cd7694a16$var$COLLECTION_NAME] && $e075570e1515f83a$exports[$7893d59cd7694a16$var$COLLECTION_NAME].prototype, $7893d59cd7694a16$var$COLLECTION_NAME);
$7893d59cd7694a16$var$handlePrototype($7fffd6112c2b8457$exports, "DOMTokenList");



var $aT4ZK = parcelRequire("aT4ZK");
var $83f205a4fe0059ea$exports = {};
$83f205a4fe0059ea$exports = ":host {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n}\n\n:host > .container, :host > .container > .slide-outer-wrapper, :host > .container > .slide-outer-wrapper > .slide-inner-wrapper {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n}\n\n:host > .container > .slide-outer-wrapper > .slide-inner-wrapper > .slide {\n  --slide-background-color: black;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  background-color: var(--slide-background-color);\n  --fit-cover-max-width: auto;\n  --fit-cover-max-height: auto;\n  --fit-contain-min-width: auto;\n  --fit-contain-min-height: auto;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  position: absolute;\n}\n\n:host > .container > .slide-outer-wrapper > .slide-inner-wrapper > .slide > .content {\n  position: absolute;\n}\n\n:host > .container > .slide-outer-wrapper > .slide-inner-wrapper > .slide > .content.fit-cover {\n  max-width: var(--fit-contain-max-width);\n  max-height: var(--fit-contain-max-height);\n  min-width: 100%;\n  min-height: 100%;\n}\n\n:host > .container > .slide-outer-wrapper > .slide-inner-wrapper > .slide > .content.fit-contain {\n  min-width: var(--fit-contain-min-width);\n  min-height: var(--fit-contain-min-height);\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.preload-area {\n  display: none;\n}\n\n";



var $dzBOF = parcelRequire("dzBOF");

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $5sttm = parcelRequire("5sttm");

var $d67Ag = parcelRequire("d67Ag");

var $8oBD6 = parcelRequire("8oBD6");

var $aT4ZK = parcelRequire("aT4ZK");

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $3jaBu = parcelRequire("3jaBu");
var $b115edcffc1aaa37$var$Base = /*#__PURE__*/ function() {
    "use strict";
    function Base(state) {
        (0, $f3yih.default)(this, Base);
        (0, $3jaBu.default)(this, "state", void 0);
        this.state = state;
    }
    (0, $2x3qu.default)(Base, [
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
    return Base;
}();
var $b115edcffc1aaa37$export$2e2bcd8739ae039 = $b115edcffc1aaa37$var$Base;


/* class decorator for ensuring static elements on classes */ function $688e8b72d0f8e53f$export$77e1154930d99c3d() {
    return function(constructor) {
        return constructor;
    };
}
/**
 * This function can be used to check if the type of a variable has been
 * narrowed down to the `never` type, i.e. that at the time of calling this
 * function, all other possible types have been covered beforehand.
 * @param n The variable to check for the `never` type.
 */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
function $688e8b72d0f8e53f$export$57b5e12ee8bbcf57(n) {
    throw new TypeError("This function should never be called. If it has been called, your type narrowing is incomplete.");
}



var $4FUon = parcelRequire("4FUon");
var $d7c405f0daaed1ac$var$ajv = new (0, (/*@__PURE__*/$parcel$interopDefault($4FUon)))();
function $d7c405f0daaed1ac$export$edf3ed1163beae37(validate) {
    return function(data, dataCtx) {
        if (typeof dataCtx === "undefined") {
            if (validate(data)) return data;
        } else if (validate(data)) return data;
        throw new TypeError(JSON.stringify(validate.errors));
    };
}
function $d7c405f0daaed1ac$export$9ea1f4fe5062c6d(schema, _meta) {
    return $d7c405f0daaed1ac$export$edf3ed1163beae37(typeof _meta === "undefined" ? $d7c405f0daaed1ac$var$ajv.compile(schema) : $d7c405f0daaed1ac$var$ajv.compile(schema, _meta));
}


var $1e944b2475d0cfdb$var$preloadActionOptionsSchema = {
    type: "array",
    items: {
        type: "object",
        properties: {
            mimetype: {
                type: "string"
            },
            url: {
                type: "string"
            }
        },
        required: [
            "mimetype",
            "url"
        ]
    }
};
var $1e944b2475d0cfdb$var$validatePreloadActionOptions = (0, $d7c405f0daaed1ac$export$9ea1f4fe5062c6d)($1e944b2475d0cfdb$var$preloadActionOptionsSchema);
var $1e944b2475d0cfdb$var$PreloadAction = /*#__PURE__*/ function(Base1) {
    "use strict";
    (0, $5sttm.default)(PreloadAction, Base1);
    var _super = (0, $8oBD6.default)(PreloadAction);
    function PreloadAction(state) {
        (0, $f3yih.default)(this, PreloadAction);
        return _super.call(this, state);
    }
    (0, $2x3qu.default)(PreloadAction, [
        {
            key: "execute",
            value: function execute(items) {
                var _this = this;
                return (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee() {
                    var _preloader, preloader;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                ;
                                preloader = _this.state.preloader;
                                preloader.clear();
                                _ctx.next = 5;
                                return Promise.resolve();
                            case 5:
                                return _ctx.abrupt("return", (_preloader = preloader).preload.apply(_preloader, (0, $d67Ag.default)(items)));
                            case 6:
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
            value: function unpack(options) {
                return $1e944b2475d0cfdb$var$validatePreloadActionOptions(options);
            }
        }
    ]);
    return PreloadAction;
}((0, $b115edcffc1aaa37$export$2e2bcd8739ae039));
var $1e944b2475d0cfdb$export$2e2bcd8739ae039 = $1e944b2475d0cfdb$var$PreloadAction;



var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $3jaBu = parcelRequire("3jaBu");

var $d67Ag = parcelRequire("d67Ag");
/* eslint-disable no-console */ var $d9a71c7428eebb85$export$243e62d78d3b544d;
(function(LogLevel1) {
    LogLevel1[LogLevel1["OFF"] = 0] = "OFF";
    LogLevel1[LogLevel1["ERROR"] = 200] = "ERROR";
    LogLevel1[LogLevel1["WARN"] = 300] = "WARN";
    LogLevel1[LogLevel1["INFO"] = 400] = "INFO";
    LogLevel1[LogLevel1["DEBUG"] = 500] = "DEBUG";
    LogLevel1[LogLevel1["TRACE"] = 600] = "TRACE";
})($d9a71c7428eebb85$export$243e62d78d3b544d || ($d9a71c7428eebb85$export$243e62d78d3b544d = {}));
var $d9a71c7428eebb85$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    "use strict";
    function Log() {
        var level = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : $d9a71c7428eebb85$export$243e62d78d3b544d.INFO;
        (0, $f3yih.default)(this, Log);
        (0, $3jaBu.default)(this, "level", void 0);
        this.level = level;
    }
    (0, $2x3qu.default)(Log, [
        {
            key: "error",
            value: function error() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                if (this.level >= $d9a71c7428eebb85$export$243e62d78d3b544d.ERROR) (_console = console).error.apply(_console, (0, $d67Ag.default)(args));
            }
        },
        {
            key: "assert",
            value: function assert(assertion) {
                for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    args[_key - 1] = arguments[_key];
                }
                var _console;
                if (this.level >= $d9a71c7428eebb85$export$243e62d78d3b544d.ERROR) (_console = console).assert.apply(_console, [
                    assertion
                ].concat((0, $d67Ag.default)(args)));
            }
        },
        {
            key: "warn",
            value: function warn() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                if (this.level >= $d9a71c7428eebb85$export$243e62d78d3b544d.WARN) (_console = console).warn.apply(_console, (0, $d67Ag.default)(args));
            }
        },
        {
            key: "info",
            value: function info() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                if (this.level >= $d9a71c7428eebb85$export$243e62d78d3b544d.INFO) (_console = console).info.apply(_console, (0, $d67Ag.default)(args));
            }
        },
        {
            key: "debug",
            value: function debug() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                if (this.level >= $d9a71c7428eebb85$export$243e62d78d3b544d.DEBUG) (_console = console).debug.apply(_console, (0, $d67Ag.default)(args));
            }
        },
        {
            key: "trace",
            value: function trace() {
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                    args[_key] = arguments[_key];
                }
                var _console;
                if (this.level >= $d9a71c7428eebb85$export$243e62d78d3b544d.TRACE) (_console = console).trace.apply(_console, (0, $d67Ag.default)(args));
            }
        }
    ]);
    return Log;
}();



var $dzBOF = parcelRequire("dzBOF");

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $5sttm = parcelRequire("5sttm");

var $8oBD6 = parcelRequire("8oBD6");

var $aT4ZK = parcelRequire("aT4ZK");

var $d07c138ab7effa86$var$ReloadAction = /*#__PURE__*/ function(Base1) {
    "use strict";
    (0, $5sttm.default)(ReloadAction, Base1);
    var _super = (0, $8oBD6.default)(ReloadAction);
    function ReloadAction(state) {
        (0, $f3yih.default)(this, ReloadAction);
        return _super.call(this, state);
    }
    (0, $2x3qu.default)(ReloadAction, [
        {
            key: "execute",
            value: // eslint-disable-next-line class-methods-use-this
            function execute() {
                return (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee() {
                    return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
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
    return ReloadAction;
}((0, $b115edcffc1aaa37$export$2e2bcd8739ae039));
var $d07c138ab7effa86$export$2e2bcd8739ae039 = $d07c138ab7effa86$var$ReloadAction;



var $dzBOF = parcelRequire("dzBOF");

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $5sttm = parcelRequire("5sttm");

var $1he00 = parcelRequire("1he00");

var $8zIXb = parcelRequire("8zIXb");

var $8oBD6 = parcelRequire("8oBD6");

var $aT4ZK = parcelRequire("aT4ZK");


var $dzBOF = parcelRequire("dzBOF");

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $aT4ZK = parcelRequire("aT4ZK");


var $dzBOF = parcelRequire("dzBOF");

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $3jaBu = parcelRequire("3jaBu");

var $aT4ZK = parcelRequire("aT4ZK");
var $2ec0177fc7e2e758$export$af22135957e110d7 = /*#__PURE__*/ function() {
    "use strict";
    function PromiseExecutorCallbacks() {
        (0, $f3yih.default)(this, PromiseExecutorCallbacks);
        (0, $3jaBu.default)(this, "_promise", void 0);
        (0, $3jaBu.default)(this, "_resolve", void 0);
        (0, $3jaBu.default)(this, "_reject", void 0);
        // dummy initialization required to satisfy TS2564 (definite assignment)
        var tmpResolve = function() {};
        var tmpReject = function() {};
        this._promise = new Promise(function(resolve, reject) {
            tmpResolve = resolve;
            tmpReject = reject;
        });
        this._resolve = tmpResolve;
        this._reject = tmpReject;
    }
    (0, $2x3qu.default)(PromiseExecutorCallbacks, [
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
    return PromiseExecutorCallbacks;
}();
function $2ec0177fc7e2e758$export$1f4f18df0126964a(element, resolveEventNames, rejectEventNames) {
    return $2ec0177fc7e2e758$var$_waitForEvents.apply(this, arguments);
}
function $2ec0177fc7e2e758$var$_waitForEvents() {
    $2ec0177fc7e2e758$var$_waitForEvents = (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee(element, resolveEventNames, rejectEventNames) {
        return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
            while(1)switch(_ctx.prev = _ctx.next){
                case 0:
                    return _ctx.abrupt("return", new Promise(function(resolve, reject) {
                        var ref = [
                            function() {
                                resolveEventNames.forEach(function(name) {
                                    return element.removeEventListener(name, resolveHandler);
                                });
                                rejectEventNames.forEach(function(name) {
                                    return element.removeEventListener(name, rejectHandler);
                                });
                                resolve(element);
                            },
                            function(e) {
                                resolveEventNames.forEach(function(name) {
                                    return element.removeEventListener(name, resolveHandler);
                                });
                                rejectEventNames.forEach(function(name) {
                                    return element.removeEventListener(name, rejectHandler);
                                });
                                reject(e);
                            }, 
                        ], resolveHandler = ref[0], rejectHandler = ref[1];
                        resolveEventNames.forEach(function(e) {
                            return element.addEventListener(e, resolveHandler);
                        });
                        rejectEventNames.forEach(function(e) {
                            return element.addEventListener(e, rejectHandler);
                        });
                    }));
                case 1:
                case "end":
                    return _ctx.stop();
            }
        }, _callee);
    }));
    return $2ec0177fc7e2e758$var$_waitForEvents.apply(this, arguments);
}



var $dzBOF = parcelRequire("dzBOF");

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $3jaBu = parcelRequire("3jaBu");

var $d67Ag = parcelRequire("d67Ag");

var $aT4ZK = parcelRequire("aT4ZK");


var $13567610da0bfca0$var$Preloader = /*#__PURE__*/ function() {
    "use strict";
    function Preloader() {
        var container = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document.createElement("div");
        (0, $f3yih.default)(this, Preloader);
        (0, $3jaBu.default)(this, "container", void 0);
        (0, $3jaBu.default)(this, "refs", new Map());
        this.container = container;
    }
    (0, $2x3qu.default)(Preloader, [
        {
            key: "preloadImpl",
            value: function preloadImpl(mimetype, url) {
                var key = Preloader.key(mimetype, url);
                var cpe = Preloader.createPreloadingElement.bind(Preloader);
                var ref;
                var element = (ref = this.refs.get(key)) !== null && ref !== void 0 ? ref : cpe(mimetype, url);
                this.container.appendChild(element);
                this.refs.set(key, element);
                return {
                    key: key,
                    element: element
                };
            }
        },
        {
            key: "preload",
            value: function preload() {
                for(var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++){
                    items[_key] = arguments[_key];
                }
                var _this = this;
                return items.map(function(param) {
                    var mimetype = param.mimetype, url = param.url;
                    return _this.preloadImpl(mimetype, url);
                }).map(function(param) {
                    var element = param.element;
                    return Preloader.readyForDisplay(element).then();
                });
            }
        },
        {
            key: "get",
            value: function get(mimetype, url) {
                var ref = this.preloadImpl(mimetype, url), key = ref.key, element = ref.element;
                element.remove();
                var clonedElement = element.cloneNode(true);
                this.container.appendChild(clonedElement);
                this.refs.set(key, clonedElement);
                return element;
            }
        },
        {
            key: "unrefImpl",
            value: function unrefImpl() {
                for(var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++){
                    keys[_key] = arguments[_key];
                }
                var _this = this;
                keys.forEach(function(key) {
                    var element = _this.refs.get(key);
                    element === null || element === void 0 ? void 0 : element.remove();
                    _this.refs.delete(key);
                });
            }
        },
        {
            key: "unref",
            value: function unref() {
                for(var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++){
                    refs[_key] = arguments[_key];
                }
                var keys = refs.map(function(param) {
                    var mimetype = param.mimetype, url = param.url;
                    return Preloader.key(mimetype, url);
                });
                this.unrefImpl.apply(this, (0, $d67Ag.default)(keys));
            }
        },
        {
            key: "clear",
            value: function clear() {
                this.unrefImpl.apply(this, (0, $d67Ag.default)(this.refs.keys()));
            }
        }
    ], [
        {
            key: "key",
            value: function key(mimetype, url) {
                return "{".concat(mimetype, "}{").concat(url, "}");
            }
        },
        {
            key: "readyForDisplay",
            value: function readyForDisplay(content) {
                return (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee() {
                    return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                if (!(content instanceof HTMLImageElement)) {
                                    _ctx.next = 5;
                                    break;
                                }
                                _ctx.next = 3;
                                return Preloader.readyForDisplayImage(content);
                            case 3:
                                _ctx.next = 11;
                                break;
                            case 5:
                                if (!(content instanceof HTMLVideoElement)) {
                                    _ctx.next = 10;
                                    break;
                                }
                                _ctx.next = 8;
                                return Preloader.readyForDisplayVideo(content);
                            case 8:
                                _ctx.next = 11;
                                break;
                            case 10:
                                (0, $688e8b72d0f8e53f$export$57b5e12ee8bbcf57)(content);
                            case 11:
                                return _ctx.abrupt("return", content);
                            case 12:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "readyForDisplayImage",
            value: function readyForDisplayImage(image) {
                return (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee() {
                    return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                if (image.complete) {
                                    _ctx.next = 3;
                                    break;
                                }
                                _ctx.next = 3;
                                return (0, $2ec0177fc7e2e758$export$1f4f18df0126964a)(image, [
                                    "load"
                                ], [
                                    "abort",
                                    "error"
                                ]);
                            case 3:
                                return _ctx.abrupt("return", image);
                            case 4:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "readyForDisplayVideo",
            value: function readyForDisplayVideo(video) {
                return (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee() {
                    return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                if (!(video.readyState < HTMLMediaElement.HAVE_ENOUGH_DATA)) {
                                    _ctx.next = 3;
                                    break;
                                }
                                _ctx.next = 3;
                                return (0, $2ec0177fc7e2e758$export$1f4f18df0126964a)(video, [
                                    "canplaythrough"
                                ], [
                                    "abort",
                                    "error"
                                ]);
                            case 3:
                                return _ctx.abrupt("return", video);
                            case 4:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "createPreloadingElement",
            value: function createPreloadingElement(mimetype, url) {
                var type = mimetype.split("/", 1)[0];
                switch(type){
                    case "image":
                        return Preloader.createPreloadingImage(url);
                    case "video":
                        return Preloader.createPreloadingVideo(url);
                    default:
                        throw new TypeError("Unsupported MIME type: ".concat(type, " (").concat(mimetype, ")"));
                }
            }
        },
        {
            key: "createPreloadingImage",
            value: function createPreloadingImage(url) {
                var href = new URL(url).href;
                var image = new Image();
                image.src = href;
                return image;
            }
        },
        {
            key: "createPreloadingVideo",
            value: function createPreloadingVideo(url) {
                var video = document.createElement("video");
                video.preload = "auto";
                video.src = url;
                video.autoplay = false;
                return video;
            }
        }
    ]);
    return Preloader;
}();
var $13567610da0bfca0$export$2e2bcd8739ae039 = $13567610da0bfca0$var$Preloader;


var $231a03076fd592fe$var$ContentCreator = /*#__PURE__*/ function() {
    "use strict";
    function ContentCreator() {
        (0, $f3yih.default)(this, ContentCreator);
    }
    (0, $2x3qu.default)(ContentCreator, null, [
        {
            key: "create",
            value: function create(mimetype, url) {
                var preloader = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : new (0, $13567610da0bfca0$export$2e2bcd8739ae039)();
                return preloader.get(mimetype, url);
            }
        },
        {
            key: "play",
            value: function play(content) {
                if (content instanceof HTMLImageElement) // NOOP
                return content;
                if (content instanceof HTMLVideoElement) {
                    content.play().finally(function() {});
                    return content;
                }
                return (0, $688e8b72d0f8e53f$export$57b5e12ee8bbcf57)(content);
            }
        },
        {
            key: "setVolume",
            value: function setVolume(content, volume, mode) {
                if (content instanceof HTMLImageElement) // NOOP
                return content;
                if (content instanceof HTMLVideoElement) {
                    switch(mode){
                        case "absolute":
                            // eslint-disable-next-line no-param-reassign
                            content.volume = Math.min(1, Math.max(volume, 0));
                            break;
                        case "relative":
                            // eslint-disable-next-line no-param-reassign
                            content.volume = Math.min(1, Math.max(content.volume * volume, 0));
                            break;
                        default:
                            (0, $688e8b72d0f8e53f$export$57b5e12ee8bbcf57)(mode);
                    }
                    return content;
                }
                return (0, $688e8b72d0f8e53f$export$57b5e12ee8bbcf57)(content);
            }
        },
        {
            key: "setMuted",
            value: function setMuted(content, value) {
                if (content instanceof HTMLImageElement) // NOOP
                return content;
                if (content instanceof HTMLVideoElement) {
                    // eslint-disable-next-line no-param-reassign
                    content.muted = value;
                    return content;
                }
                return (0, $688e8b72d0f8e53f$export$57b5e12ee8bbcf57)(content);
            }
        },
        {
            key: "getDimensions",
            value: function getDimensions(content) {
                return (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee() {
                    return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                if (!(content instanceof HTMLImageElement)) {
                                    _ctx.next = 2;
                                    break;
                                }
                                return _ctx.abrupt("return", ContentCreator.getDimensionsImage(content));
                            case 2:
                                if (!(content instanceof HTMLVideoElement)) {
                                    _ctx.next = 4;
                                    break;
                                }
                                return _ctx.abrupt("return", ContentCreator.getDimensionsVideo(content));
                            case 4:
                                return _ctx.abrupt("return", (0, $688e8b72d0f8e53f$export$57b5e12ee8bbcf57)(content));
                            case 5:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "getDimensionsImage",
            value: function getDimensionsImage(image) {
                return (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee() {
                    return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                if (image.complete) {
                                    _ctx.next = 3;
                                    break;
                                }
                                _ctx.next = 3;
                                return (0, $2ec0177fc7e2e758$export$1f4f18df0126964a)(image, [
                                    "load"
                                ], [
                                    "abort",
                                    "error"
                                ]);
                            case 3:
                                return _ctx.abrupt("return", {
                                    width: image.naturalWidth,
                                    height: image.naturalHeight
                                });
                            case 4:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "getDimensionsVideo",
            value: function getDimensionsVideo(video) {
                return (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee() {
                    return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                if (!(video.readyState < HTMLMediaElement.HAVE_METADATA)) {
                                    _ctx.next = 3;
                                    break;
                                }
                                _ctx.next = 3;
                                return (0, $2ec0177fc7e2e758$export$1f4f18df0126964a)(video, [
                                    "loadedmetadata"
                                ], [
                                    "abort",
                                    "error"
                                ]);
                            case 3:
                                return _ctx.abrupt("return", {
                                    width: video.videoWidth,
                                    height: video.videoHeight
                                });
                            case 4:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return ContentCreator;
}();
var $231a03076fd592fe$export$2e2bcd8739ae039 = $231a03076fd592fe$var$ContentCreator;




var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $3jaBu = parcelRequire("3jaBu");

var $d67Ag = parcelRequire("d67Ag");
var $7bcba457d4e075b7$export$402e76927ebf6a24 = [];


var $7b82c91f69acf85f$export$63c81bd924f89474 = function hasActiveObservations() {
    return (0, $7bcba457d4e075b7$export$402e76927ebf6a24).some(function(ro) {
        return ro.activeTargets.length > 0;
    });
};



var $beb0e84f807305d3$export$8ca35300535e324d = function hasSkippedObservations() {
    return (0, $7bcba457d4e075b7$export$402e76927ebf6a24).some(function(ro) {
        return ro.skippedTargets.length > 0;
    });
};


var $6f2244f5d7676b18$var$msg = "ResizeObserver loop completed with undelivered notifications.";
var $6f2244f5d7676b18$export$888cb69481582149 = function deliverResizeLoopError() {
    var event;
    if (typeof ErrorEvent === "function") event = new ErrorEvent("error", {
        message: $6f2244f5d7676b18$var$msg
    });
    else {
        event = document.createEvent("Event");
        event.initEvent("error", false, false);
        event.message = $6f2244f5d7676b18$var$msg;
    }
    window.dispatchEvent(event);
};



var $ba7e92a330a2359d$export$416d111b83cd1483;
(function(ResizeObserverBoxOptions1) {
    ResizeObserverBoxOptions1["BORDER_BOX"] = "border-box";
    ResizeObserverBoxOptions1["CONTENT_BOX"] = "content-box";
    ResizeObserverBoxOptions1["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})($ba7e92a330a2359d$export$416d111b83cd1483 || ($ba7e92a330a2359d$export$416d111b83cd1483 = {}));


var $1485a5907d2bc327$export$792f3d81ea979f55 = function freeze(obj) {
    return Object.freeze(obj);
};


var $505d41bd614a8b49$export$c9ad8cdf6bbd331c = function() {
    var ResizeObserverSize = function ResizeObserverSize(inlineSize, blockSize) {
        this.inlineSize = inlineSize;
        this.blockSize = blockSize;
        (0, $1485a5907d2bc327$export$792f3d81ea979f55)(this);
    };
    return ResizeObserverSize;
}();



var $610f7e05592226a4$export$51d7a67026f4e0b7 = function() {
    var DOMRectReadOnly = function DOMRectReadOnly(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.y;
        this.left = this.x;
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;
        return (0, $1485a5907d2bc327$export$792f3d81ea979f55)(this);
    };
    DOMRectReadOnly.prototype.toJSON = function() {
        var _a = this, x = _a.x, y = _a.y, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        return {
            x: x,
            y: y,
            top: top,
            right: right,
            bottom: bottom,
            left: left,
            width: width,
            height: height
        };
    };
    DOMRectReadOnly.fromRect = function(rectangle) {
        return new DOMRectReadOnly(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    };
    return DOMRectReadOnly;
}();


var $8a325a4e6bd562aa$export$165b39ed277223c2 = function isSVG(target) {
    return target instanceof SVGElement && "getBBox" in target;
};
var $8a325a4e6bd562aa$export$ee695c13482bb5dd = function isHidden(target) {
    if ($8a325a4e6bd562aa$export$165b39ed277223c2(target)) {
        var _a = target.getBBox(), width = _a.width, height = _a.height;
        return !width && !height;
    }
    var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
    return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var $8a325a4e6bd562aa$export$45a5e7f76e0caa8d = function isElement(obj) {
    var _a, _b;
    if (obj instanceof Element) return true;
    var scope = (_b = (_a = obj) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView;
    return !!(scope && obj instanceof scope.Element);
};
var $8a325a4e6bd562aa$export$a6eb60f7e7c182ba = function isReplacedElement(target) {
    switch(target.tagName){
        case "INPUT":
            if (target.type !== "image") break;
        case "VIDEO":
        case "AUDIO":
        case "EMBED":
        case "OBJECT":
        case "CANVAS":
        case "IFRAME":
        case "IMG":
            return true;
    }
    return false;
};



var $8b6fe9a8b9f7ff27$export$90b4d2ff6acb88af = typeof window !== "undefined" ? window : {};


var $a022eb5ce6b27d4f$var$cache = new WeakMap();
var $a022eb5ce6b27d4f$var$scrollRegexp = /auto|scroll/;
var $a022eb5ce6b27d4f$var$verticalRegexp = /^tb|vertical/;
var $a022eb5ce6b27d4f$var$IE = /msie|trident/i.test((0, $8b6fe9a8b9f7ff27$export$90b4d2ff6acb88af).navigator && (0, $8b6fe9a8b9f7ff27$export$90b4d2ff6acb88af).navigator.userAgent);
var $a022eb5ce6b27d4f$var$parseDimension = function parseDimension(pixel) {
    return parseFloat(pixel || "0");
};
var $a022eb5ce6b27d4f$var$size = function size(inlineSize, blockSize, switchSizes) {
    if (inlineSize === void 0) inlineSize = 0;
    if (blockSize === void 0) blockSize = 0;
    if (switchSizes === void 0) switchSizes = false;
    return new (0, $505d41bd614a8b49$export$c9ad8cdf6bbd331c)((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var $a022eb5ce6b27d4f$var$zeroBoxes = (0, $1485a5907d2bc327$export$792f3d81ea979f55)({
    devicePixelContentBoxSize: $a022eb5ce6b27d4f$var$size(),
    borderBoxSize: $a022eb5ce6b27d4f$var$size(),
    contentBoxSize: $a022eb5ce6b27d4f$var$size(),
    contentRect: new (0, $610f7e05592226a4$export$51d7a67026f4e0b7)(0, 0, 0, 0)
});
var $a022eb5ce6b27d4f$export$504d039a9c501c94 = function calculateBoxSizes(target, forceRecalculation) {
    if (forceRecalculation === void 0) forceRecalculation = false;
    if ($a022eb5ce6b27d4f$var$cache.has(target) && !forceRecalculation) return $a022eb5ce6b27d4f$var$cache.get(target);
    if ((0, $8a325a4e6bd562aa$export$ee695c13482bb5dd)(target)) {
        $a022eb5ce6b27d4f$var$cache.set(target, $a022eb5ce6b27d4f$var$zeroBoxes);
        return $a022eb5ce6b27d4f$var$zeroBoxes;
    }
    var cs = getComputedStyle(target);
    var svg = (0, $8a325a4e6bd562aa$export$165b39ed277223c2)(target) && target.ownerSVGElement && target.getBBox();
    var removePadding = !$a022eb5ce6b27d4f$var$IE && cs.boxSizing === "border-box";
    var switchSizes = $a022eb5ce6b27d4f$var$verticalRegexp.test(cs.writingMode || "");
    var canScrollVertically = !svg && $a022eb5ce6b27d4f$var$scrollRegexp.test(cs.overflowY || "");
    var canScrollHorizontally = !svg && $a022eb5ce6b27d4f$var$scrollRegexp.test(cs.overflowX || "");
    var paddingTop = svg ? 0 : $a022eb5ce6b27d4f$var$parseDimension(cs.paddingTop);
    var paddingRight = svg ? 0 : $a022eb5ce6b27d4f$var$parseDimension(cs.paddingRight);
    var paddingBottom = svg ? 0 : $a022eb5ce6b27d4f$var$parseDimension(cs.paddingBottom);
    var paddingLeft = svg ? 0 : $a022eb5ce6b27d4f$var$parseDimension(cs.paddingLeft);
    var borderTop = svg ? 0 : $a022eb5ce6b27d4f$var$parseDimension(cs.borderTopWidth);
    var borderRight = svg ? 0 : $a022eb5ce6b27d4f$var$parseDimension(cs.borderRightWidth);
    var borderBottom = svg ? 0 : $a022eb5ce6b27d4f$var$parseDimension(cs.borderBottomWidth);
    var borderLeft = svg ? 0 : $a022eb5ce6b27d4f$var$parseDimension(cs.borderLeftWidth);
    var horizontalPadding = paddingLeft + paddingRight;
    var verticalPadding = paddingTop + paddingBottom;
    var horizontalBorderArea = borderLeft + borderRight;
    var verticalBorderArea = borderTop + borderBottom;
    var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
    var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
    var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
    var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
    var contentWidth = svg ? svg.width : $a022eb5ce6b27d4f$var$parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
    var contentHeight = svg ? svg.height : $a022eb5ce6b27d4f$var$parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
    var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
    var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
    var boxes = (0, $1485a5907d2bc327$export$792f3d81ea979f55)({
        devicePixelContentBoxSize: $a022eb5ce6b27d4f$var$size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
        borderBoxSize: $a022eb5ce6b27d4f$var$size(borderBoxWidth, borderBoxHeight, switchSizes),
        contentBoxSize: $a022eb5ce6b27d4f$var$size(contentWidth, contentHeight, switchSizes),
        contentRect: new (0, $610f7e05592226a4$export$51d7a67026f4e0b7)(paddingLeft, paddingTop, contentWidth, contentHeight)
    });
    $a022eb5ce6b27d4f$var$cache.set(target, boxes);
    return boxes;
};
var $a022eb5ce6b27d4f$export$1a78030b04106bdb = function calculateBoxSize(target, observedBox, forceRecalculation) {
    var _a = $a022eb5ce6b27d4f$export$504d039a9c501c94(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
    switch(observedBox){
        case (0, $ba7e92a330a2359d$export$416d111b83cd1483).DEVICE_PIXEL_CONTENT_BOX:
            return devicePixelContentBoxSize;
        case (0, $ba7e92a330a2359d$export$416d111b83cd1483).BORDER_BOX:
            return borderBoxSize;
        default:
            return contentBoxSize;
    }
};



var $6047bbbacaa3132b$export$226159b441fc89f8 = function() {
    var ResizeObserverEntry = function ResizeObserverEntry(target) {
        var boxes = (0, $a022eb5ce6b27d4f$export$504d039a9c501c94)(target);
        this.target = target;
        this.contentRect = boxes.contentRect;
        this.borderBoxSize = (0, $1485a5907d2bc327$export$792f3d81ea979f55)([
            boxes.borderBoxSize
        ]);
        this.contentBoxSize = (0, $1485a5907d2bc327$export$792f3d81ea979f55)([
            boxes.contentBoxSize
        ]);
        this.devicePixelContentBoxSize = (0, $1485a5907d2bc327$export$792f3d81ea979f55)([
            boxes.devicePixelContentBoxSize
        ]);
    };
    return ResizeObserverEntry;
}();



var $f9345c2571cfbf08$export$f8c8e3b5da1f41d2 = function calculateDepthForNode(node) {
    if ((0, $8a325a4e6bd562aa$export$ee695c13482bb5dd)(node)) return Infinity;
    var depth = 0;
    var parent = node.parentNode;
    while(parent){
        depth += 1;
        parent = parent.parentNode;
    }
    return depth;
};



var $08015e2bb9b35be5$export$9cac928141e5443b = function broadcastActiveObservations() {
    var shallowestDepth = Infinity;
    var callbacks = [];
    (0, $7bcba457d4e075b7$export$402e76927ebf6a24).forEach(function processObserver(ro) {
        if (ro.activeTargets.length === 0) return;
        var entries = [];
        ro.activeTargets.forEach(function processTarget(ot) {
            var entry = new (0, $6047bbbacaa3132b$export$226159b441fc89f8)(ot.target);
            var targetDepth = (0, $f9345c2571cfbf08$export$f8c8e3b5da1f41d2)(ot.target);
            entries.push(entry);
            ot.lastReportedSize = (0, $a022eb5ce6b27d4f$export$1a78030b04106bdb)(ot.target, ot.observedBox);
            if (targetDepth < shallowestDepth) shallowestDepth = targetDepth;
        });
        callbacks.push(function resizeObserverCallback() {
            ro.callback.call(ro.observer, entries, ro.observer);
        });
        ro.activeTargets.splice(0, ro.activeTargets.length);
    });
    for(var _i = 0, callbacks_1 = callbacks; _i < callbacks_1.length; _i++){
        var callback = callbacks_1[_i];
        callback();
    }
    return shallowestDepth;
};




var $0e66d93ff6733e3e$export$9c17b8913a2a3572 = function gatherActiveObservationsAtDepth(depth) {
    (0, $7bcba457d4e075b7$export$402e76927ebf6a24).forEach(function processObserver(ro) {
        ro.activeTargets.splice(0, ro.activeTargets.length);
        ro.skippedTargets.splice(0, ro.skippedTargets.length);
        ro.observationTargets.forEach(function processTarget(ot) {
            if (ot.isActive()) {
                if ((0, $f9345c2571cfbf08$export$f8c8e3b5da1f41d2)(ot.target) > depth) ro.activeTargets.push(ot);
                else ro.skippedTargets.push(ot);
            }
        });
    });
};


var $b33275ad644e3bfe$export$e54fe5b0f43758f7 = function process() {
    var depth = 0;
    (0, $0e66d93ff6733e3e$export$9c17b8913a2a3572)(depth);
    while((0, $7b82c91f69acf85f$export$63c81bd924f89474)()){
        depth = (0, $08015e2bb9b35be5$export$9cac928141e5443b)();
        (0, $0e66d93ff6733e3e$export$9c17b8913a2a3572)(depth);
    }
    if ((0, $beb0e84f807305d3$export$8ca35300535e324d)()) (0, $6f2244f5d7676b18$export$888cb69481582149)();
    return depth > 0;
};



var $0a41f8dcd327d61e$var$trigger;
var $0a41f8dcd327d61e$var$callbacks = [];
var $0a41f8dcd327d61e$var$notify = function notify() {
    return $0a41f8dcd327d61e$var$callbacks.splice(0).forEach(function(cb) {
        return cb();
    });
};
var $0a41f8dcd327d61e$export$4c995d4933c4abb = function queueMicroTask(callback) {
    if (!$0a41f8dcd327d61e$var$trigger) {
        var toggle_1 = 0;
        var el_1 = document.createTextNode("");
        var config = {
            characterData: true
        };
        new MutationObserver(function() {
            return $0a41f8dcd327d61e$var$notify();
        }).observe(el_1, config);
        $0a41f8dcd327d61e$var$trigger = function trigger() {
            el_1.textContent = "" + (toggle_1 ? toggle_1-- : toggle_1++);
        };
    }
    $0a41f8dcd327d61e$var$callbacks.push(callback);
    $0a41f8dcd327d61e$var$trigger();
};


var $58ceb034ea6fb41e$export$5755c7b572e34c6 = function queueResizeObserver(cb) {
    (0, $0a41f8dcd327d61e$export$4c995d4933c4abb)(function ResizeObserver() {
        requestAnimationFrame(cb);
    });
};


var $b762640080397de5$var$watching = 0;
var $b762640080397de5$var$isWatching = function isWatching() {
    return !!$b762640080397de5$var$watching;
};
var $b762640080397de5$var$CATCH_PERIOD = 250;
var $b762640080397de5$var$observerConfig = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
};
var $b762640080397de5$var$events = [
    "resize",
    "load",
    "transitionend",
    "animationend",
    "animationstart",
    "animationiteration",
    "keyup",
    "keydown",
    "mouseup",
    "mousedown",
    "mouseover",
    "mouseout",
    "blur",
    "focus"
];
var $b762640080397de5$var$time = function time(timeout) {
    if (timeout === void 0) timeout = 0;
    return Date.now() + timeout;
};
var $b762640080397de5$var$scheduled = false;
var $b762640080397de5$var$Scheduler1 = function() {
    var Scheduler = function Scheduler() {
        var _this = this;
        this.stopped = true;
        this.listener = function() {
            return _this.schedule();
        };
    };
    Scheduler.prototype.run = function(timeout) {
        var _this = this;
        if (timeout === void 0) timeout = $b762640080397de5$var$CATCH_PERIOD;
        if ($b762640080397de5$var$scheduled) return;
        $b762640080397de5$var$scheduled = true;
        var until = $b762640080397de5$var$time(timeout);
        (0, $58ceb034ea6fb41e$export$5755c7b572e34c6)(function() {
            var elementsHaveResized = false;
            try {
                elementsHaveResized = (0, $b33275ad644e3bfe$export$e54fe5b0f43758f7)();
            } finally{
                $b762640080397de5$var$scheduled = false;
                timeout = until - $b762640080397de5$var$time();
                if (!$b762640080397de5$var$isWatching()) return;
                if (elementsHaveResized) _this.run(1000);
                else if (timeout > 0) _this.run(timeout);
                else _this.start();
            }
        });
    };
    Scheduler.prototype.schedule = function() {
        this.stop();
        this.run();
    };
    Scheduler.prototype.observe = function() {
        var _this = this;
        var cb = function cb() {
            return _this.observer && _this.observer.observe(document.body, $b762640080397de5$var$observerConfig);
        };
        document.body ? cb() : (0, $8b6fe9a8b9f7ff27$export$90b4d2ff6acb88af).addEventListener("DOMContentLoaded", cb);
    };
    Scheduler.prototype.start = function() {
        var _this = this;
        if (this.stopped) {
            this.stopped = false;
            this.observer = new MutationObserver(this.listener);
            this.observe();
            $b762640080397de5$var$events.forEach(function(name) {
                return (0, $8b6fe9a8b9f7ff27$export$90b4d2ff6acb88af).addEventListener(name, _this.listener, true);
            });
        }
    };
    Scheduler.prototype.stop = function() {
        var _this = this;
        if (!this.stopped) {
            this.observer && this.observer.disconnect();
            $b762640080397de5$var$events.forEach(function(name) {
                return (0, $8b6fe9a8b9f7ff27$export$90b4d2ff6acb88af).removeEventListener(name, _this.listener, true);
            });
            this.stopped = true;
        }
    };
    return Scheduler;
}();
var $b762640080397de5$export$d30788f2c20241cd = new $b762640080397de5$var$Scheduler1();
var $b762640080397de5$export$1f18a74d42722835 = function updateCount(n) {
    !$b762640080397de5$var$watching && n > 0 && $b762640080397de5$export$d30788f2c20241cd.start();
    $b762640080397de5$var$watching += n;
    !$b762640080397de5$var$watching && $b762640080397de5$export$d30788f2c20241cd.stop();
};





var $d051160ebc2c507e$var$skipNotifyOnElement = function skipNotifyOnElement(target) {
    return !(0, $8a325a4e6bd562aa$export$165b39ed277223c2)(target) && !(0, $8a325a4e6bd562aa$export$a6eb60f7e7c182ba)(target) && getComputedStyle(target).display === "inline";
};
var $d051160ebc2c507e$export$fea412043713122 = function() {
    var ResizeObservation = function ResizeObservation(target, observedBox) {
        this.target = target;
        this.observedBox = observedBox || (0, $ba7e92a330a2359d$export$416d111b83cd1483).CONTENT_BOX;
        this.lastReportedSize = {
            inlineSize: 0,
            blockSize: 0
        };
    };
    ResizeObservation.prototype.isActive = function() {
        var size = (0, $a022eb5ce6b27d4f$export$1a78030b04106bdb)(this.target, this.observedBox, true);
        if ($d051160ebc2c507e$var$skipNotifyOnElement(this.target)) this.lastReportedSize = size;
        if (this.lastReportedSize.inlineSize !== size.inlineSize || this.lastReportedSize.blockSize !== size.blockSize) return true;
        return false;
    };
    return ResizeObservation;
}();


var $2ef2c8656b5a99ed$export$d86966e6e4bc97e1 = function() {
    var ResizeObserverDetail = function ResizeObserverDetail(resizeObserver, callback) {
        this.activeTargets = [];
        this.skippedTargets = [];
        this.observationTargets = [];
        this.observer = resizeObserver;
        this.callback = callback;
    };
    return ResizeObserverDetail;
}();



var $2f3c356e26e3acf8$var$observerMap = new WeakMap();
var $2f3c356e26e3acf8$var$getObservationIndex = function getObservationIndex(observationTargets, target) {
    for(var i = 0; i < observationTargets.length; i += 1){
        if (observationTargets[i].target === target) return i;
    }
    return -1;
};
var $2f3c356e26e3acf8$export$ed99c5bafbaf8300 = function() {
    var ResizeObserverController = function ResizeObserverController() {};
    ResizeObserverController.connect = function(resizeObserver, callback) {
        var detail = new (0, $2ef2c8656b5a99ed$export$d86966e6e4bc97e1)(resizeObserver, callback);
        $2f3c356e26e3acf8$var$observerMap.set(resizeObserver, detail);
    };
    ResizeObserverController.observe = function(resizeObserver, target, options) {
        var detail = $2f3c356e26e3acf8$var$observerMap.get(resizeObserver);
        var firstObservation = detail.observationTargets.length === 0;
        if ($2f3c356e26e3acf8$var$getObservationIndex(detail.observationTargets, target) < 0) {
            firstObservation && (0, $7bcba457d4e075b7$export$402e76927ebf6a24).push(detail);
            detail.observationTargets.push(new (0, $d051160ebc2c507e$export$fea412043713122)(target, options && options.box));
            (0, $b762640080397de5$export$1f18a74d42722835)(1);
            (0, $b762640080397de5$export$d30788f2c20241cd).schedule();
        }
    };
    ResizeObserverController.unobserve = function(resizeObserver, target) {
        var detail = $2f3c356e26e3acf8$var$observerMap.get(resizeObserver);
        var index = $2f3c356e26e3acf8$var$getObservationIndex(detail.observationTargets, target);
        var lastObservation = detail.observationTargets.length === 1;
        if (index >= 0) {
            lastObservation && (0, $7bcba457d4e075b7$export$402e76927ebf6a24).splice((0, $7bcba457d4e075b7$export$402e76927ebf6a24).indexOf(detail), 1);
            detail.observationTargets.splice(index, 1);
            (0, $b762640080397de5$export$1f18a74d42722835)(-1);
        }
    };
    ResizeObserverController.disconnect = function(resizeObserver) {
        var _this = this;
        var detail = $2f3c356e26e3acf8$var$observerMap.get(resizeObserver);
        detail.observationTargets.slice().forEach(function(ot) {
            return _this.unobserve(resizeObserver, ot.target);
        });
        detail.activeTargets.splice(0, detail.activeTargets.length);
    };
    return ResizeObserverController;
}();



var $3df1d26d581b7ea7$export$9caf76241ca21a11 = function() {
    var ResizeObserver = function ResizeObserver(callback) {
        if (arguments.length === 0) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        if (typeof callback !== "function") throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        (0, $2f3c356e26e3acf8$export$ed99c5bafbaf8300).connect(this, callback);
    };
    ResizeObserver.prototype.observe = function(target, options) {
        if (arguments.length === 0) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        if (!(0, $8a325a4e6bd562aa$export$45a5e7f76e0caa8d)(target)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        (0, $2f3c356e26e3acf8$export$ed99c5bafbaf8300).observe(this, target, options);
    };
    ResizeObserver.prototype.unobserve = function(target) {
        if (arguments.length === 0) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        if (!(0, $8a325a4e6bd562aa$export$45a5e7f76e0caa8d)(target)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        (0, $2f3c356e26e3acf8$export$ed99c5bafbaf8300).unobserve(this, target);
    };
    ResizeObserver.prototype.disconnect = function() {
        (0, $2f3c356e26e3acf8$export$ed99c5bafbaf8300).disconnect(this);
    };
    ResizeObserver.toString = function() {
        return "function ResizeObserver () { [polyfill code] }";
    };
    return ResizeObserver;
}();







// eslint-disable-next-line compat/compat
var $52c6235137f4b96a$var$ResizeObserverOnWindow = window.ResizeObserver;
var $52c6235137f4b96a$var$ResizeObserver = $52c6235137f4b96a$var$ResizeObserverOnWindow || (0, $3df1d26d581b7ea7$export$9caf76241ca21a11);
var $52c6235137f4b96a$export$894f970d1d5db986 = /*#__PURE__*/ function() {
    "use strict";
    function FitUpdater(container, content) {
        (0, $f3yih.default)(this, FitUpdater);
        (0, $3jaBu.default)(this, "container", void 0);
        (0, $3jaBu.default)(this, "content", void 0);
        this.container = container;
        this.content = content;
    }
    (0, $2x3qu.default)(FitUpdater, [
        {
            key: "update",
            value: function update() {
                var contentSize = FitUpdater.elementSizes.get(this.content);
                if (typeof contentSize === "undefined") return;
                var containerSize = FitUpdater.elementSizes.get(this.container);
                if (typeof containerSize === "undefined") return;
                var containerAspectRatio = containerSize.width / containerSize.height;
                var contentAspectRatio = contentSize.width / contentSize.height;
                if (containerAspectRatio > contentAspectRatio) {
                    this.container.style.setProperty("--fit-cover-max-width", "100%");
                    this.container.style.setProperty("--fit-cover-max-height", "auto");
                    this.container.style.setProperty("--fit-contain-min-width", "auto");
                    this.container.style.setProperty("--fit-contain-min-height", "100%");
                } else {
                    this.container.style.setProperty("--fit-cover-max-width", "100%");
                    this.container.style.setProperty("--fit-cover-max-height", "auto");
                    this.container.style.setProperty("--fit-contain-min-width", "100%");
                    this.container.style.setProperty("--fit-contain-min-height", "auto");
                }
            }
        }
    ], [
        {
            key: "register",
            value: function register(container, content) {
                var updater = new FitUpdater(container, content);
                FitUpdater.addInstance(container, updater);
                FitUpdater.addInstance(content, updater);
                FitUpdater.resizeObserver.observe(container);
                (0, $231a03076fd592fe$export$2e2bcd8739ae039).getDimensions(content).then(function(size) {
                    FitUpdater.elementSizes.set(content, size);
                    updater.update();
                }).catch(function(reason) {
                    // eslint-disable-next-line no-console
                    console.error("Could not retrieve size of content element.", content, reason, "Content fitting will most likely not work for this element.");
                });
                return updater;
            }
        },
        {
            key: "unregister",
            value: function unregister(updater) {
                var container = updater.container, content = updater.content;
                FitUpdater.removeInstance(container, updater);
                FitUpdater.removeInstance(content, updater);
            }
        },
        {
            key: "addInstance",
            value: function addInstance(elem, updater) {
                var instances = FitUpdater.getInstances(elem);
                instances.push(updater);
                FitUpdater.fitUpdaterInstances.set(elem, instances);
            }
        },
        {
            key: "removeInstance",
            value: function removeInstance(elem, updater) {
                var instances = FitUpdater.getInstances(elem);
                var idx = instances.indexOf(updater);
                if (idx !== -1) FitUpdater.fitUpdaterInstances.set(elem, instances.splice(idx, 1));
            }
        },
        {
            key: "getInstances",
            value: function getInstances(elem) {
                var instances = FitUpdater.fitUpdaterInstances.get(elem);
                if (typeof instances === "undefined") return [];
                return (0, $d67Ag.default)(instances);
            }
        },
        {
            key: "resizeObserverCallback",
            value: function resizeObserverCallback(roes) {
                roes.filter(function(param) {
                    var target = param.target;
                    return target instanceof HTMLElement;
                }).forEach(function(param) {
                    var target = param.target, _contentRect = param.contentRect, width = _contentRect.width, height = _contentRect.height;
                    var element = target;
                    FitUpdater.elementSizes.set(element, {
                        width: width,
                        height: height
                    });
                    FitUpdater.getInstances(element).forEach(function(i) {
                        return i.update();
                    });
                });
            }
        }
    ]);
    return FitUpdater;
}();
(0, $3jaBu.default)($52c6235137f4b96a$export$894f970d1d5db986, "resizeObserver", new $52c6235137f4b96a$var$ResizeObserver($52c6235137f4b96a$export$894f970d1d5db986.resizeObserverCallback.bind($52c6235137f4b96a$export$894f970d1d5db986)));
(0, $3jaBu.default)($52c6235137f4b96a$export$894f970d1d5db986, "elementSizes", new WeakMap());
(0, $3jaBu.default)($52c6235137f4b96a$export$894f970d1d5db986, "fitUpdaterInstances", new WeakMap());
function $52c6235137f4b96a$var$fitObject(container, content, type) {
    content.classList.add("fit-".concat(type));
    $52c6235137f4b96a$export$894f970d1d5db986.register(container, content);
}
var $52c6235137f4b96a$export$2e2bcd8739ae039 = $52c6235137f4b96a$var$fitObject;


// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
var $8321c7a55257bc04$var$showActionOptionsSchema = {
    type: "object",
    properties: {
        mimetype: {
            type: "string"
        },
        url: {
            type: "string"
        },
        fit: {
            type: "string",
            enum: [
                "cover",
                "contain"
            ]
        },
        color: {
            type: "string"
        },
        startDelay: {
            type: "number",
            minimum: 0
        },
        volume: {
            type: "number",
            minimum: 0,
            maximum: 1
        },
        muted: {
            type: "boolean"
        },
        transition: {
            type: "object",
            properties: {
                type: {
                    type: "string"
                },
                options: {
                    type: "object"
                }
            },
            required: [
                "type"
            ]
        },
        animation: {
            type: "object",
            properties: {
                type: {
                    type: "string"
                },
                options: {
                    type: "object"
                }
            },
            required: [
                "type"
            ]
        }
    },
    required: [
        "mimetype",
        "url"
    ]
};
var $8321c7a55257bc04$var$validateShowActionOptions = (0, $d7c405f0daaed1ac$export$9ea1f4fe5062c6d)($8321c7a55257bc04$var$showActionOptionsSchema);
var $8321c7a55257bc04$var$defaultOptionalShowArgs = {
    fit: "cover",
    color: "black",
    volume: 1,
    muted: false,
    transition: {
        type: "none",
        options: {}
    },
    animation: {
        type: "none",
        options: {}
    }
};
var $8321c7a55257bc04$var$ShowAction = /*#__PURE__*/ function(Base1) {
    "use strict";
    (0, $5sttm.default)(ShowAction, Base1);
    var _super = (0, $8oBD6.default)(ShowAction);
    function ShowAction(state) {
        (0, $f3yih.default)(this, ShowAction);
        return _super.call(this, state);
    }
    (0, $2x3qu.default)(ShowAction, [
        {
            key: "appendCurrentContent",
            value: function appendCurrentContent(contentElement) {
                var color = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "black";
                contentElement.classList.add("content");
                var slideElement = document.createElement("div");
                slideElement.style.setProperty("--slide-background-color", color);
                slideElement.classList.add("slide");
                slideElement.appendChild(contentElement);
                var slideInnerWrapperElement = document.createElement("div");
                slideInnerWrapperElement.classList.add("slide-inner-wrapper");
                slideInnerWrapperElement.appendChild(slideElement);
                var slideOuterWrapperElement = document.createElement("div");
                slideOuterWrapperElement.classList.add("slide-outer-wrapper");
                slideOuterWrapperElement.appendChild(slideInnerWrapperElement);
                var container = this.state.container;
                container.appendChild(slideOuterWrapperElement);
                return {
                    slideOuterWrapperElement: slideOuterWrapperElement,
                    slideInnerWrapperElement: slideInnerWrapperElement,
                    slideElement: slideElement,
                    contentElement: contentElement
                };
            }
        },
        {
            key: "removePreviousSlides",
            value: function removePreviousSlides(s) {
                var activeSlides = this.state.activeSlides;
                var index = activeSlides.indexOf(s);
                if (index !== -1) {
                    var previousSlides = activeSlides.slice(0, index);
                    activeSlides.splice(0, index);
                    previousSlides.forEach(function(ps) {
                        var parentNode = ps.slideOuterWrapperElement.parentNode;
                        if (parentNode !== null) parentNode.removeChild(ps.slideOuterWrapperElement);
                        ps.transition.cancel();
                        ps.animation.cancel();
                    });
                }
            }
        },
        {
            key: "execute",
            value: function execute(arg) {
                var _this = this;
                return (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee() {
                    var transitionCreator, animationCreator, ref, mimetype, url, fit, color, startDelay, volume, muted, preloader, content, currentDomStructure, transition, animation, targetShowUpDelay, contentPlayDelay, contentPlayTimeoutId, slideData, activeSlides, msg;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                transitionCreator = _this.prepareTransition(arg);
                                animationCreator = _this.prepareAnimation(arg);
                                ref = (0, $1he00.default)({}, $8321c7a55257bc04$var$defaultOptionalShowArgs, arg), mimetype = ref.mimetype, url = ref.url, fit = ref.fit, color = ref.color, startDelay = ref.startDelay, volume = ref.volume, muted = ref.muted;
                                preloader = _this.state.preloader;
                                content = (0, $231a03076fd592fe$export$2e2bcd8739ae039).create(mimetype, url, preloader);
                                currentDomStructure = _this.appendCurrentContent(content, color !== null && color !== void 0 ? color : "black");
                                (0, $52c6235137f4b96a$export$2e2bcd8739ae039)(currentDomStructure.slideElement, content, fit);
                                (0, $231a03076fd592fe$export$2e2bcd8739ae039).setMuted(content, _this.state.muted || muted);
                                (0, $231a03076fd592fe$export$2e2bcd8739ae039).setVolume(content, volume, "absolute");
                                transition = transitionCreator(currentDomStructure.slideOuterWrapperElement);
                                animation = animationCreator(currentDomStructure.slideElement);
                                targetShowUpDelay = transition.targetShowUpDelay;
                                contentPlayDelay = startDelay !== null && startDelay !== void 0 ? startDelay : targetShowUpDelay;
                                contentPlayTimeoutId = setTimeout(function() {
                                    return (0, $231a03076fd592fe$export$2e2bcd8739ae039).play(content);
                                }, contentPlayDelay * 1000);
                                slideData = (0, $8zIXb.default)((0, $1he00.default)({}, currentDomStructure), {
                                    transition: transition,
                                    animation: animation,
                                    contentPlayTimeoutId: contentPlayTimeoutId
                                });
                                activeSlides = _this.state.activeSlides;
                                activeSlides.push(slideData);
                                _ctx.prev = 17;
                                _ctx.next = 20;
                                return transition.out();
                            case 20:
                                _ctx.next = 26;
                                break;
                            case 22:
                                _ctx.prev = 22;
                                _ctx.t0 = _ctx["catch"](17);
                                msg = "Waiting for transition.out() failed. Proceeding anyway";
                                if (_ctx.t0) _this.state.log.warn(msg, _ctx.t0);
                                else _this.state.log.warn(msg);
                            case 26:
                                _this.removePreviousSlides(slideData);
                            case 27:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, null, [
                        [
                            17,
                            22
                        ]
                    ]);
                }))();
            }
        },
        {
            key: "prepareTransition",
            value: function prepareTransition(param) {
                var transition = param.transition;
                var ref = transition !== null && transition !== void 0 ? transition : {
                    type: "none",
                    options: {}
                }, type = ref.type, options = ref.options;
                var transitionFactory = this.state.transitionFactory;
                return transitionFactory.prepare(type, options);
            }
        },
        {
            key: "prepareAnimation",
            value: function prepareAnimation(param) {
                var animation = param.animation;
                var ref = animation !== null && animation !== void 0 ? animation : {
                    type: "none",
                    options: {}
                }, type = ref.type, options = ref.options;
                var animationFactory = this.state.animationFactory;
                return animationFactory.prepare(type, options);
            }
        },
        {
            // eslint-disable-next-line class-methods-use-this
            key: "unpack",
            value: function unpack(options) {
                return $8321c7a55257bc04$var$validateShowActionOptions(options);
            }
        }
    ]);
    return ShowAction;
}((0, $b115edcffc1aaa37$export$2e2bcd8739ae039));
var $8321c7a55257bc04$export$2e2bcd8739ae039 = $8321c7a55257bc04$var$ShowAction;



var $dzBOF = parcelRequire("dzBOF");

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $5sttm = parcelRequire("5sttm");

var $1he00 = parcelRequire("1he00");

var $8zIXb = parcelRequire("8zIXb");

var $8oBD6 = parcelRequire("8oBD6");

var $aT4ZK = parcelRequire("aT4ZK");


// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
var $2649752ae9b46642$var$clearActionOptionsSchema = {
    type: "object",
    properties: {
        color: {
            type: "string"
        },
        transition: {
            type: "object",
            properties: {
                type: {
                    type: "string"
                },
                options: {
                    type: "object"
                }
            },
            required: [
                "type"
            ]
        }
    }
};
var $2649752ae9b46642$var$validateClearActionOptions = (0, $d7c405f0daaed1ac$export$9ea1f4fe5062c6d)($2649752ae9b46642$var$clearActionOptionsSchema);
var $2649752ae9b46642$var$defaultOptionalClearArgs = {
    color: "black",
    transition: {
        type: "none",
        options: {}
    }
};
var $2649752ae9b46642$var$ClearAction = /*#__PURE__*/ function(Base1) {
    "use strict";
    (0, $5sttm.default)(ClearAction, Base1);
    var _super = (0, $8oBD6.default)(ClearAction);
    function ClearAction(state) {
        (0, $f3yih.default)(this, ClearAction);
        return _super.call(this, state);
    }
    (0, $2x3qu.default)(ClearAction, [
        {
            key: "execute",
            value: // eslint-disable-next-line class-methods-use-this
            function execute(arg) {
                var _this = this;
                return (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee() {
                    var showActionOptions, viewer;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                showActionOptions = (0, $8zIXb.default)((0, $1he00.default)({}, $2649752ae9b46642$var$defaultOptionalClearArgs, arg), {
                                    mimetype: "image/gif",
                                    url: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                                    animation: {
                                        type: "none"
                                    }
                                });
                                viewer = _this.state.viewer;
                                _ctx.next = 4;
                                return viewer.execute("show", showActionOptions);
                            case 4:
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
            value: function unpack(options) {
                return $2649752ae9b46642$var$validateClearActionOptions(options);
            }
        }
    ]);
    return ClearAction;
}((0, $b115edcffc1aaa37$export$2e2bcd8739ae039));
var $2649752ae9b46642$export$2e2bcd8739ae039 = $2649752ae9b46642$var$ClearAction;


/* eslint-disable import/prefer-default-export */ function $58b88e7064bf4641$export$c2aff9e92362a9b2(root, stylesheetText, id) {
    var style = document.createElement("style");
    if (typeof id !== "undefined") style.id = id;
    style.textContent = stylesheetText;
    var selector = "style[type='text/css']:last-of-type, style:not([type]):last-of-type";
    var lastStyleElem = root.querySelector(selector);
    if (lastStyleElem === null) root.prepend(style);
    else lastStyleElem.after(style);
}
function $58b88e7064bf4641$export$d5858ef5ae9c7e87(elem, property, formatter, value) {
    if (typeof value !== "undefined") elem.style.setProperty(property, formatter(value));
}



var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $3jaBu = parcelRequire("3jaBu");

var $3cc7000cfe10810c$exports = {};

$parcel$export($3cc7000cfe10810c$exports, "NoneAnimation", function () { return $3cc7000cfe10810c$export$a27a75f1864d99f4; }, function (v) { return $3cc7000cfe10810c$export$a27a75f1864d99f4 = v; });

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $5sttm = parcelRequire("5sttm");

var $8oBD6 = parcelRequire("8oBD6");
var $54870c76e1a84d9b$exports = {};
$54870c76e1a84d9b$exports = "@-webkit-keyframes animation-none {\n  0%, 100% {\n    opacity: 1;\n  }\n}\n\n@keyframes animation-none {\n  0%, 100% {\n    opacity: 1;\n  }\n}\n\n.animation-none {\n  --animation-none-delay: 0s;\n  --animation-none-duration: 0s;\n}\n\n.animation-none > .content {\n  -webkit-animation-delay: var(--animation-none-delay);\n  animation-delay: var(--animation-none-delay);\n  -webkit-animation-duration: var(--animation-none-duration);\n  animation-duration: var(--animation-none-duration);\n  -webkit-animation-name: animation-none;\n  animation-name: animation-none;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n";





var $apDhX = parcelRequire("apDhX");

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $3jaBu = parcelRequire("3jaBu");

var $5sttm = parcelRequire("5sttm");

var $1he00 = parcelRequire("1he00");

var $8oBD6 = parcelRequire("8oBD6");

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $3jaBu = parcelRequire("3jaBu");

var $fbe767e9a27761f9$export$2e2bcd8739ae039 = /*#__PURE__*/ function() {
    "use strict";
    function BaseAnimation(element) {
        (0, $f3yih.default)(this, BaseAnimation);
        (0, $3jaBu.default)(this, "element", void 0);
        (0, $3jaBu.default)(this, "_isCancelled", false);
        (0, $3jaBu.default)(this, "_isDone", false);
        (0, $3jaBu.default)(this, "donePEC", void 0);
        this.element = element;
        this.donePEC = new (0, $2ec0177fc7e2e758$export$af22135957e110d7)();
        // prevent uncaught exceptions in promise
        this.donePEC.promise().catch(function() {});
    }
    (0, $2x3qu.default)(BaseAnimation, [
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
    return BaseAnimation;
}();


var $c6ddb612d8fa565d$export$74fdca545475e081 = function() {
    return {
        classList: [],
        cssPropertySetter: function() {},
        cssPropertyRemover: function() {},
        endEventFilter: function() {
            return true;
        },
        cancelEventFilter: function() {
            return true;
        },
        removeAtEnd: true,
        removeOnCancel: true
    };
};
var $c6ddb612d8fa565d$var$CssBasedAnimation = /*#__PURE__*/ function(BaseAnimation1) {
    "use strict";
    (0, $5sttm.default)(CssBasedAnimation, BaseAnimation1);
    var _super = (0, $8oBD6.default)(CssBasedAnimation);
    function CssBasedAnimation(content, options) {
        (0, $f3yih.default)(this, CssBasedAnimation);
        var _this;
        _this = _super.call(this, content);
        (0, $3jaBu.default)((0, $apDhX.default)(_this), "endHandler", void 0);
        (0, $3jaBu.default)((0, $apDhX.default)(_this), "cancelHandler", void 0);
        (0, $3jaBu.default)((0, $apDhX.default)(_this), "cssBasedAnimationOptions", void 0);
        var element = (0, $apDhX.default)(_this).element;
        _this.cssBasedAnimationOptions = (0, $1he00.default)({}, $c6ddb612d8fa565d$export$74fdca545475e081(), options);
        var _cssBasedAnimationOptions = _this.cssBasedAnimationOptions, cssPropertySetter = _cssBasedAnimationOptions.cssPropertySetter, endEventFilter = _cssBasedAnimationOptions.endEventFilter, cancelEventFilter = _cssBasedAnimationOptions.cancelEventFilter;
        _this.addClasses();
        cssPropertySetter(element);
        _this.endHandler = function(ae) {
            if (endEventFilter(ae)) _this.end();
        };
        _this.cancelHandler = function(ae) {
            if (cancelEventFilter(ae)) _this.cancelled();
        };
        element.addEventListener("animationend", _this.endHandler);
        element.addEventListener("animationcancel", _this.cancelHandler);
        return _this;
    }
    (0, $2x3qu.default)(CssBasedAnimation, [
        {
            key: "addClasses",
            value: function addClasses() {
                var classList = this.cssBasedAnimationOptions.classList;
                var element = this.element;
                classList.forEach(function(c) {
                    return element.classList.add(c);
                });
            }
        },
        {
            key: "removeClasses",
            value: function removeClasses() {
                var classList = this.cssBasedAnimationOptions.classList;
                var element = this.element;
                classList.forEach(function(c) {
                    return element.classList.remove(c);
                });
            }
        },
        {
            key: "end",
            value: function end() {
                if (!this.isCancelled() && !this.isDone()) {
                    this.cleanup(this.cssBasedAnimationOptions.removeAtEnd);
                    this._isDone = true;
                    this.donePEC.resolve();
                }
            }
        },
        {
            key: "cancelled",
            value: function cancelled() {
                if (!this.isCancelled() && !this.isDone()) {
                    this.cleanup(this.cssBasedAnimationOptions.removeOnCancel);
                    this._isCancelled = true;
                    this.donePEC.reject();
                }
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                if (!this.isCancelled() && !this.isDone()) {
                    if (this.cssBasedAnimationOptions.removeOnCancel) this.removeClasses();
                    else this.cancelled();
                }
            }
        },
        {
            key: "cleanup",
            value: function cleanup(removeClassesAndProperties) {
                var ref = this, element = ref.element, cssBasedAnimationOptions = ref.cssBasedAnimationOptions;
                var cssPropertyRemover = cssBasedAnimationOptions.cssPropertyRemover;
                element.removeEventListener("animationend", this.endHandler);
                element.removeEventListener("animationcancel", this.cancelHandler);
                if (removeClassesAndProperties) {
                    this.removeClasses();
                    cssPropertyRemover(element);
                } else element.style.animationPlayState = "paused";
            }
        }
    ]);
    return CssBasedAnimation;
}((0, $fbe767e9a27761f9$export$2e2bcd8739ae039));
var $c6ddb612d8fa565d$export$2e2bcd8739ae039 = $c6ddb612d8fa565d$var$CssBasedAnimation;



var $3cc7000cfe10810c$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $3cc7000cfe10810c$var$NoneAnimation_1;
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
var $3cc7000cfe10810c$var$noneAnimationOptionsSchema = {
    type: "object",
    properties: {
        delay: {
            type: "number",
            minimum: 0
        },
        duration: {
            type: "number",
            minimum: 0
        }
    }
};
var $3cc7000cfe10810c$var$validateNoneAnimationOptions = (0, $d7c405f0daaed1ac$export$9ea1f4fe5062c6d)($3cc7000cfe10810c$var$noneAnimationOptionsSchema);
var $3cc7000cfe10810c$export$a27a75f1864d99f4 = $3cc7000cfe10810c$var$NoneAnimation_1 = /*#__PURE__*/ function(CssBasedAnimation1) {
    "use strict";
    (0, $5sttm.default)(NoneAnimation1, CssBasedAnimation1);
    var _super = (0, $8oBD6.default)(NoneAnimation1);
    function NoneAnimation1(element, options) {
        (0, $f3yih.default)(this, NoneAnimation1);
        return _super.call(this, element, $3cc7000cfe10810c$var$NoneAnimation_1.createCssBasedAnimationOptions(options));
    }
    (0, $2x3qu.default)(NoneAnimation1, null, [
        {
            key: "createCssBasedAnimationOptions",
            value: function createCssBasedAnimationOptions(options) {
                var animationEventFilter = function(param) {
                    var animationName = param.animationName;
                    return animationName === "animation-none";
                };
                var cssPropertySetter = function(e) {
                    var delay = options.delay, duration = options.duration;
                    var s = (0, $58b88e7064bf4641$export$d5858ef5ae9c7e87);
                    s(e, "--animation-none-delay", function(v) {
                        return "".concat(v, "s");
                    }, delay);
                    s(e, "--animation-none-duration", function(v) {
                        return "".concat(v, "s");
                    }, duration);
                };
                var cssPropertyRemover = function(e) {
                    var propertyNames = [
                        "--animation-none-delay",
                        "--animation-none-duration", 
                    ];
                    propertyNames.forEach(function(n) {
                        return e.style.removeProperty(n);
                    });
                };
                return {
                    classList: [
                        "animation",
                        "animation-none"
                    ],
                    endEventFilter: animationEventFilter,
                    cancelEventFilter: animationEventFilter,
                    cssPropertySetter: cssPropertySetter,
                    cssPropertyRemover: cssPropertyRemover,
                    removeAtEnd: false,
                    removeOnCancel: false
                };
            }
        },
        {
            key: "unpack",
            value: function unpack(options) {
                return $3cc7000cfe10810c$var$validateNoneAnimationOptions(options);
            }
        },
        {
            key: "prepare",
            value: function prepare(options) {
                var unpackedOptions = $3cc7000cfe10810c$var$NoneAnimation_1.unpack(options);
                return function(element) {
                    return new $3cc7000cfe10810c$var$NoneAnimation_1(element, unpackedOptions);
                };
            }
        },
        {
            key: "getStyleSheetAsString",
            value: function getStyleSheetAsString() {
                return 0, (/*@__PURE__*/$parcel$interopDefault($54870c76e1a84d9b$exports));
            }
        }
    ]);
    return NoneAnimation1;
}((0, $c6ddb612d8fa565d$export$2e2bcd8739ae039));
$3cc7000cfe10810c$export$a27a75f1864d99f4 = $3cc7000cfe10810c$var$NoneAnimation_1 = $3cc7000cfe10810c$var$__decorate([
    (0, $688e8b72d0f8e53f$export$77e1154930d99c3d)()
], $3cc7000cfe10810c$export$a27a75f1864d99f4);


var $98f98b7c216cfdc6$exports = {};

$parcel$export($98f98b7c216cfdc6$exports, "PanZoomAnimation", function () { return $98f98b7c216cfdc6$export$26ae749f2a727050; }, function (v) { return $98f98b7c216cfdc6$export$26ae749f2a727050 = v; });

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $5sttm = parcelRequire("5sttm");

var $8oBD6 = parcelRequire("8oBD6");
var $efcffbd498e1c8e1$exports = {};
$efcffbd498e1c8e1$exports = "@-webkit-keyframes animation-pan-zoom {\n  0% {\n    -webkit-transform: scale(var(--animation-pan-zoom-origin-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-origin-x)), calc(50% - 100% * var(--animation-pan-zoom-origin-y)) );\n    transform: scale(var(--animation-pan-zoom-origin-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-origin-x)), calc(50% - 100% * var(--animation-pan-zoom-origin-y)) );\n  }\n\n  100% {\n    -webkit-transform: scale(var(--animation-pan-zoom-target-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-target-x)), calc(50% - 100% * var(--animation-pan-zoom-target-y)) );\n    transform: scale(var(--animation-pan-zoom-target-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-target-x)), calc(50% - 100% * var(--animation-pan-zoom-target-y)) );\n  }\n}\n\n@keyframes animation-pan-zoom {\n  0% {\n    -webkit-transform: scale(var(--animation-pan-zoom-origin-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-origin-x)), calc(50% - 100% * var(--animation-pan-zoom-origin-y)) );\n    transform: scale(var(--animation-pan-zoom-origin-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-origin-x)), calc(50% - 100% * var(--animation-pan-zoom-origin-y)) );\n  }\n\n  100% {\n    -webkit-transform: scale(var(--animation-pan-zoom-target-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-target-x)), calc(50% - 100% * var(--animation-pan-zoom-target-y)) );\n    transform: scale(var(--animation-pan-zoom-target-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-target-x)), calc(50% - 100% * var(--animation-pan-zoom-target-y)) );\n  }\n}\n\n.animation-pan-zoom {\n  --animation-pan-zoom-delay: 0s;\n  --animation-pan-zoom-duration: 0s;\n  --animation-pan-zoom-origin-x: .5;\n  --animation-pan-zoom-origin-y: .5;\n  --animation-pan-zoom-origin-scale: 1;\n  --animation-pan-zoom-target-x: .5;\n  --animation-pan-zoom-target-y: .5;\n  --animation-pan-zoom-target-scale: 1;\n}\n\n.animation-pan-zoom .content {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  -webkit-animation-name: animation-pan-zoom;\n  animation-name: animation-pan-zoom;\n  -webkit-animation-delay: var(--animation-pan-zoom-delay);\n  animation-delay: var(--animation-pan-zoom-delay);\n  -webkit-animation-duration: var(--animation-pan-zoom-duration);\n  animation-duration: var(--animation-pan-zoom-duration);\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n";






var $98f98b7c216cfdc6$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $98f98b7c216cfdc6$var$PanZoomAnimation_1;
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
var $98f98b7c216cfdc6$var$partialViewSchema = {
    type: "object",
    properties: {
        x: {
            type: "number"
        },
        y: {
            type: "number"
        },
        scale: {
            type: "number",
            minimum: 0
        }
    }
};
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
var $98f98b7c216cfdc6$var$panZoomAnimationOptionsSchema = {
    type: "object",
    properties: {
        delay: {
            type: "number",
            minimum: 0
        },
        duration: {
            type: "number",
            minimum: 0
        },
        from: $98f98b7c216cfdc6$var$partialViewSchema,
        to: $98f98b7c216cfdc6$var$partialViewSchema
    }
};
var $98f98b7c216cfdc6$var$validatePanZoomAnimationOptions = (0, $d7c405f0daaed1ac$export$9ea1f4fe5062c6d)($98f98b7c216cfdc6$var$panZoomAnimationOptionsSchema);
var $98f98b7c216cfdc6$export$26ae749f2a727050 = $98f98b7c216cfdc6$var$PanZoomAnimation_1 = /*#__PURE__*/ function(CssBasedAnimation1) {
    "use strict";
    (0, $5sttm.default)(PanZoomAnimation1, CssBasedAnimation1);
    var _super = (0, $8oBD6.default)(PanZoomAnimation1);
    function PanZoomAnimation1(content, options) {
        (0, $f3yih.default)(this, PanZoomAnimation1);
        return _super.call(this, content, $98f98b7c216cfdc6$var$PanZoomAnimation_1.createCssBasedAnimationOptions(options));
    }
    (0, $2x3qu.default)(PanZoomAnimation1, null, [
        {
            key: "createCssBasedAnimationOptions",
            value: function createCssBasedAnimationOptions(options) {
                var animationEventFilter = function(param) {
                    var animationName = param.animationName;
                    return animationName === "animation-pan-zoom";
                };
                var cssPropertySetter = function(e) {
                    var delay = options.delay, duration = options.duration, from = options.from, to = options.to;
                    var s = (0, $58b88e7064bf4641$export$d5858ef5ae9c7e87);
                    s(e, "--animation-pan-zoom-delay", function(v) {
                        return "".concat(v, "s");
                    }, delay);
                    s(e, "--animation-pan-zoom-duration", function(v) {
                        return "".concat(v, "s");
                    }, duration);
                    s(e, "--animation-pan-zoom-origin-x", function(v) {
                        return "".concat(v);
                    }, from === null || from === void 0 ? void 0 : from.x);
                    s(e, "--animation-pan-zoom-origin-y", function(v) {
                        return "".concat(v);
                    }, from === null || from === void 0 ? void 0 : from.y);
                    s(e, "--animation-pan-zoom-origin-scale", function(v) {
                        return "".concat(v);
                    }, from === null || from === void 0 ? void 0 : from.scale);
                    s(e, "--animation-pan-zoom-target-x", function(v) {
                        return "".concat(v);
                    }, to === null || to === void 0 ? void 0 : to.x);
                    s(e, "--animation-pan-zoom-target-y", function(v) {
                        return "".concat(v);
                    }, to === null || to === void 0 ? void 0 : to.y);
                    s(e, "--animation-pan-zoom-target-scale", function(v) {
                        return "".concat(v);
                    }, to === null || to === void 0 ? void 0 : to.scale);
                };
                var cssPropertyRemover = function(e) {
                    var propertyNames = [
                        "--animation-pan-zoom-delay",
                        "--animation-pan-zoom-duration",
                        "--animation-pan-zoom-origin-x",
                        "--animation-pan-zoom-origin-y",
                        "--animation-pan-zoom-origin-scale",
                        "--animation-pan-zoom-target-x",
                        "--animation-pan-zoom-target-y",
                        "--animation-pan-zoom-target-scale", 
                    ];
                    propertyNames.forEach(function(n) {
                        return e.style.removeProperty(n);
                    });
                };
                return {
                    classList: [
                        "animation",
                        "animation-pan-zoom"
                    ],
                    endEventFilter: animationEventFilter,
                    cancelEventFilter: animationEventFilter,
                    cssPropertySetter: cssPropertySetter,
                    cssPropertyRemover: cssPropertyRemover,
                    removeAtEnd: false,
                    removeOnCancel: false
                };
            }
        },
        {
            key: "unpack",
            value: function unpack(options) {
                return $98f98b7c216cfdc6$var$validatePanZoomAnimationOptions(options);
            }
        },
        {
            key: "prepare",
            value: function prepare(options) {
                var unpackedOptions = $98f98b7c216cfdc6$var$PanZoomAnimation_1.unpack(options);
                return function(content) {
                    return new $98f98b7c216cfdc6$var$PanZoomAnimation_1(content, unpackedOptions);
                };
            }
        },
        {
            key: "getStyleSheetAsString",
            value: function getStyleSheetAsString() {
                return 0, (/*@__PURE__*/$parcel$interopDefault($efcffbd498e1c8e1$exports));
            }
        }
    ]);
    return PanZoomAnimation1;
}((0, $c6ddb612d8fa565d$export$2e2bcd8739ae039));
$98f98b7c216cfdc6$export$26ae749f2a727050 = $98f98b7c216cfdc6$var$PanZoomAnimation_1 = $98f98b7c216cfdc6$var$__decorate([
    (0, $688e8b72d0f8e53f$export$77e1154930d99c3d)()
], $98f98b7c216cfdc6$export$26ae749f2a727050);
var $98f98b7c216cfdc6$export$2e2bcd8739ae039 = $98f98b7c216cfdc6$export$26ae749f2a727050;


var $ecb242e9f64e02c3$var$AnimationFactory = /*#__PURE__*/ function() {
    "use strict";
    function AnimationFactory(root) {
        (0, $f3yih.default)(this, AnimationFactory);
        (0, $3jaBu.default)(this, "root", void 0);
        (0, $3jaBu.default)(this, "animationRegistry", new Map());
        this.root = root;
        this.registerKnownTransitions();
    }
    (0, $2x3qu.default)(AnimationFactory, [
        {
            key: "registerKnownTransitions",
            value: function registerKnownTransitions() {
                this.register("none", (0, $3cc7000cfe10810c$exports.NoneAnimation));
                this.register("pan-zoom", (0, $98f98b7c216cfdc6$exports.PanZoomAnimation));
            }
        },
        {
            key: "register",
            value: function register(id, AnimationClass) {
                if (this.animationRegistry.has(id)) throw new Error("Animation type already registered");
                (0, $58b88e7064bf4641$export$c2aff9e92362a9b2)(this.root, AnimationClass.getStyleSheetAsString(), "animation-".concat(id));
                this.animationRegistry.set(id, AnimationClass);
            }
        },
        {
            key: "prepare",
            value: function prepare() {
                var type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "none", options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var AnimationClass = this.animationRegistry.get(type);
                if (!AnimationClass) throw new Error("Unknown animation type: ".concat(type));
                // unpacks the options and throws an exception if they are invalid,
                // but does create the actual transition yet
                return AnimationClass.prepare(options);
            }
        }
    ]);
    return AnimationFactory;
}();
var $ecb242e9f64e02c3$export$2e2bcd8739ae039 = $ecb242e9f64e02c3$var$AnimationFactory;



var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $3jaBu = parcelRequire("3jaBu");
var $ca586deb00ed010b$exports = {};

$parcel$export($ca586deb00ed010b$exports, "NoneTransition", function () { return $ca586deb00ed010b$export$b1e3715c3749f16; }, function (v) { return $ca586deb00ed010b$export$b1e3715c3749f16 = v; });

var $apDhX = parcelRequire("apDhX");

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $3jaBu = parcelRequire("3jaBu");

var $5sttm = parcelRequire("5sttm");

var $8oBD6 = parcelRequire("8oBD6");
var $57f693248248f92f$exports = {};
$57f693248248f92f$exports = "@-webkit-keyframes transition-none {\n  0%, 100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-none {\n  0%, 100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes transition-none-out {\n  0%, 100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-none-out {\n  0%, 100% {\n    opacity: 1;\n  }\n}\n\n.transition-none {\n  --transition-none-delay: 0s;\n  --transition-none-duration: 0s;\n  opacity: 0;\n  -webkit-animation-delay: var(--transition-none-delay);\n  animation-delay: var(--transition-none-delay);\n  -webkit-animation-duration: var(--transition-none-duration), 0s;\n  animation-duration: var(--transition-none-duration), 0s;\n  -webkit-animation-name: transition-none, transition-none-out;\n  animation-name: transition-none, transition-none-out;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n\n";



var $apDhX = parcelRequire("apDhX");

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $3jaBu = parcelRequire("3jaBu");

var $jdvqV = parcelRequire("jdvqV");

var $7l5ho = parcelRequire("7l5ho");

var $5sttm = parcelRequire("5sttm");

var $1he00 = parcelRequire("1he00");

var $8zIXb = parcelRequire("8zIXb");

var $8oBD6 = parcelRequire("8oBD6");


var $8e069b25d58ac599$export$7b0c9a61a7106e55 = function() {
    return (0, $8zIXb.default)((0, $1he00.default)({}, (0, $c6ddb612d8fa565d$export$74fdca545475e081)()), {
        outEndEventFilter: function() {
            return true;
        }
    });
};
var $8e069b25d58ac599$var$CssBasedTransition = /*#__PURE__*/ function(CssBasedAnimation1) {
    "use strict";
    (0, $5sttm.default)(CssBasedTransition, CssBasedAnimation1);
    var _super = (0, $8oBD6.default)(CssBasedTransition);
    function CssBasedTransition(content, options) {
        (0, $f3yih.default)(this, CssBasedTransition);
        var _this;
        _this = _super.call(this, content, options);
        (0, $3jaBu.default)((0, $apDhX.default)(_this), "targetShowUpDelay", void 0);
        (0, $3jaBu.default)((0, $apDhX.default)(_this), "_isOut", false);
        (0, $3jaBu.default)((0, $apDhX.default)(_this), "outPEC", void 0);
        (0, $3jaBu.default)((0, $apDhX.default)(_this), "outEndHandler", void 0);
        _this.targetShowUpDelay = options.targetShowUpDelay;
        _this.outPEC = new (0, $2ec0177fc7e2e758$export$af22135957e110d7)();
        // prevent uncaught exceptions in promise
        _this.outPEC.promise().catch(function() {});
        var outEndEventFilter = (0, $1he00.default)({}, $8e069b25d58ac599$export$7b0c9a61a7106e55(), options).outEndEventFilter;
        _this.outEndHandler = function(ae) {
            if (outEndEventFilter(ae)) _this.outEnd();
        };
        content.addEventListener("animationend", _this.outEndHandler);
        return _this;
    }
    (0, $2x3qu.default)(CssBasedTransition, [
        {
            key: "outEnd",
            value: function outEnd() {
                if (!this.isCancelled() && !this.isOut()) {
                    this.element.removeEventListener("animationend", this.outEndHandler);
                    this._isOut = true;
                    this.outPEC.resolve();
                }
            }
        },
        {
            key: "out",
            value: function out() {
                return this.outPEC.promise();
            }
        },
        {
            key: "isOut",
            value: function isOut() {
                return this._isOut;
            }
        },
        {
            key: "cancel",
            value: function cancel() {
                if (!this.isCancelled() && !this.isDone()) {
                    this.outPEC.reject();
                    (0, $jdvqV.default)((0, $7l5ho.default)(CssBasedTransition.prototype), "cancel", this).call(this);
                }
            }
        }
    ]);
    return CssBasedTransition;
}((0, $c6ddb612d8fa565d$export$2e2bcd8739ae039));
var $8e069b25d58ac599$export$2e2bcd8739ae039 = $8e069b25d58ac599$var$CssBasedTransition;





var $ca586deb00ed010b$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $ca586deb00ed010b$var$NoneTransition_1;
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
var $ca586deb00ed010b$var$noneTransitionOptionsSchema = {
    type: "object",
    properties: {
        delay: {
            type: "number",
            minimum: 0
        },
        duration: {
            type: "number",
            minimum: 0
        }
    }
};
var $ca586deb00ed010b$var$validateNoneTransitionOptions = (0, $d7c405f0daaed1ac$export$9ea1f4fe5062c6d)($ca586deb00ed010b$var$noneTransitionOptionsSchema);
var $ca586deb00ed010b$export$b1e3715c3749f16 = $ca586deb00ed010b$var$NoneTransition_1 = /*#__PURE__*/ function(CssBasedTransition1) {
    "use strict";
    (0, $5sttm.default)(NoneTransition1, CssBasedTransition1);
    var _super = (0, $8oBD6.default)(NoneTransition1);
    function NoneTransition1(element, options) {
        (0, $f3yih.default)(this, NoneTransition1);
        var _this;
        _this = _super.call(this, element, $ca586deb00ed010b$var$NoneTransition_1.createCssBasedTransitionOptions(options));
        (0, $3jaBu.default)((0, $apDhX.default)(_this), "targetShowUpDelay", 0);
        return _this;
    }
    (0, $2x3qu.default)(NoneTransition1, null, [
        {
            key: "createCssBasedTransitionOptions",
            value: function createCssBasedTransitionOptions(options) {
                var outAnimationEventFilter = function(param) {
                    var animationName = param.animationName;
                    return animationName === "transition-none-out";
                };
                var animationEventFilter = function(param) {
                    var animationName = param.animationName;
                    return animationName === "transition-none";
                };
                var delay = options.delay, duration = options.duration;
                var cssPropertySetter = function(e) {
                    var s = (0, $58b88e7064bf4641$export$d5858ef5ae9c7e87);
                    s(e, "--transition-none-delay", function(v) {
                        return "".concat(v, "s");
                    }, delay);
                    s(e, "--transition-none-duration", function(v) {
                        return "".concat(v, "s");
                    }, duration);
                };
                var cssPropertyRemover = function(e) {
                    var propertyNames = [
                        "--transition-none-delay",
                        "--transition-none-duration", 
                    ];
                    propertyNames.forEach(function(n) {
                        return e.style.removeProperty(n);
                    });
                };
                return {
                    classList: [
                        "transition",
                        "transition-none"
                    ],
                    outEndEventFilter: outAnimationEventFilter,
                    endEventFilter: animationEventFilter,
                    cancelEventFilter: animationEventFilter,
                    cssPropertySetter: cssPropertySetter,
                    cssPropertyRemover: cssPropertyRemover,
                    removeAtEnd: true,
                    removeOnCancel: true,
                    targetShowUpDelay: delay !== null && delay !== void 0 ? delay : 0
                };
            }
        },
        {
            key: "unpack",
            value: function unpack(options) {
                return $ca586deb00ed010b$var$validateNoneTransitionOptions(options);
            }
        },
        {
            key: "prepare",
            value: function prepare(options) {
                var unpackedOptions = $ca586deb00ed010b$var$NoneTransition_1.unpack(options);
                return function(element) {
                    return new $ca586deb00ed010b$var$NoneTransition_1(element, unpackedOptions);
                };
            }
        },
        {
            key: "getStyleSheetAsString",
            value: function getStyleSheetAsString() {
                return 0, (/*@__PURE__*/$parcel$interopDefault($57f693248248f92f$exports));
            }
        }
    ]);
    return NoneTransition1;
}((0, $8e069b25d58ac599$export$2e2bcd8739ae039));
$ca586deb00ed010b$export$b1e3715c3749f16 = $ca586deb00ed010b$var$NoneTransition_1 = $ca586deb00ed010b$var$__decorate([
    (0, $688e8b72d0f8e53f$export$77e1154930d99c3d)()
], $ca586deb00ed010b$export$b1e3715c3749f16);
var $ca586deb00ed010b$export$2e2bcd8739ae039 = $ca586deb00ed010b$export$b1e3715c3749f16;


var $e03d975d69034be5$exports = {};

$parcel$export($e03d975d69034be5$exports, "FadeTransition", function () { return $e03d975d69034be5$export$b4cd2c531e831209; }, function (v) { return $e03d975d69034be5$export$b4cd2c531e831209 = v; });

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $5sttm = parcelRequire("5sttm");

var $1he00 = parcelRequire("1he00");

var $8oBD6 = parcelRequire("8oBD6");
var $664cce0b65d3f865$exports = {};
$664cce0b65d3f865$exports = "@-webkit-keyframes transition-fade-overlay {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-fade-overlay {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes transition-fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.transition-fade {\n  --transition-fade-delay: 0s;\n  --transition-fade-duration: -1s;\n  --transition-fade-duration-half: calc(var(--transition-fade-duration) / 2);\n  --transition-fade-color: black;\n}\n\n.transition-fade > *, .transition-fade:before {\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-duration: var(--transition-fade-duration-half);\n  animation-duration: var(--transition-fade-duration-half);\n}\n\n.transition-fade > * {\n  -webkit-animation-name: transition-fade;\n  animation-name: transition-fade;\n  -webkit-animation-delay: calc(var(--transition-fade-delay)  + var(--transition-fade-duration-half));\n  animation-delay: calc(var(--transition-fade-delay)  + var(--transition-fade-duration-half));\n}\n\n.transition-fade:before {\n  content: \"\";\n  background-color: var(--transition-fade-color);\n  width: 100%;\n  height: 100%;\n  -webkit-animation-name: transition-fade-overlay;\n  animation-name: transition-fade-overlay;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n";






var $e03d975d69034be5$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $e03d975d69034be5$var$FadeTransition_1;
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
var $e03d975d69034be5$var$fadeTransitionOptionsSchema = {
    type: "object",
    properties: {
        delay: {
            type: "number",
            minimum: 0
        },
        duration: {
            type: "number",
            minimum: 0
        },
        color: {
            type: "string"
        }
    }
};
var $e03d975d69034be5$var$validateFadeTransitionOptions = (0, $d7c405f0daaed1ac$export$9ea1f4fe5062c6d)($e03d975d69034be5$var$fadeTransitionOptionsSchema);
// overwrites the (invalid) value set as default in the SCSS file
var $e03d975d69034be5$var$defaultDuration = 2;
var $e03d975d69034be5$export$b4cd2c531e831209 = $e03d975d69034be5$var$FadeTransition_1 = /*#__PURE__*/ function(CssBasedTransition1) {
    "use strict";
    (0, $5sttm.default)(FadeTransition1, CssBasedTransition1);
    var _super = (0, $8oBD6.default)(FadeTransition1);
    function FadeTransition1(element, options) {
        (0, $f3yih.default)(this, FadeTransition1);
        return _super.call(this, element, $e03d975d69034be5$var$FadeTransition_1.createCssBasedTransitionOptions(options));
    }
    (0, $2x3qu.default)(FadeTransition1, null, [
        {
            key: "createCssBasedTransitionOptions",
            value: function createCssBasedTransitionOptions(options) {
                var outAnimationEventFilter = function(param) {
                    var animationName = param.animationName;
                    return animationName === "transition-fade-overlay";
                };
                var animationEventFilter = function(param) {
                    var animationName = param.animationName;
                    return animationName === "transition-fade";
                };
                var ref = (0, $1he00.default)({
                    duration: $e03d975d69034be5$var$defaultDuration
                }, options), delay = ref.delay, duration = ref.duration, color = ref.color;
                var cssPropertySetter = function(e) {
                    var s = (0, $58b88e7064bf4641$export$d5858ef5ae9c7e87);
                    s(e, "--transition-fade-delay", function(v) {
                        return "".concat(v, "s");
                    }, delay);
                    s(e, "--transition-fade-duration", function(v) {
                        return "".concat(v, "s");
                    }, duration);
                    s(e, "--transition-fade-color", function(v) {
                        return "".concat(v);
                    }, color);
                };
                var cssPropertyRemover = function(e) {
                    var propertyNames = [
                        "--transition-fade-delay",
                        "--transition-fade-duration",
                        "--transition-fade-color", 
                    ];
                    propertyNames.forEach(function(n) {
                        return e.style.removeProperty(n);
                    });
                };
                return {
                    classList: [
                        "transition",
                        "transition-fade"
                    ],
                    outEndEventFilter: outAnimationEventFilter,
                    endEventFilter: animationEventFilter,
                    cancelEventFilter: animationEventFilter,
                    cssPropertySetter: cssPropertySetter,
                    cssPropertyRemover: cssPropertyRemover,
                    removeAtEnd: true,
                    removeOnCancel: true,
                    targetShowUpDelay: (delay !== null && delay !== void 0 ? delay : 0) + duration / 2
                };
            }
        },
        {
            key: "unpack",
            value: function unpack(options) {
                return $e03d975d69034be5$var$validateFadeTransitionOptions(options);
            }
        },
        {
            key: "prepare",
            value: function prepare(options) {
                var unpackedOptions = $e03d975d69034be5$var$FadeTransition_1.unpack(options);
                return function(element) {
                    return new $e03d975d69034be5$var$FadeTransition_1(element, unpackedOptions);
                };
            }
        },
        {
            key: "getStyleSheetAsString",
            value: function getStyleSheetAsString() {
                return 0, (/*@__PURE__*/$parcel$interopDefault($664cce0b65d3f865$exports));
            }
        }
    ]);
    return FadeTransition1;
}((0, $8e069b25d58ac599$export$2e2bcd8739ae039));
$e03d975d69034be5$export$b4cd2c531e831209 = $e03d975d69034be5$var$FadeTransition_1 = $e03d975d69034be5$var$__decorate([
    (0, $688e8b72d0f8e53f$export$77e1154930d99c3d)()
], $e03d975d69034be5$export$b4cd2c531e831209);
var $e03d975d69034be5$export$2e2bcd8739ae039 = $e03d975d69034be5$export$b4cd2c531e831209;


var $ad3a7c7195869e2a$exports = {};

$parcel$export($ad3a7c7195869e2a$exports, "CrossFadeTransition", function () { return $ad3a7c7195869e2a$export$4143b605098af1c4; }, function (v) { return $ad3a7c7195869e2a$export$4143b605098af1c4 = v; });

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $5sttm = parcelRequire("5sttm");

var $8oBD6 = parcelRequire("8oBD6");
var $d035a76ca67f5d46$exports = {};
$d035a76ca67f5d46$exports = "@-webkit-keyframes transition-cross-fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-cross-fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.transition-cross-fade {\n  --transition-cross-fade-delay: 0s;\n  --transition-cross-fade-duration: 1s;\n  -webkit-animation-delay: var(--transition-cross-fade-delay);\n  animation-delay: var(--transition-cross-fade-delay);\n  -webkit-animation-duration: var(--transition-cross-fade-duration);\n  animation-duration: var(--transition-cross-fade-duration);\n  -webkit-animation-name: transition-cross-fade;\n  animation-name: transition-cross-fade;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n";






var $ad3a7c7195869e2a$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $ad3a7c7195869e2a$var$CrossFadeTransition_1;
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
var $ad3a7c7195869e2a$var$crossFadeTransitionOptionsSchema = {
    type: "object",
    properties: {
        delay: {
            type: "number",
            minimum: 0
        },
        duration: {
            type: "number",
            minimum: 0
        }
    }
};
var $ad3a7c7195869e2a$var$validateCrossFadeTransitionOptions = (0, $d7c405f0daaed1ac$export$9ea1f4fe5062c6d)($ad3a7c7195869e2a$var$crossFadeTransitionOptionsSchema);
var $ad3a7c7195869e2a$export$4143b605098af1c4 = $ad3a7c7195869e2a$var$CrossFadeTransition_1 = /*#__PURE__*/ function(CssBasedTransition1) {
    "use strict";
    (0, $5sttm.default)(CrossFadeTransition1, CssBasedTransition1);
    var _super = (0, $8oBD6.default)(CrossFadeTransition1);
    function CrossFadeTransition1(element, options) {
        (0, $f3yih.default)(this, CrossFadeTransition1);
        return _super.call(this, element, $ad3a7c7195869e2a$var$CrossFadeTransition_1.createCssBasedTransitionOptions(options));
    }
    (0, $2x3qu.default)(CrossFadeTransition1, null, [
        {
            key: "createCssBasedTransitionOptions",
            value: function createCssBasedTransitionOptions(options) {
                var animationEventFilter = function(param) {
                    var animationName = param.animationName;
                    return animationName === "transition-cross-fade";
                };
                var delay = options.delay, duration = options.duration;
                var cssPropertySetter = function(e) {
                    var s = (0, $58b88e7064bf4641$export$d5858ef5ae9c7e87);
                    s(e, "--transition-cross-fade-delay", function(v) {
                        return "".concat(v, "s");
                    }, delay);
                    s(e, "--transition-cross-fade-duration", function(v) {
                        return "".concat(v, "s");
                    }, duration);
                };
                var cssPropertyRemover = function(e) {
                    var propertyNames = [
                        "--transition-cross-fade-delay",
                        "--transition-cross-fade-duration", 
                    ];
                    propertyNames.forEach(function(n) {
                        return e.style.removeProperty(n);
                    });
                };
                return {
                    classList: [
                        "transition",
                        "transition-cross-fade"
                    ],
                    outEndEventFilter: animationEventFilter,
                    endEventFilter: animationEventFilter,
                    cancelEventFilter: animationEventFilter,
                    cssPropertySetter: cssPropertySetter,
                    cssPropertyRemover: cssPropertyRemover,
                    removeAtEnd: true,
                    removeOnCancel: true,
                    targetShowUpDelay: delay !== null && delay !== void 0 ? delay : 0
                };
            }
        },
        {
            key: "unpack",
            value: function unpack(options) {
                return $ad3a7c7195869e2a$var$validateCrossFadeTransitionOptions(options);
            }
        },
        {
            key: "prepare",
            value: function prepare(options) {
                var unpackedOptions = $ad3a7c7195869e2a$var$CrossFadeTransition_1.unpack(options);
                return function(element) {
                    return new $ad3a7c7195869e2a$var$CrossFadeTransition_1(element, unpackedOptions);
                };
            }
        },
        {
            key: "getStyleSheetAsString",
            value: function getStyleSheetAsString() {
                return 0, (/*@__PURE__*/$parcel$interopDefault($d035a76ca67f5d46$exports));
            }
        }
    ]);
    return CrossFadeTransition1;
}((0, $8e069b25d58ac599$export$2e2bcd8739ae039));
$ad3a7c7195869e2a$export$4143b605098af1c4 = $ad3a7c7195869e2a$var$CrossFadeTransition_1 = $ad3a7c7195869e2a$var$__decorate([
    (0, $688e8b72d0f8e53f$export$77e1154930d99c3d)()
], $ad3a7c7195869e2a$export$4143b605098af1c4);
var $ad3a7c7195869e2a$export$2e2bcd8739ae039 = $ad3a7c7195869e2a$export$4143b605098af1c4;



var $d5a0a42a361e1cc7$var$TransitionFactory = /*#__PURE__*/ function() {
    "use strict";
    function TransitionFactory(root) {
        (0, $f3yih.default)(this, TransitionFactory);
        (0, $3jaBu.default)(this, "root", void 0);
        (0, $3jaBu.default)(this, "transitionRegistry", new Map());
        this.root = root;
        this.registerKnownTransitions();
    }
    (0, $2x3qu.default)(TransitionFactory, [
        {
            key: "registerKnownTransitions",
            value: function registerKnownTransitions() {
                this.register("none", (0, $ca586deb00ed010b$exports.NoneTransition));
                this.register("fade", (0, $e03d975d69034be5$exports.FadeTransition));
                this.register("cross-fade", (0, $ad3a7c7195869e2a$exports.CrossFadeTransition));
            }
        },
        {
            key: "register",
            value: function register(id, transitionClass) {
                if (this.transitionRegistry.has(id)) throw new Error("Transition type already registered");
                (0, $58b88e7064bf4641$export$c2aff9e92362a9b2)(this.root, transitionClass.getStyleSheetAsString(), "transition-".concat(id));
                this.transitionRegistry.set(id, transitionClass);
            }
        },
        {
            key: "prepare",
            value: function prepare() {
                var type = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "none", options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                var TransitionClass = this.transitionRegistry.get(type);
                if (!TransitionClass) throw new Error("Unknown transition type: ".concat(type));
                // unpacks the options and throws an exception if they are invalid,
                // but does create the actual transition yet
                return TransitionClass.prepare(options);
            }
        }
    ]);
    return TransitionFactory;
}();
var $d5a0a42a361e1cc7$export$2e2bcd8739ae039 = $d5a0a42a361e1cc7$var$TransitionFactory;



var $dzBOF = parcelRequire("dzBOF");

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $5sttm = parcelRequire("5sttm");

var $8oBD6 = parcelRequire("8oBD6");

var $aT4ZK = parcelRequire("aT4ZK");


var $d842875c2b6ad1cf$var$MuteAction = /*#__PURE__*/ function(Base1) {
    "use strict";
    (0, $5sttm.default)(MuteAction, Base1);
    var _super = (0, $8oBD6.default)(MuteAction);
    function MuteAction(state) {
        (0, $f3yih.default)(this, MuteAction);
        return _super.call(this, state);
    }
    (0, $2x3qu.default)(MuteAction, [
        {
            key: "execute",
            value: // eslint-disable-next-line class-methods-use-this
            function execute() {
                var _this = this;
                return (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee() {
                    return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _this.state.activeSlides.forEach(function(param) {
                                    var contentElement = param.contentElement;
                                    return (0, $231a03076fd592fe$export$2e2bcd8739ae039).setMuted(contentElement, true);
                                });
                                _this.state.muted = true;
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
            value: function unpack() {}
        }
    ]);
    return MuteAction;
}((0, $b115edcffc1aaa37$export$2e2bcd8739ae039));
var $d842875c2b6ad1cf$export$2e2bcd8739ae039 = $d842875c2b6ad1cf$var$MuteAction;



var $dzBOF = parcelRequire("dzBOF");

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $5sttm = parcelRequire("5sttm");

var $8oBD6 = parcelRequire("8oBD6");

var $aT4ZK = parcelRequire("aT4ZK");


var $ca29762eebd75db0$var$UnmuteAction = /*#__PURE__*/ function(Base1) {
    "use strict";
    (0, $5sttm.default)(UnmuteAction, Base1);
    var _super = (0, $8oBD6.default)(UnmuteAction);
    function UnmuteAction(state) {
        (0, $f3yih.default)(this, UnmuteAction);
        return _super.call(this, state);
    }
    (0, $2x3qu.default)(UnmuteAction, [
        {
            key: "execute",
            value: // eslint-disable-next-line class-methods-use-this
            function execute() {
                var _this = this;
                return (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee() {
                    return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _this.state.activeSlides.forEach(function(param) {
                                    var contentElement = param.contentElement;
                                    return (0, $231a03076fd592fe$export$2e2bcd8739ae039).setMuted(contentElement, false);
                                });
                                _this.state.muted = false;
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
            value: function unpack() {}
        }
    ]);
    return UnmuteAction;
}((0, $b115edcffc1aaa37$export$2e2bcd8739ae039));
var $ca29762eebd75db0$export$2e2bcd8739ae039 = $ca29762eebd75db0$var$UnmuteAction;



var $dzBOF = parcelRequire("dzBOF");

var $f3yih = parcelRequire("f3yih");

var $2x3qu = parcelRequire("2x3qu");

var $5sttm = parcelRequire("5sttm");

var $1he00 = parcelRequire("1he00");

var $8oBD6 = parcelRequire("8oBD6");

var $aT4ZK = parcelRequire("aT4ZK");



// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
var $36d51042ecef9616$var$setVolumeActionOptionsSchema = {
    oneOf: [
        {
            type: "object",
            properties: {
                volume: {
                    type: "number",
                    minimum: 0,
                    maximum: 1
                },
                mode: {
                    type: "string",
                    const: "absolute"
                }
            },
            required: [
                "volume"
            ]
        },
        {
            type: "object",
            properties: {
                volume: {
                    type: "number",
                    minimum: 0
                },
                mode: {
                    type: "string",
                    const: "relative"
                }
            },
            required: [
                "volume",
                "mode"
            ]
        }, 
    ]
};
var $36d51042ecef9616$var$validateSetVolumeActionOptions = (0, $d7c405f0daaed1ac$export$9ea1f4fe5062c6d)($36d51042ecef9616$var$setVolumeActionOptionsSchema);
var $36d51042ecef9616$var$defaultOptionalSetVolumeArgs = {
    mode: "absolute"
};
var $36d51042ecef9616$var$SetVolumeAction = /*#__PURE__*/ function(Base1) {
    "use strict";
    (0, $5sttm.default)(SetVolumeAction, Base1);
    var _super = (0, $8oBD6.default)(SetVolumeAction);
    function SetVolumeAction(state) {
        (0, $f3yih.default)(this, SetVolumeAction);
        return _super.call(this, state);
    }
    (0, $2x3qu.default)(SetVolumeAction, [
        {
            key: "execute",
            value: // eslint-disable-next-line class-methods-use-this
            function execute(arg) {
                var _this = this;
                return (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee() {
                    var ref, volume, mode;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                ref = (0, $1he00.default)({}, $36d51042ecef9616$var$defaultOptionalSetVolumeArgs, arg), volume = ref.volume, mode = ref.mode;
                                _this.state.activeSlides.forEach(function(param) {
                                    var contentElement = param.contentElement;
                                    return (0, $231a03076fd592fe$export$2e2bcd8739ae039).setVolume(contentElement, volume, mode);
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
            value: function unpack(options) {
                return $36d51042ecef9616$var$validateSetVolumeActionOptions(options);
            }
        }
    ]);
    return SetVolumeAction;
}((0, $b115edcffc1aaa37$export$2e2bcd8739ae039));
var $36d51042ecef9616$export$2e2bcd8739ae039 = $36d51042ecef9616$var$SetVolumeAction;



var $5a51d6cd0739d348$export$a3f2a64f39c0a404 = /*#__PURE__*/ function(HTMLElement) {
    "use strict";
    (0, $5sttm.default)(HilbertGalleryViewerElement, HTMLElement);
    var _super = (0, $8oBD6.default)(HilbertGalleryViewerElement);
    function HilbertGalleryViewerElement() {
        (0, $f3yih.default)(this, HilbertGalleryViewerElement);
        var _this;
        _this = _super.call(this);
        (0, $3jaBu.default)((0, $apDhX.default)(_this), "viewer", void 0);
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        _this.viewer = new $5a51d6cd0739d348$var$HilbertGalleryViewer((0, $apDhX.default)(_this), false);
        return _this;
    }
    (0, $2x3qu.default)(HilbertGalleryViewerElement, [
        {
            key: "execute",
            value: function execute(action, arg) {
                var _this = this;
                return (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee() {
                    return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                return _ctx.abrupt("return", _this.viewer.execute(action, arg));
                            case 1:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return HilbertGalleryViewerElement;
}((0, $2qJq4.default)(HTMLElement));
var $5a51d6cd0739d348$var$HilbertGalleryViewer = /*#__PURE__*/ function() {
    "use strict";
    function HilbertGalleryViewer(parent) {
        var wrap = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
        (0, $f3yih.default)(this, HilbertGalleryViewer);
        (0, $3jaBu.default)(this, "actionRegistry", void 0);
        (0, $3jaBu.default)(this, "state", void 0);
        var insertWrapper = function(element) {
            var wrapper = document.createElement("div");
            return element.appendChild(wrapper);
        };
        var host = wrap ? insertWrapper(parent) : parent;
        var shadowRoot = host.attachShadow({
            mode: "open"
        });
        (0, $58b88e7064bf4641$export$c2aff9e92362a9b2)(shadowRoot, (0, (/*@__PURE__*/$parcel$interopDefault($83f205a4fe0059ea$exports))));
        var preloadArea = document.createElement("div");
        preloadArea.classList.add("preload-area");
        shadowRoot.appendChild(preloadArea);
        var container = document.createElement("div");
        container.classList.add("container");
        shadowRoot.appendChild(container);
        var transitionFactory = new (0, $d5a0a42a361e1cc7$export$2e2bcd8739ae039)(shadowRoot);
        var animationFactory = new (0, $ecb242e9f64e02c3$export$2e2bcd8739ae039)(shadowRoot);
        var activeSlides = [];
        this.state = {
            viewer: this,
            log: new (0, $d9a71c7428eebb85$export$2e2bcd8739ae039)((0, $d9a71c7428eebb85$export$243e62d78d3b544d).WARN),
            preloader: new (0, $13567610da0bfca0$export$2e2bcd8739ae039)(preloadArea),
            shadowRoot: shadowRoot,
            container: container,
            transitionFactory: transitionFactory,
            animationFactory: animationFactory,
            activeSlides: activeSlides,
            muted: false
        };
        this.actionRegistry = HilbertGalleryViewer.createActionRegistry(this.state);
    }
    (0, $2x3qu.default)(HilbertGalleryViewer, [
        {
            key: "execute",
            value: function execute(action, arg) {
                var _this = this;
                return (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee() {
                    return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                return _ctx.abrupt("return", _this.executeImpl(action, arg));
                            case 1:
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
                return (0, $dzBOF.default)((0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).mark(function _callee() {
                    var action, executor;
                    return (0, (/*@__PURE__*/$parcel$interopDefault($aT4ZK))).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                action = _this.actionRegistry.get(actionName);
                                if (!action) {
                                    _ctx.next = 6;
                                    break;
                                }
                                executor = action.buildExecutor(arg);
                                _ctx.next = 5;
                                return executor();
                            case 5:
                                return _ctx.abrupt("return", _ctx.sent);
                            case 6:
                                throw new TypeError("HilbertGalleryViewer.execute(): unknown action");
                            case 7:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ], [
        {
            key: "createActionRegistry",
            value: function createActionRegistry(state) {
                var registry = new Map();
                registry.set("reload", new (0, $d07c138ab7effa86$export$2e2bcd8739ae039)(state));
                registry.set("preload", new (0, $1e944b2475d0cfdb$export$2e2bcd8739ae039)(state));
                registry.set("show", new (0, $8321c7a55257bc04$export$2e2bcd8739ae039)(state));
                registry.set("clear", new (0, $2649752ae9b46642$export$2e2bcd8739ae039)(state));
                registry.set("mute", new (0, $d842875c2b6ad1cf$export$2e2bcd8739ae039)(state));
                registry.set("unmute", new (0, $ca29762eebd75db0$export$2e2bcd8739ae039)(state));
                registry.set("set-volume", new (0, $36d51042ecef9616$export$2e2bcd8739ae039)(state));
                return registry;
            }
        },
        {
            key: "defineCustomElement",
            value: function defineCustomElement() {
                customElements.define("hilbert-gallery-viewer", $5a51d6cd0739d348$export$a3f2a64f39c0a404);
            }
        }
    ]);
    return HilbertGalleryViewer;
}();
$5a51d6cd0739d348$var$HilbertGalleryViewer.defineCustomElement();
var $5a51d6cd0739d348$export$2e2bcd8739ae039 = $5a51d6cd0739d348$var$HilbertGalleryViewer;


var $0fff93b28914e573$export$2e2bcd8739ae039 = (0, $5a51d6cd0739d348$export$2e2bcd8739ae039);

})();
//# sourceMappingURL=hilbert-gallery-viewer.js.map
