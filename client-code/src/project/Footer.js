

export default function Footer() {
    const c = {'color':'black'} 
    const s = {'margin-top': '20rem', 'background-color':'#ff25','position':'fixed'}
  return (
    <>
   <footer class='footer-app'>
    <footer class='footer'>
        <div style={s}>
            <h6 style={c}>הסתדרתם דרכינו? נשמח לשמוע</h6>
            <h6 style={c}>
                הרישום לאתר הוא אוטומטי, אין לנו מידע על הנרשמים, באחריותיכם בלבד לבדוק את ההתאמה
            </h6>
        </div>
    </footer>
   </footer>
    </>
  );
}