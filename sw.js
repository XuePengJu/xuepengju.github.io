/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","fe79b3837d72fb131b488659ad3384ee"],["/archives/2020/08/index.html","e55e18b29082c3feebc4b9917791c5c1"],["/archives/2020/index.html","d5831c69033464a9f4d475602189e216"],["/archives/2021/02/index.html","6ab005b9cb85383cfe8747292d98fa21"],["/archives/2021/03/index.html","7d2dd571f3a6fc118b8cb5af818e53d3"],["/archives/2021/05/index.html","c6c77ca2f693c7e892364adf91f16faa"],["/archives/2021/11/index.html","e7a17b4297eb25a4fe21ee9016f59cfa"],["/archives/2021/12/index.html","f342d153ed32f749efd2a6188351c183"],["/archives/2021/12/page/2/index.html","118097628e1d304e98703363a762615c"],["/archives/2021/index.html","ce49898e73d5140753b584897339ab71"],["/archives/2021/page/2/index.html","362d53880621bf83d1db0949586251f5"],["/archives/2021/page/3/index.html","a6f74fb3a171a0abf00b1ea0b0feb6e7"],["/archives/2022/01/index.html","9dcae69828bc18c5be356d5b70dff4e0"],["/archives/2022/01/page/2/index.html","f6902b284d3234aa805ca5c418aaaa4c"],["/archives/2022/02/index.html","34f088cc565720bea40089626e58149b"],["/archives/2022/02/page/2/index.html","0ade08e612edb1aacf99ff5b9b92c317"],["/archives/2022/05/index.html","fedd26c4dcd7cc1fa3dd729719c1444f"],["/archives/2022/index.html","89464b216c587bb61bf7f096a8a66fcc"],["/archives/2022/page/2/index.html","6c6c35d0ee8971c49b8da75a7459fc4b"],["/archives/2022/page/3/index.html","22c04858bd80e8c8fca4be7f2f25a050"],["/archives/index.html","a32580867d26afcfbb159cacadc22d3a"],["/archives/page/2/index.html","d4fca0f71824a590f0f4ff6578e0919b"],["/archives/page/3/index.html","30beee2a45d07163acebad1c0e65abe5"],["/archives/page/4/index.html","53d9050cb64f9487d44977703d967d1d"],["/archives/page/5/index.html","17618c692c85d19338a946f71155b5ec"],["/archives/page/6/index.html","9422ddffb1f865faf2ac3bde365d7ca3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","6f65ed1c7118daf8a37529c366a4b74d"],["/categories/Charles/index.html","6144e62d35844ec3e312ffbc805ab8ef"],["/categories/Hexo/index.html","ca65aeae16a849d5a30f03e85ac0b14c"],["/categories/MySQL/index.html","35d5bde35fbe89213d250e6cfefb7274"],["/categories/Python接口自动化测试/index.html","4c1664c250a2789fc6b2655fdaff2812"],["/categories/Python自动化/index.html","50780f6714012c0c6f0eab4e663d23be"],["/categories/Shell脚本/index.html","1d40c82f3abee2fd33b7888e61c8c0ad"],["/categories/index.html","aca47b4b5c25c3723cee6ff28e62cdf6"],["/categories/postman/index.html","c077a71dbec9fd4ab6420432dd43f668"],["/categories/postman/page/2/index.html","a0e8db6cd7122b427de853455ac3526c"],["/categories/postman/page/3/index.html","7b6a45142541bcb90f1d85cc712ca96d"],["/categories/性能测试/index.html","3c01a00cf4453bd9725fcda0e59ca77b"],["/categories/技术积累/index.html","51a864510e294b664f6ac1be266fb7c0"],["/categories/简历/index.html","acf31a4e64a0823b459d87729d2da616"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/NFC/OpenWrt_Wifi.jpg","7428edaab587807cdf99fdca59ca0795"],["/img/NFC/WeChat.jpg","1a54b921e40a21d78c61c5354a3f6bce"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","90c46138caad97c5637899c9bda15856"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","eccc2179d5b765d3b0710666f8c43baf"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/main.0cf68a.js","d41d8cd98f00b204e9800998ecf8427e"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","153fbc69e736a53daaac39ef46a3f308"],["/page/3/index.html","5ecfe5d597b844b1e85da0d232f28b8c"],["/page/4/index.html","8d36e6597ddf23327259fd6812d28bac"],["/page/5/index.html","bcadaccc766363a92ae9cd1e9ac3b68d"],["/page/6/index.html","3388026897a3d285cf9155fc99d4249e"],["/posts/2173e2a4/index.html","b64df05a94979838a254342b3db5ddf2"],["/posts/22131793/index.html","76268c22a8aea2443f0e911feb968229"],["/posts/2ab40ef8/index.html","3f9a56cd9555ae38620d5927f5b6603a"],["/posts/30fa304c/index.html","147662043ef88ba0638a2b77482e1d74"],["/posts/3447541d/index.html","3eb83a3d686d9b1e57fb1ff3e0de22af"],["/posts/3447554d/index.html","a1d61df3bdf40a92735ed1ec41f9f751"],["/posts/344e3c5b/index.html","faad193a0da19991bf4f53d5356f53d2"],["/posts/3457ed69/index.html","f70c3ac4e61fe0f28dc31d523ad41f25"],["/posts/39cb083c/index.html","5eb9fa2ddffa90f0d931673748aecddc"],["/posts/3ba53770/index.html","62cb0fbb7ad1bbe5d7e35a26330bc5dd"],["/posts/3bd3916a/index.html","ad5ffb0c89b310eb430d39337174c9dc"],["/posts/3e4105ad/index.html","66365141631f8f9861c147695283b092"],["/posts/42f034cf/index.html","1e7fff1a8b10747f36c9c273c3b37a2d"],["/posts/43b8c324/index.html","47811337616bb8b186cea26b01c6a7c1"],["/posts/54eecc7d/index.html","c150c8d924d81303a012ac6ac4246784"],["/posts/6172e27e/index.html","9e59130da8ca4f720a6be6eedbdcd8df"],["/posts/6556c33b/index.html","4ad7c1614a1315d8048e26eba66885a9"],["/posts/66841aa6/index.html","bd014d6ace2507ca0c66c398f352d59f"],["/posts/689fc75c/index.html","59fd101f901c155d1aade138fd1237a5"],["/posts/69423a58/index.html","70957a50ef87ef247ee03189da817a82"],["/posts/69ae7450/index.html","e3d8aea3d610ab4c298f8912a03a1205"],["/posts/6eec70c5/index.html","f064e52ad659208f0b26ccec11969850"],["/posts/7de15477/index.html","6e6a25884f29b06cceaf499716abd64c"],["/posts/8a00d2ea/index.html","8bad9e79665020765335dea795957211"],["/posts/8aa14a73/index.html","fb045b2a97a85a4cfc06cf73b818eb85"],["/posts/8e85f61/index.html","562dbf10060c4a94f9e9277c83cd1969"],["/posts/96032b58/index.html","892775469f4401787fd613b170ac4bd5"],["/posts/9656df9f/index.html","fcc9c353811d310a9ad76ea8d9725c41"],["/posts/99817e93/index.html","47dd44369a007d90abbc7459afb0f339"],["/posts/9d1414ba/index.html","50a268bfee7fa9ec364ead89da254d9c"],["/posts/a3886b70/index.html","13f68bb5f9882d7a90cf8a3a4f4f8ebe"],["/posts/a42e3f6d/index.html","e58d0b81aefd938f7309ac3ae11b89d0"],["/posts/a9438874/index.html","09da2f80e914f3ebe9f70fe552128e2d"],["/posts/ab3b7c7/index.html","2e1129b02f41d1bc404e820d6f7432dd"],["/posts/adb093cd/index.html","ddc2a8b1a37138f053c20d2d561cab75"],["/posts/b4b3bf4e/index.html","0f7b85f64ee45399784757c46e5a8002"],["/posts/b8685e49/index.html","1c2949b8e226dd64db1bc44b7c7d7814"],["/posts/baaef441/index.html","2e8543b0697c80c6a973e7b6720c972d"],["/posts/bbd06fa5/index.html","2989e26310ed8c03ae925ebe021b3296"],["/posts/be476180/index.html","104026bdbe18a7a92cdf813bdd41f84f"],["/posts/c4b6dbb9/index.html","81ca0307d4752ed0b3d13dbc9735b73e"],["/posts/c98d9940/index.html","ad7f4eef6a3a1a1336e76da52087d639"],["/posts/d2331223/index.html","adfe4c9ce989d8bab71dd5b42a03bc10"],["/posts/d5268b29/index.html","f5c2ed85634418544c55c50b2512f6b5"],["/posts/d7719dab/index.html","a410abbbaf8086d4ce88b3137aaf9ad2"],["/posts/dcc42dc3/index.html","a8bf621e3df944d026037ac747afde2d"],["/posts/de4de369/index.html","51667a8da00c527053a282802b30e667"],["/posts/ea42950b/index.html","a318d0ce8227f54168171d5a6c93730b"],["/posts/eac202c0/index.html","e8dbf6ccf014f496473d3b6658c06c9d"],["/posts/f3908263/index.html","17cb2f33c6c63ae86ed6f97c04ea826a"],["/posts/f46b70d8/index.html","ae7533d31a6b54a64ae4a9fff5636e91"],["/posts/f5e730b6/index.html","5a09e2a077005e0605115ad4f9350fd7"],["/posts/f6c5d65f/index.html","059a662e402d768b566823b676863b19"],["/posts/undefined/index.html","c48640fb7d318c04edb8c715a29078f3"],["/slider.e37972.js","42282189cbca9630d6e0a070940e67f1"],["/sw-register.js","aa94b7c36976b4554d20797bd15af07c"],["/tags/API/index.html","92453f7dfb41e1d7294ba953b20920bb"],["/tags/Appium/index.html","a532354aa5e41c4e4aef22c24b838d24"],["/tags/Charles/index.html","9d33a567c9a806188412447bf64461ef"],["/tags/Hexo/index.html","41cceaad9858398c6ca72527f53e1c8e"],["/tags/MQ/index.html","3d04e7966c881ae4049fe4a6a472bd31"],["/tags/MySQL/index.html","973dc8bdc8ea43a89e77e8d7ea911377"],["/tags/Python接口自动化测试/index.html","f9b1eb0b79cfb47316c214cc55f0c377"],["/tags/Python自动化/index.html","80d306cec8ed40037a84343e1df7b497"],["/tags/Shell脚本/index.html","e90318753c8e2922d997aee728b3232d"],["/tags/index.html","d288ee40240cb14e08bc65af25640728"],["/tags/postman/index.html","ad7ecf277df644a54892e088ae515d5a"],["/tags/postman/page/2/index.html","4f2107e302c34b2e3adba40edc7a7759"],["/tags/postman/page/3/index.html","c2254a92d696105b022a50758ee24fb7"],["/tags/博客/index.html","065003ffd43f81704b00028bc858cb70"],["/tags/性能测试/index.html","2843ae6922830ae7c672fd433c8a61cc"],["/tags/简历/index.html","da61f8aa7d4b6e616fe928cefdbe676a"],["/tags/自动化测试/index.html","6749b00a8c5a9b681cc1786fb25f5de1"]];
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
