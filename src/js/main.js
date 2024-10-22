import { LAUNDRY, DRY, COEFFICIENT } from './variables.js'

const getFormData = () => {
	const LaundryFormEl = document.getElementById('laundry-form')
	const formData = new FormData(LaundryFormEl)
	const formProps = Object.fromEntries(formData)
	return formProps
}

const renderResult = () => {
	const resultEl = document.getElementById('result')
	resultEl.innerHTML = ''
	const resultTextEl = document.createElement('p')
	resultTextEl.classList.add('result__text')
	resultTextEl.textContent = `Сумма: ${calculateLaundry()} x ${COEFFICIENT} = ${
		calculateLaundry() * 1.3
	} руб.`
	resultEl.append(resultTextEl)
}

const calculateLaundry = () => {
	const formData = getFormData()
	let laundryType = LAUNDRY
	if (formData['type'] === 'dry') {
		laundryType = DRY
	}
	const sumObj = {
		'duvet-feather': parseInt(formData['duvet-feather']) * laundryType.duvetFeather,
		'duvet-fiber': parseInt(formData['duvet-fiber']) * laundryType.duvetFiber,
		'pillow-feather':
			parseInt(formData['pillow-feather']) * laundryType.pillowFeather,
		'pillow-fiber': parseInt(formData['pillow-fiber']) * laundryType.pillowFiber,
		'down-jacket': parseInt(formData['down-jacket']) * laundryType.downJacket,
		curtains: parseInt(formData['curtains']) * laundryType.curtains,
		bedcover: parseInt(formData['bedcover']) * laundryType.bedcover,
		jacket: parseInt(formData['jacket']) * laundryType.jacket,
		trousers: parseInt(formData['trousers']) * laundryType.trousers,
		jeans: parseInt(formData['jeans']) * laundryType.jeans,
		coat: parseInt(formData['coat']) * laundryType.coat,
		cloak: parseInt(formData['cloak']) * laundryType.cloak,
		shirt: parseInt(formData['shirt']) * laundryType.shirt,
		't-shirt': parseInt(formData['t-shirt']) * laundryType.tShirt,
		blouse: parseInt(formData['blouse']) * laundryType.blouse,
		sweater: parseInt(formData['sweater']) * laundryType.sweater,
		tie: parseInt(formData['tie']) * laundryType.tie,
		dress: parseInt(formData['dress']) * laundryType.dress,
		'formal-dress': parseInt(formData['formal-dress']) * laundryType.formalDress,
		skirt: parseInt(formData['skirt']) * laundryType.skirt,
		napkin: parseInt(formData['napkin']) * laundryType.napkin,
		tablecloth: parseInt(formData['tablecloth']) * laundryType.tablecloth,
		pillowcase: parseInt(formData['pillowcase']) * laundryType.pillowcase,
		sheets: parseInt(formData['sheets']) * laundryType.sheets,
		'duvet-cover': parseInt(formData['duvet-cover']) * laundryType.duvetCover,
		plaid: parseInt(formData['plaid']) * laundryType.plaid,
		gloves: parseInt(formData['gloves']) * laundryType.gloves,
		'stains-removing':
			parseInt(formData['stains-removing']) * laundryType.stainsRemoving,
	}

	const sumValues = obj => Object.values(obj).reduce((a, b) => a + b, 0)
	return sumValues(sumObj)
}

const inputs = document.querySelectorAll('input')

inputs.forEach(input => {
	input.addEventListener('input', () => {
		renderResult()
	})
})
