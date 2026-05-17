export function InputBox({
  onChange,
  placeholder,
}: {
  onChange: () => void;
  placeholder: string;
}) {
  return (
    <div className='w-full'>
      <input
        type='text'
        className='px-4 py-2 border rounded m-2 w-[95%]'
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}
