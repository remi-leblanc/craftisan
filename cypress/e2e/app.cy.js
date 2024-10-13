describe('Login', () => {
	it('should submit the form login and save a JWT cookie', () => {
		cy.visit('https://localhost:3000/login')

		cy.get('[name=email]').type('remileblanc.dev@gmail.com');
		cy.get('[name=password]').type('tousdesnoob77');
		cy.get('[name=submit]').click();

		cy.url().should('be.equal', 'https://localhost:3000/');

		cy.getCookie('jwt').should('exist');
	})
})