import react from 'react';
import Card from '../components/Card';

const robot = ({ robots }) => {
	return (
		<div>
		   {
			robots.map((user, index) => {
				return( 
					<Card 
					key={index} 
					id={user.id} 
					name={user.name} 
					username={user.username} 
					email={user.email} 
					/>
				); 
	        })
	    }
	    </div>
    );
}


export default robot;	