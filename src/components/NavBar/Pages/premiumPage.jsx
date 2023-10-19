import style from './primuim.module.css'
export const Premium = ()=>{
    return(
        <main className={style.mainContainer}>
            <section className={style.header}>
                <h4 style={{fontSize:'20px'}}>Join the millions of LinkedIn members using Premium to get ahead.</h4>
                        <div className={style.images}>
                            <div>
                                 <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/387.jpg" alt="" />
                                 <img src="https://newton-project-resume-backend.s3.amazonaws.com/profileImage/64df3febdef71b475f0afb06.jpg" alt="" />
                                <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/651.jpg" alt="" />
                             </div>
                                  <span>Members use premium</span>
                        </div>
                <p>Start your free 1-month trial today. Cancel anytime. We'll send you a reminder 7 days before your trial ends.</p>
            </section>
            <section className={style.body}>
                <div style={{ background: 'linear-gradient(to bottom, green 2%, #fff 2%)' }} className={style.card}>
                    <p style={{color:'green'}} className={style.cardheading}>Career</p>
                    <span>Get hired and get ahead</span>
                    <hr />
                    <ul>
                        <li>Stand out and get in touch with hiring managers</li>
                        <li>See how you compare to other applicants</li>
                        <li>Learn new skills to advance your Career</li>
                    </ul>
                </div>
                <div style={{ background: 'linear-gradient(to bottom, purple 2%, #fff 2%)' }} className={style.card}>
                    <p style={{color:'purple'}} className={style.cardheading}>Sales Navigater Core</p>
                    <span>Unlock sales opporunities</span>
                    <hr />
                    <p className={style.pTag}>All Bussiness features, plus:</p>
                    <ul>
                        <li>Find leads and accounts in your target market</li>
                        <li>Get real-time insights for warm outreach</li>
                        <li>Build trusted relationships with customers and prospects</li>
                    </ul>
                </div>
                <div style={{ background: 'linear-gradient(to bottom, blue 2%, #fff 2%)' }} className={style.card}>
                    <p style={{color:'blue'}} className={style.cardheading}>Business</p>
                    <span>Grow and nurture your network</span>
                    <hr />
                    <p className={style.pTag}>All Career featurs, plus:</p>
                    <ul>
                        <li>Find and contact the right people</li>
                        <li>Promote and grow your business</li>
                        <li>Learn new skills to enhance your professional brand</li>
                    </ul>
                </div>
                <div style={{ background: 'linear-gradient(to bottom, brown 2%, #fff 2%)' }} className={style.card}>
                    <p style={{color:'brown'}} className={style.cardheading}>Recruiter Lite</p>
                    <span>Find and hire talent</span>
                    <hr />
                    <p className={style.pTag}>All Bussiness features, plus:</p>
                    <ul>
                        <li>Find great candidates, faster</li>
                        <li>Contact top talent directly</li>
                        <li>Build relationships with prospective hires</li>
                    </ul>
                </div>
            </section>
        </main>
    )
}