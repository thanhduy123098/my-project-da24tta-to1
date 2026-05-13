// 1. DỮ LIỆU DÙNG CHUNG (Khôi phục đủ 5 xe)
const defaultProducts = [
    {
        id: "01",
        name: "SH160i Phiên bản Cao Cấp",
        price: "102.590.000 VNĐ",
        image: "../asset/images/productsh.jpg",
        description: "Honda SH160i Phiên bản Cao Cấp mang đến diện mạo cực kỳ sang trọng và đẳng cấp, khẳng định vị thế của người lái trên mỗi hành trình. Xe được trang bị khối động cơ eSP+ 4 van dung tích 160cc mạnh mẽ, cho khả năng tăng tốc mượt mà và tiết kiệm nhiên liệu vượt trội. Bên cạnh đó, hệ thống chống bó cứng phanh ABS an toàn, khóa thông minh Smart Key tiện lợi cùng cốp chứa đồ rộng rãi dưới yên giúp chiếc xe không chỉ đẹp về mặt thiết kế mà còn đáp ứng hoàn hảo mọi nhu cầu sử dụng hàng ngày." 
    },
    {
        id: "02",
        name: "Vario 160i Tiêu chuẩn",
        price: "51.990.000 VNĐ",
        image: "../asset/images/productvario.jpg",
        description: "Honda Vario 160i Tiêu chuẩn nổi bật với thiết kế mang đậm chất thể thao, góc cạnh và đầy cá tính, rất phù hợp với các bạn trẻ năng động. Điểm nhấn lớn nhất nằm ở khối động cơ 160cc bốc lửa, mang lại cảm giác lái đầy phấn khích khi di chuyển trong phố đông hay những đoạn đường trường. Khung dập hàn laser eSAF thế hệ mới giúp xe nhẹ hơn nhưng vẫn đảm bảo độ cứng cáp, kết hợp cùng mặt đồng hồ LCD kỹ thuật số hiện đại và cổng sạc USB tiện lợi tạo nên một mẫu xe tay ga hoàn thiện từ trong ra ngoài."
    },
    {
        id: "03",
        name: "SH Mode 125cc Phiên bản Đặc biệt",
        price: "63.290.000 VNĐ",
        image: "../asset/images/productshmode.jpg",
        description: "SH Mode 125cc Phiên bản Đặc biệt sở hữu thiết kế thanh lịch, nhỏ gọn nhưng không kém phần sang trọng, cực kỳ tôn dáng người lái. Mặt nạ trước được tạo hình với cụm đèn LED hiện đại sáng bóng như những viên trang sức cao cấp, thu hút mọi ánh nhìn khi xuống phố. Động cơ eSP+ 125cc vận hành vô cùng êm ái, bền bỉ, tích hợp cùng hệ thống idling stop tự động tắt máy khi dừng đèn đỏ giúp tối ưu hóa khả năng tiết kiệm xăng, mang lại trải nghiệm lái xe nhẹ nhàng và thư thái nhất."
    },
    {
        id: "04",
        name: "Air Blade 160cc Phiên bản Đặc biệt",
        price: "57.190.000 VNĐ",
        image: "../asset/images/producttab.jpg",
        description: "Air Blade 160cc Phiên bản Đặc biệt là sự kết hợp hoàn hảo giữa kiểu dáng nam tính, hầm hố và hiệu năng vận hành vượt trội. Tem xe được phối màu đặc biệt tạo cảm giác mạnh mẽ, dàn nhựa cứng cáp góc cạnh đi kèm hệ thống đèn chiếu sáng LED toàn diện. Với việc nâng cấp lên động cơ 160cc, chiếc xe mang lại khả năng bứt tốc ấn tượng, sẵn sàng chinh phục mọi cung đường. Hộc đựng đồ dung tích lớn có trang bị thêm đèn soi và cổng sạc điện thoại giúp bạn thoải mái mang theo đồ đạc cá nhân suốt cả ngày dài."
    },
    {
        id: "05",
        name: "Vision Phiên bản Cổ điển",
        price: "36.612.000 VNĐ",
        image: "../asset/images/productvision.jpg",
        description: "Honda Vision Phiên bản Cổ điển thu hút ánh nhìn bởi nét đẹp pha trộn giữa sự hiện đại và hơi hướng retro độc đáo, mang lại cảm giác hoài cổ nhưng vẫn rất hợp thời. Kiểu dáng xe nhỏ gọn, trọng lượng nhẹ giúp người lái dễ dàng luồn lách và xoay sở trong những con hẻm chật hẹp hay tình trạng kẹt xe. Dù ở phân khúc giá mềm, xe vẫn được hãng ưu ái trang bị khóa thông minh Smart Key an toàn, động cơ eSP thế hệ mới vô cùng tiết kiệm nhiên liệu, biến nó thành lựa chọn lý tưởng cho việc đi học và đi làm mỗi ngày."
    }
];

// Lấy dữ liệu từ bộ nhớ trình duyệt. Nếu chưa có thì xài mảng 5 xe mặc định ở trên.
let products = JSON.parse(localStorage.getItem("myStoreData")) || defaultProducts;

// Hàm phụ: Giúp lưu mảng vào bộ nhớ trình duyệt
function luuVaoBoNho() {
    localStorage.setItem("myStoreData", JSON.stringify(products));
}

// Biến lưu trữ bảng Form Modal
let myModal;
document.addEventListener("DOMContentLoaded", () => {
    const modalEl = document.getElementById('productModal');
    if(modalEl) myModal = new bootstrap.Modal(modalEl);
});

