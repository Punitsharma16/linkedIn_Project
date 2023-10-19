import { useEffect, useState } from 'react'
import HomeSvg from '../../Assets/profile.svg'
import style from './viewProfile.module.css'
// import camera from './camera.svg'
export const ViewProfileImage = ()=>{
    const [image,setImage] = useState(null);
    useEffect(()=>{
        const storeImage = localStorage.getItem('selectImage');
        if(storeImage){
            setImage(storeImage);
        }
        
    },[])

    const handleImage = (e)=>{
        const file = e.target.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload=()=>{
                const imageUrl = reader.result;
                setImage(imageUrl);
                localStorage.setItem('selectImage',imageUrl);
            }
            reader.readAsDataURL(file);
        }else{
            setImage(null);
            localStorage.removeItem('selectImage')
        }
    }
    return(
        <main>
            <div  className={image?style.profileImgView:style.profileImgUser}>
            { image ?
                <section>
                <img src={image} alt="user.." />
               </section>
            :
            <section>
                  <img src={HomeSvg} alt="profile.svg" /> 
            </section>
            }
            </div>
            <div className={style.fileInput}>
            <input className={style.chooseImage} type="file" name="file" id="file" onChange={handleImage}/>
            </div>
            
        </main>
    )
}