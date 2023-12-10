import './Login.css'
import useForm from '../../hooks/useForm';

export default function Login({loginSubmitHandler}) {
  const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {email: '', password: ''})

  return (
    <div className="wrapper">
      <div className="inner">
        <form action="" className='loginForm' onSubmit={onSubmit}>
          <h3>Login</h3>
          <p>
            Welcome to TomeTalks
          </p>
          <label className="form-group">
            <input type="text" className="form-control" required="" name='email' onChange={onChange} value={values.email}/>
            <span>Your Email</span>
            <span className="border" />
          </label>
          <label className="form-group">
            <input type="password" className="form-control" required="" name="password" onChange={onChange} value={values.password}/>
            <span htmlFor="">Your Password</span>
            <span className="border" />
          </label>

          <button>
            Submit
            <i className="zmdi zmdi-arrow-right" />
          </button>
        </form>
      </div>
    </div>
  );
}
