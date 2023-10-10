const Sender = require("./mailsender");

const SendMail=async (password,mail,cmail,subject,content)=>{
    try {
        await Sender(password,mail,cmail,subject,content)
    } catch (error) {
        console.log(error)
    }
}
const trys=async()=>{

    await SendMail("mlguwczscwnikpnt","doraemonarea123987@gmail.com","prashant201103@gmail.com","Hii","this is testing message")
}
console.log("success");
trys();
module.exports=SendMail