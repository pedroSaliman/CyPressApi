describe("test",()=>{
    it('test', () => {
        cy.request({
            method:"Get",
            url:"https://reqres.in/api/users?page=2"
        }).then(function(response){
            expect(response.status).eql(200)
            expect(response.body).to.have.property("data")
        })
        
    })
})