import Lottie from 'lottie-react'
import lottie from './../assets/login.json'
import useAuth from '../Hooks/useAuth'

const SignIn = () => {

  const{ UserLogin } = useAuth()

  const AddHandel= e=>{
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value
    const result = {email,password}
    console.log(result);

    UserLogin(email,password)
    .then(result => {
      console.log('User-Login',result.user);
      
    })
    .catch(error=> {
      console.error(error)
      
    })
  }


  return (
   <div>
        <div className="hero bg-base-200 min-h-screen w-[80%] mx-auto">
          <div className="hero-content flex-col  lg:flex-row-reverse">
            <div className="text-center w-1/2 lg:text-left ml-7">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <Lottie animationData={lottie} loop={true} className='w-[300px]'></Lottie>
            </div>
            <div className="card w-1/2 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                 <form onSubmit={AddHandel}>
                     <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn btn-neutral mt-4">Login</button>
                 </form>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SignIn
