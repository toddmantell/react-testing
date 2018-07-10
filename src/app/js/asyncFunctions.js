export const returnTheValue = async value => await Promise.resolve(value)

export const thisWillThrow = async () => {
	throw new Error('Failed! :(')
}
