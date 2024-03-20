import Button from "./Button";

import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
import img8 from "../images/8.jpg";

export default function Gallery(handleClick) {
  let gallery = [img1, img2, img3, img4, img5, img6, img7, img8];

  const div = document.createElement("div");
  div.className = "gallery";

  let button = Button("Log out")
  button.addEventListener("click", handleClick);

  div.append(button);
  
  gallery.forEach((image) => {
    const img = document.createElement("img");
    img.src = image;
    div.append(img);
  });

  return div;
}
