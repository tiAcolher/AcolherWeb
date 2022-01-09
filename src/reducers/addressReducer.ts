import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addressAPI } from "../api/address";
import { Locations } from "../location";
import { Address } from "../model/Address";

export const addressActions = {
  create: createAsyncThunk(
    "Address/create",
    async (address: Partial<Address>) => {
      const response = await addressAPI.create(address);
      return response;
    }
  ),
  findById: createAsyncThunk("Address/findById", async (id: number) => {
    const response = await addressAPI.findById(id);
    return response;
  }),

  update: createAsyncThunk(
    "Address/update",
    async (address: Partial<Address>) => {
      const response = await addressAPI.update(address);
      return response;
    }
  ),
  delete: createAsyncThunk("Address/delete", async (id: number) => {
    const response = await addressAPI.delete(id);
    return response;
  }),
};

const AddressSlice = createSlice({
  name: "Address",
  initialState: {
    status: "",
    endereco: {Cidade: Locations.estados[0].cidades[0], Estado: Locations.estados[0].sigla},
    lista: [],
    mensagem: null,
  },
  reducers: {
    select: (state, action) => {
      const {payload} = action
      state = {
        ...state,
        endereco:
        {
          ...payload,
          Cidade: state?.endereco?.Cidade || Locations.estados[0].cidades[0],
          Estado: state?.endereco?.Estado || Locations.estados[0].sigla
        }        
      };
      console.log(JSON.stringify(state))
    },  
  },
  extraReducers: (builder) => {
    /** create */
    builder.addCase(addressActions.create.fulfilled, (state, action) => {
      state.status = "success";
      state.endereco = action.payload;
      return state;
    });
    builder.addCase(addressActions.create.pending, (state, action) => {
      state.status = "loading";
      state.endereco = null;
      return state;
    });
    builder.addCase(addressActions.create.rejected, (state, action) => {
      state.status = "failure";
      state.endereco = null;
      return state;
    });
    /** findById */
    builder.addCase(addressActions.findById.fulfilled, (state, action) => {
      state.status = "success";
      state.endereco = action.payload;
      return state;
    });
    builder.addCase(addressActions.findById.rejected, (state, action) => {
      state.status = "failed";
      state.endereco = null;
      return state;
    });
    builder.addCase(addressActions.findById.pending, (state, action) => {
      state.status = "loading";
      return state;
    });
   
    /** update */
    builder.addCase(addressActions.update.fulfilled, (state, action) => {
      state.status = "success";
      return state;
    });
    builder.addCase(addressActions.update.rejected, (state, action) => {
      state.status = "failed";
      return state;
    });
    builder.addCase(addressActions.update.pending, (state, action) => {
      state.status = "loading";
      return state;
    });
  },
});

export const selectAddress = (state) => state.address.endereco;
export const selectAddressList = (state) => state.address.lista;

export default AddressSlice.reducer;
export const { select } = AddressSlice.actions;
