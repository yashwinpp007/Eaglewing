import type { Metadata } from 'next';
import ServiceDetailPage from '@/components/ServiceDetailPage';

export const metadata: Metadata = {
  title: 'Medical & Healthcare Cleaning Melbourne & Sydney',
  description: 'Hospital-grade infection control cleaning for medical centres, clinics, hospitals, and aged care across Melbourne and Sydney. TGA-approved protocols.',
};

export default function MedicalCleaningPage() {
  return (
    <ServiceDetailPage
      breadcrumb="Medical & Healthcare Cleaning"
      eyebrow="INFECTION CONTROL SPECIALISTS"
      heroTitle={<>MEDICAL-GRADE CLEAN.<br /><span className="gold" style={{ fontStyle: 'italic' }}>ZERO COMPROMISE.</span></>}
      heroBody="EagleWing's medical cleaning division operates to the highest infection control standards — protecting patients, staff, and visitors in some of Australia's most hygiene-critical environments."
      whyCards={[
        {
          title: 'TGA-Approved Protocols',
          desc: 'All chemicals and procedures are TGA-listed and aligned with Australian infection control guidelines.',
          icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
        },
        {
          title: 'Specialist-Trained Teams',
          desc: 'Every healthcare cleaner completes specialised infection control training before entering any medical environment.',
          icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>,
        },
        {
          title: 'CleanProof™ Verification',
          desc: 'Every clean is documented with digital sign-off, ATP testing records, and a client-visible audit trail.',
          icon: <svg viewBox="0 0 24 24" aria-hidden="true"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>,
        },
      ]}
      faqItems={[
        { q: 'What types of medical facilities do you clean?', a: 'We service general practices, specialist clinics, hospitals, aged care facilities, dental surgeries, physiotherapy centres, and allied health providers.' },
        { q: 'Are your cleaners trained in infection control?', a: 'Yes. All our medical cleaning staff complete a formal infection control training program covering hand hygiene, PPE use, colour-coded equipment protocols, and waste segregation.' },
        { q: 'How do you verify the clean has been completed?', a: 'Via our CleanProof™ digital reporting system. Every area is signed off in real time, with ATP swab results, chemical records, and a time-stamped audit trail delivered to your inbox.' },
      ]}
      relatedServices={[
        { href: '/services/commercial-office-cleaning', title: 'Commercial Office', desc: 'Precision cleaning for corporate workspaces.' },
        { href: '/services/school-cleaning', title: 'Education & Schools', desc: 'Safe cleaning solutions for learning environments.' },
        { href: '/services/specialised-cleaning', title: 'Specialised Cleaning', desc: 'Advanced decontamination and hazardous area services.' },
      ]}
    />
  );
}
