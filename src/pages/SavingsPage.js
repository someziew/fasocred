import React from 'react'
import {FaArrowsAlt, FaCircle} from 'react-icons/fa'
import {Card, SmallCard, ButtonScrollToTop} from '../components';
import {
    savings_introduction,
    savings_importance,
    savings_types,
    dat_rates,
    tontines_accounts_introduction,
    daily_tontines_rates,
    weekly_tontines_rates,
    savings_importance_section,
    savings_types_section,
    dat_rates_section,
    tontines_accounts_section
} from '../data/savings'
const SavingsPage = () => {
    return (
        <>
        <Card title={savings_importance_section.title} id={savings_importance_section.id}>
            <div>
                <p>
                    {savings_introduction}
                </p>
                <SmallCard title="Importance de l’épargne">
                    <ul>
                        {
                            savings_importance.map(reason => (
                                <li className="small_card_list"><span><FaArrowsAlt/></span>{reason}</li>
                            ))
                        }
                    </ul>
                </SmallCard>
            </div>
        </Card>

        <Card title={savings_types_section.title} id={savings_types_section.id}>
            {
                savings_types.map(saving => {
                    const {title, details} = saving;
                    return (
                        <SmallCard title={title}>
                            <ul>
                                {
                                    details.map(detail => (
                                        <li className="small_card_list"><span><FaCircle/></span>{detail}</li>
                                    ))
                                }
                            </ul>
                        </SmallCard>
                    )
                })
            }
        </Card>

        <Card title={dat_rates_section.title} id={dat_rates_section.id}>
            <table class="savings_card_table">
                <thead>
                    <tr className="savings_card_table_header">
                        <th>Montants</th>
                        <th>3 à 6 mois</th>
                        <th>6 mois à 1 an</th>
                        <th>1 à 3 ans</th>
                        <th>3 à 5 ans</th>
                        <th>5 ans et plus</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dat_rates.map(rate => {
                            const { amounts, three_six_months, six_months_one_year,
                                one_three_years, three_five_years, above_five_years
                            } = rate

                            return (
                                <tr className="savings_card_table_body">
                                    <td>{amounts}</td>
                                    <td>{three_six_months}</td>
                                    <td>{six_months_one_year}</td>
                                    <td>{one_three_years}</td>
                                    <td>{three_five_years}</td>
                                    <td>{above_five_years}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </Card>

        <Card title={tontines_accounts_section.title} id={tontines_accounts_section.id}>
            <div>
                <p>{tontines_accounts_introduction}</p>
            </div>
            <SmallCard title={daily_tontines_rates.title}>
                <table class="small_card_table">
                    <thead>
                        <tr className="small_card_table_header"><th>Montants cotisés/jour</th><th>Frais de gestion mensuel</th></tr>
                    </thead>
                    <tbody>
                        {daily_tontines_rates.contributions.map(contribution => (
                            <tr className="small_card_table_body"><td>{contribution.amount}</td><td>{contribution.management_fees}</td></tr>
                        ))}
                    </tbody>
                </table>
            </SmallCard>

            <SmallCard title={weekly_tontines_rates.title}>
                <table class="small_card_table">
                    <thead>
                        <tr className="small_card_table_header"><th>Montants cotisés/jour</th><th>Frais de gestion mensuel</th></tr>
                    </thead>
                    <tbody>
                        {weekly_tontines_rates.contributions.map(contribution => (
                            <tr className="small_card_table_body"><td>{contribution.amount}</td><td>{contribution.management_fees}</td></tr>
                        ))}
                    </tbody>
                </table>
            </SmallCard>
        </Card>
        <ButtonScrollToTop />
        </>
    )
}

export default SavingsPage
