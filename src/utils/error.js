import { actionCreator } from "store/page/page.meta";
import { call, put } from "redux-saga/effects";
import { notification } from "antd";

const messageReg = {
  SESSION_EXPIRE: /Token is required/g,
  TOKEN_EXPIRE: /token is expired/g,
  PASSWORD_NOT_CORRECT: /hashedPassword is not the hash/g,
  USER_ALREADY_EXISTS: /phone number is already exist/g,
  USER_NOT_FOUND: /User is not found/g,
};

export const errorMessages = {
  SESSION_EXPIRE: "Phiên làm việc hết hạn, vui lòng đăng nhập lại.",
  TOKEN_EXPIRE: "Phiên làm việc hết hạn",
  DEFAULT: "Đã có lỗi xảy ra, vui lòng thử lại",
  PASSWORD_NOT_CORRECT:
    "Thông tin đăng nhập không hợp lệ. Xin vui lòng thử lại",
  USER_ALREADY_EXISTS: "Số điện thoại đã được đăng ký.",
  USER_NOT_FOUND: "Thông tin đăng nhập không hợp lệ. Xin vui lòng thử lại",
};

const errorMessageKeys = Object.keys(messageReg);

export const parseError = (message) => {
  const errorKey = errorMessageKeys.find((key) =>
    message.match(messageReg[key])
  );
  if (errorKey) return errorMessages[errorKey];

  return errorMessages["DEFAULT"];
};

export function sagaErrorWrapper(executor, customErrorHandling) {
  return function* (action) {
    try {
      yield put(actionCreator.setLoading(true));
      yield executor(action);
    } catch (error) {
      const { message, status } = error;
      console.log(error);
      if (customErrorHandling) {
        yield call(customErrorHandling, error);
        return;
      }

      if (status === 500) {
        const errorMessage = parseError(message);
        notification.error({
          message: errorMessage,
        });

        return;
      }
      notification.error({
        message: errorMessages["DEFAULT"],
      });
    } finally {
      yield put(actionCreator.setLoading(false));
    }
  };
}
