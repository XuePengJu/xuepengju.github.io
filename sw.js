/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","c263fee4afe81f848c2883f5a7e1f64e"],["/archives/2020/08/index.html","d3cabb1e59d6069e0addff17d48dc6b1"],["/archives/2020/index.html","83579739ac386b9b74bd33c02ee3a02d"],["/archives/2021/02/index.html","d5da2c3084ba6ee01338607819c40e4f"],["/archives/2021/03/index.html","acdeb113383c9d8ac9aa384a915d00d0"],["/archives/2021/05/index.html","d001831b3cf108991ce43d56dd4d9811"],["/archives/2021/11/index.html","7b2722eeec6343dbcd31208f76229e8f"],["/archives/2021/12/index.html","ccf5ee2eb3fa8ab3143055d2fca68dcc"],["/archives/2021/12/page/2/index.html","cb09cb5d5ab41aba4f1a6151f8de184e"],["/archives/2021/index.html","8e5ee2d77de1ee4b3a00871de68c3bc0"],["/archives/2021/page/2/index.html","4d06e1e4ed58fc8034fa3ba6bbdc7992"],["/archives/2021/page/3/index.html","ada3ea4a3b4d8086c410ca773d7ad0e9"],["/archives/2022/01/index.html","4694609fefe139754541f9d2713d9a1c"],["/archives/2022/01/page/2/index.html","f7e4c9c7ed2ead55dc8effd3c3198334"],["/archives/2022/02/index.html","5bc285f8c8a3ac57ee6df5fd5dc583c3"],["/archives/2022/02/page/2/index.html","bb4435cf63b99db2d18614b4e568ffed"],["/archives/2022/05/index.html","b1a5ecd7df5a7e6fd73daeae47159000"],["/archives/2022/index.html","a7d134c9bab1e3d8f9e2f1176b850faa"],["/archives/2022/page/2/index.html","8bc97c5a0b43c8c6cea2138507dec580"],["/archives/2022/page/3/index.html","48f5f040516eba9a82e8c41a90307463"],["/archives/index.html","1fe8a300f2cd69b3364b9f77a2bdc789"],["/archives/page/2/index.html","0f83ed4dfefb754302de1eb0c5cc5b1d"],["/archives/page/3/index.html","e8a46149ca762f570a7cbd7390784160"],["/archives/page/4/index.html","b0a228c5d67490d84bb41258775c78c3"],["/archives/page/5/index.html","ee3c2c5755df3ac0c3eafd653c9f882d"],["/archives/page/6/index.html","d6d7307f0a029d007e18fd277b3f8010"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","44fd771b0f6d189eed3a78e916b63991"],["/categories/Charles/index.html","40f102a5a39d562c7b1ac66fc0ce4ecd"],["/categories/Hexo/index.html","76f2aceaa0267bbd7ed0dcab989a2ca7"],["/categories/MySQL/index.html","7e4f713c2116465fbcf6a3c06d59886f"],["/categories/Python接口自动化测试/index.html","c9d3fb0e80b559c0dc8784afa3f6e7f6"],["/categories/Python自动化/index.html","5d9cbfb580f5842899c330539d94fd91"],["/categories/Shell脚本/index.html","985d7c1974178f5467b41dd11745884a"],["/categories/index.html","8815b608443f69739968e437afd2b8c1"],["/categories/postman/index.html","95d713fa3d291c1440426a46638ce3cf"],["/categories/postman/page/2/index.html","10029376ea22bf9028406f3a36a04fcb"],["/categories/postman/page/3/index.html","849106a60ff370ee9c28561ba72fd863"],["/categories/性能测试/index.html","89a7859886269b8ac204b70784fc9bd0"],["/categories/技术积累/index.html","7361b63f4cf4aa5e0a7cd25f0d8792e7"],["/categories/简历/index.html","a8b3a933f891a6d751bcae8fe7d6e9a3"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/NFC/OpenWrt_Wifi.jpg","7428edaab587807cdf99fdca59ca0795"],["/img/NFC/WeChat.jpg","1a54b921e40a21d78c61c5354a3f6bce"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","90c46138caad97c5637899c9bda15856"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","0c8669b72973058ee6a301bba51890bd"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/main.0cf68a.js","d41d8cd98f00b204e9800998ecf8427e"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","4074af9d016d36f769501113745f2c3e"],["/page/3/index.html","d546e88fab3d66e4049d98ab7fa05dc5"],["/page/4/index.html","a843fd0229fb9f6dffaaba2008b714eb"],["/page/5/index.html","79941b214a535c13ec02c3940c240d4d"],["/page/6/index.html","f9cb2849771b73b110c4139f3149bff5"],["/posts/2173e2a4/index.html","05d2c0d18b625f5a520f4baf984ac32c"],["/posts/22131793/index.html","74072f522d8d76db01fea635f5319349"],["/posts/2ab40ef8/index.html","16b85e10ea92a3dbc35c313c26ef20bd"],["/posts/30fa304c/index.html","b3f8b435366242743b16cc13cf0ea6b9"],["/posts/3447541d/index.html","d09134cca087bef99419f760dcf48b18"],["/posts/3447554d/index.html","b60b190abd1a31644176d5dc8a79e96e"],["/posts/344e3c5b/index.html","7631fc88d81f6c0e4319f98d66723b72"],["/posts/3457ed69/index.html","ed5cd92e22b5658eb8cea8db54eb4665"],["/posts/39cb083c/index.html","e3360ec4fffec6832544ed11f06f35ee"],["/posts/3ba53770/index.html","628543a1aea116451460f6ba59e261dd"],["/posts/3bd3916a/index.html","7011d2a811c1835daa4e5142951c15ea"],["/posts/3e4105ad/index.html","8173402778a3ea1a84ae4fd000452e62"],["/posts/42f034cf/index.html","cd4e2834243c04d69f01e12ab9b20870"],["/posts/43b8c324/index.html","17170c700bd5a59ce1a12cc011b10948"],["/posts/54eecc7d/index.html","95cf7e5fafd8e310e95c5cc1dbf1237d"],["/posts/6172e27e/index.html","292f40624bed958a351c295706317bb7"],["/posts/6556c33b/index.html","cbda71b85c97f785ec6f7be4eb9f9cdc"],["/posts/66841aa6/index.html","5c2b5330a2f30955ed01406015c22fa0"],["/posts/689fc75c/index.html","9612aff90c726b9ba44155506a0a59e6"],["/posts/69423a58/index.html","1b116bf9dc9e5edb10ea0cf76782625a"],["/posts/69ae7450/index.html","aad09c965ee35c5dfb245f5ceb5d8865"],["/posts/7de15477/index.html","80214d7d74ea5f051b7a807783f42985"],["/posts/8a00d2ea/index.html","66d8edbad2a505841bdafce565534372"],["/posts/8aa14a73/index.html","979a991cae12bd97f477e485d3fc4569"],["/posts/8e85f61/index.html","58ea7c05585be8bcc26d3add464a02c2"],["/posts/96032b58/index.html","936148abfdde0019234497cb70606430"],["/posts/9656df9f/index.html","1560899336b3635b95b0703cc1ded884"],["/posts/99817e93/index.html","116eb19e9a4db10f35ab132a41eed862"],["/posts/9d1414ba/index.html","58e7d3103c2b4cd1ad4fb1a5bbfebea4"],["/posts/a3886b70/index.html","d086bd485b2fd535edd5b07950429279"],["/posts/a42e3f6d/index.html","0b0fc04931471490c18e7467be7664a1"],["/posts/a9438874/index.html","395eb1dbd4b831ea50cc7ad3d849f947"],["/posts/ab3b7c7/index.html","4c9db8b50c8b677418e1a76a8f565a11"],["/posts/adb093cd/index.html","769ee4eb5839d4578214f2d99d924f1a"],["/posts/b4b3bf4e/index.html","f0faba155f674938a0994f6fcf93b26c"],["/posts/b8685e49/index.html","31bb2abe9c2a52755989a02604f0f5b8"],["/posts/baaef441/index.html","8ffcae3cb0f9d4eff016e8d8c5870305"],["/posts/bbd06fa5/index.html","a1e20c426dd941275f4c62ec872533ce"],["/posts/be476180/index.html","d16ee3003003991d1e356225bfc9c87d"],["/posts/c4b6dbb9/index.html","4b5a1669dcab6d7c002bb8a01282a6a1"],["/posts/c98d9940/index.html","1e79e2b95eb045a03eb6fada5069d0d0"],["/posts/d2331223/index.html","cfec48b6f84808c719551889e7468985"],["/posts/d5268b29/index.html","8f9f146e5a7bcd33126a2c927bd50084"],["/posts/d7719dab/index.html","5a17e8b274dd80f73b39067cc959b720"],["/posts/dcc42dc3/index.html","c10faaf112e332083b7f44a37fffb4f0"],["/posts/de4de369/index.html","baeeaac6c5628226270101b225fb0a0e"],["/posts/ea42950b/index.html","8be2a6e25890c8442ce81f95aced01ff"],["/posts/eac202c0/index.html","af9ae95f43a05f0ba74a561143b6154f"],["/posts/f3908263/index.html","3c2da0f312507904054ddf9f62073272"],["/posts/f46b70d8/index.html","d1ecf1caf04d4cf7bd5110e55a4b7d06"],["/posts/f5e730b6/index.html","9b3b8119ce9fc97a02088dab0952e0c8"],["/posts/f6c5d65f/index.html","be93c5c114b854d2e08abdfec2a0ef84"],["/posts/undefined/index.html","746da654d7d84efe32ae39171658e309"],["/slider.e37972.js","42282189cbca9630d6e0a070940e67f1"],["/sw-register.js","32b5df6a6b36f571d8387ca3b828f4d6"],["/tags/API/index.html","d37c759ede0f2261f5b8e08e388e9581"],["/tags/Appium/index.html","965126baa4f81b2739169df4ac36de1e"],["/tags/Charles/index.html","21b1b5855c86eec07ae2c00180619f4f"],["/tags/Hexo/index.html","bd74407ab825771954462c7d35a072f9"],["/tags/MQ/index.html","3f081f6f08c3757d5c6ad199457646e2"],["/tags/MySQL/index.html","80eabcded5453f596e178daaec2f2d5a"],["/tags/Python接口自动化测试/index.html","41c36865fe368aa3642fbd04b4e102af"],["/tags/Python自动化/index.html","8ea1cbfd1c5e49166890183f610e12a3"],["/tags/Shell脚本/index.html","e3256f0dd303f2403e2c663da249bfd1"],["/tags/index.html","63c7d1eb27bef8540d9bfca9740b719e"],["/tags/postman/index.html","0de7b7dca84f9a69d17cb6d4d13b5e5f"],["/tags/postman/page/2/index.html","daf95cca8471579673215c027986d07e"],["/tags/postman/page/3/index.html","e24fb9879832236baba871d687d5cb23"],["/tags/博客/index.html","da4f2590bedb31c873cc559fa2faa81b"],["/tags/性能测试/index.html","62fe0648897b183324e5683b354775d3"],["/tags/简历/index.html","a3749e8300f3c5328fa604c2c1311d2f"],["/tags/自动化测试/index.html","6398cc22fafe8125016585d92ceaa728"]];
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
