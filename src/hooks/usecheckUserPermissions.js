
export default function  usecheckUserPermissions(){
    // 在這裡實現權限檢查邏輯，例如檢查用戶是否有管理員權限
    // 如果有權限，返回 true；否則，返回 false。
    const getAuth = localStorage.getItem("email");
    const hasPermission = getAuth === "admin" ? true : false;
    return {hasPermission};
  }
