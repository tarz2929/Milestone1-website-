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
    
    function sendEmail()
    { 
        let inputMessage = document.getElementById("message").value;
        if(inputMessage) {
            for(let i=0; i < swearWords.length; i++) {
                if(inputMessage.indexOf(swearWords[i]) !== -1) {
                    alert("test");
                    break;
                }
            }
        }
    }

