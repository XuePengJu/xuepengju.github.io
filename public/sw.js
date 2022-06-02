/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","fd90517da640fb7ef5e64557e8285309"],["/archives/2020/08/index.html","2f91ceaae96226b85c96384f97fdf93d"],["/archives/2020/index.html","0137bfd70ce24aa4d2cc2d7d8aca4946"],["/archives/2021/02/index.html","355036ace42f5db463b6bc077175b36c"],["/archives/2021/03/index.html","ce9682f12a094e4e39e662af4042b3a6"],["/archives/2021/05/index.html","d69c990c6a62f07e8a7d99c020bc854d"],["/archives/2021/11/index.html","303f9aee04574c269491fdf3c71e4b92"],["/archives/2021/12/index.html","f4e7102f0594effd59107fc061ebdf5d"],["/archives/2021/12/page/2/index.html","b47c18e55c5752aaee532e973b06d897"],["/archives/2021/index.html","34f396dfac7be71ba5dc00eb395c2b47"],["/archives/2021/page/2/index.html","994bcd448f94a4c7c758d3eae5c76ddc"],["/archives/2021/page/3/index.html","67a9213e5c7cecade3443642cd215bd9"],["/archives/2022/01/index.html","10c6af86fd2f40abef832e27fadc0518"],["/archives/2022/01/page/2/index.html","d670bf9c62f48181203ac82340f0d989"],["/archives/2022/02/index.html","60bc63cfc5ff8e99c47a75ab161c0596"],["/archives/2022/02/page/2/index.html","2a013f9dc580b6b8b08aaf02cf7158e4"],["/archives/2022/05/index.html","47cce8eea78402f713e21bba4dcf8f6a"],["/archives/2022/06/index.html","2718d0f2c1d324b5ed0294d6442b1a92"],["/archives/2022/index.html","458b29d3b4a1f0f6e520f2ec775b1e3d"],["/archives/2022/page/2/index.html","8e616abc31c1dc042e4f93790351a8ef"],["/archives/2022/page/3/index.html","98f8a3ca601a93e312ab250586849baa"],["/archives/index.html","b84b60c50725fd258b17df26faf18998"],["/archives/page/2/index.html","7c4dfde45ca995e588a1d20f6bd4587b"],["/archives/page/3/index.html","cc3ef7fb0aad78e6d815148ad4542569"],["/archives/page/4/index.html","acea965678e5372a1d3a625a3e4d209f"],["/archives/page/5/index.html","a4150f8b6a2bc3042e6eb6e410ae371e"],["/archives/page/6/index.html","fe43cf7ffbca01e7b207c4a3d3ee3543"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/categories/Appium/index.html","fe850401a5ca67641cc515b157102273"],["/categories/Charles/index.html","71d736451107047d363df121b027df48"],["/categories/Hexo/index.html","3eaf186ee90751526a9d552c4fc47a23"],["/categories/MySQL/index.html","4739beffa629c747f72d3b8be24adedb"],["/categories/Python/index.html","eaa49299103c1b43ebfd652eb189603e"],["/categories/Python接口自动化测试/index.html","7fe307f3d57b9378d41e58d4a15e9226"],["/categories/Python自动化/index.html","32eb9d8435efdb3631f2f8b552cca25c"],["/categories/Shell脚本/index.html","b86c98bd81a4304e5bedd553b7f54ed7"],["/categories/index.html","3ff5b67fa437fcbcc0cc22f1725aa84a"],["/categories/postman/index.html","e31fcd386af8587fd4a876a7c385e0c4"],["/categories/postman/page/2/index.html","4e2b6c5111b31339b39c57948a5487a9"],["/categories/postman/page/3/index.html","29fde2c573229b17e8a66d1b78590754"],["/categories/性能测试/index.html","1b32b8584e80d9febaaa1862bc8121df"],["/categories/技术积累/index.html","8106bae47a6524303f42671426075329"],["/categories/简历/index.html","807f2b32fb94eb9a8733d45cd6a586b6"],["/fonts/default-skin.b257fa.svg","b257fa9c5ac8c515ac4d77a667ce2943"],["/fonts/iconfont.16acc2.ttf","16acc224814c0d6c148ded7cb177a44a"],["/fonts/iconfont.45d7ee.svg","e17f2a814d70be281cf24b352d19c77b"],["/fonts/iconfont.8c627f.woff","8c627f06971d77892bc4993913bc1397"],["/fonts/iconfont.b322fa.eot","b322fa278453eefe5a0ddd013fe6ee83"],["/fonts/tooltip.4004ff.svg","4004ff3ac3c95cea78dc6157afce6876"],["/img/1638799083784.png","be643089fd4d40b5d741eb9c6a754f4e"],["/img/1EE1E433-AB1C-436F-95B0-EFDA18C2BE82.png","0d77b36e403fe70baa785e7627f25fb2"],["/img/8B2FEFE6-9051-432B-BAED-7B76EFA85FE1.png","387ed5eccbd4708ea5113cc37afd2aed"],["/img/NFC/OpenWrt_Wifi.jpg","7428edaab587807cdf99fdca59ca0795"],["/img/NFC/WeChat.jpg","1a54b921e40a21d78c61c5354a3f6bce"],["/img/apifoxdemo.jpg","39fd3ac82dd6b8e20ec89fe1a0193c05"],["/img/avatar.png","90c46138caad97c5637899c9bda15856"],["/img/banner.png","9de6e1c4af078766bd8673dc5bf4f3f4"],["/img/blog/Python/1654162983.jpg","1c2eafe83366044ce4a82b7d98695d2e"],["/img/blog/Python接口自动化测试/1651595044388.png","2a6f5c4bb5796e09ae09c8e4fe5112dd"],["/img/blog/Python接口自动化测试/1651595166002.png","85b4d9086d71546eeca3b4fb3219f47a"],["/img/blog/Python接口自动化测试/1651732273876.png","16317e68e63eaed81a9aed287be6c558"],["/img/blog/postman/01/01.png","35cb5d096f8cdd6d689ed57c2204618f"],["/img/blog/postman/02/02-01.png","1e8ded2ccab6a55584410dbcc0f58f79"],["/img/blog/postman/02/02-02.png","af39e7e772d221a6e4fbc46ebb024f46"],["/img/blog/postman/03/03-01.png","1217e402d41ee39eb47f5df5c2daee75"],["/img/blog/postman/03/03-02.png","3868e767a78ec1443407bfecffe75192"],["/img/blog/postman/04/04-01.png","4f913a315615c7d55c6830ae7d35439f"],["/img/blog/postman/04/04-02.png","ac4e269a5409e6e5ee29294ab28b9ec8"],["/img/blog/postman/04/04-03.png","8eb2d57c7bab88638ada96b05b8464c4"],["/img/blog/postman/05/05-01.png","6dcd6dfa1655b19852a7cac8baede045"],["/img/blog/postman/05/05-02.png","aeb77c8901bcd944ad9fa166085fc9e2"],["/img/blog/postman/05/05-03.png","95061cb8da2c687b301443104e7db53e"],["/img/blog/postman/06/06-01.png","b9c1860153fc2be1829aca17b7a8e8cb"],["/img/blog/postman/06/06-02.png","96c12a69178286d4c0b84c67abb8c5ff"],["/img/blog/postman/06/06-03.png","3cdc7da7521f081c016a4b512c42c415"],["/img/blog/postman/06/06-04.png","c2c230df342b672354bb87ff43b08a03"],["/img/blog/postman/07/07-01.png","4309ecadb6d46d75d4c43c717f06bdb6"],["/img/blog/postman/07/07-02.png","12c823c0dbe1c9f2175738cd2bf94944"],["/img/blog/postman/07/07-03.png","51e96970d825c6064269675e4341021a"],["/img/blog/postman/08/08-01.png","660e4e6d1a7564e4e3e1d14c8fd06319"],["/img/blog/postman/08/08-02.png","2e965a95c0dd5d3ef2019b399d9a05cf"],["/img/blog/postman/09/09-01.png","1aa72a219d0988d88b3e8f5ed29eac4f"],["/img/blog/postman/09/09-02.png","26285cd0d0d630e8e073d7127bf458e5"],["/img/blog/postman/09/09-03.png","098cbfbe54d0319f0190e80860508374"],["/img/blog/postman/10/010-01.png","6e119300187a6f8a21808c9284e2d28a"],["/img/blog/postman/10/010-02.png","5dde606b21c3c33621bf1f0e3a24d618"],["/img/blog/postman/10/010-03.png","2301cea4764cfa4758597b2dc423b3f0"],["/img/blog/postman/10/010-04.png","79214fb46ecdd65a131f0da0a324fa02"],["/img/blog/postman/10/010-05.png","94bd1f1f4337e2b21e2c1c3d73a29a92"],["/img/blog/postman/10/010-06.png","5609ea01da1861c22f7484f1feb6cd17"],["/img/blog/postman/11/011-01.png","fb3cbfd3d54dda897b903cffa49cabc5"],["/img/blog/postman/11/011-02.png","a0e4aac9e257989ef2ee03b69c8563a8"],["/img/blog/postman/12/012-01.png","2ed0564d668b32861e97a6ea48fc7200"],["/img/blog/postman/12/012-02.png","fab52ecccc796bd6571339543ff8cc5a"],["/img/blog/postman/13/013-01.png","f2f2d2a4128997a108a1dd22acb9aa0d"],["/img/blog/postman/13/013-02.png","8d44fb7f8b1944401067478c714c6afb"],["/img/blog/postman/13/013-03.png","1923cbed1cb81dbd82fa092a7e9ce36c"],["/img/blog/postman/13/013-04.png","b6e73e5e5178b61e1214188ade2f142a"],["/img/blog/postman/13/013-05.png","aa3f37def7c0d55b30bb01feaf6039a6"],["/img/blog/postman/13/013-06.png","5d46a5378f416466dadba6b070b482ad"],["/img/blog/postman/14/014-01.png","d9a77c997f351b4138ed6d4168ebeb3e"],["/img/blog/postman/14/014-02.png","f810867ad53ba837f106d030533a4c66"],["/img/blog/postman/14/014-03.png","80b1e24dad59f45ff2f02cd1e20388b1"],["/img/blog/postman/14/014-04.png","346301bc90b0e655e8b1811e30a61a52"],["/img/blog/postman/14/014-05.png","7a05e832f447b8f8d3ce5b3fc865413f"],["/img/blog/postman/14/014-06.png","afaa2dfbe8ee5f9921384a2688af386b"],["/img/blog/postman/14/014-07.png","e94a3c48f4bc98c545d8b008fd1a6202"],["/img/blog/postman/14/014-08.png","b0d656570267180e8d47fd94c6c41d6b"],["/img/blog/postman/14/014-09.png","5e16d993b630379db108a78e4ccd1c1d"],["/img/blog/postman/14/014-10.png","cd9f0fa4a87c08fa9207ce723cfea7b1"],["/img/blog/postman/14/014-11.png","e6b0295325450901401835cf8b0a97ef"],["/img/blog/postman/14/014-12.png","f8972d3622bdadad37c5f36ec02bfd73"],["/img/blog/postman/14/014-13.png","bc39fc2be524bd138ae7d3dffb52c9de"],["/img/blog/postman/14/014-14.png","f75dffea5caaf0875ed05e8e7d80b74c"],["/img/blog/postman/15/015-01.png","b55c6021b574ae1fd3f16fa5b1435d5f"],["/img/blog/postman/15/015-02.png","234c0811ea010070ffe0ac450ea712c0"],["/img/blog/postman/15/015-03.png","0bcd284d0ec0f6d851dd228714eb96d6"],["/img/blog/postman/15/015-04.png","e5695857bbeefa9da3a92c21b17ede62"],["/img/blog/postman/16/016-01.png","db67296489e0cf2b2e3071f362253335"],["/img/blog/postman/18/018-01.png","22549a4cbd97707af55c944cf2b6513a"],["/img/blog/postman/19/019-01.png","c03a23faf3b03e27139bc980758e4e99"],["/img/blog/postman/19/019-02.png","94dfaf51ce7f57188d54c6381cd06b5b"],["/img/blog/postman/20/020-01.png","e419d15232cf7e964f104fab53b08201"],["/img/blog/postman/20/020-02.png","bc8d2de7d04e6ab49a3f959b6485a039"],["/img/blog/postman/20/020-03.png","65eb03746ce4041b3d33d3b313da3b1d"],["/img/blog/postman/21/021-01.png","af548ce34511794327113b2fcdd29660"],["/img/blog/postman/21/021-02.png","d306f24bbfd395c85f01d471087e251f"],["/img/blog/postman/21/021-03.png","362175bfc728195248d8dab26e3c38b3"],["/img/blog/postman/21/021-04.png","ff464c7a34c0aede09e0d9edf0a343ee"],["/img/blog/postman/21/021-05.png","8f2522f7ba08257d9de3b2824644c866"],["/img/blog/postman/21/021-06.png","a63c83689cba7a02c9ea9c68a2f9552a"],["/img/charles_20220101225450.png","a3062939b588d926780666392eae59dd"],["/img/ddsnto_step.png","a4b2c4e34d52ccfcc568e19995c0baf1"],["/img/default-skin.png","e3f799c6dec9af194c86decdf7392405"],["/img/environment/1895590-20200229210636360-1610818154.png","25af5ae2020e1ccb3628efffbe9fec22"],["/img/environment/1895590-20200229210702614-864284209.png","acafa8786f32200381e955de771b0e93"],["/img/environment/1895590-20200229210742813-1698355068.png","73ef74445bc6056f6784988288a1cc6b"],["/img/environment/1895590-20200229210835166-2050290710.png","b9f47c782db891d8017376c37e39649f"],["/img/environment/1895590-20200229210909009-805568491.png","16fd319ec921d1e28521692d823b90fb"],["/img/environment/1895590-20200229211000223-187798199.png","8b54088506cc5ba14e61f4857f400fdb"],["/img/environment/1895590-20200229211014622-396878393.png","d65be8ff8a10ae90d553f23baed7f92b"],["/img/environment/1895590-20200229211032271-1280305583.png","749502b6444f5ce584a8bcf1c30febca"],["/img/favicon.png","90c46138caad97c5637899c9bda15856"],["/img/preloader.gif","e34aafbb485a96eaf2a789b2bf3af6fe"],["/img/scrollbar_arrow.png","be5381cedbd6b778b1d92e224fd71cf7"],["/index.html","92a21a501167b2a8501b58ca9596aa57"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/main.0cf68a.css","fdbb1cf0019c2ddc8db0876049eed25f"],["/main.0cf68a.js","d41d8cd98f00b204e9800998ecf8427e"],["/mobile.992cbe.js","01186626950c95a21f780c7728a095d5"],["/page/2/index.html","f7f39c31d7ba0ff253c2467bd8dfa274"],["/page/3/index.html","2908a082bffe1961b2ee0b5e1041da62"],["/page/4/index.html","2a60a7e8d2120cc2a51cb5f3976338f1"],["/page/5/index.html","fcddfa2809d104d7671ad951bc45bb5d"],["/page/6/index.html","698543470e96898540d20b22fe9675a2"],["/posts/2173e2a4/index.html","d7701395a3a40a79ca64f002766e514e"],["/posts/22131793/index.html","8e667f9f83ea9fb39027936ca08e334d"],["/posts/2ab40ef8/index.html","9d26a754fe4076fd9ce6f5363450d66d"],["/posts/30fa304c/index.html","12f5b1e379fea7d4bd4120058caccebe"],["/posts/3447541d/index.html","51adba937429c77ebdb309309ede3fe0"],["/posts/3447554d/index.html","74299aa976daaa60dccb843f299ab15b"],["/posts/344e3c5b/index.html","fe9f58938e736f7703396fdad1efa279"],["/posts/3457ed69/index.html","8fef8692ad934672929d59f24c2c7525"],["/posts/39cb083c/index.html","48468f85712c9556fb8bb626d17ddf27"],["/posts/3ba53770/index.html","173e0548199f1050d30840902b6f31a3"],["/posts/3bd3916a/index.html","8f53f0968be33f39f8a6b02594379dab"],["/posts/3e4105ad/index.html","a01b2e59e970ec2b17137bd7da57590f"],["/posts/42f034cf/index.html","ec8643df7110b6b01444fea624b222c4"],["/posts/43b8c324/index.html","d28c899f4b28386d86b06aac62b7f463"],["/posts/448d76bd/index.html","a46b4e20d1b702ab81d701295a3d85b6"],["/posts/54eecc7d/index.html","90709917c105bd3f794de72fa44d19a9"],["/posts/6172e27e/index.html","0ebc3255c91dfd740b6f87624e33877e"],["/posts/6556c33b/index.html","6a39fffcdd2d205ad36ea05ad6cedbb9"],["/posts/66841aa6/index.html","db58f3074e2cb449be31e1e901050636"],["/posts/689fc75c/index.html","20366920b2236cc05d38f14f3f0e81ac"],["/posts/69423a58/index.html","8bdd91d9455181c5311c172b083abefb"],["/posts/69ae7450/index.html","c2e7210143b054e7e3291162b9d888c8"],["/posts/6eec70c5/index.html","d8f5dda5110e317fa8a60fdd927990a7"],["/posts/7de15477/index.html","afded53d7ee287cc9fe266da390a242c"],["/posts/8a00d2ea/index.html","6dd26998b239afdefa9365d00fad041b"],["/posts/8aa14a73/index.html","b0604f8987748ebd3cb897798e5d5154"],["/posts/8e85f61/index.html","92eddfeb191fca2c6d8f6e49e2dce338"],["/posts/96032b58/index.html","680c0ab123bd18b1923d3ecbaa135fca"],["/posts/9656df9f/index.html","b793fa0db273f3c985631a3d53fa6522"],["/posts/99817e93/index.html","aa2683b5b54d5b4993c13fc0dcae1675"],["/posts/9d1414ba/index.html","c1e31b843b20fb18915982ccaf2ae16f"],["/posts/a3886b70/index.html","f82087e4de87abb818957fcd1c30b23b"],["/posts/a42e3f6d/index.html","fc864bacde0fd90b3d1ea452d609c41e"],["/posts/a9438874/index.html","3dc9f5148a4ddd1e18ccb300126abb6a"],["/posts/ab3b7c7/index.html","ff42ebaec5942f1fe10e75977631e9e6"],["/posts/adb093cd/index.html","0bc1edb880fddbf1a846d02067893603"],["/posts/b4b3bf4e/index.html","f0da6e49e9955489f2fd7056bcdacf4f"],["/posts/b8685e49/index.html","faf1fe1e27a964058f1210361b4a3d92"],["/posts/baaef441/index.html","2e639eb19acb93c59a22c976379c7be4"],["/posts/bbd06fa5/index.html","fcfa1bbeda41b57a4ceee07a2c190842"],["/posts/be476180/index.html","b4976a408340b06916441f88f706fca6"],["/posts/c4b6dbb9/index.html","a161bfb7075db63627684f9607294c6a"],["/posts/c98d9940/index.html","316810a624dcb4d163977e1d7fc30f73"],["/posts/d2331223/index.html","31b66e37df5fc4ab73bea2b57facb17b"],["/posts/d5268b29/index.html","aea72cede596f8e70b09e72274d855c0"],["/posts/d7719dab/index.html","db80729b33fe3043db167938198402a1"],["/posts/dcc42dc3/index.html","b399a3a23547af7ef87585b437331b88"],["/posts/de4de369/index.html","b72a25fa8382d00cfd0d1b33dd9f4162"],["/posts/ea42950b/index.html","192208b90347df0ff0d4a98991dbe33b"],["/posts/eac202c0/index.html","eaec47e31a40bde2af4c542560098c8e"],["/posts/f3908263/index.html","b4f906f81719da76fff5ddd370950c6f"],["/posts/f46b70d8/index.html","f06506e48d4bc5e52f2d8d5dd7d793e8"],["/posts/f5e730b6/index.html","68563a2d6401d6a4cbab5e1e3014b089"],["/posts/f6c5d65f/index.html","50324d1aaf7528f02800c9d26eaca758"],["/posts/undefined/index.html","f228bf47a7d7f0bfa82a94f920105310"],["/slider.e37972.js","42282189cbca9630d6e0a070940e67f1"],["/sw-register.js","2b1f2d22f44dc341a9b75ab19249a36d"],["/tags/API/index.html","74700c2b1c4bcf53c248cf3008a2a2c9"],["/tags/Appium/index.html","893500c9b1d87691a1b94c26fa5d9e4d"],["/tags/Charles/index.html","3040a0670c71939b4bf6c32142f39758"],["/tags/Hexo/index.html","f3b1c03565e7afa12dc908a17c8cedde"],["/tags/MQ/index.html","e3d3ba03b97adcb397dd5d64492a89bb"],["/tags/MySQL/index.html","1c3188459fbb8d9ba220989909c54405"],["/tags/Python/index.html","288392dca056d6f87e5e583cfad531b0"],["/tags/Python接口自动化测试/index.html","eafc943ee6ba57a1b5acc6a32e6d48a1"],["/tags/Python自动化/index.html","3e000866e26ad0a764ca95624416680b"],["/tags/Shell脚本/index.html","53cd7bd8a70202e0f43d3d00e70a6a74"],["/tags/index.html","e7e572f79b290238be35486f157ad9a5"],["/tags/postman/index.html","2715969feac7d60e595341e3f1faaff1"],["/tags/postman/page/2/index.html","05c4b2865f30b2ff372427e24cfe0c61"],["/tags/postman/page/3/index.html","05a3f611a4ccc66650f5b6ae4dd21032"],["/tags/博客/index.html","26ff247a0b7429a0674ca3ed06981965"],["/tags/性能测试/index.html","cbe6a1b6ddb506282b83f916fce2f437"],["/tags/简历/index.html","11b2280d576a5edc8543bd566c0ba3df"],["/tags/自动化测试/index.html","46e37dee47be94f587f1b50f8287b545"]];
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
