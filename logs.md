Compiling app v0.1.0 (/home/runner/work/OllamaGUI/OllamaGUI/src-tauri)
   Compiling fern v0.7.1
   Compiling reqwest v0.12.23
   Compiling sqlx v0.8.6
    Finished `release` profile [optimized] target(s) in 4m 26s
       Built [tauri_cli::build] application at: /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/app
        Info [tauri_bundler::bundle] Patching binary "/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/app" for type deb
    Bundling [tauri_bundler::bundle::linux::debian] OllamaGUI_0.1.3_amd64.deb (/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/deb/OllamaGUI_0.1.3_amd64.deb)
       Debug [handlebars::render] Rendering value: Path(Relative(([Named("categories")], "categories")))
       Debug [handlebars::render] Rendering helper: "if", params: [PathAndJson { relative_path: Some("comment"), value: Context(String("A Tauri App"), ["comment"]) }], hash: {}
       Debug [handlebars::render] Rendering value: Path(Relative(([Named("comment")], "comment")))
       Debug [handlebars::render] Rendering value: Path(Relative(([Named("exec")], "exec")))
       Debug [handlebars::render] Rendering value: Path(Relative(([Named("exec")], "exec")))
       Debug [handlebars::render] Rendering value: Path(Relative(([Named("icon")], "icon")))
       Debug [handlebars::render] Rendering value: Path(Relative(([Named("name")], "name")))
       Debug [handlebars::render] Rendering helper: "if", params: [PathAndJson { relative_path: Some("mime_type"), value: Context(Null, ["mime_type"]) }], hash: {}
        Info [tauri_bundler::bundle] Patching binary "/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/app" for type rpm
    Bundling [tauri_bundler::bundle::linux::rpm] OllamaGUI-0.1.3-1.x86_64.rpm (/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/rpm/OllamaGUI-0.1.3-1.x86_64.rpm)
       Debug [handlebars::render] Rendering value: Path(Relative(([Named("categories")], "categories")))
       Debug [handlebars::render] Rendering helper: "if", params: [PathAndJson { relative_path: Some("comment"), value: Context(String("A Tauri App"), ["comment"]) }], hash: {}
       Debug [handlebars::render] Rendering value: Path(Relative(([Named("comment")], "comment")))
       Debug [handlebars::render] Rendering value: Path(Relative(([Named("exec")], "exec")))
       Debug [handlebars::render] Rendering value: Path(Relative(([Named("exec")], "exec")))
       Debug [handlebars::render] Rendering value: Path(Relative(([Named("icon")], "icon")))
       Debug [handlebars::render] Rendering value: Path(Relative(([Named("name")], "name")))
       Debug [handlebars::render] Rendering helper: "if", params: [PathAndJson { relative_path: Some("mime_type"), value: Context(Null, ["mime_type"]) }], hash: {}
        Info [tauri_bundler::bundle] Patching binary "/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/app" for type appimage
 Downloading [tauri_bundler::utils::http_utils] https://github.com/tauri-apps/binary-releases/releases/download/apprun-old/AppRun-x86_64
       Debug [ureq_proto::client::flow] Flow<Prepare>
       Debug [ureq::run] GET https://github.com/******
       Debug [ureq::unversioned::resolver] Resolved: ArrayVec { len: 1, arr: [140.82.116.4:443] }
       Debug [ureq::unversioned::transport::tcp] Connected TcpStream to 140.82.116.4:443
       Debug [rustls::client::hs] No cached session for DnsName("github.com")
       Debug [rustls::client::hs] Not resuming any session
       Debug [ureq::tls::rustls] Wrapped TLS
       Debug [ureq_proto::client::flow] Flow<SendRequest>
       Debug [ureq::run] Request { method: GET, uri: https://github.com/******, version: HTTP/1.1, headers: {"accept-encoding": "gzip", "user-agent": "ureq/3.0.3", "accept": "*/*", "host": "github.com"} }
       Debug [rustls::client::hs] Using ciphersuite TLS13_AES_128_GCM_SHA256
       Debug [rustls::client::tls13] Not resuming
       Debug [rustls::client::tls13] TLS1.3 encrypted extensions: [ServerNameAck]
       Debug [rustls::client::hs] ALPN protocol is None
       Debug [ureq_proto::client::flow] Flow<RecvResponse>
       Debug [ureq_proto::client::call] Partial redirection response, insert fake connection: close
       Debug [ureq_proto::client::flow] Flow<Redirect>
       Debug [ureq::run] Response { status: 302, version: HTTP/1.1, headers: {"date": "Mon, 18 Aug 2025 12:14:11 GMT", "content-type": "text/html; charset=utf-8", "content-length": "0", "connection": "close", "location": "******", "<NOTICE>": "7 HEADERS ARE REDACTED"} }
       Debug [ureq::pool] Close: PoolKey { scheme: "https", authority: github.com, proxy: None }
       Debug [ureq_proto::client::flow] Flow<Prepare>
       Debug [ureq::run] Redirect (302 Found): GET https://release-assets.githubusercontent.com/******
       Debug [ureq::run] GET https://release-assets.githubusercontent.com/******
       Debug [ureq::unversioned::resolver] Resolved: ArrayVec { len: 4, arr: [185.199.108.133:443, 185.199.109.133:443, 185.199.110.133:443, 185.199.111.133:443] }
       Debug [ureq::unversioned::transport::tcp] Connected TcpStream to 185.199.108.133:443
       Debug [rustls::client::hs] No cached session for DnsName("release-assets.githubusercontent.com")
       Debug [rustls::client::hs] Not resuming any session
       Debug [ureq::tls::rustls] Wrapped TLS
       Debug [ureq_proto::client::flow] Flow<SendRequest>
       Debug [ureq::run] Request { method: GET, uri: https://release-assets.githubusercontent.com/******, version: HTTP/1.1, headers: {"accept-encoding": "gzip", "user-agent": "ureq/3.0.3", "accept": "*/*", "host": "release-assets.githubusercontent.com"} }
       Debug [rustls::client::hs] Using ciphersuite TLS13_AES_128_GCM_SHA256
       Debug [rustls::client::tls13] Not resuming
       Debug [rustls::client::tls13] TLS1.3 encrypted extensions: [ServerNameAck]
       Debug [rustls::client::hs] ALPN protocol is None
       Debug [ureq_proto::client::flow] Flow<RecvResponse>
       Debug [ureq_proto::client::flow] Flow<RecvBody>
       Debug [ureq::run] Response { status: 200, version: HTTP/1.1, headers: {"connection": "keep-alive", "content-length": "31552", "server": "Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0", "date": "Mon, 18 Aug 2025 12:14:11 GMT", "content-type": "application/octet-stream", "<NOTICE>": "18 HEADERS ARE REDACTED"} }
       Debug [ureq_proto::client::flow] Flow<Cleanup>
       Debug [ureq::pool] Return to pool: PoolKey { scheme: "https", authority: release-assets.githubusercontent.com, proxy: None }
 Downloading [tauri_bundler::utils::http_utils] https://github.com/tauri-apps/binary-releases/releases/download/linuxdeploy/linuxdeploy-x86_64.AppImage
       Debug [ureq_proto::client::flow] Flow<Prepare>
       Debug [ureq::run] GET https://github.com/******
       Debug [ureq::unversioned::resolver] Resolved: ArrayVec { len: 1, arr: [140.82.116.4:443] }
       Debug [ureq::unversioned::transport::tcp] Connected TcpStream to 140.82.116.4:443
       Debug [rustls::client::hs] No cached session for DnsName("github.com")
       Debug [rustls::client::hs] Not resuming any session
       Debug [ureq::tls::rustls] Wrapped TLS
       Debug [ureq_proto::client::flow] Flow<SendRequest>
       Debug [ureq::run] Request { method: GET, uri: https://github.com/******, version: HTTP/1.1, headers: {"accept-encoding": "gzip", "user-agent": "ureq/3.0.3", "accept": "*/*", "host": "github.com"} }
       Debug [rustls::client::hs] Using ciphersuite TLS13_AES_128_GCM_SHA256
       Debug [rustls::client::tls13] Not resuming
       Debug [rustls::client::tls13] TLS1.3 encrypted extensions: [ServerNameAck]
       Debug [rustls::client::hs] ALPN protocol is None
       Debug [ureq_proto::client::flow] Flow<RecvResponse>
       Debug [ureq_proto::client::call] Partial redirection response, insert fake connection: close
       Debug [ureq_proto::client::flow] Flow<Redirect>
       Debug [ureq::run] Response { status: 302, version: HTTP/1.1, headers: {"date": "Mon, 18 Aug 2025 12:14:11 GMT", "content-type": "text/html; charset=utf-8", "content-length": "0", "connection": "close", "location": "******", "<NOTICE>": "7 HEADERS ARE REDACTED"} }
       Debug [ureq::pool] Close: PoolKey { scheme: "https", authority: github.com, proxy: None }
       Debug [ureq_proto::client::flow] Flow<Prepare>
       Debug [ureq::run] Redirect (302 Found): GET https://release-assets.githubusercontent.com/******
       Debug [ureq::run] GET https://release-assets.githubusercontent.com/******
       Debug [ureq::unversioned::resolver] Resolved: ArrayVec { len: 4, arr: [185.199.111.133:443, 185.199.108.133:443, 185.199.110.133:443, 185.199.109.133:443] }
       Debug [ureq::unversioned::transport::tcp] Connected TcpStream to 185.199.111.133:443
       Debug [rustls::client::hs] No cached session for DnsName("release-assets.githubusercontent.com")
       Debug [rustls::client::hs] Not resuming any session
       Debug [ureq::tls::rustls] Wrapped TLS
       Debug [ureq_proto::client::flow] Flow<SendRequest>
       Debug [ureq::run] Request { method: GET, uri: https://release-assets.githubusercontent.com/******, version: HTTP/1.1, headers: {"accept-encoding": "gzip", "user-agent": "ureq/3.0.3", "accept": "*/*", "host": "release-assets.githubusercontent.com"} }
       Debug [rustls::client::hs] Using ciphersuite TLS13_AES_128_GCM_SHA256
       Debug [rustls::client::tls13] Not resuming
       Debug [rustls::client::tls13] TLS1.3 encrypted extensions: [ServerNameAck]
       Debug [rustls::client::hs] ALPN protocol is None
       Debug [ureq_proto::client::flow] Flow<RecvResponse>
       Debug [ureq_proto::client::flow] Flow<RecvBody>
       Debug [ureq::run] Response { status: 200, version: HTTP/1.1, headers: {"connection": "keep-alive", "content-length": "13264064", "server": "Windows-Azure-Blob/1.0 Microsoft-HTTPAPI/2.0", "date": "Mon, 18 Aug 2025 12:14:11 GMT", "content-type": "application/octet-stream", "<NOTICE>": "17 HEADERS ARE REDACTED"} }
       Debug [ureq_proto::client::flow] Flow<Cleanup>
       Debug [ureq::pool] Return to pool: PoolKey { scheme: "https", authority: release-assets.githubusercontent.com, proxy: None }
 Downloading [tauri_bundler::utils::http_utils] https://raw.githubusercontent.com/tauri-apps/linuxdeploy-plugin-gtk/master/linuxdeploy-plugin-gtk.sh
       Debug [ureq_proto::client::flow] Flow<Prepare>
       Debug [ureq::run] GET https://raw.githubusercontent.com/******
       Debug [ureq::unversioned::resolver] Resolved: ArrayVec { len: 8, arr: [185.199.110.133:443, 185.199.111.133:443, 185.199.109.133:443, 185.199.108.133:443, [2606:50c0:8002::154]:443, [2606:50c0:8003::154]:443, [2606:50c0:8001::154]:443, [2606:50c0:8000::154]:443] }
       Debug [ureq::unversioned::transport::tcp] Connected TcpStream to 185.199.110.133:443
       Debug [rustls::client::hs] No cached session for DnsName("raw.githubusercontent.com")
       Debug [rustls::client::hs] Not resuming any session
       Debug [ureq::tls::rustls] Wrapped TLS
       Debug [ureq_proto::client::flow] Flow<SendRequest>
       Debug [ureq::run] Request { method: GET, uri: https://raw.githubusercontent.com/******, version: HTTP/1.1, headers: {"accept-encoding": "gzip", "user-agent": "ureq/3.0.3", "accept": "*/*", "host": "raw.githubusercontent.com"} }
       Debug [rustls::client::hs] Using ciphersuite TLS13_AES_128_GCM_SHA256
       Debug [rustls::client::tls13] Not resuming
       Debug [rustls::client::tls13] TLS1.3 encrypted extensions: [ServerNameAck]
       Debug [rustls::client::hs] ALPN protocol is None
       Debug [ureq_proto::client::flow] Flow<RecvResponse>
       Debug [ureq_proto::client::flow] Flow<RecvBody>
       Debug [ureq::run] Response { status: 200, version: HTTP/1.1, headers: {"connection": "keep-alive", "content-length": "3721", "content-type": "text/plain; charset=utf-8", "content-encoding": "gzip", "date": "Mon, 18 Aug 2025 12:14:11 GMT", "<NOTICE>": "20 HEADERS ARE REDACTED"} }
       Debug [ureq::body] Decoding gzip
       Debug [ureq_proto::client::flow] Flow<Cleanup>
       Debug [ureq::pool] Return to pool: PoolKey { scheme: "https", authority: raw.githubusercontent.com, proxy: None }
 Downloading [tauri_bundler::utils::http_utils] https://raw.githubusercontent.com/tauri-apps/linuxdeploy-plugin-gstreamer/master/linuxdeploy-plugin-gstreamer.sh
       Debug [ureq_proto::client::flow] Flow<Prepare>
       Debug [ureq::run] GET https://raw.githubusercontent.com/******
       Debug [ureq::unversioned::resolver] Resolved: ArrayVec { len: 8, arr: [185.199.109.133:443, 185.199.110.133:443, 185.199.108.133:443, 185.199.111.133:443, [2606:50c0:8003::154]:443, [2606:50c0:8002::154]:443, [2606:50c0:8000::154]:443, [2606:50c0:8001::154]:443] }
       Debug [ureq::unversioned::transport::tcp] Connected TcpStream to 185.199.109.133:443
       Debug [rustls::client::hs] No cached session for DnsName("raw.githubusercontent.com")
       Debug [rustls::client::hs] Not resuming any session
       Debug [ureq::tls::rustls] Wrapped TLS
       Debug [ureq_proto::client::flow] Flow<SendRequest>
       Debug [ureq::run] Request { method: GET, uri: https://raw.githubusercontent.com/******, version: HTTP/1.1, headers: {"accept-encoding": "gzip", "user-agent": "ureq/3.0.3", "accept": "*/*", "host": "raw.githubusercontent.com"} }
       Debug [rustls::client::hs] Using ciphersuite TLS13_AES_128_GCM_SHA256
       Debug [rustls::client::tls13] Not resuming
       Debug [rustls::client::tls13] TLS1.3 encrypted extensions: [ServerNameAck]
       Debug [rustls::client::hs] ALPN protocol is None
       Debug [ureq_proto::client::flow] Flow<RecvResponse>
       Debug [ureq_proto::client::flow] Flow<RecvBody>
       Debug [ureq::run] Response { status: 200, version: HTTP/1.1, headers: {"connection": "keep-alive", "content-length": "1334", "content-type": "text/plain; charset=utf-8", "content-encoding": "gzip", "date": "Mon, 18 Aug 2025 12:14:12 GMT", "<NOTICE>": "20 HEADERS ARE REDACTED"} }
       Debug [ureq::body] Decoding gzip
       Debug [ureq_proto::client::flow] Flow<Cleanup>
       Debug [ureq::pool] Return to pool: PoolKey { scheme: "https", authority: raw.githubusercontent.com, proxy: None }
       Debug [handlebars::render] Rendering value: Path(Relative(([Named("categories")], "categories")))
       Debug [handlebars::render] Rendering helper: "if", params: [PathAndJson { relative_path: Some("comment"), value: Context(String("A Tauri App"), ["comment"]) }], hash: {}
       Debug [handlebars::render] Rendering value: Path(Relative(([Named("comment")], "comment")))
       Debug [handlebars::render] Rendering value: Path(Relative(([Named("exec")], "exec")))
       Debug [handlebars::render] Rendering value: Path(Relative(([Named("exec")], "exec")))
       Debug [handlebars::render] Rendering value: Path(Relative(([Named("icon")], "icon")))
       Debug [handlebars::render] Rendering value: Path(Relative(([Named("name")], "name")))
       Debug [handlebars::render] Rendering helper: "if", params: [PathAndJson { relative_path: Some("mime_type"), value: Context(Null, ["mime_type"]) }], hash: {}
    Bundling [tauri_bundler::bundle::linux::appimage] OllamaGUI_0.1.3_amd64.AppImage (/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI_0.1.3_amd64.AppImage)
     Running [tauri_bundler::utils] Command `/home/runner/.cache/tauri/linuxdeploy-x86_64.AppImage  --appimage-extract-and-run --verbosity 1 --appdir /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir --plugin gtk --output appimage`
linuxdeploy version 1-alpha (git commit ID 659c9db), GitHub actions build 10 built on 2024-07-26 15:40:22 UTC
-- Creating basic AppDir structure --
Creating directory /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/
Creating directory /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/
Creating directory /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/applications/
Creating directory /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/icons/hicolor/
Creating directory /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/icons/hicolor/16x16/apps/
Creating directory /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/icons/hicolor/32x32/apps/
Creating directory /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/icons/hicolor/64x64/apps/
Creating directory /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/icons/hicolor/128x128/apps/
Creating directory /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/icons/hicolor/256x256/apps/
Creating directory /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/icons/hicolor/scalable/apps/
-- Deploying dependencies for existing files in AppDir --
Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/app
Deploying shared library /lib/x86_64-linux-gnu/libssl.so.3
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libssl.so.3 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libcrypto.so.3
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libcrypto.so.3 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libwebkit2gtk-4.1.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libwebkit2gtk-4.1.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libgtk-3.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgtk-3.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libgdk-3.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgdk-3.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libpango-1.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libpango-1.0.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libcairo-gobject.so.2
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libcairo-gobject.so.2 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libcairo.so.2
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libcairo.so.2 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libgdk_pixbuf-2.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgdk_pixbuf-2.0.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libsoup-3.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libsoup-3.0.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libgio-2.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgio-2.0.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libjavascriptcoregtk-4.1.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libjavascriptcoregtk-4.1.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libgobject-2.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgobject-2.0.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libglib-2.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libglib-2.0.so.0 using dpkg-query
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libgcc_s.so.1
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libm.so.6
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libc.so.6
Deploying shared library /lib/x86_64-linux-gnu/libepoxy.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libepoxy.so.0 using dpkg-query
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libfreetype.so.6
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libfontconfig.so.1
Deploying shared library /lib/x86_64-linux-gnu/libwebpmux.so.3
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libwebpmux.so.3 using dpkg-query
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libexpat.so.1
Deploying shared library /lib/x86_64-linux-gnu/libicui18n.so.74
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libicui18n.so.74 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libsystemd.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libsystemd.so.0 using dpkg-query
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libharfbuzz.so.0
Deploying shared library /lib/x86_64-linux-gnu/libjpeg.so.8
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libjpeg.so.8 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libpng16.so.16
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libpng16.so.16 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libicuuc.so.74
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libicuuc.so.74 using dpkg-query
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libz.so.1
Deploying shared library /lib/x86_64-linux-gnu/libatk-1.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libatk-1.0.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libxml2.so.2
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libxml2.so.2 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libsqlite3.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libsqlite3.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libxslt.so.1
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libxslt.so.1 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/liblcms2.so.2
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/liblcms2.so.2 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libwoff2dec.so.1.0.2
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libwoff2dec.so.1.0.2 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libgcrypt.so.20
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgcrypt.so.20 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libgstallocators-1.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgstallocators-1.0.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libgstapp-1.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgstapp-1.0.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libgstbase-1.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgstbase-1.0.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libgstreamer-1.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgstreamer-1.0.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libgstpbutils-1.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgstpbutils-1.0.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libgstaudio-1.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgstaudio-1.0.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libgsttag-1.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgsttag-1.0.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libgstvideo-1.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgstvideo-1.0.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libgstgl-1.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgstgl-1.0.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libgstfft-1.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgstfft-1.0.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libwebpdemux.so.2
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libwebpdemux.so.2 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libwebp.so.7
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libwebp.so.7 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libharfbuzz-icu.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libharfbuzz-icu.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libenchant-2.so.2
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libenchant-2.so.2 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libgmodule-2.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgmodule-2.0.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libsecret-1.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libsecret-1.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libtasn1.so.6
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libtasn1.so.6 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libhyphen.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libhyphen.so.0 using dpkg-query
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libX11.so.6
Deploying shared library /lib/x86_64-linux-gnu/libwayland-server.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libwayland-server.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libwayland-client.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libwayland-client.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libmanette-0.2.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libmanette-0.2.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libseccomp.so.2
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libseccomp.so.2 using dpkg-query
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libgbm.so.1
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libdrm.so.2
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libstdc++.so.6
Deploying shared library /lib/x86_64-linux-gnu/libpangocairo-1.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libpangocairo-1.0.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libpangoft2-1.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libpangoft2-1.0.so.0 using dpkg-query
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libfribidi.so.0
Deploying shared library /lib/x86_64-linux-gnu/libXi.so.6
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXi.so.6 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libatk-bridge-2.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libatk-bridge-2.0.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libXfixes.so.3
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXfixes.so.3 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libxkbcommon.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libxkbcommon.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libwayland-cursor.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libwayland-cursor.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libwayland-egl.so.1
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libwayland-egl.so.1 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libXext.so.6
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXext.so.6 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libXcursor.so.1
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXcursor.so.1 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libXdamage.so.1
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXdamage.so.1 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libXcomposite.so.1
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXcomposite.so.1 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libXrandr.so.2
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXrandr.so.2 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libXinerama.so.1
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXinerama.so.1 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libthai.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libthai.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libXrender.so.1
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXrender.so.1 using dpkg-query
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libxcb.so.1
Deploying shared library /lib/x86_64-linux-gnu/libxcb-render.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libxcb-render.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libxcb-shm.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libxcb-shm.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libpixman-1.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libpixman-1.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libpsl.so.5
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libpsl.so.5 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libbrotlidec.so.1
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libbrotlidec.so.1 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libgssapi_krb5.so.2
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgssapi_krb5.so.2 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libnghttp2.so.14
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libnghttp2.so.14 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libmount.so.1
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libmount.so.1 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libselinux.so.1
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libselinux.so.1 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libatomic.so.1
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libatomic.so.1 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libffi.so.8
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libffi.so.8 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libpcre2-8.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libpcre2-8.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libbz2.so.1.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libbz2.so.1.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libcap.so.2
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libcap.so.2 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/liblz4.so.1
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/liblz4.so.1 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/liblzma.so.5
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/liblzma.so.5 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libzstd.so.1
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libzstd.so.1 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libgraphite2.so.3
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgraphite2.so.3 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libicudata.so.74
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libicudata.so.74 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libwoff2common.so.1.0.2
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libwoff2common.so.1.0.2 using dpkg-query
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libgpg-error.so.0
Deploying shared library /lib/x86_64-linux-gnu/libunwind.so.8
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libunwind.so.8 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libdw.so.1
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libdw.so.1 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/liborc-0.4.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/liborc-0.4.so.0 using dpkg-query
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libGL.so.1
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libEGL.so.1
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libX11-xcb.so.1
Deploying shared library /lib/x86_64-linux-gnu/libgudev-1.0.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgudev-1.0.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libsharpyuv.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libsharpyuv.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libevdev.so.2
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libevdev.so.2 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libatspi.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libatspi.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libdbus-1.so.3
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libdbus-1.so.3 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libdatrie.so.1
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libdatrie.so.1 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libXau.so.6
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXau.so.6 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libXdmcp.so.6
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXdmcp.so.6 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libunistring.so.5
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libunistring.so.5 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libidn2.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libidn2.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libbrotlicommon.so.1
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libbrotlicommon.so.1 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libkrb5.so.3
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libkrb5.so.3 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libk5crypto.so.3
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libk5crypto.so.3 using dpkg-query
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libcom_err.so.2
Deploying shared library /lib/x86_64-linux-gnu/libkrb5support.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libkrb5support.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libblkid.so.1
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libblkid.so.1 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libelf.so.1
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libelf.so.1 using dpkg-query
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libGLdispatch.so.0
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libGLX.so.0
Deploying shared library /lib/x86_64-linux-gnu/libudev.so.1
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libudev.so.1 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libbsd.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libbsd.so.0 using dpkg-query
Deploying shared library /lib/x86_64-linux-gnu/libkeyutils.so.1
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libkeyutils.so.1 using dpkg-query
Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libresolv.so.2
Deploying shared library /lib/x86_64-linux-gnu/libmd.so.0
WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libmd.so.0 using dpkg-query
Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/webkit2gtk-4.1/injected-bundle/libwebkit2gtkinjectedbundle.so
Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/webkit2gtk-4.1/WebKitNetworkProcess
Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/webkit2gtk-4.1/WebKitWebProcess
-- Copying files into AppDir --
Copying file /lib/x86_64-linux-gnu/libXau.so.6 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXau.so.6
Copying file /lib/x86_64-linux-gnu/libXcomposite.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcomposite.so.1
Copying file /lib/x86_64-linux-gnu/libXcursor.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcursor.so.1
Copying file /lib/x86_64-linux-gnu/libXdamage.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXdamage.so.1
Copying file /lib/x86_64-linux-gnu/libXdmcp.so.6 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXdmcp.so.6
Copying file /lib/x86_64-linux-gnu/libXext.so.6 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXext.so.6
Copying file /lib/x86_64-linux-gnu/libXfixes.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXfixes.so.3
Copying file /lib/x86_64-linux-gnu/libXi.so.6 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXi.so.6
Copying file /lib/x86_64-linux-gnu/libXinerama.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXinerama.so.1
Copying file /lib/x86_64-linux-gnu/libXrandr.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrandr.so.2
Copying file /lib/x86_64-linux-gnu/libXrender.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrender.so.1
Copying file /lib/x86_64-linux-gnu/libatk-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-1.0.so.0
Copying file /lib/x86_64-linux-gnu/libatk-bridge-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-bridge-2.0.so.0
Copying file /lib/x86_64-linux-gnu/libatomic.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatomic.so.1
Copying file /lib/x86_64-linux-gnu/libatspi.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatspi.so.0
Copying file /lib/x86_64-linux-gnu/libblkid.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libblkid.so.1
Copying file /lib/x86_64-linux-gnu/libbrotlicommon.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlicommon.so.1
Copying file /lib/x86_64-linux-gnu/libbrotlidec.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlidec.so.1
Copying file /lib/x86_64-linux-gnu/libbsd.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbsd.so.0
Copying file /lib/x86_64-linux-gnu/libbz2.so.1.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbz2.so.1.0
Copying file /lib/x86_64-linux-gnu/libcairo-gobject.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo-gobject.so.2
Copying file /lib/x86_64-linux-gnu/libcairo.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo.so.2
Copying file /lib/x86_64-linux-gnu/libcap.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcap.so.2
Copying file /lib/x86_64-linux-gnu/libcrypto.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcrypto.so.3
Copying file /lib/x86_64-linux-gnu/libdatrie.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdatrie.so.1
Copying file /lib/x86_64-linux-gnu/libdbus-1.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdbus-1.so.3
Copying file /lib/x86_64-linux-gnu/libdw.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdw.so.1
Copying file /lib/x86_64-linux-gnu/libelf.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libelf.so.1
Copying file /lib/x86_64-linux-gnu/libenchant-2.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libenchant-2.so.2
Copying file /lib/x86_64-linux-gnu/libepoxy.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libepoxy.so.0
Copying file /lib/x86_64-linux-gnu/libevdev.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libevdev.so.2
Copying file /lib/x86_64-linux-gnu/libffi.so.8 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libffi.so.8
Copying file /lib/x86_64-linux-gnu/libgcrypt.so.20 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgcrypt.so.20
Copying file /lib/x86_64-linux-gnu/libgdk-3.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk-3.so.0
Copying file /lib/x86_64-linux-gnu/libgdk_pixbuf-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk_pixbuf-2.0.so.0
Copying file /lib/x86_64-linux-gnu/libgio-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgio-2.0.so.0
Copying file /lib/x86_64-linux-gnu/libglib-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libglib-2.0.so.0
Copying file /lib/x86_64-linux-gnu/libgmodule-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgmodule-2.0.so.0
Copying file /lib/x86_64-linux-gnu/libgobject-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgobject-2.0.so.0
Copying file /lib/x86_64-linux-gnu/libgraphite2.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgraphite2.so.3
Copying file /lib/x86_64-linux-gnu/libgssapi_krb5.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgssapi_krb5.so.2
Copying file /lib/x86_64-linux-gnu/libgstallocators-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstallocators-1.0.so.0
Copying file /lib/x86_64-linux-gnu/libgstapp-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstapp-1.0.so.0
Copying file /lib/x86_64-linux-gnu/libgstaudio-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstaudio-1.0.so.0
Copying file /lib/x86_64-linux-gnu/libgstbase-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstbase-1.0.so.0
Copying file /lib/x86_64-linux-gnu/libgstfft-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstfft-1.0.so.0
Copying file /lib/x86_64-linux-gnu/libgstgl-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstgl-1.0.so.0
Copying file /lib/x86_64-linux-gnu/libgstpbutils-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstpbutils-1.0.so.0
Copying file /lib/x86_64-linux-gnu/libgstreamer-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstreamer-1.0.so.0
Copying file /lib/x86_64-linux-gnu/libgsttag-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgsttag-1.0.so.0
Copying file /lib/x86_64-linux-gnu/libgstvideo-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstvideo-1.0.so.0
Copying file /lib/x86_64-linux-gnu/libgtk-3.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgtk-3.so.0
Copying file /lib/x86_64-linux-gnu/libgudev-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgudev-1.0.so.0
Copying file /lib/x86_64-linux-gnu/libharfbuzz-icu.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libharfbuzz-icu.so.0
Copying file /lib/x86_64-linux-gnu/libhyphen.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libhyphen.so.0
Copying file /lib/x86_64-linux-gnu/libicudata.so.74 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicudata.so.74
Copying file /lib/x86_64-linux-gnu/libicui18n.so.74 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicui18n.so.74
Copying file /lib/x86_64-linux-gnu/libicuuc.so.74 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicuuc.so.74
Copying file /lib/x86_64-linux-gnu/libidn2.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libidn2.so.0
Copying file /lib/x86_64-linux-gnu/libjavascriptcoregtk-4.1.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjavascriptcoregtk-4.1.so.0
Copying file /lib/x86_64-linux-gnu/libjpeg.so.8 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjpeg.so.8
Copying file /lib/x86_64-linux-gnu/libk5crypto.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libk5crypto.so.3
Copying file /lib/x86_64-linux-gnu/libkeyutils.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkeyutils.so.1
Copying file /lib/x86_64-linux-gnu/libkrb5.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5.so.3
Copying file /lib/x86_64-linux-gnu/libkrb5support.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5support.so.0
Copying file /lib/x86_64-linux-gnu/liblcms2.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblcms2.so.2
Copying file /lib/x86_64-linux-gnu/liblz4.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblz4.so.1
Copying file /lib/x86_64-linux-gnu/liblzma.so.5 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblzma.so.5
Copying file /lib/x86_64-linux-gnu/libmanette-0.2.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmanette-0.2.so.0
Copying file /lib/x86_64-linux-gnu/libmd.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmd.so.0
Copying file /lib/x86_64-linux-gnu/libmount.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmount.so.1
Copying file /lib/x86_64-linux-gnu/libnghttp2.so.14 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libnghttp2.so.14
Copying file /lib/x86_64-linux-gnu/liborc-0.4.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liborc-0.4.so.0
Copying file /lib/x86_64-linux-gnu/libpango-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpango-1.0.so.0
Copying file /lib/x86_64-linux-gnu/libpangocairo-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangocairo-1.0.so.0
Copying file /lib/x86_64-linux-gnu/libpangoft2-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangoft2-1.0.so.0
Copying file /lib/x86_64-linux-gnu/libpcre2-8.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpcre2-8.so.0
Copying file /lib/x86_64-linux-gnu/libpixman-1.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpixman-1.so.0
Copying file /lib/x86_64-linux-gnu/libpng16.so.16 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpng16.so.16
Copying file /lib/x86_64-linux-gnu/libpsl.so.5 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpsl.so.5
Copying file /lib/x86_64-linux-gnu/libseccomp.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libseccomp.so.2
Copying file /lib/x86_64-linux-gnu/libsecret-1.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsecret-1.so.0
Copying file /lib/x86_64-linux-gnu/libselinux.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libselinux.so.1
Copying file /lib/x86_64-linux-gnu/libsharpyuv.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsharpyuv.so.0
Copying file /lib/x86_64-linux-gnu/libsoup-3.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsoup-3.0.so.0
Copying file /lib/x86_64-linux-gnu/libsqlite3.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsqlite3.so.0
Copying file /lib/x86_64-linux-gnu/libssl.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libssl.so.3
Copying file /lib/x86_64-linux-gnu/libsystemd.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsystemd.so.0
Copying file /lib/x86_64-linux-gnu/libtasn1.so.6 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libtasn1.so.6
Copying file /lib/x86_64-linux-gnu/libthai.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libthai.so.0
Copying file /lib/x86_64-linux-gnu/libudev.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libudev.so.1
Copying file /lib/x86_64-linux-gnu/libunistring.so.5 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunistring.so.5
Copying file /lib/x86_64-linux-gnu/libunwind.so.8 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunwind.so.8
Copying file /lib/x86_64-linux-gnu/libwayland-client.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-client.so.0
Copying file /lib/x86_64-linux-gnu/libwayland-cursor.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-cursor.so.0
Copying file /lib/x86_64-linux-gnu/libwayland-egl.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-egl.so.1
Copying file /lib/x86_64-linux-gnu/libwayland-server.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-server.so.0
Copying file /lib/x86_64-linux-gnu/libwebkit2gtk-4.1.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebkit2gtk-4.1.so.0
Copying file /lib/x86_64-linux-gnu/libwebp.so.7 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebp.so.7
Copying file /lib/x86_64-linux-gnu/libwebpdemux.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpdemux.so.2
Copying file /lib/x86_64-linux-gnu/libwebpmux.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpmux.so.3
Copying file /lib/x86_64-linux-gnu/libwoff2common.so.1.0.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2common.so.1.0.2
Copying file /lib/x86_64-linux-gnu/libwoff2dec.so.1.0.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2dec.so.1.0.2
Copying file /lib/x86_64-linux-gnu/libxcb-render.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-render.so.0
Copying file /lib/x86_64-linux-gnu/libxcb-shm.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-shm.so.0
Copying file /lib/x86_64-linux-gnu/libxkbcommon.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxkbcommon.so.0
Copying file /lib/x86_64-linux-gnu/libxml2.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxml2.so.2
Copying file /lib/x86_64-linux-gnu/libxslt.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxslt.so.1
Copying file /lib/x86_64-linux-gnu/libzstd.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libzstd.so.1
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXau.so.6
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcomposite.so.1
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcursor.so.1
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXdamage.so.1
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXdmcp.so.6
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXext.so.6
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXfixes.so.3
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXi.so.6
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXinerama.so.1
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrandr.so.2
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrender.so.1
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-1.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-bridge-2.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatomic.so.1
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatspi.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libblkid.so.1
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlicommon.so.1
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlidec.so.1
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbsd.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbz2.so.1.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo-gobject.so.2
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo.so.2
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcap.so.2
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcrypto.so.3
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdatrie.so.1
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdbus-1.so.3
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdw.so.1
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libelf.so.1
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libenchant-2.so.2
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libepoxy.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libevdev.so.2
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libffi.so.8
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgcrypt.so.20
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk-3.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk_pixbuf-2.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgio-2.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libglib-2.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgmodule-2.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgobject-2.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgraphite2.so.3
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgssapi_krb5.so.2
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstallocators-1.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstapp-1.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstaudio-1.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstbase-1.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstfft-1.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstgl-1.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstpbutils-1.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstreamer-1.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgsttag-1.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstvideo-1.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgtk-3.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgudev-1.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libharfbuzz-icu.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libhyphen.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicudata.so.74
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicui18n.so.74
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicuuc.so.74
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libidn2.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjavascriptcoregtk-4.1.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjpeg.so.8
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libk5crypto.so.3
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkeyutils.so.1
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5.so.3
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5support.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblcms2.so.2
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblz4.so.1
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblzma.so.5
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmanette-0.2.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmd.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmount.so.1
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libnghttp2.so.14
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liborc-0.4.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpango-1.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangocairo-1.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangoft2-1.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpcre2-8.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpixman-1.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpng16.so.16
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpsl.so.5
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libseccomp.so.2
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsecret-1.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libselinux.so.1
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsharpyuv.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsoup-3.0.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsqlite3.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libssl.so.3
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsystemd.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libtasn1.so.6
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libthai.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libudev.so.1
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunistring.so.5
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunwind.so.8
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-client.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-cursor.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-egl.so.1
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-server.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebkit2gtk-4.1.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebp.so.7
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpdemux.so.2
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpmux.so.3
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2common.so.1.0.2
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2dec.so.1.0.2
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-render.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-shm.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxkbcommon.so.0
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxml2.so.2
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxslt.so.1
Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libzstd.so.1
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/app to $ORIGIN/../lib
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXau.so.6 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcomposite.so.1 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcursor.so.1 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXdamage.so.1 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXdmcp.so.6 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXext.so.6 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXfixes.so.3 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXi.so.6 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXinerama.so.1 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrandr.so.2 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrender.so.1 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-1.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-bridge-2.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatomic.so.1 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatspi.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libblkid.so.1 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlicommon.so.1 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlidec.so.1 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbsd.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbz2.so.1.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo-gobject.so.2 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo.so.2 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcap.so.2 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcrypto.so.3 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdatrie.so.1 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdbus-1.so.3 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdw.so.1 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libelf.so.1 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libenchant-2.so.2 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libepoxy.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libevdev.so.2 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libffi.so.8 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgcrypt.so.20 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk-3.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk_pixbuf-2.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgio-2.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libglib-2.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgmodule-2.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgobject-2.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgraphite2.so.3 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgssapi_krb5.so.2 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstallocators-1.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstapp-1.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstaudio-1.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstbase-1.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstfft-1.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstgl-1.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstpbutils-1.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstreamer-1.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgsttag-1.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstvideo-1.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgtk-3.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgudev-1.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libharfbuzz-icu.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libhyphen.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicudata.so.74 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicui18n.so.74 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicuuc.so.74 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libidn2.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjavascriptcoregtk-4.1.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjpeg.so.8 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libk5crypto.so.3 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkeyutils.so.1 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5.so.3 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5support.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblcms2.so.2 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblz4.so.1 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblzma.so.5 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmanette-0.2.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmd.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmount.so.1 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libnghttp2.so.14 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liborc-0.4.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpango-1.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangocairo-1.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangoft2-1.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpcre2-8.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpixman-1.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpng16.so.16 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpsl.so.5 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libseccomp.so.2 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsecret-1.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libselinux.so.1 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsharpyuv.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsoup-3.0.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsqlite3.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libssl.so.3 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsystemd.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libtasn1.so.6 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libthai.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libudev.so.1 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunistring.so.5 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunwind.so.8 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-client.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-cursor.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-egl.so.1 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-server.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebkit2gtk-4.1.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebp.so.7 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpdemux.so.2 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpmux.so.3 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2common.so.1.0.2 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2dec.so.1.0.2 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-render.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-shm.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxkbcommon.so.0 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxml2.so.2 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxslt.so.1 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libzstd.so.1 to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/webkit2gtk-4.1/WebKitNetworkProcess to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/webkit2gtk-4.1/WebKitWebProcess to $ORIGIN
Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/webkit2gtk-4.1/injected-bundle/libwebkit2gtkinjectedbundle.so to $ORIGIN
-- Running input plugin: gtk --
[gtk/stdout] Installing AppRun hook
[gtk/stderr] chmod: cannot access '/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib64': No such file or directory
[gtk/stdout] Installing GLib schemas
[gtk/stdout] Installing GTK 3.0 modules
[gtk/stdout] WARNING: gtk-query-immodules-3.0 not found
[gtk/stdout] Installing GDK PixBufs
[gtk/stdout] Updating pixbuf cache in /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir//usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders.cache
[gtk/stdout] Copying more libraries
[gtk/stderr] linuxdeploy version 1-alpha (git commit ID 659c9db), GitHub actions build 10 built on 2024-07-26 15:40:22 UTC
[gtk/stdout]
[gtk/stdout] -- Creating basic AppDir structure --
[gtk/stdout] Creating directory /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/
[gtk/stdout] Creating directory /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/
[gtk/stdout] Creating directory /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/applications/
[gtk/stdout] Creating directory /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/icons/hicolor/
[gtk/stdout] Creating directory /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/icons/hicolor/16x16/apps/
[gtk/stdout] Creating directory /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/icons/hicolor/32x32/apps/
[gtk/stdout] Creating directory /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/icons/hicolor/64x64/apps/
[gtk/stdout] Creating directory /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/icons/hicolor/128x128/apps/
[gtk/stdout] Creating directory /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/icons/hicolor/256x256/apps/
[gtk/stdout] Creating directory /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/icons/hicolor/scalable/apps/
[gtk/stdout]
[gtk/stdout] -- Deploying dependencies for existing files in AppDir --
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/app
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libssl.so.3
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libssl.so.3 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libcrypto.so.3
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libcrypto.so.3 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwebkit2gtk-4.1.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwebkit2gtk-4.1.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgtk-3.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgtk-3.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgdk-3.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgdk-3.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libpango-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libpango-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libcairo-gobject.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libcairo-gobject.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libcairo.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libcairo.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgdk_pixbuf-2.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgdk_pixbuf-2.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libsoup-3.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libsoup-3.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgio-2.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgio-2.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libjavascriptcoregtk-4.1.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libjavascriptcoregtk-4.1.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgobject-2.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgobject-2.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libglib-2.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libglib-2.0.so.0 using dpkg-query
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libgcc_s.so.1
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libm.so.6
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libc.so.6
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libepoxy.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libepoxy.so.0 using dpkg-query
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libfreetype.so.6
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libfontconfig.so.1
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwebpmux.so.3
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwebpmux.so.3 using dpkg-query
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libexpat.so.1
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libicui18n.so.74
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libicui18n.so.74 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libsystemd.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libsystemd.so.0 using dpkg-query
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libharfbuzz.so.0
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libjpeg.so.8
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libjpeg.so.8 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libpng16.so.16
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libpng16.so.16 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libicuuc.so.74
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libicuuc.so.74 using dpkg-query
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libz.so.1
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libatk-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libatk-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libxml2.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libxml2.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libsqlite3.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libsqlite3.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libxslt.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libxslt.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/liblcms2.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/liblcms2.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwoff2dec.so.1.0.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwoff2dec.so.1.0.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgcrypt.so.20
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgcrypt.so.20 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstallocators-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstallocators-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstapp-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstapp-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstbase-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstbase-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstreamer-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstreamer-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstpbutils-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstpbutils-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstaudio-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstaudio-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgsttag-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgsttag-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstvideo-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstvideo-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstgl-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstgl-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstfft-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstfft-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwebpdemux.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwebpdemux.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwebp.so.7
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwebp.so.7 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libharfbuzz-icu.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libharfbuzz-icu.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libenchant-2.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libenchant-2.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgmodule-2.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgmodule-2.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libsecret-1.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libsecret-1.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libtasn1.so.6
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libtasn1.so.6 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libhyphen.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libhyphen.so.0 using dpkg-query
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libX11.so.6
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwayland-server.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwayland-server.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwayland-client.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwayland-client.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libmanette-0.2.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libmanette-0.2.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libseccomp.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libseccomp.so.2 using dpkg-query
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libgbm.so.1
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libdrm.so.2
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libstdc++.so.6
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libpangocairo-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libpangocairo-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libpangoft2-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libpangoft2-1.0.so.0 using dpkg-query
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libfribidi.so.0
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXi.so.6
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXi.so.6 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libatk-bridge-2.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libatk-bridge-2.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXfixes.so.3
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXfixes.so.3 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libxkbcommon.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libxkbcommon.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwayland-cursor.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwayland-cursor.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwayland-egl.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwayland-egl.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXext.so.6
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXext.so.6 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXcursor.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXcursor.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXdamage.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXdamage.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXcomposite.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXcomposite.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXrandr.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXrandr.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXinerama.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXinerama.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libthai.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libthai.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXrender.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXrender.so.1 using dpkg-query
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libxcb.so.1
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libxcb-render.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libxcb-render.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libxcb-shm.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libxcb-shm.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libpixman-1.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libpixman-1.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libpsl.so.5
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libpsl.so.5 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libbrotlidec.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libbrotlidec.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgssapi_krb5.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgssapi_krb5.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libnghttp2.so.14
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libnghttp2.so.14 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libmount.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libmount.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libselinux.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libselinux.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libatomic.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libatomic.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libffi.so.8
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libffi.so.8 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libpcre2-8.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libpcre2-8.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libbz2.so.1.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libbz2.so.1.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libcap.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libcap.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/liblz4.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/liblz4.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/liblzma.so.5
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/liblzma.so.5 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libzstd.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libzstd.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libgraphite2.so.3
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgraphite2.so.3 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libicudata.so.74
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libicudata.so.74 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwoff2common.so.1.0.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwoff2common.so.1.0.2 using dpkg-query
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libgpg-error.so.0
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libunwind.so.8
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libunwind.so.8 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libdw.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libdw.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/liborc-0.4.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/liborc-0.4.so.0 using dpkg-query
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libGL.so.1
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libEGL.so.1
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libX11-xcb.so.1
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgudev-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgudev-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libsharpyuv.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libsharpyuv.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libevdev.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libevdev.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libatspi.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libatspi.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libdbus-1.so.3
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libdbus-1.so.3 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libdatrie.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libdatrie.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libXau.so.6
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXau.so.6 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libXdmcp.so.6
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXdmcp.so.6 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libunistring.so.5
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libunistring.so.5 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libidn2.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libidn2.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libbrotlicommon.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libbrotlicommon.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libkrb5.so.3
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libkrb5.so.3 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libk5crypto.so.3
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libk5crypto.so.3 using dpkg-query
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libcom_err.so.2
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libkrb5support.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libkrb5support.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libblkid.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libblkid.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libelf.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libelf.so.1 using dpkg-query
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libGLdispatch.so.0
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libGLX.so.0
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libudev.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libudev.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libbsd.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libbsd.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libkeyutils.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libkeyutils.so.1 using dpkg-query
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libresolv.so.2
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libmd.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libmd.so.0 using dpkg-query
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libffi.so.8
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangocairo-1.0.so.0
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpango-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpango-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangoft2-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangoft2-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libglib-2.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libglib-2.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgobject-2.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgobject-2.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgio-2.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgio-2.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libthai.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libthai.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpcre2-8.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpcre2-8.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libffi.so.8
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libffi.so.8 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpng16.so.16
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpng16.so.16 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXext.so.6
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXext.so.6 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrender.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrender.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-render.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-render.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-shm.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-shm.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpixman-1.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpixman-1.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgmodule-2.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgmodule-2.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmount.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmount.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libselinux.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libselinux.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdatrie.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdatrie.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libbrotlidec.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libbrotlidec.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libblkid.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libblkid.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libbrotlicommon.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libbrotlicommon.so.1 using dpkg-query
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libseccomp.so.2
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libtasn1.so.6
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbz2.so.1.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libhyphen.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo.so.2
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdw.so.1
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libelf.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libelf.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libzstd.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libzstd.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblzma.so.5
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblzma.so.5 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbz2.so.1.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbz2.so.1.0 using dpkg-query
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-egl.so.1
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangoft2-1.0.so.0
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libpng16.so.16
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libpng16.so.16 using dpkg-query
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrender.so.1
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpcre2-8.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcomposite.so.1
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpdemux.so.2
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebp.so.7
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebp.so.7 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsharpyuv.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsharpyuv.so.0 using dpkg-query
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstgl-1.0.so.0
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstvideo-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstvideo-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstallocators-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstallocators-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstbase-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstbase-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstreamer-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstreamer-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-client.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-client.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-cursor.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-cursor.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-egl.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-egl.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgudev-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgudev-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liborc-0.4.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liborc-0.4.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunwind.so.8
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunwind.so.8 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdw.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdw.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libudev.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libudev.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcap.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcap.so.2 using dpkg-query
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libnghttp2.so.14
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblcms2.so.2
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-1.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsqlite3.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpixman-1.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunistring.so.5
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libudev.so.1
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcap.so.2
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-client.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunwind.so.8
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxml2.so.2
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicuuc.so.74
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicuuc.so.74 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicudata.so.74
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicudata.so.74 using dpkg-query
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdatrie.so.1
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgsttag-1.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlidec.so.1
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlicommon.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlicommon.so.1 using dpkg-query
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libenchant-2.so.2
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsystemd.so.0
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgcrypt.so.20
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgcrypt.so.20 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblz4.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblz4.so.1 using dpkg-query
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXdmcp.so.6
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbsd.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbsd.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmd.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmd.so.0 using dpkg-query
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpsl.so.5
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunistring.so.5
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunistring.so.5 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libidn2.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libidn2.so.0 using dpkg-query
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjpeg.so.8
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgtk-3.so.0
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk-3.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk-3.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangocairo-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangocairo-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo-gobject.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo-gobject.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk_pixbuf-2.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk_pixbuf-2.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libepoxy.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libepoxy.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXi.so.6
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXi.so.6 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-bridge-2.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-bridge-2.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXfixes.so.3
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXfixes.so.3 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxkbcommon.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxkbcommon.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcursor.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcursor.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXdamage.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXdamage.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcomposite.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcomposite.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrandr.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrandr.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXinerama.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXinerama.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjpeg.so.8
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjpeg.so.8 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatspi.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatspi.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdbus-1.so.3
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdbus-1.so.3 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsystemd.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsystemd.so.0 using dpkg-query
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkeyutils.so.1
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libk5crypto.so.3
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5support.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5support.so.0 using dpkg-query
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liborc-0.4.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicudata.so.74
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXdamage.so.1
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo-gobject.so.2
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libssl.so.3
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcrypto.so.3
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcrypto.so.3 using dpkg-query
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsharpyuv.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libblkid.so.1
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstvideo-1.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgobject-2.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblz4.so.1
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebkit2gtk-4.1.so.0
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpmux.so.3
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpmux.so.3 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjavascriptcoregtk-4.1.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjavascriptcoregtk-4.1.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicui18n.so.74
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicui18n.so.74 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgtk-3.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgtk-3.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxml2.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxml2.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsqlite3.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsqlite3.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxslt.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxslt.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblcms2.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblcms2.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2dec.so.1.0.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2dec.so.1.0.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstapp-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstapp-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstpbutils-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstpbutils-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstaudio-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstaudio-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgsttag-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgsttag-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstgl-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstgl-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstfft-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstfft-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpdemux.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpdemux.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsoup-3.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsoup-3.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libharfbuzz-icu.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libharfbuzz-icu.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libenchant-2.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libenchant-2.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsecret-1.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsecret-1.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libtasn1.so.6
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libtasn1.so.6 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libhyphen.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libhyphen.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-server.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-server.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmanette-0.2.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmanette-0.2.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libseccomp.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libseccomp.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatomic.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatomic.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2common.so.1.0.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2common.so.1.0.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpsl.so.5
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpsl.so.5 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgssapi_krb5.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgssapi_krb5.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libnghttp2.so.14
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libnghttp2.so.14 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libevdev.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libevdev.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5.so.3
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5.so.3 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libk5crypto.so.3
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libk5crypto.so.3 using dpkg-query
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkeyutils.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkeyutils.so.1 using dpkg-query
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXau.so.6
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-render.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libthai.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmount.so.1
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmanette-0.2.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpango-1.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgmodule-2.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-shm.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstaudio-1.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjavascriptcoregtk-4.1.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcrypto.so.3
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgssapi_krb5.so.2
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrandr.so.2
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libglib-2.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libidn2.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-cursor.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsecret-1.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-bridge-2.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsoup-3.0.so.0
[gtk/stdout] Deploying shared library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlidec.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlidec.so.1 using dpkg-query
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatomic.so.1
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2common.so.1.0.2
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk-3.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstpbutils-1.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgio-2.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXi.so.6
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libselinux.so.1
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicui18n.so.74
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXext.so.6
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgudev-1.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblzma.so.5
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatspi.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxslt.so.1
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbsd.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcursor.so.1
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstfft-1.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebp.so.7
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicuuc.so.74
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpmux.so.3
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXfixes.so.3
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlicommon.so.1
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libepoxy.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/webkit2gtk-4.1/injected-bundle/libwebkit2gtkinjectedbundle.so
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libwebkit2gtk-4.1.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libwebkit2gtk-4.1.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libepoxy.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libepoxy.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libwebpmux.so.3
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libwebpmux.so.3 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libjavascriptcoregtk-4.1.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libjavascriptcoregtk-4.1.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libicui18n.so.74
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libicui18n.so.74 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libsystemd.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libsystemd.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libjpeg.so.8
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libjpeg.so.8 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libicuuc.so.74
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libicuuc.so.74 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libgtk-3.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgtk-3.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libgdk-3.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgdk-3.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libpango-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libpango-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libatk-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libatk-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libcairo.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libcairo.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libxml2.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libxml2.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libsqlite3.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libsqlite3.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libxslt.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libxslt.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/liblcms2.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/liblcms2.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libwoff2dec.so.1.0.2
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libwoff2dec.so.1.0.2 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libgcrypt.so.20
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgcrypt.so.20 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libgstallocators-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgstallocators-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libgstapp-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgstapp-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libgstbase-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgstbase-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libgstreamer-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgstreamer-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libgstpbutils-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgstpbutils-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libgstaudio-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgstaudio-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libgsttag-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgsttag-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libgstvideo-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgstvideo-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libgstgl-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgstgl-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libgstfft-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgstfft-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libwebpdemux.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libwebpdemux.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libwebp.so.7
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libwebp.so.7 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libsoup-3.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libsoup-3.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libharfbuzz-icu.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libharfbuzz-icu.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libenchant-2.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libenchant-2.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libgio-2.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgio-2.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libgmodule-2.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgmodule-2.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libgobject-2.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgobject-2.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libglib-2.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libglib-2.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libsecret-1.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libsecret-1.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libtasn1.so.6
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libtasn1.so.6 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libhyphen.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libhyphen.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libwayland-server.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libwayland-server.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libwayland-client.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libwayland-client.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libmanette-0.2.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libmanette-0.2.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libseccomp.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libseccomp.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libatomic.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libatomic.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libcap.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libcap.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/liblz4.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/liblz4.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/liblzma.so.5
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/liblzma.so.5 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libzstd.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libzstd.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libicudata.so.74
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libicudata.so.74 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libpangocairo-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libpangocairo-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libpangoft2-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libpangoft2-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libcairo-gobject.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libcairo-gobject.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libgdk_pixbuf-2.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgdk_pixbuf-2.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libXi.so.6
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXi.so.6 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libatk-bridge-2.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libatk-bridge-2.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libXfixes.so.3
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXfixes.so.3 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libxkbcommon.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libxkbcommon.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libwayland-cursor.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libwayland-cursor.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libwayland-egl.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libwayland-egl.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libXext.so.6
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXext.so.6 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libXcursor.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXcursor.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libXdamage.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXdamage.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libXcomposite.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXcomposite.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libXrandr.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXrandr.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libXinerama.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXinerama.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libthai.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libthai.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libXrender.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libXrender.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libxcb-render.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libxcb-render.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libxcb-shm.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libxcb-shm.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libpixman-1.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libpixman-1.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libwoff2common.so.1.0.2
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libwoff2common.so.1.0.2 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libunwind.so.8
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libunwind.so.8 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libdw.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libdw.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/liborc-0.4.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/liborc-0.4.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libgudev-1.0.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgudev-1.0.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libsharpyuv.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libsharpyuv.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libpsl.so.5
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libpsl.so.5 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libgssapi_krb5.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgssapi_krb5.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libnghttp2.so.14
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libnghttp2.so.14 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libmount.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libmount.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libselinux.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libselinux.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libffi.so.8
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libffi.so.8 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libpcre2-8.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libpcre2-8.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libevdev.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libevdev.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libatspi.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libatspi.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libdbus-1.so.3
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libdbus-1.so.3 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libdatrie.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libdatrie.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libelf.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libelf.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libudev.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libudev.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libunistring.so.5
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libunistring.so.5 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libidn2.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libidn2.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libkrb5.so.3
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libkrb5.so.3 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libk5crypto.so.3
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libk5crypto.so.3 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libkrb5support.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libkrb5support.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libblkid.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libblkid.so.1 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libkeyutils.so.1
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libkeyutils.so.1 using dpkg-query
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/webkit2gtk-4.1/WebKitNetworkProcess
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/webkit2gtk-4.1/WebKitWebProcess
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-bmp.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-tga.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-xbm.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-ani.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-pnm.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-svg.so
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/librsvg-2.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/librsvg-2.so.2 using dpkg-query
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-gif.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-ico.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-xpm.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-qtif.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-tiff.so
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libtiff.so.6
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libtiff.so.6 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libLerc.so.4
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libLerc.so.4 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libjbig.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libjbig.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libdeflate.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libdeflate.so.0 using dpkg-query
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-icns.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-broadway.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-cyrillic-translit.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-cedilla.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-ti-et.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-wayland.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-thai.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-ipa.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-inuktitut.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-ti-er.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-viqr.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-am-et.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-multipress.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-xim.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/printbackends/libprintbackend-file.so
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/printbackends/libprintbackend-cups.so
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libcups.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libcups.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libcolord.so.2
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libcolord.so.2 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libavahi-common.so.3
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libavahi-common.so.3 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libavahi-client.so.3
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libavahi-client.so.3 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libgnutls.so.30
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libgnutls.so.30 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libp11-kit.so.0
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libp11-kit.so.0 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libnettle.so.8
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libnettle.so.8 using dpkg-query
[gtk/stdout] Deploying shared library /lib/x86_64-linux-gnu/libhogweed.so.6
[gtk/stdout] WARNING: Could not find copyright files for file /lib/x86_64-linux-gnu/libhogweed.so.6 using dpkg-query
[gtk/stdout] Skipping deployment of blacklisted library /lib/x86_64-linux-gnu/libgmp.so.10
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgraphite2.so.3
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxkbcommon.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXinerama.so.1
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmd.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-server.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libelf.so.1
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk_pixbuf-2.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpng16.so.16
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libharfbuzz-icu.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstallocators-1.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5support.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstbase-1.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libevdev.so.2
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstreamer-1.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2dec.so.1.0.2
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstapp-1.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5.so.3
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdbus-1.so.3
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgcrypt.so.20
[gtk/stdout] Deploying dependencies for ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libzstd.so.1
[gtk/stdout]
[gtk/stdout] -- Deploying shared libraries --
[gtk/stdout] Deploying shared library /usr/lib/x86_64-linux-gnu/libgdk_pixbuf-2.0.so
[gtk/stdout] Deploying copyright files for file /usr/lib/x86_64-linux-gnu/libgdk_pixbuf-2.0.so
[gtk/stdout] Deploying dependencies for ELF file /usr/lib/x86_64-linux-gnu/libgdk_pixbuf-2.0.so
[gtk/stdout] Deploying shared library /usr/lib/x86_64-linux-gnu/libgdk_pixbuf-2.0.so.0.4200.10
[gtk/stdout] Deploying copyright files for file /usr/lib/x86_64-linux-gnu/libgdk_pixbuf-2.0.so.0.4200.10
[gtk/stdout] Deploying dependencies for ELF file /usr/lib/x86_64-linux-gnu/libgdk_pixbuf-2.0.so.0.4200.10
[gtk/stdout] Deploying shared library /usr/lib/x86_64-linux-gnu/libgdk_pixbuf-2.0.so.0
[gtk/stdout] Deploying copyright files for file /usr/lib/x86_64-linux-gnu/libgdk_pixbuf-2.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /usr/lib/x86_64-linux-gnu/libgdk_pixbuf-2.0.so.0
[gtk/stdout] Deploying shared library /usr/lib/x86_64-linux-gnu/libgobject-2.0.so.0.8000.0
[gtk/stdout] Deploying copyright files for file /usr/lib/x86_64-linux-gnu/libgobject-2.0.so.0.8000.0
[gtk/stdout] Deploying dependencies for ELF file /usr/lib/x86_64-linux-gnu/libgobject-2.0.so.0.8000.0
[gtk/stdout] Deploying shared library /usr/lib/x86_64-linux-gnu/libgobject-2.0.so.0
[gtk/stdout] Deploying copyright files for file /usr/lib/x86_64-linux-gnu/libgobject-2.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /usr/lib/x86_64-linux-gnu/libgobject-2.0.so.0
[gtk/stdout] Deploying shared library /usr/lib/x86_64-linux-gnu/libgobject-2.0.so
[gtk/stdout] Deploying copyright files for file /usr/lib/x86_64-linux-gnu/libgobject-2.0.so
[gtk/stdout] Deploying dependencies for ELF file /usr/lib/x86_64-linux-gnu/libgobject-2.0.so
[gtk/stdout] Deploying shared library /usr/lib/x86_64-linux-gnu/libgio-2.0.so.0.8000.0
[gtk/stdout] Deploying copyright files for file /usr/lib/x86_64-linux-gnu/libgio-2.0.so.0.8000.0
[gtk/stdout] Deploying dependencies for ELF file /usr/lib/x86_64-linux-gnu/libgio-2.0.so.0.8000.0
[gtk/stdout] Deploying shared library /usr/lib/x86_64-linux-gnu/libgio-2.0.so.0
[gtk/stdout] Deploying copyright files for file /usr/lib/x86_64-linux-gnu/libgio-2.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /usr/lib/x86_64-linux-gnu/libgio-2.0.so.0
[gtk/stdout] Deploying shared library /usr/lib/x86_64-linux-gnu/libgio-2.0.so
[gtk/stdout] Deploying copyright files for file /usr/lib/x86_64-linux-gnu/libgio-2.0.so
[gtk/stdout] Deploying dependencies for ELF file /usr/lib/x86_64-linux-gnu/libgio-2.0.so
[gtk/stdout] Deploying shared library /usr/lib/x86_64-linux-gnu/librsvg-2.so.2.50.0
[gtk/stdout] Deploying copyright files for file /usr/lib/x86_64-linux-gnu/librsvg-2.so.2.50.0
[gtk/stdout] Deploying dependencies for ELF file /usr/lib/x86_64-linux-gnu/librsvg-2.so.2.50.0
[gtk/stdout] Deploying shared library /usr/lib/x86_64-linux-gnu/librsvg-2.so.2
[gtk/stdout] Deploying copyright files for file /usr/lib/x86_64-linux-gnu/librsvg-2.so.2
[gtk/stdout] Deploying dependencies for ELF file /usr/lib/x86_64-linux-gnu/librsvg-2.so.2
[gtk/stdout] Deploying shared library /usr/lib/x86_64-linux-gnu/librsvg-2.so
[gtk/stdout] Deploying copyright files for file /usr/lib/x86_64-linux-gnu/librsvg-2.so
[gtk/stdout] Deploying dependencies for ELF file /usr/lib/x86_64-linux-gnu/librsvg-2.so
[gtk/stdout] Deploying shared library /usr/lib/x86_64-linux-gnu/libpango-1.0.so.0
[gtk/stdout] Deploying copyright files for file /usr/lib/x86_64-linux-gnu/libpango-1.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /usr/lib/x86_64-linux-gnu/libpango-1.0.so.0
[gtk/stdout] Deploying shared library /usr/lib/x86_64-linux-gnu/libpango-1.0.so.0.5200.1
[gtk/stdout] Deploying copyright files for file /usr/lib/x86_64-linux-gnu/libpango-1.0.so.0.5200.1
[gtk/stdout] Deploying dependencies for ELF file /usr/lib/x86_64-linux-gnu/libpango-1.0.so.0.5200.1
[gtk/stdout] Deploying shared library /usr/lib/x86_64-linux-gnu/libpango-1.0.so
[gtk/stdout] Deploying copyright files for file /usr/lib/x86_64-linux-gnu/libpango-1.0.so
[gtk/stdout] Deploying dependencies for ELF file /usr/lib/x86_64-linux-gnu/libpango-1.0.so
[gtk/stdout] Deploying shared library /usr/lib/x86_64-linux-gnu/libpangocairo-1.0.so.0
[gtk/stdout] Deploying copyright files for file /usr/lib/x86_64-linux-gnu/libpangocairo-1.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /usr/lib/x86_64-linux-gnu/libpangocairo-1.0.so.0
[gtk/stdout] Deploying shared library /usr/lib/x86_64-linux-gnu/libpangocairo-1.0.so.0.5200.1
[gtk/stdout] Deploying copyright files for file /usr/lib/x86_64-linux-gnu/libpangocairo-1.0.so.0.5200.1
[gtk/stdout] Deploying dependencies for ELF file /usr/lib/x86_64-linux-gnu/libpangocairo-1.0.so.0.5200.1
[gtk/stdout] Deploying shared library /usr/lib/x86_64-linux-gnu/libpangocairo-1.0.so
[gtk/stdout] Deploying copyright files for file /usr/lib/x86_64-linux-gnu/libpangocairo-1.0.so
[gtk/stdout] Deploying dependencies for ELF file /usr/lib/x86_64-linux-gnu/libpangocairo-1.0.so
[gtk/stdout] Deploying shared library /usr/lib/x86_64-linux-gnu/libpangoft2-1.0.so.0
[gtk/stdout] Deploying copyright files for file /usr/lib/x86_64-linux-gnu/libpangoft2-1.0.so.0
[gtk/stdout] Deploying dependencies for ELF file /usr/lib/x86_64-linux-gnu/libpangoft2-1.0.so.0
[gtk/stdout] Deploying shared library /usr/lib/x86_64-linux-gnu/libpangoft2-1.0.so.0.5200.1
[gtk/stdout] Deploying copyright files for file /usr/lib/x86_64-linux-gnu/libpangoft2-1.0.so.0.5200.1
[gtk/stdout] Deploying dependencies for ELF file /usr/lib/x86_64-linux-gnu/libpangoft2-1.0.so.0.5200.1
[gtk/stdout] Deploying shared library /usr/lib/x86_64-linux-gnu/libpangoft2-1.0.so
[gtk/stdout] Deploying copyright files for file /usr/lib/x86_64-linux-gnu/libpangoft2-1.0.so
[gtk/stdout] Deploying dependencies for ELF file /usr/lib/x86_64-linux-gnu/libpangoft2-1.0.so
[gtk/stdout]
[gtk/stdout] -- Copying files into AppDir --
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXcomposite.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcomposite.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXcursor.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcursor.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXdamage.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXdamage.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXext.so.6 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXext.so.6
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXfixes.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXfixes.so.3
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXi.so.6 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXi.so.6
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXinerama.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXinerama.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXrandr.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrandr.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libXrender.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrender.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libatk-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libatk-bridge-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-bridge-2.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libatomic.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatomic.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libatspi.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatspi.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libblkid.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libblkid.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libbrotlicommon.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlicommon.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libbrotlidec.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlidec.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libcairo-gobject.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo-gobject.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libcairo.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libcap.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcap.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libcrypto.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcrypto.so.3
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libdatrie.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdatrie.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libdbus-1.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdbus-1.so.3
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libdw.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdw.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libelf.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libelf.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libenchant-2.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libenchant-2.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libepoxy.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libepoxy.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libevdev.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libevdev.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libffi.so.8 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libffi.so.8
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgcrypt.so.20 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgcrypt.so.20
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgdk-3.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk-3.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgdk_pixbuf-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk_pixbuf-2.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgio-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgio-2.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libglib-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libglib-2.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgmodule-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgmodule-2.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgobject-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgobject-2.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgssapi_krb5.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgssapi_krb5.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstallocators-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstallocators-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstapp-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstapp-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstaudio-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstaudio-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstbase-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstbase-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstfft-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstfft-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstgl-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstgl-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstpbutils-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstpbutils-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstreamer-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstreamer-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgsttag-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgsttag-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgstvideo-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstvideo-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgtk-3.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgtk-3.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libgudev-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgudev-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libharfbuzz-icu.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libharfbuzz-icu.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libhyphen.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libhyphen.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libicudata.so.74 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicudata.so.74
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libicui18n.so.74 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicui18n.so.74
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libicuuc.so.74 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicuuc.so.74
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libidn2.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libidn2.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libjavascriptcoregtk-4.1.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjavascriptcoregtk-4.1.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libjpeg.so.8 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjpeg.so.8
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libk5crypto.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libk5crypto.so.3
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libkeyutils.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkeyutils.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libkrb5.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5.so.3
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libkrb5support.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5support.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/liblcms2.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblcms2.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/liblz4.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblz4.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/liblzma.so.5 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblzma.so.5
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libmanette-0.2.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmanette-0.2.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libmount.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmount.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libnghttp2.so.14 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libnghttp2.so.14
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/liborc-0.4.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liborc-0.4.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libpango-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpango-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libpangocairo-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangocairo-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libpangoft2-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangoft2-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libpcre2-8.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpcre2-8.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libpixman-1.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpixman-1.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libpng16.so.16 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpng16.so.16
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libpsl.so.5 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpsl.so.5
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libseccomp.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libseccomp.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libsecret-1.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsecret-1.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libselinux.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libselinux.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libsharpyuv.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsharpyuv.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libsoup-3.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsoup-3.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libsqlite3.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsqlite3.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libssl.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libssl.so.3
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libsystemd.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsystemd.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libtasn1.so.6 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libtasn1.so.6
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libthai.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libthai.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libudev.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libudev.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libunistring.so.5 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunistring.so.5
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libunwind.so.8 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunwind.so.8
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwayland-client.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-client.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwayland-cursor.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-cursor.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwayland-egl.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-egl.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwayland-server.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-server.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwebkit2gtk-4.1.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebkit2gtk-4.1.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwebp.so.7 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebp.so.7
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwebpdemux.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpdemux.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwebpmux.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpmux.so.3
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwoff2common.so.1.0.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2common.so.1.0.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libwoff2dec.so.1.0.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2dec.so.1.0.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libxcb-render.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-render.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libxcb-shm.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-shm.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libxkbcommon.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxkbcommon.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libxml2.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxml2.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libxslt.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxslt.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/../lib/libzstd.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libzstd.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcomposite.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcomposite.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcursor.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcursor.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXdamage.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXdamage.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXext.so.6 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXext.so.6
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXfixes.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXfixes.so.3
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXi.so.6 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXi.so.6
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXinerama.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXinerama.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrandr.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrandr.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrender.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrender.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-bridge-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-bridge-2.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatomic.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatomic.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatspi.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatspi.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libblkid.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libblkid.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlicommon.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlicommon.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlidec.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlidec.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbsd.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbsd.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbz2.so.1.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbz2.so.1.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo-gobject.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo-gobject.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcap.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcap.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcrypto.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcrypto.so.3
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdatrie.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdatrie.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdbus-1.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdbus-1.so.3
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdw.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdw.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libelf.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libelf.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libenchant-2.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libenchant-2.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libepoxy.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libepoxy.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libevdev.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libevdev.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libffi.so.8 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libffi.so.8
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgcrypt.so.20 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgcrypt.so.20
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk-3.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk-3.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk_pixbuf-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk_pixbuf-2.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgio-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgio-2.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libglib-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libglib-2.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgmodule-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgmodule-2.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgobject-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgobject-2.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgssapi_krb5.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgssapi_krb5.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstallocators-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstallocators-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstapp-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstapp-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstaudio-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstaudio-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstbase-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstbase-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstfft-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstfft-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstgl-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstgl-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstpbutils-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstpbutils-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstreamer-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstreamer-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgsttag-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgsttag-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstvideo-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstvideo-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgtk-3.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgtk-3.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgudev-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgudev-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libharfbuzz-icu.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libharfbuzz-icu.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libhyphen.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libhyphen.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicudata.so.74 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicudata.so.74
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicui18n.so.74 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicui18n.so.74
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicuuc.so.74 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicuuc.so.74
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libidn2.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libidn2.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjavascriptcoregtk-4.1.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjavascriptcoregtk-4.1.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjpeg.so.8 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjpeg.so.8
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libk5crypto.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libk5crypto.so.3
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkeyutils.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkeyutils.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5.so.3
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5support.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5support.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblcms2.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblcms2.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblz4.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblz4.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblzma.so.5 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblzma.so.5
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmanette-0.2.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmanette-0.2.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmd.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmd.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmount.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmount.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libnghttp2.so.14 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libnghttp2.so.14
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liborc-0.4.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liborc-0.4.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpango-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpango-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangocairo-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangocairo-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangoft2-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangoft2-1.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpcre2-8.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpcre2-8.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpixman-1.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpixman-1.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpng16.so.16 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpng16.so.16
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpsl.so.5 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpsl.so.5
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libseccomp.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libseccomp.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsecret-1.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsecret-1.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libselinux.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libselinux.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsharpyuv.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsharpyuv.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsoup-3.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsoup-3.0.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsqlite3.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsqlite3.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsystemd.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsystemd.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libtasn1.so.6 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libtasn1.so.6
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libthai.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libthai.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libudev.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libudev.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunistring.so.5 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunistring.so.5
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunwind.so.8 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunwind.so.8
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-client.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-client.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-cursor.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-cursor.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-egl.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-egl.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-server.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-server.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebp.so.7 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebp.so.7
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpdemux.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpdemux.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpmux.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpmux.so.3
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2common.so.1.0.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2common.so.1.0.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2dec.so.1.0.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2dec.so.1.0.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-render.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-render.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-shm.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-shm.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxkbcommon.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxkbcommon.so.0
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxml2.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxml2.so.2
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxslt.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxslt.so.1
[gtk/stdout] Copying file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libzstd.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libzstd.so.1
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libLerc.so.4 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libLerc.so.4
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libXau.so.6 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXau.so.6
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libXcomposite.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcomposite.so.1
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libXcursor.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcursor.so.1
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libXdamage.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXdamage.so.1
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libXdmcp.so.6 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXdmcp.so.6
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libXext.so.6 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXext.so.6
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libXfixes.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXfixes.so.3
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libXi.so.6 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXi.so.6
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libXinerama.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXinerama.so.1
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libXrandr.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrandr.so.2
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libXrender.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrender.so.1
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libatk-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-1.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libatk-bridge-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-bridge-2.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libatomic.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatomic.so.1
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libatspi.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatspi.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libavahi-client.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libavahi-client.so.3
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libavahi-common.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libavahi-common.so.3
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libblkid.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libblkid.so.1
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libbrotlicommon.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlicommon.so.1
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libbrotlidec.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlidec.so.1
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libbsd.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbsd.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libbz2.so.1.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbz2.so.1.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libcairo-gobject.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo-gobject.so.2
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libcairo.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo.so.2
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libcap.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcap.so.2
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libcolord.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcolord.so.2
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libcups.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcups.so.2
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libdatrie.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdatrie.so.1
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libdbus-1.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdbus-1.so.3
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libdeflate.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdeflate.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libdw.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdw.so.1
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libelf.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libelf.so.1
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libenchant-2.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libenchant-2.so.2
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libepoxy.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libepoxy.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libevdev.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libevdev.so.2
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libffi.so.8 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libffi.so.8
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libgcrypt.so.20 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgcrypt.so.20
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libgdk-3.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk-3.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libgdk_pixbuf-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk_pixbuf-2.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libgio-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgio-2.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libglib-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libglib-2.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libgmodule-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgmodule-2.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libgnutls.so.30 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgnutls.so.30
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libgobject-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgobject-2.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libgraphite2.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgraphite2.so.3
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libgssapi_krb5.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgssapi_krb5.so.2
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libgstallocators-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstallocators-1.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libgstapp-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstapp-1.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libgstaudio-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstaudio-1.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libgstbase-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstbase-1.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libgstfft-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstfft-1.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libgstgl-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstgl-1.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libgstpbutils-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstpbutils-1.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libgstreamer-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstreamer-1.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libgsttag-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgsttag-1.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libgstvideo-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstvideo-1.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libgtk-3.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgtk-3.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libgudev-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgudev-1.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libharfbuzz-icu.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libharfbuzz-icu.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libhogweed.so.6 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libhogweed.so.6
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libhyphen.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libhyphen.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libicudata.so.74 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicudata.so.74
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libicui18n.so.74 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicui18n.so.74
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libicuuc.so.74 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicuuc.so.74
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libidn2.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libidn2.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libjavascriptcoregtk-4.1.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjavascriptcoregtk-4.1.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libjbig.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjbig.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libjpeg.so.8 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjpeg.so.8
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libk5crypto.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libk5crypto.so.3
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libkeyutils.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkeyutils.so.1
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libkrb5.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5.so.3
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libkrb5support.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5support.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/liblcms2.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblcms2.so.2
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/liblz4.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblz4.so.1
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/liblzma.so.5 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblzma.so.5
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libmanette-0.2.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmanette-0.2.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libmd.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmd.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libmount.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmount.so.1
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libnettle.so.8 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libnettle.so.8
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libnghttp2.so.14 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libnghttp2.so.14
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/liborc-0.4.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liborc-0.4.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libp11-kit.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libp11-kit.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libpango-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpango-1.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libpangocairo-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangocairo-1.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libpangoft2-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangoft2-1.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libpcre2-8.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpcre2-8.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libpixman-1.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpixman-1.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libpng16.so.16 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpng16.so.16
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libpsl.so.5 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpsl.so.5
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/librsvg-2.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/librsvg-2.so.2
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libseccomp.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libseccomp.so.2
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libsecret-1.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsecret-1.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libselinux.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libselinux.so.1
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libsharpyuv.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsharpyuv.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libsoup-3.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsoup-3.0.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libsqlite3.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsqlite3.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libsystemd.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsystemd.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libtasn1.so.6 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libtasn1.so.6
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libthai.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libthai.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libtiff.so.6 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libtiff.so.6
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libudev.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libudev.so.1
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libunistring.so.5 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunistring.so.5
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libunwind.so.8 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunwind.so.8
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libwayland-client.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-client.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libwayland-cursor.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-cursor.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libwayland-egl.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-egl.so.1
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libwayland-server.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-server.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libwebkit2gtk-4.1.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebkit2gtk-4.1.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libwebp.so.7 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebp.so.7
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libwebpdemux.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpdemux.so.2
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libwebpmux.so.3 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpmux.so.3
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libwoff2common.so.1.0.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2common.so.1.0.2
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libwoff2dec.so.1.0.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2dec.so.1.0.2
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libxcb-render.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-render.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libxcb-shm.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-shm.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libxkbcommon.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxkbcommon.so.0
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libxml2.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxml2.so.2
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libxslt.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxslt.so.1
[gtk/stdout] Copying file /lib/x86_64-linux-gnu/libzstd.so.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libzstd.so.1
[gtk/stdout] Copying file /usr/lib/x86_64-linux-gnu/libgdk_pixbuf-2.0.so to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk_pixbuf-2.0.so
[gtk/stdout] Copying file /usr/lib/x86_64-linux-gnu/libgdk_pixbuf-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk_pixbuf-2.0.so.0
[gtk/stdout] Copying file /usr/lib/x86_64-linux-gnu/libgdk_pixbuf-2.0.so.0.4200.10 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk_pixbuf-2.0.so.0.4200.10
[gtk/stdout] Copying file /usr/lib/x86_64-linux-gnu/libgio-2.0.so to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgio-2.0.so
[gtk/stdout] Copying file /usr/lib/x86_64-linux-gnu/libgio-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgio-2.0.so.0
[gtk/stdout] Copying file /usr/lib/x86_64-linux-gnu/libgio-2.0.so.0.8000.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgio-2.0.so.0.8000.0
[gtk/stdout] Copying file /usr/lib/x86_64-linux-gnu/libgobject-2.0.so to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgobject-2.0.so
[gtk/stdout] Copying file /usr/lib/x86_64-linux-gnu/libgobject-2.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgobject-2.0.so.0
[gtk/stdout] Copying file /usr/lib/x86_64-linux-gnu/libgobject-2.0.so.0.8000.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgobject-2.0.so.0.8000.0
[gtk/stdout] Copying file /usr/lib/x86_64-linux-gnu/libpango-1.0.so to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpango-1.0.so
[gtk/stdout] Copying file /usr/lib/x86_64-linux-gnu/libpango-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpango-1.0.so.0
[gtk/stdout] Copying file /usr/lib/x86_64-linux-gnu/libpango-1.0.so.0.5200.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpango-1.0.so.0.5200.1
[gtk/stdout] Copying file /usr/lib/x86_64-linux-gnu/libpangocairo-1.0.so to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangocairo-1.0.so
[gtk/stdout] Copying file /usr/lib/x86_64-linux-gnu/libpangocairo-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangocairo-1.0.so.0
[gtk/stdout] Copying file /usr/lib/x86_64-linux-gnu/libpangocairo-1.0.so.0.5200.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangocairo-1.0.so.0.5200.1
[gtk/stdout] Copying file /usr/lib/x86_64-linux-gnu/libpangoft2-1.0.so to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangoft2-1.0.so
[gtk/stdout] Copying file /usr/lib/x86_64-linux-gnu/libpangoft2-1.0.so.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangoft2-1.0.so.0
[gtk/stdout] Copying file /usr/lib/x86_64-linux-gnu/libpangoft2-1.0.so.0.5200.1 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangoft2-1.0.so.0.5200.1
[gtk/stdout] Copying file /usr/lib/x86_64-linux-gnu/librsvg-2.so to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/librsvg-2.so
[gtk/stdout] Copying file /usr/lib/x86_64-linux-gnu/librsvg-2.so.2 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/librsvg-2.so.2
[gtk/stdout] Copying file /usr/lib/x86_64-linux-gnu/librsvg-2.so.2.50.0 to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/librsvg-2.so.2.50.0
[gtk/stdout] Copying file /usr/share/doc/libgdk-pixbuf-2.0-0/copyright to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/doc/libgdk-pixbuf-2.0-0/copyright
[gtk/stdout] Copying file /usr/share/doc/libgdk-pixbuf-2.0-dev/copyright to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/doc/libgdk-pixbuf-2.0-dev/copyright
[gtk/stdout] Copying file /usr/share/doc/libglib2.0-0t64/copyright to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/doc/libglib2.0-0t64/copyright
[gtk/stdout] Copying file /usr/share/doc/libglib2.0-dev/copyright to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/doc/libglib2.0-dev/copyright
[gtk/stdout] Copying file /usr/share/doc/libpango-1.0-0/copyright to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/doc/libpango-1.0-0/copyright
[gtk/stdout] Copying file /usr/share/doc/libpango1.0-dev/copyright to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/doc/libpango1.0-dev/copyright
[gtk/stdout] Copying file /usr/share/doc/libpangocairo-1.0-0/copyright to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/doc/libpangocairo-1.0-0/copyright
[gtk/stdout] Copying file /usr/share/doc/libpangoft2-1.0-0/copyright to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/doc/libpangoft2-1.0-0/copyright
[gtk/stdout] Copying file /usr/share/doc/librsvg2-2/copyright to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/doc/librsvg2-2/copyright
[gtk/stdout] Copying file /usr/share/doc/librsvg2-dev/copyright to /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/doc/librsvg2-dev/copyright
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libLerc.so.4
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXau.so.6: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcomposite.so.1: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcursor.so.1: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXdamage.so.1: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXdmcp.so.6: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXext.so.6: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXfixes.so.3: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXi.so.6: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXinerama.so.1: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrandr.so.2: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrender.so.1: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-1.0.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-bridge-2.0.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatomic.so.1: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatspi.so.0: rpath starts with $
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libavahi-client.so.3
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libavahi-common.so.3
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libblkid.so.1: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlicommon.so.1: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlidec.so.1: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbsd.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbz2.so.1.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo-gobject.so.2: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo.so.2: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcap.so.2: rpath starts with $
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcolord.so.2
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcrypto.so.3: rpath starts with $
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcups.so.2
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdatrie.so.1: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdbus-1.so.3: rpath starts with $
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdeflate.so.0
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdw.so.1: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libelf.so.1: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libenchant-2.so.2: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libepoxy.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libevdev.so.2: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libffi.so.8: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgcrypt.so.20: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk-3.so.0: rpath starts with $
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk_pixbuf-2.0.so
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk_pixbuf-2.0.so.0: rpath starts with $
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk_pixbuf-2.0.so.0.4200.10
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgio-2.0.so
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgio-2.0.so.0: rpath starts with $
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgio-2.0.so.0.8000.0
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libglib-2.0.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgmodule-2.0.so.0: rpath starts with $
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgnutls.so.30
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundl[gtk/stderr] chmod: cannot access '/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib64': No such file or directory
e/appimage/OllamaGUI.AppDir/usr/lib/libgobject-2.0.so
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgobject-2.0.so.0: rpath starts with $
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgobject-2.0.so.0.8000.0
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgraphite2.so.3: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgssapi_krb5.so.2: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstallocators-1.0.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstapp-1.0.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstaudio-1.0.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstbase-1.0.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstfft-1.0.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstgl-1.0.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstpbutils-1.0.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstreamer-1.0.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgsttag-1.0.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstvideo-1.0.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgtk-3.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgudev-1.0.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libharfbuzz-icu.so.0: rpath starts with $
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libhogweed.so.6
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libhyphen.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicudata.so.74: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicui18n.so.74: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicuuc.so.74: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libidn2.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjavascriptcoregtk-4.1.so.0: rpath starts with $
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjbig.so.0
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjpeg.so.8: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libk5crypto.so.3: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkeyutils.so.1: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5.so.3: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5support.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblcms2.so.2: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblz4.so.1: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblzma.so.5: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmanette-0.2.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmd.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmount.so.1: rpath starts with $
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libnettle.so.8
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libnghttp2.so.14: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liborc-0.4.so.0: rpath starts with $
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libp11-kit.so.0
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpango-1.0.so
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpango-1.0.so.0: rpath starts with $
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpango-1.0.so.0.5200.1
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangocairo-1.0.so
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangocairo-1.0.so.0: rpath starts with $
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangocairo-1.0.so.0.5200.1
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangoft2-1.0.so
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangoft2-1.0.so.0: rpath starts with $
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangoft2-1.0.so.0.5200.1
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpcre2-8.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpixman-1.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpng16.so.16: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpsl.so.5: rpath starts with $
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/librsvg-2.so
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/librsvg-2.so.2
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/librsvg-2.so.2.50.0
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libseccomp.so.2: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsecret-1.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libselinux.so.1: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsharpyuv.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsoup-3.0.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsqlite3.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libssl.so.3: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsystemd.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libtasn1.so.6: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libthai.so.0: rpath starts with $
[gtk/stdout] Calling strip on library /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libtiff.so.6
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libudev.so.1: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunistring.so.5: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunwind.so.8: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-client.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-cursor.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-egl.so.1: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-server.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebkit2gtk-4.1.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebp.so.7: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpdemux.so.2: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpmux.so.3: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2common.so.1.0.2: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2dec.so.1.0.2: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-render.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-shm.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxkbcommon.so.0: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxml2.so.2: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxslt.so.1: rpath starts with $
[gtk/stdout] WARNING: Not calling strip on binary /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libzstd.so.1: rpath starts with $
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/bin/app to $ORIGIN/../lib
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libLerc.so.4 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXau.so.6 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcomposite.so.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXcursor.so.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXdamage.so.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXdmcp.so.6 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXext.so.6 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXfixes.so.3 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXi.so.6 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXinerama.so.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrandr.so.2 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libXrender.so.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-1.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatk-bridge-2.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatomic.so.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libatspi.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libavahi-client.so.3 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libavahi-common.so.3 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libblkid.so.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlicommon.so.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbrotlidec.so.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbsd.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libbz2.so.1.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo-gobject.so.2 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcairo.so.2 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcap.so.2 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcolord.so.2 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcrypto.so.3 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libcups.so.2 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdatrie.so.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdbus-1.so.3 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdeflate.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libdw.so.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libelf.so.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libenchant-2.so.2 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libepoxy.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libevdev.so.2 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libffi.so.8 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgcrypt.so.20 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk-3.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk_pixbuf-2.0.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk_pixbuf-2.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgdk_pixbuf-2.0.so.0.4200.10 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgio-2.0.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgio-2.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgio-2.0.so.0.8000.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libglib-2.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgmodule-2.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgnutls.so.30 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgobject-2.0.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgobject-2.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgobject-2.0.so.0.8000.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgraphite2.so.3 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgssapi_krb5.so.2 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstallocators-1.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstapp-1.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstaudio-1.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstbase-1.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstfft-1.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstgl-1.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstpbutils-1.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstreamer-1.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgsttag-1.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgstvideo-1.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgtk-3.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libgudev-1.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libharfbuzz-icu.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libhogweed.so.6 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libhyphen.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicudata.so.74 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicui18n.so.74 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libicuuc.so.74 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libidn2.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjavascriptcoregtk-4.1.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjbig.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libjpeg.so.8 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libk5crypto.so.3 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkeyutils.so.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5.so.3 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libkrb5support.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblcms2.so.2 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblz4.so.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liblzma.so.5 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmanette-0.2.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmd.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libmount.so.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libnettle.so.8 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libnghttp2.so.14 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/liborc-0.4.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libp11-kit.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpango-1.0.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpango-1.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpango-1.0.so.0.5200.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangocairo-1.0.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangocairo-1.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangocairo-1.0.so.0.5200.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangoft2-1.0.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangoft2-1.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpangoft2-1.0.so.0.5200.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpcre2-8.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpixman-1.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpng16.so.16 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libpsl.so.5 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/librsvg-2.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/librsvg-2.so.2 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/librsvg-2.so.2.50.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libseccomp.so.2 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsecret-1.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libselinux.so.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsharpyuv.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsoup-3.0.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsqlite3.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libssl.so.3 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libsystemd.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libtasn1.so.6 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libthai.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libtiff.so.6 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libudev.so.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunistring.so.5 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libunwind.so.8 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-client.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-cursor.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-egl.so.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwayland-server.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebkit2gtk-4.1.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebp.so.7 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpdemux.so.2 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwebpmux.so.3 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2common.so.1.0.2 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libwoff2dec.so.1.0.2 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-render.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxcb-shm.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxkbcommon.so.0 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxml2.so.2 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libxslt.so.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/libzstd.so.1 to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-ani.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-bmp.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-gif.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-icns.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-ico.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-pnm.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-qtif.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-svg.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-tga.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-tiff.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-xbm.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gdk-pixbuf-2.0/2.10.0/loaders/libpixbufloader-xpm.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-am-et.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-broadway.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-cedilla.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-cyrillic-translit.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-inuktitut.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-ipa.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-multipress.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-thai.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-ti-er.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-ti-et.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-viqr.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-wayland.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/immodules/im-xim.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/printbackends/libprintbackend-cups.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/gtk-3.0/3.0.0/printbackends/libprintbackend-file.so to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/webkit2gtk-4.1/WebKitNetworkProcess to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/webkit2gtk-4.1/WebKitWebProcess to $ORIGIN
[gtk/stdout] Setting rpath in ELF file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/lib/x86_64-linux-gnu/webkit2gtk-4.1/injected-bundle/libwebkit2gtkinjectedbundle.so to $ORIGIN
[gtk/stdout]
[gtk/stdout] -- Copying files into AppDir --
[gtk/stdout] WARNING: Running in plugin mode, exiting
[gtk/stdout] Manually setting rpath for GTK modules
-- Copying files into AppDir --
-- Deploying files into AppDir root directory --
WARNING: No desktop file specified, using first desktop file found: /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/applications/OllamaGUI.desktop
Deploying files to AppDir root using desktop file: /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/applications/OllamaGUI.desktop
Deploying desktop file to AppDir root: /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/applications/OllamaGUI.desktop
Creating symlink for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/applications/OllamaGUI.desktop in/as /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir
Deploying icon to AppDir root: /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/icons/hicolor/128x128/apps/app.png
Creating symlink for file /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir/usr/share/icons/hicolor/128x128/apps/app.png in/as /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir
WARNING: Existing AppRun detected, skipping deployment of symlink
-- Running output plugin: appimage --
[appimage/stdout] Found appimagetool: /tmp/appimage_extracted_5a27dadc81a3abf452534fdbee9c58ee/plugins/linuxdeploy-plugin-appimage/usr/bin/appimagetool
[appimage/stderr] Warning: please use $LDAI_OUTPUT instead of $OUTPUT
[appimage/stderr] Running command: /tmp/appimage_extracted_5a27dadc81a3abf452534fdbee9c58ee/plugins/linuxdeploy-plugin-appimage/usr/bin/appimagetool "/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir" "/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI_0.1.3_amd64.AppImage"
[appimage/stderr]
[appimage/stdout]
[appimage/stderr] appimagetool, continuous build (commit 5735cc5), build <local dev build> built on 2023-03-08 22:52:04 UTC
[appimage/stderr] Using architecture x86_64
[appimage/stderr] WARNING: AppStream upstream metadata is missing, please consider creating it
[appimage/stderr]          in usr/share/metainfo/OllamaGUI.appdata.xml
[appimage/stderr]          Please see https://www.freedesktop.org/software/appstream/docs/chap-Quickstart.html#sect-Quickstart-DesktopApps
[appimage/stderr]          for more information or use the generator at http://output.jsbin.com/qoqukof.
[appimage/stderr] Generating squashfs...
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stdout] Parallel mksquashfs: Using 4 processors
[appimage/stdout] Creating 4.0 filesystem on /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI_0.1.3_amd64.AppImage, block size 131072.
[appimage/stdout] 
[appimage/stdout] [=============================================================-] 2142/2142 100%[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_access
[appimage/stderr]
[appimage/stderr] Unrecognised xattr prefix system.posix_acl_default
[appimage/stdout]
[appimage/stdout] Exportable Squashfs 4.0 filesystem, gzip compressed, data block size 131072
[appimage/stdout] 	compressed data, compressed metadata, compressed fragments,
[appimage/stdout] 	compressed xattrs, compressed ids
[appimage/stdout] 	duplicates are removed
[appimage/stdout] Filesystem size 90538.40 Kbytes (88.42 Mbytes)
[appimage/stdout] 	35.57% of uncompressed filesystem size (254564.61 Kbytes)
[appimage/stdout] Inode table size 8850 bytes (8.64 Kbytes)
[appimage/stdout] 	45.39% of uncompressed inode table size (19496 bytes)
[appimage/stdout] Directory table size 3637 bytes (3.55 Kbytes)
[appimage/stdout] 	42.65% of uncompressed directory table size (8528 bytes)
[appimage/stdout] Number of duplicate files found 21
[appimage/stdout] Number of inodes 309
[appimage/stdout] Number of files 226
[appimage/stdout] Number of fragments 39
[appimage/stdout] Number of symbolic links  30
[appimage/stdout] Number of device nodes 0
[appimage/stdout] Number of fifo nodes 0
[appimage/stdout] Number of socket nodes 0
[appimage/stdout] Number of directories 53
[appimage/stdout] Number of ids (unique uids + gids) 1
[appimage/stdout] Number of uids 1
[appimage/stdout] 	root (0)
[appimage/stdout] Number of gids 1
[appimage/stdout] 	root (0)
[appimage/stderr] Embedding ELF...
[appimage/stderr] Marking the AppImage as executable...
[appimage/stderr] Embedding MD5 digest
[appimage/stdout] /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI.AppDir should be packaged as /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI_0.1.3_amd64.AppImage
[appimage/stderr] Success
[appimage/stderr]
[appimage/stderr] Please consider submitting your AppImage to AppImageHub, the crowd-sourced
[appimage/stderr] central directory of available AppImages, by opening a pull request
[appimage/stderr] at https://github.com/AppImage/appimage.github.io
    Finished [tauri_bundler::bundle] 3 bundles at:
        /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/deb/OllamaGUI_0.1.3_amd64.deb
        /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/rpm/OllamaGUI-0.1.3-1.x86_64.rpm
        /home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI_0.1.3_amd64.AppImage
Looking for artifacts in:
/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/deb/OllamaGUI_0.1.3_amd64.deb
/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/rpm/OllamaGUI-0.1.3-1.x86_64.rpm
/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI_0.1.3_amd64.AppImage
/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI_0.1.3_amd64.AppImage.sig
/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI_0.1.3_amd64.AppImage.tar.gz
/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI_0.1.3_amd64.AppImage.tar.gz.sig
/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/deb/ollama-gui_0.1.3_amd64.deb
/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/rpm/ollama-gui-0.1.3-1.x86_64.rpm
/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/ollama-gui_0.1.3_amd64.AppImage
/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/ollama-gui_0.1.3_amd64.AppImage.sig
/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/ollama-gui_0.1.3_amd64.AppImage.tar.gz
/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/ollama-gui_0.1.3_amd64.AppImage.tar.gz.sig
Found artifacts:
/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/deb/OllamaGUI_0.1.3_amd64.deb
/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/rpm/OllamaGUI-0.1.3-1.x86_64.rpm
/home/runner/work/OllamaGUI/OllamaGUI/src-tauri/target/release/bundle/appimage/OllamaGUI_0.1.3_amd64.AppImage
Couldn't find release with tag v0.1.3. Creating one.
Error: Resource not accessible by integration - https://docs.github.com/rest/releases/releases#create-a-release
