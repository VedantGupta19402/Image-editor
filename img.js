const container = document.querySelector(".filter");
const imagecanvas = document.querySelector("#image-canvas");
const imageinput = document.querySelector("#meow");
const canvasctx = imagecanvas.getContext("2d");
const resetbtn=document.querySelector("#lala");
const downloadbtn=document.querySelector("#nana");
const presetsContainer=document.querySelector(".presets");
let file=null;
let  img=null;
let filters = {
    brightness: {
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
        value: 100,
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
    const div = document.createElement("div");
    div.classList.add("filter");

    const input = document.createElement("input");
    input.type = "range";
    input.min = min;
    input.max = max;
    input.value = value;
    let p = document.createElement("p");
    p.textContent = name;
    div.prepend(input);
    div.prepend(p);
    input.addEventListener("input", () => {
        filters[name].value=input.value;
        applyfilters()
    })

    return div;

}

function resetFilters() {
Object.keys(filters).forEach((elem) => {

    const filterElement = createFilter(elem, filters[elem].unit, filters[elem].value, filters[elem].min, filters[elem].max);
    container.append(filterElement)
})};
resetFilters();


imageinput.addEventListener("change", (ki) => {
    const file = ki.target.files[0];
    const imageplaceholder = document.querySelector("#place");
    imageplaceholder.style.display = "none"
    imagecanvas.style.display = "block"
    img = new Image();
    img.src = URL.createObjectURL(file);

    img.onload = () => {
        imagecanvas.width = img.width;
        imagecanvas.height = img.height;
        canvasctx.drawImage(img, 0, 0);
    }
})
 
function applyfilters(){
    canvasctx.clearRect(0,0,imagecanvas.width,imagecanvas.height);

canvasctx.filter=
`brightness(${filters.brightness.value}${filters.brightness.unit})
contrast(${filters.contrast.value}${filters.contrast.unit})
saturate(${filters.saturation.value}${filters.saturation.unit})
hue-rotate(${filters.hueRotation.value}${filters.hueRotation.unit})
blur(${filters.blur.value}${filters.blur.unit})
grayscale(${filters.grayscale.value}${filters.grayscale.unit})
sepia(${filters.sepia.value}${filters.sepia.unit})
opacity(${filters.opacity.value}${filters.opacity.unit})
invert(${filters.invert.value}${filters.invert.unit})
`.trim();
canvasctx.drawImage(img,0,0);
  
 }
 resetbtn.addEventListener("click",()=>{
 filters = {
    brightness: {
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
        value: 100,
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
applyfilters();
container.innerHTML="";
resetFilters();
 })
 downloadbtn.addEventListener("click",()=>{
    const link=document.createElement("a");
    link.download="edited-image.png";
    link.href=imagecanvas.toDataURL();
    link.click();   
 })
 const presets = {
    normal: {
        brightness: 100,
        contrast: 100,
        saturation: 100,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0,
    },

    drama: {
        brightness: 105,
        contrast: 150,
        saturation: 130,
        hueRotation: 0,
        blur: 0,
        grayscale: 0,
        sepia: 10,
        opacity: 100,
        invert: 0,
    },

    vintage: {
        brightness: 110,
        contrast: 90,
        saturation: 70,
        hueRotation: 15,
        blur: 1,
        grayscale: 10,
        sepia: 40,
        opacity: 100,
        invert: 0,
    },

    oldSchool: {
        brightness: 95,
        contrast: 110,
        saturation: 60,
        hueRotation: 20,
        blur: 2,
        grayscale: 20,
        sepia: 60,
        opacity: 100,
        invert: 0,
    },

    cinematic: {
        brightness: 105,
        contrast: 140,
        saturation: 90,
        hueRotation: 200,
        blur: 0,
        grayscale: 0,
        sepia: 5,
        opacity: 100,
        invert: 0,
    },

    blackAndWhite: {
        brightness: 100,
        contrast: 120,
        saturation: 0,
        hueRotation: 0,
        blur: 0,
        grayscale: 100,
        sepia: 0,
        opacity: 100,
        invert: 0,
    },

    softGlow: {
        brightness: 115,
        contrast: 90,
        saturation: 120,
        hueRotation: 0,
        blur: 3,
        grayscale: 0,
        sepia: 5,
        opacity: 100,
        invert: 0,
    },

    cold: {
        brightness: 100,
        contrast: 110,
        saturation: 90,
        hueRotation: 220,
        blur: 0,
        grayscale: 0,
        sepia: 0,
        opacity: 100,
        invert: 0,
    },

    warm: {
        brightness: 110,
        contrast: 105,
        saturation: 120,
        hueRotation: 20,
        blur: 0,
        grayscale: 0,
        sepia: 20,
        opacity: 100,
        invert: 0,
    },

    faded: {
        brightness: 120,
        contrast: 80,
        saturation: 60,
        hueRotation: 0,
        blur: 1,
        grayscale: 10,
        sepia: 10,
        opacity: 100,
        invert: 0,
    }
};

Object.keys(presets).forEach(presetName => {
    const button = document.createElement("button");
    button.textContent = presetName;
    button.classList.add("preset-button");
    button.classList.add("btn");

    
    button.addEventListener("click", () => {
        const selectedPreset = presets[presetName];

        
        Object.keys(selectedPreset).forEach(filterKey => {
            if (filters[filterKey]) {
                filters[filterKey].value = selectedPreset[filterKey];
            }
        });

        container.innerHTML = "";
        resetFilters();

        
        applyfilters();
    });

    presetsContainer.appendChild(button);
});