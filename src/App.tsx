import './App.css';
import react from './assets/react.svg';

function App() {
  return (
    <>
      <div className=" input__container">
        <img src={react} alt="logo" className="logo" />
        <h2>Log in user</h2>

        <div>
          <input type="email" placeholder="Email " />
        </div>
        <div>
          <input type="password" placeholder="Password" />
        </div>
        <div>
          <button>Log in</button>
        </div>
        <div>
          <a href="#">Forget Password ?</a>
        </div>

        <p>
          Dont Have Account ?{' '}
          <a href="#">
            {' '}
            <code> Create account here</code>
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
