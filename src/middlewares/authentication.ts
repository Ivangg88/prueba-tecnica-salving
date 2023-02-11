import { Token } from "../types/interfaces";
import { calculateMinutes } from "../utils/operationutils";

const auth = (token: string | null) => {
  const sessionTimeOut = 30;
  try {
    if (!token) {
      throw new Error("Token is null");
    }

    const user: Token = JSON.parse(token);

    return calculateMinutes(new Date(user.timeStamp)) < sessionTimeOut;
  } catch (error: any) {
    alert(error.message);
  }
};

export default auth;
