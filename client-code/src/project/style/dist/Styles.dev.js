"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.containerHomePage = exports.ImgCard = exports.sCard = exports.sliderButton1 = exports.feedbackRating = exports.feedbackText = exports.feedbackImage = exports.feedbackCard = exports.feedbackSlider = exports.item = exports.itemContainer = exports.sliderButton = exports.imageSlider = exports.cardContent1 = exports.notificationCard = exports.backgroundImageCarousel = exports.succsesfully = exports.updateSuccsesfully = exports.centeredInputStyle = exports.divStyle1 = exports.divStyle = exports.border = exports.babyImgStyle = exports.mealImgStyle = exports.cleanTextStyle = exports.mealsTextStyle = exports.footerDivStyle = exports.footerTextStyle = exports.navbarStyle = exports.navStyle = exports.logoStyle = exports.navbarDivStyle = exports.deleteCard = exports.errorStyle = exports.inputStyle = exports.searchDivStyle = exports.searchStyle = exports.searchButtonstyle = exports.displayCardsStyle = exports.centeredCard = exports.centeredCardContainer = exports.editSize = exports.trashSize = exports.cardButton = exports.cardContent = exports.cardContainer = exports.cardSize = exports.marginRight2rem = exports.marginButton4rem = exports.width8rem = exports.displayFlex = exports.purpleColor = exports.orangeColor = exports.greenColor = exports.redColor = exports.blackColor = void 0;

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
var orangeColor = {
  color: 'orange'
};
exports.orangeColor = orangeColor;
var purpleColor = {
  color: 'purple'
};
exports.purpleColor = purpleColor;
var displayFlex = {
  display: 'flex'
};
exports.displayFlex = displayFlex;
var width8rem = {
  width: '8rem'
};
exports.width8rem = width8rem;
var marginButton4rem = {
  marginBottom: '4rem'
};
exports.marginButton4rem = marginButton4rem;
var marginRight2rem = {
  marginRight: '2rem'
}; // assistDetails

exports.marginRight2rem = marginRight2rem;
var cardSize = {
  width: '18rem',
  height: '10rem',
  margin: '1rem',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  transition: '0.3s'
};
exports.cardSize = cardSize;
var cardContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: '7.5rem'
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
  backgroundColor: '#ffffff',
  color: '#dc3545',
  borderRadius: '0.5rem',
  borderColor: '#dc3545',
  marginRight: '0.5rem',
  marginLeft: '0.5rem'
};
exports.trashSize = trashSize;
var editSize = {
  width: '2rem',
  height: '2.5rem',
  backgroundColor: '#ffffff',
  color: '#007bff',
  borderRadius: '0.5rem',
  borderColor: '#007bff'
};
exports.editSize = editSize;
var centeredCardContainer = {
  display: 'flex',
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
  justifyContent: 'flex-end',
  marginRight: '2rem'
}; // getAssistById

exports.displayCardsStyle = displayCardsStyle;
var searchButtonstyle = {
  borderRadius: '4px',
  border: '1px solid #ccc',
  borderColor: 'black',
  height: '2.5rem'
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
}; //deleteAssist

exports.errorStyle = errorStyle;
var deleteCard = {
  width: '25rem',
  borderColor: 'red',
  borderWidth: '0.2rem',
  borderRadius: '1.5rem'
}; // navbar

exports.deleteCard = deleteCard;
var navbarDivStyle = {
  marginTop: '2rem',
  marginLeft: '2rem'
};
exports.navbarDivStyle = navbarDivStyle;
var logoStyle = {
  width: '8rem',
  height: '8rem'
};
exports.logoStyle = logoStyle;
var navStyle = {
  marginRight: '4rem',
  marginLeft: '4rem'
};
exports.navStyle = navStyle;
var navbarStyle = {
  width: '100vw',
  backgroundColor: 'white'
}; // footer

exports.navbarStyle = navbarStyle;
var footerTextStyle = {
  color: 'white'
};
exports.footerTextStyle = footerTextStyle;
var footerDivStyle = {
  width: '100%',
  height: '4rem',
  backgroundColor: '#007bff',
  // כחול כהה
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0.4
}; // about

exports.footerDivStyle = footerDivStyle;
var mealsTextStyle = {
  color: 'green',
  marginTop: '6rem'
};
exports.mealsTextStyle = mealsTextStyle;
var cleanTextStyle = {
  color: '#398EDA',
  marginTop: '2rem'
};
exports.cleanTextStyle = cleanTextStyle;
var mealImgStyle = {
  width: '32rem',
  height: '26rem',
  "float": 'right',
  marginRight: '1rem'
};
exports.mealImgStyle = mealImgStyle;
var babyImgStyle = {
  width: '32rem',
  height: '26rem',
  "float": 'left'
};
exports.babyImgStyle = babyImgStyle;
var border = {
  borderColor: 'black'
};
exports.border = border;
var divStyle = {
  marginTop: '12rem',
  marginLeft: '2.5rem',
  marginRight: '2.5rem'
};
exports.divStyle = divStyle;
var divStyle1 = {
  marginTop: '3rem',
  marginBottom: '6rem'
};
exports.divStyle1 = divStyle1;
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
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  transition: 'background-image 1s ease-in-out',
  zIndex: '-1'
};
exports.backgroundImageCarousel = backgroundImageCarousel;
var notificationCard = {
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  bottom: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0, 0, 0, 0.5)',
  zIndex: '1000'
};
exports.notificationCard = notificationCard;
var cardContent1 = {
  background: 'white',
  padding: '3rem',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  textAlign: 'center'
};
exports.cardContent1 = cardContent1;
var imageSlider = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '20px 0'
};
exports.imageSlider = imageSlider;
var sliderButton = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontSize: '24px',
  color: '#555',
  outline: 'none'
};
exports.sliderButton = sliderButton;
var itemContainer = {
  flex: '1',
  display: 'flex',
  justifyContent: 'center'
};
exports.itemContainer = itemContainer;
var item = {
  backgroundColor: '#f0f0f0',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  maxWidth: '300px',
  width: '100%',
  transition: 'transform 0.3s ease'
}; // FeedbackSlider styles

exports.item = item;
var feedbackSlider = {
  backgroundColor: '#f8f9fa',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
};
exports.feedbackSlider = feedbackSlider;
var feedbackCard = {
  backgroundColor: '#fff',
  padding: '2rem',
  border: 'none',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
};
exports.feedbackCard = feedbackCard;
var feedbackImage = {
  width: '100px',
  height: '100px',
  marginBottom: '1rem'
};
exports.feedbackImage = feedbackImage;
var feedbackText = {
  fontSize: '1.2rem',
  marginBottom: '1rem'
};
exports.feedbackText = feedbackText;
var feedbackRating = {
  fontSize: '1.5rem',
  color: '#ffc107'
};
exports.feedbackRating = feedbackRating;
var sliderButton1 = {
  backgroundColor: '#007bff',
  border: 'none',
  color: '#fff',
  fontSize: '1.5rem',
  padding: '0.5rem 1rem',
  borderRadius: '50%',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
}; //shortAbout

exports.sliderButton1 = sliderButton1;
var sCard = {
  width: '100%',
  border: 'none',
  textAlign: 'center'
};
exports.sCard = sCard;
var ImgCard = {
  height: '200px',
  objectFit: 'cover'
};
exports.ImgCard = ImgCard;
var containerHomePage = {
  padding: '4rem',
  backgroundColor: 'white'
};
exports.containerHomePage = containerHomePage;