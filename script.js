const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

if (response.ok) {
	// Save token to localStorage if needed
	localStorage.setItem('token', result.token);
	// Redirect to login page after successful signup
	window.location.href = 'login.html'; // Redirect to login page
  } else {
	alert(result.msg || 'Signup failed');
  }
  