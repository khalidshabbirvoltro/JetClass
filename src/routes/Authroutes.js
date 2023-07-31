import LoginLayout from '../layouts/AuthLayouts/Login.vue'
import Login from '../components/AuthComponents/Login.vue'
import ForgetPasswordLayout from '../layouts/AuthLayouts/ForgetPassword.vue'
import ForgetPassword from '../components/AuthComponents/ForgetPassword.vue'
import VerficationEmail from '../components/AuthComponents/verificationEmail.vue'
import AccountVerified from '../components/AuthComponents/AccountVerified.vue'
const Authroutes=[

    {
        path:'/',
        name:'Login',
        component:LoginLayout,
        children:[
        {
            path:'login',
            name:'Lgoin',
            component:Login
        }
        ]
    },
    {
        path:'/',
        name:'ForgetPasswordLayout',
        component:ForgetPasswordLayout,
        children:[
            {
                path:"forgetpassword",
                name:'Forget Password',
                component:ForgetPassword
            },{
                path:'verificaiton_email',
                name:"Verification email",
                component:VerficationEmail
            }
            ,{
                path:'account_verified',
                name:"Account Verified",
                component:AccountVerified
            }
        ]
    },

   

]

export default Authroutes


