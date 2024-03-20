import Header from "./Header";
import Form from "./Form";
import Label from "./Label";
import Button from "./Button";

export default function Signup(handleSubmit, handleClick) {
  let form = document.createElement("form");
  form.addEventListener("submit", handleSubmit);
  form.className = "form-input";
  form.append(Label("Username"));
  form.append(Label("Email"));
  form.append(Label("Password"));
  form.append(Button("Sign Up"));
  let a = document.createElement("a");
  a.className = "loginLink";
  a.href = "";
  a.innerText = "Log in";
  a.addEventListener("click", handleClick);
  form.append(a);

  return form;
}


