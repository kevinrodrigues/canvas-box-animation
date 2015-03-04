var canvas = document.getElementById('game'),
	context = canvas.getContext('2d'),
	boxes = [],
	totalBoxes = 100;
	// box = new Box();

	canvas.width = 800;
	canvas.height = 400;

	for(var i = 0; i < totalBoxes; i++) {
		boxes[i] = new Box();
		boxes[i].color = randomColor(0, 255, 0, 255, 0,255, 0.5);
	}

	//constructor function to hold our box values..
	function Box() {
		this.x = 10;
		this.y = 10;
		this.width = 100;
		this.height = 100;
	}

	function update() {
		// increment the x position by 1 on each loop

		boxes.forEach(function (box, i) {
			// box.x += 1;
			box.x += randomNumber(-5, 5);
			box.y += randomNumber(-5, 5);
		});

		// box.x += 1;
	}

	function randomNumber(min, max) {
		return Math.round(Math.random() * (max - min + 1) + min);
	}

	function randomColor(rmin, rmax, gmin, gmax, bmin, bmax, alpha) {
		var r = randomNumber(rmin, rmax),
			g = randomNumber(gmin, gmax),
			b = randomNumber(bmin, bmax);

		return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
	}

	/*
		fillRect:
			x position 10
			y position 10
			width 100
			height 100
	*/
	function draw() {

		//clear the box so we can animate the box and not elongate it.s
		context.clearRect(0, 0, canvas.width, canvas.height);

		// console.log(boxes);
		boxes.forEach(function (box, i) {
			context.fillStyle = box.color;
			context.fillRect(box.x, box.y, box.width, box.height);
		});
	}

	function loop() {
		// console.log('looping');
		update();
		draw();
		window.requestAnimationFrame(loop);
	}

	loop();