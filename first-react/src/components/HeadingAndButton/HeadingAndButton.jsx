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
//Styled Component
//props = properties object = übergebene Parameter an Komponente
/*
* props = {
    key 1: '',
    key2: '',
  }
*{key1, key2} ist die sogenannte Object Deconstruction. Ich nenne die Keys eines Objects und kann sie dann direkt verwenden
*/
const HeadingAndButton = ({ heading, text, buttonText, buttonClick }) => {
  const headingStyle = {
    fontSize: '12px',
  };
  return (
    //Binding eines Wertes an einen Tag
    <div>
      <h2 style={headingStyle}>{heading}</h2>
      <p>{text}</p>
      <button onClick={buttonClick}>{buttonText}</button>
    </div>
  );
};

export default HeadingAndButton;
