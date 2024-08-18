$(document).ready(function () {
    $(".getQuery").click(function () {
        $('#description').hide();
    });
});

// Form Code 

$(document).ready(function () {
    $('#myform').on('submit', function () {
        var fname = $('#fname').val();
        var cname = $('#cname').val();
        var dob = $('#dob').val();
        var email = $('#email').val();
        var cnum = $('#cnum').val();
        var pswd = $('#pswd').val();
        var add = $('#add').val();

        if (fname == '') {
            $('#fname_error').text("Full name is required!");
            // $('#fname_error').hide(3000);
            return false;
        } else if (cname == '') {
            $('#cname_error').text("Country Name is required!");
            // $('#cname_err').hide(3000);
            return false;
        } else if (dob == '') {
            $('#dob_error').text("Date of Birth is required!");
            // $('#dob_err').hide(3000);
            return false;
        } else if (email == '') {
            $('#email_error').text("Email is required!");
            // $('#email_err').hide(3000);
            return false;
        } else if (cnum == '') {
            $('#cnum_error').text("Contact Number is required!");
            // $('#cnum_err').hide(3000);
            return false;
        } else if (pswd == '') {
            $('#pswd_error').text("Password is required!");
            // $('#pswd_err').hide(3000);
            return false;
        } else if (add == '') {
            $('#add_error').text("Address is required!");
            // $('#add_err').hide(3000);
            return false;
        }
        else {
            $('#fname_error').hide();
            $('#cname_err').hide();
            $('#dob_err').hide();
            $('#email_err').hide();
            $('#cnum_err').hide();
            $('#pswd_err').hide();
            $('#add_err').hide();

            $('#success_error').text('Your data has been submitted successfully');
            return false;
        }
    });
});