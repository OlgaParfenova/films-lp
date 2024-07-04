import { FC } from 'react';
import { YouTubePlayerProps } from './YouTubePlayer.props';

export const YouTubePlayer: FC<YouTubePlayerProps> = ({
  videoId,
  className,
  ...props
}) => {
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div {...props}>
      <iframe
        width='672'
        height='378'
        src={videoUrl}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        className={className}></iframe>
    </div>
  );
};
