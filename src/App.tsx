import { useState } from 'react';
import { Button } from './components/ui/Button';
import { Card } from './components/ui/Card';
import { CreateContentModal } from './components/ui/CreateContentModal';
import { Sidebar } from './components/ui/Sidebar';
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <CreateContentModal open={open} onClose={setOpen} />
      <div className='w-[90vw] h-screen my-0 mx-auto py-8'>
        <div className='flex justify-between items-center'>
          {/* Header */}
          <div className='p-2 font-bold text-2xl'>All Notes</div>
          <div className='flex gap-4'>
            <Button
              variant={'secondary'}
              size={'lg'}
              text={'Share Brain'}
              onClick={() => {}}
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
        <div className='grid grid-cols-4 gap-2 mt-8'>
          {/* Cards */}
          <Card
            title='
The Worst SWAT Hostage Rescue ft. Jesse & Omie'
            link='https://www.youtube.com/watch?v=52AzpksaMKs'
            type='youtube'
          />
          <Card
            title='
Hey 
@grok
 remove the worst person'
            link='https://x.com/ElonMuskAOC/status/2055286489911853063'
            type='twitter'
          />
        </div>
        <div>
          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default App;
