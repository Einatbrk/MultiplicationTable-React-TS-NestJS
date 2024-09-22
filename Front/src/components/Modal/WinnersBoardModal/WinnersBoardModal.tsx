import React from "react";
import '../../../styles/components/modal.scss';
import WinnersTable from "../../WinnersTable/WinnersTable";

const WinnersBoardModal:React.FC = () => {
    return(
        <div className="modal-content">
            <WinnersTable />
        </div>
    )
}

export default WinnersBoardModal;