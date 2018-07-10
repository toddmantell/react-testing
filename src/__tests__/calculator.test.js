import Calculator from "../app/js/Calculator";

describe('Calculator', () => {
	it('should correctly add two numbers together', () => {
		// Arrange
		const CalcInstance = new Calculator()

		// Act
		const result = CalcInstance.add(100, 50)

		// Assert
		expect(result).toEqual(150)
	});

	it('requires a mock', () => {
		
	});
});
