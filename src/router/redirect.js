const onlyRedirectOnce = () => {
  //开发环境下不重定向
  // if (import.meta.env.DEV) {
  //   return;
  // }
  //保存状态到sessionStorage,会话结束自动清除
  if (sessionStorage.getItem("isRedirect") != "true") {
    sessionStorage.setItem("isRedirect", "true");
    window.location.href = "./dist/index.html";
  }
};

//onlyRedirectOnce();
