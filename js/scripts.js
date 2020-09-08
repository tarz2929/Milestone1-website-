//alert("hello there");



    const swearWords = ["feldercarb", "frack", "skinjob", "vulgacarb"]
    
    function validateMeessage()
    { 
        let inputMessage = document.getElementById("message").value;
        
        let falseMessage = false;
        if(inputMessage) {
            for(let i=0; i < swearWords.length; i++) {
                if(inputMessage.toLowerCase().indexOf(swearWords[i]) !== -1) 
                {
                    falseMessage = true;
                    break;
                }
            }

            if(falseMessage) {
                //document.getElementById("send-email").setAttribute("disabled", true);
                alert("We have zero tolerance for unprofessional language.");
            } else {
                //document.getElementById("send-email").removeAttribute("disabled");
                name = document.getElementById("name").value,
                email = document.getElementById("email").value,
                subject= document.getElementById("subject").value,
                message = document.getElementById("message").value
                window.location.href = 'mailto:mail@tarun.com?subject=' + name + subject + ' (' + email + ')' + '&body=' + message;
            }
        }
       
    }




    /* 
     Javascript code for commentos window copied from : https://stackoverflow.com/questions/32604812/create-mailto-from-form-with-custom-fields
     https://stackoverflow.com/questions/21461589/javascript-mailto-using-window-open
     */

    