/**
 * CENTRALIZED ROUTING CONFIGURATION
 * 
 * IMPORTANT FOR DEVELOPERS:
 * - Each page must render correctly on initial load when accessed directly by its URL
 * - Routing must be URL-driven, not state-driven
 * - All navigation must use React Router's Link or navigate() functions
 * - Deep linking is fully supported - every route is accessible directly
 */

import React from 'react';
import { RouteObject } from 'react-router-dom';
import Desktop2 from '../../imports/Desktop72';
import { PageLayout } from '../components/PageLayout';

// Import all page components
import { CloudPracticePage } from '../components/CloudPracticePage';
import { DigitalEngineeringPage } from '../components/DigitalEngineeringPage';
import { BigDataPage } from '../components/BigDataPage';
import { AppModernizationPage } from '../components/AppModernizationPage';
import { SecurityPage } from '../components/SecurityPage';
import { DatabaseManagementPage } from '../components/DatabaseManagementPage';
import { ERPTestingPage } from '../components/ERPTestingPage';
import { AIPage } from '../components/AIPage';
import BFSIAgentsPage from '../components/BFSIAgentsPage';
import { BrandManagementPage } from '../components/BrandManagementPage';
import { AgentStudioPage } from '../components/AgentStudioPage';
import { AtlasAPIManagerPage } from '../components/AtlasAPIManagerPage';
import { OttohmVideoPage } from '../components/OttohmVideoPage';
import ITSMTicketingPage from '../components/ITSMTicketingPage';
import AIOpsPage from '../components/AIOpsPage';
import SmartContractsPage from '../components/SmartContractsPage';
import { OurTeamPage } from '../components/OurTeamPage';
import AboutUsPage from '../components/AboutUsPage';
import PartnersPage from '../components/PartnersPage';
import CareersPage from '../components/CareersPage';
import NewsUpdatesPage from '../components/NewsUpdatesPage';
import { CaseStudiesPage } from '../components/CaseStudiesPage';

/**
 * Route Definitions
 * URL structure follows clear hierarchy for better SEO and UX
 */
export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Desktop2 onSearchClick={() => {}} />,
  },
  // Services Routes
  {
    path: '/services/cloud-practice',
    element: <PageLayout><CloudPracticePage /></PageLayout>,
  },
  {
    path: '/services/digital-engineering',
    element: <PageLayout><DigitalEngineeringPage /></PageLayout>,
  },
  {
    path: '/services/big-data',
    element: <PageLayout><BigDataPage /></PageLayout>,
  },
  {
    path: '/services/app-modernization',
    element: <PageLayout><AppModernizationPage /></PageLayout>,
  },
  {
    path: '/services/security',
    element: <PageLayout><SecurityPage /></PageLayout>,
  },
  {
    path: '/services/database-management',
    element: <PageLayout><DatabaseManagementPage /></PageLayout>,
  },
  {
    path: '/services/erp-testing',
    element: <PageLayout><ERPTestingPage /></PageLayout>,
  },
  // AI Solutions Routes
  {
    path: '/ai-solutions',
    element: <PageLayout><AIPage /></PageLayout>,
  },
  {
    path: '/ai-solutions/bfsi-agents',
    element: <PageLayout><BFSIAgentsPage /></PageLayout>,
  },
  {
    path: '/ai-solutions/brand-management',
    element: <PageLayout><BrandManagementPage /></PageLayout>,
  },
  // Products Routes
  {
    path: '/products/agent-studio',
    element: <PageLayout><AgentStudioPage /></PageLayout>,
  },
  {
    path: '/products/atlas-api-manager',
    element: <PageLayout><AtlasAPIManagerPage /></PageLayout>,
  },
  {
    path: '/products/ottohm-video',
    element: <PageLayout><OttohmVideoPage /></PageLayout>,
  },
  {
    path: '/products/itsm-ticketing',
    element: <PageLayout><ITSMTicketingPage /></PageLayout>,
  },
  {
    path: '/products/ai-ops',
    element: <PageLayout><AIOpsPage /></PageLayout>,
  },
  {
    path: '/products/smart-contracts',
    element: <PageLayout><SmartContractsPage /></PageLayout>,
  },
  // Who We Are Routes
  {
    path: '/who-we-are/our-team',
    element: <PageLayout><OurTeamPage /></PageLayout>,
  },
  {
    path: '/who-we-are/about-us',
    element: <PageLayout><AboutUsPage /></PageLayout>,
  },
  {
    path: '/who-we-are/partners',
    element: <PageLayout><PartnersPage /></PageLayout>,
  },
  {
    path: '/who-we-are/careers',
    element: <PageLayout><CareersPage /></PageLayout>,
  },
  {
    path: '/who-we-are/news-updates',
    element: <PageLayout><NewsUpdatesPage /></PageLayout>,
  },
  // Other Routes
  {
    path: '/case-studies',
    element: <PageLayout><CaseStudiesPage /></PageLayout>,
  },
];

/**
 * URL Path Mappings
 * Used by navigationHelper to convert titles to URLs
 */
export const SERVICE_ROUTES: Record<string, string> = {
  'Cloud Practice': '/services/cloud-practice',
  'Digital & Product Engineering': '/services/digital-engineering',
  'Big Data': '/services/big-data',
  'App Modernization': '/services/app-modernization',
  'Security': '/services/security',
  'Database Management': '/services/database-management',
  'ERP & Testing': '/services/erp-testing',
};

export const PRODUCT_ROUTES: Record<string, string> = {
  'Agent Studio': '/products/agent-studio',
  'Atlas API Manager': '/products/atlas-api-manager',
  'Ottohm Video': '/products/ottohm-video',
  'ITSM Ticketing': '/products/itsm-ticketing',
  'AI Ops Platform': '/products/ai-ops',
  'Smart Contracts': '/products/smart-contracts',
};

export const AI_ROUTES: Record<string, string> = {
  'AI Solutions': '/ai-solutions',
  'BFSI Agents': '/ai-solutions/bfsi-agents',
  'Brand Management Agents': '/ai-solutions/brand-management',
};

export const WHO_WE_ARE_ROUTES: Record<string, string> = {
  'Our Team': '/who-we-are/our-team',
  'About Us': '/who-we-are/about-us',
  'Partners': '/who-we-are/partners',
  'Careers': '/who-we-are/careers',
  'News & Updates': '/who-we-are/news-updates',
};