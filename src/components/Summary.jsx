import { Container } from './common/Container';
import { Section } from './common/Section';
import { resumeData } from '../data/resume';

export function Summary() {
  return (
    <Section id="summary" className="bg-gray-800">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-white mb-6">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            {resumeData.summary}
          </p>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <div className="grid grid-cols-2 gap-6 md:gap-12">
              <div>
                <div className="text-4xl font-serif font-bold text-primary mb-2">10+</div>
                <p className="text-gray-400">Years of Experience</p>
              </div>
              <div>
                <div className="text-4xl font-serif font-bold text-primary mb-2">100%</div>
                <p className="text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
