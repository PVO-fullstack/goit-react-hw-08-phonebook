import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/auth-operations';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const password = e.currentTarget.elements.password.value;
    const email = e.currentTarget.elements.email.value;
    dispatch(logInUser({ email, password }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
