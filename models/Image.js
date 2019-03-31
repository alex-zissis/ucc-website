var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Link Model
 * ==========
 */
var Image = new keystone.List('Image');

Image.add({
    name: { type: Types.Text, required: true, initial: true, unique: true },
    image: { type: Types.CloudinaryImage, autoCleanup: true, initial: true, required: true },
});

/**
 * Registration
 */
Image.defaultColumns = 'name';
Image.register();
