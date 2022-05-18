describe("test",()=>{
    it('test post', () => {
        cy.request({
            method:"Put",
            url:"https://reqres.in/api/users/2",
            body:{
                "name": "walled",
                "job": "tester"
            }
        }).then(function(response){
            expect(response.status).eql(200)
            expect(response.body.name).eql("walled")
        })
        
    })
})