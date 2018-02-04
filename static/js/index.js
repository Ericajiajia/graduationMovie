var quesIndexArr = [0, 0, 0, 0, 0], 
	quesIndex = 0, 
	ansArr = ['', '', '', '', ''], 
	ansIndex = 1,
	resArr = []
const problemNum = 5



const switchFirstPage = () => {
	$('.basicalBack')[0].className = 'basicalBack backScale'
	$('.firstPage-macarea')[0].className = 'firstPage-macarea macareaMove'
	$('.firstPage-waves')[0].className = 'firstPage-waves wavesMove'
	setTimeout(function () {
		$('.firstPage-content')[0].className = 'firstPage-content animated bounceOutLeft'
	}, 1500)
	setTimeout(function () {
		$('.firstPage-title')[0].className = 'firstPage-title titleMove'
		$('.firstPage-img')[0].className = 'firstPage-img imgMove'
	}, 2200)
	setTimeout(function () {
		$('.guide-content')[0].style.display = 'block'
		$('.guide-content')[0].className = 'guide-content animated fadeInRight'
	}, 3000)
	setTimeout(function () {
		$('.firstPage-button')[0].style.display = 'block'
		$('.firstPage-button')[0].className = 'firstPage-button animated bounceInUp'
	}, 4000)
}
$('.firstPage-waves')[0].addEventListener('click', switchFirstPage)

const leaveFirstPage = () => {
	setTimeout(function () {
		$('.firstPage-button')[0].className = 'firstPage-button animated bounceOutDown'
	}, 100)
	setTimeout(function () {
		$('.firstPage-title')[0].className = 'firstPage-title titleMove animated bounceOutLeft'
	}, 500)
	setTimeout(function () {
		$('.statusBack')[0].style.display = 'block'
		$('.statusBack')[0].className = 'statusBack animated fadeInRight'
		$('.firstPage-button')[0].style.display = 'none'
		setTimeout(function () {
			$('.statusBack')[0].className = 'statusBack'
			$('.firstPage-button')[0].className = 'firstPage-button'
			$('.firstPage-title')[0].className = 'firstPage-title hide'
			$('.firstPage-content')[0].className = 'firstPage-content hide'
			$('.guide-content')[0].className = 'guide-content hide'
		}, 1500)
		quesPageFunc()
	}, 900)
}
$('.firstPage-button')[0].addEventListener('click', leaveFirstPage)

// ��Ŀѡ���ظ�
const quesPerChoose = (i) => {
	let index
	index = Math.floor(Math.random() * datas[i].length)
	if (datas[i][index].num === 1) {
		do {
			index = Math.floor(Math.random() * datas[i].length)
			datas[i][index].num = 1
		} while (datas[i][index].num === 1);
	} else {
		datas[i][index].num = 1
	}
	quesIndexArr[i] = index
	resArr.push(datas[i][index].wenan)
}
const quesChoose = () => {
	let chanceIndex = 0
	for (let _i = 0; _i < problemNum; _i ++) {
		quesPerChoose(_i)
	}
	// quesIndexArr = [3, 4, 3, 5, 2]
	console.log(quesIndexArr, resArr)
}
// ��Ŀ��ֵ����
const quesGet = () => {
	let chooseArr = ['A. ', 'B. ', 'C. ']
	$('.questions')[0].innerHTML = quesIndex + 1 + '.' + datas[quesIndex][quesIndexArr[quesIndex]].problem
	for(let _i = 1; _i < 4; _i ++) {
		$('.ans' + _i)[0].className = 'ans' + _i
		$('.ans' + _i)[0].innerHTML = chooseArr[_i - 1] + datas[quesIndex][quesIndexArr[quesIndex]]['choose' + _i]
		$('.ans' + _i)[0].dataset.res = 'false'
		if (datas[quesIndex][quesIndexArr[quesIndex]]['choose' + _i] == datas[quesIndex][quesIndexArr[quesIndex]]['ans']) {
			$('.ans' + _i)[0].dataset.res = 'true'
		}
	}
}
// ��Ŀ���ֺ�����
const quesShow = () => {
	// ����Ŀ��ֵ�����������ʽ
	quesGet()
	$('.questionStick')[0].className = 'questionStick'
	if (quesIndex === 0) {
		$('.questionPage')[0].style.display = 'block'
	}
	$('.questionBack')[0].style.display = 'block'
	$('.questionBack')[0].className = 'questionBack animated bounceInUp'
}
const quesHide = (str) => {
	setTimeout (function () {
		$('.questionStick')[0].className = 'questionStick' + str
	}, 100)
	setTimeout (function () {
		$('.questionBack')[0].className = 'questionBack animated bounceOutDown'
	}, 1000)
}
const quesPageFunc = () => {
	// ��ʼѡ����Ŀ�����ظ�
	quesChoose()
	setTimeout(function () {
		// չʾ��Ŀ��ÿ�ζ�Ҫ�ж���Ӧ״̬
		quesShow()
	}, 2000)
	setTimeout(function () {
		$('.questionNext')[0].style.display = 'block'
		$('.questionNext')[0].className = 'questionNext animated flipInX'
	}, 3000)
}


