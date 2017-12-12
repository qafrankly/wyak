import React, { Component, PropTypes } from 'react';
import Image from 'components/Image';

class ModuleDemo extends Component {

  render(){
	  
    return (
      <div className='FranklyModulesDemo'>
	<h2 className='demo_text'>{this.props.text}</h2>
	<p>This text is not editable!</p>
	<Image width={280} src={'http://franklydemo.images.worldnow.com/images/15208935_G.jpeg'} alt={'alt'} />
      </div>
    );
	  
  }
}

export default ModuleDemo;