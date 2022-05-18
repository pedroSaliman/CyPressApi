describe("test",()=>{
    it('test getresources', () => {
        cy.request({
            method:"Get",
            url:"https://reqres.in/api/unknown/2"
        }).then(function(response){
            expect(response.status).eql(200)
            expect(response.body.data.name).eql("fuchsia rose")
        })
        
    })
})