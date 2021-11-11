import React from 'react';
import './InfoNBA.css';


const InfoNBA = ({infoNbaProp}) => {
    let info = '';
    if (infoNbaProp && infoNbaProp.home_team) {
        return ( 
            <div class="alert alert-success">
                <h3>Los resultados de las fecha NBA son:</h3>
                <p> {infoNbaProp.home_team.city}  [{infoNbaProp.home_team_score}] versus  {infoNbaProp.visitor_team.city}  [{infoNbaProp.visitor_team_score}]</p>  
            </div>
         );
    }
    return ( 
        <div class="alert alert-success" role="alert">
           
        </div>
     );

}
 
export default InfoNBA;