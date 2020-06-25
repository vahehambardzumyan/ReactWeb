import React from 'react';
import './Auth.css'

const Auth = () => {
    return (
        <div className='Auth'>


            <div class="signupSection">
                <div class="info">
                    <h2>Stand by for rational and biometric scan</h2>
                    <i class="icon ion-ios-ionic-outline" aria-hidden="true"></i>
                    {/* <p>The Future Is Here</p> */}
                    <img className='scan'src="https://i.pinimg.com/originals/12/e8/a6/12e8a6a547e317524121f7a5d6084036.gif" />
           
                </div>
                <form action="#" method="POST" class="signupForm" name="signupform">
                    <h2>Sign Up</h2>
                    <ul class="noBullet">
                        <li>
                            <label for="username"></label>
                            <input type="text" class="inputFields" id="username" name="username" placeholder="Username" value="" oninput="return userNameValidation(this.value)" required />
                        </li>
                        <li>
                            <label for="password"></label>
                            <input type="password" class="inputFields" id="password" name="password" placeholder="Password" value="" oninput="return passwordValidation(this.value)" required />
                        </li>
                        <li>
                            <label for="email"></label>
                            <input type="email" class="inputFields" id="email" name="email" placeholder="Email" value="" required />
                        </li>
                        <li id="center-btn">
                            <input type="submit" id="join-btn" name="join" alt="Join" value="Join" />
                        </li>

                    </ul>


                </form>
            </div>

        </div>
    );
}

export default Auth;




