import axios from "axios";
import { Dialog, Toast } from "vant";

class RequestManager {
  constructor() {
    this.requests = new Map(); // 使用Map来存储每个请求的标识符和状态
    this.isLoading = false; // 全局标志，表示是否至少有一个请求需要显示等待动画
  }

  // 开始一个新的请求
  startRequest(requestId, shouldShowLoading) {
    this.requests.set(requestId, { isLoading: shouldShowLoading });

    // 如果这是第一个需要显示等待动画的请求，则显示它
    if (shouldShowLoading && !this.isLoading) {
      this.isLoading = true;

      // 显示等待动画
      Toast.loading({
        message: "加载中...",
        forbidClick: true,
        loadingType: "spinner",
        duration: 30000, // 持续展示 toast
      });
    }
  }

  // 结束一个请求
  endRequest(requestId) {
    const request = this.requests.get(requestId);
    if (request) {
      this.requests.delete(requestId);

      // 如果该请求需要显示等待动画，并且这是最后一个这样的请求，则隐藏等待动画
      if (request.isLoading && this.requests.size === 0) {
        this.isLoading = false;

        // 隐藏等待动画
        // 手动清除 Toast
        Toast.clear();
      }
    }
  }

  // 检查是否至少有一个请求需要显示等待动画
  isAnyLoading() {
    return this.isLoading;
  }
}

// 使用示例
const requestManager = new RequestManager();

export default function (params) {
  console.log("params>>>>", params);
  return new Promise((resolve, reject) => {
    // 发起一个需要显示等待动画的请求
    const requestId = `request_${new Date().getTime()}`;
    requestManager.startRequest(requestId, true);

    axios
      .request({
        ...params,
      })
      .then(
        function (result) {
          requestManager.endRequest(requestId);
          resolve(result);
        },
        function (error) {
          requestManager.endRequest(requestId);
          Dialog.alert({
            title: "温馨提示",
            message: error.message,
          });
          reject(error);
        }
      );
  });
}
