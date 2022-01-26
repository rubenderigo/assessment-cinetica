import ActorTable from './components/ActorTable';
import { useActors } from './hooks/actor';

const App = () => {
  const { actors, isLoading, error } = useActors();

  return (
    <div className="container">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error.message}</p>}
      {!isLoading && !error && <ActorTable actors={actors} />}
    </div>
  );
};

export default App;
