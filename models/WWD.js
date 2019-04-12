var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * WWD Model
 * ==========
 */
var WWD = new keystone.List('WWD');

WWD.add({
    title: { type: Types.Text, initial: true, required: true, unique: true },
    image: { type: Types.CloudinaryImage, required: false, initial: true },
    icon: { type: Types.CloudinaryImage, required: false, initial: true },
    desc: { type: Types.Textarea, required: false, initial: true },
});

/**
 * Registration
 */
WWD.defaultColumns = 'title, imagePath';
WWD.register();
