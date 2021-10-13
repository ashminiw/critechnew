import React from 'react'
import PropTypes from 'prop-types';

function FooterIcons({foot}) {
	//load props here
	return (
		<div className='flex items-center cursor-pointer md:px-10 
		sm:h-14 md:hover:bg-green-100 rounded-xl active:border-b-4 active:border-green-600 '>
			<p className='flex items-center flex-wrap'>{foot}</p>	
		</div>
	)
	
}

FooterIcons.propTypes = {
	foot: PropTypes.string.isRequired,
};
export default FooterIcons
