let btn = document.querySelector("button")


let inside = document.querySelector("#inside")

let h2 = document.querySelector("h2")

let percent = 0

btn.addEventListener("click", () => {

    let a = 50+ Math.floor(Math.random()*50)
    btn.innerHTML = "Downloading..."
    btn.style.pointerEvents = "none"

    console.log(a);
   let interval = setInterval(() => {
    percent++
    h2.innerHTML = percent + "%"
    inside.style.width = percent + "%"
}, a)

   setTimeout(() => {
    clearInterval(interval)
    btn.innerHTML = "Downloaded"
   }, a*100)

   console.log(a);
   
  
})





