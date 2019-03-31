var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * StaticContent Model
 * ==========
 */
var StaticContent = new keystone.List('StaticContent');

StaticContent.add({
    name: { type: Types.Text, initial: true, required: true, unique: true },
    displayHTML: { type: Types.Html, required: true, initial: true },
});

/**
 * Registration
 */
StaticContent.defaultColumns = 'name, displayHTML';
StaticContent.register();
