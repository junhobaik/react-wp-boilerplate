export const SET_ERROR = 'global/SET_ERROR';
export const CLEAR_ERROR = 'global/CLEAR_ERROR';

export const setError = (error) => ({
  type: SET_ERROR,
  error,
});

export const clearError = () => ({
  type: CLEAR_ERROR,
});

export const globalActionCreators = {
  setError,
  clearError,
};
