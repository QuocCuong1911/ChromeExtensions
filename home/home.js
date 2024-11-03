
// // Khai báo biến toàn cục để lưu sản phẩm đang chỉnh sửa
// let currentEditProduct = null;

// // Hàm hiển thị dữ liệu sản phẩm từ local storage
// function displayProducts() {
//     chrome.storage.local.get("productList", (data) => {
//         const table = document.getElementById("customers");
//         table.innerHTML = ""; // Xóa các dòng cũ

//         // Thêm hàng tiêu đề
//         const headerRow = table.insertRow();
//         headerRow.insertCell(0).innerText = "Mã Tìm";
//         headerRow.insertCell(1).innerText = "Sản Phẩm";
//         headerRow.insertCell(2).innerText = "Giá";
//         headerRow.insertCell(3).innerText = "Xóa";

//         // Nếu có dữ liệu, hiển thị từng sản phẩm
//         if (data.productList) {
//             data.productList.forEach(product => {
//                 const newRow = table.insertRow();
//                 newRow.insertCell(0).innerText = product.maTim;
//                 newRow.insertCell(1).innerText = product.tenHienThi;
//                 newRow.insertCell(2).innerText = product.donGia;

//                 const deleteCell = newRow.insertCell(3);
//                 const deleteButton = document.createElement("button");
//                 deleteButton.innerText = "Xóa";
//                 deleteButton.className = "button-xoa";
//                 deleteCell.appendChild(deleteButton);

//                 // Thêm sự kiện click để sửa dữ liệu
//                 newRow.addEventListener("click", () => {
//                     document.getElementById("ma-tim").value = product.maTim;
//                     document.getElementById("ten-hien-thi").value = product.tenHienThi;
//                     document.getElementById("don-gia").value = product.donGia;
//                     currentEditProduct = product; // Lưu sản phẩm hiện tại để sửa
//                 });

//                 // Xóa sản phẩm khỏi storage và giao diện khi nhấn nút "Xóa"
//                 deleteButton.addEventListener("click", (event) => {
//                     event.stopPropagation(); // Ngăn chặn sự kiện click trên dòng
//                     removeProduct(product.maTim);
//                     displayProducts(); // Cập nhật lại bảng
//                 });
//             });
//         }
//     });
// }

// // Hàm thêm sản phẩm
// function addProduct() {
//     const maTim = document.getElementById("ma-tim").value;
//     const tenHienThi = document.getElementById("ten-hien-thi").value;
//     const donGia = document.getElementById("don-gia").value;

//     // Kiểm tra nếu mã tìm đã tồn tại
//     chrome.storage.local.get("productList", (data) => {
//         const productList = data.productList || [];
//         const existingProduct = productList.find(product => product.maTim === maTim);

//         if (existingProduct) {
//             alert("Mã tìm đã tồn tại. Vui lòng nhập mã khác.");
//             return;
//         }

//         // Thêm sản phẩm mới
//         productList.push({ maTim, tenHienThi, donGia });
//         chrome.storage.local.set({ productList }, () => {
//             displayProducts(); // Cập nhật bảng
//         });

//         // Xóa dữ liệu trong ô input sau khi thêm
//         clearInputs();
//     });
// }

// // Hàm sửa sản phẩm
// function updateProduct() {
//     const maTim = document.getElementById("ma-tim").value;
//     const tenHienThi = document.getElementById("ten-hien-thi").value;
//     const donGia = document.getElementById("don-gia").value;

//     // Kiểm tra nếu mã tìm tồn tại
//     chrome.storage.local.get("productList", (data) => {
//         const productList = data.productList || [];
//         const existingProduct = productList.find(product => product.maTim === maTim);

//         if (!existingProduct) {
//             alert("Chưa tồn tại sản phẩm với mã tìm này.");
//             return;
//         }

//         // Cập nhật thông tin sản phẩm
//         existingProduct.tenHienThi = tenHienThi;
//         existingProduct.donGia = donGia;

//         chrome.storage.local.set({ productList }, () => {
//             displayProducts(); // Cập nhật bảng
//         });

//         // Xóa dữ liệu trong ô input sau khi sửa
//         clearInputs();
//     });
// }

// // Hàm xóa sản phẩm
// function removeProduct(maTim) {
//     chrome.storage.local.get("productList", (data) => {
//         const productList = data.productList || [];
//         const updatedProductList = productList.filter(product => product.maTim !== maTim);
        
//         chrome.storage.local.set({ productList: updatedProductList }, () => {
//             displayProducts(); // Cập nhật bảng
//         });
//     });
// }

// // Hàm xóa dữ liệu trong ô input
// function clearInputs() {
//     document.getElementById("ma-tim").value = "";
//     document.getElementById("ten-hien-thi").value = "";
//     document.getElementById("don-gia").value = "";
// }

// // Lắng nghe sự kiện khi nhấn nút "Thêm"
// document.querySelector(".button-them").addEventListener("click", addProduct);
// // Lắng nghe sự kiện khi nhấn nút "Sửa"
// document.querySelector(".button-sua").addEventListener("click", updateProduct);

// // Tải dữ liệu khi mở trang
// document.addEventListener("DOMContentLoaded", displayProducts);
