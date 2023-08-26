import { TJokes } from '../../../types/jokes';
import { formatStringToDate } from '../../../utils/formatStringToDate';
import { openNewTabWith } from '../../../utils/navigateTo';
import styles from './JokeCardItem.module.css';

type Props = {
  joke: TJokes;
};

export const JokeCardItem = ({ joke }: Props) => {
  return (
    <div className={styles['jokes-container']}>
      <div className={styles['jokes-title']}>{joke.value}</div>

      <div className={styles['jokes-data']}>
        <div
          onClick={() => openNewTabWith(joke.url)}
          className={styles['jokes-data_id']}
        >
          {joke.id}
        </div>
        <div>{formatStringToDate(joke.created_at)}</div>
      </div>
    </div>
  );
};
