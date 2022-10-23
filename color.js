//Создаём константу cols, обращаемся к документу с методом querySelectorAll(), позволяющий забрать список необходимых элементов.
// Передаём ему селектор ".col". 

const cols = document.querySelectorAll(".col") 


// Реализуем функцию переключения уветов через пробел, а не через обновление страницы. 
// Слушаем событие "keydown". Проверяем, какое выполняется действие через "console.log(event.code)". 
// При событии пробел ("space") будем обновлять цвета - функция "setRandomColors()".  
// toLowerCase првиодит всё к нижнему регистру (можем сделать это, так как (event.code) - это строка. 

document.addEventListener("keydown", (event) => {
	event.preventDefault() 
	if (event.code.toLowerCase() == "space" ) {
		setRandomColors() 
	}
}) 


// Реализуем функцию закрытия замка. 
// Определяем, по какому элементу был совершён клик. "event.target" - обращается к элементу, по которому был сделан клик. 
// "dataSet" хранит в себе объект всех data-атрибутов. 
// Свойство "event.target.tagName." даёт нам в строковом значении название тега, по которому был произведён клик.

document.addEventListener("click", (event) => {
	const type = event.target.dataset.type
	
	if (type == "lock") {
		const node = 
			event.target.tagName.toLowerCase() == "i"
				? event.target
				: event.target.children[0]   
		
		node.classList.toggle("fa-lock-open") 
		node.classList.toggle("fa-lock")  
	} else if (type == "copy") {
		copyToClickboard(event.target.textContent) 
	}
}) 


// Реализуем функцию копирования #id цвета, при клике на #id. 

function copyToClickboard(text) {
	return navigator.clipboard.writeText(text) 
}


// Создаём функцию для генерации цвета. Она не будет ничего применять, а будет лишь 
// принемать код случайно созданного цвета. 
// В RGB-системе есть диапазон в 16 значений от 0 до F. 
// Где чисто красный это #FF0000, зелёный это #00FF00, и синий это #0000FF.
// Вводим константу hexCodes равную 16-ти значениям диапазона RGB.
// Вводим переменную color. += - оператор конкатенации - позволяет соединять строки.
// К переменной color мы будем добавлять любое из 16-ти значений диапазона.
// Для добавления случайного значения используем color += hexCodes[Math.floor(Math.random() * hexCodes.length)].
// После возвращаем строчку, добавляя к ней в начало "#".      

function generateRandomColor() {
	
	const hexCodes = "0123456789ABCDEF" 
	let color = ""
	for (let i = 0; i < 6; i++) {
		color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
	} 
	return "#" + color
}

// Проверить функцию в консоли можно через "generateRandomColor()". 


// Создаём функцию, которую будет устанавливать случайные цвета для колонок ".col".
// Описываем как стрелочную функцию.
// Значениею text присвоим значение случайно сгенерированного цвета. 
// Реализуем функцию определения статуса замка. 

function setRandomColors(isInitial) { 
	const colors = isInitial ? getColorsFromHash() : []  
	
	cols.forEach((col, index) => {
		const isLocked = col.querySelector("i").classList.contains("fa-lock") 
		const text = col.querySelector("h2")
		const color = generateRandomColor() 
		
		if (isLocked) {
			colors.push(text.textContent) 
			return 
		}
		
		// const color = isInitial 
		// ? colors[index] 
		//		? colors[index] 
		//		: chroma.random() 
		// : chroma.random() 
		
		// if (!isInitial) {
		//	colors.push(color) 
		// } 
			
		colors.push(color) 
		
		text.textContent = color
		col.style.background = color

// 		setTextColor(text, color) 
// 		setTextColor(button, color)  
	})

	updateColorsHash(colors)	  
} 

// Определяем оттенок. Реализуем тёмный цвет текста для светлых оттенков. 

//function setTextColor(text, color) {
//	const luminance = chroma(color).luminance()
//	text.style.color = luminance > 0.5? "#1f1f1f" : "#FFFFFF" 
// } 


// Реализуем сохранение выбранных цветов. 

function updateColorsHash(colors = []) {
	document.location.hash = colors
		.map((col) => {
		return col.toString.substring(1)
		}) 
		.join("-") 
}

function getColorsFromHash() {
	if (document.location.hash.length > 1) {
		return document.location.hash
			.substring(1)
			.split("-")
			.map((color) => "#" + color)  
	} 
	return [] 
} 


setRandomColors(true) 


// Цель, говоря просто, - менять background у колонок. 
// Но нам перед этим нужен метод, который позволит генерировать случайный цвет. 



