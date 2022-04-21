// -----------------------------------------------------------------------
// Task1 : output keys and values of your own properties

function logOwnProperties(obj){
	for(let key in obj){
		if(obj.hasOwnProperty(key)){
			console.log('key =   ' + key);
			console.log('value = ' + obj[key]);
	};
}

const test = { 'apple' : 'яблоко', 'orange' : 'апельсин' };

logOwnProperties(test);

// -----------------------------------------------------------------------
// Task 2 : Check property name

function hasPropertyName(obj, name){
	for(let key in obj){
	  if(key == name)return true;
	};
	return false;
};

const test = { 'apple' : 'яблоко', 'orange' : 'апельсин' };

console.log(hasPropertyName(test, 'apple'));
console.log(hasPropertyName(test, 'peach'));

// -----------------------------------------------------------------------
// Task 3 : an empty object without a prototype

function Empty() { return Object.create(null); };



