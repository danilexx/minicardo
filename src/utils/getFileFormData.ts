const getFileFormData = (file: File): FormData => {
  const formData = new FormData();
  formData.append("image", file);
  return formData;
};

export default getFileFormData;
