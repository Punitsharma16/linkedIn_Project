import { useContext } from 'react'
import style from './helpmodal.module.css'
// import { helpModalContext } from '../../navbar';
import { helpModalContext } from '../../../../App';
export const HelpModal = ()=>{
    const {setHelpModal} = useContext(helpModalContext);
    return(
        <main className={style.container}>
            <section>
                <div className={style.heading}>
                    <p style={{fontSize:'22px',fontWeight:'600',color:'#ffffff'}}>Help</p>
                    <p style={{color:'#fff'}}>LinkedIn Messaging - Overview</p>
                </div>
                 
                 <p>Last updated: 2 years ago</p>
            </section>
            <section>
            LinkedIn Messaging allows you to communicate with other LinkedIn members that you’re connected to. On LinkedIn, you can only message your 1st-degree connections (and, within group pages, fellow group members) for free. If you aren’t connected, you always have the option to send an InMail to another LinkedIn member.

      Conversations with your connections can be initiated directly from your Messaging page or from your connection’s profile. You can send a message to a single, 1st-degree connection or, start a message thread with two or more connections by sending a message to multiple recipients.
   You can also forward a message to share a conversation with another connection. Once you send a message, it will be sent to the recipient's messaging list and possibly to their email address.
In addition, you can continue a dialogue with your connections by searching for sent and received messages using filters or keywords in order to reply to a message.
LinkedIn messaging gives you the option to leave a conversation or you can mute a conversation to stop receiving notifications for new messages on the thread. If you’ve started a conversation, you can also terminate the thread by deleting the conversation.
If a message you've received is inappropriate or offensive, you can report the message as spam.
            </section>
            <button onClick={()=>setHelpModal(false)} className={style.btn}>Close</button>
        </main>
    )
}