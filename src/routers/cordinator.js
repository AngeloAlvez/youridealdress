export const goToHome = (navigate) => {
  navigate('/');
};
export const goToLastPage = (navigate) => {
  navigate(-1);
};

export const goToForm = (navigate) => {
  navigate('/sendDress');
};

export const goToCategories = (navigate, props) => {
  navigate(`/categories/${props}`);
};
