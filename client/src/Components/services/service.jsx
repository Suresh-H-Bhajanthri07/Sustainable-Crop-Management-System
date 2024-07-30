import './service.css';
import { useTranslation } from 'react-i18next';

function Services(){
  const { t } = useTranslation();
    let services=require("../../service/service.json");
    return(
        <>
        <div id="SERVICES">
            <h1>{t('header.services')}</h1>
            <p>{t('services.Sustainability bridge')}</p>
             <div className='services'>
            {
                services.map((item)=>(
                   
                    <div key={item.id} className='service'>
                        <div className='image'><img src={item.imageLink} alt="loading.."/></div>
                        <div className='heading'><h1>{t(item.heading)}</h1></div>
                        <div className='subheading'><p>{t(item.subheading)}</p></div>
                    </div>
                   
                ))
            }
            </div>
        </div>
        </>
    )
}
export default Services;