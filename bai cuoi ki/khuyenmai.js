document.addEventListener("DOMContentLoaded", function() {
        let currentSlide = 0;
        const images = [
            "../bai cuoi ki/hinhanhweb/khuyenmaitrangphuc.jpg",
            "../bai cuoi ki/hinhanhweb/khuyenmaitrangphuc1.jpg",
            "../bai cuoi ki/hinhanhweb/khuyenmaigiay.jpg",
            "../bai cuoi ki/hinhanhweb/khuyenmaitrangphuc2.jpg",
            
        ];
        const sliderImage = document.getElementById('sliderImage');

        function showSlide(index) {
            sliderImage.src = images[index];
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % images.length;
            showSlide(currentSlide);
        }

        setInterval(nextSlide, 2000);
    });
// tim kiem 
function tim() {
        var searchTerm = document.getElementById('texttim').value.toLowerCase();
        var items = document.getElementsByClassName('spoci1'); // Get elements with the class 'spoci1'

        for (var i = 0; i < items.length; i++) {
            var itemName = items[i].querySelector('#ten').innerText.toLowerCase();

            // Check if the search term is found in the item name
            if (itemName.includes(searchTerm)) {
                items[i].style.display = "block"; // Show the item
            } else {
                items[i].style.display = "none"; // Hide the item
            }
        }

        // Show/hide the overall result container based on search results
        var resultContainer = document.getElementById("timkiem");
        var noResultsContainer = document.getElementById("noidung");

        if (searchTerm !== "") {
            resultContainer.style.display = "block"; // Show the result container
            noResultsContainer.style.display = "none"; // Hide the original content container
        } else {
            resultContainer.style.display = "none"; // Hide the result container
            noResultsContainer.style.display = "block"; // Show the original content container
        }
    }
 // khuyen mai

document.addEventListener('DOMContentLoaded', function() {
    let index =0;
    const rightbtn = document.querySelector('.btn1');
    const leftbtn = document.querySelector('.btn2');
    const number =  document.querySelectorAll('.slider-product-one-content-items')
    document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
    rightbtn.addEventListener ("click", function(){
        index = index+1;
        if(index>number.length-1){
            index=0
        }
        document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
    })

    leftbtn.addEventListener ("click", function(){
        index = index-1
        if(index<0){
            index=number.length-1
        }
        document.querySelector(".slider-product-one-content-items-content").style.right = index *100+"%"
    })
});

 //  dang nhap
 function showLoginModal() {
        document.getElementById("loginModal").style.display = "block";
      }

      function hideLoginModal() {
        document.getElementById("loginModal").style.display = "none";
      }
