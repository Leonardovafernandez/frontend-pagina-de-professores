import './styles.css';
import Logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  return (
    <div className='container'>
      <form className='form-login'>
        <img src={Logo} alt="logo" />

        <div className='form-body'>
          <input type="text" placeholder='E-mail' />
          <input type="password" placeholder='Password' />
          <span>Não tem cadastro? Clique aqui!</span>
        </div>

        <button type='button' onClick={() => navigate('/main')}>
          Login
        </button>
      </form>
    </div>
  )
}

export default SignIn;