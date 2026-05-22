import { useEffect, useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { CreateContentModal } from '../components/ui/CreateContentModal';
import { Sidebar } from '../components/ui/Sidebar';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import axios from 'axios';
import { BACKEND_URL } from '../config';

export function Dashboard() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState([]);

  async function fetchContent() {
    const resp = await axios.get(`${BACKEND_URL}/api/v1/content`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      withCredentials: true,
    });

    console.log(resp.data);

    setContent(resp.data.content);
  }

  useEffect(() => {
    fetchContent();
  }, [content]);

  return (
    <div>
      <CreateContentModal open={open} onClose={setOpen} />
      <div className='w-[90vw] h-screen my-0 mx-auto py-8 grid grid-cols-[auto_1fr] gap-4'>
        <div>
          {/* Sidebar */}
          <Sidebar />
        </div>
        <div className='min-h-screen bg-[var(--color-gray-100)] p-4'>
          <div className='flex justify-between items-center'>
            {/* Header */}
            <div className='p-2 font-bold text-2xl'>All Notes</div>
            <div className='flex gap-4'>
              <Button
                variant={'secondary'}
                size={'lg'}
                text={'Share Brain'}
                onClick={async () => {
                  const resp = await axios.post(
                    `${BACKEND_URL}/api/v1/brain/share`,
                    {
                      share: true,
                    },
                    {
                      headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                      },
                      withCredentials: true,
                    },
                  );

                  const shareUrl = `http://localhost:5173/share/${resp.data.hash}`;
                  alert(shareUrl);
                }}
                startIcon={<ShareIcon size='lg' />}
              />
              <Button
                variant={'primary'}
                size={'lg'}
                text={'Add Content'}
                onClick={() => {
                  setOpen(true);
                }}
                startIcon={<PlusIcon size='lg' />}
              />
            </div>
          </div>
          <div className='grid grid-cols-3 gap-2 mt-8'>
            {/* Cards */}
            {content.map((singleContent) => {
              const {
                _id,
                link,
                type,
                title,
                userId: { username },
              } = singleContent;

              // console.log(link, type, title, username);

              return <Card title={title} link={link} type={type} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
