import { ImgHTMLAttributes } from 'react';
import avatarStyles from './css/Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props}: AvatarProps) {
  return (
    <img 
      className={hasBorder ? avatarStyles.avatarWithBorder : avatarStyles.avatar}
      {...props}
    />
  );
}
