/**
 * NAVIGATION HELPER UTILITY
 * PURPOSE: Centralized navigation system using React Router
 * ENSURES: Proper SPA routing with deep linking support
 * 
 * IMPORTANT FOR DEVELOPERS:
 * - All navigation uses React Router's navigate() function
 * - URLs update correctly on every navigation
 * - Each page must render correctly when accessed directly by its URL
 * - Routing is URL-driven, not state-driven
 */

import { SERVICE_ROUTES, PRODUCT_ROUTES, AI_ROUTES, WHO_WE_ARE_ROUTES } from '../routes/routes';

// Store navigate function reference
let navigateFunction: ((path: string) => void) | null = null;

/**
 * Set the navigate function from React Router
 * Call this in App component during initialization
 */
export function setNavigateFunction(navigate: (path: string) => void): void {
  navigateFunction = navigate;
}

/**
 * Navigate to a specific path
 * @param path - URL path to navigate to
 */
function navigateToPath(path: string): void {
  if (!navigateFunction) {
    console.error('[Navigation] Navigate function not initialized');
    return;
  }
  
  // Scroll to top for better UX
  window.scrollTo({ top: 0, behavior: 'auto' });
  
  // Navigate using React Router
  navigateFunction(path);
  
  console.log(`[Navigation] Navigated to: ${path}`);
}

/**
 * Navigate to service page
 */
export function navigateToService(serviceTitle: string): void {
  const path = SERVICE_ROUTES[serviceTitle];
  if (!path) {
    console.error(`[Navigation] Unknown service: ${serviceTitle}`);
    return;
  }
  navigateToPath(path);
}

/**
 * Navigate to product page
 */
export function navigateToProduct(productTitle: string): void {
  const path = PRODUCT_ROUTES[productTitle];
  if (!path) {
    console.error(`[Navigation] Unknown product: ${productTitle}`);
    return;
  }
  navigateToPath(path);
}

/**
 * Navigate to AI page
 */
export function navigateToAI(aiTitle?: string): void {
  const path = aiTitle ? AI_ROUTES[aiTitle] : AI_ROUTES['AI Solutions'];
  if (!path) {
    console.error(`[Navigation] Unknown AI solution: ${aiTitle}`);
    return;
  }
  navigateToPath(path);
}

/**
 * Navigate to Who We Are section
 */
export function navigateToWhoWeAre(item: string): void {
  const path = WHO_WE_ARE_ROUTES[item];
  if (!path) {
    console.error(`[Navigation] Unknown Who We Are item: ${item}`);
    return;
  }
  navigateToPath(path);
}

/**
 * Navigate to home page
 */
export function navigateToHome(): void {
  navigateToPath('/');
}

/**
 * Navigate to case studies
 */
export function navigateToCaseStudies(): void {
  navigateToPath('/case-studies');
}

/**
 * Service titles mapping (for consistency)
 */
export const SERVICE_TITLES = {
  CLOUD_PRACTICE: 'Cloud Practice',
  DIGITAL_ENGINEERING: 'Digital & Product Engineering',
  BIG_DATA: 'Big Data',
  APP_MODERNIZATION: 'App Modernization',
  SECURITY: 'Security',
  DATABASE_MANAGEMENT: 'Database Management',
  ERP_TESTING: 'ERP & Testing',
} as const;

/**
 * Product titles mapping (for consistency)
 */
export const PRODUCT_TITLES = {
  AGENT_STUDIO: 'Agent Studio',
  ATLAS_API_MANAGER: 'Atlas API Manager',
  OTTOHM_VIDEO: 'Ottohm Video',
  ITSM_TICKETING: 'ITSM Ticketing',
  AI_OPS: 'AI Ops Platform',
  SMART_CONTRACTS: 'Smart Contracts',
} as const;

/**
 * AI Solution titles mapping
 */
export const AI_TITLES = {
  BFSI_AGENTS: 'BFSI Agents',
  BRAND_MANAGEMENT: 'Brand Management Agents',
} as const;

/**
 * Who We Are items mapping
 */
export const WHO_WE_ARE_ITEMS = {
  OUR_TEAM: 'Our Team',
  ABOUT_US: 'About Us',
  PARTNERS: 'Partners',
  CAREERS: 'Careers',
  NEWS: 'News & Updates',
} as const;

/**
 * Utility to close all mobile menus
 */
export function closeAllMobileMenus(): void {
  if (typeof window === 'undefined') return;
  
  // Dispatch event to close mobile menus
  window.dispatchEvent(new CustomEvent('close-mobile-menu'));
  
  // Remove body scroll lock
  document.body.style.overflow = '';
  document.body.style.position = '';
  document.body.style.width = '';
}

/**
 * Utility to prevent body scroll (for mobile menus)
 */
export function preventBodyScroll(prevent: boolean): void {
  if (typeof window === 'undefined') return;
  
  if (prevent) {
    // Save current scroll position
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
  } else {
    // Restore scroll position
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }
}
