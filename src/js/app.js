
function contactSubmit(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    console.log(name)
    console.log(email)
    console.log(message)
    if(name=''){
        alert("Please enter your details")
    }
    else if(email==''){
            alert("Please enter your details")
        }
    else if(message==''){
                alert("Please enter your message")
            }
    else{
        alert("Your message has been sent")
    }

}
async function fetchUsers() {
    try {
      const response = await fetch(`accounts.json`);
      if (!response.ok) {
        throw new Error(`Failed to fetch user data: ${response.status}`);
      }
      const users = await response.json();
      return users;
    } catch (error) {
      console.error('Error fetching user data:', error);
          return []; 
    }
  }
async function loginSubmit() {
    const enteredemail = document.getElementById('lemail').value;
    const enteredPassword = document.getElementById('lpassword').value;
    alert("Login Success")    
}
     function signUPSubmit(){
      const signUpForm = document.querySelector('.signup-form');
      let formData;
      signUpForm.addEventListener('submit', event => {
          event.preventDefault();
          formData = new FormData(signUpForm); 
          const data = Object.fromEntries(formData);
          console.log(data);
      });
        var name = document.getElementById("sname").value;
        var email = document.getElementById("semail").value;
        var password = document.getElementById("spassword").value;
        console.log(name)
        console.log(email)
        console.log(password)
        if(name.length <= 3){
          alert("Please enter a valid name")
        }
        if(email.length <= 9){
          alert("Please enter a valid email \n A Valid Email Must Contain atleast 9 alphanumeric values along with a symbol @ and .")
        }
        if(password.length <= 7){
          alert("Please enter a valid password \n A Valid Password Must Contain atleast 8 alphanumeric values along with a special symbols")
                  }
        else{
          alert("Signed Up Successfully")
}}



