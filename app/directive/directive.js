app.directive('login', [function() {
        return {
            restrict: 'EAMC',
            template: `<ul>
                        <li>登录名: <input type="text" ng-model="name" placeholder="  请输入用户名"></li>
                        <li>密码: <input type="password"  ng-model="pass" placeholder="  请输入密码"></li>
                        {{error1}}
                        <li>
                            <button id='btn' ng-click="deng(name,pass)">登录</button>
                            <button ui-sref="enroll">注册</button>
                        </li>
                    </ul>`,
            controller: 'login'
        }
    }])
    .directive('enroll', [function() {
        return {
            restrict: 'EAMC',
            template: ` <ul>
                    <li>登录名: <input type="text" ng-model="name1" placeholder="  请输入用户名">{{error}}</li>
                    <li>密码: <input type="password"  ng-model="pass1" placeholder="  请输入密码"></li>
                    <li>
                        <button class="enrollBtn" ng-click="zc(name1,pass1)">注册</button>
                    </li>
                </ul>`
        }
    }])