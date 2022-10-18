export const goToHome = (navigate) => {
  navigate('/');
};
export const goToLastPage = (navigate) => {
  navigate(-1);
};

export const goToForm = (navigate) => {
  navigate('/sendDress');
};

export const goToDetails = (navigate) => {
  navigate('/categories/:id');
};
