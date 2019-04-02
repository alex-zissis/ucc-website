var keystone = require('keystone');
var Contact = keystone.list('Contact');
var Link = keystone.list('Link');
var StaticContent = keystone.list('StaticContent');
var WWD = keystone.list('WWD');
var Image = keystone.list('Image');
var Sponsor = keystone.list('Sponsor');
var sendEmail = require('../../sendEmail');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.notTimeout = true;
	locals.links = [];
	locals.WWD = [];
	locals.static = {};
	locals.images = {};

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	view.on('post', { action: 'contact' }, function (next) {

		var application = new Contact.model();
		var updater = application.getUpdateHandler(req);

		sendEmail.enquiryEmail(req.body);

		updater.process(req.body, {
			flashErrors: true,
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

	view.on('init', function (next) {

		StaticContent.model.find().exec(function (err, results) {
			if (err || !results.length) {
				return next(err);
			}
			for (var i = 0; i < results.length; i++) {
				locals.static[results[i].name] = results[i].displayHTML;
			}
			next();

		}, function (err) {
			next(err);
		});

	});

	view.on('init', function (next) {

		Link.model.find().sort('order').exec(function (err, results) {
			if (err || !results.length) {
				return next(err);
			}

			locals.links = results;
			next();

		}, function (err) {
			next(err);
		});

	});

	view.on('init', function (next) {

		Image.model.find().sort('order').exec(function (err, results) {
			if (err || !results.length) {
				return next(err);
			}
			for (var i = 0; i < results.length; i++) {
				locals.images[results[i].name] = results[i].image;
			}
			next();

		}, function (err) {
			next(err);
		});

	});

	view.on('init', function (next) {

		WWD.model.find().exec(function (err, results) {
			if (err || !results.length) {
				return next(err);
			}

			locals.WWD = results;
			next();

		}, function (err) {
			next(err);
		});

	});

	view.on('init', function (next) {

		Sponsor.model.find().exec(function (err, results) {
			if (err || !results.length) {
				return next(err);
			}

			locals.sponsors = results;
			next();

		}, function (err) {
			next(err);
		});

	});

	// Render the view
	view.render('index');
};
