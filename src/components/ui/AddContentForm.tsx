import { Button } from './Button';
import { InputBox } from './InputBox';

export function AddContentForm() {
  return (
    <div className='mt-4'>
      <InputBox onChange={() => {}} placeholder='Content link' />
      <InputBox onChange={() => {}} placeholder='Content type' />
      <InputBox onChange={() => {}} placeholder='Content title' />
      <div className='flex justify-center mt-4'>
        <Button variant='primary' size='md' text='Submit' onClick={() => {}} />
      </div>
    </div>
  );
}
