import { useNavigate } from "react-router";







export default function HeaderButton({ Icon, title, to }) {
    const navigate = useNavigate();
    return (
        <button className="nav-button center row small-gap" onClick={() => navigate(to)}>
            {Icon && <Icon />}
            <a>{title}</a>
        </button>
    )
}