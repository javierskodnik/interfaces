import React from 'react';

const InfoNBA = ({infoNbaProp}) => {
    return ( 
        <div
            style={
                {
                    margin:"1rem",
                    padding:"3rem",
                    borderRadius:"9rem",
                    backgroundColor:"#ffffff",
                    maxWidth:"800px",
                    color:"black",
                    textEmphasisColor:"black"
                }
            }>
            <p>
                {infoNbaProp.id} - {infoNbaProp.date}
            </p>
        </div>
     );
}
 
export default InfoNBA;