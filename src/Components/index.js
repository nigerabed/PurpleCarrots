import Form from "./Form";
import Header from "./Header";

import Signup from "./Signup";
import Login from "./Login";
import Gallery from "./Gallery";
import "../style.css";


let gallery = Gallery(fromGalleryToLogin);
let signup = Signup(fromSignUpToGallery, fromSignUpToLogin);
let login = Login(fromLoginToGallery ,fromLoginToSignUp);



document.body.append(Header());

document.body.append(login);
// document.body.append(Gallery());
// document.body.append(signup);

function fromLoginToGallery() {
login.remove();
document.body.append(gallery)
}

function fromGalleryToLogin() {
  gallery.remove();
  document.body.append(login);
}

function fromSignUpToGallery() {
  signup.remove()
  document.body.append(gallery)
}

function fromSignUpToLogin() {
 signup.remove()
 document.body.append(login)
}

function fromLoginToSignUp() {
  login.remove()
  document.body.append(signup)
}



