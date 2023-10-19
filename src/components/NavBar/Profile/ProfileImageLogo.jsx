import HomeSvg from './profile.svg'
// import './profileImage.css'
import style from './profile.module.css'
import { useEffect, useState } from 'react';
export const ProfileImageLogo = ()=>{
    const [newImage,setNewImage] = useState(null);
    useEffect(()=>{
        const storeImage = localStorage.getItem('selectImage');
        if(storeImage){
            setNewImage(storeImage);
        }
    },[])
    return(
        <main className={newImage?style.profileModalUser:style.profileModalLogo}>
            { newImage ?
                <section>
                <img src={newImage} alt="" />
            </section>
            :
        <section>
            <img src={HomeSvg} alt="profile.svg" />
        </section>
        }
        </main>
        
    )
}