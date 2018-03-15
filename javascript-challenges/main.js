var prices = [33, 26, 99, 120, 12, 45];
var sum = 0;

for(let i = 0; i < prices.length; i++){
	sum += prices[i]
}

console.log("The sum is: ", sum);

for(let i = 99; i > 0; i--){
	if(i === 1){
		console.log(
			`${i} crow on the wall. ${i} single crow.
		It fell down and became a wight.
		There's no one left to defend Westeros now.`)
	}else if(i === 2){
		console.log(`${i} crows on the wall. ${i} crows.
		1 fell down and became a wight.
		${i-1} crow on the wall`)
	}
	else if(i !== 1){
		console.log(`${i} crows on the wall. ${i} crows.
		1 fell down and became a wight.
		${i-1} crows on the wall`)
	}
}

