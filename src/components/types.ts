type StatusType = "warn" | "success" | "faild";
type DialogBaseSuccessCallbackResult = {
  backdrop: boolean;
};
type DialogBaseFaildCallbackReason = {};

export {
  type StatusType,
  type DialogBaseSuccessCallbackResult,
  type DialogBaseFaildCallbackReason,
};
