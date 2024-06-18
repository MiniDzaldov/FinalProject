import {footerTextStyle, footerDivStyle} from './style/Styles'

export default function Footer() {
    
  return (
    <>
    <footer class="fixed-bottom">
        <div style={footerDivStyle}>
            <h6 style={footerTextStyle}>הסתדרתם דרכינו? נשמח לשמוע</h6>
            <h6 style={footerTextStyle}>
                הרישום לאתר הוא אוטומטי, אין לנו מידע על הנרשמים, באחריותיכם בלבד לבדוק את ההתאמה
            </h6>
        </div>
    </footer>
    </>
  );
}