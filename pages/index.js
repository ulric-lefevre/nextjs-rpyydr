import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button } from '../components/Button';
import { useState } from 'react';
import { PropositionModal } from '../components/PropositionModal';
import { boo } from '../utils/common';
import '../utils/visit-files';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.container}>
      <Head>
        <title>Test</title>
      </Head>

      <main className={styles.main}>
        <p className={styles.description}>
          Check <code className={styles.code}>exercices/</code> folder.
        </p>
      </main>
      <Button handleClick={() => setShowModal(!showModal)}>
        Proposer une pièce
      </Button>
      <PropositionModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
