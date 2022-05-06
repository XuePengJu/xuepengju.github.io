/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","e2d987a27a8e177e0ab0704b6ea57070"],["/archives/2020/08/index.html","2c3649077e533c38e0ccb66faf6062cc"],["/archives/2020/index.html","a203ac76c450f10f87ab84cda5e70743"],["/archives/2021/02/index.html","b9e1dd6663e9ec493a0cc479e3293d06"],["/archives/2021/03/index.html","80e81b7dbc1e777d06abbec9dbd97f7a"],["/archives/2021/05/index.html","8bd4d796a15ebf8da9a3113219740b07"],["/archives/2021/11/index.html","5ddce55f41dfd147f98fe29660550418"],["/archives/2021/12/index.html","ada0c420481063544e6fd8dcceb2993b"],["/archives/2021/12/page/2/index.html","f9384eda53254064b8e9f2dda49ea6b5"],["/archives/2021/index.html","613e8371af63c43bafe03d3039ce929d"],["/archives/2021/page/2/index.html","6b0f497048fa39f5608b3df690cfb3e0"],["/archives/2021/page/3/index.html","b8cc31c93ac44c2ac12f4cdbc634960b"],["/archives/2022/01/index.html","77b6a6cf8a1b070e3dfeef5ea6745fa6"],["/archives/2022/01/page/2/index.html","15e18cb5b928e73f9d8e0601c56ff468"],["/archives/2022/02/index.html","2cde1e35f657c3d2b0280508ff4269fc"],["/archives/2022/02/page/2/index.html","e9c550f3423aa7e0a6663b7fc8a36943"],["/archives/2022/05/index.html","b1e4b61afa186b161c1565de59985492"],["/archives/2022/index.html","d4e031529f82c472775fcbe66b075b14"],["/archives/2022/page/2/index.html","dfb6d73bc3f63e1c42208544ed102e89"],["/archives/2022/page/3/index.html","42979f9c9e139289511580bd363f2450"],["/archives/index.html","eba819361d0da5dd79f91a2ff1c51338"],["/archives/page/2/index.html","a60ca72676a9112d23e59ab1a2882a12"],["/archives/page/3/index.html","bd842a4b2c92035bba1fb5effbf6e08f"],["/archives/page/4/index.html","d8d5775ac5e70461674d6aed32573a74"],["/archives/page/5/index.html","8824a40e84df9a816cad19eda07b5014"],["/archives/page/6/index.html","9d9ab42dfe90aa0700b8b6efeb76032a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","787b6a6925bdcb6ae2cb528f007ecd94"],["/categories/Charles/index.html","d4641b44ea62bdd90e97c16244034e0d"],["/categories/Hexo/index.html","7fd1a819a07e56047f93d653f2fa23bf"],["/categories/MySQL/index.html","4cdcb30fe79d79418294fc919112e66f"],["/categories/Python接口自动化测试/index.html","03dafbbcc8202becde6a63c5d35496bb"],["/categories/Python自动化/index.html","90205ab578db6d5ca31702de2373550a"],["/categories/Shell脚本/index.html","d7135d6ac41a91ec0ff6df98204ed2d1"],["/categories/index.html","bec5a43127f5998943c9dfabb63c7888"],["/categories/postman/index.html","7f4ccf86878d9b654a63a1715ed4f562"],["/categories/postman/page/2/index.html","b0d5290dd888048cf54c0f6e929b1852"],["/categories/postman/page/3/index.html","31fbf5b40a8bd769971bbb48be935aa7"],["/categories/技术积累/index.html","b1c595fd691bd149c7daed5d50080d74"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","90c46138caad97c5637899c9bda15856"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","0d2037ee0afddbc1ea906e3665600a41"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/main.0cf68a.js","d41d8cd98f00b204e9800998ecf8427e"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","05d562cb140856a0904833a61a405ee3"],["/page/3/index.html","3a94207a7d96af40ab77d7c28d79a2c5"],["/page/4/index.html","2a2756a2a71d8527401cb7f2c3014604"],["/page/5/index.html","63d32a2ae86f5e8998b5f255b18eafd3"],["/page/6/index.html","f45f125df1b2bad364394c1806bdb2bb"],["/posts/2173e2a4/index.html","19868393d8c7d93483eb7acc407630ba"],["/posts/22131793/index.html","607c473df6b3fd3d169d014ac2e9ddee"],["/posts/2ab40ef8/index.html","55b95366e840da2caf04b139c64ca0cc"],["/posts/30fa304c/index.html","7049a9da899259eb9217807fc4e391bb"],["/posts/3447541d/index.html","648d895cd94a6f9cdb1514e570e9a19a"],["/posts/3447554d/index.html","f98c6214fbd62ea97aa49cc399b259ea"],["/posts/344e3c5b/index.html","112d29004c45dd733cad280eab36fa7b"],["/posts/3457ed69/index.html","46c0ae2cc1e0e5e9a645a32063435f27"],["/posts/39cb083c/index.html","e579ace36944706d3d8439baf4d86f32"],["/posts/3ba53770/index.html","28d44cc70d91d3b9a41be09a6ebe9a7a"],["/posts/3bd3916a/index.html","b7d86f61ffa870da3b19214a4df83e73"],["/posts/3e4105ad/index.html","ff74ce4208fe72f34233daa5c9134f9e"],["/posts/42f034cf/index.html","9ea9c12751f9470a7f57c7c3a4c7d0e6"],["/posts/43b8c324/index.html","7c0f194d02a9196da1654870ef015286"],["/posts/54eecc7d/index.html","a34654c4de672967dec7450bf628b464"],["/posts/6172e27e/index.html","bac6f772eebd803a792b50596b6ec85e"],["/posts/6556c33b/index.html","a41a3cc63251952e666d6d2f387cb048"],["/posts/66841aa6/index.html","caa001ddf462e8a4f6ad554219ab3ca3"],["/posts/689fc75c/index.html","e2850d80019a4ce058ab3a4149a5226e"],["/posts/69423a58/index.html","8781c0f212ea79eb46ce0fd8f77875fe"],["/posts/69ae7450/index.html","aa016bc4dd5a39a27b74ef5612d6b964"],["/posts/7de15477/index.html","1a6e5c531606b59142eee9b6b1fb6dc5"],["/posts/8a00d2ea/index.html","412674d0adb33e48e69aa89741c304ce"],["/posts/8aa14a73/index.html","507ed595ce413ed4111774c3218bb5f2"],["/posts/96032b58/index.html","4cbd59076d44001012d247d640cbfab9"],["/posts/9656df9f/index.html","e082d15745315a8671439cbe5c33ce97"],["/posts/99817e93/index.html","ea8765366105ec25d75371aa40ec7004"],["/posts/9d1414ba/index.html","0b880b6eefe67011d0d02f2ef1df5cf7"],["/posts/a3886b70/index.html","be657e73b29dd9f218a80048e35535f6"],["/posts/a42e3f6d/index.html","03a9c5d5cfd84aac09b1f31e9b4398fb"],["/posts/a9438874/index.html","cdd02d107e3dd5f726839e2fdfcf5fc4"],["/posts/ab3b7c7/index.html","6adaab6576aafe4bc1ecbcfd249f9e2c"],["/posts/adb093cd/index.html","2bf9ec44faba6926b2a9b3bf428dc518"],["/posts/b4b3bf4e/index.html","9b1ba1282c94ef5f93f10e2050445abd"],["/posts/b8685e49/index.html","5ff3056910f427e69633ef4ef3edd6aa"],["/posts/baaef441/index.html","944d5d3af54881a34e8634eb2bbb25ae"],["/posts/bbd06fa5/index.html","7189d3e56a99642db477dde216172335"],["/posts/be476180/index.html","529b64afe7db3bc50c1fda72f4b57058"],["/posts/c4b6dbb9/index.html","e52132af3023739951df6d176caa1f0c"],["/posts/c98d9940/index.html","c1a3c31be4f925961a7eb950fc55a46c"],["/posts/d2331223/index.html","f96f88afe3729a14b0507d7ca64e226e"],["/posts/d5268b29/index.html","407c2eec0409c02704d82171b242aa94"],["/posts/d7719dab/index.html","1839d3c4e2b1c572c1452ff8a606da76"],["/posts/dcc42dc3/index.html","f39513bee274928b309b19589bc2d365"],["/posts/de4de369/index.html","c046731f98851eae65111113fe9e4cf4"],["/posts/ea42950b/index.html","f73c48faffb2ce5992ccce5b92ffff75"],["/posts/f3908263/index.html","5c6818caf4933173d291be6bd8b0fe4a"],["/posts/f46b70d8/index.html","f9a987839b499118b77026643cdc1a5c"],["/posts/f5e730b6/index.html","ba3a64e5d7c87cd32369225a2c04cc67"],["/posts/f6c5d65f/index.html","abf3e9c0d3dd8d2a05e38f6ba55fab61"],["/posts/undefined/index.html","1df54a51d90637a535be1359eb302c72"],["/slider.e37972.js","42282189cbca9630d6e0a070940e67f1"],["/sw-register.js","af373ecc6312cb92471fede8a1805982"],["/tags/API/index.html","4113e8be33f3455c1f9f249ec1827c98"],["/tags/Appium/index.html","61229b0f0c3945c4a4cffd918840c00b"],["/tags/Charles/index.html","0c4ada9fcc6febf3927ad2465ae749ef"],["/tags/Hexo/index.html","9666cf83bc433fd99544dc30dab57d54"],["/tags/MQ/index.html","07d1df538138b1aa1eb1304d397a5e08"],["/tags/MySQL/index.html","aba03544bda8175a2a91c1eca4c5f513"],["/tags/Python接口自动化测试/index.html","0a53cf93f0cc78498345fd02109d9940"],["/tags/Python自动化/index.html","c7873cd1604a551f6553d3bcb745a7a5"],["/tags/Shell脚本/index.html","ac477fec91f06e1814cd5a1cc00b2bdf"],["/tags/index.html","1dfbfee7d1b97df897092bd9fa97c06f"],["/tags/postman/index.html","987669a09c25533064234c00f7bf28e0"],["/tags/postman/page/2/index.html","fcb688428d06279491458bdb53f71869"],["/tags/postman/page/3/index.html","ae2ad1f8b7cebd56d426d85d7c26a5c0"],["/tags/博客/index.html","78ba50dac62edb1c54c5271c17453e91"],["/tags/自动化测试/index.html","9f23ffcc47acfa823a7969fd6692d47c"]];
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
