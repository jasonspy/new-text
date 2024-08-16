import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getSimplifiedError } from "../../util";
import { APIService } from "../../util/APIService";
import { url } from "../../util/endpoints";

export interface VerificationState {
  loading: boolean;
  data: any;
  currentCount: number,
  previousCount: number,
  completedSteps: any
}

const initialState: VerificationState = {
  loading: false,
  data: {},
  currentCount: 1,
  previousCount: 1,
  completedSteps: []
}

export const verificationSlice = createSlice({
  name: "verification",
  initialState,
  reducers: {
    clearState: () => {
      return initialState;
    },
    clearUserData: (state) => {
      state.data = {};
      state.currentCount = 1;
      state.previousCount = 1;
    },
    updataData: (state, {payload}) => {
        state.data = {...payload}
    },
    updateSteps: (state, {payload}) => {      
        state.currentCount = payload.current
        state.previousCount = payload.prev
        if (payload.completedStep) {
          if (!state.completedSteps.includes(payload.completedStep)) {
            state.completedSteps =  [...state.completedSteps, payload.completedStep]
          }
        }        
        
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(verifyUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyUser.fulfilled, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(verifyUser.rejected, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(createIndividual.pending, (state) => {
        state.loading = true;
      })
      .addCase(createIndividual.fulfilled, (state, { payload }) => {                
        state.loading = false;
        state.data = {...payload.data}
      })
      .addCase(createIndividual.rejected, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(updateIndividual.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateIndividual.fulfilled, (state, { payload }) => {                
        state.loading = false;
        state.data = {...payload.data}
      })
      .addCase(updateIndividual.rejected, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(createCorporate.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCorporate.fulfilled, (state, { payload }) => {                
        state.loading = false;
        state.data = {...payload.data}
      })
      .addCase(createCorporate.rejected, (state, { payload }) => {
        state.loading = false;
      })
      .addCase(updateCorporate.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCorporate.fulfilled, (state, { payload }) => {                
        state.loading = false;
        state.data = {...payload.data}
      })
      .addCase(updateCorporate.rejected, (state, { payload }) => {
        state.loading = false;
      })
  },
});

export const verifyUser = createAsyncThunk(
  "verifyUser",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await APIService.post(`${url.register}`, payload);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        getSimplifiedError(error.response ? error : error)
      );
    }
  }
);
export const createIndividual = createAsyncThunk(
  "createIndividual",
  async (payload: any, { rejectWithValue }) => {

    const bioDataPayload = {
      title: payload.title,
      surName: payload.surName,
      firstName: payload.firstName,
      dob: payload.dob,
      nationality: payload.nationality,
      gender: payload.gender,
      email: payload.email,
      employmentStatus: payload.employmentStatus,
      nin: payload.nin,
      phone: payload.phone
    }
    try {
      const { data } = await APIService.post(`${url.createIndividual}`, bioDataPayload);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        getSimplifiedError(error.response ? error : error)
      );
    }
  }
);
export const createCorporate = createAsyncThunk(
  "createCorporate",
  async (payload: any, { rejectWithValue }) => {
    try {
      const { data } = await APIService.post(`${url.createCorporate}`, payload);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        getSimplifiedError(error.response ? error : error)
      );
    }
  }
);
export const updateIndividual = createAsyncThunk(
  "updateIndividual",
  async (payload: any, { rejectWithValue }) => {
    try {      
      const { data } = await APIService.patch(`${url.updateIndividual(payload)}`, payload.residentialData || payload.biometrics);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        getSimplifiedError(error.response ? error : error)
      );
    }
  }
);
export const updateCorporate = createAsyncThunk(
  "updateCorporate",
  async (payload: any, { rejectWithValue }) => {
    try {      
      const { data } = await APIService.patch(`${url.updateCorporate(payload)}`, payload.data);
      return data;
    } catch (error: any) {
      return rejectWithValue(
        getSimplifiedError(error.response ? error : error)
      );
    }
  }
);
export const uploadDocument = createAsyncThunk(
  "uploadDocument",
  async (payload: any, { rejectWithValue }) => {
    try {      
      const { data } = await APIService.patch(`${url.uploadDocument(payload.id)}`, {identity: payload.formData});
      return data;
    } catch (error: any) {
      return rejectWithValue(
        getSimplifiedError(error.response ? error : error)
      );
    }
  }
);

export const authSelector = (state: any) => state.auth;

export const {
  clearState,
  clearUserData,
  updataData,
  updateSteps
} = verificationSlice.actions;
export default verificationSlice.reducer;
