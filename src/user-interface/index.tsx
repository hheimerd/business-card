import styles from './user-interface.module.css';

export default function UserInterface() {
  return (
    <div className={styles.wrapper}>
      <div style={{
        position: 'absolute',
        right: 0,
        height: '100%',
        width: '200px',
        backgroundColor: 'white',
      }}>
        
      </div>
    </div>
  )
}