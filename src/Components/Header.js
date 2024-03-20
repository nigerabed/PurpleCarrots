export default function Header() {
  // return `
  // <header>
  //     <div id="banner-container">
  //        <h1>Purple Carrots Inc.</h1>
  //     </div>
  // </header>
  // `;

  let headerElement = document.createElement("header");
 
  headerElement.innerHTML = `<div id="banner-container">
           <h1>Purple Carrots Inc.</h1>
        </div>`; 
  return headerElement;
}
