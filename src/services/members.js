import axios from 'axios';

export const getMembers = async () => {
  try {
    const response = await axios.get('http://127.0.0.1:3333/api/members');
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const postMember = async ({
  name,
  email,
  last_experience,
  batch_id,
  quotes,
  github_account,
  linkedin_account
}) => {
  try {
    const response = await axios.post('http://127.0.0.1:3333/api/members', {
      name: name,
      email: email,
      last_experience: last_experience,
      batch_id: batch_id,
      quotes: quotes,
      github_account: github_account,
      linkedin_account: linkedin_account
    });
    console.log(response);
    return response.message;
  } catch (error) {
    console.log(error);
  }
};
