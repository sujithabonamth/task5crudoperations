let isEditing = false;
let selectedUserDetails = ""; //  variable is used to store details of the selected user. It starts as an empty string
let homeLink = document.getElementById("home-link");
 
let addFormLink = document.getElementById("add-form-link");
 
addFormLink.onclick = function () {
  isEditing = true;
  showForm();
};
window.onload = function () {
    displayDetails();
   };
 
function showForm() {
  // Set form to display:block
  document.querySelector(".rightsidedetails").classList.remove("d-none");
  document.querySelector("#userdetails").innerHTML = "";
  document.querySelector(".edit-details-buttons").classList.add("d-none");
  document.getElementById("formElement").style.display = "block";
 
  // Display only the Add button
  var addButton = document.getElementById("addButton");
  var updateButton = document.getElementById("updateButton");
 
  addButton.style.display = "block";
  updateButton.style.display = "none";
 
  if (isEditing) {
    addButton.style.display = "block";
    updateButton.style.display = "none";
  } else {
    addButton.style.display = "none";
    updateButton.style.display = "block";
  }
}
 
function highlightUserDetails(selecteddata, index) {
document.querySelector("input#myname").value = selecteddata.name;
document.querySelector("input#email").value = selecteddata.email;
    document.querySelector("input#mobile").value = selecteddata.mobile;
    document.querySelector("input#telnumber").value = selecteddata.telnumber;
document.querySelector("input#site").value = selecteddata.site;
    document.querySelector("textarea#address").value = selecteddata.address;
 
    let updateButton = document.getElementById("updateButton");
 
    updateButton.onclick = function () {
        var name = document.getElementById("myname").value;
        var email = document.getElementById("email").value;
        var mobile = document.getElementById("mobile").value;
        var telnumber = document.getElementById("telnumber").value;
        var site = document.getElementById("site").value;
        var address = document.getElementById("address").value;
 
        let obj = { name, email, mobile, telnumber, site, address };
 
        storedData = JSON.parse(localStorage.getItem("formData"));
        storedData[index] = obj;
        localStorage.setItem("formData", JSON.stringify(storedData));
 
        // Update the displayed details without calling displayDetails
        var nameElement = document.getElementById("name" + index);
        var emailElement = document.getElementById("email" + index);
        var mobileElement = document.getElementById("mobile" + index);
 
        if (nameElement && emailElement && mobileElement) {
            nameElement.innerHTML = name;
            emailElement.innerHTML = email;
            mobileElement.innerHTML = mobile;
        }
    };
}
function isValidEmail(email) {
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
 
function isValidMobile(mobile) {
  var phoneRegex = /^\+91[6789]\d{9}$/;
 
  return phoneRegex.test(mobile);
}
 
function isValidSite(site) {
  var urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  return urlRegex.test(site);
}
 
function isValidAddress(address) {
  var AddressRegex = /^[a-zA-Z0-9\s,.'-]{3,}$/;
 
  return AddressRegex.test(address);
}
 
 
function validationForm() {
  var myname = document.forms["formElement"]["myname"].value;
  var email = document.forms["formElement"]["email"].value;
  var mobile = document.forms["formElement"]["mobile"].value;
  var telnumber = document.forms["formElement"]["telnumber"].value;
  var site = document.forms["formElement"]["site"].value;
  var address = document.forms["formElement"]["address"].value;
  var errorMessageDiv = document.getElementById("errorMessage");
  var successMessageDiv = document.getElementById("successMessage");
 
  var nameError = document.getElementById("nameerror");
  var emailError = document.getElementById("emailerror");
  var MobileError = document.getElementById("mobileerror");
  var telnumError = document.getElementById("landlineerror");
  var SiteError = document.getElementById("siteerror");
  var AddressError = document.getElementById("addresserror");
  nameError.innerHTML = "";
  emailError.innerHTML = "";
  MobileError.innerHTML = "";
  telnumError.innerHTML = "";
  SiteError.innerHTML = "";
  AddressError.innerHTML = "";
  errorMessageDiv.innerHTML = "";
  successMessageDiv.innerHTML = "";
 
  if (myname.trim() === "") {
    nameError.innerHTML = "Name is required.";
  } else if (!isValidName(myname)) {
    nameError.innerHTML = "Numbers are not allowed in the name.";
  }
 
  if (email.trim() === "") {
    emailError.innerHTML = "Email is required.";
  } else if (!isValidEmail(email)) {
    emailError.innerHTML = "Invalid email.";
  }
 
  if (site.trim() === "") {
    SiteError.innerHTML = "Website is required.";
  } else if (!isValidSite(site)) {
    SiteError.innerHTML = "Invalid Website.";
  }
  if (mobile.trim() === "") {
    MobileError.innerHTML = "Mobile no is required.";
  } else if (!isValidMobile(mobile)) {
    MobileError.innerHTML = " Invalid Mobile no .";
  }
  if (telnumber.trim() === "") {
    telnumError.innerHTML = "LandLine is required.";
  } else if (!isValidtelnum(telnumber)) {
    telnumError.innerHTML = "Invalid Landline.";
  }
  if (address.trim() === " ") {
    AddressError.innerHTML = "Address is Required";
  } else if (!isValidAddress(address)) {
    AddressError.innerHTML = "Invalid address";
  } else if (address.length < 15 || address.length > 200) {
    AddressError.innerHTML = "Please check your Address";
  }
  if (
    nameError.innerHTML === "" &&
    emailError.innerHTML === "" &&
    SiteError.innerHTML === "" &&
    MobileError.innerHTML === "" &&
    telnumError.innerHTML === "" &&
    AddressError.innerHTML === ""
  ) {
    addDetails(); // Call the addDetails function
    successMessageDiv.innerHTML = "Details added successfully!";
   
 
 
  }
 
  function isValidName(myname) {
    var nameRegex = /^[a-zA-Z\-]+$/;
    return nameRegex.test(myname);
  }
 
  function isValidtelnum(telnum) {
    var telnumRegex = /^\+91\d{10}$/;
    return telnumRegex.test(telnum);
  }
 
  if (!isValidEmail(email)) {
    emailError.innerHTML = "Invalid email.";
    return false; // Email is invalid
  } else {
    emailError.innerHTML = "";
    return true; // Email is valid
  }
}
function clearNameError() {
  document.getElementById("nameerror").textContent = "";
}
function clearEmailError() {
  var email = document.getElementById("email").value;
  var emailError = document.getElementById("emailerror");
 
  if (!isValidEmail(email)) {
    emailError.innerHTML = "Invalid email.";
    return false; // Email is invalid
  } else {
    emailError.innerHTML = "";
    return true; // Email is valid
  }
}
function clearAddressError() {
  document.getElementById("addresserror").innerHTML = "";
}
function clearMobileError() {
  document.getElementById("mobileerror").innerHTML = "";
}
function cleartelnumError() {
  document.getElementById("landlineerror").innerHTML = "";
}
function clearSiteError() {
  var site = document.getElementById("site").value;
  var SiteError = document.getElementById("siteerror");
  if (!isValidSite(site)) {
    SiteError.innerHTML = "Invalid Website.";
    return false; // Website is invalid
  } else {
    SiteError.innerHTML = "";
    return true; // Website is valid
  }
}
 
function addDetails() {
  // Get form values
  var name = document.getElementById("myname").value;
  var email = document.getElementById("email").value;
  var mobile = document.getElementById("mobile").value;
  var telnumber = document.getElementById("telnumber").value;
  var site = document.getElementById("site").value;
  var address = document.getElementById("address").value;
 
  saveToLocalStorage(name, email, mobile, telnumber, site, address); // calls the savetolocalstorage function
 
  document.getElementById("myname").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("telnumber").value = "";
  document.getElementById("site").value = "";
  document.getElementById("address").value = "";
  // Update the display
 
  var detailsItem =displayDetails();
  var detailsList = document.getElementById("detailsList");
  detailsList.prepend(detailsItem);
 
//Added the existing detailsitemdirectly without calling displaydetails function
 
 
}
 
function saveToLocalStorage(name, email, mobile, telnumber, site, address) {
  // Retrieve existing data from local storage or intialize  an empty array there is no exisiting data (if any)
  var existingData = JSON.parse(localStorage.getItem("formData")) || [];
 
  var formData = {
    name: name,
    email: email,
    mobile: mobile,
    telnumber: telnumber,
    site: site,
    address: address,
  }; // recieved data was  in the form of string format and it is converted to object .
 
  existingData.push(formData); // new object to the existing array
 
  // Save the form data in local storage
  localStorage.setItem("formData", JSON.stringify(existingData)); // set the formdata to the local storage.
}
 
 
function displayDetails() {
  // Retrieve data from local storage
  var storedData = JSON.parse(localStorage.getItem("formData"));
 
  // Display the basic details in the "detailsList"
  var detailsList = document.getElementById("detailsList");
  detailsList.innerHTML = "";
 
  if (storedData && storedData.length > 0) {
    storedData.forEach(function (item, index) {
      console.log("Name:",item.name);
      var detailsItem = document.createElement("div");
      detailsItem.className = "details-item";
 
      // Creating elements with ids and using prepend
      var nameElement = document.createElement("div");
      nameElement.id = "name" + index;
      nameElement.className = "name";
      nameElement.innerHTML = item.name;
 
      var emailElement = document.createElement("div");
      emailElement.id = "email" + index;
      emailElement.className = "details";
      emailElement.innerHTML = item.email;
 
      var mobileElement = document.createElement("div");
      mobileElement.id = "mobile" + index;
      mobileElement.className = "details";
      mobileElement.innerHTML = item.mobile;
     
     
      detailsItem.prepend(mobileElement);
      detailsItem.prepend(emailElement);
      detailsItem.prepend(nameElement);//Uses prepend to add the elements to the detailsItem div.
 
      detailsItem.onclick = function () {
        showUserDetails(index);
      };
 
      detailsList.prepend(detailsItem);
    });
  }
  return detailsList; // Return the created detailsItem
}
 
 
 
 
 
function showUserDetails(index) {
  const detailsContainer = document.querySelector('.rightsidedetails');
  const editButtonsContainer = document.querySelector('.edit-details-buttons');
  detailsContainer.classList.remove('d-none');
  editButtonsContainer.classList.remove('d-none');
 
   selectedItemIndex = index;
 
   storedData = JSON.parse(localStorage.getItem('formData'));
  var userDetailsDiv = document.getElementById('userdetails');
  userDetailsDiv.innerHTML = '';
 
  if (storedData && storedData[index]) {
      var selectedUserDetails = storedData[index];
      var userDetailsItem = document.createElement('div');
 
      var nameElement = createDivElement('name' + index, selectedUserDetails.name);
      nameElement.classList.add('name-details')
      var emailElement = createDivElement('email' + index, 'Email: ' + selectedUserDetails.email);
      var mobileElement = createDivElement('mobile' + index, 'Mobile: ' + selectedUserDetails.mobile);
      mobileElement.classList.add('mobile-details')
      var landlineElement = createDivElement('landline' + index, 'Landline: ' + selectedUserDetails.telnumber);
      var addressElement = createDivElement('address' + index, 'Address: ' + selectedUserDetails.address);
      var siteElement = createDivElement('site' + index, 'Website: ' + selectedUserDetails.site);
   
      // Appending elements to userDetailsItem using prepend
      userDetailsItem.prepend(siteElement);
      userDetailsItem.prepend(addressElement);
      userDetailsItem.prepend(landlineElement);
      userDetailsItem.prepend(mobileElement);
      userDetailsItem.prepend(emailElement);
      userDetailsItem.prepend(nameElement);
   
      var deleteIcon = document.getElementById('delete-button');
      highlightUserDetails(selectedUserDetails, index);
   
      deleteIcon.onclick = function () {
        deleteContact(index);
        var detailsItem =displayDetails();
        var detailsList = document.getElementById("detailsList");
        if (detailsItem && detailsItem.parentNode === detailsList) {
          detailsList.removeChild(detailsItem);
        }
       
      };
   
 
      userDetailsDiv.prepend(userDetailsItem);//
    }
  }
   
  function createDivElement(id, value) {
    const element = document.createElement('div');
    element.id = id;
    element.innerHTML = value;
   
    return element;
  }
  function deleteContact(index) {
    storedData = JSON.parse(localStorage.getItem("formData"));
    storedData.splice(index, 1);
    localStorage.setItem("formData", JSON.stringify(storedData));
 
   
   
}
 
 

