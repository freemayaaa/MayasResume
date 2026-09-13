import { Container } from './common/Container';
import { Section } from './common/Section';
import { resumeData } from '../data/resume';

export function Experience() {
  const { experience, freelance } = resumeData;

  return (
    <Section id="resume" className="bg-gray-900">
      <Container>
        <h2 className="text-white mb-12">Professional Journey</h2>

        <div className="space-y-6">
          {experience.map((job, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-8 border border-gray-700 hover:shadow-soft transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-5">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white">{job.title}</h3>
                  <p className="text-primary font-semibold mt-1">{job.company}</p>
                </div>
                <span className="text-gray-400 text-sm font-medium whitespace-nowrap">{job.period}</span>
              </div>

              <ul className="space-y-2">
                {job.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-3 text-gray-300">
                    <span className="text-primary font-semibold mt-1 flex-shrink-0">▸</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Freelance Section */}
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl p-8 border border-gray-600">
            <h3 className="text-xl font-serif font-bold text-white mb-4">Freelance & Independent Projects</h3>
            <p className="text-gray-300 leading-relaxed">{freelance}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
