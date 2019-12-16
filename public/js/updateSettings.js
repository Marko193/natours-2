/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    const url =
      type === 'password'
        ? 'http://127.0.0.01:3000/api/v1/users/updatePassword'
        : 'http://127.0.0.01:3000/api/v1/users/updateMe';
    const res = await axios({
      method: 'PATCH',
      url,
      data
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated!`);
    }

    // console.log(res);
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
