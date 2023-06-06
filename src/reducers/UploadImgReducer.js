// imageUploadReducer.js

const imageUploadReducer = (state = { uploadedImage: null }, action) => {
  switch (action.type) {
    case "UPLOAD_IMAGE":
      return {
        ...state,
        uploadedImage: action.payload,
      };
    case "CLEAR_UPLOADED_IMAGE":
      return {
        ...state,
        uploadedImage: null,
      };
    default:
      return state;
  }
};

export default imageUploadReducer;
