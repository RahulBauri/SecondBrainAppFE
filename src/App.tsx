import { Button } from './components/ui/Button';
import { PlusIcon } from './icons/PlusIcon';

function App() {
  return (
    <div>
      <Button
        variant={'primary'}
        size={'sm'}
        text={'Add Content'}
        onClick={() => {}}
        startIcon={<PlusIcon size='sm' />}
        endIcon={<PlusIcon size='lg' />}
      />
      <Button
        variant={'secondary'}
        size={'sm'}
        text={'Add Content'}
        onClick={() => {}}
      />
      <Button
        variant={'primary'}
        size={'md'}
        text={'Add Content'}
        onClick={() => {}}
      />
      <Button
        variant={'primary'}
        size={'lg'}
        text={'Add Content'}
        onClick={() => {}}
      />
    </div>
  );
}

export default App;
