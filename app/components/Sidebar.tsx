import React from "react";
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { ConfigProvider, Menu } from "antd";
import styles from './sidebar.module.css';
import { useRouter } from "next/navigation";

interface Sidebar {
    isOpen: string
    pagesMenu: IMenu[]
}

interface IMenu {
    name: string
    route: string
}

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group",
    style?: string
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
        style
    } as MenuItem;
}

const Sidebar: React.FC<Sidebar> = ({ isOpen, pagesMenu }) => {
    const router = useRouter();
    const onClick: MenuProps["onClick"] = (e) => {
        console.log("click ", e);
        router.push(e.key)
    };

    const items: MenuProps["items"] = [
        getItem(pagesMenu[0].name, pagesMenu[0].route, <MailOutlined />),

        getItem(pagesMenu[1].name, pagesMenu[1].route, <AppstoreOutlined />),

        getItem("Mascotas en Adopción", "sub3", <SettingOutlined />, [
            getItem(pagesMenu[2].name, pagesMenu[2].route),
            getItem(pagesMenu[3].name, pagesMenu[3].route),
            getItem(pagesMenu[4].name, pagesMenu[4].route),
        ]),

        getItem(pagesMenu[5].name, pagesMenu[5].route, <AppstoreOutlined />),
        getItem(pagesMenu[6].name, pagesMenu[6].route, <MailOutlined />),
    ];

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#7e41a1',
                },
            }}
        >

            <Menu
                theme="dark"
                onClick={onClick}
                style={{ display: isOpen }}
                className={styles.sidebar_menu}
                defaultSelectedKeys={["sub1"]}
                defaultOpenKeys={["1"]}
                mode="inline"
                items={items}
            />

        </ConfigProvider>
    );
};

export default Sidebar;
