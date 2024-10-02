const plus = document.getElementById("plus"),
      less = document.getElementById("less"),
      numCount = document.querySelector(".numCount"),
      adviceCount = document.querySelector(".adviceCount");
let value = 0;

plus.addEventListener("click", () => {
    value ++;

    if(value >= 20)  {
        adviceCount.classList.add("active");
        value = 20;
    }

    numCount.innerHTML = value;

})

less.addEventListener("click", () => {
    value --;

    if(value <= 0)  {
        value = 0;
    } else if(value < 20)  {
        adviceCount.classList.remove("active");
    }

    numCount.innerHTML = value;
})
