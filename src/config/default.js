/* eslint-disable no-irregular-whitespace */
const config = {
  /**
   * You can use this tool http://heymind.github.io/tools/microsoft-graph-api-auth
   * to get following params: client_id, client_secret, refresh_token & redirect_uri.
   */
  refresh_token: '0.AAAA3brE-GUceku10nrA2DvQxlkzv6TB3GVCh1Ki4Z_cMsdTAIQ.AgABAAAAAAB2UyzwtQEKR7-rWbgdcBZIAQDs_wIA9P98qz5bJ4KRAW82FJBct-BbjcTltINv2ZoZbgeITD2Q9gqUnCzx_fdjw3DYBQsWWNQw2MKDvyUpfJLo9z572wJay4jzLZ__2kJL3gLdmuzJfiv2sRFhsHguBEAyUIbsrCW6KuVkZHHiZP9EHaqOzINjyY9ekbZseMFOljYC5MMydP8oa_e-7lGrmw4Z7kEecamGpDMQi-hqo4iB_PxgD78cDVoM4dL9HNB4BprGSOSSi3EaBooF4roXJ8ixIdoY-DMgSX0tjrqd7liOKE9eqjboeH6pTM-qhteZ2CECXpNcFu6PIUpD592CzfVFjs6e5fpGL-i5FLce4KYUuaH0Peh_VMvcXrwwG3MUCEHgvNE06C_7tQOv8FdXY3C0JhjkzQxk6Zmpcp6ZcYznIlfhYtLQ3Izs9rQAWSeCNgTOtnPk4TXJFrJ2RDnnDDb2Xe7zaQxaiAr4nhJw6dJcw69nYpK0gTgAzfM8yhmtrzKw9vxHBfEueQmFB8AewjXZhtnjvDflgXEQ1LXxwOHyB4AlnjKRA-JBezAG1FalgX4BJ2gtks1cGDE9HI293mtdD8ZN-h5QSSfkldhkIMnbv3S6TOTtW2zeVpnjkXZ8fiTbMz-iuCEOwcWcfSHC1Fb3imt77igb5LiZXZUxf93C5_jfS6YTZKAan7Fchw3rv2kPy2TpJ-TokG5PiK1kgsZiE8BRdFAIMFPy4Y8aCymTVuEf924viute7jGjlFFyxVPS9DzrJXX_DfvnFsns7_zgPMhzkrwTGGID4elE8hD_Ol0A2Q73dwGF3YAEjqfUXC3CXPIK8QuXguka_SQ5zYjoaY_ZRhpMiRDSO0Ck95W-gQ6c3VyCs0Oud9fwuTk4jIq25y8S0yZU_wKtA2iDDMPX9aGfG9-Zj5YeRjocLD9iA4GX7p5T7-bKte95fgopKoUyfsa5_Kmt5UF25BYURlr6DTToamwiC8GviP_aGvnkETMgRKS-1gg9n0nbhcYsLFU_4G3geaDjBmEqxKBSQZ9Atml8r9rjkXIT-qY34BhfwCLzTZsUl-HsGKFOWuPSh7KmldMCTv7bdr_2vhrR05x8',
  client_id: 'a4bf3359-dcc1-4265-8752-a2e19fdc32c7',
  client_secret: '9U1Jq_lk6O8dlP2C1Qxi-6UM~p5Yb.JOaN',
  redirect_uri: 'https://heymind.github.io/tools/microsoft-graph-api-auth',

  /**
   * The base path for indexing, all files and subfolders are public by this tool. For example: `/Public`.
   */
  base: '/fenxiang',

  /**
   * The url for your Firebase Realtime Database storage, we'll cache your refresh_token / access_token here.
   */
  firebase_url: 'https://fir-dd996.firebaseio.com/auth.json',

  /**
   * Feature: add OneDriveCN (21Vianet) support
   * Usage: simply change `useOneDriveCN` to true
   */
  useOneDriveCN: false,

  /**
   * Feature: Pagination when a folder has multiple(>${top}) files
   * - top: specify the page size limit of the result set, a big `top` value will slow down the fetching speed
   */
  pagination: {
    enable: true,
    top: 100 // default: 200, accepts a minimum value of 1 and a maximum value of 999 (inclusive)
  },

  /**
   * Feature Caching
   * Enable Cloudflare cache for path pattern listed below.
   * Cache rules:
   * - Entire File Cache  0 < file_size < entireFileCacheLimit
   * - Chunked Cache     entireFileCacheLimit  <= file_size < chunkedCacheLimit
   * - No Cache ( redirect to OneDrive Server )   others
   *
   * Difference between `Entire File Cache` and `Chunked Cache`
   *
   * `Entire File Cache` requires the entire file to be transferred to the Cloudflare server before
   *  the first byte sent to a client.
   *
   * `Chunked Cache` would stream the file content to the client while caching it.
   *  But there is no exact Content-Length in the response headers. ( Content-Length: chunked )
   *
   */
  cache: {
    enable: false,
    entireFileCacheLimit: 10000000, // 10MB
    chunkedCacheLimit: 100000000, // 100MB
    paths: ['/Images']
  },

  /**
   * Feature: Thumbnail
   * Show a thumbnail of image by ?thumbnail=small (small, medium, large)
   * More details: https://docs.microsoft.com/en-us/onedrive/developer/rest-api/api/driveitem_list_thumbnails?view=odsp-graph-online#size-options
   * Example: https://storage.spencerwoo.com/🥟%20Some%20test%20files/Previews/eb37c02438f.png?thumbnail=mediumSquare
   * You can embed this link (url encoded) directly inside Markdown or HTML.
   */
  thumbnail: true,

  /**
   * Small File Upload (<= 4MB)
   * POST https://<base_url>/<directory_path>/?upload=<filename>&key=<secret_key>
   */
  upload: {
    enable: false,
    key: 'your_secret_key_here'
  },

  /**
   * Feature: Proxy Download
   * Use Cloudflare as a relay to speed up download. (Especially in Mainland China)
   * Example: https://storage.spencerwoo.com/🥟%20Some%20test%20files/Previews/eb37c02438f.png?raw=true&proxied
   * You can also embed this link (url encoded) directly inside Markdown or HTML.
   */
  proxyDownload: true
}

export default config
