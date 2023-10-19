import { useEffect, useState } from 'react';
import HomeSvg from '../../Assets/profile.svg'
import style from './commentsImage.module.css'
export const CommentsImage = ()=>{
    const [newImage,setNewImage] = useState(null);
    useEffect(()=>{
        const storeImage = localStorage.getItem('selectImage');
        if(storeImage){
            setNewImage(storeImage);
        }
    },[])
    return(
        <main className={newImage ? style.commentUser:style.commentImg}>
            { newImage ?
                <section>
                <img src={newImage} alt="image.." />
            </section>
            :
        <section>
            <img src={HomeSvg} alt="profile.svg" />
        </section>
        }
        </main>
        
    )
}