





const leaveFirstPage = () => {
	$('.basicalBack')[0].className = 'basicalBack backScale'
	$('.firstPage-macarea')[0].className = 'firstPage-macarea macareaMove'
	$('.firstPage-waves')[0].className = 'firstPage-waves wavesMove'
	setTimeout(function () {
		$('.firstPage-content')[0].className = 'firstPage-content animated fadeOutLeft'
	}, 1500)
	setTimeout(function () {
		$('.firstPage-title')[0].className = 'firstPage-title titleMove'
		$('.firstPage-img')[0].className = 'firstPage-img imgMove'
	}, 1800)
	setTimeout(function () {
		$('.guide-content')[0].style.display = 'block'
		$('.guide-content')[0].className = 'guide-content animated fadeInRight'
	}, 2700)
	setTimeout(function () {
		$('.firstPage-button')[0].style.display = 'block'
		$('.firstPage-button')[0].className = 'firstPage-button animated bounceInUp'
	}, 3000)
}
$('.firstPage-waves')[0].addEventListener('click', leaveFirstPage)