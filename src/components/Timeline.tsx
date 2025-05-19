import tool1 from '../assets/timeline/Tools.svg';
import tool2 from '../assets/timeline/designTools.svg';
import tool3 from '../assets/timeline/Ai_Tools.svg';
export default function ResumeTimeline() {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-8">
      <div className="flex justify-between pt-16">
        {/* Left Column - Work Experience */}
        <div className="w-1/2 pr-12 relative">
          {/* The curved line from top right */}
          {/* <svg className="absolute -top-16 -right-8" width="1000" height="150" viewBox="0 0 1000 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M1000 20 C800 20 600 20 400 20 C200 20 100 100 48 118 C40 120 30 120 20 120" 
              stroke="#D946EF" 
              strokeWidth="2" 
              fill="none"
            />
          </svg> */}
          
          <h2 className="text-2xl font-bold text-indigo-900 mb-12">WORK EXPERIENCE</h2>
          
          <div className="relative">
            {/* Timeline vertical line */}
            <div className="absolute h-full w-0.5 bg-purple-600 left-1"></div>
            
            {/* Experience Item 1 with connection from the curved line */}
            <div className="mb-16 relative pl-12">
              {/* Timeline dot that connects with the curved line */}
              <div className="absolute left-0 -ml-2 w-6 h-6 rounded-full bg-purple-900"></div>
              
              <h3 className="text-3xl font-bold text-gray-800 mb-1">Writer & Director</h3>
              <p className="text-xl text-gray-700">Siya: The Magic Within</p>
            </div>
            
            {/* Experience Item 2 */}
            <div className="mb-16 relative pl-12">
              <div className="absolute left-0 -ml-2 w-6 h-6 rounded-full bg-purple-900"></div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">Art Direction</h3>
              <p className="text-xl text-gray-700">Netflix original ( Serious Men )</p>
            </div>
            
            {/* Experience Item 3 */}
            <div className="mb-16 relative pl-12">
              <div className="absolute left-0 -ml-2 w-6 h-6 rounded-full bg-purple-900"></div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">Vfx Compositing</h3>
              <p className="text-xl text-gray-700">Envision Vfx</p>
            </div>
            
            {/* Experience Item 4 */}
            <div className="relative pl-12">
              <div className="absolute left-0 -ml-2 w-6 h-6 rounded-full bg-purple-900"></div>
              <h3 className="text-3xl font-bold text-gray-800 mb-1">Creative Director</h3>
              <p className="text-xl text-gray-700">Boat Media house</p>
            </div>
          </div>
        </div>
        
        {/* Right Column - Skills */}
        <div className="w-1/2 pl-12">
          <h2 className="text-2xl font-bold text-indigo-900 mb-12">SKILL AND EXPERTISE</h2>
          
          {/* Skill 1 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Compositing & 3D Tools</h3>
            
            {/* Tool icons */}
            <div className="flex space-x-4 mb-6">
           <img src={tool1} alt="" />
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
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Graphic Design & Editing</h3>
            
            {/* Tool icons */}
            <div className="flex space-x-4 mb-6">
            <img src={tool2} alt="" />
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
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">AI Tools For Filmmaking</h3>
            
            {/* Tool icons */}
            <div className="flex space-x-4 mb-6">
            <img src={tool3} alt="" />
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