import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { schoolDataAPI } from "../api/schoolData";
import { SchoolData } from "../model/SchoolData";

export const schoolDataActions = {
    create: createAsyncThunk(
        "SchoolData/create",
        async (schoolData: Partial<SchoolData>) => {
            const response = await schoolDataAPI.create(schoolData);
            return response;
        }
    ),
    findById: createAsyncThunk("SchoolData/findById", async (id: number) => {
        const response = await schoolDataAPI.findById(id);
        return response;
    }),
    update: createAsyncThunk(
        "SchoolData/update",
        async (schoolData: Partial<SchoolData>) => {
            const response = await schoolDataAPI.update(schoolData);
            return response;
        }
    ),
    delete: createAsyncThunk("SchoolData/delete", async (id: number) => {
        const response = schoolDataAPI.delete(id);
        return response;
    }),
};

const SchoolDataSlice = createSlice({
    name: "SchoolData",
    initialState: {
        status: "",
        dadosEscolares: {},
        mensagem: null,
    },
    reducers: {
        setSchoolDataToStore: (state, action) => {
            state = {
                ...state,
                dadosEscolares: {
                    ...state?.dadosEscolares,
                    ...action?.payload,
                },
            };
            return state;
        },
    },
    extraReducers: (builder) => {
        /**create */
        builder.addCase(schoolDataActions.create.fulfilled, (state, action) => {
            state.status = "success";
            state.dadosEscolares = action.payload;
            return state;
        });
        builder.addCase(schoolDataActions.create.pending, (state, action) => {
            state.status = "loading";
            return state;
        });
        builder.addCase(schoolDataActions.create.rejected, (state, action) => {
            state.status = "failed";
            state.dadosEscolares = null;
            return state;
        });
        /**read */
        builder.addCase(schoolDataActions.findById.fulfilled, (state, action) => {
            state.status = "success";
            state.dadosEscolares = action?.payload;
            return state;
        });
        builder.addCase(schoolDataActions.findById.rejected, (state, action) => {
            state.status = "failed";
            state.dadosEscolares = null;
            return state;
        });
        /**update */
        builder.addCase(schoolDataActions.update.fulfilled, (state, action) => {
            console.log('sucessage')
            state.status = "success";
            state.dadosEscolares = action.payload;
            return state;
        });
        builder.addCase(schoolDataActions.update.rejected, (state, action) => {
            console.log('failure')
            state.status = "failed";
            state.dadosEscolares = null;
            return state;
        });
        /**delete */
        builder.addCase(schoolDataActions.delete.fulfilled, (state, action) => {
            state.status = "success";
            state.dadosEscolares = null;
            return state;
        });
    },
});

export const selectSchoolData = (state) => state?.schoolData?.dadosEscolares;

export default SchoolDataSlice.reducer;
export const { setSchoolDataToStore } = SchoolDataSlice.actions;
