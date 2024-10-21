//1
	async function catsData(){
		try{
			const response = await fetch(catsAPI)
			const cats = await response.json()
			const catName = cats.map(catObject => catObject.name)
			console.log(catName);
		}catch(err){
			console.error(err);
		}
	}
	catsData()
	