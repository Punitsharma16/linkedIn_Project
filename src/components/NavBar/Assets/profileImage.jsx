import { useEffect, useState } from 'react'
import HomeSvg from './profile.svg'
import './profileImage.css'
export const ProfileImage = ()=>{
    const [newImage,setNewImage] = useState(null);
    useEffect(()=>{
        const storeImage = localStorage.getItem('selectImage');
        if(storeImage){
            setNewImage(storeImage);
        }
    },[])
    return(
        <main className={newImage?'user-img':'profile-img'}>
            { newImage ?
                <section>
                <img src={newImage} alt="" />
            </section>
            :
        <section >
            <img src={HomeSvg} alt="profile.svg" />
        </section>
        }
        </main>
        
    )
}