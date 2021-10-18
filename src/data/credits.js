import {FaWallet, FaMoneyBillWave, FaHandsHelping, FaCar, FaHome, FaCouch,
    FaFillDrip, FaTractor, FaClipboardList,
    FaBeer,FaStore, FaTrailer, 
} from 'react-icons/fa'

export  const credits_admision_conditions_section = {
    title: 'Admissibilité Aux Crédits',
    id: 'credits_admision_conditions'
}

export const credits_admision_conditions = ['Etre âgé de 18 ans au moins et 71 ans au plus.',
'Exercer une activité licite et génératrice de revenu.',
'Respecter les principes et procédures en vigueur au sein de FASOCRED.',
'Remplir tous les devoirs de Membre de FASOCRED.',
'Être membre au moins pendant 3 mois.']


export const credits_exclusion_conditions = [
    'Les membres qui ont un casier judiciaire chargé.',
    'Les membres qui ont un antécédent de crédit non remboursé.',
    'Les membres qui ont 72 ans et plus.',
    'Les membres qui ont un crédit échu ou en retard de remboursement dans une autre institution financière.'
]

export const credits_categories_section = {
    title: 'Catégories De Crédit',
    id: 'credits_categories_section'
}

export const credits_categories = [{
    category_name : 'CONSOMMATION',
    details : [{
            product_name: 'Avance salaire',
            examples: 'Salarié du public et du privé'
        },{
            product_name: 'Crédit social',
            examples: 'scolaire, mariage, décès, santé, Baptême'
        },{
            product_name: 'Crédit mobilier',
            examples: 'Meubles, matériel électroménagers'
        },{
            product_name: 'Crédit véhicule',
            examples: 'Cyclomoteur, moto, auto'
        },{
            product_name: 'Crédit habitation',
            examples: 'Achat de terrain ou d’immeuble d’habitation, construction, rénovation ou installation sanitaire, etc.'
        }
    ]
},{
    category_name : 'AGRICOLE',
    details : [{
            product_name: 'Crédit d’intrants',
            examples: 'Semences, engrais, pesticides, appareils d’épandage.'
        },{
            product_name: 'Crédit d’équipements',
            examples: 'outillages, équipements, animaux de trait.'
        }
    ]
},{
    category_name : 'COMMERCIALE',
    details : [{
            product_name: 'Crédit d’inventaire,  Crédit programme, Crédit d’équipements,  Préfinancement des marchés',
            examples: 'La catégorie de crédit commercial comprend notamment le crédit aux petits commerces, qu’ils soient du secteur formel ou du secteur informel, aux artisans et aux petites et moyennes entreprises (P.M.E.) et le crédit lié aux activités de commercialisation.'
        }
    ]
},{
    category_name : 'COMMUNAUTAIRE',
    details : [{
            product_name: 'Crédit de groupe ',
            examples: 'Groupement féminin ou masculin Groupement villageois ou urbain'
        }
    ]
}]

export const financing_period_section = {
    title: 'Durée De Financement Par Catégorie',
    id: 'financing_period_section'
}
export const financing_period_per_categories = [{
    category_name: 'CONSOMMATION',
    details: [{
        product_name: 'Avance salaire',
        duration: '1 mois'
    }, {
        product_name: 'Crédit social',
        duration: '12 mois'
    },{
        product_name: 'Crédit mobilier',
        duration: '36 mois'
    }, {
        product_name: 'Crédit véhicule',
        duration: '36 mois'
    }, {
        product_name: 'Crédit habitation',
        duration: '60 mois'
    }]
}, {
    category_name: 'AGRICOLE',
    details: [{
        product_name: 'Crédit d’intrants',
        duration: '12 mois'
    }, {
        product_name: 'Crédit d’équipements',
        duration: '24 mois'
    },{
        product_name: 'Crédit programme',
        duration: '24 mois'
    }]
}, {
    category_name: 'COMMERCIALE',
    details: [{
        product_name: 'Crédit d’inventaire',
        duration: '12 mois'
    }, {
        product_name: 'Crédit programme',
        duration: '12 mois'
    },{
        product_name: 'Crédit d’équipements',
        duration: '24 mois'
    },{
        product_name: 'Préfinancement des marchés',
        duration: '12 mois'
    }]
},{
    category_name: 'COMMUNAUTAIRE',
    details: [{
        product_name: 'Crédit de groupe',
        duration: '12 mois'
    }]
}]

export const max_credits_section = {
    title: 'Montant Maximal De Crédit Par Catégorie',
    id: 'max_credits'
}

