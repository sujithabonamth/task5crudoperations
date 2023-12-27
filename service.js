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
    displayDetails();
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
   
    // Display the basic details in the "detailsList" div
    var detailsList = document.getElementById("detailsList");
    detailsList.innerHTML = "";
   
    if (storedData && storedData.length > 0) {
      storedData.forEach(function (item, index) {
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
   
        // Appending elements to detailsItem using prepend
        detailsItem.prepend(mobileElement);
        detailsItem.prepend(emailElement);
        detailsItem.prepend(nameElement);
   
        detailsItem.onclick = function () {
          showUserDetails(index);
        };
   
        detailsList.appendChild(detailsItem);
      });
    }
  }
   
  
   
  
  function showUserDetails(index) {
    var detailsContainer = document.querySelector('.rightsidedetails');
    var editButtonsContainer = document.querySelector('.edit-details-buttons');
  
    detailsContainer.classList.remove('d-none');
    editButtonsContainer.classList.remove('d-none');
  
    // Set the selectedItemIndex to the clicked user index
    selectedItemIndex = index;
  
    // Retrieve data from local storage
    storedData = JSON.parse(localStorage.getItem('formData'));
  
    // Display detailed information in the "userdetails" div
    const userDetailsDiv = document.getElementById('userdetails');
    userDetailsDiv.innerHTML = '';
  
    if (storedData && storedData[index]) {
      const selectedUserDetails = storedData[index];
  
      // Creating elements with ids and using prepend
      const userDetailsItem = document.createElement('div');
      userDetailsItem.classList.add('details-item');
  
      // Creating elements with ids and using prepend
      const nameElement = createDivElement('name' + index, selectedUserDetails.name);
      const emailElement = createDivElement('email' + index, 'Email: ' + selectedUserDetails.email);
      const mobileElement = createDivElement('mobile' + index, 'Mobile: ' + selectedUserDetails.mobile);
      const landlineElement = createDivElement('landline' + index, 'Landline: ' + selectedUserDetails.telnumber);
      const addressElement = createDivElement('address' + index, 'Address: ' + selectedUserDetails.address);
      const siteElement = createDivElement('site' + index, 'Website: ' + selectedUserDetails.site);
  
      // Appending elements to userDetailsItem using prepend
      userDetailsItem.prepend(siteElement);
      userDetailsItem.prepend(addressElement);
      userDetailsItem.prepend(landlineElement);
      userDetailsItem.prepend(mobileElement);
      userDetailsItem.prepend(emailElement);
      userDetailsItem.prepend(nameElement);
  
      const deleteIcon = document.getElementById('delete-button');
      highlightUserDetails(selectedUserDetails, index);
  
      deleteIcon.onclick = function () {
        deleteContact(index);
      };
  
      // Use prepend to add userDetailsItem directly to userDetailsDiv
      userDetailsDiv.prepend(userDetailsItem);
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
    displayDetails();
  }
  displayDetails();
  

