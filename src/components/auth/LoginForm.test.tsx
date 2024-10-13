import { expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import LoginForm from './LoginForm'

global.fetch = vi.fn();


function createFetchResponse(data) {
	return { json: () => new Promise((resolve) => resolve(data)) }
}

test('Login', async () => {
	render(<LoginForm loginSuccess={() => {}}/>)

	const emailInput = screen.getByLabelText(/email/i);
	const passInput = screen.getByLabelText(/password/i);
	const submitBtn = screen.getByRole('button', { name: /submit/i });

	expect(emailInput).toBeDefined();
	expect(passInput).toBeDefined();
	expect(submitBtn).toBeDefined();

	fireEvent.change(emailInput, {
		target: { value: 'remileblanc.dev@gmail.com' },
	});
	fireEvent.change(passInput, {
		target: { value: 'tousdesnoob77' },
	});
	fireEvent.click(submitBtn);


	expect(fetch).toHaveBeenCalled()
})