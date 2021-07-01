import PropTypes from 'prop-types';
import Button from './Button';

import * as StyledComponent from './componentStyles/styledComponent';

import * as style from './componentStyles/buttonPanel.module.css';

const ButtonPanel = (props) => {
  const handleClick = (buttonName) => {
    props.clickHandler(buttonName);
  };

  return (
    <StyledComponent.FlexContainer>
      <div className={style.buttonPanelRow}>
        <Button clickHandler={handleClick} color="white" wide={false} name="AC" />
        <Button clickHandler={handleClick} color="white" name="+/-" />
        <Button clickHandler={handleClick} color="white" name="%" />
        <Button clickHandler={handleClick} color="orange" name="/" />
      </div>

      <div className={style.buttonPanelRow}>
        <Button clickHandler={handleClick} color="white" name="7" />
        <Button clickHandler={handleClick} color="white" name="8" />
        <Button clickHandler={handleClick} color="white" name="9" />
        <Button clickHandler={handleClick} color="orange" name="x" />
      </div>

      <div className={style.buttonPanelRow}>
        <Button clickHandler={handleClick} color="white" name="4" />
        <Button clickHandler={handleClick} color="white" name="5" />
        <Button clickHandler={handleClick} color="white" name="6" />
        <Button clickHandler={handleClick} color="orange" name="-" />
      </div>

      <div className={style.buttonPanelRow}>
        <Button clickHandler={handleClick} color="white" name="1" />
        <Button clickHandler={handleClick} color="white" name="2" />
        <Button clickHandler={handleClick} color="white" name="3" />
        <Button clickHandler={handleClick} color="orange" name="+" />
      </div>

      <div className={style.buttonPanelRow}>
        <Button clickHandler={handleClick} color="white" wide name="0" />
        <Button clickHandler={handleClick} color="white" name="." />
        <Button clickHandler={handleClick} color="orange" name="=" />
      </div>
    </StyledComponent.FlexContainer>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export { ButtonPanel as default };
