import styles from './styles.module.css';

export default function HeaderCenter() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className={styles.headerCenter}>
      <form className={styles.formSearch} onSubmit={handleSubmit}>
        <input className={styles.inputSearch} type='search' placeholder='Buscar' />
        <button className={styles.buttonSearch}>
          <img className={styles.search} src='icons/search.svg' alt='' />
        </button>
      </form>
      <button className={styles.btnMicrophone}>
        <img className={styles.microphone} src='icons/microphone.svg' alt='' />
      </button>
    </section>
  );
}
