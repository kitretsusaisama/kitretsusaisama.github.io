import { FunctionComponent } from "react";
const search: FunctionComponent = () => {
    return (
    <>
<div className="section search-section">
		<a href="#" className="close-search"><img src="images/close.png" alt="close"/></a>
		<div className="centered">
			<form action="#">
				<input type="text" placeholder="Search here.." />
				<button>Search</button>
			</form>
		</div>
	</div>
</>
);
}

export default search;