window.onload = function() {
    /* 
    This worked in the console but failed when added to the script, with error
    that logoElement was null.  I think the script was being run before the ID
    had been assigned to the img in the HTML file, so getElementById('logoImg') failed.
    Could that be true?  Putting this inside the window.onload function solved the problem,
    but is that the best answer?
    */
    const logoOnMouseOver = "./img/FinDevBubbles-logos_transparent.png";
    const logoOnMouseOut = "./img/FinDev-logos_transparent.png";
    const logoElement = document.getElementById('logoImg');
    logoElement.addEventListener('mouseover', function (event) { 
        logoElement.setAttribute('src', logoOnMouseOver); 
    });

    logoElement.addEventListener('mouseout', function(){
        logoElement.setAttribute('src',logoOnMouseOut);
        //alert('mouseout detected');
    });
}