import { SidebarItem } from './SidebarItem';
import { CiYoutube } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';
import { LogoIcon } from '../../icons/LogoIcon';

export function Sidebar() {
  return (
    <div className='w-76 border-r-2 h-screen bg-white pt-4'>
      <div className='text-3xl py-4 font-extrabold tracking-widest flex items-center gap-4'>
        <div className='text-[var(--color-purple-600)]'>
          <LogoIcon size='xlg' />
        </div>
        <div>Brainly</div>
      </div>
      <SidebarItem text='Tweets' icon={<FaXTwitter />} />
      <SidebarItem text='Videos' icon={<CiYoutube />} />
    </div>
  );
}
