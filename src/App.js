import React, { useState } from "react";
import FacebookLogin from 'react-facebook-login';

function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [user, setUser] = useState({
    userID: "",
    email: "",
    picture: ""    
  })

  const responseFacebook = (response) => {
    const { userID, name, email, picture } = response

    console.log(response)
    setIsLogged(!!userID)

    setUser({
      userID,
      name,
      email,
      picture: picture.data.url
    })
  }

  const componentClicked = () => {
    // alert('Você está logado.')
  }

	return (
		<div className="container">
      {
        !isLogged ?
          <FacebookLogin
            appId={process.env.REACT_APP_CLIENT_ID}
            autoLoad={false}
            fields="name,email,picture"
            textButton="Entrar com Facebook"
            icon="fa-facebook"
            cssClass="my-facebook-button-class"
            onClick={componentClicked}
            callback={responseFacebook} 
          />
        :      
          <div className="center">
            <h1>Dados do usuário</h1>
            <img src={user.picture} alt={user.name} className="profile" />
            <p>Nome: {user.name}</p>
            <p>E-mail: {user.email}</p>
          </div>
      }
		</div>
	);
}

export default App;
