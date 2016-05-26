            //Global Variables
            var mainStage; //creation of the main stage
            var playName; //allows for the user to place their name in 
            var playCharacter; //the character
            var playScore = 0; //the players score
            var LastplayerScore;
            var charSprite;
            var sharkSprite; //the shark //array
            var shellArray = new Array(); //the shell // array
            var ball; //the ball //array
            var kPressed; //handles the keypress
            var key; //handles which key is pressed
            var sDisplay;
            var frameRate = 24;
            var sharkSpeed = 25;
            var stageHeight;
            var stageWidth;

            //Loading of the music, and a few images
            var mQueue = new createjs.LoadQueue();
            createjs.Sound.alternateExtensions = ["mp3"];
            mQueue.installPlugin(createjs.Sound);
            mQueue.addEventListener("complete", musicComplete);
            mQueue.loadManifest([
                {id: "main", src: "Music/21st Century Surf.mp3", data: 5}
            ]); //end Preloader

            function musicComplete() {
                Main();
            }//end musicComplete

            function Main() {

                //Stage Creation
                mainStage = new createjs.Stage(document.getElementById("Canvas"));
                stageWidth = myStage.canvas.width;
                stageHeight = myStage.canvas.height;
                //Placing the stage directions
                mainStage.NORTH = 0;
                mainStage.SOUTH = 2;
                mainStage.EAST = 1;
                mainStage.WEST = 3;
                //defining the tile sizes
                mainStage.tileSize = 40; //MAY CHANGE DEPENDING ON THE MISSING SPRITE (05/16)

                //Array to handle keypresses
                kPressed = [];
                //Designated keys array
                key = {w: 87, a: 65, s: 83, d: 68, up: 38, down: 40, left: 37, right: 39};
                //Score floater array
                ScoreText = [];
                //background imgae
                var background = new createjs.Bitmap("Images/background.png");
                mainStage.addChild(background);
                //User name floater


                //Chracter SpriteSheet
                charSprite = new create.jsSpriteSheet(
                        {
                            "images": ["link to the spritesheet file path"],
                            "frames": {width: 128, height: 128, count: 48},
                            "animation": {
                                "idle": {frames: [0]},
                                "blink": {frames: [1, 2, 3], speed: 0.08, next: "idle"},
                                "move": {frames: [4 - 11], speed: 0.5}
                            }
                        });//end charSprite

                //Playing the music
                //commented to save my sanity....debugging this code
                //wait chrome has a mute tab option, thank the Force
                var museInstance = createjs.Sound.play("main", {loop: -1});
                museInstance.on("loop", handleLoop);
                function handleLoop(event) {
                    museInstance.volume = museInstance.volume * 0.5;
                }

                //Presenting the true creator 
                //This will be edited out in the builds but not in the final 
                cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
                    alert('Check the Console logs', creatOr);
                });
                //I think this is using a similar function base to the KeyMonkey Class

                //display the player score and the players lives
                //player score
//                sDisplay.x = 20;
//                sDisplay.y = 10;
//                sDisplay.textBaseline = "alphabetic";

                createjs.Ticker.addEventListener("tick", drawNewFrame);
            }//end init
            function shark() {
                //Shark spriteSheet
                this.sharkSprite = new create.jsSpriteSheet(
                        {
                            "images": ["link to the spritesheet file path"],
                            "frames": {width: 128, height: 128, count: 48},
                            "animation": {
                                "idle": {frames: [0]},
                                "blink": {frames: [1, 2, 3], speed: 0.08, next: "idle"},
                                "move": {frames: [4 - 11], speed: 0.5}
                            }
                        });//end sharkSprite
                sharkSprite.box = new createjs.Rectangle(dagger.x, dagger.y, 128, 128);
                mainStage.addChiled(this.sharkSprite);
            }//end SharkSpawn
            function shell() {
                this.shell = new createjs.Bitmap("Images/shell#1.png");
                this.shell.x = Math.floor(Math.random() * stageHeight);
                this.shell.y = Math.floor(Math.random() * stageWidth);
                myStage.addChild(this.shape);

            }//end shellSpawn
            function ballF() {

                this.shape.x = Math.floor(Math.random() * stageHeight);
                this.shape.y = Math.floor(Math.random() * stageWidth);
                myStage.addChild(this.shape);


            }//end ballSpawn

            //spawn fucntion controls the spawning of the balls and shark
            function spawn() {

            }//end spawn

            function shellSpawn() {
                var randomShell = Math.floor((Math.random() * 3) + 1);
                if (randomShell === 0 && radomShell !== 3) {
                    var shells = new shell(); //spawning a new shell
                    shellArray.push(shells); // pushing the shell into an array
                }//end if
            }//end shellSpawn

            //Handles the movment of the shark, shell, and ball
            function Movement() {
                for (var b = 0; b >= shellArray.lenght; b++) {
                    var thisShell = shellArray[b];
                    thisShell.shape.x += 5;
                }//end for

                for (var x = 0; x >= sharkArray.length; x++) {
                    var thisShark = sharkArray[x];
                    thisShark.shape.x += 10;
                }//end for

                for (var y = 0; i >= ballArray.length; y++) {
                    var thisBall = ballArray[y];
                    thisBall.shape.x += 6;
                }//end for

            }//end Movemen 

            function NewFrame(evt) {
                //functon calls
                spawn();
                shellSpawn();
//                if(playerScore != 0){
//                    if(playerScore>LastplayerScore){
//                        
//                    }//end if 
//                    else(playerScore<=LastplayerScore){
//                    
//                }//end else
                mainStage.update();
            }//end NewFrame