import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { contactAPI } from "../api/contact";
import { Contact } from "../model/Contact";

export const contactActions = {
  create: createAsyncThunk(
    "Contact/create",
    async (contact: Partial<Contact>) => {
      const response = await contactAPI.create(contact);
      return response;
    }
  ),
  findById: createAsyncThunk("Contact/findById", async (id: number) => {
    const response = await contactAPI.findById(id);
    return response;
  }),
  update: createAsyncThunk(
    "Contact/update",
    async (contact: Partial<Contact>) => {
      const response = await contactAPI.update(contact);
      return response;
    }
  ),
  delete: createAsyncThunk("Contact/delete", async (id: number) => {
    const response = contactAPI.delete(id);
    return response;
  }),
};

const ContactSlice = createSlice({
  name: "Contact",
  initialState: {
    status: "",
    contato: {},
    lista: [],
    mensagem: null,
  },
  reducers: {
    setContactToStore: (state, action) => {
      state = {
        ...state,
        contato: {
          ...state?.contato,
          ...action?.payload,
        },
      };
      console.log(state);
      return state;
    },
  },
  extraReducers: (builder) => {
    /**create */
    builder.addCase(contactActions.create.fulfilled, (state, action) => {
      state.status = "success";
      state.contato = action.payload;
      return state;
    });
    builder.addCase(contactActions.create.pending, (state, action) => {
      state.status = "loading";
      return state;
    });
    builder.addCase(contactActions.create.rejected, (state, action) => {
      state.status = "failed";
      state.contato = null;
      state.lista = [];
      return state;
    });
    /**read */
    builder.addCase(contactActions.findById.fulfilled, (state, action) => {
      state.status = "success";
      if (action.payload) {
        state.lista = action.payload;
        state.contato = action?.payload[0];
      } else {
        state.lista = null;
        state.contato = null;
      }
      return state;
    });
    /**update */
    builder.addCase(contactActions.update.fulfilled, (state, action) => {
      state.status = "success";
      state.contato = action.payload;
      return state;
    });
    /**delete */
    builder.addCase(contactActions.delete.fulfilled, (state, action) => {
      state.status = "success";
      state.contato = null;
      return state;
    });
  },
});

export const selectContact = (state) => state?.contact?.contato;
export const selectContactList = (state) => state?.contact?.lista;

export default ContactSlice.reducer;
export const { setContactToStore } = ContactSlice.actions;
