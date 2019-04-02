var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Link Model
 * ==========
 */
var Sponsor = new keystone.List('Sponsor');

Sponsor.add({
    name: { type: Types.Text, required: true, initial: true },
    image: { type: Types.CloudinaryImage, autoCleanup: true, initial: true, required: true },
    website: { type: Types.Url, initial: true, required: true },
});

/**
 * Registration
 */
Sponsor.defaultColumns = 'name, website';
Sponsor.register();
