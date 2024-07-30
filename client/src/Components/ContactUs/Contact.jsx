import React from 'react'
import './contact.css'

import { useTranslation } from 'react-i18next';

export const Contact = () => {

  const { t } = useTranslation();

  return (
    <div>
  
        <div className='container' id="CONTACT">
        <div className='container1'>
              <div className='title'>
                <h1 style={{color:"white", fontSize:"50px"}}>{t('contactus.contactus')}</h1>
                <p style={{marginTop:"-20px", marginBottom:"50px",fontSize:"20px" ,fontStyle:"italic"}}>
                {t('contactus.wewould')}
                </p>
              </div>
              <form>
                <div className="all">
                <div className="box">
                    <div className="form">
                      <input className="input"
                        type='text'
                        placeholder={t('contactus.yourname')} 
                      />
                       </div>
                    <div className="form">
                      <input className="input"
                        name='email'
                        placeholder={t('contactus.youremail')}
                      />
                  </div>
                  <div className="form">
                      <input className="input"
                        name='number'
                        placeholder={t('contactus.phnumber')}
                      />
                  </div>
                  </div>
                <div className="block">
                  <textarea className="message"
                    name='message'
                    placeholder = {t('contactus.yourmessage')}
                  ></textarea>
                </div>
                </div>
                <button type='submit' className="submit">
                  {t('contactus.sendmessage')}
                </button>
              </form>
            </div>
          </div>
          </div>
  )
}

export default Contact;
