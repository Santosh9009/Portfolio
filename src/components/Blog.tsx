import { ArrowUpRight } from "lucide-react";

export default function BlogPostSection() {
  const blogPosts = [
    {
      id: 1,
      image: "/src/assets/blog/blogpost1.jpg",
      category: "Visual Narrative",
      author: "Hetansa R",
      date: "Mar 5, 2025",
      title: "The Hero's Journey in Hindu Mythology: Beyond the...",
    },
    {
      id: 2,
      image: "/src/assets/blog/blogpost2.jpg",
      category: "Film Analysis",
      author: "Hetansa R",
      date: "Feb 11, 2025",
      title: "The Self-Discovery Journey in Tamasha",
    },
    {
      id: 3,
      image: "/src/assets/blog/blogpost3.jpg",
      category: "Directorial Vision",
      author: "Hetansa R",
      date: "Jan 25, 2025",
      title: "Life Through a Cinematic Lens",
    }
  ];

  return (
    <div className="min-h-screen w-full py-16 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-[48px] font-bold text-[#2D2D2D]">From my blog post</h2>
          <button className="px-10 py-4 bg-gradient-to-r from-[#AB69B3] to-[#C7619C] text-white rounded-full hover:opacity-90 transition-opacity text-xl font-medium">
            See All
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <div key={post.id} className="rounded-[24px] overflow-hidden bg-white h-full">
              <div className="relative ">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 right-3 bg-[#C7619C] rounded-full p-5 cursor-pointer hover:opacity-90 transition-opacity shadow-lg">
                  <ArrowUpRight className="text-white" size={64} />
                </div>
              </div>
              
              <div className="p-8">
                <div className="inline-block bg-[#F5F5F5] rounded-full px-8 py-3 mb-6">
                  <span className="text-[#2D2D2D] font-medium text-lg">{post.category}</span>
                </div>
                
                <div className="flex items-center text-[#C7619C] mb-4 text-base">
                  <span className="mr-3">•</span>
                  <span className="mr-6">{post.author}</span>
                  <span className="mr-3">•</span>
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-2xl font-semibold text-[#2D2D2D] leading-tight">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}