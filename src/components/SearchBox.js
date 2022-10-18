import react from "react";


const searchbox = ({searchChange}) => {
    return ( 
      <div>
        <input className="ma3 pa2 b--green bg-lightest-blue"
          type='search' 
          placeholder='enter your robot' 
          onChange={searchChange}
        />  
      </div>     
    );
}

export default searchbox;