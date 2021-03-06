import Mock from 'mockjs';

const Random = Mock.Random;

const data = {
    announcement: '今日上架的图书全部8折',
    slides: [
        {
            id: 1, imgUrl: require('./assets/img/sliders/t1.svg')
        }, {
            id: 2, imgUrl: require('./assets/img/sliders/t2.svg')
        }
    ],
    latestUpdated: [{
        "id": 1,
        "title": "揭开数据真相：从小白到数据分析达人",
        "authors": [
            "Edward Zaccaro, Daniel Zaccaro"
        ],
        "imgUrl": require('./assets/img/covers/1.svg')
    }, {
        "id": 2,
        "title": "Android 高级进阶",
        "authors": [
            "顾浩鑫"
        ],
        "imgUrl": require('./assets/img/covers/2.svg')
    }, {
        "id": 3,
        "title": "淘宝天猫电商运营与数据化选品完全手册",
        "authors": [
            "老夏"
        ],
        "imgUrl": require('./assets/img/covers/3.svg')
    },
        {
            "id": 4,
            "title": "大数据架构详解：从数据获取到深度学习",
            "authors": [
                "朱洁",
                "罗华霖"
            ],
            "imgUrl": require('./assets/img/covers/4.svg')
        },
        {
            "id": 5,
            "title": "Meteor全栈开发",
            "authors": [
                "杜亦舒"
            ],
            "imgUrl": require('./assets/img/covers/5.svg')
        },
        {
            "id": 6,
            "title": "Kubernetes权威指南：从Docker到Kubernetes实践全接触（第2版）",
            "authors": [
                "龚正",
                "吴治辉",
                "王伟",
                "崔秀龙",
                "闫健勇"
            ],
            "imgUrl": require('./assets/img/covers/6.svg')
        }],
    recommended: []
}

Mock.mock('/api/home', 'get', data);