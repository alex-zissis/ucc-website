var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Link Model
 * ==========
 */
var Contact = new keystone.List('Contact', {
    nocreate: true,
});

Contact.add({
    name: { type: Types.Name, required: true, index: true },
    email: { type: Types.Email, initial: true, required: true },
    subject: { type: Types.Text, initial: true, required: true },
    message: { type: Types.Textarea, initial: true, required: true },
});

/**
 * Registration
 */
Contact.defaultColumns = 'name, email, subject';
Contact.register();
