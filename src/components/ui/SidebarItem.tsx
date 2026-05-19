import type { ReactElement } from 'react';

export const SidebarItem = ({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) => {
  return (
    <div className='flex items-center justify-start gap-4 my-8 p-2 mx-8 text-2xl font-semibold tracking-wider cursor-pointer hover:bg-[var(--color-gray-100)] rounded'>
      <div>{icon}</div>
      <div>{text}</div>
    </div>
  );
};
