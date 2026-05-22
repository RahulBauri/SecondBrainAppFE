import { CrossIcon } from '../../icons/CrossIcon';
import { AddContentForm } from './AddContentForm';

export function CreateContentModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: (input: boolean) => void;
}) {
  return (
    <div>
      {open && (
        <div className='w-screen h-screen bg-black/70 fixed top-0 left-0 flex justify-center items-center'>
          <div className='w-100 h-100 bg-white p-4 rounded'>
            {/* Header */}
            <div className='flex justify-between items-center p-2'>
              <div className='font-bold text-xl'>Add Content</div>
              <div className='cursor-pointer' onClick={() => onClose(!open)}>
                <CrossIcon size='lg' />
              </div>
            </div>

            {/* FORM */}
            <div>
              <AddContentForm open={open} onClose={onClose} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
