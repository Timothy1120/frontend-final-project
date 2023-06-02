import React from "react";
import { SyncLoader } from "react-spinners";

const Spinner = () => (
    <div className="flex items-center justify-center h-32">
        <SyncLoader color="#0d9488" loading={true} size={12} />
    </div>
);

export default Spinner;