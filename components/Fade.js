import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

const Fade = (props) => {
  const { childComponent } = props;
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setShowMessage(true);
  }, []);

  return (
    <>
      <CSSTransition
        in={showMessage}
        timeout={800}
        classNames="fade"
        unmountOnExit
      >
        {childComponent}
      </CSSTransition>
    </>
  );
};

export default Fade;
