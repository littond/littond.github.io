// src/components/Layout.jsx
import { Sidebar } from "./Sidebar";
import "../styles/Layout.css";

export const Layout = ({ children }) => (
    <div className="layout">
        <div className="main-area">
            <Sidebar />
            <main className="content">
                {children}
            </main>
        </div>
    </div>
);;