(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*global $ */


var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddFoodActions = function () {
    function AddFoodActions() {
        _classCallCheck(this, AddFoodActions);

        this.generateActions('addFoodSuccess', 'addFoodFail', 'updateName', 'updateCategory', 'updatePhase', 'invalidName', 'invalidCategory', 'invalidPhase');
    }

    _createClass(AddFoodActions, [{
        key: 'addFood',
        value: function addFood(name, category, phase) {
            var _this = this;

            $.ajax({
                type: 'POST',
                url: '/api/food',
                data: {
                    name: name,
                    category: category,
                    phase: phase
                }
            }).done(function (data) {
                _this.actions.addFoodSuccess(data.message);
            }).fail(function (jqXhr) {
                _this.actions.addFoodFail(jqXhr.responseJSON.message);
            });
        }
    }]);

    return AddFoodActions;
}();

exports.default = _alt2.default.createActions(AddFoodActions);

},{"../alt":7}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*global $ */


var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FoodActions = function () {
    function FoodActions() {
        _classCallCheck(this, FoodActions);

        this.generateActions('getFoodSuccess', 'getFoodFail');
    }

    _createClass(FoodActions, [{
        key: 'getFood',
        value: function getFood(FoodId) {
            var _this = this;

            $.ajax({
                url: '/api/food?id=' + FoodId
            }).done(function (data) {
                _this.actions.getFoodSuccess(data);
            }).fail(function (jqXhr) {
                _this.actions.getFoodFail(jqXhr);
            });
        }
    }]);

    return FoodActions;
}();

exports.default = _alt2.default.createActions(FoodActions);

},{"../alt":7}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*global $ */


var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var log = '../../utils/logger';

var FoodListActions = function () {
    function FoodListActions() {
        _classCallCheck(this, FoodListActions);

        this.generateActions('getFoodsSuccess', 'getFoodsFail');
    }

    _createClass(FoodListActions, [{
        key: 'getFoods',
        value: function getFoods(payload) {
            var _this = this;

            log.debug('getFoods: ' + payload);
            var url = '/api/phase';
            var params = {
                phase: 7
            };

            if (payload.phase) {
                params.phase = payload.phase;
            }
            if (payload.category) {
                params.category = payload.category;
            }

            log.debug('Calling url, params', url, params);
            $.ajax({ url: url, data: params }).done(function (data) {
                log.debug('Success getting foods: ', data);
                _this.actions.getFoodsSuccess(data);
            }).fail(function (jqXhr) {
                _this.actions.getFoodsFail(jqXhr);
            });
        }
    }]);

    return FoodListActions;
}();

exports.default = _alt2.default.createActions(FoodListActions);

},{"../alt":7}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterActions = function FooterActions() {
    _classCallCheck(this, FooterActions);

    this.generateActions();
};

exports.default = _alt2.default.createActions(FooterActions);

},{"../alt":7}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeActions = function HomeActions() {
    _classCallCheck(this, HomeActions);

    this.generateActions();
};

exports.default = _alt2.default.createActions(HomeActions);

},{"../alt":7}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*global $ */


var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarActions = function () {
    function NavbarActions() {
        _classCallCheck(this, NavbarActions);

        this.generateActions('updateOnlineUsers', 'updateAjaxAnimation', 'updateSearchQuery', 'getFoodCountSuccess', 'getFoodCountFail', 'findFoodSuccess', 'findFoodFail');
    }

    _createClass(NavbarActions, [{
        key: 'findFood',
        value: function findFood(payload) {
            var _this = this;

            $.ajax({
                url: '/api/foods/search',
                data: {
                    name: payload.searchQuery
                }
            }).done(function (data) {
                (0, _underscore.assign)(payload, data);
                _this.actions.findFoodSuccess(payload);
            }).fail(function () {
                _this.actions.findFoodFail(payload);
            });
        }
    }, {
        key: 'getFoodCount',
        value: function getFoodCount() {
            var _this2 = this;

            $.ajax({
                url: '/api/foodlist/count'
            }).done(function (data) {
                _this2.actions.getFoodCountSuccess(data);
            }).fail(function (jqXhr) {
                _this2.actions.getFoodCountFail(jqXhr);
            });
        }
    }]);

    return NavbarActions;
}();

exports.default = _alt2.default.createActions(NavbarActions);

},{"../alt":7,"underscore":"underscore"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default();

},{"alt":"alt"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AddFoodStore = require('../stores/AddFoodStore');

var _AddFoodStore2 = _interopRequireDefault(_AddFoodStore);

var _AddFoodActions = require('../actions/AddFoodActions');

var _AddFoodActions2 = _interopRequireDefault(_AddFoodActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AddFood = function (_React$Component) {
    _inherits(AddFood, _React$Component);

    function AddFood(props) {
        _classCallCheck(this, AddFood);

        var _this = _possibleConstructorReturn(this, (AddFood.__proto__ || Object.getPrototypeOf(AddFood)).call(this, props));

        _this.state = _AddFoodStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(AddFood, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _AddFoodStore2.default.listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _AddFoodStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();

            var name = this.state.name.trim();
            var category = this.state.category;
            var phase = this.state.phase;

            if (!name) {
                _AddFoodActions2.default.invalidName();
                this.refs.nameTextField.focus();
            }

            if (!category) {
                _AddFoodActions2.default.invalidCategory();
            }

            if (!phase) {
                _AddFoodActions2.default.invalidPhase();
            }

            if (name && category && phase) {
                _AddFoodActions2.default.addFood(name, category, phase);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'row flipInX animated' },
                    _react2.default.createElement(
                        'div',
                        { className: 'col-sm-8' },
                        _react2.default.createElement(
                            'div',
                            { className: 'panel panel-default' },
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-heading' },
                                'Add Food'
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'panel-body' },
                                _react2.default.createElement(
                                    'form',
                                    { onSubmit: this.handleSubmit.bind(this) },
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' + this.state.nameValidationState },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            'Food Name'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.name, onChange: _AddFoodActions2.default.updateName, autoFocus: true }),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'help-block' },
                                            this.state.helpBlock
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' + this.state.categoryValidationState },
                                        _react2.default.createElement(
                                            'label',
                                            { className: 'control-label' },
                                            'Category'
                                        ),
                                        _react2.default.createElement('input', { type: 'text', className: 'form-control', ref: 'nameTextField', value: this.state.category, onChange: _AddFoodActions2.default.updateCategory, autoFocus: true }),
                                        _react2.default.createElement(
                                            'span',
                                            { className: 'help-block' },
                                            this.state.helpBlock
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'form-group ' + this.state.phaseValidationState },
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'phase', id: '1', value: '1', checked: this.state.phase === '1', onChange: _AddFoodActions2.default.updatePhase }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: '1' },
                                                'GAPS Phase 1'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'phase', id: '2', value: '2', checked: this.state.phase === '2', onChange: _AddFoodActions2.default.updatePhase }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: '2' },
                                                'GAPS Phase 2'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'phase', id: '3', value: '3', checked: this.state.phase === '3', onChange: _AddFoodActions2.default.updatePhase }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: '3' },
                                                'GAPS Phase 3'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'phase', id: '4', value: '4', checked: this.state.phase === '4', onChange: _AddFoodActions2.default.updatePhase }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: '4' },
                                                'GAPS Phase 4'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'phase', id: '5', value: '5', checked: this.state.phase === '5', onChange: _AddFoodActions2.default.updatePhase }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: '5' },
                                                'GAPS Phase 5'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'phase', id: '6', value: '6', checked: this.state.phase === '6', onChange: _AddFoodActions2.default.updatePhase }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: '6' },
                                                'GAPS Phase 6'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'div',
                                            { className: 'radio radio-inline' },
                                            _react2.default.createElement('input', { type: 'radio', name: 'phase', id: '7', value: '7', checked: this.state.phase === '7', onChange: _AddFoodActions2.default.updatePhase }),
                                            _react2.default.createElement(
                                                'label',
                                                { htmlFor: '7' },
                                                'GAPS Phase 7'
                                            )
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'submit', className: 'btn btn-primary' },
                                        'Submit'
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AddFood;
}(_react2.default.Component);

exports.default = AddFood;

},{"../actions/AddFoodActions":1,"../stores/AddFoodStore":17,"react":"react"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*eslint no-unused-vars: 0*/
/*eslint no-undef: 0 */


var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Navbar2.default, { history: this.props.history }),
                this.props.children,
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

},{"./Footer":12,"./Navbar":14,"react":"react"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FoodStore = require('../stores/FoodStore');

var _FoodStore2 = _interopRequireDefault(_FoodStore);

var _FoodActions = require('../actions/FoodActions');

var _FoodActions2 = _interopRequireDefault(_FoodActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*global $ */
/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0 */


var Food = function (_React$Component) {
    _inherits(Food, _React$Component);

    function Food(props) {
        _classCallCheck(this, Food);

        var _this = _possibleConstructorReturn(this, (Food.__proto__ || Object.getPrototypeOf(Food)).call(this, props));

        _this.state = _FoodStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(Food, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _FoodStore2.default.listen(this.onChange);
            _FoodActions2.default.getFood(this.props.params._id);

            $('.magnific-popup').magnificPopup({
                type: 'image',
                mainClass: 'mfp-zoom-in',
                closeOnContentClick: true,
                midClick: true,
                zoom: {
                    enabled: true,
                    duration: 300
                }
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _FoodStore2.default.unlisten(this.onChange);
            $(document.body).removeClass();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            // Fetch new charachter data when URL path changes
            if (prevProps.params.id !== this.props.params._id) {
                _FoodActions2.default.getFood(this.props.params._id);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'profile-img' },
                    _react2.default.createElement(
                        'a',
                        { className: 'magnific-popup', href: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/-Insert_image_here-.svg' },
                        _react2.default.createElement('img', { src: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/-Insert_image_here-.svg' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'media-body' },
                    _react2.default.createElement(
                        'small',
                        null,
                        'Name:',
                        _react2.default.createElement(
                            'strong',
                            null,
                            this.state.name
                        )
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'small',
                        null,
                        'Category:',
                        _react2.default.createElement(
                            'strong',
                            null,
                            this.state.category
                        )
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'small',
                        null,
                        'Phase:',
                        _react2.default.createElement(
                            'strong',
                            null,
                            this.state.phase
                        )
                    ),
                    _react2.default.createElement('br', null)
                )
            );
        }
    }]);

    return Food;
}(_react2.default.Component);

exports.default = Food;

},{"../actions/FoodActions":2,"../stores/FoodStore":19,"react":"react"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _underscore = require('underscore');

var _FoodListStore = require('../stores/FoodListStore');

var _FoodListStore2 = _interopRequireDefault(_FoodListStore);

var _FoodListActions = require('../actions/FoodListActions');

var _FoodListActions2 = _interopRequireDefault(_FoodListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*eslint no-unused-vars: 0*/
/*eslint no-undef: 0 */


var log = '../../utils/logger';

var FoodList = function (_React$Component) {
    _inherits(FoodList, _React$Component);

    function FoodList(props) {
        _classCallCheck(this, FoodList);

        var _this = _possibleConstructorReturn(this, (FoodList.__proto__ || Object.getPrototypeOf(FoodList)).call(this, props));

        _this.state = _FoodListStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(FoodList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _FoodListActions2.default.getFoods(this.props.params);
            _FoodListStore2.default.listen(this.onChange);
            log.debug('componentDidMount', this.props.params);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _FoodListStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            log.debug('componentDidUpdate', this.props.params);
            if (!(0, _underscore.isEqual)(prevProps.params, this.props.params)) {
                _FoodListActions2.default.getFoods(this.props.params);
            }
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            log.debug('Found: ' + this.state.foods.length + ' foods');
            var foodList = this.state.foods.map(function (food, index) {
                log.debug('Got a foodlist');
                return _react2.default.createElement(
                    'div',
                    { key: food._id, className: 'list-group-item animated fadeIn' },
                    _react2.default.createElement(
                        'div',
                        { className: 'media' },
                        _react2.default.createElement(
                            'span',
                            { className: 'position pull-left' },
                            index + 1
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'pull-left thumb-lg' },
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/food?_id=' + food._id },
                                _react2.default.createElement('img', { className: 'media-object', src: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/-Insert_image_here-.svg' })
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'media-body' },
                            _react2.default.createElement(
                                'small',
                                null,
                                'Name:',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    food.name
                                )
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'small',
                                null,
                                'Category:',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    food.category
                                )
                            ),
                            _react2.default.createElement('br', null),
                            _react2.default.createElement(
                                'small',
                                null,
                                'Phase:',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    food.phase
                                )
                            ),
                            _react2.default.createElement('br', null)
                        )
                    )
                );
            });

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'list-group' },
                    foodList
                )
            );
        }
    }]);

    return FoodList;
}(_react2.default.Component);

exports.default = FoodList;

},{"../actions/FoodListActions":3,"../stores/FoodListStore":18,"react":"react","react-router":"react-router","underscore":"underscore"}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _FooterStore = require('../stores/FooterStore');

var _FooterStore2 = _interopRequireDefault(_FooterStore);

var _FooterActions = require('../actions/FooterActions');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*eslint no-unused-vars: 0*/
/*eslint no-undef: 0 */


var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer(props) {
        _classCallCheck(this, Footer);

        var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this, props));

        _this.state = _FooterStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(Footer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _FooterStore2.default.listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _FooterStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'footer',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-5' },
                            _react2.default.createElement(
                                'h3',
                                { className: 'lead' },
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'Information'
                                ),
                                'and',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'Copyright'
                                )
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                'Powered by',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'Node.js'
                                ),
                                ',',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'MongoDB'
                                ),
                                'and',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'React'
                                ),
                                'with Flux architecture and server-side rendering.'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
}(_react2.default.Component);

exports.default = Footer;

},{"../actions/FooterActions":4,"../stores/FooterStore":20,"react":"react","react-router":"react-router"}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _HomeStore = require('../stores/HomeStore');

var _HomeStore2 = _interopRequireDefault(_HomeStore);

var _HomeActions = require('../actions/HomeActions');

var _HomeActions2 = _interopRequireDefault(_HomeActions);

var _underscore = require('underscore');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*eslint no-unused-vars: 0*/
/*eslint no-undef: 0 */


var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home(props) {
        _classCallCheck(this, Home);

        var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

        _this.state = _HomeStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _HomeStore2.default.listen(this.onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _HomeStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleClick',
        value: function handleClick(character) {}
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'thumbnail fadeInUp animated' },
                _react2.default.createElement(
                    'p',
                    null,
                    'This is home'
                )
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

exports.default = Home;

},{"../actions/HomeActions":5,"../stores/HomeStore":21,"react":"react","react-router":"react-router","underscore":"underscore"}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _NavbarStore = require('../stores/NavbarStore');

var _NavbarStore2 = _interopRequireDefault(_NavbarStore);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*global $, io */
/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0 */


