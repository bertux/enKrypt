import { MiddlewareFunction } from "@enkryptcom/types";
import EthereumProvider from "..";
const method: MiddlewareFunction = function (
  this: EthereumProvider,
  payload,
  res,
  next
): void {
  if (payload.method !== "wallet_addEthereumChain") return next();
  else return res(new Error("Not implemented"));
};
export default method;
