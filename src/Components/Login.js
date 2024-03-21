import Button from "./Button";
import Label from "./Label";


export default function Login(handlesubmit, handleClick) {
  let form = document.createElement("form");
  form.addEventListener("submit", handlesubmit);
  form.className = "form-input";
  form.append(Label("Username"));
  form.append(Label("Password"));
  form.append(Button("Log inn"));

  let a = document.createElement("a");
  a.addEventListener("click", handleClick);
 
  a.className = "loginLink";
  a.innerText = "Sign up";
  form.append(a);
  return form;
}


