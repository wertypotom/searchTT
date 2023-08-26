import React from 'react';
import { observer } from 'mobx-react-lite';
import style from './JokeCardContainer.module.css';
import { JokeCardItem } from '../JokeCardItem/JokeCardItem';
import { useStores } from '../../../hooks/useStore';

export const JokesContainer = observer(() => {
  const { jokesStore } = useStores();

  return (
    <div className={style['joke-flex']}>
      {jokesStore.searchQuery &&
        jokesStore.getSortedJokes.map((joke) => (
          <JokeCardItem key={joke.id} joke={joke} />
        ))}
    </div>
  );
});
