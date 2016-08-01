export default {
  UTILS: {
    LOADING: 'Loading...',
    NAME: 'Name',
    CANCEL: 'Cancel',
    CREATE: 'Create',
    UPLOAD: 'Upload',
    OPEN: 'Open',
    DOWNLOAD: 'Download',
    DELETE: 'Delete',
    RENAME: 'Rename',
    REFRESH: 'Refresh',
    CONFIRM: 'Confirm',
    OR: 'or',
  },
  VALIDATION: {
    REQUIRED: 'You left the field blank.',
    EMAIL: 'Your email must be look like an e-mail address.',
    MIN_LENGTH: 'Please enter at least {{ minlength }} characters.',
    MAX_LENGTH: 'Please enter no more than {{ maxlength }} characters.',
    MATCH: 'Please enter the same value again.',
  },
  SETTINGS: {
    ACCOUNT: 'My Account',
    BILLING: 'Billing & Cost Management',
    SECURITY: 'Security Credentials',
    SIGN_OUT: 'Sign Out',
    SIGN_OUT_CONFIRM_TITLE: 'Would you like to sign out without your upload?',
    SIGN_OUT_CONFIRM_MESSAGE: `You have in progress opreations
      or uploads and leaving now will cancel them.Still leaving?`,
    LEAVE: 'Leave',
    STAY: 'Stay',
  },
  BUCKET: {
    EMPTY_MESSAGE: 'Looks like you don\'t have any Bucket',
    CREATE_MESSAGE: 'Don\'t worry. It\'s easy to create one.',
    ERROR_MESSAGE: 'Oops, your connection seems off...',
    REFRESH_MESSAGE: 'Don\'t worry. You can refresh to try again.',
    DUPLICATE_MESSAGE: 'That bucket already exists! Please select a different name and try again.',
    CREATE: 'Create Bucket',
    DELETE: 'Delete Bucket',
    NAME: 'Bucket Name',
    CREATE_DESCRIPTION: `The name that you choose must be unique across
    existing bucket names in S3 Portal.`,
    DELETE_DESCRIPTION: `The buckets in S3 Portal are unique.
    If you delete this bucket, you may lose the bucket name to another S3 user.`,
    DELETE_TYPE_NAME: 'Type the name of the bucket to confirm deletion:',
    DELETE_ERROR_MESSAGE: 'Type the exact name of the bucket you are trying to delete.',
    DELETE_CONFIRM: `Deleting this bucket and its objects (
    including older versions if applicable) <b>cannot be undone</b>.
    Are you sure you want to delete <b>{{ name }}</b>?`,
  },
  ACTION_NAVBAR: {
    ACTIONS: 'Actions',
    PROPERTIES: 'Properties',
    TRANSFERS: 'Transfers',
    NONE: 'None',
  },
  TOAST: {
    SIGN_IN_SUCCESS: 'Sign In Success!',
    SIGN_UP_SUCCESS: 'Sign Up Success!',
    SIGN_OUT_SUCCESS: 'Sign Out Success!',
    SIGN_OUT_FAILURE: 'Sign Out Failure!',
    CREATE_BUCKET_SUCCESS: 'Bucket {{ bucket }} are create success!',
    CREATE_BUCKET_FAILURE: 'Bucket {{ bucket }} are create failure, please try again!',
    DELETE_BUCKET_SUCCESS: 'Bucket {{ bucket }} Delete Success！',
    DELETE_BUCKET_FAILURE: 'Bucket {{ bucket }} Delete Fail Please Try Again！',
    CREATE_FOLDER_SUCCESS: 'Folder {{ folder }} Create Success！',
    CREATE_FOLDER_FAILURE: 'Folder {{ folder }} Create Fail Please Try Again！',
    UPLOAD_FILE_SUCCESS: 'File {{ name }} Upload Success!',
    UPLOAD_FILE_FAILURE: 'File {{ name }} Upload Fail Please Try Again!',
    DELETE_FILE_SUCCESS: '{{ name }} Delete Success！',
    DELETE_FILE_FAILURE: '{{ name }} Delete Fail Please Try Again！',
    DELETE_ACCOUNT_SUCCESS: '{{ name }} Delete Success!',
    DELETE_ACCOUNT_FAIL: '{{ name }} Delete Fail Please Try Again!',
    RESET_SUCCESS: '{{ email }} Reset Password Success!',
    RESET_FAIL: '{{ email }} Reset Password Fail，Please Try Again!',
    CANCEL_UPLOAD: 'Upload {{ name }} Has Been Cancel',
  },
  AUTH: {
    EMAIL: 'Email',
    PASSWORD: 'Password',
    RETYPE_PASSWORD: 'Retype Password',
    SIGN_IN: 'Sign In',
    SIGN_UP: 'Sign Up',
    HAVE_ACCOUNT: 'Already have an account?',
    HAVE_NOT_ACCOUNT: 'Don\'t have an account?',
    CREATE_ACCOUNT: 'Create an account',
    LOGIN_TO_YOUR_ACCOUNT: 'Log in to your account',
    ALREADY_EXIST: 'Someone already has that username. Try another?',
    SIGN_IN_INCORRECT: 'Your email or password was incorrect. Please try again.',
  },
  TRANSFER: {
    CANCEL: 'Cancel',
    CANCELED: 'Transfer Canceled',
    AUTO_CLEAR: 'Automatically clear finished transfers',
    CANCEL_ARIA_LABEL: 'Cancel Object',
    CANCEL_DESCRIPTION: 'Cancel this upload cannot be undone, Are You Sure you wanna do this?',
    TITLE: {
      UPLOAD: 'Upload {{ name }} to {{ bucket }}',
      DELETE: 'Delete {{ name }} from {{ bucket }}',
      CANCEL: 'Would you like to cancel the selected upload?'
    },
    STATUS: {
      DELETING: 'Deleting',
      DELETED: 'Deleted',
      UPLOADING: 'Uploading',
      COMPLETED: 'Completed',
      RESUMING: 'Resuming',
    },
  },
  FILE: {
    CREATE_FOLDER: 'Create Folder',
    STORAGE_CLASS: 'Storage Class',
    SIZE: 'Size',
    LAST_MODIFIED: 'Last Modified',
    OWNER: 'Owner',
    EMPTY: '',
    DO_ACTIONS: 'You can do the following actions',
    UPLOAD: 'Upload File',
    EMPTY_BUCKET: 'This bucket is empty',
    EMPTY_FOLDER: 'This folder is empty',
    UPLOAD_DESCRIPTION: `To upload files to S3 Portal,
    click Add Files. To remove files already selected,
    click the ✖ to the far right of the file name.`,
    ADD: 'Add Files',
    NUMBER_OF: 'Number of files:',
    TOTAL_SIZE: 'Total upload size:',
    FOLDER_NAME: 'Folder Name',
    FOLDER_DUPLICATED_MESSAGE: `That folder already exists!
    Please select a different name and try again.`,
    DUPLICATED_MESSAGE: `That file name already exists!
    Please select a different name and try again.`,
    NEW_FOLDER: 'New folder',
    DELETE_TITLE: 'Would you like to delete the selected items?',
    DELETE_DESCRIPTION: `Deleting those objects cannot be undone.
    Are you sure you want to delete selected items?`,
    DELETE_ARIA_LABEL: 'Delete Objects',
    RENAME_TITLE: 'Rename',
    RENAME_DESCRIPTION: `Are you sure you want to rename this item?`,
    RENAME_ARIA_LABEL: 'Rename Object',
    ITEM_NAME:'Item Name',
    NEW_NAME:'New Name',
    PROPERTIES_NAME: 'File Name',
    RENAME_SUCCESS: 'Your File {{ fileName }} Rename Success',
    RENAME_FAILURE: 'Your File {{ fileName }} Rename Failure, Please Try Again!',
  },
  MANAGER: {
    USER_LIST: 'User List',
    SEARCH: 'Search',
    CREATE_USER: 'Create Account',
    USER_DELETE: 'Delete Account',
    USER_ACCOUNT: 'Account',
    USER_ROLE: 'Role',
    USER_REGISTER_TIME: 'Register Time',
    USER_RESET: 'Reset password',
    EMAIL: 'User Email',
    DELETE_TYPE_NAME: 'Type the email of the account to confirm deletion:',
    DELETE_ERROR_MESSAGE: 'Type the exact email of the account you are trying to delete.',
    DELETE_CONFIRM: `Deleting this account and its bucket (
    including older versions if applicable) <b>cannot be undone</b>.
    Are you sure you want to delete <b>{{ name }}</b>?`,
  },
};
