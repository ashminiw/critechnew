import React from 'react'
import PropTypes from 'prop-types';

function HeaderIcon( {tab} ) {
	return (
		<div className='flex items-center cursor-pointer md:px-10 
		sm:h-14 md:hover:bg-green-100 rounded-xl active:border-b-4 active:border-green-600 text-green-800 text-3xl'>
			<h1 className='flex items-center flex-wrap place-items-center'>{tab}</h1>
		</div>
	)
}

HeaderIcon.propTypes = {
	tab: PropTypes.string.isRequired,
};
export default HeaderIcon