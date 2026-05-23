'use client';

import Image from 'next/image';
import { PERSONAL_INFO, PROFILE_IMAGE } from '@/constants';

const sizeMap = {
  sm: { box: 'w-9 h-9', rounded: 'rounded-full', sizes: '36px' },
  md: {
    box: 'w-44 h-52 sm:w-52 sm:h-60',
    rounded: 'rounded-2xl',
    sizes: '208px',
  },
  lg: {
    box: 'w-56 h-64 sm:w-64 sm:h-72',
    rounded: 'rounded-2xl',
    sizes: '256px',
  },
} as const;

type ProfileAvatarProps = {
  size?: keyof typeof sizeMap;
  className?: string;
  priority?: boolean;
};

export function ProfileAvatar({
  size = 'md',
  className = '',
  priority = false,
}: ProfileAvatarProps) {
  const s = sizeMap[size];

  return (
    <div
      className={`profile-avatar relative shrink-0 overflow-hidden ${size === 'sm' ? `${s.box} ${s.rounded}` : ''} ${className}`}
    >
      <Image
        src={PROFILE_IMAGE}
        alt={PERSONAL_INFO.name}
        fill
        priority={priority}
        className="object-cover object-[center_15%]"
        sizes={s.sizes}
      />
    </div>
  );
}
