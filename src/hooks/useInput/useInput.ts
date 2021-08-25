import React, { useCallback, useState } from 'react';

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };
  const onReset = useCallback(() => setValue(initialValue), [initialValue]);
  return { value, onChange, onReset };
};

export default useInput;
