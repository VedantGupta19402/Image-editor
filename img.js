const container=document.querySelector(".filter")
const filters = {
    Brightness: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    contrast: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },

    exposure: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },
    saturation: {
        value: 100,
        min: 0,
        max: 200,
        unit: "%"
    },

    hueRotation: {
        value: 0,
        min: 0,
        max: 360,
        unit: "deg"
    },
    blur: {
        value: 0,
        min: 0,
        max: 20,
        unit: "px"
    },
    grayscale: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    sepia: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    opacity: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
    invert: {
        value: 0,
        min: 0,
        max: 100,
        unit: "%"
    },
}
function createFilter(name, unit = "%", value, min, max) {
const div=document.createElement("div");
div.classList.add("filter");

const input=document.createElement("input");
input.type="range";
input.min=min;
input.max=max;
input.value=value;
let p=document.createElement("p");
p.textContent=name;
div.prepend(input);
div.prepend(p);

return div;

 }
 Object.keys(filters).forEach((elem)=>{
console.log(elem,filters[elem]);

const filterElement=createFilter(elem,filters[elem].unit,filters[elem].value,filters[elem].min,filters[elem].max);
container.append(filterElement)
 })
 
