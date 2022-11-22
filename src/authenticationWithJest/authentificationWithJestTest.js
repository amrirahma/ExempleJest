import validator from 'validator';
const listUser=[{'email':'t1@t1.com','password':'admin','nom':'user test'}]

function loginUser (email,password){
let m=  listUser.findIndex(object => {
    return object.email === email;
  });
  if(m === -1){
   throw new Error('failed login')
  }else if( listUser[m].password === password){
      return true
  }else{ throw new Error('failed login')}


}
function isValidetEmail (email){
  
   return validator.isEmail(email);
    
    }
function isValidetPassword (password){
  
        return validator.isStrongPassword(password)
         }

function calculeNbStart (iduser){
  
            return 5
}
export {loginUser,isValidetEmail,isValidetPassword,calculeNbStart}