import { Container } from './common/Container';
import { Section } from './common/Section';
import { resumeData } from '../data/resume';

export function Skills() {
  const { skills } = resumeData;

  return (
    <Section id="skills" className="bg-gray-800">
      <Container>
        <h2 className="text-white mb-12">Core Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gray-700 rounded-xl p-8 shadow-softer hover:shadow-soft transition-all duration-300 border border-gray-600">
              <h3 className="text-lg font-serif font-bold mb-5 text-primary">{category}</h3>
              <ul className="space-y-3">
                {items.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-primary font-semibold mt-1">→</span>
                    <span className="text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
