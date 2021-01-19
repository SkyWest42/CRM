//content part counters
var currChapter;
var currPage;
var currSection;

var contentCount;
var progress;

//array of chapter titles
var arrChapterName = ["א'- פתיח", "ב'- סיור בפניה", "ג'- פתיחת פניה", "ד'- הקצאת פניה", "ה'- סגירת פניה", "ו'- SLA"];

//matrix containing all content
//an array for each chapter
//which contains an array for each page
//ehich contains a json for each section
//these jsons contain the section content as well as information on the type and position of the required interaction in the practice screen
var matContent = [
    [
        [
            {
                "section": "<p>מערכת הCRM הינה <strong>מערכת לניהול קשרי לקוחות</strong>.</p><p><strong>CRM- Customer Relationship Management</strong></p><p>המערכת מאפשרת ליחידת מיטב <strong>לנהל פניות של מלש\"בים </strong>במגוון נושאים, <strong>לתעד</strong> אותן ו<strong>לעקוב</strong> אחר הטיפול בהן. &nbsp;</p><hr /><p>רוב הפניות מתקבלות ב<strong>מרכז המידע והשירות </strong>שמורכב ממרכז השירות הטלפוני ומרכז השירות הדיגיטלי. הפניות מטופלות ונסגרות במרכז השירות או מועברות משם להמשך הטיפול במדורים המקצועיים ביחידה.</p><p>בנוסף, ישנן פניות אשר מגיעות דרך אתר \"מתגייסים ברשת\" חלקן מגיעות למרכז השירות וחלקן מופנות ישירות למדור המקצועי.</p ><img class='full-img' src='media/indexMedia/flowchart.png'/>",
                "instruction": ""
            }
        ]

    ],
    [
        [
            {
                "section": "<p>אז התחברנו למחשב הלוקאלי! כעת עלינו לפתוח את מערכת הCRM. תחילה נכנס לדפדפן. </p>",
                "instruction": "פתח את דפדפן כרום במסך התרגול",
                "interactionType": "click",
                "width": "8%",
                "height": "10%",
                "right": "11.5%",
                "top": "19.5%",
                "isChangeScreen": "true",
            },
            {
                "section": "<p>כעת, עלינו להתחבר לכתובת https://crm.medone.idf.il.</p>",
                "instruction": "העתק את הכתובת <strong title='לחץ כדי להעתיק' onmouseover=\"selectText()\" onclick='copyText()' id='to-copy' class='to-copy'>https://crm.medone.idf.il</strong> לשורת החיפוש במסך התרגול",
                "interactionType": "type",
                "correctInput": "https://crm.medone.idf.il",
                "width": "50%",
                "height": "3%",
                "right": "39%",
                "top": "3.55%",
                "isChangeScreen": "true",
                "isBreak": "false"
            },
            {
                "section": "<p>במסך הראשי של המערכת נראה את כל הפניות הפתוחות של הצוות שלנו.</p><p>בלחיצה על שם התצוגה שבה אנו נמצאים כרגע (במקרה הזה \"הפניות הפתוחות של הצוות\"), ניתן לראות את כל התצוגות שהמשתמש שלנו חשוף אליהן.</p>",
                "instruction": "לחץ על שם התצוגה הנוכחי במסך התרגול",
                "interactionType": "click",
                "width": "29%",
                "height": "3.3%",
                "right": "4%",
                "top": "18%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>נוכל לגשת לכל תצוגה בעזרת לחיצה על השם שלה ברשימה שנפתחה.</p>",
                "instruction": "לחץ על שם התצוגה \"כל הפניות הפתוחות במיטב\" על מנת לגשת אליה",
                "interactionType": "click",
                "width": "21%",
                "height": "3%",
                "right": "4%",
                "top": "34%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>עכשיו שאנחנו יודעים לצפות בפניות במגוון תצוגות, הגיע הזמן שנצלול לתוך פניה ונלמד איזה מידע היא מכילה.</p>",
                "instruction": "לחץ על הפניה המסומנת במסך התרגול על מנת לסקור אותה",
                "interactionType": "click",
                "width": "94%",
                "height": "3.4%",
                "right": "2%",
                "top": "36.4%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "",
                "instruction": ""
            }
        ],
        [
            {
                "section": "<p>בחלק העליון של המסך, מצד שמאל, ניתן לראות תמצות של פרטי הפניה (מי המלש\"ב ומי הגורם שמטפל בפניה כרגע).</p> <p><b>הפניה עצמה מחולקת למקטעים שונים</b>, אשר ניתן לסגור או לפתוח בלחיצה על השם שלהם.</p>",
                "instruction": "לחץ על שם המקטע \"פרטי הפונה\" על מנת לפתוח אותו",
                "interactionType": "click",
                "width": "12%",
                "height": "3.8%",
                "right": "1%",
                "top": "28.2%",
                "isChangeScreen": "true",
                "isBreak": "true"
            }
            ,
            {
                "section": "<p>המקטע <b class='section-name'>פרטי הפונה</b>  נפתח וכעת ניתן לראות את שם הפונה, סוג הפונה וערוץ הפניה.</p>",
                "instruction": "לחץ על שם המקטע \"פרטי הפניה\" על מנת לפתוח אותו",
                "interactionType": "click",
                "width": "12%",
                "height": "3.8%",
                "right": "1%",
                "top": "42%",
                "isChangeScreen": "true",
                "isBreak": "true"
            }
            ,
            {
                "section": "<p><b class='section-name'>פרטי הפניה</b>- כאן נמצא פרטים על הפנייה עצמה, תחת תת-כותרות שונות:</p><p><strong>סיווג הפניה</strong>-<img class='text-img detail-img' src='media/indexMedia/puzzle3.png'/> כל הפניות במיטב מסווגות לפי \"שלשות\". ה\"שלשות\" הן נושאי הפניות, וכל אחת מהן מכילה: תחום, תת תחום, שאלה ותת שאלה (בדרך כלל התת שאלה שווה לשאלה).</p><p><strong>תשובת חוקה</strong><img class='text-img detail-img' src='media/indexMedia/lawlined.png'/> עוזרת לנציג לטפל בפניה בצורה יעילה יותר. מדובר בהנחיה של המדור המקצועי שמכווינה את הנציג לטפל בפניה לפי המלצת המדור. תשובת חוקה שתופיע תהיה מותאמת לנושא הפניה (\"השלשה\").</p>",
                "instruction": "לחץ על הגלגלת במסך התרגול על מנת לגלול למטה",
                "interactionType": "click",
                "width": "2%",
                "height": "24%",
                "right": "98%",
                "top": "29.5%",
                "isChangeScreen": "true",
                "isBreak": "true"
            }
            ,
            {
                "section": "<p>ב<strong>SLA</strong><strong> ישים </strong><img class='text-img detail-img' src='media/indexMedia/hourglass.png'/>(SLA- Service-level agreement) ניתן לראות אם מיטב עומדת בקריטריונים שהיא הציבה לעצמה עבור זמן הטיפול בפניה.</p><p><strong>תיאור הטיפול בפניה</strong><img class='text-img detail-img' src='media/indexMedia/contract.png'/> הוא המקום בו אנחנו אמורים לתעד מה עשינו עם הפניה לפני שהיא מועברת למקום אחר או נסגרת.</p><p><strong>היסטוריית תיאור הטיפול בפניה </strong><img class='text-img detail-img' src='media/indexMedia/clock.png'/>הוא המקום אליו עובר המלל שהיה ב\"תיאור הטיפול בפניה\" לאחר סגירת הפניה או הקצאתה לגורם אחר.</p>",
                "instruction": "לחץ על שם המקטע \"פניות אחרונות\" על מנת לפתוח אותו",
                "interactionType": "click",
                "width": "13%",
                "height": "3.8%",
                "right": "1%",
                "top": "86%",
                "isChangeScreen": "true",
                "isBreak": "false"
            }
            ,
            {
                "section": "<p><b class='section-name'>פניות אחרונות</b> מאפשר לגשת לכל הפניות של המועמד מתוך הפניה שאנו מטפלים בה כרגע.</p>",
                "instruction": "לחץ על שם המקטע \"פניות מSAP \"CRM על מנת לפתוח אותו",
                "interactionType": "click",
                "width": "16%",
                "height": "3.8%",
                "right": "1%",
                "top": "71%",
                "isChangeScreen": "true",
                "isBreak": "true"
            }
            ,
            {
                "section": "",
                "instruction": "לחץ על הגלגלת במסך התרגול על מנת לגלול למטה",
                "interactionType": "click",
                "width": "2%",
                "height": "15%",
                "right": "98%",
                "top": "67%",
                "isChangeScreen": "true",
                "isBreak": "true"
            }
            ,
            {
                "section": "<p><strong class='section-name'>פניות מSAP CRM</strong> מראה את כל הפניות שתועדו במערכת CRM הישנה (לפני 23.04.18)</p>",
                "instruction": "לחץ על שם המקטע \"קבצים מצורפים\" על מנת לפתוח אותו",
                "interactionType": "click",
                "width": "16%",
                "height": "3.8%",
                "right": "1%",
                "top": "58.8%",
                "isChangeScreen": "true",
                "isBreak": "true"
            }
            ,
            {
                "section": "<p><strong class='section-name'>קבצים מצורפים</strong> מראה את כל הקבצים שצורפו לפניה. ניתן לפתוח קובץ בדפדפן בעזרת לחיצה על שם הקובץ.</p>",
                "instruction": "לחץ על שם המקטע \"התכתבות\" על מנת לפתוח אותו",
                "interactionType": "click",
                "width": "16%",
                "height": "3.8%",
                "right": "1%",
                "top": "62%",
                "isChangeScreen": "true",
                "isBreak": "true"
            }
            ,
            {
                "section": "<p><strong class='section-name'>התכתבות</strong> מציג את כל המלל שמגיע בפניות (הן מצד המלש\"ב והן מצד נציג מיטב). ערוצי הפניה שבהם מגיעה התכתבות : מייל, פייסבוק, SMS.</p>",
                "instruction": "לחץ על שם המקטע \"פעילויות SMS\" על מנת לפתוח אותו",
                "interactionType": "click",
                "width": "16%",
                "height": "3.8%",
                "right": "1%",
                "top": "65.6%",
                "isChangeScreen": "true",
                "isBreak": "true"
            }
            ,
            {
                "section": "<p><strong class='section-name'>פעילויות SMS</strong> הSMS אשר נשלחה בסגירת הפניה, ומה סטטוס ההודעה- כלומר האם הגיעה ללקוח בהצלחה.</p>",
                "instruction": "לחץ על שם המקטע \"היסטוריית מטפלים\" על מנת לפתוח אותו",
                "interactionType": "click",
                "width": "16%",
                "height": "3.8%",
                "right": "1%",
                "top": "69.6%",
                "isChangeScreen": "true",
                "isBreak": "true"
            }
            ,
            {
                "section": "<p><strong class='section-name'>היסטוריית מטפלים</strong> מאפשר לנו לראות מה קרה עם הפניה מרגע שנפתחה- מי יצר את הפניה, לאן הקצו אותה ומי הקצה אותה, מי סגר את הפניה. בנוסף, ניתן לראות כמה זמן הייתה הפניה בטיפול אצל כל גורם.</p>",
                "instruction": "לחץ על שם המקטע \"היסטוריית שינויים\" על מנת לפתוח אותו",
                "interactionType": "click",
                "width": "16%",
                "height": "3.8%",
                "right": "1%",
                "top": "73.4%",
                "isChangeScreen": "true",
                "isBreak": "true"
            }
            ,
            {
                "section": "<p><strong class='section-name'>היסטוריית שינויים</strong> רישום השינויים שבוצעו בנושא הפניה או הסטטוס שלה. כך, ניתן לראות מה השלשה הראשונית שבחר הנציג במרכז השירות, ואף מה השלשה שבה סיווגו את הפניה מחדש במדור המקצועי (במקרה שבוצע שינוי בשלשה)</p>",
                "instruction": "לחץ על שם המקטע \"קשרים בין פניות\" על מנת לפתוח אותו",
                "interactionType": "click",
                "width": "16%",
                "height": "3.8%",
                "right": "1%",
                "top": "77.2%",
                "isChangeScreen": "true",
                "isBreak": "true"
            }
            ,
            {
                "section": "<p><strong class='section-name'>קשרים בין פניות</strong> מאפשר לראות פניות שמוזגו לפניה הנוכחית או האם הפניה הנוכחית מוזגה לפניית אב אחרת (במקרה שבוצע מיזוג פניות).</p>",
                "instruction": "לחץ על שם המקטע \"פרטי הפניה באתר\" על מנת לפתוח אותו",
                "interactionType": "click",
                "width": "16%",
                "height": "3.8%",
                "right": "1%",
                "top": "81%",
                "isChangeScreen": "true",
                "isBreak": "true"
            }
            ,
            {
                "section": "<p><strong class='section-name'>פרטי הפניה באתר</strong> מכיל את נושא הפניה שיוצג למלש\"ב באתר \"מתגייסים\" (במקרה שהפניה מוגדרת לשיקוף).</p>",
                "instruction": "לחץ על שם המקטע \"ניהול\" על מנת לפתוח אותו",
                "interactionType": "click",
                "width": "16%",
                "height": "3.8%",
                "right": "1%",
                "top": "84.8%",
                "isChangeScreen": "true",
                "isBreak": "true"
            }
            ,
            {
                "section": "<p><strong class='section-name'>ניהול</strong> מציג את הפרטים הטכניים של הפניה (מתי נוצרה, מתי בוצעו בה השינויים האחרונים, מי מטפל בפניה כרגע ופרטים שמזהים את הפניה ואת הפונה- מספר טלפון, כתובת מייל או שם משתמש פייסבוק).</p>",
                "instruction": "",
            }
        ]
    ],
    [
        [
            {
                "section": "<p>חזרנו לתצוגה הראשית של המשתמש שלנו, וכעת נלמד איך לפתוח פניה חדשה. נתחיל בלחיצה על כפתור \"פניה חדשה\" שממוקם בחלק העליון של המסך.</p>",
                "instruction": "לחץ על \"כפתור פניה חדשה\"",
                "interactionType": "click",
                "width": "8%",
                "height": "3%",
                "right": "1%",
                "top": "12%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>מסך הפניה החדשה נפתח.</p><p>תחילה יש למלא את פרטי המועמד שאליו תהיה מקושרת הפניה.</p><p>את המועמד ניתן לחפש לפי שם או לפי תעודת זהות.</p><p><strong><span style='color: #00aa00;'><span style='color: #000000;'>נעדיף לחפש על פי</span> תעודת זהות <span style='color: #000000;'>ולא</span></span>&nbsp;<span style='color: #b22222;'>שם פרטי ושם משפחה</span><span style='color: #000000;'>-&nbsp;החיפוש ע\"פ ת.ז יותר וודאי</span></strong></p><p>כדי לקשר את הפניה למועמד הרלוונטי נבצע חיפוש בשדה \"מועמד\", ולאחר מכן נלחץ על Enter או זכוכית המגדלת &ndash; תיפתח רשימה של מועמדים אפשריים שממנה ניתן לבחור את המועמד הרלוונטי.</p>",
                "instruction": "הקלד את תעודת הזהות \"234567899\"",
                "interactionType": "type",
                "correctInput": "234567899",
                "width": "35%",
                "height": "2.2%",
                "right": "14%",
                "top": "34.2%",
                "isChangeScreen": "false",
                "isBreak": "false"
            },
            {
                "section": "",
                "instruction": "הקש Enter",
                "interactionType": "key",
                "correctInput": "Enter",
                "clickAlternate": "false",
                "width": "0%",
                "height": "0%",
                "right": "0%",
                "top": "0%",
                "isChangeScreen": "true",
                "isBreak": "false"
            },
            {
                "section": "",
                "instruction": "בחר את המלש\"בית ישראלה ישראלית.",
                "interactionType": "click",
                "width": "37%",
                "height": "4%",
                "right": "14%",
                "top": "36.2%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>שם המועמד נשמר בשדה.</p><p>כעת עלינו לבחור את ערוץ הפניה.</p>",
                "instruction": "לחץ על שדה \"ערוץ הפניה\"",
                "interactionType": "click",
                "width": "10%",
                "height": "2.2%",
                "right": "61.2%",
                "top": "34%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>לחיצה על השדה \"ערוץ הפניה\" תפתח רשימת ערוצים אפשריים. מהרשימה ניתן לבחור את הערוץ הרלוונטי בלחיצת כפתור.</p><p>רוב הפניות נפתחות אוטומטית כאשר מתקבל מייל או טלפון. לכן כאשר פותח נציג השירות פניה ידנית, מדובר בדרך כלל בערוץ \"פניה פיזית\", עבור מלש\"ב שהתייצב וטופל בלשכה, או ערוצי פניה \"פסטיבל מתגייסים\" ו\"יום פתוח\", הקשורים לאירועים וכנסים שנתיים.</p>",
                "instruction": "בחר את ערוץ הפניה \"פניה פיזית\"",
                "interactionType": "click",
                "width": "10%",
                "height": "2.2%",
                "right": "61.5%",
                "top": "35.8%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>עם בחירת ערוץ הפניה \"פניה פיזית\" יסומן הצ'ק בוקס \"האם אומתו פרטים\" אוטומטית. (בערוצי פניה אחרים נידרש לאמת את זהות המלש\"ב ידנית)</p><p>עכשיו ניתן להתחיל למלא את פרטי הפניה עצמה.</p>",
                "instruction": "",
            }
        ],
        [
            {
                "section": "<p>כפי שניתן לראות, פניה חדשה נפתחת ללא נושא (שלשה) מסוים.</p><p>זוכרים ממה מורכבת שלשה? בואו נתחיל!</p><p><img class='text-img detail-img' src='media/indexMedia/puzzle1.png'/> לבחירת ה<strong>תחום</strong> הרלוונטי, נלחץ על השדה תחום. לאחר מכן נלחץ Enter או על זכוכית המגדלת ונבחר תחום מתוך הרשימה שתוצג.</p>",
                "instruction": "לחץ על השדה \"תחום\"",
                "interactionType": "click",
                "width": "10%",
                "height": "2.2%",
                "right": "50.8%",
                "top": "41%",
                "isChangeScreen": "false",
                "isBreak": "false"
            },
            {
                "section": "",
                "instruction": "הקש Enter",
                "interactionType": "key",
                "correctInput": "Enter",
                "clickAlternate": "false",
                "width": "0%",
                "height": "0%",
                "right": "0%",
                "top": "0%",
                "isChangeScreen": "true",
                "isBreak": "false"
            },
            {
                "section": "",
                "instruction": "בחר את התחום \"גיוס\"",
                "interactionType": "click",
                "width": "44.2%",
                "height": "4%",
                "right": "52.2%",
                "top": "61%",
                "isChangeScreen": "true",
                "isBreak": "false"
            },
            {
                "section": "<p style='overflow: auto;'><img class='text-img detail-img' src='media/indexMedia/puzzle2.png'/>נבחר את <strong>תת התחום</strong> באופן  דומה.</p>",
                "instruction": "לחץ על השדה \"תת תחום\"",
                "interactionType": "click",
                "width": "10%",
                "height": "2.2%",
                "right": "50.8%",
                "top": "43.4%",
                "isChangeScreen": "false",
                "isBreak": "false"
            },
            {
                "section": "",
                "instruction": "הקש Enter",
                "interactionType": "key",
                "correctInput": "Enter",
                "clickAlternate": "false",
                "width": "0%",
                "height": "0%",
                "right": "0%",
                "top": "0%",
                "isChangeScreen": "true",
                "isBreak": "false"
            },
            {
                "section": "",
                "instruction": "בחר את תת התחום \"בירורים\"",
                "interactionType": "click",
                "width": "44.2%",
                "height": "4%",
                "right": "52.2%",
                "top": "49%",
                "isChangeScreen": "true",
                "isBreak": "false"
            },
            {
                "section": "<p style='overflow: auto;'><img class='text-img detail-img' src='media/indexMedia/puzzle3.png'/>ולסיום את ה<strong>שאלה</strong>.</p>",
                "instruction": "לחץ על השדה \"שאלה\"",
                "interactionType": "click",
                "width": "10%",
                "height": "2.2%",
                "right": "50.8%",
                "top": "45.8%",
                "isChangeScreen": "false",
                "isBreak": "false"
            },
            {
                "section": "",
                "instruction": "הקש Enter",
                "interactionType": "key",
                "correctInput": "Enter",
                "clickAlternate": "false",
                "width": "0%",
                "height": "0%",
                "right": "0%",
                "top": "0%",
                "isChangeScreen": "true",
                "isBreak": "false"
            },
            {
                "section": "",
                "instruction": "בחר את השאלה \"היכן מתקיים הגיוס?\"",
                "interactionType": "click",
                "width": "44.2%",
                "height": "4%",
                "right": "52.2%",
                "top": "53.8%",
                "isChangeScreen": "true",
                "isBreak": "false"
            },
            {
                "section": "<p>כל הכבוד! לאחר שבחרנו את התחום, התת תחום והשאלה (והתת שאלה במידה ויש) קיבלנו <strong>שלשה</strong>!</p>",
                "instruction": "לחץ על הגלגלת במסך התרגול על מנת לגלול למטה",
                "interactionType": "click",
                "width": "2%",
                "height": "14.5%",
                "right": "98%",
                "top": "29.5%",
                "isChangeScreen": "true",
                "isBreak": "false"
            },
            {
                "section": "<p>כעת עלינו לתעד כיצד טיפלנו בפניה – לשם כך קיים שדה \"תיאור הטיפול בפניה\".</p><img class='full-img' src='media/indexMedia/descriptionInstruct.png'/><p><a id='download-btn' class='download-btn info-btn' title='saveButtons' href='/media/indexMedia/descriptionInstruct.png' download='descriptionInstruct.png'> שמור כרטיסיה <img src='media/indexMedia/download.png'/> </a></p>",
                "instruction": "העתק את הטקסט הבא לתוך תיאור הטיפול בפניה: <strong title='לחץ כדי להעתיק' onmouseover=\"selectText()\" onclick='copyText()' id='to-copy' class='to-copy'>050-1234567 הנל התייצב בלשכה וביקש לברר היכן הוא מתגייס? בדקתי את פרטיו ועניתי על שאלתו. </strong>",
                "interactionType": "type",
                "correctInput": "050-1234567 הנל התייצב בלשכה וביקש לברר היכן הוא מתגייס? בדקתי את פרטיו ועניתי על שאלתו.",
                "width": "45%",
                "height": "10%",
                "right": "49%",
                "top": "76%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>אם ברצוננו להוסיף קבצים לפניה ניתן לגשת למקטע \"קבצים מצורפים\".</p>",
                "instruction": "לחץ על הגלגלת במסך התרגול על מנת לגלול למקטע \"קבצים מצורפים\"",
                "interactionType": "click",
                "width": "2%",
                "height": "14.5%",
                "right": "98%",
                "top": "36%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>כדי להוסיף קובץ יש ללחוץ על סימן הפלוס שנמצא בחלק השמאלי העליון של המקטע.</p>",
                "instruction": "לחץ על סימן הפלוס",
                "interactionType": "click",
                "width": "3%",
                "height": "3.5%",
                "right": "92.85%",
                "top": "37.3%",
                "isChangeScreen": "true",
                "isBreak": "false"
            },
            {
                "section": "<p>מסך העלאת הקובץ נפתח, להעלאת קובץ נוכל לגרור קובץ לאזור הרלוונטי, או ללחוץ על כפתור \"בחר קובץ\".</p>",
                "instruction": "לחץ על \"בחר קובץ\"",
                "interactionType": "click",
                "width": "8%",
                "height": "3.2%",
                "right": "55.1%",
                "top": "33.6%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "",
                "instruction": "בחר את הקובץ \"טופס דין אישה כדין גבר\" השמור במחשב הלוקאלי",
                "interactionType": "click",
                "width": "6.5%",
                "height": "10%",
                "right": "62.3%",
                "top": "13.2%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "",
                "instruction": "לחץ \"Open\" על מנת לבחור את הקובץ",
                "interactionType": "click",
                "width": "7%",
                "height": "2.6%",
                "right": "48.2%",
                "top": "48.2%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>שם הקובץ שהעלנו יופיע במסך העלאת הקובץ.</p><p>כעת נדרש לבחור האם הקובץ שאנחנו רוצים להעלות הוא לשיקוף או לא לשיקוף- כלומר, האם המלש\"ב יראה את הקובץ באתר \"מתגייסים ברשת\".</p>",
                "instruction": "בחר את השדה \"האם לשיקוף פניות\"",
                "interactionType": "click",
                "width": "7%",
                "height": "2.6%",
                "right": "23%",
                "top": "60.6%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "",
                "instruction": "בחר \"לשיקוף\"",
                "interactionType": "click",
                "width": "7%",
                "height": "2.6%",
                "right": "23%",
                "top": "60%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>לאחר מכן נלחץ על \"שמור וצא\" כדי לשמור ולחזור לפניה, או \"שמור וחדש\" אם ברצוננו להעלות עוד קבצים.</p>",
                "instruction": "לחץ על \"שמור וצא\"",
                "interactionType": "click",
                "width": "7.4%",
                "height": "3%",
                "right": "24%",
                "top": "13.8%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>כעת מופיע הקובץ במקטע הקבצים המצורפים.</p><p>כל הכבוד! סיימנו לעדכן את הפרטים בפניה.</p><p>כעת יש לשמור אותה.</p><table class='save-btn-table'><tbody><tr><th>איזה כפתור?</th><th>מה הוא עושה?</th><th>מתי נשתמש?</th></tr><tr><td><img src='media/indexMedia/save.png'/></td><td>שומר את הפניה, ישאיר אותנו במסך הפניה.</td><td>○ כשהפניה ממתינה לטיפול על ידי גורם אחר (לדוגמה קב\"ן או רופא) <br /><br /> ○ כשקיימת בעיה שמונעת מאתנו לטפל בפניה כרגע.</td></tr><tr><td><img src='media/indexMedia/saveandclose.png'/></td><td>שומר וסוגר את הפניה על ידינו, יחזיר אותנו לתצוגה הראשית.</td><td>○ אם סיימנו לטפל בפניה, והיא לא דורשת טיפול על ידי גורם נוסף.</td></tr><tr><td><img src='media/indexMedia/saveandsend.png'/></td><td>שומר את הפניה, יאפשר לנו להקצות אותה לגורם אחר ביחידה.</td><td>○ אם הפניה דורשת טיפול של גורם אחר ביחידה, אליו נרצה להעביר אותה.&nbsp;</td></tr></tbody></table><p><a id='download-btn' class='download-btn info-btn' title='saveButtons' href='/media/indexMedia/saveButtons.png' download='saveButtons.png'> שמור טבלה <img src='media/indexMedia/download.png'/> </a></p>",
                "instruction": "הפניה נפתרה! שמור וסגור אותה",
                "interactionType": "click",
                "width": "8%",
                "height": "3%",
                "right": "27%",
                "top": "12.2%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "",
                "instruction": ""
            }
        ]
    ],
    [
        [
            {
                "section": "<p>לעיתים קרובות נקבל פניות שהטיפול בהן הוא באחריות גוף אחר ביחידה. במקרה כזה, יהיה עלינו להקצות את הפניה לאותו גוף. הקצאה נכונה של פניות חשובה מאוד, ומונעת עיכוב מיותר.</p><p>לשם ניתוב נכון של פניה, עלינו להבין לעומק את מהות הפניה.</p><img src='media/indexMedia/questionCard.png' id='question-card' class='card-img question-card full-img' onclick='flipCard()'/>",
                "instruction": ""
            }
        ],
        [
            {
                "section": "<p>חזרנו לתצוגה הראשית של המשתמש שלנו, נבחר פניה לטיפול וניכנס לתוכה.</p>",
                "instruction": "לחץ על הפניה המסומנת במסך התרגול",
                "interactionType": "click",
                "width": "94%",
                "height": "3.4%",
                "right": "2%",
                "top": "59.3%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>עם פתיחת הפניה ניתן לראות את פרטי הפונה (במקרה הזה הפניה הגיעה מפונה שכבר מזוהה בCRM ולכן נדרש רק לוודא שאכן מדובר במלש\"ב שזוהה אוטומטית ולסמן את הצ'קבוקס \"האם אומתו פרטים\")</p>",
                "instruction": "סמן את הצ'קבוקס \"האם אומתו פרטים\"",
                "interactionType": "click",
                "width": "2%",
                "height": "2.5%",
                "right": "80.9%",
                "top": "64.3%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>כדי לטפל בפניה ניגש למקטע ההתכתבות ומקטע הקבצים (על מנת להבין את מהות הפניה ומי המלש\"ב ששלח אותה).</p>",
                "instruction": "לחץ על הגלגלת במסך התרגול על מנת לגלול למקטעים הרלוונטיים",
                "interactionType": "click",
                "width": "2%",
                "height": "14.6%",
                "right": "98%",
                "top": "29.2%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p><img class='text-img detail-img' src='media/indexMedia/puzzle3.png'/> לאחר שקראנו את ההתכתבות וצפינו בקבצים, הבנו מה מהות הפניה וכעת ניתן לסווג אותה בשלשה.</p>",
                "instruction": "לחץ על הגלגלת במסך התרגול על מנת לגלול לסיווג הפניה",
                "interactionType": "click",
                "width": "2%",
                "height": "12%",
                "right": "98%",
                "top": "67.4%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>נבחר את התחום. </p>",
                "instruction": "לחץ על השדה \"תחום\"",
                "interactionType": "click",
                "width": "10%",
                "height": "2.2%",
                "right": "50.8%",
                "top": "41%",
                "isChangeScreen": "false",
                "isBreak": "false"
            },
            {
                "section": "",
                "instruction": "והקש Enter",
                "interactionType": "key",
                "correctInput": "Enter",
                "clickAlternate": "false",
                "width": "0%",
                "height": "0%",
                "right": "0%",
                "top": "0%",
                "isChangeScreen": "true",
                "isBreak": "false"
            },
            {
                "section": "",
                "instruction": "בחר את התחום \"לחימה- נשים\"",
                "interactionType": "click",
                "correctInput": "",
                "width": "44.2%",
                "height": "4%",
                "right": "52.2%",
                "top": "46.6%",
                "isChangeScreen": "true",
                "isBreak": "false"
            },
            {
                "section": "<p>נבחר את תת התחום.</p>",
                "instruction": "לחץ על השדה \"תת תחום\"",
                "interactionType": "click",
                "width": "10%",
                "height": "2.2%",
                "right": "52.2%",
                "top": "34%",
                "isChangeScreen": "false",
                "isBreak": "false"
            },
            {
                "section": "",
                "instruction": "הקש Enter",
                "interactionType": "key",
                "correctInput": "Enter",
                "clickAlternate": "false",
                "width": "0%",
                "height": "0%",
                "right": "0%",
                "top": "0%",
                "isChangeScreen": "true",
                "isBreak": "false"
            },
            {
                "section": "",
                "instruction": "בחר את תת התחום \"דין אישה כדין גבר\"",
                "interactionType": "click",
                "width": "44.2%",
                "height": "4%",
                "right": "52.2%",
                "top": "59.7%",
                "isChangeScreen": "true",
                "isBreak": "false"
            },
            {
                "section": "<p>נבחר את השאלה.</p>",
                "instruction": "לחץ על השדה \"שאלה\"",
                "interactionType": "click",
                "width": "10%",
                "height": "2.2%",
                "right": "52.2%",
                "top": "38.6%",
                "isChangeScreen": "false",
                "isBreak": "false"
            },
            {
                "section": "",
                "instruction": "הקש Enter",
                "interactionType": "key",
                "correctInput": "Enter",
                "clickAlternate": "false",
                "width": "0%",
                "height": "0%",
                "right": "0%",
                "top": "0%",
                "isChangeScreen": "true",
                "isBreak": "false"
            },
            {
                "section": "",
                "instruction": "בחר את השאלה \"דין אישה כדין גבר\"",
                "interactionType": "click",
                "width": "9%",
                "width": "44.2%",
                "height": "4%",
                "right": "52.2%",
                "top": "50%",
                "isChangeScreen": "true",
                "isBreak": "false"
            },
            {
                "section": "<p>נדרש גם להזין את תיאור הטיפול בפניה.</p>",
                "instruction": "לחץ על הגלגלת על מנת לגלול למקטע \"תיאור הטיפול בפניה\"",
                "interactionType": "click",
                "width": "2%",
                "height": "12%",
                "right": "98%",
                "top": "32.4%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "",
                "instruction": "העתק את הטקסט הבא לתוך תיאור הטיפול בפניה: <strong title='לחץ כדי להעתיק' onmouseover=\"selectText()\" onclick='copyText()' id='to-copy' class='to-copy'>050-1234567 היי, הנ\"ל שלחה טופס 16, מעבירה לכם להמשך טיפול. תודה</strong>",
                "interactionType": "type",
                "correctInput": "050-1234567 היי, הנ\"ל שלחה טופס 16, מעבירה לכם להמשך טיפול. תודה",
                "width": "47%",
                "height": "11%",
                "right": "49%",
                "top": "76.5%",
                "isChangeScreen": "true",
                "isBreak": "false"
            },
            {
                "section": "<p>בפניה שלפנינו הטיפול הנדרש הוא העברת הפניה לגורם מטפל אחר במיטב.</p><hr /><p>בשדה \"הקצאה לצוות\" (תחת \"הקצאת הטיפול בפניה\") כבר מוצע לנו צוות מטפל אליו מומלץ להקצות את הפניה (במקרה שהפניה לא אמורה להיות מטופלת על-ידי הצוות שלנו).</p><p>כל פניה ניתן להקצות לרשימה מוגבלת של צוותים, שנקבעת בהתאם לשלשה של הפניה.</p><p>כדי לצפות ברשימת הצוותים אליהם ניתן להקצות את הפניה, נסמן את השדה \"הקצאה לצוות\" ונלחץ על Backspace. לאחר מכן נלחץ על Enter או על זכוכית המגדלת.</p>",
                "instruction": "לחץ על השדה \"הקצאה לצוות\"",
                "interactionType": "click",
                "width": "24.8%",
                "height": "2.2%",
                "right": "13.8%",
                "top": "58.5%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "",
                "instruction": "הקש Backspace (מקש מחק ←) במקלדת",
                "interactionType": "key",
                "correctInput": "Backspace",
                "clickAlternate": "false",
                "width": "0%",
                "height": "0%",
                "right": "0%",
                "top": "0%",
                "isChangeScreen": "false",
                "isBreak": "false"
            },
            {
                "section": "",
                "instruction": "הקש Enter במקלדת",
                "interactionType": "key",
                "correctInput": "Enter",
                "clickAlternate": "false",
                "width": "0%",
                "height": "0%",
                "right": "0%",
                "top": "0%",
                "isChangeScreen": "true",
                "isBreak": "false"
            },
            {
                "section": "<p>נפתחה רשימה של צוותים להקצאה ממנה ניתן לבחור את הצוות הרלוונטי.</p>",
                "instruction": "בחר בצוות \"מדור נשים\"",
                "interactionType": "click",
                "width": "24.8%",
                "height": "2.2%",
                "right": "13.8%",
                "top": "60.5%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>כל הכבוד! סיימנו למלא את כל שדות החובה- השלשה של הפניה ותיאור הטיפול בפניה בצד שלנו. כעת נלחץ על כפתור \"שמור והקצה\", על מנת להעביר את הפניה לגורם שבחרנו.</p>",
                "instruction": "שמור והקצה את הפניה",
                "interactionType": "click",
                "width": "8%",
                "height": "3%",
                "right": "51%",
                "top": "12%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>עבודה טובה! הפניה הוקצתה לגורם שבחרנו, ונופנה בחזרה לתצוגה בה היינו.</p>",
                "instruction": "",
                "isBreak": "true"
            }
        ]
    ],
    [
        [
            {
                "section": "<p>לאחר שנתנו תשובה סופית לפניה, והיא אינה דורשת טיפול נוסף מאף גורם, <strong>חשוב מאוד שנזכור לסגור את הפניה</strong>. במקרה בו <em>נשמור</em> ולא נדאג <em>לסגור</em> את הפניה, המלש\"ב לא יקבל מענה ולא ידע כי פנייתו טופלה.</p><p>נתחיל מהתצוגה הראשית של המשתמש שלנו.</p><hr><p>נבחר פניה לסגירה וניכנס לתוכה.</p>",
                "instruction": "בחר את הפניה המסומנת",
                "interactionType": "click",
                "width": "94%",
                "height": "3.4%",
                "right": "2%",
                "top": "65%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>נראה כי לפניה כבר יש נושא. מכיוון שהגיעה לצוות שלנו, ולא נוצרה על ידינו, נציג אחר כבר סיווג אותה מוקדם יותר.</p><hr><p>כדי להבין מה קרה עם הפניה לפני שהוקצתה לצוות שלנו נביט בהיסטוריית תיאור הטיפול בפניה.</p>",
                "instruction": "לחץ על הגלגלת על מנת לגלול מטה ולצפות ב\"בהיסטוריית תיאור הטיפול בפניה\"",
                "interactionType": "click",
                "width": "2%",
                "height": "15%",
                "right": "98%",
                "top": "29.2%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>לאחר שהבנו את היסטורית הפניה, נטפל בה ונתעד את הטיפול ב<strong>תיאור הטיפול בפניה</strong>.</p><p>הדברים שנרשום ב<strong>תיאור הטיפול בפניה </strong>יעברו ל<strong>היסטוריית תיאור הטיפול</strong> <strong>בפניה</strong> לאחר סגירת הפניה או הקצאתה למדור אחר.</p><hr /><p>חשוב לשים לב שמלל התיאור מעביר את <strong>המשמעות</strong> של הפעולות שעשינו על הפניה, ואינן רק סיכום טכני שלהן. תיאור פניה צריך להעביר באופן ברור מה היה תהליך הטיפול לאדם שקורא אותו <strong>ללא הקשר קודם</strong>.</p>",
                "instruction": "העתק את הטקסט הבא לתוך תיאור הטיפול בפניה: <strong title='לחץ כדי להעתיק' onmouseover=\"selectText()\" onclick='copyText()' id='to-copy' class='to-copy'>תקלה באתר מנעה את העלאת הקובץ, התקלה טופלה.</strong>",
                "interactionType": "type",
                "correctInput": "תקלה באתר מנעה את העלאת הקובץ, התקלה טופלה.",
                "clickAlternate": "true",
                "width": "44%",
                "height": "10.8%",
                "right": "49%",
                "top": "56%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>נסגור את הפניה בלחיצה על כפתור \"שמור וסגור\".</p>",
                "instruction": "לחץ על כפתור \"שמור וסגור\" על מנת לסגור את הפניה",
                "interactionType": "click",
                "width": "8.2%",
                "height": "3%",
                "right": "36%",
                "top": "12%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>לאחר הלחיצה נפתח מסך ניהול סגירת הפניה.</p><hr /><p>בלחיצה על השדה \"תבנית הודעה\" תיפתח רשימה של תבניות תשובה אוטומטיות (מללי תשובה אוטומטיים שקשורים לנושאי פניה ספציפיים).</p>",
                "instruction": "לחץ על השדה \"תבנית הודעה\" על מנת לפתוח את רשימת תבניות התשובה האוטומטיות",
                "interactionType": "click",
                "width": "13%",
                "height": "2.2%",
                "right": "18.4%",
                "top": "18.6%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "",
                "instruction": "בחר את תבנית התשובה הראשונה",
                "interactionType": "click",
                "width": "19.4%",
                "height": "3%",
                "right": "18.6%",
                "top": "20.2%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>השדה \"האם לשלוח הודעה ללקוח\" (כן/לא) מסמן האם תישלח <strong>הודעת</strong> <strong>SMS </strong> למועמד בסגירת הפניה.</p><img src='media/indexMedia/smsCard.png' class='full-img'/><p>במקרה ולמשתמש שלנו יש את ההרשאות הנדרשות לכך, ניתן להזין ידנית את מלל ההודעה שתישלח או לערוך תשובה על בסיס תבנית הודעה קיימת (בשדה \"הודעה ללקוח\").</p>",
                "instruction": "לחץ על \"שמור\" במסך התרגול",
                "interactionType": "click",
                "width": "6.4%",
                "height": "3%",
                "right": "84.8%",
                "top": "44.6%",
                "isChangeScreen": "true",
                "isBreak": "true"
            },
            {
                "section": "<p>לאחר לחיצה על \"שמור\" במסך ניהול סגירת הפניה, הפניה תיסגר ואנחנו נחזור לתצוגה שממנה נכנסנו לפניה.</p>",
                "instruction": ""
            }
        ],
    ],
    [
        [
            {
                "section": "<p>ה(Service Level Agreement)-SLA הינו הסכם לרמת שירות בין נותני השירות שבמיטב ללקוחות שלה (אוכלוסיית המלש\"בים בישראל).</p><img src='media/indexMedia/handshake.jpg' class='full-img'/><p>הSLA נועד לעזור ליחידת מיטב לממש את חזונה- יצירת תהליך גיוס אישי, חדשני ומדויק עבור כל מלש\"ב.</p><p>כחלק מהמדדים שמשקפים את איכות השירות שניתן ללקוח (וכחלק מהSLA) נמדד זמן התגובה ללקוח.</p><p>לפי החלטת היחידה, <strong>הזמן המקסימלי לטיפול ברוב הפניות שמתקבלות הינו שבוע.</strong> כלומר, תוך שבוע מרגע הפניה חייב המלש\"ב לקבל מענה.</p><p>ישנם תחומי פניות שבהם נדרש זמן נוסף לטיפול והSLA שהוגדר להם ארוך יותר (בעיקר פניות בתחום הרפואי/בריאות הנפש).</p><p>מה שמגדיר את הSLA במערכת הCRM עבור כל פניה זאת השלשה של הפניה (נושא הפניה).</p>",
                "instruction": ""
            }
        ],
        [
            {
                "section": "<img src='media/indexMedia/runningClock.png' class='detail-img'/><p>השעון מתחיל לרוץ ברגע שסיווגנו את הפניה בנושא מסוים.</p><p>את הזמן שנשאר לטיפול בפניה ניתן לראות תחת \"SLA ישים\" בשדה \"פתור ב\":</p><p><img class='status-img' src='media/indexMedia/SLA.png'/></p><p>הזמן שנותר לטיפול מוצג בפורמט ימים/שעות/דקות/שניות.</p><p>בנוסף, קיים סטטוס שמראה עד כמה אנחנו עומדים במדדי הזמן לטיפול בפניה.</p><p>פניות שנסגרו בזמן שהוקצב לטיפול יופיעו עם סטטוס \"הצליח\".</p><p><img class='status-img' src='media/indexMedia/successful.png'/></p><p>פניות שנותרו פחות מ-24 שעות לטפל בהן יקבלו סטטוס \"התראה לפני חריגה\", והזמן הנותר לטיפול בהן יופיע בצהוב בשדה \"פתור ב\".</p><p><img class='status-img' src='media/indexMedia/urgent.png'/></p><p>פניות שחרגנו מזמן הטיפול בהן יסומנו בסטטוס \"פג תוקף\"</p><p><img class='status-img' src='media/indexMedia/expired.png'/></p>",
                "instruction": ""
            }
        ]
    ]
];

