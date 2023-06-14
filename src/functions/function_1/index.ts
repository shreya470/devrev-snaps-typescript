export const run = async (events: any[]) => {
  
  const axios = require('axios');

  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'https://api.dev.devrev-eng.ai/internal/service-accounts.list',
    headers: { 
      'Authorization': 'eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXYuZGV2cmV2LWVuZy5haS8iLCJraWQiOiJzdHNfa2lkX3JzYSIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvLzc4NzpkZXZ1LzM0NSIsImV4cCI6MTc4MDgxNDM0MCwiaHR0cDovL2RldnJldi5haS9hdXRoMF91aWQiOiJkb246aWRlbnRpdHk6ZHZydi11cy0xOmRldm8vc3VwZXI6YXV0aDBfdXNlci9nb29nbGUtb2F1dGgyfDEwMjY5NjY5NTU2MDQ3MjA1NDU2MSIsImh0dHA6Ly9kZXZyZXYuYWkvYXV0aDBfdXNlcl9pZCI6Imdvb2dsZS1vYXV0aDJ8MTAyNjk2Njk1NTYwNDcyMDU0NTYxIiwiaHR0cDovL2RldnJldi5haS9kZXZvX2RvbiI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by83ODciLCJodHRwOi8vZGV2cmV2LmFpL2Rldm9pZCI6IkRFVi03ODciLCJodHRwOi8vZGV2cmV2LmFpL2RldnVpZCI6IkRFVlUtMzQ1IiwiaHR0cDovL2RldnJldi5haS9kaXNwbGF5bmFtZSI6Imktc2hyZXlhLW5pZ3dhbCIsImh0dHA6Ly9kZXZyZXYuYWkvZW1haWwiOiJpLXNocmV5YS5uaWd3YWxAZGV2cmV2LmFpIiwiaHR0cDovL2RldnJldi5haS9mdWxsbmFtZSI6IlNocmV5YSBOaWd3YWwiLCJodHRwOi8vZGV2cmV2LmFpL3Rva2VudHlwZSI6InVybjpkZXZyZXY6cGFyYW1zOm9hdXRoOnRva2VuLXR5cGU6cGF0IiwiaWF0IjoxNjg2MjA2MzQwLCJpc3MiOiJodHRwczovL2F1dGgtdG9rZW4uZGV2LmRldnJldi1lbmcuYWkvIiwianRpIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvLzc4Nzp0b2tlbi84YlNNendxZyIsIm9yZ19pZCI6Im9yZ19kS05vUDNlNmhDbDZySHVEIiwic3ViIjoiZG9uOmlkZW50aXR5OmR2cnYtdXMtMTpkZXZvLzc4NzpkZXZ1LzM0NSJ9.pHyW1PMwX2s7EQMzRHLpT8VrpQSM09ZjiFAWgPKHjPge1CuC-lukkNuCD8qiXsrJq5_8wOiXssrH7sZxu4NeQ6PfHxBzfRlkADitV6YuLeG054pbi7xzUpLuqA4n2ewibSAhOMbvjswl2TecP1xbtxF4D1COb5_2jMD4Jrp7D6c2XCdIn9Cvll8IerLF4t11Arv8qH0c_3cNKFRThid-v559zWh1bNT2bJGyUQvZnMKruZsZvEIlWpuv63M2SK9km0q1a5068x8_KpnycypEYxMKXKKQ6hAPwPqRwtytKI2qxaz4ddIcrHLyr9mydQo_L-yASy_Oxuh-IWil5uD2iw', 
      'Cookie': '__Secure-fes=2a2040d5f2834210b392649b8b06d566|3911b1ab-9f55-4945-be6d-b24117559328'
    }
  };
  
  axios.request(config)
  .then((response: { data: any; }) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error: any) => {
    console.log(error);
  });
  
  console.info('events', events);
};

export default run;
