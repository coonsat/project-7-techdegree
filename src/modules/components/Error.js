import React from 'react';

//Render error component if no valid routes are found
const Error = () => {
    return (
        <div>
            <h2>Error 404</h2>
            <p>The location you were searching for doesn't exist</p>            
        </div>
    );
}

export default Error
