const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball;
var ground;
var constraint;
var hue1;

var balls = [];

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;
    hue1 = 0;
    var ball1 = null;
    for (var i = 50; i < 400; i = i + 7) {
        var fixed = false;
        if (!ball1) {
            fixed = true;
        }
        ball = new Ball(width / 2, i, 5, fixed);
        balls.push(ball);
        if (ball1) {
            var options = {
                bodyA: ball.body,
                bodyB: ball1.body,
                length: 5,
                stiffness: 0.3
            }
            constraint = Matter.Constraint.create(options);
            World.add(world, constraint);
        }
        ball1 = ball;
    }
    ground = new Ground(width / 2, height + 100, width, 50);
}

function draw() {
    if (hue1 > 360) {
        hue1 = 0;
    } else {
        hue1++;
    }

    colorMode(HSL, 360);
    background(hue1, 200, 200);
    Engine.update(engine);

    for (var i = 0; i < balls.length; i++) {
        balls[i].display();
    }
    ball.display();
    ground.display();

    fill(random(0, 255), random(0, 255), random(0, 255));
    textSize(50)
    text("Colourful ball chain", 950, 200);
    fill(255, 0, 0);
    textSize(20)
    text("-BY KARTHIKEYA", 1300, 750);
}