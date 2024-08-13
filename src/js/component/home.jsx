import React, { useState } from "react";
import List from "./List";


//create your first component
const Home = () => {
	
	const [input, setInput] = useState("")
	const [list, setList] = useState([])

	const textChange = (event) => {
		setInput(event.target.value)
	}

	const sendList = (event) => {
		if(event.key === "Enter" && input.trim()){
			setList([...list, input])
			setInput("")
		}
	}

	const deleteItem = (index) => {
		setList(list.filter((_,i) => i !== index))
	}


	return (
		<section className="section">
			<h1>TODO-list</h1>
			<div className="ul-section">
				<ul>
					<input
						className="input"
						type="text"
						value={input}
						onChange={textChange}
						onKeyDown={sendList}
					/>
					{list.map((item, index) => {
						return(
							<List 
								key={index} 
								text={item}
								onDelete={() => deleteItem(index)}
							/>
						)
					})}
				</ul>
				<div className="items-left">
					{list.length > 0 ? `${list.length} items left` : "No items left, add items"}
				</div>
			</div>
		</section>
	);
};

export default Home;
