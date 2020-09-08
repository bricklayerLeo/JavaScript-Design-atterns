//validator.js
class Validator {
    validateResult = []; //所有规则校验的结果塞到这个数组中

    strategys = {//所有的规则定义在这个对象中,如有新的校验规则,在这里面添加,若规则有变动,在这里修改
        isEmpty: function (value, errMsg) {
            if (!value) {
                return errMsg
            }
        },

        maxLength: function (value, length, errMsg) {
            if (value.trim().length > length) {
                return errMsg
            }
        }
    }

    check(value, rules) { //value:要校验的值,rules:该值有哪些校验规则,比如dealerName字段,既不能是空的,长度也不能超过12,此时rules中就有两个规则传进来
        for (let i = 0; i < rules.length; i++) {
            let rule = rules[i];
            let strategyArry = rule.strategy.split(':');
            let errMsg = rule.errMsg;
            let strategy = strategyArry.shift();
            strategyArry.unshift(value);
            strategyArry.push(errMsg);
            this.validateResult.push(this.strategys[strategy].apply(value, strategyArry)); //遍历规则后,将结果扔进数组
        }
    }
    checkResult() { //遍历结果数组,若有值,则返回错误提示的信息
        for (let i = 0; i < this.validateResult.length; i++) {
            let errMsg = this.validateResult[i];
            if (errMsg) {
                return errMsg
            }
        }
    }
}

export {
    Validator
}