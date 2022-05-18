describe("test",()=>{
    it('test getsingleuser', () => {
        cy.request({
            method:"Get",
            url:"https://reqres.in/api/users/2"
        }).then(function(response){
            expect(response.status).eql(200)
            expect(response.body.data.email).eql("janet.weaver@reqres.in")
        })
        
    })
})