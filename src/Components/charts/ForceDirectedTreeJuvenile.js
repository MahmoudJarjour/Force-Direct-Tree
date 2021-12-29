import * as am4core from "@amcharts/amcharts4/core";
import * as am4plugins_forceDirected from "@amcharts/amcharts4/plugins/forceDirected";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import React, { useLayoutEffect } from "react";
import { withTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";

am4core.useTheme(am4themes_animated);

const treeAr = [
  {
    name: "Flora",
    children: [
      {
        name: "Black Tea",
        value: 1,
      },
      {
        name: "Floral",
        children: [
          {
            name: "Chamomile",
            value: 1,
          },
          {
            name: "Rose",
            value: 1,
          },
          {
            name: "Jasmine",
            value: 1,
          },
        ],
      },
    ],
  },
  {
    name: "Fruity",
    children: [
      {
        name: "Berry",
        children: [
          {
            name: "Blackberry",
            value: 1,
          },
          {
            name: "Raspberry",
            value: 1,
          },
          {
            name: "Blueberry",
            value: 1,
          },
          {
            name: "Strawberry",
            value: 1,
          },
        ],
      },
      {
        name: "Dried Fruit",
        children: [
          {
            name: "Raisin",
            value: 1,
          },
          {
            name: "Prune",
            value: 1,
          },
        ],
      },
      {
        name: "Other Fruit",
        children: [
          {
            name: "Coconut",
            value: 1,
          },
          {
            name: "Cherry",
            value: 1,
          },
          {
            name: "Pomegranate",
            value: 1,
          },
          {
            name: "Pineapple",
            value: 1,
          },
          {
            name: "Grape",
            value: 1,
          },
          {
            name: "Apple",
            value: 1,
          },
          {
            name: "Peach",
            value: 1,
          },
          {
            name: "Pear",
            value: 1,
          },
        ],
      },
      {
        name: "Citrus Fruit",
        children: [
          {
            name: "Grapefruit",
            value: 1,
          },
          {
            name: "Orange",
            value: 1,
          },
          {
            name: "Lemon",
            value: 1,
          },
          {
            name: "Lime",
            value: 1,
          },
        ],
      },
    ],
  },
  {
    name: "Sour/Fermented",
    children: [
      {
        name: "Sour",
        children: [
          {
            name: "Sour Aromatics",
            value: 1,
          },
          {
            name: "Acetic Acid",
            value: 1,
          },
          {
            name: "Butyric Acid",
            value: 1,
          },
          {
            name: "Isovaleric Acid",
            value: 1,
          },
          {
            name: "Citric Acid",
            value: 1,
          },
          {
            name: "Malic Acid",
            value: 1,
          },
        ],
      },
      {
        name: "Alcohol/Fremented",
        children: [
          {
            name: "Winey",
            value: 1,
          },
          {
            name: "Whiskey",
            value: 1,
          },
          {
            name: "Fremented",
            value: 1,
          },
          {
            name: "Overripe",
            value: 1,
          },
        ],
      },
    ],
  },
  {
    name: "Green/Vegetative",
    children: [
      {
        name: "Olive Oil",
        value: 1,
      },
      {
        name: "Raw",
        value: 1,
      },
      {
        name: "Green/Vegetative",
        children: [
          {
            name: "Under-ripe",
            value: 1,
          },
          {
            name: "Peapod",
            value: 1,
          },
          {
            name: "Fresh",
            value: 1,
          },
          {
            name: "Dark Green",
            value: 1,
          },
          {
            name: "Vegetative",
            value: 1,
          },
          {
            name: "Hay-like",
            value: 1,
          },
          {
            name: "Herb-like",
            value: 1,
          },
        ],
      },
      {
        name: "Beany",
        value: 1,
      },
    ],
  },
  {
    name: "Other",
    children: [
      {
        name: "Papery/Musty",
        children: [
          {
            name: "Stale",
            value: 1,
          },
          {
            name: "Cardboard",
            value: 1,
          },
          {
            name: "Papery",
            value: 1,
          },
          {
            name: "Woody",
            value: 1,
          },
          {
            name: "Moldy/Damp",
            value: 1,
          },
          {
            name: "Musty/Dusty",
            value: 1,
          },
          {
            name: "Musty/Earthy",
            value: 1,
          },
          {
            name: "Animalic",
            value: 1,
          },
          {
            name: "Meaty Brothy",
            value: 1,
          },
          {
            name: "Phenolic",
            value: 1,
          },
        ],
      },
      {
        name: "Chemical",
        children: [
          {
            name: "Bitter",
            value: 1,
          },
          {
            name: "Salty",
            value: 1,
          },
          {
            name: "Medicinal",
            value: 1,
          },
          {
            name: "Petroleum",
            value: 1,
          },
          {
            name: "Skunky",
            value: 1,
          },
          {
            name: "Rubber",
            value: 1,
          },
        ],
      },
    ],
  },
  {
    name: "Roasted",
    children: [
      {
        name: "Pipe Tobacco",
        value: 1,
      },
      {
        name: "Tobacco",
        value: 1,
      },
      {
        name: "Burnt",
        children: [
          {
            name: "Acrid",
            value: 1,
          },
          {
            name: "Ashy",
            value: 1,
          },
          {
            name: "Smoky",
            value: 1,
          },
          {
            name: "Brown, Roast",
            value: 1,
          },
        ],
      },
      {
        name: "Cereal",
        children: [
          {
            name: "Grain",
            value: 1,
          },
          {
            name: "Malt",
            value: 1,
          },
        ],
      },
    ],
  },
  {
    name: "Spices",
    children: [
      {
        name: "Pungent",
        value: 1,
      },
      {
        name: "Pepper",
        value: 1,
      },
      {
        name: "Brown Spice",
        children: [
          {
            name: "Anise",
            value: 1,
          },
          {
            name: "Nutmeg",
            value: 1,
          },
          {
            name: "Cinnamon",
            value: 1,
          },
          {
            name: "Clove",
            value: 1,
          },
        ],
      },
    ],
  },
  {
    name: "Nutty/Cocoa",
    children: [
      {
        name: "Nutty",
        children: [
          {
            name: "Peanuts",
            value: 1,
          },
          {
            name: "Hazelnut",
            value: 1,
          },
          {
            name: "Almond",
            value: 1,
          },
        ],
      },
      {
        name: "Cocoa",
        children: [
          {
            name: "Chocolate",
            value: 1,
          },
          {
            name: "Dark Chocolate",
            value: 1,
          },
        ],
      },
    ],
  },
  {
    name: "Sweet",
    children: [
      {
        name: "Brown Sugar",
        children: [
          {
            name: "Molasses",
            value: 1,
          },
          {
            name: "Maple Syrup",
            value: 1,
          },
          {
            name: "Caramelized",
            value: 1,
          },
          {
            name: "Honey",
            value: 1,
          },
        ],
      },
      {
        name: "Vanilla",
        value: 1,
      },
      {
        name: "Vanillin",
        value: 1,
      },
      {
        name: "Overall Sweet",
        value: 1,
      },
      {
        name: "Sweet Aromatics",
        value: 1,
      },
    ],
  },
];

const tree = [
  {
    name: "رئاسة الجمهوريّة",
    children: [
      {
        name: "الأمانة العامة لرئاسة الجمهورية",
        value: 1,
      },
    ],
  },
  {
    name: "المجلس النيابي",
    children: [
      {
        name: "الأمانة العامة لرئاسة المجلس النيابي",
        value: 1,
      },
    ],
  },
  {
    name: "رئاسة الحكومة",
    children: [
      {
        name: "الأمانة العامة لرئاسة الحكومة",
        value: 1,
      },
      {
        name: "مجلس الجنوب",
        value: 1,
      },
      {
        name: "المجلس الوطني للسلامة المروريّة",
        value: 1,
      },
      {
        name: "المجلس الإقتصادي والاجتماعي",
        value: 1,
      },
      {
        name: "المجلس الأعلى للخصخصة",
        value: 1,
      },
      {
        name: "المجلس الأعلى للدفاع",
        value: 1,
      },
      {
        name: "المؤسسة العامّة لتشجيع الاستثمارات",
        value: 1,
      },
      {
        name: "المؤسسة العامّة لترتيب منطقة الضاحية الجنوبيّة (أليسار)",
        value: 1,
      },
      {
        name: "مؤسسة المحفوظات الوطنيّة",
        value: 1,
      },
      {
        name: "المؤسسة العامّة للأسواق الاستهلاكيّة",
        value: 1,
      },
      {
        name: "الهيئة العليا للإغاثة",
        value: 1,
      },
      {
        name: "الهيئة الوطنية لشؤون المرأة اللبنانيّة",
        value: 1,
      },
      {
        name: "الهيئة العامّة للمنطقة الاقتصادية الخاصّة في طرابلس",
        value: 1,
      },
      {
        name: "الصندوق الوطني للمهجرين",
        value: 1,
      },
      {
        name: "الإحصاء المركزي",
        value: 1,
      },
      {
        name: "المديريّة العامّة لأمن الدولة",
        value: 1,
      },
      {
        name: "الإفتاء السني",
        value: 1,
      },
      {
        name: "الإفتاء الجعفري",
        value: 1,
      },
      {
        name: "المجلس الإسلامي الشيعي الأعلى",
        value: 1,
      },
      {
        name: "المجلس الإسلامي العلوي",
        value: 1,
      },
      {
        name: "المجلس المذهبي لطائفة الموحدين الدروز",
        value: 1,
      },
      {
        name: "مشيخة عقل الطائفة الدرزيّة",
        value: 1,
      },
      {
        name: "الهيئة العليا للتأديب",
        value: 1,
      },
      {
        name: "ديوان المحاسبة",
        value: 1,
      },
      {
        name: "تعاونية موظفي الدولة - الادارة المركزية",
        value: 1,
      },

      {
        name: "مجلس الإنماء والإعمار",
        children: [
          {
            name: "صندوق التنمية الإقتصادية والاجتماعيّة",
            value: 1,
          },
        ],
      },
      {
        name: "المجلس الوطني للبحوث العلميّة",
        children: [
          {
            name: "المركز الوطني للبحوث الجيوفيزيائيّة",
            value: 1,
          },
          {
            name: "الهيئة العليا للطاقة الذريّة",
            value: 1,
          },
          {
            name: "المركز الوطني لعلوم البحار",
            value: 1,
          },
          {
            name: "المركز الوطني للإستشعار عن بعد",
            value: 1,
          },
        ],
      },
      {
        name: "التفتيش المركزي",
        children: [
          {
            name: "إدارة المناقصات",
            value: 1,
          },
        ],
      },
      {
        name: "مجلس الخدمة المدنيّة",
        children: [
          {
            name: "المعهد الوطني للإدارة",
            value: 1,
          },
          {
            name: "إدارة الأبحاث والتوجيه",
            value: 1,
          },
        ],
      },
    ],
  },
  {
    name: "وزارة العدل",
    children: [
      {
        name: "المديرية العامة لوزارة العدل",
        value: 1,
      },
      {
        name: "مجلس شورى الدولة",
        value: 1,
      },

      {
        name: "مجلس القضاء الأعلى",
        value: 1,
      },
    ],
  },
  {
    name: "المجلس الدستوري",
    value: 1,
  },
  {
    name: "وزارة الماليّة",
    children: [
      {
        name: "مديرية الماليّة العامّة",
        value: 1,
      },
      {
        name: "مديرية الواردات",
        value: 1,
      },
      {
        name: "مديرية الضريبة على القيمة المضافة",
        value: 1,
      },
      {
        name: "مديرية الصرفيات",
        value: 1,
      },
      {
        name: "مديرية الخزينة",
        value: 1,
      },
      {
        name: "مديرية الدين العام",
        value: 1,
      },
      {
        name: "مديرية الموازنة",
        value: 1,
      },
      {
        name: "مديرية المحاسبة العامّة",
        value: 1,
      },
      {
        name: "المديرية العامّة للشؤون العقاريّة",
        value: 1,
      },
      {
        name: "المديرية العامّة لليانصيب الوطني",
        value: 1,
      },
      {
        name: "المديريّة العامّة للجمارك",
        value: 1,
      },
      {
        name: "معهد باسل فليحان الاقتصادي والمالي",
        value: 1,
      },
      {
        name: "المؤسسة الوطنيّة لضمان الودائع",
        value: 1,
      },
      {
        name: "إدارة حصر التبغ والتنباك اللبنانيّة",
        value: 1,
      },

      {
        name: "مصرف لبنان",
        children: [
          {
            name: "هيئة الأسواق المالية",
            value: 1,
          },
          {
            name: "بورصة بيروت",
            value: 1,
          },
          {
            name: "كازينو لبنان",
            value: 1,
          },
          {
            name: "طيران الشرق الأوسط",
            value: 1,
          },
          {
            name: "شركة إنترا",
            value: 1,
          },
        ],
      },
    ],
  },
  {
    name: "وزارة الداخليّة والبلديات",
    children: [
      {
        name: "وزارة الداخليّة والبلديات - المديرية الإداريّة المشتركة",
        value: 1,
      },
      {
        name: "المديرية العامّة للإدارات والمجالس المحليّة",
        value: 1,
      },
      {
        name: "المديريّة العامّة للشؤون السياسية واللاجئين",
        value: 1,
      },
      {
        name: "المديريّة العامّة للأحوال الشخصيّة",
        value: 1,
      },
      {
        name: "المديريّة العامّة للدفاع المدني",
        value: 1,
      },
      {
        name: "هيئة ادارة السير والآليات والمركبات",
        value: 1,
      },
      {
        name: "المديريّة العامّة لقوى الأمن الداخلي",
        value: 1,
      },
      {
        name: "المديريّة العامّة لقوى الأمن العام",
        value: 1,
      },
      {
        name: "المديريّة المركزيّة لمكافحة المخدرات",
        value: 1,
      },
      {
        name: "جهاز أمن المطار",
        value: 1,
      },
      {
        name: "الشركة المشغّلة للمعاينة الميكانيكيّة",
        value: 1,
      },
      {
        name: "الشركة المشغّلة لعدادات الوقوف (parkmeter)",
        value: 1,
      },
      {
        name: "المحافظات",
        children: [
          {
            name: "محافظة جبل لبنان",
            value: 1,
          },
          {
            name: "محافظة بيروت",
            value: 1,
          },
          {
            name: "محافظة البقاع",
            value: 1,
          },
          {
            name: "محافظة الجنوب",
            value: 1,
          },
          {
            name: "محافظة الشمال",
            value: 1,
          },
          {
            name: "محافظة بعلبك - الهرمل",
            value: 1,
          },
          {
            name: "محافظة عكار",
            value: 1,
          },
          {
            name: "محافظة النبطية",
            value: 1,
          },
        ],
      },
    ],
  },
  {
    name: "وزارة الخارجيّة",
    children: [
      {
        name: "وزارة الخارجيّة - الأمانة العامة",
        value: 1,
      },
      {
        name: "مديرية الشؤون السياسية والقنصلية",
        value: 1,
      },
    ],
  },
  {
    name: "وزارة الأشغال العامّة والنقل",
    children: [
      {
        name: "وزارة الأشغال العامّة والنقل - المديريّة الإداريّة المشتركة",
      },
      {
        name: "المديريّة العامّة للنقل البري والبحري",
      },
      {
        name: "المديريّة العامّة للطرق والمباني",
      },
      {
        name: "المديريّة العامّة للطيران المدني",
      },
      {
        name: "الشركة المشغّلة لمواقف السيّارات في مطار رفيق الحريري الدولي",
      },
      {
        name: "المديريّة العامّة للتنظيم المدني",
      },
      {
        name: "مصلحة سكك الحديد والنقل المشترك",
      },
      {
        name: "إدارة واستثمار مرفأ بيروت",
      },
      {
        name: "مصلحة استثمار مرفأ صور",
      },
      {
        name: "مصلحة استثمار مرفأ صيدا",
      },
      {
        name: "مصلحة استثمار مرفأ طرابلس",
      },
      {
        name: "الشركة المشغّلة للسوق الحرّة (Duty Free)",
      },
    ],
  },
  {
    name: "وزارة الطاقة والمياه",
    children: [
      {
        name: "المديريّة العامّة للموارد المائيّة والكهربائيّة",
      },
      {
        name: " المديريّة العامّة للإستثمار",
      },
      {
        name: "المديريّة العامّة للنفط",
      },
      {
        name: "مؤسسة كهرباء لبنان",
      },
      {
        name: "مؤسسة كهرباء زحلة",
      },
      {
        name: "مؤسسة مياه بيروت وجبل لبنان",
      },
      {
        name: "مؤسسة مياه لبنان الشمالي",
      },
      {
        name: "مؤسسة مياه لبنان الجنوبي",
      },
      {
        name: "مؤسسة مياه البقاع",
      },
      {
        name: "المصلحة الوطنيّة لنهر الليطاني",
      },
      {
        name: "هيئة إدارة قطاع البترول",
      },
    ],
  },
  {
    name: "وزارة التربيّة والتعليم العالي",
    children: [
      {
        name: "المديريّة العامّة للتربية",
      },
      {
        name: "مديرية التعليم الأساسي",
      },
      {
        name: "مديرية التعليم الثانوي",
      },
      {
        name: "المديريّة العامّة للتعليم العالي",
      },
      {
        name: "المديريّة العامّة للتعليم المهني والتقني",
      },
      {
        name: "الجامعة اللبنانيّة",
      },
      {
        name: "المركز التربوي للبحوث والإنماء",
      },
    ],
  },
  {
    name: "وزارة الصحة",
    children: [
      {
        name: "مديرية الصحّة العامّة",
      },
      {
        name: "مديرية العناية الطبيّة",
      },
      {
        name: "مديرية الوقاية الصحيّة",
      },
      {
        name: "مديرية المختبر المركزي للصحة العامّة",
      },
      {
        name: "المستشفيات الحكوميّة",
        children: [
          {
            name: "مستشفى رفيق الحريري",
          },
          {
            name: "مستشفى بعبدا الجامعي الحكومي",
          },
          {
            name: "مستشفى بعلبك الحكومي",
          },
          {
            name: "مستشفى بشري الحكومي",
          },
          {
            name: "مستشفى بنت جبيل الحكومي",
          },
          {
            name: "مستشفى ضهر الباشق الحكومي الجامعي",
          },
          {
            name: "مستشفى الدكتور عبدالله الراسي الحكومي",
          },
          {
            name: "مستشفى اهدن الحكومي",
          },
          {
            name: "مستشفى فتوح كسروان الحكومي",
          },
          {
            name: "مستشفى بيروت الحكومي - الكرنتينا",
          },
          {
            name: "مستشفى حاصبيا الحكومي",
          },
          {
            name: "  مستشفى الهرمل الحكومي",
          },
          {
            name: "مستشفى جزين الحكومي",
          },
          {
            name: "مستشفى قانا",
          },
          {
            name: "مستشفى قرطبا الحكومي",
          },
          {
            name: "مستشفى مرجعيون الحكومي",
          },
          {
            name: "مستشفى ميس الجبل الحكومي",
          },
          {
            name: "مستشفى النبطية الحكومي",
          },
          {
            name: "مستشفى اورانج ناسو الحكومي",
          },
          {
            name: "مستشفى الرئيس الياس الهراوي الحكومي",
          },
          {
            name: "مستشفى راشيا الحكومي",
          },
          {
            name: "مستشفى صيدا الحكومي الجامعي",
          },
          {
            name: "مستشفى سبلين الحكومي",
          },
          {
            name: "مستشفى الشحار الغربي الحكومي",
          },
          {
            name: "مستشفى سير الضنية الحكومي",
          },
          {
            name: "مستشفى صور الحكومي",
          },
          {
            name: "مستشفى تنورين الحكومي",
          },
          {
            name: "مستشفى تبنين الحكومي",
          },
          {
            name: "مستشفى طرابلس الحكومي",
          },
        ],
      },
    ],
  },
  {
    name: "وزارة الصناعة",
    children: [
      {
        name: "المديريّة العامّة لوزارة الصناعة",
      },
      {
        name: "مؤسسة المقاييس والمواصفات",
      },
      {
        name: "معهد البحوث الصناعيّة",
      },
    ],
  },
  {
    name: "وزارة الإتصالات",
    children: [
      {
        name: "وزارة الإتصالات - المصلحة الإداريّة المشتركة",
      },
      {
        name: "المديريّة العامّة للإستثمار والصيانة",
      },
      {
        name: "المديريّة العامّة للإنشاء والتجهيز",
      },
      {
        name: "المديريّة العامّة للبريد",
      },
      {
        name: "هيئة أوجيرو",
      },
      {
        name: "الهيئة المنظمة للإتصالات",
      },
      {
        name: "شركة تاتش",
      },
      {
        name: "شركة ألفا",
      },
    ],
  },
  {
    name: "وزارة الثقافة",
    children: [
      {
        name: "المديريّة العامّة للثقافة",
      },
      {
        name: "المديريّة العامّة للآثار",
      },
      {
        name: "المعهد الوطني العالي للموسيقى (الكونسرفاتوار)",
      },
      {
        name: "قصر الأونيسكو",
      },
      {
        name: "المتحف الوطني",
      },
      {
        name: "المكتبة الوطنيّة – الصنائع",
      },
      {
        name: "المكتبة الوطنيّة – بعقلين",
      },
    ],
  },
  {
    name: "وزارة الزراعة",
    children: [
      {
        name: "المديريّة العامّة لوزارة الزراعة",
      },
      {
        name: "مديرية العامة للتعاونيات",
      },
      {
        name: "مصلحة الأبحاث العلميّة الزراعيّة",
      },
      {
        name: "المشروع الأخضر",
      },
    ],
  },
  {
    name: "وزارة السياحة",
    children: [
      {
        name: "المديريّة العامّة للشؤون السياحيّة",
      },
      {
        name: "شركة ماباس (الشركة المالكة لحق استثمار مغارة جعيتا)",
      },
    ],
  },
  {
    name: "وزارة الشؤون الاجتماعيّة",
    children: [
      {
        name: "المديريّة العامّة للشؤون الاجتماعيّة",
      },
      {
        name: "مديرية الخدمات",
      },
      {
        name: "مديرية التنمية الاجتماعيّة",
      },
      {
        name: "برنامج تأمين حقوق المعوقين",
      },
      {
        name: "المجلس الأعلى للطفولة",
      },
      {
        name: "المؤسسة العامّة للإسكان",
      },
      {
        name: "اللجنة الوطنية لمحو الأمية وتعليم الكبار",
      },
      {
        name: "مركز التدريب الإجتماعي",
      },
      {
        name: "الهيئة الوطنية لشؤون المسنين",
      },
    ],
  },
  {
    name: "وزارة الإقتصاد والتجارة",
    children: [
      {
        name: "المديريّة العامّة للإقتصاد والتجارة",
      },
      {
        name: "المديريّة العامّة للحبوب والشمندر السكّري",
      },
      {
        name: "مديرية حماية المستهلك",
      },
      {
        name: "معرض رشيد كرامي – طرابلس",
      },
      {
        name: "غرف التجارة والصناعة والزراعة",
      },
    ],
  },
  {
    name: "وزارة العمل",
    children: [
      {
        name: "المديريّة العامّة لوزارة العمل",
      },
      {
        name: "المؤسسة الوطنيّة للإستخدام",
      },
      {
        name: "الصندوق الوطني للضمان الإجتماعي",
      },
    ],
  },
  {
    name: "وزارة الإعلام",
    children: [
      {
        name: "المديريّة العامّة لوزارة الإعلام",
      },
      {
        name: "مديرية الإذاعة",
      },
      {
        name: "المجلس الوطني للإعلام",
      },
      {
        name: "الوكالة الوطنيّة للإعلام",
      },
      {
        name: "تلفزيون لبنان",
      },
    ],
  },
  {
    name: "وزارة الشباب والرياضة",
    children: [
      {
        name: "المديريّة العامّة للشباب والرياضة",
      },
      {
        name: "مصلحة المدينة الرياضيّة - المؤسسة العامة للمنشآت الرياضية والكشفية والشبابية",
      },
    ],
  },
  {
    name: "وزارة الدفاع الوطني",
    children: [
      {
        name: "المديريّة العامّة لوزارة الدفاع",
      },
      {
        name: "قيادة الجيش اللبناني",
      },
    ],
  },
  {
    name: "وزارة البيئة",
    children: [
      {
        name: "المديريّة العامّة لوزارة البيئة",
      },
    ],
  },
  {
    name: "وزارة المهجرّين",
    children: [
      {
        name: "وزارة المهجرّين - الجهاز التنفيذي",
      },
    ],
  },
  {
    name: "مكتب وزير الدولة لشؤون التنمية الإداريّة",
    value: 1,
  },
];

const ForceDirectedTreeJuvenile = ({ t, i18n, data, displayContent }) => {
  const ID = uuid();

  useLayoutEffect(() => {
    let chart = am4core.create(ID, am4plugins_forceDirected.ForceDirectedTree);
    chart.responsive.enabled = true;
    chart.rtl = Boolean(i18n.language === "ar");
    // chart.data = data; //.sort((a, b) => a.value - b.value);

    let networkSeries = chart.series.push(
      new am4plugins_forceDirected.ForceDirectedSeries()
    );

    networkSeries.data = i18n.language === "ar" ? treeAr : tree;

    networkSeries.dataFields.linkWith = "linkWith";
    networkSeries.dataFields.name = "name";
    networkSeries.dataFields.id = "name";
    networkSeries.dataFields.value = "value";
    networkSeries.dataFields.children = "children";

    networkSeries.nodes.template.tooltipText = "{name}";
    networkSeries.nodes.template.fillOpacity = 1;

    networkSeries.nodes.template.label.text = "{name}";
    networkSeries.nodes.template.label.wrap = true;
    networkSeries.fontSize = 10;
    networkSeries.maxRadius = am4core.percent(6);
    networkSeries.minRadius = am4core.percent(6);
    networkSeries.manyBodyStrength = -10;
    networkSeries.nodes.template.label.hideOversized = true;
    networkSeries.dataFields.collapsed = "off";

    // Start collapsed
    networkSeries.maxLevels = 1;

    // Expand single level only
    networkSeries.nodes.template.expandAll = false;
    networkSeries.nodes.template.cursorOverStyle =
      am4core.MouseCursorStyle.pointer;

    // Close other nodes when one is opened
    networkSeries.nodes.template.events.on("hit", function (ev) {
      var targetNode = ev.target;
      if (targetNode.isActive) {
        networkSeries.nodes.each(function (node) {
          if (
            targetNode !== node &&
            node.isActive &&
            targetNode.dataItem.level === node.dataItem.level
          ) {
            node.isActive = false;
          }
        });
      }
      displayContent(targetNode.dataItem.dataContext);
    });

    return () => {
      chart.dispose();
    };
  }, [data]);

  return (
    <div
      id={ID}
      style={{ width: "100vw", height: "100vh", letterSpacing: 0 }}
    ></div>
  );
};

export default withTranslation()(ForceDirectedTreeJuvenile);
