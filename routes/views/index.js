var keystone = require('keystone');
var Contact = keystone.list('Contact');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.notTimeout = true;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	view.on('post', { action: 'contact' }, function (next) {

		var application = new Contact.model();
		var updater = application.getUpdateHandler(req);

		updater.process(req.body, {
			flashErrors: true
		}, function (err) {
			if (err) {
				locals.validationErrors = err.errors;
			} else {
				req.flash('success', { detail: 'Enquiry submitted successfully. We will contact you shortly.' });
				locals.enquirySubmitted = true;
			}
			next();
		});

	});

	// Render the view
	view.render('index');
};
