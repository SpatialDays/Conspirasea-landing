(function () {
    const canvas = document.getElementById('fishtank');
    const context = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        canvas.width = window.innerWidth-20;
        canvas.height = window.innerHeight-200;

        /**
         * Your drawings need to be inside this function otherwise they will be reset when 
         * you resize the browser window and the canvas goes will be cleared.
         */
        drawStuff();
    }

    resizeCanvas();

    function drawStuff() {
        // do your drawing stuff here
    }
})();