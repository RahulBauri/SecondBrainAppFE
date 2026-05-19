import { Button } from '../components/ui/Button';
import { InputBox } from '../components/ui/InputBox';

export const Signup = () => {
  return (
    <div className='h-screen w-screen bg-gray-200 flex justify-center items-center'>
      <div className='bg-white rounded border min-win-48 w-100 h-100 p-4'>
        <div className='font-bold text-xl text-center mb-4'>Signup</div>
        <div>
          <InputBox placeholder='Username' onChange={() => {}} />
          <InputBox placeholder='Password' onChange={() => {}} />
          <div className='flex justify-center mt-4 p-2'>
            <Button
              variant='primary'
              size='md'
              text='Signup'
              onClick={() => {}}
              fullWidth={true}
              loading={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
