/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","a9372752e7466c53d60bcfe5a8520979"],["/archives/2020/08/index.html","94da236f74467a28a0c8210666856263"],["/archives/2020/index.html","c7e717f2a69bf72eb89062af44790ebd"],["/archives/2021/02/index.html","3eb008985ac392cc16259cd9960cc098"],["/archives/2021/03/index.html","e9f939066a154ca19861dde04f11f807"],["/archives/2021/05/index.html","82198d942d69c95b66d1db678585eb58"],["/archives/2021/11/index.html","3983b1673d9605d08ba80673df4b9be9"],["/archives/2021/12/index.html","1200e7001c62edc40696e949f29e1799"],["/archives/2021/12/page/2/index.html","99f8d520a7ecf7f4965f5e2a23a0d309"],["/archives/2021/index.html","278ec389e024b2377f414a040ed455ef"],["/archives/2021/page/2/index.html","8c3bff091ead74491671fcc3742c5f4f"],["/archives/2021/page/3/index.html","d0567e36ffa0023cd59fbcb4a010c5a7"],["/archives/2022/01/index.html","a19e865aaeea7028a957bd109a0794b1"],["/archives/2022/01/page/2/index.html","59236d3aab811ae4e8c9cc5bc206346a"],["/archives/2022/02/index.html","c94c631ac1b46b60eba6dac2796ae7f8"],["/archives/2022/02/page/2/index.html","1c8aa5cdb1078ba8d0f3f0715ca2384c"],["/archives/2022/05/index.html","4605d092a736741e5cc67da5694e358e"],["/archives/2022/index.html","5db100f8038e85a291b722dca60929ea"],["/archives/2022/page/2/index.html","ed2ca01a1bb1c2fa90d769456505cdc7"],["/archives/2022/page/3/index.html","e1cb1a0fec09b65f82f2f803828ce39f"],["/archives/index.html","8aa2d5c6c4dcc19208ee5532988055f8"],["/archives/page/2/index.html","a78717f25539bd69dc8360628dcb37cd"],["/archives/page/3/index.html","b63bb8a2b273827c4938aa946741b5f4"],["/archives/page/4/index.html","e6f08cb0615aa9c26beb821370aae9fa"],["/archives/page/5/index.html","02ba6b91fab042bb24775d7106a4bac9"],["/archives/page/6/index.html","35bbc5883fa2017f877160b036b96a1b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","eb92d764511e3d7f1049fbbdb7d14ae9"],["/categories/Charles/index.html","5d1b71f3ed08ba75397e17cd41c302be"],["/categories/Hexo/index.html","171df05df2779c8fe6d2b4e02db91907"],["/categories/MySQL/index.html","fb2408d582a75bc71ad3a5acbdb43d02"],["/categories/Python接口自动化测试/index.html","22b433775533268a484fe68d3332c305"],["/categories/Python自动化/index.html","fd6578fd617b99b8613afaca6bb4fddb"],["/categories/Shell脚本/index.html","ce68b5c77958729064a0e1e3c77f25bb"],["/categories/index.html","84da6b3addc90967e98f28c586ae1099"],["/categories/postman/index.html","045e6ea2c91b072a5bb63832d798956b"],["/categories/postman/page/2/index.html","2ed7194bf325dac4be4b663a60313224"],["/categories/postman/page/3/index.html","3bdfd61a6ffe72fa4231c619f2cb90a7"],["/categories/性能测试/index.html","14e8669f6ce253ca8bdf3dba7353c499"],["/categories/技术积累/index.html","22015dbe20e77c21c4362816353c2d86"],["/categories/简历/index.html","ca0e4713c9d1cf72a046397c9114b360"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/NFC/OpenWrt_Wifi.jpg","7428edaab587807cdf99fdca59ca0795"],["/img/NFC/WeChat.jpg","1a54b921e40a21d78c61c5354a3f6bce"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","90c46138caad97c5637899c9bda15856"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","352074753a2d15d7de1652a3ff30a4ba"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/main.0cf68a.js","d41d8cd98f00b204e9800998ecf8427e"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","048ac87270662cecfc5f1f3c16c33149"],["/page/3/index.html","fab5bdf398d493a83cbe8124d87fc954"],["/page/4/index.html","31b2360ee74e79546ae4a3ebde498259"],["/page/5/index.html","3355ace4af44b3f714237e624ac84adf"],["/page/6/index.html","5bc227445bfb13b7cc83e8b41ab407c2"],["/posts/2173e2a4/index.html","7f8e79345ed2f63710786c4f4db40d94"],["/posts/22131793/index.html","b195c0d82276a1ad6fafbbccefaa9dc8"],["/posts/2ab40ef8/index.html","611970bcfa55e48facf36094251d58a6"],["/posts/30fa304c/index.html","575cd41f1bc1316361e772757a9878d2"],["/posts/3447541d/index.html","bd51ff8b8f53928af582d43c22c28ccb"],["/posts/3447554d/index.html","fa54be6324e7ed187414a3f4e2eb4f21"],["/posts/344e3c5b/index.html","1b3542f18ea6348335756f474aa39c55"],["/posts/3457ed69/index.html","a54722ed6b4bc7e8933b41793bb6dcfb"],["/posts/39cb083c/index.html","6fc96dd4f0f860730e59a2ff315685bd"],["/posts/3ba53770/index.html","f36c456e263de466ac2e24f4a5532894"],["/posts/3bd3916a/index.html","621fd6caa94ea3599b4e8c7df16dc18b"],["/posts/3e4105ad/index.html","93bd835aa6183792f69e82cd57ca6132"],["/posts/42f034cf/index.html","587f367c0a54114937ea9ac69a9ff790"],["/posts/43b8c324/index.html","fcd5159d10ad25accee3e69945975d0d"],["/posts/54eecc7d/index.html","5f708c3a00ce7549ae9c9c6c29b33d56"],["/posts/6172e27e/index.html","780213bebb670112216a436158cdde66"],["/posts/6556c33b/index.html","f1b285e0f3838f79d6bb0cbb9e867776"],["/posts/66841aa6/index.html","179636e2dc30f27af341d361dfb15ed3"],["/posts/689fc75c/index.html","aae9e1a8444969cce4e397ad0ece710c"],["/posts/69423a58/index.html","1dad075d018f7aa77f4dcde11fd82ab0"],["/posts/69ae7450/index.html","bbb1fdf36ac1a1da5b6aef6d5ce0f9e8"],["/posts/7de15477/index.html","a833a30730400c44d317a7aeb478d100"],["/posts/8a00d2ea/index.html","5bb08569393b224d8323d16c419e2185"],["/posts/8aa14a73/index.html","2bc224d85192db5ce2e9e5836798430c"],["/posts/8e85f61/index.html","8376ee0f2a7eed6ea90bfc8235ee0a2d"],["/posts/96032b58/index.html","f7c1e0e0f1a4e917d8b6d296d2c3585c"],["/posts/9656df9f/index.html","56c7f0fd90250b306cc3dd4175e1448b"],["/posts/99817e93/index.html","bd727e78cc282d60670030edab7824c8"],["/posts/9d1414ba/index.html","af9412403c17b0958554b9976f691994"],["/posts/a3886b70/index.html","f195766e5c279069d0b4f93ef6f9bc7e"],["/posts/a42e3f6d/index.html","a6c63b65eda3cc2316371f3bec9f4acc"],["/posts/a9438874/index.html","6ef483c7bc3b8480b2acd1c92371d17d"],["/posts/ab3b7c7/index.html","b311ab497392f2468b216743dc1e8fba"],["/posts/adb093cd/index.html","2e6e95a1fd49d06b1eaac1c54d8962f4"],["/posts/b4b3bf4e/index.html","d511e789ee6fdc9e583cd417c18f9e5c"],["/posts/b8685e49/index.html","42db9bd5ef10cf33d8ec4bf78cc7f3a0"],["/posts/baaef441/index.html","669e4436667c69ad1049ded84128b648"],["/posts/bbd06fa5/index.html","6d0b880258976f1e9e1a85022ae834e9"],["/posts/be476180/index.html","e41f2d1e419b404ac266c951a3ab4ff7"],["/posts/c4b6dbb9/index.html","3b461d7e08e8ad1fde5a7fa4f5fb2b82"],["/posts/c98d9940/index.html","bce4e9508e69f6d3202c38cf653f25e1"],["/posts/d2331223/index.html","e18ff187152f7d53c5e3f6afb63fac11"],["/posts/d5268b29/index.html","9d3260be7c956ebfd3fc152dcd7a09c3"],["/posts/d7719dab/index.html","ecf7ea689f9fc483879099fa6fb77335"],["/posts/dcc42dc3/index.html","fd10093d16d4f777b2ff07bb62c8db75"],["/posts/de4de369/index.html","6ffd3058127cf638a69a2850b883be2e"],["/posts/ea42950b/index.html","d8a4f4595062dbac44c38bb8b0672b28"],["/posts/eac202c0/index.html","7769ca0253f7e17deb144304d277e7ff"],["/posts/f3908263/index.html","3ed71f43a395b55357497acbaf65edb3"],["/posts/f46b70d8/index.html","163e1505bf79cd1db03a563c5c269837"],["/posts/f5e730b6/index.html","b05d23355e86ed0d5912b833dbd3d321"],["/posts/f6c5d65f/index.html","ce9e9e9a5943d8fbd035eb03dda77662"],["/posts/undefined/index.html","e93f469691a7905ef0a7d4b140b9792c"],["/slider.e37972.js","42282189cbca9630d6e0a070940e67f1"],["/sw-register.js","f60378f4925aaa61850afa261399b362"],["/tags/API/index.html","198b53b4b83c61ee88ea7282e6c107e7"],["/tags/Appium/index.html","c70d85528c3b297d8fe86d1e5a69fd33"],["/tags/Charles/index.html","d711f56fbf69f1ec86f5d2fc38ea157f"],["/tags/Hexo/index.html","7e5b064161a1ef6c4e1e997b9ac0ffaf"],["/tags/MQ/index.html","169ee1a0fdbc30e8c7dca01d1fac60dd"],["/tags/MySQL/index.html","495c3e60860ed26f3d5fc486db2f26fe"],["/tags/Python接口自动化测试/index.html","0f4817ca8f967b9571bf6be212f0a874"],["/tags/Python自动化/index.html","dc23c707db15adc528d78df9507b5dba"],["/tags/Shell脚本/index.html","3f3d2881f38eb31e492092075d4015aa"],["/tags/index.html","6a9769543c5bb369aac5303605d5d784"],["/tags/postman/index.html","0fb6673861d7762ab2005f11d20d647a"],["/tags/postman/page/2/index.html","199f031f277815adab79d9fb77038541"],["/tags/postman/page/3/index.html","ff19d7ee99b8711245a37121fc966892"],["/tags/博客/index.html","c4c0499d59cc977da1304ef2c0d4e72c"],["/tags/性能测试/index.html","1291ce099f2dc659b05a5f9f00c3815e"],["/tags/简历/index.html","cf91545f6e6d77459bb2557b9e7d090d"],["/tags/自动化测试/index.html","fb456e9a55585d424c5e75009647f8cd"]];
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
