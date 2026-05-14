import React from 'react';
import ServiceHero from '../components/ServiceHero';
import TrustBar from '../components/TrustBar';
import ImmediateResponse from '../components/ImmediateResponse';
import RestorationTech from '../components/RestorationTech';
import WaterDamageSigns from '../components/WaterDamageSigns';
import CommonSources from '../components/CommonSources';
import ServiceInsurance from '../components/ServiceInsurance';
import FreeInspection from '../components/FreeInspection';
import RestorationProcess from '../components/RestorationProcess';
import ServingAreas from '../components/ServingAreas';
import ServiceFAQ from '../components/ServiceFAQ';
import SecondaryCTA from '../components/SecondaryCTA';
import ServicePageCTA from '../components/ServicePageCTA';
import ServicePageFooter from '../components/ServicePageFooter';

function ServicePage() {
  return (
    <div className="service-page">
      <ServiceHero />
      <TrustBar />
      <ImmediateResponse />
      <RestorationTech />
      <WaterDamageSigns />
      <CommonSources />
      <ServiceInsurance />
      <FreeInspection />
      <RestorationProcess />
      <ServingAreas />
      <ServiceFAQ />
      <SecondaryCTA />
      <ServicePageCTA />
      <ServicePageFooter />
    </div>
  );
}

export default ServicePage;
