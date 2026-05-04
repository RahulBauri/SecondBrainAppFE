import { Button } from './components/ui/Button';

function App() {
  return (
    <div>
      <Button
        variant={'primary'}
        size={'sm'}
        text={'Add Content'}
        onClick={() => {}}
        startIcon='+'
        endIcon='-'
      />
    </div>
  );
}

export default App;
