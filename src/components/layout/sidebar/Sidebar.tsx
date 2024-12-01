'use client';

import cn from 'clsx';
import Image from "next/image";
import styles from "./Sidebar.module.scss";
import Link from "next/link";
import { MENU } from "./sidebar.data";
import { SunDimIcon } from "lucide-react";
import { usePathname } from 'next/navigation';

const isLoggedIn = false;

const Sidebar =  () => {
  const pathName = usePathname();

     
    return (
        isLoggedIn &&
        <aside className={styles.sidebar}>
            <Image src="/logo.svg" priority alt="logo" width={40} height={40} />
            <div className="flex flex-col gap-3">
                {
                    MENU.map((item) => (
                        <Link href={item.url} key={item.url} className={
                            cn({
                                [styles.active]: pathName === item.url,
                            })
                        }>
                            <item.Icon size={30}/>
                        </Link>
                    ))
                }   
            </div>
            <div>
                <SunDimIcon size={30}/>
            </div>
        </aside>
    );
};

export default Sidebar;