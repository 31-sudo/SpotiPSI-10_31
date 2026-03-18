import { Outlet } from "react-router-dom";

interface Props {
    currentPage: string
}

const PageContent = ({currentPage}: Props) => {
    return (
        <Outlet context={currentPage} />
    )
}

export default PageContent;