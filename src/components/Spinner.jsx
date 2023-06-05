import React from "react";
import { SyncLoader } from "react-spinners";

const Spinner = ({ size = 12 }) => (
    <div className="flex items-center justify-center h-32">
        <SyncLoader color="#0d9488" loading={true} size={size} />
    </div>
);

export default Spinner;