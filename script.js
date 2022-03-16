
//business- logic 
function ContactDetails(name, email, address1, address2, city, state, zip){
    this.name = name
    this.email = email
    this.address1 = address1
    this.address2 = address2
    this.city = city
    this.state = state
    this.zip = zip
}

//ui
$(document).ready(function(){
    $("#form").submit(function(e){
        e.preventDefault();
        let contactName = $("#inputName4").val()
        let contactEmail = $("#inputEmail4").val()
        let contactAddress = $("#inputAddress").val()
        let contactAddress2 = $("#inputAddress2").val()
        let contactCity  = $("#nputCity").val()
        let contactState = $("#inputState").val()
        let contactZip = $("#inputZip").val()
        let person = new ContactDetails(contactName, contactEmail, contactAddress, contactAddress2, contactCity, contactState, contactZip )
       
  
     
                $("#display").append(`<p> ${person.name} </p>`)
                $("p").addClass("btn btn-secondary d-flex flex-column")
                form.reset()
                $("p").click(function () {
                    $("#contactDetails").append(`<p> Email: ${contactEmail}`)
                })
        

    })   
})
   






