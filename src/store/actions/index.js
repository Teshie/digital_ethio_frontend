
export const actionTypes = {
  SET_TOKEN: "SET_TOKEN",
  SET_USER_STATUS: "SET_USER_STATUS",
  SET_USER_DATA: "SET_USER_DATA",
};

export const set_user_status = (payload) => {
  return {
    type: actionTypes.SET_USER_STATUS,
    payload,
  };
};

export const set_user_data = (payload) => {
  return {
    type: actionTypes.SET_USER_DATA,
    payload,
  };
};

export const set_token = (payload) => {
  return {
    type: actionTypes.SET_TOKEN,
    payload,
  };
};
