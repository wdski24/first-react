/*
** React Function Component mit Export
import React from 'react'

function HeadingAndButton() {
  return (
    <div>HeadingAndButton</div>
  )
}

export default HeadingAndButton

************************************ Unterschied: Init zur Laufzeit

** React Arrow Function Component
import React from 'react'

const HeadingAndButton = () => {
  return (
    <div>
      
    </div>
  )
}

export default HeadingAndButton
*/

const HeadingAndButton = () => {
  return (
    <div>
      <h2>HeadingAndButton</h2>
      <p>Lorem Ipsum alsdkjflaöksdjflökasjdcmlökjadäsojf</p>
      <button>Button</button>
    </div>
  );
};

export default HeadingAndButton;
