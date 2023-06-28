const userInput = document.getElementById("user-input")
        const submitHandler = document.querySelector('form')
        const textMsg = document.getElementById("msg-container")

        submitHandler.addEventListener("submit", (e) => {
            e.preventDefault()

            if(userInput.value === "") {
                alert('You must write something')
            } else {
                let li = document.createElement("li")
                li.innerText = userInput.value
                textMsg.appendChild(li)
                userInput.value = ""
            }
        })