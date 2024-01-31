import React from 'react';
import { useSelector } from 'react-redux'
import VueTest from './VueTest';

const Users = () => {

	const users = useSelector((state) => state.tests.users)
	

	

	return (
		<div style={{display:"flex", flexWrap: 'wrap'}}>
			{users && users.length >0 && users.map((user, key) => (
				<div key={key} style={{width:"30%", marginTop: '12px'}}>
					<VueTest user={user} />
				</div>
			))}
		</div>
	);
}

export default Users;
