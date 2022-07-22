import { FunctionComponent } from "react";
const preloader: FunctionComponent = () => {
    return (
    <>
<div id="loader-wrapper">
<div className="loader-img"><img src="images/logo-2.png" alt="preloader"/></div>
<div className="loader-section section-left"></div>
<div className="loader-section section-right"></div>
</div>
</>
);
}

export default preloader;