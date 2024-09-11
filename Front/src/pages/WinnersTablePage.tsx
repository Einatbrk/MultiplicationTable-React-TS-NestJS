import React, { useState, useEffect } from "react";
import WinnersTable from "../components/WinnersTable/WinnersTable";
import { getTopWinners } from "../utils/winnersTableUtils";
import { Winner } from "../components/WinnersTable/WinnersTable.types";

const WinnersTablePage: React.FC = () => {
    
    const [winners, setWinners] = useState<Winner[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        const fetchWinners = async () => {
            try {
                setLoading(true);
                const winnersData = await getTopWinners();
                setWinners(winnersData);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch winners');
                setLoading(false);
            }
        };
        fetchWinners();
    }, []);
    return (
        <div className="winners-table-container">
           <WinnersTable
            winners={winners}
            loading={loading}
            error={error}
        />
        </div>
    )
}

export default WinnersTablePage;