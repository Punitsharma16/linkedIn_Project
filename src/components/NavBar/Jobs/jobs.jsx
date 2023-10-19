import style from './job.module.css'
import { Link } from "react-router-dom"
// import jobSvg from "./jobs.svg"
import { HomeProfile } from "../home/HomeProfile"
import { AddHome } from "../Assets/add-Home"
import { useEffect, useState } from 'react'
export const Jobs = ()=>{
    const [jobModel,setJobModal] = useState(false);
    const handleJObModal = ()=>{
        setJobModal(true);
    }

    useEffect(() => {
        if(jobModel){
          document.body.style.overflow = 'hidden'
        }else{
          document.body.style.overflow = 'unset'
        }
      }, [jobModel])
    return(
        <main className={style.container}>
            <aside>
                <HomeProfile/>
            </aside>
            <aside className={style.midSection}>
                <section className={style.MidHeading}>
                        <p style={{fontSize:'20px',fontWeight:'500'}}>Recent job searches</p>
                        <span style={{fontSize:'20px'}}>Empty</span>
                </section>
                <section className={style.MidBody}>
                    <div style={{marginBottom:'1rem',padding:'0.5rem'}}>
                    <span style={{fontSize:'20px',fontWeight:'500'}}>Recommended for you</span><br />
                    <span>Based on your profile</span>
                    </div>
                    <div className={style.companyDetails}>
                        <div className={style.companyImg}>
                            <img src="https://media.licdn.com/dms/image/C4D0BAQHD_GDvmfGvAA/company-logo_200_200/0/1598067864224?e=1704931200&v=beta&t=BFstj7-navOLUvz66HVWF9bYTyWirQlbJy71KDgkhEQ" alt="" />
                        </div>
                        <div>
                             <Link onClick={handleJObModal} style={{fontSize:'18px',fontWeight:'500'}}>Frontend Developer</Link><br />
                             <span style={{fontSize:'14px',fontWeight:'400'}}>Eg Allied Pvt, Ltd.</span><br />
                             <span style={{fontSize:'13px',fontWeight:'300'}}>India (Remote)</span>
                            <p style={{fontSize:'13px',fontWeight:'300'}}> 40 minutes ago -<img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w240-h480-rw" alt="logo.." height="35px"/> Easy Apply</p>
                            </div>
                    </div>

                    <div className={style.companyDetails}>
                        <div className={style.companyImg}>
                            <img src="https://media.licdn.com/dms/image/D4D0BAQHeVY-Lx3sxlw/company-logo_100_100/0/1688021947684?e=1704931200&v=beta&t=VZNPngdTmIJGDiC261wpCPPTqVXSYLWIyxXwodBA9Ms" alt="" />
                        </div>
                        <div>
                             <Link onClick={handleJObModal} style={{fontSize:'18px',fontWeight:'500'}}>Website Developer</Link><br />
                             <span style={{fontSize:'14px',fontWeight:'400'}}>Shri Modi Group Jaipur</span><br />
                             <span style={{fontSize:'13px',fontWeight:'300'}}>India (Onsite)</span><br />
                             <p style={{fontSize:'13px',fontWeight:'300'}}> 2 hours ago -<img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w240-h480-rw" alt="logo.." height="35px"/> Easy Apply</p>
                        </div>
                    </div>

                    <div className={style.companyDetails}>
                        <div className={style.companyImg}>
                            <img src="https://media.licdn.com/dms/image/D4D0BAQG-AvGz1Lbvhw/company-logo_200_200/0/1692726323521?e=1704931200&v=beta&t=FlkG_j--d0TFax_z8oX8v5DhQ5WOy-sLI6wwSnOcbyE" alt="" />
                        </div>
                        <div>
                             <Link onClick={handleJObModal} style={{fontSize:'18px',fontWeight:'500'}}>Wed Developer</Link><br />
                              <span style={{fontSize:'14px',fontWeight:'400'}}>Rekruton Technologies</span><br />
                             <span style={{fontSize:'13px',fontWeight:'300'}}>India (Remote)</span>
                             <p style={{fontSize:'13px',fontWeight:'300'}}> 4 hours ago -<img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w240-h480-rw" alt="logo.." height="35px"/> Easy Apply</p>
                        </div>
                    </div>
                </section>
            </aside>
            <aside>
                <AddHome/>
            </aside>
            { jobModel &&
                <aside className={style.modalWrapper}>
                    <section className={style.jobModalText}>
                    <p>Working on it</p>
                    <span>Please try to Apply after some time</span>
                    <button onClick={()=>setJobModal(false)}>close</button>
                    </section>
                   
                </aside>
            }
        </main>
    )
}