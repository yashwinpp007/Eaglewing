import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/ServiceDetailPage';

export const metadata: Metadata = {
  title: 'Commercial Office Cleaning Melbourne & Sydney',
  description: 'Premium commercial office cleaning for corporate environments across Melbourne and Sydney. Verified cleans, flexible scheduling, real-time reporting.',
};

export default function CommercialOfficePage() {
  return (
    <ServiceDetailPage
      breadcrumb="Commercial Office Cleaning"
      eyebrow="CORPORATE CLEANING SPECIALISTS"
      heroTitle={<>OFFICES THAT<br /><span className="gold" style={{ fontStyle: 'italic' }}>PERFORM.</span></>}
      heroBody="Your workplace is a direct reflection of your brand. EagleWing delivers precision-maintained office environments that create the right impression — every single day."
      whyCards={[
        { title: 'Verified Every Clean', desc: 'QR check-ins and CleanProof™ digital sign-off give you proof of every completed service.', icon: <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg> },
        { title: 'Flexible Scheduling', desc: 'After-hours, early morning, or weekend cleans — scheduled around your business operations.', icon: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> },
        { title: 'Background-Checked Staff', desc: 'Every team member is police-checked, insured, and formally inducted before entering your facility.', icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
      ]}
      faqItems={[
        { q: 'Can you clean after hours?', a: 'Yes. The majority of our commercial office cleans are conducted after business hours to minimise disruption. We coordinate access with your facilities or building management team.' },
        { q: 'Do you supply your own equipment and products?', a: 'Absolutely. EagleWing supplies all equipment, chemicals, and consumables. We use TGA-listed, commercially approved products. You can also request eco-certified alternatives.' },
        { q: 'How do I know the clean has been done properly?', a: 'Our CleanProof™ system provides a real-time audit report after every clean — including a checklist sign-off, time stamps, and any issues flagged for follow-up.' },
      ]}
      relatedServices={[
        { href: '/services/medical-cleaning', title: 'Medical & Healthcare', desc: 'Infection-control cleaning for health environments.' },
        { href: '/services/strata-cleaning', title: 'Strata Cleaning', desc: 'Common area cleaning for residential buildings.' },
        { href: '/services/events-cleaning', title: 'Events & One-off', desc: 'One-time and event cleaning services.' },
      ]}
    />
  );
}
