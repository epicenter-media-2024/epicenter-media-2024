import React, { useState } from 'react'
import FacebookLogin from 'react-facebook-login'

const FacebookLoginButton = () => {
  const [userData, setUserData] = useState({})

  const responseFacebook = (response) => {
    setUserData({
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    })
  }

  return (
    <div>
      {userData.name ? (
        <div>
          <img src={userData.picture} alt={userData.name} />
          <p>Welcome, {userData.name}</p>
          <p>Email: {userData.email}</p>
        </div>
      ) : (
        <FacebookLogin
          appId="776347620657961"
          autoLoad={false}
          fields="name, email, picture"
          callback={responseFacebook}
        />
      )}
    </div>
  )
}

export default FacebookLoginButton