import StoreLayout from "@/components/store/StoreLayout";

export const metadata = {
    title: "NexaStore. - Store Dashboard",
    description: "NexaStore. - Store Dashboard",
};

export default function RootAdminLayout({ children }) {

    return (
        <>
            <StoreLayout>
                {children}
            </StoreLayout>
        </>
    );
}
