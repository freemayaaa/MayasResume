import { Container } from './common/Container';
import { resumeData } from '../data/resume';

export function Hero() {
  const { name, title, contact } = resumeData;

  return (
    <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-gray-900 py-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <div className="slide-in-up">
            <h1 className="text-white mb-2">{name}</h1>
            <p className="text-2xl md:text-3xl font-light text-primary mb-8">{title}</p>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed max-w-md">
              Bringing creative vision to life through design, leadership, and production expertise.
            </p>

            <div className="space-y-3">
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors text-lg">
                <span className="w-6">✉</span> {contact.email}
              </a>
              <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-gray-300 hover:text-primary transition-colors text-lg">
                <span className="w-6">☎</span> {contact.phone}
              </a>
              <div className="flex items-center gap-3 text-gray-300 text-lg">
                <span className="w-6">📍</span> {contact.location}
              </div>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-soft border border-gray-700 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
              <img
                src="/profile.jpg"
                alt="Maya Lucey"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="text-center text-gray-500 text-sm p-4">Upload profile.jpg to public folder</div>';
                }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
