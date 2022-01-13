import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { participantAPI } from "../api/participant";
import { Address } from "../model/Address";
import { Participant } from "../model/Participant";
import { addressActions, selectAddress } from "./addressReducer";

export const participantActions = {
  create: createAsyncThunk(
    "participant/create",
    async (participant: Partial<Participant>) => {
      const response = await participantAPI.create(participant);
      return response;
    }
  ),
  findById: createAsyncThunk("participant/findById", async (id: number) => {
    const response = await participantAPI.findById(id);
    return response;
  }),
  findAll: createAsyncThunk("participant/findAll", async () => {
    const response = await participantAPI.findAll();
    return response;
  }),

  update: createAsyncThunk(
    "participant/update",
    async ({
      participant,
      dispatch,
      address,
    }: {
      participant: Partial<Participant>;
      dispatch: any;
      address: Partial<Address>;
    }) => {
      const response = await participantAPI.update(participant);

      await dispatch(
        addressActions.create({ ...address, idParticipante: response.id })
      );
      return response;
    }
  ),
  delete: createAsyncThunk("participant/delete", async (id: number) => {
    const response = await participantAPI.delete(id);
    return response;
  }),
};

const participantSlice = createSlice({
  name: "participant",
  initialState: {
    status: "",
    participante: null,
    lista: [],
    mensagem: null,
  },
  reducers: {
    setParticipantToStore: (state, action) => {
      state.participante = action.payload;
      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    /** create */
    builder.addCase(participantActions.create.fulfilled, (state, action) => {
      state.status = "success";
      state.participante = action.payload;
      return state;
    });
    builder.addCase(participantActions.create.pending, (state, action) => {
      state.status = "loading";
      state.participante = null;
      return state;
    });
    builder.addCase(participantActions.create.rejected, (state, action) => {
      state.status = "failure";
      state.participante = null;
      return state;
    });
    /** findById */
    builder.addCase(participantActions.findById.fulfilled, (state, action) => {
      state.status = "success";
      state.participante = action.payload;
      return state;
    });
    builder.addCase(participantActions.findById.rejected, (state, action) => {
      state.status = "failed";
      state.participante = null;
      return state;
    });
    builder.addCase(participantActions.findById.pending, (state, action) => {
      state.status = "loading";
      return state;
    });
    /** findAll */
    builder.addCase(participantActions.findAll.fulfilled, (state, action) => {
      state.status = "success";
      state.lista = action.payload;
      return state;
    });
    builder.addCase(participantActions.findAll.rejected, (state, action) => {
      state.status = "failed";
      state.lista = [];
      return state;
    });
    builder.addCase(participantActions.findAll.pending, (state, action) => {
      state.status = "loading";
      return state;
    });

    /** update */
    builder.addCase(participantActions.update.fulfilled, (state, action) => {
      state.status = "success";
      return state;
    });
    builder.addCase(participantActions.update.rejected, (state, action) => {
      state.status = "failed";
      return state;
    });
    builder.addCase(participantActions.update.pending, (state, action) => {
      state.status = "loading";
      return state;
    });
  },
});

export const selectParticipant = (state) => state.participant.participante;
export const selectParticipantList = (state) => state.participant.lista;

export default participantSlice.reducer;
export const { setParticipantToStore } = participantSlice.actions;
