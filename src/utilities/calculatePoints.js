export const calculatePoints = (value) => {
	const ammount = parseInt(value)
	
	if (ammount < 50) return 0;
	
	if (ammount > 50 && ammount <= 100) {
		return ammount - 50;
	} 
	
	if (ammount > 100) {
		const doublePoints = ammount - 100;
		return doublePoints * 2 + 50;
	}
} 