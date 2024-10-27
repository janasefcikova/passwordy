import MenuItem from '@/app/ui/components/sidenav/menu-item';

const baseUrl = '/dashboard';

export const menuItems: MenuItem[] = [
  { name: 'Home', id: 'home', url: `${baseUrl}` },
  { name: 'Passwords', id: 'passwords', url: `${baseUrl}/passwords` },
  { name: 'Secrets', id: 'secrets', url: `${baseUrl}/secrets` },
  { name: 'Notes', id: 'notes', url: `${baseUrl}/notes` },
  { name: 'Settings', id: 'settings', url: `${baseUrl}/settings` },
  { name: 'Logout', id: 'logout', url: `/` },
];
