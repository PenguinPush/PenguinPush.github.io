import Project from '@/components/project';

export default function ProjectsPage({
  activeProject,
  projectHashes,
  getImagePath,
}) {
  const projectData = [
    [
      '📸 Cullergrader',
      'wait i promise this one is pretty cool it uses perceptual hashes to group images by similarity so you can easily sort through thousands of photos if youre like me and have the habit of taking too many photos at once',
      getImagePath('/images/projects/placeholder.png'),
      ['Java', 'Swing UI'],
      'https://github.com/PenguinPush/cullergrader',
      'https://github.com/PenguinPush/cullergrader',
    ],
    [
      '🐻 FaunaDex',
      'this one is cool but maybe i should deploy it somewhere so its actually usable and refine the pipeline part a bit, someone remind me to add a readme to the github',
      getImagePath('/images/projects/placeholder.png'),
      ['NumPy', 'GCP', 'OpenAI', 'React'],
      'https://github.com/PenguinPush/faunadex',
      'https://github.com/PenguinPush/faunadex',
    ],
    [
      '💪 Physiotherapy Tool',
      'cant really deploy this one LOL but at least i can add the demo video https://devpost.com/software/the-exercists',
      getImagePath('/images/projects/physiotherapy.png'),
      ['C++', 'Python', 'Arduino'],
      'https://github.com/iantang08/UTRAHacks2025',
      'https://github.com/iantang08/UTRAHacks2025',
    ],
    [
      '🗼 Pickle',
      'this one is pretty awesome i can probably deploy this one too so you can like give the sms stuff a shot which i think would be kinda impressive',
      getImagePath('/images/projects/pickle.png'),
      ['Flask', 'Twilio', 'MongoDB', 'Cohere'],
      'https://github.com/PenguinPush/deltahacks-xi',
      'https://github.com/PenguinPush/deltahacks-xi',
    ],
    [
      '🎸 Vivid Bedroom (DEMO)',
      'the only one currently with a demo https://penguinpush.github.io/mikucontest-2024 i think its pretty awesome',
      getImagePath('/images/projects/miku.png'),
      ['HTML', 'three.js', 'TextAlive'],
      'https://penguinpush.github.io/mikucontest-2024',
      'https://github.com/PenguinPush/mikucontest-2024',
    ],
    [
      '👉 TableTablet',
      'tabletablet i can probably make downloadable but this also deserves a demo video tbh, i will make demo videos for all of them along with download links n stuff. should they be youtube or hosted here (implementing a video player sounds hard maybe just yt)',
      getImagePath('/images/projects/tabletablet.png'),
      ['Python', 'MediaPipe', 'OpenCV'],
      'https://github.com/PenguinPush/cullergrader',
      'https://github.com/PenguinPush/cullergrader',
    ],
    [
      '🤖 DYLAN.AI',
      'this one is really old and ill probably do a demo video with download link this is the one that uses voice commands and stuff its cool its cool',
      getImagePath('/images/projects/placeholder.png'),
      ['OpenAI', 'Cohere', 'GCP'],
      'https://github.com/PenguinPush/DylanAI',
      'https://github.com/PenguinPush/DylanAI',
    ],
  ];

  return (
    <div className="p-2">
      <div className="flex flex-col space-y-2">
        {projectData.map((value, index) => (
          <Project
            key={index}
            name={projectData[index][0]}
            description={projectData[index][1]}
            image={projectData[index][2]}
            techStack={projectData[index][3]}
            demo={projectData[index][4]}
            repo={projectData[index][5]}
            hash={projectHashes[index]}
            index={index}
            activeProject={activeProject}
          />
        ))}
      </div>
    </div>
  );
}
