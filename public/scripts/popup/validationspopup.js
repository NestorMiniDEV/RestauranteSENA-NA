const signin = document.querySelector('.signin');
const signup = document.querySelector('.signup');
const signinPopup = document.querySelector('.signinPopup');
const signupPopup = document.querySelector('.signupPopup');

const closeSignin = document.querySelector('.closeSignin');
const closeSignup = document.querySelector('.closeSignup');

signin.addEventListener('click', () => {
    signinPopup.showModal();
});

closeSignin.addEventListener('click', () => {
    signinPopup.close();
});

signup.addEventListener('click', () => {
    signupPopup.showModal();
});

closeSignup.addEventListener('click', () => {
    signupPopup.close();
})