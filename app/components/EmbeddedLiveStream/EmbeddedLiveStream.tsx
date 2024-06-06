'use client';
import React from 'react';

interface EmbeddedLiveStreamProps {
  youtubeVideoId: string;
}

const EmbeddedLiveStream: React.FC<EmbeddedLiveStreamProps> = ({
  youtubeVideoId,
}) => {
  const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;
  const chatUrl = `https://www.youtube.com/live_chat?v=${youtubeVideoId}&embed_domain=${
    typeof window !== 'undefined' ? window.location.hostname : ''
  }`;

  return (
    <div className="flex flex-col lg:flex-row w-full">
      <div className="w-full lg:w-3/4 aspect-w-16 aspect-h-9 h-[31vh] md:h-[70vh]">
        <iframe
          className="w-full h-full"
          src={embedUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Live Stream"
          onError={() =>
            alert(
              'An error occurred while loading the video. Please try again later.'
            )
          }
        ></iframe>
      </div>
      <div className="w-full lg:w-1/4 h-[500px] lg:h-auto lg:ml-4">
        <iframe
          className="w-full h-full"
          src={chatUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Live Chat"
          onError={() =>
            alert(
              'An error occurred while loading the chat. Please try again later.'
            )
          }
        ></iframe>
      </div>
    </div>
  );
};

export default EmbeddedLiveStream;
