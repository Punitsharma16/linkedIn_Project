export const PostCard = (props)=>{
    const {title,content,author:{name,profileImage},channel} = props;
    console.log(props);
    console.log(title);
    return(
        <main>
            <section>
                <img src={profileImage} alt="profile.." />
                <p>{name}</p>
            </section>
            <section>
                <p>{title}</p>
                <p>{content}</p>
            </section>
        </main>
    )
}