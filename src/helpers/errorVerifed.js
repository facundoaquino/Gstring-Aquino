import validator from 'validator'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css'

const returnError = (n, value = '') => {
	const errors = {
		name: Boolean(value.match(/\s/)) && validator.isAlpha(value.replace(' ', '')) && value.length >= 4,
		phone: validator.isNumeric(value, { no_symbols: true }) && value.length >= 8,
		email: validator.isEmail(value),
		email2: validator.isEmail(value),
	}

	return errors[n]
}

const errorsMessages = {
	name: 'Formato de nombre invalido',
	phone: 'Formato Numero invalido',
	email: 'Formato Email Invalido',
	email2: 'Formato Email Invalido',
}

export const errorVerifed = (name, value, notAll = true) => {
	if (value === '' && notAll) return
	if (!returnError(name, value.trim())) {
		const notyf = new Notyf()
		notyf.error({
			message: errorsMessages[name],
			duration: 1500,
		})
		return true
	}

	return false
}

export const emailsVerifed = (email, email2) => {
	const isOk = email === email2
	if (!isOk) {
		const notyf = new Notyf()
		notyf.error({
			message: 'Ambos emails deben ser iguales',
			duration: 1500,
		})
		return false
	}
	return true
}

export const verifedForm = (formValues) => {
	for (const name in formValues) {
		const isError = errorVerifed(name, formValues[name], false)
		if (isError) return false
	}
	return true
}
