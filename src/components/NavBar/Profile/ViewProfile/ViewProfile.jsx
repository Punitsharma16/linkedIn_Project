import { Link, useNavigate } from "react-router-dom";
import { userInfo } from "../../../utils/config"
import { AddHome } from "../../Assets/add-Home"
import style from './viewProfile.module.css'
import { ViewProfileImage } from "./ViewprofileImage";
import eye from './eye.svg'
import network from '../../myNetwrok/Svgs/mynetwork.svg'
import activity from '../../myNetwrok/Svgs/events.svg'
import save from './saveItem.svg'
import { useEffect, useState } from "react";

export const ViewProfile = ()=>{
    const navigate = useNavigate();
    const data = userInfo();
    const {name}= data;
    // const {name} = useParams();
    const [newText,setNewText] = useState('');
    const [text, setText] = useState('');
    const [aboutModal,setAboutModal] = useState(false);

    useEffect(() => {
        const savedText = localStorage.getItem('savedText');
        if (savedText) {
          setText(savedText);
        }
      }, []);
    
      // Update the state and local storage whenever the textarea value changes
      const handleTextChange = (e) => {
        // const newText = e.target.value;
        setText(newText);
        localStorage.setItem('savedText', newText);
        setAboutModal(false);
      };
      console.log(text);

    return(
        <main className={style.mainContainer}>
            <aside className={style.profileInfoContainer}>
                <section className={style.infoWithImg}>
                <ViewProfileImage/>
                    <span style={{fontSize:'26px',fontWeight:'500'}}>{name}</span><br />
                    <span>Full Stack Developer || React.js || Node.js</span><br /><br />
                    <span style={{fontWeight:'300'}}>Banglore India </span> <Link> Contact</Link><br />
                    <br />
                    <span style={{cursor:'pointer'}} onClick={()=>navigate('/mynetwork/connections')}>4 Connections</span>
                </section>
                <section className={style.analytic}>
                    <span style={{fontSize:'18px',fontWeight:'500'}}>Analytics</span><br />
                    <span style={{fontWeight:'300',}}>
                        <img src={eye} alt="seen." />Private to you
                        </span>
                    <div>
                        <br />
                        <Link to='/analytics/profile-views'>
                        <span style={{fontWeight:'500'}}><img src={network} alt="" /> 0 Profile views</span><br />
                        <span style={{fontWeight:'300',fontSize:'14px'}}>Update your profile to attarct viewers.</span>
                        </Link>
                    </div>
                </section>
                <section className={style.resources}>
                    <span style={{fontSize:'18px',fontWeight:'500'}}>Resources</span><br />
                    <span style={{fontWeight:'300'}}><img src={eye} alt="seen." />Private to you</span>
                    <br />
                    <br />
                    <div>
                        <Link to='/mynetwork'>
                        <img src={network} alt="" />
                        <span style={{fontWeight:'500',color:'#3d3d3d'}}>My Network</span><br />
                        <span style={{color:'#3d3d3d'}}>See and manage your connections and interests.</span>
                        </Link>
                    </div>
                    <br />
                    <div>
                        <Link to='/recent-activity/all' style={{fontWeight:'500'}}><img src={activity} alt="" /> Activity</Link><br />
                        <span>See what you've shared with you newtwork, such as posts, articles, and comments</span>
                    </div>
                    <br />
                    <div>
                        <span style={{fontWeight:'500'}}><img src={save} alt="" /> My items</span><br />
                        <span>Keep track your jobs, courses, and articles.</span>
                    </div>
                </section>
                <section className={style.about}>
                    <div className={style.aboutHeading}>
                    <p style={{fontSize:'18px',fontWeight:'500'}}>About</p>
                    {/* <p style={{fontSize:'15px',fontWeight:'300'}}>Student at newton school</p> */}
                    <button onClick={()=>setAboutModal(true)}>Edit</button>
                    </div>
                    <span>{text}</span>
                </section>


                { aboutModal &&
                    <aside className="modal-wrapper">
                        <section className={style.aboutModal}>
                            <button className={style.closeBtn} onClick={()=>setAboutModal(false)}>x</button>
                            <h2 style={{marginLeft:'1rem'}}>About</h2>
                            <div className={style.aboutModalDiv}>
                                <textarea name="" id="" cols="55" rows="9" placeholder="Something about you.." onInput={(e)=>setNewText(e.target.value)}></textarea>
                                 <button onClick={handleTextChange}>Add</button>
                            </div>
                        </section>
                    </aside>
                }



                <section className={style.activity}>
                    <div>
                        <span style={{fontSize:'18px',fontWeight:'500'}}>Activity</span><br />
                        <Link style={{fontSize:'15px'}}>4 followers</Link>
                    </div>
                    <button>Create Post</button>
                </section>
                <section className={style.experience}>
                    <span style={{fontSize:'18px',fontWeight:'500'}}>Experience</span><br />
                    <br />
                    <span style={{fontSize:'20px'}}>No Experience Yet</span>
                </section>
                <section className={style.education}>
                    <span  style={{fontSize:'18px',fontWeight:'500'}}>Education</span><br /><br />
                    <ul>
                        <li>
                            <p style={{fontWeight:'500'}}>Gradution</p>
                            <span>Computer Science Student</span><br />
                            <span>Textile Institude Of Tecnology, Bhiwani, Haryana India</span>
                        </li>
                        <li>
                            <p style={{fontWeight:'500'}}>Higher Secondary(12th)</p>
                            <span>Science Student</span><br />
                            <span>Vaish Modal Public School, Bhiwani, Haryana India</span>
                        </li>
                        <li>
                            <p style={{fontWeight:'500'}}>Matriculation(10th)</p>
                            <span>Vaish Modal Public School, Bhiwani, Haryana India</span>
                        </li>
                    </ul>
                </section>
            </aside>
            <aside className={style.sideElements}>
            <div className={style.img}>
        <Link to='/jobs'><img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="imageLoad.." /></Link>
                </div>
                <div className={style.add}><AddHome/></div>
                
            </aside>
        </main>
    )
}