// 2. HÀM VẼ DANH SÁCH SẢN PHẨM RA MÀN HÌNH
function renderProducts() {
    const productList = document.querySelector(".product-list");
    if (!productList) return; 

    productList.innerHTML = ""; 

    products.forEach(item => {
        const colDiv = document.createElement("div");
        colDiv.setAttribute("class", "col-md-4 col-sm-6 mb-4");
        
        const cardDiv = document.createElement("div");
        cardDiv.setAttribute("class", "card h-100 shadow-sm");
        
        const productImg = document.createElement("img");
        productImg.setAttribute("src", item.image); 
        productImg.setAttribute("class", "card-img-top p-3");
        productImg.style.height = "250px"; 
        productImg.style.objectFit = "contain"; 
        
        const cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body d-flex flex-column text-center");
        
        const p1 = document.createElement("h5");
        p1.setAttribute("class", "card-title");
        p1.innerText = item.name;
        
        const p2 = document.createElement("p");
        p2.setAttribute("class", "card-text text-danger fw-bold");
        p2.innerText = item.price;
        
        const myLink = document.createElement("a");
        myLink.setAttribute("href", "product-detail.html?id=" + item.id);
        myLink.setAttribute("class", "btn btn-outline-primary mt-auto mb-2"); 
        myLink.innerText = "Xem chi tiết";

        const actionDiv = document.createElement("div");
        actionDiv.setAttribute("class", "d-flex justify-content-between");

        const btnEdit = document.createElement("button");
        btnEdit.setAttribute("class", "btn btn-sm btn-warning w-50 me-1 fw-bold");
        btnEdit.innerText = "Sửa";
        btnEdit.onclick = () => openEditModal(item.id); 

        const btnDelete = document.createElement("button");
        btnDelete.setAttribute("class", "btn btn-sm btn-danger w-50 ms-1 fw-bold");
        btnDelete.innerText = "Xóa";
        btnDelete.onclick = () => deleteProduct(item.id);

        actionDiv.appendChild(btnEdit);
        actionDiv.appendChild(btnDelete);
        
        cardBody.appendChild(p1);
        cardBody.appendChild(p2);
        cardBody.appendChild(myLink);
        cardBody.appendChild(actionDiv); 
        
        cardDiv.appendChild(productImg);
        cardDiv.appendChild(cardBody);
        colDiv.appendChild(cardDiv);
        productList.appendChild(colDiv);
    });
}

renderProducts();

// 3. CÁC HÀM XỬ LÝ CHỨC NĂNG THÊM / SỬA
function openAddModal() {
    document.getElementById('modalTitle').innerText = "Thêm sản phẩm mới";
    document.getElementById('productForm').reset(); 
    document.getElementById('productId').value = ""; 
    document.getElementById('productImage').value = "../asset/images/productsh.jpg"; 
    myModal.show();
}

function openEditModal(id) {
    const xeCanSua = products.find(item => item.id === id);
    if (xeCanSua) {
        document.getElementById('modalTitle').innerText = "Sửa thông tin sản phẩm";
        document.getElementById('productId').value = xeCanSua.id;
        document.getElementById('productName').value = xeCanSua.name;
        document.getElementById('productPrice').value = xeCanSua.price;
        document.getElementById('productImage').value = xeCanSua.image;
        document.getElementById('productDesc').value = xeCanSua.description;
        myModal.show();
    }
}

function saveProduct() {
    const id = document.getElementById('productId').value;
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;
    const image = document.getElementById('productImage').value;
    const desc = document.getElementById('productDesc').value;

    if (!name || !price || !desc) {
        alert("Bạn nhớ điền đủ Tên, Giá và Mô tả nhé!");
        return;
    }

    if (id) {
        const index = products.findIndex(item => item.id === id);
        if (index !== -1) {
            products[index].name = name;
            products[index].price = price;
            products[index].image = image;
            products[index].description = desc;
        }
    } else {
        // Lấy thời gian hiện tại làm ID cho nó không bao giờ bị trùng
        const newId = new Date().getTime().toString(); 
        products.push({
            id: newId,
            name: name,
            price: price,
            image: image,
            description: desc
        });
    }

    luuVaoBoNho(); // QUAN TRỌNG: Gọi hàm lưu vào localStorage!
    myModal.hide();
    renderProducts();
}

// Hàm Xóa sản phẩm
function deleteProduct(id) {
    // Hiện hộp thoại hỏi cho chắc ăn
    const xacNhan = confirm("Bạn có chắc chắn muốn xóa chiếc xe này không?");
    
    // Nếu người dùng bấm OK 
    if (xacNhan) {
        // Lọc mảng: Bỏ đi chiếc xe có id cần xóa, giữ lại mấy chiếc kia
        products = products.filter(item => item.id !== id);
        
        // Xóa xong thì nhớ lưu lại vào bộ nhớ trình duyệt 
        luuVaoBoNho();
        
        // Kêu máy tính vẽ lại danh sách mới
        renderProducts();
    }
}

// 4. CODE CHO TRANG CHI TIẾT
const params = new URLSearchParams(window.location.search);
const idTrenLink = params.get('id');

if (idTrenLink) {
    const xeTimThay = products.find(item => item.id === idTrenLink);
    if (xeTimThay) {
        document.getElementById("p-image")?.setAttribute("src", xeTimThay.image);
        const pName = document.getElementById("p-name");
        if (pName) pName.innerText = xeTimThay.name;
        const pPrice = document.getElementById("p-price");
        if (pPrice) pPrice.innerText = xeTimThay.price;
        const pDesc = document.getElementById("p-description");
        if (pDesc) pDesc.innerHTML = xeTimThay.description;
    } else {
        // Nếu không tìm thấy thì báo lỗi
        const colDiv = document.querySelector(".col-md-6");
        if (colDiv) colDiv.innerHTML = "<h3 class='text-danger'>Không tìm thấy sản phẩm!</h3>";
    }
}