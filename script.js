//your JS code here. If required.
//your JS code here. If required.
let listElement = document.querySelectorAll("li");

let count = 0

listElement.forEach((s, i)=>{
	let getA = s.getAttribute("id");
  if(getA === "level"){
    alert(`The level of the element is: ${i}`)
  }
})