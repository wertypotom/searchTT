import styles from './Select.module.css';

type Props = {
  onChange: (value: 'A-Z' | 'Z-A') => void;
  options: any[];
  value: 'A-Z' | 'Z-A' | null;
};

export const Select = ({ onChange, options, value }: Props) => {
  return (
    <select
      className={styles.select}
      value={value || ''}
      onChange={(e) => onChange(e.target.value as 'A-Z' | 'Z-A')}
    >
      <option disabled value=''>
        Select sort type:
      </option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};
