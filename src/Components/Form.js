import Button from "./Button";
import Label from "./Label";

export default function Form() {


  let form = document.createElement("form");
  form.className = "form-input";
  form.append(Label("Username"));
  form.append(Label("Password"));
  form.append(Button("Log in"));

  return form;
}

