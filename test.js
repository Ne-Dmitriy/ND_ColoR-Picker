let button = document.getElementById("finish");

button.addEventListener("click", checkTest);

function checkTest() {
	let result = 0;

	let a1 = document.getElementById("q1").value;
	if (a1 === "1097"){
		result++; 
	} 
	
	let a2 = document.getElementById("q2").value;
	if (a2 === "1327"){
		result++; 
	} 
	
	let a3 = document.getElementById("q3").value;
	if (a3 === "1547"){
		result++; 
	} 
	
	let a4 = document.getElementById("q4").value;
	if (a4 === "1550"){
		result++; 
	} 
	
	let a5 = document.getElementById("q5").value;
	if (a5 === "1565-1572"){
		result++;  
	} 
	
	let a6 = document.getElementById("q6").value;
	if (a6 === "1598-1613"){
		result++; 
	} 
	
	let a7 = document.getElementById("q7").value;
	if (a7 === "1611-1612"){
		result++; 
	} 
	
	let a8 = document.getElementById("q8").value;
	if (a8 === "1648"){
		result++; 
	} 
	
	let a9 = document.getElementById("q9").value;
	if (a9 === "1654"){
		result++; 
	} 
	
	let a10 = document.getElementById("q10").value;
	if (a10 === "1662"){
		result++; 
	} 	
	
	alert("Количество правильных ответов: " + result); 
}   