/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","e4486b311d981a65eecbfbc0970cb078"],["/archives/2020/08/index.html","e59f73c2d0e09bb49f055e579455fbdc"],["/archives/2020/index.html","da50e6e08db6c32a43e0fd8be3576e05"],["/archives/2021/02/index.html","5670b451ea2e9d2df013477907f921e9"],["/archives/2021/03/index.html","66fd045e365bbced77b14c20e4bd433b"],["/archives/2021/05/index.html","d0c4cbdd8d955499edbddb4e5f96fd8c"],["/archives/2021/11/index.html","5d4dce92d8eaa85ffcbae7685d7378dc"],["/archives/2021/12/index.html","fece8cd4198711b68a771be23841c732"],["/archives/2021/12/page/2/index.html","63e156b22f6492bc47105cd7da672ac9"],["/archives/2021/index.html","a74b0171346a87ed2578aa4e9ff74bf6"],["/archives/2021/page/2/index.html","8aca3047781d823ae32b6bf946cefd64"],["/archives/2021/page/3/index.html","743e52eccce8cdd87c43f0fa27ba47f7"],["/archives/2022/01/index.html","3a54bb7a72d738786182870de9628fa8"],["/archives/2022/01/page/2/index.html","0db56436a643ec8255b4d01befbd5353"],["/archives/2022/02/index.html","ab8392de19fbb2324af7d6d4cbe4852d"],["/archives/2022/02/page/2/index.html","63f49bdca2d389ee731376f45988ad2b"],["/archives/2022/05/index.html","b1c6142867f67a1ebb21b1003ff6094d"],["/archives/2022/index.html","5fccb9a28b00abeceb510afdd438e238"],["/archives/2022/page/2/index.html","90779750d9804c323c448a4b3fc8ed58"],["/archives/2022/page/3/index.html","8fd9e27169968c5201eac61d32b7d76b"],["/archives/index.html","641b09b0510946232a9a7f0127d0eab1"],["/archives/page/2/index.html","8c28064bb7cf1a29c2cf75fcc2bcd583"],["/archives/page/3/index.html","dc9ec9eb20b71104f5f6aef6bc3ea7bd"],["/archives/page/4/index.html","b188aa895537c8d1154e0599ffa5a366"],["/archives/page/5/index.html","5c3acfe4505e166226718b1f7d7fd052"],["/archives/page/6/index.html","348230f28dcf1a86837d9593a8b62433"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","b1cdab7fe80e7df94e6510f5cc7ac7bd"],["/categories/Charles/index.html","ed2647fc089af0c464dc53e6b2e241d3"],["/categories/Hexo/index.html","1cf4a30c85f37de423467530b4c33a46"],["/categories/MySQL/index.html","79dd3741d44b47c411225f746a89fff3"],["/categories/Python接口自动化测试/index.html","152f2ceeb262117a4e06d5f2d6487203"],["/categories/Python自动化/index.html","ba8a74fce96f7a7cecf04b5b4babdeb1"],["/categories/Shell脚本/index.html","eb07f04d62147a869a09be5c9cbb4ed0"],["/categories/index.html","009a49dc4b2c7a11529bc0d0424beb35"],["/categories/postman/index.html","89d012276a626486cc8639f99897d74e"],["/categories/postman/page/2/index.html","026dda8ed040c2a804451b23db6a8a04"],["/categories/postman/page/3/index.html","6e57e99549249a53973dedbc813b18ac"],["/categories/技术积累/index.html","73eaa9316bb72746a3b24f69c73c9bca"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","a50dd82a211676b7feaa649d2b0b95f4"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/main.0cf68a.js","0431be007a34d1af67b5042cd398cc2a"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","4a5f083f6bf53a40969f32fe3fb67ef7"],["/page/3/index.html","87e7f589fb1dd0f1332e44b669778dde"],["/page/4/index.html","3d3a63258b19a685c15cef1649f4d881"],["/page/5/index.html","55a43eb0839dc9bc6261209b232e43e9"],["/page/6/index.html","c24a9c8876ab5a7d04e249f2a0f634c6"],["/posts/2173e2a4/index.html","1ce7db46b3ff26866d3190b255ed7258"],["/posts/22131793/index.html","8fac5c1fba0a5040f9184d223da1f237"],["/posts/2ab40ef8/index.html","37a5d4a1f88a4a2e9b976719269fd563"],["/posts/30fa304c/index.html","d8f147608c26a3e5a869d9fa7beb59a4"],["/posts/3447541d/index.html","5d2ed613159acb85e5e0b67c073ff596"],["/posts/3447554d/index.html","b41004436d9b78d34225ca8d26b3d435"],["/posts/344e3c5b/index.html","a3d901bdfb3475fe41e70e39a2a326a5"],["/posts/3457ed69/index.html","51a2f9ae8973ce4d2447bfef50d06951"],["/posts/39cb083c/index.html","8fce11d3648925107cfb8952f5ebc730"],["/posts/3ba53770/index.html","9b8b3436032c021b2fca00950bbfe1ee"],["/posts/3bd3916a/index.html","ec752d2614d11e59111d82bc64220333"],["/posts/3e4105ad/index.html","0f881856e8bb82088d7dc905dc71eed7"],["/posts/42f034cf/index.html","5f8e4fba9156b9e806f2a17514740717"],["/posts/43b8c324/index.html","dca57c5cf44fcf52cdb088e425ed1d66"],["/posts/54eecc7d/index.html","de2ef4062a883b084d9b8188fe98ea5b"],["/posts/6172e27e/index.html","b0ed78aba9c46e6b507442ceccbdf3d8"],["/posts/6556c33b/index.html","e43dba42280698053c9ff51d30ab5781"],["/posts/66841aa6/index.html","015cf5fe60ffde6a298d0322e6b79caa"],["/posts/689fc75c/index.html","fccc2c3eec52710fa109718a7f915ba1"],["/posts/69423a58/index.html","c6470f64612257827f6f44a65818ae66"],["/posts/69ae7450/index.html","d46580e40a3644c34b279dd4ec9ba168"],["/posts/7de15477/index.html","577ccb0316f8d80cf4bf59b983908f3d"],["/posts/8a00d2ea/index.html","73e16abfa051c8cbfc92a992942b2720"],["/posts/8aa14a73/index.html","3f751cf51700d21b411eb90727fbf49c"],["/posts/96032b58/index.html","596be168c7a728278a28c84d68818b17"],["/posts/9656df9f/index.html","a640d8f88b2f51586abf5ff2da790e37"],["/posts/99817e93/index.html","6935701bfa7d6c86350bf45256765b8e"],["/posts/9d1414ba/index.html","1d9d6477612e8395871f9ccd87b59cb2"],["/posts/a3886b70/index.html","83da39767cf637eff79d75896f5ee8b7"],["/posts/a42e3f6d/index.html","5a2a9cc5c8011de3ac4e98775d40d34c"],["/posts/a9438874/index.html","9e54d92cf8cd8bcd4ca61579ae489f50"],["/posts/ab3b7c7/index.html","b749df0b3f07c98ffde6ded8bd5c023b"],["/posts/adb093cd/index.html","74891a77ea6f579b0f3da395eb243707"],["/posts/b4b3bf4e/index.html","ee6ab7c0be7eea1b1107ddb304b02e8e"],["/posts/b8685e49/index.html","686c1e36b7735318efe016b236dd36df"],["/posts/baaef441/index.html","2154d3f054eeb11df08b31a853e613bd"],["/posts/bbd06fa5/index.html","1ac1c20e4765af92cf694c229c4d5d7f"],["/posts/be476180/index.html","ba17e7d6629711ccfcfb34910140126a"],["/posts/c4b6dbb9/index.html","4226d1179ddc9841988910c8e029bfba"],["/posts/c98d9940/index.html","28a6544c0d6370d279e4eeee0a98e1a9"],["/posts/d2331223/index.html","3bb9e2c39a5476ca335e1e93288b96b2"],["/posts/d5268b29/index.html","b130c8038da82c1239367792e28ef6c2"],["/posts/d7719dab/index.html","3f7c79fcbe9562403539fb10d50daf49"],["/posts/dcc42dc3/index.html","5b32076d7717df09f2cc3553c2a51dd0"],["/posts/de4de369/index.html","c6f7663c13b2579cdd3b3884be6d7655"],["/posts/ea42950b/index.html","33fdf0f29e573017b0eeceaa6d6c0685"],["/posts/f3908263/index.html","a36d63dda3e1eb803ee6e316260a79fd"],["/posts/f46b70d8/index.html","d161823f4936580c94c3fc526d901a2a"],["/posts/f5e730b6/index.html","ab8bf6e701a89284e82de99a00247df7"],["/posts/f6c5d65f/index.html","fbf4c38a8061429ce92d1fd7f5580928"],["/posts/undefined/index.html","30e04303bd7b23d1d5141c66295f62f4"],["/slider.e37972.js","4f310c6a8d817d2a9b6358d9c44be8d2"],["/sw-register.js","15dd2b9a4f69705d106094b30a597292"],["/tags/API/index.html","def93ff8648d15e7515191efc243ee53"],["/tags/Appium/index.html","493cd11980a34fbb45026fa6acdd4977"],["/tags/Charles/index.html","a02bc19849dca3891e8f6a8aeec3be05"],["/tags/Hexo/index.html","28595e3c9afb9d464178ae274084d4b8"],["/tags/MQ/index.html","5e5abb0dc99cf7f4a02f3810a30fabb3"],["/tags/MySQL/index.html","452ab11a8c7031a5a57a2e23f216425b"],["/tags/Python接口自动化测试/index.html","1078b96e070368df6d9e050dff129a04"],["/tags/Python自动化/index.html","d30b8fe931c5700e9228a34e5cad02de"],["/tags/Shell脚本/index.html","d838d761fe623281bb6f6fe1becfe75a"],["/tags/index.html","51ad6fa2fcd1cd1f42bcbb09f2f9fc05"],["/tags/postman/index.html","c22206833b73b13194cd097d15334376"],["/tags/postman/page/2/index.html","b39d0ffb54ccfc58f9b8321cc81a5fde"],["/tags/postman/page/3/index.html","5cfac63702517c94cc96dd2aa484dcca"],["/tags/博客/index.html","6d887525e61c03c6db3b5a28349eb065"],["/tags/自动化测试/index.html","8290aa0f6b5db90c8648019cb79f401a"]];
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
