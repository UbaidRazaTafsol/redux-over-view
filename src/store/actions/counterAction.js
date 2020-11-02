import {
    DECREASE_COUNTER,
    INCREASE_COUNTER
} from "./actionType";

// Increase Counter
export const increaseCounter = () => ({
    type: INCREASE_COUNTER,
  });
  // Decrease Counter
  export const decreaseCounter = () => ({
    type: DECREASE_COUNTER,
  });