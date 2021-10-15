import React from 'react'
import { FaCheck, FaArrowsAlt, FaCircle, FaSquare } from 'react-icons/fa'
import {Card, SmallCard, GroupCreditCard } from '../components'
import {
    credits_admision_conditions,
    credits_exclusion_conditions,
    credits_categories,
    financing_period_per_categories,
    max_credits_amount_per_categories,
    interest_rate,
    well_off_savings,
    guarantees,
    document_fees,
    late_fees,
    mutual_credit_fund,
    credit_conclusion,
    synthesis_category_consommation,
    synthesis_category_agriculture,
    synthesis_category_sales,
    credits_admision_conditions_section, credits_categories_section, financing_period_section, max_credits_section, synthesis_category_section

} from '../data/credits'

const CreditsPage = () => {
    return (
        <>
        <Card title={credits_admision_conditions_section.title} id={credits_admision_conditions_section.id}>
            <SmallCard title="Conditions d'admission aux Credits">
                {
                    credits_admision_conditions.map(credit => (
                        <li className="small_card_list"><span><FaCheck/></span>{credit}</li>
                    ))
                }
            </SmallCard>
            <SmallCard title="Les clients/membres suivants sont exclus de la politique de crédit, à savoir :">
                {
                    credits_exclusion_conditions.map(exclusion => (
                        <li className="small_card_list"><span><FaArrowsAlt/></span>{exclusion}</li>
                    ))
                }
            </SmallCard>
            
        </Card>

        <Card title={credits_categories_section.title} id={credits_categories_section.id}>
            <div><p>La politique de crédit de FASOCRED est constituée de catégories basées sur l’utilisation</p></div>
            {
                credits_categories.map(category => {
                    const {category_name, details} = category;
                    return (<SmallCard title={`La catégorie ${category_name}`}>
                        <table class="small_card_table">
                            <thead>
                                <tr className="small_card_table_header"><th>Produits</th><th>Examples</th></tr>
                            </thead>
                            <tbody>
                                {details.map(detail => (
                                    <tr className="small_card_table_body"><td>{detail.product_name}</td><td>{detail.examples}</td></tr>
                                ))}
                            </tbody>
                        </table>
                    </SmallCard>)
                })
            }
        </Card>

        <Card title={financing_period_section.title} id={financing_period_section.id}>
            <div><p>La durée est en fonction de la période de vie utile de l’objet du financement sans toutefois dépasser les limites indiquées ci-dessous</p></div>
            {
                financing_period_per_categories.map(category => {
                    const {category_name, details} = category;
                    return (
                        <SmallCard title={`La catégorie ${category_name}`}>
                            <table class="small_card_table">
                            <thead>
                                <tr className="small_card_table_header"><th>Produits</th><th>Durée maximale</th></tr>
                            </thead>
                            <tbody>
                                {details.map(detail => (
                                    <tr className="small_card_table_body"><td>{detail.product_name}</td><td>{detail.duration}</td></tr>
                                ))}
                            </tbody>
                        </table>
                        </SmallCard>
                    )
                })
            }
        </Card>

        <Card title={max_credits_section.title} id={max_credits_section.id}>
            <div><p>Le montant maximal de crédit qu’un client peut obtenir auprès de l’agence est fonction de la limite déterminée par l’analyse de la capacité de remboursement de l’emprunteur.</p></div>
            {
                max_credits_amount_per_categories.map(category => {
                    const {category_name, details} = category;
                    return (
                        <SmallCard title={`La catégorie ${category_name}`}>
                            <table class="small_card_table">
                            <thead>
                                <tr className="small_card_table_header"><th>Produits</th><th>Montant maximum</th></tr>
                            </thead>
                            <tbody>
                                {details.map(detail => (
                                    <tr className="small_card_table_body"><td>{detail.product_name}</td><td>{detail.amount}</td></tr>
                                ))}
                            </tbody>
                        </table>
                        </SmallCard>
                    )
                })
            }
        </Card>

        <Card title={interest_rate.title} id={interest_rate.id}>
            <p>{interest_rate.detail}</p>
        </Card>

        <Card title={well_off_savings.title} id={well_off_savings.id}>
            <p>{well_off_savings.detail}</p>
        </Card>

        <Card title={guarantees.title} id={guarantees.id}>
            <p>{guarantees.detail}</p>
        </Card>
      
        <Card title={document_fees.title} id={document_fees.id}>
            <p>{document_fees.detail}</p>
        </Card>

        <Card title={late_fees.title} id={late_fees.id}>
            <p>{late_fees.detail}</p>
        </Card>

        <Card title={mutual_credit_fund.title} id={mutual_credit_fund.id}>
            <p>{mutual_credit_fund.detail}</p>
        </Card>

        <Card title={synthesis_category_section.title} id={synthesis_category_section.id}>
            <GroupCreditCard title={synthesis_category_consommation.title}
                examples={synthesis_category_consommation.examples}
            >
            </GroupCreditCard>
            
            <GroupCreditCard title={synthesis_category_agriculture.title}
                examples={synthesis_category_agriculture.examples}
            >
            </GroupCreditCard>

            <GroupCreditCard title={synthesis_category_sales.title}
                examples={synthesis_category_sales.examples}
            >
            </GroupCreditCard>

            <div>
                <p>
                    {credit_conclusion}
                </p>
            </div>
        </Card>
        </>
    )
}

export default CreditsPage
