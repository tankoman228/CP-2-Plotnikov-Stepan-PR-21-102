function clicked() {
	//alert("sdfghj");
}

var a = [];
a[0] = 'да';
a[1] = 'возможно';
a[2] = 'конечно же да';
a[3] = 'наверное';
a[4] = 'вряд ли';
a[5] = 'не уверен';
a[6] = 'ни да, ни нет';
a[7] = 'нет';
a[8] = 'однозначно нет!';
a[9] = 'когда рак на горе свистнет';
a[10] = '147%, что да';
a[11] = 'только после того, как пройдёшь майнкрафт без читов';
a[12] = 'даже не думай';
a[13] = 'всё получится!';
a[14] = 'купи пару негров, это их работа';
a[15] = 'надейся на лучшее';
a[16] = 'тебе хана';
a[17] = 'наверняка';


let answer = document.querySelector('.answer');

var btn = document.querySelector('.btn');
btn.onclick = function(evt) {
	evt.preventDefault();
	answer.textContent = 'Мой ответ: ' + a[Math.floor(Math.random() * a.length)];
}