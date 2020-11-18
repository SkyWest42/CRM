//content part counters
var currChapter;
var currPage;
var currSection;

//array of chapter titles
var arrChapterName = ["א'- רקע על המערכת", "ב'- כניסה למערכת", "ג'- ניווט בסיסי בSAP", "ד'- טרנזקציות"];

//matrix containing all content
//an array for each chapter
//which contains an array for each page
//ehich contains a json for each section
//these jsons contain the section content as well as information on the type and position of the required interaction in the practice screen
var matContent = [
    [
        [
            {
                "section": "<p> לפני שנדבר על מערכת ה-SAP, נבין ראשית מהי מערכת מידע.</p> <p><b>מערכת מידע</b> היא תוכנה המאפשרת לנהל מידע באופן ממוחשב בעזרת השימוש במאגרי מידע שונים. המערכת מאפשרת לנו <b> לאחסן, לעבד, לנתח, לנהל ולשלוף</b> נתונים באופן מלא תוך ביצוע פעולות על המידע לפי הצורך שלנו.</p> <p class='align-left'> <b>ERP- Enterprise Resource Planning</b> </p> <p> מערכות ERP הן סוג של מערכות מידע הכוללות את כל היישומים הדרושים לתכנון, ניהול ובקרה של כלל פעילויות ומשאבי הארגון. </p> <hr> <p class='align-left'> <b>SAP- Systems, Applications and Products</b> <p/> <p> ה-SAP הוא חבילת ה-ERP המובילה בישראל ובעולם. המערכת כוללת מעל 10 מיליון משתמשים המתפרשים על כ-120 מדינות. חלק מלקוחות הSAP בישראל, ביניהן צבא ההגנה לישראל: </p><img class='full-img' src='media/brands.png'/>",
                "instruction": ""
            }
        ],
        [
            {
                "section": "<p>רוב תוכנות הERP מחולקות ל\"מודולים\". מודול הוא תת–מערכת בתוכנה המיישם פונקציונליות מסוימת, למשל: ניהול מלאי, ניהול קשרי לקוחות, משא\"ן, מערכות תומכות החלטה ועוד.</p > <p>אצלנו במיטב משתמשים בשלושה מודלים עיקריים שקיימים בSAP: </p> <p class='align-left'><b>⋆ ECC – <u>E</u>RP <u>C</u>entral <u>C</u>omponent <br> ⋆ BW – <u>B</u>usiness <u>W</u>arehouse<br> ⋆ CRM – <u>C</u>ostumer <u>R</u>elation <u>M</u>anagement</b></p> <p><b>ה-ECC הוא הרכיב המרכזי של הSAP, והמערכת אליה נתייחס כשנדון בשימוש בSAP.</b></p>  <p>BW היא מערכת להפקת דוחות גדולים. כל לילה נתונים עוברים מה-ECC ל-BW, זאת אומרת שהנתונים נשארים מעודכנים לסוף היום הקודם.</p> <p>לאחרונה מערכת הCRM עברה מלהיות מערכת צבאית בעלת קשר ישיר לERP כולו, למערכת אזרחית עם ממשק שמעביר את הנתונים באופן מרוכז מספר פעמים ביום.</p>",
                "instruction": ""
            }
        ]

    ],
    [
        [
            {
                "section": "<p>כדי להיכנס למערכת, נחפש את התוכנה sap logon, דרכה אפשר להתחבר למערכת. במידה והתוכנה לא מותקנת יש לפנות למתקן מחשב. </p>",
                "instruction": "פתח את התוכנה במסך התרגול",
                "interactionType": "click",
                "width": "12%",
                "height": "16%",
                "right": "9%",
                "top": "8%",
                "isChangeScreen": "true"
            },
            {
                "section": "<p>כפי שאמרנו בחלק הקודם, המערכת מורכבת משלושה מודלים עיקריים, אותם ניתן לראות בחלון הכניסה (לאחר לחיצה כפולה על החלון).</p><p>עלינו למצוא בתיקיות בצד ימין חיבור לERP &nbsp;בסביבת הProd.</p><p>החיבור עשוי להימצא ישירות בתיקיה בשם \"<strong>חיבורים</strong>\", או תחת תיקיה בשם \"<strong>ECC</strong>\" (המייצגת את המודול בו אנחנו רוצים להשתמש) ושם תחת תיקייה בשם \"Prod\" (שמייצגת את הסביבה הרלוונטית).</p > <p>ישנם שני סוגים של סביבות, הסביבה החיה וסביבות הבדיקות - סביבת הProd (קיצור של Production- ייצור) היא הסביבה החיה בה משתמשים אנשי יחידת מיטב.</p>",
                "instruction": "פתח את התיקייה הנכונה במסך התרגול",
                "interactionType": "click",
                "width": "10%",
                "height": "3.3%",
                "right": "7%",
                "top": "19.97%",
                "isChangeScreen": "true"
            },
            {
                "section": "",
                "instruction": "פתח את התיקייה הנכונה במסך התרגול",
                "interactionType": "click",
                "width": "10%",
                "height": "3.3%",
                "right": "8.8%",
                "top": "32.76%",
                "isChangeScreen": "true"
            },
            {
                "section": "<p>במידה ונקבל כמה אפשרויות לחיבורים לERP בסביבת הייצור, נבחר באחד שנקרא \"Single Sign On\", המייצג התחברות ללא שם משתמש וסיסמה. לצד שם החיבור צריך להופיע אייקון של מפתח <img src='media/key.png' class='text-img' />.</p>",
                "instruction": "התחבר לSAP במסך התרגול",
                "interactionType": "click",
                "width": "23%",
                "height": "3.3%",
                "right": "44%",
                "top": "14.8%",
                "isChangeScreen": "true"
            },
            {
                "section": "<p>לאחר הכניסה הראשונה המערכת תשאל אם ברצוננו לשנות סיסמה, יש ללחוץ על הלחצן של הפח.</p>",
                "instruction": "לחץ על הפח במסך התרגול",
                "interactionType": "click",
                "width": "2.8%",
                "height": "3.8%",
                "right": "79%",
                "top": "44.3%",
                "isChangeScreen": "true"
            }
            ,
            {
                "section": "",
                "instruction": ""
            }
        ]
    ],
    [
        [
            {
                "section": "<p>בעת כניסה לSAP נגיע למסך הראשי, בראשו סרגל כלים.</p><p>כפתורים שימושיים בסרגל הם:</p><p><img class='button-image text-img' src='media/greenBtn.png'/> – חזרה למסך הקודם F3</p><p><img class='button-image text-img' src='media/redBtn.png'/> – חזרה למסך הבית</p><p><img class='button-image text-img' src='media/blueBtn.png'/> – חלון חדש</p><p>הכפתורים יהיו אפורים ולא מאופשרים כאשר אינם רלוונטיים.</p><hr><p>בשורת החיפוש ניתן לחפש טרנזקציות (פעולות ומסכים שונים) בעזרת הקוד הטכני שלהן (לדוגמה: zapro, zofficer, pb20, pb30). לחיצה על החץ שבימין סרגל החיפוש תציג לנו את היסטוריית הטרנזקציות בהן השתמשנו.</p>",
                "instruction": "לחץ והקלד (ערך אקראי) לתוך שורת החיפוש במסך התרגול",
                "interactionType": "type",
                "correctInput": "any",
                "width": "10%",
                "height": "2.2%",
                "right": "6%",
                "top": "4.05%",
                "isChangeScreen": "false"
            },
            {
                "section": "<p>לשימוש נוח בSAP, תוכלו להוסיף טרנזקציות למסך המועדפים שלכם, שנמצא תחת הסרגל.</p><p>כדי לעשות זאת, יש ללחוץ על כפתור \"מועדפים\", לבחור באופציה של \"הוספת טרנזקציה\" ולאחר מכן להזין את השם הטכני של הטרנזקציה.</p>",
                "instruction": "הוסף טרנזקציה למועדפים במסך התרגול",
                "interactionType": "click",
                "width": "5%",
                "height": "2.2%",
                "right": "11.1%",
                "top": "1.2%",
                "isChangeScreen": "true"
            },
            {
                "section": "",
                "instruction": "הוסף טרנזקציה למועדפים במסך התרגול",
                "interactionType": "click",
                "width": "12%",
                "height": "2.3%",
                "right": "11.5%",
                "top": "14.5%",
                "isChangeScreen": "true"
            },
            {
                "section": "",
                "instruction": "לחץ והקלד את קוד הטרנזקציה \"pb30\" במסך התרגול",
                "interactionType": "type",
                "correctInput": "pb30",
                "width": "11%",
                "height": "2.2%",
                "right": "15.5%",
                "top": "26.4%",
                "isChangeScreen": "true"
            },
            {
                "section": "",
                "instruction": "הוסף טרנזקציה למועדפים במסך התרגול",
                "interactionType": "click",
                "width": "2%",
                "height": "2%",
                "right": "28.8%",
                "top": "32%",
                "isChangeScreen": "true"
            },
            {
                "section": "",
                "instruction": ""
            }
        ],
        [
            {
                "section": "<p>במידה ויש פער בהגדרות, ניתן לערוך אותן במסך האפשרויות. כדי להגיע אליו יש ללחוץ על כפתור המסך הצבעוני ואז לבחור ב\"אפשרויות\".</p>",
                "instruction": "פתח את תפריט האפשרויות במסך התרגול",
                "interactionType": "click",
                "width": "2%",
                "height": "2.4%",
                "right": "46%",
                "top": "4%",
                "isChangeScreen": "true"
            },
            {
                "section": "",
                "instruction": "פתח את תפריט האפשרויות במסך התרגול",
                "interactionType": "click",
                "width": "12%",
                "height": "2.3%",
                "right": "48%",
                "top": "6.8%",
                "isChangeScreen": "true"
            },
            {
                "section": "",
                "instruction": "סגור את תפריט האפשרויות במסך התרגול",
                "interactionType": "click",
                "width": "7%",
                "height": "2.6%",
                "right": "26%",
                "top": "73.7%",
                "isChangeScreen": "true"
            },
            {
                "section": "<p>במידה ואנחנו נמצאים במסך מסוים ונרצה לעבור למסך אחר, נצטרך להוסיף תחילית מסוימת לשם הטרנזקציה כאשר נזין אותו במסך החיפוש.</p><p><b>⋆</b> התחילית <b>n/</b> תיצור חלון חדש ותדרוס את החלון הקיים.</p><p> <b>⋆</b> התחילית <b>o/</b> תפתח חלון חדש בנוסף לחלון הקיים.</p><p>  (שימו לב! <b> ניתן לפתוח עד 4 חלונות במקביל </b> ויש להימנע מהרצת הרבה תהליכים כבדים במספר מסכים שונים).</p>",
                "instruction": "במסך התרגול, השתמש בתיבת החיפוש על מנת לפתוח חלון חדש של הטרנזקציה pb30 <u>בנוסף</u> לחלון הקיים (השתמש בתחילית המתאימה)",
                "interactionType": "type",
                "correctInput": "/opb30",
                "width": "10%",
                "height": "2.2%",
                "right": "6%",
                "top": "4.05%",
                "isChangeScreen": "true"

            },
            {
                "section": "",
                "instruction": "במסך התרגול, השתמש בתיבת החיפוש על מנת לפתוח חלון של הטרנזקציה zapro <u>במקום</u> החלון הקיים (השתמש בתחילית המתאימה) ",
                "interactionType": "type",
                "correctInput": "/nzapro",
                "width": "9%",
                "height": "2.2%",
                "right": "10%",
                "top": "8%",
                "isChangeScreen": "true"

            },
            {
                "section": "",
                "instruction": "סגור את חלון הzapro",
                "interactionType": "click",
                "correctInput": "",
                "width": "1.55%",
                "height": "2.15%",
                "right": "93.25%",
                "top": "4.1%",
                "isChangeScreen": "true"

            },
            {
                "section": "<p>רשימת קיצורי מקלדת שימושיים:</p> <table> <tr> <th>מקש</th> <th>פירוט</th> </tr> <tr> <td>F1</td> <td>פירוט טכני</td> </tr> <tr> <td>F2</td> <td>צפייה ברשומה מסומנת</td> </tr> <tr> <td>F3</td> <td>חזור אחורה</td> </tr> <tr> <td>F4</td> <td>אופציות להזנה (Search Help)</td> </tr> <tr> <td>F5</td> <td>יצירה</td> </tr> <tr> <td>F6</td> <td>עריכה</td> </tr> <tr> <td>F7</td> <td>צפייה ברשומה עדכנית</td> </tr> <tr> <td>F8</td> <td>ביצוע</td> </tr> <tr> <td>SHIFT+F8</td> <td>סקירה (צפייה בכלל הרשומות)</td> </tr> </table> <a id='download-btn' class='download-btn info-btn' download='keyboardShortcuts.png' href='/media/keyboardShortcuts.png' title='keyboardShortcuts'> שמור טבלה <img src='media/download.png' /> </a>",
                "instruction": "",

            }
        ]
    ],
    [
        [
            {
                "section": " <p> בחלק זה נסביר על שלוש טרנזקציות עיקריות: <br> <b> ⋆ PB20 <br> ⋆ PB30 <br> ⋆ Zapro </b> </p> <hr> <p> כפי שציינו בחלק הקודם, יש כמה דרכים לגשת לטרנזקציות השונות. במידה ונוסיף אותן למועדפים שמותיהן יופיעו כך: <b> <br> ⋆ PB20 - צפייה בנתוני מועמד <br> ⋆ PB30 - אחזקת נתוני מועמד <br> ⋆ Zapro - תדפיס מועמד </b> <hr> <p> ייתכן מצב שבו אנו לא מורשים לגשת לטרנזקציות מסוימות, במקרה הזה נקבל את השגיאה הבאה: <img src='media/noPermission.png' class='full-img' /> במקרה כזה ייתכנו שני מצבים: <br> </p> <p class='middle bullet-point'> • ההרשאות הנדרשות לתפקידנו לא כוללות את הטרנזקציה הספציפית. <br> או <br> • ישנה תקלה במשתמש, במקרה כזה ניתן לפנות לתיבת המייל \"הרשאות מיטב\" ולפרט על התקלה. </p> <p> ההרשאות של כל משתמש מותאמות לתפקיד שלו, ומסופקות לו על ידי מדור מע\"מ. </p> <hr> <p> שגיאה נוספת שתיתכן ספציפית במסך ה-Zapro היא שהמסך עולה אך כלל הקוביות המכילות מידע ריקות. במקרה כזה יש להיכנס לטרנזקציה Zaproc ולוודא שהנתונים נראים כך: <img src='media/data.png' class='full-img' />אחר כך ללחוץ לשמור (Ctrl + S) ולחזור למסך הראשי. אם עדיין נתקלים באותה התקלה יש לפנות למדור מע\"מ. </p>",
                "instruction": "",
            }
        ],
        [
            {
                "section": " <p> במסך הזאפרו (וכך גם במסכי ה-PB) נתקל באופציה לחיפוש מועמד. </p> <p> במידה ונרצה לחפש לפי <b>מספר אישי</b>, נצטרך להזין אותו בשדה.</p> <p> אם נרצה לחפש לפי <b>תעודת זהות</b>, נוסיף את הסימן \"=\" לפני תחילת המספר. </p>",
                "instruction": "לפניך מסך הטרנזקציה zapro. חפש מועמד על פי המספר האישי \"567890\"",
                "interactionType": "type",
                "correctInput": "567890",
                "width": "11.3%",
                "height": "2.15%",
                "right": "20%",
                "top": "14.5%",
                "isChangeScreen": "true"
            },
            {
                "section": "",
                "instruction": "חפש מועמד על פי תעודת הזהות \"1234567\"",
                "interactionType": "type",
                "correctInput": "=1234567",
                "width": "11.3%",
                "height": "2.15%",
                "right": "20%",
                "top": "14.5%",
                "isChangeScreen": "false"
            },
            {
                "section": " <p> לחיצה על הכפתור שמצד שמאל, או לחילופין לחיצה על F4 במקלדת, תוביל אותנו למסך בו נוכל לבחור סינונים שלפיהם נחפש את המועמד הרצוי. </p>",
                "instruction": "לחץ על הכפתור שמשמאל לתיבת החיפוש או לחץ על מקש F4 במקלדת",
                "interactionType": "key",
                "correctInput": "F4",
                "clickAlternate": "true",
                "width": "1.85%",
                "height": "2.15%",
                "right": "31%",
                "top": "14.5%",
                "isChangeScreen": "true"
            },
            {
                "section": " <p> בחלון זה נוכל לחפש מועמד לפי הסינונים שאותם נבחר (במידה ונרצה לחפש בעזרת סינונים יותר מגוונים, נוכל לעבור לחלון חיפוש חופשי הנמצא מימין). </p>",
                "instruction": "מצא את המשתמש שתעודת הזהות שלו היא \"1234567\" (אין צורך בקידומת \"=\") ושם המשפחה שלו הוא \"לוי\"",
                "interactionType": "type",
                "correctInput": "1234567",
                "width": "13%",
                "height": "1.9%",
                "right": "33%",
                "top": "21.1%",
                "isChangeScreen": "true"
            },
            {
                "section": "",
                "instruction": "מצא את המשתמש שתעודת הזהות שלו היא \"1234567\" (אין צורך בקידומת \"=\") ושם המשפחה שלו הוא \"לוי\"",
                "interactionType": "type",
                "correctInput": "לוי",
                "width": "13%",
                "height": "1.9%",
                "right": "33%",
                "top": "24%",
                "isChangeScreen": "true"
            },
            {
                "section": "",
                "instruction": "מצא את המשתמש שתעודת הזהות שלו היא \"1234567\" (אין צורך בקידומת \"=\") ושם המשפחה שלו הוא \"לוי\"",
                "interactionType": "click",
                "width": "2.1%",
                "height": "2.4%",
                "right": "15.9%",
                "top": "31.7%",
                "isChangeScreen": "true"
            },
            {
                "section": " <p> <b> שימו לב! מחובתנו לשמור על כללי האתיקה. <u>אין לחפש מועמדים או חיילים שלא לצרכי עבודה.</u> פעולותיכם במערכת <u>מנוטרות</u>, וכל פעולה המפירה את כללי האתיקה <u>תטופל בחומרה.</u> </b> </p> <p>הודעה בנושא שימוש אתי בSAP מופיעה עם פתיחת התוכנה כל 7 ימים. </p>",
                "instruction": "קרא את ההודעה וסגור אותה לאישור",
                "interactionType": "click",
                "width": "2.5%",
                "height": "3.2%",
                "right": "78.3%",
                "top": "58.5%",
                "isChangeScreen": "true"
            },
            {
                "section": "<p> לאחר שנבחר במועמד שעליו אנו נדרשים לעבוד, נלחץ על הכפתור F8 כדי לגשת לתדפיס הנתונים שלו. </p> <p> בתדפיס נוכל לצפות בכלל הנתונים שרלוונטיים במסגרת ההרשאות שלנו, נתונים מסוימים שאין לנו גישה אליהם <b>לא יופיעו.</b> </p>",
                "instruction": "פתח את תדפיס הנתונים בעזרת מקש F8",
                "interactionType": "key",
                "correctInput": "F8",
                "clickAlternate": "false",
                "width": "0%",
                "height": "0%",
                "right": "0%",
                "top": "0%",
                "isChangeScreen": "true"
            },
            {
                "section": " <p>במסכי הPB נוכל לגשת לנתוני מועמד לפי סוגי מידע ספציפיים ולצפות בנגררותיהן (כלומר גם בנתונים שכבר לא עדכניים). זאת בניגוד למסך הZapro שבו נצפה בכלל סוגי המידע בצורת תדפיס, ורק בנתונים שעדכניים ליום החיפוש. </p>",
                "instruction": "החלף את מסך הטרנזקציה zapro במסך pb20 (אל תשכח את הקידומת n/)",
                "interactionType": "type",
                "correctInput": "/npb20",
                "width": "9%",
                "height": "2.2%",
                "right": "6%",
                "top": "4.05%",
                "isChangeScreen": "true"
            },
            {
                "section": "",
                "instruction": "מצא את המשתמש שתעודת הזהות שלו היא \"1234567\" (אל תשכח את הקידומת \"=\")\"",
                "interactionType": "type",
                "correctInput": "=1234567",
                "width": "20%",
                "height": "2.1%",
                "right": "10%",
                "top": "19%",
                "isChangeScreen": "true"
            },
            {
                "section": "",
                "instruction": ""
            }
        ],
        [
            {
                "section": "<p> לאחר שבחרנו במועמד, יעלה הסרגל הכללי שלו, ובו נוכל לצפות בנתונים הרלוונטיים ביותר על המועמד. </p> <p>בחלקו האמצעי של מסך הPB תופיע רשימה עם סוגי מידע שונים בהם נוכל לצפות או לבצע עריכה או יצירה. הסימון \"✔\" בצידה השמאלי שלרשימת הגלילה מציין אם קיים מידע עבור אותו נתון. </p><hr> <p>לכל סוג מידע יש מספר שמייצג אותו, וכדי לגשת אליו נצטרך להזין את המספר המייצג אותו. להלן רשימה של סוגי המידע השימושיים ביותר ביחידה: </p> <table> <tr> <th>מספר טבלה</th> <th>שם</th> </tr> <tr> <td>1</td> <td>הקצאה ארגונית</td> </tr> <tr> <td>2</td> <td>נתונים אישיים</td> </tr> <tr> <td>6</td> <td>כתובות</td> </tr> <tr> <td>21</td> <td>בני משפחה</td> </tr> <tr> <td>24</td> <td>כישורים</td> </tr> <tr> <td>28</td> <td>נתונים רפואיים</td> </tr> <tr> <td>41</td> <td>פירוטי תאריך</td> </tr> <tr> <td>105</td> <td>נתוני תקשורת</td> </tr> <tr> <td>4000</td> <td>פעולות</td> </tr> <tr> <td>4001</td> <td>מועמדויות</td> </tr> <tr> <td>4002</td> <td>הקצאת משרות פנויות</td> </tr> <tr> <td>9100</td> <td>אוכלוסיות ייחודיות</td> </tr> <tr> <td>9102</td> <td>נתוני איכות</td> </tr> <tr> <td>9103</td> <td>נתוני מא\"ה</td> </tr> <tr> <td>9105</td> <td>רמ\"מ אישי</td> </tr> <tr> <td>9106</td> <td>שפות זרות</td> </tr> <tr> <td>9114</td> <td>מסגרות למועמד</td> </tr> <tr> <td>9116</td> <td>מקצועות בגרות</td> </tr> <tr> <td>9120</td> <td>ביקורת גבולות</td> </tr> <tr> <td>9122</td> <td>מז\"פ</td> </tr> <tr> <td>9124</td> <td>ראיונות</td> </tr> <tr> <td>9125</td> <td>פעילויות</td> </tr> <tr> <td>9126</td> <td>בקשות</td> </tr> <tr> <td>9140</td> <td>נתוני גיוס</td> </tr> <tr> <td>9142</td> <td>השארות</td> </tr> <tr> <td>9146</td> <td>בקרת תהליכים</td> </tr> <tr> <td>9149</td> <td>המלצות מערבל</td> </tr> <tr> <td>9150</td> <td>נתוני אזרחות</td> </tr> <tr> <td>9160</td> <td>זימונים למועמד</td> </tr> </table><a id='download-btn' class='download-btn info-btn' download='dataTypes.png' href='/media/dataTypes.png' title='dataTypes'> שמור טבלה <img src='media/download.png' /> </a> <hr><p>לאחר בחירת סוג מידע, נוכל ללחוץ על Shift+F8 כדי לבצע סקירה של כלל השינויים שביצענו בסוג המידע, או F7 כדי לצפות בפירוט הרשומה העדכנית ביותר. </p> <p> כמו בכל מקום בSAP, לא נוכל לצפות בסוג מידע שאין לנו הרשאות אליו.</p>",
                "instruction": "בחר את סוג המידע \"זימונים למועמד\"",
                "interactionType": "type",
                "correctInput": "9160",
                "width": "14%",
                "height": "2.1%",
                "right": "11.2%",
                "top": "57.6%",
                "isChangeScreen": "false"
            },
            {
                "section": "",
                "instruction": "בעזרת מקש המקלדת המתאים צפה בפירוט הרשומה העדכנית ביותר של סוג המידע",
                "interactionType": "key",
                "correctInput": "F7",
                "clickAlternate": "false",
                "width": "0%",
                "height": "0%",
                "right": "0%",
                "top": "0%",
                "isChangeScreen": "true"

            },
            {
                "section": "<p> להרבה מסוגי המידע יהיו תת סוגי מידע, אשר יהוו חלוקה יותר ספציפית של סוג המידע.</p><p> לדוגמא, לסוג מידע 9160 (זימונים) יש שלושה תתי סוגים, 01 – זימון למיון ראשוני, 02 – זימון למיון מתקדם, 03 – זימון לגיוס.</p><p> בסוג מידע עם מספר תת סוגים רלוונטיים, לאחר צפייה בפירוט הרשומה העדכנית ביותר, נוכל לנווט בין מסכים בעזרת לחיצה על כפתורי החיצים:<img src='media/browseR.png' class='text-img'/> <img src='media/browseL.png' class='text-img'/></p>",
                "instruction": "נווט למסך השמאלי",
                "interactionType": "click",
                "width": "2%",
                "height": "2.4%",
                "right": "3.5%",
                "top": "10%",
                "isChangeScreen": "true"
            },
            {
                "section": "<p> עד כה, לא באו לידי ביטוי ההבדלים בין המסכים PB20 ו-PB30.</p><p> ההבדל העיקרי ביניהם הוא בשימוש שמאפשר כל מסך:</p><p> <b>⋆</b> בPB20 נוכל <b>לצפות</b> במידע על המועמד. <br> <b>⋆</b> בPB30 נוכל <b>לצפות</b> ו<b>לערוך</b> את נתוני המועמד.</p><p> <b> חשוב לנהוג בזהירות יתרה כשנמצאים במסך הPB30, מכיוון שמאוד בקלות אפשר לבצע עדכון בנתוני המועמד שלא לצורך.</b></p>",
                "instruction": "",
            }
        ]
    ]
];

