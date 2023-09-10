const counter = document.querySelector('.counter');
const btnReply = document.querySelector('#btnReply');
const numbersSpanList = document.querySelectorAll('.nums span');
const finalMassage = document.querySelector('.final');

runAnimation(); //call

function resetDOM() {
    counter.classList.remove("hide");
    finalMassage.classList.remove("show");
    numbersSpanList.forEach((num) => (num.classList.value = ""));
    numbersSpanList[0].classList.add("in");
}

function runAnimation(){ //function declare,  function is keyword
    numbersSpanList.forEach((currentSpan, index)=> {
        const lastBefor = numbersSpanList.length - 1;

        currentSpan.addEventListener("animationend", (e) =>{

            if(e.animationName === "goIn" && index !== lastBefor) {
                currentSpan.classList.remove("in");
                currentSpan.classList.add("out");
            }
            else if (e.animationName === "goOut" && currentSpan.nextElementSibling){
                currentSpan.nextElementSibling.classList.add("in");
            }
            else{
                counter.classList.add('hide')
                finalMassage.classList.add('show')
            }
        })
    })
}

btnReply.addEventListener("click", () => {
    resetDOM();
    runAnimation();
})

