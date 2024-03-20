export default function Button(text) {


    let button = document.createElement("button")
    button.type= "submit";
    button.innerText = text;

    return button;

    

}


