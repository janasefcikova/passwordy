import SideNav from '@/app/ui/components/sidenav/side-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="w-1/4">
        <SideNav />
      </div>
      <div className="w-3/4">{children}</div>
    </div>
  );
}
