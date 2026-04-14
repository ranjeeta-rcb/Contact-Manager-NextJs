import LoginForm from '@/app/_components/LoginForm';
import styles from './login.module.css'; 
import Link from 'next/link';

const LoginPage = () => {
  return (
    <>
   <div className='max-w-md mx-auto bg-white p-8 rounded-lg shadow-md'>
    <h1 className='text-2xl font-bold md-6'>Login</h1>
    <LoginForm/>
    <p mt-4 text-center>
      Dont have an account? <Link  href="/register" className='text-blue-600 hover:underline'>Register</Link>
      </p> 
      
   </div>
   </>
  )
}

export default LoginPage