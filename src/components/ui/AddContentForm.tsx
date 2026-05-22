import { useRef, useState } from 'react';
import { Button } from './Button';
import { InputBox } from './InputBox';
import axios from 'axios';
import { BACKEND_URL } from '../../config';
import { useNavigate } from 'react-router-dom';

const ContentType = {
  Youtube: 'youtube',
  Twitter: 'twitter',
} as const;

export function AddContentForm({
  open,
  onClose,
}: {
  open: boolean;
  onClose: (input: boolean) => void;
}) {
  const linkRef = useRef<HTMLInputElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState<String>(ContentType.Youtube);
  const navigate = useNavigate();

  async function addContent() {
    const link = linkRef.current?.value;
    const title = titleRef.current?.value;

    try {
      const resp = await axios.post(
        `${BACKEND_URL}/api/v1/content`,
        {
          link,
          type,
          title,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          withCredentials: true,
        },
      );

      alert(resp.data.message);
      onClose(!open);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='mt-4'>
      <InputBox placeholder='Content link' ref={linkRef} />
      <InputBox placeholder='Content title' ref={titleRef} />
      <h1 className='p-2 text-md font-bold mb-2'>Content Type:</h1>
      <div className='flex gap-2 justify-center mb-8'>
        <Button
          variant={type === ContentType.Youtube ? 'primary' : 'secondary'}
          size='md'
          text='Youtube'
          onClick={() => setType(ContentType.Youtube)}
        />
        <Button
          variant={type === ContentType.Twitter ? 'primary' : 'secondary'}
          size='md'
          text='Twitter'
          onClick={() => setType(ContentType.Twitter)}
        />
      </div>
      <div className='flex justify-center mt-4'>
        <Button
          variant='primary'
          size='md'
          text='Submit'
          onClick={addContent}
        />
      </div>
    </div>
  );
}
