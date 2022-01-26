import ActorTable from './components/ActorTable';
import { useGetActors } from './hooks/actor';

const App = () => {
  const { actors } = useGetActors();

  return (
    <div className="container">
      <ActorTable actors={actors} />
    </div>
  );
};

export default App;
