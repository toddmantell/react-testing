import { returnTheValue, thisWillThrow } from '../app/js/asyncFunctions'

describe('asyncFunctions', () => {
  it('should return the value', async () => {
    const result = await returnTheValue(2)

    expect(result).toEqual(2)
	})
	
	it('should throw', async () => {
		try {
			expect(await thisWillThrow()).toThrowError()
		} catch (error) {
			// It turns out you don't HAVE to do the catch, if you just expect it to throw, which makes sense
			// expect(error.toString()).toEqual('Failed! :(')
		}		
	})

	it('should require mocking of the api call', async () => {
		
	});
})
