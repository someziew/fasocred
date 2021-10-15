import { FaCreditCard, FaUsers, FaBriefcase } from 'react-icons/fa';
import React from 'react';
import {members_section, members_rights_section, members_obligations_section, members_suspensions_section} from './members';
import {credits_admision_conditions_section, credits_categories_section, financing_period_section, max_credits_section,
  interest_rate, well_off_savings, guarantees, document_fees, late_fees, mutual_credit_fund, synthesis_category_section
} from './credits'
import {savings_importance_section, savings_types_section, dat_rates_section, tontines_accounts_section} from './savings'
const sublinks = [
  {
    page: 'accueil',
    links: [
      { label: 'accueil', icon: <FaCreditCard />, url: '/' }
    ],
  },
  {
    page: 'membres',
    links: [
      { label: 'types de membres', icon: <FaUsers />, url: `/membres#${members_section.id}` },
      { label: 'droits des membres', icon: <FaUsers />, url: `/membres#${members_rights_section.id}` },
      { label: 'devoirs des membres', icon: <FaUsers />, url: `/membres#${members_obligations_section.id}` },
      { label: 'suspension ou exclusion de membre', icon: <FaUsers />, url: `/membres#${members_suspensions_section.id}` },
    ],
  },
  {
    page: 'crédits',
    links: [
      { label: 'Admissibilité Aux Crédits', icon: <FaBriefcase />, url: `/credits#${credits_admision_conditions_section.id}` },
      { label: 'Catégories De Crédit', icon: <FaBriefcase />, url: `/credits#${credits_categories_section.id}` },
      { label: 'Durée De Financement', icon: <FaBriefcase />, url: `/credits#${financing_period_section.id}` },
      { label: 'Montant Maximal De Crédit', icon: <FaBriefcase />, url: `/credits#${max_credits_section.id}` },
      { label: 'Taux D’intérêt', icon: <FaBriefcase />, url: `/credits#${interest_rate.id}` },
      { label: 'L’épargne Nantie', icon: <FaBriefcase />, url: `/credits#${well_off_savings.id}` },
      { label: 'Garanties', icon: <FaBriefcase />, url: `/credits#${guarantees.id}` },
      { label: 'Frais De Gestion Et Dossier', icon: <FaBriefcase />, url: `/credits#${document_fees.id}` },
      { label: 'Pénalités De Retard', icon: <FaBriefcase />, url: `/credits#${late_fees.id}` },
      { label: 'Fond Mutuel De Prévoyance Crédit', icon: <FaBriefcase />, url: `/credits#${mutual_credit_fund.id}` },
      { label: 'Synthèse De La Politique De Crédit De FASOCRED', icon: <FaBriefcase />, url: `/credits#${synthesis_category_section.id}` },
    ],
  },
  {
    page: 'epargnes',
    links: [
      { label: 'Epargnes Et Importance', icon: <FaBriefcase />, url: `/epargnes#${savings_importance_section.id}` },
      { label: 'Type De Produit D’épargne', icon: <FaBriefcase />, url: `/epargnes#${savings_types_section.id}` },
      { label: 'Grille De Taux Des DAT FASOCRED', icon: <FaBriefcase />, url: `/epargnes#${dat_rates_section.id}` },
      { label: 'Les Comptes Tontines', icon: <FaBriefcase />, url: `/epargnes#${tontines_accounts_section.id}` },
    ],
  },
  {
    page: 'contacts',
    links: [
      { label: 'contacts', icon: <FaBriefcase />, url: '/contacts' }
    ],
  },
];

export default sublinks;
