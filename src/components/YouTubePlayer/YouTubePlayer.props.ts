import { HTMLAttributes } from 'react';

type YouTubePlayer = { videoId: string };

export type YouTubePlayerProps = HTMLAttributes<HTMLDivElement> & YouTubePlayer;
