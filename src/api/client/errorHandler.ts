const errorHandler = (error, handleError) => {
  if (!handleError) {
    return Promise.reject(error);
  }

  if (error.response && error.response.status === 401) {
    alert(String(error.response.message));
  }

  return Promise.reject(error);
};

export default errorHandler;
