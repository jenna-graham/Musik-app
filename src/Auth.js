import { signInUser, signUpUser } from './services/fetch-utils';
import { useState } from 'react';
import { useDataContext } from './ContextProvider';

export default function Auth() {
  const { setUser } = useDataContext();
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  async function handleSignUp(e) {
    e.preventDefault();
    const user = await signUpUser(signUpEmail, signUpPassword);
    setUser(user);
  }

  async function handleSignIn(e) {
    e.preventDefault();
    const user = await signInUser(signInEmail, signInPassword);
    setUser(user);
  }

  return (
    <div className="auth">
      <form className="auth-form" onSubmit={handleSignIn}>
        <label>
          Email
          <input
            value={signInEmail}
            type="email"
            onChange={(e) => setSignInEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={signInPassword}
            onChange={(e) => setSignInPassword(e.target.value)}
          />
        </label>
        <button>Sign In</button>
      </form>
      <form className="auth-form" onSubmit={handleSignUp}>
        <label>
          Email
          <input
            value={signUpEmail}
            type="email"
            onChange={(e) => setSignUpEmail(e.target.value)}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
          />
        </label>
        <button>Sign Up</button>
      </form>
    </div>
  );
}
