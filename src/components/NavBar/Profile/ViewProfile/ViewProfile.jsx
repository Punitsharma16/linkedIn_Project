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
    const [experienceModal,setExperienceModal] = useState(false);


    const [experience, setExperience] = useState([]);
    const [company, setCompany] = useState('');
    const [place,setPlace] = useState('');
    const [position,setPosition] = useState('');
    const [start,setStartingDate] =  useState('');
    const [end, setEndingDate]= useState('');
    const [skills, setSkills] = useState('');



    const [education,setEducation] = useState([]);
    const [school,setSchool] = useState('');
    const [degree,setDegree] = useState('');
    const [startDate,setStartDate] =useState('')
    const [endDate,setEndDate] = useState('');
    const [grade,setGrade] = useState('');
    const [educationModal,setEducationModal] = useState(false);


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


      useEffect(() => {
        const savedExperience = localStorage.getItem('experience');
        if (savedExperience) {
          setExperience(JSON.parse(savedExperience));
        }
      }, []);

      const handleExperience = (e) => {
        e.preventDefault();
        if (company && place && position && start && end && skills) {
            const newExperience = { company, place, position, start, end, skills };
            setExperience([...experience, newExperience]);
            localStorage.setItem('experience', JSON.stringify([...experience, newExperience]));
          }
          setCompany('');
          setPlace('');
          setPosition('');
          setStartingDate('');
          setEndingDate('');
          setSkills('');
          setExperienceModal(false);
        }
        const reverseExperience = experience.reverse();




        useEffect(() => {
            const savedEducation = localStorage.getItem('education');
            if (savedEducation) {
                setEducation(JSON.parse(savedEducation));
            }
          }, []);
    
          const handleEducation = (e) => {
            e.preventDefault();
            if (school && degree && startDate && endDate && grade) {
                const newEducation = { school, degree, startDate, endDate, grade };
                setEducation([...education, newEducation]);
                localStorage.setItem('education', JSON.stringify([...education, newEducation]));
              }
              setSchool('');
              setDegree('');
              setStartDate('');
              setEndDate('');
              setGrade('');
              setEducationModal(false);
            }
            const reverseEducation = education.reverse();

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
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                    <span style={{fontSize:'18px',fontWeight:'500'}}>Experience</span><br />
                    <button onClick={()=>setExperienceModal(true)}>Edit</button>
                    </div>
                    { reverseExperience.map((experience1,i)=>{
                        return <section key={i}>
                                 <span style={{fontSize:'20px',fontWeight:'600'}}>&#8226; {experience1.company}</span><br />
                                 <span style={{fontSize:'16px',fontWeight:'400',marginLeft:"1rem"}}>{experience1.position}</span><br />
                                 <span style={{fontSize:'14px',fontWeight:'400',marginLeft:"1rem"}}><span style={{fontSize:'16px',fontWeight:'500'}}>From</span> {experience1.start}</span>
                                  <span style={{fontSize:'16px',fontWeight:'500'}}> to </span> 
                                 <span style={{fontSize:'14px',fontWeight:'400'}}> {experience1.end}</span><br/>
                                 <span style={{fontSize:'15px',fontWeight:'400',marginLeft:"1rem"}}>{experience1.place}</span>
                                 <p style={{fontWeight:'600',marginLeft:"1rem"}}> Skills : {experience1.skills}</p>
                                 <hr />
                       </section>
                    })    
                }
                </section>


                { experienceModal &&
                    <aside className="modal-wrapper">
                    <section className={style.experienceModal}>
                    <button className={style.close} onClick={()=>setExperienceModal(false)}>x</button>
                        <p style={{fontSize:'24px',fontWeight:'600',marginLeft:'1rem'}}>Experience</p>
                        <form onSubmit={handleExperience} className={style.experienceForm}>
                            <input type="text" name="company" id="company" required placeholder="Company name.." value={company} onInput={(e)=>setCompany(e.target.value)} /><br />
                            <input type="text" name="position" id="position" required placeholder="Your position.." value={position} onInput={(e)=>setPosition(e.target.value)}/><br />
                            <input type="date" name="StartDate" id="startDate" required value={start} onInput={(e)=>setStartingDate(e.target.value)}/>
                            <span> to </span>
                            <input type="date" name="endDate" id="endDate" required value={end} onInput={(e)=>setEndingDate(e.target.value)}/><br />
                            <input type="text" name="place" id="place" required placeholder="Location.." value={place} onInput={(e)=>setPlace(e.target.value)} /><br />
                            <input type="text" name="skills" id="skills" required placeholder="Skills.." value={skills} onInput={(e)=>setSkills(e.target.value)}/>
                            <div>
                                <input type="submit" value="Add" />
                            </div>
                        </form>
                    </section>
                </aside>
                }



                <section className={style.education}>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                         <span  style={{fontSize:'18px',fontWeight:'500'}}>Education</span><br /><br />
                         <button onClick={()=>setEducationModal(true)}>Edit</button>
                    </div>
                    
                    { reverseEducation.map((education1,i)=>{
                        return <ul key={i}>
                        <li>
                            <span style={{fontSize:'20px',fontWeight:'500'}}>{education1.school}</span><br />
                            <span>{education1.degree}</span><br />
                            <span style={{fontWeight:'600'}}>From </span><span style={{fontSize:'14px'}}> {education1.startDate} </span><span style={{fontWeight:'600'}}> to </span><span style={{fontSize:'14px'}}> {education1.endDate}</span>
                            <p>Grade: {education1.grade}%</p>
                        </li>
                        <hr />
                    </ul>
                    }
                )}
                </section>




                { educationModal &&
                    <aside className="modal-wrapper">
                    <section className={style.educationModal}>
                    <button onClick={()=>setEducationModal(false)} className={style.close}>x</button>
                        <p style={{fontSize:'24px',fontWeight:'600',marginLeft:'1rem'}}>Education</p>
                        <form onSubmit={handleEducation} style={{margin:'1rem'}}>
                            <input type="text" name="school" id="school" placeholder="School.." value={school} onInput={(e)=>setSchool(e.target.value)} required/>
                            <input type="text" name="degree" id="degree" placeholder="Degree.." value={degree} onInput={(e)=>setDegree(e.target.value)} required/>
                            <input type="date" name="StartDate" id="startDate" value={startDate} required onInput={(e)=>setStartDate(e.target.value)}/>
                               <span> to </span>
                            <input type="date" name="endDate" id="endDate" value={endDate} required onInput={(e)=>setEndDate(e.target.value)}/><br />
                            <input type="number" name="grade" id="grade" required value={grade} onInput={(e)=>setGrade(e.target.value)} placeholder="Grade %"/>
                            <div>
                                <input type="submit" value="Add" />
                            </div>
                        </form>
                    </section>
                </aside>
                }




            </aside>
            <aside className={style.sideElements}>
            <div className={style.img}>
        <Link to='/jobs'><img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="imageLoad.." /></Link>
                </div>
                <div className={`${style.add} hide`}><AddHome/></div>
                
            </aside>
        </main>
    )
}