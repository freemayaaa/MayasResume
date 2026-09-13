import { Container } from './common/Container';
import { Section } from './common/Section';
import { Button } from './common/Button';
import { resumeData } from '../data/resume';

export function Contact() {
  const { contact } = resumeData;

  return (
    <Section id="contact" className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-white mb-4">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to collaborate? I'd love to hear from you.
          </p>

          <div className="bg-gray-700 bg-opacity-50 rounded-2xl p-10 mb-10 backdrop-blur-sm border border-gray-600 border-opacity-50">
            <div className="space-y-4">
              <a
                href={`mailto:${contact.email}`}
                className="block text-lg font-medium hover:text-blue-400 transition-colors"
              >
                ✉ {contact.email}
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="block text-lg font-medium hover:text-blue-400 transition-colors"
              >
                ☎ {contact.phone}
              </a>
              <div className="text-lg font-medium text-gray-300">
                📍 {contact.location}
              </div>
            </div>
          </div>

          <a
            href={`mailto:${contact.email}`}
            className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300 text-lg"
          >
            Send Email
          </a>
        </div>
      </Container>
    </Section>
  );
}
