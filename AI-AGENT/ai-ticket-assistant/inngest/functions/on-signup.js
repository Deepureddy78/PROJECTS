import { inngest } from "../client.js"; 
import { User } from "../../models/user.js";

export const onUserSignup =inmgest.createFunction(
    {id: "on-user-signup", retries:2},
    {event: "user/signup"},
    async ({event, step}) => {
        try{
            const {email} = event.data
            await step.run("get-user-email",async()=>{
                const userObject=await User.findOne({email})
                if(!userObject){
                    throw new NonRetriableError("User no loger exist in database")

                }
                return userObject
            })

            await step.run("send-welcome-email",async()=>{
                const subject ='Welcome to the app'
                const message ="Hi, \n\n Thanks for signing up. We're glad to have you onboard!"
                await sendMail(email, subject, message)
            })
            
            return{success:true}
        }catch(error){
            console.error("Error in onUserSignup function:", error);
            return {success:false};
        }
    }
)