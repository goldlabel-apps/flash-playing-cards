import { AppThunk } from "../../../Features/featuresStore";
import { 
  setSharedKey,
} from "../../../Features";

export const onLogoClick = (): AppThunk => async (dispatch: any) => {
  try {
    console.log("onLogoClick");
  } catch (error: any) {
    dispatch(setSharedKey({ key: 'notification', value: {
      severity: "error",
      code: "101",
      message: error.toString()
    }}))
  }
};
