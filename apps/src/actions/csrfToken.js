import axios from 'axios';

export const actionTypes = {
  FETCH_TOKEN: 'FETCH_TOKEN',
  RECEIVE_TOKEN: 'UPDATE_TOKEN'
};

export const receiveToken = (json) => ({
  type: actionTypes.RECEIVE_TOKEN,
  receivedAt: Date.now(),
  data: json
});

export const fetchToken = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/csrftoken');
    const token = response.data;

    dispatch(receiveToken(token));

    return token;
  } catch (e) {
    console.error(e);
  }
};
