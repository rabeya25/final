//signup
const signupForm=document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e) => {
	e.preventDefault();
	
	const email  =signupForm['inputEmail'].value;
	const passward  =signupForm['inputPassword'].value;
	//signup the user
	
	auth.createUserWithEmailAndPassword(email,passward).then(cred => {
		//console.log(cred.user);
		//const modal= document.querySelector('#modal-signup');
		//M.Modal.getInstance(modal).close();
		signupForm.reset();
		document.location.href = "./index.html?Signup=Successful";
		
});

});

//logout

/*const logout= document.querySelector('#logout');
logout.addEventListener('click',(e) => {
	
e.preventDefault();
auth.signOut();
//auth.signOut().then() => {
	//console.log('user signed out');
	//document.location.href = "./index.html?signOut=Successful";
		
});
});*/

//login
/*const loginForm=document.querySelector('#login-form');
loginForm.addEventListener('submit',(e) => {
	e.preventDefault();
	const email  =loginForm['inputEmail'].value;
	const passward  =loginForm['inputPassword'].value;
	auth.signInWithEmailAndPassword(email,passward).then(cred => {
		console.log(cred.user);
		const modal= document.querySelector('#modal-login');
		//M.Modal.getInstance(modal).close();
		loginForm.reset();
		document.location.href = "./index.html?Login=Successful";

	});
	
});*/
	