//matrix containing the number of crm screenshot each of the pages should open with
//an array for each chapter
//which contains an array for each page
//which contains the correct image number
var matOpeningScreen = [
    [0, 0],
    [0],
    [5, 9],
    [15, 15, 24]
];

//current screenshot in practice screen
var currScreen = 0;
//boolean variable which indicates whether the next button currently contains the styling, text and event listener for ending the Lomda
var isNextBtnEnd = false;

/*
            load
            ====
            description:
            * if Lomda has been previousley finished in this chapter
                * hide pointer events for start button
                * hide back to mtv button
                * show finished box and add click event listeners to play again and back to mtv buttons
            * otherwise, add click event listener to start button, call hideStartScreen function on click
            =============================================================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
$(document).ready(function () {
    $("#dragbar").hide();
    if (!(sessionStorage.getItem("wasFinished") === null)) {
        $("#start-btn").css("pointer-events", "none");
        $("#back-to-mtv").hide();
        $("#finished-box").show();
        $("#play-again").on("click", allowToPlayAgain);
        //$("#box-back-to-mtv").on("click" function(){
        //redirect
        //});
    } else {
        $("#color-scheme").on("click", changeColor);
        $("#start-btn").on("click", hideStartScreen);
    }
});

/*
            allowToPlayAgain
            ================
            description:
            * hide and disable buttons on finished box
            * show and enable back to mtv button at side of screen
            * enable start Lomda button
            * remove indicator that Lomda has been finished from session storage
            ====================================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function allowToPlayAgain() {
    $("#finished-box button").off();
    $("#finished-box").hide();
    $("#back-to-mtv").show();
    //$("#back-to-mtv").on("click" function(){
    //redirect
    //});
    $("#start-btn").css("pointer-events", "auto");
    $("#start-btn").on("click", hideStartScreen);
    sessionStorage.removeItem("wasFinished");
}

/*
            hideStartScreen
            ===============
            description:
            * disable start button
            * move title
            * grow sidebar
            * call loadMain
            * activate dragbar
            * show instructions panel
            =========================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function hideStartScreen(event) {
    $(this).off("click");
    $("#" + $(this).attr("id") + ", .sidebar .subj, .background *").css({
        "pointer-events": "none"
    }).fadeOut(500);

    $(".lomda-title").css({
        "transition": "4s",
        "right": "-100vw"
    });

    $(".sidebar").css({
        "transition": "1s",
        "max-width": "46vw",
        "min-width": "calc(100vw - calc(100vh / 0.76))",
        "width": "35vw",
        "background-color": "var(--header-color1)"
    });

    $("#color-scheme").css({
        "width": "3vw",
        "height": "3vw"
    });

    $("#menu-footer").append($("#color-scheme"));

    if (Number($(".sidebar").css("min-width").slice(0, -2)) < Number($("body").css("width").slice(0, -2)) / 4) {
        $(".sidebar").css("min-width", "25vw");
    }

    $("#dragbar").show();
    $("#dragbar").on("mousedown", startDrag);

    $("#instructions-panel").fadeIn();
    $("#instructions-close").on("click", zoomOutInstructions);
    setTimeout(loadMain, 1500);
}

//initial cursor location and panel width, to use in dragging
var startX
var startWidth;

/*
            startDrag
            =========
            description:
            * initiate startX and startWidth variables
            * on mouse moving call drag
            * on mouse up call stopDrag
            ==========================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function startDrag(e) {
    startX = e.clientX;
    startWidth = Number($("#sidebar").css("width").slice(0, -2));
    $(document).on("mousemove", drag);
    $(document).on("mouseup ", stopDrag);
}

/*
            startDrag
            =========
            description:
            * update sidebar, practice screen container and practice screen size according to mouse position
            ================================================================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function drag(e) {
    $("#sidebar").css("width", (startWidth - e.clientX + startX) + 'px');
    $("#practice-screen-container").css("width", 'calc(100vw - ' + $("#sidebar").css("width") + ')');
    $("#practice-screen").css("height", "calc(0.76 *" + $("#practice-screen-container").css("width") + ")");
}

/*
            stopDrag
            ========
            description:
            * turn off drag and stopDrag events
            ===================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function stopDrag(e) {
    $(document).off('mousemove', drag);
    $(document).off('mouseup', stopDrag);
}

/*
            zoomOutInstructions
            ===================
            description:
            * make instructions panel small, pin it to sidebar
            * enable zoomInInstructions
            ==================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function zoomOutInstructions() {
    $(this).off("click");
    $("#instructions-panel").removeClass("instructions-panel-big");
    $("#instructions-panel").addClass("instructions-panel-small");
    setTimeout(function () {
        $("#instructions-panel").on("click", zoomInInstructions)
        $("#sidebar").append($("#instructions-panel"));
    }, 1000);

}

/*
            zoomInInstructions
            ==================
            description:
            * make instructions panel big, append back to page
            * enable zoomOutInstructions
            ==================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function zoomInInstructions() {
    $(this).off("click");
    $("#instructions-close").on("click", zoomOutInstructions);
    $("#instructions-panel").removeClass("instructions-panel-small");
    $("#instructions-panel").addClass("instructions-panel-big");
    $("body").append($("#instructions-panel"));
}

/*
            loadMain
            ========
            description:
            * hide title, show sidebar content and practice screen
            * add event listewner to menu items
            * initiate currChapter with 0
            * call loadChapter with currChapter as variable
            * turn on buttons in menu
            ======================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function loadMain() {
    $(".lomda-title").css("display", "none");
    $(".sidebar #sidebar-content").fadeIn(500);
    $(".sidebar").css("transition", "none");
    $(".practice-screen-container").fadeIn(500).css("display", "flex");
    $(".menu-item").on("click", menuItemClick);
    currChapter = 0;
    loadChapter(currChapter);
    $("#smaller-text").on("click", smallerText);
    $("#bigger-text").on("click", biggerText);
}

/*
            loadSwipeCircles
            ================
            description:
            * empty circle container
            * reset currPager to 0
            * for every page in vhapter add a swipe circle to container
            ===========================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function loadSwipeCircles() {
    $(".swipe-circle-container").html("");
    currPage = 0;
    for (var index = 0; index < matContent[currChapter].length; index++) {
        $(".swipe-circle-container").append("<div class='swipe-circle swipe-circle" + (index + 1) + "'></div>");
    }
}

/*
            menuItemClick
            =============
            description:
            * turn off menu items click events
            * show confirmation boc
            * get chapter number from clicked menu item
            * add an event listener to confirm button, on click close box and load chapter
            * add an event listener to cancel button, on click close confirmation box
            ==============================================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function menuItemClick(event) {
    $(".menu-item").off("click");
    $(".menu-item").css("pointer-events", "none");
    $("#confirmation-box p").html("בטוח? התקדמותך בפרק הנוכחי תימחק");
    $("#confirmation-box").show();
    var num = Number($(this).attr("id").substring($(this).attr("id").length - 1)) - 1;
    $("#confirm").on("click", function () {
        closeConfirmationBox();
        autoCloseMenu();
        loadChapter(num);
    });
    $("#cancel").on("click", function () {
        closeConfirmationBox();
        autoCloseMenu();
    });
}

/*
            menuItemClick
            =============
            description:
            * hide confirmation box, turn off buttons in it
            ===============================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function closeConfirmationBox() {
    $("#confirmation-box").hide();
    $("#confirm").off();
    $("#cancel").off();

}

/*
            menuItemClick
            =============
            description:
            * close menu (trigger click event on x icon)
            * add event listeners back to menu items
            * remove event listener from current menu item
            ===============================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function autoCloseMenu() {
    $("#box").trigger("click");
    $('.menu-item').each(function (i, obj) {
        if (i !== currChapter) {
            $(obj).on("click", menuItemClick);
        }
    });
    $(".menu-item").css("pointer-events", "auto");
}

/*
            loadChapter
            ===========
            description:
            * remove all listener events in practice screen, empty practice screen
            * enable current chapter menu item
            * if next button is set to end the Lomda, but now a chapter has been loaded, change it back to regular next button and update boolean
            * update currChapter to recieved chapter, initiate current page and section as 0
            * call showFooter and loadSwipeCircles
            * disable new current chapter menu item
            * load content of first section of first page in chapter
            * call chapterManager
            =====================================================================================================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function loadChapter(chapter) {
    $("#practice-screen-content *").off();
    $("#practice-screen-content").html("");
    $("#menu-item" + (currChapter + 1)).on("click", menuItemClick);
    $("#menu-item" + (currChapter + 1)).removeClass("current-menu-item");
    if (isNextBtnEnd) {
        isNextBtnEnd = false;
        $("#end-text").remove();
        $("#next-btn").removeClass("end-btn");
    }
    currChapter = chapter;
    currPage = 0;
    currSection = 0;
    showFooter();
    loadSwipeCircles();
    $("#menu-item" + (currChapter + 1)).off("click");
    $("#menu-item" + (currChapter + 1)).addClass("current-menu-item");
    $("#info-header h1").html(arrChapterName[currChapter]);
    $("#info-content").html(matContent[currChapter][currPage][currSection]["section"]);
    $("#info-content").append("<p id='instructions' class='instruction'>" + matContent[currChapter][currPage][currSection]["instruction"] + "</p>");
    $('#info-container').animate({
        scrollTop: 0
    }, 500);
    chapterManager();
}

/*
            swipeToNext
            ===========
            description:
            * disable next button until transition is complete
            * update current swipe circle
            * if this is not the last page, load next page, animate swipe circles change, scroll up and call chapter manager
            * otherwise, load next chapter
            =====================================================================================================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function swipeToNext(event) {
    $("#next-btn").off("click");
    $(".swipe-circle" + (currPage + 1)).css("background-position", "0% 0");
    currSection = 0;
    if (currPage < matContent[currChapter].length - 1) {
        currPage++
        $(".swipe-circle" + (currPage + 1)).css("background-position", "-100% 0");
        $(".info-content").css({
            "transition": "transform 0.5s",
            "transform": "translate3d(calc(-100% - 2vw), 0, 0)"
        });
        setTimeout(function () {
            $('#info-container').animate({
                scrollTop: 0
            }, 500);
            $(".info-content").css({
                "transition": "none",
                "transform": "translate3d(0, 0, 0)"
            });
            $("#info-content").html(matContent[currChapter][currPage][currSection]["section"]);
            $("#info-content").append("<p id='instructions' class='instruction'>" + matContent[currChapter][currPage][currSection]["instruction"] + "</p>");
            chapterManager();
        }, 500);
        showFooter();
    } else {
        loadChapter(currChapter + 1);
    }
}

/*
            confirmPrev
            ===========
            description:
            * set confirmation box text text
            * disable prev and next buttons
            * show confirmation box
            * on confirm close box and swipe to next
            * on cancel close box and enable prev and next buttons
            ======================================================
            programmer: Shira Shmuely
            date: 26/10/2020
*/
function confirmPrev(event) {
    $("#confirmation-box p").html("בטוח? התקדמותך בעמוד הנוכחי תימחק");
    $(".footer-btn").off("click");
    $("#confirmation-box").show();
    $("#confirm").on("click", function () {
        closeConfirmationBox();
        swipeToPrev();
    });
    $("#cancel").on("click", function () {
        closeConfirmationBox();
        showFooter();
    });
};

