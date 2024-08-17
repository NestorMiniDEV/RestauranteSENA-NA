const $navCont = document.querySelectorAll(".navCont");
const $tab = document.querySelectorAll(".tab");

$tab.forEach(  (element, e)=>  {

    $tab[e].addEventListener("click", () =>  {

        $tab.forEach(  (element, e)=>  {
            $tab[e].classList.remove("active");
            $navCont[e].classList.remove("active");
        })
        
        $tab[e].classList.add("active");
        $navCont[e].classList.add("active");

    })
})

