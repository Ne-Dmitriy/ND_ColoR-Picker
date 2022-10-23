//Создаём константу cols, обращаемся к документу с методом querySelectorAll(), позволяющий забрать список необходимых элементов.
// Передаём ему селектор ".col". 

const cols = document.querySelectorAll(".col") 

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

function setRandomColors() {
	cols.forEach((col) => {
		const text = col.querySelector("h2")
		const color = generateRandomColor() 
		
		text.textContent = color
		col.style.background = color

// 		setTextColor(text, color) 
	}) 
} 

// Определяем оттенок. Реализуем тёмный цвет текста для светлых оттенков. 

//function setTextColor(text, color) {
//	const luminance = chroma(color).luminance()
//	text.style.color = luminance > 0.5? "#1f1f1f" : "#FFFFFF" 
// } 


setRandomColors() 


// Цель, говоря просто, - менять background у колонок. 
// Но нам перед этим нужен метод, который позволит генерировать случайный цвет. 



