
import axios from "../shared/axios";

//Utility function
export const getRequest = async (uri) => {
  try {
    let response = await axios.get(uri);

    return {
      date: response.date,
      error: null,
    };
  } catch (error) {
    return {
      date: null,
      error: error,
    };
  }
};
