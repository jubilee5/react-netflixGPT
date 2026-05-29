export const checkvalidData = (name,email, password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email); // ragex email vadition

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);  //ragex for password
     
    const isNameValid = /^[a-zA-Z ]+$/.test(name); //ragex for name validation
    
    if(!isNameValid) return "Name is not valid";
    
    if(!isEmailValid) return "Email ID is not valid";

    if(!isPasswordValid) return "Password is not valid"


    return null; //this means no error

    
};