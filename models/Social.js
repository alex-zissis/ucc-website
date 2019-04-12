var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Link Model
 * ==========
 */
var Social = new keystone.List('Social');

Social.add({
    socialmedia: { type: Types.Text, required: true, initial: true },
    icon: { type: Types.CloudinaryImage, initial: true, required: true },
    link: { type: Types.Url, initial: true, required: true },
});

/**
 * Registration
 */
Social.defaultColumns = 'socialmedia, icon, link';
Social.register();
