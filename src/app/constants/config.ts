// UAT
// export const SERVER_URL = 'https://ilosemobileapp.azurewebsites.net/api/';
// DEV
export const SERVER_URL = 'https://phattifymobileservice.azurewebsites.net/api/';
// export const SERVER_URL = 'http://localhost:3000/api/';

//LIVE
// export const SERVER_URL = 'https://ilose.azurewebsites.net/api/';
export const STATUS = {
    error: 'error',
    success: 'success'
};
export const GENDER = {
    Male: '0',
    Female: '1'
};
export const CACHE_SERVICE = {
    GetCountries: 7 * 60 * 60 * 24, // 1 week
    GetHealthChecklist: 7 * 60 * 60 * 24 // 1 week  
};