import MenuItem from '@/app/ui/components/sidenav/menu-item';

const baseUrl = '/dashboard';

export const menuItems: MenuItem[] = [
  { name: 'Home', id: 'home', href: `${baseUrl}` },
  { name: 'Passwords', id: 'passwords', href: `${baseUrl}/passwords` },
  { name: 'Secrets', id: 'secrets', href: `${baseUrl}/secrets` },
  { name: 'Notes', id: 'notes', href: `${baseUrl}/notes` },
  { name: 'Settings', id: 'settings', href: `${baseUrl}/settings` },
  { name: 'Logout', id: 'logout', href: `/` },
];
