// import books from "./data.js";


let books = [{
        id: 1,
        name: "Luật tâm thức",
        price: 220000,
        provider: "Fahasha",
        src: "./images/01.jpg"
    },
    {
        id: 2,
        name: "Chiến binh cầu vồng",
        price: 140000,
        provider: "Fahasha",
        src: "./images/02.jpg"
    },
    {
        id: 3,
        name: "Nghệ thuật tập trung",
        price: 90000,
        provider: "Tuổi trẻ",
        src: "./images/03.jpg"
    },
    {
        id: 4,
        name: "Bye Béo",
        price: 305000,
        provider: "Kmin Books",
        src: "./images/04.jpg"
    },
    {
        id: 5,
        name: "Sát thủ bán hàng",
        price: 180000,
        provider: "Fahasha",
        src: "./images/05.jpg"
    },
    {
        id: 6,
        name: "Hoàng tử bé",
        price: 50000,
        provider: "Kmin Books",
        src: "./images/06.jpg"
    },
    {
        id: 7,
        name: "Tâm lý học tội phạm",
        price: 400000,
        provider: "Kmin Books",
        src: "./images/07.jpg"
    },
    {
        id: 8,
        name: "Hiểu về trái tim",
        price: 130000,
        provider: "Tuổi trẻ",
        src: "./images/08.jpg"
    },
];


/**
 * đổi màu thẻ header khi click vào 1 màu tương ứng
 * còn lỗi
 */
let chonMau = document.getElementById("colors").children;
console.log(typeof(chonMau[3].id));
let theHeader = document.getElementsByTagName("header");
for (let i = 0; i < chonMau.length; i++) {
    chonMau[i].addEventListener("click", function() {
        console.log(typeof(chonMau[i].id));
        console.log(chonMau[i].id);
        theHeader[0].classList.add(`${chonMau[i].id}`);
    })
}



// ----------------------------------------------------------------------------
//khai bao bien
let list = document.getElementById("list");
let item = document.getElementsByClassName("item");
let giaSach = document.getElementsByTagName("p");
let giaThap = document.getElementById("min-price").value;
let giaCao = document.getElementById("max-price").value;


/**
 * 
 * @param {*} gia1 
 * @param {*} gia2 
 * @returns 
 */

function timSachTrongKhoangGia(gia1, gia2) {
    let sach = new Array();
    for (let i = 0; i < books.length; i++) {
        if (books[i].price >= gia1 && books[i].price <= gia2) {
            sach.push(books[i]);
        }
    }
    return sach;
}




/**
 * 
 * @param {Object} thongTinSach 
 */
function themSach(thongTinSach) {
    list.innerHTML = list.innerHTML + `<div class="item" > 
    <img src="${thongTinSach.src}" alt="">  
    <span value="${thongTinSach.id}">${thongTinSach.id}</span>
    <h2>${thongTinSach.name}</h2> 
    <p>${thongTinSach.price}</p> </div>`;
}
//hien thi sach trong khoang gia sau khi click
// console.log(typeof());

document.getElementById("apply-price-filter").addEventListener("click", function() {
    let mangSach = timSachTrongKhoangGia(giaThap, giaCao);
    let maSach = document.getElementsByTagName("span");
    let sachHienTai = list.children;

    for (let i = 0; i < maSach.length; i++) {
        let a = false;
        for (let j = 0; j < mangSach.length; j++) {
            if (mangSach[j].id == Number(maSach[i].textContent)) {
                a = true;
            }
        }
        if (a == false) {
            sachHienTai[i].remove();
        }
        // i = i - 1;

    }

})

//hien thi danh muc sach luc load trang
/**
 * 
 */
function loadSach() {
    for (let i = 0; i < books.length; i++) {
        themSach(books[i]);
        list.classList.add("center");
    }
}
loadSach();