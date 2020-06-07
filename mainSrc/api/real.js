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
    const restApi = new RestApi({controller: 'token'});
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
