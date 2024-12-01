import { PropsWithChildren } from "react";
import Sidebar from "./sidebar/Sidebar";
import styles from "./Layout.module.scss";


const LayoutClient = ({children}:PropsWithChildren<unknown>) => {
    return (
        <main className={styles.layout}>
            <Sidebar/>
            {children}
        </main>
    );
};

export default LayoutClient;