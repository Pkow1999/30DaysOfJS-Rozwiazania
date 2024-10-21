//1
	function outerFunction(){
		console.log("OUTER!");
		let variable = 0;
		function innerFunction(){
			console.log("INNER!");
			return variable += 5;
		}
		console.log("OUT OF OUTER");
		return innerFunction
	}

	console.log(outerFunction()());

	