;(function(g, d){

    'use strict';

    function jQuery(selector) {
        return new jQuery.fn.init(selector);
    }

    jQuery.fn = {
        selector: null,
        length: 0
    };

    jQuery.fn.init = function(selector){

        if (!selector) {
            return [];
        }

        if (jQuery.isFunction(selector)) {
            jQuery.isDOMready(selector);
        }

        if (jQuery.isSelector(selector)) {
            jQuery.fn.selector = jQuery.getTypeSelector(selector);
        }

        return jQuery.fn;
    };

    jQuery.extend = jQuery.fn.extend = function (){
        var arg = arguments[0];
        for (var key in arg){
            this[key] = arg[key];
        }
    };

    // Global Methods $.method
    jQuery.extend({
        trim: function( text ) {
            return text === null ? "" : ( text + "" ).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "" );
        },
        isFunction: function(selector) {
            return (typeof arguments[0] === 'function');
        },
        isDOMready: function(fn) {
            setTimeout(function go() {
                (d.readyState === "complete") ? fn(): setTimeout(go, 10);
            }, 10);
        },
        cleanSelector: function(selector) {
            return jQuery.trim(selector).replace(/^#/, '');
        },
        isSelector: function(selector) {
            return (selector && typeof selector === 'string') ? true : false;
        },
        getTypeSelector: function(selector) {
            var isId = /^#/.test(selector);
            return (isId) ? jQuery.getId(selector) : null;
        },
        getOneId: function(selector) {
            jQuery.fn.length = 1;
            return d.getElementById(jQuery.cleanSelector(selector));
        },
        getId: function(selector) {
            return (jQuery.isOne(selector)) ? jQuery.multiId(selector) : jQuery.getOneId(selector);
        },
        isOne: function(selector) {
            return (selector.split(',').length > 1);
        },
        multiId: function(ids, fn) {
            return ids.split(',').map(function(el) {
                jQuery.fn.length++;
                return d.getElementById(jQuery.cleanSelector(el));
            });
        },
        each: function(selector, fn) {
            if (selector.length) {
                for (var i = 0; i < selector.length; i++) {
                    fn(selector[i]);
                }
            } else {
                fn(selector);
            }
        }
    });

    // Local Methods $(...).method
    jQuery.fn.extend({
        show: function() {
            jQuery.each(this.selector, function(el) {
                el.style.display = 'block';
            });
            return this;
        },
        hide: function() {
            jQuery.each(this.selector, function(el) {
                el.style.display = 'none';
            });
            return this;
        }
    });

    g.$ = jQuery;

}(window, document));