var Navbar = function (_React$Component) {
    _inherits(Navbar, _React$Component);

    function Navbar(props) {
        _classCallCheck(this, Navbar);

        var _this = _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call(this, props));

        _this.state = _NavbarStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    _createClass(Navbar, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _NavbarStore2.default.listen(this.onChange);
            _NavbarActions2.default.getFoodCount();

            var socket = io.connect();

            socket.on('onlineUsers', function (data) {
                _NavbarActions2.default.updateOnlineUsers(data);
            });

            $(document).ajaxStart(function () {
                _NavbarActions2.default.updateAjaxAnimation('fadeIn');
            });

            $(document).ajaxComplete(function () {
                setTimeout(function () {
                    _NavbarActions2.default.updateAjaxAnimation('fadeOut');
                }, 750);
            });
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _NavbarStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(event) {
            event.preventDefault();

            var searchQuery = this.state.searchQuery.trim();

            if (searchQuery) {
                _NavbarActions2.default.findFood({ searchQuery: searchQuery, searchForm: this.refs.searchForm, history: this.props.history });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'nav',
                { className: 'navbar navbar-default navbar-static-top' },
                _react2.default.createElement(
                    'div',
                    { className: 'navbar-header' },
                    _react2.default.createElement(
                        'button',
                        { type: 'button', className: 'navbar-toggle collapsed', 'data-toggle': 'collapse', 'data-target': '#navbar' },
                        _react2.default.createElement(
                            'span',
                            { className: 'sr-only' },
                            'Toggle navigation'
                        ),
                        _react2.default.createElement('span', { className: 'icon-bar' }),
                        _react2.default.createElement('span', { className: 'icon-bar' }),
                        _react2.default.createElement('span', { className: 'icon-bar' })
                    ),
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/', className: 'navbar-brand' },
                        _react2.default.createElement(
                            'span',
                            { ref: 'triangles', className: 'triangles animated ' + this.state.ajaxAnimationClass },
                            _react2.default.createElement('div', { className: 'tri invert' }),
                            _react2.default.createElement('div', { className: 'tri invert' }),
                            _react2.default.createElement('div', { className: 'tri' }),
                            _react2.default.createElement('div', { className: 'tri invert' }),
                            _react2.default.createElement('div', { className: 'tri invert' }),
                            _react2.default.createElement('div', { className: 'tri' }),
                            _react2.default.createElement('div', { className: 'tri invert' }),
                            _react2.default.createElement('div', { className: 'tri' }),
                            _react2.default.createElement('div', { className: 'tri invert' })
                        ),
                        'LifeTech',
                        _react2.default.createElement(
                            'span',
                            { className: 'badge badge-up badge-danger' },
                            this.state.onlineUsers
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { id: 'navbar', className: 'navbar-collapse collapse' },
                    _react2.default.createElement(
                        'form',
                        { ref: 'searchForm', className: 'navbar-form navbar-left animated', onSubmit: this.handleSubmit.bind(this) },
                        _react2.default.createElement(
                            'div',
                            { className: 'input-group' },
                            _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: this.state.totalFoods + ' Foods', value: this.state.searchQuery, onChange: _NavbarActions2.default.updateSearchQuery }),
                            _react2.default.createElement(
                                'span',
                                { className: 'input-group-btn' },
                                _react2.default.createElement(
                                    'button',
                                    { className: 'btn btn-default', onClick: this.handleSubmit.bind(this) },
                                    _react2.default.createElement('span', { className: 'glyphicon glyphicon-search' })
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'nav navbar-nav' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/' },
                                'Home'
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            { className: 'dropdown' },
                            _react2.default.createElement(
                                'a',
                                { href: '#', className: 'dropdown-toggle', 'data-toggle': 'dropdown' },
                                'Phase',
                                _react2.default.createElement('span', { className: 'caret' })
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'dropdown-menu' },
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/phase/1' },
                                        'GAPS Phase 1'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/phase/2' },
                                        'GAPS Phase 2'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/phase/3' },
                                        'GAPS Phase 3'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/phase/4' },
                                        'GAPS Phase 4'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/phase/5' },
                                        'GAPS Phase 5'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/phase/6' },
                                        'GAPS Phase 6'
                                    )
                                ),
                                _react2.default.createElement(
                                    'li',
                                    null,
                                    _react2.default.createElement(
                                        _reactRouter.Link,
                                        { to: '/phase/7' },
                                        'GAPS Phase 7'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                _reactRouter.Link,
                                { to: '/add' },
                                'Add'
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

},{"../actions/NavbarActions":6,"../stores/NavbarStore":22,"react":"react","react-router":"react-router"}],15:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _Navbar = require('./components/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0 */
var history = (0, _createBrowserHistory2.default)();

_reactDom2.default.render(_react2.default.createElement(
  _reactRouter2.default,
  { history: history },
  _routes2.default
), document.getElementById('app'));

},{"./components/Navbar":14,"./routes":16,"history/lib/createBrowserHistory":31,"react":"react","react-dom":"react-dom","react-router":"react-router"}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _FoodList = require('./components/FoodList');

var _FoodList2 = _interopRequireDefault(_FoodList);

var _Food = require('./components/Food');

var _Food2 = _interopRequireDefault(_Food);

var _AddFood = require('./components/AddFood');

var _AddFood2 = _interopRequireDefault(_AddFood);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createElement(
    _reactRouter.Route,
    { component: _App2.default },
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/phase/:phase', component: _FoodList2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/add', component: _AddFood2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/food', component: _Food2.default })
); /*eslint no-unused-vars: 0*/

},{"./components/AddFood":8,"./components/App":9,"./components/Food":10,"./components/FoodList":11,"./components/Home":13,"react":"react","react-router":"react-router"}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _AddFoodActions = require('../actions/AddFoodActions');

var _AddFoodActions2 = _interopRequireDefault(_AddFoodActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddFoodStore = function () {
    function AddFoodStore() {
        _classCallCheck(this, AddFoodStore);

        this.bindActions(_AddFoodActions2.default);
        this.name = '';
        this.category = '';
        this.phase = 0;
        this.helpBlock = '';
        this.nameValidationState = '';
        this.categoryValidationState = '';
        this.phaseValidationState = '';
    }

    _createClass(AddFoodStore, [{
        key: 'onAddFoodSuccess',
        value: function onAddFoodSuccess(successMessage) {
            this.nameValidationState = 'has-success';
            this.helpBlock = successMessage;
        }
    }, {
        key: 'onAddFoodFail',
        value: function onAddFoodFail(errorMessage) {
            this.nameValidationState = 'has-error';
            this.helpBlock = errorMessage;
        }
    }, {
        key: 'onUpdateName',
        value: function onUpdateName(event) {
            this.name = event.target.value;
            this.nameValidationState = '';
            this.helpBlock = '';
        }
    }, {
        key: 'onUpdateCategory',
        value: function onUpdateCategory(event) {
            this.category = event.target.value;
            this.categoryValidationState = '';
        }
    }, {
        key: 'onUpdatePhase',
        value: function onUpdatePhase(event) {
            this.phase = event.target.value;
            this.phaseValidationState = '';
        }
    }, {
        key: 'onInvalidName',
        value: function onInvalidName() {
            this.nameValidationState = 'has-error';
            this.helpBlock = 'Please enter a Food name.';
        }
    }, {
        key: 'onInvalidCategory',
        value: function onInvalidCategory() {
            this.categoryValidationState = 'has-error';
        }
    }]);

    return AddFoodStore;
}();

exports.default = _alt2.default.createStore(AddFoodStore);

},{"../actions/AddFoodActions":1,"../alt":7}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global toastr */


var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _FoodListActions = require('../actions/FoodListActions');

var _FoodListActions2 = _interopRequireDefault(_FoodListActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var log = '../../utils/logger';

var FoodListStore = function () {
    function FoodListStore() {
        _classCallCheck(this, FoodListStore);

        this.bindActions(_FoodListActions2.default);
        this.foods = [];
    }

    _createClass(FoodListStore, [{
        key: 'getFoodsSuccess',
        value: function getFoodsSuccess(data) {
            log.debug('onGetCharacterSuccess data:', data);
            this.foods = data;
        }
    }, {
        key: 'getFoodsFail',
        value: function getFoodsFail(jqXhr) {
            log.debug('onGetCharactersFails');
            toastr.error(jqXhr.responseJSON.message);
        }
    }]);

    return FoodListStore;
}();

exports.default = _alt2.default.createStore(FoodListStore);

},{"../actions/FoodListActions":3,"../alt":7}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*global $, toastr */
/*eslint no-unused-vars: 0*/
/*eslint no-undef: 0 */


var _underscore = require('underscore');

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _FoodActions = require('../actions/FoodActions');

var _FoodActions2 = _interopRequireDefault(_FoodActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FoodStore = function () {
    function FoodStore() {
        _classCallCheck(this, FoodStore);

        this.bindActions(_FoodActions2.default);
        this._id = 0;
        this.name = '';
        this.category = 0;
        this.phase = '';
    }

    _createClass(FoodStore, [{
        key: 'onGetFoodSuccess',
        value: function onGetFoodSuccess(data) {
            (0, _underscore.assign)(this, data);
            var localData = localStorage.getItem('foods') ? JSON.parse(localStorage.getItem('foods')) : {};
            var reports = localData.reports || [];
        }
    }, {
        key: 'onGetFoodFail',
        value: function onGetFoodFail(jqXhr) {
            toastr.error(jqXhr.responseJSON.message);
        }
    }]);

    return FoodStore;
}();

exports.default = _alt2.default.createStore(FoodStore);

},{"../actions/FoodActions":2,"../alt":7,"underscore":"underscore"}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _FooterActions = require('../actions/FooterActions');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterStore = function FooterStore() {
    _classCallCheck(this, FooterStore);

    this.bindActions(_FooterActions2.default);
};

exports.default = _alt2.default.createStore(FooterStore);

},{"../actions/FooterActions":4,"../alt":7}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*global toastr */


var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _HomeActions = require('../actions/HomeActions');

var _HomeActions2 = _interopRequireDefault(_HomeActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeStore = function () {
    function HomeStore() {
        _classCallCheck(this, HomeStore);

        this.bindActions(_HomeActions2.default);
        this.foods = [];
    }

    _createClass(HomeStore, [{
        key: 'onGetTwoCharactersSuccess',
        value: function onGetTwoCharactersSuccess(data) {
            this.foods = data;
        }
    }, {
        key: 'onGetTwoCharactersFail',
        value: function onGetTwoCharactersFail(errorMessage) {
            toastr.error(errorMessage);
        }
    }, {
        key: 'onVoteFail',
        value: function onVoteFail(errorMessage) {
            toastr.error(errorMessage);
        }
    }]);

    return HomeStore;
}();

exports.default = _alt2.default.createStore(HomeStore);

},{"../actions/HomeActions":5,"../alt":7}],22:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*global toastr */


var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _NavbarActions = require('../actions/NavbarActions');

var _NavbarActions2 = _interopRequireDefault(_NavbarActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavbarStore = function () {
    function NavbarStore() {
        _classCallCheck(this, NavbarStore);

        this.bindActions(_NavbarActions2.default);
        this.totalFoods = 0;
        this.onlineUsers = 0;
        this.searchQuery = '';
        this.ajaxAnimationClass = '';
    }

    _createClass(NavbarStore, [{
        key: 'onFindFoodSuccess',
        value: function onFindFoodSuccess(payload) {
            payload.history.pushState(null, '/foods/' + payload.foodId);
        }
    }, {
        key: 'onFindFoodFail',
        value: function onFindFoodFail(payload) {
            payload.searchForm.classList.add('shake');
            setTimeout(function () {
                payload.searchForm.classList.remove('shake');
            }, 1000);
        }
    }, {
        key: 'onUpdateOnlineUsers',
        value: function onUpdateOnlineUsers(data) {
            this.onlineUsers = data.onlineUsers;
        }
    }, {
        key: 'onUpdateAjaxAnimation',
        value: function onUpdateAjaxAnimation(className) {
            this.ajaxAnimationClass = className; //fadein or fadeout
        }
    }, {
        key: 'onUpdateSearchQuery',
        value: function onUpdateSearchQuery(event) {
            this.searchQuery = event.target.value;
        }
    }, {
        key: 'onGetFoodCountSuccess',
        value: function onGetFoodCountSuccess(data) {
            this.totalFoods = data.count;
        }
    }, {
        key: 'onGetFoodCountFail',
        value: function onGetFoodCountFail(jqXhr) {
            toastr.error(jqXhr.responseJSON.message);
        }
    }]);

    return NavbarStore;
}();

exports.default = _alt2.default.createStore(NavbarStore);

},{"../actions/NavbarActions":6,"../alt":7}],23:[function(require,module,exports){
var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;

  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

  // 7.3. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
    return opts.strict ? actual === expected : actual == expected;

  // 7.4. For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else {
    return objEquiv(actual, expected, opts);
  }
}

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer (x) {
  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
    return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {//happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return typeof a === typeof b;
}

},{"./lib/is_arguments.js":24,"./lib/keys.js":25}],24:[function(require,module,exports){
var supportsArgumentsClass = (function(){
  return Object.prototype.toString.call(arguments)
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object){
  return object &&
    typeof object == 'object' &&
    typeof object.length == 'number' &&
    Object.prototype.hasOwnProperty.call(object, 'callee') &&
    !Object.prototype.propertyIsEnumerable.call(object, 'callee') ||
    false;
};

},{}],25:[function(require,module,exports){
exports = module.exports = typeof Object.keys === 'function'
  ? Object.keys : shim;

exports.shim = shim;
function shim (obj) {
  var keys = [];
  for (var key in obj) keys.push(key);
  return keys;
}

},{}],26:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};
},{}],27:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}
},{}],28:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}
}).call(this,require('_process'))

},{"_process":40,"warning":41}],29:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  // FIXME: Work around our browser history not working correctly on Chrome
  // iOS: https://github.com/rackt/react-router/issues/2565
  if (ua.indexOf('CriOS') !== -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}
},{}],30:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;
},{}],31:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    var location = _parsePath2['default'](path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./Actions":26,"./DOMStateStorage":28,"./DOMUtils":29,"./ExecutionEnvironment":30,"./createDOMHistory":32,"./parsePath":37,"_process":40,"invariant":39}],32:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./DOMUtils":29,"./ExecutionEnvironment":30,"./createHistory":33,"_process":40,"invariant":39}],33:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if (typeof action === 'object') {
      //warning(
      //  false,
      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
      //  'location descriptor instead'
      //)

      if (typeof location === 'string') location = _parsePath2['default'](location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];
},{"./Actions":26,"./AsyncUtils":27,"./createLocation":34,"./deprecate":35,"./parsePath":37,"./runTransitionHook":38,"deep-equal":23}],34:[function(require,module,exports){
//import warning from 'warning'
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _parsePath2['default'](location);

  if (typeof action === 'object') {
    //warning(
    //  false,
    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
    //  'location descriptor instead'
    //)

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];
},{"./Actions":26,"./parsePath":37}],35:[function(require,module,exports){
//import warning from 'warning'

"use strict";

exports.__esModule = true;
function deprecate(fn) {
  return fn;
  //return function () {
  //  warning(false, '[history] ' + message)
  //  return fn.apply(this, arguments)
  //}
}

exports["default"] = deprecate;
module.exports = exports["default"];
},{}],36:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];
},{}],37:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"./extractPath":36,"_process":40,"warning":41}],38:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];
}).call(this,require('_process'))

},{"_process":40,"warning":41}],39:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require('_process'))

},{"_process":40}],40:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],41:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;

}).call(this,require('_process'))

},{"_process":40}]},{},[15])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYWN0aW9ucy9BZGRGb29kQWN0aW9ucy5qcyIsImFwcC9hY3Rpb25zL0Zvb2RBY3Rpb25zLmpzIiwiYXBwL2FjdGlvbnMvRm9vZExpc3RBY3Rpb25zLmpzIiwiYXBwL2FjdGlvbnMvRm9vdGVyQWN0aW9ucy5qcyIsImFwcC9hY3Rpb25zL0hvbWVBY3Rpb25zLmpzIiwiYXBwL2FjdGlvbnMvTmF2YmFyQWN0aW9ucy5qcyIsImFwcC9hbHQuanMiLCJhcHAvY29tcG9uZW50cy9BZGRGb29kLmpzIiwiYXBwL2NvbXBvbmVudHMvQXBwLmpzIiwiYXBwL2NvbXBvbmVudHMvRm9vZC5qcyIsImFwcC9jb21wb25lbnRzL0Zvb2RMaXN0LmpzIiwiYXBwL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwiYXBwL2NvbXBvbmVudHMvSG9tZS5qcyIsImFwcC9jb21wb25lbnRzL05hdmJhci5qcyIsImFwcC9tYWluLmpzIiwiYXBwL3JvdXRlcy5qcyIsImFwcC9zdG9yZXMvQWRkRm9vZFN0b3JlLmpzIiwiYXBwL3N0b3Jlcy9Gb29kTGlzdFN0b3JlLmpzIiwiYXBwL3N0b3Jlcy9Gb29kU3RvcmUuanMiLCJhcHAvc3RvcmVzL0Zvb3RlclN0b3JlLmpzIiwiYXBwL3N0b3Jlcy9Ib21lU3RvcmUuanMiLCJhcHAvc3RvcmVzL05hdmJhclN0b3JlLmpzIiwibm9kZV9tb2R1bGVzL2RlZXAtZXF1YWwvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZGVlcC1lcXVhbC9saWIvaXNfYXJndW1lbnRzLmpzIiwibm9kZV9tb2R1bGVzL2RlZXAtZXF1YWwvbGliL2tleXMuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvQWN0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9Bc3luY1V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL0RPTVN0YXRlU3RvcmFnZS5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9ET01VdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudC5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9jcmVhdGVCcm93c2VySGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9jcmVhdGVET01IaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2NyZWF0ZUhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvY3JlYXRlTG9jYXRpb24uanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvZGVwcmVjYXRlLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2V4dHJhY3RQYXRoLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL3BhcnNlUGF0aC5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9ydW5UcmFuc2l0aW9uSG9vay5qcyIsIm5vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvd2FybmluZy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O3FqQkNBQTs7O0FBQ0E7Ozs7Ozs7O0lBRU0sYztBQUNGLDhCQUFjO0FBQUE7O0FBQ1YsYUFBSyxlQUFMLENBQXFCLGdCQUFyQixFQUF1QyxhQUF2QyxFQUFzRCxZQUF0RCxFQUFvRSxnQkFBcEUsRUFBc0YsYUFBdEYsRUFBcUcsYUFBckcsRUFBb0gsaUJBQXBILEVBQXVJLGNBQXZJO0FBQ0g7Ozs7Z0NBRU8sSSxFQUFNLFEsRUFBVSxLLEVBQU87QUFBQTs7QUFDM0IsY0FBRSxJQUFGLENBQU87QUFDSCxzQkFBTSxNQURIO0FBRUgscUJBQUssV0FGRjtBQUdILHNCQUFNO0FBQ0YsMEJBQU0sSUFESjtBQUVGLDhCQUFVLFFBRlI7QUFHRiwyQkFBTztBQUhMO0FBSEgsYUFBUCxFQVFH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QUFDSDs7Ozs7O2tCQUdVLGNBQUksV0FBSixDQUFnQixXQUFoQixDOzs7QUM3Q2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDakxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3BMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKmdsb2JhbCAkICovXG5pbXBvcnQgYWx0IGZyb20gJy4uL2FsdCdcblxuY2xhc3MgQWRkRm9vZEFjdGlvbnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdlbmVyYXRlQWN0aW9ucygnYWRkRm9vZFN1Y2Nlc3MnLCAnYWRkRm9vZEZhaWwnLCAndXBkYXRlTmFtZScsICd1cGRhdGVDYXRlZ29yeScsICd1cGRhdGVQaGFzZScsICdpbnZhbGlkTmFtZScsICdpbnZhbGlkQ2F0ZWdvcnknLCAnaW52YWxpZFBoYXNlJylcbiAgICB9XG5cbiAgICBhZGRGb29kKG5hbWUsIGNhdGVnb3J5LCBwaGFzZSkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgdXJsOiAnL2FwaS9mb29kJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICAgICAgICAgICAgICBwaGFzZTogcGhhc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuZG9uZSgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmFkZEZvb2RTdWNjZXNzKGRhdGEubWVzc2FnZSlcbiAgICAgICAgfSkuZmFpbCgoanFYaHIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5hZGRGb29kRmFpbChqcVhoci5yZXNwb25zZUpTT04ubWVzc2FnZSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKEFkZEZvb2RBY3Rpb25zKVxuIiwiLypnbG9iYWwgJCAqL1xuaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnXG5cbmNsYXNzIEZvb2RBY3Rpb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUFjdGlvbnMoJ2dldEZvb2RTdWNjZXNzJywgJ2dldEZvb2RGYWlsJylcbiAgICB9XG5cbiAgICBnZXRGb29kKEZvb2RJZCkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnL2FwaS9mb29kP2lkPScgKyBGb29kSWRcbiAgICAgICAgfSkuZG9uZSgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmdldEZvb2RTdWNjZXNzKGRhdGEpXG4gICAgICAgIH0pLmZhaWwoKGpxWGhyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMuZ2V0Rm9vZEZhaWwoanFYaHIpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlQWN0aW9ucyhGb29kQWN0aW9ucylcbiIsIi8qZ2xvYmFsICQgKi9cbmltcG9ydCBhbHQgZnJvbSAnLi4vYWx0J1xubGV0IGxvZyA9ICcuLi8uLi91dGlscy9sb2dnZXInXG5cbmNsYXNzIEZvb2RMaXN0QWN0aW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVBY3Rpb25zKCdnZXRGb29kc1N1Y2Nlc3MnLCAnZ2V0Rm9vZHNGYWlsJylcbiAgICB9XG5cbiAgICBnZXRGb29kcyhwYXlsb2FkKSB7XG4gICAgICAgIGxvZy5kZWJ1ZygnZ2V0Rm9vZHM6ICcgKyBwYXlsb2FkKVxuICAgICAgICBsZXQgdXJsID0gJy9hcGkvcGhhc2UnXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICBwaGFzZTogN1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBheWxvYWQucGhhc2UpIHtcbiAgICAgICAgICAgIHBhcmFtcy5waGFzZSA9IHBheWxvYWQucGhhc2VcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF5bG9hZC5jYXRlZ29yeSkge1xuICAgICAgICAgICAgcGFyYW1zLmNhdGVnb3J5ID0gcGF5bG9hZC5jYXRlZ29yeVxuICAgICAgICB9XG5cbiAgICAgICAgbG9nLmRlYnVnKCdDYWxsaW5nIHVybCwgcGFyYW1zJywgdXJsLCBwYXJhbXMpXG4gICAgICAgICQuYWpheCh7dXJsOiB1cmwsIGRhdGE6IHBhcmFtc30pLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGxvZy5kZWJ1ZygnU3VjY2VzcyBnZXR0aW5nIGZvb2RzOiAnLCBkYXRhKVxuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmdldEZvb2RzU3VjY2VzcyhkYXRhKVxuICAgICAgICB9KS5mYWlsKChqcVhocikgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmdldEZvb2RzRmFpbChqcVhocilcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKEZvb2RMaXN0QWN0aW9ucylcbiIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0J1xuXG5jbGFzcyBGb290ZXJBY3Rpb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUFjdGlvbnMoKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZUFjdGlvbnMoRm9vdGVyQWN0aW9ucylcbiIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0J1xuXG5jbGFzcyBIb21lQWN0aW9ucyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVBY3Rpb25zKClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKEhvbWVBY3Rpb25zKVxuIiwiLypnbG9iYWwgJCAqL1xuaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnXG5pbXBvcnQge1xuICAgIGFzc2lnblxufSBmcm9tICd1bmRlcnNjb3JlJ1xuXG5jbGFzcyBOYXZiYXJBY3Rpb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUFjdGlvbnMoJ3VwZGF0ZU9ubGluZVVzZXJzJywgJ3VwZGF0ZUFqYXhBbmltYXRpb24nLCAndXBkYXRlU2VhcmNoUXVlcnknLCAnZ2V0Rm9vZENvdW50U3VjY2VzcycsICdnZXRGb29kQ291bnRGYWlsJywgJ2ZpbmRGb29kU3VjY2VzcycsICdmaW5kRm9vZEZhaWwnKVxuICAgIH1cblxuICAgIGZpbmRGb29kKHBheWxvYWQpIHtcbiAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy9hcGkvZm9vZHMvc2VhcmNoJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBwYXlsb2FkLnNlYXJjaFF1ZXJ5XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGFzc2lnbihwYXlsb2FkLCBkYXRhKVxuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmZpbmRGb29kU3VjY2VzcyhwYXlsb2FkKVxuICAgICAgICB9KS5mYWlsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5maW5kRm9vZEZhaWwocGF5bG9hZClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRGb29kQ291bnQoKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICcvYXBpL2Zvb2RsaXN0L2NvdW50J1xuICAgICAgICB9KS5kb25lKChkYXRhKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMuZ2V0Rm9vZENvdW50U3VjY2VzcyhkYXRhKVxuICAgICAgICB9KS5mYWlsKChqcVhocikgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmdldEZvb2RDb3VudEZhaWwoanFYaHIpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlQWN0aW9ucyhOYXZiYXJBY3Rpb25zKSIsImltcG9ydCBBbHQgZnJvbSAnYWx0J1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgQWx0KCkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQWRkRm9vZFN0b3JlIGZyb20gJy4uL3N0b3Jlcy9BZGRGb29kU3RvcmUnXG5pbXBvcnQgQWRkRm9vZEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9BZGRGb29kQWN0aW9ucydcblxuY2xhc3MgQWRkRm9vZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSBBZGRGb29kU3RvcmUuZ2V0U3RhdGUoKVxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIEFkZEZvb2RTdG9yZS5saXN0ZW4odGhpcy5vbkNoYW5nZSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgQWRkRm9vZFN0b3JlLnVubGlzdGVuKHRoaXMub25DaGFuZ2UpXG4gICAgfVxuXG4gICAgb25DaGFuZ2Uoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSlcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGxldCBuYW1lID0gdGhpcy5zdGF0ZS5uYW1lLnRyaW0oKVxuICAgICAgICBsZXQgY2F0ZWdvcnkgPSB0aGlzLnN0YXRlLmNhdGVnb3J5XG4gICAgICAgIGxldCBwaGFzZSA9IHRoaXMuc3RhdGUucGhhc2VcblxuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIEFkZEZvb2RBY3Rpb25zLmludmFsaWROYW1lKClcbiAgICAgICAgICAgIHRoaXMucmVmcy5uYW1lVGV4dEZpZWxkLmZvY3VzKClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIEFkZEZvb2RBY3Rpb25zLmludmFsaWRDYXRlZ29yeSgpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBoYXNlKSB7XG4gICAgICAgICAgICBBZGRGb29kQWN0aW9ucy5pbnZhbGlkUGhhc2UoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hbWUgJiYgY2F0ZWdvcnkgJiYgcGhhc2UpIHtcbiAgICAgICAgICAgIEFkZEZvb2RBY3Rpb25zLmFkZEZvb2QobmFtZSwgY2F0ZWdvcnksIHBoYXNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBmbGlwSW5YIGFuaW1hdGVkJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS04Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYW5lbCBwYW5lbC1kZWZhdWx0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFuZWwtaGVhZGluZyc+QWRkIEZvb2Q8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFuZWwtYm9keSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZm9ybS1ncm91cCAnICsgdGhpcy5zdGF0ZS5uYW1lVmFsaWRhdGlvblN0YXRlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdjb250cm9sLWxhYmVsJz5Gb29kIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgcmVmPSduYW1lVGV4dEZpZWxkJyB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17QWRkRm9vZEFjdGlvbnMudXBkYXRlTmFtZX0gYXV0b0ZvY3VzLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2hlbHAtYmxvY2snPnt0aGlzLnN0YXRlLmhlbHBCbG9ja308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZm9ybS1ncm91cCAnICsgdGhpcy5zdGF0ZS5jYXRlZ29yeVZhbGlkYXRpb25TdGF0ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nY29udHJvbC1sYWJlbCc+Q2F0ZWdvcnk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgcmVmPSduYW1lVGV4dEZpZWxkJyB2YWx1ZT17dGhpcy5zdGF0ZS5jYXRlZ29yeX0gb25DaGFuZ2U9e0FkZEZvb2RBY3Rpb25zLnVwZGF0ZUNhdGVnb3J5fSBhdXRvRm9jdXMvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naGVscC1ibG9jayc+e3RoaXMuc3RhdGUuaGVscEJsb2NrfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmb3JtLWdyb3VwICcgKyB0aGlzLnN0YXRlLnBoYXNlVmFsaWRhdGlvblN0YXRlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFkaW8gcmFkaW8taW5saW5lJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdwaGFzZScgaWQ9JzEnIHZhbHVlPScxJyBjaGVja2VkPXt0aGlzLnN0YXRlLnBoYXNlID09PSAnMSd9IG9uQ2hhbmdlPXtBZGRGb29kQWN0aW9ucy51cGRhdGVQaGFzZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nMSc+R0FQUyBQaGFzZSAxPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFkaW8gcmFkaW8taW5saW5lJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdwaGFzZScgaWQ9JzInIHZhbHVlPScyJyBjaGVja2VkPXt0aGlzLnN0YXRlLnBoYXNlID09PSAnMid9IG9uQ2hhbmdlPXtBZGRGb29kQWN0aW9ucy51cGRhdGVQaGFzZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nMic+R0FQUyBQaGFzZSAyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFkaW8gcmFkaW8taW5saW5lJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdwaGFzZScgaWQ9JzMnIHZhbHVlPSczJyBjaGVja2VkPXt0aGlzLnN0YXRlLnBoYXNlID09PSAnMyd9IG9uQ2hhbmdlPXtBZGRGb29kQWN0aW9ucy51cGRhdGVQaGFzZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nMyc+R0FQUyBQaGFzZSAzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFkaW8gcmFkaW8taW5saW5lJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdwaGFzZScgaWQ9JzQnIHZhbHVlPSc0JyBjaGVja2VkPXt0aGlzLnN0YXRlLnBoYXNlID09PSAnNCd9IG9uQ2hhbmdlPXtBZGRGb29kQWN0aW9ucy51cGRhdGVQaGFzZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nNCc+R0FQUyBQaGFzZSA0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFkaW8gcmFkaW8taW5saW5lJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdwaGFzZScgaWQ9JzUnIHZhbHVlPSc1JyBjaGVja2VkPXt0aGlzLnN0YXRlLnBoYXNlID09PSAnNSd9IG9uQ2hhbmdlPXtBZGRGb29kQWN0aW9ucy51cGRhdGVQaGFzZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nNSc+R0FQUyBQaGFzZSA1PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFkaW8gcmFkaW8taW5saW5lJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdwaGFzZScgaWQ9JzYnIHZhbHVlPSc2JyBjaGVja2VkPXt0aGlzLnN0YXRlLnBoYXNlID09PSAnNid9IG9uQ2hhbmdlPXtBZGRGb29kQWN0aW9ucy51cGRhdGVQaGFzZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nNic+R0FQUyBQaGFzZSA2PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFkaW8gcmFkaW8taW5saW5lJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdwaGFzZScgaWQ9JzcnIHZhbHVlPSc3JyBjaGVja2VkPXt0aGlzLnN0YXRlLnBoYXNlID09PSAnNyd9IG9uQ2hhbmdlPXtBZGRGb29kQWN0aW9ucy51cGRhdGVQaGFzZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nNyc+R0FQUyBQaGFzZSA3PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5Jz5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEZvb2RcbiIsIi8qZXNsaW50IG5vLXVudXNlZC12YXJzOiAwKi9cbi8qZXNsaW50IG5vLXVuZGVmOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJ1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL0Zvb3RlcidcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2YmFyIGhpc3Rvcnk9e3RoaXMucHJvcHMuaGlzdG9yeX0gLz5cbiAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHAiLCIvKmdsb2JhbCAkICovXG4vKmVzbGludCBuby11bnVzZWQtdmFyczogMCovXG4vKmVzbGludCBuby11bmRlZjogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEZvb2RTdG9yZSBmcm9tICcuLi9zdG9yZXMvRm9vZFN0b3JlJ1xuaW1wb3J0IEZvb2RBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvRm9vZEFjdGlvbnMnXG5cbmNsYXNzIEZvb2QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0gRm9vZFN0b3JlLmdldFN0YXRlKClcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBGb29kU3RvcmUubGlzdGVuKHRoaXMub25DaGFuZ2UpXG4gICAgICAgIEZvb2RBY3Rpb25zLmdldEZvb2QodGhpcy5wcm9wcy5wYXJhbXMuX2lkKVxuXG4gICAgICAgICQoJy5tYWduaWZpYy1wb3B1cCcpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC16b29tLWluJyxcbiAgICAgICAgICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IHRydWUsXG4gICAgICAgICAgICBtaWRDbGljazogdHJ1ZSxcbiAgICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgRm9vZFN0b3JlLnVubGlzdGVuKHRoaXMub25DaGFuZ2UpXG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgLy8gRmV0Y2ggbmV3IGNoYXJhY2h0ZXIgZGF0YSB3aGVuIFVSTCBwYXRoIGNoYW5nZXNcbiAgICAgICAgaWYgKHByZXZQcm9wcy5wYXJhbXMuaWQgIT09IHRoaXMucHJvcHMucGFyYW1zLl9pZCkge1xuICAgICAgICAgICAgRm9vZEFjdGlvbnMuZ2V0Rm9vZCh0aGlzLnByb3BzLnBhcmFtcy5faWQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoYW5nZShzdGF0ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9maWxlLWltZyc+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbWFnbmlmaWMtcG9wdXAnIGhyZWY9J2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvYy9jOS8tSW5zZXJ0X2ltYWdlX2hlcmUtLnN2Zyc+PGltZyBzcmM9J2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvYy9jOS8tSW5zZXJ0X2ltYWdlX2hlcmUtLnN2ZycvPjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWEtYm9keSc+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWU6XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt0aGlzLnN0YXRlLm5hbWV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvc21hbGw+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnk6XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt0aGlzLnN0YXRlLmNhdGVnb3J5fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD5QaGFzZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucGhhc2V9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvc21hbGw+PGJyLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb29kXG4iLCIvKmVzbGludCBuby11bnVzZWQtdmFyczogMCovXG4vKmVzbGludCBuby11bmRlZjogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQge2lzRXF1YWx9IGZyb20gJ3VuZGVyc2NvcmUnXG5pbXBvcnQgRm9vZExpc3RTdG9yZSBmcm9tICcuLi9zdG9yZXMvRm9vZExpc3RTdG9yZSdcbmltcG9ydCBGb29kTGlzdEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9Gb29kTGlzdEFjdGlvbnMnXG5sZXQgbG9nID0gJy4uLy4uL3V0aWxzL2xvZ2dlcidcblxuY2xhc3MgRm9vZExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0gRm9vZExpc3RTdG9yZS5nZXRTdGF0ZSgpXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgRm9vZExpc3RBY3Rpb25zLmdldEZvb2RzKHRoaXMucHJvcHMucGFyYW1zKVxuICAgICAgICBGb29kTGlzdFN0b3JlLmxpc3Rlbih0aGlzLm9uQ2hhbmdlKVxuICAgICAgICBsb2cuZGVidWcoJ2NvbXBvbmVudERpZE1vdW50JywgdGhpcy5wcm9wcy5wYXJhbXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIEZvb2RMaXN0U3RvcmUudW5saXN0ZW4odGhpcy5vbkNoYW5nZSlcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKSB7XG4gICAgICAgIGxvZy5kZWJ1ZygnY29tcG9uZW50RGlkVXBkYXRlJywgdGhpcy5wcm9wcy5wYXJhbXMpXG4gICAgICAgIGlmICghaXNFcXVhbChwcmV2UHJvcHMucGFyYW1zLCB0aGlzLnByb3BzLnBhcmFtcykpIHtcbiAgICAgICAgICAgIEZvb2RMaXN0QWN0aW9ucy5nZXRGb29kcyh0aGlzLnByb3BzLnBhcmFtcylcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2hhbmdlKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsb2cuZGVidWcoJ0ZvdW5kOiAnICsgdGhpcy5zdGF0ZS5mb29kcy5sZW5ndGggKyAnIGZvb2RzJylcbiAgICAgICAgbGV0IGZvb2RMaXN0ID0gdGhpcy5zdGF0ZS5mb29kcy5tYXAoKGZvb2QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBsb2cuZGVidWcoJ0dvdCBhIGZvb2RsaXN0JylcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Zvb2QuX2lkfSBjbGFzc05hbWU9J2xpc3QtZ3JvdXAtaXRlbSBhbmltYXRlZCBmYWRlSW4nPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdwb3NpdGlvbiBwdWxsLWxlZnQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCArIDF9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHVsbC1sZWZ0IHRodW1iLWxnJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz17Jy9mb29kP19pZD0nICsgZm9vZC5faWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nbWVkaWEtb2JqZWN0JyBzcmM9J2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvYy9jOS8tSW5zZXJ0X2ltYWdlX2hlcmUtLnN2ZycvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21lZGlhLWJvZHknPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmFtZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57Zm9vZC5uYW1lfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENhdGVnb3J5OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntmb29kLmNhdGVnb3J5fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGw+UGhhc2U6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9vZC5waGFzZX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPjxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaXN0LWdyb3VwJz57Zm9vZExpc3R9PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vZExpc3RcbiIsIi8qZXNsaW50IG5vLXVudXNlZC12YXJzOiAwKi9cbi8qZXNsaW50IG5vLXVuZGVmOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBGb290ZXJTdG9yZSBmcm9tICcuLi9zdG9yZXMvRm9vdGVyU3RvcmUnXG5pbXBvcnQgRm9vdGVyQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0Zvb3RlckFjdGlvbnMnXG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSBGb290ZXJTdG9yZS5nZXRTdGF0ZSgpXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgRm9vdGVyU3RvcmUubGlzdGVuKHRoaXMub25DaGFuZ2UpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIEZvb3RlclN0b3JlLnVubGlzdGVuKHRoaXMub25DaGFuZ2UpXG4gICAgfVxuXG4gICAgb25DaGFuZ2Uoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSlcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9vdGVyPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtc20tNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nbGVhZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+SW5mb3JtYXRpb248L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5kXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Q29weXJpZ2h0PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Qb3dlcmVkIGJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+Tm9kZS5qczwvc3Ryb25nPixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Nb25nb0RCPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPlJlYWN0PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGggRmx1eCBhcmNoaXRlY3R1cmUgYW5kIHNlcnZlci1zaWRlIHJlbmRlcmluZy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyXG4iLCIvKmVzbGludCBuby11bnVzZWQtdmFyczogMCovXG4vKmVzbGludCBuby11bmRlZjogMCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgSG9tZVN0b3JlIGZyb20gJy4uL3N0b3Jlcy9Ib21lU3RvcmUnXG5pbXBvcnQgSG9tZUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9Ib21lQWN0aW9ucydcbmltcG9ydCB7Zmlyc3QsIHdpdGhvdXQsIGZpbmRXaGVyZX0gZnJvbSAndW5kZXJzY29yZSdcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSBIb21lU3RvcmUuZ2V0U3RhdGUoKVxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIEhvbWVTdG9yZS5saXN0ZW4odGhpcy5vbkNoYW5nZSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgSG9tZVN0b3JlLnVubGlzdGVuKHRoaXMub25DaGFuZ2UpXG4gICAgfVxuXG4gICAgb25DaGFuZ2Uoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSlcbiAgICB9XG5cbiAgICBoYW5kbGVDbGljayhjaGFyYWN0ZXIpIHt9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGh1bWJuYWlsIGZhZGVJblVwIGFuaW1hdGVkJz5cbiAgICAgICAgICAgICAgICA8cD5UaGlzIGlzIGhvbWU8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIiwiLypnbG9iYWwgJCwgaW8gKi9cbi8qZXNsaW50IG5vLXVudXNlZC12YXJzOiAwKi9cbi8qZXNsaW50IG5vLXVuZGVmOiAwICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBOYXZiYXJTdG9yZSBmcm9tICcuLi9zdG9yZXMvTmF2YmFyU3RvcmUnXG5pbXBvcnQgTmF2YmFyQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL05hdmJhckFjdGlvbnMnXG5cbmNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSBOYXZiYXJTdG9yZS5nZXRTdGF0ZSgpXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgTmF2YmFyU3RvcmUubGlzdGVuKHRoaXMub25DaGFuZ2UpXG4gICAgICAgIE5hdmJhckFjdGlvbnMuZ2V0Rm9vZENvdW50KClcblxuICAgICAgICBsZXQgc29ja2V0ID0gaW8uY29ubmVjdCgpXG5cbiAgICAgICAgc29ja2V0Lm9uKCdvbmxpbmVVc2VycycsIChkYXRhKSA9PiB7XG4gICAgICAgICAgICBOYXZiYXJBY3Rpb25zLnVwZGF0ZU9ubGluZVVzZXJzKGRhdGEpXG4gICAgICAgIH0pXG5cbiAgICAgICAgJChkb2N1bWVudCkuYWpheFN0YXJ0KCgpID0+IHtcbiAgICAgICAgICAgIE5hdmJhckFjdGlvbnMudXBkYXRlQWpheEFuaW1hdGlvbignZmFkZUluJylcbiAgICAgICAgfSlcblxuICAgICAgICAkKGRvY3VtZW50KS5hamF4Q29tcGxldGUoKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgTmF2YmFyQWN0aW9ucy51cGRhdGVBamF4QW5pbWF0aW9uKCdmYWRlT3V0JylcbiAgICAgICAgICAgIH0sIDc1MClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgTmF2YmFyU3RvcmUudW5saXN0ZW4odGhpcy5vbkNoYW5nZSlcbiAgICB9XG5cbiAgICBvbkNoYW5nZShzdGF0ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKVxuICAgIH1cblxuICAgIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgbGV0IHNlYXJjaFF1ZXJ5ID0gdGhpcy5zdGF0ZS5zZWFyY2hRdWVyeS50cmltKClcblxuICAgICAgICBpZiAoc2VhcmNoUXVlcnkpIHtcbiAgICAgICAgICAgIE5hdmJhckFjdGlvbnMuZmluZEZvb2Qoe3NlYXJjaFF1ZXJ5OiBzZWFyY2hRdWVyeSwgc2VhcmNoRm9ybTogdGhpcy5yZWZzLnNlYXJjaEZvcm0sIGhpc3Rvcnk6IHRoaXMucHJvcHMuaGlzdG9yeX0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT0nbmF2YmFyIG5hdmJhci1kZWZhdWx0IG5hdmJhci1zdGF0aWMtdG9wJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbmF2YmFyLWhlYWRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT0nYnV0dG9uJyBjbGFzc05hbWU9J25hdmJhci10b2dnbGUgY29sbGFwc2VkJyBkYXRhLXRvZ2dsZT0nY29sbGFwc2UnIGRhdGEtdGFyZ2V0PScjbmF2YmFyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc3Itb25seSc+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb24tYmFyJz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb24tYmFyJz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2ljb24tYmFyJz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nLycgY2xhc3NOYW1lPSduYXZiYXItYnJhbmQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gcmVmPSd0cmlhbmdsZXMnIGNsYXNzTmFtZT17J3RyaWFuZ2xlcyBhbmltYXRlZCAnICsgdGhpcy5zdGF0ZS5hamF4QW5pbWF0aW9uQ2xhc3N9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmkgaW52ZXJ0Jz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJpIGludmVydCc+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyaSc+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyaSBpbnZlcnQnPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmkgaW52ZXJ0Jz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJpJz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJpIGludmVydCc+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyaSc+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyaSBpbnZlcnQnPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgTGlmZVRlY2hcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nYmFkZ2UgYmFkZ2UtdXAgYmFkZ2UtZGFuZ2VyJz57dGhpcy5zdGF0ZS5vbmxpbmVVc2Vyc308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPSduYXZiYXInIGNsYXNzTmFtZT0nbmF2YmFyLWNvbGxhcHNlIGNvbGxhcHNlJz5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gcmVmPSdzZWFyY2hGb3JtJyBjbGFzc05hbWU9J25hdmJhci1mb3JtIG5hdmJhci1sZWZ0IGFuaW1hdGVkJyBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZ3JvdXAnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgcGxhY2Vob2xkZXI9e3RoaXMuc3RhdGUudG90YWxGb29kcyArICcgRm9vZHMnfSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2hRdWVyeX0gb25DaGFuZ2U9e05hdmJhckFjdGlvbnMudXBkYXRlU2VhcmNoUXVlcnl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2lucHV0LWdyb3VwLWJ0bic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4gYnRuLWRlZmF1bHQnIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdnbHlwaGljb24gZ2x5cGhpY29uLXNlYXJjaCc+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPSduYXYgbmF2YmFyLW5hdic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy8nPkhvbWU8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0nZHJvcGRvd24nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnIGNsYXNzTmFtZT0nZHJvcGRvd24tdG9nZ2xlJyBkYXRhLXRvZ2dsZT0nZHJvcGRvd24nPlBoYXNlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY2FyZXQnPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZHJvcGRvd24tbWVudSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvcGhhc2UvMSc+R0FQUyBQaGFzZSAxPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nL3BoYXNlLzInPkdBUFMgUGhhc2UgMjwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9waGFzZS8zJz5HQVBTIFBoYXNlIDM8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvcGhhc2UvNCc+R0FQUyBQaGFzZSA0PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nL3BoYXNlLzUnPkdBUFMgUGhhc2UgNTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9waGFzZS82Jz5HQVBTIFBoYXNlIDY8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvcGhhc2UvNyc+R0FQUyBQaGFzZSA3PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvYWRkJz5BZGQ8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxuIiwiLyplc2xpbnQgbm8tdW51c2VkLXZhcnM6IDAqL1xuLyplc2xpbnQgbm8tdW5kZWY6IDAgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIgZnJvbSAncmVhY3Qtcm91dGVyJ1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSdcbmltcG9ydCBjcmVhdGVCcm93c2VySGlzdG9yeSBmcm9tICdoaXN0b3J5L2xpYi9jcmVhdGVCcm93c2VySGlzdG9yeSdcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZiYXInXG5cbmxldCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKVxuXG5SZWFjdERPTS5yZW5kZXIoPFJvdXRlciBoaXN0b3J5PXtoaXN0b3J5fT57cm91dGVzfTwvUm91dGVyPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKSIsIi8qZXNsaW50IG5vLXVudXNlZC12YXJzOiAwKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7Um91dGV9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCdcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9Ib21lJ1xuaW1wb3J0IEZvb2RMaXN0IGZyb20gJy4vY29tcG9uZW50cy9Gb29kTGlzdCdcbmltcG9ydCBGb29kIGZyb20gJy4vY29tcG9uZW50cy9Gb29kJ1xuaW1wb3J0IEFkZEZvb2QgZnJvbSAnLi9jb21wb25lbnRzL0FkZEZvb2QnXG5cbmV4cG9ydCBkZWZhdWx0KFxuICAgIDxSb3V0ZSBjb21wb25lbnQ9e0FwcH0+XG4gICAgICAgIDxSb3V0ZSBwYXRoPScvJyBjb21wb25lbnQ9e0hvbWV9Lz5cbiAgICAgICAgPFJvdXRlIHBhdGg9Jy9waGFzZS86cGhhc2UnIGNvbXBvbmVudD17Rm9vZExpc3R9Lz5cbiAgICAgICAgPFJvdXRlIHBhdGg9Jy9hZGQnIGNvbXBvbmVudD17QWRkRm9vZH0vPlxuICAgICAgICA8Um91dGUgcGF0aD0nL2Zvb2QnIGNvbXBvbmVudD17Rm9vZH0vPlxuICAgIDwvUm91dGU+XG4pXG4iLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCdcbmltcG9ydCBBZGRGb29kQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0FkZEZvb2RBY3Rpb25zJ1xuXG5jbGFzcyBBZGRGb29kU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJpbmRBY3Rpb25zKEFkZEZvb2RBY3Rpb25zKVxuICAgICAgICB0aGlzLm5hbWUgPSAnJ1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gJydcbiAgICAgICAgdGhpcy5waGFzZSA9IDBcbiAgICAgICAgdGhpcy5oZWxwQmxvY2sgPSAnJ1xuICAgICAgICB0aGlzLm5hbWVWYWxpZGF0aW9uU3RhdGUgPSAnJ1xuICAgICAgICB0aGlzLmNhdGVnb3J5VmFsaWRhdGlvblN0YXRlID0gJydcbiAgICAgICAgdGhpcy5waGFzZVZhbGlkYXRpb25TdGF0ZSA9ICcnXG4gICAgfVxuXG4gICAgb25BZGRGb29kU3VjY2VzcyhzdWNjZXNzTWVzc2FnZSkge1xuICAgICAgICB0aGlzLm5hbWVWYWxpZGF0aW9uU3RhdGUgPSAnaGFzLXN1Y2Nlc3MnXG4gICAgICAgIHRoaXMuaGVscEJsb2NrID0gc3VjY2Vzc01lc3NhZ2VcbiAgICB9XG5cbiAgICBvbkFkZEZvb2RGYWlsKGVycm9yTWVzc2FnZSkge1xuICAgICAgICB0aGlzLm5hbWVWYWxpZGF0aW9uU3RhdGUgPSAnaGFzLWVycm9yJ1xuICAgICAgICB0aGlzLmhlbHBCbG9jayA9IGVycm9yTWVzc2FnZVxuICAgIH1cblxuICAgIG9uVXBkYXRlTmFtZShldmVudCkge1xuICAgICAgICB0aGlzLm5hbWUgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgdGhpcy5uYW1lVmFsaWRhdGlvblN0YXRlID0gJydcbiAgICAgICAgdGhpcy5oZWxwQmxvY2sgPSAnJ1xuICAgIH1cblxuICAgIG9uVXBkYXRlQ2F0ZWdvcnkoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICB0aGlzLmNhdGVnb3J5VmFsaWRhdGlvblN0YXRlID0gJydcbiAgICB9XG5cbiAgICBvblVwZGF0ZVBoYXNlKGV2ZW50KSB7XG4gICAgICAgIHRoaXMucGhhc2UgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgdGhpcy5waGFzZVZhbGlkYXRpb25TdGF0ZSA9ICcnXG4gICAgfVxuXG4gICAgb25JbnZhbGlkTmFtZSgpIHtcbiAgICAgICAgdGhpcy5uYW1lVmFsaWRhdGlvblN0YXRlID0gJ2hhcy1lcnJvcidcbiAgICAgICAgdGhpcy5oZWxwQmxvY2sgPSAnUGxlYXNlIGVudGVyIGEgRm9vZCBuYW1lLidcbiAgICB9XG5cbiAgICBvbkludmFsaWRDYXRlZ29yeSgpIHtcbiAgICAgICAgdGhpcy5jYXRlZ29yeVZhbGlkYXRpb25TdGF0ZSA9ICdoYXMtZXJyb3InXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlU3RvcmUoQWRkRm9vZFN0b3JlKVxuIiwiLyogZ2xvYmFsIHRvYXN0ciAqL1xuaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnXG5pbXBvcnQgRm9vZExpc3RBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvRm9vZExpc3RBY3Rpb25zJ1xubGV0IGxvZyA9ICcuLi8uLi91dGlscy9sb2dnZXInXG5cbmNsYXNzIEZvb2RMaXN0U3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJpbmRBY3Rpb25zKEZvb2RMaXN0QWN0aW9ucylcbiAgICAgICAgdGhpcy5mb29kcyA9IFtdXG4gICAgfVxuXG4gICAgZ2V0Rm9vZHNTdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgbG9nLmRlYnVnKCdvbkdldENoYXJhY3RlclN1Y2Nlc3MgZGF0YTonLCBkYXRhKVxuICAgICAgICB0aGlzLmZvb2RzID0gZGF0YVxuICAgIH1cblxuICAgIGdldEZvb2RzRmFpbChqcVhocikge1xuICAgICAgICBsb2cuZGVidWcoJ29uR2V0Q2hhcmFjdGVyc0ZhaWxzJylcbiAgICAgICAgdG9hc3RyLmVycm9yKGpxWGhyLnJlc3BvbnNlSlNPTi5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZVN0b3JlKEZvb2RMaXN0U3RvcmUpIiwiLypnbG9iYWwgJCwgdG9hc3RyICovXG4vKmVzbGludCBuby11bnVzZWQtdmFyczogMCovXG4vKmVzbGludCBuby11bmRlZjogMCAqL1xuaW1wb3J0IHthc3NpZ24sIGNvbnRhaW5zfSBmcm9tICd1bmRlcnNjb3JlJ1xuaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnXG5pbXBvcnQgRm9vZEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9Gb29kQWN0aW9ucydcblxuY2xhc3MgRm9vZFN0b3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5iaW5kQWN0aW9ucyhGb29kQWN0aW9ucylcbiAgICAgICAgdGhpcy5faWQgPSAwXG4gICAgICAgIHRoaXMubmFtZSA9ICcnXG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSAwXG4gICAgICAgIHRoaXMucGhhc2UgPSAnJ1xuICAgIH1cblxuICAgIG9uR2V0Rm9vZFN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICBhc3NpZ24odGhpcywgZGF0YSlcbiAgICAgICAgbGV0IGxvY2FsRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb29kcycpXG4gICAgICAgICAgICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zvb2RzJykpXG4gICAgICAgICAgICA6IHt9XG4gICAgICAgIGxldCByZXBvcnRzID0gbG9jYWxEYXRhLnJlcG9ydHMgfHwgW11cbiAgICB9XG5cbiAgICBvbkdldEZvb2RGYWlsKGpxWGhyKSB7XG4gICAgICAgIHRvYXN0ci5lcnJvcihqcVhoci5yZXNwb25zZUpTT04ubWVzc2FnZSlcbiAgICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZVN0b3JlKEZvb2RTdG9yZSlcbiIsImltcG9ydCBhbHQgZnJvbSAnLi4vYWx0J1xuaW1wb3J0IEZvb3RlckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9Gb290ZXJBY3Rpb25zJ1xuXG5jbGFzcyBGb290ZXJTdG9yZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYmluZEFjdGlvbnMoRm9vdGVyQWN0aW9ucylcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVTdG9yZShGb290ZXJTdG9yZSkiLCIvKmdsb2JhbCB0b2FzdHIgKi9cbmltcG9ydCBhbHQgZnJvbSAnLi4vYWx0J1xuaW1wb3J0IEhvbWVBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvSG9tZUFjdGlvbnMnXG5cbmNsYXNzIEhvbWVTdG9yZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYmluZEFjdGlvbnMoSG9tZUFjdGlvbnMpXG4gICAgICAgIHRoaXMuZm9vZHMgPSBbXVxuICAgIH1cblxuICAgIG9uR2V0VHdvQ2hhcmFjdGVyc1N1Y2Nlc3MoZGF0YSkge1xuICAgICAgICB0aGlzLmZvb2RzID0gZGF0YVxuICAgIH1cblxuICAgIG9uR2V0VHdvQ2hhcmFjdGVyc0ZhaWwoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRvYXN0ci5lcnJvcihlcnJvck1lc3NhZ2UpXG4gICAgfVxuXG4gICAgb25Wb3RlRmFpbChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdG9hc3RyLmVycm9yKGVycm9yTWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVTdG9yZShIb21lU3RvcmUpXG4iLCIvKmdsb2JhbCB0b2FzdHIgKi9cbmltcG9ydCBhbHQgZnJvbSAnLi4vYWx0J1xuaW1wb3J0IE5hdmJhckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9OYXZiYXJBY3Rpb25zJ1xuXG5jbGFzcyBOYXZiYXJTdG9yZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYmluZEFjdGlvbnMoTmF2YmFyQWN0aW9ucylcbiAgICAgICAgdGhpcy50b3RhbEZvb2RzID0gMFxuICAgICAgICB0aGlzLm9ubGluZVVzZXJzID0gMFxuICAgICAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gJydcbiAgICAgICAgdGhpcy5hamF4QW5pbWF0aW9uQ2xhc3MgPSAnJ1xuICAgIH1cblxuICAgIG9uRmluZEZvb2RTdWNjZXNzKHBheWxvYWQpIHtcbiAgICAgICAgcGF5bG9hZC5oaXN0b3J5LnB1c2hTdGF0ZShudWxsLCAnL2Zvb2RzLycgKyBwYXlsb2FkLmZvb2RJZClcbiAgICB9XG5cbiAgICBvbkZpbmRGb29kRmFpbChwYXlsb2FkKSB7XG4gICAgICAgIHBheWxvYWQuc2VhcmNoRm9ybS5jbGFzc0xpc3QuYWRkKCdzaGFrZScpXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcGF5bG9hZC5zZWFyY2hGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ3NoYWtlJylcbiAgICAgICAgfSwgMTAwMClcbiAgICB9XG5cbiAgICBvblVwZGF0ZU9ubGluZVVzZXJzKGRhdGEpIHtcbiAgICAgICAgdGhpcy5vbmxpbmVVc2VycyA9IGRhdGEub25saW5lVXNlcnNcbiAgICB9XG5cbiAgICBvblVwZGF0ZUFqYXhBbmltYXRpb24oY2xhc3NOYW1lKSB7XG4gICAgICAgIHRoaXMuYWpheEFuaW1hdGlvbkNsYXNzID0gY2xhc3NOYW1lIC8vZmFkZWluIG9yIGZhZGVvdXRcbiAgICB9XG5cbiAgICBvblVwZGF0ZVNlYXJjaFF1ZXJ5KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuc2VhcmNoUXVlcnkgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICB9XG5cbiAgICBvbkdldEZvb2RDb3VudFN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICB0aGlzLnRvdGFsRm9vZHMgPSBkYXRhLmNvdW50XG4gICAgfVxuXG4gICAgb25HZXRGb29kQ291bnRGYWlsKGpxWGhyKSB7XG4gICAgICAgIHRvYXN0ci5lcnJvcihqcVhoci5yZXNwb25zZUpTT04ubWVzc2FnZSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVTdG9yZShOYXZiYXJTdG9yZSlcbiIsInZhciBwU2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4vbGliL2tleXMuanMnKTtcbnZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vbGliL2lzX2FyZ3VtZW50cy5qcycpO1xuXG52YXIgZGVlcEVxdWFsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYWN0dWFsLCBleHBlY3RlZCwgb3B0cykge1xuICBpZiAoIW9wdHMpIG9wdHMgPSB7fTtcbiAgLy8gNy4xLiBBbGwgaWRlbnRpY2FsIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgYXMgZGV0ZXJtaW5lZCBieSA9PT0uXG4gIGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG5cbiAgfSBlbHNlIGlmIChhY3R1YWwgaW5zdGFuY2VvZiBEYXRlICYmIGV4cGVjdGVkIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBhY3R1YWwuZ2V0VGltZSgpID09PSBleHBlY3RlZC5nZXRUaW1lKCk7XG5cbiAgLy8gNy4zLiBPdGhlciBwYWlycyB0aGF0IGRvIG5vdCBib3RoIHBhc3MgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnLFxuICAvLyBlcXVpdmFsZW5jZSBpcyBkZXRlcm1pbmVkIGJ5ID09LlxuICB9IGVsc2UgaWYgKCFhY3R1YWwgfHwgIWV4cGVjdGVkIHx8IHR5cGVvZiBhY3R1YWwgIT0gJ29iamVjdCcgJiYgdHlwZW9mIGV4cGVjdGVkICE9ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG9wdHMuc3RyaWN0ID8gYWN0dWFsID09PSBleHBlY3RlZCA6IGFjdHVhbCA9PSBleHBlY3RlZDtcblxuICAvLyA3LjQuIEZvciBhbGwgb3RoZXIgT2JqZWN0IHBhaXJzLCBpbmNsdWRpbmcgQXJyYXkgb2JqZWN0cywgZXF1aXZhbGVuY2UgaXNcbiAgLy8gZGV0ZXJtaW5lZCBieSBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGFzIHZlcmlmaWVkXG4gIC8vIHdpdGggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKSwgdGhlIHNhbWUgc2V0IG9mIGtleXNcbiAgLy8gKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksIGVxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeVxuICAvLyBjb3JyZXNwb25kaW5nIGtleSwgYW5kIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS4gTm90ZTogdGhpc1xuICAvLyBhY2NvdW50cyBmb3IgYm90aCBuYW1lZCBhbmQgaW5kZXhlZCBwcm9wZXJ0aWVzIG9uIEFycmF5cy5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqRXF1aXYoYWN0dWFsLCBleHBlY3RlZCwgb3B0cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWRPck51bGwodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyICh4KSB7XG4gIGlmICgheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHgubGVuZ3RoICE9PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIHguY29weSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgeC5zbGljZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoeC5sZW5ndGggPiAwICYmIHR5cGVvZiB4WzBdICE9PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gb2JqRXF1aXYoYSwgYiwgb3B0cykge1xuICB2YXIgaSwga2V5O1xuICBpZiAoaXNVbmRlZmluZWRPck51bGwoYSkgfHwgaXNVbmRlZmluZWRPck51bGwoYikpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvLyBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuXG4gIGlmIChhLnByb3RvdHlwZSAhPT0gYi5wcm90b3R5cGUpIHJldHVybiBmYWxzZTtcbiAgLy9+fn5JJ3ZlIG1hbmFnZWQgdG8gYnJlYWsgT2JqZWN0LmtleXMgdGhyb3VnaCBzY3Jld3kgYXJndW1lbnRzIHBhc3NpbmcuXG4gIC8vICAgQ29udmVydGluZyB0byBhcnJheSBzb2x2ZXMgdGhlIHByb2JsZW0uXG4gIGlmIChpc0FyZ3VtZW50cyhhKSkge1xuICAgIGlmICghaXNBcmd1bWVudHMoYikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgYSA9IHBTbGljZS5jYWxsKGEpO1xuICAgIGIgPSBwU2xpY2UuY2FsbChiKTtcbiAgICByZXR1cm4gZGVlcEVxdWFsKGEsIGIsIG9wdHMpO1xuICB9XG4gIGlmIChpc0J1ZmZlcihhKSkge1xuICAgIGlmICghaXNCdWZmZXIoYikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB0cnkge1xuICAgIHZhciBrYSA9IG9iamVjdEtleXMoYSksXG4gICAgICAgIGtiID0gb2JqZWN0S2V5cyhiKTtcbiAgfSBjYXRjaCAoZSkgey8vaGFwcGVucyB3aGVuIG9uZSBpcyBhIHN0cmluZyBsaXRlcmFsIGFuZCB0aGUgb3RoZXIgaXNuJ3RcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChrZXlzIGluY29ycG9yYXRlc1xuICAvLyBoYXNPd25Qcm9wZXJ0eSlcbiAgaWYgKGthLmxlbmd0aCAhPSBrYi5sZW5ndGgpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvL3RoZSBzYW1lIHNldCBvZiBrZXlzIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLFxuICBrYS5zb3J0KCk7XG4gIGtiLnNvcnQoKTtcbiAgLy9+fn5jaGVhcCBrZXkgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChrYVtpXSAhPSBrYltpXSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvL2VxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeSBjb3JyZXNwb25kaW5nIGtleSwgYW5kXG4gIC8vfn5+cG9zc2libHkgZXhwZW5zaXZlIGRlZXAgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGtleSA9IGthW2ldO1xuICAgIGlmICghZGVlcEVxdWFsKGFba2V5XSwgYltrZXldLCBvcHRzKSkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0eXBlb2YgYSA9PT0gdHlwZW9mIGI7XG59XG4iLCJ2YXIgc3VwcG9ydHNBcmd1bWVudHNDbGFzcyA9IChmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50cylcbn0pKCkgPT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnRzQXJndW1lbnRzQ2xhc3MgPyBzdXBwb3J0ZWQgOiB1bnN1cHBvcnRlZDtcblxuZXhwb3J0cy5zdXBwb3J0ZWQgPSBzdXBwb3J0ZWQ7XG5mdW5jdGlvbiBzdXBwb3J0ZWQob2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PSAnW29iamVjdCBBcmd1bWVudHNdJztcbn07XG5cbmV4cG9ydHMudW5zdXBwb3J0ZWQgPSB1bnN1cHBvcnRlZDtcbmZ1bmN0aW9uIHVuc3VwcG9ydGVkKG9iamVjdCl7XG4gIHJldHVybiBvYmplY3QgJiZcbiAgICB0eXBlb2Ygb2JqZWN0ID09ICdvYmplY3QnICYmXG4gICAgdHlwZW9mIG9iamVjdC5sZW5ndGggPT0gJ251bWJlcicgJiZcbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnY2FsbGVlJykgJiZcbiAgICAhT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgJ2NhbGxlZScpIHx8XG4gICAgZmFsc2U7XG59O1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIE9iamVjdC5rZXlzID09PSAnZnVuY3Rpb24nXG4gID8gT2JqZWN0LmtleXMgOiBzaGltO1xuXG5leHBvcnRzLnNoaW0gPSBzaGltO1xuZnVuY3Rpb24gc2hpbSAob2JqKSB7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIGtleXMucHVzaChrZXkpO1xuICByZXR1cm4ga2V5cztcbn1cbiIsIi8qKlxuICogSW5kaWNhdGVzIHRoYXQgbmF2aWdhdGlvbiB3YXMgY2F1c2VkIGJ5IGEgY2FsbCB0byBoaXN0b3J5LnB1c2guXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBQVVNIID0gJ1BVU0gnO1xuXG5leHBvcnRzLlBVU0ggPSBQVVNIO1xuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBuYXZpZ2F0aW9uIHdhcyBjYXVzZWQgYnkgYSBjYWxsIHRvIGhpc3RvcnkucmVwbGFjZS5cbiAqL1xudmFyIFJFUExBQ0UgPSAnUkVQTEFDRSc7XG5cbmV4cG9ydHMuUkVQTEFDRSA9IFJFUExBQ0U7XG4vKipcbiAqIEluZGljYXRlcyB0aGF0IG5hdmlnYXRpb24gd2FzIGNhdXNlZCBieSBzb21lIG90aGVyIGFjdGlvbiBzdWNoXG4gKiBhcyB1c2luZyBhIGJyb3dzZXIncyBiYWNrL2ZvcndhcmQgYnV0dG9ucyBhbmQvb3IgbWFudWFsbHkgbWFuaXB1bGF0aW5nXG4gKiB0aGUgVVJMIGluIGEgYnJvd3NlcidzIGxvY2F0aW9uIGJhci4gVGhpcyBpcyB0aGUgZGVmYXVsdC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0V2ZW50SGFuZGxlcnMvb25wb3BzdGF0ZVxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKi9cbnZhciBQT1AgPSAnUE9QJztcblxuZXhwb3J0cy5QT1AgPSBQT1A7XG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIFBVU0g6IFBVU0gsXG4gIFJFUExBQ0U6IFJFUExBQ0UsXG4gIFBPUDogUE9QXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5sb29wQXN5bmMgPSBsb29wQXN5bmM7XG5cbmZ1bmN0aW9uIGxvb3BBc3luYyh0dXJucywgd29yaywgY2FsbGJhY2spIHtcbiAgdmFyIGN1cnJlbnRUdXJuID0gMDtcbiAgdmFyIGlzRG9uZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgaXNEb25lID0gdHJ1ZTtcbiAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBpZiAoaXNEb25lKSByZXR1cm47XG5cbiAgICBpZiAoY3VycmVudFR1cm4gPCB0dXJucykge1xuICAgICAgd29yay5jYWxsKHRoaXMsIGN1cnJlbnRUdXJuKyssIG5leHQsIGRvbmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpO1xufSIsIi8qZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2F2ZVN0YXRlID0gc2F2ZVN0YXRlO1xuZXhwb3J0cy5yZWFkU3RhdGUgPSByZWFkU3RhdGU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBLZXlQcmVmaXggPSAnQEBIaXN0b3J5Lyc7XG52YXIgUXVvdGFFeGNlZWRlZEVycm9yID0gJ1F1b3RhRXhjZWVkZWRFcnJvcic7XG52YXIgU2VjdXJpdHlFcnJvciA9ICdTZWN1cml0eUVycm9yJztcblxuZnVuY3Rpb24gY3JlYXRlS2V5KGtleSkge1xuICByZXR1cm4gS2V5UHJlZml4ICsga2V5O1xufVxuXG5mdW5jdGlvbiBzYXZlU3RhdGUoa2V5LCBzdGF0ZSkge1xuICB0cnkge1xuICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGNyZWF0ZUtleShrZXkpLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvci5uYW1lID09PSBTZWN1cml0eUVycm9yKSB7XG4gICAgICAvLyBCbG9ja2luZyBjb29raWVzIGluIENocm9tZS9GaXJlZm94L1NhZmFyaSB0aHJvd3MgU2VjdXJpdHlFcnJvciBvbiBhbnlcbiAgICAgIC8vIGF0dGVtcHQgdG8gYWNjZXNzIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ1toaXN0b3J5XSBVbmFibGUgdG8gc2F2ZSBzdGF0ZTsgc2Vzc2lvblN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSBkdWUgdG8gc2VjdXJpdHkgc2V0dGluZ3MnKSA6IHVuZGVmaW5lZDtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlcnJvci5uYW1lID09PSBRdW90YUV4Y2VlZGVkRXJyb3IgJiYgd2luZG93LnNlc3Npb25TdG9yYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gU2FmYXJpIFwicHJpdmF0ZSBtb2RlXCIgdGhyb3dzIFF1b3RhRXhjZWVkZWRFcnJvci5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ1toaXN0b3J5XSBVbmFibGUgdG8gc2F2ZSBzdGF0ZTsgc2Vzc2lvblN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSBpbiBTYWZhcmkgcHJpdmF0ZSBtb2RlJykgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWFkU3RhdGUoa2V5KSB7XG4gIHZhciBqc29uID0gdW5kZWZpbmVkO1xuICB0cnkge1xuICAgIGpzb24gPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShjcmVhdGVLZXkoa2V5KSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLm5hbWUgPT09IFNlY3VyaXR5RXJyb3IpIHtcbiAgICAgIC8vIEJsb2NraW5nIGNvb2tpZXMgaW4gQ2hyb21lL0ZpcmVmb3gvU2FmYXJpIHRocm93cyBTZWN1cml0eUVycm9yIG9uIGFueVxuICAgICAgLy8gYXR0ZW1wdCB0byBhY2Nlc3Mgd2luZG93LnNlc3Npb25TdG9yYWdlLlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnW2hpc3RvcnldIFVuYWJsZSB0byByZWFkIHN0YXRlOyBzZXNzaW9uU3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlIGR1ZSB0byBzZWN1cml0eSBzZXR0aW5ncycpIDogdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBpZiAoanNvbikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gSWdub3JlIGludmFsaWQgSlNPTi5cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmFkZEV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyO1xuZXhwb3J0cy5yZW1vdmVFdmVudExpc3RlbmVyID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbmV4cG9ydHMuZ2V0SGFzaFBhdGggPSBnZXRIYXNoUGF0aDtcbmV4cG9ydHMucmVwbGFjZUhhc2hQYXRoID0gcmVwbGFjZUhhc2hQYXRoO1xuZXhwb3J0cy5nZXRXaW5kb3dQYXRoID0gZ2V0V2luZG93UGF0aDtcbmV4cG9ydHMuZ28gPSBnbztcbmV4cG9ydHMuZ2V0VXNlckNvbmZpcm1hdGlvbiA9IGdldFVzZXJDb25maXJtYXRpb247XG5leHBvcnRzLnN1cHBvcnRzSGlzdG9yeSA9IHN1cHBvcnRzSGlzdG9yeTtcbmV4cG9ydHMuc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2ggPSBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaDtcblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgaWYgKG5vZGUuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBub2RlLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIGlmIChub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRIYXNoUGF0aCgpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHdpbmRvdy5sb2NhdGlvbi5oYXNoIGhlcmUgYmVjYXVzZSBpdCdzIG5vdFxuICAvLyBjb25zaXN0ZW50IGFjcm9zcyBicm93c2VycyAtIEZpcmVmb3ggd2lsbCBwcmUtZGVjb2RlIGl0IVxuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVsxXSB8fCAnJztcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUhhc2hQYXRoKHBhdGgpIHtcbiAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArICcjJyArIHBhdGgpO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dQYXRoKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xufVxuXG5mdW5jdGlvbiBnbyhuKSB7XG4gIGlmIChuKSB3aW5kb3cuaGlzdG9yeS5nbyhuKTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlckNvbmZpcm1hdGlvbihtZXNzYWdlLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayh3aW5kb3cuY29uZmlybShtZXNzYWdlKSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBpcyBzdXBwb3J0ZWQuIFRha2VuIGZyb20gTW9kZXJuaXpyLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9oaXN0b3J5LmpzXG4gKiBjaGFuZ2VkIHRvIGF2b2lkIGZhbHNlIG5lZ2F0aXZlcyBmb3IgV2luZG93cyBQaG9uZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9yYWNrdC9yZWFjdC1yb3V0ZXIvaXNzdWVzLzU4NlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgaWYgKCh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJiB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJiB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEZJWE1FOiBXb3JrIGFyb3VuZCBvdXIgYnJvd3NlciBoaXN0b3J5IG5vdCB3b3JraW5nIGNvcnJlY3RseSBvbiBDaHJvbWVcbiAgLy8gaU9TOiBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVhY3Qtcm91dGVyL2lzc3Vlcy8yNTY1XG4gIGlmICh1YS5pbmRleE9mKCdDcmlPUycpICE9PSAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnk7XG59XG5cbi8qKlxuICogUmV0dXJucyBmYWxzZSBpZiB1c2luZyBnbyhuKSB3aXRoIGhhc2ggaGlzdG9yeSBjYXVzZXMgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKCkge1xuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICByZXR1cm4gdWEuaW5kZXhPZignRmlyZWZveCcpID09PSAtMTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbmV4cG9ydHMuY2FuVXNlRE9NID0gY2FuVXNlRE9NOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9FeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vRXhlY3V0aW9uRW52aXJvbm1lbnQnKTtcblxudmFyIF9ET01VdGlscyA9IHJlcXVpcmUoJy4vRE9NVXRpbHMnKTtcblxudmFyIF9ET01TdGF0ZVN0b3JhZ2UgPSByZXF1aXJlKCcuL0RPTVN0YXRlU3RvcmFnZScpO1xuXG52YXIgX2NyZWF0ZURPTUhpc3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZURPTUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVET01IaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZURPTUhpc3RvcnkpO1xuXG52YXIgX3BhcnNlUGF0aCA9IHJlcXVpcmUoJy4vcGFyc2VQYXRoJyk7XG5cbnZhciBfcGFyc2VQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlUGF0aCk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgdXNlcyBIVE1MNSdzIGhpc3RvcnkgQVBJXG4gKiAocHVzaFN0YXRlLCByZXBsYWNlU3RhdGUsIGFuZCB0aGUgcG9wc3RhdGUgZXZlbnQpIHRvIG1hbmFnZSBoaXN0b3J5LlxuICogVGhpcyBpcyB0aGUgcmVjb21tZW5kZWQgbWV0aG9kIG9mIG1hbmFnaW5nIGhpc3RvcnkgaW4gYnJvd3NlcnMgYmVjYXVzZVxuICogaXQgcHJvdmlkZXMgdGhlIGNsZWFuZXN0IFVSTHMuXG4gKlxuICogTm90ZTogSW4gYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgZnVsbFxuICogcGFnZSByZWxvYWRzIHdpbGwgYmUgdXNlZCB0byBwcmVzZXJ2ZSBVUkxzLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCcm93c2VySGlzdG9yeSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAhX0V4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlLCAnQnJvd3NlciBoaXN0b3J5IG5lZWRzIGEgRE9NJykgOiBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICB2YXIgZm9yY2VSZWZyZXNoID0gb3B0aW9ucy5mb3JjZVJlZnJlc2g7XG5cbiAgdmFyIGlzU3VwcG9ydGVkID0gX0RPTVV0aWxzLnN1cHBvcnRzSGlzdG9yeSgpO1xuICB2YXIgdXNlUmVmcmVzaCA9ICFpc1N1cHBvcnRlZCB8fCBmb3JjZVJlZnJlc2g7XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uKGhpc3RvcnlTdGF0ZSkge1xuICAgIGhpc3RvcnlTdGF0ZSA9IGhpc3RvcnlTdGF0ZSB8fCB3aW5kb3cuaGlzdG9yeS5zdGF0ZSB8fCB7fTtcblxuICAgIHZhciBwYXRoID0gX0RPTVV0aWxzLmdldFdpbmRvd1BhdGgoKTtcbiAgICB2YXIgX2hpc3RvcnlTdGF0ZSA9IGhpc3RvcnlTdGF0ZTtcbiAgICB2YXIga2V5ID0gX2hpc3RvcnlTdGF0ZS5rZXk7XG5cbiAgICB2YXIgc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGtleSkge1xuICAgICAgc3RhdGUgPSBfRE9NU3RhdGVTdG9yYWdlLnJlYWRTdGF0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZSA9IG51bGw7XG4gICAgICBrZXkgPSBoaXN0b3J5LmNyZWF0ZUtleSgpO1xuXG4gICAgICBpZiAoaXNTdXBwb3J0ZWQpIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShfZXh0ZW5kcyh7fSwgaGlzdG9yeVN0YXRlLCB7IGtleToga2V5IH0pLCBudWxsLCBwYXRoKTtcbiAgICB9XG5cbiAgICB2YXIgbG9jYXRpb24gPSBfcGFyc2VQYXRoMlsnZGVmYXVsdCddKHBhdGgpO1xuXG4gICAgcmV0dXJuIGhpc3RvcnkuY3JlYXRlTG9jYXRpb24oX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7IHN0YXRlOiBzdGF0ZSB9KSwgdW5kZWZpbmVkLCBrZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKF9yZWYpIHtcbiAgICB2YXIgdHJhbnNpdGlvblRvID0gX3JlZi50cmFuc2l0aW9uVG87XG5cbiAgICBmdW5jdGlvbiBwb3BTdGF0ZUxpc3RlbmVyKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuc3RhdGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuOyAvLyBJZ25vcmUgZXh0cmFuZW91cyBwb3BzdGF0ZSBldmVudHMgaW4gV2ViS2l0LlxuXG4gICAgICB0cmFuc2l0aW9uVG8oZ2V0Q3VycmVudExvY2F0aW9uKGV2ZW50LnN0YXRlKSk7XG4gICAgfVxuXG4gICAgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncG9wc3RhdGUnLCBwb3BTdGF0ZUxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBfRE9NVXRpbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdwb3BzdGF0ZScsIHBvcFN0YXRlTGlzdGVuZXIpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBmaW5pc2hUcmFuc2l0aW9uKGxvY2F0aW9uKSB7XG4gICAgdmFyIGJhc2VuYW1lID0gbG9jYXRpb24uYmFzZW5hbWU7XG4gICAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICB2YXIgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG4gICAgdmFyIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG4gICAgdmFyIGFjdGlvbiA9IGxvY2F0aW9uLmFjdGlvbjtcbiAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5O1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSByZXR1cm47IC8vIE5vdGhpbmcgdG8gZG8uXG5cbiAgICBfRE9NU3RhdGVTdG9yYWdlLnNhdmVTdGF0ZShrZXksIHN0YXRlKTtcblxuICAgIHZhciBwYXRoID0gKGJhc2VuYW1lIHx8ICcnKSArIHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaDtcbiAgICB2YXIgaGlzdG9yeVN0YXRlID0ge1xuICAgICAga2V5OiBrZXlcbiAgICB9O1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgaWYgKHVzZVJlZnJlc2gpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRoO1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIFByZXZlbnQgbG9jYXRpb24gdXBkYXRlLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoaGlzdG9yeVN0YXRlLCBudWxsLCBwYXRoKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSRVBMQUNFXG4gICAgICBpZiAodXNlUmVmcmVzaCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShwYXRoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBQcmV2ZW50IGxvY2F0aW9uIHVwZGF0ZS5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKGhpc3RvcnlTdGF0ZSwgbnVsbCwgcGF0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgaGlzdG9yeSA9IF9jcmVhdGVET01IaXN0b3J5MlsnZGVmYXVsdCddKF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgZ2V0Q3VycmVudExvY2F0aW9uOiBnZXRDdXJyZW50TG9jYXRpb24sXG4gICAgZmluaXNoVHJhbnNpdGlvbjogZmluaXNoVHJhbnNpdGlvbixcbiAgICBzYXZlU3RhdGU6IF9ET01TdGF0ZVN0b3JhZ2Uuc2F2ZVN0YXRlXG4gIH0pKTtcblxuICB2YXIgbGlzdGVuZXJDb3VudCA9IDAsXG4gICAgICBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiBsaXN0ZW5CZWZvcmUobGlzdGVuZXIpIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHN0YXJ0UG9wU3RhdGVMaXN0ZW5lcihoaXN0b3J5KTtcblxuICAgIHZhciB1bmxpc3RlbiA9IGhpc3RvcnkubGlzdGVuQmVmb3JlKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB1bmxpc3RlbigpO1xuXG4gICAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wUG9wU3RhdGVMaXN0ZW5lcigpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHN0YXJ0UG9wU3RhdGVMaXN0ZW5lcihoaXN0b3J5KTtcblxuICAgIHZhciB1bmxpc3RlbiA9IGhpc3RvcnkubGlzdGVuKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB1bmxpc3RlbigpO1xuXG4gICAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wUG9wU3RhdGVMaXN0ZW5lcigpO1xuICAgIH07XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vaykge1xuICAgIGlmICgrK2xpc3RlbmVyQ291bnQgPT09IDEpIHN0b3BQb3BTdGF0ZUxpc3RlbmVyID0gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKGhpc3RvcnkpO1xuXG4gICAgaGlzdG9yeS5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vaykge1xuICAgIGhpc3RvcnkudW5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spO1xuXG4gICAgaWYgKC0tbGlzdGVuZXJDb3VudCA9PT0gMCkgc3RvcFBvcFN0YXRlTGlzdGVuZXIoKTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgaGlzdG9yeSwge1xuICAgIGxpc3RlbkJlZm9yZTogbGlzdGVuQmVmb3JlLFxuICAgIGxpc3RlbjogbGlzdGVuLFxuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2ssXG4gICAgdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rOiB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2tcbiAgfSk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbnZhciBfY3JlYXRlSGlzdG9yeSA9IHJlcXVpcmUoJy4vY3JlYXRlSGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZUhpc3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlSGlzdG9yeSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZURPTUhpc3Rvcnkob3B0aW9ucykge1xuICB2YXIgaGlzdG9yeSA9IF9jcmVhdGVIaXN0b3J5MlsnZGVmYXVsdCddKF9leHRlbmRzKHtcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBfRE9NVXRpbHMuZ2V0VXNlckNvbmZpcm1hdGlvblxuICB9LCBvcHRpb25zLCB7XG4gICAgZ286IF9ET01VdGlscy5nb1xuICB9KSk7XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgIV9FeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ0RPTSBoaXN0b3J5IG5lZWRzIGEgRE9NJykgOiBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiBoaXN0b3J5Lmxpc3RlbihsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGhpc3RvcnksIHtcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9KTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlRE9NSGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8vaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZydcbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2RlZXBFcXVhbCA9IHJlcXVpcmUoJ2RlZXAtZXF1YWwnKTtcblxudmFyIF9kZWVwRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVlcEVxdWFsKTtcblxudmFyIF9Bc3luY1V0aWxzID0gcmVxdWlyZSgnLi9Bc3luY1V0aWxzJyk7XG5cbnZhciBfQWN0aW9ucyA9IHJlcXVpcmUoJy4vQWN0aW9ucycpO1xuXG52YXIgX2NyZWF0ZUxvY2F0aW9uMiA9IHJlcXVpcmUoJy4vY3JlYXRlTG9jYXRpb24nKTtcblxudmFyIF9jcmVhdGVMb2NhdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVMb2NhdGlvbjIpO1xuXG52YXIgX3J1blRyYW5zaXRpb25Ib29rID0gcmVxdWlyZSgnLi9ydW5UcmFuc2l0aW9uSG9vaycpO1xuXG52YXIgX3J1blRyYW5zaXRpb25Ib29rMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3J1blRyYW5zaXRpb25Ib29rKTtcblxudmFyIF9wYXJzZVBhdGggPSByZXF1aXJlKCcuL3BhcnNlUGF0aCcpO1xuXG52YXIgX3BhcnNlUGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZVBhdGgpO1xuXG52YXIgX2RlcHJlY2F0ZSA9IHJlcXVpcmUoJy4vZGVwcmVjYXRlJyk7XG5cbnZhciBfZGVwcmVjYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlcHJlY2F0ZSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVJhbmRvbUtleShsZW5ndGgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCBsZW5ndGgpO1xufVxuXG5mdW5jdGlvbiBsb2NhdGlvbnNBcmVFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhLnBhdGhuYW1lID09PSBiLnBhdGhuYW1lICYmIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJlxuICAvL2EuYWN0aW9uID09PSBiLmFjdGlvbiAmJiAvLyBEaWZmZXJlbnQgYWN0aW9uICE9PSBsb2NhdGlvbiBjaGFuZ2UuXG4gIGEua2V5ID09PSBiLmtleSAmJiBfZGVlcEVxdWFsMlsnZGVmYXVsdCddKGEuc3RhdGUsIGIuc3RhdGUpO1xufVxuXG52YXIgRGVmYXVsdEtleUxlbmd0aCA9IDY7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhpc3RvcnkoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gIHZhciBnZXRDdXJyZW50TG9jYXRpb24gPSBvcHRpb25zLmdldEN1cnJlbnRMb2NhdGlvbjtcbiAgdmFyIGZpbmlzaFRyYW5zaXRpb24gPSBvcHRpb25zLmZpbmlzaFRyYW5zaXRpb247XG4gIHZhciBzYXZlU3RhdGUgPSBvcHRpb25zLnNhdmVTdGF0ZTtcbiAgdmFyIGdvID0gb3B0aW9ucy5nbztcbiAgdmFyIGtleUxlbmd0aCA9IG9wdGlvbnMua2V5TGVuZ3RoO1xuICB2YXIgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IG9wdGlvbnMuZ2V0VXNlckNvbmZpcm1hdGlvbjtcblxuICBpZiAodHlwZW9mIGtleUxlbmd0aCAhPT0gJ251bWJlcicpIGtleUxlbmd0aCA9IERlZmF1bHRLZXlMZW5ndGg7XG5cbiAgdmFyIHRyYW5zaXRpb25Ib29rcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbkJlZm9yZShob29rKSB7XG4gICAgdHJhbnNpdGlvbkhvb2tzLnB1c2goaG9vayk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdHJhbnNpdGlvbkhvb2tzID0gdHJhbnNpdGlvbkhvb2tzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gaG9vaztcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICB2YXIgYWxsS2V5cyA9IFtdO1xuICB2YXIgY2hhbmdlTGlzdGVuZXJzID0gW107XG4gIHZhciBsb2NhdGlvbiA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiBnZXRDdXJyZW50KCkge1xuICAgIGlmIChwZW5kaW5nTG9jYXRpb24gJiYgcGVuZGluZ0xvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSB7XG4gICAgICByZXR1cm4gYWxsS2V5cy5pbmRleE9mKHBlbmRpbmdMb2NhdGlvbi5rZXkpO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBhbGxLZXlzLmluZGV4T2YobG9jYXRpb24ua2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUxvY2F0aW9uKG5ld0xvY2F0aW9uKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBnZXRDdXJyZW50KCk7XG5cbiAgICBsb2NhdGlvbiA9IG5ld0xvY2F0aW9uO1xuXG4gICAgaWYgKGxvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgYWxsS2V5cyA9IFtdLmNvbmNhdChhbGxLZXlzLnNsaWNlKDAsIGN1cnJlbnQgKyAxKSwgW2xvY2F0aW9uLmtleV0pO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5SRVBMQUNFKSB7XG4gICAgICBhbGxLZXlzW2N1cnJlbnRdID0gbG9jYXRpb24ua2V5O1xuICAgIH1cblxuICAgIGNoYW5nZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIobG9jYXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgY2hhbmdlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICBsaXN0ZW5lcihsb2NhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfbG9jYXRpb24gPSBnZXRDdXJyZW50TG9jYXRpb24oKTtcbiAgICAgIGFsbEtleXMgPSBbX2xvY2F0aW9uLmtleV07XG4gICAgICB1cGRhdGVMb2NhdGlvbihfbG9jYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGFuZ2VMaXN0ZW5lcnMgPSBjaGFuZ2VMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtICE9PSBsaXN0ZW5lcjtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBjYWxsYmFjaykge1xuICAgIF9Bc3luY1V0aWxzLmxvb3BBc3luYyh0cmFuc2l0aW9uSG9va3MubGVuZ3RoLCBmdW5jdGlvbiAoaW5kZXgsIG5leHQsIGRvbmUpIHtcbiAgICAgIF9ydW5UcmFuc2l0aW9uSG9vazJbJ2RlZmF1bHQnXSh0cmFuc2l0aW9uSG9va3NbaW5kZXhdLCBsb2NhdGlvbiwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICBkb25lKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgaWYgKGdldFVzZXJDb25maXJtYXRpb24gJiYgdHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGdldFVzZXJDb25maXJtYXRpb24obWVzc2FnZSwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgICAgY2FsbGJhY2sob2sgIT09IGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhtZXNzYWdlICE9PSBmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgcGVuZGluZ0xvY2F0aW9uID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25UbyhuZXh0TG9jYXRpb24pIHtcbiAgICBpZiAobG9jYXRpb24gJiYgbG9jYXRpb25zQXJlRXF1YWwobG9jYXRpb24sIG5leHRMb2NhdGlvbikpIHJldHVybjsgLy8gTm90aGluZyB0byBkby5cblxuICAgIHBlbmRpbmdMb2NhdGlvbiA9IG5leHRMb2NhdGlvbjtcblxuICAgIGNvbmZpcm1UcmFuc2l0aW9uVG8obmV4dExvY2F0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmIChwZW5kaW5nTG9jYXRpb24gIT09IG5leHRMb2NhdGlvbikgcmV0dXJuOyAvLyBUcmFuc2l0aW9uIHdhcyBpbnRlcnJ1cHRlZC5cblxuICAgICAgaWYgKG9rKSB7XG4gICAgICAgIC8vIHRyZWF0IFBVU0ggdG8gY3VycmVudCBwYXRoIGxpa2UgUkVQTEFDRSB0byBiZSBjb25zaXN0ZW50IHdpdGggYnJvd3NlcnNcbiAgICAgICAgaWYgKG5leHRMb2NhdGlvbi5hY3Rpb24gPT09IF9BY3Rpb25zLlBVU0gpIHtcbiAgICAgICAgICB2YXIgcHJldlBhdGggPSBjcmVhdGVQYXRoKGxvY2F0aW9uKTtcbiAgICAgICAgICB2YXIgbmV4dFBhdGggPSBjcmVhdGVQYXRoKG5leHRMb2NhdGlvbik7XG5cbiAgICAgICAgICBpZiAobmV4dFBhdGggPT09IHByZXZQYXRoKSBuZXh0TG9jYXRpb24uYWN0aW9uID0gX0FjdGlvbnMuUkVQTEFDRTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaW5pc2hUcmFuc2l0aW9uKG5leHRMb2NhdGlvbikgIT09IGZhbHNlKSB1cGRhdGVMb2NhdGlvbihuZXh0TG9jYXRpb24pO1xuICAgICAgfSBlbHNlIGlmIChsb2NhdGlvbiAmJiBuZXh0TG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5QT1ApIHtcbiAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihsb2NhdGlvbi5rZXkpO1xuICAgICAgICB2YXIgbmV4dEluZGV4ID0gYWxsS2V5cy5pbmRleE9mKG5leHRMb2NhdGlvbi5rZXkpO1xuXG4gICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xICYmIG5leHRJbmRleCAhPT0gLTEpIGdvKHByZXZJbmRleCAtIG5leHRJbmRleCk7IC8vIFJlc3RvcmUgdGhlIFVSTC5cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2gobG9jYXRpb24pIHtcbiAgICB0cmFuc2l0aW9uVG8oY3JlYXRlTG9jYXRpb24obG9jYXRpb24sIF9BY3Rpb25zLlBVU0gsIGNyZWF0ZUtleSgpKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKGxvY2F0aW9uKSB7XG4gICAgdHJhbnNpdGlvblRvKGNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uLCBfQWN0aW9ucy5SRVBMQUNFLCBjcmVhdGVLZXkoKSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGdvKC0xKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICBnbygxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUtleSgpIHtcbiAgICByZXR1cm4gY3JlYXRlUmFuZG9tS2V5KGtleUxlbmd0aCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQYXRoKGxvY2F0aW9uKSB7XG4gICAgaWYgKGxvY2F0aW9uID09IG51bGwgfHwgdHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgcmV0dXJuIGxvY2F0aW9uO1xuXG4gICAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICB2YXIgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG5cbiAgICB2YXIgcmVzdWx0ID0gcGF0aG5hbWU7XG5cbiAgICBpZiAoc2VhcmNoKSByZXN1bHQgKz0gc2VhcmNoO1xuXG4gICAgaWYgKGhhc2gpIHJlc3VsdCArPSBoYXNoO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhyZWYobG9jYXRpb24pIHtcbiAgICByZXR1cm4gY3JlYXRlUGF0aChsb2NhdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbihsb2NhdGlvbiwgYWN0aW9uKSB7XG4gICAgdmFyIGtleSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IGNyZWF0ZUtleSgpIDogYXJndW1lbnRzWzJdO1xuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdvYmplY3QnKSB7XG4gICAgICAvL3dhcm5pbmcoXG4gICAgICAvLyAgZmFsc2UsXG4gICAgICAvLyAgJ1RoZSBzdGF0ZSAoMm5kKSBhcmd1bWVudCB0byBoaXN0b3J5LmNyZWF0ZUxvY2F0aW9uIGlzIGRlcHJlY2F0ZWQ7IHVzZSBhICcgK1xuICAgICAgLy8gICdsb2NhdGlvbiBkZXNjcmlwdG9yIGluc3RlYWQnXG4gICAgICAvLylcblxuICAgICAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIGxvY2F0aW9uID0gX3BhcnNlUGF0aDJbJ2RlZmF1bHQnXShsb2NhdGlvbik7XG5cbiAgICAgIGxvY2F0aW9uID0gX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7IHN0YXRlOiBhY3Rpb24gfSk7XG5cbiAgICAgIGFjdGlvbiA9IGtleTtcbiAgICAgIGtleSA9IGFyZ3VtZW50c1szXSB8fCBjcmVhdGVLZXkoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2NyZWF0ZUxvY2F0aW9uM1snZGVmYXVsdCddKGxvY2F0aW9uLCBhY3Rpb24sIGtleSk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICB1cGRhdGVMb2NhdGlvblN0YXRlKGxvY2F0aW9uLCBzdGF0ZSk7XG4gICAgICB1cGRhdGVMb2NhdGlvbihsb2NhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZUxvY2F0aW9uU3RhdGUoZ2V0Q3VycmVudExvY2F0aW9uKCksIHN0YXRlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVMb2NhdGlvblN0YXRlKGxvY2F0aW9uLCBzdGF0ZSkge1xuICAgIGxvY2F0aW9uLnN0YXRlID0gX2V4dGVuZHMoe30sIGxvY2F0aW9uLnN0YXRlLCBzdGF0ZSk7XG4gICAgc2F2ZVN0YXRlKGxvY2F0aW9uLmtleSwgbG9jYXRpb24uc3RhdGUpO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICBpZiAodHJhbnNpdGlvbkhvb2tzLmluZGV4T2YoaG9vaykgPT09IC0xKSB0cmFuc2l0aW9uSG9va3MucHVzaChob29rKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICB0cmFuc2l0aW9uSG9va3MgPSB0cmFuc2l0aW9uSG9va3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbSAhPT0gaG9vaztcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gcHVzaFN0YXRlKHN0YXRlLCBwYXRoKSB7XG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgcGF0aCA9IF9wYXJzZVBhdGgyWydkZWZhdWx0J10ocGF0aCk7XG5cbiAgICBwdXNoKF9leHRlbmRzKHsgc3RhdGU6IHN0YXRlIH0sIHBhdGgpKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gcmVwbGFjZVN0YXRlKHN0YXRlLCBwYXRoKSB7XG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgcGF0aCA9IF9wYXJzZVBhdGgyWydkZWZhdWx0J10ocGF0aCk7XG5cbiAgICByZXBsYWNlKF9leHRlbmRzKHsgc3RhdGU6IHN0YXRlIH0sIHBhdGgpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGlzdGVuQmVmb3JlOiBsaXN0ZW5CZWZvcmUsXG4gICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgdHJhbnNpdGlvblRvOiB0cmFuc2l0aW9uVG8sXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBjcmVhdGVLZXk6IGNyZWF0ZUtleSxcbiAgICBjcmVhdGVQYXRoOiBjcmVhdGVQYXRoLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgY3JlYXRlTG9jYXRpb246IGNyZWF0ZUxvY2F0aW9uLFxuXG4gICAgc2V0U3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10oc2V0U3RhdGUsICdzZXRTdGF0ZSBpcyBkZXByZWNhdGVkOyB1c2UgbG9jYXRpb24ua2V5IHRvIHNhdmUgc3RhdGUgaW5zdGVhZCcpLFxuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocmVnaXN0ZXJUcmFuc2l0aW9uSG9vaywgJ3JlZ2lzdGVyVHJhbnNpdGlvbkhvb2sgaXMgZGVwcmVjYXRlZDsgdXNlIGxpc3RlbkJlZm9yZSBpbnN0ZWFkJyksXG4gICAgdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vaywgJ3VucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayBpcyBkZXByZWNhdGVkOyB1c2UgdGhlIGNhbGxiYWNrIHJldHVybmVkIGZyb20gbGlzdGVuQmVmb3JlIGluc3RlYWQnKSxcbiAgICBwdXNoU3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocHVzaFN0YXRlLCAncHVzaFN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSBwdXNoIGluc3RlYWQnKSxcbiAgICByZXBsYWNlU3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocmVwbGFjZVN0YXRlLCAncmVwbGFjZVN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSByZXBsYWNlIGluc3RlYWQnKVxuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLy9pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJ1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfQWN0aW9ucyA9IHJlcXVpcmUoJy4vQWN0aW9ucycpO1xuXG52YXIgX3BhcnNlUGF0aCA9IHJlcXVpcmUoJy4vcGFyc2VQYXRoJyk7XG5cbnZhciBfcGFyc2VQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlUGF0aCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKCkge1xuICB2YXIgbG9jYXRpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAnLycgOiBhcmd1bWVudHNbMF07XG4gIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBfQWN0aW9ucy5QT1AgOiBhcmd1bWVudHNbMV07XG4gIHZhciBrZXkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzJdO1xuXG4gIHZhciBfZm91cnRoQXJnID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1szXTtcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgbG9jYXRpb24gPSBfcGFyc2VQYXRoMlsnZGVmYXVsdCddKGxvY2F0aW9uKTtcblxuICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAvL3dhcm5pbmcoXG4gICAgLy8gIGZhbHNlLFxuICAgIC8vICAnVGhlIHN0YXRlICgybmQpIGFyZ3VtZW50IHRvIGNyZWF0ZUxvY2F0aW9uIGlzIGRlcHJlY2F0ZWQ7IHVzZSBhICcgK1xuICAgIC8vICAnbG9jYXRpb24gZGVzY3JpcHRvciBpbnN0ZWFkJ1xuICAgIC8vKVxuXG4gICAgbG9jYXRpb24gPSBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHsgc3RhdGU6IGFjdGlvbiB9KTtcblxuICAgIGFjdGlvbiA9IGtleSB8fCBfQWN0aW9ucy5QT1A7XG4gICAga2V5ID0gX2ZvdXJ0aEFyZztcbiAgfVxuXG4gIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lIHx8ICcvJztcbiAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaCB8fCAnJztcbiAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoIHx8ICcnO1xuICB2YXIgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZSB8fCBudWxsO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2gsXG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIGFjdGlvbjogYWN0aW9uLFxuICAgIGtleToga2V5XG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUxvY2F0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLy9pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJ1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIGRlcHJlY2F0ZShmbikge1xuICByZXR1cm4gZm47XG4gIC8vcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgLy8gIHdhcm5pbmcoZmFsc2UsICdbaGlzdG9yeV0gJyArIG1lc3NhZ2UpXG4gIC8vICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAvL31cbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBkZXByZWNhdGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gZXh0cmFjdFBhdGgoc3RyaW5nKSB7XG4gIHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaCgvXmh0dHBzPzpcXC9cXC9bXlxcL10qLyk7XG5cbiAgaWYgKG1hdGNoID09IG51bGwpIHJldHVybiBzdHJpbmc7XG5cbiAgcmV0dXJuIHN0cmluZy5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKTtcbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHRyYWN0UGF0aDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2V4dHJhY3RQYXRoID0gcmVxdWlyZSgnLi9leHRyYWN0UGF0aCcpO1xuXG52YXIgX2V4dHJhY3RQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dHJhY3RQYXRoKTtcblxuZnVuY3Rpb24gcGFyc2VQYXRoKHBhdGgpIHtcbiAgdmFyIHBhdGhuYW1lID0gX2V4dHJhY3RQYXRoMlsnZGVmYXVsdCddKHBhdGgpO1xuICB2YXIgc2VhcmNoID0gJyc7XG4gIHZhciBoYXNoID0gJyc7XG5cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKHBhdGggPT09IHBhdGhuYW1lLCAnQSBwYXRoIG11c3QgYmUgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoIG9ubHksIG5vdCBhIGZ1bGx5IHF1YWxpZmllZCBVUkwgbGlrZSBcIiVzXCInLCBwYXRoKSA6IHVuZGVmaW5lZDtcblxuICB2YXIgaGFzaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignIycpO1xuICBpZiAoaGFzaEluZGV4ICE9PSAtMSkge1xuICAgIGhhc2ggPSBwYXRobmFtZS5zdWJzdHJpbmcoaGFzaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cmluZygwLCBoYXNoSW5kZXgpO1xuICB9XG5cbiAgdmFyIHNlYXJjaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignPycpO1xuICBpZiAoc2VhcmNoSW5kZXggIT09IC0xKSB7XG4gICAgc2VhcmNoID0gcGF0aG5hbWUuc3Vic3RyaW5nKHNlYXJjaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cmluZygwLCBzZWFyY2hJbmRleCk7XG4gIH1cblxuICBpZiAocGF0aG5hbWUgPT09ICcnKSBwYXRobmFtZSA9ICcvJztcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICBzZWFyY2g6IHNlYXJjaCxcbiAgICBoYXNoOiBoYXNoXG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHBhcnNlUGF0aDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gcnVuVHJhbnNpdGlvbkhvb2soaG9vaywgbG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gIHZhciByZXN1bHQgPSBob29rKGxvY2F0aW9uLCBjYWxsYmFjayk7XG5cbiAgaWYgKGhvb2subGVuZ3RoIDwgMikge1xuICAgIC8vIEFzc3VtZSB0aGUgaG9vayBydW5zIHN5bmNocm9ub3VzbHkgYW5kIGF1dG9tYXRpY2FsbHlcbiAgICAvLyBjYWxsIHRoZSBjYWxsYmFjayB3aXRoIHRoZSByZXR1cm4gdmFsdWUuXG4gICAgY2FsbGJhY2socmVzdWx0KTtcbiAgfSBlbHNlIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10ocmVzdWx0ID09PSB1bmRlZmluZWQsICdZb3Ugc2hvdWxkIG5vdCBcInJldHVyblwiIGluIGEgdHJhbnNpdGlvbiBob29rIHdpdGggYSBjYWxsYmFjayBhcmd1bWVudDsgY2FsbCB0aGUgY2FsbGJhY2sgaW5zdGVhZCcpIDogdW5kZWZpbmVkO1xuICB9XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHJ1blRyYW5zaXRpb25Ib29rO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxMy0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQubGVuZ3RoIDwgMTAgfHwgKC9eW3NcXFddKiQvKS50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSB3YXJuaW5nIGZvcm1hdCBzaG91bGQgYmUgYWJsZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzICcgK1xuICAgICAgICAnd2FybmluZy4gUGxlYXNlLCB1c2UgYSBtb3JlIGRlc2NyaXB0aXZlIGZvcm1hdCB0aGFuOiAnICsgZm9ybWF0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2goeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcbiJdfQ==