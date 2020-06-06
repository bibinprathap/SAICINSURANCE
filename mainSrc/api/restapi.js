import axios from 'axios';
// import envConfig from './config';
import alertsHelper from './helperServices/alerts';
import createError from './helperServices/errors';
import {store} from '../store'

export default class RestApi {
  static cancelTokens = {};
  constructor({controller, dispatch = null, secure = true}) {
    //if (!dispatch || dispatch == null) throw Error(`Dispatch cannot be null. controller: ${controller}`);

    //const env = 'test';
    //const env = 'development';
    //const env =   store.getState().environmentReducer;
    // 'bibin';

    this.header = {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      // 'Content-Type': 'application/json',
      // Accept: '*/*',
    };
    this.controller = controller || '';

    this.dispatch = dispatch;
    this.secure = secure;
    this.envConfig = store.getState().environmentReducer;
  }

  restApi = (
    method = 'GET',
    url = '',
    parameters = {},
    body = {},
    headers = {},
    isFormData = false,
    showAlerts = true,
    cancelable = false,
  ) => {
    if (!url) url = '';
    if (!parameters) parameters = {};
    if (!headers) headers = {};
    //let requestUrl = this.gis === true ? url : this.parseUrl(url, parameters);
    let requestUrl = RestApi.parseUrl(
      this.envConfig,
      this.controller,
      url,
      parameters,
    );

    // if (isFormData) {
    //     //set correct Content-Type in the headers
    // }

    const defaultHeaders = {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      // 'Content-Type': 'application/json',
      //'Access-Control-Allow-Origin': '*',
    };
    const requestConfig = {
      url: requestUrl,
      method: method,
      headers: {...defaultHeaders, ...headers},
      data: body,
      //data: typeof body === undefined ? undefined : typeof body === 'string' ? body : JSON.stringify(body),
      //body: JSON.stringify(body),
      //timeout: this.envConfig.timeout || 0, //doesn't always work. need to fix this
      //withCredentials: true,
      //todo: add token if it is secure call
    };

    if (cancelable) {
      RestApi.cancelRequest({
        endpoint: this.endpoint,
        url: requestUrl,
        message: 'One request allowed per url',
      });

      const newTokenSource = axios.CancelToken.source();
      newTokenSource.isCancelled = false;
      RestApi.cancelTokens[requestUrl] = newTokenSource;
      requestConfig.cancelToken = newTokenSource.token;
    }
    return this.sendRequest(requestConfig, showAlerts);
    //return this.fetchRequest(requestConfig, showAlerts);
  };

  static parseUrl = (envConfig = {}, controller = '', url = '', parameters) => {
    if (url.toLowerCase().startsWith('https')) return url;
    if(url=='')  return `${envConfig.baseURL}/${controller}`;;
    const regex = /:(\w+)\/?/g;

    let m;

    while ((m = regex.exec(url)) !== null) {
      // This is necessary to avoid infinite loops with zero-width matches
      if (m.index === regex.lastIndex) {
        regex.lastIndex++;
      }

      // The result can be accessed through the `m`-variable.
      m.forEach(match => {
        if (parameters[match]) {
          url = url.replace(`:${match}`, parameters[match]);
          delete parameters[match];
        }
      });
    }

    let prefix = url.lastIndexOf('?') > 0 ? '&' : '?';

    for (let propName in parameters) {
      url = url.concat(`${prefix}${propName}=${parameters[propName]}`);
      if (prefix === '?') {
        prefix = '&';
      }
    }
    let parsedUrl = '';
    if (url.startsWith('//')) {
      parsedUrl = `${envConfig.baseURL}/${url.slice(2)}`;
    } else {
      if (url.startsWith('/')) {
        url = url.slice(1);
      }
      if (url.startsWith('?')) {
        parsedUrl = `${envConfig.baseURL}/${controller}${url}`;
      } else {
        parsedUrl = `${envConfig.baseURL}/${controller}/${url}`;
      }
    }

    return parsedUrl;
  };

  sendRequest = (requestConfig, showAlerts) => {
    //Todo:  dispatch --> this.dispatch(ajax-call-counter-increment-action)
    console.log('restApi axios request: ', requestConfig);
    axios.defaults.withCredentials = true;
    axios.defaults.timeout = requestConfig.timeout;
    const logLevel = 'error';

    return axios
      .request(requestConfig)
      .then(response => {
        const cancelToken = RestApi.cancelTokens[requestConfig.url];
        console.log(
          'restApi axios success... url:',
          requestConfig.url,
          'response:',
          response,
        );
        if (cancelToken && cancelToken.isCancelled) {
          //Should never come here, but just in case...
          console.warn('restApi axios success - request was cancelled');
          throw 'isCancel';
        }
        //Todo:  dispatch --> this.dispatch(ajax-call-counter-decrement-action)

        delete RestApi.cancelTokens[requestConfig.url];
        if (logLevel === 'debug') {
          const logAction = {
            type: 'LOG_API_ERRORS',
            message: '',
            details: {response},
          };
          store.dispatch(logAction);
        }

        return response;
      })
      .catch(error => {
        //Todo:  dispatch --> this.dispatch(ajax-call-counter-decrement-action)
        console.log('restApi axios error: ', {error});
        let errorToThrow = createError(error);
        errorToThrow.isCancel = error === 'isCancell' || axios.isCancel(error);

        let errorMessage = errorToThrow.detail || errorToThrow.message;
        if (showAlerts && errorToThrow) {
          alertsHelper.show('error', errorToThrow.message, errorMessage);
          errorToThrow.handled = true;
        }

        const logAction = {
          type: 'LOG_API_ERRORS',
          message: errorMessage,
          details: {response: error && error.response},
        };
        store.dispatch(logAction);

        throw errorToThrow;
      });
  };
}
