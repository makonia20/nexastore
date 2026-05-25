import AdminLayout from "@/components/admin/AdminLayout";

export const metadata = {
    title: "NexaStore. - Admin",
    description: "NexaStore. - Admin",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <AdminLayout>
                {children}
            </AdminLayout>
        </>
    );
}
