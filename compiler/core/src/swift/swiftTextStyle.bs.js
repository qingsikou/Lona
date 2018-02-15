// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var List                           = require("bs-platform/lib/js/list.js");
var Block                          = require("bs-platform/lib/js/block.js");
var Curry                          = require("bs-platform/lib/js/curry.js");
var Pervasives                     = require("bs-platform/lib/js/pervasives.js");
var Color$LonaCompilerCore         = require("../core/color.bs.js");
var TextStyle$LonaCompilerCore     = require("../core/textStyle.bs.js");
var SwiftRender$LonaCompilerCore   = require("./swiftRender.bs.js");
var SwiftDocument$LonaCompilerCore = require("./swiftDocument.bs.js");

function render(options, colors, textStyles) {
  var unwrapOptional = function (f, a) {
    if (a) {
      return /* :: */[
              Curry._1(f, a[0]),
              /* [] */0
            ];
    } else {
      return /* [] */0;
    }
  };
  var convertFontWeight = function (param) {
    switch (param) {
      case "100" : 
          return "ultraLight";
      case "200" : 
          return "thin";
      case "300" : 
          return "light";
      case "400" : 
          return "regular";
      case "500" : 
          return "medium";
      case "600" : 
          return "semibold";
      case "700" : 
          return "bold";
      case "800" : 
          return "heavy";
      case "900" : 
          return "black";
      default:
        return "regular";
    }
  };
  var argumentsDoc = function (textStyle) {
    var lookup = function (f) {
      return TextStyle$LonaCompilerCore.lookup(textStyles[/* styles */0], textStyle, f);
    };
    return List.concat(/* :: */[
                unwrapOptional((function (value) {
                        return /* FunctionCallArgument */Block.__(15, [{
                                    name: /* Some */[/* SwiftIdentifier */Block.__(6, ["family"])],
                                    value: /* LiteralExpression */Block.__(0, [/* String */Block.__(3, [value])])
                                  }]);
                      }), lookup((function (style) {
                            return style[/* fontFamily */3];
                          }))),
                /* :: */[
                  unwrapOptional((function (value) {
                          return /* FunctionCallArgument */Block.__(15, [{
                                      name: /* Some */[/* SwiftIdentifier */Block.__(6, ["name"])],
                                      value: /* LiteralExpression */Block.__(0, [/* String */Block.__(3, [value])])
                                    }]);
                        }), lookup((function (style) {
                              return style[/* fontName */2];
                            }))),
                  /* :: */[
                    unwrapOptional((function (value) {
                            return /* FunctionCallArgument */Block.__(15, [{
                                        name: /* Some */[/* SwiftIdentifier */Block.__(6, ["weight"])],
                                        value: /* MemberExpression */Block.__(1, [/* :: */[
                                              /* SwiftIdentifier */Block.__(6, [SwiftDocument$LonaCompilerCore.fontTypeName(options[/* framework */0])]),
                                              /* :: */[
                                                /* SwiftIdentifier */Block.__(6, ["Weight"]),
                                                /* :: */[
                                                  /* SwiftIdentifier */Block.__(6, [convertFontWeight(value)]),
                                                  /* [] */0
                                                ]
                                              ]
                                            ]])
                                      }]);
                          }), lookup((function (style) {
                                return style[/* fontWeight */4];
                              }))),
                    /* :: */[
                      unwrapOptional((function (value) {
                              return /* FunctionCallArgument */Block.__(15, [{
                                          name: /* Some */[/* SwiftIdentifier */Block.__(6, ["size"])],
                                          value: /* LiteralExpression */Block.__(0, [/* FloatingPoint */Block.__(2, [value])])
                                        }]);
                            }), lookup((function (style) {
                                  return style[/* fontSize */5];
                                }))),
                      /* :: */[
                        unwrapOptional((function (value) {
                                return /* FunctionCallArgument */Block.__(15, [{
                                            name: /* Some */[/* SwiftIdentifier */Block.__(6, ["lineHeight"])],
                                            value: /* LiteralExpression */Block.__(0, [/* FloatingPoint */Block.__(2, [value])])
                                          }]);
                              }), lookup((function (style) {
                                    return style[/* lineHeight */6];
                                  }))),
                        /* :: */[
                          unwrapOptional((function (value) {
                                  return /* FunctionCallArgument */Block.__(15, [{
                                              name: /* Some */[/* SwiftIdentifier */Block.__(6, ["kerning"])],
                                              value: /* LiteralExpression */Block.__(0, [/* FloatingPoint */Block.__(2, [value])])
                                            }]);
                                }), lookup((function (style) {
                                      return style[/* letterSpacing */7];
                                    }))),
                          /* :: */[
                            unwrapOptional((function (value) {
                                    var match = Color$LonaCompilerCore.find(colors, value);
                                    var value$1 = match ? /* MemberExpression */Block.__(1, [/* :: */[
                                            /* SwiftIdentifier */Block.__(6, ["Colors"]),
                                            /* :: */[
                                              /* SwiftIdentifier */Block.__(6, [match[0][/* id */0]]),
                                              /* [] */0
                                            ]
                                          ]]) : /* LiteralExpression */Block.__(0, [/* Color */Block.__(4, [value])]);
                                    return /* FunctionCallArgument */Block.__(15, [{
                                                name: /* Some */[/* SwiftIdentifier */Block.__(6, ["color"])],
                                                value: value$1
                                              }]);
                                  }), lookup((function (style) {
                                        return style[/* color */8];
                                      }))),
                            /* [] */0
                          ]
                        ]
                      ]
                    ]
                  ]
                ]
              ]);
  };
  var textStyleConstantDoc = function (textStyle) {
    return /* ConstantDeclaration */Block.__(7, [{
                modifiers: /* :: */[
                  /* AccessLevelModifier */Block.__(0, [/* PublicModifier */3]),
                  /* :: */[
                    /* StaticModifier */11,
                    /* [] */0
                  ]
                ],
                pattern: /* IdentifierPattern */Block.__(0, [{
                      identifier: /* SwiftIdentifier */Block.__(6, [textStyle[/* id */0]]),
                      annotation: /* None */0
                    }]),
                init: /* Some */[/* FunctionCallExpression */Block.__(16, [{
                        name: /* SwiftIdentifier */Block.__(6, ["AttributedFont"]),
                        arguments: argumentsDoc(textStyle)
                      }])]
              }]);
  };
  var defaultStyleDoc = function (textStyle) {
    var match = TextStyle$LonaCompilerCore.find(textStyles[/* styles */0], textStyle[/* id */0]);
    if (match) {
      return /* [] */0;
    } else {
      return /* :: */[
              textStyleConstantDoc(textStyle),
              /* [] */0
            ];
    }
  };
  return SwiftRender$LonaCompilerCore.toString(/* TopLevelDeclaration */Block.__(22, [{
                  statements: /* :: */[
                    SwiftDocument$LonaCompilerCore.importFramework(options[/* framework */0]),
                    /* :: */[
                      /* Empty */0,
                      /* :: */[
                        /* ClassDeclaration */Block.__(4, [{
                              name: "TextStyles",
                              inherits: /* [] */0,
                              modifier: /* None */0,
                              isFinal: /* false */0,
                              body: Pervasives.$at(List.map(textStyleConstantDoc, textStyles[/* styles */0]), defaultStyleDoc(textStyles[/* defaultStyle */1]))
                            }]),
                        /* :: */[
                          /* Empty */0,
                          /* [] */0
                        ]
                      ]
                    ]
                  ]
                }]));
}

exports.render = render;
/* SwiftRender-LonaCompilerCore Not a pure module */