export const max_credits_amount_per_categories = [{
    category_name: 'CONSOMMATION',
    details: [{
        product_name: 'Avance salaire',
        amount: '25 % du salaire'
    }, {
        product_name: 'Crédit social',
        amount: '5 000 000'
    },{
        product_name: 'Crédit mobilier',
        amount: '5 000 000'
    }, {
        product_name: 'Crédit véhicule',
        amount: '5 000 000'
    }, {
        product_name: 'Crédit habitation',
        amount: '5 000 000'
    }]
}, {
    category_name: 'AGRICOLE',
    details: [{
        product_name: 'Crédit d’intrants',
        amount: '5 000 000'
    }, {
        product_name: 'Crédit d’équipements',
        amount: '5 000 000'
    },{
        product_name: 'Crédit programme',
        amount: '5 000 000'
    }]
}, {
    category_name: 'COMMERCIAL',
    details: [{
        product_name: 'Crédit d’inventaire',
        amount: '5 000 000'
    }, {
        product_name: 'Crédit programme',
        amount: '5 000 000'
    },{
        product_name: 'Crédit d’équipements',
        amount: '5 000 000'
    }]
},{
    category_name: 'COMMUNAUTAIRE',
    details: [{
        product_name: 'Crédit de groupe',
        amount: '250 000 par personne avec un plafond de 5 000 000'
    }]
}]

export const interest_rate = {
    id: 'interest_rate',
    title: 'Taux d’intérêt',
    detail: "Les taux d’intérêt sont calculés selon la méthode du taux d’intérêt annuel constant. Ce taux d’intérêt s’applique au solde initial du crédit multiplié par la durée d’utilisation. Les taux d’intérêts sont déterminés par le Conseil d’administration. Le taux d’intérêt en vigueur et applicable aux clients est de 10% calculé selon la méthode du taux d’intérêt annuel constant"
}

export const well_off_savings = {
    id: 'well_off_savings',
    title: 'L’épargne nantie',
    detail: 'L’épargne nantie est une condition préalable à l’obtention du crédit. Elle est de 15%. Pour les emprunteurs non-salariés, la constitution d’une épargne nantie sous forme de dépôt avant l’octroi du crédit est obligatoire. Le plan d’épargne obligatoire ou l’épargne nantie doit être gelée dans un compte d’épargne stable et considéré comme une garantie jusqu’à épuisement total du crédit.'
}

export const guarantees = {
    id: 'guarantees',
    title: 'Garanties',
    detail: 'L’emprunteur doit fournir à l’institution une garantie réalisable (vendable) équivalente à 100 % de la valeur du crédit si cette garantie est matérielle. Sans que la liste ne soit exhaustive, les garanties et cautions possibles sont : Nantissement, documents légalisés, promesse d’hypothèque, titre foncier, permis urbain d’habiter (PUH), acte d’aval, convention hypothécaire, carte grise d’engins etc.'
}

export const document_fees = {
    id: 'document_fees',
    title: 'Frais de gestion et dossier',
    detail: 'Des frais de gestion sont perçus pour couvrir les coûts liés à la gestion du crédit. Ces frais de gestion représentent un pourcentage du montant de crédit. Les frais de gestions sont fixés à 2% du montant lorsque le crédit est octroyé.  Les frais de dossier pour les crédits égalent ou inférieurs à un million de FCFA sont de 2500 FCFA. Pour les crédits supérieurs à un million de FCFA, les frais de dossier s’élèvent à 5.000 FCFA. Les frais de dossier ne sont pas remboursables.'
}

export const late_fees = {
    id: 'late_fees',
    title: 'Pénalités de retard',
    detail: 'Chaque retard est pénalisé par l’ajout d’un taux de 10 % applicable sur le montant en retard du crédit en fonction du nombre de jours de retard par rapport à la date prévue du remboursement. Toutefois, une période de grâce de cinq jours ouvrables est accordée au client. Dans le cas d’un remboursement effectué la sixième journée, les pénalités sont calculées depuis la date prévue du remboursement.'
}

export const mutual_credit_fund = {
    id: 'mutual_credit_fund',
    title: 'Fond mutuel de prévoyance crédit',
    detail: 'Le Fond mutuel de prévoyance crédit (FMPC) vise à éviter que la famille ou les descendants de l’emprunteur paye (nt) le solde du crédit prévu par le tableau d’amortissement au moment du décès. L’adhésion au FMPC est obligatoire pour l’emprunteur qui désire obtenir un crédit, sauf pour l’avance sur salaire. La souscription est de 1 % du montant du crédit consenti pour une durée n’excédant pas 24 mois et de 1,5 % pour les durées supérieures à 24 mois. Ce montant payé en totalité par l’emprunteur au moment du versement du crédit. A l’aide de la déclaration au Fond mutuel jointe au contrat de crédit, le montant retenu à cette fin versé dans le compte : « Fond mutuel de prévoyance crédit ». En cas de décès de l’emprunteur, l’institution achemine une demande de remboursement accompagnée du certificat de décès de l’emprunteur au Fond mutuel. Le Fond mutuel rembourse le solde résiduel du prêt prévu par le tableau d’amortissement à la date du décès. En cas de décès de l’emprunteur, le délai de transmission de son dossier au fond mutuel de prévoyance est d’un mois. '
}

