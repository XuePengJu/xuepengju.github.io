/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2967dc3ec199a31d61adcfc8259b291a"],["/about/index.html","87a607ca3cca7ebfb0a1e942466900e4"],["/archives/2020/07/index.html","b36253c51466ad603d23f8e3ec52089a"],["/archives/2020/08/index.html","cdebbce846120f5b1a0ae9ef886f6a8f"],["/archives/2020/index.html","908e120fcbf39df2857e7d9265545fe9"],["/archives/2021/02/index.html","4edefa8dbf2f5727ab1faa30d534a25a"],["/archives/2021/03/index.html","1731df30c5d2379d3fc504235e9c0a89"],["/archives/2021/05/index.html","4c6657882cf180a9f8bc70c33931c199"],["/archives/2021/11/index.html","579195e83342cd7c8774f1bd6e01d674"],["/archives/2021/12/index.html","e4f4e9159f24c5b8e558472dd17f7aa6"],["/archives/2021/12/page/2/index.html","e8981e0f1828f7846dd15ed50104e72c"],["/archives/2021/index.html","0cf225d98c94763035d582da7b35cab5"],["/archives/2021/page/2/index.html","7f1cd3e08ae14bf9854801fa4d9d9a7f"],["/archives/2021/page/3/index.html","5fb7ecb34fb7236080a8892fdf259f0a"],["/archives/2022/01/index.html","1edea36621fccd3f789ee503b5ec8f28"],["/archives/2022/01/page/2/index.html","420707dfcbdf142daf107c05811ebf84"],["/archives/2022/02/index.html","904547db966cf1049dba4fd92cc21595"],["/archives/2022/index.html","f8e2ec17cd1e586e5a28894605a85756"],["/archives/2022/page/2/index.html","f5f1464a358e5bc9df0ac84f0fe9c6ed"],["/archives/index.html","0fa66dd83ca2271f7b6987072fa00e74"],["/archives/page/2/index.html","058f5aef7e11a3bf009ce3bf49e2d8e3"],["/archives/page/3/index.html","76b545d27a26dd7543c11751da721dc2"],["/archives/page/4/index.html","9e640b1e1e475d5fb47d8855513f215f"],["/archives/page/5/index.html","7286dfa781afbaaefd69e02810c4e565"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/bbs/index.html","9c1b5f6acc97629ae3a440f445304d2a"],["/categories/Appium/index.html","8957e5f91c0f4566c1ef4f838fe86731"],["/categories/Charles/index.html","9a6f1e8cf099b35fc33729a4d3591da3"],["/categories/Hexo/index.html","66770ed96a88b69943681017099eea24"],["/categories/MySQL/index.html","d7045433578a2ab61a9adfb131e5caf5"],["/categories/Python自动化/index.html","1230ddf07a7107f0eaeac88b5643607a"],["/categories/Shell脚本/index.html","bb19cf83927aba41dadfb3d703840247"],["/categories/index.html","4537323c57d7edf74d64d238d7b6a7be"],["/categories/postman/index.html","45e379c4b2f56a6cdc6c38e6c4fa7a29"],["/categories/postman/page/2/index.html","f9d0faee0b00ae3ffd29ddec1858628d"],["/css/VolantisTags.css","12843f821bd9b3cef9766894247cfec4"],["/css/botui-theme-default.css","b3cd9f0f253c229ab91690d9dfa3deea"],["/css/botui.min.css","82e143779bd9e0957ef67d9172c8b18d"],["/css/cur.css","82dc4497aa0d9051e76c280bf403d833"],["/css/fontAnimation.css","e438cbdce5ff14ae374d19c1e13d491b"],["/css/iconfont.css","a0a72c4490f747df6aacc7f10393241d"],["/css/index.css","91517ce87bcf0795e38e38fef1b28da8"],["/css/shuoshuo.css","b88f102b045c8505dcdedec18cbec7b4"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/volantis.css","f3aca4b4401e9195be5aead62e658065"],["/css/weather-plugin.css","b8ba7e50031bf42daf67b5946a505b05"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/alipay.jpg","ee1e75a4d04c23d11acf7a53618246cd"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/banner/4.jpg","bbb7c6e21eb3e2349bb74de245cd5165"],["/img/banner/7.jpg","bde0ef91c662ba3663c19dc4df46e4b8"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/comment_bg.gif","f313be601f776ff58e22d89c29f49c79"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/loading1.gif","3f21b4ceff2c6de89dd8d80d4178c1d1"],["/img/postman_down01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/talk.gif","f87089028282607c90e25e7de91266e0"],["/img/valine_bg.png","27c5fdfc445c8c3d00d46206d3852fa6"],["/img/wechat.png","708a68dca193b988c8cf168b58b4d3b3"],["/index.html","8df26628480706c247424b09a59f3fbf"],["/js/VolantisTags.js","185adbdefb591a73833df4b788e1d6ef"],["/js/botui.js","8b886514e19ac87e635dcada4f5fec2e"],["/js/main.js","cec5bf97482a26159b5f2b6aaef1f908"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/calendar.js","75a3d1a99ff2627894f550272defa5ce"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/fish.js","295e17b52f5c795ad5dd579d811cdb4b"],["/js/third-party/languages.js","1cad45b801777e910a5ca1120238a377"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/third-party/snow.js","9229efbff74f8f45db54913b9b7f852b"],["/js/third-party/star.js","2f52aac57b49e51f30cb5e52c708e1f5"],["/js/third-party/weather-config.js","989a06e4e393a664606564224afc45fe"],["/js/third-party/weather-plugin.js","e8fa2b39bc2fa4db22088f41cbf2d6a4"],["/js/tw_cn.js","0176913a28754a766910352489a24a69"],["/js/utils.js","ed14620aa57998a9d3f887c1989f5365"],["/js/volantis.js","176cc4b7e4b28ae27e5faa4d28159966"],["/link/index.html","9c053f17d08386aa7a002df009c8b1b0"],["/music/index.html","e3cc045ceda61544ce63f120d3856939"],["/page/2/index.html","f6d24163749b447409bd9678d962f249"],["/page/3/index.html","51b364cbdb5b80aeffa44e32b7db6792"],["/page/4/index.html","26444a060b8da9327bb15a195b50e71a"],["/page/5/index.html","9b0ebc67f99a317212dd526ec10b982c"],["/photo/index.html","418638d7604646e227b4aec02e8e9de2"],["/posts/2173e2a4/index.html","cd4f494ae409e36f0f7b92156efdb4ab"],["/posts/2ab40ef8/index.html","6864b434786c4ee02402f4a6e3676aab"],["/posts/30fa304c/index.html","b5722dbb4889eee1947927ffb18ea7fb"],["/posts/3447541d/index.html","0c5bd4faef764f6c35319905ada8ac53"],["/posts/3447554d/index.html","6bf24aa5d97cffe899748de7aff55f7e"],["/posts/344e3c5b/index.html","5784d1f62ab7d3896303ae51a244cfb8"],["/posts/3457ed69/index.html","daa6c19cd160ad56c91ebfc07b9523a6"],["/posts/39cb083c/index.html","92032dc0885da078ccf0132a30fa0749"],["/posts/3ba53770/index.html","23e0198de937cf3866ebe39a6f053319"],["/posts/3bd3916a/index.html","64885b2862211f6ea7ad51cb068261bd"],["/posts/3e4105ad/index.html","2a5b37d7d17957387aba86f0b1ba92d0"],["/posts/42f034cf/index.html","a9f8e8f76c3c3b1777f10fac2cb90989"],["/posts/50a2b841/index.html","96974a50a7520dbd35f9139ffb1e0721"],["/posts/54eecc7d/index.html","596f425e3488fdfd3f332c7bf3b6ecc6"],["/posts/5a17eb30/index.html","a13a270dae9e9e07a469fefd5bf3780f"],["/posts/66841aa6/index.html","6c4ef9efa8b31cf975d0074819526bfa"],["/posts/689fc75c/index.html","60a98725b53dec43c0386387a64bebb3"],["/posts/7de15477/index.html","c4d43f1efa3d5db2b698032ccc384876"],["/posts/8a00d2ea/index.html","4de1583a3452d78ce7ebfa67a36dafc3"],["/posts/8aa14a73/index.html","5999affc998f3520e3f8054d689ff9fd"],["/posts/96032b58/index.html","30d074d7ec447110c46e49bf071e458b"],["/posts/9656df9f/index.html","aa742616a25e0d04ab00f520c44d3c05"],["/posts/99817e93/index.html","087c8d3bf5c8916173fcac31711d75b5"],["/posts/a3886b70/index.html","4ed769cb8bbd214c3bfc5c99f6f880cb"],["/posts/a42e3f6d/index.html","b57cd78b6626c37f93f2126ed0fcf8cb"],["/posts/a9438874/index.html","50bf4e1a039d083791057716163c6661"],["/posts/adb093cd/index.html","f0752d565336cba6178b278780d8d07d"],["/posts/b4b3bf4e/index.html","362029bd3bfcb89a7171c9e1e3bd11f5"],["/posts/b8685e49/index.html","6bed685ab1a4bb8959ab2a4f9b09a2a4"],["/posts/baaef441/index.html","efc4cf3e528d679aa550845056685b1c"],["/posts/bbd06fa5/index.html","d5daa02c8544d0ba17f5229f40070453"],["/posts/be476180/index.html","ccccd871b0b31954ff027e98f92edda3"],["/posts/c4b6dbb9/index.html","da5407ff561a946d6abbde0f909db3fb"],["/posts/c98d9940/index.html","e82c816673e0ab957ab309620e2c9842"],["/posts/d2331223/index.html","e261f60330aec529350714cca7242845"],["/posts/d5268b29/index.html","aedd39eae5eee6d21bf5eab4d08c4d6d"],["/posts/d7719dab/index.html","00463639770edb42efe9a56cfd99b389"],["/posts/dcc42dc3/index.html","f052278f73bc507ed53f808a9324b5b5"],["/posts/de4de369/index.html","85544df56bed54955db17b46aa65d0c1"],["/posts/ea42950b/index.html","f5bb9107c36ec75c91fb00c34a25acc4"],["/posts/f3908263/index.html","7367b81c9c5489b33a5101cf02476592"],["/posts/f6c5d65f/index.html","cfb3c80bb33b2c33ac2053096eed22c5"],["/posts/f84657b8/index.html","8f9beeef2eda1763a425bcc476c6439b"],["/posts/undefined/index.html","408a3d7a509427b4bcb0226ab0d0b095"],["/shuoshuo/index.html","8d83edcfc07f9af6ea8033c5f67db397"],["/sw-register.js","5416d482c8f6def394ed0223f74cb6cb"],["/tags/API/index.html","05d4b15f49de60530694b46565917ff3"],["/tags/Appium/index.html","3fd6312919378c38ab9f2f1e5b258310"],["/tags/Charles/index.html","e67b2a3985dd305821bb63d04e5512c1"],["/tags/FLAG/index.html","e32db5406d9e32ab98be3008039becf7"],["/tags/Hexo/index.html","7e52106074a3481e94cdc56b678dfebe"],["/tags/MQ/index.html","f6e41e0ba3275cbcee93e8b585ccac58"],["/tags/MySQL/index.html","5f94b536b322633a7fb4dd4c560f80a6"],["/tags/Python自动化/index.html","4aca08e9ca9cdb7e4fd0f6c764766d97"],["/tags/Shell脚本/index.html","dcd92f0ec7afbfde0a9dae93f0732ebb"],["/tags/index.html","c4f7734bafb26c7140f030e3246cfdbd"],["/tags/postman/index.html","4a2e700714fcd627ef07f3c9905596df"],["/tags/postman/page/2/index.html","6b67f1579eac8142e176312de320569f"],["/tags/博客/index.html","64c581a5b84f1795309ba29bee357f84"],["/tags/自动化测试/index.html","be2518c6be656b89cfc79cc7004bcc6b"],["/video/index.html","c248871ddd2e8ba1c53df6394490c58b"],["/风景/index.html","2082d6582ddc8c9cc8403fc48f750aa2"]];
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
