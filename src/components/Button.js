import PropTypes from 'prop-types';
import styled from 'styled-components';
import * as style from './componentStyles/button.module.css';

const Button = (props) => {
  const {
    clickHandler, color, wide, name,
  } = props;

  const handleClick = () => {
    clickHandler(name);
  };

  const StyleButton = styled.button`
    background: ${(props) => (props.color === 'white' ? 'white' : 'orange')};
    width: ${(props) => (props.wide ? '50%' : '25%')};
  `;

  return (
    <StyleButton className={style.calculatorButton} type="submit" onClick={handleClick} color={color} wide={wide}>
      {name}
    </StyleButton>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
  color: PropTypes.string,
  wide: PropTypes.bool
};

Button.defaultProps = {
  name: 'Some Button',
};

export { Button as default };
