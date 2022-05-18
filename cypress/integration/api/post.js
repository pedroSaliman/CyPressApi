describe("test",()=>{
    it('test post', () => {
        cy.request({
            method:"Post",
            url:"https://reqres.in/api/users",
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        }).then(function(response){
            expect(response.status).eql(201)
            expect(response.body.name).eql("morpheus")
        })
        
    })
})