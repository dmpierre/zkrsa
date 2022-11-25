import { render, screen } from '@testing-library/react'
import {
    InputHash,
    InputProof,
    InputPublicKey,
    InputSignature,
    InputText,
} from '../../src/components/Inputs'
import { InputInvalidity, isValidIntegerInput } from '../../src/utils/inputs'
import userEvent from '@testing-library/user-event'
const mockSetValue = jest.fn((value: string) => {})
const mockSetError = jest.fn((value: string) => {})

describe('Testing Inputs', () => {
    describe('InputText', () => {
        it('should invite the user to enter text', () => {
            const { container } = render(<InputText setuserText={() => {}} />)
            expect(container).toHaveTextContent('Enter text')
        })
    })
    describe('InputHash', () => {
        it('should display error message on invalid hash', async () => {
            const { container } = render(<InputHash sethash={() => {}} />)
            const input = container.getElementsByTagName('input')
            await userEvent.type(input[0], 'a1234')
            const element = await screen.findByText(
                InputInvalidity.INVALID_CHARACTER
            )
            expect(element).toHaveTextContent(InputInvalidity.INVALID_CHARACTER)
        })
    })
    describe('InputSignature', () => {
        it('should ', () => {
            const { container } = render(
                <InputSignature setsignature={() => {}} />
            )
        })
    })
    describe('InputPublicKey', () => {
        it('should ', () => {
            const { container } = render(
                <InputPublicKey setpublicKey={() => {}} />
            )
        })
    })
    describe('InputProof', () => {
        it('should ', () => {
            const { container } = render(
                <InputProof setuploadedProof={() => {}} />
            )
        })
    })
    describe('isValidIntegerInput', () => {
        it('should set state when input is valid', () => {
            const validInput = '1234'
            const isValid = isValidIntegerInput(
                validInput,
                mockSetValue,
                mockSetError
            )
            expect(isValid).toEqual(true)
            expect(mockSetValue).toHaveBeenCalledWith(validInput)
            expect(mockSetError).toHaveBeenCalledWith(null)
            mockSetError.mockClear()
        })
        it('should set error when input is invalid', () => {
            const validInput = 'ab123'
            const isValid = isValidIntegerInput(
                validInput,
                mockSetValue,
                mockSetError
            )
            expect(isValid).toEqual(false)
            expect(mockSetError).toHaveBeenCalledWith(
                InputInvalidity.INVALID_CHARACTER
            )
        })
    })
})
