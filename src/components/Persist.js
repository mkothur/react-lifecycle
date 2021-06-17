import React, { useEffect, useState } from 'react';

const Persist = () => {
  const [checkedVal, setChecked] = useState(false);

  const handleCheck = (e) => {
    setChecked(!checkedVal);
  };

  useEffect(() => {
    setChecked(JSON.parse(localStorage.getItem('my-check-value')));
  }, []);

  useEffect(() => {
    localStorage.setItem('my-check-value', JSON.stringify(checkedVal));
  }, [checkedVal]);

  return (
    <div>
      <p>Checkbox: {checkedVal ? 'checked' : 'Unchecked'}</p>
      <input onChange={handleCheck} type='checkbox' />
    </div>
  );
};

export default Persist;
