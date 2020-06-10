import RestApi from './restapi';

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
  const data =  {UserName:'saic@yahoo.com',
  Password:'test123',
  grant_type:'password'}
    const restApi = new RestApi({controller: `token?UserName=${encodeURIComponent(data.UserName)}&Password=${encodeURIComponent(data.Password)}&grant_type=${encodeURIComponent(data.grant_type)}`});
    try {
      let response = await restApi.get({
        url: '',
        body: params,
        cancelable: true,
        showAlerts: true,
      });
      return response.data.result;
    } catch (error) {
      throw error;
    }
  };

  getServiceType = async params => {
    const restApi = new RestApi({
      controller: 'ServiceType?EmployeeCode=2018100002',
    });
    try {
      let response = await restApi.get({
        url: '',
        body: params,
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
