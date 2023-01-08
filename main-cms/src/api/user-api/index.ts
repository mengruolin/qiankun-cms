import { ajax } from '@/api/utils';

const prefix = '';

export interface loginRequestParams {
  sign: string;
  remeber: boolean;
}

export const api_login = (data: loginRequestParams) =>
  ajax({
    url: `${prefix}/api/user/login`,
    method: 'POST',
    data,
  });

export const api_getUserMenu = () =>
  ajax({
    url: `${prefix}/api/user/getUserMenu`,
    method: 'GET',
  });

export const api_getUserInfo = () =>
  ajax({
    url: `${prefix}/api/user/getUserInfo`,
    method: 'GET',
  });
