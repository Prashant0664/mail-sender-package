const Sender = require("./mailsender");
/**
 * Mail Sender Main Function
 *
 * @param {string} password app password of sender mail id.
 * @param {string} mail sender mail id.
 * @param {string} cmail receiver mail id.
 * @param {string} subject subject of mail body.
 * @param {string} content content of mail id in HTML, enclosed in string.
 * @param {string} service Type of Service used(default is google).
 * @return {boolean} return 1 if successful otherwise 0; 
 */
const SendMail=async (password,mail,cmail,subject,content,service="google")=>{
    try {
        Sender(password,mail,cmail,subject,content,service);
        return 1;
    } catch (error) {
        console.log(error)
        return 0;
    }
}
// const trys=async()=>{
// 
    // await SendMail("mlguwczscwnikpnt","doraemonarea123987@gmail.com","prashant201103@gmail.com","Hii","this is testing message")
// }
// console.log("success");
// trys();
module.exports=SendMail