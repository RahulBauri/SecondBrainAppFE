interface InputProps {
  ref?: any;
  placeholder: string;
}

export function InputBox({ ref, placeholder }: InputProps) {
  return (
    <div className='w-full'>
      <input
        type='text'
        className='px-4 py-2 border rounded m-2 w-[95%]'
        ref={ref}
        placeholder={placeholder}
      />
    </div>
  );
}
