$(function() {

	$.validator.setDefaults({
	  errorClass: 'help-block',
	  highlight: function(element) {
		$(element)
		  .closest('.form-group')
		  .addClass('has-error');
	  },
	  unhighlight: function(element) {
		$(element)
		  .closest('.form-group')
		  .removeClass('has-error');
	  },
	  errorPlacement: function (error, element) {
		if (element.prop('type') === 'checkbox') {
		  error.insertAfter(element.parent());
		} else {
		  error.insertAfter(element);
		}
	  }
	});
  
	$.validator.addMethod('strongPassword', function(value, element) {
	  return this.optional(element) 
		|| value.length >= 6
		&& /\d/.test(value)
		&& /[a-z]/i.test(value);
	}, 'Your password must be at least 6 characters long and contain at least one number and one char\'.')
  
	$("#register-form").validate({
	  rules: {
		email: {
		  required: true,
		  email: true,
		},
		selectTraveler: {
			required: true,
		},
		password: {
		  required: true,
		  strongPassword: true
		},
		password2: {
		  required: true,
		  equalTo: '#password'
		},
		givenName: {
		  required: true,
		  lettersonly: true
		},
		surName: {
		  required: true,
		  nowhitespace: true,
		  lettersonly: true
		},
		number: {
		  required: true,
		  digits: true,
		},
		phoneNumber: {
			required: true,
			digits: true,
		},
		passportNumber: {
			required: true,
			digits: true,
		},
		nidNo: {
			required: true,
			digits: true,
		},
		address: {
		  required: true,
		},
		birthday: {
			required: true,
		},
		expireDate: {
			required: true,
		},
		nationality: {
			required: true,
		},
		issueCountry: {
		  required: true,
		  lettersonly: true
		},
		upload: {
			required: true,
		},
		uploadVisa: {
			required: true,
		},
		checkFareRule: {
			required: true,
		},
		checkTerms: {
			required: true,
		}
	  },
	  messages: {
        givenName: {
            required: 'Please enter your Given Name',
		},
		surName: {
			required: 'Please enter your Surname',
		},
		email: {
		  required: 'Please enter an email address.',
		  email: 'Please enter a <em>valid</em> email address.',
		  remote: $.validator.format("{0} is already associated with an account.")
		},
		flyer: {
			required: 'Please enter flyer number.',
		},
		birthday: {
			required: 'Please enter Death of Birth.',
		},
		phoneNumber: {
			required: 'Please enter phone number.',
		},
		passportNumber: {
			required: 'Please enter passport number.',
		},
		expireDate: {
			required: 'Please enter passport expire date.',
		},
		nationality: {
			required: 'Please enter nationality.',
		},
		issueCountry: {
			required: 'Please enter passport issue country.',
		},
		upload: {
			required: 'Please upload photo of passport.',
		},
		uploadVisa: {
			required: 'Please upload photo of VISA page',
		},
		checkFareRule: {
			required: 'Please checked the box before read',
		},
		checkTerms: {
			required: 'Please checked the box before read',
		},
		nidNo: {
			required: 'Please enter NID number',
		}
	  }
	});
  
  });
