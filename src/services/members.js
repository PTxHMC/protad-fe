import axios from 'axios';

export const getMembers = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3333/api/members');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postMember = async formData => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:3333/api/members',
      formData
    );
    console.log(response.data);
    return response.message;
  } catch (error) {
    console.log(error);
  }
};
