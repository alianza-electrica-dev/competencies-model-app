// ToastService.js
let toastRef;

export const setToastRef = (ref) => {
  toastRef = ref;
};

export const showToast = (options) => {
  if (toastRef) {
    toastRef.show(options);
  } else {
    console.warn("Toast reference is not set.");
  }
};