import HomeSvg from './profile.svg'
import style from './profile.module.css'
import down from './down.svg'
import { useEffect, useState } from 'react';
export const ProfileLogo = ()=>{
    const [newImage,setNewImage] = useState(null);
    useEffect(()=>{
        const storeImage = localStorage.getItem('selectImage');
        if(storeImage){
            setNewImage(storeImage);
        }
    },[])
    return(
        <main className={style.container}>
            <div className={newImage?style.userImage:style.profileImg}>
            { newImage ?
                <section>
            <img src={newImage} alt="profile.svg" />
            </section>
            :
            <section>
            <img src={HomeSvg} alt="profile.svg" />
            </section>
            }
            </div>
            <span className='hide'>Me <img src={down} alt="-" /></span>
        </main>
        
        
    )
}