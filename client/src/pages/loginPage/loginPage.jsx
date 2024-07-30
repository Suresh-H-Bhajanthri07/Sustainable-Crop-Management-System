// import React, { useState } from 'react';
// import './loginForm.css';
// import axios from 'axios';
// import { useCookies } from 'react-cookie';
// import { useNavigate } from 'react-router-dom';
// import { Button } from '@mui/material';

// import { useTranslation } from 'react-i18next';

// function LoginForm() {
//   const { t } = useTranslation();

//   const [email, setEmail] = useState(undefined);
//   const [password, setPassword] = useState(undefined);
//   const navigate = useNavigate();
//   const [cookies, setCookies] = useCookies(['user']);
//   const handleSubmit = (event) => {
//     if (
//       email !== '' &&
//       email !== undefined &&
//       password !== '' &&
//       password !== undefined
//     ) {
//       event.preventDefault();
//       axios({
//         method: 'POST',
//         url: 'http://localhost:8081/login',
//         data: {
//           email: `${email}`,
//           password: `${password}`,
//         },
//       })
//         .then((res) => {
//           console.log(res);
//           if (res.status == 200) {
//             const id = res.data.id;
//             const expires = new Date();
//             expires.setTime(expires.getTime() + 7 * (1000 * 60 * 60 * 24));
//             setCookies('id', res.data.id, { path: '/', expires });
//             setCookies('mail', email, { path: '/', expires });
//             navigate(`/dashboard/${id}`);
//           } else {
//             alert('Either email/password wrong');
//           }
//         })
//         .catch((err) => {
//           alert('Some error occurred. Please try again after some time');
//         });
//     }

//   };
//   return (
//     <div className="loginForm">
//       <div className="header-text">{t('validation.Login Form')}</div>
//       <form method="POST">
//         <input
//           onChange={(event) => {
//             setEmail(event.target.value);
//           }}
//           placeholder={t('validation.Your email..')}
//           type="email"
//           required
//         />
//         <input
//           onChange={(event) => {
//             setPassword(event.target.value);
//           }}
//           placeholder={t('validation.Your password..')}
//           type="password"
//           required
//         />
//         <Button
//           onClick={(event) => {
//             handleSubmit(event);
//           }}
//           type="submit"
//           id="button"
//           variant="contained"
//         >
//           {t('validation.login')}
//         </Button>

//         <span>
//           {t('validation.Or Click here to')}{' '}
//           <a href="/register">{t('validation.Register')}</a>
//         </span>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;

import React, { useState } from 'react';
import './loginForm.css';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

function LoginForm() {
  const { t } = useTranslation();
  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(['user']);
  
  const handleSubmit = (event) => {
    if (email !== '' && email !== undefined && password !== '' && password !== undefined) {
      event.preventDefault();
      axios({
        method: 'POST',
        url: 'http://localhost:8081/login',
        data: {
          email: `${email}`,
          password: `${password}`,
        },
      })
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            const id = res.data.id;
            const expires = new Date();
            expires.setTime(expires.getTime() + 7 * (1000 * 60 * 60 * 24));
            setCookies('id', res.data.id, { path: '/', expires });
            setCookies('mail', email, { path: '/', expires });
            navigate(`/selectiontab/${id}`);
          } else {
            alert('Either email/password wrong');
          }
        })
        .catch((err) => {
          alert('Some error occurred. Please try again after some time');
        });
    }
  };

  return (
    <div className="loginForm">
      <div className="header-text">{t('validation.Login Form')}</div>
      <form method="POST">
        <input
          onChange={(event) => setEmail(event.target.value)}
          placeholder={t('validation.Your email..')}
          type="email"
          required
        />
        <input
          onChange={(event) => setPassword(event.target.value)}
          placeholder={t('validation.Your password..')}
          type="password"
          required
        />
        <Button
          onClick={(event) => handleSubmit(event)}
          type="submit"
          id="button"
          variant="contained"
        >
          {t('validation.login')}
        </Button>
        <span>
          {t('validation.Or Click here to')}{' '}
          <a href="/register">{t('validation.Register')}</a>
        </span>
      </form>
    </div>
  );
}

export default LoginForm;

