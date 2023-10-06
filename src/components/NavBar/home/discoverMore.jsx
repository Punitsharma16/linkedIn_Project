import { Link } from "react-router-dom"

export const DiscoverContainer = ()=>{
    return(
        <main className="discover-box">
            <section className="link-box">
            <Link>Groups</Link>
            <Link to='/mynetwork/events'>Events</Link>
            <Link>Followed Hashtags</Link>
            </section>
            <hr />
            <section className="discover-bottom">
                <p>Discover more</p>
            </section>
        </main>
    )
}