/*
            swipeToPrev
            ===========
            description:
            * if next button is set to end the Lomda, but now a new page has been loaded, change it back to regular next button and update boolean
            * update swipe circles
            * reset section counter to 0 reduce page counter by 1
            * animate swipe circles, scroll up and load pevious page's first section
            * call disableInteractionScreen
            ======================================================================================================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function swipeToPrev() {
    if (isNextBtnEnd) {
        isNextBtnEnd = false;
        $("#end-text").remove();
        $("#next-btn").removeClass("end-btn");
    }
    $(".swipe-circle" + (currPage + 1)).css("background-position", "-200% 0");
    currSection = 0;
    currPage--;
    $(".swipe-circle" + (currPage + 1)).css("background-position", "-100% 0");
    $(".info-content").css({
        "transition": "transform 0.5s",
        "transform": "translate3d(calc(100% + 2vw), 0, 0)"
    });
    setTimeout(function () {
        $('#info-container').animate({
            scrollTop: 0
        }, 500);
        $(".info-content").css({
            "transition": "none",
            "transform": "translate3d(0, 0, 0)"
        });
        $("#info-content").html(matContent[currChapter][currPage][currSection]["section"]);
        chapterManager();
        $("#info-content").append("<p id='instructions' class='instruction'>" + matContent[currChapter][currPage][currSection]["instruction"] + "</p>");
    }, 500);
    showFooter();
    disableInteractionScreen();
}

/*
            showNextSection
            ===============
            description:
            * add 1 to section counter
            * remove previous instructions
            * if this is not the last section
                * for a none empty section add a thematic break element
                * add the current section and instructions
            * call showFooter
            * scroll to bottom
            ======================================================================================================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function showNextSection() {
    var hr = "";
    var prevScrollHeight = $("#info-content")[0].scrollHeight;
    currSection++;
    $("#instructions").remove();
    if (currSection < matContent[currChapter][currPage].length) {
        if (matContent[currChapter][currPage][currSection]["section"] !== "") {
            hr = "<hr>";
        }
        $("#info-content").append(hr + matContent[currChapter][currPage][currSection]["section"]);
        $("#info-content").append("<p id='instructions' class='instruction'>" + matContent[currChapter][currPage][currSection]["instruction"] + "</p>");
    }
    showFooter();
    $("#info-container").animate({
        scrollTop: prevScrollHeight
    }, 500);
}

/*
            chapterManager
            ==============
            description:
            * empty practice screen
            * get opening screenshot from matrix
            * add screenshot and interactable objects to practice screen
            * call interactionManager
            ============================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function chapterManager() {
    $("#practice-screen-content").html("");
    currScreen = matOpeningScreen[currChapter][currPage];
    $("#practice-screen-content").append("<img src='media/crmScreenshots/" + currScreen + ".png' id='screen-img' class='fullscreen'/>");
    $("#practice-screen-content").append("<input id='typeable' class='interactable'></div>");
    $("#practice-screen-content").append("<div id='clickable' class='interactable'></div>");
    interactionManager();
}

/*
            chapterManager
            ==============
            description:
            * disable and hide all practice screen interactions
            * if this isn't the last section in page
                * get interaction type, position, size and boolean on whether screenshot changes after interaction or not from section json
                * set interactable object position and size
                * call setFalseCursorLocation with position and size variables
                * show and give event listener to relevant interaction type
                    * in event listener, to be done after correct input has been given: call showNextSection, update screenshot if needed and call interactionManager again
            * otherwise disableInteractionScreen
            ===============================================================================================================================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function interactionManager() {
    $(".interactable").off();
    $(".interactable").hide();
    $(document).off("keydown");
    if (currSection !== matContent[currChapter][currPage].length - 1) {
        $("#practice-screen-overlay").css("display", "none");
        var interactionType = matContent[currChapter][currPage][currSection]["interactionType"];
        var isChangeScreen = matContent[currChapter][currPage][currSection]["isChangeScreen"] === "true";
        var interactionWidth = matContent[currChapter][currPage][currSection]["width"];
        var interactionHeight = matContent[currChapter][currPage][currSection]["height"];
        var interactionRight = matContent[currChapter][currPage][currSection]["right"];
        var interactionTop = matContent[currChapter][currPage][currSection]["top"];
        $(".interactable").css({
            "width": interactionWidth,
            "height": interactionHeight,
            "right": interactionRight,
            "top": interactionTop
        });
        setFalseCursorLocation(interactionTop, interactionRight, interactionWidth, interactionHeight);

        switch (interactionType) {
            case "click":
                $("#typeable").hide();
                $("#clickable").show();
                $("#clickable").on("click", function (event) {
                    showNextSection();
                    if (isChangeScreen) {
                        $("#screen-img").attr("src", "media/crmScreenshots/" + ++currScreen + ".png");
                    }
                    interactionManager();
                });
                break;
            case "type":
                $("#clickable").hide();
                $("#typeable").show();
                $("#typeable").focus();
                $("#typeable").on("change", function (event) {
                    correctInput = matContent[currChapter][currPage][currSection]["correctInput"];
                    if ($(this).val() === correctInput || (correctInput === "any" && $(this).val())) {
                        $(this).css("border", "");
                        $(this).val("");
                        showNextSection();
                        if (isChangeScreen) {
                            $("#screen-img").attr("src", "media/crmScreenshots/" + ++currScreen + ".png");
                        }
                        interactionManager();
                    } else {
                        $(this).css("border", "red 1px solid");
                    }
                });
                break;
            case "key":
                $("#typeable").hide();
                $("#clickable").hide();
                hasAlternate = matContent[currChapter][currPage][currSection]["clickAlternate"] === "true";
                if (!hasAlternate) {
                    $("#false-cursor").hide();
                }
                $(document).on("keydown", function (event) {
                    event.preventDefault();
                    correctInput = matContent[currChapter][currPage][currSection]["correctInput"];
                    if (event.key === correctInput) {
                        showNextSection();
                        if (isChangeScreen) {
                            $("#screen-img").attr("src", "media/crmScreenshots/" + ++currScreen + ".png");
                        }
                        interactionManager();
                    }
                });
                if (hasAlternate) {
                    $("#clickable").show();
                    $("#clickable").on("click", function (event) {
                        showNextSection();
                        if (isChangeScreen) {
                            $("#screen-img").attr("src", "media/crmScreenshots/" + ++currScreen + ".png");
                        }
                        interactionManager();
                    });
                }
                break;
        }
    } else {
        disableInteractionScreen();
    }
}

/*
            disableInteractionScreen
            ========================
            description:
            * if current section isn't first, (that means event was triggered by a page being finished and not a click on the previous button) call goodJob
            * turn off all interactions in practice screen, show practice screen overlay and hide the false cursor
            ===============================================================================================================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function disableInteractionScreen() {
    if (currSection !== 0)
        goodJob();
    $("#practice-screen-content *").off();
    $("#practice-screen-overlay").css("display", "flex");
    $("#false-cursor").hide();
}

/*
            showFooter
            ==========
            description:
            * turn off and hide footer buttons
            * if this is the last section, show and enable next button (if this is the last page of the last chapter give it the styling and event of finish Lomda button)
            * otherwise, if this isn't the first page in the chapterת show and enable previous button
            ==============================================================================================================================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function showFooter() {
    $(".footer-btn").off("click");
    $(".footer-btn").hide();
    if ((currSection + 1) === matContent[currChapter][currPage].length) {
        $("#next-btn").show();
        isNextBtnEnd = ((currChapter + 1) === matContent.length && (currPage + 1) === matContent[currChapter].length);
        if (isNextBtnEnd) {
            $("#next-btn").on("click", backToStart);
            $("#next-btn").prepend("<span id='end-text'>לסיום</span>");
            $("#next-btn").addClass("end-btn");
        } else {
            $("#next-btn").on("click", swipeToNext);
        }
    }
    if (currPage > 0) {
        $("#prev-btn").show();
        $("#prev-btn").on("click", confirmPrev);
    }
}

/*
            showFooter
            ==========
            description:
            * get current font size
            * if font size is bigger than 12, reduce it by 2
            ================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function smallerText(event) {
    var currFontSize = Number($(".info-content").css("font-size").substring(0, 2));
    if (currFontSize > 12) {
        currFontSize -= 2;
        $(".info-content").css("font-size", currFontSize + "px");
        $(".info-content").css("line-height", currFontSize * 2 + "px");
        $(".info-content .text-img").css("height", currFontSize * 1.5 + "px");
    }
}

/*
            showFooter
            ==========
            description:
            * get current font size
            * if font size is smaller than 36, enlarge it by 2
            ==================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function biggerText(event) {
    var currFontSize = Number($(".info-content").css("font-size").substring(0, 2));
    if (currFontSize < 36) {
        currFontSize += 2;
        $(".info-content").css("font-size", currFontSize + "px");
        $(".info-content").css("line-height", currFontSize * 2 + "px");
        $(".info-content .text-img").css("height", currFontSize * 1.5 + "px");
    }
}

/*
            changeColor
            ===========
            description:
            * if color scheme button is set to change to pink, update color variables to pink version
            * if color scheme button is set to change to green, update color variables to green version
            * change color scheme button to other color
            =============================================================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function changeColor(event) {
    if ($("#color-scheme").hasClass("change-to-pink")) {
        document.documentElement.style.setProperty('--header-color1', '#F05095');
        document.documentElement.style.setProperty('--sidebar-color2', '#FC63A6');
        document.documentElement.style.setProperty('--start-btn-color3', '#D24585');
        document.documentElement.style.setProperty('--scrollbar-color4', '#642046');
        document.documentElement.style.setProperty('--menu-item-color5', '#531A3A');
        document.documentElement.style.setProperty('--hover-color6', '#3a0f27');

        // $(".sap-icon").attr("src", "media/sapPink.png");
        $("body").css("background-image", "url(media/backgroundPink.png)");
        $("#color-scheme").removeClass("change-to-pink");
        $("#color-scheme").addClass("change-to-green");

    } else if ($("#color-scheme").hasClass("change-to-green")) {
        document.documentElement.style.setProperty('--header-color1', '#83B330');
        document.documentElement.style.setProperty('--sidebar-color2', '#8BBF2C');
        document.documentElement.style.setProperty('--start-btn-color3', '#5D9134');
        document.documentElement.style.setProperty('--scrollbar-color4', '#3A641C');
        document.documentElement.style.setProperty('--menu-item-color5', '#294714');
        document.documentElement.style.setProperty('--hover-color6', '#172b0a');
        // $(".sap-icon").attr("src", "media/sapGreen.png");
        $("body").css("background-image", "url(media/backgroundGreen.png)");
        $("#color-scheme").removeClass("change-to-green");
        $("#color-scheme").addClass("change-to-pink");
    }
}

/*
            setFalseCursorLocation
            ======================
            description:
            * show false cursor
            * give it the position at the bottom left corner of interactable object
            =======================================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function setFalseCursorLocation(interactionTop, interactionRight, interactionWidth, interactionHeight) {
    $("#false-cursor").show();
    $("#false-cursor").css({
        "right": "calc(" + interactionRight + " + " + interactionWidth + ")",
        "top": "calc(" + interactionTop + " + " + interactionHeight + ")"
    });
}

/*
            goodJob
            =======
            description:
            * show good job icon
            * hide the icon after delay
            ===========================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function goodJob() {
    $("#good-job").show();
    $("#good-job").delay(2500).hide(0);
}

/*
            backToStart
            ===========
            description:
            * update session storage to indicate lomda has been finished
            * reload page
            ============================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function backToStart(event) {
    sessionStorage.setItem("wasFinished", "finished");
    location.reload();
}