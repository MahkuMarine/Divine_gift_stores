const quantity__input = document.getElementById("quantity__input");
function stepper(btn){
    let id = btn.getAttribute("id");
    let min = quantity__input.getAttribute("min");
    let max = quantity__input.getAttribute("max");
    let step = quantity__input.getAttribute("step");
    let val = quantity__input.getAttribute("value");

    let calstep = (id =="increment") ? (step*1) : (step * -1);
    let newvalue = parseInt(val) + calstep;
    if (newvalue >= min && newvalue <= max) {
        quantity__input.setAttribute("value", newvalue);
    }
    // console.log(id, min,max,step,val);

}
// stepper(btn)