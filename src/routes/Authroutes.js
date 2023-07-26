import Login from '../layouts/AuthLayouts/Login.vue'
import ForgetPassword from '../layouts/AuthLayouts/ForgetPassword.vue'
import Test from '../pages/Test.vue'

const Authroutes=[

    {
        path:'/',
        name:'Login',
        component:Login
    },
    {
        path:'/forget_password',
        name:'ForgetPassword',
        component:ForgetPassword
    },
    {
        path:'/test',
        name:'Test',
        component:Test
    },
   

]

export default Authroutes


