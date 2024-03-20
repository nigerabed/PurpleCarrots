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
  a.className = "loginLink";
  a.innerText = "Sign up";
  a.addEventListener("click", handleClick);
  form.append(a);
  return form;
}


