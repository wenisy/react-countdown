'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var Countdown = /** @class */ (function (_super) {
    __extends(Countdown, _super);
    function Countdown() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.mounted = false;
        _this.state = {
            durationTime: _this.props.duration,
        };
        _this.startCount = function () {
            _this.countdown();
            _this.interval = setInterval(_this.countdown, _this.props.intervalSecond * 1000);
        };
        _this.countdown = function () {
            var durationTime = _this.state.durationTime;
            if (durationTime <= 0) {
                clearInterval(_this.interval);
                _this.mounted && _this.setState({ durationTime: _this.props.duration });
            }
            else {
                _this.mounted && _this.setState({ durationTime: durationTime - 1 });
            }
        };
        return _this;
    }
    Countdown.prototype.componentDidMount = function () {
        this.mounted = true;
        this.props.autoTrigger && this.startCount();
    };
    Countdown.prototype.componentDidUpdate = function (prevProps) {
        if (this.props.detectChanges !== prevProps.detectChanges) {
            clearInterval(this.interval);
            this.setState({ durationTime: prevProps.duration }, this.startCount);
        }
    };
    Countdown.prototype.componentWillUnmount = function () {
        clearInterval(this.interval);
        this.mounted = false;
    };
    Countdown.prototype.render = function () {
        var durationTime = this.state.durationTime;
        var isCounting = durationTime !== this.props.duration && durationTime !== 0;
        return this.props.children(isCounting, durationTime, this.startCount);
    };
    return Countdown;
}(React.Component));

exports.Countdown = Countdown;
//# sourceMappingURL=index.js.map
