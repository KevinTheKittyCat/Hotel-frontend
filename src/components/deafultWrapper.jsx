import Header from "./header";





export default function DefaultWrapper({ children }) {
    return (
        <div id="Default-wrapper" className="default-wrapper page column">
            <Header />
            {children}
        </div>
    )
}