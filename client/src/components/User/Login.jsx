import './Login.css'

export default function Login() {
  return (
    <div className="wrapper">
      <div className="inner">
        <form action="" className='loginForm'>
          <h3>Login</h3>
          <p>
            Welcome to TomeTalks
          </p>
          <label className="form-group">
            <input type="text" className="form-control" required="" />
            <span>Your Name</span>
            <span className="border" />
          </label>
          <label className="form-group">
            <input type="password" className="form-control" required="" />
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
