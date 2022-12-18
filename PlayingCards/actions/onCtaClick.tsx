import { AppThunk } from "../../../Features/featuresStore";
import { 
  setSharedKey,
} from "../../../Features";

export const onCtaClick = (): AppThunk => async (dispatch: any) => {
  try {
    console.log("onCtaClick");
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notification', value: {
      severity: "error",
      code: "101",
      message: error.toString()
    }}))
  }
};
