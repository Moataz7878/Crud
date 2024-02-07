var ProductName = document.getElementById("ProductName");
var ProductPrice = document.getElementById("ProductPrice");
var ProductCategory = document.getElementById("ProductCategory");
var ProductDescription = document.getElementById("ProductDescription");
var message = document.getElementById("message");
var productContainer = [];
if (localStorage.getItem("products") != null) {
  productContainer = JSON.parse(localStorage.getItem("products"));
  displayProduct();
}
function addProduct() {

  if (
    validationPrice() == true &&
    validationName() == true &&
    validationCategory() == true &&
    validationDesc() == true
  ) {
     var product = {
       name: ProductName.value,
       price: ProductPrice.value,
       category: ProductCategory.value,
       desc: ProductDescription.value,
     };
     productContainer.push(product);
     localStorage.setItem("products", JSON.stringify(productContainer));
     clearForm();
     displayProduct();
   document.getElementById(
     "message"
   ).innerHTML = ` <div class="alert alert-success mx-auto" role="alert">
            data inserted successfuly
</div>`;
  } else {
     
   document.getElementById(
     "message"
   ).innerHTML = ` <div class="alert alert-danger mx-auto" role="alert">
        data inserted filed check from all input
</div >`;
  } 
 
}
function clearForm() {
  ProductName.value = "";
  ProductPrice.value = "";
  ProductCategory.value = "";
  ProductDescription.value = "";
}
function displayProduct() {
  var cartoona = ``;
  for (let i = 0; i < productContainer.length; i++) {
    cartoona += `
    <tr>
                    <td>${i + 1}</td>
                    <td>${productContainer[i].name}</td>
                    <td>${productContainer[i].price}</td>
                    <td>${productContainer[i].category}</td>
                    <td>${productContainer[i].desc}</td>
                    <td><button onclick="updateProduct(${i})" type="submit " class="btn btn-outline-info" >Update</button></td>
                    <td><button onclick="deleteProduct(${i})" type="submit " class="btn btn-outline-danger" >Delete</button></td>
                </tr>
    `;
  }
  document.getElementById("tableBody").innerHTML = cartoona;
  //   var tableBody= document.getElementById("tableBody"); ();
  //   var test = tableBody.document.createElement("tr").append();
  //   console.log(test);
}
function deleteProduct(deleteindex) {
  productContainer.splice(deleteindex, 1);
  localStorage.setItem("products", JSON.stringify(productContainer));
  displayProduct();
   document.getElementById(
     "message"
   ).innerHTML = ` <div class="alert alert-success mx-auto" role="alert">
            data deleted successfuly
</div>`;

}
function searchProduct(trem) {
  var cartoona = ``;
  for (let i = 0; i < productContainer.length; i++) {
    if (
      productContainer[i].name.toLowerCase().includes(trem.toLowerCase()) ==
      true
    ) {
      cartoona += `
    <tr>
                    <td>${i + 1}</td>
                    <td>${productContainer[i].name}</td>
                    <td>${productContainer[i].price}</td>
                    <td>${productContainer[i].category}</td>
                    <td>${productContainer[i].desc}</td>
                    <td><button type="submit " class="btn btn-outline-info" >Update</button></td>
                    <td><button onclick="deleteProduct(${i})" type="submit " class="btn btn-outline-danger" >Delete</button></td>
                </tr>
    `;
    }
  }
  document.getElementById("tableBody").innerHTML = cartoona;
}
function oldProducts(id) {
  ProductName.value = productContainer[id].name;
  ProductPrice.value = productContainer[id].price;
  ProductCategory.value = productContainer[id].category;
  ProductDescription.value = productContainer[id].desc;
}
function updateProduct(id) {
  oldProducts(id);
  deleteProduct(id);
}
// function validateProduct() {



  

//   //check epmty or not
//   if (validationErrors == "") {
//     message.innerHTML = `  <div id="success" class="alert alert-success" role="alert">Data inserted successfluy
// </div>`;
//     addProduct();
//   } else {
//     cartoona = "";
//     for (let i = 0; i < validationErrors.length; i++) {
        
