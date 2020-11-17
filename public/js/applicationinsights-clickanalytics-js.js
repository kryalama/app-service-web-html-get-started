/*!
 * Application Insights JavaScript SDK - Click Analytics, 2.5.9
 * Copyright (c) Microsoft and contributors. All rights reserved.
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global.Microsoft = global.Microsoft || {}, global.Microsoft.ApplicationInsights = global.Microsoft.ApplicationInsights || {})));
}(this, (function (exports) { 'use strict';

    var strShimFunction = "function";
    var strShimObject = "object";
    var strShimUndefined = "undefined";
    var strShimPrototype = "prototype";
    var strShimHasOwnProperty = "hasOwnProperty";
    /**
     * Returns the current global scope object, for a normal web page this will be the current
     * window, for a Web Worker this will be current worker global scope via "self". The internal
     * implementation returns the first available instance object in the following order
     * - globalThis (New standard)
     * - self (Will return the current window instance for supported browsers)
     * - window (fallback for older browser implementations)
     * - global (NodeJS standard)
     * - <null> (When all else fails)
     * While the return type is a Window for the normal case, not all environments will support all
     * of the properties or functions.
     */
    function getGlobal() {
        if (typeof globalThis !== strShimUndefined && globalThis) {
            return globalThis;
        }
        if (typeof self !== strShimUndefined && self) {
            return self;
        }
        if (typeof window !== strShimUndefined && window) {
            return window;
        }
        if (typeof global !== strShimUndefined && global) {
            return global;
        }
        return null;
    }
    /**
     * Creates an object that has the specified prototype, and that optionally contains specified properties. This helper exists to avoid adding a polyfil
     * for older browsers that do not define Object.create eg. ES3 only, IE8 just in case any page checks for presence/absence of the prototype implementation.
     * Note: For consistency this will not use the Object.create implementation if it exists as this would cause a testing requirement to test with and without the implementations
     * @param obj Object to use as a prototype. May be null
     */
    function objCreateFn(obj) {
        var func = Object["create"];
        // Use build in Object.create
        if (func) {
            // Use Object create method if it exists
            return func(obj);
        }
        if (obj == null) {
            return {};
        }
        var type = typeof obj;
        if (type !== strShimObject && type !== strShimFunction) {
            throw new TypeError('Object prototype may only be an Object:' + obj);
        }
        function tmpFunc() { }
        tmpFunc[strShimPrototype] = obj;
        return new tmpFunc();
    }
    function __assignFn(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object[strShimPrototype][strShimHasOwnProperty].call(s, p)) {
                    t[p] = s[p];
                }
            }
        }
        return t;
    }
    // tslint:disable-next-line: only-arrow-functions
    var __extendStaticsFn = function (d, b) {
        __extendStaticsFn = Object["setPrototypeOf"] ||
            // tslint:disable-next-line: only-arrow-functions
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            // tslint:disable-next-line: only-arrow-functions
            function (d, b) {
                for (var p in b) {
                    if (b[strShimHasOwnProperty](p)) {
                        d[p] = b[p];
                    }
                }
            };
        return __extendStaticsFn(d, b);
    };
    function __extendsFn(d, b) {
        __extendStaticsFn(d, b);
        function __() { this.constructor = d; }
        // tslint:disable-next-line: ban-comma-operator
        d[strShimPrototype] = b === null ? objCreateFn(b) : (__[strShimPrototype] = b[strShimPrototype], new __());
    }
    var globalObj = getGlobal() || {};
    // tslint:disable: only-arrow-functions
    (function (root, assignFn, extendsFn) {
        // Assign the globally scoped versions of the functions -- used when consuming individual ts files
        // If check is to support NativeScript where these are marked as readonly
        if (!root.__assign) {
            root.__assign = Object.assign || assignFn;
        }
        if (!root.__extends) {
            root.__extends = extendsFn;
        }
    })(globalObj, __assignFn, __extendsFn);
    // Assign local variables that will be used for embedded scenarios, if check is to support NativeScript where these are marked as readonly
    if (!__assign) {
        __assign = globalObj.__assign;
    }
    if (!__extends) {
        __extends = globalObj.__extends;
    }

    var strShimFunction$1 = "function";
    var strShimObject$1 = "object";
    var strShimUndefined$1 = "undefined";
    var strShimPrototype$1 = "prototype";
    var strShimHasOwnProperty$1 = "hasOwnProperty";
    /**
     * Returns the current global scope object, for a normal web page this will be the current
     * window, for a Web Worker this will be current worker global scope via "self". The internal
     * implementation returns the first available instance object in the following order
     * - globalThis (New standard)
     * - self (Will return the current window instance for supported browsers)
     * - window (fallback for older browser implementations)
     * - global (NodeJS standard)
     * - <null> (When all else fails)
     * While the return type is a Window for the normal case, not all environments will support all
     * of the properties or functions.
     */
    function getGlobal$1() {
        if (typeof globalThis !== strShimUndefined$1 && globalThis) {
            return globalThis;
        }
        if (typeof self !== strShimUndefined$1 && self) {
            return self;
        }
        if (typeof window !== strShimUndefined$1 && window) {
            return window;
        }
        if (typeof global !== strShimUndefined$1 && global) {
            return global;
        }
        return null;
    }
    /**
     * Creates an object that has the specified prototype, and that optionally contains specified properties. This helper exists to avoid adding a polyfil
     * for older browsers that do not define Object.create eg. ES3 only, IE8 just in case any page checks for presence/absence of the prototype implementation.
     * Note: For consistency this will not use the Object.create implementation if it exists as this would cause a testing requirement to test with and without the implementations
     * @param obj Object to use as a prototype. May be null
     */
    function objCreateFn$1(obj) {
        var func = Object["create"];
        // Use build in Object.create
        if (func) {
            // Use Object create method if it exists
            return func(obj);
        }
        if (obj == null) {
            return {};
        }
        var type = typeof obj;
        if (type !== strShimObject$1 && type !== strShimFunction$1) {
            throw new TypeError('Object prototype may only be an Object:' + obj);
        }
        function tmpFunc() { }
        tmpFunc[strShimPrototype$1] = obj;
        return new tmpFunc();
    }
    function __assignFn$1(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object[strShimPrototype$1][strShimHasOwnProperty$1].call(s, p)) {
                    t[p] = s[p];
                }
            }
        }
        return t;
    }
    // tslint:disable-next-line: only-arrow-functions
    var __extendStaticsFn$1 = function (d, b) {
        __extendStaticsFn$1 = Object["setPrototypeOf"] ||
            // tslint:disable-next-line: only-arrow-functions
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            // tslint:disable-next-line: only-arrow-functions
            function (d, b) {
                for (var p in b) {
                    if (b[strShimHasOwnProperty$1](p)) {
                        d[p] = b[p];
                    }
                }
            };
        return __extendStaticsFn$1(d, b);
    };
    function __extendsFn$1(d, b) {
        __extendStaticsFn$1(d, b);
        function __() { this.constructor = d; }
        // tslint:disable-next-line: ban-comma-operator
        d[strShimPrototype$1] = b === null ? objCreateFn$1(b) : (__[strShimPrototype$1] = b[strShimPrototype$1], new __());
    }
    var globalObj$1 = getGlobal$1() || {};
    // tslint:disable: only-arrow-functions
    (function (root, assignFn, extendsFn) {
        // Assign the globally scoped versions of the functions -- used when consuming individual ts files
        root.__assign = root.__assign || Object.assign || assignFn;
        root.__extends = root.__extends || extendsFn;
    })(globalObj$1, __assignFn$1, __extendsFn$1);
    // Assign local variables that will be used for embedded scenarios
    __assign = globalObj$1.__assign;
    __extends = globalObj$1.__extends;

    /**
     * The EventsDiscardedReason enumeration contains a set of values that specify the reason for discarding an event.
     */
    var EventsDiscardedReason = {
        /**
         * Unknown.
         */
        Unknown: 0,
        /**
         * Status set to non-retryable.
         */
        NonRetryableStatus: 1,
        /**
         * The event is invalid.
         */
        InvalidEvent: 2,
        /**
         * The size of the event is too large.
         */
        SizeLimitExceeded: 3,
        /**
         * The server is not accepting events from this instrumentation key.
         */
        KillSwitch: 4,
        /**
         * The event queue is full.
         */
        QueueFull: 5
    };

    /**
     * This file exists to hold environment utilities that are requied to check and
     * validate the current operating environment. Unless otherwise required, please
     * only defined methods (functions) in this class so that users of these
     * functions/properties only need to include those that are used within their own modules.
     */
    var strUndefined = strShimUndefined$1;
    var strObject = strShimObject$1;
    var strPrototype = strShimPrototype$1;
    var strWindow = "window";
    var strDocument = "document";
    var strNavigator = "navigator";
    var strLocation = "location";
    var strConsole = "console";
    var strPerformance = "performance";
    var strJSON = "JSON";
    var strCrypto = "crypto";
    /**
     * Returns the current global scope object, for a normal web page this will be the current
     * window, for a Web Worker this will be current worker global scope via "self". The internal
     * implementation returns the first available instance object in the following order
     * - globalThis (New standard)
     * - self (Will return the current window instance for supported browsers)
     * - window (fallback for older browser implementations)
     * - global (NodeJS standard)
     * - <null> (When all else fails)
     * While the return type is a Window for the normal case, not all environments will support all
     * of the properties or functions.
     */
    var getGlobal$2 = getGlobal$1;
    /**
     * Return the named global object if available, will return null if the object is not available.
     * @param name The globally named object
     */
    function getGlobalInst(name) {
        var gbl = getGlobal$2();
        if (gbl && gbl[name]) {
            return gbl[name];
        }
        // Test workaround, for environments where <global>.window (when global == window) doesn't return the base window
        if (name === strWindow && hasWindow()) {
            // tslint:disable-next-line: no-angle-bracket-type-assertion
            return window;
        }
        return null;
    }
    /**
     * Checks if window object is available, this is required as we support the API running without a
     * window /document (eg. Node server, electron webworkers) and if we attempt to assign a window
     * object to a local variable or pass as an argument an "Uncaught ReferenceError: window is not defined"
     * exception will be thrown.
     * Defined as a function to support lazy / late binding environments.
     */
    function hasWindow() {
        return Boolean(typeof window === strObject && window);
    }
    /**
     * Returns the global window object if it is present otherwise null.
     * This helper is used to access the window object without causing an exception
     * "Uncaught ReferenceError: window is not defined"
     */
    function getWindow() {
        if (hasWindow()) {
            return window;
        }
        // Return the global instance or null
        return getGlobalInst(strWindow);
    }
    /**
     * Checks if document object is available, this is required as we support the API running without a
     * window /document (eg. Node server, electron webworkers) and if we attempt to assign a document
     * object to a local variable or pass as an argument an "Uncaught ReferenceError: document is not defined"
     * exception will be thrown.
     * Defined as a function to support lazy / late binding environments.
     */
    function hasDocument() {
        return Boolean(typeof document === strObject && document);
    }
    /**
     * Returns the global document object if it is present otherwise null.
     * This helper is used to access the document object without causing an exception
     * "Uncaught ReferenceError: document is not defined"
     */
    function getDocument() {
        if (hasDocument()) {
            return document;
        }
        return getGlobalInst(strDocument);
    }
    /**
     * Checks if navigator object is available, this is required as we support the API running without a
     * window /document (eg. Node server, electron webworkers) and if we attempt to assign a navigator
     * object to a local variable or pass as an argument an "Uncaught ReferenceError: navigator is not defined"
     * exception will be thrown.
     * Defined as a function to support lazy / late binding environments.
     */
    function hasNavigator() {
        return Boolean(typeof navigator === strObject && navigator);
    }
    /**
     * Returns the global navigator object if it is present otherwise null.
     * This helper is used to access the navigator object without causing an exception
     * "Uncaught ReferenceError: navigator is not defined"
     */
    function getNavigator() {
        if (hasNavigator()) {
            return navigator;
        }
        return getGlobalInst(strNavigator);
    }
    /**
     * Returns the global location object if it is present otherwise null.
     * This helper is used to access the location object without causing an exception
     * "Uncaught ReferenceError: location is not defined"
     */
    function getLocation() {
        if (typeof location === strObject && location) {
            return location;
        }
        return getGlobalInst(strLocation);
    }
    /**
     * Returns the global console object
     */
    function getConsole() {
        if (typeof console !== strUndefined) {
            return console;
        }
        return getGlobalInst(strConsole);
    }
    /**
     * Returns the performance object if it is present otherwise null.
     * This helper is used to access the performance object from the current
     * global instance which could be window or globalThis for a web worker
     */
    function getPerformance() {
        return getGlobalInst(strPerformance);
    }
    /**
     * Checks if JSON object is available, this is required as we support the API running without a
     * window /document (eg. Node server, electron webworkers) and if we attempt to assign a history
     * object to a local variable or pass as an argument an "Uncaught ReferenceError: JSON is not defined"
     * exception will be thrown.
     * Defined as a function to support lazy / late binding environments.
     */
    function hasJSON() {
        return Boolean((typeof JSON === strObject && JSON) || getGlobalInst(strJSON) !== null);
    }
    /**
     * Returns the global JSON object if it is present otherwise null.
     * This helper is used to access the JSON object without causing an exception
     * "Uncaught ReferenceError: JSON is not defined"
     */
    function getJSON() {
        if (hasJSON()) {
            return JSON || getGlobalInst(strJSON);
        }
        return null;
    }
    /**
     * Returns the crypto object if it is present otherwise null.
     * This helper is used to access the crypto object from the current
     * global instance which could be window or globalThis for a web worker
     */
    function getCrypto() {
        return getGlobalInst(strCrypto);
    }

    var strOnPrefix = "on";
    var strAttachEvent = "attachEvent";
    var strAddEventHelper = "addEventListener";
    var strDetachEvent = "detachEvent";
    var strRemoveEventListener = "removeEventListener";
    function _isTypeof(value, theType) {
        return typeof value === theType;
    }
    function _isUndefined(value) {
        return _isTypeof(value, strShimUndefined$1) || value === undefined;
    }
    function _isNullOrUndefined(value) {
        return (_isUndefined(value) || value === null);
    }
    function _hasOwnProperty(obj, prop) {
        return obj && Object[strShimPrototype$1].hasOwnProperty.call(obj, prop);
    }
    function _isObject(value) {
        return _isTypeof(value, strShimObject$1);
    }
    function _isFunction(value) {
        return _isTypeof(value, strShimFunction$1);
    }
    /**
     * Binds the specified function to an event, so that the function gets called whenever the event fires on the object
     * @param obj Object to add the event too.
     * @param eventNameWithoutOn String that specifies any of the standard DHTML Events without "on" prefix
     * @param handlerRef Pointer that specifies the function to call when event fires
     * @param useCapture [Optional] Defaults to false
     * @returns True if the function was bound successfully to the event, otherwise false
     */
    function _attachEvent(obj, eventNameWithoutOn, handlerRef, useCapture) {
        if (useCapture === void 0) { useCapture = false; }
        var result = false;
        if (!_isNullOrUndefined(obj)) {
            try {
                if (!_isNullOrUndefined(obj[strAddEventHelper])) {
                    // all browsers except IE before version 9
                    obj[strAddEventHelper](eventNameWithoutOn, handlerRef, useCapture);
                    result = true;
                }
                else if (!_isNullOrUndefined(obj[strAttachEvent])) {
                    // IE before version 9                    
                    obj[strAttachEvent](strOnPrefix + eventNameWithoutOn, handlerRef);
                    result = true;
                }
            }
            catch (e) {
                // Just Ignore any error so that we don't break any execution path
            }
        }
        return result;
    }
    /**
     * Removes an event handler for the specified event
     * @param Object to remove the event from
     * @param eventNameWithoutOn {string} - The name of the event
     * @param handlerRef {any} - The callback function that needs to be executed for the given event
     * @param useCapture [Optional] Defaults to false
     */
    function _detachEvent(obj, eventNameWithoutOn, handlerRef, useCapture) {
        if (useCapture === void 0) { useCapture = false; }
        if (!_isNullOrUndefined(obj)) {
            try {
                if (!_isNullOrUndefined(obj[strRemoveEventListener])) {
                    obj[strRemoveEventListener](eventNameWithoutOn, handlerRef, useCapture);
                }
                else if (!_isNullOrUndefined(obj[strDetachEvent])) {
                    obj[strDetachEvent](strOnPrefix + eventNameWithoutOn, handlerRef);
                }
            }
            catch (e) {
                // Just Ignore any error so that we don't break any execution path
            }
        }
    }
    var CoreUtils = /** @class */ (function () {
        function CoreUtils() {
        }
        /**
         * Check if an object is of type Date
         */
        CoreUtils.isDate = function (obj) {
            return Object[strShimPrototype$1].toString.call(obj) === "[object Date]";
        };
        /**
         * Check if an object is of type Array
         */
        CoreUtils.isArray = function (obj) {
            return Object[strShimPrototype$1].toString.call(obj) === "[object Array]";
        };
        /**
         * Check if an object is of type Error
         */
        CoreUtils.isError = function (obj) {
            return Object[strShimPrototype$1].toString.call(obj) === "[object Error]";
        };
        /**
         * Checks if the type of value is a string.
         * @param {any} value - Value to be checked.
         * @return {boolean} True if the value is a string, false otherwise.
         */
        CoreUtils.isString = function (value) {
            return _isTypeof(value, "string");
        };
        /**
         * Checks if the type of value is a number.
         * @param {any} value - Value to be checked.
         * @return {boolean} True if the value is a number, false otherwise.
         */
        CoreUtils.isNumber = function (value) {
            return _isTypeof(value, "number");
        };
        /**
         * Checks if the type of value is a boolean.
         * @param {any} value - Value to be checked.
         * @return {boolean} True if the value is a boolean, false otherwise.
         */
        CoreUtils.isBoolean = function (value) {
            return _isTypeof(value, "boolean");
        };
        /**
         * Creates a new GUID.
         * @return {string} A GUID.
         */
        CoreUtils.disableCookies = function () {
            CoreUtils._canUseCookies = false;
        };
        CoreUtils.newGuid = function () {
            function randomHexDigit() {
                var c = getCrypto();
                if (c) {
                    return (c.getRandomValues(new Uint8Array(1))[0] % 16);
                }
                return Math.random() * 16;
            }
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(GuidRegex, function (c) {
                var r = (randomHexDigit() | 0), v = (c === 'x' ? r : r & 0x3 | 0x8);
                return v.toString(16);
            });
        };
        /**
         * Convert a date to I.S.O. format in IE8
         */
        CoreUtils.toISOString = function (date) {
            if (CoreUtils.isDate(date)) {
                var pad = function (num) {
                    var r = String(num);
                    if (r.length === 1) {
                        r = "0" + r;
                    }
                    return r;
                };
                return date.getUTCFullYear()
                    + "-" + pad(date.getUTCMonth() + 1)
                    + "-" + pad(date.getUTCDate())
                    + "T" + pad(date.getUTCHours())
                    + ":" + pad(date.getUTCMinutes())
                    + ":" + pad(date.getUTCSeconds())
                    + "." + String((date.getUTCMilliseconds() / 1000).toFixed(3)).slice(2, 5)
                    + "Z";
            }
        };
        /**
         * Performs the specified action for each element in an array. This helper exists to avoid adding a polyfil for older browsers
         * that do not define Array.prototype.xxxx (eg. ES3 only, IE8) just in case any page checks for presence/absence of the prototype
         * implementation. Note: For consistency this will not use the Array.prototype.xxxx implementation if it exists as this would
         * cause a testing requirement to test with and without the implementations
         * @param callbackfn  A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
         * @param thisArg  [Optional] An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
         */
        CoreUtils.arrForEach = function (arr, callbackfn, thisArg) {
            var len = arr.length;
            for (var idx = 0; idx < len; idx++) {
                if (idx in arr) {
                    callbackfn.call(thisArg || arr, arr[idx], idx, arr);
                }
            }
        };
        /**
         * Returns the index of the first occurrence of a value in an array. This helper exists to avoid adding a polyfil for older browsers
         * that do not define Array.prototype.xxxx (eg. ES3 only, IE8) just in case any page checks for presence/absence of the prototype
         * implementation. Note: For consistency this will not use the Array.prototype.xxxx implementation if it exists as this would
         * cause a testing requirement to test with and without the implementations
         * @param searchElement The value to locate in the array.
         * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
         */
        CoreUtils.arrIndexOf = function (arr, searchElement, fromIndex) {
            var len = arr.length;
            var from = fromIndex || 0;
            for (var lp = Math.max(from >= 0 ? from : len - Math.abs(from), 0); lp < len; lp++) {
                if (lp in arr && arr[lp] === searchElement) {
                    return lp;
                }
            }
            return -1;
        };
        /**
         * Calls a defined callback function on each element of an array, and returns an array that contains the results. This helper exists
         * to avoid adding a polyfil for older browsers that do not define Array.prototype.xxxx (eg. ES3 only, IE8) just in case any page
         * checks for presence/absence of the prototype implementation. Note: For consistency this will not use the Array.prototype.xxxx
         * implementation if it exists as this would cause a testing requirement to test with and without the implementations
         * @param callbackfn A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array.
         * @param thisArg An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value.
         */
        CoreUtils.arrMap = function (arr, callbackfn, thisArg) {
            var len = arr.length;
            var _this = thisArg || arr;
            var results = new Array(len);
            for (var lp = 0; lp < len; lp++) {
                if (lp in arr) {
                    results[lp] = callbackfn.call(_this, arr[lp], arr);
                }
            }
            return results;
        };
        /**
         * Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is
         * provided as an argument in the next call to the callback function. This helper exists to avoid adding a polyfil for older browsers that do not define
         * Array.prototype.xxxx (eg. ES3 only, IE8) just in case any page checks for presence/absence of the prototype implementation. Note: For consistency
         * this will not use the Array.prototype.xxxx implementation if it exists as this would cause a testing requirement to test with and without the implementations
         * @param callbackfn A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.
         * @param initialValue If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
         */
        CoreUtils.arrReduce = function (arr, callbackfn, initialValue) {
            var len = arr.length;
            var lp = 0;
            var value;
            // Specifically checking the number of passed arguments as the value could be anything
            if (arguments.length >= 3) {
                value = arguments[2];
            }
            else {
                while (lp < len && !(lp in arr)) {
                    lp++;
                }
                value = arr[lp++];
            }
            while (lp < len) {
                if (lp in arr) {
                    value = callbackfn(value, arr[lp], lp, arr);
                }
                lp++;
            }
            return value;
        };
        /**
         * helper method to trim strings (IE8 does not implement String.prototype.trim)
         */
        CoreUtils.strTrim = function (str) {
            if (!CoreUtils.isString(str)) {
                return str;
            }
            return str.replace(/^\s+|\s+$/g, "");
        };
        /**
         * Returns the names of the enumerable string properties and methods of an object. This helper exists to avoid adding a polyfil for older browsers
         * that do not define Object.keys eg. ES3 only, IE8 just in case any page checks for presence/absence of the prototype implementation.
         * Note: For consistency this will not use the Object.keys implementation if it exists as this would cause a testing requirement to test with and without the implementations
         * @param obj Object that contains the properties and methods. This can be an object that you created or an existing Document Object Model (DOM) object.
         */
        CoreUtils.objKeys = function (obj) {
            var hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString');
            if (!_isFunction(obj) && (!_isObject(obj) || obj === null)) {
                throw new TypeError('objKeys called on non-object');
            }
            var result = [];
            for (var prop in obj) {
                if (_hasOwnProperty(obj, prop)) {
                    result.push(prop);
                }
            }
            if (hasDontEnumBug) {
                var dontEnums = [
                    'toString',
                    'toLocaleString',
                    'valueOf',
                    'hasOwnProperty',
                    'isPrototypeOf',
                    'propertyIsEnumerable',
                    'constructor'
                ];
                var dontEnumsLength = dontEnums.length;
                for (var lp = 0; lp < dontEnumsLength; lp++) {
                    if (_hasOwnProperty(obj, dontEnums[lp])) {
                        result.push(dontEnums[lp]);
                    }
                }
            }
            return result;
        };
        /**
         * Try to define get/set object property accessors for the target object/prototype, this will provide compatibility with
         * existing API definition when run within an ES5+ container that supports accessors but still enable the code to be loaded
         * and executed in an ES3 container, providing basic IE8 compatibility.
         * @param target The object on which to define the property.
         * @param prop The name of the property to be defined or modified.
         * @param getProp The getter function to wire against the getter.
         * @param setProp The setter function to wire against the setter.
         * @returns True if it was able to create the accessors otherwise false
         */
        CoreUtils.objDefineAccessors = function (target, prop, getProp, setProp) {
            var defineProp = Object["defineProperty"];
            if (defineProp) {
                try {
                    var descriptor = {
                        enumerable: true,
                        configurable: true
                    };
                    if (getProp) {
                        descriptor.get = getProp;
                    }
                    if (setProp) {
                        descriptor.set = setProp;
                    }
                    defineProp(target, prop, descriptor);
                    return true;
                }
                catch (e) {
                    // IE8 Defines a defineProperty on Object but it's only supported for DOM elements so it will throw
                    // We will just ignore this here.
                }
            }
            return false;
        };
        /**
         * Trys to add an event handler for the specified event to the window, body and document
         * @param eventName {string} - The name of the event
         * @param callback {any} - The callback function that needs to be executed for the given event
         * @return {boolean} - true if the handler was successfully added
         */
        CoreUtils.addEventHandler = function (eventName, callback) {
            var result = false;
            var w = getWindow();
            if (w) {
                result = _attachEvent(w, eventName, callback);
                result = _attachEvent(w["body"], eventName, callback) || result;
            }
            var doc = getDocument();
            if (doc) {
                result = EventHelper.Attach(doc, eventName, callback) || result;
            }
            return result;
        };
        /**
         * Return the current time via the Date now() function (if available) and falls back to (new Date()).getTime() if now() is unavailable (IE8 or less)
         * https://caniuse.com/#search=Date.now
         */
        CoreUtils.dateNow = function () {
            var dt = Date;
            if (dt.now) {
                return dt.now();
            }
            return new dt().getTime();
        };
        /**
         * Return the current value of the Performance Api now() function (if available) and fallback to CoreUtils.dateNow() if it is unavailable (IE9 or less)
         * https://caniuse.com/#search=performance.now
         */
        CoreUtils.perfNow = function () {
            var perf = getPerformance();
            if (perf && perf.now) {
                return perf.now();
            }
            return CoreUtils.dateNow();
        };
        CoreUtils.isTypeof = _isTypeof;
        CoreUtils.isUndefined = _isUndefined;
        CoreUtils.isNullOrUndefined = _isNullOrUndefined;
        CoreUtils.hasOwnProperty = _hasOwnProperty;
        /**
         * Checks if the passed of value is a function.
         * @param {any} value - Value to be checked.
         * @return {boolean} True if the value is a boolean, false otherwise.
         */
        CoreUtils.isFunction = _isFunction;
        /**
         * Checks if the passed of value is a function.
         * @param {any} value - Value to be checked.
         * @return {boolean} True if the value is a boolean, false otherwise.
         */
        CoreUtils.isObject = _isObject;
        /**
         * Creates an object that has the specified prototype, and that optionally contains specified properties. This helper exists to avoid adding a polyfil
         * for older browsers that do not define Object.create eg. ES3 only, IE8 just in case any page checks for presence/absence of the prototype implementation.
         * Note: For consistency this will not use the Object.create implementation if it exists as this would cause a testing requirement to test with and without the implementations
         * @param obj Object to use as a prototype. May be null
         */
        // tslint:disable-next-line: member-ordering
        CoreUtils.objCreate = objCreateFn$1;
        return CoreUtils;
    }());
    var GuidRegex = /[xy]/g;
    var EventHelper = /** @class */ (function () {
        function EventHelper() {
        }
        /**
         * Binds the specified function to an event, so that the function gets called whenever the event fires on the object
         * @param obj Object to add the event too.
         * @param eventNameWithoutOn String that specifies any of the standard DHTML Events without "on" prefix
         * @param handlerRef Pointer that specifies the function to call when event fires
         * @returns True if the function was bound successfully to the event, otherwise false
         */
        EventHelper.Attach = _attachEvent;
        /**
         * Binds the specified function to an event, so that the function gets called whenever the event fires on the object
         * @deprecated Use {@link EventHelper#Attach} as we are already in a class call EventHelper the extra "Event" just causes a larger result
         * @param obj Object to add the event too.
         * @param eventNameWithoutOn String that specifies any of the standard DHTML Events without "on" prefix
         * @param handlerRef Pointer that specifies the function to call when event fires
         * @returns True if the function was bound successfully to the event, otherwise false
         */
        EventHelper.AttachEvent = _attachEvent;
        /**
         * Removes an event handler for the specified event
         * @param eventName {string} - The name of the event
         * @param callback {any} - The callback function that needs to be executed for the given event
         * @return {boolean} - true if the handler was successfully added
         */
        EventHelper.Detach = _detachEvent;
        /**
         * Removes an event handler for the specified event
         * @deprecated Use {@link EventHelper#Detach} as we are already in a class call EventHelper the extra "Event" just causes a larger result
         * @param eventName {string} - The name of the event
         * @param callback {any} - The callback function that needs to be executed for the given event
         * @return {boolean} - true if the handler was successfully added
         */
        EventHelper.DetachEvent = _detachEvent;
        return EventHelper;
    }());

    var LoggingSeverity;
    (function (LoggingSeverity) {
        /**
         * Error will be sent as internal telemetry
         */
        LoggingSeverity[LoggingSeverity["CRITICAL"] = 1] = "CRITICAL";
        /**
         * Error will NOT be sent as internal telemetry, and will only be shown in browser console
         */
        LoggingSeverity[LoggingSeverity["WARNING"] = 2] = "WARNING";
    })(LoggingSeverity || (LoggingSeverity = {}));
    /**
     * Internal message ID. Please create a new one for every conceptually different message. Please keep alphabetically ordered
     */
    var _InternalMessageId = {
        // Non user actionable
        BrowserDoesNotSupportLocalStorage: 0,
        BrowserCannotReadLocalStorage: 1,
        BrowserCannotReadSessionStorage: 2,
        BrowserCannotWriteLocalStorage: 3,
        BrowserCannotWriteSessionStorage: 4,
        BrowserFailedRemovalFromLocalStorage: 5,
        BrowserFailedRemovalFromSessionStorage: 6,
        CannotSendEmptyTelemetry: 7,
        ClientPerformanceMathError: 8,
        ErrorParsingAISessionCookie: 9,
        ErrorPVCalc: 10,
        ExceptionWhileLoggingError: 11,
        FailedAddingTelemetryToBuffer: 12,
        FailedMonitorAjaxAbort: 13,
        FailedMonitorAjaxDur: 14,
        FailedMonitorAjaxOpen: 15,
        FailedMonitorAjaxRSC: 16,
        FailedMonitorAjaxSend: 17,
        FailedMonitorAjaxGetCorrelationHeader: 18,
        FailedToAddHandlerForOnBeforeUnload: 19,
        FailedToSendQueuedTelemetry: 20,
        FailedToReportDataLoss: 21,
        FlushFailed: 22,
        MessageLimitPerPVExceeded: 23,
        MissingRequiredFieldSpecification: 24,
        NavigationTimingNotSupported: 25,
        OnError: 26,
        SessionRenewalDateIsZero: 27,
        SenderNotInitialized: 28,
        StartTrackEventFailed: 29,
        StopTrackEventFailed: 30,
        StartTrackFailed: 31,
        StopTrackFailed: 32,
        TelemetrySampledAndNotSent: 33,
        TrackEventFailed: 34,
        TrackExceptionFailed: 35,
        TrackMetricFailed: 36,
        TrackPVFailed: 37,
        TrackPVFailedCalc: 38,
        TrackTraceFailed: 39,
        TransmissionFailed: 40,
        FailedToSetStorageBuffer: 41,
        FailedToRestoreStorageBuffer: 42,
        InvalidBackendResponse: 43,
        FailedToFixDepricatedValues: 44,
        InvalidDurationValue: 45,
        TelemetryEnvelopeInvalid: 46,
        CreateEnvelopeError: 47,
        // User actionable
        CannotSerializeObject: 48,
        CannotSerializeObjectNonSerializable: 49,
        CircularReferenceDetected: 50,
        ClearAuthContextFailed: 51,
        ExceptionTruncated: 52,
        IllegalCharsInName: 53,
        ItemNotInArray: 54,
        MaxAjaxPerPVExceeded: 55,
        MessageTruncated: 56,
        NameTooLong: 57,
        SampleRateOutOfRange: 58,
        SetAuthContextFailed: 59,
        SetAuthContextFailedAccountName: 60,
        StringValueTooLong: 61,
        StartCalledMoreThanOnce: 62,
        StopCalledWithoutStart: 63,
        TelemetryInitializerFailed: 64,
        TrackArgumentsNotSpecified: 65,
        UrlTooLong: 66,
        SessionStorageBufferFull: 67,
        CannotAccessCookie: 68,
        IdTooLong: 69,
        InvalidEvent: 70,
        FailedMonitorAjaxSetRequestHeader: 71,
        SendBrowserInfoOnUserInit: 72,
        PluginException: 73,
        NotificationException: 74,
        SnippetScriptLoadFailure: 99,
        InvalidInstrumentationKey: 100
    };

    /*!
     * Microsoft Dynamic Proto Utility, 1.0.0
     * Copyright (c) Microsoft and contributors. All rights reserved.
     */
    /**
     * Constant string defined to support minimization
     * @ignore
     */
    var Constructor = 'constructor';
    /**
     * Constant string defined to support minimization
     * @ignore
     */
    var Prototype = 'prototype';
    /**
     * Constant string defined to support minimization
     * @ignore
     */
    var strFunction$1 = 'function';
    /**
     * Used to define the name of the instance function lookup table
     * @ignore
     */
    var DynInstFuncTable = '_dynInstFuncs';
    /**
     * Name used to tag the dynamic prototype function
     * @ignore
     */
    var DynProxyTag = '_isDynProxy';
    /**
     * Name added to a prototype to define the dynamic prototype "class" name used to lookup the function table
     * @ignore
     */
    var DynClassName = '_dynClass';
    /**
     * Prefix added to the classname to avoid any name clashes with other instance level properties
     * @ignore
     */
    var DynClassNamePrefix = '_dynCls$';
    /**
     * Value used as the name of a class when it cannot be determined
     * @ignore
     */
    var UnknownValue = '_unknown_';
    /**
     * Constant string defined to support minimization
     * @ignore
     */
    var str__Proto = "__proto__";
    /**
     * Pre-lookup to check if we are running on a modern browser (i.e. not IE8)
     * @ignore
     */
    var _objGetPrototypeOf = Object["getPrototypeOf"];
    /**
     * Internal Global used to generate a unique dynamic class name, every new class will increase this value
     * @ignore
     */
    var _dynamicNames = 0;
    /**
     * Helper to check if the object contains a property of the name
     * @ignore
     */
    function _hasOwnProperty$1(obj, prop) {
        return obj && Object[Prototype].hasOwnProperty.call(obj, prop);
    }
    /**
     * Checks if the passed of value is a function.
     * @param {any} value - Value to be checked.
     * @return {boolean} True if the value is a boolean, false otherwise.
     * @ignore
     */
    function _isFunction$1(value) {
        return typeof value === strFunction$1;
    }
    /**
     * Helper used to check whether the target is an Object prototype or Array prototype
     * @ignore
     */
    function _isObjectOrArrayPrototype(target) {
        return target && (target === Object[Prototype] || target === Array[Prototype]);
    }
    /**
     * Helper used to check whether the target is an Object prototype, Array prototype or Function prototype
     * @ignore
     */
    function _isObjectArrayOrFunctionPrototype(target) {
        return _isObjectOrArrayPrototype(target) || target === Function[Prototype];
    }
    /**
     * Helper used to get the prototype of the target object as getPrototypeOf is not available in an ES3 environment.
     * @ignore
     */
    function _getObjProto(target) {
        if (target) {
            // This method doesn't existing in older browsers (e.g. IE8)
            if (_objGetPrototypeOf) {
                return _objGetPrototypeOf(target);
            }
            // target[Constructor] May break if the constructor has been changed or removed
            var newProto = target[str__Proto] || target[Prototype] || target[Constructor];
            if (newProto) {
                return newProto;
            }
        }
        return null;
    }
    /**
     * Helper function to check whether the provided function name is a potential candidate for dynamic
     * callback and prototype generation.
     * @param target The target object, may be a prototpe or class object
     * @param funcName The function name
     * @param skipOwn Skips the check for own property
     * @ignore
     */
    function _isDynamicCandidate(target, funcName, skipOwn) {
        return (funcName !== Constructor && _isFunction$1(target[funcName]) && (skipOwn || _hasOwnProperty$1(target, funcName)));
    }
    /**
     * Helper to throw a TypeError exception
     * @param message the message
     * @ignore
     */
    function _throwTypeError(message) {
        throw new TypeError("DynamicProto: " + message);
    }
    /**
     * Returns a collection of the instance functions that are defined directly on the thisTarget object, it does
     * not return any inherited functions
     * @param thisTarget The object to get the instance functions from
     * @ignore
     */
    function _getInstanceFuncs(thisTarget) {
        // Get the base proto
        var instFuncs = {};
        // Save any existing instance functions
        for (var name in thisTarget) {
            // Don't include any dynamic prototype instances - as we only want the real functions
            if (!instFuncs[name] && _isDynamicCandidate(thisTarget, name, false)) {
                // Create an instance callback for pasing the base function to the caller
                instFuncs[name] = thisTarget[name];
            }
        }
        return instFuncs;
    }
    /**
     * Returns whether the value is included in the array
     * @param values The array of values
     * @param value  The value
     */
    function _hasVisited(values, value) {
        for (var lp = values.length - 1; lp >= 0; lp--) {
            if (values[lp] === value) {
                return true;
            }
        }
        return false;
    }
    /**
     * Returns an object that contains callback functions for all "base/super" functions, this is used to "save"
     * enabling calling super.xxx() functions without requiring that the base "class" has defined a prototype references
     * @param target The current instance
     * @ignore
     */
    function _getBaseFuncs(classProto, thisTarget, instFuncs) {
        function _instFuncProxy(target, theFunc) {
            return function () {
                return theFunc.apply(target, arguments);
            };
        }
        // Start creating a new baseFuncs by creating proxies for the instance functions (as they may get replaced)
        var baseFuncs = {};
        for (var name in instFuncs) {
            // Create an instance callback for pasing the base function to the caller
            baseFuncs[name] = _instFuncProxy(thisTarget, instFuncs[name]);
        }
        // Get the base prototype functions
        var baseProto = _getObjProto(classProto);
        var visited = [];
        // Don't include base object functions for Object, Array or Function
        while (baseProto && !_isObjectArrayOrFunctionPrototype(baseProto) && !_hasVisited(visited, baseProto)) {
            // look for prototype functions
            for (var name in baseProto) {
                // Don't include any dynamic prototype instances - as we only want the real functions
                // For IE 7/8 the prototype lookup doesn't provide the full chain so we need to bypass the 
                // hasOwnProperty check we get all of the methods, main difference is that IE7/8 doesn't return
                // the Object prototype methods while bypassing the check
                if (!baseFuncs[name] && _isDynamicCandidate(baseProto, name, !_objGetPrototypeOf)) {
                    // Create an instance callback for pasing the base function to the caller
                    baseFuncs[name] = _instFuncProxy(thisTarget, baseProto[name]);
                }
            }
            // We need to find all possible functions that might be overloaded by walking the entire prototype chain
            // This avoids the caller from needing to check whether it's direct base class implements the function or not
            // by walking the entire chain it simplifies the usage and issues from upgrading any of the base classes.
            visited.push(baseProto);
            baseProto = _getObjProto(baseProto);
        }
        return baseFuncs;
    }
    /**
     * Add the required dynamic prototype methods to the the class prototype
     * @param proto The class prototype
     * @param className The instance classname
     * @param target The target instance
     * @param baseInstFuncs The base instance functions
     * @ignore
     */
    function _populatePrototype(proto, className, target, baseInstFuncs) {
        function _createDynamicPrototype(proto, funcName) {
            var dynProtoProxy = function () {
                var _this = this;
                // We need to check whether the class name is defined directly on this prototype otherwise
                // it will walk the proto chain and return any parent proto classname.
                if (_this && _hasOwnProperty$1(proto, DynClassName)) {
                    var instFunc = ((_this[DynInstFuncTable] || {})[proto[DynClassName]] || {})[funcName];
                    if (instFunc) {
                        // Used the instance function property
                        return instFunc.apply(_this, arguments);
                    }
                    // Avoid stack overflow from recursive calling the same function
                    _throwTypeError("Missing [" + funcName + "] " + strFunction$1);
                }
                var protoFunc = proto[funcName];
                // Check that the prototype function is not a self reference -- try to avoid stack overflow!
                if (protoFunc === dynProtoProxy) {
                    // It is so lookup the base prototype
                    protoFunc = _getObjProto(proto)[funcName];
                }
                if (!_isFunction$1(protoFunc)) {
                    _throwTypeError("[" + funcName + "] is not a " + strFunction$1);
                }
                return protoFunc.apply(_this, arguments);
            };
            // Tag this function as a proxy to support replacing dynamic proxy elements (primary use case is for unit testing
            // via which can dynamically replace the prototype function reference)
            dynProtoProxy[DynProxyTag] = 1;
            return dynProtoProxy;
        }
        if (!_isObjectOrArrayPrototype(proto)) {
            var instFuncTable = target[DynInstFuncTable] = target[DynInstFuncTable] || {};
            var instFuncs = instFuncTable[className] = (instFuncTable[className] || {}); // fetch and assign if as it may not exist yet
            for (var name in target) {
                // Only add overriden functions
                if (_isDynamicCandidate(target, name, false) && target[name] !== baseInstFuncs[name]) {
                    // Save the instance Function to the lookup table and remove it from the instance as it's not a dynamic proto function
                    instFuncs[name] = target[name];
                    delete target[name];
                    // Add a dynamic proto if one doesn't exist or if a prototype function exists and it's not a dynamic one
                    if (!_hasOwnProperty$1(proto, name) || (proto[name] && !proto[name][DynProxyTag])) {
                        proto[name] = _createDynamicPrototype(proto, name);
                    }
                }
            }
        }
    }
    /**
     * Checks whether the passed prototype object appears to be correct by walking the prototype heirarchy of the instance
     * @param classProto The class prototype instance
     * @param thisTarget The current instance that will be checked whther the passed prototype instance is in the heirarchy
     * @ignore
     */
    function _checkPrototype(classProto, thisTarget) {
        var thisProto = _getObjProto(thisTarget);
        while (thisProto && !_isObjectArrayOrFunctionPrototype(thisProto)) {
            if (thisProto === classProto) {
                return true;
            }
            thisProto = _getObjProto(thisProto);
        }
        return false;
    }
    /**
     * Gets the current prototype name using the ES6 name if available otherwise falling back to a use unknown as the name.
     * It's not critical for this to return a name, it's used to decorate the generated unique name for easier debugging only.
     * @param target
     * @param unknownValue
     * @ignore
     */
    function _getObjName(target, unknownValue) {
        if (_hasOwnProperty$1(target, Prototype)) {
            // Look like a prototype
            return target.name || unknownValue || UnknownValue;
        }
        return (((target || {})[Constructor]) || {}).name || unknownValue || UnknownValue;
    }
    /**
     * Helper function when creating dynamic (inline) functions for classes, this helper performs the following tasks :-
     * - Saves references to all defined base class functions
     * - Calls the delegateFunc with the current target (this) and a base object reference that can be used to call all "super" functions.
     * - Will populate the class prototype for all overridden functions to support class extension that call the prototype instance.
     * Callers should use this helper when declaring all function within the constructor of a class, as mentioned above the delegateFunc is
     * passed both the target "this" and an object that can be used to call any base (super) functions, using this based object in place of
     * super.XXX() (which gets expanded to _super.prototype.XXX()) provides a better minification outcome and also ensures the correct "this"
     * context is maintained as TypeScript creates incorrect references using super.XXXX() for dynamically defined functions i.e. Functions
     * defined in the constructor or some other function (rather than declared as complete typescript functions).
     * ### Usage
     * ```typescript
     * import dynamicProto from "@microsoft/dynamicproto-js";
     * class ExampleClass extends BaseClass {
     *     constructor() {
     *         dynamicProto(ExampleClass, this, (_self, base) => {
     *             // This will define a function that will be converted to a prototype function
     *             _self.newFunc = () => {
     *                 // Access any "this" instance property
     *                 if (_self.someProperty) {
     *                     ...
     *                 }
     *             }
     *             // This will define a function that will be converted to a prototype function
     *             _self.myFunction = () => {
     *                 // Access any "this" instance property
     *                 if (_self.someProperty) {
     *                     // Call the base version of the function that we are overriding
     *                     base.myFunction();
     *                 }
     *                 ...
     *             }
     *             _self.initialize = () => {
     *                 ...
     *             }
     *             // Warnings: While the following will work as _self is simply a reference to
     *             // this, if anyone overrides myFunction() the overridden will be called first
     *             // as the normal JavaScript method resolution will occur and the defined
     *             // _self.initialize() function is actually gets removed from the instance and
     *             // a proxy prototype version is created to reference the created method.
     *             _self.initialize();
     *         });
     *     }
     * }
     * ```
     * @typeparam DPType This is the generic type of the class, used to keep intellisense valid
     * @typeparam DPCls The type that contains the prototype of the current class
     * @param theClass This is the current class instance which contains the prototype for the current class
     * @param target The current "this" (target) reference, when the class has been extended this.prototype will not be the 'theClass' value.
     * @param delegateFunc The callback function (closure) that will create the dynamic function
     */
    function dynamicProto(theClass, target, delegateFunc) {
        // Make sure that the passed theClass argument looks correct
        if (!_hasOwnProperty$1(theClass, Prototype)) {
            _throwTypeError("theClass is an invalid class definition.");
        }
        // Quick check to make sure that the passed theClass argument looks correct (this is a common copy/paste error)
        var classProto = theClass[Prototype];
        if (!_checkPrototype(classProto, target)) {
            _throwTypeError("[" + _getObjName(theClass) + "] is not in class heirarchy of [" + _getObjName(target) + "]");
        }
        var className = null;
        if (_hasOwnProperty$1(classProto, DynClassName)) {
            // Only grab the class name if it's defined on this prototype (i.e. don't walk the prototype chain)
            className = classProto[DynClassName];
        }
        else {
            // As not all browser support name on the prototype creating a unique dynamic one if we have not already
            // assigned one, so we can use a simple string as the lookup rather than an object for the dynamic instance
            // function table lookup.
            className = DynClassNamePrefix + _getObjName(theClass, "_") + "$" + _dynamicNames;
            _dynamicNames++;
            classProto[DynClassName] = className;
        }
        // Get the current instance functions
        var instFuncs = _getInstanceFuncs(target);
        // Get all of the functions for any base instance (before they are potentially overriden)
        var baseFuncs = _getBaseFuncs(classProto, target, instFuncs);
        // Execute the delegate passing in both the current target "this" and "base" function references
        // Note casting the same type as we don't actually have the base class here and this will provide some intellisense support
        delegateFunc(target, baseFuncs);
        // Populate the Prototype for any overidden instance functions
        _populatePrototype(classProto, className, target, instFuncs);
    }

    /**
     * For user non actionable traces use AI Internal prefix.
     */
    var AiNonUserActionablePrefix = "AI (Internal): ";
    /**
     * Prefix of the traces in portal.
     */
    var AiUserActionablePrefix = "AI: ";
    /**
     *  Session storage key for the prefix for the key indicating message type already logged
     */
    var AIInternalMessagePrefix = "AITR_";
    function _sanitizeDiagnosticText(text) {
        if (text) {
            return "\"" + text.replace(/\"/g, "") + "\"";
        }
        return "";
    }
    var _InternalLogMessage = /** @class */ (function () {
        function _InternalLogMessage(msgId, msg, isUserAct, properties) {
            if (isUserAct === void 0) { isUserAct = false; }
            var _self = this;
            _self.messageId = msgId;
            _self.message =
                (isUserAct ? AiUserActionablePrefix : AiNonUserActionablePrefix) +
                    msgId;
            var strProps = "";
            if (hasJSON()) {
                strProps = getJSON().stringify(properties);
            }
            var diagnosticText = (msg ? " message:" + _sanitizeDiagnosticText(msg) : "") +
                (properties ? " props:" + _sanitizeDiagnosticText(strProps) : "");
            _self.message += diagnosticText;
        }
        _InternalLogMessage.dataType = "MessageData";
        return _InternalLogMessage;
    }());
    var DiagnosticLogger = /** @class */ (function () {
        function DiagnosticLogger(config) {
            this.identifier = 'DiagnosticLogger';
            /**
             * The internal logging queue
             */
            this.queue = [];
            /**
             * Count of internal messages sent
             */
            var _messageCount = 0;
            /**
             * Holds information about what message types were already logged to console or sent to server.
             */
            var _messageLogged = {};
            dynamicProto(DiagnosticLogger, this, function (_self) {
                var isNullOrUndefined = CoreUtils.isNullOrUndefined;
                var isUndefined = CoreUtils.isUndefined;
                var isFunction = CoreUtils.isFunction;
                if (isNullOrUndefined(config)) {
                    config = {};
                }
                _self.consoleLoggingLevel = function () { return _getConfigValue('loggingLevelConsole', 0); };
                _self.telemetryLoggingLevel = function () { return _getConfigValue('loggingLevelTelemetry', 1); };
                _self.maxInternalMessageLimit = function () { return _getConfigValue('maxMessageLimit', 25); };
                _self.enableDebugExceptions = function () { return _getConfigValue('enableDebugExceptions', false); };
                /**
                 * This method will throw exceptions in debug mode or attempt to log the error as a console warning.
                 * @param severity {LoggingSeverity} - The severity of the log message
                 * @param message {_InternalLogMessage} - The log message.
                 */
                _self.throwInternal = function (severity, msgId, msg, properties, isUserAct) {
                    if (isUserAct === void 0) { isUserAct = false; }
                    var message = new _InternalLogMessage(msgId, msg, isUserAct, properties);
                    if (_self.enableDebugExceptions()) {
                        throw message;
                    }
                    else {
                        if (!isUndefined(message) && !!message) {
                            if (!isUndefined(message.message)) {
                                if (isUserAct) {
                                    // check if this message type was already logged to console for this page view and if so, don't log it again
                                    var messageKey = +message.messageId;
                                    if (!_messageLogged[messageKey] && _self.consoleLoggingLevel() >= LoggingSeverity.WARNING) {
                                        _self.warnToConsole(message.message);
                                        _messageLogged[messageKey] = true;
                                    }
                                }
                                else {
                                    // don't log internal AI traces in the console, unless the verbose logging is enabled
                                    if (_self.consoleLoggingLevel() >= LoggingSeverity.WARNING) {
                                        _self.warnToConsole(message.message);
                                    }
                                }
                                _self.logInternalMessage(severity, message);
                            }
                        }
                    }
                };
                /**
                 * This will write a warning to the console if possible
                 * @param message {string} - The warning message
                 */
                _self.warnToConsole = function (message) {
                    var theConsole = getConsole();
                    if (!!theConsole) {
                        var logFunc = 'log';
                        if (theConsole.warn) {
                            logFunc = 'warn';
                        }
                        if (isFunction(theConsole[logFunc])) {
                            theConsole[logFunc](message);
                        }
                    }
                };
                /**
                 * Resets the internal message count
                 */
                _self.resetInternalMessageCount = function () {
                    _messageCount = 0;
                    _messageLogged = {};
                };
                /**
                 * Logs a message to the internal queue.
                 * @param severity {LoggingSeverity} - The severity of the log message
                 * @param message {_InternalLogMessage} - The message to log.
                 */
                _self.logInternalMessage = function (severity, message) {
                    if (_areInternalMessagesThrottled()) {
                        return;
                    }
                    // check if this message type was already logged for this session and if so, don't log it again
                    var logMessage = true;
                    var messageKey = AIInternalMessagePrefix + message.messageId;
                    // if the session storage is not available, limit to only one message type per page view
                    if (_messageLogged[messageKey]) {
                        logMessage = false;
                    }
                    else {
                        _messageLogged[messageKey] = true;
                    }
                    if (logMessage) {
                        // Push the event in the internal queue
                        if (severity <= _self.telemetryLoggingLevel()) {
                            _self.queue.push(message);
                            _messageCount++;
                        }
                        // When throttle limit reached, send a special event
                        if (_messageCount === _self.maxInternalMessageLimit()) {
                            var throttleLimitMessage = "Internal events throttle limit per PageView reached for this app.";
                            var throttleMessage = new _InternalLogMessage(_InternalMessageId.MessageLimitPerPVExceeded, throttleLimitMessage, false);
                            _self.queue.push(throttleMessage);
                            _self.warnToConsole(throttleLimitMessage);
                        }
                    }
                };
                function _getConfigValue(name, defValue) {
                    var value = config[name];
                    if (!isNullOrUndefined(value)) {
                        return value;
                    }
                    return defValue;
                }
                function _areInternalMessagesThrottled() {
                    return _messageCount >= _self.maxInternalMessageLimit();
                }
            });
        }
    // Removed Stub for DiagnosticLogger.prototype.enableDebugExceptions.
    // Removed Stub for DiagnosticLogger.prototype.consoleLoggingLevel.
    // Removed Stub for DiagnosticLogger.prototype.telemetryLoggingLevel.
    // Removed Stub for DiagnosticLogger.prototype.maxInternalMessageLimit.
    // Removed Stub for DiagnosticLogger.prototype.throwInternal.
    // Removed Stub for DiagnosticLogger.prototype.warnToConsole.
    // Removed Stub for DiagnosticLogger.prototype.resetInternalMessageCount.
    // Removed Stub for DiagnosticLogger.prototype.logInternalMessage.
        return DiagnosticLogger;
    }());

    var strExecutionContextKey = "ctx";
    var PerfEvent = /** @class */ (function () {
        function PerfEvent(name, payloadDetails, isAsync) {
            var _self = this;
            var accessorDefined = false;
            _self.start = CoreUtils.dateNow();
            _self.name = name;
            _self.isAsync = isAsync;
            _self.isChildEvt = function () { return false; };
            if (CoreUtils.isFunction(payloadDetails)) {
                // Create an accessor to minimize the potential performance impact of executing the payloadDetails callback
                var theDetails_1;
                accessorDefined = CoreUtils.objDefineAccessors(_self, 'payload', function () {
                    // Delay the execution of the payloadDetails until needed
                    if (!theDetails_1 && CoreUtils.isFunction(payloadDetails)) {
                        theDetails_1 = payloadDetails();
                        // clear it out now so the referenced objects can be garbage collected
                        payloadDetails = null;
                    }
                    return theDetails_1;
                });
            }
            _self.getCtx = function (key) {
                if (key) {
                    // The parent and child links are located directly on the object (for better viewing in the DebugPlugin)
                    if (key === PerfEvent.ParentContextKey || key === PerfEvent.ChildrenContextKey) {
                        return _self[key];
                    }
                    return (_self[strExecutionContextKey] || {})[key];
                }
                return null;
            };
            _self.setCtx = function (key, value) {
                if (key) {
                    // Put the parent and child links directly on the object (for better viewing in the DebugPlugin)
                    if (key === PerfEvent.ParentContextKey) {
                        // Simple assumption, if we are setting a parent then we must be a child
                        if (!_self[key]) {
                            _self.isChildEvt = function () { return true; };
                        }
                        _self[key] = value;
                    }
                    else if (key === PerfEvent.ChildrenContextKey) {
                        _self[key] = value;
                    }
                    else {
                        var ctx = _self[strExecutionContextKey] = _self[strExecutionContextKey] || {};
                        ctx[key] = value;
                    }
                }
            };
            _self.complete = function () {
                var childTime = 0;
                var childEvts = _self.getCtx(PerfEvent.ChildrenContextKey);
                if (CoreUtils.isArray(childEvts)) {
                    for (var lp = 0; lp < childEvts.length; lp++) {
                        var childEvt = childEvts[lp];
                        if (childEvt) {
                            childTime += childEvt.time;
                        }
                    }
                }
                _self.time = CoreUtils.dateNow() - _self.start;
                _self.exTime = _self.time - childTime;
                _self.complete = function () { };
                if (!accessorDefined && CoreUtils.isFunction(payloadDetails)) {
                    // If we couldn't define the property set during complete -- to minimize the perf impact until after the time
                    _self.payload = payloadDetails();
                }
            };
        }
        PerfEvent.ParentContextKey = "parent";
        PerfEvent.ChildrenContextKey = "childEvts";
        return PerfEvent;
    }());
    var PerfManager = /** @class */ (function () {
        function PerfManager(manager) {
            /**
             * General bucket used for execution context set and retrieved via setCtx() and getCtx.
             * Defined as private so it can be visualized via the DebugPlugin
             */
            this.ctx = {};
            dynamicProto(PerfManager, this, function (_self) {
                _self.create = function (src, payloadDetails, isAsync) {
                    // TODO (@MSNev): at some point we will want to add additional configuration to "select" which events to instrument
                    // for now this is just a simple do everything.
                    return new PerfEvent(src, payloadDetails, isAsync);
                };
                _self.fire = function (perfEvent) {
                    if (perfEvent) {
                        perfEvent.complete();
                        if (manager) {
                            manager.perfEvent(perfEvent);
                        }
                    }
                };
                _self.setCtx = function (key, value) {
                    if (key) {
                        var ctx = _self[strExecutionContextKey] = _self[strExecutionContextKey] || {};
                        ctx[key] = value;
                    }
                };
                _self.getCtx = function (key) {
                    return (_self[strExecutionContextKey] || {})[key];
                };
            });
        }
    // Removed Stub for PerfManager.prototype.create.
    // Removed Stub for PerfManager.prototype.fire.
    // Removed Stub for PerfManager.prototype.setCtx.
    // Removed Stub for PerfManager.prototype.getCtx.
        return PerfManager;
    }());
    var doPerfActiveKey = "CoreUtils.doPerf";
    /**
     * Helper function to wrap a function with a perf event
     * @param mgrSource - The Performance Manager or a Performance provider source (may be null)
     * @param getSource - The callback to create the source name for the event (if perf monitoring is enabled)
     * @param func - The function to call and measure
     * @param details - A function to return the payload details
     * @param isAsync - Is the event / function being call asynchronously or synchronously
     */
    function doPerf(mgrSource, getSource, func, details, isAsync) {
        if (mgrSource) {
            var perfMgr = mgrSource;
            if (perfMgr && CoreUtils.isFunction(perfMgr["getPerfMgr"])) {
                // Looks like a perf manager provider object
                perfMgr = perfMgr["getPerfMgr"]();
            }
            if (perfMgr) {
                var perfEvt = void 0;
                var currentActive = perfMgr.getCtx(doPerfActiveKey);
                try {
                    perfEvt = perfMgr.create(getSource(), details, isAsync);
                    if (perfEvt) {
                        if (currentActive && perfEvt.setCtx) {
                            perfEvt.setCtx(PerfEvent.ParentContextKey, currentActive);
                            if (currentActive.getCtx && currentActive.setCtx) {
                                var children = currentActive.getCtx(PerfEvent.ChildrenContextKey);
                                if (!children) {
                                    children = [];
                                    currentActive.setCtx(PerfEvent.ChildrenContextKey, children);
                                }
                                children.push(perfEvt);
                            }
                        }
                        // Set this event as the active event now
                        perfMgr.setCtx(doPerfActiveKey, perfEvt);
                        return func(perfEvt);
                    }
                }
                catch (ex) {
                    if (perfEvt && perfEvt.setCtx) {
                        perfEvt.setCtx("exception", ex);
                    }
                }
                finally {
                    // fire the perf event
                    if (perfEvt) {
                        perfMgr.fire(perfEvt);
                    }
                    // Reset the active event to the previous value
                    perfMgr.setCtx(doPerfActiveKey, currentActive);
                }
            }
        }
        return func();
    }

    var _isFunction$2 = CoreUtils.isFunction;
    var TelemetryPluginChain = /** @class */ (function () {
        function TelemetryPluginChain(plugin, defItemCtx) {
            var _self = this;
            var _nextProxy = null;
            var _hasProcessTelemetry = _isFunction$2(plugin.processTelemetry);
            var _hasSetNext = _isFunction$2(plugin.setNextPlugin);
            _self._hasRun = false;
            _self.getPlugin = function () {
                return plugin;
            };
            _self.getNext = function () {
                return _nextProxy;
            };
            _self.setNext = function (nextPlugin) {
                _nextProxy = nextPlugin;
            };
            _self.processTelemetry = function (env, itemCtx) {
                if (!itemCtx) {
                    // Looks like a plugin didn't pass the (optional) context, so restore to the default
                    itemCtx = defItemCtx;
                }
                var identifier = plugin ? plugin.identifier : "TelemetryPluginChain";
                doPerf(itemCtx ? itemCtx.core() : null, function () { return identifier + ":processTelemetry"; }, function () {
                    if (plugin && _hasProcessTelemetry) {
                        _self._hasRun = true;
                        try {
                            // Ensure that we keep the context in sync (for processNext()), just in case a plugin
                            // doesn't calls processTelemetry() instead of itemContext.processNext() or some 
                            // other form of error occurred
                            itemCtx.setNext(_nextProxy);
                            if (_hasSetNext) {
                                // Backward compatibility setting the next plugin on the instance
                                plugin.setNextPlugin(_nextProxy);
                            }
                            // Set a flag on the next plugin so we know if it was attempted to be executed
                            _nextProxy && (_nextProxy._hasRun = false);
                            plugin.processTelemetry(env, itemCtx);
                        }
                        catch (error) {
                            var hasRun = _nextProxy && _nextProxy._hasRun;
                            if (!_nextProxy || !hasRun) {
                                // Either we have no next plugin or the current one did not attempt to call the next plugin
                                // Which means the current one is the root of the failure so log/report this failure
                                itemCtx.diagLog().throwInternal(LoggingSeverity.CRITICAL, _InternalMessageId.PluginException, "Plugin [" + plugin.identifier + "] failed during processTelemetry - " + error);
                            }
                            if (_nextProxy && !hasRun) {
                                // As part of the failure the current plugin did not attempt to call the next plugin in the cahin
                                // So rather than leave the pipeline dead in the water we call the next plugin
                                _nextProxy.processTelemetry(env, itemCtx);
                            }
                        }
                    }
                    else if (_nextProxy) {
                        _self._hasRun = true;
                        // The underlying plugin is either not defined or does not have a processTelemetry implementation
                        // so we still want the next plugin to be executed.
                        _nextProxy.processTelemetry(env, itemCtx);
                    }
                }, function () { return ({ item: env }); }, !(env.sync));
            };
        }
        return TelemetryPluginChain;
    }());

    var _isNullOrUndefined$1 = CoreUtils.isNullOrUndefined;
    /**
     * Creates the instance execution chain for the plugins
     */
    function _createProxyChain(plugins, itemCtx) {
        var proxies = [];
        if (plugins && plugins.length > 0) {
            // Create the proxies and wire up the next plugin chain
            var lastProxy = null;
            for (var idx = 0; idx < plugins.length; idx++) {
                var thePlugin = plugins[idx];
                if (thePlugin && CoreUtils.isFunction(thePlugin.processTelemetry)) {
                    // Only add plugins that are processors
                    var newProxy = new TelemetryPluginChain(thePlugin, itemCtx);
                    proxies.push(newProxy);
                    if (lastProxy) {
                        // Set this new proxy as the next for the previous one
                        lastProxy.setNext(newProxy);
                    }
                    lastProxy = newProxy;
                }
            }
        }
        return proxies.length > 0 ? proxies[0] : null;
    }
    function _copyProxyChain(proxy, itemCtx, startAt) {
        var plugins = [];
        var add = startAt ? false : true;
        if (proxy) {
            while (proxy) {
                var thePlugin = proxy.getPlugin();
                if (add || thePlugin === startAt) {
                    add = true;
                    plugins.push(thePlugin);
                }
                proxy = proxy.getNext();
            }
        }
        if (!add) {
            plugins.push(startAt);
        }
        return _createProxyChain(plugins, itemCtx);
    }
    function _copyPluginChain(srcPlugins, itemCtx, startAt) {
        var plugins = srcPlugins;
        var add = false;
        if (startAt && srcPlugins) {
            plugins = [];
            CoreUtils.arrForEach(srcPlugins, function (thePlugin) {
                if (add || thePlugin === startAt) {
                    add = true;
                    plugins.push(thePlugin);
                }
            });
        }
        if (startAt && !add) {
            if (!plugins) {
                plugins = [];
            }
            plugins.push(startAt);
        }
        return _createProxyChain(plugins, itemCtx);
    }
    var ProcessTelemetryContext = /** @class */ (function () {
        /**
         * Creates a new Telemetry Item context with the current config, core and plugin execution chain
         * @param plugins - The plugin instances that will be executed
         * @param config - The current config
         * @param core - The current core instance
         */
        function ProcessTelemetryContext(plugins, config, core, startAt) {
            var _self = this;
            var _nextProxy = null; // Null == No next plugin
            // There is no next element (null) vs not defined (undefined)
            if (startAt !== null) {
                if (plugins && CoreUtils.isFunction(plugins.getPlugin)) {
                    // We have a proxy chain object
                    _nextProxy = _copyProxyChain(plugins, _self, startAt || plugins.getPlugin());
                }
                else {
                    // We just have an array
                    if (startAt) {
                        _nextProxy = _copyPluginChain(plugins, _self, startAt);
                    }
                    else if (CoreUtils.isUndefined(startAt)) {
                        // Undefined means copy the existing chain
                        _nextProxy = _createProxyChain(plugins, _self);
                    }
                }
            }
            _self.core = function () {
                return core;
            };
            _self.diagLog = function () {
                var logger = (core || {}).logger;
                if (!logger) {
                    // Fallback so we always have a logger
                    logger = new DiagnosticLogger(config || {});
                }
                return logger;
            };
            _self.getCfg = function () {
                return config;
            };
            _self.getExtCfg = function (identifier, defaultValue) {
                if (defaultValue === void 0) { defaultValue = {}; }
                var theConfig;
                if (config) {
                    var extConfig = config.extensionConfig;
                    if (extConfig && identifier) {
                        theConfig = extConfig[identifier];
                    }
                }
                return (theConfig ? theConfig : defaultValue);
            };
            _self.getConfig = function (identifier, field, defaultValue) {
                if (defaultValue === void 0) { defaultValue = false; }
                var theValue;
                var extConfig = _self.getExtCfg(identifier, null);
                if (extConfig && !_isNullOrUndefined$1(extConfig[field])) {
                    theValue = extConfig[field];
                }
                else if (config && !_isNullOrUndefined$1(config[field])) {
                    theValue = config[field];
                }
                return !_isNullOrUndefined$1(theValue) ? theValue : defaultValue;
            };
            _self.hasNext = function () {
                return _nextProxy != null;
            };
            _self.getNext = function () {
                return _nextProxy;
            };
            _self.setNext = function (nextPlugin) {
                _nextProxy = nextPlugin;
            };
            _self.processNext = function (env) {
                var nextPlugin = _nextProxy;
                if (nextPlugin) {
                    // Automatically move to the next plugin
                    _nextProxy = nextPlugin.getNext();
                    nextPlugin.processTelemetry(env, _self);
                }
            };
            _self.createNew = function (plugins, startAt) {
                if (plugins === void 0) { plugins = null; }
                return new ProcessTelemetryContext(plugins || _nextProxy, config, core, startAt);
            };
        }
        return ProcessTelemetryContext;
    }());

    var _isFunction$3 = CoreUtils.isFunction;
    var getPlugin = "getPlugin";
    /**
     * BaseTelemetryPlugin provides a basic implementation of the ITelemetryPlugin interface so that plugins
     * can avoid implementation the same set of boiler plate code as well as provide a base
     * implementation so that new default implementations can be added without breaking all plugins.
     */
    var BaseTelemetryPlugin = /** @class */ (function () {
        function BaseTelemetryPlugin() {
            var _self = this;
            var _isinitialized = false;
            var _rootCtx = null; // Used as the root context, holding the current config and initialized core
            var _nextPlugin = null; // Used for backward compatibility where plugins don't call the main pipeline
            _self.core = null;
            _self.diagLog = function (itemCtx) {
                return _self._getTelCtx(itemCtx).diagLog();
            };
            _self.isInitialized = function () {
                return _isinitialized;
            };
            _self.setInitialized = function (isInitialized) {
                _isinitialized = isInitialized;
            };
            // _self.getNextPlugin = () => DO NOT IMPLEMENT
            // Sub-classes of this base class *should* not be relying on this value and instead
            // should use processNext() function. If you require access to the plugin use the
            // IProcessTelemetryContext.getNext().getPlugin() while in the pipeline, Note getNext() may return null.
            _self.setNextPlugin = function (next) {
                _nextPlugin = next;
            };
            _self.processNext = function (env, itemCtx) {
                if (itemCtx) {
                    // Normal core execution sequence
                    itemCtx.processNext(env);
                }
                else if (_nextPlugin && _isFunction$3(_nextPlugin.processTelemetry)) {
                    // Looks like backward compatibility or out of band processing. And as it looks 
                    // like a ITelemetryPlugin or ITelemetryPluginChain, just call processTelemetry
                    _nextPlugin.processTelemetry(env, null);
                }
            };
            _self._getTelCtx = function (currentCtx) {
                if (currentCtx === void 0) { currentCtx = null; }
                var itemCtx = currentCtx;
                if (!itemCtx) {
                    var rootCtx = _rootCtx || new ProcessTelemetryContext(null, {}, _self.core);
                    // tslint:disable-next-line: prefer-conditional-expression
                    if (_nextPlugin && _nextPlugin[getPlugin]) {
                        // Looks like a chain object
                        itemCtx = rootCtx.createNew(null, _nextPlugin[getPlugin]);
                    }
                    else {
                        itemCtx = rootCtx.createNew(null, _nextPlugin);
                    }
                }
                return itemCtx;
            };
            _self._baseTelInit = function (config, core, extensions, pluginChain) {
                if (config) {
                    // Make sure the extensionConfig exists
                    config.extensionConfig = config.extensionConfig || [];
                }
                if (!pluginChain && core) {
                    // Get the first plugin from the core
                    pluginChain = core.getProcessTelContext().getNext();
                }
                var nextPlugin = _nextPlugin;
                if (_nextPlugin && _nextPlugin[getPlugin]) {
                    // If it looks like a proxy/chain then get the plugin
                    nextPlugin = _nextPlugin[getPlugin]();
                }
                // Support legacy plugins where core was defined as a property
                _self.core = core;
                _rootCtx = new ProcessTelemetryContext(pluginChain, config, core, nextPlugin);
                _isinitialized = true;
            };
        }
        BaseTelemetryPlugin.prototype.initialize = function (config, core, extensions, pluginChain) {
            this._baseTelInit(config, core, extensions, pluginChain);
        };
        return BaseTelemetryPlugin;
    }());

    var _isFunction$4 = CoreUtils.isFunction;
    var processTelemetry = "processTelemetry";
    var priority = "priority";
    var setNextPlugin = "setNextPlugin";
    var isInitialized = "isInitialized";
    /**
     * Initialize the queue of plugins
     * @param plugins - The array of plugins to initialize and setting of the next plugin
     * @param config The current config for the instance
     * @param core THe current core instance
     * @param extensions The extensions
     */
    function initializePlugins(processContext, extensions) {
        // Set the next plugin and identified the uninitialized plugins
        var initPlugins = [];
        var lastPlugin = null;
        var proxy = processContext.getNext();
        while (proxy) {
            var thePlugin = proxy.getPlugin();
            if (thePlugin) {
                if (lastPlugin &&
                    _isFunction$4(lastPlugin[setNextPlugin]) &&
                    _isFunction$4(thePlugin[processTelemetry])) {
                    // Set this plugin as the next for the previous one
                    lastPlugin[setNextPlugin](thePlugin);
                }
                if (!_isFunction$4(thePlugin[isInitialized]) || !thePlugin[isInitialized]()) {
                    initPlugins.push(thePlugin);
                }
                lastPlugin = thePlugin;
                proxy = proxy.getNext();
            }
        }
        // Now initiatilize the plugins
        CoreUtils.arrForEach(initPlugins, function (thePlugin) {
            thePlugin.initialize(processContext.getCfg(), processContext.core(), extensions, processContext.getNext());
        });
    }
    function sortPlugins(plugins) {
        // Sort by priority
        return plugins.sort(function (extA, extB) {
            var result = 0;
            var bHasProcess = _isFunction$4(extB[processTelemetry]);
            if (_isFunction$4(extA[processTelemetry])) {
                result = bHasProcess ? extA[priority] - extB[priority] : 1;
            }
            else if (bHasProcess) {
                result = -1;
            }
            return result;
        });
        // sort complete    
    }

    var ChannelControllerPriority = 500;
    var ChannelValidationMessage = "Channel has invalid priority";
    var _objDefineAccessors = CoreUtils.objDefineAccessors;
    var ChannelController = /** @class */ (function (_super) {
        __extends(ChannelController, _super);
        function ChannelController() {
            var _this = _super.call(this) || this;
            _this.identifier = "ChannelControllerPlugin";
            _this.priority = ChannelControllerPriority; // in reserved range 100 to 200
            var _arrForEach = CoreUtils.arrForEach;
            var _channelQueue;
            dynamicProto(ChannelController, _this, function (_self, _base) {
                _self.setNextPlugin = function (next) {
                    // The Channel controller is last in pipeline
                };
                _self.processTelemetry = function (item, itemCtx) {
                    if (_channelQueue) {
                        _arrForEach(_channelQueue, function (queues) {
                            // pass on to first item in queue
                            if (queues.length > 0) {
                                // Copying the item context as we could have mutiple chains that are executing asynchronously
                                // and calling _getDefTelCtx as it's possible that the caller doesn't pass any context
                                var chainCtx = _this._getTelCtx(itemCtx).createNew(queues);
                                chainCtx.processNext(item);
                            }
                        });
                    }
                };
                _self.getChannelControls = function () {
                    return _channelQueue;
                };
                _self.initialize = function (config, core, extensions) {
                    if (_self.isInitialized()) {
                        // already initialized
                        return;
                    }
                    _base.initialize(config, core, extensions);
                    if (config.isCookieUseDisabled) {
                        CoreUtils.disableCookies();
                    }
                    _createChannelQueues((config || {}).channels, extensions);
                    // Initialize the Queues
                    _arrForEach(_channelQueue, function (queue) { return initializePlugins(new ProcessTelemetryContext(queue, config, core), extensions); });
                };
            });
            function _checkQueuePriority(queue) {
                _arrForEach(queue, function (queueItem) {
                    if (queueItem.priority < ChannelControllerPriority) {
                        throw Error(ChannelValidationMessage + queueItem.identifier);
                    }
                });
            }
            function _addChannelQueue(queue) {
                if (queue && queue.length > 0) {
                    queue = queue.sort(function (a, b) {
                        return a.priority - b.priority;
                    });
                    _checkQueuePriority(queue);
                    _channelQueue.push(queue);
                }
            }
            function _createChannelQueues(channels, extensions) {
                _channelQueue = [];
                if (channels) {
                    // Add and sort the configuration channel queues
                    _arrForEach(channels, function (queue) { return _addChannelQueue(queue); });
                }
                if (extensions) {
                    // Create a new channel queue for any extensions with a priority > the ChannelControllerPriority
                    var extensionQueue_1 = [];
                    _arrForEach(extensions, function (plugin) {
                        if (plugin.priority > ChannelControllerPriority) {
                            extensionQueue_1.push(plugin);
                        }
                    });
                    _addChannelQueue(extensionQueue_1);
                }
            }
            return _this;
        }
    // Removed Stub for ChannelController.prototype.getChannelControls.
    // Removed Stub for ChannelController.prototype.initialize.
        /**
         * Static constructor, attempt to create accessors
         */
        // tslint:disable-next-line
        ChannelController._staticInit = (function () {
            // Dynamically create get/set property accessors
            _objDefineAccessors(ChannelController.prototype, "ChannelControls", ChannelController.prototype.getChannelControls);
            _objDefineAccessors(ChannelController.prototype, "channelQueue", ChannelController.prototype.getChannelControls);
        })();
        return ChannelController;
    }(BaseTelemetryPlugin));

    var validationError = "Extensions must provide callback to initialize";
    var _arrForEach = CoreUtils.arrForEach;
    var _isNullOrUndefined$2 = CoreUtils.isNullOrUndefined;
    var strNotificationManager = "_notificationManager";
    var BaseCore = /** @class */ (function () {
        function BaseCore() {
            var _isInitialized = false;
            var _eventQueue;
            var _channelController;
            var _notificationManager;
            var _perfManager;
            dynamicProto(BaseCore, this, function (_self) {
                _self._extensions = new Array();
                _channelController = new ChannelController();
                _eventQueue = [];
                _self.isInitialized = function () { return _isInitialized; };
                _self.initialize = function (config, extensions, logger, notificationManager) {
                    // Make sure core is only initialized once
                    if (_self.isInitialized()) {
                        throw Error("Core should not be initialized more than once");
                    }
                    if (!config || _isNullOrUndefined$2(config.instrumentationKey)) {
                        throw Error("Please provide instrumentation key");
                    }
                    _notificationManager = notificationManager;
                    // For backward compatibility only
                    _self[strNotificationManager] = notificationManager;
                    _self.config = config || {};
                    config.extensions = _isNullOrUndefined$2(config.extensions) ? [] : config.extensions;
                    // add notification to the extensions in the config so other plugins can access it
                    var extConfig = config.extensionConfig = _isNullOrUndefined$2(config.extensionConfig) ? {} : config.extensionConfig;
                    extConfig.NotificationManager = notificationManager;
                    if (!logger) {
                        logger = CoreUtils.objCreate({
                            throwInternal: function (severity, msgId, msg, properties, isUserAct) {
                                if (isUserAct === void 0) { isUserAct = false; }
                            },
                            warnToConsole: function (message) { },
                            resetInternalMessageCount: function () { }
                        });
                    }
                    _self.logger = logger;
                    // Concat all available extensions
                    var allExtensions = [];
                    allExtensions.push.apply(allExtensions, extensions.concat(config.extensions));
                    allExtensions = sortPlugins(allExtensions);
                    var coreExtensions = [];
                    // Check if any two extensions have the same priority, then warn to console
                    // And extract the local extensions from the 
                    var extPriorities = {};
                    // Extension validation
                    _arrForEach(allExtensions, function (ext) {
                        if (_isNullOrUndefined$2(ext) || _isNullOrUndefined$2(ext.initialize)) {
                            throw Error(validationError);
                        }
                        var extPriority = ext.priority;
                        var identifier = ext.identifier;
                        if (ext && extPriority) {
                            if (!_isNullOrUndefined$2(extPriorities[extPriority])) {
                                logger.warnToConsole("Two extensions have same priority #" + extPriority + " - " + extPriorities[extPriority] + ", " + identifier);
                            }
                            else {
                                // set a value
                                extPriorities[extPriority] = identifier;
                            }
                        }
                        // Split extensions to core and channelController
                        if (!extPriority || extPriority < _channelController.priority) {
                            // Add to core extension that will be managed by BaseCore
                            coreExtensions.push(ext);
                        }
                    });
                    // Validation complete
                    // Add the channelController to the complete extension collection and
                    // to the end of the core extensions
                    allExtensions.push(_channelController);
                    coreExtensions.push(_channelController);
                    // Sort the complete set of extensions by priority
                    allExtensions = sortPlugins(allExtensions);
                    _self._extensions = allExtensions;
                    // initialize channel controller first, this will initialize all channel plugins
                    initializePlugins(new ProcessTelemetryContext([_channelController], config, _self), allExtensions);
                    initializePlugins(new ProcessTelemetryContext(coreExtensions, config, _self), allExtensions);
                    // Now reset the extensions to just those being managed by Basecore
                    _self._extensions = coreExtensions;
                    if (_self.getTransmissionControls().length === 0) {
                        throw new Error("No channels available");
                    }
                    _isInitialized = true;
                    _self.releaseQueue();
                };
                _self.getTransmissionControls = function () {
                    return _channelController.getChannelControls();
                };
                _self.track = function (telemetryItem) {
                    if (!telemetryItem.iKey) {
                        // setup default iKey if not passed in
                        telemetryItem.iKey = _self.config.instrumentationKey;
                    }
                    if (!telemetryItem.time) {
                        // add default timestamp if not passed in
                        telemetryItem.time = CoreUtils.toISOString(new Date());
                    }
                    if (_isNullOrUndefined$2(telemetryItem.ver)) {
                        // CommonSchema 4.0
                        telemetryItem.ver = "4.0";
                    }
                    if (_self.isInitialized()) {
                        // Process the telemetry plugin chain
                        _self.getProcessTelContext().processNext(telemetryItem);
                    }
                    else {
                        // Queue events until all extensions are initialized
                        _eventQueue.push(telemetryItem);
                    }
                };
                _self.getProcessTelContext = function () {
                    var extensions = _self._extensions;
                    var thePlugins = extensions;
                    // invoke any common telemetry processors before sending through pipeline
                    if (!extensions || extensions.length === 0) {
                        // Pass to Channel controller so data is sent to correct channel queues
                        thePlugins = [_channelController];
                    }
                    return new ProcessTelemetryContext(thePlugins, _self.config, _self);
                };
                _self.getNotifyMgr = function () {
                    if (!_notificationManager) {
                        // Create Dummy notification manager
                        _notificationManager = CoreUtils.objCreate({
                            addNotificationListener: function (listener) { },
                            removeNotificationListener: function (listener) { },
                            eventsSent: function (events) { },
                            eventsDiscarded: function (events, reason) { },
                            eventsSendRequest: function (sendReason, isAsync) { }
                        });
                        // For backward compatibility only
                        _self[strNotificationManager] = _notificationManager;
                    }
                    return _notificationManager;
                };
                _self.getPerfMgr = function () {
                    if (!_perfManager) {
                        if (_self.config && _self.config.enablePerfMgr) {
                            _perfManager = new PerfManager(_self.getNotifyMgr());
                        }
                    }
                    return _perfManager;
                };
                _self.setPerfMgr = function (perfMgr) {
                    _perfManager = perfMgr;
                };
                _self.eventCnt = function () {
                    return _eventQueue.length;
                };
                _self.releaseQueue = function () {
                    if (_eventQueue.length > 0) {
                        _arrForEach(_eventQueue, function (event) {
                            _self.getProcessTelContext().processNext(event);
                        });
                        _eventQueue = [];
                    }
                };
            });
        }
    // Removed Stub for BaseCore.prototype.initialize.
    // Removed Stub for BaseCore.prototype.getTransmissionControls.
    // Removed Stub for BaseCore.prototype.track.
    // Removed Stub for BaseCore.prototype.getProcessTelContext.
    // Removed Stub for BaseCore.prototype.getNotifyMgr.
    // Removed Stub for BaseCore.prototype.getPerfMgr.
    // Removed Stub for BaseCore.prototype.setPerfMgr.
    // Removed Stub for BaseCore.prototype.eventCnt.
    // Removed Stub for BaseCore.prototype.releaseQueue.
        return BaseCore;
    }());

    /**
     * Class to manage sending notifications to all the listeners.
     */
    var NotificationManager = /** @class */ (function () {
        function NotificationManager(config) {
            this.listeners = [];
            var arrForEach = CoreUtils.arrForEach;
            var perfEvtsSendAll = !!(config || {}).perfEvtsSendAll;
            dynamicProto(NotificationManager, this, function (_self) {
                _self.addNotificationListener = function (listener) {
                    _self.listeners.push(listener);
                };
                /**
                 * Removes all instances of the listener.
                 * @param {INotificationListener} listener - AWTNotificationListener to remove.
                 */
                _self.removeNotificationListener = function (listener) {
                    var index = CoreUtils.arrIndexOf(_self.listeners, listener);
                    while (index > -1) {
                        _self.listeners.splice(index, 1);
                        index = CoreUtils.arrIndexOf(_self.listeners, listener);
                    }
                };
                /**
                 * Notification for events sent.
                 * @param {ITelemetryItem[]} events - The array of events that have been sent.
                 */
                _self.eventsSent = function (events) {
                    arrForEach(_self.listeners, function (listener) {
                        if (listener && listener.eventsSent) {
                            setTimeout(function () { return listener.eventsSent(events); }, 0);
                        }
                    });
                };
                /**
                 * Notification for events being discarded.
                 * @param {ITelemetryItem[]} events - The array of events that have been discarded by the SDK.
                 * @param {number} reason           - The reason for which the SDK discarded the events. The EventsDiscardedReason
                 * constant should be used to check the different values.
                 */
                _self.eventsDiscarded = function (events, reason) {
                    arrForEach(_self.listeners, function (listener) {
                        if (listener && listener.eventsDiscarded) {
                            setTimeout(function () { return listener.eventsDiscarded(events, reason); }, 0);
                        }
                    });
                };
                /**
                 * [Optional] A function called when the events have been requested to be sent to the sever.
                 * @param {number} sendReason - The reason why the event batch is being sent.
                 * @param {boolean} isAsync   - A flag which identifies whether the requests are being sent in an async or sync manner.
                 */
                _self.eventsSendRequest = function (sendReason, isAsync) {
                    arrForEach(_self.listeners, function (listener) {
                        if (listener && listener.eventsSendRequest) {
                            if (isAsync) {
                                setTimeout(function () { return listener.eventsSendRequest(sendReason, isAsync); }, 0);
                            }
                            else {
                                try {
                                    listener.eventsSendRequest(sendReason, isAsync);
                                }
                                catch (e) {
                                    // Catch errors to ensure we don't block sending the requests
                                }
                            }
                        }
                    });
                };
                _self.perfEvent = function (perfEvent) {
                    if (perfEvent) {
                        // Send all events or only parent events
                        if (perfEvtsSendAll || !perfEvent.isChildEvt()) {
                            arrForEach(_self.listeners, function (listener) {
                                if (listener && listener.perfEvent) {
                                    if (perfEvent.isAsync) {
                                        setTimeout(function () { return listener.perfEvent(perfEvent); }, 0);
                                    }
                                    else {
                                        try {
                                            listener.perfEvent(perfEvent);
                                        }
                                        catch (e) {
                                            // Catch errors to ensure we don't block sending the requests
                                        }
                                    }
                                }
                            });
                        }
                    }
                };
            });
        }
    // Removed Stub for NotificationManager.prototype.addNotificationListener.
    // Removed Stub for NotificationManager.prototype.removeNotificationListener.
    // Removed Stub for NotificationManager.prototype.eventsSent.
    // Removed Stub for NotificationManager.prototype.eventsDiscarded.
    // Removed Stub for NotificationManager.prototype.eventsSendRequest.
        return NotificationManager;
    }());

    var AppInsightsCore = /** @class */ (function (_super) {
        __extends(AppInsightsCore, _super);
        function AppInsightsCore() {
            var _this = _super.call(this) || this;
            dynamicProto(AppInsightsCore, _this, function (_self, _base) {
                _self.initialize = function (config, extensions, logger, notificationManager) {
                    _base.initialize(config, extensions, logger || new DiagnosticLogger(config), notificationManager || new NotificationManager(config));
                };
                _self.track = function (telemetryItem) {
                    doPerf(_self.getPerfMgr(), function () { return "AppInsightsCore:track"; }, function () {
                        if (telemetryItem === null) {
                            _notifyInvalidEvent(telemetryItem);
                            // throw error
                            throw Error("Invalid telemetry item");
                        }
                        // do basic validation before sending it through the pipeline
                        _validateTelemetryItem(telemetryItem);
                        _base.track(telemetryItem);
                    }, function () { return ({ item: telemetryItem }); }, !(telemetryItem.sync));
                };
                /**
                 * Adds a notification listener. The SDK calls methods on the listener when an appropriate notification is raised.
                 * The added plugins must raise notifications. If the plugins do not implement the notifications, then no methods will be
                 * called.
                 * @param {INotificationListener} listener - An INotificationListener object.
                 */
                _self.addNotificationListener = function (listener) {
                    var manager = _self.getNotifyMgr();
                    if (manager) {
                        manager.addNotificationListener(listener);
                    }
                };
                /**
                 * Removes all instances of the listener.
                 * @param {INotificationListener} listener - INotificationListener to remove.
                 */
                _self.removeNotificationListener = function (listener) {
                    var manager = _self.getNotifyMgr();
                    if (manager) {
                        manager.removeNotificationListener(listener);
                    }
                };
                /**
                 * Periodically check logger.queue for
                 */
                _self.pollInternalLogs = function (eventName) {
                    var interval = _self.config.diagnosticLogInterval;
                    if (!interval || !(interval > 0)) {
                        interval = 10000;
                    }
                    return setInterval(function () {
                        var queue = _self.logger ? _self.logger.queue : [];
                        CoreUtils.arrForEach(queue, function (logMessage) {
                            var item = {
                                name: eventName ? eventName : "InternalMessageId: " + logMessage.messageId,
                                iKey: _self.config.instrumentationKey,
                                time: CoreUtils.toISOString(new Date()),
                                baseType: _InternalLogMessage.dataType,
                                baseData: { message: logMessage.message }
                            };
                            _self.track(item);
                        });
                        queue.length = 0;
                    }, interval);
                };
                function _validateTelemetryItem(telemetryItem) {
                    if (CoreUtils.isNullOrUndefined(telemetryItem.name)) {
                        _notifyInvalidEvent(telemetryItem);
                        throw Error("telemetry name required");
                    }
                }
                function _notifyInvalidEvent(telemetryItem) {
                    var manager = _self.getNotifyMgr();
                    if (manager) {
                        manager.eventsDiscarded([telemetryItem], EventsDiscardedReason.InvalidEvent);
                    }
                }
            });
            return _this;
        }
    // Removed Stub for AppInsightsCore.prototype.initialize.
    // Removed Stub for AppInsightsCore.prototype.track.
    // Removed Stub for AppInsightsCore.prototype.addNotificationListener.
    // Removed Stub for AppInsightsCore.prototype.removeNotificationListener.
    // Removed Stub for AppInsightsCore.prototype.pollInternalLogs.
        return AppInsightsCore;
    }(BaseCore));

    var strShimFunction$2 = "function";
    var strShimObject$2 = "object";
    var strShimUndefined$2 = "undefined";
    var strShimPrototype$2 = "prototype";
    var strShimHasOwnProperty$2 = "hasOwnProperty";
    /**
     * Returns the current global scope object, for a normal web page this will be the current
     * window, for a Web Worker this will be current worker global scope via "self". The internal
     * implementation returns the first available instance object in the following order
     * - globalThis (New standard)
     * - self (Will return the current window instance for supported browsers)
     * - window (fallback for older browser implementations)
     * - global (NodeJS standard)
     * - <null> (When all else fails)
     * While the return type is a Window for the normal case, not all environments will support all
     * of the properties or functions.
     */
    function getGlobal$3() {
        if (typeof globalThis !== strShimUndefined$2 && globalThis) {
            return globalThis;
        }
        if (typeof self !== strShimUndefined$2 && self) {
            return self;
        }
        if (typeof window !== strShimUndefined$2 && window) {
            return window;
        }
        if (typeof global !== strShimUndefined$2 && global) {
            return global;
        }
        return null;
    }
    /**
     * Creates an object that has the specified prototype, and that optionally contains specified properties. This helper exists to avoid adding a polyfil
     * for older browsers that do not define Object.create eg. ES3 only, IE8 just in case any page checks for presence/absence of the prototype implementation.
     * Note: For consistency this will not use the Object.create implementation if it exists as this would cause a testing requirement to test with and without the implementations
     * @param obj Object to use as a prototype. May be null
     */
    function objCreateFn$2(obj) {
        var func = Object["create"];
        // Use build in Object.create
        if (func) {
            // Use Object create method if it exists
            return func(obj);
        }
        if (obj == null) {
            return {};
        }
        var type = typeof obj;
        if (type !== strShimObject$2 && type !== strShimFunction$2) {
            throw new TypeError('Object prototype may only be an Object:' + obj);
        }
        function tmpFunc() { }
        tmpFunc[strShimPrototype$2] = obj;
        return new tmpFunc();
    }
    function __assignFn$2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object[strShimPrototype$2][strShimHasOwnProperty$2].call(s, p)) {
                    t[p] = s[p];
                }
            }
        }
        return t;
    }
    // tslint:disable-next-line: only-arrow-functions
    var __extendStaticsFn$2 = function (d, b) {
        __extendStaticsFn$2 = Object["setPrototypeOf"] ||
            // tslint:disable-next-line: only-arrow-functions
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            // tslint:disable-next-line: only-arrow-functions
            function (d, b) {
                for (var p in b) {
                    if (b[strShimHasOwnProperty$2](p)) {
                        d[p] = b[p];
                    }
                }
            };
        return __extendStaticsFn$2(d, b);
    };
    function __extendsFn$2(d, b) {
        __extendStaticsFn$2(d, b);
        function __() { this.constructor = d; }
        // tslint:disable-next-line: ban-comma-operator
        d[strShimPrototype$2] = b === null ? objCreateFn$2(b) : (__[strShimPrototype$2] = b[strShimPrototype$2], new __());
    }
    var globalObj$2 = getGlobal$3() || {};
    // tslint:disable: only-arrow-functions
    (function (root, assignFn, extendsFn) {
        // Assign the globally scoped versions of the functions -- used when consuming individual ts files
        root.__assign = root.__assign || Object.assign || assignFn;
        root.__extends = root.__extends || extendsFn;
    })(globalObj$2, __assignFn$2, __extendsFn$2);
    // Assign local variables that will be used for embedded scenarios
    __assign = globalObj$2.__assign;
    __extends = globalObj$2.__extends;

    /**
     * Type of storage to differentiate between local storage and session storage
     */
    var StorageType;
    (function (StorageType) {
        StorageType[StorageType["LocalStorage"] = 0] = "LocalStorage";
        StorageType[StorageType["SessionStorage"] = 1] = "SessionStorage";
    })(StorageType || (StorageType = {}));
    /**
     * Enum is used in aiDataContract to describe how fields are serialized.
     * For instance: (Fieldtype.Required | FieldType.Array) will mark the field as required and indicate it's an array
     */
    var FieldType;
    (function (FieldType) {
        FieldType[FieldType["Default"] = 0] = "Default";
        FieldType[FieldType["Required"] = 1] = "Required";
        FieldType[FieldType["Array"] = 2] = "Array";
        FieldType[FieldType["Hidden"] = 4] = "Hidden";
    })(FieldType || (FieldType = {}));
    var DistributedTracingModes;
    (function (DistributedTracingModes) {
        /**
         * (Default) Send Application Insights correlation headers
         */
        DistributedTracingModes[DistributedTracingModes["AI"] = 0] = "AI";
        /**
         * Send both W3C Trace Context headers and back-compatibility Application Insights headers
         */
        DistributedTracingModes[DistributedTracingModes["AI_AND_W3C"] = 1] = "AI_AND_W3C";
        /**
         * Send W3C Trace Context headers
         */
        DistributedTracingModes[DistributedTracingModes["W3C"] = 2] = "W3C";
    })(DistributedTracingModes || (DistributedTracingModes = {}));

    var DataSanitizer = /** @class */ (function () {
        function DataSanitizer() {
        }
        DataSanitizer.sanitizeKeyAndAddUniqueness = function (logger, key, map) {
            var origLength = key.length;
            var field = DataSanitizer.sanitizeKey(logger, key);
            // validation truncated the length.  We need to add uniqueness
            if (field.length !== origLength) {
                var i = 0;
                var uniqueField = field;
                while (map[uniqueField] !== undefined) {
                    i++;
                    uniqueField = field.substring(0, DataSanitizer.MAX_NAME_LENGTH - 3) + DataSanitizer.padNumber(i);
                }
                field = uniqueField;
            }
            return field;
        };
        DataSanitizer.sanitizeKey = function (logger, name) {
            var nameTrunc;
            if (name) {
                // Remove any leading or trailing whitepace
                name = DataSanitizer.trim(name.toString());
                // truncate the string to 150 chars
                if (name.length > DataSanitizer.MAX_NAME_LENGTH) {
                    nameTrunc = name.substring(0, DataSanitizer.MAX_NAME_LENGTH);
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.NameTooLong, "name is too long.  It has been truncated to " + DataSanitizer.MAX_NAME_LENGTH + " characters.", { name: name }, true);
                }
            }
            return nameTrunc || name;
        };
        DataSanitizer.sanitizeString = function (logger, value, maxLength) {
            if (maxLength === void 0) { maxLength = DataSanitizer.MAX_STRING_LENGTH; }
            var valueTrunc;
            if (value) {
                maxLength = maxLength ? maxLength : DataSanitizer.MAX_STRING_LENGTH; // in case default parameters dont work
                value = DataSanitizer.trim(value);
                if (value.toString().length > maxLength) {
                    valueTrunc = value.toString().substring(0, maxLength);
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.StringValueTooLong, "string value is too long. It has been truncated to " + maxLength + " characters.", { value: value }, true);
                }
            }
            return valueTrunc || value;
        };
        DataSanitizer.sanitizeUrl = function (logger, url) {
            return DataSanitizer.sanitizeInput(logger, url, DataSanitizer.MAX_URL_LENGTH, _InternalMessageId.UrlTooLong);
        };
        DataSanitizer.sanitizeMessage = function (logger, message) {
            var messageTrunc;
            if (message) {
                if (message.length > DataSanitizer.MAX_MESSAGE_LENGTH) {
                    messageTrunc = message.substring(0, DataSanitizer.MAX_MESSAGE_LENGTH);
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.MessageTruncated, "message is too long, it has been truncated to " + DataSanitizer.MAX_MESSAGE_LENGTH + " characters.", { message: message }, true);
                }
            }
            return messageTrunc || message;
        };
        DataSanitizer.sanitizeException = function (logger, exception) {
            var exceptionTrunc;
            if (exception) {
                if (exception.length > DataSanitizer.MAX_EXCEPTION_LENGTH) {
                    exceptionTrunc = exception.substring(0, DataSanitizer.MAX_EXCEPTION_LENGTH);
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.ExceptionTruncated, "exception is too long, it has been truncated to " + DataSanitizer.MAX_EXCEPTION_LENGTH + " characters.", { exception: exception }, true);
                }
            }
            return exceptionTrunc || exception;
        };
        DataSanitizer.sanitizeProperties = function (logger, properties) {
            if (properties) {
                var tempProps = {};
                for (var prop in properties) {
                    var value = properties[prop];
                    if (CoreUtils.isObject(value) && hasJSON()) {
                        // Stringify any part C properties
                        try {
                            value = getJSON().stringify(value);
                        }
                        catch (e) {
                            logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.CannotSerializeObjectNonSerializable, "custom property is not valid", { exception: e }, true);
                        }
                    }
                    value = DataSanitizer.sanitizeString(logger, value, DataSanitizer.MAX_PROPERTY_LENGTH);
                    prop = DataSanitizer.sanitizeKeyAndAddUniqueness(logger, prop, tempProps);
                    tempProps[prop] = value;
                }
                properties = tempProps;
            }
            return properties;
        };
        DataSanitizer.sanitizeMeasurements = function (logger, measurements) {
            if (measurements) {
                var tempMeasurements = {};
                for (var measure in measurements) {
                    var value = measurements[measure];
                    measure = DataSanitizer.sanitizeKeyAndAddUniqueness(logger, measure, tempMeasurements);
                    tempMeasurements[measure] = value;
                }
                measurements = tempMeasurements;
            }
            return measurements;
        };
        DataSanitizer.sanitizeId = function (logger, id) {
            return id ? DataSanitizer.sanitizeInput(logger, id, DataSanitizer.MAX_ID_LENGTH, _InternalMessageId.IdTooLong).toString() : id;
        };
        DataSanitizer.sanitizeInput = function (logger, input, maxLength, _msgId) {
            var inputTrunc;
            if (input) {
                input = DataSanitizer.trim(input);
                if (input.length > maxLength) {
                    inputTrunc = input.substring(0, maxLength);
                    logger.throwInternal(LoggingSeverity.WARNING, _msgId, "input is too long, it has been truncated to " + maxLength + " characters.", { data: input }, true);
                }
            }
            return inputTrunc || input;
        };
        DataSanitizer.padNumber = function (num) {
            var s = "00" + num;
            return s.substr(s.length - 3);
        };
        /**
         * helper method to trim strings (IE8 does not implement String.prototype.trim)
         */
        DataSanitizer.trim = function (str) {
            if (!CoreUtils.isString(str)) {
                return str;
            }
            return str.replace(/^\s+|\s+$/g, "");
        };
        /**
         * Max length allowed for custom names.
         */
        DataSanitizer.MAX_NAME_LENGTH = 150;
        /**
         * Max length allowed for Id field in page views.
         */
        DataSanitizer.MAX_ID_LENGTH = 128;
        /**
         * Max length allowed for custom values.
         */
        DataSanitizer.MAX_PROPERTY_LENGTH = 8192;
        /**
         * Max length allowed for names
         */
        DataSanitizer.MAX_STRING_LENGTH = 1024;
        /**
         * Max length allowed for url.
         */
        DataSanitizer.MAX_URL_LENGTH = 2048;
        /**
         * Max length allowed for messages.
         */
        DataSanitizer.MAX_MESSAGE_LENGTH = 32768;
        /**
         * Max length allowed for exceptions.
         */
        DataSanitizer.MAX_EXCEPTION_LENGTH = 32768;
        return DataSanitizer;
    }());

    var _navigator = getNavigator();
    var _isString = CoreUtils.isString;
    var _uaDisallowsSameSiteNone = null;
    function _endsWith(value, search) {
        var len = value.length;
        var start = len - search.length;
        return value.substring(start >= 0 ? start : 0, len) === search;
    }
    var Util = /** @class */ (function () {
        function Util() {
        }
        Util.createDomEvent = function (eventName) {
            var event = null;
            if (CoreUtils.isFunction(Event)) {
                event = new Event(eventName);
            }
            else {
                var doc = getDocument();
                if (doc && doc.createEvent) {
                    event = doc.createEvent("Event");
                    event.initEvent(eventName, true, true);
                }
            }
            return event;
        };
        /*
         * Force the SDK not to use local and session storage
        */
        Util.disableStorage = function () {
            Util._canUseLocalStorage = false;
            Util._canUseSessionStorage = false;
        };
        /**
         * Gets the localStorage object if available
         * @return {Storage} - Returns the storage object if available else returns null
         */
        Util._getLocalStorageObject = function () {
            if (Util.canUseLocalStorage()) {
                return Util._getVerifiedStorageObject(StorageType.LocalStorage);
            }
            return null;
        };
        /**
         * Tests storage object (localStorage or sessionStorage) to verify that it is usable
         * More details here: https://mathiasbynens.be/notes/localstorage-pattern
         * @param storageType Type of storage
         * @return {Storage} Returns storage object verified that it is usable
         */
        Util._getVerifiedStorageObject = function (storageType) {
            var storage = null;
            var fail;
            var uid;
            try {
                if (CoreUtils.isNullOrUndefined(getGlobal$2())) {
                    return null;
                }
                uid = new Date;
                storage = storageType === StorageType.LocalStorage ? getGlobalInst("localStorage") : getGlobalInst("sessionStorage");
                storage.setItem(uid.toString(), uid.toString());
                fail = storage.getItem(uid.toString()) !== uid.toString();
                storage.removeItem(uid.toString());
                if (fail) {
                    storage = null;
                }
            }
            catch (exception) {
                storage = null;
            }
            return storage;
        };
        /**
         *  Checks if endpoint URL is application insights internal injestion service URL.
         *
         *  @param endpointUrl Endpoint URL to check.
         *  @returns {boolean} True if if endpoint URL is application insights internal injestion service URL.
         */
        Util.isInternalApplicationInsightsEndpoint = function (endpointUrl) {
            return Util._internalEndpoints.indexOf(endpointUrl.toLowerCase()) !== -1;
        };
        /**
         *  Check if the browser supports local storage.
         *
         *  @returns {boolean} True if local storage is supported.
         */
        Util.canUseLocalStorage = function () {
            if (Util._canUseLocalStorage === undefined) {
                Util._canUseLocalStorage = !!Util._getVerifiedStorageObject(StorageType.LocalStorage);
            }
            return Util._canUseLocalStorage;
        };
        /**
         *  Get an object from the browser's local storage
         *
         *  @param {string} name - the name of the object to get from storage
         *  @returns {string} The contents of the storage object with the given name. Null if storage is not supported.
         */
        Util.getStorage = function (logger, name) {
            var storage = Util._getLocalStorageObject();
            if (storage !== null) {
                try {
                    return storage.getItem(name);
                }
                catch (e) {
                    Util._canUseLocalStorage = false;
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.BrowserCannotReadLocalStorage, "Browser failed read of local storage. " + Util.getExceptionName(e), { exception: Util.dump(e) });
                }
            }
            return null;
        };
        /**
         *  Set the contents of an object in the browser's local storage
         *
         *  @param {string} name - the name of the object to set in storage
         *  @param {string} data - the contents of the object to set in storage
         *  @returns {boolean} True if the storage object could be written.
         */
        Util.setStorage = function (logger, name, data) {
            var storage = Util._getLocalStorageObject();
            if (storage !== null) {
                try {
                    storage.setItem(name, data);
                    return true;
                }
                catch (e) {
                    Util._canUseLocalStorage = false;
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.BrowserCannotWriteLocalStorage, "Browser failed write to local storage. " + Util.getExceptionName(e), { exception: Util.dump(e) });
                }
            }
            return false;
        };
        /**
         *  Remove an object from the browser's local storage
         *
         *  @param {string} name - the name of the object to remove from storage
         *  @returns {boolean} True if the storage object could be removed.
         */
        Util.removeStorage = function (logger, name) {
            var storage = Util._getLocalStorageObject();
            if (storage !== null) {
                try {
                    storage.removeItem(name);
                    return true;
                }
                catch (e) {
                    Util._canUseLocalStorage = false;
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.BrowserFailedRemovalFromLocalStorage, "Browser failed removal of local storage item. " + Util.getExceptionName(e), { exception: Util.dump(e) });
                }
            }
            return false;
        };
        /**
         * Gets the sessionStorage object if available
         * @return {Storage} - Returns the storage object if available else returns null
         */
        Util._getSessionStorageObject = function () {
            if (Util.canUseSessionStorage()) {
                return Util._getVerifiedStorageObject(StorageType.SessionStorage);
            }
            return null;
        };
        /**
         *  Check if the browser supports session storage.
         *
         *  @returns {boolean} True if session storage is supported.
         */
        Util.canUseSessionStorage = function () {
            if (Util._canUseSessionStorage === undefined) {
                Util._canUseSessionStorage = !!Util._getVerifiedStorageObject(StorageType.SessionStorage);
            }
            return Util._canUseSessionStorage;
        };
        /**
         *  Gets the list of session storage keys
         *
         *  @returns {string[]} List of session storage keys
         */
        Util.getSessionStorageKeys = function () {
            var keys = [];
            if (Util.canUseSessionStorage()) {
                for (var key in getGlobalInst("sessionStorage")) {
                    keys.push(key);
                }
            }
            return keys;
        };
        /**
         *  Get an object from the browser's session storage
         *
         *  @param {string} name - the name of the object to get from storage
         *  @returns {string} The contents of the storage object with the given name. Null if storage is not supported.
         */
        Util.getSessionStorage = function (logger, name) {
            var storage = Util._getSessionStorageObject();
            if (storage !== null) {
                try {
                    return storage.getItem(name);
                }
                catch (e) {
                    Util._canUseSessionStorage = false;
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.BrowserCannotReadSessionStorage, "Browser failed read of session storage. " + Util.getExceptionName(e), { exception: Util.dump(e) });
                }
            }
            return null;
        };
        /**
         *  Set the contents of an object in the browser's session storage
         *
         *  @param {string} name - the name of the object to set in storage
         *  @param {string} data - the contents of the object to set in storage
         *  @returns {boolean} True if the storage object could be written.
         */
        Util.setSessionStorage = function (logger, name, data) {
            var storage = Util._getSessionStorageObject();
            if (storage !== null) {
                try {
                    storage.setItem(name, data);
                    return true;
                }
                catch (e) {
                    Util._canUseSessionStorage = false;
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.BrowserCannotWriteSessionStorage, "Browser failed write to session storage. " + Util.getExceptionName(e), { exception: Util.dump(e) });
                }
            }
            return false;
        };
        /**
         *  Remove an object from the browser's session storage
         *
         *  @param {string} name - the name of the object to remove from storage
         *  @returns {boolean} True if the storage object could be removed.
         */
        Util.removeSessionStorage = function (logger, name) {
            var storage = Util._getSessionStorageObject();
            if (storage !== null) {
                try {
                    storage.removeItem(name);
                    return true;
                }
                catch (e) {
                    Util._canUseSessionStorage = false;
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.BrowserFailedRemovalFromSessionStorage, "Browser failed removal of session storage item. " + Util.getExceptionName(e), { exception: Util.dump(e) });
                }
            }
            return false;
        };
        /*
         * Force the SDK not to store and read any data from cookies
         */
        Util.disableCookies = function () {
            CoreUtils.disableCookies();
        };
        /*
         * helper method to tell if document.cookie object is available
         */
        Util.canUseCookies = function (logger) {
            if (CoreUtils._canUseCookies === undefined) {
                CoreUtils._canUseCookies = false;
                try {
                    CoreUtils._canUseCookies = Util.document.cookie !== undefined;
                }
                catch (e) {
                    logger.throwInternal(LoggingSeverity.WARNING, _InternalMessageId.CannotAccessCookie, "Cannot access document.cookie - " + Util.getExceptionName(e), { exception: Util.dump(e) });
                }
            }
            return CoreUtils._canUseCookies;
        };
        Util.disallowsSameSiteNone = function (userAgent) {
            if (!_isString(userAgent)) {
                return false;
            }
            // Cover all iOS based browsers here. This includes:
            // - Safari on iOS 12 for iPhone, iPod Touch, iPad
            // - WkWebview on iOS 12 for iPhone, iPod Touch, iPad
            // - Chrome on iOS 12 for iPhone, iPod Touch, iPad
            // All of which are broken by SameSite=None, because they use the iOS networking stack
            if (userAgent.indexOf("CPU iPhone OS 12") !== -1 || userAgent.indexOf("iPad; CPU OS 12") !== -1) {
                return true;
            }
            // Cover Mac OS X based browsers that use the Mac OS networking stack. This includes:
            // - Safari on Mac OS X
            // This does not include:
            // - Internal browser on Mac OS X
            // - Chrome on Mac OS X
            // - Chromium on Mac OS X
            // Because they do not use the Mac OS networking stack.
            if (userAgent.indexOf("Macintosh; Intel Mac OS X 10_14") !== -1 && userAgent.indexOf("Version/") !== -1 && userAgent.indexOf("Safari") !== -1) {
                return true;
            }
            // Cover Mac OS X internal browsers that use the Mac OS networking stack. This includes:
            // - Internal browser on Mac OS X
            // This does not include:
            // - Safari on Mac OS X
            // - Chrome on Mac OS X
            // - Chromium on Mac OS X
            // Because they do not use the Mac OS networking stack.
            if (userAgent.indexOf("Macintosh; Intel Mac OS X 10_14") !== -1 && _endsWith(userAgent, "AppleWebKit/605.1.15 (KHTML, like Gecko)")) {
                return true;
            }
            // Cover Chrome 50-69, because some versions are broken by SameSite=None, and none in this range require it.
            // Note: this covers some pre-Chromium Edge versions, but pre-Chromim Edge does not require SameSite=None, so this is fine.
            // Note: this regex applies to Windows, Mac OS X, and Linux, deliberately.
            if (userAgent.indexOf("Chrome/5") !== -1 || userAgent.indexOf("Chrome/6") !== -1) {
                return true;
            }
            // Unreal Engine runs Chromium 59, but does not advertise as Chrome until 4.23. Treat versions of Unreal
            // that don't specify their Chrome version as lacking support for SameSite=None.
            if (userAgent.indexOf("UnrealEngine") !== -1 && userAgent.indexOf("Chrome") === -1) {
                return true;
            }
            // UCBrowser < 12.13.2 ignores Set-Cookie headers with SameSite=None
            // NB: this rule isn't complete - you need regex to make a complete rule.
            // See: https://www.chromium.org/updates/same-site/incompatible-clients
            if (userAgent.indexOf("UCBrowser/12") !== -1 || userAgent.indexOf("UCBrowser/11") !== -1) {
                return true;
            }
            return false;
        };
        /**
         * helper method to set userId and sessionId cookie
         */
        Util.setCookie = function (logger, name, value, domain) {
            if (Util.canUseCookies(logger)) {
                var domainAttrib = "";
                var secureAttrib = "";
                if (domain) {
                    domainAttrib = ";domain=" + domain;
                }
                var location_1 = getLocation();
                if (location_1 && location_1.protocol === "https:") {
                    secureAttrib = ";secure";
                    if (_uaDisallowsSameSiteNone === null) {
                        _uaDisallowsSameSiteNone = Util.disallowsSameSiteNone((getNavigator() || {}).userAgent);
                    }
                    if (!_uaDisallowsSameSiteNone) {
                        value = value + ";SameSite=None"; // SameSite can only be set on secure pages
                    }
                }
                Util.document.cookie = name + "=" + value + domainAttrib + ";path=/" + secureAttrib;
            }
        };
        Util.stringToBoolOrDefault = function (str, defaultValue) {
            if (defaultValue === void 0) { defaultValue = false; }
            if (str === undefined || str === null) {
                return defaultValue;
            }
            return str.toString().toLowerCase() === "true";
        };
        /**
         * helper method to access userId and sessionId cookie
         */
        Util.getCookie = function (logger, name) {
            if (!Util.canUseCookies(logger)) {
                return;
            }
            var value = "";
            if (name && name.length) {
                var cookieName = name + "=";
                var cookies = Util.document.cookie.split(";");
                for (var i = 0; i < cookies.length; i++) {
                    var cookie = cookies[i];
                    cookie = Util.trim(cookie);
                    if (cookie && cookie.indexOf(cookieName) === 0) {
                        value = cookie.substring(cookieName.length, cookies[i].length);
                        break;
                    }
                }
            }
            return value;
        };
        /**
         * Deletes a cookie by setting it's expiration time in the past.
         * @param name - The name of the cookie to delete.
         */
        Util.deleteCookie = function (logger, name) {
            if (Util.canUseCookies(logger)) {
                // Setting the expiration date in the past immediately removes the cookie
                Util.document.cookie = name + "=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
            }
        };
        /**
         * generate random id string
         */
        Util.newId = function () {
            var base64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
            var result = "";
            // tslint:disable-next-line:insecure-random
            var random = Math.random() * 1073741824; // 5 symbols in base64, almost maxint
            while (random > 0) {
                var char = base64chars.charAt(random % 64);
                result += char;
                random = Math.floor(random / 64);
            }
            return result;
        };
        /**
         * generate a random 32bit number (-0x80000000..0x7FFFFFFF).
         */
        Util.random32 = function () {
            return (0x100000000 * Math.random()) | 0;
        };
        /**
         * generate W3C trace id
         */
        Util.generateW3CId = function () {
            var hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
            // rfc4122 version 4 UUID without dashes and with lowercase letters
            var oct = "", tmp;
            for (var a = 0; a < 4; a++) {
                tmp = Util.random32();
                oct +=
                    hexValues[tmp & 0xF] +
                        hexValues[tmp >> 4 & 0xF] +
                        hexValues[tmp >> 8 & 0xF] +
                        hexValues[tmp >> 12 & 0xF] +
                        hexValues[tmp >> 16 & 0xF] +
                        hexValues[tmp >> 20 & 0xF] +
                        hexValues[tmp >> 24 & 0xF] +
                        hexValues[tmp >> 28 & 0xF];
            }
            // "Set the two most significant bits (bits 6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively"
            var clockSequenceHi = hexValues[8 + (Math.random() * 4) | 0];
            return oct.substr(0, 8) + oct.substr(9, 4) + "4" + oct.substr(13, 3) + clockSequenceHi + oct.substr(16, 3) + oct.substr(19, 12);
        };
        /**
         * Gets IE version returning the document emulation mode if we are running on IE, or null otherwise
         */
        Util.getIEVersion = function (userAgentStr) {
            if (userAgentStr === void 0) { userAgentStr = null; }
            var myNav = userAgentStr ? userAgentStr.toLowerCase() : (_navigator ? (_navigator.userAgent || "").toLowerCase() : "");
            if (myNav.indexOf("msie") !== -1) {
                return parseInt(myNav.split("msie")[1]);
            }
            else if (myNav.indexOf("trident/")) {
                var tridentVer = parseInt(myNav.split("trident/")[1]);
                if (tridentVer) {
                    return tridentVer + 4;
                }
            }
            return null;
        };
        /**
         * Convert ms to c# time span format
         */
        Util.msToTimeSpan = function (totalms) {
            if (isNaN(totalms) || totalms < 0) {
                totalms = 0;
            }
            totalms = Math.round(totalms);
            var ms = "" + totalms % 1000;
            var sec = "" + Math.floor(totalms / 1000) % 60;
            var min = "" + Math.floor(totalms / (1000 * 60)) % 60;
            var hour = "" + Math.floor(totalms / (1000 * 60 * 60)) % 24;
            var days = Math.floor(totalms / (1000 * 60 * 60 * 24));
            ms = ms.length === 1 ? "00" + ms : ms.length === 2 ? "0" + ms : ms;
            sec = sec.length < 2 ? "0" + sec : sec;
            min = min.length < 2 ? "0" + min : min;
            hour = hour.length < 2 ? "0" + hour : hour;
            return (days > 0 ? days + "." : "") + hour + ":" + min + ":" + sec + "." + ms;
        };
        /**
         * Checks if error has no meaningful data inside. Ususally such errors are received by window.onerror when error
         * happens in a script from other domain (cross origin, CORS).
         */
        Util.isCrossOriginError = function (message, url, lineNumber, columnNumber, error) {
            return (message === "Script error." || message === "Script error") && !error;
        };
        /**
         * Returns string representation of an object suitable for diagnostics logging.
         */
        Util.dump = function (object) {
            var objectTypeDump = Object[strPrototype].toString.call(object);
            var propertyValueDump = "";
            if (objectTypeDump === "[object Error]") {
                propertyValueDump = "{ stack: '" + object.stack + "', message: '" + object.message + "', name: '" + object.name + "'";
            }
            else if (hasJSON()) {
                propertyValueDump = getJSON().stringify(object);
            }
            return objectTypeDump + propertyValueDump;
        };
        /**
         * Returns the name of object if it's an Error. Otherwise, returns empty string.
         */
        Util.getExceptionName = function (object) {
            var objectTypeDump = Object[strPrototype].toString.call(object);
            if (objectTypeDump === "[object Error]") {
                return object.name;
            }
            return "";
        };
        /**
         * Adds an event handler for the specified event to the window
         * @param eventName {string} - The name of the event
         * @param callback {any} - The callback function that needs to be executed for the given event
         * @return {boolean} - true if the handler was successfully added
         */
        Util.addEventHandler = function (eventName, callback) {
            return EventHelper.Attach(getWindow(), eventName, callback);
        };
        /**
         * Tells if a browser supports a Beacon API
         */
        Util.IsBeaconApiSupported = function () {
            return ('sendBeacon' in _navigator && _navigator.sendBeacon);
        };
        Util.getExtension = function (extensions, identifier) {
            var extension = null;
            var extIx = 0;
            while (!extension && extIx < extensions.length) {
                if (extensions[extIx] && extensions[extIx].identifier === identifier) {
                    extension = extensions[extIx];
                }
                extIx++;
            }
            return extension;
        };
        Util.document = getDocument() || {};
        Util._canUseLocalStorage = undefined;
        Util._canUseSessionStorage = undefined;
        // listing only non-geo specific locations
        Util._internalEndpoints = [
            "https://dc.services.visualstudio.com/v2/track",
            "https://breeze.aimon.applicationinsights.io/v2/track",
            "https://dc-int.services.visualstudio.com/v2/track"
        ];
        Util.NotSpecified = "not_specified";
        /**
         * helper method to trim strings (IE8 does not implement String.prototype.trim)
         */
        Util.trim = CoreUtils.strTrim;
        /**
         * Check if an object is of type Array
         */
        Util.isArray = CoreUtils.isArray;
        /**
         * Check if an object is of type Error
         */
        Util.isError = CoreUtils.isError;
        /**
         * Check if an object is of type Date
         */
        Util.isDate = CoreUtils.isDate;
        // Keeping this name for backward compatibility (for now)
        Util.toISOStringForIE8 = CoreUtils.toISOString;
        return Util;
    }());
    var UrlHelper = /** @class */ (function () {
        function UrlHelper() {
        }
        UrlHelper.parseUrl = function (url) {
            var anchorIdx = UrlHelper._htmlAnchorIdx;
            var anchorCache = UrlHelper._htmlAnchorElement;
            var tempAnchor = anchorCache[anchorIdx];
            if (!UrlHelper.document.createElement) {
                // Always create the temp instance if createElement is not available
                tempAnchor = { host: UrlHelper.parseHost(url, true) };
            }
            else if (!anchorCache[anchorIdx]) {
                // Create and cache the unattached anchor instance 
                tempAnchor = anchorCache[anchorIdx] = UrlHelper.document.createElement('a');
            }
            tempAnchor.href = url;
            // Move the cache index forward
            anchorIdx++;
            if (anchorIdx >= anchorCache.length) {
                anchorIdx = 0;
            }
            UrlHelper._htmlAnchorIdx = anchorIdx;
            return tempAnchor;
        };
        UrlHelper.getAbsoluteUrl = function (url) {
            var result;
            var a = UrlHelper.parseUrl(url);
            if (a) {
                result = a.href;
            }
            return result;
        };
        UrlHelper.getPathName = function (url) {
            var result;
            var a = UrlHelper.parseUrl(url);
            if (a) {
                result = a.pathname;
            }
            return result;
        };
        UrlHelper.getCompleteUrl = function (method, absoluteUrl) {
            if (method) {
                return method.toUpperCase() + " " + absoluteUrl;
            }
            else {
                return absoluteUrl;
            }
        };
        // Fallback method to grab host from url if document.createElement method is not available
        UrlHelper.parseHost = function (url, inclPort) {
            var fullHost = UrlHelper.parseFullHost(url, inclPort);
            if (fullHost) {
                var match = fullHost.match(/(www[0-9]?\.)?(.[^/:]+)(\:[\d]+)?/i);
                if (match != null && match.length > 3 && _isString(match[2]) && match[2].length > 0) {
                    return match[2] + (match[3] || "");
                }
            }
            return fullHost;
        };
        /**
         * Get the full host from the url, optionally including the port
         */
        UrlHelper.parseFullHost = function (url, inclPort) {
            var result = null;
            if (url) {
                var match = url.match(/(\w*):\/\/(.[^/:]+)(\:[\d]+)?/i);
                if (match != null && match.length > 2 && _isString(match[2]) && match[2].length > 0) {
                    result = match[2] || "";
                    if (inclPort && match.length > 2) {
                        var protocol = (match[1] || "").toLowerCase();
                        var port = match[3] || "";
                        // IE includes the standard port so pass it off if it's the same as the protocol
                        if (protocol === "http" && port === ":80") {
                            port = "";
                        }
                        else if (protocol === "https" && port === ":443") {
                            port = "";
                        }
                        result += port;
                    }
                }
            }
            return result;
        };
        UrlHelper.document = getDocument() || {};
        UrlHelper._htmlAnchorIdx = 0;
        // Use an array of temporary values as it's possible for multiple calls to parseUrl() will be called with different URLs
        // Using a cache size of 5 for now as it current depth usage is at least 2, so adding a minor buffer to handle future updates
        UrlHelper._htmlAnchorElement = [null, null, null, null, null];
        return UrlHelper;
    }());
    var AjaxHelper = /** @class */ (function () {
        function AjaxHelper() {
        }
        AjaxHelper.ParseDependencyPath = function (logger, absoluteUrl, method, commandName) {
            var target, name = commandName, data = commandName;
            if (absoluteUrl && absoluteUrl.length > 0) {
                var parsedUrl = UrlHelper.parseUrl(absoluteUrl);
                target = parsedUrl.host;
                if (!name) {
                    if (parsedUrl.pathname != null) {
                        var pathName = (parsedUrl.pathname.length === 0) ? "/" : parsedUrl.pathname;
                        if (pathName.charAt(0) !== '/') {
                            pathName = "/" + pathName;
                        }
                        data = parsedUrl.pathname;
                        name = DataSanitizer.sanitizeString(logger, method ? method + " " + pathName : pathName);
                    }
                    else {
                        name = DataSanitizer.sanitizeString(logger, absoluteUrl);
                    }
                }
            }
            else {
                target = commandName;
                name = commandName;
            }
            return {
                target: target,
                name: name,
                data: data
            };
        };
        return AjaxHelper;
    }());

    // THIS FILE WAS AUTOGENERATED
    /**
     * Data struct to contain only C section with custom fields.
     */
    var Base = /** @class */ (function () {
        function Base() {
        }
        return Base;
    }());

    /**
     * Data struct to contain both B and C sections.
     */
    var Data = /** @class */ (function (_super) {
        __extends(Data, _super);
        function Data() {
            return _super.call(this) || this;
        }
        return Data;
    }(Base));

    /**
     * System variables for a telemetry item.
     */
    var Envelope = /** @class */ (function () {
        function Envelope() {
            this.ver = 1;
            this.sampleRate = 100.0;
            this.tags = {};
        }
        return Envelope;
    }());

    var Envelope$1 = /** @class */ (function (_super) {
        __extends(Envelope$$1, _super);
        /**
         * Constructs a new instance of telemetry data.
         */
        function Envelope$$1(logger, data, name) {
            var _this = _super.call(this) || this;
            _this.name = DataSanitizer.sanitizeString(logger, name) || Util.NotSpecified;
            _this.data = data;
            _this.time = CoreUtils.toISOString(new Date());
            _this.aiDataContract = {
                time: FieldType.Required,
                iKey: FieldType.Required,
                name: FieldType.Required,
                sampleRate: function () {
                    return (_this.sampleRate === 100) ? FieldType.Hidden : FieldType.Required;
                },
                tags: FieldType.Required,
                data: FieldType.Required
            };
            return _this;
        }
        return Envelope$$1;
    }(Envelope));

    // THIS FILE WAS AUTOGENERATED
    /**
     * The abstract common base of all domains.
     */
    var Domain = /** @class */ (function () {
        function Domain() {
        }
        return Domain;
    }());

    /**
     * Instances of Event represent structured event records that can be grouped and searched by their properties. Event data item also creates a metric of event count by name.
     */
    var EventData = /** @class */ (function (_super) {
        __extends(EventData, _super);
        function EventData() {
            var _this = _super.call(this) || this;
            _this.ver = 2;
            _this.properties = {};
            _this.measurements = {};
            return _this;
        }
        return EventData;
    }(Domain));

    var Event$1 = /** @class */ (function (_super) {
        __extends(Event, _super);
        /**
         * Constructs a new instance of the EventTelemetry object
         */
        function Event(logger, name, properties, measurements) {
            var _this = _super.call(this) || this;
            _this.aiDataContract = {
                ver: FieldType.Required,
                name: FieldType.Required,
                properties: FieldType.Default,
                measurements: FieldType.Default
            };
            _this.name = DataSanitizer.sanitizeString(logger, name) || Util.NotSpecified;
            _this.properties = DataSanitizer.sanitizeProperties(logger, properties);
            _this.measurements = DataSanitizer.sanitizeMeasurements(logger, measurements);
            return _this;
        }
        Event.envelopeType = "Microsoft.ApplicationInsights.{0}.Event";
        Event.dataType = "EventData";
        return Event;
    }(EventData));

    // THIS FILE WAS AUTOGENERATED
    /**
     * Stack frame information.
     */
    var StackFrame = /** @class */ (function () {
        function StackFrame() {
        }
        return StackFrame;
    }());

    /**
     * An instance of Exception represents a handled or unhandled exception that occurred during execution of the monitored application.
     */
    var ExceptionData = /** @class */ (function (_super) {
        __extends(ExceptionData, _super);
        function ExceptionData() {
            var _this = _super.call(this) || this;
            _this.ver = 2;
            _this.exceptions = [];
            _this.properties = {};
            _this.measurements = {};
            return _this;
        }
        return ExceptionData;
    }(Domain));

    /**
     * Exception details of the exception in a chain.
     */
    var ExceptionDetails = /** @class */ (function () {
        function ExceptionDetails() {
            this.hasFullStack = true;
            this.parsedStack = [];
        }
        return ExceptionDetails;
    }());

    var strError = "error";
    function _isExceptionDetailsInternal(value) {
        return "hasFullStack" in value && "typeName" in value;
    }
    function _isExceptionInternal(value) {
        return ("ver" in value && "exceptions" in value && "properties" in value);
    }
    function _getErrorType(errorType) {
        // Gets the Error Type by passing the constructor (used to get the true type of native error object).
        var typeName = "";
        if (errorType) {
            typeName = errorType.typeName || errorType.name || "";
            if (!typeName) {
                try {
                    var funcNameRegex = /function (.{1,})\(/;
                    var results = (funcNameRegex).exec((errorType).constructor.toString());
                    typeName = (results && results.length > 1) ? results[1] : "";
                }
                catch (e) {
                    // Ignore
                }
            }
        }
        return typeName;
    }
    var Exception = /** @class */ (function (_super) {
        __extends(Exception, _super);
        /**
         * Constructs a new instance of the ExceptionTelemetry object
         */
        function Exception(logger, exception, properties, measurements, severityLevel, id) {
            var _this = _super.call(this) || this;
            _this.aiDataContract = {
                ver: FieldType.Required,
                exceptions: FieldType.Required,
                severityLevel: FieldType.Default,
                properties: FieldType.Default,
                measurements: FieldType.Default
            };
            if (!_isExceptionInternal(exception)) {
                _this.exceptions = [new _ExceptionDetails(logger, exception)];
                _this.properties = DataSanitizer.sanitizeProperties(logger, properties) || {};
                _this.measurements = DataSanitizer.sanitizeMeasurements(logger, measurements);
                if (severityLevel) {
                    _this.severityLevel = severityLevel;
                }
                if (id) {
                    _this.id = id;
                }
            }
            else {
                _this.exceptions = exception.exceptions;
                _this.properties = exception.properties;
                _this.measurements = exception.measurements;
                if (exception.severityLevel) {
                    _this.severityLevel = exception.severityLevel;
                }
                if (exception.id) {
                    _this.id = exception.id;
                }
                if (exception.problemGroup) {
                    _this.problemGroup = exception.problemGroup;
                }
                // bool/int types, use isNullOrUndefined
                _this.ver = 2; // TODO: handle the CS"4.0" ==> breeze 2 conversion in a better way
                if (!CoreUtils.isNullOrUndefined(exception.isManual)) {
                    _this.isManual = exception.isManual;
                }
            }
            return _this;
        }
        Exception.CreateFromInterface = function (logger, exception, properties, measurements) {
            var exceptions = exception.exceptions
                && CoreUtils.arrMap(exception.exceptions, function (ex) { return _ExceptionDetails.CreateFromInterface(logger, ex); });
            var exceptionData = new Exception(logger, __assign({}, exception, { exceptions: exceptions }), properties, measurements);
            return exceptionData;
        };
        Exception.prototype.toInterface = function () {
            var _a = this, exceptions = _a.exceptions, properties = _a.properties, measurements = _a.measurements, severityLevel = _a.severityLevel, ver = _a.ver, problemGroup = _a.problemGroup, id = _a.id, isManual = _a.isManual;
            var exceptionDetailsInterface = exceptions instanceof Array
                && CoreUtils.arrMap(exceptions, function (exception) { return exception.toInterface(); })
                || undefined;
            return {
                ver: "4.0",
                exceptions: exceptionDetailsInterface,
                severityLevel: severityLevel,
                properties: properties,
                measurements: measurements,
                problemGroup: problemGroup,
                id: id,
                isManual: isManual
            };
        };
        /**
         * Creates a simple exception with 1 stack frame. Useful for manual constracting of exception.
         */
        Exception.CreateSimpleException = function (message, typeName, assembly, fileName, details, line) {
            return {
                exceptions: [
                    {
                        hasFullStack: true,
                        message: message,
                        stack: details,
                        typeName: typeName
                    }
                ]
            };
        };
        Exception.envelopeType = "Microsoft.ApplicationInsights.{0}.Exception";
        Exception.dataType = "ExceptionData";
        return Exception;
    }(ExceptionData));
    var _ExceptionDetails = /** @class */ (function (_super) {
        __extends(_ExceptionDetails, _super);
        function _ExceptionDetails(logger, exception) {
            var _this = _super.call(this) || this;
            _this.aiDataContract = {
                id: FieldType.Default,
                outerId: FieldType.Default,
                typeName: FieldType.Required,
                message: FieldType.Required,
                hasFullStack: FieldType.Default,
                stack: FieldType.Default,
                parsedStack: FieldType.Array
            };
            if (!_isExceptionDetailsInternal(exception)) {
                var error = exception;
                if (!Util.isError(error)) {
                    error = error[strError] || error.evt || error;
                }
                _this.typeName = DataSanitizer.sanitizeString(logger, _getErrorType(error)) || Util.NotSpecified;
                _this.message = DataSanitizer.sanitizeMessage(logger, exception.message) || Util.NotSpecified;
                var stack = exception.stack;
                _this.parsedStack = _ExceptionDetails.parseStack(stack);
                _this.stack = DataSanitizer.sanitizeException(logger, stack);
                _this.hasFullStack = Util.isArray(_this.parsedStack) && _this.parsedStack.length > 0;
            }
            else {
                _this.typeName = exception.typeName;
                _this.message = exception.message;
                _this.stack = exception.stack;
                _this.parsedStack = exception.parsedStack;
                _this.hasFullStack = exception.hasFullStack;
            }
            return _this;
        }
        _ExceptionDetails.prototype.toInterface = function () {
            var parsedStack = this.parsedStack instanceof Array
                && CoreUtils.arrMap(this.parsedStack, function (frame) { return frame.toInterface(); });
            var exceptionDetailsInterface = {
                id: this.id,
                outerId: this.outerId,
                typeName: this.typeName,
                message: this.message,
                hasFullStack: this.hasFullStack,
                stack: this.stack,
                parsedStack: parsedStack || undefined
            };
            return exceptionDetailsInterface;
        };
        _ExceptionDetails.CreateFromInterface = function (logger, exception) {
            var parsedStack = (exception.parsedStack instanceof Array
                && CoreUtils.arrMap(exception.parsedStack, function (frame) { return _StackFrame.CreateFromInterface(frame); }))
                || exception.parsedStack;
            var exceptionDetails = new _ExceptionDetails(logger, __assign({}, exception, { parsedStack: parsedStack }));
            return exceptionDetails;
        };
        _ExceptionDetails.parseStack = function (stack) {
            var parsedStack;
            if (CoreUtils.isString(stack)) {
                var frames_1 = stack.split('\n');
                parsedStack = [];
                var level = 0;
                var totalSizeInBytes = 0;
                for (var i = 0; i <= frames_1.length; i++) {
                    var frame = frames_1[i];
                    if (_StackFrame.regex.test(frame)) {
                        var parsedFrame = new _StackFrame(frames_1[i], level++);
                        totalSizeInBytes += parsedFrame.sizeInBytes;
                        parsedStack.push(parsedFrame);
                    }
                }
                // DP Constraint - exception parsed stack must be < 32KB
                // remove frames from the middle to meet the threshold
                var exceptionParsedStackThreshold = 32 * 1024;
                if (totalSizeInBytes > exceptionParsedStackThreshold) {
                    var left = 0;
                    var right = parsedStack.length - 1;
                    var size = 0;
                    var acceptedLeft = left;
                    var acceptedRight = right;
                    while (left < right) {
                        // check size
                        var lSize = parsedStack[left].sizeInBytes;
                        var rSize = parsedStack[right].sizeInBytes;
                        size += lSize + rSize;
                        if (size > exceptionParsedStackThreshold) {
                            // remove extra frames from the middle
                            var howMany = acceptedRight - acceptedLeft + 1;
                            parsedStack.splice(acceptedLeft, howMany);
                            break;
                        }
                        // update pointers
                        acceptedLeft = left;
                        acceptedRight = right;
                        left++;
                        right--;
                    }
                }
            }
            return parsedStack;
        };
        return _ExceptionDetails;
    }(ExceptionDetails));
    var _StackFrame = /** @class */ (function (_super) {
        __extends(_StackFrame, _super);
        function _StackFrame(sourceFrame, level) {
            var _this = _super.call(this) || this;
            _this.sizeInBytes = 0;
            _this.aiDataContract = {
                level: FieldType.Required,
                method: FieldType.Required,
                assembly: FieldType.Default,
                fileName: FieldType.Default,
                line: FieldType.Default
            };
            // Not converting this to CoreUtils.isString() as typescript uses this logic to "understand" the different
            // types for the 2 different code paths
            if (typeof sourceFrame === "string") {
                var frame = sourceFrame;
                _this.level = level;
                _this.method = "<no_method>";
                _this.assembly = Util.trim(frame);
                _this.fileName = "";
                _this.line = 0;
                var matches = frame.match(_StackFrame.regex);
                if (matches && matches.length >= 5) {
                    _this.method = Util.trim(matches[2]) || _this.method;
                    _this.fileName = Util.trim(matches[4]);
                    _this.line = parseInt(matches[5]) || 0;
                }
            }
            else {
                _this.level = sourceFrame.level;
                _this.method = sourceFrame.method;
                _this.assembly = sourceFrame.assembly;
                _this.fileName = sourceFrame.fileName;
                _this.line = sourceFrame.line;
                _this.sizeInBytes = 0;
            }
            _this.sizeInBytes += _this.method.length;
            _this.sizeInBytes += _this.fileName.length;
            _this.sizeInBytes += _this.assembly.length;
            // todo: these might need to be removed depending on how the back-end settles on their size calculation
            _this.sizeInBytes += _StackFrame.baseSize;
            _this.sizeInBytes += _this.level.toString().length;
            _this.sizeInBytes += _this.line.toString().length;
            return _this;
        }
        _StackFrame.CreateFromInterface = function (frame) {
            return new _StackFrame(frame, null /* level is available in frame interface */);
        };
        _StackFrame.prototype.toInterface = function () {
            return {
                level: this.level,
                method: this.method,
                assembly: this.assembly,
                fileName: this.fileName,
                line: this.line
            };
        };
        // regex to match stack frames from ie/chrome/ff
        // methodName=$2, fileName=$4, lineNo=$5, column=$6
        _StackFrame.regex = /^([\s]+at)?(.*?)(\@|\s\(|\s)([^\(\@\n]+):([0-9]+):([0-9]+)(\)?)$/;
        _StackFrame.baseSize = 58; // '{"method":"","level":,"assembly":"","fileName":"","line":}'.length
        return _StackFrame;
    }(StackFrame));

    /**
     * An instance of the Metric item is a list of measurements (single data points) and/or aggregations.
     */
    var MetricData = /** @class */ (function (_super) {
        __extends(MetricData, _super);
        function MetricData() {
            var _this = _super.call(this) || this;
            _this.ver = 2;
            _this.metrics = [];
            _this.properties = {};
            _this.measurements = {};
            return _this;
        }
        return MetricData;
    }(Domain));

    // THIS FILE WAS AUTOGENERATED
    /**
     * Type of the metric data measurement.
     */
    var DataPointType;
    (function (DataPointType) {
        DataPointType[DataPointType["Measurement"] = 0] = "Measurement";
        DataPointType[DataPointType["Aggregation"] = 1] = "Aggregation";
    })(DataPointType || (DataPointType = {}));

    /**
     * Metric data single measurement.
     */
    var DataPoint = /** @class */ (function () {
        function DataPoint() {
            this.kind = DataPointType.Measurement;
        }
        return DataPoint;
    }());

    var DataPoint$1 = /** @class */ (function (_super) {
        __extends(DataPoint$$1, _super);
        function DataPoint$$1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * The data contract for serializing this object.
             */
            _this.aiDataContract = {
                name: FieldType.Required,
                kind: FieldType.Default,
                value: FieldType.Required,
                count: FieldType.Default,
                min: FieldType.Default,
                max: FieldType.Default,
                stdDev: FieldType.Default
            };
            return _this;
        }
        return DataPoint$$1;
    }(DataPoint));

    var Metric = /** @class */ (function (_super) {
        __extends(Metric, _super);
        /**
         * Constructs a new instance of the MetricTelemetry object
         */
        function Metric(logger, name, value, count, min, max, properties, measurements) {
            var _this = _super.call(this) || this;
            _this.aiDataContract = {
                ver: FieldType.Required,
                metrics: FieldType.Required,
                properties: FieldType.Default
            };
            var dataPoint = new DataPoint$1();
            dataPoint.count = count > 0 ? count : undefined;
            dataPoint.max = isNaN(max) || max === null ? undefined : max;
            dataPoint.min = isNaN(min) || min === null ? undefined : min;
            dataPoint.name = DataSanitizer.sanitizeString(logger, name) || Util.NotSpecified;
            dataPoint.value = value;
            _this.metrics = [dataPoint];
            _this.properties = DataSanitizer.sanitizeProperties(logger, properties);
            _this.measurements = DataSanitizer.sanitizeMeasurements(logger, measurements);
            return _this;
        }
        Metric.envelopeType = "Microsoft.ApplicationInsights.{0}.Metric";
        Metric.dataType = "MetricData";
        return Metric;
    }(MetricData));

    /**
     * An instance of PageView represents a generic action on a page like a button click. It is also the base type for PageView.
     */
    var PageViewData = /** @class */ (function (_super) {
        __extends(PageViewData, _super);
        function PageViewData() {
            var _this = _super.call(this) || this;
            _this.ver = 2;
            _this.properties = {};
            _this.measurements = {};
            return _this;
        }
        return PageViewData;
    }(EventData));

    var PageView = /** @class */ (function (_super) {
        __extends(PageView, _super);
        /**
         * Constructs a new instance of the PageEventTelemetry object
         */
        function PageView(logger, name, url, durationMs, properties, measurements, id) {
            var _this = _super.call(this) || this;
            _this.aiDataContract = {
                ver: FieldType.Required,
                name: FieldType.Default,
                url: FieldType.Default,
                duration: FieldType.Default,
                properties: FieldType.Default,
                measurements: FieldType.Default,
                id: FieldType.Default
            };
            _this.id = DataSanitizer.sanitizeId(logger, id);
            _this.url = DataSanitizer.sanitizeUrl(logger, url);
            _this.name = DataSanitizer.sanitizeString(logger, name) || Util.NotSpecified;
            if (!isNaN(durationMs)) {
                _this.duration = Util.msToTimeSpan(durationMs);
            }
            _this.properties = DataSanitizer.sanitizeProperties(logger, properties);
            _this.measurements = DataSanitizer.sanitizeMeasurements(logger, measurements);
            return _this;
        }
        PageView.envelopeType = "Microsoft.ApplicationInsights.{0}.Pageview";
        PageView.dataType = "PageviewData";
        return PageView;
    }(PageViewData));

    /**
     * An instance of Remote Dependency represents an interaction of the monitored component with a remote component/service like SQL or an HTTP endpoint.
     */
    var RemoteDependencyData = /** @class */ (function (_super) {
        __extends(RemoteDependencyData, _super);
        function RemoteDependencyData() {
            var _this = _super.call(this) || this;
            _this.ver = 2;
            _this.success = true;
            _this.properties = {};
            _this.measurements = {};
            return _this;
        }
        return RemoteDependencyData;
    }(Domain));

    var RemoteDependencyData$1 = /** @class */ (function (_super) {
        __extends(RemoteDependencyData$$1, _super);
        /**
         * Constructs a new instance of the RemoteDependencyData object
         */
        function RemoteDependencyData$$1(logger, id, absoluteUrl, commandName, value, success, resultCode, method, requestAPI, correlationContext, properties, measurements) {
            if (requestAPI === void 0) { requestAPI = "Ajax"; }
            var _this = _super.call(this) || this;
            _this.aiDataContract = {
                id: FieldType.Required,
                ver: FieldType.Required,
                name: FieldType.Default,
                resultCode: FieldType.Default,
                duration: FieldType.Default,
                success: FieldType.Default,
                data: FieldType.Default,
                target: FieldType.Default,
                type: FieldType.Default,
                properties: FieldType.Default,
                measurements: FieldType.Default,
                kind: FieldType.Default,
                value: FieldType.Default,
                count: FieldType.Default,
                min: FieldType.Default,
                max: FieldType.Default,
                stdDev: FieldType.Default,
                dependencyKind: FieldType.Default,
                dependencySource: FieldType.Default,
                commandName: FieldType.Default,
                dependencyTypeName: FieldType.Default
            };
            _this.id = id;
            _this.duration = Util.msToTimeSpan(value);
            _this.success = success;
            _this.resultCode = resultCode + "";
            _this.type = DataSanitizer.sanitizeString(logger, requestAPI);
            var dependencyFields = AjaxHelper.ParseDependencyPath(logger, absoluteUrl, method, commandName);
            _this.data = DataSanitizer.sanitizeUrl(logger, commandName) || dependencyFields.data; // get a value from hosturl if commandName not available
            _this.target = DataSanitizer.sanitizeString(logger, dependencyFields.target);
            if (correlationContext) {
                _this.target = _this.target + " | " + correlationContext;
            }
            _this.name = DataSanitizer.sanitizeString(logger, dependencyFields.name);
            _this.properties = DataSanitizer.sanitizeProperties(logger, properties);
            _this.measurements = DataSanitizer.sanitizeMeasurements(logger, measurements);
            return _this;
        }
        RemoteDependencyData$$1.envelopeType = "Microsoft.ApplicationInsights.{0}.RemoteDependency";
        RemoteDependencyData$$1.dataType = "RemoteDependencyData";
        return RemoteDependencyData$$1;
    }(RemoteDependencyData));

    /**
     * Instances of Message represent printf-like trace statements that are text-searched. Log4Net, NLog and other text-based log file entries are translated into intances of this type. The message does not have measurements.
     */
    var MessageData = /** @class */ (function (_super) {
        __extends(MessageData, _super);
        function MessageData() {
            var _this = _super.call(this) || this;
            _this.ver = 2;
            _this.properties = {};
            _this.measurements = {};
            return _this;
        }
        return MessageData;
    }(Domain));

    var Trace = /** @class */ (function (_super) {
        __extends(Trace, _super);
        /**
         * Constructs a new instance of the TraceTelemetry object
         */
        function Trace(logger, message, severityLevel, properties, measurements) {
            var _this = _super.call(this) || this;
            _this.aiDataContract = {
                ver: FieldType.Required,
                message: FieldType.Required,
                severityLevel: FieldType.Default,
                properties: FieldType.Default
            };
            message = message || Util.NotSpecified;
            _this.message = DataSanitizer.sanitizeMessage(logger, message);
            _this.properties = DataSanitizer.sanitizeProperties(logger, properties);
            _this.measurements = DataSanitizer.sanitizeMeasurements(logger, measurements);
            if (severityLevel) {
                _this.severityLevel = severityLevel;
            }
            return _this;
        }
        Trace.envelopeType = "Microsoft.ApplicationInsights.{0}.Message";
        Trace.dataType = "MessageData";
        return Trace;
    }(MessageData));

    /**
     * An instance of PageViewPerf represents: a page view with no performance data, a page view with performance data, or just the performance data of an earlier page request.
     */
    var PageViewPerfData = /** @class */ (function (_super) {
        __extends(PageViewPerfData, _super);
        function PageViewPerfData() {
            var _this = _super.call(this) || this;
            _this.ver = 2;
            _this.properties = {};
            _this.measurements = {};
            return _this;
        }
        return PageViewPerfData;
    }(PageViewData));

    var PageViewPerformance = /** @class */ (function (_super) {
        __extends(PageViewPerformance, _super);
        /**
         * Constructs a new instance of the PageEventTelemetry object
         */
        function PageViewPerformance(logger, name, url, unused, properties, measurements, cs4BaseData) {
            var _this = _super.call(this) || this;
            _this.aiDataContract = {
                ver: FieldType.Required,
                name: FieldType.Default,
                url: FieldType.Default,
                duration: FieldType.Default,
                perfTotal: FieldType.Default,
                networkConnect: FieldType.Default,
                sentRequest: FieldType.Default,
                receivedResponse: FieldType.Default,
                domProcessing: FieldType.Default,
                properties: FieldType.Default,
                measurements: FieldType.Default
            };
            _this.url = DataSanitizer.sanitizeUrl(logger, url);
            _this.name = DataSanitizer.sanitizeString(logger, name) || Util.NotSpecified;
            _this.properties = DataSanitizer.sanitizeProperties(logger, properties);
            _this.measurements = DataSanitizer.sanitizeMeasurements(logger, measurements);
            if (cs4BaseData) {
                _this.domProcessing = cs4BaseData.domProcessing;
                _this.duration = cs4BaseData.duration;
                _this.networkConnect = cs4BaseData.networkConnect;
                _this.perfTotal = cs4BaseData.perfTotal;
                _this.receivedResponse = cs4BaseData.receivedResponse;
                _this.sentRequest = cs4BaseData.sentRequest;
            }
            return _this;
        }
        PageViewPerformance.envelopeType = "Microsoft.ApplicationInsights.{0}.PageviewPerformance";
        PageViewPerformance.dataType = "PageviewPerformanceData";
        return PageViewPerformance;
    }(PageViewPerfData));

    var Data$1 = /** @class */ (function (_super) {
        __extends(Data$$1, _super);
        /**
         * Constructs a new instance of telemetry data.
         */
        function Data$$1(baseType, data) {
            var _this = _super.call(this) || this;
            /**
             * The data contract for serializing this object.
             */
            _this.aiDataContract = {
                baseType: FieldType.Required,
                baseData: FieldType.Required
            };
            _this.baseType = baseType;
            _this.baseData = data;
            return _this;
        }
        return Data$$1;
    }(Data));

    // THIS FILE WAS AUTOGENERATED
    /**
     * Defines the level of severity for the event.
     */
    var SeverityLevel;
    (function (SeverityLevel) {
        SeverityLevel[SeverityLevel["Verbose"] = 0] = "Verbose";
        SeverityLevel[SeverityLevel["Information"] = 1] = "Information";
        SeverityLevel[SeverityLevel["Warning"] = 2] = "Warning";
        SeverityLevel[SeverityLevel["Error"] = 3] = "Error";
        SeverityLevel[SeverityLevel["Critical"] = 4] = "Critical";
    })(SeverityLevel || (SeverityLevel = {}));

    /*!
     * Application Insights JavaScript SDK - Click Analytics, 2.5.9
     * Copyright (c) Microsoft and contributors. All rights reserved.
     */
    var Prototype$1 = 'prototype';
    var DEFAULT_DONOT_TRACK_TAG = 'ai-dnt';
    var DEFAULT_AI_BLOB_ATTRIBUTE_TAG = 'ai-blob';
    var DEFAULT_DATA_PREFIX = 'data-';
    var _ExtendedInternalMessageId = __assign({}, _InternalMessageId, { CannotParseAiBlobValue: 101, InvalidContentBlob: 102, TrackPageActionEventFailed: 103 });
    /**
     * Finds attributes in overrideConfig which are invalid or should be objects
     * and deletes them. useful in override config
     * @param overrideConfig - override config object
     * @param attributeNamesExpectedObjects - attributes that should be objects in override config object
     */
    function removeNonObjectsAndInvalidElements(overrideConfig, attributeNamesExpectedObjects) {
        removeInvalidElements(overrideConfig);
        for (var i in attributeNamesExpectedObjects) {
            if (attributeNamesExpectedObjects.hasOwnProperty(i)) {
                var objectName = attributeNamesExpectedObjects[i];
                if (typeof overrideConfig[objectName] === 'object') {
                    removeInvalidElements(overrideConfig[objectName]);
                }
                else {
                    delete overrideConfig[objectName];
                }
            }
        }
    }
    /**
     * Finds attributes in object which are invalid
     * and deletes them. useful in override config
     * @param object Input object
     */
    function removeInvalidElements(object) {
        /// Because the config object 'callback' contains only functions, 
        /// when it is stringified it returns the empty object. This explains
        /// the workaround regarding 'callback'
        for (var property in object) {
            if (!isValueAssigned(object[property]) ||
                (JSON.stringify(object[property]) === '{}' && (property !== 'callback'))) {
                delete object[property];
            }
        }
    }
    /**
     * Checks if value is assigned to the given param.
     * @param value - The token from which the tenant id is to be extracted.
     * @returns True/false denoting if value is assigned to the param.
     */
    function isValueAssigned(value) {
        /// <summary> takes a value and checks for undefined, null and empty string </summary>
        /// <param type="any"> value to be tested </param>
        /// <returns> true if value is null undefined or emptyString </returns>
        return !(CoreUtils.isNullOrUndefined(value) || value === '');
    }
    /**
     * Determines whether an event is a right click or not
     * @param evt - Mouse event
     * @returns true if the event is a right click
     */
    function isRightClick(evt) {
        if ('which' in evt) {
            return (evt.which === 3);
        }
        else if ('button' in evt) {
            return (evt.button === 2);
        }
    }
    /**
     * Determines whether an event is a left click or not
     * @param evt - Mouse event
     * @returns true if the event is a left click
     */
    function isLeftClick(evt) {
        if ('which' in evt) {
            return (evt.which === 1);
        }
        else if ('button' in evt) {
            return (evt.button === 1);
        }
    }
    /**
     * Determines whether an event is a middle click or not
     * @param evt - Mouse event
     * @returns true if the event is a middle click
     */
    function isMiddleClick(evt) {
        if ('which' in evt) {
            return (evt.which === 2);
        }
        else if ('button' in evt) {
            return (evt.button === 4);
        }
    }
    /**
     *  Determines whether an event is a keyboard enter or not
     * @param evt - Keyboard event
     * @returns true if the event is a keyboard enter
     */
    function isKeyboardEnter(evt) {
        if ('keyCode' in evt) {
            return (evt.keyCode === 13);
        }
    }
    /**
     *  Determines whether an event is a keyboard space or not
     * @param evt - Keyboard event
     * @returns true if the event is a space enter
     */
    function isKeyboardSpace(evt) {
        if ('keyCode' in evt) {
            return (evt.keyCode === 32);
        }
    }
    /**
     *  Determines whether the elemt have a DNT(Do Not Track) tag
     * @param element - DOM element
     * @param doNotTrackFieldName - DOM element
     * @returns true if the element must not be tarcked
     */
    function isElementDnt(element, doNotTrackFieldName) {
        var dntElement = findClosestByAttribute(element, doNotTrackFieldName);
        if (!isValueAssigned(dntElement)) {
            return false;
        }
        return true;
    }
    /**
     * Walks up DOM tree to find element with attribute
     * @param el - DOM element
     * @param attribute - Attribute name
     * @returns Dom element which contains attribute
     */
    function findClosestByAttribute(el, attribute) {
        return walkUpDomChainWithElementValidation(el, isAttributeInElement, attribute);
    }
    /**
     * checks if attribute is in element.
     * method checks for empty string, in case the attribute is set but no value is assigned to it
     * @param element - DOM element
     * @param attributeToLookFor - Attribute name
     * @returns true if attribute is in element, even if empty string
     */
    function isAttributeInElement(element, attributeToLookFor) {
        var value = element.getAttribute(attributeToLookFor);
        return isValueAssigned(value);
    }
    /**
     * Walks up DOM tree to find element which matches validationMethod
     * @param el - DOM element
     * @param validationMethod - DOM element validation method
     * @param validationMethodParam - DOM element validation method parameters
     * @returns Dom element which is an anchor
     */
    function walkUpDomChainWithElementValidation(el, validationMethod, validationMethodParam) {
        var element = el;
        if (element) {
            while (!validationMethod(element, validationMethodParam)) {
                element = element.parentNode;
                if (!element || !(element.getAttribute)) {
                    return null;
                }
            }
            return element;
        }
    }
    /**
     * Determine if DOM element is an anchor
     * @param element - DOM element
     * @returns Is element an anchor
     */
    function isElementAnAnchor(element) {
        return element.nodeName === 'A';
    }
    /**
     * Walks up DOM tree to find anchor element
     * @param element - DOM element
     * @returns Dom element which is an anchor
     */
    function findClosestAnchor(element) {
        /// <summary> Walks up DOM tree to find anchor element </summary>
        /// <param type='object'> DOM element </param>
        /// <returns> Dom element which is an anchor</returns>
        return walkUpDomChainWithElementValidation(element, isElementAnAnchor);
    }
    /**
     * Returns the specified field and also removes the property from the object if exists.
     * @param obj - Input object
     * @param fieldName - >Name of the field/property to be extracted
     * @returns Value of the specified tag
     */
    function extractFieldFromObject(obj, fieldName) {
        var fieldValue;
        if (obj && obj[fieldName]) {
            fieldValue = obj[fieldName];
            delete obj[fieldName];
        }
        return fieldValue;
    }
    /**
     *  Adds surrounding square brackets to the passed in text
     * @param str - Input string
     * @returns String with surrounding brackets
     */
    function bracketIt(str) {
        /// <summary>
        ///  Adds surrounding square brackets to the passed in text
        /// </summary>
        return '[' + str + ']';
    }
    /**
     * Pass in the objects to merge as arguments.
     * @param obj1 - object to merge.  Set this argument to 'true' for a deep extend.
     * @param obj2 - object to merge.
     * @param obj3 - object to merge.
     * @param obj4 - object to merge.
     * @param obj5 - object to merge.
     * @returns The extended object.
     */
    function extend(obj, obj2, obj3, obj4, obj5) {
        // Variables
        var extended = {};
        var deep = false;
        var i = 0;
        var length = arguments.length;
        var objProto = Object[Prototype$1];
        var theArgs = arguments;
        // Check if a deep merge
        if (objProto.toString.call(theArgs[0]) === '[object Boolean]') {
            deep = theArgs[0];
            i++;
        }
        // Merge the object into the extended object
        var merge = function (obj) {
            for (var prop in obj) {
                if (CoreUtils.hasOwnProperty(obj, prop)) {
                    // If deep merge and property is an object, merge properties
                    if (deep && objProto.toString.call(obj[prop]) === '[object Object]') {
                        extended[prop] = extend(true, extended[prop], obj[prop]);
                    }
                    else {
                        extended[prop] = obj[prop];
                    }
                }
            }
        };
        // Loop through each object and conduct a merge
        for (; i < length; i++) {
            var obj = theArgs[i];
            merge(obj);
        }
        return extended;
    }
    function validateContentNamePrefix(config, defaultDataPrefix) {
        return isValueAssigned(config.dataTags.customDataPrefix) && (config.dataTags.customDataPrefix.indexOf(defaultDataPrefix) === 0);
    }
    /**
     * Merge passed in configuration with default configuration
     * @param overrideConfig
     */
    function mergeConfig(overrideConfig) {
        var defaultConfig = {
            // General library settings
            autoCapture: true,
            callback: {
                pageActionPageTags: null
            },
            pageTags: {},
            // overrideValues to use instead of collecting automatically
            coreData: {
                referrerUri: hasDocument ? document.referrer : '',
                requestUri: '',
                pageName: '',
                pageType: ''
            },
            dataTags: {
                useDefaultContentName: false,
                aiBlobAttributeTag: DEFAULT_AI_BLOB_ATTRIBUTE_TAG,
                customDataPrefix: DEFAULT_DATA_PREFIX,
                captureAllMetaDataContent: false,
                donotTrackDataTag: DEFAULT_DONOT_TRACK_TAG
            },
            behaviorValidator: function (key) { return key || ""; },
            defaultRightClickBhvr: ""
        };
        var attributesThatAreObjectsInConfig = [];
        for (var attribute in defaultConfig) {
            if (typeof defaultConfig[attribute] === 'object') {
                attributesThatAreObjectsInConfig.push(attribute);
            }
        }
        if (overrideConfig) {
            // delete attributes that should be object and 
            // delete properties that are null, undefined, ''
            removeNonObjectsAndInvalidElements(overrideConfig, attributesThatAreObjectsInConfig);
            if (isValueAssigned(overrideConfig.dataTags)) {
                overrideConfig.dataTags.customDataPrefix = validateContentNamePrefix(overrideConfig, DEFAULT_DATA_PREFIX) ? overrideConfig.dataTags.customDataPrefix : DEFAULT_DATA_PREFIX;
            }
            return extend(true, defaultConfig, overrideConfig);
        }
    }
    function BehaviorMapValidator(map) {
        return function (key) { return map[key] || ""; };
    }
    function BehaviorValueValidator(behaviorArray) {
        return function (key) {
            var result;
            CoreUtils.arrForEach(behaviorArray, function (value) {
                if (value === key) {
                    result = value;
                    return -1;
                }
            });
            return result || "";
        };
    }
    function BehaviorEnumValidator(enumObj) {
        return function (key) { return enumObj[key] || ""; };
    }

    /*!
     * Application Insights JavaScript SDK - Click Analytics, 2.5.9
     * Copyright (c) Microsoft and contributors. All rights reserved.
     */
    var clickCaptureInputTypes = { BUTTON: true, CHECKBOX: true, RADIO: true, RESET: true, SUBMIT: true };
    /**
     * Get Image href of a given HTMLImageElement
     * @param element - An html image element
     * @returns Href value.
     */
    function getImageHref(element) {
        var temp = element;
        if (temp) {
            var parent = findClosestAnchor(temp);
            if (parent.length === 1) {
                var firstParent = parent[0];
                if (firstParent.href) {
                    return firstParent.href;
                }
                else if (firstParent.src) {
                    return (firstParent.src);
                }
            }
        }
        return '';
    }
    /**
     * Get click target
     * @returns Click target URI
     */
    function getClickTarget(element) {
        var clickTarget = '';
        switch (element.tagName) {
            case 'A':
            case 'AREA':
                clickTarget = element.href || '';
                break;
            case 'IMG':
                clickTarget = getImageHref(element);
                break;
            case 'INPUT':
                var type = element.type;
                if (type && (clickCaptureInputTypes[type.toUpperCase()])) {
                    var loc = getLocation() || {};
                    if (element.form) {
                        clickTarget = element.form.action || (loc.pathname || "");
                    }
                    else {
                        clickTarget = loc.pathname || "";
                    }
                }
                break;
            default:
                break;
        }
        return clickTarget;
    }
    /**
     * Gets the pageName from the DOM or by calling a override if set.
     * @param config - configuration object
     * @returns Page name.
     */
    function getPageName(config, overrideValues) {
        /// <summary>
        ///  Gets the pageName from the DOM or by calling a override if set.
        /// </summary>
        if (overrideValues && overrideValues.pageName) {
            return overrideValues.pageName;
        }
        else if (config.callback && CoreUtils.isFunction(config.callback.pageName)) {
            return config.callback.pageName();
        }
        else if (config.coreData && config.coreData.pageName) {
            return config.coreData.pageName;
        }
        else {
            var loc = getLocation() || {};
            var pagename = loc.pathname || "";
            var fragments = pagename.split('/');
            if (fragments && fragments[fragments.length - 1] !== '') {
                pagename = fragments[fragments.length - 1];
            }
            else {
                pagename = 'Undefined';
            }
            return pagename;
        }
    }
    /**
     * Sanitize URL values
     * @param config - Configuration
     * @param location - window.location or document.location
     * @returns Flag indicating if an element is market PII.
     */
    function sanitizeUrl(config, location) {
        if (!location) {
            return null;
        }
        var url = location.protocol + '//' + (location.hostname || location.host) + // location.hostname is not supported on Opera and Opera for Android
            (isValueAssigned(location.port) ? ':' + location.port : '') +
            location.pathname;
        if (config.urlCollectHash) {
            url += (location.hash || '');
        }
        if (config.urlCollectQuery) {
            var query = location.search;
            if (!query) {
                // in older browsers the query parameters can be contained in the hash
                var hash = location.hash || '';
                var queryIndex = hash.indexOf('?');
                if (queryIndex !== -1) {
                    query = hash.slice(queryIndex);
                }
            }
            return url + query;
        }
        return url;
    }
    /**
     * Get URI, sanitize the value if configured on
     * @param config - Configuration
     * @param location - window.location or document.location
     * @returns Flag indicating if an element is market PII.
     */
    function getUri(config, location) {
        if (config.coreData && config.coreData.requestUri && config.coreData.requestUri !== '') {
            return config.coreData.requestUri;
        }
        return sanitizeUrl(config, location);
    }

    /*!
     * Application Insights JavaScript SDK - Click Analytics, 2.5.9
     * Copyright (c) Microsoft and contributors. All rights reserved.
     */
    var WebEvent = /** @class */ (function () {
        /**
         * @param clickAnalyticsPlugin - Click Analytics plugin instance
         * @param config - ClickAnalytics configuration object
         * @param contentHandler - Content handler
         * @param id - Id object
         * @param pageTagsCallback - callback methods to get pageTags value
         * @param metaTags - Meta tags
         * @param traceLogger - Trace logger to log to console.
         */
        function WebEvent(_clickAnalyticsPlugin, _config, _contentHandler, _pageTagsCallback, _metaTags, _traceLogger) {
            this._clickAnalyticsPlugin = _clickAnalyticsPlugin;
            this._config = _config;
            this._contentHandler = _contentHandler;
            this._pageTagsCallback = _pageTagsCallback;
            this._metaTags = _metaTags;
            this._traceLogger = _traceLogger;
            this._pageTags = {};
        }
        // Fill common PartB fields
        WebEvent.prototype.setBasicProperties = function (event, overrideValues) {
            if (!isValueAssigned(event.name)) {
                event.name = getPageName(this._config, overrideValues);
            }
            if (!isValueAssigned(event.uri) && hasWindow) {
                event.uri = getUri(this._config, getLocation());
            }
        };
        /**
         * Sets common properties for events that are based on the WebEvent schema.
         * @param event - The event
         */
        WebEvent.prototype.setCommonProperties = function (event, overrideValues) {
            this.setBasicProperties(event, overrideValues);
            this._setPageTags(event, overrideValues);
            // extract specific meta tags out of the pageTags.metaTags collection.  These will go into assigned first class fields in the event.
            // the rest will go into pageTags.metaTags collection as is.
            this._pageTypeMetaTag = this._getMetaData(this._metaTags, this._config.coreData, 'pageType');
            this._behaviorMetaTag = this._getMetaData(this._metaTags, this._config.coreData, 'behavior');
            if (isValueAssigned(overrideValues.pageType)) {
                event.pageType = overrideValues.pageType;
            }
            // Only assign if not overriden and meta data is available
            if (isValueAssigned(this._pageTypeMetaTag) && !isValueAssigned(event.pageType)) {
                event.pageType = this._pageTypeMetaTag;
            }
        };
        /**
         * Sets pageTags.
         * @param event - The event
         */
        WebEvent.prototype._setPageTags = function (event, overrideValues) {
            // Prepare the pageTags object that is mostly the same for all events.  Event specific pageTags will be added inside event constructors.
            if (this._pageTagsCallback) {
                this._pageTags = extend(true, this._pageTags, this._pageTagsCallback());
            }
            if (isValueAssigned(overrideValues.pageTags)) {
                this._pageTags = extend(true, this._pageTags, overrideValues.pageTags);
            }
            // If metadata is present add it to pageTags property
            if (this._metaTags) {
                this._pageTags.metaTags = {};
                // Remove not supported meta data in pageTags.metaTags
                for (var metaTag in this._metaTags) {
                    if (metaTag != 'behavior' && metaTag != 'market' && metaTag != 'pageType') {
                        this._pageTags.metaTags[metaTag] = this._metaTags[metaTag];
                    }
                }
            }
            // All metadata tags that must be saved as properties have been extracted at this point.  Assign pageTags as is.
            event.properties = event.properties || {};
            event.properties['pageTags'] = this._pageTags;
        };
        WebEvent.prototype._getBehavior = function (overrideValues) {
            var behavior;
            // If override specified 
            if (overrideValues && isValueAssigned(overrideValues.behavior)) {
                behavior = overrideValues.behavior;
            }
            else if (isValueAssigned(this._behaviorMetaTag)) {
                behavior = this._behaviorMetaTag;
            }
            return this._getValidBehavior(behavior);
        };
        WebEvent.prototype._getValidBehavior = function (behavior) {
            return this._config.behaviorValidator(behavior);
        };
        /**
         * Get the specified metadata value from the collection
         * If overrideValue is specified in the config that takes precedence.
         * @param metaTags - Meta data.
         * @param coreData - Coredata values from configuration.
         * @param metaTagName - Name of the metaTag to get.
         * @returns Meta data value
         */
        WebEvent.prototype._getMetaData = function (metaTags, coreData, metaTagName) {
            if (coreData && coreData[metaTagName]) {
                return coreData[metaTagName];
            }
            else if (metaTags) {
                return metaTags[metaTagName];
            }
            return "";
        };
        return WebEvent;
    }());

    /*!
     * Application Insights JavaScript SDK - Click Analytics, 2.5.9
     * Copyright (c) Microsoft and contributors. All rights reserved.
     */
    var PageAction = /** @class */ (function (_super) {
        __extends(PageAction, _super);
        function PageAction() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * API to send pageAction event
         * @param pageActionEvent - PageAction event
         * @param properties - PageAction properties(Part C)
         */
        PageAction.prototype.trackPageAction = function (pageActionEvent, properties) {
            // Get part A properties
            var ext = {};
            ext['web'] = {};
            var event = {
                name: '',
                baseType: 'ClickData',
                ext: ext,
                data: {},
                baseData: {}
            };
            event.baseData['name'] = pageActionEvent.name;
            event.baseData['uri'] = pageActionEvent.uri;
            event.baseData['pageType'] = pageActionEvent.pageType;
            event.baseData['properties'] = pageActionEvent.properties;
            event.baseData['actionType'] = pageActionEvent.actionType;
            event.baseData['behavior'] = pageActionEvent.behavior;
            event.baseData['clickCoordinates'] = pageActionEvent.clickCoordinates;
            event.baseData['content'] = pageActionEvent.content;
            event.baseData['targetUri'] = pageActionEvent.targetUri;
            event.data['timeToAction'] = pageActionEvent.timeToAction;
            event.data['refUri'] = pageActionEvent.refUri;
            for (var property in properties) {
                if (properties.hasOwnProperty(property)) {
                    if (!event.data[property]) {
                        event.data[property] = properties[property];
                    }
                }
            }
            this._clickAnalyticsPlugin.core.track(event);
        };
        /**
         * API to create and send a populated PageAction event
         * @param element - DOM element
         * @param overrideValues - PageAction overrides
         * @param customProperties - Custom properties(Part C)
         * @param isRightClick - Flag for mouse right clicks
         */
        PageAction.prototype.capturePageAction = function (element, overrideValues, customProperties, isRightClick$$1) {
            overrideValues = !isValueAssigned(overrideValues) ? {} : overrideValues;
            var pageActionEvent = { name: '' };
            var pageActionProperties = isValueAssigned(customProperties) ? customProperties : {};
            this.setCommonProperties(pageActionEvent, overrideValues);
            pageActionEvent.behavior = this._getBehavior(overrideValues);
            // element in scope is needed for below properties.  We cannot pass element into the plugin call chain.  
            // process them here.
            var elementContent = {};
            if (isRightClick$$1) {
                // Default behavior for righ click
                pageActionEvent.behavior = this._config.defaultRightClickBhvr;
            }
            // Fill PartB
            if (element) {
                pageActionEvent.targetUri = getClickTarget(element);
                elementContent = this._contentHandler.getElementContent(element); // collect id,cn tags
                // if the element has a data-*-bhvr attrib defined, use it.
                if (elementContent.bhvr && !isValueAssigned(overrideValues.behavior)) {
                    var currentBehavior = extractFieldFromObject(elementContent, 'bhvr');
                    pageActionEvent.behavior = this._getValidBehavior(currentBehavior);
                }
            }
            if (isValueAssigned(overrideValues.actionType)) {
                pageActionEvent.actionType = overrideValues.actionType;
            }
            if (isValueAssigned(overrideValues.clickCoordinateX) && isValueAssigned(overrideValues.clickCoordinateY)) {
                pageActionEvent.clickCoordinates = overrideValues.clickCoordinateX + 'X' + overrideValues.clickCoordinateY;
            }
            pageActionEvent.content = bracketIt(JSON.stringify(extend(elementContent, overrideValues && overrideValues.contentTags ? overrideValues.contentTags : {})));
            pageActionEvent.timeToAction = this._getTimeToClick();
            pageActionEvent.refUri = isValueAssigned(overrideValues.refUri) ? overrideValues.refUri : this._config.coreData.referrerUri;
            this.trackPageAction(pageActionEvent, pageActionProperties);
        };
        // capture performance data into PageTags
        PageAction.prototype._getTimeToClick = function () {
            var perf = getPerformance();
            if (perf && perf.timing) {
                var isNavigationStart = perf.timing.navigationStart;
                if (isNavigationStart && isNavigationStart !== 0) {
                    return new Date().getTime() - isNavigationStart;
                }
            }
            return -1;
        };
        return PageAction;
    }(WebEvent));

    /*!
     * Application Insights JavaScript SDK - Click Analytics, 2.5.9
     * Copyright (c) Microsoft and contributors. All rights reserved.
     */
    /**
     * @copyright Microsoft 2020
     */
    var ActionType = {
        CLICKLEFT: 'CL',
        CLICKRIGHT: 'CR',
        CLICKMIDDLE: 'CM',
        SCROLL: 'S',
        ZOOM: 'Z',
        RESIZE: 'R',
        KEYBOARDENTER: 'KE',
        KEYBOARDSPACE: 'KS',
        OTHER: 'O'
    };

    /*!
     * Application Insights JavaScript SDK - Click Analytics, 2.5.9
     * Copyright (c) Microsoft and contributors. All rights reserved.
     */
    var clickCaptureInputTypes$1 = { BUTTON: true, CHECKBOX: true, RADIO: true, RESET: true, SUBMIT: true };
    var AutoCaptureHandler = /** @class */ (function () {
        /**
         * @param analyticsPlugin - WebAnalytics plugin
         * @param traceLogger - Trace logger to log to console.
         */
        function AutoCaptureHandler(_analyticsPlugin, _config, _pageAction, _traceLogger) {
            this._analyticsPlugin = _analyticsPlugin;
            this._config = _config;
            this._pageAction = _pageAction;
            this._traceLogger = _traceLogger;
        }
        // handle automatic event firing on user click
        AutoCaptureHandler.prototype.click = function () {
            var _this = this;
            var win = getWindow();
            var doc = getDocument();
            if (win) {
                // IE9 onwards addEventListener is available, 'click' event captures mouse click. mousedown works on other browsers
                var event_1 = (navigator.appVersion.indexOf('MSIE') !== -1) ? 'click' : 'mousedown';
                EventHelper.Attach(win, event_1, function (evt) { _this._processClick(evt); });
                EventHelper.Attach(win, 'keyup', function (evt) { _this._processClick(evt); });
            }
            else if (doc) {
                // IE8 and below doesn't have addEventListener so it will use attachEvent
                // attaching to window does not work in IE8
                EventHelper.Attach(doc, 'onclick', function (evt) { _this._processClick(evt); });
                EventHelper.Attach(doc, 'keyup', function (evt) { _this._processClick(evt); });
            }
        };
        /**
         * API to create and send a populated PageAction event
         * @param element - DOM element
         * @param overrideValues - PageAction overrides
         * @param customProperties - Custom properties(Part C)
         * @param isRightClick - Flag for mouse right clicks
         */
        AutoCaptureHandler.prototype.capturePageAction = function (element, overrideValues, customProperties, isRightClick$$1) {
            var donotTrackTag = this._config.dataTags.customDataPrefix + this._config.dataTags.donotTrackDataTag;
            if (!isElementDnt(element, donotTrackTag)) {
                this._pageAction.capturePageAction(element, overrideValues, customProperties, isRightClick$$1);
            }
        };
        // Process click event
        AutoCaptureHandler.prototype._processClick = function (clickEvent) {
            var clickCaptureElements = { A: true, BUTTON: true, AREA: true, INPUT: true };
            var win = getWindow();
            if (CoreUtils.isNullOrUndefined(clickEvent) && win) {
                clickEvent = win.event; // IE 8 does not pass the event
            }
            if (clickEvent) {
                var element = clickEvent.srcElement || clickEvent.target;
                // populate overrideValues 
                var overrideValues = {
                    clickCoordinateX: clickEvent.pageX,
                    clickCoordinateY: clickEvent.pageY
                };
                var isRightClickObj = isRightClick(clickEvent);
                if (isRightClickObj) {
                    overrideValues.actionType = ActionType.CLICKRIGHT;
                }
                else if (isLeftClick(clickEvent)) {
                    overrideValues.actionType = ActionType.CLICKLEFT;
                }
                else if (isKeyboardEnter(clickEvent)) {
                    overrideValues.actionType = ActionType.KEYBOARDENTER;
                }
                else if (isKeyboardSpace(clickEvent)) {
                    overrideValues.actionType = ActionType.KEYBOARDSPACE;
                }
                else if (isMiddleClick(clickEvent)) {
                    overrideValues.actionType = ActionType.CLICKMIDDLE;
                }
                else {
                    return;
                }
                while (element && element.tagName) {
                    // control property will be available for <label> elements with 'for' attribute, only use it when is a 
                    // valid JSLL capture element to avoid infinite loops
                    if (element.control && clickCaptureElements[element.control.tagName.toUpperCase()]) {
                        element = element.control;
                    }
                    var tagNameUpperCased = element.tagName.toUpperCase();
                    if (!clickCaptureElements[tagNameUpperCased]) {
                        element = element.parentElement || element.parentNode;
                        continue;
                    }
                    else {
                        // Check allowed INPUT types
                        var sendEvent = tagNameUpperCased === 'INPUT' ? clickCaptureInputTypes$1[element.type.toUpperCase()] : true;
                        if (sendEvent) {
                            this.capturePageAction(element, overrideValues, {}, isRightClickObj);
                        }
                        break;
                    }
                }
            }
        };
        return AutoCaptureHandler;
    }());

    /*!
     * Application Insights JavaScript SDK - Click Analytics, 2.5.9
     * Copyright (c) Microsoft and contributors. All rights reserved.
     */
    var MAX_CONTENTNAME_LENGTH = 200;
    var DomContentHandler = /** @class */ (function () {
        /**
         * @param config - ClickAnalytics configuration object
         * @param traceLogger - Trace logger to log to console.
         */
        function DomContentHandler(_config, _traceLogger) {
            this._config = _config;
            this._traceLogger = _traceLogger;
        }
        /**
         * Collect metatags from DOM.
         * Collect data from meta tags.
         * @returns {object} - Metatags collection/property bag
         */
        DomContentHandler.prototype.getMetadata = function () {
            var metaTags = {};
            if (hasDocument) {
                metaTags = isValueAssigned(this._config.dataTags.metaDataPrefix) ? this._getMetaDataFromDOM(this._config.dataTags.captureAllMetaDataContent, this._config.dataTags.metaDataPrefix, false) :
                    this._getMetaDataFromDOM(this._config.dataTags.captureAllMetaDataContent, '', false);
            }
            return metaTags;
        };
        /**
         * Collect data-* attributes for the given element.
         * All attributes with data-* prefix or user provided customDataPrefix are collected.'data-*' prefix is removed from the key name.
         * @param element - The element from which attributes need to be collected.
         * @returns String representation of the Json array of element attributes
         */
        DomContentHandler.prototype.getElementContent = function (element) {
            if (!element) {
                return {};
            }
            var elementContent = {};
            var biBlobElement;
            var biBlobValue;
            var contentElement;
            var parentDataTagPrefix;
            var dataTagPrefix = this._config.dataTags.customDataPrefix;
            var aiBlobAttributeTag = dataTagPrefix + this._config.dataTags.aiBlobAttributeTag;
            if (isValueAssigned(this._config.dataTags.parentDataTag)) {
                parentDataTagPrefix = dataTagPrefix + this._config.dataTags.parentDataTag;
            }
            if (!this._isTracked(element, dataTagPrefix, aiBlobAttributeTag)) {
                // capture blob from element or hierarchy
                biBlobElement = findClosestByAttribute(element, aiBlobAttributeTag);
                if (biBlobElement) {
                    biBlobValue = biBlobElement.getAttribute(aiBlobAttributeTag);
                }
                if (biBlobValue) {
                    try {
                        elementContent = JSON.parse(biBlobValue);
                    }
                    catch (e) {
                        this._traceLogger.throwInternal(LoggingSeverity.CRITICAL, _ExtendedInternalMessageId.CannotParseAiBlobValue, "Can not parse " + biBlobValue);
                    }
                }
                else {
                    // traverse up the DOM to find the closest parent with data-* tag defined
                    contentElement = walkUpDomChainWithElementValidation(element, this._isTracked, dataTagPrefix);
                    elementContent = extend(elementContent, this._populateElementContentwithDataTag(contentElement, element, dataTagPrefix, parentDataTagPrefix));
                }
            }
            else {
                contentElement = element;
                elementContent = extend(elementContent, this._populateElementContentwithDataTag(contentElement, element, dataTagPrefix, parentDataTagPrefix));
            }
            removeInvalidElements(elementContent);
            return elementContent;
        };
        /**
         * Capture current level Element content
         */
        DomContentHandler.prototype._captureElementContent = function (contentElement, elementContent, dataTagPrefix) {
            for (var i = 0, attrib; i < contentElement.attributes.length; i++) {
                attrib = contentElement.attributes[i];
                if (attrib.name.indexOf(dataTagPrefix) !== 0) {
                    continue;
                }
                var attribName = attrib.name.replace(dataTagPrefix, '');
                elementContent[attribName] = attrib.value;
            }
        };
        /**
         * Walk Up the DOM to capture Element content
         */
        DomContentHandler.prototype._walkUpDomChainCaptureData = function (el, elementContent, dataTagPrefix, parentDataTagPrefix) {
            var element = el;
            var parentDataTagFound = false;
            while (!CoreUtils.isNullOrUndefined(element) && !CoreUtils.isNullOrUndefined(element.attributes)) {
                var attributes = element.attributes;
                for (var i = 0; i < attributes.length; i++) {
                    var attrib = attributes[i];
                    if (attrib.name.indexOf(dataTagPrefix) !== 0) {
                        continue;
                    }
                    if (attrib.name.indexOf(parentDataTagPrefix) === 0) {
                        parentDataTagFound = true;
                    }
                    var attribName = attrib.name.replace(dataTagPrefix, '');
                    if (!isValueAssigned(elementContent[attribName])) {
                        elementContent[attribName] = attrib.value;
                    }
                }
                // break after current level;
                if (parentDataTagFound) {
                    break;
                }
                element = element.parentNode;
            }
        };
        /**
         * Capture Element content along with Data Tag attributes and values
         */
        DomContentHandler.prototype._populateElementContentwithDataTag = function (contentElement, element, dataTagPrefix, parentDataTagPrefix) {
            var elementContent = {};
            if (!contentElement) {
                // None of the element and its parent has any tags, collect standard HTML attribute for contentName when useDefaultContentName flag is true 
                if (this._config.dataTags.useDefaultContentName) {
                    contentElement = element;
                }
                else {
                    return elementContent;
                }
            }
            var customizedContentName = this._config.callback.contentName ? this._config.callback.contentName(contentElement, this._config.dataTags.useDefaultContentName) : "";
            var defaultContentName = this._getDefaultContentName(contentElement, this._config.dataTags.useDefaultContentName);
            elementContent = {
                id: contentElement.id || '',
                contentName: customizedContentName || defaultContentName || contentElement.getAttribute('alt') || ''
            };
            // Validate to ensure the minimum required field 'contentName' is present.  
            // The content schema defines id, aN and sN as required fields.  However, 
            // requiring these fields would result in majority of adopter's content from being collected.
            // Just throw a warning and continue collection.
            if (!elementContent.id || !elementContent.contentName) {
                this._traceLogger.throwInternal(LoggingSeverity.WARNING, _ExtendedInternalMessageId.InvalidContentBlob, 'Invalid content blob.  Missing required attributes (id, contentName. ' +
                    ' Content information will still be collected!');
            }
            isValueAssigned(parentDataTagPrefix) ?
                this._walkUpDomChainCaptureData(contentElement, elementContent, dataTagPrefix, parentDataTagPrefix) :
                this._captureElementContent(contentElement, elementContent, dataTagPrefix);
            return elementContent;
        };
        /**
         * Retrieve a specified metadata tag value from the DOM.
         * @param captureAllMetaDataContent - Flag to capture all metadata content
         * @param prefix - Prefix to search the metatags with.
         * @param removePrefix - Specifies if the prefix must be excluded from key names in the returned collection.
         * @returns Metadata collection/property bag
         */
        DomContentHandler.prototype._getMetaDataFromDOM = function (captureAllMetaDataContent, prefix, removePrefix) {
            var metaElements;
            var metaData = {};
            if (hasDocument) {
                metaElements = document.querySelectorAll('meta');
                for (var i = 0; i < metaElements.length; i++) {
                    var meta = metaElements[i];
                    if (meta.name) {
                        if (captureAllMetaDataContent || meta.name.indexOf(prefix) === 0) {
                            var name_1 = removePrefix ? meta.name.replace(prefix, '') : meta.name;
                            metaData[name_1] = meta.content;
                        }
                    }
                }
            }
            return metaData;
        };
        /**
         * Gets the default content name.
         * @param element - An html element
         * @param useDefaultContentName -Flag indicating if an element is market PII.
         * @returns Content name
         */
        DomContentHandler.prototype._getDefaultContentName = function (element, useDefaultContentName) {
            if (useDefaultContentName === false || !element.tagName) {
                return '';
            }
            var doc = getDocument() || {};
            var contentName;
            switch (element.tagName) {
                case 'A':
                    contentName = doc.all ? element.innerText || element.innerHTML : element.text || element.innerHTML;
                    break;
                case 'IMG':
                case 'AREA':
                    contentName = element.alt;
                    break;
                default:
                    contentName = element.value || element.name || element.alt || element.innerText || element.id;
            }
            return contentName.substring(0, MAX_CONTENTNAME_LENGTH);
        };
        /**
         * Check if the user wants to track the element, which means if the element has any tags with data-* or customDataPrefix
         * @param element - An html element
         * @returns true if any data-* exist, otherwise return false
         */
        DomContentHandler.prototype._isTracked = function (element, dataTag, aiBlobAttributeTag) {
            var attrs = element.attributes;
            var dataTagFound = false;
            for (var i = 0; i < attrs.length; i++) {
                var attributeName = attrs[i].name;
                if (attributeName === aiBlobAttributeTag) {
                    // ignore if the attribute name is equal to aiBlobAttributeTag
                    return false;
                }
                else if (attributeName.indexOf(dataTag) === 0) {
                    dataTagFound = true;
                }
            }
            return dataTagFound;
        };
        return DomContentHandler;
    }());

    /*!
     * Application Insights JavaScript SDK - Click Analytics, 2.5.9
     * Copyright (c) Microsoft and contributors. All rights reserved.
     */
    var ClickAnalyticsPlugin = /** @class */ (function (_super) {
        __extends(ClickAnalyticsPlugin, _super);
        function ClickAnalyticsPlugin() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.identifier = 'ClickAnalyticsPlugin';
            _this.priority = 181;
            return _this;
        }
        ClickAnalyticsPlugin.prototype.initialize = function (config, core, extensions, pluginChain) {
            if (CoreUtils.isNullOrUndefined(core)) {
                throw Error("Error initializing");
            }
            config.extensionConfig = config.extensionConfig || [];
            config.extensionConfig[this.identifier] = config.extensionConfig[this.identifier] || {};
            this._config = mergeConfig(config.extensionConfig[this.identifier]);
            _super.prototype.initialize.call(this, config, core, extensions, pluginChain);
            // Default to DOM content handler
            this._contentHandler = this._contentHandler ? this._contentHandler : new DomContentHandler(this._config, this.diagLog());
            var metaTags = this._contentHandler.getMetadata();
            this.pageAction = new PageAction(this, this._config, this._contentHandler, this._config.callback.pageActionPageTags, metaTags, this.diagLog());
            // Default to DOM autoCapture handler
            this._autoCaptureHandler = this._autoCaptureHandler ? this._autoCaptureHandler : new AutoCaptureHandler(this, this._config, this.pageAction, this.diagLog());
            if (this._config.autoCapture) {
                this._autoCaptureHandler.click();
            }
        };
        ClickAnalyticsPlugin.prototype.processTelemetry = function (env, itemCtx) {
            this.processNext(env, itemCtx);
        };
        /**
         * Logs a page action event.
         * @param IPageActionTelemetry
         * @param customProperties Additional data used to filter events and metrics. Defaults to empty.
         */
        ClickAnalyticsPlugin.prototype.trackPageAction = function (pageAction, customProperties) {
            try {
                this.pageAction.trackPageAction(pageAction, customProperties);
            }
            catch (e) {
                this.diagLog().throwInternal(LoggingSeverity.CRITICAL, _ExtendedInternalMessageId.TrackPageActionEventFailed, "trackPageAction failed, page action event will not be collected: " + Util.getExceptionName(e), { exception: Util.dump(e) });
            }
        };
        return ClickAnalyticsPlugin;
    }(BaseTelemetryPlugin));

    /*!
     * Application Insights JavaScript SDK - Click Analytics, 2.5.9
     * Copyright (c) Microsoft and contributors. All rights reserved.
     */

    exports.ClickAnalyticsPlugin = ClickAnalyticsPlugin;
    exports.BehaviorMapValidator = BehaviorMapValidator;
    exports.BehaviorValueValidator = BehaviorValueValidator;
    exports.BehaviorEnumValidator = BehaviorEnumValidator;

    (function(obj, prop, descriptor) { /* ai_es3_polyfil defineProperty */ var func = Object["defineProperty"]; if (func) { try { return func(obj, prop, descriptor); } catch(e) { /* IE8 defines defineProperty, but will throw */ } } if (descriptor && typeof descriptor.value !== undefined) { obj[prop] = descriptor.value; } return obj; })(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=applicationinsights-clickanalytics-js.js.map
