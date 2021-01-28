/*
	Wedding Website 
	March 14, 2019
	James Giesbrecht
*/

function load(){
    document.getElementById("submit").addEventListener("click", validate);
    var yes = document.getElementById("yes");
    yes.addEventListener("click", yesnoCheck);
    var no = document.getElementById("no");
    no.addEventListener("click", yesnoCheck);
    var canTire = document.getElementById("canTireImg");
    canTire.addEventListener("click", canTireDisplay);

    // Update the count down every 1 second
    var x = setInterval(function() {
        // Set the date we're counting down to
        var countDownDate = new Date("Aug 9, 2019 17:25:00").getTime();

        // Get todays date and time
        var now = new Date().getTime();
                    
        // Find the distance between now and the count down date
        var distance = countDownDate - now;
                    
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    
        // Output the result in an element with id="demo"
        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s<br>Until Two Souls Become One";
                    
        // If the count down is over, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "And They Lived Happily Ever After...";
        }
    }, 1000);

    window.onscroll = function() {myFunction()};

    var navbar = document.getElementById("navbar");

    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }

    hideErrors();
}

function validate(e)
{
	//	Hides all error elements on the page
	hideErrors();
	
	//	Determine if the form has errors
	if(formHasErrors()){
		// 	Prevents the form from submitting
		e.preventDefault();
		// 	Returning false prevents the form from submitting
		return false;
	}

	return true;
}

function hideErrors()
{
	//	Get an array of the error field ids
	var errorFields = document.getElementsByClassName("error");

	for(var i= 0; i<errorFields.length; i++){
		errorFields[i].style.display = "none";
	}
}

function formHasErrors()
{
	//	If errorFlag = true that means ther is an error
    var errorFlag = false;

    if(document.getElementById("name").value == null || trim(document.getElementById('name').value) == "")
    {
        document.getElementById("name_error").style.display = "block";
		if(!errorFlag) {
    		document.getElementById("name").focus();
	    	document.getElementById("name").select();
		}
		//	Raise the error flag
        errorFlag = true;
    }

    var options = ["yes", "no"];
	var optionsChecked = false;

	for (var i=0; i<options.length && !optionsChecked; i++){
		if(document.getElementById(options[i]).checked){
			optionsChecked = true;
		}
	}

	if(!optionsChecked) {
		document.getElementById("attendance_error").style.display = "block";
		errorFlag = true;
    }
    
    if (document.getElementById('yes').checked) {
        if(document.getElementById("guests").value == null || document.getElementById("guests").value == ""){
            document.getElementById("guests_error").style.display = "block";
            errorFlag = true;
        }
    }

    var email = document.getElementById("email").value;
    if(trim(email) != "") {
        var emailRegExp = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if(!emailRegExp.test(email)){
            document.getElementById("email_error").style.display = "block";
            if(!errorFlag) {
                email.focus();
                email.select();
            }
            //	Raise the error flag
            errorFlag = true;
        }
    }
    
    return errorFlag;
}

function trim(str) 
{
	// Uses a regex to remove spaces from a string.
	return str.replace(/^\s+|\s+$/g,"");
}

function canTireDisplay() {
    var canTireText = document.getElementById("canTireText");
    if (canTireText.style.display === "block") {
        canTireText.style.display = "none";
      } else {
        canTireText.style.display = "block";
      }
}

function yesnoCheck() {
	if (document.getElementById('yes').checked) {
		document.getElementById('ifYes').style.display = 'table-row';
    }
    if (document.getElementById('no').checked) {
        document.getElementById('ifYes').style.display = 'none';
        document.getElementById('guests').value = null;
        document.getElementById("guests_error").style.display = "none";
    }
}
    
document.addEventListener("DOMContentLoaded", load);