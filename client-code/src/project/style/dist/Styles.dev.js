"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.backgroundImageCarousel = exports.succsesfully = exports.updateSuccsesfully = exports.centeredInputStyle = exports.divStyle = exports.border = exports.babyImgStyle = exports.mealImgStyle = exports.cleanTextStyle = exports.mealsTextStyle = exports.footerDivStyle = exports.footerTextStyle = exports.navStyle = exports.logoStyle = exports.navbarDivStyle = exports.errorStyle = exports.inputStyle = exports.searchDivStyle = exports.searchStyle = exports.searchButtonstyle = exports.displayCardsStyle = exports.centeredCard = exports.centeredCardContainer = exports.trashSize = exports.cardButton = exports.cardContent = exports.cardContainer = exports.cardSize = exports.displayFlex = exports.greenColor = exports.redColor = exports.blackColor = void 0;

var _updateSuccsesfully, _succsesfully;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var blackColor = {
  color: 'black'
};
exports.blackColor = blackColor;
var redColor = {
  color: 'red'
};
exports.redColor = redColor;
var greenColor = {
  color: 'green'
};
exports.greenColor = greenColor;
var displayFlex = {
  display: 'flex'
}; //assistDetails

exports.displayFlex = displayFlex;
var cardSize = {
  width: "18rem",
  height: "10rem",
  margin: '1rem',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  transition: '0.3s'
};
exports.cardSize = cardSize;
var cardContainer = {
  display: 'flex',
  flexWrap: 'wrap'
};
exports.cardContainer = cardContainer;
var cardContent = {
  marginBottom: '2.3rem',
  maxWidth: '18rem',
  minWidth: '14rem',
  width: '100%',
  transition: 'all 0.3s ease',
  marginLeft: '2.3rem',
  marginRight: '2.3rem'
};
exports.cardContent = cardContent;
var cardButton = {
  width: '100%'
};
exports.cardButton = cardButton;
var trashSize = {
  width: '2rem',
  height: '2.5rem',
  borderRadius: '0.5rem',
  backgroundColor: 'red'
};
exports.trashSize = trashSize;
var centeredCardContainer = {
  Fdisplay: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80vh'
};
exports.centeredCardContainer = centeredCardContainer;
var centeredCard = {
  maxWidth: '30rem',
  width: '100%',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  transition: '0.3s',
  margin: '1rem'
};
exports.centeredCard = centeredCard;
var displayCardsStyle = {
  display: 'flex',
  justifyContent: 'flex-end'
}; //getAssistById

exports.displayCardsStyle = displayCardsStyle;
var searchButtonstyle = {
  borderRadius: '4px',
  border: '1px solid #ccc'
};
exports.searchButtonstyle = searchButtonstyle;
var searchStyle = {
  backgroundColor: '#f9f9f9',
  color: '#333',
  border: 'none',
  padding: '0.5rem',
  borderRadius: '4px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center'
};
exports.searchStyle = searchStyle;
var searchDivStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginRight: '9rem'
};
exports.searchDivStyle = searchDivStyle;
var inputStyle = {
  padding: '0.5rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  marginRight: '0.5rem',
  fontSize: '16px',
  backgroundColor: '#f9f9f9',
  color: '#333'
};
exports.inputStyle = inputStyle;
var errorStyle = {
  color: 'red',
  marginRight: '12rem',
  fontSize: '0.8rem'
}; //navbar

exports.errorStyle = errorStyle;
var navbarDivStyle = {
  'marginTop': '2rem',
  'marginLeft': '2rem'
};
exports.navbarDivStyle = navbarDivStyle;
var logoStyle = {
  'width': '8rem',
  'height': '8rem'
};
exports.logoStyle = logoStyle;
var navStyle = {
  'marginRight': '4rem',
  'marginLeft': '4rem'
}; //footer

exports.navStyle = navStyle;
var footerTextStyle = {
  color: 'black'
};
exports.footerTextStyle = footerTextStyle;
var footerDivStyle = {
  width: '100%',
  backgroundColor: '#ff25'
}; //about

exports.footerDivStyle = footerDivStyle;
var mealsTextStyle = {
  'color': 'green',
  'margin-top': '3rem'
};
exports.mealsTextStyle = mealsTextStyle;
var cleanTextStyle = {
  'color': '#398EDA',
  'margin-top': '2rem'
};
exports.cleanTextStyle = cleanTextStyle;
var mealImgStyle = {
  'width': '32rem',
  'height': '26rem',
  'float': 'right',
  marginRight: '0.5rem'
};
exports.mealImgStyle = mealImgStyle;
var babyImgStyle = {
  'width': '32rem',
  'height': '26rem',
  'float': 'left'
};
exports.babyImgStyle = babyImgStyle;
var border = {
  'border-color': 'black'
};
exports.border = border;
var divStyle = {
  'margin-top': '8rem'
};
exports.divStyle = divStyle;
var centeredInputStyle = {
  textAlign: 'center',
  placeholder: {
    textAlign: 'center',
    color: 'gray'
  }
};
exports.centeredInputStyle = centeredInputStyle;
var updateSuccsesfully = (_updateSuccsesfully = {
  marginTop: '12rem',
  color: 'black'
}, _defineProperty(_updateSuccsesfully, "color", 'green'), _defineProperty(_updateSuccsesfully, "fontWeight", 'bold'), _updateSuccsesfully);
exports.updateSuccsesfully = updateSuccsesfully;
var succsesfully = (_succsesfully = {
  marginTop: '12rem',
  color: 'black'
}, _defineProperty(_succsesfully, "color", 'green'), _defineProperty(_succsesfully, "fontWeight", 'bold'), _succsesfully);
exports.succsesfully = succsesfully;
var backgroundImageCarousel = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: ' 100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  transition: 'background-image 1s ease-in-out',
  zIndex: ' -1'
};
exports.backgroundImageCarousel = backgroundImageCarousel;