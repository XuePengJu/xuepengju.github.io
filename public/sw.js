/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","cbef203a82133d5a0407f90bda89d542"],["/about/index.html","7dc293b12e349fe8e19bba504c1be413"],["/archives/2020/07/index.html","ae08352bc839538b078e68a447323ad2"],["/archives/2020/08/index.html","db11484c78530f527af8e469a1224fd8"],["/archives/2020/index.html","f138a4a65c50a1d88b53e798e00af3d4"],["/archives/2021/02/index.html","e40124d210e6bf726a3fb2a5b0b606a3"],["/archives/2021/03/index.html","8492750a074053e5fe8e062966651415"],["/archives/2021/05/index.html","1e6d312af583dfd796aec8fa3583570f"],["/archives/2021/11/index.html","6792629d8d4c97809af283ec6882d66f"],["/archives/2021/12/index.html","c6c39216772595582f18287acb1225ba"],["/archives/2021/12/page/2/index.html","117f40f5117da77198deb50ed7dc8d68"],["/archives/2021/index.html","7886786781240e63a63274bc30ae7a97"],["/archives/2021/page/2/index.html","5f0f680535c4074ff282fbb00f14ee18"],["/archives/2021/page/3/index.html","2334ebc6cc6e0dd542235c03815a0ba3"],["/archives/2022/01/index.html","10c288197183163d53a1471d8873478a"],["/archives/2022/01/page/2/index.html","b295a3c9191cf7a6cf83f1dbc8372f74"],["/archives/2022/02/index.html","2ae213cc8c5dd45bc3e86912647ae7e0"],["/archives/2022/index.html","b2e9e5f0e8327292708de4d3550e5ae1"],["/archives/2022/page/2/index.html","e2a946c5c9afdf49e8ffd52819776199"],["/archives/index.html","c4d618972b4d2c89dbc0eb60e39eb61b"],["/archives/page/2/index.html","a822161ea84206818a93c53f03642e56"],["/archives/page/3/index.html","73ae9159fb6ca89bb01195d7d973482c"],["/archives/page/4/index.html","55dade7780ef606d2420ff3a65f652ba"],["/archives/page/5/index.html","69100879d2d2192b047c2d1d5a35baef"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","bef29f0ecdf387a57db092c763e59884"],["/categories/Appium/index.html","0aebb0c99ef92fdd23030c5b2d846351"],["/categories/Charles/index.html","596c39db80727b40b02a794694a4786f"],["/categories/Hexo/index.html","9e9b5dd9313aa2e26a379d68b7250a51"],["/categories/MySQL/index.html","5f21b8df17a9bb6f335a15173d5f9838"],["/categories/Python自动化/index.html","29cc123f0b7c70cc65c9930e108486c4"],["/categories/Shell脚本/index.html","a7a231d8eb05d2c781920c997cd889df"],["/categories/index.html","5cb7899dfda417cec7aaea15e601fa9f"],["/categories/postman/index.html","9ad0f15582caca1e52f68635b35642b7"],["/categories/postman/page/2/index.html","2a0d6b00780d0e1d9b30b62480155a92"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","ee1e75a4d04c23d11acf7a53618246cd"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/blog/postman/15/015-01.png","5d5eef8d7373ee9a2fd8fa31044afcd9"],["/img/blog/postman/15/015-02.png","74b2783a2b3fa9ce877147c8a24df58b"],["/img/blog/postman/15/015-03.png","bd1123c853618aa0d722d2f6cc8fe903"],["/img/blog/postman/15/015-04.png","7a81600fc90dcf67ee1e53b56bab74d8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","708a68dca193b988c8cf168b58b4d3b3"],["/index.html","803952cf834c3d838e344090fa5ac135"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","fa764f0d36b99847d2ded107cd5498cf"],["/music/index.html","a4a7c9e3b5ba9f0affa07af92e748b78"],["/page/2/index.html","cefc2e4a027fb53765915ded8e788778"],["/page/3/index.html","622e6326f3415c3349e54e5de048230b"],["/page/4/index.html","1a8ef85d9b364c097634fdaf245a0929"],["/page/5/index.html","46b1c5f49966485377c2b90ec9936feb"],["/photo/index.html","c5049d98525023616bd4ef562dbc736f"],["/posts/2173e2a4/index.html","46244bf829bd2a070f8df0310e92f9d6"],["/posts/2ab40ef8/index.html","6ba5faed3bc785422b1098a5adb484b8"],["/posts/30fa304c/index.html","10c5045492811bfa857de8dce0239aff"],["/posts/3447541d/index.html","e5d9a430113fffbdc7d25d0af9564ff3"],["/posts/3447554d/index.html","d56a9095b070fdbe56fb4c1513562bcd"],["/posts/344e3c5b/index.html","8bf1edb4b4c740fc65349483181cba0b"],["/posts/3457ed69/index.html","5d7974d265fed0bcc4aa48dfcb76f251"],["/posts/39cb083c/index.html","9fac5b74b0a3c8ddb64f9bd145b60886"],["/posts/3ba53770/index.html","f9c7df1bdecb9bb590ca9acf2a06c5bb"],["/posts/3bd3916a/index.html","2cff0632ff8de192ef58ae8ec36ae334"],["/posts/3e4105ad/index.html","f3d926b65c8a60fc28bf4d86bc56f1ee"],["/posts/42f034cf/index.html","816fab7be83f3e499416f4113e36a275"],["/posts/50a2b841/index.html","a686d3a2fa97642ec157851d9b6cb841"],["/posts/54eecc7d/index.html","bfce0d30c0550906a282416bf6e65980"],["/posts/5a17eb30/index.html","b6a0c495ef33506f6265a9bb75e387d4"],["/posts/6172e27e/index.html","127e769523159e4bb0c48a4b63af8b74"],["/posts/66841aa6/index.html","55ae937a81cc5198bc39ac3458230937"],["/posts/689fc75c/index.html","2152c7d8619a07c99ceff6e57486fb66"],["/posts/7de15477/index.html","1a84dbd910ba1005997fab6afb8febb5"],["/posts/8a00d2ea/index.html","a9a28d121f7147014e484c6fb5263c45"],["/posts/8aa14a73/index.html","a77a9925b56dbe1f593ac01c2568b85e"],["/posts/96032b58/index.html","a9043c9cd863982f2b896a9fe76393df"],["/posts/9656df9f/index.html","6bc97e5453852d2293e7f1e7f1f80cce"],["/posts/99817e93/index.html","922fb445bc2a312d9fa0ccf2b7f5d5ab"],["/posts/a3886b70/index.html","ab240c36acea778fd77613381db25bde"],["/posts/a42e3f6d/index.html","698ec2fe04dd60b299ca4971115442b2"],["/posts/a9438874/index.html","5e725a235fb188c45201aa11e5a87f3b"],["/posts/adb093cd/index.html","838b8206697ff5f6a7d21d3a5bb48fda"],["/posts/b4b3bf4e/index.html","cc47abd4e58d7488ee459eda4c571b65"],["/posts/b8685e49/index.html","70b78f212b79022bb4804bf36dc98eb6"],["/posts/baaef441/index.html","4d0a7c6c9047be31cafc1b277df4bd16"],["/posts/bbd06fa5/index.html","fbe28f34a4dd6e2d8f957484c4157e01"],["/posts/be476180/index.html","be572519d15e1164838fc1186211ede6"],["/posts/c4b6dbb9/index.html","9e0c75e70ef28a844725120dba9149b2"],["/posts/c98d9940/index.html","ada62a9d8dfe9523ef5335ac15270728"],["/posts/d2331223/index.html","115ad163fd02095a32a1f8d84165708f"],["/posts/d5268b29/index.html","ce27f687177d823d9e17ecddfbdac887"],["/posts/d7719dab/index.html","b51dcdf7c301ebf694916e339f63a220"],["/posts/dcc42dc3/index.html","6b83df24a61727963e09bdeaf24ab02c"],["/posts/de4de369/index.html","bd6069b2711d776a42717dd23b2f752c"],["/posts/ea42950b/index.html","b310e2b31dcd8e079e9cab3684643a1c"],["/posts/f3908263/index.html","90d1c75dcd544a66babe08e16b73f0d9"],["/posts/f5e730b6/index.html","c78b8485fb6fa2616f9c6ce56ce9e2cf"],["/posts/f6c5d65f/index.html","416494675794bdb9ae135a4b438f86ad"],["/posts/f84657b8/index.html","128c2060f42a8f8bc8e35a1bfac3b668"],["/posts/undefined/index.html","5392fc0873875b3ebf73bec52dbc578d"],["/shuoshuo/index.html","4f6337b2d03d6510170e74f1a6c04ddc"],["/sw-register.js","6edb34105cefad703e650bb9c5ef006e"],["/tags/API/index.html","936368644d3b3f5dafaca9dd4b6b209c"],["/tags/Appium/index.html","e3ff26850008b69a68b9525f7c2fd1e6"],["/tags/Charles/index.html","9dfc31bd95f8b379aa59a2c839f2e39b"],["/tags/FLAG/index.html","b75c818142dabc2f980ae869ee28df81"],["/tags/Hexo/index.html","a0df834d6f3918358d96273fcfb79b52"],["/tags/MQ/index.html","ea3cf5514682467a31c61889176441bb"],["/tags/MySQL/index.html","85cd679a6fe0e0e0254faa49d0c1586f"],["/tags/Python自动化/index.html","76d3340ec700efc5a2e60c81b288b1d8"],["/tags/Shell脚本/index.html","adbc4cd6ae7cf5e6e9bf0e4f9d9f671a"],["/tags/index.html","f8e12b2401e537c9976577500307c258"],["/tags/postman/index.html","12896e215812157716a60b67f6e0a694"],["/tags/postman/page/2/index.html","930d2da620e2ca87b8cf12bcd5fdb0d0"],["/tags/博客/index.html","b49f45c396c8af4b5f7e7150e620f01b"],["/tags/自动化测试/index.html","c685efcd438f183dfafaa5ba85ac5bf4"],["/video/index.html","b234a0da6e99c00c9f19c8e081832286"],["/风景/index.html","8308d2d8822d2f3e4a0670276a490c16"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
