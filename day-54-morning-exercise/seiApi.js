axios.get(`https://sei-api.herokuapp.com/students`)
.then((response) => {
    let info = response.data
    let body = document.querySelector("body")
    let ul = document.createElement("ul")
    let br = document.createElement("br")
    
    for(let i = 0; i < info.length; i++){
        let name = document.createElement("li")
        let text = document.createTextNode(info[i].name)
        name.appendChild(text)
        body.appendChild(br)
        body.appendChild(text)
        // text = document.createTextNode(info[i].known-for)
        // name.appendChild(text)
    }
})

