import React from 'react'
import { FaCheck, FaArrowsAlt, FaCircle, FaSquare } from 'react-icons/fa'
import {Card, SmallCard, ButtonScrollToTop } from '../components'
import {
    members_introduction,
    members_types,
    members_conditions_extra,
    members_rights,
    members_obligations,
    members_suspensions_introduction,
    members_suspensions,
    members_suspensions_conclusion,
    members_section,
    members_rights_section,
    members_obligations_section,
    members_suspensions_section
} from '../data/members'

const MembersPage = () => {

    return (
        <>
        <Card title={members_section.title} id={members_section.id} >
            <div>
                <p>{members_introduction}</p>
            </div>

            {
                members_types.map(type => {
                    const {member_name, conditions} = type;
                    return (
                        <SmallCard title={member_name}>
                            <ul>
                                {conditions.map(condition => (
                                    <li className="small_card_list"><span><FaArrowsAlt/></span>{condition}</li>
                                ))}
                            </ul>
                        </SmallCard>
                    )
                })
            }
            <div>
                <p>{members_conditions_extra}</p>
            </div>
        </Card>

        <Card title={members_rights_section.title} id={members_rights_section.id}>
            {
                members_rights.map(member_right => {
                    const {member_name, rights} = member_right;
                    return (

                        <SmallCard title={`Le ${member_name} a droit de: `}>
                            <ul>
                                {
                                    rights.map(right => (
                                        <li className="small_card_list"><span><FaCheck/></span>{right}</li>
                                    ))
                                }
                            </ul>
                        </SmallCard>
                    )
                })
            }
        </Card>

        <Card title={members_obligations_section.title} id={members_obligations_section.id}>
            <SmallCard title="Tout membre a le devoir de:">
                <ul>
                    {
                        members_obligations.map(obligation => (
                            <li className="small_card_list"><span><FaCircle/></span>{obligation}</li>
                        ))
                    }
                </ul>
            </SmallCard>
        </Card>

        <Card title={members_suspensions_section.title} id={members_suspensions_section.id}>
           <div><p>{members_suspensions_introduction}</p></div>  
                <SmallCard title="Le Conseil d'Administration peut suspendre un membre">
                    <ul>
                        {
                            members_suspensions.map(suspension => (
                                <li className="small_card_list"><span><FaSquare/></span>{suspension}</li>
                            ))
                        }
                    </ul>
                </SmallCard>
           <div><p>{members_suspensions_conclusion}</p></div>
        </Card>
        <ButtonScrollToTop />
        </>
    )
}

export default MembersPage
