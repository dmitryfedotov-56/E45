// -----------------------------------------------------------------------
/*
	This is an example of inheritance and polymorphism, class notation
*/
// -----------------------------------------------------------------------

class Figure {							// class Figure
	
	constructor(abscissa, ordinate){	// constructor is used to set coordinates
		this.abscissa = abscissa;
		this.ordinate = ordinate;
	}
	
	
	moveTo(x, y){				// any figure can be moved
		this.abscissa += x;
		this.ordinate += y;
	}
};

// -----------------------------------------------------------------------

class Rectangle extends Figure {	// class Rectangle
	
	constructor(abscissa, ordinate, width, height){
		super(abscissa, ordinate)
		this.width = width;
		this.height = height;
	}
	
	getArea(){ 							     // rectangle area
		return this.width * this.height; 
 	}	
  
    zoomIn(ratio){                           // zoon in method
        this.width  *= ratio;
        this.height *= ratio;
    }
  
    zoomOut(ratio){                          // zoom out method
        this.width  /= ratio;
        this.height /= ratio;
    }
};

// -----------------------------------------------------------------------

class Square extends Figure {			     // class Square
	
	constructor(abscissa, ordinate, side){
		super(abscissa, ordinate)
		this.side = side;
    }
		
    getArea(){ 						         // square area
	    return this.side * this.side; 
	}
  
    zoomIn(ratio){                           // zoon in method
        this.side  *= ratio;
     }
  
    zoomOut(ratio){                          // zoom out method
        this.side  /= ratio;
     }
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
zoomInFigures(figures, 3);
console.log('the figures are shifted and enlarged');
putFigures(figures);

moveFigures(figures, -10,-10);
zoomOutFigures(figures, 3);
console.log('the figures are shifted back and reduced');
putFigures(figures);

    
