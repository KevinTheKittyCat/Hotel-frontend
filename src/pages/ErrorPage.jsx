import DefaultWrapper from "../components/deafultWrapper";






export default function ErrorPage({ message }) {
    return (
        <DefaultWrapper>
            <div className="error-page center column stretch-height">
                <h1>404</h1>
                {message ? <h2>{message}</h2> : <h2>Page Not Found</h2>}
            </div>
        </DefaultWrapper>
    )
}