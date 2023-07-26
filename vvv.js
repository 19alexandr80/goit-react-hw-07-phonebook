import axios from 'axios';

export class PhoneBook {
  constructor() {
    this.requestAddress =
      'https://64bded502320b36433c7e82a.mockapi.io/alexander/contacts';
  }
  async getPhoneBook() {
    try {
      const response = await axios.get(`${this.requestAddress}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  async addUserPhoneBook(request) {
    try {
      const response = await axios.post(`${this.requestAddress}`, request);
      console.log(response);
      return response;
    } catch (error) {
      console.error('errrrrror', error);
    }
  }
  async deleteUserPhoneBook(id) {
    try {
      const response = await axios.delete(`${this.requestAddress}/${id}`);
      console.log(response);
      return response;
    } catch (error) {
      console.error('error-deleteRequest', error);
    }
  }
}
