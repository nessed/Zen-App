// components/LotusFlower.js
import Image from 'next/image';
import styles from './LotusFlower.module.css';

const LotusFlower = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/lotus.svg"
        alt="Lotus Flower"
        width={800}
        height={800}
        className={styles.lotusFlower}
      />
    </div>
  );
};

export default LotusFlower;
