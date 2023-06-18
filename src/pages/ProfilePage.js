import React from "react"
import ProfileHeader from '../components/header/ProfileHeader';
import ProfileAvatar from '../components/profileAvatar/ProfileAvatar';
import ProfileInfo from '../components/profileInfo/ProfileInfo';
import Appointments from '../components/appointments/Appointments';

const ProfilePage = () => {
	return (
		<div>
			<ProfileHeader/>
			<ProfileAvatar/>
			<ProfileInfo/>
			<Appointments/>
		</div>
	)
};

export default ProfilePage;
