import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { participantAPI } from "../api/participant";
import { Participant } from "../model/Participant";

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
    async (participant: Partial<Participant>) => {
      const response = await participantAPI.update(participant);
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
    select: (state, action) => {
      state.participante = action.payload;
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
export const { select } = participantSlice.actions;