// ����Ƿ���
for (let _i = 1; _i < 4; _i ++) {
	$('.ans' + _i)[0].addEventListener('click', function (e) {
		console.log(e.target.dataset.res)
		for (let _j = 1; _j < 4;_j ++) {
			$('.ans' + _j)[0].className = 'ans' + _j
		}
		e.target.className = 'ans' + e.target.dataset.id + ' chosen'
		// console.log($('.ans' + _i)[0], _i)
		ansArr[quesIndex] = e.target.dataset.res
		ansIndex = e.target.dataset.id
		// console.log(ansArr)
	})
}

const problemNext = () => {
	if (ansArr[quesIndex] === '') {
		return
	} else {
		if (ansArr[quesIndex] === 'true') {
			$('.chosen')[0].className = 'ans' + ansIndex + ' ansTrue'
		} else {
			$('.chosen')[0].className = 'ans' + ansIndex + ' ansFalse'
			for (let _j = 1; _j < 4; _j ++) {
				if ($('.ans' + _j)[0].dataset.res === 'true') {
		console.log(ansArr[quesIndex], $('.ans'+ _j)[0].dataset.res, )
		console.log($('.ans' + _j)[0].innerHTML, $('.ans' + _j)[0].innerHTML === datas[0][3].ans)
					$('.ans' + _j)[0].className = 'ans' + _j + ' ansTrue'
				}
			}
		}
		quesIndex ++
		if (quesIndex === 1) {
			setTimeout (function () {
				$('.questionLast')[0].style.display = 'block'
				$('.questionLast')[0].className = 'questionLast animated flipInX'
			}, 4000)
		} else if (quesIndex === 4) {
			setTimeout (function () {
				$('.questionNext')[0].className = 'questionNext animated flipOutX'
			}, 4000)
			setTimeout(function () {
				$('.questionEnd')[0].style.display = 'block'
				$('.questionEnd')[0].className = 'questionEnd animated flipInX'
			}, 4250)
		}
		quesHide(' stickStart')
		setTimeout(function () {
			quesShow()
		}, 3000)
	}
}
const problemLast = () => {
	quesIndex --
	if (quesIndex <= 0) {
		quesIndex = 0
		setTimeout (function () {
			$('.questionLast')[0].className = 'questionLast animated flipOutX'
		}, 1000)
	} else if (quesIndex === 1) {
		setTimeout (function () {
			$('.questionEnd')[0].className = 'questionEnd animated flipOutX'
		}, 1000)
		setTimeout(function () {
			$('.questionNext')[0].style.display = 'block'
			$('.questionNext')[0].className = 'questionNext animated flipInX'
		}, 1300)
	}
	quesHide('')
	ansArr[quesIndex + 1] = '', ansArr[quesIndex] = ''
	console.log(ansArr)
	setTimeout(function () {
		quesShow()
	}, 2000)
}
const problemEnd = () => {
	if (quesIndex !== 4 || !ansArr[2] || !ansArr[1] || !ansArr[0] || !ansArr[3] || !ansArr[4]) {
		return
	} else {
		if (ansArr[quesIndex] === 'true') {
			$('.chosen')[0].className = 'ans' + ansIndex + ' ansTrue'
		} else {
			$('.chosen')[0].className = 'ans' + ansIndex + ' ansFalse'
			for (let _j = 1; _j < 4; _j ++) {
				if ($('.ans' + _j)[0].dataset.res === 'true') {
		console.log(ansArr[quesIndex], $('.ans'+ _j)[0].dataset.res, )
		console.log($('.ans' + _j)[0].innerHTML, $('.ans' + _j)[0].innerHTML === datas[0][3].ans)
					$('.ans' + _j)[0].className = 'ans' + _j + ' ansTrue'
				}
			}
		}
		
		let rightNumber = 0
		for (let _i = 0; _i < ansArr.length; _i ++) {
			if (ansArr[_i] === 'true') {
				rightNumber ++
			}
		}
		console.log(ansArr, rightNumber)
		$('.block1 span')[0].innerHTML = rightNumber
		switch(rightNumber) {
			case 0:
				$('.content1')[0].innerHTML = datans[0]
				break
			case 1: 	
				$('.content1')[0].innerHTML = datans[1]
				break
			case 2:
				$('.content1')[0].innerHTML = datans[2]
				break
			case 3:
				$('.content1')[0].innerHTML = datans[3]
				break
			case 4:
				$('.content1')[0].innerHTML = datans[4]
				break
			case 5:
				$('.content1')[0].innerHTML = datans[5]
				break
			default: break
		}
		setTimeout(function () {
			$('.questionLast')[0].className = 'questionLast animated flipOutX'
			$('.questionEnd')[0].className = 'questionEnd animated flipOutX'
		}, 100)
		setTimeout(function () {
			$('.questionStick')[0].className = 'questionStick stickStart'
		}, 600)
		setTimeout(function () {
			$('.questionBack')[0].className = 'questionBack animated bounceOutDown'
		}, 1500)
		setTimeout(function () {
			$('.questionPage')[0].style.display = 'none'
			$('.resultPage')[0].style.display = 'block'
			$('.resultPage')[0].className = 'resultPage animated2 fadeInUp'
			resultPage()
		}, 3000)
	}
}
$('.questionNext')[0].addEventListener('click', problemNext)
$('.questionLast')[0].addEventListener('click', problemLast)
$('.questionEnd')[0].addEventListener('click', problemEnd)

