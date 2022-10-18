import React from "react";


const Card = ({name, username, email, id}) => {
    return(
        <div className='bg-blue dib pa3 ma2 grow bw2 shadow-5'>
            <img alt='bla bla bla' src={`https://robohash.org/${id}`} />
            <div>
	            <h1 className="tc">{name}</h1>
	            <p className='tc f2'>{username}</p>
	            <p className='tc f3'>{email}</p>
            </div>
        </div>
    );
}

export default Card;


