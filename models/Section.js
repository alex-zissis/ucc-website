var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Section Model
 * ==========
 */
var Section = new keystone.List('Section');

Section.add({
    title: { type: Types.Text, required: true, initial: true },
    background: { type: Types.CloudinaryImage, initial: true, required: true },
    content: { type: Types.Html, initial: true, required: true, wysiwyg: false },
    sectionid: { type: Types.Text, initial: true, required: true },
    hbs: { type: Types.Boolean, initial: false },
    locals: { type: Types.Text, initial: false },
    section_color: { type: Types.Text, initial: true },
});

/**
 * Registration
 */
Section.defaultColumns = 'title, background, content, sectionid, sectioncolor';
Section.register();
