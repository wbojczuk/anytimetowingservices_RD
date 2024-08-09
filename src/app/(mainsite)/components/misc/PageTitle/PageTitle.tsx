import styles from "./pagetitle.module.css"

export default function PageTitle(props: {pageTitle: string}) {
  return (
    <header className={styles.pageTitle}>
        <h1>{props.pageTitle}</h1>

        <img src="/img/pagetitle-bg.webp" className="bg-img" aria-hidden />
        <div style={{background: "linear-gradient(90deg, rgba(22,21,28,0.6) 0%, var(--primary-color) 100%)"}} className="shader"></div>
    </header>
  )
}
