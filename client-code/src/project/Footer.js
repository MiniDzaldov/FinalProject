export default function Footer() {
    const c = {'color':'black'} 
    const s = {'width':'100%', 'backgroundColor':'#ff25'}
  return (
    <>
    <footer class="fixed-bottom">
        <div style={s}>
            <h6 style={c}>הסתדרתם דרכינו? נשמח לשמוע</h6>
            <h6 style={c}>
                הרישום לאתר הוא אוטומטי, אין לנו מידע על הנרשמים, באחריותיכם בלבד לבדוק את ההתאמה
            </h6>
        </div>
    </footer>
    </>
  );
}