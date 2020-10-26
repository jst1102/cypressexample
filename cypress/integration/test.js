describe("test url variable", () => {
	it ('Visit google', () => {
		(cy.visit(`https://www.google.com/doodles/switzerland-national-day-2${017}`)
		)
	})
}