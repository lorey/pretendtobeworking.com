	
jQuery(document).ready(function() {
    var tasks = [
        "Write yourself an e-mail. Don't forget to include the words &quot;urgent&quot; and &quot;ASAP&quot;",
        "Write a letter to yourself using your company address. Make sure to mark it confidential.",
        "Read an ebook. To pretend to be working just make sure to scribble something from time to time.",
        "Check out what's on the menu for today or what you're going to eat for lunch.",
        "Discuss the lunch menu with your colleagues.",
        "Just find a job you like and you'll never have to pretend you're working ever again.",
        "Increase the time until your screensaver activates. This way, co-workers won't notice longer breaks.",
        "Take a pile of paper and leave in a hurry.",
        "Complain to your colleagues about the incredibly high number of emails in your inbox.",
        "Complain to your colleagues about questions from customers.",
        "Complain to your colleagues about the internet speed in your company.",
        "Complain to your colleagues about other departments.",
        "Convince a co-worker to do your work by pretending to have familiy issues at the moment.",
        "Convince a co-worker to do your work by telling him/her that your boss stopped by and said it's very urgent.",
        "Say &quot;How am I supposed to get this much work done until tomorrow?&quot;",
        "Frown while reading this text. Shake your head as a bonus."
    ];

	var timesGotTask = 0;

    // Call this to change the task text
    function changeTaskText(text){
		$( "#taskText" ).fadeOut( "slow", function() {
			$('#taskText').text(text);
			$( "#taskText" ).fadeIn( "slow", function() {
			// Animation complete.
			});
		});
    }

    // Call this the first time the user clicks the button.
    function firstTaskIsBeingCalled(){
		changeButtonText("Next");
    }

    // Always call this when a next Task is being called. We might want animations etc
    function nextTaskIsBeingCalled(){
		

    }
	
	function changeButtonText(text){
		$('#buttonStartNext').text(text);
	}

	// Click on the start next button
    $('#buttonStartNext').click(function(){
		if(timesGotTask === 0){
			// First task
			firstTaskIsBeingCalled();
		}
        var randomIndex = Math.round(Math.random() * (tasks.length - 1));
        changeTaskText(tasks[randomIndex]);
    });

    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)===' ') c = c.substring(1);
            if (c.indexOf(name) === 0) return c.substring(name.length,c.length);
        }
        return "";
    }
});