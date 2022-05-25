/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","baee0965233c10b2c29bc45f995931e0"],["/archives/2020/08/index.html","40e424e38229c819d89433bba339c241"],["/archives/2020/index.html","12ccb9e366822179f7b806ac17ac984e"],["/archives/2021/02/index.html","63b3a02a23810b8e6f67a19b15f72ec8"],["/archives/2021/03/index.html","96c8b275c3151612d5bc4afb131d3e48"],["/archives/2021/05/index.html","dc3e11a80347854ce32366ccc5cb9170"],["/archives/2021/11/index.html","d90b7f3b679bbc7b541c250d010b3b93"],["/archives/2021/12/index.html","2904422b20d265dfb83ee932fa806bed"],["/archives/2021/12/page/2/index.html","5402142d25b6ae4e9c0dc5cb080c0408"],["/archives/2021/index.html","d347decae6b14dfbb9bb70cc29f8521e"],["/archives/2021/page/2/index.html","ecec03a06c8f40c1f4d995209eaca9d8"],["/archives/2021/page/3/index.html","eaff20e3706fead81ce3886be8b61c01"],["/archives/2022/01/index.html","d8df5589546b5bff08a67e97d3cff87b"],["/archives/2022/01/page/2/index.html","272222557d00dc4660fc9babdba62b4a"],["/archives/2022/02/index.html","2552415e015a5b30b74371d7fed064dd"],["/archives/2022/02/page/2/index.html","918a381e3db693c872792210ddbcdda7"],["/archives/2022/05/index.html","5787989caba45b3017da27d36533a205"],["/archives/2022/index.html","6ded1993cf2348b5ad84f2c11924d9cc"],["/archives/2022/page/2/index.html","d3cf97e411c53bd8b3fe827ee4ead688"],["/archives/2022/page/3/index.html","d01c445a63e6a2a9dc10e7c116ba18ad"],["/archives/index.html","e779958808325bd1c3fc24b9043398ea"],["/archives/page/2/index.html","8d11fdb1ba8ca3be1536cb3fcca7800a"],["/archives/page/3/index.html","7236cee2bd39f797773b74a3f37cd5f8"],["/archives/page/4/index.html","cb81636ef0f387bca0c53192759e5b25"],["/archives/page/5/index.html","bd689bf0be43e776bac468636b6bd25b"],["/archives/page/6/index.html","3cb2f93c0742b2680e4c9a67d37bf1aa"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","86ddc848edb8b4644e5865ca7542528d"],["/categories/Charles/index.html","44600cea472c22045f71731c12cd577e"],["/categories/Hexo/index.html","0b161e74eb076964327fe37a375d468b"],["/categories/MySQL/index.html","d6b7de970417cb28855f98072e882844"],["/categories/Python接口自动化测试/index.html","27a570367ac31ae230decfd17341fa14"],["/categories/Python自动化/index.html","075d3c55c2be780c4335f6cf2054251f"],["/categories/Shell脚本/index.html","5843bdd9b979b96f91dbe2034bd3ce19"],["/categories/index.html","604ed0a918a909a1ff1f7edea417679c"],["/categories/postman/index.html","7dcdd3dbbdc3da9f6d340571b74a174f"],["/categories/postman/page/2/index.html","b8bbf2c2d715db63a90cc915dbd7a65c"],["/categories/postman/page/3/index.html","23a9d4d63948139c3a2674defab5c29d"],["/categories/性能测试/index.html","b3f617ac89897daa53e178255248354f"],["/categories/技术积累/index.html","98ad8ff7a864e6902ae468d5f0b941d7"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/NFC/OpenWrt_Wifi.jpg","7428edaab587807cdf99fdca59ca0795"],["/img/NFC/WeChat.jpg","1a54b921e40a21d78c61c5354a3f6bce"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","90c46138caad97c5637899c9bda15856"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","7d352d1764752f694ba53103b5997521"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/main.0cf68a.js","d41d8cd98f00b204e9800998ecf8427e"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","179aa24e6f9251542562ac705d96f380"],["/page/3/index.html","af42cafa70b498dbb921df838869dc8b"],["/page/4/index.html","9a481c7c107fd44ebaf48a27ab175f82"],["/page/5/index.html","d0f16412307e9f9b43691c7bdf9515ef"],["/page/6/index.html","244f93210d8606a36d1ce4a0a23a9133"],["/posts/2173e2a4/index.html","96043fc93b98c8ff7a982e4a4204090f"],["/posts/22131793/index.html","728aec97c188a532f3f36bb5509d2397"],["/posts/2ab40ef8/index.html","94af995540ef3bf5f203d403d07a6c12"],["/posts/30fa304c/index.html","45279919d18320175ce7a8b07f11a2ab"],["/posts/3447541d/index.html","320969db10dc7fe4ce857de92d37f5c9"],["/posts/3447554d/index.html","61b1a99579dbd38fff616420255fcf60"],["/posts/344e3c5b/index.html","6ade74ba1f5c14d641fb1e522a500e61"],["/posts/3457ed69/index.html","e4004d951a3142e14312ac89ff4d2dd5"],["/posts/39cb083c/index.html","43d217180e8b2df97aca8ca6ac21f127"],["/posts/3ba53770/index.html","68cef83259939ba0080ad8e3544c0e4e"],["/posts/3bd3916a/index.html","40f7bc16675798da02e38c687a227628"],["/posts/3e4105ad/index.html","4dc956516974efd26c39798ae4b46d35"],["/posts/42f034cf/index.html","01a149165e56a0195952b1570d943740"],["/posts/43b8c324/index.html","3d3c994e8d2806b9758392e7227377f3"],["/posts/54eecc7d/index.html","a5fd7c2c33e14fed4d7bd6e382fde916"],["/posts/6172e27e/index.html","003895c3b11215b857ee686916f23aa6"],["/posts/6556c33b/index.html","f1d10f37ed0e8fae70053034dd323d7c"],["/posts/66841aa6/index.html","61e491a76b5bd12c2a8c81e9141b5096"],["/posts/689fc75c/index.html","6159207cf32b5980ff1f8ef1211866dc"],["/posts/69423a58/index.html","eeeec879cdc8caf087ab461779fc9d1c"],["/posts/69ae7450/index.html","5b0877dbfcb88a19c468f87bfc44bf30"],["/posts/7de15477/index.html","57d3f78f434597668a6683cb9b0f79f9"],["/posts/8a00d2ea/index.html","532760edb57c05e3454150dbc34323fb"],["/posts/8aa14a73/index.html","bc4402a390fd57848303a7fb25fd03e6"],["/posts/96032b58/index.html","63cfa4b97403b1ba6689e6e2d6d1c3d7"],["/posts/9656df9f/index.html","36b542eb783ce64da7c50545bdec338f"],["/posts/99817e93/index.html","269870d39d972847cdccade40819c019"],["/posts/9d1414ba/index.html","328a057af3cae4173d039229bf658d7c"],["/posts/a3886b70/index.html","9b24e4a35edff7d37de63f08b5a12d4e"],["/posts/a42e3f6d/index.html","75a54e1ddce28b6b47be2b75e6e43c10"],["/posts/a9438874/index.html","6adf1600513431e47c3296a9eff1426c"],["/posts/ab3b7c7/index.html","4361a0d1c431a2f1966f6a0573366942"],["/posts/adb093cd/index.html","c58cc44d6bf711e2562a9169a003fdbb"],["/posts/b4b3bf4e/index.html","0bbce10f45969e2ca54fdcbb76f090a8"],["/posts/b8685e49/index.html","8ad497d0e89206b14a5a1a94af605d98"],["/posts/baaef441/index.html","656bfe6eab52a811d5d55a641f73ef97"],["/posts/bbd06fa5/index.html","c64dd634623238714af13258812b6ec2"],["/posts/be476180/index.html","0f360df2f3d49bdbb0e5ec9957cc68fe"],["/posts/c4b6dbb9/index.html","a9a5963bc59b334fb08da9020a7e59d0"],["/posts/c98d9940/index.html","a740c0880a2c042a782b927e47d1403e"],["/posts/d2331223/index.html","e3ea31531eda4df7945612dfe7ea7808"],["/posts/d5268b29/index.html","593c8dbc6d78475d83b97c071eef840d"],["/posts/d7719dab/index.html","129e61cf4b730d5f5ae76426096d070b"],["/posts/dcc42dc3/index.html","2f6e4e6e24a59bb6193f38022adede45"],["/posts/de4de369/index.html","032c3753add30c6ac89bfc8ecf02e970"],["/posts/ea42950b/index.html","28768c9b778c4fa772eaf9df127c81ec"],["/posts/eac202c0/index.html","cd8419fc7f9d1979758572e7c44dcbb2"],["/posts/f3908263/index.html","37a5454a6d4280beb60dc1c90f304abe"],["/posts/f46b70d8/index.html","60216a969c7335bbd4d542d21829f4c6"],["/posts/f5e730b6/index.html","c523f560f4a09ec99ba3a3a1e0a71f1f"],["/posts/f6c5d65f/index.html","5b90baa2f5dd09eb9bedd7d3d0f0f863"],["/posts/undefined/index.html","64b0990d4e2a66176072dcefa1f4f0db"],["/slider.e37972.js","42282189cbca9630d6e0a070940e67f1"],["/sw-register.js","cd7655139ef5254410902cb56cf823e5"],["/tags/API/index.html","fc073bd23a8ed615f862acb3e20f95d9"],["/tags/Appium/index.html","e7708cd9b92e969bbdb4376ba33aa5c9"],["/tags/Charles/index.html","6b58b2a0adb5edf9859b37612dabfdcd"],["/tags/Hexo/index.html","452b6d99dfea5038bd7c8390f3c6df1f"],["/tags/MQ/index.html","b0b033940c827eec3af56bbd76cea4b1"],["/tags/MySQL/index.html","4ff56900329bea5760416110689b44cf"],["/tags/Python接口自动化测试/index.html","f27d4ba89c77d87e3dd3f98231d6b807"],["/tags/Python自动化/index.html","1262ac4b2cc28da68ef9a70cc87fab40"],["/tags/Shell脚本/index.html","fb9966f7d49083e88be9843acf3f4327"],["/tags/index.html","9373603778b7e906de797345bd1b64a8"],["/tags/postman/index.html","4ba28aeebb4ecde1289153b91ef09fe5"],["/tags/postman/page/2/index.html","8811f8a9daba6b430678dfd93e3a6fc0"],["/tags/postman/page/3/index.html","48dba69f586edf7c75c5abe124932514"],["/tags/博客/index.html","65c604f207534edebc8f18713ee27749"],["/tags/性能测试/index.html","2d305837659ab5a850c4408350aaacf7"],["/tags/自动化测试/index.html","7c6b5f74576df096b03a13591819f8ad"]];
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
