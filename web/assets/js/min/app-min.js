(function () {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var jquery = createCommonjsModule(function (module) {
	/*!
	 * jQuery JavaScript Library v3.4.1
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2019-05-01T21:04Z
	 */
	( function( global, factory ) {

		{

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : commonjsGlobal, function( window, noGlobal ) {

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};

	var isFunction = function isFunction( obj ) {

	      // Support: Chrome <=57, Firefox <=52
	      // In some browsers, typeof returns "function" for HTML <object> elements
	      // (i.e., `typeof document.createElement( "object" ) === "function"`).
	      // We don't want to classify *any* DOM node as a function.
	      return typeof obj === "function" && typeof obj.nodeType !== "number";
	  };


	var isWindow = function isWindow( obj ) {
			return obj != null && obj === obj.window;
		};




		var preservedScriptAttributes = {
			type: true,
			src: true,
			nonce: true,
			noModule: true
		};

		function DOMEval( code, node, doc ) {
			doc = doc || document;

			var i, val,
				script = doc.createElement( "script" );

			script.text = code;
			if ( node ) {
				for ( i in preservedScriptAttributes ) {

					// Support: Firefox 64+, Edge 18+
					// Some browsers don't support the "nonce" property on scripts.
					// On the other hand, just using `getAttribute` is not enough as
					// the `nonce` attribute is reset to an empty string whenever it
					// becomes browsing-context connected.
					// See https://github.com/whatwg/html/issues/2369
					// See https://html.spec.whatwg.org/#nonce-attributes
					// The `node.getAttribute` check was added for the sake of
					// `jQuery.globalEval` so that it can fake a nonce-containing node
					// via an object.
					val = node[ i ] || node.getAttribute && node.getAttribute( i );
					if ( val ) {
						script.setAttribute( i, val );
					}
				}
			}
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}


	function toType( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	}
	/* global Symbol */
	// Defining this global in .eslintrc.json would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.4.1",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {

			// Return all the elements in a clean array
			if ( num == null ) {
				return slice.call( this );
			}

			// Return just the one element from the set
			return num < 0 ? this[ num + this.length ] : this[ num ];
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					copy = options[ name ];

					// Prevent Object.prototype pollution
					// Prevent never-ending loop
					if ( name === "__proto__" || target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = Array.isArray( copy ) ) ) ) {
						src = target[ name ];

						// Ensure proper type for the source value
						if ( copyIsArray && !Array.isArray( src ) ) {
							clone = [];
						} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
							clone = {};
						} else {
							clone = src;
						}
						copyIsArray = false;

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		// Evaluates a script in a global context
		globalEval: function( code, options ) {
			DOMEval( code, { nonce: options && options.nonce } );
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = toType( obj );

		if ( isFunction( obj ) || isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.4
	 * https://sizzlejs.com/
	 *
	 * Copyright JS Foundation and other contributors
	 * Released under the MIT license
	 * https://js.foundation/
	 *
	 * Date: 2019-04-08
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		nonnativeSelectorCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
		rdescend = new RegExp( whitespace + "|>" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rhtml = /HTML$/i,
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		inDisabledFieldset = addCombinator(
			function( elem ) {
				return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!nonnativeSelectorCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) &&

					// Support: IE 8 only
					// Exclude object elements
					(nodeType !== 1 || context.nodeName.toLowerCase() !== "object") ) {

					newSelector = selector;
					newContext = context;

					// qSA considers elements outside a scoping root when evaluating child or
					// descendant combinators, which is not what we want.
					// In such cases, we work around the behavior by prefixing every selector in the
					// list with an ID selector referencing the scope context.
					// Thanks to Andrew Dupont for this technique.
					if ( nodeType === 1 && rdescend.test( selector ) ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
						nonnativeSelectorCache( selector, true );
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {

		// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Only certain elements can match :enabled or :disabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
			// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
			if ( "form" in elem ) {

				// Check for inherited disabledness on relevant non-disabled elements:
				// * listed form-associated elements in a disabled fieldset
				//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
				// * option elements in a disabled optgroup
				//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
				// All such elements have a "form" property.
				if ( elem.parentNode && elem.disabled === false ) {

					// Option elements defer to a parent optgroup if present
					if ( "label" in elem ) {
						if ( "label" in elem.parentNode ) {
							return elem.parentNode.disabled === disabled;
						} else {
							return elem.disabled === disabled;
						}
					}

					// Support: IE 6 - 11
					// Use the isDisabled shortcut property to check for disabled fieldset ancestors
					return elem.isDisabled === disabled ||

						// Where there is no isDisabled, check manually
						/* jshint -W018 */
						elem.isDisabled !== !disabled &&
							inDisabledFieldset( elem ) === disabled;
				}

				return elem.disabled === disabled;

			// Try to winnow out elements that can't be disabled before trusting the disabled property.
			// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
			// even exist on them, let alone have a boolean value.
			} else if ( "label" in elem ) {
				return elem.disabled === disabled;
			}

			// Remaining elements are neither :enabled nor :disabled
			return false;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		var namespace = elem.namespaceURI,
			docElem = (elem.ownerDocument || elem).documentElement;

		// Support: IE <=8
		// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
		// https://bugs.jquery.com/ticket/4833
		return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID filter and find
		if ( support.getById ) {
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var elem = context.getElementById( id );
					return elem ? [ elem ] : [];
				}
			};
		} else {
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};

			// Support: IE 6 - 7 only
			// getElementById is not reliable as a find shortcut
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var node, i, elems,
						elem = context.getElementById( id );

					if ( elem ) {

						// Verify the id attribute
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}

						// Fall back on getElementsByName
						elems = context.getElementsByName( id );
						i = 0;
						while ( (elem = elems[i++]) ) {
							node = elem.getAttributeNode("id");
							if ( node && node.value === id ) {
								return [ elem ];
							}
						}
					}

					return [];
				}
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		if ( support.matchesSelector && documentIsHTML &&
			!nonnativeSelectorCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {
				nonnativeSelectorCache( expr, true );
			}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ?
					argument + length :
					argument > length ?
						length :
						argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
				return false;
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
				return false;
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;



	function nodeName( elem, name ) {

	  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

	}var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
		}

		// Single element
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
		}

		// Arraylike of elements (jQuery, arguments, Array)
		if ( typeof qualifier !== "string" ) {
			return jQuery.grep( elements, function( elem ) {
				return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
			} );
		}

		// Filtered directly for both simple and complex selectors
		return jQuery.filter( qualifier, elements, not );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		if ( elems.length === 1 && elem.nodeType === 1 ) {
			return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
		}

		return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			if ( typeof elem.contentDocument !== "undefined" ) {
				return elem.contentDocument;
			}

			// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
			// Treat the template element as a regular one in browsers that
			// don't support it.
			if ( nodeName( elem, "template" ) ) {
				elem = elem.content || elem;
			}

			return jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = locked || options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && toType( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject, noValue ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
				// * false: [ value ].slice( 0 ) => resolve( value )
				// * true: [ value ].slice( 1 ) => resolve()
				resolve.apply( undefined, [ value ].slice( noValue ) );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.apply( undefined, [ value ] );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// rejected_handlers.disable
						// fulfilled_handlers.disable
						tuples[ 3 - i ][ 3 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock,

						// progress_handlers.lock
						tuples[ 0 ][ 3 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
					!remaining );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( toType( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		if ( chainable ) {
			return elems;
		}

		// Gets
		if ( bulk ) {
			return fn.call( elems );
		}

		return len ? fn( elems[ 0 ], key ) : emptyGet;
	};


	// Matches dashed string for camelizing
	var rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g;

	// Used by camelCase as callback to replace()
	function fcamelCase( all, letter ) {
		return letter.toUpperCase();
	}

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 15
	// Microsoft forgot to hump their vendor prefix (#9572)
	function camelCase( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	}
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( Array.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( camelCase );
				} else {
					key = camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnothtmlwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function getData( data ) {
		if ( data === "true" ) {
			return true;
		}

		if ( data === "false" ) {
			return false;
		}

		if ( data === "null" ) {
			return null;
		}

		// Only convert to a number if it doesn't change the string
		if ( data === +data + "" ) {
			return +data;
		}

		if ( rbrace.test( data ) ) {
			return JSON.parse( data );
		}

		return data;
	}

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = getData( data );
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || Array.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var documentElement = document.documentElement;



		var isAttached = function( elem ) {
				return jQuery.contains( elem.ownerDocument, elem );
			},
			composed = { composed: true };

		// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
		// Check attachment across shadow DOM boundaries when possible (gh-3504)
		// Support: iOS 10.0-10.2 only
		// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
		// leading to errors. We need to check for `getRootNode`.
		if ( documentElement.getRootNode ) {
			isAttached = function( elem ) {
				return jQuery.contains( elem.ownerDocument, elem ) ||
					elem.getRootNode( composed ) === elem.ownerDocument;
			};
		}
	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				isAttached( elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted, scale,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = elem.nodeType &&
				( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Support: Firefox <=54
			// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
			initial = initial / 2;

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			while ( maxIterations-- ) {

				// Evaluate and update our best guess (doubling guesses that zero out).
				// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
				jQuery.style( elem, prop, initialInUnit + unit );
				if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
					maxIterations = 0;
				}
				initialInUnit = initialInUnit / scale;

			}

			initialInUnit = initialInUnit * 2;
			jQuery.style( elem, prop, initialInUnit + unit );

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) );
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

	var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret;

		if ( typeof context.getElementsByTagName !== "undefined" ) {
			ret = context.getElementsByTagName( tag || "*" );

		} else if ( typeof context.querySelectorAll !== "undefined" ) {
			ret = context.querySelectorAll( tag || "*" );

		} else {
			ret = [];
		}

		if ( tag === undefined || tag && nodeName( context, tag ) ) {
			return jQuery.merge( [ context ], ret );
		}

		return ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, attached, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( toType( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			attached = isAttached( elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( attached ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 - 11+
	// focus() and blur() are asynchronous, except when they are no-op.
	// So expect focus to be synchronous when the element is already active,
	// and blur to be synchronous when the element is not already active.
	// (focus and blur are always synchronous in other supported browsers,
	// this just defines when we can count on it).
	function expectSync( elem, type ) {
		return ( elem === safeActiveElement() ) === ( type === "focus" );
	}

	// Support: IE <=9 only
	// Accessing document.activeElement can throw unexpectedly
	// https://bugs.jquery.com/ticket/13393
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// If the event is namespaced, then each handler is only invoked if it is
					// specially universal or its namespaces are a superset of the event's.
					if ( !event.rnamespace || handleObj.namespace === false ||
						event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, handleObj, sel, matchedHandlers, matchedSelectors,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Find delegate handlers
			if ( delegateCount &&

				// Support: IE <=9
				// Black-hole SVG <use> instance trees (trac-13180)
				cur.nodeType &&

				// Support: Firefox <=42
				// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
				// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
				// Support: IE 11 only
				// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
				!( event.type === "click" && event.button >= 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
						matchedHandlers = [];
						matchedSelectors = {};
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matchedSelectors[ sel ] === undefined ) {
								matchedSelectors[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matchedSelectors[ sel ] ) {
								matchedHandlers.push( handleObj );
							}
						}
						if ( matchedHandlers.length ) {
							handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			cur = this;
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			click: {

				// Utilize native event to ensure correct state for checkable inputs
				setup: function( data ) {

					// For mutual compressibility with _default, replace `this` access with a local var.
					// `|| data` is dead code meant only to preserve the variable through minification.
					var el = this || data;

					// Claim the first handler
					if ( rcheckableType.test( el.type ) &&
						el.click && nodeName( el, "input" ) ) {

						// dataPriv.set( el, "click", ... )
						leverageNative( el, "click", returnTrue );
					}

					// Return false to allow normal processing in the caller
					return false;
				},
				trigger: function( data ) {

					// For mutual compressibility with _default, replace `this` access with a local var.
					// `|| data` is dead code meant only to preserve the variable through minification.
					var el = this || data;

					// Force setup before triggering a click
					if ( rcheckableType.test( el.type ) &&
						el.click && nodeName( el, "input" ) ) {

						leverageNative( el, "click" );
					}

					// Return non-false to allow normal event-path propagation
					return true;
				},

				// For cross-browser consistency, suppress native .click() on links
				// Also prevent it if we're currently inside a leveraged native-event stack
				_default: function( event ) {
					var target = event.target;
					return rcheckableType.test( target.type ) &&
						target.click && nodeName( target, "input" ) &&
						dataPriv.get( target, "click" ) ||
						nodeName( target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	// Ensure the presence of an event listener that handles manually-triggered
	// synthetic events by interrupting progress until reinvoked in response to
	// *native* events that it fires directly, ensuring that state changes have
	// already occurred before other listeners are invoked.
	function leverageNative( el, type, expectSync ) {

		// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
		if ( !expectSync ) {
			if ( dataPriv.get( el, type ) === undefined ) {
				jQuery.event.add( el, type, returnTrue );
			}
			return;
		}

		// Register the controller as a special universal handler for all event namespaces
		dataPriv.set( el, type, false );
		jQuery.event.add( el, type, {
			namespace: false,
			handler: function( event ) {
				var notAsync, result,
					saved = dataPriv.get( this, type );

				if ( ( event.isTrigger & 1 ) && this[ type ] ) {

					// Interrupt processing of the outer synthetic .trigger()ed event
					// Saved data should be false in such cases, but might be a leftover capture object
					// from an async native handler (gh-4350)
					if ( !saved.length ) {

						// Store arguments for use when handling the inner native event
						// There will always be at least one argument (an event object), so this array
						// will not be confused with a leftover capture object.
						saved = slice.call( arguments );
						dataPriv.set( this, type, saved );

						// Trigger the native event and capture its result
						// Support: IE <=9 - 11+
						// focus() and blur() are asynchronous
						notAsync = expectSync( this, type );
						this[ type ]();
						result = dataPriv.get( this, type );
						if ( saved !== result || notAsync ) {
							dataPriv.set( this, type, false );
						} else {
							result = {};
						}
						if ( saved !== result ) {

							// Cancel the outer synthetic event
							event.stopImmediatePropagation();
							event.preventDefault();
							return result.value;
						}

					// If this is an inner synthetic event for an event with a bubbling surrogate
					// (focus or blur), assume that the surrogate already propagated from triggering the
					// native event and prevent that from happening again here.
					// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
					// bubbling surrogate propagates *after* the non-bubbling base), but that seems
					// less bad than duplication.
					} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
						event.stopPropagation();
					}

				// If this is a native event triggered above, everything is now in order
				// Fire an inner synthetic event with the original arguments
				} else if ( saved.length ) {

					// ...and capture the result
					dataPriv.set( this, type, {
						value: jQuery.event.trigger(

							// Support: IE <=9 - 11+
							// Extend with the prototype to reset the above stopImmediatePropagation()
							jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
							saved.slice( 1 ),
							this
						)
					} );

					// Abort handling of the native event
					event.stopImmediatePropagation();
				}
			}
		} );
	}

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || Date.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		code: true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				if ( button & 1 ) {
					return 1;
				}

				if ( button & 2 ) {
					return 3;
				}

				if ( button & 4 ) {
					return 2;
				}

				return 0;
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
		jQuery.event.special[ type ] = {

			// Utilize native event if possible so blur/focus sequence is correct
			setup: function() {

				// Claim the first handler
				// dataPriv.set( this, "focus", ... )
				// dataPriv.set( this, "blur", ... )
				leverageNative( this, type, expectSync );

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function() {

				// Force setup before trigger
				leverageNative( this, type );

				// Return non-false to allow normal event-path propagation
				return true;
			},

			delegateType: delegateType
		};
	} );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13 only
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Prefer a tbody over its parent table for containing new rows
	function manipulationTarget( elem, content ) {
		if ( nodeName( elem, "table" ) &&
			nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
			elem.type = elem.type.slice( 5 );
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			valueIsFunction = isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( valueIsFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( valueIsFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl && !node.noModule ) {
									jQuery._evalUrl( node.src, {
										nonce: node.nonce || node.getAttribute( "nonce" )
									} );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && isAttached( node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = isAttached( elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
				"margin-top:1px;padding:0;border:0";
			div.style.cssText =
				"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
				"margin:auto;border:1px;padding:1px;" +
				"width:60%;top:1%";
			documentElement.appendChild( container ).appendChild( div );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

			// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
			// Some styles come back with percentage values, even though they shouldn't
			div.style.right = "60%";
			pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

			// Support: IE 9 - 11 only
			// Detect misreporting of content dimensions for box-sizing:border-box elements
			boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

			// Support: IE 9 only
			// Detect overflow:scroll screwiness (gh-3699)
			// Support: Chrome <=64
			// Don't get tricked when zoom affects offsetWidth (gh-4029)
			div.style.position = "absolute";
			scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		function roundPixelMeasures( measure ) {
			return Math.round( parseFloat( measure ) );
		}

		var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
			reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		jQuery.extend( support, {
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelBoxStyles: function() {
				computeStyleTests();
				return pixelBoxStylesVal;
			},
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			},
			scrollboxSize: function() {
				computeStyleTests();
				return scrollboxSizeVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,

			// Support: Firefox 51+
			// Retrieving style before computed somehow
			// fixes an issue with getting wrong values
			// on detached elements
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is needed for:
		//   .css('filter') (IE 9 only, #12537)
		//   .css('--customProperty) (#3144)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !isAttached( elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style,
		vendorProps = {};

	// Return a vendor-prefixed property or undefined
	function vendorPropName( name ) {

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
	function finalPropName( name ) {
		var final = jQuery.cssProps[ name ] || vendorProps[ name ];

		if ( final ) {
			return final;
		}
		if ( name in emptyStyle ) {
			return name;
		}
		return vendorProps[ name ] = vendorPropName( name ) || name;
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rcustomProp = /^--/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		};

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
		var i = dimension === "width" ? 1 : 0,
			extra = 0,
			delta = 0;

		// Adjustment may not be necessary
		if ( box === ( isBorderBox ? "border" : "content" ) ) {
			return 0;
		}

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin
			if ( box === "margin" ) {
				delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
			}

			// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
			if ( !isBorderBox ) {

				// Add padding
				delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// For "border" or "margin", add border
				if ( box !== "padding" ) {
					delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

				// But still keep track of it otherwise
				} else {
					extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}

			// If we get here with a border-box (content + padding + border), we're seeking "content" or
			// "padding" or "margin"
			} else {

				// For "content", subtract padding
				if ( box === "content" ) {
					delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// For "content" or "padding", subtract border
				if ( box !== "margin" ) {
					delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		// Account for positive content-box scroll gutter when requested by providing computedVal
		if ( !isBorderBox && computedVal >= 0 ) {

			// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
			// Assuming integer scroll gutter, subtract the rest and round down
			delta += Math.max( 0, Math.ceil(
				elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
				computedVal -
				delta -
				extra -
				0.5

			// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
			// Use an explicit zero to avoid NaN (gh-3964)
			) ) || 0;
		}

		return delta;
	}

	function getWidthOrHeight( elem, dimension, extra ) {

		// Start with computed style
		var styles = getStyles( elem ),

			// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
			// Fake content-box until we know it's needed to know the true value.
			boxSizingNeeded = !support.boxSizingReliable() || extra,
			isBorderBox = boxSizingNeeded &&
				jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
			valueIsBorderBox = isBorderBox,

			val = curCSS( elem, dimension, styles ),
			offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

		// Support: Firefox <=54
		// Return a confounding non-pixel value or feign ignorance, as appropriate.
		if ( rnumnonpx.test( val ) ) {
			if ( !extra ) {
				return val;
			}
			val = "auto";
		}


		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		// Support: IE 9-11 only
		// Also use offsetWidth/offsetHeight for when box sizing is unreliable
		// We use getClientRects() to check for hidden/disconnected.
		// In those cases, the computed value can be trusted to be border-box
		if ( ( !support.boxSizingReliable() && isBorderBox ||
			val === "auto" ||
			!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&
			elem.getClientRects().length ) {

			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

			// Where available, offsetWidth/offsetHeight approximate border box dimensions.
			// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
			// retrieved value as a content box dimension.
			valueIsBorderBox = offsetProp in elem;
			if ( valueIsBorderBox ) {
				val = elem[ offsetProp ];
			}
		}

		// Normalize "" and auto
		val = parseFloat( val ) || 0;

		// Adjust for the element's box model
		return ( val +
			boxModelAdjustment(
				elem,
				dimension,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles,

				// Provide the current computed size to request scroll gutter calculation (gh-3589)
				val
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"gridArea": true,
			"gridColumn": true,
			"gridColumnEnd": true,
			"gridColumnStart": true,
			"gridRow": true,
			"gridRowEnd": true,
			"gridRowStart": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = camelCase( name ),
				isCustomProp = rcustomProp.test( name ),
				style = elem.style;

			// Make sure that we're working with the right name. We don't
			// want to query the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
				// "px" to a few hardcoded values.
				if ( type === "number" && !isCustomProp ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					if ( isCustomProp ) {
						style.setProperty( name, value );
					} else {
						style[ name ] = value;
					}
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = camelCase( name ),
				isCustomProp = rcustomProp.test( name );

			// Make sure that we're working with the right name. We don't
			// want to modify the value if it is a CSS custom property
			// since they are user-defined.
			if ( !isCustomProp ) {
				name = finalPropName( origName );
			}

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}

			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, dimension ) {
		jQuery.cssHooks[ dimension ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, dimension, extra );
							} ) :
							getWidthOrHeight( elem, dimension, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = getStyles( elem ),

					// Only read styles.position if the test has a chance to fail
					// to avoid forcing a reflow.
					scrollboxSizeBuggy = !support.scrollboxSize() &&
						styles.position === "absolute",

					// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
					boxSizingNeeded = scrollboxSizeBuggy || extra,
					isBorderBox = boxSizingNeeded &&
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					subtract = extra ?
						boxModelAdjustment(
							elem,
							dimension,
							extra,
							isBorderBox,
							styles
						) :
						0;

				// Account for unreliable border-box dimensions by comparing offset* to computed and
				// faking a content-box to get border and padding (gh-3699)
				if ( isBorderBox && scrollboxSizeBuggy ) {
					subtract -= Math.ceil(
						elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
						parseFloat( styles[ dimension ] ) -
						boxModelAdjustment( elem, dimension, "border", false, styles ) -
						0.5
					);
				}

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ dimension ] = value;
					value = jQuery.css( elem, dimension );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( prefix !== "margin" ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( Array.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 && (
						jQuery.cssHooks[ tween.prop ] ||
						tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, inProgress,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function schedule() {
		if ( inProgress ) {
			if ( document.hidden === false && window.requestAnimationFrame ) {
				window.requestAnimationFrame( schedule );
			} else {
				window.setTimeout( schedule, jQuery.fx.interval );
			}

			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = Date.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 15
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY and Edge just mirrors
			// the overflowX value there.
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( Array.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				// If there's more to do, yield
				if ( percent < 1 && length ) {
					return remaining;
				}

				// If this was an empty animation, synthesize a final progress notification
				if ( !length ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
				}

				// Resolve the animation and report its conclusion
				deferred.resolveWith( elem, [ animation ] );
				return false;
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						result.stop.bind( result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		// Attach callbacks from options
		animation
			.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		return animation;
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnothtmlwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !isFunction( easing ) && easing
		};

		// Go to the end state if fx are off
		if ( jQuery.fx.off ) {
			opt.duration = 0;

		} else {
			if ( typeof opt.duration !== "number" ) {
				if ( opt.duration in jQuery.fx.speeds ) {
					opt.duration = jQuery.fx.speeds[ opt.duration ];

				} else {
					opt.duration = jQuery.fx.speeds._default;
				}
			}
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = Date.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Run the timer and safely remove it when done (allowing for external removal)
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		jQuery.fx.start();
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( inProgress ) {
			return;
		}

		inProgress = true;
		schedule();
	};

	jQuery.fx.stop = function() {
		inProgress = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,

				// Attribute names can contain non-HTML whitespace characters
				// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
				attrNames = value && value.match( rnothtmlwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					if ( tabindex ) {
						return parseInt( tabindex, 10 );
					}

					if (
						rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) &&
						elem.href
					) {
						return 0;
					}

					return -1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	// eslint rule "no-unused-expressions" is disabled for this code
	// since it considers such accessions noop
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {

				/* eslint no-unused-expressions: "off" */

				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




		// Strip and collapse whitespace according to HTML spec
		// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
		function stripAndCollapse( value ) {
			var tokens = value.match( rnothtmlwhite ) || [];
			return tokens.join( " " );
		}


	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	function classesToArray( value ) {
		if ( Array.isArray( value ) ) {
			return value;
		}
		if ( typeof value === "string" ) {
			return value.match( rnothtmlwhite ) || [];
		}
		return [];
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			classes = classesToArray( value );

			if ( classes.length ) {
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			classes = classesToArray( value );

			if ( classes.length ) {
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = stripAndCollapse( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value,
				isValidValue = type === "string" || Array.isArray( value );

			if ( typeof stateVal === "boolean" && isValidValue ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( isValidValue ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = classesToArray( value );

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
						return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, valueIsFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					// Handle most common string cases
					if ( typeof ret === "string" ) {
						return ret.replace( rreturn, "" );
					}

					// Handle cases where value is null/undef or number
					return ret == null ? "" : ret;
				}

				return;
			}

			valueIsFunction = isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( valueIsFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( Array.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						stripAndCollapse( jQuery.text( elem ) );
				}
			},
			select: {
				get: function( elem ) {
					var value, option, i,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length;

					if ( index < 0 ) {
						i = max;

					} else {
						i = one ? index : 0;
					}

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( Array.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	support.focusin = "onfocusin" in window;


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		stopPropagationCallback = function( e ) {
			e.stopPropagation();
		};

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = lastElement = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
				lastElement = cur;
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;

						if ( event.isPropagationStopped() ) {
							lastElement.addEventListener( type, stopPropagationCallback );
						}

						elem[ type ]();

						if ( event.isPropagationStopped() ) {
							lastElement.removeEventListener( type, stopPropagationCallback );
						}

						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = Date.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( Array.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && toType( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		if ( a == null ) {
			return "";
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				if ( val == null ) {
					return null;
				}

				if ( Array.isArray( val ) ) {
					return jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} );
				}

				return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rantiCache = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

			if ( isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
										( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
											.concat( match[ 2 ] );
								}
							}
							match = responseHeaders[ key.toLowerCase() + " " ];
						}
						return match == null ? null : match.join( ", " );
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 15
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available and should be processed, append data to url
				if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add or update anti-cache param if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rantiCache, "$1" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url, options ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,

			// Only evaluate the response if it is successful (gh-4126)
			// dataFilter is not invoked for failure responses, so using it instead
			// of the default converter is kludgy but it works.
			converters: {
				"text script": function() {}
			},
			dataFilter: function( response ) {
				jQuery.globalEval( response, options );
			}
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var htmlIsFunction = isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.ontimeout =
										xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain or forced-by-attrs requests
		if ( s.crossDomain || s.scriptAttrs ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" )
						.attr( s.scriptAttrs || {} )
						.prop( { charset: s.scriptCharset, src: s.url } )
						.on( "load error", callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						} );

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = stripAndCollapse( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {

		// offset() relates an element's border box to the document origin
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var rect, win,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			// Get document-relative position by adding viewport scroll to viewport-relative gBCR
			rect = elem.getBoundingClientRect();
			win = elem.ownerDocument.defaultView;
			return {
				top: rect.top + win.pageYOffset,
				left: rect.left + win.pageXOffset
			};
		},

		// position() relates an element's margin box to its offset parent's padding box
		// This corresponds to the behavior of CSS absolute positioning
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset, doc,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// position:fixed elements are offset from the viewport, which itself always has zero offset
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume position:fixed implies availability of getBoundingClientRect
				offset = elem.getBoundingClientRect();

			} else {
				offset = this.offset();

				// Account for the *real* offset parent, which can be the document or its root element
				// when a statically positioned element is identified
				doc = elem.ownerDocument;
				offsetParent = elem.offsetParent || doc.documentElement;
				while ( offsetParent &&
					( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
					jQuery.css( offsetParent, "position" ) === "static" ) {

					offsetParent = offsetParent.parentNode;
				}
				if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

					// Incorporate borders into its offset, since they are outside its content origin
					parentOffset = jQuery( offsetParent ).offset();
					parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
					parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
				}
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {

				// Coalesce documents and windows
				var win;
				if ( isWindow( elem ) ) {
					win = elem;
				} else if ( elem.nodeType === 9 ) {
					win = elem.defaultView;
				}

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	// Bind a function to a context, optionally partially applying any
	// arguments.
	// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
	// However, it is not slated for removal any time soon
	jQuery.proxy = function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	};

	jQuery.holdReady = function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	};
	jQuery.isArray = Array.isArray;
	jQuery.parseJSON = JSON.parse;
	jQuery.nodeName = nodeName;
	jQuery.isFunction = isFunction;
	jQuery.isWindow = isWindow;
	jQuery.camelCase = camelCase;
	jQuery.type = toType;

	jQuery.now = Date.now;

	jQuery.isNumeric = function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	};




	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}




	return jQuery;
	} );
	});

	function _typeof(obj) {
	  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	    _typeof = function (obj) {
	      return typeof obj;
	    };
	  } else {
	    _typeof = function (obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	    };
	  }

	  return _typeof(obj);
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) _setPrototypeOf(subClass, superClass);
	}

	function _getPrototypeOf(o) {
	  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	function _setPrototypeOf(o, p) {
	  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	function _possibleConstructorReturn(self, call) {
	  if (call && (typeof call === "object" || typeof call === "function")) {
	    return call;
	  }

	  return _assertThisInitialized(self);
	}

	function _superPropBase(object, property) {
	  while (!Object.prototype.hasOwnProperty.call(object, property)) {
	    object = _getPrototypeOf(object);
	    if (object === null) break;
	  }

	  return object;
	}

	function _get(target, property, receiver) {
	  if (typeof Reflect !== "undefined" && Reflect.get) {
	    _get = Reflect.get;
	  } else {
	    _get = function _get(target, property, receiver) {
	      var base = _superPropBase(target, property);

	      if (!base) return;
	      var desc = Object.getOwnPropertyDescriptor(base, property);

	      if (desc.get) {
	        return desc.get.call(receiver);
	      }

	      return desc.value;
	    };
	  }

	  return _get(target, property, receiver || target);
	}

	/**
	 * Returns a boolean for RTL support
	 */

	function rtl() {
	  return jquery('html').attr('dir') === 'rtl';
	}
	/**
	 * returns a random base-36 uid with namespacing
	 * @function
	 * @param {Number} length - number of random base-36 digits desired. Increase for more random strings.
	 * @param {String} namespace - name of plugin to be incorporated in uid, optional.
	 * @default {String} '' - if no plugin name is provided, nothing is appended to the uid.
	 * @returns {String} - unique id
	 */


	function GetYoDigits(length, namespace) {
	  length = length || 6;
	  return Math.round(Math.pow(36, length + 1) - Math.random() * Math.pow(36, length)).toString(36).slice(1) + (namespace ? "-".concat(namespace) : '');
	}
	/**
	 * Escape a string so it can be used as a regexp pattern
	 * @function
	 * @see https://stackoverflow.com/a/9310752/4317384
	 *
	 * @param {String} str - string to escape.
	 * @returns {String} - escaped string
	 */


	function RegExpEscape(str) {
	  return str.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
	}

	function transitionend($elem) {
	  var transitions = {
	    'transition': 'transitionend',
	    'WebkitTransition': 'webkitTransitionEnd',
	    'MozTransition': 'transitionend',
	    'OTransition': 'otransitionend'
	  };
	  var elem = document.createElement('div'),
	      end;

	  for (var t in transitions) {
	    if (typeof elem.style[t] !== 'undefined') {
	      end = transitions[t];
	    }
	  }

	  if (end) {
	    return end;
	  } else {
	    end = setTimeout(function () {
	      $elem.triggerHandler('transitionend', [$elem]);
	    }, 1);
	    return 'transitionend';
	  }
	}
	/**
	 * Return an event type to listen for window load.
	 *
	 * If `$elem` is passed, an event will be triggered on `$elem`. If window is already loaded, the event will still be triggered.
	 * If `handler` is passed, attach it to the event on `$elem`.
	 * Calling `onLoad` without handler allows you to get the event type that will be triggered before attaching the handler by yourself.
	 * @function
	 *
	 * @param {Object} [] $elem - jQuery element on which the event will be triggered if passed.
	 * @param {Function} [] handler - function to attach to the event.
	 * @returns {String} - event type that should or will be triggered.
	 */


	function onLoad($elem, handler) {
	  var didLoad = document.readyState === 'complete';
	  var eventType = (didLoad ? '_didLoad' : 'load') + '.zf.util.onLoad';

	  var cb = function cb() {
	    return $elem.triggerHandler(eventType);
	  };

	  if ($elem) {
	    if (handler) $elem.one(eventType, handler);
	    if (didLoad) setTimeout(cb);else jquery(window).one('load', cb);
	  }

	  return eventType;
	}
	/**
	 * Retuns an handler for the `mouseleave` that ignore disappeared mouses.
	 *
	 * If the mouse "disappeared" from the document (like when going on a browser UI element, See https://git.io/zf-11410),
	 * the event is ignored.
	 * - If the `ignoreLeaveWindow` is `true`, the event is ignored when the user actually left the window
	 *   (like by switching to an other window with [Alt]+[Tab]).
	 * - If the `ignoreReappear` is `true`, the event will be ignored when the mouse will reappear later on the document
	 *   outside of the element it left.
	 *
	 * @function
	 *
	 * @param {Function} [] handler - handler for the filtered `mouseleave` event to watch.
	 * @param {Object} [] options - object of options:
	 * - {Boolean} [false] ignoreLeaveWindow - also ignore when the user switched windows.
	 * - {Boolean} [false] ignoreReappear - also ignore when the mouse reappeared outside of the element it left.
	 * @returns {Function} - filtered handler to use to listen on the `mouseleave` event.
	 */


	function ignoreMousedisappear(handler) {
	  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	      _ref$ignoreLeaveWindo = _ref.ignoreLeaveWindow,
	      ignoreLeaveWindow = _ref$ignoreLeaveWindo === void 0 ? false : _ref$ignoreLeaveWindo,
	      _ref$ignoreReappear = _ref.ignoreReappear,
	      ignoreReappear = _ref$ignoreReappear === void 0 ? false : _ref$ignoreReappear;

	  return function leaveEventHandler(eLeave) {
	    for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	      rest[_key - 1] = arguments[_key];
	    }

	    var callback = handler.bind.apply(handler, [this, eLeave].concat(rest)); // The mouse left: call the given callback if the mouse entered elsewhere

	    if (eLeave.relatedTarget !== null) {
	      return callback();
	    } // Otherwise, check if the mouse actually left the window.
	    // In firefox if the user switched between windows, the window sill have the focus by the time
	    // the event is triggered. We have to debounce the event to test this case.


	    setTimeout(function leaveEventDebouncer() {
	      if (!ignoreLeaveWindow && document.hasFocus && !document.hasFocus()) {
	        return callback();
	      } // Otherwise, wait for the mouse to reeapear outside of the element,


	      if (!ignoreReappear) {
	        jquery(document).one('mouseenter', function reenterEventHandler(eReenter) {
	          if (!jquery(eLeave.currentTarget).has(eReenter.target).length) {
	            // Fill where the mouse finally entered.
	            eLeave.relatedTarget = eReenter.target;
	            callback();
	          }
	        });
	      }
	    }, 0);
	  };
	}

	// Authors & copyright(c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. MIT license

	/* eslint-disable */

	window.matchMedia || (window.matchMedia = function () {

	  var styleMedia = window.styleMedia || window.media; // For those that don't support matchMedium

	  if (!styleMedia) {
	    var style = document.createElement('style'),
	        script = document.getElementsByTagName('script')[0],
	        info = null;
	    style.type = 'text/css';
	    style.id = 'matchmediajs-test';

	    if (!script) {
	      document.head.appendChild(style);
	    } else {
	      script.parentNode.insertBefore(style, script);
	    } // 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers


	    info = 'getComputedStyle' in window && window.getComputedStyle(style, null) || style.currentStyle;
	    styleMedia = {
	      matchMedium: function matchMedium(media) {
	        var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }'; // 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers

	        if (style.styleSheet) {
	          style.styleSheet.cssText = text;
	        } else {
	          style.textContent = text;
	        } // Test if media query is true or false


	        return info.width === '1px';
	      }
	    };
	  }

	  return function (media) {
	    return {
	      matches: styleMedia.matchMedium(media || 'all'),
	      media: media || 'all'
	    };
	  };
	}());
	/* eslint-enable */

	var MediaQuery = {
	  queries: [],
	  current: '',

	  /**
	   * Initializes the media query helper, by extracting the breakpoint list from the CSS and activating the breakpoint watcher.
	   * @function
	   * @private
	   */
	  _init: function _init() {
	    var self = this;
	    var $meta = jquery('meta.foundation-mq');

	    if (!$meta.length) {
	      jquery('<meta class="foundation-mq">').appendTo(document.head);
	    }

	    var extractedStyles = jquery('.foundation-mq').css('font-family');
	    var namedQueries;
	    namedQueries = parseStyleToObject(extractedStyles);

	    for (var key in namedQueries) {
	      if (namedQueries.hasOwnProperty(key)) {
	        self.queries.push({
	          name: key,
	          value: "only screen and (min-width: ".concat(namedQueries[key], ")")
	        });
	      }
	    }

	    this.current = this._getCurrentSize();

	    this._watcher();
	  },

	  /**
	   * Checks if the screen is at least as wide as a breakpoint.
	   * @function
	   * @param {String} size - Name of the breakpoint to check.
	   * @returns {Boolean} `true` if the breakpoint matches, `false` if it's smaller.
	   */
	  atLeast: function atLeast(size) {
	    var query = this.get(size);

	    if (query) {
	      return window.matchMedia(query).matches;
	    }

	    return false;
	  },

	  /**
	   * Checks if the screen matches to a breakpoint.
	   * @function
	   * @param {String} size - Name of the breakpoint to check, either 'small only' or 'small'. Omitting 'only' falls back to using atLeast() method.
	   * @returns {Boolean} `true` if the breakpoint matches, `false` if it does not.
	   */
	  is: function is(size) {
	    size = size.trim().split(' ');

	    if (size.length > 1 && size[1] === 'only') {
	      if (size[0] === this._getCurrentSize()) return true;
	    } else {
	      return this.atLeast(size[0]);
	    }

	    return false;
	  },

	  /**
	   * Gets the media query of a breakpoint.
	   * @function
	   * @param {String} size - Name of the breakpoint to get.
	   * @returns {String|null} - The media query of the breakpoint, or `null` if the breakpoint doesn't exist.
	   */
	  get: function get(size) {
	    for (var i in this.queries) {
	      if (this.queries.hasOwnProperty(i)) {
	        var query = this.queries[i];
	        if (size === query.name) return query.value;
	      }
	    }

	    return null;
	  },

	  /**
	   * Gets the current breakpoint name by testing every breakpoint and returning the last one to match (the biggest one).
	   * @function
	   * @private
	   * @returns {String} Name of the current breakpoint.
	   */
	  _getCurrentSize: function _getCurrentSize() {
	    var matched;

	    for (var i = 0; i < this.queries.length; i++) {
	      var query = this.queries[i];

	      if (window.matchMedia(query.value).matches) {
	        matched = query;
	      }
	    }

	    if (_typeof(matched) === 'object') {
	      return matched.name;
	    } else {
	      return matched;
	    }
	  },

	  /**
	   * Activates the breakpoint watcher, which fires an event on the window whenever the breakpoint changes.
	   * @function
	   * @private
	   */
	  _watcher: function _watcher() {
	    var _this = this;

	    jquery(window).off('resize.zf.mediaquery').on('resize.zf.mediaquery', function () {
	      var newSize = _this._getCurrentSize(),
	          currentSize = _this.current;

	      if (newSize !== currentSize) {
	        // Change the current media query
	        _this.current = newSize; // Broadcast the media query change on the window

	        jquery(window).trigger('changed.zf.mediaquery', [newSize, currentSize]);
	      }
	    });
	  }
	}; // Thank you: https://github.com/sindresorhus/query-string

	function parseStyleToObject(str) {
	  var styleObject = {};

	  if (typeof str !== 'string') {
	    return styleObject;
	  }

	  str = str.trim().slice(1, -1); // browsers re-quote string style values

	  if (!str) {
	    return styleObject;
	  }

	  styleObject = str.split('&').reduce(function (ret, param) {
	    var parts = param.replace(/\+/g, ' ').split('=');
	    var key = parts[0];
	    var val = parts[1];
	    key = decodeURIComponent(key); // missing `=` should be `null`:
	    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters

	    val = typeof val === 'undefined' ? null : decodeURIComponent(val);

	    if (!ret.hasOwnProperty(key)) {
	      ret[key] = val;
	    } else if (Array.isArray(ret[key])) {
	      ret[key].push(val);
	    } else {
	      ret[key] = [ret[key], val];
	    }

	    return ret;
	  }, {});
	  return styleObject;
	}

	var FOUNDATION_VERSION = '6.5.3'; // Global Foundation object
	// This is attached to the window, or used as a module for AMD/Browserify

	var Foundation = {
	  version: FOUNDATION_VERSION,

	  /**
	   * Stores initialized plugins.
	   */
	  _plugins: {},

	  /**
	   * Stores generated unique ids for plugin instances
	   */
	  _uuids: [],

	  /**
	   * Defines a Foundation plugin, adding it to the `Foundation` namespace and the list of plugins to initialize when reflowing.
	   * @param {Object} plugin - The constructor of the plugin.
	   */
	  plugin: function plugin(_plugin, name) {
	    // Object key to use when adding to global Foundation object
	    // Examples: Foundation.Reveal, Foundation.OffCanvas
	    var className = name || functionName(_plugin); // Object key to use when storing the plugin, also used to create the identifying data attribute for the plugin
	    // Examples: data-reveal, data-off-canvas

	    var attrName = hyphenate(className); // Add to the Foundation object and the plugins list (for reflowing)

	    this._plugins[attrName] = this[className] = _plugin;
	  },

	  /**
	   * @function
	   * Populates the _uuids array with pointers to each individual plugin instance.
	   * Adds the `zfPlugin` data-attribute to programmatically created plugins to allow use of $(selector).foundation(method) calls.
	   * Also fires the initialization event for each plugin, consolidating repetitive code.
	   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
	   * @param {String} name - the name of the plugin, passed as a camelCased string.
	   * @fires Plugin#init
	   */
	  registerPlugin: function registerPlugin(plugin, name) {
	    var pluginName = name ? hyphenate(name) : functionName(plugin.constructor).toLowerCase();
	    plugin.uuid = GetYoDigits(6, pluginName);

	    if (!plugin.$element.attr("data-".concat(pluginName))) {
	      plugin.$element.attr("data-".concat(pluginName), plugin.uuid);
	    }

	    if (!plugin.$element.data('zfPlugin')) {
	      plugin.$element.data('zfPlugin', plugin);
	    }
	    /**
	     * Fires when the plugin has initialized.
	     * @event Plugin#init
	     */


	    plugin.$element.trigger("init.zf.".concat(pluginName));

	    this._uuids.push(plugin.uuid);

	    return;
	  },

	  /**
	   * @function
	   * Removes the plugins uuid from the _uuids array.
	   * Removes the zfPlugin data attribute, as well as the data-plugin-name attribute.
	   * Also fires the destroyed event for the plugin, consolidating repetitive code.
	   * @param {Object} plugin - an instance of a plugin, usually `this` in context.
	   * @fires Plugin#destroyed
	   */
	  unregisterPlugin: function unregisterPlugin(plugin) {
	    var pluginName = hyphenate(functionName(plugin.$element.data('zfPlugin').constructor));

	    this._uuids.splice(this._uuids.indexOf(plugin.uuid), 1);

	    plugin.$element.removeAttr("data-".concat(pluginName)).removeData('zfPlugin')
	    /**
	     * Fires when the plugin has been destroyed.
	     * @event Plugin#destroyed
	     */
	    .trigger("destroyed.zf.".concat(pluginName));

	    for (var prop in plugin) {
	      plugin[prop] = null; //clean up script to prep for garbage collection.
	    }

	    return;
	  },

	  /**
	   * @function
	   * Causes one or more active plugins to re-initialize, resetting event listeners, recalculating positions, etc.
	   * @param {String} plugins - optional string of an individual plugin key, attained by calling `$(element).data('pluginName')`, or string of a plugin class i.e. `'dropdown'`
	   * @default If no argument is passed, reflow all currently active plugins.
	   */
	  reInit: function reInit(plugins) {
	    var isJQ = plugins instanceof jquery;

	    try {
	      if (isJQ) {
	        plugins.each(function () {
	          jquery(this).data('zfPlugin')._init();
	        });
	      } else {
	        var type = _typeof(plugins),
	            _this = this,
	            fns = {
	          'object': function object(plgs) {
	            plgs.forEach(function (p) {
	              p = hyphenate(p);
	              jquery('[data-' + p + ']').foundation('_init');
	            });
	          },
	          'string': function string() {
	            plugins = hyphenate(plugins);
	            jquery('[data-' + plugins + ']').foundation('_init');
	          },
	          'undefined': function undefined$1() {
	            this['object'](Object.keys(_this._plugins));
	          }
	        };

	        fns[type](plugins);
	      }
	    } catch (err) {
	      console.error(err);
	    } finally {
	      return plugins;
	    }
	  },

	  /**
	   * Initialize plugins on any elements within `elem` (and `elem` itself) that aren't already initialized.
	   * @param {Object} elem - jQuery object containing the element to check inside. Also checks the element itself, unless it's the `document` object.
	   * @param {String|Array} plugins - A list of plugins to initialize. Leave this out to initialize everything.
	   */
	  reflow: function reflow(elem, plugins) {
	    // If plugins is undefined, just grab everything
	    if (typeof plugins === 'undefined') {
	      plugins = Object.keys(this._plugins);
	    } // If plugins is a string, convert it to an array with one item
	    else if (typeof plugins === 'string') {
	        plugins = [plugins];
	      }

	    var _this = this; // Iterate through each plugin


	    jquery.each(plugins, function (i, name) {
	      // Get the current plugin
	      var plugin = _this._plugins[name]; // Localize the search to all elements inside elem, as well as elem itself, unless elem === document

	      var $elem = jquery(elem).find('[data-' + name + ']').addBack('[data-' + name + ']'); // For each plugin found, initialize it

	      $elem.each(function () {
	        var $el = jquery(this),
	            opts = {}; // Don't double-dip on plugins

	        if ($el.data('zfPlugin')) {
	          console.warn("Tried to initialize " + name + " on an element that already has a Foundation plugin.");
	          return;
	        }

	        if ($el.attr('data-options')) {
	          var thing = $el.attr('data-options').split(';').forEach(function (e, i) {
	            var opt = e.split(':').map(function (el) {
	              return el.trim();
	            });
	            if (opt[0]) opts[opt[0]] = parseValue(opt[1]);
	          });
	        }

	        try {
	          $el.data('zfPlugin', new plugin(jquery(this), opts));
	        } catch (er) {
	          console.error(er);
	        } finally {
	          return;
	        }
	      });
	    });
	  },
	  getFnName: functionName,
	  addToJquery: function addToJquery($$$1) {
	    // TODO: consider not making this a jQuery function
	    // TODO: need way to reflow vs. re-initialize

	    /**
	     * The Foundation jQuery method.
	     * @param {String|Array} method - An action to perform on the current jQuery object.
	     */
	    var foundation = function foundation(method) {
	      var type = _typeof(method),
	          $noJS = $$$1('.no-js');

	      if ($noJS.length) {
	        $noJS.removeClass('no-js');
	      }

	      if (type === 'undefined') {
	        //needs to initialize the Foundation object, or an individual plugin.
	        MediaQuery._init();

	        Foundation.reflow(this);
	      } else if (type === 'string') {
	        //an individual method to invoke on a plugin or group of plugins
	        var args = Array.prototype.slice.call(arguments, 1); //collect all the arguments, if necessary

	        var plugClass = this.data('zfPlugin'); //determine the class of plugin

	        if (typeof plugClass !== 'undefined' && typeof plugClass[method] !== 'undefined') {
	          //make sure both the class and method exist
	          if (this.length === 1) {
	            //if there's only one, call it directly.
	            plugClass[method].apply(plugClass, args);
	          } else {
	            this.each(function (i, el) {
	              //otherwise loop through the jQuery collection and invoke the method on each
	              plugClass[method].apply($$$1(el).data('zfPlugin'), args);
	            });
	          }
	        } else {
	          //error for no class or no method
	          throw new ReferenceError("We're sorry, '" + method + "' is not an available method for " + (plugClass ? functionName(plugClass) : 'this element') + '.');
	        }
	      } else {
	        //error for invalid argument type
	        throw new TypeError("We're sorry, ".concat(type, " is not a valid parameter. You must use a string representing the method you wish to invoke."));
	      }

	      return this;
	    };

	    $$$1.fn.foundation = foundation;
	    return $$$1;
	  }
	};
	Foundation.util = {
	  /**
	   * Function for applying a debounce effect to a function call.
	   * @function
	   * @param {Function} func - Function to be called at end of timeout.
	   * @param {Number} delay - Time in ms to delay the call of `func`.
	   * @returns function
	   */
	  throttle: function throttle(func, delay) {
	    var timer = null;
	    return function () {
	      var context = this,
	          args = arguments;

	      if (timer === null) {
	        timer = setTimeout(function () {
	          func.apply(context, args);
	          timer = null;
	        }, delay);
	      }
	    };
	  }
	};
	window.Foundation = Foundation; // Polyfill for requestAnimationFrame

	(function () {
	  if (!Date.now || !window.Date.now) window.Date.now = Date.now = function () {
	    return new Date().getTime();
	  };
	  var vendors = ['webkit', 'moz'];

	  for (var i = 0; i < vendors.length && !window.requestAnimationFrame; ++i) {
	    var vp = vendors[i];
	    window.requestAnimationFrame = window[vp + 'RequestAnimationFrame'];
	    window.cancelAnimationFrame = window[vp + 'CancelAnimationFrame'] || window[vp + 'CancelRequestAnimationFrame'];
	  }

	  if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
	    var lastTime = 0;

	    window.requestAnimationFrame = function (callback) {
	      var now = Date.now();
	      var nextTime = Math.max(lastTime + 16, now);
	      return setTimeout(function () {
	        callback(lastTime = nextTime);
	      }, nextTime - now);
	    };

	    window.cancelAnimationFrame = clearTimeout;
	  }
	  /**
	   * Polyfill for performance.now, required by rAF
	   */


	  if (!window.performance || !window.performance.now) {
	    window.performance = {
	      start: Date.now(),
	      now: function now() {
	        return Date.now() - this.start;
	      }
	    };
	  }
	})();

	if (!Function.prototype.bind) {
	  Function.prototype.bind = function (oThis) {
	    if (typeof this !== 'function') {
	      // closest thing possible to the ECMAScript 5
	      // internal IsCallable function
	      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
	    }

	    var aArgs = Array.prototype.slice.call(arguments, 1),
	        fToBind = this,
	        fNOP = function fNOP() {},
	        fBound = function fBound() {
	      return fToBind.apply(this instanceof fNOP ? this : oThis, aArgs.concat(Array.prototype.slice.call(arguments)));
	    };

	    if (this.prototype) {
	      // native functions don't have a prototype
	      fNOP.prototype = this.prototype;
	    }

	    fBound.prototype = new fNOP();
	    return fBound;
	  };
	} // Polyfill to get the name of a function in IE9


	function functionName(fn) {
	  if (typeof Function.prototype.name === 'undefined') {
	    var funcNameRegex = /function\s([^(]{1,})\(/;
	    var results = funcNameRegex.exec(fn.toString());
	    return results && results.length > 1 ? results[1].trim() : "";
	  } else if (typeof fn.prototype === 'undefined') {
	    return fn.constructor.name;
	  } else {
	    return fn.prototype.constructor.name;
	  }
	}

	function parseValue(str) {
	  if ('true' === str) return true;else if ('false' === str) return false;else if (!isNaN(str * 1)) return parseFloat(str);
	  return str;
	} // Convert PascalCase to kebab-case
	// Thank you: http://stackoverflow.com/a/8955580


	function hyphenate(str) {
	  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	}

	var Box = {
	  ImNotTouchingYou: ImNotTouchingYou,
	  OverlapArea: OverlapArea,
	  GetDimensions: GetDimensions,
	  GetOffsets: GetOffsets,
	  GetExplicitOffsets: GetExplicitOffsets
	  /**
	   * Compares the dimensions of an element to a container and determines collision events with container.
	   * @function
	   * @param {jQuery} element - jQuery object to test for collisions.
	   * @param {jQuery} parent - jQuery object to use as bounding container.
	   * @param {Boolean} lrOnly - set to true to check left and right values only.
	   * @param {Boolean} tbOnly - set to true to check top and bottom values only.
	   * @default if no parent object passed, detects collisions with `window`.
	   * @returns {Boolean} - true if collision free, false if a collision in any direction.
	   */

	};

	function ImNotTouchingYou(element, parent, lrOnly, tbOnly, ignoreBottom) {
	  return OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) === 0;
	}

	function OverlapArea(element, parent, lrOnly, tbOnly, ignoreBottom) {
	  var eleDims = GetDimensions(element),
	      topOver,
	      bottomOver,
	      leftOver,
	      rightOver;

	  if (parent) {
	    var parDims = GetDimensions(parent);
	    bottomOver = parDims.height + parDims.offset.top - (eleDims.offset.top + eleDims.height);
	    topOver = eleDims.offset.top - parDims.offset.top;
	    leftOver = eleDims.offset.left - parDims.offset.left;
	    rightOver = parDims.width + parDims.offset.left - (eleDims.offset.left + eleDims.width);
	  } else {
	    bottomOver = eleDims.windowDims.height + eleDims.windowDims.offset.top - (eleDims.offset.top + eleDims.height);
	    topOver = eleDims.offset.top - eleDims.windowDims.offset.top;
	    leftOver = eleDims.offset.left - eleDims.windowDims.offset.left;
	    rightOver = eleDims.windowDims.width - (eleDims.offset.left + eleDims.width);
	  }

	  bottomOver = ignoreBottom ? 0 : Math.min(bottomOver, 0);
	  topOver = Math.min(topOver, 0);
	  leftOver = Math.min(leftOver, 0);
	  rightOver = Math.min(rightOver, 0);

	  if (lrOnly) {
	    return leftOver + rightOver;
	  }

	  if (tbOnly) {
	    return topOver + bottomOver;
	  } // use sum of squares b/c we care about overlap area.


	  return Math.sqrt(topOver * topOver + bottomOver * bottomOver + leftOver * leftOver + rightOver * rightOver);
	}
	/**
	 * Uses native methods to return an object of dimension values.
	 * @function
	 * @param {jQuery || HTML} element - jQuery object or DOM element for which to get the dimensions. Can be any element other that document or window.
	 * @returns {Object} - nested object of integer pixel values
	 * TODO - if element is window, return only those values.
	 */


	function GetDimensions(elem) {
	  elem = elem.length ? elem[0] : elem;

	  if (elem === window || elem === document) {
	    throw new Error("I'm sorry, Dave. I'm afraid I can't do that.");
	  }

	  var rect = elem.getBoundingClientRect(),
	      parRect = elem.parentNode.getBoundingClientRect(),
	      winRect = document.body.getBoundingClientRect(),
	      winY = window.pageYOffset,
	      winX = window.pageXOffset;
	  return {
	    width: rect.width,
	    height: rect.height,
	    offset: {
	      top: rect.top + winY,
	      left: rect.left + winX
	    },
	    parentDims: {
	      width: parRect.width,
	      height: parRect.height,
	      offset: {
	        top: parRect.top + winY,
	        left: parRect.left + winX
	      }
	    },
	    windowDims: {
	      width: winRect.width,
	      height: winRect.height,
	      offset: {
	        top: winY,
	        left: winX
	      }
	    }
	  };
	}
	/**
	 * Returns an object of top and left integer pixel values for dynamically rendered elements,
	 * such as: Tooltip, Reveal, and Dropdown. Maintained for backwards compatibility, and where
	 * you don't know alignment, but generally from
	 * 6.4 forward you should use GetExplicitOffsets, as GetOffsets conflates position and alignment.
	 * @function
	 * @param {jQuery} element - jQuery object for the element being positioned.
	 * @param {jQuery} anchor - jQuery object for the element's anchor point.
	 * @param {String} position - a string relating to the desired position of the element, relative to it's anchor
	 * @param {Number} vOffset - integer pixel value of desired vertical separation between anchor and element.
	 * @param {Number} hOffset - integer pixel value of desired horizontal separation between anchor and element.
	 * @param {Boolean} isOverflow - if a collision event is detected, sets to true to default the element to full width - any desired offset.
	 * TODO alter/rewrite to work with `em` values as well/instead of pixels
	 */


	function GetOffsets(element, anchor, position, vOffset, hOffset, isOverflow) {
	  console.log("NOTE: GetOffsets is deprecated in favor of GetExplicitOffsets and will be removed in 6.5");

	  switch (position) {
	    case 'top':
	      return rtl() ? GetExplicitOffsets(element, anchor, 'top', 'left', vOffset, hOffset, isOverflow) : GetExplicitOffsets(element, anchor, 'top', 'right', vOffset, hOffset, isOverflow);

	    case 'bottom':
	      return rtl() ? GetExplicitOffsets(element, anchor, 'bottom', 'left', vOffset, hOffset, isOverflow) : GetExplicitOffsets(element, anchor, 'bottom', 'right', vOffset, hOffset, isOverflow);

	    case 'center top':
	      return GetExplicitOffsets(element, anchor, 'top', 'center', vOffset, hOffset, isOverflow);

	    case 'center bottom':
	      return GetExplicitOffsets(element, anchor, 'bottom', 'center', vOffset, hOffset, isOverflow);

	    case 'center left':
	      return GetExplicitOffsets(element, anchor, 'left', 'center', vOffset, hOffset, isOverflow);

	    case 'center right':
	      return GetExplicitOffsets(element, anchor, 'right', 'center', vOffset, hOffset, isOverflow);

	    case 'left bottom':
	      return GetExplicitOffsets(element, anchor, 'bottom', 'left', vOffset, hOffset, isOverflow);

	    case 'right bottom':
	      return GetExplicitOffsets(element, anchor, 'bottom', 'right', vOffset, hOffset, isOverflow);
	    // Backwards compatibility... this along with the reveal and reveal full
	    // classes are the only ones that didn't reference anchor

	    case 'center':
	      return {
	        left: $eleDims.windowDims.offset.left + $eleDims.windowDims.width / 2 - $eleDims.width / 2 + hOffset,
	        top: $eleDims.windowDims.offset.top + $eleDims.windowDims.height / 2 - ($eleDims.height / 2 + vOffset)
	      };

	    case 'reveal':
	      return {
	        left: ($eleDims.windowDims.width - $eleDims.width) / 2 + hOffset,
	        top: $eleDims.windowDims.offset.top + vOffset
	      };

	    case 'reveal full':
	      return {
	        left: $eleDims.windowDims.offset.left,
	        top: $eleDims.windowDims.offset.top
	      };
	      break;

	    default:
	      return {
	        left: rtl() ? $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset : $anchorDims.offset.left + hOffset,
	        top: $anchorDims.offset.top + $anchorDims.height + vOffset
	      };
	  }
	}

	function GetExplicitOffsets(element, anchor, position, alignment, vOffset, hOffset, isOverflow) {
	  var $eleDims = GetDimensions(element),
	      $anchorDims = anchor ? GetDimensions(anchor) : null;
	  var topVal, leftVal; // set position related attribute

	  switch (position) {
	    case 'top':
	      topVal = $anchorDims.offset.top - ($eleDims.height + vOffset);
	      break;

	    case 'bottom':
	      topVal = $anchorDims.offset.top + $anchorDims.height + vOffset;
	      break;

	    case 'left':
	      leftVal = $anchorDims.offset.left - ($eleDims.width + hOffset);
	      break;

	    case 'right':
	      leftVal = $anchorDims.offset.left + $anchorDims.width + hOffset;
	      break;
	  } // set alignment related attribute


	  switch (position) {
	    case 'top':
	    case 'bottom':
	      switch (alignment) {
	        case 'left':
	          leftVal = $anchorDims.offset.left + hOffset;
	          break;

	        case 'right':
	          leftVal = $anchorDims.offset.left - $eleDims.width + $anchorDims.width - hOffset;
	          break;

	        case 'center':
	          leftVal = isOverflow ? hOffset : $anchorDims.offset.left + $anchorDims.width / 2 - $eleDims.width / 2 + hOffset;
	          break;
	      }

	      break;

	    case 'right':
	    case 'left':
	      switch (alignment) {
	        case 'bottom':
	          topVal = $anchorDims.offset.top - vOffset + $anchorDims.height - $eleDims.height;
	          break;

	        case 'top':
	          topVal = $anchorDims.offset.top + vOffset;
	          break;

	        case 'center':
	          topVal = $anchorDims.offset.top + vOffset + $anchorDims.height / 2 - $eleDims.height / 2;
	          break;
	      }

	      break;
	  }

	  return {
	    top: topVal,
	    left: leftVal
	  };
	}

	/**
	 * Runs a callback function when images are fully loaded.
	 * @param {Object} images - Image(s) to check if loaded.
	 * @param {Func} callback - Function to execute when image is fully loaded.
	 */

	function onImagesLoaded(images, callback) {
	  var unloaded = images.length;

	  if (unloaded === 0) {
	    callback();
	  }

	  images.each(function () {
	    // Check if image is loaded
	    if (this.complete && typeof this.naturalWidth !== 'undefined') {
	      singleImageLoaded();
	    } else {
	      // If the above check failed, simulate loading on detached element.
	      var image = new Image(); // Still count image as loaded if it finalizes with an error.

	      var events = "load.zf.images error.zf.images";
	      jquery(image).one(events, function me(event) {
	        // Unbind the event listeners. We're using 'one' but only one of the two events will have fired.
	        jquery(this).off(events, me);
	        singleImageLoaded();
	      });
	      image.src = jquery(this).attr('src');
	    }
	  });

	  function singleImageLoaded() {
	    unloaded--;

	    if (unloaded === 0) {
	      callback();
	    }
	  }
	}

	/*******************************************
	 *                                         *
	 * This util was created by Marius Olbertz *
	 * Please thank Marius on GitHub /owlbertz *
	 * or the web http://www.mariusolbertz.de/ *
	 *                                         *
	 ******************************************/
	var keyCodes = {
	  9: 'TAB',
	  13: 'ENTER',
	  27: 'ESCAPE',
	  32: 'SPACE',
	  35: 'END',
	  36: 'HOME',
	  37: 'ARROW_LEFT',
	  38: 'ARROW_UP',
	  39: 'ARROW_RIGHT',
	  40: 'ARROW_DOWN'
	};
	var commands = {}; // Functions pulled out to be referenceable from internals

	function findFocusable($element) {
	  if (!$element) {
	    return false;
	  }

	  return $element.find('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]').filter(function () {
	    if (!jquery(this).is(':visible') || jquery(this).attr('tabindex') < 0) {
	      return false;
	    } //only have visible elements and those that have a tabindex greater or equal 0


	    return true;
	  });
	}

	function parseKey(event) {
	  var key = keyCodes[event.which || event.keyCode] || String.fromCharCode(event.which).toUpperCase(); // Remove un-printable characters, e.g. for `fromCharCode` calls for CTRL only events

	  key = key.replace(/\W+/, '');
	  if (event.shiftKey) key = "SHIFT_".concat(key);
	  if (event.ctrlKey) key = "CTRL_".concat(key);
	  if (event.altKey) key = "ALT_".concat(key); // Remove trailing underscore, in case only modifiers were used (e.g. only `CTRL_ALT`)

	  key = key.replace(/_$/, '');
	  return key;
	}

	var Keyboard = {
	  keys: getKeyCodes(keyCodes),

	  /**
	   * Parses the (keyboard) event and returns a String that represents its key
	   * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
	   * @param {Event} event - the event generated by the event handler
	   * @return String key - String that represents the key pressed
	   */
	  parseKey: parseKey,

	  /**
	   * Handles the given (keyboard) event
	   * @param {Event} event - the event generated by the event handler
	   * @param {String} component - Foundation component's name, e.g. Slider or Reveal
	   * @param {Objects} functions - collection of functions that are to be executed
	   */
	  handleKey: function handleKey(event, component, functions) {
	    var commandList = commands[component],
	        keyCode = this.parseKey(event),
	        cmds,
	        command,
	        fn;
	    if (!commandList) return console.warn('Component not defined!');

	    if (typeof commandList.ltr === 'undefined') {
	      // this component does not differentiate between ltr and rtl
	      cmds = commandList; // use plain list
	    } else {
	      // merge ltr and rtl: if document is rtl, rtl overwrites ltr and vice versa
	      if (rtl()) cmds = jquery.extend({}, commandList.ltr, commandList.rtl);else cmds = jquery.extend({}, commandList.rtl, commandList.ltr);
	    }

	    command = cmds[keyCode];
	    fn = functions[command];

	    if (fn && typeof fn === 'function') {
	      // execute function  if exists
	      var returnValue = fn.apply();

	      if (functions.handled || typeof functions.handled === 'function') {
	        // execute function when event was handled
	        functions.handled(returnValue);
	      }
	    } else {
	      if (functions.unhandled || typeof functions.unhandled === 'function') {
	        // execute function when event was not handled
	        functions.unhandled();
	      }
	    }
	  },

	  /**
	   * Finds all focusable elements within the given `$element`
	   * @param {jQuery} $element - jQuery object to search within
	   * @return {jQuery} $focusable - all focusable elements within `$element`
	   */
	  findFocusable: findFocusable,

	  /**
	   * Returns the component name name
	   * @param {Object} component - Foundation component, e.g. Slider or Reveal
	   * @return String componentName
	   */
	  register: function register(componentName, cmds) {
	    commands[componentName] = cmds;
	  },
	  // TODO9438: These references to Keyboard need to not require global. Will 'this' work in this context?
	  //

	  /**
	   * Traps the focus in the given element.
	   * @param  {jQuery} $element  jQuery object to trap the foucs into.
	   */
	  trapFocus: function trapFocus($element) {
	    var $focusable = findFocusable($element),
	        $firstFocusable = $focusable.eq(0),
	        $lastFocusable = $focusable.eq(-1);
	    $element.on('keydown.zf.trapfocus', function (event) {
	      if (event.target === $lastFocusable[0] && parseKey(event) === 'TAB') {
	        event.preventDefault();
	        $firstFocusable.focus();
	      } else if (event.target === $firstFocusable[0] && parseKey(event) === 'SHIFT_TAB') {
	        event.preventDefault();
	        $lastFocusable.focus();
	      }
	    });
	  },

	  /**
	   * Releases the trapped focus from the given element.
	   * @param  {jQuery} $element  jQuery object to release the focus for.
	   */
	  releaseFocus: function releaseFocus($element) {
	    $element.off('keydown.zf.trapfocus');
	  }
	};
	/*
	 * Constants for easier comparing.
	 * Can be used like Foundation.parseKey(event) === Foundation.keys.SPACE
	 */

	function getKeyCodes(kcs) {
	  var k = {};

	  for (var kc in kcs) {
	    k[kcs[kc]] = kcs[kc];
	  }

	  return k;
	}

	/**
	 * Motion module.
	 * @module foundation.motion
	 */

	var initClasses = ['mui-enter', 'mui-leave'];
	var activeClasses = ['mui-enter-active', 'mui-leave-active'];
	var Motion = {
	  animateIn: function animateIn(element, animation, cb) {
	    animate(true, element, animation, cb);
	  },
	  animateOut: function animateOut(element, animation, cb) {
	    animate(false, element, animation, cb);
	  }
	};

	function Move(duration, elem, fn) {
	  var anim,
	      prog,
	      start = null; // console.log('called');

	  if (duration === 0) {
	    fn.apply(elem);
	    elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
	    return;
	  }

	  function move(ts) {
	    if (!start) start = ts; // console.log(start, ts);

	    prog = ts - start;
	    fn.apply(elem);

	    if (prog < duration) {
	      anim = window.requestAnimationFrame(move, elem);
	    } else {
	      window.cancelAnimationFrame(anim);
	      elem.trigger('finished.zf.animate', [elem]).triggerHandler('finished.zf.animate', [elem]);
	    }
	  }

	  anim = window.requestAnimationFrame(move);
	}
	/**
	 * Animates an element in or out using a CSS transition class.
	 * @function
	 * @private
	 * @param {Boolean} isIn - Defines if the animation is in or out.
	 * @param {Object} element - jQuery or HTML object to animate.
	 * @param {String} animation - CSS class to use.
	 * @param {Function} cb - Callback to run when animation is finished.
	 */


	function animate(isIn, element, animation, cb) {
	  element = jquery(element).eq(0);
	  if (!element.length) return;
	  var initClass = isIn ? initClasses[0] : initClasses[1];
	  var activeClass = isIn ? activeClasses[0] : activeClasses[1]; // Set up the animation

	  reset();
	  element.addClass(animation).css('transition', 'none');
	  requestAnimationFrame(function () {
	    element.addClass(initClass);
	    if (isIn) element.show();
	  }); // Start the animation

	  requestAnimationFrame(function () {
	    element[0].offsetWidth;
	    element.css('transition', '').addClass(activeClass);
	  }); // Clean up the animation when it finishes

	  element.one(transitionend(element), finish); // Hides the element (for out animations), resets the element, and runs a callback

	  function finish() {
	    if (!isIn) element.hide();
	    reset();
	    if (cb) cb.apply(element);
	  } // Resets transitions and removes motion-specific classes


	  function reset() {
	    element[0].style.transitionDuration = 0;
	    element.removeClass("".concat(initClass, " ").concat(activeClass, " ").concat(animation));
	  }
	}

	var Nest = {
	  Feather: function Feather(menu) {
	    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'zf';
	    menu.attr('role', 'menubar');
	    var items = menu.find('li').attr({
	      'role': 'menuitem'
	    }),
	        subMenuClass = "is-".concat(type, "-submenu"),
	        subItemClass = "".concat(subMenuClass, "-item"),
	        hasSubClass = "is-".concat(type, "-submenu-parent"),
	        applyAria = type !== 'accordion'; // Accordions handle their own ARIA attriutes.

	    items.each(function () {
	      var $item = jquery(this),
	          $sub = $item.children('ul');

	      if ($sub.length) {
	        $item.addClass(hasSubClass);

	        if (applyAria) {
	          $item.attr({
	            'aria-haspopup': true,
	            'aria-label': $item.children('a:first').text()
	          }); // Note:  Drilldowns behave differently in how they hide, and so need
	          // additional attributes.  We should look if this possibly over-generalized
	          // utility (Nest) is appropriate when we rework menus in 6.4

	          if (type === 'drilldown') {
	            $item.attr({
	              'aria-expanded': false
	            });
	          }
	        }

	        $sub.addClass("submenu ".concat(subMenuClass)).attr({
	          'data-submenu': '',
	          'role': 'menubar'
	        });

	        if (type === 'drilldown') {
	          $sub.attr({
	            'aria-hidden': true
	          });
	        }
	      }

	      if ($item.parent('[data-submenu]').length) {
	        $item.addClass("is-submenu-item ".concat(subItemClass));
	      }
	    });
	    return;
	  },
	  Burn: function Burn(menu, type) {
	    var //items = menu.find('li'),
	    subMenuClass = "is-".concat(type, "-submenu"),
	        subItemClass = "".concat(subMenuClass, "-item"),
	        hasSubClass = "is-".concat(type, "-submenu-parent");
	    menu.find('>li, > li > ul, .menu, .menu > li, [data-submenu] > li').removeClass("".concat(subMenuClass, " ").concat(subItemClass, " ").concat(hasSubClass, " is-submenu-item submenu is-active")).removeAttr('data-submenu').css('display', '');
	  }
	};

	function Timer(elem, options, cb) {
	  var _this = this,
	      duration = options.duration,
	      //options is an object for easily adding features later.
	  nameSpace = Object.keys(elem.data())[0] || 'timer',
	      remain = -1,
	      start,
	      timer;

	  this.isPaused = false;

	  this.restart = function () {
	    remain = -1;
	    clearTimeout(timer);
	    this.start();
	  };

	  this.start = function () {
	    this.isPaused = false; // if(!elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.

	    clearTimeout(timer);
	    remain = remain <= 0 ? duration : remain;
	    elem.data('paused', false);
	    start = Date.now();
	    timer = setTimeout(function () {
	      if (options.infinite) {
	        _this.restart(); //rerun the timer.

	      }

	      if (cb && typeof cb === 'function') {
	        cb();
	      }
	    }, remain);
	    elem.trigger("timerstart.zf.".concat(nameSpace));
	  };

	  this.pause = function () {
	    this.isPaused = true; //if(elem.data('paused')){ return false; }//maybe implement this sanity check if used for other things.

	    clearTimeout(timer);
	    elem.data('paused', true);
	    var end = Date.now();
	    remain = remain - (end - start);
	    elem.trigger("timerpaused.zf.".concat(nameSpace));
	  };
	}

	var Touch = {};
	var startPosX,
	    startPosY,
	    startTime,
	    elapsedTime,
	    startEvent,
	    isMoving = false,
	    didMoved = false;

	function onTouchEnd(e) {
	  this.removeEventListener('touchmove', onTouchMove);
	  this.removeEventListener('touchend', onTouchEnd); // If the touch did not move, consider it as a "tap"

	  if (!didMoved) {
	    var tapEvent = jquery.Event('tap', startEvent || e);
	    jquery(this).trigger(tapEvent);
	  }

	  startEvent = null;
	  isMoving = false;
	  didMoved = false;
	}

	function onTouchMove(e) {
	  if (jquery.spotSwipe.preventDefault) {
	    e.preventDefault();
	  }

	  if (isMoving) {
	    var x = e.touches[0].pageX;
	    var y = e.touches[0].pageY;
	    var dx = startPosX - x;
	    var dir;
	    didMoved = true;
	    elapsedTime = new Date().getTime() - startTime;

	    if (Math.abs(dx) >= jquery.spotSwipe.moveThreshold && elapsedTime <= jquery.spotSwipe.timeThreshold) {
	      dir = dx > 0 ? 'left' : 'right';
	    } // else if(Math.abs(dy) >= $.spotSwipe.moveThreshold && elapsedTime <= $.spotSwipe.timeThreshold) {
	    //   dir = dy > 0 ? 'down' : 'up';
	    // }


	    if (dir) {
	      e.preventDefault();
	      onTouchEnd.apply(this, arguments);
	      jquery(this).trigger(jquery.Event('swipe', e), dir).trigger(jquery.Event("swipe".concat(dir), e));
	    }
	  }
	}

	function onTouchStart(e) {
	  if (e.touches.length == 1) {
	    startPosX = e.touches[0].pageX;
	    startPosY = e.touches[0].pageY;
	    startEvent = e;
	    isMoving = true;
	    didMoved = false;
	    startTime = new Date().getTime();
	    this.addEventListener('touchmove', onTouchMove, false);
	    this.addEventListener('touchend', onTouchEnd, false);
	  }
	}

	function init() {
	  this.addEventListener && this.addEventListener('touchstart', onTouchStart, false);
	}

	var SpotSwipe =
	/*#__PURE__*/
	function () {
	  function SpotSwipe($$$1) {
	    _classCallCheck(this, SpotSwipe);

	    this.version = '1.0.0';
	    this.enabled = 'ontouchstart' in document.documentElement;
	    this.preventDefault = false;
	    this.moveThreshold = 75;
	    this.timeThreshold = 200;
	    this.$ = $$$1;

	    this._init();
	  }

	  _createClass(SpotSwipe, [{
	    key: "_init",
	    value: function _init() {
	      var $$$1 = this.$;
	      $$$1.event.special.swipe = {
	        setup: init
	      };
	      $$$1.event.special.tap = {
	        setup: init
	      };
	      $$$1.each(['left', 'up', 'down', 'right'], function () {
	        $$$1.event.special["swipe".concat(this)] = {
	          setup: function setup() {
	            $$$1(this).on('swipe', $$$1.noop);
	          }
	        };
	      });
	    }
	  }]);

	  return SpotSwipe;
	}();
	/****************************************************
	 * As far as I can tell, both setupSpotSwipe and    *
	 * setupTouchHandler should be idempotent,          *
	 * because they directly replace functions &        *
	 * values, and do not add event handlers directly.  *
	 ****************************************************/


	Touch.setupSpotSwipe = function ($$$1) {
	  $$$1.spotSwipe = new SpotSwipe($$$1);
	};
	/****************************************************
	 * Method for adding pseudo drag events to elements *
	 ***************************************************/


	Touch.setupTouchHandler = function ($$$1) {
	  $$$1.fn.addTouch = function () {
	    this.each(function (i, el) {
	      $$$1(el).bind('touchstart touchmove touchend touchcancel', function (event) {
	        //we pass the original event object because the jQuery event
	        //object is normalized to w3c specs and does not provide the TouchList
	        handleTouch(event);
	      });
	    });

	    var handleTouch = function handleTouch(event) {
	      var touches = event.changedTouches,
	          first = touches[0],
	          eventTypes = {
	        touchstart: 'mousedown',
	        touchmove: 'mousemove',
	        touchend: 'mouseup'
	      },
	          type = eventTypes[event.type],
	          simulatedEvent;

	      if ('MouseEvent' in window && typeof window.MouseEvent === 'function') {
	        simulatedEvent = new window.MouseEvent(type, {
	          'bubbles': true,
	          'cancelable': true,
	          'screenX': first.screenX,
	          'screenY': first.screenY,
	          'clientX': first.clientX,
	          'clientY': first.clientY
	        });
	      } else {
	        simulatedEvent = document.createEvent('MouseEvent');
	        simulatedEvent.initMouseEvent(type, true, true, window, 1, first.screenX, first.screenY, first.clientX, first.clientY, false, false, false, false, 0
	        /*left*/
	        , null);
	      }

	      first.target.dispatchEvent(simulatedEvent);
	    };
	  };
	};

	Touch.init = function ($$$1) {
	  if (typeof $$$1.spotSwipe === 'undefined') {
	    Touch.setupSpotSwipe($$$1);
	    Touch.setupTouchHandler($$$1);
	  }
	};

	var MutationObserver = function () {
	  var prefixes = ['WebKit', 'Moz', 'O', 'Ms', ''];

	  for (var i = 0; i < prefixes.length; i++) {
	    if ("".concat(prefixes[i], "MutationObserver") in window) {
	      return window["".concat(prefixes[i], "MutationObserver")];
	    }
	  }

	  return false;
	}();

	var triggers = function triggers(el, type) {
	  el.data(type).split(' ').forEach(function (id) {
	    jquery("#".concat(id))[type === 'close' ? 'trigger' : 'triggerHandler']("".concat(type, ".zf.trigger"), [el]);
	  });
	};

	var Triggers = {
	  Listeners: {
	    Basic: {},
	    Global: {}
	  },
	  Initializers: {}
	};
	Triggers.Listeners.Basic = {
	  openListener: function openListener() {
	    triggers(jquery(this), 'open');
	  },
	  closeListener: function closeListener() {
	    var id = jquery(this).data('close');

	    if (id) {
	      triggers(jquery(this), 'close');
	    } else {
	      jquery(this).trigger('close.zf.trigger');
	    }
	  },
	  toggleListener: function toggleListener() {
	    var id = jquery(this).data('toggle');

	    if (id) {
	      triggers(jquery(this), 'toggle');
	    } else {
	      jquery(this).trigger('toggle.zf.trigger');
	    }
	  },
	  closeableListener: function closeableListener(e) {
	    e.stopPropagation();
	    var animation = jquery(this).data('closable');

	    if (animation !== '') {
	      Motion.animateOut(jquery(this), animation, function () {
	        jquery(this).trigger('closed.zf');
	      });
	    } else {
	      jquery(this).fadeOut().trigger('closed.zf');
	    }
	  },
	  toggleFocusListener: function toggleFocusListener() {
	    var id = jquery(this).data('toggle-focus');
	    jquery("#".concat(id)).triggerHandler('toggle.zf.trigger', [jquery(this)]);
	  }
	}; // Elements with [data-open] will reveal a plugin that supports it when clicked.

	Triggers.Initializers.addOpenListener = function ($elem) {
	  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.openListener);
	  $elem.on('click.zf.trigger', '[data-open]', Triggers.Listeners.Basic.openListener);
	}; // Elements with [data-close] will close a plugin that supports it when clicked.
	// If used without a value on [data-close], the event will bubble, allowing it to close a parent component.


	Triggers.Initializers.addCloseListener = function ($elem) {
	  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.closeListener);
	  $elem.on('click.zf.trigger', '[data-close]', Triggers.Listeners.Basic.closeListener);
	}; // Elements with [data-toggle] will toggle a plugin that supports it when clicked.


	Triggers.Initializers.addToggleListener = function ($elem) {
	  $elem.off('click.zf.trigger', Triggers.Listeners.Basic.toggleListener);
	  $elem.on('click.zf.trigger', '[data-toggle]', Triggers.Listeners.Basic.toggleListener);
	}; // Elements with [data-closable] will respond to close.zf.trigger events.


	Triggers.Initializers.addCloseableListener = function ($elem) {
	  $elem.off('close.zf.trigger', Triggers.Listeners.Basic.closeableListener);
	  $elem.on('close.zf.trigger', '[data-closeable], [data-closable]', Triggers.Listeners.Basic.closeableListener);
	}; // Elements with [data-toggle-focus] will respond to coming in and out of focus


	Triggers.Initializers.addToggleFocusListener = function ($elem) {
	  $elem.off('focus.zf.trigger blur.zf.trigger', Triggers.Listeners.Basic.toggleFocusListener);
	  $elem.on('focus.zf.trigger blur.zf.trigger', '[data-toggle-focus]', Triggers.Listeners.Basic.toggleFocusListener);
	}; // More Global/complex listeners and triggers


	Triggers.Listeners.Global = {
	  resizeListener: function resizeListener($nodes) {
	    if (!MutationObserver) {
	      //fallback for IE 9
	      $nodes.each(function () {
	        jquery(this).triggerHandler('resizeme.zf.trigger');
	      });
	    } //trigger all listening elements and signal a resize event


	    $nodes.attr('data-events', "resize");
	  },
	  scrollListener: function scrollListener($nodes) {
	    if (!MutationObserver) {
	      //fallback for IE 9
	      $nodes.each(function () {
	        jquery(this).triggerHandler('scrollme.zf.trigger');
	      });
	    } //trigger all listening elements and signal a scroll event


	    $nodes.attr('data-events', "scroll");
	  },
	  closeMeListener: function closeMeListener(e, pluginId) {
	    var plugin = e.namespace.split('.')[0];
	    var plugins = jquery("[data-".concat(plugin, "]")).not("[data-yeti-box=\"".concat(pluginId, "\"]"));
	    plugins.each(function () {
	      var _this = jquery(this);

	      _this.triggerHandler('close.zf.trigger', [_this]);
	    });
	  } // Global, parses whole document.

	};

	Triggers.Initializers.addClosemeListener = function (pluginName) {
	  var yetiBoxes = jquery('[data-yeti-box]'),
	      plugNames = ['dropdown', 'tooltip', 'reveal'];

	  if (pluginName) {
	    if (typeof pluginName === 'string') {
	      plugNames.push(pluginName);
	    } else if (_typeof(pluginName) === 'object' && typeof pluginName[0] === 'string') {
	      plugNames = plugNames.concat(pluginName);
	    } else {
	      console.error('Plugin names must be strings');
	    }
	  }

	  if (yetiBoxes.length) {
	    var listeners = plugNames.map(function (name) {
	      return "closeme.zf.".concat(name);
	    }).join(' ');
	    jquery(window).off(listeners).on(listeners, Triggers.Listeners.Global.closeMeListener);
	  }
	};

	function debounceGlobalListener(debounce, trigger, listener) {
	  var timer,
	      args = Array.prototype.slice.call(arguments, 3);
	  jquery(window).off(trigger).on(trigger, function (e) {
	    if (timer) {
	      clearTimeout(timer);
	    }

	    timer = setTimeout(function () {
	      listener.apply(null, args);
	    }, debounce || 10); //default time to emit scroll event
	  });
	}

	Triggers.Initializers.addResizeListener = function (debounce) {
	  var $nodes = jquery('[data-resize]');

	  if ($nodes.length) {
	    debounceGlobalListener(debounce, 'resize.zf.trigger', Triggers.Listeners.Global.resizeListener, $nodes);
	  }
	};

	Triggers.Initializers.addScrollListener = function (debounce) {
	  var $nodes = jquery('[data-scroll]');

	  if ($nodes.length) {
	    debounceGlobalListener(debounce, 'scroll.zf.trigger', Triggers.Listeners.Global.scrollListener, $nodes);
	  }
	};

	Triggers.Initializers.addMutationEventsListener = function ($elem) {
	  if (!MutationObserver) {
	    return false;
	  }

	  var $nodes = $elem.find('[data-resize], [data-scroll], [data-mutate]'); //element callback

	  var listeningElementsMutation = function listeningElementsMutation(mutationRecordsList) {
	    var $target = jquery(mutationRecordsList[0].target); //trigger the event handler for the element depending on type

	    switch (mutationRecordsList[0].type) {
	      case "attributes":
	        if ($target.attr("data-events") === "scroll" && mutationRecordsList[0].attributeName === "data-events") {
	          $target.triggerHandler('scrollme.zf.trigger', [$target, window.pageYOffset]);
	        }

	        if ($target.attr("data-events") === "resize" && mutationRecordsList[0].attributeName === "data-events") {
	          $target.triggerHandler('resizeme.zf.trigger', [$target]);
	        }

	        if (mutationRecordsList[0].attributeName === "style") {
	          $target.closest("[data-mutate]").attr("data-events", "mutate");
	          $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
	        }

	        break;

	      case "childList":
	        $target.closest("[data-mutate]").attr("data-events", "mutate");
	        $target.closest("[data-mutate]").triggerHandler('mutateme.zf.trigger', [$target.closest("[data-mutate]")]);
	        break;

	      default:
	        return false;
	      //nothing
	    }
	  };

	  if ($nodes.length) {
	    //for each element that needs to listen for resizing, scrolling, or mutation add a single observer
	    for (var i = 0; i <= $nodes.length - 1; i++) {
	      var elementObserver = new MutationObserver(listeningElementsMutation);
	      elementObserver.observe($nodes[i], {
	        attributes: true,
	        childList: true,
	        characterData: false,
	        subtree: true,
	        attributeFilter: ["data-events", "style"]
	      });
	    }
	  }
	};

	Triggers.Initializers.addSimpleListeners = function () {
	  var $document = jquery(document);
	  Triggers.Initializers.addOpenListener($document);
	  Triggers.Initializers.addCloseListener($document);
	  Triggers.Initializers.addToggleListener($document);
	  Triggers.Initializers.addCloseableListener($document);
	  Triggers.Initializers.addToggleFocusListener($document);
	};

	Triggers.Initializers.addGlobalListeners = function () {
	  var $document = jquery(document);
	  Triggers.Initializers.addMutationEventsListener($document);
	  Triggers.Initializers.addResizeListener();
	  Triggers.Initializers.addScrollListener();
	  Triggers.Initializers.addClosemeListener();
	};

	Triggers.init = function ($$$1, Foundation) {
	  onLoad($$$1(window), function () {
	    if ($$$1.triggersInitialized !== true) {
	      Triggers.Initializers.addSimpleListeners();
	      Triggers.Initializers.addGlobalListeners();
	      $$$1.triggersInitialized = true;
	    }
	  });

	  if (Foundation) {
	    Foundation.Triggers = Triggers; // Legacy included to be backwards compatible for now.

	    Foundation.IHearYou = Triggers.Initializers.addGlobalListeners;
	  }
	};

	// {function} _setup (replaces previous constructor),
	// {function} _destroy (replaces previous destroy)

	var Plugin =
	/*#__PURE__*/
	function () {
	  function Plugin(element, options) {
	    _classCallCheck(this, Plugin);

	    this._setup(element, options);

	    var pluginName = getPluginName(this);
	    this.uuid = GetYoDigits(6, pluginName);

	    if (!this.$element.attr("data-".concat(pluginName))) {
	      this.$element.attr("data-".concat(pluginName), this.uuid);
	    }

	    if (!this.$element.data('zfPlugin')) {
	      this.$element.data('zfPlugin', this);
	    }
	    /**
	     * Fires when the plugin has initialized.
	     * @event Plugin#init
	     */


	    this.$element.trigger("init.zf.".concat(pluginName));
	  }

	  _createClass(Plugin, [{
	    key: "destroy",
	    value: function destroy() {
	      this._destroy();

	      var pluginName = getPluginName(this);
	      this.$element.removeAttr("data-".concat(pluginName)).removeData('zfPlugin')
	      /**
	       * Fires when the plugin has been destroyed.
	       * @event Plugin#destroyed
	       */
	      .trigger("destroyed.zf.".concat(pluginName));

	      for (var prop in this) {
	        this[prop] = null; //clean up script to prep for garbage collection.
	      }
	    }
	  }]);

	  return Plugin;
	}(); // Convert PascalCase to kebab-case
	// Thank you: http://stackoverflow.com/a/8955580


	function hyphenate$1(str) {
	  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	}

	function getPluginName(obj) {
	  if (typeof obj.constructor.name !== 'undefined') {
	    return hyphenate$1(obj.constructor.name);
	  } else {
	    return hyphenate$1(obj.className);
	  }
	}

	/**
	 * Abide module.
	 * @module foundation.abide
	 */

	var Abide =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Abide, _Plugin);

	  function Abide() {
	    _classCallCheck(this, Abide);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Abide).apply(this, arguments));
	  }

	  _createClass(Abide, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of Abide.
	     * @class
	     * @name Abide
	     * @fires Abide#init
	     * @param {Object} element - jQuery object to add the trigger to.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      this.$element = element;
	      this.options = jquery.extend(true, {}, Abide.defaults, this.$element.data(), options);
	      this.className = 'Abide'; // ie9 back compat

	      this._init();
	    }
	    /**
	     * Initializes the Abide plugin and calls functions to get Abide functioning on load.
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      var _this2 = this;

	      this.$inputs = jquery.merge( // Consider as input to validate:
	      this.$element.find('input').not('[type=submit]'), // * all input fields expect submit
	      this.$element.find('textarea, select') // * all textareas and select fields
	      );
	      var $globalErrors = this.$element.find('[data-abide-error]'); // Add a11y attributes to all fields

	      if (this.options.a11yAttributes) {
	        this.$inputs.each(function (i, input) {
	          return _this2.addA11yAttributes(jquery(input));
	        });
	        $globalErrors.each(function (i, error) {
	          return _this2.addGlobalErrorA11yAttributes(jquery(error));
	        });
	      }

	      this._events();
	    }
	    /**
	     * Initializes events for Abide.
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this3 = this;

	      this.$element.off('.abide').on('reset.zf.abide', function () {
	        _this3.resetForm();
	      }).on('submit.zf.abide', function () {
	        return _this3.validateForm();
	      });

	      if (this.options.validateOn === 'fieldChange') {
	        this.$inputs.off('change.zf.abide').on('change.zf.abide', function (e) {
	          _this3.validateInput(jquery(e.target));
	        });
	      }

	      if (this.options.liveValidate) {
	        this.$inputs.off('input.zf.abide').on('input.zf.abide', function (e) {
	          _this3.validateInput(jquery(e.target));
	        });
	      }

	      if (this.options.validateOnBlur) {
	        this.$inputs.off('blur.zf.abide').on('blur.zf.abide', function (e) {
	          _this3.validateInput(jquery(e.target));
	        });
	      }
	    }
	    /**
	     * Calls necessary functions to update Abide upon DOM change
	     * @private
	     */

	  }, {
	    key: "_reflow",
	    value: function _reflow() {
	      this._init();
	    }
	    /**
	     * Checks whether or not a form element has the required attribute and if it's checked or not
	     * @param {Object} element - jQuery object to check for required attribute
	     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
	     */

	  }, {
	    key: "requiredCheck",
	    value: function requiredCheck($el) {
	      if (!$el.attr('required')) return true;
	      var isGood = true;

	      switch ($el[0].type) {
	        case 'checkbox':
	          isGood = $el[0].checked;
	          break;

	        case 'select':
	        case 'select-one':
	        case 'select-multiple':
	          var opt = $el.find('option:selected');
	          if (!opt.length || !opt.val()) isGood = false;
	          break;

	        default:
	          if (!$el.val() || !$el.val().length) isGood = false;
	      }

	      return isGood;
	    }
	    /**
	     * Get:
	     * - Based on $el, the first element(s) corresponding to `formErrorSelector` in this order:
	     *   1. The element's direct sibling('s).
	     *   2. The element's parent's children.
	     * - Element(s) with the attribute `[data-form-error-for]` set with the element's id.
	     *
	     * This allows for multiple form errors per input, though if none are found, no form errors will be shown.
	     *
	     * @param {Object} $el - jQuery object to use as reference to find the form error selector.
	     * @returns {Object} jQuery object with the selector.
	     */

	  }, {
	    key: "findFormError",
	    value: function findFormError($el) {
	      var id = $el[0].id;
	      var $error = $el.siblings(this.options.formErrorSelector);

	      if (!$error.length) {
	        $error = $el.parent().find(this.options.formErrorSelector);
	      }

	      if (id) {
	        $error = $error.add(this.$element.find("[data-form-error-for=\"".concat(id, "\"]")));
	      }

	      return $error;
	    }
	    /**
	     * Get the first element in this order:
	     * 2. The <label> with the attribute `[for="someInputId"]`
	     * 3. The `.closest()` <label>
	     *
	     * @param {Object} $el - jQuery object to check for required attribute
	     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
	     */

	  }, {
	    key: "findLabel",
	    value: function findLabel($el) {
	      var id = $el[0].id;
	      var $label = this.$element.find("label[for=\"".concat(id, "\"]"));

	      if (!$label.length) {
	        return $el.closest('label');
	      }

	      return $label;
	    }
	    /**
	     * Get the set of labels associated with a set of radio els in this order
	     * 2. The <label> with the attribute `[for="someInputId"]`
	     * 3. The `.closest()` <label>
	     *
	     * @param {Object} $el - jQuery object to check for required attribute
	     * @returns {Boolean} Boolean value depends on whether or not attribute is checked or empty
	     */

	  }, {
	    key: "findRadioLabels",
	    value: function findRadioLabels($els) {
	      var _this4 = this;

	      var labels = $els.map(function (i, el) {
	        var id = el.id;

	        var $label = _this4.$element.find("label[for=\"".concat(id, "\"]"));

	        if (!$label.length) {
	          $label = jquery(el).closest('label');
	        }

	        return $label[0];
	      });
	      return jquery(labels);
	    }
	    /**
	     * Adds the CSS error class as specified by the Abide settings to the label, input, and the form
	     * @param {Object} $el - jQuery object to add the class to
	     */

	  }, {
	    key: "addErrorClasses",
	    value: function addErrorClasses($el) {
	      var $label = this.findLabel($el);
	      var $formError = this.findFormError($el);

	      if ($label.length) {
	        $label.addClass(this.options.labelErrorClass);
	      }

	      if ($formError.length) {
	        $formError.addClass(this.options.formErrorClass);
	      }

	      $el.addClass(this.options.inputErrorClass).attr({
	        'data-invalid': '',
	        'aria-invalid': true
	      });
	    }
	    /**
	     * Adds [for] and [role=alert] attributes to all form error targetting $el,
	     * and [aria-describedby] attribute to $el toward the first form error.
	     * @param {Object} $el - jQuery object
	     */

	  }, {
	    key: "addA11yAttributes",
	    value: function addA11yAttributes($el) {
	      var $errors = this.findFormError($el);
	      var $labels = $errors.filter('label');
	      var $error = $errors.first();
	      if (!$errors.length) return; // Set [aria-describedby] on the input toward the first form error if it is not set

	      if (typeof $el.attr('aria-describedby') === 'undefined') {
	        // Get the first error ID or create one
	        var errorId = $error.attr('id');

	        if (typeof errorId === 'undefined') {
	          errorId = GetYoDigits(6, 'abide-error');
	          $error.attr('id', errorId);
	        }
	        $el.attr('aria-describedby', errorId);
	      }

	      if ($labels.filter('[for]').length < $labels.length) {
	        // Get the input ID or create one
	        var elemId = $el.attr('id');

	        if (typeof elemId === 'undefined') {
	          elemId = GetYoDigits(6, 'abide-input');
	          $el.attr('id', elemId);
	        }

	        $labels.each(function (i, label) {
	          var $label = jquery(label);
	          if (typeof $label.attr('for') === 'undefined') $label.attr('for', elemId);
	        });
	      } // For each error targeting $el, set [role=alert] if it is not set.


	      $errors.each(function (i, label) {
	        var $label = jquery(label);
	        if (typeof $label.attr('role') === 'undefined') $label.attr('role', 'alert');
	      }).end();
	    }
	    /**
	     * Adds [aria-live] attribute to the given global form error $el.
	     * @param {Object} $el - jQuery object to add the attribute to
	     */

	  }, {
	    key: "addGlobalErrorA11yAttributes",
	    value: function addGlobalErrorA11yAttributes($el) {
	      if (typeof $el.attr('aria-live') === 'undefined') $el.attr('aria-live', this.options.a11yErrorLevel);
	    }
	    /**
	     * Remove CSS error classes etc from an entire radio button group
	     * @param {String} groupName - A string that specifies the name of a radio button group
	     *
	     */

	  }, {
	    key: "removeRadioErrorClasses",
	    value: function removeRadioErrorClasses(groupName) {
	      var $els = this.$element.find(":radio[name=\"".concat(groupName, "\"]"));
	      var $labels = this.findRadioLabels($els);
	      var $formErrors = this.findFormError($els);

	      if ($labels.length) {
	        $labels.removeClass(this.options.labelErrorClass);
	      }

	      if ($formErrors.length) {
	        $formErrors.removeClass(this.options.formErrorClass);
	      }

	      $els.removeClass(this.options.inputErrorClass).attr({
	        'data-invalid': null,
	        'aria-invalid': null
	      });
	    }
	    /**
	     * Removes CSS error class as specified by the Abide settings from the label, input, and the form
	     * @param {Object} $el - jQuery object to remove the class from
	     */

	  }, {
	    key: "removeErrorClasses",
	    value: function removeErrorClasses($el) {
	      // radios need to clear all of the els
	      if ($el[0].type == 'radio') {
	        return this.removeRadioErrorClasses($el.attr('name'));
	      }

	      var $label = this.findLabel($el);
	      var $formError = this.findFormError($el);

	      if ($label.length) {
	        $label.removeClass(this.options.labelErrorClass);
	      }

	      if ($formError.length) {
	        $formError.removeClass(this.options.formErrorClass);
	      }

	      $el.removeClass(this.options.inputErrorClass).attr({
	        'data-invalid': null,
	        'aria-invalid': null
	      });
	    }
	    /**
	     * Goes through a form to find inputs and proceeds to validate them in ways specific to their type.
	     * Ignores inputs with data-abide-ignore, type="hidden" or disabled attributes set
	     * @fires Abide#invalid
	     * @fires Abide#valid
	     * @param {Object} element - jQuery object to validate, should be an HTML input
	     * @returns {Boolean} goodToGo - If the input is valid or not.
	     */

	  }, {
	    key: "validateInput",
	    value: function validateInput($el) {
	      var clearRequire = this.requiredCheck($el),
	          validated = false,
	          customValidator = true,
	          validator = $el.attr('data-validator'),
	          equalTo = true; // don't validate ignored inputs or hidden inputs or disabled inputs

	      if ($el.is('[data-abide-ignore]') || $el.is('[type="hidden"]') || $el.is('[disabled]')) {
	        return true;
	      }

	      switch ($el[0].type) {
	        case 'radio':
	          validated = this.validateRadio($el.attr('name'));
	          break;

	        case 'checkbox':
	          validated = clearRequire;
	          break;

	        case 'select':
	        case 'select-one':
	        case 'select-multiple':
	          validated = clearRequire;
	          break;

	        default:
	          validated = this.validateText($el);
	      }

	      if (validator) {
	        customValidator = this.matchValidation($el, validator, $el.attr('required'));
	      }

	      if ($el.attr('data-equalto')) {
	        equalTo = this.options.validators.equalTo($el);
	      }

	      var goodToGo = [clearRequire, validated, customValidator, equalTo].indexOf(false) === -1;
	      var message = (goodToGo ? 'valid' : 'invalid') + '.zf.abide';

	      if (goodToGo) {
	        // Re-validate inputs that depend on this one with equalto
	        var dependentElements = this.$element.find("[data-equalto=\"".concat($el.attr('id'), "\"]"));

	        if (dependentElements.length) {
	          var _this = this;

	          dependentElements.each(function () {
	            if (jquery(this).val()) {
	              _this.validateInput(jquery(this));
	            }
	          });
	        }
	      }

	      this[goodToGo ? 'removeErrorClasses' : 'addErrorClasses']($el);
	      /**
	       * Fires when the input is done checking for validation. Event trigger is either `valid.zf.abide` or `invalid.zf.abide`
	       * Trigger includes the DOM element of the input.
	       * @event Abide#valid
	       * @event Abide#invalid
	       */

	      $el.trigger(message, [$el]);
	      return goodToGo;
	    }
	    /**
	     * Goes through a form and if there are any invalid inputs, it will display the form error element
	     * @returns {Boolean} noError - true if no errors were detected...
	     * @fires Abide#formvalid
	     * @fires Abide#forminvalid
	     */

	  }, {
	    key: "validateForm",
	    value: function validateForm() {
	      var _this5 = this;

	      var acc = [];

	      var _this = this;

	      this.$inputs.each(function () {
	        acc.push(_this.validateInput(jquery(this)));
	      });
	      var noError = acc.indexOf(false) === -1;
	      this.$element.find('[data-abide-error]').each(function (i, elem) {
	        var $elem = jquery(elem); // Ensure a11y attributes are set

	        if (_this5.options.a11yAttributes) _this5.addGlobalErrorA11yAttributes($elem); // Show or hide the error

	        $elem.css('display', noError ? 'none' : 'block');
	      });
	      /**
	       * Fires when the form is finished validating. Event trigger is either `formvalid.zf.abide` or `forminvalid.zf.abide`.
	       * Trigger includes the element of the form.
	       * @event Abide#formvalid
	       * @event Abide#forminvalid
	       */

	      this.$element.trigger((noError ? 'formvalid' : 'forminvalid') + '.zf.abide', [this.$element]);
	      return noError;
	    }
	    /**
	     * Determines whether or a not a text input is valid based on the pattern specified in the attribute. If no matching pattern is found, returns true.
	     * @param {Object} $el - jQuery object to validate, should be a text input HTML element
	     * @param {String} pattern - string value of one of the RegEx patterns in Abide.options.patterns
	     * @returns {Boolean} Boolean value depends on whether or not the input value matches the pattern specified
	     */

	  }, {
	    key: "validateText",
	    value: function validateText($el, pattern) {
	      // A pattern can be passed to this function, or it will be infered from the input's "pattern" attribute, or it's "type" attribute
	      pattern = pattern || $el.attr('pattern') || $el.attr('type');
	      var inputText = $el.val();
	      var valid = false;

	      if (inputText.length) {
	        // If the pattern attribute on the element is in Abide's list of patterns, then test that regexp
	        if (this.options.patterns.hasOwnProperty(pattern)) {
	          valid = this.options.patterns[pattern].test(inputText);
	        } // If the pattern name isn't also the type attribute of the field, then test it as a regexp
	        else if (pattern !== $el.attr('type')) {
	            valid = new RegExp(pattern).test(inputText);
	          } else {
	            valid = true;
	          }
	      } // An empty field is valid if it's not required
	      else if (!$el.prop('required')) {
	          valid = true;
	        }

	      return valid;
	    }
	    /**
	     * Determines whether or a not a radio input is valid based on whether or not it is required and selected. Although the function targets a single `<input>`, it validates by checking the `required` and `checked` properties of all radio buttons in its group.
	     * @param {String} groupName - A string that specifies the name of a radio button group
	     * @returns {Boolean} Boolean value depends on whether or not at least one radio input has been selected (if it's required)
	     */

	  }, {
	    key: "validateRadio",
	    value: function validateRadio(groupName) {
	      // If at least one radio in the group has the `required` attribute, the group is considered required
	      // Per W3C spec, all radio buttons in a group should have `required`, but we're being nice
	      var $group = this.$element.find(":radio[name=\"".concat(groupName, "\"]"));
	      var valid = false,
	          required = false; // For the group to be required, at least one radio needs to be required

	      $group.each(function (i, e) {
	        if (jquery(e).attr('required')) {
	          required = true;
	        }
	      });
	      if (!required) valid = true;

	      if (!valid) {
	        // For the group to be valid, at least one radio needs to be checked
	        $group.each(function (i, e) {
	          if (jquery(e).prop('checked')) {
	            valid = true;
	          }
	        });
	      }
	      return valid;
	    }
	    /**
	     * Determines if a selected input passes a custom validation function. Multiple validations can be used, if passed to the element with `data-validator="foo bar baz"` in a space separated listed.
	     * @param {Object} $el - jQuery input element.
	     * @param {String} validators - a string of function names matching functions in the Abide.options.validators object.
	     * @param {Boolean} required - self explanatory?
	     * @returns {Boolean} - true if validations passed.
	     */

	  }, {
	    key: "matchValidation",
	    value: function matchValidation($el, validators, required) {
	      var _this6 = this;

	      required = required ? true : false;
	      var clear = validators.split(' ').map(function (v) {
	        return _this6.options.validators[v]($el, required, $el.parent());
	      });
	      return clear.indexOf(false) === -1;
	    }
	    /**
	     * Resets form inputs and styles
	     * @fires Abide#formreset
	     */

	  }, {
	    key: "resetForm",
	    value: function resetForm() {
	      var $form = this.$element,
	          opts = this.options;
	      jquery(".".concat(opts.labelErrorClass), $form).not('small').removeClass(opts.labelErrorClass);
	      jquery(".".concat(opts.inputErrorClass), $form).not('small').removeClass(opts.inputErrorClass);
	      jquery("".concat(opts.formErrorSelector, ".").concat(opts.formErrorClass)).removeClass(opts.formErrorClass);
	      $form.find('[data-abide-error]').css('display', 'none');
	      jquery(':input', $form).not(':button, :submit, :reset, :hidden, :radio, :checkbox, [data-abide-ignore]').val('').attr({
	        'data-invalid': null,
	        'aria-invalid': null
	      });
	      jquery(':input:radio', $form).not('[data-abide-ignore]').prop('checked', false).attr({
	        'data-invalid': null,
	        'aria-invalid': null
	      });
	      jquery(':input:checkbox', $form).not('[data-abide-ignore]').prop('checked', false).attr({
	        'data-invalid': null,
	        'aria-invalid': null
	      });
	      /**
	       * Fires when the form has been reset.
	       * @event Abide#formreset
	       */

	      $form.trigger('formreset.zf.abide', [$form]);
	    }
	    /**
	     * Destroys an instance of Abide.
	     * Removes error styles and classes from elements, without resetting their values.
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      var _this = this;

	      this.$element.off('.abide').find('[data-abide-error]').css('display', 'none');
	      this.$inputs.off('.abide').each(function () {
	        _this.removeErrorClasses(jquery(this));
	      });
	    }
	  }]);

	  return Abide;
	}(Plugin);
	/**
	 * Default settings for plugin
	 */


	Abide.defaults = {
	  /**
	   * The default event to validate inputs. Checkboxes and radios validate immediately.
	   * Remove or change this value for manual validation.
	   * @option
	   * @type {?string}
	   * @default 'fieldChange'
	   */
	  validateOn: 'fieldChange',

	  /**
	   * Class to be applied to input labels on failed validation.
	   * @option
	   * @type {string}
	   * @default 'is-invalid-label'
	   */
	  labelErrorClass: 'is-invalid-label',

	  /**
	   * Class to be applied to inputs on failed validation.
	   * @option
	   * @type {string}
	   * @default 'is-invalid-input'
	   */
	  inputErrorClass: 'is-invalid-input',

	  /**
	   * Class selector to use to target Form Errors for show/hide.
	   * @option
	   * @type {string}
	   * @default '.form-error'
	   */
	  formErrorSelector: '.form-error',

	  /**
	   * Class added to Form Errors on failed validation.
	   * @option
	   * @type {string}
	   * @default 'is-visible'
	   */
	  formErrorClass: 'is-visible',

	  /**
	   * If true, automatically insert when possible:
	   * - `[aria-describedby]` on fields
	   * - `[role=alert]` on form errors and `[for]` on form error labels
	   * - `[aria-live]` on global errors `[data-abide-error]` (see option `a11yErrorLevel`).
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  a11yAttributes: true,

	  /**
	   * [aria-live] attribute value to be applied on global errors `[data-abide-error]`.
	   * Options are: 'assertive', 'polite' and 'off'/null
	   * @option
	   * @see https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions
	   * @type {string}
	   * @default 'assertive'
	   */
	  a11yErrorLevel: 'assertive',

	  /**
	   * Set to true to validate text inputs on any value change.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  liveValidate: false,

	  /**
	   * Set to true to validate inputs on blur.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  validateOnBlur: false,
	  patterns: {
	    alpha: /^[a-zA-Z]+$/,
	    alpha_numeric: /^[a-zA-Z0-9]+$/,
	    integer: /^[-+]?\d+$/,
	    number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
	    // amex, visa, diners
	    card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(?:222[1-9]|2[3-6][0-9]{2}|27[0-1][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
	    cvv: /^([0-9]){3,4}$/,
	    // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
	    email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
	    // From CommonRegexJS (@talyssonoc)
	    // https://github.com/talyssonoc/CommonRegexJS/blob/e2901b9f57222bc14069dc8f0598d5f412555411/lib/commonregex.js#L76
	    // For more restrictive URL Regexs, see https://mathiasbynens.be/demo/url-regex.
	    url: /^((?:(https?|ftps?|file|ssh|sftp):\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]+|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?\xab\xbb\u201c\u201d\u2018\u2019]))$/,
	    // abc.de
	    domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
	    datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
	    // YYYY-MM-DD
	    date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
	    // HH:MM:SS
	    time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
	    dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
	    // MM/DD/YYYY
	    month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
	    // DD/MM/YYYY
	    day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
	    // #FFF or #FFFFFF
	    color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
	    // Domain || URL
	    website: {
	      test: function test(text) {
	        return Abide.defaults.patterns['domain'].test(text) || Abide.defaults.patterns['url'].test(text);
	      }
	    }
	  },

	  /**
	   * Optional validation functions to be used. `equalTo` being the only default included function.
	   * Functions should return only a boolean if the input is valid or not. Functions are given the following arguments:
	   * el : The jQuery element to validate.
	   * required : Boolean value of the required attribute be present or not.
	   * parent : The direct parent of the input.
	   * @option
	   */
	  validators: {
	    equalTo: function equalTo(el, required, parent) {
	      return jquery("#".concat(el.attr('data-equalto'))).val() === el.val();
	    }
	  }
	};

	/**
	 * Accordion module.
	 * @module foundation.accordion
	 * @requires foundation.util.keyboard
	 */

	var Accordion =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Accordion, _Plugin);

	  function Accordion() {
	    _classCallCheck(this, Accordion);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Accordion).apply(this, arguments));
	  }

	  _createClass(Accordion, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of an accordion.
	     * @class
	     * @name Accordion
	     * @fires Accordion#init
	     * @param {jQuery} element - jQuery object to make into an accordion.
	     * @param {Object} options - a plain object with settings to override the default options.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery.extend({}, Accordion.defaults, this.$element.data(), options);
	      this.className = 'Accordion'; // ie9 back compat

	      this._init();

	      Keyboard.register('Accordion', {
	        'ENTER': 'toggle',
	        'SPACE': 'toggle',
	        'ARROW_DOWN': 'next',
	        'ARROW_UP': 'previous'
	      });
	    }
	    /**
	     * Initializes the accordion by animating the preset active pane(s).
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      var _this2 = this;

	      this._isInitializing = true;
	      this.$element.attr('role', 'tablist');
	      this.$tabs = this.$element.children('[data-accordion-item]');
	      this.$tabs.each(function (idx, el) {
	        var $el = jquery(el),
	            $content = $el.children('[data-tab-content]'),
	            id = $content[0].id || GetYoDigits(6, 'accordion'),
	            linkId = el.id ? "".concat(el.id, "-label") : "".concat(id, "-label");
	        $el.find('a:first').attr({
	          'aria-controls': id,
	          'role': 'tab',
	          'id': linkId,
	          'aria-expanded': false,
	          'aria-selected': false
	        });
	        $content.attr({
	          'role': 'tabpanel',
	          'aria-labelledby': linkId,
	          'aria-hidden': true,
	          'id': id
	        });
	      });
	      var $initActive = this.$element.find('.is-active').children('[data-tab-content]');

	      if ($initActive.length) {
	        // Save up the initial hash to return to it later when going back in history
	        this._initialAnchor = $initActive.prev('a').attr('href');

	        this._openSingleTab($initActive);
	      }

	      this._checkDeepLink = function () {
	        var anchor = window.location.hash;

	        if (!anchor.length) {
	          // If we are still initializing and there is no anchor, then there is nothing to do
	          if (_this2._isInitializing) return; // Otherwise, move to the initial anchor

	          if (_this2._initialAnchor) anchor = _this2._initialAnchor;
	        }

	        var $anchor = anchor && jquery(anchor);

	        var $link = anchor && _this2.$element.find("[href$=\"".concat(anchor, "\"]")); // Whether the anchor element that has been found is part of this element


	        var isOwnAnchor = !!($anchor.length && $link.length); // If there is an anchor for the hash, open it (if not already active)

	        if ($anchor && $link && $link.length) {
	          if (!$link.parent('[data-accordion-item]').hasClass('is-active')) {
	            _this2._openSingleTab($anchor);
	          }
	        } // Otherwise, close everything
	        else {
	            _this2._closeAllTabs();
	          }

	        if (isOwnAnchor) {
	          // Roll up a little to show the titles
	          if (_this2.options.deepLinkSmudge) {
	            onLoad(jquery(window), function () {
	              var offset = _this2.$element.offset();

	              jquery('html, body').animate({
	                scrollTop: offset.top
	              }, _this2.options.deepLinkSmudgeDelay);
	            });
	          }
	          /**
	           * Fires when the plugin has deeplinked at pageload
	           * @event Accordion#deeplink
	           */


	          _this2.$element.trigger('deeplink.zf.accordion', [$link, $anchor]);
	        }
	      }; //use browser to open a tab, if it exists in this tabset


	      if (this.options.deepLink) {
	        this._checkDeepLink();
	      }

	      this._events();

	      this._isInitializing = false;
	    }
	    /**
	     * Adds event handlers for items within the accordion.
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this = this;

	      this.$tabs.each(function () {
	        var $elem = jquery(this);
	        var $tabContent = $elem.children('[data-tab-content]');

	        if ($tabContent.length) {
	          $elem.children('a').off('click.zf.accordion keydown.zf.accordion').on('click.zf.accordion', function (e) {
	            e.preventDefault();

	            _this.toggle($tabContent);
	          }).on('keydown.zf.accordion', function (e) {
	            Keyboard.handleKey(e, 'Accordion', {
	              toggle: function toggle() {
	                _this.toggle($tabContent);
	              },
	              next: function next() {
	                var $a = $elem.next().find('a').focus();

	                if (!_this.options.multiExpand) {
	                  $a.trigger('click.zf.accordion');
	                }
	              },
	              previous: function previous() {
	                var $a = $elem.prev().find('a').focus();

	                if (!_this.options.multiExpand) {
	                  $a.trigger('click.zf.accordion');
	                }
	              },
	              handled: function handled() {
	                e.preventDefault();
	                e.stopPropagation();
	              }
	            });
	          });
	        }
	      });

	      if (this.options.deepLink) {
	        jquery(window).on('hashchange', this._checkDeepLink);
	      }
	    }
	    /**
	     * Toggles the selected content pane's open/close state.
	     * @param {jQuery} $target - jQuery object of the pane to toggle (`.accordion-content`).
	     * @function
	     */

	  }, {
	    key: "toggle",
	    value: function toggle($target) {
	      if ($target.closest('[data-accordion]').is('[disabled]')) {
	        console.info('Cannot toggle an accordion that is disabled.');
	        return;
	      }

	      if ($target.parent().hasClass('is-active')) {
	        this.up($target);
	      } else {
	        this.down($target);
	      } //either replace or update browser history


	      if (this.options.deepLink) {
	        var anchor = $target.prev('a').attr('href');

	        if (this.options.updateHistory) {
	          history.pushState({}, '', anchor);
	        } else {
	          history.replaceState({}, '', anchor);
	        }
	      }
	    }
	    /**
	     * Opens the accordion tab defined by `$target`.
	     * @param {jQuery} $target - Accordion pane to open (`.accordion-content`).
	     * @fires Accordion#down
	     * @function
	     */

	  }, {
	    key: "down",
	    value: function down($target) {
	      if ($target.closest('[data-accordion]').is('[disabled]')) {
	        console.info('Cannot call down on an accordion that is disabled.');
	        return;
	      }

	      if (this.options.multiExpand) this._openTab($target);else this._openSingleTab($target);
	    }
	    /**
	     * Closes the tab defined by `$target`.
	     * It may be ignored if the Accordion options don't allow it.
	     *
	     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
	     * @fires Accordion#up
	     * @function
	     */

	  }, {
	    key: "up",
	    value: function up($target) {
	      if (this.$element.is('[disabled]')) {
	        console.info('Cannot call up on an accordion that is disabled.');
	        return;
	      } // Don't close the item if it is already closed


	      var $targetItem = $target.parent();
	      if (!$targetItem.hasClass('is-active')) return; // Don't close the item if there is no other active item (unless with `allowAllClosed`)

	      var $othersItems = $targetItem.siblings();
	      if (!this.options.allowAllClosed && !$othersItems.hasClass('is-active')) return;

	      this._closeTab($target);
	    }
	    /**
	     * Make the tab defined by `$target` the only opened tab, closing all others tabs.
	     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
	     * @function
	     * @private
	     */

	  }, {
	    key: "_openSingleTab",
	    value: function _openSingleTab($target) {
	      // Close all the others active tabs.
	      var $activeContents = this.$element.children('.is-active').children('[data-tab-content]');

	      if ($activeContents.length) {
	        this._closeTab($activeContents.not($target));
	      } // Then open the target.


	      this._openTab($target);
	    }
	    /**
	     * Opens the tab defined by `$target`.
	     * @param {jQuery} $target - Accordion tab to open (`.accordion-content`).
	     * @fires Accordion#down
	     * @function
	     * @private
	     */

	  }, {
	    key: "_openTab",
	    value: function _openTab($target) {
	      var _this3 = this;

	      var $targetItem = $target.parent();
	      var targetContentId = $target.attr('aria-labelledby');
	      $target.attr('aria-hidden', false);
	      $targetItem.addClass('is-active');
	      jquery("#".concat(targetContentId)).attr({
	        'aria-expanded': true,
	        'aria-selected': true
	      });
	      $target.slideDown(this.options.slideSpeed, function () {
	        /**
	         * Fires when the tab is done opening.
	         * @event Accordion#down
	         */
	        _this3.$element.trigger('down.zf.accordion', [$target]);
	      });
	    }
	    /**
	     * Closes the tab defined by `$target`.
	     * @param {jQuery} $target - Accordion tab to close (`.accordion-content`).
	     * @fires Accordion#up
	     * @function
	     * @private
	     */

	  }, {
	    key: "_closeTab",
	    value: function _closeTab($target) {
	      var _this4 = this;

	      var $targetItem = $target.parent();
	      var targetContentId = $target.attr('aria-labelledby');
	      $target.attr('aria-hidden', true);
	      $targetItem.removeClass('is-active');
	      jquery("#".concat(targetContentId)).attr({
	        'aria-expanded': false,
	        'aria-selected': false
	      });
	      $target.slideUp(this.options.slideSpeed, function () {
	        /**
	         * Fires when the tab is done collapsing up.
	         * @event Accordion#up
	         */
	        _this4.$element.trigger('up.zf.accordion', [$target]);
	      });
	    }
	    /**
	     * Closes all active tabs
	     * @fires Accordion#up
	     * @function
	     * @private
	     */

	  }, {
	    key: "_closeAllTabs",
	    value: function _closeAllTabs() {
	      var $activeTabs = this.$element.children('.is-active').children('[data-tab-content]');

	      if ($activeTabs.length) {
	        this._closeTab($activeTabs);
	      }
	    }
	    /**
	     * Destroys an instance of an accordion.
	     * @fires Accordion#destroyed
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$element.find('[data-tab-content]').stop(true).slideUp(0).css('display', '');
	      this.$element.find('a').off('.zf.accordion');

	      if (this.options.deepLink) {
	        jquery(window).off('hashchange', this._checkDeepLink);
	      }
	    }
	  }]);

	  return Accordion;
	}(Plugin);

	Accordion.defaults = {
	  /**
	   * Amount of time to animate the opening of an accordion pane.
	   * @option
	   * @type {number}
	   * @default 250
	   */
	  slideSpeed: 250,

	  /**
	   * Allow the accordion to have multiple open panes.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  multiExpand: false,

	  /**
	   * Allow the accordion to close all panes.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  allowAllClosed: false,

	  /**
	   * Link the location hash to the open pane.
	   * Set the location hash when the opened pane changes, and open and scroll to the corresponding pane when the location changes.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  deepLink: false,

	  /**
	   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the accordion panel is visible
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  deepLinkSmudge: false,

	  /**
	   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
	   * @option
	   * @type {number}
	   * @default 300
	   */
	  deepLinkSmudgeDelay: 300,

	  /**
	   * If `deepLink` is enabled, update the browser history with the open accordion
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  updateHistory: false
	};

	/**
	 * AccordionMenu module.
	 * @module foundation.accordionMenu
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.nest
	 */

	var AccordionMenu =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(AccordionMenu, _Plugin);

	  function AccordionMenu() {
	    _classCallCheck(this, AccordionMenu);

	    return _possibleConstructorReturn(this, _getPrototypeOf(AccordionMenu).apply(this, arguments));
	  }

	  _createClass(AccordionMenu, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of an accordion menu.
	     * @class
	     * @name AccordionMenu
	     * @fires AccordionMenu#init
	     * @param {jQuery} element - jQuery object to make into an accordion menu.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery.extend({}, AccordionMenu.defaults, this.$element.data(), options);
	      this.className = 'AccordionMenu'; // ie9 back compat

	      this._init();

	      Keyboard.register('AccordionMenu', {
	        'ENTER': 'toggle',
	        'SPACE': 'toggle',
	        'ARROW_RIGHT': 'open',
	        'ARROW_UP': 'up',
	        'ARROW_DOWN': 'down',
	        'ARROW_LEFT': 'close',
	        'ESCAPE': 'closeAll'
	      });
	    }
	    /**
	     * Initializes the accordion menu by hiding all nested menus.
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      Nest.Feather(this.$element, 'accordion');

	      var _this = this;

	      this.$element.find('[data-submenu]').not('.is-active').slideUp(0); //.find('a').css('padding-left', '1rem');

	      this.$element.attr({
	        'role': 'tree',
	        'aria-multiselectable': this.options.multiOpen
	      });
	      this.$menuLinks = this.$element.find('.is-accordion-submenu-parent');
	      this.$menuLinks.each(function () {
	        var linkId = this.id || GetYoDigits(6, 'acc-menu-link'),
	            $elem = jquery(this),
	            $sub = $elem.children('[data-submenu]'),
	            subId = $sub[0].id || GetYoDigits(6, 'acc-menu'),
	            isActive = $sub.hasClass('is-active');

	        if (_this.options.parentLink) {
	          var $anchor = $elem.children('a');
	          $anchor.clone().prependTo($sub).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-accordion-submenu-item"></li>');
	        }

	        if (_this.options.submenuToggle) {
	          $elem.addClass('has-submenu-toggle');
	          $elem.children('a').after('<button id="' + linkId + '" class="submenu-toggle" aria-controls="' + subId + '" aria-expanded="' + isActive + '" title="' + _this.options.submenuToggleText + '"><span class="submenu-toggle-text">' + _this.options.submenuToggleText + '</span></button>');
	        } else {
	          $elem.attr({
	            'aria-controls': subId,
	            'aria-expanded': isActive,
	            'id': linkId
	          });
	        }

	        $sub.attr({
	          'aria-labelledby': linkId,
	          'aria-hidden': !isActive,
	          'role': 'group',
	          'id': subId
	        });
	      });
	      this.$element.find('li').attr({
	        'role': 'treeitem'
	      });
	      var initPanes = this.$element.find('.is-active');

	      if (initPanes.length) {
	        var _this = this;

	        initPanes.each(function () {
	          _this.down(jquery(this));
	        });
	      }

	      this._events();
	    }
	    /**
	     * Adds event handlers for items within the menu.
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this = this;

	      this.$element.find('li').each(function () {
	        var $submenu = jquery(this).children('[data-submenu]');

	        if ($submenu.length) {
	          if (_this.options.submenuToggle) {
	            jquery(this).children('.submenu-toggle').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
	              _this.toggle($submenu);
	            });
	          } else {
	            jquery(this).children('a').off('click.zf.accordionMenu').on('click.zf.accordionMenu', function (e) {
	              e.preventDefault();

	              _this.toggle($submenu);
	            });
	          }
	        }
	      }).on('keydown.zf.accordionmenu', function (e) {
	        var $element = jquery(this),
	            $elements = $element.parent('ul').children('li'),
	            $prevElement,
	            $nextElement,
	            $target = $element.children('[data-submenu]');
	        $elements.each(function (i) {
	          if (jquery(this).is($element)) {
	            $prevElement = $elements.eq(Math.max(0, i - 1)).find('a').first();
	            $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1)).find('a').first();

	            if (jquery(this).children('[data-submenu]:visible').length) {
	              // has open sub menu
	              $nextElement = $element.find('li:first-child').find('a').first();
	            }

	            if (jquery(this).is(':first-child')) {
	              // is first element of sub menu
	              $prevElement = $element.parents('li').first().find('a').first();
	            } else if ($prevElement.parents('li').first().children('[data-submenu]:visible').length) {
	              // if previous element has open sub menu
	              $prevElement = $prevElement.parents('li').find('li:last-child').find('a').first();
	            }

	            if (jquery(this).is(':last-child')) {
	              // is last element of sub menu
	              $nextElement = $element.parents('li').first().next('li').find('a').first();
	            }

	            return;
	          }
	        });
	        Keyboard.handleKey(e, 'AccordionMenu', {
	          open: function open() {
	            if ($target.is(':hidden')) {
	              _this.down($target);

	              $target.find('li').first().find('a').first().focus();
	            }
	          },
	          close: function close() {
	            if ($target.length && !$target.is(':hidden')) {
	              // close active sub of this item
	              _this.up($target);
	            } else if ($element.parent('[data-submenu]').length) {
	              // close currently open sub
	              _this.up($element.parent('[data-submenu]'));

	              $element.parents('li').first().find('a').first().focus();
	            }
	          },
	          up: function up() {
	            $prevElement.focus();
	            return true;
	          },
	          down: function down() {
	            $nextElement.focus();
	            return true;
	          },
	          toggle: function toggle() {
	            if (_this.options.submenuToggle) {
	              return false;
	            }

	            if ($element.children('[data-submenu]').length) {
	              _this.toggle($element.children('[data-submenu]'));

	              return true;
	            }
	          },
	          closeAll: function closeAll() {
	            _this.hideAll();
	          },
	          handled: function handled(preventDefault) {
	            if (preventDefault) {
	              e.preventDefault();
	            }

	            e.stopImmediatePropagation();
	          }
	        });
	      }); //.attr('tabindex', 0);
	    }
	    /**
	     * Closes all panes of the menu.
	     * @function
	     */

	  }, {
	    key: "hideAll",
	    value: function hideAll() {
	      this.up(this.$element.find('[data-submenu]'));
	    }
	    /**
	     * Opens all panes of the menu.
	     * @function
	     */

	  }, {
	    key: "showAll",
	    value: function showAll() {
	      this.down(this.$element.find('[data-submenu]'));
	    }
	    /**
	     * Toggles the open/close state of a submenu.
	     * @function
	     * @param {jQuery} $target - the submenu to toggle
	     */

	  }, {
	    key: "toggle",
	    value: function toggle($target) {
	      if (!$target.is(':animated')) {
	        if (!$target.is(':hidden')) {
	          this.up($target);
	        } else {
	          this.down($target);
	        }
	      }
	    }
	    /**
	     * Opens the sub-menu defined by `$target`.
	     * @param {jQuery} $target - Sub-menu to open.
	     * @fires AccordionMenu#down
	     */

	  }, {
	    key: "down",
	    value: function down($target) {
	      var _this2 = this;

	      // If having multiple submenus active is disabled, close all the submenus
	      // that are not parents or children of the targeted submenu.
	      if (!this.options.multiOpen) {
	        // The "branch" of the targetted submenu, from the component root to
	        // the active submenus nested in it.
	        var $targetBranch = $target.parentsUntil(this.$element).add($target).add($target.find('.is-active')); // All the active submenus that are not in the branch.

	        var $othersActiveSubmenus = this.$element.find('.is-active').not($targetBranch);
	        this.up($othersActiveSubmenus);
	      }

	      $target.addClass('is-active').attr({
	        'aria-hidden': false
	      });

	      if (this.options.submenuToggle) {
	        $target.prev('.submenu-toggle').attr({
	          'aria-expanded': true
	        });
	      } else {
	        $target.parent('.is-accordion-submenu-parent').attr({
	          'aria-expanded': true
	        });
	      }

	      $target.slideDown(this.options.slideSpeed, function () {
	        /**
	         * Fires when the menu is done opening.
	         * @event AccordionMenu#down
	         */
	        _this2.$element.trigger('down.zf.accordionMenu', [$target]);
	      });
	    }
	    /**
	     * Closes the sub-menu defined by `$target`. All sub-menus inside the target will be closed as well.
	     * @param {jQuery} $target - Sub-menu to close.
	     * @fires AccordionMenu#up
	     */

	  }, {
	    key: "up",
	    value: function up($target) {
	      var _this3 = this;

	      var $submenus = $target.find('[data-submenu]');
	      var $allmenus = $target.add($submenus);
	      $submenus.slideUp(0);
	      $allmenus.removeClass('is-active').attr('aria-hidden', true);

	      if (this.options.submenuToggle) {
	        $allmenus.prev('.submenu-toggle').attr('aria-expanded', false);
	      } else {
	        $allmenus.parent('.is-accordion-submenu-parent').attr('aria-expanded', false);
	      }

	      $target.slideUp(this.options.slideSpeed, function () {
	        /**
	         * Fires when the menu is done collapsing up.
	         * @event AccordionMenu#up
	         */
	        _this3.$element.trigger('up.zf.accordionMenu', [$target]);
	      });
	    }
	    /**
	     * Destroys an instance of accordion menu.
	     * @fires AccordionMenu#destroyed
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$element.find('[data-submenu]').slideDown(0).css('display', '');
	      this.$element.find('a').off('click.zf.accordionMenu');
	      this.$element.find('[data-is-parent-link]').detach();

	      if (this.options.submenuToggle) {
	        this.$element.find('.has-submenu-toggle').removeClass('has-submenu-toggle');
	        this.$element.find('.submenu-toggle').remove();
	      }

	      Nest.Burn(this.$element, 'accordion');
	    }
	  }]);

	  return AccordionMenu;
	}(Plugin);

	AccordionMenu.defaults = {
	  /**
	   * Adds the parent link to the submenu.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  parentLink: false,

	  /**
	   * Amount of time to animate the opening of a submenu in ms.
	   * @option
	   * @type {number}
	   * @default 250
	   */
	  slideSpeed: 250,

	  /**
	   * Adds a separate submenu toggle button. This allows the parent item to have a link.
	   * @option
	   * @example true
	   */
	  submenuToggle: false,

	  /**
	   * The text used for the submenu toggle if enabled. This is used for screen readers only.
	   * @option
	   * @example true
	   */
	  submenuToggleText: 'Toggle menu',

	  /**
	   * Allow the menu to have multiple open panes.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  multiOpen: true
	};

	/**
	 * Drilldown module.
	 * @module foundation.drilldown
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.nest
	 * @requires foundation.util.box
	 */

	var Drilldown =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Drilldown, _Plugin);

	  function Drilldown() {
	    _classCallCheck(this, Drilldown);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Drilldown).apply(this, arguments));
	  }

	  _createClass(Drilldown, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of a drilldown menu.
	     * @class
	     * @name Drilldown
	     * @param {jQuery} element - jQuery object to make into an accordion menu.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery.extend({}, Drilldown.defaults, this.$element.data(), options);
	      this.className = 'Drilldown'; // ie9 back compat

	      this._init();

	      Keyboard.register('Drilldown', {
	        'ENTER': 'open',
	        'SPACE': 'open',
	        'ARROW_RIGHT': 'next',
	        'ARROW_UP': 'up',
	        'ARROW_DOWN': 'down',
	        'ARROW_LEFT': 'previous',
	        'ESCAPE': 'close',
	        'TAB': 'down',
	        'SHIFT_TAB': 'up'
	      });
	    }
	    /**
	     * Initializes the drilldown by creating jQuery collections of elements
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      Nest.Feather(this.$element, 'drilldown');

	      if (this.options.autoApplyClass) {
	        this.$element.addClass('drilldown');
	      }

	      this.$element.attr({
	        'role': 'tree',
	        'aria-multiselectable': false
	      });
	      this.$submenuAnchors = this.$element.find('li.is-drilldown-submenu-parent').children('a');
	      this.$submenus = this.$submenuAnchors.parent('li').children('[data-submenu]').attr('role', 'group');
	      this.$menuItems = this.$element.find('li').not('.js-drilldown-back').attr('role', 'treeitem').find('a'); // Set the main menu as current by default (unless a submenu is selected)
	      // Used to set the wrapper height when the drilldown is closed/reopened from any (sub)menu

	      this.$currentMenu = this.$element;
	      this.$element.attr('data-mutate', this.$element.attr('data-drilldown') || GetYoDigits(6, 'drilldown'));

	      this._prepareMenu();

	      this._registerEvents();

	      this._keyboardEvents();
	    }
	    /**
	     * prepares drilldown menu by setting attributes to links and elements
	     * sets a min height to prevent content jumping
	     * wraps the element if not already wrapped
	     * @private
	     * @function
	     */

	  }, {
	    key: "_prepareMenu",
	    value: function _prepareMenu() {
	      var _this = this; // if(!this.options.holdOpen){
	      //   this._menuLinkEvents();
	      // }


	      this.$submenuAnchors.each(function () {
	        var $link = jquery(this);
	        var $sub = $link.parent();

	        if (_this.options.parentLink) {
	          $link.clone().prependTo($sub.children('[data-submenu]')).wrap('<li data-is-parent-link class="is-submenu-parent-item is-submenu-item is-drilldown-submenu-item" role="menuitem"></li>');
	        }

	        $link.data('savedHref', $link.attr('href')).removeAttr('href').attr('tabindex', 0);
	        $link.children('[data-submenu]').attr({
	          'aria-hidden': true,
	          'tabindex': 0,
	          'role': 'group'
	        });

	        _this._events($link);
	      });
	      this.$submenus.each(function () {
	        var $menu = jquery(this),
	            $back = $menu.find('.js-drilldown-back');

	        if (!$back.length) {
	          switch (_this.options.backButtonPosition) {
	            case "bottom":
	              $menu.append(_this.options.backButton);
	              break;

	            case "top":
	              $menu.prepend(_this.options.backButton);
	              break;

	            default:
	              console.error("Unsupported backButtonPosition value '" + _this.options.backButtonPosition + "'");
	          }
	        }

	        _this._back($menu);
	      });
	      this.$submenus.addClass('invisible');

	      if (!this.options.autoHeight) {
	        this.$submenus.addClass('drilldown-submenu-cover-previous');
	      } // create a wrapper on element if it doesn't exist.


	      if (!this.$element.parent().hasClass('is-drilldown')) {
	        this.$wrapper = jquery(this.options.wrapper).addClass('is-drilldown');
	        if (this.options.animateHeight) this.$wrapper.addClass('animate-height');
	        this.$element.wrap(this.$wrapper);
	      } // set wrapper


	      this.$wrapper = this.$element.parent();
	      this.$wrapper.css(this._getMaxDims());
	    }
	  }, {
	    key: "_resize",
	    value: function _resize() {
	      this.$wrapper.css({
	        'max-width': 'none',
	        'min-height': 'none'
	      }); // _getMaxDims has side effects (boo) but calling it should update all other necessary heights & widths

	      this.$wrapper.css(this._getMaxDims());
	    }
	    /**
	     * Adds event handlers to elements in the menu.
	     * @function
	     * @private
	     * @param {jQuery} $elem - the current menu item to add handlers to.
	     */

	  }, {
	    key: "_events",
	    value: function _events($elem) {
	      var _this = this;

	      $elem.off('click.zf.drilldown').on('click.zf.drilldown', function (e) {
	        if (jquery(e.target).parentsUntil('ul', 'li').hasClass('is-drilldown-submenu-parent')) {
	          e.stopImmediatePropagation();
	          e.preventDefault();
	        } // if(e.target !== e.currentTarget.firstElementChild){
	        //   return false;
	        // }


	        _this._show($elem.parent('li'));

	        if (_this.options.closeOnClick) {
	          var $body = jquery('body');
	          $body.off('.zf.drilldown').on('click.zf.drilldown', function (e) {
	            if (e.target === _this.$element[0] || jquery.contains(_this.$element[0], e.target)) {
	              return;
	            }

	            e.preventDefault();

	            _this._hideAll();

	            $body.off('.zf.drilldown');
	          });
	        }
	      });
	    }
	    /**
	     * Adds event handlers to the menu element.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_registerEvents",
	    value: function _registerEvents() {
	      if (this.options.scrollTop) {
	        this._bindHandler = this._scrollTop.bind(this);
	        this.$element.on('open.zf.drilldown hide.zf.drilldown closed.zf.drilldown', this._bindHandler);
	      }

	      this.$element.on('mutateme.zf.trigger', this._resize.bind(this));
	    }
	    /**
	     * Scroll to Top of Element or data-scroll-top-element
	     * @function
	     * @fires Drilldown#scrollme
	     */

	  }, {
	    key: "_scrollTop",
	    value: function _scrollTop() {
	      var _this = this;

	      var $scrollTopElement = _this.options.scrollTopElement != '' ? jquery(_this.options.scrollTopElement) : _this.$element,
	          scrollPos = parseInt($scrollTopElement.offset().top + _this.options.scrollTopOffset, 10);
	      jquery('html, body').stop(true).animate({
	        scrollTop: scrollPos
	      }, _this.options.animationDuration, _this.options.animationEasing, function () {
	        /**
	          * Fires after the menu has scrolled
	          * @event Drilldown#scrollme
	          */
	        if (this === jquery('html')[0]) _this.$element.trigger('scrollme.zf.drilldown');
	      });
	    }
	    /**
	     * Adds keydown event listener to `li`'s in the menu.
	     * @private
	     */

	  }, {
	    key: "_keyboardEvents",
	    value: function _keyboardEvents() {
	      var _this = this;

	      this.$menuItems.add(this.$element.find('.js-drilldown-back > a, .is-submenu-parent-item > a')).on('keydown.zf.drilldown', function (e) {
	        var $element = jquery(this),
	            $elements = $element.parent('li').parent('ul').children('li').children('a'),
	            $prevElement,
	            $nextElement;
	        $elements.each(function (i) {
	          if (jquery(this).is($element)) {
	            $prevElement = $elements.eq(Math.max(0, i - 1));
	            $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
	            return;
	          }
	        });
	        Keyboard.handleKey(e, 'Drilldown', {
	          next: function next() {
	            if ($element.is(_this.$submenuAnchors)) {
	              _this._show($element.parent('li'));

	              $element.parent('li').one(transitionend($element), function () {
	                $element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();
	              });
	              return true;
	            }
	          },
	          previous: function previous() {
	            _this._hide($element.parent('li').parent('ul'));

	            $element.parent('li').parent('ul').one(transitionend($element), function () {
	              setTimeout(function () {
	                $element.parent('li').parent('ul').parent('li').children('a').first().focus();
	              }, 1);
	            });
	            return true;
	          },
	          up: function up() {
	            $prevElement.focus(); // Don't tap focus on first element in root ul

	            return !$element.is(_this.$element.find('> li:first-child > a'));
	          },
	          down: function down() {
	            $nextElement.focus(); // Don't tap focus on last element in root ul

	            return !$element.is(_this.$element.find('> li:last-child > a'));
	          },
	          close: function close() {
	            // Don't close on element in root ul
	            if (!$element.is(_this.$element.find('> li > a'))) {
	              _this._hide($element.parent().parent());

	              $element.parent().parent().siblings('a').focus();
	            }
	          },
	          open: function open() {
	            if (_this.options.parentLink && $element.attr('href')) {
	              // Link with href
	              return false;
	            } else if (!$element.is(_this.$menuItems)) {
	              // not menu item means back button
	              _this._hide($element.parent('li').parent('ul'));

	              $element.parent('li').parent('ul').one(transitionend($element), function () {
	                setTimeout(function () {
	                  $element.parent('li').parent('ul').parent('li').children('a').first().focus();
	                }, 1);
	              });
	              return true;
	            } else if ($element.is(_this.$submenuAnchors)) {
	              // Sub menu item
	              _this._show($element.parent('li'));

	              $element.parent('li').one(transitionend($element), function () {
	                $element.parent('li').find('ul li a').not('.js-drilldown-back a').first().focus();
	              });
	              return true;
	            }
	          },
	          handled: function handled(preventDefault) {
	            if (preventDefault) {
	              e.preventDefault();
	            }

	            e.stopImmediatePropagation();
	          }
	        });
	      }); // end keyboardAccess
	    }
	    /**
	     * Closes all open elements, and returns to root menu.
	     * @function
	     * @fires Drilldown#closed
	     */

	  }, {
	    key: "_hideAll",
	    value: function _hideAll() {
	      var $elem = this.$element.find('.is-drilldown-submenu.is-active').addClass('is-closing');
	      if (this.options.autoHeight) this.$wrapper.css({
	        height: $elem.parent().closest('ul').data('calcHeight')
	      });
	      $elem.one(transitionend($elem), function (e) {
	        $elem.removeClass('is-active is-closing');
	      });
	      /**
	       * Fires when the menu is fully closed.
	       * @event Drilldown#closed
	       */

	      this.$element.trigger('closed.zf.drilldown');
	    }
	    /**
	     * Adds event listener for each `back` button, and closes open menus.
	     * @function
	     * @fires Drilldown#back
	     * @param {jQuery} $elem - the current sub-menu to add `back` event.
	     */

	  }, {
	    key: "_back",
	    value: function _back($elem) {
	      var _this = this;

	      $elem.off('click.zf.drilldown');
	      $elem.children('.js-drilldown-back').on('click.zf.drilldown', function (e) {
	        e.stopImmediatePropagation(); // console.log('mouseup on back');

	        _this._hide($elem); // If there is a parent submenu, call show


	        var parentSubMenu = $elem.parent('li').parent('ul').parent('li');

	        if (parentSubMenu.length) {
	          _this._show(parentSubMenu);
	        }
	      });
	    }
	    /**
	     * Adds event listener to menu items w/o submenus to close open menus on click.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_menuLinkEvents",
	    value: function _menuLinkEvents() {
	      var _this = this;

	      this.$menuItems.not('.is-drilldown-submenu-parent').off('click.zf.drilldown').on('click.zf.drilldown', function (e) {
	        // e.stopImmediatePropagation();
	        setTimeout(function () {
	          _this._hideAll();
	        }, 0);
	      });
	    }
	    /**
	     * Sets the CSS classes for submenu to show it.
	     * @function
	     * @private
	     * @param {jQuery} $elem - the target submenu (`ul` tag)
	     * @param {boolean} trigger - trigger drilldown event
	     */

	  }, {
	    key: "_setShowSubMenuClasses",
	    value: function _setShowSubMenuClasses($elem, trigger) {
	      $elem.addClass('is-active').removeClass('invisible').attr('aria-hidden', false);
	      $elem.parent('li').attr('aria-expanded', true);

	      if (trigger === true) {
	        this.$element.trigger('open.zf.drilldown', [$elem]);
	      }
	    }
	    /**
	     * Sets the CSS classes for submenu to hide it.
	     * @function
	     * @private
	     * @param {jQuery} $elem - the target submenu (`ul` tag)
	     * @param {boolean} trigger - trigger drilldown event
	     */

	  }, {
	    key: "_setHideSubMenuClasses",
	    value: function _setHideSubMenuClasses($elem, trigger) {
	      $elem.removeClass('is-active').addClass('invisible').attr('aria-hidden', true);
	      $elem.parent('li').attr('aria-expanded', false);

	      if (trigger === true) {
	        $elem.trigger('hide.zf.drilldown', [$elem]);
	      }
	    }
	    /**
	     * Opens a specific drilldown (sub)menu no matter which (sub)menu in it is currently visible.
	     * Compared to _show() this lets you jump into any submenu without clicking through every submenu on the way to it.
	     * @function
	     * @fires Drilldown#open
	     * @param {jQuery} $elem - the target (sub)menu (`ul` tag)
	     * @param {boolean} autoFocus - if true the first link in the target (sub)menu gets auto focused
	     */

	  }, {
	    key: "_showMenu",
	    value: function _showMenu($elem, autoFocus) {
	      var _this = this; // Reset drilldown


	      var $expandedSubmenus = this.$element.find('li[aria-expanded="true"] > ul[data-submenu]');
	      $expandedSubmenus.each(function (index) {
	        _this._setHideSubMenuClasses(jquery(this));
	      }); // Save the menu as the currently displayed one.

	      this.$currentMenu = $elem; // If target menu is root, focus first link & exit

	      if ($elem.is('[data-drilldown]')) {
	        if (autoFocus === true) $elem.find('li[role="treeitem"] > a').first().focus();
	        if (this.options.autoHeight) this.$wrapper.css('height', $elem.data('calcHeight'));
	        return;
	      } // Find all submenus on way to root incl. the element itself


	      var $submenus = $elem.children().first().parentsUntil('[data-drilldown]', '[data-submenu]'); // Open target menu and all submenus on its way to root

	      $submenus.each(function (index) {
	        // Update height of first child (target menu) if autoHeight option true
	        if (index === 0 && _this.options.autoHeight) {
	          _this.$wrapper.css('height', jquery(this).data('calcHeight'));
	        }

	        var isLastChild = index == $submenus.length - 1; // Add transitionsend listener to last child (root due to reverse order) to open target menu's first link
	        // Last child makes sure the event gets always triggered even if going through several menus

	        if (isLastChild === true) {
	          jquery(this).one(transitionend(jquery(this)), function () {
	            if (autoFocus === true) {
	              $elem.find('li[role="treeitem"] > a').first().focus();
	            }
	          });
	        }

	        _this._setShowSubMenuClasses(jquery(this), isLastChild);
	      });
	    }
	    /**
	     * Opens a submenu.
	     * @function
	     * @fires Drilldown#open
	     * @param {jQuery} $elem - the current element with a submenu to open, i.e. the `li` tag.
	     */

	  }, {
	    key: "_show",
	    value: function _show($elem) {
	      var $submenu = $elem.children('[data-submenu]');
	      $elem.attr('aria-expanded', true);
	      this.$currentMenu = $submenu;
	      $submenu.addClass('is-active').removeClass('invisible').attr('aria-hidden', false);

	      if (this.options.autoHeight) {
	        this.$wrapper.css({
	          height: $submenu.data('calcHeight')
	        });
	      }
	      /**
	       * Fires when the submenu has opened.
	       * @event Drilldown#open
	       */


	      this.$element.trigger('open.zf.drilldown', [$elem]);
	    }
	    /**
	     * Hides a submenu
	     * @function
	     * @fires Drilldown#hide
	     * @param {jQuery} $elem - the current sub-menu to hide, i.e. the `ul` tag.
	     */

	  }, {
	    key: "_hide",
	    value: function _hide($elem) {
	      if (this.options.autoHeight) this.$wrapper.css({
	        height: $elem.parent().closest('ul').data('calcHeight')
	      });

	      $elem.parent('li').attr('aria-expanded', false);
	      $elem.attr('aria-hidden', true);
	      $elem.addClass('is-closing').one(transitionend($elem), function () {
	        $elem.removeClass('is-active is-closing');
	        $elem.blur().addClass('invisible');
	      });
	      /**
	       * Fires when the submenu has closed.
	       * @event Drilldown#hide
	       */

	      $elem.trigger('hide.zf.drilldown', [$elem]);
	    }
	    /**
	     * Iterates through the nested menus to calculate the min-height, and max-width for the menu.
	     * Prevents content jumping.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_getMaxDims",
	    value: function _getMaxDims() {
	      var maxHeight = 0,
	          result = {},
	          _this = this; // Recalculate menu heights and total max height


	      this.$submenus.add(this.$element).each(function () {
	        var numOfElems = jquery(this).children('li').length;
	        var height = Box.GetDimensions(this).height;
	        maxHeight = height > maxHeight ? height : maxHeight;

	        if (_this.options.autoHeight) {
	          jquery(this).data('calcHeight', height);
	        }
	      });
	      if (this.options.autoHeight) result['height'] = this.$currentMenu.data('calcHeight');else result['min-height'] = "".concat(maxHeight, "px");
	      result['max-width'] = "".concat(this.$element[0].getBoundingClientRect().width, "px");
	      return result;
	    }
	    /**
	     * Destroys the Drilldown Menu
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      if (this.options.scrollTop) this.$element.off('.zf.drilldown', this._bindHandler);

	      this._hideAll();

	      this.$element.off('mutateme.zf.trigger');
	      Nest.Burn(this.$element, 'drilldown');
	      this.$element.unwrap().find('.js-drilldown-back, .is-submenu-parent-item').remove().end().find('.is-active, .is-closing, .is-drilldown-submenu').removeClass('is-active is-closing is-drilldown-submenu').end().find('[data-submenu]').removeAttr('aria-hidden tabindex role');
	      this.$submenuAnchors.each(function () {
	        jquery(this).off('.zf.drilldown');
	      });
	      this.$element.find('[data-is-parent-link]').detach();
	      this.$submenus.removeClass('drilldown-submenu-cover-previous invisible');
	      this.$element.find('a').each(function () {
	        var $link = jquery(this);
	        $link.removeAttr('tabindex');

	        if ($link.data('savedHref')) {
	          $link.attr('href', $link.data('savedHref')).removeData('savedHref');
	        } else {
	          return;
	        }
	      });
	    }
	  }]);

	  return Drilldown;
	}(Plugin);

	Drilldown.defaults = {
	  /**
	   * Drilldowns depend on styles in order to function properly; in the default build of Foundation these are
	   * on the `drilldown` class. This option auto-applies this class to the drilldown upon initialization.
	   * @option
	   * @type {boolian}
	   * @default true
	   */
	  autoApplyClass: true,

	  /**
	   * Markup used for JS generated back button. Prepended  or appended (see backButtonPosition) to submenu lists and deleted on `destroy` method, 'js-drilldown-back' class required. Remove the backslash (`\`) if copy and pasting.
	   * @option
	   * @type {string}
	   * @default '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>'
	   */
	  backButton: '<li class="js-drilldown-back"><a tabindex="0">Back</a></li>',

	  /**
	   * Position the back button either at the top or bottom of drilldown submenus. Can be `'left'` or `'bottom'`.
	   * @option
	   * @type {string}
	   * @default top
	   */
	  backButtonPosition: 'top',

	  /**
	   * Markup used to wrap drilldown menu. Use a class name for independent styling; the JS applied class: `is-drilldown` is required. Remove the backslash (`\`) if copy and pasting.
	   * @option
	   * @type {string}
	   * @default '<div></div>'
	   */
	  wrapper: '<div></div>',

	  /**
	   * Adds the parent link to the submenu.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  parentLink: false,

	  /**
	   * Allow the menu to return to root list on body click.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  closeOnClick: false,

	  /**
	   * Allow the menu to auto adjust height.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  autoHeight: false,

	  /**
	   * Animate the auto adjust height.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  animateHeight: false,

	  /**
	   * Scroll to the top of the menu after opening a submenu or navigating back using the menu back button
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  scrollTop: false,

	  /**
	   * String jquery selector (for example 'body') of element to take offset().top from, if empty string the drilldown menu offset().top is taken
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  scrollTopElement: '',

	  /**
	   * ScrollTop offset
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  scrollTopOffset: 0,

	  /**
	   * Scroll animation duration
	   * @option
	   * @type {number}
	   * @default 500
	   */
	  animationDuration: 500,

	  /**
	   * Scroll animation easing. Can be `'swing'` or `'linear'`.
	   * @option
	   * @type {string}
	   * @see {@link https://api.jquery.com/animate|JQuery animate}
	   * @default 'swing'
	   */
	  animationEasing: 'swing' // holdOpen: false

	};

	var POSITIONS = ['left', 'right', 'top', 'bottom'];
	var VERTICAL_ALIGNMENTS = ['top', 'bottom', 'center'];
	var HORIZONTAL_ALIGNMENTS = ['left', 'right', 'center'];
	var ALIGNMENTS = {
	  'left': VERTICAL_ALIGNMENTS,
	  'right': VERTICAL_ALIGNMENTS,
	  'top': HORIZONTAL_ALIGNMENTS,
	  'bottom': HORIZONTAL_ALIGNMENTS
	};

	function nextItem(item, array) {
	  var currentIdx = array.indexOf(item);

	  if (currentIdx === array.length - 1) {
	    return array[0];
	  } else {
	    return array[currentIdx + 1];
	  }
	}

	var Positionable =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Positionable, _Plugin);

	  function Positionable() {
	    _classCallCheck(this, Positionable);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Positionable).apply(this, arguments));
	  }

	  _createClass(Positionable, [{
	    key: "_init",

	    /**
	     * Abstract class encapsulating the tether-like explicit positioning logic
	     * including repositioning based on overlap.
	     * Expects classes to define defaults for vOffset, hOffset, position,
	     * alignment, allowOverlap, and allowBottomOverlap. They can do this by
	     * extending the defaults, or (for now recommended due to the way docs are
	     * generated) by explicitly declaring them.
	     *
	     **/
	    value: function _init() {
	      this.triedPositions = {};
	      this.position = this.options.position === 'auto' ? this._getDefaultPosition() : this.options.position;
	      this.alignment = this.options.alignment === 'auto' ? this._getDefaultAlignment() : this.options.alignment;
	      this.originalPosition = this.position;
	      this.originalAlignment = this.alignment;
	    }
	  }, {
	    key: "_getDefaultPosition",
	    value: function _getDefaultPosition() {
	      return 'bottom';
	    }
	  }, {
	    key: "_getDefaultAlignment",
	    value: function _getDefaultAlignment() {
	      switch (this.position) {
	        case 'bottom':
	        case 'top':
	          return rtl() ? 'right' : 'left';

	        case 'left':
	        case 'right':
	          return 'bottom';
	      }
	    }
	    /**
	     * Adjusts the positionable possible positions by iterating through alignments
	     * and positions.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_reposition",
	    value: function _reposition() {
	      if (this._alignmentsExhausted(this.position)) {
	        this.position = nextItem(this.position, POSITIONS);
	        this.alignment = ALIGNMENTS[this.position][0];
	      } else {
	        this._realign();
	      }
	    }
	    /**
	     * Adjusts the dropdown pane possible positions by iterating through alignments
	     * on the current position.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_realign",
	    value: function _realign() {
	      this._addTriedPosition(this.position, this.alignment);

	      this.alignment = nextItem(this.alignment, ALIGNMENTS[this.position]);
	    }
	  }, {
	    key: "_addTriedPosition",
	    value: function _addTriedPosition(position, alignment) {
	      this.triedPositions[position] = this.triedPositions[position] || [];
	      this.triedPositions[position].push(alignment);
	    }
	  }, {
	    key: "_positionsExhausted",
	    value: function _positionsExhausted() {
	      var isExhausted = true;

	      for (var i = 0; i < POSITIONS.length; i++) {
	        isExhausted = isExhausted && this._alignmentsExhausted(POSITIONS[i]);
	      }

	      return isExhausted;
	    }
	  }, {
	    key: "_alignmentsExhausted",
	    value: function _alignmentsExhausted(position) {
	      return this.triedPositions[position] && this.triedPositions[position].length == ALIGNMENTS[position].length;
	    } // When we're trying to center, we don't want to apply offset that's going to
	    // take us just off center, so wrap around to return 0 for the appropriate
	    // offset in those alignments.  TODO: Figure out if we want to make this
	    // configurable behavior... it feels more intuitive, especially for tooltips, but
	    // it's possible someone might actually want to start from center and then nudge
	    // slightly off.

	  }, {
	    key: "_getVOffset",
	    value: function _getVOffset() {
	      return this.options.vOffset;
	    }
	  }, {
	    key: "_getHOffset",
	    value: function _getHOffset() {
	      return this.options.hOffset;
	    }
	  }, {
	    key: "_setPosition",
	    value: function _setPosition($anchor, $element, $parent) {
	      if ($anchor.attr('aria-expanded') === 'false') {
	        return false;
	      }

	      var $eleDims = Box.GetDimensions($element),
	          $anchorDims = Box.GetDimensions($anchor);

	      if (!this.options.allowOverlap) {
	        // restore original position & alignment before checking overlap
	        this.position = this.originalPosition;
	        this.alignment = this.originalAlignment;
	      }

	      $element.offset(Box.GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));

	      if (!this.options.allowOverlap) {
	        var minOverlap = 100000000; // default coordinates to how we start, in case we can't figure out better

	        var minCoordinates = {
	          position: this.position,
	          alignment: this.alignment
	        };

	        while (!this._positionsExhausted()) {
	          var overlap = Box.OverlapArea($element, $parent, false, false, this.options.allowBottomOverlap);

	          if (overlap === 0) {
	            return;
	          }

	          if (overlap < minOverlap) {
	            minOverlap = overlap;
	            minCoordinates = {
	              position: this.position,
	              alignment: this.alignment
	            };
	          }

	          this._reposition();

	          $element.offset(Box.GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
	        } // If we get through the entire loop, there was no non-overlapping
	        // position available. Pick the version with least overlap.


	        this.position = minCoordinates.position;
	        this.alignment = minCoordinates.alignment;
	        $element.offset(Box.GetExplicitOffsets($element, $anchor, this.position, this.alignment, this._getVOffset(), this._getHOffset()));
	      }
	    }
	  }]);

	  return Positionable;
	}(Plugin);

	Positionable.defaults = {
	  /**
	   * Position of positionable relative to anchor. Can be left, right, bottom, top, or auto.
	   * @option
	   * @type {string}
	   * @default 'auto'
	   */
	  position: 'auto',

	  /**
	   * Alignment of positionable relative to anchor. Can be left, right, bottom, top, center, or auto.
	   * @option
	   * @type {string}
	   * @default 'auto'
	   */
	  alignment: 'auto',

	  /**
	   * Allow overlap of container/window. If false, dropdown positionable first
	   * try to position as defined by data-position and data-alignment, but
	   * reposition if it would cause an overflow.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  allowOverlap: false,

	  /**
	   * Allow overlap of only the bottom of the container. This is the most common
	   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
	   * screen but not otherwise influence or break out of the container.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  allowBottomOverlap: true,

	  /**
	   * Number of pixels the positionable should be separated vertically from anchor
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  vOffset: 0,

	  /**
	   * Number of pixels the positionable should be separated horizontally from anchor
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  hOffset: 0
	};

	/**
	 * Dropdown module.
	 * @module foundation.dropdown
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.box
	 * @requires foundation.util.triggers
	 */

	var Dropdown =
	/*#__PURE__*/
	function (_Positionable) {
	  _inherits(Dropdown, _Positionable);

	  function Dropdown() {
	    _classCallCheck(this, Dropdown);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).apply(this, arguments));
	  }

	  _createClass(Dropdown, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of a dropdown.
	     * @class
	     * @name Dropdown
	     * @param {jQuery} element - jQuery object to make into a dropdown.
	     *        Object should be of the dropdown panel, rather than its anchor.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery.extend({}, Dropdown.defaults, this.$element.data(), options);
	      this.className = 'Dropdown'; // ie9 back compat
	      // Triggers init is idempotent, just need to make sure it is initialized

	      Triggers.init(jquery);

	      this._init();

	      Keyboard.register('Dropdown', {
	        'ENTER': 'toggle',
	        'SPACE': 'toggle',
	        'ESCAPE': 'close'
	      });
	    }
	    /**
	     * Initializes the plugin by setting/checking options and attributes, adding helper variables, and saving the anchor.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      var $id = this.$element.attr('id');
	      this.$anchors = jquery("[data-toggle=\"".concat($id, "\"]")).length ? jquery("[data-toggle=\"".concat($id, "\"]")) : jquery("[data-open=\"".concat($id, "\"]"));
	      this.$anchors.attr({
	        'aria-controls': $id,
	        'data-is-focus': false,
	        'data-yeti-box': $id,
	        'aria-haspopup': true,
	        'aria-expanded': false
	      });

	      this._setCurrentAnchor(this.$anchors.first());

	      if (this.options.parentClass) {
	        this.$parent = this.$element.parents('.' + this.options.parentClass);
	      } else {
	        this.$parent = null;
	      } // Set [aria-labelledby] on the Dropdown if it is not set


	      if (typeof this.$element.attr('aria-labelledby') === 'undefined') {
	        // Get the anchor ID or create one
	        if (typeof this.$currentAnchor.attr('id') === 'undefined') {
	          this.$currentAnchor.attr('id', GetYoDigits(6, 'dd-anchor'));
	        }
	        this.$element.attr('aria-labelledby', this.$currentAnchor.attr('id'));
	      }

	      this.$element.attr({
	        'aria-hidden': 'true',
	        'data-yeti-box': $id,
	        'data-resize': $id
	      });

	      _get(_getPrototypeOf(Dropdown.prototype), "_init", this).call(this);

	      this._events();
	    }
	  }, {
	    key: "_getDefaultPosition",
	    value: function _getDefaultPosition() {
	      // handle legacy classnames
	      var position = this.$element[0].className.match(/(top|left|right|bottom)/g);

	      if (position) {
	        return position[0];
	      } else {
	        return 'bottom';
	      }
	    }
	  }, {
	    key: "_getDefaultAlignment",
	    value: function _getDefaultAlignment() {
	      // handle legacy float approach
	      var horizontalPosition = /float-(\S+)/.exec(this.$currentAnchor.attr('class'));

	      if (horizontalPosition) {
	        return horizontalPosition[1];
	      }

	      return _get(_getPrototypeOf(Dropdown.prototype), "_getDefaultAlignment", this).call(this);
	    }
	    /**
	     * Sets the position and orientation of the dropdown pane, checks for collisions if allow-overlap is not true.
	     * Recursively calls itself if a collision is detected, with a new position class.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_setPosition",
	    value: function _setPosition() {
	      this.$element.removeClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment));

	      _get(_getPrototypeOf(Dropdown.prototype), "_setPosition", this).call(this, this.$currentAnchor, this.$element, this.$parent);

	      this.$element.addClass("has-position-".concat(this.position, " has-alignment-").concat(this.alignment));
	    }
	    /**
	     * Make it a current anchor.
	     * Current anchor as the reference for the position of Dropdown panes.
	     * @param {HTML} el - DOM element of the anchor.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_setCurrentAnchor",
	    value: function _setCurrentAnchor(el) {
	      this.$currentAnchor = jquery(el);
	    }
	    /**
	     * Adds event listeners to the element utilizing the triggers utility library.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this = this;

	      this.$element.on({
	        'open.zf.trigger': this.open.bind(this),
	        'close.zf.trigger': this.close.bind(this),
	        'toggle.zf.trigger': this.toggle.bind(this),
	        'resizeme.zf.trigger': this._setPosition.bind(this)
	      });
	      this.$anchors.off('click.zf.trigger').on('click.zf.trigger', function () {
	        _this._setCurrentAnchor(this);
	      });

	      if (this.options.hover) {
	        this.$anchors.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function () {
	          _this._setCurrentAnchor(this);

	          var bodyData = jquery('body').data();

	          if (typeof bodyData.whatinput === 'undefined' || bodyData.whatinput === 'mouse') {
	            clearTimeout(_this.timeout);
	            _this.timeout = setTimeout(function () {
	              _this.open();

	              _this.$anchors.data('hover', true);
	            }, _this.options.hoverDelay);
	          }
	        }).on('mouseleave.zf.dropdown', ignoreMousedisappear(function () {
	          clearTimeout(_this.timeout);
	          _this.timeout = setTimeout(function () {
	            _this.close();

	            _this.$anchors.data('hover', false);
	          }, _this.options.hoverDelay);
	        }));

	        if (this.options.hoverPane) {
	          this.$element.off('mouseenter.zf.dropdown mouseleave.zf.dropdown').on('mouseenter.zf.dropdown', function () {
	            clearTimeout(_this.timeout);
	          }).on('mouseleave.zf.dropdown', ignoreMousedisappear(function () {
	            clearTimeout(_this.timeout);
	            _this.timeout = setTimeout(function () {
	              _this.close();

	              _this.$anchors.data('hover', false);
	            }, _this.options.hoverDelay);
	          }));
	        }
	      }

	      this.$anchors.add(this.$element).on('keydown.zf.dropdown', function (e) {
	        var $target = jquery(this),
	            visibleFocusableElements = Keyboard.findFocusable(_this.$element);
	        Keyboard.handleKey(e, 'Dropdown', {
	          open: function open() {
	            if ($target.is(_this.$anchors) && !$target.is('input, textarea')) {
	              _this.open();

	              _this.$element.attr('tabindex', -1).focus();

	              e.preventDefault();
	            }
	          },
	          close: function close() {
	            _this.close();

	            _this.$anchors.focus();
	          }
	        });
	      });
	    }
	    /**
	     * Adds an event handler to the body to close any dropdowns on a click.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_addBodyHandler",
	    value: function _addBodyHandler() {
	      var $body = jquery(document.body).not(this.$element),
	          _this = this;

	      $body.off('click.zf.dropdown').on('click.zf.dropdown', function (e) {
	        if (_this.$anchors.is(e.target) || _this.$anchors.find(e.target).length) {
	          return;
	        }

	        if (_this.$element.is(e.target) || _this.$element.find(e.target).length) {
	          return;
	        }

	        _this.close();

	        $body.off('click.zf.dropdown');
	      });
	    }
	    /**
	     * Opens the dropdown pane, and fires a bubbling event to close other dropdowns.
	     * @function
	     * @fires Dropdown#closeme
	     * @fires Dropdown#show
	     */

	  }, {
	    key: "open",
	    value: function open() {
	      // var _this = this;

	      /**
	       * Fires to close other open dropdowns, typically when dropdown is opening
	       * @event Dropdown#closeme
	       */
	      this.$element.trigger('closeme.zf.dropdown', this.$element.attr('id'));
	      this.$anchors.addClass('hover').attr({
	        'aria-expanded': true
	      }); // this.$element/*.show()*/;

	      this.$element.addClass('is-opening');

	      this._setPosition();

	      this.$element.removeClass('is-opening').addClass('is-open').attr({
	        'aria-hidden': false
	      });

	      if (this.options.autoFocus) {
	        var $focusable = Keyboard.findFocusable(this.$element);

	        if ($focusable.length) {
	          $focusable.eq(0).focus();
	        }
	      }

	      if (this.options.closeOnClick) {
	        this._addBodyHandler();
	      }

	      if (this.options.trapFocus) {
	        Keyboard.trapFocus(this.$element);
	      }
	      /**
	       * Fires once the dropdown is visible.
	       * @event Dropdown#show
	       */


	      this.$element.trigger('show.zf.dropdown', [this.$element]);
	    }
	    /**
	     * Closes the open dropdown pane.
	     * @function
	     * @fires Dropdown#hide
	     */

	  }, {
	    key: "close",
	    value: function close() {
	      if (!this.$element.hasClass('is-open')) {
	        return false;
	      }

	      this.$element.removeClass('is-open').attr({
	        'aria-hidden': true
	      });
	      this.$anchors.removeClass('hover').attr('aria-expanded', false);
	      /**
	       * Fires once the dropdown is no longer visible.
	       * @event Dropdown#hide
	       */

	      this.$element.trigger('hide.zf.dropdown', [this.$element]);

	      if (this.options.trapFocus) {
	        Keyboard.releaseFocus(this.$element);
	      }
	    }
	    /**
	     * Toggles the dropdown pane's visibility.
	     * @function
	     */

	  }, {
	    key: "toggle",
	    value: function toggle() {
	      if (this.$element.hasClass('is-open')) {
	        if (this.$anchors.data('hover')) return;
	        this.close();
	      } else {
	        this.open();
	      }
	    }
	    /**
	     * Destroys the dropdown.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$element.off('.zf.trigger').hide();
	      this.$anchors.off('.zf.dropdown');
	      jquery(document.body).off('click.zf.dropdown');
	    }
	  }]);

	  return Dropdown;
	}(Positionable);

	Dropdown.defaults = {
	  /**
	   * Class that designates bounding container of Dropdown (default: window)
	   * @option
	   * @type {?string}
	   * @default null
	   */
	  parentClass: null,

	  /**
	   * Amount of time to delay opening a submenu on hover event.
	   * @option
	   * @type {number}
	   * @default 250
	   */
	  hoverDelay: 250,

	  /**
	   * Allow submenus to open on hover events
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  hover: false,

	  /**
	   * Don't close dropdown when hovering over dropdown pane
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  hoverPane: false,

	  /**
	   * Number of pixels between the dropdown pane and the triggering element on open.
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  vOffset: 0,

	  /**
	   * Number of pixels between the dropdown pane and the triggering element on open.
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  hOffset: 0,

	  /**
	   * Position of dropdown. Can be left, right, bottom, top, or auto.
	   * @option
	   * @type {string}
	   * @default 'auto'
	   */
	  position: 'auto',

	  /**
	   * Alignment of dropdown relative to anchor. Can be left, right, bottom, top, center, or auto.
	   * @option
	   * @type {string}
	   * @default 'auto'
	   */
	  alignment: 'auto',

	  /**
	   * Allow overlap of container/window. If false, dropdown will first try to position as defined by data-position and data-alignment, but reposition if it would cause an overflow.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  allowOverlap: false,

	  /**
	   * Allow overlap of only the bottom of the container. This is the most common
	   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
	   * screen but not otherwise influence or break out of the container.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  allowBottomOverlap: true,

	  /**
	   * Allow the plugin to trap focus to the dropdown pane if opened with keyboard commands.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  trapFocus: false,

	  /**
	   * Allow the plugin to set focus to the first focusable element within the pane, regardless of method of opening.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  autoFocus: false,

	  /**
	   * Allows a click on the body to close the dropdown.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  closeOnClick: false
	};

	/**
	 * DropdownMenu module.
	 * @module foundation.dropdown-menu
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.box
	 * @requires foundation.util.nest
	 */

	var DropdownMenu =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(DropdownMenu, _Plugin);

	  function DropdownMenu() {
	    _classCallCheck(this, DropdownMenu);

	    return _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).apply(this, arguments));
	  }

	  _createClass(DropdownMenu, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of DropdownMenu.
	     * @class
	     * @name DropdownMenu
	     * @fires DropdownMenu#init
	     * @param {jQuery} element - jQuery object to make into a dropdown menu.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery.extend({}, DropdownMenu.defaults, this.$element.data(), options);
	      this.className = 'DropdownMenu'; // ie9 back compat

	      this._init();

	      Keyboard.register('DropdownMenu', {
	        'ENTER': 'open',
	        'SPACE': 'open',
	        'ARROW_RIGHT': 'next',
	        'ARROW_UP': 'up',
	        'ARROW_DOWN': 'down',
	        'ARROW_LEFT': 'previous',
	        'ESCAPE': 'close'
	      });
	    }
	    /**
	     * Initializes the plugin, and calls _prepareMenu
	     * @private
	     * @function
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      Nest.Feather(this.$element, 'dropdown');
	      var subs = this.$element.find('li.is-dropdown-submenu-parent');
	      this.$element.children('.is-dropdown-submenu-parent').children('.is-dropdown-submenu').addClass('first-sub');
	      this.$menuItems = this.$element.find('[role="menuitem"]');
	      this.$tabs = this.$element.children('[role="menuitem"]');
	      this.$tabs.find('ul.is-dropdown-submenu').addClass(this.options.verticalClass);

	      if (this.options.alignment === 'auto') {
	        if (this.$element.hasClass(this.options.rightClass) || rtl() || this.$element.parents('.top-bar-right').is('*')) {
	          this.options.alignment = 'right';
	          subs.addClass('opens-left');
	        } else {
	          this.options.alignment = 'left';
	          subs.addClass('opens-right');
	        }
	      } else {
	        if (this.options.alignment === 'right') {
	          subs.addClass('opens-left');
	        } else {
	          subs.addClass('opens-right');
	        }
	      }

	      this.changed = false;

	      this._events();
	    }
	  }, {
	    key: "_isVertical",
	    value: function _isVertical() {
	      return this.$tabs.css('display') === 'block' || this.$element.css('flex-direction') === 'column';
	    }
	  }, {
	    key: "_isRtl",
	    value: function _isRtl() {
	      return this.$element.hasClass('align-right') || rtl() && !this.$element.hasClass('align-left');
	    }
	    /**
	     * Adds event listeners to elements within the menu
	     * @private
	     * @function
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this = this,
	          hasTouch = 'ontouchstart' in window || typeof window.ontouchstart !== 'undefined',
	          parClass = 'is-dropdown-submenu-parent'; // used for onClick and in the keyboard handlers


	      var handleClickFn = function handleClickFn(e) {
	        var $elem = jquery(e.target).parentsUntil('ul', ".".concat(parClass)),
	            hasSub = $elem.hasClass(parClass),
	            hasClicked = $elem.attr('data-is-click') === 'true',
	            $sub = $elem.children('.is-dropdown-submenu');

	        if (hasSub) {
	          if (hasClicked) {
	            if (!_this.options.closeOnClick || !_this.options.clickOpen && !hasTouch || _this.options.forceFollow && hasTouch) {
	              return;
	            } else {
	              e.stopImmediatePropagation();
	              e.preventDefault();

	              _this._hide($elem);
	            }
	          } else {
	            e.preventDefault();
	            e.stopImmediatePropagation();

	            _this._show($sub);

	            $elem.add($elem.parentsUntil(_this.$element, ".".concat(parClass))).attr('data-is-click', true);
	          }
	        }
	      };

	      if (this.options.clickOpen || hasTouch) {
	        this.$menuItems.on('click.zf.dropdownmenu touchstart.zf.dropdownmenu', handleClickFn);
	      } // Handle Leaf element Clicks


	      if (_this.options.closeOnClickInside) {
	        this.$menuItems.on('click.zf.dropdownmenu', function (e) {
	          var $elem = jquery(this),
	              hasSub = $elem.hasClass(parClass);

	          if (!hasSub) {
	            _this._hide();
	          }
	        });
	      }

	      if (!this.options.disableHover) {
	        this.$menuItems.on('mouseenter.zf.dropdownmenu', function (e) {
	          var $elem = jquery(this),
	              hasSub = $elem.hasClass(parClass);

	          if (hasSub) {
	            clearTimeout($elem.data('_delay'));
	            $elem.data('_delay', setTimeout(function () {
	              _this._show($elem.children('.is-dropdown-submenu'));
	            }, _this.options.hoverDelay));
	          }
	        }).on('mouseleave.zf.dropdownMenu', ignoreMousedisappear(function (e) {
	          var $elem = jquery(this),
	              hasSub = $elem.hasClass(parClass);

	          if (hasSub && _this.options.autoclose) {
	            if ($elem.attr('data-is-click') === 'true' && _this.options.clickOpen) {
	              return false;
	            }

	            clearTimeout($elem.data('_delay'));
	            $elem.data('_delay', setTimeout(function () {
	              _this._hide($elem);
	            }, _this.options.closingTime));
	          }
	        }));
	      }

	      this.$menuItems.on('keydown.zf.dropdownmenu', function (e) {
	        var $element = jquery(e.target).parentsUntil('ul', '[role="menuitem"]'),
	            isTab = _this.$tabs.index($element) > -1,
	            $elements = isTab ? _this.$tabs : $element.siblings('li').add($element),
	            $prevElement,
	            $nextElement;
	        $elements.each(function (i) {
	          if (jquery(this).is($element)) {
	            $prevElement = $elements.eq(i - 1);
	            $nextElement = $elements.eq(i + 1);
	            return;
	          }
	        });

	        var nextSibling = function nextSibling() {
	          $nextElement.children('a:first').focus();
	          e.preventDefault();
	        },
	            prevSibling = function prevSibling() {
	          $prevElement.children('a:first').focus();
	          e.preventDefault();
	        },
	            openSub = function openSub() {
	          var $sub = $element.children('ul.is-dropdown-submenu');

	          if ($sub.length) {
	            _this._show($sub);

	            $element.find('li > a:first').focus();
	            e.preventDefault();
	          } else {
	            return;
	          }
	        },
	            closeSub = function closeSub() {
	          //if ($element.is(':first-child')) {
	          var close = $element.parent('ul').parent('li');
	          close.children('a:first').focus();

	          _this._hide(close);

	          e.preventDefault(); //}
	        };

	        var functions = {
	          open: openSub,
	          close: function close() {
	            _this._hide(_this.$element);

	            _this.$menuItems.eq(0).children('a').focus(); // focus to first element


	            e.preventDefault();
	          },
	          handled: function handled() {
	            e.stopImmediatePropagation();
	          }
	        };

	        if (isTab) {
	          if (_this._isVertical()) {
	            // vertical menu
	            if (_this._isRtl()) {
	              // right aligned
	              jquery.extend(functions, {
	                down: nextSibling,
	                up: prevSibling,
	                next: closeSub,
	                previous: openSub
	              });
	            } else {
	              // left aligned
	              jquery.extend(functions, {
	                down: nextSibling,
	                up: prevSibling,
	                next: openSub,
	                previous: closeSub
	              });
	            }
	          } else {
	            // horizontal menu
	            if (_this._isRtl()) {
	              // right aligned
	              jquery.extend(functions, {
	                next: prevSibling,
	                previous: nextSibling,
	                down: openSub,
	                up: closeSub
	              });
	            } else {
	              // left aligned
	              jquery.extend(functions, {
	                next: nextSibling,
	                previous: prevSibling,
	                down: openSub,
	                up: closeSub
	              });
	            }
	          }
	        } else {
	          // not tabs -> one sub
	          if (_this._isRtl()) {
	            // right aligned
	            jquery.extend(functions, {
	              next: closeSub,
	              previous: openSub,
	              down: nextSibling,
	              up: prevSibling
	            });
	          } else {
	            // left aligned
	            jquery.extend(functions, {
	              next: openSub,
	              previous: closeSub,
	              down: nextSibling,
	              up: prevSibling
	            });
	          }
	        }

	        Keyboard.handleKey(e, 'DropdownMenu', functions);
	      });
	    }
	    /**
	     * Adds an event handler to the body to close any dropdowns on a click.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_addBodyHandler",
	    value: function _addBodyHandler() {
	      var $body = jquery(document.body),
	          _this = this;

	      $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu').on('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu', function (e) {
	        var $link = _this.$element.find(e.target);

	        if ($link.length) {
	          return;
	        }

	        _this._hide();

	        $body.off('mouseup.zf.dropdownmenu touchend.zf.dropdownmenu');
	      });
	    }
	    /**
	     * Opens a dropdown pane, and checks for collisions first.
	     * @param {jQuery} $sub - ul element that is a submenu to show
	     * @function
	     * @private
	     * @fires Dropdownmenu#show
	     */

	  }, {
	    key: "_show",
	    value: function _show($sub) {
	      var idx = this.$tabs.index(this.$tabs.filter(function (i, el) {
	        return jquery(el).find($sub).length > 0;
	      }));
	      var $sibs = $sub.parent('li.is-dropdown-submenu-parent').siblings('li.is-dropdown-submenu-parent');

	      this._hide($sibs, idx);

	      $sub.css('visibility', 'hidden').addClass('js-dropdown-active').parent('li.is-dropdown-submenu-parent').addClass('is-active');
	      var clear = Box.ImNotTouchingYou($sub, null, true);

	      if (!clear) {
	        var oldClass = this.options.alignment === 'left' ? '-right' : '-left',
	            $parentLi = $sub.parent('.is-dropdown-submenu-parent');
	        $parentLi.removeClass("opens".concat(oldClass)).addClass("opens-".concat(this.options.alignment));
	        clear = Box.ImNotTouchingYou($sub, null, true);

	        if (!clear) {
	          $parentLi.removeClass("opens-".concat(this.options.alignment)).addClass('opens-inner');
	        }

	        this.changed = true;
	      }

	      $sub.css('visibility', '');

	      if (this.options.closeOnClick) {
	        this._addBodyHandler();
	      }
	      /**
	       * Fires when the new dropdown pane is visible.
	       * @event Dropdownmenu#show
	       */


	      this.$element.trigger('show.zf.dropdownmenu', [$sub]);
	    }
	    /**
	     * Hides a single, currently open dropdown pane, if passed a parameter, otherwise, hides everything.
	     * @function
	     * @param {jQuery} $elem - element with a submenu to hide
	     * @param {Number} idx - index of the $tabs collection to hide
	     * @private
	     */

	  }, {
	    key: "_hide",
	    value: function _hide($elem, idx) {
	      var $toClose;

	      if ($elem && $elem.length) {
	        $toClose = $elem;
	      } else if (typeof idx !== 'undefined') {
	        $toClose = this.$tabs.not(function (i, el) {
	          return i === idx;
	        });
	      } else {
	        $toClose = this.$element;
	      }

	      var somethingToClose = $toClose.hasClass('is-active') || $toClose.find('.is-active').length > 0;

	      if (somethingToClose) {
	        $toClose.find('li.is-active').add($toClose).attr({
	          'data-is-click': false
	        }).removeClass('is-active');
	        $toClose.find('ul.js-dropdown-active').removeClass('js-dropdown-active');

	        if (this.changed || $toClose.find('opens-inner').length) {
	          var oldClass = this.options.alignment === 'left' ? 'right' : 'left';
	          $toClose.find('li.is-dropdown-submenu-parent').add($toClose).removeClass("opens-inner opens-".concat(this.options.alignment)).addClass("opens-".concat(oldClass));
	          this.changed = false;
	        }
	        /**
	         * Fires when the open menus are closed.
	         * @event Dropdownmenu#hide
	         */


	        this.$element.trigger('hide.zf.dropdownmenu', [$toClose]);
	      }
	    }
	    /**
	     * Destroys the plugin.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$menuItems.off('.zf.dropdownmenu').removeAttr('data-is-click').removeClass('is-right-arrow is-left-arrow is-down-arrow opens-right opens-left opens-inner');
	      jquery(document.body).off('.zf.dropdownmenu');
	      Nest.Burn(this.$element, 'dropdown');
	    }
	  }]);

	  return DropdownMenu;
	}(Plugin);
	/**
	 * Default settings for plugin
	 */


	DropdownMenu.defaults = {
	  /**
	   * Disallows hover events from opening submenus
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  disableHover: false,

	  /**
	   * Allow a submenu to automatically close on a mouseleave event, if not clicked open.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  autoclose: true,

	  /**
	   * Amount of time to delay opening a submenu on hover event.
	   * @option
	   * @type {number}
	   * @default 50
	   */
	  hoverDelay: 50,

	  /**
	   * Allow a submenu to open/remain open on parent click event. Allows cursor to move away from menu.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  clickOpen: false,

	  /**
	   * Amount of time to delay closing a submenu on a mouseleave event.
	   * @option
	   * @type {number}
	   * @default 500
	   */
	  closingTime: 500,

	  /**
	   * Position of the menu relative to what direction the submenus should open. Handled by JS. Can be `'auto'`, `'left'` or `'right'`.
	   * @option
	   * @type {string}
	   * @default 'auto'
	   */
	  alignment: 'auto',

	  /**
	   * Allow clicks on the body to close any open submenus.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  closeOnClick: true,

	  /**
	   * Allow clicks on leaf anchor links to close any open submenus.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  closeOnClickInside: true,

	  /**
	   * Class applied to vertical oriented menus, Foundation default is `vertical`. Update this if using your own class.
	   * @option
	   * @type {string}
	   * @default 'vertical'
	   */
	  verticalClass: 'vertical',

	  /**
	   * Class applied to right-side oriented menus, Foundation default is `align-right`. Update this if using your own class.
	   * @option
	   * @type {string}
	   * @default 'align-right'
	   */
	  rightClass: 'align-right',

	  /**
	   * Boolean to force overide the clicking of links to perform default action, on second touch event for mobile.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  forceFollow: true
	};

	/**
	 * Equalizer module.
	 * @module foundation.equalizer
	 * @requires foundation.util.mediaQuery
	 * @requires foundation.util.imageLoader if equalizer contains images
	 */

	var Equalizer =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Equalizer, _Plugin);

	  function Equalizer() {
	    _classCallCheck(this, Equalizer);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Equalizer).apply(this, arguments));
	  }

	  _createClass(Equalizer, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of Equalizer.
	     * @class
	     * @name Equalizer
	     * @fires Equalizer#init
	     * @param {Object} element - jQuery object to add the trigger to.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery.extend({}, Equalizer.defaults, this.$element.data(), options);
	      this.className = 'Equalizer'; // ie9 back compat

	      this._init();
	    }
	    /**
	     * Initializes the Equalizer plugin and calls functions to get equalizer functioning on load.
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      var eqId = this.$element.attr('data-equalizer') || '';
	      var $watched = this.$element.find("[data-equalizer-watch=\"".concat(eqId, "\"]"));

	      MediaQuery._init();

	      this.$watched = $watched.length ? $watched : this.$element.find('[data-equalizer-watch]');
	      this.$element.attr('data-resize', eqId || GetYoDigits(6, 'eq'));
	      this.$element.attr('data-mutate', eqId || GetYoDigits(6, 'eq'));
	      this.hasNested = this.$element.find('[data-equalizer]').length > 0;
	      this.isNested = this.$element.parentsUntil(document.body, '[data-equalizer]').length > 0;
	      this.isOn = false;
	      this._bindHandler = {
	        onResizeMeBound: this._onResizeMe.bind(this),
	        onPostEqualizedBound: this._onPostEqualized.bind(this)
	      };
	      var imgs = this.$element.find('img');
	      var tooSmall;

	      if (this.options.equalizeOn) {
	        tooSmall = this._checkMQ();
	        jquery(window).on('changed.zf.mediaquery', this._checkMQ.bind(this));
	      } else {
	        this._events();
	      }

	      if (typeof tooSmall !== 'undefined' && tooSmall === false || typeof tooSmall === 'undefined') {
	        if (imgs.length) {
	          onImagesLoaded(imgs, this._reflow.bind(this));
	        } else {
	          this._reflow();
	        }
	      }
	    }
	    /**
	     * Removes event listeners if the breakpoint is too small.
	     * @private
	     */

	  }, {
	    key: "_pauseEvents",
	    value: function _pauseEvents() {
	      this.isOn = false;
	      this.$element.off({
	        '.zf.equalizer': this._bindHandler.onPostEqualizedBound,
	        'resizeme.zf.trigger': this._bindHandler.onResizeMeBound,
	        'mutateme.zf.trigger': this._bindHandler.onResizeMeBound
	      });
	    }
	    /**
	     * function to handle $elements resizeme.zf.trigger, with bound this on _bindHandler.onResizeMeBound
	     * @private
	     */

	  }, {
	    key: "_onResizeMe",
	    value: function _onResizeMe(e) {
	      this._reflow();
	    }
	    /**
	     * function to handle $elements postequalized.zf.equalizer, with bound this on _bindHandler.onPostEqualizedBound
	     * @private
	     */

	  }, {
	    key: "_onPostEqualized",
	    value: function _onPostEqualized(e) {
	      if (e.target !== this.$element[0]) {
	        this._reflow();
	      }
	    }
	    /**
	     * Initializes events for Equalizer.
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {

	      this._pauseEvents();

	      if (this.hasNested) {
	        this.$element.on('postequalized.zf.equalizer', this._bindHandler.onPostEqualizedBound);
	      } else {
	        this.$element.on('resizeme.zf.trigger', this._bindHandler.onResizeMeBound);
	        this.$element.on('mutateme.zf.trigger', this._bindHandler.onResizeMeBound);
	      }

	      this.isOn = true;
	    }
	    /**
	     * Checks the current breakpoint to the minimum required size.
	     * @private
	     */

	  }, {
	    key: "_checkMQ",
	    value: function _checkMQ() {
	      var tooSmall = !MediaQuery.is(this.options.equalizeOn);

	      if (tooSmall) {
	        if (this.isOn) {
	          this._pauseEvents();

	          this.$watched.css('height', 'auto');
	        }
	      } else {
	        if (!this.isOn) {
	          this._events();
	        }
	      }

	      return tooSmall;
	    }
	    /**
	     * A noop version for the plugin
	     * @private
	     */

	  }, {
	    key: "_killswitch",
	    value: function _killswitch() {
	      return;
	    }
	    /**
	     * Calls necessary functions to update Equalizer upon DOM change
	     * @private
	     */

	  }, {
	    key: "_reflow",
	    value: function _reflow() {
	      if (!this.options.equalizeOnStack) {
	        if (this._isStacked()) {
	          this.$watched.css('height', 'auto');
	          return false;
	        }
	      }

	      if (this.options.equalizeByRow) {
	        this.getHeightsByRow(this.applyHeightByRow.bind(this));
	      } else {
	        this.getHeights(this.applyHeight.bind(this));
	      }
	    }
	    /**
	     * Manually determines if the first 2 elements are *NOT* stacked.
	     * @private
	     */

	  }, {
	    key: "_isStacked",
	    value: function _isStacked() {
	      if (!this.$watched[0] || !this.$watched[1]) {
	        return true;
	      }

	      return this.$watched[0].getBoundingClientRect().top !== this.$watched[1].getBoundingClientRect().top;
	    }
	    /**
	     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
	     * @param {Function} cb - A non-optional callback to return the heights array to.
	     * @returns {Array} heights - An array of heights of children within Equalizer container
	     */

	  }, {
	    key: "getHeights",
	    value: function getHeights(cb) {
	      var heights = [];

	      for (var i = 0, len = this.$watched.length; i < len; i++) {
	        this.$watched[i].style.height = 'auto';
	        heights.push(this.$watched[i].offsetHeight);
	      }

	      cb(heights);
	    }
	    /**
	     * Finds the outer heights of children contained within an Equalizer parent and returns them in an array
	     * @param {Function} cb - A non-optional callback to return the heights array to.
	     * @returns {Array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
	     */

	  }, {
	    key: "getHeightsByRow",
	    value: function getHeightsByRow(cb) {
	      var lastElTopOffset = this.$watched.length ? this.$watched.first().offset().top : 0,
	          groups = [],
	          group = 0; //group by Row

	      groups[group] = [];

	      for (var i = 0, len = this.$watched.length; i < len; i++) {
	        this.$watched[i].style.height = 'auto'; //maybe could use this.$watched[i].offsetTop

	        var elOffsetTop = jquery(this.$watched[i]).offset().top;

	        if (elOffsetTop != lastElTopOffset) {
	          group++;
	          groups[group] = [];
	          lastElTopOffset = elOffsetTop;
	        }

	        groups[group].push([this.$watched[i], this.$watched[i].offsetHeight]);
	      }

	      for (var j = 0, ln = groups.length; j < ln; j++) {
	        var heights = jquery(groups[j]).map(function () {
	          return this[1];
	        }).get();
	        var max = Math.max.apply(null, heights);
	        groups[j].push(max);
	      }

	      cb(groups);
	    }
	    /**
	     * Changes the CSS height property of each child in an Equalizer parent to match the tallest
	     * @param {array} heights - An array of heights of children within Equalizer container
	     * @fires Equalizer#preequalized
	     * @fires Equalizer#postequalized
	     */

	  }, {
	    key: "applyHeight",
	    value: function applyHeight(heights) {
	      var max = Math.max.apply(null, heights);
	      /**
	       * Fires before the heights are applied
	       * @event Equalizer#preequalized
	       */

	      this.$element.trigger('preequalized.zf.equalizer');
	      this.$watched.css('height', max);
	      /**
	       * Fires when the heights have been applied
	       * @event Equalizer#postequalized
	       */

	      this.$element.trigger('postequalized.zf.equalizer');
	    }
	    /**
	     * Changes the CSS height property of each child in an Equalizer parent to match the tallest by row
	     * @param {array} groups - An array of heights of children within Equalizer container grouped by row with element,height and max as last child
	     * @fires Equalizer#preequalized
	     * @fires Equalizer#preequalizedrow
	     * @fires Equalizer#postequalizedrow
	     * @fires Equalizer#postequalized
	     */

	  }, {
	    key: "applyHeightByRow",
	    value: function applyHeightByRow(groups) {
	      /**
	       * Fires before the heights are applied
	       */
	      this.$element.trigger('preequalized.zf.equalizer');

	      for (var i = 0, len = groups.length; i < len; i++) {
	        var groupsILength = groups[i].length,
	            max = groups[i][groupsILength - 1];

	        if (groupsILength <= 2) {
	          jquery(groups[i][0][0]).css({
	            'height': 'auto'
	          });
	          continue;
	        }
	        /**
	          * Fires before the heights per row are applied
	          * @event Equalizer#preequalizedrow
	          */


	        this.$element.trigger('preequalizedrow.zf.equalizer');

	        for (var j = 0, lenJ = groupsILength - 1; j < lenJ; j++) {
	          jquery(groups[i][j][0]).css({
	            'height': max
	          });
	        }
	        /**
	          * Fires when the heights per row have been applied
	          * @event Equalizer#postequalizedrow
	          */


	        this.$element.trigger('postequalizedrow.zf.equalizer');
	      }
	      /**
	       * Fires when the heights have been applied
	       */


	      this.$element.trigger('postequalized.zf.equalizer');
	    }
	    /**
	     * Destroys an instance of Equalizer.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this._pauseEvents();

	      this.$watched.css('height', 'auto');
	    }
	  }]);

	  return Equalizer;
	}(Plugin);
	/**
	 * Default settings for plugin
	 */


	Equalizer.defaults = {
	  /**
	   * Enable height equalization when stacked on smaller screens.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  equalizeOnStack: false,

	  /**
	   * Enable height equalization row by row.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  equalizeByRow: false,

	  /**
	   * String representing the minimum breakpoint size the plugin should equalize heights on.
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  equalizeOn: ''
	};

	/**
	 * Interchange module.
	 * @module foundation.interchange
	 * @requires foundation.util.mediaQuery
	 */

	var Interchange =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Interchange, _Plugin);

	  function Interchange() {
	    _classCallCheck(this, Interchange);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Interchange).apply(this, arguments));
	  }

	  _createClass(Interchange, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of Interchange.
	     * @class
	     * @name Interchange
	     * @fires Interchange#init
	     * @param {Object} element - jQuery object to add the trigger to.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery.extend({}, Interchange.defaults, options);
	      this.rules = [];
	      this.currentPath = '';
	      this.className = 'Interchange'; // ie9 back compat

	      this._init();

	      this._events();
	    }
	    /**
	     * Initializes the Interchange plugin and calls functions to get interchange functioning on load.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      MediaQuery._init();

	      var id = this.$element[0].id || GetYoDigits(6, 'interchange');
	      this.$element.attr({
	        'data-resize': id,
	        'id': id
	      });

	      this._addBreakpoints();

	      this._generateRules();

	      this._reflow();
	    }
	    /**
	     * Initializes events for Interchange.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this2 = this;

	      this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function () {
	        return _this2._reflow();
	      });
	    }
	    /**
	     * Calls necessary functions to update Interchange upon DOM change
	     * @function
	     * @private
	     */

	  }, {
	    key: "_reflow",
	    value: function _reflow() {
	      var match; // Iterate through each rule, but only save the last match

	      for (var i in this.rules) {
	        if (this.rules.hasOwnProperty(i)) {
	          var rule = this.rules[i];

	          if (window.matchMedia(rule.query).matches) {
	            match = rule;
	          }
	        }
	      }

	      if (match) {
	        this.replace(match.path);
	      }
	    }
	    /**
	     * Gets the Foundation breakpoints and adds them to the Interchange.SPECIAL_QUERIES object.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_addBreakpoints",
	    value: function _addBreakpoints() {
	      for (var i in MediaQuery.queries) {
	        if (MediaQuery.queries.hasOwnProperty(i)) {
	          var query = MediaQuery.queries[i];
	          Interchange.SPECIAL_QUERIES[query.name] = query.value;
	        }
	      }
	    }
	    /**
	     * Checks the Interchange element for the provided media query + content pairings
	     * @function
	     * @private
	     * @param {Object} element - jQuery object that is an Interchange instance
	     * @returns {Array} scenarios - Array of objects that have 'mq' and 'path' keys with corresponding keys
	     */

	  }, {
	    key: "_generateRules",
	    value: function _generateRules(element) {
	      var rulesList = [];
	      var rules;

	      if (this.options.rules) {
	        rules = this.options.rules;
	      } else {
	        rules = this.$element.data('interchange');
	      }

	      rules = typeof rules === 'string' ? rules.match(/\[.*?, .*?\]/g) : rules;

	      for (var i in rules) {
	        if (rules.hasOwnProperty(i)) {
	          var rule = rules[i].slice(1, -1).split(', ');
	          var path = rule.slice(0, -1).join('');
	          var query = rule[rule.length - 1];

	          if (Interchange.SPECIAL_QUERIES[query]) {
	            query = Interchange.SPECIAL_QUERIES[query];
	          }

	          rulesList.push({
	            path: path,
	            query: query
	          });
	        }
	      }

	      this.rules = rulesList;
	    }
	    /**
	     * Update the `src` property of an image, or change the HTML of a container, to the specified path.
	     * @function
	     * @param {String} path - Path to the image or HTML partial.
	     * @fires Interchange#replaced
	     */

	  }, {
	    key: "replace",
	    value: function replace(path) {
	      if (this.currentPath === path) return;

	      var _this = this,
	          trigger = 'replaced.zf.interchange'; // Replacing images


	      if (this.$element[0].nodeName === 'IMG') {
	        this.$element.attr('src', path).on('load', function () {
	          _this.currentPath = path;
	        }).trigger(trigger);
	      } // Replacing background images
	      else if (path.match(/\.(gif|jpg|jpeg|png|svg|tiff)([?#].*)?/i)) {
	          path = path.replace(/\(/g, '%28').replace(/\)/g, '%29');
	          this.$element.css({
	            'background-image': 'url(' + path + ')'
	          }).trigger(trigger);
	        } // Replacing HTML
	        else {
	            jquery.get(path, function (response) {
	              _this.$element.html(response).trigger(trigger);

	              jquery(response).foundation();
	              _this.currentPath = path;
	            });
	          }
	      /**
	       * Fires when content in an Interchange element is done being loaded.
	       * @event Interchange#replaced
	       */
	      // this.$element.trigger('replaced.zf.interchange');

	    }
	    /**
	     * Destroys an instance of interchange.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$element.off('resizeme.zf.trigger');
	    }
	  }]);

	  return Interchange;
	}(Plugin);
	/**
	 * Default settings for plugin
	 */


	Interchange.defaults = {
	  /**
	   * Rules to be applied to Interchange elements. Set with the `data-interchange` array notation.
	   * @option
	   * @type {?array}
	   * @default null
	   */
	  rules: null
	};
	Interchange.SPECIAL_QUERIES = {
	  'landscape': 'screen and (orientation: landscape)',
	  'portrait': 'screen and (orientation: portrait)',
	  'retina': 'only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)'
	};

	/**
	 * SmoothScroll module.
	 * @module foundation.smooth-scroll
	 */

	var SmoothScroll =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(SmoothScroll, _Plugin);

	  function SmoothScroll() {
	    _classCallCheck(this, SmoothScroll);

	    return _possibleConstructorReturn(this, _getPrototypeOf(SmoothScroll).apply(this, arguments));
	  }

	  _createClass(SmoothScroll, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of SmoothScroll.
	     * @class
	     * @name SmoothScroll
	     * @fires SmoothScroll#init
	     * @param {Object} element - jQuery object to add the trigger to.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery.extend({}, SmoothScroll.defaults, this.$element.data(), options);
	      this.className = 'SmoothScroll'; // ie9 back compat

	      this._init();
	    }
	    /**
	     * Initialize the SmoothScroll plugin
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      var id = this.$element[0].id || GetYoDigits(6, 'smooth-scroll');
	      this.$element.attr({
	        id: id
	      });

	      this._events();
	    }
	    /**
	     * Initializes events for SmoothScroll.
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      this._linkClickListener = this._handleLinkClick.bind(this);
	      this.$element.on('click.zf.smoothScroll', this._linkClickListener);
	      this.$element.on('click.zf.smoothScroll', 'a[href^="#"]', this._linkClickListener);
	    }
	    /**
	     * Handle the given event to smoothly scroll to the anchor pointed by the event target.
	     * @param {*} e - event
	     * @function
	     * @private
	     */

	  }, {
	    key: "_handleLinkClick",
	    value: function _handleLinkClick(e) {
	      var _this = this;

	      // Follow the link if it does not point to an anchor.
	      if (!jquery(e.currentTarget).is('a[href^="#"]')) return;
	      var arrival = e.currentTarget.getAttribute('href');
	      this._inTransition = true;
	      SmoothScroll.scrollToLoc(arrival, this.options, function () {
	        _this._inTransition = false;
	      });
	      e.preventDefault();
	    }
	  }, {
	    key: "_destroy",

	    /**
	     * Destroys the SmoothScroll instance.
	     * @function
	     */
	    value: function _destroy() {
	      this.$element.off('click.zf.smoothScroll', this._linkClickListener);
	      this.$element.off('click.zf.smoothScroll', 'a[href^="#"]', this._linkClickListener);
	    }
	  }], [{
	    key: "scrollToLoc",

	    /**
	     * Function to scroll to a given location on the page.
	     * @param {String} loc - A properly formatted jQuery id selector. Example: '#foo'
	     * @param {Object} options - The options to use.
	     * @param {Function} callback - The callback function.
	     * @static
	     * @function
	     */
	    value: function scrollToLoc(loc) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : SmoothScroll.defaults;
	      var callback = arguments.length > 2 ? arguments[2] : undefined;
	      var $loc = jquery(loc); // Do nothing if target does not exist to prevent errors

	      if (!$loc.length) return false;
	      var scrollPos = Math.round($loc.offset().top - options.threshold / 2 - options.offset);
	      jquery('html, body').stop(true).animate({
	        scrollTop: scrollPos
	      }, options.animationDuration, options.animationEasing, function () {
	        if (typeof callback === 'function') {
	          callback();
	        }
	      });
	    }
	  }]);

	  return SmoothScroll;
	}(Plugin);
	/**
	 * Default settings for plugin.
	 */


	SmoothScroll.defaults = {
	  /**
	   * Amount of time, in ms, the animated scrolling should take between locations.
	   * @option
	   * @type {number}
	   * @default 500
	   */
	  animationDuration: 500,

	  /**
	   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
	   * @option
	   * @type {string}
	   * @default 'linear'
	   * @see {@link https://api.jquery.com/animate|Jquery animate}
	   */
	  animationEasing: 'linear',

	  /**
	   * Number of pixels to use as a marker for location changes.
	   * @option
	   * @type {number}
	   * @default 50
	   */
	  threshold: 50,

	  /**
	   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  offset: 0
	};

	/**
	 * Magellan module.
	 * @module foundation.magellan
	 * @requires foundation.smoothScroll
	 */

	var Magellan =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Magellan, _Plugin);

	  function Magellan() {
	    _classCallCheck(this, Magellan);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Magellan).apply(this, arguments));
	  }

	  _createClass(Magellan, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of Magellan.
	     * @class
	     * @name Magellan
	     * @fires Magellan#init
	     * @param {Object} element - jQuery object to add the trigger to.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery.extend({}, Magellan.defaults, this.$element.data(), options);
	      this.className = 'Magellan'; // ie9 back compat

	      this._init();

	      this.calcPoints();
	    }
	    /**
	     * Initializes the Magellan plugin and calls functions to get equalizer functioning on load.
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      var id = this.$element[0].id || GetYoDigits(6, 'magellan');

	      this.$targets = jquery('[data-magellan-target]');
	      this.$links = this.$element.find('a');
	      this.$element.attr({
	        'data-resize': id,
	        'data-scroll': id,
	        'id': id
	      });
	      this.$active = jquery();
	      this.scrollPos = parseInt(window.pageYOffset, 10);

	      this._events();
	    }
	    /**
	     * Calculates an array of pixel values that are the demarcation lines between locations on the page.
	     * Can be invoked if new elements are added or the size of a location changes.
	     * @function
	     */

	  }, {
	    key: "calcPoints",
	    value: function calcPoints() {
	      var _this = this,
	          body = document.body,
	          html = document.documentElement;

	      this.points = [];
	      this.winHeight = Math.round(Math.max(window.innerHeight, html.clientHeight));
	      this.docHeight = Math.round(Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight));
	      this.$targets.each(function () {
	        var $tar = jquery(this),
	            pt = Math.round($tar.offset().top - _this.options.threshold);
	        $tar.targetPoint = pt;

	        _this.points.push(pt);
	      });
	    }
	    /**
	     * Initializes events for Magellan.
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this = this,
	          $body = jquery('html, body'),
	          opts = {
	        duration: _this.options.animationDuration,
	        easing: _this.options.animationEasing
	      };

	      jquery(window).one('load', function () {
	        if (_this.options.deepLinking) {
	          if (location.hash) {
	            _this.scrollToLoc(location.hash);
	          }
	        }

	        _this.calcPoints();

	        _this._updateActive();
	      });
	      _this.onLoadListener = onLoad(jquery(window), function () {
	        _this.$element.on({
	          'resizeme.zf.trigger': _this.reflow.bind(_this),
	          'scrollme.zf.trigger': _this._updateActive.bind(_this)
	        }).on('click.zf.magellan', 'a[href^="#"]', function (e) {
	          e.preventDefault();
	          var arrival = this.getAttribute('href');

	          _this.scrollToLoc(arrival);
	        });
	      });

	      this._deepLinkScroll = function (e) {
	        if (_this.options.deepLinking) {
	          _this.scrollToLoc(window.location.hash);
	        }
	      };

	      jquery(window).on('hashchange', this._deepLinkScroll);
	    }
	    /**
	     * Function to scroll to a given location on the page.
	     * @param {String} loc - a properly formatted jQuery id selector. Example: '#foo'
	     * @function
	     */

	  }, {
	    key: "scrollToLoc",
	    value: function scrollToLoc(loc) {
	      this._inTransition = true;

	      var _this = this;

	      var options = {
	        animationEasing: this.options.animationEasing,
	        animationDuration: this.options.animationDuration,
	        threshold: this.options.threshold,
	        offset: this.options.offset
	      };
	      SmoothScroll.scrollToLoc(loc, options, function () {
	        _this._inTransition = false;
	      });
	    }
	    /**
	     * Calls necessary functions to update Magellan upon DOM change
	     * @function
	     */

	  }, {
	    key: "reflow",
	    value: function reflow() {
	      this.calcPoints();

	      this._updateActive();
	    }
	    /**
	     * Updates the visibility of an active location link, and updates the url hash for the page, if deepLinking enabled.
	     * @private
	     * @function
	     * @fires Magellan#update
	     */

	  }, {
	    key: "_updateActive",
	    value: function _updateActive()
	    /*evt, elem, scrollPos*/
	    {
	      var _this2 = this;

	      if (this._inTransition) return;
	      var newScrollPos = parseInt(window.pageYOffset, 10);
	      var isScrollingUp = this.scrollPos > newScrollPos;
	      this.scrollPos = newScrollPos;
	      var activeIdx; // Before the first point: no link

	      if (newScrollPos < this.points[0]) ;
	      /* do nothing */
	      // At the bottom of the page: last link
	      else if (newScrollPos + this.winHeight === this.docHeight) {
	          activeIdx = this.points.length - 1;
	        } // Otherwhise, use the last visible link
	        else {
	            var visibleLinks = this.points.filter(function (p, i) {
	              return p - _this2.options.offset - (isScrollingUp ? _this2.options.threshold : 0) <= newScrollPos;
	            });
	            activeIdx = visibleLinks.length ? visibleLinks.length - 1 : 0;
	          } // Get the new active link


	      var $oldActive = this.$active;
	      var activeHash = '';

	      if (typeof activeIdx !== 'undefined') {
	        this.$active = this.$links.filter('[href="#' + this.$targets.eq(activeIdx).data('magellan-target') + '"]');
	        if (this.$active.length) activeHash = this.$active[0].getAttribute('href');
	      } else {
	        this.$active = jquery();
	      }

	      var isNewActive = !(!this.$active.length && !$oldActive.length) && !this.$active.is($oldActive);
	      var isNewHash = activeHash !== window.location.hash; // Update the active link element

	      if (isNewActive) {
	        $oldActive.removeClass(this.options.activeClass);
	        this.$active.addClass(this.options.activeClass);
	      } // Update the hash (it may have changed with the same active link)


	      if (this.options.deepLinking && isNewHash) {
	        if (window.history.pushState) {
	          // Set or remove the hash (see: https://stackoverflow.com/a/5298684/4317384
	          var url = activeHash ? activeHash : window.location.pathname + window.location.search;
	          window.history.pushState(null, null, url);
	        } else {
	          window.location.hash = activeHash;
	        }
	      }

	      if (isNewActive) {
	        /**
	         * Fires when magellan is finished updating to the new active element.
	         * @event Magellan#update
	         */
	        this.$element.trigger('update.zf.magellan', [this.$active]);
	      }
	    }
	    /**
	     * Destroys an instance of Magellan and resets the url of the window.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$element.off('.zf.trigger .zf.magellan').find(".".concat(this.options.activeClass)).removeClass(this.options.activeClass);

	      if (this.options.deepLinking) {
	        var hash = this.$active[0].getAttribute('href');
	        window.location.hash.replace(hash, '');
	      }

	      jquery(window).off('hashchange', this._deepLinkScroll);
	      if (this.onLoadListener) jquery(window).off(this.onLoadListener);
	    }
	  }]);

	  return Magellan;
	}(Plugin);
	/**
	 * Default settings for plugin
	 */


	Magellan.defaults = {
	  /**
	   * Amount of time, in ms, the animated scrolling should take between locations.
	   * @option
	   * @type {number}
	   * @default 500
	   */
	  animationDuration: 500,

	  /**
	   * Animation style to use when scrolling between locations. Can be `'swing'` or `'linear'`.
	   * @option
	   * @type {string}
	   * @default 'linear'
	   * @see {@link https://api.jquery.com/animate|Jquery animate}
	   */
	  animationEasing: 'linear',

	  /**
	   * Number of pixels to use as a marker for location changes.
	   * @option
	   * @type {number}
	   * @default 50
	   */
	  threshold: 50,

	  /**
	   * Class applied to the active locations link on the magellan container.
	   * @option
	   * @type {string}
	   * @default 'is-active'
	   */
	  activeClass: 'is-active',

	  /**
	   * Allows the script to manipulate the url of the current page, and if supported, alter the history.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  deepLinking: false,

	  /**
	   * Number of pixels to offset the scroll of the page on item click if using a sticky nav bar.
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  offset: 0
	};

	/**
	 * OffCanvas module.
	 * @module foundation.offcanvas
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.mediaQuery
	 * @requires foundation.util.triggers
	 */

	var OffCanvas =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(OffCanvas, _Plugin);

	  function OffCanvas() {
	    _classCallCheck(this, OffCanvas);

	    return _possibleConstructorReturn(this, _getPrototypeOf(OffCanvas).apply(this, arguments));
	  }

	  _createClass(OffCanvas, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of an off-canvas wrapper.
	     * @class
	     * @name OffCanvas
	     * @fires OffCanvas#init
	     * @param {Object} element - jQuery object to initialize.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      var _this2 = this;

	      this.className = 'OffCanvas'; // ie9 back compat

	      this.$element = element;
	      this.options = jquery.extend({}, OffCanvas.defaults, this.$element.data(), options);
	      this.contentClasses = {
	        base: [],
	        reveal: []
	      };
	      this.$lastTrigger = jquery();
	      this.$triggers = jquery();
	      this.position = 'left';
	      this.$content = jquery();
	      this.nested = !!this.options.nested; // Defines the CSS transition/position classes of the off-canvas content container.

	      jquery(['push', 'overlap']).each(function (index, val) {
	        _this2.contentClasses.base.push('has-transition-' + val);
	      });
	      jquery(['left', 'right', 'top', 'bottom']).each(function (index, val) {
	        _this2.contentClasses.base.push('has-position-' + val);

	        _this2.contentClasses.reveal.push('has-reveal-' + val);
	      }); // Triggers init is idempotent, just need to make sure it is initialized

	      Triggers.init(jquery);

	      MediaQuery._init();

	      this._init();

	      this._events();

	      Keyboard.register('OffCanvas', {
	        'ESCAPE': 'close'
	      });
	    }
	    /**
	     * Initializes the off-canvas wrapper by adding the exit overlay (if needed).
	     * @function
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      var id = this.$element.attr('id');
	      this.$element.attr('aria-hidden', 'true'); // Find off-canvas content, either by ID (if specified), by siblings or by closest selector (fallback)

	      if (this.options.contentId) {
	        this.$content = jquery('#' + this.options.contentId);
	      } else if (this.$element.siblings('[data-off-canvas-content]').length) {
	        this.$content = this.$element.siblings('[data-off-canvas-content]').first();
	      } else {
	        this.$content = this.$element.closest('[data-off-canvas-content]').first();
	      }

	      if (!this.options.contentId) {
	        // Assume that the off-canvas element is nested if it isn't a sibling of the content
	        this.nested = this.$element.siblings('[data-off-canvas-content]').length === 0;
	      } else if (this.options.contentId && this.options.nested === null) {
	        // Warning if using content ID without setting the nested option
	        // Once the element is nested it is required to work properly in this case
	        console.warn('Remember to use the nested option if using the content ID option!');
	      }

	      if (this.nested === true) {
	        // Force transition overlap if nested
	        this.options.transition = 'overlap'; // Remove appropriate classes if already assigned in markup

	        this.$element.removeClass('is-transition-push');
	      }

	      this.$element.addClass("is-transition-".concat(this.options.transition, " is-closed")); // Find triggers that affect this element and add aria-expanded to them

	      this.$triggers = jquery(document).find('[data-open="' + id + '"], [data-close="' + id + '"], [data-toggle="' + id + '"]').attr('aria-expanded', 'false').attr('aria-controls', id); // Get position by checking for related CSS class

	      this.position = this.$element.is('.position-left, .position-top, .position-right, .position-bottom') ? this.$element.attr('class').match(/position\-(left|top|right|bottom)/)[1] : this.position; // Add an overlay over the content if necessary

	      if (this.options.contentOverlay === true) {
	        var overlay = document.createElement('div');
	        var overlayPosition = jquery(this.$element).css("position") === 'fixed' ? 'is-overlay-fixed' : 'is-overlay-absolute';
	        overlay.setAttribute('class', 'js-off-canvas-overlay ' + overlayPosition);
	        this.$overlay = jquery(overlay);

	        if (overlayPosition === 'is-overlay-fixed') {
	          jquery(this.$overlay).insertAfter(this.$element);
	        } else {
	          this.$content.append(this.$overlay);
	        }
	      } // Get the revealOn option from the class.


	      var revealOnRegExp = new RegExp(RegExpEscape(this.options.revealClass) + '([^\\s]+)', 'g');
	      var revealOnClass = revealOnRegExp.exec(this.$element[0].className);

	      if (revealOnClass) {
	        this.options.isRevealed = true;
	        this.options.revealOn = this.options.revealOn || revealOnClass[1];
	      } // Ensure the `reveal-on-*` class is set.


	      if (this.options.isRevealed === true && this.options.revealOn) {
	        this.$element.first().addClass("".concat(this.options.revealClass).concat(this.options.revealOn));

	        this._setMQChecker();
	      }

	      if (this.options.transitionTime) {
	        this.$element.css('transition-duration', this.options.transitionTime);
	      } // Initally remove all transition/position CSS classes from off-canvas content container.


	      this._removeContentClasses();
	    }
	    /**
	     * Adds event handlers to the off-canvas wrapper and the exit overlay.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      this.$element.off('.zf.trigger .zf.offcanvas').on({
	        'open.zf.trigger': this.open.bind(this),
	        'close.zf.trigger': this.close.bind(this),
	        'toggle.zf.trigger': this.toggle.bind(this),
	        'keydown.zf.offcanvas': this._handleKeyboard.bind(this)
	      });

	      if (this.options.closeOnClick === true) {
	        var $target = this.options.contentOverlay ? this.$overlay : this.$content;
	        $target.on({
	          'click.zf.offcanvas': this.close.bind(this)
	        });
	      }
	    }
	    /**
	     * Applies event listener for elements that will reveal at certain breakpoints.
	     * @private
	     */

	  }, {
	    key: "_setMQChecker",
	    value: function _setMQChecker() {
	      var _this = this;

	      this.onLoadListener = onLoad(jquery(window), function () {
	        if (MediaQuery.atLeast(_this.options.revealOn)) {
	          _this.reveal(true);
	        }
	      });
	      jquery(window).on('changed.zf.mediaquery', function () {
	        if (MediaQuery.atLeast(_this.options.revealOn)) {
	          _this.reveal(true);
	        } else {
	          _this.reveal(false);
	        }
	      });
	    }
	    /**
	     * Removes the CSS transition/position classes of the off-canvas content container.
	     * Removing the classes is important when another off-canvas gets opened that uses the same content container.
	     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
	     * @private
	     */

	  }, {
	    key: "_removeContentClasses",
	    value: function _removeContentClasses(hasReveal) {
	      if (typeof hasReveal !== 'boolean') {
	        this.$content.removeClass(this.contentClasses.base.join(' '));
	      } else if (hasReveal === false) {
	        this.$content.removeClass("has-reveal-".concat(this.position));
	      }
	    }
	    /**
	     * Adds the CSS transition/position classes of the off-canvas content container, based on the opening off-canvas element.
	     * Beforehand any transition/position class gets removed.
	     * @param {Boolean} hasReveal - true if related off-canvas element is revealed.
	     * @private
	     */

	  }, {
	    key: "_addContentClasses",
	    value: function _addContentClasses(hasReveal) {
	      this._removeContentClasses(hasReveal);

	      if (typeof hasReveal !== 'boolean') {
	        this.$content.addClass("has-transition-".concat(this.options.transition, " has-position-").concat(this.position));
	      } else if (hasReveal === true) {
	        this.$content.addClass("has-reveal-".concat(this.position));
	      }
	    }
	    /**
	     * Handles the revealing/hiding the off-canvas at breakpoints, not the same as open.
	     * @param {Boolean} isRevealed - true if element should be revealed.
	     * @function
	     */

	  }, {
	    key: "reveal",
	    value: function reveal(isRevealed) {
	      if (isRevealed) {
	        this.close();
	        this.isRevealed = true;
	        this.$element.attr('aria-hidden', 'false');
	        this.$element.off('open.zf.trigger toggle.zf.trigger');
	        this.$element.removeClass('is-closed');
	      } else {
	        this.isRevealed = false;
	        this.$element.attr('aria-hidden', 'true');
	        this.$element.off('open.zf.trigger toggle.zf.trigger').on({
	          'open.zf.trigger': this.open.bind(this),
	          'toggle.zf.trigger': this.toggle.bind(this)
	        });
	        this.$element.addClass('is-closed');
	      }

	      this._addContentClasses(isRevealed);
	    }
	    /**
	     * Stops scrolling of the body when offcanvas is open on mobile Safari and other troublesome browsers.
	     * @private
	     */

	  }, {
	    key: "_stopScrolling",
	    value: function _stopScrolling(event) {
	      return false;
	    } // Taken and adapted from http://stackoverflow.com/questions/16889447/prevent-full-page-scrolling-ios
	    // Only really works for y, not sure how to extend to x or if we need to.

	  }, {
	    key: "_recordScrollable",
	    value: function _recordScrollable(event) {
	      var elem = this; // called from event handler context with this as elem
	      // If the element is scrollable (content overflows), then...

	      if (elem.scrollHeight !== elem.clientHeight) {
	        // If we're at the top, scroll down one pixel to allow scrolling up
	        if (elem.scrollTop === 0) {
	          elem.scrollTop = 1;
	        } // If we're at the bottom, scroll up one pixel to allow scrolling down


	        if (elem.scrollTop === elem.scrollHeight - elem.clientHeight) {
	          elem.scrollTop = elem.scrollHeight - elem.clientHeight - 1;
	        }
	      }

	      elem.allowUp = elem.scrollTop > 0;
	      elem.allowDown = elem.scrollTop < elem.scrollHeight - elem.clientHeight;
	      elem.lastY = event.originalEvent.pageY;
	    }
	  }, {
	    key: "_stopScrollPropagation",
	    value: function _stopScrollPropagation(event) {
	      var elem = this; // called from event handler context with this as elem

	      var up = event.pageY < elem.lastY;
	      var down = !up;
	      elem.lastY = event.pageY;

	      if (up && elem.allowUp || down && elem.allowDown) {
	        event.stopPropagation();
	      } else {
	        event.preventDefault();
	      }
	    }
	    /**
	     * Opens the off-canvas menu.
	     * @function
	     * @param {Object} event - Event object passed from listener.
	     * @param {jQuery} trigger - element that triggered the off-canvas to open.
	     * @fires Offcanvas#opened
	     * @todo also trigger 'open' event?
	     */

	  }, {
	    key: "open",
	    value: function open(event, trigger) {
	      if (this.$element.hasClass('is-open') || this.isRevealed) {
	        return;
	      }

	      var _this = this;

	      if (trigger) {
	        this.$lastTrigger = trigger;
	      }

	      if (this.options.forceTo === 'top') {
	        window.scrollTo(0, 0);
	      } else if (this.options.forceTo === 'bottom') {
	        window.scrollTo(0, document.body.scrollHeight);
	      }

	      if (this.options.transitionTime && this.options.transition !== 'overlap') {
	        this.$element.siblings('[data-off-canvas-content]').css('transition-duration', this.options.transitionTime);
	      } else {
	        this.$element.siblings('[data-off-canvas-content]').css('transition-duration', '');
	      }

	      this.$element.addClass('is-open').removeClass('is-closed');
	      this.$triggers.attr('aria-expanded', 'true');
	      this.$element.attr('aria-hidden', 'false');
	      this.$content.addClass('is-open-' + this.position); // If `contentScroll` is set to false, add class and disable scrolling on touch devices.

	      if (this.options.contentScroll === false) {
	        jquery('body').addClass('is-off-canvas-open').on('touchmove', this._stopScrolling);
	        this.$element.on('touchstart', this._recordScrollable);
	        this.$element.on('touchmove', this._stopScrollPropagation);
	      }

	      if (this.options.contentOverlay === true) {
	        this.$overlay.addClass('is-visible');
	      }

	      if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
	        this.$overlay.addClass('is-closable');
	      }

	      if (this.options.autoFocus === true) {
	        this.$element.one(transitionend(this.$element), function () {
	          if (!_this.$element.hasClass('is-open')) {
	            return; // exit if prematurely closed
	          }

	          var canvasFocus = _this.$element.find('[data-autofocus]');

	          if (canvasFocus.length) {
	            canvasFocus.eq(0).focus();
	          } else {
	            _this.$element.find('a, button').eq(0).focus();
	          }
	        });
	      }

	      if (this.options.trapFocus === true) {
	        this.$content.attr('tabindex', '-1');
	        Keyboard.trapFocus(this.$element);
	      }

	      this._addContentClasses();
	      /**
	       * Fires when the off-canvas menu opens.
	       * @event Offcanvas#opened
	       */


	      this.$element.trigger('opened.zf.offcanvas');
	    }
	    /**
	     * Closes the off-canvas menu.
	     * @function
	     * @param {Function} cb - optional cb to fire after closure.
	     * @fires Offcanvas#closed
	     */

	  }, {
	    key: "close",
	    value: function close(cb) {
	      if (!this.$element.hasClass('is-open') || this.isRevealed) {
	        return;
	      }

	      var _this = this;

	      this.$element.removeClass('is-open');
	      this.$element.attr('aria-hidden', 'true')
	      /**
	       * Fires when the off-canvas menu opens.
	       * @event Offcanvas#closed
	       */
	      .trigger('closed.zf.offcanvas');
	      this.$content.removeClass('is-open-left is-open-top is-open-right is-open-bottom'); // If `contentScroll` is set to false, remove class and re-enable scrolling on touch devices.

	      if (this.options.contentScroll === false) {
	        jquery('body').removeClass('is-off-canvas-open').off('touchmove', this._stopScrolling);
	        this.$element.off('touchstart', this._recordScrollable);
	        this.$element.off('touchmove', this._stopScrollPropagation);
	      }

	      if (this.options.contentOverlay === true) {
	        this.$overlay.removeClass('is-visible');
	      }

	      if (this.options.closeOnClick === true && this.options.contentOverlay === true) {
	        this.$overlay.removeClass('is-closable');
	      }

	      this.$triggers.attr('aria-expanded', 'false');

	      if (this.options.trapFocus === true) {
	        this.$content.removeAttr('tabindex');
	        Keyboard.releaseFocus(this.$element);
	      } // Listen to transitionEnd and add class when done.


	      this.$element.one(transitionend(this.$element), function (e) {
	        _this.$element.addClass('is-closed');

	        _this._removeContentClasses();
	      });
	    }
	    /**
	     * Toggles the off-canvas menu open or closed.
	     * @function
	     * @param {Object} event - Event object passed from listener.
	     * @param {jQuery} trigger - element that triggered the off-canvas to open.
	     */

	  }, {
	    key: "toggle",
	    value: function toggle(event, trigger) {
	      if (this.$element.hasClass('is-open')) {
	        this.close(event, trigger);
	      } else {
	        this.open(event, trigger);
	      }
	    }
	    /**
	     * Handles keyboard input when detected. When the escape key is pressed, the off-canvas menu closes, and focus is restored to the element that opened the menu.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_handleKeyboard",
	    value: function _handleKeyboard(e) {
	      var _this3 = this;

	      Keyboard.handleKey(e, 'OffCanvas', {
	        close: function close() {
	          _this3.close();

	          _this3.$lastTrigger.focus();

	          return true;
	        },
	        handled: function handled() {
	          e.stopPropagation();
	          e.preventDefault();
	        }
	      });
	    }
	    /**
	     * Destroys the offcanvas plugin.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.close();
	      this.$element.off('.zf.trigger .zf.offcanvas');
	      this.$overlay.off('.zf.offcanvas');
	      if (this.onLoadListener) jquery(window).off(this.onLoadListener);
	    }
	  }]);

	  return OffCanvas;
	}(Plugin);

	OffCanvas.defaults = {
	  /**
	   * Allow the user to click outside of the menu to close it.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  closeOnClick: true,

	  /**
	   * Adds an overlay on top of `[data-off-canvas-content]`.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  contentOverlay: true,

	  /**
	   * Target an off-canvas content container by ID that may be placed anywhere. If null the closest content container will be taken.
	   * @option
	   * @type {?string}
	   * @default null
	   */
	  contentId: null,

	  /**
	   * Define the off-canvas element is nested in an off-canvas content. This is required when using the contentId option for a nested element.
	   * @option
	   * @type {boolean}
	   * @default null
	   */
	  nested: null,

	  /**
	   * Enable/disable scrolling of the main content when an off canvas panel is open.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  contentScroll: true,

	  /**
	   * Amount of time in ms the open and close transition requires. If none selected, pulls from body style.
	   * @option
	   * @type {number}
	   * @default null
	   */
	  transitionTime: null,

	  /**
	   * Type of transition for the offcanvas menu. Options are 'push', 'detached' or 'slide'.
	   * @option
	   * @type {string}
	   * @default push
	   */
	  transition: 'push',

	  /**
	   * Force the page to scroll to top or bottom on open.
	   * @option
	   * @type {?string}
	   * @default null
	   */
	  forceTo: null,

	  /**
	   * Allow the offcanvas to remain open for certain breakpoints.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  isRevealed: false,

	  /**
	   * Breakpoint at which to reveal. JS will use a RegExp to target standard classes, if changing classnames, pass your class with the `revealClass` option.
	   * @option
	   * @type {?string}
	   * @default null
	   */
	  revealOn: null,

	  /**
	   * Force focus to the offcanvas on open. If true, will focus the opening trigger on close.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  autoFocus: true,

	  /**
	   * Class used to force an offcanvas to remain open. Foundation defaults for this are `reveal-for-large` & `reveal-for-medium`.
	   * @option
	   * @type {string}
	   * @default reveal-for-
	   * @todo improve the regex testing for this.
	   */
	  revealClass: 'reveal-for-',

	  /**
	   * Triggers optional focus trapping when opening an offcanvas. Sets tabindex of [data-off-canvas-content] to -1 for accessibility purposes.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  trapFocus: false
	};

	/**
	 * Orbit module.
	 * @module foundation.orbit
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.motion
	 * @requires foundation.util.timer
	 * @requires foundation.util.imageLoader
	 * @requires foundation.util.touch
	 */

	var Orbit =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Orbit, _Plugin);

	  function Orbit() {
	    _classCallCheck(this, Orbit);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Orbit).apply(this, arguments));
	  }

	  _createClass(Orbit, [{
	    key: "_setup",

	    /**
	    * Creates a new instance of an orbit carousel.
	    * @class
	    * @name Orbit
	    * @param {jQuery} element - jQuery object to make into an Orbit Carousel.
	    * @param {Object} options - Overrides to the default plugin settings.
	    */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery.extend({}, Orbit.defaults, this.$element.data(), options);
	      this.className = 'Orbit'; // ie9 back compat

	      Touch.init(jquery); // Touch init is idempotent, we just need to make sure it's initialied.

	      this._init();

	      Keyboard.register('Orbit', {
	        'ltr': {
	          'ARROW_RIGHT': 'next',
	          'ARROW_LEFT': 'previous'
	        },
	        'rtl': {
	          'ARROW_LEFT': 'next',
	          'ARROW_RIGHT': 'previous'
	        }
	      });
	    }
	    /**
	    * Initializes the plugin by creating jQuery collections, setting attributes, and starting the animation.
	    * @function
	    * @private
	    */

	  }, {
	    key: "_init",
	    value: function _init() {
	      // @TODO: consider discussion on PR #9278 about DOM pollution by changeSlide
	      this._reset();

	      this.$wrapper = this.$element.find(".".concat(this.options.containerClass));
	      this.$slides = this.$element.find(".".concat(this.options.slideClass));
	      var $images = this.$element.find('img'),
	          initActive = this.$slides.filter('.is-active'),
	          id = this.$element[0].id || GetYoDigits(6, 'orbit');
	      this.$element.attr({
	        'data-resize': id,
	        'id': id
	      });

	      if (!initActive.length) {
	        this.$slides.eq(0).addClass('is-active');
	      }

	      if (!this.options.useMUI) {
	        this.$slides.addClass('no-motionui');
	      }

	      if ($images.length) {
	        onImagesLoaded($images, this._prepareForOrbit.bind(this));
	      } else {
	        this._prepareForOrbit(); //hehe

	      }

	      if (this.options.bullets) {
	        this._loadBullets();
	      }

	      this._events();

	      if (this.options.autoPlay && this.$slides.length > 1) {
	        this.geoSync();
	      }

	      if (this.options.accessible) {
	        // allow wrapper to be focusable to enable arrow navigation
	        this.$wrapper.attr('tabindex', 0);
	      }
	    }
	    /**
	    * Creates a jQuery collection of bullets, if they are being used.
	    * @function
	    * @private
	    */

	  }, {
	    key: "_loadBullets",
	    value: function _loadBullets() {
	      this.$bullets = this.$element.find(".".concat(this.options.boxOfBullets)).find('button');
	    }
	    /**
	    * Sets a `timer` object on the orbit, and starts the counter for the next slide.
	    * @function
	    */

	  }, {
	    key: "geoSync",
	    value: function geoSync() {
	      var _this = this;

	      this.timer = new Timer(this.$element, {
	        duration: this.options.timerDelay,
	        infinite: false
	      }, function () {
	        _this.changeSlide(true);
	      });
	      this.timer.start();
	    }
	    /**
	    * Sets wrapper and slide heights for the orbit.
	    * @function
	    * @private
	    */

	  }, {
	    key: "_prepareForOrbit",
	    value: function _prepareForOrbit() {

	      this._setWrapperHeight();
	    }
	    /**
	    * Calulates the height of each slide in the collection, and uses the tallest one for the wrapper height.
	    * @function
	    * @private
	    * @param {Function} cb - a callback function to fire when complete.
	    */

	  }, {
	    key: "_setWrapperHeight",
	    value: function _setWrapperHeight(cb) {
	      //rewrite this to `for` loop
	      var max = 0,
	          temp,
	          counter = 0,
	          _this = this;

	      this.$slides.each(function () {
	        temp = this.getBoundingClientRect().height;
	        jquery(this).attr('data-slide', counter); // hide all slides but the active one

	        if (!/mui/g.test(jquery(this)[0].className) && _this.$slides.filter('.is-active')[0] !== _this.$slides.eq(counter)[0]) {
	          jquery(this).css({
	            'display': 'none'
	          });
	        }

	        max = temp > max ? temp : max;
	        counter++;
	      });

	      if (counter === this.$slides.length) {
	        this.$wrapper.css({
	          'height': max
	        }); //only change the wrapper height property once.

	        if (cb) {
	          cb(max);
	        } //fire callback with max height dimension.

	      }
	    }
	    /**
	    * Sets the max-height of each slide.
	    * @function
	    * @private
	    */

	  }, {
	    key: "_setSlideHeight",
	    value: function _setSlideHeight(height) {
	      this.$slides.each(function () {
	        jquery(this).css('max-height', height);
	      });
	    }
	    /**
	    * Adds event listeners to basically everything within the element.
	    * @function
	    * @private
	    */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this = this; //***************************************
	      //**Now using custom event - thanks to:**
	      //**      Yohai Ararat of Toronto      **
	      //***************************************
	      //


	      this.$element.off('.resizeme.zf.trigger').on({
	        'resizeme.zf.trigger': this._prepareForOrbit.bind(this)
	      });

	      if (this.$slides.length > 1) {
	        if (this.options.swipe) {
	          this.$slides.off('swipeleft.zf.orbit swiperight.zf.orbit').on('swipeleft.zf.orbit', function (e) {
	            e.preventDefault();

	            _this.changeSlide(true);
	          }).on('swiperight.zf.orbit', function (e) {
	            e.preventDefault();

	            _this.changeSlide(false);
	          });
	        } //***************************************


	        if (this.options.autoPlay) {
	          this.$slides.on('click.zf.orbit', function () {
	            _this.$element.data('clickedOn', _this.$element.data('clickedOn') ? false : true);

	            _this.timer[_this.$element.data('clickedOn') ? 'pause' : 'start']();
	          });

	          if (this.options.pauseOnHover) {
	            this.$element.on('mouseenter.zf.orbit', function () {
	              _this.timer.pause();
	            }).on('mouseleave.zf.orbit', function () {
	              if (!_this.$element.data('clickedOn')) {
	                _this.timer.start();
	              }
	            });
	          }
	        }

	        if (this.options.navButtons) {
	          var $controls = this.$element.find(".".concat(this.options.nextClass, ", .").concat(this.options.prevClass));
	          $controls.attr('tabindex', 0) //also need to handle enter/return and spacebar key presses
	          .on('click.zf.orbit touchend.zf.orbit', function (e) {
	            e.preventDefault();

	            _this.changeSlide(jquery(this).hasClass(_this.options.nextClass));
	          });
	        }

	        if (this.options.bullets) {
	          this.$bullets.on('click.zf.orbit touchend.zf.orbit', function () {
	            if (/is-active/g.test(this.className)) {
	              return false;
	            } //if this is active, kick out of function.


	            var idx = jquery(this).data('slide'),
	                ltr = idx > _this.$slides.filter('.is-active').data('slide'),
	                $slide = _this.$slides.eq(idx);

	            _this.changeSlide(ltr, $slide, idx);
	          });
	        }

	        if (this.options.accessible) {
	          this.$wrapper.add(this.$bullets).on('keydown.zf.orbit', function (e) {
	            // handle keyboard event with keyboard util
	            Keyboard.handleKey(e, 'Orbit', {
	              next: function next() {
	                _this.changeSlide(true);
	              },
	              previous: function previous() {
	                _this.changeSlide(false);
	              },
	              handled: function handled() {
	                // if bullet is focused, make sure focus moves
	                if (jquery(e.target).is(_this.$bullets)) {
	                  _this.$bullets.filter('.is-active').focus();
	                }
	              }
	            });
	          });
	        }
	      }
	    }
	    /**
	     * Resets Orbit so it can be reinitialized
	     */

	  }, {
	    key: "_reset",
	    value: function _reset() {
	      // Don't do anything if there are no slides (first run)
	      if (typeof this.$slides == 'undefined') {
	        return;
	      }

	      if (this.$slides.length > 1) {
	        // Remove old events
	        this.$element.off('.zf.orbit').find('*').off('.zf.orbit'); // Restart timer if autoPlay is enabled

	        if (this.options.autoPlay) {
	          this.timer.restart();
	        } // Reset all sliddes


	        this.$slides.each(function (el) {
	          jquery(el).removeClass('is-active is-active is-in').removeAttr('aria-live').hide();
	        }); // Show the first slide

	        this.$slides.first().addClass('is-active').show(); // Triggers when the slide has finished animating

	        this.$element.trigger('slidechange.zf.orbit', [this.$slides.first()]); // Select first bullet if bullets are present

	        if (this.options.bullets) {
	          this._updateBullets(0);
	        }
	      }
	    }
	    /**
	    * Changes the current slide to a new one.
	    * @function
	    * @param {Boolean} isLTR - if true the slide moves from right to left, if false the slide moves from left to right.
	    * @param {jQuery} chosenSlide - the jQuery element of the slide to show next, if one is selected.
	    * @param {Number} idx - the index of the new slide in its collection, if one chosen.
	    * @fires Orbit#slidechange
	    */

	  }, {
	    key: "changeSlide",
	    value: function changeSlide(isLTR, chosenSlide, idx) {
	      if (!this.$slides) {
	        return;
	      } // Don't freak out if we're in the middle of cleanup


	      var $curSlide = this.$slides.filter('.is-active').eq(0);

	      if (/mui/g.test($curSlide[0].className)) {
	        return false;
	      } //if the slide is currently animating, kick out of the function


	      var $firstSlide = this.$slides.first(),
	          $lastSlide = this.$slides.last(),
	          dirIn = isLTR ? 'Right' : 'Left',
	          dirOut = isLTR ? 'Left' : 'Right',
	          _this = this,
	          $newSlide;

	      if (!chosenSlide) {
	        //most of the time, this will be auto played or clicked from the navButtons.
	        $newSlide = isLTR ? //if wrapping enabled, check to see if there is a `next` or `prev` sibling, if not, select the first or last slide to fill in. if wrapping not enabled, attempt to select `next` or `prev`, if there's nothing there, the function will kick out on next step. CRAZY NESTED TERNARIES!!!!!
	        this.options.infiniteWrap ? $curSlide.next(".".concat(this.options.slideClass)).length ? $curSlide.next(".".concat(this.options.slideClass)) : $firstSlide : $curSlide.next(".".concat(this.options.slideClass)) : //pick next slide if moving left to right
	        this.options.infiniteWrap ? $curSlide.prev(".".concat(this.options.slideClass)).length ? $curSlide.prev(".".concat(this.options.slideClass)) : $lastSlide : $curSlide.prev(".".concat(this.options.slideClass)); //pick prev slide if moving right to left
	      } else {
	        $newSlide = chosenSlide;
	      }

	      if ($newSlide.length) {
	        /**
	        * Triggers before the next slide starts animating in and only if a next slide has been found.
	        * @event Orbit#beforeslidechange
	        */
	        this.$element.trigger('beforeslidechange.zf.orbit', [$curSlide, $newSlide]);

	        if (this.options.bullets) {
	          idx = idx || this.$slides.index($newSlide); //grab index to update bullets

	          this._updateBullets(idx);
	        }

	        if (this.options.useMUI && !this.$element.is(':hidden')) {
	          Motion.animateIn($newSlide.addClass('is-active'), this.options["animInFrom".concat(dirIn)], function () {
	            $newSlide.css({
	              'display': 'block'
	            }).attr('aria-live', 'polite');
	          });
	          Motion.animateOut($curSlide.removeClass('is-active'), this.options["animOutTo".concat(dirOut)], function () {
	            $curSlide.removeAttr('aria-live');

	            if (_this.options.autoPlay && !_this.timer.isPaused) {
	              _this.timer.restart();
	            } //do stuff?

	          });
	        } else {
	          $curSlide.removeClass('is-active is-in').removeAttr('aria-live').hide();
	          $newSlide.addClass('is-active is-in').attr('aria-live', 'polite').show();

	          if (this.options.autoPlay && !this.timer.isPaused) {
	            this.timer.restart();
	          }
	        }
	        /**
	        * Triggers when the slide has finished animating in.
	        * @event Orbit#slidechange
	        */


	        this.$element.trigger('slidechange.zf.orbit', [$newSlide]);
	      }
	    }
	    /**
	    * Updates the active state of the bullets, if displayed.
	    * @function
	    * @private
	    * @param {Number} idx - the index of the current slide.
	    */

	  }, {
	    key: "_updateBullets",
	    value: function _updateBullets(idx) {
	      var $oldBullet = this.$element.find(".".concat(this.options.boxOfBullets)).find('.is-active').removeClass('is-active').blur(),
	          span = $oldBullet.find('span:last').detach(),
	          $newBullet = this.$bullets.eq(idx).addClass('is-active').append(span);
	    }
	    /**
	    * Destroys the carousel and hides the element.
	    * @function
	    */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$element.off('.zf.orbit').find('*').off('.zf.orbit').end().hide();
	    }
	  }]);

	  return Orbit;
	}(Plugin);

	Orbit.defaults = {
	  /**
	  * Tells the JS to look for and loadBullets.
	  * @option
	   * @type {boolean}
	  * @default true
	  */
	  bullets: true,

	  /**
	  * Tells the JS to apply event listeners to nav buttons
	  * @option
	   * @type {boolean}
	  * @default true
	  */
	  navButtons: true,

	  /**
	  * motion-ui animation class to apply
	  * @option
	   * @type {string}
	  * @default 'slide-in-right'
	  */
	  animInFromRight: 'slide-in-right',

	  /**
	  * motion-ui animation class to apply
	  * @option
	   * @type {string}
	  * @default 'slide-out-right'
	  */
	  animOutToRight: 'slide-out-right',

	  /**
	  * motion-ui animation class to apply
	  * @option
	   * @type {string}
	  * @default 'slide-in-left'
	  *
	  */
	  animInFromLeft: 'slide-in-left',

	  /**
	  * motion-ui animation class to apply
	  * @option
	   * @type {string}
	  * @default 'slide-out-left'
	  */
	  animOutToLeft: 'slide-out-left',

	  /**
	  * Allows Orbit to automatically animate on page load.
	  * @option
	   * @type {boolean}
	  * @default true
	  */
	  autoPlay: true,

	  /**
	  * Amount of time, in ms, between slide transitions
	  * @option
	   * @type {number}
	  * @default 5000
	  */
	  timerDelay: 5000,

	  /**
	  * Allows Orbit to infinitely loop through the slides
	  * @option
	   * @type {boolean}
	  * @default true
	  */
	  infiniteWrap: true,

	  /**
	  * Allows the Orbit slides to bind to swipe events for mobile, requires an additional util library
	  * @option
	   * @type {boolean}
	  * @default true
	  */
	  swipe: true,

	  /**
	  * Allows the timing function to pause animation on hover.
	  * @option
	   * @type {boolean}
	  * @default true
	  */
	  pauseOnHover: true,

	  /**
	  * Allows Orbit to bind keyboard events to the slider, to animate frames with arrow keys
	  * @option
	   * @type {boolean}
	  * @default true
	  */
	  accessible: true,

	  /**
	  * Class applied to the container of Orbit
	  * @option
	   * @type {string}
	  * @default 'orbit-container'
	  */
	  containerClass: 'orbit-container',

	  /**
	  * Class applied to individual slides.
	  * @option
	   * @type {string}
	  * @default 'orbit-slide'
	  */
	  slideClass: 'orbit-slide',

	  /**
	  * Class applied to the bullet container. You're welcome.
	  * @option
	   * @type {string}
	  * @default 'orbit-bullets'
	  */
	  boxOfBullets: 'orbit-bullets',

	  /**
	  * Class applied to the `next` navigation button.
	  * @option
	   * @type {string}
	  * @default 'orbit-next'
	  */
	  nextClass: 'orbit-next',

	  /**
	  * Class applied to the `previous` navigation button.
	  * @option
	   * @type {string}
	  * @default 'orbit-previous'
	  */
	  prevClass: 'orbit-previous',

	  /**
	  * Boolean to flag the js to use motion ui classes or not. Default to true for backwards compatibility.
	  * @option
	   * @type {boolean}
	  * @default true
	  */
	  useMUI: true
	};

	var MenuPlugins = {
	  dropdown: {
	    cssClass: 'dropdown',
	    plugin: DropdownMenu
	  },
	  drilldown: {
	    cssClass: 'drilldown',
	    plugin: Drilldown
	  },
	  accordion: {
	    cssClass: 'accordion-menu',
	    plugin: AccordionMenu
	  }
	}; // import "foundation.util.triggers.js";

	/**
	 * ResponsiveMenu module.
	 * @module foundation.responsiveMenu
	 * @requires foundation.util.triggers
	 * @requires foundation.util.mediaQuery
	 */

	var ResponsiveMenu =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(ResponsiveMenu, _Plugin);

	  function ResponsiveMenu() {
	    _classCallCheck(this, ResponsiveMenu);

	    return _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveMenu).apply(this, arguments));
	  }

	  _createClass(ResponsiveMenu, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of a responsive menu.
	     * @class
	     * @name ResponsiveMenu
	     * @fires ResponsiveMenu#init
	     * @param {jQuery} element - jQuery object to make into a dropdown menu.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = jquery(element);
	      this.rules = this.$element.data('responsive-menu');
	      this.currentMq = null;
	      this.currentPlugin = null;
	      this.className = 'ResponsiveMenu'; // ie9 back compat

	      this._init();

	      this._events();
	    }
	    /**
	     * Initializes the Menu by parsing the classes from the 'data-ResponsiveMenu' attribute on the element.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      MediaQuery._init(); // The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules


	      if (typeof this.rules === 'string') {
	        var rulesTree = {}; // Parse rules from "classes" pulled from data attribute

	        var rules = this.rules.split(' '); // Iterate through every rule found

	        for (var i = 0; i < rules.length; i++) {
	          var rule = rules[i].split('-');
	          var ruleSize = rule.length > 1 ? rule[0] : 'small';
	          var rulePlugin = rule.length > 1 ? rule[1] : rule[0];

	          if (MenuPlugins[rulePlugin] !== null) {
	            rulesTree[ruleSize] = MenuPlugins[rulePlugin];
	          }
	        }

	        this.rules = rulesTree;
	      }

	      if (!jquery.isEmptyObject(this.rules)) {
	        this._checkMediaQueries();
	      } // Add data-mutate since children may need it.


	      this.$element.attr('data-mutate', this.$element.attr('data-mutate') || GetYoDigits(6, 'responsive-menu'));
	    }
	    /**
	     * Initializes events for the Menu.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this = this;

	      jquery(window).on('changed.zf.mediaquery', function () {
	        _this._checkMediaQueries();
	      }); // $(window).on('resize.zf.ResponsiveMenu', function() {
	      //   _this._checkMediaQueries();
	      // });
	    }
	    /**
	     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_checkMediaQueries",
	    value: function _checkMediaQueries() {
	      var matchedMq,
	          _this = this; // Iterate through each rule and find the last matching rule


	      jquery.each(this.rules, function (key) {
	        if (MediaQuery.atLeast(key)) {
	          matchedMq = key;
	        }
	      }); // No match? No dice

	      if (!matchedMq) return; // Plugin already initialized? We good

	      if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return; // Remove existing plugin-specific CSS classes

	      jquery.each(MenuPlugins, function (key, value) {
	        _this.$element.removeClass(value.cssClass);
	      }); // Add the CSS class for the new plugin

	      this.$element.addClass(this.rules[matchedMq].cssClass); // Create an instance of the new plugin

	      if (this.currentPlugin) this.currentPlugin.destroy();
	      this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
	    }
	    /**
	     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.currentPlugin.destroy();
	      jquery(window).off('.zf.ResponsiveMenu');
	    }
	  }]);

	  return ResponsiveMenu;
	}(Plugin);

	ResponsiveMenu.defaults = {};

	/**
	 * ResponsiveToggle module.
	 * @module foundation.responsiveToggle
	 * @requires foundation.util.mediaQuery
	 * @requires foundation.util.motion
	 */

	var ResponsiveToggle =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(ResponsiveToggle, _Plugin);

	  function ResponsiveToggle() {
	    _classCallCheck(this, ResponsiveToggle);

	    return _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveToggle).apply(this, arguments));
	  }

	  _createClass(ResponsiveToggle, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of Tab Bar.
	     * @class
	     * @name ResponsiveToggle
	     * @fires ResponsiveToggle#init
	     * @param {jQuery} element - jQuery object to attach tab bar functionality to.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = jquery(element);
	      this.options = jquery.extend({}, ResponsiveToggle.defaults, this.$element.data(), options);
	      this.className = 'ResponsiveToggle'; // ie9 back compat

	      this._init();

	      this._events();
	    }
	    /**
	     * Initializes the tab bar by finding the target element, toggling element, and running update().
	     * @function
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      MediaQuery._init();

	      var targetID = this.$element.data('responsive-toggle');

	      if (!targetID) {
	        console.error('Your tab bar needs an ID of a Menu as the value of data-tab-bar.');
	      }

	      this.$targetMenu = jquery("#".concat(targetID));
	      this.$toggler = this.$element.find('[data-toggle]').filter(function () {
	        var target = jquery(this).data('toggle');
	        return target === targetID || target === "";
	      });
	      this.options = jquery.extend({}, this.options, this.$targetMenu.data()); // If they were set, parse the animation classes

	      if (this.options.animate) {
	        var input = this.options.animate.split(' ');
	        this.animationIn = input[0];
	        this.animationOut = input[1] || null;
	      }

	      this._update();
	    }
	    /**
	     * Adds necessary event handlers for the tab bar to work.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {

	      this._updateMqHandler = this._update.bind(this);
	      jquery(window).on('changed.zf.mediaquery', this._updateMqHandler);
	      this.$toggler.on('click.zf.responsiveToggle', this.toggleMenu.bind(this));
	    }
	    /**
	     * Checks the current media query to determine if the tab bar should be visible or hidden.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_update",
	    value: function _update() {
	      // Mobile
	      if (!MediaQuery.atLeast(this.options.hideFor)) {
	        this.$element.show();
	        this.$targetMenu.hide();
	      } // Desktop
	      else {
	          this.$element.hide();
	          this.$targetMenu.show();
	        }
	    }
	    /**
	     * Toggles the element attached to the tab bar. The toggle only happens if the screen is small enough to allow it.
	     * @function
	     * @fires ResponsiveToggle#toggled
	     */

	  }, {
	    key: "toggleMenu",
	    value: function toggleMenu() {
	      var _this2 = this;

	      if (!MediaQuery.atLeast(this.options.hideFor)) {
	        /**
	         * Fires when the element attached to the tab bar toggles.
	         * @event ResponsiveToggle#toggled
	         */
	        if (this.options.animate) {
	          if (this.$targetMenu.is(':hidden')) {
	            Motion.animateIn(this.$targetMenu, this.animationIn, function () {
	              _this2.$element.trigger('toggled.zf.responsiveToggle');

	              _this2.$targetMenu.find('[data-mutate]').triggerHandler('mutateme.zf.trigger');
	            });
	          } else {
	            Motion.animateOut(this.$targetMenu, this.animationOut, function () {
	              _this2.$element.trigger('toggled.zf.responsiveToggle');
	            });
	          }
	        } else {
	          this.$targetMenu.toggle(0);
	          this.$targetMenu.find('[data-mutate]').trigger('mutateme.zf.trigger');
	          this.$element.trigger('toggled.zf.responsiveToggle');
	        }
	      }
	    }
	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$element.off('.zf.responsiveToggle');
	      this.$toggler.off('.zf.responsiveToggle');
	      jquery(window).off('changed.zf.mediaquery', this._updateMqHandler);
	    }
	  }]);

	  return ResponsiveToggle;
	}(Plugin);

	ResponsiveToggle.defaults = {
	  /**
	   * The breakpoint after which the menu is always shown, and the tab bar is hidden.
	   * @option
	   * @type {string}
	   * @default 'medium'
	   */
	  hideFor: 'medium',

	  /**
	   * To decide if the toggle should be animated or not.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  animate: false
	};

	/**
	 * Reveal module.
	 * @module foundation.reveal
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.triggers
	 * @requires foundation.util.mediaQuery
	 * @requires foundation.util.motion if using animations
	 */

	var Reveal =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Reveal, _Plugin);

	  function Reveal() {
	    _classCallCheck(this, Reveal);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Reveal).apply(this, arguments));
	  }

	  _createClass(Reveal, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of Reveal.
	     * @class
	     * @name Reveal
	     * @param {jQuery} element - jQuery object to use for the modal.
	     * @param {Object} options - optional parameters.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery.extend({}, Reveal.defaults, this.$element.data(), options);
	      this.className = 'Reveal'; // ie9 back compat

	      this._init(); // Triggers init is idempotent, just need to make sure it is initialized


	      Triggers.init(jquery);
	      Keyboard.register('Reveal', {
	        'ESCAPE': 'close'
	      });
	    }
	    /**
	     * Initializes the modal by adding the overlay and close buttons, (if selected).
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      var _this2 = this;

	      MediaQuery._init();

	      this.id = this.$element.attr('id');
	      this.isActive = false;
	      this.cached = {
	        mq: MediaQuery.current
	      };
	      this.$anchor = jquery("[data-open=\"".concat(this.id, "\"]")).length ? jquery("[data-open=\"".concat(this.id, "\"]")) : jquery("[data-toggle=\"".concat(this.id, "\"]"));
	      this.$anchor.attr({
	        'aria-controls': this.id,
	        'aria-haspopup': true,
	        'tabindex': 0
	      });

	      if (this.options.fullScreen || this.$element.hasClass('full')) {
	        this.options.fullScreen = true;
	        this.options.overlay = false;
	      }

	      if (this.options.overlay && !this.$overlay) {
	        this.$overlay = this._makeOverlay(this.id);
	      }

	      this.$element.attr({
	        'role': 'dialog',
	        'aria-hidden': true,
	        'data-yeti-box': this.id,
	        'data-resize': this.id
	      });

	      if (this.$overlay) {
	        this.$element.detach().appendTo(this.$overlay);
	      } else {
	        this.$element.detach().appendTo(jquery(this.options.appendTo));
	        this.$element.addClass('without-overlay');
	      }

	      this._events();

	      if (this.options.deepLink && window.location.hash === "#".concat(this.id)) {
	        this.onLoadListener = onLoad(jquery(window), function () {
	          return _this2.open();
	        });
	      }
	    }
	    /**
	     * Creates an overlay div to display behind the modal.
	     * @private
	     */

	  }, {
	    key: "_makeOverlay",
	    value: function _makeOverlay() {
	      var additionalOverlayClasses = '';

	      if (this.options.additionalOverlayClasses) {
	        additionalOverlayClasses = ' ' + this.options.additionalOverlayClasses;
	      }

	      return jquery('<div></div>').addClass('reveal-overlay' + additionalOverlayClasses).appendTo(this.options.appendTo);
	    }
	    /**
	     * Updates position of modal
	     * TODO:  Figure out if we actually need to cache these values or if it doesn't matter
	     * @private
	     */

	  }, {
	    key: "_updatePosition",
	    value: function _updatePosition() {
	      var width = this.$element.outerWidth();
	      var outerWidth = jquery(window).width();
	      var height = this.$element.outerHeight();
	      var outerHeight = jquery(window).height();
	      var left,
	          top = null;

	      if (this.options.hOffset === 'auto') {
	        left = parseInt((outerWidth - width) / 2, 10);
	      } else {
	        left = parseInt(this.options.hOffset, 10);
	      }

	      if (this.options.vOffset === 'auto') {
	        if (height > outerHeight) {
	          top = parseInt(Math.min(100, outerHeight / 10), 10);
	        } else {
	          top = parseInt((outerHeight - height) / 4, 10);
	        }
	      } else if (this.options.vOffset !== null) {
	        top = parseInt(this.options.vOffset, 10);
	      }

	      if (top !== null) {
	        this.$element.css({
	          top: top + 'px'
	        });
	      } // only worry about left if we don't have an overlay or we have a horizontal offset,
	      // otherwise we're perfectly in the middle


	      if (!this.$overlay || this.options.hOffset !== 'auto') {
	        this.$element.css({
	          left: left + 'px'
	        });
	        this.$element.css({
	          margin: '0px'
	        });
	      }
	    }
	    /**
	     * Adds event handlers for the modal.
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this3 = this;

	      var _this = this;

	      this.$element.on({
	        'open.zf.trigger': this.open.bind(this),
	        'close.zf.trigger': function closeZfTrigger(event, $element) {
	          if (event.target === _this.$element[0] || jquery(event.target).parents('[data-closable]')[0] === $element) {
	            // only close reveal when it's explicitly called
	            return _this3.close.apply(_this3);
	          }
	        },
	        'toggle.zf.trigger': this.toggle.bind(this),
	        'resizeme.zf.trigger': function resizemeZfTrigger() {
	          _this._updatePosition();
	        }
	      });

	      if (this.options.closeOnClick && this.options.overlay) {
	        this.$overlay.off('.zf.reveal').on('click.zf.reveal', function (e) {
	          if (e.target === _this.$element[0] || jquery.contains(_this.$element[0], e.target) || !jquery.contains(document, e.target)) {
	            return;
	          }

	          _this.close();
	        });
	      }

	      if (this.options.deepLink) {
	        jquery(window).on("hashchange.zf.reveal:".concat(this.id), this._handleState.bind(this));
	      }
	    }
	    /**
	     * Handles modal methods on back/forward button clicks or any other event that triggers hashchange.
	     * @private
	     */

	  }, {
	    key: "_handleState",
	    value: function _handleState(e) {
	      if (window.location.hash === '#' + this.id && !this.isActive) {
	        this.open();
	      } else {
	        this.close();
	      }
	    }
	    /**
	    * Disables the scroll when Reveal is shown to prevent the background from shifting
	    * @param {number} scrollTop - Scroll to visually apply, window current scroll by default
	    */

	  }, {
	    key: "_disableScroll",
	    value: function _disableScroll(scrollTop) {
	      scrollTop = scrollTop || jquery(window).scrollTop();

	      if (jquery(document).height() > jquery(window).height()) {
	        jquery("html").css("top", -scrollTop);
	      }
	    }
	    /**
	    * Reenables the scroll when Reveal closes
	    * @param {number} scrollTop - Scroll to restore, html "top" property by default (as set by `_disableScroll`)
	    */

	  }, {
	    key: "_enableScroll",
	    value: function _enableScroll(scrollTop) {
	      scrollTop = scrollTop || parseInt(jquery("html").css("top"));

	      if (jquery(document).height() > jquery(window).height()) {
	        jquery("html").css("top", "");
	        jquery(window).scrollTop(-scrollTop);
	      }
	    }
	    /**
	     * Opens the modal controlled by `this.$anchor`, and closes all others by default.
	     * @function
	     * @fires Reveal#closeme
	     * @fires Reveal#open
	     */

	  }, {
	    key: "open",
	    value: function open() {
	      var _this4 = this;

	      // either update or replace browser history
	      var hash = "#".concat(this.id);

	      if (this.options.deepLink && window.location.hash !== hash) {
	        if (window.history.pushState) {
	          if (this.options.updateHistory) {
	            window.history.pushState({}, '', hash);
	          } else {
	            window.history.replaceState({}, '', hash);
	          }
	        } else {
	          window.location.hash = hash;
	        }
	      } // Remember anchor that opened it to set focus back later, have general anchors as fallback


	      this.$activeAnchor = jquery(document.activeElement).is(this.$anchor) ? jquery(document.activeElement) : this.$anchor;
	      this.isActive = true; // Make elements invisible, but remove display: none so we can get size and positioning

	      this.$element.css({
	        'visibility': 'hidden'
	      }).show().scrollTop(0);

	      if (this.options.overlay) {
	        this.$overlay.css({
	          'visibility': 'hidden'
	        }).show();
	      }

	      this._updatePosition();

	      this.$element.hide().css({
	        'visibility': ''
	      });

	      if (this.$overlay) {
	        this.$overlay.css({
	          'visibility': ''
	        }).hide();

	        if (this.$element.hasClass('fast')) {
	          this.$overlay.addClass('fast');
	        } else if (this.$element.hasClass('slow')) {
	          this.$overlay.addClass('slow');
	        }
	      }

	      if (!this.options.multipleOpened) {
	        /**
	         * Fires immediately before the modal opens.
	         * Closes any other modals that are currently open
	         * @event Reveal#closeme
	         */
	        this.$element.trigger('closeme.zf.reveal', this.id);
	      }

	      this._disableScroll();

	      var _this = this; // Motion UI method of reveal


	      if (this.options.animationIn) {
	        var afterAnimation = function afterAnimation() {
	          _this.$element.attr({
	            'aria-hidden': false,
	            'tabindex': -1
	          }).focus();

	          _this._addGlobalClasses();

	          Keyboard.trapFocus(_this.$element);
	        };

	        if (this.options.overlay) {
	          Motion.animateIn(this.$overlay, 'fade-in');
	        }

	        Motion.animateIn(this.$element, this.options.animationIn, function () {
	          if (_this4.$element) {
	            // protect against object having been removed
	            _this4.focusableElements = Keyboard.findFocusable(_this4.$element);
	            afterAnimation();
	          }
	        });
	      } // jQuery method of reveal
	      else {
	          if (this.options.overlay) {
	            this.$overlay.show(0);
	          }

	          this.$element.show(this.options.showDelay);
	        } // handle accessibility


	      this.$element.attr({
	        'aria-hidden': false,
	        'tabindex': -1
	      }).focus();
	      Keyboard.trapFocus(this.$element);

	      this._addGlobalClasses();

	      this._addGlobalListeners();
	      /**
	       * Fires when the modal has successfully opened.
	       * @event Reveal#open
	       */


	      this.$element.trigger('open.zf.reveal');
	    }
	    /**
	     * Adds classes and listeners on document required by open modals.
	     *
	     * The following classes are added and updated:
	     * - `.is-reveal-open` - Prevents the scroll on document
	     * - `.zf-has-scroll`  - Displays a disabled scrollbar on document if required like if the
	     *                       scroll was not disabled. This prevent a "shift" of the page content due
	     *                       the scrollbar disappearing when the modal opens.
	     *
	     * @private
	     */

	  }, {
	    key: "_addGlobalClasses",
	    value: function _addGlobalClasses() {
	      var updateScrollbarClass = function updateScrollbarClass() {
	        jquery('html').toggleClass('zf-has-scroll', !!(jquery(document).height() > jquery(window).height()));
	      };

	      this.$element.on('resizeme.zf.trigger.revealScrollbarListener', function () {
	        return updateScrollbarClass();
	      });
	      updateScrollbarClass();
	      jquery('html').addClass('is-reveal-open');
	    }
	    /**
	     * Removes classes and listeners on document that were required by open modals.
	     * @private
	     */

	  }, {
	    key: "_removeGlobalClasses",
	    value: function _removeGlobalClasses() {
	      this.$element.off('resizeme.zf.trigger.revealScrollbarListener');
	      jquery('html').removeClass('is-reveal-open');
	      jquery('html').removeClass('zf-has-scroll');
	    }
	    /**
	     * Adds extra event handlers for the body and window if necessary.
	     * @private
	     */

	  }, {
	    key: "_addGlobalListeners",
	    value: function _addGlobalListeners() {
	      var _this = this;

	      if (!this.$element) {
	        return;
	      } // If we're in the middle of cleanup, don't freak out


	      this.focusableElements = Keyboard.findFocusable(this.$element);

	      if (!this.options.overlay && this.options.closeOnClick && !this.options.fullScreen) {
	        jquery('body').on('click.zf.reveal', function (e) {
	          if (e.target === _this.$element[0] || jquery.contains(_this.$element[0], e.target) || !jquery.contains(document, e.target)) {
	            return;
	          }

	          _this.close();
	        });
	      }

	      if (this.options.closeOnEsc) {
	        jquery(window).on('keydown.zf.reveal', function (e) {
	          Keyboard.handleKey(e, 'Reveal', {
	            close: function close() {
	              if (_this.options.closeOnEsc) {
	                _this.close();
	              }
	            }
	          });
	        });
	      }
	    }
	    /**
	     * Closes the modal.
	     * @function
	     * @fires Reveal#closed
	     */

	  }, {
	    key: "close",
	    value: function close() {
	      if (!this.isActive || !this.$element.is(':visible')) {
	        return false;
	      }

	      var _this = this; // Motion UI method of hiding


	      if (this.options.animationOut) {
	        if (this.options.overlay) {
	          Motion.animateOut(this.$overlay, 'fade-out');
	        }

	        Motion.animateOut(this.$element, this.options.animationOut, finishUp);
	      } // jQuery method of hiding
	      else {
	          this.$element.hide(this.options.hideDelay);

	          if (this.options.overlay) {
	            this.$overlay.hide(0, finishUp);
	          } else {
	            finishUp();
	          }
	        } // Conditionals to remove extra event listeners added on open


	      if (this.options.closeOnEsc) {
	        jquery(window).off('keydown.zf.reveal');
	      }

	      if (!this.options.overlay && this.options.closeOnClick) {
	        jquery('body').off('click.zf.reveal');
	      }

	      this.$element.off('keydown.zf.reveal');

	      function finishUp() {
	        // Get the current top before the modal is closed and restore the scroll after.
	        // TODO: use component properties instead of HTML properties
	        // See https://github.com/zurb/foundation-sites/pull/10786
	        var scrollTop = parseInt(jquery("html").css("top"));

	        if (jquery('.reveal:visible').length === 0) {
	          _this._removeGlobalClasses(); // also remove .is-reveal-open from the html element when there is no opened reveal

	        }

	        Keyboard.releaseFocus(_this.$element);

	        _this.$element.attr('aria-hidden', true);

	        _this._enableScroll(scrollTop);
	        /**
	        * Fires when the modal is done closing.
	        * @event Reveal#closed
	        */


	        _this.$element.trigger('closed.zf.reveal');
	      }
	      /**
	      * Resets the modal content
	      * This prevents a running video to keep going in the background
	      */


	      if (this.options.resetOnClose) {
	        this.$element.html(this.$element.html());
	      }

	      this.isActive = false; // If deepLink and we did not switched to an other modal...

	      if (_this.options.deepLink && window.location.hash === "#".concat(this.id)) {
	        // Remove the history hash
	        if (window.history.replaceState) {
	          var urlWithoutHash = window.location.pathname + window.location.search;

	          if (this.options.updateHistory) {
	            window.history.pushState({}, '', urlWithoutHash); // remove the hash
	          } else {
	            window.history.replaceState('', document.title, urlWithoutHash);
	          }
	        } else {
	          window.location.hash = '';
	        }
	      }

	      this.$activeAnchor.focus();
	    }
	    /**
	     * Toggles the open/closed state of a modal.
	     * @function
	     */

	  }, {
	    key: "toggle",
	    value: function toggle() {
	      if (this.isActive) {
	        this.close();
	      } else {
	        this.open();
	      }
	    }
	  }, {
	    key: "_destroy",

	    /**
	     * Destroys an instance of a modal.
	     * @function
	     */
	    value: function _destroy() {
	      if (this.options.overlay) {
	        this.$element.appendTo(jquery(this.options.appendTo)); // move $element outside of $overlay to prevent error unregisterPlugin()

	        this.$overlay.hide().off().remove();
	      }

	      this.$element.hide().off();
	      this.$anchor.off('.zf');
	      jquery(window).off(".zf.reveal:".concat(this.id));
	      if (this.onLoadListener) jquery(window).off(this.onLoadListener);

	      if (jquery('.reveal:visible').length === 0) {
	        this._removeGlobalClasses(); // also remove .is-reveal-open from the html element when there is no opened reveal

	      }
	    }
	  }]);

	  return Reveal;
	}(Plugin);

	Reveal.defaults = {
	  /**
	   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  animationIn: '',

	  /**
	   * Motion-UI class to use for animated elements. If none used, defaults to simple show/hide.
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  animationOut: '',

	  /**
	   * Time, in ms, to delay the opening of a modal after a click if no animation used.
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  showDelay: 0,

	  /**
	   * Time, in ms, to delay the closing of a modal after a click if no animation used.
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  hideDelay: 0,

	  /**
	   * Allows a click on the body/overlay to close the modal.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  closeOnClick: true,

	  /**
	   * Allows the modal to close if the user presses the `ESCAPE` key.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  closeOnEsc: true,

	  /**
	   * If true, allows multiple modals to be displayed at once.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  multipleOpened: false,

	  /**
	   * Distance, in pixels, the modal should push down from the top of the screen.
	   * @option
	   * @type {number|string}
	   * @default auto
	   */
	  vOffset: 'auto',

	  /**
	   * Distance, in pixels, the modal should push in from the side of the screen.
	   * @option
	   * @type {number|string}
	   * @default auto
	   */
	  hOffset: 'auto',

	  /**
	   * Allows the modal to be fullscreen, completely blocking out the rest of the view. JS checks for this as well.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  fullScreen: false,

	  /**
	   * Allows the modal to generate an overlay div, which will cover the view when modal opens.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  overlay: true,

	  /**
	   * Allows the modal to remove and reinject markup on close. Should be true if using video elements w/o using provider's api, otherwise, videos will continue to play in the background.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  resetOnClose: false,

	  /**
	   * Link the location hash to the modal.
	   * Set the location hash when the modal is opened/closed, and open/close the modal when the location changes.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  deepLink: false,

	  /**
	   * If `deepLink` is enabled, update the browser history with the open modal
	   * @option
	   * @default false
	   */
	  updateHistory: false,

	  /**
	  * Allows the modal to append to custom div.
	  * @option
	  * @type {string}
	  * @default "body"
	  */
	  appendTo: "body",

	  /**
	   * Allows adding additional class names to the reveal overlay.
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  additionalOverlayClasses: ''
	};

	/**
	 * Slider module.
	 * @module foundation.slider
	 * @requires foundation.util.motion
	 * @requires foundation.util.triggers
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.touch
	 */

	var Slider =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Slider, _Plugin);

	  function Slider() {
	    _classCallCheck(this, Slider);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Slider).apply(this, arguments));
	  }

	  _createClass(Slider, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of a slider control.
	     * @class
	     * @name Slider
	     * @param {jQuery} element - jQuery object to make into a slider control.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery.extend({}, Slider.defaults, this.$element.data(), options);
	      this.className = 'Slider'; // ie9 back compat
	      // Touch and Triggers inits are idempotent, we just need to make sure it's initialied.

	      Touch.init(jquery);
	      Triggers.init(jquery);

	      this._init();

	      Keyboard.register('Slider', {
	        'ltr': {
	          'ARROW_RIGHT': 'increase',
	          'ARROW_UP': 'increase',
	          'ARROW_DOWN': 'decrease',
	          'ARROW_LEFT': 'decrease',
	          'SHIFT_ARROW_RIGHT': 'increase_fast',
	          'SHIFT_ARROW_UP': 'increase_fast',
	          'SHIFT_ARROW_DOWN': 'decrease_fast',
	          'SHIFT_ARROW_LEFT': 'decrease_fast',
	          'HOME': 'min',
	          'END': 'max'
	        },
	        'rtl': {
	          'ARROW_LEFT': 'increase',
	          'ARROW_RIGHT': 'decrease',
	          'SHIFT_ARROW_LEFT': 'increase_fast',
	          'SHIFT_ARROW_RIGHT': 'decrease_fast'
	        }
	      });
	    }
	    /**
	     * Initilizes the plugin by reading/setting attributes, creating collections and setting the initial position of the handle(s).
	     * @function
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      this.inputs = this.$element.find('input');
	      this.handles = this.$element.find('[data-slider-handle]');
	      this.$handle = this.handles.eq(0);
	      this.$input = this.inputs.length ? this.inputs.eq(0) : jquery("#".concat(this.$handle.attr('aria-controls')));
	      this.$fill = this.$element.find('[data-slider-fill]').css(this.options.vertical ? 'height' : 'width', 0);

	      if (this.options.disabled || this.$element.hasClass(this.options.disabledClass)) {
	        this.options.disabled = true;
	        this.$element.addClass(this.options.disabledClass);
	      }

	      if (!this.inputs.length) {
	        this.inputs = jquery().add(this.$input);
	        this.options.binding = true;
	      }

	      this._setInitAttr(0);

	      if (this.handles[1]) {
	        this.options.doubleSided = true;
	        this.$handle2 = this.handles.eq(1);
	        this.$input2 = this.inputs.length > 1 ? this.inputs.eq(1) : jquery("#".concat(this.$handle2.attr('aria-controls')));

	        if (!this.inputs[1]) {
	          this.inputs = this.inputs.add(this.$input2);
	        }

	        this._setInitAttr(1);
	      } // Set handle positions


	      this.setHandles();

	      this._events();
	    }
	  }, {
	    key: "setHandles",
	    value: function setHandles() {
	      var _this2 = this;

	      if (this.handles[1]) {
	        this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true, function () {
	          _this2._setHandlePos(_this2.$handle2, _this2.inputs.eq(1).val(), true);
	        });
	      } else {
	        this._setHandlePos(this.$handle, this.inputs.eq(0).val(), true);
	      }
	    }
	  }, {
	    key: "_reflow",
	    value: function _reflow() {
	      this.setHandles();
	    }
	    /**
	    * @function
	    * @private
	    * @param {Number} value - floating point (the value) to be transformed using to a relative position on the slider (the inverse of _value)
	    */

	  }, {
	    key: "_pctOfBar",
	    value: function _pctOfBar(value) {
	      var pctOfBar = percent(value - this.options.start, this.options.end - this.options.start);

	      switch (this.options.positionValueFunction) {
	        case "pow":
	          pctOfBar = this._logTransform(pctOfBar);
	          break;

	        case "log":
	          pctOfBar = this._powTransform(pctOfBar);
	          break;
	      }

	      return pctOfBar.toFixed(2);
	    }
	    /**
	    * @function
	    * @private
	    * @param {Number} pctOfBar - floating point, the relative position of the slider (typically between 0-1) to be transformed to a value
	    */

	  }, {
	    key: "_value",
	    value: function _value(pctOfBar) {
	      switch (this.options.positionValueFunction) {
	        case "pow":
	          pctOfBar = this._powTransform(pctOfBar);
	          break;

	        case "log":
	          pctOfBar = this._logTransform(pctOfBar);
	          break;
	      }

	      var value = (this.options.end - this.options.start) * pctOfBar + parseFloat(this.options.start);
	      return value;
	    }
	    /**
	    * @function
	    * @private
	    * @param {Number} value - floating point (typically between 0-1) to be transformed using the log function
	    */

	  }, {
	    key: "_logTransform",
	    value: function _logTransform(value) {
	      return baseLog(this.options.nonLinearBase, value * (this.options.nonLinearBase - 1) + 1);
	    }
	    /**
	    * @function
	    * @private
	    * @param {Number} value - floating point (typically between 0-1) to be transformed using the power function
	    */

	  }, {
	    key: "_powTransform",
	    value: function _powTransform(value) {
	      return (Math.pow(this.options.nonLinearBase, value) - 1) / (this.options.nonLinearBase - 1);
	    }
	    /**
	     * Sets the position of the selected handle and fill bar.
	     * @function
	     * @private
	     * @param {jQuery} $hndl - the selected handle to move.
	     * @param {Number} location - floating point between the start and end values of the slider bar.
	     * @param {Function} cb - callback function to fire on completion.
	     * @fires Slider#moved
	     * @fires Slider#changed
	     */

	  }, {
	    key: "_setHandlePos",
	    value: function _setHandlePos($hndl, location, noInvert, cb) {
	      // don't move if the slider has been disabled since its initialization
	      if (this.$element.hasClass(this.options.disabledClass)) {
	        return;
	      } //might need to alter that slightly for bars that will have odd number selections.


	      location = parseFloat(location); //on input change events, convert string to number...grumble.
	      // prevent slider from running out of bounds, if value exceeds the limits set through options, override the value to min/max

	      if (location < this.options.start) {
	        location = this.options.start;
	      } else if (location > this.options.end) {
	        location = this.options.end;
	      }

	      var isDbl = this.options.doubleSided; //this is for single-handled vertical sliders, it adjusts the value to account for the slider being "upside-down"
	      //for click and drag events, it's weird due to the scale(-1, 1) css property

	      if (this.options.vertical && !noInvert) {
	        location = this.options.end - location;
	      }

	      if (isDbl) {
	        //this block is to prevent 2 handles from crossing eachother. Could/should be improved.
	        if (this.handles.index($hndl) === 0) {
	          var h2Val = parseFloat(this.$handle2.attr('aria-valuenow'));
	          location = location >= h2Val ? h2Val - this.options.step : location;
	        } else {
	          var h1Val = parseFloat(this.$handle.attr('aria-valuenow'));
	          location = location <= h1Val ? h1Val + this.options.step : location;
	        }
	      }

	      var _this = this,
	          vert = this.options.vertical,
	          hOrW = vert ? 'height' : 'width',
	          lOrT = vert ? 'top' : 'left',
	          handleDim = $hndl[0].getBoundingClientRect()[hOrW],
	          elemDim = this.$element[0].getBoundingClientRect()[hOrW],
	          //percentage of bar min/max value based on click or drag point
	      pctOfBar = this._pctOfBar(location),
	          //number of actual pixels to shift the handle, based on the percentage obtained above
	      pxToMove = (elemDim - handleDim) * pctOfBar,
	          //percentage of bar to shift the handle
	      movement = (percent(pxToMove, elemDim) * 100).toFixed(this.options.decimal); //fixing the decimal value for the location number, is passed to other methods as a fixed floating-point value


	      location = parseFloat(location.toFixed(this.options.decimal)); // declare empty object for css adjustments, only used with 2 handled-sliders

	      var css = {};

	      this._setValues($hndl, location); // TODO update to calculate based on values set to respective inputs??


	      if (isDbl) {
	        var isLeftHndl = this.handles.index($hndl) === 0,
	            //empty variable, will be used for min-height/width for fill bar
	        dim,
	            //percentage w/h of the handle compared to the slider bar
	        handlePct = ~~(percent(handleDim, elemDim) * 100); //if left handle, the math is slightly different than if it's the right handle, and the left/top property needs to be changed for the fill bar

	        if (isLeftHndl) {
	          //left or top percentage value to apply to the fill bar.
	          css[lOrT] = "".concat(movement, "%"); //calculate the new min-height/width for the fill bar.

	          dim = parseFloat(this.$handle2[0].style[lOrT]) - movement + handlePct; //this callback is necessary to prevent errors and allow the proper placement and initialization of a 2-handled slider
	          //plus, it means we don't care if 'dim' isNaN on init, it won't be in the future.

	          if (cb && typeof cb === 'function') {
	            cb();
	          } //this is only needed for the initialization of 2 handled sliders

	        } else {
	          //just caching the value of the left/bottom handle's left/top property
	          var handlePos = parseFloat(this.$handle[0].style[lOrT]); //calculate the new min-height/width for the fill bar. Use isNaN to prevent false positives for numbers <= 0
	          //based on the percentage of movement of the handle being manipulated, less the opposing handle's left/top position, plus the percentage w/h of the handle itself

	          dim = movement - (isNaN(handlePos) ? (this.options.initialStart - this.options.start) / ((this.options.end - this.options.start) / 100) : handlePos) + handlePct;
	        } // assign the min-height/width to our css object


	        css["min-".concat(hOrW)] = "".concat(dim, "%");
	      }

	      this.$element.one('finished.zf.animate', function () {
	        /**
	         * Fires when the handle is done moving.
	         * @event Slider#moved
	         */
	        _this.$element.trigger('moved.zf.slider', [$hndl]);
	      }); //because we don't know exactly how the handle will be moved, check the amount of time it should take to move.

	      var moveTime = this.$element.data('dragging') ? 1000 / 60 : this.options.moveTime;
	      Move(moveTime, $hndl, function () {
	        // adjusting the left/top property of the handle, based on the percentage calculated above
	        // if movement isNaN, that is because the slider is hidden and we cannot determine handle width,
	        // fall back to next best guess.
	        if (isNaN(movement)) {
	          $hndl.css(lOrT, "".concat(pctOfBar * 100, "%"));
	        } else {
	          $hndl.css(lOrT, "".concat(movement, "%"));
	        }

	        if (!_this.options.doubleSided) {
	          //if single-handled, a simple method to expand the fill bar
	          _this.$fill.css(hOrW, "".concat(pctOfBar * 100, "%"));
	        } else {
	          //otherwise, use the css object we created above
	          _this.$fill.css(css);
	        }
	      });
	      /**
	       * Fires when the value has not been change for a given time.
	       * @event Slider#changed
	       */

	      clearTimeout(_this.timeout);
	      _this.timeout = setTimeout(function () {
	        _this.$element.trigger('changed.zf.slider', [$hndl]);
	      }, _this.options.changedDelay);
	    }
	    /**
	     * Sets the initial attribute for the slider element.
	     * @function
	     * @private
	     * @param {Number} idx - index of the current handle/input to use.
	     */

	  }, {
	    key: "_setInitAttr",
	    value: function _setInitAttr(idx) {
	      var initVal = idx === 0 ? this.options.initialStart : this.options.initialEnd;
	      var id = this.inputs.eq(idx).attr('id') || GetYoDigits(6, 'slider');
	      this.inputs.eq(idx).attr({
	        'id': id,
	        'max': this.options.end,
	        'min': this.options.start,
	        'step': this.options.step
	      });
	      this.inputs.eq(idx).val(initVal);
	      this.handles.eq(idx).attr({
	        'role': 'slider',
	        'aria-controls': id,
	        'aria-valuemax': this.options.end,
	        'aria-valuemin': this.options.start,
	        'aria-valuenow': initVal,
	        'aria-orientation': this.options.vertical ? 'vertical' : 'horizontal',
	        'tabindex': 0
	      });
	    }
	    /**
	     * Sets the input and `aria-valuenow` values for the slider element.
	     * @function
	     * @private
	     * @param {jQuery} $handle - the currently selected handle.
	     * @param {Number} val - floating point of the new value.
	     */

	  }, {
	    key: "_setValues",
	    value: function _setValues($handle, val) {
	      var idx = this.options.doubleSided ? this.handles.index($handle) : 0;
	      this.inputs.eq(idx).val(val);
	      $handle.attr('aria-valuenow', val);
	    }
	    /**
	     * Handles events on the slider element.
	     * Calculates the new location of the current handle.
	     * If there are two handles and the bar was clicked, it determines which handle to move.
	     * @function
	     * @private
	     * @param {Object} e - the `event` object passed from the listener.
	     * @param {jQuery} $handle - the current handle to calculate for, if selected.
	     * @param {Number} val - floating point number for the new value of the slider.
	     * TODO clean this up, there's a lot of repeated code between this and the _setHandlePos fn.
	     */

	  }, {
	    key: "_handleEvent",
	    value: function _handleEvent(e, $handle, val) {
	      var value, hasVal;

	      if (!val) {
	        //click or drag events
	        e.preventDefault();

	        var _this = this,
	            vertical = this.options.vertical,
	            param = vertical ? 'height' : 'width',
	            direction = vertical ? 'top' : 'left',
	            eventOffset = vertical ? e.pageY : e.pageX,
	            halfOfHandle = this.$handle[0].getBoundingClientRect()[param] / 2,
	            barDim = this.$element[0].getBoundingClientRect()[param],
	            windowScroll = vertical ? jquery(window).scrollTop() : jquery(window).scrollLeft();

	        var elemOffset = this.$element.offset()[direction]; // touch events emulated by the touch util give position relative to screen, add window.scroll to event coordinates...
	        // best way to guess this is simulated is if clientY == pageY

	        if (e.clientY === e.pageY) {
	          eventOffset = eventOffset + windowScroll;
	        }

	        var eventFromBar = eventOffset - elemOffset;
	        var barXY;

	        if (eventFromBar < 0) {
	          barXY = 0;
	        } else if (eventFromBar > barDim) {
	          barXY = barDim;
	        } else {
	          barXY = eventFromBar;
	        }

	        var offsetPct = percent(barXY, barDim);
	        value = this._value(offsetPct); // turn everything around for RTL, yay math!

	        if (rtl() && !this.options.vertical) {
	          value = this.options.end - value;
	        }

	        value = _this._adjustValue(null, value); //boolean flag for the setHandlePos fn, specifically for vertical sliders

	        hasVal = false;

	        if (!$handle) {
	          //figure out which handle it is, pass it to the next function.
	          var firstHndlPos = absPosition(this.$handle, direction, barXY, param),
	              secndHndlPos = absPosition(this.$handle2, direction, barXY, param);
	          $handle = firstHndlPos <= secndHndlPos ? this.$handle : this.$handle2;
	        }
	      } else {
	        //change event on input
	        value = this._adjustValue(null, val);
	        hasVal = true;
	      }

	      this._setHandlePos($handle, value, hasVal);
	    }
	    /**
	     * Adjustes value for handle in regard to step value. returns adjusted value
	     * @function
	     * @private
	     * @param {jQuery} $handle - the selected handle.
	     * @param {Number} value - value to adjust. used if $handle is falsy
	     */

	  }, {
	    key: "_adjustValue",
	    value: function _adjustValue($handle, value) {
	      var val,
	          step = this.options.step,
	          div = parseFloat(step / 2),
	          left,
	          prev_val,
	          next_val;

	      if (!!$handle) {
	        val = parseFloat($handle.attr('aria-valuenow'));
	      } else {
	        val = value;
	      }

	      if (val >= 0) {
	        left = val % step;
	      } else {
	        left = step + val % step;
	      }

	      prev_val = val - left;
	      next_val = prev_val + step;

	      if (left === 0) {
	        return val;
	      }

	      val = val >= prev_val + div ? next_val : prev_val;
	      return val;
	    }
	    /**
	     * Adds event listeners to the slider elements.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      this._eventsForHandle(this.$handle);

	      if (this.handles[1]) {
	        this._eventsForHandle(this.$handle2);
	      }
	    }
	    /**
	     * Adds event listeners a particular handle
	     * @function
	     * @private
	     * @param {jQuery} $handle - the current handle to apply listeners to.
	     */

	  }, {
	    key: "_eventsForHandle",
	    value: function _eventsForHandle($handle) {
	      var _this = this,
	          curHandle;

	      var handleChangeEvent = function handleChangeEvent(e) {
	        var idx = _this.inputs.index(jquery(this));

	        _this._handleEvent(e, _this.handles.eq(idx), jquery(this).val());
	      }; // IE only triggers the change event when the input loses focus which strictly follows the HTML specification
	      // listen for the enter key and trigger a change
	      // @see https://html.spec.whatwg.org/multipage/input.html#common-input-element-events


	      this.inputs.off('keyup.zf.slider').on('keyup.zf.slider', function (e) {
	        if (e.keyCode == 13) handleChangeEvent.call(this, e);
	      });
	      this.inputs.off('change.zf.slider').on('change.zf.slider', handleChangeEvent);

	      if (this.options.clickSelect) {
	        this.$element.off('click.zf.slider').on('click.zf.slider', function (e) {
	          if (_this.$element.data('dragging')) {
	            return false;
	          }

	          if (!jquery(e.target).is('[data-slider-handle]')) {
	            if (_this.options.doubleSided) {
	              _this._handleEvent(e);
	            } else {
	              _this._handleEvent(e, _this.$handle);
	            }
	          }
	        });
	      }

	      if (this.options.draggable) {
	        this.handles.addTouch();
	        var $body = jquery('body');
	        $handle.off('mousedown.zf.slider').on('mousedown.zf.slider', function (e) {
	          $handle.addClass('is-dragging');

	          _this.$fill.addClass('is-dragging'); //


	          _this.$element.data('dragging', true);

	          curHandle = jquery(e.currentTarget);
	          $body.on('mousemove.zf.slider', function (e) {
	            e.preventDefault();

	            _this._handleEvent(e, curHandle);
	          }).on('mouseup.zf.slider', function (e) {
	            _this._handleEvent(e, curHandle);

	            $handle.removeClass('is-dragging');

	            _this.$fill.removeClass('is-dragging');

	            _this.$element.data('dragging', false);

	            $body.off('mousemove.zf.slider mouseup.zf.slider');
	          });
	        }) // prevent events triggered by touch
	        .on('selectstart.zf.slider touchmove.zf.slider', function (e) {
	          e.preventDefault();
	        });
	      }

	      $handle.off('keydown.zf.slider').on('keydown.zf.slider', function (e) {
	        var _$handle = jquery(this),
	            idx = _this.options.doubleSided ? _this.handles.index(_$handle) : 0,
	            oldValue = parseFloat(_this.inputs.eq(idx).val()),
	            newValue; // handle keyboard event with keyboard util


	        Keyboard.handleKey(e, 'Slider', {
	          decrease: function decrease() {
	            newValue = oldValue - _this.options.step;
	          },
	          increase: function increase() {
	            newValue = oldValue + _this.options.step;
	          },
	          decrease_fast: function decrease_fast() {
	            newValue = oldValue - _this.options.step * 10;
	          },
	          increase_fast: function increase_fast() {
	            newValue = oldValue + _this.options.step * 10;
	          },
	          min: function min() {
	            newValue = _this.options.start;
	          },
	          max: function max() {
	            newValue = _this.options.end;
	          },
	          handled: function handled() {
	            // only set handle pos when event was handled specially
	            e.preventDefault();

	            _this._setHandlePos(_$handle, newValue, true);
	          }
	        });
	        /*if (newValue) { // if pressed key has special function, update value
	          e.preventDefault();
	          _this._setHandlePos(_$handle, newValue);
	        }*/
	      });
	    }
	    /**
	     * Destroys the slider plugin.
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.handles.off('.zf.slider');
	      this.inputs.off('.zf.slider');
	      this.$element.off('.zf.slider');
	      clearTimeout(this.timeout);
	    }
	  }]);

	  return Slider;
	}(Plugin);

	Slider.defaults = {
	  /**
	   * Minimum value for the slider scale.
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  start: 0,

	  /**
	   * Maximum value for the slider scale.
	   * @option
	   * @type {number}
	   * @default 100
	   */
	  end: 100,

	  /**
	   * Minimum value change per change event.
	   * @option
	   * @type {number}
	   * @default 1
	   */
	  step: 1,

	  /**
	   * Value at which the handle/input *(left handle/first input)* should be set to on initialization.
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  initialStart: 0,

	  /**
	   * Value at which the right handle/second input should be set to on initialization.
	   * @option
	   * @type {number}
	   * @default 100
	   */
	  initialEnd: 100,

	  /**
	   * Allows the input to be located outside the container and visible. Set to by the JS
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  binding: false,

	  /**
	   * Allows the user to click/tap on the slider bar to select a value.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  clickSelect: true,

	  /**
	   * Set to true and use the `vertical` class to change alignment to vertical.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  vertical: false,

	  /**
	   * Allows the user to drag the slider handle(s) to select a value.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  draggable: true,

	  /**
	   * Disables the slider and prevents event listeners from being applied. Double checked by JS with `disabledClass`.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  disabled: false,

	  /**
	   * Allows the use of two handles. Double checked by the JS. Changes some logic handling.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  doubleSided: false,

	  /**
	   * Potential future feature.
	   */
	  // steps: 100,

	  /**
	   * Number of decimal places the plugin should go to for floating point precision.
	   * @option
	   * @type {number}
	   * @default 2
	   */
	  decimal: 2,

	  /**
	   * Time delay for dragged elements.
	   */
	  // dragDelay: 0,

	  /**
	   * Time, in ms, to animate the movement of a slider handle if user clicks/taps on the bar. Needs to be manually set if updating the transition time in the Sass settings.
	   * @option
	   * @type {number}
	   * @default 200
	   */
	  moveTime: 200,
	  //update this if changing the transition time in the sass

	  /**
	   * Class applied to disabled sliders.
	   * @option
	   * @type {string}
	   * @default 'disabled'
	   */
	  disabledClass: 'disabled',

	  /**
	   * Will invert the default layout for a vertical<span data-tooltip title="who would do this???"> </span>slider.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  invertVertical: false,

	  /**
	   * Milliseconds before the `changed.zf-slider` event is triggered after value change.
	   * @option
	   * @type {number}
	   * @default 500
	   */
	  changedDelay: 500,

	  /**
	  * Basevalue for non-linear sliders
	  * @option
	  * @type {number}
	  * @default 5
	  */
	  nonLinearBase: 5,

	  /**
	  * Basevalue for non-linear sliders, possible values are: `'linear'`, `'pow'` & `'log'`. Pow and Log use the nonLinearBase setting.
	  * @option
	  * @type {string}
	  * @default 'linear'
	  */
	  positionValueFunction: 'linear'
	};

	function percent(frac, num) {
	  return frac / num;
	}

	function absPosition($handle, dir, clickPos, param) {
	  return Math.abs($handle.position()[dir] + $handle[param]() / 2 - clickPos);
	}

	function baseLog(base, value) {
	  return Math.log(value) / Math.log(base);
	}

	/**
	 * Sticky module.
	 * @module foundation.sticky
	 * @requires foundation.util.triggers
	 * @requires foundation.util.mediaQuery
	 */

	var Sticky =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Sticky, _Plugin);

	  function Sticky() {
	    _classCallCheck(this, Sticky);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Sticky).apply(this, arguments));
	  }

	  _createClass(Sticky, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of a sticky thing.
	     * @class
	     * @name Sticky
	     * @param {jQuery} element - jQuery object to make sticky.
	     * @param {Object} options - options object passed when creating the element programmatically.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery.extend({}, Sticky.defaults, this.$element.data(), options);
	      this.className = 'Sticky'; // ie9 back compat
	      // Triggers init is idempotent, just need to make sure it is initialized

	      Triggers.init(jquery);

	      this._init();
	    }
	    /**
	     * Initializes the sticky element by adding classes, getting/setting dimensions, breakpoints and attributes
	     * @function
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      MediaQuery._init();

	      var $parent = this.$element.parent('[data-sticky-container]'),
	          id = this.$element[0].id || GetYoDigits(6, 'sticky'),
	          _this = this;

	      if ($parent.length) {
	        this.$container = $parent;
	      } else {
	        this.wasWrapped = true;
	        this.$element.wrap(this.options.container);
	        this.$container = this.$element.parent();
	      }

	      this.$container.addClass(this.options.containerClass);
	      this.$element.addClass(this.options.stickyClass).attr({
	        'data-resize': id,
	        'data-mutate': id
	      });

	      if (this.options.anchor !== '') {
	        jquery('#' + _this.options.anchor).attr({
	          'data-mutate': id
	        });
	      }

	      this.scrollCount = this.options.checkEvery;
	      this.isStuck = false;
	      this.onLoadListener = onLoad(jquery(window), function () {
	        //We calculate the container height to have correct values for anchor points offset calculation.
	        _this.containerHeight = _this.$element.css("display") == "none" ? 0 : _this.$element[0].getBoundingClientRect().height;

	        _this.$container.css('height', _this.containerHeight);

	        _this.elemHeight = _this.containerHeight;

	        if (_this.options.anchor !== '') {
	          _this.$anchor = jquery('#' + _this.options.anchor);
	        } else {
	          _this._parsePoints();
	        }

	        _this._setSizes(function () {
	          var scroll = window.pageYOffset;

	          _this._calc(false, scroll); //Unstick the element will ensure that proper classes are set.


	          if (!_this.isStuck) {
	            _this._removeSticky(scroll >= _this.topPoint ? false : true);
	          }
	        });

	        _this._events(id.split('-').reverse().join('-'));
	      });
	    }
	    /**
	     * If using multiple elements as anchors, calculates the top and bottom pixel values the sticky thing should stick and unstick on.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_parsePoints",
	    value: function _parsePoints() {
	      var top = this.options.topAnchor == "" ? 1 : this.options.topAnchor,
	          btm = this.options.btmAnchor == "" ? document.documentElement.scrollHeight : this.options.btmAnchor,
	          pts = [top, btm],
	          breaks = {};

	      for (var i = 0, len = pts.length; i < len && pts[i]; i++) {
	        var pt;

	        if (typeof pts[i] === 'number') {
	          pt = pts[i];
	        } else {
	          var place = pts[i].split(':'),
	              anchor = jquery("#".concat(place[0]));
	          pt = anchor.offset().top;

	          if (place[1] && place[1].toLowerCase() === 'bottom') {
	            pt += anchor[0].getBoundingClientRect().height;
	          }
	        }

	        breaks[i] = pt;
	      }

	      this.points = breaks;
	      return;
	    }
	    /**
	     * Adds event handlers for the scrolling element.
	     * @private
	     * @param {String} id - pseudo-random id for unique scroll event listener.
	     */

	  }, {
	    key: "_events",
	    value: function _events(id) {
	      var _this = this,
	          scrollListener = this.scrollListener = "scroll.zf.".concat(id);

	      if (this.isOn) {
	        return;
	      }

	      if (this.canStick) {
	        this.isOn = true;
	        jquery(window).off(scrollListener).on(scrollListener, function (e) {
	          if (_this.scrollCount === 0) {
	            _this.scrollCount = _this.options.checkEvery;

	            _this._setSizes(function () {
	              _this._calc(false, window.pageYOffset);
	            });
	          } else {
	            _this.scrollCount--;

	            _this._calc(false, window.pageYOffset);
	          }
	        });
	      }

	      this.$element.off('resizeme.zf.trigger').on('resizeme.zf.trigger', function (e, el) {
	        _this._eventsHandler(id);
	      });
	      this.$element.on('mutateme.zf.trigger', function (e, el) {
	        _this._eventsHandler(id);
	      });

	      if (this.$anchor) {
	        this.$anchor.on('mutateme.zf.trigger', function (e, el) {
	          _this._eventsHandler(id);
	        });
	      }
	    }
	    /**
	     * Handler for events.
	     * @private
	     * @param {String} id - pseudo-random id for unique scroll event listener.
	     */

	  }, {
	    key: "_eventsHandler",
	    value: function _eventsHandler(id) {
	      var _this = this,
	          scrollListener = this.scrollListener = "scroll.zf.".concat(id);

	      _this._setSizes(function () {
	        _this._calc(false);

	        if (_this.canStick) {
	          if (!_this.isOn) {
	            _this._events(id);
	          }
	        } else if (_this.isOn) {
	          _this._pauseListeners(scrollListener);
	        }
	      });
	    }
	    /**
	     * Removes event handlers for scroll and change events on anchor.
	     * @fires Sticky#pause
	     * @param {String} scrollListener - unique, namespaced scroll listener attached to `window`
	     */

	  }, {
	    key: "_pauseListeners",
	    value: function _pauseListeners(scrollListener) {
	      this.isOn = false;
	      jquery(window).off(scrollListener);
	      /**
	       * Fires when the plugin is paused due to resize event shrinking the view.
	       * @event Sticky#pause
	       * @private
	       */

	      this.$element.trigger('pause.zf.sticky');
	    }
	    /**
	     * Called on every `scroll` event and on `_init`
	     * fires functions based on booleans and cached values
	     * @param {Boolean} checkSizes - true if plugin should recalculate sizes and breakpoints.
	     * @param {Number} scroll - current scroll position passed from scroll event cb function. If not passed, defaults to `window.pageYOffset`.
	     */

	  }, {
	    key: "_calc",
	    value: function _calc(checkSizes, scroll) {
	      if (checkSizes) {
	        this._setSizes();
	      }

	      if (!this.canStick) {
	        if (this.isStuck) {
	          this._removeSticky(true);
	        }

	        return false;
	      }

	      if (!scroll) {
	        scroll = window.pageYOffset;
	      }

	      if (scroll >= this.topPoint) {
	        if (scroll <= this.bottomPoint) {
	          if (!this.isStuck) {
	            this._setSticky();
	          }
	        } else {
	          if (this.isStuck) {
	            this._removeSticky(false);
	          }
	        }
	      } else {
	        if (this.isStuck) {
	          this._removeSticky(true);
	        }
	      }
	    }
	    /**
	     * Causes the $element to become stuck.
	     * Adds `position: fixed;`, and helper classes.
	     * @fires Sticky#stuckto
	     * @function
	     * @private
	     */

	  }, {
	    key: "_setSticky",
	    value: function _setSticky() {
	      var _this = this,
	          stickTo = this.options.stickTo,
	          mrgn = stickTo === 'top' ? 'marginTop' : 'marginBottom',
	          notStuckTo = stickTo === 'top' ? 'bottom' : 'top',
	          css = {};

	      css[mrgn] = "".concat(this.options[mrgn], "em");
	      css[stickTo] = 0;
	      css[notStuckTo] = 'auto';
	      this.isStuck = true;
	      this.$element.removeClass("is-anchored is-at-".concat(notStuckTo)).addClass("is-stuck is-at-".concat(stickTo)).css(css)
	      /**
	       * Fires when the $element has become `position: fixed;`
	       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.stuckto:top`
	       * @event Sticky#stuckto
	       */
	      .trigger("sticky.zf.stuckto:".concat(stickTo));
	      this.$element.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function () {
	        _this._setSizes();
	      });
	    }
	    /**
	     * Causes the $element to become unstuck.
	     * Removes `position: fixed;`, and helper classes.
	     * Adds other helper classes.
	     * @param {Boolean} isTop - tells the function if the $element should anchor to the top or bottom of its $anchor element.
	     * @fires Sticky#unstuckfrom
	     * @private
	     */

	  }, {
	    key: "_removeSticky",
	    value: function _removeSticky(isTop) {
	      var stickTo = this.options.stickTo,
	          stickToTop = stickTo === 'top',
	          css = {},
	          anchorPt = (this.points ? this.points[1] - this.points[0] : this.anchorHeight) - this.elemHeight,
	          mrgn = stickToTop ? 'marginTop' : 'marginBottom',
	          topOrBottom = isTop ? 'top' : 'bottom';
	      css[mrgn] = 0;
	      css['bottom'] = 'auto';

	      if (isTop) {
	        css['top'] = 0;
	      } else {
	        css['top'] = anchorPt;
	      }

	      this.isStuck = false;
	      this.$element.removeClass("is-stuck is-at-".concat(stickTo)).addClass("is-anchored is-at-".concat(topOrBottom)).css(css)
	      /**
	       * Fires when the $element has become anchored.
	       * Namespaced to `top` or `bottom`, e.g. `sticky.zf.unstuckfrom:bottom`
	       * @event Sticky#unstuckfrom
	       */
	      .trigger("sticky.zf.unstuckfrom:".concat(topOrBottom));
	    }
	    /**
	     * Sets the $element and $container sizes for plugin.
	     * Calls `_setBreakPoints`.
	     * @param {Function} cb - optional callback function to fire on completion of `_setBreakPoints`.
	     * @private
	     */

	  }, {
	    key: "_setSizes",
	    value: function _setSizes(cb) {
	      this.canStick = MediaQuery.is(this.options.stickyOn);

	      if (!this.canStick) {
	        if (cb && typeof cb === 'function') {
	          cb();
	        }
	      }

	      var newElemWidth = this.$container[0].getBoundingClientRect().width,
	          comp = window.getComputedStyle(this.$container[0]),
	          pdngl = parseInt(comp['padding-left'], 10),
	          pdngr = parseInt(comp['padding-right'], 10);

	      if (this.$anchor && this.$anchor.length) {
	        this.anchorHeight = this.$anchor[0].getBoundingClientRect().height;
	      } else {
	        this._parsePoints();
	      }

	      this.$element.css({
	        'max-width': "".concat(newElemWidth - pdngl - pdngr, "px")
	      });
	      var newContainerHeight = this.$element[0].getBoundingClientRect().height || this.containerHeight;

	      if (this.$element.css("display") == "none") {
	        newContainerHeight = 0;
	      }

	      this.containerHeight = newContainerHeight;
	      this.$container.css({
	        height: newContainerHeight
	      });
	      this.elemHeight = newContainerHeight;

	      if (!this.isStuck) {
	        if (this.$element.hasClass('is-at-bottom')) {
	          var anchorPt = (this.points ? this.points[1] - this.$container.offset().top : this.anchorHeight) - this.elemHeight;
	          this.$element.css('top', anchorPt);
	        }
	      }

	      this._setBreakPoints(newContainerHeight, function () {
	        if (cb && typeof cb === 'function') {
	          cb();
	        }
	      });
	    }
	    /**
	     * Sets the upper and lower breakpoints for the element to become sticky/unsticky.
	     * @param {Number} elemHeight - px value for sticky.$element height, calculated by `_setSizes`.
	     * @param {Function} cb - optional callback function to be called on completion.
	     * @private
	     */

	  }, {
	    key: "_setBreakPoints",
	    value: function _setBreakPoints(elemHeight, cb) {
	      if (!this.canStick) {
	        if (cb && typeof cb === 'function') {
	          cb();
	        } else {
	          return false;
	        }
	      }

	      var mTop = emCalc(this.options.marginTop),
	          mBtm = emCalc(this.options.marginBottom),
	          topPoint = this.points ? this.points[0] : this.$anchor.offset().top,
	          bottomPoint = this.points ? this.points[1] : topPoint + this.anchorHeight,
	          // topPoint = this.$anchor.offset().top || this.points[0],
	      // bottomPoint = topPoint + this.anchorHeight || this.points[1],
	      winHeight = window.innerHeight;

	      if (this.options.stickTo === 'top') {
	        topPoint -= mTop;
	        bottomPoint -= elemHeight + mTop;
	      } else if (this.options.stickTo === 'bottom') {
	        topPoint -= winHeight - (elemHeight + mBtm);
	        bottomPoint -= winHeight - mBtm;
	      }

	      this.topPoint = topPoint;
	      this.bottomPoint = bottomPoint;

	      if (cb && typeof cb === 'function') {
	        cb();
	      }
	    }
	    /**
	     * Destroys the current sticky element.
	     * Resets the element to the top position first.
	     * Removes event listeners, JS-added css properties and classes, and unwraps the $element if the JS added the $container.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this._removeSticky(true);

	      this.$element.removeClass("".concat(this.options.stickyClass, " is-anchored is-at-top")).css({
	        height: '',
	        top: '',
	        bottom: '',
	        'max-width': ''
	      }).off('resizeme.zf.trigger').off('mutateme.zf.trigger');

	      if (this.$anchor && this.$anchor.length) {
	        this.$anchor.off('change.zf.sticky');
	      }

	      if (this.scrollListener) jquery(window).off(this.scrollListener);
	      if (this.onLoadListener) jquery(window).off(this.onLoadListener);

	      if (this.wasWrapped) {
	        this.$element.unwrap();
	      } else {
	        this.$container.removeClass(this.options.containerClass).css({
	          height: ''
	        });
	      }
	    }
	  }]);

	  return Sticky;
	}(Plugin);

	Sticky.defaults = {
	  /**
	   * Customizable container template. Add your own classes for styling and sizing.
	   * @option
	   * @type {string}
	   * @default '&lt;div data-sticky-container&gt;&lt;/div&gt;'
	   */
	  container: '<div data-sticky-container></div>',

	  /**
	   * Location in the view the element sticks to. Can be `'top'` or `'bottom'`.
	   * @option
	   * @type {string}
	   * @default 'top'
	   */
	  stickTo: 'top',

	  /**
	   * If anchored to a single element, the id of that element.
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  anchor: '',

	  /**
	   * If using more than one element as anchor points, the id of the top anchor.
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  topAnchor: '',

	  /**
	   * If using more than one element as anchor points, the id of the bottom anchor.
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  btmAnchor: '',

	  /**
	   * Margin, in `em`'s to apply to the top of the element when it becomes sticky.
	   * @option
	   * @type {number}
	   * @default 1
	   */
	  marginTop: 1,

	  /**
	   * Margin, in `em`'s to apply to the bottom of the element when it becomes sticky.
	   * @option
	   * @type {number}
	   * @default 1
	   */
	  marginBottom: 1,

	  /**
	   * Breakpoint string that is the minimum screen size an element should become sticky.
	   * @option
	   * @type {string}
	   * @default 'medium'
	   */
	  stickyOn: 'medium',

	  /**
	   * Class applied to sticky element, and removed on destruction. Foundation defaults to `sticky`.
	   * @option
	   * @type {string}
	   * @default 'sticky'
	   */
	  stickyClass: 'sticky',

	  /**
	   * Class applied to sticky container. Foundation defaults to `sticky-container`.
	   * @option
	   * @type {string}
	   * @default 'sticky-container'
	   */
	  containerClass: 'sticky-container',

	  /**
	   * Number of scroll events between the plugin's recalculating sticky points. Setting it to `0` will cause it to recalc every scroll event, setting it to `-1` will prevent recalc on scroll.
	   * @option
	   * @type {number}
	   * @default -1
	   */
	  checkEvery: -1
	};
	/**
	 * Helper function to calculate em values
	 * @param Number {em} - number of em's to calculate into pixels
	 */

	function emCalc(em) {
	  return parseInt(window.getComputedStyle(document.body, null).fontSize, 10) * em;
	}

	/**
	 * Tabs module.
	 * @module foundation.tabs
	 * @requires foundation.util.keyboard
	 * @requires foundation.util.imageLoader if tabs contain images
	 */

	var Tabs =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Tabs, _Plugin);

	  function Tabs() {
	    _classCallCheck(this, Tabs);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Tabs).apply(this, arguments));
	  }

	  _createClass(Tabs, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of tabs.
	     * @class
	     * @name Tabs
	     * @fires Tabs#init
	     * @param {jQuery} element - jQuery object to make into tabs.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery.extend({}, Tabs.defaults, this.$element.data(), options);
	      this.className = 'Tabs'; // ie9 back compat

	      this._init();

	      Keyboard.register('Tabs', {
	        'ENTER': 'open',
	        'SPACE': 'open',
	        'ARROW_RIGHT': 'next',
	        'ARROW_UP': 'previous',
	        'ARROW_DOWN': 'next',
	        'ARROW_LEFT': 'previous' // 'TAB': 'next',
	        // 'SHIFT_TAB': 'previous'

	      });
	    }
	    /**
	     * Initializes the tabs by showing and focusing (if autoFocus=true) the preset active tab.
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      var _this2 = this;

	      var _this = this;

	      this._isInitializing = true;
	      this.$element.attr({
	        'role': 'tablist'
	      });
	      this.$tabTitles = this.$element.find(".".concat(this.options.linkClass));
	      this.$tabContent = jquery("[data-tabs-content=\"".concat(this.$element[0].id, "\"]"));
	      this.$tabTitles.each(function () {
	        var $elem = jquery(this),
	            $link = $elem.find('a'),
	            isActive = $elem.hasClass("".concat(_this.options.linkActiveClass)),
	            hash = $link.attr('data-tabs-target') || $link[0].hash.slice(1),
	            linkId = $link[0].id ? $link[0].id : "".concat(hash, "-label"),
	            $tabContent = jquery("#".concat(hash));
	        $elem.attr({
	          'role': 'presentation'
	        });
	        $link.attr({
	          'role': 'tab',
	          'aria-controls': hash,
	          'aria-selected': isActive,
	          'id': linkId,
	          'tabindex': isActive ? '0' : '-1'
	        });
	        $tabContent.attr({
	          'role': 'tabpanel',
	          'aria-labelledby': linkId
	        }); // Save up the initial hash to return to it later when going back in history

	        if (isActive) {
	          _this._initialAnchor = "#".concat(hash);
	        }

	        if (!isActive) {
	          $tabContent.attr('aria-hidden', 'true');
	        }

	        if (isActive && _this.options.autoFocus) {
	          _this.onLoadListener = onLoad(jquery(window), function () {
	            jquery('html, body').animate({
	              scrollTop: $elem.offset().top
	            }, _this.options.deepLinkSmudgeDelay, function () {
	              $link.focus();
	            });
	          });
	        }
	      });

	      if (this.options.matchHeight) {
	        var $images = this.$tabContent.find('img');

	        if ($images.length) {
	          onImagesLoaded($images, this._setHeight.bind(this));
	        } else {
	          this._setHeight();
	        }
	      } // Current context-bound function to open tabs on page load or history hashchange


	      this._checkDeepLink = function () {
	        var anchor = window.location.hash;

	        if (!anchor.length) {
	          // If we are still initializing and there is no anchor, then there is nothing to do
	          if (_this2._isInitializing) return; // Otherwise, move to the initial anchor

	          if (_this2._initialAnchor) anchor = _this2._initialAnchor;
	        }

	        var $anchor = anchor && jquery(anchor);

	        var $link = anchor && _this2.$element.find('[href$="' + anchor + '"]'); // Whether the anchor element that has been found is part of this element


	        var isOwnAnchor = !!($anchor.length && $link.length); // If there is an anchor for the hash, select it

	        if ($anchor && $anchor.length && $link && $link.length) {
	          _this2.selectTab($anchor, true);
	        } // Otherwise, collapse everything
	        else {
	            _this2._collapse();
	          }

	        if (isOwnAnchor) {
	          // Roll up a little to show the titles
	          if (_this2.options.deepLinkSmudge) {
	            var offset = _this2.$element.offset();

	            jquery('html, body').animate({
	              scrollTop: offset.top
	            }, _this2.options.deepLinkSmudgeDelay);
	          }
	          /**
	           * Fires when the plugin has deeplinked at pageload
	           * @event Tabs#deeplink
	           */


	          _this2.$element.trigger('deeplink.zf.tabs', [$link, $anchor]);
	        }
	      }; //use browser to open a tab, if it exists in this tabset


	      if (this.options.deepLink) {
	        this._checkDeepLink();
	      }

	      this._events();

	      this._isInitializing = false;
	    }
	    /**
	     * Adds event handlers for items within the tabs.
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      this._addKeyHandler();

	      this._addClickHandler();

	      this._setHeightMqHandler = null;

	      if (this.options.matchHeight) {
	        this._setHeightMqHandler = this._setHeight.bind(this);
	        jquery(window).on('changed.zf.mediaquery', this._setHeightMqHandler);
	      }

	      if (this.options.deepLink) {
	        jquery(window).on('hashchange', this._checkDeepLink);
	      }
	    }
	    /**
	     * Adds click handlers for items within the tabs.
	     * @private
	     */

	  }, {
	    key: "_addClickHandler",
	    value: function _addClickHandler() {
	      var _this = this;

	      this.$element.off('click.zf.tabs').on('click.zf.tabs', ".".concat(this.options.linkClass), function (e) {
	        e.preventDefault();
	        e.stopPropagation();

	        _this._handleTabChange(jquery(this));
	      });
	    }
	    /**
	     * Adds keyboard event handlers for items within the tabs.
	     * @private
	     */

	  }, {
	    key: "_addKeyHandler",
	    value: function _addKeyHandler() {
	      var _this = this;

	      this.$tabTitles.off('keydown.zf.tabs').on('keydown.zf.tabs', function (e) {
	        if (e.which === 9) return;
	        var $element = jquery(this),
	            $elements = $element.parent('ul').children('li'),
	            $prevElement,
	            $nextElement;
	        $elements.each(function (i) {
	          if (jquery(this).is($element)) {
	            if (_this.options.wrapOnKeys) {
	              $prevElement = i === 0 ? $elements.last() : $elements.eq(i - 1);
	              $nextElement = i === $elements.length - 1 ? $elements.first() : $elements.eq(i + 1);
	            } else {
	              $prevElement = $elements.eq(Math.max(0, i - 1));
	              $nextElement = $elements.eq(Math.min(i + 1, $elements.length - 1));
	            }

	            return;
	          }
	        }); // handle keyboard event with keyboard util

	        Keyboard.handleKey(e, 'Tabs', {
	          open: function open() {
	            $element.find('[role="tab"]').focus();

	            _this._handleTabChange($element);
	          },
	          previous: function previous() {
	            $prevElement.find('[role="tab"]').focus();

	            _this._handleTabChange($prevElement);
	          },
	          next: function next() {
	            $nextElement.find('[role="tab"]').focus();

	            _this._handleTabChange($nextElement);
	          },
	          handled: function handled() {
	            e.stopPropagation();
	            e.preventDefault();
	          }
	        });
	      });
	    }
	    /**
	     * Opens the tab `$targetContent` defined by `$target`. Collapses active tab.
	     * @param {jQuery} $target - Tab to open.
	     * @param {boolean} historyHandled - browser has already handled a history update
	     * @fires Tabs#change
	     * @function
	     */

	  }, {
	    key: "_handleTabChange",
	    value: function _handleTabChange($target, historyHandled) {
	      // With `activeCollapse`, if the target is the active Tab, collapse it.
	      if ($target.hasClass("".concat(this.options.linkActiveClass))) {
	        if (this.options.activeCollapse) {
	          this._collapse();
	        }

	        return;
	      }

	      var $oldTab = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass)),
	          $tabLink = $target.find('[role="tab"]'),
	          target = $tabLink.attr('data-tabs-target'),
	          anchor = target && target.length ? "#".concat(target) : $tabLink[0].hash,
	          $targetContent = this.$tabContent.find(anchor); //close old tab

	      this._collapseTab($oldTab); //open new tab


	      this._openTab($target); //either replace or update browser history


	      if (this.options.deepLink && !historyHandled) {
	        if (this.options.updateHistory) {
	          history.pushState({}, '', anchor);
	        } else {
	          history.replaceState({}, '', anchor);
	        }
	      }
	      /**
	       * Fires when the plugin has successfully changed tabs.
	       * @event Tabs#change
	       */


	      this.$element.trigger('change.zf.tabs', [$target, $targetContent]); //fire to children a mutation event

	      $targetContent.find("[data-mutate]").trigger("mutateme.zf.trigger");
	    }
	    /**
	     * Opens the tab `$targetContent` defined by `$target`.
	     * @param {jQuery} $target - Tab to open.
	     * @function
	     */

	  }, {
	    key: "_openTab",
	    value: function _openTab($target) {
	      var $tabLink = $target.find('[role="tab"]'),
	          hash = $tabLink.attr('data-tabs-target') || $tabLink[0].hash.slice(1),
	          $targetContent = this.$tabContent.find("#".concat(hash));
	      $target.addClass("".concat(this.options.linkActiveClass));
	      $tabLink.attr({
	        'aria-selected': 'true',
	        'tabindex': '0'
	      });
	      $targetContent.addClass("".concat(this.options.panelActiveClass)).removeAttr('aria-hidden');
	    }
	    /**
	     * Collapses `$targetContent` defined by `$target`.
	     * @param {jQuery} $target - Tab to collapse.
	     * @function
	     */

	  }, {
	    key: "_collapseTab",
	    value: function _collapseTab($target) {
	      var $target_anchor = $target.removeClass("".concat(this.options.linkActiveClass)).find('[role="tab"]').attr({
	        'aria-selected': 'false',
	        'tabindex': -1
	      });
	      jquery("#".concat($target_anchor.attr('aria-controls'))).removeClass("".concat(this.options.panelActiveClass)).attr({
	        'aria-hidden': 'true'
	      });
	    }
	    /**
	     * Collapses the active Tab.
	     * @fires Tabs#collapse
	     * @function
	     */

	  }, {
	    key: "_collapse",
	    value: function _collapse() {
	      var $activeTab = this.$element.find(".".concat(this.options.linkClass, ".").concat(this.options.linkActiveClass));

	      if ($activeTab.length) {
	        this._collapseTab($activeTab);
	        /**
	        * Fires when the plugin has successfully collapsed tabs.
	        * @event Tabs#collapse
	        */


	        this.$element.trigger('collapse.zf.tabs', [$activeTab]);
	      }
	    }
	    /**
	     * Public method for selecting a content pane to display.
	     * @param {jQuery | String} elem - jQuery object or string of the id of the pane to display.
	     * @param {boolean} historyHandled - browser has already handled a history update
	     * @function
	     */

	  }, {
	    key: "selectTab",
	    value: function selectTab(elem, historyHandled) {
	      var idStr;

	      if (_typeof(elem) === 'object') {
	        idStr = elem[0].id;
	      } else {
	        idStr = elem;
	      }

	      if (idStr.indexOf('#') < 0) {
	        idStr = "#".concat(idStr);
	      }

	      var $target = this.$tabTitles.has("[href$=\"".concat(idStr, "\"]"));

	      this._handleTabChange($target, historyHandled);
	    }
	  }, {
	    key: "_setHeight",

	    /**
	     * Sets the height of each panel to the height of the tallest panel.
	     * If enabled in options, gets called on media query change.
	     * If loading content via external source, can be called directly or with _reflow.
	     * If enabled with `data-match-height="true"`, tabs sets to equal height
	     * @function
	     * @private
	     */
	    value: function _setHeight() {
	      var max = 0,
	          _this = this; // Lock down the `this` value for the root tabs object


	      this.$tabContent.find(".".concat(this.options.panelClass)).css('height', '').each(function () {
	        var panel = jquery(this),
	            isActive = panel.hasClass("".concat(_this.options.panelActiveClass)); // get the options from the parent instead of trying to get them from the child

	        if (!isActive) {
	          panel.css({
	            'visibility': 'hidden',
	            'display': 'block'
	          });
	        }

	        var temp = this.getBoundingClientRect().height;

	        if (!isActive) {
	          panel.css({
	            'visibility': '',
	            'display': ''
	          });
	        }

	        max = temp > max ? temp : max;
	      }).css('height', "".concat(max, "px"));
	    }
	    /**
	     * Destroys an instance of tabs.
	     * @fires Tabs#destroyed
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$element.find(".".concat(this.options.linkClass)).off('.zf.tabs').hide().end().find(".".concat(this.options.panelClass)).hide();

	      if (this.options.matchHeight) {
	        if (this._setHeightMqHandler != null) {
	          jquery(window).off('changed.zf.mediaquery', this._setHeightMqHandler);
	        }
	      }

	      if (this.options.deepLink) {
	        jquery(window).off('hashchange', this._checkDeepLink);
	      }

	      if (this.onLoadListener) {
	        jquery(window).off(this.onLoadListener);
	      }
	    }
	  }]);

	  return Tabs;
	}(Plugin);

	Tabs.defaults = {
	  /**
	   * Link the location hash to the active pane.
	   * Set the location hash when the active pane changes, and open the corresponding pane when the location changes.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  deepLink: false,

	  /**
	   * If `deepLink` is enabled, adjust the deep link scroll to make sure the top of the tab panel is visible
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  deepLinkSmudge: false,

	  /**
	   * If `deepLinkSmudge` is enabled, animation time (ms) for the deep link adjustment
	   * @option
	   * @type {number}
	   * @default 300
	   */
	  deepLinkSmudgeDelay: 300,

	  /**
	   * If `deepLink` is enabled, update the browser history with the open tab
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  updateHistory: false,

	  /**
	   * Allows the window to scroll to content of active pane on load.
	   * Not recommended if more than one tab panel per page.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  autoFocus: false,

	  /**
	   * Allows keyboard input to 'wrap' around the tab links.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  wrapOnKeys: true,

	  /**
	   * Allows the tab content panes to match heights if set to true.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  matchHeight: false,

	  /**
	   * Allows active tabs to collapse when clicked.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  activeCollapse: false,

	  /**
	   * Class applied to `li`'s in tab link list.
	   * @option
	   * @type {string}
	   * @default 'tabs-title'
	   */
	  linkClass: 'tabs-title',

	  /**
	   * Class applied to the active `li` in tab link list.
	   * @option
	   * @type {string}
	   * @default 'is-active'
	   */
	  linkActiveClass: 'is-active',

	  /**
	   * Class applied to the content containers.
	   * @option
	   * @type {string}
	   * @default 'tabs-panel'
	   */
	  panelClass: 'tabs-panel',

	  /**
	   * Class applied to the active content container.
	   * @option
	   * @type {string}
	   * @default 'is-active'
	   */
	  panelActiveClass: 'is-active'
	};

	/**
	 * Toggler module.
	 * @module foundation.toggler
	 * @requires foundation.util.motion
	 * @requires foundation.util.triggers
	 */

	var Toggler =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(Toggler, _Plugin);

	  function Toggler() {
	    _classCallCheck(this, Toggler);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Toggler).apply(this, arguments));
	  }

	  _createClass(Toggler, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of Toggler.
	     * @class
	     * @name Toggler
	     * @fires Toggler#init
	     * @param {Object} element - jQuery object to add the trigger to.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery.extend({}, Toggler.defaults, element.data(), options);
	      this.className = '';
	      this.className = 'Toggler'; // ie9 back compat
	      // Triggers init is idempotent, just need to make sure it is initialized

	      Triggers.init(jquery);

	      this._init();

	      this._events();
	    }
	    /**
	     * Initializes the Toggler plugin by parsing the toggle class from data-toggler, or animation classes from data-animate.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      var input; // Parse animation classes if they were set

	      if (this.options.animate) {
	        input = this.options.animate.split(' ');
	        this.animationIn = input[0];
	        this.animationOut = input[1] || null;
	      } // Otherwise, parse toggle class
	      else {
	          input = this.$element.data('toggler'); // Allow for a . at the beginning of the string

	          this.className = input[0] === '.' ? input.slice(1) : input;
	        } // Add ARIA attributes to triggers:


	      var id = this.$element[0].id,
	          $triggers = jquery("[data-open~=\"".concat(id, "\"], [data-close~=\"").concat(id, "\"], [data-toggle~=\"").concat(id, "\"]")); // - aria-expanded: according to the element visibility.

	      $triggers.attr('aria-expanded', !this.$element.is(':hidden')); // - aria-controls: adding the element id to it if not already in it.

	      $triggers.each(function (index, trigger) {
	        var $trigger = jquery(trigger);
	        var controls = $trigger.attr('aria-controls') || '';
	        var containsId = new RegExp("\\b".concat(RegExpEscape(id), "\\b")).test(controls);
	        if (!containsId) $trigger.attr('aria-controls', controls ? "".concat(controls, " ").concat(id) : id);
	      });
	    }
	    /**
	     * Initializes events for the toggle trigger.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      this.$element.off('toggle.zf.trigger').on('toggle.zf.trigger', this.toggle.bind(this));
	    }
	    /**
	     * Toggles the target class on the target element. An event is fired from the original trigger depending on if the resultant state was "on" or "off".
	     * @function
	     * @fires Toggler#on
	     * @fires Toggler#off
	     */

	  }, {
	    key: "toggle",
	    value: function toggle() {
	      this[this.options.animate ? '_toggleAnimate' : '_toggleClass']();
	    }
	  }, {
	    key: "_toggleClass",
	    value: function _toggleClass() {
	      this.$element.toggleClass(this.className);
	      var isOn = this.$element.hasClass(this.className);

	      if (isOn) {
	        /**
	         * Fires if the target element has the class after a toggle.
	         * @event Toggler#on
	         */
	        this.$element.trigger('on.zf.toggler');
	      } else {
	        /**
	         * Fires if the target element does not have the class after a toggle.
	         * @event Toggler#off
	         */
	        this.$element.trigger('off.zf.toggler');
	      }

	      this._updateARIA(isOn);

	      this.$element.find('[data-mutate]').trigger('mutateme.zf.trigger');
	    }
	  }, {
	    key: "_toggleAnimate",
	    value: function _toggleAnimate() {
	      var _this = this;

	      if (this.$element.is(':hidden')) {
	        Motion.animateIn(this.$element, this.animationIn, function () {
	          _this._updateARIA(true);

	          this.trigger('on.zf.toggler');
	          this.find('[data-mutate]').trigger('mutateme.zf.trigger');
	        });
	      } else {
	        Motion.animateOut(this.$element, this.animationOut, function () {
	          _this._updateARIA(false);

	          this.trigger('off.zf.toggler');
	          this.find('[data-mutate]').trigger('mutateme.zf.trigger');
	        });
	      }
	    }
	  }, {
	    key: "_updateARIA",
	    value: function _updateARIA(isOn) {
	      var id = this.$element[0].id;
	      jquery("[data-open=\"".concat(id, "\"], [data-close=\"").concat(id, "\"], [data-toggle=\"").concat(id, "\"]")).attr({
	        'aria-expanded': isOn ? true : false
	      });
	    }
	    /**
	     * Destroys the instance of Toggler on the element.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$element.off('.zf.toggler');
	    }
	  }]);

	  return Toggler;
	}(Plugin);

	Toggler.defaults = {
	  /**
	   * Tells the plugin if the element should animated when toggled.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  animate: false
	};

	/**
	 * Tooltip module.
	 * @module foundation.tooltip
	 * @requires foundation.util.box
	 * @requires foundation.util.mediaQuery
	 * @requires foundation.util.triggers
	 */

	var Tooltip =
	/*#__PURE__*/
	function (_Positionable) {
	  _inherits(Tooltip, _Positionable);

	  function Tooltip() {
	    _classCallCheck(this, Tooltip);

	    return _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).apply(this, arguments));
	  }

	  _createClass(Tooltip, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of a Tooltip.
	     * @class
	     * @name Tooltip
	     * @fires Tooltip#init
	     * @param {jQuery} element - jQuery object to attach a tooltip to.
	     * @param {Object} options - object to extend the default configuration.
	     */
	    value: function _setup(element, options) {
	      this.$element = element;
	      this.options = jquery.extend({}, Tooltip.defaults, this.$element.data(), options);
	      this.className = 'Tooltip'; // ie9 back compat

	      this.isActive = false;
	      this.isClick = false; // Triggers init is idempotent, just need to make sure it is initialized

	      Triggers.init(jquery);

	      this._init();
	    }
	    /**
	     * Initializes the tooltip by setting the creating the tip element, adding it's text, setting private variables and setting attributes on the anchor.
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      MediaQuery._init();

	      var elemId = this.$element.attr('aria-describedby') || GetYoDigits(6, 'tooltip');
	      this.options.tipText = this.options.tipText || this.$element.attr('title');
	      this.template = this.options.template ? jquery(this.options.template) : this._buildTemplate(elemId);

	      if (this.options.allowHtml) {
	        this.template.appendTo(document.body).html(this.options.tipText).hide();
	      } else {
	        this.template.appendTo(document.body).text(this.options.tipText).hide();
	      }

	      this.$element.attr({
	        'title': '',
	        'aria-describedby': elemId,
	        'data-yeti-box': elemId,
	        'data-toggle': elemId,
	        'data-resize': elemId
	      }).addClass(this.options.triggerClass);

	      _get(_getPrototypeOf(Tooltip.prototype), "_init", this).call(this);

	      this._events();
	    }
	  }, {
	    key: "_getDefaultPosition",
	    value: function _getDefaultPosition() {
	      // handle legacy classnames
	      var position = this.$element[0].className.match(/\b(top|left|right|bottom)\b/g);
	      return position ? position[0] : 'top';
	    }
	  }, {
	    key: "_getDefaultAlignment",
	    value: function _getDefaultAlignment() {
	      return 'center';
	    }
	  }, {
	    key: "_getHOffset",
	    value: function _getHOffset() {
	      if (this.position === 'left' || this.position === 'right') {
	        return this.options.hOffset + this.options.tooltipWidth;
	      } else {
	        return this.options.hOffset;
	      }
	    }
	  }, {
	    key: "_getVOffset",
	    value: function _getVOffset() {
	      if (this.position === 'top' || this.position === 'bottom') {
	        return this.options.vOffset + this.options.tooltipHeight;
	      } else {
	        return this.options.vOffset;
	      }
	    }
	    /**
	     * builds the tooltip element, adds attributes, and returns the template.
	     * @private
	     */

	  }, {
	    key: "_buildTemplate",
	    value: function _buildTemplate(id) {
	      var templateClasses = "".concat(this.options.tooltipClass, " ").concat(this.options.templateClasses).trim();
	      var $template = jquery('<div></div>').addClass(templateClasses).attr({
	        'role': 'tooltip',
	        'aria-hidden': true,
	        'data-is-active': false,
	        'data-is-focus': false,
	        'id': id
	      });
	      return $template;
	    }
	    /**
	     * sets the position class of an element and recursively calls itself until there are no more possible positions to attempt, or the tooltip element is no longer colliding.
	     * if the tooltip is larger than the screen width, default to full width - any user selected margin
	     * @private
	     */

	  }, {
	    key: "_setPosition",
	    value: function _setPosition() {
	      _get(_getPrototypeOf(Tooltip.prototype), "_setPosition", this).call(this, this.$element, this.template);
	    }
	    /**
	     * reveals the tooltip, and fires an event to close any other open tooltips on the page
	     * @fires Tooltip#closeme
	     * @fires Tooltip#show
	     * @function
	     */

	  }, {
	    key: "show",
	    value: function show() {
	      if (this.options.showOn !== 'all' && !MediaQuery.is(this.options.showOn)) {
	        // console.error('The screen is too small to display this tooltip');
	        return false;
	      }

	      var _this = this;

	      this.template.css('visibility', 'hidden').show();

	      this._setPosition();

	      this.template.removeClass('top bottom left right').addClass(this.position);
	      this.template.removeClass('align-top align-bottom align-left align-right align-center').addClass('align-' + this.alignment);
	      /**
	       * Fires to close all other open tooltips on the page
	       * @event Closeme#tooltip
	       */

	      this.$element.trigger('closeme.zf.tooltip', this.template.attr('id'));
	      this.template.attr({
	        'data-is-active': true,
	        'aria-hidden': false
	      });
	      _this.isActive = true; // console.log(this.template);

	      this.template.stop().hide().css('visibility', '').fadeIn(this.options.fadeInDuration, function () {//maybe do stuff?
	      });
	      /**
	       * Fires when the tooltip is shown
	       * @event Tooltip#show
	       */

	      this.$element.trigger('show.zf.tooltip');
	    }
	    /**
	     * Hides the current tooltip, and resets the positioning class if it was changed due to collision
	     * @fires Tooltip#hide
	     * @function
	     */

	  }, {
	    key: "hide",
	    value: function hide() {
	      // console.log('hiding', this.$element.data('yeti-box'));
	      var _this = this;

	      this.template.stop().attr({
	        'aria-hidden': true,
	        'data-is-active': false
	      }).fadeOut(this.options.fadeOutDuration, function () {
	        _this.isActive = false;
	        _this.isClick = false;
	      });
	      /**
	       * fires when the tooltip is hidden
	       * @event Tooltip#hide
	       */

	      this.$element.trigger('hide.zf.tooltip');
	    }
	    /**
	     * adds event listeners for the tooltip and its anchor
	     * TODO combine some of the listeners like focus and mouseenter, etc.
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      var _this = this;

	      var $template = this.template;
	      var isFocus = false;

	      if (!this.options.disableHover) {
	        this.$element.on('mouseenter.zf.tooltip', function (e) {
	          if (!_this.isActive) {
	            _this.timeout = setTimeout(function () {
	              _this.show();
	            }, _this.options.hoverDelay);
	          }
	        }).on('mouseleave.zf.tooltip', ignoreMousedisappear(function (e) {
	          clearTimeout(_this.timeout);

	          if (!isFocus || _this.isClick && !_this.options.clickOpen) {
	            _this.hide();
	          }
	        }));
	      }

	      if (this.options.clickOpen) {
	        this.$element.on('mousedown.zf.tooltip', function (e) {
	          e.stopImmediatePropagation();

	          if (_this.isClick) ; else {
	            _this.isClick = true;

	            if ((_this.options.disableHover || !_this.$element.attr('tabindex')) && !_this.isActive) {
	              _this.show();
	            }
	          }
	        });
	      } else {
	        this.$element.on('mousedown.zf.tooltip', function (e) {
	          e.stopImmediatePropagation();
	          _this.isClick = true;
	        });
	      }

	      if (!this.options.disableForTouch) {
	        this.$element.on('tap.zf.tooltip touchend.zf.tooltip', function (e) {
	          _this.isActive ? _this.hide() : _this.show();
	        });
	      }

	      this.$element.on({
	        // 'toggle.zf.trigger': this.toggle.bind(this),
	        // 'close.zf.trigger': this.hide.bind(this)
	        'close.zf.trigger': this.hide.bind(this)
	      });
	      this.$element.on('focus.zf.tooltip', function (e) {
	        isFocus = true;

	        if (_this.isClick) {
	          // If we're not showing open on clicks, we need to pretend a click-launched focus isn't
	          // a real focus, otherwise on hover and come back we get bad behavior
	          if (!_this.options.clickOpen) {
	            isFocus = false;
	          }

	          return false;
	        } else {
	          _this.show();
	        }
	      }).on('focusout.zf.tooltip', function (e) {
	        isFocus = false;
	        _this.isClick = false;

	        _this.hide();
	      }).on('resizeme.zf.trigger', function () {
	        if (_this.isActive) {
	          _this._setPosition();
	        }
	      });
	    }
	    /**
	     * adds a toggle method, in addition to the static show() & hide() functions
	     * @function
	     */

	  }, {
	    key: "toggle",
	    value: function toggle() {
	      if (this.isActive) {
	        this.hide();
	      } else {
	        this.show();
	      }
	    }
	    /**
	     * Destroys an instance of tooltip, removes template element from the view.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      this.$element.attr('title', this.template.text()).off('.zf.trigger .zf.tooltip').removeClass(this.options.triggerClass).removeClass('top right left bottom').removeAttr('aria-describedby data-disable-hover data-resize data-toggle data-tooltip data-yeti-box');
	      this.template.remove();
	    }
	  }]);

	  return Tooltip;
	}(Positionable);

	Tooltip.defaults = {
	  disableForTouch: false,

	  /**
	   * Time, in ms, before a tooltip should open on hover.
	   * @option
	   * @type {number}
	   * @default 200
	   */
	  hoverDelay: 200,

	  /**
	   * Time, in ms, a tooltip should take to fade into view.
	   * @option
	   * @type {number}
	   * @default 150
	   */
	  fadeInDuration: 150,

	  /**
	   * Time, in ms, a tooltip should take to fade out of view.
	   * @option
	   * @type {number}
	   * @default 150
	   */
	  fadeOutDuration: 150,

	  /**
	   * Disables hover events from opening the tooltip if set to true
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  disableHover: false,

	  /**
	   * Optional addtional classes to apply to the tooltip template on init.
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  templateClasses: '',

	  /**
	   * Non-optional class added to tooltip templates. Foundation default is 'tooltip'.
	   * @option
	   * @type {string}
	   * @default 'tooltip'
	   */
	  tooltipClass: 'tooltip',

	  /**
	   * Class applied to the tooltip anchor element.
	   * @option
	   * @type {string}
	   * @default 'has-tip'
	   */
	  triggerClass: 'has-tip',

	  /**
	   * Minimum breakpoint size at which to open the tooltip.
	   * @option
	   * @type {string}
	   * @default 'small'
	   */
	  showOn: 'small',

	  /**
	   * Custom template to be used to generate markup for tooltip.
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  template: '',

	  /**
	   * Text displayed in the tooltip template on open.
	   * @option
	   * @type {string}
	   * @default ''
	   */
	  tipText: '',
	  touchCloseText: 'Tap to close.',

	  /**
	   * Allows the tooltip to remain open if triggered with a click or touch event.
	   * @option
	   * @type {boolean}
	   * @default true
	   */
	  clickOpen: true,

	  /**
	   * Position of tooltip. Can be left, right, bottom, top, or auto.
	   * @option
	   * @type {string}
	   * @default 'auto'
	   */
	  position: 'auto',

	  /**
	   * Alignment of tooltip relative to anchor. Can be left, right, bottom, top, center, or auto.
	   * @option
	   * @type {string}
	   * @default 'auto'
	   */
	  alignment: 'auto',

	  /**
	   * Allow overlap of container/window. If false, tooltip will first try to
	   * position as defined by data-position and data-alignment, but reposition if
	   * it would cause an overflow.  @option
	   * @type {boolean}
	   * @default false
	   */
	  allowOverlap: false,

	  /**
	   * Allow overlap of only the bottom of the container. This is the most common
	   * behavior for dropdowns, allowing the dropdown to extend the bottom of the
	   * screen but not otherwise influence or break out of the container.
	   * Less common for tooltips.
	   * @option
	   * @type {boolean}
	   * @default false
	   */
	  allowBottomOverlap: false,

	  /**
	   * Distance, in pixels, the template should push away from the anchor on the Y axis.
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  vOffset: 0,

	  /**
	   * Distance, in pixels, the template should push away from the anchor on the X axis
	   * @option
	   * @type {number}
	   * @default 0
	   */
	  hOffset: 0,

	  /**
	   * Distance, in pixels, the template spacing auto-adjust for a vertical tooltip
	   * @option
	   * @type {number}
	   * @default 14
	   */
	  tooltipHeight: 14,

	  /**
	   * Distance, in pixels, the template spacing auto-adjust for a horizontal tooltip
	   * @option
	   * @type {number}
	   * @default 12
	   */
	  tooltipWidth: 12,

	  /**
	  * Allow HTML in tooltip. Warning: If you are loading user-generated content into tooltips,
	  * allowing HTML may open yourself up to XSS attacks.
	  * @option
	  * @type {boolean}
	  * @default false
	  */
	  allowHtml: false
	};

	var MenuPlugins$1 = {
	  tabs: {
	    cssClass: 'tabs',
	    plugin: Tabs
	  },
	  accordion: {
	    cssClass: 'accordion',
	    plugin: Accordion
	  }
	};
	/**
	 * ResponsiveAccordionTabs module.
	 * @module foundation.responsiveAccordionTabs
	 * @requires foundation.util.motion
	 * @requires foundation.accordion
	 * @requires foundation.tabs
	 */

	var ResponsiveAccordionTabs =
	/*#__PURE__*/
	function (_Plugin) {
	  _inherits(ResponsiveAccordionTabs, _Plugin);

	  function ResponsiveAccordionTabs() {
	    _classCallCheck(this, ResponsiveAccordionTabs);

	    return _possibleConstructorReturn(this, _getPrototypeOf(ResponsiveAccordionTabs).apply(this, arguments));
	  }

	  _createClass(ResponsiveAccordionTabs, [{
	    key: "_setup",

	    /**
	     * Creates a new instance of a responsive accordion tabs.
	     * @class
	     * @name ResponsiveAccordionTabs
	     * @fires ResponsiveAccordionTabs#init
	     * @param {jQuery} element - jQuery object to make into Responsive Accordion Tabs.
	     * @param {Object} options - Overrides to the default plugin settings.
	     */
	    value: function _setup(element, options) {
	      this.$element = jquery(element);
	      this.options = jquery.extend({}, this.$element.data(), options);
	      this.rules = this.$element.data('responsive-accordion-tabs');
	      this.currentMq = null;
	      this.currentPlugin = null;
	      this.className = 'ResponsiveAccordionTabs'; // ie9 back compat

	      if (!this.$element.attr('id')) {
	        this.$element.attr('id', GetYoDigits(6, 'responsiveaccordiontabs'));
	      }

	      this._init();

	      this._events();
	    }
	    /**
	     * Initializes the Menu by parsing the classes from the 'data-responsive-accordion-tabs' attribute on the element.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_init",
	    value: function _init() {
	      MediaQuery._init(); // The first time an Interchange plugin is initialized, this.rules is converted from a string of "classes" to an object of rules


	      if (typeof this.rules === 'string') {
	        var rulesTree = {}; // Parse rules from "classes" pulled from data attribute

	        var rules = this.rules.split(' '); // Iterate through every rule found

	        for (var i = 0; i < rules.length; i++) {
	          var rule = rules[i].split('-');
	          var ruleSize = rule.length > 1 ? rule[0] : 'small';
	          var rulePlugin = rule.length > 1 ? rule[1] : rule[0];

	          if (MenuPlugins$1[rulePlugin] !== null) {
	            rulesTree[ruleSize] = MenuPlugins$1[rulePlugin];
	          }
	        }

	        this.rules = rulesTree;
	      }

	      this._getAllOptions();

	      if (!jquery.isEmptyObject(this.rules)) {
	        this._checkMediaQueries();
	      }
	    }
	  }, {
	    key: "_getAllOptions",
	    value: function _getAllOptions() {
	      //get all defaults and options
	      var _this = this;

	      _this.allOptions = {};

	      for (var key in MenuPlugins$1) {
	        if (MenuPlugins$1.hasOwnProperty(key)) {
	          var obj = MenuPlugins$1[key];

	          try {
	            var dummyPlugin = jquery('<ul></ul>');
	            var tmpPlugin = new obj.plugin(dummyPlugin, _this.options);

	            for (var keyKey in tmpPlugin.options) {
	              if (tmpPlugin.options.hasOwnProperty(keyKey) && keyKey !== 'zfPlugin') {
	                var objObj = tmpPlugin.options[keyKey];
	                _this.allOptions[keyKey] = objObj;
	              }
	            }

	            tmpPlugin.destroy();
	          } catch (e) {}
	        }
	      }
	    }
	    /**
	     * Initializes events for the Menu.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_events",
	    value: function _events() {
	      this._changedZfMediaQueryHandler = this._checkMediaQueries.bind(this);
	      jquery(window).on('changed.zf.mediaquery', this._changedZfMediaQueryHandler);
	    }
	    /**
	     * Checks the current screen width against available media queries. If the media query has changed, and the plugin needed has changed, the plugins will swap out.
	     * @function
	     * @private
	     */

	  }, {
	    key: "_checkMediaQueries",
	    value: function _checkMediaQueries() {
	      var matchedMq,
	          _this = this; // Iterate through each rule and find the last matching rule


	      jquery.each(this.rules, function (key) {
	        if (MediaQuery.atLeast(key)) {
	          matchedMq = key;
	        }
	      }); // No match? No dice

	      if (!matchedMq) return; // Plugin already initialized? We good

	      if (this.currentPlugin instanceof this.rules[matchedMq].plugin) return; // Remove existing plugin-specific CSS classes

	      jquery.each(MenuPlugins$1, function (key, value) {
	        _this.$element.removeClass(value.cssClass);
	      }); // Add the CSS class for the new plugin

	      this.$element.addClass(this.rules[matchedMq].cssClass); // Create an instance of the new plugin

	      if (this.currentPlugin) {
	        //don't know why but on nested elements data zfPlugin get's lost
	        if (!this.currentPlugin.$element.data('zfPlugin') && this.storezfData) this.currentPlugin.$element.data('zfPlugin', this.storezfData);
	        this.currentPlugin.destroy();
	      }

	      this._handleMarkup(this.rules[matchedMq].cssClass);

	      this.currentPlugin = new this.rules[matchedMq].plugin(this.$element, {});
	      this.storezfData = this.currentPlugin.$element.data('zfPlugin');
	    }
	  }, {
	    key: "_handleMarkup",
	    value: function _handleMarkup(toSet) {
	      var _this = this,
	          fromString = 'accordion';

	      var $panels = jquery('[data-tabs-content=' + this.$element.attr('id') + ']');
	      if ($panels.length) fromString = 'tabs';

	      if (fromString === toSet) {
	        return;
	      }
	      var tabsTitle = _this.allOptions.linkClass ? _this.allOptions.linkClass : 'tabs-title';
	      var tabsPanel = _this.allOptions.panelClass ? _this.allOptions.panelClass : 'tabs-panel';
	      this.$element.removeAttr('role');
	      var $liHeads = this.$element.children('.' + tabsTitle + ',[data-accordion-item]').removeClass(tabsTitle).removeClass('accordion-item').removeAttr('data-accordion-item');
	      var $liHeadsA = $liHeads.children('a').removeClass('accordion-title');

	      if (fromString === 'tabs') {
	        $panels = $panels.children('.' + tabsPanel).removeClass(tabsPanel).removeAttr('role').removeAttr('aria-hidden').removeAttr('aria-labelledby');
	        $panels.children('a').removeAttr('role').removeAttr('aria-controls').removeAttr('aria-selected');
	      } else {
	        $panels = $liHeads.children('[data-tab-content]').removeClass('accordion-content');
	      }
	      $panels.css({
	        display: '',
	        visibility: ''
	      });
	      $liHeads.css({
	        display: '',
	        visibility: ''
	      });

	      if (toSet === 'accordion') {
	        $panels.each(function (key, value) {
	          jquery(value).appendTo($liHeads.get(key)).addClass('accordion-content').attr('data-tab-content', '').removeClass('is-active').css({
	            height: ''
	          });
	          jquery('[data-tabs-content=' + _this.$element.attr('id') + ']').after('<div id="tabs-placeholder-' + _this.$element.attr('id') + '"></div>').detach();
	          $liHeads.addClass('accordion-item').attr('data-accordion-item', '');
	          $liHeadsA.addClass('accordion-title');
	        });
	      } else if (toSet === 'tabs') {
	        var $tabsContent = jquery('[data-tabs-content=' + _this.$element.attr('id') + ']');
	        var $placeholder = jquery('#tabs-placeholder-' + _this.$element.attr('id'));

	        if ($placeholder.length) {
	          $tabsContent = jquery('<div class="tabs-content"></div>').insertAfter($placeholder).attr('data-tabs-content', _this.$element.attr('id'));
	          $placeholder.remove();
	        } else {
	          $tabsContent = jquery('<div class="tabs-content"></div>').insertAfter(_this.$element).attr('data-tabs-content', _this.$element.attr('id'));
	        }
	        $panels.each(function (key, value) {
	          var tempValue = jquery(value).appendTo($tabsContent).addClass(tabsPanel);
	          var hash = $liHeadsA.get(key).hash.slice(1);
	          var id = jquery(value).attr('id') || GetYoDigits(6, 'accordion');

	          if (hash !== id) {
	            if (hash !== '') {
	              jquery(value).attr('id', hash);
	            } else {
	              hash = id;
	              jquery(value).attr('id', hash);
	              jquery($liHeadsA.get(key)).attr('href', jquery($liHeadsA.get(key)).attr('href').replace('#', '') + '#' + hash);
	            }
	          }
	          var isActive = jquery($liHeads.get(key)).hasClass('is-active');

	          if (isActive) {
	            tempValue.addClass('is-active');
	          }
	        });
	        $liHeads.addClass(tabsTitle);
	      }
	    }
	    /**
	     * Destroys the instance of the current plugin on this element, as well as the window resize handler that switches the plugins out.
	     * @function
	     */

	  }, {
	    key: "_destroy",
	    value: function _destroy() {
	      if (this.currentPlugin) this.currentPlugin.destroy();
	      jquery(window).off('changed.zf.mediaquery', this._changedZfMediaQueryHandler);
	    }
	  }]);

	  return ResponsiveAccordionTabs;
	}(Plugin);

	ResponsiveAccordionTabs.defaults = {};

	Foundation.addToJquery(jquery); // Add Foundation Utils to Foundation global namespace for backwards
	// compatibility.

	Foundation.rtl = rtl;
	Foundation.GetYoDigits = GetYoDigits;
	Foundation.transitionend = transitionend;
	Foundation.RegExpEscape = RegExpEscape;
	Foundation.onLoad = onLoad;
	Foundation.Box = Box;
	Foundation.onImagesLoaded = onImagesLoaded;
	Foundation.Keyboard = Keyboard;
	Foundation.MediaQuery = MediaQuery;
	Foundation.Motion = Motion;
	Foundation.Move = Move;
	Foundation.Nest = Nest;
	Foundation.Timer = Timer; // Touch and Triggers previously were almost purely sede effect driven,
	// so no need to add it to Foundation, just init them.

	Touch.init(jquery);
	Triggers.init(jquery, Foundation);

	MediaQuery._init();

	Foundation.plugin(Abide, 'Abide');
	Foundation.plugin(Accordion, 'Accordion');
	Foundation.plugin(AccordionMenu, 'AccordionMenu');
	Foundation.plugin(Drilldown, 'Drilldown');
	Foundation.plugin(Dropdown, 'Dropdown');
	Foundation.plugin(DropdownMenu, 'DropdownMenu');
	Foundation.plugin(Equalizer, 'Equalizer');
	Foundation.plugin(Interchange, 'Interchange');
	Foundation.plugin(Magellan, 'Magellan');
	Foundation.plugin(OffCanvas, 'OffCanvas');
	Foundation.plugin(Orbit, 'Orbit');
	Foundation.plugin(ResponsiveMenu, 'ResponsiveMenu');
	Foundation.plugin(ResponsiveToggle, 'ResponsiveToggle');
	Foundation.plugin(Reveal, 'Reveal');
	Foundation.plugin(Slider, 'Slider');
	Foundation.plugin(SmoothScroll, 'SmoothScroll');
	Foundation.plugin(Sticky, 'Sticky');
	Foundation.plugin(Tabs, 'Tabs');
	Foundation.plugin(Toggler, 'Toggler');
	Foundation.plugin(Tooltip, 'Tooltip');
	Foundation.plugin(ResponsiveAccordionTabs, 'ResponsiveAccordionTabs');

	var lightgallery = createCommonjsModule(function (module) {
	/*! lightgallery - v1.6.12 - 2019-02-19
	* http://sachinchoolur.github.io/lightGallery/
	* Copyright (c) 2019 Sachin N; Licensed GPLv3 */
	(function (root, factory) {
	  if ( module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory(jquery);
	  } else {
	    factory(root["jQuery"]);
	  }
	}(commonjsGlobal, function ($) {

	(function() {

	    var defaults = {

	        mode: 'lg-slide',

	        // Ex : 'ease'
	        cssEasing: 'ease',

	        //'for jquery animation'
	        easing: 'linear',
	        speed: 600,
	        height: '100%',
	        width: '100%',
	        addClass: '',
	        startClass: 'lg-start-zoom',
	        backdropDuration: 150,
	        hideBarsDelay: 6000,

	        useLeft: false,

	        closable: true,
	        loop: true,
	        escKey: true,
	        keyPress: true,
	        controls: true,
	        slideEndAnimatoin: true,
	        hideControlOnEnd: false,
	        mousewheel: true,

	        getCaptionFromTitleOrAlt: true,

	        // .lg-item || '.lg-sub-html'
	        appendSubHtmlTo: '.lg-sub-html',

	        subHtmlSelectorRelative: false,

	        /**
	         * @desc number of preload slides
	         * will exicute only after the current slide is fully loaded.
	         *
	         * @ex you clicked on 4th image and if preload = 1 then 3rd slide and 5th
	         * slide will be loaded in the background after the 4th slide is fully loaded..
	         * if preload is 2 then 2nd 3rd 5th 6th slides will be preloaded.. ... ...
	         *
	         */
	        preload: 1,
	        showAfterLoad: true,
	        selector: '',
	        selectWithin: '',
	        nextHtml: '',
	        prevHtml: '',

	        // 0, 1
	        index: false,

	        iframeMaxWidth: '100%',

	        download: true,
	        counter: true,
	        appendCounterTo: '.lg-toolbar',

	        swipeThreshold: 50,
	        enableSwipe: true,
	        enableDrag: true,

	        dynamic: false,
	        dynamicEl: [],
	        galleryId: 1
	    };

	    function Plugin(element, options) {

	        // Current lightGallery element
	        this.el = element;

	        // Current jquery element
	        this.$el = $(element);

	        // lightGallery settings
	        this.s = $.extend({}, defaults, options);

	        // When using dynamic mode, ensure dynamicEl is an array
	        if (this.s.dynamic && this.s.dynamicEl !== 'undefined' && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) {
	            throw ('When using dynamic mode, you must also define dynamicEl as an Array.');
	        }

	        // lightGallery modules
	        this.modules = {};

	        // false when lightgallery complete first slide;
	        this.lGalleryOn = false;

	        this.lgBusy = false;

	        // Timeout function for hiding controls;
	        this.hideBartimeout = false;

	        // To determine browser supports for touch events;
	        this.isTouch = ('ontouchstart' in document.documentElement);

	        // Disable hideControlOnEnd if sildeEndAnimation is true
	        if (this.s.slideEndAnimatoin) {
	            this.s.hideControlOnEnd = false;
	        }

	        // Gallery items
	        if (this.s.dynamic) {
	            this.$items = this.s.dynamicEl;
	        } else {
	            if (this.s.selector === 'this') {
	                this.$items = this.$el;
	            } else if (this.s.selector !== '') {
	                if (this.s.selectWithin) {
	                    this.$items = $(this.s.selectWithin).find(this.s.selector);
	                } else {
	                    this.$items = this.$el.find($(this.s.selector));
	                }
	            } else {
	                this.$items = this.$el.children();
	            }
	        }

	        // .lg-item
	        this.$slide = '';

	        // .lg-outer
	        this.$outer = '';

	        this.init();

	        return this;
	    }

	    Plugin.prototype.init = function() {

	        var _this = this;

	        // s.preload should not be more than $item.length
	        if (_this.s.preload > _this.$items.length) {
	            _this.s.preload = _this.$items.length;
	        }

	        // if dynamic option is enabled execute immediately
	        var _hash = window.location.hash;
	        if (_hash.indexOf('lg=' + this.s.galleryId) > 0) {

	            _this.index = parseInt(_hash.split('&slide=')[1], 10);

	            $('body').addClass('lg-from-hash');
	            if (!$('body').hasClass('lg-on')) {
	                setTimeout(function() {
	                    _this.build(_this.index);
	                });

	                $('body').addClass('lg-on');
	            }
	        }

	        if (_this.s.dynamic) {

	            _this.$el.trigger('onBeforeOpen.lg');

	            _this.index = _this.s.index || 0;

	            // prevent accidental double execution
	            if (!$('body').hasClass('lg-on')) {
	                setTimeout(function() {
	                    _this.build(_this.index);
	                    $('body').addClass('lg-on');
	                });
	            }
	        } else {

	            // Using different namespace for click because click event should not unbind if selector is same object('this')
	            _this.$items.on('click.lgcustom', function(event) {

	                // For IE8
	                try {
	                    event.preventDefault();
	                    event.preventDefault();
	                } catch (er) {
	                    event.returnValue = false;
	                }

	                _this.$el.trigger('onBeforeOpen.lg');

	                _this.index = _this.s.index || _this.$items.index(this);

	                // prevent accidental double execution
	                if (!$('body').hasClass('lg-on')) {
	                    _this.build(_this.index);
	                    $('body').addClass('lg-on');
	                }
	            });
	        }

	    };

	    Plugin.prototype.build = function(index) {

	        var _this = this;

	        _this.structure();

	        // module constructor
	        $.each($.fn.lightGallery.modules, function(key) {
	            _this.modules[key] = new $.fn.lightGallery.modules[key](_this.el);
	        });

	        // initiate slide function
	        _this.slide(index, false, false, false);

	        if (_this.s.keyPress) {
	            _this.keyPress();
	        }

	        if (_this.$items.length > 1) {

	            _this.arrow();

	            setTimeout(function() {
	                _this.enableDrag();
	                _this.enableSwipe();
	            }, 50);

	            if (_this.s.mousewheel) {
	                _this.mousewheel();
	            }
	        } else {
	            _this.$slide.on('click.lg', function() {
	                _this.$el.trigger('onSlideClick.lg');
	            });
	        }

	        _this.counter();

	        _this.closeGallery();

	        _this.$el.trigger('onAfterOpen.lg');

	        // Hide controllers if mouse doesn't move for some period
	        _this.$outer.on('mousemove.lg click.lg touchstart.lg', function() {

	            _this.$outer.removeClass('lg-hide-items');

	            clearTimeout(_this.hideBartimeout);

	            // Timeout will be cleared on each slide movement also
	            _this.hideBartimeout = setTimeout(function() {
	                _this.$outer.addClass('lg-hide-items');
	            }, _this.s.hideBarsDelay);

	        });

	        _this.$outer.trigger('mousemove.lg');

	    };

	    Plugin.prototype.structure = function() {
	        var list = '';
	        var controls = '';
	        var i = 0;
	        var subHtmlCont = '';
	        var template;
	        var _this = this;

	        $('body').append('<div class="lg-backdrop"></div>');
	        $('.lg-backdrop').css('transition-duration', this.s.backdropDuration + 'ms');

	        // Create gallery items
	        for (i = 0; i < this.$items.length; i++) {
	            list += '<div class="lg-item"></div>';
	        }

	        // Create controlls
	        if (this.s.controls && this.$items.length > 1) {
	            controls = '<div class="lg-actions">' +
	                '<button class="lg-prev lg-icon">' + this.s.prevHtml + '</button>' +
	                '<button class="lg-next lg-icon">' + this.s.nextHtml + '</button>' +
	                '</div>';
	        }

	        if (this.s.appendSubHtmlTo === '.lg-sub-html') {
	            subHtmlCont = '<div class="lg-sub-html"></div>';
	        }

	        template = '<div class="lg-outer ' + this.s.addClass + ' ' + this.s.startClass + '">' +
	            '<div class="lg" style="width:' + this.s.width + '; height:' + this.s.height + '">' +
	            '<div class="lg-inner">' + list + '</div>' +
	            '<div class="lg-toolbar lg-group">' +
	            '<span class="lg-close lg-icon"></span>' +
	            '</div>' +
	            controls +
	            subHtmlCont +
	            '</div>' +
	            '</div>';

	        $('body').append(template);
	        this.$outer = $('.lg-outer');
	        this.$slide = this.$outer.find('.lg-item');

	        if (this.s.useLeft) {
	            this.$outer.addClass('lg-use-left');

	            // Set mode lg-slide if use left is true;
	            this.s.mode = 'lg-slide';
	        } else {
	            this.$outer.addClass('lg-use-css3');
	        }

	        // For fixed height gallery
	        _this.setTop();
	        $(window).on('resize.lg orientationchange.lg', function() {
	            setTimeout(function() {
	                _this.setTop();
	            }, 100);
	        });

	        // add class lg-current to remove initial transition
	        this.$slide.eq(this.index).addClass('lg-current');

	        // add Class for css support and transition mode
	        if (this.doCss()) {
	            this.$outer.addClass('lg-css3');
	        } else {
	            this.$outer.addClass('lg-css');

	            // Set speed 0 because no animation will happen if browser doesn't support css3
	            this.s.speed = 0;
	        }

	        this.$outer.addClass(this.s.mode);

	        if (this.s.enableDrag && this.$items.length > 1) {
	            this.$outer.addClass('lg-grab');
	        }

	        if (this.s.showAfterLoad) {
	            this.$outer.addClass('lg-show-after-load');
	        }

	        if (this.doCss()) {
	            var $inner = this.$outer.find('.lg-inner');
	            $inner.css('transition-timing-function', this.s.cssEasing);
	            $inner.css('transition-duration', this.s.speed + 'ms');
	        }

	        setTimeout(function() {
	            $('.lg-backdrop').addClass('in');
	        });

	        setTimeout(function() {
	            _this.$outer.addClass('lg-visible');
	        }, this.s.backdropDuration);

	        if (this.s.download) {
	            this.$outer.find('.lg-toolbar').append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>');
	        }

	        // Store the current scroll top value to scroll back after closing the gallery..
	        this.prevScrollTop = $(window).scrollTop();

	    };

	    // For fixed height gallery
	    Plugin.prototype.setTop = function() {
	        if (this.s.height !== '100%') {
	            var wH = $(window).height();
	            var top = (wH - parseInt(this.s.height, 10)) / 2;
	            var $lGallery = this.$outer.find('.lg');
	            if (wH >= parseInt(this.s.height, 10)) {
	                $lGallery.css('top', top + 'px');
	            } else {
	                $lGallery.css('top', '0px');
	            }
	        }
	    };

	    // Find css3 support
	    Plugin.prototype.doCss = function() {
	        // check for css animation support
	        var support = function() {
	            var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
	            var root = document.documentElement;
	            var i = 0;
	            for (i = 0; i < transition.length; i++) {
	                if (transition[i] in root.style) {
	                    return true;
	                }
	            }
	        };

	        if (support()) {
	            return true;
	        }

	        return false;
	    };

	    /**
	     *  @desc Check the given src is video
	     *  @param {String} src
	     *  @return {Object} video type
	     *  Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
	     */
	    Plugin.prototype.isVideo = function(src, index) {

	        var html;
	        if (this.s.dynamic) {
	            html = this.s.dynamicEl[index].html;
	        } else {
	            html = this.$items.eq(index).attr('data-html');
	        }

	        if (!src) {
	            if(html) {
	                return {
	                    html5: true
	                };
	            } else {
	                console.error('lightGallery :- data-src is not pvovided on slide item ' + (index + 1) + '. Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html');
	                return false;
	            }
	        }

	        var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);
	        var vimeo = src.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i);
	        var dailymotion = src.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);
	        var vk = src.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);

	        if (youtube) {
	            return {
	                youtube: youtube
	            };
	        } else if (vimeo) {
	            return {
	                vimeo: vimeo
	            };
	        } else if (dailymotion) {
	            return {
	                dailymotion: dailymotion
	            };
	        } else if (vk) {
	            return {
	                vk: vk
	            };
	        }
	    };

	    /**
	     *  @desc Create image counter
	     *  Ex: 1/10
	     */
	    Plugin.prototype.counter = function() {
	        if (this.s.counter) {
	            $(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + '</span></div>');
	        }
	    };

	    /**
	     *  @desc add sub-html into the slide
	     *  @param {Number} index - index of the slide
	     */
	    Plugin.prototype.addHtml = function(index) {
	        var subHtml = null;
	        var subHtmlUrl;
	        var $currentEle;
	        if (this.s.dynamic) {
	            if (this.s.dynamicEl[index].subHtmlUrl) {
	                subHtmlUrl = this.s.dynamicEl[index].subHtmlUrl;
	            } else {
	                subHtml = this.s.dynamicEl[index].subHtml;
	            }
	        } else {
	            $currentEle = this.$items.eq(index);
	            if ($currentEle.attr('data-sub-html-url')) {
	                subHtmlUrl = $currentEle.attr('data-sub-html-url');
	            } else {
	                subHtml = $currentEle.attr('data-sub-html');
	                if (this.s.getCaptionFromTitleOrAlt && !subHtml) {
	                    subHtml = $currentEle.attr('title') || $currentEle.find('img').first().attr('alt');
	                }
	            }
	        }

	        if (!subHtmlUrl) {
	            if (typeof subHtml !== 'undefined' && subHtml !== null) {

	                // get first letter of subhtml
	                // if first letter starts with . or # get the html form the jQuery object
	                var fL = subHtml.substring(0, 1);
	                if (fL === '.' || fL === '#') {
	                    if (this.s.subHtmlSelectorRelative && !this.s.dynamic) {
	                        subHtml = $currentEle.find(subHtml).html();
	                    } else {
	                        subHtml = $(subHtml).html();
	                    }
	                }
	            } else {
	                subHtml = '';
	            }
	        }

	        if (this.s.appendSubHtmlTo === '.lg-sub-html') {

	            if (subHtmlUrl) {
	                this.$outer.find(this.s.appendSubHtmlTo).load(subHtmlUrl);
	            } else {
	                this.$outer.find(this.s.appendSubHtmlTo).html(subHtml);
	            }

	        } else {

	            if (subHtmlUrl) {
	                this.$slide.eq(index).load(subHtmlUrl);
	            } else {
	                this.$slide.eq(index).append(subHtml);
	            }
	        }

	        // Add lg-empty-html class if title doesn't exist
	        if (typeof subHtml !== 'undefined' && subHtml !== null) {
	            if (subHtml === '') {
	                this.$outer.find(this.s.appendSubHtmlTo).addClass('lg-empty-html');
	            } else {
	                this.$outer.find(this.s.appendSubHtmlTo).removeClass('lg-empty-html');
	            }
	        }

	        this.$el.trigger('onAfterAppendSubHtml.lg', [index]);
	    };

	    /**
	     *  @desc Preload slides
	     *  @param {Number} index - index of the slide
	     */
	    Plugin.prototype.preload = function(index) {
	        var i = 1;
	        var j = 1;
	        for (i = 1; i <= this.s.preload; i++) {
	            if (i >= this.$items.length - index) {
	                break;
	            }

	            this.loadContent(index + i, false, 0);
	        }

	        for (j = 1; j <= this.s.preload; j++) {
	            if (index - j < 0) {
	                break;
	            }

	            this.loadContent(index - j, false, 0);
	        }
	    };

	    /**
	     *  @desc Load slide content into slide.
	     *  @param {Number} index - index of the slide.
	     *  @param {Boolean} rec - if true call loadcontent() function again.
	     *  @param {Boolean} delay - delay for adding complete class. it is 0 except first time.
	     */
	    Plugin.prototype.loadContent = function(index, rec, delay) {

	        var _this = this;
	        var _hasPoster = false;
	        var _$img;
	        var _src;
	        var _poster;
	        var _srcset;
	        var _sizes;
	        var _html;
	        var getResponsiveSrc = function(srcItms) {
	            var rsWidth = [];
	            var rsSrc = [];
	            for (var i = 0; i < srcItms.length; i++) {
	                var __src = srcItms[i].split(' ');

	                // Manage empty space
	                if (__src[0] === '') {
	                    __src.splice(0, 1);
	                }

	                rsSrc.push(__src[0]);
	                rsWidth.push(__src[1]);
	            }

	            var wWidth = $(window).width();
	            for (var j = 0; j < rsWidth.length; j++) {
	                if (parseInt(rsWidth[j], 10) > wWidth) {
	                    _src = rsSrc[j];
	                    break;
	                }
	            }
	        };

	        if (_this.s.dynamic) {

	            if (_this.s.dynamicEl[index].poster) {
	                _hasPoster = true;
	                _poster = _this.s.dynamicEl[index].poster;
	            }

	            _html = _this.s.dynamicEl[index].html;
	            _src = _this.s.dynamicEl[index].src;

	            if (_this.s.dynamicEl[index].responsive) {
	                var srcDyItms = _this.s.dynamicEl[index].responsive.split(',');
	                getResponsiveSrc(srcDyItms);
	            }

	            _srcset = _this.s.dynamicEl[index].srcset;
	            _sizes = _this.s.dynamicEl[index].sizes;

	        } else {

	            if (_this.$items.eq(index).attr('data-poster')) {
	                _hasPoster = true;
	                _poster = _this.$items.eq(index).attr('data-poster');
	            }

	            _html = _this.$items.eq(index).attr('data-html');
	            _src = _this.$items.eq(index).attr('href') || _this.$items.eq(index).attr('data-src');

	            if (_this.$items.eq(index).attr('data-responsive')) {
	                var srcItms = _this.$items.eq(index).attr('data-responsive').split(',');
	                getResponsiveSrc(srcItms);
	            }

	            _srcset = _this.$items.eq(index).attr('data-srcset');
	            _sizes = _this.$items.eq(index).attr('data-sizes');

	        }

	        //if (_src || _srcset || _sizes || _poster) {

	        var iframe = false;
	        if (_this.s.dynamic) {
	            if (_this.s.dynamicEl[index].iframe) {
	                iframe = true;
	            }
	        } else {
	            if (_this.$items.eq(index).attr('data-iframe') === 'true') {
	                iframe = true;
	            }
	        }

	        var _isVideo = _this.isVideo(_src, index);
	        if (!_this.$slide.eq(index).hasClass('lg-loaded')) {
	            if (iframe) {
	                _this.$slide.eq(index).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + _this.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + _src + '"  allowfullscreen="true"></iframe></div></div>');
	            } else if (_hasPoster) {
	                var videoClass = '';
	                if (_isVideo && _isVideo.youtube) {
	                    videoClass = 'lg-has-youtube';
	                } else if (_isVideo && _isVideo.vimeo) {
	                    videoClass = 'lg-has-vimeo';
	                } else {
	                    videoClass = 'lg-has-html5';
	                }

	                _this.$slide.eq(index).prepend('<div class="lg-video-cont ' + videoClass + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + _poster + '" /></div></div>');

	            } else if (_isVideo) {
	                _this.$slide.eq(index).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>');
	                _this.$el.trigger('hasVideo.lg', [index, _src, _html]);
	            } else {
	                _this.$slide.eq(index).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + _src + '" /></div>');
	            }

	            _this.$el.trigger('onAferAppendSlide.lg', [index]);

	            _$img = _this.$slide.eq(index).find('.lg-object');
	            if (_sizes) {
	                _$img.attr('sizes', _sizes);
	            }

	            if (_srcset) {
	                _$img.attr('srcset', _srcset);
	                try {
	                    picturefill({
	                        elements: [_$img[0]]
	                    });
	                } catch (e) {
	                    console.warn('lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.');
	                }
	            }

	            if (this.s.appendSubHtmlTo !== '.lg-sub-html') {
	                _this.addHtml(index);
	            }

	            _this.$slide.eq(index).addClass('lg-loaded');
	        }

	        _this.$slide.eq(index).find('.lg-object').on('load.lg error.lg', function() {

	            // For first time add some delay for displaying the start animation.
	            var _speed = 0;

	            // Do not change the delay value because it is required for zoom plugin.
	            // If gallery opened from direct url (hash) speed value should be 0
	            if (delay && !$('body').hasClass('lg-from-hash')) {
	                _speed = delay;
	            }

	            setTimeout(function() {
	                _this.$slide.eq(index).addClass('lg-complete');
	                _this.$el.trigger('onSlideItemLoad.lg', [index, delay || 0]);
	            }, _speed);

	        });

	        // @todo check load state for html5 videos
	        if (_isVideo && _isVideo.html5 && !_hasPoster) {
	            _this.$slide.eq(index).addClass('lg-complete');
	        }

	        if (rec === true) {
	            if (!_this.$slide.eq(index).hasClass('lg-complete')) {
	                _this.$slide.eq(index).find('.lg-object').on('load.lg error.lg', function() {
	                    _this.preload(index);
	                });
	            } else {
	                _this.preload(index);
	            }
	        }

	        //}
	    };

	    /**
	    *   @desc slide function for lightgallery
	        ** Slide() gets call on start
	        ** ** Set lg.on true once slide() function gets called.
	        ** Call loadContent() on slide() function inside setTimeout
	        ** ** On first slide we do not want any animation like slide of fade
	        ** ** So on first slide( if lg.on if false that is first slide) loadContent() should start loading immediately
	        ** ** Else loadContent() should wait for the transition to complete.
	        ** ** So set timeout s.speed + 50
	    <=> ** loadContent() will load slide content in to the particular slide
	        ** ** It has recursion (rec) parameter. if rec === true loadContent() will call preload() function.
	        ** ** preload will execute only when the previous slide is fully loaded (images iframe)
	        ** ** avoid simultaneous image load
	    <=> ** Preload() will check for s.preload value and call loadContent() again accoring to preload value
	        ** loadContent()  <====> Preload();

	    *   @param {Number} index - index of the slide
	    *   @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
	    *   @param {Boolean} fromThumb - true if slide function called via thumbnail click
	    *   @param {String} direction - Direction of the slide(next/prev)
	    */
	    Plugin.prototype.slide = function(index, fromTouch, fromThumb, direction) {

	        var _prevIndex = this.$outer.find('.lg-current').index();
	        var _this = this;

	        // Prevent if multiple call
	        // Required for hsh plugin
	        if (_this.lGalleryOn && (_prevIndex === index)) {
	            return;
	        }

	        var _length = this.$slide.length;
	        var _time = _this.lGalleryOn ? this.s.speed : 0;

	        if (!_this.lgBusy) {

	            if (this.s.download) {
	                var _src;
	                if (_this.s.dynamic) {
	                    _src = _this.s.dynamicEl[index].downloadUrl !== false && (_this.s.dynamicEl[index].downloadUrl || _this.s.dynamicEl[index].src);
	                } else {
	                    _src = _this.$items.eq(index).attr('data-download-url') !== 'false' && (_this.$items.eq(index).attr('data-download-url') || _this.$items.eq(index).attr('href') || _this.$items.eq(index).attr('data-src'));

	                }

	                if (_src) {
	                    $('#lg-download').attr('href', _src);
	                    _this.$outer.removeClass('lg-hide-download');
	                } else {
	                    _this.$outer.addClass('lg-hide-download');
	                }
	            }

	            this.$el.trigger('onBeforeSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);

	            _this.lgBusy = true;

	            clearTimeout(_this.hideBartimeout);

	            // Add title if this.s.appendSubHtmlTo === lg-sub-html
	            if (this.s.appendSubHtmlTo === '.lg-sub-html') {

	                // wait for slide animation to complete
	                setTimeout(function() {
	                    _this.addHtml(index);
	                }, _time);
	            }

	            this.arrowDisable(index);

	            if (!direction) {
	                if (index < _prevIndex) {
	                    direction = 'prev';
	                } else if (index > _prevIndex) {
	                    direction = 'next';
	                }
	            }

	            if (!fromTouch) {

	                // remove all transitions
	                _this.$outer.addClass('lg-no-trans');

	                this.$slide.removeClass('lg-prev-slide lg-next-slide');

	                if (direction === 'prev') {

	                    //prevslide
	                    this.$slide.eq(index).addClass('lg-prev-slide');
	                    this.$slide.eq(_prevIndex).addClass('lg-next-slide');
	                } else {

	                    // next slide
	                    this.$slide.eq(index).addClass('lg-next-slide');
	                    this.$slide.eq(_prevIndex).addClass('lg-prev-slide');
	                }

	                // give 50 ms for browser to add/remove class
	                setTimeout(function() {
	                    _this.$slide.removeClass('lg-current');

	                    //_this.$slide.eq(_prevIndex).removeClass('lg-current');
	                    _this.$slide.eq(index).addClass('lg-current');

	                    // reset all transitions
	                    _this.$outer.removeClass('lg-no-trans');
	                }, 50);
	            } else {

	                this.$slide.removeClass('lg-prev-slide lg-current lg-next-slide');
	                var touchPrev;
	                var touchNext;
	                if (_length > 2) {
	                    touchPrev = index - 1;
	                    touchNext = index + 1;

	                    if ((index === 0) && (_prevIndex === _length - 1)) {

	                        // next slide
	                        touchNext = 0;
	                        touchPrev = _length - 1;
	                    } else if ((index === _length - 1) && (_prevIndex === 0)) {

	                        // prev slide
	                        touchNext = 0;
	                        touchPrev = _length - 1;
	                    }

	                } else {
	                    touchPrev = 0;
	                    touchNext = 1;
	                }

	                if (direction === 'prev') {
	                    _this.$slide.eq(touchNext).addClass('lg-next-slide');
	                } else {
	                    _this.$slide.eq(touchPrev).addClass('lg-prev-slide');
	                }

	                _this.$slide.eq(index).addClass('lg-current');
	            }

	            if (_this.lGalleryOn) {
	                setTimeout(function() {
	                    _this.loadContent(index, true, 0);
	                }, this.s.speed + 50);

	                setTimeout(function() {
	                    _this.lgBusy = false;
	                    _this.$el.trigger('onAfterSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);
	                }, this.s.speed);

	            } else {
	                _this.loadContent(index, true, _this.s.backdropDuration);

	                _this.lgBusy = false;
	                _this.$el.trigger('onAfterSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);
	            }

	            _this.lGalleryOn = true;

	            if (this.s.counter) {
	                $('#lg-counter-current').text(index + 1);
	            }

	        }
	        _this.index = index;

	    };

	    /**
	     *  @desc Go to next slide
	     *  @param {Boolean} fromTouch - true if slide function called via touch event
	     */
	    Plugin.prototype.goToNextSlide = function(fromTouch) {
	        var _this = this;
	        var _loop = _this.s.loop;
	        if (fromTouch && _this.$slide.length < 3) {
	            _loop = false;
	        }

	        if (!_this.lgBusy) {
	            if ((_this.index + 1) < _this.$slide.length) {
	                _this.index++;
	                _this.$el.trigger('onBeforeNextSlide.lg', [_this.index]);
	                _this.slide(_this.index, fromTouch, false, 'next');
	            } else {
	                if (_loop) {
	                    _this.index = 0;
	                    _this.$el.trigger('onBeforeNextSlide.lg', [_this.index]);
	                    _this.slide(_this.index, fromTouch, false, 'next');
	                } else if (_this.s.slideEndAnimatoin && !fromTouch) {
	                    _this.$outer.addClass('lg-right-end');
	                    setTimeout(function() {
	                        _this.$outer.removeClass('lg-right-end');
	                    }, 400);
	                }
	            }
	        }
	    };

	    /**
	     *  @desc Go to previous slide
	     *  @param {Boolean} fromTouch - true if slide function called via touch event
	     */
	    Plugin.prototype.goToPrevSlide = function(fromTouch) {
	        var _this = this;
	        var _loop = _this.s.loop;
	        if (fromTouch && _this.$slide.length < 3) {
	            _loop = false;
	        }

	        if (!_this.lgBusy) {
	            if (_this.index > 0) {
	                _this.index--;
	                _this.$el.trigger('onBeforePrevSlide.lg', [_this.index, fromTouch]);
	                _this.slide(_this.index, fromTouch, false, 'prev');
	            } else {
	                if (_loop) {
	                    _this.index = _this.$items.length - 1;
	                    _this.$el.trigger('onBeforePrevSlide.lg', [_this.index, fromTouch]);
	                    _this.slide(_this.index, fromTouch, false, 'prev');
	                } else if (_this.s.slideEndAnimatoin && !fromTouch) {
	                    _this.$outer.addClass('lg-left-end');
	                    setTimeout(function() {
	                        _this.$outer.removeClass('lg-left-end');
	                    }, 400);
	                }
	            }
	        }
	    };

	    Plugin.prototype.keyPress = function() {
	        var _this = this;
	        if (this.$items.length > 1) {
	            $(window).on('keyup.lg', function(e) {
	                if (_this.$items.length > 1) {
	                    if (e.keyCode === 37) {
	                        e.preventDefault();
	                        _this.goToPrevSlide();
	                    }

	                    if (e.keyCode === 39) {
	                        e.preventDefault();
	                        _this.goToNextSlide();
	                    }
	                }
	            });
	        }

	        $(window).on('keydown.lg', function(e) {
	            if (_this.s.escKey === true && e.keyCode === 27) {
	                e.preventDefault();
	                if (!_this.$outer.hasClass('lg-thumb-open')) {
	                    _this.destroy();
	                } else {
	                    _this.$outer.removeClass('lg-thumb-open');
	                }
	            }
	        });
	    };

	    Plugin.prototype.arrow = function() {
	        var _this = this;
	        this.$outer.find('.lg-prev').on('click.lg', function() {
	            _this.goToPrevSlide();
	        });

	        this.$outer.find('.lg-next').on('click.lg', function() {
	            _this.goToNextSlide();
	        });
	    };

	    Plugin.prototype.arrowDisable = function(index) {

	        // Disable arrows if s.hideControlOnEnd is true
	        if (!this.s.loop && this.s.hideControlOnEnd) {
	            if ((index + 1) < this.$slide.length) {
	                this.$outer.find('.lg-next').removeAttr('disabled').removeClass('disabled');
	            } else {
	                this.$outer.find('.lg-next').attr('disabled', 'disabled').addClass('disabled');
	            }

	            if (index > 0) {
	                this.$outer.find('.lg-prev').removeAttr('disabled').removeClass('disabled');
	            } else {
	                this.$outer.find('.lg-prev').attr('disabled', 'disabled').addClass('disabled');
	            }
	        }
	    };

	    Plugin.prototype.setTranslate = function($el, xValue, yValue) {
	        // jQuery supports Automatic CSS prefixing since jQuery 1.8.0
	        if (this.s.useLeft) {
	            $el.css('left', xValue);
	        } else {
	            $el.css({
	                transform: 'translate3d(' + (xValue) + 'px, ' + yValue + 'px, 0px)'
	            });
	        }
	    };

	    Plugin.prototype.touchMove = function(startCoords, endCoords) {

	        var distance = endCoords - startCoords;

	        if (Math.abs(distance) > 15) {
	            // reset opacity and transition duration
	            this.$outer.addClass('lg-dragging');

	            // move current slide
	            this.setTranslate(this.$slide.eq(this.index), distance, 0);

	            // move next and prev slide with current slide
	            this.setTranslate($('.lg-prev-slide'), -this.$slide.eq(this.index).width() + distance, 0);
	            this.setTranslate($('.lg-next-slide'), this.$slide.eq(this.index).width() + distance, 0);
	        }
	    };

	    Plugin.prototype.touchEnd = function(distance) {
	        var _this = this;

	        // keep slide animation for any mode while dragg/swipe
	        if (_this.s.mode !== 'lg-slide') {
	            _this.$outer.addClass('lg-slide');
	        }

	        this.$slide.not('.lg-current, .lg-prev-slide, .lg-next-slide').css('opacity', '0');

	        // set transition duration
	        setTimeout(function() {
	            _this.$outer.removeClass('lg-dragging');
	            if ((distance < 0) && (Math.abs(distance) > _this.s.swipeThreshold)) {
	                _this.goToNextSlide(true);
	            } else if ((distance > 0) && (Math.abs(distance) > _this.s.swipeThreshold)) {
	                _this.goToPrevSlide(true);
	            } else if (Math.abs(distance) < 5) {

	                // Trigger click if distance is less than 5 pix
	                _this.$el.trigger('onSlideClick.lg');
	            }

	            _this.$slide.removeAttr('style');
	        });

	        // remove slide class once drag/swipe is completed if mode is not slide
	        setTimeout(function() {
	            if (!_this.$outer.hasClass('lg-dragging') && _this.s.mode !== 'lg-slide') {
	                _this.$outer.removeClass('lg-slide');
	            }
	        }, _this.s.speed + 100);

	    };

	    Plugin.prototype.enableSwipe = function() {
	        var _this = this;
	        var startCoords = 0;
	        var endCoords = 0;
	        var isMoved = false;

	        if (_this.s.enableSwipe && _this.doCss()) {

	            _this.$slide.on('touchstart.lg', function(e) {
	                if (!_this.$outer.hasClass('lg-zoomed') && !_this.lgBusy) {
	                    e.preventDefault();
	                    _this.manageSwipeClass();
	                    startCoords = e.originalEvent.targetTouches[0].pageX;
	                }
	            });

	            _this.$slide.on('touchmove.lg', function(e) {
	                if (!_this.$outer.hasClass('lg-zoomed')) {
	                    e.preventDefault();
	                    endCoords = e.originalEvent.targetTouches[0].pageX;
	                    _this.touchMove(startCoords, endCoords);
	                    isMoved = true;
	                }
	            });

	            _this.$slide.on('touchend.lg', function() {
	                if (!_this.$outer.hasClass('lg-zoomed')) {
	                    if (isMoved) {
	                        isMoved = false;
	                        _this.touchEnd(endCoords - startCoords);
	                    } else {
	                        _this.$el.trigger('onSlideClick.lg');
	                    }
	                }
	            });
	        }

	    };

	    Plugin.prototype.enableDrag = function() {
	        var _this = this;
	        var startCoords = 0;
	        var endCoords = 0;
	        var isDraging = false;
	        var isMoved = false;
	        if (_this.s.enableDrag && _this.doCss()) {
	            _this.$slide.on('mousedown.lg', function(e) {
	                if (!_this.$outer.hasClass('lg-zoomed') && !_this.lgBusy && !$(e.target).text().trim()) {
	                    e.preventDefault();
	                    _this.manageSwipeClass();
	                    startCoords = e.pageX;
	                    isDraging = true;

	                    // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
	                    _this.$outer.scrollLeft += 1;
	                    _this.$outer.scrollLeft -= 1;

	                    // *

	                    _this.$outer.removeClass('lg-grab').addClass('lg-grabbing');

	                    _this.$el.trigger('onDragstart.lg');
	                }
	            });

	            $(window).on('mousemove.lg', function(e) {
	                if (isDraging) {
	                    isMoved = true;
	                    endCoords = e.pageX;
	                    _this.touchMove(startCoords, endCoords);
	                    _this.$el.trigger('onDragmove.lg');
	                }
	            });

	            $(window).on('mouseup.lg', function(e) {
	                if (isMoved) {
	                    isMoved = false;
	                    _this.touchEnd(endCoords - startCoords);
	                    _this.$el.trigger('onDragend.lg');
	                } else if ($(e.target).hasClass('lg-object') || $(e.target).hasClass('lg-video-play')) {
	                    _this.$el.trigger('onSlideClick.lg');
	                }

	                // Prevent execution on click
	                if (isDraging) {
	                    isDraging = false;
	                    _this.$outer.removeClass('lg-grabbing').addClass('lg-grab');
	                }
	            });

	        }
	    };

	    Plugin.prototype.manageSwipeClass = function() {
	        var _touchNext = this.index + 1;
	        var _touchPrev = this.index - 1;
	        if (this.s.loop && this.$slide.length > 2) {
	            if (this.index === 0) {
	                _touchPrev = this.$slide.length - 1;
	            } else if (this.index === this.$slide.length - 1) {
	                _touchNext = 0;
	            }
	        }

	        this.$slide.removeClass('lg-next-slide lg-prev-slide');
	        if (_touchPrev > -1) {
	            this.$slide.eq(_touchPrev).addClass('lg-prev-slide');
	        }

	        this.$slide.eq(_touchNext).addClass('lg-next-slide');
	    };

	    Plugin.prototype.mousewheel = function() {
	        var _this = this;
	        _this.$outer.on('mousewheel.lg', function(e) {

	            if (!e.deltaY) {
	                return;
	            }

	            if (e.deltaY > 0) {
	                _this.goToPrevSlide();
	            } else {
	                _this.goToNextSlide();
	            }

	            e.preventDefault();
	        });

	    };

	    Plugin.prototype.closeGallery = function() {

	        var _this = this;
	        var mousedown = false;
	        this.$outer.find('.lg-close').on('click.lg', function() {
	            _this.destroy();
	        });

	        if (_this.s.closable) {

	            // If you drag the slide and release outside gallery gets close on chrome
	            // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
	            _this.$outer.on('mousedown.lg', function(e) {

	                if ($(e.target).is('.lg-outer') || $(e.target).is('.lg-item ') || $(e.target).is('.lg-img-wrap')) {
	                    mousedown = true;
	                } else {
	                    mousedown = false;
	                }

	            });
	            
	            _this.$outer.on('mousemove.lg', function() {
	                mousedown = false;
	            });

	            _this.$outer.on('mouseup.lg', function(e) {

	                if ($(e.target).is('.lg-outer') || $(e.target).is('.lg-item ') || $(e.target).is('.lg-img-wrap') && mousedown) {
	                    if (!_this.$outer.hasClass('lg-dragging')) {
	                        _this.destroy();
	                    }
	                }

	            });

	        }

	    };

	    Plugin.prototype.destroy = function(d) {

	        var _this = this;

	        if (!d) {
	            _this.$el.trigger('onBeforeClose.lg');
	            $(window).scrollTop(_this.prevScrollTop);
	        }


	        /**
	         * if d is false or undefined destroy will only close the gallery
	         * plugins instance remains with the element
	         *
	         * if d is true destroy will completely remove the plugin
	         */

	        if (d) {
	            if (!_this.s.dynamic) {
	                // only when not using dynamic mode is $items a jquery collection
	                this.$items.off('click.lg click.lgcustom');
	            }

	            $.removeData(_this.el, 'lightGallery');
	        }

	        // Unbind all events added by lightGallery
	        this.$el.off('.lg.tm');

	        // Distroy all lightGallery modules
	        $.each($.fn.lightGallery.modules, function(key) {
	            if (_this.modules[key]) {
	                _this.modules[key].destroy();
	            }
	        });

	        this.lGalleryOn = false;

	        clearTimeout(_this.hideBartimeout);
	        this.hideBartimeout = false;
	        $(window).off('.lg');
	        $('body').removeClass('lg-on lg-from-hash');

	        if (_this.$outer) {
	            _this.$outer.removeClass('lg-visible');
	        }

	        $('.lg-backdrop').removeClass('in');

	        setTimeout(function() {
	            if (_this.$outer) {
	                _this.$outer.remove();
	            }

	            $('.lg-backdrop').remove();

	            if (!d) {
	                _this.$el.trigger('onCloseAfter.lg');
	            }

	        }, _this.s.backdropDuration + 50);
	    };

	    $.fn.lightGallery = function(options) {
	        return this.each(function() {
	            if (!$.data(this, 'lightGallery')) {
	                $.data(this, 'lightGallery', new Plugin(this, options));
	            } else {
	                try {
	                    $(this).data('lightGallery').init();
	                } catch (err) {
	                    console.error('lightGallery has not initiated properly');
	                }
	            }
	        });
	    };

	    $.fn.lightGallery.modules = {};

	})();


	}));
	});

	var lgFullscreen = createCommonjsModule(function (module) {
	/*! lg-fullscreen - v1.1.0 - 2019-02-19
	* http://sachinchoolur.github.io/lightGallery
	* Copyright (c) 2019 Sachin N; Licensed GPLv3 */

	(function (root, factory) {
	  if ( module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory(jquery);
	  } else {
	    factory(root["jQuery"]);
	  }
	}(commonjsGlobal, function ($) {

	(function() {

	    var defaults = {
	        fullScreen: true
	    };

	    function isFullScreen() {
	        return (
	            document.fullscreenElement ||
	            document.mozFullScreenElement ||
	            document.webkitFullscreenElement ||
	            document.msFullscreenElement
	        );
	    }

	    var Fullscreen = function(element) {

	        // get lightGallery core plugin data
	        this.core = $(element).data('lightGallery');

	        this.$el = $(element);

	        // extend module defalut settings with lightGallery core settings
	        this.core.s = $.extend({}, defaults, this.core.s);

	        this.init();

	        return this;
	    };

	    Fullscreen.prototype.init = function() {
	        var fullScreen = '';
	        if (this.core.s.fullScreen) {

	            // check for fullscreen browser support
	            if (!document.fullscreenEnabled && !document.webkitFullscreenEnabled &&
	                !document.mozFullScreenEnabled && !document.msFullscreenEnabled) {
	                return;
	            } else {
	                fullScreen = '<span class="lg-fullscreen lg-icon"></span>';
	                this.core.$outer.find('.lg-toolbar').append(fullScreen);
	                this.fullScreen();
	            }
	        }
	    };

	    Fullscreen.prototype.requestFullscreen = function() {
	        var el = document.documentElement;
	        if (el.requestFullscreen) {
	            el.requestFullscreen();
	        } else if (el.msRequestFullscreen) {
	            el.msRequestFullscreen();
	        } else if (el.mozRequestFullScreen) {
	            el.mozRequestFullScreen();
	        } else if (el.webkitRequestFullscreen) {
	            el.webkitRequestFullscreen();
	        }
	    };

	    Fullscreen.prototype.exitFullscreen = function() {
	        if (document.exitFullscreen) {
	            document.exitFullscreen();
	        } else if (document.msExitFullscreen) {
	            document.msExitFullscreen();
	        } else if (document.mozCancelFullScreen) {
	            document.mozCancelFullScreen();
	        } else if (document.webkitExitFullscreen) {
	            document.webkitExitFullscreen();
	        }
	    };

	    // https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
	    Fullscreen.prototype.fullScreen = function() {
	        var _this = this;

	        $(document).on('fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg', function() {
	            _this.core.$outer.toggleClass('lg-fullscreen-on');
	        });

	        this.core.$outer.find('.lg-fullscreen').on('click.lg', function() {
	            if (isFullScreen()) {
	                _this.exitFullscreen();
	            } else {
	                _this.requestFullscreen();
	            }
	        });

	    };

	    Fullscreen.prototype.destroy = function() {

	        // exit from fullscreen if activated
	        if(isFullScreen()) {
	            this.exitFullscreen();
	        }

	        $(document).off('fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg');
	    };

	    $.fn.lightGallery.modules.fullscreen = Fullscreen;

	})();

	}));
	});

	var lgVideo = createCommonjsModule(function (module) {
	/*! lg-video - v1.2.2 - 2018-05-01
	* http://sachinchoolur.github.io/lightGallery
	* Copyright (c) 2018 Sachin N; Licensed GPLv3 */

	(function (root, factory) {
	  if ( module.exports) {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory(jquery);
	  } else {
	    factory(root["jQuery"]);
	  }
	}(commonjsGlobal, function ($) {

	(function() {
	    
	        var defaults = {
	            videoMaxWidth: '855px',

	            autoplayFirstVideo: true,

	            youtubePlayerParams: false,
	            vimeoPlayerParams: false,
	            dailymotionPlayerParams: false,
	            vkPlayerParams: false,

	            videojs: false,
	            videojsOptions: {}
	        };
	    
	        var Video = function(element) {
	    
	            this.core = $(element).data('lightGallery');
	    
	            this.$el = $(element);
	            this.core.s = $.extend({}, defaults, this.core.s);
	            this.videoLoaded = false;
	    
	            this.init();
	    
	            return this;
	        };
	    
	        Video.prototype.init = function() {
	            var _this = this;
	    
	            // Event triggered when video url found without poster
	            _this.core.$el.on('hasVideo.lg.tm', onHasVideo.bind(this));
	    
	            // Set max width for video
	            _this.core.$el.on('onAferAppendSlide.lg.tm', onAferAppendSlide.bind(this));
	    
	            if (_this.core.doCss() && (_this.core.$items.length > 1) && (_this.core.s.enableSwipe || _this.core.s.enableDrag)) {
	                _this.core.$el.on('onSlideClick.lg.tm', function() {
	                    var $el = _this.core.$slide.eq(_this.core.index);
	                    _this.loadVideoOnclick($el);
	                });
	            } else {
	    
	                // For IE 9 and bellow
	                _this.core.$slide.on('click.lg', function() {
	                    _this.loadVideoOnclick($(this));
	                });
	            }
	    
	            _this.core.$el.on('onBeforeSlide.lg.tm', onBeforeSlide.bind(this));
	    
	            _this.core.$el.on('onAfterSlide.lg.tm', function(event, prevIndex) {
	                _this.core.$slide.eq(prevIndex).removeClass('lg-video-playing');
	            });
	            
	            if (_this.core.s.autoplayFirstVideo) {
	                _this.core.$el.on('onAferAppendSlide.lg.tm', function (e, index) {
	                    if (!_this.core.lGalleryOn) {
	                        var $el = _this.core.$slide.eq(index);
	                        setTimeout(function () {
	                            _this.loadVideoOnclick($el);
	                        }, 100);
	                    }
	                });
	            }
	        };
	    
	        Video.prototype.loadVideo = function(src, addClass, noPoster, index, html) {
	            var video = '';
	            var autoplay = 1;
	            var a = '';
	            var isVideo = this.core.isVideo(src, index) || {};
	    
	            // Enable autoplay based on setting for first video if poster doesn't exist
	            if (noPoster) {
	                if (this.videoLoaded) {
	                    autoplay = 0;
	                } else {
	                    autoplay = this.core.s.autoplayFirstVideo ? 1 : 0;
	                }
	            }
	    
	            if (isVideo.youtube) {
	    
	                a = '?wmode=opaque&autoplay=' + autoplay + '&enablejsapi=1';
	                if (this.core.s.youtubePlayerParams) {
	                    a = a + '&' + $.param(this.core.s.youtubePlayerParams);
	                }
	    
	                video = '<iframe class="lg-video-object lg-youtube ' + addClass + '" width="560" height="315" src="//www.youtube.com/embed/' + isVideo.youtube[1] + a + '" frameborder="0" allowfullscreen></iframe>';
	    
	            } else if (isVideo.vimeo) {
	    
	                a = '?autoplay=' + autoplay + '&api=1';
	                if (this.core.s.vimeoPlayerParams) {
	                    a = a + '&' + $.param(this.core.s.vimeoPlayerParams);
	                }
	    
	                video = '<iframe class="lg-video-object lg-vimeo ' + addClass + '" width="560" height="315"  src="//player.vimeo.com/video/' + isVideo.vimeo[1] + a + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
	    
	            } else if (isVideo.dailymotion) {
	    
	                a = '?wmode=opaque&autoplay=' + autoplay + '&api=postMessage';
	                if (this.core.s.dailymotionPlayerParams) {
	                    a = a + '&' + $.param(this.core.s.dailymotionPlayerParams);
	                }
	    
	                video = '<iframe class="lg-video-object lg-dailymotion ' + addClass + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + isVideo.dailymotion[1] + a + '" frameborder="0" allowfullscreen></iframe>';
	    
	            } else if (isVideo.html5) {
	                var fL = html.substring(0, 1);
	                if (fL === '.' || fL === '#') {
	                    html = $(html).html();
	                }
	    
	                video = html;
	    
	            } else if (isVideo.vk) {
	    
	                a = '&autoplay=' + autoplay;
	                if (this.core.s.vkPlayerParams) {
	                    a = a + '&' + $.param(this.core.s.vkPlayerParams);
	                }
	    
	                video = '<iframe class="lg-video-object lg-vk ' + addClass + '" width="560" height="315" src="//vk.com/video_ext.php?' + isVideo.vk[1] + a + '" frameborder="0" allowfullscreen></iframe>';
	    
	            }
	    
	            return video;
	        };

	        Video.prototype.loadVideoOnclick = function($el){

	            var _this = this;
	            // check slide has poster
	            if ($el.find('.lg-object').hasClass('lg-has-poster') && $el.find('.lg-object').is(':visible')) {

	                // check already video element present
	                if (!$el.hasClass('lg-has-video')) {

	                    $el.addClass('lg-video-playing lg-has-video');

	                    var _src;
	                    var _html;
	                    var _loadVideo = function(_src, _html) {

	                        $el.find('.lg-video').append(_this.loadVideo(_src, '', false, _this.core.index, _html));

	                        if (_html) {
	                            if (_this.core.s.videojs) {
	                                try {
	                                    videojs(_this.core.$slide.eq(_this.core.index).find('.lg-html5').get(0), _this.core.s.videojsOptions, function() {
	                                        this.play();
	                                    });
	                                } catch (e) {
	                                    console.error('Make sure you have included videojs');
	                                }
	                            } else {
	                                _this.core.$slide.eq(_this.core.index).find('.lg-html5').get(0).play();
	                            }
	                        }

	                    };

	                    if (_this.core.s.dynamic) {

	                        _src = _this.core.s.dynamicEl[_this.core.index].src;
	                        _html = _this.core.s.dynamicEl[_this.core.index].html;

	                        _loadVideo(_src, _html);

	                    } else {

	                        _src = _this.core.$items.eq(_this.core.index).attr('href') || _this.core.$items.eq(_this.core.index).attr('data-src');
	                        _html = _this.core.$items.eq(_this.core.index).attr('data-html');

	                        _loadVideo(_src, _html);

	                    }

	                    var $tempImg = $el.find('.lg-object');
	                    $el.find('.lg-video').append($tempImg);

	                    // @todo loading icon for html5 videos also
	                    // for showing the loading indicator while loading video
	                    if (!$el.find('.lg-video-object').hasClass('lg-html5')) {
	                        $el.removeClass('lg-complete');
	                        $el.find('.lg-video-object').on('load.lg error.lg', function() {
	                            $el.addClass('lg-complete');
	                        });
	                    }

	                } else {

	                    var youtubePlayer = $el.find('.lg-youtube').get(0);
	                    var vimeoPlayer = $el.find('.lg-vimeo').get(0);
	                    var dailymotionPlayer = $el.find('.lg-dailymotion').get(0);
	                    var html5Player = $el.find('.lg-html5').get(0);
	                    if (youtubePlayer) {
	                        youtubePlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
	                    } else if (vimeoPlayer) {
	                        try {
	                            $f(vimeoPlayer).api('play');
	                        } catch (e) {
	                            console.error('Make sure you have included froogaloop2 js');
	                        }
	                    } else if (dailymotionPlayer) {
	                        dailymotionPlayer.contentWindow.postMessage('play', '*');

	                    } else if (html5Player) {
	                        if (_this.core.s.videojs) {
	                            try {
	                                videojs(html5Player).play();
	                            } catch (e) {
	                                console.error('Make sure you have included videojs');
	                            }
	                        } else {
	                            html5Player.play();
	                        }
	                    }

	                    $el.addClass('lg-video-playing');

	                }
	            }
	        };
	    
	        Video.prototype.destroy = function() {
	            this.videoLoaded = false;
	        };

	        function onHasVideo(event, index, src, html) {
	            /*jshint validthis:true */
	            var _this = this;
	            _this.core.$slide.eq(index).find('.lg-video').append(_this.loadVideo(src, 'lg-object', true, index, html));
	            if (html) {
	                if (_this.core.s.videojs) {
	                    try {
	                        videojs(_this.core.$slide.eq(index).find('.lg-html5').get(0), _this.core.s.videojsOptions, function() {
	                            if (!_this.videoLoaded && _this.core.s.autoplayFirstVideo) {
	                                this.play();
	                            }
	                        });
	                    } catch (e) {
	                        console.error('Make sure you have included videojs');
	                    }
	                } else {
	                    if(!_this.videoLoaded && _this.core.s.autoplayFirstVideo) {
	                        _this.core.$slide.eq(index).find('.lg-html5').get(0).play();
	                    }
	                }
	            }
	        }

	        function onAferAppendSlide(event, index) {
	            /*jshint validthis:true */
	            var $videoCont = this.core.$slide.eq(index).find('.lg-video-cont');
	            if (!$videoCont.hasClass('lg-has-iframe')) {
	                $videoCont.css('max-width', this.core.s.videoMaxWidth);
	                this.videoLoaded = true;
	            }
	        }

	        function onBeforeSlide(event, prevIndex, index) {
	            /*jshint validthis:true */
	            var _this = this;

	            var $videoSlide = _this.core.$slide.eq(prevIndex);
	            var youtubePlayer = $videoSlide.find('.lg-youtube').get(0);
	            var vimeoPlayer = $videoSlide.find('.lg-vimeo').get(0);
	            var dailymotionPlayer = $videoSlide.find('.lg-dailymotion').get(0);
	            var vkPlayer = $videoSlide.find('.lg-vk').get(0);
	            var html5Player = $videoSlide.find('.lg-html5').get(0);
	            if (youtubePlayer) {
	                youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
	            } else if (vimeoPlayer) {
	                try {
	                    $f(vimeoPlayer).api('pause');
	                } catch (e) {
	                    console.error('Make sure you have included froogaloop2 js');
	                }
	            } else if (dailymotionPlayer) {
	                dailymotionPlayer.contentWindow.postMessage('pause', '*');

	            } else if (html5Player) {
	                if (_this.core.s.videojs) {
	                    try {
	                        videojs(html5Player).pause();
	                    } catch (e) {
	                        console.error('Make sure you have included videojs');
	                    }
	                } else {
	                    html5Player.pause();
	                }
	            } if (vkPlayer) {
	                $(vkPlayer).attr('src', $(vkPlayer).attr('src').replace('&autoplay', '&noplay'));
	            }

	            var _src;
	            if (_this.core.s.dynamic) {
	                _src = _this.core.s.dynamicEl[index].src;
	            } else {
	                _src = _this.core.$items.eq(index).attr('href') || _this.core.$items.eq(index).attr('data-src');

	            }

	            var _isVideo = _this.core.isVideo(_src, index) || {};
	            if (_isVideo.youtube || _isVideo.vimeo || _isVideo.dailymotion || _isVideo.vk) {
	                _this.core.$outer.addClass('lg-hide-download');
	            }

	        }
	    
	        $.fn.lightGallery.modules.video = Video;
	    
	    })();

	}));
	});

	var lgAutoplay = createCommonjsModule(function (module, exports) {
	/*! lg-autoplay - v1.0.4 - 2017-03-28
	* http://sachinchoolur.github.io/lightGallery
	* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

	(function (root, factory) {
	  {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory(jquery);
	  }
	}(commonjsGlobal, function ($) {


	(function() {

	    var defaults = {
	        autoplay: false,
	        pause: 5000,
	        progressBar: true,
	        fourceAutoplay: false,
	        autoplayControls: true,
	        appendAutoplayControlsTo: '.lg-toolbar'
	    };

	    /**
	     * Creates the autoplay plugin.
	     * @param {object} element - lightGallery element
	     */
	    var Autoplay = function(element) {

	        this.core = $(element).data('lightGallery');

	        this.$el = $(element);

	        // Execute only if items are above 1
	        if (this.core.$items.length < 2) {
	            return false;
	        }

	        this.core.s = $.extend({}, defaults, this.core.s);
	        this.interval = false;

	        // Identify if slide happened from autoplay
	        this.fromAuto = true;

	        // Identify if autoplay canceled from touch/drag
	        this.canceledOnTouch = false;

	        // save fourceautoplay value
	        this.fourceAutoplayTemp = this.core.s.fourceAutoplay;

	        // do not allow progress bar if browser does not support css3 transitions
	        if (!this.core.doCss()) {
	            this.core.s.progressBar = false;
	        }

	        this.init();

	        return this;
	    };

	    Autoplay.prototype.init = function() {
	        var _this = this;

	        // append autoplay controls
	        if (_this.core.s.autoplayControls) {
	            _this.controls();
	        }

	        // Create progress bar
	        if (_this.core.s.progressBar) {
	            _this.core.$outer.find('.lg').append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>');
	        }

	        // set progress
	        _this.progress();

	        // Start autoplay
	        if (_this.core.s.autoplay) {
	            _this.$el.one('onSlideItemLoad.lg.tm', function() {
	                _this.startlAuto();
	            });
	        }

	        // cancel interval on touchstart and dragstart
	        _this.$el.on('onDragstart.lg.tm touchstart.lg.tm', function() {
	            if (_this.interval) {
	                _this.cancelAuto();
	                _this.canceledOnTouch = true;
	            }
	        });

	        // restore autoplay if autoplay canceled from touchstart / dragstart
	        _this.$el.on('onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm', function() {
	            if (!_this.interval && _this.canceledOnTouch) {
	                _this.startlAuto();
	                _this.canceledOnTouch = false;
	            }
	        });

	    };

	    Autoplay.prototype.progress = function() {

	        var _this = this;
	        var _$progressBar;
	        var _$progress;

	        _this.$el.on('onBeforeSlide.lg.tm', function() {

	            // start progress bar animation
	            if (_this.core.s.progressBar && _this.fromAuto) {
	                _$progressBar = _this.core.$outer.find('.lg-progress-bar');
	                _$progress = _this.core.$outer.find('.lg-progress');
	                if (_this.interval) {
	                    _$progress.removeAttr('style');
	                    _$progressBar.removeClass('lg-start');
	                    setTimeout(function() {
	                        _$progress.css('transition', 'width ' + (_this.core.s.speed + _this.core.s.pause) + 'ms ease 0s');
	                        _$progressBar.addClass('lg-start');
	                    }, 20);
	                }
	            }

	            // Remove setinterval if slide is triggered manually and fourceautoplay is false
	            if (!_this.fromAuto && !_this.core.s.fourceAutoplay) {
	                _this.cancelAuto();
	            }

	            _this.fromAuto = false;

	        });
	    };

	    // Manage autoplay via play/stop buttons
	    Autoplay.prototype.controls = function() {
	        var _this = this;
	        var _html = '<span class="lg-autoplay-button lg-icon"></span>';

	        // Append autoplay controls
	        $(this.core.s.appendAutoplayControlsTo).append(_html);

	        _this.core.$outer.find('.lg-autoplay-button').on('click.lg', function() {
	            if ($(_this.core.$outer).hasClass('lg-show-autoplay')) {
	                _this.cancelAuto();
	                _this.core.s.fourceAutoplay = false;
	            } else {
	                if (!_this.interval) {
	                    _this.startlAuto();
	                    _this.core.s.fourceAutoplay = _this.fourceAutoplayTemp;
	                }
	            }
	        });
	    };

	    // Autostart gallery
	    Autoplay.prototype.startlAuto = function() {
	        var _this = this;

	        _this.core.$outer.find('.lg-progress').css('transition', 'width ' + (_this.core.s.speed + _this.core.s.pause) + 'ms ease 0s');
	        _this.core.$outer.addClass('lg-show-autoplay');
	        _this.core.$outer.find('.lg-progress-bar').addClass('lg-start');

	        _this.interval = setInterval(function() {
	            if (_this.core.index + 1 < _this.core.$items.length) {
	                _this.core.index++;
	            } else {
	                _this.core.index = 0;
	            }

	            _this.fromAuto = true;
	            _this.core.slide(_this.core.index, false, false, 'next');
	        }, _this.core.s.speed + _this.core.s.pause);
	    };

	    // cancel Autostart
	    Autoplay.prototype.cancelAuto = function() {
	        clearInterval(this.interval);
	        this.interval = false;
	        this.core.$outer.find('.lg-progress').removeAttr('style');
	        this.core.$outer.removeClass('lg-show-autoplay');
	        this.core.$outer.find('.lg-progress-bar').removeClass('lg-start');
	    };

	    Autoplay.prototype.destroy = function() {

	        this.cancelAuto();
	        this.core.$outer.find('.lg-progress-bar').remove();
	    };

	    $.fn.lightGallery.modules.autoplay = Autoplay;

	})();


	}));
	});

	/**
	 * SSR Window 1.0.1
	 * Better handling for window object in SSR environment
	 * https://github.com/nolimits4web/ssr-window
	 *
	 * Copyright 2018, Vladimir Kharlampidi
	 *
	 * Licensed under MIT
	 *
	 * Released on: July 18, 2018
	 */
	var doc = (typeof document === 'undefined') ? {
	  body: {},
	  addEventListener: function addEventListener() {},
	  removeEventListener: function removeEventListener() {},
	  activeElement: {
	    blur: function blur() {},
	    nodeName: '',
	  },
	  querySelector: function querySelector() {
	    return null;
	  },
	  querySelectorAll: function querySelectorAll() {
	    return [];
	  },
	  getElementById: function getElementById() {
	    return null;
	  },
	  createEvent: function createEvent() {
	    return {
	      initEvent: function initEvent() {},
	    };
	  },
	  createElement: function createElement() {
	    return {
	      children: [],
	      childNodes: [],
	      style: {},
	      setAttribute: function setAttribute() {},
	      getElementsByTagName: function getElementsByTagName() {
	        return [];
	      },
	    };
	  },
	  location: { hash: '' },
	} : document; // eslint-disable-line

	var win = (typeof window === 'undefined') ? {
	  document: doc,
	  navigator: {
	    userAgent: '',
	  },
	  location: {},
	  history: {},
	  CustomEvent: function CustomEvent() {
	    return this;
	  },
	  addEventListener: function addEventListener() {},
	  removeEventListener: function removeEventListener() {},
	  getComputedStyle: function getComputedStyle() {
	    return {
	      getPropertyValue: function getPropertyValue() {
	        return '';
	      },
	    };
	  },
	  Image: function Image() {},
	  Date: function Date() {},
	  screen: {},
	  setTimeout: function setTimeout() {},
	  clearTimeout: function clearTimeout() {},
	} : window; // eslint-disable-line

	/**
	 * Dom7 2.1.3
	 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
	 * http://framework7.io/docs/dom.html
	 *
	 * Copyright 2019, Vladimir Kharlampidi
	 * The iDangero.us
	 * http://www.idangero.us/
	 *
	 * Licensed under MIT
	 *
	 * Released on: February 11, 2019
	 */

	class Dom7 {
	  constructor(arr) {
	    const self = this;
	    // Create array-like object
	    for (let i = 0; i < arr.length; i += 1) {
	      self[i] = arr[i];
	    }
	    self.length = arr.length;
	    // Return collection with methods
	    return this;
	  }
	}

	function $(selector, context) {
	  const arr = [];
	  let i = 0;
	  if (selector && !context) {
	    if (selector instanceof Dom7) {
	      return selector;
	    }
	  }
	  if (selector) {
	      // String
	    if (typeof selector === 'string') {
	      let els;
	      let tempParent;
	      const html = selector.trim();
	      if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
	        let toCreate = 'div';
	        if (html.indexOf('<li') === 0) toCreate = 'ul';
	        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
	        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
	        if (html.indexOf('<tbody') === 0) toCreate = 'table';
	        if (html.indexOf('<option') === 0) toCreate = 'select';
	        tempParent = doc.createElement(toCreate);
	        tempParent.innerHTML = html;
	        for (i = 0; i < tempParent.childNodes.length; i += 1) {
	          arr.push(tempParent.childNodes[i]);
	        }
	      } else {
	        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
	          // Pure ID selector
	          els = [doc.getElementById(selector.trim().split('#')[1])];
	        } else {
	          // Other selectors
	          els = (context || doc).querySelectorAll(selector.trim());
	        }
	        for (i = 0; i < els.length; i += 1) {
	          if (els[i]) arr.push(els[i]);
	        }
	      }
	    } else if (selector.nodeType || selector === win || selector === doc) {
	      // Node/element
	      arr.push(selector);
	    } else if (selector.length > 0 && selector[0].nodeType) {
	      // Array of elements or instance of Dom
	      for (i = 0; i < selector.length; i += 1) {
	        arr.push(selector[i]);
	      }
	    }
	  }
	  return new Dom7(arr);
	}

	$.fn = Dom7.prototype;
	$.Class = Dom7;
	$.Dom7 = Dom7;

	function unique(arr) {
	  const uniqueArray = [];
	  for (let i = 0; i < arr.length; i += 1) {
	    if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
	  }
	  return uniqueArray;
	}

	// Classes and attributes
	function addClass(className) {
	  if (typeof className === 'undefined') {
	    return this;
	  }
	  const classes = className.split(' ');
	  for (let i = 0; i < classes.length; i += 1) {
	    for (let j = 0; j < this.length; j += 1) {
	      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.add(classes[i]);
	    }
	  }
	  return this;
	}
	function removeClass(className) {
	  const classes = className.split(' ');
	  for (let i = 0; i < classes.length; i += 1) {
	    for (let j = 0; j < this.length; j += 1) {
	      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.remove(classes[i]);
	    }
	  }
	  return this;
	}
	function hasClass(className) {
	  if (!this[0]) return false;
	  return this[0].classList.contains(className);
	}
	function toggleClass(className) {
	  const classes = className.split(' ');
	  for (let i = 0; i < classes.length; i += 1) {
	    for (let j = 0; j < this.length; j += 1) {
	      if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') this[j].classList.toggle(classes[i]);
	    }
	  }
	  return this;
	}
	function attr(attrs, value) {
	  if (arguments.length === 1 && typeof attrs === 'string') {
	    // Get attr
	    if (this[0]) return this[0].getAttribute(attrs);
	    return undefined;
	  }

	  // Set attrs
	  for (let i = 0; i < this.length; i += 1) {
	    if (arguments.length === 2) {
	      // String
	      this[i].setAttribute(attrs, value);
	    } else {
	      // Object
	      // eslint-disable-next-line
	      for (const attrName in attrs) {
	        this[i][attrName] = attrs[attrName];
	        this[i].setAttribute(attrName, attrs[attrName]);
	      }
	    }
	  }
	  return this;
	}
	// eslint-disable-next-line
	function removeAttr(attr) {
	  for (let i = 0; i < this.length; i += 1) {
	    this[i].removeAttribute(attr);
	  }
	  return this;
	}
	function data(key, value) {
	  let el;
	  if (typeof value === 'undefined') {
	    el = this[0];
	    // Get value
	    if (el) {
	      if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
	        return el.dom7ElementDataStorage[key];
	      }

	      const dataKey = el.getAttribute(`data-${key}`);
	      if (dataKey) {
	        return dataKey;
	      }
	      return undefined;
	    }
	    return undefined;
	  }

	  // Set value
	  for (let i = 0; i < this.length; i += 1) {
	    el = this[i];
	    if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
	    el.dom7ElementDataStorage[key] = value;
	  }
	  return this;
	}
	// Transforms
	// eslint-disable-next-line
	function transform(transform) {
	  for (let i = 0; i < this.length; i += 1) {
	    const elStyle = this[i].style;
	    elStyle.webkitTransform = transform;
	    elStyle.transform = transform;
	  }
	  return this;
	}
	function transition(duration) {
	  if (typeof duration !== 'string') {
	    duration = `${duration}ms`; // eslint-disable-line
	  }
	  for (let i = 0; i < this.length; i += 1) {
	    const elStyle = this[i].style;
	    elStyle.webkitTransitionDuration = duration;
	    elStyle.transitionDuration = duration;
	  }
	  return this;
	}
	// Events
	function on(...args) {
	  let [eventType, targetSelector, listener, capture] = args;
	  if (typeof args[1] === 'function') {
	    [eventType, listener, capture] = args;
	    targetSelector = undefined;
	  }
	  if (!capture) capture = false;

	  function handleLiveEvent(e) {
	    const target = e.target;
	    if (!target) return;
	    const eventData = e.target.dom7EventData || [];
	    if (eventData.indexOf(e) < 0) {
	      eventData.unshift(e);
	    }
	    if ($(target).is(targetSelector)) listener.apply(target, eventData);
	    else {
	      const parents = $(target).parents(); // eslint-disable-line
	      for (let k = 0; k < parents.length; k += 1) {
	        if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
	      }
	    }
	  }
	  function handleEvent(e) {
	    const eventData = e && e.target ? e.target.dom7EventData || [] : [];
	    if (eventData.indexOf(e) < 0) {
	      eventData.unshift(e);
	    }
	    listener.apply(this, eventData);
	  }
	  const events = eventType.split(' ');
	  let j;
	  for (let i = 0; i < this.length; i += 1) {
	    const el = this[i];
	    if (!targetSelector) {
	      for (j = 0; j < events.length; j += 1) {
	        const event = events[j];
	        if (!el.dom7Listeners) el.dom7Listeners = {};
	        if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
	        el.dom7Listeners[event].push({
	          listener,
	          proxyListener: handleEvent,
	        });
	        el.addEventListener(event, handleEvent, capture);
	      }
	    } else {
	      // Live events
	      for (j = 0; j < events.length; j += 1) {
	        const event = events[j];
	        if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
	        if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
	        el.dom7LiveListeners[event].push({
	          listener,
	          proxyListener: handleLiveEvent,
	        });
	        el.addEventListener(event, handleLiveEvent, capture);
	      }
	    }
	  }
	  return this;
	}
	function off(...args) {
	  let [eventType, targetSelector, listener, capture] = args;
	  if (typeof args[1] === 'function') {
	    [eventType, listener, capture] = args;
	    targetSelector = undefined;
	  }
	  if (!capture) capture = false;

	  const events = eventType.split(' ');
	  for (let i = 0; i < events.length; i += 1) {
	    const event = events[i];
	    for (let j = 0; j < this.length; j += 1) {
	      const el = this[j];
	      let handlers;
	      if (!targetSelector && el.dom7Listeners) {
	        handlers = el.dom7Listeners[event];
	      } else if (targetSelector && el.dom7LiveListeners) {
	        handlers = el.dom7LiveListeners[event];
	      }
	      if (handlers && handlers.length) {
	        for (let k = handlers.length - 1; k >= 0; k -= 1) {
	          const handler = handlers[k];
	          if (listener && handler.listener === listener) {
	            el.removeEventListener(event, handler.proxyListener, capture);
	            handlers.splice(k, 1);
	          } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
	            el.removeEventListener(event, handler.proxyListener, capture);
	            handlers.splice(k, 1);
	          } else if (!listener) {
	            el.removeEventListener(event, handler.proxyListener, capture);
	            handlers.splice(k, 1);
	          }
	        }
	      }
	    }
	  }
	  return this;
	}
	function trigger(...args) {
	  const events = args[0].split(' ');
	  const eventData = args[1];
	  for (let i = 0; i < events.length; i += 1) {
	    const event = events[i];
	    for (let j = 0; j < this.length; j += 1) {
	      const el = this[j];
	      let evt;
	      try {
	        evt = new win.CustomEvent(event, {
	          detail: eventData,
	          bubbles: true,
	          cancelable: true,
	        });
	      } catch (e) {
	        evt = doc.createEvent('Event');
	        evt.initEvent(event, true, true);
	        evt.detail = eventData;
	      }
	      // eslint-disable-next-line
	      el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
	      el.dispatchEvent(evt);
	      el.dom7EventData = [];
	      delete el.dom7EventData;
	    }
	  }
	  return this;
	}
	function transitionEnd(callback) {
	  const events = ['webkitTransitionEnd', 'transitionend'];
	  const dom = this;
	  let i;
	  function fireCallBack(e) {
	    /* jshint validthis:true */
	    if (e.target !== this) return;
	    callback.call(this, e);
	    for (i = 0; i < events.length; i += 1) {
	      dom.off(events[i], fireCallBack);
	    }
	  }
	  if (callback) {
	    for (i = 0; i < events.length; i += 1) {
	      dom.on(events[i], fireCallBack);
	    }
	  }
	  return this;
	}
	function outerWidth(includeMargins) {
	  if (this.length > 0) {
	    if (includeMargins) {
	      // eslint-disable-next-line
	      const styles = this.styles();
	      return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
	    }
	    return this[0].offsetWidth;
	  }
	  return null;
	}
	function outerHeight(includeMargins) {
	  if (this.length > 0) {
	    if (includeMargins) {
	      // eslint-disable-next-line
	      const styles = this.styles();
	      return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
	    }
	    return this[0].offsetHeight;
	  }
	  return null;
	}
	function offset() {
	  if (this.length > 0) {
	    const el = this[0];
	    const box = el.getBoundingClientRect();
	    const body = doc.body;
	    const clientTop = el.clientTop || body.clientTop || 0;
	    const clientLeft = el.clientLeft || body.clientLeft || 0;
	    const scrollTop = el === win ? win.scrollY : el.scrollTop;
	    const scrollLeft = el === win ? win.scrollX : el.scrollLeft;
	    return {
	      top: (box.top + scrollTop) - clientTop,
	      left: (box.left + scrollLeft) - clientLeft,
	    };
	  }

	  return null;
	}
	function styles() {
	  if (this[0]) return win.getComputedStyle(this[0], null);
	  return {};
	}
	function css(props, value) {
	  let i;
	  if (arguments.length === 1) {
	    if (typeof props === 'string') {
	      if (this[0]) return win.getComputedStyle(this[0], null).getPropertyValue(props);
	    } else {
	      for (i = 0; i < this.length; i += 1) {
	        // eslint-disable-next-line
	        for (let prop in props) {
	          this[i].style[prop] = props[prop];
	        }
	      }
	      return this;
	    }
	  }
	  if (arguments.length === 2 && typeof props === 'string') {
	    for (i = 0; i < this.length; i += 1) {
	      this[i].style[props] = value;
	    }
	    return this;
	  }
	  return this;
	}
	// Iterate over the collection passing elements to `callback`
	function each(callback) {
	  // Don't bother continuing without a callback
	  if (!callback) return this;
	  // Iterate over the current collection
	  for (let i = 0; i < this.length; i += 1) {
	    // If the callback returns false
	    if (callback.call(this[i], i, this[i]) === false) {
	      // End the loop early
	      return this;
	    }
	  }
	  // Return `this` to allow chained DOM operations
	  return this;
	}
	function filter(callback) {
	  const matchedItems = [];
	  const dom = this;
	  for (let i = 0; i < dom.length; i += 1) {
	    if (callback.call(dom[i], i, dom[i])) matchedItems.push(dom[i]);
	  }
	  return new Dom7(matchedItems);
	}
	// eslint-disable-next-line
	function html(html) {
	  if (typeof html === 'undefined') {
	    return this[0] ? this[0].innerHTML : undefined;
	  }

	  for (let i = 0; i < this.length; i += 1) {
	    this[i].innerHTML = html;
	  }
	  return this;
	}
	// eslint-disable-next-line
	function text(text) {
	  if (typeof text === 'undefined') {
	    if (this[0]) {
	      return this[0].textContent.trim();
	    }
	    return null;
	  }

	  for (let i = 0; i < this.length; i += 1) {
	    this[i].textContent = text;
	  }
	  return this;
	}
	function is(selector) {
	  const el = this[0];
	  let compareWith;
	  let i;
	  if (!el || typeof selector === 'undefined') return false;
	  if (typeof selector === 'string') {
	    if (el.matches) return el.matches(selector);
	    else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
	    else if (el.msMatchesSelector) return el.msMatchesSelector(selector);

	    compareWith = $(selector);
	    for (i = 0; i < compareWith.length; i += 1) {
	      if (compareWith[i] === el) return true;
	    }
	    return false;
	  } else if (selector === doc) return el === doc;
	  else if (selector === win) return el === win;

	  if (selector.nodeType || selector instanceof Dom7) {
	    compareWith = selector.nodeType ? [selector] : selector;
	    for (i = 0; i < compareWith.length; i += 1) {
	      if (compareWith[i] === el) return true;
	    }
	    return false;
	  }
	  return false;
	}
	function index() {
	  let child = this[0];
	  let i;
	  if (child) {
	    i = 0;
	    // eslint-disable-next-line
	    while ((child = child.previousSibling) !== null) {
	      if (child.nodeType === 1) i += 1;
	    }
	    return i;
	  }
	  return undefined;
	}
	// eslint-disable-next-line
	function eq(index) {
	  if (typeof index === 'undefined') return this;
	  const length = this.length;
	  let returnIndex;
	  if (index > length - 1) {
	    return new Dom7([]);
	  }
	  if (index < 0) {
	    returnIndex = length + index;
	    if (returnIndex < 0) return new Dom7([]);
	    return new Dom7([this[returnIndex]]);
	  }
	  return new Dom7([this[index]]);
	}
	function append(...args) {
	  let newChild;

	  for (let k = 0; k < args.length; k += 1) {
	    newChild = args[k];
	    for (let i = 0; i < this.length; i += 1) {
	      if (typeof newChild === 'string') {
	        const tempDiv = doc.createElement('div');
	        tempDiv.innerHTML = newChild;
	        while (tempDiv.firstChild) {
	          this[i].appendChild(tempDiv.firstChild);
	        }
	      } else if (newChild instanceof Dom7) {
	        for (let j = 0; j < newChild.length; j += 1) {
	          this[i].appendChild(newChild[j]);
	        }
	      } else {
	        this[i].appendChild(newChild);
	      }
	    }
	  }

	  return this;
	}
	function prepend(newChild) {
	  let i;
	  let j;
	  for (i = 0; i < this.length; i += 1) {
	    if (typeof newChild === 'string') {
	      const tempDiv = doc.createElement('div');
	      tempDiv.innerHTML = newChild;
	      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
	        this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
	      }
	    } else if (newChild instanceof Dom7) {
	      for (j = 0; j < newChild.length; j += 1) {
	        this[i].insertBefore(newChild[j], this[i].childNodes[0]);
	      }
	    } else {
	      this[i].insertBefore(newChild, this[i].childNodes[0]);
	    }
	  }
	  return this;
	}
	function next(selector) {
	  if (this.length > 0) {
	    if (selector) {
	      if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
	        return new Dom7([this[0].nextElementSibling]);
	      }
	      return new Dom7([]);
	    }

	    if (this[0].nextElementSibling) return new Dom7([this[0].nextElementSibling]);
	    return new Dom7([]);
	  }
	  return new Dom7([]);
	}
	function nextAll(selector) {
	  const nextEls = [];
	  let el = this[0];
	  if (!el) return new Dom7([]);
	  while (el.nextElementSibling) {
	    const next = el.nextElementSibling; // eslint-disable-line
	    if (selector) {
	      if ($(next).is(selector)) nextEls.push(next);
	    } else nextEls.push(next);
	    el = next;
	  }
	  return new Dom7(nextEls);
	}
	function prev(selector) {
	  if (this.length > 0) {
	    const el = this[0];
	    if (selector) {
	      if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
	        return new Dom7([el.previousElementSibling]);
	      }
	      return new Dom7([]);
	    }

	    if (el.previousElementSibling) return new Dom7([el.previousElementSibling]);
	    return new Dom7([]);
	  }
	  return new Dom7([]);
	}
	function prevAll(selector) {
	  const prevEls = [];
	  let el = this[0];
	  if (!el) return new Dom7([]);
	  while (el.previousElementSibling) {
	    const prev = el.previousElementSibling; // eslint-disable-line
	    if (selector) {
	      if ($(prev).is(selector)) prevEls.push(prev);
	    } else prevEls.push(prev);
	    el = prev;
	  }
	  return new Dom7(prevEls);
	}
	function parent(selector) {
	  const parents = []; // eslint-disable-line
	  for (let i = 0; i < this.length; i += 1) {
	    if (this[i].parentNode !== null) {
	      if (selector) {
	        if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
	      } else {
	        parents.push(this[i].parentNode);
	      }
	    }
	  }
	  return $(unique(parents));
	}
	function parents(selector) {
	  const parents = []; // eslint-disable-line
	  for (let i = 0; i < this.length; i += 1) {
	    let parent = this[i].parentNode; // eslint-disable-line
	    while (parent) {
	      if (selector) {
	        if ($(parent).is(selector)) parents.push(parent);
	      } else {
	        parents.push(parent);
	      }
	      parent = parent.parentNode;
	    }
	  }
	  return $(unique(parents));
	}
	function closest(selector) {
	  let closest = this; // eslint-disable-line
	  if (typeof selector === 'undefined') {
	    return new Dom7([]);
	  }
	  if (!closest.is(selector)) {
	    closest = closest.parents(selector).eq(0);
	  }
	  return closest;
	}
	function find(selector) {
	  const foundElements = [];
	  for (let i = 0; i < this.length; i += 1) {
	    const found = this[i].querySelectorAll(selector);
	    for (let j = 0; j < found.length; j += 1) {
	      foundElements.push(found[j]);
	    }
	  }
	  return new Dom7(foundElements);
	}
	function children(selector) {
	  const children = []; // eslint-disable-line
	  for (let i = 0; i < this.length; i += 1) {
	    const childNodes = this[i].childNodes;

	    for (let j = 0; j < childNodes.length; j += 1) {
	      if (!selector) {
	        if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
	      } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
	        children.push(childNodes[j]);
	      }
	    }
	  }
	  return new Dom7(unique(children));
	}
	function remove() {
	  for (let i = 0; i < this.length; i += 1) {
	    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
	  }
	  return this;
	}
	function add(...args) {
	  const dom = this;
	  let i;
	  let j;
	  for (i = 0; i < args.length; i += 1) {
	    const toAdd = $(args[i]);
	    for (j = 0; j < toAdd.length; j += 1) {
	      dom[dom.length] = toAdd[j];
	      dom.length += 1;
	    }
	  }
	  return dom;
	}

	/**
	 * Swiper 5.0.4
	 * Most modern mobile touch slider and framework with hardware accelerated transitions
	 * http://swiperjs.com
	 *
	 * Copyright 2014-2019 Vladimir Kharlampidi
	 *
	 * Released under the MIT License
	 *
	 * Released on: September 30, 2019
	 */

	const Methods = {
	  addClass,
	  removeClass,
	  hasClass,
	  toggleClass,
	  attr,
	  removeAttr,
	  data,
	  transform,
	  transition: transition,
	  on,
	  off,
	  trigger,
	  transitionEnd: transitionEnd,
	  outerWidth,
	  outerHeight,
	  offset,
	  css,
	  each,
	  html,
	  text,
	  is,
	  index,
	  eq,
	  append,
	  prepend,
	  next,
	  nextAll,
	  prev,
	  prevAll,
	  parent,
	  parents,
	  closest,
	  find,
	  children,
	  filter,
	  remove,
	  add,
	  styles,
	};

	Object.keys(Methods).forEach((methodName) => {
	  $.fn[methodName] = $.fn[methodName] || Methods[methodName];
	});

	const Utils = {
	  deleteProps(obj) {
	    const object = obj;
	    Object.keys(object).forEach((key) => {
	      try {
	        object[key] = null;
	      } catch (e) {
	        // no getter for object
	      }
	      try {
	        delete object[key];
	      } catch (e) {
	        // something got wrong
	      }
	    });
	  },
	  nextTick(callback, delay = 0) {
	    return setTimeout(callback, delay);
	  },
	  now() {
	    return Date.now();
	  },
	  getTranslate(el, axis = 'x') {
	    let matrix;
	    let curTransform;
	    let transformMatrix;

	    const curStyle = win.getComputedStyle(el, null);

	    if (win.WebKitCSSMatrix) {
	      curTransform = curStyle.transform || curStyle.webkitTransform;
	      if (curTransform.split(',').length > 6) {
	        curTransform = curTransform.split(', ').map((a) => a.replace(',', '.')).join(', ');
	      }
	      // Some old versions of Webkit choke when 'none' is passed; pass
	      // empty string instead in this case
	      transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
	    } else {
	      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
	      matrix = transformMatrix.toString().split(',');
	    }

	    if (axis === 'x') {
	      // Latest Chrome and webkits Fix
	      if (win.WebKitCSSMatrix) curTransform = transformMatrix.m41;
	      // Crazy IE10 Matrix
	      else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
	      // Normal Browsers
	      else curTransform = parseFloat(matrix[4]);
	    }
	    if (axis === 'y') {
	      // Latest Chrome and webkits Fix
	      if (win.WebKitCSSMatrix) curTransform = transformMatrix.m42;
	      // Crazy IE10 Matrix
	      else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
	      // Normal Browsers
	      else curTransform = parseFloat(matrix[5]);
	    }
	    return curTransform || 0;
	  },
	  parseUrlQuery(url) {
	    const query = {};
	    let urlToParse = url || win.location.href;
	    let i;
	    let params;
	    let param;
	    let length;
	    if (typeof urlToParse === 'string' && urlToParse.length) {
	      urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
	      params = urlToParse.split('&').filter((paramsPart) => paramsPart !== '');
	      length = params.length;

	      for (i = 0; i < length; i += 1) {
	        param = params[i].replace(/#\S+/g, '').split('=');
	        query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
	      }
	    }
	    return query;
	  },
	  isObject(o) {
	    return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
	  },
	  extend(...args) {
	    const to = Object(args[0]);
	    for (let i = 1; i < args.length; i += 1) {
	      const nextSource = args[i];
	      if (nextSource !== undefined && nextSource !== null) {
	        const keysArray = Object.keys(Object(nextSource));
	        for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
	          const nextKey = keysArray[nextIndex];
	          const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
	          if (desc !== undefined && desc.enumerable) {
	            if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
	              Utils.extend(to[nextKey], nextSource[nextKey]);
	            } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
	              to[nextKey] = {};
	              Utils.extend(to[nextKey], nextSource[nextKey]);
	            } else {
	              to[nextKey] = nextSource[nextKey];
	            }
	          }
	        }
	      }
	    }
	    return to;
	  },
	};

	const Support = (function Support() {
	  return {
	    touch: (win.Modernizr && win.Modernizr.touch === true) || (function checkTouch() {
	      return !!((win.navigator.maxTouchPoints > 0) || ('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch));
	    }()),

	    pointerEvents: !!win.PointerEvent && ('maxTouchPoints' in win.navigator) && win.navigator.maxTouchPoints > 0,

	    observer: (function checkObserver() {
	      return ('MutationObserver' in win || 'WebkitMutationObserver' in win);
	    }()),

	    passiveListener: (function checkPassiveListener() {
	      let supportsPassive = false;
	      try {
	        const opts = Object.defineProperty({}, 'passive', {
	          // eslint-disable-next-line
	          get() {
	            supportsPassive = true;
	          },
	        });
	        win.addEventListener('testPassiveListener', null, opts);
	      } catch (e) {
	        // No support
	      }
	      return supportsPassive;
	    }()),

	    gestures: (function checkGestures() {
	      return 'ongesturestart' in win;
	    }()),
	  };
	}());

	class SwiperClass {
	  constructor(params = {}) {
	    const self = this;
	    self.params = params;

	    // Events
	    self.eventsListeners = {};

	    if (self.params && self.params.on) {
	      Object.keys(self.params.on).forEach((eventName) => {
	        self.on(eventName, self.params.on[eventName]);
	      });
	    }
	  }

	  on(events, handler, priority) {
	    const self = this;
	    if (typeof handler !== 'function') return self;
	    const method = priority ? 'unshift' : 'push';
	    events.split(' ').forEach((event) => {
	      if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
	      self.eventsListeners[event][method](handler);
	    });
	    return self;
	  }

	  once(events, handler, priority) {
	    const self = this;
	    if (typeof handler !== 'function') return self;
	    function onceHandler(...args) {
	      handler.apply(self, args);
	      self.off(events, onceHandler);
	      if (onceHandler.f7proxy) {
	        delete onceHandler.f7proxy;
	      }
	    }
	    onceHandler.f7proxy = handler;
	    return self.on(events, onceHandler, priority);
	  }

	  off(events, handler) {
	    const self = this;
	    if (!self.eventsListeners) return self;
	    events.split(' ').forEach((event) => {
	      if (typeof handler === 'undefined') {
	        self.eventsListeners[event] = [];
	      } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
	        self.eventsListeners[event].forEach((eventHandler, index) => {
	          if (eventHandler === handler || (eventHandler.f7proxy && eventHandler.f7proxy === handler)) {
	            self.eventsListeners[event].splice(index, 1);
	          }
	        });
	      }
	    });
	    return self;
	  }

	  emit(...args) {
	    const self = this;
	    if (!self.eventsListeners) return self;
	    let events;
	    let data;
	    let context;
	    if (typeof args[0] === 'string' || Array.isArray(args[0])) {
	      events = args[0];
	      data = args.slice(1, args.length);
	      context = self;
	    } else {
	      events = args[0].events;
	      data = args[0].data;
	      context = args[0].context || self;
	    }
	    const eventsArray = Array.isArray(events) ? events : events.split(' ');
	    eventsArray.forEach((event) => {
	      if (self.eventsListeners && self.eventsListeners[event]) {
	        const handlers = [];
	        self.eventsListeners[event].forEach((eventHandler) => {
	          handlers.push(eventHandler);
	        });
	        handlers.forEach((eventHandler) => {
	          eventHandler.apply(context, data);
	        });
	      }
	    });
	    return self;
	  }

	  useModulesParams(instanceParams) {
	    const instance = this;
	    if (!instance.modules) return;
	    Object.keys(instance.modules).forEach((moduleName) => {
	      const module = instance.modules[moduleName];
	      // Extend params
	      if (module.params) {
	        Utils.extend(instanceParams, module.params);
	      }
	    });
	  }

	  useModules(modulesParams = {}) {
	    const instance = this;
	    if (!instance.modules) return;
	    Object.keys(instance.modules).forEach((moduleName) => {
	      const module = instance.modules[moduleName];
	      const moduleParams = modulesParams[moduleName] || {};
	      // Extend instance methods and props
	      if (module.instance) {
	        Object.keys(module.instance).forEach((modulePropName) => {
	          const moduleProp = module.instance[modulePropName];
	          if (typeof moduleProp === 'function') {
	            instance[modulePropName] = moduleProp.bind(instance);
	          } else {
	            instance[modulePropName] = moduleProp;
	          }
	        });
	      }
	      // Add event listeners
	      if (module.on && instance.on) {
	        Object.keys(module.on).forEach((moduleEventName) => {
	          instance.on(moduleEventName, module.on[moduleEventName]);
	        });
	      }

	      // Module create callback
	      if (module.create) {
	        module.create.bind(instance)(moduleParams);
	      }
	    });
	  }

	  static set components(components) {
	    const Class = this;
	    if (!Class.use) return;
	    Class.use(components);
	  }

	  static installModule(module, ...params) {
	    const Class = this;
	    if (!Class.prototype.modules) Class.prototype.modules = {};
	    const name = module.name || (`${Object.keys(Class.prototype.modules).length}_${Utils.now()}`);
	    Class.prototype.modules[name] = module;
	    // Prototype
	    if (module.proto) {
	      Object.keys(module.proto).forEach((key) => {
	        Class.prototype[key] = module.proto[key];
	      });
	    }
	    // Class
	    if (module.static) {
	      Object.keys(module.static).forEach((key) => {
	        Class[key] = module.static[key];
	      });
	    }
	    // Callback
	    if (module.install) {
	      module.install.apply(Class, params);
	    }
	    return Class;
	  }

	  static use(module, ...params) {
	    const Class = this;
	    if (Array.isArray(module)) {
	      module.forEach((m) => Class.installModule(m));
	      return Class;
	    }
	    return Class.installModule(module, ...params);
	  }
	}

	function updateSize () {
	  const swiper = this;
	  let width;
	  let height;
	  const $el = swiper.$el;
	  if (typeof swiper.params.width !== 'undefined') {
	    width = swiper.params.width;
	  } else {
	    width = $el[0].clientWidth;
	  }
	  if (typeof swiper.params.height !== 'undefined') {
	    height = swiper.params.height;
	  } else {
	    height = $el[0].clientHeight;
	  }
	  if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
	    return;
	  }

	  // Subtract paddings
	  width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
	  height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);

	  Utils.extend(swiper, {
	    width,
	    height,
	    size: swiper.isHorizontal() ? width : height,
	  });
	}

	function updateSlides () {
	  const swiper = this;
	  const params = swiper.params;

	  const {
	    $wrapperEl, size: swiperSize, rtlTranslate: rtl, wrongRTL,
	  } = swiper;
	  const isVirtual = swiper.virtual && params.virtual.enabled;
	  const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
	  const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
	  const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
	  let snapGrid = [];
	  const slidesGrid = [];
	  const slidesSizesGrid = [];

	  function slidesForMargin(slideIndex) {
	    if (!params.cssMode) return true;
	    if (slideIndex === slides.length - 1) {
	      return false;
	    }
	    return true;
	  }

	  let offsetBefore = params.slidesOffsetBefore;
	  if (typeof offsetBefore === 'function') {
	    offsetBefore = params.slidesOffsetBefore.call(swiper);
	  }

	  let offsetAfter = params.slidesOffsetAfter;
	  if (typeof offsetAfter === 'function') {
	    offsetAfter = params.slidesOffsetAfter.call(swiper);
	  }

	  const previousSnapGridLength = swiper.snapGrid.length;
	  const previousSlidesGridLength = swiper.snapGrid.length;

	  let spaceBetween = params.spaceBetween;
	  let slidePosition = -offsetBefore;
	  let prevSlideSize = 0;
	  let index = 0;
	  if (typeof swiperSize === 'undefined') {
	    return;
	  }
	  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
	    spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
	  }

	  swiper.virtualSize = -spaceBetween;

	  // reset margins
	  if (rtl) slides.css({ marginLeft: '', marginTop: '' });
	  else slides.css({ marginRight: '', marginBottom: '' });

	  let slidesNumberEvenToRows;
	  if (params.slidesPerColumn > 1) {
	    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
	      slidesNumberEvenToRows = slidesLength;
	    } else {
	      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
	    }
	    if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
	      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
	    }
	  }

	  // Calc slides
	  let slideSize;
	  const slidesPerColumn = params.slidesPerColumn;
	  const slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
	  const numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
	  for (let i = 0; i < slidesLength; i += 1) {
	    slideSize = 0;
	    const slide = slides.eq(i);
	    if (params.slidesPerColumn > 1) {
	      // Set slides order
	      let newSlideOrderIndex;
	      let column;
	      let row;
	      if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
	        const groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
	        const slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
	        row = Math.floor(slideIndexInGroup / params.slidesPerGroup);
	        column = (slideIndexInGroup - row * params.slidesPerGroup) + groupIndex * params.slidesPerGroup;

	        newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
	        slide
	          .css({
	            '-webkit-box-ordinal-group': newSlideOrderIndex,
	            '-moz-box-ordinal-group': newSlideOrderIndex,
	            '-ms-flex-order': newSlideOrderIndex,
	            '-webkit-order': newSlideOrderIndex,
	            order: newSlideOrderIndex,
	          });
	      } else if (params.slidesPerColumnFill === 'column') {
	        column = Math.floor(i / slidesPerColumn);
	        row = i - (column * slidesPerColumn);
	        if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
	          row += 1;
	          if (row >= slidesPerColumn) {
	            row = 0;
	            column += 1;
	          }
	        }
	      } else {
	        row = Math.floor(i / slidesPerRow);
	        column = i - (row * slidesPerRow);
	      }
	      slide.css(
	        `margin-${swiper.isHorizontal() ? 'top' : 'left'}`,
	        (row !== 0 && params.spaceBetween) && (`${params.spaceBetween}px`)
	      );
	    }
	    if (slide.css('display') === 'none') continue; // eslint-disable-line

	    if (params.slidesPerView === 'auto') {
	      const slideStyles = win.getComputedStyle(slide[0], null);
	      const currentTransform = slide[0].style.transform;
	      const currentWebKitTransform = slide[0].style.webkitTransform;
	      if (currentTransform) {
	        slide[0].style.transform = 'none';
	      }
	      if (currentWebKitTransform) {
	        slide[0].style.webkitTransform = 'none';
	      }
	      if (params.roundLengths) {
	        slideSize = swiper.isHorizontal()
	          ? slide.outerWidth(true)
	          : slide.outerHeight(true);
	      } else {
	        // eslint-disable-next-line
	        if (swiper.isHorizontal()) {
	          const width = parseFloat(slideStyles.getPropertyValue('width'));
	          const paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
	          const paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
	          const marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
	          const marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
	          const boxSizing = slideStyles.getPropertyValue('box-sizing');
	          if (boxSizing && boxSizing === 'border-box') {
	            slideSize = width + marginLeft + marginRight;
	          } else {
	            slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
	          }
	        } else {
	          const height = parseFloat(slideStyles.getPropertyValue('height'));
	          const paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
	          const paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
	          const marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
	          const marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
	          const boxSizing = slideStyles.getPropertyValue('box-sizing');
	          if (boxSizing && boxSizing === 'border-box') {
	            slideSize = height + marginTop + marginBottom;
	          } else {
	            slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
	          }
	        }
	      }
	      if (currentTransform) {
	        slide[0].style.transform = currentTransform;
	      }
	      if (currentWebKitTransform) {
	        slide[0].style.webkitTransform = currentWebKitTransform;
	      }
	      if (params.roundLengths) slideSize = Math.floor(slideSize);
	    } else {
	      slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
	      if (params.roundLengths) slideSize = Math.floor(slideSize);

	      if (slides[i]) {
	        if (swiper.isHorizontal()) {
	          slides[i].style.width = `${slideSize}px`;
	        } else {
	          slides[i].style.height = `${slideSize}px`;
	        }
	      }
	    }
	    if (slides[i]) {
	      slides[i].swiperSlideSize = slideSize;
	    }
	    slidesSizesGrid.push(slideSize);


	    if (params.centeredSlides) {
	      slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
	      if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - (swiperSize / 2) - spaceBetween;
	      if (i === 0) slidePosition = slidePosition - (swiperSize / 2) - spaceBetween;
	      if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
	      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
	      if ((index) % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
	      slidesGrid.push(slidePosition);
	    } else {
	      if (params.roundLengths) slidePosition = Math.floor(slidePosition);
	      if ((index) % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
	      slidesGrid.push(slidePosition);
	      slidePosition = slidePosition + slideSize + spaceBetween;
	    }

	    swiper.virtualSize += slideSize + spaceBetween;

	    prevSlideSize = slideSize;

	    index += 1;
	  }
	  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
	  let newSlidesGrid;

	  if (
	    rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
	    $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` });
	  }
	  if (params.setWrapperSize) {
	    if (swiper.isHorizontal()) $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` });
	    else $wrapperEl.css({ height: `${swiper.virtualSize + params.spaceBetween}px` });
	  }

	  if (params.slidesPerColumn > 1) {
	    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
	    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
	    if (swiper.isHorizontal()) $wrapperEl.css({ width: `${swiper.virtualSize + params.spaceBetween}px` });
	    else $wrapperEl.css({ height: `${swiper.virtualSize + params.spaceBetween}px` });
	    if (params.centeredSlides) {
	      newSlidesGrid = [];
	      for (let i = 0; i < snapGrid.length; i += 1) {
	        let slidesGridItem = snapGrid[i];
	        if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
	        if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
	      }
	      snapGrid = newSlidesGrid;
	    }
	  }

	  // Remove last grid elements depending on width
	  if (!params.centeredSlides) {
	    newSlidesGrid = [];
	    for (let i = 0; i < snapGrid.length; i += 1) {
	      let slidesGridItem = snapGrid[i];
	      if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
	      if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
	        newSlidesGrid.push(slidesGridItem);
	      }
	    }
	    snapGrid = newSlidesGrid;
	    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
	      snapGrid.push(swiper.virtualSize - swiperSize);
	    }
	  }
	  if (snapGrid.length === 0) snapGrid = [0];

	  if (params.spaceBetween !== 0) {
	    if (swiper.isHorizontal()) {
	      if (rtl) slides.filter(slidesForMargin).css({ marginLeft: `${spaceBetween}px` });
	      else slides.filter(slidesForMargin).css({ marginRight: `${spaceBetween}px` });
	    } else slides.filter(slidesForMargin).css({ marginBottom: `${spaceBetween}px` });
	  }

	  if (params.centerInsufficientSlides) {
	    let allSlidesSize = 0;
	    slidesSizesGrid.forEach((slideSizeValue) => {
	      allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
	    });
	    allSlidesSize -= params.spaceBetween;
	    if (allSlidesSize < swiperSize) {
	      const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
	      snapGrid.forEach((snap, snapIndex) => {
	        snapGrid[snapIndex] = snap - allSlidesOffset;
	      });
	      slidesGrid.forEach((snap, snapIndex) => {
	        slidesGrid[snapIndex] = snap + allSlidesOffset;
	      });
	    }
	  }

	  Utils.extend(swiper, {
	    slides,
	    snapGrid,
	    slidesGrid,
	    slidesSizesGrid,
	  });

	  if (slidesLength !== previousSlidesLength) {
	    swiper.emit('slidesLengthChange');
	  }
	  if (snapGrid.length !== previousSnapGridLength) {
	    if (swiper.params.watchOverflow) swiper.checkOverflow();
	    swiper.emit('snapGridLengthChange');
	  }
	  if (slidesGrid.length !== previousSlidesGridLength) {
	    swiper.emit('slidesGridLengthChange');
	  }

	  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
	    swiper.updateSlidesOffset();
	  }
	}

	function updateAutoHeight (speed) {
	  const swiper = this;
	  const activeSlides = [];
	  let newHeight = 0;
	  let i;
	  if (typeof speed === 'number') {
	    swiper.setTransition(speed);
	  } else if (speed === true) {
	    swiper.setTransition(swiper.params.speed);
	  }
	  // Find slides currently in view
	  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
	    for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
	      const index = swiper.activeIndex + i;
	      if (index > swiper.slides.length) break;
	      activeSlides.push(swiper.slides.eq(index)[0]);
	    }
	  } else {
	    activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
	  }

	  // Find new height from highest slide in view
	  for (i = 0; i < activeSlides.length; i += 1) {
	    if (typeof activeSlides[i] !== 'undefined') {
	      const height = activeSlides[i].offsetHeight;
	      newHeight = height > newHeight ? height : newHeight;
	    }
	  }

	  // Update Height
	  if (newHeight) swiper.$wrapperEl.css('height', `${newHeight}px`);
	}

	function updateSlidesOffset () {
	  const swiper = this;
	  const slides = swiper.slides;
	  for (let i = 0; i < slides.length; i += 1) {
	    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
	  }
	}

	function updateSlidesProgress (translate = (this && this.translate) || 0) {
	  const swiper = this;
	  const params = swiper.params;

	  const { slides, rtlTranslate: rtl } = swiper;

	  if (slides.length === 0) return;
	  if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();

	  let offsetCenter = -translate;
	  if (rtl) offsetCenter = translate;

	  // Visible Slides
	  slides.removeClass(params.slideVisibleClass);

	  swiper.visibleSlidesIndexes = [];
	  swiper.visibleSlides = [];

	  for (let i = 0; i < slides.length; i += 1) {
	    const slide = slides[i];
	    const slideProgress = (
	      (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
	    ) / (slide.swiperSlideSize + params.spaceBetween);
	    if (params.watchSlidesVisibility) {
	      const slideBefore = -(offsetCenter - slide.swiperSlideOffset);
	      const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
	      const isVisible = (slideBefore >= 0 && slideBefore < swiper.size - 1)
	                || (slideAfter > 1 && slideAfter <= swiper.size)
	                || (slideBefore <= 0 && slideAfter >= swiper.size);
	      if (isVisible) {
	        swiper.visibleSlides.push(slide);
	        swiper.visibleSlidesIndexes.push(i);
	        slides.eq(i).addClass(params.slideVisibleClass);
	      }
	    }
	    slide.progress = rtl ? -slideProgress : slideProgress;
	  }
	  swiper.visibleSlides = $(swiper.visibleSlides);
	}

	function updateProgress (translate) {
	  const swiper = this;
	  if (typeof translate === 'undefined') {
	    const multiplier = swiper.rtlTranslate ? -1 : 1;
	    // eslint-disable-next-line
	    translate = (swiper && swiper.translate && (swiper.translate * multiplier)) || 0;
	  }
	  const params = swiper.params;
	  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
	  let { progress, isBeginning, isEnd } = swiper;
	  const wasBeginning = isBeginning;
	  const wasEnd = isEnd;
	  if (translatesDiff === 0) {
	    progress = 0;
	    isBeginning = true;
	    isEnd = true;
	  } else {
	    progress = (translate - swiper.minTranslate()) / (translatesDiff);
	    isBeginning = progress <= 0;
	    isEnd = progress >= 1;
	  }
	  Utils.extend(swiper, {
	    progress,
	    isBeginning,
	    isEnd,
	  });

	  if (params.watchSlidesProgress || params.watchSlidesVisibility) swiper.updateSlidesProgress(translate);

	  if (isBeginning && !wasBeginning) {
	    swiper.emit('reachBeginning toEdge');
	  }
	  if (isEnd && !wasEnd) {
	    swiper.emit('reachEnd toEdge');
	  }
	  if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
	    swiper.emit('fromEdge');
	  }

	  swiper.emit('progress', progress);
	}

	function updateSlidesClasses () {
	  const swiper = this;

	  const {
	    slides, params, $wrapperEl, activeIndex, realIndex,
	  } = swiper;
	  const isVirtual = swiper.virtual && params.virtual.enabled;

	  slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);

	  let activeSlide;
	  if (isVirtual) {
	    activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
	  } else {
	    activeSlide = slides.eq(activeIndex);
	  }

	  // Active classes
	  activeSlide.addClass(params.slideActiveClass);

	  if (params.loop) {
	    // Duplicate to all looped slides
	    if (activeSlide.hasClass(params.slideDuplicateClass)) {
	      $wrapperEl
	        .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`)
	        .addClass(params.slideDuplicateActiveClass);
	    } else {
	      $wrapperEl
	        .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`)
	        .addClass(params.slideDuplicateActiveClass);
	    }
	  }
	  // Next Slide
	  let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);
	  if (params.loop && nextSlide.length === 0) {
	    nextSlide = slides.eq(0);
	    nextSlide.addClass(params.slideNextClass);
	  }
	  // Prev Slide
	  let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);
	  if (params.loop && prevSlide.length === 0) {
	    prevSlide = slides.eq(-1);
	    prevSlide.addClass(params.slidePrevClass);
	  }
	  if (params.loop) {
	    // Duplicate to all looped slides
	    if (nextSlide.hasClass(params.slideDuplicateClass)) {
	      $wrapperEl
	        .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`)
	        .addClass(params.slideDuplicateNextClass);
	    } else {
	      $wrapperEl
	        .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`)
	        .addClass(params.slideDuplicateNextClass);
	    }
	    if (prevSlide.hasClass(params.slideDuplicateClass)) {
	      $wrapperEl
	        .children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`)
	        .addClass(params.slideDuplicatePrevClass);
	    } else {
	      $wrapperEl
	        .children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`)
	        .addClass(params.slideDuplicatePrevClass);
	    }
	  }
	}

	function updateActiveIndex (newActiveIndex) {
	  const swiper = this;
	  const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
	  const {
	    slidesGrid, snapGrid, params, activeIndex: previousIndex, realIndex: previousRealIndex, snapIndex: previousSnapIndex,
	  } = swiper;
	  let activeIndex = newActiveIndex;
	  let snapIndex;
	  if (typeof activeIndex === 'undefined') {
	    for (let i = 0; i < slidesGrid.length; i += 1) {
	      if (typeof slidesGrid[i + 1] !== 'undefined') {
	        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
	          activeIndex = i;
	        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
	          activeIndex = i + 1;
	        }
	      } else if (translate >= slidesGrid[i]) {
	        activeIndex = i;
	      }
	    }
	    // Normalize slideIndex
	    if (params.normalizeSlideIndex) {
	      if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
	    }
	  }
	  if (snapGrid.indexOf(translate) >= 0) {
	    snapIndex = snapGrid.indexOf(translate);
	  } else {
	    snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
	  }
	  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
	  if (activeIndex === previousIndex) {
	    if (snapIndex !== previousSnapIndex) {
	      swiper.snapIndex = snapIndex;
	      swiper.emit('snapIndexChange');
	    }
	    return;
	  }

	  // Get real index
	  const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);

	  Utils.extend(swiper, {
	    snapIndex,
	    realIndex,
	    previousIndex,
	    activeIndex,
	  });
	  swiper.emit('activeIndexChange');
	  swiper.emit('snapIndexChange');
	  if (previousRealIndex !== realIndex) {
	    swiper.emit('realIndexChange');
	  }
	  if (swiper.initialized || swiper.runCallbacksOnInit) {
	    swiper.emit('slideChange');
	  }
	}

	function updateClickedSlide (e) {
	  const swiper = this;
	  const params = swiper.params;
	  const slide = $(e.target).closest(`.${params.slideClass}`)[0];
	  let slideFound = false;
	  if (slide) {
	    for (let i = 0; i < swiper.slides.length; i += 1) {
	      if (swiper.slides[i] === slide) slideFound = true;
	    }
	  }

	  if (slide && slideFound) {
	    swiper.clickedSlide = slide;
	    if (swiper.virtual && swiper.params.virtual.enabled) {
	      swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
	    } else {
	      swiper.clickedIndex = $(slide).index();
	    }
	  } else {
	    swiper.clickedSlide = undefined;
	    swiper.clickedIndex = undefined;
	    return;
	  }
	  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
	    swiper.slideToClickedSlide();
	  }
	}

	var update = {
	  updateSize,
	  updateSlides,
	  updateAutoHeight,
	  updateSlidesOffset,
	  updateSlidesProgress,
	  updateProgress,
	  updateSlidesClasses,
	  updateActiveIndex,
	  updateClickedSlide,
	};

	function getTranslate (axis = this.isHorizontal() ? 'x' : 'y') {
	  const swiper = this;

	  const {
	    params, rtlTranslate: rtl, translate, $wrapperEl,
	  } = swiper;

	  if (params.virtualTranslate) {
	    return rtl ? -translate : translate;
	  }
	  if (params.cssMode) {
	    return translate;
	  }

	  let currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
	  if (rtl) currentTranslate = -currentTranslate;

	  return currentTranslate || 0;
	}

	function setTranslate (translate, byController) {
	  const swiper = this;
	  const {
	    rtlTranslate: rtl, params, $wrapperEl, wrapperEl, progress,
	  } = swiper;
	  let x = 0;
	  let y = 0;
	  const z = 0;

	  if (swiper.isHorizontal()) {
	    x = rtl ? -translate : translate;
	  } else {
	    y = translate;
	  }

	  if (params.roundLengths) {
	    x = Math.floor(x);
	    y = Math.floor(y);
	  }

	  if (params.cssMode) {
	    wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
	  } else if (!params.virtualTranslate) {
	    $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
	  }
	  swiper.previousTranslate = swiper.translate;
	  swiper.translate = swiper.isHorizontal() ? x : y;

	  // Check if we need to update progress
	  let newProgress;
	  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
	  if (translatesDiff === 0) {
	    newProgress = 0;
	  } else {
	    newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
	  }
	  if (newProgress !== progress) {
	    swiper.updateProgress(translate);
	  }

	  swiper.emit('setTranslate', swiper.translate, byController);
	}

	function minTranslate () {
	  return (-this.snapGrid[0]);
	}

	function maxTranslate () {
	  return (-this.snapGrid[this.snapGrid.length - 1]);
	}

	var translate = {
	  getTranslate,
	  setTranslate,
	  minTranslate,
	  maxTranslate,
	};

	function setTransition (duration, byController) {
	  const swiper = this;

	  if (!swiper.params.cssMode) {
	    swiper.$wrapperEl.transition(duration);
	  }

	  swiper.emit('setTransition', duration, byController);
	}

	function transitionStart (runCallbacks = true, direction) {
	  const swiper = this;
	  const { activeIndex, params, previousIndex } = swiper;
	  if (params.cssMode) return;
	  if (params.autoHeight) {
	    swiper.updateAutoHeight();
	  }

	  let dir = direction;
	  if (!dir) {
	    if (activeIndex > previousIndex) dir = 'next';
	    else if (activeIndex < previousIndex) dir = 'prev';
	    else dir = 'reset';
	  }

	  swiper.emit('transitionStart');

	  if (runCallbacks && activeIndex !== previousIndex) {
	    if (dir === 'reset') {
	      swiper.emit('slideResetTransitionStart');
	      return;
	    }
	    swiper.emit('slideChangeTransitionStart');
	    if (dir === 'next') {
	      swiper.emit('slideNextTransitionStart');
	    } else {
	      swiper.emit('slidePrevTransitionStart');
	    }
	  }
	}

	function transitionEnd$1 (runCallbacks = true, direction) {
	  const swiper = this;
	  const { activeIndex, previousIndex, params } = swiper;
	  swiper.animating = false;
	  if (params.cssMode) return;
	  swiper.setTransition(0);

	  let dir = direction;
	  if (!dir) {
	    if (activeIndex > previousIndex) dir = 'next';
	    else if (activeIndex < previousIndex) dir = 'prev';
	    else dir = 'reset';
	  }

	  swiper.emit('transitionEnd');

	  if (runCallbacks && activeIndex !== previousIndex) {
	    if (dir === 'reset') {
	      swiper.emit('slideResetTransitionEnd');
	      return;
	    }
	    swiper.emit('slideChangeTransitionEnd');
	    if (dir === 'next') {
	      swiper.emit('slideNextTransitionEnd');
	    } else {
	      swiper.emit('slidePrevTransitionEnd');
	    }
	  }
	}

	var transition$1 = {
	  setTransition,
	  transitionStart,
	  transitionEnd: transitionEnd$1,
	};

	function slideTo (index = 0, speed = this.params.speed, runCallbacks = true, internal) {
	  const swiper = this;
	  let slideIndex = index;
	  if (slideIndex < 0) slideIndex = 0;

	  const {
	    params, snapGrid, slidesGrid, previousIndex, activeIndex, rtlTranslate: rtl, wrapperEl,
	  } = swiper;
	  if (swiper.animating && params.preventInteractionOnTransition) {
	    return false;
	  }

	  let snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
	  if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

	  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
	    swiper.emit('beforeSlideChangeStart');
	  }

	  const translate = -snapGrid[snapIndex];

	  // Update progress
	  swiper.updateProgress(translate);

	  // Normalize slideIndex
	  if (params.normalizeSlideIndex) {
	    for (let i = 0; i < slidesGrid.length; i += 1) {
	      if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
	        slideIndex = i;
	      }
	    }
	  }
	  // Directions locks
	  if (swiper.initialized && slideIndex !== activeIndex) {
	    if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
	      return false;
	    }
	    if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
	      if ((activeIndex || 0) !== slideIndex) return false;
	    }
	  }

	  let direction;
	  if (slideIndex > activeIndex) direction = 'next';
	  else if (slideIndex < activeIndex) direction = 'prev';
	  else direction = 'reset';


	  // Update Index
	  if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
	    swiper.updateActiveIndex(slideIndex);
	    // Update Height
	    if (params.autoHeight) {
	      swiper.updateAutoHeight();
	    }
	    swiper.updateSlidesClasses();
	    if (params.effect !== 'slide') {
	      swiper.setTranslate(translate);
	    }
	    if (direction !== 'reset') {
	      swiper.transitionStart(runCallbacks, direction);
	      swiper.transitionEnd(runCallbacks, direction);
	    }
	    return false;
	  }
	  if (params.cssMode) {
	    const isH = swiper.isHorizontal();
	    if (speed === 0) {
	      wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -translate;
	    } else {
	      // eslint-disable-next-line
	      if (wrapperEl.scrollTo) {
	        wrapperEl.scrollTo({
	          [isH ? 'left' : 'top']: -translate,
	          behavior: 'smooth',
	        });
	      } else {
	        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -translate;
	      }
	    }
	    return true;
	  }

	  if (speed === 0) {
	    swiper.setTransition(0);
	    swiper.setTranslate(translate);
	    swiper.updateActiveIndex(slideIndex);
	    swiper.updateSlidesClasses();
	    swiper.emit('beforeTransitionStart', speed, internal);
	    swiper.transitionStart(runCallbacks, direction);
	    swiper.transitionEnd(runCallbacks, direction);
	  } else {
	    swiper.setTransition(speed);
	    swiper.setTranslate(translate);
	    swiper.updateActiveIndex(slideIndex);
	    swiper.updateSlidesClasses();
	    swiper.emit('beforeTransitionStart', speed, internal);
	    swiper.transitionStart(runCallbacks, direction);
	    if (!swiper.animating) {
	      swiper.animating = true;
	      if (!swiper.onSlideToWrapperTransitionEnd) {
	        swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
	          if (!swiper || swiper.destroyed) return;
	          if (e.target !== this) return;
	          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
	          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
	          swiper.onSlideToWrapperTransitionEnd = null;
	          delete swiper.onSlideToWrapperTransitionEnd;
	          swiper.transitionEnd(runCallbacks, direction);
	        };
	      }
	      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
	      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
	    }
	  }

	  return true;
	}

	function slideToLoop (index = 0, speed = this.params.speed, runCallbacks = true, internal) {
	  const swiper = this;
	  let newIndex = index;
	  if (swiper.params.loop) {
	    newIndex += swiper.loopedSlides;
	  }

	  return swiper.slideTo(newIndex, speed, runCallbacks, internal);
	}

	/* eslint no-unused-vars: "off" */
	function slideNext (speed = this.params.speed, runCallbacks = true, internal) {
	  const swiper = this;
	  const { params, animating } = swiper;
	  if (params.loop) {
	    if (animating) return false;
	    swiper.loopFix();
	    // eslint-disable-next-line
	    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
	    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
	  }
	  return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
	}

	/* eslint no-unused-vars: "off" */
	function slidePrev (speed = this.params.speed, runCallbacks = true, internal) {
	  const swiper = this;
	  const {
	    params, animating, snapGrid, slidesGrid, rtlTranslate,
	  } = swiper;

	  if (params.loop) {
	    if (animating) return false;
	    swiper.loopFix();
	    // eslint-disable-next-line
	    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
	  }
	  const translate = rtlTranslate ? swiper.translate : -swiper.translate;
	  function normalize(val) {
	    if (val < 0) return -Math.floor(Math.abs(val));
	    return Math.floor(val);
	  }
	  const normalizedTranslate = normalize(translate);
	  const normalizedSnapGrid = snapGrid.map((val) => normalize(val));
	  const normalizedSlidesGrid = slidesGrid.map((val) => normalize(val));

	  const currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
	  let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
	  if (typeof prevSnap === 'undefined' && params.cssMode) {
	    snapGrid.forEach((snap) => {
	      if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
	    });
	  }
	  let prevIndex;
	  if (typeof prevSnap !== 'undefined') {
	    prevIndex = slidesGrid.indexOf(prevSnap);
	    if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
	  }
	  return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
	}

	/* eslint no-unused-vars: "off" */
	function slideReset (speed = this.params.speed, runCallbacks = true, internal) {
	  const swiper = this;
	  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
	}

	/* eslint no-unused-vars: "off" */
	function slideToClosest (speed = this.params.speed, runCallbacks = true, internal) {
	  const swiper = this;
	  let index = swiper.activeIndex;
	  const snapIndex = Math.floor(index / swiper.params.slidesPerGroup);

	  if (snapIndex < swiper.snapGrid.length - 1) {
	    const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

	    const currentSnap = swiper.snapGrid[snapIndex];
	    const nextSnap = swiper.snapGrid[snapIndex + 1];

	    if ((translate - currentSnap) > (nextSnap - currentSnap) / 2) {
	      index = swiper.params.slidesPerGroup;
	    }
	  }

	  return swiper.slideTo(index, speed, runCallbacks, internal);
	}

	function slideToClickedSlide () {
	  const swiper = this;
	  const { params, $wrapperEl } = swiper;

	  const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
	  let slideToIndex = swiper.clickedIndex;
	  let realIndex;
	  if (params.loop) {
	    if (swiper.animating) return;
	    realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
	    if (params.centeredSlides) {
	      if (
	        (slideToIndex < swiper.loopedSlides - (slidesPerView / 2))
	        || (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
	      ) {
	        swiper.loopFix();
	        slideToIndex = $wrapperEl
	          .children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`)
	          .eq(0)
	          .index();

	        Utils.nextTick(() => {
	          swiper.slideTo(slideToIndex);
	        });
	      } else {
	        swiper.slideTo(slideToIndex);
	      }
	    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
	      swiper.loopFix();
	      slideToIndex = $wrapperEl
	        .children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`)
	        .eq(0)
	        .index();

	      Utils.nextTick(() => {
	        swiper.slideTo(slideToIndex);
	      });
	    } else {
	      swiper.slideTo(slideToIndex);
	    }
	  } else {
	    swiper.slideTo(slideToIndex);
	  }
	}

	var slide = {
	  slideTo,
	  slideToLoop,
	  slideNext,
	  slidePrev,
	  slideReset,
	  slideToClosest,
	  slideToClickedSlide,
	};

	function loopCreate () {
	  const swiper = this;
	  const { params, $wrapperEl } = swiper;
	  // Remove duplicated slides
	  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();

	  let slides = $wrapperEl.children(`.${params.slideClass}`);

	  if (params.loopFillGroupWithBlank) {
	    const blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
	    if (blankSlidesNum !== params.slidesPerGroup) {
	      for (let i = 0; i < blankSlidesNum; i += 1) {
	        const blankNode = $(doc.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
	        $wrapperEl.append(blankNode);
	      }
	      slides = $wrapperEl.children(`.${params.slideClass}`);
	    }
	  }

	  if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;

	  swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
	  swiper.loopedSlides += params.loopAdditionalSlides;
	  if (swiper.loopedSlides > slides.length) {
	    swiper.loopedSlides = slides.length;
	  }

	  const prependSlides = [];
	  const appendSlides = [];
	  slides.each((index, el) => {
	    const slide = $(el);
	    if (index < swiper.loopedSlides) appendSlides.push(el);
	    if (index < slides.length && index >= slides.length - swiper.loopedSlides) prependSlides.push(el);
	    slide.attr('data-swiper-slide-index', index);
	  });
	  for (let i = 0; i < appendSlides.length; i += 1) {
	    $wrapperEl.append($(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
	  }
	  for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
	    $wrapperEl.prepend($(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
	  }
	}

	function loopFix () {
	  const swiper = this;
	  const {
	    params, activeIndex, slides, loopedSlides, allowSlidePrev, allowSlideNext, snapGrid, rtlTranslate: rtl,
	  } = swiper;
	  let newIndex;
	  swiper.allowSlidePrev = true;
	  swiper.allowSlideNext = true;

	  const snapTranslate = -snapGrid[activeIndex];
	  const diff = snapTranslate - swiper.getTranslate();


	  // Fix For Negative Oversliding
	  if (activeIndex < loopedSlides) {
	    newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
	    newIndex += loopedSlides;
	    const slideChanged = swiper.slideTo(newIndex, 0, false, true);
	    if (slideChanged && diff !== 0) {
	      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
	    }
	  } else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex >= slides.length - loopedSlides)) {
	    // Fix For Positive Oversliding
	    newIndex = -slides.length + activeIndex + loopedSlides;
	    newIndex += loopedSlides;
	    const slideChanged = swiper.slideTo(newIndex, 0, false, true);
	    if (slideChanged && diff !== 0) {
	      swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
	    }
	  }
	  swiper.allowSlidePrev = allowSlidePrev;
	  swiper.allowSlideNext = allowSlideNext;
	}

	function loopDestroy () {
	  const swiper = this;
	  const { $wrapperEl, params, slides } = swiper;
	  $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
	  slides.removeAttr('data-swiper-slide-index');
	}

	var loop = {
	  loopCreate,
	  loopFix,
	  loopDestroy,
	};

	function setGrabCursor (moving) {
	  const swiper = this;
	  if (Support.touch || !swiper.params.simulateTouch || (swiper.params.watchOverflow && swiper.isLocked) || swiper.params.cssMode) return;
	  const el = swiper.el;
	  el.style.cursor = 'move';
	  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
	  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
	  el.style.cursor = moving ? 'grabbing' : 'grab';
	}

	function unsetGrabCursor () {
	  const swiper = this;
	  if (Support.touch || (swiper.params.watchOverflow && swiper.isLocked) || swiper.params.cssMode) return;
	  swiper.el.style.cursor = '';
	}

	var grabCursor = {
	  setGrabCursor,
	  unsetGrabCursor,
	};

	function appendSlide (slides) {
	  const swiper = this;
	  const { $wrapperEl, params } = swiper;
	  if (params.loop) {
	    swiper.loopDestroy();
	  }
	  if (typeof slides === 'object' && 'length' in slides) {
	    for (let i = 0; i < slides.length; i += 1) {
	      if (slides[i]) $wrapperEl.append(slides[i]);
	    }
	  } else {
	    $wrapperEl.append(slides);
	  }
	  if (params.loop) {
	    swiper.loopCreate();
	  }
	  if (!(params.observer && Support.observer)) {
	    swiper.update();
	  }
	}

	function prependSlide (slides) {
	  const swiper = this;
	  const { params, $wrapperEl, activeIndex } = swiper;

	  if (params.loop) {
	    swiper.loopDestroy();
	  }
	  let newActiveIndex = activeIndex + 1;
	  if (typeof slides === 'object' && 'length' in slides) {
	    for (let i = 0; i < slides.length; i += 1) {
	      if (slides[i]) $wrapperEl.prepend(slides[i]);
	    }
	    newActiveIndex = activeIndex + slides.length;
	  } else {
	    $wrapperEl.prepend(slides);
	  }
	  if (params.loop) {
	    swiper.loopCreate();
	  }
	  if (!(params.observer && Support.observer)) {
	    swiper.update();
	  }
	  swiper.slideTo(newActiveIndex, 0, false);
	}

	function addSlide (index, slides) {
	  const swiper = this;
	  const { $wrapperEl, params, activeIndex } = swiper;
	  let activeIndexBuffer = activeIndex;
	  if (params.loop) {
	    activeIndexBuffer -= swiper.loopedSlides;
	    swiper.loopDestroy();
	    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
	  }
	  const baseLength = swiper.slides.length;
	  if (index <= 0) {
	    swiper.prependSlide(slides);
	    return;
	  }
	  if (index >= baseLength) {
	    swiper.appendSlide(slides);
	    return;
	  }
	  let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;

	  const slidesBuffer = [];
	  for (let i = baseLength - 1; i >= index; i -= 1) {
	    const currentSlide = swiper.slides.eq(i);
	    currentSlide.remove();
	    slidesBuffer.unshift(currentSlide);
	  }

	  if (typeof slides === 'object' && 'length' in slides) {
	    for (let i = 0; i < slides.length; i += 1) {
	      if (slides[i]) $wrapperEl.append(slides[i]);
	    }
	    newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
	  } else {
	    $wrapperEl.append(slides);
	  }

	  for (let i = 0; i < slidesBuffer.length; i += 1) {
	    $wrapperEl.append(slidesBuffer[i]);
	  }

	  if (params.loop) {
	    swiper.loopCreate();
	  }
	  if (!(params.observer && Support.observer)) {
	    swiper.update();
	  }
	  if (params.loop) {
	    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
	  } else {
	    swiper.slideTo(newActiveIndex, 0, false);
	  }
	}

	function removeSlide (slidesIndexes) {
	  const swiper = this;
	  const { params, $wrapperEl, activeIndex } = swiper;

	  let activeIndexBuffer = activeIndex;
	  if (params.loop) {
	    activeIndexBuffer -= swiper.loopedSlides;
	    swiper.loopDestroy();
	    swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
	  }
	  let newActiveIndex = activeIndexBuffer;
	  let indexToRemove;

	  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
	    for (let i = 0; i < slidesIndexes.length; i += 1) {
	      indexToRemove = slidesIndexes[i];
	      if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
	      if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
	    }
	    newActiveIndex = Math.max(newActiveIndex, 0);
	  } else {
	    indexToRemove = slidesIndexes;
	    if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
	    if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
	    newActiveIndex = Math.max(newActiveIndex, 0);
	  }

	  if (params.loop) {
	    swiper.loopCreate();
	  }

	  if (!(params.observer && Support.observer)) {
	    swiper.update();
	  }
	  if (params.loop) {
	    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
	  } else {
	    swiper.slideTo(newActiveIndex, 0, false);
	  }
	}

	function removeAllSlides () {
	  const swiper = this;

	  const slidesIndexes = [];
	  for (let i = 0; i < swiper.slides.length; i += 1) {
	    slidesIndexes.push(i);
	  }
	  swiper.removeSlide(slidesIndexes);
	}

	var manipulation = {
	  appendSlide,
	  prependSlide,
	  addSlide,
	  removeSlide,
	  removeAllSlides,
	};

	const Device = (function Device() {
	  const platform = win.navigator.platform;
	  const ua = win.navigator.userAgent;

	  const device = {
	    ios: false,
	    android: false,
	    androidChrome: false,
	    desktop: false,
	    iphone: false,
	    ipod: false,
	    ipad: false,
	    edge: false,
	    ie: false,
	    firefox: false,
	    macos: false,
	    windows: false,
	    cordova: !!(win.cordova || win.phonegap),
	    phonegap: !!(win.cordova || win.phonegap),
	    electron: false,
	  };

	  const screenWidth = win.screen.width;
	  const screenHeight = win.screen.height;

	  const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
	  let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
	  const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
	  const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
	  const ie = ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
	  const edge = ua.indexOf('Edge/') >= 0;
	  const firefox = ua.indexOf('Gecko/') >= 0 && ua.indexOf('Firefox/') >= 0;
	  const windows = platform === 'Win32';
	  const electron = ua.toLowerCase().indexOf('electron') >= 0;
	  let macos = platform === 'MacIntel';

	  // iPadOs 13 fix
	  if (!ipad
	    && macos
	    && Support.touch
	    && (
	      (screenWidth === 1024 && screenHeight === 1366) // Pro 12.9
	      || (screenWidth === 834 && screenHeight === 1194) // Pro 11
	      || (screenWidth === 834 && screenHeight === 1112) // Pro 10.5
	      || (screenWidth === 768 && screenHeight === 1024) // other
	    )
	  ) {
	    ipad = ua.match(/(Version)\/([\d.]+)/);
	    macos = false;
	  }

	  device.ie = ie;
	  device.edge = edge;
	  device.firefox = firefox;

	  // Android
	  if (android && !windows) {
	    device.os = 'android';
	    device.osVersion = android[2];
	    device.android = true;
	    device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
	  }
	  if (ipad || iphone || ipod) {
	    device.os = 'ios';
	    device.ios = true;
	  }
	  // iOS
	  if (iphone && !ipod) {
	    device.osVersion = iphone[2].replace(/_/g, '.');
	    device.iphone = true;
	  }
	  if (ipad) {
	    device.osVersion = ipad[2].replace(/_/g, '.');
	    device.ipad = true;
	  }
	  if (ipod) {
	    device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
	    device.ipod = true;
	  }
	  // iOS 8+ changed UA
	  if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
	    if (device.osVersion.split('.')[0] === '10') {
	      device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
	    }
	  }

	  // Webview
	  device.webView = !!((iphone || ipad || ipod) && (ua.match(/.*AppleWebKit(?!.*Safari)/i) || win.navigator.standalone))
	    || (win.matchMedia && win.matchMedia('(display-mode: standalone)').matches);
	  device.webview = device.webView;
	  device.standalone = device.webView;

	  // Desktop
	  device.desktop = !(device.ios || device.android) || electron;
	  if (device.desktop) {
	    device.electron = electron;
	    device.macos = macos;
	    device.windows = windows;
	    if (device.macos) {
	      device.os = 'macos';
	    }
	    if (device.windows) {
	      device.os = 'windows';
	    }
	  }

	  // Pixel Ratio
	  device.pixelRatio = win.devicePixelRatio || 1;

	  // Export object
	  return device;
	}());

	function onTouchStart$1 (event) {
	  const swiper = this;
	  const data = swiper.touchEventsData;
	  const { params, touches } = swiper;

	  if (swiper.animating && params.preventInteractionOnTransition) {
	    return;
	  }
	  let e = event;
	  if (e.originalEvent) e = e.originalEvent;
	  const $targetEl = $(e.target);

	  if (params.touchEventsTarget === 'wrapper') {
	    if (!$targetEl.closest(swiper.wrapperEl).length) return;
	  }
	  data.isTouchEvent = e.type === 'touchstart';
	  if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
	  if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
	  if (data.isTouched && data.isMoved) return;
	  if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`)[0]) {
	    swiper.allowClick = true;
	    return;
	  }
	  if (params.swipeHandler) {
	    if (!$targetEl.closest(params.swipeHandler)[0]) return;
	  }

	  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
	  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
	  const startX = touches.currentX;
	  const startY = touches.currentY;

	  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

	  const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
	  const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
	  if (
	    edgeSwipeDetection
	    && ((startX <= edgeSwipeThreshold)
	    || (startX >= win.screen.width - edgeSwipeThreshold))
	  ) {
	    return;
	  }

	  Utils.extend(data, {
	    isTouched: true,
	    isMoved: false,
	    allowTouchCallbacks: true,
	    isScrolling: undefined,
	    startMoving: undefined,
	  });

	  touches.startX = startX;
	  touches.startY = startY;
	  data.touchStartTime = Utils.now();
	  swiper.allowClick = true;
	  swiper.updateSize();
	  swiper.swipeDirection = undefined;
	  if (params.threshold > 0) data.allowThresholdMove = false;
	  if (e.type !== 'touchstart') {
	    let preventDefault = true;
	    if ($targetEl.is(data.formElements)) preventDefault = false;
	    if (
	      doc.activeElement
	      && $(doc.activeElement).is(data.formElements)
	      && doc.activeElement !== $targetEl[0]
	    ) {
	      doc.activeElement.blur();
	    }

	    const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
	    if (params.touchStartForcePreventDefault || shouldPreventDefault) {
	      e.preventDefault();
	    }
	  }
	  swiper.emit('touchStart', e);
	}

	function onTouchMove$1 (event) {
	  const swiper = this;
	  const data = swiper.touchEventsData;
	  const { params, touches, rtlTranslate: rtl } = swiper;
	  let e = event;
	  if (e.originalEvent) e = e.originalEvent;
	  if (!data.isTouched) {
	    if (data.startMoving && data.isScrolling) {
	      swiper.emit('touchMoveOpposite', e);
	    }
	    return;
	  }
	  if (data.isTouchEvent && e.type === 'mousemove') return;
	  const pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	  const pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	  if (e.preventedByNestedSwiper) {
	    touches.startX = pageX;
	    touches.startY = pageY;
	    return;
	  }
	  if (!swiper.allowTouchMove) {
	    // isMoved = true;
	    swiper.allowClick = false;
	    if (data.isTouched) {
	      Utils.extend(touches, {
	        startX: pageX,
	        startY: pageY,
	        currentX: pageX,
	        currentY: pageY,
	      });
	      data.touchStartTime = Utils.now();
	    }
	    return;
	  }
	  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
	    if (swiper.isVertical()) {
	      // Vertical
	      if (
	        (pageY < touches.startY && swiper.translate <= swiper.maxTranslate())
	        || (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
	      ) {
	        data.isTouched = false;
	        data.isMoved = false;
	        return;
	      }
	    } else if (
	      (pageX < touches.startX && swiper.translate <= swiper.maxTranslate())
	      || (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
	    ) {
	      return;
	    }
	  }
	  if (data.isTouchEvent && doc.activeElement) {
	    if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
	      data.isMoved = true;
	      swiper.allowClick = false;
	      return;
	    }
	  }
	  if (data.allowTouchCallbacks) {
	    swiper.emit('touchMove', e);
	  }
	  if (e.targetTouches && e.targetTouches.length > 1) return;

	  touches.currentX = pageX;
	  touches.currentY = pageY;

	  const diffX = touches.currentX - touches.startX;
	  const diffY = touches.currentY - touches.startY;
	  if (swiper.params.threshold && Math.sqrt((diffX ** 2) + (diffY ** 2)) < swiper.params.threshold) return;

	  if (typeof data.isScrolling === 'undefined') {
	    let touchAngle;
	    if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
	      data.isScrolling = false;
	    } else {
	      // eslint-disable-next-line
	      if ((diffX * diffX) + (diffY * diffY) >= 25) {
	        touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
	        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
	      }
	    }
	  }
	  if (data.isScrolling) {
	    swiper.emit('touchMoveOpposite', e);
	  }
	  if (typeof data.startMoving === 'undefined') {
	    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
	      data.startMoving = true;
	    }
	  }
	  if (data.isScrolling) {
	    data.isTouched = false;
	    return;
	  }
	  if (!data.startMoving) {
	    return;
	  }
	  swiper.allowClick = false;
	  if (!params.cssMode) {
	    e.preventDefault();
	  }
	  if (params.touchMoveStopPropagation && !params.nested) {
	    e.stopPropagation();
	  }

	  if (!data.isMoved) {
	    if (params.loop) {
	      swiper.loopFix();
	    }
	    data.startTranslate = swiper.getTranslate();
	    swiper.setTransition(0);
	    if (swiper.animating) {
	      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
	    }
	    data.allowMomentumBounce = false;
	    // Grab Cursor
	    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
	      swiper.setGrabCursor(true);
	    }
	    swiper.emit('sliderFirstMove', e);
	  }
	  swiper.emit('sliderMove', e);
	  data.isMoved = true;

	  let diff = swiper.isHorizontal() ? diffX : diffY;
	  touches.diff = diff;

	  diff *= params.touchRatio;
	  if (rtl) diff = -diff;

	  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
	  data.currentTranslate = diff + data.startTranslate;

	  let disableParentSwiper = true;
	  let resistanceRatio = params.resistanceRatio;
	  if (params.touchReleaseOnEdges) {
	    resistanceRatio = 0;
	  }
	  if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
	    disableParentSwiper = false;
	    if (params.resistance) data.currentTranslate = (swiper.minTranslate() - 1) + ((-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio);
	  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
	    disableParentSwiper = false;
	    if (params.resistance) data.currentTranslate = (swiper.maxTranslate() + 1) - ((swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio);
	  }

	  if (disableParentSwiper) {
	    e.preventedByNestedSwiper = true;
	  }

	  // Directions locks
	  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
	    data.currentTranslate = data.startTranslate;
	  }
	  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
	    data.currentTranslate = data.startTranslate;
	  }


	  // Threshold
	  if (params.threshold > 0) {
	    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
	      if (!data.allowThresholdMove) {
	        data.allowThresholdMove = true;
	        touches.startX = touches.currentX;
	        touches.startY = touches.currentY;
	        data.currentTranslate = data.startTranslate;
	        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
	        return;
	      }
	    } else {
	      data.currentTranslate = data.startTranslate;
	      return;
	    }
	  }

	  if (!params.followFinger || params.cssMode) return;

	  // Update active index in free mode
	  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
	    swiper.updateActiveIndex();
	    swiper.updateSlidesClasses();
	  }
	  if (params.freeMode) {
	    // Velocity
	    if (data.velocities.length === 0) {
	      data.velocities.push({
	        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
	        time: data.touchStartTime,
	      });
	    }
	    data.velocities.push({
	      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
	      time: Utils.now(),
	    });
	  }
	  // Update progress
	  swiper.updateProgress(data.currentTranslate);
	  // Update translate
	  swiper.setTranslate(data.currentTranslate);
	}

	function onTouchEnd$1 (event) {
	  const swiper = this;
	  const data = swiper.touchEventsData;

	  const {
	    params, touches, rtlTranslate: rtl, $wrapperEl, slidesGrid, snapGrid,
	  } = swiper;
	  let e = event;
	  if (e.originalEvent) e = e.originalEvent;
	  if (data.allowTouchCallbacks) {
	    swiper.emit('touchEnd', e);
	  }
	  data.allowTouchCallbacks = false;
	  if (!data.isTouched) {
	    if (data.isMoved && params.grabCursor) {
	      swiper.setGrabCursor(false);
	    }
	    data.isMoved = false;
	    data.startMoving = false;
	    return;
	  }
	  // Return Grab Cursor
	  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
	    swiper.setGrabCursor(false);
	  }

	  // Time diff
	  const touchEndTime = Utils.now();
	  const timeDiff = touchEndTime - data.touchStartTime;

	  // Tap, doubleTap, Click
	  if (swiper.allowClick) {
	    swiper.updateClickedSlide(e);
	    swiper.emit('tap click', e);
	    if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
	      swiper.emit('doubleTap doubleClick', e);
	    }
	  }

	  data.lastClickTime = Utils.now();
	  Utils.nextTick(() => {
	    if (!swiper.destroyed) swiper.allowClick = true;
	  });

	  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
	    data.isTouched = false;
	    data.isMoved = false;
	    data.startMoving = false;
	    return;
	  }
	  data.isTouched = false;
	  data.isMoved = false;
	  data.startMoving = false;

	  let currentPos;
	  if (params.followFinger) {
	    currentPos = rtl ? swiper.translate : -swiper.translate;
	  } else {
	    currentPos = -data.currentTranslate;
	  }

	  if (params.cssMode) {
	    return;
	  }

	  if (params.freeMode) {
	    if (currentPos < -swiper.minTranslate()) {
	      swiper.slideTo(swiper.activeIndex);
	      return;
	    }
	    if (currentPos > -swiper.maxTranslate()) {
	      if (swiper.slides.length < snapGrid.length) {
	        swiper.slideTo(snapGrid.length - 1);
	      } else {
	        swiper.slideTo(swiper.slides.length - 1);
	      }
	      return;
	    }

	    if (params.freeModeMomentum) {
	      if (data.velocities.length > 1) {
	        const lastMoveEvent = data.velocities.pop();
	        const velocityEvent = data.velocities.pop();

	        const distance = lastMoveEvent.position - velocityEvent.position;
	        const time = lastMoveEvent.time - velocityEvent.time;
	        swiper.velocity = distance / time;
	        swiper.velocity /= 2;
	        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
	          swiper.velocity = 0;
	        }
	        // this implies that the user stopped moving a finger then released.
	        // There would be no events with distance zero, so the last event is stale.
	        if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
	          swiper.velocity = 0;
	        }
	      } else {
	        swiper.velocity = 0;
	      }
	      swiper.velocity *= params.freeModeMomentumVelocityRatio;

	      data.velocities.length = 0;
	      let momentumDuration = 1000 * params.freeModeMomentumRatio;
	      const momentumDistance = swiper.velocity * momentumDuration;

	      let newPosition = swiper.translate + momentumDistance;
	      if (rtl) newPosition = -newPosition;

	      let doBounce = false;
	      let afterBouncePosition;
	      const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
	      let needsLoopFix;
	      if (newPosition < swiper.maxTranslate()) {
	        if (params.freeModeMomentumBounce) {
	          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
	            newPosition = swiper.maxTranslate() - bounceAmount;
	          }
	          afterBouncePosition = swiper.maxTranslate();
	          doBounce = true;
	          data.allowMomentumBounce = true;
	        } else {
	          newPosition = swiper.maxTranslate();
	        }
	        if (params.loop && params.centeredSlides) needsLoopFix = true;
	      } else if (newPosition > swiper.minTranslate()) {
	        if (params.freeModeMomentumBounce) {
	          if (newPosition - swiper.minTranslate() > bounceAmount) {
	            newPosition = swiper.minTranslate() + bounceAmount;
	          }
	          afterBouncePosition = swiper.minTranslate();
	          doBounce = true;
	          data.allowMomentumBounce = true;
	        } else {
	          newPosition = swiper.minTranslate();
	        }
	        if (params.loop && params.centeredSlides) needsLoopFix = true;
	      } else if (params.freeModeSticky) {
	        let nextSlide;
	        for (let j = 0; j < snapGrid.length; j += 1) {
	          if (snapGrid[j] > -newPosition) {
	            nextSlide = j;
	            break;
	          }
	        }

	        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
	          newPosition = snapGrid[nextSlide];
	        } else {
	          newPosition = snapGrid[nextSlide - 1];
	        }
	        newPosition = -newPosition;
	      }
	      if (needsLoopFix) {
	        swiper.once('transitionEnd', () => {
	          swiper.loopFix();
	        });
	      }
	      // Fix duration
	      if (swiper.velocity !== 0) {
	        if (rtl) {
	          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
	        } else {
	          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
	        }
	      } else if (params.freeModeSticky) {
	        swiper.slideToClosest();
	        return;
	      }

	      if (params.freeModeMomentumBounce && doBounce) {
	        swiper.updateProgress(afterBouncePosition);
	        swiper.setTransition(momentumDuration);
	        swiper.setTranslate(newPosition);
	        swiper.transitionStart(true, swiper.swipeDirection);
	        swiper.animating = true;
	        $wrapperEl.transitionEnd(() => {
	          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
	          swiper.emit('momentumBounce');

	          swiper.setTransition(params.speed);
	          swiper.setTranslate(afterBouncePosition);
	          $wrapperEl.transitionEnd(() => {
	            if (!swiper || swiper.destroyed) return;
	            swiper.transitionEnd();
	          });
	        });
	      } else if (swiper.velocity) {
	        swiper.updateProgress(newPosition);
	        swiper.setTransition(momentumDuration);
	        swiper.setTranslate(newPosition);
	        swiper.transitionStart(true, swiper.swipeDirection);
	        if (!swiper.animating) {
	          swiper.animating = true;
	          $wrapperEl.transitionEnd(() => {
	            if (!swiper || swiper.destroyed) return;
	            swiper.transitionEnd();
	          });
	        }
	      } else {
	        swiper.updateProgress(newPosition);
	      }

	      swiper.updateActiveIndex();
	      swiper.updateSlidesClasses();
	    } else if (params.freeModeSticky) {
	      swiper.slideToClosest();
	      return;
	    }

	    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
	      swiper.updateProgress();
	      swiper.updateActiveIndex();
	      swiper.updateSlidesClasses();
	    }
	    return;
	  }

	  // Find current slide
	  let stopIndex = 0;
	  let groupSize = swiper.slidesSizesGrid[0];
	  for (let i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
	    if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
	      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
	        stopIndex = i;
	        groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
	      }
	    } else if (currentPos >= slidesGrid[i]) {
	      stopIndex = i;
	      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
	    }
	  }

	  // Find current slide size
	  const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

	  if (timeDiff > params.longSwipesMs) {
	    // Long touches
	    if (!params.longSwipes) {
	      swiper.slideTo(swiper.activeIndex);
	      return;
	    }
	    if (swiper.swipeDirection === 'next') {
	      if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + params.slidesPerGroup);
	      else swiper.slideTo(stopIndex);
	    }
	    if (swiper.swipeDirection === 'prev') {
	      if (ratio > (1 - params.longSwipesRatio)) swiper.slideTo(stopIndex + params.slidesPerGroup);
	      else swiper.slideTo(stopIndex);
	    }
	  } else {
	    // Short swipes
	    if (!params.shortSwipes) {
	      swiper.slideTo(swiper.activeIndex);
	      return;
	    }
	    const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
	    if (!isNavButtonTarget) {
	      if (swiper.swipeDirection === 'next') {
	        swiper.slideTo(stopIndex + params.slidesPerGroup);
	      }
	      if (swiper.swipeDirection === 'prev') {
	        swiper.slideTo(stopIndex);
	      }
	    } else if (e.target === swiper.navigation.nextEl) {
	      swiper.slideTo(stopIndex + params.slidesPerGroup);
	    } else {
	      swiper.slideTo(stopIndex);
	    }
	  }
	}

	function onResize () {
	  const swiper = this;

	  const { params, el } = swiper;

	  if (el && el.offsetWidth === 0) return;

	  // Breakpoints
	  if (params.breakpoints) {
	    swiper.setBreakpoint();
	  }

	  // Save locks
	  const { allowSlideNext, allowSlidePrev, snapGrid } = swiper;

	  // Disable locks on resize
	  swiper.allowSlideNext = true;
	  swiper.allowSlidePrev = true;

	  swiper.updateSize();
	  swiper.updateSlides();

	  if (params.freeMode) {
	    const newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
	    swiper.setTranslate(newTranslate);
	    swiper.updateActiveIndex();
	    swiper.updateSlidesClasses();

	    if (params.autoHeight) {
	      swiper.updateAutoHeight();
	    }
	  } else {
	    swiper.updateSlidesClasses();
	    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
	      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
	    } else {
	      swiper.slideTo(swiper.activeIndex, 0, false, true);
	    }
	  }
	  if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
	    swiper.autoplay.run();
	  }
	  // Return locks after resize
	  swiper.allowSlidePrev = allowSlidePrev;
	  swiper.allowSlideNext = allowSlideNext;

	  if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
	    swiper.checkOverflow();
	  }
	}

	function onClick (e) {
	  const swiper = this;
	  if (!swiper.allowClick) {
	    if (swiper.params.preventClicks) e.preventDefault();
	    if (swiper.params.preventClicksPropagation && swiper.animating) {
	      e.stopPropagation();
	      e.stopImmediatePropagation();
	    }
	  }
	}

	function onScroll () {
	  const swiper = this;
	  const { wrapperEl } = swiper;
	  swiper.previousTranslate = swiper.translate;
	  swiper.translate = swiper.isHorizontal() ? -wrapperEl.scrollLeft : -wrapperEl.scrollTop;
	  // eslint-disable-next-line
	  if (swiper.translate === -0) swiper.translate = 0;

	  swiper.updateActiveIndex();
	  swiper.updateSlidesClasses();

	  let newProgress;
	  const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
	  if (translatesDiff === 0) {
	    newProgress = 0;
	  } else {
	    newProgress = (swiper.translate - swiper.minTranslate()) / (translatesDiff);
	  }
	  if (newProgress !== swiper.progress) {
	    swiper.updateProgress(swiper.translate);
	  }

	  swiper.emit('setTranslate', swiper.translate, false);
	}

	function attachEvents() {
	  const swiper = this;
	  const {
	    params, touchEvents, el, wrapperEl,
	  } = swiper;

	  swiper.onTouchStart = onTouchStart$1.bind(swiper);
	  swiper.onTouchMove = onTouchMove$1.bind(swiper);
	  swiper.onTouchEnd = onTouchEnd$1.bind(swiper);
	  if (params.cssMode) {
	    swiper.onScroll = onScroll.bind(swiper);
	  }

	  swiper.onClick = onClick.bind(swiper);

	  const capture = !!params.nested;

	  // Touch Events
	  if (!Support.touch && Support.pointerEvents) {
	    el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
	    doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
	    doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
	  } else {
	    if (Support.touch) {
	      const passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
	      el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
	      el.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture } : capture);
	      el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
	      if (touchEvents.cancel) {
	        el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
	      }
	    }
	    if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
	      el.addEventListener('mousedown', swiper.onTouchStart, false);
	      doc.addEventListener('mousemove', swiper.onTouchMove, capture);
	      doc.addEventListener('mouseup', swiper.onTouchEnd, false);
	    }
	  }
	  // Prevent Links Clicks
	  if (params.preventClicks || params.preventClicksPropagation) {
	    el.addEventListener('click', swiper.onClick, true);
	  }
	  if (params.cssMode) {
	    wrapperEl.addEventListener('scroll', swiper.onScroll);
	  }

	  // Resize handler
	  swiper.on((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize, true);
	}

	function detachEvents() {
	  const swiper = this;

	  const {
	    params, touchEvents, el, wrapperEl,
	  } = swiper;

	  const capture = !!params.nested;

	  // Touch Events
	  if (!Support.touch && Support.pointerEvents) {
	    el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
	    doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
	    doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
	  } else {
	    if (Support.touch) {
	      const passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
	      el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
	      el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
	      el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
	      if (touchEvents.cancel) {
	        el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
	      }
	    }
	    if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
	      el.removeEventListener('mousedown', swiper.onTouchStart, false);
	      doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
	      doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
	    }
	  }
	  // Prevent Links Clicks
	  if (params.preventClicks || params.preventClicksPropagation) {
	    el.removeEventListener('click', swiper.onClick, true);
	  }

	  if (params.cssMode) {
	    wrapperEl.removeEventListener('scroll', swiper.onScroll);
	  }

	  // Resize handler
	  swiper.off((Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate'), onResize);
	}

	var events = {
	  attachEvents,
	  detachEvents,
	};

	function setBreakpoint () {
	  const swiper = this;
	  const {
	    activeIndex, initialized, loopedSlides = 0, params, $el,
	  } = swiper;
	  const breakpoints = params.breakpoints;
	  if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) return;

	  // Get breakpoint for window width and update parameters
	  const breakpoint = swiper.getBreakpoint(breakpoints);

	  if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
	    const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
	    if (breakpointOnlyParams) {
	      ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerColumn'].forEach((param) => {
	        const paramValue = breakpointOnlyParams[param];
	        if (typeof paramValue === 'undefined') return;
	        if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
	          breakpointOnlyParams[param] = 'auto';
	        } else if (param === 'slidesPerView') {
	          breakpointOnlyParams[param] = parseFloat(paramValue);
	        } else {
	          breakpointOnlyParams[param] = parseInt(paramValue, 10);
	        }
	      });
	    }

	    const breakpointParams = breakpointOnlyParams || swiper.originalParams;
	    const wasMultiRow = params.slidesPerColumn > 1;
	    const isMultiRow = breakpointParams.slidesPerColumn > 1;
	    if (wasMultiRow && !isMultiRow) {
	      $el.removeClass(`${params.containerModifierClass}multirow ${params.containerModifierClass}multirow-column`);
	    } else if (!wasMultiRow && isMultiRow) {
	      $el.addClass(`${params.containerModifierClass}multirow`);
	      if (breakpointParams.slidesPerColumnFill === 'column') {
	        $el.addClass(`${params.containerModifierClass}multirow-column`);
	      }
	    }

	    const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
	    const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

	    if (directionChanged && initialized) {
	      swiper.changeDirection();
	    }

	    Utils.extend(swiper.params, breakpointParams);

	    Utils.extend(swiper, {
	      allowTouchMove: swiper.params.allowTouchMove,
	      allowSlideNext: swiper.params.allowSlideNext,
	      allowSlidePrev: swiper.params.allowSlidePrev,
	    });

	    swiper.currentBreakpoint = breakpoint;

	    if (needsReLoop && initialized) {
	      swiper.loopDestroy();
	      swiper.loopCreate();
	      swiper.updateSlides();
	      swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
	    }

	    swiper.emit('breakpoint', breakpointParams);
	  }
	}

	function getBreakpoint (breakpoints) {
	  // Get breakpoint for window width
	  if (!breakpoints) return undefined;
	  let breakpoint = false;
	  const points = [];
	  Object.keys(breakpoints).forEach((point) => {
	    points.push(point);
	  });
	  points.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
	  for (let i = 0; i < points.length; i += 1) {
	    const point = points[i];
	    if (point <= win.innerWidth) {
	      breakpoint = point;
	    }
	  }
	  return breakpoint || 'max';
	}

	var breakpoints = { setBreakpoint, getBreakpoint };

	function addClasses () {
	  const swiper = this;
	  const {
	    classNames, params, rtl, $el,
	  } = swiper;
	  const suffixes = [];

	  suffixes.push('initialized');
	  suffixes.push(params.direction);

	  if (params.freeMode) {
	    suffixes.push('free-mode');
	  }
	  if (params.autoHeight) {
	    suffixes.push('autoheight');
	  }
	  if (rtl) {
	    suffixes.push('rtl');
	  }
	  if (params.slidesPerColumn > 1) {
	    suffixes.push('multirow');
	    if (params.slidesPerColumnFill === 'column') {
	      suffixes.push('multirow-column');
	    }
	  }
	  if (Device.android) {
	    suffixes.push('android');
	  }
	  if (Device.ios) {
	    suffixes.push('ios');
	  }

	  if (params.cssMode) {
	    suffixes.push('css-mode');
	  }

	  suffixes.forEach((suffix) => {
	    classNames.push(params.containerModifierClass + suffix);
	  });

	  $el.addClass(classNames.join(' '));
	}

	function removeClasses () {
	  const swiper = this;
	  const { $el, classNames } = swiper;

	  $el.removeClass(classNames.join(' '));
	}

	var classes = { addClasses, removeClasses };

	function loadImage (imageEl, src, srcset, sizes, checkForComplete, callback) {
	  let image;
	  function onReady() {
	    if (callback) callback();
	  }
	  if (!imageEl.complete || !checkForComplete) {
	    if (src) {
	      image = new win.Image();
	      image.onload = onReady;
	      image.onerror = onReady;
	      if (sizes) {
	        image.sizes = sizes;
	      }
	      if (srcset) {
	        image.srcset = srcset;
	      }
	      if (src) {
	        image.src = src;
	      }
	    } else {
	      onReady();
	    }
	  } else {
	    // image already loaded...
	    onReady();
	  }
	}

	function preloadImages () {
	  const swiper = this;
	  swiper.imagesToLoad = swiper.$el.find('img');
	  function onReady() {
	    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
	    if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
	    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
	      if (swiper.params.updateOnImagesReady) swiper.update();
	      swiper.emit('imagesReady');
	    }
	  }
	  for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
	    const imageEl = swiper.imagesToLoad[i];
	    swiper.loadImage(
	      imageEl,
	      imageEl.currentSrc || imageEl.getAttribute('src'),
	      imageEl.srcset || imageEl.getAttribute('srcset'),
	      imageEl.sizes || imageEl.getAttribute('sizes'),
	      true,
	      onReady
	    );
	  }
	}

	var images = {
	  loadImage,
	  preloadImages,
	};

	function checkOverflow() {
	  const swiper = this;
	  const wasLocked = swiper.isLocked;

	  swiper.isLocked = swiper.snapGrid.length === 1;
	  swiper.allowSlideNext = !swiper.isLocked;
	  swiper.allowSlidePrev = !swiper.isLocked;

	  // events
	  if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');

	  if (wasLocked && wasLocked !== swiper.isLocked) {
	    swiper.isEnd = false;
	    swiper.navigation.update();
	  }
	}

	var checkOverflow$1 = { checkOverflow };

	var defaults = {
	  init: true,
	  direction: 'horizontal',
	  touchEventsTarget: 'container',
	  initialSlide: 0,
	  speed: 300,
	  cssMode: false,
	  //
	  preventInteractionOnTransition: false,

	  // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
	  edgeSwipeDetection: false,
	  edgeSwipeThreshold: 20,

	  // Free mode
	  freeMode: false,
	  freeModeMomentum: true,
	  freeModeMomentumRatio: 1,
	  freeModeMomentumBounce: true,
	  freeModeMomentumBounceRatio: 1,
	  freeModeMomentumVelocityRatio: 1,
	  freeModeSticky: false,
	  freeModeMinimumVelocity: 0.02,

	  // Autoheight
	  autoHeight: false,

	  // Set wrapper width
	  setWrapperSize: false,

	  // Virtual Translate
	  virtualTranslate: false,

	  // Effects
	  effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

	  // Breakpoints
	  breakpoints: undefined,

	  // Slides grid
	  spaceBetween: 0,
	  slidesPerView: 1,
	  slidesPerColumn: 1,
	  slidesPerColumnFill: 'column',
	  slidesPerGroup: 1,
	  centeredSlides: false,
	  slidesOffsetBefore: 0, // in px
	  slidesOffsetAfter: 0, // in px
	  normalizeSlideIndex: true,
	  centerInsufficientSlides: false,

	  // Disable swiper and hide navigation when container not overflow
	  watchOverflow: false,

	  // Round length
	  roundLengths: false,

	  // Touches
	  touchRatio: 1,
	  touchAngle: 45,
	  simulateTouch: true,
	  shortSwipes: true,
	  longSwipes: true,
	  longSwipesRatio: 0.5,
	  longSwipesMs: 300,
	  followFinger: true,
	  allowTouchMove: true,
	  threshold: 0,
	  touchMoveStopPropagation: false,
	  touchStartPreventDefault: true,
	  touchStartForcePreventDefault: false,
	  touchReleaseOnEdges: false,

	  // Unique Navigation Elements
	  uniqueNavElements: true,

	  // Resistance
	  resistance: true,
	  resistanceRatio: 0.85,

	  // Progress
	  watchSlidesProgress: false,
	  watchSlidesVisibility: false,

	  // Cursor
	  grabCursor: false,

	  // Clicks
	  preventClicks: true,
	  preventClicksPropagation: true,
	  slideToClickedSlide: false,

	  // Images
	  preloadImages: true,
	  updateOnImagesReady: true,

	  // loop
	  loop: false,
	  loopAdditionalSlides: 0,
	  loopedSlides: null,
	  loopFillGroupWithBlank: false,

	  // Swiping/no swiping
	  allowSlidePrev: true,
	  allowSlideNext: true,
	  swipeHandler: null, // '.swipe-handler',
	  noSwiping: true,
	  noSwipingClass: 'swiper-no-swiping',
	  noSwipingSelector: null,

	  // Passive Listeners
	  passiveListeners: true,

	  // NS
	  containerModifierClass: 'swiper-container-', // NEW
	  slideClass: 'swiper-slide',
	  slideBlankClass: 'swiper-slide-invisible-blank',
	  slideActiveClass: 'swiper-slide-active',
	  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
	  slideVisibleClass: 'swiper-slide-visible',
	  slideDuplicateClass: 'swiper-slide-duplicate',
	  slideNextClass: 'swiper-slide-next',
	  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
	  slidePrevClass: 'swiper-slide-prev',
	  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
	  wrapperClass: 'swiper-wrapper',

	  // Callbacks
	  runCallbacksOnInit: true,
	};

	/* eslint no-param-reassign: "off" */

	const prototypes = {
	  update,
	  translate,
	  transition: transition$1,
	  slide,
	  loop,
	  grabCursor,
	  manipulation,
	  events,
	  breakpoints,
	  checkOverflow: checkOverflow$1,
	  classes,
	  images,
	};

	const extendedDefaults = {};

	class Swiper extends SwiperClass {
	  constructor(...args) {
	    let el;
	    let params;
	    if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
	      params = args[0];
	    } else {
	      [el, params] = args;
	    }
	    if (!params) params = {};

	    params = Utils.extend({}, params);
	    if (el && !params.el) params.el = el;

	    super(params);

	    Object.keys(prototypes).forEach((prototypeGroup) => {
	      Object.keys(prototypes[prototypeGroup]).forEach((protoMethod) => {
	        if (!Swiper.prototype[protoMethod]) {
	          Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
	        }
	      });
	    });

	    // Swiper Instance
	    const swiper = this;
	    if (typeof swiper.modules === 'undefined') {
	      swiper.modules = {};
	    }
	    Object.keys(swiper.modules).forEach((moduleName) => {
	      const module = swiper.modules[moduleName];
	      if (module.params) {
	        const moduleParamName = Object.keys(module.params)[0];
	        const moduleParams = module.params[moduleParamName];
	        if (typeof moduleParams !== 'object' || moduleParams === null) return;
	        if (!(moduleParamName in params && 'enabled' in moduleParams)) return;
	        if (params[moduleParamName] === true) {
	          params[moduleParamName] = { enabled: true };
	        }
	        if (
	          typeof params[moduleParamName] === 'object'
	          && !('enabled' in params[moduleParamName])
	        ) {
	          params[moduleParamName].enabled = true;
	        }
	        if (!params[moduleParamName]) params[moduleParamName] = { enabled: false };
	      }
	    });

	    // Extend defaults with modules params
	    const swiperParams = Utils.extend({}, defaults);
	    swiper.useModulesParams(swiperParams);

	    // Extend defaults with passed params
	    swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
	    swiper.originalParams = Utils.extend({}, swiper.params);
	    swiper.passedParams = Utils.extend({}, params);

	    // Save Dom lib
	    swiper.$ = $;

	    // Find el
	    const $el = $(swiper.params.el);
	    el = $el[0];

	    if (!el) {
	      return undefined;
	    }

	    if ($el.length > 1) {
	      const swipers = [];
	      $el.each((index, containerEl) => {
	        const newParams = Utils.extend({}, params, { el: containerEl });
	        swipers.push(new Swiper(newParams));
	      });
	      return swipers;
	    }

	    el.swiper = swiper;
	    $el.data('swiper', swiper);

	    // Find Wrapper
	    let $wrapperEl;
	    if (el && el.shadowRoot && el.shadowRoot.querySelector) {
	      $wrapperEl = $(el.shadowRoot.querySelector(`.${swiper.params.wrapperClass}`));
	      // Children needs to return slot items
	      $wrapperEl.children = (options) => $el.children(options);
	    } else {
	      $wrapperEl = $el.children(`.${swiper.params.wrapperClass}`);
	    }
	    // Extend Swiper
	    Utils.extend(swiper, {
	      $el,
	      el,
	      $wrapperEl,
	      wrapperEl: $wrapperEl[0],

	      // Classes
	      classNames: [],

	      // Slides
	      slides: $(),
	      slidesGrid: [],
	      snapGrid: [],
	      slidesSizesGrid: [],

	      // isDirection
	      isHorizontal() {
	        return swiper.params.direction === 'horizontal';
	      },
	      isVertical() {
	        return swiper.params.direction === 'vertical';
	      },
	      // RTL
	      rtl: (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
	      rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
	      wrongRTL: $wrapperEl.css('display') === '-webkit-box',

	      // Indexes
	      activeIndex: 0,
	      realIndex: 0,

	      //
	      isBeginning: true,
	      isEnd: false,

	      // Props
	      translate: 0,
	      previousTranslate: 0,
	      progress: 0,
	      velocity: 0,
	      animating: false,

	      // Locks
	      allowSlideNext: swiper.params.allowSlideNext,
	      allowSlidePrev: swiper.params.allowSlidePrev,

	      // Touch Events
	      touchEvents: (function touchEvents() {
	        const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
	        let desktop = ['mousedown', 'mousemove', 'mouseup'];
	        if (Support.pointerEvents) {
	          desktop = ['pointerdown', 'pointermove', 'pointerup'];
	        }
	        swiper.touchEventsTouch = {
	          start: touch[0],
	          move: touch[1],
	          end: touch[2],
	          cancel: touch[3],
	        };
	        swiper.touchEventsDesktop = {
	          start: desktop[0],
	          move: desktop[1],
	          end: desktop[2],
	        };
	        return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
	      }()),
	      touchEventsData: {
	        isTouched: undefined,
	        isMoved: undefined,
	        allowTouchCallbacks: undefined,
	        touchStartTime: undefined,
	        isScrolling: undefined,
	        currentTranslate: undefined,
	        startTranslate: undefined,
	        allowThresholdMove: undefined,
	        // Form elements to match
	        formElements: 'input, select, option, textarea, button, video',
	        // Last click time
	        lastClickTime: Utils.now(),
	        clickTimeout: undefined,
	        // Velocities
	        velocities: [],
	        allowMomentumBounce: undefined,
	        isTouchEvent: undefined,
	        startMoving: undefined,
	      },

	      // Clicks
	      allowClick: true,

	      // Touches
	      allowTouchMove: swiper.params.allowTouchMove,

	      touches: {
	        startX: 0,
	        startY: 0,
	        currentX: 0,
	        currentY: 0,
	        diff: 0,
	      },

	      // Images
	      imagesToLoad: [],
	      imagesLoaded: 0,

	    });

	    // Install Modules
	    swiper.useModules();

	    // Init
	    if (swiper.params.init) {
	      swiper.init();
	    }

	    // Return app instance
	    return swiper;
	  }

	  slidesPerViewDynamic() {
	    const swiper = this;
	    const {
	      params, slides, slidesGrid, size: swiperSize, activeIndex,
	    } = swiper;
	    let spv = 1;
	    if (params.centeredSlides) {
	      let slideSize = slides[activeIndex].swiperSlideSize;
	      let breakLoop;
	      for (let i = activeIndex + 1; i < slides.length; i += 1) {
	        if (slides[i] && !breakLoop) {
	          slideSize += slides[i].swiperSlideSize;
	          spv += 1;
	          if (slideSize > swiperSize) breakLoop = true;
	        }
	      }
	      for (let i = activeIndex - 1; i >= 0; i -= 1) {
	        if (slides[i] && !breakLoop) {
	          slideSize += slides[i].swiperSlideSize;
	          spv += 1;
	          if (slideSize > swiperSize) breakLoop = true;
	        }
	      }
	    } else {
	      for (let i = activeIndex + 1; i < slides.length; i += 1) {
	        if (slidesGrid[i] - slidesGrid[activeIndex] < swiperSize) {
	          spv += 1;
	        }
	      }
	    }
	    return spv;
	  }

	  update() {
	    const swiper = this;
	    if (!swiper || swiper.destroyed) return;
	    const { snapGrid, params } = swiper;
	    // Breakpoints
	    if (params.breakpoints) {
	      swiper.setBreakpoint();
	    }
	    swiper.updateSize();
	    swiper.updateSlides();
	    swiper.updateProgress();
	    swiper.updateSlidesClasses();

	    function setTranslate() {
	      const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
	      const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
	      swiper.setTranslate(newTranslate);
	      swiper.updateActiveIndex();
	      swiper.updateSlidesClasses();
	    }
	    let translated;
	    if (swiper.params.freeMode) {
	      setTranslate();
	      if (swiper.params.autoHeight) {
	        swiper.updateAutoHeight();
	      }
	    } else {
	      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
	        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
	      } else {
	        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
	      }
	      if (!translated) {
	        setTranslate();
	      }
	    }
	    if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
	      swiper.checkOverflow();
	    }
	    swiper.emit('update');
	  }

	  changeDirection(newDirection, needUpdate = true) {
	    const swiper = this;
	    const currentDirection = swiper.params.direction;
	    if (!newDirection) {
	      // eslint-disable-next-line
	      newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
	    }
	    if ((newDirection === currentDirection) || (newDirection !== 'horizontal' && newDirection !== 'vertical')) {
	      return swiper;
	    }

	    swiper.$el
	      .removeClass(`${swiper.params.containerModifierClass}${currentDirection}`)
	      .addClass(`${swiper.params.containerModifierClass}${newDirection}`);

	    swiper.params.direction = newDirection;

	    swiper.slides.each((slideIndex, slideEl) => {
	      if (newDirection === 'vertical') {
	        slideEl.style.width = '';
	      } else {
	        slideEl.style.height = '';
	      }
	    });

	    swiper.emit('changeDirection');
	    if (needUpdate) swiper.update();

	    return swiper;
	  }

	  init() {
	    const swiper = this;
	    if (swiper.initialized) return;

	    swiper.emit('beforeInit');

	    // Set breakpoint
	    if (swiper.params.breakpoints) {
	      swiper.setBreakpoint();
	    }

	    // Add Classes
	    swiper.addClasses();

	    // Create loop
	    if (swiper.params.loop) {
	      swiper.loopCreate();
	    }

	    // Update size
	    swiper.updateSize();

	    // Update slides
	    swiper.updateSlides();

	    if (swiper.params.watchOverflow) {
	      swiper.checkOverflow();
	    }

	    // Set Grab Cursor
	    if (swiper.params.grabCursor) {
	      swiper.setGrabCursor();
	    }

	    if (swiper.params.preloadImages) {
	      swiper.preloadImages();
	    }

	    // Slide To Initial Slide
	    if (swiper.params.loop) {
	      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
	    } else {
	      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
	    }

	    // Attach events
	    swiper.attachEvents();

	    // Init Flag
	    swiper.initialized = true;

	    // Emit
	    swiper.emit('init');
	  }

	  destroy(deleteInstance = true, cleanStyles = true) {
	    const swiper = this;
	    const {
	      params, $el, $wrapperEl, slides,
	    } = swiper;

	    if (typeof swiper.params === 'undefined' || swiper.destroyed) {
	      return null;
	    }

	    swiper.emit('beforeDestroy');

	    // Init Flag
	    swiper.initialized = false;

	    // Detach events
	    swiper.detachEvents();

	    // Destroy loop
	    if (params.loop) {
	      swiper.loopDestroy();
	    }

	    // Cleanup styles
	    if (cleanStyles) {
	      swiper.removeClasses();
	      $el.removeAttr('style');
	      $wrapperEl.removeAttr('style');
	      if (slides && slides.length) {
	        slides
	          .removeClass([
	            params.slideVisibleClass,
	            params.slideActiveClass,
	            params.slideNextClass,
	            params.slidePrevClass,
	          ].join(' '))
	          .removeAttr('style')
	          .removeAttr('data-swiper-slide-index');
	      }
	    }

	    swiper.emit('destroy');

	    // Detach emitter events
	    Object.keys(swiper.eventsListeners).forEach((eventName) => {
	      swiper.off(eventName);
	    });

	    if (deleteInstance !== false) {
	      swiper.$el[0].swiper = null;
	      swiper.$el.data('swiper', null);
	      Utils.deleteProps(swiper);
	    }
	    swiper.destroyed = true;

	    return null;
	  }

	  static extendDefaults(newDefaults) {
	    Utils.extend(extendedDefaults, newDefaults);
	  }

	  static get extendedDefaults() {
	    return extendedDefaults;
	  }

	  static get defaults() {
	    return defaults;
	  }

	  static get Class() {
	    return SwiperClass;
	  }

	  static get $() {
	    return $;
	  }
	}

	var Device$1 = {
	  name: 'device',
	  proto: {
	    device: Device,
	  },
	  static: {
	    device: Device,
	  },
	};

	var Support$1 = {
	  name: 'support',
	  proto: {
	    support: Support,
	  },
	  static: {
	    support: Support,
	  },
	};

	const Browser = (function Browser() {
	  function isSafari() {
	    const ua = win.navigator.userAgent.toLowerCase();
	    return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
	  }
	  return {
	    isEdge: !!win.navigator.userAgent.match(/Edge/g),
	    isSafari: isSafari(),
	    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
	  };
	}());

	var Browser$1 = {
	  name: 'browser',
	  proto: {
	    browser: Browser,
	  },
	  static: {
	    browser: Browser,
	  },
	};

	var Resize = {
	  name: 'resize',
	  create() {
	    const swiper = this;
	    Utils.extend(swiper, {
	      resize: {
	        resizeHandler() {
	          if (!swiper || swiper.destroyed || !swiper.initialized) return;
	          swiper.emit('beforeResize');
	          swiper.emit('resize');
	        },
	        orientationChangeHandler() {
	          if (!swiper || swiper.destroyed || !swiper.initialized) return;
	          swiper.emit('orientationchange');
	        },
	      },
	    });
	  },
	  on: {
	    init() {
	      const swiper = this;
	      // Emit resize
	      win.addEventListener('resize', swiper.resize.resizeHandler);

	      // Emit orientationchange
	      win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
	    },
	    destroy() {
	      const swiper = this;
	      win.removeEventListener('resize', swiper.resize.resizeHandler);
	      win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
	    },
	  },
	};

	const Observer = {
	  func: win.MutationObserver || win.WebkitMutationObserver,
	  attach(target, options = {}) {
	    const swiper = this;

	    const ObserverFunc = Observer.func;
	    const observer = new ObserverFunc((mutations) => {
	      // The observerUpdate event should only be triggered
	      // once despite the number of mutations.  Additional
	      // triggers are redundant and are very costly
	      if (mutations.length === 1) {
	        swiper.emit('observerUpdate', mutations[0]);
	        return;
	      }
	      const observerUpdate = function observerUpdate() {
	        swiper.emit('observerUpdate', mutations[0]);
	      };

	      if (win.requestAnimationFrame) {
	        win.requestAnimationFrame(observerUpdate);
	      } else {
	        win.setTimeout(observerUpdate, 0);
	      }
	    });

	    observer.observe(target, {
	      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
	      childList: typeof options.childList === 'undefined' ? true : options.childList,
	      characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
	    });

	    swiper.observer.observers.push(observer);
	  },
	  init() {
	    const swiper = this;
	    if (!Support.observer || !swiper.params.observer) return;
	    if (swiper.params.observeParents) {
	      const containerParents = swiper.$el.parents();
	      for (let i = 0; i < containerParents.length; i += 1) {
	        swiper.observer.attach(containerParents[i]);
	      }
	    }
	    // Observe container
	    swiper.observer.attach(swiper.$el[0], { childList: swiper.params.observeSlideChildren });

	    // Observe wrapper
	    swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
	  },
	  destroy() {
	    const swiper = this;
	    swiper.observer.observers.forEach((observer) => {
	      observer.disconnect();
	    });
	    swiper.observer.observers = [];
	  },
	};

	var Observer$1 = {
	  name: 'observer',
	  params: {
	    observer: false,
	    observeParents: false,
	    observeSlideChildren: false,
	  },
	  create() {
	    const swiper = this;
	    Utils.extend(swiper, {
	      observer: {
	        init: Observer.init.bind(swiper),
	        attach: Observer.attach.bind(swiper),
	        destroy: Observer.destroy.bind(swiper),
	        observers: [],
	      },
	    });
	  },
	  on: {
	    init() {
	      const swiper = this;
	      swiper.observer.init();
	    },
	    destroy() {
	      const swiper = this;
	      swiper.observer.destroy();
	    },
	  },
	};

	const Virtual = {
	  update(force) {
	    const swiper = this;
	    const { slidesPerView, slidesPerGroup, centeredSlides } = swiper.params;
	    const { addSlidesBefore, addSlidesAfter } = swiper.params.virtual;
	    const {
	      from: previousFrom,
	      to: previousTo,
	      slides,
	      slidesGrid: previousSlidesGrid,
	      renderSlide,
	      offset: previousOffset,
	    } = swiper.virtual;
	    swiper.updateActiveIndex();
	    const activeIndex = swiper.activeIndex || 0;

	    let offsetProp;
	    if (swiper.rtlTranslate) offsetProp = 'right';
	    else offsetProp = swiper.isHorizontal() ? 'left' : 'top';

	    let slidesAfter;
	    let slidesBefore;
	    if (centeredSlides) {
	      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
	      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
	    } else {
	      slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
	      slidesBefore = slidesPerGroup + addSlidesAfter;
	    }
	    const from = Math.max((activeIndex || 0) - slidesBefore, 0);
	    const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
	    const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

	    Utils.extend(swiper.virtual, {
	      from,
	      to,
	      offset,
	      slidesGrid: swiper.slidesGrid,
	    });

	    function onRendered() {
	      swiper.updateSlides();
	      swiper.updateProgress();
	      swiper.updateSlidesClasses();
	      if (swiper.lazy && swiper.params.lazy.enabled) {
	        swiper.lazy.load();
	      }
	    }

	    if (previousFrom === from && previousTo === to && !force) {
	      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
	        swiper.slides.css(offsetProp, `${offset}px`);
	      }
	      swiper.updateProgress();
	      return;
	    }
	    if (swiper.params.virtual.renderExternal) {
	      swiper.params.virtual.renderExternal.call(swiper, {
	        offset,
	        from,
	        to,
	        slides: (function getSlides() {
	          const slidesToRender = [];
	          for (let i = from; i <= to; i += 1) {
	            slidesToRender.push(slides[i]);
	          }
	          return slidesToRender;
	        }()),
	      });
	      onRendered();
	      return;
	    }
	    const prependIndexes = [];
	    const appendIndexes = [];
	    if (force) {
	      swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
	    } else {
	      for (let i = previousFrom; i <= previousTo; i += 1) {
	        if (i < from || i > to) {
	          swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
	        }
	      }
	    }
	    for (let i = 0; i < slides.length; i += 1) {
	      if (i >= from && i <= to) {
	        if (typeof previousTo === 'undefined' || force) {
	          appendIndexes.push(i);
	        } else {
	          if (i > previousTo) appendIndexes.push(i);
	          if (i < previousFrom) prependIndexes.push(i);
	        }
	      }
	    }
	    appendIndexes.forEach((index) => {
	      swiper.$wrapperEl.append(renderSlide(slides[index], index));
	    });
	    prependIndexes.sort((a, b) => b - a).forEach((index) => {
	      swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
	    });
	    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
	    onRendered();
	  },
	  renderSlide(slide, index) {
	    const swiper = this;
	    const params = swiper.params.virtual;
	    if (params.cache && swiper.virtual.cache[index]) {
	      return swiper.virtual.cache[index];
	    }
	    const $slideEl = params.renderSlide
	      ? $(params.renderSlide.call(swiper, slide, index))
	      : $(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
	    if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
	    if (params.cache) swiper.virtual.cache[index] = $slideEl;
	    return $slideEl;
	  },
	  appendSlide(slides) {
	    const swiper = this;
	    if (typeof slides === 'object' && 'length' in slides) {
	      for (let i = 0; i < slides.length; i += 1) {
	        if (slides[i]) swiper.virtual.slides.push(slides[i]);
	      }
	    } else {
	      swiper.virtual.slides.push(slides);
	    }
	    swiper.virtual.update(true);
	  },
	  prependSlide(slides) {
	    const swiper = this;
	    const activeIndex = swiper.activeIndex;
	    let newActiveIndex = activeIndex + 1;
	    let numberOfNewSlides = 1;

	    if (Array.isArray(slides)) {
	      for (let i = 0; i < slides.length; i += 1) {
	        if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
	      }
	      newActiveIndex = activeIndex + slides.length;
	      numberOfNewSlides = slides.length;
	    } else {
	      swiper.virtual.slides.unshift(slides);
	    }
	    if (swiper.params.virtual.cache) {
	      const cache = swiper.virtual.cache;
	      const newCache = {};
	      Object.keys(cache).forEach((cachedIndex) => {
	        const $cachedEl = cache[cachedIndex];
	        const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');
	        if (cachedElIndex) {
	          $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
	        }
	        newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
	      });
	      swiper.virtual.cache = newCache;
	    }
	    swiper.virtual.update(true);
	    swiper.slideTo(newActiveIndex, 0);
	  },
	  removeSlide(slidesIndexes) {
	    const swiper = this;
	    if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
	    let activeIndex = swiper.activeIndex;
	    if (Array.isArray(slidesIndexes)) {
	      for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
	        swiper.virtual.slides.splice(slidesIndexes[i], 1);
	        if (swiper.params.virtual.cache) {
	          delete swiper.virtual.cache[slidesIndexes[i]];
	        }
	        if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
	        activeIndex = Math.max(activeIndex, 0);
	      }
	    } else {
	      swiper.virtual.slides.splice(slidesIndexes, 1);
	      if (swiper.params.virtual.cache) {
	        delete swiper.virtual.cache[slidesIndexes];
	      }
	      if (slidesIndexes < activeIndex) activeIndex -= 1;
	      activeIndex = Math.max(activeIndex, 0);
	    }
	    swiper.virtual.update(true);
	    swiper.slideTo(activeIndex, 0);
	  },
	  removeAllSlides() {
	    const swiper = this;
	    swiper.virtual.slides = [];
	    if (swiper.params.virtual.cache) {
	      swiper.virtual.cache = {};
	    }
	    swiper.virtual.update(true);
	    swiper.slideTo(0, 0);
	  },
	};

	var Virtual$1 = {
	  name: 'virtual',
	  params: {
	    virtual: {
	      enabled: false,
	      slides: [],
	      cache: true,
	      renderSlide: null,
	      renderExternal: null,
	      addSlidesBefore: 0,
	      addSlidesAfter: 0,
	    },
	  },
	  create() {
	    const swiper = this;
	    Utils.extend(swiper, {
	      virtual: {
	        update: Virtual.update.bind(swiper),
	        appendSlide: Virtual.appendSlide.bind(swiper),
	        prependSlide: Virtual.prependSlide.bind(swiper),
	        removeSlide: Virtual.removeSlide.bind(swiper),
	        removeAllSlides: Virtual.removeAllSlides.bind(swiper),
	        renderSlide: Virtual.renderSlide.bind(swiper),
	        slides: swiper.params.virtual.slides,
	        cache: {},
	      },
	    });
	  },
	  on: {
	    beforeInit() {
	      const swiper = this;
	      if (!swiper.params.virtual.enabled) return;
	      swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
	      const overwriteParams = {
	        watchSlidesProgress: true,
	      };
	      Utils.extend(swiper.params, overwriteParams);
	      Utils.extend(swiper.originalParams, overwriteParams);

	      if (!swiper.params.initialSlide) {
	        swiper.virtual.update();
	      }
	    },
	    setTranslate() {
	      const swiper = this;
	      if (!swiper.params.virtual.enabled) return;
	      swiper.virtual.update();
	    },
	  },
	};

	const Keyboard$1 = {
	  handle(event) {
	    const swiper = this;
	    const { rtlTranslate: rtl } = swiper;
	    let e = event;
	    if (e.originalEvent) e = e.originalEvent; // jquery fix
	    const kc = e.keyCode || e.charCode;
	    // Directions locks
	    if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40) || kc === 34)) {
	      return false;
	    }
	    if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38) || kc === 33)) {
	      return false;
	    }
	    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
	      return undefined;
	    }
	    if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
	      return undefined;
	    }
	    if (swiper.params.keyboard.onlyInViewport && (kc === 33 || kc === 34 || kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
	      let inView = false;
	      // Check that swiper should be inside of visible area of window
	      if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {
	        return undefined;
	      }
	      const windowWidth = win.innerWidth;
	      const windowHeight = win.innerHeight;
	      const swiperOffset = swiper.$el.offset();
	      if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
	      const swiperCoord = [
	        [swiperOffset.left, swiperOffset.top],
	        [swiperOffset.left + swiper.width, swiperOffset.top],
	        [swiperOffset.left, swiperOffset.top + swiper.height],
	        [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height],
	      ];
	      for (let i = 0; i < swiperCoord.length; i += 1) {
	        const point = swiperCoord[i];
	        if (
	          point[0] >= 0 && point[0] <= windowWidth
	          && point[1] >= 0 && point[1] <= windowHeight
	        ) {
	          inView = true;
	        }
	      }
	      if (!inView) return undefined;
	    }
	    if (swiper.isHorizontal()) {
	      if (kc === 33 || kc === 34 || kc === 37 || kc === 39) {
	        if (e.preventDefault) e.preventDefault();
	        else e.returnValue = false;
	      }
	      if (((kc === 34 || kc === 39) && !rtl) || ((kc === 33 || kc === 37) && rtl)) swiper.slideNext();
	      if (((kc === 33 || kc === 37) && !rtl) || ((kc === 34 || kc === 39) && rtl)) swiper.slidePrev();
	    } else {
	      if (kc === 33 || kc === 34 || kc === 38 || kc === 40) {
	        if (e.preventDefault) e.preventDefault();
	        else e.returnValue = false;
	      }
	      if (kc === 34 || kc === 40) swiper.slideNext();
	      if (kc === 33 || kc === 38) swiper.slidePrev();
	    }
	    swiper.emit('keyPress', kc);
	    return undefined;
	  },
	  enable() {
	    const swiper = this;
	    if (swiper.keyboard.enabled) return;
	    $(doc).on('keydown', swiper.keyboard.handle);
	    swiper.keyboard.enabled = true;
	  },
	  disable() {
	    const swiper = this;
	    if (!swiper.keyboard.enabled) return;
	    $(doc).off('keydown', swiper.keyboard.handle);
	    swiper.keyboard.enabled = false;
	  },
	};

	var Keyboard$1$1 = {
	  name: 'keyboard',
	  params: {
	    keyboard: {
	      enabled: false,
	      onlyInViewport: true,
	    },
	  },
	  create() {
	    const swiper = this;
	    Utils.extend(swiper, {
	      keyboard: {
	        enabled: false,
	        enable: Keyboard$1.enable.bind(swiper),
	        disable: Keyboard$1.disable.bind(swiper),
	        handle: Keyboard$1.handle.bind(swiper),
	      },
	    });
	  },
	  on: {
	    init() {
	      const swiper = this;
	      if (swiper.params.keyboard.enabled) {
	        swiper.keyboard.enable();
	      }
	    },
	    destroy() {
	      const swiper = this;
	      if (swiper.keyboard.enabled) {
	        swiper.keyboard.disable();
	      }
	    },
	  },
	};

	function isEventSupported() {
	  const eventName = 'onwheel';
	  let isSupported = eventName in doc;

	  if (!isSupported) {
	    const element = doc.createElement('div');
	    element.setAttribute(eventName, 'return;');
	    isSupported = typeof element[eventName] === 'function';
	  }

	  if (!isSupported
	    && doc.implementation
	    && doc.implementation.hasFeature
	    // always returns true in newer browsers as per the standard.
	    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
	    && doc.implementation.hasFeature('', '') !== true
	  ) {
	    // This is the only way to test support for the `wheel` event in IE9+.
	    isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
	  }

	  return isSupported;
	}
	const Mousewheel = {
	  lastScrollTime: Utils.now(),
	  event() {
	    if (win.navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
	    return isEventSupported() ? 'wheel' : 'mousewheel';
	  },
	  normalize(e) {
	    // Reasonable defaults
	    const PIXEL_STEP = 10;
	    const LINE_HEIGHT = 40;
	    const PAGE_HEIGHT = 800;

	    let sX = 0;
	    let sY = 0; // spinX, spinY
	    let pX = 0;
	    let pY = 0; // pixelX, pixelY

	    // Legacy
	    if ('detail' in e) {
	      sY = e.detail;
	    }
	    if ('wheelDelta' in e) {
	      sY = -e.wheelDelta / 120;
	    }
	    if ('wheelDeltaY' in e) {
	      sY = -e.wheelDeltaY / 120;
	    }
	    if ('wheelDeltaX' in e) {
	      sX = -e.wheelDeltaX / 120;
	    }

	    // side scrolling on FF with DOMMouseScroll
	    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
	      sX = sY;
	      sY = 0;
	    }

	    pX = sX * PIXEL_STEP;
	    pY = sY * PIXEL_STEP;

	    if ('deltaY' in e) {
	      pY = e.deltaY;
	    }
	    if ('deltaX' in e) {
	      pX = e.deltaX;
	    }

	    if (e.shiftKey && !pX) { // if user scrolls with shift he wants horizontal scroll
	      pX = pY;
	      pY = 0;
	    }

	    if ((pX || pY) && e.deltaMode) {
	      if (e.deltaMode === 1) { // delta in LINE units
	        pX *= LINE_HEIGHT;
	        pY *= LINE_HEIGHT;
	      } else { // delta in PAGE units
	        pX *= PAGE_HEIGHT;
	        pY *= PAGE_HEIGHT;
	      }
	    }

	    // Fall-back if spin cannot be determined
	    if (pX && !sX) {
	      sX = (pX < 1) ? -1 : 1;
	    }
	    if (pY && !sY) {
	      sY = (pY < 1) ? -1 : 1;
	    }

	    return {
	      spinX: sX,
	      spinY: sY,
	      pixelX: pX,
	      pixelY: pY,
	    };
	  },
	  handleMouseEnter() {
	    const swiper = this;
	    swiper.mouseEntered = true;
	  },
	  handleMouseLeave() {
	    const swiper = this;
	    swiper.mouseEntered = false;
	  },
	  handle(event) {
	    let e = event;
	    const swiper = this;
	    const params = swiper.params.mousewheel;

	    if (swiper.params.cssMode) {
	      e.preventDefault();
	    }

	    if (!swiper.mouseEntered && !params.releaseOnEdges) return true;

	    if (e.originalEvent) e = e.originalEvent; // jquery fix
	    let delta = 0;
	    const rtlFactor = swiper.rtlTranslate ? -1 : 1;

	    const data = Mousewheel.normalize(e);

	    if (params.forceToAxis) {
	      if (swiper.isHorizontal()) {
	        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = data.pixelX * rtlFactor;
	        else return true;
	      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = data.pixelY;
	      else return true;
	    } else {
	      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
	    }

	    if (delta === 0) return true;

	    if (params.invert) delta = -delta;

	    if (!swiper.params.freeMode) {
	      if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
	        if (delta < 0) {
	          if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
	            swiper.slideNext();
	            swiper.emit('scroll', e);
	          } else if (params.releaseOnEdges) return true;
	        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
	          swiper.slidePrev();
	          swiper.emit('scroll', e);
	        } else if (params.releaseOnEdges) return true;
	      }
	      swiper.mousewheel.lastScrollTime = (new win.Date()).getTime();
	    } else {
	      // Freemode or scrollContainer:
	      if (swiper.params.loop) {
	        swiper.loopFix();
	      }
	      let position = swiper.getTranslate() + (delta * params.sensitivity);
	      const wasBeginning = swiper.isBeginning;
	      const wasEnd = swiper.isEnd;

	      if (position >= swiper.minTranslate()) position = swiper.minTranslate();
	      if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();

	      swiper.setTransition(0);
	      swiper.setTranslate(position);
	      swiper.updateProgress();
	      swiper.updateActiveIndex();
	      swiper.updateSlidesClasses();

	      if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
	        swiper.updateSlidesClasses();
	      }

	      if (swiper.params.freeModeSticky) {
	        clearTimeout(swiper.mousewheel.timeout);
	        swiper.mousewheel.timeout = Utils.nextTick(() => {
	          swiper.slideToClosest();
	        }, 300);
	      }
	      // Emit event
	      swiper.emit('scroll', e);

	      // Stop autoplay
	      if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop();
	      // Return page scroll on edge positions
	      if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
	    }

	    if (e.preventDefault) e.preventDefault();
	    else e.returnValue = false;
	    return false;
	  },
	  enable() {
	    const swiper = this;
	    const event = Mousewheel.event();
	    if (swiper.params.cssMode) {
	      swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
	      return true;
	    }
	    if (!event) return false;
	    if (swiper.mousewheel.enabled) return false;
	    let target = swiper.$el;
	    if (swiper.params.mousewheel.eventsTarged !== 'container') {
	      target = $(swiper.params.mousewheel.eventsTarged);
	    }
	    target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
	    target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
	    target.on(event, swiper.mousewheel.handle);
	    swiper.mousewheel.enabled = true;
	    return true;
	  },
	  disable() {
	    const swiper = this;
	    const event = Mousewheel.event();
	    if (swiper.params.cssMode) {
	      swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
	      return true;
	    }
	    if (!event) return false;
	    if (!swiper.mousewheel.enabled) return false;
	    let target = swiper.$el;
	    if (swiper.params.mousewheel.eventsTarged !== 'container') {
	      target = $(swiper.params.mousewheel.eventsTarged);
	    }
	    target.off(event, swiper.mousewheel.handle);
	    swiper.mousewheel.enabled = false;
	    return true;
	  },
	};

	var Mousewheel$1 = {
	  name: 'mousewheel',
	  params: {
	    mousewheel: {
	      enabled: false,
	      releaseOnEdges: false,
	      invert: false,
	      forceToAxis: false,
	      sensitivity: 1,
	      eventsTarged: 'container',
	    },
	  },
	  create() {
	    const swiper = this;
	    Utils.extend(swiper, {
	      mousewheel: {
	        enabled: false,
	        enable: Mousewheel.enable.bind(swiper),
	        disable: Mousewheel.disable.bind(swiper),
	        handle: Mousewheel.handle.bind(swiper),
	        handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
	        handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
	        lastScrollTime: Utils.now(),
	      },
	    });
	  },
	  on: {
	    init() {
	      const swiper = this;
	      if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
	        swiper.mousewheel.disable();
	      }
	      if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
	    },
	    destroy() {
	      const swiper = this;
	      if (swiper.params.cssMode) {
	        swiper.mousewheel.enable();
	      }
	      if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
	    },
	  },
	};

	const Navigation = {
	  update() {
	    // Update Navigation Buttons
	    const swiper = this;
	    const params = swiper.params.navigation;

	    if (swiper.params.loop) return;
	    const { $nextEl, $prevEl } = swiper.navigation;

	    if ($prevEl && $prevEl.length > 0) {
	      if (swiper.isBeginning) {
	        $prevEl.addClass(params.disabledClass);
	      } else {
	        $prevEl.removeClass(params.disabledClass);
	      }
	      $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
	    }
	    if ($nextEl && $nextEl.length > 0) {
	      if (swiper.isEnd) {
	        $nextEl.addClass(params.disabledClass);
	      } else {
	        $nextEl.removeClass(params.disabledClass);
	      }
	      $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
	    }
	  },
	  onPrevClick(e) {
	    const swiper = this;
	    e.preventDefault();
	    if (swiper.isBeginning && !swiper.params.loop) return;
	    swiper.slidePrev();
	  },
	  onNextClick(e) {
	    const swiper = this;
	    e.preventDefault();
	    if (swiper.isEnd && !swiper.params.loop) return;
	    swiper.slideNext();
	  },
	  init() {
	    const swiper = this;
	    const params = swiper.params.navigation;
	    if (!(params.nextEl || params.prevEl)) return;

	    let $nextEl;
	    let $prevEl;
	    if (params.nextEl) {
	      $nextEl = $(params.nextEl);
	      if (
	        swiper.params.uniqueNavElements
	        && typeof params.nextEl === 'string'
	        && $nextEl.length > 1
	        && swiper.$el.find(params.nextEl).length === 1
	      ) {
	        $nextEl = swiper.$el.find(params.nextEl);
	      }
	    }
	    if (params.prevEl) {
	      $prevEl = $(params.prevEl);
	      if (
	        swiper.params.uniqueNavElements
	        && typeof params.prevEl === 'string'
	        && $prevEl.length > 1
	        && swiper.$el.find(params.prevEl).length === 1
	      ) {
	        $prevEl = swiper.$el.find(params.prevEl);
	      }
	    }

	    if ($nextEl && $nextEl.length > 0) {
	      $nextEl.on('click', swiper.navigation.onNextClick);
	    }
	    if ($prevEl && $prevEl.length > 0) {
	      $prevEl.on('click', swiper.navigation.onPrevClick);
	    }

	    Utils.extend(swiper.navigation, {
	      $nextEl,
	      nextEl: $nextEl && $nextEl[0],
	      $prevEl,
	      prevEl: $prevEl && $prevEl[0],
	    });
	  },
	  destroy() {
	    const swiper = this;
	    const { $nextEl, $prevEl } = swiper.navigation;
	    if ($nextEl && $nextEl.length) {
	      $nextEl.off('click', swiper.navigation.onNextClick);
	      $nextEl.removeClass(swiper.params.navigation.disabledClass);
	    }
	    if ($prevEl && $prevEl.length) {
	      $prevEl.off('click', swiper.navigation.onPrevClick);
	      $prevEl.removeClass(swiper.params.navigation.disabledClass);
	    }
	  },
	};

	var Navigation$1 = {
	  name: 'navigation',
	  params: {
	    navigation: {
	      nextEl: null,
	      prevEl: null,

	      hideOnClick: false,
	      disabledClass: 'swiper-button-disabled',
	      hiddenClass: 'swiper-button-hidden',
	      lockClass: 'swiper-button-lock',
	    },
	  },
	  create() {
	    const swiper = this;
	    Utils.extend(swiper, {
	      navigation: {
	        init: Navigation.init.bind(swiper),
	        update: Navigation.update.bind(swiper),
	        destroy: Navigation.destroy.bind(swiper),
	        onNextClick: Navigation.onNextClick.bind(swiper),
	        onPrevClick: Navigation.onPrevClick.bind(swiper),
	      },
	    });
	  },
	  on: {
	    init() {
	      const swiper = this;
	      swiper.navigation.init();
	      swiper.navigation.update();
	    },
	    toEdge() {
	      const swiper = this;
	      swiper.navigation.update();
	    },
	    fromEdge() {
	      const swiper = this;
	      swiper.navigation.update();
	    },
	    destroy() {
	      const swiper = this;
	      swiper.navigation.destroy();
	    },
	    click(e) {
	      const swiper = this;
	      const { $nextEl, $prevEl } = swiper.navigation;
	      if (
	        swiper.params.navigation.hideOnClick
	        && !$(e.target).is($prevEl)
	        && !$(e.target).is($nextEl)
	      ) {
	        let isHidden;
	        if ($nextEl) {
	          isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
	        } else if ($prevEl) {
	          isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
	        }
	        if (isHidden === true) {
	          swiper.emit('navigationShow', swiper);
	        } else {
	          swiper.emit('navigationHide', swiper);
	        }
	        if ($nextEl) {
	          $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
	        }
	        if ($prevEl) {
	          $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
	        }
	      }
	    },
	  },
	};

	const Pagination = {
	  update() {
	    // Render || Update Pagination bullets/items
	    const swiper = this;
	    const rtl = swiper.rtl;
	    const params = swiper.params.pagination;
	    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
	    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
	    const $el = swiper.pagination.$el;
	    // Current/Total
	    let current;
	    const total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
	    if (swiper.params.loop) {
	      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
	      if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
	        current -= (slidesLength - (swiper.loopedSlides * 2));
	      }
	      if (current > total - 1) current -= total;
	      if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
	    } else if (typeof swiper.snapIndex !== 'undefined') {
	      current = swiper.snapIndex;
	    } else {
	      current = swiper.activeIndex || 0;
	    }
	    // Types
	    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
	      const bullets = swiper.pagination.bullets;
	      let firstIndex;
	      let lastIndex;
	      let midIndex;
	      if (params.dynamicBullets) {
	        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
	        $el.css(swiper.isHorizontal() ? 'width' : 'height', `${swiper.pagination.bulletSize * (params.dynamicMainBullets + 4)}px`);
	        if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
	          swiper.pagination.dynamicBulletIndex += (current - swiper.previousIndex);
	          if (swiper.pagination.dynamicBulletIndex > (params.dynamicMainBullets - 1)) {
	            swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
	          } else if (swiper.pagination.dynamicBulletIndex < 0) {
	            swiper.pagination.dynamicBulletIndex = 0;
	          }
	        }
	        firstIndex = current - swiper.pagination.dynamicBulletIndex;
	        lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
	        midIndex = (lastIndex + firstIndex) / 2;
	      }
	      bullets.removeClass(`${params.bulletActiveClass} ${params.bulletActiveClass}-next ${params.bulletActiveClass}-next-next ${params.bulletActiveClass}-prev ${params.bulletActiveClass}-prev-prev ${params.bulletActiveClass}-main`);
	      if ($el.length > 1) {
	        bullets.each((index, bullet) => {
	          const $bullet = $(bullet);
	          const bulletIndex = $bullet.index();
	          if (bulletIndex === current) {
	            $bullet.addClass(params.bulletActiveClass);
	          }
	          if (params.dynamicBullets) {
	            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
	              $bullet.addClass(`${params.bulletActiveClass}-main`);
	            }
	            if (bulletIndex === firstIndex) {
	              $bullet
	                .prev()
	                .addClass(`${params.bulletActiveClass}-prev`)
	                .prev()
	                .addClass(`${params.bulletActiveClass}-prev-prev`);
	            }
	            if (bulletIndex === lastIndex) {
	              $bullet
	                .next()
	                .addClass(`${params.bulletActiveClass}-next`)
	                .next()
	                .addClass(`${params.bulletActiveClass}-next-next`);
	            }
	          }
	        });
	      } else {
	        const $bullet = bullets.eq(current);
	        $bullet.addClass(params.bulletActiveClass);
	        if (params.dynamicBullets) {
	          const $firstDisplayedBullet = bullets.eq(firstIndex);
	          const $lastDisplayedBullet = bullets.eq(lastIndex);
	          for (let i = firstIndex; i <= lastIndex; i += 1) {
	            bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
	          }
	          $firstDisplayedBullet
	            .prev()
	            .addClass(`${params.bulletActiveClass}-prev`)
	            .prev()
	            .addClass(`${params.bulletActiveClass}-prev-prev`);
	          $lastDisplayedBullet
	            .next()
	            .addClass(`${params.bulletActiveClass}-next`)
	            .next()
	            .addClass(`${params.bulletActiveClass}-next-next`);
	        }
	      }
	      if (params.dynamicBullets) {
	        const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
	        const bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (midIndex * swiper.pagination.bulletSize);
	        const offsetProp = rtl ? 'right' : 'left';
	        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
	      }
	    }
	    if (params.type === 'fraction') {
	      $el.find(`.${params.currentClass}`).text(params.formatFractionCurrent(current + 1));
	      $el.find(`.${params.totalClass}`).text(params.formatFractionTotal(total));
	    }
	    if (params.type === 'progressbar') {
	      let progressbarDirection;
	      if (params.progressbarOpposite) {
	        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
	      } else {
	        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
	      }
	      const scale = (current + 1) / total;
	      let scaleX = 1;
	      let scaleY = 1;
	      if (progressbarDirection === 'horizontal') {
	        scaleX = scale;
	      } else {
	        scaleY = scale;
	      }
	      $el.find(`.${params.progressbarFillClass}`).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
	    }
	    if (params.type === 'custom' && params.renderCustom) {
	      $el.html(params.renderCustom(swiper, current + 1, total));
	      swiper.emit('paginationRender', swiper, $el[0]);
	    } else {
	      swiper.emit('paginationUpdate', swiper, $el[0]);
	    }
	    $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
	  },
	  render() {
	    // Render Container
	    const swiper = this;
	    const params = swiper.params.pagination;
	    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
	    const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

	    const $el = swiper.pagination.$el;
	    let paginationHTML = '';
	    if (params.type === 'bullets') {
	      const numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
	      for (let i = 0; i < numberOfBullets; i += 1) {
	        if (params.renderBullet) {
	          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
	        } else {
	          paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
	        }
	      }
	      $el.html(paginationHTML);
	      swiper.pagination.bullets = $el.find(`.${params.bulletClass}`);
	    }
	    if (params.type === 'fraction') {
	      if (params.renderFraction) {
	        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
	      } else {
	        paginationHTML = `<span class="${params.currentClass}"></span>`
	        + ' / '
	        + `<span class="${params.totalClass}"></span>`;
	      }
	      $el.html(paginationHTML);
	    }
	    if (params.type === 'progressbar') {
	      if (params.renderProgressbar) {
	        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
	      } else {
	        paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
	      }
	      $el.html(paginationHTML);
	    }
	    if (params.type !== 'custom') {
	      swiper.emit('paginationRender', swiper.pagination.$el[0]);
	    }
	  },
	  init() {
	    const swiper = this;
	    const params = swiper.params.pagination;
	    if (!params.el) return;

	    let $el = $(params.el);
	    if ($el.length === 0) return;

	    if (
	      swiper.params.uniqueNavElements
	      && typeof params.el === 'string'
	      && $el.length > 1
	      && swiper.$el.find(params.el).length === 1
	    ) {
	      $el = swiper.$el.find(params.el);
	    }

	    if (params.type === 'bullets' && params.clickable) {
	      $el.addClass(params.clickableClass);
	    }

	    $el.addClass(params.modifierClass + params.type);

	    if (params.type === 'bullets' && params.dynamicBullets) {
	      $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
	      swiper.pagination.dynamicBulletIndex = 0;
	      if (params.dynamicMainBullets < 1) {
	        params.dynamicMainBullets = 1;
	      }
	    }
	    if (params.type === 'progressbar' && params.progressbarOpposite) {
	      $el.addClass(params.progressbarOppositeClass);
	    }

	    if (params.clickable) {
	      $el.on('click', `.${params.bulletClass}`, function onClick(e) {
	        e.preventDefault();
	        let index = $(this).index() * swiper.params.slidesPerGroup;
	        if (swiper.params.loop) index += swiper.loopedSlides;
	        swiper.slideTo(index);
	      });
	    }

	    Utils.extend(swiper.pagination, {
	      $el,
	      el: $el[0],
	    });
	  },
	  destroy() {
	    const swiper = this;
	    const params = swiper.params.pagination;
	    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
	    const $el = swiper.pagination.$el;

	    $el.removeClass(params.hiddenClass);
	    $el.removeClass(params.modifierClass + params.type);
	    if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
	    if (params.clickable) {
	      $el.off('click', `.${params.bulletClass}`);
	    }
	  },
	};

	var Pagination$1 = {
	  name: 'pagination',
	  params: {
	    pagination: {
	      el: null,
	      bulletElement: 'span',
	      clickable: false,
	      hideOnClick: false,
	      renderBullet: null,
	      renderProgressbar: null,
	      renderFraction: null,
	      renderCustom: null,
	      progressbarOpposite: false,
	      type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
	      dynamicBullets: false,
	      dynamicMainBullets: 1,
	      formatFractionCurrent: (number) => number,
	      formatFractionTotal: (number) => number,
	      bulletClass: 'swiper-pagination-bullet',
	      bulletActiveClass: 'swiper-pagination-bullet-active',
	      modifierClass: 'swiper-pagination-', // NEW
	      currentClass: 'swiper-pagination-current',
	      totalClass: 'swiper-pagination-total',
	      hiddenClass: 'swiper-pagination-hidden',
	      progressbarFillClass: 'swiper-pagination-progressbar-fill',
	      progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
	      clickableClass: 'swiper-pagination-clickable', // NEW
	      lockClass: 'swiper-pagination-lock',
	    },
	  },
	  create() {
	    const swiper = this;
	    Utils.extend(swiper, {
	      pagination: {
	        init: Pagination.init.bind(swiper),
	        render: Pagination.render.bind(swiper),
	        update: Pagination.update.bind(swiper),
	        destroy: Pagination.destroy.bind(swiper),
	        dynamicBulletIndex: 0,
	      },
	    });
	  },
	  on: {
	    init() {
	      const swiper = this;
	      swiper.pagination.init();
	      swiper.pagination.render();
	      swiper.pagination.update();
	    },
	    activeIndexChange() {
	      const swiper = this;
	      if (swiper.params.loop) {
	        swiper.pagination.update();
	      } else if (typeof swiper.snapIndex === 'undefined') {
	        swiper.pagination.update();
	      }
	    },
	    snapIndexChange() {
	      const swiper = this;
	      if (!swiper.params.loop) {
	        swiper.pagination.update();
	      }
	    },
	    slidesLengthChange() {
	      const swiper = this;
	      if (swiper.params.loop) {
	        swiper.pagination.render();
	        swiper.pagination.update();
	      }
	    },
	    snapGridLengthChange() {
	      const swiper = this;
	      if (!swiper.params.loop) {
	        swiper.pagination.render();
	        swiper.pagination.update();
	      }
	    },
	    destroy() {
	      const swiper = this;
	      swiper.pagination.destroy();
	    },
	    click(e) {
	      const swiper = this;
	      if (
	        swiper.params.pagination.el
	        && swiper.params.pagination.hideOnClick
	        && swiper.pagination.$el.length > 0
	        && !$(e.target).hasClass(swiper.params.pagination.bulletClass)
	      ) {
	        const isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
	        if (isHidden === true) {
	          swiper.emit('paginationShow', swiper);
	        } else {
	          swiper.emit('paginationHide', swiper);
	        }
	        swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
	      }
	    },
	  },
	};

	const Scrollbar = {
	  setTranslate() {
	    const swiper = this;
	    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
	    const { scrollbar, rtlTranslate: rtl, progress } = swiper;
	    const {
	      dragSize, trackSize, $dragEl, $el,
	    } = scrollbar;
	    const params = swiper.params.scrollbar;

	    let newSize = dragSize;
	    let newPos = (trackSize - dragSize) * progress;
	    if (rtl) {
	      newPos = -newPos;
	      if (newPos > 0) {
	        newSize = dragSize - newPos;
	        newPos = 0;
	      } else if (-newPos + dragSize > trackSize) {
	        newSize = trackSize + newPos;
	      }
	    } else if (newPos < 0) {
	      newSize = dragSize + newPos;
	      newPos = 0;
	    } else if (newPos + dragSize > trackSize) {
	      newSize = trackSize - newPos;
	    }
	    if (swiper.isHorizontal()) {
	      $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
	      $dragEl[0].style.width = `${newSize}px`;
	    } else {
	      $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
	      $dragEl[0].style.height = `${newSize}px`;
	    }
	    if (params.hide) {
	      clearTimeout(swiper.scrollbar.timeout);
	      $el[0].style.opacity = 1;
	      swiper.scrollbar.timeout = setTimeout(() => {
	        $el[0].style.opacity = 0;
	        $el.transition(400);
	      }, 1000);
	    }
	  },
	  setTransition(duration) {
	    const swiper = this;
	    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
	    swiper.scrollbar.$dragEl.transition(duration);
	  },
	  updateSize() {
	    const swiper = this;
	    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;

	    const { scrollbar } = swiper;
	    const { $dragEl, $el } = scrollbar;

	    $dragEl[0].style.width = '';
	    $dragEl[0].style.height = '';
	    const trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

	    const divider = swiper.size / swiper.virtualSize;
	    const moveDivider = divider * (trackSize / swiper.size);
	    let dragSize;
	    if (swiper.params.scrollbar.dragSize === 'auto') {
	      dragSize = trackSize * divider;
	    } else {
	      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
	    }

	    if (swiper.isHorizontal()) {
	      $dragEl[0].style.width = `${dragSize}px`;
	    } else {
	      $dragEl[0].style.height = `${dragSize}px`;
	    }

	    if (divider >= 1) {
	      $el[0].style.display = 'none';
	    } else {
	      $el[0].style.display = '';
	    }
	    if (swiper.params.scrollbar.hide) {
	      $el[0].style.opacity = 0;
	    }
	    Utils.extend(scrollbar, {
	      trackSize,
	      divider,
	      moveDivider,
	      dragSize,
	    });
	    scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
	  },
	  getPointerPosition(e) {
	    const swiper = this;
	    if (swiper.isHorizontal()) {
	      return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].clientX : e.clientX);
	    }
	    return ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].clientY : e.clientY);
	  },
	  setDragPosition(e) {
	    const swiper = this;
	    const { scrollbar, rtlTranslate: rtl } = swiper;
	    const {
	      $el,
	      dragSize,
	      trackSize,
	      dragStartPos,
	    } = scrollbar;

	    let positionRatio;
	    positionRatio = ((scrollbar.getPointerPosition(e)) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top']
	      - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
	    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
	    if (rtl) {
	      positionRatio = 1 - positionRatio;
	    }

	    const position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);

	    swiper.updateProgress(position);
	    swiper.setTranslate(position);
	    swiper.updateActiveIndex();
	    swiper.updateSlidesClasses();
	  },
	  onDragStart(e) {
	    const swiper = this;
	    const params = swiper.params.scrollbar;
	    const { scrollbar, $wrapperEl } = swiper;
	    const { $el, $dragEl } = scrollbar;
	    swiper.scrollbar.isTouched = true;
	    swiper.scrollbar.dragStartPos = (e.target === $dragEl[0] || e.target === $dragEl)
	      ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
	    e.preventDefault();
	    e.stopPropagation();

	    $wrapperEl.transition(100);
	    $dragEl.transition(100);
	    scrollbar.setDragPosition(e);

	    clearTimeout(swiper.scrollbar.dragTimeout);

	    $el.transition(0);
	    if (params.hide) {
	      $el.css('opacity', 1);
	    }
	    if (swiper.params.cssMode) {
	      swiper.$wrapperEl.css('scroll-snap-type', 'none');
	    }
	    swiper.emit('scrollbarDragStart', e);
	  },
	  onDragMove(e) {
	    const swiper = this;
	    const { scrollbar, $wrapperEl } = swiper;
	    const { $el, $dragEl } = scrollbar;

	    if (!swiper.scrollbar.isTouched) return;
	    if (e.preventDefault) e.preventDefault();
	    else e.returnValue = false;
	    scrollbar.setDragPosition(e);
	    $wrapperEl.transition(0);
	    $el.transition(0);
	    $dragEl.transition(0);
	    swiper.emit('scrollbarDragMove', e);
	  },
	  onDragEnd(e) {
	    const swiper = this;

	    const params = swiper.params.scrollbar;
	    const { scrollbar, $wrapperEl } = swiper;
	    const { $el } = scrollbar;

	    if (!swiper.scrollbar.isTouched) return;
	    swiper.scrollbar.isTouched = false;
	    if (swiper.params.cssMode) {
	      swiper.$wrapperEl.css('scroll-snap-type', '');
	      $wrapperEl.transition('');
	    }
	    if (params.hide) {
	      clearTimeout(swiper.scrollbar.dragTimeout);
	      swiper.scrollbar.dragTimeout = Utils.nextTick(() => {
	        $el.css('opacity', 0);
	        $el.transition(400);
	      }, 1000);
	    }
	    swiper.emit('scrollbarDragEnd', e);
	    if (params.snapOnRelease) {
	      swiper.slideToClosest();
	    }
	  },
	  enableDraggable() {
	    const swiper = this;
	    if (!swiper.params.scrollbar.el) return;
	    const {
	      scrollbar, touchEventsTouch, touchEventsDesktop, params,
	    } = swiper;
	    const $el = scrollbar.$el;
	    const target = $el[0];
	    const activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
	    const passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
	    if (!Support.touch) {
	      target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
	      doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
	      doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
	    } else {
	      target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
	      target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
	      target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
	    }
	  },
	  disableDraggable() {
	    const swiper = this;
	    if (!swiper.params.scrollbar.el) return;
	    const {
	      scrollbar, touchEventsTouch, touchEventsDesktop, params,
	    } = swiper;
	    const $el = scrollbar.$el;
	    const target = $el[0];
	    const activeListener = Support.passiveListener && params.passiveListeners ? { passive: false, capture: false } : false;
	    const passiveListener = Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
	    if (!Support.touch) {
	      target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
	      doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
	      doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
	    } else {
	      target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
	      target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
	      target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
	    }
	  },
	  init() {
	    const swiper = this;
	    if (!swiper.params.scrollbar.el) return;
	    const { scrollbar, $el: $swiperEl } = swiper;
	    const params = swiper.params.scrollbar;

	    let $el = $(params.el);
	    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
	      $el = $swiperEl.find(params.el);
	    }

	    let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);
	    if ($dragEl.length === 0) {
	      $dragEl = $(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
	      $el.append($dragEl);
	    }

	    Utils.extend(scrollbar, {
	      $el,
	      el: $el[0],
	      $dragEl,
	      dragEl: $dragEl[0],
	    });

	    if (params.draggable) {
	      scrollbar.enableDraggable();
	    }
	  },
	  destroy() {
	    const swiper = this;
	    swiper.scrollbar.disableDraggable();
	  },
	};

	var Scrollbar$1 = {
	  name: 'scrollbar',
	  params: {
	    scrollbar: {
	      el: null,
	      dragSize: 'auto',
	      hide: false,
	      draggable: false,
	      snapOnRelease: true,
	      lockClass: 'swiper-scrollbar-lock',
	      dragClass: 'swiper-scrollbar-drag',
	    },
	  },
	  create() {
	    const swiper = this;
	    Utils.extend(swiper, {
	      scrollbar: {
	        init: Scrollbar.init.bind(swiper),
	        destroy: Scrollbar.destroy.bind(swiper),
	        updateSize: Scrollbar.updateSize.bind(swiper),
	        setTranslate: Scrollbar.setTranslate.bind(swiper),
	        setTransition: Scrollbar.setTransition.bind(swiper),
	        enableDraggable: Scrollbar.enableDraggable.bind(swiper),
	        disableDraggable: Scrollbar.disableDraggable.bind(swiper),
	        setDragPosition: Scrollbar.setDragPosition.bind(swiper),
	        getPointerPosition: Scrollbar.getPointerPosition.bind(swiper),
	        onDragStart: Scrollbar.onDragStart.bind(swiper),
	        onDragMove: Scrollbar.onDragMove.bind(swiper),
	        onDragEnd: Scrollbar.onDragEnd.bind(swiper),
	        isTouched: false,
	        timeout: null,
	        dragTimeout: null,
	      },
	    });
	  },
	  on: {
	    init() {
	      const swiper = this;
	      swiper.scrollbar.init();
	      swiper.scrollbar.updateSize();
	      swiper.scrollbar.setTranslate();
	    },
	    update() {
	      const swiper = this;
	      swiper.scrollbar.updateSize();
	    },
	    resize() {
	      const swiper = this;
	      swiper.scrollbar.updateSize();
	    },
	    observerUpdate() {
	      const swiper = this;
	      swiper.scrollbar.updateSize();
	    },
	    setTranslate() {
	      const swiper = this;
	      swiper.scrollbar.setTranslate();
	    },
	    setTransition(duration) {
	      const swiper = this;
	      swiper.scrollbar.setTransition(duration);
	    },
	    destroy() {
	      const swiper = this;
	      swiper.scrollbar.destroy();
	    },
	  },
	};

	const Parallax = {
	  setTransform(el, progress) {
	    const swiper = this;
	    const { rtl } = swiper;

	    const $el = $(el);
	    const rtlFactor = rtl ? -1 : 1;

	    const p = $el.attr('data-swiper-parallax') || '0';
	    let x = $el.attr('data-swiper-parallax-x');
	    let y = $el.attr('data-swiper-parallax-y');
	    const scale = $el.attr('data-swiper-parallax-scale');
	    const opacity = $el.attr('data-swiper-parallax-opacity');

	    if (x || y) {
	      x = x || '0';
	      y = y || '0';
	    } else if (swiper.isHorizontal()) {
	      x = p;
	      y = '0';
	    } else {
	      y = p;
	      x = '0';
	    }

	    if ((x).indexOf('%') >= 0) {
	      x = `${parseInt(x, 10) * progress * rtlFactor}%`;
	    } else {
	      x = `${x * progress * rtlFactor}px`;
	    }
	    if ((y).indexOf('%') >= 0) {
	      y = `${parseInt(y, 10) * progress}%`;
	    } else {
	      y = `${y * progress}px`;
	    }

	    if (typeof opacity !== 'undefined' && opacity !== null) {
	      const currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
	      $el[0].style.opacity = currentOpacity;
	    }
	    if (typeof scale === 'undefined' || scale === null) {
	      $el.transform(`translate3d(${x}, ${y}, 0px)`);
	    } else {
	      const currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
	      $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
	    }
	  },
	  setTranslate() {
	    const swiper = this;
	    const {
	      $el, slides, progress, snapGrid,
	    } = swiper;
	    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
	      .each((index, el) => {
	        swiper.parallax.setTransform(el, progress);
	      });
	    slides.each((slideIndex, slideEl) => {
	      let slideProgress = slideEl.progress;
	      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
	        slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
	      }
	      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
	      $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
	        .each((index, el) => {
	          swiper.parallax.setTransform(el, slideProgress);
	        });
	    });
	  },
	  setTransition(duration = this.params.speed) {
	    const swiper = this;
	    const { $el } = swiper;
	    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]')
	      .each((index, parallaxEl) => {
	        const $parallaxEl = $(parallaxEl);
	        let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
	        if (duration === 0) parallaxDuration = 0;
	        $parallaxEl.transition(parallaxDuration);
	      });
	  },
	};

	var Parallax$1 = {
	  name: 'parallax',
	  params: {
	    parallax: {
	      enabled: false,
	    },
	  },
	  create() {
	    const swiper = this;
	    Utils.extend(swiper, {
	      parallax: {
	        setTransform: Parallax.setTransform.bind(swiper),
	        setTranslate: Parallax.setTranslate.bind(swiper),
	        setTransition: Parallax.setTransition.bind(swiper),
	      },
	    });
	  },
	  on: {
	    beforeInit() {
	      const swiper = this;
	      if (!swiper.params.parallax.enabled) return;
	      swiper.params.watchSlidesProgress = true;
	      swiper.originalParams.watchSlidesProgress = true;
	    },
	    init() {
	      const swiper = this;
	      if (!swiper.params.parallax.enabled) return;
	      swiper.parallax.setTranslate();
	    },
	    setTranslate() {
	      const swiper = this;
	      if (!swiper.params.parallax.enabled) return;
	      swiper.parallax.setTranslate();
	    },
	    setTransition(duration) {
	      const swiper = this;
	      if (!swiper.params.parallax.enabled) return;
	      swiper.parallax.setTransition(duration);
	    },
	  },
	};

	const Zoom = {
	  // Calc Scale From Multi-touches
	  getDistanceBetweenTouches(e) {
	    if (e.targetTouches.length < 2) return 1;
	    const x1 = e.targetTouches[0].pageX;
	    const y1 = e.targetTouches[0].pageY;
	    const x2 = e.targetTouches[1].pageX;
	    const y2 = e.targetTouches[1].pageY;
	    const distance = Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));
	    return distance;
	  },
	  // Events
	  onGestureStart(e) {
	    const swiper = this;
	    const params = swiper.params.zoom;
	    const zoom = swiper.zoom;
	    const { gesture } = zoom;
	    zoom.fakeGestureTouched = false;
	    zoom.fakeGestureMoved = false;
	    if (!Support.gestures) {
	      if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
	        return;
	      }
	      zoom.fakeGestureTouched = true;
	      gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
	    }
	    if (!gesture.$slideEl || !gesture.$slideEl.length) {
	      gesture.$slideEl = $(e.target).closest('.swiper-slide');
	      if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
	      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
	      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
	      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
	      if (gesture.$imageWrapEl.length === 0) {
	        gesture.$imageEl = undefined;
	        return;
	      }
	    }
	    gesture.$imageEl.transition(0);
	    swiper.zoom.isScaling = true;
	  },
	  onGestureChange(e) {
	    const swiper = this;
	    const params = swiper.params.zoom;
	    const zoom = swiper.zoom;
	    const { gesture } = zoom;
	    if (!Support.gestures) {
	      if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
	        return;
	      }
	      zoom.fakeGestureMoved = true;
	      gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
	    }
	    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
	    if (Support.gestures) {
	      zoom.scale = e.scale * zoom.currentScale;
	    } else {
	      zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
	    }
	    if (zoom.scale > gesture.maxRatio) {
	      zoom.scale = (gesture.maxRatio - 1) + (((zoom.scale - gesture.maxRatio) + 1) ** 0.5);
	    }
	    if (zoom.scale < params.minRatio) {
	      zoom.scale = (params.minRatio + 1) - (((params.minRatio - zoom.scale) + 1) ** 0.5);
	    }
	    gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
	  },
	  onGestureEnd(e) {
	    const swiper = this;
	    const params = swiper.params.zoom;
	    const zoom = swiper.zoom;
	    const { gesture } = zoom;
	    if (!Support.gestures) {
	      if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
	        return;
	      }
	      if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
	        return;
	      }
	      zoom.fakeGestureTouched = false;
	      zoom.fakeGestureMoved = false;
	    }
	    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
	    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
	    gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
	    zoom.currentScale = zoom.scale;
	    zoom.isScaling = false;
	    if (zoom.scale === 1) gesture.$slideEl = undefined;
	  },
	  onTouchStart(e) {
	    const swiper = this;
	    const zoom = swiper.zoom;
	    const { gesture, image } = zoom;
	    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
	    if (image.isTouched) return;
	    if (Device.android) e.preventDefault();
	    image.isTouched = true;
	    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
	    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
	  },
	  onTouchMove(e) {
	    const swiper = this;
	    const zoom = swiper.zoom;
	    const { gesture, image, velocity } = zoom;
	    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
	    swiper.allowClick = false;
	    if (!image.isTouched || !gesture.$slideEl) return;

	    if (!image.isMoved) {
	      image.width = gesture.$imageEl[0].offsetWidth;
	      image.height = gesture.$imageEl[0].offsetHeight;
	      image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
	      image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
	      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
	      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
	      gesture.$imageWrapEl.transition(0);
	      if (swiper.rtl) {
	        image.startX = -image.startX;
	        image.startY = -image.startY;
	      }
	    }
	    // Define if we need image drag
	    const scaledWidth = image.width * zoom.scale;
	    const scaledHeight = image.height * zoom.scale;

	    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;

	    image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
	    image.maxX = -image.minX;
	    image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
	    image.maxY = -image.minY;

	    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

	    if (!image.isMoved && !zoom.isScaling) {
	      if (
	        swiper.isHorizontal()
	        && (
	          (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x)
	          || (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
	        )
	      ) {
	        image.isTouched = false;
	        return;
	      } if (
	        !swiper.isHorizontal()
	        && (
	          (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y)
	          || (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
	        )
	      ) {
	        image.isTouched = false;
	        return;
	      }
	    }
	    e.preventDefault();
	    e.stopPropagation();

	    image.isMoved = true;
	    image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
	    image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;

	    if (image.currentX < image.minX) {
	      image.currentX = (image.minX + 1) - (((image.minX - image.currentX) + 1) ** 0.8);
	    }
	    if (image.currentX > image.maxX) {
	      image.currentX = (image.maxX - 1) + (((image.currentX - image.maxX) + 1) ** 0.8);
	    }

	    if (image.currentY < image.minY) {
	      image.currentY = (image.minY + 1) - (((image.minY - image.currentY) + 1) ** 0.8);
	    }
	    if (image.currentY > image.maxY) {
	      image.currentY = (image.maxY - 1) + (((image.currentY - image.maxY) + 1) ** 0.8);
	    }

	    // Velocity
	    if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
	    if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
	    if (!velocity.prevTime) velocity.prevTime = Date.now();
	    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
	    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
	    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
	    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
	    velocity.prevPositionX = image.touchesCurrent.x;
	    velocity.prevPositionY = image.touchesCurrent.y;
	    velocity.prevTime = Date.now();

	    gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
	  },
	  onTouchEnd() {
	    const swiper = this;
	    const zoom = swiper.zoom;
	    const { gesture, image, velocity } = zoom;
	    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
	    if (!image.isTouched || !image.isMoved) {
	      image.isTouched = false;
	      image.isMoved = false;
	      return;
	    }
	    image.isTouched = false;
	    image.isMoved = false;
	    let momentumDurationX = 300;
	    let momentumDurationY = 300;
	    const momentumDistanceX = velocity.x * momentumDurationX;
	    const newPositionX = image.currentX + momentumDistanceX;
	    const momentumDistanceY = velocity.y * momentumDurationY;
	    const newPositionY = image.currentY + momentumDistanceY;

	    // Fix duration
	    if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
	    if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
	    const momentumDuration = Math.max(momentumDurationX, momentumDurationY);

	    image.currentX = newPositionX;
	    image.currentY = newPositionY;

	    // Define if we need image drag
	    const scaledWidth = image.width * zoom.scale;
	    const scaledHeight = image.height * zoom.scale;
	    image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
	    image.maxX = -image.minX;
	    image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
	    image.maxY = -image.minY;
	    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
	    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

	    gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
	  },
	  onTransitionEnd() {
	    const swiper = this;
	    const zoom = swiper.zoom;
	    const { gesture } = zoom;
	    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
	      gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
	      gesture.$imageWrapEl.transform('translate3d(0,0,0)');

	      zoom.scale = 1;
	      zoom.currentScale = 1;

	      gesture.$slideEl = undefined;
	      gesture.$imageEl = undefined;
	      gesture.$imageWrapEl = undefined;
	    }
	  },
	  // Toggle Zoom
	  toggle(e) {
	    const swiper = this;
	    const zoom = swiper.zoom;

	    if (zoom.scale && zoom.scale !== 1) {
	      // Zoom Out
	      zoom.out();
	    } else {
	      // Zoom In
	      zoom.in(e);
	    }
	  },
	  in(e) {
	    const swiper = this;

	    const zoom = swiper.zoom;
	    const params = swiper.params.zoom;
	    const { gesture, image } = zoom;

	    if (!gesture.$slideEl) {
	      gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
	      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
	      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
	    }
	    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

	    gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);

	    let touchX;
	    let touchY;
	    let offsetX;
	    let offsetY;
	    let diffX;
	    let diffY;
	    let translateX;
	    let translateY;
	    let imageWidth;
	    let imageHeight;
	    let scaledWidth;
	    let scaledHeight;
	    let translateMinX;
	    let translateMinY;
	    let translateMaxX;
	    let translateMaxY;
	    let slideWidth;
	    let slideHeight;

	    if (typeof image.touchesStart.x === 'undefined' && e) {
	      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
	      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
	    } else {
	      touchX = image.touchesStart.x;
	      touchY = image.touchesStart.y;
	    }

	    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
	    zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
	    if (e) {
	      slideWidth = gesture.$slideEl[0].offsetWidth;
	      slideHeight = gesture.$slideEl[0].offsetHeight;
	      offsetX = gesture.$slideEl.offset().left;
	      offsetY = gesture.$slideEl.offset().top;
	      diffX = (offsetX + (slideWidth / 2)) - touchX;
	      diffY = (offsetY + (slideHeight / 2)) - touchY;

	      imageWidth = gesture.$imageEl[0].offsetWidth;
	      imageHeight = gesture.$imageEl[0].offsetHeight;
	      scaledWidth = imageWidth * zoom.scale;
	      scaledHeight = imageHeight * zoom.scale;

	      translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
	      translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
	      translateMaxX = -translateMinX;
	      translateMaxY = -translateMinY;

	      translateX = diffX * zoom.scale;
	      translateY = diffY * zoom.scale;

	      if (translateX < translateMinX) {
	        translateX = translateMinX;
	      }
	      if (translateX > translateMaxX) {
	        translateX = translateMaxX;
	      }

	      if (translateY < translateMinY) {
	        translateY = translateMinY;
	      }
	      if (translateY > translateMaxY) {
	        translateY = translateMaxY;
	      }
	    } else {
	      translateX = 0;
	      translateY = 0;
	    }
	    gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
	    gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
	  },
	  out() {
	    const swiper = this;

	    const zoom = swiper.zoom;
	    const params = swiper.params.zoom;
	    const { gesture } = zoom;

	    if (!gesture.$slideEl) {
	      gesture.$slideEl = swiper.clickedSlide ? $(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
	      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
	      gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
	    }
	    if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

	    zoom.scale = 1;
	    zoom.currentScale = 1;
	    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
	    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
	    gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
	    gesture.$slideEl = undefined;
	  },
	  // Attach/Detach Events
	  enable() {
	    const swiper = this;
	    const zoom = swiper.zoom;
	    if (zoom.enabled) return;
	    zoom.enabled = true;

	    const passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;
	    const activeListenerWithCapture = Support.passiveListener ? { passive: false, capture: true } : true;

	    // Scale image
	    if (Support.gestures) {
	      swiper.$wrapperEl.on('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
	      swiper.$wrapperEl.on('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
	      swiper.$wrapperEl.on('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
	    } else if (swiper.touchEvents.start === 'touchstart') {
	      swiper.$wrapperEl.on(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
	      swiper.$wrapperEl.on(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
	      swiper.$wrapperEl.on(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
	      if (swiper.touchEvents.cancel) {
	        swiper.$wrapperEl.on(swiper.touchEvents.cancel, '.swiper-slide', zoom.onGestureEnd, passiveListener);
	      }
	    }

	    // Move image
	    swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, zoom.onTouchMove, activeListenerWithCapture);
	  },
	  disable() {
	    const swiper = this;
	    const zoom = swiper.zoom;
	    if (!zoom.enabled) return;

	    swiper.zoom.enabled = false;

	    const passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;
	    const activeListenerWithCapture = Support.passiveListener ? { passive: false, capture: true } : true;

	    // Scale image
	    if (Support.gestures) {
	      swiper.$wrapperEl.off('gesturestart', '.swiper-slide', zoom.onGestureStart, passiveListener);
	      swiper.$wrapperEl.off('gesturechange', '.swiper-slide', zoom.onGestureChange, passiveListener);
	      swiper.$wrapperEl.off('gestureend', '.swiper-slide', zoom.onGestureEnd, passiveListener);
	    } else if (swiper.touchEvents.start === 'touchstart') {
	      swiper.$wrapperEl.off(swiper.touchEvents.start, '.swiper-slide', zoom.onGestureStart, passiveListener);
	      swiper.$wrapperEl.off(swiper.touchEvents.move, '.swiper-slide', zoom.onGestureChange, passiveListener);
	      swiper.$wrapperEl.off(swiper.touchEvents.end, '.swiper-slide', zoom.onGestureEnd, passiveListener);
	      if (swiper.touchEvents.cancel) {
	        swiper.$wrapperEl.off(swiper.touchEvents.cancel, '.swiper-slide', zoom.onGestureEnd, passiveListener);
	      }
	    }

	    // Move image
	    swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, zoom.onTouchMove, activeListenerWithCapture);
	  },
	};

	var Zoom$1 = {
	  name: 'zoom',
	  params: {
	    zoom: {
	      enabled: false,
	      maxRatio: 3,
	      minRatio: 1,
	      toggle: true,
	      containerClass: 'swiper-zoom-container',
	      zoomedSlideClass: 'swiper-slide-zoomed',
	    },
	  },
	  create() {
	    const swiper = this;
	    const zoom = {
	      enabled: false,
	      scale: 1,
	      currentScale: 1,
	      isScaling: false,
	      gesture: {
	        $slideEl: undefined,
	        slideWidth: undefined,
	        slideHeight: undefined,
	        $imageEl: undefined,
	        $imageWrapEl: undefined,
	        maxRatio: 3,
	      },
	      image: {
	        isTouched: undefined,
	        isMoved: undefined,
	        currentX: undefined,
	        currentY: undefined,
	        minX: undefined,
	        minY: undefined,
	        maxX: undefined,
	        maxY: undefined,
	        width: undefined,
	        height: undefined,
	        startX: undefined,
	        startY: undefined,
	        touchesStart: {},
	        touchesCurrent: {},
	      },
	      velocity: {
	        x: undefined,
	        y: undefined,
	        prevPositionX: undefined,
	        prevPositionY: undefined,
	        prevTime: undefined,
	      },
	    };

	    ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach((methodName) => {
	      zoom[methodName] = Zoom[methodName].bind(swiper);
	    });
	    Utils.extend(swiper, {
	      zoom,
	    });

	    let scale = 1;
	    Object.defineProperty(swiper.zoom, 'scale', {
	      get() {
	        return scale;
	      },
	      set(value) {
	        if (scale !== value) {
	          const imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
	          const slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
	          swiper.emit('zoomChange', value, imageEl, slideEl);
	        }
	        scale = value;
	      },
	    });
	  },
	  on: {
	    init() {
	      const swiper = this;
	      if (swiper.params.zoom.enabled) {
	        swiper.zoom.enable();
	      }
	    },
	    destroy() {
	      const swiper = this;
	      swiper.zoom.disable();
	    },
	    touchStart(e) {
	      const swiper = this;
	      if (!swiper.zoom.enabled) return;
	      swiper.zoom.onTouchStart(e);
	    },
	    touchEnd(e) {
	      const swiper = this;
	      if (!swiper.zoom.enabled) return;
	      swiper.zoom.onTouchEnd(e);
	    },
	    doubleTap(e) {
	      const swiper = this;
	      if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
	        swiper.zoom.toggle(e);
	      }
	    },
	    transitionEnd() {
	      const swiper = this;
	      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
	        swiper.zoom.onTransitionEnd();
	      }
	    },
	    slideChange() {
	      const swiper = this;
	      if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
	        swiper.zoom.onTransitionEnd();
	      }
	    },
	  },
	};

	const Lazy = {
	  loadInSlide(index, loadInDuplicate = true) {
	    const swiper = this;
	    const params = swiper.params.lazy;
	    if (typeof index === 'undefined') return;
	    if (swiper.slides.length === 0) return;
	    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

	    const $slideEl = isVirtual
	      ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`)
	      : swiper.slides.eq(index);

	    let $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);
	    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
	      $images = $images.add($slideEl[0]);
	    }
	    if ($images.length === 0) return;

	    $images.each((imageIndex, imageEl) => {
	      const $imageEl = $(imageEl);
	      $imageEl.addClass(params.loadingClass);

	      const background = $imageEl.attr('data-background');
	      const src = $imageEl.attr('data-src');
	      const srcset = $imageEl.attr('data-srcset');
	      const sizes = $imageEl.attr('data-sizes');

	      swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, () => {
	        if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) return;
	        if (background) {
	          $imageEl.css('background-image', `url("${background}")`);
	          $imageEl.removeAttr('data-background');
	        } else {
	          if (srcset) {
	            $imageEl.attr('srcset', srcset);
	            $imageEl.removeAttr('data-srcset');
	          }
	          if (sizes) {
	            $imageEl.attr('sizes', sizes);
	            $imageEl.removeAttr('data-sizes');
	          }
	          if (src) {
	            $imageEl.attr('src', src);
	            $imageEl.removeAttr('data-src');
	          }
	        }

	        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
	        $slideEl.find(`.${params.preloaderClass}`).remove();
	        if (swiper.params.loop && loadInDuplicate) {
	          const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
	          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
	            const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
	            swiper.lazy.loadInSlide(originalSlide.index(), false);
	          } else {
	            const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
	            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
	          }
	        }
	        swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
	      });

	      swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
	    });
	  },
	  load() {
	    const swiper = this;
	    const {
	      $wrapperEl, params: swiperParams, slides, activeIndex,
	    } = swiper;
	    const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
	    const params = swiperParams.lazy;

	    let slidesPerView = swiperParams.slidesPerView;
	    if (slidesPerView === 'auto') {
	      slidesPerView = 0;
	    }

	    function slideExist(index) {
	      if (isVirtual) {
	        if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) {
	          return true;
	        }
	      } else if (slides[index]) return true;
	      return false;
	    }
	    function slideIndex(slideEl) {
	      if (isVirtual) {
	        return $(slideEl).attr('data-swiper-slide-index');
	      }
	      return $(slideEl).index();
	    }

	    if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;
	    if (swiper.params.watchSlidesVisibility) {
	      $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each((elIndex, slideEl) => {
	        const index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
	        swiper.lazy.loadInSlide(index);
	      });
	    } else if (slidesPerView > 1) {
	      for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
	        if (slideExist(i)) swiper.lazy.loadInSlide(i);
	      }
	    } else {
	      swiper.lazy.loadInSlide(activeIndex);
	    }
	    if (params.loadPrevNext) {
	      if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
	        const amount = params.loadPrevNextAmount;
	        const spv = slidesPerView;
	        const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
	        const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
	        // Next Slides
	        for (let i = activeIndex + slidesPerView; i < maxIndex; i += 1) {
	          if (slideExist(i)) swiper.lazy.loadInSlide(i);
	        }
	        // Prev Slides
	        for (let i = minIndex; i < activeIndex; i += 1) {
	          if (slideExist(i)) swiper.lazy.loadInSlide(i);
	        }
	      } else {
	        const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
	        if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));

	        const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
	        if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
	      }
	    }
	  },
	};

	var Lazy$1 = {
	  name: 'lazy',
	  params: {
	    lazy: {
	      enabled: false,
	      loadPrevNext: false,
	      loadPrevNextAmount: 1,
	      loadOnTransitionStart: false,

	      elementClass: 'swiper-lazy',
	      loadingClass: 'swiper-lazy-loading',
	      loadedClass: 'swiper-lazy-loaded',
	      preloaderClass: 'swiper-lazy-preloader',
	    },
	  },
	  create() {
	    const swiper = this;
	    Utils.extend(swiper, {
	      lazy: {
	        initialImageLoaded: false,
	        load: Lazy.load.bind(swiper),
	        loadInSlide: Lazy.loadInSlide.bind(swiper),
	      },
	    });
	  },
	  on: {
	    beforeInit() {
	      const swiper = this;
	      if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
	        swiper.params.preloadImages = false;
	      }
	    },
	    init() {
	      const swiper = this;
	      if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
	        swiper.lazy.load();
	      }
	    },
	    scroll() {
	      const swiper = this;
	      if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
	        swiper.lazy.load();
	      }
	    },
	    resize() {
	      const swiper = this;
	      if (swiper.params.lazy.enabled) {
	        swiper.lazy.load();
	      }
	    },
	    scrollbarDragMove() {
	      const swiper = this;
	      if (swiper.params.lazy.enabled) {
	        swiper.lazy.load();
	      }
	    },
	    transitionStart() {
	      const swiper = this;
	      if (swiper.params.lazy.enabled) {
	        if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
	          swiper.lazy.load();
	        }
	      }
	    },
	    transitionEnd() {
	      const swiper = this;
	      if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
	        swiper.lazy.load();
	      }
	    },
	    slideChange() {
	      const swiper = this;
	      if (swiper.params.lazy.enabled && swiper.params.cssMode) {
	        swiper.lazy.load();
	      }
	    },
	  },
	};

	/* eslint no-bitwise: ["error", { "allow": [">>"] }] */

	const Controller = {
	  LinearSpline: function LinearSpline(x, y) {
	    const binarySearch = (function search() {
	      let maxIndex;
	      let minIndex;
	      let guess;
	      return (array, val) => {
	        minIndex = -1;
	        maxIndex = array.length;
	        while (maxIndex - minIndex > 1) {
	          guess = maxIndex + minIndex >> 1;
	          if (array[guess] <= val) {
	            minIndex = guess;
	          } else {
	            maxIndex = guess;
	          }
	        }
	        return maxIndex;
	      };
	    }());
	    this.x = x;
	    this.y = y;
	    this.lastIndex = x.length - 1;
	    // Given an x value (x2), return the expected y2 value:
	    // (x1,y1) is the known point before given value,
	    // (x3,y3) is the known point after given value.
	    let i1;
	    let i3;

	    this.interpolate = function interpolate(x2) {
	      if (!x2) return 0;

	      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
	      i3 = binarySearch(this.x, x2);
	      i1 = i3 - 1;

	      // We have our indexes i1 & i3, so we can calculate already:
	      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
	      return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
	    };
	    return this;
	  },
	  // xxx: for now i will just save one spline function to to
	  getInterpolateFunction(c) {
	    const swiper = this;
	    if (!swiper.controller.spline) {
	      swiper.controller.spline = swiper.params.loop
	        ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid)
	        : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
	    }
	  },
	  setTranslate(setTranslate, byController) {
	    const swiper = this;
	    const controlled = swiper.controller.control;
	    let multiplier;
	    let controlledTranslate;
	    function setControlledTranslate(c) {
	      // this will create an Interpolate function based on the snapGrids
	      // x is the Grid of the scrolled scroller and y will be the controlled scroller
	      // it makes sense to create this only once and recall it for the interpolation
	      // the function does a lot of value caching for performance
	      const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
	      if (swiper.params.controller.by === 'slide') {
	        swiper.controller.getInterpolateFunction(c);
	        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
	        // but it did not work out
	        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
	      }

	      if (!controlledTranslate || swiper.params.controller.by === 'container') {
	        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
	        controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
	      }

	      if (swiper.params.controller.inverse) {
	        controlledTranslate = c.maxTranslate() - controlledTranslate;
	      }
	      c.updateProgress(controlledTranslate);
	      c.setTranslate(controlledTranslate, swiper);
	      c.updateActiveIndex();
	      c.updateSlidesClasses();
	    }
	    if (Array.isArray(controlled)) {
	      for (let i = 0; i < controlled.length; i += 1) {
	        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
	          setControlledTranslate(controlled[i]);
	        }
	      }
	    } else if (controlled instanceof Swiper && byController !== controlled) {
	      setControlledTranslate(controlled);
	    }
	  },
	  setTransition(duration, byController) {
	    const swiper = this;
	    const controlled = swiper.controller.control;
	    let i;
	    function setControlledTransition(c) {
	      c.setTransition(duration, swiper);
	      if (duration !== 0) {
	        c.transitionStart();
	        if (c.params.autoHeight) {
	          Utils.nextTick(() => {
	            c.updateAutoHeight();
	          });
	        }
	        c.$wrapperEl.transitionEnd(() => {
	          if (!controlled) return;
	          if (c.params.loop && swiper.params.controller.by === 'slide') {
	            c.loopFix();
	          }
	          c.transitionEnd();
	        });
	      }
	    }
	    if (Array.isArray(controlled)) {
	      for (i = 0; i < controlled.length; i += 1) {
	        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
	          setControlledTransition(controlled[i]);
	        }
	      }
	    } else if (controlled instanceof Swiper && byController !== controlled) {
	      setControlledTransition(controlled);
	    }
	  },
	};
	var Controller$1 = {
	  name: 'controller',
	  params: {
	    controller: {
	      control: undefined,
	      inverse: false,
	      by: 'slide', // or 'container'
	    },
	  },
	  create() {
	    const swiper = this;
	    Utils.extend(swiper, {
	      controller: {
	        control: swiper.params.controller.control,
	        getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
	        setTranslate: Controller.setTranslate.bind(swiper),
	        setTransition: Controller.setTransition.bind(swiper),
	      },
	    });
	  },
	  on: {
	    update() {
	      const swiper = this;
	      if (!swiper.controller.control) return;
	      if (swiper.controller.spline) {
	        swiper.controller.spline = undefined;
	        delete swiper.controller.spline;
	      }
	    },
	    resize() {
	      const swiper = this;
	      if (!swiper.controller.control) return;
	      if (swiper.controller.spline) {
	        swiper.controller.spline = undefined;
	        delete swiper.controller.spline;
	      }
	    },
	    observerUpdate() {
	      const swiper = this;
	      if (!swiper.controller.control) return;
	      if (swiper.controller.spline) {
	        swiper.controller.spline = undefined;
	        delete swiper.controller.spline;
	      }
	    },
	    setTranslate(translate, byController) {
	      const swiper = this;
	      if (!swiper.controller.control) return;
	      swiper.controller.setTranslate(translate, byController);
	    },
	    setTransition(duration, byController) {
	      const swiper = this;
	      if (!swiper.controller.control) return;
	      swiper.controller.setTransition(duration, byController);
	    },
	  },
	};

	const a11y = {
	  makeElFocusable($el) {
	    $el.attr('tabIndex', '0');
	    return $el;
	  },
	  addElRole($el, role) {
	    $el.attr('role', role);
	    return $el;
	  },
	  addElLabel($el, label) {
	    $el.attr('aria-label', label);
	    return $el;
	  },
	  disableEl($el) {
	    $el.attr('aria-disabled', true);
	    return $el;
	  },
	  enableEl($el) {
	    $el.attr('aria-disabled', false);
	    return $el;
	  },
	  onEnterKey(e) {
	    const swiper = this;
	    const params = swiper.params.a11y;
	    if (e.keyCode !== 13) return;
	    const $targetEl = $(e.target);
	    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
	      if (!(swiper.isEnd && !swiper.params.loop)) {
	        swiper.slideNext();
	      }
	      if (swiper.isEnd) {
	        swiper.a11y.notify(params.lastSlideMessage);
	      } else {
	        swiper.a11y.notify(params.nextSlideMessage);
	      }
	    }
	    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
	      if (!(swiper.isBeginning && !swiper.params.loop)) {
	        swiper.slidePrev();
	      }
	      if (swiper.isBeginning) {
	        swiper.a11y.notify(params.firstSlideMessage);
	      } else {
	        swiper.a11y.notify(params.prevSlideMessage);
	      }
	    }
	    if (swiper.pagination && $targetEl.is(`.${swiper.params.pagination.bulletClass}`)) {
	      $targetEl[0].click();
	    }
	  },
	  notify(message) {
	    const swiper = this;
	    const notification = swiper.a11y.liveRegion;
	    if (notification.length === 0) return;
	    notification.html('');
	    notification.html(message);
	  },
	  updateNavigation() {
	    const swiper = this;

	    if (swiper.params.loop) return;
	    const { $nextEl, $prevEl } = swiper.navigation;

	    if ($prevEl && $prevEl.length > 0) {
	      if (swiper.isBeginning) {
	        swiper.a11y.disableEl($prevEl);
	      } else {
	        swiper.a11y.enableEl($prevEl);
	      }
	    }
	    if ($nextEl && $nextEl.length > 0) {
	      if (swiper.isEnd) {
	        swiper.a11y.disableEl($nextEl);
	      } else {
	        swiper.a11y.enableEl($nextEl);
	      }
	    }
	  },
	  updatePagination() {
	    const swiper = this;
	    const params = swiper.params.a11y;
	    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
	      swiper.pagination.bullets.each((bulletIndex, bulletEl) => {
	        const $bulletEl = $(bulletEl);
	        swiper.a11y.makeElFocusable($bulletEl);
	        swiper.a11y.addElRole($bulletEl, 'button');
	        swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
	      });
	    }
	  },
	  init() {
	    const swiper = this;

	    swiper.$el.append(swiper.a11y.liveRegion);

	    // Navigation
	    const params = swiper.params.a11y;
	    let $nextEl;
	    let $prevEl;
	    if (swiper.navigation && swiper.navigation.$nextEl) {
	      $nextEl = swiper.navigation.$nextEl;
	    }
	    if (swiper.navigation && swiper.navigation.$prevEl) {
	      $prevEl = swiper.navigation.$prevEl;
	    }
	    if ($nextEl) {
	      swiper.a11y.makeElFocusable($nextEl);
	      swiper.a11y.addElRole($nextEl, 'button');
	      swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
	      $nextEl.on('keydown', swiper.a11y.onEnterKey);
	    }
	    if ($prevEl) {
	      swiper.a11y.makeElFocusable($prevEl);
	      swiper.a11y.addElRole($prevEl, 'button');
	      swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
	      $prevEl.on('keydown', swiper.a11y.onEnterKey);
	    }

	    // Pagination
	    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
	      swiper.pagination.$el.on('keydown', `.${swiper.params.pagination.bulletClass}`, swiper.a11y.onEnterKey);
	    }
	  },
	  destroy() {
	    const swiper = this;
	    if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();

	    let $nextEl;
	    let $prevEl;
	    if (swiper.navigation && swiper.navigation.$nextEl) {
	      $nextEl = swiper.navigation.$nextEl;
	    }
	    if (swiper.navigation && swiper.navigation.$prevEl) {
	      $prevEl = swiper.navigation.$prevEl;
	    }
	    if ($nextEl) {
	      $nextEl.off('keydown', swiper.a11y.onEnterKey);
	    }
	    if ($prevEl) {
	      $prevEl.off('keydown', swiper.a11y.onEnterKey);
	    }

	    // Pagination
	    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
	      swiper.pagination.$el.off('keydown', `.${swiper.params.pagination.bulletClass}`, swiper.a11y.onEnterKey);
	    }
	  },
	};
	var A11y = {
	  name: 'a11y',
	  params: {
	    a11y: {
	      enabled: true,
	      notificationClass: 'swiper-notification',
	      prevSlideMessage: 'Previous slide',
	      nextSlideMessage: 'Next slide',
	      firstSlideMessage: 'This is the first slide',
	      lastSlideMessage: 'This is the last slide',
	      paginationBulletMessage: 'Go to slide {{index}}',
	    },
	  },
	  create() {
	    const swiper = this;
	    Utils.extend(swiper, {
	      a11y: {
	        liveRegion: $(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`),
	      },
	    });
	    Object.keys(a11y).forEach((methodName) => {
	      swiper.a11y[methodName] = a11y[methodName].bind(swiper);
	    });
	  },
	  on: {
	    init() {
	      const swiper = this;
	      if (!swiper.params.a11y.enabled) return;
	      swiper.a11y.init();
	      swiper.a11y.updateNavigation();
	    },
	    toEdge() {
	      const swiper = this;
	      if (!swiper.params.a11y.enabled) return;
	      swiper.a11y.updateNavigation();
	    },
	    fromEdge() {
	      const swiper = this;
	      if (!swiper.params.a11y.enabled) return;
	      swiper.a11y.updateNavigation();
	    },
	    paginationUpdate() {
	      const swiper = this;
	      if (!swiper.params.a11y.enabled) return;
	      swiper.a11y.updatePagination();
	    },
	    destroy() {
	      const swiper = this;
	      if (!swiper.params.a11y.enabled) return;
	      swiper.a11y.destroy();
	    },
	  },
	};

	const History = {
	  init() {
	    const swiper = this;
	    if (!swiper.params.history) return;
	    if (!win.history || !win.history.pushState) {
	      swiper.params.history.enabled = false;
	      swiper.params.hashNavigation.enabled = true;
	      return;
	    }
	    const history = swiper.history;
	    history.initialized = true;
	    history.paths = History.getPathValues();
	    if (!history.paths.key && !history.paths.value) return;
	    history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
	    if (!swiper.params.history.replaceState) {
	      win.addEventListener('popstate', swiper.history.setHistoryPopState);
	    }
	  },
	  destroy() {
	    const swiper = this;
	    if (!swiper.params.history.replaceState) {
	      win.removeEventListener('popstate', swiper.history.setHistoryPopState);
	    }
	  },
	  setHistoryPopState() {
	    const swiper = this;
	    swiper.history.paths = History.getPathValues();
	    swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
	  },
	  getPathValues() {
	    const pathArray = win.location.pathname.slice(1).split('/').filter((part) => part !== '');
	    const total = pathArray.length;
	    const key = pathArray[total - 2];
	    const value = pathArray[total - 1];
	    return { key, value };
	  },
	  setHistory(key, index) {
	    const swiper = this;
	    if (!swiper.history.initialized || !swiper.params.history.enabled) return;
	    const slide = swiper.slides.eq(index);
	    let value = History.slugify(slide.attr('data-history'));
	    if (!win.location.pathname.includes(key)) {
	      value = `${key}/${value}`;
	    }
	    const currentState = win.history.state;
	    if (currentState && currentState.value === value) {
	      return;
	    }
	    if (swiper.params.history.replaceState) {
	      win.history.replaceState({ value }, null, value);
	    } else {
	      win.history.pushState({ value }, null, value);
	    }
	  },
	  slugify(text) {
	    return text.toString()
	      .replace(/\s+/g, '-')
	      .replace(/[^\w-]+/g, '')
	      .replace(/--+/g, '-')
	      .replace(/^-+/, '')
	      .replace(/-+$/, '');
	  },
	  scrollToSlide(speed, value, runCallbacks) {
	    const swiper = this;
	    if (value) {
	      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
	        const slide = swiper.slides.eq(i);
	        const slideHistory = History.slugify(slide.attr('data-history'));
	        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
	          const index = slide.index();
	          swiper.slideTo(index, speed, runCallbacks);
	        }
	      }
	    } else {
	      swiper.slideTo(0, speed, runCallbacks);
	    }
	  },
	};

	var History$1 = {
	  name: 'history',
	  params: {
	    history: {
	      enabled: false,
	      replaceState: false,
	      key: 'slides',
	    },
	  },
	  create() {
	    const swiper = this;
	    Utils.extend(swiper, {
	      history: {
	        init: History.init.bind(swiper),
	        setHistory: History.setHistory.bind(swiper),
	        setHistoryPopState: History.setHistoryPopState.bind(swiper),
	        scrollToSlide: History.scrollToSlide.bind(swiper),
	        destroy: History.destroy.bind(swiper),
	      },
	    });
	  },
	  on: {
	    init() {
	      const swiper = this;
	      if (swiper.params.history.enabled) {
	        swiper.history.init();
	      }
	    },
	    destroy() {
	      const swiper = this;
	      if (swiper.params.history.enabled) {
	        swiper.history.destroy();
	      }
	    },
	    transitionEnd() {
	      const swiper = this;
	      if (swiper.history.initialized) {
	        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
	      }
	    },
	    slideChange() {
	      const swiper = this;
	      if (swiper.history.initialized && swiper.params.cssMode) {
	        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
	      }
	    },
	  },
	};

	const HashNavigation = {
	  onHashCange() {
	    const swiper = this;
	    const newHash = doc.location.hash.replace('#', '');
	    const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
	    if (newHash !== activeSlideHash) {
	      const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
	      if (typeof newIndex === 'undefined') return;
	      swiper.slideTo(newIndex);
	    }
	  },
	  setHash() {
	    const swiper = this;
	    if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;
	    if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
	      win.history.replaceState(null, null, (`#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || ''));
	    } else {
	      const slide = swiper.slides.eq(swiper.activeIndex);
	      const hash = slide.attr('data-hash') || slide.attr('data-history');
	      doc.location.hash = hash || '';
	    }
	  },
	  init() {
	    const swiper = this;
	    if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) return;
	    swiper.hashNavigation.initialized = true;
	    const hash = doc.location.hash.replace('#', '');
	    if (hash) {
	      const speed = 0;
	      for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
	        const slide = swiper.slides.eq(i);
	        const slideHash = slide.attr('data-hash') || slide.attr('data-history');
	        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
	          const index = slide.index();
	          swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
	        }
	      }
	    }
	    if (swiper.params.hashNavigation.watchState) {
	      $(win).on('hashchange', swiper.hashNavigation.onHashCange);
	    }
	  },
	  destroy() {
	    const swiper = this;
	    if (swiper.params.hashNavigation.watchState) {
	      $(win).off('hashchange', swiper.hashNavigation.onHashCange);
	    }
	  },
	};
	var HashNavigation$1 = {
	  name: 'hash-navigation',
	  params: {
	    hashNavigation: {
	      enabled: false,
	      replaceState: false,
	      watchState: false,
	    },
	  },
	  create() {
	    const swiper = this;
	    Utils.extend(swiper, {
	      hashNavigation: {
	        initialized: false,
	        init: HashNavigation.init.bind(swiper),
	        destroy: HashNavigation.destroy.bind(swiper),
	        setHash: HashNavigation.setHash.bind(swiper),
	        onHashCange: HashNavigation.onHashCange.bind(swiper),
	      },
	    });
	  },
	  on: {
	    init() {
	      const swiper = this;
	      if (swiper.params.hashNavigation.enabled) {
	        swiper.hashNavigation.init();
	      }
	    },
	    destroy() {
	      const swiper = this;
	      if (swiper.params.hashNavigation.enabled) {
	        swiper.hashNavigation.destroy();
	      }
	    },
	    transitionEnd() {
	      const swiper = this;
	      if (swiper.hashNavigation.initialized) {
	        swiper.hashNavigation.setHash();
	      }
	    },
	    slideChange() {
	      const swiper = this;
	      if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
	        swiper.hashNavigation.setHash();
	      }
	    },
	  },
	};

	/* eslint no-underscore-dangle: "off" */

	const Autoplay = {
	  run() {
	    const swiper = this;
	    const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
	    let delay = swiper.params.autoplay.delay;
	    if ($activeSlideEl.attr('data-swiper-autoplay')) {
	      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
	    }
	    clearTimeout(swiper.autoplay.timeout);
	    swiper.autoplay.timeout = Utils.nextTick(() => {
	      if (swiper.params.autoplay.reverseDirection) {
	        if (swiper.params.loop) {
	          swiper.loopFix();
	          swiper.slidePrev(swiper.params.speed, true, true);
	          swiper.emit('autoplay');
	        } else if (!swiper.isBeginning) {
	          swiper.slidePrev(swiper.params.speed, true, true);
	          swiper.emit('autoplay');
	        } else if (!swiper.params.autoplay.stopOnLastSlide) {
	          swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
	          swiper.emit('autoplay');
	        } else {
	          swiper.autoplay.stop();
	        }
	      } else if (swiper.params.loop) {
	        swiper.loopFix();
	        swiper.slideNext(swiper.params.speed, true, true);
	        swiper.emit('autoplay');
	      } else if (!swiper.isEnd) {
	        swiper.slideNext(swiper.params.speed, true, true);
	        swiper.emit('autoplay');
	      } else if (!swiper.params.autoplay.stopOnLastSlide) {
	        swiper.slideTo(0, swiper.params.speed, true, true);
	        swiper.emit('autoplay');
	      } else {
	        swiper.autoplay.stop();
	      }
	      if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run();
	    }, delay);
	  },
	  start() {
	    const swiper = this;
	    if (typeof swiper.autoplay.timeout !== 'undefined') return false;
	    if (swiper.autoplay.running) return false;
	    swiper.autoplay.running = true;
	    swiper.emit('autoplayStart');
	    swiper.autoplay.run();
	    return true;
	  },
	  stop() {
	    const swiper = this;
	    if (!swiper.autoplay.running) return false;
	    if (typeof swiper.autoplay.timeout === 'undefined') return false;

	    if (swiper.autoplay.timeout) {
	      clearTimeout(swiper.autoplay.timeout);
	      swiper.autoplay.timeout = undefined;
	    }
	    swiper.autoplay.running = false;
	    swiper.emit('autoplayStop');
	    return true;
	  },
	  pause(speed) {
	    const swiper = this;
	    if (!swiper.autoplay.running) return;
	    if (swiper.autoplay.paused) return;
	    if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
	    swiper.autoplay.paused = true;
	    if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
	      swiper.autoplay.paused = false;
	      swiper.autoplay.run();
	    } else {
	      swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
	      swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
	    }
	  },
	};

	var Autoplay$1 = {
	  name: 'autoplay',
	  params: {
	    autoplay: {
	      enabled: false,
	      delay: 3000,
	      waitForTransition: true,
	      disableOnInteraction: true,
	      stopOnLastSlide: false,
	      reverseDirection: false,
	    },
	  },
	  create() {
	    const swiper = this;
	    Utils.extend(swiper, {
	      autoplay: {
	        running: false,
	        paused: false,
	        run: Autoplay.run.bind(swiper),
	        start: Autoplay.start.bind(swiper),
	        stop: Autoplay.stop.bind(swiper),
	        pause: Autoplay.pause.bind(swiper),
	        onVisibilityChange() {
	          if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
	            swiper.autoplay.pause();
	          }
	          if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
	            swiper.autoplay.run();
	            swiper.autoplay.paused = false;
	          }
	        },
	        onTransitionEnd(e) {
	          if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
	          if (e.target !== this) return;
	          swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
	          swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
	          swiper.autoplay.paused = false;
	          if (!swiper.autoplay.running) {
	            swiper.autoplay.stop();
	          } else {
	            swiper.autoplay.run();
	          }
	        },
	      },
	    });
	  },
	  on: {
	    init() {
	      const swiper = this;
	      if (swiper.params.autoplay.enabled) {
	        swiper.autoplay.start();
	        document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
	      }
	    },
	    beforeTransitionStart(speed, internal) {
	      const swiper = this;
	      if (swiper.autoplay.running) {
	        if (internal || !swiper.params.autoplay.disableOnInteraction) {
	          swiper.autoplay.pause(speed);
	        } else {
	          swiper.autoplay.stop();
	        }
	      }
	    },
	    sliderFirstMove() {
	      const swiper = this;
	      if (swiper.autoplay.running) {
	        if (swiper.params.autoplay.disableOnInteraction) {
	          swiper.autoplay.stop();
	        } else {
	          swiper.autoplay.pause();
	        }
	      }
	    },
	    touchEnd() {
	      const swiper = this;
	      if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
	        swiper.autoplay.run();
	      }
	    },
	    destroy() {
	      const swiper = this;
	      if (swiper.autoplay.running) {
	        swiper.autoplay.stop();
	      }
	      document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
	    },
	  },
	};

	const Fade = {
	  setTranslate() {
	    const swiper = this;
	    const { slides } = swiper;
	    for (let i = 0; i < slides.length; i += 1) {
	      const $slideEl = swiper.slides.eq(i);
	      const offset = $slideEl[0].swiperSlideOffset;
	      let tx = -offset;
	      if (!swiper.params.virtualTranslate) tx -= swiper.translate;
	      let ty = 0;
	      if (!swiper.isHorizontal()) {
	        ty = tx;
	        tx = 0;
	      }
	      const slideOpacity = swiper.params.fadeEffect.crossFade
	        ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
	        : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
	      $slideEl
	        .css({
	          opacity: slideOpacity,
	        })
	        .transform(`translate3d(${tx}px, ${ty}px, 0px)`);
	    }
	  },
	  setTransition(duration) {
	    const swiper = this;
	    const { slides, $wrapperEl } = swiper;
	    slides.transition(duration);
	    if (swiper.params.virtualTranslate && duration !== 0) {
	      let eventTriggered = false;
	      slides.transitionEnd(() => {
	        if (eventTriggered) return;
	        if (!swiper || swiper.destroyed) return;
	        eventTriggered = true;
	        swiper.animating = false;
	        const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
	        for (let i = 0; i < triggerEvents.length; i += 1) {
	          $wrapperEl.trigger(triggerEvents[i]);
	        }
	      });
	    }
	  },
	};

	var EffectFade = {
	  name: 'effect-fade',
	  params: {
	    fadeEffect: {
	      crossFade: false,
	    },
	  },
	  create() {
	    const swiper = this;
	    Utils.extend(swiper, {
	      fadeEffect: {
	        setTranslate: Fade.setTranslate.bind(swiper),
	        setTransition: Fade.setTransition.bind(swiper),
	      },
	    });
	  },
	  on: {
	    beforeInit() {
	      const swiper = this;
	      if (swiper.params.effect !== 'fade') return;
	      swiper.classNames.push(`${swiper.params.containerModifierClass}fade`);
	      const overwriteParams = {
	        slidesPerView: 1,
	        slidesPerColumn: 1,
	        slidesPerGroup: 1,
	        watchSlidesProgress: true,
	        spaceBetween: 0,
	        virtualTranslate: true,
	      };
	      Utils.extend(swiper.params, overwriteParams);
	      Utils.extend(swiper.originalParams, overwriteParams);
	    },
	    setTranslate() {
	      const swiper = this;
	      if (swiper.params.effect !== 'fade') return;
	      swiper.fadeEffect.setTranslate();
	    },
	    setTransition(duration) {
	      const swiper = this;
	      if (swiper.params.effect !== 'fade') return;
	      swiper.fadeEffect.setTransition(duration);
	    },
	  },
	};

	const Cube = {
	  setTranslate() {
	    const swiper = this;
	    const {
	      $el, $wrapperEl, slides, width: swiperWidth, height: swiperHeight, rtlTranslate: rtl, size: swiperSize,
	    } = swiper;
	    const params = swiper.params.cubeEffect;
	    const isHorizontal = swiper.isHorizontal();
	    const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
	    let wrapperRotate = 0;
	    let $cubeShadowEl;
	    if (params.shadow) {
	      if (isHorizontal) {
	        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
	        if ($cubeShadowEl.length === 0) {
	          $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
	          $wrapperEl.append($cubeShadowEl);
	        }
	        $cubeShadowEl.css({ height: `${swiperWidth}px` });
	      } else {
	        $cubeShadowEl = $el.find('.swiper-cube-shadow');
	        if ($cubeShadowEl.length === 0) {
	          $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
	          $el.append($cubeShadowEl);
	        }
	      }
	    }
	    for (let i = 0; i < slides.length; i += 1) {
	      const $slideEl = slides.eq(i);
	      let slideIndex = i;
	      if (isVirtual) {
	        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
	      }
	      let slideAngle = slideIndex * 90;
	      let round = Math.floor(slideAngle / 360);
	      if (rtl) {
	        slideAngle = -slideAngle;
	        round = Math.floor(-slideAngle / 360);
	      }
	      const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
	      let tx = 0;
	      let ty = 0;
	      let tz = 0;
	      if (slideIndex % 4 === 0) {
	        tx = -round * 4 * swiperSize;
	        tz = 0;
	      } else if ((slideIndex - 1) % 4 === 0) {
	        tx = 0;
	        tz = -round * 4 * swiperSize;
	      } else if ((slideIndex - 2) % 4 === 0) {
	        tx = swiperSize + (round * 4 * swiperSize);
	        tz = swiperSize;
	      } else if ((slideIndex - 3) % 4 === 0) {
	        tx = -swiperSize;
	        tz = (3 * swiperSize) + (swiperSize * 4 * round);
	      }
	      if (rtl) {
	        tx = -tx;
	      }

	      if (!isHorizontal) {
	        ty = tx;
	        tx = 0;
	      }

	      const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
	      if (progress <= 1 && progress > -1) {
	        wrapperRotate = (slideIndex * 90) + (progress * 90);
	        if (rtl) wrapperRotate = (-slideIndex * 90) - (progress * 90);
	      }
	      $slideEl.transform(transform);
	      if (params.slideShadows) {
	        // Set shadows
	        let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
	        let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
	        if (shadowBefore.length === 0) {
	          shadowBefore = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
	          $slideEl.append(shadowBefore);
	        }
	        if (shadowAfter.length === 0) {
	          shadowAfter = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
	          $slideEl.append(shadowAfter);
	        }
	        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
	        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
	      }
	    }
	    $wrapperEl.css({
	      '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
	      '-moz-transform-origin': `50% 50% -${swiperSize / 2}px`,
	      '-ms-transform-origin': `50% 50% -${swiperSize / 2}px`,
	      'transform-origin': `50% 50% -${swiperSize / 2}px`,
	    });

	    if (params.shadow) {
	      if (isHorizontal) {
	        $cubeShadowEl.transform(`translate3d(0px, ${(swiperWidth / 2) + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
	      } else {
	        const shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
	        const multiplier = 1.5 - (
	          (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2)
	          + (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
	        );
	        const scale1 = params.shadowScale;
	        const scale2 = params.shadowScale / multiplier;
	        const offset = params.shadowOffset;
	        $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${(swiperHeight / 2) + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
	      }
	    }
	    const zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
	    $wrapperEl
	      .transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
	  },
	  setTransition(duration) {
	    const swiper = this;
	    const { $el, slides } = swiper;
	    slides
	      .transition(duration)
	      .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
	      .transition(duration);
	    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
	      $el.find('.swiper-cube-shadow').transition(duration);
	    }
	  },
	};

	var EffectCube = {
	  name: 'effect-cube',
	  params: {
	    cubeEffect: {
	      slideShadows: true,
	      shadow: true,
	      shadowOffset: 20,
	      shadowScale: 0.94,
	    },
	  },
	  create() {
	    const swiper = this;
	    Utils.extend(swiper, {
	      cubeEffect: {
	        setTranslate: Cube.setTranslate.bind(swiper),
	        setTransition: Cube.setTransition.bind(swiper),
	      },
	    });
	  },
	  on: {
	    beforeInit() {
	      const swiper = this;
	      if (swiper.params.effect !== 'cube') return;
	      swiper.classNames.push(`${swiper.params.containerModifierClass}cube`);
	      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
	      const overwriteParams = {
	        slidesPerView: 1,
	        slidesPerColumn: 1,
	        slidesPerGroup: 1,
	        watchSlidesProgress: true,
	        resistanceRatio: 0,
	        spaceBetween: 0,
	        centeredSlides: false,
	        virtualTranslate: true,
	      };
	      Utils.extend(swiper.params, overwriteParams);
	      Utils.extend(swiper.originalParams, overwriteParams);
	    },
	    setTranslate() {
	      const swiper = this;
	      if (swiper.params.effect !== 'cube') return;
	      swiper.cubeEffect.setTranslate();
	    },
	    setTransition(duration) {
	      const swiper = this;
	      if (swiper.params.effect !== 'cube') return;
	      swiper.cubeEffect.setTransition(duration);
	    },
	  },
	};

	const Flip = {
	  setTranslate() {
	    const swiper = this;
	    const { slides, rtlTranslate: rtl } = swiper;
	    for (let i = 0; i < slides.length; i += 1) {
	      const $slideEl = slides.eq(i);
	      let progress = $slideEl[0].progress;
	      if (swiper.params.flipEffect.limitRotation) {
	        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
	      }
	      const offset = $slideEl[0].swiperSlideOffset;
	      const rotate = -180 * progress;
	      let rotateY = rotate;
	      let rotateX = 0;
	      let tx = -offset;
	      let ty = 0;
	      if (!swiper.isHorizontal()) {
	        ty = tx;
	        tx = 0;
	        rotateX = -rotateY;
	        rotateY = 0;
	      } else if (rtl) {
	        rotateY = -rotateY;
	      }

	      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

	      if (swiper.params.flipEffect.slideShadows) {
	        // Set shadows
	        let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
	        let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
	        if (shadowBefore.length === 0) {
	          shadowBefore = $(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'left' : 'top'}"></div>`);
	          $slideEl.append(shadowBefore);
	        }
	        if (shadowAfter.length === 0) {
	          shadowAfter = $(`<div class="swiper-slide-shadow-${swiper.isHorizontal() ? 'right' : 'bottom'}"></div>`);
	          $slideEl.append(shadowAfter);
	        }
	        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
	        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
	      }
	      $slideEl
	        .transform(`translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
	    }
	  },
	  setTransition(duration) {
	    const swiper = this;
	    const { slides, activeIndex, $wrapperEl } = swiper;
	    slides
	      .transition(duration)
	      .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
	      .transition(duration);
	    if (swiper.params.virtualTranslate && duration !== 0) {
	      let eventTriggered = false;
	      // eslint-disable-next-line
	      slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
	        if (eventTriggered) return;
	        if (!swiper || swiper.destroyed) return;
	        // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
	        eventTriggered = true;
	        swiper.animating = false;
	        const triggerEvents = ['webkitTransitionEnd', 'transitionend'];
	        for (let i = 0; i < triggerEvents.length; i += 1) {
	          $wrapperEl.trigger(triggerEvents[i]);
	        }
	      });
	    }
	  },
	};

	var EffectFlip = {
	  name: 'effect-flip',
	  params: {
	    flipEffect: {
	      slideShadows: true,
	      limitRotation: true,
	    },
	  },
	  create() {
	    const swiper = this;
	    Utils.extend(swiper, {
	      flipEffect: {
	        setTranslate: Flip.setTranslate.bind(swiper),
	        setTransition: Flip.setTransition.bind(swiper),
	      },
	    });
	  },
	  on: {
	    beforeInit() {
	      const swiper = this;
	      if (swiper.params.effect !== 'flip') return;
	      swiper.classNames.push(`${swiper.params.containerModifierClass}flip`);
	      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
	      const overwriteParams = {
	        slidesPerView: 1,
	        slidesPerColumn: 1,
	        slidesPerGroup: 1,
	        watchSlidesProgress: true,
	        spaceBetween: 0,
	        virtualTranslate: true,
	      };
	      Utils.extend(swiper.params, overwriteParams);
	      Utils.extend(swiper.originalParams, overwriteParams);
	    },
	    setTranslate() {
	      const swiper = this;
	      if (swiper.params.effect !== 'flip') return;
	      swiper.flipEffect.setTranslate();
	    },
	    setTransition(duration) {
	      const swiper = this;
	      if (swiper.params.effect !== 'flip') return;
	      swiper.flipEffect.setTransition(duration);
	    },
	  },
	};

	const Coverflow = {
	  setTranslate() {
	    const swiper = this;
	    const {
	      width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid,
	    } = swiper;
	    const params = swiper.params.coverflowEffect;
	    const isHorizontal = swiper.isHorizontal();
	    const transform = swiper.translate;
	    const center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
	    const rotate = isHorizontal ? params.rotate : -params.rotate;
	    const translate = params.depth;
	    // Each slide offset from center
	    for (let i = 0, length = slides.length; i < length; i += 1) {
	      const $slideEl = slides.eq(i);
	      const slideSize = slidesSizesGrid[i];
	      const slideOffset = $slideEl[0].swiperSlideOffset;
	      const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

	      let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
	      let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
	      // var rotateZ = 0
	      let translateZ = -translate * Math.abs(offsetMultiplier);

	      let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
	      let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

	      // Fix for ultra small values
	      if (Math.abs(translateX) < 0.001) translateX = 0;
	      if (Math.abs(translateY) < 0.001) translateY = 0;
	      if (Math.abs(translateZ) < 0.001) translateZ = 0;
	      if (Math.abs(rotateY) < 0.001) rotateY = 0;
	      if (Math.abs(rotateX) < 0.001) rotateX = 0;

	      const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

	      $slideEl.transform(slideTransform);
	      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
	      if (params.slideShadows) {
	        // Set shadows
	        let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
	        let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
	        if ($shadowBeforeEl.length === 0) {
	          $shadowBeforeEl = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
	          $slideEl.append($shadowBeforeEl);
	        }
	        if ($shadowAfterEl.length === 0) {
	          $shadowAfterEl = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
	          $slideEl.append($shadowAfterEl);
	        }
	        if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
	        if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
	      }
	    }

	    // Set correct perspective for IE10
	    if (Support.pointerEvents || Support.prefixedPointerEvents) {
	      const ws = $wrapperEl[0].style;
	      ws.perspectiveOrigin = `${center}px 50%`;
	    }
	  },
	  setTransition(duration) {
	    const swiper = this;
	    swiper.slides
	      .transition(duration)
	      .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
	      .transition(duration);
	  },
	};

	var EffectCoverflow = {
	  name: 'effect-coverflow',
	  params: {
	    coverflowEffect: {
	      rotate: 50,
	      stretch: 0,
	      depth: 100,
	      modifier: 1,
	      slideShadows: true,
	    },
	  },
	  create() {
	    const swiper = this;
	    Utils.extend(swiper, {
	      coverflowEffect: {
	        setTranslate: Coverflow.setTranslate.bind(swiper),
	        setTransition: Coverflow.setTransition.bind(swiper),
	      },
	    });
	  },
	  on: {
	    beforeInit() {
	      const swiper = this;
	      if (swiper.params.effect !== 'coverflow') return;

	      swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
	      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

	      swiper.params.watchSlidesProgress = true;
	      swiper.originalParams.watchSlidesProgress = true;
	    },
	    setTranslate() {
	      const swiper = this;
	      if (swiper.params.effect !== 'coverflow') return;
	      swiper.coverflowEffect.setTranslate();
	    },
	    setTransition(duration) {
	      const swiper = this;
	      if (swiper.params.effect !== 'coverflow') return;
	      swiper.coverflowEffect.setTransition(duration);
	    },
	  },
	};

	const Thumbs = {
	  init() {
	    const swiper = this;
	    const { thumbs: thumbsParams } = swiper.params;
	    const SwiperClass = swiper.constructor;
	    if (thumbsParams.swiper instanceof SwiperClass) {
	      swiper.thumbs.swiper = thumbsParams.swiper;
	      Utils.extend(swiper.thumbs.swiper.originalParams, {
	        watchSlidesProgress: true,
	        slideToClickedSlide: false,
	      });
	      Utils.extend(swiper.thumbs.swiper.params, {
	        watchSlidesProgress: true,
	        slideToClickedSlide: false,
	      });
	    } else if (Utils.isObject(thumbsParams.swiper)) {
	      swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
	        watchSlidesVisibility: true,
	        watchSlidesProgress: true,
	        slideToClickedSlide: false,
	      }));
	      swiper.thumbs.swiperCreated = true;
	    }
	    swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
	    swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
	  },
	  onThumbClick() {
	    const swiper = this;
	    const thumbsSwiper = swiper.thumbs.swiper;
	    if (!thumbsSwiper) return;
	    const clickedIndex = thumbsSwiper.clickedIndex;
	    const clickedSlide = thumbsSwiper.clickedSlide;
	    if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
	    if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
	    let slideToIndex;
	    if (thumbsSwiper.params.loop) {
	      slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
	    } else {
	      slideToIndex = clickedIndex;
	    }
	    if (swiper.params.loop) {
	      let currentIndex = swiper.activeIndex;
	      if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
	        swiper.loopFix();
	        // eslint-disable-next-line
	        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
	        currentIndex = swiper.activeIndex;
	      }
	      const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
	      const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
	      if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;
	      else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;
	      else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;
	      else slideToIndex = prevIndex;
	    }
	    swiper.slideTo(slideToIndex);
	  },
	  update(initial) {
	    const swiper = this;
	    const thumbsSwiper = swiper.thumbs.swiper;
	    if (!thumbsSwiper) return;

	    const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto'
	      ? thumbsSwiper.slidesPerViewDynamic()
	      : thumbsSwiper.params.slidesPerView;

	    if (swiper.realIndex !== thumbsSwiper.realIndex) {
	      let currentThumbsIndex = thumbsSwiper.activeIndex;
	      let newThumbsIndex;
	      if (thumbsSwiper.params.loop) {
	        if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
	          thumbsSwiper.loopFix();
	          // eslint-disable-next-line
	          thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
	          currentThumbsIndex = thumbsSwiper.activeIndex;
	        }
	        // Find actual thumbs index to slide to
	        const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
	        const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
	        if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;
	        else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;
	        else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;
	        else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;
	        else newThumbsIndex = prevThumbsIndex;
	      } else {
	        newThumbsIndex = swiper.realIndex;
	      }
	      if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
	        if (thumbsSwiper.params.centeredSlides) {
	          if (newThumbsIndex > currentThumbsIndex) {
	            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
	          } else {
	            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
	          }
	        } else if (newThumbsIndex > currentThumbsIndex) {
	          newThumbsIndex = newThumbsIndex - slidesPerView + 1;
	        }
	        thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
	      }
	    }

	    // Activate thumbs
	    let thumbsToActivate = 1;
	    const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

	    if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
	      thumbsToActivate = swiper.params.slidesPerView;
	    }

	    thumbsSwiper.slides.removeClass(thumbActiveClass);
	    if (thumbsSwiper.params.loop || (thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled)) {
	      for (let i = 0; i < thumbsToActivate; i += 1) {
	        thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
	      }
	    } else {
	      for (let i = 0; i < thumbsToActivate; i += 1) {
	        thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
	      }
	    }
	  },
	};
	var Thumbs$1 = {
	  name: 'thumbs',
	  params: {
	    thumbs: {
	      swiper: null,
	      slideThumbActiveClass: 'swiper-slide-thumb-active',
	      thumbsContainerClass: 'swiper-container-thumbs',
	    },
	  },
	  create() {
	    const swiper = this;
	    Utils.extend(swiper, {
	      thumbs: {
	        swiper: null,
	        init: Thumbs.init.bind(swiper),
	        update: Thumbs.update.bind(swiper),
	        onThumbClick: Thumbs.onThumbClick.bind(swiper),
	      },
	    });
	  },
	  on: {
	    beforeInit() {
	      const swiper = this;
	      const { thumbs } = swiper.params;
	      if (!thumbs || !thumbs.swiper) return;
	      swiper.thumbs.init();
	      swiper.thumbs.update(true);
	    },
	    slideChange() {
	      const swiper = this;
	      if (!swiper.thumbs.swiper) return;
	      swiper.thumbs.update();
	    },
	    update() {
	      const swiper = this;
	      if (!swiper.thumbs.swiper) return;
	      swiper.thumbs.update();
	    },
	    resize() {
	      const swiper = this;
	      if (!swiper.thumbs.swiper) return;
	      swiper.thumbs.update();
	    },
	    observerUpdate() {
	      const swiper = this;
	      if (!swiper.thumbs.swiper) return;
	      swiper.thumbs.update();
	    },
	    setTransition(duration) {
	      const swiper = this;
	      const thumbsSwiper = swiper.thumbs.swiper;
	      if (!thumbsSwiper) return;
	      thumbsSwiper.setTransition(duration);
	    },
	    beforeDestroy() {
	      const swiper = this;
	      const thumbsSwiper = swiper.thumbs.swiper;
	      if (!thumbsSwiper) return;
	      if (swiper.thumbs.swiperCreated && thumbsSwiper) {
	        thumbsSwiper.destroy();
	      }
	    },
	  },
	};

	// Swiper Class

	const components = [
	  Device$1,
	  Support$1,
	  Browser$1,
	  Resize,
	  Observer$1,
	  Virtual$1,
	  Keyboard$1$1,
	  Mousewheel$1,
	  Navigation$1,
	  Pagination$1,
	  Scrollbar$1,
	  Parallax$1,
	  Zoom$1,
	  Lazy$1,
	  Controller$1,
	  A11y,
	  History$1,
	  HashNavigation$1,
	  Autoplay$1,
	  EffectFade,
	  EffectCube,
	  EffectFlip,
	  EffectCoverflow,
	  Thumbs$1
	];

	if (typeof Swiper.use === 'undefined') {
	  Swiper.use = Swiper.Class.use;
	  Swiper.installModule = Swiper.Class.installModule;
	}

	Swiper.use(components);

	var js_cookie = createCommonjsModule(function (module, exports) {
	(function (factory) {
		var registeredInModuleLoader;
		{
			module.exports = factory();
			registeredInModuleLoader = true;
		}
		if (!registeredInModuleLoader) {
			var OldCookies = window.Cookies;
			var api = window.Cookies = factory();
			api.noConflict = function () {
				window.Cookies = OldCookies;
				return api;
			};
		}
	}(function () {
		function extend () {
			var i = 0;
			var result = {};
			for (; i < arguments.length; i++) {
				var attributes = arguments[ i ];
				for (var key in attributes) {
					result[key] = attributes[key];
				}
			}
			return result;
		}

		function decode (s) {
			return s.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
		}

		function init (converter) {
			function api() {}

			function set (key, value, attributes) {
				if (typeof document === 'undefined') {
					return;
				}

				attributes = extend({
					path: '/'
				}, api.defaults, attributes);

				if (typeof attributes.expires === 'number') {
					attributes.expires = new Date(new Date() * 1 + attributes.expires * 864e+5);
				}

				// We're using "expires" because "max-age" is not supported by IE
				attributes.expires = attributes.expires ? attributes.expires.toUTCString() : '';

				try {
					var result = JSON.stringify(value);
					if (/^[\{\[]/.test(result)) {
						value = result;
					}
				} catch (e) {}

				value = converter.write ?
					converter.write(value, key) :
					encodeURIComponent(String(value))
						.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent);

				key = encodeURIComponent(String(key))
					.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
					.replace(/[\(\)]/g, escape);

				var stringifiedAttributes = '';
				for (var attributeName in attributes) {
					if (!attributes[attributeName]) {
						continue;
					}
					stringifiedAttributes += '; ' + attributeName;
					if (attributes[attributeName] === true) {
						continue;
					}

					// Considers RFC 6265 section 5.2:
					// ...
					// 3.  If the remaining unparsed-attributes contains a %x3B (";")
					//     character:
					// Consume the characters of the unparsed-attributes up to,
					// not including, the first %x3B (";") character.
					// ...
					stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
				}

				return (document.cookie = key + '=' + value + stringifiedAttributes);
			}

			function get (key, json) {
				if (typeof document === 'undefined') {
					return;
				}

				var jar = {};
				// To prevent the for loop in the first place assign an empty array
				// in case there are no cookies at all.
				var cookies = document.cookie ? document.cookie.split('; ') : [];
				var i = 0;

				for (; i < cookies.length; i++) {
					var parts = cookies[i].split('=');
					var cookie = parts.slice(1).join('=');

					if (!json && cookie.charAt(0) === '"') {
						cookie = cookie.slice(1, -1);
					}

					try {
						var name = decode(parts[0]);
						cookie = (converter.read || converter)(cookie, name) ||
							decode(cookie);

						if (json) {
							try {
								cookie = JSON.parse(cookie);
							} catch (e) {}
						}

						jar[name] = cookie;

						if (key === name) {
							break;
						}
					} catch (e) {}
				}

				return key ? jar[key] : jar;
			}

			api.set = set;
			api.get = function (key) {
				return get(key, false /* read as raw */);
			};
			api.getJSON = function (key) {
				return get(key, true /* read as json */);
			};
			api.remove = function (key, attributes) {
				set(key, '', extend(attributes, {
					expires: -1
				}));
			};

			api.defaults = {};

			api.withConverter = init;

			return api;
		}

		return init(function () {});
	}));
	});

	// 1. Imports

	// 2. Special Queries
	// ------------------

	Foundation.Interchange.SPECIAL_QUERIES['medium-retina'] = 'only screen and (min-width: 40em), (min-width: 40em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 40em) and (min--moz-device-pixel-ratio: 2), (min-width: 40em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 40em) and (min-device-pixel-ratio: 2), (min-width: 40em) and (min-resolution: 192dpi), (min-width: 40em) and (min-resolution: 2dppx)';
	Foundation.Interchange.SPECIAL_QUERIES['large-retina'] = 'only screen and (min-width: 64em), (min-width: 64em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 64em) and (min--moz-device-pixel-ratio: 2), (min-width: 64em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 64em) and (min-device-pixel-ratio: 2), (min-width: 64em) and (min-resolution: 192dpi), (min-width: 64em) and (min-resolution: 2dppx)';
	Foundation.Interchange.SPECIAL_QUERIES['xlarge-retina'] = 'only screen and (min-width: 75em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';
	Foundation.Interchange.SPECIAL_QUERIES['xxlarge-retina'] = 'only screen and (min-width: 90em), (min-width: 75em) and (-webkit-min-device-pixel-ratio: 2), (min-width: 75em) and (min--moz-device-pixel-ratio: 2), (min-width: 75em) and (-o-min-device-pixel-ratio: 2/1), (min-width: 75em) and (min-device-pixel-ratio: 2), (min-width: 75em) and (min-resolution: 192dpi), (min-width: 75em) and (min-resolution: 2dppx)';

	// 3. Foundation
	// -------------

	jquery(document).foundation();


	// 5. Lightgallery
	// ---------------

	jquery("#gallery").lightGallery({
	    selector: ".item",
	    counter : true,
	    fullscreen: true,
	    download: false
	});

	jquery('#video-gallery').lightGallery({
	   download: false,
	   counter : false,
	   controls: false,
	    vimeoPlayerParams: {
	        byline : 0,
	        portrait : 0,
	        color : '272A67'
	    },
	    youtubePlayerParams: {
	        modestbranding: 1,
	        showinfo: 0,
	        rel: 0,
	        controls: 0
	    }
	});

	// 6. Age Gate
	// -----------

	jquery(document).ready(function() {
	  if (!js_cookie.get('showed_agegate')) {
	      setTimeout(function(){
	        jquery('#agegatesimple').foundation('open'); 
	        js_cookie.set('showed_agegate', 'true', { expires: 365 });
	      },500); // 3 seconds.
	  }
	});

	jquery('#agegatesimple .close-button-test').click(function() {
	  jquery('#agegatesimple').foundation('close'); 
	});

	// 7. Links Scroll to Section
	// --------------------------

	jquery('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = jquery(this.hash);
	      target = target.length ? target : jquery('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        jquery('html, body').animate({
	          scrollTop: target.offset().top
	        }, 1000, function() {
	          // Callback after animation
	          // Must change focus!
	          var $target = jquery(target);
	          $target.focus();
	          if ($target.is(":focus")) { // Checking if the target was focused
	            return false;
	          } else {
	            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
	            $target.focus(); // Set focus again
	          }
	        });
	      }
	    }
	  });


	new Swiper('.carousel--hero', {
	  effect: 'fade',
	  slidesPerView: '1',
	  centeredSlides: true,
	  spaceBetween: 0,
	  loop: true,
	  autoplay: {
	    delay: 2500
	  }
	});

	jquery(".findbeer").click(function(){
	  jquery(".mapboxgl-ctrl-geolocate").click();
	});

}());
