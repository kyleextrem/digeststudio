
import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';

const posts: any[] = [];

const Blog: React.FC = () => {
  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The Digest Blog</span>
            <h1 className="text-h1 font-heading font-bold">Local Insights. <span className="text-primary italic">Pure Strategy.</span></h1>
          </div>
          <p className="text-body text-accent/60 max-w-sm md:mb-4">
            Practical marketing advice specifically for Newcastle business owners.
          </p>
        </div>

        {posts.length > 0 ? (
          <>
            {/* Featured Post would go here */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {posts.map((post, i) => (
                <div key={i} className="group cursor-pointer">
                  {/* Post preview logic */}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="py-32 text-center border-2 border-dashed border-accent/10 rounded-[48px]">
            <h2 className="text-3xl font-heading font-bold text-accent/40 mb-4">Insights coming soon.</h2>
            <p className="text-xl text-accent/30 max-w-md mx-auto">We're currently documenting our latest local marketing strategies. Check back shortly.</p>
          </div>
        )}

        <div className="mt-32 text-center">
          <button className="bg-white border-2 border-accent text-accent px-12 py-5 rounded-2xl font-bold text-xl hover:bg-accent hover:text-white transition-all">
            Stay Updated
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
