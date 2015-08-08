	
jQuery(document).ready(function() {
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