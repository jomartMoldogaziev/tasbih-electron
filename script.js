 let countValue = 0

 function count() {
		countValue++
		document.getElementById('counter').textContent = countValue
 }

 function reset() {
		countValue = 0
		document.getElementById('counter').textContent = countValue
 }