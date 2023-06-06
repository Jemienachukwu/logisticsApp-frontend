export const uploadImage = (imageData) => ({
  type: "UPLOAD_IMAGE",
  payload: imageData,
});

export const clearUploadedImage = () => ({
  type: "CLEAR_UPLOADED_IMAGE",
});
