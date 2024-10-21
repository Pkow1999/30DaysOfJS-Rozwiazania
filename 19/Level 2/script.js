//1
	function makeCounter(){
		let counter = 0;
		function increment(){
			++counter;
		}
		function decrement(){
			--counter;
		}
		function value(){
			return counter;
		}
		return{
			increment:increment,
			decrement:decrement,
			value:value
		}
	}

	const counter1 = makeCounter();
	console.log(counter1.value());
	console.log(counter1.increment());
	console.log(counter1.value());