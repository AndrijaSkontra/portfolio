export function isMobileDevice() {
  return /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
}

if (isMobileDevice()) {
  //send user to /mobile-error
  window.location.href = "../pages/mobile-error.html";
}
