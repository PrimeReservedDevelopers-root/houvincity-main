'use client';
import React from 'react';

interface WithoutLiveChatProps {
  youtubeVideoId: string;
}

const WithoutLiveChat: React.FC<WithoutLiveChatProps> = ({
  youtubeVideoId,
}) => {
  const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}`;

  return (
    <div className="w-full flex justify-center mt-10">
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
    </div>
  );
};

export default WithoutLiveChat;
