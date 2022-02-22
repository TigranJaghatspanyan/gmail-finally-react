import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk} from "@reduxjs/toolkit";

export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async function (action) {
      const users = await fetch(`https://reqres.in/api/users?page=${action}`);
      const response = await users.json();
      return response.data;
      
    }
  );
const initialState = {
    userLogin : [],
    users:[],
    status:null,
    modal:false,
    createdUsers:[]
    
}
const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action )=>{
            state.userLogin = action.payload
        },
        setModal:(state,action) =>{
          state.modal = action.payload
        },
        addUser:(state, action) =>{
          state.createdUsers.push(action.payload)
        }

    },
    extraReducers: {
        [fetchUser.pending]: (state, action) => {
          state.status = "pending";
          state.users = null;
        },
        [fetchUser.fulfilled]: (state, action) => {
          state.status = true;
          state.users = action.payload;
        },
        [fetchUser.rejected]: (state, action) => {
          state.status = "error";
        }
      }
  
})
export const newUsers = (state) => state.user.createdUsers
export const closeModal = (state) => state.user.modal
export const openModal = (state) => state.user.modal
export const { setUser , setModal , addUser} = userSlice.actions;
export const userLogin = (state) => state.user.userLogin
export const usersInfo = (state) => state.user.users
export const usersStatus = (state) => state.user.status
export default userSlice.reducer