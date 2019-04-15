var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Testimonial Model
 * ==========
 */
var Testimonial = new keystone.List('Testimonial');

Testimonial.add({
    client: { type: Types.Text, initial: true, required: true },
    client_quote: { type: Types.Text, required: true, initial: true },
    client_description: { type: Types.Html, required: true, initial: true },
    client_logo: { type: Types.CloudinaryImage, required: true, initial: true },
    portfolio_image1: { type: Types.CloudinaryImage, required: true, initial: true },
    portfolio_image2: { type: Types.CloudinaryImage, required: false, initial: true },
    student_name: { type: Types.Text, initial: true, required: true },
    student_quote: { type: Types.Text, required: true, initial: true },
    student_description: { type: Types.Html, required: true, initial: true },
    student_image: { type: Types.CloudinaryImage, required: true, initial: true },
});

/**
 * Registration
 */
Testimonial.defaultColumns = 'client, client_logo, client_image, student_name, student_image';
Testimonial.register();
