// -----------------------------------------------------------------------
/*
	This is an example of inheritance and polymorphism, constructor notation
*/
// -----------------------------------------------------------------------


function Figure(abscissa, ordinate){		// class Figure
	this.abscissa = abscissa;
	this.ordinate = ordinate;
};

Figure.prototype.moveTo = function(x, y){	// move figure
	this.abscissa += x;
	this.ordinate += y;
};

// -----------------------------------------------------------------------

function Rectangle(abscissa, ordinate, width, height){	// class Rectangle
	this.abscissa = abscissa;
	this.ordinate = ordinate;
	this.width = width;
	this.height = height;
};

Rectangle.prototype = new Figure();

Rectangle.prototype.getArea = function() {				// rectangle area
	return this.width*this.height; 
};

Rectangle.prototype.zoomIn = function(ratio) {		    // zoom in rectangle
	this.height *= ratio;
	this.height *= ratio;
};

Rectangle.prototype.zoomOut = function(ratio) {		    // zoom out rectangle
	this.height /= ratio;
	this.height /= ratio;
};

// -----------------------------------------------------------------------

function Square(abscissa, ordinate, side){				// class square
	this.abscissa = abscissa;
	this.ordinate = ordinate;
	this.side = side;
};

Square.prototype = new Figure();

Square.prototype.getArea = function() {					// square area
	return this.side * this.side; 
};

Square.prototype.zoomIn = function(ratio) {		        // zoom in square
	this.side *= ratio;
};

Square.prototype.zoomOut = function(ratio) {			// zoom out square
	this.side /= ratio;
};

// -----------------------------------------------------------------------

function putFigure(figure){					// put figure info
	let s = '';
	s += 'x = ' + figure.abscissa + ' ';
	s += 'y = ' + figure.ordinate + ' ';
	s += 'square = ' + figure.getArea()
	console.log(s);
};

function putFigures(figures){				// put figures
  for(let n in figures){ 
    putFigure(figures[n]);
  };
};

function moveFigures(figures, x, y){		// move figures
  for(let n in figures){ 
    figures[n].moveTo(x, y);
  };
};

function zoomInFigures(figures, ratio){		// zoom in figures
  for(let n in figures){ 
    figures[n].zoomIn(ratio);
  };
};

function zoomOutFigures(figures, ratio){	// zoom out figures
  for(let n in figures){ 
    figures[n].zoomOut(ratio);
  };
};

const figures = [ new Square(20, 20, 10), new Rectangle(50, 50, 20, 10) ];

putFigures(figures);

moveFigures(figures, 10,10);
zoomInFigures(figures, 2);
console.log('the figures are shifted and enlarged');
putFigures(figures);

moveFigures(figures, -10,-10);
zoomOutFigures(figures, 2);
console.log('the figures are shifted back and reduced');
putFigures(figures);