const resultPage = () => {
	$('.content2')[0].innerHTML = ''
	for (let i = 0; i < resArr.length; i++) {
		$('.content2')[0].innerHTML += resArr[i] + '<br>'
	}
	setTimeout(function () {
		$('.resultPage')[0].style.display = 'block'
		$('.resultPage')[0].className = 'resultPage animated2 slideInUp'
	}, 100)
	setTimeout(function () {
		$('.shareButton')[0].style.display = 'block'
		$('.shareButton')[0].className = 'shareButton animated bounceInUp'
	}, 8300)
	setTimeout(function () {
		$('.againButton')[0].style.display = 'block'
		$('.againButton')[0].className = 'againButton animated bounceInUp'
		$('.resultPage')[0].className = 'resultPage'
	}, 9000)
}

const againFunc = () => {
    $('.resultImgPage')[0].style.display = 'none'
	$('.shareButton')[0].className = 'shareButton animated flipOutX'
	$('.againButton')[0].className = 'againButton animated flipOutX'
	setTimeout(function () {
		$('.shareButton')[0].style.display = 'none'
		$('.againButton')[0].style.display = 'none'
		$('.resultPage')[0].className = 'resultPage animated2 fadeOutUp'
		$('.favorArea')[0].className = 'favorArea'
		$('.questionPage')[0].style.display = 'none'
		$('.questionBack')[0].className = 'questionBack backStart'
		$('.questionLast')[0].style.display = 'none'
		$('.questionNext')[0].style.display = 'none'
		$('.questionEnd')[0].style.display = 'none'
		$('.questionLast')[0].className = 'questionLast'
		$('.questionNext')[0].className = 'questionNext'
		$('.questionEnd')[0].className = 'questionEnd'
		$('.favorArea')[0].style.display = 'none'
		quesIndexArr = [0, 0, 0], quesIndex = 0, ansArr = ['', '', ''], resArr = []
	}, 1200)
	setTimeout(function () {
		$('.resultPage')[0].style.display = 'none'
		quesPageFunc()
	}, 7000)
}
$('.againButton')[0].addEventListener('click', function () {
	againFunc()
})

const shareFunc = () => {
	$('.shareButton')[0].className = 'shareButton animated flipOutX'
	setTimeout(function () {
		$('.favorArea')[0].style.display = 'block'
		$('.favorArea')[0].className = 'favorArea animated fadeInUp'
	}, 1200)
	setTimeout(function () {
		$('.favorArea')[0].className = 'favorArea'
		$('.resultImgPage')[0].removeChild($('.resultImgPage')[0].firstChild)
	}, 2600)
	setTimeout(function () {
		console.log('start canvas')
		var canvas = document.createElement("canvas")
        canvas.width = document.body.offsetWidth * 2
        canvas.height = document.body.offsetHeight * 2
        canvas.getContext("2d").scale(2, 2)
        var opts = {
        	scale: 2,
        	canvas: canvas,
        	logging: false,
        	width: canvas.width / 2,
        	height: canvas.height / 2,
        	allowTaint: true,    
            taintTest: false
        }
		html2canvas($('#basicalBackId'), opts)
			.then(canvas => {
				var dataURL = canvas.toDataURL("image/png")
				var img = document.createElement("img")
				img.src = dataURL
				console.log(dataURL)
				$('.resultImgPage')[0].appendChild(img)
		        $('.resultImgPage img')[0].style.width = canvas.width / 2 + "px"
            	$('.resultImgPage img')[0].style.height = canvas.height / 2 + "px"
            	$('.resultImgPage')[0].style.display = 'block'
			})
	}, 3000)
}
$('.shareButton')[0].addEventListener('click', shareFunc)