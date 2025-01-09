import { useState } from "react";
import { Layout } from "antd";
import SidebarMenu from "../features/profile/components/SidebarMenu";
import PrivacySettings from "../features/profile/components/PrivacySettings";
import NotificationsSettings from "../features/profile/components/NotificationsSettings";
import PasswordChange from "../features/profile/components/PasswordChange";
import AddressManagement from "../features/profile/components/AddressManagement";
import BankInfo from "../features/profile/components/BankInfo";
import ProfileContent from "../features/profile/components/ProfileContent";

const { Content } = Layout;

const Profile = () => {
    const [selectedMenu, setSelectedMenu] = useState("profile");

    const renderContent = () => {
        switch (selectedMenu) {
            case "profile":
                return <ProfileContent />;
            case "bank":
                return <BankInfo />;
            case "address":
                return <AddressManagement />;
            case "password":
                return <PasswordChange />;
            case "notifications":
                return <NotificationsSettings />;
            case "privacy":
                return <PrivacySettings />;
            default:
                return <div>Chọn một mục từ menu bên trái</div>;
        }
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <SidebarMenu selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />

            {/* Content */}
            <Layout>
                <Content style={{ padding: "20px", background: "#f5f5f5" }}>
                    <div
                        style={{
                            maxWidth: "800px",
                            margin: "0 auto",
                            background: "#fff",
                            padding: "20px",
                            borderRadius: "8px",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                        }}
                    >
                        {renderContent()}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Profile;
