import * as Icons from "@expo/vector-icons";

export const COLORS = {
  blue: "#0091ff",
  lblue: "#d7e8f5",
};

export const getMenuItems = (lang) => [
  {
    title: lang === "hebrew" ? "חדשות" : "أخبار",
    icon: <Icons.Ionicons name="megaphone-outline" size={20} color="#333" />,
  },
  {
    title: lang === "hebrew" ? "זימון תורים" : "حجز الموعد",
    icon: <Icons.AntDesign name="calendar" size={20} color="#333" />,
  },
  {
    title:
      lang === "hebrew"
        ? "צפייה בהיתרים ורשיונות תעסוקה"
        : "مشاهدة التصاريح وتراخيص العمل",
    icon: (
      <Icons.MaterialCommunityIcons name="stamper" size={20} color="#333" />
    ),
    href: "Stampler",
  },
  {
    title: lang === "hebrew" ? "הגשת בקשה להיתר" : "تقديم طلب للحصول على تصريح",
    icon: <Icons.Foundation name="clipboard-pencil" size={20} color="#333" />,
  },
  {
    title: lang === "hebrew" ? "הזנת דרכון אמריקאי" : "تحديث جواز سفر أمريكي",
    icon: <Icons.Ionicons name="megaphone-outline" size={20} color="#333" />,
  },
  {
    title: lang === "hebrew" ? "תשלומי אגרות" : "دفع الرسوم",
    icon: (
      <Icons.MaterialCommunityIcons name="hand-coin" size={20} color="#333" />
    ),
  },
  {
    title: lang === "hebrew" ? "בדיקת סטטוס מניעה" : "فحص وضع المنع",
    icon: <Icons.SimpleLineIcons name="check" size={20} color="#333" />,
    href: "Form",
  },
  {
    title:
      lang === "hebrew"
        ? "בקשה להסרת מניעה לצורך כניסהלישראל"
        : "تقديم طلب لرفع المنع الأمني لدخول إسرائيل",
    icon: <Icons.AntDesign name="flag" size={20} color="#333" />,
  },
  {
    title:
      lang === "hebrew"
        ? `בקשה להסרת מניעה לצורך יציאה לחו"ל`
        : "تقديم طلب لرفع المنع للسفر للخارج",
    icon: <Icons.SimpleLineIcons name="plane" size={20} color="#333" />,
  },
  {
    title: lang === "hebrew" ? "העברה בנקאית" : "التحويل المصرفي",
    icon: <Icons.Feather name="edit-2" size={20} color="#333" />,
  },
  {
    title: lang === "hebrew" ? "אזור התעסוקה" : "نظام التشغيل",
    icon: <Icons.MaterialIcons name="engineering" size={20} color="#333" />,
  },
  {
    title:
      lang === "hebrew"
        ? "מדיניות הפרטיות Privacy Policy"
        : "سياسة الخصوصية privacy policy",
    icon: <Icons.Octicons name="shield-check" size={20} color="#333" />,
  },
  {
    title: lang === "hebrew" ? "צור קשר" : "إتّصل بنا",
    icon: <Icons.Fontisto name="email" size={20} color="#333" />,
  },
  {
    title: lang === "hebrew" ? "התנתק/י" : "الخروج",
    icon: <Icons.AntDesign name="poweroff" size={20} color={COLORS.blue} />,
    type: "logout",
  },
];

export const getProfileDetails = (lang) => ({
  topText: lang === "hebrew" ? "שלום ראמי חמדאן!" : "عربيه",
  bottomText: lang === "hebrew" ? "פרטים אישיים" : "تفاصيل شخصية",
});

export const getBottomList = (lang) => {
  const isHebrew = lang === "hebrew";
  return [
    {
      title: isHebrew ? "אזור התעסוקה" : "نظام التشغيل",
      icon: (
        <Icons.MaterialIcons name="engineering" size={25} color={COLORS.blue} />
      ),
    },
    {
      title: isHebrew ? "העברה בנקאית" : "التحويل المصرفي",
      icon: <Icons.Feather name="edit-2" size={25} color={COLORS.blue} />,
    },
    {
      title: isHebrew ? "הסרת מניעה בטחונית" : "رفع المنع الأمني",
      icon: <Icons.Feather name="unlock" size={25} color={COLORS.blue} />,
    },
    {
      title: isHebrew ? "בדיקת סטטוס מניעה" : "فحص وضع المنع",
      icon: (
        <Icons.SimpleLineIcons name="check" size={25} color={COLORS.blue} />
      ),
    },
    {
      title: isHebrew ? "תשלומי אגרות" : "دفع الرسوم",
      icon: (
        <Icons.MaterialCommunityIcons
          name="hand-coin"
          size={25}
          color={COLORS.blue}
        />
      ),
    },
    {
      title: isHebrew ? "הזנת דרכון אמריקאי" : "تحديث جواز سفر أمريكي",
      icon: (
        <Icons.SimpleLineIcons name="notebook" size={25} color={COLORS.blue} />
      ),
    },
    {
      title: isHebrew ? "הגשת בקשה" : "تقديم طلب للحصول على تصريح",
      icon: (
        <Icons.Foundation
          name="clipboard-pencil"
          size={25}
          color={COLORS.blue}
        />
      ),
    },
    {
      title: isHebrew ? "צפייה בהיתרים" : "التصاريح",
      icon: (
        <Icons.MaterialCommunityIcons
          name="stamper"
          size={25}
          color={COLORS.blue}
        />
      ),
      href: "ProfileDetails",
    },
  ];
};
