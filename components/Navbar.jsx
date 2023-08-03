'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { navVariants } from '../utils/motion';
import LoginBtn from './Login-btn';
import styles from '../styles';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={` ${styles.xPaddings} py-8 relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <div>
        <Link href="/">
          <Image
            src="/home.png"
            alt="homepage"
            width="24"
            height="24"
            className="w-[24px] h-[24px] object-contain"
          />
        </Link>
      </div>
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        <Link href="/">DEBATELAND</Link>
      </h2>
      <LoginBtn />
    </div>
    <div className="absolute w-[50%] inset-0 gradient-01 " style={{ pointerEvents: 'none' }} />
  </motion.nav>
);

export default Navbar;
