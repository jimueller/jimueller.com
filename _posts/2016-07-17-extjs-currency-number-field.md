---
published: false
layout: post
date: 2016-07-18T02:51:17.000Z
categories:
  - Dev
tags:
  - extjs
---
## A Currency Number Field for ExtJS

My attempt at a number field that displays formatted currency and works with MVVM.

{% highlight js %}
Ext.define('Ext.ux.form.field.CurrencyNumber', {
    extend: 'Ext.form.field.Number',
    alias: 'widget.currencynumberfield',
    config: {
        currencySign: '$',
        currencyAtEnd: false
    },

    initComponent: function() {
        var me = this;

        // Get currency format defaults from Ext.util.Format

        if (me.currencySign === null) {
            me.currencySign = Ext.util.Format.currencySign;
        }

        if (me.currencyAtEnd === null) {
            me.currencyAtEnd = Ext.util.Format.currencyAtEnd;
        }

        if (me.decimalPrecision === null) {
            me.decimalPrecision = Ext.util.Format.currencyPrecision;
        }

        me.callParent();
    },

    listeners: {
        focus: function(cmp) {
            cmp.removeFormat(cmp);
        }
    },

    valueToRaw: function(value) {
        // Only format if it's numeric, otherwise the invalid messaging is not displayed properly
        var val = String(value).replace(this.currencySign, '');
        if (Ext.isNumeric(val)) {
            return Ext.util.Format.currency(value, this.currencySign, this.decimalPrecision, this.currencyAtEnd);
        } else {
            return val;
        }
    },

    rawToValue: function(rawValue) {
        var value = String(rawValue).replace(/[^0-9.]/g, '');
        return Ext.Number.from(value, rawValue);
    },

    getErrors: function(value) {
        value = arguments.length > 0 ? value : this.processRawValue(this.getRawValue());

        var me = this,
            errors;

        value = me.rawToValue(value);
        errors = me.callParent([value])
        return errors;
    },

    removeFormat: function(cmp) {
        cmp.setRawValue(cmp.getValue());
    }
});
{% end highlight %}

[Sencha Fiddle](https://fiddle.sencha.com/#fiddle/1dpn)
