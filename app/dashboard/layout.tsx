import SideNav from '@/app/ui/dashboard/sidenav'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen">
            <div>
                <SideNav />
            </div>
            <div>
                {children}
            </div>

        </div>
    )
}