export const synthesis_category_section = {
    id: 'synthesis_category',
    title: 'Synthèse De La Politique De Crédit De FASOCRED'
}
export const synthesis_category_consommation = {
    title: 'Consommation',
    examples: [
        {
            icon: <FaWallet className="synthesis_icon"/>,
            use: 'Avance salaire',
            duration: '1 mois',
            // amount: '25%',
            interest_rate: 'néant',
            well_off_savings: '0%',
            management_fees: '5%',
            late_fees: '10%',
            mutual_fund: 'Non Applicable'

        },{
            icon: <FaMoneyBillWave className="synthesis_icon"/>,
            use: 'Crédit social',
            duration: '12 mois',
            // amount: '5 millions',
            interest_rate: '10%',
            well_off_savings: '0%',
            management_fees: '2%',
            late_fees: '10%',
            mutual_fund: '1%'
        },{
            icon: <FaCouch className="synthesis_icon"/>,
            use: 'Crédit mobilier',
            duration: '36 mois',
            // amount: '5 millions',
            interest_rate: '10%',
            well_off_savings: '0%',
            management_fees: '2%',
            late_fees: '10%',
            mutual_fund: '1,5%'
        },{
            icon: <FaCar className="synthesis_icon"/>,
            use: 'Crédit véhicule',
            duration: '36 mois',
            // amount: '5 millions',
            interest_rate: '10%',
            well_off_savings: '0%',
            management_fees: '2%',
            late_fees: '10%',
            mutual_fund: '1,5%'
        },{
            icon: <FaHome className="synthesis_icon"/>,
            use: 'Crédit habitation',
            duration: '60 mois',
            // amount: '5 millions',
            interest_rate: '10%',
            well_off_savings: '0%',
            management_fees: '2%',
            late_fees: '10%',
            mutual_fund: '1,5%'
        }
    ]
}

export const synthesis_category_agriculture = {
    title: 'Agricole',
    examples: [
        {
            icon: <FaFillDrip className="synthesis_icon"/>,
            use: 'Crédit d’intrants',
            duration: '12  mois',
            // amount: '5 millions',
            interest_rate: '10%',
            well_off_savings: '15%',
            management_fees: '2%',
            late_fees: '10%',
            mutual_fund: '1%'

        },
        {
            icon:  <FaTractor className="synthesis_icon"/>,
            use: 'Crédit d’équipements',
            duration: '24 mois',
            // amount: '5 millions',
            interest_rate: '10%',
            well_off_savings: '15%',
            management_fees: '2%',
            late_fees: '10%',
            mutual_fund: '1%'

        },
        {
            icon:  <FaClipboardList className="synthesis_icon"/>,
            use: 'Crédit programme',
            duration: '12 mois',
            // amount: '5 millions',
            interest_rate: '10%',
            well_off_savings: '15%',
            management_fees: '2%',
            late_fees: '10%',
            mutual_fund: '1%'

        }
    ]
}

export const synthesis_category_sales = {
    title: 'Commercial',
    examples: [
        {
            icon: <FaBeer className="synthesis_icon"/>,
            use: 'Crédit d’inventaire',
            duration: '12 mois',
            // amount: '5 millions',
            interest_rate: '10%',
            well_off_savings: '15%',
            management_fees: '2%',
            late_fees: '10%',
            mutual_fund: '1%'

        },
        {
            icon: <FaStore className="synthesis_icon"/>,
            use: 'Préfinancement des marchés',
            duration: '12 mois',
            // amount: '5 millions',
            interest_rate: '10%',
            well_off_savings: '15%',
            management_fees: '2%',
            late_fees: '10%',
            mutual_fund: '1%'

        },
        {
            icon: <FaTrailer className="synthesis_icon"/>,
            use: 'Crédit d’équipements',
            duration: '12 mois',
            // amount: '5 millions',
            interest_rate: '10%',
            well_off_savings: '15%',
            management_fees: '2%',
            late_fees: '10%',
            mutual_fund: '1%'

        }
    ]
}


export const credit_conclusion = 'Les frais de dossier pour les crédits égalent ou inférieurs à un million de FCFA sont de 2500 FCFA. Pour les crédits supérieurs à un million de FCFA, les frais de dossier s’élèvent à 5.000 FCFA. Les frais de dossier ne sont pas remboursables.'