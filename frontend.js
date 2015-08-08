	
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
        "Convince a co-worker to do your work by pretending to have family issues at the moment.",
        "Convince a co-worker to do your work by telling him/her that your boss stopped by and said it's very urgent.",
        "Say &quot;How am I supposed to get this much work done until tomorrow?&quot;",
        "Frown while reading this text. Shake your head as a bonus.",
        "Breathe deeply as if your doing challenging work.",
        "Scratch your head and read this sentence several times.",
        "Drop a pencil.",
        "Spill your coffee.",
        "Drop a pile of papers. Collect and sort them neatly afterwards.",
        "Clean up your desk.",
        "Check if your phone has a fake call function or download an app that does this. This will keep you out of trouble if someone catches you.",
        "Get a new coffee.",
        "Ask your boss a question. Make sure not to sound incompetent but rather let him decide on something. This will make him feel good.",
        "Open up a spreadsheet. Choose some row titles and add =RAND() to fill it with random numbers.",
        "Open up a document and add lorem ipsum or copy some random text into it.",
        "Open a presentation from the last meeting.",
        "Open your company's website. If asked, tell that a customer complained about it being offline.",
        "Open the website of a customer. If asked, tell that you're looking for a specific contact.",
        "Open the website of a competitor. If asked, tell that you're keeping an eye on them.",
        "Open up a terminal. View some log file. If asked, say that you're monitoring something.",
        "Open up some work. Do a screenshot with the print button. Set this file as your desktop background.",
        "Always have a block with unreadable notes in front of you. Think of diagrams, flow charts, screen mockups...",
        "Open a company pdf. Find the corporate identity guidelines and tell others you're looking for the exact company color",
        "Walk to the printer, wait some time, and walk back. Complain to your colleagues that the printer ate your document.",
        "Fill up the pens at your desk.",
        "Fill up the paper at your desk.",
        "Clean your keyboard. Pretend that some key isn't working anymore.",
        "Pretend to be talking to a customer on the phone. Make sure to sound like it's going really well and make your colleagues notice.",
        "Make up a project and start telling everyone about it.",
        "Inform yourself about how your company is tracking you (internet, telephone) and make sure to avoid these mechanisms.",
        "Install or enable a virtual desktop to be able to switch to neutral content fast.",
        "Move your monitor so that it's not visible to others. Say you have to do this, because of reflections and sunlight.",
        "Ask others in your team for their progress. Say the reason is that you're dependent on them.",
        "Instead of doing a phone call, just walk to your colleague next time. This is more relaxing and takes more time.",
        "Have a second jacket in your workplace so that people won't notice if you're away",
        "Go to the toilet. Don't forget to take your phone with you.",
        "Drink a lot. Going to the water dispenser and going to the toilet takes more time than you think.",
        "Always have several opened books on your desk and pretend to be looking things up.",
        "Get a new cup of coffee. Offer your colleagues to also bring them one.",
        "Open up a random drawer and pretend to be looking for something."
    ];

	var timesGotTask = 0;

    var indexesDisplayed = [];

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

        var randomIndex = Math.floor(Math.random() * tasks.length);
        if (indexesDisplayed.length != tasks.length) {
            while ($.inArray(randomIndex, indexesDisplayed) > -1) {
                randomIndex = Math.floor(Math.random() * tasks.length);
            }
            indexesDisplayed.push(randomIndex);

            changeTaskText(tasks[randomIndex]);
        } else {
            changeTaskText("We have no more tasks for you. You should probably start working now :)");
        }
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