import React from 'react'
import TextContainer from '../components/TextContainer/TextContainer';
import styles from './Portal.module.css';
import MainImage from '../Images/Project_69-08.jpg'

const Portal = () => {
  return (
    <div>
      <div>
      <div className={styles.home_background}>
        <div className={styles.home_container}>
          <div className={styles.float_container}>
            <div className={`${styles.float_child} ${styles.left}`}>
              <h1>
                Most active student community with{" "}
                <font color="#FFDD59">80,000+</font> members.
              </h1>
              <div className={`${styles.home_form_group} ${styles.buttons}`}>
                <button
                  className={styles.home_form_button}
                  // onClick={() => {
                    // window.location.href = "/contact";
                  // }}
                >
                  Get Started
                </button>
              </div>
            </div>

            <div className={`${styles.float_child} ${styles.right}`}>
              <img className={styles.home_img} src={MainImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
    <div className={styles.portal}>
        <h1>Record</h1>
    </div>
    <div className={styles.textContainer}>
        <TextContainer />
    </div>
        
    </div>
  )
}

export default Portal;