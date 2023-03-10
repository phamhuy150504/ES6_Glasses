const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let dataGlasses = [
    {
        id: "G1",
        src: "./img/g1.jpg",
        virtualImg: "./img/v1.png",
        brand: "Armani Exchange",
        name: "Bamboo wood",
        color: "Brown",
        price: 150,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
    },
    {
        id: "G2",
        src: "./img/g2.jpg",
        virtualImg: "./img/v2.png",
        brand: "Arnette",
        name: "American flag",
        color: "American flag",
        price: 150,
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
    },
    {
        id: "G3",
        src: "./img/g3.jpg",
        virtualImg: "./img/v3.png",
        brand: "Burberry",
        name: "Belt of Hippolyte",
        color: "Blue",
        price: 100,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
        id: "G4",
        src: "./img/g4.jpg",
        virtualImg: "./img/v4.png",
        brand: "Coarch",
        name: "Cretan Bull",
        color: "Red",
        price: 100,
        description: "In assumenda earum eaque doloremque, tempore distinctio.",
    },
    {
        id: "G5",
        src: "./img/g5.jpg",
        virtualImg: "./img/v5.png",
        brand: "D&G",
        name: "JOYRIDE",
        color: "Gold",
        price: 180,
        description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
    },
    {
        id: "G6",
        src: "./img/g6.jpg",
        virtualImg: "./img/v6.png",
        brand: "Polo",
        name: "NATTY ICE",
        color: "Blue, White",
        price: 120,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    },
    {
        id: "G7",
        src: "./img/g7.jpg",
        virtualImg: "./img/v7.png",
        brand: "Ralph",
        name: "TORTOISE",
        color: "Black, Yellow",
        price: 120,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
    },
    {
        id: "G8",
        src: "./img/g8.jpg",
        virtualImg: "./img/v8.png",
        brand: "Polo",
        name: "NATTY ICE",
        color: "Red, Black",
        price: 120,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
    },
    {
        id: "G9",
        src: "./img/g9.jpg",
        virtualImg: "./img/v9.png",
        brand: "Coarch",
        name: "MIDNIGHT VIXEN REMIX",
        color: "Blue, Black",
        price: 120,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
    },
];

// render glassesList
(function () {
    let content = "";
    dataGlasses.forEach((glasses) => {
        content += `
            <img src="${glasses.src}" id="${glasses.id}" class="col-4 glasses_click" >
        `;
    });
    $("#vglassesList").innerHTML = content;
})();

// let renderGlasses = (dataId, id) => {
//     if (dataId.id == id) {
//         console.log(dataId, id)
//         $(".vglasses__info").style = `padding: 20px`;
//         let { virtualImg, brand, name, color, price, description } = dataId;
//         return (
//             ($("#avatar").innerHTML = `<img src="${virtualImg}" class="myGlasses_IMG"></img>`),
//             ($("#glassesInfo").innerHTML = 
//             `<div class="myGlasses_info">
//                 <h4>${brand} - ${name} (${color})</h4>
//                 <button>${price}</button>
//                 <p>${description}</p>
//             </div>`)
//         );
//     } else {
//         $(".vglasses__info").style = `padding: 0px`;
//     }
// };




let idGlasses = "";
const handleClickGlasses = () => {
    const classGlasses = $$(".glasses_click");
    for (let glasses of classGlasses) {
        glasses.onclick = () => {
            dataGlasses.forEach((item) => {
                if (item.id == glasses.id) {
                    idGlasses = glasses.id
                    console.log(idGlasses);
                    $('.vglasses__info').style = `padding: 20px`
                    let { virtualImg, brand, name, color, price, description } = item
                    return (
                        $('#avatar').innerHTML = `<img src="${virtualImg}" class="myGlasses_IMG"></img>`,
                        $('#glassesInfo').innerHTML = `<div class="myGlasses_info">
                    <h4>${brand} - ${name} (${color})</h4>
                    <button>${price}</button>
                    <p>${description}</p>
                </div>` )
                } else {
                    $('.vglasses__info').style = `padding: 0px`
                }
            });
        };
    }
};
handleClickGlasses();

// before after click
let removeGlasses = (contain) => {
    if (contain) {
        $("#avatar").innerHTML = ``;
        $("#glassesInfo").innerHTML = ``;
        $(".vglasses__info").style = `padding: 0px`;
    }  else {
        dataGlasses.forEach((item) => {
            if (item.id == idGlasses) {
                $(".vglasses__info").style = `padding: 20px`;
                let { virtualImg, brand, name, color, price, description } = item;
                return (
                    ($(
                        "#avatar"
                    ).innerHTML = `<img src="${virtualImg}" class="myGlasses_IMG"></img>`),
                    ($("#glassesInfo").innerHTML = `<div class="myGlasses_info">
                <h4>${brand} - ${name} (${color})</h4>
                <button>${price}</button>
                <p>${description}</p>
            </div>`)
                );
            } else {
                $(".vglasses__info").style = `padding: 0px`;
            }
        });
    }
};
window.removeGlasses = removeGlasses;
