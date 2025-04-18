"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const BLOG_API_URL =
  "https://www.ceejaysmedia.com/dotCeeJayS/wp-json/wp/v2/posts";

interface Post {
  id: number;
  author: string;
  jetpack_featured_media_url: string;
  link: string;
  date: string;
  title: Title;
  excerpt: Excerpt;
}

interface Title {
  rendered: string;
}

interface Excerpt {
  rendered: string;
}

export default function BlogPage() {
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(false);
  const [blogData, setBlogData] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(`${BLOG_API_URL}`);
        const data = (await response.json()) as Post[];
        console.log(data)
        setBlogData(data);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="text-red-400">Loading...</div>
    );
  }

  if (error) {
    return (
      <div className="text-red-400">
        <p>An error occurred while fetching posts.</p>
      </div>
    )
  }

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-1 gap-6">
      <ul>
        {blogData && blogData.map((post) => (
          <li key={post.id} className="pt-6 pb-6 rounded-xl border-t border-b border-white/10 hover:-translate-y-1 hover:border-gray-100 hover:shadow-[0_2px_8px _rgba(59,130,246.0.2)] transition">
            {/* <img src={post.jetpack_featured_media_url} alt="" /> */}
            <Image src={post.jetpack_featured_media_url} alt="Featured Image" width={800} height={500} />
            <h2>{post.title.rendered}</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: post.excerpt.rendered.replace(/(<([^>]+)>)/gi, ""),
              }}
            />
            <p>{new Date(post.date).toLocaleDateString()}</p>
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Read More
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
