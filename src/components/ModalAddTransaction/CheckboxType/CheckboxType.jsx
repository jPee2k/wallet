import React from 'react';
import PropTypes from 'prop-types';
import { Field, useField } from 'formik';
import { ReactComponent as Arrow } from '../../../assets/images/icons/arrow.svg';
import styles from './styles.module.scss';

const CheckboxType = ({ name = 'type', types }) => {
  const [, meta, helpers] = useField(name);
  const { value } = meta;
  const { setValue } = helpers;

  const clickHandler = () => {
    setValue((value === types.dec) ? types.inc : types.dec);
  };

  const { block, checkbox, input, label, area, icon } = styles;
  return (
    <div className={block}>
      <span>{types.inc}</span>
      <div className={checkbox}>
        <Field className={input} type="checkbox" name={name} value={value} id={checkbox}
          onChange={clickHandler}
          checked={value === types.dec}
        />
        <label className={label} htmlFor={checkbox}>
          <span className={area}><Arrow className={icon}/></span>
        </label>
      </div>
      <span>{types.dec}</span>
    </div>
  );
};

CheckboxType.propTypes = {
  name: PropTypes.string,
  types: PropTypes.objectOf(PropTypes.string),
};

export default CheckboxType;
