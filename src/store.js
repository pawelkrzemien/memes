import { createStore } from 'redux';
import mem1 from "./assets/mem1.jpeg"
import mem2 from "./assets/mem2.jpeg"
import mem3 from "./assets/mem3.jpeg"
import mem4 from "./assets/mem4.jpeg"
import mem5 from "./assets/mem5.jpeg"
import mem6 from "./assets/mem6.jpeg"
import mem7 from "./assets/mem7.jpeg"
import mem8 from "./assets/mem8.jpeg"
import mem9 from "./assets/mem9.jpeg"


const initialState = {
	memes: [
		{
			id: 1,
			title: "Mem1",
			upvotes: 0,
			downvotes: 0,
			img: mem1
		},
		{
			id: 2,
			title: "Mem 2",
			upvotes: 0,
			downvotes: 0,
			img: mem2
		},
		{
			id: 3,
			title: "Mem 3",
			upvotes: 0,
			downvotes: 0,
			img: mem3
		},
		{
			id: 4,
			title: "Mem 4",
			upvotes: 0,
			downvotes: 0,
			img: mem4
		},
		{
			id: 5,
			title: "Mem 5",
			upvotes: 0,
			downvotes: 0,
			img: mem5
		},
		{
			id: 6,
			title: "Mem 6",
			upvotes: 0,
			downvotes: 0,
			img: mem6
		},
		{
			id: 7,
			title: "Mem 7",
			upvotes: 0,
			downvotes: 0,
			img: mem7
		},
		{
			id: 8,
			title: "Mem 8",
			upvotes: 0,
			downvotes: 0,
			img: mem8
		},
		{
			id: 9,
			title: "Mem 9",
			upvotes: 0,
			downvotes: 0,
			img: mem9
		}
	]
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'UPVOTE_MEM':
			return {
				...state,
				memes: state.memes.map(mem =>
					mem.id === action.payload ? { ...mem, upvotes: mem.upvotes + 1 } : mem
				)
			};
		case 'DOWNVOTE_MEM':
			return {
				...state,
				memes: state.memes.map(mem =>
					mem.id === action.payload ? { ...mem, downvotes: mem.downvotes + 1 } : mem
				)
			};
		case 'ADD_MEME':
			const newMeme = {
				id: state.memes.length + 1,
				title: action.payload.title,
				upvotes: 0,
				downvotes: 0,
				img: action.payload.img
			};
			return {
				...state,
				memes: [...state.memes, newMeme]
			};

		default:
			return state;
	}
};

const store = createStore(reducer);

export default store;
