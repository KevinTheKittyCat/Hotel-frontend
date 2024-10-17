import Header from "./header";





export default function DefaultWrapper({ children }) {
    return (
        <div id="Default-wrapper" className="default-wrapper page column">
            <Header />
            <div className="default-wrapper-content column">
                {children}
            </div>
        </div>
    )
}