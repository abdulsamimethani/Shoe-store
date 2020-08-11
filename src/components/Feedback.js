import React from 'react';

function Feedback() {
    return (
        <div>
            <form action='http=//www.feedback.com/feed.php' method="Get">
                <div>
                    <input type='mail' placeholder='Enter Email' required/>
                </div>
                <br />
                <div>
                    <input placeholder="firstName" type='text' required/> 
                    <input placeholder="LastName" type='text' required/>
                </div>
                <hr />
                <h5>Give Feedback for our services and product so that we can improve our quality product and services according to your demand</h5>
                <textarea rows='10' cols='100' placeholder='Enter Your Feedback' required></textarea>
                <br />
                <input type='submit' />
            </form>
        </div>
    );
}

export default Feedback;