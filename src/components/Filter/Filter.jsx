import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InputFilter, LabelFilter } from './Filter.styled';
import { filtredByName } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleOnChange = e => {
    dispatch(filtredByName(e.target.value));
  };

  return (
    <LabelFilter>
      Finds contacts by name
      <InputFilter type="text" value={filter} onChange={handleOnChange} />
    </LabelFilter>
  );
};
