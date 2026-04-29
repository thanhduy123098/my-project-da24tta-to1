function addProduct(hinhAnh, tenSP, giaTien) {
    // 1. Tạo Hộp cha
    const myDiv = document.createElement("div");
    myDiv.setAttribute("class", "product-item");
    
    // 2. Tạo hộp ảnh (myDiv1)
    const myDiv1 = document.createElement("div");
    myDiv1.setAttribute("class", "product-image");
        const productImg = document.createElement("img");
        productImg.setAttribute("src", hinhAnh); 
        productImg.setAttribute("alt", tenSP);
        myDiv1.appendChild(productImg);
    myDiv.appendChild(myDiv1);
    
    // 3. Tạo hộp thông tin (myDiv2)
    const myDiv2 = document.createElement("div");
    myDiv2.setAttribute("class", "product-info");
        //hộp p
        const p1 = document.createElement("p");
        const text1 = document.createTextNode(tenSP);
        p1.appendChild(text1);  
        myDiv2.appendChild(p1); 
        //hộp p
        const p2 = document.createElement("p");
        const text2 = document.createTextNode(giaTien);
        p2.appendChild(text2);
        myDiv2.appendChild(p2);
        //hộp link
        const myLink = document.createElement("a");
        myLink.setAttribute("href", "#");
        const textLink = document.createTextNode("Xem chi tiết");
        myLink.appendChild(textLink);
        myDiv2.appendChild(myLink);
    myDiv.appendChild(myDiv2);
    
    const productList = document.querySelector(".product-list");
    productList.appendChild(myDiv);
}

// Chạy thử
addProduct("../asset/images/productsh.jpg", "SH160i Phiên bản Cao Cấp", "102.590.000 VNĐ");
addProduct("../asset/images/productvario.jpg", "Vario 160i Tiêu chuẩn", "51.990.000 VNĐ");
addProduct("../asset/images/productshmode.jpg", "SH Mode 125cc Phiên bản Đặc biệt", "63.290.000 VNĐ");
addProduct("../asset/images/producttab.jpg", "Air Blade 160cc Phiên bản Đặc biệt", "57.190.000 VNĐ");
addProduct("../asset/images/productvision.jpg", "Vision Phiên bản Cổ điển", "36.612.000 VNĐ");