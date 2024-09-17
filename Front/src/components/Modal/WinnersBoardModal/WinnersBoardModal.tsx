import React from "react";
import styles from '../Modal.module.scss';
import WinnersTable from "../../WinnersTable/WinnersTable";

const WinnersBoardModal:React.FC = () => {
    return(
        <div className={styles.modalContent}>
            <WinnersTable />
        </div>
    )
}

export default WinnersBoardModal;