import PropTypes from 'prop-types';

import * as StyledComponent from './componentStyles/styledComponent';
import * as styles from './componentStyles/display.module.css';

const Display = (props) => {
  const { total, next } = props;

  return (
    <StyledComponent.FlexContainer className={styles.calculatorDisplay}>
      <h4 className="display">
        {total + next }
      </h4>
    </StyledComponent.FlexContainer>
  );
};

Display.propTypes = {
  total: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
};

export default Display;
