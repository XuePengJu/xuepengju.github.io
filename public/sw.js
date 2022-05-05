/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","eb50e8fabcc973465d640787423d7343"],["/archives/2020/08/index.html","e14cf175509cc5968ed65eaf5796e2fe"],["/archives/2020/index.html","838447405a928f014771d01d02163ea5"],["/archives/2021/02/index.html","b24fe698c78ecae455e5fdae32e2dae2"],["/archives/2021/03/index.html","d5f06ee6b2952abe38a5d9aa61daec98"],["/archives/2021/05/index.html","75e999814a83c317c89c84971bedb616"],["/archives/2021/11/index.html","ef690f6efd776165f95823582c396527"],["/archives/2021/12/index.html","abb7e65c5de128f06bec250218d3cdb8"],["/archives/2021/12/page/2/index.html","663cadd924778cbb3d0d1e4380f7c1de"],["/archives/2021/index.html","c4e6ab834c37b18711503a3818d41a46"],["/archives/2021/page/2/index.html","12c7c9315b032d6ed360787062323361"],["/archives/2021/page/3/index.html","c2400e61cfa95289ecd6419892de3f71"],["/archives/2022/01/index.html","369e15819490c90bb09e06112ae0c10c"],["/archives/2022/01/page/2/index.html","e18ffc174eb669404390b9eebf67c519"],["/archives/2022/02/index.html","4fe9200a89e203d6da6233f12222cbcb"],["/archives/2022/02/page/2/index.html","0d31e7bb39965547393659f835b768e0"],["/archives/2022/05/index.html","5c8fd39ca1e93091bbcc44969e891eab"],["/archives/2022/index.html","2848d3c52dc1e09dcc0706e0e2665b50"],["/archives/2022/page/2/index.html","9179f5a30d8d0b5682be87802883129c"],["/archives/2022/page/3/index.html","f3287b11d861a8ea9fe4cc673efdbb0e"],["/archives/index.html","09fa2fbe5437359cb85654f2f5b0f221"],["/archives/page/2/index.html","e7d7a4c6159c604a43cafeee400fda70"],["/archives/page/3/index.html","445b0b3e21b7f6e717375c2a5271141e"],["/archives/page/4/index.html","149eb8a375283661e5b86286d8da905c"],["/archives/page/5/index.html","38e93628d228f93c5e49ec8ce78b2d57"],["/archives/page/6/index.html","0f99ab801dcd02fde0c9e21a1d0545e3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","88e9a1384f5eba57de338a6b3916fb07"],["/categories/Charles/index.html","3b2ef06b2538082e557a7b68087e5013"],["/categories/Hexo/index.html","bae5adde41ca3adf6e1f58a54ff5a62e"],["/categories/MySQL/index.html","113fdc5c2cb6595c20c350de3db2c51d"],["/categories/Python接口自动化测试/index.html","ba336d311706b2e959612a9a940fe36e"],["/categories/Python自动化/index.html","4b46d9ec6056a67544335f1315b27a29"],["/categories/Shell脚本/index.html","6ee81fbfe57c684bca820c68aa73a11b"],["/categories/index.html","5d10a388b60e840e7c96c88278dc111c"],["/categories/postman/index.html","dfee201b1c2a28382a1a6eac065157da"],["/categories/postman/page/2/index.html","2003f71889c808efb3b06e32a88f0c5d"],["/categories/postman/page/3/index.html","c7dbeed018ff48e3a799cd11c30acf74"],["/categories/技术积累/index.html","45beb11103958842ed26cfb32cecf720"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","e3b93938a7ebfed304dfe4b5d11378cf"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","7631eb06c86c86dd075bb250f0cbf487"],["/page/3/index.html","339aa53ad9caa72363807e5ad88d2db5"],["/page/4/index.html","1de914f309271a2f9073ba2e4fb43bb0"],["/page/5/index.html","f62d27270c847ce2d8cb45a101cab83f"],["/page/6/index.html","0aafcf404b19ba0a7fc2892dcffccb23"],["/posts/2173e2a4/index.html","ab6dfe7dbe31634d079dc7cef7ca0050"],["/posts/22131793/index.html","324c55cf243777c35337c82b6453a1a3"],["/posts/2ab40ef8/index.html","d16aef8a55c99f1fd593fee7863637f3"],["/posts/30fa304c/index.html","d0c33f846d6d5ec200646ca5ab4d5a2e"],["/posts/3447541d/index.html","75c77a07e345bd839f54e93c8557b844"],["/posts/3447554d/index.html","f3bf93edbc441f7563ecf14715f58429"],["/posts/344e3c5b/index.html","034de72a0eed98d97206879f2d82285e"],["/posts/3457ed69/index.html","1c904f20f081fc9eb51f114bf1e8c8c0"],["/posts/39cb083c/index.html","a1f66cdfd1bdcd70ff98e97b69b58ed2"],["/posts/3ba53770/index.html","4fe05ad12e6f4d2aa31f50672cdb2973"],["/posts/3bd3916a/index.html","e2025a9cf1e3532e09ab0641c4a2ceac"],["/posts/3e4105ad/index.html","c55b1bab262b2d5b4daef94825f72e6e"],["/posts/42f034cf/index.html","affcd87c42634a914f0aa4b3cbc25e11"],["/posts/43b8c324/index.html","09379a5fb1d986c101aa2eb23007c882"],["/posts/54eecc7d/index.html","e6fd1f36bffcf04761623a122c7ec051"],["/posts/6172e27e/index.html","e1e523496fbe1e5f8fe35875634b6878"],["/posts/6556c33b/index.html","8db5d779f1f4171f3526f3ccac4c9c1e"],["/posts/66841aa6/index.html","eadf9f7b1fb088e44a468635be986038"],["/posts/689fc75c/index.html","7b94acfbff67e33783328a0f45ad5ece"],["/posts/69423a58/index.html","4af2c181b7cdacbdd3d9a2321637dd30"],["/posts/69ae7450/index.html","a909eb4f451ab8578381f4f0931b5c3f"],["/posts/7de15477/index.html","3bbe5813725b58e014cb5a19228fed26"],["/posts/8a00d2ea/index.html","646481b32a957bc3f65362793c4e4baa"],["/posts/8aa14a73/index.html","38f3451b8ef40980b74f570197b9d966"],["/posts/96032b58/index.html","97780248bc431d86a156996005a9a142"],["/posts/9656df9f/index.html","166c2bb00914dfbc4f17c6b696052d6a"],["/posts/99817e93/index.html","093064c4438c238d5f50d03da86e0847"],["/posts/9d1414ba/index.html","bd8b21f1c9266df7484d48576eb56828"],["/posts/a3886b70/index.html","8bbec548aa03cee8ee21c28f362bcd31"],["/posts/a42e3f6d/index.html","b034a3b870f08bff66f240f93ae0c248"],["/posts/a9438874/index.html","8e8757362f7079c1b57c13c2fc1efffe"],["/posts/ab3b7c7/index.html","2b2530e5f80b1f9d35073a33c6107a3c"],["/posts/adb093cd/index.html","8a61e5ef4012e09d3e203a62f029608c"],["/posts/b4b3bf4e/index.html","69591e09c2f99bbd1fc7e885cbbe3216"],["/posts/b8685e49/index.html","1897851d7f380a81da4b7f3732122cbf"],["/posts/baaef441/index.html","e85b67f65b3078143b0cfc36fe9c54d7"],["/posts/bbd06fa5/index.html","c90f04e4799b9e7616345f845935e7c4"],["/posts/be476180/index.html","d084489fab497b078417c7fe42cbcde3"],["/posts/c4b6dbb9/index.html","c4b3761273b3fdc9e5db75dd40181f44"],["/posts/c98d9940/index.html","2692562eccbfdf7fd2d44479d9539feb"],["/posts/d2331223/index.html","ac53fd5470c0bc6f61825701562e8271"],["/posts/d5268b29/index.html","44e079b8da69540b679b9c4fa65f37ef"],["/posts/d7719dab/index.html","d91c14d81f348f2afe6c15b5270b059a"],["/posts/dcc42dc3/index.html","234583dbc0e34070023a67b51c8749c7"],["/posts/de4de369/index.html","c4d9fef6e26251cbceb85fc7f26efc9c"],["/posts/ea42950b/index.html","da4e78e2081cb52f077535ef11d2764b"],["/posts/f3908263/index.html","4a18a5508bbe12d3cd116342c56d0ad8"],["/posts/f46b70d8/index.html","8f2a8fe24f1834ad6199ee18eb554fe7"],["/posts/f5e730b6/index.html","8f04ca137852bf83cbdf26ac02f96078"],["/posts/f6c5d65f/index.html","5d240128ddc93d871b2728edb9f31b9d"],["/posts/undefined/index.html","28594edbd506551656520afb252dfdaa"],["/slider.e37972.js","4f310c6a8d817d2a9b6358d9c44be8d2"],["/sw-register.js","7ba644b7852cd1719de3e09de4faacfb"],["/tags/API/index.html","c6c0cf31f86e3f3ca42b9a760ce12dfc"],["/tags/Appium/index.html","7841db1e6b57f7bc80faac3142cd83b0"],["/tags/Charles/index.html","6de4d92abb1f1be0c99afa1b46590488"],["/tags/Hexo/index.html","bce93e9f4812c6c43a98b50618657e67"],["/tags/MQ/index.html","6a95d466b2e4ebbae8489326acd47ca6"],["/tags/MySQL/index.html","a21347345cfe84236adc6837cb7d52f2"],["/tags/Python接口自动化测试/index.html","93a05804296595c37e031f8e4402ba82"],["/tags/Python自动化/index.html","d315d2066adb41d0f6fa43d14770a69b"],["/tags/Shell脚本/index.html","afd9b0074e144091b7c157063f713e06"],["/tags/index.html","7b37b51a35578785fa0c3d8504ff13e2"],["/tags/postman/index.html","72e521d9219ba2fc2efefc461995c20e"],["/tags/postman/page/2/index.html","3ff4c4f979487a467699ad18f2d798e6"],["/tags/postman/page/3/index.html","e594853acb81601f0e086ba4dedf2e64"],["/tags/博客/index.html","e87d8e2ed344f039225310f6bf14de8e"],["/tags/自动化测试/index.html","e4a3cd6385a66eddadc7cf29dd745861"]];
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
