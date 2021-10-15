import React from 'react'
import {FaMinus} from 'react-icons/fa'
import {mission_join_introduction, mission, join} from '../data/landing'
import missionImg from '../assets/mission_medium.jpg';
const Mission = () => {
    return (
        <section className="mission_join">
            <h3 className="mission_join_title">{mission_join_introduction}</h3>
            <div className="mission_join_body">
                <div className="mission_join_text">
                    
                    <div className="mission">
                        <h4 className="mission_title">{mission.title}</h4>
                        <p>{mission.detail}</p>
                    </div>
                    <div className="join">
                        <h4 className="join_title">{join.title}</h4>
                        <ul>
                            {
                                join.conditions.map(condition => (
                                    <li className="join_list"><span><FaMinus/></span>{condition}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <a className='btn' href="/membres">En Savoir Plus</a>
                    </div>
                    
                </div>
                <div className="mission_join_img">
                    <img src={missionImg} alt="mission" className="mission_photo"
                    />
                </div>
            </div>
            
        </section>
    )
}

export default Mission
