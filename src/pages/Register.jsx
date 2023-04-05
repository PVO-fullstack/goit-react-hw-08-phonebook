import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/auth/auth-operations';
// import { signup } from 'redux/auth/auth-slice';

export const Register = () => {
  const dispatch = useDispatch();

  const hendlesubmit = e => {
    e.preventDefault();
    const name = e.currentTarget.elements.name.value;
    const email = e.currentTarget.elements.email.value;
    const password = e.currentTarget.elements.password.value;
    dispatch(registerUser({ name, email, password }));
    // console.log(`name: ${name}, email: ${email}, password: ${password}`);
    // register({ name, email, password });
  };

  // if (data.status === 'fulfilled') {
  //   console.log(data.data.token);
  //   setToken(data.data.token);
  // }

  // console.log(token);

  return (
    <div>
      <form onSubmit={hendlesubmit}>
        <label>
          Name
          <input type="text" name="name" />
        </label>
        <br />
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