function copyText(event) {
    var range = document.createRange();
    range.selectNode(document.getElementById("to-copy"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    alert("העתקת את הטסקט: " + range);
}

function selectText() {
    var range = document.createRange();
    range.selectNode(document.getElementById("to-copy"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
}

var isFlipped = false;
function flipCard(event) {
    if (!isFlipped) {
        $("#question-card").css("transform", "rotateY(180deg)");
        setTimeout(function () {
            $("#question-card").attr("src", "media/indexMedia/answerCard.png");
        }, 300)
        isFlipped = true;
    } else {
        $("#question-card").css("transform", "rotateY(0deg)");
        setTimeout(function () {
            $("#question-card").attr("src", "media/indexMedia/questionCard.png");
        }, 300)
        isFlipped = false;
    }
}
//matrix containing the number of crm screenshot each of the pages should open with
//an array for each chapter
//which contains an array for each page
//which contains the correct image number
var matOpeningScreen = [
    [1],
    [1, 6],
    [21, 27],
    [44, 44],
    [61],
    [68, 68]
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
    // if (!(sessionStorage.getItem("wasFinished") === null)) {
    //     $("#start-btn").css("pointer-events", "none");
    //     $("#back-to-mtv").hide();
    //     $("#finished-box").show();
    //     $("#play-again").on("click", allowToPlayAgain);
    //     //$("#box-back-to-mtv").on("click" function(){
    //     //redirect
    //     //});
    // } else {
        $("#color-scheme").on("click", changeColor);
    $("#start-btn").on("click", hideStartScreen);
    countContent();
    // }
});

function countContent() {
    progress = 0;
    contentCount = 0;
    for (var chapterIndex = 0; chapterIndex < matContent.length; chapterIndex++) {
        for (var pageIndex = 0; pageIndex < matContent[chapterIndex].length; pageIndex++) {
            for (var sectionIndex = 0; sectionIndex < matContent[chapterIndex][pageIndex].length; sectionIndex++) {
                contentCount += matContent[chapterIndex][pageIndex][sectionIndex]["section"].length;
                matContent[chapterIndex][pageIndex][sectionIndex]["progress"] = contentCount;
            }
        }
    }

}

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
    $("#instructions-video").trigger('pause');
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
    $("#instructions-video").trigger('play');
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
    updateProgressbar(Number(matContent[currChapter][currPage][currSection]["progress"]));
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
            updateProgressbar(Number(matContent[currChapter][currPage][currSection]["progress"]));
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
        updateProgressbar(Number(matContent[currChapter][currPage][currSection]["progress"]));
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
        if (matContent[currChapter][currPage][currSection]["isBreak"] === "true" && matContent[currChapter][currPage][currSection]["section"] !== "") {
            hr = "<hr>";
        }
        $("#info-content p").css("color", "#5a5a5a");
        updateProgressbar(Number(matContent[currChapter][currPage][currSection]["progress"]));
        $("#info-content").append(hr + matContent[currChapter][currPage][currSection]["section"]);
        $("#info-content").append("<p id='instructions' class='instruction'>" + matContent[currChapter][currPage][currSection]["instruction"] + "</p>");
    }
    showFooter();
    $("#info-container").animate({
        scrollTop: prevScrollHeight
    }, 500);
}

function updateProgressbar(progress) {
    $("#progressbar").progressbar({
        value: progress / contentCount * 100
    });
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
    $("#practice-screen-content").append("<img src='media/indexMedia/crmScreenshots/s (" + currScreen + ").png' id='screen-img' class='fullscreen'/>");
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
                        $("#screen-img").attr("src", "media/indexMedia/crmScreenshots/s (" + ++currScreen + ").png");
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
                    if ($(this).val().includes(correctInput) || (correctInput === "any" && $(this).val())) {
                        $(this).css("border", "");
                        $(this).val("");
                        showNextSection();
                        if (isChangeScreen) {
                            $("#screen-img").attr("src", "media/indexMedia/crmScreenshots/s (" + ++currScreen + ").png");
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
                            $("#screen-img").attr("src", "media/indexMedia/crmScreenshots/s (" + ++currScreen + ").png");
                        }
                        interactionManager();
                    }
                });
                if (hasAlternate) {
                    $("#clickable").show();
                    $("#clickable").on("click", function (event) {
                        showNextSection();
                        if (isChangeScreen) {
                            $("#screen-img").attr("src", "media/indexMedia/crmScreenshots/s (" + ++currScreen + ").png");
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
            $("#next-btn").on("click", goToExercise);
            $("#next-btn").prepend("<span id='end-text'>לתרגול</span>");
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
            smallerText
            ===========
            description:
            * get current font size
            * if font size is bigger than 12, reduce it by 2
            ================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function smallerText(event) {
    var currFontSize = getComputedStyle(document.documentElement).getPropertyValue('--font-size');
    currFontSize = Number(currFontSize.slice(0, -2));
    if (currFontSize > 12) {
        currFontSize -= 2;
        document.documentElement.style.setProperty('--font-size', currFontSize + "px");
    }
}

/*
            biggerText
            ==========
            description:
            * get current font size
            * if font size is smaller than 36, enlarge it by 2
            ==================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function biggerText(event) {
    var currFontSize = getComputedStyle(document.documentElement).getPropertyValue('--font-size');
    currFontSize = Number(currFontSize.slice(0, -2));
    if (currFontSize < 36) {
        currFontSize += 2;
        document.documentElement.style.setProperty('--font-size', currFontSize + "px");
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
        document.documentElement.style.setProperty('--header-color1', '#fd6b86');
        document.documentElement.style.setProperty('--sidebar-color2', '#ff8484');
        document.documentElement.style.setProperty('--start-btn-color3', '#f54c6c');
        document.documentElement.style.setProperty('--scrollbar-color4', '#a52c50');
        document.documentElement.style.setProperty('--menu-item-color5', '#830e27');
        document.documentElement.style.setProperty('--hover-color6', '#580020');

        // $(".sap-icon").attr("src", "media/indexMedia/sapPink.png");
        $("body").css("background-image", "url(media/indexMedia/backgroundPink.png)");
        $("#color-scheme").removeClass("change-to-pink");
        $("#color-scheme").addClass("change-to-green");

    } else if ($("#color-scheme").hasClass("change-to-green")) {
        document.documentElement.style.setProperty('--header-color1', '#83B330');
        document.documentElement.style.setProperty('--sidebar-color2', '#8BBF2C');
        document.documentElement.style.setProperty('--start-btn-color3', '#5D9134');
        document.documentElement.style.setProperty('--scrollbar-color4', '#3A641C');
        document.documentElement.style.setProperty('--menu-item-color5', '#294714');
        document.documentElement.style.setProperty('--hover-color6', '#172b0a');
        // $(".sap-icon").attr("src", "media/indexMedia/sapGreen.png");
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
var isCursorFlipped = false;
function setFalseCursorLocation(interactionTop, interactionRight, interactionWidth, interactionHeight) {
    $("#false-cursor").show();
    if (Number(interactionRight.slice(0, -1)) > 97) {
        isCursorFlipped = true;
        $("#false-cursor").css("animation", "clickThisFlipped 2s infinite");
    } else if (isCursorFlipped) {
        $("#false-cursor").css("animation", "clickThis 2s infinite");
    }
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
            goToExercise
            ============
            description:
            * 
            * 
            ============================================================
            programmer: Shira Shmuely
            date: 25/10/2020
*/
function goToExercise(event) {
    window.location.replace("sortGame.html");
    // sessionStorage.setItem("wasFinished", "finished");
    // location.reload();
}