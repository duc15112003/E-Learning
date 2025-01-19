import Login from './component/View/login/login'
import Register from './component/View/register/register'
import Forgot_password from "./component/View/forgot_password/forgot_password";
import CourseList from './component/View/CourseCard/CourseCard';
import BlogCard from './component/View/Blog/blog';
const publicRoutes = [
    {path: '/login', component: Login}, 
    {path: '/register', component: Register},
    {path: '/forgotpassword', component: Forgot_password},
    {path: '/', component: CourseList},
    {path:'/blog',component: BlogCard}
];

export {publicRoutes};