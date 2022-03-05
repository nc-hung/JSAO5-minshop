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

//khai bao bien
let list = document.getElementById("list");
let item = document.getElementsByClassName("item");
let giaSach = document.getElementsByTagName("p");
let giaThap = document.getElementById("min-price").value;
let giaCao = document.getElementById("max-price").value;
let sachHienTai = list.children;
let chonMau = document.getElementById("colors").children;
let theHeader = document.getElementsByTagName("header");



// ----------------------------------------------------------------------------
/**
 * tìm sách trong khoảng giá
 * @param {Number} gia1 giá thấp
 * @param {Number} gia2 giá cao
 * @returns mảng sách có giá trị trong khoảng tìm kiếm
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
 * in ra những thẻ mới
 * @param {Object} thongTinSach là một object 
 * chứa mọi thông tin của sách
 *  được tạo ra trên màn hình
 */
function themSach(thongTinSach) {
    list.innerHTML = list.innerHTML + `<div class="item" > 
    <img src="${thongTinSach.src}" alt="">  
    <span value="${thongTinSach.id}">${thongTinSach.id}</span>
    <h2>${thongTinSach.name}</h2> 
    <p>${thongTinSach.price}</p> </div>`;
}


/**
 * hiển thị sách của hãng
 * @param {string} tenNSX 
 * @returns mảng gồm những cuốn sách có NSX trùng với tenNSX
 */
let timSachTheoNSX = function(tenNSX) {
        let sach = new Array();
        for (let i = 0; i < books.length; i++) {
            if (books[i].provider == tenNSX) {
                sach.push(books[i]);
            }
        }
        return sach;
    }
    /**
     * hien thi danh muc sach luc load trang
     */
function loadSach() {
    for (let i = 0; i < books.length; i++) {
        themSach(books[i]);
        list.classList.add("center");
    }
}

/**
 * sắp xếp sách theo tên
 * @returns mảng sách được sắp xếp theo thứ tự tăng dần của tên
 */
let sapXepSachTheoTen = function() {

        let temp = 0;
        for (let i = 0; i < books.length - 1; i++) {
            for (let j = i + 1; j < books.length; j++) {
                if (books[i].name > books[j].name) {
                    temp = books[i]
                    books[i] = books[j];
                    books[j] = temp;
                }
            }
        }
        return books;
    }
    /**
     * hiển thị sách theo giá
     * @returns mảng sách được sắp xếp theo thứ tự tăng dần của giá
     */
let sapXepSachTheoGia = function() {
        let temp = 0;
        for (let i = 0; i < books.length; i++) {
            for (let j = i + 1; j < books.length; j++) {
                if (books[i].price > books[j].price) {
                    temp = books[i]
                    books[i] = books[j];
                    books[j] = temp;
                }
            }
        }
        return books;
    }
    //----------------------- xử lý sự kiện------------------------------------------------------------
    /**
     * đổi màu thẻ header khi click vào 1 màu tương ứng
     * 
     */
for (let i = 0; i < chonMau.length; i++) {
    chonMau[i].addEventListener("click", function() {
        theHeader[0].className = '';
        theHeader[0].classList.add(chonMau[i].id);
        //cach khac
        // for (let j = 0; j < chonMau.length; j++) {
        //     theHeader[0].classList.remove(chonMau[j].id);
        // }

    })
}
//hiển thị sách theo tên
let boxSort = document.getElementById("sort-by");
boxSort.addEventListener("change", function() {
    console.log(boxSort.value)
    if (boxSort.value == "sort by name") {
        let mangSach = sapXepSachTheoTen();
        // console.log(mangSach);
        list.innerHTML = "";
        for (let i = 0; i < mangSach.length; i++) {
            themSach(mangSach[i]);
        }
    } else {
        let mangSach = sapXepSachTheoGia();
        // console.log(mangSach);
        list.innerHTML = "";
        for (let i = 0; i < mangSach.length; i++) {
            themSach(mangSach[i]);
        }
    }

})

// tìm kiếm theo tên nhập vào
// nhập y chang mới được
let sachCanTim = document.getElementById("search");
sachCanTim.addEventListener("blur", function() {
        // console.log(sachCanTim.value)
        list.innerHTML = "";
        for (let i = 0; i < books.length; i++) {
            if (sachCanTim.value == books[i].name) {
                themSach(books[i]);
            }
        }
        sachCanTim.value = "";
    })
    //hien thi sach trong khoang gia sau khi click
document.getElementById("apply-price-filter").addEventListener("click", function() {
        let giaThap = document.getElementById("min-price").value;
        let giaCao = document.getElementById("max-price").value;
        let mangSach = timSachTrongKhoangGia(giaThap, giaCao);

        //cach1
        // let maSach = document.getElementsByTagName("span");
        // for (let i = 0; i < maSach.length; i++) {
        //     let a = false;
        //     for (let j = 0; j < mangSach.length; j++) {
        //         if (mangSach[j].id == Number(maSach[i].textContent)) {
        //             a = true;
        //         }
        //     }
        //     if (a == false) {
        //         sachHienTai[i].remove();
        //         i = i - 1;
        //     }
        // }

        //cach2
        list.innerHTML = "";
        for (let i = 0; i < mangSach.length; i++) {
            themSach(mangSach[i]);
        }
    })
    // cách1
let a = document.getElementsByClassName("provider");
for (let i = 0; i < a.length; i++) {
    a[i].addEventListener("click", function() {
        list.innerHTML = "";
        console.log(i);
        let checkBox = document.getElementById(`provider-${i}`);
        let sachDatYeuCau = timSachTheoNSX(checkBox.nextElementSibling.textContent);
        if (checkBox.checked == true) {
            for (let i = 0; i < sachDatYeuCau.length; i++) {
                themSach(sachDatYeuCau[i]);
            }
        }
    })

}
/*
//cách2
document.getElementById("provider-1").addEventListener("click", function() {
    let checkBox = document.getElementById("provider-1");
    let sachDatYeuCau = timSachTheoNSX(checkBox.nextElementSibling.textContent);
    if (checkBox.checked == true) {
        for (let i = 0; i < sachDatYeuCau.length; i++) {
            themSach(sachDatYeuCau[i]);
        }
    }
});
document.getElementById("provider-2").addEventListener("click", function() {
    let checkBox = document.getElementById("provider-2");
    let sachDatYeuCau = timSachTheoNSX(checkBox.nextElementSibling.textContent);
    if (checkBox.checked == true) {
        for (let i = 0; i < sachDatYeuCau.length; i++) {
            themSach(sachDatYeuCau[i]);
        }
    }
});
document.getElementById("provider-3").addEventListener("click", function() {
    let checkBox = document.getElementById("provider-3");
    let sachDatYeuCau = timSachTheoNSX(checkBox.nextElementSibling.textContent);
    if (checkBox.checked == true) {
        for (let i = 0; i < sachDatYeuCau.length; i++) {
            themSach(sachDatYeuCau[i]);
        }
    }
});
*/
loadSach();