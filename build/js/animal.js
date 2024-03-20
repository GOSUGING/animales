"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Serpiente = exports.Oso = exports.Lobo = exports.Leon = exports.Animal = exports.Aguila = void 0;
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Animal = exports.Animal = /*#__PURE__*/function () {
  function Animal(nombre, edad, img, comentarios, sonido) {
    _classCallCheck(this, Animal);
    this.nombre = nombre;
    this.edad = edad;
    this.img = img;
    this.comentarios = comentarios;
    this.sonido = sonido;
  }
  return _createClass(Animal, [{
    key: "Nombre",
    get: function get() {
      return this.nombre;
    }
  }, {
    key: "Edad",
    get: function get() {
      return this.edad;
    }
  }, {
    key: "Img",
    get: function get() {
      return this.img;
    }
  }, {
    key: "Comentarios",
    set: function set(comentarios) {
      this.comentarios = comentarios;
    }
  }, {
    key: "Sonido",
    get: function get() {
      return this.sonido;
    }
  }]);
}();
var Leon = exports.Leon = /*#__PURE__*/function (_Animal) {
  function Leon(nombre, edad, img, comentarios) {
    _classCallCheck(this, Leon);
    return _callSuper(this, Leon, [nombre, edad, img, comentarios, "Rugir"]);
  }
  _inherits(Leon, _Animal);
  return _createClass(Leon, [{
    key: "Rugir",
    value: function Rugir() {
      console.log(this.nombre + " ruge!");
    }
  }]);
}(Animal);
var Aguila = exports.Aguila = /*#__PURE__*/function (_Animal2) {
  function Aguila(nombre, edad, img, comentarios) {
    _classCallCheck(this, Aguila);
    return _callSuper(this, Aguila, [nombre, edad, img, comentarios, "Chillar"]);
  }
  _inherits(Aguila, _Animal2);
  return _createClass(Aguila, [{
    key: "Chillar",
    value: function Chillar() {
      console.log(this.nombre + " chilla!");
    }
  }]);
}(Animal);
var Lobo = exports.Lobo = /*#__PURE__*/function (_Animal3) {
  function Lobo(nombre, edad, img, comentarios) {
    _classCallCheck(this, Lobo);
    return _callSuper(this, Lobo, [nombre, edad, img, comentarios, "Aullar"]);
  }
  _inherits(Lobo, _Animal3);
  return _createClass(Lobo, [{
    key: "Aullar",
    value: function Aullar() {
      console.log(this.nombre + " aúlla!");
    }
  }]);
}(Animal);
var Serpiente = exports.Serpiente = /*#__PURE__*/function (_Animal4) {
  function Serpiente(nombre, edad, img, comentarios) {
    _classCallCheck(this, Serpiente);
    return _callSuper(this, Serpiente, [nombre, edad, img, comentarios, "Sisear"]);
  }
  _inherits(Serpiente, _Animal4);
  return _createClass(Serpiente, [{
    key: "Sisear",
    value: function Sisear() {
      console.log(this.nombre + " sisea!");
    }
  }]);
}(Animal);
var Oso = exports.Oso = /*#__PURE__*/function (_Animal5) {
  function Oso(nombre, edad, img, comentarios) {
    _classCallCheck(this, Oso);
    return _callSuper(this, Oso, [nombre, edad, img, comentarios, "Gruñido"]);
  }
  _inherits(Oso, _Animal5);
  return _createClass(Oso, [{
    key: "Sisear",
    value: function Sisear() {
      console.log(this.nombre + " gruñe!");
    }
  }]);
}(Animal);