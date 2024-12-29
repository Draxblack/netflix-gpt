export const checkValidData = (email, password)=>{
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
    if(!isEmailValid) return "Please provide valid Email"
    if(!isPasswordValid) return "Password must contain atleast 8 characters, one uppercase, one lowercase and one number"
    return null
}