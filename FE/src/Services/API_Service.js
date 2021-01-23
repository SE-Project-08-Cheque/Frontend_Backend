var axios = require('axios');
var proxy = 'http://localhost:3084/';
var API_Service = {
  authUser: authUser,
  getAllDataCustomer: getAllDataCustomer,
  signup: signup,
  getAllStaffData: getAllStaffData,
  signupstaff: signupstaff,
  getAllDataCustomerTable: getAllDataCustomerTable,
  getAllDataCustomerTablePending: getAllDataCustomerTablePending,
  approve: approve,
  reject: reject,
  getpin:getpin

}




function getpin(id, callback) {
 var url = proxy + 'customer/getpin/'+id;
  console.log(url);
  axios.get(url)
    .then(function (response) {
      console.log(response);
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
      callback("error");
    });

}



function authUser(uname, password, callback) {
  console.log(uname);
  console.log(password);
  var url = proxy + 'user/authUser/';
  console.log(url);
  axios.post(url, {
    login_username: uname,
    login_pwd: password
  })
    .then(function (response) {
      console.log(response);
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
      callback("error");
    });

}
function approve(id,callback) {
  var url = proxy + 'staff/approve_reject/' + id + '/"APPROVED"';
  console.log(url);
  axios.get(url)
    .then(function (response) {
      console.log(response);
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
      
      callback(error);
    });
}
function reject(id,callback) {
  var url = proxy + 'staff/approve_reject/' + id + '/"REJECTED"';
  console.log(url);
  axios.get(url)
    .then(function (response) {
      console.log(response);
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
      callback(error);
    });
}


function getAllDataCustomerTable(callback) {
  var url = proxy + 'staff/getAllData';
  console.log(url);
  axios.get(url)
    .then(function (response) {
      console.log(response);
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
      callback('ERROR');
    });

}
function getAllDataCustomerTablePending(callback) {
  var url = proxy + 'staff/getAllDataPending';
  console.log(url);
  axios.get(url)
    .then(function (response) {
      console.log(response);
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
      callback('ERROR');
    });

}




function signup(doc, callback) {
  console.log(doc.getElementById('Date_of_birth').value);
  var url = proxy + 'user/addUserCustomer/';
  console.log(url);
  axios.post(url, {
    username: doc.getElementById('Username').value + "",
    password: doc.getElementById('Password').value + "",
    account_no: doc.getElementById('Account_no').value + "",
    full_name: doc.getElementById('Full_name').value + "",
    name_with_init: doc.getElementById('Name_with_init').value + "",
    dob: doc.getElementById('Date_of_birth').value + "",
    created_date: doc.getElementById('Account_Created_On').value + "",
    NIC: doc.getElementById('NIC').value + "",
    gender: doc.getElementById('Gender').value + "",
    house_no: doc.getElementById('House_no').value + "",
    street: doc.getElementById('Street').value + "",
    city: doc.getElementById('City').value + "",
    postal_code: doc.getElementById('Postal_Code').value + "",
    contact_primary: doc.getElementById('Contact_Primary').value + "",
    contact_secondary: doc.getElementById('Email').value + "",


  })
    .then(function (response) {
      console.log(response);
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
      callback("error");
    });
}


function signupstaff(doc, callback) {
  console.log(doc.getElementById('Date_of_birth').value);
  var url = proxy + 'staff/addUserStaff/';
  console.log(url);
  axios.post(url, {

    username: doc.getElementById('Username').value + "",
    password: doc.getElementById('Password').value + "",
    fname: doc.getElementById('full_name').value + "",
    name_with_init: doc.getElementById('Name_with_init').value + "",
    dob: doc.getElementById('Date_of_birth').value + "",
    created_date: doc.getElementById('Member_Since').value + "",
    NIC: doc.getElementById('NIC').value + "",
    gender: doc.getElementById('Gender').value + "",
    house_no: doc.getElementById('House_no').value + "",
    street: doc.getElementById('Street').value + "",
    city: doc.getElementById('City').value + "",
    postal_code: doc.getElementById('Postal_Code').value + "",
    contact_primary: doc.getElementById('Contact_Primary').value + "",
    contact_secondary: doc.getElementById('Post_ID').value + "",


  })
    .then(function (response) {
      console.log(response);
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
      callback("error");
    });
}







function getAllDataCustomer(id, callback) {
  console.log(id);
  var url = proxy + 'customer/getAllData/' + id;
  console.log(url);
  axios.get(url)
    .then(function (response) {
      console.log(response);
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
      callback("error");
    });

}
function getAllStaffData(id, callback) {
  console.log(id);
  var url = proxy + 'staff/getAllData/' + id;
  console.log(url);
  axios.get(url)
    .then(function (response) {
      console.log(response);
      callback(response);
    })
    .catch(function (error) {
      console.log(error);
      callback("error");
    });

}

module.exports = API_Service;