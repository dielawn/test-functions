


const {capitalFirstChar, reverseString, calculator, cipherTextFunc, analyzeArray,} = require('./index')

test('capitalizes first character and handles remaing letters', () => expect(capitalFirstChar('example')).toBe('Example'))

test('reverses a string', () =>  expect(reverseString('example')).toBe('elpmaxe'))

test('calculator that can add, subtract, divide, and multiply', () => {
    expect(calculator.sum(1, 2)).toBe(3)
    expect(calculator.subtract(2, 1)).toBe(1)
    expect(calculator.divide(4, 2)).toBe(2)
    expect(calculator.multiply(4, 2)).toBe(8)
})

describe('Caesar Cipher Encryption', () => {
    const testCases = [
        {
            key: 12, 
            input: 'attack at dawn',
            output: 'mffmow mf pmiz'
        },
        {
            key: 12,
            input: 'ATTACK AT DAWN',
            output: 'mffmow mf pmiz'
        },
        {
            key: 12,
            input: 'AtTack At DawN',
            output: 'mffmow mf pmiz'
        },
        {
            key: 12,
            input: 'attack, "at" dawn!',
            output: 'mffmow, "mf" pmiz!'
        },
        {
            key: -3,
            input: 'abc',
            output: 'xyz'
        }
    ]

testCases.forEach(({ key, input, output }) => {
    test(`encrypts "${input}" with key ${key}`, () => {
        expect(cipherTextFunc(key, input)).toBe(output)
    })

    test(`handle uppercase letters in "${input}" `, () => {        
        expect(cipherTextFunc(key, input)).toBe(output)
    })

    test(`handle non-alphbet characters in "${input}"`, () => {
        expect(cipherTextFunc(key, input)).toBe(output)
    })

    test(`handle negative key values in "${input}"`, () => {
        expect(cipherTextFunc(key, input)).toBe(output)
    })
})
}
)

describe('Analyze Array', () => {
    const testCases = [
        {
            input: [1,8,3,4,2,6],
            output: {
                average: 4,
                min: 1,
                max: 8,
                length: 6
            }
        },
        {
            input: [34,100,58,49,52],
            output: {
                average: 58.6,
                min: 34,
                max: 100,
                length: 5
            }
        },
        {
            input: [-3,69,420,1031],
            output: {
                average: 379.25,
                min: -3,
                max: 1031,
                length: 4
            }
        },
        
    ]
    testCases.forEach((testCase) => {

        const {input, output} = testCase
        const resultObject = analyzeArray(input)

        test.each([
            ['min', resultObject.min, output.min],
            ['max', resultObject.max, output.max],
            ['average', resultObject.average, output.average],
            ['length', resultObject.length, output.length],
        ])('check array %s: %d', (property, result, expected) => {
            expect(result).toBe(expected)
        })
        // test(`check array min: ${testCase.output.min}, max: ${testCase.output.max} `, () => {   
        //     expect(resultObject.min).toBe(testCase.output.min)            
        //     expect(resultObject.max).toBe(testCase.output.max)
        // })
        // test(`array average: ${testCase.output.average}`, () => {
        //     expect(resultObject.average).toBe(testCase.output.average)
        // })
        // test(`array length: ${testCase.output.length}`, () => {
        //     expect(resultObject.length).toBe(testCase.output.length)
        // })
    })
})
