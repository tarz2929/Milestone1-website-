//alert("hello there");

/*
function sendEmail() {
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "<Mailtrap username>",
        Password : "<Mailtrap password>",
        To : 'recipient@example.com',
        From : "sender@example.com",
        Subject : "Test email",
        Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    }).then(
      message => alert(message)
    );
    }
    */

    const swearWords = ["feldercarb", "frack", "skinjob", "vulgacarb"]
    
    function validateMeessage()
    { 
        let inputMessage = document.getElementById("message").value;
        console.log(inputMessage);
        let falseMessage = false;
        if(inputMessage) {
            for(let i=0; i < swearWords.length; i++) {
                if(inputMessage.toLowerCase().indexOf(swearWords[i]) !== -1) {
                    falseMessage = true;
                    break;
                }
            }

            if(falseMessage) {
                //document.getElementById("send-email").setAttribute("disabled", true);
                alert("test");
            } else {
                //document.getElementById("send-email").removeAttribute("disabled");
                let name = document.getElementById("name").value,
                email = document.getElementById("email").value,
                subject= document.getElementById("subject").value,
                message = document.getElementById("message").value
                window.location.href = 'mailto:mail@company.com?subject=' + subject + ' (' + email + ')' + '&body=' + message;
            }
        }
       
    }

