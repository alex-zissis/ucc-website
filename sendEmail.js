var nodemailer = require('nodemailer');
var Email = require('email-templates');
// var hbs = require('hbs');
require('dotenv').config();

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.UCC_EMAIL, // generated ethereal user
        pass: process.env.UCC_PASS, // generated ethereal password
    },
});

var enquiryEmail = function (enquiry) {
    var email = new Email({
        message: {
            from: enquiry.name + ' via UCC Website <' + process.env.UCC_EMAIL + '>',
            replyTo: enquiry.email,
            headers: {
                'Reply-To': enquiry.email,
            },
        },
        // uncomment below to send emails in development/test env:
        send: true,
        transport: transporter,
        // transport: {
        //     jsonTransporter: true
        // }
    });

    email
        .send({
            template: 'contactus',
            message: {
                to: process.env.UCC_EMAIL,
                replyTo: enquiry.email,
            },
            locals: {
                message: {
                    name: enquiry.name,
                    email: enquiry.email,
                    subject: enquiry.subject,
                    content: enquiry.message,
                },
            },
        });
};

module.exports = {
    enquiryEmail: enquiryEmail,
};

