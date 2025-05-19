import tool1 from '../assets/timeline/Tools.svg';
import tool2 from '../assets/timeline/designTools.svg';
import tool3 from '../assets/timeline/Ai_Tools.svg';
export default function ResumeTimeline() {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-24 min-h-screen flex items-center">
      <div className="flex flex-col md:flex-row md:justify-between w-full">
        {/* Left Column - Work Experience */}
        <div className="w-full md:w-1/2 md:pr-12 relative mb-12 md:mb-0">
          <h2 className="text-xl md:text-2xl font-bold text-indigo-900 mb-8 md:mb-12">WORK EXPERIENCE</h2>
          
          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute h-full w-0.5 bg-purple-600 left-1"></div>
            
            {/* Experience Items */}
            <div className="mb-8 md:mb-16 relative pl-8 md:pl-12">
              <div className="absolute left-0 -ml-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-purple-900"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">Writer & Director</h3>
              <p className="text-lg md:text-xl text-gray-700">Siya: The Magic Within</p>
            </div>
            
            <div className="mb-8 md:mb-16 relative pl-8 md:pl-12">
              <div className="absolute left-0 -ml-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-purple-900"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">Art Direction</h3>
              <p className="text-lg md:text-xl text-gray-700">Netflix original ( Serious Men )</p>
            </div>
            
            <div className="mb-8 md:mb-16 relative pl-8 md:pl-12">
              <div className="absolute left-0 -ml-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-purple-900"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">Vfx Compositing</h3>
              <p className="text-lg md:text-xl text-gray-700">Envision Vfx</p>
            </div>
            
            <div className="relative pl-8 md:pl-12">
              <div className="absolute left-0 -ml-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-purple-900"></div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">Creative Director</h3>
              <p className="text-lg md:text-xl text-gray-700">Boat Media house</p>
            </div>
          </div>
        </div>
        
        {/* Right Column - Skills */}
        <div className="w-full md:w-1/2 md:pl-12">
          <h2 className="text-xl md:text-2xl font-bold text-indigo-900 mb-8 md:mb-12">SKILL AND EXPERTISE</h2>
          
          {/* Skill 1 */}
          <div className="mb-8 md:mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Compositing & 3D Tools</h3>
            
            {/* Tool icons */}
            <div className="flex space-x-4 mb-4 md:mb-6 overflow-x-auto">
              <img src={tool1} alt="Compositing Tools" className="max-w-full h-auto" />
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                style={{ width: '90%' }}
              ></div>
            </div>
          </div>
          
          {/* Skill 2 */}
          <div className="mb-8 md:mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">Graphic Design & Editing</h3>
            
            {/* Tool icons */}
            <div className="flex space-x-4 mb-4 md:mb-6 overflow-x-auto">
              <img src={tool2} alt="Design Tools" className="max-w-full h-auto" />
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                style={{ width: '85%' }}
              ></div>
            </div>
          </div>
          
          {/* Skill 3 */}
          <div className="mb-8 md:mb-16">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 md:mb-6">AI Tools For Filmmaking</h3>
            
            {/* Tool icons */}
            <div className="flex space-x-4 mb-4 md:mb-6 overflow-x-auto">
              <img src={tool3} alt="AI Tools" className="max-w-full h-auto" />
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div 
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" 
                style={{ width: '80%' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}