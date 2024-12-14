import { ReactNode } from "react";

export interface props {
  children: Readonly<ReactNode>;
}

export interface HomeProps {
  data?: APIGifArrayResponse;
  error?: string;
}

export interface ListOfGifsProps {
  data: APIGifData[];
}

interface APIGifArrayResponse {
  data: APIGifData[];
  meta: MetaData;
  pagination: Pagination;
}

interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}

interface MetaData {
  status: number;
  msg: string;
  response_id: string;
}

interface APIGifData {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: Images;
  user?: User;
  alt_text: string;
}

interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}

interface Images {
  original: Original;
  fixed_height: FixedSize;
  fixed_height_downsampled: FixedSizeDownsampled;
  fixed_height_small: FixedSize;
  fixed_width: FixedSize;
  fixed_width_downsampled: FixedSizeDownsampled;
  fixed_width_small: FixedSize;
}

interface FixedSizeDownsampled {
  height: number;
  width: number;
  size: string;
  url: string;
  webp_size: string;
  webp: string;
}

interface FixedSize {
  height: number;
  width: number;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
}

interface Original {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
  frames: string;
  hash: string;
}