import { useRef } from 'react';
import axios from 'axios';
import { Button } from '../components/ui/Button';
import { InputBox } from '../components/ui/InputBox';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';

export const Signin = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      const resp = await axios.post(
        `${BACKEND_URL}/api/v1/signin`,
        {
          username,
          password,
        },
        { withCredentials: true },
      );

      const data = resp.data;
      const { message, token } = data;
      alert(message);
      // alert(token);

      localStorage.setItem('token', token);
      navigate('/dashboard');
    } catch (error: any) {
      if (error.response?.status === 411) {
        const errors = error.response.data.errors.map((error: any) => {
          return alert(error.message);
        });
        // console.log(errors);
      }
      if (error.response?.status === 403) {
        alert(error.response.data.message);
        // console.log(error.response.data.message);
      }
    }
  }

  return (
    <div className='h-screen w-screen bg-gray-200 flex justify-center items-center'>
      <div className='bg-white rounded border min-win-48 w-100 h-100 p-4'>
        <div className='font-bold text-xl text-center mb-4'>Signin</div>
        <div>
          <InputBox placeholder='Username' ref={usernameRef} />
          <InputBox placeholder='Password' ref={passwordRef} />
          <div className='flex justify-center mt-4'>
            <Button
              variant='primary'
              size='md'
              text='Signin'
              onClick={signin}
              fullWidth={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
