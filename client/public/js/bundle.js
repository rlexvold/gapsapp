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
                url: '/api/food?_id=' + FoodId
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

var FoodListActions = function () {
    function FoodListActions() {
        _classCallCheck(this, FoodListActions);

        this.generateActions('getFoodsSuccess', 'getFoodsFail');
    }

    _createClass(FoodListActions, [{
        key: 'getFoods',
        value: function getFoods(payload) {
            var _this = this;

            console.log('getFoods: ' + payload);
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

            console.log("Calling url, params", url, params);
            $.ajax({ url: url, data: params }).done(function (data) {
                console.log('Success getting foods: ', data);
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

            $.ajax({ url: '/api/foodlist/count' }).done(function (data) {
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
            console.log('componentDidMount', this.props.params);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _FoodListStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            console.log('componentDidUpdate', this.props.params);
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
            console.log('Found: ' + this.state.foods.length + ' foods');
            var foodList = this.state.foods.map(function (food, index) {
                console.log('Got a foodlist');
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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
);

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

var FoodListStore = function () {
    function FoodListStore() {
        _classCallCheck(this, FoodListStore);

        this.bindActions(_FoodListActions2.default);
        this.foods = [];
    }

    _createClass(FoodListStore, [{
        key: 'getFoodsSuccess',
        value: function getFoodsSuccess(data) {
            console.log('onGetCharacterSuccess data:', data);
            this.foods = data;
        }
    }, {
        key: 'getFoodsFail',
        value: function getFoodsFail(jqXhr) {
            console.log('onGetCharactersFails');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYWN0aW9ucy9BZGRGb29kQWN0aW9ucy5qcyIsImFwcC9hY3Rpb25zL0Zvb2RBY3Rpb25zLmpzIiwiYXBwL2FjdGlvbnMvRm9vZExpc3RBY3Rpb25zLmpzIiwiYXBwL2FjdGlvbnMvRm9vdGVyQWN0aW9ucy5qcyIsImFwcC9hY3Rpb25zL0hvbWVBY3Rpb25zLmpzIiwiYXBwL2FjdGlvbnMvTmF2YmFyQWN0aW9ucy5qcyIsImFwcC9hbHQuanMiLCJhcHAvY29tcG9uZW50cy9BZGRGb29kLmpzIiwiYXBwL2NvbXBvbmVudHMvQXBwLmpzIiwiYXBwL2NvbXBvbmVudHMvRm9vZC5qcyIsImFwcC9jb21wb25lbnRzL0Zvb2RMaXN0LmpzIiwiYXBwL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwiYXBwL2NvbXBvbmVudHMvSG9tZS5qcyIsImFwcC9jb21wb25lbnRzL05hdmJhci5qcyIsImFwcC9tYWluLmpzIiwiYXBwL3JvdXRlcy5qcyIsImFwcC9zdG9yZXMvQWRkRm9vZFN0b3JlLmpzIiwiYXBwL3N0b3Jlcy9Gb29kTGlzdFN0b3JlLmpzIiwiYXBwL3N0b3Jlcy9Gb29kU3RvcmUuanMiLCJhcHAvc3RvcmVzL0Zvb3RlclN0b3JlLmpzIiwiYXBwL3N0b3Jlcy9Ib21lU3RvcmUuanMiLCJhcHAvc3RvcmVzL05hdmJhclN0b3JlLmpzIiwibm9kZV9tb2R1bGVzL2RlZXAtZXF1YWwvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZGVlcC1lcXVhbC9saWIvaXNfYXJndW1lbnRzLmpzIiwibm9kZV9tb2R1bGVzL2RlZXAtZXF1YWwvbGliL2tleXMuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvQWN0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9Bc3luY1V0aWxzLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL0RPTVN0YXRlU3RvcmFnZS5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9ET01VdGlscy5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9FeGVjdXRpb25FbnZpcm9ubWVudC5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9jcmVhdGVCcm93c2VySGlzdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9jcmVhdGVET01IaXN0b3J5LmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2NyZWF0ZUhpc3RvcnkuanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvY3JlYXRlTG9jYXRpb24uanMiLCJub2RlX21vZHVsZXMvaGlzdG9yeS9saWIvZGVwcmVjYXRlLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL2V4dHJhY3RQYXRoLmpzIiwibm9kZV9tb2R1bGVzL2hpc3RvcnkvbGliL3BhcnNlUGF0aC5qcyIsIm5vZGVfbW9kdWxlcy9oaXN0b3J5L2xpYi9ydW5UcmFuc2l0aW9uSG9vay5qcyIsIm5vZGVfbW9kdWxlcy9pbnZhcmlhbnQvYnJvd3Nlci5qcyIsIm5vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvd2FybmluZy9icm93c2VyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O3FqQkNBQTs7O0FBQ0E7Ozs7Ozs7O0lBRU0sYztBQUNGLDhCQUFjO0FBQUE7O0FBQ1YsYUFBSyxlQUFMLENBQXFCLGdCQUFyQixFQUF1QyxhQUF2QyxFQUFzRCxZQUF0RCxFQUFvRSxnQkFBcEUsRUFBc0YsYUFBdEYsRUFBcUcsYUFBckcsRUFBb0gsaUJBQXBILEVBQXVJLGNBQXZJO0FBQ0g7Ozs7Z0NBRU8sSSxFQUFNLFEsRUFBVSxLLEVBQU87QUFBQTs7QUFDM0IsY0FBRSxJQUFGLENBQU87QUFDSCxzQkFBTSxNQURIO0FBRUgscUJBQUssV0FGRjtBQUdILHNCQUFNO0FBQ0YsMEJBQU0sSUFESjtBQUVGLDhCQUFVLFFBRlI7QUFHRiwyQkFBTztBQUhMO0FBSEgsYUFBUCxFQVFH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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNuRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDakxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ3BMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKmdsb2JhbCAkICovXG5pbXBvcnQgYWx0IGZyb20gJy4uL2FsdCdcblxuY2xhc3MgQWRkRm9vZEFjdGlvbnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdlbmVyYXRlQWN0aW9ucygnYWRkRm9vZFN1Y2Nlc3MnLCAnYWRkRm9vZEZhaWwnLCAndXBkYXRlTmFtZScsICd1cGRhdGVDYXRlZ29yeScsICd1cGRhdGVQaGFzZScsICdpbnZhbGlkTmFtZScsICdpbnZhbGlkQ2F0ZWdvcnknLCAnaW52YWxpZFBoYXNlJylcbiAgICB9XG5cbiAgICBhZGRGb29kKG5hbWUsIGNhdGVnb3J5LCBwaGFzZSkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgdXJsOiAnL2FwaS9mb29kJyxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBjYXRlZ29yeSxcbiAgICAgICAgICAgICAgICBwaGFzZTogcGhhc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuZG9uZSgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmFkZEZvb2RTdWNjZXNzKGRhdGEubWVzc2FnZSlcbiAgICAgICAgfSkuZmFpbCgoanFYaHIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5hZGRGb29kRmFpbChqcVhoci5yZXNwb25zZUpTT04ubWVzc2FnZSlcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKEFkZEZvb2RBY3Rpb25zKVxuIiwiLypnbG9iYWwgJCAqL1xuaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnXG5cbmNsYXNzIEZvb2RBY3Rpb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUFjdGlvbnMoJ2dldEZvb2RTdWNjZXNzJywgJ2dldEZvb2RGYWlsJylcbiAgICB9XG5cbiAgICBnZXRGb29kKEZvb2RJZCkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnL2FwaS9mb29kP19pZD0nICsgRm9vZElkXG4gICAgICAgIH0pLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5nZXRGb29kU3VjY2VzcyhkYXRhKVxuICAgICAgICB9KS5mYWlsKChqcVhocikgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmdldEZvb2RGYWlsKGpxWGhyKVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZUFjdGlvbnMoRm9vZEFjdGlvbnMpXG4iLCIvKmdsb2JhbCAkICovXG5pbXBvcnQgYWx0IGZyb20gJy4uL2FsdCdcblxuY2xhc3MgRm9vZExpc3RBY3Rpb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUFjdGlvbnMoJ2dldEZvb2RzU3VjY2VzcycsICdnZXRGb29kc0ZhaWwnKVxuICAgIH1cblxuICAgIGdldEZvb2RzKHBheWxvYWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2dldEZvb2RzOiAnICsgcGF5bG9hZClcbiAgICAgICAgbGV0IHVybCA9ICcvYXBpL3BoYXNlJ1xuICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgcGhhc2U6IDdcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXlsb2FkLnBoYXNlKSB7XG4gICAgICAgICAgICBwYXJhbXMucGhhc2UgPSBwYXlsb2FkLnBoYXNlXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBheWxvYWQuY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIHBhcmFtcy5jYXRlZ29yeSA9IHBheWxvYWQuY2F0ZWdvcnlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ2FsbGluZyB1cmwsIHBhcmFtc1wiLCB1cmwsIHBhcmFtcylcbiAgICAgICAgJC5hamF4KHt1cmw6IHVybCwgZGF0YTogcGFyYW1zfSkuZG9uZSgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1N1Y2Nlc3MgZ2V0dGluZyBmb29kczogJywgZGF0YSlcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5nZXRGb29kc1N1Y2Nlc3MoZGF0YSlcbiAgICAgICAgfSkuZmFpbCgoanFYaHIpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5nZXRGb29kc0ZhaWwoanFYaHIpXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlQWN0aW9ucyhGb29kTGlzdEFjdGlvbnMpXG4iLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5cbmNsYXNzIEZvb3RlckFjdGlvbnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdlbmVyYXRlQWN0aW9ucygpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZUFjdGlvbnMoRm9vdGVyQWN0aW9ucyk7XG4iLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5cbmNsYXNzIEhvbWVBY3Rpb25zIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nZW5lcmF0ZUFjdGlvbnMoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKEhvbWVBY3Rpb25zKTtcbiIsIi8qZ2xvYmFsICQgKi9cbmltcG9ydCBhbHQgZnJvbSAnLi4vYWx0J1xuaW1wb3J0IHthc3NpZ259IGZyb20gJ3VuZGVyc2NvcmUnXG5cbmNsYXNzIE5hdmJhckFjdGlvbnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdlbmVyYXRlQWN0aW9ucygndXBkYXRlT25saW5lVXNlcnMnLCAndXBkYXRlQWpheEFuaW1hdGlvbicsICd1cGRhdGVTZWFyY2hRdWVyeScsICdnZXRGb29kQ291bnRTdWNjZXNzJywgJ2dldEZvb2RDb3VudEZhaWwnLCAnZmluZEZvb2RTdWNjZXNzJywgJ2ZpbmRGb29kRmFpbCcpXG4gICAgfVxuXG4gICAgZmluZEZvb2QocGF5bG9hZCkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiAnL2FwaS9mb29kcy9zZWFyY2gnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG5hbWU6IHBheWxvYWQuc2VhcmNoUXVlcnlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuZG9uZSgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgYXNzaWduKHBheWxvYWQsIGRhdGEpXG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMuZmluZEZvb2RTdWNjZXNzKHBheWxvYWQpXG4gICAgICAgIH0pLmZhaWwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hY3Rpb25zLmZpbmRGb29kRmFpbChwYXlsb2FkKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGdldEZvb2RDb3VudCgpIHtcbiAgICAgICAgJC5hamF4KHt1cmw6ICcvYXBpL2Zvb2RsaXN0L2NvdW50J30pLmRvbmUoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWN0aW9ucy5nZXRGb29kQ291bnRTdWNjZXNzKGRhdGEpXG4gICAgICAgIH0pLmZhaWwoKGpxWGhyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFjdGlvbnMuZ2V0Rm9vZENvdW50RmFpbChqcVhocilcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVBY3Rpb25zKE5hdmJhckFjdGlvbnMpXG4iLCJpbXBvcnQgQWx0IGZyb20gJ2FsdCc7XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBBbHQoKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQWRkRm9vZFN0b3JlIGZyb20gJy4uL3N0b3Jlcy9BZGRGb29kU3RvcmUnXG5pbXBvcnQgQWRkRm9vZEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9BZGRGb29kQWN0aW9ucydcblxuY2xhc3MgQWRkRm9vZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSBBZGRGb29kU3RvcmUuZ2V0U3RhdGUoKVxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIEFkZEZvb2RTdG9yZS5saXN0ZW4odGhpcy5vbkNoYW5nZSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgQWRkRm9vZFN0b3JlLnVubGlzdGVuKHRoaXMub25DaGFuZ2UpXG4gICAgfVxuXG4gICAgb25DaGFuZ2Uoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSlcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIHZhciBuYW1lID0gdGhpcy5zdGF0ZS5uYW1lLnRyaW0oKVxuICAgICAgICB2YXIgY2F0ZWdvcnkgPSB0aGlzLnN0YXRlLmNhdGVnb3J5XG4gICAgICAgIHZhciBwaGFzZSA9IHRoaXMuc3RhdGUucGhhc2VcblxuICAgICAgICBpZiAoIW5hbWUpIHtcbiAgICAgICAgICAgIEFkZEZvb2RBY3Rpb25zLmludmFsaWROYW1lKClcbiAgICAgICAgICAgIHRoaXMucmVmcy5uYW1lVGV4dEZpZWxkLmZvY3VzKClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2F0ZWdvcnkpIHtcbiAgICAgICAgICAgIEFkZEZvb2RBY3Rpb25zLmludmFsaWRDYXRlZ29yeSgpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXBoYXNlKSB7XG4gICAgICAgICAgICBBZGRGb29kQWN0aW9ucy5pbnZhbGlkUGhhc2UoKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hbWUgJiYgY2F0ZWdvcnkgJiYgcGhhc2UpIHtcbiAgICAgICAgICAgIEFkZEZvb2RBY3Rpb25zLmFkZEZvb2QobmFtZSwgY2F0ZWdvcnksIHBoYXNlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JvdyBmbGlwSW5YIGFuaW1hdGVkJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS04Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwYW5lbCBwYW5lbC1kZWZhdWx0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFuZWwtaGVhZGluZyc+QWRkIEZvb2Q8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFuZWwtYm9keSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZm9ybS1ncm91cCAnICsgdGhpcy5zdGF0ZS5uYW1lVmFsaWRhdGlvblN0YXRlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdjb250cm9sLWxhYmVsJz5Gb29kIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgcmVmPSduYW1lVGV4dEZpZWxkJyB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17QWRkRm9vZEFjdGlvbnMudXBkYXRlTmFtZX0gYXV0b0ZvY3VzLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2hlbHAtYmxvY2snPnt0aGlzLnN0YXRlLmhlbHBCbG9ja308L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZm9ybS1ncm91cCAnICsgdGhpcy5zdGF0ZS5jYXRlZ29yeVZhbGlkYXRpb25TdGF0ZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nY29udHJvbC1sYWJlbCc+Q2F0ZWdvcnk8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSd0ZXh0JyBjbGFzc05hbWU9J2Zvcm0tY29udHJvbCcgcmVmPSduYW1lVGV4dEZpZWxkJyB2YWx1ZT17dGhpcy5zdGF0ZS5jYXRlZ29yeX0gb25DaGFuZ2U9e0FkZEZvb2RBY3Rpb25zLnVwZGF0ZUNhdGVnb3J5fSBhdXRvRm9jdXMvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naGVscC1ibG9jayc+e3RoaXMuc3RhdGUuaGVscEJsb2NrfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmb3JtLWdyb3VwICcgKyB0aGlzLnN0YXRlLnBoYXNlVmFsaWRhdGlvblN0YXRlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFkaW8gcmFkaW8taW5saW5lJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdwaGFzZScgaWQ9JzEnIHZhbHVlPScxJyBjaGVja2VkPXt0aGlzLnN0YXRlLnBoYXNlID09PSAnMSd9IG9uQ2hhbmdlPXtBZGRGb29kQWN0aW9ucy51cGRhdGVQaGFzZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nMSc+R0FQUyBQaGFzZSAxPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFkaW8gcmFkaW8taW5saW5lJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdwaGFzZScgaWQ9JzInIHZhbHVlPScyJyBjaGVja2VkPXt0aGlzLnN0YXRlLnBoYXNlID09PSAnMid9IG9uQ2hhbmdlPXtBZGRGb29kQWN0aW9ucy51cGRhdGVQaGFzZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nMic+R0FQUyBQaGFzZSAyPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFkaW8gcmFkaW8taW5saW5lJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdwaGFzZScgaWQ9JzMnIHZhbHVlPSczJyBjaGVja2VkPXt0aGlzLnN0YXRlLnBoYXNlID09PSAnMyd9IG9uQ2hhbmdlPXtBZGRGb29kQWN0aW9ucy51cGRhdGVQaGFzZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nMyc+R0FQUyBQaGFzZSAzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFkaW8gcmFkaW8taW5saW5lJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdwaGFzZScgaWQ9JzQnIHZhbHVlPSc0JyBjaGVja2VkPXt0aGlzLnN0YXRlLnBoYXNlID09PSAnNCd9IG9uQ2hhbmdlPXtBZGRGb29kQWN0aW9ucy51cGRhdGVQaGFzZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nNCc+R0FQUyBQaGFzZSA0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFkaW8gcmFkaW8taW5saW5lJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdwaGFzZScgaWQ9JzUnIHZhbHVlPSc1JyBjaGVja2VkPXt0aGlzLnN0YXRlLnBoYXNlID09PSAnNSd9IG9uQ2hhbmdlPXtBZGRGb29kQWN0aW9ucy51cGRhdGVQaGFzZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nNSc+R0FQUyBQaGFzZSA1PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFkaW8gcmFkaW8taW5saW5lJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdwaGFzZScgaWQ9JzYnIHZhbHVlPSc2JyBjaGVja2VkPXt0aGlzLnN0YXRlLnBoYXNlID09PSAnNid9IG9uQ2hhbmdlPXtBZGRGb29kQWN0aW9ucy51cGRhdGVQaGFzZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nNic+R0FQUyBQaGFzZSA2PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmFkaW8gcmFkaW8taW5saW5lJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPSdwaGFzZScgaWQ9JzcnIHZhbHVlPSc3JyBjaGVja2VkPXt0aGlzLnN0YXRlLnBoYXNlID09PSAnNyd9IG9uQ2hhbmdlPXtBZGRGb29kQWN0aW9ucy51cGRhdGVQaGFzZX0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0nNyc+R0FQUyBQaGFzZSA3PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nYnRuIGJ0bi1wcmltYXJ5Jz5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEZvb2RcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vTmF2YmFyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9Gb290ZXInO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXIgaGlzdG9yeT17dGhpcy5wcm9wcy5oaXN0b3J5fSAvPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7IiwiLypnbG9iYWwgJCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEZvb2RTdG9yZSBmcm9tICcuLi9zdG9yZXMvRm9vZFN0b3JlJ1xuaW1wb3J0IEZvb2RBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvRm9vZEFjdGlvbnMnXG5cbmNsYXNzIEZvb2QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0gRm9vZFN0b3JlLmdldFN0YXRlKClcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBGb29kU3RvcmUubGlzdGVuKHRoaXMub25DaGFuZ2UpXG4gICAgICAgIEZvb2RBY3Rpb25zLmdldEZvb2QodGhpcy5wcm9wcy5wYXJhbXMuX2lkKVxuXG4gICAgICAgICQoJy5tYWduaWZpYy1wb3B1cCcpLm1hZ25pZmljUG9wdXAoe1xuICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgIG1haW5DbGFzczogJ21mcC16b29tLWluJyxcbiAgICAgICAgICAgIGNsb3NlT25Db250ZW50Q2xpY2s6IHRydWUsXG4gICAgICAgICAgICBtaWRDbGljazogdHJ1ZSxcbiAgICAgICAgICAgIHpvb206IHtcbiAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgRm9vZFN0b3JlLnVubGlzdGVuKHRoaXMub25DaGFuZ2UpXG4gICAgICAgICQoZG9jdW1lbnQuYm9keSkucmVtb3ZlQ2xhc3MoKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgLy8gRmV0Y2ggbmV3IGNoYXJhY2h0ZXIgZGF0YSB3aGVuIFVSTCBwYXRoIGNoYW5nZXNcbiAgICAgICAgaWYgKHByZXZQcm9wcy5wYXJhbXMuaWQgIT09IHRoaXMucHJvcHMucGFyYW1zLl9pZCkge1xuICAgICAgICAgICAgRm9vZEFjdGlvbnMuZ2V0Rm9vZCh0aGlzLnByb3BzLnBhcmFtcy5faWQpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoYW5nZShzdGF0ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcm9maWxlLWltZyc+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT0nbWFnbmlmaWMtcG9wdXAnIGhyZWY9J2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvYy9jOS8tSW5zZXJ0X2ltYWdlX2hlcmUtLnN2Zyc+PGltZyBzcmM9J2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvYy9jOS8tSW5zZXJ0X2ltYWdlX2hlcmUtLnN2ZycvPjwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWEtYm9keSc+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5hbWU6XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt0aGlzLnN0YXRlLm5hbWV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvc21hbGw+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnk6XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt0aGlzLnN0YXRlLmNhdGVnb3J5fTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPjxici8+XG4gICAgICAgICAgICAgICAgICAgIDxzbWFsbD5QaGFzZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucGhhc2V9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgIDwvc21hbGw+PGJyLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb29kXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQge0xpbmt9IGZyb20gJ3JlYWN0LXJvdXRlcidcbmltcG9ydCB7aXNFcXVhbH0gZnJvbSAndW5kZXJzY29yZSdcbmltcG9ydCBGb29kTGlzdFN0b3JlIGZyb20gJy4uL3N0b3Jlcy9Gb29kTGlzdFN0b3JlJ1xuaW1wb3J0IEZvb2RMaXN0QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0Zvb2RMaXN0QWN0aW9ucydcblxuY2xhc3MgRm9vZExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0gRm9vZExpc3RTdG9yZS5nZXRTdGF0ZSgpXG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcylcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgRm9vZExpc3RBY3Rpb25zLmdldEZvb2RzKHRoaXMucHJvcHMucGFyYW1zKVxuICAgICAgICBGb29kTGlzdFN0b3JlLmxpc3Rlbih0aGlzLm9uQ2hhbmdlKVxuICAgICAgICBjb25zb2xlLmxvZygnY29tcG9uZW50RGlkTW91bnQnLCB0aGlzLnByb3BzLnBhcmFtcylcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgRm9vZExpc3RTdG9yZS51bmxpc3Rlbih0aGlzLm9uQ2hhbmdlKVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NvbXBvbmVudERpZFVwZGF0ZScsIHRoaXMucHJvcHMucGFyYW1zKVxuICAgICAgICBpZiAoIWlzRXF1YWwocHJldlByb3BzLnBhcmFtcywgdGhpcy5wcm9wcy5wYXJhbXMpKSB7XG4gICAgICAgICAgICBGb29kTGlzdEFjdGlvbnMuZ2V0Rm9vZHModGhpcy5wcm9wcy5wYXJhbXMpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNoYW5nZShzdGF0ZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0ZvdW5kOiAnICsgdGhpcy5zdGF0ZS5mb29kcy5sZW5ndGggKyAnIGZvb2RzJylcbiAgICAgICAgbGV0IGZvb2RMaXN0ID0gdGhpcy5zdGF0ZS5mb29kcy5tYXAoKGZvb2QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnR290IGEgZm9vZGxpc3QnKVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Zm9vZC5faWR9IGNsYXNzTmFtZT0nbGlzdC1ncm91cC1pdGVtIGFuaW1hdGVkIGZhZGVJbic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtZWRpYSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3Bvc2l0aW9uIHB1bGwtbGVmdCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ICsgMX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdWxsLWxlZnQgdGh1bWItbGcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXsnL2Zvb2Q/X2lkPScgKyBmb29kLl9pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdtZWRpYS1vYmplY3QnIHNyYz0naHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9jL2M5Ly1JbnNlcnRfaW1hZ2VfaGVyZS0uc3ZnJy8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWVkaWEtYm9keSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOYW1lOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntmb29kLm5hbWV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2F0ZWdvcnk6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e2Zvb2QuY2F0ZWdvcnl9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD48YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5QaGFzZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb29kLnBoYXNlfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+PGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3QtZ3JvdXAnPntmb29kTGlzdH08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGb29kTGlzdFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgRm9vdGVyU3RvcmUgZnJvbSAnLi4vc3RvcmVzL0Zvb3RlclN0b3JlJ1xuaW1wb3J0IEZvb3RlckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9Gb290ZXJBY3Rpb25zJ1xuXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0gRm9vdGVyU3RvcmUuZ2V0U3RhdGUoKVxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIEZvb3RlclN0b3JlLmxpc3Rlbih0aGlzLm9uQ2hhbmdlKVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBGb290ZXJTdG9yZS51bmxpc3Rlbih0aGlzLm9uQ2hhbmdlKVxuICAgIH1cblxuICAgIG9uQ2hhbmdlKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLXNtLTUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2xlYWQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkluZm9ybWF0aW9uPC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPkNvcHlyaWdodDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UG93ZXJlZCBieVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPk5vZGUuanM8L3N0cm9uZz4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+TW9uZ29EQjwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5SZWFjdDwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aXRoIEZsdXggYXJjaGl0ZWN0dXJlIGFuZCBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7TGlua30gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBIb21lU3RvcmUgZnJvbSAnLi4vc3RvcmVzL0hvbWVTdG9yZSdcbmltcG9ydCBIb21lQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0hvbWVBY3Rpb25zJztcbmltcG9ydCB7Zmlyc3QsIHdpdGhvdXQsIGZpbmRXaGVyZX0gZnJvbSAndW5kZXJzY29yZSc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IEhvbWVTdG9yZS5nZXRTdGF0ZSgpO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBIb21lU3RvcmUubGlzdGVuKHRoaXMub25DaGFuZ2UpO1xuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBIb21lU3RvcmUudW5saXN0ZW4odGhpcy5vbkNoYW5nZSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2Uoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2xpY2soY2hhcmFjdGVyKSB7fVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RodW1ibmFpbCBmYWRlSW5VcCBhbmltYXRlZCc+XG4gICAgICAgICAgICAgICAgPHA+VGhpcyBpcyBob21lPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iLCIvKmdsb2JhbCAkLCBpbyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtMaW5rfSBmcm9tICdyZWFjdC1yb3V0ZXInXG5pbXBvcnQgTmF2YmFyU3RvcmUgZnJvbSAnLi4vc3RvcmVzL05hdmJhclN0b3JlJ1xuaW1wb3J0IE5hdmJhckFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9OYXZiYXJBY3Rpb25zJ1xuXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0gTmF2YmFyU3RvcmUuZ2V0U3RhdGUoKVxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIE5hdmJhclN0b3JlLmxpc3Rlbih0aGlzLm9uQ2hhbmdlKVxuICAgICAgICBOYXZiYXJBY3Rpb25zLmdldEZvb2RDb3VudCgpXG5cbiAgICAgICAgbGV0IHNvY2tldCA9IGlvLmNvbm5lY3QoKVxuXG4gICAgICAgIHNvY2tldC5vbignb25saW5lVXNlcnMnLCAoZGF0YSkgPT4ge1xuICAgICAgICAgICAgTmF2YmFyQWN0aW9ucy51cGRhdGVPbmxpbmVVc2VycyhkYXRhKVxuICAgICAgICB9KVxuXG4gICAgICAgICQoZG9jdW1lbnQpLmFqYXhTdGFydCgoKSA9PiB7XG4gICAgICAgICAgICBOYXZiYXJBY3Rpb25zLnVwZGF0ZUFqYXhBbmltYXRpb24oJ2ZhZGVJbicpXG4gICAgICAgIH0pXG5cbiAgICAgICAgJChkb2N1bWVudCkuYWpheENvbXBsZXRlKCgpID0+IHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIE5hdmJhckFjdGlvbnMudXBkYXRlQWpheEFuaW1hdGlvbignZmFkZU91dCcpXG4gICAgICAgICAgICB9LCA3NTApXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIE5hdmJhclN0b3JlLnVubGlzdGVuKHRoaXMub25DaGFuZ2UpXG4gICAgfVxuXG4gICAgb25DaGFuZ2Uoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSlcbiAgICB9XG5cbiAgICBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIGxldCBzZWFyY2hRdWVyeSA9IHRoaXMuc3RhdGUuc2VhcmNoUXVlcnkudHJpbSgpXG5cbiAgICAgICAgaWYgKHNlYXJjaFF1ZXJ5KSB7XG4gICAgICAgICAgICBOYXZiYXJBY3Rpb25zLmZpbmRGb29kKHtzZWFyY2hRdWVyeTogc2VhcmNoUXVlcnksIHNlYXJjaEZvcm06IHRoaXMucmVmcy5zZWFyY2hGb3JtLCBoaXN0b3J5OiB0aGlzLnByb3BzLmhpc3Rvcnl9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9J25hdmJhciBuYXZiYXItZGVmYXVsdCBuYXZiYXItc3RhdGljLXRvcCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J25hdmJhci1oZWFkZXInPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J2J1dHRvbicgY2xhc3NOYW1lPSduYXZiYXItdG9nZ2xlIGNvbGxhcHNlZCcgZGF0YS10b2dnbGU9J2NvbGxhcHNlJyBkYXRhLXRhcmdldD0nI25hdmJhcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPlRvZ2dsZSBuYXZpZ2F0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uLWJhcic+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uLWJhcic+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpY29uLWJhcic+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy8nIGNsYXNzTmFtZT0nbmF2YmFyLWJyYW5kJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHJlZj0ndHJpYW5nbGVzJyBjbGFzc05hbWU9eyd0cmlhbmdsZXMgYW5pbWF0ZWQgJyArIHRoaXMuc3RhdGUuYWpheEFuaW1hdGlvbkNsYXNzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJpIGludmVydCc+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyaSBpbnZlcnQnPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmknPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmkgaW52ZXJ0Jz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndHJpIGludmVydCc+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyaSc+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RyaSBpbnZlcnQnPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmknPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0cmkgaW52ZXJ0Jz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIExpZmVUZWNoXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2JhZGdlIGJhZGdlLXVwIGJhZGdlLWRhbmdlcic+e3RoaXMuc3RhdGUub25saW5lVXNlcnN9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD0nbmF2YmFyJyBjbGFzc05hbWU9J25hdmJhci1jb2xsYXBzZSBjb2xsYXBzZSc+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIHJlZj0nc2VhcmNoRm9ybScgY2xhc3NOYW1lPSduYXZiYXItZm9ybSBuYXZiYXItbGVmdCBhbmltYXRlZCcgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2lucHV0LWdyb3VwJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wnIHBsYWNlaG9sZGVyPXt0aGlzLnN0YXRlLnRvdGFsRm9vZHMgKyAnIEZvb2RzJ30gdmFsdWU9e3RoaXMuc3RhdGUuc2VhcmNoUXVlcnl9IG9uQ2hhbmdlPXtOYXZiYXJBY3Rpb25zLnVwZGF0ZVNlYXJjaFF1ZXJ5fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdpbnB1dC1ncm91cC1idG4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuIGJ0bi1kZWZhdWx0JyBvbkNsaWNrPXt0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZ2x5cGhpY29uIGdseXBoaWNvbi1zZWFyY2gnPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT0nbmF2IG5hdmJhci1uYXYnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvJz5Ib21lPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9J2Ryb3Bkb3duJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScjJyBjbGFzc05hbWU9J2Ryb3Bkb3duLXRvZ2dsZScgZGF0YS10b2dnbGU9J2Ryb3Bkb3duJz5QaGFzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2NhcmV0Jz48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2Ryb3Bkb3duLW1lbnUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nL3BoYXNlLzEnPkdBUFMgUGhhc2UgMTwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9waGFzZS8yJz5HQVBTIFBoYXNlIDI8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvcGhhc2UvMyc+R0FQUyBQaGFzZSAzPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nL3BoYXNlLzQnPkdBUFMgUGhhc2UgNDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89Jy9waGFzZS81Jz5HQVBTIFBoYXNlIDU8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPScvcGhhc2UvNic+R0FQUyBQaGFzZSA2PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nL3BoYXNlLzcnPkdBUFMgUGhhc2UgNzwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayB0bz0nL2FkZCc+QWRkPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjcmVhdGVCcm93c2VySGlzdG9yeSBmcm9tICdoaXN0b3J5L2xpYi9jcmVhdGVCcm93c2VySGlzdG9yeSc7XG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcic7XG5cbmxldCBoaXN0b3J5ID0gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKTtcblxuUmVhY3RET00ucmVuZGVyKDxSb3V0ZXIgaGlzdG9yeT17aGlzdG9yeX0+e3JvdXRlc308L1JvdXRlcj4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Um91dGV9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgQXBwIGZyb20gJy4vY29tcG9uZW50cy9BcHAnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9jb21wb25lbnRzL0hvbWUnO1xuaW1wb3J0IEZvb2RMaXN0IGZyb20gJy4vY29tcG9uZW50cy9Gb29kTGlzdCdcbmltcG9ydCBGb29kIGZyb20gJy4vY29tcG9uZW50cy9Gb29kJ1xuaW1wb3J0IEFkZEZvb2QgZnJvbSAnLi9jb21wb25lbnRzL0FkZEZvb2QnXG5cbmV4cG9ydCBkZWZhdWx0KFxuICAgIDxSb3V0ZSBjb21wb25lbnQ9e0FwcH0+XG4gICAgICAgIDxSb3V0ZSBwYXRoPScvJyBjb21wb25lbnQ9e0hvbWV9Lz5cbiAgICAgICAgPFJvdXRlIHBhdGg9Jy9waGFzZS86cGhhc2UnIGNvbXBvbmVudD17Rm9vZExpc3R9Lz5cbiAgICAgICAgPFJvdXRlIHBhdGg9Jy9hZGQnIGNvbXBvbmVudD17QWRkRm9vZH0vPlxuICAgICAgICA8Um91dGUgcGF0aD0nL2Zvb2QnIGNvbXBvbmVudD17Rm9vZH0vPlxuICAgIDwvUm91dGU+XG4pO1xuIiwiaW1wb3J0IGFsdCBmcm9tICcuLi9hbHQnXG5pbXBvcnQgQWRkRm9vZEFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9BZGRGb29kQWN0aW9ucydcblxuY2xhc3MgQWRkRm9vZFN0b3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5iaW5kQWN0aW9ucyhBZGRGb29kQWN0aW9ucylcbiAgICAgICAgdGhpcy5uYW1lID0gJydcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9ICcnXG4gICAgICAgIHRoaXMucGhhc2UgPSAwXG4gICAgICAgIHRoaXMuaGVscEJsb2NrID0gJydcbiAgICAgICAgdGhpcy5uYW1lVmFsaWRhdGlvblN0YXRlID0gJydcbiAgICAgICAgdGhpcy5jYXRlZ29yeVZhbGlkYXRpb25TdGF0ZSA9ICcnXG4gICAgICAgIHRoaXMucGhhc2VWYWxpZGF0aW9uU3RhdGUgPSAnJ1xuICAgIH1cblxuICAgIG9uQWRkRm9vZFN1Y2Nlc3Moc3VjY2Vzc01lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5uYW1lVmFsaWRhdGlvblN0YXRlID0gJ2hhcy1zdWNjZXNzJ1xuICAgICAgICB0aGlzLmhlbHBCbG9jayA9IHN1Y2Nlc3NNZXNzYWdlXG4gICAgfVxuXG4gICAgb25BZGRGb29kRmFpbChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5uYW1lVmFsaWRhdGlvblN0YXRlID0gJ2hhcy1lcnJvcidcbiAgICAgICAgdGhpcy5oZWxwQmxvY2sgPSBlcnJvck1lc3NhZ2VcbiAgICB9XG5cbiAgICBvblVwZGF0ZU5hbWUoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIHRoaXMubmFtZVZhbGlkYXRpb25TdGF0ZSA9ICcnXG4gICAgICAgIHRoaXMuaGVscEJsb2NrID0gJydcbiAgICB9XG5cbiAgICBvblVwZGF0ZUNhdGVnb3J5KGV2ZW50KSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnkgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgdGhpcy5jYXRlZ29yeVZhbGlkYXRpb25TdGF0ZSA9ICcnXG4gICAgfVxuXG4gICAgb25VcGRhdGVQaGFzZShldmVudCkge1xuICAgICAgICB0aGlzLnBoYXNlID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgIHRoaXMucGhhc2VWYWxpZGF0aW9uU3RhdGUgPSAnJ1xuICAgIH1cblxuICAgIG9uSW52YWxpZE5hbWUoKSB7XG4gICAgICAgIHRoaXMubmFtZVZhbGlkYXRpb25TdGF0ZSA9ICdoYXMtZXJyb3InXG4gICAgICAgIHRoaXMuaGVscEJsb2NrID0gJ1BsZWFzZSBlbnRlciBhIEZvb2QgbmFtZS4nXG4gICAgfVxuXG4gICAgb25JbnZhbGlkQ2F0ZWdvcnkoKSB7XG4gICAgICAgIHRoaXMuY2F0ZWdvcnlWYWxpZGF0aW9uU3RhdGUgPSAnaGFzLWVycm9yJ1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZVN0b3JlKEFkZEZvb2RTdG9yZSlcbiIsIi8qIGdsb2JhbCB0b2FzdHIgKi9cbmltcG9ydCBhbHQgZnJvbSAnLi4vYWx0J1xuaW1wb3J0IEZvb2RMaXN0QWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0Zvb2RMaXN0QWN0aW9ucydcblxuY2xhc3MgRm9vZExpc3RTdG9yZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYmluZEFjdGlvbnMoRm9vZExpc3RBY3Rpb25zKVxuICAgICAgICB0aGlzLmZvb2RzID0gW11cbiAgICB9XG5cbiAgICBnZXRGb29kc1N1Y2Nlc3MoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25HZXRDaGFyYWN0ZXJTdWNjZXNzIGRhdGE6JywgZGF0YSlcbiAgICAgICAgdGhpcy5mb29kcyA9IGRhdGFcbiAgICB9XG5cbiAgICBnZXRGb29kc0ZhaWwoanFYaHIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uR2V0Q2hhcmFjdGVyc0ZhaWxzJylcbiAgICAgICAgdG9hc3RyLmVycm9yKGpxWGhyLnJlc3BvbnNlSlNPTi5tZXNzYWdlKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYWx0LmNyZWF0ZVN0b3JlKEZvb2RMaXN0U3RvcmUpXG4iLCIvKmdsb2JhbCAkLCB0b2FzdHIgKi9cbmltcG9ydCB7YXNzaWduLCBjb250YWluc30gZnJvbSAndW5kZXJzY29yZSdcbmltcG9ydCBhbHQgZnJvbSAnLi4vYWx0J1xuaW1wb3J0IEZvb2RBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvRm9vZEFjdGlvbnMnXG5cbmNsYXNzIEZvb2RTdG9yZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYmluZEFjdGlvbnMoRm9vZEFjdGlvbnMpXG4gICAgICAgIHRoaXMuX2lkID0gMFxuICAgICAgICB0aGlzLm5hbWUgPSAnJ1xuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gMFxuICAgICAgICB0aGlzLnBoYXNlID0gJydcbiAgICB9XG5cbiAgICBvbkdldEZvb2RTdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgYXNzaWduKHRoaXMsIGRhdGEpXG4gICAgICAgIGxldCBsb2NhbERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZm9vZHMnKVxuICAgICAgICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmb29kcycpKVxuICAgICAgICAgICAgOiB7fVxuICAgICAgICBsZXQgcmVwb3J0cyA9IGxvY2FsRGF0YS5yZXBvcnRzIHx8IFtdXG4gICAgfVxuXG4gICAgb25HZXRGb29kRmFpbChqcVhocikge1xuICAgICAgICB0b2FzdHIuZXJyb3IoanFYaHIucmVzcG9uc2VKU09OLm1lc3NhZ2UpXG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFsdC5jcmVhdGVTdG9yZShGb29kU3RvcmUpXG4iLCJpbXBvcnQgYWx0IGZyb20gJy4uL2FsdCc7XG5pbXBvcnQgRm9vdGVyQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0Zvb3RlckFjdGlvbnMnO1xuXG5jbGFzcyBGb290ZXJTdG9yZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYmluZEFjdGlvbnMoRm9vdGVyQWN0aW9ucyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlU3RvcmUoRm9vdGVyU3RvcmUpO1xuIiwiLypnbG9iYWwgdG9hc3RyICovXG5pbXBvcnQgYWx0IGZyb20gJy4uL2FsdCdcbmltcG9ydCBIb21lQWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL0hvbWVBY3Rpb25zJ1xuXG5jbGFzcyBIb21lU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJpbmRBY3Rpb25zKEhvbWVBY3Rpb25zKVxuICAgICAgICB0aGlzLmZvb2RzID0gW11cbiAgICB9XG5cbiAgICBvbkdldFR3b0NoYXJhY3RlcnNTdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgdGhpcy5mb29kcyA9IGRhdGFcbiAgICB9XG5cbiAgICBvbkdldFR3b0NoYXJhY3RlcnNGYWlsKGVycm9yTWVzc2FnZSkge1xuICAgICAgICB0b2FzdHIuZXJyb3IoZXJyb3JNZXNzYWdlKVxuICAgIH1cblxuICAgIG9uVm90ZUZhaWwoZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIHRvYXN0ci5lcnJvcihlcnJvck1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlU3RvcmUoSG9tZVN0b3JlKVxuIiwiLypnbG9iYWwgdG9hc3RyICovXG5pbXBvcnQgYWx0IGZyb20gJy4uL2FsdCdcbmltcG9ydCBOYXZiYXJBY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvTmF2YmFyQWN0aW9ucydcblxuY2xhc3MgTmF2YmFyU3RvcmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJpbmRBY3Rpb25zKE5hdmJhckFjdGlvbnMpXG4gICAgICAgIHRoaXMudG90YWxGb29kcyA9IDBcbiAgICAgICAgdGhpcy5vbmxpbmVVc2VycyA9IDBcbiAgICAgICAgdGhpcy5zZWFyY2hRdWVyeSA9ICcnXG4gICAgICAgIHRoaXMuYWpheEFuaW1hdGlvbkNsYXNzID0gJydcbiAgICB9XG5cbiAgICBvbkZpbmRGb29kU3VjY2VzcyhwYXlsb2FkKSB7XG4gICAgICAgIHBheWxvYWQuaGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgJy9mb29kcy8nICsgcGF5bG9hZC5mb29kSWQpXG4gICAgfVxuXG4gICAgb25GaW5kRm9vZEZhaWwocGF5bG9hZCkge1xuICAgICAgICBwYXlsb2FkLnNlYXJjaEZvcm0uY2xhc3NMaXN0LmFkZCgnc2hha2UnKVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHBheWxvYWQuc2VhcmNoRm9ybS5jbGFzc0xpc3QucmVtb3ZlKCdzaGFrZScpXG4gICAgICAgIH0sIDEwMDApXG4gICAgfVxuXG4gICAgb25VcGRhdGVPbmxpbmVVc2VycyhkYXRhKSB7XG4gICAgICAgIHRoaXMub25saW5lVXNlcnMgPSBkYXRhLm9ubGluZVVzZXJzXG4gICAgfVxuXG4gICAgb25VcGRhdGVBamF4QW5pbWF0aW9uKGNsYXNzTmFtZSkge1xuICAgICAgICB0aGlzLmFqYXhBbmltYXRpb25DbGFzcyA9IGNsYXNzTmFtZSAvL2ZhZGVpbiBvciBmYWRlb3V0XG4gICAgfVxuXG4gICAgb25VcGRhdGVTZWFyY2hRdWVyeShldmVudCkge1xuICAgICAgICB0aGlzLnNlYXJjaFF1ZXJ5ID0gZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgfVxuXG4gICAgb25HZXRGb29kQ291bnRTdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgdGhpcy50b3RhbEZvb2RzID0gZGF0YS5jb3VudFxuICAgIH1cblxuICAgIG9uR2V0Rm9vZENvdW50RmFpbChqcVhocikge1xuICAgICAgICB0b2FzdHIuZXJyb3IoanFYaHIucmVzcG9uc2VKU09OLm1lc3NhZ2UpXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBhbHQuY3JlYXRlU3RvcmUoTmF2YmFyU3RvcmUpXG4iLCJ2YXIgcFNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIG9iamVjdEtleXMgPSByZXF1aXJlKCcuL2xpYi9rZXlzLmpzJyk7XG52YXIgaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2xpYi9pc19hcmd1bWVudHMuanMnKTtcblxudmFyIGRlZXBFcXVhbCA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGFjdHVhbCwgZXhwZWN0ZWQsIG9wdHMpIHtcbiAgaWYgKCFvcHRzKSBvcHRzID0ge307XG4gIC8vIDcuMS4gQWxsIGlkZW50aWNhbCB2YWx1ZXMgYXJlIGVxdWl2YWxlbnQsIGFzIGRldGVybWluZWQgYnkgPT09LlxuICBpZiAoYWN0dWFsID09PSBleHBlY3RlZCkge1xuICAgIHJldHVybiB0cnVlO1xuXG4gIH0gZWxzZSBpZiAoYWN0dWFsIGluc3RhbmNlb2YgRGF0ZSAmJiBleHBlY3RlZCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICByZXR1cm4gYWN0dWFsLmdldFRpbWUoKSA9PT0gZXhwZWN0ZWQuZ2V0VGltZSgpO1xuXG4gIC8vIDcuMy4gT3RoZXIgcGFpcnMgdGhhdCBkbyBub3QgYm90aCBwYXNzIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JyxcbiAgLy8gZXF1aXZhbGVuY2UgaXMgZGV0ZXJtaW5lZCBieSA9PS5cbiAgfSBlbHNlIGlmICghYWN0dWFsIHx8ICFleHBlY3RlZCB8fCB0eXBlb2YgYWN0dWFsICE9ICdvYmplY3QnICYmIHR5cGVvZiBleHBlY3RlZCAhPSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBvcHRzLnN0cmljdCA/IGFjdHVhbCA9PT0gZXhwZWN0ZWQgOiBhY3R1YWwgPT0gZXhwZWN0ZWQ7XG5cbiAgLy8gNy40LiBGb3IgYWxsIG90aGVyIE9iamVjdCBwYWlycywgaW5jbHVkaW5nIEFycmF5IG9iamVjdHMsIGVxdWl2YWxlbmNlIGlzXG4gIC8vIGRldGVybWluZWQgYnkgaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChhcyB2ZXJpZmllZFxuICAvLyB3aXRoIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCksIHRoZSBzYW1lIHNldCBvZiBrZXlzXG4gIC8vIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLCBlcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnlcbiAgLy8gY29ycmVzcG9uZGluZyBrZXksIGFuZCBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuIE5vdGU6IHRoaXNcbiAgLy8gYWNjb3VudHMgZm9yIGJvdGggbmFtZWQgYW5kIGluZGV4ZWQgcHJvcGVydGllcyBvbiBBcnJheXMuXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9iakVxdWl2KGFjdHVhbCwgZXhwZWN0ZWQsIG9wdHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkT3JOdWxsKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAoeCkge1xuICBpZiAoIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnIHx8IHR5cGVvZiB4Lmxlbmd0aCAhPT0gJ251bWJlcicpIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiB4LmNvcHkgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIHguc2xpY2UgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHgubGVuZ3RoID4gMCAmJiB0eXBlb2YgeFswXSAhPT0gJ251bWJlcicpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIG9iakVxdWl2KGEsIGIsIG9wdHMpIHtcbiAgdmFyIGksIGtleTtcbiAgaWYgKGlzVW5kZWZpbmVkT3JOdWxsKGEpIHx8IGlzVW5kZWZpbmVkT3JOdWxsKGIpKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy8gYW4gaWRlbnRpY2FsICdwcm90b3R5cGUnIHByb3BlcnR5LlxuICBpZiAoYS5wcm90b3R5cGUgIT09IGIucHJvdG90eXBlKSByZXR1cm4gZmFsc2U7XG4gIC8vfn5+SSd2ZSBtYW5hZ2VkIHRvIGJyZWFrIE9iamVjdC5rZXlzIHRocm91Z2ggc2NyZXd5IGFyZ3VtZW50cyBwYXNzaW5nLlxuICAvLyAgIENvbnZlcnRpbmcgdG8gYXJyYXkgc29sdmVzIHRoZSBwcm9ibGVtLlxuICBpZiAoaXNBcmd1bWVudHMoYSkpIHtcbiAgICBpZiAoIWlzQXJndW1lbnRzKGIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGEgPSBwU2xpY2UuY2FsbChhKTtcbiAgICBiID0gcFNsaWNlLmNhbGwoYik7XG4gICAgcmV0dXJuIGRlZXBFcXVhbChhLCBiLCBvcHRzKTtcbiAgfVxuICBpZiAoaXNCdWZmZXIoYSkpIHtcbiAgICBpZiAoIWlzQnVmZmVyKGIpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChhLmxlbmd0aCAhPT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFbaV0gIT09IGJbaV0pIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdHJ5IHtcbiAgICB2YXIga2EgPSBvYmplY3RLZXlzKGEpLFxuICAgICAgICBrYiA9IG9iamVjdEtleXMoYik7XG4gIH0gY2F0Y2ggKGUpIHsvL2hhcHBlbnMgd2hlbiBvbmUgaXMgYSBzdHJpbmcgbGl0ZXJhbCBhbmQgdGhlIG90aGVyIGlzbid0XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoa2V5cyBpbmNvcnBvcmF0ZXNcbiAgLy8gaGFzT3duUHJvcGVydHkpXG4gIGlmIChrYS5sZW5ndGggIT0ga2IubGVuZ3RoKVxuICAgIHJldHVybiBmYWxzZTtcbiAgLy90aGUgc2FtZSBzZXQgb2Yga2V5cyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSxcbiAga2Euc29ydCgpO1xuICBrYi5zb3J0KCk7XG4gIC8vfn5+Y2hlYXAga2V5IHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAoa2FbaV0gIT0ga2JbaV0pXG4gICAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy9lcXVpdmFsZW50IHZhbHVlcyBmb3IgZXZlcnkgY29ycmVzcG9uZGluZyBrZXksIGFuZFxuICAvL35+fnBvc3NpYmx5IGV4cGVuc2l2ZSBkZWVwIHRlc3RcbiAgZm9yIChpID0ga2EubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICBrZXkgPSBrYVtpXTtcbiAgICBpZiAoIWRlZXBFcXVhbChhW2tleV0sIGJba2V5XSwgb3B0cykpIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHlwZW9mIGEgPT09IHR5cGVvZiBiO1xufVxuIiwidmFyIHN1cHBvcnRzQXJndW1lbnRzQ2xhc3MgPSAoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudHMpXG59KSgpID09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xuXG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBzdXBwb3J0c0FyZ3VtZW50c0NsYXNzID8gc3VwcG9ydGVkIDogdW5zdXBwb3J0ZWQ7XG5cbmV4cG9ydHMuc3VwcG9ydGVkID0gc3VwcG9ydGVkO1xuZnVuY3Rpb24gc3VwcG9ydGVkKG9iamVjdCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iamVjdCkgPT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG59O1xuXG5leHBvcnRzLnVuc3VwcG9ydGVkID0gdW5zdXBwb3J0ZWQ7XG5mdW5jdGlvbiB1bnN1cHBvcnRlZChvYmplY3Qpe1xuICByZXR1cm4gb2JqZWN0ICYmXG4gICAgdHlwZW9mIG9iamVjdCA9PSAnb2JqZWN0JyAmJlxuICAgIHR5cGVvZiBvYmplY3QubGVuZ3RoID09ICdudW1iZXInICYmXG4gICAgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgJ2NhbGxlZScpICYmXG4gICAgIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmplY3QsICdjYWxsZWUnKSB8fFxuICAgIGZhbHNlO1xufTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBPYmplY3Qua2V5cyA9PT0gJ2Z1bmN0aW9uJ1xuICA/IE9iamVjdC5rZXlzIDogc2hpbTtcblxuZXhwb3J0cy5zaGltID0gc2hpbTtcbmZ1bmN0aW9uIHNoaW0gKG9iaikge1xuICB2YXIga2V5cyA9IFtdO1xuICBmb3IgKHZhciBrZXkgaW4gb2JqKSBrZXlzLnB1c2goa2V5KTtcbiAgcmV0dXJuIGtleXM7XG59XG4iLCIvKipcbiAqIEluZGljYXRlcyB0aGF0IG5hdmlnYXRpb24gd2FzIGNhdXNlZCBieSBhIGNhbGwgdG8gaGlzdG9yeS5wdXNoLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgUFVTSCA9ICdQVVNIJztcblxuZXhwb3J0cy5QVVNIID0gUFVTSDtcbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgbmF2aWdhdGlvbiB3YXMgY2F1c2VkIGJ5IGEgY2FsbCB0byBoaXN0b3J5LnJlcGxhY2UuXG4gKi9cbnZhciBSRVBMQUNFID0gJ1JFUExBQ0UnO1xuXG5leHBvcnRzLlJFUExBQ0UgPSBSRVBMQUNFO1xuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBuYXZpZ2F0aW9uIHdhcyBjYXVzZWQgYnkgc29tZSBvdGhlciBhY3Rpb24gc3VjaFxuICogYXMgdXNpbmcgYSBicm93c2VyJ3MgYmFjay9mb3J3YXJkIGJ1dHRvbnMgYW5kL29yIG1hbnVhbGx5IG1hbmlwdWxhdGluZ1xuICogdGhlIFVSTCBpbiBhIGJyb3dzZXIncyBsb2NhdGlvbiBiYXIuIFRoaXMgaXMgdGhlIGRlZmF1bHQuXG4gKlxuICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dFdmVudEhhbmRsZXJzL29ucG9wc3RhdGVcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICovXG52YXIgUE9QID0gJ1BPUCc7XG5cbmV4cG9ydHMuUE9QID0gUE9QO1xuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBQVVNIOiBQVVNILFxuICBSRVBMQUNFOiBSRVBMQUNFLFxuICBQT1A6IFBPUFxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMubG9vcEFzeW5jID0gbG9vcEFzeW5jO1xuXG5mdW5jdGlvbiBsb29wQXN5bmModHVybnMsIHdvcmssIGNhbGxiYWNrKSB7XG4gIHZhciBjdXJyZW50VHVybiA9IDA7XG4gIHZhciBpc0RvbmUgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGlzRG9uZSA9IHRydWU7XG4gICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgaWYgKGlzRG9uZSkgcmV0dXJuO1xuXG4gICAgaWYgKGN1cnJlbnRUdXJuIDwgdHVybnMpIHtcbiAgICAgIHdvcmsuY2FsbCh0aGlzLCBjdXJyZW50VHVybisrLCBuZXh0LCBkb25lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9uZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTtcbn0iLCIvKmVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNhdmVTdGF0ZSA9IHNhdmVTdGF0ZTtcbmV4cG9ydHMucmVhZFN0YXRlID0gcmVhZFN0YXRlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgS2V5UHJlZml4ID0gJ0BASGlzdG9yeS8nO1xudmFyIFF1b3RhRXhjZWVkZWRFcnJvciA9ICdRdW90YUV4Y2VlZGVkRXJyb3InO1xudmFyIFNlY3VyaXR5RXJyb3IgPSAnU2VjdXJpdHlFcnJvcic7XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleShrZXkpIHtcbiAgcmV0dXJuIEtleVByZWZpeCArIGtleTtcbn1cblxuZnVuY3Rpb24gc2F2ZVN0YXRlKGtleSwgc3RhdGUpIHtcbiAgdHJ5IHtcbiAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShjcmVhdGVLZXkoa2V5KSwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IubmFtZSA9PT0gU2VjdXJpdHlFcnJvcikge1xuICAgICAgLy8gQmxvY2tpbmcgY29va2llcyBpbiBDaHJvbWUvRmlyZWZveC9TYWZhcmkgdGhyb3dzIFNlY3VyaXR5RXJyb3Igb24gYW55XG4gICAgICAvLyBhdHRlbXB0IHRvIGFjY2VzcyB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10oZmFsc2UsICdbaGlzdG9yeV0gVW5hYmxlIHRvIHNhdmUgc3RhdGU7IHNlc3Npb25TdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUgZHVlIHRvIHNlY3VyaXR5IHNldHRpbmdzJykgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3IubmFtZSA9PT0gUXVvdGFFeGNlZWRlZEVycm9yICYmIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIFNhZmFyaSBcInByaXZhdGUgbW9kZVwiIHRocm93cyBRdW90YUV4Y2VlZGVkRXJyb3IuXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10oZmFsc2UsICdbaGlzdG9yeV0gVW5hYmxlIHRvIHNhdmUgc3RhdGU7IHNlc3Npb25TdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUgaW4gU2FmYXJpIHByaXZhdGUgbW9kZScpIDogdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVhZFN0YXRlKGtleSkge1xuICB2YXIganNvbiA9IHVuZGVmaW5lZDtcbiAgdHJ5IHtcbiAgICBqc29uID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oY3JlYXRlS2V5KGtleSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvci5uYW1lID09PSBTZWN1cml0eUVycm9yKSB7XG4gICAgICAvLyBCbG9ja2luZyBjb29raWVzIGluIENocm9tZS9GaXJlZm94L1NhZmFyaSB0aHJvd3MgU2VjdXJpdHlFcnJvciBvbiBhbnlcbiAgICAgIC8vIGF0dGVtcHQgdG8gYWNjZXNzIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ1toaXN0b3J5XSBVbmFibGUgdG8gcmVhZCBzdGF0ZTsgc2Vzc2lvblN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSBkdWUgdG8gc2VjdXJpdHkgc2V0dGluZ3MnKSA6IHVuZGVmaW5lZDtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgaWYgKGpzb24pIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIElnbm9yZSBpbnZhbGlkIEpTT04uXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5hZGRFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcjtcbmV4cG9ydHMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHJlbW92ZUV2ZW50TGlzdGVuZXI7XG5leHBvcnRzLmdldEhhc2hQYXRoID0gZ2V0SGFzaFBhdGg7XG5leHBvcnRzLnJlcGxhY2VIYXNoUGF0aCA9IHJlcGxhY2VIYXNoUGF0aDtcbmV4cG9ydHMuZ2V0V2luZG93UGF0aCA9IGdldFdpbmRvd1BhdGg7XG5leHBvcnRzLmdvID0gZ287XG5leHBvcnRzLmdldFVzZXJDb25maXJtYXRpb24gPSBnZXRVc2VyQ29uZmlybWF0aW9uO1xuZXhwb3J0cy5zdXBwb3J0c0hpc3RvcnkgPSBzdXBwb3J0c0hpc3Rvcnk7XG5leHBvcnRzLnN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoID0gc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2g7XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIGlmIChub2RlLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50LCBsaXN0ZW5lcikge1xuICBpZiAobm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SGFzaFBhdGgoKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB3aW5kb3cubG9jYXRpb24uaGFzaCBoZXJlIGJlY2F1c2UgaXQncyBub3RcbiAgLy8gY29uc2lzdGVudCBhY3Jvc3MgYnJvd3NlcnMgLSBGaXJlZm94IHdpbGwgcHJlLWRlY29kZSBpdCFcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMV0gfHwgJyc7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VIYXNoUGF0aChwYXRoKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyAnIycgKyBwYXRoKTtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93UGF0aCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaDtcbn1cblxuZnVuY3Rpb24gZ28obikge1xuICBpZiAobikgd2luZG93Lmhpc3RvcnkuZ28obik7XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJDb25maXJtYXRpb24obWVzc2FnZSwgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sod2luZG93LmNvbmZpcm0obWVzc2FnZSkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaXMgc3VwcG9ydGVkLiBUYWtlbiBmcm9tIE1vZGVybml6ci5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvaGlzdG9yeS5qc1xuICogY2hhbmdlZCB0byBhdm9pZCBmYWxzZSBuZWdhdGl2ZXMgZm9yIFdpbmRvd3MgUGhvbmVzOiBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVhY3Qtcm91dGVyL2lzc3Vlcy81ODZcbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0hpc3RvcnkoKSB7XG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIGlmICgodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiYgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEgJiYgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBGSVhNRTogV29yayBhcm91bmQgb3VyIGJyb3dzZXIgaGlzdG9yeSBub3Qgd29ya2luZyBjb3JyZWN0bHkgb24gQ2hyb21lXG4gIC8vIGlPUzogaHR0cHM6Ly9naXRodWIuY29tL3JhY2t0L3JlYWN0LXJvdXRlci9pc3N1ZXMvMjU2NVxuICBpZiAodWEuaW5kZXhPZignQ3JpT1MnKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5O1xufVxuXG4vKipcbiAqIFJldHVybnMgZmFsc2UgaWYgdXNpbmcgZ28obikgd2l0aCBoYXNoIGhpc3RvcnkgY2F1c2VzIGEgZnVsbCBwYWdlIHJlbG9hZC5cbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCgpIHtcbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgcmV0dXJuIHVhLmluZGV4T2YoJ0ZpcmVmb3gnKSA9PT0gLTE7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5leHBvcnRzLmNhblVzZURPTSA9IGNhblVzZURPTTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9BY3Rpb25zID0gcmVxdWlyZSgnLi9BY3Rpb25zJyk7XG5cbnZhciBfRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbnZhciBfRE9NU3RhdGVTdG9yYWdlID0gcmVxdWlyZSgnLi9ET01TdGF0ZVN0b3JhZ2UnKTtcblxudmFyIF9jcmVhdGVET01IaXN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVET01IaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlRE9NSGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVET01IaXN0b3J5KTtcblxudmFyIF9wYXJzZVBhdGggPSByZXF1aXJlKCcuL3BhcnNlUGF0aCcpO1xuXG52YXIgX3BhcnNlUGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZVBhdGgpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBoaXN0b3J5IG9iamVjdCB0aGF0IHVzZXMgSFRNTDUncyBoaXN0b3J5IEFQSVxuICogKHB1c2hTdGF0ZSwgcmVwbGFjZVN0YXRlLCBhbmQgdGhlIHBvcHN0YXRlIGV2ZW50KSB0byBtYW5hZ2UgaGlzdG9yeS5cbiAqIFRoaXMgaXMgdGhlIHJlY29tbWVuZGVkIG1ldGhvZCBvZiBtYW5hZ2luZyBoaXN0b3J5IGluIGJyb3dzZXJzIGJlY2F1c2VcbiAqIGl0IHByb3ZpZGVzIHRoZSBjbGVhbmVzdCBVUkxzLlxuICpcbiAqIE5vdGU6IEluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgdGhlIEhUTUw1IGhpc3RvcnkgQVBJIGZ1bGxcbiAqIHBhZ2UgcmVsb2FkcyB3aWxsIGJlIHVzZWQgdG8gcHJlc2VydmUgVVJMcy5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgIV9FeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ0Jyb3dzZXIgaGlzdG9yeSBuZWVkcyBhIERPTScpIDogX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSkgOiB1bmRlZmluZWQ7XG5cbiAgdmFyIGZvcmNlUmVmcmVzaCA9IG9wdGlvbnMuZm9yY2VSZWZyZXNoO1xuXG4gIHZhciBpc1N1cHBvcnRlZCA9IF9ET01VdGlscy5zdXBwb3J0c0hpc3RvcnkoKTtcbiAgdmFyIHVzZVJlZnJlc2ggPSAhaXNTdXBwb3J0ZWQgfHwgZm9yY2VSZWZyZXNoO1xuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbihoaXN0b3J5U3RhdGUpIHtcbiAgICBoaXN0b3J5U3RhdGUgPSBoaXN0b3J5U3RhdGUgfHwgd2luZG93Lmhpc3Rvcnkuc3RhdGUgfHwge307XG5cbiAgICB2YXIgcGF0aCA9IF9ET01VdGlscy5nZXRXaW5kb3dQYXRoKCk7XG4gICAgdmFyIF9oaXN0b3J5U3RhdGUgPSBoaXN0b3J5U3RhdGU7XG4gICAgdmFyIGtleSA9IF9oaXN0b3J5U3RhdGUua2V5O1xuXG4gICAgdmFyIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHN0YXRlID0gX0RPTVN0YXRlU3RvcmFnZS5yZWFkU3RhdGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUgPSBudWxsO1xuICAgICAga2V5ID0gaGlzdG9yeS5jcmVhdGVLZXkoKTtcblxuICAgICAgaWYgKGlzU3VwcG9ydGVkKSB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoX2V4dGVuZHMoe30sIGhpc3RvcnlTdGF0ZSwgeyBrZXk6IGtleSB9KSwgbnVsbCwgcGF0aCk7XG4gICAgfVxuXG4gICAgdmFyIGxvY2F0aW9uID0gX3BhcnNlUGF0aDJbJ2RlZmF1bHQnXShwYXRoKTtcblxuICAgIHJldHVybiBoaXN0b3J5LmNyZWF0ZUxvY2F0aW9uKF9leHRlbmRzKHt9LCBsb2NhdGlvbiwgeyBzdGF0ZTogc3RhdGUgfSksIHVuZGVmaW5lZCwga2V5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0UG9wU3RhdGVMaXN0ZW5lcihfcmVmKSB7XG4gICAgdmFyIHRyYW5zaXRpb25UbyA9IF9yZWYudHJhbnNpdGlvblRvO1xuXG4gICAgZnVuY3Rpb24gcG9wU3RhdGVMaXN0ZW5lcihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnN0YXRlID09PSB1bmRlZmluZWQpIHJldHVybjsgLy8gSWdub3JlIGV4dHJhbmVvdXMgcG9wc3RhdGUgZXZlbnRzIGluIFdlYktpdC5cblxuICAgICAgdHJhbnNpdGlvblRvKGdldEN1cnJlbnRMb2NhdGlvbihldmVudC5zdGF0ZSkpO1xuICAgIH1cblxuICAgIF9ET01VdGlscy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ3BvcHN0YXRlJywgcG9wU3RhdGVMaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgX0RPTVV0aWxzLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAncG9wc3RhdGUnLCBwb3BTdGF0ZUxpc3RlbmVyKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZmluaXNoVHJhbnNpdGlvbihsb2NhdGlvbikge1xuICAgIHZhciBiYXNlbmFtZSA9IGxvY2F0aW9uLmJhc2VuYW1lO1xuICAgIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIHZhciBzZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2g7XG4gICAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuICAgIHZhciBzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlO1xuICAgIHZhciBhY3Rpb24gPSBsb2NhdGlvbi5hY3Rpb247XG4gICAgdmFyIGtleSA9IGxvY2F0aW9uLmtleTtcblxuICAgIGlmIChhY3Rpb24gPT09IF9BY3Rpb25zLlBPUCkgcmV0dXJuOyAvLyBOb3RoaW5nIHRvIGRvLlxuXG4gICAgX0RPTVN0YXRlU3RvcmFnZS5zYXZlU3RhdGUoa2V5LCBzdGF0ZSk7XG5cbiAgICB2YXIgcGF0aCA9IChiYXNlbmFtZSB8fCAnJykgKyBwYXRobmFtZSArIHNlYXJjaCArIGhhc2g7XG4gICAgdmFyIGhpc3RvcnlTdGF0ZSA9IHtcbiAgICAgIGtleToga2V5XG4gICAgfTtcblxuICAgIGlmIChhY3Rpb24gPT09IF9BY3Rpb25zLlBVU0gpIHtcbiAgICAgIGlmICh1c2VSZWZyZXNoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aDtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBQcmV2ZW50IGxvY2F0aW9uIHVwZGF0ZS5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKGhpc3RvcnlTdGF0ZSwgbnVsbCwgcGF0aCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUkVQTEFDRVxuICAgICAgaWYgKHVzZVJlZnJlc2gpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocGF0aCk7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gUHJldmVudCBsb2NhdGlvbiB1cGRhdGUuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShoaXN0b3J5U3RhdGUsIG51bGwsIHBhdGgpO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGhpc3RvcnkgPSBfY3JlYXRlRE9NSGlzdG9yeTJbJ2RlZmF1bHQnXShfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgIGdldEN1cnJlbnRMb2NhdGlvbjogZ2V0Q3VycmVudExvY2F0aW9uLFxuICAgIGZpbmlzaFRyYW5zaXRpb246IGZpbmlzaFRyYW5zaXRpb24sXG4gICAgc2F2ZVN0YXRlOiBfRE9NU3RhdGVTdG9yYWdlLnNhdmVTdGF0ZVxuICB9KSk7XG5cbiAgdmFyIGxpc3RlbmVyQ291bnQgPSAwLFxuICAgICAgc3RvcFBvcFN0YXRlTGlzdGVuZXIgPSB1bmRlZmluZWQ7XG5cbiAgZnVuY3Rpb24gbGlzdGVuQmVmb3JlKGxpc3RlbmVyKSB7XG4gICAgaWYgKCsrbGlzdGVuZXJDb3VudCA9PT0gMSkgc3RvcFBvcFN0YXRlTGlzdGVuZXIgPSBzdGFydFBvcFN0YXRlTGlzdGVuZXIoaGlzdG9yeSk7XG5cbiAgICB2YXIgdW5saXN0ZW4gPSBoaXN0b3J5Lmxpc3RlbkJlZm9yZShsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdW5saXN0ZW4oKTtcblxuICAgICAgaWYgKC0tbGlzdGVuZXJDb3VudCA9PT0gMCkgc3RvcFBvcFN0YXRlTGlzdGVuZXIoKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgaWYgKCsrbGlzdGVuZXJDb3VudCA9PT0gMSkgc3RvcFBvcFN0YXRlTGlzdGVuZXIgPSBzdGFydFBvcFN0YXRlTGlzdGVuZXIoaGlzdG9yeSk7XG5cbiAgICB2YXIgdW5saXN0ZW4gPSBoaXN0b3J5Lmxpc3RlbihsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdW5saXN0ZW4oKTtcblxuICAgICAgaWYgKC0tbGlzdGVuZXJDb3VudCA9PT0gMCkgc3RvcFBvcFN0YXRlTGlzdGVuZXIoKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHN0YXJ0UG9wU3RhdGVMaXN0ZW5lcihoaXN0b3J5KTtcblxuICAgIGhpc3RvcnkucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICBoaXN0b3J5LnVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKTtcblxuICAgIGlmICgtLWxpc3RlbmVyQ291bnQgPT09IDApIHN0b3BQb3BTdGF0ZUxpc3RlbmVyKCk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGhpc3RvcnksIHtcbiAgICBsaXN0ZW5CZWZvcmU6IGxpc3RlbkJlZm9yZSxcbiAgICBsaXN0ZW46IGxpc3RlbixcbiAgICByZWdpc3RlclRyYW5zaXRpb25Ib29rOiByZWdpc3RlclRyYW5zaXRpb25Ib29rLFxuICAgIHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vazogdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rXG4gIH0pO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVCcm93c2VySGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0V4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG52YXIgX0RPTVV0aWxzID0gcmVxdWlyZSgnLi9ET01VdGlscycpO1xuXG52YXIgX2NyZWF0ZUhpc3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVIaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUhpc3RvcnkpO1xuXG5mdW5jdGlvbiBjcmVhdGVET01IaXN0b3J5KG9wdGlvbnMpIHtcbiAgdmFyIGhpc3RvcnkgPSBfY3JlYXRlSGlzdG9yeTJbJ2RlZmF1bHQnXShfZXh0ZW5kcyh7XG4gICAgZ2V0VXNlckNvbmZpcm1hdGlvbjogX0RPTVV0aWxzLmdldFVzZXJDb25maXJtYXRpb25cbiAgfSwgb3B0aW9ucywge1xuICAgIGdvOiBfRE9NVXRpbHMuZ29cbiAgfSkpO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgICFfRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UsICdET00gaGlzdG9yeSBuZWVkcyBhIERPTScpIDogX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSkgOiB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4gaGlzdG9yeS5saXN0ZW4obGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaXN0b3J5LCB7XG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfSk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZURPTUhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvL2ltcG9ydCB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9kZWVwRXF1YWwgPSByZXF1aXJlKCdkZWVwLWVxdWFsJyk7XG5cbnZhciBfZGVlcEVxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZXBFcXVhbCk7XG5cbnZhciBfQXN5bmNVdGlscyA9IHJlcXVpcmUoJy4vQXN5bmNVdGlscycpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9jcmVhdGVMb2NhdGlvbjIgPSByZXF1aXJlKCcuL2NyZWF0ZUxvY2F0aW9uJyk7XG5cbnZhciBfY3JlYXRlTG9jYXRpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlTG9jYXRpb24yKTtcblxudmFyIF9ydW5UcmFuc2l0aW9uSG9vayA9IHJlcXVpcmUoJy4vcnVuVHJhbnNpdGlvbkhvb2snKTtcblxudmFyIF9ydW5UcmFuc2l0aW9uSG9vazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ydW5UcmFuc2l0aW9uSG9vayk7XG5cbnZhciBfcGFyc2VQYXRoID0gcmVxdWlyZSgnLi9wYXJzZVBhdGgnKTtcblxudmFyIF9wYXJzZVBhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyc2VQYXRoKTtcblxudmFyIF9kZXByZWNhdGUgPSByZXF1aXJlKCcuL2RlcHJlY2F0ZScpO1xuXG52YXIgX2RlcHJlY2F0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXByZWNhdGUpO1xuXG5mdW5jdGlvbiBjcmVhdGVSYW5kb21LZXkobGVuZ3RoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgbGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gbG9jYXRpb25zQXJlRXF1YWwoYSwgYikge1xuICByZXR1cm4gYS5wYXRobmFtZSA9PT0gYi5wYXRobmFtZSAmJiBhLnNlYXJjaCA9PT0gYi5zZWFyY2ggJiZcbiAgLy9hLmFjdGlvbiA9PT0gYi5hY3Rpb24gJiYgLy8gRGlmZmVyZW50IGFjdGlvbiAhPT0gbG9jYXRpb24gY2hhbmdlLlxuICBhLmtleSA9PT0gYi5rZXkgJiYgX2RlZXBFcXVhbDJbJ2RlZmF1bHQnXShhLnN0YXRlLCBiLnN0YXRlKTtcbn1cblxudmFyIERlZmF1bHRLZXlMZW5ndGggPSA2O1xuXG5mdW5jdGlvbiBjcmVhdGVIaXN0b3J5KCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICB2YXIgZ2V0Q3VycmVudExvY2F0aW9uID0gb3B0aW9ucy5nZXRDdXJyZW50TG9jYXRpb247XG4gIHZhciBmaW5pc2hUcmFuc2l0aW9uID0gb3B0aW9ucy5maW5pc2hUcmFuc2l0aW9uO1xuICB2YXIgc2F2ZVN0YXRlID0gb3B0aW9ucy5zYXZlU3RhdGU7XG4gIHZhciBnbyA9IG9wdGlvbnMuZ287XG4gIHZhciBrZXlMZW5ndGggPSBvcHRpb25zLmtleUxlbmd0aDtcbiAgdmFyIGdldFVzZXJDb25maXJtYXRpb24gPSBvcHRpb25zLmdldFVzZXJDb25maXJtYXRpb247XG5cbiAgaWYgKHR5cGVvZiBrZXlMZW5ndGggIT09ICdudW1iZXInKSBrZXlMZW5ndGggPSBEZWZhdWx0S2V5TGVuZ3RoO1xuXG4gIHZhciB0cmFuc2l0aW9uSG9va3MgPSBbXTtcblxuICBmdW5jdGlvbiBsaXN0ZW5CZWZvcmUoaG9vaykge1xuICAgIHRyYW5zaXRpb25Ib29rcy5wdXNoKGhvb2spO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyYW5zaXRpb25Ib29rcyA9IHRyYW5zaXRpb25Ib29rcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGhvb2s7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGFsbEtleXMgPSBbXTtcbiAgdmFyIGNoYW5nZUxpc3RlbmVycyA9IFtdO1xuICB2YXIgbG9jYXRpb24gPSB1bmRlZmluZWQ7XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudCgpIHtcbiAgICBpZiAocGVuZGluZ0xvY2F0aW9uICYmIHBlbmRpbmdMb2NhdGlvbi5hY3Rpb24gPT09IF9BY3Rpb25zLlBPUCkge1xuICAgICAgcmV0dXJuIGFsbEtleXMuaW5kZXhPZihwZW5kaW5nTG9jYXRpb24ua2V5KTtcbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uKSB7XG4gICAgICByZXR1cm4gYWxsS2V5cy5pbmRleE9mKGxvY2F0aW9uLmtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVMb2NhdGlvbihuZXdMb2NhdGlvbikge1xuICAgIHZhciBjdXJyZW50ID0gZ2V0Q3VycmVudCgpO1xuXG4gICAgbG9jYXRpb24gPSBuZXdMb2NhdGlvbjtcblxuICAgIGlmIChsb2NhdGlvbi5hY3Rpb24gPT09IF9BY3Rpb25zLlBVU0gpIHtcbiAgICAgIGFsbEtleXMgPSBbXS5jb25jYXQoYWxsS2V5cy5zbGljZSgwLCBjdXJyZW50ICsgMSksIFtsb2NhdGlvbi5rZXldKTtcbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUkVQTEFDRSkge1xuICAgICAgYWxsS2V5c1tjdXJyZW50XSA9IGxvY2F0aW9uLmtleTtcbiAgICB9XG5cbiAgICBjaGFuZ2VMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKGxvY2F0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIGNoYW5nZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgbGlzdGVuZXIobG9jYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2xvY2F0aW9uID0gZ2V0Q3VycmVudExvY2F0aW9uKCk7XG4gICAgICBhbGxLZXlzID0gW19sb2NhdGlvbi5rZXldO1xuICAgICAgdXBkYXRlTG9jYXRpb24oX2xvY2F0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2hhbmdlTGlzdGVuZXJzID0gY2hhbmdlTGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gbGlzdGVuZXI7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgY2FsbGJhY2spIHtcbiAgICBfQXN5bmNVdGlscy5sb29wQXN5bmModHJhbnNpdGlvbkhvb2tzLmxlbmd0aCwgZnVuY3Rpb24gKGluZGV4LCBuZXh0LCBkb25lKSB7XG4gICAgICBfcnVuVHJhbnNpdGlvbkhvb2syWydkZWZhdWx0J10odHJhbnNpdGlvbkhvb2tzW2luZGV4XSwgbG9jYXRpb24sIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgZG9uZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgIGlmIChnZXRVc2VyQ29uZmlybWF0aW9uICYmIHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICBnZXRVc2VyQ29uZmlybWF0aW9uKG1lc3NhZ2UsIGZ1bmN0aW9uIChvaykge1xuICAgICAgICAgIGNhbGxiYWNrKG9rICE9PSBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sobWVzc2FnZSAhPT0gZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIHBlbmRpbmdMb2NhdGlvbiA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uVG8obmV4dExvY2F0aW9uKSB7XG4gICAgaWYgKGxvY2F0aW9uICYmIGxvY2F0aW9uc0FyZUVxdWFsKGxvY2F0aW9uLCBuZXh0TG9jYXRpb24pKSByZXR1cm47IC8vIE5vdGhpbmcgdG8gZG8uXG5cbiAgICBwZW5kaW5nTG9jYXRpb24gPSBuZXh0TG9jYXRpb247XG5cbiAgICBjb25maXJtVHJhbnNpdGlvblRvKG5leHRMb2NhdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAocGVuZGluZ0xvY2F0aW9uICE9PSBuZXh0TG9jYXRpb24pIHJldHVybjsgLy8gVHJhbnNpdGlvbiB3YXMgaW50ZXJydXB0ZWQuXG5cbiAgICAgIGlmIChvaykge1xuICAgICAgICAvLyB0cmVhdCBQVVNIIHRvIGN1cnJlbnQgcGF0aCBsaWtlIFJFUExBQ0UgdG8gYmUgY29uc2lzdGVudCB3aXRoIGJyb3dzZXJzXG4gICAgICAgIGlmIChuZXh0TG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5QVVNIKSB7XG4gICAgICAgICAgdmFyIHByZXZQYXRoID0gY3JlYXRlUGF0aChsb2NhdGlvbik7XG4gICAgICAgICAgdmFyIG5leHRQYXRoID0gY3JlYXRlUGF0aChuZXh0TG9jYXRpb24pO1xuXG4gICAgICAgICAgaWYgKG5leHRQYXRoID09PSBwcmV2UGF0aCkgbmV4dExvY2F0aW9uLmFjdGlvbiA9IF9BY3Rpb25zLlJFUExBQ0U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmluaXNoVHJhbnNpdGlvbihuZXh0TG9jYXRpb24pICE9PSBmYWxzZSkgdXBkYXRlTG9jYXRpb24obmV4dExvY2F0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAobG9jYXRpb24gJiYgbmV4dExvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSB7XG4gICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxLZXlzLmluZGV4T2YobG9jYXRpb24ua2V5KTtcbiAgICAgICAgdmFyIG5leHRJbmRleCA9IGFsbEtleXMuaW5kZXhPZihuZXh0TG9jYXRpb24ua2V5KTtcblxuICAgICAgICBpZiAocHJldkluZGV4ICE9PSAtMSAmJiBuZXh0SW5kZXggIT09IC0xKSBnbyhwcmV2SW5kZXggLSBuZXh0SW5kZXgpOyAvLyBSZXN0b3JlIHRoZSBVUkwuXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoKGxvY2F0aW9uKSB7XG4gICAgdHJhbnNpdGlvblRvKGNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uLCBfQWN0aW9ucy5QVVNILCBjcmVhdGVLZXkoKSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZShsb2NhdGlvbikge1xuICAgIHRyYW5zaXRpb25UbyhjcmVhdGVMb2NhdGlvbihsb2NhdGlvbiwgX0FjdGlvbnMuUkVQTEFDRSwgY3JlYXRlS2V5KCkpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBnbygtMSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgZ28oMSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVLZXkoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVJhbmRvbUtleShrZXlMZW5ndGgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUGF0aChsb2NhdGlvbikge1xuICAgIGlmIChsb2NhdGlvbiA9PSBudWxsIHx8IHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIHJldHVybiBsb2NhdGlvbjtcblxuICAgIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIHZhciBzZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2g7XG4gICAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuXG4gICAgdmFyIHJlc3VsdCA9IHBhdGhuYW1lO1xuXG4gICAgaWYgKHNlYXJjaCkgcmVzdWx0ICs9IHNlYXJjaDtcblxuICAgIGlmIChoYXNoKSByZXN1bHQgKz0gaGFzaDtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVIcmVmKGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVBhdGgobG9jYXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24obG9jYXRpb24sIGFjdGlvbikge1xuICAgIHZhciBrZXkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBjcmVhdGVLZXkoKSA6IGFyZ3VtZW50c1syXTtcblxuICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnb2JqZWN0Jykge1xuICAgICAgLy93YXJuaW5nKFxuICAgICAgLy8gIGZhbHNlLFxuICAgICAgLy8gICdUaGUgc3RhdGUgKDJuZCkgYXJndW1lbnQgdG8gaGlzdG9yeS5jcmVhdGVMb2NhdGlvbiBpcyBkZXByZWNhdGVkOyB1c2UgYSAnICtcbiAgICAgIC8vICAnbG9jYXRpb24gZGVzY3JpcHRvciBpbnN0ZWFkJ1xuICAgICAgLy8pXG5cbiAgICAgIGlmICh0eXBlb2YgbG9jYXRpb24gPT09ICdzdHJpbmcnKSBsb2NhdGlvbiA9IF9wYXJzZVBhdGgyWydkZWZhdWx0J10obG9jYXRpb24pO1xuXG4gICAgICBsb2NhdGlvbiA9IF9leHRlbmRzKHt9LCBsb2NhdGlvbiwgeyBzdGF0ZTogYWN0aW9uIH0pO1xuXG4gICAgICBhY3Rpb24gPSBrZXk7XG4gICAgICBrZXkgPSBhcmd1bWVudHNbM10gfHwgY3JlYXRlS2V5KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jcmVhdGVMb2NhdGlvbjNbJ2RlZmF1bHQnXShsb2NhdGlvbiwgYWN0aW9uLCBrZXkpO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgdXBkYXRlTG9jYXRpb25TdGF0ZShsb2NhdGlvbiwgc3RhdGUpO1xuICAgICAgdXBkYXRlTG9jYXRpb24obG9jYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVMb2NhdGlvblN0YXRlKGdldEN1cnJlbnRMb2NhdGlvbigpLCBzdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlTG9jYXRpb25TdGF0ZShsb2NhdGlvbiwgc3RhdGUpIHtcbiAgICBsb2NhdGlvbi5zdGF0ZSA9IF9leHRlbmRzKHt9LCBsb2NhdGlvbi5zdGF0ZSwgc3RhdGUpO1xuICAgIHNhdmVTdGF0ZShsb2NhdGlvbi5rZXksIGxvY2F0aW9uLnN0YXRlKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gcmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgaWYgKHRyYW5zaXRpb25Ib29rcy5pbmRleE9mKGhvb2spID09PSAtMSkgdHJhbnNpdGlvbkhvb2tzLnB1c2goaG9vayk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgdHJhbnNpdGlvbkhvb2tzID0gdHJhbnNpdGlvbkhvb2tzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0gIT09IGhvb2s7XG4gICAgfSk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHB1c2hTdGF0ZShzdGF0ZSwgcGF0aCkge1xuICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHBhdGggPSBfcGFyc2VQYXRoMlsnZGVmYXVsdCddKHBhdGgpO1xuXG4gICAgcHVzaChfZXh0ZW5kcyh7IHN0YXRlOiBzdGF0ZSB9LCBwYXRoKSk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHJlcGxhY2VTdGF0ZShzdGF0ZSwgcGF0aCkge1xuICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHBhdGggPSBfcGFyc2VQYXRoMlsnZGVmYXVsdCddKHBhdGgpO1xuXG4gICAgcmVwbGFjZShfZXh0ZW5kcyh7IHN0YXRlOiBzdGF0ZSB9LCBwYXRoKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxpc3RlbkJlZm9yZTogbGlzdGVuQmVmb3JlLFxuICAgIGxpc3RlbjogbGlzdGVuLFxuICAgIHRyYW5zaXRpb25UbzogdHJhbnNpdGlvblRvLFxuICAgIHB1c2g6IHB1c2gsXG4gICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICBnbzogZ28sXG4gICAgZ29CYWNrOiBnb0JhY2ssXG4gICAgZ29Gb3J3YXJkOiBnb0ZvcndhcmQsXG4gICAgY3JlYXRlS2V5OiBjcmVhdGVLZXksXG4gICAgY3JlYXRlUGF0aDogY3JlYXRlUGF0aCxcbiAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmLFxuICAgIGNyZWF0ZUxvY2F0aW9uOiBjcmVhdGVMb2NhdGlvbixcblxuICAgIHNldFN0YXRlOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHNldFN0YXRlLCAnc2V0U3RhdGUgaXMgZGVwcmVjYXRlZDsgdXNlIGxvY2F0aW9uLmtleSB0byBzYXZlIHN0YXRlIGluc3RlYWQnKSxcbiAgICByZWdpc3RlclRyYW5zaXRpb25Ib29rOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2ssICdyZWdpc3RlclRyYW5zaXRpb25Ib29rIGlzIGRlcHJlY2F0ZWQ7IHVzZSBsaXN0ZW5CZWZvcmUgaW5zdGVhZCcpLFxuICAgIHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vazogX2RlcHJlY2F0ZTJbJ2RlZmF1bHQnXSh1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2ssICd1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2sgaXMgZGVwcmVjYXRlZDsgdXNlIHRoZSBjYWxsYmFjayByZXR1cm5lZCBmcm9tIGxpc3RlbkJlZm9yZSBpbnN0ZWFkJyksXG4gICAgcHVzaFN0YXRlOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHB1c2hTdGF0ZSwgJ3B1c2hTdGF0ZSBpcyBkZXByZWNhdGVkOyB1c2UgcHVzaCBpbnN0ZWFkJyksXG4gICAgcmVwbGFjZVN0YXRlOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHJlcGxhY2VTdGF0ZSwgJ3JlcGxhY2VTdGF0ZSBpcyBkZXByZWNhdGVkOyB1c2UgcmVwbGFjZSBpbnN0ZWFkJylcbiAgfTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlSGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8vaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZydcbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9wYXJzZVBhdGggPSByZXF1aXJlKCcuL3BhcnNlUGF0aCcpO1xuXG52YXIgX3BhcnNlUGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZVBhdGgpO1xuXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbigpIHtcbiAgdmFyIGxvY2F0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gJy8nIDogYXJndW1lbnRzWzBdO1xuICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gX0FjdGlvbnMuUE9QIDogYXJndW1lbnRzWzFdO1xuICB2YXIga2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1syXTtcblxuICB2YXIgX2ZvdXJ0aEFyZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbM107XG5cbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIGxvY2F0aW9uID0gX3BhcnNlUGF0aDJbJ2RlZmF1bHQnXShsb2NhdGlvbik7XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdvYmplY3QnKSB7XG4gICAgLy93YXJuaW5nKFxuICAgIC8vICBmYWxzZSxcbiAgICAvLyAgJ1RoZSBzdGF0ZSAoMm5kKSBhcmd1bWVudCB0byBjcmVhdGVMb2NhdGlvbiBpcyBkZXByZWNhdGVkOyB1c2UgYSAnICtcbiAgICAvLyAgJ2xvY2F0aW9uIGRlc2NyaXB0b3IgaW5zdGVhZCdcbiAgICAvLylcblxuICAgIGxvY2F0aW9uID0gX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7IHN0YXRlOiBhY3Rpb24gfSk7XG5cbiAgICBhY3Rpb24gPSBrZXkgfHwgX0FjdGlvbnMuUE9QO1xuICAgIGtleSA9IF9mb3VydGhBcmc7XG4gIH1cblxuICB2YXIgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZSB8fCAnLyc7XG4gIHZhciBzZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2ggfHwgJyc7XG4gIHZhciBoYXNoID0gbG9jYXRpb24uaGFzaCB8fCAnJztcbiAgdmFyIHN0YXRlID0gbG9jYXRpb24uc3RhdGUgfHwgbnVsbDtcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICBzZWFyY2g6IHNlYXJjaCxcbiAgICBoYXNoOiBoYXNoLFxuICAgIHN0YXRlOiBzdGF0ZSxcbiAgICBhY3Rpb246IGFjdGlvbixcbiAgICBrZXk6IGtleVxuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVMb2NhdGlvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8vaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZydcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5mdW5jdGlvbiBkZXByZWNhdGUoZm4pIHtcbiAgcmV0dXJuIGZuO1xuICAvL3JldHVybiBmdW5jdGlvbiAoKSB7XG4gIC8vICB3YXJuaW5nKGZhbHNlLCAnW2hpc3RvcnldICcgKyBtZXNzYWdlKVxuICAvLyAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgLy99XG59XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZGVwcmVjYXRlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIGV4dHJhY3RQYXRoKHN0cmluZykge1xuICB2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goL15odHRwcz86XFwvXFwvW15cXC9dKi8pO1xuXG4gIGlmIChtYXRjaCA9PSBudWxsKSByZXR1cm4gc3RyaW5nO1xuXG4gIHJldHVybiBzdHJpbmcuc3Vic3RyaW5nKG1hdGNoWzBdLmxlbmd0aCk7XG59XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXh0cmFjdFBhdGg7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9leHRyYWN0UGF0aCA9IHJlcXVpcmUoJy4vZXh0cmFjdFBhdGgnKTtcblxudmFyIF9leHRyYWN0UGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRyYWN0UGF0aCk7XG5cbmZ1bmN0aW9uIHBhcnNlUGF0aChwYXRoKSB7XG4gIHZhciBwYXRobmFtZSA9IF9leHRyYWN0UGF0aDJbJ2RlZmF1bHQnXShwYXRoKTtcbiAgdmFyIHNlYXJjaCA9ICcnO1xuICB2YXIgaGFzaCA9ICcnO1xuXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShwYXRoID09PSBwYXRobmFtZSwgJ0EgcGF0aCBtdXN0IGJlIHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaCBvbmx5LCBub3QgYSBmdWxseSBxdWFsaWZpZWQgVVJMIGxpa2UgXCIlc1wiJywgcGF0aCkgOiB1bmRlZmluZWQ7XG5cbiAgdmFyIGhhc2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJyMnKTtcbiAgaWYgKGhhc2hJbmRleCAhPT0gLTEpIHtcbiAgICBoYXNoID0gcGF0aG5hbWUuc3Vic3RyaW5nKGhhc2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHJpbmcoMCwgaGFzaEluZGV4KTtcbiAgfVxuXG4gIHZhciBzZWFyY2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJz8nKTtcbiAgaWYgKHNlYXJjaEluZGV4ICE9PSAtMSkge1xuICAgIHNlYXJjaCA9IHBhdGhuYW1lLnN1YnN0cmluZyhzZWFyY2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHJpbmcoMCwgc2VhcmNoSW5kZXgpO1xuICB9XG5cbiAgaWYgKHBhdGhuYW1lID09PSAnJykgcGF0aG5hbWUgPSAnLyc7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZTogcGF0aG5hbWUsXG4gICAgc2VhcmNoOiBzZWFyY2gsXG4gICAgaGFzaDogaGFzaFxuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBwYXJzZVBhdGg7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIHJ1blRyYW5zaXRpb25Ib29rKGhvb2ssIGxvY2F0aW9uLCBjYWxsYmFjaykge1xuICB2YXIgcmVzdWx0ID0gaG9vayhsb2NhdGlvbiwgY2FsbGJhY2spO1xuXG4gIGlmIChob29rLmxlbmd0aCA8IDIpIHtcbiAgICAvLyBBc3N1bWUgdGhlIGhvb2sgcnVucyBzeW5jaHJvbm91c2x5IGFuZCBhdXRvbWF0aWNhbGx5XG4gICAgLy8gY2FsbCB0aGUgY2FsbGJhY2sgd2l0aCB0aGUgcmV0dXJuIHZhbHVlLlxuICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gIH0gZWxzZSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKHJlc3VsdCA9PT0gdW5kZWZpbmVkLCAnWW91IHNob3VsZCBub3QgXCJyZXR1cm5cIiBpbiBhIHRyYW5zaXRpb24gaG9vayB3aXRoIGEgY2FsbGJhY2sgYXJndW1lbnQ7IGNhbGwgdGhlIGNhbGxiYWNrIGluc3RlYWQnKSA6IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBydW5UcmFuc2l0aW9uSG9vaztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8qKlxuICogQ29weXJpZ2h0IDIwMTMtMjAxNSwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBVc2UgaW52YXJpYW50KCkgdG8gYXNzZXJ0IHN0YXRlIHdoaWNoIHlvdXIgcHJvZ3JhbSBhc3N1bWVzIHRvIGJlIHRydWUuXG4gKlxuICogUHJvdmlkZSBzcHJpbnRmLXN0eWxlIGZvcm1hdCAob25seSAlcyBpcyBzdXBwb3J0ZWQpIGFuZCBhcmd1bWVudHNcbiAqIHRvIHByb3ZpZGUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBicm9rZSBhbmQgd2hhdCB5b3Ugd2VyZVxuICogZXhwZWN0aW5nLlxuICpcbiAqIFRoZSBpbnZhcmlhbnQgbWVzc2FnZSB3aWxsIGJlIHN0cmlwcGVkIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgaW52YXJpYW50XG4gKiB3aWxsIHJlbWFpbiB0byBlbnN1cmUgbG9naWMgZG9lcyBub3QgZGlmZmVyIGluIHByb2R1Y3Rpb24uXG4gKi9cblxudmFyIGludmFyaWFudCA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhLCBiLCBjLCBkLCBlLCBmKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudCByZXF1aXJlcyBhbiBlcnJvciBtZXNzYWdlIGFyZ3VtZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKCFjb25kaXRpb24pIHtcbiAgICB2YXIgZXJyb3I7XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgJ01pbmlmaWVkIGV4Y2VwdGlvbiBvY2N1cnJlZDsgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50ICcgK1xuICAgICAgICAnZm9yIHRoZSBmdWxsIGVycm9yIG1lc3NhZ2UgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy4nXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYXJncyA9IFthLCBiLCBjLCBkLCBlLCBmXTtcbiAgICAgIHZhciBhcmdJbmRleCA9IDA7XG4gICAgICBlcnJvciA9IG5ldyBFcnJvcihcbiAgICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJnc1thcmdJbmRleCsrXTsgfSlcbiAgICAgICk7XG4gICAgICBlcnJvci5uYW1lID0gJ0ludmFyaWFudCBWaW9sYXRpb24nO1xuICAgIH1cblxuICAgIGVycm9yLmZyYW1lc1RvUG9wID0gMTsgLy8gd2UgZG9uJ3QgY2FyZSBhYm91dCBpbnZhcmlhbnQncyBvd24gZnJhbWVcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBpbnZhcmlhbnQ7XG4iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0Lmxlbmd0aCA8IDEwIHx8ICgvXltzXFxXXSokLykudGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iXX0=