//         cartoona += `<p id="error" class="lead text-danger small">${validationErrors[i]}</p>`;
//     }
//     message.innerHTML = cartoona;
    
//   }
//   // let sum = 0;
//   // const numbers = [65, 44, 12, 4];
//   // numbers.forEach(myFunction);

//   // document.getElementById("demo").innerHTML = sum;

//   // function myFunction(item) {
//   //   sum += item;
//   // }
  
// }

//
// Product Name -_- -_- -_- -_- -_- -_- -_- -_- -_- -_-

function validationName() {
  var validationErrorsName = [];
  errors = ``;
  var regexName = /^[A-Z]?[a-z]{1,}/;

  if (ProductName.value == "") {
    validationErrorsName.push(" You Product Name is required");
  } else if (regexName.test(ProductName.value) != true) {
    validationErrorsName.push("You Product Name must be string");
  } 
  if ((validationErrorsName == "")) {
    document.getElementById(
      "ProductNameMassage"
    ).innerHTML = `<p id="error" class=" text-success small">Your data is correct</p>`;
    return true;
  } else {
     for (let i = 0; i < validationErrorsName.length; i++) {
       errors += `<p id="error" class=" text-danger small">${validationErrorsName[i]}</p>`;
    }
    document.getElementById("ProductNameMassage").innerHTML = errors;
    return false
  }
}

//   //Product Price -_- -_- -_- -_- -_- -_- -_- -_- -_- -_-

function validationPrice() {
  var validationErrorsPrice = [];
  errors = ``;
  var regexPrice = /^[1-9]{1,9}/;
  
     if (ProductPrice.value == "") {
       validationErrorsPrice.push(" You Product Price is required");
     } else if (regexPrice.test(ProductPrice.value) != true) {
      validationErrorsPrice.push("You Product Price must be numbers");
  }
  if (validationErrorsPrice == "") {
    document.getElementById(
      "ProductPriceMassage"
    ).innerHTML = `<p id="error" class=" text-success small">Your data is correct</p>`;
    return true;
  } else {
    for (let i = 0; i < validationErrorsPrice.length; i++) {
      errors += `<p id="error" class=" text-danger small">${validationErrorsPrice[i]}</p>`;
    }
    document.getElementById("ProductPriceMassage").innerHTML = errors;
    return false;
  }
}
//   //Product Category -_- -_- -_- -_- -_- -_- -_- -_- -_- -_- ProductDescMassage

function validationCategory() {
  var validationErrorsCategory = [];
  errors = ``;
  var regexCategory = /^[A-Z]?[a-z]{1,}/;
  
    if (ProductCategory.value == "") {
      validationErrorsCategory.push(" You Product Category is required");
    } else if (regexCategory.test(ProductCategory.value) != true) {
      validationErrorsCategory.push("You Product Category must be srting");
    }
  if (validationErrorsCategory == "") {
    document.getElementById(
      "ProductCategoryMassage"
    ).innerHTML = `<p id="error" class=" text-success small">Your data is correct</p>`;
    return true;
  } else {
    for (let i = 0; i < validationErrorsCategory.length; i++) {
      errors += `<p id="error" class=" text-danger small">${validationErrorsCategory[i]}</p>`;
    }
    document.getElementById("ProductCategoryMassage").innerHTML = errors;
    return false;
  }
}
function validationDesc() {
  var validationErrorsDesc = [];
  errors = ``;

  var regexDesc = /^[A-Z]?[a-z]{1,}/;
  

     if (ProductDescription.value == "") {
       validationErrorsDesc.push(" You Product Description is required");
     } else if (regexDesc.test(ProductDescription.value) != true) {
       validationErrorsDesc.push("You Product Description must be srting");
  }
  
  if (validationErrorsDesc == "") {
    document.getElementById(
      "ProductDescMassage"
    ).innerHTML = `<p id="error" class=" text-success small">Your data is correct</p>`;
    return true;
  } else {
    for (let i = 0; i < validationErrorsDesc.length; i++) {
      errors += `<p id="error" class=" text-danger small">${validationErrorsDesc[i]}</p>`;
    }
    document.getElementById("ProductDescMassage").innerHTML = errors;
    return false;
  }
}