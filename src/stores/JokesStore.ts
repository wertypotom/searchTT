import { makeAutoObservable } from 'mobx';
import { debounce } from '../utils/debounce';
import axios from 'axios';
import { TJokes } from '../types/jokes';

type FetchJokesResponse = {
  result: TJokes[];
  total: number;
};

class JokesStore {
  public searchQuery: string = '';
  public jokes: TJokes[] = [];
  public areJokesLoading = false;
  public error = '';
  public jokesSortValue: 'A-Z' | 'Z-A' | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  public handleInputChange(query: string) {
    this.searchQuery = query;

    if (!query || query.length < 4) return;

    this.fetchJokesByQuery(query);
  }

  public clearInputFields() {
    this.searchQuery = '';
  }

  public setJokesSort(value: 'A-Z' | 'Z-A') {
    console.log(value);
    this.jokesSortValue = value;
  }

  public get getSortedJokes(): TJokes[] {
    switch (this.jokesSortValue) {
      case 'A-Z':
        return [...this.jokes].sort((a, b) => a.value.localeCompare(b.value));
      case 'Z-A':
        return [...this.jokes].sort((a, b) => b.value.localeCompare(a.value));
      default:
        return this.jokes;
    }
  }

  private fetchJokesByQuery = debounce(async (query: string) => {
    try {
      this.areJokesLoading = true;
      this.error = '';

      const { data } = await axios.get<FetchJokesResponse>(
        `https://api.chucknorris.io/jokes/search?query=${query}`
      );

      this.jokes = data.result;
      this.areJokesLoading = false;
    } catch (err) {
      this.error = (err as Error).message;
    } finally {
      this.areJokesLoading = false;
    }
  }, 500);
}

export default new JokesStore();
