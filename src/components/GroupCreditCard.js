import React from 'react'
const GroupCreditCard = ({title, examples}) => {
    return (
        <div className="synthesis_group">
                <h4 className="small_card_title synthesis_title">Catégorie: {title}</h4>
                <div className="synthesis_examples">
                    {
                        examples.map(example => {
                            const {icon, use, duration, amount, interest_rate, well_off_savings,
                                management_fees, late_fees, mutual_fund
                            } = example;

                            return (
                                <div className="synthesis_example">
                        
                                <div className="synthesis_icon_wrapper">{icon} </div>                 
                                <div className="synthesis_details">
                                    <span className="synthesis_delimiter"></span>
                                    <div className="synthesis_detail">
                                        <span>Utilisation: </span> {use}
                                    </div>
                                    <span className="synthesis_delimiter"></span>
                                    <div className="synthesis_detail">
                                        <span>Durée: </span> {duration}
                                    </div>
                                    <span className="synthesis_delimiter"></span>
                                    <div className="synthesis_detail">
                                        <span>Montant maximal jusqu’à: </span> {amount}
                                    </div>
                                    <span className="synthesis_delimiter"></span>
                                    <div className="synthesis_detail">
                                        <span>Taux d’intérêt: </span> {interest_rate}
                                    </div>
                                    <span className="synthesis_delimiter"></span>
                                    <div className="synthesis_detail">
                                        <span>L’épargne nantie: </span> {well_off_savings}
                                    </div>
                                    <span className="synthesis_delimiter"></span>
                                    <div className="synthesis_detail">
                                        <span>Frais de Gestion: </span> {management_fees}
                                    </div>
                                    <span className="synthesis_delimiter"></span>
                                    <div className="synthesis_detail">
                                        <span>Pénalités de retard: </span> {late_fees}
                                    </div>
                                    <span className="synthesis_delimiter"></span>
                                    <div className="synthesis_detail">
                                        <span>Fonds mutuels: </span> {mutual_fund}
                                    </div>
                                </div>
                            </div>

                            )
                        })
                    }
                   
                </div>
            </div>
    )
}

export default GroupCreditCard
