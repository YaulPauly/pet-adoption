import React from "react";
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { ConfigProvider, Menu } from "antd";
import styles from './sidebar.module.css'


interface Sidebar {
    isOpen: string
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

const items: MenuProps["items"] = [
    getItem("Inicio", "sub1", <MailOutlined />),

    getItem("Adopciones", "sub2", <AppstoreOutlined />),

    getItem("Mascotas en Adopción", "sub3", <SettingOutlined />, [
        getItem("Perros", "1"),
        getItem("Gatos", "2"),
        getItem("Otros", "3"),
    ]),

    getItem("¿Cómo Adoptar?", "sub4", <AppstoreOutlined />),
    getItem("Dar en Adopción", "sub5", <MailOutlined />),
];

const Sidebar: React.FC<Sidebar> = ({ isOpen }) => {
    const onClick: MenuProps["onClick"] = (e) => {
        console.log("click ", e);
    };


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
                style={{display: isOpen}}
                className={styles.sidebar_menu}
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                mode="inline"
                items={items}
            />
        </ConfigProvider>
    );
};

export default Sidebar;
