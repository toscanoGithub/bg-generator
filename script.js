window.onload = function () {

    let css = document.getElementById("css");
    let colorInput1 = document.getElementById("color1");
    let colorInput2 = document.getElementById("color2");
    let body = document.getElementById("gradient");


    colorInput1.addEventListener("input", changeColor);
    colorInput2.addEventListener("input", changeColor);

    body.style.background = "linear-gradient(to right, " +
        colorInput1.value +
        ", " +
        colorInput2.value +
        " )";

    css.textContent = body.style.background + ";";

    function changeColor() {
        body.style.background = "linear-gradient(to right, " +
            colorInput1.value +
            ", " +
            colorInput2.value +
            " )";
        css.textContent = body.style.background + ";";
    }


};


function generateRandomHexNumber() {
    //#Source https://bit.ly/2neWfJ2 
    const random_hex_color_code = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        return '#' + n.slice(0, 6);
    };

    console.log(random_hex_color_code());

}