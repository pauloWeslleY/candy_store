import { ReactElement } from 'react';

interface SocialButtonProps {
   children?: ReactNode;
   label: string;
   href: string;
   icon?: ReactElement;
}

export { SocialButtonProps };
