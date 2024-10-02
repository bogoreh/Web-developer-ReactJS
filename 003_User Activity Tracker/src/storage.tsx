const STORAGE_ID = "trackerIdValue";
export const setStorage = (trackerId: number) => {
  sessionStorage.setItem(STORAGE_ID, trackerId.toString());
};
export const getStorage = () => {
  return sessionStorage.getItem(STORAGE_ID);
};
