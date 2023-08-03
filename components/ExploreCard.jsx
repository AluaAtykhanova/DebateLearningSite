import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({
  id,
  imgUrl,
  title,
  link,
  index,
  active,
  handleClick,
}) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWindowWidth);
    updateWindowWidth(); // Запускаем один раз при монтировании компонента

    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const handleMouseEnter = () => {
    if (windowWidth > 1000) {
      handleClick(id);
    }
  };

  const handleCardClick = () => {
    if (windowWidth <= 1000) {
      if (active === id) {
        window.open(link, '_blank');
      } else {
        handleClick(id);
      }
    } else {
      handleClick(id);
      window.open(link, '_blank');
    }
  };

  const fadeInVariants = windowWidth > 1000
    ? fadeIn('right', 'spring', index * 0.5, 1)
    : fadeIn('right', 'spring', index * 0, 0);

  return (
    <motion.div
      variants={fadeInVariants}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onMouseEnter={windowWidth > 1000 ? handleMouseEnter : null}
      onClick={handleCardClick}
    >
      <img
        src={imgUrl}
        alt="title"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-gray-300 absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div
            className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
          >
            <img
              src="/speech.png"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            Enter Debateland
          </p>
          <p className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
