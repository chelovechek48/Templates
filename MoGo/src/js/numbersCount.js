const facts = document.querySelectorAll('.facts-count')
factsLock = false;

maxNumber = 0;
for (let index = 0; index < facts.length; index ++) {
	facts[index].dataset.max = facts[index].innerHTML;
	facts[index].innerHTML = 0;
	facts[index].dataset.current = 0;
	facts[index].dataset.count = 0;
	if (facts[index].dataset.max > maxNumber) {
		maxNumber = facts[index].dataset.max;
	}
}

function numbersCount() {
   time = 1000;
   delay = time/maxNumber;
	for (let index = 0; index < facts.length; index ++) {
		let FactCount = setInterval(() => {
			for (let i = 0; i < parseInt(facts[index].dataset.max); i ++) {
				if (facts[index].dataset.count == Math.round(maxNumber/parseInt(facts[index].dataset.max))*i) {
					facts[index].dataset.current ++;
				}
			}
			facts[index].innerHTML = facts[index].dataset.current;
			if (parseInt(facts[index].dataset.max) <= parseInt(facts[index].dataset.current)) {
				clearInterval(FactCount);
				delete(facts[index].dataset.max);
				delete(facts[index].dataset.current);
				delete(facts[index].dataset.count);
			}
			facts[index].dataset.count ++;
		}, delay);
	}
}