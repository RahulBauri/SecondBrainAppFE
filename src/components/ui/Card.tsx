import { DeleteIcon } from '../../icons/DeleteIcon';
import { ShareIcon } from '../../icons/ShareIcon';
import { CiYoutube } from 'react-icons/ci';
import { FaXTwitter } from 'react-icons/fa6';

interface CardProps {
  title: string;
  link: string;
  type: 'twitter' | 'youtube';
}

export const Card = (props: CardProps) => {
  return (
    <div className='bg-white rounded-md border border-gray-200 w-104 max-w-120 p-4'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-2'>
          <div className='text-gray-500'>
            {props.type === 'youtube' && <CiYoutube />}
            {props.type === 'twitter' && <FaXTwitter />}
          </div>
          <span className='font-medium p-2 mr-2'>{props.title}</span>
        </div>
        <div className='flex items-center gap-4'>
          <div className='text-gray-500'>
            <a href={props.link} target='_blank'>
              <ShareIcon size='md' />
            </a>
          </div>
          <div className='text-gray-500 cursor-pointer'>
            <DeleteIcon size='md' />
          </div>
        </div>
      </div>
      <div className='pt-4'>
        {props.type === 'youtube' && (
          <iframe
            className='w-full h-full'
            width='560'
            height='315'
            src={props.link.replace('watch', 'embed').replace('?v=', '/')}
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          />
        )}
        {props.type === 'twitter' && (
          <blockquote className='twitter-tweet w-full h-full'>
            <a href={props.link}></a>
          </blockquote>
        )}
      </div>
    </div>
  );
};
