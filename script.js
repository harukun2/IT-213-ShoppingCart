// Mock CAPTCHA function to generate a simple random string
function generateCaptcha() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captcha = '';
  for (let i = 0; i < 6; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return captcha;
}

document.addEventListener('DOMContentLoaded', function () {
  const captchaContainer = document.getElementById('captchaContainer');
  const captchaInput = document.getElementById('captchaInput');
  const loginForm = document.getElementById('loginForm');

  // Generate initial CAPTCHA on page load
  let captcha = generateCaptcha();
  captchaContainer.textContent = captcha;

  // Regenerate CAPTCHA on form submit
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const enteredCaptcha = captchaInput.value.trim();
    if (enteredCaptcha === captcha) {
      alert('Login Successful!');
	  window.location.href = 'index.html';
      // Here you can add code to perform the actual login action
    } else {
      alert('CAPTCHA is incorrect. Please try again.');
    }
    // Generate new CAPTCHA after submission
    captcha = generateCaptcha();
    captchaContainer.textContent = captcha;
    // Clear input fields
    captchaInput.value = '';
  });
});
