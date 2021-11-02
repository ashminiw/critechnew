import React from 'react'

function ProfilePic({ img, caption}) {

	return (
		<div>
			<img src={img} className="object-cover w-full" alt="" />
			{/* caption */}
			<p>{caption}</p>

			
		</div>
	)
}

export default ProfilePic
