describe('Form', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  //test if search field focuses
    it('it focuses the input', () => {
      cy.focused().should('have.class', 'form-control')
    })
    //tests if input can be used
    it('accepts input', () => {
        const input = "olayiwola"
        cy.get('.form-control')
          .type(input)
          .should('have.value', input)
      })
      //tests if button clicks and api connects
      it('clicks', ()=>{
        cy.get('.search_Btn').click()
        const input = "olayiwola"
        cy.request(`https://api.github.com/search/users?q=${input} in:login`)
        .should((response) => {
          expect(response.status).to.eq(200)
        })
      })
      it('pagination works', ()=>{
        cy.get('.paginationButton')
        it('clicks nex pagination button',()=>{
          cy.get('.nextBtn').click()
        })
      })
  })
