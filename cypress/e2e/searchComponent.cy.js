/// <reference types="cypress" />

describe('Github Username Searcher', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000/');
	});
	it('performs search w/ valid user', () => {
		const typedText = 'AbdoulNuru';
		cy.get('[id="search-keyword"]')
			.type(typedText)
			.should('have.value', typedText);
	});
});