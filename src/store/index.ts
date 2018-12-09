import { init } from "@rematch/core";
import { common } from "../models/common";

const store = init({
  models: {
    common
  }
});

export default store;
