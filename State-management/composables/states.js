export const useReward = () =>
  useState("reward", () => {
    return 10;
  });
