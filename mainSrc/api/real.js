import RestApi from './restapi';
import moment from 'moment';

export default class AppApi {
  sendVerificationSMS = async params => {
    const restApi = new RestApi({controller: 'users'});
    try {
      let response = await restApi.post({
        url: 'sendOTP',
        body: params,
        cancelable: true,
        showAlerts: true,
      });
      return response.data.result;
    } catch (error) {
      throw error;
    }
  };

  login = async params => {
    //debugger
    var details = {
      'userName': params.username,
      'password': params.password,
      'grant_type': 'password'
  };
  
  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  
//   const pokemonApiCall = await  fetch('https://adroitclouderpreport.ngrok.io/token', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
//     },
//     body: formBody
//   });
//   debugger;
//  const pokemon = await pokemonApiCall.json();
//  return pokemon;
 
    const restApi = new RestApi({controller: `token`});
    try {
      let response = await restApi.post({
        url: '',
        body: formBody,
        cancelable: true,
        showAlerts: true,
      });
      //debugger;
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  signup = async params => {
    
    var details = {
      'UserIdentity': params.CardNumber,
      'Email': params.Email,
      'Password':params.Password,
      'Name': params.Name,
      'UserRoles': 'Customer',
      'PhoneNo': params.PhoneNumber
  };
  var formBody = [];
  for (var property in details) {
    var encodedKey = decodeURIComponent(property);
    var encodedValue = decodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
    const restApi = new RestApi({controller: `api/Account/Register`});
    try {
      let response = await restApi.post({
        url: '',
        body: formBody,
        cancelable: true,
        showAlerts: true,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  getProviders = async params => {
    const restApi = new RestApi({controller: `api/Providers?EmployeeCode`});
    try {
      let response = await restApi.get({
        url: '',
        body: '',
        cancelable: true,
        showAlerts: true,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  getCountries = async params => {
    const restApi = new RestApi({controller: `api/Countries?EmployeeCode`});
    try {
      let response = await restApi.get({
        url: '',
        body: '',
        cancelable: true,
        showAlerts: true,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  DeleteClaim = async params => {
    var details = {
      'ClaimId': params.ID,
      
  };
    const restApi = new RestApi({controller: `api/DeleteClaim?ClaimId=`+params.ID});
    try {
      let response = await restApi.get({
        url: '',
        body: '',
        cancelable: true,
        showAlerts: true,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  

  SaveClaim = async params => {
    // let serviceDt= params.serviceDate.replace(/-/g,'/');
    let convertedDate= params.serviceDate.substr(3, 2)+"/"+params.serviceDate.substr(0, 2)+"/"+params.serviceDate.substr(6, 4);
    var details = {
      'PolicyCode': 'CP1912151312482198510',
      'ClaimTypeId': 1,
      'ProviderId': 1,
      'ServiceTypeId': 1,
      'ClaimedAmount': params.claimAccount,
      'ClaimReference': '',
      'ServiceDate' : convertedDate,
      'CurrencyId' : 1,
      'Comments': '',
  };
  var formBody = [];
  for (var property in details) {
    var encodedKey = decodeURIComponent(property);
    var encodedValue = decodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
    const restApi = new RestApi({controller: `api/SaveClaim`});
    try {
      let response = await restApi.post({
        url: '',
        body: formBody,
        cancelable: true,
        showAlerts: true,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  getClaims = async params => {
    const restApi = new RestApi({controller: `api/GetClaims?PolicyCode=CP1912151312482198510`});
    try {
      let response = await restApi.get({
        url: '',
        body: '',
        cancelable: true,
        showAlerts: true,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };


  getCurrency = async params => {
    const restApi = new RestApi({controller: `api/Currency?EmployeeCode`});
    try {
      let response = await restApi.get({
        url: '',
        body: '',
        cancelable: true,
        showAlerts: true,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  getServiceType = async params => {
    const restApi = new RestApi({
      controller: 'api/ServiceType?EmployeeCode=2018100002',
    });
    try {
      let response = await restApi.get({
        url: '',
        body: '',
        cancelable: true,
        showAlerts: true,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  SubmitClaim = async params => {
    const restApi = new RestApi({controller: 'api/SubmitClaim'});
    try {
      let response = await restApi.post({
        url: 'GetVehicleViolator',
        body: {
          ClaimId: params.ID,
          PaymentMethodId: 1,
        },
        cancelable: true,
        showAlerts: true,
      });
      return response.data.result;
    } catch (error) {
      throw error;
    }
  };
  

  confirmsmsTocken = async params => {
    const restApi = new RestApi({controller: 'Inspection'});
    try {
      let response = await restApi.post({
        url: 'GetVehicleViolator',
        body: {
          plateSource: params.plateSource,
          plateNumber: params.plateNumber,
          chassisNumber: params.chassisNumber,
          plateKind: params.plateKind,
          plateColor: params.plateColor,
        },
        cancelable: true,
        showAlerts: true,
      });
      return response.data.result;
    } catch (error) {
      throw error;
    }
  };

  uploadProfilepicture = async uri => {};
}
