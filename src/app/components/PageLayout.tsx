/**
 * Page Layout Wrapper
 * Provides common navigation handlers and layout structure for all pages
 */

import React, { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  navigateToService,
  navigateToProduct,
  navigateToAI,
  navigateToWhoWeAre,
  navigateToHome,
  navigateToCaseStudies,
} from '../utils/navigationHelper';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const navigate = useNavigate();

  // Common navigation handlers
  const handleServiceClick = (serviceTitle: string) => {
    navigateToService(serviceTitle);
  };

  const handleProductClick = (productTitle: string) => {
    navigateToProduct(productTitle);
  };

  const handleAIClick = (aiTitle?: string) => {
    navigateToAI(aiTitle);
  };

  const handleWhoWeAreItemClick = (item: string) => {
    navigateToWhoWeAre(item);
  };

  const handleLogoClick = () => {
    navigateToHome();
  };

  const handleGrowWithUsClick = () => {
    navigateToCaseStudies();
  };

  const handleClose = () => {
    navigate(-1); // Go back to previous page
  };

  // Clone children and pass props
  return React.cloneElement(children as React.ReactElement, {
    onClose: handleClose,
    onServiceClick: handleServiceClick,
    onAIClick: handleAIClick,
    onProductClick: handleProductClick,
    onGrowWithUsClick: handleGrowWithUsClick,
    onWhoWeAreItemClick: handleWhoWeAreItemClick,
    onLogoClick: handleLogoClick,
    onGetStartedClick: () => {}, // TODO: Add Get Started modal handler
  });
}