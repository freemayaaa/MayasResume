import { useRef, useState } from 'react';
import { Container } from './common/Container';
import { Section } from './common/Section';
import { projectsData } from '../data/projects';

function ProjectHeader({ category, title, description, tags }) {
  const headerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!headerRef.current) return;

    const rect = headerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = (e.clientX - rect.left - centerX) / 10;
    const y = (e.clientY - rect.top - centerY) / 10;

    setTilt({ x: y, y: -x });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={headerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="mb-10 text-center transition-transform duration-100"
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      <h3 className="text-4xl font-serif font-bold text-white mb-3">
        {category}
      </h3>
      <h4 className="text-xl text-primary font-semibold mb-4">{title}</h4>
      <p className="text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">{description}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {tags.map((tag, tIdx) => (
          <span
            key={tIdx}
            className="px-3 py-1 bg-gray-800 border border-primary border-opacity-40 rounded-full text-sm text-gray-300 hover:border-primary hover:border-opacity-100 transition-all"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function Lightbox({ image, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 cursor-pointer"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-[90vh] flex items-center justify-center cursor-default"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={image}
          alt="Full size design"
          className="max-w-full max-h-[90vh] object-contain rounded-xl"
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold hover:bg-gray-200 transition-colors"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Section id="work" className="bg-gray-800">
      <Container>
        <h2 className="text-white mb-16 text-center">My Work</h2>

        <div className="space-y-20 max-w-7xl mx-auto">
          {projectsData.map((proj, idx) => (
            <div key={idx} className="text-center">
              {/* Project Header with Parallax Tilt */}
              <ProjectHeader
                category={proj.category}
                title={proj.title}
                description={proj.description}
                tags={proj.tags}
              />

              {/* Image Grid - Side by Side Horizontal Centered */}
              <div className="flex flex-wrap gap-6 justify-center items-center">
                {proj.images.map((img, imgIdx) => {
                  const isGif = img.toLowerCase().endsWith('.gif');
                  const isEmailBlasts = proj.category === 'Email Blasts';
                  const containerSize = isGif ? { width: '1000px', height: '800px' } : isEmailBlasts ? { width: '350px', height: '280px' } : { width: '500px', height: '400px' };

                  return (
                  <div
                    key={imgIdx}
                    onClick={() => setSelectedImage(img)}
                    className="cursor-pointer group flex flex-col items-center"
                  >
                    <div className="overflow-hidden transition-transform duration-300 hover:scale-105 flex items-center justify-center"
                      style={containerSize}
                    >
                      <img
                        src={img}
                        alt={`${proj.title} - ${imgIdx + 1}`}
                        className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Lightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </Section>
  );
}
