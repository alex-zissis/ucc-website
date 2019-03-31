var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Link Model
 * ==========
 */
var Link = new keystone.List('Link');

Link.add({
    displayText: { type: Types.Text, required: true, initial: true },
    element: { type: Types.Text, initial: true, required: true },
    order: { type: Types.Number, initial: true, required: true, unique: true },
});

/**
 * Registration
 */
Link.defaultColumns = 'displayText, element, order';
Link.defaultSort = 'order';
Link.register();
