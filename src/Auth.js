import { addUserName, signInUser, signUpUser } from './services/fetch-utils';
import { useState } from 'react';
import { useDataContext } from './ContextProvider';

export default function Auth() {
  const { setUser, setUserProfile } = useDataContext();
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');
  const [userNameInput, setUserNameInput] = useState('');

  

  async function handleSignUp(e) {
    e.preventDefault();
    const user = await signUpUser(signUpEmail, signUpPassword);
    const userName = await addUserName(userNameInput);
    setUserProfile(userName);
    setUser(user);
  }

  async function handleSignIn(e) {
    e.preventDefault();
    const user = await signInUser(signInEmail, signInPassword);
    const userName = await addUserName(userNameInput);
    setUserProfile(userName);
    setUser(user);
  }

  return (
    <div>
      <form onSubmit={handleSignIn}>
        <label>Email
          <input value={signInEmail} type="email" onChange={(e) => setSignInEmail(e.target.value)}/>
        </label>
        <label>Password
          <input type="password" value={signInPassword} onChange={(e) => setSignInPassword(e.target.value)}/>
        </label>
        <button>Sign In</button>
      </form>
      <form onSubmit={handleSignUp}>
        <label>UserName</label>
        <input value={userNameInput} onChange={(e) => setUserNameInput(e.target.value)}/>
        <label>Email
          <input value={signUpEmail} type="email" onChange={(e) => setSignUpEmail(e.target.value)}/>
        </label>
        <label>Password
          <input type="password" value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)}/>
        </label>
        <button>Sign Up</button>
          
      </form>
    </div>
  );
}
