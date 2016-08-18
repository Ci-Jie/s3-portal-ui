export default {
  UTILS: {
    LOADING: '載入中...',
    NAME: '名稱',
    CANCEL: '取消',
    CREATE: '建立',
    UPLOAD: '上傳',
    OPEN: '開啟',
    DOWNLOAD: '下載',
    DELETE: '刪除',
    RENAME: '重新命名',
    REFRESH: '重新整理',
    CONFIRM: '確定',
    OR: '或',
  },
  VALIDATION: {
    REQUIRED: '此欄位不得為空。',
    EMAIL: '此欄位必須符合電子郵件格式。',
    MIN_LENGTH: '此欄位不得小於 {{ minlength }} 個字元。',
    MAX_LENGTH: '此欄位不得大於 {{ maxlength }} 個字元。',
    MATCH: '請輸入與前一個欄位相同的值。',
  },
  SETTINGS: {
    ACCOUNT: '我的帳戶',
    BILLING: '付款與費用管理',
    SECURITY: '安全憑證',
    SIGN_OUT: '登出',
    SIGN_OUT_CONFIRM_TITLE: '你確定要停止所有上傳並登出嗎？',
    SIGN_OUT_CONFIRM_MESSAGE: '你有正在進行的操作或上傳檔案，若離開會將它們全部取消。確定要離開嗎？',
    LEAVE: '離開',
    STAY: '留下',
  },
  BUCKET: {
    EMPTY_MESSAGE: '看來你目前沒有任何的 Bucket',
    CREATE_MESSAGE: '別擔心，建立一個是很容易的。',
    ERROR_MESSAGE: '糟糕，你的連線中斷了⋯⋯',
    REFRESH_MESSAGE: '別擔心，你可以再試著重新整理。',
    DUPLICATE_MESSAGE: '此 bucket 已存在！請選擇一個不同的名稱並再試一次。',
    CREATE: '建立 Bucket',
    DELETE: '刪除 Bucket',
    NAME: 'Bucket 名稱',
    CREATE_DESCRIPTION: '你所使用的名稱不得重複於 S3 Portal 中已存在的 bucket 名稱。',
    DELETE_DESCRIPTION: 'S3 Portal 的 bucket 是唯一的。如果你刪除此 bucket，其他 S3 的使用者可能會使用此名稱。',
    DELETE_TYPE_NAME: '請輸入 bucket 名稱以確認刪除。',
    DELETE_ERROR_MESSAGE: '請輸入欲刪除的完整 bucket 名稱。',
    DELETE_CONFIRM: `刪除此 bucket 及此 bucket 內的所有檔案與資料夾
    （若有支援舊版本則包含舊版本）<b>會無法復原</b>。
    你確認要刪除 <b>{{ name }}</b> 嗎？`,
  },
  ACTION_NAVBAR: {
    ACTIONS: '操作',
    PROPERTIES: '屬性',
    TRANSFERS: '傳輸',
    NONE: '無',
  },
  TOAST: {
    SIGN_IN_SUCCESS: '登入成功！',
    SIGN_UP_SUCCESS: '註冊成功！',
    SIGN_OUT_SUCCESS: '登出成功！',
    SIGN_OUT_FAILURE: '登出失敗！',
    CREATE_BUCKET_SUCCESS: 'Bucket {{ bucket }} 已建立成功！',
    CREATE_BUCKET_FAILURE: 'Bucket {{ bucket }} 建立失敗，請再試一次！',
    DELETE_BUCKET_SUCCESS: 'Bucket {{ bucket }} 刪除成功！',
    DELETE_BUCKET_FAILURE: 'Bucket {{ bucket }} 刪除失敗，請再試一次！',
    CREATE_FOLDER_SUCCESS: '資料夾 {{ folder }} 建立成功！',
    CREATE_FOLDER_FAILURE: '資料夾 {{ folder }} 建立失敗，請再試一次！',
    UPLOAD_FILE_SUCCESS: '檔案 {{ name }} 上傳成功!',
    UPLOAD_FILE_FAILURE: '檔案 {{ name }} 上傳失敗，請再試一次!',
    DELETE_FILE_SUCCESS: '{{ name }} 刪除成功！',
    DELETE_FILE_FAILURE: '{{ name }} 刪除失敗，請再試一次！',
    DELETE_ACCOUNT_SUCCESS: '{{ name }} 删除成功!',
    DELETE_ACCOUNT_FAIL: '{{ name }} 刪除失敗，請再試一次!',
    RESET_SUCCESS: '{{ email }} 更改密碼成功!',
    RESET_FAIL: '{{ email }} 更改密碼失敗，請再試一次',
    CANCEL_UPLOAD: '{{ name }} 的上傳已被取消',
    CONNECT_ERROR: '連線失敗，請再試一次!',
  },
  AUTH: {
    EMAIL: '電子郵件',
    PASSWORD: '密碼',
    RETYPE_PASSWORD: '再次輸入密碼',
    SIGN_IN: '登入',
    SIGN_UP: '註冊',
    HAVE_ACCOUNT: '已經有帳號了嗎？',
    HAVE_NOT_ACCOUNT: '尚未註冊帳號嗎？',
    CREATE_ACCOUNT: '建立帳號',
    LOGIN_TO_YOUR_ACCOUNT: '登入你的帳號',
    ALREADY_EXIST: '已有其他人使用這個電子郵件，請換一個試試',
    SIGN_IN_INCORRECT: '你的電子郵件或密碼不正確，請再試一次。',
  },
  TRANSFER: {
    CANCEL: '取消',
    CANCELED: '取消傳輸',
    AUTO_CLEAR: '自動清除已完成傳輸',
    CANCEL_DESCRIPTION: '取消上傳將無法復原，你確定要這樣做嗎?',
    TITLE: {
      UPLOAD: '上傳 {{ name }} 至 {{ bucket }}',
      DELETE: '從 {{ bucket }} 刪除 {{ name }}',
      CANCEL: '你確定要取消這項上傳嗎?'
    },
    STATUS: {
      DELETING: '刪除中',
      DELETED: '已刪除',
      UPLOADING: '上傳中',
      COMPLETED: '已完成',
      RESUMING: '重新開始',
    },
  },
  FILE: {
    CREATE_FOLDER: '建立資料夾',
    STORAGE_CLASS: '儲存類型',
    SIZE: '容量大小',
    LAST_MODIFIED: '最後修改時間',
    OWNER: '擁有者',
    DO_ACTIONS: '你可以執行以下操作',
    UPLOAD: '上傳檔案',
    EMPTY_BUCKET: '這個 bucket 是空的',
    EMPTY_FOLDER: '這個資料夾是空的',
    UPLOAD_DESCRIPTION: '點擊新增檔案以上傳檔案至 S3 Portal。點擊檔案名稱右側的 ✖ 可以清除以選擇的檔案。',
    ADD: '新增檔案',
    NUMBER_OF: '檔案總數：',
    TOTAL_SIZE: '總上傳容量大小：',
    FOLDER_NAME: '資料夾名稱',
    FOLDER_DUPLICATED_MESSAGE: '此資料夾已存在！請選擇一個不同的名稱並再試一次。',
    DUPLICATED_MESSAGE: '此檔案名稱已存在！請選擇一個不同的名稱並再試一次。',
    NEW_FOLDER: '新資料夾',
    DELETE_TITLE: '您確定要刪除所選項目嗎?',
    DELETE_DESCRIPTION: `刪除後將無法復原，您確定要刪除所選項目嗎?`,
    DELETE_ARIA_LABEL: 'Delete Objects',
    RENAME_TITLE: '重新命名',
    RENAME_DESCRIPTION: `您確定要修改這個物件的名稱嗎?`,
    RENAME_ARIA_LABEL: 'Rename Object',
    ITEM_NAME:'物件名稱',
    NEW_NAME:'新名稱',
    PROPERTIES_NAME: '檔案名稱',
    RENAME_SUCCESS: '檔案 {{ fileName }} 重新命名成功',
    RENAME_FAILURE: '檔案 {{ fileName }} 重新命名失敗，請再試一次!',
  },
  MANAGER: {
    USER_LIST: '使用者列表',
    RESET_USER: '重新設定密碼',
    SEARCH: '搜尋',
    CREATE_USER: '新增使用者',
    USER_DELETE: '刪除使用者',
    USER_ACCOUNT: '帳號',
    USER_ROLE: '權限',
    USER_REGISTER_TIME: '註冊時間',
    USER_RESET: '重新設定密碼',
    EMAIL:'使用者 Email',
    DELETE_TITLE: '刪除使用者',
    DELETE_TYPE_NAME: '請輸入 Email 以確認刪除。',
    DELETE_ERROR_MESSAGE: '請輸入欲刪除的完整 Email。',
    DELETE_CONFIRM: `刪除此 Account 及此 Account 內的所有 Bucket 
    （若有支援舊版本則包含舊版本）<b>會無法復原</b>。
    你確認要刪除 <b>{{ name }}</b> 嗎？`,
  },
};
