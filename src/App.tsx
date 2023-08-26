import { observer } from 'mobx-react-lite';
import { Input } from './components/UI/Input/Input';
import { useStores } from './hooks/useStore';
import { Loader } from './components/UI/Loader/Loader';
import styles from './App.module.css';
import { JokesContainer } from './components/JokeCard/JokeCardContainer/JokeCardContainer';
import { ConditionHandler } from './components/UI/ConditionHandler/ConditionHandler';
import { useCallback } from 'react';
import { Select } from './components/UI/Select/Select';

export const App = observer(() => {
  const { jokesStore } = useStores();

  const renderJokesLength = useCallback(() => {
    return (
      <span>
        {jokesStore.searchQuery &&
          `Found jokes: ${jokesStore.jokes.length ?? ''}`}
      </span>
    );
  }, [jokesStore.jokes.length, jokesStore.searchQuery]);

  const renderJokesError = useCallback(() => {
    return <span>No Jokes found. Please search for something else !</span>;
  }, []);

  const sortJokes = (sortBy: 'A-Z' | 'Z-A') => {
    jokesStore.setJokesSort(sortBy);
  };

  return (
    <div className={styles['app-container']}>
      <div className={styles['app-search']}>
        <Input
          value={jokesStore.searchQuery}
          placeholder='Find joke...'
          onChange={(event) => jokesStore.handleInputChange(event.target.value)}
          clearInputField={() => jokesStore.clearInputFields()}
        />
        <Select
          value={jokesStore.jokesSortValue}
          onChange={(value: 'A-Z' | 'Z-A') => sortJokes(value)}
          options={[
            { value: 'A-Z', name: 'By Joke A-B' },
            { value: 'Z-A', name: 'By Joke B-A' },
          ]}
        />
      </div>
      {jokesStore.areJokesLoading && <Loader />}
      <ConditionHandler
        condition={!jokesStore.error}
        onSuccess={() => <></>}
        onError={renderJokesError}
      />
      <ConditionHandler
        condition={!!jokesStore.searchQuery}
        onSuccess={renderJokesLength}
        onError={() => <></>}
      />
      <JokesContainer />
    </div>
  );
});
