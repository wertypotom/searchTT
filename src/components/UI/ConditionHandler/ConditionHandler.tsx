type Props = {
  condition: boolean;
  onSuccess: () => React.ReactNode;
  onError: () => React.ReactNode;
};

export const ConditionHandler = ({ condition, onError, onSuccess }: Props) => {
  {
    return condition ? onSuccess() : onError();
  }
};
