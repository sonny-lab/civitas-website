import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Dummy data for blog posts and development updates
const initialBlogPosts = [
  {
    title: "The Future of Civitas",
    date: "August 2024",
    excerpt: "A look into upcoming features and our vision for the game's evolution.",
    content: "We are excited to share our plans for future updates, including new political systems, expanded diplomacy options, and enhanced educational modules. Stay tuned for more!"
  },
  {
    title: "Welcome to Civitas",
    date: "December 2024",
    excerpt: "Introducing our unique political strategy simulation that combines entertainment with education.",
    content: "Civitas is more than just a game - it's an immersive experience that teaches players about political strategy, governance, and decision-making in a fun and engaging way."
  },
  {
    title: "The Art of Political Strategy",
    date: "November 2024", 
    excerpt: "Exploring the complex mechanics that make political simulation both challenging and rewarding.",
    content: "Our game mechanics are designed to reflect real-world political challenges while maintaining an entertaining gameplay experience."
  }
];

const initialDevelopmentUpdates = [
  {
    title: "Core Gameplay Systems",
    status: "In Progress",
    description: "Developing the fundamental political mechanics and decision trees that form the heart of Civitas."
  },
  {
    title: "User Interface Design",
    status: "Planning",
    description: "Creating an intuitive interface for the Civitas website."
  },
  {
    title: "Educational Content Integration",
    status: "Research Phase",
    description: "Working with political science experts to ensure accuracy and educational value."
  }
];

function App() {
  const [blogPosts, setBlogPosts] = React.useState(initialBlogPosts);
  const [developmentUpdates, setDevelopmentUpdates] = React.useState(initialDevelopmentUpdates);

  // Load content from markdown files
  useEffect(() => {
    // For now, we'll use static data since we can't dynamically import markdown files in the browser
    // In a real implementation, this would fetch from an API or be able to handle markdown files directly
    // For now, we'll use static data for the blog posts
    setBlogPosts(initialBlogPosts);
    setDevelopmentUpdates(initialDevelopmentUpdates);
  }, []);

  const renderContent = () => {
    const path = window.location.pathname;

    if (path.startsWith('/blog')) {
      const postId = path.substring('/blog/'.length);
      const post = blogPosts.find(p => p.title.toLowerCase().replace(/ /g, '-') === postId);
      if (post) {
        return (
          <div className="page-container">
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-gray-600 text-sm mb-4">{post.date}</p>
            <div className="prose prose-lg">
              {post.content}
            </div>
          </div>
        );
      } else {
        return <p>Post not found.</p>;
      }
    } else if (path.startsWith('/development')) {
      const updateId = path.substring('/development/'.length);
      const update = developmentUpdates.find(u => u.title.toLowerCase().replace(/ /g, '-') === updateId);
      if (update) {
        return (
          <div className="page-container">
            <h1 className="text-4xl font-bold mb-4">{update.title}</h1>
            <p className="text-gray-600 text-sm mb-4">Status: {update.status}</p>
            <div className="prose prose-lg">
              {update.description}
            </div>
          </div>
        );
      } else {
        return <p>Update not found.</p>;
      }
    } else {
      return (
        <div className="home-page">
          <div className="hero-section">
            <h1 className="text-6xl md:text-8xl font-bold text-white castle-title">
              Civitas
            </h1>
            <p className="text-xl md:text-2xl text-amber-100 mb-8 leading-relaxed">
              A unique political strategy simulation that combines entertainment, education, and strategic thinking in the grand halls of power.
            </p>
          </div>
          <div className="content-section">
            <div className="max-w-4xl mx-auto px-6 space-y-8">
              <h2 className="text-3xl font-bold mb-4">Latest News & Updates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{post.date}</p>
                    <p className="text-gray-700 text-base">{post.excerpt}</p>
                    <Link to={`/blog/${post.title.toLowerCase().replace(/ /g, '-')}`} className="text-blue-500 hover:underline mt-4 block">Read More</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <Router>
      <div className="app-container">
        <nav className="bg-gray-800 text-white p-4">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Crown className="w-8 h-8 text-amber-400" />
              <span className="text-2xl font-bold">Civitas</span>
            </div>
            <div className="space-x-4">
              <Link to="/" className="text-white hover:text-amber-400">Home</Link>
              <Link to="/about" className="text-white hover:text-amber-400">About the Game</Link>
              <Link to="/blog" className="text-white hover:text-amber-400">Blog</Link>
              <Link to="/development" className="text-white hover:text-amber-400">Development</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/about" element={renderContent()} />
          <Route path="/blog" element={renderContent()} />
          <Route path="/development" element={renderContent()} />
          <Route path="/" element={renderContent()} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


