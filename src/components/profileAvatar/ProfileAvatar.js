import React from "react"
import './ProfileAvatar.scss';
import avatar from "./../../assets/avatar.png";

const ProfileAvatar = () => {
	return (
		<div className='profile-avatar-wrapper'>
			<img src={avatar} className='profile-avatar'></img>
		</div>
	)
};

export default ProfileAvatar;
