const errorHandler = (error, handleError) => {
  if (!handleError) {
    return Promise.reject(error);
  }

  if (error.response && error.response.status === 401) {
    //TODO: jogar isso aqui no redux pra exibir na tela talvez??
    alert(String(error.response.data.mensagem));
  }

  return Promise.reject(error);
};

export default errorHandler;
