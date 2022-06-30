import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
	{
	  "id": 1,
	  "name": "Cartier ring",
		"purchasePrice": 5780,
		"type": "JEWELRY",
		"description": "Gift from my grandfather",
		"photo": "https://i.ibb.co/znXC7LQ/marcus-lewis-U63z-XX2f7ho-unsplash.jpg",
  },
  {
	  "id": 2,
	  "name": "Guitar",
		"purchasePrice": 850,
		"type": "MUSIC_INSTRUMENT",
		"photo": "https://i.ibb.co/4dfndL2/louis-hansel-M-d-J-Scwa-LE-unsplash.jpg",
  }
]

}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    addingValuable:(state,action)=>{
         state.value=[...state.value,action.payload]
    }
  },
})


export const { addingValuable} = dataSlice.actions

export default dataSlice.reducer