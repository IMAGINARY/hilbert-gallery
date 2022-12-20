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
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
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
parcelRequire.register("91QCr", function(module, exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = void 0;

var $eV6f2 = parcelRequire("eV6f2");

var $hWtwF = parcelRequire("hWtwF");

var $eBAmq = parcelRequire("eBAmq");

var $jZjXk = parcelRequire("jZjXk");
const META_SUPPORT_DATA = [
    "/properties"
];
const META_SCHEMA_ID = "http://json-schema.org/draft-07/schema";
class Ajv extends $eV6f2.default {
    _addVocabularies() {
        super._addVocabularies();
        $hWtwF.default.forEach((v)=>this.addVocabulary(v));
        if (this.opts.discriminator) this.addKeyword($eBAmq.default);
    }
    _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        if (!this.opts.meta) return;
        const metaSchema = this.opts.$data ? this.$dataMetaSchema($jZjXk, META_SUPPORT_DATA) : $jZjXk;
        this.addMetaSchema(metaSchema, META_SCHEMA_ID, false);
        this.refs["http://json-schema.org/schema"] = META_SCHEMA_ID;
    }
    defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : undefined);
    }
}
module.exports = exports = Ajv;
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = Ajv;

var $stx26 = parcelRequire("stx26");
Object.defineProperty(exports, "KeywordCxt", {
    enumerable: true,
    get: function() {
        return $stx26.KeywordCxt;
    }
});

var $jyW5U = parcelRequire("jyW5U");
Object.defineProperty(exports, "_", {
    enumerable: true,
    get: function() {
        return $jyW5U._;
    }
});
Object.defineProperty(exports, "str", {
    enumerable: true,
    get: function() {
        return $jyW5U.str;
    }
});
Object.defineProperty(exports, "stringify", {
    enumerable: true,
    get: function() {
        return $jyW5U.stringify;
    }
});
Object.defineProperty(exports, "nil", {
    enumerable: true,
    get: function() {
        return $jyW5U.nil;
    }
});
Object.defineProperty(exports, "Name", {
    enumerable: true,
    get: function() {
        return $jyW5U.Name;
    }
});
Object.defineProperty(exports, "CodeGen", {
    enumerable: true,
    get: function() {
        return $jyW5U.CodeGen;
    }
});

});
parcelRequire.register("eV6f2", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.CodeGen = module.exports.Name = module.exports.nil = module.exports.stringify = module.exports.str = module.exports._ = module.exports.KeywordCxt = void 0;

var $stx26 = parcelRequire("stx26");
Object.defineProperty(module.exports, "KeywordCxt", {
    enumerable: true,
    get: function() {
        return $stx26.KeywordCxt;
    }
});

var $jyW5U = parcelRequire("jyW5U");
Object.defineProperty(module.exports, "_", {
    enumerable: true,
    get: function() {
        return $jyW5U._;
    }
});
Object.defineProperty(module.exports, "str", {
    enumerable: true,
    get: function() {
        return $jyW5U.str;
    }
});
Object.defineProperty(module.exports, "stringify", {
    enumerable: true,
    get: function() {
        return $jyW5U.stringify;
    }
});
Object.defineProperty(module.exports, "nil", {
    enumerable: true,
    get: function() {
        return $jyW5U.nil;
    }
});
Object.defineProperty(module.exports, "Name", {
    enumerable: true,
    get: function() {
        return $jyW5U.Name;
    }
});
Object.defineProperty(module.exports, "CodeGen", {
    enumerable: true,
    get: function() {
        return $jyW5U.CodeGen;
    }
});

var $clW88 = parcelRequire("clW88");

var $6MtpD = parcelRequire("6MtpD");

var $dM6ZE = parcelRequire("dM6ZE");

var $5VCTu = parcelRequire("5VCTu");

var $jyW5U = parcelRequire("jyW5U");

var $hF0t1 = parcelRequire("hF0t1");

var $j9Fpx = parcelRequire("j9Fpx");

var $81JIu = parcelRequire("81JIu");

var $2DMW1 = parcelRequire("2DMW1");

var $hch9Z = parcelRequire("hch9Z");
const $adcb3b04e37131f8$var$defaultRegExp = (str, flags)=>new RegExp(str, flags);
$adcb3b04e37131f8$var$defaultRegExp.code = "new RegExp";
const $adcb3b04e37131f8$var$META_IGNORE_OPTIONS = [
    "removeAdditional",
    "useDefaults",
    "coerceTypes"
];
const $adcb3b04e37131f8$var$EXT_SCOPE_NAMES = new Set([
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
const $adcb3b04e37131f8$var$removedOptions = {
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
const $adcb3b04e37131f8$var$deprecatedOptions = {
    ignoreKeywordsWithRef: "",
    jsPropertySyntax: "",
    unicode: '"minLength"/"maxLength" account for unicode characters by default.'
};
const $adcb3b04e37131f8$var$MAX_EXPRESSION = 200;
// eslint-disable-next-line complexity
function $adcb3b04e37131f8$var$requiredOptions(o) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
    const s = o.strict;
    const _optz = (_a = o.code) === null || _a === void 0 ? void 0 : _a.optimize;
    const optimize = _optz === true || _optz === undefined ? 1 : _optz || 0;
    const regExp = (_c = (_b = o.code) === null || _b === void 0 ? void 0 : _b.regExp) !== null && _c !== void 0 ? _c : $adcb3b04e37131f8$var$defaultRegExp;
    const uriResolver = (_d = o.uriResolver) !== null && _d !== void 0 ? _d : $hch9Z.default;
    return {
        strictSchema: (_f = (_e = o.strictSchema) !== null && _e !== void 0 ? _e : s) !== null && _f !== void 0 ? _f : true,
        strictNumbers: (_h = (_g = o.strictNumbers) !== null && _g !== void 0 ? _g : s) !== null && _h !== void 0 ? _h : true,
        strictTypes: (_k = (_j = o.strictTypes) !== null && _j !== void 0 ? _j : s) !== null && _k !== void 0 ? _k : "log",
        strictTuples: (_m = (_l = o.strictTuples) !== null && _l !== void 0 ? _l : s) !== null && _m !== void 0 ? _m : "log",
        strictRequired: (_p = (_o = o.strictRequired) !== null && _o !== void 0 ? _o : s) !== null && _p !== void 0 ? _p : false,
        code: o.code ? {
            ...o.code,
            optimize: optimize,
            regExp: regExp
        } : {
            optimize: optimize,
            regExp: regExp
        },
        loopRequired: (_q = o.loopRequired) !== null && _q !== void 0 ? _q : $adcb3b04e37131f8$var$MAX_EXPRESSION,
        loopEnum: (_r = o.loopEnum) !== null && _r !== void 0 ? _r : $adcb3b04e37131f8$var$MAX_EXPRESSION,
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
class $adcb3b04e37131f8$var$Ajv {
    _addVocabularies() {
        this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
        const { $data: $data , meta: meta , schemaId: schemaId  } = this.opts;
        let _dataRefSchema = $2DMW1;
        if (schemaId === "id") {
            _dataRefSchema = {
                ...$2DMW1
            };
            _dataRefSchema.id = _dataRefSchema.$id;
            delete _dataRefSchema.$id;
        }
        if (meta && $data) this.addMetaSchema(_dataRefSchema, _dataRefSchema[schemaId], false);
    }
    defaultMeta() {
        const { meta: meta , schemaId: schemaId  } = this.opts;
        return this.opts.defaultMeta = typeof meta == "object" ? meta[schemaId] || meta : undefined;
    }
    validate(schemaKeyRef, data // to be validated
    ) {
        let v;
        if (typeof schemaKeyRef == "string") {
            v = this.getSchema(schemaKeyRef);
            if (!v) throw new Error(`no schema with key or ref "${schemaKeyRef}"`);
        } else v = this.compile(schemaKeyRef);
        const valid = v(data);
        if (!("$async" in v)) this.errors = v.errors;
        return valid;
    }
    compile(schema, _meta) {
        const sch = this._addSchema(schema, _meta);
        return sch.validate || this._compileSchemaEnv(sch);
    }
    compileAsync(schema, meta) {
        if (typeof this.opts.loadSchema != "function") throw new Error("options.loadSchema should be a function");
        const { loadSchema: loadSchema  } = this.opts;
        return runCompileAsync.call(this, schema, meta);
        async function runCompileAsync(_schema, _meta) {
            await loadMetaSchema.call(this, _schema.$schema);
            const sch = this._addSchema(_schema, _meta);
            return sch.validate || _compileAsync.call(this, sch);
        }
        async function loadMetaSchema($ref) {
            if ($ref && !this.getSchema($ref)) {
                await runCompileAsync.call(this, {
                    $ref: $ref
                }, true);
            }
        }
        async function _compileAsync(sch) {
            try {
                return this._compileSchemaEnv(sch);
            } catch (e) {
                if (!(e instanceof $6MtpD.default)) throw e;
                checkLoaded.call(this, e);
                await loadMissingSchema.call(this, e.missingSchema);
                return _compileAsync.call(this, sch);
            }
        }
        function checkLoaded({ missingSchema: ref , missingRef: missingRef  }) {
            if (this.refs[ref]) {
                throw new Error(`AnySchema ${ref} is loaded but ${missingRef} cannot be resolved`);
            }
        }
        async function loadMissingSchema(ref) {
            const _schema = await _loadSchema.call(this, ref);
            if (!this.refs[ref]) await loadMetaSchema.call(this, _schema.$schema);
            if (!this.refs[ref]) this.addSchema(_schema, ref, meta);
        }
        async function _loadSchema(ref) {
            const p = this._loading[ref];
            if (p) return p;
            try {
                return await (this._loading[ref] = loadSchema(ref));
            } finally{
                delete this._loading[ref];
            }
        }
    }
    // Adds schema to the instance
    addSchema(schema, key, _meta, _validateSchema = this.opts.validateSchema // false to skip schema validation. Used internally, option validateSchema should be used instead.
    ) {
        if (Array.isArray(schema)) {
            for (const sch of schema)this.addSchema(sch, undefined, _meta, _validateSchema);
            return this;
        }
        let id;
        if (typeof schema === "object") {
            const { schemaId: schemaId  } = this.opts;
            id = schema[schemaId];
            if (id !== undefined && typeof id != "string") throw new Error(`schema ${schemaId} must be string`);
        }
        key = (0, $hF0t1.normalizeId)(key || id);
        this._checkUnique(key);
        this.schemas[key] = this._addSchema(schema, _meta, key, _validateSchema, true);
        return this;
    }
    // Add schema that will be used to validate other schemas
    // options in META_IGNORE_OPTIONS are alway set to false
    addMetaSchema(schema, key, _validateSchema = this.opts.validateSchema // false to skip schema validation, can be used to override validateSchema option for meta-schema
    ) {
        this.addSchema(schema, key, true, _validateSchema);
        return this;
    }
    //  Validate schema against its meta-schema
    validateSchema(schema, throwOrLogError) {
        if (typeof schema == "boolean") return true;
        let $schema;
        $schema = schema.$schema;
        if ($schema !== undefined && typeof $schema != "string") throw new Error("$schema must be a string");
        $schema = $schema || this.opts.defaultMeta || this.defaultMeta();
        if (!$schema) {
            this.logger.warn("meta-schema not available");
            this.errors = null;
            return true;
        }
        const valid = this.validate($schema, schema);
        if (!valid && throwOrLogError) {
            const message = "schema is invalid: " + this.errorsText();
            if (this.opts.validateSchema === "log") this.logger.error(message);
            else throw new Error(message);
        }
        return valid;
    }
    // Get compiled schema by `key` or `ref`.
    // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
    getSchema(keyRef) {
        let sch;
        while(typeof (sch = $adcb3b04e37131f8$var$getSchEnv.call(this, keyRef)) == "string")keyRef = sch;
        if (sch === undefined) {
            const { schemaId: schemaId  } = this.opts;
            const root = new $5VCTu.SchemaEnv({
                schema: {},
                schemaId: schemaId
            });
            sch = $5VCTu.resolveSchema.call(this, root, keyRef);
            if (!sch) return;
            this.refs[keyRef] = sch;
        }
        return sch.validate || this._compileSchemaEnv(sch);
    }
    // Remove cached schema(s).
    // If no parameter is passed all schemas but meta-schemas are removed.
    // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
    // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
    removeSchema(schemaKeyRef) {
        if (schemaKeyRef instanceof RegExp) {
            this._removeAllSchemas(this.schemas, schemaKeyRef);
            this._removeAllSchemas(this.refs, schemaKeyRef);
            return this;
        }
        switch(typeof schemaKeyRef){
            case "undefined":
                this._removeAllSchemas(this.schemas);
                this._removeAllSchemas(this.refs);
                this._cache.clear();
                return this;
            case "string":
                {
                    const sch = $adcb3b04e37131f8$var$getSchEnv.call(this, schemaKeyRef);
                    if (typeof sch == "object") this._cache.delete(sch.schema);
                    delete this.schemas[schemaKeyRef];
                    delete this.refs[schemaKeyRef];
                    return this;
                }
            case "object":
                {
                    const cacheKey = schemaKeyRef;
                    this._cache.delete(cacheKey);
                    let id = schemaKeyRef[this.opts.schemaId];
                    if (id) {
                        id = (0, $hF0t1.normalizeId)(id);
                        delete this.schemas[id];
                        delete this.refs[id];
                    }
                    return this;
                }
            default:
                throw new Error("ajv.removeSchema: invalid parameter");
        }
    }
    // add "vocabulary" - a collection of keywords
    addVocabulary(definitions) {
        for (const def of definitions)this.addKeyword(def);
        return this;
    }
    addKeyword(kwdOrDef, def // deprecated
    ) {
        let keyword;
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
        $adcb3b04e37131f8$var$checkKeyword.call(this, keyword, def);
        if (!def) {
            (0, $81JIu.eachItem)(keyword, (kwd)=>$adcb3b04e37131f8$var$addRule.call(this, kwd));
            return this;
        }
        $adcb3b04e37131f8$var$keywordMetaschema.call(this, def);
        const definition = {
            ...def,
            type: (0, $j9Fpx.getJSONTypes)(def.type),
            schemaType: (0, $j9Fpx.getJSONTypes)(def.schemaType)
        };
        (0, $81JIu.eachItem)(keyword, definition.type.length === 0 ? (k)=>$adcb3b04e37131f8$var$addRule.call(this, k, definition) : (k)=>definition.type.forEach((t)=>$adcb3b04e37131f8$var$addRule.call(this, k, definition, t)));
        return this;
    }
    getKeyword(keyword) {
        const rule = this.RULES.all[keyword];
        return typeof rule == "object" ? rule.definition : !!rule;
    }
    // Remove keyword
    removeKeyword(keyword) {
        // TODO return type should be Ajv
        const { RULES: RULES  } = this;
        delete RULES.keywords[keyword];
        delete RULES.all[keyword];
        for (const group of RULES.rules){
            const i = group.rules.findIndex((rule)=>rule.keyword === keyword);
            if (i >= 0) group.rules.splice(i, 1);
        }
        return this;
    }
    // Add format
    addFormat(name, format) {
        if (typeof format == "string") format = new RegExp(format);
        this.formats[name] = format;
        return this;
    }
    errorsText(errors = this.errors, { separator: separator = ", " , dataVar: dataVar = "data"  } = {} // optional options with properties `separator` and `dataVar`
    ) {
        if (!errors || errors.length === 0) return "No errors";
        return errors.map((e)=>`${dataVar}${e.instancePath} ${e.message}`).reduce((text, msg)=>text + separator + msg);
    }
    $dataMetaSchema(metaSchema, keywordsJsonPointers) {
        const rules = this.RULES.all;
        metaSchema = JSON.parse(JSON.stringify(metaSchema));
        for (const jsonPointer of keywordsJsonPointers){
            const segments = jsonPointer.split("/").slice(1); // first segment is an empty string
            let keywords = metaSchema;
            for (const seg of segments)keywords = keywords[seg];
            for(const key in rules){
                const rule = rules[key];
                if (typeof rule != "object") continue;
                const { $data: $data  } = rule.definition;
                const schema = keywords[key];
                if ($data && schema) keywords[key] = $adcb3b04e37131f8$var$schemaOrData(schema);
            }
        }
        return metaSchema;
    }
    _removeAllSchemas(schemas, regex) {
        for(const keyRef in schemas){
            const sch = schemas[keyRef];
            if (!regex || regex.test(keyRef)) {
                if (typeof sch == "string") delete schemas[keyRef];
                else if (sch && !sch.meta) {
                    this._cache.delete(sch.schema);
                    delete schemas[keyRef];
                }
            }
        }
    }
    _addSchema(schema, meta, baseId, validateSchema = this.opts.validateSchema, addSchema = this.opts.addUsedSchema) {
        let id;
        const { schemaId: schemaId  } = this.opts;
        if (typeof schema == "object") id = schema[schemaId];
        else {
            if (this.opts.jtd) throw new Error("schema must be object");
            else if (typeof schema != "boolean") throw new Error("schema must be object or boolean");
        }
        let sch = this._cache.get(schema);
        if (sch !== undefined) return sch;
        baseId = (0, $hF0t1.normalizeId)(id || baseId);
        const localRefs = $hF0t1.getSchemaRefs.call(this, schema, baseId);
        sch = new $5VCTu.SchemaEnv({
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
    _checkUnique(id) {
        if (this.schemas[id] || this.refs[id]) throw new Error(`schema with key or id "${id}" already exists`);
    }
    _compileSchemaEnv(sch) {
        if (sch.meta) this._compileMetaSchema(sch);
        else $5VCTu.compileSchema.call(this, sch);
        /* istanbul ignore if */ if (!sch.validate) throw new Error("ajv implementation error");
        return sch.validate;
    }
    _compileMetaSchema(sch) {
        const currentOpts = this.opts;
        this.opts = this._metaOpts;
        try {
            $5VCTu.compileSchema.call(this, sch);
        } finally{
            this.opts = currentOpts;
        }
    }
    constructor(opts = {}){
        this.schemas = {};
        this.refs = {};
        this.formats = {};
        this._compilations = new Set();
        this._loading = {};
        this._cache = new Map();
        opts = this.opts = {
            ...opts,
            ...$adcb3b04e37131f8$var$requiredOptions(opts)
        };
        const { es5: es5 , lines: lines  } = this.opts.code;
        this.scope = new $jyW5U.ValueScope({
            scope: {},
            prefixes: $adcb3b04e37131f8$var$EXT_SCOPE_NAMES,
            es5: es5,
            lines: lines
        });
        this.logger = $adcb3b04e37131f8$var$getLogger(opts.logger);
        const formatOpt = opts.validateFormats;
        opts.validateFormats = false;
        this.RULES = (0, $dM6ZE.getRules)();
        $adcb3b04e37131f8$var$checkOptions.call(this, $adcb3b04e37131f8$var$removedOptions, opts, "NOT SUPPORTED");
        $adcb3b04e37131f8$var$checkOptions.call(this, $adcb3b04e37131f8$var$deprecatedOptions, opts, "DEPRECATED", "warn");
        this._metaOpts = $adcb3b04e37131f8$var$getMetaSchemaOptions.call(this);
        if (opts.formats) $adcb3b04e37131f8$var$addInitialFormats.call(this);
        this._addVocabularies();
        this._addDefaultMetaSchema();
        if (opts.keywords) $adcb3b04e37131f8$var$addInitialKeywords.call(this, opts.keywords);
        if (typeof opts.meta == "object") this.addMetaSchema(opts.meta);
        $adcb3b04e37131f8$var$addInitialSchemas.call(this);
        opts.validateFormats = formatOpt;
    }
}
module.exports.default = $adcb3b04e37131f8$var$Ajv;
$adcb3b04e37131f8$var$Ajv.ValidationError = $clW88.default;
$adcb3b04e37131f8$var$Ajv.MissingRefError = $6MtpD.default;
function $adcb3b04e37131f8$var$checkOptions(checkOpts, options, msg, log = "error") {
    for(const key in checkOpts){
        const opt = key;
        if (opt in options) this.logger[log](`${msg}: option ${key}. ${checkOpts[opt]}`);
    }
}
function $adcb3b04e37131f8$var$getSchEnv(keyRef) {
    keyRef = (0, $hF0t1.normalizeId)(keyRef); // TODO tests fail without this line
    return this.schemas[keyRef] || this.refs[keyRef];
}
function $adcb3b04e37131f8$var$addInitialSchemas() {
    const optsSchemas = this.opts.schemas;
    if (!optsSchemas) return;
    if (Array.isArray(optsSchemas)) this.addSchema(optsSchemas);
    else for(const key in optsSchemas)this.addSchema(optsSchemas[key], key);
}
function $adcb3b04e37131f8$var$addInitialFormats() {
    for(const name in this.opts.formats){
        const format = this.opts.formats[name];
        if (format) this.addFormat(name, format);
    }
}
function $adcb3b04e37131f8$var$addInitialKeywords(defs) {
    if (Array.isArray(defs)) {
        this.addVocabulary(defs);
        return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for(const keyword in defs){
        const def = defs[keyword];
        if (!def.keyword) def.keyword = keyword;
        this.addKeyword(def);
    }
}
function $adcb3b04e37131f8$var$getMetaSchemaOptions() {
    const metaOpts = {
        ...this.opts
    };
    for (const opt of $adcb3b04e37131f8$var$META_IGNORE_OPTIONS)delete metaOpts[opt];
    return metaOpts;
}
const $adcb3b04e37131f8$var$noLogs = {
    log () {},
    warn () {},
    error () {}
};
function $adcb3b04e37131f8$var$getLogger(logger) {
    if (logger === false) return $adcb3b04e37131f8$var$noLogs;
    if (logger === undefined) return console;
    if (logger.log && logger.warn && logger.error) return logger;
    throw new Error("logger must implement log, warn and error methods");
}
const $adcb3b04e37131f8$var$KEYWORD_NAME = /^[a-z_$][a-z0-9_$:-]*$/i;
function $adcb3b04e37131f8$var$checkKeyword(keyword, def) {
    const { RULES: RULES  } = this;
    (0, $81JIu.eachItem)(keyword, (kwd)=>{
        if (RULES.keywords[kwd]) throw new Error(`Keyword ${kwd} is already defined`);
        if (!$adcb3b04e37131f8$var$KEYWORD_NAME.test(kwd)) throw new Error(`Keyword ${kwd} has invalid name`);
    });
    if (!def) return;
    if (def.$data && !("code" in def || "validate" in def)) throw new Error('$data keyword must have "code" or "validate" function');
}
function $adcb3b04e37131f8$var$addRule(keyword, definition, dataType) {
    var _a;
    const post = definition === null || definition === void 0 ? void 0 : definition.post;
    if (dataType && post) throw new Error('keyword with "post" flag cannot have "type"');
    const { RULES: RULES  } = this;
    let ruleGroup = post ? RULES.post : RULES.rules.find(({ type: t  })=>t === dataType);
    if (!ruleGroup) {
        ruleGroup = {
            type: dataType,
            rules: []
        };
        RULES.rules.push(ruleGroup);
    }
    RULES.keywords[keyword] = true;
    if (!definition) return;
    const rule = {
        keyword: keyword,
        definition: {
            ...definition,
            type: (0, $j9Fpx.getJSONTypes)(definition.type),
            schemaType: (0, $j9Fpx.getJSONTypes)(definition.schemaType)
        }
    };
    if (definition.before) $adcb3b04e37131f8$var$addBeforeRule.call(this, ruleGroup, rule, definition.before);
    else ruleGroup.rules.push(rule);
    RULES.all[keyword] = rule;
    (_a = definition.implements) === null || _a === void 0 || _a.forEach((kwd)=>this.addKeyword(kwd));
}
function $adcb3b04e37131f8$var$addBeforeRule(ruleGroup, rule, before) {
    const i = ruleGroup.rules.findIndex((_rule)=>_rule.keyword === before);
    if (i >= 0) ruleGroup.rules.splice(i, 0, rule);
    else {
        ruleGroup.rules.push(rule);
        this.logger.warn(`rule ${before} is not defined`);
    }
}
function $adcb3b04e37131f8$var$keywordMetaschema(def) {
    let { metaSchema: metaSchema  } = def;
    if (metaSchema === undefined) return;
    if (def.$data && this.opts.$data) metaSchema = $adcb3b04e37131f8$var$schemaOrData(metaSchema);
    def.validateSchema = this.compile(metaSchema, true);
}
const $adcb3b04e37131f8$var$$dataRef = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
};
function $adcb3b04e37131f8$var$schemaOrData(schema) {
    return {
        anyOf: [
            schema,
            $adcb3b04e37131f8$var$$dataRef
        ]
    };
}

});
parcelRequire.register("stx26", function(module, exports) {
"use strict";
let $0559860990ef4600$var$_ = (t39)=>t39, $0559860990ef4600$var$t, $0559860990ef4600$var$t1, $0559860990ef4600$var$t2, $0559860990ef4600$var$t3, $0559860990ef4600$var$t4, $0559860990ef4600$var$t5, $0559860990ef4600$var$t6, $0559860990ef4600$var$t7, $0559860990ef4600$var$t8, $0559860990ef4600$var$t9, $0559860990ef4600$var$t10, $0559860990ef4600$var$t11, $0559860990ef4600$var$t12, $0559860990ef4600$var$t13, $0559860990ef4600$var$t14, $0559860990ef4600$var$t15, $0559860990ef4600$var$t16, $0559860990ef4600$var$t17, $0559860990ef4600$var$t18, $0559860990ef4600$var$t19, $0559860990ef4600$var$t20, $0559860990ef4600$var$t21, $0559860990ef4600$var$t22, $0559860990ef4600$var$t23, $0559860990ef4600$var$t24, $0559860990ef4600$var$t25, $0559860990ef4600$var$t26, $0559860990ef4600$var$t27, $0559860990ef4600$var$t28, $0559860990ef4600$var$t29, $0559860990ef4600$var$t30, $0559860990ef4600$var$t31, $0559860990ef4600$var$t32, $0559860990ef4600$var$t33, $0559860990ef4600$var$t34, $0559860990ef4600$var$t35, $0559860990ef4600$var$t36, $0559860990ef4600$var$t37, $0559860990ef4600$var$t38;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getData = module.exports.KeywordCxt = module.exports.validateFunctionCode = void 0;

var $8PiTW = parcelRequire("8PiTW");

var $j9Fpx = parcelRequire("j9Fpx");

var $iale1 = parcelRequire("iale1");

var $j9Fpx = parcelRequire("j9Fpx");

var $b6zJC = parcelRequire("b6zJC");

var $cqN2N = parcelRequire("cqN2N");

var $evIAL = parcelRequire("evIAL");

var $jyW5U = parcelRequire("jyW5U");

var $2m10X = parcelRequire("2m10X");

var $hF0t1 = parcelRequire("hF0t1");

var $81JIu = parcelRequire("81JIu");

var $2lzC3 = parcelRequire("2lzC3");
// schema compilation - generates validation function, subschemaCode (below) is used for subschemas
function $0559860990ef4600$var$validateFunctionCode(it) {
    if ($0559860990ef4600$var$isSchemaObj(it)) {
        $0559860990ef4600$var$checkKeywords(it);
        if ($0559860990ef4600$var$schemaCxtHasRules(it)) {
            $0559860990ef4600$var$topSchemaObjCode(it);
            return;
        }
    }
    $0559860990ef4600$var$validateFunction(it, ()=>(0, $8PiTW.topBoolOrEmptySchema)(it));
}
module.exports.validateFunctionCode = $0559860990ef4600$var$validateFunctionCode;
function $0559860990ef4600$var$validateFunction({ gen: gen , validateName: validateName , schema: schema , schemaEnv: schemaEnv , opts: opts  }, body) {
    if (opts.code.es5) gen.func(validateName, $jyW5U._($0559860990ef4600$var$t || ($0559860990ef4600$var$t = $0559860990ef4600$var$_`${0}, ${0}`), $2m10X.default.data, $2m10X.default.valCxt), schemaEnv.$async, ()=>{
        gen.code($jyW5U._($0559860990ef4600$var$t1 || ($0559860990ef4600$var$t1 = $0559860990ef4600$var$_`"use strict"; ${0}`), $0559860990ef4600$var$funcSourceUrl(schema, opts)));
        $0559860990ef4600$var$destructureValCxtES5(gen, opts);
        gen.code(body);
    });
    else gen.func(validateName, $jyW5U._($0559860990ef4600$var$t2 || ($0559860990ef4600$var$t2 = $0559860990ef4600$var$_`${0}, ${0}`), $2m10X.default.data, $0559860990ef4600$var$destructureValCxt(opts)), schemaEnv.$async, ()=>gen.code($0559860990ef4600$var$funcSourceUrl(schema, opts)).code(body));
}
function $0559860990ef4600$var$destructureValCxt(opts) {
    return $jyW5U._($0559860990ef4600$var$t4 || ($0559860990ef4600$var$t4 = $0559860990ef4600$var$_`{${0}="", ${0}, ${0}, ${0}=${0}${0}}={}`), $2m10X.default.instancePath, $2m10X.default.parentData, $2m10X.default.parentDataProperty, $2m10X.default.rootData, $2m10X.default.data, opts.dynamicRef ? $jyW5U._($0559860990ef4600$var$t3 || ($0559860990ef4600$var$t3 = $0559860990ef4600$var$_`, ${0}={}`), $2m10X.default.dynamicAnchors) : $jyW5U.nil);
}
function $0559860990ef4600$var$destructureValCxtES5(gen, opts) {
    gen.if($2m10X.default.valCxt, ()=>{
        gen.var($2m10X.default.instancePath, $jyW5U._($0559860990ef4600$var$t5 || ($0559860990ef4600$var$t5 = $0559860990ef4600$var$_`${0}.${0}`), $2m10X.default.valCxt, $2m10X.default.instancePath));
        gen.var($2m10X.default.parentData, $jyW5U._($0559860990ef4600$var$t6 || ($0559860990ef4600$var$t6 = $0559860990ef4600$var$_`${0}.${0}`), $2m10X.default.valCxt, $2m10X.default.parentData));
        gen.var($2m10X.default.parentDataProperty, $jyW5U._($0559860990ef4600$var$t7 || ($0559860990ef4600$var$t7 = $0559860990ef4600$var$_`${0}.${0}`), $2m10X.default.valCxt, $2m10X.default.parentDataProperty));
        gen.var($2m10X.default.rootData, $jyW5U._($0559860990ef4600$var$t8 || ($0559860990ef4600$var$t8 = $0559860990ef4600$var$_`${0}.${0}`), $2m10X.default.valCxt, $2m10X.default.rootData));
        if (opts.dynamicRef) gen.var($2m10X.default.dynamicAnchors, $jyW5U._($0559860990ef4600$var$t9 || ($0559860990ef4600$var$t9 = $0559860990ef4600$var$_`${0}.${0}`), $2m10X.default.valCxt, $2m10X.default.dynamicAnchors));
    }, ()=>{
        gen.var($2m10X.default.instancePath, $jyW5U._($0559860990ef4600$var$t10 || ($0559860990ef4600$var$t10 = $0559860990ef4600$var$_`""`)));
        gen.var($2m10X.default.parentData, $jyW5U._($0559860990ef4600$var$t11 || ($0559860990ef4600$var$t11 = $0559860990ef4600$var$_`undefined`)));
        gen.var($2m10X.default.parentDataProperty, $jyW5U._($0559860990ef4600$var$t12 || ($0559860990ef4600$var$t12 = $0559860990ef4600$var$_`undefined`)));
        gen.var($2m10X.default.rootData, $2m10X.default.data);
        if (opts.dynamicRef) gen.var($2m10X.default.dynamicAnchors, $jyW5U._($0559860990ef4600$var$t13 || ($0559860990ef4600$var$t13 = $0559860990ef4600$var$_`{}`)));
    });
}
function $0559860990ef4600$var$topSchemaObjCode(it) {
    const { schema: schema , opts: opts , gen: gen  } = it;
    $0559860990ef4600$var$validateFunction(it, ()=>{
        if (opts.$comment && schema.$comment) $0559860990ef4600$var$commentKeyword(it);
        $0559860990ef4600$var$checkNoDefault(it);
        gen.let($2m10X.default.vErrors, null);
        gen.let($2m10X.default.errors, 0);
        if (opts.unevaluated) $0559860990ef4600$var$resetEvaluated(it);
        $0559860990ef4600$var$typeAndKeywords(it);
        $0559860990ef4600$var$returnResults(it);
    });
    return;
}
function $0559860990ef4600$var$resetEvaluated(it) {
    // TODO maybe some hook to execute it in the end to check whether props/items are Name, as in assignEvaluated
    const { gen: gen , validateName: validateName  } = it;
    it.evaluated = gen.const("evaluated", $jyW5U._($0559860990ef4600$var$t14 || ($0559860990ef4600$var$t14 = $0559860990ef4600$var$_`${0}.evaluated`), validateName));
    gen.if($jyW5U._($0559860990ef4600$var$t15 || ($0559860990ef4600$var$t15 = $0559860990ef4600$var$_`${0}.dynamicProps`), it.evaluated), ()=>gen.assign($jyW5U._($0559860990ef4600$var$t16 || ($0559860990ef4600$var$t16 = $0559860990ef4600$var$_`${0}.props`), it.evaluated), $jyW5U._($0559860990ef4600$var$t17 || ($0559860990ef4600$var$t17 = $0559860990ef4600$var$_`undefined`))));
    gen.if($jyW5U._($0559860990ef4600$var$t18 || ($0559860990ef4600$var$t18 = $0559860990ef4600$var$_`${0}.dynamicItems`), it.evaluated), ()=>gen.assign($jyW5U._($0559860990ef4600$var$t19 || ($0559860990ef4600$var$t19 = $0559860990ef4600$var$_`${0}.items`), it.evaluated), $jyW5U._($0559860990ef4600$var$t20 || ($0559860990ef4600$var$t20 = $0559860990ef4600$var$_`undefined`))));
}
function $0559860990ef4600$var$funcSourceUrl(schema, opts) {
    const schId = typeof schema == "object" && schema[opts.schemaId];
    return schId && (opts.code.source || opts.code.process) ? $jyW5U._($0559860990ef4600$var$t21 || ($0559860990ef4600$var$t21 = $0559860990ef4600$var$_`/*# sourceURL=${0} */`), schId) : $jyW5U.nil;
}
// schema compilation - this function is used recursively to generate code for sub-schemas
function $0559860990ef4600$var$subschemaCode(it, valid) {
    if ($0559860990ef4600$var$isSchemaObj(it)) {
        $0559860990ef4600$var$checkKeywords(it);
        if ($0559860990ef4600$var$schemaCxtHasRules(it)) {
            $0559860990ef4600$var$subSchemaObjCode(it, valid);
            return;
        }
    }
    (0, $8PiTW.boolOrEmptySchema)(it, valid);
}
function $0559860990ef4600$var$schemaCxtHasRules({ schema: schema , self: self  }) {
    if (typeof schema == "boolean") return !schema;
    for(const key in schema)if (self.RULES.all[key]) return true;
    return false;
}
function $0559860990ef4600$var$isSchemaObj(it) {
    return typeof it.schema != "boolean";
}
function $0559860990ef4600$var$subSchemaObjCode(it, valid) {
    const { schema: schema , gen: gen , opts: opts  } = it;
    if (opts.$comment && schema.$comment) $0559860990ef4600$var$commentKeyword(it);
    $0559860990ef4600$var$updateContext(it);
    $0559860990ef4600$var$checkAsyncSchema(it);
    const errsCount = gen.const("_errs", $2m10X.default.errors);
    $0559860990ef4600$var$typeAndKeywords(it, errsCount);
    // TODO var
    gen.var(valid, $jyW5U._($0559860990ef4600$var$t22 || ($0559860990ef4600$var$t22 = $0559860990ef4600$var$_`${0} === ${0}`), errsCount, $2m10X.default.errors));
}
function $0559860990ef4600$var$checkKeywords(it) {
    (0, $81JIu.checkUnknownRules)(it);
    $0559860990ef4600$var$checkRefsAndKeywords(it);
}
function $0559860990ef4600$var$typeAndKeywords(it, errsCount) {
    if (it.opts.jtd) return $0559860990ef4600$var$schemaKeywords(it, [], false, errsCount);
    const types = (0, $j9Fpx.getSchemaTypes)(it.schema);
    const checkedTypes = (0, $j9Fpx.coerceAndCheckDataType)(it, types);
    $0559860990ef4600$var$schemaKeywords(it, types, !checkedTypes, errsCount);
}
function $0559860990ef4600$var$checkRefsAndKeywords(it) {
    const { schema: schema , errSchemaPath: errSchemaPath , opts: opts , self: self  } = it;
    if (schema.$ref && opts.ignoreKeywordsWithRef && (0, $81JIu.schemaHasRulesButRef)(schema, self.RULES)) self.logger.warn(`$ref: keywords ignored in schema at path "${errSchemaPath}"`);
}
function $0559860990ef4600$var$checkNoDefault(it) {
    const { schema: schema , opts: opts  } = it;
    if (schema.default !== undefined && opts.useDefaults && opts.strictSchema) (0, $81JIu.checkStrictMode)(it, "default is ignored in the schema root");
}
function $0559860990ef4600$var$updateContext(it) {
    const schId = it.schema[it.opts.schemaId];
    if (schId) it.baseId = (0, $hF0t1.resolveUrl)(it.opts.uriResolver, it.baseId, schId);
}
function $0559860990ef4600$var$checkAsyncSchema(it) {
    if (it.schema.$async && !it.schemaEnv.$async) throw new Error("async schema in sync schema");
}
function $0559860990ef4600$var$commentKeyword({ gen: gen , schemaEnv: schemaEnv , schema: schema , errSchemaPath: errSchemaPath , opts: opts  }) {
    const msg = schema.$comment;
    if (opts.$comment === true) gen.code($jyW5U._($0559860990ef4600$var$t23 || ($0559860990ef4600$var$t23 = $0559860990ef4600$var$_`${0}.logger.log(${0})`), $2m10X.default.self, msg));
    else if (typeof opts.$comment == "function") {
        const schemaPath = $jyW5U.str($0559860990ef4600$var$t24 || ($0559860990ef4600$var$t24 = $0559860990ef4600$var$_`${0}/$comment`), errSchemaPath);
        const rootName = gen.scopeValue("root", {
            ref: schemaEnv.root
        });
        gen.code($jyW5U._($0559860990ef4600$var$t25 || ($0559860990ef4600$var$t25 = $0559860990ef4600$var$_`${0}.opts.$comment(${0}, ${0}, ${0}.schema)`), $2m10X.default.self, msg, schemaPath, rootName));
    }
}
function $0559860990ef4600$var$returnResults(it) {
    const { gen: gen , schemaEnv: schemaEnv , validateName: validateName , ValidationError: ValidationError , opts: opts  } = it;
    if (schemaEnv.$async) // TODO assign unevaluated
    gen.if($jyW5U._($0559860990ef4600$var$t26 || ($0559860990ef4600$var$t26 = $0559860990ef4600$var$_`${0} === 0`), $2m10X.default.errors), ()=>gen.return($2m10X.default.data), ()=>gen.throw($jyW5U._($0559860990ef4600$var$t27 || ($0559860990ef4600$var$t27 = $0559860990ef4600$var$_`new ${0}(${0})`), ValidationError, $2m10X.default.vErrors)));
    else {
        gen.assign($jyW5U._($0559860990ef4600$var$t28 || ($0559860990ef4600$var$t28 = $0559860990ef4600$var$_`${0}.errors`), validateName), $2m10X.default.vErrors);
        if (opts.unevaluated) $0559860990ef4600$var$assignEvaluated(it);
        gen.return($jyW5U._($0559860990ef4600$var$t29 || ($0559860990ef4600$var$t29 = $0559860990ef4600$var$_`${0} === 0`), $2m10X.default.errors));
    }
}
function $0559860990ef4600$var$assignEvaluated({ gen: gen , evaluated: evaluated , props: props , items: items  }) {
    if (props instanceof $jyW5U.Name) gen.assign($jyW5U._($0559860990ef4600$var$t30 || ($0559860990ef4600$var$t30 = $0559860990ef4600$var$_`${0}.props`), evaluated), props);
    if (items instanceof $jyW5U.Name) gen.assign($jyW5U._($0559860990ef4600$var$t31 || ($0559860990ef4600$var$t31 = $0559860990ef4600$var$_`${0}.items`), evaluated), items);
}
function $0559860990ef4600$var$schemaKeywords(it, types, typeErrors, errsCount) {
    const { gen: gen , schema: schema , data: data , allErrors: allErrors , opts: opts , self: self  } = it;
    const { RULES: RULES  } = self;
    if (schema.$ref && (opts.ignoreKeywordsWithRef || !(0, $81JIu.schemaHasRulesButRef)(schema, RULES))) {
        gen.block(()=>$0559860990ef4600$var$keywordCode(it, "$ref", RULES.all.$ref.definition)); // TODO typecast
        return;
    }
    if (!opts.jtd) $0559860990ef4600$var$checkStrictTypes(it, types);
    gen.block(()=>{
        for (const group of RULES.rules)groupKeywords(group);
        groupKeywords(RULES.post);
    });
    function groupKeywords(group) {
        if (!(0, $iale1.shouldUseGroup)(schema, group)) return;
        if (group.type) {
            gen.if((0, $j9Fpx.checkDataType)(group.type, data, opts.strictNumbers));
            $0559860990ef4600$var$iterateKeywords(it, group);
            if (types.length === 1 && types[0] === group.type && typeErrors) {
                gen.else();
                (0, $j9Fpx.reportTypeError)(it);
            }
            gen.endIf();
        } else $0559860990ef4600$var$iterateKeywords(it, group);
        // TODO make it "ok" call?
        if (!allErrors) gen.if($jyW5U._($0559860990ef4600$var$t32 || ($0559860990ef4600$var$t32 = $0559860990ef4600$var$_`${0} === ${0}`), $2m10X.default.errors, errsCount || 0));
    }
}
function $0559860990ef4600$var$iterateKeywords(it, group) {
    const { gen: gen , schema: schema , opts: { useDefaults: useDefaults  } ,  } = it;
    if (useDefaults) (0, $b6zJC.assignDefaults)(it, group.type);
    gen.block(()=>{
        for (const rule of group.rules)if ((0, $iale1.shouldUseRule)(schema, rule)) $0559860990ef4600$var$keywordCode(it, rule.keyword, rule.definition, group.type);
    });
}
function $0559860990ef4600$var$checkStrictTypes(it, types) {
    if (it.schemaEnv.meta || !it.opts.strictTypes) return;
    $0559860990ef4600$var$checkContextTypes(it, types);
    if (!it.opts.allowUnionTypes) $0559860990ef4600$var$checkMultipleTypes(it, types);
    $0559860990ef4600$var$checkKeywordTypes(it, it.dataTypes);
}
function $0559860990ef4600$var$checkContextTypes(it, types) {
    if (!types.length) return;
    if (!it.dataTypes.length) {
        it.dataTypes = types;
        return;
    }
    types.forEach((t40)=>{
        if (!$0559860990ef4600$var$includesType(it.dataTypes, t40)) $0559860990ef4600$var$strictTypesError(it, `type "${t40}" not allowed by context "${it.dataTypes.join(",")}"`);
    });
    it.dataTypes = it.dataTypes.filter((t41)=>$0559860990ef4600$var$includesType(types, t41));
}
function $0559860990ef4600$var$checkMultipleTypes(it, ts) {
    if (ts.length > 1 && !(ts.length === 2 && ts.includes("null"))) $0559860990ef4600$var$strictTypesError(it, "use allowUnionTypes to allow union type keyword");
}
function $0559860990ef4600$var$checkKeywordTypes(it, ts) {
    const rules = it.self.RULES.all;
    for(const keyword in rules){
        const rule = rules[keyword];
        if (typeof rule == "object" && (0, $iale1.shouldUseRule)(it.schema, rule)) {
            const { type: type  } = rule.definition;
            if (type.length && !type.some((t42)=>$0559860990ef4600$var$hasApplicableType(ts, t42))) $0559860990ef4600$var$strictTypesError(it, `missing type "${type.join(",")}" for keyword "${keyword}"`);
        }
    }
}
function $0559860990ef4600$var$hasApplicableType(schTs, kwdT) {
    return schTs.includes(kwdT) || kwdT === "number" && schTs.includes("integer");
}
function $0559860990ef4600$var$includesType(ts, t43) {
    return ts.includes(t43) || t43 === "integer" && ts.includes("number");
}
function $0559860990ef4600$var$strictTypesError(it, msg) {
    const schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
    msg += ` at "${schemaPath}" (strictTypes)`;
    (0, $81JIu.checkStrictMode)(it, msg, it.opts.strictTypes);
}
class $0559860990ef4600$var$KeywordCxt {
    result(condition, successAction, failAction) {
        this.failResult((0, $jyW5U.not)(condition), successAction, failAction);
    }
    failResult(condition, successAction, failAction) {
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
    pass(condition, failAction) {
        this.failResult((0, $jyW5U.not)(condition), undefined, failAction);
    }
    fail(condition) {
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
    fail$data(condition) {
        if (!this.$data) return this.fail(condition);
        const { schemaCode: schemaCode  } = this;
        this.fail($jyW5U._($0559860990ef4600$var$t33 || ($0559860990ef4600$var$t33 = $0559860990ef4600$var$_`${0} !== undefined && (${0})`), schemaCode, (0, $jyW5U.or)(this.invalid$data(), condition)));
    }
    error(append, errorParams, errorPaths) {
        if (errorParams) {
            this.setParams(errorParams);
            this._error(append, errorPaths);
            this.setParams({});
            return;
        }
        this._error(append, errorPaths);
    }
    _error(append, errorPaths) {
        (append ? $2lzC3.reportExtraError : $2lzC3.reportError)(this, this.def.error, errorPaths);
    }
    $dataError() {
        (0, $2lzC3.reportError)(this, this.def.$dataError || $2lzC3.keyword$DataError);
    }
    reset() {
        if (this.errsCount === undefined) throw new Error('add "trackErrors" to keyword definition');
        (0, $2lzC3.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(cond) {
        if (!this.allErrors) this.gen.if(cond);
    }
    setParams(obj, assign) {
        if (assign) Object.assign(this.params, obj);
        else this.params = obj;
    }
    block$data(valid, codeBlock, $dataValid = $jyW5U.nil) {
        this.gen.block(()=>{
            this.check$data(valid, $dataValid);
            codeBlock();
        });
    }
    check$data(valid = $jyW5U.nil, $dataValid = $jyW5U.nil) {
        if (!this.$data) return;
        const { gen: gen , schemaCode: schemaCode , schemaType: schemaType , def: def  } = this;
        gen.if((0, $jyW5U.or)($jyW5U._($0559860990ef4600$var$t34 || ($0559860990ef4600$var$t34 = $0559860990ef4600$var$_`${0} === undefined`), schemaCode), $dataValid));
        if (valid !== $jyW5U.nil) gen.assign(valid, true);
        if (schemaType.length || def.validateSchema) {
            gen.elseIf(this.invalid$data());
            this.$dataError();
            if (valid !== $jyW5U.nil) gen.assign(valid, false);
        }
        gen.else();
    }
    invalid$data() {
        const { gen: gen , schemaCode: schemaCode , schemaType: schemaType , def: def , it: it  } = this;
        return (0, $jyW5U.or)(wrong$DataType(), invalid$DataSchema());
        function wrong$DataType() {
            if (schemaType.length) {
                /* istanbul ignore if */ if (!(schemaCode instanceof $jyW5U.Name)) throw new Error("ajv implementation error");
                const st = Array.isArray(schemaType) ? schemaType : [
                    schemaType
                ];
                return $jyW5U._($0559860990ef4600$var$t35 || ($0559860990ef4600$var$t35 = $0559860990ef4600$var$_`${0}`), (0, $j9Fpx.checkDataTypes)(st, schemaCode, it.opts.strictNumbers, $j9Fpx.DataType.Wrong));
            }
            return $jyW5U.nil;
        }
        function invalid$DataSchema() {
            if (def.validateSchema) {
                const validateSchemaRef = gen.scopeValue("validate$data", {
                    ref: def.validateSchema
                }); // TODO value.code for standalone
                return $jyW5U._($0559860990ef4600$var$t36 || ($0559860990ef4600$var$t36 = $0559860990ef4600$var$_`!${0}(${0})`), validateSchemaRef, schemaCode);
            }
            return $jyW5U.nil;
        }
    }
    subschema(appl, valid) {
        const subschema = (0, $evIAL.getSubschema)(this.it, appl);
        (0, $evIAL.extendSubschemaData)(subschema, this.it, appl);
        (0, $evIAL.extendSubschemaMode)(subschema, appl);
        const nextContext = {
            ...this.it,
            ...subschema,
            items: undefined,
            props: undefined
        };
        $0559860990ef4600$var$subschemaCode(nextContext, valid);
        return nextContext;
    }
    mergeEvaluated(schemaCxt, toName) {
        const { it: it , gen: gen  } = this;
        if (!it.opts.unevaluated) return;
        if (it.props !== true && schemaCxt.props !== undefined) it.props = $81JIu.mergeEvaluated.props(gen, schemaCxt.props, it.props, toName);
        if (it.items !== true && schemaCxt.items !== undefined) it.items = $81JIu.mergeEvaluated.items(gen, schemaCxt.items, it.items, toName);
    }
    mergeValidEvaluated(schemaCxt, valid) {
        const { it: it , gen: gen  } = this;
        if (it.opts.unevaluated && (it.props !== true || it.items !== true)) {
            gen.if(valid, ()=>this.mergeEvaluated(schemaCxt, $jyW5U.Name));
            return true;
        }
    }
    constructor(it, def, keyword){
        (0, $cqN2N.validateKeywordUsage)(it, def, keyword);
        this.gen = it.gen;
        this.allErrors = it.allErrors;
        this.keyword = keyword;
        this.data = it.data;
        this.schema = it.schema[keyword];
        this.$data = def.$data && it.opts.$data && this.schema && this.schema.$data;
        this.schemaValue = (0, $81JIu.schemaRefOrVal)(it, this.schema, keyword, this.$data);
        this.schemaType = def.schemaType;
        this.parentSchema = it.schema;
        this.params = {};
        this.it = it;
        this.def = def;
        if (this.$data) this.schemaCode = it.gen.const("vSchema", $0559860990ef4600$var$getData(this.$data, it));
        else {
            this.schemaCode = this.schemaValue;
            if (!(0, $cqN2N.validSchemaType)(this.schema, def.schemaType, def.allowUndefined)) throw new Error(`${keyword} value must be ${JSON.stringify(def.schemaType)}`);
        }
        if ("code" in def ? def.trackErrors : def.errors !== false) this.errsCount = it.gen.const("_errs", $2m10X.default.errors);
    }
}
module.exports.KeywordCxt = $0559860990ef4600$var$KeywordCxt;
function $0559860990ef4600$var$keywordCode(it, keyword, def, ruleType) {
    const cxt = new $0559860990ef4600$var$KeywordCxt(it, def, keyword);
    if ("code" in def) def.code(cxt, ruleType);
    else if (cxt.$data && def.validate) (0, $cqN2N.funcKeywordCode)(cxt, def);
    else if ("macro" in def) (0, $cqN2N.macroKeywordCode)(cxt, def);
    else if (def.compile || def.validate) (0, $cqN2N.funcKeywordCode)(cxt, def);
}
const $0559860990ef4600$var$JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
const $0559860990ef4600$var$RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function $0559860990ef4600$var$getData($data, { dataLevel: dataLevel , dataNames: dataNames , dataPathArr: dataPathArr  }) {
    let jsonPointer;
    let data;
    if ($data === "") return $2m10X.default.rootData;
    if ($data[0] === "/") {
        if (!$0559860990ef4600$var$JSON_POINTER.test($data)) throw new Error(`Invalid JSON-pointer: ${$data}`);
        jsonPointer = $data;
        data = $2m10X.default.rootData;
    } else {
        const matches = $0559860990ef4600$var$RELATIVE_JSON_POINTER.exec($data);
        if (!matches) throw new Error(`Invalid JSON-pointer: ${$data}`);
        const up = +matches[1];
        jsonPointer = matches[2];
        if (jsonPointer === "#") {
            if (up >= dataLevel) throw new Error(errorMsg("property/index", up));
            return dataPathArr[dataLevel - up];
        }
        if (up > dataLevel) throw new Error(errorMsg("data", up));
        data = dataNames[dataLevel - up];
        if (!jsonPointer) return data;
    }
    let expr = data;
    const segments = jsonPointer.split("/");
    for (const segment of segments)if (segment) {
        data = $jyW5U._($0559860990ef4600$var$t37 || ($0559860990ef4600$var$t37 = $0559860990ef4600$var$_`${0}${0}`), data, (0, $jyW5U.getProperty)((0, $81JIu.unescapeJsonPointer)(segment)));
        expr = $jyW5U._($0559860990ef4600$var$t38 || ($0559860990ef4600$var$t38 = $0559860990ef4600$var$_`${0} && ${0}`), expr, data);
    }
    return expr;
    function errorMsg(pointerType, up) {
        return `Cannot access ${pointerType} ${up} levels up, current level is ${dataLevel}`;
    }
}
module.exports.getData = $0559860990ef4600$var$getData;

});
parcelRequire.register("8PiTW", function(module, exports) {
"use strict";
let $66d1bf877fc53ddf$var$_ = (t1)=>t1, $66d1bf877fc53ddf$var$t;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.boolOrEmptySchema = module.exports.topBoolOrEmptySchema = void 0;

var $2lzC3 = parcelRequire("2lzC3");

var $jyW5U = parcelRequire("jyW5U");

var $2m10X = parcelRequire("2m10X");
const $66d1bf877fc53ddf$var$boolError = {
    message: "boolean schema is false"
};
function $66d1bf877fc53ddf$var$topBoolOrEmptySchema(it) {
    const { gen: gen , schema: schema , validateName: validateName  } = it;
    if (schema === false) $66d1bf877fc53ddf$var$falseSchemaError(it, false);
    else if (typeof schema == "object" && schema.$async === true) gen.return($2m10X.default.data);
    else {
        gen.assign($jyW5U._($66d1bf877fc53ddf$var$t || ($66d1bf877fc53ddf$var$t = $66d1bf877fc53ddf$var$_`${0}.errors`), validateName), null);
        gen.return(true);
    }
}
module.exports.topBoolOrEmptySchema = $66d1bf877fc53ddf$var$topBoolOrEmptySchema;
function $66d1bf877fc53ddf$var$boolOrEmptySchema(it, valid) {
    const { gen: gen , schema: schema  } = it;
    if (schema === false) {
        gen.var(valid, false); // TODO var
        $66d1bf877fc53ddf$var$falseSchemaError(it);
    } else gen.var(valid, true); // TODO var
}
module.exports.boolOrEmptySchema = $66d1bf877fc53ddf$var$boolOrEmptySchema;
function $66d1bf877fc53ddf$var$falseSchemaError(it, overrideAllErrors) {
    const { gen: gen , data: data  } = it;
    // TODO maybe some other interface should be used for non-keyword validation errors...
    const cxt = {
        gen: gen,
        keyword: "false schema",
        data: data,
        schema: false,
        schemaCode: false,
        schemaValue: false,
        params: {},
        it: it
    };
    (0, $2lzC3.reportError)(cxt, $66d1bf877fc53ddf$var$boolError, undefined, overrideAllErrors);
}

});
parcelRequire.register("2lzC3", function(module, exports) {
"use strict";
let $1b592adec42e1433$var$_ = (t25)=>t25, $1b592adec42e1433$var$t, $1b592adec42e1433$var$t1, $1b592adec42e1433$var$t2, $1b592adec42e1433$var$t3, $1b592adec42e1433$var$t4, $1b592adec42e1433$var$t5, $1b592adec42e1433$var$t6, $1b592adec42e1433$var$t7, $1b592adec42e1433$var$t8, $1b592adec42e1433$var$t9, $1b592adec42e1433$var$t10, $1b592adec42e1433$var$t11, $1b592adec42e1433$var$t12, $1b592adec42e1433$var$t13, $1b592adec42e1433$var$t14, $1b592adec42e1433$var$t15, $1b592adec42e1433$var$t16, $1b592adec42e1433$var$t17, $1b592adec42e1433$var$t18, $1b592adec42e1433$var$t19, $1b592adec42e1433$var$t20, $1b592adec42e1433$var$t21, $1b592adec42e1433$var$t22, $1b592adec42e1433$var$t23, $1b592adec42e1433$var$t24;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.extendErrors = module.exports.resetErrorsCount = module.exports.reportExtraError = module.exports.reportError = module.exports.keyword$DataError = module.exports.keywordError = void 0;

var $jyW5U = parcelRequire("jyW5U");

var $81JIu = parcelRequire("81JIu");

var $2m10X = parcelRequire("2m10X");
module.exports.keywordError = {
    message: ({ keyword: keyword  })=>$jyW5U.str($1b592adec42e1433$var$t || ($1b592adec42e1433$var$t = $1b592adec42e1433$var$_`must pass "${0}" keyword validation`), keyword)
};
module.exports.keyword$DataError = {
    message: ({ keyword: keyword , schemaType: schemaType  })=>schemaType ? $jyW5U.str($1b592adec42e1433$var$t1 || ($1b592adec42e1433$var$t1 = $1b592adec42e1433$var$_`"${0}" keyword must be ${0} ($data)`), keyword, schemaType) : $jyW5U.str($1b592adec42e1433$var$t2 || ($1b592adec42e1433$var$t2 = $1b592adec42e1433$var$_`"${0}" keyword is invalid ($data)`), keyword)
};
function $1b592adec42e1433$var$reportError(cxt, error = module.exports.keywordError, errorPaths, overrideAllErrors) {
    const { it: it  } = cxt;
    const { gen: gen , compositeRule: compositeRule , allErrors: allErrors  } = it;
    const errObj = $1b592adec42e1433$var$errorObjectCode(cxt, error, errorPaths);
    if (overrideAllErrors !== null && overrideAllErrors !== void 0 ? overrideAllErrors : compositeRule || allErrors) $1b592adec42e1433$var$addError(gen, errObj);
    else $1b592adec42e1433$var$returnErrors(it, $jyW5U._($1b592adec42e1433$var$t3 || ($1b592adec42e1433$var$t3 = $1b592adec42e1433$var$_`[${0}]`), errObj));
}
module.exports.reportError = $1b592adec42e1433$var$reportError;
function $1b592adec42e1433$var$reportExtraError(cxt, error = module.exports.keywordError, errorPaths) {
    const { it: it  } = cxt;
    const { gen: gen , compositeRule: compositeRule , allErrors: allErrors  } = it;
    const errObj = $1b592adec42e1433$var$errorObjectCode(cxt, error, errorPaths);
    $1b592adec42e1433$var$addError(gen, errObj);
    if (!(compositeRule || allErrors)) $1b592adec42e1433$var$returnErrors(it, $2m10X.default.vErrors);
}
module.exports.reportExtraError = $1b592adec42e1433$var$reportExtraError;
function $1b592adec42e1433$var$resetErrorsCount(gen, errsCount) {
    gen.assign($2m10X.default.errors, errsCount);
    gen.if($jyW5U._($1b592adec42e1433$var$t4 || ($1b592adec42e1433$var$t4 = $1b592adec42e1433$var$_`${0} !== null`), $2m10X.default.vErrors), ()=>gen.if(errsCount, ()=>gen.assign($jyW5U._($1b592adec42e1433$var$t5 || ($1b592adec42e1433$var$t5 = $1b592adec42e1433$var$_`${0}.length`), $2m10X.default.vErrors), errsCount), ()=>gen.assign($2m10X.default.vErrors, null)));
}
module.exports.resetErrorsCount = $1b592adec42e1433$var$resetErrorsCount;
function $1b592adec42e1433$var$extendErrors({ gen: gen , keyword: keyword , schemaValue: schemaValue , data: data , errsCount: errsCount , it: it ,  }) {
    /* istanbul ignore if */ if (errsCount === undefined) throw new Error("ajv implementation error");
    const err = gen.name("err");
    gen.forRange("i", errsCount, $2m10X.default.errors, (i)=>{
        gen.const(err, $jyW5U._($1b592adec42e1433$var$t6 || ($1b592adec42e1433$var$t6 = $1b592adec42e1433$var$_`${0}[${0}]`), $2m10X.default.vErrors, i));
        gen.if($jyW5U._($1b592adec42e1433$var$t7 || ($1b592adec42e1433$var$t7 = $1b592adec42e1433$var$_`${0}.instancePath === undefined`), err), ()=>gen.assign($jyW5U._($1b592adec42e1433$var$t8 || ($1b592adec42e1433$var$t8 = $1b592adec42e1433$var$_`${0}.instancePath`), err), (0, $jyW5U.strConcat)($2m10X.default.instancePath, it.errorPath)));
        gen.assign($jyW5U._($1b592adec42e1433$var$t9 || ($1b592adec42e1433$var$t9 = $1b592adec42e1433$var$_`${0}.schemaPath`), err), $jyW5U.str($1b592adec42e1433$var$t10 || ($1b592adec42e1433$var$t10 = $1b592adec42e1433$var$_`${0}/${0}`), it.errSchemaPath, keyword));
        if (it.opts.verbose) {
            gen.assign($jyW5U._($1b592adec42e1433$var$t11 || ($1b592adec42e1433$var$t11 = $1b592adec42e1433$var$_`${0}.schema`), err), schemaValue);
            gen.assign($jyW5U._($1b592adec42e1433$var$t12 || ($1b592adec42e1433$var$t12 = $1b592adec42e1433$var$_`${0}.data`), err), data);
        }
    });
}
module.exports.extendErrors = $1b592adec42e1433$var$extendErrors;
function $1b592adec42e1433$var$addError(gen, errObj) {
    const err = gen.const("err", errObj);
    gen.if($jyW5U._($1b592adec42e1433$var$t13 || ($1b592adec42e1433$var$t13 = $1b592adec42e1433$var$_`${0} === null`), $2m10X.default.vErrors), ()=>gen.assign($2m10X.default.vErrors, $jyW5U._($1b592adec42e1433$var$t14 || ($1b592adec42e1433$var$t14 = $1b592adec42e1433$var$_`[${0}]`), err)), $jyW5U._($1b592adec42e1433$var$t15 || ($1b592adec42e1433$var$t15 = $1b592adec42e1433$var$_`${0}.push(${0})`), $2m10X.default.vErrors, err));
    gen.code($jyW5U._($1b592adec42e1433$var$t16 || ($1b592adec42e1433$var$t16 = $1b592adec42e1433$var$_`${0}++`), $2m10X.default.errors));
}
function $1b592adec42e1433$var$returnErrors(it, errs) {
    const { gen: gen , validateName: validateName , schemaEnv: schemaEnv  } = it;
    if (schemaEnv.$async) gen.throw($jyW5U._($1b592adec42e1433$var$t17 || ($1b592adec42e1433$var$t17 = $1b592adec42e1433$var$_`new ${0}(${0})`), it.ValidationError, errs));
    else {
        gen.assign($jyW5U._($1b592adec42e1433$var$t18 || ($1b592adec42e1433$var$t18 = $1b592adec42e1433$var$_`${0}.errors`), validateName), errs);
        gen.return(false);
    }
}
const $1b592adec42e1433$var$E = {
    keyword: new $jyW5U.Name("keyword"),
    schemaPath: new $jyW5U.Name("schemaPath"),
    params: new $jyW5U.Name("params"),
    propertyName: new $jyW5U.Name("propertyName"),
    message: new $jyW5U.Name("message"),
    schema: new $jyW5U.Name("schema"),
    parentSchema: new $jyW5U.Name("parentSchema")
};
function $1b592adec42e1433$var$errorObjectCode(cxt, error, errorPaths) {
    const { createErrors: createErrors  } = cxt.it;
    if (createErrors === false) return $jyW5U._($1b592adec42e1433$var$t19 || ($1b592adec42e1433$var$t19 = $1b592adec42e1433$var$_`{}`));
    return $1b592adec42e1433$var$errorObject(cxt, error, errorPaths);
}
function $1b592adec42e1433$var$errorObject(cxt, error, errorPaths = {}) {
    const { gen: gen , it: it  } = cxt;
    const keyValues = [
        $1b592adec42e1433$var$errorInstancePath(it, errorPaths),
        $1b592adec42e1433$var$errorSchemaPath(cxt, errorPaths), 
    ];
    $1b592adec42e1433$var$extraErrorProps(cxt, error, keyValues);
    return gen.object(...keyValues);
}
function $1b592adec42e1433$var$errorInstancePath({ errorPath: errorPath  }, { instancePath: instancePath  }) {
    const instPath = instancePath ? $jyW5U.str($1b592adec42e1433$var$t20 || ($1b592adec42e1433$var$t20 = $1b592adec42e1433$var$_`${0}${0}`), errorPath, (0, $81JIu.getErrorPath)(instancePath, $81JIu.Type.Str)) : errorPath;
    return [
        $2m10X.default.instancePath,
        (0, $jyW5U.strConcat)($2m10X.default.instancePath, instPath)
    ];
}
function $1b592adec42e1433$var$errorSchemaPath({ keyword: keyword , it: { errSchemaPath: errSchemaPath  }  }, { schemaPath: schemaPath , parentSchema: parentSchema  }) {
    let schPath = parentSchema ? errSchemaPath : $jyW5U.str($1b592adec42e1433$var$t21 || ($1b592adec42e1433$var$t21 = $1b592adec42e1433$var$_`${0}/${0}`), errSchemaPath, keyword);
    if (schemaPath) schPath = $jyW5U.str($1b592adec42e1433$var$t22 || ($1b592adec42e1433$var$t22 = $1b592adec42e1433$var$_`${0}${0}`), schPath, (0, $81JIu.getErrorPath)(schemaPath, $81JIu.Type.Str));
    return [
        $1b592adec42e1433$var$E.schemaPath,
        schPath
    ];
}
function $1b592adec42e1433$var$extraErrorProps(cxt, { params: params , message: message  }, keyValues) {
    const { keyword: keyword , data: data , schemaValue: schemaValue , it: it  } = cxt;
    const { opts: opts , propertyName: propertyName , topSchemaRef: topSchemaRef , schemaPath: schemaPath  } = it;
    keyValues.push([
        $1b592adec42e1433$var$E.keyword,
        keyword
    ], [
        $1b592adec42e1433$var$E.params,
        typeof params == "function" ? params(cxt) : params || $jyW5U._($1b592adec42e1433$var$t23 || ($1b592adec42e1433$var$t23 = $1b592adec42e1433$var$_`{}`))
    ]);
    if (opts.messages) keyValues.push([
        $1b592adec42e1433$var$E.message,
        typeof message == "function" ? message(cxt) : message
    ]);
    if (opts.verbose) keyValues.push([
        $1b592adec42e1433$var$E.schema,
        schemaValue
    ], [
        $1b592adec42e1433$var$E.parentSchema,
        $jyW5U._($1b592adec42e1433$var$t24 || ($1b592adec42e1433$var$t24 = $1b592adec42e1433$var$_`${0}${0}`), topSchemaRef, schemaPath)
    ], [
        $2m10X.default.data,
        data
    ]);
    if (propertyName) keyValues.push([
        $1b592adec42e1433$var$E.propertyName,
        propertyName
    ]);
}

});
parcelRequire.register("jyW5U", function(module, exports) {
"use strict";
let $e3de41a0d2c009e1$var$_ = (t6)=>t6, $e3de41a0d2c009e1$var$t, $e3de41a0d2c009e1$var$t1, $e3de41a0d2c009e1$var$t2, $e3de41a0d2c009e1$var$t3, $e3de41a0d2c009e1$var$t4, $e3de41a0d2c009e1$var$t5;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.or = module.exports.and = module.exports.not = module.exports.CodeGen = module.exports.operators = module.exports.varKinds = module.exports.ValueScopeName = module.exports.ValueScope = module.exports.Scope = module.exports.Name = module.exports.regexpCode = module.exports.stringify = module.exports.getProperty = module.exports.nil = module.exports.strConcat = module.exports.str = module.exports._ = void 0;

var $6IEZq = parcelRequire("6IEZq");

var $41ECm = parcelRequire("41ECm");

var $6IEZq = parcelRequire("6IEZq");
Object.defineProperty(module.exports, "_", {
    enumerable: true,
    get: function() {
        return $6IEZq._;
    }
});
Object.defineProperty(module.exports, "str", {
    enumerable: true,
    get: function() {
        return $6IEZq.str;
    }
});
Object.defineProperty(module.exports, "strConcat", {
    enumerable: true,
    get: function() {
        return $6IEZq.strConcat;
    }
});
Object.defineProperty(module.exports, "nil", {
    enumerable: true,
    get: function() {
        return $6IEZq.nil;
    }
});
Object.defineProperty(module.exports, "getProperty", {
    enumerable: true,
    get: function() {
        return $6IEZq.getProperty;
    }
});
Object.defineProperty(module.exports, "stringify", {
    enumerable: true,
    get: function() {
        return $6IEZq.stringify;
    }
});
Object.defineProperty(module.exports, "regexpCode", {
    enumerable: true,
    get: function() {
        return $6IEZq.regexpCode;
    }
});
Object.defineProperty(module.exports, "Name", {
    enumerable: true,
    get: function() {
        return $6IEZq.Name;
    }
});

var $41ECm = parcelRequire("41ECm");
Object.defineProperty(module.exports, "Scope", {
    enumerable: true,
    get: function() {
        return $41ECm.Scope;
    }
});
Object.defineProperty(module.exports, "ValueScope", {
    enumerable: true,
    get: function() {
        return $41ECm.ValueScope;
    }
});
Object.defineProperty(module.exports, "ValueScopeName", {
    enumerable: true,
    get: function() {
        return $41ECm.ValueScopeName;
    }
});
Object.defineProperty(module.exports, "varKinds", {
    enumerable: true,
    get: function() {
        return $41ECm.varKinds;
    }
});
module.exports.operators = {
    GT: new $6IEZq._Code(">"),
    GTE: new $6IEZq._Code(">="),
    LT: new $6IEZq._Code("<"),
    LTE: new $6IEZq._Code("<="),
    EQ: new $6IEZq._Code("==="),
    NEQ: new $6IEZq._Code("!=="),
    NOT: new $6IEZq._Code("!"),
    OR: new $6IEZq._Code("||"),
    AND: new $6IEZq._Code("&&"),
    ADD: new $6IEZq._Code("+")
};
class $e3de41a0d2c009e1$var$Node {
    optimizeNodes() {
        return this;
    }
    optimizeNames(_names, _constants) {
        return this;
    }
}
class $e3de41a0d2c009e1$var$Def extends $e3de41a0d2c009e1$var$Node {
    render({ es5: es5 , _n: _n  }) {
        const varKind = es5 ? $41ECm.varKinds.var : this.varKind;
        const rhs = this.rhs === undefined ? "" : ` = ${this.rhs}`;
        return `${varKind} ${this.name}${rhs};` + _n;
    }
    optimizeNames(names, constants) {
        if (!names[this.name.str]) return;
        if (this.rhs) this.rhs = $e3de41a0d2c009e1$var$optimizeExpr(this.rhs, names, constants);
        return this;
    }
    get names() {
        return this.rhs instanceof $6IEZq._CodeOrName ? this.rhs.names : {};
    }
    constructor(varKind, name, rhs){
        super();
        this.varKind = varKind;
        this.name = name;
        this.rhs = rhs;
    }
}
class $e3de41a0d2c009e1$var$Assign extends $e3de41a0d2c009e1$var$Node {
    render({ _n: _n  }) {
        return `${this.lhs} = ${this.rhs};` + _n;
    }
    optimizeNames(names, constants) {
        if (this.lhs instanceof $6IEZq.Name && !names[this.lhs.str] && !this.sideEffects) return;
        this.rhs = $e3de41a0d2c009e1$var$optimizeExpr(this.rhs, names, constants);
        return this;
    }
    get names() {
        const names = this.lhs instanceof $6IEZq.Name ? {} : {
            ...this.lhs.names
        };
        return $e3de41a0d2c009e1$var$addExprNames(names, this.rhs);
    }
    constructor(lhs, rhs, sideEffects){
        super();
        this.lhs = lhs;
        this.rhs = rhs;
        this.sideEffects = sideEffects;
    }
}
class $e3de41a0d2c009e1$var$AssignOp extends $e3de41a0d2c009e1$var$Assign {
    render({ _n: _n  }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + _n;
    }
    constructor(lhs, op, rhs, sideEffects){
        super(lhs, rhs, sideEffects);
        this.op = op;
    }
}
class $e3de41a0d2c009e1$var$Label extends $e3de41a0d2c009e1$var$Node {
    render({ _n: _n  }) {
        return `${this.label}:` + _n;
    }
    constructor(label){
        super();
        this.label = label;
        this.names = {};
    }
}
class $e3de41a0d2c009e1$var$Break extends $e3de41a0d2c009e1$var$Node {
    render({ _n: _n  }) {
        const label = this.label ? ` ${this.label}` : "";
        return `break${label};` + _n;
    }
    constructor(label){
        super();
        this.label = label;
        this.names = {};
    }
}
class $e3de41a0d2c009e1$var$Throw extends $e3de41a0d2c009e1$var$Node {
    render({ _n: _n  }) {
        return `throw ${this.error};` + _n;
    }
    get names() {
        return this.error.names;
    }
    constructor(error){
        super();
        this.error = error;
    }
}
class $e3de41a0d2c009e1$var$AnyCode extends $e3de41a0d2c009e1$var$Node {
    render({ _n: _n  }) {
        return `${this.code};` + _n;
    }
    optimizeNodes() {
        return `${this.code}` ? this : undefined;
    }
    optimizeNames(names, constants) {
        this.code = $e3de41a0d2c009e1$var$optimizeExpr(this.code, names, constants);
        return this;
    }
    get names() {
        return this.code instanceof $6IEZq._CodeOrName ? this.code.names : {};
    }
    constructor(code){
        super();
        this.code = code;
    }
}
class $e3de41a0d2c009e1$var$ParentNode extends $e3de41a0d2c009e1$var$Node {
    render(opts) {
        return this.nodes.reduce((code, n)=>code + n.render(opts), "");
    }
    optimizeNodes() {
        const { nodes: nodes  } = this;
        let i = nodes.length;
        while(i--){
            const n = nodes[i].optimizeNodes();
            if (Array.isArray(n)) nodes.splice(i, 1, ...n);
            else if (n) nodes[i] = n;
            else nodes.splice(i, 1);
        }
        return nodes.length > 0 ? this : undefined;
    }
    optimizeNames(names, constants) {
        const { nodes: nodes  } = this;
        let i = nodes.length;
        while(i--){
            // iterating backwards improves 1-pass optimization
            const n = nodes[i];
            if (n.optimizeNames(names, constants)) continue;
            $e3de41a0d2c009e1$var$subtractNames(names, n.names);
            nodes.splice(i, 1);
        }
        return nodes.length > 0 ? this : undefined;
    }
    get names() {
        return this.nodes.reduce((names, n)=>$e3de41a0d2c009e1$var$addNames(names, n.names), {});
    }
    constructor(nodes = []){
        super();
        this.nodes = nodes;
    }
}
class $e3de41a0d2c009e1$var$BlockNode extends $e3de41a0d2c009e1$var$ParentNode {
    render(opts) {
        return "{" + opts._n + super.render(opts) + "}" + opts._n;
    }
}
class $e3de41a0d2c009e1$var$Root extends $e3de41a0d2c009e1$var$ParentNode {
}
class $e3de41a0d2c009e1$var$Else extends $e3de41a0d2c009e1$var$BlockNode {
}
$e3de41a0d2c009e1$var$Else.kind = "else";
class $e3de41a0d2c009e1$var$If extends $e3de41a0d2c009e1$var$BlockNode {
    render(opts) {
        let code = `if(${this.condition})` + super.render(opts);
        if (this.else) code += "else " + this.else.render(opts);
        return code;
    }
    optimizeNodes() {
        super.optimizeNodes();
        const cond = this.condition;
        if (cond === true) return this.nodes; // else is ignored here
        let e = this.else;
        if (e) {
            const ns = e.optimizeNodes();
            e = this.else = Array.isArray(ns) ? new $e3de41a0d2c009e1$var$Else(ns) : ns;
        }
        if (e) {
            if (cond === false) return e instanceof $e3de41a0d2c009e1$var$If ? e : e.nodes;
            if (this.nodes.length) return this;
            return new $e3de41a0d2c009e1$var$If($e3de41a0d2c009e1$var$not(cond), e instanceof $e3de41a0d2c009e1$var$If ? [
                e
            ] : e.nodes);
        }
        if (cond === false || !this.nodes.length) return undefined;
        return this;
    }
    optimizeNames(names, constants) {
        var _a;
        this.else = (_a = this.else) === null || _a === void 0 ? void 0 : _a.optimizeNames(names, constants);
        if (!(super.optimizeNames(names, constants) || this.else)) return;
        this.condition = $e3de41a0d2c009e1$var$optimizeExpr(this.condition, names, constants);
        return this;
    }
    get names() {
        const names = super.names;
        $e3de41a0d2c009e1$var$addExprNames(names, this.condition);
        if (this.else) $e3de41a0d2c009e1$var$addNames(names, this.else.names);
        return names;
    }
    constructor(condition, nodes){
        super(nodes);
        this.condition = condition;
    }
}
$e3de41a0d2c009e1$var$If.kind = "if";
class $e3de41a0d2c009e1$var$For extends $e3de41a0d2c009e1$var$BlockNode {
}
$e3de41a0d2c009e1$var$For.kind = "for";
class $e3de41a0d2c009e1$var$ForLoop extends $e3de41a0d2c009e1$var$For {
    render(opts) {
        return `for(${this.iteration})` + super.render(opts);
    }
    optimizeNames(names, constants) {
        if (!super.optimizeNames(names, constants)) return;
        this.iteration = $e3de41a0d2c009e1$var$optimizeExpr(this.iteration, names, constants);
        return this;
    }
    get names() {
        return $e3de41a0d2c009e1$var$addNames(super.names, this.iteration.names);
    }
    constructor(iteration){
        super();
        this.iteration = iteration;
    }
}
class $e3de41a0d2c009e1$var$ForRange extends $e3de41a0d2c009e1$var$For {
    render(opts) {
        const varKind = opts.es5 ? $41ECm.varKinds.var : this.varKind;
        const { name: name , from: from , to: to  } = this;
        return `for(${varKind} ${name}=${from}; ${name}<${to}; ${name}++)` + super.render(opts);
    }
    get names() {
        const names = $e3de41a0d2c009e1$var$addExprNames(super.names, this.from);
        return $e3de41a0d2c009e1$var$addExprNames(names, this.to);
    }
    constructor(varKind, name, from, to){
        super();
        this.varKind = varKind;
        this.name = name;
        this.from = from;
        this.to = to;
    }
}
class $e3de41a0d2c009e1$var$ForIter extends $e3de41a0d2c009e1$var$For {
    render(opts) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(opts);
    }
    optimizeNames(names, constants) {
        if (!super.optimizeNames(names, constants)) return;
        this.iterable = $e3de41a0d2c009e1$var$optimizeExpr(this.iterable, names, constants);
        return this;
    }
    get names() {
        return $e3de41a0d2c009e1$var$addNames(super.names, this.iterable.names);
    }
    constructor(loop, varKind, name, iterable){
        super();
        this.loop = loop;
        this.varKind = varKind;
        this.name = name;
        this.iterable = iterable;
    }
}
class $e3de41a0d2c009e1$var$Func extends $e3de41a0d2c009e1$var$BlockNode {
    render(opts) {
        const _async = this.async ? "async " : "";
        return `${_async}function ${this.name}(${this.args})` + super.render(opts);
    }
    constructor(name, args, async){
        super();
        this.name = name;
        this.args = args;
        this.async = async;
    }
}
$e3de41a0d2c009e1$var$Func.kind = "func";
class $e3de41a0d2c009e1$var$Return extends $e3de41a0d2c009e1$var$ParentNode {
    render(opts) {
        return "return " + super.render(opts);
    }
}
$e3de41a0d2c009e1$var$Return.kind = "return";
class $e3de41a0d2c009e1$var$Try extends $e3de41a0d2c009e1$var$BlockNode {
    render(opts) {
        let code = "try" + super.render(opts);
        if (this.catch) code += this.catch.render(opts);
        if (this.finally) code += this.finally.render(opts);
        return code;
    }
    optimizeNodes() {
        var _a, _b;
        super.optimizeNodes();
        (_a = this.catch) === null || _a === void 0 || _a.optimizeNodes();
        (_b = this.finally) === null || _b === void 0 || _b.optimizeNodes();
        return this;
    }
    optimizeNames(names, constants) {
        var _a, _b;
        super.optimizeNames(names, constants);
        (_a = this.catch) === null || _a === void 0 || _a.optimizeNames(names, constants);
        (_b = this.finally) === null || _b === void 0 || _b.optimizeNames(names, constants);
        return this;
    }
    get names() {
        const names = super.names;
        if (this.catch) $e3de41a0d2c009e1$var$addNames(names, this.catch.names);
        if (this.finally) $e3de41a0d2c009e1$var$addNames(names, this.finally.names);
        return names;
    }
}
class $e3de41a0d2c009e1$var$Catch extends $e3de41a0d2c009e1$var$BlockNode {
    render(opts) {
        return `catch(${this.error})` + super.render(opts);
    }
    constructor(error){
        super();
        this.error = error;
    }
}
$e3de41a0d2c009e1$var$Catch.kind = "catch";
class $e3de41a0d2c009e1$var$Finally extends $e3de41a0d2c009e1$var$BlockNode {
    render(opts) {
        return "finally" + super.render(opts);
    }
}
$e3de41a0d2c009e1$var$Finally.kind = "finally";
class $e3de41a0d2c009e1$var$CodeGen {
    toString() {
        return this._root.render(this.opts);
    }
    // returns unique name in the internal scope
    name(prefix) {
        return this._scope.name(prefix);
    }
    // reserves unique name in the external scope
    scopeName(prefix) {
        return this._extScope.name(prefix);
    }
    // reserves unique name in the external scope and assigns value to it
    scopeValue(prefixOrName, value) {
        const name = this._extScope.value(prefixOrName, value);
        const vs = this._values[name.prefix] || (this._values[name.prefix] = new Set());
        vs.add(name);
        return name;
    }
    getScopeValue(prefix, keyOrRef) {
        return this._extScope.getValue(prefix, keyOrRef);
    }
    // return code that assigns values in the external scope to the names that are used internally
    // (same names that were returned by gen.scopeName or gen.scopeValue)
    scopeRefs(scopeName) {
        return this._extScope.scopeRefs(scopeName, this._values);
    }
    scopeCode() {
        return this._extScope.scopeCode(this._values);
    }
    _def(varKind, nameOrPrefix, rhs, constant) {
        const name = this._scope.toName(nameOrPrefix);
        if (rhs !== undefined && constant) this._constants[name.str] = rhs;
        this._leafNode(new $e3de41a0d2c009e1$var$Def(varKind, name, rhs));
        return name;
    }
    // `const` declaration (`var` in es5 mode)
    const(nameOrPrefix, rhs, _constant) {
        return this._def($41ECm.varKinds.const, nameOrPrefix, rhs, _constant);
    }
    // `let` declaration with optional assignment (`var` in es5 mode)
    let(nameOrPrefix, rhs, _constant) {
        return this._def($41ECm.varKinds.let, nameOrPrefix, rhs, _constant);
    }
    // `var` declaration with optional assignment
    var(nameOrPrefix, rhs, _constant) {
        return this._def($41ECm.varKinds.var, nameOrPrefix, rhs, _constant);
    }
    // assignment code
    assign(lhs, rhs, sideEffects) {
        return this._leafNode(new $e3de41a0d2c009e1$var$Assign(lhs, rhs, sideEffects));
    }
    // `+=` code
    add(lhs, rhs) {
        return this._leafNode(new $e3de41a0d2c009e1$var$AssignOp(lhs, module.exports.operators.ADD, rhs));
    }
    // appends passed SafeExpr to code or executes Block
    code(c) {
        if (typeof c == "function") c();
        else if (c !== $6IEZq.nil) this._leafNode(new $e3de41a0d2c009e1$var$AnyCode(c));
        return this;
    }
    // returns code for object literal for the passed argument list of key-value pairs
    object(...keyValues) {
        const code = [
            "{"
        ];
        for (const [key, value] of keyValues){
            if (code.length > 1) code.push(",");
            code.push(key);
            if (key !== value || this.opts.es5) {
                code.push(":");
                (0, $6IEZq.addCodeArg)(code, value);
            }
        }
        code.push("}");
        return new $6IEZq._Code(code);
    }
    // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
    if(condition, thenBody, elseBody) {
        this._blockNode(new $e3de41a0d2c009e1$var$If(condition));
        if (thenBody && elseBody) this.code(thenBody).else().code(elseBody).endIf();
        else if (thenBody) this.code(thenBody).endIf();
        else if (elseBody) throw new Error('CodeGen: "else" body without "then" body');
        return this;
    }
    // `else if` clause - invalid without `if` or after `else` clauses
    elseIf(condition) {
        return this._elseNode(new $e3de41a0d2c009e1$var$If(condition));
    }
    // `else` clause - only valid after `if` or `else if` clauses
    else() {
        return this._elseNode(new $e3de41a0d2c009e1$var$Else());
    }
    // end `if` statement (needed if gen.if was used only with condition)
    endIf() {
        return this._endBlockNode($e3de41a0d2c009e1$var$If, $e3de41a0d2c009e1$var$Else);
    }
    _for(node, forBody) {
        this._blockNode(node);
        if (forBody) this.code(forBody).endFor();
        return this;
    }
    // a generic `for` clause (or statement if `forBody` is passed)
    for(iteration, forBody) {
        return this._for(new $e3de41a0d2c009e1$var$ForLoop(iteration), forBody);
    }
    // `for` statement for a range of values
    forRange(nameOrPrefix, from, to, forBody, varKind = this.opts.es5 ? $41ECm.varKinds.var : $41ECm.varKinds.let) {
        const name = this._scope.toName(nameOrPrefix);
        return this._for(new $e3de41a0d2c009e1$var$ForRange(varKind, name, from, to), ()=>forBody(name));
    }
    // `for-of` statement (in es5 mode replace with a normal for loop)
    forOf(nameOrPrefix, iterable, forBody, varKind = $41ECm.varKinds.const) {
        const name = this._scope.toName(nameOrPrefix);
        if (this.opts.es5) {
            const arr = iterable instanceof $6IEZq.Name ? iterable : this.var("_arr", iterable);
            return this.forRange("_i", 0, $6IEZq._($e3de41a0d2c009e1$var$t || ($e3de41a0d2c009e1$var$t = $e3de41a0d2c009e1$var$_`${0}.length`), arr), (i)=>{
                this.var(name, $6IEZq._($e3de41a0d2c009e1$var$t1 || ($e3de41a0d2c009e1$var$t1 = $e3de41a0d2c009e1$var$_`${0}[${0}]`), arr, i));
                forBody(name);
            });
        }
        return this._for(new $e3de41a0d2c009e1$var$ForIter("of", varKind, name, iterable), ()=>forBody(name));
    }
    // `for-in` statement.
    // With option `ownProperties` replaced with a `for-of` loop for object keys
    forIn(nameOrPrefix, obj, forBody, varKind = this.opts.es5 ? $41ECm.varKinds.var : $41ECm.varKinds.const) {
        if (this.opts.ownProperties) return this.forOf(nameOrPrefix, $6IEZq._($e3de41a0d2c009e1$var$t2 || ($e3de41a0d2c009e1$var$t2 = $e3de41a0d2c009e1$var$_`Object.keys(${0})`), obj), forBody);
        const name = this._scope.toName(nameOrPrefix);
        return this._for(new $e3de41a0d2c009e1$var$ForIter("in", varKind, name, obj), ()=>forBody(name));
    }
    // end `for` loop
    endFor() {
        return this._endBlockNode($e3de41a0d2c009e1$var$For);
    }
    // `label` statement
    label(label) {
        return this._leafNode(new $e3de41a0d2c009e1$var$Label(label));
    }
    // `break` statement
    break(label) {
        return this._leafNode(new $e3de41a0d2c009e1$var$Break(label));
    }
    // `return` statement
    return(value) {
        const node = new $e3de41a0d2c009e1$var$Return();
        this._blockNode(node);
        this.code(value);
        if (node.nodes.length !== 1) throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode($e3de41a0d2c009e1$var$Return);
    }
    // `try` statement
    try(tryBody, catchCode, finallyCode) {
        if (!catchCode && !finallyCode) throw new Error('CodeGen: "try" without "catch" and "finally"');
        const node = new $e3de41a0d2c009e1$var$Try();
        this._blockNode(node);
        this.code(tryBody);
        if (catchCode) {
            const error = this.name("e");
            this._currNode = node.catch = new $e3de41a0d2c009e1$var$Catch(error);
            catchCode(error);
        }
        if (finallyCode) {
            this._currNode = node.finally = new $e3de41a0d2c009e1$var$Finally();
            this.code(finallyCode);
        }
        return this._endBlockNode($e3de41a0d2c009e1$var$Catch, $e3de41a0d2c009e1$var$Finally);
    }
    // `throw` statement
    throw(error) {
        return this._leafNode(new $e3de41a0d2c009e1$var$Throw(error));
    }
    // start self-balancing block
    block(body, nodeCount) {
        this._blockStarts.push(this._nodes.length);
        if (body) this.code(body).endBlock(nodeCount);
        return this;
    }
    // end the current self-balancing block
    endBlock(nodeCount) {
        const len = this._blockStarts.pop();
        if (len === undefined) throw new Error("CodeGen: not in self-balancing block");
        const toClose = this._nodes.length - len;
        if (toClose < 0 || nodeCount !== undefined && toClose !== nodeCount) throw new Error(`CodeGen: wrong number of nodes: ${toClose} vs ${nodeCount} expected`);
        this._nodes.length = len;
        return this;
    }
    // `function` heading (or definition if funcBody is passed)
    func(name, args = $6IEZq.nil, async, funcBody) {
        this._blockNode(new $e3de41a0d2c009e1$var$Func(name, args, async));
        if (funcBody) this.code(funcBody).endFunc();
        return this;
    }
    // end function definition
    endFunc() {
        return this._endBlockNode($e3de41a0d2c009e1$var$Func);
    }
    optimize(n = 1) {
        while(n-- > 0){
            this._root.optimizeNodes();
            this._root.optimizeNames(this._root.names, this._constants);
        }
    }
    _leafNode(node) {
        this._currNode.nodes.push(node);
        return this;
    }
    _blockNode(node) {
        this._currNode.nodes.push(node);
        this._nodes.push(node);
    }
    _endBlockNode(N1, N2) {
        const n = this._currNode;
        if (n instanceof N1 || N2 && n instanceof N2) {
            this._nodes.pop();
            return this;
        }
        throw new Error(`CodeGen: not in block "${N2 ? `${N1.kind}/${N2.kind}` : N1.kind}"`);
    }
    _elseNode(node) {
        const n = this._currNode;
        if (!(n instanceof $e3de41a0d2c009e1$var$If)) throw new Error('CodeGen: "else" without "if"');
        this._currNode = n.else = node;
        return this;
    }
    get _root() {
        return this._nodes[0];
    }
    get _currNode() {
        const ns = this._nodes;
        return ns[ns.length - 1];
    }
    set _currNode(node) {
        const ns = this._nodes;
        ns[ns.length - 1] = node;
    }
    constructor(extScope, opts = {}){
        this._values = {};
        this._blockStarts = [];
        this._constants = {};
        this.opts = {
            ...opts,
            _n: opts.lines ? "\n" : ""
        };
        this._extScope = extScope;
        this._scope = new $41ECm.Scope({
            parent: extScope
        });
        this._nodes = [
            new $e3de41a0d2c009e1$var$Root()
        ];
    }
}
module.exports.CodeGen = $e3de41a0d2c009e1$var$CodeGen;
function $e3de41a0d2c009e1$var$addNames(names, from) {
    for(const n in from)names[n] = (names[n] || 0) + (from[n] || 0);
    return names;
}
function $e3de41a0d2c009e1$var$addExprNames(names, from) {
    return from instanceof $6IEZq._CodeOrName ? $e3de41a0d2c009e1$var$addNames(names, from.names) : names;
}
function $e3de41a0d2c009e1$var$optimizeExpr(expr, names, constants) {
    if (expr instanceof $6IEZq.Name) return replaceName(expr);
    if (!canOptimize(expr)) return expr;
    return new $6IEZq._Code(expr._items.reduce((items, c)=>{
        if (c instanceof $6IEZq.Name) c = replaceName(c);
        if (c instanceof $6IEZq._Code) items.push(...c._items);
        else items.push(c);
        return items;
    }, []));
    function replaceName(n) {
        const c = constants[n.str];
        if (c === undefined || names[n.str] !== 1) return n;
        delete names[n.str];
        return c;
    }
    function canOptimize(e) {
        return e instanceof $6IEZq._Code && e._items.some((c)=>c instanceof $6IEZq.Name && names[c.str] === 1 && constants[c.str] !== undefined);
    }
}
function $e3de41a0d2c009e1$var$subtractNames(names, from) {
    for(const n in from)names[n] = (names[n] || 0) - (from[n] || 0);
}
function $e3de41a0d2c009e1$var$not(x) {
    return typeof x == "boolean" || typeof x == "number" || x === null ? !x : $6IEZq._($e3de41a0d2c009e1$var$t3 || ($e3de41a0d2c009e1$var$t3 = $e3de41a0d2c009e1$var$_`!${0}`), $e3de41a0d2c009e1$var$par(x));
}
module.exports.not = $e3de41a0d2c009e1$var$not;
const $e3de41a0d2c009e1$var$andCode = $e3de41a0d2c009e1$var$mappend(module.exports.operators.AND);
// boolean AND (&&) expression with the passed arguments
function $e3de41a0d2c009e1$var$and(...args) {
    return args.reduce($e3de41a0d2c009e1$var$andCode);
}
module.exports.and = $e3de41a0d2c009e1$var$and;
const $e3de41a0d2c009e1$var$orCode = $e3de41a0d2c009e1$var$mappend(module.exports.operators.OR);
// boolean OR (||) expression with the passed arguments
function $e3de41a0d2c009e1$var$or(...args) {
    return args.reduce($e3de41a0d2c009e1$var$orCode);
}
module.exports.or = $e3de41a0d2c009e1$var$or;
function $e3de41a0d2c009e1$var$mappend(op) {
    return (x, y)=>x === $6IEZq.nil ? y : y === $6IEZq.nil ? x : $6IEZq._($e3de41a0d2c009e1$var$t4 || ($e3de41a0d2c009e1$var$t4 = $e3de41a0d2c009e1$var$_`${0} ${0} ${0}`), $e3de41a0d2c009e1$var$par(x), op, $e3de41a0d2c009e1$var$par(y));
}
function $e3de41a0d2c009e1$var$par(x) {
    return x instanceof $6IEZq.Name ? x : $6IEZq._($e3de41a0d2c009e1$var$t5 || ($e3de41a0d2c009e1$var$t5 = $e3de41a0d2c009e1$var$_`(${0})`), x);
}

});
parcelRequire.register("6IEZq", function(module, exports) {
"use strict";
let $4e46a5d827df641e$var$_ = (t2)=>t2, $4e46a5d827df641e$var$t, $4e46a5d827df641e$var$t1;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.regexpCode = module.exports.getEsmExportName = module.exports.getProperty = module.exports.safeStringify = module.exports.stringify = module.exports.strConcat = module.exports.addCodeArg = module.exports.str = module.exports._ = module.exports.nil = module.exports._Code = module.exports.Name = module.exports.IDENTIFIER = module.exports._CodeOrName = void 0;
class $4e46a5d827df641e$var$_CodeOrName {
}
module.exports._CodeOrName = $4e46a5d827df641e$var$_CodeOrName;
module.exports.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
class $4e46a5d827df641e$var$Name extends $4e46a5d827df641e$var$_CodeOrName {
    toString() {
        return this.str;
    }
    emptyStr() {
        return false;
    }
    get names() {
        return {
            [this.str]: 1
        };
    }
    constructor(s){
        super();
        if (!module.exports.IDENTIFIER.test(s)) throw new Error("CodeGen: name must be a valid identifier");
        this.str = s;
    }
}
module.exports.Name = $4e46a5d827df641e$var$Name;
class $4e46a5d827df641e$var$_Code extends $4e46a5d827df641e$var$_CodeOrName {
    toString() {
        return this.str;
    }
    emptyStr() {
        if (this._items.length > 1) return false;
        const item = this._items[0];
        return item === "" || item === '""';
    }
    get str() {
        var _a;
        return (_a = this._str) !== null && _a !== void 0 ? _a : this._str = this._items.reduce((s, c)=>`${s}${c}`, "");
    }
    get names() {
        var _a;
        return (_a = this._names) !== null && _a !== void 0 ? _a : this._names = this._items.reduce((names, c)=>{
            if (c instanceof $4e46a5d827df641e$var$Name) names[c.str] = (names[c.str] || 0) + 1;
            return names;
        }, {});
    }
    constructor(code){
        super();
        this._items = typeof code === "string" ? [
            code
        ] : code;
    }
}
module.exports._Code = $4e46a5d827df641e$var$_Code;
module.exports.nil = new $4e46a5d827df641e$var$_Code("");
function $4e46a5d827df641e$var$_1(strs, ...args) {
    const code = [
        strs[0]
    ];
    let i = 0;
    while(i < args.length){
        $4e46a5d827df641e$var$addCodeArg(code, args[i]);
        code.push(strs[++i]);
    }
    return new $4e46a5d827df641e$var$_Code(code);
}
module.exports._ = $4e46a5d827df641e$var$_1;
const $4e46a5d827df641e$var$plus = new $4e46a5d827df641e$var$_Code("+");
function $4e46a5d827df641e$var$str(strs, ...args) {
    const expr = [
        $4e46a5d827df641e$var$safeStringify(strs[0])
    ];
    let i = 0;
    while(i < args.length){
        expr.push($4e46a5d827df641e$var$plus);
        $4e46a5d827df641e$var$addCodeArg(expr, args[i]);
        expr.push($4e46a5d827df641e$var$plus, $4e46a5d827df641e$var$safeStringify(strs[++i]));
    }
    $4e46a5d827df641e$var$optimize(expr);
    return new $4e46a5d827df641e$var$_Code(expr);
}
module.exports.str = $4e46a5d827df641e$var$str;
function $4e46a5d827df641e$var$addCodeArg(code, arg) {
    if (arg instanceof $4e46a5d827df641e$var$_Code) code.push(...arg._items);
    else if (arg instanceof $4e46a5d827df641e$var$Name) code.push(arg);
    else code.push($4e46a5d827df641e$var$interpolate(arg));
}
module.exports.addCodeArg = $4e46a5d827df641e$var$addCodeArg;
function $4e46a5d827df641e$var$optimize(expr) {
    let i = 1;
    while(i < expr.length - 1){
        if (expr[i] === $4e46a5d827df641e$var$plus) {
            const res = $4e46a5d827df641e$var$mergeExprItems(expr[i - 1], expr[i + 1]);
            if (res !== undefined) {
                expr.splice(i - 1, 3, res);
                continue;
            }
            expr[i++] = "+";
        }
        i++;
    }
}
function $4e46a5d827df641e$var$mergeExprItems(a, b) {
    if (b === '""') return a;
    if (a === '""') return b;
    if (typeof a == "string") {
        if (b instanceof $4e46a5d827df641e$var$Name || a[a.length - 1] !== '"') return;
        if (typeof b != "string") return `${a.slice(0, -1)}${b}"`;
        if (b[0] === '"') return a.slice(0, -1) + b.slice(1);
        return;
    }
    if (typeof b == "string" && b[0] === '"' && !(a instanceof $4e46a5d827df641e$var$Name)) return `"${a}${b.slice(1)}`;
    return;
}
function $4e46a5d827df641e$var$strConcat(c1, c2) {
    return c2.emptyStr() ? c1 : c1.emptyStr() ? c2 : $4e46a5d827df641e$var$str($4e46a5d827df641e$var$t || ($4e46a5d827df641e$var$t = $4e46a5d827df641e$var$_`${0}${0}`), c1, c2);
}
module.exports.strConcat = $4e46a5d827df641e$var$strConcat;
// TODO do not allow arrays here
function $4e46a5d827df641e$var$interpolate(x) {
    return typeof x == "number" || typeof x == "boolean" || x === null ? x : $4e46a5d827df641e$var$safeStringify(Array.isArray(x) ? x.join(",") : x);
}
function $4e46a5d827df641e$var$stringify(x) {
    return new $4e46a5d827df641e$var$_Code($4e46a5d827df641e$var$safeStringify(x));
}
module.exports.stringify = $4e46a5d827df641e$var$stringify;
function $4e46a5d827df641e$var$safeStringify(x) {
    return JSON.stringify(x).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}
module.exports.safeStringify = $4e46a5d827df641e$var$safeStringify;
function $4e46a5d827df641e$var$getProperty(key) {
    return typeof key == "string" && module.exports.IDENTIFIER.test(key) ? new $4e46a5d827df641e$var$_Code(`.${key}`) : $4e46a5d827df641e$var$_1($4e46a5d827df641e$var$t1 || ($4e46a5d827df641e$var$t1 = $4e46a5d827df641e$var$_`[${0}]`), key);
}
module.exports.getProperty = $4e46a5d827df641e$var$getProperty;
//Does best effort to format the name properly
function $4e46a5d827df641e$var$getEsmExportName(key) {
    if (typeof key == "string" && module.exports.IDENTIFIER.test(key)) return new $4e46a5d827df641e$var$_Code(`${key}`);
    throw new Error(`CodeGen: invalid export name: ${key}, use explicit $id name mapping`);
}
module.exports.getEsmExportName = $4e46a5d827df641e$var$getEsmExportName;
function $4e46a5d827df641e$var$regexpCode(rx) {
    return new $4e46a5d827df641e$var$_Code(rx.toString());
}
module.exports.regexpCode = $4e46a5d827df641e$var$regexpCode;

});

parcelRequire.register("41ECm", function(module, exports) {
"use strict";
let $2ee6c342cd51cc53$var$_ = (t5)=>t5, $2ee6c342cd51cc53$var$t, $2ee6c342cd51cc53$var$t1, $2ee6c342cd51cc53$var$t2, $2ee6c342cd51cc53$var$t3, $2ee6c342cd51cc53$var$t4;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.ValueScope = module.exports.ValueScopeName = module.exports.Scope = module.exports.varKinds = module.exports.UsedValueState = void 0;

var $6IEZq = parcelRequire("6IEZq");
class $2ee6c342cd51cc53$var$ValueError extends Error {
    constructor(name){
        super(`CodeGen: "code" for ${name} not defined`);
        this.value = name.value;
    }
}
var $2ee6c342cd51cc53$var$UsedValueState;
(function(UsedValueState1) {
    UsedValueState1[UsedValueState1["Started"] = 0] = "Started";
    UsedValueState1[UsedValueState1["Completed"] = 1] = "Completed";
})($2ee6c342cd51cc53$var$UsedValueState = module.exports.UsedValueState || (module.exports.UsedValueState = {}));
module.exports.varKinds = {
    const: new $6IEZq.Name("const"),
    let: new $6IEZq.Name("let"),
    var: new $6IEZq.Name("var")
};
class $2ee6c342cd51cc53$var$Scope {
    toName(nameOrPrefix) {
        return nameOrPrefix instanceof $6IEZq.Name ? nameOrPrefix : this.name(nameOrPrefix);
    }
    name(prefix) {
        return new $6IEZq.Name(this._newName(prefix));
    }
    _newName(prefix) {
        const ng = this._names[prefix] || this._nameGroup(prefix);
        return `${prefix}${ng.index++}`;
    }
    _nameGroup(prefix) {
        var _a, _b;
        if (((_b = (_a = this._parent) === null || _a === void 0 ? void 0 : _a._prefixes) === null || _b === void 0 ? void 0 : _b.has(prefix)) || this._prefixes && !this._prefixes.has(prefix)) throw new Error(`CodeGen: prefix "${prefix}" is not allowed in this scope`);
        return this._names[prefix] = {
            prefix: prefix,
            index: 0
        };
    }
    constructor({ prefixes: prefixes , parent: parent  } = {}){
        this._names = {};
        this._prefixes = prefixes;
        this._parent = parent;
    }
}
module.exports.Scope = $2ee6c342cd51cc53$var$Scope;
class $2ee6c342cd51cc53$var$ValueScopeName extends $6IEZq.Name {
    setValue(value, { property: property , itemIndex: itemIndex  }) {
        this.value = value;
        this.scopePath = $6IEZq._($2ee6c342cd51cc53$var$t || ($2ee6c342cd51cc53$var$t = $2ee6c342cd51cc53$var$_`.${0}[${0}]`), new $6IEZq.Name(property), itemIndex);
    }
    constructor(prefix, nameStr){
        super(nameStr);
        this.prefix = prefix;
    }
}
module.exports.ValueScopeName = $2ee6c342cd51cc53$var$ValueScopeName;
const $2ee6c342cd51cc53$var$line = $6IEZq._($2ee6c342cd51cc53$var$t1 || ($2ee6c342cd51cc53$var$t1 = $2ee6c342cd51cc53$var$_`\n`));
class $2ee6c342cd51cc53$var$ValueScope extends $2ee6c342cd51cc53$var$Scope {
    get() {
        return this._scope;
    }
    name(prefix) {
        return new $2ee6c342cd51cc53$var$ValueScopeName(prefix, this._newName(prefix));
    }
    value(nameOrPrefix, value) {
        var _a;
        if (value.ref === undefined) throw new Error("CodeGen: ref must be passed in value");
        const name = this.toName(nameOrPrefix);
        const { prefix: prefix  } = name;
        const valueKey = (_a = value.key) !== null && _a !== void 0 ? _a : value.ref;
        let vs = this._values[prefix];
        if (vs) {
            const _name = vs.get(valueKey);
            if (_name) return _name;
        } else vs = this._values[prefix] = new Map();
        vs.set(valueKey, name);
        const s = this._scope[prefix] || (this._scope[prefix] = []);
        const itemIndex = s.length;
        s[itemIndex] = value.ref;
        name.setValue(value, {
            property: prefix,
            itemIndex: itemIndex
        });
        return name;
    }
    getValue(prefix, keyOrRef) {
        const vs = this._values[prefix];
        if (!vs) return;
        return vs.get(keyOrRef);
    }
    scopeRefs(scopeName, values = this._values) {
        return this._reduceValues(values, (name)=>{
            if (name.scopePath === undefined) throw new Error(`CodeGen: name "${name}" has no value`);
            return $6IEZq._($2ee6c342cd51cc53$var$t2 || ($2ee6c342cd51cc53$var$t2 = $2ee6c342cd51cc53$var$_`${0}${0}`), scopeName, name.scopePath);
        });
    }
    scopeCode(values = this._values, usedValues, getCode) {
        return this._reduceValues(values, (name)=>{
            if (name.value === undefined) throw new Error(`CodeGen: name "${name}" has no value`);
            return name.value.code;
        }, usedValues, getCode);
    }
    _reduceValues(values, valueCode, usedValues = {}, getCode) {
        let code = $6IEZq.nil;
        for(const prefix in values){
            const vs = values[prefix];
            if (!vs) continue;
            const nameSet = usedValues[prefix] = usedValues[prefix] || new Map();
            vs.forEach((name)=>{
                if (nameSet.has(name)) return;
                nameSet.set(name, $2ee6c342cd51cc53$var$UsedValueState.Started);
                let c = valueCode(name);
                if (c) {
                    const def = this.opts.es5 ? module.exports.varKinds.var : module.exports.varKinds.const;
                    code = $6IEZq._($2ee6c342cd51cc53$var$t3 || ($2ee6c342cd51cc53$var$t3 = $2ee6c342cd51cc53$var$_`${0}${0} ${0} = ${0};${0}`), code, def, name, c, this.opts._n);
                } else if (c = getCode === null || getCode === void 0 ? void 0 : getCode(name)) code = $6IEZq._($2ee6c342cd51cc53$var$t4 || ($2ee6c342cd51cc53$var$t4 = $2ee6c342cd51cc53$var$_`${0}${0}${0}`), code, c, this.opts._n);
                else throw new $2ee6c342cd51cc53$var$ValueError(name);
                nameSet.set(name, $2ee6c342cd51cc53$var$UsedValueState.Completed);
            });
        }
        return code;
    }
    constructor(opts){
        super(opts);
        this._values = {};
        this._scope = opts.scope;
        this.opts = {
            ...opts,
            _n: opts.lines ? $2ee6c342cd51cc53$var$line : $6IEZq.nil
        };
    }
}
module.exports.ValueScope = $2ee6c342cd51cc53$var$ValueScope;

});


parcelRequire.register("81JIu", function(module, exports) {
"use strict";
let $5d81e10fb22643e2$var$_ = (t18)=>t18, $5d81e10fb22643e2$var$t, $5d81e10fb22643e2$var$t1, $5d81e10fb22643e2$var$t2, $5d81e10fb22643e2$var$t3, $5d81e10fb22643e2$var$t4, $5d81e10fb22643e2$var$t5, $5d81e10fb22643e2$var$t6, $5d81e10fb22643e2$var$t7, $5d81e10fb22643e2$var$t8, $5d81e10fb22643e2$var$t9, $5d81e10fb22643e2$var$t10, $5d81e10fb22643e2$var$t11, $5d81e10fb22643e2$var$t12, $5d81e10fb22643e2$var$t13, $5d81e10fb22643e2$var$t14, $5d81e10fb22643e2$var$t15, $5d81e10fb22643e2$var$t16, $5d81e10fb22643e2$var$t17;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.checkStrictMode = module.exports.getErrorPath = module.exports.Type = module.exports.useFunc = module.exports.setEvaluated = module.exports.evaluatedPropsToName = module.exports.mergeEvaluated = module.exports.eachItem = module.exports.unescapeJsonPointer = module.exports.escapeJsonPointer = module.exports.escapeFragment = module.exports.unescapeFragment = module.exports.schemaRefOrVal = module.exports.schemaHasRulesButRef = module.exports.schemaHasRules = module.exports.checkUnknownRules = module.exports.alwaysValidSchema = module.exports.toHash = void 0;

var $jyW5U = parcelRequire("jyW5U");

var $6IEZq = parcelRequire("6IEZq");
// TODO refactor to use Set
function $5d81e10fb22643e2$var$toHash(arr) {
    const hash = {};
    for (const item of arr)hash[item] = true;
    return hash;
}
module.exports.toHash = $5d81e10fb22643e2$var$toHash;
function $5d81e10fb22643e2$var$alwaysValidSchema(it, schema) {
    if (typeof schema == "boolean") return schema;
    if (Object.keys(schema).length === 0) return true;
    $5d81e10fb22643e2$var$checkUnknownRules(it, schema);
    return !$5d81e10fb22643e2$var$schemaHasRules(schema, it.self.RULES.all);
}
module.exports.alwaysValidSchema = $5d81e10fb22643e2$var$alwaysValidSchema;
function $5d81e10fb22643e2$var$checkUnknownRules(it, schema = it.schema) {
    const { opts: opts , self: self  } = it;
    if (!opts.strictSchema) return;
    if (typeof schema === "boolean") return;
    const rules = self.RULES.keywords;
    for(const key in schema)if (!rules[key]) $5d81e10fb22643e2$var$checkStrictMode(it, `unknown keyword: "${key}"`);
}
module.exports.checkUnknownRules = $5d81e10fb22643e2$var$checkUnknownRules;
function $5d81e10fb22643e2$var$schemaHasRules(schema, rules) {
    if (typeof schema == "boolean") return !schema;
    for(const key in schema)if (rules[key]) return true;
    return false;
}
module.exports.schemaHasRules = $5d81e10fb22643e2$var$schemaHasRules;
function $5d81e10fb22643e2$var$schemaHasRulesButRef(schema, RULES) {
    if (typeof schema == "boolean") return !schema;
    for(const key in schema)if (key !== "$ref" && RULES.all[key]) return true;
    return false;
}
module.exports.schemaHasRulesButRef = $5d81e10fb22643e2$var$schemaHasRulesButRef;
function $5d81e10fb22643e2$var$schemaRefOrVal({ topSchemaRef: topSchemaRef , schemaPath: schemaPath  }, schema, keyword, $data) {
    if (!$data) {
        if (typeof schema == "number" || typeof schema == "boolean") return schema;
        if (typeof schema == "string") return $jyW5U._($5d81e10fb22643e2$var$t || ($5d81e10fb22643e2$var$t = $5d81e10fb22643e2$var$_`${0}`), schema);
    }
    return $jyW5U._($5d81e10fb22643e2$var$t1 || ($5d81e10fb22643e2$var$t1 = $5d81e10fb22643e2$var$_`${0}${0}${0}`), topSchemaRef, schemaPath, (0, $jyW5U.getProperty)(keyword));
}
module.exports.schemaRefOrVal = $5d81e10fb22643e2$var$schemaRefOrVal;
function $5d81e10fb22643e2$var$unescapeFragment(str) {
    return $5d81e10fb22643e2$var$unescapeJsonPointer(decodeURIComponent(str));
}
module.exports.unescapeFragment = $5d81e10fb22643e2$var$unescapeFragment;
function $5d81e10fb22643e2$var$escapeFragment(str) {
    return encodeURIComponent($5d81e10fb22643e2$var$escapeJsonPointer(str));
}
module.exports.escapeFragment = $5d81e10fb22643e2$var$escapeFragment;
function $5d81e10fb22643e2$var$escapeJsonPointer(str) {
    if (typeof str == "number") return `${str}`;
    return str.replace(/~/g, "~0").replace(/\//g, "~1");
}
module.exports.escapeJsonPointer = $5d81e10fb22643e2$var$escapeJsonPointer;
function $5d81e10fb22643e2$var$unescapeJsonPointer(str) {
    return str.replace(/~1/g, "/").replace(/~0/g, "~");
}
module.exports.unescapeJsonPointer = $5d81e10fb22643e2$var$unescapeJsonPointer;
function $5d81e10fb22643e2$var$eachItem(xs, f) {
    if (Array.isArray(xs)) for (const x of xs)f(x);
    else f(xs);
}
module.exports.eachItem = $5d81e10fb22643e2$var$eachItem;
function $5d81e10fb22643e2$var$makeMergeEvaluated({ mergeNames: mergeNames , mergeToName: mergeToName , mergeValues: mergeValues , resultToName: resultToName ,  }) {
    return (gen, from, to, toName)=>{
        const res = to === undefined ? from : to instanceof $jyW5U.Name ? (from instanceof $jyW5U.Name ? mergeNames(gen, from, to) : mergeToName(gen, from, to), to) : from instanceof $jyW5U.Name ? (mergeToName(gen, to, from), from) : mergeValues(from, to);
        return toName === $jyW5U.Name && !(res instanceof $jyW5U.Name) ? resultToName(gen, res) : res;
    };
}
module.exports.mergeEvaluated = {
    props: $5d81e10fb22643e2$var$makeMergeEvaluated({
        mergeNames: (gen, from, to)=>gen.if($jyW5U._($5d81e10fb22643e2$var$t2 || ($5d81e10fb22643e2$var$t2 = $5d81e10fb22643e2$var$_`${0} !== true && ${0} !== undefined`), to, from), ()=>{
                gen.if($jyW5U._($5d81e10fb22643e2$var$t3 || ($5d81e10fb22643e2$var$t3 = $5d81e10fb22643e2$var$_`${0} === true`), from), ()=>gen.assign(to, true), ()=>gen.assign(to, $jyW5U._($5d81e10fb22643e2$var$t4 || ($5d81e10fb22643e2$var$t4 = $5d81e10fb22643e2$var$_`${0} || {}`), to)).code($jyW5U._($5d81e10fb22643e2$var$t5 || ($5d81e10fb22643e2$var$t5 = $5d81e10fb22643e2$var$_`Object.assign(${0}, ${0})`), to, from)));
            }),
        mergeToName: (gen, from, to)=>gen.if($jyW5U._($5d81e10fb22643e2$var$t6 || ($5d81e10fb22643e2$var$t6 = $5d81e10fb22643e2$var$_`${0} !== true`), to), ()=>{
                if (from === true) gen.assign(to, true);
                else {
                    gen.assign(to, $jyW5U._($5d81e10fb22643e2$var$t7 || ($5d81e10fb22643e2$var$t7 = $5d81e10fb22643e2$var$_`${0} || {}`), to));
                    $5d81e10fb22643e2$var$setEvaluated(gen, to, from);
                }
            }),
        mergeValues: (from, to)=>from === true ? true : {
                ...from,
                ...to
            },
        resultToName: $5d81e10fb22643e2$var$evaluatedPropsToName
    }),
    items: $5d81e10fb22643e2$var$makeMergeEvaluated({
        mergeNames: (gen, from, to)=>gen.if($jyW5U._($5d81e10fb22643e2$var$t8 || ($5d81e10fb22643e2$var$t8 = $5d81e10fb22643e2$var$_`${0} !== true && ${0} !== undefined`), to, from), ()=>gen.assign(to, $jyW5U._($5d81e10fb22643e2$var$t9 || ($5d81e10fb22643e2$var$t9 = $5d81e10fb22643e2$var$_`${0} === true ? true : ${0} > ${0} ? ${0} : ${0}`), from, to, from, to, from))),
        mergeToName: (gen, from, to)=>gen.if($jyW5U._($5d81e10fb22643e2$var$t10 || ($5d81e10fb22643e2$var$t10 = $5d81e10fb22643e2$var$_`${0} !== true`), to), ()=>gen.assign(to, from === true ? true : $jyW5U._($5d81e10fb22643e2$var$t11 || ($5d81e10fb22643e2$var$t11 = $5d81e10fb22643e2$var$_`${0} > ${0} ? ${0} : ${0}`), to, from, to, from))),
        mergeValues: (from, to)=>from === true ? true : Math.max(from, to),
        resultToName: (gen, items)=>gen.var("items", items)
    })
};
function $5d81e10fb22643e2$var$evaluatedPropsToName(gen, ps) {
    if (ps === true) return gen.var("props", true);
    const props = gen.var("props", $jyW5U._($5d81e10fb22643e2$var$t12 || ($5d81e10fb22643e2$var$t12 = $5d81e10fb22643e2$var$_`{}`)));
    if (ps !== undefined) $5d81e10fb22643e2$var$setEvaluated(gen, props, ps);
    return props;
}
module.exports.evaluatedPropsToName = $5d81e10fb22643e2$var$evaluatedPropsToName;
function $5d81e10fb22643e2$var$setEvaluated(gen, props, ps) {
    Object.keys(ps).forEach((p)=>gen.assign($jyW5U._($5d81e10fb22643e2$var$t13 || ($5d81e10fb22643e2$var$t13 = $5d81e10fb22643e2$var$_`${0}${0}`), props, (0, $jyW5U.getProperty)(p)), true));
}
module.exports.setEvaluated = $5d81e10fb22643e2$var$setEvaluated;
const $5d81e10fb22643e2$var$snippets = {};
function $5d81e10fb22643e2$var$useFunc(gen, f) {
    return gen.scopeValue("func", {
        ref: f,
        code: $5d81e10fb22643e2$var$snippets[f.code] || ($5d81e10fb22643e2$var$snippets[f.code] = new $6IEZq._Code(f.code))
    });
}
module.exports.useFunc = $5d81e10fb22643e2$var$useFunc;
var $5d81e10fb22643e2$var$Type;
(function(Type1) {
    Type1[Type1["Num"] = 0] = "Num";
    Type1[Type1["Str"] = 1] = "Str";
})($5d81e10fb22643e2$var$Type = module.exports.Type || (module.exports.Type = {}));
function $5d81e10fb22643e2$var$getErrorPath(dataProp, dataPropType, jsPropertySyntax) {
    // let path
    if (dataProp instanceof $jyW5U.Name) {
        const isNumber = dataPropType === $5d81e10fb22643e2$var$Type.Num;
        return jsPropertySyntax ? isNumber ? $jyW5U._($5d81e10fb22643e2$var$t14 || ($5d81e10fb22643e2$var$t14 = $5d81e10fb22643e2$var$_`"[" + ${0} + "]"`), dataProp) : $jyW5U._($5d81e10fb22643e2$var$t15 || ($5d81e10fb22643e2$var$t15 = $5d81e10fb22643e2$var$_`"['" + ${0} + "']"`), dataProp) : isNumber ? $jyW5U._($5d81e10fb22643e2$var$t16 || ($5d81e10fb22643e2$var$t16 = $5d81e10fb22643e2$var$_`"/" + ${0}`), dataProp) : $jyW5U._($5d81e10fb22643e2$var$t17 || ($5d81e10fb22643e2$var$t17 = $5d81e10fb22643e2$var$_`"/" + ${0}.replace(/~/g, "~0").replace(/\\//g, "~1")`), dataProp); // TODO maybe use global escapePointer
    }
    return jsPropertySyntax ? (0, $jyW5U.getProperty)(dataProp).toString() : "/" + $5d81e10fb22643e2$var$escapeJsonPointer(dataProp);
}
module.exports.getErrorPath = $5d81e10fb22643e2$var$getErrorPath;
function $5d81e10fb22643e2$var$checkStrictMode(it, msg, mode = it.opts.strictSchema) {
    if (!mode) return;
    msg = `strict mode: ${msg}`;
    if (mode === true) throw new Error(msg);
    it.self.logger.warn(msg);
}
module.exports.checkStrictMode = $5d81e10fb22643e2$var$checkStrictMode;

});

parcelRequire.register("2m10X", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jyW5U = parcelRequire("jyW5U");
const $1b6e6c4bbdfdc862$var$names = {
    // validation function arguments
    data: new $jyW5U.Name("data"),
    // args passed from referencing schema
    valCxt: new $jyW5U.Name("valCxt"),
    instancePath: new $jyW5U.Name("instancePath"),
    parentData: new $jyW5U.Name("parentData"),
    parentDataProperty: new $jyW5U.Name("parentDataProperty"),
    rootData: new $jyW5U.Name("rootData"),
    dynamicAnchors: new $jyW5U.Name("dynamicAnchors"),
    // function scoped variables
    vErrors: new $jyW5U.Name("vErrors"),
    errors: new $jyW5U.Name("errors"),
    this: new $jyW5U.Name("this"),
    // "globals"
    self: new $jyW5U.Name("self"),
    scope: new $jyW5U.Name("scope"),
    // JTD serialize/parse name for JSON string and position
    json: new $jyW5U.Name("json"),
    jsonPos: new $jyW5U.Name("jsonPos"),
    jsonLen: new $jyW5U.Name("jsonLen"),
    jsonPart: new $jyW5U.Name("jsonPart")
};
module.exports.default = $1b6e6c4bbdfdc862$var$names;

});



parcelRequire.register("j9Fpx", function(module, exports) {
"use strict";
let $df1efaef86089511$var$_ = (t33)=>t33, $df1efaef86089511$var$t, $df1efaef86089511$var$t1, $df1efaef86089511$var$t2, $df1efaef86089511$var$t3, $df1efaef86089511$var$t4, $df1efaef86089511$var$t5, $df1efaef86089511$var$t6, $df1efaef86089511$var$t7, $df1efaef86089511$var$t8, $df1efaef86089511$var$t9, $df1efaef86089511$var$t10, $df1efaef86089511$var$t11, $df1efaef86089511$var$t12, $df1efaef86089511$var$t13, $df1efaef86089511$var$t14, $df1efaef86089511$var$t15, $df1efaef86089511$var$t16, $df1efaef86089511$var$t17, $df1efaef86089511$var$t18, $df1efaef86089511$var$t19, $df1efaef86089511$var$t20, $df1efaef86089511$var$t21, $df1efaef86089511$var$t22, $df1efaef86089511$var$t23, $df1efaef86089511$var$t24, $df1efaef86089511$var$t25, $df1efaef86089511$var$t26, $df1efaef86089511$var$t27, $df1efaef86089511$var$t28, $df1efaef86089511$var$t29, $df1efaef86089511$var$t30, $df1efaef86089511$var$t31, $df1efaef86089511$var$t32;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.reportTypeError = module.exports.checkDataTypes = module.exports.checkDataType = module.exports.coerceAndCheckDataType = module.exports.getJSONTypes = module.exports.getSchemaTypes = module.exports.DataType = void 0;

var $dM6ZE = parcelRequire("dM6ZE");

var $iale1 = parcelRequire("iale1");

var $2lzC3 = parcelRequire("2lzC3");

var $jyW5U = parcelRequire("jyW5U");

var $81JIu = parcelRequire("81JIu");
var $df1efaef86089511$var$DataType;
(function(DataType1) {
    DataType1[DataType1["Correct"] = 0] = "Correct";
    DataType1[DataType1["Wrong"] = 1] = "Wrong";
})($df1efaef86089511$var$DataType = module.exports.DataType || (module.exports.DataType = {}));
function $df1efaef86089511$var$getSchemaTypes(schema) {
    const types = $df1efaef86089511$var$getJSONTypes(schema.type);
    const hasNull = types.includes("null");
    if (hasNull) {
        if (schema.nullable === false) throw new Error("type: null contradicts nullable: false");
    } else {
        if (!types.length && schema.nullable !== undefined) throw new Error('"nullable" cannot be used without "type"');
        if (schema.nullable === true) types.push("null");
    }
    return types;
}
module.exports.getSchemaTypes = $df1efaef86089511$var$getSchemaTypes;
function $df1efaef86089511$var$getJSONTypes(ts) {
    const types = Array.isArray(ts) ? ts : ts ? [
        ts
    ] : [];
    if (types.every($dM6ZE.isJSONType)) return types;
    throw new Error("type must be JSONType or JSONType[]: " + types.join(","));
}
module.exports.getJSONTypes = $df1efaef86089511$var$getJSONTypes;
function $df1efaef86089511$var$coerceAndCheckDataType(it, types) {
    const { gen: gen , data: data , opts: opts  } = it;
    const coerceTo = $df1efaef86089511$var$coerceToTypes(types, opts.coerceTypes);
    const checkTypes = types.length > 0 && !(coerceTo.length === 0 && types.length === 1 && (0, $iale1.schemaHasRulesForType)(it, types[0]));
    if (checkTypes) {
        const wrongType = $df1efaef86089511$var$checkDataTypes(types, data, opts.strictNumbers, $df1efaef86089511$var$DataType.Wrong);
        gen.if(wrongType, ()=>{
            if (coerceTo.length) $df1efaef86089511$var$coerceData(it, types, coerceTo);
            else $df1efaef86089511$var$reportTypeError(it);
        });
    }
    return checkTypes;
}
module.exports.coerceAndCheckDataType = $df1efaef86089511$var$coerceAndCheckDataType;
const $df1efaef86089511$var$COERCIBLE = new Set([
    "string",
    "number",
    "integer",
    "boolean",
    "null"
]);
function $df1efaef86089511$var$coerceToTypes(types, coerceTypes) {
    return coerceTypes ? types.filter((t34)=>$df1efaef86089511$var$COERCIBLE.has(t34) || coerceTypes === "array" && t34 === "array") : [];
}
function $df1efaef86089511$var$coerceData(it, types, coerceTo) {
    const { gen: gen , data: data , opts: opts  } = it;
    const dataType = gen.let("dataType", $jyW5U._($df1efaef86089511$var$t || ($df1efaef86089511$var$t = $df1efaef86089511$var$_`typeof ${0}`), data));
    const coerced = gen.let("coerced", $jyW5U._($df1efaef86089511$var$t1 || ($df1efaef86089511$var$t1 = $df1efaef86089511$var$_`undefined`)));
    if (opts.coerceTypes === "array") gen.if($jyW5U._($df1efaef86089511$var$t2 || ($df1efaef86089511$var$t2 = $df1efaef86089511$var$_`${0} == 'object' && Array.isArray(${0}) && ${0}.length == 1`), dataType, data, data), ()=>gen.assign(data, $jyW5U._($df1efaef86089511$var$t3 || ($df1efaef86089511$var$t3 = $df1efaef86089511$var$_`${0}[0]`), data)).assign(dataType, $jyW5U._($df1efaef86089511$var$t4 || ($df1efaef86089511$var$t4 = $df1efaef86089511$var$_`typeof ${0}`), data)).if($df1efaef86089511$var$checkDataTypes(types, data, opts.strictNumbers), ()=>gen.assign(coerced, data)));
    gen.if($jyW5U._($df1efaef86089511$var$t5 || ($df1efaef86089511$var$t5 = $df1efaef86089511$var$_`${0} !== undefined`), coerced));
    for (const t35 of coerceTo)if ($df1efaef86089511$var$COERCIBLE.has(t35) || t35 === "array" && opts.coerceTypes === "array") coerceSpecificType(t35);
    gen.else();
    $df1efaef86089511$var$reportTypeError(it);
    gen.endIf();
    gen.if($jyW5U._($df1efaef86089511$var$t6 || ($df1efaef86089511$var$t6 = $df1efaef86089511$var$_`${0} !== undefined`), coerced), ()=>{
        gen.assign(data, coerced);
        $df1efaef86089511$var$assignParentData(it, coerced);
    });
    function coerceSpecificType(t36) {
        switch(t36){
            case "string":
                gen.elseIf($jyW5U._($df1efaef86089511$var$t7 || ($df1efaef86089511$var$t7 = $df1efaef86089511$var$_`${0} == "number" || ${0} == "boolean"`), dataType, dataType)).assign(coerced, $jyW5U._($df1efaef86089511$var$t8 || ($df1efaef86089511$var$t8 = $df1efaef86089511$var$_`"" + ${0}`), data)).elseIf($jyW5U._($df1efaef86089511$var$t9 || ($df1efaef86089511$var$t9 = $df1efaef86089511$var$_`${0} === null`), data)).assign(coerced, $jyW5U._($df1efaef86089511$var$t10 || ($df1efaef86089511$var$t10 = $df1efaef86089511$var$_`""`)));
                return;
            case "number":
                gen.elseIf($jyW5U._($df1efaef86089511$var$t11 || ($df1efaef86089511$var$t11 = $df1efaef86089511$var$_`${0} == "boolean" || ${0} === null
              || (${0} == "string" && ${0} && ${0} == +${0})`), dataType, data, dataType, data, data, data)).assign(coerced, $jyW5U._($df1efaef86089511$var$t12 || ($df1efaef86089511$var$t12 = $df1efaef86089511$var$_`+${0}`), data));
                return;
            case "integer":
                gen.elseIf($jyW5U._($df1efaef86089511$var$t13 || ($df1efaef86089511$var$t13 = $df1efaef86089511$var$_`${0} === "boolean" || ${0} === null
              || (${0} === "string" && ${0} && ${0} == +${0} && !(${0} % 1))`), dataType, data, dataType, data, data, data, data)).assign(coerced, $jyW5U._($df1efaef86089511$var$t14 || ($df1efaef86089511$var$t14 = $df1efaef86089511$var$_`+${0}`), data));
                return;
            case "boolean":
                gen.elseIf($jyW5U._($df1efaef86089511$var$t15 || ($df1efaef86089511$var$t15 = $df1efaef86089511$var$_`${0} === "false" || ${0} === 0 || ${0} === null`), data, data, data)).assign(coerced, false).elseIf($jyW5U._($df1efaef86089511$var$t16 || ($df1efaef86089511$var$t16 = $df1efaef86089511$var$_`${0} === "true" || ${0} === 1`), data, data)).assign(coerced, true);
                return;
            case "null":
                gen.elseIf($jyW5U._($df1efaef86089511$var$t17 || ($df1efaef86089511$var$t17 = $df1efaef86089511$var$_`${0} === "" || ${0} === 0 || ${0} === false`), data, data, data));
                gen.assign(coerced, null);
                return;
            case "array":
                gen.elseIf($jyW5U._($df1efaef86089511$var$t18 || ($df1efaef86089511$var$t18 = $df1efaef86089511$var$_`${0} === "string" || ${0} === "number"
              || ${0} === "boolean" || ${0} === null`), dataType, dataType, dataType, data)).assign(coerced, $jyW5U._($df1efaef86089511$var$t19 || ($df1efaef86089511$var$t19 = $df1efaef86089511$var$_`[${0}]`), data));
        }
    }
}
function $df1efaef86089511$var$assignParentData({ gen: gen , parentData: parentData , parentDataProperty: parentDataProperty  }, expr) {
    // TODO use gen.property
    gen.if($jyW5U._($df1efaef86089511$var$t20 || ($df1efaef86089511$var$t20 = $df1efaef86089511$var$_`${0} !== undefined`), parentData), ()=>gen.assign($jyW5U._($df1efaef86089511$var$t21 || ($df1efaef86089511$var$t21 = $df1efaef86089511$var$_`${0}[${0}]`), parentData, parentDataProperty), expr));
}
function $df1efaef86089511$var$checkDataType(dataType, data, strictNums, correct = $df1efaef86089511$var$DataType.Correct) {
    const EQ = correct === $df1efaef86089511$var$DataType.Correct ? $jyW5U.operators.EQ : $jyW5U.operators.NEQ;
    let cond;
    switch(dataType){
        case "null":
            return $jyW5U._($df1efaef86089511$var$t22 || ($df1efaef86089511$var$t22 = $df1efaef86089511$var$_`${0} ${0} null`), data, EQ);
        case "array":
            cond = $jyW5U._($df1efaef86089511$var$t23 || ($df1efaef86089511$var$t23 = $df1efaef86089511$var$_`Array.isArray(${0})`), data);
            break;
        case "object":
            cond = $jyW5U._($df1efaef86089511$var$t24 || ($df1efaef86089511$var$t24 = $df1efaef86089511$var$_`${0} && typeof ${0} == "object" && !Array.isArray(${0})`), data, data, data);
            break;
        case "integer":
            cond = numCond($jyW5U._($df1efaef86089511$var$t25 || ($df1efaef86089511$var$t25 = $df1efaef86089511$var$_`!(${0} % 1) && !isNaN(${0})`), data, data));
            break;
        case "number":
            cond = numCond();
            break;
        default:
            return $jyW5U._($df1efaef86089511$var$t26 || ($df1efaef86089511$var$t26 = $df1efaef86089511$var$_`typeof ${0} ${0} ${0}`), data, EQ, dataType);
    }
    return correct === $df1efaef86089511$var$DataType.Correct ? cond : (0, $jyW5U.not)(cond);
    function numCond(_cond = $jyW5U.nil) {
        return (0, $jyW5U.and)($jyW5U._($df1efaef86089511$var$t27 || ($df1efaef86089511$var$t27 = $df1efaef86089511$var$_`typeof ${0} == "number"`), data), _cond, strictNums ? $jyW5U._($df1efaef86089511$var$t28 || ($df1efaef86089511$var$t28 = $df1efaef86089511$var$_`isFinite(${0})`), data) : $jyW5U.nil);
    }
}
module.exports.checkDataType = $df1efaef86089511$var$checkDataType;
function $df1efaef86089511$var$checkDataTypes(dataTypes, data, strictNums, correct) {
    if (dataTypes.length === 1) return $df1efaef86089511$var$checkDataType(dataTypes[0], data, strictNums, correct);
    let cond;
    const types = (0, $81JIu.toHash)(dataTypes);
    if (types.array && types.object) {
        const notObj = $jyW5U._($df1efaef86089511$var$t29 || ($df1efaef86089511$var$t29 = $df1efaef86089511$var$_`typeof ${0} != "object"`), data);
        cond = types.null ? notObj : $jyW5U._($df1efaef86089511$var$t30 || ($df1efaef86089511$var$t30 = $df1efaef86089511$var$_`!${0} || ${0}`), data, notObj);
        delete types.null;
        delete types.array;
        delete types.object;
    } else cond = $jyW5U.nil;
    if (types.number) delete types.integer;
    for(const t37 in types)cond = (0, $jyW5U.and)(cond, $df1efaef86089511$var$checkDataType(t37, data, strictNums, correct));
    return cond;
}
module.exports.checkDataTypes = $df1efaef86089511$var$checkDataTypes;
const $df1efaef86089511$var$typeError = {
    message: ({ schema: schema  })=>`must be ${schema}`,
    params: ({ schema: schema , schemaValue: schemaValue  })=>typeof schema == "string" ? $jyW5U._($df1efaef86089511$var$t31 || ($df1efaef86089511$var$t31 = $df1efaef86089511$var$_`{type: ${0}}`), schema) : $jyW5U._($df1efaef86089511$var$t32 || ($df1efaef86089511$var$t32 = $df1efaef86089511$var$_`{type: ${0}}`), schemaValue)
};
function $df1efaef86089511$var$reportTypeError(it) {
    const cxt = $df1efaef86089511$var$getTypeErrorContext(it);
    (0, $2lzC3.reportError)(cxt, $df1efaef86089511$var$typeError);
}
module.exports.reportTypeError = $df1efaef86089511$var$reportTypeError;
function $df1efaef86089511$var$getTypeErrorContext(it) {
    const { gen: gen , data: data , schema: schema  } = it;
    const schemaCode = (0, $81JIu.schemaRefOrVal)(it, schema, "type");
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
parcelRequire.register("dM6ZE", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getRules = module.exports.isJSONType = void 0;
const $a0752ecc442ab742$var$_jsonTypes = [
    "string",
    "number",
    "integer",
    "boolean",
    "null",
    "object",
    "array"
];
const $a0752ecc442ab742$var$jsonTypes = new Set($a0752ecc442ab742$var$_jsonTypes);
function $a0752ecc442ab742$var$isJSONType(x) {
    return typeof x == "string" && $a0752ecc442ab742$var$jsonTypes.has(x);
}
module.exports.isJSONType = $a0752ecc442ab742$var$isJSONType;
function $a0752ecc442ab742$var$getRules() {
    const groups = {
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
        types: {
            ...groups,
            integer: true,
            boolean: true,
            null: true
        },
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
module.exports.getRules = $a0752ecc442ab742$var$getRules;

});

parcelRequire.register("iale1", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.shouldUseRule = module.exports.shouldUseGroup = module.exports.schemaHasRulesForType = void 0;
function $d399a00a805c5862$var$schemaHasRulesForType({ schema: schema , self: self  }, type) {
    const group = self.RULES.types[type];
    return group && group !== true && $d399a00a805c5862$var$shouldUseGroup(schema, group);
}
module.exports.schemaHasRulesForType = $d399a00a805c5862$var$schemaHasRulesForType;
function $d399a00a805c5862$var$shouldUseGroup(schema, group) {
    return group.rules.some((rule)=>$d399a00a805c5862$var$shouldUseRule(schema, rule));
}
module.exports.shouldUseGroup = $d399a00a805c5862$var$shouldUseGroup;
function $d399a00a805c5862$var$shouldUseRule(schema, rule) {
    var _a;
    return schema[rule.keyword] !== undefined || ((_a = rule.definition.implements) === null || _a === void 0 ? void 0 : _a.some((kwd)=>schema[kwd] !== undefined));
}
module.exports.shouldUseRule = $d399a00a805c5862$var$shouldUseRule;

});


parcelRequire.register("b6zJC", function(module, exports) {
"use strict";
let $815bf96a75d2e029$var$_ = (t4)=>t4, $815bf96a75d2e029$var$t, $815bf96a75d2e029$var$t1, $815bf96a75d2e029$var$t2, $815bf96a75d2e029$var$t3;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.assignDefaults = void 0;

var $jyW5U = parcelRequire("jyW5U");

var $81JIu = parcelRequire("81JIu");
function $815bf96a75d2e029$var$assignDefaults(it, ty) {
    const { properties: properties , items: items  } = it.schema;
    if (ty === "object" && properties) for(const key in properties)$815bf96a75d2e029$var$assignDefault(it, key, properties[key].default);
    else if (ty === "array" && Array.isArray(items)) items.forEach((sch, i)=>$815bf96a75d2e029$var$assignDefault(it, i, sch.default));
}
module.exports.assignDefaults = $815bf96a75d2e029$var$assignDefaults;
function $815bf96a75d2e029$var$assignDefault(it, prop, defaultValue) {
    const { gen: gen , compositeRule: compositeRule , data: data , opts: opts  } = it;
    if (defaultValue === undefined) return;
    const childData = $jyW5U._($815bf96a75d2e029$var$t || ($815bf96a75d2e029$var$t = $815bf96a75d2e029$var$_`${0}${0}`), data, (0, $jyW5U.getProperty)(prop));
    if (compositeRule) {
        (0, $81JIu.checkStrictMode)(it, `default is ignored for: ${childData}`);
        return;
    }
    let condition = $jyW5U._($815bf96a75d2e029$var$t1 || ($815bf96a75d2e029$var$t1 = $815bf96a75d2e029$var$_`${0} === undefined`), childData);
    if (opts.useDefaults === "empty") condition = $jyW5U._($815bf96a75d2e029$var$t2 || ($815bf96a75d2e029$var$t2 = $815bf96a75d2e029$var$_`${0} || ${0} === null || ${0} === ""`), condition, childData, childData);
    // `${childData} === undefined` +
    // (opts.useDefaults === "empty" ? ` || ${childData} === null || ${childData} === ""` : "")
    gen.if(condition, $jyW5U._($815bf96a75d2e029$var$t3 || ($815bf96a75d2e029$var$t3 = $815bf96a75d2e029$var$_`${0} = ${0}`), childData, (0, $jyW5U.stringify)(defaultValue)));
}

});

parcelRequire.register("cqN2N", function(module, exports) {
"use strict";
let $90cdf4dd12fd81ca$var$_ = (t10)=>t10, $90cdf4dd12fd81ca$var$t, $90cdf4dd12fd81ca$var$t1, $90cdf4dd12fd81ca$var$t2, $90cdf4dd12fd81ca$var$t3, $90cdf4dd12fd81ca$var$t4, $90cdf4dd12fd81ca$var$t5, $90cdf4dd12fd81ca$var$t6, $90cdf4dd12fd81ca$var$t7, $90cdf4dd12fd81ca$var$t8, $90cdf4dd12fd81ca$var$t9;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.validateKeywordUsage = module.exports.validSchemaType = module.exports.funcKeywordCode = module.exports.macroKeywordCode = void 0;

var $jyW5U = parcelRequire("jyW5U");

var $2m10X = parcelRequire("2m10X");

var $6byFQ = parcelRequire("6byFQ");

var $2lzC3 = parcelRequire("2lzC3");
function $90cdf4dd12fd81ca$var$macroKeywordCode(cxt, def) {
    const { gen: gen , keyword: keyword , schema: schema , parentSchema: parentSchema , it: it  } = cxt;
    const macroSchema = def.macro.call(it.self, schema, parentSchema, it);
    const schemaRef = $90cdf4dd12fd81ca$var$useKeyword(gen, keyword, macroSchema);
    if (it.opts.validateSchema !== false) it.self.validateSchema(macroSchema, true);
    const valid = gen.name("valid");
    cxt.subschema({
        schema: macroSchema,
        schemaPath: $jyW5U.nil,
        errSchemaPath: `${it.errSchemaPath}/${keyword}`,
        topSchemaRef: schemaRef,
        compositeRule: true
    }, valid);
    cxt.pass(valid, ()=>cxt.error(true));
}
module.exports.macroKeywordCode = $90cdf4dd12fd81ca$var$macroKeywordCode;
function $90cdf4dd12fd81ca$var$funcKeywordCode(cxt, def) {
    var _a1;
    const { gen: gen , keyword: keyword , schema: schema , parentSchema: parentSchema , $data: $data , it: it  } = cxt;
    $90cdf4dd12fd81ca$var$checkAsyncKeyword(it, def);
    const validate = !$data && def.compile ? def.compile.call(it.self, schema, parentSchema, it) : def.validate;
    const validateRef = $90cdf4dd12fd81ca$var$useKeyword(gen, keyword, validate);
    const valid = gen.let("valid");
    cxt.block$data(valid, validateKeyword);
    cxt.ok((_a1 = def.valid) !== null && _a1 !== void 0 ? _a1 : valid);
    function validateKeyword() {
        if (def.errors === false) {
            assignValid();
            if (def.modifying) $90cdf4dd12fd81ca$var$modifyData(cxt);
            reportErrs(()=>cxt.error());
        } else {
            const ruleErrs = def.async ? validateAsync() : validateSync();
            if (def.modifying) $90cdf4dd12fd81ca$var$modifyData(cxt);
            reportErrs(()=>$90cdf4dd12fd81ca$var$addErrs(cxt, ruleErrs));
        }
    }
    function validateAsync() {
        const ruleErrs = gen.let("ruleErrs", null);
        gen.try(()=>assignValid($jyW5U._($90cdf4dd12fd81ca$var$t || ($90cdf4dd12fd81ca$var$t = $90cdf4dd12fd81ca$var$_`await `))), (e)=>gen.assign(valid, false).if($jyW5U._($90cdf4dd12fd81ca$var$t1 || ($90cdf4dd12fd81ca$var$t1 = $90cdf4dd12fd81ca$var$_`${0} instanceof ${0}`), e, it.ValidationError), ()=>gen.assign(ruleErrs, $jyW5U._($90cdf4dd12fd81ca$var$t2 || ($90cdf4dd12fd81ca$var$t2 = $90cdf4dd12fd81ca$var$_`${0}.errors`), e)), ()=>gen.throw(e)));
        return ruleErrs;
    }
    function validateSync() {
        const validateErrs = $jyW5U._($90cdf4dd12fd81ca$var$t3 || ($90cdf4dd12fd81ca$var$t3 = $90cdf4dd12fd81ca$var$_`${0}.errors`), validateRef);
        gen.assign(validateErrs, null);
        assignValid($jyW5U.nil);
        return validateErrs;
    }
    function assignValid(_await = def.async ? $jyW5U._($90cdf4dd12fd81ca$var$t4 || ($90cdf4dd12fd81ca$var$t4 = $90cdf4dd12fd81ca$var$_`await `)) : $jyW5U.nil) {
        const passCxt = it.opts.passContext ? $2m10X.default.this : $2m10X.default.self;
        const passSchema = !("compile" in def && !$data || def.schema === false);
        gen.assign(valid, $jyW5U._($90cdf4dd12fd81ca$var$t5 || ($90cdf4dd12fd81ca$var$t5 = $90cdf4dd12fd81ca$var$_`${0}${0}`), _await, (0, $6byFQ.callValidateCode)(cxt, validateRef, passCxt, passSchema)), def.modifying);
    }
    function reportErrs(errors) {
        var _a;
        gen.if((0, $jyW5U.not)((_a = def.valid) !== null && _a !== void 0 ? _a : valid), errors);
    }
}
module.exports.funcKeywordCode = $90cdf4dd12fd81ca$var$funcKeywordCode;
function $90cdf4dd12fd81ca$var$modifyData(cxt) {
    const { gen: gen , data: data , it: it  } = cxt;
    gen.if(it.parentData, ()=>gen.assign(data, $jyW5U._($90cdf4dd12fd81ca$var$t6 || ($90cdf4dd12fd81ca$var$t6 = $90cdf4dd12fd81ca$var$_`${0}[${0}]`), it.parentData, it.parentDataProperty)));
}
function $90cdf4dd12fd81ca$var$addErrs(cxt, errs) {
    const { gen: gen  } = cxt;
    gen.if($jyW5U._($90cdf4dd12fd81ca$var$t7 || ($90cdf4dd12fd81ca$var$t7 = $90cdf4dd12fd81ca$var$_`Array.isArray(${0})`), errs), ()=>{
        gen.assign($2m10X.default.vErrors, $jyW5U._($90cdf4dd12fd81ca$var$t8 || ($90cdf4dd12fd81ca$var$t8 = $90cdf4dd12fd81ca$var$_`${0} === null ? ${0} : ${0}.concat(${0})`), $2m10X.default.vErrors, errs, $2m10X.default.vErrors, errs)).assign($2m10X.default.errors, $jyW5U._($90cdf4dd12fd81ca$var$t9 || ($90cdf4dd12fd81ca$var$t9 = $90cdf4dd12fd81ca$var$_`${0}.length`), $2m10X.default.vErrors));
        (0, $2lzC3.extendErrors)(cxt);
    }, ()=>cxt.error());
}
function $90cdf4dd12fd81ca$var$checkAsyncKeyword({ schemaEnv: schemaEnv  }, def) {
    if (def.async && !schemaEnv.$async) throw new Error("async keyword in sync schema");
}
function $90cdf4dd12fd81ca$var$useKeyword(gen, keyword, result) {
    if (result === undefined) throw new Error(`keyword "${keyword}" failed to compile`);
    return gen.scopeValue("keyword", typeof result == "function" ? {
        ref: result
    } : {
        ref: result,
        code: (0, $jyW5U.stringify)(result)
    });
}
function $90cdf4dd12fd81ca$var$validSchemaType(schema, schemaType, allowUndefined = false) {
    // TODO add tests
    return !schemaType.length || schemaType.some((st)=>st === "array" ? Array.isArray(schema) : st === "object" ? schema && typeof schema == "object" && !Array.isArray(schema) : typeof schema == st || allowUndefined && typeof schema == "undefined");
}
module.exports.validSchemaType = $90cdf4dd12fd81ca$var$validSchemaType;
function $90cdf4dd12fd81ca$var$validateKeywordUsage({ schema: schema , opts: opts , self: self , errSchemaPath: errSchemaPath  }, def, keyword) {
    /* istanbul ignore if */ if (Array.isArray(def.keyword) ? !def.keyword.includes(keyword) : def.keyword !== keyword) throw new Error("ajv implementation error");
    const deps = def.dependencies;
    if (deps === null || deps === void 0 ? void 0 : deps.some((kwd)=>!Object.prototype.hasOwnProperty.call(schema, kwd))) throw new Error(`parent schema must have dependencies of ${keyword}: ${deps.join(",")}`);
    if (def.validateSchema) {
        const valid = def.validateSchema(schema[keyword]);
        if (!valid) {
            const msg = `keyword "${keyword}" value is invalid at path "${errSchemaPath}": ` + self.errorsText(def.validateSchema.errors);
            if (opts.validateSchema === "log") self.logger.error(msg);
            else throw new Error(msg);
        }
    }
}
module.exports.validateKeywordUsage = $90cdf4dd12fd81ca$var$validateKeywordUsage;

});
parcelRequire.register("6byFQ", function(module, exports) {
"use strict";
let $480eaaaf261676f8$var$_ = (t15)=>t15, $480eaaaf261676f8$var$t, $480eaaaf261676f8$var$t1, $480eaaaf261676f8$var$t2, $480eaaaf261676f8$var$t3, $480eaaaf261676f8$var$t4, $480eaaaf261676f8$var$t5, $480eaaaf261676f8$var$t6, $480eaaaf261676f8$var$t7, $480eaaaf261676f8$var$t8, $480eaaaf261676f8$var$t9, $480eaaaf261676f8$var$t10, $480eaaaf261676f8$var$t11, $480eaaaf261676f8$var$t12, $480eaaaf261676f8$var$t13, $480eaaaf261676f8$var$t14;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.validateUnion = module.exports.validateArray = module.exports.usePattern = module.exports.callValidateCode = module.exports.schemaProperties = module.exports.allSchemaProperties = module.exports.noPropertyInData = module.exports.propertyInData = module.exports.isOwnProperty = module.exports.hasPropFunc = module.exports.reportMissingProp = module.exports.checkMissingProp = module.exports.checkReportMissingProp = void 0;

var $jyW5U = parcelRequire("jyW5U");

var $81JIu = parcelRequire("81JIu");

var $2m10X = parcelRequire("2m10X");

var $81JIu = parcelRequire("81JIu");
function $480eaaaf261676f8$var$checkReportMissingProp(cxt, prop) {
    const { gen: gen , data: data , it: it  } = cxt;
    gen.if($480eaaaf261676f8$var$noPropertyInData(gen, data, prop, it.opts.ownProperties), ()=>{
        cxt.setParams({
            missingProperty: $jyW5U._($480eaaaf261676f8$var$t || ($480eaaaf261676f8$var$t = $480eaaaf261676f8$var$_`${0}`), prop)
        }, true);
        cxt.error();
    });
}
module.exports.checkReportMissingProp = $480eaaaf261676f8$var$checkReportMissingProp;
function $480eaaaf261676f8$var$checkMissingProp({ gen: gen , data: data , it: { opts: opts  }  }, properties, missing) {
    return (0, $jyW5U.or)(...properties.map((prop)=>(0, $jyW5U.and)($480eaaaf261676f8$var$noPropertyInData(gen, data, prop, opts.ownProperties), $jyW5U._($480eaaaf261676f8$var$t1 || ($480eaaaf261676f8$var$t1 = $480eaaaf261676f8$var$_`${0} = ${0}`), missing, prop))));
}
module.exports.checkMissingProp = $480eaaaf261676f8$var$checkMissingProp;
function $480eaaaf261676f8$var$reportMissingProp(cxt, missing) {
    cxt.setParams({
        missingProperty: missing
    }, true);
    cxt.error();
}
module.exports.reportMissingProp = $480eaaaf261676f8$var$reportMissingProp;
function $480eaaaf261676f8$var$hasPropFunc(gen) {
    return gen.scopeValue("func", {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        ref: Object.prototype.hasOwnProperty,
        code: $jyW5U._($480eaaaf261676f8$var$t2 || ($480eaaaf261676f8$var$t2 = $480eaaaf261676f8$var$_`Object.prototype.hasOwnProperty`))
    });
}
module.exports.hasPropFunc = $480eaaaf261676f8$var$hasPropFunc;
function $480eaaaf261676f8$var$isOwnProperty(gen, data, property) {
    return $jyW5U._($480eaaaf261676f8$var$t3 || ($480eaaaf261676f8$var$t3 = $480eaaaf261676f8$var$_`${0}.call(${0}, ${0})`), $480eaaaf261676f8$var$hasPropFunc(gen), data, property);
}
module.exports.isOwnProperty = $480eaaaf261676f8$var$isOwnProperty;
function $480eaaaf261676f8$var$propertyInData(gen, data, property, ownProperties) {
    const cond = $jyW5U._($480eaaaf261676f8$var$t4 || ($480eaaaf261676f8$var$t4 = $480eaaaf261676f8$var$_`${0}${0} !== undefined`), data, (0, $jyW5U.getProperty)(property));
    return ownProperties ? $jyW5U._($480eaaaf261676f8$var$t5 || ($480eaaaf261676f8$var$t5 = $480eaaaf261676f8$var$_`${0} && ${0}`), cond, $480eaaaf261676f8$var$isOwnProperty(gen, data, property)) : cond;
}
module.exports.propertyInData = $480eaaaf261676f8$var$propertyInData;
function $480eaaaf261676f8$var$noPropertyInData(gen, data, property, ownProperties) {
    const cond = $jyW5U._($480eaaaf261676f8$var$t6 || ($480eaaaf261676f8$var$t6 = $480eaaaf261676f8$var$_`${0}${0} === undefined`), data, (0, $jyW5U.getProperty)(property));
    return ownProperties ? (0, $jyW5U.or)(cond, (0, $jyW5U.not)($480eaaaf261676f8$var$isOwnProperty(gen, data, property))) : cond;
}
module.exports.noPropertyInData = $480eaaaf261676f8$var$noPropertyInData;
function $480eaaaf261676f8$var$allSchemaProperties(schemaMap) {
    return schemaMap ? Object.keys(schemaMap).filter((p)=>p !== "__proto__") : [];
}
module.exports.allSchemaProperties = $480eaaaf261676f8$var$allSchemaProperties;
function $480eaaaf261676f8$var$schemaProperties(it, schemaMap) {
    return $480eaaaf261676f8$var$allSchemaProperties(schemaMap).filter((p)=>!(0, $81JIu.alwaysValidSchema)(it, schemaMap[p]));
}
module.exports.schemaProperties = $480eaaaf261676f8$var$schemaProperties;
function $480eaaaf261676f8$var$callValidateCode({ schemaCode: schemaCode , data: data , it: { gen: gen , topSchemaRef: topSchemaRef , schemaPath: schemaPath , errorPath: errorPath  } , it: it  }, func, context, passSchema) {
    const dataAndSchema = passSchema ? $jyW5U._($480eaaaf261676f8$var$t7 || ($480eaaaf261676f8$var$t7 = $480eaaaf261676f8$var$_`${0}, ${0}, ${0}${0}`), schemaCode, data, topSchemaRef, schemaPath) : data;
    const valCxt = [
        [
            $2m10X.default.instancePath,
            (0, $jyW5U.strConcat)($2m10X.default.instancePath, errorPath)
        ],
        [
            $2m10X.default.parentData,
            it.parentData
        ],
        [
            $2m10X.default.parentDataProperty,
            it.parentDataProperty
        ],
        [
            $2m10X.default.rootData,
            $2m10X.default.rootData
        ], 
    ];
    if (it.opts.dynamicRef) valCxt.push([
        $2m10X.default.dynamicAnchors,
        $2m10X.default.dynamicAnchors
    ]);
    const args = $jyW5U._($480eaaaf261676f8$var$t8 || ($480eaaaf261676f8$var$t8 = $480eaaaf261676f8$var$_`${0}, ${0}`), dataAndSchema, gen.object(...valCxt));
    return context !== $jyW5U.nil ? $jyW5U._($480eaaaf261676f8$var$t9 || ($480eaaaf261676f8$var$t9 = $480eaaaf261676f8$var$_`${0}.call(${0}, ${0})`), func, context, args) : $jyW5U._($480eaaaf261676f8$var$t10 || ($480eaaaf261676f8$var$t10 = $480eaaaf261676f8$var$_`${0}(${0})`), func, args);
}
module.exports.callValidateCode = $480eaaaf261676f8$var$callValidateCode;
const $480eaaaf261676f8$var$newRegExp = $jyW5U._($480eaaaf261676f8$var$t11 || ($480eaaaf261676f8$var$t11 = $480eaaaf261676f8$var$_`new RegExp`));
function $480eaaaf261676f8$var$usePattern({ gen: gen , it: { opts: opts  }  }, pattern) {
    const u = opts.unicodeRegExp ? "u" : "";
    const { regExp: regExp  } = opts.code;
    const rx = regExp(pattern, u);
    return gen.scopeValue("pattern", {
        key: rx.toString(),
        ref: rx,
        code: $jyW5U._($480eaaaf261676f8$var$t12 || ($480eaaaf261676f8$var$t12 = $480eaaaf261676f8$var$_`${0}(${0}, ${0})`), regExp.code === "new RegExp" ? $480eaaaf261676f8$var$newRegExp : (0, $81JIu.useFunc)(gen, regExp), pattern, u)
    });
}
module.exports.usePattern = $480eaaaf261676f8$var$usePattern;
function $480eaaaf261676f8$var$validateArray(cxt) {
    const { gen: gen , data: data , keyword: keyword , it: it  } = cxt;
    const valid = gen.name("valid");
    if (it.allErrors) {
        const validArr = gen.let("valid", true);
        validateItems(()=>gen.assign(validArr, false));
        return validArr;
    }
    gen.var(valid, true);
    validateItems(()=>gen.break());
    return valid;
    function validateItems(notValid) {
        const len = gen.const("len", $jyW5U._($480eaaaf261676f8$var$t13 || ($480eaaaf261676f8$var$t13 = $480eaaaf261676f8$var$_`${0}.length`), data));
        gen.forRange("i", 0, len, (i)=>{
            cxt.subschema({
                keyword: keyword,
                dataProp: i,
                dataPropType: $81JIu.Type.Num
            }, valid);
            gen.if((0, $jyW5U.not)(valid), notValid);
        });
    }
}
module.exports.validateArray = $480eaaaf261676f8$var$validateArray;
function $480eaaaf261676f8$var$validateUnion(cxt) {
    const { gen: gen , schema: schema , keyword: keyword , it: it  } = cxt;
    /* istanbul ignore if */ if (!Array.isArray(schema)) throw new Error("ajv implementation error");
    const alwaysValid = schema.some((sch)=>(0, $81JIu.alwaysValidSchema)(it, sch));
    if (alwaysValid && !it.opts.unevaluated) return;
    const valid = gen.let("valid", false);
    const schValid = gen.name("_valid");
    gen.block(()=>schema.forEach((_sch, i)=>{
            const schCxt = cxt.subschema({
                keyword: keyword,
                schemaProp: i,
                compositeRule: true
            }, schValid);
            gen.assign(valid, $jyW5U._($480eaaaf261676f8$var$t14 || ($480eaaaf261676f8$var$t14 = $480eaaaf261676f8$var$_`${0} || ${0}`), valid, schValid));
            const merged = cxt.mergeValidEvaluated(schCxt, schValid);
            // can short-circuit if `unevaluatedProperties/Items` not supported (opts.unevaluated !== true)
            // or if all properties and items were evaluated (it.props === true && it.items === true)
            if (!merged) gen.if((0, $jyW5U.not)(valid));
        }));
    cxt.result(valid, ()=>cxt.reset(), ()=>cxt.error(true));
}
module.exports.validateUnion = $480eaaaf261676f8$var$validateUnion;

});


parcelRequire.register("evIAL", function(module, exports) {
"use strict";
let $a9068d000cc0c018$var$_ = (t5)=>t5, $a9068d000cc0c018$var$t, $a9068d000cc0c018$var$t1, $a9068d000cc0c018$var$t2, $a9068d000cc0c018$var$t3, $a9068d000cc0c018$var$t4;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.extendSubschemaMode = module.exports.extendSubschemaData = module.exports.getSubschema = void 0;

var $jyW5U = parcelRequire("jyW5U");

var $81JIu = parcelRequire("81JIu");
function $a9068d000cc0c018$var$getSubschema(it, { keyword: keyword , schemaProp: schemaProp , schema: schema , schemaPath: schemaPath , errSchemaPath: errSchemaPath , topSchemaRef: topSchemaRef  }) {
    if (keyword !== undefined && schema !== undefined) throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (keyword !== undefined) {
        const sch = it.schema[keyword];
        return schemaProp === undefined ? {
            schema: sch,
            schemaPath: $jyW5U._($a9068d000cc0c018$var$t || ($a9068d000cc0c018$var$t = $a9068d000cc0c018$var$_`${0}${0}`), it.schemaPath, (0, $jyW5U.getProperty)(keyword)),
            errSchemaPath: `${it.errSchemaPath}/${keyword}`
        } : {
            schema: sch[schemaProp],
            schemaPath: $jyW5U._($a9068d000cc0c018$var$t1 || ($a9068d000cc0c018$var$t1 = $a9068d000cc0c018$var$_`${0}${0}${0}`), it.schemaPath, (0, $jyW5U.getProperty)(keyword), (0, $jyW5U.getProperty)(schemaProp)),
            errSchemaPath: `${it.errSchemaPath}/${keyword}/${(0, $81JIu.escapeFragment)(schemaProp)}`
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
module.exports.getSubschema = $a9068d000cc0c018$var$getSubschema;
function $a9068d000cc0c018$var$extendSubschemaData(subschema, it, { dataProp: dataProp , dataPropType: dpType , data: data , dataTypes: dataTypes , propertyName: propertyName  }) {
    if (data !== undefined && dataProp !== undefined) throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: gen  } = it;
    if (dataProp !== undefined) {
        const { errorPath: errorPath , dataPathArr: dataPathArr , opts: opts  } = it;
        const nextData = gen.let("data", $jyW5U._($a9068d000cc0c018$var$t2 || ($a9068d000cc0c018$var$t2 = $a9068d000cc0c018$var$_`${0}${0}`), it.data, (0, $jyW5U.getProperty)(dataProp)), true);
        dataContextProps(nextData);
        subschema.errorPath = $jyW5U.str($a9068d000cc0c018$var$t3 || ($a9068d000cc0c018$var$t3 = $a9068d000cc0c018$var$_`${0}${0}`), errorPath, (0, $81JIu.getErrorPath)(dataProp, dpType, opts.jsPropertySyntax));
        subschema.parentDataProperty = $jyW5U._($a9068d000cc0c018$var$t4 || ($a9068d000cc0c018$var$t4 = $a9068d000cc0c018$var$_`${0}`), dataProp);
        subschema.dataPathArr = [
            ...dataPathArr,
            subschema.parentDataProperty
        ];
    }
    if (data !== undefined) {
        const nextData = data instanceof $jyW5U.Name ? data : gen.let("data", data, true); // replaceable if used once?
        dataContextProps(nextData);
        if (propertyName !== undefined) subschema.propertyName = propertyName;
    // TODO something is possibly wrong here with not changing parentDataProperty and not appending dataPathArr
    }
    if (dataTypes) subschema.dataTypes = dataTypes;
    function dataContextProps(_nextData) {
        subschema.data = _nextData;
        subschema.dataLevel = it.dataLevel + 1;
        subschema.dataTypes = [];
        it.definedProperties = new Set();
        subschema.parentData = it.data;
        subschema.dataNames = [
            ...it.dataNames,
            _nextData
        ];
    }
}
module.exports.extendSubschemaData = $a9068d000cc0c018$var$extendSubschemaData;
function $a9068d000cc0c018$var$extendSubschemaMode(subschema, { jtdDiscriminator: jtdDiscriminator , jtdMetadata: jtdMetadata , compositeRule: compositeRule , createErrors: createErrors , allErrors: allErrors  }) {
    if (compositeRule !== undefined) subschema.compositeRule = compositeRule;
    if (createErrors !== undefined) subschema.createErrors = createErrors;
    if (allErrors !== undefined) subschema.allErrors = allErrors;
    subschema.jtdDiscriminator = jtdDiscriminator; // not inherited
    subschema.jtdMetadata = jtdMetadata; // not inherited
}
module.exports.extendSubschemaMode = $a9068d000cc0c018$var$extendSubschemaMode;

});

parcelRequire.register("hF0t1", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.getSchemaRefs = module.exports.resolveUrl = module.exports.normalizeId = module.exports._getFullPath = module.exports.getFullPath = module.exports.inlineRef = void 0;

var $81JIu = parcelRequire("81JIu");

var $bblm1 = parcelRequire("bblm1");

var $jdIaA = parcelRequire("jdIaA");
// TODO refactor to use keyword definitions
const $cdb6a0c5b763dc66$var$SIMPLE_INLINED = new Set([
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
function $cdb6a0c5b763dc66$var$inlineRef(schema, limit = true) {
    if (typeof schema == "boolean") return true;
    if (limit === true) return !$cdb6a0c5b763dc66$var$hasRef(schema);
    if (!limit) return false;
    return $cdb6a0c5b763dc66$var$countKeys(schema) <= limit;
}
module.exports.inlineRef = $cdb6a0c5b763dc66$var$inlineRef;
const $cdb6a0c5b763dc66$var$REF_KEYWORDS = new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor", 
]);
function $cdb6a0c5b763dc66$var$hasRef(schema) {
    for(const key in schema){
        if ($cdb6a0c5b763dc66$var$REF_KEYWORDS.has(key)) return true;
        const sch = schema[key];
        if (Array.isArray(sch) && sch.some($cdb6a0c5b763dc66$var$hasRef)) return true;
        if (typeof sch == "object" && $cdb6a0c5b763dc66$var$hasRef(sch)) return true;
    }
    return false;
}
function $cdb6a0c5b763dc66$var$countKeys(schema) {
    let count = 0;
    for(const key in schema){
        if (key === "$ref") return Infinity;
        count++;
        if ($cdb6a0c5b763dc66$var$SIMPLE_INLINED.has(key)) continue;
        if (typeof schema[key] == "object") (0, $81JIu.eachItem)(schema[key], (sch)=>count += $cdb6a0c5b763dc66$var$countKeys(sch));
        if (count === Infinity) return Infinity;
    }
    return count;
}
function $cdb6a0c5b763dc66$var$getFullPath(resolver, id = "", normalize) {
    if (normalize !== false) id = $cdb6a0c5b763dc66$var$normalizeId(id);
    const p = resolver.parse(id);
    return $cdb6a0c5b763dc66$var$_getFullPath(resolver, p);
}
module.exports.getFullPath = $cdb6a0c5b763dc66$var$getFullPath;
function $cdb6a0c5b763dc66$var$_getFullPath(resolver, p) {
    const serialized = resolver.serialize(p);
    return serialized.split("#")[0] + "#";
}
module.exports._getFullPath = $cdb6a0c5b763dc66$var$_getFullPath;
const $cdb6a0c5b763dc66$var$TRAILING_SLASH_HASH = /#\/?$/;
function $cdb6a0c5b763dc66$var$normalizeId(id) {
    return id ? id.replace($cdb6a0c5b763dc66$var$TRAILING_SLASH_HASH, "") : "";
}
module.exports.normalizeId = $cdb6a0c5b763dc66$var$normalizeId;
function $cdb6a0c5b763dc66$var$resolveUrl(resolver, baseId, id) {
    id = $cdb6a0c5b763dc66$var$normalizeId(id);
    return resolver.resolve(baseId, id);
}
module.exports.resolveUrl = $cdb6a0c5b763dc66$var$resolveUrl;
const $cdb6a0c5b763dc66$var$ANCHOR = /^[a-z_][-a-z0-9._]*$/i;
function $cdb6a0c5b763dc66$var$getSchemaRefs(schema, baseId1) {
    if (typeof schema == "boolean") return {};
    const { schemaId: schemaId , uriResolver: uriResolver  } = this.opts;
    const schId = $cdb6a0c5b763dc66$var$normalizeId(schema[schemaId] || baseId1);
    const baseIds = {
        "": schId
    };
    const pathPrefix = $cdb6a0c5b763dc66$var$getFullPath(uriResolver, schId, false);
    const localRefs = {};
    const schemaRefs = new Set();
    $jdIaA(schema, {
        allKeys: true
    }, (sch, jsonPtr, _, parentJsonPtr)=>{
        if (parentJsonPtr === undefined) return;
        const fullPath = pathPrefix + jsonPtr;
        let baseId = baseIds[parentJsonPtr];
        if (typeof sch[schemaId] == "string") baseId = addRef.call(this, sch[schemaId]);
        addAnchor.call(this, sch.$anchor);
        addAnchor.call(this, sch.$dynamicAnchor);
        baseIds[jsonPtr] = baseId;
        function addRef(ref) {
            // eslint-disable-next-line @typescript-eslint/unbound-method
            const _resolve = this.opts.uriResolver.resolve;
            ref = $cdb6a0c5b763dc66$var$normalizeId(baseId ? _resolve(baseId, ref) : ref);
            if (schemaRefs.has(ref)) throw ambiguos(ref);
            schemaRefs.add(ref);
            let schOrRef = this.refs[ref];
            if (typeof schOrRef == "string") schOrRef = this.refs[schOrRef];
            if (typeof schOrRef == "object") checkAmbiguosRef(sch, schOrRef.schema, ref);
            else if (ref !== $cdb6a0c5b763dc66$var$normalizeId(fullPath)) {
                if (ref[0] === "#") {
                    checkAmbiguosRef(sch, localRefs[ref], ref);
                    localRefs[ref] = sch;
                } else this.refs[ref] = fullPath;
            }
            return ref;
        }
        function addAnchor(anchor) {
            if (typeof anchor == "string") {
                if (!$cdb6a0c5b763dc66$var$ANCHOR.test(anchor)) throw new Error(`invalid anchor "${anchor}"`);
                addRef.call(this, `#${anchor}`);
            }
        }
    });
    return localRefs;
    function checkAmbiguosRef(sch1, sch2, ref) {
        if (sch2 !== undefined && !$bblm1(sch1, sch2)) throw ambiguos(ref);
    }
    function ambiguos(ref) {
        return new Error(`reference "${ref}" resolves to more than one schema`);
    }
}
module.exports.getSchemaRefs = $cdb6a0c5b763dc66$var$getSchemaRefs;

});
parcelRequire.register("bblm1", function(module, exports) {
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

parcelRequire.register("jdIaA", function(module, exports) {
"use strict";
var $dfe17e6753165fa5$var$traverse = module.exports = function(schema, opts, cb) {
    // Legacy support for v0.3.1 and earlier.
    if (typeof opts == "function") {
        cb = opts;
        opts = {};
    }
    cb = opts.cb || cb;
    var pre = typeof cb == "function" ? cb : cb.pre || function() {};
    var post = cb.post || function() {};
    $dfe17e6753165fa5$var$_traverse(opts, pre, post, schema, "", schema);
};
$dfe17e6753165fa5$var$traverse.keywords = {
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
$dfe17e6753165fa5$var$traverse.arrayKeywords = {
    items: true,
    allOf: true,
    anyOf: true,
    oneOf: true
};
$dfe17e6753165fa5$var$traverse.propsKeywords = {
    $defs: true,
    definitions: true,
    properties: true,
    patternProperties: true,
    dependencies: true
};
$dfe17e6753165fa5$var$traverse.skipKeywords = {
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
function $dfe17e6753165fa5$var$_traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
    if (schema && typeof schema == "object" && !Array.isArray(schema)) {
        pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
        for(var key in schema){
            var sch = schema[key];
            if (Array.isArray(sch)) {
                if (key in $dfe17e6753165fa5$var$traverse.arrayKeywords) for(var i = 0; i < sch.length; i++)$dfe17e6753165fa5$var$_traverse(opts, pre, post, sch[i], jsonPtr + "/" + key + "/" + i, rootSchema, jsonPtr, key, schema, i);
            } else if (key in $dfe17e6753165fa5$var$traverse.propsKeywords) {
                if (sch && typeof sch == "object") for(var prop in sch)$dfe17e6753165fa5$var$_traverse(opts, pre, post, sch[prop], jsonPtr + "/" + key + "/" + $dfe17e6753165fa5$var$escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
            } else if (key in $dfe17e6753165fa5$var$traverse.keywords || opts.allKeys && !(key in $dfe17e6753165fa5$var$traverse.skipKeywords)) $dfe17e6753165fa5$var$_traverse(opts, pre, post, sch, jsonPtr + "/" + key, rootSchema, jsonPtr, key, schema);
        }
        post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
    }
}
function $dfe17e6753165fa5$var$escapeJsonPtr(str) {
    return str.replace(/~/g, "~0").replace(/\//g, "~1");
}

});



parcelRequire.register("clW88", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
class $8fe489abc4bd945c$var$ValidationError extends Error {
    constructor(errors){
        super("validation failed");
        this.errors = errors;
        this.ajv = this.validation = true;
    }
}
module.exports.default = $8fe489abc4bd945c$var$ValidationError;

});

parcelRequire.register("6MtpD", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $hF0t1 = parcelRequire("hF0t1");
class $4efe0a7df73c3363$var$MissingRefError extends Error {
    constructor(resolver, baseId, ref, msg){
        super(msg || `can't resolve reference ${ref} from id ${baseId}`);
        this.missingRef = (0, $hF0t1.resolveUrl)(resolver, baseId, ref);
        this.missingSchema = (0, $hF0t1.normalizeId)((0, $hF0t1.getFullPath)(resolver, this.missingRef));
    }
}
module.exports.default = $4efe0a7df73c3363$var$MissingRefError;

});

parcelRequire.register("5VCTu", function(module, exports) {
"use strict";
let $4510722f4c781081$var$_ = (t2)=>t2, $4510722f4c781081$var$t, $4510722f4c781081$var$t1;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.resolveSchema = module.exports.getCompilingSchema = module.exports.resolveRef = module.exports.compileSchema = module.exports.SchemaEnv = void 0;

var $jyW5U = parcelRequire("jyW5U");

var $clW88 = parcelRequire("clW88");

var $2m10X = parcelRequire("2m10X");

var $hF0t1 = parcelRequire("hF0t1");

var $81JIu = parcelRequire("81JIu");

var $stx26 = parcelRequire("stx26");
class $4510722f4c781081$var$SchemaEnv {
    constructor(env){
        var _a;
        this.refs = {};
        this.dynamicAnchors = {};
        let schema;
        if (typeof env.schema == "object") schema = env.schema;
        this.schema = env.schema;
        this.schemaId = env.schemaId;
        this.root = env.root || this;
        this.baseId = (_a = env.baseId) !== null && _a !== void 0 ? _a : (0, $hF0t1.normalizeId)(schema === null || schema === void 0 ? void 0 : schema[env.schemaId || "$id"]);
        this.schemaPath = env.schemaPath;
        this.localRefs = env.localRefs;
        this.meta = env.meta;
        this.$async = schema === null || schema === void 0 ? void 0 : schema.$async;
        this.refs = {};
    }
}
module.exports.SchemaEnv = $4510722f4c781081$var$SchemaEnv;
// let codeSize = 0
// let nodeCount = 0
// Compiles schema in SchemaEnv
function $4510722f4c781081$var$compileSchema(sch) {
    // TODO refactor - remove compilations
    const _sch = $4510722f4c781081$var$getCompilingSchema.call(this, sch);
    if (_sch) return _sch;
    const rootId = (0, $hF0t1.getFullPath)(this.opts.uriResolver, sch.root.baseId); // TODO if getFullPath removed 1 tests fails
    const { es5: es5 , lines: lines  } = this.opts.code;
    const { ownProperties: ownProperties  } = this.opts;
    const gen = new $jyW5U.CodeGen(this.scope, {
        es5: es5,
        lines: lines,
        ownProperties: ownProperties
    });
    let _ValidationError;
    if (sch.$async) _ValidationError = gen.scopeValue("Error", {
        ref: $clW88.default,
        code: $jyW5U._($4510722f4c781081$var$t || ($4510722f4c781081$var$t = $4510722f4c781081$var$_`require("ajv/dist/runtime/validation_error").default`))
    });
    const validateName = gen.scopeName("validate");
    sch.validateName = validateName;
    const schemaCxt = {
        gen: gen,
        allErrors: this.opts.allErrors,
        data: $2m10X.default.data,
        parentData: $2m10X.default.parentData,
        parentDataProperty: $2m10X.default.parentDataProperty,
        dataNames: [
            $2m10X.default.data
        ],
        dataPathArr: [
            $jyW5U.nil
        ],
        dataLevel: 0,
        dataTypes: [],
        definedProperties: new Set(),
        topSchemaRef: gen.scopeValue("schema", this.opts.code.source === true ? {
            ref: sch.schema,
            code: (0, $jyW5U.stringify)(sch.schema)
        } : {
            ref: sch.schema
        }),
        validateName: validateName,
        ValidationError: _ValidationError,
        schema: sch.schema,
        schemaEnv: sch,
        rootId: rootId,
        baseId: sch.baseId || rootId,
        schemaPath: $jyW5U.nil,
        errSchemaPath: sch.schemaPath || (this.opts.jtd ? "" : "#"),
        errorPath: $jyW5U._($4510722f4c781081$var$t1 || ($4510722f4c781081$var$t1 = $4510722f4c781081$var$_`""`)),
        opts: this.opts,
        self: this
    };
    let sourceCode;
    try {
        this._compilations.add(sch);
        (0, $stx26.validateFunctionCode)(schemaCxt);
        gen.optimize(this.opts.code.optimize);
        // gen.optimize(1)
        const validateCode = gen.toString();
        sourceCode = `${gen.scopeRefs($2m10X.default.scope)}return ${validateCode}`;
        // console.log((codeSize += sourceCode.length), (nodeCount += gen.nodeCount))
        if (this.opts.code.process) sourceCode = this.opts.code.process(sourceCode, sch);
        // console.log("\n\n\n *** \n", sourceCode)
        const makeValidate = new Function(`${$2m10X.default.self}`, `${$2m10X.default.scope}`, sourceCode);
        const validate = makeValidate(this, this.scope.get());
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
            const { props: props , items: items  } = schemaCxt;
            validate.evaluated = {
                props: props instanceof $jyW5U.Name ? undefined : props,
                items: items instanceof $jyW5U.Name ? undefined : items,
                dynamicProps: props instanceof $jyW5U.Name,
                dynamicItems: items instanceof $jyW5U.Name
            };
            if (validate.source) validate.source.evaluated = (0, $jyW5U.stringify)(validate.evaluated);
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
module.exports.compileSchema = $4510722f4c781081$var$compileSchema;
function $4510722f4c781081$var$resolveRef(root, baseId, ref) {
    var _a;
    ref = (0, $hF0t1.resolveUrl)(this.opts.uriResolver, baseId, ref);
    const schOrFunc = root.refs[ref];
    if (schOrFunc) return schOrFunc;
    let _sch = $4510722f4c781081$var$resolve.call(this, root, ref);
    if (_sch === undefined) {
        const schema = (_a = root.localRefs) === null || _a === void 0 ? void 0 : _a[ref]; // TODO maybe localRefs should hold SchemaEnv
        const { schemaId: schemaId  } = this.opts;
        if (schema) _sch = new $4510722f4c781081$var$SchemaEnv({
            schema: schema,
            schemaId: schemaId,
            root: root,
            baseId: baseId
        });
    }
    if (_sch === undefined) return;
    return root.refs[ref] = $4510722f4c781081$var$inlineOrCompile.call(this, _sch);
}
module.exports.resolveRef = $4510722f4c781081$var$resolveRef;
function $4510722f4c781081$var$inlineOrCompile(sch) {
    if ((0, $hF0t1.inlineRef)(sch.schema, this.opts.inlineRefs)) return sch.schema;
    return sch.validate ? sch : $4510722f4c781081$var$compileSchema.call(this, sch);
}
// Index of schema compilation in the currently compiled list
function $4510722f4c781081$var$getCompilingSchema(schEnv) {
    for (const sch of this._compilations){
        if ($4510722f4c781081$var$sameSchemaEnv(sch, schEnv)) return sch;
    }
}
module.exports.getCompilingSchema = $4510722f4c781081$var$getCompilingSchema;
function $4510722f4c781081$var$sameSchemaEnv(s1, s2) {
    return s1.schema === s2.schema && s1.root === s2.root && s1.baseId === s2.baseId;
}
// resolve and compile the references ($ref)
// TODO returns AnySchemaObject (if the schema can be inlined) or validation function
function $4510722f4c781081$var$resolve(root, ref // reference to resolve
) {
    let sch;
    while(typeof (sch = this.refs[ref]) == "string")ref = sch;
    return sch || this.schemas[ref] || $4510722f4c781081$var$resolveSchema.call(this, root, ref);
}
// Resolve schema, its root and baseId
function $4510722f4c781081$var$resolveSchema(root, ref // reference to resolve
) {
    const p = this.opts.uriResolver.parse(ref);
    const refPath = (0, $hF0t1._getFullPath)(this.opts.uriResolver, p);
    let baseId = (0, $hF0t1.getFullPath)(this.opts.uriResolver, root.baseId, undefined);
    // TODO `Object.keys(root.schema).length > 0` should not be needed - but removing breaks 2 tests
    if (Object.keys(root.schema).length > 0 && refPath === baseId) return $4510722f4c781081$var$getJsonPointer.call(this, p, root);
    const id = (0, $hF0t1.normalizeId)(refPath);
    const schOrRef = this.refs[id] || this.schemas[id];
    if (typeof schOrRef == "string") {
        const sch = $4510722f4c781081$var$resolveSchema.call(this, root, schOrRef);
        if (typeof (sch === null || sch === void 0 ? void 0 : sch.schema) !== "object") return;
        return $4510722f4c781081$var$getJsonPointer.call(this, p, sch);
    }
    if (typeof (schOrRef === null || schOrRef === void 0 ? void 0 : schOrRef.schema) !== "object") return;
    if (!schOrRef.validate) $4510722f4c781081$var$compileSchema.call(this, schOrRef);
    if (id === (0, $hF0t1.normalizeId)(ref)) {
        const { schema: schema  } = schOrRef;
        const { schemaId: schemaId  } = this.opts;
        const schId = schema[schemaId];
        if (schId) baseId = (0, $hF0t1.resolveUrl)(this.opts.uriResolver, baseId, schId);
        return new $4510722f4c781081$var$SchemaEnv({
            schema: schema,
            schemaId: schemaId,
            root: root,
            baseId: baseId
        });
    }
    return $4510722f4c781081$var$getJsonPointer.call(this, p, schOrRef);
}
module.exports.resolveSchema = $4510722f4c781081$var$resolveSchema;
const $4510722f4c781081$var$PREVENT_SCOPE_CHANGE = new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions", 
]);
function $4510722f4c781081$var$getJsonPointer(parsedRef, { baseId: baseId , schema: schema , root: root  }) {
    var _a;
    if (((_a = parsedRef.fragment) === null || _a === void 0 ? void 0 : _a[0]) !== "/") return;
    for (const part of parsedRef.fragment.slice(1).split("/")){
        if (typeof schema === "boolean") return;
        const partSchema = schema[(0, $81JIu.unescapeFragment)(part)];
        if (partSchema === undefined) return;
        schema = partSchema;
        // TODO PREVENT_SCOPE_CHANGE could be defined in keyword def?
        const schId = typeof schema === "object" && schema[this.opts.schemaId];
        if (!$4510722f4c781081$var$PREVENT_SCOPE_CHANGE.has(part) && schId) baseId = (0, $hF0t1.resolveUrl)(this.opts.uriResolver, baseId, schId);
    }
    let env;
    if (typeof schema != "boolean" && schema.$ref && !(0, $81JIu.schemaHasRulesButRef)(schema, this.RULES)) {
        const $ref = (0, $hF0t1.resolveUrl)(this.opts.uriResolver, baseId, schema.$ref);
        env = $4510722f4c781081$var$resolveSchema.call(this, root, $ref);
    }
    // even though resolution failed we need to return SchemaEnv to throw exception
    // so that compileAsync loads missing schema.
    const { schemaId: schemaId  } = this.opts;
    env = env || new $4510722f4c781081$var$SchemaEnv({
        schema: schema,
        schemaId: schemaId,
        root: root,
        baseId: baseId
    });
    if (env.schema !== env.root.schema) return env;
    return undefined;
}

});

parcelRequire.register("2DMW1", function(module, exports) {
module.exports = JSON.parse('{"$id":"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#","description":"Meta-schema for $data reference (JSON AnySchema extension proposal)","type":"object","required":["$data"],"properties":{"$data":{"type":"string","anyOf":[{"format":"relative-json-pointer"},{"format":"json-pointer"}]}},"additionalProperties":false}');

});

parcelRequire.register("hch9Z", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $5u4EZ = parcelRequire("5u4EZ");
$5u4EZ.code = 'require("ajv/dist/runtime/uri").default';
module.exports.default = $5u4EZ;

});
parcelRequire.register("5u4EZ", function(module, exports) {
/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */ (function(global, factory) {
    factory(module.exports);
})(module.exports, function(exports) {
    "use strict";
    function merge() {
        for(var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++)sets[_key] = arguments[_key];
        if (sets.length > 1) {
            sets[0] = sets[0].slice(0, -1);
            var xl = sets.length - 1;
            for(var x = 1; x < xl; ++x)sets[x] = sets[x].slice(1, -1);
            sets[xl] = sets[xl].slice(1);
            return sets.join("");
        } else return sets[0];
    }
    function subexp(str) {
        return "(?:" + str + ")";
    }
    function typeOf(o) {
        return o === undefined ? "undefined" : o === null ? "null" : Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase();
    }
    function toUpperCase(str) {
        return str.toUpperCase();
    }
    function toArray(obj) {
        return obj !== undefined && obj !== null ? obj instanceof Array ? obj : typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [
            obj
        ] : Array.prototype.slice.call(obj) : [];
    }
    function assign(target, source) {
        var obj = target;
        if (source) for(var key in source)obj[key] = source[key];
        return obj;
    }
    function buildExps(isIRI) {
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
    }
    var URI_PROTOCOL = buildExps(false);
    var IRI_PROTOCOL = buildExps(true);
    var slicedToArray = function() {
        function sliceIterator(arr, i) {
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
        }
        return function(arr, i) {
            if (Array.isArray(arr)) return arr;
            else if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
            else throw new TypeError("Invalid attempt to destructure non-iterable instance");
        };
    }();
    var toConsumableArray = function(arr) {
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
    /*--------------------------------------------------------------------------*/ /**
 * A generic error utility function.
 * @private
 * @param {String} type The error type.
 * @returns {Error} Throws a `RangeError` with the applicable error message.
 */ function error$1(type) {
        throw new RangeError(errors[type]);
    }
    /**
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
    }
    /**
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
    }
    /**
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
    }
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
    function pctEncChar(chr) {
        var c = chr.charCodeAt(0);
        var e = void 0;
        if (c < 16) e = "%0" + c.toString(16).toUpperCase();
        else if (c < 128) e = "%" + c.toString(16).toUpperCase();
        else if (c < 2048) e = "%" + (c >> 6 | 192).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
        else e = "%" + (c >> 12 | 224).toString(16).toUpperCase() + "%" + (c >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
        return e;
    }
    function pctDecChars(str) {
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
    }
    function _normalizeComponentEncoding(components, protocol) {
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
    }
    function _stripLeadingZeros(str) {
        return str.replace(/^0*(.*)/, "$1") || "0";
    }
    function _normalizeIPv4(host, protocol) {
        var matches = host.match(protocol.IPV4ADDRESS) || [];
        var _matches = slicedToArray(matches, 2), address = _matches[1];
        if (address) return address.split(".").map(_stripLeadingZeros).join(".");
        else return host;
    }
    function _normalizeIPv6(host, protocol) {
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
    }
    var URI_PARSE = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
    var NO_MATCH_IS_UNDEFINED = "".match(/(){0}/)[1] === undefined;
    function parse(uriString) {
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
    }
    function _recomposeAuthority(components, options) {
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
    }
    var RDS1 = /^\.\.?\//;
    var RDS2 = /^\/\.(\/|$)/;
    var RDS3 = /^\/\.\.(\/|$)/;
    var RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/;
    function removeDotSegments(input) {
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
    }
    function serialize(components) {
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
    }
    function resolveComponents(base, relative) {
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
    }
    function resolve(baseURI, relativeURI, options) {
        var schemelessOptions = assign({
            scheme: "null"
        }, options);
        return serialize(resolveComponents(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true), schemelessOptions);
    }
    function normalize(uri, options) {
        if (typeof uri === "string") uri = serialize(parse(uri, options), options);
        else if (typeOf(uri) === "object") uri = parse(serialize(uri, options), options);
        return uri;
    }
    function equal(uriA, uriB, options) {
        if (typeof uriA === "string") uriA = serialize(parse(uriA, options), options);
        else if (typeOf(uriA) === "object") uriA = serialize(uriA, options);
        if (typeof uriB === "string") uriB = serialize(parse(uriB, options), options);
        else if (typeOf(uriB) === "object") uriB = serialize(uriB, options);
        return uriA === uriB;
    }
    function escapeComponent(str, options) {
        return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.ESCAPE : IRI_PROTOCOL.ESCAPE, pctEncChar);
    }
    function unescapeComponent(str, options) {
        return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.PCT_ENCODED : IRI_PROTOCOL.PCT_ENCODED, pctDecChars);
    }
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
    function isSecure(wsComponents) {
        return typeof wsComponents.secure === "boolean" ? wsComponents.secure : String(wsComponents.scheme).toLowerCase() === "wss";
    }
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
    function decodeUnreserved1(str) {
        var decStr = pctDecChars(str);
        return !decStr.match(UNRESERVED) ? str : decStr;
    }
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



parcelRequire.register("hWtwF", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $llTj3 = parcelRequire("llTj3");

var $JklFf = parcelRequire("JklFf");

var $k2WFn = parcelRequire("k2WFn");

var $482wQ = parcelRequire("482wQ");

var $gbCZ1 = parcelRequire("gbCZ1");
const $d0fec1aca7fd5ec2$var$draft7Vocabularies = [
    $llTj3.default,
    $JklFf.default,
    (0, $k2WFn.default)(),
    $482wQ.default,
    $gbCZ1.metadataVocabulary,
    $gbCZ1.contentVocabulary, 
];
module.exports.default = $d0fec1aca7fd5ec2$var$draft7Vocabularies;

});
parcelRequire.register("llTj3", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $dLIFN = parcelRequire("dLIFN");

var $1TcjU = parcelRequire("1TcjU");
const $f8b675d720b17597$var$core = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    {
        keyword: "$comment"
    },
    "definitions",
    $dLIFN.default,
    $1TcjU.default, 
];
module.exports.default = $f8b675d720b17597$var$core;

});
parcelRequire.register("dLIFN", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
const $a062514e1f0daf0d$var$def = {
    keyword: "id",
    code () {
        throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
};
module.exports.default = $a062514e1f0daf0d$var$def;

});

parcelRequire.register("1TcjU", function(module, exports) {
"use strict";
let $16047c0aea502913$var$_ = (t9)=>t9, $16047c0aea502913$var$t, $16047c0aea502913$var$t1, $16047c0aea502913$var$t2, $16047c0aea502913$var$t3, $16047c0aea502913$var$t4, $16047c0aea502913$var$t5, $16047c0aea502913$var$t6, $16047c0aea502913$var$t7, $16047c0aea502913$var$t8;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.callRef = module.exports.getValidate = void 0;

var $6MtpD = parcelRequire("6MtpD");

var $6byFQ = parcelRequire("6byFQ");

var $jyW5U = parcelRequire("jyW5U");

var $2m10X = parcelRequire("2m10X");

var $5VCTu = parcelRequire("5VCTu");

var $81JIu = parcelRequire("81JIu");
const $16047c0aea502913$var$def = {
    keyword: "$ref",
    schemaType: "string",
    code (cxt) {
        const { gen: gen , schema: $ref , it: it  } = cxt;
        const { baseId: baseId , schemaEnv: env , validateName: validateName , opts: opts , self: self  } = it;
        const { root: root  } = env;
        if (($ref === "#" || $ref === "#/") && baseId === root.baseId) return callRootRef();
        const schOrEnv = $5VCTu.resolveRef.call(self, root, baseId, $ref);
        if (schOrEnv === undefined) throw new $6MtpD.default(it.opts.uriResolver, baseId, $ref);
        if (schOrEnv instanceof $5VCTu.SchemaEnv) return callValidate(schOrEnv);
        return inlineRefSchema(schOrEnv);
        function callRootRef() {
            if (env === root) return $16047c0aea502913$var$callRef(cxt, validateName, env, env.$async);
            const rootName = gen.scopeValue("root", {
                ref: root
            });
            return $16047c0aea502913$var$callRef(cxt, $jyW5U._($16047c0aea502913$var$t || ($16047c0aea502913$var$t = $16047c0aea502913$var$_`${0}.validate`), rootName), root, root.$async);
        }
        function callValidate(sch) {
            const v = $16047c0aea502913$var$getValidate(cxt, sch);
            $16047c0aea502913$var$callRef(cxt, v, sch, sch.$async);
        }
        function inlineRefSchema(sch) {
            const schName = gen.scopeValue("schema", opts.code.source === true ? {
                ref: sch,
                code: (0, $jyW5U.stringify)(sch)
            } : {
                ref: sch
            });
            const valid = gen.name("valid");
            const schCxt = cxt.subschema({
                schema: sch,
                dataTypes: [],
                schemaPath: $jyW5U.nil,
                topSchemaRef: schName,
                errSchemaPath: $ref
            }, valid);
            cxt.mergeEvaluated(schCxt);
            cxt.ok(valid);
        }
    }
};
function $16047c0aea502913$var$getValidate(cxt, sch) {
    const { gen: gen  } = cxt;
    return sch.validate ? gen.scopeValue("validate", {
        ref: sch.validate
    }) : $jyW5U._($16047c0aea502913$var$t1 || ($16047c0aea502913$var$t1 = $16047c0aea502913$var$_`${0}.validate`), gen.scopeValue("wrapper", {
        ref: sch
    }));
}
module.exports.getValidate = $16047c0aea502913$var$getValidate;
function $16047c0aea502913$var$callRef(cxt, v, sch, $async) {
    const { gen: gen , it: it  } = cxt;
    const { allErrors: allErrors , schemaEnv: env , opts: opts  } = it;
    const passCxt = opts.passContext ? $2m10X.default.this : $jyW5U.nil;
    if ($async) callAsyncRef();
    else callSyncRef();
    function callAsyncRef() {
        if (!env.$async) throw new Error("async schema referenced by sync schema");
        const valid = gen.let("valid");
        gen.try(()=>{
            gen.code($jyW5U._($16047c0aea502913$var$t2 || ($16047c0aea502913$var$t2 = $16047c0aea502913$var$_`await ${0}`), (0, $6byFQ.callValidateCode)(cxt, v, passCxt)));
            addEvaluatedFrom(v); // TODO will not work with async, it has to be returned with the result
            if (!allErrors) gen.assign(valid, true);
        }, (e)=>{
            gen.if($jyW5U._($16047c0aea502913$var$t3 || ($16047c0aea502913$var$t3 = $16047c0aea502913$var$_`!(${0} instanceof ${0})`), e, it.ValidationError), ()=>gen.throw(e));
            addErrorsFrom(e);
            if (!allErrors) gen.assign(valid, false);
        });
        cxt.ok(valid);
    }
    function callSyncRef() {
        cxt.result((0, $6byFQ.callValidateCode)(cxt, v, passCxt), ()=>addEvaluatedFrom(v), ()=>addErrorsFrom(v));
    }
    function addErrorsFrom(source) {
        const errs = $jyW5U._($16047c0aea502913$var$t4 || ($16047c0aea502913$var$t4 = $16047c0aea502913$var$_`${0}.errors`), source);
        gen.assign($2m10X.default.vErrors, $jyW5U._($16047c0aea502913$var$t5 || ($16047c0aea502913$var$t5 = $16047c0aea502913$var$_`${0} === null ? ${0} : ${0}.concat(${0})`), $2m10X.default.vErrors, errs, $2m10X.default.vErrors, errs)); // TODO tagged
        gen.assign($2m10X.default.errors, $jyW5U._($16047c0aea502913$var$t6 || ($16047c0aea502913$var$t6 = $16047c0aea502913$var$_`${0}.length`), $2m10X.default.vErrors));
    }
    function addEvaluatedFrom(source) {
        var _a;
        if (!it.opts.unevaluated) return;
        const schEvaluated = (_a = sch === null || sch === void 0 ? void 0 : sch.validate) === null || _a === void 0 ? void 0 : _a.evaluated;
        // TODO refactor
        if (it.props !== true) {
            if (schEvaluated && !schEvaluated.dynamicProps) {
                if (schEvaluated.props !== undefined) it.props = $81JIu.mergeEvaluated.props(gen, schEvaluated.props, it.props);
            } else {
                const props = gen.var("props", $jyW5U._($16047c0aea502913$var$t7 || ($16047c0aea502913$var$t7 = $16047c0aea502913$var$_`${0}.evaluated.props`), source));
                it.props = $81JIu.mergeEvaluated.props(gen, props, it.props, $jyW5U.Name);
            }
        }
        if (it.items !== true) {
            if (schEvaluated && !schEvaluated.dynamicItems) {
                if (schEvaluated.items !== undefined) it.items = $81JIu.mergeEvaluated.items(gen, schEvaluated.items, it.items);
            } else {
                const items = gen.var("items", $jyW5U._($16047c0aea502913$var$t8 || ($16047c0aea502913$var$t8 = $16047c0aea502913$var$_`${0}.evaluated.items`), source));
                it.items = $81JIu.mergeEvaluated.items(gen, items, it.items, $jyW5U.Name);
            }
        }
    }
}
module.exports.callRef = $16047c0aea502913$var$callRef;
module.exports.default = $16047c0aea502913$var$def;

});


parcelRequire.register("JklFf", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $5Pr0H = parcelRequire("5Pr0H");

var $iId2b = parcelRequire("iId2b");

var $23xFv = parcelRequire("23xFv");

var $8UyWj = parcelRequire("8UyWj");

var $6nM4b = parcelRequire("6nM4b");

var $dDzRZ = parcelRequire("dDzRZ");

var $gMdVA = parcelRequire("gMdVA");

var $3WUEj = parcelRequire("3WUEj");

var $fM2wT = parcelRequire("fM2wT");

var $dilnh = parcelRequire("dilnh");
const $0883fcdb604a742c$var$validation = [
    // number
    $5Pr0H.default,
    $iId2b.default,
    // string
    $23xFv.default,
    $8UyWj.default,
    // object
    $6nM4b.default,
    $dDzRZ.default,
    // array
    $gMdVA.default,
    $3WUEj.default,
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
    $fM2wT.default,
    $dilnh.default, 
];
module.exports.default = $0883fcdb604a742c$var$validation;

});
parcelRequire.register("5Pr0H", function(module, exports) {
"use strict";
let $43e6aad7c65dec66$var$_ = (t3)=>t3, $43e6aad7c65dec66$var$t, $43e6aad7c65dec66$var$t1, $43e6aad7c65dec66$var$t2;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jyW5U = parcelRequire("jyW5U");
const $43e6aad7c65dec66$var$ops = $jyW5U.operators;
const $43e6aad7c65dec66$var$KWDs = {
    maximum: {
        okStr: "<=",
        ok: $43e6aad7c65dec66$var$ops.LTE,
        fail: $43e6aad7c65dec66$var$ops.GT
    },
    minimum: {
        okStr: ">=",
        ok: $43e6aad7c65dec66$var$ops.GTE,
        fail: $43e6aad7c65dec66$var$ops.LT
    },
    exclusiveMaximum: {
        okStr: "<",
        ok: $43e6aad7c65dec66$var$ops.LT,
        fail: $43e6aad7c65dec66$var$ops.GTE
    },
    exclusiveMinimum: {
        okStr: ">",
        ok: $43e6aad7c65dec66$var$ops.GT,
        fail: $43e6aad7c65dec66$var$ops.LTE
    }
};
const $43e6aad7c65dec66$var$error = {
    message: ({ keyword: keyword , schemaCode: schemaCode  })=>$jyW5U.str($43e6aad7c65dec66$var$t || ($43e6aad7c65dec66$var$t = $43e6aad7c65dec66$var$_`must be ${0} ${0}`), $43e6aad7c65dec66$var$KWDs[keyword].okStr, schemaCode),
    params: ({ keyword: keyword , schemaCode: schemaCode  })=>$jyW5U._($43e6aad7c65dec66$var$t1 || ($43e6aad7c65dec66$var$t1 = $43e6aad7c65dec66$var$_`{comparison: ${0}, limit: ${0}}`), $43e6aad7c65dec66$var$KWDs[keyword].okStr, schemaCode)
};
const $43e6aad7c65dec66$var$def = {
    keyword: Object.keys($43e6aad7c65dec66$var$KWDs),
    type: "number",
    schemaType: "number",
    $data: true,
    error: $43e6aad7c65dec66$var$error,
    code (cxt) {
        const { keyword: keyword , data: data , schemaCode: schemaCode  } = cxt;
        cxt.fail$data($jyW5U._($43e6aad7c65dec66$var$t2 || ($43e6aad7c65dec66$var$t2 = $43e6aad7c65dec66$var$_`${0} ${0} ${0} || isNaN(${0})`), data, $43e6aad7c65dec66$var$KWDs[keyword].fail, schemaCode, data));
    }
};
module.exports.default = $43e6aad7c65dec66$var$def;

});

parcelRequire.register("iId2b", function(module, exports) {
"use strict";
let $d9f672671866b1c5$var$_ = (t5)=>t5, $d9f672671866b1c5$var$t, $d9f672671866b1c5$var$t1, $d9f672671866b1c5$var$t2, $d9f672671866b1c5$var$t3, $d9f672671866b1c5$var$t4;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jyW5U = parcelRequire("jyW5U");
const $d9f672671866b1c5$var$error = {
    message: ({ schemaCode: schemaCode  })=>$jyW5U.str($d9f672671866b1c5$var$t || ($d9f672671866b1c5$var$t = $d9f672671866b1c5$var$_`must be multiple of ${0}`), schemaCode),
    params: ({ schemaCode: schemaCode  })=>$jyW5U._($d9f672671866b1c5$var$t1 || ($d9f672671866b1c5$var$t1 = $d9f672671866b1c5$var$_`{multipleOf: ${0}}`), schemaCode)
};
const $d9f672671866b1c5$var$def = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: true,
    error: $d9f672671866b1c5$var$error,
    code (cxt) {
        const { gen: gen , data: data , schemaCode: schemaCode , it: it  } = cxt;
        // const bdt = bad$DataType(schemaCode, <string>def.schemaType, $data)
        const prec = it.opts.multipleOfPrecision;
        const res = gen.let("res");
        const invalid = prec ? $jyW5U._($d9f672671866b1c5$var$t2 || ($d9f672671866b1c5$var$t2 = $d9f672671866b1c5$var$_`Math.abs(Math.round(${0}) - ${0}) > 1e-${0}`), res, res, prec) : $jyW5U._($d9f672671866b1c5$var$t3 || ($d9f672671866b1c5$var$t3 = $d9f672671866b1c5$var$_`${0} !== parseInt(${0})`), res, res);
        cxt.fail$data($jyW5U._($d9f672671866b1c5$var$t4 || ($d9f672671866b1c5$var$t4 = $d9f672671866b1c5$var$_`(${0} === 0 || (${0} = ${0}/${0}, ${0}))`), schemaCode, res, data, schemaCode, invalid));
    }
};
module.exports.default = $d9f672671866b1c5$var$def;

});

parcelRequire.register("23xFv", function(module, exports) {
"use strict";
let $17f5fa724783c117$var$_ = (t5)=>t5, $17f5fa724783c117$var$t, $17f5fa724783c117$var$t1, $17f5fa724783c117$var$t2, $17f5fa724783c117$var$t3, $17f5fa724783c117$var$t4;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jyW5U = parcelRequire("jyW5U");

var $81JIu = parcelRequire("81JIu");

var $3YuZQ = parcelRequire("3YuZQ");
const $17f5fa724783c117$var$error = {
    message ({ keyword: keyword , schemaCode: schemaCode  }) {
        const comp = keyword === "maxLength" ? "more" : "fewer";
        return $jyW5U.str($17f5fa724783c117$var$t || ($17f5fa724783c117$var$t = $17f5fa724783c117$var$_`must NOT have ${0} than ${0} characters`), comp, schemaCode);
    },
    params: ({ schemaCode: schemaCode  })=>$jyW5U._($17f5fa724783c117$var$t1 || ($17f5fa724783c117$var$t1 = $17f5fa724783c117$var$_`{limit: ${0}}`), schemaCode)
};
const $17f5fa724783c117$var$def = {
    keyword: [
        "maxLength",
        "minLength"
    ],
    type: "string",
    schemaType: "number",
    $data: true,
    error: $17f5fa724783c117$var$error,
    code (cxt) {
        const { keyword: keyword , data: data , schemaCode: schemaCode , it: it  } = cxt;
        const op = keyword === "maxLength" ? $jyW5U.operators.GT : $jyW5U.operators.LT;
        const len = it.opts.unicode === false ? $jyW5U._($17f5fa724783c117$var$t2 || ($17f5fa724783c117$var$t2 = $17f5fa724783c117$var$_`${0}.length`), data) : $jyW5U._($17f5fa724783c117$var$t3 || ($17f5fa724783c117$var$t3 = $17f5fa724783c117$var$_`${0}(${0})`), (0, $81JIu.useFunc)(cxt.gen, $3YuZQ.default), data);
        cxt.fail$data($jyW5U._($17f5fa724783c117$var$t4 || ($17f5fa724783c117$var$t4 = $17f5fa724783c117$var$_`${0} ${0} ${0}`), len, op, schemaCode));
    }
};
module.exports.default = $17f5fa724783c117$var$def;

});
parcelRequire.register("3YuZQ", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
// https://mathiasbynens.be/notes/javascript-encoding
// https://github.com/bestiejs/punycode.js - punycode.ucs2.decode
function $2e4f04f063651109$var$ucs2length(str) {
    const len = str.length;
    let length = 0;
    let pos = 0;
    let value;
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
module.exports.default = $2e4f04f063651109$var$ucs2length;
$2e4f04f063651109$var$ucs2length.code = 'require("ajv/dist/runtime/ucs2length").default';

});


parcelRequire.register("8UyWj", function(module, exports) {
"use strict";
let $67cea7f77638702d$var$_ = (t4)=>t4, $67cea7f77638702d$var$t, $67cea7f77638702d$var$t1, $67cea7f77638702d$var$t2, $67cea7f77638702d$var$t3;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $6byFQ = parcelRequire("6byFQ");

var $jyW5U = parcelRequire("jyW5U");
const $67cea7f77638702d$var$error = {
    message: ({ schemaCode: schemaCode  })=>$jyW5U.str($67cea7f77638702d$var$t || ($67cea7f77638702d$var$t = $67cea7f77638702d$var$_`must match pattern "${0}"`), schemaCode),
    params: ({ schemaCode: schemaCode  })=>$jyW5U._($67cea7f77638702d$var$t1 || ($67cea7f77638702d$var$t1 = $67cea7f77638702d$var$_`{pattern: ${0}}`), schemaCode)
};
const $67cea7f77638702d$var$def = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: true,
    error: $67cea7f77638702d$var$error,
    code (cxt) {
        const { data: data , $data: $data , schema: schema , schemaCode: schemaCode , it: it  } = cxt;
        // TODO regexp should be wrapped in try/catchs
        const u = it.opts.unicodeRegExp ? "u" : "";
        const regExp = $data ? $jyW5U._($67cea7f77638702d$var$t2 || ($67cea7f77638702d$var$t2 = $67cea7f77638702d$var$_`(new RegExp(${0}, ${0}))`), schemaCode, u) : (0, $6byFQ.usePattern)(cxt, schema);
        cxt.fail$data($jyW5U._($67cea7f77638702d$var$t3 || ($67cea7f77638702d$var$t3 = $67cea7f77638702d$var$_`!${0}.test(${0})`), regExp, data));
    }
};
module.exports.default = $67cea7f77638702d$var$def;

});

parcelRequire.register("6nM4b", function(module, exports) {
"use strict";
let $4a5a2d144724fec3$var$_ = (t3)=>t3, $4a5a2d144724fec3$var$t, $4a5a2d144724fec3$var$t1, $4a5a2d144724fec3$var$t2;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jyW5U = parcelRequire("jyW5U");
const $4a5a2d144724fec3$var$error = {
    message ({ keyword: keyword , schemaCode: schemaCode  }) {
        const comp = keyword === "maxProperties" ? "more" : "fewer";
        return $jyW5U.str($4a5a2d144724fec3$var$t || ($4a5a2d144724fec3$var$t = $4a5a2d144724fec3$var$_`must NOT have ${0} than ${0} properties`), comp, schemaCode);
    },
    params: ({ schemaCode: schemaCode  })=>$jyW5U._($4a5a2d144724fec3$var$t1 || ($4a5a2d144724fec3$var$t1 = $4a5a2d144724fec3$var$_`{limit: ${0}}`), schemaCode)
};
const $4a5a2d144724fec3$var$def = {
    keyword: [
        "maxProperties",
        "minProperties"
    ],
    type: "object",
    schemaType: "number",
    $data: true,
    error: $4a5a2d144724fec3$var$error,
    code (cxt) {
        const { keyword: keyword , data: data , schemaCode: schemaCode  } = cxt;
        const op = keyword === "maxProperties" ? $jyW5U.operators.GT : $jyW5U.operators.LT;
        cxt.fail$data($jyW5U._($4a5a2d144724fec3$var$t2 || ($4a5a2d144724fec3$var$t2 = $4a5a2d144724fec3$var$_`Object.keys(${0}).length ${0} ${0}`), data, op, schemaCode));
    }
};
module.exports.default = $4a5a2d144724fec3$var$def;

});

parcelRequire.register("dDzRZ", function(module, exports) {
"use strict";
let $9edabde1cf0a0ab9$var$_ = (t2)=>t2, $9edabde1cf0a0ab9$var$t, $9edabde1cf0a0ab9$var$t1;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $6byFQ = parcelRequire("6byFQ");

var $jyW5U = parcelRequire("jyW5U");

var $81JIu = parcelRequire("81JIu");
const $9edabde1cf0a0ab9$var$error = {
    message: ({ params: { missingProperty: missingProperty  }  })=>$jyW5U.str($9edabde1cf0a0ab9$var$t || ($9edabde1cf0a0ab9$var$t = $9edabde1cf0a0ab9$var$_`must have required property '${0}'`), missingProperty),
    params: ({ params: { missingProperty: missingProperty  }  })=>$jyW5U._($9edabde1cf0a0ab9$var$t1 || ($9edabde1cf0a0ab9$var$t1 = $9edabde1cf0a0ab9$var$_`{missingProperty: ${0}}`), missingProperty)
};
const $9edabde1cf0a0ab9$var$def = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: true,
    error: $9edabde1cf0a0ab9$var$error,
    code (cxt) {
        const { gen: gen , schema: schema , schemaCode: schemaCode , data: data , $data: $data , it: it  } = cxt;
        const { opts: opts  } = it;
        if (!$data && schema.length === 0) return;
        const useLoop = schema.length >= opts.loopRequired;
        if (it.allErrors) allErrorsMode();
        else exitOnErrorMode();
        if (opts.strictRequired) {
            const props = cxt.parentSchema.properties;
            const { definedProperties: definedProperties  } = cxt.it;
            for (const requiredKey of schema)if ((props === null || props === void 0 ? void 0 : props[requiredKey]) === undefined && !definedProperties.has(requiredKey)) {
                const schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
                const msg = `required property "${requiredKey}" is not defined at "${schemaPath}" (strictRequired)`;
                (0, $81JIu.checkStrictMode)(it, msg, it.opts.strictRequired);
            }
        }
        function allErrorsMode() {
            if (useLoop || $data) cxt.block$data($jyW5U.nil, loopAllRequired);
            else for (const prop of schema)(0, $6byFQ.checkReportMissingProp)(cxt, prop);
        }
        function exitOnErrorMode() {
            const missing = gen.let("missing");
            if (useLoop || $data) {
                const valid = gen.let("valid", true);
                cxt.block$data(valid, ()=>loopUntilMissing(missing, valid));
                cxt.ok(valid);
            } else {
                gen.if((0, $6byFQ.checkMissingProp)(cxt, schema, missing));
                (0, $6byFQ.reportMissingProp)(cxt, missing);
                gen.else();
            }
        }
        function loopAllRequired() {
            gen.forOf("prop", schemaCode, (prop)=>{
                cxt.setParams({
                    missingProperty: prop
                });
                gen.if((0, $6byFQ.noPropertyInData)(gen, data, prop, opts.ownProperties), ()=>cxt.error());
            });
        }
        function loopUntilMissing(missing, valid) {
            cxt.setParams({
                missingProperty: missing
            });
            gen.forOf(missing, schemaCode, ()=>{
                gen.assign(valid, (0, $6byFQ.propertyInData)(gen, data, missing, opts.ownProperties));
                gen.if((0, $jyW5U.not)(valid), ()=>{
                    cxt.error();
                    gen.break();
                });
            }, $jyW5U.nil);
        }
    }
};
module.exports.default = $9edabde1cf0a0ab9$var$def;

});

parcelRequire.register("gMdVA", function(module, exports) {
"use strict";
let $c36beed3fe2cea44$var$_ = (t3)=>t3, $c36beed3fe2cea44$var$t, $c36beed3fe2cea44$var$t1, $c36beed3fe2cea44$var$t2;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jyW5U = parcelRequire("jyW5U");
const $c36beed3fe2cea44$var$error = {
    message ({ keyword: keyword , schemaCode: schemaCode  }) {
        const comp = keyword === "maxItems" ? "more" : "fewer";
        return $jyW5U.str($c36beed3fe2cea44$var$t || ($c36beed3fe2cea44$var$t = $c36beed3fe2cea44$var$_`must NOT have ${0} than ${0} items`), comp, schemaCode);
    },
    params: ({ schemaCode: schemaCode  })=>$jyW5U._($c36beed3fe2cea44$var$t1 || ($c36beed3fe2cea44$var$t1 = $c36beed3fe2cea44$var$_`{limit: ${0}}`), schemaCode)
};
const $c36beed3fe2cea44$var$def = {
    keyword: [
        "maxItems",
        "minItems"
    ],
    type: "array",
    schemaType: "number",
    $data: true,
    error: $c36beed3fe2cea44$var$error,
    code (cxt) {
        const { keyword: keyword , data: data , schemaCode: schemaCode  } = cxt;
        const op = keyword === "maxItems" ? $jyW5U.operators.GT : $jyW5U.operators.LT;
        cxt.fail$data($jyW5U._($c36beed3fe2cea44$var$t2 || ($c36beed3fe2cea44$var$t2 = $c36beed3fe2cea44$var$_`${0}.length ${0} ${0}`), data, op, schemaCode));
    }
};
module.exports.default = $c36beed3fe2cea44$var$def;

});

parcelRequire.register("3WUEj", function(module, exports) {
"use strict";
let $2e02bb38026c9802$var$_ = (t17)=>t17, $2e02bb38026c9802$var$t, $2e02bb38026c9802$var$t1, $2e02bb38026c9802$var$t2, $2e02bb38026c9802$var$t3, $2e02bb38026c9802$var$t4, $2e02bb38026c9802$var$t5, $2e02bb38026c9802$var$t6, $2e02bb38026c9802$var$t7, $2e02bb38026c9802$var$t8, $2e02bb38026c9802$var$t9, $2e02bb38026c9802$var$t10, $2e02bb38026c9802$var$t11, $2e02bb38026c9802$var$t12, $2e02bb38026c9802$var$t13, $2e02bb38026c9802$var$t14, $2e02bb38026c9802$var$t15, $2e02bb38026c9802$var$t16;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $j9Fpx = parcelRequire("j9Fpx");

var $jyW5U = parcelRequire("jyW5U");

var $81JIu = parcelRequire("81JIu");

var $8YckL = parcelRequire("8YckL");
const $2e02bb38026c9802$var$error = {
    message: ({ params: { i: i , j: j  }  })=>$jyW5U.str($2e02bb38026c9802$var$t || ($2e02bb38026c9802$var$t = $2e02bb38026c9802$var$_`must NOT have duplicate items (items ## ${0} and ${0} are identical)`), j, i),
    params: ({ params: { i: i , j: j  }  })=>$jyW5U._($2e02bb38026c9802$var$t1 || ($2e02bb38026c9802$var$t1 = $2e02bb38026c9802$var$_`{i: ${0}, j: ${0}}`), i, j)
};
const $2e02bb38026c9802$var$def = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: true,
    error: $2e02bb38026c9802$var$error,
    code (cxt) {
        const { gen: gen , data: data , $data: $data , schema: schema , parentSchema: parentSchema , schemaCode: schemaCode , it: it  } = cxt;
        if (!$data && !schema) return;
        const valid = gen.let("valid");
        const itemTypes = parentSchema.items ? (0, $j9Fpx.getSchemaTypes)(parentSchema.items) : [];
        cxt.block$data(valid, validateUniqueItems, $jyW5U._($2e02bb38026c9802$var$t2 || ($2e02bb38026c9802$var$t2 = $2e02bb38026c9802$var$_`${0} === false`), schemaCode));
        cxt.ok(valid);
        function validateUniqueItems() {
            const i = gen.let("i", $jyW5U._($2e02bb38026c9802$var$t3 || ($2e02bb38026c9802$var$t3 = $2e02bb38026c9802$var$_`${0}.length`), data));
            const j = gen.let("j");
            cxt.setParams({
                i: i,
                j: j
            });
            gen.assign(valid, true);
            gen.if($jyW5U._($2e02bb38026c9802$var$t4 || ($2e02bb38026c9802$var$t4 = $2e02bb38026c9802$var$_`${0} > 1`), i), ()=>(canOptimize() ? loopN : loopN2)(i, j));
        }
        function canOptimize() {
            return itemTypes.length > 0 && !itemTypes.some((t18)=>t18 === "object" || t18 === "array");
        }
        function loopN(i, j) {
            const item = gen.name("item");
            const wrongType = (0, $j9Fpx.checkDataTypes)(itemTypes, item, it.opts.strictNumbers, $j9Fpx.DataType.Wrong);
            const indices = gen.const("indices", $jyW5U._($2e02bb38026c9802$var$t5 || ($2e02bb38026c9802$var$t5 = $2e02bb38026c9802$var$_`{}`)));
            gen.for($jyW5U._($2e02bb38026c9802$var$t6 || ($2e02bb38026c9802$var$t6 = $2e02bb38026c9802$var$_`;${0}--;`), i), ()=>{
                gen.let(item, $jyW5U._($2e02bb38026c9802$var$t7 || ($2e02bb38026c9802$var$t7 = $2e02bb38026c9802$var$_`${0}[${0}]`), data, i));
                gen.if(wrongType, $jyW5U._($2e02bb38026c9802$var$t8 || ($2e02bb38026c9802$var$t8 = $2e02bb38026c9802$var$_`continue`)));
                if (itemTypes.length > 1) gen.if($jyW5U._($2e02bb38026c9802$var$t9 || ($2e02bb38026c9802$var$t9 = $2e02bb38026c9802$var$_`typeof ${0} == "string"`), item), $jyW5U._($2e02bb38026c9802$var$t10 || ($2e02bb38026c9802$var$t10 = $2e02bb38026c9802$var$_`${0} += "_"`), item));
                gen.if($jyW5U._($2e02bb38026c9802$var$t11 || ($2e02bb38026c9802$var$t11 = $2e02bb38026c9802$var$_`typeof ${0}[${0}] == "number"`), indices, item), ()=>{
                    gen.assign(j, $jyW5U._($2e02bb38026c9802$var$t12 || ($2e02bb38026c9802$var$t12 = $2e02bb38026c9802$var$_`${0}[${0}]`), indices, item));
                    cxt.error();
                    gen.assign(valid, false).break();
                }).code($jyW5U._($2e02bb38026c9802$var$t13 || ($2e02bb38026c9802$var$t13 = $2e02bb38026c9802$var$_`${0}[${0}] = ${0}`), indices, item, i));
            });
        }
        function loopN2(i, j) {
            const eql = (0, $81JIu.useFunc)(gen, $8YckL.default);
            const outer = gen.name("outer");
            gen.label(outer).for($jyW5U._($2e02bb38026c9802$var$t14 || ($2e02bb38026c9802$var$t14 = $2e02bb38026c9802$var$_`;${0}--;`), i), ()=>gen.for($jyW5U._($2e02bb38026c9802$var$t15 || ($2e02bb38026c9802$var$t15 = $2e02bb38026c9802$var$_`${0} = ${0}; ${0}--;`), j, i, j), ()=>gen.if($jyW5U._($2e02bb38026c9802$var$t16 || ($2e02bb38026c9802$var$t16 = $2e02bb38026c9802$var$_`${0}(${0}[${0}], ${0}[${0}])`), eql, data, i, data, j), ()=>{
                        cxt.error();
                        gen.assign(valid, false).break(outer);
                    })));
        }
    }
};
module.exports.default = $2e02bb38026c9802$var$def;

});
parcelRequire.register("8YckL", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $bblm1 = parcelRequire("bblm1");
$bblm1.code = 'require("ajv/dist/runtime/equal").default';
module.exports.default = $bblm1;

});


parcelRequire.register("fM2wT", function(module, exports) {
"use strict";
let $02f6aa884f295c1c$var$_ = (t3)=>t3, $02f6aa884f295c1c$var$t, $02f6aa884f295c1c$var$t1, $02f6aa884f295c1c$var$t2;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jyW5U = parcelRequire("jyW5U");

var $81JIu = parcelRequire("81JIu");

var $8YckL = parcelRequire("8YckL");
const $02f6aa884f295c1c$var$error = {
    message: "must be equal to constant",
    params: ({ schemaCode: schemaCode  })=>$jyW5U._($02f6aa884f295c1c$var$t || ($02f6aa884f295c1c$var$t = $02f6aa884f295c1c$var$_`{allowedValue: ${0}}`), schemaCode)
};
const $02f6aa884f295c1c$var$def = {
    keyword: "const",
    $data: true,
    error: $02f6aa884f295c1c$var$error,
    code (cxt) {
        const { gen: gen , data: data , $data: $data , schemaCode: schemaCode , schema: schema  } = cxt;
        if ($data || schema && typeof schema == "object") cxt.fail$data($jyW5U._($02f6aa884f295c1c$var$t1 || ($02f6aa884f295c1c$var$t1 = $02f6aa884f295c1c$var$_`!${0}(${0}, ${0})`), (0, $81JIu.useFunc)(gen, $8YckL.default), data, schemaCode));
        else cxt.fail($jyW5U._($02f6aa884f295c1c$var$t2 || ($02f6aa884f295c1c$var$t2 = $02f6aa884f295c1c$var$_`${0} !== ${0}`), schema, data));
    }
};
module.exports.default = $02f6aa884f295c1c$var$def;

});

parcelRequire.register("dilnh", function(module, exports) {
"use strict";
let $9add89563209dfec$var$_ = (t4)=>t4, $9add89563209dfec$var$t, $9add89563209dfec$var$t1, $9add89563209dfec$var$t2, $9add89563209dfec$var$t3;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jyW5U = parcelRequire("jyW5U");

var $81JIu = parcelRequire("81JIu");

var $8YckL = parcelRequire("8YckL");
const $9add89563209dfec$var$error = {
    message: "must be equal to one of the allowed values",
    params: ({ schemaCode: schemaCode  })=>$jyW5U._($9add89563209dfec$var$t || ($9add89563209dfec$var$t = $9add89563209dfec$var$_`{allowedValues: ${0}}`), schemaCode)
};
const $9add89563209dfec$var$def = {
    keyword: "enum",
    schemaType: "array",
    $data: true,
    error: $9add89563209dfec$var$error,
    code (cxt) {
        const { gen: gen , data: data , $data: $data , schema: schema , schemaCode: schemaCode , it: it  } = cxt;
        if (!$data && schema.length === 0) throw new Error("enum must have non-empty array");
        const useLoop = schema.length >= it.opts.loopEnum;
        let eql;
        const getEql = ()=>eql !== null && eql !== void 0 ? eql : eql = (0, $81JIu.useFunc)(gen, $8YckL.default);
        let valid;
        if (useLoop || $data) {
            valid = gen.let("valid");
            cxt.block$data(valid, loopEnum);
        } else {
            /* istanbul ignore if */ if (!Array.isArray(schema)) throw new Error("ajv implementation error");
            const vSchema = gen.const("vSchema", schemaCode);
            valid = (0, $jyW5U.or)(...schema.map((_x, i)=>equalCode(vSchema, i)));
        }
        cxt.pass(valid);
        function loopEnum() {
            gen.assign(valid, false);
            gen.forOf("v", schemaCode, (v)=>gen.if($jyW5U._($9add89563209dfec$var$t1 || ($9add89563209dfec$var$t1 = $9add89563209dfec$var$_`${0}(${0}, ${0})`), getEql(), data, v), ()=>gen.assign(valid, true).break()));
        }
        function equalCode(vSchema, i) {
            const sch = schema[i];
            return typeof sch === "object" && sch !== null ? $jyW5U._($9add89563209dfec$var$t2 || ($9add89563209dfec$var$t2 = $9add89563209dfec$var$_`${0}(${0}, ${0}[${0}])`), getEql(), data, vSchema, i) : $jyW5U._($9add89563209dfec$var$t3 || ($9add89563209dfec$var$t3 = $9add89563209dfec$var$_`${0} === ${0}`), data, sch);
        }
    }
};
module.exports.default = $9add89563209dfec$var$def;

});


parcelRequire.register("k2WFn", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $1Wacj = parcelRequire("1Wacj");

var $3s8Gc = parcelRequire("3s8Gc");

var $6Mdbl = parcelRequire("6Mdbl");

var $k8Vzd = parcelRequire("k8Vzd");

var $5Gh9U = parcelRequire("5Gh9U");

var $gQXPa = parcelRequire("gQXPa");

var $jTayI = parcelRequire("jTayI");

var $g1AnU = parcelRequire("g1AnU");

var $9lLdk = parcelRequire("9lLdk");

var $lzPVr = parcelRequire("lzPVr");

var $4CVkt = parcelRequire("4CVkt");

var $30IhX = parcelRequire("30IhX");

var $a9n13 = parcelRequire("a9n13");

var $dyu5D = parcelRequire("dyu5D");

var $bdJjL = parcelRequire("bdJjL");

var $7Mi3o = parcelRequire("7Mi3o");
function $e981807c94002612$var$getApplicator(draft2020 = false) {
    const applicator = [
        // any
        $4CVkt.default,
        $30IhX.default,
        $a9n13.default,
        $dyu5D.default,
        $bdJjL.default,
        $7Mi3o.default,
        // object
        $jTayI.default,
        $g1AnU.default,
        $gQXPa.default,
        $9lLdk.default,
        $lzPVr.default, 
    ];
    // array
    if (draft2020) applicator.push($3s8Gc.default, $k8Vzd.default);
    else applicator.push($1Wacj.default, $6Mdbl.default);
    applicator.push($5Gh9U.default);
    return applicator;
}
module.exports.default = $e981807c94002612$var$getApplicator;

});
parcelRequire.register("1Wacj", function(module, exports) {
"use strict";
let $16931e45f58f505f$var$_ = (t5)=>t5, $16931e45f58f505f$var$t, $16931e45f58f505f$var$t1, $16931e45f58f505f$var$t2, $16931e45f58f505f$var$t3, $16931e45f58f505f$var$t4;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.validateAdditionalItems = void 0;

var $jyW5U = parcelRequire("jyW5U");

var $81JIu = parcelRequire("81JIu");
const $16931e45f58f505f$var$error = {
    message: ({ params: { len: len  }  })=>$jyW5U.str($16931e45f58f505f$var$t || ($16931e45f58f505f$var$t = $16931e45f58f505f$var$_`must NOT have more than ${0} items`), len),
    params: ({ params: { len: len  }  })=>$jyW5U._($16931e45f58f505f$var$t1 || ($16931e45f58f505f$var$t1 = $16931e45f58f505f$var$_`{limit: ${0}}`), len)
};
const $16931e45f58f505f$var$def = {
    keyword: "additionalItems",
    type: "array",
    schemaType: [
        "boolean",
        "object"
    ],
    before: "uniqueItems",
    error: $16931e45f58f505f$var$error,
    code (cxt) {
        const { parentSchema: parentSchema , it: it  } = cxt;
        const { items: items  } = parentSchema;
        if (!Array.isArray(items)) {
            (0, $81JIu.checkStrictMode)(it, '"additionalItems" is ignored when "items" is not an array of schemas');
            return;
        }
        $16931e45f58f505f$var$validateAdditionalItems(cxt, items);
    }
};
function $16931e45f58f505f$var$validateAdditionalItems(cxt, items) {
    const { gen: gen , schema: schema , data: data , keyword: keyword , it: it  } = cxt;
    it.items = true;
    const len = gen.const("len", $jyW5U._($16931e45f58f505f$var$t2 || ($16931e45f58f505f$var$t2 = $16931e45f58f505f$var$_`${0}.length`), data));
    if (schema === false) {
        cxt.setParams({
            len: items.length
        });
        cxt.pass($jyW5U._($16931e45f58f505f$var$t3 || ($16931e45f58f505f$var$t3 = $16931e45f58f505f$var$_`${0} <= ${0}`), len, items.length));
    } else if (typeof schema == "object" && !(0, $81JIu.alwaysValidSchema)(it, schema)) {
        const valid = gen.var("valid", $jyW5U._($16931e45f58f505f$var$t4 || ($16931e45f58f505f$var$t4 = $16931e45f58f505f$var$_`${0} <= ${0}`), len, items.length)); // TODO var
        gen.if((0, $jyW5U.not)(valid), ()=>validateItems(valid));
        cxt.ok(valid);
    }
    function validateItems(valid) {
        gen.forRange("i", items.length, len, (i)=>{
            cxt.subschema({
                keyword: keyword,
                dataProp: i,
                dataPropType: $81JIu.Type.Num
            }, valid);
            if (!it.allErrors) gen.if((0, $jyW5U.not)(valid), ()=>gen.break());
        });
    }
}
module.exports.validateAdditionalItems = $16931e45f58f505f$var$validateAdditionalItems;
module.exports.default = $16931e45f58f505f$var$def;

});

parcelRequire.register("3s8Gc", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $6Mdbl = parcelRequire("6Mdbl");
const $283ab8326d904da5$var$def = {
    keyword: "prefixItems",
    type: "array",
    schemaType: [
        "array"
    ],
    before: "uniqueItems",
    code: (cxt)=>(0, $6Mdbl.validateTuple)(cxt, "items")
};
module.exports.default = $283ab8326d904da5$var$def;

});
parcelRequire.register("6Mdbl", function(module, exports) {
"use strict";
let $4ef1737647421dc4$var$_ = (t2)=>t2, $4ef1737647421dc4$var$t, $4ef1737647421dc4$var$t1;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.validateTuple = void 0;

var $jyW5U = parcelRequire("jyW5U");

var $81JIu = parcelRequire("81JIu");

var $6byFQ = parcelRequire("6byFQ");
const $4ef1737647421dc4$var$def = {
    keyword: "items",
    type: "array",
    schemaType: [
        "object",
        "array",
        "boolean"
    ],
    before: "uniqueItems",
    code (cxt) {
        const { schema: schema , it: it  } = cxt;
        if (Array.isArray(schema)) return $4ef1737647421dc4$var$validateTuple(cxt, "additionalItems", schema);
        it.items = true;
        if ((0, $81JIu.alwaysValidSchema)(it, schema)) return;
        cxt.ok((0, $6byFQ.validateArray)(cxt));
    }
};
function $4ef1737647421dc4$var$validateTuple(cxt, extraItems, schArr = cxt.schema) {
    const { gen: gen , parentSchema: parentSchema , data: data , keyword: keyword , it: it  } = cxt;
    checkStrictTuple(parentSchema);
    if (it.opts.unevaluated && schArr.length && it.items !== true) it.items = $81JIu.mergeEvaluated.items(gen, schArr.length, it.items);
    const valid = gen.name("valid");
    const len = gen.const("len", $jyW5U._($4ef1737647421dc4$var$t || ($4ef1737647421dc4$var$t = $4ef1737647421dc4$var$_`${0}.length`), data));
    schArr.forEach((sch, i)=>{
        if ((0, $81JIu.alwaysValidSchema)(it, sch)) return;
        gen.if($jyW5U._($4ef1737647421dc4$var$t1 || ($4ef1737647421dc4$var$t1 = $4ef1737647421dc4$var$_`${0} > ${0}`), len, i), ()=>cxt.subschema({
                keyword: keyword,
                schemaProp: i,
                dataProp: i
            }, valid));
        cxt.ok(valid);
    });
    function checkStrictTuple(sch) {
        const { opts: opts , errSchemaPath: errSchemaPath  } = it;
        const l = schArr.length;
        const fullTuple = l === sch.minItems && (l === sch.maxItems || sch[extraItems] === false);
        if (opts.strictTuples && !fullTuple) {
            const msg = `"${keyword}" is ${l}-tuple, but minItems or maxItems/${extraItems} are not specified or different at path "${errSchemaPath}"`;
            (0, $81JIu.checkStrictMode)(it, msg, opts.strictTuples);
        }
    }
}
module.exports.validateTuple = $4ef1737647421dc4$var$validateTuple;
module.exports.default = $4ef1737647421dc4$var$def;

});


parcelRequire.register("k8Vzd", function(module, exports) {
"use strict";
let $eaa13597d01e0e6e$var$_ = (t2)=>t2, $eaa13597d01e0e6e$var$t, $eaa13597d01e0e6e$var$t1;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jyW5U = parcelRequire("jyW5U");

var $81JIu = parcelRequire("81JIu");

var $6byFQ = parcelRequire("6byFQ");

var $1Wacj = parcelRequire("1Wacj");
const $eaa13597d01e0e6e$var$error = {
    message: ({ params: { len: len  }  })=>$jyW5U.str($eaa13597d01e0e6e$var$t || ($eaa13597d01e0e6e$var$t = $eaa13597d01e0e6e$var$_`must NOT have more than ${0} items`), len),
    params: ({ params: { len: len  }  })=>$jyW5U._($eaa13597d01e0e6e$var$t1 || ($eaa13597d01e0e6e$var$t1 = $eaa13597d01e0e6e$var$_`{limit: ${0}}`), len)
};
const $eaa13597d01e0e6e$var$def = {
    keyword: "items",
    type: "array",
    schemaType: [
        "object",
        "boolean"
    ],
    before: "uniqueItems",
    error: $eaa13597d01e0e6e$var$error,
    code (cxt) {
        const { schema: schema , parentSchema: parentSchema , it: it  } = cxt;
        const { prefixItems: prefixItems  } = parentSchema;
        it.items = true;
        if ((0, $81JIu.alwaysValidSchema)(it, schema)) return;
        if (prefixItems) (0, $1Wacj.validateAdditionalItems)(cxt, prefixItems);
        else cxt.ok((0, $6byFQ.validateArray)(cxt));
    }
};
module.exports.default = $eaa13597d01e0e6e$var$def;

});

parcelRequire.register("5Gh9U", function(module, exports) {
"use strict";
let $422e2f5b88a3aff6$var$_ = (t12)=>t12, $422e2f5b88a3aff6$var$t, $422e2f5b88a3aff6$var$t1, $422e2f5b88a3aff6$var$t2, $422e2f5b88a3aff6$var$t3, $422e2f5b88a3aff6$var$t4, $422e2f5b88a3aff6$var$t5, $422e2f5b88a3aff6$var$t6, $422e2f5b88a3aff6$var$t7, $422e2f5b88a3aff6$var$t8, $422e2f5b88a3aff6$var$t9, $422e2f5b88a3aff6$var$t10, $422e2f5b88a3aff6$var$t11;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jyW5U = parcelRequire("jyW5U");

var $81JIu = parcelRequire("81JIu");
const $422e2f5b88a3aff6$var$error = {
    message: ({ params: { min: min , max: max  }  })=>max === undefined ? $jyW5U.str($422e2f5b88a3aff6$var$t || ($422e2f5b88a3aff6$var$t = $422e2f5b88a3aff6$var$_`must contain at least ${0} valid item(s)`), min) : $jyW5U.str($422e2f5b88a3aff6$var$t1 || ($422e2f5b88a3aff6$var$t1 = $422e2f5b88a3aff6$var$_`must contain at least ${0} and no more than ${0} valid item(s)`), min, max),
    params: ({ params: { min: min , max: max  }  })=>max === undefined ? $jyW5U._($422e2f5b88a3aff6$var$t2 || ($422e2f5b88a3aff6$var$t2 = $422e2f5b88a3aff6$var$_`{minContains: ${0}}`), min) : $jyW5U._($422e2f5b88a3aff6$var$t3 || ($422e2f5b88a3aff6$var$t3 = $422e2f5b88a3aff6$var$_`{minContains: ${0}, maxContains: ${0}}`), min, max)
};
const $422e2f5b88a3aff6$var$def = {
    keyword: "contains",
    type: "array",
    schemaType: [
        "object",
        "boolean"
    ],
    before: "uniqueItems",
    trackErrors: true,
    error: $422e2f5b88a3aff6$var$error,
    code (cxt) {
        const { gen: gen , schema: schema , parentSchema: parentSchema , data: data , it: it  } = cxt;
        let min;
        let max;
        const { minContains: minContains , maxContains: maxContains  } = parentSchema;
        if (it.opts.next) {
            min = minContains === undefined ? 1 : minContains;
            max = maxContains;
        } else min = 1;
        const len = gen.const("len", $jyW5U._($422e2f5b88a3aff6$var$t4 || ($422e2f5b88a3aff6$var$t4 = $422e2f5b88a3aff6$var$_`${0}.length`), data));
        cxt.setParams({
            min: min,
            max: max
        });
        if (max === undefined && min === 0) {
            (0, $81JIu.checkStrictMode)(it, `"minContains" == 0 without "maxContains": "contains" keyword ignored`);
            return;
        }
        if (max !== undefined && min > max) {
            (0, $81JIu.checkStrictMode)(it, `"minContains" > "maxContains" is always invalid`);
            cxt.fail();
            return;
        }
        if ((0, $81JIu.alwaysValidSchema)(it, schema)) {
            let cond = $jyW5U._($422e2f5b88a3aff6$var$t5 || ($422e2f5b88a3aff6$var$t5 = $422e2f5b88a3aff6$var$_`${0} >= ${0}`), len, min);
            if (max !== undefined) cond = $jyW5U._($422e2f5b88a3aff6$var$t6 || ($422e2f5b88a3aff6$var$t6 = $422e2f5b88a3aff6$var$_`${0} && ${0} <= ${0}`), cond, len, max);
            cxt.pass(cond);
            return;
        }
        it.items = true;
        const valid = gen.name("valid");
        if (max === undefined && min === 1) validateItems(valid, ()=>gen.if(valid, ()=>gen.break()));
        else if (min === 0) {
            gen.let(valid, true);
            if (max !== undefined) gen.if($jyW5U._($422e2f5b88a3aff6$var$t7 || ($422e2f5b88a3aff6$var$t7 = $422e2f5b88a3aff6$var$_`${0}.length > 0`), data), validateItemsWithCount);
        } else {
            gen.let(valid, false);
            validateItemsWithCount();
        }
        cxt.result(valid, ()=>cxt.reset());
        function validateItemsWithCount() {
            const schValid = gen.name("_valid");
            const count = gen.let("count", 0);
            validateItems(schValid, ()=>gen.if(schValid, ()=>checkLimits(count)));
        }
        function validateItems(_valid, block) {
            gen.forRange("i", 0, len, (i)=>{
                cxt.subschema({
                    keyword: "contains",
                    dataProp: i,
                    dataPropType: $81JIu.Type.Num,
                    compositeRule: true
                }, _valid);
                block();
            });
        }
        function checkLimits(count) {
            gen.code($jyW5U._($422e2f5b88a3aff6$var$t8 || ($422e2f5b88a3aff6$var$t8 = $422e2f5b88a3aff6$var$_`${0}++`), count));
            if (max === undefined) gen.if($jyW5U._($422e2f5b88a3aff6$var$t9 || ($422e2f5b88a3aff6$var$t9 = $422e2f5b88a3aff6$var$_`${0} >= ${0}`), count, min), ()=>gen.assign(valid, true).break());
            else {
                gen.if($jyW5U._($422e2f5b88a3aff6$var$t10 || ($422e2f5b88a3aff6$var$t10 = $422e2f5b88a3aff6$var$_`${0} > ${0}`), count, max), ()=>gen.assign(valid, false).break());
                if (min === 1) gen.assign(valid, true);
                else gen.if($jyW5U._($422e2f5b88a3aff6$var$t11 || ($422e2f5b88a3aff6$var$t11 = $422e2f5b88a3aff6$var$_`${0} >= ${0}`), count, min), ()=>gen.assign(valid, true));
            }
        }
    }
};
module.exports.default = $422e2f5b88a3aff6$var$def;

});

parcelRequire.register("gQXPa", function(module, exports) {
"use strict";
let $c44fe887f32999eb$var$_ = (t3)=>t3, $c44fe887f32999eb$var$t, $c44fe887f32999eb$var$t1, $c44fe887f32999eb$var$t2;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.validateSchemaDeps = module.exports.validatePropertyDeps = module.exports.error = void 0;

var $jyW5U = parcelRequire("jyW5U");

var $81JIu = parcelRequire("81JIu");

var $6byFQ = parcelRequire("6byFQ");
module.exports.error = {
    message: ({ params: { property: property , depsCount: depsCount , deps: deps  }  })=>{
        const property_ies = depsCount === 1 ? "property" : "properties";
        return $jyW5U.str($c44fe887f32999eb$var$t || ($c44fe887f32999eb$var$t = $c44fe887f32999eb$var$_`must have ${0} ${0} when property ${0} is present`), property_ies, deps, property);
    },
    params: ({ params: { property: property , depsCount: depsCount , deps: deps , missingProperty: missingProperty  }  })=>$jyW5U._($c44fe887f32999eb$var$t1 || ($c44fe887f32999eb$var$t1 = $c44fe887f32999eb$var$_`{property: ${0},
    missingProperty: ${0},
    depsCount: ${0},
    deps: ${0}}`), property, missingProperty, depsCount, deps)
};
const $c44fe887f32999eb$var$def = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: module.exports.error,
    code (cxt) {
        const [propDeps, schDeps] = $c44fe887f32999eb$var$splitDependencies(cxt);
        $c44fe887f32999eb$var$validatePropertyDeps(cxt, propDeps);
        $c44fe887f32999eb$var$validateSchemaDeps(cxt, schDeps);
    }
};
function $c44fe887f32999eb$var$splitDependencies({ schema: schema  }) {
    const propertyDeps = {};
    const schemaDeps = {};
    for(const key in schema){
        if (key === "__proto__") continue;
        const deps = Array.isArray(schema[key]) ? propertyDeps : schemaDeps;
        deps[key] = schema[key];
    }
    return [
        propertyDeps,
        schemaDeps
    ];
}
function $c44fe887f32999eb$var$validatePropertyDeps(cxt, propertyDeps = cxt.schema) {
    const { gen: gen , data: data , it: it  } = cxt;
    if (Object.keys(propertyDeps).length === 0) return;
    const missing = gen.let("missing");
    for(const prop in propertyDeps){
        const deps = propertyDeps[prop];
        if (deps.length === 0) continue;
        const hasProperty = (0, $6byFQ.propertyInData)(gen, data, prop, it.opts.ownProperties);
        cxt.setParams({
            property: prop,
            depsCount: deps.length,
            deps: deps.join(", ")
        });
        if (it.allErrors) gen.if(hasProperty, ()=>{
            for (const depProp of deps)(0, $6byFQ.checkReportMissingProp)(cxt, depProp);
        });
        else {
            gen.if($jyW5U._($c44fe887f32999eb$var$t2 || ($c44fe887f32999eb$var$t2 = $c44fe887f32999eb$var$_`${0} && (${0})`), hasProperty, (0, $6byFQ.checkMissingProp)(cxt, deps, missing)));
            (0, $6byFQ.reportMissingProp)(cxt, missing);
            gen.else();
        }
    }
}
module.exports.validatePropertyDeps = $c44fe887f32999eb$var$validatePropertyDeps;
function $c44fe887f32999eb$var$validateSchemaDeps(cxt, schemaDeps = cxt.schema) {
    const { gen: gen , data: data , keyword: keyword , it: it  } = cxt;
    const valid = gen.name("valid");
    for(const prop in schemaDeps){
        if ((0, $81JIu.alwaysValidSchema)(it, schemaDeps[prop])) continue;
        gen.if((0, $6byFQ.propertyInData)(gen, data, prop, it.opts.ownProperties), ()=>{
            const schCxt = cxt.subschema({
                keyword: keyword,
                schemaProp: prop
            }, valid);
            cxt.mergeValidEvaluated(schCxt, valid);
        }, ()=>gen.var(valid, true) // TODO var
        );
        cxt.ok(valid);
    }
}
module.exports.validateSchemaDeps = $c44fe887f32999eb$var$validateSchemaDeps;
module.exports.default = $c44fe887f32999eb$var$def;

});

parcelRequire.register("jTayI", function(module, exports) {
"use strict";
let $e7ab582d7ce2432a$var$_ = (t1)=>t1, $e7ab582d7ce2432a$var$t;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jyW5U = parcelRequire("jyW5U");

var $81JIu = parcelRequire("81JIu");
const $e7ab582d7ce2432a$var$error = {
    message: "property name must be valid",
    params: ({ params: params  })=>$jyW5U._($e7ab582d7ce2432a$var$t || ($e7ab582d7ce2432a$var$t = $e7ab582d7ce2432a$var$_`{propertyName: ${0}}`), params.propertyName)
};
const $e7ab582d7ce2432a$var$def = {
    keyword: "propertyNames",
    type: "object",
    schemaType: [
        "object",
        "boolean"
    ],
    error: $e7ab582d7ce2432a$var$error,
    code (cxt) {
        const { gen: gen , schema: schema , data: data , it: it  } = cxt;
        if ((0, $81JIu.alwaysValidSchema)(it, schema)) return;
        const valid = gen.name("valid");
        gen.forIn("key", data, (key)=>{
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
            gen.if((0, $jyW5U.not)(valid), ()=>{
                cxt.error(true);
                if (!it.allErrors) gen.break();
            });
        });
        cxt.ok(valid);
    }
};
module.exports.default = $e7ab582d7ce2432a$var$def;

});

parcelRequire.register("g1AnU", function(module, exports) {
"use strict";
let $baa8f693e053b53e$var$_ = (t5)=>t5, $baa8f693e053b53e$var$t, $baa8f693e053b53e$var$t1, $baa8f693e053b53e$var$t2, $baa8f693e053b53e$var$t3, $baa8f693e053b53e$var$t4;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $6byFQ = parcelRequire("6byFQ");

var $jyW5U = parcelRequire("jyW5U");

var $2m10X = parcelRequire("2m10X");

var $81JIu = parcelRequire("81JIu");
const $baa8f693e053b53e$var$error = {
    message: "must NOT have additional properties",
    params: ({ params: params  })=>$jyW5U._($baa8f693e053b53e$var$t || ($baa8f693e053b53e$var$t = $baa8f693e053b53e$var$_`{additionalProperty: ${0}}`), params.additionalProperty)
};
const $baa8f693e053b53e$var$def = {
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
    error: $baa8f693e053b53e$var$error,
    code (cxt) {
        const { gen: gen , schema: schema , parentSchema: parentSchema , data: data , errsCount: errsCount , it: it  } = cxt;
        /* istanbul ignore if */ if (!errsCount) throw new Error("ajv implementation error");
        const { allErrors: allErrors , opts: opts  } = it;
        it.props = true;
        if (opts.removeAdditional !== "all" && (0, $81JIu.alwaysValidSchema)(it, schema)) return;
        const props = (0, $6byFQ.allSchemaProperties)(parentSchema.properties);
        const patProps = (0, $6byFQ.allSchemaProperties)(parentSchema.patternProperties);
        checkAdditionalProperties();
        cxt.ok($jyW5U._($baa8f693e053b53e$var$t1 || ($baa8f693e053b53e$var$t1 = $baa8f693e053b53e$var$_`${0} === ${0}`), errsCount, $2m10X.default.errors));
        function checkAdditionalProperties() {
            gen.forIn("key", data, (key)=>{
                if (!props.length && !patProps.length) additionalPropertyCode(key);
                else gen.if(isAdditional(key), ()=>additionalPropertyCode(key));
            });
        }
        function isAdditional(key) {
            let definedProp;
            if (props.length > 8) {
                // TODO maybe an option instead of hard-coded 8?
                const propsSchema = (0, $81JIu.schemaRefOrVal)(it, parentSchema.properties, "properties");
                definedProp = (0, $6byFQ.isOwnProperty)(gen, propsSchema, key);
            } else if (props.length) definedProp = (0, $jyW5U.or)(...props.map((p)=>$jyW5U._($baa8f693e053b53e$var$t2 || ($baa8f693e053b53e$var$t2 = $baa8f693e053b53e$var$_`${0} === ${0}`), key, p)));
            else definedProp = $jyW5U.nil;
            if (patProps.length) definedProp = (0, $jyW5U.or)(definedProp, ...patProps.map((p)=>$jyW5U._($baa8f693e053b53e$var$t3 || ($baa8f693e053b53e$var$t3 = $baa8f693e053b53e$var$_`${0}.test(${0})`), (0, $6byFQ.usePattern)(cxt, p), key)));
            return (0, $jyW5U.not)(definedProp);
        }
        function deleteAdditional(key) {
            gen.code($jyW5U._($baa8f693e053b53e$var$t4 || ($baa8f693e053b53e$var$t4 = $baa8f693e053b53e$var$_`delete ${0}[${0}]`), data, key));
        }
        function additionalPropertyCode(key) {
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
            if (typeof schema == "object" && !(0, $81JIu.alwaysValidSchema)(it, schema)) {
                const valid = gen.name("valid");
                if (opts.removeAdditional === "failing") {
                    applyAdditionalSchema(key, valid, false);
                    gen.if((0, $jyW5U.not)(valid), ()=>{
                        cxt.reset();
                        deleteAdditional(key);
                    });
                } else {
                    applyAdditionalSchema(key, valid);
                    if (!allErrors) gen.if((0, $jyW5U.not)(valid), ()=>gen.break());
                }
            }
        }
        function applyAdditionalSchema(key, valid, errors) {
            const subschema = {
                keyword: "additionalProperties",
                dataProp: key,
                dataPropType: $81JIu.Type.Str
            };
            if (errors === false) Object.assign(subschema, {
                compositeRule: true,
                createErrors: false,
                allErrors: false
            });
            cxt.subschema(subschema, valid);
        }
    }
};
module.exports.default = $baa8f693e053b53e$var$def;

});

parcelRequire.register("9lLdk", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $stx26 = parcelRequire("stx26");

var $6byFQ = parcelRequire("6byFQ");

var $81JIu = parcelRequire("81JIu");

var $g1AnU = parcelRequire("g1AnU");
const $6ceab2f4b7c3cb47$var$def = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code (cxt) {
        const { gen: gen , schema: schema , parentSchema: parentSchema , data: data , it: it  } = cxt;
        if (it.opts.removeAdditional === "all" && parentSchema.additionalProperties === undefined) $g1AnU.default.code(new $stx26.KeywordCxt(it, $g1AnU.default, "additionalProperties"));
        const allProps = (0, $6byFQ.allSchemaProperties)(schema);
        for (const prop2 of allProps)it.definedProperties.add(prop2);
        if (it.opts.unevaluated && allProps.length && it.props !== true) it.props = $81JIu.mergeEvaluated.props(gen, (0, $81JIu.toHash)(allProps), it.props);
        const properties = allProps.filter((p)=>!(0, $81JIu.alwaysValidSchema)(it, schema[p]));
        if (properties.length === 0) return;
        const valid = gen.name("valid");
        for (const prop1 of properties){
            if (hasDefault(prop1)) applyPropertySchema(prop1);
            else {
                gen.if((0, $6byFQ.propertyInData)(gen, data, prop1, it.opts.ownProperties));
                applyPropertySchema(prop1);
                if (!it.allErrors) gen.else().var(valid, true);
                gen.endIf();
            }
            cxt.it.definedProperties.add(prop1);
            cxt.ok(valid);
        }
        function hasDefault(prop) {
            return it.opts.useDefaults && !it.compositeRule && schema[prop].default !== undefined;
        }
        function applyPropertySchema(prop) {
            cxt.subschema({
                keyword: "properties",
                schemaProp: prop,
                dataProp: prop
            }, valid);
        }
    }
};
module.exports.default = $6ceab2f4b7c3cb47$var$def;

});

parcelRequire.register("lzPVr", function(module, exports) {
"use strict";
let $fb55253161711806$var$_ = (t2)=>t2, $fb55253161711806$var$t, $fb55253161711806$var$t1;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $6byFQ = parcelRequire("6byFQ");

var $jyW5U = parcelRequire("jyW5U");

var $81JIu = parcelRequire("81JIu");

var $81JIu = parcelRequire("81JIu");
const $fb55253161711806$var$def = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code (cxt) {
        const { gen: gen , schema: schema , data: data , parentSchema: parentSchema , it: it  } = cxt;
        const { opts: opts  } = it;
        const patterns = (0, $6byFQ.allSchemaProperties)(schema);
        const alwaysValidPatterns = patterns.filter((p)=>(0, $81JIu.alwaysValidSchema)(it, schema[p]));
        if (patterns.length === 0 || alwaysValidPatterns.length === patterns.length && (!it.opts.unevaluated || it.props === true)) return;
        const checkProperties = opts.strictSchema && !opts.allowMatchingProperties && parentSchema.properties;
        const valid = gen.name("valid");
        if (it.props !== true && !(it.props instanceof $jyW5U.Name)) it.props = (0, $81JIu.evaluatedPropsToName)(gen, it.props);
        const { props: props  } = it;
        validatePatternProperties();
        function validatePatternProperties() {
            for (const pat of patterns){
                if (checkProperties) checkMatchingProperties(pat);
                if (it.allErrors) validateProperties(pat);
                else {
                    gen.var(valid, true); // TODO var
                    validateProperties(pat);
                    gen.if(valid);
                }
            }
        }
        function checkMatchingProperties(pat) {
            for(const prop in checkProperties)if (new RegExp(pat).test(prop)) (0, $81JIu.checkStrictMode)(it, `property ${prop} matches pattern ${pat} (use allowMatchingProperties)`);
        }
        function validateProperties(pat) {
            gen.forIn("key", data, (key)=>{
                gen.if($jyW5U._($fb55253161711806$var$t || ($fb55253161711806$var$t = $fb55253161711806$var$_`${0}.test(${0})`), (0, $6byFQ.usePattern)(cxt, pat), key), ()=>{
                    const alwaysValid = alwaysValidPatterns.includes(pat);
                    if (!alwaysValid) cxt.subschema({
                        keyword: "patternProperties",
                        schemaProp: pat,
                        dataProp: key,
                        dataPropType: $81JIu.Type.Str
                    }, valid);
                    if (it.opts.unevaluated && props !== true) gen.assign($jyW5U._($fb55253161711806$var$t1 || ($fb55253161711806$var$t1 = $fb55253161711806$var$_`${0}[${0}]`), props, key), true);
                    else if (!alwaysValid && !it.allErrors) // can short-circuit if `unevaluatedProperties` is not supported (opts.next === false)
                    // or if all properties were evaluated (props === true)
                    gen.if((0, $jyW5U.not)(valid), ()=>gen.break());
                });
            });
        }
    }
};
module.exports.default = $fb55253161711806$var$def;

});

parcelRequire.register("4CVkt", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $81JIu = parcelRequire("81JIu");
const $35e72e6a4da541fc$var$def = {
    keyword: "not",
    schemaType: [
        "object",
        "boolean"
    ],
    trackErrors: true,
    code (cxt) {
        const { gen: gen , schema: schema , it: it  } = cxt;
        if ((0, $81JIu.alwaysValidSchema)(it, schema)) {
            cxt.fail();
            return;
        }
        const valid = gen.name("valid");
        cxt.subschema({
            keyword: "not",
            compositeRule: true,
            createErrors: false,
            allErrors: false
        }, valid);
        cxt.failResult(valid, ()=>cxt.reset(), ()=>cxt.error());
    },
    error: {
        message: "must NOT be valid"
    }
};
module.exports.default = $35e72e6a4da541fc$var$def;

});

parcelRequire.register("30IhX", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $6byFQ = parcelRequire("6byFQ");
const $2313b9fb5ad7962e$var$def = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: true,
    code: $6byFQ.validateUnion,
    error: {
        message: "must match a schema in anyOf"
    }
};
module.exports.default = $2313b9fb5ad7962e$var$def;

});

parcelRequire.register("a9n13", function(module, exports) {
"use strict";
let $763c992302b8d3e1$var$_ = (t3)=>t3, $763c992302b8d3e1$var$t, $763c992302b8d3e1$var$t1, $763c992302b8d3e1$var$t2;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jyW5U = parcelRequire("jyW5U");

var $81JIu = parcelRequire("81JIu");
const $763c992302b8d3e1$var$error = {
    message: "must match exactly one schema in oneOf",
    params: ({ params: params  })=>$jyW5U._($763c992302b8d3e1$var$t || ($763c992302b8d3e1$var$t = $763c992302b8d3e1$var$_`{passingSchemas: ${0}}`), params.passing)
};
const $763c992302b8d3e1$var$def = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: true,
    error: $763c992302b8d3e1$var$error,
    code (cxt) {
        const { gen: gen , schema: schema , parentSchema: parentSchema , it: it  } = cxt;
        /* istanbul ignore if */ if (!Array.isArray(schema)) throw new Error("ajv implementation error");
        if (it.opts.discriminator && parentSchema.discriminator) return;
        const schArr = schema;
        const valid = gen.let("valid", false);
        const passing = gen.let("passing", null);
        const schValid = gen.name("_valid");
        cxt.setParams({
            passing: passing
        });
        // TODO possibly fail straight away (with warning or exception) if there are two empty always valid schemas
        gen.block(validateOneOf);
        cxt.result(valid, ()=>cxt.reset(), ()=>cxt.error(true));
        function validateOneOf() {
            schArr.forEach((sch, i)=>{
                let schCxt;
                if ((0, $81JIu.alwaysValidSchema)(it, sch)) gen.var(schValid, true);
                else schCxt = cxt.subschema({
                    keyword: "oneOf",
                    schemaProp: i,
                    compositeRule: true
                }, schValid);
                if (i > 0) gen.if($jyW5U._($763c992302b8d3e1$var$t1 || ($763c992302b8d3e1$var$t1 = $763c992302b8d3e1$var$_`${0} && ${0}`), schValid, valid)).assign(valid, false).assign(passing, $jyW5U._($763c992302b8d3e1$var$t2 || ($763c992302b8d3e1$var$t2 = $763c992302b8d3e1$var$_`[${0}, ${0}]`), passing, i)).else();
                gen.if(schValid, ()=>{
                    gen.assign(valid, true);
                    gen.assign(passing, i);
                    if (schCxt) cxt.mergeEvaluated(schCxt, $jyW5U.Name);
                });
            });
        }
    }
};
module.exports.default = $763c992302b8d3e1$var$def;

});

parcelRequire.register("dyu5D", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $81JIu = parcelRequire("81JIu");
const $9de5ca8ee89c150d$var$def = {
    keyword: "allOf",
    schemaType: "array",
    code (cxt) {
        const { gen: gen , schema: schema , it: it  } = cxt;
        /* istanbul ignore if */ if (!Array.isArray(schema)) throw new Error("ajv implementation error");
        const valid = gen.name("valid");
        schema.forEach((sch, i)=>{
            if ((0, $81JIu.alwaysValidSchema)(it, sch)) return;
            const schCxt = cxt.subschema({
                keyword: "allOf",
                schemaProp: i
            }, valid);
            cxt.ok(valid);
            cxt.mergeEvaluated(schCxt);
        });
    }
};
module.exports.default = $9de5ca8ee89c150d$var$def;

});

parcelRequire.register("bdJjL", function(module, exports) {
"use strict";
let $82b40fcbe3f110eb$var$_ = (t3)=>t3, $82b40fcbe3f110eb$var$t, $82b40fcbe3f110eb$var$t1, $82b40fcbe3f110eb$var$t2;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jyW5U = parcelRequire("jyW5U");

var $81JIu = parcelRequire("81JIu");
const $82b40fcbe3f110eb$var$error = {
    message: ({ params: params  })=>$jyW5U.str($82b40fcbe3f110eb$var$t || ($82b40fcbe3f110eb$var$t = $82b40fcbe3f110eb$var$_`must match "${0}" schema`), params.ifClause),
    params: ({ params: params  })=>$jyW5U._($82b40fcbe3f110eb$var$t1 || ($82b40fcbe3f110eb$var$t1 = $82b40fcbe3f110eb$var$_`{failingKeyword: ${0}}`), params.ifClause)
};
const $82b40fcbe3f110eb$var$def = {
    keyword: "if",
    schemaType: [
        "object",
        "boolean"
    ],
    trackErrors: true,
    error: $82b40fcbe3f110eb$var$error,
    code (cxt) {
        const { gen: gen , parentSchema: parentSchema , it: it  } = cxt;
        if (parentSchema.then === undefined && parentSchema.else === undefined) (0, $81JIu.checkStrictMode)(it, '"if" without "then" and "else" is ignored');
        const hasThen = $82b40fcbe3f110eb$var$hasSchema(it, "then");
        const hasElse = $82b40fcbe3f110eb$var$hasSchema(it, "else");
        if (!hasThen && !hasElse) return;
        const valid = gen.let("valid", true);
        const schValid = gen.name("_valid");
        validateIf();
        cxt.reset();
        if (hasThen && hasElse) {
            const ifClause = gen.let("ifClause");
            cxt.setParams({
                ifClause: ifClause
            });
            gen.if(schValid, validateClause("then", ifClause), validateClause("else", ifClause));
        } else if (hasThen) gen.if(schValid, validateClause("then"));
        else gen.if((0, $jyW5U.not)(schValid), validateClause("else"));
        cxt.pass(valid, ()=>cxt.error(true));
        function validateIf() {
            const schCxt = cxt.subschema({
                keyword: "if",
                compositeRule: true,
                createErrors: false,
                allErrors: false
            }, schValid);
            cxt.mergeEvaluated(schCxt);
        }
        function validateClause(keyword, ifClause) {
            return ()=>{
                const schCxt = cxt.subschema({
                    keyword: keyword
                }, schValid);
                gen.assign(valid, schValid);
                cxt.mergeValidEvaluated(schCxt, valid);
                if (ifClause) gen.assign(ifClause, $jyW5U._($82b40fcbe3f110eb$var$t2 || ($82b40fcbe3f110eb$var$t2 = $82b40fcbe3f110eb$var$_`${0}`), keyword));
                else cxt.setParams({
                    ifClause: keyword
                });
            };
        }
    }
};
function $82b40fcbe3f110eb$var$hasSchema(it, keyword) {
    const schema = it.schema[keyword];
    return schema !== undefined && !(0, $81JIu.alwaysValidSchema)(it, schema);
}
module.exports.default = $82b40fcbe3f110eb$var$def;

});

parcelRequire.register("7Mi3o", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $81JIu = parcelRequire("81JIu");
const $5a9b052bfc8f6953$var$def = {
    keyword: [
        "then",
        "else"
    ],
    schemaType: [
        "object",
        "boolean"
    ],
    code ({ keyword: keyword , parentSchema: parentSchema , it: it  }) {
        if (parentSchema.if === undefined) (0, $81JIu.checkStrictMode)(it, `"${keyword}" without "if" is ignored`);
    }
};
module.exports.default = $5a9b052bfc8f6953$var$def;

});


parcelRequire.register("482wQ", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $gaohv = parcelRequire("gaohv");
const $3019def15dec7b9d$var$format = [
    $gaohv.default
];
module.exports.default = $3019def15dec7b9d$var$format;

});
parcelRequire.register("gaohv", function(module, exports) {
"use strict";
let $bc506a4d5592706a$var$_ = (t17)=>t17, $bc506a4d5592706a$var$t, $bc506a4d5592706a$var$t1, $bc506a4d5592706a$var$t2, $bc506a4d5592706a$var$t3, $bc506a4d5592706a$var$t4, $bc506a4d5592706a$var$t5, $bc506a4d5592706a$var$t6, $bc506a4d5592706a$var$t7, $bc506a4d5592706a$var$t8, $bc506a4d5592706a$var$t9, $bc506a4d5592706a$var$t10, $bc506a4d5592706a$var$t11, $bc506a4d5592706a$var$t12, $bc506a4d5592706a$var$t13, $bc506a4d5592706a$var$t14, $bc506a4d5592706a$var$t15, $bc506a4d5592706a$var$t16;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jyW5U = parcelRequire("jyW5U");
const $bc506a4d5592706a$var$error = {
    message: ({ schemaCode: schemaCode  })=>$jyW5U.str($bc506a4d5592706a$var$t || ($bc506a4d5592706a$var$t = $bc506a4d5592706a$var$_`must match format "${0}"`), schemaCode),
    params: ({ schemaCode: schemaCode  })=>$jyW5U._($bc506a4d5592706a$var$t1 || ($bc506a4d5592706a$var$t1 = $bc506a4d5592706a$var$_`{format: ${0}}`), schemaCode)
};
const $bc506a4d5592706a$var$def = {
    keyword: "format",
    type: [
        "number",
        "string"
    ],
    schemaType: "string",
    $data: true,
    error: $bc506a4d5592706a$var$error,
    code (cxt, ruleType) {
        const { gen: gen , data: data , $data: $data , schema: schema , schemaCode: schemaCode , it: it  } = cxt;
        const { opts: opts , errSchemaPath: errSchemaPath , schemaEnv: schemaEnv , self: self  } = it;
        if (!opts.validateFormats) return;
        if ($data) validate$DataFormat();
        else validateFormat();
        function validate$DataFormat() {
            const fmts = gen.scopeValue("formats", {
                ref: self.formats,
                code: opts.code.formats
            });
            const fDef = gen.const("fDef", $jyW5U._($bc506a4d5592706a$var$t2 || ($bc506a4d5592706a$var$t2 = $bc506a4d5592706a$var$_`${0}[${0}]`), fmts, schemaCode));
            const fType = gen.let("fType");
            const format = gen.let("format");
            // TODO simplify
            gen.if($jyW5U._($bc506a4d5592706a$var$t3 || ($bc506a4d5592706a$var$t3 = $bc506a4d5592706a$var$_`typeof ${0} == "object" && !(${0} instanceof RegExp)`), fDef, fDef), ()=>gen.assign(fType, $jyW5U._($bc506a4d5592706a$var$t4 || ($bc506a4d5592706a$var$t4 = $bc506a4d5592706a$var$_`${0}.type || "string"`), fDef)).assign(format, $jyW5U._($bc506a4d5592706a$var$t5 || ($bc506a4d5592706a$var$t5 = $bc506a4d5592706a$var$_`${0}.validate`), fDef)), ()=>gen.assign(fType, $jyW5U._($bc506a4d5592706a$var$t6 || ($bc506a4d5592706a$var$t6 = $bc506a4d5592706a$var$_`"string"`))).assign(format, fDef));
            cxt.fail$data((0, $jyW5U.or)(unknownFmt(), invalidFmt()));
            function unknownFmt() {
                if (opts.strictSchema === false) return $jyW5U.nil;
                return $jyW5U._($bc506a4d5592706a$var$t7 || ($bc506a4d5592706a$var$t7 = $bc506a4d5592706a$var$_`${0} && !${0}`), schemaCode, format);
            }
            function invalidFmt() {
                const callFormat = schemaEnv.$async ? $jyW5U._($bc506a4d5592706a$var$t8 || ($bc506a4d5592706a$var$t8 = $bc506a4d5592706a$var$_`(${0}.async ? await ${0}(${0}) : ${0}(${0}))`), fDef, format, data, format, data) : $jyW5U._($bc506a4d5592706a$var$t9 || ($bc506a4d5592706a$var$t9 = $bc506a4d5592706a$var$_`${0}(${0})`), format, data);
                const validData = $jyW5U._($bc506a4d5592706a$var$t10 || ($bc506a4d5592706a$var$t10 = $bc506a4d5592706a$var$_`(typeof ${0} == "function" ? ${0} : ${0}.test(${0}))`), format, callFormat, format, data);
                return $jyW5U._($bc506a4d5592706a$var$t11 || ($bc506a4d5592706a$var$t11 = $bc506a4d5592706a$var$_`${0} && ${0} !== true && ${0} === ${0} && !${0}`), format, format, fType, ruleType, validData);
            }
        }
        function validateFormat() {
            const formatDef = self.formats[schema];
            if (!formatDef) {
                unknownFormat();
                return;
            }
            if (formatDef === true) return;
            const [fmtType, format, fmtRef] = getFormat(formatDef);
            if (fmtType === ruleType) cxt.pass(validCondition());
            function unknownFormat() {
                if (opts.strictSchema === false) {
                    self.logger.warn(unknownMsg());
                    return;
                }
                throw new Error(unknownMsg());
                function unknownMsg() {
                    return `unknown format "${schema}" ignored in schema at path "${errSchemaPath}"`;
                }
            }
            function getFormat(fmtDef) {
                const code = fmtDef instanceof RegExp ? (0, $jyW5U.regexpCode)(fmtDef) : opts.code.formats ? $jyW5U._($bc506a4d5592706a$var$t12 || ($bc506a4d5592706a$var$t12 = $bc506a4d5592706a$var$_`${0}${0}`), opts.code.formats, (0, $jyW5U.getProperty)(schema)) : undefined;
                const fmt = gen.scopeValue("formats", {
                    key: schema,
                    ref: fmtDef,
                    code: code
                });
                if (typeof fmtDef == "object" && !(fmtDef instanceof RegExp)) return [
                    fmtDef.type || "string",
                    fmtDef.validate,
                    $jyW5U._($bc506a4d5592706a$var$t13 || ($bc506a4d5592706a$var$t13 = $bc506a4d5592706a$var$_`${0}.validate`), fmt)
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
                    return $jyW5U._($bc506a4d5592706a$var$t14 || ($bc506a4d5592706a$var$t14 = $bc506a4d5592706a$var$_`await ${0}(${0})`), fmtRef, data);
                }
                return typeof format == "function" ? $jyW5U._($bc506a4d5592706a$var$t15 || ($bc506a4d5592706a$var$t15 = $bc506a4d5592706a$var$_`${0}(${0})`), fmtRef, data) : $jyW5U._($bc506a4d5592706a$var$t16 || ($bc506a4d5592706a$var$t16 = $bc506a4d5592706a$var$_`${0}.test(${0})`), fmtRef, data);
            }
        }
    }
};
module.exports.default = $bc506a4d5592706a$var$def;

});


parcelRequire.register("gbCZ1", function(module, exports) {
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


parcelRequire.register("eBAmq", function(module, exports) {
"use strict";
let $aa20b9d79eab4930$var$_ = (t4)=>t4, $aa20b9d79eab4930$var$t, $aa20b9d79eab4930$var$t1, $aa20b9d79eab4930$var$t2, $aa20b9d79eab4930$var$t3;
Object.defineProperty(module.exports, "__esModule", {
    value: true
});

var $jyW5U = parcelRequire("jyW5U");

var $94ihi = parcelRequire("94ihi");

var $5VCTu = parcelRequire("5VCTu");

var $81JIu = parcelRequire("81JIu");
const $aa20b9d79eab4930$var$error = {
    message: ({ params: { discrError: discrError , tagName: tagName  }  })=>discrError === $94ihi.DiscrError.Tag ? `tag "${tagName}" must be string` : `value of tag "${tagName}" must be in oneOf`,
    params: ({ params: { discrError: discrError , tag: tag , tagName: tagName  }  })=>$jyW5U._($aa20b9d79eab4930$var$t || ($aa20b9d79eab4930$var$t = $aa20b9d79eab4930$var$_`{error: ${0}, tag: ${0}, tagValue: ${0}}`), discrError, tagName, tag)
};
const $aa20b9d79eab4930$var$def = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: $aa20b9d79eab4930$var$error,
    code (cxt) {
        const { gen: gen , data: data , schema: schema , parentSchema: parentSchema , it: it  } = cxt;
        const { oneOf: oneOf  } = parentSchema;
        if (!it.opts.discriminator) throw new Error("discriminator: requires discriminator option");
        const tagName = schema.propertyName;
        if (typeof tagName != "string") throw new Error("discriminator: requires propertyName");
        if (schema.mapping) throw new Error("discriminator: mapping is not supported");
        if (!oneOf) throw new Error("discriminator: requires oneOf keyword");
        const valid = gen.let("valid", false);
        const tag = gen.const("tag", $jyW5U._($aa20b9d79eab4930$var$t1 || ($aa20b9d79eab4930$var$t1 = $aa20b9d79eab4930$var$_`${0}${0}`), data, (0, $jyW5U.getProperty)(tagName)));
        gen.if($jyW5U._($aa20b9d79eab4930$var$t2 || ($aa20b9d79eab4930$var$t2 = $aa20b9d79eab4930$var$_`typeof ${0} == "string"`), tag), ()=>validateMapping(), ()=>cxt.error(false, {
                discrError: $94ihi.DiscrError.Tag,
                tag: tag,
                tagName: tagName
            }));
        cxt.ok(valid);
        function validateMapping() {
            const mapping = getMapping();
            gen.if(false);
            for(const tagValue in mapping){
                gen.elseIf($jyW5U._($aa20b9d79eab4930$var$t3 || ($aa20b9d79eab4930$var$t3 = $aa20b9d79eab4930$var$_`${0} === ${0}`), tag, tagValue));
                gen.assign(valid, applyTagSchema(mapping[tagValue]));
            }
            gen.else();
            cxt.error(false, {
                discrError: $94ihi.DiscrError.Mapping,
                tag: tag,
                tagName: tagName
            });
            gen.endIf();
        }
        function applyTagSchema(schemaProp) {
            const _valid = gen.name("valid");
            const schCxt = cxt.subschema({
                keyword: "oneOf",
                schemaProp: schemaProp
            }, _valid);
            cxt.mergeEvaluated(schCxt, $jyW5U.Name);
            return _valid;
        }
        function getMapping() {
            var _a;
            const oneOfMapping = {};
            const topRequired = hasRequired(parentSchema);
            let tagRequired = true;
            for(let i1 = 0; i1 < oneOf.length; i1++){
                let sch = oneOf[i1];
                if ((sch === null || sch === void 0 ? void 0 : sch.$ref) && !(0, $81JIu.schemaHasRulesButRef)(sch, it.self.RULES)) {
                    sch = $5VCTu.resolveRef.call(it.self, it.schemaEnv.root, it.baseId, sch === null || sch === void 0 ? void 0 : sch.$ref);
                    if (sch instanceof $5VCTu.SchemaEnv) sch = sch.schema;
                }
                const propSch = (_a = sch === null || sch === void 0 ? void 0 : sch.properties) === null || _a === void 0 ? void 0 : _a[tagName];
                if (typeof propSch != "object") throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${tagName}"`);
                tagRequired = tagRequired && (topRequired || hasRequired(sch));
                addMappings(propSch, i1);
            }
            if (!tagRequired) throw new Error(`discriminator: "${tagName}" must be required`);
            return oneOfMapping;
            function hasRequired({ required: required  }) {
                return Array.isArray(required) && required.includes(tagName);
            }
            function addMappings(sch, i) {
                if (sch.const) {
                    addMapping(sch.const, i);
                } else if (sch.enum) {
                    for (const tagValue of sch.enum){
                        addMapping(tagValue, i);
                    }
                } else {
                    throw new Error(`discriminator: "properties/${tagName}" must have "const" or "enum"`);
                }
            }
            function addMapping(tagValue, i) {
                if (typeof tagValue != "string" || tagValue in oneOfMapping) {
                    throw new Error(`discriminator: "${tagName}" values must be unique strings`);
                }
                oneOfMapping[tagValue] = i;
            }
        }
    }
};
module.exports.default = $aa20b9d79eab4930$var$def;

});
parcelRequire.register("94ihi", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.DiscrError = void 0;
var $69a2aa6225596f4d$var$DiscrError;
(function(DiscrError1) {
    DiscrError1["Tag"] = "tag";
    DiscrError1["Mapping"] = "mapping";
})($69a2aa6225596f4d$var$DiscrError = module.exports.DiscrError || (module.exports.DiscrError = {}));

});


parcelRequire.register("jZjXk", function(module, exports) {
module.exports = JSON.parse('{"$schema":"http://json-schema.org/draft-07/schema#","$id":"http://json-schema.org/draft-07/schema#","title":"Core schema meta-schema","definitions":{"schemaArray":{"type":"array","minItems":1,"items":{"$ref":"#"}},"nonNegativeInteger":{"type":"integer","minimum":0},"nonNegativeIntegerDefault0":{"allOf":[{"$ref":"#/definitions/nonNegativeInteger"},{"default":0}]},"simpleTypes":{"enum":["array","boolean","integer","null","number","object","string"]},"stringArray":{"type":"array","items":{"type":"string"},"uniqueItems":true,"default":[]}},"type":["object","boolean"],"properties":{"$id":{"type":"string","format":"uri-reference"},"$schema":{"type":"string","format":"uri"},"$ref":{"type":"string","format":"uri-reference"},"$comment":{"type":"string"},"title":{"type":"string"},"description":{"type":"string"},"default":true,"readOnly":{"type":"boolean","default":false},"examples":{"type":"array","items":true},"multipleOf":{"type":"number","exclusiveMinimum":0},"maximum":{"type":"number"},"exclusiveMaximum":{"type":"number"},"minimum":{"type":"number"},"exclusiveMinimum":{"type":"number"},"maxLength":{"$ref":"#/definitions/nonNegativeInteger"},"minLength":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"pattern":{"type":"string","format":"regex"},"additionalItems":{"$ref":"#"},"items":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/schemaArray"}],"default":true},"maxItems":{"$ref":"#/definitions/nonNegativeInteger"},"minItems":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"uniqueItems":{"type":"boolean","default":false},"contains":{"$ref":"#"},"maxProperties":{"$ref":"#/definitions/nonNegativeInteger"},"minProperties":{"$ref":"#/definitions/nonNegativeIntegerDefault0"},"required":{"$ref":"#/definitions/stringArray"},"additionalProperties":{"$ref":"#"},"definitions":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"properties":{"type":"object","additionalProperties":{"$ref":"#"},"default":{}},"patternProperties":{"type":"object","additionalProperties":{"$ref":"#"},"propertyNames":{"format":"regex"},"default":{}},"dependencies":{"type":"object","additionalProperties":{"anyOf":[{"$ref":"#"},{"$ref":"#/definitions/stringArray"}]}},"propertyNames":{"$ref":"#"},"const":true,"enum":{"type":"array","items":true,"minItems":1,"uniqueItems":true},"type":{"anyOf":[{"$ref":"#/definitions/simpleTypes"},{"type":"array","items":{"$ref":"#/definitions/simpleTypes"},"minItems":1,"uniqueItems":true}]},"format":{"type":"string"},"contentMediaType":{"type":"string"},"contentEncoding":{"type":"string"},"if":{"$ref":"#"},"then":{"$ref":"#"},"else":{"$ref":"#"},"allOf":{"$ref":"#/definitions/schemaArray"},"anyOf":{"$ref":"#/definitions/schemaArray"},"oneOf":{"$ref":"#/definitions/schemaArray"},"not":{"$ref":"#"}},"default":true}');

});


function $180022016c8cd477$export$2e2bcd8739ae039(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}


"use strict";
var $f118b995e66fd17d$exports = {};
var $07f66a1e1c7bbf24$exports = {};
var $07f66a1e1c7bbf24$var$check = function(it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
$07f66a1e1c7bbf24$exports = // eslint-disable-next-line es-x/no-global-this -- safe
$07f66a1e1c7bbf24$var$check(typeof globalThis == "object" && globalThis) || $07f66a1e1c7bbf24$var$check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
$07f66a1e1c7bbf24$var$check(typeof self == "object" && self) || $07f66a1e1c7bbf24$var$check(typeof $parcel$global == "object" && $parcel$global) || // eslint-disable-next-line no-new-func -- fallback
function() {
    return this;
}() || Function("return this")();


// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
var $4fff1445bedc674e$export$2d1720544b23b823;
var $0a9e9eb76e8ffec5$exports = {};
var $f5abd19de922f032$exports = {};
$f5abd19de922f032$exports = function(exec) {
    try {
        return !!exec();
    } catch (error) {
        return true;
    }
};


// Detect IE8's incomplete defineProperty implementation
$0a9e9eb76e8ffec5$exports = !$f5abd19de922f032$exports(function() {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
        get: function() {
            return 7;
        }
    })[1] != 7;
});


var $3d2adb84c511c311$exports = {};
var $580a7835c4304877$exports = {};

$580a7835c4304877$exports = !$f5abd19de922f032$exports(function() {
    // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
    var test = (function() {}).bind();
    // eslint-disable-next-line no-prototype-builtins -- safe
    return typeof test != "function" || test.hasOwnProperty("prototype");
});


var $3d2adb84c511c311$var$call = Function.prototype.call;
$3d2adb84c511c311$exports = $580a7835c4304877$exports ? $3d2adb84c511c311$var$call.bind($3d2adb84c511c311$var$call) : function() {
    return $3d2adb84c511c311$var$call.apply($3d2adb84c511c311$var$call, arguments);
};


// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
var $9ea942c3b5f7ae6c$export$2d1720544b23b823;
"use strict";
var $9ea942c3b5f7ae6c$var$$propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $9ea942c3b5f7ae6c$var$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var $9ea942c3b5f7ae6c$var$NASHORN_BUG = $9ea942c3b5f7ae6c$var$getOwnPropertyDescriptor && !$9ea942c3b5f7ae6c$var$$propertyIsEnumerable.call({
    1: 2
}, 1);
$9ea942c3b5f7ae6c$export$2d1720544b23b823 = $9ea942c3b5f7ae6c$var$NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = $9ea942c3b5f7ae6c$var$getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : $9ea942c3b5f7ae6c$var$$propertyIsEnumerable;


var $ddbc107bf9012404$exports = {};
$ddbc107bf9012404$exports = function(bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};


var $aa5555fbe0a5b681$exports = {};
var $f2bee9d0b4b0e8ac$exports = {};
var $187fe8a436652613$exports = {};

var $187fe8a436652613$var$FunctionPrototype = Function.prototype;
var $187fe8a436652613$var$bind = $187fe8a436652613$var$FunctionPrototype.bind;
var $187fe8a436652613$var$call = $187fe8a436652613$var$FunctionPrototype.call;
var $187fe8a436652613$var$uncurryThis = $580a7835c4304877$exports && $187fe8a436652613$var$bind.bind($187fe8a436652613$var$call, $187fe8a436652613$var$call);
$187fe8a436652613$exports = $580a7835c4304877$exports ? function(fn) {
    return fn && $187fe8a436652613$var$uncurryThis(fn);
} : function(fn) {
    return fn && function() {
        return $187fe8a436652613$var$call.apply(fn, arguments);
    };
};



var $47cee92d2e5cea88$exports = {};

var $47cee92d2e5cea88$var$toString = $187fe8a436652613$exports({}.toString);
var $47cee92d2e5cea88$var$stringSlice = $187fe8a436652613$exports("".slice);
$47cee92d2e5cea88$exports = function(it) {
    return $47cee92d2e5cea88$var$stringSlice($47cee92d2e5cea88$var$toString(it), 8, -1);
};


var $f2bee9d0b4b0e8ac$var$$Object = Object;
var $f2bee9d0b4b0e8ac$var$split = $187fe8a436652613$exports("".split);
// fallback for non-array-like ES3 and non-enumerable old V8 strings
$f2bee9d0b4b0e8ac$exports = $f5abd19de922f032$exports(function() {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !$f2bee9d0b4b0e8ac$var$$Object("z").propertyIsEnumerable(0);
}) ? function(it) {
    return $47cee92d2e5cea88$exports(it) == "String" ? $f2bee9d0b4b0e8ac$var$split(it, "") : $f2bee9d0b4b0e8ac$var$$Object(it);
} : $f2bee9d0b4b0e8ac$var$$Object;


var $78f23571450d8462$exports = {};
var $78f23571450d8462$var$$TypeError = TypeError;
// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
$78f23571450d8462$exports = function(it) {
    if (it == undefined) throw $78f23571450d8462$var$$TypeError("Can't call method on " + it);
    return it;
};


$aa5555fbe0a5b681$exports = function(it) {
    return $f2bee9d0b4b0e8ac$exports($78f23571450d8462$exports(it));
};


var $446755273759cd8a$exports = {};
var $085741f3acdc7736$exports = {};

var $68fb9d1e346bb669$exports = {};
var $6f757bd049586dec$exports = {};
// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
$6f757bd049586dec$exports = function(argument) {
    return typeof argument == "function";
};


$68fb9d1e346bb669$exports = function(it) {
    return typeof it == "object" ? it !== null : $6f757bd049586dec$exports(it);
};


var $0899ad36f4c9b560$exports = {};
var $6da772f04a7c033c$exports = {};


var $6da772f04a7c033c$var$aFunction = function(argument) {
    return $6f757bd049586dec$exports(argument) ? argument : undefined;
};
$6da772f04a7c033c$exports = function(namespace, method) {
    return arguments.length < 2 ? $6da772f04a7c033c$var$aFunction($07f66a1e1c7bbf24$exports[namespace]) : $07f66a1e1c7bbf24$exports[namespace] && $07f66a1e1c7bbf24$exports[namespace][method];
};



var $2a9808014ffa8036$exports = {};

$2a9808014ffa8036$exports = $187fe8a436652613$exports({}.isPrototypeOf);


var $24e19df0ffb90a21$exports = {};
var $88c2af367e6c67b7$exports = {};
var $434e27d1bfac1257$exports = {};

var $196c682f7ba8cc7c$exports = {};

$196c682f7ba8cc7c$exports = $6da772f04a7c033c$exports("navigator", "userAgent") || "";


var $434e27d1bfac1257$var$process = $07f66a1e1c7bbf24$exports.process;
var $434e27d1bfac1257$var$Deno = $07f66a1e1c7bbf24$exports.Deno;
var $434e27d1bfac1257$var$versions = $434e27d1bfac1257$var$process && $434e27d1bfac1257$var$process.versions || $434e27d1bfac1257$var$Deno && $434e27d1bfac1257$var$Deno.version;
var $434e27d1bfac1257$var$v8 = $434e27d1bfac1257$var$versions && $434e27d1bfac1257$var$versions.v8;
var $434e27d1bfac1257$var$match, $434e27d1bfac1257$var$version;
if ($434e27d1bfac1257$var$v8) {
    $434e27d1bfac1257$var$match = $434e27d1bfac1257$var$v8.split(".");
    // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    $434e27d1bfac1257$var$version = $434e27d1bfac1257$var$match[0] > 0 && $434e27d1bfac1257$var$match[0] < 4 ? 1 : +($434e27d1bfac1257$var$match[0] + $434e27d1bfac1257$var$match[1]);
}
// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!$434e27d1bfac1257$var$version && $196c682f7ba8cc7c$exports) {
    $434e27d1bfac1257$var$match = $196c682f7ba8cc7c$exports.match(/Edge\/(\d+)/);
    if (!$434e27d1bfac1257$var$match || $434e27d1bfac1257$var$match[1] >= 74) {
        $434e27d1bfac1257$var$match = $196c682f7ba8cc7c$exports.match(/Chrome\/(\d+)/);
        if ($434e27d1bfac1257$var$match) $434e27d1bfac1257$var$version = +$434e27d1bfac1257$var$match[1];
    }
}
$434e27d1bfac1257$exports = $434e27d1bfac1257$var$version;



// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
$88c2af367e6c67b7$exports = !!Object.getOwnPropertySymbols && !$f5abd19de922f032$exports(function() {
    var symbol = Symbol();
    // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && $434e27d1bfac1257$exports && $434e27d1bfac1257$exports < 41;
});


$24e19df0ffb90a21$exports = $88c2af367e6c67b7$exports && !Symbol.sham && typeof Symbol.iterator == "symbol";


var $0899ad36f4c9b560$var$$Object = Object;
$0899ad36f4c9b560$exports = $24e19df0ffb90a21$exports ? function(it) {
    return typeof it == "symbol";
} : function(it) {
    var $Symbol = $6da772f04a7c033c$exports("Symbol");
    return $6f757bd049586dec$exports($Symbol) && $2a9808014ffa8036$exports($Symbol.prototype, $0899ad36f4c9b560$var$$Object(it));
};


var $8160a8d8470acbf6$exports = {};
var $608d91685838956e$exports = {};

var $def085b46ce0c977$exports = {};
var $def085b46ce0c977$var$$String = String;
$def085b46ce0c977$exports = function(argument) {
    try {
        return $def085b46ce0c977$var$$String(argument);
    } catch (error) {
        return "Object";
    }
};


var $608d91685838956e$var$$TypeError = TypeError;
// `Assert: IsCallable(argument) is true`
$608d91685838956e$exports = function(argument) {
    if ($6f757bd049586dec$exports(argument)) return argument;
    throw $608d91685838956e$var$$TypeError($def085b46ce0c977$exports(argument) + " is not a function");
};


// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
$8160a8d8470acbf6$exports = function(V, P) {
    var func = V[P];
    return func == null ? undefined : $608d91685838956e$exports(func);
};


var $8d55b37db35aa211$exports = {};



var $8d55b37db35aa211$var$$TypeError = TypeError;
// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
$8d55b37db35aa211$exports = function(input, pref) {
    var fn, val;
    if (pref === "string" && $6f757bd049586dec$exports(fn = input.toString) && !$68fb9d1e346bb669$exports(val = $3d2adb84c511c311$exports(fn, input))) return val;
    if ($6f757bd049586dec$exports(fn = input.valueOf) && !$68fb9d1e346bb669$exports(val = $3d2adb84c511c311$exports(fn, input))) return val;
    if (pref !== "string" && $6f757bd049586dec$exports(fn = input.toString) && !$68fb9d1e346bb669$exports(val = $3d2adb84c511c311$exports(fn, input))) return val;
    throw $8d55b37db35aa211$var$$TypeError("Can't convert object to primitive value");
};


var $6e3e2dccd8d157b1$exports = {};

var $015a766190f08f0a$exports = {};
var $179f94dc4819b146$exports = {};
$179f94dc4819b146$exports = false;


var $3d8dfd43ca10c011$exports = {};

var $b9166c35a37a01fd$exports = {};

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $b9166c35a37a01fd$var$defineProperty = Object.defineProperty;
$b9166c35a37a01fd$exports = function(key, value) {
    try {
        $b9166c35a37a01fd$var$defineProperty($07f66a1e1c7bbf24$exports, key, {
            value: value,
            configurable: true,
            writable: true
        });
    } catch (error) {
        $07f66a1e1c7bbf24$exports[key] = value;
    }
    return value;
};


var $3d8dfd43ca10c011$var$SHARED = "__core-js_shared__";
var $3d8dfd43ca10c011$var$store = $07f66a1e1c7bbf24$exports[$3d8dfd43ca10c011$var$SHARED] || $b9166c35a37a01fd$exports($3d8dfd43ca10c011$var$SHARED, {});
$3d8dfd43ca10c011$exports = $3d8dfd43ca10c011$var$store;


($015a766190f08f0a$exports = function(key, value) {
    return $3d8dfd43ca10c011$exports[key] || ($3d8dfd43ca10c011$exports[key] = value !== undefined ? value : {});
})("versions", []).push({
    version: "3.23.2",
    mode: $179f94dc4819b146$exports ? "pure" : "global",
    copyright: "\xa9 2014-2022 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.23.2/LICENSE",
    source: "https://github.com/zloirock/core-js"
});


var $79bb56e8cb746256$exports = {};

var $03d4e910d913b7bd$exports = {};

var $03d4e910d913b7bd$var$$Object = Object;
// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
$03d4e910d913b7bd$exports = function(argument) {
    return $03d4e910d913b7bd$var$$Object($78f23571450d8462$exports(argument));
};


var $79bb56e8cb746256$var$hasOwnProperty = $187fe8a436652613$exports({}.hasOwnProperty);
// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
$79bb56e8cb746256$exports = Object.hasOwn || function hasOwn(it, key) {
    return $79bb56e8cb746256$var$hasOwnProperty($03d4e910d913b7bd$exports(it), key);
};


var $06bc5f92a2dfbd1c$exports = {};

var $06bc5f92a2dfbd1c$var$id = 0;
var $06bc5f92a2dfbd1c$var$postfix = Math.random();
var $06bc5f92a2dfbd1c$var$toString = $187fe8a436652613$exports(1.0.toString);
$06bc5f92a2dfbd1c$exports = function(key) {
    return "Symbol(" + (key === undefined ? "" : key) + ")_" + $06bc5f92a2dfbd1c$var$toString(++$06bc5f92a2dfbd1c$var$id + $06bc5f92a2dfbd1c$var$postfix, 36);
};




var $6e3e2dccd8d157b1$var$WellKnownSymbolsStore = $015a766190f08f0a$exports("wks");
var $6e3e2dccd8d157b1$var$Symbol = $07f66a1e1c7bbf24$exports.Symbol;
var $6e3e2dccd8d157b1$var$symbolFor = $6e3e2dccd8d157b1$var$Symbol && $6e3e2dccd8d157b1$var$Symbol["for"];
var $6e3e2dccd8d157b1$var$createWellKnownSymbol = $24e19df0ffb90a21$exports ? $6e3e2dccd8d157b1$var$Symbol : $6e3e2dccd8d157b1$var$Symbol && $6e3e2dccd8d157b1$var$Symbol.withoutSetter || $06bc5f92a2dfbd1c$exports;
$6e3e2dccd8d157b1$exports = function(name) {
    if (!$79bb56e8cb746256$exports($6e3e2dccd8d157b1$var$WellKnownSymbolsStore, name) || !($88c2af367e6c67b7$exports || typeof $6e3e2dccd8d157b1$var$WellKnownSymbolsStore[name] == "string")) {
        var description = "Symbol." + name;
        if ($88c2af367e6c67b7$exports && $79bb56e8cb746256$exports($6e3e2dccd8d157b1$var$Symbol, name)) $6e3e2dccd8d157b1$var$WellKnownSymbolsStore[name] = $6e3e2dccd8d157b1$var$Symbol[name];
        else if ($24e19df0ffb90a21$exports && $6e3e2dccd8d157b1$var$symbolFor) $6e3e2dccd8d157b1$var$WellKnownSymbolsStore[name] = $6e3e2dccd8d157b1$var$symbolFor(description);
        else $6e3e2dccd8d157b1$var$WellKnownSymbolsStore[name] = $6e3e2dccd8d157b1$var$createWellKnownSymbol(description);
    }
    return $6e3e2dccd8d157b1$var$WellKnownSymbolsStore[name];
};


var $085741f3acdc7736$var$$TypeError = TypeError;
var $085741f3acdc7736$var$TO_PRIMITIVE = $6e3e2dccd8d157b1$exports("toPrimitive");
// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
$085741f3acdc7736$exports = function(input, pref) {
    if (!$68fb9d1e346bb669$exports(input) || $0899ad36f4c9b560$exports(input)) return input;
    var exoticToPrim = $8160a8d8470acbf6$exports(input, $085741f3acdc7736$var$TO_PRIMITIVE);
    var result;
    if (exoticToPrim) {
        if (pref === undefined) pref = "default";
        result = $3d2adb84c511c311$exports(exoticToPrim, input, pref);
        if (!$68fb9d1e346bb669$exports(result) || $0899ad36f4c9b560$exports(result)) return result;
        throw $085741f3acdc7736$var$$TypeError("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = "number";
    return $8d55b37db35aa211$exports(input, pref);
};



// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
$446755273759cd8a$exports = function(argument) {
    var key = $085741f3acdc7736$exports(argument, "string");
    return $0899ad36f4c9b560$exports(key) ? key : key + "";
};



var $f6759edcabd44b38$exports = {};


var $1f136802e151039f$exports = {};


var $1f136802e151039f$var$document = $07f66a1e1c7bbf24$exports.document;
// typeof document.createElement is 'object' in old IE
var $1f136802e151039f$var$EXISTS = $68fb9d1e346bb669$exports($1f136802e151039f$var$document) && $68fb9d1e346bb669$exports($1f136802e151039f$var$document.createElement);
$1f136802e151039f$exports = function(it) {
    return $1f136802e151039f$var$EXISTS ? $1f136802e151039f$var$document.createElement(it) : {};
};


// Thanks to IE8 for its funny defineProperty
$f6759edcabd44b38$exports = !$0a9e9eb76e8ffec5$exports && !$f5abd19de922f032$exports(function() {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty($1f136802e151039f$exports("div"), "a", {
        get: function() {
            return 7;
        }
    }).a != 7;
});


// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $4fff1445bedc674e$var$$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
$4fff1445bedc674e$export$2d1720544b23b823 = $0a9e9eb76e8ffec5$exports ? $4fff1445bedc674e$var$$getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = $aa5555fbe0a5b681$exports(O);
    P = $446755273759cd8a$exports(P);
    if ($f6759edcabd44b38$exports) try {
        return $4fff1445bedc674e$var$$getOwnPropertyDescriptor(O, P);
    } catch (error) {}
    if ($79bb56e8cb746256$exports(O, P)) return $ddbc107bf9012404$exports(!$3d2adb84c511c311$exports($9ea942c3b5f7ae6c$export$2d1720544b23b823, O, P), O[P]);
};


var $f118b995e66fd17d$require$getOwnPropertyDescriptor = $4fff1445bedc674e$export$2d1720544b23b823;
var $69dcd8db69bcac03$exports = {};

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
var $8fdc88db56cba5a1$export$2d1720544b23b823;


var $0451f8882a68f90a$exports = {};


// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
$0451f8882a68f90a$exports = $0a9e9eb76e8ffec5$exports && $f5abd19de922f032$exports(function() {
    // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
    return Object.defineProperty(function() {}, "prototype", {
        value: 42,
        writable: false
    }).prototype != 42;
});


var $d33863bd95e4e95d$exports = {};

var $d33863bd95e4e95d$var$$String = String;
var $d33863bd95e4e95d$var$$TypeError = TypeError;
// `Assert: Type(argument) is Object`
$d33863bd95e4e95d$exports = function(argument) {
    if ($68fb9d1e346bb669$exports(argument)) return argument;
    throw $d33863bd95e4e95d$var$$TypeError($d33863bd95e4e95d$var$$String(argument) + " is not an object");
};



var $8fdc88db56cba5a1$var$$TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $8fdc88db56cba5a1$var$$defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $8fdc88db56cba5a1$var$$getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var $8fdc88db56cba5a1$var$ENUMERABLE = "enumerable";
var $8fdc88db56cba5a1$var$CONFIGURABLE = "configurable";
var $8fdc88db56cba5a1$var$WRITABLE = "writable";
$8fdc88db56cba5a1$export$2d1720544b23b823 = $0a9e9eb76e8ffec5$exports ? $0451f8882a68f90a$exports ? function defineProperty(O, P, Attributes) {
    $d33863bd95e4e95d$exports(O);
    P = $446755273759cd8a$exports(P);
    $d33863bd95e4e95d$exports(Attributes);
    if (typeof O === "function" && P === "prototype" && "value" in Attributes && $8fdc88db56cba5a1$var$WRITABLE in Attributes && !Attributes[$8fdc88db56cba5a1$var$WRITABLE]) {
        var current = $8fdc88db56cba5a1$var$$getOwnPropertyDescriptor(O, P);
        if (current && current[$8fdc88db56cba5a1$var$WRITABLE]) {
            O[P] = Attributes.value;
            Attributes = {
                configurable: $8fdc88db56cba5a1$var$CONFIGURABLE in Attributes ? Attributes[$8fdc88db56cba5a1$var$CONFIGURABLE] : current[$8fdc88db56cba5a1$var$CONFIGURABLE],
                enumerable: $8fdc88db56cba5a1$var$ENUMERABLE in Attributes ? Attributes[$8fdc88db56cba5a1$var$ENUMERABLE] : current[$8fdc88db56cba5a1$var$ENUMERABLE],
                writable: false
            };
        }
    }
    return $8fdc88db56cba5a1$var$$defineProperty(O, P, Attributes);
} : $8fdc88db56cba5a1$var$$defineProperty : function defineProperty(O, P, Attributes) {
    $d33863bd95e4e95d$exports(O);
    P = $446755273759cd8a$exports(P);
    $d33863bd95e4e95d$exports(Attributes);
    if ($f6759edcabd44b38$exports) try {
        return $8fdc88db56cba5a1$var$$defineProperty(O, P, Attributes);
    } catch (error) {}
    if ("get" in Attributes || "set" in Attributes) throw $8fdc88db56cba5a1$var$$TypeError("Accessors not supported");
    if ("value" in Attributes) O[P] = Attributes.value;
    return O;
};



$69dcd8db69bcac03$exports = $0a9e9eb76e8ffec5$exports ? function(object, key, value) {
    return $8fdc88db56cba5a1$export$2d1720544b23b823(object, key, $ddbc107bf9012404$exports(1, value));
} : function(object, key, value) {
    object[key] = value;
    return object;
};


var $7da21459d1c066ce$exports = {};


var $1f77ed40bb7bef8b$exports = {};




var $73777c6bc24c33f3$exports = {};


var $73777c6bc24c33f3$var$FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $73777c6bc24c33f3$var$getDescriptor = $0a9e9eb76e8ffec5$exports && Object.getOwnPropertyDescriptor;
var $73777c6bc24c33f3$var$EXISTS = $79bb56e8cb746256$exports($73777c6bc24c33f3$var$FunctionPrototype, "name");
// additional protection from minified / mangled / dropped function names
var $73777c6bc24c33f3$var$PROPER = $73777c6bc24c33f3$var$EXISTS && (function something() {}).name === "something";
var $73777c6bc24c33f3$var$CONFIGURABLE = $73777c6bc24c33f3$var$EXISTS && (!$0a9e9eb76e8ffec5$exports || $0a9e9eb76e8ffec5$exports && $73777c6bc24c33f3$var$getDescriptor($73777c6bc24c33f3$var$FunctionPrototype, "name").configurable);
$73777c6bc24c33f3$exports = {
    EXISTS: $73777c6bc24c33f3$var$EXISTS,
    PROPER: $73777c6bc24c33f3$var$PROPER,
    CONFIGURABLE: $73777c6bc24c33f3$var$CONFIGURABLE
};


var $1f77ed40bb7bef8b$require$CONFIGURABLE_FUNCTION_NAME = $73777c6bc24c33f3$exports.CONFIGURABLE;
var $dc399008d85bd356$exports = {};



var $dc399008d85bd356$var$functionToString = $187fe8a436652613$exports(Function.toString);
// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!$6f757bd049586dec$exports($3d8dfd43ca10c011$exports.inspectSource)) $3d8dfd43ca10c011$exports.inspectSource = function(it) {
    return $dc399008d85bd356$var$functionToString(it);
};
$dc399008d85bd356$exports = $3d8dfd43ca10c011$exports.inspectSource;


var $195f1b182af83311$exports = {};
var $e76ecf2447382eef$exports = {};



var $e76ecf2447382eef$var$WeakMap = $07f66a1e1c7bbf24$exports.WeakMap;
$e76ecf2447382eef$exports = $6f757bd049586dec$exports($e76ecf2447382eef$var$WeakMap) && /native code/.test($dc399008d85bd356$exports($e76ecf2447382eef$var$WeakMap));








var $18110cd658fc35e5$exports = {};


var $18110cd658fc35e5$var$keys = $015a766190f08f0a$exports("keys");
$18110cd658fc35e5$exports = function(key) {
    return $18110cd658fc35e5$var$keys[key] || ($18110cd658fc35e5$var$keys[key] = $06bc5f92a2dfbd1c$exports(key));
};


var $c347282aa3b8383a$exports = {};
$c347282aa3b8383a$exports = {};


var $195f1b182af83311$var$OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var $195f1b182af83311$var$TypeError = $07f66a1e1c7bbf24$exports.TypeError;
var $195f1b182af83311$var$WeakMap = $07f66a1e1c7bbf24$exports.WeakMap;
var $195f1b182af83311$var$set, $195f1b182af83311$var$get, $195f1b182af83311$var$has;
var $195f1b182af83311$var$enforce = function(it) {
    return $195f1b182af83311$var$has(it) ? $195f1b182af83311$var$get(it) : $195f1b182af83311$var$set(it, {});
};
var $195f1b182af83311$var$getterFor = function(TYPE) {
    return function(it) {
        var state;
        if (!$68fb9d1e346bb669$exports(it) || (state = $195f1b182af83311$var$get(it)).type !== TYPE) throw $195f1b182af83311$var$TypeError("Incompatible receiver, " + TYPE + " required");
        return state;
    };
};
if ($e76ecf2447382eef$exports || $3d8dfd43ca10c011$exports.state) {
    var $195f1b182af83311$var$store = $3d8dfd43ca10c011$exports.state || ($3d8dfd43ca10c011$exports.state = new $195f1b182af83311$var$WeakMap());
    var $195f1b182af83311$var$wmget = $187fe8a436652613$exports($195f1b182af83311$var$store.get);
    var $195f1b182af83311$var$wmhas = $187fe8a436652613$exports($195f1b182af83311$var$store.has);
    var $195f1b182af83311$var$wmset = $187fe8a436652613$exports($195f1b182af83311$var$store.set);
    $195f1b182af83311$var$set = function(it, metadata) {
        if ($195f1b182af83311$var$wmhas($195f1b182af83311$var$store, it)) throw new $195f1b182af83311$var$TypeError($195f1b182af83311$var$OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        $195f1b182af83311$var$wmset($195f1b182af83311$var$store, it, metadata);
        return metadata;
    };
    $195f1b182af83311$var$get = function(it) {
        return $195f1b182af83311$var$wmget($195f1b182af83311$var$store, it) || {};
    };
    $195f1b182af83311$var$has = function(it) {
        return $195f1b182af83311$var$wmhas($195f1b182af83311$var$store, it);
    };
} else {
    var $195f1b182af83311$var$STATE = $18110cd658fc35e5$exports("state");
    $c347282aa3b8383a$exports[$195f1b182af83311$var$STATE] = true;
    $195f1b182af83311$var$set = function(it, metadata) {
        if ($79bb56e8cb746256$exports(it, $195f1b182af83311$var$STATE)) throw new $195f1b182af83311$var$TypeError($195f1b182af83311$var$OBJECT_ALREADY_INITIALIZED);
        metadata.facade = it;
        $69dcd8db69bcac03$exports(it, $195f1b182af83311$var$STATE, metadata);
        return metadata;
    };
    $195f1b182af83311$var$get = function(it) {
        return $79bb56e8cb746256$exports(it, $195f1b182af83311$var$STATE) ? it[$195f1b182af83311$var$STATE] : {};
    };
    $195f1b182af83311$var$has = function(it) {
        return $79bb56e8cb746256$exports(it, $195f1b182af83311$var$STATE);
    };
}
$195f1b182af83311$exports = {
    set: $195f1b182af83311$var$set,
    get: $195f1b182af83311$var$get,
    has: $195f1b182af83311$var$has,
    enforce: $195f1b182af83311$var$enforce,
    getterFor: $195f1b182af83311$var$getterFor
};


var $1f77ed40bb7bef8b$var$enforceInternalState = $195f1b182af83311$exports.enforce;
var $1f77ed40bb7bef8b$var$getInternalState = $195f1b182af83311$exports.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $1f77ed40bb7bef8b$var$defineProperty = Object.defineProperty;
var $1f77ed40bb7bef8b$var$CONFIGURABLE_LENGTH = $0a9e9eb76e8ffec5$exports && !$f5abd19de922f032$exports(function() {
    return $1f77ed40bb7bef8b$var$defineProperty(function() {}, "length", {
        value: 8
    }).length !== 8;
});
var $1f77ed40bb7bef8b$var$TEMPLATE = String(String).split("String");
var $1f77ed40bb7bef8b$var$makeBuiltIn = $1f77ed40bb7bef8b$exports = function(value, name, options) {
    if (String(name).slice(0, 7) === "Symbol(") name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
    if (options && options.getter) name = "get " + name;
    if (options && options.setter) name = "set " + name;
    if (!$79bb56e8cb746256$exports(value, "name") || $1f77ed40bb7bef8b$require$CONFIGURABLE_FUNCTION_NAME && value.name !== name) $1f77ed40bb7bef8b$var$defineProperty(value, "name", {
        value: name,
        configurable: true
    });
    if ($1f77ed40bb7bef8b$var$CONFIGURABLE_LENGTH && options && $79bb56e8cb746256$exports(options, "arity") && value.length !== options.arity) $1f77ed40bb7bef8b$var$defineProperty(value, "length", {
        value: options.arity
    });
    try {
        if (options && $79bb56e8cb746256$exports(options, "constructor") && options.constructor) {
            if ($0a9e9eb76e8ffec5$exports) $1f77ed40bb7bef8b$var$defineProperty(value, "prototype", {
                writable: false
            });
        } else if (value.prototype) value.prototype = undefined;
    } catch (error) {}
    var state = $1f77ed40bb7bef8b$var$enforceInternalState(value);
    if (!$79bb56e8cb746256$exports(state, "source")) state.source = $1f77ed40bb7bef8b$var$TEMPLATE.join(typeof name == "string" ? name : "");
    return value;
};
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = $1f77ed40bb7bef8b$var$makeBuiltIn(function toString() {
    return $6f757bd049586dec$exports(this) && $1f77ed40bb7bef8b$var$getInternalState(this).source || $dc399008d85bd356$exports(this);
}, "toString");



$7da21459d1c066ce$exports = function(O, key, value, options) {
    if (!options) options = {};
    var simple = options.enumerable;
    var name = options.name !== undefined ? options.name : key;
    if ($6f757bd049586dec$exports(value)) $1f77ed40bb7bef8b$exports(value, name, options);
    if (options.global) {
        if (simple) O[key] = value;
        else $b9166c35a37a01fd$exports(key, value);
    } else {
        if (!options.unsafe) delete O[key];
        else if (O[key]) simple = true;
        if (simple) O[key] = value;
        else $8fdc88db56cba5a1$export$2d1720544b23b823(O, key, {
            value: value,
            enumerable: false,
            configurable: !options.nonConfigurable,
            writable: !options.nonWritable
        });
    }
    return O;
};



var $518405a36db6bdf3$exports = {};

var $161f4770c982e709$exports = {};


// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
var $e2b0cb44f25503de$export$2d1720544b23b823;
var $a6fa318a241d87db$exports = {};



var $ef0e1c2f28484d20$exports = {};

var $757df40526337908$exports = {};
var $8d51b8d9ba9fab86$exports = {};
var $72e5dd57ea061868$exports = {};
var $72e5dd57ea061868$var$ceil = Math.ceil;
var $72e5dd57ea061868$var$floor = Math.floor;
// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
$72e5dd57ea061868$exports = Math.trunc || function trunc(x) {
    var n = +x;
    return (n > 0 ? $72e5dd57ea061868$var$floor : $72e5dd57ea061868$var$ceil)(n);
};


// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
$8d51b8d9ba9fab86$exports = function(argument) {
    var number = +argument;
    // eslint-disable-next-line no-self-compare -- NaN check
    return number !== number || number === 0 ? 0 : $72e5dd57ea061868$exports(number);
};


var $757df40526337908$var$max = Math.max;
var $757df40526337908$var$min = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
$757df40526337908$exports = function(index, length) {
    var integer = $8d51b8d9ba9fab86$exports(index);
    return integer < 0 ? $757df40526337908$var$max(integer + length, 0) : $757df40526337908$var$min(integer, length);
};


var $88ec1b720e98a386$exports = {};
var $9e3838061de88f52$exports = {};

var $9e3838061de88f52$var$min = Math.min;
// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
$9e3838061de88f52$exports = function(argument) {
    return argument > 0 ? $9e3838061de88f52$var$min($8d51b8d9ba9fab86$exports(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
$88ec1b720e98a386$exports = function(obj) {
    return $9e3838061de88f52$exports(obj.length);
};


// `Array.prototype.{ indexOf, includes }` methods implementation
var $ef0e1c2f28484d20$var$createMethod = function(IS_INCLUDES) {
    return function($this, el, fromIndex) {
        var O = $aa5555fbe0a5b681$exports($this);
        var length = $88ec1b720e98a386$exports(O);
        var index = $757df40526337908$exports(fromIndex, length);
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
$ef0e1c2f28484d20$exports = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: $ef0e1c2f28484d20$var$createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: $ef0e1c2f28484d20$var$createMethod(false)
};


var $a6fa318a241d87db$require$indexOf = $ef0e1c2f28484d20$exports.indexOf;

var $a6fa318a241d87db$var$push = $187fe8a436652613$exports([].push);
$a6fa318a241d87db$exports = function(object, names) {
    var O = $aa5555fbe0a5b681$exports(object);
    var i = 0;
    var result = [];
    var key;
    for(key in O)!$79bb56e8cb746256$exports($c347282aa3b8383a$exports, key) && $79bb56e8cb746256$exports(O, key) && $a6fa318a241d87db$var$push(result, key);
    // Don't enum bug & hidden keys
    while(names.length > i)if ($79bb56e8cb746256$exports(O, key = names[i++])) ~$a6fa318a241d87db$require$indexOf(result, key) || $a6fa318a241d87db$var$push(result, key);
    return result;
};


var $b7d9b65a3d066dcb$exports = {};
// IE8- don't enum bug keys
$b7d9b65a3d066dcb$exports = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf"
];


var $e2b0cb44f25503de$var$hiddenKeys = $b7d9b65a3d066dcb$exports.concat("length", "prototype");
$e2b0cb44f25503de$export$2d1720544b23b823 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $a6fa318a241d87db$exports(O, $e2b0cb44f25503de$var$hiddenKeys);
};


// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
var $96bb9dca0f0efd20$export$2d1720544b23b823;
$96bb9dca0f0efd20$export$2d1720544b23b823 = Object.getOwnPropertySymbols;



var $161f4770c982e709$var$concat = $187fe8a436652613$exports([].concat);
// all object keys, includes non-enumerable and symbols
$161f4770c982e709$exports = $6da772f04a7c033c$exports("Reflect", "ownKeys") || function ownKeys(it) {
    var keys = $e2b0cb44f25503de$export$2d1720544b23b823($d33863bd95e4e95d$exports(it));
    var getOwnPropertySymbols = $96bb9dca0f0efd20$export$2d1720544b23b823;
    return getOwnPropertySymbols ? $161f4770c982e709$var$concat(keys, getOwnPropertySymbols(it)) : keys;
};




$518405a36db6bdf3$exports = function(target, source, exceptions) {
    var keys = $161f4770c982e709$exports(source);
    var defineProperty = $8fdc88db56cba5a1$export$2d1720544b23b823;
    var getOwnPropertyDescriptor = $4fff1445bedc674e$export$2d1720544b23b823;
    for(var i = 0; i < keys.length; i++){
        var key = keys[i];
        if (!$79bb56e8cb746256$exports(target, key) && !(exceptions && $79bb56e8cb746256$exports(exceptions, key))) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};


var $f442cd8844f436b3$exports = {};


var $f442cd8844f436b3$var$replacement = /#|\.prototype\./;
var $f442cd8844f436b3$var$isForced = function(feature, detection) {
    var value = $f442cd8844f436b3$var$data[$f442cd8844f436b3$var$normalize(feature)];
    return value == $f442cd8844f436b3$var$POLYFILL ? true : value == $f442cd8844f436b3$var$NATIVE ? false : $6f757bd049586dec$exports(detection) ? $f5abd19de922f032$exports(detection) : !!detection;
};
var $f442cd8844f436b3$var$normalize = $f442cd8844f436b3$var$isForced.normalize = function(string) {
    return String(string).replace($f442cd8844f436b3$var$replacement, ".").toLowerCase();
};
var $f442cd8844f436b3$var$data = $f442cd8844f436b3$var$isForced.data = {};
var $f442cd8844f436b3$var$NATIVE = $f442cd8844f436b3$var$isForced.NATIVE = "N";
var $f442cd8844f436b3$var$POLYFILL = $f442cd8844f436b3$var$isForced.POLYFILL = "P";
$f442cd8844f436b3$exports = $f442cd8844f436b3$var$isForced;


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
*/ $f118b995e66fd17d$exports = function(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) target = $07f66a1e1c7bbf24$exports;
    else if (STATIC) target = $07f66a1e1c7bbf24$exports[TARGET] || $b9166c35a37a01fd$exports(TARGET, {});
    else target = ($07f66a1e1c7bbf24$exports[TARGET] || {}).prototype;
    if (target) for(key in source){
        sourceProperty = source[key];
        if (options.dontCallGetSet) {
            descriptor = $f118b995e66fd17d$require$getOwnPropertyDescriptor(target, key);
            targetProperty = descriptor && descriptor.value;
        } else targetProperty = target[key];
        FORCED = $f442cd8844f436b3$exports(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
        // contained in target
        if (!FORCED && targetProperty !== undefined) {
            if (typeof sourceProperty == typeof targetProperty) continue;
            $518405a36db6bdf3$exports(sourceProperty, targetProperty);
        }
        // add a flag to not completely full polyfills
        if (options.sham || targetProperty && targetProperty.sham) $69dcd8db69bcac03$exports(sourceProperty, "sham", true);
        $7da21459d1c066ce$exports(target, key, sourceProperty, options);
    }
};



var $7c88d463a4d91d79$exports = {};

$7c88d463a4d91d79$exports = $07f66a1e1c7bbf24$exports.Promise;





var $46360852acbd50e6$exports = {};

var $c558e85aea9a1c4c$exports = {};
var $8fad41524e887ff7$exports = {};



var $a7638ad6dc7ff9fd$exports = {};
var $cd416f051946d511$exports = {};

var $cd416f051946d511$var$TO_STRING_TAG = $6e3e2dccd8d157b1$exports("toStringTag");
var $cd416f051946d511$var$test = {};
$cd416f051946d511$var$test[$cd416f051946d511$var$TO_STRING_TAG] = "z";
$cd416f051946d511$exports = String($cd416f051946d511$var$test) === "[object z]";





var $a7638ad6dc7ff9fd$var$TO_STRING_TAG = $6e3e2dccd8d157b1$exports("toStringTag");
var $a7638ad6dc7ff9fd$var$$Object = Object;
// ES3 wrong here
var $a7638ad6dc7ff9fd$var$CORRECT_ARGUMENTS = $47cee92d2e5cea88$exports(function() {
    return arguments;
}()) == "Arguments";
// fallback for IE11 Script Access Denied error
var $a7638ad6dc7ff9fd$var$tryGet = function(it, key) {
    try {
        return it[key];
    } catch (error) {}
};
// getting tag from ES6+ `Object.prototype.toString`
$a7638ad6dc7ff9fd$exports = $cd416f051946d511$exports ? $47cee92d2e5cea88$exports : function(it) {
    var O, tag, result;
    return it === undefined ? "Undefined" : it === null ? "Null" : typeof (tag = $a7638ad6dc7ff9fd$var$tryGet(O = $a7638ad6dc7ff9fd$var$$Object(it), $a7638ad6dc7ff9fd$var$TO_STRING_TAG)) == "string" ? tag : $a7638ad6dc7ff9fd$var$CORRECT_ARGUMENTS ? $47cee92d2e5cea88$exports(O) : (result = $47cee92d2e5cea88$exports(O)) == "Object" && $6f757bd049586dec$exports(O.callee) ? "Arguments" : result;
};




var $8fad41524e887ff7$var$noop = function() {};
var $8fad41524e887ff7$var$empty = [];
var $8fad41524e887ff7$var$construct = $6da772f04a7c033c$exports("Reflect", "construct");
var $8fad41524e887ff7$var$constructorRegExp = /^\s*(?:class|function)\b/;
var $8fad41524e887ff7$var$exec = $187fe8a436652613$exports($8fad41524e887ff7$var$constructorRegExp.exec);
var $8fad41524e887ff7$var$INCORRECT_TO_STRING = !$8fad41524e887ff7$var$constructorRegExp.exec($8fad41524e887ff7$var$noop);
var $8fad41524e887ff7$var$isConstructorModern = function isConstructor(argument) {
    if (!$6f757bd049586dec$exports(argument)) return false;
    try {
        $8fad41524e887ff7$var$construct($8fad41524e887ff7$var$noop, $8fad41524e887ff7$var$empty, argument);
        return true;
    } catch (error) {
        return false;
    }
};
var $8fad41524e887ff7$var$isConstructorLegacy = function isConstructor(argument) {
    if (!$6f757bd049586dec$exports(argument)) return false;
    switch($a7638ad6dc7ff9fd$exports(argument)){
        case "AsyncFunction":
        case "GeneratorFunction":
        case "AsyncGeneratorFunction":
            return false;
    }
    try {
        // we can't check .prototype since constructors produced by .bind haven't it
        // `Function#toString` throws on some built-it function in some legacy engines
        // (for example, `DOMQuad` and similar in FF41-)
        return $8fad41524e887ff7$var$INCORRECT_TO_STRING || !!$8fad41524e887ff7$var$exec($8fad41524e887ff7$var$constructorRegExp, $dc399008d85bd356$exports(argument));
    } catch (error) {
        return true;
    }
};
$8fad41524e887ff7$var$isConstructorLegacy.sham = true;
// `IsConstructor` abstract operation
// https://tc39.es/ecma262/#sec-isconstructor
$8fad41524e887ff7$exports = !$8fad41524e887ff7$var$construct || $f5abd19de922f032$exports(function() {
    var called;
    return $8fad41524e887ff7$var$isConstructorModern($8fad41524e887ff7$var$isConstructorModern.call) || !$8fad41524e887ff7$var$isConstructorModern(Object) || !$8fad41524e887ff7$var$isConstructorModern(function() {
        called = true;
    }) || called;
}) ? $8fad41524e887ff7$var$isConstructorLegacy : $8fad41524e887ff7$var$isConstructorModern;



var $c558e85aea9a1c4c$var$$TypeError = TypeError;
// `Assert: IsConstructor(argument) is true`
$c558e85aea9a1c4c$exports = function(argument) {
    if ($8fad41524e887ff7$exports(argument)) return argument;
    throw $c558e85aea9a1c4c$var$$TypeError($def085b46ce0c977$exports(argument) + " is not a constructor");
};



var $46360852acbd50e6$var$SPECIES = $6e3e2dccd8d157b1$exports("species");
// `SpeciesConstructor` abstract operation
// https://tc39.es/ecma262/#sec-speciesconstructor
$46360852acbd50e6$exports = function(O, defaultConstructor) {
    var C = $d33863bd95e4e95d$exports(O).constructor;
    var S;
    return C === undefined || (S = $d33863bd95e4e95d$exports(C)[$46360852acbd50e6$var$SPECIES]) == undefined ? defaultConstructor : $c558e85aea9a1c4c$exports(S);
};


var $59a8e6be602137fc$exports = {};


// `NewPromiseCapability` abstract operation
// https://tc39.es/ecma262/#sec-newpromisecapability
var $9412ac3599ee9507$export$2d1720544b23b823;
"use strict";

var $9412ac3599ee9507$var$PromiseCapability = function(C) {
    var resolve, reject;
    this.promise = new C(function($$resolve, $$reject) {
        if (resolve !== undefined || reject !== undefined) throw TypeError("Bad Promise constructor");
        resolve = $$resolve;
        reject = $$reject;
    });
    this.resolve = $608d91685838956e$exports(resolve);
    this.reject = $608d91685838956e$exports(reject);
};
$9412ac3599ee9507$export$2d1720544b23b823 = function(C) {
    return new $9412ac3599ee9507$var$PromiseCapability(C);
};


$59a8e6be602137fc$exports = function(C, x) {
    $d33863bd95e4e95d$exports(C);
    if ($68fb9d1e346bb669$exports(x) && x.constructor === C) return x;
    var promiseCapability = $9412ac3599ee9507$export$2d1720544b23b823(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
};



var $bf00421aba71a4a6$var$NativePromisePrototype = $7c88d463a4d91d79$exports && $7c88d463a4d91d79$exports.prototype;
// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
var $bf00421aba71a4a6$var$NON_GENERIC = !!$7c88d463a4d91d79$exports && $f5abd19de922f032$exports(function() {
    // eslint-disable-next-line unicorn/no-thenable -- required for testing
    $bf00421aba71a4a6$var$NativePromisePrototype["finally"].call({
        then: function() {}
    }, function() {});
});
// `Promise.prototype.finally` method
// https://tc39.es/ecma262/#sec-promise.prototype.finally
$f118b995e66fd17d$exports({
    target: "Promise",
    proto: true,
    real: true,
    forced: $bf00421aba71a4a6$var$NON_GENERIC
}, {
    "finally": function(onFinally) {
        var C = $46360852acbd50e6$exports(this, $6da772f04a7c033c$exports("Promise"));
        var isFunction = $6f757bd049586dec$exports(onFinally);
        return this.then(isFunction ? function(x) {
            return $59a8e6be602137fc$exports(C, onFinally()).then(function() {
                return x;
            });
        } : onFinally, isFunction ? function(e) {
            return $59a8e6be602137fc$exports(C, onFinally()).then(function() {
                throw e;
            });
        } : onFinally);
    }
});
// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
if (!$179f94dc4819b146$exports && $6f757bd049586dec$exports($7c88d463a4d91d79$exports)) {
    var $bf00421aba71a4a6$var$method = $6da772f04a7c033c$exports("Promise").prototype["finally"];
    if ($bf00421aba71a4a6$var$NativePromisePrototype["finally"] !== $bf00421aba71a4a6$var$method) $7da21459d1c066ce$exports($bf00421aba71a4a6$var$NativePromisePrototype, "finally", $bf00421aba71a4a6$var$method, {
        unsafe: true
    });
}



var $9a9e250b778a84fa$exports = {};
// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
$9a9e250b778a84fa$exports = {
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


var $9c9fd2936c3b4b13$exports = {};

var $9c9fd2936c3b4b13$var$classList = $1f136802e151039f$exports("span").classList;
var $9c9fd2936c3b4b13$var$DOMTokenListPrototype = $9c9fd2936c3b4b13$var$classList && $9c9fd2936c3b4b13$var$classList.constructor && $9c9fd2936c3b4b13$var$classList.constructor.prototype;
$9c9fd2936c3b4b13$exports = $9c9fd2936c3b4b13$var$DOMTokenListPrototype === Object.prototype ? undefined : $9c9fd2936c3b4b13$var$DOMTokenListPrototype;


var $3b5575547ea879f4$exports = {};
"use strict";

var $92010af95b3312f1$exports = {};

var $c307f43bfd3e43fd$exports = {};

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
var $19545f4413eeb875$export$2d1720544b23b823;





var $47280c1432b06da7$exports = {};


// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
$47280c1432b06da7$exports = Object.keys || function keys(O) {
    return $a6fa318a241d87db$exports(O, $b7d9b65a3d066dcb$exports);
};


$19545f4413eeb875$export$2d1720544b23b823 = $0a9e9eb76e8ffec5$exports && !$0451f8882a68f90a$exports ? Object.defineProperties : function defineProperties(O, Properties) {
    $d33863bd95e4e95d$exports(O);
    var props = $aa5555fbe0a5b681$exports(Properties);
    var keys = $47280c1432b06da7$exports(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while(length > index)$8fdc88db56cba5a1$export$2d1720544b23b823(O, key = keys[index++], props[key]);
    return O;
};




var $12fe8d62e4a6f8cb$exports = {};

$12fe8d62e4a6f8cb$exports = $6da772f04a7c033c$exports("document", "documentElement");




var $c307f43bfd3e43fd$var$GT = ">";
var $c307f43bfd3e43fd$var$LT = "<";
var $c307f43bfd3e43fd$var$PROTOTYPE = "prototype";
var $c307f43bfd3e43fd$var$SCRIPT = "script";
var $c307f43bfd3e43fd$var$IE_PROTO = $18110cd658fc35e5$exports("IE_PROTO");
var $c307f43bfd3e43fd$var$EmptyConstructor = function() {};
var $c307f43bfd3e43fd$var$scriptTag = function(content) {
    return $c307f43bfd3e43fd$var$LT + $c307f43bfd3e43fd$var$SCRIPT + $c307f43bfd3e43fd$var$GT + content + $c307f43bfd3e43fd$var$LT + "/" + $c307f43bfd3e43fd$var$SCRIPT + $c307f43bfd3e43fd$var$GT;
};
// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var $c307f43bfd3e43fd$var$NullProtoObjectViaActiveX = function(activeXDocument1) {
    activeXDocument1.write($c307f43bfd3e43fd$var$scriptTag(""));
    activeXDocument1.close();
    var temp = activeXDocument1.parentWindow.Object;
    activeXDocument1 = null; // avoid memory leak
    return temp;
};
// Create object with fake `null` prototype: use iframe Object with cleared prototype
var $c307f43bfd3e43fd$var$NullProtoObjectViaIFrame = function() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = $1f136802e151039f$exports("iframe");
    var JS = "java" + $c307f43bfd3e43fd$var$SCRIPT + ":";
    var iframeDocument;
    iframe.style.display = "none";
    $12fe8d62e4a6f8cb$exports.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write($c307f43bfd3e43fd$var$scriptTag("document.F=Object"));
    iframeDocument.close();
    return iframeDocument.F;
};
// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var $c307f43bfd3e43fd$var$activeXDocument;
var $c307f43bfd3e43fd$var$NullProtoObject = function() {
    try {
        $c307f43bfd3e43fd$var$activeXDocument = new ActiveXObject("htmlfile");
    } catch (error) {}
    $c307f43bfd3e43fd$var$NullProtoObject = typeof document != "undefined" ? document.domain && $c307f43bfd3e43fd$var$activeXDocument ? $c307f43bfd3e43fd$var$NullProtoObjectViaActiveX($c307f43bfd3e43fd$var$activeXDocument) // old IE
     : $c307f43bfd3e43fd$var$NullProtoObjectViaIFrame() : $c307f43bfd3e43fd$var$NullProtoObjectViaActiveX($c307f43bfd3e43fd$var$activeXDocument); // WSH
    var length = $b7d9b65a3d066dcb$exports.length;
    while(length--)delete $c307f43bfd3e43fd$var$NullProtoObject[$c307f43bfd3e43fd$var$PROTOTYPE][$b7d9b65a3d066dcb$exports[length]];
    return $c307f43bfd3e43fd$var$NullProtoObject();
};
$c347282aa3b8383a$exports[$c307f43bfd3e43fd$var$IE_PROTO] = true;
// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
$c307f43bfd3e43fd$exports = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
        $c307f43bfd3e43fd$var$EmptyConstructor[$c307f43bfd3e43fd$var$PROTOTYPE] = $d33863bd95e4e95d$exports(O);
        result = new $c307f43bfd3e43fd$var$EmptyConstructor();
        $c307f43bfd3e43fd$var$EmptyConstructor[$c307f43bfd3e43fd$var$PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[$c307f43bfd3e43fd$var$IE_PROTO] = O;
    } else result = $c307f43bfd3e43fd$var$NullProtoObject();
    return Properties === undefined ? result : $19545f4413eeb875$export$2d1720544b23b823(result, Properties);
};



var $92010af95b3312f1$require$defineProperty = $8fdc88db56cba5a1$export$2d1720544b23b823;
var $92010af95b3312f1$var$UNSCOPABLES = $6e3e2dccd8d157b1$exports("unscopables");
var $92010af95b3312f1$var$ArrayPrototype = Array.prototype;
// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if ($92010af95b3312f1$var$ArrayPrototype[$92010af95b3312f1$var$UNSCOPABLES] == undefined) $92010af95b3312f1$require$defineProperty($92010af95b3312f1$var$ArrayPrototype, $92010af95b3312f1$var$UNSCOPABLES, {
    configurable: true,
    value: $c307f43bfd3e43fd$exports(null)
});
// add a key to Array.prototype[@@unscopables]
$92010af95b3312f1$exports = function(key) {
    $92010af95b3312f1$var$ArrayPrototype[$92010af95b3312f1$var$UNSCOPABLES][key] = true;
};


var $cdf879d0b21f94c7$exports = {};
$cdf879d0b21f94c7$exports = {};




var $3b5575547ea879f4$require$defineProperty = $8fdc88db56cba5a1$export$2d1720544b23b823;
var $56e470329451b6b8$exports = {};
"use strict";





var $69086cb399c244d7$exports = {};
"use strict";
var $86ee608eeb4460a4$exports = {};
"use strict";



var $44d60790162fd103$exports = {};




var $e21ad48d01f43ad5$exports = {};

$e21ad48d01f43ad5$exports = !$f5abd19de922f032$exports(function() {
    function F() {}
    F.prototype.constructor = null;
    // eslint-disable-next-line es-x/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
});


var $44d60790162fd103$var$IE_PROTO = $18110cd658fc35e5$exports("IE_PROTO");
var $44d60790162fd103$var$$Object = Object;
var $44d60790162fd103$var$ObjectPrototype = $44d60790162fd103$var$$Object.prototype;
// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es-x/no-object-getprototypeof -- safe
$44d60790162fd103$exports = $e21ad48d01f43ad5$exports ? $44d60790162fd103$var$$Object.getPrototypeOf : function(O) {
    var object = $03d4e910d913b7bd$exports(O);
    if ($79bb56e8cb746256$exports(object, $44d60790162fd103$var$IE_PROTO)) return object[$44d60790162fd103$var$IE_PROTO];
    var constructor = object.constructor;
    if ($6f757bd049586dec$exports(constructor) && object instanceof constructor) return constructor.prototype;
    return object instanceof $44d60790162fd103$var$$Object ? $44d60790162fd103$var$ObjectPrototype : null;
};





var $86ee608eeb4460a4$var$ITERATOR = $6e3e2dccd8d157b1$exports("iterator");
var $86ee608eeb4460a4$var$BUGGY_SAFARI_ITERATORS = false;
// `%IteratorPrototype%` object
// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
var $86ee608eeb4460a4$var$IteratorPrototype, $86ee608eeb4460a4$var$PrototypeOfArrayIteratorPrototype, $86ee608eeb4460a4$var$arrayIterator;
/* eslint-disable es-x/no-array-prototype-keys -- safe */ if ([].keys) {
    $86ee608eeb4460a4$var$arrayIterator = [].keys();
    // Safari 8 has buggy iterators w/o `next`
    if (!("next" in $86ee608eeb4460a4$var$arrayIterator)) $86ee608eeb4460a4$var$BUGGY_SAFARI_ITERATORS = true;
    else {
        $86ee608eeb4460a4$var$PrototypeOfArrayIteratorPrototype = $44d60790162fd103$exports($44d60790162fd103$exports($86ee608eeb4460a4$var$arrayIterator));
        if ($86ee608eeb4460a4$var$PrototypeOfArrayIteratorPrototype !== Object.prototype) $86ee608eeb4460a4$var$IteratorPrototype = $86ee608eeb4460a4$var$PrototypeOfArrayIteratorPrototype;
    }
}
var $86ee608eeb4460a4$var$NEW_ITERATOR_PROTOTYPE = $86ee608eeb4460a4$var$IteratorPrototype == undefined || $f5abd19de922f032$exports(function() {
    var test = {};
    // FF44- legacy iterators case
    return $86ee608eeb4460a4$var$IteratorPrototype[$86ee608eeb4460a4$var$ITERATOR].call(test) !== test;
});
if ($86ee608eeb4460a4$var$NEW_ITERATOR_PROTOTYPE) $86ee608eeb4460a4$var$IteratorPrototype = {};
else if ($179f94dc4819b146$exports) $86ee608eeb4460a4$var$IteratorPrototype = $c307f43bfd3e43fd$exports($86ee608eeb4460a4$var$IteratorPrototype);
// `%IteratorPrototype%[@@iterator]()` method
// https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
if (!$6f757bd049586dec$exports($86ee608eeb4460a4$var$IteratorPrototype[$86ee608eeb4460a4$var$ITERATOR])) $7da21459d1c066ce$exports($86ee608eeb4460a4$var$IteratorPrototype, $86ee608eeb4460a4$var$ITERATOR, function() {
    return this;
});
$86ee608eeb4460a4$exports = {
    IteratorPrototype: $86ee608eeb4460a4$var$IteratorPrototype,
    BUGGY_SAFARI_ITERATORS: $86ee608eeb4460a4$var$BUGGY_SAFARI_ITERATORS
};


var $69086cb399c244d7$require$IteratorPrototype = $86ee608eeb4460a4$exports.IteratorPrototype;


var $4353480759f6b5c0$exports = {};

var $4353480759f6b5c0$require$defineProperty = $8fdc88db56cba5a1$export$2d1720544b23b823;


var $4353480759f6b5c0$var$TO_STRING_TAG = $6e3e2dccd8d157b1$exports("toStringTag");
$4353480759f6b5c0$exports = function(target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;
    if (target && !$79bb56e8cb746256$exports(target, $4353480759f6b5c0$var$TO_STRING_TAG)) $4353480759f6b5c0$require$defineProperty(target, $4353480759f6b5c0$var$TO_STRING_TAG, {
        configurable: true,
        value: TAG
    });
};



var $69086cb399c244d7$var$returnThis = function() {
    return this;
};
$69086cb399c244d7$exports = function(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + " Iterator";
    IteratorConstructor.prototype = $c307f43bfd3e43fd$exports($69086cb399c244d7$require$IteratorPrototype, {
        next: $ddbc107bf9012404$exports(+!ENUMERABLE_NEXT, next)
    });
    $4353480759f6b5c0$exports(IteratorConstructor, TO_STRING_TAG, false, true);
    $cdf879d0b21f94c7$exports[TO_STRING_TAG] = $69086cb399c244d7$var$returnThis;
    return IteratorConstructor;
};



var $5bc9cebd2b97cc48$exports = {};


var $2b6ce0f65bfb1fb3$exports = {};

var $2b6ce0f65bfb1fb3$var$$String = String;
var $2b6ce0f65bfb1fb3$var$$TypeError = TypeError;
$2b6ce0f65bfb1fb3$exports = function(argument) {
    if (typeof argument == "object" || $6f757bd049586dec$exports(argument)) return argument;
    throw $2b6ce0f65bfb1fb3$var$$TypeError("Can't set " + $2b6ce0f65bfb1fb3$var$$String(argument) + " as a prototype");
};


// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es-x/no-object-setprototypeof -- safe
$5bc9cebd2b97cc48$exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
        // eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
        setter = $187fe8a436652613$exports(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set);
        setter(test, []);
        CORRECT_SETTER = test instanceof Array;
    } catch (error) {}
    return function setPrototypeOf(O, proto) {
        $d33863bd95e4e95d$exports(O);
        $2b6ce0f65bfb1fb3$exports(proto);
        if (CORRECT_SETTER) setter(O, proto);
        else O.__proto__ = proto;
        return O;
    };
}() : undefined);








var $56e470329451b6b8$var$PROPER_FUNCTION_NAME = $73777c6bc24c33f3$exports.PROPER;
var $56e470329451b6b8$var$CONFIGURABLE_FUNCTION_NAME = $73777c6bc24c33f3$exports.CONFIGURABLE;
var $56e470329451b6b8$var$IteratorPrototype = $86ee608eeb4460a4$exports.IteratorPrototype;
var $56e470329451b6b8$var$BUGGY_SAFARI_ITERATORS = $86ee608eeb4460a4$exports.BUGGY_SAFARI_ITERATORS;
var $56e470329451b6b8$var$ITERATOR = $6e3e2dccd8d157b1$exports("iterator");
var $56e470329451b6b8$var$KEYS = "keys";
var $56e470329451b6b8$var$VALUES = "values";
var $56e470329451b6b8$var$ENTRIES = "entries";
var $56e470329451b6b8$var$returnThis = function() {
    return this;
};
$56e470329451b6b8$exports = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    $69086cb399c244d7$exports(IteratorConstructor, NAME, next);
    var getIterationMethod = function(KIND) {
        if (KIND === DEFAULT && defaultIterator) return defaultIterator;
        if (!$56e470329451b6b8$var$BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
        switch(KIND){
            case $56e470329451b6b8$var$KEYS:
                return function keys() {
                    return new IteratorConstructor(this, KIND);
                };
            case $56e470329451b6b8$var$VALUES:
                return function values() {
                    return new IteratorConstructor(this, KIND);
                };
            case $56e470329451b6b8$var$ENTRIES:
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
    var nativeIterator = IterablePrototype[$56e470329451b6b8$var$ITERATOR] || IterablePrototype["@@iterator"] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !$56e470329451b6b8$var$BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == "Array" ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY;
    // fix native
    if (anyNativeIterator) {
        CurrentIteratorPrototype = $44d60790162fd103$exports(anyNativeIterator.call(new Iterable()));
        if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
            if (!$179f94dc4819b146$exports && $44d60790162fd103$exports(CurrentIteratorPrototype) !== $56e470329451b6b8$var$IteratorPrototype) {
                if ($5bc9cebd2b97cc48$exports) $5bc9cebd2b97cc48$exports(CurrentIteratorPrototype, $56e470329451b6b8$var$IteratorPrototype);
                else if (!$6f757bd049586dec$exports(CurrentIteratorPrototype[$56e470329451b6b8$var$ITERATOR])) $7da21459d1c066ce$exports(CurrentIteratorPrototype, $56e470329451b6b8$var$ITERATOR, $56e470329451b6b8$var$returnThis);
            }
            // Set @@toStringTag to native iterators
            $4353480759f6b5c0$exports(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
            if ($179f94dc4819b146$exports) $cdf879d0b21f94c7$exports[TO_STRING_TAG] = $56e470329451b6b8$var$returnThis;
        }
    }
    // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if ($56e470329451b6b8$var$PROPER_FUNCTION_NAME && DEFAULT == $56e470329451b6b8$var$VALUES && nativeIterator && nativeIterator.name !== $56e470329451b6b8$var$VALUES) {
        if (!$179f94dc4819b146$exports && $56e470329451b6b8$var$CONFIGURABLE_FUNCTION_NAME) $69dcd8db69bcac03$exports(IterablePrototype, "name", $56e470329451b6b8$var$VALUES);
        else {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
                return $3d2adb84c511c311$exports(nativeIterator, this);
            };
        }
    }
    // export additional methods
    if (DEFAULT) {
        methods = {
            values: getIterationMethod($56e470329451b6b8$var$VALUES),
            keys: IS_SET ? defaultIterator : getIterationMethod($56e470329451b6b8$var$KEYS),
            entries: getIterationMethod($56e470329451b6b8$var$ENTRIES)
        };
        if (FORCED) {
            for(KEY in methods)if ($56e470329451b6b8$var$BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) $7da21459d1c066ce$exports(IterablePrototype, KEY, methods[KEY]);
        } else $f118b995e66fd17d$exports({
            target: NAME,
            proto: true,
            forced: $56e470329451b6b8$var$BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
        }, methods);
    }
    // define iterator
    if ((!$179f94dc4819b146$exports || FORCED) && IterablePrototype[$56e470329451b6b8$var$ITERATOR] !== defaultIterator) $7da21459d1c066ce$exports(IterablePrototype, $56e470329451b6b8$var$ITERATOR, defaultIterator, {
        name: DEFAULT
    });
    $cdf879d0b21f94c7$exports[NAME] = defaultIterator;
    return methods;
};




var $3b5575547ea879f4$var$ARRAY_ITERATOR = "Array Iterator";
var $3b5575547ea879f4$var$setInternalState = $195f1b182af83311$exports.set;
var $3b5575547ea879f4$var$getInternalState = $195f1b182af83311$exports.getterFor($3b5575547ea879f4$var$ARRAY_ITERATOR);
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
$3b5575547ea879f4$exports = $56e470329451b6b8$exports(Array, "Array", function(iterated, kind) {
    $3b5575547ea879f4$var$setInternalState(this, {
        type: $3b5575547ea879f4$var$ARRAY_ITERATOR,
        target: $aa5555fbe0a5b681$exports(iterated),
        index: 0,
        kind: kind // kind
    });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
}, function() {
    var state = $3b5575547ea879f4$var$getInternalState(this);
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
var $3b5575547ea879f4$var$values = $cdf879d0b21f94c7$exports.Arguments = $cdf879d0b21f94c7$exports.Array;
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
$92010af95b3312f1$exports("keys");
$92010af95b3312f1$exports("values");
$92010af95b3312f1$exports("entries");
// V8 ~ Chrome 45- bug
if (!$179f94dc4819b146$exports && $0a9e9eb76e8ffec5$exports && $3b5575547ea879f4$var$values.name !== "values") try {
    $3b5575547ea879f4$require$defineProperty($3b5575547ea879f4$var$values, "name", {
        value: "values"
    });
} catch (error) {}




var $0a4752d5458dcaab$var$ITERATOR = $6e3e2dccd8d157b1$exports("iterator");
var $0a4752d5458dcaab$var$TO_STRING_TAG = $6e3e2dccd8d157b1$exports("toStringTag");
var $0a4752d5458dcaab$var$ArrayValues = $3b5575547ea879f4$exports.values;
var $0a4752d5458dcaab$var$handlePrototype = function(CollectionPrototype, COLLECTION_NAME1) {
    if (CollectionPrototype) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[$0a4752d5458dcaab$var$ITERATOR] !== $0a4752d5458dcaab$var$ArrayValues) try {
            $69dcd8db69bcac03$exports(CollectionPrototype, $0a4752d5458dcaab$var$ITERATOR, $0a4752d5458dcaab$var$ArrayValues);
        } catch (error) {
            CollectionPrototype[$0a4752d5458dcaab$var$ITERATOR] = $0a4752d5458dcaab$var$ArrayValues;
        }
        if (!CollectionPrototype[$0a4752d5458dcaab$var$TO_STRING_TAG]) $69dcd8db69bcac03$exports(CollectionPrototype, $0a4752d5458dcaab$var$TO_STRING_TAG, COLLECTION_NAME1);
        if ($9a9e250b778a84fa$exports[COLLECTION_NAME1]) for(var METHOD_NAME in $3b5575547ea879f4$exports){
            // some Chrome versions have non-configurable methods on DOMTokenList
            if (CollectionPrototype[METHOD_NAME] !== $3b5575547ea879f4$exports[METHOD_NAME]) try {
                $69dcd8db69bcac03$exports(CollectionPrototype, METHOD_NAME, $3b5575547ea879f4$exports[METHOD_NAME]);
            } catch (error) {
                CollectionPrototype[METHOD_NAME] = $3b5575547ea879f4$exports[METHOD_NAME];
            }
        }
    }
};
for(var $0a4752d5458dcaab$var$COLLECTION_NAME in $9a9e250b778a84fa$exports)$0a4752d5458dcaab$var$handlePrototype($07f66a1e1c7bbf24$exports[$0a4752d5458dcaab$var$COLLECTION_NAME] && $07f66a1e1c7bbf24$exports[$0a4752d5458dcaab$var$COLLECTION_NAME].prototype, $0a4752d5458dcaab$var$COLLECTION_NAME);
$0a4752d5458dcaab$var$handlePrototype($9c9fd2936c3b4b13$exports, "DOMTokenList");


var $3997bf1755da0bed$exports = {};
$3997bf1755da0bed$exports = ":host {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n}\n\n:host > .container, :host > .container > .slide-outer-wrapper, :host > .container > .slide-outer-wrapper > .slide-inner-wrapper {\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  position: absolute;\n}\n\n:host > .container > .slide-outer-wrapper > .slide-inner-wrapper > .slide {\n  --slide-background-color: black;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  background-color: var(--slide-background-color);\n  --fit-cover-max-width: auto;\n  --fit-cover-max-height: auto;\n  --fit-contain-min-width: auto;\n  --fit-contain-min-height: auto;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  position: absolute;\n}\n\n:host > .container > .slide-outer-wrapper > .slide-inner-wrapper > .slide > .content {\n  position: absolute;\n}\n\n:host > .container > .slide-outer-wrapper > .slide-inner-wrapper > .slide > .content.fit-cover {\n  max-width: var(--fit-contain-max-width);\n  max-height: var(--fit-contain-max-height);\n  min-width: 100%;\n  min-height: 100%;\n}\n\n:host > .container > .slide-outer-wrapper > .slide-inner-wrapper > .slide > .content.fit-contain {\n  min-width: var(--fit-contain-min-width);\n  min-height: var(--fit-contain-min-height);\n  max-width: 100%;\n  max-height: 100%;\n}\n\n.preload-area {\n  display: none;\n}\n\n";



class $82db5595f3eb13f9$var$Base {
    buildExecutor(arg) {
        const unpackedArg = this.unpack(arg);
        return ()=>this.execute(unpackedArg);
    }
    constructor(state){
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "state", void 0);
        this.state = state;
    }
}
var $82db5595f3eb13f9$export$2e2bcd8739ae039 = $82db5595f3eb13f9$var$Base;


/* class decorator for ensuring static elements on classes */ function $72b5b0b5fe80c7c1$export$77e1154930d99c3d() {
    return (constructor)=>constructor;
}
/**
 * This function can be used to check if the type of a variable has been
 * narrowed down to the `never` type, i.e. that at the time of calling this
 * function, all other possible types have been covered beforehand.
 * @param n The variable to check for the `never` type.
 */ // eslint-disable-next-line @typescript-eslint/no-unused-vars
function $72b5b0b5fe80c7c1$export$57b5e12ee8bbcf57(n) {
    throw new TypeError("This function should never be called. If it has been called, your type narrowing is incomplete.");
}



var $91QCr = parcelRequire("91QCr");
const $04d4290cc7e97f72$var$ajv = new (0, (/*@__PURE__*/$parcel$interopDefault($91QCr)))();
function $04d4290cc7e97f72$export$edf3ed1163beae37(validate) {
    return (data, dataCtx)=>{
        if (typeof dataCtx === "undefined") {
            if (validate(data)) return data;
        } else if (validate(data)) return data;
        throw new TypeError(JSON.stringify(validate.errors));
    };
}
function $04d4290cc7e97f72$export$9ea1f4fe5062c6d(schema, _meta) {
    return $04d4290cc7e97f72$export$edf3ed1163beae37(typeof _meta === "undefined" ? $04d4290cc7e97f72$var$ajv.compile(schema) : $04d4290cc7e97f72$var$ajv.compile(schema, _meta));
}


const $dc7f221b5f1045df$var$preloadActionOptionsSchema = {
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
const $dc7f221b5f1045df$var$validatePreloadActionOptions = (0, $04d4290cc7e97f72$export$9ea1f4fe5062c6d)($dc7f221b5f1045df$var$preloadActionOptionsSchema);
class $dc7f221b5f1045df$var$PreloadAction extends (0, $82db5595f3eb13f9$export$2e2bcd8739ae039) {
    async execute(items) {
        const { preloader: preloader  } = this.state;
        preloader.clear();
        await Promise.resolve(); // this is just to make the method actually async
        return preloader.preload(...items);
    }
    // eslint-disable-next-line class-methods-use-this
    unpack(options) {
        return $dc7f221b5f1045df$var$validatePreloadActionOptions(options);
    }
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(state){
        super(state);
    }
}
var $dc7f221b5f1045df$export$2e2bcd8739ae039 = $dc7f221b5f1045df$var$PreloadAction;



/* eslint-disable no-console */ var $d71688a2f1aa6dcb$export$243e62d78d3b544d;
(function(LogLevel1) {
    LogLevel1[LogLevel1["OFF"] = 0] = "OFF";
    LogLevel1[LogLevel1["ERROR"] = 200] = "ERROR";
    LogLevel1[LogLevel1["WARN"] = 300] = "WARN";
    LogLevel1[LogLevel1["INFO"] = 400] = "INFO";
    LogLevel1[LogLevel1["DEBUG"] = 500] = "DEBUG";
    LogLevel1[LogLevel1["TRACE"] = 600] = "TRACE";
})($d71688a2f1aa6dcb$export$243e62d78d3b544d || ($d71688a2f1aa6dcb$export$243e62d78d3b544d = {}));
class $d71688a2f1aa6dcb$export$2e2bcd8739ae039 {
    error(...args) {
        if (this.level >= $d71688a2f1aa6dcb$export$243e62d78d3b544d.ERROR) console.error(...args);
    }
    assert(assertion, ...args) {
        if (this.level >= $d71688a2f1aa6dcb$export$243e62d78d3b544d.ERROR) console.assert(assertion, ...args);
    }
    warn(...args) {
        if (this.level >= $d71688a2f1aa6dcb$export$243e62d78d3b544d.WARN) console.warn(...args);
    }
    info(...args) {
        if (this.level >= $d71688a2f1aa6dcb$export$243e62d78d3b544d.INFO) console.info(...args);
    }
    debug(...args) {
        if (this.level >= $d71688a2f1aa6dcb$export$243e62d78d3b544d.DEBUG) console.debug(...args);
    }
    trace(...args) {
        if (this.level >= $d71688a2f1aa6dcb$export$243e62d78d3b544d.TRACE) console.trace(...args);
    }
    constructor(level = $d71688a2f1aa6dcb$export$243e62d78d3b544d.INFO){
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "level", void 0);
        this.level = level;
    }
}



class $91327a1ca1fd2def$var$ReloadAction extends (0, $82db5595f3eb13f9$export$2e2bcd8739ae039) {
    // eslint-disable-next-line class-methods-use-this
    async execute() {
        window.location.reload();
        return Promise.resolve();
    }
    // eslint-disable-next-line class-methods-use-this
    unpack() {}
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(state){
        super(state);
    }
}
var $91327a1ca1fd2def$export$2e2bcd8739ae039 = $91327a1ca1fd2def$var$ReloadAction;





class $c023f3034e047f76$export$af22135957e110d7 {
    promise() {
        return this._promise;
    }
    resolve(result) {
        return this._resolve(result);
    }
    reject() {
        return this._reject();
    }
    constructor(){
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "_promise", void 0);
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "_resolve", void 0);
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "_reject", void 0);
        // dummy initialization required to satisfy TS2564 (definite assignment)
        let tmpResolve = ()=>{};
        let tmpReject = ()=>{};
        this._promise = new Promise((resolve, reject)=>{
            tmpResolve = resolve;
            tmpReject = reject;
        });
        this._resolve = tmpResolve;
        this._reject = tmpReject;
    }
}
async function $c023f3034e047f76$export$1f4f18df0126964a(element, resolveEventNames, rejectEventNames) {
    return new Promise((resolve, reject)=>{
        const [resolveHandler, rejectHandler] = [
            ()=>{
                resolveEventNames.forEach((name)=>element.removeEventListener(name, resolveHandler));
                rejectEventNames.forEach((name)=>element.removeEventListener(name, rejectHandler));
                resolve(element);
            },
            (e)=>{
                resolveEventNames.forEach((name)=>element.removeEventListener(name, resolveHandler));
                rejectEventNames.forEach((name)=>element.removeEventListener(name, rejectHandler));
                reject(e);
            }, 
        ];
        resolveEventNames.forEach((e)=>element.addEventListener(e, resolveHandler));
        rejectEventNames.forEach((e)=>element.addEventListener(e, rejectHandler));
    });
}





class $36a0b5dcceb74366$var$Preloader {
    static key(mimetype, url) {
        return `{${mimetype}}{${url}}`;
    }
    preloadImpl(mimetype, url) {
        const key = $36a0b5dcceb74366$var$Preloader.key(mimetype, url);
        const cpe = $36a0b5dcceb74366$var$Preloader.createPreloadingElement.bind($36a0b5dcceb74366$var$Preloader);
        var ref;
        const element = (ref = this.refs.get(key)) !== null && ref !== void 0 ? ref : cpe(mimetype, url);
        this.container.appendChild(element);
        this.refs.set(key, element);
        return {
            key: key,
            element: element
        };
    }
    preload(...items) {
        return items.map(({ mimetype: mimetype , url: url  })=>this.preloadImpl(mimetype, url)).map(({ element: element  })=>$36a0b5dcceb74366$var$Preloader.readyForDisplay(element).then());
    }
    get(mimetype, url) {
        const { key: key , element: element  } = this.preloadImpl(mimetype, url);
        element.remove();
        const clonedElement = element.cloneNode(true);
        this.container.appendChild(clonedElement);
        this.refs.set(key, clonedElement);
        return element;
    }
    static async readyForDisplay(content) {
        if (content instanceof HTMLImageElement) await $36a0b5dcceb74366$var$Preloader.readyForDisplayImage(content);
        else if (content instanceof HTMLVideoElement) await $36a0b5dcceb74366$var$Preloader.readyForDisplayVideo(content);
        else (0, $72b5b0b5fe80c7c1$export$57b5e12ee8bbcf57)(content);
        return content;
    }
    static async readyForDisplayImage(image) {
        if (!image.complete) await (0, $c023f3034e047f76$export$1f4f18df0126964a)(image, [
            "load"
        ], [
            "abort",
            "error"
        ]);
        return image;
    }
    static async readyForDisplayVideo(video) {
        if (video.readyState < HTMLMediaElement.HAVE_ENOUGH_DATA) await (0, $c023f3034e047f76$export$1f4f18df0126964a)(video, [
            "canplaythrough"
        ], [
            "abort",
            "error"
        ]);
        return video;
    }
    static createPreloadingElement(mimetype, url) {
        const type = mimetype.split("/", 1)[0];
        switch(type){
            case "image":
                return $36a0b5dcceb74366$var$Preloader.createPreloadingImage(url);
            case "video":
                return $36a0b5dcceb74366$var$Preloader.createPreloadingVideo(url);
            default:
                throw new TypeError(`Unsupported MIME type: ${type} (${mimetype})`);
        }
    }
    static createPreloadingImage(url) {
        const { href: href  } = new URL(url);
        const image = new Image();
        image.src = href;
        return image;
    }
    static createPreloadingVideo(url) {
        const video = document.createElement("video");
        video.preload = "auto";
        video.src = url;
        video.autoplay = false;
        return video;
    }
    unrefImpl(...keys) {
        keys.forEach((key)=>{
            const element = this.refs.get(key);
            element === null || element === void 0 ? void 0 : element.remove();
            this.refs.delete(key);
        });
    }
    unref(...refs) {
        const keys = refs.map(({ mimetype: mimetype , url: url  })=>$36a0b5dcceb74366$var$Preloader.key(mimetype, url));
        this.unrefImpl(...keys);
    }
    clear() {
        this.unrefImpl(...this.refs.keys());
    }
    constructor(container = document.createElement("div")){
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "container", void 0);
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "refs", new Map());
        this.container = container;
    }
}
var $36a0b5dcceb74366$export$2e2bcd8739ae039 = $36a0b5dcceb74366$var$Preloader;


class $3f79f3079f811782$var$ContentCreator {
    static create(mimetype, url, preloader = new (0, $36a0b5dcceb74366$export$2e2bcd8739ae039)()) {
        return preloader.get(mimetype, url);
    }
    static play(content) {
        if (content instanceof HTMLImageElement) // NOOP
        return content;
        if (content instanceof HTMLVideoElement) {
            content.play().finally(()=>{});
            return content;
        }
        return (0, $72b5b0b5fe80c7c1$export$57b5e12ee8bbcf57)(content);
    }
    static setVolume(content, volume, mode) {
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
                    (0, $72b5b0b5fe80c7c1$export$57b5e12ee8bbcf57)(mode);
            }
            return content;
        }
        return (0, $72b5b0b5fe80c7c1$export$57b5e12ee8bbcf57)(content);
    }
    static setMuted(content, value) {
        if (content instanceof HTMLImageElement) // NOOP
        return content;
        if (content instanceof HTMLVideoElement) {
            // eslint-disable-next-line no-param-reassign
            content.muted = value;
            return content;
        }
        return (0, $72b5b0b5fe80c7c1$export$57b5e12ee8bbcf57)(content);
    }
    static async getDimensions(content) {
        if (content instanceof HTMLImageElement) return $3f79f3079f811782$var$ContentCreator.getDimensionsImage(content);
        if (content instanceof HTMLVideoElement) return $3f79f3079f811782$var$ContentCreator.getDimensionsVideo(content);
        return (0, $72b5b0b5fe80c7c1$export$57b5e12ee8bbcf57)(content);
    }
    static async getDimensionsImage(image) {
        if (!image.complete) await (0, $c023f3034e047f76$export$1f4f18df0126964a)(image, [
            "load"
        ], [
            "abort",
            "error"
        ]);
        return {
            width: image.naturalWidth,
            height: image.naturalHeight
        };
    }
    static async getDimensionsVideo(video) {
        if (video.readyState < HTMLMediaElement.HAVE_METADATA) await (0, $c023f3034e047f76$export$1f4f18df0126964a)(video, [
            "loadedmetadata"
        ], [
            "abort",
            "error"
        ]);
        return {
            width: video.videoWidth,
            height: video.videoHeight
        };
    }
}
var $3f79f3079f811782$export$2e2bcd8739ae039 = $3f79f3079f811782$var$ContentCreator;




var $8394d683a2aee90a$export$402e76927ebf6a24 = [];


var $2807c5b961685934$export$63c81bd924f89474 = function() {
    return (0, $8394d683a2aee90a$export$402e76927ebf6a24).some(function(ro) {
        return ro.activeTargets.length > 0;
    });
};



var $a1191d61eea43828$export$8ca35300535e324d = function() {
    return (0, $8394d683a2aee90a$export$402e76927ebf6a24).some(function(ro) {
        return ro.skippedTargets.length > 0;
    });
};


var $dc7dcde9d38bdc81$var$msg = "ResizeObserver loop completed with undelivered notifications.";
var $dc7dcde9d38bdc81$export$888cb69481582149 = function() {
    var event;
    if (typeof ErrorEvent === "function") event = new ErrorEvent("error", {
        message: $dc7dcde9d38bdc81$var$msg
    });
    else {
        event = document.createEvent("Event");
        event.initEvent("error", false, false);
        event.message = $dc7dcde9d38bdc81$var$msg;
    }
    window.dispatchEvent(event);
};



var $7579145f0f412eb7$export$416d111b83cd1483;
(function(ResizeObserverBoxOptions1) {
    ResizeObserverBoxOptions1["BORDER_BOX"] = "border-box";
    ResizeObserverBoxOptions1["CONTENT_BOX"] = "content-box";
    ResizeObserverBoxOptions1["DEVICE_PIXEL_CONTENT_BOX"] = "device-pixel-content-box";
})($7579145f0f412eb7$export$416d111b83cd1483 || ($7579145f0f412eb7$export$416d111b83cd1483 = {}));


var $0c2aa87af8517b21$export$792f3d81ea979f55 = function(obj) {
    return Object.freeze(obj);
};


var $3c226a09e5b35522$export$c9ad8cdf6bbd331c = function() {
    function ResizeObserverSize1(inlineSize, blockSize) {
        this.inlineSize = inlineSize;
        this.blockSize = blockSize;
        (0, $0c2aa87af8517b21$export$792f3d81ea979f55)(this);
    }
    return ResizeObserverSize1;
}();



var $6fdd034df4cb25e5$export$51d7a67026f4e0b7 = function() {
    function DOMRectReadOnly1(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.top = this.y;
        this.left = this.x;
        this.bottom = this.top + this.height;
        this.right = this.left + this.width;
        return (0, $0c2aa87af8517b21$export$792f3d81ea979f55)(this);
    }
    DOMRectReadOnly1.prototype.toJSON = function() {
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
    DOMRectReadOnly1.fromRect = function(rectangle) {
        return new DOMRectReadOnly1(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
    };
    return DOMRectReadOnly1;
}();


var $d48912506c10a436$export$165b39ed277223c2 = function(target) {
    return target instanceof SVGElement && "getBBox" in target;
};
var $d48912506c10a436$export$ee695c13482bb5dd = function(target) {
    if ($d48912506c10a436$export$165b39ed277223c2(target)) {
        var _a = target.getBBox(), width = _a.width, height = _a.height;
        return !width && !height;
    }
    var _b = target, offsetWidth = _b.offsetWidth, offsetHeight = _b.offsetHeight;
    return !(offsetWidth || offsetHeight || target.getClientRects().length);
};
var $d48912506c10a436$export$45a5e7f76e0caa8d = function(obj) {
    var _a, _b;
    if (obj instanceof Element) return true;
    var scope = (_b = (_a = obj) === null || _a === void 0 ? void 0 : _a.ownerDocument) === null || _b === void 0 ? void 0 : _b.defaultView;
    return !!(scope && obj instanceof scope.Element);
};
var $d48912506c10a436$export$a6eb60f7e7c182ba = function(target) {
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



var $ca7bbbd48a450e5f$export$90b4d2ff6acb88af = typeof window !== "undefined" ? window : {};


var $c5b55836edcec495$var$cache = new WeakMap();
var $c5b55836edcec495$var$scrollRegexp = /auto|scroll/;
var $c5b55836edcec495$var$verticalRegexp = /^tb|vertical/;
var $c5b55836edcec495$var$IE = /msie|trident/i.test((0, $ca7bbbd48a450e5f$export$90b4d2ff6acb88af).navigator && (0, $ca7bbbd48a450e5f$export$90b4d2ff6acb88af).navigator.userAgent);
var $c5b55836edcec495$var$parseDimension = function(pixel) {
    return parseFloat(pixel || "0");
};
var $c5b55836edcec495$var$size = function(inlineSize, blockSize, switchSizes) {
    if (inlineSize === void 0) inlineSize = 0;
    if (blockSize === void 0) blockSize = 0;
    if (switchSizes === void 0) switchSizes = false;
    return new (0, $3c226a09e5b35522$export$c9ad8cdf6bbd331c)((switchSizes ? blockSize : inlineSize) || 0, (switchSizes ? inlineSize : blockSize) || 0);
};
var $c5b55836edcec495$var$zeroBoxes = (0, $0c2aa87af8517b21$export$792f3d81ea979f55)({
    devicePixelContentBoxSize: $c5b55836edcec495$var$size(),
    borderBoxSize: $c5b55836edcec495$var$size(),
    contentBoxSize: $c5b55836edcec495$var$size(),
    contentRect: new (0, $6fdd034df4cb25e5$export$51d7a67026f4e0b7)(0, 0, 0, 0)
});
var $c5b55836edcec495$export$504d039a9c501c94 = function(target, forceRecalculation) {
    if (forceRecalculation === void 0) forceRecalculation = false;
    if ($c5b55836edcec495$var$cache.has(target) && !forceRecalculation) return $c5b55836edcec495$var$cache.get(target);
    if ((0, $d48912506c10a436$export$ee695c13482bb5dd)(target)) {
        $c5b55836edcec495$var$cache.set(target, $c5b55836edcec495$var$zeroBoxes);
        return $c5b55836edcec495$var$zeroBoxes;
    }
    var cs = getComputedStyle(target);
    var svg = (0, $d48912506c10a436$export$165b39ed277223c2)(target) && target.ownerSVGElement && target.getBBox();
    var removePadding = !$c5b55836edcec495$var$IE && cs.boxSizing === "border-box";
    var switchSizes = $c5b55836edcec495$var$verticalRegexp.test(cs.writingMode || "");
    var canScrollVertically = !svg && $c5b55836edcec495$var$scrollRegexp.test(cs.overflowY || "");
    var canScrollHorizontally = !svg && $c5b55836edcec495$var$scrollRegexp.test(cs.overflowX || "");
    var paddingTop = svg ? 0 : $c5b55836edcec495$var$parseDimension(cs.paddingTop);
    var paddingRight = svg ? 0 : $c5b55836edcec495$var$parseDimension(cs.paddingRight);
    var paddingBottom = svg ? 0 : $c5b55836edcec495$var$parseDimension(cs.paddingBottom);
    var paddingLeft = svg ? 0 : $c5b55836edcec495$var$parseDimension(cs.paddingLeft);
    var borderTop = svg ? 0 : $c5b55836edcec495$var$parseDimension(cs.borderTopWidth);
    var borderRight = svg ? 0 : $c5b55836edcec495$var$parseDimension(cs.borderRightWidth);
    var borderBottom = svg ? 0 : $c5b55836edcec495$var$parseDimension(cs.borderBottomWidth);
    var borderLeft = svg ? 0 : $c5b55836edcec495$var$parseDimension(cs.borderLeftWidth);
    var horizontalPadding = paddingLeft + paddingRight;
    var verticalPadding = paddingTop + paddingBottom;
    var horizontalBorderArea = borderLeft + borderRight;
    var verticalBorderArea = borderTop + borderBottom;
    var horizontalScrollbarThickness = !canScrollHorizontally ? 0 : target.offsetHeight - verticalBorderArea - target.clientHeight;
    var verticalScrollbarThickness = !canScrollVertically ? 0 : target.offsetWidth - horizontalBorderArea - target.clientWidth;
    var widthReduction = removePadding ? horizontalPadding + horizontalBorderArea : 0;
    var heightReduction = removePadding ? verticalPadding + verticalBorderArea : 0;
    var contentWidth = svg ? svg.width : $c5b55836edcec495$var$parseDimension(cs.width) - widthReduction - verticalScrollbarThickness;
    var contentHeight = svg ? svg.height : $c5b55836edcec495$var$parseDimension(cs.height) - heightReduction - horizontalScrollbarThickness;
    var borderBoxWidth = contentWidth + horizontalPadding + verticalScrollbarThickness + horizontalBorderArea;
    var borderBoxHeight = contentHeight + verticalPadding + horizontalScrollbarThickness + verticalBorderArea;
    var boxes = (0, $0c2aa87af8517b21$export$792f3d81ea979f55)({
        devicePixelContentBoxSize: $c5b55836edcec495$var$size(Math.round(contentWidth * devicePixelRatio), Math.round(contentHeight * devicePixelRatio), switchSizes),
        borderBoxSize: $c5b55836edcec495$var$size(borderBoxWidth, borderBoxHeight, switchSizes),
        contentBoxSize: $c5b55836edcec495$var$size(contentWidth, contentHeight, switchSizes),
        contentRect: new (0, $6fdd034df4cb25e5$export$51d7a67026f4e0b7)(paddingLeft, paddingTop, contentWidth, contentHeight)
    });
    $c5b55836edcec495$var$cache.set(target, boxes);
    return boxes;
};
var $c5b55836edcec495$export$1a78030b04106bdb = function(target, observedBox, forceRecalculation) {
    var _a = $c5b55836edcec495$export$504d039a9c501c94(target, forceRecalculation), borderBoxSize = _a.borderBoxSize, contentBoxSize = _a.contentBoxSize, devicePixelContentBoxSize = _a.devicePixelContentBoxSize;
    switch(observedBox){
        case (0, $7579145f0f412eb7$export$416d111b83cd1483).DEVICE_PIXEL_CONTENT_BOX:
            return devicePixelContentBoxSize;
        case (0, $7579145f0f412eb7$export$416d111b83cd1483).BORDER_BOX:
            return borderBoxSize;
        default:
            return contentBoxSize;
    }
};



var $eb99ecbe52c061a5$export$226159b441fc89f8 = function() {
    function ResizeObserverEntry1(target) {
        var boxes = (0, $c5b55836edcec495$export$504d039a9c501c94)(target);
        this.target = target;
        this.contentRect = boxes.contentRect;
        this.borderBoxSize = (0, $0c2aa87af8517b21$export$792f3d81ea979f55)([
            boxes.borderBoxSize
        ]);
        this.contentBoxSize = (0, $0c2aa87af8517b21$export$792f3d81ea979f55)([
            boxes.contentBoxSize
        ]);
        this.devicePixelContentBoxSize = (0, $0c2aa87af8517b21$export$792f3d81ea979f55)([
            boxes.devicePixelContentBoxSize
        ]);
    }
    return ResizeObserverEntry1;
}();



var $de480516f12c3a57$export$f8c8e3b5da1f41d2 = function(node) {
    if ((0, $d48912506c10a436$export$ee695c13482bb5dd)(node)) return Infinity;
    var depth = 0;
    var parent = node.parentNode;
    while(parent){
        depth += 1;
        parent = parent.parentNode;
    }
    return depth;
};



var $b8894c33950a40ff$export$9cac928141e5443b = function() {
    var shallowestDepth = Infinity;
    var callbacks = [];
    (0, $8394d683a2aee90a$export$402e76927ebf6a24).forEach(function processObserver(ro) {
        if (ro.activeTargets.length === 0) return;
        var entries = [];
        ro.activeTargets.forEach(function processTarget(ot) {
            var entry = new (0, $eb99ecbe52c061a5$export$226159b441fc89f8)(ot.target);
            var targetDepth = (0, $de480516f12c3a57$export$f8c8e3b5da1f41d2)(ot.target);
            entries.push(entry);
            ot.lastReportedSize = (0, $c5b55836edcec495$export$1a78030b04106bdb)(ot.target, ot.observedBox);
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




var $940918fea9617f79$export$9c17b8913a2a3572 = function(depth) {
    (0, $8394d683a2aee90a$export$402e76927ebf6a24).forEach(function processObserver(ro) {
        ro.activeTargets.splice(0, ro.activeTargets.length);
        ro.skippedTargets.splice(0, ro.skippedTargets.length);
        ro.observationTargets.forEach(function processTarget(ot) {
            if (ot.isActive()) {
                if ((0, $de480516f12c3a57$export$f8c8e3b5da1f41d2)(ot.target) > depth) ro.activeTargets.push(ot);
                else ro.skippedTargets.push(ot);
            }
        });
    });
};


var $d630e8299b252c17$export$e54fe5b0f43758f7 = function() {
    var depth = 0;
    (0, $940918fea9617f79$export$9c17b8913a2a3572)(depth);
    while((0, $2807c5b961685934$export$63c81bd924f89474)()){
        depth = (0, $b8894c33950a40ff$export$9cac928141e5443b)();
        (0, $940918fea9617f79$export$9c17b8913a2a3572)(depth);
    }
    if ((0, $a1191d61eea43828$export$8ca35300535e324d)()) (0, $dc7dcde9d38bdc81$export$888cb69481582149)();
    return depth > 0;
};



var $56157505d866a577$var$trigger;
var $56157505d866a577$var$callbacks = [];
var $56157505d866a577$var$notify = function() {
    return $56157505d866a577$var$callbacks.splice(0).forEach(function(cb) {
        return cb();
    });
};
var $56157505d866a577$export$4c995d4933c4abb = function(callback) {
    if (!$56157505d866a577$var$trigger) {
        var toggle_1 = 0;
        var el_1 = document.createTextNode("");
        var config = {
            characterData: true
        };
        new MutationObserver(function() {
            return $56157505d866a577$var$notify();
        }).observe(el_1, config);
        $56157505d866a577$var$trigger = function() {
            el_1.textContent = "" + (toggle_1 ? toggle_1-- : toggle_1++);
        };
    }
    $56157505d866a577$var$callbacks.push(callback);
    $56157505d866a577$var$trigger();
};


var $b25977768b09a034$export$5755c7b572e34c6 = function(cb) {
    (0, $56157505d866a577$export$4c995d4933c4abb)(function ResizeObserver() {
        requestAnimationFrame(cb);
    });
};


var $f7362dcb5bb4e66b$var$watching = 0;
var $f7362dcb5bb4e66b$var$isWatching = function() {
    return !!$f7362dcb5bb4e66b$var$watching;
};
var $f7362dcb5bb4e66b$var$CATCH_PERIOD = 250;
var $f7362dcb5bb4e66b$var$observerConfig = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
};
var $f7362dcb5bb4e66b$var$events = [
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
var $f7362dcb5bb4e66b$var$time = function(timeout) {
    if (timeout === void 0) timeout = 0;
    return Date.now() + timeout;
};
var $f7362dcb5bb4e66b$var$scheduled = false;
var $f7362dcb5bb4e66b$var$Scheduler = function() {
    function Scheduler1() {
        var _this = this;
        this.stopped = true;
        this.listener = function() {
            return _this.schedule();
        };
    }
    Scheduler1.prototype.run = function(timeout) {
        var _this = this;
        if (timeout === void 0) timeout = $f7362dcb5bb4e66b$var$CATCH_PERIOD;
        if ($f7362dcb5bb4e66b$var$scheduled) return;
        $f7362dcb5bb4e66b$var$scheduled = true;
        var until = $f7362dcb5bb4e66b$var$time(timeout);
        (0, $b25977768b09a034$export$5755c7b572e34c6)(function() {
            var elementsHaveResized = false;
            try {
                elementsHaveResized = (0, $d630e8299b252c17$export$e54fe5b0f43758f7)();
            } finally{
                $f7362dcb5bb4e66b$var$scheduled = false;
                timeout = until - $f7362dcb5bb4e66b$var$time();
                if (!$f7362dcb5bb4e66b$var$isWatching()) return;
                if (elementsHaveResized) _this.run(1000);
                else if (timeout > 0) _this.run(timeout);
                else _this.start();
            }
        });
    };
    Scheduler1.prototype.schedule = function() {
        this.stop();
        this.run();
    };
    Scheduler1.prototype.observe = function() {
        var _this = this;
        var cb = function() {
            return _this.observer && _this.observer.observe(document.body, $f7362dcb5bb4e66b$var$observerConfig);
        };
        document.body ? cb() : (0, $ca7bbbd48a450e5f$export$90b4d2ff6acb88af).addEventListener("DOMContentLoaded", cb);
    };
    Scheduler1.prototype.start = function() {
        var _this = this;
        if (this.stopped) {
            this.stopped = false;
            this.observer = new MutationObserver(this.listener);
            this.observe();
            $f7362dcb5bb4e66b$var$events.forEach(function(name) {
                return (0, $ca7bbbd48a450e5f$export$90b4d2ff6acb88af).addEventListener(name, _this.listener, true);
            });
        }
    };
    Scheduler1.prototype.stop = function() {
        var _this = this;
        if (!this.stopped) {
            this.observer && this.observer.disconnect();
            $f7362dcb5bb4e66b$var$events.forEach(function(name) {
                return (0, $ca7bbbd48a450e5f$export$90b4d2ff6acb88af).removeEventListener(name, _this.listener, true);
            });
            this.stopped = true;
        }
    };
    return Scheduler1;
}();
var $f7362dcb5bb4e66b$export$d30788f2c20241cd = new $f7362dcb5bb4e66b$var$Scheduler();
var $f7362dcb5bb4e66b$export$1f18a74d42722835 = function(n) {
    !$f7362dcb5bb4e66b$var$watching && n > 0 && $f7362dcb5bb4e66b$export$d30788f2c20241cd.start();
    $f7362dcb5bb4e66b$var$watching += n;
    !$f7362dcb5bb4e66b$var$watching && $f7362dcb5bb4e66b$export$d30788f2c20241cd.stop();
};





var $aeafd6cd33759b8f$var$skipNotifyOnElement = function(target) {
    return !(0, $d48912506c10a436$export$165b39ed277223c2)(target) && !(0, $d48912506c10a436$export$a6eb60f7e7c182ba)(target) && getComputedStyle(target).display === "inline";
};
var $aeafd6cd33759b8f$export$fea412043713122 = function() {
    function ResizeObservation1(target, observedBox) {
        this.target = target;
        this.observedBox = observedBox || (0, $7579145f0f412eb7$export$416d111b83cd1483).CONTENT_BOX;
        this.lastReportedSize = {
            inlineSize: 0,
            blockSize: 0
        };
    }
    ResizeObservation1.prototype.isActive = function() {
        var size = (0, $c5b55836edcec495$export$1a78030b04106bdb)(this.target, this.observedBox, true);
        if ($aeafd6cd33759b8f$var$skipNotifyOnElement(this.target)) this.lastReportedSize = size;
        if (this.lastReportedSize.inlineSize !== size.inlineSize || this.lastReportedSize.blockSize !== size.blockSize) return true;
        return false;
    };
    return ResizeObservation1;
}();


var $4860277a1d03e484$export$d86966e6e4bc97e1 = function() {
    function ResizeObserverDetail1(resizeObserver, callback) {
        this.activeTargets = [];
        this.skippedTargets = [];
        this.observationTargets = [];
        this.observer = resizeObserver;
        this.callback = callback;
    }
    return ResizeObserverDetail1;
}();



var $7e2e32cdb20fa1ed$var$observerMap = new WeakMap();
var $7e2e32cdb20fa1ed$var$getObservationIndex = function(observationTargets, target) {
    for(var i = 0; i < observationTargets.length; i += 1){
        if (observationTargets[i].target === target) return i;
    }
    return -1;
};
var $7e2e32cdb20fa1ed$export$ed99c5bafbaf8300 = function() {
    function ResizeObserverController1() {}
    ResizeObserverController1.connect = function(resizeObserver, callback) {
        var detail = new (0, $4860277a1d03e484$export$d86966e6e4bc97e1)(resizeObserver, callback);
        $7e2e32cdb20fa1ed$var$observerMap.set(resizeObserver, detail);
    };
    ResizeObserverController1.observe = function(resizeObserver, target, options) {
        var detail = $7e2e32cdb20fa1ed$var$observerMap.get(resizeObserver);
        var firstObservation = detail.observationTargets.length === 0;
        if ($7e2e32cdb20fa1ed$var$getObservationIndex(detail.observationTargets, target) < 0) {
            firstObservation && (0, $8394d683a2aee90a$export$402e76927ebf6a24).push(detail);
            detail.observationTargets.push(new (0, $aeafd6cd33759b8f$export$fea412043713122)(target, options && options.box));
            (0, $f7362dcb5bb4e66b$export$1f18a74d42722835)(1);
            (0, $f7362dcb5bb4e66b$export$d30788f2c20241cd).schedule();
        }
    };
    ResizeObserverController1.unobserve = function(resizeObserver, target) {
        var detail = $7e2e32cdb20fa1ed$var$observerMap.get(resizeObserver);
        var index = $7e2e32cdb20fa1ed$var$getObservationIndex(detail.observationTargets, target);
        var lastObservation = detail.observationTargets.length === 1;
        if (index >= 0) {
            lastObservation && (0, $8394d683a2aee90a$export$402e76927ebf6a24).splice((0, $8394d683a2aee90a$export$402e76927ebf6a24).indexOf(detail), 1);
            detail.observationTargets.splice(index, 1);
            (0, $f7362dcb5bb4e66b$export$1f18a74d42722835)(-1);
        }
    };
    ResizeObserverController1.disconnect = function(resizeObserver) {
        var _this = this;
        var detail = $7e2e32cdb20fa1ed$var$observerMap.get(resizeObserver);
        detail.observationTargets.slice().forEach(function(ot) {
            return _this.unobserve(resizeObserver, ot.target);
        });
        detail.activeTargets.splice(0, detail.activeTargets.length);
    };
    return ResizeObserverController1;
}();



var $89ab6fda5f1cfd29$export$9caf76241ca21a11 = function() {
    function ResizeObserver1(callback) {
        if (arguments.length === 0) throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
        if (typeof callback !== "function") throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
        (0, $7e2e32cdb20fa1ed$export$ed99c5bafbaf8300).connect(this, callback);
    }
    ResizeObserver1.prototype.observe = function(target, options) {
        if (arguments.length === 0) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
        if (!(0, $d48912506c10a436$export$45a5e7f76e0caa8d)(target)) throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
        (0, $7e2e32cdb20fa1ed$export$ed99c5bafbaf8300).observe(this, target, options);
    };
    ResizeObserver1.prototype.unobserve = function(target) {
        if (arguments.length === 0) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
        if (!(0, $d48912506c10a436$export$45a5e7f76e0caa8d)(target)) throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
        (0, $7e2e32cdb20fa1ed$export$ed99c5bafbaf8300).unobserve(this, target);
    };
    ResizeObserver1.prototype.disconnect = function() {
        (0, $7e2e32cdb20fa1ed$export$ed99c5bafbaf8300).disconnect(this);
    };
    ResizeObserver1.toString = function() {
        return "function ResizeObserver () { [polyfill code] }";
    };
    return ResizeObserver1;
}();







// eslint-disable-next-line compat/compat
const $f0698a24b508f145$var$ResizeObserverOnWindow = window.ResizeObserver;
const $f0698a24b508f145$var$ResizeObserver = $f0698a24b508f145$var$ResizeObserverOnWindow || (0, $89ab6fda5f1cfd29$export$9caf76241ca21a11);
class $f0698a24b508f145$export$894f970d1d5db986 {
    update() {
        const contentSize = $f0698a24b508f145$export$894f970d1d5db986.elementSizes.get(this.content);
        if (typeof contentSize === "undefined") return;
        const containerSize = $f0698a24b508f145$export$894f970d1d5db986.elementSizes.get(this.container);
        if (typeof containerSize === "undefined") return;
        const containerAspectRatio = containerSize.width / containerSize.height;
        const contentAspectRatio = contentSize.width / contentSize.height;
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
    static register(container, content) {
        const updater = new $f0698a24b508f145$export$894f970d1d5db986(container, content);
        $f0698a24b508f145$export$894f970d1d5db986.addInstance(container, updater);
        $f0698a24b508f145$export$894f970d1d5db986.addInstance(content, updater);
        $f0698a24b508f145$export$894f970d1d5db986.resizeObserver.observe(container);
        (0, $3f79f3079f811782$export$2e2bcd8739ae039).getDimensions(content).then((size)=>{
            $f0698a24b508f145$export$894f970d1d5db986.elementSizes.set(content, size);
            updater.update();
        }).catch((reason)=>{
            // eslint-disable-next-line no-console
            console.error("Could not retrieve size of content element.", content, reason, "Content fitting will most likely not work for this element.");
        });
        return updater;
    }
    static unregister(updater) {
        const { container: container , content: content  } = updater;
        $f0698a24b508f145$export$894f970d1d5db986.removeInstance(container, updater);
        $f0698a24b508f145$export$894f970d1d5db986.removeInstance(content, updater);
    }
    static addInstance(elem, updater) {
        const instances = $f0698a24b508f145$export$894f970d1d5db986.getInstances(elem);
        instances.push(updater);
        $f0698a24b508f145$export$894f970d1d5db986.fitUpdaterInstances.set(elem, instances);
    }
    static removeInstance(elem, updater) {
        const instances = $f0698a24b508f145$export$894f970d1d5db986.getInstances(elem);
        const idx = instances.indexOf(updater);
        if (idx !== -1) $f0698a24b508f145$export$894f970d1d5db986.fitUpdaterInstances.set(elem, instances.splice(idx, 1));
    }
    static getInstances(elem) {
        const instances = $f0698a24b508f145$export$894f970d1d5db986.fitUpdaterInstances.get(elem);
        if (typeof instances === "undefined") return [];
        return [
            ...instances
        ];
    }
    static resizeObserverCallback(roes) {
        roes.filter(({ target: target  })=>target instanceof HTMLElement).forEach(({ target: target , contentRect: { width: width , height: height  }  })=>{
            const element = target;
            $f0698a24b508f145$export$894f970d1d5db986.elementSizes.set(element, {
                width: width,
                height: height
            });
            $f0698a24b508f145$export$894f970d1d5db986.getInstances(element).forEach((i)=>i.update());
        });
    }
    constructor(container, content){
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "container", void 0);
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "content", void 0);
        this.container = container;
        this.content = content;
    }
}
(0, $180022016c8cd477$export$2e2bcd8739ae039)($f0698a24b508f145$export$894f970d1d5db986, "resizeObserver", new $f0698a24b508f145$var$ResizeObserver($f0698a24b508f145$export$894f970d1d5db986.resizeObserverCallback.bind($f0698a24b508f145$export$894f970d1d5db986)));
(0, $180022016c8cd477$export$2e2bcd8739ae039)($f0698a24b508f145$export$894f970d1d5db986, "elementSizes", new WeakMap());
(0, $180022016c8cd477$export$2e2bcd8739ae039)($f0698a24b508f145$export$894f970d1d5db986, "fitUpdaterInstances", new WeakMap());
function $f0698a24b508f145$var$fitObject(container, content, type) {
    content.classList.add(`fit-${type}`);
    $f0698a24b508f145$export$894f970d1d5db986.register(container, content);
}
var $f0698a24b508f145$export$2e2bcd8739ae039 = $f0698a24b508f145$var$fitObject;


// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const $6af70478776110a7$var$showActionOptionsSchema = {
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
const $6af70478776110a7$var$validateShowActionOptions = (0, $04d4290cc7e97f72$export$9ea1f4fe5062c6d)($6af70478776110a7$var$showActionOptionsSchema);
const $6af70478776110a7$var$defaultOptionalShowArgs = {
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
class $6af70478776110a7$var$ShowAction extends (0, $82db5595f3eb13f9$export$2e2bcd8739ae039) {
    appendCurrentContent(contentElement, color = "black") {
        contentElement.classList.add("content");
        const slideElement = document.createElement("div");
        slideElement.style.setProperty("--slide-background-color", color);
        slideElement.classList.add("slide");
        slideElement.appendChild(contentElement);
        const slideInnerWrapperElement = document.createElement("div");
        slideInnerWrapperElement.classList.add("slide-inner-wrapper");
        slideInnerWrapperElement.appendChild(slideElement);
        const slideOuterWrapperElement = document.createElement("div");
        slideOuterWrapperElement.classList.add("slide-outer-wrapper");
        slideOuterWrapperElement.appendChild(slideInnerWrapperElement);
        const { container: container  } = this.state;
        container.appendChild(slideOuterWrapperElement);
        return {
            slideOuterWrapperElement: slideOuterWrapperElement,
            slideInnerWrapperElement: slideInnerWrapperElement,
            slideElement: slideElement,
            contentElement: contentElement
        };
    }
    removePreviousSlides(s) {
        const { activeSlides: activeSlides  } = this.state;
        const index = activeSlides.indexOf(s);
        if (index !== -1) {
            const previousSlides = activeSlides.slice(0, index);
            activeSlides.splice(0, index);
            previousSlides.forEach((ps)=>{
                const { parentNode: parentNode  } = ps.slideOuterWrapperElement;
                if (parentNode !== null) parentNode.removeChild(ps.slideOuterWrapperElement);
                ps.transition.cancel();
                ps.animation.cancel();
            });
        }
    }
    async execute(arg) {
        // first parse args and prepare transition and animation
        const transitionCreator = this.prepareTransition(arg);
        const animationCreator = this.prepareAnimation(arg);
        // args are parsed and considered OK
        const { mimetype: mimetype , url: url , fit: fit , color: color , startDelay: startDelay , volume: volume , muted: muted  } = {
            ...$6af70478776110a7$var$defaultOptionalShowArgs,
            ...arg
        };
        const { preloader: preloader  } = this.state;
        const content = (0, $3f79f3079f811782$export$2e2bcd8739ae039).create(mimetype, url, preloader);
        const currentDomStructure = this.appendCurrentContent(content, color !== null && color !== void 0 ? color : "black");
        (0, $f0698a24b508f145$export$2e2bcd8739ae039)(currentDomStructure.slideElement, content, fit);
        (0, $3f79f3079f811782$export$2e2bcd8739ae039).setMuted(content, this.state.muted || muted);
        (0, $3f79f3079f811782$export$2e2bcd8739ae039).setVolume(content, volume, "absolute");
        const transition = transitionCreator(currentDomStructure.slideOuterWrapperElement);
        const animation = animationCreator(currentDomStructure.slideElement);
        const { targetShowUpDelay: targetShowUpDelay  } = transition;
        const contentPlayDelay = startDelay !== null && startDelay !== void 0 ? startDelay : targetShowUpDelay;
        const contentPlayTimeoutId = setTimeout(()=>(0, $3f79f3079f811782$export$2e2bcd8739ae039).play(content), contentPlayDelay * 1000);
        const slideData = {
            ...currentDomStructure,
            transition: transition,
            animation: animation,
            contentPlayTimeoutId: contentPlayTimeoutId
        };
        const { activeSlides: activeSlides  } = this.state;
        activeSlides.push(slideData);
        try {
            await transition.out();
        } catch (e) {
            const msg = "Waiting for transition.out() failed. Proceeding anyway";
            if (e) this.state.log.warn(msg, e);
            else this.state.log.warn(msg);
        }
        this.removePreviousSlides(slideData);
    }
    prepareTransition({ transition: transition ,  }) {
        const { type: type , options: options  } = transition !== null && transition !== void 0 ? transition : {
            type: "none",
            options: {}
        };
        const { transitionFactory: transitionFactory  } = this.state;
        return transitionFactory.prepare(type, options);
    }
    prepareAnimation({ animation: animation ,  }) {
        const { type: type , options: options  } = animation !== null && animation !== void 0 ? animation : {
            type: "none",
            options: {}
        };
        const { animationFactory: animationFactory  } = this.state;
        return animationFactory.prepare(type, options);
    }
    // eslint-disable-next-line class-methods-use-this
    unpack(options) {
        return $6af70478776110a7$var$validateShowActionOptions(options);
    }
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(state){
        super(state);
    }
}
var $6af70478776110a7$export$2e2bcd8739ae039 = $6af70478776110a7$var$ShowAction;




// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const $56750857b8f56d61$var$clearActionOptionsSchema = {
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
const $56750857b8f56d61$var$validateClearActionOptions = (0, $04d4290cc7e97f72$export$9ea1f4fe5062c6d)($56750857b8f56d61$var$clearActionOptionsSchema);
const $56750857b8f56d61$var$defaultOptionalClearArgs = {
    color: "black",
    transition: {
        type: "none",
        options: {}
    }
};
class $56750857b8f56d61$var$ClearAction extends (0, $82db5595f3eb13f9$export$2e2bcd8739ae039) {
    // eslint-disable-next-line class-methods-use-this
    async execute(arg) {
        const showActionOptions = {
            ...$56750857b8f56d61$var$defaultOptionalClearArgs,
            ...arg,
            mimetype: "image/gif",
            url: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
            animation: {
                type: "none"
            }
        };
        const { viewer: viewer  } = this.state;
        await viewer.execute("show", showActionOptions);
    }
    // eslint-disable-next-line class-methods-use-this
    unpack(options) {
        return $56750857b8f56d61$var$validateClearActionOptions(options);
    }
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(state){
        super(state);
    }
}
var $56750857b8f56d61$export$2e2bcd8739ae039 = $56750857b8f56d61$var$ClearAction;


/* eslint-disable import/prefer-default-export */ function $3164f4d4509225dd$export$c2aff9e92362a9b2(root, stylesheetText, id) {
    const style = document.createElement("style");
    if (typeof id !== "undefined") style.id = id;
    style.textContent = stylesheetText;
    const selector = "style[type='text/css']:last-of-type, style:not([type]):last-of-type";
    const lastStyleElem = root.querySelector(selector);
    if (lastStyleElem === null) root.prepend(style);
    else lastStyleElem.after(style);
}
function $3164f4d4509225dd$export$d5858ef5ae9c7e87(elem, property, formatter, value) {
    if (typeof value !== "undefined") elem.style.setProperty(property, formatter(value));
}




var $dfdd254cbedf9aab$exports = {};

$parcel$export($dfdd254cbedf9aab$exports, "NoneAnimation", function () { return $dfdd254cbedf9aab$export$a27a75f1864d99f4; }, function (v) { return $dfdd254cbedf9aab$export$a27a75f1864d99f4 = v; });
var $4b5ff93cb853ca0a$exports = {};
$4b5ff93cb853ca0a$exports = "@-webkit-keyframes animation-none {\n  0%, 100% {\n    opacity: 1;\n  }\n}\n\n@keyframes animation-none {\n  0%, 100% {\n    opacity: 1;\n  }\n}\n\n.animation-none {\n  --animation-none-delay: 0s;\n  --animation-none-duration: 0s;\n}\n\n.animation-none > .content {\n  -webkit-animation-delay: var(--animation-none-delay);\n  animation-delay: var(--animation-none-delay);\n  -webkit-animation-duration: var(--animation-none-duration);\n  animation-duration: var(--animation-none-duration);\n  -webkit-animation-name: animation-none;\n  animation-name: animation-none;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n";







class $73d9c5d550b0e52e$export$2e2bcd8739ae039 {
    isCancelled() {
        return this._isCancelled;
    }
    done() {
        return this.donePEC.promise();
    }
    isDone() {
        return this._isDone;
    }
    constructor(element){
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "element", void 0);
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "_isCancelled", false);
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "_isDone", false);
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "donePEC", void 0);
        this.element = element;
        this.donePEC = new (0, $c023f3034e047f76$export$af22135957e110d7)();
        // prevent uncaught exceptions in promise
        this.donePEC.promise().catch(()=>{});
    }
}


const $55d81c08903d074d$export$74fdca545475e081 = ()=>({
        classList: [],
        cssPropertySetter: ()=>{},
        cssPropertyRemover: ()=>{},
        endEventFilter: ()=>true,
        cancelEventFilter: ()=>true,
        removeAtEnd: true,
        removeOnCancel: true
    });
class $55d81c08903d074d$var$CssBasedAnimation extends (0, $73d9c5d550b0e52e$export$2e2bcd8739ae039) {
    addClasses() {
        const { classList: classList  } = this.cssBasedAnimationOptions;
        const { element: element  } = this;
        classList.forEach((c)=>element.classList.add(c));
    }
    removeClasses() {
        const { classList: classList  } = this.cssBasedAnimationOptions;
        const { element: element  } = this;
        classList.forEach((c)=>element.classList.remove(c));
    }
    end() {
        if (!this.isCancelled() && !this.isDone()) {
            this.cleanup(this.cssBasedAnimationOptions.removeAtEnd);
            this._isDone = true;
            this.donePEC.resolve();
        }
    }
    cancelled() {
        if (!this.isCancelled() && !this.isDone()) {
            this.cleanup(this.cssBasedAnimationOptions.removeOnCancel);
            this._isCancelled = true;
            this.donePEC.reject();
        }
    }
    cancel() {
        if (!this.isCancelled() && !this.isDone()) {
            if (this.cssBasedAnimationOptions.removeOnCancel) this.removeClasses();
            else this.cancelled();
        }
    }
    cleanup(removeClassesAndProperties) {
        const { element: element , cssBasedAnimationOptions: cssBasedAnimationOptions  } = this;
        const { cssPropertyRemover: cssPropertyRemover  } = cssBasedAnimationOptions;
        element.removeEventListener("animationend", this.endHandler);
        element.removeEventListener("animationcancel", this.cancelHandler);
        if (removeClassesAndProperties) {
            this.removeClasses();
            cssPropertyRemover(element);
        } else element.style.animationPlayState = "paused";
    }
    constructor(content, options){
        super(content);
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "endHandler", void 0);
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "cancelHandler", void 0);
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "cssBasedAnimationOptions", void 0);
        const { element: element  } = this;
        this.cssBasedAnimationOptions = {
            ...$55d81c08903d074d$export$74fdca545475e081(),
            ...options
        };
        const { cssPropertySetter: cssPropertySetter , endEventFilter: endEventFilter , cancelEventFilter: cancelEventFilter  } = this.cssBasedAnimationOptions;
        this.addClasses();
        cssPropertySetter(element);
        this.endHandler = (ae)=>{
            if (endEventFilter(ae)) this.end();
        };
        this.cancelHandler = (ae)=>{
            if (cancelEventFilter(ae)) this.cancelled();
        };
        element.addEventListener("animationend", this.endHandler);
        element.addEventListener("animationcancel", this.cancelHandler);
    }
}
var $55d81c08903d074d$export$2e2bcd8739ae039 = $55d81c08903d074d$var$CssBasedAnimation;



var $dfdd254cbedf9aab$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $dfdd254cbedf9aab$var$NoneAnimation_1;
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const $dfdd254cbedf9aab$var$noneAnimationOptionsSchema = {
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
const $dfdd254cbedf9aab$var$validateNoneAnimationOptions = (0, $04d4290cc7e97f72$export$9ea1f4fe5062c6d)($dfdd254cbedf9aab$var$noneAnimationOptionsSchema);
let $dfdd254cbedf9aab$export$a27a75f1864d99f4 = $dfdd254cbedf9aab$var$NoneAnimation_1 = class NoneAnimation extends (0, $55d81c08903d074d$export$2e2bcd8739ae039) {
    static createCssBasedAnimationOptions(options) {
        const animationEventFilter = ({ animationName: animationName  })=>animationName === "animation-none";
        const cssPropertySetter = (e)=>{
            const { delay: delay , duration: duration  } = options;
            const s = (0, $3164f4d4509225dd$export$d5858ef5ae9c7e87);
            s(e, "--animation-none-delay", (v)=>`${v}s`, delay);
            s(e, "--animation-none-duration", (v)=>`${v}s`, duration);
        };
        const cssPropertyRemover = (e)=>{
            const propertyNames = [
                "--animation-none-delay",
                "--animation-none-duration", 
            ];
            propertyNames.forEach((n)=>e.style.removeProperty(n));
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
    static unpack(options) {
        return $dfdd254cbedf9aab$var$validateNoneAnimationOptions(options);
    }
    static prepare(options) {
        const unpackedOptions = $dfdd254cbedf9aab$var$NoneAnimation_1.unpack(options);
        return (element)=>new $dfdd254cbedf9aab$var$NoneAnimation_1(element, unpackedOptions);
    }
    static getStyleSheetAsString() {
        return 0, (/*@__PURE__*/$parcel$interopDefault($4b5ff93cb853ca0a$exports));
    }
    constructor(element, options){
        super(element, $dfdd254cbedf9aab$var$NoneAnimation_1.createCssBasedAnimationOptions(options));
    }
};
$dfdd254cbedf9aab$export$a27a75f1864d99f4 = $dfdd254cbedf9aab$var$NoneAnimation_1 = $dfdd254cbedf9aab$var$__decorate([
    (0, $72b5b0b5fe80c7c1$export$77e1154930d99c3d)()
], $dfdd254cbedf9aab$export$a27a75f1864d99f4);


var $3980ddde429cac3e$exports = {};

$parcel$export($3980ddde429cac3e$exports, "PanZoomAnimation", function () { return $3980ddde429cac3e$export$26ae749f2a727050; }, function (v) { return $3980ddde429cac3e$export$26ae749f2a727050 = v; });
var $0d7aa8dd9e67c2d1$exports = {};
$0d7aa8dd9e67c2d1$exports = "@-webkit-keyframes animation-pan-zoom {\n  0% {\n    -webkit-transform: scale(var(--animation-pan-zoom-origin-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-origin-x)), calc(50% - 100% * var(--animation-pan-zoom-origin-y)) );\n    transform: scale(var(--animation-pan-zoom-origin-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-origin-x)), calc(50% - 100% * var(--animation-pan-zoom-origin-y)) );\n  }\n\n  100% {\n    -webkit-transform: scale(var(--animation-pan-zoom-target-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-target-x)), calc(50% - 100% * var(--animation-pan-zoom-target-y)) );\n    transform: scale(var(--animation-pan-zoom-target-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-target-x)), calc(50% - 100% * var(--animation-pan-zoom-target-y)) );\n  }\n}\n\n@keyframes animation-pan-zoom {\n  0% {\n    -webkit-transform: scale(var(--animation-pan-zoom-origin-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-origin-x)), calc(50% - 100% * var(--animation-pan-zoom-origin-y)) );\n    transform: scale(var(--animation-pan-zoom-origin-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-origin-x)), calc(50% - 100% * var(--animation-pan-zoom-origin-y)) );\n  }\n\n  100% {\n    -webkit-transform: scale(var(--animation-pan-zoom-target-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-target-x)), calc(50% - 100% * var(--animation-pan-zoom-target-y)) );\n    transform: scale(var(--animation-pan-zoom-target-scale)) translate(calc(50% - 100% * var(--animation-pan-zoom-target-x)), calc(50% - 100% * var(--animation-pan-zoom-target-y)) );\n  }\n}\n\n.animation-pan-zoom {\n  --animation-pan-zoom-delay: 0s;\n  --animation-pan-zoom-duration: 0s;\n  --animation-pan-zoom-origin-x: .5;\n  --animation-pan-zoom-origin-y: .5;\n  --animation-pan-zoom-origin-scale: 1;\n  --animation-pan-zoom-target-x: .5;\n  --animation-pan-zoom-target-y: .5;\n  --animation-pan-zoom-target-scale: 1;\n}\n\n.animation-pan-zoom .content {\n  -webkit-transform-origin: center;\n  transform-origin: center;\n  -webkit-animation-name: animation-pan-zoom;\n  animation-name: animation-pan-zoom;\n  -webkit-animation-delay: var(--animation-pan-zoom-delay);\n  animation-delay: var(--animation-pan-zoom-delay);\n  -webkit-animation-duration: var(--animation-pan-zoom-duration);\n  animation-duration: var(--animation-pan-zoom-duration);\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n";






var $3980ddde429cac3e$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $3980ddde429cac3e$var$PanZoomAnimation_1;
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const $3980ddde429cac3e$var$partialViewSchema = {
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
const $3980ddde429cac3e$var$panZoomAnimationOptionsSchema = {
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
        from: $3980ddde429cac3e$var$partialViewSchema,
        to: $3980ddde429cac3e$var$partialViewSchema
    }
};
const $3980ddde429cac3e$var$validatePanZoomAnimationOptions = (0, $04d4290cc7e97f72$export$9ea1f4fe5062c6d)($3980ddde429cac3e$var$panZoomAnimationOptionsSchema);
let $3980ddde429cac3e$export$26ae749f2a727050 = $3980ddde429cac3e$var$PanZoomAnimation_1 = class PanZoomAnimation extends (0, $55d81c08903d074d$export$2e2bcd8739ae039) {
    static createCssBasedAnimationOptions(options) {
        const animationEventFilter = ({ animationName: animationName  })=>animationName === "animation-pan-zoom";
        const cssPropertySetter = (e)=>{
            const { delay: delay , duration: duration , from: from , to: to  } = options;
            const s = (0, $3164f4d4509225dd$export$d5858ef5ae9c7e87);
            s(e, "--animation-pan-zoom-delay", (v)=>`${v}s`, delay);
            s(e, "--animation-pan-zoom-duration", (v)=>`${v}s`, duration);
            s(e, "--animation-pan-zoom-origin-x", (v)=>`${v}`, from === null || from === void 0 ? void 0 : from.x);
            s(e, "--animation-pan-zoom-origin-y", (v)=>`${v}`, from === null || from === void 0 ? void 0 : from.y);
            s(e, "--animation-pan-zoom-origin-scale", (v)=>`${v}`, from === null || from === void 0 ? void 0 : from.scale);
            s(e, "--animation-pan-zoom-target-x", (v)=>`${v}`, to === null || to === void 0 ? void 0 : to.x);
            s(e, "--animation-pan-zoom-target-y", (v)=>`${v}`, to === null || to === void 0 ? void 0 : to.y);
            s(e, "--animation-pan-zoom-target-scale", (v)=>`${v}`, to === null || to === void 0 ? void 0 : to.scale);
        };
        const cssPropertyRemover = (e)=>{
            const propertyNames = [
                "--animation-pan-zoom-delay",
                "--animation-pan-zoom-duration",
                "--animation-pan-zoom-origin-x",
                "--animation-pan-zoom-origin-y",
                "--animation-pan-zoom-origin-scale",
                "--animation-pan-zoom-target-x",
                "--animation-pan-zoom-target-y",
                "--animation-pan-zoom-target-scale", 
            ];
            propertyNames.forEach((n)=>e.style.removeProperty(n));
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
    static unpack(options) {
        return $3980ddde429cac3e$var$validatePanZoomAnimationOptions(options);
    }
    static prepare(options) {
        const unpackedOptions = $3980ddde429cac3e$var$PanZoomAnimation_1.unpack(options);
        return (content)=>new $3980ddde429cac3e$var$PanZoomAnimation_1(content, unpackedOptions);
    }
    static getStyleSheetAsString() {
        return 0, (/*@__PURE__*/$parcel$interopDefault($0d7aa8dd9e67c2d1$exports));
    }
    constructor(content, options){
        super(content, $3980ddde429cac3e$var$PanZoomAnimation_1.createCssBasedAnimationOptions(options));
    }
};
$3980ddde429cac3e$export$26ae749f2a727050 = $3980ddde429cac3e$var$PanZoomAnimation_1 = $3980ddde429cac3e$var$__decorate([
    (0, $72b5b0b5fe80c7c1$export$77e1154930d99c3d)()
], $3980ddde429cac3e$export$26ae749f2a727050);
var $3980ddde429cac3e$export$2e2bcd8739ae039 = $3980ddde429cac3e$export$26ae749f2a727050;


class $99b05a065340482e$var$AnimationFactory {
    registerKnownTransitions() {
        this.register("none", (0, $dfdd254cbedf9aab$exports.NoneAnimation));
        this.register("pan-zoom", (0, $3980ddde429cac3e$exports.PanZoomAnimation));
    }
    register(id, AnimationClass) {
        if (this.animationRegistry.has(id)) throw new Error("Animation type already registered");
        (0, $3164f4d4509225dd$export$c2aff9e92362a9b2)(this.root, AnimationClass.getStyleSheetAsString(), `animation-${id}`);
        this.animationRegistry.set(id, AnimationClass);
    }
    prepare(type = "none", options = {}) {
        const AnimationClass = this.animationRegistry.get(type);
        if (!AnimationClass) throw new Error(`Unknown animation type: ${type}`);
        // unpacks the options and throws an exception if they are invalid,
        // but does create the actual transition yet
        return AnimationClass.prepare(options);
    }
    constructor(root){
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "root", void 0);
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "animationRegistry", new Map());
        this.root = root;
        this.registerKnownTransitions();
    }
}
var $99b05a065340482e$export$2e2bcd8739ae039 = $99b05a065340482e$var$AnimationFactory;



var $953851fbe1c966da$exports = {};

$parcel$export($953851fbe1c966da$exports, "NoneTransition", function () { return $953851fbe1c966da$export$b1e3715c3749f16; }, function (v) { return $953851fbe1c966da$export$b1e3715c3749f16 = v; });

var $10da80263759aa0a$exports = {};
$10da80263759aa0a$exports = "@-webkit-keyframes transition-none {\n  0%, 100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-none {\n  0%, 100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes transition-none-out {\n  0%, 100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-none-out {\n  0%, 100% {\n    opacity: 1;\n  }\n}\n\n.transition-none {\n  --transition-none-delay: 0s;\n  --transition-none-duration: 0s;\n  opacity: 0;\n  -webkit-animation-delay: var(--transition-none-delay);\n  animation-delay: var(--transition-none-delay);\n  -webkit-animation-duration: var(--transition-none-duration), 0s;\n  animation-duration: var(--transition-none-duration), 0s;\n  -webkit-animation-name: transition-none, transition-none-out;\n  animation-name: transition-none, transition-none-out;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n}\n\n";





const $bdea27449bd51050$export$7b0c9a61a7106e55 = ()=>({
        ...(0, $55d81c08903d074d$export$74fdca545475e081)(),
        outEndEventFilter: ()=>true
    });
class $bdea27449bd51050$var$CssBasedTransition extends (0, $55d81c08903d074d$export$2e2bcd8739ae039) {
    outEnd() {
        if (!this.isCancelled() && !this.isOut()) {
            this.element.removeEventListener("animationend", this.outEndHandler);
            this._isOut = true;
            this.outPEC.resolve();
        }
    }
    out() {
        return this.outPEC.promise();
    }
    isOut() {
        return this._isOut;
    }
    cancel() {
        if (!this.isCancelled() && !this.isDone()) {
            this.outPEC.reject();
            super.cancel();
        }
    }
    constructor(content, options){
        super(content, options);
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "targetShowUpDelay", void 0);
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "_isOut", false);
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "outPEC", void 0);
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "outEndHandler", void 0);
        this.targetShowUpDelay = options.targetShowUpDelay;
        this.outPEC = new (0, $c023f3034e047f76$export$af22135957e110d7)();
        // prevent uncaught exceptions in promise
        this.outPEC.promise().catch(()=>{});
        const { outEndEventFilter: outEndEventFilter  } = {
            ...$bdea27449bd51050$export$7b0c9a61a7106e55(),
            ...options
        };
        this.outEndHandler = (ae)=>{
            if (outEndEventFilter(ae)) this.outEnd();
        };
        content.addEventListener("animationend", this.outEndHandler);
    }
}
var $bdea27449bd51050$export$2e2bcd8739ae039 = $bdea27449bd51050$var$CssBasedTransition;





var $953851fbe1c966da$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $953851fbe1c966da$var$NoneTransition_1;
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const $953851fbe1c966da$var$noneTransitionOptionsSchema = {
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
const $953851fbe1c966da$var$validateNoneTransitionOptions = (0, $04d4290cc7e97f72$export$9ea1f4fe5062c6d)($953851fbe1c966da$var$noneTransitionOptionsSchema);
let $953851fbe1c966da$export$b1e3715c3749f16 = $953851fbe1c966da$var$NoneTransition_1 = class NoneTransition extends (0, $bdea27449bd51050$export$2e2bcd8739ae039) {
    static createCssBasedTransitionOptions(options) {
        const outAnimationEventFilter = ({ animationName: animationName  })=>animationName === "transition-none-out";
        const animationEventFilter = ({ animationName: animationName  })=>animationName === "transition-none";
        const { delay: delay , duration: duration  } = options;
        const cssPropertySetter = (e)=>{
            const s = (0, $3164f4d4509225dd$export$d5858ef5ae9c7e87);
            s(e, "--transition-none-delay", (v)=>`${v}s`, delay);
            s(e, "--transition-none-duration", (v)=>`${v}s`, duration);
        };
        const cssPropertyRemover = (e)=>{
            const propertyNames = [
                "--transition-none-delay",
                "--transition-none-duration", 
            ];
            propertyNames.forEach((n)=>e.style.removeProperty(n));
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
    static unpack(options) {
        return $953851fbe1c966da$var$validateNoneTransitionOptions(options);
    }
    static prepare(options) {
        const unpackedOptions = $953851fbe1c966da$var$NoneTransition_1.unpack(options);
        return (element)=>new $953851fbe1c966da$var$NoneTransition_1(element, unpackedOptions);
    }
    static getStyleSheetAsString() {
        return 0, (/*@__PURE__*/$parcel$interopDefault($10da80263759aa0a$exports));
    }
    constructor(element, options){
        super(element, $953851fbe1c966da$var$NoneTransition_1.createCssBasedTransitionOptions(options));
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "targetShowUpDelay", 0);
    }
};
$953851fbe1c966da$export$b1e3715c3749f16 = $953851fbe1c966da$var$NoneTransition_1 = $953851fbe1c966da$var$__decorate([
    (0, $72b5b0b5fe80c7c1$export$77e1154930d99c3d)()
], $953851fbe1c966da$export$b1e3715c3749f16);
var $953851fbe1c966da$export$2e2bcd8739ae039 = $953851fbe1c966da$export$b1e3715c3749f16;


var $aec42b5e4047cb4d$exports = {};

$parcel$export($aec42b5e4047cb4d$exports, "FadeTransition", function () { return $aec42b5e4047cb4d$export$b4cd2c531e831209; }, function (v) { return $aec42b5e4047cb4d$export$b4cd2c531e831209 = v; });
var $4fbf56e7c2bed165$exports = {};
$4fbf56e7c2bed165$exports = "@-webkit-keyframes transition-fade-overlay {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-fade-overlay {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@-webkit-keyframes transition-fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.transition-fade {\n  --transition-fade-delay: 0s;\n  --transition-fade-duration: -1s;\n  --transition-fade-duration-half: calc(var(--transition-fade-duration) / 2);\n  --transition-fade-color: black;\n}\n\n.transition-fade > *, .transition-fade:before {\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n  -webkit-animation-duration: var(--transition-fade-duration-half);\n  animation-duration: var(--transition-fade-duration-half);\n}\n\n.transition-fade > * {\n  -webkit-animation-name: transition-fade;\n  animation-name: transition-fade;\n  -webkit-animation-delay: calc(var(--transition-fade-delay)  + var(--transition-fade-duration-half));\n  animation-delay: calc(var(--transition-fade-delay)  + var(--transition-fade-duration-half));\n}\n\n.transition-fade:before {\n  content: \"\";\n  background-color: var(--transition-fade-color);\n  width: 100%;\n  height: 100%;\n  -webkit-animation-name: transition-fade-overlay;\n  animation-name: transition-fade-overlay;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n";






var $aec42b5e4047cb4d$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $aec42b5e4047cb4d$var$FadeTransition_1;
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const $aec42b5e4047cb4d$var$fadeTransitionOptionsSchema = {
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
const $aec42b5e4047cb4d$var$validateFadeTransitionOptions = (0, $04d4290cc7e97f72$export$9ea1f4fe5062c6d)($aec42b5e4047cb4d$var$fadeTransitionOptionsSchema);
// overwrites the (invalid) value set as default in the SCSS file
const $aec42b5e4047cb4d$var$defaultDuration = 2;
let $aec42b5e4047cb4d$export$b4cd2c531e831209 = $aec42b5e4047cb4d$var$FadeTransition_1 = class FadeTransition extends (0, $bdea27449bd51050$export$2e2bcd8739ae039) {
    static createCssBasedTransitionOptions(options) {
        const outAnimationEventFilter = ({ animationName: animationName  })=>animationName === "transition-fade-overlay";
        const animationEventFilter = ({ animationName: animationName  })=>animationName === "transition-fade";
        const { delay: delay , duration: duration , color: color  } = {
            duration: $aec42b5e4047cb4d$var$defaultDuration,
            ...options
        };
        const cssPropertySetter = (e)=>{
            const s = (0, $3164f4d4509225dd$export$d5858ef5ae9c7e87);
            s(e, "--transition-fade-delay", (v)=>`${v}s`, delay);
            s(e, "--transition-fade-duration", (v)=>`${v}s`, duration);
            s(e, "--transition-fade-color", (v)=>`${v}`, color);
        };
        const cssPropertyRemover = (e)=>{
            const propertyNames = [
                "--transition-fade-delay",
                "--transition-fade-duration",
                "--transition-fade-color", 
            ];
            propertyNames.forEach((n)=>e.style.removeProperty(n));
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
    static unpack(options) {
        return $aec42b5e4047cb4d$var$validateFadeTransitionOptions(options);
    }
    static prepare(options) {
        const unpackedOptions = $aec42b5e4047cb4d$var$FadeTransition_1.unpack(options);
        return (element)=>new $aec42b5e4047cb4d$var$FadeTransition_1(element, unpackedOptions);
    }
    static getStyleSheetAsString() {
        return 0, (/*@__PURE__*/$parcel$interopDefault($4fbf56e7c2bed165$exports));
    }
    constructor(element, options){
        super(element, $aec42b5e4047cb4d$var$FadeTransition_1.createCssBasedTransitionOptions(options));
    }
};
$aec42b5e4047cb4d$export$b4cd2c531e831209 = $aec42b5e4047cb4d$var$FadeTransition_1 = $aec42b5e4047cb4d$var$__decorate([
    (0, $72b5b0b5fe80c7c1$export$77e1154930d99c3d)()
], $aec42b5e4047cb4d$export$b4cd2c531e831209);
var $aec42b5e4047cb4d$export$2e2bcd8739ae039 = $aec42b5e4047cb4d$export$b4cd2c531e831209;


var $8db1ece38e01cdfb$exports = {};

$parcel$export($8db1ece38e01cdfb$exports, "CrossFadeTransition", function () { return $8db1ece38e01cdfb$export$4143b605098af1c4; }, function (v) { return $8db1ece38e01cdfb$export$4143b605098af1c4 = v; });
var $2650df6558d22378$exports = {};
$2650df6558d22378$exports = "@-webkit-keyframes transition-cross-fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes transition-cross-fade {\n  0% {\n    opacity: 0;\n  }\n\n  100% {\n    opacity: 1;\n  }\n}\n\n.transition-cross-fade {\n  --transition-cross-fade-delay: 0s;\n  --transition-cross-fade-duration: 1s;\n  -webkit-animation-delay: var(--transition-cross-fade-delay);\n  animation-delay: var(--transition-cross-fade-delay);\n  -webkit-animation-duration: var(--transition-cross-fade-duration);\n  animation-duration: var(--transition-cross-fade-duration);\n  -webkit-animation-name: transition-cross-fade;\n  animation-name: transition-cross-fade;\n  -webkit-animation-timing-function: ease-in-out;\n  animation-timing-function: ease-in-out;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n";






var $8db1ece38e01cdfb$var$__decorate = undefined && undefined.__decorate || function(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var $8db1ece38e01cdfb$var$CrossFadeTransition_1;
// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const $8db1ece38e01cdfb$var$crossFadeTransitionOptionsSchema = {
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
const $8db1ece38e01cdfb$var$validateCrossFadeTransitionOptions = (0, $04d4290cc7e97f72$export$9ea1f4fe5062c6d)($8db1ece38e01cdfb$var$crossFadeTransitionOptionsSchema);
let $8db1ece38e01cdfb$export$4143b605098af1c4 = $8db1ece38e01cdfb$var$CrossFadeTransition_1 = class CrossFadeTransition extends (0, $bdea27449bd51050$export$2e2bcd8739ae039) {
    static createCssBasedTransitionOptions(options) {
        const animationEventFilter = ({ animationName: animationName  })=>animationName === "transition-cross-fade";
        const { delay: delay , duration: duration  } = options;
        const cssPropertySetter = (e)=>{
            const s = (0, $3164f4d4509225dd$export$d5858ef5ae9c7e87);
            s(e, "--transition-cross-fade-delay", (v)=>`${v}s`, delay);
            s(e, "--transition-cross-fade-duration", (v)=>`${v}s`, duration);
        };
        const cssPropertyRemover = (e)=>{
            const propertyNames = [
                "--transition-cross-fade-delay",
                "--transition-cross-fade-duration", 
            ];
            propertyNames.forEach((n)=>e.style.removeProperty(n));
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
    static unpack(options) {
        return $8db1ece38e01cdfb$var$validateCrossFadeTransitionOptions(options);
    }
    static prepare(options) {
        const unpackedOptions = $8db1ece38e01cdfb$var$CrossFadeTransition_1.unpack(options);
        return (element)=>new $8db1ece38e01cdfb$var$CrossFadeTransition_1(element, unpackedOptions);
    }
    static getStyleSheetAsString() {
        return 0, (/*@__PURE__*/$parcel$interopDefault($2650df6558d22378$exports));
    }
    constructor(element, options){
        super(element, $8db1ece38e01cdfb$var$CrossFadeTransition_1.createCssBasedTransitionOptions(options));
    }
};
$8db1ece38e01cdfb$export$4143b605098af1c4 = $8db1ece38e01cdfb$var$CrossFadeTransition_1 = $8db1ece38e01cdfb$var$__decorate([
    (0, $72b5b0b5fe80c7c1$export$77e1154930d99c3d)()
], $8db1ece38e01cdfb$export$4143b605098af1c4);
var $8db1ece38e01cdfb$export$2e2bcd8739ae039 = $8db1ece38e01cdfb$export$4143b605098af1c4;



class $6231c804466ad3d3$var$TransitionFactory {
    registerKnownTransitions() {
        this.register("none", (0, $953851fbe1c966da$exports.NoneTransition));
        this.register("fade", (0, $aec42b5e4047cb4d$exports.FadeTransition));
        this.register("cross-fade", (0, $8db1ece38e01cdfb$exports.CrossFadeTransition));
    }
    register(id, transitionClass) {
        if (this.transitionRegistry.has(id)) throw new Error("Transition type already registered");
        (0, $3164f4d4509225dd$export$c2aff9e92362a9b2)(this.root, transitionClass.getStyleSheetAsString(), `transition-${id}`);
        this.transitionRegistry.set(id, transitionClass);
    }
    prepare(type = "none", options = {}) {
        const TransitionClass = this.transitionRegistry.get(type);
        if (!TransitionClass) throw new Error(`Unknown transition type: ${type}`);
        // unpacks the options and throws an exception if they are invalid,
        // but does create the actual transition yet
        return TransitionClass.prepare(options);
    }
    constructor(root){
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "root", void 0);
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "transitionRegistry", new Map());
        this.root = root;
        this.registerKnownTransitions();
    }
}
var $6231c804466ad3d3$export$2e2bcd8739ae039 = $6231c804466ad3d3$var$TransitionFactory;




class $f7bfda1c0ba76138$var$MuteAction extends (0, $82db5595f3eb13f9$export$2e2bcd8739ae039) {
    // eslint-disable-next-line class-methods-use-this
    async execute() {
        this.state.activeSlides.forEach(({ contentElement: contentElement  })=>(0, $3f79f3079f811782$export$2e2bcd8739ae039).setMuted(contentElement, true));
        this.state.muted = true;
        return Promise.resolve();
    }
    // eslint-disable-next-line class-methods-use-this
    unpack() {}
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(state){
        super(state);
    }
}
var $f7bfda1c0ba76138$export$2e2bcd8739ae039 = $f7bfda1c0ba76138$var$MuteAction;




class $ac1de76af12daa16$var$UnmuteAction extends (0, $82db5595f3eb13f9$export$2e2bcd8739ae039) {
    // eslint-disable-next-line class-methods-use-this
    async execute() {
        this.state.activeSlides.forEach(({ contentElement: contentElement  })=>(0, $3f79f3079f811782$export$2e2bcd8739ae039).setMuted(contentElement, false));
        this.state.muted = false;
        return Promise.resolve();
    }
    // eslint-disable-next-line class-methods-use-this
    unpack() {}
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(state){
        super(state);
    }
}
var $ac1de76af12daa16$export$2e2bcd8739ae039 = $ac1de76af12daa16$var$UnmuteAction;





// TODO: avoid JSONSchemaType cast; needs at least Ajv v9 to support optional properties
const $49f7bcdb82a8e1bc$var$setVolumeActionOptionsSchema = {
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
const $49f7bcdb82a8e1bc$var$validateSetVolumeActionOptions = (0, $04d4290cc7e97f72$export$9ea1f4fe5062c6d)($49f7bcdb82a8e1bc$var$setVolumeActionOptionsSchema);
const $49f7bcdb82a8e1bc$var$defaultOptionalSetVolumeArgs = {
    mode: "absolute"
};
class $49f7bcdb82a8e1bc$var$SetVolumeAction extends (0, $82db5595f3eb13f9$export$2e2bcd8739ae039) {
    // eslint-disable-next-line class-methods-use-this
    async execute(arg) {
        const { volume: volume , mode: mode  } = {
            ...$49f7bcdb82a8e1bc$var$defaultOptionalSetVolumeArgs,
            ...arg
        };
        this.state.activeSlides.forEach(({ contentElement: contentElement  })=>(0, $3f79f3079f811782$export$2e2bcd8739ae039).setVolume(contentElement, volume, mode));
        return Promise.resolve();
    }
    // eslint-disable-next-line class-methods-use-this
    unpack(options) {
        return $49f7bcdb82a8e1bc$var$validateSetVolumeActionOptions(options);
    }
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(state){
        super(state);
    }
}
var $49f7bcdb82a8e1bc$export$2e2bcd8739ae039 = $49f7bcdb82a8e1bc$var$SetVolumeAction;



class $a7c0677d7f0b7b7f$export$a3f2a64f39c0a404 extends HTMLElement {
    async execute(action, arg) {
        return this.viewer.execute(action, arg);
    }
    constructor(){
        super();
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "viewer", void 0);
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        this.viewer = new $a7c0677d7f0b7b7f$var$HilbertGalleryViewer(this, false);
    }
}
class $a7c0677d7f0b7b7f$var$HilbertGalleryViewer {
    static createActionRegistry(state) {
        const registry = new Map();
        registry.set("reload", new (0, $91327a1ca1fd2def$export$2e2bcd8739ae039)(state));
        registry.set("preload", new (0, $dc7f221b5f1045df$export$2e2bcd8739ae039)(state));
        registry.set("show", new (0, $6af70478776110a7$export$2e2bcd8739ae039)(state));
        registry.set("clear", new (0, $56750857b8f56d61$export$2e2bcd8739ae039)(state));
        registry.set("mute", new (0, $f7bfda1c0ba76138$export$2e2bcd8739ae039)(state));
        registry.set("unmute", new (0, $ac1de76af12daa16$export$2e2bcd8739ae039)(state));
        registry.set("set-volume", new (0, $49f7bcdb82a8e1bc$export$2e2bcd8739ae039)(state));
        return registry;
    }
    async execute(action, arg) {
        // executeImpl only exists for the purpose of renaming the parameters
        return this.executeImpl(action, arg);
    }
    async executeImpl(actionName, arg) {
        const action = this.actionRegistry.get(actionName);
        if (action) {
            // this may throw an exception if arg has invalid type
            const executor = action.buildExecutor(arg);
            // the executor encapsulates the preprocessed arg
            // and allows type-safe execution
            // we need to await the result to avoid several levels of Promises
            // eslint-disable-next-line @typescript-eslint/return-await
            return await executor();
        }
        throw new TypeError("HilbertGalleryViewer.execute(): unknown action");
    }
    static defineCustomElement() {
        customElements.define("hilbert-gallery-viewer", $a7c0677d7f0b7b7f$export$a3f2a64f39c0a404);
    }
    constructor(parent, wrap = true){
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "actionRegistry", void 0);
        (0, $180022016c8cd477$export$2e2bcd8739ae039)(this, "state", void 0);
        const insertWrapper = (element)=>{
            const wrapper = document.createElement("div");
            return element.appendChild(wrapper);
        };
        const host = wrap ? insertWrapper(parent) : parent;
        const shadowRoot = host.attachShadow({
            mode: "open"
        });
        (0, $3164f4d4509225dd$export$c2aff9e92362a9b2)(shadowRoot, (0, (/*@__PURE__*/$parcel$interopDefault($3997bf1755da0bed$exports))));
        const preloadArea = document.createElement("div");
        preloadArea.classList.add("preload-area");
        shadowRoot.appendChild(preloadArea);
        const container = document.createElement("div");
        container.classList.add("container");
        shadowRoot.appendChild(container);
        const transitionFactory = new (0, $6231c804466ad3d3$export$2e2bcd8739ae039)(shadowRoot);
        const animationFactory = new (0, $99b05a065340482e$export$2e2bcd8739ae039)(shadowRoot);
        const activeSlides = [];
        this.state = {
            viewer: this,
            log: new (0, $d71688a2f1aa6dcb$export$2e2bcd8739ae039)((0, $d71688a2f1aa6dcb$export$243e62d78d3b544d).WARN),
            preloader: new (0, $36a0b5dcceb74366$export$2e2bcd8739ae039)(preloadArea),
            shadowRoot: shadowRoot,
            container: container,
            transitionFactory: transitionFactory,
            animationFactory: animationFactory,
            activeSlides: activeSlides,
            muted: false
        };
        this.actionRegistry = $a7c0677d7f0b7b7f$var$HilbertGalleryViewer.createActionRegistry(this.state);
    }
}
$a7c0677d7f0b7b7f$var$HilbertGalleryViewer.defineCustomElement();
var $a7c0677d7f0b7b7f$export$2e2bcd8739ae039 = $a7c0677d7f0b7b7f$var$HilbertGalleryViewer;


var $2cc61b612404e214$export$2e2bcd8739ae039 = (0, $a7c0677d7f0b7b7f$export$2e2bcd8739ae039);


//# sourceMappingURL=hilbert-gallery-viewer.mjs.map