function validateLogin() {
        let valid1 = true;
        var username = document.getElementById("username1").value;
        var password = document.getElementById("password1").value;
        var usernameError1 = document.getElementById("usernameError1");
        var passwordError1 = document.getElementById("passwordError1");

            if (username === "") {
            usernameError1.textContent = "Vui lòng nhập tài khoản";
            valid1 = false;
            } else if (username.length < 8) {
                usernameError1.textContent = "Tài khoản phải có ít nhất 8 ký tự";
                valid1 = false;
            } else {
                usernameError1.textContent = "";
            }

            if (password === "") {
                passwordError1.textContent = "Vui lòng nhập mật khẩu";
                valid1 = false;
            } else if (password.length < 8) {
                passwordError1.textContent = "Mật khẩu phải có ít nhất 8 ký tự";
                valid1 = false;
            } else if (!/(?=.*[A-Z])(?=.*[!@#$&*])/.test(password)) {
                passwordError1.textContent = "Mật khẩu phải có ít nhất một ký tự viết hoa và một ký tự đặc biệt";
                valid1 = false;
            } else {
                passwordError1.textContent = "";
            }
 
        if(valid1){
            alert("Đăng nhập thành công");
            window.location.href = "trang.html";
        }
    }

    function showmuahang(name, brand, gender, size, color, price,imagePath) {
        document.getElementById("tenmuahang").innerHTML = name;
        document.getElementById("brandmuahang").innerText = brand;
        document.getElementById("gioitinhmuahang").innerText = gender;
        document.getElementById("sizemuahang").innerText = size;
        document.getElementById("colormuahang").innerText = color;
        document.getElementById("monneymuahang").innerText = price;
        document.getElementById("hinhmuahang").src = imagePath;

        document.getElementById("muahang").style.display = "block";
      }

      function hidemuahang() {
        document.getElementById("muahang").style.display = "none";
      }

      var so = 1;
        function thaydoigia() {
            var quantity = document.getElementById("quantity").value;

            var initialPrice = parseFloat(document.getElementById("monneymuahang").textContent.trim().replace(/\./g, ''));
            initialPrice = initialPrice/so;
            // Calculate the total price
            var totalPrice = quantity * initialPrice;
            document.getElementById("monneymuahang").innerText = totalPrice.toLocaleString('vi-VN');
            so = document.getElementById("quantity").value;
        }

function showmuahang1(name, brand, size, price,imagePath) {
        document.getElementById("tenmuahang").innerHTML = name;
        document.getElementById("brandmuahang").innerText = brand;
        document.getElementById("sizemuahang").innerText = size;
        document.getElementById("monneymuahang").innerText = price;
        document.getElementById("hinhmuahang").src = imagePath;

        document.getElementById("muahang").style.display = "block";
      }

      function hidemuahang() {
        document.getElementById("muahang").style.display = "none";
      }

      var so = 1;
        function thaydoigia() {
            var quantity = document.getElementById("quantity").value;

            var initialPrice = parseFloat(document.getElementById("monneymuahang").textContent.trim().replace(/\./g, ''));
            initialPrice = initialPrice/so;
            // Calculate the total price
            var totalPrice = quantity * initialPrice;
            document.getElementById("monneymuahang").innerText = totalPrice.toLocaleString('vi-VN');
            so = document.getElementById("quantity").value;
        }
//an mua hang
function nhanmuahang() {
    alert("Mua hàng thành công");
}




//
    function hienThiSanPham() {
        var selectedBrands = getSelectedValues('brand');
        var selectedSizes = getSelectedValues('size');
        var selectedColors = getSelectedValues('color');
        var selectedGioitinhs = getSelectedValues('gioitinh');
        // Get checked brands
        var brandCheckboxes = document.querySelectorAll('input[name="brand"]:checked');
        var selectedBrands = Array.from(brandCheckboxes).map(function (checkbox) {
            return checkbox.value;
        });

        // Get checked sizes
        var sizeCheckboxes = document.querySelectorAll('input[name="size"]:checked');
        var selectedSizes = Array.from(sizeCheckboxes).map(function (checkbox) {
            return checkbox.value;
        });

        // Get checked colors
        var colorCheckboxes = document.querySelectorAll('input[name="color"]:checked');
        var selectedColors = Array.from(colorCheckboxes).map(function (checkbox) {
            return checkbox.value;
        });

        var gioitinhCheckboxes = document.querySelectorAll('input[name="gioitinh"]:checked');
        var selectedGioitinhs = Array.from(gioitinhCheckboxes).map(function (checkbox) {
            return checkbox.value;
        });

        // Hide all products
        var allProducts = document.querySelectorAll('.slider-product-one-content-item1');
        allProducts.forEach(function (product) {
            product.style.display = 'none';
        });

       
        var selectElement = document.getElementById("combomonney");
        var selectedValue = selectElement.value;
        // Show products that match the selected criteria
        var matchingProducts = document.querySelectorAll('.slider-product-one-content-item1');
        matchingProducts.forEach(function (product) {
                    var brand = product.querySelector('#brand').textContent.trim();
                    var size = product.querySelector('#size').textContent.trim();
                    var color = product.querySelector('#color').textContent.trim();
                    var gioitinh = product.querySelector('#gioitinh').textContent.trim();
                    var monney = product.querySelector('#monney').textContent.trim().replace(/\./g, '');;
                    var monneys =parseFloat(monney);
                    if (
                        (selectedBrands.length === 0 || selectedBrands.includes(brand)) &&
                        (selectedSizes.length === 0 || selectedSizes.includes(size)) &&
                        (selectedColors.length === 0 || selectedColors.includes(color)) &&
                        (selectedGioitinhs.length === 0 || selectedGioitinhs.includes(gioitinh)) 
                    ) {
                        product.style.display = 'block';
                    }
                    if(selectedValue==="1"){
                        if(!(monneys<1000000)){
                            product.style.display = 'none';
                        }
                    }else if(selectedValue==="2"){
                        if(!(monneys>=1000000 && monneys<=2000000)){
                            product.style.display = 'none';
                        }
                    }else if(selectedValue==="3"){
                        if(!(monneys>=2000001 && monneys<=4999999)){
                            product.style.display = 'none';
                        } 
                    }else if(selectedValue==="4"){
                        if(!(monneys>5000000)){
                            product.style.display = 'none';
                        }
                    }
                    
        });         
    }
function getSelectedValues(name) {
        var selectedValues = [];
        var checkboxes = document.querySelectorAll('input[name="' + name + '"]:checked');
        checkboxes.forEach(function (checkbox) {
            selectedValues.push(checkbox.value);
        });
        return selectedValues;
    }

// giay
const keys = Object.keys(localStorage);
// nam
function GiaynamNike(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("namCheckboxStatus", "true");
    localStorage.setItem("nikeCheckboxStatus", "true");
}

function GiaynamAdidas(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("namCheckboxStatus", "true");
    localStorage.setItem("adidasCheckboxStatus", "true");
}

function GiaynamAM(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("namCheckboxStatus", "true");
    localStorage.setItem("amCheckboxStatus", "true");
}

function GiaynamBongda(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("namCheckboxStatus", "true");
    localStorage.setItem("bongdaCheckboxStatus", "true");
}

function GiaynamTennis(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("namCheckboxStatus", "true");
    localStorage.setItem("tennisCheckboxStatus", "true");
}

function GiaynamGolf(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("namCheckboxStatus", "true");
    localStorage.setItem("golfCheckboxStatus", "true");
}

function GiaynamBongro(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("namCheckboxStatus", "true");
    localStorage.setItem("bongroCheckboxStatus", "true");
}

function GiaynamThoitrang(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("namCheckboxStatus", "true");
    localStorage.setItem("thoitrangCheckboxStatus", "true");
}

function GiaynamRunning(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("namCheckboxStatus", "true");
    localStorage.setItem("runningCheckboxStatus", "true");
}

function GiaynamTraining(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("namCheckboxStatus", "true");
    localStorage.setItem("trainingCheckboxStatus", "true");
}
// nữ
function GiaynuNike(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("nuCheckboxStatus", "true");
    localStorage.setItem("nikeCheckboxStatus", "true");
}

function GiaynuAdidas(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("nuCheckboxStatus", "true");
    localStorage.setItem("adidasCheckboxStatus", "true");
}

function GiaynuAM(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("nuCheckboxStatus", "true");
    localStorage.setItem("amCheckboxStatus", "true");
}

function GiaynuBongda(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("nuCheckboxStatus", "true");
    localStorage.setItem("bongdaCheckboxStatus", "true");
}

function GiaynuTennis(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("nuCheckboxStatus", "true");
    localStorage.setItem("tennisCheckboxStatus", "true");
}

function GiaynuGolf(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("nuCheckboxStatus", "true");
    localStorage.setItem("golfCheckboxStatus", "true");
}

function GiaynuBongro(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("nuCheckboxStatus", "true");
    localStorage.setItem("bongroCheckboxStatus", "true");
}

function GiaynuThoitrang(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("nuCheckboxStatus", "true");
    localStorage.setItem("thoitrangCheckboxStatus", "true");
}

function GiaynuRunning(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("nuCheckboxStatus", "true");
    localStorage.setItem("runningCheckboxStatus", "true");
}

function GiaynuTraining(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("nuCheckboxStatus", "true");
    localStorage.setItem("trainingCheckboxStatus", "true");
}
//phu kien

function baoloCheck(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("baoloCheckboxStatus", "true");
}
function tuixachCheck(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("tuixachCheckboxStatus", "true");
}
function valiCheck(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("valiCheckboxStatus", "true");
}
function tatvoCheck(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("tatvoCheckboxStatus", "true");
}
function munonCheck(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("munonCheckboxStatus", "true");
}
//may tap
function maychayboCheck(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("maychayboCheckboxStatus", "true");
}
function taCheck(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("taCheckboxStatus", "true");
}
function xedaptapCheck(){
    keys.forEach(key => {
      localStorage.setItem(key, "false");
    });
    localStorage.setItem("xedaptapCheckboxStatus", "true");
}