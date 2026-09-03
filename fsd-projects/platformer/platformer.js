$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
   // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(1180, 650, 480, 90);
createPlatform(680, 580, 90, 180);
createPlatform(800, 480, 480, 90);
createPlatform(50, 650, 480, 90);
createPlatform(0, 300, 480, 90);
createPlatform(1230, 550, 50, 100);
createPlatform(600, 100, 1, 100, "#add8e6"); 
createPlatform(1150, 350, 164, 86,); 
createPlatform(900, 230, 94, 62,); 
createPlatform(850, 700, 150, 30, "#add8e6"); 



    // TODO 3 - Create Collectables
createCollectable("max", 950, 650);
createCollectable("max", 620, 120);
createCollectable("max", 50, 550);

    
    // TODO 4 - Create Cannons
createCannon("top", 500, 500);
createCannon("top", 300, 500);
createCannon("top", 200, 500);
createCannon("top", 400, 500);
createCannon("left", 550, 1000);
createCannon("right", 800, 0);
createCannon("left", 230, 1000);
createCannon("top", 1030, 750);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
