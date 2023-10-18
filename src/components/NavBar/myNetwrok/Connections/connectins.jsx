import React, { useState } from 'react';
import style from './connection.module.css'
import { Link, useNavigate } from 'react-router-dom';
// import { getHeaderWithAuthTokenAndProjectID } from '../../../utils/config';
import axios from 'axios';

const ConnectData = [
    {
        name: "Kurt Nicolas",
        profileImage: "https://newton-project-resume-backend.s3.amazonaws.com/profileImage/64df3febdef71b475f0afb37.jpg",
        position: 'React Community'
    },
    {
        name: "Michelle Mayert",
        profileImage: "https://newton-project-resume-backend.s3.amazonaws.com/profileImage/64df3febdef71b475f0afb2f.jpg",
        position: "Open Source Supporters"
    },
    {
        name: "Orlando Leannon",
        profileImage: "https://newton-project-resume-backend.s3.amazonaws.com/profileImage/64df3febdef71b475f0afafa.jpg",
        position: 'Mobile App Makers'
    },
    {
        name: "Marlene Ward-Cummerata",
        profileImage: "https://newton-project-resume-backend.s3.amazonaws.com/profileImage/64df3febdef71b475f0afb02.jpg",
        position: 'Frontend Fanatics'
    }
];


export const FilterByName = ()=>{
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(ConnectData);

    const handleSearch = (e) => {
        const term = e.target.value.toLowerCase();
        setSearchTerm(term);

        const filteredResults = ConnectData.filter(item =>
            item.name.toLowerCase().includes(term)
        );

        setFilteredData(filteredResults);
    };

    return (
    <section className={style.container}>
        <main className={style.connetionsContainer}>
        <section className={style.connectedPeoples}>
            <div className={style.searchBar}>
            <p style={{fontSize:'20px'}}>4 Connections</p>
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearch}
            />
            </div>
            <div>
                {filteredData.map((item, index) => (
                    <section className={style.userBox}>
                    <div key={index} className={style.user}>
                        <img src={item.profileImage} alt={item.name} />
                        <div>
                        <h4 style={{fontWeight:'600'}}>{item.name} <br /> <span style={{fontSize:'14px',fontWeight:'300'}}>{item.position}</span></h4>
                        
                        </div>
                    </div>
                    <button onClick={()=>navigate('/message')} className={style.msgBtn}>Message</button>
                    </section>
                ))}
            </div>
        </section>
        </main>
        <div style={{margin:'1rem'}}>
        <Link className='hide' to='/jobs'><img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="imageLoad.." /></Link>
        </div>
    </section>
    );
}
