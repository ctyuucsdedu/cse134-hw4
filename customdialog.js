export function alert_function2(e) {
    document.getElementById("div1").hidden = false;
    
    const ok = document.getElementById("ok1");

    ok.addEventListener('click', () => {
        document.getElementById("div1").hidden = true;
    });

    e.preventDefault();
}

export function confirm_function2(e) {
    document.getElementById("div2").hidden = false;
    
    const ok = document.getElementById("ok2");
    const cancel = document.getElementById("cancel2");
    const output = document.getElementById("output2");

    ok.addEventListener('click', () => {
        output.innerHTML = `The value returned by the confirm method is : true`;
        document.getElementById("div2").hidden = true;
    });
    cancel.addEventListener('click', () => {
        output.innerHTML = `The value returned by the confirm method is : false`;
        document.getElementById("div2").hidden = true;
    });

    e.preventDefault();
}

export function prompt_function2(e) {
    document.getElementById("div3").hidden = false;
    
    const ok = document.getElementById("ok3");
    const cancel = document.getElementById("cancel3");
    const output = document.getElementById("output2");

    ok.addEventListener('click', () => {
        const dirty = document.getElementById("prompt_input");
        const input = DOMPurify.sanitize(dirty.value);
        output.innerHTML = `The value returned by the confirm method is : ${ input }`;
        document.getElementById("div3").hidden = true;
    });
    cancel.addEventListener('click', () => {
        output.innerHTML = "User didn’t enter anything";
        document.getElementById("div3").hidden = true;
    });

    e.preventDefault();
}